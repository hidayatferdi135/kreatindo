/*! elementor - v3.0.4 - 30-08-2020 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 756);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(155);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(1);

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(137);

var setPrototypeOf = __webpack_require__(135);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(107);

var getPrototypeOf = __webpack_require__(16);

var isNativeReflectConstruct = __webpack_require__(148);

var possibleConstructorReturn = __webpack_require__(170);

function _createSuper(Derived) {
  var hasNativeReflectConstruct = isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = getPrototypeOf(this).constructor;
      result = _Reflect$construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return possibleConstructorReturn(this, result);
  };
}

module.exports = _createSuper;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var core = __webpack_require__(6);
var ctx = __webpack_require__(31);
var hide = __webpack_require__(24);
var has = __webpack_require__(19);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(76)('wks');
var uid = __webpack_require__(59);
var Symbol = __webpack_require__(8).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(66)('wks');
var uid = __webpack_require__(67);
var Symbol = __webpack_require__(17).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(22)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var IE8_DOM_DEFINE = __webpack_require__(114);
var toPrimitive = __webpack_require__(74);
var dP = Object.defineProperty;

exports.f = __webpack_require__(14) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(157);

var _Object$setPrototypeOf = __webpack_require__(115);

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(30);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(103);
var defined = __webpack_require__(65);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(201);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(15);
var createDesc = __webpack_require__(44);
module.exports = __webpack_require__(14) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(124);

var _Reflect$get = __webpack_require__(193);

var superPropBase = __webpack_require__(196);

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && _Reflect$get) {
    module.exports = _get = _Reflect$get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;

      var desc = _Object$getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(33)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(1);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(45);
var createDesc = __webpack_require__(102);
module.exports = __webpack_require__(27) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(38);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(65);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var hide = __webpack_require__(29);
var has = __webpack_require__(61);
var SRC = __webpack_require__(67)('src');
var $toString = __webpack_require__(143);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(55).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(124);

var _Object$defineProperty = __webpack_require__(1);

var _typeof = __webpack_require__(48);

var _WeakMap = __webpack_require__(263);

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var core = __webpack_require__(55);
var hide = __webpack_require__(29);
var redefine = __webpack_require__(35);
var ctx = __webpack_require__(73);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(116);
var enumBugKeys = __webpack_require__(78);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(325)();
}


/***/ }),
/* 42 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(57);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(18);
var IE8_DOM_DEFINE = __webpack_require__(129);
var toPrimitive = __webpack_require__(123);
var dP = Object.defineProperty;

exports.f = __webpack_require__(27) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(151);

var _Symbol = __webpack_require__(111);

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(50);
var createDesc = __webpack_require__(44);
var toIObject = __webpack_require__(20);
var toPrimitive = __webpack_require__(74);
var has = __webpack_require__(19);
var IE8_DOM_DEFINE = __webpack_require__(114);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(14) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(13);
var dPs = __webpack_require__(134);
var enumBugKeys = __webpack_require__(78);
var IE_PROTO = __webpack_require__(75)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(92)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(131).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(15).f;
var has = __webpack_require__(19);
var TAG = __webpack_require__(10)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 54 */,
/* 55 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 56 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(18);
var toObject = __webpack_require__(96);
var toLength = __webpack_require__(43);
var toInteger = __webpack_require__(57);
var advanceStringIndex = __webpack_require__(105);
var regExpExec = __webpack_require__(94);
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(95)('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),
/* 59 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(172)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(108)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 61 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(174);
var global = __webpack_require__(8);
var hide = __webpack_require__(24);
var Iterators = __webpack_require__(34);
var TO_STRING_TAG = __webpack_require__(10)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(10);


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(19);
var toObject = __webpack_require__(32);
var IE_PROTO = __webpack_require__(75)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 65 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(55);
var global = __webpack_require__(17);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(110) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 67 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(77);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 69 */,
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(59)('meta');
var isObject = __webpack_require__(9);
var has = __webpack_require__(19);
var setDesc = __webpack_require__(15).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(22)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 71 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 72 */,
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(91);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(76)('keys');
var uid = __webpack_require__(59);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(6);
var global = __webpack_require__(8);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(47) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 77 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 78 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var core = __webpack_require__(6);
var LIBRARY = __webpack_require__(47);
var wksExt = __webpack_require__(63);
var defineProperty = __webpack_require__(15).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(122);
var anObject = __webpack_require__(18);
var speciesConstructor = __webpack_require__(154);
var advanceStringIndex = __webpack_require__(105);
var toLength = __webpack_require__(43);
var callRegExpExec = __webpack_require__(94);
var regexpExec = __webpack_require__(88);
var fails = __webpack_require__(33);
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(95)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(220);

/***/ }),
/* 82 */,
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(7);
var core = __webpack_require__(6);
var fails = __webpack_require__(22);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 84 */,
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(12)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(29)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(31);
var call = __webpack_require__(139);
var isArrayIter = __webpack_require__(140);
var anObject = __webpack_require__(13);
var toLength = __webpack_require__(68);
var getIterFn = __webpack_require__(112);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 87 */,
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(106);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 89 */,
/* 90 */,
/* 91 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var document = __webpack_require__(8).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(113);
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(190);
var redefine = __webpack_require__(35);
var hide = __webpack_require__(29);
var fails = __webpack_require__(33);
var defined = __webpack_require__(42);
var wks = __webpack_require__(12);
var regexpExec = __webpack_require__(88);

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(42);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(56);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(120);
var defined = __webpack_require__(42);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(116);
var hiddenKeys = __webpack_require__(78).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 100 */
/***/ (function(module, exports) {



/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(56);
var TAG = __webpack_require__(10)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(56);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(247);

var iterableToArrayLimit = __webpack_require__(248);

var unsupportedIterableToArray = __webpack_require__(186);

var nonIterableRest = __webpack_require__(251);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(142)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(18);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(167);

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(47);
var $export = __webpack_require__(7);
var redefine = __webpack_require__(93);
var hide = __webpack_require__(24);
var Iterators = __webpack_require__(34);
var $iterCreate = __webpack_require__(173);
var setToStringTag = __webpack_require__(53);
var getPrototypeOf = __webpack_require__(64);
var ITERATOR = __webpack_require__(10)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(30);
var document = __webpack_require__(17).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(176);

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(101);
var ITERATOR = __webpack_require__(10)('iterator');
var Iterators = __webpack_require__(34);
module.exports = __webpack_require__(6).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(46);
var TAG = __webpack_require__(12)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(14) && !__webpack_require__(22)(function () {
  return Object.defineProperty(__webpack_require__(92)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(160);

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(19);
var toIObject = __webpack_require__(20);
var arrayIndexOf = __webpack_require__(165)(false);
var IE_PROTO = __webpack_require__(75)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 117 */,
/* 118 */,
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(18);
var toLength = __webpack_require__(43);
var advanceStringIndex = __webpack_require__(105);
var regExpExec = __webpack_require__(94);

// @@match logic
__webpack_require__(95)('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(46);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(30);
var cof = __webpack_require__(46);
var MATCH = __webpack_require__(12)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(30);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(191);

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(24);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 127 */,
/* 128 */,
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(27) && !__webpack_require__(33)(function () {
  return Object.defineProperty(__webpack_require__(109)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 130 */,
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(8).document;
module.exports = document && document.documentElement;


/***/ }),
/* 132 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 133 */,
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(15);
var anObject = __webpack_require__(13);
var getKeys = __webpack_require__(40);

module.exports = __webpack_require__(14) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(115);

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(31);
var IObject = __webpack_require__(103);
var toObject = __webpack_require__(32);
var toLength = __webpack_require__(68);
var asc = __webpack_require__(245);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(163);

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(8);
var has = __webpack_require__(19);
var DESCRIPTORS = __webpack_require__(14);
var $export = __webpack_require__(7);
var redefine = __webpack_require__(93);
var META = __webpack_require__(70).KEY;
var $fails = __webpack_require__(22);
var shared = __webpack_require__(76);
var setToStringTag = __webpack_require__(53);
var uid = __webpack_require__(59);
var wks = __webpack_require__(10);
var wksExt = __webpack_require__(63);
var wksDefine = __webpack_require__(79);
var enumKeys = __webpack_require__(177);
var isArray = __webpack_require__(97);
var anObject = __webpack_require__(13);
var isObject = __webpack_require__(9);
var toObject = __webpack_require__(32);
var toIObject = __webpack_require__(20);
var toPrimitive = __webpack_require__(74);
var createDesc = __webpack_require__(44);
var _create = __webpack_require__(52);
var gOPNExt = __webpack_require__(178);
var $GOPD = __webpack_require__(51);
var $GOPS = __webpack_require__(71);
var $DP = __webpack_require__(15);
var $keys = __webpack_require__(40);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(99).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(50).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(47)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(24)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(13);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(34);
var ITERATOR = __webpack_require__(10)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(37);
var $includes = __webpack_require__(146)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(85)('includes');


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(57);
var defined = __webpack_require__(42);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(66)('native-function-to-string', Function.toString);


/***/ }),
/* 144 */,
/* 145 */,
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(98);
var toLength = __webpack_require__(43);
var toAbsoluteIndex = __webpack_require__(198);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 147 */,
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(107);

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(287);

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(171);

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(10)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 153 */,
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(18);
var aFunction = __webpack_require__(91);
var SPECIES = __webpack_require__(12)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(156);
var $Object = __webpack_require__(6).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(14), 'Object', { defineProperty: __webpack_require__(15).f });


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(158);

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(159);
module.exports = __webpack_require__(6).Object.getPrototypeOf;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(32);
var $getPrototypeOf = __webpack_require__(64);

__webpack_require__(83)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(161);
module.exports = __webpack_require__(6).Object.setPrototypeOf;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(7);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(162).set });


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(9);
var anObject = __webpack_require__(13);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(31)(Function.call, __webpack_require__(51).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(164);
var $Object = __webpack_require__(6).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(52) });


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(20);
var toLength = __webpack_require__(68);
var toAbsoluteIndex = __webpack_require__(166);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(77);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(168);
module.exports = __webpack_require__(6).Reflect.construct;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(7);
var create = __webpack_require__(52);
var aFunction = __webpack_require__(38);
var anObject = __webpack_require__(13);
var isObject = __webpack_require__(9);
var fails = __webpack_require__(22);
var bind = __webpack_require__(169);
var rConstruct = (__webpack_require__(8).Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(38);
var isObject = __webpack_require__(9);
var invoke = __webpack_require__(132);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(48);

var assertThisInitialized = __webpack_require__(49);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(60);
__webpack_require__(62);
module.exports = __webpack_require__(63).f('iterator');


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(77);
var defined = __webpack_require__(65);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(52);
var descriptor = __webpack_require__(44);
var setToStringTag = __webpack_require__(53);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(24)(IteratorPrototype, __webpack_require__(10)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(175);
var step = __webpack_require__(149);
var Iterators = __webpack_require__(34);
var toIObject = __webpack_require__(20);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(108)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 175 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(138);
__webpack_require__(100);
__webpack_require__(179);
__webpack_require__(180);
module.exports = __webpack_require__(6).Symbol;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(40);
var gOPS = __webpack_require__(71);
var pIE = __webpack_require__(50);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(20);
var gOPN = __webpack_require__(99).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(79)('asyncIterator');


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(79)('observable');


/***/ }),
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(15);
var createDesc = __webpack_require__(44);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var _Array$from = __webpack_require__(200);

var arrayLikeToArray = __webpack_require__(199);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return _Array$from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(150);

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 188 */,
/* 189 */
/***/ (function(module, exports) {

module.exports = wp.i18n;

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(88);
__webpack_require__(37)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(192);
var $Object = __webpack_require__(6).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(20);
var $getOwnPropertyDescriptor = __webpack_require__(51).f;

__webpack_require__(83)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(194);

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(195);
module.exports = __webpack_require__(6).Reflect.get;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(51);
var getPrototypeOf = __webpack_require__(64);
var has = __webpack_require__(19);
var $export = __webpack_require__(7);
var isObject = __webpack_require__(9);
var anObject = __webpack_require__(13);

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(16);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),
/* 197 */,
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(57);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 199 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(228);

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(202);
module.exports = __webpack_require__(6).Object.keys;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(32);
var $keys = __webpack_require__(40);

__webpack_require__(83)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(230);

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(14);
var getKeys = __webpack_require__(40);
var gOPS = __webpack_require__(71);
var pIE = __webpack_require__(50);
var toObject = __webpack_require__(32);
var IObject = __webpack_require__(103);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(22)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 211 */,
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(1);

var _Object$defineProperties = __webpack_require__(289);

var _Object$getOwnPropertyDescriptors = __webpack_require__(303);

var _Object$getOwnPropertyDescriptor = __webpack_require__(124);

var _Object$getOwnPropertySymbols = __webpack_require__(307);

var _Object$keys = __webpack_require__(23);

var defineProperty = __webpack_require__(28);

function ownKeys(object, enumerableOnly) {
  var keys = _Object$keys(object);

  if (_Object$getOwnPropertySymbols) {
    var symbols = _Object$getOwnPropertySymbols(object);

    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return _Object$getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty(target, key, source[key]);
      });
    } else if (_Object$getOwnPropertyDescriptors) {
      _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

module.exports = _objectSpread2;

/***/ }),
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(221);
module.exports = __webpack_require__(6).Array.isArray;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(7);

$export($export.S, 'Array', { isArray: __webpack_require__(97) });


/***/ }),
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(60);
__webpack_require__(229);
module.exports = __webpack_require__(6).Array.from;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(31);
var $export = __webpack_require__(7);
var toObject = __webpack_require__(32);
var call = __webpack_require__(139);
var isArrayIter = __webpack_require__(140);
var toLength = __webpack_require__(68);
var createProperty = __webpack_require__(185);
var getIterFn = __webpack_require__(112);

$export($export.S + $export.F * !__webpack_require__(152)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(62);
__webpack_require__(60);
module.exports = __webpack_require__(231);


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(101);
var ITERATOR = __webpack_require__(10)('iterator');
var Iterators = __webpack_require__(34);
module.exports = __webpack_require__(6).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(8);
var $export = __webpack_require__(7);
var meta = __webpack_require__(70);
var fails = __webpack_require__(22);
var hide = __webpack_require__(24);
var redefineAll = __webpack_require__(126);
var forOf = __webpack_require__(86);
var anInstance = __webpack_require__(125);
var isObject = __webpack_require__(9);
var setToStringTag = __webpack_require__(53);
var dP = __webpack_require__(15).f;
var each = __webpack_require__(136)(0);
var DESCRIPTORS = __webpack_require__(14);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(7);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(7);
var aFunction = __webpack_require__(38);
var ctx = __webpack_require__(31);
var forOf = __webpack_require__(86);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 235 */,
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(249);

/***/ }),
/* 237 */,
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(11));

