import { Game } from './game';

type HandleKeyCallback = (on: boolean) => void;

interface NvmcObject {
  vertexBuffer: WebGLBuffer | null;
  vertices: Float32Array;
  indexBufferTriangles: WebGLBuffer | null;
  triangleIndices: Uint16Array;
  indexBuffer: WebGLBuffer | null;
  indexBufferEdges: WebGLBuffer | null;

  numVertices: number;
  numTriangles: number;
}

export class NvmcClient {
  private game: Game;

  private handleKeyMap: Record<string, HandleKeyCallback> = {};

  constructor() {
    this.game = new Game();

    this.onInitialize();
  }

  onInitialize() {
    this.log('onInitialize');

    this.handleKey('w', (on: boolean) => {
      this.game.setState('playerAccelerate', on);
    });
    this.handleKey('s', (on: boolean) => {
      this.game.setState('playerBrake', on);
    });
    this.handleKey('a', (on: boolean) => {
      this.game.setState('playerSteerLeft', on);
    });
    this.handleKey('d', (on: boolean) => {
      this.game.setState('playerSteerRight', on);
    });
  }

  createObjectBuffer(gl: WebGL2RenderingContext, object: NvmcObject) {
    object.vertexBuffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, object.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, object.vertices, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    object.indexBufferTriangles = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, object.indexBufferTriangles);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, object.triangleIndices, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

    // create edges
    const edges = new Uint16Array(object.numTriangles * 3 * 2);
    for (let i = 0; i < object.numTriangles; i++) {
      edges[i * 6 + 0] = object.triangleIndices[i * 3 + 0];
      edges[i * 6 + 1] = object.triangleIndices[i * 3 + 1];
      edges[i * 6 + 2] = object.triangleIndices[i * 3 + 0];
      edges[i * 6 + 3] = object.triangleIndices[i * 3 + 2];
      edges[i * 6 + 4] = object.triangleIndices[i * 3 + 1];
      edges[i * 6 + 5] = object.triangleIndices[i * 3 + 2];
    }

    object.indexBufferEdges = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, object.indexBufferEdges);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, edges, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
  }

  private handleKey(key: string, callback: HandleKeyCallback) {
    this.handleKeyMap[key] = callback;
  }

  private log(content: string) {
    console.log('[NVMCClient] ' + content);
  }
}
