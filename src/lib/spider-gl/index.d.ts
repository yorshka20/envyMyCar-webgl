declare namespace SpiderGL {
  export const TAG: number;
  export function openNamespace(): void;
  export namespace Version {
    export const VERSION_MAJOR: number;
    export const VERSION_MINOR: number;
    export const VERSION_REVISION: number;
    export const VERSION_STRING: string;
  }
  export namespace Core {
    export const DEFAULT: {};
    export const DONT_CARE: {};
    export const EMPTY_STRING: string;
    export const EMPTY_OBJECT: {};
    export const EMPTY_ARRAY: object;
    export const EMPTY_FUNCTION: () => void;
    export const generateUID: () => void;
    export const ObjectBase: () => void;
  }
  export namespace Type {
    export const LITTLE_ENDIAN: boolean;
    export const BIG_ENDIAN: boolean;
    export const NO_TYPE: number;
    export const INT8: number;
    export const UINT8: number;
    export const INT16: number;
    export const UINT16: number;
    export const INT32: number;
    export const UINT32: number;
    export const FLOAT32: number;
    export const SIZEOF_INT8: number;
    export const SIZEOF_UINT8: number;
    export const SIZEOF_INT16: number;
    export const SIZEOF_UINT16: number;
    export const SIZEOF_INT32: number;
    export const SIZEOF_UINT32: number;
    export const SIZEOF_FLOAT32: number;
    export function typeSize(): void;
    export function typeToGL(): void;
    export function typeFromGL(): void;
    export function typeSizeFromGL(): void;
    export function typeToTypedArrayConstructor(): void;
    export const POINTS: number;
    export const LINES: number;
    export const LINE_LOOP: number;
    export const LINE_STRIP: number;
    export const TRIANGLES: number;
    export const TRIANGLE_FAN: number;
    export const TRIANGLE_STRIP: number;
    export function primitiveToGL(): void;
    export function instanceOf(): void;
    export function isNumber(): void;
    export function isString(): void;
    export function isFunction(): void;
    export function isArray(): void;
    export function isTypedArray(): void;
    export function extend(): void;
    export function defineClassGetter(): void;
    export function defineClassSetter(): void;
    export function defineObjectGetter(): void;
    export function defineObjectSetter(): void;
  }
  export namespace Utility {
    export function getDefaultValue(): void;
    export function getDefaultObject(): void;
    export function setDefaultValues(): void;
    export function getAttrib4fv(): void;
    export function getTime(): void;
    export function Timer(): void;
  }
  export namespace DOM {
    export function getElementById(): void;
    export function getElementText(): void;
  }
  export namespace IO {
    export function Request(): void;
    export function XHRRequestBase(): void;
    export function XHRRequest(): void;
    export function TextRequest(): void;
    export function readText(): void;
    export function requestText(): void;
    export function JSONRequest(): void;
    export function readJSON(): void;
    export function requestJSON(): void;
    export function BinaryRequest(): void;
    export function readBinary(): void;
    export function requestBinary(): void;
    export function ImageRequest(): void;
    export function requestImage(): void;
    export function AggregateRequest(): void;
  }
  export namespace Math {
    export const DEG_TO_RAD: number;
    export const E: number;
    export const LN2: number;
    export const LN10: number;
    export const LOG2E: number;
    export const LOG10E: number;
    export const PI: number;
    export const RAD_TO_DEG: number;
    export const SQRT2: number;
    export const MAX_VALUE: number;
    export const MIN_VALUE: number;
    export const MAX_NUMBER: number;
    export const MIN_NUMBER: number;
    export const NAN: number;
    export const INFINITY: number;
    export function abs(): void;
    export function acos(): void;
    export function asin(): void;
    export function atan(): void;
    export function atan2(): void;
    export function ceil(): void;
    export function clamp(): void;
    export function cos(): void;
    export function degToRad(): void;
    export function exp(): void;
    export function floor(): void;
    export function lerp(): void;
    export function ln(): void;
    export function log(): void;
    export function log2(): void;
    export function log10(): void;
    export function max(): void;
    export function min(): void;
    export function pow(): void;
    export function radToDeg(): void;
    export function random(): void;
    export function random01(): void;
    export function random11(): void;
    export function randomRange(): void;
    export function round(): void;
    export function sin(): void;
    export function sqrt(): void;
    export function tan(): void;
    export namespace Vec2 {
      export function dup(): void;
      export function scalar(): void;
      export function zero(): void;
      export function one(): void;
      export function maxNumber(): void;
      export function minNumber(): void;
      export function to3(): void;
      export function to4(): void;
      export function neg(): void;
      export function add(): void;
      export function adds(): void;
      export function sub(): void;
      export function subs(): void;
      export function ssub(): void;
      export function mul(): void;
      export function muls(): void;
      export function div(): void;
      export function divs(): void;
      export function sdiv(): void;
      export function rcp(): void;
      export function dot(): void;
      export function cross(): void;
      export function perp(): void;
      export function sqLength(): void;
      export function length(): void;
      export function normalize(): void;
      export function abs(): void;
      export function acos(): void;
      export function asin(): void;
      export function atan(): void;
      export function atan2(): void;
      export function ceil(): void;
      export function clamp(): void;
      export function cos(): void;
      export function degToRad(): void;
      export function exp(): void;
      export function floor(): void;
      export function lerp(): void;
      export function ln(): void;
      export function log(): void;
      export function log2(): void;
      export function log10(): void;
      export function max(): void;
      export function min(): void;
      export function pow(): void;
      export function radToDeg(): void;
      export function random(): void;
      export function random01(): void;
      export function random11(): void;
      export function randomRange(): void;
      export function round(): void;
      export function sin(): void;
      export function sqrt(): void;
      export function tan(): void;
      export function copy$(): void;
      export function neg$(): void;
      export function add$(): void;
      export function adds$(): void;
      export function sub$(): void;
      export function subs$(): void;
      export function ssub$(): void;
      export function mul$(): void;
      export function muls$(): void;
      export function div$(): void;
      export function divs$(): void;
      export function sdiv$(): void;
      export function perp$(): void;
      export function normalize$(): void;
    }
    export namespace Vec3 {
      export function dup(): void;
      export function scalar(): void;
      export function zero(): void;
      export function one(): void;
      export function maxNumber(): void;
      export function minNumber(): void;
      export function to2(): void;
      export function to4(): void;
      export function neg(): void;
      export function add(): void;
      export function adds(): void;
      export function sub(): void;
      export function subs(): void;
      export function ssub(): void;
      export function mul(): void;
      export function muls(): void;
      export function div(): void;
      export function divs(): void;
      export function sdiv(): void;
      export function rcp(): void;
      export function dot(): void;
      export function cross(): void;
      export function sqLength(): void;
      export function length(): void;
      export function normalize(): void;
      export function abs(): void;
      export function acos(): void;
      export function asin(): void;
      export function atan(): void;
      export function atan2(): void;
      export function ceil(): void;
      export function clamp(): void;
      export function cos(): void;
      export function degToRad(): void;
      export function exp(): void;
      export function floor(): void;
      export function lerp(): void;
      export function ln(): void;
      export function log(): void;
      export function log2(): void;
      export function log10(): void;
      export function max(): void;
      export function min(): void;
      export function pow(): void;
      export function radToDeg(): void;
      export function random(): void;
      export function random01(): void;
      export function random11(): void;
      export function randomRange(): void;
      export function round(): void;
      export function sin(): void;
      export function sqrt(): void;
      export function tan(): void;
      export function copy$(): void;
      export function neg$(): void;
      export function add$(): void;
      export function adds$(): void;
      export function sub$(): void;
      export function subs$(): void;
      export function ssub$(): void;
      export function mul$(): void;
      export function muls$(): void;
      export function div$(): void;
      export function divs$(): void;
      export function sdiv$(): void;
      export function perp$(): void;
      export function normalize$(): void;
    }
    export namespace Vec4 {
      export function dup(): void;
      export function scalar(): void;
      export function zero(): void;
      export function one(): void;
      export function maxNumber(): void;
      export function minNumber(): void;
      export function to2(): void;
      export function to3(): void;
      export function neg(): void;
      export function add(): void;
      export function adds(): void;
      export function sub(): void;
      export function subs(): void;
      export function ssub(): void;
      export function mul(): void;
      export function muls(): void;
      export function div(): void;
      export function divs(): void;
      export function sdiv(): void;
      export function rcp(): void;
      export function dot(): void;
      export function cross(): void;
      export function sqLength(): void;
      export function length(): void;
      export function normalize(): void;
      export function project(): void;
      export function abs(): void;
      export function acos(): void;
      export function asin(): void;
      export function atan(): void;
      export function atan2(): void;
      export function ceil(): void;
      export function clamp(): void;
      export function cos(): void;
      export function degToRad(): void;
      export function exp(): void;
      export function floor(): void;
      export function lerp(): void;
      export function ln(): void;
      export function log(): void;
      export function log2(): void;
      export function log10(): void;
      export function max(): void;
      export function min(): void;
      export function pow(): void;
      export function radToDeg(): void;
      export function random(): void;
      export function random01(): void;
      export function random11(): void;
      export function randomRange(): void;
      export function round(): void;
      export function sin(): void;
      export function sqrt(): void;
      export function tan(): void;
      export function copy$(): void;
      export function neg$(): void;
      export function add$(): void;
      export function adds$(): void;
      export function sub$(): void;
      export function subs$(): void;
      export function ssub$(): void;
      export function mul$(): void;
      export function muls$(): void;
      export function div$(): void;
      export function divs$(): void;
      export function sdiv$(): void;
      export function normalize$(): void;
    }
    export namespace Mat3 {
      export function dup(): void;
      export function scalar(): void;
      export function zero(): void;
      export function one(): void;
      export function diag(): void;
      export function identity(): void;
      export function to44(): void;
      export function mul2(): void;
      export function mul3(): void;
      export function transpose(): void;
    }
    export namespace Mat4 {
      export function dup(): void;
      export function scalar(): void;
      export function zero(): void;
      export function one(): void;
      export function diag(): void;
      export function identity(): void;
      export function to33(): void;
      export function elem(): void;
      export function elem$(): void;
      export function row(): void;
      export function row$(): void;
      export function col(): void;
      export function col$(): void;
      export function isIdentity(): void;
      export function neg(): void;
      export function add(): void;
      export function sub(): void;
      export function mul(): void;
      export function muls(): void;
      export function mul3(): void;
      export function mul4(): void;
      export function rcp(): void;
      export function compMul(): void;
      export function compDiv(): void;
      export function transpose(): void;
      export function determinant(): void;
      export function inverse(): void;
      export function inverseTranspose33(): void;
      export function trace(): void;
      export function translation(): void;
      export function rotationAngleAxis(): void;
      export function scaling(): void;
      export function lookAt(): void;
      export function ortho(): void;
      export function frustum(): void;
      export function perspective(): void;
      export function copy$(): void;
      export function identity$(): void;
      export function neg$(): void;
      export function add$(): void;
      export function sub$(): void;
      export function mul$(): void;
      export function muls$(): void;
      export function compMul$(): void;
      export function compDiv$(): void;
      export function transpose$(): void;
      export function invert$(): void;
      export function translate$(): void;
      export function rotateAngleAxis$(): void;
      export function scale$(): void;
    }
    export namespace Quat {
      export function dup(): void;
      export function identity(): void;
      export function inverse(): void;
      export function mul(): void;
      export function muls(): void;
      export function normalize(): void;
      export function from33(): void;
      export function to33(): void;
      export function from44(): void;
      export function to44(): void;
      export function fromAngleAxis(): void;
      export function toAngleAxis(): void;
      export function fromEulerAngles(): void;
      export function toEulerAngles(): void;
      export function copy$(): void;
      export function identity$(): void;
      export function invert$(): void;
      export function mul$(): void;
      export function muls$(): void;
      export function normalize$(): void;
    }
    export function project(): void;
    export function unproject(): void;
  }
  export namespace Space {
    export function MatrixStack(): void;
    export function ViewportStack(): void;
    export function DepthRangeStack(): void;
    export function TransformationStack(): void;
  }
  export namespace WebGL {
    export namespace Context {
      export const WEBGL_STRING: string;
      export const DEFAULT_UNPACK_FLIP_Y: boolean;
      export const DEFAULT_UNPACK_PREMULTIPLY_ALPHA: boolean;
      export const DEFAULT_UNPACK_COLORSPACE_CONVERSION: number;
      export function get(): void;
      export function _prepareContex(): void;
      export function _addExtension(): void;
      export function _setup_SGL_current_binding(): void;
      export function _setup_SGL_wrapper_notify(): void;
      export function _setup_SGL_direct_state_access(): void;
      export function hijack(): void;
      export function isHijacked(): void;
      export function getHijacked(): void;
      export function setStandardGLUnpack(): void;
    }
    export function ObjectGL(): void;
    export function Buffer(): void;
    export function VertexBuffer(): void;
    export function IndexBuffer(): void;
    export function Framebuffer(): void;
    export function Program(): void;
    export function Renderbuffer(): void;
    export function Shader(): void;
    export function VertexShader(): void;
    export function FragmentShader(): void;
    export function Texture(): void;
    export function Texture2D(): void;
    export function TextureCubeMap(): void;
  }
  export namespace Model {
    export function Model(): void;
    export function Technique(): void;
    export function ModelRenderer(): void;
  }
  export namespace UserInterface {
    export function CanvasHandler(): void;
    export function handleCanvas(): void;
    export function handleCanvasOnLoad(): void;
  }
}

export default SpiderGL;