var _extends2 = _interopRequireDefault(__webpack_require__(187));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(28));

var _router = __webpack_require__(340);

var _router2 = _interopRequireDefault(__webpack_require__(344));

var _icon = _interopRequireDefault(__webpack_require__(345));

__webpack_require__(644);

var Button = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Button, _React$Component);

  var _super = (0, _createSuper2.default)(Button);

  function Button() {
    (0, _classCallCheck2.default)(this, Button);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Button, [{
    key: "getCssId",
    value: function getCssId() {
      return this.props.id;
    }
  }, {
    key: "getClassName",
    value: function getClassName() {
      var baseClassName = 'eps-button',
          classes = [baseClassName, this.props.className];
      return classes.concat(this.getStylePropsClasses(baseClassName)).filter(function (classItem) {
        return '' !== classItem;
      }).join(' ');
    }
  }, {
    key: "getStylePropsClasses",
    value: function getStylePropsClasses(baseClassName) {
      var _this = this;

      var styleProps = ['color', 'size', 'variant'],
          stylePropClasses = [];
      styleProps.forEach(function (styleProp) {
        var stylePropValue = _this.props[styleProp];

        if (stylePropValue) {
          stylePropClasses.push(baseClassName + '--' + stylePropValue);
        }
      });
      return stylePropClasses;
    }
  }, {
    key: "getIcon",
    value: function getIcon() {
      if (this.props.icon) {
        var tooltip = this.props.tooltip || this.props.text;

        var icon = /*#__PURE__*/_react.default.createElement(_icon.default, {
          className: this.props.icon,
          "aria-hidden": "true",
          title: tooltip
        });

        var screenReaderText = '';

        if (this.props.hideText) {
          screenReaderText = /*#__PURE__*/_react.default.createElement("span", {
            className: "sr-only"
          }, tooltip);
        }

        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, icon, screenReaderText);
      }

      return '';
    }
  }, {
    key: "getText",
    value: function getText() {
      return this.props.hideText ? '' : /*#__PURE__*/_react.default.createElement("span", null, this.props.text);
    }
  }, {
    key: "render",
    value: function render() {
      var attributes = {},
          id = this.getCssId(),
          className = this.getClassName(); // Add attributes only if they are not empty.

      if (id) {
        attributes.id = id;
      }

      if (className) {
        attributes.className = className;
      }

      if (this.props.onClick) {
        attributes.onClick = this.props.onClick;
      }

      var buttonContent = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.getIcon(), this.getText());

      if (this.props.url) {
        if (0 === this.props.url.indexOf('http')) {
          return /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
            href: this.props.url,
            target: this.props.target
          }, attributes), buttonContent);
        } // @see https://reach.tech/router/example/active-links.


        attributes.getProps = function (props) {
          if (props.isCurrent) {
            attributes.className += ' active';
          }

          return {
            className: attributes.className
          };
        };

        return /*#__PURE__*/_react.default.createElement(_router.LocationProvider, {
          history: _router2.default.appHistory
        }, /*#__PURE__*/_react.default.createElement(_router.Link, (0, _extends2.default)({
          to: this.props.url
        }, attributes), buttonContent));
      }

      return /*#__PURE__*/_react.default.createElement("div", attributes, buttonContent);
    }
  }]);
  return Button;
}(_react.default.Component);

exports.default = Button;
(0, _defineProperty2.default)(Button, "propTypes", {
  text: PropTypes.string.isRequired,
  hideText: PropTypes.bool,
  icon: PropTypes.string,
  tooltip: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  target: PropTypes.string
});
(0, _defineProperty2.default)(Button, "defaultProps", {
  id: '',
  className: '',
  variant: '',
  target: '_parent'
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(246);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var isArray = __webpack_require__(97);
var SPECIES = __webpack_require__(10)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__(81);

function _arrayWithHoles(arr) {
  if (_Array$isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

var _getIterator = __webpack_require__(236);

var _isIterable = __webpack_require__(209);

var _Symbol = __webpack_require__(111);

function _iterableToArrayLimit(arr, i) {
  if (typeof _Symbol === "undefined" || !_isIterable(Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(62);
__webpack_require__(60);
module.exports = __webpack_require__(250);


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var get = __webpack_require__(112);
module.exports = __webpack_require__(6).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 251 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(264);

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(100);
__webpack_require__(62);
__webpack_require__(265);
__webpack_require__(267);
__webpack_require__(268);
module.exports = __webpack_require__(6).WeakMap;


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(8);
var each = __webpack_require__(136)(0);
var redefine = __webpack_require__(93);
var meta = __webpack_require__(70);
var assign = __webpack_require__(210);
var weak = __webpack_require__(266);
var isObject = __webpack_require__(9);
var validate = __webpack_require__(121);
var NATIVE_WEAK_MAP = __webpack_require__(121);
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(232)(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(126);
var getWeak = __webpack_require__(70).getWeak;
var anObject = __webpack_require__(13);
var isObject = __webpack_require__(9);
var anInstance = __webpack_require__(125);
var forOf = __webpack_require__(86);
var createArrayMethod = __webpack_require__(136);
var $has = __webpack_require__(19);
var validate = __webpack_require__(121);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(233)('WeakMap');


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(234)('WeakMap');


/***/ }),
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(288);
module.exports = __webpack_require__(6).Object.assign;


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(7);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(210) });


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(290);

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(291);
var $Object = __webpack_require__(6).Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(14), 'Object', { defineProperties: __webpack_require__(134) });


/***/ }),
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(317);

var iterableToArray = __webpack_require__(318);

var unsupportedIterableToArray = __webpack_require__(186);

var nonIterableSpread = __webpack_require__(319);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(304);

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(305);
module.exports = __webpack_require__(6).Object.getOwnPropertyDescriptors;


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(7);
var ownKeys = __webpack_require__(306);
var toIObject = __webpack_require__(20);
var gOPD = __webpack_require__(51);
var createProperty = __webpack_require__(185);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(99);
var gOPS = __webpack_require__(71);
var anObject = __webpack_require__(13);
var Reflect = __webpack_require__(8).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(308);

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(138);
module.exports = __webpack_require__(6).Object.getOwnPropertySymbols;


/***/ }),
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__(81);

var arrayLikeToArray = __webpack_require__(199);

function _arrayWithoutHoles(arr) {
  if (_Array$isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

var _Array$from = __webpack_require__(200);

var _isIterable = __webpack_require__(209);

var _Symbol = __webpack_require__(111);

function _iterableToArray(iter) {
  if (typeof _Symbol !== "undefined" && _isIterable(Object(iter))) return _Array$from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 319 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(326);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, PropTypes) {

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = Heading;

__webpack_require__(141);

function Heading(props) {
  var baseClassName = 'eps',
      allowedTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      classes = [props.className],
      tagName = allowedTags.includes(props.tag) ? props.tag : 'h1';

  if (props.variant) {
    classes.push(baseClassName + '-' + props.variant);
  }

  return React.createElement(tagName, {
    className: classes.filter(function (classItem) {
      return classItem;
    }).join(' ')
  }, props.children);
}

Heading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.arrayOf(PropTypes.object)]).isRequired,
  tag: PropTypes.string,
  variant: PropTypes.string.isRequired
};
Heading.defaultProps = {
  className: ''
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11), __webpack_require__(41)))

/***/ }),
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Link", function() { return /* binding */ Link; });
__webpack_require__.d(__webpack_exports__, "Location", function() { return /* binding */ es_Location; });
__webpack_require__.d(__webpack_exports__, "LocationProvider", function() { return /* binding */ es_LocationProvider; });
__webpack_require__.d(__webpack_exports__, "Match", function() { return /* binding */ es_Match; });
__webpack_require__.d(__webpack_exports__, "Redirect", function() { return /* binding */ es_Redirect; });
__webpack_require__.d(__webpack_exports__, "Router", function() { return /* binding */ es_Router; });
__webpack_require__.d(__webpack_exports__, "ServerLocation", function() { return /* binding */ es_ServerLocation; });
__webpack_require__.d(__webpack_exports__, "createHistory", function() { return /* reexport */ createHistory; });
__webpack_require__.d(__webpack_exports__, "createMemorySource", function() { return /* reexport */ createMemorySource; });
__webpack_require__.d(__webpack_exports__, "isRedirect", function() { return /* binding */ isRedirect; });
__webpack_require__.d(__webpack_exports__, "navigate", function() { return /* reexport */ history_navigate; });
__webpack_require__.d(__webpack_exports__, "redirectTo", function() { return /* binding */ redirectTo; });
__webpack_require__.d(__webpack_exports__, "globalHistory", function() { return /* reexport */ globalHistory; });
__webpack_require__.d(__webpack_exports__, "matchPath", function() { return /* reexport */ utils_match; });
__webpack_require__.d(__webpack_exports__, "useLocation", function() { return /* binding */ es_useLocation; });
__webpack_require__.d(__webpack_exports__, "useNavigate", function() { return /* binding */ es_useNavigate; });
__webpack_require__.d(__webpack_exports__, "useParams", function() { return /* binding */ es_useParams; });
__webpack_require__.d(__webpack_exports__, "useMatch", function() { return /* binding */ es_useMatch; });

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(11);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__(41);

// EXTERNAL MODULE: ../node_modules/invariant/browser.js
var browser = __webpack_require__(275);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// EXTERNAL MODULE: ../node_modules/create-react-context/lib/index.js
var lib = __webpack_require__(410);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ../node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}



// CONCATENATED MODULE: ../node_modules/@reach/router/es/lib/utils.js


////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var utils_pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      if (isSplat(routeSegment)) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        var param = routeSegment.slice(1) || "*";
        params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  false ? undefined : browser_default()(false) : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var utils_match = function match(path, uri) {
  return utils_pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)

var insertParams = function insertParams(path, params) {
  var _path$split = path.split("?"),
      pathBase = _path$split[0],
      _path$split$ = _path$split[1],
      query = _path$split$ === undefined ? "" : _path$split$;

  var segments = segmentize(pathBase);
  var constructedPath = "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
  var _params$location = params.location;
  _params$location = _params$location === undefined ? {} : _params$location;
  var _params$location$sear = _params$location.search,
      search = _params$location$sear === undefined ? "" : _params$location$sear;

  var searchSplit = search.split("?")[1] || "";
  constructedPath = addQuery(constructedPath, query, searchSplit);
  return constructedPath;
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment && segment[0] === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname) {
  for (var _len = arguments.length, query = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    query[_key - 1] = arguments[_key];
  }

  query = query.filter(function (q) {
    return q && q.length > 0;
  });
  return pathname + (query && query.length > 0 ? "?" + query.join("&") : "");
};

var reservedNames = ["uri", "path"];

/**
 * Shallow compares two objects.
 * @param {Object} obj1 The first object to compare.
 * @param {Object} obj2 The second object to compare.
 */
var shallowCompare = function shallowCompare(obj1, obj2) {
  var obj1Keys = Object.keys(obj1);
  return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function (key) {
    return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
  });
};

////////////////////////////////////////////////////////////////////////////////

// CONCATENATED MODULE: ../node_modules/@reach/router/es/lib/history.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getLocation = function getLocation(source) {
  var _source$location = source.location,
      search = _source$location.search,
      hash = _source$location.hash,
      href = _source$location.href,
      origin = _source$location.origin,
      protocol = _source$location.protocol,
      host = _source$location.host,
      hostname = _source$location.hostname,
      port = _source$location.port;
  var pathname = source.location.pathname;


  if (!pathname && href && canUseDOM) {
    var url = new URL(href);
    pathname = url.pathname;
  }

  return {
    pathname: encodeURI(decodeURI(pathname)),
    search: search,
    hash: hash,
    href: href,
    origin: origin,
    protocol: protocol,
    host: host,
    hostname: hostname,
    port: port,
    state: source.history.state,
    key: source.history.state && source.history.state.key || "initial"
  };
};

