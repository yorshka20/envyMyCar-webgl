import type { NvmcObject } from './base-shape';

// the size is assumed to be 2x2x2
export class Cube implements NvmcObject {
  name: string = 'Cube';

  vertices: Float32Array;
  triangleIndices: Uint16Array;
  numVertices: number;
  numTriangles: number;

  vertexBuffer: WebGLBuffer | null = null;
  indexBufferTriangles: WebGLBuffer | null = null;
  indexBufferEdges: WebGLBuffer | null = null;

  constructor() {
    // prettier-ignore
    this.vertices = new Float32Array([
			-1.0, -1.0, 1.0,
			1.0, -1.0, 1.0,
			-1.0, 1.0, 1.0,
			1.0, 1.0, 1.0,
			-1.0, -1.0, -1.0,
			1.0, -1.0, -1.0
			-1.0, 1.0, -1.0,
			1.0, 1.0, -1.0,
		])

    // prettier-ignore
    this.triangleIndices = new Uint16Array([
			0, 1, 2, 2, 1, 3, // front face
			5, 4, 7, 7, 4, 6, // back face
			4, 0, 6, 6, 0, 2, // left face
			1, 5, 3, 3, 5, 7, // right face
			2, 3, 6, 6, 3, 7, // top face
			4, 5, 0, 0, 5, 1, // bottom face
		])

    this.numVertices = this.vertices.length;
    this.numTriangles = this.triangleIndices.length;
  }
}
