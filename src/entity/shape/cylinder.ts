import type { NvmcObject } from './base-shape';

export class Cylinder implements NvmcObject {
  name: string = 'Cylinder';

  vertices: Float32Array = new Float32Array(0);
  triangleIndices: Uint16Array = new Uint16Array(0);
  numVertices: number = 0;
  numTriangles: number = 0;

  constructor(private resolution: number) {
    this.vertices = new Float32Array(3 * (2 * this.resolution + 2));
    this.initVertex();
    this.initTriangle();
  }

  private initVertex() {
    const radius = 1;
    let angle: number;
    const step = (Math.PI * 2) / this.resolution;

    // lower circle
    let vertexOffset = 0;
    for (let i = 0; i < this.resolution; i++) {
      angle = i * step;
      this.vertices[vertexOffset] = Math.cos(angle) * radius;
      this.vertices[vertexOffset + 1] = 0;
      this.vertices[vertexOffset + 2] = Math.sin(angle) * radius;
      vertexOffset += 3;
    }

    // upper circle
    for (let i = 0; i < this.resolution; i++) {
      angle = i * step;
      this.vertices[vertexOffset] = Math.cos(angle) * radius;
      this.vertices[vertexOffset + 1] = 2;
      this.vertices[vertexOffset + 2] = Math.sin(angle) * radius;
      vertexOffset += 3;
    }

    this.vertices[vertexOffset] = 0;
    this.vertices[vertexOffset + 1] = 2;
    this.vertices[vertexOffset + 2] = 0;

    this.numVertices = this.vertices.length / 3;
  }

  private initTriangle() {
    this.triangleIndices = new Uint16Array(3 * 4 * this.resolution);

    // lateral surface
    let triangleOffset = 0;
    for (let i = 0; i < this.resolution; i++) {
      this.triangleIndices[triangleOffset] = i;
      this.triangleIndices[triangleOffset + 1] = (i + 1) % this.resolution;
      this.triangleIndices[triangleOffset + 2] = (i % this.resolution) + this.resolution;
      triangleOffset += 3;

      this.triangleIndices[triangleOffset] = (i % this.resolution) + this.resolution;
      this.triangleIndices[triangleOffset + 1] = (i + 1) % this.resolution;
      this.triangleIndices[triangleOffset + 2] = ((i + 1) % this.resolution) + this.resolution;
      triangleOffset += 3;
    }

    // bottom part of the cylinder
    for (let i = 0; i < this.resolution; i++) {
      this.triangleIndices[triangleOffset] = i;
      this.triangleIndices[triangleOffset + 1] = (i + 1) % this.resolution;
      this.triangleIndices[triangleOffset + 2] = 2 * this.resolution;
      triangleOffset += 3;
    }

    // top part of the cylinder
    for (let i = 0; i < this.resolution; i++) {
      this.triangleIndices[triangleOffset] = this.resolution + 1;
      this.triangleIndices[triangleOffset + 1] = ((i + 1) % this.resolution) + this.resolution;
      this.triangleIndices[triangleOffset + 2] = 2 * this.resolution + 1;
      triangleOffset += 3;
    }

    this.numTriangles = this.triangleIndices.length / 3;
  }
}