var createHistory = function createHistory(source, options) {
  var listeners = [];
  var location = getLocation(source);
  var transitioning = false;
  var resolveTransition = function resolveTransition() {};

  return {
    get location() {
      return location;
    },

    get transitioning() {
      return transitioning;
    },

    _onTransitionComplete: function _onTransitionComplete() {
      transitioning = false;
      resolveTransition();
    },
    listen: function listen(listener) {
      listeners.push(listener);

      var popstateListener = function popstateListener() {
        location = getLocation(source);
        listener({ location: location, action: "POP" });
      };

      source.addEventListener("popstate", popstateListener);

      return function () {
        source.removeEventListener("popstate", popstateListener);
        listeners = listeners.filter(function (fn) {
          return fn !== listener;
        });
      };
    },
    navigate: function navigate(to) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          state = _ref.state,
          _ref$replace = _ref.replace,
          replace = _ref$replace === undefined ? false : _ref$replace;

      if (typeof to === "number") {
        source.history.go(to);
      } else {
        state = _extends({}, state, { key: Date.now() + "" });
        // try...catch iOS Safari limits to 100 pushState calls
        try {
          if (transitioning || replace) {
            source.history.replaceState(state, null, to);
          } else {
            source.history.pushState(state, null, to);
          }
        } catch (e) {
          source.location[replace ? "replace" : "assign"](to);
        }
      }

      location = getLocation(source);
      transitioning = true;
      var transition = new Promise(function (res) {
        return resolveTransition = res;
      });
      listeners.forEach(function (listener) {
        return listener({ location: location, action: "PUSH" });
      });
      return transition;
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// Stores history entries in memory for testing or other platforms like Native
var createMemorySource = function createMemorySource() {
  var initialPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";

  var searchIndex = initialPath.indexOf("?");
  var initialLocation = {
    pathname: searchIndex > -1 ? initialPath.substr(0, searchIndex) : initialPath,
    search: searchIndex > -1 ? initialPath.substr(searchIndex) : ""
  };
  var index = 0;
  var stack = [initialLocation];
  var states = [null];

  return {
    get location() {
      return stack[index];
    },
    addEventListener: function addEventListener(name, fn) {},
    removeEventListener: function removeEventListener(name, fn) {},

    history: {
      get entries() {
        return stack;
      },
      get index() {
        return index;
      },
      get state() {
        return states[index];
      },
      pushState: function pushState(state, _, uri) {
        var _uri$split = uri.split("?"),
            pathname = _uri$split[0],
            _uri$split$ = _uri$split[1],
            search = _uri$split$ === undefined ? "" : _uri$split$;

        index++;
        stack.push({ pathname: pathname, search: search.length ? "?" + search : search });
        states.push(state);
      },
      replaceState: function replaceState(state, _, uri) {
        var _uri$split2 = uri.split("?"),
            pathname = _uri$split2[0],
            _uri$split2$ = _uri$split2[1],
            search = _uri$split2$ === undefined ? "" : _uri$split2$;

        stack[index] = { pathname: pathname, search: search };
        states[index] = state;
      },
      go: function go(to) {
        var newIndex = index + to;

        if (newIndex < 0 || newIndex > states.length - 1) {
          return;
        }

        index = newIndex;
      }
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// global history - uses window.history as the source if available, otherwise a
// memory history
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var getSource = function getSource() {
  return canUseDOM ? window : createMemorySource();
};

var globalHistory = createHistory(getSource());
var history_navigate = globalHistory.navigate;

////////////////////////////////////////////////////////////////////////////////


// CONCATENATED MODULE: ../node_modules/@reach/router/es/index.js
var es_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable jsx-a11y/anchor-has-content */








////////////////////////////////////////////////////////////////////////////////

var es_createNamedContext = function createNamedContext(name, defaultValue) {
  var Ctx = lib_default()(defaultValue);
  Ctx.displayName = name;
  return Ctx;
};

////////////////////////////////////////////////////////////////////////////////
// Location Context/Provider
var LocationContext = es_createNamedContext("Location");

// sets up a listener if there isn't one already so apps don't need to be
// wrapped in some top level provider
var es_Location = function Location(_ref) {
  var children = _ref.children;
  return external_React_default.a.createElement(
    LocationContext.Consumer,
    null,
    function (context) {
      return context ? children(context) : external_React_default.a.createElement(
        es_LocationProvider,
        null,
        children
      );
    }
  );
};

var es_LocationProvider = function (_React$Component) {
  _inherits(LocationProvider, _React$Component);

  function LocationProvider() {
    var _temp, _this, _ret;

    _classCallCheck(this, LocationProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      context: _this.getContext(),
      refs: { unlisten: null }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  LocationProvider.prototype.getContext = function getContext() {
    var _props$history = this.props.history,
        navigate = _props$history.navigate,
        location = _props$history.location;

    return { navigate: navigate, location: location };
  };

  LocationProvider.prototype.componentDidCatch = function componentDidCatch(error, info) {
    if (isRedirect(error)) {
      var _navigate = this.props.history.navigate;

      _navigate(error.uri, { replace: true });
    } else {
      throw error;
    }
  };

  LocationProvider.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.context.location !== this.state.context.location) {
      this.props.history._onTransitionComplete();
    }
  };

  LocationProvider.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var refs = this.state.refs,
        history = this.props.history;

    history._onTransitionComplete();
    refs.unlisten = history.listen(function () {
      Promise.resolve().then(function () {
        // TODO: replace rAF with react deferred update API when it's ready https://github.com/facebook/react/issues/13306
        requestAnimationFrame(function () {
          if (!_this2.unmounted) {
            _this2.setState(function () {
              return { context: _this2.getContext() };
            });
          }
        });
      });
    });
  };

  LocationProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    var refs = this.state.refs;

    this.unmounted = true;
    refs.unlisten();
  };

  LocationProvider.prototype.render = function render() {
    var context = this.state.context,
        children = this.props.children;

    return external_React_default.a.createElement(
      LocationContext.Provider,
      { value: context },
      typeof children === "function" ? children(context) : children || null
    );
  };

  return LocationProvider;
}(external_React_default.a.Component);

////////////////////////////////////////////////////////////////////////////////


es_LocationProvider.defaultProps = {
  history: globalHistory
};
 false ? undefined : void 0;
var es_ServerLocation = function ServerLocation(_ref2) {
  var url = _ref2.url,
      children = _ref2.children;

  var searchIndex = url.indexOf("?");
  var searchExists = searchIndex > -1;
  var pathname = void 0;
  var search = "";
  var hash = "";

  if (searchExists) {
    pathname = url.substring(0, searchIndex);
    search = url.substring(searchIndex);
  } else {
    pathname = url;
  }

  return external_React_default.a.createElement(
    LocationContext.Provider,
    {
      value: {
        location: {
          pathname: pathname,
          search: search,
          hash: hash
        },
        navigate: function navigate() {
          throw new Error("You can't call navigate on the server.");
        }
      }
    },
    children
  );
};
////////////////////////////////////////////////////////////////////////////////
// Sets baseuri and basepath for nested routers and links
var BaseContext = es_createNamedContext("Base", { baseuri: "/", basepath: "/" });

////////////////////////////////////////////////////////////////////////////////
// The main event, welcome to the show everybody.
var es_Router = function Router(props) {
  return external_React_default.a.createElement(
    BaseContext.Consumer,
    null,
    function (baseContext) {
      return external_React_default.a.createElement(
        es_Location,
        null,
        function (locationContext) {
          return external_React_default.a.createElement(es_RouterImpl, es_extends({}, baseContext, locationContext, props));
        }
      );
    }
  );
};

var es_RouterImpl = function (_React$PureComponent) {
  _inherits(RouterImpl, _React$PureComponent);

  function RouterImpl() {
    _classCallCheck(this, RouterImpl);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  RouterImpl.prototype.render = function render() {
    var _props = this.props,
        location = _props.location,
        _navigate2 = _props.navigate,
        basepath = _props.basepath,
        primary = _props.primary,
        children = _props.children,
        baseuri = _props.baseuri,
        _props$component = _props.component,
        component = _props$component === undefined ? "div" : _props$component,
        domProps = _objectWithoutProperties(_props, ["location", "navigate", "basepath", "primary", "children", "baseuri", "component"]);

    var routes = external_React_default.a.Children.toArray(children).reduce(function (array, child) {
      var routes = es_createRoute(basepath)(child);
      return array.concat(routes);
    }, []);
    var pathname = location.pathname;


    var match = utils_pick(routes, pathname);

    if (match) {
      var params = match.params,
          uri = match.uri,
          route = match.route,
          element = match.route.value;

      // remove the /* from the end for child routes relative paths

      basepath = route.default ? basepath : route.path.replace(/\*$/, "");

      var props = es_extends({}, params, {
        uri: uri,
        location: location,
        navigate: function navigate(to, options) {
          return _navigate2(resolve(to, uri), options);
        }
      });

      var clone = external_React_default.a.cloneElement(element, props, element.props.children ? external_React_default.a.createElement(
        es_Router,
        { location: location, primary: primary },
        element.props.children
      ) : undefined);

      // using 'div' for < 16.3 support
      var FocusWrapper = primary ? es_FocusHandler : component;
      // don't pass any props to 'div'
      var wrapperProps = primary ? es_extends({ uri: uri, location: location, component: component }, domProps) : domProps;

      return external_React_default.a.createElement(
        BaseContext.Provider,
        { value: { baseuri: uri, basepath: basepath } },
        external_React_default.a.createElement(
          FocusWrapper,
          wrapperProps,
          clone
        )
      );
    } else {
      // Not sure if we want this, would require index routes at every level
      // warning(
      //   false,
      //   `<Router basepath="${basepath}">\n\nNothing matched:\n\t${
      //     location.pathname
      //   }\n\nPaths checked: \n\t${routes
      //     .map(route => route.path)
      //     .join(
      //       "\n\t"
      //     )}\n\nTo get rid of this warning, add a default NotFound component as child of Router:
      //   \n\tlet NotFound = () => <div>Not Found!</div>
      //   \n\t<Router>\n\t  <NotFound default/>\n\t  {/* ... */}\n\t</Router>`
      // );
      return null;
    }
  };

  return RouterImpl;
}(external_React_default.a.PureComponent);

es_RouterImpl.defaultProps = {
  primary: true
};


var FocusContext = es_createNamedContext("Focus");

var es_FocusHandler = function FocusHandler(_ref3) {
  var uri = _ref3.uri,
      location = _ref3.location,
      component = _ref3.component,
      domProps = _objectWithoutProperties(_ref3, ["uri", "location", "component"]);

  return external_React_default.a.createElement(
    FocusContext.Consumer,
    null,
    function (requestFocus) {
      return external_React_default.a.createElement(es_FocusHandlerImpl, es_extends({}, domProps, {
        component: component,
        requestFocus: requestFocus,
        uri: uri,
        location: location
      }));
    }
  );
};

// don't focus on initial render
var initialRender = true;
var focusHandlerCount = 0;

var es_FocusHandlerImpl = function (_React$Component2) {
  _inherits(FocusHandlerImpl, _React$Component2);

  function FocusHandlerImpl() {
    var _temp2, _this4, _ret2;

    _classCallCheck(this, FocusHandlerImpl);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, _React$Component2.call.apply(_React$Component2, [this].concat(args))), _this4), _this4.state = {}, _this4.requestFocus = function (node) {
      if (!_this4.state.shouldFocus && node) {
        node.focus();
      }
    }, _temp2), _possibleConstructorReturn(_this4, _ret2);
  }

  FocusHandlerImpl.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var initial = prevState.uri == null;
    if (initial) {
      return es_extends({
        shouldFocus: true
      }, nextProps);
    } else {
      var myURIChanged = nextProps.uri !== prevState.uri;
      var navigatedUpToMe = prevState.location.pathname !== nextProps.location.pathname && nextProps.location.pathname === nextProps.uri;
      return es_extends({
        shouldFocus: myURIChanged || navigatedUpToMe
      }, nextProps);
    }
  };

  FocusHandlerImpl.prototype.componentDidMount = function componentDidMount() {
    focusHandlerCount++;
    this.focus();
  };

  FocusHandlerImpl.prototype.componentWillUnmount = function componentWillUnmount() {
    focusHandlerCount--;
    if (focusHandlerCount === 0) {
      initialRender = true;
    }
  };

  FocusHandlerImpl.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location && this.state.shouldFocus) {
      this.focus();
    }
  };

  FocusHandlerImpl.prototype.focus = function focus() {
    if (false) {}

    var requestFocus = this.props.requestFocus;


    if (requestFocus) {
      requestFocus(this.node);
    } else {
      if (initialRender) {
        initialRender = false;
      } else if (this.node) {
        // React polyfills [autofocus] and it fires earlier than cDM,
        // so we were stealing focus away, this line prevents that.
        if (!this.node.contains(document.activeElement)) {
          this.node.focus();
        }
      }
    }
  };

  FocusHandlerImpl.prototype.render = function render() {
    var _this5 = this;

    var _props2 = this.props,
        children = _props2.children,
        style = _props2.style,
        requestFocus = _props2.requestFocus,
        _props2$component = _props2.component,
        Comp = _props2$component === undefined ? "div" : _props2$component,
        uri = _props2.uri,
        location = _props2.location,
        domProps = _objectWithoutProperties(_props2, ["children", "style", "requestFocus", "component", "uri", "location"]);

    return external_React_default.a.createElement(
      Comp,
      es_extends({
        style: es_extends({ outline: "none" }, style),
        tabIndex: "-1",
        ref: function ref(n) {
          return _this5.node = n;
        }
      }, domProps),
      external_React_default.a.createElement(
        FocusContext.Provider,
        { value: this.requestFocus },
        this.props.children
      )
    );
  };

  return FocusHandlerImpl;
}(external_React_default.a.Component);

polyfill(es_FocusHandlerImpl);

var k = function k() {};

////////////////////////////////////////////////////////////////////////////////
var forwardRef = external_React_default.a.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = function forwardRef(C) {
    return C;
  };
}

var Link = forwardRef(function (_ref4, ref) {
  var innerRef = _ref4.innerRef,
      props = _objectWithoutProperties(_ref4, ["innerRef"]);

  return external_React_default.a.createElement(
    BaseContext.Consumer,
    null,
    function (_ref5) {
      var basepath = _ref5.basepath,
          baseuri = _ref5.baseuri;
      return external_React_default.a.createElement(
        es_Location,
        null,
        function (_ref6) {
          var location = _ref6.location,
              navigate = _ref6.navigate;

          var to = props.to,
              state = props.state,
              replace = props.replace,
              _props$getProps = props.getProps,
              getProps = _props$getProps === undefined ? k : _props$getProps,
              anchorProps = _objectWithoutProperties(props, ["to", "state", "replace", "getProps"]);

          var href = resolve(to, baseuri);
          var encodedHref = encodeURI(href);
          var isCurrent = location.pathname === encodedHref;
          var isPartiallyCurrent = startsWith(location.pathname, encodedHref);

          return external_React_default.a.createElement("a", es_extends({
            ref: ref || innerRef,
            "aria-current": isCurrent ? "page" : undefined
          }, anchorProps, getProps({ isCurrent: isCurrent, isPartiallyCurrent: isPartiallyCurrent, href: href, location: location }), {
            href: href,
            onClick: function onClick(event) {
              if (anchorProps.onClick) anchorProps.onClick(event);
              if (shouldNavigate(event)) {
                event.preventDefault();
                var shouldReplace = replace;
                if (typeof replace !== "boolean" && isCurrent) {
                  var _location$state = es_extends({}, location.state),
                      key = _location$state.key,
                      restState = _objectWithoutProperties(_location$state, ["key"]);

                  shouldReplace = shallowCompare(es_extends({}, state), restState);
                }
                navigate(href, {
                  state: state,
                  replace: shouldReplace
                });
              }
            }
          }));
        }
      );
    }
  );
});

Link.displayName = "Link";

 false ? undefined : void 0;

////////////////////////////////////////////////////////////////////////////////
function RedirectRequest(uri) {
  this.uri = uri;
}

var isRedirect = function isRedirect(o) {
  return o instanceof RedirectRequest;
};

var redirectTo = function redirectTo(to) {
  throw new RedirectRequest(to);
};

