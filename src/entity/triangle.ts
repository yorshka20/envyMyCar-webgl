export class Triangle {
  name: string;

  vertices: Float32Array;
  triangleIndices: Uint16Array;
  numVertices: number;
  numTriangles: number;

  constructor() {
    this.name = 'Triangle';

    this.vertices = new Float32Array([0.0, 0.0, 0.0, 0.5, 0.0, -1.0, -0.5, 0, -1]);

    this.triangleIndices = new Uint16Array([0, 1, 2]);

    this.numVertices = 3;
    this.numTriangles = 1;
  }
}
