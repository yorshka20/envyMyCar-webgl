export interface IBaseShape {
  name: string;
}

export interface NvmcObject extends IBaseShape {
  vertices: Float32Array;
  triangleIndices: Uint16Array;

  numVertices: number;
  numTriangles: number;
}