var es_RedirectImpl = function (_React$Component3) {
  _inherits(RedirectImpl, _React$Component3);

  function RedirectImpl() {
    _classCallCheck(this, RedirectImpl);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  // Support React < 16 with this hook
  RedirectImpl.prototype.componentDidMount = function componentDidMount() {
    var _props3 = this.props,
        navigate = _props3.navigate,
        to = _props3.to,
        from = _props3.from,
        _props3$replace = _props3.replace,
        replace = _props3$replace === undefined ? true : _props3$replace,
        state = _props3.state,
        noThrow = _props3.noThrow,
        baseuri = _props3.baseuri,
        props = _objectWithoutProperties(_props3, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    Promise.resolve().then(function () {
      var resolvedTo = resolve(to, baseuri);
      navigate(insertParams(resolvedTo, props), { replace: replace, state: state });
    });
  };

  RedirectImpl.prototype.render = function render() {
    var _props4 = this.props,
        navigate = _props4.navigate,
        to = _props4.to,
        from = _props4.from,
        replace = _props4.replace,
        state = _props4.state,
        noThrow = _props4.noThrow,
        baseuri = _props4.baseuri,
        props = _objectWithoutProperties(_props4, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    var resolvedTo = resolve(to, baseuri);
    if (!noThrow) redirectTo(insertParams(resolvedTo, props));
    return null;
  };

  return RedirectImpl;
}(external_React_default.a.Component);

var es_Redirect = function Redirect(props) {
  return external_React_default.a.createElement(
    BaseContext.Consumer,
    null,
    function (_ref7) {
      var baseuri = _ref7.baseuri;
      return external_React_default.a.createElement(
        es_Location,
        null,
        function (locationContext) {
          return external_React_default.a.createElement(es_RedirectImpl, es_extends({}, locationContext, { baseuri: baseuri }, props));
        }
      );
    }
  );
};

 false ? undefined : void 0;

////////////////////////////////////////////////////////////////////////////////
var es_Match = function Match(_ref8) {
  var path = _ref8.path,
      children = _ref8.children;
  return external_React_default.a.createElement(
    BaseContext.Consumer,
    null,
    function (_ref9) {
      var baseuri = _ref9.baseuri;
      return external_React_default.a.createElement(
        es_Location,
        null,
        function (_ref10) {
          var navigate = _ref10.navigate,
              location = _ref10.location;

          var resolvedPath = resolve(path, baseuri);
          var result = utils_match(resolvedPath, location.pathname);
          return children({
            navigate: navigate,
            location: location,
            match: result ? es_extends({}, result.params, {
              uri: result.uri,
              path: path
            }) : null
          });
        }
      );
    }
  );
};

////////////////////////////////////////////////////////////////////////////////
// Hooks

var es_useLocation = function useLocation() {
  var context = Object(external_React_["useContext"])(LocationContext);

  if (!context) {
    throw new Error("useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.location;
};

var es_useNavigate = function useNavigate() {
  var context = Object(external_React_["useContext"])(LocationContext);

  if (!context) {
    throw new Error("useNavigate hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.navigate;
};

var es_useParams = function useParams() {
  var context = Object(external_React_["useContext"])(BaseContext);

  if (!context) {
    throw new Error("useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = es_useLocation();

  var results = utils_match(context.basepath, location.pathname);

  return results ? results.params : null;
};

var es_useMatch = function useMatch(path) {
  if (!path) {
    throw new Error("useMatch(path: string) requires an argument of a string to match against");
  }
  var context = Object(external_React_["useContext"])(BaseContext);

  if (!context) {
    throw new Error("useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = es_useLocation();

  var resolvedPath = resolve(path, context.baseuri);
  var result = utils_match(resolvedPath, location.pathname);
  return result ? es_extends({}, result.params, {
    uri: result.uri,
    path: path
  }) : null;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var stripSlashes = function stripSlashes(str) {
  return str.replace(/(^\/+|\/+$)/g, "");
};

var es_createRoute = function createRoute(basepath) {
  return function (element) {
    if (!element) {
      return null;
    }

    if (element.type === external_React_default.a.Fragment && element.props.children) {
      return external_React_default.a.Children.map(element.props.children, createRoute(basepath));
    }
    !(element.props.path || element.props.default || element.type === es_Redirect) ?  false ? undefined : browser_default()(false) : void 0;

    !!(element.type === es_Redirect && (!element.props.from || !element.props.to)) ?  false ? undefined : browser_default()(false) : void 0;

    !!(element.type === es_Redirect && !validateRedirect(element.props.from, element.props.to)) ?  false ? undefined : browser_default()(false) : void 0;

    if (element.props.default) {
      return { value: element, default: true };
    }

    var elementPath = element.type === es_Redirect ? element.props.from : element.props.path;

    var path = elementPath === "/" ? basepath : stripSlashes(basepath) + "/" + stripSlashes(elementPath);

    return {
      value: element,
      default: element.props.default,
      path: element.props.children ? stripSlashes(path) + "/*" : path
    };
  };
};

var shouldNavigate = function shouldNavigate(event) {
  return !event.defaultPrevented && event.button === 0 && !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

////////////////////////////////////////////////////////////////////////


/***/ }),
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */
/***/ (function(module, exports) {

module.exports = elementorAppPackages.router;

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = Icon;

var _react = _interopRequireDefault(__webpack_require__(11));

function Icon(props) {
  return /*#__PURE__*/_react.default.createElement("i", {
    className: "eps-icon ".concat(props.className)
  });
}

Icon.propTypes = {
  className: PropTypes.string.isRequired
};
Icon.defaultProps = {
  className: ''
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = Grid;

var _react = _interopRequireDefault(__webpack_require__(11));

__webpack_require__(58);

__webpack_require__(119);

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(299));

__webpack_require__(645);

function Grid(props) {
  var propsMap = {
    direction: '--direction{{ -VALUE }}',
    justify: '--justify{{ -VALUE }}',
    alignContent: '--align-content{{ -VALUE }}',
    alignItems: '--align-items{{ -VALUE }}',
    container: '-container',
    item: '-item',
    noWrap: '-container--no-wrap',
    wrapReverse: '-container--wrap-reverse',
    zeroMinWidth: '-item--zero-min-width',
    spacing: '-container--spacing',
    xs: '-item-xs{{ -VALUE }}',
    sm: '-item-sm{{ -VALUE }}',
    md: '-item-md{{ -VALUE }}',
    lg: '-item-lg{{ -VALUE }}',
    xl: '-item-xl{{ -VALUE }}',
    xxl: '-item-xxl{{ -VALUE }}'
  },
      getStyle = function getStyle() {
    return isValidPropValue(props.spacing) ? {
      '--grid-spacing-gutter': props.spacing
    } : {};
  },
      classes = [getBaseClassName(), props.className].concat((0, _toConsumableArray2.default)(getPropsClasses(propsMap, props)));

  return /*#__PURE__*/_react.default.createElement("div", {
    style: getStyle(),
    className: classes.filter(function (classItem) {
      return '' !== classItem;
    }).join(' ')
  }, props.children);
}

function getPropsClasses(propsMap, props) {
  var classes = [];

  for (var prop in propsMap) {
    if (props[prop]) {
      var propValue = isValidPropValue(props[prop]) ? props[prop] : '';
      classes.push(getBaseClassName() + renderPropValueBrackets(propsMap[prop], propValue));
    }
  }

  return classes;
}

function renderPropValueBrackets(propClass, propValue) {
  var brackets = propClass.match(/{{.*?}}/);

  if (brackets) {
    var bracketsValue = propValue ? brackets[0].replace(/[{ }]/g, '').replace(/value/i, propValue) : '';
    propClass = propClass.replace(brackets[0], bracketsValue);
  }

  return propClass;
}

function getBaseClassName() {
  return 'eps-grid';
}

function isValidPropValue(propValue) {
  return propValue && 'boolean' !== typeof propValue;
}

Grid.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.string,
  justify: PropTypes.string,
  alignContent: PropTypes.string,
  alignItems: PropTypes.string,
  container: PropTypes.bool,
  item: PropTypes.bool,
  noWrap: PropTypes.bool,
  wrapReverse: PropTypes.bool,
  zeroMinWidth: PropTypes.bool,
  spacing: PropTypes.number,
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  xl: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  xxl: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.arrayOf(PropTypes.object)]).isRequired
};
Grid.defaultProps = {
  className: ''
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, PropTypes) {

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = Text;

function Text(props) {
  var baseClassName = 'eps',
      classes = [props.className],
      tagName = props.tag,
      variant = props.variant && 'md' !== props.variant ? '-' + props.variant : '';
  classes.push(baseClassName + '-text' + variant);
  return React.createElement(tagName, {
    className: classes.filter(function (classItem) {
      return classItem;
    }).join(' ')
  }, props.children);
}

Text.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  tag: PropTypes.string,
  children: PropTypes.any.isRequired
};
Text.defaultProps = {
  className: '',
  tag: 'p'
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11), __webpack_require__(41)))

/***/ }),
/* 348 */
/***/ (function(module, exports) {



/***/ }),
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = Page;

var _react = _interopRequireDefault(__webpack_require__(11));

var _header = _interopRequireDefault(__webpack_require__(641));

var _sidebar = _interopRequireDefault(__webpack_require__(646));

var _content = _interopRequireDefault(__webpack_require__(647));

var _footer = _interopRequireDefault(__webpack_require__(648));

function Page(props) {
  var AppSidebar = function AppSidebar() {
    if (!props.sidebar) {
      return;
    }

    return /*#__PURE__*/_react.default.createElement(_sidebar.default, null, props.sidebar);
  },
      AppFooter = function AppFooter() {
    if (!props.footer) {
      return;
    }

    return /*#__PURE__*/_react.default.createElement(_footer.default, null, props.footer);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "eps-app__lightbox ".concat(props.className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "eps-app"
  }, /*#__PURE__*/_react.default.createElement(_header.default, {
    title: props.title,
    buttons: props.headerButtons,
    titleRedirectRoute: props.titleRedirectRoute
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "eps-app__main"
  }, AppSidebar(), /*#__PURE__*/_react.default.createElement(_content.default, null, props.content)), AppFooter()));
}

Page.propTypes = {
  title: PropTypes.string,
  titleRedirectRoute: PropTypes.string,
  className: PropTypes.string,
  headerButtons: PropTypes.arrayOf(PropTypes.object),
  sidebar: PropTypes.object,
  content: PropTypes.object.isRequired,
  footer: PropTypes.object
};
Page.defaultProps = {
  className: ''
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = Dialog;

var _react = _interopRequireDefault(__webpack_require__(11));

var _dialogWrapper = _interopRequireDefault(__webpack_require__(650));

var _dialogContent = _interopRequireDefault(__webpack_require__(651));

var _dialogTitle = _interopRequireDefault(__webpack_require__(652));

var _dialogText = _interopRequireDefault(__webpack_require__(653));

var _dialogActions = _interopRequireDefault(__webpack_require__(654));

var _dialogButton = _interopRequireDefault(__webpack_require__(655));

__webpack_require__(656);

function Dialog(props) {
  return /*#__PURE__*/_react.default.createElement(_dialogWrapper.default, {
    onSubmit: props.onSubmit,
    onClose: props.onClose
  }, /*#__PURE__*/_react.default.createElement(_dialogContent.default, null, props.title && /*#__PURE__*/_react.default.createElement(_dialogTitle.default, null, props.title), props.text && /*#__PURE__*/_react.default.createElement(_dialogText.default, null, props.text), props.children), /*#__PURE__*/_react.default.createElement(_dialogActions.default, null, /*#__PURE__*/_react.default.createElement(_dialogButton.default, {
    key: "dismiss",
    text: props.dismissButtonText,
    onClick: props.dismissButtonOnClick,
    url: props.dismissButtonUrl,
    target: props.dismissButtonTarget,
    tabIndex: "2"
  }), /*#__PURE__*/_react.default.createElement(_dialogButton.default, {
    key: "approve",
    text: props.approveButtonText,
    onClick: props.approveButtonOnClick,
    url: props.approveButtonUrl,
    target: props.approveButtonTarget,
    color: props.approveButtonColor,
    tabIndex: "1"
  })));
}

Dialog.propTypes = {
  title: PropTypes.any,
  text: PropTypes.any,
  children: PropTypes.any,
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
  dismissButtonText: PropTypes.string.isRequired,
  dismissButtonOnClick: PropTypes.func,
  dismissButtonUrl: PropTypes.string,
  dismissButtonTarget: PropTypes.string,
  approveButtonText: PropTypes.string.isRequired,
  approveButtonOnClick: PropTypes.func,
  approveButtonUrl: PropTypes.string,
  approveButtonColor: PropTypes.string,
  approveButtonTarget: PropTypes.string
};
Dialog.defaultProps = {};
Dialog.Wrapper = _dialogWrapper.default;
Dialog.Content = _dialogContent.default;
Dialog.Title = _dialogTitle.default;
Dialog.Text = _dialogText.default;
Dialog.Actions = _dialogActions.default;
Dialog.Button = _dialogButton.default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _implementation = __webpack_require__(636);

var _implementation2 = _interopRequireDefault(_implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];

/***/ }),
/* 411 */,
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__, PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.TemplateTypesConsumer = exports.Context = void 0;

var _react = _interopRequireDefault(__webpack_require__(11));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(28));

__webpack_require__(775);

var Context = _react.default.createContext();

exports.Context = Context;

var TemplateTypesContext = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(TemplateTypesContext, _React$Component);

  var _super = (0, _createSuper2.default)(TemplateTypesContext);

  function TemplateTypesContext(props) {
    var _this;

    (0, _classCallCheck2.default)(this, TemplateTypesContext);
    _this = _super.call(this, props);
    _this.state = {
      templateTypes: [],
      loading: true,
      error: false
    };
    return _this;
  }

  (0, _createClass2.default)(TemplateTypesContext, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.getTemplateTypes().then(function (response) {
        _this2.setState({
          templateTypes: response,
          loading: false
        });
      }).fail(function (error) {
        _this2.setState({
          error: error.statusText ? error.statusText : error,
          loading: false
        });
      });
    }
  }, {
    key: "getTemplateTypes",
    value: function getTemplateTypes() {
      return elementorCommon.ajax.load({
        action: 'app_site_editor_template_types'
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.error) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "e-loading-wrapper"
        }, /*#__PURE__*/_react.default.createElement("h3", null, __('Error:', 'elementor'), " ", this.state.error));
      }

      if (this.state.loading) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "elementor-loading"
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "elementor-loader-wrapper"
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "elementor-loader"
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "elementor-loader-boxes"
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "elementor-loader-box"
        }), /*#__PURE__*/_react.default.createElement("div", {
          className: "elementor-loader-box"
        }), /*#__PURE__*/_react.default.createElement("div", {
          className: "elementor-loader-box"
        }), /*#__PURE__*/_react.default.createElement("div", {
          className: "elementor-loader-box"
        }))), /*#__PURE__*/_react.default.createElement("div", {
          className: "elementor-loading-title"
        }, __('Loading', 'elementor')))); // <div className="e-loading-wrapper"><h3>{ __( 'Loading', 'elementor' ) }...</h3></div>;
      }

      return /*#__PURE__*/_react.default.createElement(Context.Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);
  return TemplateTypesContext;
}(_react.default.Component);

