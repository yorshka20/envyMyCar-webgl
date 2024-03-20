import type { NvmcObject } from './base-shape';

// index 0 is the apex
// index 1 ~ n is the edge points of bottom surface
// index n ~ 2n is the center points of bottom surface
export class Cone implements NvmcObject {
  name: string = 'Cone';

  vertices: Float32Array = new Float32Array(0);
  triangleIndices: Uint16Array = new Uint16Array(0);
  numVertices: number = 0;
  numTriangles: number = 0;

  vertexBuffer: WebGLBuffer | null = null;
  indexBufferTriangles: WebGLBuffer | null = null;
  indexBufferEdges: WebGLBuffer | null = null;

  constructor(private resolution: number) {
    this.vertices = new Float32Array(3 * (this.resolution + 2));

    // apex of the core
    this.vertices[0] = 0.0;
    this.vertices[1] = 2.0;
    this.vertices[2] = 0.0;

    // the base of the cone
    this.initVertex();

    this.initTriangle();
  }

  private initVertex() {
    const radius = 1;
    let angle: number;
    const step = (Math.PI * 2) / this.resolution;

    let vertexOffset = 3;
    for (let i = 0; i < this.resolution; i++) {
      angle = i * step;
      this.vertices[vertexOffset] = Math.cos(angle) * radius;
      this.vertices[vertexOffset + 1] = 0;
      this.vertices[vertexOffset + 2] = Math.sin(angle) * radius;
      vertexOffset += 3;
    }

    this.vertices[vertexOffset] = 0;
    this.vertices[vertexOffset + 1] = 0;
    this.vertices[vertexOffset + 2] = 0;

    this.numVertices = this.vertices.length / 3;
  }

  private initTriangle() {
    this.triangleIndices = new Uint16Array(3 * 2 * this.resolution);

    // lateral surface
    let triangleOffset = 0;
    for (let i = 0; i < this.resolution; i++) {
      this.triangleIndices[triangleOffset] = 0;
      this.triangleIndices[triangleOffset + 1] = (i % this.resolution) + 1;
      this.triangleIndices[triangleOffset + 2] = ((i + 1) % this.resolution) + 1;
      triangleOffset += 3;
    }

    // bottom part of the cone
    for (let i = 0; i < this.resolution; i++) {
      this.triangleIndices[triangleOffset] = this.resolution + 1;
      this.triangleIndices[triangleOffset + 1] = (i % this.resolution) + 1;
      this.triangleIndices[triangleOffset + 2] = ((i + 1) % this.resolution) + 1;
      triangleOffset += 3;
    }

    this.numTriangles = this.triangleIndices.length / 3;
  }
}
