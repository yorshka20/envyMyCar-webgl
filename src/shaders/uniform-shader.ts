const vertexShaderSource =
  '\
    uniform   mat4 uModelViewMatrix;              \n\
    uniform   mat4 uProjectionMatrix;             \n\
    attribute vec3 aPosition;                     \n\
    void main(void)                               \n\
    {                                             \n\
      gl_Position = uProjectionMatrix *           \n\
      uModelViewMatrix * vec4(aPosition, 1.0);    \n\
    }                                             \n\
  ';

const fragmentShaderSource =
  '\
    precision highp float;                        \n\
    uniform vec4 uColor;                          \n\
    void main(void)                               \n\
    {                                             \n\
      gl_FragColor = vec4(uColor);                \n\
    }                                             \n\
  ';

export class UniformShader {
  shaderProgram: WebGLProgram | null = null;

  aPositionIndex: number = 0;
  uModelViewMatrixLocation: WebGLUniformLocation | null = null;
  uProjectionMatrixLocation: WebGLUniformLocation | null = null;
  uColorLocation: WebGLUniformLocation | null = null;

  constructor(gl: WebGL2RenderingContext) {
    // create the vertex shader
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    if (!vertexShader) {
      return;
    }

    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);

    // create the fragment shader
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    if (!fragmentShader) {
      return;
    }
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(fragmentShader);

    // Create the shader program
    const aPositionIndex = 0;
    const shaderProgram = gl.createProgram();
    if (!shaderProgram) {
      return;
    }
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.bindAttribLocation(shaderProgram, aPositionIndex, 'aPosition');
    gl.linkProgram(shaderProgram);

    // If creating the shader program failed, alert
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      let str = 'Unable to initialize the shader program.\n\n';
      str += 'VS:\n' + gl.getShaderInfoLog(vertexShader) + '\n\n';
      str += 'FS:\n' + gl.getShaderInfoLog(fragmentShader) + '\n\n';
      str += 'PROG:\n' + gl.getProgramInfoLog(shaderProgram);
      alert(str);
    }

    this.aPositionIndex = aPositionIndex;
    this.uModelViewMatrixLocation = gl.getUniformLocation(shaderProgram, 'uModelViewMatrix');
    this.uProjectionMatrixLocation = gl.getUniformLocation(shaderProgram, 'uProjectionMatrix');
    this.uColorLocation = gl.getUniformLocation(shaderProgram, 'uColor');

    this.shaderProgram = shaderProgram;
  }
}