(0, _defineProperty2.default)(TemplateTypesContext, "propTypes", {
  children: PropTypes.object.isRequired
});
var TemplateTypesConsumer = Context.Consumer;
exports.TemplateTypesConsumer = TemplateTypesConsumer;
var _default = TemplateTypesContext;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(189)["__"], __webpack_require__(41)))

/***/ }),
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(41);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gud = __webpack_require__(637);

var _gud2 = _interopRequireDefault(_gud);

var _warning = __webpack_require__(639);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (false) {}

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(_react.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(_react.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];

/***/ }),
/* 637 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {// @flow


var key = '__global_unique_id__';

module.exports = function() {
  return global[key] = (global[key] || 0) + 1;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(638)))

/***/ }),
/* 638 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 639 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),
/* 640 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = NotFound;

var _react = _interopRequireDefault(__webpack_require__(11));

var _page = _interopRequireDefault(__webpack_require__(403));

function NotFound() {
  var config = {
    title: __('Not Found', 'elementor'),
    className: 'eps-app__not-found',
    content: /*#__PURE__*/_react.default.createElement("h1", null, " ", __('Not Found', 'elementor'), " "),
    sidebar: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null)
  };
  return /*#__PURE__*/_react.default.createElement(_page.default, config);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(189)["__"]))

/***/ }),
/* 641 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__, PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = Header;

var _react = _interopRequireDefault(__webpack_require__(11));

var _extends2 = _interopRequireDefault(__webpack_require__(187));

var _headerButtons = _interopRequireDefault(__webpack_require__(642));

var _grid = _interopRequireDefault(__webpack_require__(346));

function Header(props) {
  var TitleTag = 'span',
      titleAttrs = {};

  if (props.titleRedirectRoute) {
    TitleTag = 'a';
    titleAttrs = {
      href: "#".concat(props.titleRedirectRoute),
      target: '_self'
    };
  }

  _react.default.useEffect(function () {
    document.title = __('Elementor', 'elementor') + ' | ' + props.title;
  });

  return /*#__PURE__*/_react.default.createElement(_grid.default, {
    container: true,
    alignItems: "center",
    justify: "space-between",
    className: "eps-app__header"
  }, /*#__PURE__*/_react.default.createElement(TitleTag, (0, _extends2.default)({
    className: "eps-app__logo-title-wrapper"
  }, titleAttrs), /*#__PURE__*/_react.default.createElement("i", {
    className: "eps-app__logo eicon-elementor"
  }), /*#__PURE__*/_react.default.createElement("h1", {
    className: "eps-app__title"
  }, props.title)), /*#__PURE__*/_react.default.createElement(_headerButtons.default, {
    buttons: props.buttons
  }));
}

Header.propTypes = {
  title: PropTypes.string,
  titleRedirectRoute: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.object)
};
Header.defaultProps = {
  buttons: []
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(189)["__"], __webpack_require__(41)))

/***/ }),
/* 642 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__, PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = HeaderButtons;

var _react = _interopRequireDefault(__webpack_require__(11));

var _extends2 = _interopRequireDefault(__webpack_require__(187));

var _headerButton = _interopRequireDefault(__webpack_require__(643));

function HeaderButtons(props) {
  var tools = '';

  if (props.buttons.length) {
    var buttons = props.buttons.map(function (button) {
      return /*#__PURE__*/_react.default.createElement(_headerButton.default, (0, _extends2.default)({
        key: button.id
      }, button));
    });
    tools = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, buttons);
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "eps-app__header-buttons"
  }, /*#__PURE__*/_react.default.createElement(_headerButton.default, {
    text: __('Close', 'elementor'),
    icon: "eicon-close",
    className: "eps-app__close-button",
    onClick: function onClick() {
      if (window.top === window) {
        // Directly.
        window.top.location = elementorAppConfig.return_url;
      } else {
        // Iframe.
        window.top.$e.run('app/close');
      }
    }
  }), tools);
}

HeaderButtons.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.object)
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(189)["__"], __webpack_require__(41)))

/***/ }),
/* 643 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _assign = _interopRequireDefault(__webpack_require__(150));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(25));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(28));

var _button = _interopRequireDefault(__webpack_require__(238));

var Button = /*#__PURE__*/function (_BaseButton) {
  (0, _inherits2.default)(Button, _BaseButton);

  var _super = (0, _createSuper2.default)(Button);

  function Button() {
    (0, _classCallCheck2.default)(this, Button);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Button, [{
    key: "getCssId",
    value: function getCssId() {
      return "eps-app-header-btn-" + (0, _get2.default)((0, _getPrototypeOf2.default)(Button.prototype), "getCssId", this).call(this);
    }
  }, {
    key: "getClassName",
    value: function getClassName() {
      return "eps-app__header-btn " + (0, _get2.default)((0, _getPrototypeOf2.default)(Button.prototype), "getClassName", this).call(this);
    }
  }]);
  return Button;
}(_button.default);

exports.default = Button;
(0, _defineProperty2.default)(Button, "defaultProps", (0, _assign.default)({}
/* clone */
, _button.default.defaultProps, {
  hideText: true
}));

/***/ }),
/* 644 */
/***/ (function(module, exports) {



/***/ }),
/* 645 */
/***/ (function(module, exports) {



/***/ }),
/* 646 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = Sidebar;

var _react = _interopRequireDefault(__webpack_require__(11));

function Sidebar(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "eps-app__sidebar"
  }, props.children);
}

Sidebar.propTypes = {
  children: PropTypes.object
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),
/* 647 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = Content;

var _react = _interopRequireDefault(__webpack_require__(11));

function Content(props) {
  return /*#__PURE__*/_react.default.createElement("main", {
    className: "eps-app__content"
  }, props.children);
}

Content.propTypes = {
  children: PropTypes.object
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),
/* 648 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = Footer;

var _react = _interopRequireDefault(__webpack_require__(11));

function Footer(props) {
  return /*#__PURE__*/_react.default.createElement("footer", {
    className: "eps-app__footer"
  }, props.children);
}

Footer.propTypes = {
  children: PropTypes.object
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),
/* 649 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__, PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(11));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(28));

var _dialog = _interopRequireDefault(__webpack_require__(404));

// In the current time there is no solution to use "getDerivedStateFromError" static method with functional component
// That is why this component is a class component.
// @link https://reactjs.org/docs/hooks-faq.html#do-hooks-cover-all-use-cases-for-classes
var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ErrorBoundary, _React$Component);

  var _super = (0, _createSuper2.default)(ErrorBoundary);

  function ErrorBoundary(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ErrorBoundary);
    _this = _super.call(this, props);
    _this.state = {
      hasError: null
    };
    return _this;
  }

  (0, _createClass2.default)(ErrorBoundary, [{
    key: "goBack",
    value: function goBack() {
      // If the app was opened inside an iframe, it will close it,
      // if not, it will redirect to the last location.
      if (window.top !== window.self) {
        window.top.$e.run('app/close');
      }

      window.location = elementorAppConfig.return_url;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return /*#__PURE__*/_react.default.createElement(_dialog.default, {
          title: this.props.title,
          text: this.props.text,
          approveButtonUrl: this.props.learnMoreUrl,
          approveButtonColor: "link",
          approveButtonTarget: "_blank",
          approveButtonText: __('Learn More', 'elementor'),
          dismissButtonText: __('Go Back', 'elementor'),
          dismissButtonOnClick: this.goBack
        });
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError() {
      return {
        hasError: true
      };
    }
  }]);
  return ErrorBoundary;
}(_react.default.Component);

exports.default = ErrorBoundary;
(0, _defineProperty2.default)(ErrorBoundary, "propTypes", {
  children: PropTypes.any,
  title: PropTypes.string,
  text: PropTypes.string,
  learnMoreUrl: PropTypes.string
});
(0, _defineProperty2.default)(ErrorBoundary, "defaultProps", {
  title: __('App could not be loaded', 'elementor'),
  text: __('We’re sorry, but something went wrong. Click on ‘Learn more’ and follow each of the steps to quickly solve it.', 'elementor'),
  learnMoreUrl: 'https://go.elementor.com/app-general-load-issue/'
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(189)["__"], __webpack_require__(41)))

/***/ }),
/* 650 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__, PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = DialogWrapper;

var _react = _interopRequireDefault(__webpack_require__(11));

var _button = _interopRequireDefault(__webpack_require__(238));

function DialogWrapper(props) {
  var WrapperTag = 'div';

  if (props.onSubmit) {
    WrapperTag = 'form';
  }

  return /*#__PURE__*/_react.default.createElement("section", {
    className: "eps-modal__overlay"
  }, props.onClose && /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: props.onClose,
    text: __('Close', 'elementor'),
    hideText: true,
    icon: "eicon-close",
    className: "eps-dialog__close-button"
  }), /*#__PURE__*/_react.default.createElement(WrapperTag, {
    className: "eps-modal eps-dialog",
    onSubmit: props.onSubmit
  }, props.children));
}

DialogWrapper.propTypes = {
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.any
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(189)["__"], __webpack_require__(41)))

/***/ }),
/* 651 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = DialogContent;

var _react = _interopRequireDefault(__webpack_require__(11));

function DialogContent(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "eps-dialog__content"
  }, props.children);
}

DialogContent.propTypes = {
  children: PropTypes.any
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),
/* 652 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = DialogTitle;

var _react = _interopRequireDefault(__webpack_require__(11));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(212));

var _extends2 = _interopRequireDefault(__webpack_require__(187));

var _heading = _interopRequireDefault(__webpack_require__(336));

function DialogTitle(props) {
  return /*#__PURE__*/_react.default.createElement(_heading.default, (0, _extends2.default)({}, props, {
    className: "eps-dialog__title ".concat(props.className)
  }));
}

DialogTitle.propTypes = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _heading.default.propTypes), {}, {
  className: PropTypes.string
});
DialogTitle.defaultProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _heading.default.propTypes), {}, {
  variant: 'h3',
  tag: 'h3',
  className: ''
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),
/* 653 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = DialogText;

var _react = _interopRequireDefault(__webpack_require__(11));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(212));

var _extends2 = _interopRequireDefault(__webpack_require__(187));

var _text = _interopRequireDefault(__webpack_require__(347));

function DialogText(props) {
  return /*#__PURE__*/_react.default.createElement(_text.default, (0, _extends2.default)({
    variant: "xs"
  }, props, {
    className: "eps-dialog__text ".concat(props.className)
  }));
}

DialogText.propTypes = (0, _objectSpread2.default)({}, _text.default.propTypes);
DialogText.defaultProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _text.default.defaultProps), {}, {
  tag: 'p',
  variant: 'sm'
});

/***/ }),
/* 654 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = DialogActions;

var _react = _interopRequireDefault(__webpack_require__(11));

function DialogActions(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "eps-dialog__buttons"
  }, props.children);
}

DialogActions.propTypes = {
  children: PropTypes.any
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),
/* 655 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = DialogButton;

var _react = _interopRequireDefault(__webpack_require__(11));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(212));

var _extends2 = _interopRequireDefault(__webpack_require__(187));

var _button = _interopRequireDefault(__webpack_require__(238));

function DialogButton(props) {
  return /*#__PURE__*/_react.default.createElement(_button.default, (0, _extends2.default)({}, props, {
    className: "eps-dialog__button ".concat(props.className)
  }));
}

DialogButton.propTypes = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _button.default.propTypes), {}, {
  tabIndex: PropTypes.string,
  type: PropTypes.string
});
DialogButton.defaultProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _button.default.defaultProps), {}, {
  tabIndex: '0',
  type: 'button'
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),
/* 656 */
/***/ (function(module, exports) {



/***/ }),
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes, __) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(212));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(28));

var _button = _interopRequireDefault(__webpack_require__(238));

__webpack_require__(759);

var AddNewButton = /*#__PURE__*/function (_Button) {
  (0, _inherits2.default)(AddNewButton, _Button);

  var _super = (0, _createSuper2.default)(AddNewButton);

  function AddNewButton() {
    (0, _classCallCheck2.default)(this, AddNewButton);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(AddNewButton, [{
    key: "getClassName",
    value: function getClassName() {
      var className = this.props.className;

      if (this.props.size) {
        className += ' eps-add-new-button--' + this.props.size;
      }

      return className;
    }
  }]);
  return AddNewButton;
}(_button.default);

exports.default = AddNewButton;
(0, _defineProperty2.default)(AddNewButton, "propTypes", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _button.default.propTypes), {}, {
  text: PropTypes.string,
  size: PropTypes.string
}));
(0, _defineProperty2.default)(AddNewButton, "defaultProps", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _button.default.defaultProps), {}, {
  className: 'eps-add-new-button',
  text: __('Add New', 'elementor-pro'),
  icon: 'eicon-plus'
}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41), __webpack_require__(189)["__"]))

/***/ }),
/* 679 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(11));

__webpack_require__(348);

var Card = _react.default.forwardRef(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement("article", {
    className: "eps-card ".concat(props.className),
    ref: ref
  }, props.children);
});

Card.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any
};
Card.defaultProps = {
  className: ''
};
Card.displayName = 'Card';
var _default = Card;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),
/* 680 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = CardBody;

var _react = _interopRequireDefault(__webpack_require__(11));

__webpack_require__(348);

function CardBody(props) {
  return /*#__PURE__*/_react.default.createElement("main", {
    className: "eps-card__body ".concat(props.className)
  }, props.children);
}

CardBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object.isRequired
};
CardBody.defaultProps = {
  className: ''
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),
/* 681 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = CardImage;

var _react = _interopRequireDefault(__webpack_require__(11));

__webpack_require__(348);

function CardImage(props) {
  var image = /*#__PURE__*/_react.default.createElement("img", {
    src: props.src,
    alt: props.alt,
    className: "eps-card__image"
  });

  return /*#__PURE__*/_react.default.createElement("figure", {
    className: "eps-card__figure ".concat(props.className)
  }, image, props.children);
}

CardImage.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  children: PropTypes.any
};
CardImage.defaultProps = {
  className: ''
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),
/* 682 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = CardHeader;

var _react = _interopRequireDefault(__webpack_require__(11));

__webpack_require__(348);

function CardHeader(props) {
  return /*#__PURE__*/_react.default.createElement("header", {
    className: "eps-card__header ".concat(props.className)
  }, props.children);
}

CardHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired
};
CardHeader.defaultProps = {
  className: ''
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),
/* 683 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = CardOverlay;

var _react = _interopRequireDefault(__webpack_require__(11));

__webpack_require__(348);

function CardOverlay(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "eps-card__image-overlay ".concat(props.className)
  }, props.children);
}

CardOverlay.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object.isRequired
};
CardOverlay.defaultProps = {
  className: ''
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),
/* 684 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = CssGrid;

var _react = _interopRequireDefault(__webpack_require__(11));

var _utils = _interopRequireDefault(__webpack_require__(685));

__webpack_require__(761);

function CssGrid(props) {
  var gridStyle = {
    '--eps-grid-columns': props.columns,
    '--eps-grid-spacing': _utils.default.pxToRem(props.spacing),
    '--eps-grid-col-min-width': _utils.default.pxToRem(props.colMinWidth),
    '--eps-grid-col-max-width': _utils.default.pxToRem(props.colMaxWidth)
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: gridStyle,
    className: "eps-css-grid ".concat(props.className)
  }, props.children);
}

CssGrid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  columns: PropTypes.number,
  spacing: PropTypes.number,
  colMinWidth: PropTypes.number,
  colMaxWidth: PropTypes.number
};
CssGrid.defaultProps = {
  spacing: 24,
  className: ''
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),
/* 685 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(80);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(28));

var Utils = function Utils() {
  (0, _classCallCheck2.default)(this, Utils);
};

exports.default = Utils;
(0, _defineProperty2.default)(Utils, "pxToRem", function (pixels) {
  if (!pixels) {
    return;
  }

  return "".concat(pixels * 0.0625, "rem");
});
(0, _defineProperty2.default)(Utils, "arrayToClassName", function (array) {
  return array.filter(function (classItem) {
    return '' !== classItem;
  }).join(' ');
});
(0, _defineProperty2.default)(Utils, "stringToRemValues", function (string) {
  return string.split(' ').map(function (value) {
    return Utils.pxToRem(value);
  }).join(' ');
});

/***/ }),
/* 686 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _interopRequireWildcard = __webpack_require__(36);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = DragDrop;

var _react = _interopRequireWildcard(__webpack_require__(11));

var _extends2 = _interopRequireDefault(__webpack_require__(187));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(104));

var _utils = _interopRequireDefault(__webpack_require__(685));

__webpack_require__(762);

function DragDrop(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isDragOver = _useState2[0],
      setIsDragOver = _useState2[1],
      getClassName = function getClassName() {
    var baseClassName = 'e-app-drag-drop',
        classes = [baseClassName, props.className];

    if (isDragOver && !props.isLoading) {
      classes.push(baseClassName + '--drag-over');
    }

    return _utils.default.arrayToClassName(classes);
  },
      onDragDropActions = function onDragDropActions(event) {
    event.preventDefault();
    event.stopPropagation();
  },
      dragDropEvents = {
    onDrop: function onDrop(event) {
      onDragDropActions(event);
      setIsDragOver(false);

      if (props.onDrop) {
        props.onDrop(event);
      }
    },
    onDragOver: function onDragOver(event) {
      onDragDropActions(event);
      setIsDragOver(true);

      if (props.onDragOver) {
        props.onDragOver(event);
      }
    },
    onDragLeave: function onDragLeave(event) {
      onDragDropActions(event);
      setIsDragOver(false);

      if (props.onDragLeave) {
        props.onDragLeave(event);
      }
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, dragDropEvents, {
    className: getClassName()
  }), props.children);
}

DragDrop.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  onDrop: PropTypes.func,
  onDragLeave: PropTypes.func,
  onDragOver: PropTypes.func,
  isLoading: PropTypes.bool
};
DragDrop.defaultProps = {
  className: ''
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),
/* 687 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes, __) {

var _interopRequireDefault = __webpack_require__(0);

var _interopRequireWildcard = __webpack_require__(36);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = UploadFile;

var _react = _interopRequireWildcard(__webpack_require__(11));

var _button = _interopRequireDefault(__webpack_require__(238));

__webpack_require__(764);

function UploadFile(props) {
  var fileInput = (0, _react.useRef)(null);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("input", {
    ref: fileInput,
    type: "file",
    className: "e-app-upload-file__input",
    onChange: function onChange(event) {
      props.onFileSelect(event.target.files, event);
    }
  }), /*#__PURE__*/_react.default.createElement(_button.default, {
    className: "e-app-upload-file__button",
    text: props.text,
    variant: "contained",
    color: "primary",
    size: "lg",
    hideText: props.isLoading,
    icon: props.isLoading ? 'eicon-loading eicon-animation-spin' : '',
    onClick: function onClick() {
      if (!props.isLoading) {
        fileInput.current.click();
      }
    }
  }));
}

UploadFile.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  onFileSelect: PropTypes.func,
  isLoading: PropTypes.bool
};
UploadFile.defaultProps = {
  className: '',
  text: __('Select File', 'elementor')
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41), __webpack_require__(189)["__"]))

/***/ }),
/* 688 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = Menu;

var _react = _interopRequireDefault(__webpack_require__(11));

__webpack_require__(119);

var _extends2 = _interopRequireDefault(__webpack_require__(187));

__webpack_require__(766);

var _button = _interopRequireDefault(__webpack_require__(238));

var _router = _interopRequireDefault(__webpack_require__(344));

var _router2 = __webpack_require__(340);

function Menu(props) {
  var ActionButton = function ActionButton(itemProps) {
    if (!props.actionButton) {
      return '';
    }

    return props.actionButton(itemProps);
  };

  if (props.promotion) {
    return /*#__PURE__*/_react.default.createElement("nav", {
      className: "eps-menu"
    }, props.children, /*#__PURE__*/_react.default.createElement("ul", null, props.menuItems.map(function (item) {
      return /*#__PURE__*/_react.default.createElement("li", {
        key: item.type,
        className: "eps-menu-item"
      }, /*#__PURE__*/_react.default.createElement(_button.default, (0, _extends2.default)({
        text: item.title,
        className: "eps-menu-item__link"
      }, item)), /*#__PURE__*/_react.default.createElement(ActionButton, item));
    })));
  }

  return /*#__PURE__*/_react.default.createElement(_router2.LocationProvider, {
    history: _router.default.appHistory
  }, /*#__PURE__*/_react.default.createElement("nav", {
    className: "eps-menu"
  }, props.children, /*#__PURE__*/_react.default.createElement("ul", null, props.menuItems.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_router2.Match, {
      key: item.type,
      path: item.url
    }, function (_ref) {
      var match = _ref.match;
      return /*#__PURE__*/_react.default.createElement("li", {
        key: item.type,
        className: "eps-menu-item".concat(match ? ' eps-menu-item--active' : '')
      }, /*#__PURE__*/_react.default.createElement(_button.default, (0, _extends2.default)({
        text: item.title,
        className: "eps-menu-item__link"
      }, item)), /*#__PURE__*/_react.default.createElement(ActionButton, item));
    });
  }))));
}

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.any,
  actionButton: PropTypes.func,
  promotion: PropTypes.bool
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),
/* 689 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(25));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

__webpack_require__(767);

var _button = _interopRequireDefault(__webpack_require__(238));

var SideMenuItem = /*#__PURE__*/function (_BaseButton) {
  (0, _inherits2.default)(SideMenuItem, _BaseButton);

  var _super = (0, _createSuper2.default)(SideMenuItem);

  function SideMenuItem() {
    (0, _classCallCheck2.default)(this, SideMenuItem);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(SideMenuItem, [{
    key: "getCssId",
    value: function getCssId() {
      return "eps-menu-item-" + (0, _get2.default)((0, _getPrototypeOf2.default)(SideMenuItem.prototype), "getCssId", this).call(this);
    }
  }, {
    key: "getClassName",
    value: function getClassName() {
      return "eps-menu-item " + (0, _get2.default)((0, _getPrototypeOf2.default)(SideMenuItem.prototype), "getClassName", this).call(this);
    }
  }]);
  return SideMenuItem;
}(_button.default);

exports.default = SideMenuItem;

/***/ }),
/* 690 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes, __) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(11));

var _extends2 = _interopRequireDefault(__webpack_require__(187));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(49));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(28));

var _button = _interopRequireDefault(__webpack_require__(238));

var _grid = _interopRequireDefault(__webpack_require__(346));

var _icon = _interopRequireDefault(__webpack_require__(345));

__webpack_require__(768);

var ModalProvider = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ModalProvider, _React$Component);

  var _super = (0, _createSuper2.default)(ModalProvider);

  function ModalProvider(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ModalProvider);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "hideModal", function () {
      _this.setState({
        show: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "showModal", function () {
      _this.setState({
        show: true
      });
    });
    _this.state = {
      hideModal: _this.hideModal,
      show: false,
      showModal: _this.showModal
    };
    return _this;
  }

  (0, _createClass2.default)(ModalProvider, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_button.default, (0, _extends2.default)({}, this.props.toggleButtonProps, {
        onClick: this.state.showModal
      })), /*#__PURE__*/_react.default.createElement(Modal, {
        modalProps: this.state,
        title: this.props.title
      }, this.props.children));
    }
  }]);
  return ModalProvider;
}(_react.default.Component);

exports.default = ModalProvider;
ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
  toggleButtonProps: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

var Modal = /*#__PURE__*/function (_React$Component2) {
  (0, _inherits2.default)(Modal, _React$Component2);

  var _super2 = (0, _createSuper2.default)(Modal);

  function Modal() {
    var _this2;

    (0, _classCallCheck2.default)(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this2), "modalRef", _react.default.createRef());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this2), "closeRef", _react.default.createRef());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this2), "closeModal", function (e) {
      var modalProps = _this2.props.modalProps;
      var node = _this2.modalRef.current,
          closeNode = _this2.closeRef.current,
          isInCloseNode = closeNode && closeNode.contains(e.target); // ignore if click is inside the modal

      if (node && node.contains(e.target) && !isInCloseNode) {
        return;
      }

      modalProps.hideModal();
    });
    return _this2;
  }

  (0, _createClass2.default)(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.closeModal, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.closeModal, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          modalProps = _this$props.modalProps,
          children = _this$props.children;
      return modalProps.show ? /*#__PURE__*/_react.default.createElement("div", {
        className: "eps-modal__overlay",
        onClick: this.closeModal
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "eps-modal",
        ref: this.modalRef
      }, /*#__PURE__*/_react.default.createElement(_grid.default, {
        container: true,
        className: "eps-modal__header",
        justify: "space-between",
        alignItems: "center"
      }, /*#__PURE__*/_react.default.createElement(_grid.default, {
        item: true
      }, /*#__PURE__*/_react.default.createElement(_icon.default, {
        className: "eps-modal__icon eicon-info-circle"
      }), this.props.title), /*#__PURE__*/_react.default.createElement(_grid.default, {
        item: true
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "eps-modal__close-wrapper",
        ref: this.closeRef
      }, /*#__PURE__*/_react.default.createElement(_button.default, {
        text: __('Close', 'elementor'),
        hideText: true,
        icon: "eicon-close",
        onClick: this.closeModal
      })))), /*#__PURE__*/_react.default.createElement("div", {
        className: "eps-modal__body"
      }, children))) : null;
    }
  }]);
  return Modal;
}(_react.default.Component);

Modal.propTypes = {
  modalProps: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41), __webpack_require__(189)["__"]))

/***/ }),
/* 691 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = Select;

var _react = _interopRequireDefault(__webpack_require__(11));

function Select(props) {
  return /*#__PURE__*/_react.default.createElement("select", {
    multiple: props.multiple,
    className: props.className,
    value: props.value,
    onChange: props.onChange,
    ref: props.elRef
  }, props.options.map(function (option) {
    return option.children ? /*#__PURE__*/_react.default.createElement("optgroup", {
      label: option.label,
      key: option.label
    }, option.children.map(function (childOption) {
      return /*#__PURE__*/_react.default.createElement("option", {
        key: childOption.value,
        value: childOption.value
      }, childOption.label);
    })) : /*#__PURE__*/_react.default.createElement("option", {
      key: option.value,
      value: option.value
    }, option.label);
  }));
}

Select.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  elRef: PropTypes.object,
  multiple: PropTypes.bool
};
Select.defaultProps = {
  className: '',
  options: []
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),
/* 692 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__, PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = AllPartsButton;

var _react = _interopRequireDefault(__webpack_require__(11));

__webpack_require__(119);

var _menuItem = _interopRequireDefault(__webpack_require__(689));

var _router = __webpack_require__(340);

function AllPartsButton(props) {
  var activePathname = '/site-editor/templates';
  return /*#__PURE__*/_react.default.createElement(_router.Match, {
    path: activePathname
  }, function (_ref) {
    var match = _ref.match;
    var className = "eps-menu-item__link".concat(match || props.promotion ? ' eps-menu-item--active' : '');
    return /*#__PURE__*/_react.default.createElement(_menuItem.default, {
      text: __('All Parts', 'elementor'),
      className: className,
      icon: "eicon-filter",
      url: props.url
    });
  });
}

AllPartsButton.propTypes = {
  url: PropTypes.string,
  promotion: PropTypes.bool
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(189)["__"], __webpack_require__(41)))

/***/ }),
/* 693 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__, PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = Layout;

var _react = _interopRequireDefault(__webpack_require__(11));

var _page = _interopRequireDefault(__webpack_require__(403));

var _menu = _interopRequireDefault(__webpack_require__(774));

var _templateTypes = _interopRequireDefault(__webpack_require__(412));

__webpack_require__(777);

function Layout(props) {
  var config = {
    title: __('Theme Builder', 'elementor'),
    titleRedirectRoute: '/site-editor',
    headerButtons: props.headerButtons,
    sidebar: /*#__PURE__*/_react.default.createElement(_menu.default, {
      allPartsButton: props.allPartsButton,
      promotion: props.promotion
    }),
    content: props.children
  };
  return /*#__PURE__*/_react.default.createElement(_templateTypes.default, null, /*#__PURE__*/_react.default.createElement(_page.default, config));
}

Layout.propTypes = {
  headerButtons: PropTypes.arrayOf(PropTypes.object),
  allPartsButton: PropTypes.element.isRequired,
  children: PropTypes.object.isRequired,
  promotion: PropTypes.bool
};
Layout.defaultProps = {
  headerButtons: []
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(189)["__"], __webpack_require__(41)))

