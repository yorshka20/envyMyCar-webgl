/// <reference types="vite/client" />

declare global {
  interface Window {
    // uniformShader: new (gl: WebGL2RenderingContext) => UniformShader;
  }
}

declare global {
  interface Window {
    SglObjectBase: Function;
    SglRequest: Function;
    SglXHRRequestBase: Function;
    SglXHRRequest: Function;
    SglTextRequest: Function;
    SglJSONRequest: Function;
    SglBinaryRequest: Function;
    SglImageRequest: Function;
    SglAggregateRequest: Function;
    SglVec2: {
      dup: Function;
      scalar: Function;
      zero: Function;
      one: Function;
      maxNumber: Function;
      minNumber: Function;
      to3: Function;
      to4: Function;
      neg: Function;
      add: Function;
      adds: Function;
      sub: Function;
      subs: Function;
      ssub: Function;
      mul: Function;
      muls: Function;
      div: Function;
      divs: Function;
      sdiv: Function;
      rcp: Function;
      dot: Function;
      cross: Function;
      perp: Function;
      sqLength: Function;
      length: Function;
      normalize: Function;
      abs: Function;
      acos: Function;
      asin: Function;
      atan: Function;
      atan2: Function;
      ceil: Function;
      clamp: Function;
      cos: Function;
      degToRad: Function;
      exp: Function;
      floor: Function;
      lerp: Function;
      ln: Function;
      log: Function;
      log2: Function;
      log10: Function;
      max: Function;
      min: Function;
      pow: Function;
      radToDeg: Function;
      random: Function;
      random01: Function;
      random11: Function;
      randomRange: Function;
      round: Function;
      sin: Function;
      sqrt: Function;
      tan: Function;
      copy$: Function;
      neg$: Function;
      add$: Function;
      adds$: Function;
      sub$: Function;
      subs$: Function;
      ssub$: Function;
      mul$: Function;
      muls$: Function;
      div$: Function;
      divs$: Function;
      sdiv$: Function;
      perp$: Function;
      normalize$: Function;
    };
    SglVec3: {
      dup: Function;
      scalar: Function;
      zero: Function;
      one: Function;
      maxNumber: Function;
      minNumber: Function;
      to2: Function;
      to4: Function;
      neg: Function;
      add: Function;
      adds: Function;
      sub: Function;
      subs: Function;
      ssub: Function;
      mul: Function;
      muls: Function;
      div: Function;
      divs: Function;
      sdiv: Function;
      rcp: Function;
      dot: Function;
      cross: Function;
      sqLength: Function;
      length: Function;
      normalize: Function;
      abs: Function;
      acos: Function;
      asin: Function;
      atan: Function;
      atan2: Function;
      ceil: Function;
      clamp: Function;
      cos: Function;
      degToRad: Function;
      exp: Function;
      floor: Function;
      lerp: Function;
      ln: Function;
      log: Function;
      log2: Function;
      log10: Function;
      max: Function;
      min: Function;
      pow: Function;
      radToDeg: Function;
      random: Function;
      random01: Function;
      random11: Function;
      randomRange: Function;
      round: Function;
      sin: Function;
      sqrt: Function;
      tan: Function;
      copy$: Function;
      neg$: Function;
      add$: Function;
      adds$: Function;
      sub$: Function;
      subs$: Function;
      ssub$: Function;
      mul$: Function;
      muls$: Function;
      div$: Function;
      divs$: Function;
      sdiv$: Function;
      normalize$: Function;
    };
    SglVec4: {
      dup: Function;
      scalar: Function;
      zero: Function;
      one: Function;
      maxNumber: Function;
      minNumber: Function;
      to2: Function;
      to3: Function;
      neg: Function;
      add: Function;
      adds: Function;
      sub: Function;
      subs: Function;
      ssub: Function;
      mul: Function;
      muls: Function;
      div: Function;
      divs: Function;
      sdiv: Function;
      rcp: Function;
      dot: Function;
      cross: Function;
      sqLength: Function;
      length: Function;
      normalize: Function;
      project: Function;
      abs: Function;
      acos: Function;
      asin: Function;
      atan: Function;
      atan2: Function;
      ceil: Function;
      clamp: Function;
      cos: Function;
      degToRad: Function;
      exp: Function;
      floor: Function;
      lerp: Function;
      ln: Function;
      log: Function;
      log2: Function;
      log10: Function;
      max: Function;
      min: Function;
      pow: Function;
      radToDeg: Function;
      random: Function;
      random01: Function;
      random11: Function;
      randomRange: Function;
      round: Function;
      sin: Function;
      sqrt: Function;
      tan: Function;
      copy$: Function;
      neg$: Function;
      add$: Function;
      adds$: Function;
      sub$: Function;
      subs$: Function;
      ssub$: Function;
      mul$: Function;
      muls$: Function;
      div$: Function;
      divs$: Function;
      sdiv$: Function;
      normalize$: Function;
    };
    SglMat3: {
      dup: Function;
      scalar: Function;
      zero: Function;
      one: Function;
      diag: Function;
      identity: Function;
      to44: Function;
      mul2: Function;
      mul3: Function;
      transpose: Function;
    };
    SglMat4: {
      dup: Function;
      scalar: Function;
      zero: Function;
      one: Function;
      diag: Function;
      identity: Function;
      to33: Function;
      elem: Function;
      elem$: Function;
      row: Function;
      row$: Function;
      col: Function;
      col$: Function;
      isIdentity: Function;
      neg: Function;
      add: Function;
      sub: Function;
      mul: Function;
      muls: Function;
      mul3: Function;
      mul4: Function;
      rcp: Function;
      compMul: Function;
      compDiv: Function;
      transpose: Function;
      determinant: Function;
      inverse: Function;
      inverseTranspose33: Function;
      trace: Function;
      translation: Function;
      rotationAngleAxis: Function;
      scaling: Function;
      lookAt: Function;
      ortho: Function;
      frustum: Function;
      perspective: Function;
      copy$: Function;
      identity$: Function;
      neg$: Function;
      add$: Function;
      sub$: Function;
      mul$: Function;
      muls$: Function;
      compMul$: Function;
      compDiv$: Function;
      transpose$: Function;
      invert$: Function;
      translate$: Function;
      rotateAngleAxis$: Function;
      scale$: Function;
    };
    SglQuat: {
      dup: Function;
      identity: Function;
      inverse: Function;
      mul: Function;
      muls: Function;
      normalize: Function;
      from33: Function;
      to33: Function;
      from44: Function;
      to44: Function;
      fromAngleAxis: Function;
      toAngleAxis: Function;
      fromEulerAngles: Function;
      toEulerAngles: Function;
      copy$: Function;
      identity$: Function;
      invert$: Function;
      mul$: Function;
      muls$: Function;
      normalize$: Function;
    };
    SglModel: Function;
    SglTechnique: Function;
    SglModelRenderer: Function;
    SglMatrixStack: new (...args: any) => SglMatrixStack;
    SglViewportStack: Function;
    SglDepthRangeStack: Function;
    SglTransformationStack: Function;
    SglCanvasHandler: Function;
    SglTimer: Function;
    SglContext: {
      WEBGL_STRING: string;
      DEFAULT_UNPACK_FLIP_Y: boolean;
      DEFAULT_UNPACK_PREMULTIPLY_ALPHA: boolean;
      DEFAULT_UNPACK_COLORSPACE_CONVERSION: number;
      get: Function;
      _prepareContex: Function;
      _addExtension: Function;
      _setup_SGL_current_binding: Function;
      _setup_SGL_wrapper_notify: Function;
      _setup_SGL_direct_state_access: Function;
      hijack: Function;
      isHijacked: Function;
      getHijacked: Function;
      setStandardGLUnpack: Function;
    };
    SglObjectGL: Function;
    SglBuffer: Function;
    SglVertexBuffer: Function;
    SglIndexBuffer: Function;
    SglFramebuffer: Function;
    SglProgram: Function;
    SglRenderbuffer: Function;
    SglShader: Function;
    SglVertexShader: Function;
    SglFragmentShader: Function;
    SglTexture: Function;
    SglTexture2D: Function;
    SglTextureCubeMap: Function;
    sglGenerateUID: Function;
    sglGetElementById: Function;
    sglGetElementText: Function;
    sglReadText: Function;
    sglRequestText: Function;
    sglReadJSON: Function;
    sglRequestJSON: Function;
    sglReadBinary: Function;
    sglRequestBinary: Function;
    sglRequestImage: Function;
    sglAbs: Function;
    sglAcos: Function;
    sglAsin: Function;
    sglAtan: Function;
    sglAtan2: Function;
    sglCeil: Function;
    sglClamp: Function;
    sglCos: Function;
    sglDegToRad: Function;
    sglExp: Function;
    sglFloor: Function;
    sglLerp: Function;
    sglLn: Function;
    sglLog: Function;
    sglLog2: Function;
    sglLog10: Function;
    sglMax: Function;
    sglMin: Function;
    sglPow: Function;
    sglRadToDeg: Function;
    sglRandom: Function;
    sglRandom01: Function;
    sglRandom11: Function;
    sglRandomRange: Function;
    sglRound: Function;
    sglSin: Function;
    sglSqrt: Function;
    sglTan: Function;
    sglProject: Function;
    sglUnproject: Function;
    sglTypeSize: Function;
    sglTypeToGL: Function;
    sglTypeFromGL: Function;
    sglTypeSizeFromGL: Function;
    sglTypeToTypedArrayConstructor: Function;
    sglPrimitiveToGL: Function;
    sglInstanceOf: Function;
    sglIsNumber: Function;
    sglIsString: Function;
    sglIsFunction: Function;
    sglIsArray: Function;
    sglIsTypedArray: Function;
    sglExtend: Function;
    sglDefineClassGetter: Function;
    sglDefineClassSetter: Function;
    sglDefineObjectGetter: Function;
    sglDefineObjectSetter: Function;
    sglHandleCanvas: Function;
    sglHandleCanvasOnLoad: Function;
    sglGetDefaultValue: Function;
    sglGetDefaultObject: Function;
    sglSetDefaultValues: Function;
    sglGetAttrib4fv: Function;
    sglGetTime: Function;
    SGL_DEFAULT: {};
    SGL_DONT_CARE: {};
    SGL_EMPTY_STRING: string;
    SGL_EMPTY_OBJECT: {};
    SGL_EMPTY_ARRAY: object;
    SGL_EMPTY_FUNCTION: Function;
    SGL_DEG_TO_RAD: number;
    SGL_E: number;
    SGL_LN2: number;
    SGL_LN10: number;
    SGL_LOG2E: number;
    SGL_LOG10E: number;
    SGL_PI: number;
    SGL_RAD_TO_DEG: number;
    SGL_SQRT2: number;
    SGL_MAX_VALUE: number;
    SGL_MIN_VALUE: number;
    SGL_MAX_NUMBER: number;
    SGL_MIN_NUMBER: number;
    SGL_NAN: number;
    SGL_INFINITY: number;
    SGL_LITTLE_ENDIAN: boolean;
    SGL_BIG_ENDIAN: boolean;
    SGL_NO_TYPE: number;
    SGL_INT8: number;
    SGL_UINT8: number;
    SGL_INT16: number;
    SGL_UINT16: number;
    SGL_INT32: number;
    SGL_UINT32: number;
    SGL_FLOAT32: number;
    SGL_SIZEOF_INT8: number;
    SGL_SIZEOF_UINT8: number;
    SGL_SIZEOF_INT16: number;
    SGL_SIZEOF_UINT16: number;
    SGL_SIZEOF_INT32: number;
    SGL_SIZEOF_UINT32: number;
    SGL_SIZEOF_FLOAT32: number;
    SGL_POINTS: number;
    SGL_LINES: number;
    SGL_LINE_LOOP: number;
    SGL_LINE_STRIP: number;
    SGL_TRIANGLES: number;
    SGL_TRIANGLE_FAN: number;
    SGL_TRIANGLE_STRIP: number;
    SGL_VERSION_MAJOR: number;
    SGL_VERSION_MINOR: number;
    SGL_VERSION_REVISION: number;
    SGL_VERSION_STRING: string;
  }
}

export {}; // export an empty object to make it a module
