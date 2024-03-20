import type { NvmcObject } from './base-shape';

export class Triangle implements NvmcObject {
  name: string = 'Triangle';

  vertices: Float32Array;
  triangleIndices: Uint16Array;
  numVertices: number;
  numTriangles: number;

  vertexBuffer: WebGLBuffer | null = null;
  indexBufferTriangles: WebGLBuffer | null = null;
  indexBufferEdges: WebGLBuffer | null = null;

  constructor() {
    this.vertices = new Float32Array([0.0, 0.0, 0.0, 0.5, 0.0, -1.0, -0.5, 0, -1]);

    this.triangleIndices = new Uint16Array([0, 1, 2]);

    this.numVertices = 3;
    this.numTriangles = 1;
  }

  init(gl: WebGL2RenderingContext) {
    this.vertexBuffer = gl.createBuffer();
    this.indexBufferTriangles = gl.createBuffer();
    this.indexBufferEdges = gl.createBuffer();
  }
}