/***/ }),
/* 694 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__, PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = SiteParts;

var _react = _interopRequireDefault(__webpack_require__(11));

var _extends2 = _interopRequireDefault(__webpack_require__(187));

var _button = _interopRequireDefault(__webpack_require__(238));

var _cssGrid = _interopRequireDefault(__webpack_require__(684));

var _modal = _interopRequireDefault(__webpack_require__(690));

var _sitePart = _interopRequireDefault(__webpack_require__(695));

var _templateTypes = __webpack_require__(412);

var InfoButton = function InfoButton(props) {
  var toggleButtonProps = {
    text: __('Info', 'elementor'),
    hideText: true,
    icon: 'eicon-info-circle e-site-part__info-toggle'
  };
  return /*#__PURE__*/_react.default.createElement(_modal.default, {
    toggleButtonProps: toggleButtonProps,
    title: props.title
  }, /*#__PURE__*/_react.default.createElement(_cssGrid.default, {
    columns: 2,
    spacing: 60
  }, /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement("h3", null, props.type), /*#__PURE__*/_react.default.createElement("p", null, props.content, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_button.default, {
    text: __('Learn More', 'elementor'),
    color: "link",
    target: "_blank",
    url: props.docs
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "eps-modal__tip"
  }, /*#__PURE__*/_react.default.createElement("h3", null, __('Tip', 'elementor')), /*#__PURE__*/_react.default.createElement("p", null, props.tip))), /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement("h3", null, __('Watch Video', 'elementor')), /*#__PURE__*/_react.default.createElement("div", {
    className: "video-wrapper"
  }, /*#__PURE__*/_react.default.createElement("iframe", {
    id: "ytplayer",
    src: props.video_url,
    frameBorder: "0"
  })))));
};

InfoButton.propTypes = {
  content: PropTypes.string.isRequired,
  docs: PropTypes.string.isRequired,
  tip: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  video_url: PropTypes.string.isRequired
};

function SiteParts(props) {
  var _React$useContext = _react.default.useContext(_templateTypes.Context),
      templateTypes = _React$useContext.templateTypes;

  return /*#__PURE__*/_react.default.createElement(_cssGrid.default, {
    className: "e-site-editor__site-parts",
    colMinWidth: 200,
    spacing: 25
  }, templateTypes.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_sitePart.default, (0, _extends2.default)({
      className: "e-site-editor__site-part",
      actionButton: /*#__PURE__*/_react.default.createElement(InfoButton, (0, _extends2.default)({
        type: item.title
      }, item.tooltip_data)),
      thumbnail: item.urls.thumbnail,
      key: item.type
    }, item), _react.default.createElement(props.hoverElement, item));
  }));
}

SiteParts.propTypes = {
  hoverElement: PropTypes.func.isRequired
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(189)["__"], __webpack_require__(41)))

/***/ }),
/* 695 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = SitePart;

var _react = _interopRequireDefault(__webpack_require__(11));

var _card = _interopRequireDefault(__webpack_require__(679));

var _cardHeader = _interopRequireDefault(__webpack_require__(682));

var _cardBody = _interopRequireDefault(__webpack_require__(680));

var _cardImage = _interopRequireDefault(__webpack_require__(681));

var _heading = _interopRequireDefault(__webpack_require__(336));

__webpack_require__(780);

function SitePart(props) {
  return /*#__PURE__*/_react.default.createElement(_card.default, {
    className: "e-site-part"
  }, /*#__PURE__*/_react.default.createElement(_cardHeader.default, null, /*#__PURE__*/_react.default.createElement(_heading.default, {
    tag: "h1",
    variant: "text-sm",
    className: "eps-card__headline"
  }, props.title), props.actionButton), /*#__PURE__*/_react.default.createElement(_cardBody.default, null, /*#__PURE__*/_react.default.createElement(_cardImage.default, {
    alt: props.title,
    src: props.thumbnail
  }, props.children)));
}

SitePart.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.object,
  showIndicator: PropTypes.bool,
  actionButton: PropTypes.object
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),
/* 696 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = NotFound;

var _react = _interopRequireDefault(__webpack_require__(11));

__webpack_require__(80);

var _dialog = _interopRequireDefault(__webpack_require__(404));

function NotFound() {
  var url = _react.default.useMemo(function () {
    var _elementorAppConfig$m;

    return ((_elementorAppConfig$m = elementorAppConfig.menu_url.split('#')) === null || _elementorAppConfig$m === void 0 ? void 0 : _elementorAppConfig$m[1]) || '/site-editor';
  }, []);

  return /*#__PURE__*/_react.default.createElement(_dialog.default, {
    title: __('Theme Builder could not be loaded', 'elementor'),
    text: __('We’re sorry, but something went wrong. Click on ‘Learn more’ and follow each of the steps to quickly solve it.', 'elementor'),
    approveButtonUrl: "https://go.elementor.com/app-theme-builder-load-issue",
    approveButtonColor: "link",
    approveButtonTarget: "_blank",
    approveButtonText: __('Learn More', 'elementor'),
    dismissButtonText: __('Go Back', 'elementor'),
    dismissButtonUrl: url
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(189)["__"]))

/***/ }),
/* 697 */,
/* 698 */,
/* 699 */,
/* 700 */,
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */,
/* 705 */,
/* 706 */,
/* 707 */,
/* 708 */,
/* 709 */,
/* 710 */,
/* 711 */,
/* 712 */,
/* 713 */,
/* 714 */,
/* 715 */,
/* 716 */,
/* 717 */,
/* 718 */,
/* 719 */,
/* 720 */,
/* 721 */,
/* 722 */,
/* 723 */,
/* 724 */,
/* 725 */,
/* 726 */,
/* 727 */,
/* 728 */,
/* 729 */,
/* 730 */,
/* 731 */,
/* 732 */,
/* 733 */,
/* 734 */,
/* 735 */,
/* 736 */,
/* 737 */,
/* 738 */,
/* 739 */,
/* 740 */,
/* 741 */,
/* 742 */,
/* 743 */,
/* 744 */,
/* 745 */,
/* 746 */,
/* 747 */,
/* 748 */,
/* 749 */,
/* 750 */,
/* 751 */,
/* 752 */,
/* 753 */,
/* 754 */,
/* 755 */,
/* 756 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _router = _interopRequireDefault(__webpack_require__(757));

var _package = _interopRequireDefault(__webpack_require__(758));

var _package2 = _interopRequireDefault(__webpack_require__(773));

/**
 * Temporary solution for share components.
 * TODO.
 */
// Make router available for use within packages.
// Alphabetical order.
window.elementorAppPackages = {
  appUi: _package.default,
  router: _router.default,
  siteEditor: _package2.default
};

/***/ }),
/* 757 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(28));

/**
 * App Router
 *
 * TODO: Temporary solution for routing extensibility.
 */
var Router = /*#__PURE__*/function () {
  function Router() {
    (0, _classCallCheck2.default)(this, Router);
    (0, _defineProperty2.default)(this, "routes", []);
    (0, _defineProperty2.default)(this, "history", null);
  }

  (0, _createClass2.default)(Router, [{
    key: "addRoute",

    /**
     *
     * @param route {{
     *		path: string,
     *		component: object,
     *		props: object,
     * }}
     */
    value: function addRoute(route) {
      this.routes.push(route);
    }
  }, {
    key: "getRoutes",
    value: function getRoutes() {
      return this.routes.map(function (route) {
        var props = route.props || {}; // Use the path as a key, and add it as a prop.

        props.path = props.key = route.path;
        return React.createElement(route.component, props);
      });
    }
  }]);
  return Router;
}();

var router = new Router(); // Make router available for use within packages.

window.elementorAppPackages = {
  router: router
};
var _default = router;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 758 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _addNewButton = _interopRequireDefault(__webpack_require__(678));

var _button = _interopRequireDefault(__webpack_require__(238));

var _card = _interopRequireDefault(__webpack_require__(679));

var _cardBody = _interopRequireDefault(__webpack_require__(680));

var _cardFooter = _interopRequireDefault(__webpack_require__(760));

var _cardImage = _interopRequireDefault(__webpack_require__(681));

var _cardHeader = _interopRequireDefault(__webpack_require__(682));

var _cardOverlay = _interopRequireDefault(__webpack_require__(683));

var _cssGrid = _interopRequireDefault(__webpack_require__(684));

var _dialog = _interopRequireDefault(__webpack_require__(404));

var _dragDrop = _interopRequireDefault(__webpack_require__(686));

var _dropZone = _interopRequireDefault(__webpack_require__(763));

var _errorBoundary = _interopRequireDefault(__webpack_require__(649));

var _heading = _interopRequireDefault(__webpack_require__(336));

var _grid = _interopRequireDefault(__webpack_require__(346));

var _icon = _interopRequireDefault(__webpack_require__(345));

var _menu = _interopRequireDefault(__webpack_require__(688));

var _menuItem = _interopRequireDefault(__webpack_require__(689));

var _modal = _interopRequireDefault(__webpack_require__(690));

var _notFound = _interopRequireDefault(__webpack_require__(640));

var _page = _interopRequireDefault(__webpack_require__(403));

var _popover = _interopRequireDefault(__webpack_require__(769));

var _select = _interopRequireDefault(__webpack_require__(691));

var _select2 = _interopRequireDefault(__webpack_require__(771));

var _text = _interopRequireDefault(__webpack_require__(347));

var _uploadFile = _interopRequireDefault(__webpack_require__(687));

// Alphabetical order.
var _default = {
  AddNewButton: _addNewButton.default,
  Button: _button.default,
  Card: _card.default,
  CardBody: _cardBody.default,
  CardFooter: _cardFooter.default,
  CardHeader: _cardHeader.default,
  CardImage: _cardImage.default,
  CardOverlay: _cardOverlay.default,
  CssGrid: _cssGrid.default,
  Dialog: _dialog.default,
  DragDrop: _dragDrop.default,
  DropZone: _dropZone.default,
  ErrorBoundary: _errorBoundary.default,
  Heading: _heading.default,
  Grid: _grid.default,
  Icon: _icon.default,
  Menu: _menu.default,
  MenuItem: _menuItem.default,
  ModalProvider: _modal.default,
  NotFound: _notFound.default,
  Page: _page.default,
  Popover: _popover.default,
  Select: _select.default,
  Select2: _select2.default,
  Text: _text.default,
  UploadFile: _uploadFile.default
};
exports.default = _default;

/***/ }),
/* 759 */
/***/ (function(module, exports) {



/***/ }),
/* 760 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = CardFooter;

var _react = _interopRequireDefault(__webpack_require__(11));

__webpack_require__(348);

function CardFooter(props) {
  return /*#__PURE__*/_react.default.createElement("footer", {
    className: "eps-card__footer ".concat(props.className)
  }, props.children);
}

CardFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object.isRequired
};
CardFooter.defaultProps = {
  className: ''
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),
/* 761 */
/***/ (function(module, exports) {



/***/ }),
/* 762 */
/***/ (function(module, exports) {



/***/ }),
/* 763 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = DropZone;

var _react = _interopRequireDefault(__webpack_require__(11));

var _extends2 = _interopRequireDefault(__webpack_require__(187));

var _uploadFile = _interopRequireDefault(__webpack_require__(687));

var _dragDrop = _interopRequireDefault(__webpack_require__(686));

var _icon = _interopRequireDefault(__webpack_require__(345));

var _heading = _interopRequireDefault(__webpack_require__(336));

var _text = _interopRequireDefault(__webpack_require__(347));

__webpack_require__(765);

function DropZone(props) {
  var dragDropEvents = {
    onDrop: function onDrop(event) {
      if (!props.isLoading) {
        props.onFileSelect(event.dataTransfer.files, event);
      }
    }
  };
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "e-app-drop-zone"
  }, /*#__PURE__*/_react.default.createElement(_dragDrop.default, (0, _extends2.default)({}, dragDropEvents, {
    isLoading: props.isLoading
  }), props.icon && /*#__PURE__*/_react.default.createElement(_icon.default, {
    className: "e-app-drop-zone__icon ".concat(props.icon)
  }), props.heading && /*#__PURE__*/_react.default.createElement(_heading.default, {
    variant: "display-3"
  }, props.heading), props.text && /*#__PURE__*/_react.default.createElement(_text.default, {
    variant: "xl"
  }, props.text), props.secondaryText && /*#__PURE__*/_react.default.createElement(_text.default, {
    variant: "xl"
  }, props.secondaryText), props.showButton && /*#__PURE__*/_react.default.createElement(_uploadFile.default, {
    isLoading: props.isLoading,
    onFileSelect: props.onFileSelect,
    text: props.buttonText
  })));
}

DropZone.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  onFileSelect: PropTypes.func,
  heading: PropTypes.string,
  text: PropTypes.string,
  secondaryText: PropTypes.string,
  buttonText: PropTypes.string,
  icon: PropTypes.string,
  showButton: PropTypes.bool,
  showIcon: PropTypes.bool,
  isLoading: PropTypes.bool
};
DropZone.defaultProps = {
  className: '',
  icon: 'eicon-library-upload',
  showButton: true,
  showIcon: true
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),
/* 764 */
/***/ (function(module, exports) {



/***/ }),
/* 765 */
/***/ (function(module, exports) {



/***/ }),
/* 766 */
/***/ (function(module, exports) {



/***/ }),
/* 767 */
/***/ (function(module, exports) {



/***/ }),
/* 768 */
/***/ (function(module, exports) {



/***/ }),
/* 769 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = Popover;

var _react = _interopRequireDefault(__webpack_require__(11));

__webpack_require__(770);

function Popover(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "eps-popover__background",
    onClick: props.closeFunction
  }), /*#__PURE__*/_react.default.createElement("ul", {
    className: "eps-popover ".concat(props.className),
    onClick: props.closeFunction
  }, props.children));
}

Popover.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  closeFunction: PropTypes.func
};
Popover.defaultProps = {
  className: ''
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),
/* 770 */
/***/ (function(module, exports) {



/***/ }),
/* 771 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = Select2;

var _react = _interopRequireDefault(__webpack_require__(11));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(212));

var _select = _interopRequireDefault(__webpack_require__(691));

__webpack_require__(772);

/**
 * Default settings of the select 2
 *
 * @returns {{placeholder: string, allowClear: boolean, dir: string}}
 */
var getDefaultSettings = function getDefaultSettings() {
  return {
    allowClear: true,
    placeholder: '',
    dir: elementorCommon.config.isRTL ? 'rtl' : 'ltr'
  };
};
/**
 * Main component
 *
 * @param props
 * @returns {*}
 * @constructor
 */


