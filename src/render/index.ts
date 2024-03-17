export function render(canvas: HTMLCanvasElement) {
  //

  setupWebGL(canvas);

  setupWhatToDraw();

  setupHowToDraw();

  draw();
}

let gl: WebGL2RenderingContext;

function setGL(webgl: WebGL2RenderingContext) {
  gl = webgl;
}

export function getGl(): WebGL2RenderingContext {
  return gl!;
}

function setupWebGL(canvas: HTMLCanvasElement) {
  // the tutorial use webgl, but we choose to use webgl2 in order to use the latest features.
  const gl = canvas.getContext('webgl2');
  if (!gl) {
    return;
  }

  setGL(gl);
}

function getPositionAttribIndex() {
  return 0;
}

function setupWhatToDraw() {
  const gl = getGl();

  const typedPositions = new Float32Array([
    0.0,
    0.0, // 1st vertex
    1.0,
    0.0, // 2nd vertex
    0.0,
    1.0, // 3rd vertex
  ]);

  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, typedPositions, gl.STATIC_DRAW);

  const positionAttribIndex = getPositionAttribIndex();

  gl.enableVertexAttribArray(positionAttribIndex);
  gl.vertexAttribPointer(positionAttribIndex, 2, gl.FLOAT, false, 0, 0);
}

function setupHowToDraw() {
  const vertexShader = createVertexShader();

  const fragmentShader = createFragmentShader();

  if (!vertexShader || !fragmentShader) {
    return;
  }

  const gl = getGl();
  const program = gl.createProgram();
  if (!program) {
    return;
  }
  const positionAttribIndex = getPositionAttribIndex();

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.bindAttribLocation(program, positionAttribIndex, 'aPosition');
  gl.linkProgram(program);
  gl.useProgram(program);
}

function createVertexShader() {
  const gl = getGl();

  const vsSource = `
	attribute vec2 aPosition;
	void main(void) {
		gl_Position = vec4(aPosition, 0.0, 1.0);
	}
	`;

  const vertexShader = gl.createShader(gl.VERTEX_SHADER);
  if (!vertexShader) {
    return;
  }
  gl.shaderSource(vertexShader, vsSource);
  gl.compileShader(vertexShader);

  return vertexShader;
}

function createFragmentShader() {
  const gl = getGl();

  const fsSource = `
	void main(void) {
		gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
	}
	`;

  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  if (!fragmentShader) {
    return;
  }
  gl.shaderSource(fragmentShader, fsSource);
  gl.compileShader(fragmentShader);

  return fragmentShader;
}

function draw() {
  const gl = getGl();

  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
}