function Select2(props) {
  var ref = _react.default.useRef(null); // Initiate the select 2 library, call to onReady after initiate, and
  // listen to select event on the select instance.


  _react.default.useEffect(function () {
    var $select2 = jQuery(ref.current).select2((0, _objectSpread2.default)((0, _objectSpread2.default)({}, getDefaultSettings()), props.settings)).on('select2:select select2:unselect', props.onChange);

    if (props.onReady) {
      props.onReady($select2);
    }

    return function () {
      $select2.select2('destroy').off('select2:select select2:unselect');
    };
  }, [props.settings, props.options]); // Listen to changes in the prop `value`, if changed update the select 2.


  _react.default.useEffect(function () {
    jQuery(ref.current).val(props.value).trigger('change');
  }, [props.value]);

  return /*#__PURE__*/_react.default.createElement(_select.default, {
    multiple: props.multiple,
    value: props.value,
    onChange: props.onChange,
    elRef: ref,
    options: props.options
  });
}

Select2.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onReady: PropTypes.func,
  options: PropTypes.array,
  settings: PropTypes.object,
  multiple: PropTypes.bool
};
Select2.defaultProps = {
  settings: {},
  options: [],
  dependencies: []
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),
/* 772 */
/***/ (function(module, exports) {



/***/ }),
/* 773 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _allPartsButton = _interopRequireDefault(__webpack_require__(692));

var _layout = _interopRequireDefault(__webpack_require__(693));

var _module = _interopRequireDefault(__webpack_require__(778));

var _notFound = _interopRequireDefault(__webpack_require__(696));

var _siteParts = _interopRequireDefault(__webpack_require__(694));

var _sitePart = _interopRequireDefault(__webpack_require__(695));

var _templateTypes = __webpack_require__(412);

// Alphabetical order.
var _default = {
  AllPartsButton: _allPartsButton.default,
  Layout: _layout.default,
  Module: _module.default,
  NotFound: _notFound.default,
  SitePart: _sitePart.default,
  SiteParts: _siteParts.default,
  TemplateTypesContext: _templateTypes.Context
};
exports.default = _default;

/***/ }),
/* 774 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__, PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = Menu;

var _react = _interopRequireDefault(__webpack_require__(11));

var _menu = _interopRequireDefault(__webpack_require__(688));

var _templateTypes = __webpack_require__(412);

var _button = _interopRequireDefault(__webpack_require__(238));

var _addNewButton = _interopRequireDefault(__webpack_require__(678));

__webpack_require__(776);

function Menu(props) {
  var _React$useContext = _react.default.useContext(_templateTypes.Context),
      templateTypes = _React$useContext.templateTypes,
      actionButton = function actionButton(itemProps) {
    var className = 'eps-menu-item__action-button';

    if (props.promotion) {
      return /*#__PURE__*/_react.default.createElement(_button.default, {
        text: __('Go Pro', 'elementor'),
        hideText: true,
        icon: "eicon-lock",
        className: className
      });
    }

    var goToCreate = function goToCreate() {
      location.href = itemProps.urls.create;
    };

    return /*#__PURE__*/_react.default.createElement("span", {
      className: className
    }, /*#__PURE__*/_react.default.createElement(_addNewButton.default, {
      hideText: true,
      size: "sm",
      onClick: function onClick() {
        return goToCreate();
      }
    }));
  };

  return /*#__PURE__*/_react.default.createElement(_menu.default, {
    menuItems: templateTypes,
    actionButton: actionButton,
    promotion: props.promotion
  }, props.allPartsButton, /*#__PURE__*/_react.default.createElement("div", {
    className: "eps-menu__title"
  }, __('Site Parts', 'elementor')));
}

Menu.propTypes = {
  allPartsButton: PropTypes.element.isRequired,
  promotion: PropTypes.bool
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(189)["__"], __webpack_require__(41)))

/***/ }),
/* 775 */
/***/ (function(module, exports) {



/***/ }),
/* 776 */
/***/ (function(module, exports) {



/***/ }),
/* 777 */
/***/ (function(module, exports) {



/***/ }),
/* 778 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _router = _interopRequireDefault(__webpack_require__(344));

var _promotion = _interopRequireDefault(__webpack_require__(779));

var _notFound = _interopRequireDefault(__webpack_require__(696));

var SiteEditor = /*#__PURE__*/function () {
  function SiteEditor() {
    (0, _classCallCheck2.default)(this, SiteEditor);
    this.saveTemplateTypesToCache();

    _router.default.addRoute({
      path: '/site-editor/promotion',
      component: _promotion.default
    });

    _router.default.addRoute({
      path: '/site-editor/*',
      component: _notFound.default
    });
  }

  (0, _createClass2.default)(SiteEditor, [{
    key: "saveTemplateTypesToCache",
    value: function saveTemplateTypesToCache() {
      var types = this.getTypes();
      elementorCommon.ajax.addRequestCache({
        unique_id: 'app_site_editor_template_types'
      }, types);
    }
  }, {
    key: "getTypes",
    value: function getTypes() {
      return [{
        type: 'header',
        icon: 'eicon-header',
        title: __('Header', 'elementor'),
        urls: {
          thumbnail: elementorAppConfig.assets_url + '/images/app/site-editor/header.svg'
        },
        tooltip_data: {
          title: __('What is a Header Template?', 'elementor'),
          content: __('The header template allows you to easily design and edit custom WordPress headers so you are no longer constrained by your theme’s header design limitations.', 'elementor'),
          tip: __('You can create multiple headers, and assign each to different areas of your site.', 'elementor'),
          docs: 'https://go.elementor.com/app-theme-builder-header',
          video_url: 'https://www.youtube.com/embed/HHy5RK6W-6I'
        }
      }, {
        type: 'footer',
        icon: 'eicon-footer',
        title: __('Footer', 'elementor'),
        urls: {
          thumbnail: elementorAppConfig.assets_url + '/images/app/site-editor/footer.svg'
        },
        tooltip_data: {
          title: __('What is a Footer Template?', 'elementor'),
          content: __('The footer template allows you to easily design and edit custom WordPress footers without the limits of your theme’s footer design constraints', 'elementor'),
          tip: __('You can create multiple footers, and assign each to different areas of your site.', 'elementor'),
          docs: 'https://go.elementor.com/app-theme-builder-footer',
          video_url: 'https://www.youtube.com/embed/xa8DoR4tQrY'
        }
      }, {
        type: 'single-page',
        icon: 'eicon-single-page',
        title: __('Single Page', 'elementor'),
        urls: {
          thumbnail: elementorAppConfig.assets_url + '/images/app/site-editor/single-page.svg'
        },
        tooltip_data: {
          title: __('What is a Single Page Template?', 'elementor'),
          content: __('A single page template allows you to easily create the layout and style of pages, ensuring design consistency across all the pages of your site.', 'elementor'),
          tip: __('You can create multiple global page templates, and assign each to different areas of your site.', 'elementor'),
          docs: 'https://go.elementor.com/app-theme-builder-page',
          video_url: 'https://www.youtube.com/embed/_y5eZ60lVoY'
        }
      }, {
        type: 'single-post',
        icon: 'eicon-single-post',
        title: __('Single Post', 'elementor'),
        urls: {
          thumbnail: elementorAppConfig.assets_url + '/images/app/site-editor/single-post.svg'
        },
        tooltip_data: {
          title: __('What is a Single Post Template?', 'elementor'),
          content: __('A single post template allows you to easily design the layout and style of posts, ensuring a design consistency throughout all your blog posts, for example.', 'elementor'),
          tip: __('You can create multiple global post templates, and assign each to a different category.', 'elementor'),
          docs: 'https://go.elementor.com/app-theme-builder-post',
          video_url: 'https://www.youtube.com/embed/8Fk-Edu7DL0'
        }
      }, {
        type: 'archive',
        icon: 'eicon-archive',
        title: __('Archive', 'elementor'),
        urls: {
          thumbnail: elementorAppConfig.assets_url + '/images/app/site-editor/archive.svg'
        },
        tooltip_data: {
          title: __('What is an Archive Template?', 'elementor'),
          content: __('An archive template allows you to easily design the layout and style of archive pages - those pages that show a list of posts (e.g. a blog’s list of recent posts), which may be filtered by terms such as authors, categories, tags, search results, etc.', 'elementor'),
          tip: __('If you’d like a different style for a specific category, it’s easy to create a separate global archive template whose condition is to only display when users are viewing that category’s list of posts.', 'elementor'),
          docs: 'https://go.elementor.com/app-theme-builder-archive',
          video_url: 'https://www.youtube.com/embed/wxElpEh9bfA'
        }
      }, {
        type: 'search-results',
        icon: 'eicon-search-results',
        title: __('Search Results', 'elementor'),
        urls: {
          thumbnail: elementorAppConfig.assets_url + '/images/app/site-editor/search-results.svg'
        },
        tooltip_data: {
          title: __('What is a Search Results Template?', 'elementor'),
          content: __('You can easily control the layout and design of the Search Results page with the Search Results template, which is simply a special archive template just for displaying search results.', 'elementor'),
          tip: __('You can customize the message if there are no results for the search term.', 'elementor'),
          docs: 'https://go.elementor.com/app-theme-builder-search-results',
          video_url: 'https://www.youtube.com/embed/KKkIU_L5sDo'
        }
      }, {
        type: 'product',
        icon: 'eicon-single-product',
        title: __('Product', 'elementor'),
        urls: {
          thumbnail: elementorAppConfig.assets_url + '/images/app/site-editor/product.svg'
        },
        tooltip_data: {
          title: __('What is a Single Product Template?', 'elementor'),
          content: __('A single product template allows you to easily design the layout and style of WooCommerce single product pages, and apply that template to various conditions that you assign.', 'elementor'),
          tip: __('You can create multiple global product templates, and assign each to different types of products, enabling a custom design for each group of similar products.', 'elementor'),
          docs: 'https://go.elementor.com/app-theme-builder-product',
          video_url: 'https://www.youtube.com/embed/PjhoB1RWkBM'
        }
      }, {
        type: 'products',
        icon: 'eicon-products',
        title: __('Products Archive', 'elementor'),
        urls: {
          thumbnail: elementorAppConfig.assets_url + '/images/app/site-editor/products.svg'
        },
        tooltip_data: {
          title: __('What is a Products Archive Template?', 'elementor'),
          content: __('A products archive template allows you to easily design the layout and style of your WooCommerce shop page or other product archive pages - those pages that show a list of products, which may be filtered by terms such as categories, tags, etc.', 'elementor'),
          tip: __('You can create multiple global archive product templates, and assign each to different categories of products. This gives you the freedom to customize the appearance for each type of product being shown.', 'elementor'),
          docs: 'https://go.elementor.com/app-theme-builder-products-archive',
          video_url: 'https://www.youtube.com/embed/F2gyAeZdU9s'
        }
      }, {
        type: 'error-404',
        icon: 'eicon-error-404',
        title: __('Error 404', 'elementor'),
        urls: {
          thumbnail: elementorAppConfig.assets_url + '/images/app/site-editor/error-404.svg'
        },
        tooltip_data: {
          title: __('What is a 404 Page Template?', 'elementor'),
          content: __('A 404 page template allows you to easily design the layout and style of the page that is displayed when a visitor arrives at a page that does not exist.', 'elementor'),
          tip: __('Keep your site\'s visitors happy when they get lost by displaying your recent posts, a search bar, or any information that might help the user find what they were looking for.', 'elementor'),
          docs: 'https://go.elementor.com/app-theme-builder-404',
          video_url: 'https://www.youtube.com/embed/ACCNp9tBMQg'
        }
      }];
    }
  }]);
  return SiteEditor;
}();

exports.default = SiteEditor;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(189)["__"]))

/***/ }),
/* 779 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__, PropTypes) {

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = Promotion;

var _react = _interopRequireDefault(__webpack_require__(11));

var _allPartsButton = _interopRequireDefault(__webpack_require__(692));

var _button = _interopRequireDefault(__webpack_require__(238));

var _cardOverlay = _interopRequireDefault(__webpack_require__(683));

var _grid = _interopRequireDefault(__webpack_require__(346));

var _heading = _interopRequireDefault(__webpack_require__(336));

var _layout = _interopRequireDefault(__webpack_require__(693));

var _siteParts = _interopRequireDefault(__webpack_require__(694));

var _text = _interopRequireDefault(__webpack_require__(347));

__webpack_require__(781);

function Promotion() {
  var promotionUrl = 'https://go.elementor.com/go-pro-theme-builder',
      PromotionHoverElement = function PromotionHoverElement(props) {
    var promotionUrlWithType = "".concat(promotionUrl, "?type=").concat(props.type);
    return /*#__PURE__*/_react.default.createElement(_cardOverlay.default, {
      className: "e-site-editor__promotion-overlay"
    }, /*#__PURE__*/_react.default.createElement("a", {
      className: "e-site-editor__promotion-overlay__link",
      target: "_blank",
      rel: "noopener noreferrer",
      href: promotionUrlWithType
    }, /*#__PURE__*/_react.default.createElement("i", {
      className: "e-site-editor__promotion-overlay__icon eicon-lock"
    }), /*#__PURE__*/_react.default.createElement(_button.default, {
      size: "sm",
      color: "cta",
      variant: "contained",
      text: __('Go Pro', 'elementor')
    })));
  };

  PromotionHoverElement.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string.isRequired
  };
  return /*#__PURE__*/_react.default.createElement(_layout.default, {
    allPartsButton: /*#__PURE__*/_react.default.createElement(_allPartsButton.default, {
      promotion: true
    }),
    promotion: true
  }, /*#__PURE__*/_react.default.createElement("section", {
    className: "e-site-editor__promotion"
  }, /*#__PURE__*/_react.default.createElement(_grid.default, {
    container: true,
    className: "page-header"
  }, /*#__PURE__*/_react.default.createElement(_grid.default, {
    item: true,
    sm: 7,
    justify: "end"
  }, /*#__PURE__*/_react.default.createElement(_heading.default, {
    variant: "h1"
  }, __('Create Full Site', 'elementor')), /*#__PURE__*/_react.default.createElement(_text.default, null, __('Theme Builder is the industry leading all-in-one solution that lets you customize every part of your WordPress theme visually: Header, Footer, Single, Archive & WooCommerce', 'elementor'))), /*#__PURE__*/_react.default.createElement(_grid.default, {
    item: true,
    container: true,
    justify: "end",
    alignItems: "start",
    sm: 5
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    size: "sm",
    color: "cta",
    variant: "contained",
    url: promotionUrl,
    text: __('Go Pro', 'elementor')
  }))), /*#__PURE__*/_react.default.createElement("hr", {
    className: "eps-separator"
  }), /*#__PURE__*/_react.default.createElement(_siteParts.default, {
    hoverElement: PromotionHoverElement
  })));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(189)["__"], __webpack_require__(41)))

/***/ }),
/* 780 */
/***/ (function(module, exports) {



/***/ }),
/* 781 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);
//# sourceMappingURL=app-packages.js.map