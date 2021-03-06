import * as BABYLON from '@babylonjs/core';
import { Vector2, Vector3, Vector4, Color3, Color4, Matrix, Observable, PhysicsImpostor, CannonJSPlugin, OimoJSPlugin, Scene, Engine, UniversalCamera, FreeCamera, FollowCamera, ArcRotateCamera, ArcFollowCamera, DeviceOrientationCamera, TouchCamera, GamepadCamera, MeshBuilder, SceneLoader, PBRMaterial, StandardMaterial, Texture, EasingFunction, Animation, CircleEase, BackEase, BounceEase, CubicEase, ElasticEase, ExponentialEase, PowerEase, QuadraticEase, QuarticEase, QuinticEase, SineEase, BezierCurveEase, DirectionalLight as DirectionalLight$1, HemisphericLight, PointLight, SpotLight, Effect, ShaderMaterial } from '@babylonjs/core';
export { BABYLON };
import '@babylonjs/loaders';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var isFloat = function isFloat(value) {
  return Number.isFinite(value) && !Number.isNaN(value);
};
var isFloatArray = function isFloatArray(value) {
  return Array.isArray(value) && value.every(isFloat);
};
var isBetween0and1 = function isBetween0and1(value) {
  return isFloat(value) && value <= 1 && value >= 0;
};
var id = function id() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
  var buf = new Uint8Array(size);
  window.crypto.getRandomValues(buf);
  return btoa(String.fromCharCode.apply(String, _toConsumableArray(buf))).replace(/\//g, '_').replace(/\+/g, '-');
};
var capitalize = function capitalize(_ref) {
  var _ref2 = _toArray(_ref),
      first = _ref2[0],
      rest = _ref2.slice(1);
  return first.toUpperCase() + rest.join('');
};
var isPercent = function isPercent(value) {
  value = Number.parseFloat(value);
  return !Number.isNaN(value) && value >= 0 && value <= 100;
};
var isDisposable = function isDisposable(entity) {
  return entity && typeof entity.dispose === 'function';
};
var createBus = function createBus() {
  var Vue = this.constructor.super;
  return new Vue();
};
var camelize = function camelize(str) {
  return str.split('-').reduce(function (result, _ref3) {
    var _ref4 = _toArray(_ref3),
        first = _ref4[0],
        rest = _ref4.slice(1);
    return result + first.toUpperCase() + rest.join('');
  }, '');
};
var last = function last(_ref5) {
  var _ref6 = _toArray(_ref5),
      arr = _ref6.slice(0);
  return arr.pop();
};
var defer = function defer() {
  var split;
  var promise = new Promise(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    split = args;
  });
  var _split = split,
      _split2 = _slicedToArray(_split, 2),
      complete = _split2[0],
      error = _split2[1];
  Object.assign(promise, {
    complete: complete,
    error: error
  });
  return promise;
};

var vecValidator = function vecValidator(value) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Vector2;
  if (value === null) {
    return false;
  }
  if (value instanceof type || isFloatArray(value)) {
    return true;
  }
  if (!isFloat(value.x) || !isFloat(value.y)) {
    return false;
  }
  if (type === Vector2) {
    return true;
  }
  if (!isFloat(value.z)) {
    return false;
  }
  if (type === Vector3) {
    return true;
  }
  return isFloat(value.w);
};
var toVec = function toVec(value, Type, transform) {
  if (value instanceof Type) {
    return value;
  }
  if (Array.isArray(value)) {
    return Type.FromArray(value);
  }
  return _construct(Type, _toConsumableArray(transform(value)));
};
var toVec2 = function toVec2(value) {
  return toVec(value, Vector2, function (_ref) {
    var x = _ref.x,
        y = _ref.y;
    return [x, y];
  });
};
var vec3 = {
  validator: function validator(value) {
    return vecValidator(value, Vector3);
  },
  default: function _default() {
    return Vector3.Zero();
  }
};
var toVec3 = function toVec3(value) {
  return toVec(value, Vector3, function (_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        z = _ref2.z;
    return [x, y, z];
  });
};
var vec4 = {
  validator: function validator(value) {
    return vecValidator(value, Vector4);
  },
  default: function _default() {
    return Vector4.Zero();
  }
};
var toVec4 = function toVec4(value) {
  return toVec(value, Vector4, function (_ref3) {
    var w = _ref3.w,
        x = _ref3.x,
        y = _ref3.y,
        z = _ref3.z;
    return [w, x, y, z];
  });
};
var $vector = function $vector() {
  for (var _len = arguments.length, value = new Array(_len), _key = 0; _key < _len; _key++) {
    value[_key] = arguments[_key];
  }
  if (Array.isArray(value[0])) {
    var _value = value;
    var _value2 = _slicedToArray(_value, 1);
    value = _value2[0];
  }
  if (vecValidator(value, Vector4)) {
    return toVec4(value);
  } else if (vecValidator(value, Vector3)) {
    return toVec3(value);
  }
  return toVec2(value);
};

var isHexColor3 = function isHexColor3(value) {
  return /^#?([\da-f]{3}){1,2}$/i.test(value);
};
var isHexColor4 = function isHexColor4(value) {
  return /^#?([\da-f]{4}){1,2}$/i.test(value);
};
var colorValidator = function colorValidator(value) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Color3;
  if (value === null) {
    return false;
  }
  if (value instanceof type || isFloatArray(value) && value.every(isBetween0and1)) {
    return true;
  }
  if (typeof value === 'string') {
    if (type === Color3) {
      return isHexColor3(value);
    }
    return isHexColor4(value);
  }
  if (!isBetween0and1(value.r) || !isBetween0and1(value.g) || !isBetween0and1(value.b)) {
    return false;
  }
  if (type === Color3) {
    return true;
  }
  return isBetween0and1(value.a);
};
var toColor = function toColor(value, Type, transform) {
  if (value instanceof Type) {
    return value;
  }
  if (Array.isArray(value)) {
    return Type.FromArray(value);
  }
  if (typeof value === 'string') {
    value = value.replace('#', '');
    if (value.length < 6) {
      value = _toConsumableArray(value).reduce(function (o, a) {
        return o.concat([a, a]);
      }, []).join('');
    }
    return Type.FromHexString("#".concat(value.toUpperCase()));
  }
  return _construct(Type, _toConsumableArray(transform(value)));
};
var color3 = {
  validator: colorValidator,
  default: function _default() {
    return Color3.White();
  }
};
var toColor3 = function toColor3(value) {
  return toColor(value, Color3, function (_ref) {
    var r = _ref.r,
        g = _ref.g,
        b = _ref.b;
    return [r, g, b];
  });
};
var color4 = {
  validator: function validator(value) {
    return colorValidator(value, Color4);
  },
  default: function _default() {
    return Color3.White().toColor4();
  }
};
var toColor4 = function toColor4(value) {
  return toColor(value, Color4, function (_ref2) {
    var r = _ref2.r,
        g = _ref2.g,
        b = _ref2.b,
        a = _ref2.a;
    return [r, g, b, a];
  });
};
var $color = function $color() {
  for (var _len = arguments.length, value = new Array(_len), _key = 0; _key < _len; _key++) {
    value[_key] = arguments[_key];
  }
  if (Array.isArray(value[0])) {
    var _value = value;
    var _value2 = _slicedToArray(_value, 1);
    value = _value2[0];
  }
  if (colorValidator(value, Color4)) {
    return toColor4(value);
  }
  return toColor3(value);
};

var toMatrix = function toMatrix(value) {
  if (value instanceof Matrix) {
    return value;
  }
  return Matrix.FromArray(value);
};
var matrix = {
  validator: function validator(value) {
    return value !== null && (isFloatArray(value) || value instanceof Matrix);
  },
  default: function _default() {
    return Matrix.Zero();
  }
};
var $matrix = function $matrix() {
  for (var _len = arguments.length, value = new Array(_len), _key = 0; _key < _len; _key++) {
    value[_key] = arguments[_key];
  }
  if (Array.isArray(value[0])) {
    var _value = value;
    var _value2 = _slicedToArray(_value, 1);
    value = _value2[0];
  }
  return toMatrix(value);
};

var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $vector: $vector,
  $color: $color,
  $matrix: $matrix
});

var install = function install(Vue) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$components = _ref.components,
      components = _ref$components === void 0 ? {} : _ref$components;
  Object.assign(Vue.prototype, api);
  Object.assign(Vue, api);
  Object.entries(components).forEach(function (entry) {
    return Vue.component.apply(Vue, _toConsumableArray(entry));
  });
};

var core = /*#__PURE__*/Object.freeze({
  __proto__: null,
  install: install,
  $vector: $vector,
  $color: $color,
  $matrix: $matrix
});

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var cannon = createCommonjsModule(function (module, exports) {
!function (e) {
  module.exports = e();
}(function () {
  return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof commonjsRequire == "function" && commonjsRequire;
          if (!u && a) return a(o, !0);
          if (i) return i(o, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        var f = n[o] = {
          exports: {}
        };
        t[o][0].call(f.exports, function (e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        }, f, f.exports, e, t, n, r);
      }
      return n[o].exports;
    }
    var i = typeof commonjsRequire == "function" && commonjsRequire;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s;
  }({
    1: [function (_dereq_, module, exports) {
      module.exports = {
        "name": "cannon",
        "version": "0.6.2",
        "description": "A lightweight 3D physics engine written in JavaScript.",
        "homepage": "https://github.com/schteppe/cannon.js",
        "author": "Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",
        "keywords": ["cannon.js", "cannon", "physics", "engine", "3d"],
        "main": "./build/cannon.js",
        "engines": {
          "node": "*"
        },
        "repository": {
          "type": "git",
          "url": "https://github.com/schteppe/cannon.js.git"
        },
        "bugs": {
          "url": "https://github.com/schteppe/cannon.js/issues"
        },
        "licenses": [{
          "type": "MIT"
        }],
        "devDependencies": {
          "jshint": "latest",
          "uglify-js": "latest",
          "nodeunit": "^0.9.0",
          "grunt": "~0.4.0",
          "grunt-contrib-jshint": "~0.1.1",
          "grunt-contrib-nodeunit": "^0.4.1",
          "grunt-contrib-concat": "~0.1.3",
          "grunt-contrib-uglify": "^0.5.1",
          "grunt-browserify": "^2.1.4",
          "grunt-contrib-yuidoc": "^0.5.2",
          "browserify": "*"
        },
        "dependencies": {}
      };
    }, {}],
    2: [function (_dereq_, module, exports) {
      module.exports = {
        version: _dereq_('../package.json').version,
        AABB: _dereq_('./collision/AABB'),
        ArrayCollisionMatrix: _dereq_('./collision/ArrayCollisionMatrix'),
        Body: _dereq_('./objects/Body'),
        Box: _dereq_('./shapes/Box'),
        Broadphase: _dereq_('./collision/Broadphase'),
        Constraint: _dereq_('./constraints/Constraint'),
        ContactEquation: _dereq_('./equations/ContactEquation'),
        Narrowphase: _dereq_('./world/Narrowphase'),
        ConeTwistConstraint: _dereq_('./constraints/ConeTwistConstraint'),
        ContactMaterial: _dereq_('./material/ContactMaterial'),
        ConvexPolyhedron: _dereq_('./shapes/ConvexPolyhedron'),
        Cylinder: _dereq_('./shapes/Cylinder'),
        DistanceConstraint: _dereq_('./constraints/DistanceConstraint'),
        Equation: _dereq_('./equations/Equation'),
        EventTarget: _dereq_('./utils/EventTarget'),
        FrictionEquation: _dereq_('./equations/FrictionEquation'),
        GSSolver: _dereq_('./solver/GSSolver'),
        GridBroadphase: _dereq_('./collision/GridBroadphase'),
        Heightfield: _dereq_('./shapes/Heightfield'),
        HingeConstraint: _dereq_('./constraints/HingeConstraint'),
        LockConstraint: _dereq_('./constraints/LockConstraint'),
        Mat3: _dereq_('./math/Mat3'),
        Material: _dereq_('./material/Material'),
        NaiveBroadphase: _dereq_('./collision/NaiveBroadphase'),
        ObjectCollisionMatrix: _dereq_('./collision/ObjectCollisionMatrix'),
        Pool: _dereq_('./utils/Pool'),
        Particle: _dereq_('./shapes/Particle'),
        Plane: _dereq_('./shapes/Plane'),
        PointToPointConstraint: _dereq_('./constraints/PointToPointConstraint'),
        Quaternion: _dereq_('./math/Quaternion'),
        Ray: _dereq_('./collision/Ray'),
        RaycastVehicle: _dereq_('./objects/RaycastVehicle'),
        RaycastResult: _dereq_('./collision/RaycastResult'),
        RigidVehicle: _dereq_('./objects/RigidVehicle'),
        RotationalEquation: _dereq_('./equations/RotationalEquation'),
        RotationalMotorEquation: _dereq_('./equations/RotationalMotorEquation'),
        SAPBroadphase: _dereq_('./collision/SAPBroadphase'),
        SPHSystem: _dereq_('./objects/SPHSystem'),
        Shape: _dereq_('./shapes/Shape'),
        Solver: _dereq_('./solver/Solver'),
        Sphere: _dereq_('./shapes/Sphere'),
        SplitSolver: _dereq_('./solver/SplitSolver'),
        Spring: _dereq_('./objects/Spring'),
        Trimesh: _dereq_('./shapes/Trimesh'),
        Vec3: _dereq_('./math/Vec3'),
        Vec3Pool: _dereq_('./utils/Vec3Pool'),
        World: _dereq_('./world/World')
      };
    }, {
      "../package.json": 1,
      "./collision/AABB": 3,
      "./collision/ArrayCollisionMatrix": 4,
      "./collision/Broadphase": 5,
      "./collision/GridBroadphase": 6,
      "./collision/NaiveBroadphase": 7,
      "./collision/ObjectCollisionMatrix": 8,
      "./collision/Ray": 9,
      "./collision/RaycastResult": 10,
      "./collision/SAPBroadphase": 11,
      "./constraints/ConeTwistConstraint": 12,
      "./constraints/Constraint": 13,
      "./constraints/DistanceConstraint": 14,
      "./constraints/HingeConstraint": 15,
      "./constraints/LockConstraint": 16,
      "./constraints/PointToPointConstraint": 17,
      "./equations/ContactEquation": 19,
      "./equations/Equation": 20,
      "./equations/FrictionEquation": 21,
      "./equations/RotationalEquation": 22,
      "./equations/RotationalMotorEquation": 23,
      "./material/ContactMaterial": 24,
      "./material/Material": 25,
      "./math/Mat3": 27,
      "./math/Quaternion": 28,
      "./math/Vec3": 30,
      "./objects/Body": 31,
      "./objects/RaycastVehicle": 32,
      "./objects/RigidVehicle": 33,
      "./objects/SPHSystem": 34,
      "./objects/Spring": 35,
      "./shapes/Box": 37,
      "./shapes/ConvexPolyhedron": 38,
      "./shapes/Cylinder": 39,
      "./shapes/Heightfield": 40,
      "./shapes/Particle": 41,
      "./shapes/Plane": 42,
      "./shapes/Shape": 43,
      "./shapes/Sphere": 44,
      "./shapes/Trimesh": 45,
      "./solver/GSSolver": 46,
      "./solver/Solver": 47,
      "./solver/SplitSolver": 48,
      "./utils/EventTarget": 49,
      "./utils/Pool": 51,
      "./utils/Vec3Pool": 54,
      "./world/Narrowphase": 55,
      "./world/World": 56
    }],
    3: [function (_dereq_, module, exports) {
      var Vec3 = _dereq_('../math/Vec3');
      var Utils = _dereq_('../utils/Utils');
      module.exports = AABB;
      function AABB(options) {
        options = options || {};
        this.lowerBound = new Vec3();
        if (options.lowerBound) {
          this.lowerBound.copy(options.lowerBound);
        }
        this.upperBound = new Vec3();
        if (options.upperBound) {
          this.upperBound.copy(options.upperBound);
        }
      }
      var tmp = new Vec3();
      AABB.prototype.setFromPoints = function (points, position, quaternion, skinSize) {
        var l = this.lowerBound,
            u = this.upperBound,
            q = quaternion;
        l.copy(points[0]);
        if (q) {
          q.vmult(l, l);
        }
        u.copy(l);
        for (var i = 1; i < points.length; i++) {
          var p = points[i];
          if (q) {
            q.vmult(p, tmp);
            p = tmp;
          }
          if (p.x > u.x) {
            u.x = p.x;
          }
          if (p.x < l.x) {
            l.x = p.x;
          }
          if (p.y > u.y) {
            u.y = p.y;
          }
          if (p.y < l.y) {
            l.y = p.y;
          }
          if (p.z > u.z) {
            u.z = p.z;
          }
          if (p.z < l.z) {
            l.z = p.z;
          }
        }
        if (position) {
          position.vadd(l, l);
          position.vadd(u, u);
        }
        if (skinSize) {
          l.x -= skinSize;
          l.y -= skinSize;
          l.z -= skinSize;
          u.x += skinSize;
          u.y += skinSize;
          u.z += skinSize;
        }
        return this;
      };
      AABB.prototype.copy = function (aabb) {
        this.lowerBound.copy(aabb.lowerBound);
        this.upperBound.copy(aabb.upperBound);
        return this;
      };
      AABB.prototype.clone = function () {
        return new AABB().copy(this);
      };
      AABB.prototype.extend = function (aabb) {
        var l = aabb.lowerBound.x;
        if (this.lowerBound.x > l) {
          this.lowerBound.x = l;
        }
        var u = aabb.upperBound.x;
        if (this.upperBound.x < u) {
          this.upperBound.x = u;
        }
        var l = aabb.lowerBound.y;
        if (this.lowerBound.y > l) {
          this.lowerBound.y = l;
        }
        var u = aabb.upperBound.y;
        if (this.upperBound.y < u) {
          this.upperBound.y = u;
        }
        var l = aabb.lowerBound.z;
        if (this.lowerBound.z > l) {
          this.lowerBound.z = l;
        }
        var u = aabb.upperBound.z;
        if (this.upperBound.z < u) {
          this.upperBound.z = u;
        }
      };
      AABB.prototype.overlaps = function (aabb) {
        var l1 = this.lowerBound,
            u1 = this.upperBound,
            l2 = aabb.lowerBound,
            u2 = aabb.upperBound;
        return (l2.x <= u1.x && u1.x <= u2.x || l1.x <= u2.x && u2.x <= u1.x) && (l2.y <= u1.y && u1.y <= u2.y || l1.y <= u2.y && u2.y <= u1.y) && (l2.z <= u1.z && u1.z <= u2.z || l1.z <= u2.z && u2.z <= u1.z);
      };
      AABB.prototype.contains = function (aabb) {
        var l1 = this.lowerBound,
            u1 = this.upperBound,
            l2 = aabb.lowerBound,
            u2 = aabb.upperBound;
        return l1.x <= l2.x && u1.x >= u2.x && l1.y <= l2.y && u1.y >= u2.y && l1.z <= l2.z && u1.z >= u2.z;
      };
      AABB.prototype.getCorners = function (a, b, c, d, e, f, g, h) {
        var l = this.lowerBound,
            u = this.upperBound;
        a.copy(l);
        b.set(u.x, l.y, l.z);
        c.set(u.x, u.y, l.z);
        d.set(l.x, u.y, u.z);
        e.set(u.x, l.y, l.z);
        f.set(l.x, u.y, l.z);
        g.set(l.x, l.y, u.z);
        h.copy(u);
      };
      var transformIntoFrame_corners = [new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3()];
      AABB.prototype.toLocalFrame = function (frame, target) {
        var corners = transformIntoFrame_corners;
        var a = corners[0];
        var b = corners[1];
        var c = corners[2];
        var d = corners[3];
        var e = corners[4];
        var f = corners[5];
        var g = corners[6];
        var h = corners[7];
        this.getCorners(a, b, c, d, e, f, g, h);
        for (var i = 0; i !== 8; i++) {
          var corner = corners[i];
          frame.pointToLocal(corner, corner);
        }
        return target.setFromPoints(corners);
      };
      AABB.prototype.toWorldFrame = function (frame, target) {
        var corners = transformIntoFrame_corners;
        var a = corners[0];
        var b = corners[1];
        var c = corners[2];
        var d = corners[3];
        var e = corners[4];
        var f = corners[5];
        var g = corners[6];
        var h = corners[7];
        this.getCorners(a, b, c, d, e, f, g, h);
        for (var i = 0; i !== 8; i++) {
          var corner = corners[i];
          frame.pointToWorld(corner, corner);
        }
        return target.setFromPoints(corners);
      };
    }, {
      "../math/Vec3": 30,
      "../utils/Utils": 53
    }],
    4: [function (_dereq_, module, exports) {
      module.exports = ArrayCollisionMatrix;
      function ArrayCollisionMatrix() {
        this.matrix = [];
      }
      ArrayCollisionMatrix.prototype.get = function (i, j) {
        i = i.index;
        j = j.index;
        if (j > i) {
          var temp = j;
          j = i;
          i = temp;
        }
        return this.matrix[(i * (i + 1) >> 1) + j - 1];
      };
      ArrayCollisionMatrix.prototype.set = function (i, j, value) {
        i = i.index;
        j = j.index;
        if (j > i) {
          var temp = j;
          j = i;
          i = temp;
        }
        this.matrix[(i * (i + 1) >> 1) + j - 1] = value ? 1 : 0;
      };
      ArrayCollisionMatrix.prototype.reset = function () {
        for (var i = 0, l = this.matrix.length; i !== l; i++) {
          this.matrix[i] = 0;
        }
      };
      ArrayCollisionMatrix.prototype.setNumObjects = function (n) {
        this.matrix.length = n * (n - 1) >> 1;
      };
    }, {}],
    5: [function (_dereq_, module, exports) {
      var Body = _dereq_('../objects/Body');
      var Vec3 = _dereq_('../math/Vec3');
      var Quaternion = _dereq_('../math/Quaternion');
      var Shape = _dereq_('../shapes/Shape');
      var Plane = _dereq_('../shapes/Plane');
      module.exports = Broadphase;
      function Broadphase() {
        this.world = null;
        this.useBoundingBoxes = false;
        this.dirty = true;
      }
      Broadphase.prototype.collisionPairs = function (world, p1, p2) {
        throw new Error("collisionPairs not implemented for this BroadPhase class!");
      };
      var Broadphase_needBroadphaseCollision_STATIC_OR_KINEMATIC = Body.STATIC | Body.KINEMATIC;
      Broadphase.prototype.needBroadphaseCollision = function (bodyA, bodyB) {
        if ((bodyA.collisionFilterGroup & bodyB.collisionFilterMask) === 0 || (bodyB.collisionFilterGroup & bodyA.collisionFilterMask) === 0) {
          return false;
        }
        if (((bodyA.type & Broadphase_needBroadphaseCollision_STATIC_OR_KINEMATIC) !== 0 || bodyA.sleepState === Body.SLEEPING) && ((bodyB.type & Broadphase_needBroadphaseCollision_STATIC_OR_KINEMATIC) !== 0 || bodyB.sleepState === Body.SLEEPING)) {
          return false;
        }
        return true;
      };
      Broadphase.prototype.intersectionTest = function (bodyA, bodyB, pairs1, pairs2) {
        if (this.useBoundingBoxes) {
          this.doBoundingBoxBroadphase(bodyA, bodyB, pairs1, pairs2);
        } else {
          this.doBoundingSphereBroadphase(bodyA, bodyB, pairs1, pairs2);
        }
      };
      var Broadphase_collisionPairs_r = new Vec3(),
      Broadphase_collisionPairs_normal = new Vec3(),
          Broadphase_collisionPairs_quat = new Quaternion(),
          Broadphase_collisionPairs_relpos = new Vec3();
      Broadphase.prototype.doBoundingSphereBroadphase = function (bodyA, bodyB, pairs1, pairs2) {
        var r = Broadphase_collisionPairs_r;
        bodyB.position.vsub(bodyA.position, r);
        var boundingRadiusSum2 = Math.pow(bodyA.boundingRadius + bodyB.boundingRadius, 2);
        var norm2 = r.norm2();
        if (norm2 < boundingRadiusSum2) {
          pairs1.push(bodyA);
          pairs2.push(bodyB);
        }
      };
      Broadphase.prototype.doBoundingBoxBroadphase = function (bodyA, bodyB, pairs1, pairs2) {
        if (bodyA.aabbNeedsUpdate) {
          bodyA.computeAABB();
        }
        if (bodyB.aabbNeedsUpdate) {
          bodyB.computeAABB();
        }
        if (bodyA.aabb.overlaps(bodyB.aabb)) {
          pairs1.push(bodyA);
          pairs2.push(bodyB);
        }
      };
      var Broadphase_makePairsUnique_temp = {
        keys: []
      },
          Broadphase_makePairsUnique_p1 = [],
          Broadphase_makePairsUnique_p2 = [];
      Broadphase.prototype.makePairsUnique = function (pairs1, pairs2) {
        var t = Broadphase_makePairsUnique_temp,
            p1 = Broadphase_makePairsUnique_p1,
            p2 = Broadphase_makePairsUnique_p2,
            N = pairs1.length;
        for (var i = 0; i !== N; i++) {
          p1[i] = pairs1[i];
          p2[i] = pairs2[i];
        }
        pairs1.length = 0;
        pairs2.length = 0;
        for (var i = 0; i !== N; i++) {
          var id1 = p1[i].id,
              id2 = p2[i].id;
          var key = id1 < id2 ? id1 + "," + id2 : id2 + "," + id1;
          t[key] = i;
          t.keys.push(key);
        }
        for (var i = 0; i !== t.keys.length; i++) {
          var key = t.keys.pop(),
              pairIndex = t[key];
          pairs1.push(p1[pairIndex]);
          pairs2.push(p2[pairIndex]);
          delete t[key];
        }
      };
      Broadphase.prototype.setWorld = function (world) {};
      var bsc_dist = new Vec3();
      Broadphase.boundingSphereCheck = function (bodyA, bodyB) {
        var dist = bsc_dist;
        bodyA.position.vsub(bodyB.position, dist);
        return Math.pow(bodyA.shape.boundingSphereRadius + bodyB.shape.boundingSphereRadius, 2) > dist.norm2();
      };
      Broadphase.prototype.aabbQuery = function (world, aabb, result) {
        console.warn('.aabbQuery is not implemented in this Broadphase subclass.');
        return [];
      };
    }, {
      "../math/Quaternion": 28,
      "../math/Vec3": 30,
      "../objects/Body": 31,
      "../shapes/Plane": 42,
      "../shapes/Shape": 43
    }],
    6: [function (_dereq_, module, exports) {
      module.exports = GridBroadphase;
      var Broadphase = _dereq_('./Broadphase');
      var Vec3 = _dereq_('../math/Vec3');
      var Shape = _dereq_('../shapes/Shape');
      function GridBroadphase(aabbMin, aabbMax, nx, ny, nz) {
        Broadphase.apply(this);
        this.nx = nx || 10;
        this.ny = ny || 10;
        this.nz = nz || 10;
        this.aabbMin = aabbMin || new Vec3(100, 100, 100);
        this.aabbMax = aabbMax || new Vec3(-100, -100, -100);
        var nbins = this.nx * this.ny * this.nz;
        if (nbins <= 0) {
          throw "GridBroadphase: Each dimension's n must be >0";
        }
        this.bins = [];
        this.binLengths = [];
        this.bins.length = nbins;
        this.binLengths.length = nbins;
        for (var i = 0; i < nbins; i++) {
          this.bins[i] = [];
          this.binLengths[i] = 0;
        }
      }
      GridBroadphase.prototype = new Broadphase();
      GridBroadphase.prototype.constructor = GridBroadphase;
      var GridBroadphase_collisionPairs_d = new Vec3();
      var GridBroadphase_collisionPairs_binPos = new Vec3();
      GridBroadphase.prototype.collisionPairs = function (world, pairs1, pairs2) {
        var N = world.numObjects(),
            bodies = world.bodies;
        var max = this.aabbMax,
            min = this.aabbMin,
            nx = this.nx,
            ny = this.ny,
            nz = this.nz;
        var xstep = ny * nz;
        var ystep = nz;
        var zstep = 1;
        var xmax = max.x,
            ymax = max.y,
            zmax = max.z,
            xmin = min.x,
            ymin = min.y,
            zmin = min.z;
        var xmult = nx / (xmax - xmin),
            ymult = ny / (ymax - ymin),
            zmult = nz / (zmax - zmin);
        var binsizeX = (xmax - xmin) / nx,
            binsizeY = (ymax - ymin) / ny,
            binsizeZ = (zmax - zmin) / nz;
        var binRadius = Math.sqrt(binsizeX * binsizeX + binsizeY * binsizeY + binsizeZ * binsizeZ) * 0.5;
        var types = Shape.types;
        var SPHERE = types.SPHERE,
            PLANE = types.PLANE,
            BOX = types.BOX,
            COMPOUND = types.COMPOUND,
            CONVEXPOLYHEDRON = types.CONVEXPOLYHEDRON;
        var bins = this.bins,
            binLengths = this.binLengths,
            Nbins = this.bins.length;
        for (var i = 0; i !== Nbins; i++) {
          binLengths[i] = 0;
        }
        var ceil = Math.ceil;
        var min = Math.min;
        var max = Math.max;
        function addBoxToBins(x0, y0, z0, x1, y1, z1, bi) {
          var xoff0 = (x0 - xmin) * xmult | 0,
              yoff0 = (y0 - ymin) * ymult | 0,
              zoff0 = (z0 - zmin) * zmult | 0,
              xoff1 = ceil((x1 - xmin) * xmult),
              yoff1 = ceil((y1 - ymin) * ymult),
              zoff1 = ceil((z1 - zmin) * zmult);
          if (xoff0 < 0) {
            xoff0 = 0;
          } else if (xoff0 >= nx) {
            xoff0 = nx - 1;
          }
          if (yoff0 < 0) {
            yoff0 = 0;
          } else if (yoff0 >= ny) {
            yoff0 = ny - 1;
          }
          if (zoff0 < 0) {
            zoff0 = 0;
          } else if (zoff0 >= nz) {
            zoff0 = nz - 1;
          }
          if (xoff1 < 0) {
            xoff1 = 0;
          } else if (xoff1 >= nx) {
            xoff1 = nx - 1;
          }
          if (yoff1 < 0) {
            yoff1 = 0;
          } else if (yoff1 >= ny) {
            yoff1 = ny - 1;
          }
          if (zoff1 < 0) {
            zoff1 = 0;
          } else if (zoff1 >= nz) {
            zoff1 = nz - 1;
          }
          xoff0 *= xstep;
          yoff0 *= ystep;
          zoff0 *= zstep;
          xoff1 *= xstep;
          yoff1 *= ystep;
          zoff1 *= zstep;
          for (var xoff = xoff0; xoff <= xoff1; xoff += xstep) {
            for (var yoff = yoff0; yoff <= yoff1; yoff += ystep) {
              for (var zoff = zoff0; zoff <= zoff1; zoff += zstep) {
                var idx = xoff + yoff + zoff;
                bins[idx][binLengths[idx]++] = bi;
              }
            }
          }
        }
        for (var i = 0; i !== N; i++) {
          var bi = bodies[i];
          var si = bi.shape;
          switch (si.type) {
            case SPHERE:
              var x = bi.position.x,
                  y = bi.position.y,
                  z = bi.position.z;
              var r = si.radius;
              addBoxToBins(x - r, y - r, z - r, x + r, y + r, z + r, bi);
              break;
            case PLANE:
              if (si.worldNormalNeedsUpdate) {
                si.computeWorldNormal(bi.quaternion);
              }
              var planeNormal = si.worldNormal;
              var xreset = xmin + binsizeX * 0.5 - bi.position.x,
                  yreset = ymin + binsizeY * 0.5 - bi.position.y,
                  zreset = zmin + binsizeZ * 0.5 - bi.position.z;
              var d = GridBroadphase_collisionPairs_d;
              d.set(xreset, yreset, zreset);
              for (var xi = 0, xoff = 0; xi !== nx; xi++, xoff += xstep, d.y = yreset, d.x += binsizeX) {
                for (var yi = 0, yoff = 0; yi !== ny; yi++, yoff += ystep, d.z = zreset, d.y += binsizeY) {
                  for (var zi = 0, zoff = 0; zi !== nz; zi++, zoff += zstep, d.z += binsizeZ) {
                    if (d.dot(planeNormal) < binRadius) {
                      var idx = xoff + yoff + zoff;
                      bins[idx][binLengths[idx]++] = bi;
                    }
                  }
                }
              }
              break;
            default:
              if (bi.aabbNeedsUpdate) {
                bi.computeAABB();
              }
              addBoxToBins(bi.aabb.lowerBound.x, bi.aabb.lowerBound.y, bi.aabb.lowerBound.z, bi.aabb.upperBound.x, bi.aabb.upperBound.y, bi.aabb.upperBound.z, bi);
              break;
          }
        }
        for (var i = 0; i !== Nbins; i++) {
          var binLength = binLengths[i];
          if (binLength > 1) {
            var bin = bins[i];
            for (var xi = 0; xi !== binLength; xi++) {
              var bi = bin[xi];
              for (var yi = 0; yi !== xi; yi++) {
                var bj = bin[yi];
                if (this.needBroadphaseCollision(bi, bj)) {
                  this.intersectionTest(bi, bj, pairs1, pairs2);
                }
              }
            }
          }
        }
        this.makePairsUnique(pairs1, pairs2);
      };
    }, {
      "../math/Vec3": 30,
      "../shapes/Shape": 43,
      "./Broadphase": 5
    }],
    7: [function (_dereq_, module, exports) {
      module.exports = NaiveBroadphase;
      var Broadphase = _dereq_('./Broadphase');
      var AABB = _dereq_('./AABB');
      function NaiveBroadphase() {
        Broadphase.apply(this);
      }
      NaiveBroadphase.prototype = new Broadphase();
      NaiveBroadphase.prototype.constructor = NaiveBroadphase;
      NaiveBroadphase.prototype.collisionPairs = function (world, pairs1, pairs2) {
        var bodies = world.bodies,
            n = bodies.length,
            i,
            j,
            bi,
            bj;
        for (i = 0; i !== n; i++) {
          for (j = 0; j !== i; j++) {
            bi = bodies[i];
            bj = bodies[j];
            if (!this.needBroadphaseCollision(bi, bj)) {
              continue;
            }
            this.intersectionTest(bi, bj, pairs1, pairs2);
          }
        }
      };
      var tmpAABB = new AABB();
      NaiveBroadphase.prototype.aabbQuery = function (world, aabb, result) {
        result = result || [];
        for (var i = 0; i < world.bodies.length; i++) {
          var b = world.bodies[i];
          if (b.aabbNeedsUpdate) {
            b.computeAABB();
          }
          if (b.aabb.overlaps(aabb)) {
            result.push(b);
          }
        }
        return result;
      };
    }, {
      "./AABB": 3,
      "./Broadphase": 5
    }],
    8: [function (_dereq_, module, exports) {
      module.exports = ObjectCollisionMatrix;
      function ObjectCollisionMatrix() {
        this.matrix = {};
      }
      ObjectCollisionMatrix.prototype.get = function (i, j) {
        i = i.id;
        j = j.id;
        if (j > i) {
          var temp = j;
          j = i;
          i = temp;
        }
        return i + '-' + j in this.matrix;
      };
      ObjectCollisionMatrix.prototype.set = function (i, j, value) {
        i = i.id;
        j = j.id;
        if (j > i) {
          var temp = j;
          j = i;
          i = temp;
        }
        if (value) {
          this.matrix[i + '-' + j] = true;
        } else {
          delete this.matrix[i + '-' + j];
        }
      };
      ObjectCollisionMatrix.prototype.reset = function () {
        this.matrix = {};
      };
      ObjectCollisionMatrix.prototype.setNumObjects = function (n) {};
    }, {}],
    9: [function (_dereq_, module, exports) {
      module.exports = Ray;
      var Vec3 = _dereq_('../math/Vec3');
      var Quaternion = _dereq_('../math/Quaternion');
      var Transform = _dereq_('../math/Transform');
      var ConvexPolyhedron = _dereq_('../shapes/ConvexPolyhedron');
      var Box = _dereq_('../shapes/Box');
      var RaycastResult = _dereq_('../collision/RaycastResult');
      var Shape = _dereq_('../shapes/Shape');
      var AABB = _dereq_('../collision/AABB');
      function Ray(from, to) {
        this.from = from ? from.clone() : new Vec3();
        this.to = to ? to.clone() : new Vec3();
        this._direction = new Vec3();
        this.precision = 0.0001;
        this.checkCollisionResponse = true;
        this.skipBackfaces = false;
        this.collisionFilterMask = -1;
        this.collisionFilterGroup = -1;
        this.mode = Ray.ANY;
        this.result = new RaycastResult();
        this.hasHit = false;
        this.callback = function (result) {};
      }
      Ray.prototype.constructor = Ray;
      Ray.CLOSEST = 1;
      Ray.ANY = 2;
      Ray.ALL = 4;
      var tmpAABB = new AABB();
      var tmpArray = [];
      Ray.prototype.intersectWorld = function (world, options) {
        this.mode = options.mode || Ray.ANY;
        this.result = options.result || new RaycastResult();
        this.skipBackfaces = !!options.skipBackfaces;
        this.collisionFilterMask = typeof options.collisionFilterMask !== 'undefined' ? options.collisionFilterMask : -1;
        this.collisionFilterGroup = typeof options.collisionFilterGroup !== 'undefined' ? options.collisionFilterGroup : -1;
        if (options.from) {
          this.from.copy(options.from);
        }
        if (options.to) {
          this.to.copy(options.to);
        }
        this.callback = options.callback || function () {};
        this.hasHit = false;
        this.result.reset();
        this._updateDirection();
        this.getAABB(tmpAABB);
        tmpArray.length = 0;
        world.broadphase.aabbQuery(world, tmpAABB, tmpArray);
        this.intersectBodies(tmpArray);
        return this.hasHit;
      };
      var v1 = new Vec3(),
          v2 = new Vec3();
      Ray.pointInTriangle = pointInTriangle;
      function pointInTriangle(p, a, b, c) {
        c.vsub(a, v0);
        b.vsub(a, v1);
        p.vsub(a, v2);
        var dot00 = v0.dot(v0);
        var dot01 = v0.dot(v1);
        var dot02 = v0.dot(v2);
        var dot11 = v1.dot(v1);
        var dot12 = v1.dot(v2);
        var u, v;
        return (u = dot11 * dot02 - dot01 * dot12) >= 0 && (v = dot00 * dot12 - dot01 * dot02) >= 0 && u + v < dot00 * dot11 - dot01 * dot01;
      }
      var intersectBody_xi = new Vec3();
      var intersectBody_qi = new Quaternion();
      Ray.prototype.intersectBody = function (body, result) {
        if (result) {
          this.result = result;
          this._updateDirection();
        }
        var checkCollisionResponse = this.checkCollisionResponse;
        if (checkCollisionResponse && !body.collisionResponse) {
          return;
        }
        if ((this.collisionFilterGroup & body.collisionFilterMask) === 0 || (body.collisionFilterGroup & this.collisionFilterMask) === 0) {
          return;
        }
        var xi = intersectBody_xi;
        var qi = intersectBody_qi;
        for (var i = 0, N = body.shapes.length; i < N; i++) {
          var shape = body.shapes[i];
          if (checkCollisionResponse && !shape.collisionResponse) {
            continue;
          }
          body.quaternion.mult(body.shapeOrientations[i], qi);
          body.quaternion.vmult(body.shapeOffsets[i], xi);
          xi.vadd(body.position, xi);
          this.intersectShape(shape, qi, xi, body);
          if (this.result._shouldStop) {
            break;
          }
        }
      };
      Ray.prototype.intersectBodies = function (bodies, result) {
        if (result) {
          this.result = result;
          this._updateDirection();
        }
        for (var i = 0, l = bodies.length; !this.result._shouldStop && i < l; i++) {
          this.intersectBody(bodies[i]);
        }
      };
      Ray.prototype._updateDirection = function () {
        this.to.vsub(this.from, this._direction);
        this._direction.normalize();
      };
      Ray.prototype.intersectShape = function (shape, quat, position, body) {
        var from = this.from;
        var distance = distanceFromIntersection(from, this._direction, position);
        if (distance > shape.boundingSphereRadius) {
          return;
        }
        var intersectMethod = this[shape.type];
        if (intersectMethod) {
          intersectMethod.call(this, shape, quat, position, body);
        }
      };
      var vector = new Vec3();
      var normal = new Vec3();
      var intersectPoint = new Vec3();
      var a = new Vec3();
      var b = new Vec3();
      var c = new Vec3();
      var d = new Vec3();
      var tmpRaycastResult = new RaycastResult();
      Ray.prototype.intersectBox = function (shape, quat, position, body) {
        return this.intersectConvex(shape.convexPolyhedronRepresentation, quat, position, body);
      };
      Ray.prototype[Shape.types.BOX] = Ray.prototype.intersectBox;
      Ray.prototype.intersectPlane = function (shape, quat, position, body) {
        var from = this.from;
        var to = this.to;
        var direction = this._direction;
        var worldNormal = new Vec3(0, 0, 1);
        quat.vmult(worldNormal, worldNormal);
        var len = new Vec3();
        from.vsub(position, len);
        var planeToFrom = len.dot(worldNormal);
        to.vsub(position, len);
        var planeToTo = len.dot(worldNormal);
        if (planeToFrom * planeToTo > 0) {
          return;
        }
        if (from.distanceTo(to) < planeToFrom) {
          return;
        }
        var n_dot_dir = worldNormal.dot(direction);
        if (Math.abs(n_dot_dir) < this.precision) {
          return;
        }
        var planePointToFrom = new Vec3();
        var dir_scaled_with_t = new Vec3();
        var hitPointWorld = new Vec3();
        from.vsub(position, planePointToFrom);
        var t = -worldNormal.dot(planePointToFrom) / n_dot_dir;
        direction.scale(t, dir_scaled_with_t);
        from.vadd(dir_scaled_with_t, hitPointWorld);
        this.reportIntersection(worldNormal, hitPointWorld, shape, body, -1);
      };
      Ray.prototype[Shape.types.PLANE] = Ray.prototype.intersectPlane;
      Ray.prototype.getAABB = function (result) {
        var to = this.to;
        var from = this.from;
        result.lowerBound.x = Math.min(to.x, from.x);
        result.lowerBound.y = Math.min(to.y, from.y);
        result.lowerBound.z = Math.min(to.z, from.z);
        result.upperBound.x = Math.max(to.x, from.x);
        result.upperBound.y = Math.max(to.y, from.y);
        result.upperBound.z = Math.max(to.z, from.z);
      };
      var intersectConvexOptions = {
        faceList: [0]
      };
      Ray.prototype.intersectHeightfield = function (shape, quat, position, body) {
        var data = shape.data,
            w = shape.elementSize,
            worldPillarOffset = new Vec3();
        var localRay = new Ray(this.from, this.to);
        Transform.pointToLocalFrame(position, quat, localRay.from, localRay.from);
        Transform.pointToLocalFrame(position, quat, localRay.to, localRay.to);
        var index = [];
        var iMinX = null;
        var iMinY = null;
        var iMaxX = null;
        var iMaxY = null;
        var inside = shape.getIndexOfPosition(localRay.from.x, localRay.from.y, index, false);
        if (inside) {
          iMinX = index[0];
          iMinY = index[1];
          iMaxX = index[0];
          iMaxY = index[1];
        }
        inside = shape.getIndexOfPosition(localRay.to.x, localRay.to.y, index, false);
        if (inside) {
          if (iMinX === null || index[0] < iMinX) {
            iMinX = index[0];
          }
          if (iMaxX === null || index[0] > iMaxX) {
            iMaxX = index[0];
          }
          if (iMinY === null || index[1] < iMinY) {
            iMinY = index[1];
          }
          if (iMaxY === null || index[1] > iMaxY) {
            iMaxY = index[1];
          }
        }
        if (iMinX === null) {
          return;
        }
        var minMax = [];
        shape.getRectMinMax(iMinX, iMinY, iMaxX, iMaxY, minMax);
        for (var i = iMinX; i <= iMaxX; i++) {
          for (var j = iMinY; j <= iMaxY; j++) {
            if (this.result._shouldStop) {
              return;
            }
            shape.getConvexTrianglePillar(i, j, false);
            Transform.pointToWorldFrame(position, quat, shape.pillarOffset, worldPillarOffset);
            this.intersectConvex(shape.pillarConvex, quat, worldPillarOffset, body, intersectConvexOptions);
            if (this.result._shouldStop) {
              return;
            }
            shape.getConvexTrianglePillar(i, j, true);
            Transform.pointToWorldFrame(position, quat, shape.pillarOffset, worldPillarOffset);
            this.intersectConvex(shape.pillarConvex, quat, worldPillarOffset, body, intersectConvexOptions);
          }
        }
      };
      Ray.prototype[Shape.types.HEIGHTFIELD] = Ray.prototype.intersectHeightfield;
      var Ray_intersectSphere_intersectionPoint = new Vec3();
      var Ray_intersectSphere_normal = new Vec3();
      Ray.prototype.intersectSphere = function (shape, quat, position, body) {
        var from = this.from,
            to = this.to,
            r = shape.radius;
        var a = Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2) + Math.pow(to.z - from.z, 2);
        var b = 2 * ((to.x - from.x) * (from.x - position.x) + (to.y - from.y) * (from.y - position.y) + (to.z - from.z) * (from.z - position.z));
        var c = Math.pow(from.x - position.x, 2) + Math.pow(from.y - position.y, 2) + Math.pow(from.z - position.z, 2) - Math.pow(r, 2);
        var delta = Math.pow(b, 2) - 4 * a * c;
        var intersectionPoint = Ray_intersectSphere_intersectionPoint;
        var normal = Ray_intersectSphere_normal;
        if (delta < 0) {
          return;
        } else if (delta === 0) {
          from.lerp(to, delta, intersectionPoint);
          intersectionPoint.vsub(position, normal);
          normal.normalize();
          this.reportIntersection(normal, intersectionPoint, shape, body, -1);
        } else {
          var d1 = (-b - Math.sqrt(delta)) / (2 * a);
          var d2 = (-b + Math.sqrt(delta)) / (2 * a);
          if (d1 >= 0 && d1 <= 1) {
            from.lerp(to, d1, intersectionPoint);
            intersectionPoint.vsub(position, normal);
            normal.normalize();
            this.reportIntersection(normal, intersectionPoint, shape, body, -1);
          }
          if (this.result._shouldStop) {
            return;
          }
          if (d2 >= 0 && d2 <= 1) {
            from.lerp(to, d2, intersectionPoint);
            intersectionPoint.vsub(position, normal);
            normal.normalize();
            this.reportIntersection(normal, intersectionPoint, shape, body, -1);
          }
        }
      };
      Ray.prototype[Shape.types.SPHERE] = Ray.prototype.intersectSphere;
      var intersectConvex_normal = new Vec3();
      var intersectConvex_minDistNormal = new Vec3();
      var intersectConvex_minDistIntersect = new Vec3();
      var intersectConvex_vector = new Vec3();
      Ray.prototype.intersectConvex = function intersectConvex(shape, quat, position, body, options) {
        var normal = intersectConvex_normal;
        var vector = intersectConvex_vector;
        var faceList = options && options.faceList || null;
        var faces = shape.faces,
            vertices = shape.vertices,
            normals = shape.faceNormals;
        var direction = this._direction;
        var from = this.from;
        var to = this.to;
        var fromToDistance = from.distanceTo(to);
        var Nfaces = faceList ? faceList.length : faces.length;
        var result = this.result;
        for (var j = 0; !result._shouldStop && j < Nfaces; j++) {
          var fi = faceList ? faceList[j] : j;
          var face = faces[fi];
          var faceNormal = normals[fi];
          var q = quat;
          var x = position;
          vector.copy(vertices[face[0]]);
          q.vmult(vector, vector);
          vector.vadd(x, vector);
          vector.vsub(from, vector);
          q.vmult(faceNormal, normal);
          var dot = direction.dot(normal);
          if (Math.abs(dot) < this.precision) {
            continue;
          }
          var scalar = normal.dot(vector) / dot;
          if (scalar < 0) {
            continue;
          }
          direction.mult(scalar, intersectPoint);
          intersectPoint.vadd(from, intersectPoint);
          a.copy(vertices[face[0]]);
          q.vmult(a, a);
          x.vadd(a, a);
          for (var i = 1; !result._shouldStop && i < face.length - 1; i++) {
            b.copy(vertices[face[i]]);
            c.copy(vertices[face[i + 1]]);
            q.vmult(b, b);
            q.vmult(c, c);
            x.vadd(b, b);
            x.vadd(c, c);
            var distance = intersectPoint.distanceTo(from);
            if (!(pointInTriangle(intersectPoint, a, b, c) || pointInTriangle(intersectPoint, b, a, c)) || distance > fromToDistance) {
              continue;
            }
            this.reportIntersection(normal, intersectPoint, shape, body, fi);
          }
        }
      };
      Ray.prototype[Shape.types.CONVEXPOLYHEDRON] = Ray.prototype.intersectConvex;
      var intersectTrimesh_normal = new Vec3();
      var intersectTrimesh_localDirection = new Vec3();
      var intersectTrimesh_localFrom = new Vec3();
      var intersectTrimesh_localTo = new Vec3();
      var intersectTrimesh_worldNormal = new Vec3();
      var intersectTrimesh_worldIntersectPoint = new Vec3();
      var intersectTrimesh_localAABB = new AABB();
      var intersectTrimesh_triangles = [];
      var intersectTrimesh_treeTransform = new Transform();
      Ray.prototype.intersectTrimesh = function intersectTrimesh(mesh, quat, position, body, options) {
        var normal = intersectTrimesh_normal;
        var triangles = intersectTrimesh_triangles;
        var treeTransform = intersectTrimesh_treeTransform;
        var vector = intersectConvex_vector;
        var localDirection = intersectTrimesh_localDirection;
        var localFrom = intersectTrimesh_localFrom;
        var localTo = intersectTrimesh_localTo;
        var worldIntersectPoint = intersectTrimesh_worldIntersectPoint;
        var worldNormal = intersectTrimesh_worldNormal;
        var faceList = options && options.faceList || null;
        var indices = mesh.indices,
            vertices = mesh.vertices,
            normals = mesh.faceNormals;
        var from = this.from;
        var to = this.to;
        var direction = this._direction;
        treeTransform.position.copy(position);
        treeTransform.quaternion.copy(quat);
        Transform.vectorToLocalFrame(position, quat, direction, localDirection);
        Transform.pointToLocalFrame(position, quat, from, localFrom);
        Transform.pointToLocalFrame(position, quat, to, localTo);
        var fromToDistanceSquared = localFrom.distanceSquared(localTo);
        mesh.tree.rayQuery(this, treeTransform, triangles);
        for (var i = 0, N = triangles.length; !this.result._shouldStop && i !== N; i++) {
          var trianglesIndex = triangles[i];
          mesh.getNormal(trianglesIndex, normal);
          mesh.getVertex(indices[trianglesIndex * 3], a);
          a.vsub(localFrom, vector);
          var dot = localDirection.dot(normal);
          var scalar = normal.dot(vector) / dot;
          if (scalar < 0) {
            continue;
          }
          localDirection.scale(scalar, intersectPoint);
          intersectPoint.vadd(localFrom, intersectPoint);
          mesh.getVertex(indices[trianglesIndex * 3 + 1], b);
          mesh.getVertex(indices[trianglesIndex * 3 + 2], c);
          var squaredDistance = intersectPoint.distanceSquared(localFrom);
          if (!(pointInTriangle(intersectPoint, b, a, c) || pointInTriangle(intersectPoint, a, b, c)) || squaredDistance > fromToDistanceSquared) {
            continue;
          }
          Transform.vectorToWorldFrame(quat, normal, worldNormal);
          Transform.pointToWorldFrame(position, quat, intersectPoint, worldIntersectPoint);
          this.reportIntersection(worldNormal, worldIntersectPoint, mesh, body, trianglesIndex);
        }
        triangles.length = 0;
      };
      Ray.prototype[Shape.types.TRIMESH] = Ray.prototype.intersectTrimesh;
      Ray.prototype.reportIntersection = function (normal, hitPointWorld, shape, body, hitFaceIndex) {
        var from = this.from;
        var to = this.to;
        var distance = from.distanceTo(hitPointWorld);
        var result = this.result;
        if (this.skipBackfaces && normal.dot(this._direction) > 0) {
          return;
        }
        result.hitFaceIndex = typeof hitFaceIndex !== 'undefined' ? hitFaceIndex : -1;
        switch (this.mode) {
          case Ray.ALL:
            this.hasHit = true;
            result.set(from, to, normal, hitPointWorld, shape, body, distance);
            result.hasHit = true;
            this.callback(result);
            break;
          case Ray.CLOSEST:
            if (distance < result.distance || !result.hasHit) {
              this.hasHit = true;
              result.hasHit = true;
              result.set(from, to, normal, hitPointWorld, shape, body, distance);
            }
            break;
          case Ray.ANY:
            this.hasHit = true;
            result.hasHit = true;
            result.set(from, to, normal, hitPointWorld, shape, body, distance);
            result._shouldStop = true;
            break;
        }
      };
      var v0 = new Vec3(),
          intersect = new Vec3();
      function distanceFromIntersection(from, direction, position) {
        position.vsub(from, v0);
        var dot = v0.dot(direction);
        direction.mult(dot, intersect);
        intersect.vadd(from, intersect);
        var distance = position.distanceTo(intersect);
        return distance;
      }
    }, {
      "../collision/AABB": 3,
      "../collision/RaycastResult": 10,
      "../math/Quaternion": 28,
      "../math/Transform": 29,
      "../math/Vec3": 30,
      "../shapes/Box": 37,
      "../shapes/ConvexPolyhedron": 38,
      "../shapes/Shape": 43
    }],
    10: [function (_dereq_, module, exports) {
      var Vec3 = _dereq_('../math/Vec3');
      module.exports = RaycastResult;
      function RaycastResult() {
        this.rayFromWorld = new Vec3();
        this.rayToWorld = new Vec3();
        this.hitNormalWorld = new Vec3();
        this.hitPointWorld = new Vec3();
        this.hasHit = false;
        this.shape = null;
        this.body = null;
        this.hitFaceIndex = -1;
        this.distance = -1;
        this._shouldStop = false;
      }
      RaycastResult.prototype.reset = function () {
        this.rayFromWorld.setZero();
        this.rayToWorld.setZero();
        this.hitNormalWorld.setZero();
        this.hitPointWorld.setZero();
        this.hasHit = false;
        this.shape = null;
        this.body = null;
        this.hitFaceIndex = -1;
        this.distance = -1;
        this._shouldStop = false;
      };
      RaycastResult.prototype.abort = function () {
        this._shouldStop = true;
      };
      RaycastResult.prototype.set = function (rayFromWorld, rayToWorld, hitNormalWorld, hitPointWorld, shape, body, distance) {
        this.rayFromWorld.copy(rayFromWorld);
        this.rayToWorld.copy(rayToWorld);
        this.hitNormalWorld.copy(hitNormalWorld);
        this.hitPointWorld.copy(hitPointWorld);
        this.shape = shape;
        this.body = body;
        this.distance = distance;
      };
    }, {
      "../math/Vec3": 30
    }],
    11: [function (_dereq_, module, exports) {
      var Shape = _dereq_('../shapes/Shape');
      var Broadphase = _dereq_('../collision/Broadphase');
      module.exports = SAPBroadphase;
      function SAPBroadphase(world) {
        Broadphase.apply(this);
        this.axisList = [];
        this.world = null;
        this.axisIndex = 0;
        var axisList = this.axisList;
        this._addBodyHandler = function (e) {
          axisList.push(e.body);
        };
        this._removeBodyHandler = function (e) {
          var idx = axisList.indexOf(e.body);
          if (idx !== -1) {
            axisList.splice(idx, 1);
          }
        };
        if (world) {
          this.setWorld(world);
        }
      }
      SAPBroadphase.prototype = new Broadphase();
      SAPBroadphase.prototype.setWorld = function (world) {
        this.axisList.length = 0;
        for (var i = 0; i < world.bodies.length; i++) {
          this.axisList.push(world.bodies[i]);
        }
        world.removeEventListener("addBody", this._addBodyHandler);
        world.removeEventListener("removeBody", this._removeBodyHandler);
        world.addEventListener("addBody", this._addBodyHandler);
        world.addEventListener("removeBody", this._removeBodyHandler);
        this.world = world;
        this.dirty = true;
      };
      SAPBroadphase.insertionSortX = function (a) {
        for (var i = 1, l = a.length; i < l; i++) {
          var v = a[i];
          for (var j = i - 1; j >= 0; j--) {
            if (a[j].aabb.lowerBound.x <= v.aabb.lowerBound.x) {
              break;
            }
            a[j + 1] = a[j];
          }
          a[j + 1] = v;
        }
        return a;
      };
      SAPBroadphase.insertionSortY = function (a) {
        for (var i = 1, l = a.length; i < l; i++) {
          var v = a[i];
          for (var j = i - 1; j >= 0; j--) {
            if (a[j].aabb.lowerBound.y <= v.aabb.lowerBound.y) {
              break;
            }
            a[j + 1] = a[j];
          }
          a[j + 1] = v;
        }
        return a;
      };
      SAPBroadphase.insertionSortZ = function (a) {
        for (var i = 1, l = a.length; i < l; i++) {
          var v = a[i];
          for (var j = i - 1; j >= 0; j--) {
            if (a[j].aabb.lowerBound.z <= v.aabb.lowerBound.z) {
              break;
            }
            a[j + 1] = a[j];
          }
          a[j + 1] = v;
        }
        return a;
      };
      SAPBroadphase.prototype.collisionPairs = function (world, p1, p2) {
        var bodies = this.axisList,
            N = bodies.length,
            axisIndex = this.axisIndex,
            i,
            j;
        if (this.dirty) {
          this.sortList();
          this.dirty = false;
        }
        for (i = 0; i !== N; i++) {
          var bi = bodies[i];
          for (j = i + 1; j < N; j++) {
            var bj = bodies[j];
            if (!this.needBroadphaseCollision(bi, bj)) {
              continue;
            }
            if (!SAPBroadphase.checkBounds(bi, bj, axisIndex)) {
              break;
            }
            this.intersectionTest(bi, bj, p1, p2);
          }
        }
      };
      SAPBroadphase.prototype.sortList = function () {
        var axisList = this.axisList;
        var axisIndex = this.axisIndex;
        var N = axisList.length;
        for (var i = 0; i !== N; i++) {
          var bi = axisList[i];
          if (bi.aabbNeedsUpdate) {
            bi.computeAABB();
          }
        }
        if (axisIndex === 0) {
          SAPBroadphase.insertionSortX(axisList);
        } else if (axisIndex === 1) {
          SAPBroadphase.insertionSortY(axisList);
        } else if (axisIndex === 2) {
          SAPBroadphase.insertionSortZ(axisList);
        }
      };
      SAPBroadphase.checkBounds = function (bi, bj, axisIndex) {
        var biPos;
        var bjPos;
        if (axisIndex === 0) {
          biPos = bi.position.x;
          bjPos = bj.position.x;
        } else if (axisIndex === 1) {
          biPos = bi.position.y;
          bjPos = bj.position.y;
        } else if (axisIndex === 2) {
          biPos = bi.position.z;
          bjPos = bj.position.z;
        }
        var ri = bi.boundingRadius,
            rj = bj.boundingRadius,
            boundA2 = biPos + ri,
            boundB1 = bjPos - rj;
        return boundB1 < boundA2;
      };
      SAPBroadphase.prototype.autoDetectAxis = function () {
        var sumX = 0,
            sumX2 = 0,
            sumY = 0,
            sumY2 = 0,
            sumZ = 0,
            sumZ2 = 0,
            bodies = this.axisList,
            N = bodies.length,
            invN = 1 / N;
        for (var i = 0; i !== N; i++) {
          var b = bodies[i];
          var centerX = b.position.x;
          sumX += centerX;
          sumX2 += centerX * centerX;
          var centerY = b.position.y;
          sumY += centerY;
          sumY2 += centerY * centerY;
          var centerZ = b.position.z;
          sumZ += centerZ;
          sumZ2 += centerZ * centerZ;
        }
        var varianceX = sumX2 - sumX * sumX * invN,
            varianceY = sumY2 - sumY * sumY * invN,
            varianceZ = sumZ2 - sumZ * sumZ * invN;
        if (varianceX > varianceY) {
          if (varianceX > varianceZ) {
            this.axisIndex = 0;
          } else {
            this.axisIndex = 2;
          }
        } else if (varianceY > varianceZ) {
          this.axisIndex = 1;
        } else {
          this.axisIndex = 2;
        }
      };
      SAPBroadphase.prototype.aabbQuery = function (world, aabb, result) {
        result = result || [];
        if (this.dirty) {
          this.sortList();
          this.dirty = false;
        }
        var axisIndex = this.axisIndex,
            axis = 'x';
        if (axisIndex === 1) {
          axis = 'y';
        }
        if (axisIndex === 2) {
          axis = 'z';
        }
        var axisList = this.axisList;
        var lower = aabb.lowerBound[axis];
        var upper = aabb.upperBound[axis];
        for (var i = 0; i < axisList.length; i++) {
          var b = axisList[i];
          if (b.aabbNeedsUpdate) {
            b.computeAABB();
          }
          if (b.aabb.overlaps(aabb)) {
            result.push(b);
          }
        }
        return result;
      };
    }, {
      "../collision/Broadphase": 5,
      "../shapes/Shape": 43
    }],
    12: [function (_dereq_, module, exports) {
      module.exports = ConeTwistConstraint;
      var Constraint = _dereq_('./Constraint');
      var PointToPointConstraint = _dereq_('./PointToPointConstraint');
      var ConeEquation = _dereq_('../equations/ConeEquation');
      var RotationalEquation = _dereq_('../equations/RotationalEquation');
      var ContactEquation = _dereq_('../equations/ContactEquation');
      var Vec3 = _dereq_('../math/Vec3');
      function ConeTwistConstraint(bodyA, bodyB, options) {
        options = options || {};
        var maxForce = typeof options.maxForce !== 'undefined' ? options.maxForce : 1e6;
        var pivotA = options.pivotA ? options.pivotA.clone() : new Vec3();
        var pivotB = options.pivotB ? options.pivotB.clone() : new Vec3();
        this.axisA = options.axisA ? options.axisA.clone() : new Vec3();
        this.axisB = options.axisB ? options.axisB.clone() : new Vec3();
        PointToPointConstraint.call(this, bodyA, pivotA, bodyB, pivotB, maxForce);
        this.collideConnected = !!options.collideConnected;
        this.angle = typeof options.angle !== 'undefined' ? options.angle : 0;
        var c = this.coneEquation = new ConeEquation(bodyA, bodyB, options);
        var t = this.twistEquation = new RotationalEquation(bodyA, bodyB, options);
        this.twistAngle = typeof options.twistAngle !== 'undefined' ? options.twistAngle : 0;
        c.maxForce = 0;
        c.minForce = -maxForce;
        t.maxForce = 0;
        t.minForce = -maxForce;
        this.equations.push(c, t);
      }
      ConeTwistConstraint.prototype = new PointToPointConstraint();
      ConeTwistConstraint.constructor = ConeTwistConstraint;
      var ConeTwistConstraint_update_tmpVec1 = new Vec3();
      var ConeTwistConstraint_update_tmpVec2 = new Vec3();
      ConeTwistConstraint.prototype.update = function () {
        var bodyA = this.bodyA,
            bodyB = this.bodyB,
            cone = this.coneEquation,
            twist = this.twistEquation;
        PointToPointConstraint.prototype.update.call(this);
        bodyA.vectorToWorldFrame(this.axisA, cone.axisA);
        bodyB.vectorToWorldFrame(this.axisB, cone.axisB);
        this.axisA.tangents(twist.axisA, twist.axisA);
        bodyA.vectorToWorldFrame(twist.axisA, twist.axisA);
        this.axisB.tangents(twist.axisB, twist.axisB);
        bodyB.vectorToWorldFrame(twist.axisB, twist.axisB);
        cone.angle = this.angle;
        twist.maxAngle = this.twistAngle;
      };
    }, {
      "../equations/ConeEquation": 18,
      "../equations/ContactEquation": 19,
      "../equations/RotationalEquation": 22,
      "../math/Vec3": 30,
      "./Constraint": 13,
      "./PointToPointConstraint": 17
    }],
    13: [function (_dereq_, module, exports) {
      module.exports = Constraint;
      var Utils = _dereq_('../utils/Utils');
      function Constraint(bodyA, bodyB, options) {
        options = Utils.defaults(options, {
          collideConnected: true,
          wakeUpBodies: true
        });
        this.equations = [];
        this.bodyA = bodyA;
        this.bodyB = bodyB;
        this.id = Constraint.idCounter++;
        this.collideConnected = options.collideConnected;
        if (options.wakeUpBodies) {
          if (bodyA) {
            bodyA.wakeUp();
          }
          if (bodyB) {
            bodyB.wakeUp();
          }
        }
      }
      Constraint.prototype.update = function () {
        throw new Error("method update() not implmemented in this Constraint subclass!");
      };
      Constraint.prototype.enable = function () {
        var eqs = this.equations;
        for (var i = 0; i < eqs.length; i++) {
          eqs[i].enabled = true;
        }
      };
      Constraint.prototype.disable = function () {
        var eqs = this.equations;
        for (var i = 0; i < eqs.length; i++) {
          eqs[i].enabled = false;
        }
      };
      Constraint.idCounter = 0;
    }, {
      "../utils/Utils": 53
    }],
    14: [function (_dereq_, module, exports) {
      module.exports = DistanceConstraint;
      var Constraint = _dereq_('./Constraint');
      var ContactEquation = _dereq_('../equations/ContactEquation');
      function DistanceConstraint(bodyA, bodyB, distance, maxForce) {
        Constraint.call(this, bodyA, bodyB);
        if (typeof distance === "undefined") {
          distance = bodyA.position.distanceTo(bodyB.position);
        }
        if (typeof maxForce === "undefined") {
          maxForce = 1e6;
        }
        this.distance = distance;
        var eq = this.distanceEquation = new ContactEquation(bodyA, bodyB);
        this.equations.push(eq);
        eq.minForce = -maxForce;
        eq.maxForce = maxForce;
      }
      DistanceConstraint.prototype = new Constraint();
      DistanceConstraint.prototype.update = function () {
        var bodyA = this.bodyA;
        var bodyB = this.bodyB;
        var eq = this.distanceEquation;
        var halfDist = this.distance * 0.5;
        var normal = eq.ni;
        bodyB.position.vsub(bodyA.position, normal);
        normal.normalize();
        normal.mult(halfDist, eq.ri);
        normal.mult(-halfDist, eq.rj);
      };
    }, {
      "../equations/ContactEquation": 19,
      "./Constraint": 13
    }],
    15: [function (_dereq_, module, exports) {
      module.exports = HingeConstraint;
      var Constraint = _dereq_('./Constraint');
      var PointToPointConstraint = _dereq_('./PointToPointConstraint');
      var RotationalEquation = _dereq_('../equations/RotationalEquation');
      var RotationalMotorEquation = _dereq_('../equations/RotationalMotorEquation');
      var ContactEquation = _dereq_('../equations/ContactEquation');
      var Vec3 = _dereq_('../math/Vec3');
      function HingeConstraint(bodyA, bodyB, options) {
        options = options || {};
        var maxForce = typeof options.maxForce !== 'undefined' ? options.maxForce : 1e6;
        var pivotA = options.pivotA ? options.pivotA.clone() : new Vec3();
        var pivotB = options.pivotB ? options.pivotB.clone() : new Vec3();
        PointToPointConstraint.call(this, bodyA, pivotA, bodyB, pivotB, maxForce);
        var axisA = this.axisA = options.axisA ? options.axisA.clone() : new Vec3(1, 0, 0);
        axisA.normalize();
        var axisB = this.axisB = options.axisB ? options.axisB.clone() : new Vec3(1, 0, 0);
        axisB.normalize();
        var r1 = this.rotationalEquation1 = new RotationalEquation(bodyA, bodyB, options);
        var r2 = this.rotationalEquation2 = new RotationalEquation(bodyA, bodyB, options);
        var motor = this.motorEquation = new RotationalMotorEquation(bodyA, bodyB, maxForce);
        motor.enabled = false;
        this.equations.push(r1,
        r2,
        motor);
      }
      HingeConstraint.prototype = new PointToPointConstraint();
      HingeConstraint.constructor = HingeConstraint;
      HingeConstraint.prototype.enableMotor = function () {
        this.motorEquation.enabled = true;
      };
      HingeConstraint.prototype.disableMotor = function () {
        this.motorEquation.enabled = false;
      };
      HingeConstraint.prototype.setMotorSpeed = function (speed) {
        this.motorEquation.targetVelocity = speed;
      };
      HingeConstraint.prototype.setMotorMaxForce = function (maxForce) {
        this.motorEquation.maxForce = maxForce;
        this.motorEquation.minForce = -maxForce;
      };
      var HingeConstraint_update_tmpVec1 = new Vec3();
      var HingeConstraint_update_tmpVec2 = new Vec3();
      HingeConstraint.prototype.update = function () {
        var bodyA = this.bodyA,
            bodyB = this.bodyB,
            motor = this.motorEquation,
            r1 = this.rotationalEquation1,
            r2 = this.rotationalEquation2,
            worldAxisA = HingeConstraint_update_tmpVec1,
            worldAxisB = HingeConstraint_update_tmpVec2;
        var axisA = this.axisA;
        var axisB = this.axisB;
        PointToPointConstraint.prototype.update.call(this);
        bodyA.quaternion.vmult(axisA, worldAxisA);
        bodyB.quaternion.vmult(axisB, worldAxisB);
        worldAxisA.tangents(r1.axisA, r2.axisA);
        r1.axisB.copy(worldAxisB);
        r2.axisB.copy(worldAxisB);
        if (this.motorEquation.enabled) {
          bodyA.quaternion.vmult(this.axisA, motor.axisA);
          bodyB.quaternion.vmult(this.axisB, motor.axisB);
        }
      };
    }, {
      "../equations/ContactEquation": 19,
      "../equations/RotationalEquation": 22,
      "../equations/RotationalMotorEquation": 23,
      "../math/Vec3": 30,
      "./Constraint": 13,
      "./PointToPointConstraint": 17
    }],
    16: [function (_dereq_, module, exports) {
      module.exports = LockConstraint;
      var Constraint = _dereq_('./Constraint');
      var PointToPointConstraint = _dereq_('./PointToPointConstraint');
      var RotationalEquation = _dereq_('../equations/RotationalEquation');
      var RotationalMotorEquation = _dereq_('../equations/RotationalMotorEquation');
      var ContactEquation = _dereq_('../equations/ContactEquation');
      var Vec3 = _dereq_('../math/Vec3');
      function LockConstraint(bodyA, bodyB, options) {
        options = options || {};
        var maxForce = typeof options.maxForce !== 'undefined' ? options.maxForce : 1e6;
        var pivotA = new Vec3();
        var pivotB = new Vec3();
        var halfWay = new Vec3();
        bodyA.position.vadd(bodyB.position, halfWay);
        halfWay.scale(0.5, halfWay);
        bodyB.pointToLocalFrame(halfWay, pivotB);
        bodyA.pointToLocalFrame(halfWay, pivotA);
        PointToPointConstraint.call(this, bodyA, pivotA, bodyB, pivotB, maxForce);
        var r1 = this.rotationalEquation1 = new RotationalEquation(bodyA, bodyB, options);
        var r2 = this.rotationalEquation2 = new RotationalEquation(bodyA, bodyB, options);
        var r3 = this.rotationalEquation3 = new RotationalEquation(bodyA, bodyB, options);
        this.equations.push(r1, r2, r3);
      }
      LockConstraint.prototype = new PointToPointConstraint();
      LockConstraint.constructor = LockConstraint;
      var LockConstraint_update_tmpVec1 = new Vec3();
      var LockConstraint_update_tmpVec2 = new Vec3();
      LockConstraint.prototype.update = function () {
        var bodyA = this.bodyA,
            bodyB = this.bodyB,
            motor = this.motorEquation,
            r1 = this.rotationalEquation1,
            r2 = this.rotationalEquation2,
            r3 = this.rotationalEquation3;
        PointToPointConstraint.prototype.update.call(this);
        bodyA.vectorToWorldFrame(Vec3.UNIT_X, r1.axisA);
        bodyB.vectorToWorldFrame(Vec3.UNIT_Y, r1.axisB);
        bodyA.vectorToWorldFrame(Vec3.UNIT_Y, r2.axisA);
        bodyB.vectorToWorldFrame(Vec3.UNIT_Z, r2.axisB);
        bodyA.vectorToWorldFrame(Vec3.UNIT_Z, r3.axisA);
        bodyB.vectorToWorldFrame(Vec3.UNIT_X, r3.axisB);
      };
    }, {
      "../equations/ContactEquation": 19,
      "../equations/RotationalEquation": 22,
      "../equations/RotationalMotorEquation": 23,
      "../math/Vec3": 30,
      "./Constraint": 13,
      "./PointToPointConstraint": 17
    }],
    17: [function (_dereq_, module, exports) {
      module.exports = PointToPointConstraint;
      var Constraint = _dereq_('./Constraint');
      var ContactEquation = _dereq_('../equations/ContactEquation');
      var Vec3 = _dereq_('../math/Vec3');
      function PointToPointConstraint(bodyA, pivotA, bodyB, pivotB, maxForce) {
        Constraint.call(this, bodyA, bodyB);
        maxForce = typeof maxForce !== 'undefined' ? maxForce : 1e6;
        this.pivotA = pivotA ? pivotA.clone() : new Vec3();
        this.pivotB = pivotB ? pivotB.clone() : new Vec3();
        var x = this.equationX = new ContactEquation(bodyA, bodyB);
        var y = this.equationY = new ContactEquation(bodyA, bodyB);
        var z = this.equationZ = new ContactEquation(bodyA, bodyB);
        this.equations.push(x, y, z);
        x.minForce = y.minForce = z.minForce = -maxForce;
        x.maxForce = y.maxForce = z.maxForce = maxForce;
        x.ni.set(1, 0, 0);
        y.ni.set(0, 1, 0);
        z.ni.set(0, 0, 1);
      }
      PointToPointConstraint.prototype = new Constraint();
      PointToPointConstraint.prototype.update = function () {
        var bodyA = this.bodyA;
        var bodyB = this.bodyB;
        var x = this.equationX;
        var y = this.equationY;
        var z = this.equationZ;
        bodyA.quaternion.vmult(this.pivotA, x.ri);
        bodyB.quaternion.vmult(this.pivotB, x.rj);
        y.ri.copy(x.ri);
        y.rj.copy(x.rj);
        z.ri.copy(x.ri);
        z.rj.copy(x.rj);
      };
    }, {
      "../equations/ContactEquation": 19,
      "../math/Vec3": 30,
      "./Constraint": 13
    }],
    18: [function (_dereq_, module, exports) {
      module.exports = ConeEquation;
      var Vec3 = _dereq_('../math/Vec3');
      var Mat3 = _dereq_('../math/Mat3');
      var Equation = _dereq_('./Equation');
      function ConeEquation(bodyA, bodyB, options) {
        options = options || {};
        var maxForce = typeof options.maxForce !== 'undefined' ? options.maxForce : 1e6;
        Equation.call(this, bodyA, bodyB, -maxForce, maxForce);
        this.axisA = options.axisA ? options.axisA.clone() : new Vec3(1, 0, 0);
        this.axisB = options.axisB ? options.axisB.clone() : new Vec3(0, 1, 0);
        this.angle = typeof options.angle !== 'undefined' ? options.angle : 0;
      }
      ConeEquation.prototype = new Equation();
      ConeEquation.prototype.constructor = ConeEquation;
      var tmpVec1 = new Vec3();
      var tmpVec2 = new Vec3();
      ConeEquation.prototype.computeB = function (h) {
        var a = this.a,
            b = this.b,
            ni = this.axisA,
            nj = this.axisB,
            nixnj = tmpVec1,
            njxni = tmpVec2,
            GA = this.jacobianElementA,
            GB = this.jacobianElementB;
        ni.cross(nj, nixnj);
        nj.cross(ni, njxni);
        GA.rotational.copy(njxni);
        GB.rotational.copy(nixnj);
        var g = Math.cos(this.angle) - ni.dot(nj),
            GW = this.computeGW(),
            GiMf = this.computeGiMf();
        var B = -g * a - GW * b - h * GiMf;
        return B;
      };
    }, {
      "../math/Mat3": 27,
      "../math/Vec3": 30,
      "./Equation": 20
    }],
    19: [function (_dereq_, module, exports) {
      module.exports = ContactEquation;
      var Equation = _dereq_('./Equation');
      var Vec3 = _dereq_('../math/Vec3');
      var Mat3 = _dereq_('../math/Mat3');
      function ContactEquation(bodyA, bodyB, maxForce) {
        maxForce = typeof maxForce !== 'undefined' ? maxForce : 1e6;
        Equation.call(this, bodyA, bodyB, 0, maxForce);
        this.restitution = 0.0;
        this.ri = new Vec3();
        this.rj = new Vec3();
        this.ni = new Vec3();
      }
      ContactEquation.prototype = new Equation();
      ContactEquation.prototype.constructor = ContactEquation;
      var ContactEquation_computeB_temp1 = new Vec3();
      var ContactEquation_computeB_temp2 = new Vec3();
      var ContactEquation_computeB_temp3 = new Vec3();
      ContactEquation.prototype.computeB = function (h) {
        var a = this.a,
            b = this.b,
            bi = this.bi,
            bj = this.bj,
            ri = this.ri,
            rj = this.rj,
            rixn = ContactEquation_computeB_temp1,
            rjxn = ContactEquation_computeB_temp2,
            vi = bi.velocity,
            wi = bi.angularVelocity,
            fi = bi.force,
            taui = bi.torque,
            vj = bj.velocity,
            wj = bj.angularVelocity,
            fj = bj.force,
            tauj = bj.torque,
            penetrationVec = ContactEquation_computeB_temp3,
            GA = this.jacobianElementA,
            GB = this.jacobianElementB,
            n = this.ni;
        ri.cross(n, rixn);
        rj.cross(n, rjxn);
        n.negate(GA.spatial);
        rixn.negate(GA.rotational);
        GB.spatial.copy(n);
        GB.rotational.copy(rjxn);
        penetrationVec.copy(bj.position);
        penetrationVec.vadd(rj, penetrationVec);
        penetrationVec.vsub(bi.position, penetrationVec);
        penetrationVec.vsub(ri, penetrationVec);
        var g = n.dot(penetrationVec);
        var ePlusOne = this.restitution + 1;
        var GW = ePlusOne * vj.dot(n) - ePlusOne * vi.dot(n) + wj.dot(rjxn) - wi.dot(rixn);
        var GiMf = this.computeGiMf();
        var B = -g * a - GW * b - h * GiMf;
        return B;
      };
      var ContactEquation_getImpactVelocityAlongNormal_vi = new Vec3();
      var ContactEquation_getImpactVelocityAlongNormal_vj = new Vec3();
      var ContactEquation_getImpactVelocityAlongNormal_xi = new Vec3();
      var ContactEquation_getImpactVelocityAlongNormal_xj = new Vec3();
      var ContactEquation_getImpactVelocityAlongNormal_relVel = new Vec3();
      ContactEquation.prototype.getImpactVelocityAlongNormal = function () {
        var vi = ContactEquation_getImpactVelocityAlongNormal_vi;
        var vj = ContactEquation_getImpactVelocityAlongNormal_vj;
        var xi = ContactEquation_getImpactVelocityAlongNormal_xi;
        var xj = ContactEquation_getImpactVelocityAlongNormal_xj;
        var relVel = ContactEquation_getImpactVelocityAlongNormal_relVel;
        this.bi.position.vadd(this.ri, xi);
        this.bj.position.vadd(this.rj, xj);
        this.bi.getVelocityAtWorldPoint(xi, vi);
        this.bj.getVelocityAtWorldPoint(xj, vj);
        vi.vsub(vj, relVel);
        return this.ni.dot(relVel);
      };
    }, {
      "../math/Mat3": 27,
      "../math/Vec3": 30,
      "./Equation": 20
    }],
    20: [function (_dereq_, module, exports) {
      module.exports = Equation;
      var JacobianElement = _dereq_('../math/JacobianElement'),
          Vec3 = _dereq_('../math/Vec3');
      function Equation(bi, bj, minForce, maxForce) {
        this.id = Equation.id++;
        this.minForce = typeof minForce === "undefined" ? -1e6 : minForce;
        this.maxForce = typeof maxForce === "undefined" ? 1e6 : maxForce;
        this.bi = bi;
        this.bj = bj;
        this.a = 0.0;
        this.b = 0.0;
        this.eps = 0.0;
        this.jacobianElementA = new JacobianElement();
        this.jacobianElementB = new JacobianElement();
        this.enabled = true;
        this.setSpookParams(1e7, 4, 1 / 60);
      }
      Equation.prototype.constructor = Equation;
      Equation.id = 0;
      Equation.prototype.setSpookParams = function (stiffness, relaxation, timeStep) {
        var d = relaxation,
            k = stiffness,
            h = timeStep;
        this.a = 4.0 / (h * (1 + 4 * d));
        this.b = 4.0 * d / (1 + 4 * d);
        this.eps = 4.0 / (h * h * k * (1 + 4 * d));
      };
      Equation.prototype.computeB = function (a, b, h) {
        var GW = this.computeGW(),
            Gq = this.computeGq(),
            GiMf = this.computeGiMf();
        return -Gq * a - GW * b - GiMf * h;
      };
      Equation.prototype.computeGq = function () {
        var GA = this.jacobianElementA,
            GB = this.jacobianElementB,
            bi = this.bi,
            bj = this.bj,
            xi = bi.position,
            xj = bj.position;
        return GA.spatial.dot(xi) + GB.spatial.dot(xj);
      };
      var zero = new Vec3();
      Equation.prototype.computeGW = function () {
        var GA = this.jacobianElementA,
            GB = this.jacobianElementB,
            bi = this.bi,
            bj = this.bj,
            vi = bi.velocity,
            vj = bj.velocity,
            wi = bi.angularVelocity || zero,
            wj = bj.angularVelocity || zero;
        return GA.multiplyVectors(vi, wi) + GB.multiplyVectors(vj, wj);
      };
      Equation.prototype.computeGWlambda = function () {
        var GA = this.jacobianElementA,
            GB = this.jacobianElementB,
            bi = this.bi,
            bj = this.bj,
            vi = bi.vlambda,
            vj = bj.vlambda,
            wi = bi.wlambda || zero,
            wj = bj.wlambda || zero;
        return GA.multiplyVectors(vi, wi) + GB.multiplyVectors(vj, wj);
      };
      var iMfi = new Vec3(),
          iMfj = new Vec3(),
          invIi_vmult_taui = new Vec3(),
          invIj_vmult_tauj = new Vec3();
      Equation.prototype.computeGiMf = function () {
        var GA = this.jacobianElementA,
            GB = this.jacobianElementB,
            bi = this.bi,
            bj = this.bj,
            fi = bi.force,
            ti = bi.torque,
            fj = bj.force,
            tj = bj.torque,
            invMassi = bi.invMassSolve,
            invMassj = bj.invMassSolve;
        if (bi.invInertiaWorldSolve) {
          bi.invInertiaWorldSolve.vmult(ti, invIi_vmult_taui);
        } else {
          invIi_vmult_taui.set(0, 0, 0);
        }
        if (bj.invInertiaWorldSolve) {
          bj.invInertiaWorldSolve.vmult(tj, invIj_vmult_tauj);
        } else {
          invIj_vmult_tauj.set(0, 0, 0);
        }
        fi.mult(invMassi, iMfi);
        fj.mult(invMassj, iMfj);
        return GA.multiplyVectors(iMfi, invIi_vmult_taui) + GB.multiplyVectors(iMfj, invIj_vmult_tauj);
      };
      var tmp = new Vec3();
      Equation.prototype.computeGiMGt = function () {
        var GA = this.jacobianElementA,
            GB = this.jacobianElementB,
            bi = this.bi,
            bj = this.bj,
            invMassi = bi.invMassSolve,
            invMassj = bj.invMassSolve,
            invIi = bi.invInertiaWorldSolve,
            invIj = bj.invInertiaWorldSolve,
            result = invMassi + invMassj;
        if (invIi) {
          invIi.vmult(GA.rotational, tmp);
          result += tmp.dot(GA.rotational);
        }
        if (invIj) {
          invIj.vmult(GB.rotational, tmp);
          result += tmp.dot(GB.rotational);
        }
        return result;
      };
      var addToWlambda_temp = new Vec3(),
          addToWlambda_Gi = new Vec3(),
          addToWlambda_Gj = new Vec3(),
          addToWlambda_ri = new Vec3(),
          addToWlambda_rj = new Vec3(),
          addToWlambda_Mdiag = new Vec3();
      Equation.prototype.addToWlambda = function (deltalambda) {
        var GA = this.jacobianElementA,
            GB = this.jacobianElementB,
            bi = this.bi,
            bj = this.bj,
            temp = addToWlambda_temp;
        GA.spatial.mult(bi.invMassSolve * deltalambda, temp);
        bi.vlambda.vadd(temp, bi.vlambda);
        GB.spatial.mult(bj.invMassSolve * deltalambda, temp);
        bj.vlambda.vadd(temp, bj.vlambda);
        if (bi.invInertiaWorldSolve) {
          bi.invInertiaWorldSolve.vmult(GA.rotational, temp);
          temp.mult(deltalambda, temp);
          bi.wlambda.vadd(temp, bi.wlambda);
        }
        if (bj.invInertiaWorldSolve) {
          bj.invInertiaWorldSolve.vmult(GB.rotational, temp);
          temp.mult(deltalambda, temp);
          bj.wlambda.vadd(temp, bj.wlambda);
        }
      };
      Equation.prototype.computeC = function () {
        return this.computeGiMGt() + this.eps;
      };
    }, {
      "../math/JacobianElement": 26,
      "../math/Vec3": 30
    }],
    21: [function (_dereq_, module, exports) {
      module.exports = FrictionEquation;
      var Equation = _dereq_('./Equation');
      var Vec3 = _dereq_('../math/Vec3');
      var Mat3 = _dereq_('../math/Mat3');
      function FrictionEquation(bodyA, bodyB, slipForce) {
        Equation.call(this, bodyA, bodyB, -slipForce, slipForce);
        this.ri = new Vec3();
        this.rj = new Vec3();
        this.t = new Vec3();
      }
      FrictionEquation.prototype = new Equation();
      FrictionEquation.prototype.constructor = FrictionEquation;
      var FrictionEquation_computeB_temp1 = new Vec3();
      var FrictionEquation_computeB_temp2 = new Vec3();
      FrictionEquation.prototype.computeB = function (h) {
        var a = this.a,
            b = this.b,
            bi = this.bi,
            bj = this.bj,
            ri = this.ri,
            rj = this.rj,
            rixt = FrictionEquation_computeB_temp1,
            rjxt = FrictionEquation_computeB_temp2,
            t = this.t;
        ri.cross(t, rixt);
        rj.cross(t, rjxt);
        var GA = this.jacobianElementA,
            GB = this.jacobianElementB;
        t.negate(GA.spatial);
        rixt.negate(GA.rotational);
        GB.spatial.copy(t);
        GB.rotational.copy(rjxt);
        var GW = this.computeGW();
        var GiMf = this.computeGiMf();
        var B = -GW * b - h * GiMf;
        return B;
      };
    }, {
      "../math/Mat3": 27,
      "../math/Vec3": 30,
      "./Equation": 20
    }],
    22: [function (_dereq_, module, exports) {
      module.exports = RotationalEquation;
      var Vec3 = _dereq_('../math/Vec3');
      var Mat3 = _dereq_('../math/Mat3');
      var Equation = _dereq_('./Equation');
      function RotationalEquation(bodyA, bodyB, options) {
        options = options || {};
        var maxForce = typeof options.maxForce !== 'undefined' ? options.maxForce : 1e6;
        Equation.call(this, bodyA, bodyB, -maxForce, maxForce);
        this.axisA = options.axisA ? options.axisA.clone() : new Vec3(1, 0, 0);
        this.axisB = options.axisB ? options.axisB.clone() : new Vec3(0, 1, 0);
        this.maxAngle = Math.PI / 2;
      }
      RotationalEquation.prototype = new Equation();
      RotationalEquation.prototype.constructor = RotationalEquation;
      var tmpVec1 = new Vec3();
      var tmpVec2 = new Vec3();
      RotationalEquation.prototype.computeB = function (h) {
        var a = this.a,
            b = this.b,
            ni = this.axisA,
            nj = this.axisB,
            nixnj = tmpVec1,
            njxni = tmpVec2,
            GA = this.jacobianElementA,
            GB = this.jacobianElementB;
        ni.cross(nj, nixnj);
        nj.cross(ni, njxni);
        GA.rotational.copy(njxni);
        GB.rotational.copy(nixnj);
        var g = Math.cos(this.maxAngle) - ni.dot(nj),
            GW = this.computeGW(),
            GiMf = this.computeGiMf();
        var B = -g * a - GW * b - h * GiMf;
        return B;
      };
    }, {
      "../math/Mat3": 27,
      "../math/Vec3": 30,
      "./Equation": 20
    }],
    23: [function (_dereq_, module, exports) {
      module.exports = RotationalMotorEquation;
      var Vec3 = _dereq_('../math/Vec3');
      var Mat3 = _dereq_('../math/Mat3');
      var Equation = _dereq_('./Equation');
      function RotationalMotorEquation(bodyA, bodyB, maxForce) {
        maxForce = typeof maxForce !== 'undefined' ? maxForce : 1e6;
        Equation.call(this, bodyA, bodyB, -maxForce, maxForce);
        this.axisA = new Vec3();
        this.axisB = new Vec3();
        this.targetVelocity = 0;
      }
      RotationalMotorEquation.prototype = new Equation();
      RotationalMotorEquation.prototype.constructor = RotationalMotorEquation;
      RotationalMotorEquation.prototype.computeB = function (h) {
        var a = this.a,
            b = this.b,
            bi = this.bi,
            bj = this.bj,
            axisA = this.axisA,
            axisB = this.axisB,
            GA = this.jacobianElementA,
            GB = this.jacobianElementB;
        GA.rotational.copy(axisA);
        axisB.negate(GB.rotational);
        var GW = this.computeGW() - this.targetVelocity,
            GiMf = this.computeGiMf();
        var B = -GW * b - h * GiMf;
        return B;
      };
    }, {
      "../math/Mat3": 27,
      "../math/Vec3": 30,
      "./Equation": 20
    }],
    24: [function (_dereq_, module, exports) {
      var Utils = _dereq_('../utils/Utils');
      module.exports = ContactMaterial;
      function ContactMaterial(m1, m2, options) {
        options = Utils.defaults(options, {
          friction: 0.3,
          restitution: 0.3,
          contactEquationStiffness: 1e7,
          contactEquationRelaxation: 3,
          frictionEquationStiffness: 1e7,
          frictionEquationRelaxation: 3
        });
        this.id = ContactMaterial.idCounter++;
        this.materials = [m1, m2];
        this.friction = options.friction;
        this.restitution = options.restitution;
        this.contactEquationStiffness = options.contactEquationStiffness;
        this.contactEquationRelaxation = options.contactEquationRelaxation;
        this.frictionEquationStiffness = options.frictionEquationStiffness;
        this.frictionEquationRelaxation = options.frictionEquationRelaxation;
      }
      ContactMaterial.idCounter = 0;
    }, {
      "../utils/Utils": 53
    }],
    25: [function (_dereq_, module, exports) {
      module.exports = Material;
      function Material(options) {
        var name = '';
        options = options || {};
        if (typeof options === 'string') {
          name = options;
          options = {};
        } else if (typeof options === 'object') {
          name = '';
        }
        this.name = name;
        this.id = Material.idCounter++;
        this.friction = typeof options.friction !== 'undefined' ? options.friction : -1;
        this.restitution = typeof options.restitution !== 'undefined' ? options.restitution : -1;
      }
      Material.idCounter = 0;
    }, {}],
    26: [function (_dereq_, module, exports) {
      module.exports = JacobianElement;
      var Vec3 = _dereq_('./Vec3');
      function JacobianElement() {
        this.spatial = new Vec3();
        this.rotational = new Vec3();
      }
      JacobianElement.prototype.multiplyElement = function (element) {
        return element.spatial.dot(this.spatial) + element.rotational.dot(this.rotational);
      };
      JacobianElement.prototype.multiplyVectors = function (spatial, rotational) {
        return spatial.dot(this.spatial) + rotational.dot(this.rotational);
      };
    }, {
      "./Vec3": 30
    }],
    27: [function (_dereq_, module, exports) {
      module.exports = Mat3;
      var Vec3 = _dereq_('./Vec3');
      function Mat3(elements) {
        if (elements) {
          this.elements = elements;
        } else {
          this.elements = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
      }
      Mat3.prototype.identity = function () {
        var e = this.elements;
        e[0] = 1;
        e[1] = 0;
        e[2] = 0;
        e[3] = 0;
        e[4] = 1;
        e[5] = 0;
        e[6] = 0;
        e[7] = 0;
        e[8] = 1;
      };
      Mat3.prototype.setZero = function () {
        var e = this.elements;
        e[0] = 0;
        e[1] = 0;
        e[2] = 0;
        e[3] = 0;
        e[4] = 0;
        e[5] = 0;
        e[6] = 0;
        e[7] = 0;
        e[8] = 0;
      };
      Mat3.prototype.setTrace = function (vec3) {
        var e = this.elements;
        e[0] = vec3.x;
        e[4] = vec3.y;
        e[8] = vec3.z;
      };
      Mat3.prototype.getTrace = function (target) {
        var target = target || new Vec3();
        var e = this.elements;
        target.x = e[0];
        target.y = e[4];
        target.z = e[8];
      };
      Mat3.prototype.vmult = function (v, target) {
        target = target || new Vec3();
        var e = this.elements,
            x = v.x,
            y = v.y,
            z = v.z;
        target.x = e[0] * x + e[1] * y + e[2] * z;
        target.y = e[3] * x + e[4] * y + e[5] * z;
        target.z = e[6] * x + e[7] * y + e[8] * z;
        return target;
      };
      Mat3.prototype.smult = function (s) {
        for (var i = 0; i < this.elements.length; i++) {
          this.elements[i] *= s;
        }
      };
      Mat3.prototype.mmult = function (m, target) {
        var r = target || new Mat3();
        for (var i = 0; i < 3; i++) {
          for (var j = 0; j < 3; j++) {
            var sum = 0.0;
            for (var k = 0; k < 3; k++) {
              sum += m.elements[i + k * 3] * this.elements[k + j * 3];
            }
            r.elements[i + j * 3] = sum;
          }
        }
        return r;
      };
      Mat3.prototype.scale = function (v, target) {
        target = target || new Mat3();
        var e = this.elements,
            t = target.elements;
        for (var i = 0; i !== 3; i++) {
          t[3 * i + 0] = v.x * e[3 * i + 0];
          t[3 * i + 1] = v.y * e[3 * i + 1];
          t[3 * i + 2] = v.z * e[3 * i + 2];
        }
        return target;
      };
      Mat3.prototype.solve = function (b, target) {
        target = target || new Vec3();
        var nr = 3;
        var nc = 4;
        var eqns = [];
        for (var i = 0; i < nr * nc; i++) {
          eqns.push(0);
        }
        var i, j;
        for (i = 0; i < 3; i++) {
          for (j = 0; j < 3; j++) {
            eqns[i + nc * j] = this.elements[i + 3 * j];
          }
        }
        eqns[3 + 4 * 0] = b.x;
        eqns[3 + 4 * 1] = b.y;
        eqns[3 + 4 * 2] = b.z;
        var n = 3,
            k = n,
            np;
        var kp = 4;
        var p;
        do {
          i = k - n;
          if (eqns[i + nc * i] === 0) {
            for (j = i + 1; j < k; j++) {
              if (eqns[i + nc * j] !== 0) {
                np = kp;
                do {
                  p = kp - np;
                  eqns[p + nc * i] += eqns[p + nc * j];
                } while (--np);
                break;
              }
            }
          }
          if (eqns[i + nc * i] !== 0) {
            for (j = i + 1; j < k; j++) {
              var multiplier = eqns[i + nc * j] / eqns[i + nc * i];
              np = kp;
              do {
                p = kp - np;
                eqns[p + nc * j] = p <= i ? 0 : eqns[p + nc * j] - eqns[p + nc * i] * multiplier;
              } while (--np);
            }
          }
        } while (--n);
        target.z = eqns[2 * nc + 3] / eqns[2 * nc + 2];
        target.y = (eqns[1 * nc + 3] - eqns[1 * nc + 2] * target.z) / eqns[1 * nc + 1];
        target.x = (eqns[0 * nc + 3] - eqns[0 * nc + 2] * target.z - eqns[0 * nc + 1] * target.y) / eqns[0 * nc + 0];
        if (isNaN(target.x) || isNaN(target.y) || isNaN(target.z) || target.x === Infinity || target.y === Infinity || target.z === Infinity) {
          throw "Could not solve equation! Got x=[" + target.toString() + "], b=[" + b.toString() + "], A=[" + this.toString() + "]";
        }
        return target;
      };
      Mat3.prototype.e = function (row, column, value) {
        if (value === undefined) {
          return this.elements[column + 3 * row];
        } else {
          this.elements[column + 3 * row] = value;
        }
      };
      Mat3.prototype.copy = function (source) {
        for (var i = 0; i < source.elements.length; i++) {
          this.elements[i] = source.elements[i];
        }
        return this;
      };
      Mat3.prototype.toString = function () {
        var r = "";
        var sep = ",";
        for (var i = 0; i < 9; i++) {
          r += this.elements[i] + sep;
        }
        return r;
      };
      Mat3.prototype.reverse = function (target) {
        target = target || new Mat3();
        var nr = 3;
        var nc = 6;
        var eqns = [];
        for (var i = 0; i < nr * nc; i++) {
          eqns.push(0);
        }
        var i, j;
        for (i = 0; i < 3; i++) {
          for (j = 0; j < 3; j++) {
            eqns[i + nc * j] = this.elements[i + 3 * j];
          }
        }
        eqns[3 + 6 * 0] = 1;
        eqns[3 + 6 * 1] = 0;
        eqns[3 + 6 * 2] = 0;
        eqns[4 + 6 * 0] = 0;
        eqns[4 + 6 * 1] = 1;
        eqns[4 + 6 * 2] = 0;
        eqns[5 + 6 * 0] = 0;
        eqns[5 + 6 * 1] = 0;
        eqns[5 + 6 * 2] = 1;
        var n = 3,
            k = n,
            np;
        var kp = nc;
        var p;
        do {
          i = k - n;
          if (eqns[i + nc * i] === 0) {
            for (j = i + 1; j < k; j++) {
              if (eqns[i + nc * j] !== 0) {
                np = kp;
                do {
                  p = kp - np;
                  eqns[p + nc * i] += eqns[p + nc * j];
                } while (--np);
                break;
              }
            }
          }
          if (eqns[i + nc * i] !== 0) {
            for (j = i + 1; j < k; j++) {
              var multiplier = eqns[i + nc * j] / eqns[i + nc * i];
              np = kp;
              do {
                p = kp - np;
                eqns[p + nc * j] = p <= i ? 0 : eqns[p + nc * j] - eqns[p + nc * i] * multiplier;
              } while (--np);
            }
          }
        } while (--n);
        i = 2;
        do {
          j = i - 1;
          do {
            var multiplier = eqns[i + nc * j] / eqns[i + nc * i];
            np = nc;
            do {
              p = nc - np;
              eqns[p + nc * j] = eqns[p + nc * j] - eqns[p + nc * i] * multiplier;
            } while (--np);
          } while (j--);
        } while (--i);
        i = 2;
        do {
          var multiplier = 1 / eqns[i + nc * i];
          np = nc;
          do {
            p = nc - np;
            eqns[p + nc * i] = eqns[p + nc * i] * multiplier;
          } while (--np);
        } while (i--);
        i = 2;
        do {
          j = 2;
          do {
            p = eqns[nr + j + nc * i];
            if (isNaN(p) || p === Infinity) {
              throw "Could not reverse! A=[" + this.toString() + "]";
            }
            target.e(i, j, p);
          } while (j--);
        } while (i--);
        return target;
      };
      Mat3.prototype.setRotationFromQuaternion = function (q) {
        var x = q.x,
            y = q.y,
            z = q.z,
            w = q.w,
            x2 = x + x,
            y2 = y + y,
            z2 = z + z,
            xx = x * x2,
            xy = x * y2,
            xz = x * z2,
            yy = y * y2,
            yz = y * z2,
            zz = z * z2,
            wx = w * x2,
            wy = w * y2,
            wz = w * z2,
            e = this.elements;
        e[3 * 0 + 0] = 1 - (yy + zz);
        e[3 * 0 + 1] = xy - wz;
        e[3 * 0 + 2] = xz + wy;
        e[3 * 1 + 0] = xy + wz;
        e[3 * 1 + 1] = 1 - (xx + zz);
        e[3 * 1 + 2] = yz - wx;
        e[3 * 2 + 0] = xz - wy;
        e[3 * 2 + 1] = yz + wx;
        e[3 * 2 + 2] = 1 - (xx + yy);
        return this;
      };
      Mat3.prototype.transpose = function (target) {
        target = target || new Mat3();
        var Mt = target.elements,
            M = this.elements;
        for (var i = 0; i !== 3; i++) {
          for (var j = 0; j !== 3; j++) {
            Mt[3 * i + j] = M[3 * j + i];
          }
        }
        return target;
      };
    }, {
      "./Vec3": 30
    }],
    28: [function (_dereq_, module, exports) {
      module.exports = Quaternion;
      var Vec3 = _dereq_('./Vec3');
      function Quaternion(x, y, z, w) {
        this.x = x !== undefined ? x : 0;
        this.y = y !== undefined ? y : 0;
        this.z = z !== undefined ? z : 0;
        this.w = w !== undefined ? w : 1;
      }
      Quaternion.prototype.set = function (x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
      };
      Quaternion.prototype.toString = function () {
        return this.x + "," + this.y + "," + this.z + "," + this.w;
      };
      Quaternion.prototype.toArray = function () {
        return [this.x, this.y, this.z, this.w];
      };
      Quaternion.prototype.setFromAxisAngle = function (axis, angle) {
        var s = Math.sin(angle * 0.5);
        this.x = axis.x * s;
        this.y = axis.y * s;
        this.z = axis.z * s;
        this.w = Math.cos(angle * 0.5);
      };
      Quaternion.prototype.toAxisAngle = function (targetAxis) {
        targetAxis = targetAxis || new Vec3();
        this.normalize();
        var angle = 2 * Math.acos(this.w);
        var s = Math.sqrt(1 - this.w * this.w);
        if (s < 0.001) {
          targetAxis.x = this.x;
          targetAxis.y = this.y;
          targetAxis.z = this.z;
        } else {
          targetAxis.x = this.x / s;
          targetAxis.y = this.y / s;
          targetAxis.z = this.z / s;
        }
        return [targetAxis, angle];
      };
      var sfv_t1 = new Vec3(),
          sfv_t2 = new Vec3();
      Quaternion.prototype.setFromVectors = function (u, v) {
        if (u.isAntiparallelTo(v)) {
          var t1 = sfv_t1;
          var t2 = sfv_t2;
          u.tangents(t1, t2);
          this.setFromAxisAngle(t1, Math.PI);
        } else {
          var a = u.cross(v);
          this.x = a.x;
          this.y = a.y;
          this.z = a.z;
          this.w = Math.sqrt(Math.pow(u.norm(), 2) * Math.pow(v.norm(), 2)) + u.dot(v);
          this.normalize();
        }
      };
      var Quaternion_mult_va = new Vec3();
      var Quaternion_mult_vb = new Vec3();
      var Quaternion_mult_vaxvb = new Vec3();
      Quaternion.prototype.mult = function (q, target) {
        target = target || new Quaternion();
        var w = this.w,
            va = Quaternion_mult_va,
            vb = Quaternion_mult_vb,
            vaxvb = Quaternion_mult_vaxvb;
        va.set(this.x, this.y, this.z);
        vb.set(q.x, q.y, q.z);
        target.w = w * q.w - va.dot(vb);
        va.cross(vb, vaxvb);
        target.x = w * vb.x + q.w * va.x + vaxvb.x;
        target.y = w * vb.y + q.w * va.y + vaxvb.y;
        target.z = w * vb.z + q.w * va.z + vaxvb.z;
        return target;
      };
      Quaternion.prototype.inverse = function (target) {
        var x = this.x,
            y = this.y,
            z = this.z,
            w = this.w;
        target = target || new Quaternion();
        this.conjugate(target);
        var inorm2 = 1 / (x * x + y * y + z * z + w * w);
        target.x *= inorm2;
        target.y *= inorm2;
        target.z *= inorm2;
        target.w *= inorm2;
        return target;
      };
      Quaternion.prototype.conjugate = function (target) {
        target = target || new Quaternion();
        target.x = -this.x;
        target.y = -this.y;
        target.z = -this.z;
        target.w = this.w;
        return target;
      };
      Quaternion.prototype.normalize = function () {
        var l = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        if (l === 0) {
          this.x = 0;
          this.y = 0;
          this.z = 0;
          this.w = 0;
        } else {
          l = 1 / l;
          this.x *= l;
          this.y *= l;
          this.z *= l;
          this.w *= l;
        }
      };
      Quaternion.prototype.normalizeFast = function () {
        var f = (3.0 - (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)) / 2.0;
        if (f === 0) {
          this.x = 0;
          this.y = 0;
          this.z = 0;
          this.w = 0;
        } else {
          this.x *= f;
          this.y *= f;
          this.z *= f;
          this.w *= f;
        }
      };
      Quaternion.prototype.vmult = function (v, target) {
        target = target || new Vec3();
        var x = v.x,
            y = v.y,
            z = v.z;
        var qx = this.x,
            qy = this.y,
            qz = this.z,
            qw = this.w;
        var ix = qw * x + qy * z - qz * y,
            iy = qw * y + qz * x - qx * z,
            iz = qw * z + qx * y - qy * x,
            iw = -qx * x - qy * y - qz * z;
        target.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        target.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        target.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
        return target;
      };
      Quaternion.prototype.copy = function (source) {
        this.x = source.x;
        this.y = source.y;
        this.z = source.z;
        this.w = source.w;
        return this;
      };
      Quaternion.prototype.toEuler = function (target, order) {
        order = order || "YZX";
        var heading, attitude, bank;
        var x = this.x,
            y = this.y,
            z = this.z,
            w = this.w;
        switch (order) {
          case "YZX":
            var test = x * y + z * w;
            if (test > 0.499) {
              heading = 2 * Math.atan2(x, w);
              attitude = Math.PI / 2;
              bank = 0;
            }
            if (test < -0.499) {
              heading = -2 * Math.atan2(x, w);
              attitude = -Math.PI / 2;
              bank = 0;
            }
            if (isNaN(heading)) {
              var sqx = x * x;
              var sqy = y * y;
              var sqz = z * z;
              heading = Math.atan2(2 * y * w - 2 * x * z, 1 - 2 * sqy - 2 * sqz);
              attitude = Math.asin(2 * test);
              bank = Math.atan2(2 * x * w - 2 * y * z, 1 - 2 * sqx - 2 * sqz);
            }
            break;
          default:
            throw new Error("Euler order " + order + " not supported yet.");
        }
        target.y = heading;
        target.z = attitude;
        target.x = bank;
      };
      Quaternion.prototype.setFromEuler = function (x, y, z, order) {
        order = order || "XYZ";
        var c1 = Math.cos(x / 2);
        var c2 = Math.cos(y / 2);
        var c3 = Math.cos(z / 2);
        var s1 = Math.sin(x / 2);
        var s2 = Math.sin(y / 2);
        var s3 = Math.sin(z / 2);
        if (order === 'XYZ') {
          this.x = s1 * c2 * c3 + c1 * s2 * s3;
          this.y = c1 * s2 * c3 - s1 * c2 * s3;
          this.z = c1 * c2 * s3 + s1 * s2 * c3;
          this.w = c1 * c2 * c3 - s1 * s2 * s3;
        } else if (order === 'YXZ') {
          this.x = s1 * c2 * c3 + c1 * s2 * s3;
          this.y = c1 * s2 * c3 - s1 * c2 * s3;
          this.z = c1 * c2 * s3 - s1 * s2 * c3;
          this.w = c1 * c2 * c3 + s1 * s2 * s3;
        } else if (order === 'ZXY') {
          this.x = s1 * c2 * c3 - c1 * s2 * s3;
          this.y = c1 * s2 * c3 + s1 * c2 * s3;
          this.z = c1 * c2 * s3 + s1 * s2 * c3;
          this.w = c1 * c2 * c3 - s1 * s2 * s3;
        } else if (order === 'ZYX') {
          this.x = s1 * c2 * c3 - c1 * s2 * s3;
          this.y = c1 * s2 * c3 + s1 * c2 * s3;
          this.z = c1 * c2 * s3 - s1 * s2 * c3;
          this.w = c1 * c2 * c3 + s1 * s2 * s3;
        } else if (order === 'YZX') {
          this.x = s1 * c2 * c3 + c1 * s2 * s3;
          this.y = c1 * s2 * c3 + s1 * c2 * s3;
          this.z = c1 * c2 * s3 - s1 * s2 * c3;
          this.w = c1 * c2 * c3 - s1 * s2 * s3;
        } else if (order === 'XZY') {
          this.x = s1 * c2 * c3 - c1 * s2 * s3;
          this.y = c1 * s2 * c3 - s1 * c2 * s3;
          this.z = c1 * c2 * s3 + s1 * s2 * c3;
          this.w = c1 * c2 * c3 + s1 * s2 * s3;
        }
        return this;
      };
      Quaternion.prototype.clone = function () {
        return new Quaternion(this.x, this.y, this.z, this.w);
      };
    }, {
      "./Vec3": 30
    }],
    29: [function (_dereq_, module, exports) {
      var Vec3 = _dereq_('./Vec3');
      var Quaternion = _dereq_('./Quaternion');
      module.exports = Transform;
      function Transform(options) {
        options = options || {};
        this.position = new Vec3();
        if (options.position) {
          this.position.copy(options.position);
        }
        this.quaternion = new Quaternion();
        if (options.quaternion) {
          this.quaternion.copy(options.quaternion);
        }
      }
      var tmpQuat = new Quaternion();
      Transform.pointToLocalFrame = function (position, quaternion, worldPoint, result) {
        var result = result || new Vec3();
        worldPoint.vsub(position, result);
        quaternion.conjugate(tmpQuat);
        tmpQuat.vmult(result, result);
        return result;
      };
      Transform.prototype.pointToLocal = function (worldPoint, result) {
        return Transform.pointToLocalFrame(this.position, this.quaternion, worldPoint, result);
      };
      Transform.pointToWorldFrame = function (position, quaternion, localPoint, result) {
        var result = result || new Vec3();
        quaternion.vmult(localPoint, result);
        result.vadd(position, result);
        return result;
      };
      Transform.prototype.pointToWorld = function (localPoint, result) {
        return Transform.pointToWorldFrame(this.position, this.quaternion, localPoint, result);
      };
      Transform.prototype.vectorToWorldFrame = function (localVector, result) {
        var result = result || new Vec3();
        this.quaternion.vmult(localVector, result);
        return result;
      };
      Transform.vectorToWorldFrame = function (quaternion, localVector, result) {
        quaternion.vmult(localVector, result);
        return result;
      };
      Transform.vectorToLocalFrame = function (position, quaternion, worldVector, result) {
        var result = result || new Vec3();
        quaternion.w *= -1;
        quaternion.vmult(worldVector, result);
        quaternion.w *= -1;
        return result;
      };
    }, {
      "./Quaternion": 28,
      "./Vec3": 30
    }],
    30: [function (_dereq_, module, exports) {
      module.exports = Vec3;
      var Mat3 = _dereq_('./Mat3');
      function Vec3(x, y, z) {
        this.x = x || 0.0;
        this.y = y || 0.0;
        this.z = z || 0.0;
      }
      Vec3.ZERO = new Vec3(0, 0, 0);
      Vec3.UNIT_X = new Vec3(1, 0, 0);
      Vec3.UNIT_Y = new Vec3(0, 1, 0);
      Vec3.UNIT_Z = new Vec3(0, 0, 1);
      Vec3.prototype.cross = function (v, target) {
        var vx = v.x,
            vy = v.y,
            vz = v.z,
            x = this.x,
            y = this.y,
            z = this.z;
        target = target || new Vec3();
        target.x = y * vz - z * vy;
        target.y = z * vx - x * vz;
        target.z = x * vy - y * vx;
        return target;
      };
      Vec3.prototype.set = function (x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
      };
      Vec3.prototype.setZero = function () {
        this.x = this.y = this.z = 0;
      };
      Vec3.prototype.vadd = function (v, target) {
        if (target) {
          target.x = v.x + this.x;
          target.y = v.y + this.y;
          target.z = v.z + this.z;
        } else {
          return new Vec3(this.x + v.x, this.y + v.y, this.z + v.z);
        }
      };
      Vec3.prototype.vsub = function (v, target) {
        if (target) {
          target.x = this.x - v.x;
          target.y = this.y - v.y;
          target.z = this.z - v.z;
        } else {
          return new Vec3(this.x - v.x, this.y - v.y, this.z - v.z);
        }
      };
      Vec3.prototype.crossmat = function () {
        return new Mat3([0, -this.z, this.y, this.z, 0, -this.x, -this.y, this.x, 0]);
      };
      Vec3.prototype.normalize = function () {
        var x = this.x,
            y = this.y,
            z = this.z;
        var n = Math.sqrt(x * x + y * y + z * z);
        if (n > 0.0) {
          var invN = 1 / n;
          this.x *= invN;
          this.y *= invN;
          this.z *= invN;
        } else {
          this.x = 0;
          this.y = 0;
          this.z = 0;
        }
        return n;
      };
      Vec3.prototype.unit = function (target) {
        target = target || new Vec3();
        var x = this.x,
            y = this.y,
            z = this.z;
        var ninv = Math.sqrt(x * x + y * y + z * z);
        if (ninv > 0.0) {
          ninv = 1.0 / ninv;
          target.x = x * ninv;
          target.y = y * ninv;
          target.z = z * ninv;
        } else {
          target.x = 1;
          target.y = 0;
          target.z = 0;
        }
        return target;
      };
      Vec3.prototype.norm = function () {
        var x = this.x,
            y = this.y,
            z = this.z;
        return Math.sqrt(x * x + y * y + z * z);
      };
      Vec3.prototype.length = Vec3.prototype.norm;
      Vec3.prototype.norm2 = function () {
        return this.dot(this);
      };
      Vec3.prototype.lengthSquared = Vec3.prototype.norm2;
      Vec3.prototype.distanceTo = function (p) {
        var x = this.x,
            y = this.y,
            z = this.z;
        var px = p.x,
            py = p.y,
            pz = p.z;
        return Math.sqrt((px - x) * (px - x) + (py - y) * (py - y) + (pz - z) * (pz - z));
      };
      Vec3.prototype.distanceSquared = function (p) {
        var x = this.x,
            y = this.y,
            z = this.z;
        var px = p.x,
            py = p.y,
            pz = p.z;
        return (px - x) * (px - x) + (py - y) * (py - y) + (pz - z) * (pz - z);
      };
      Vec3.prototype.mult = function (scalar, target) {
        target = target || new Vec3();
        var x = this.x,
            y = this.y,
            z = this.z;
        target.x = scalar * x;
        target.y = scalar * y;
        target.z = scalar * z;
        return target;
      };
      Vec3.prototype.scale = Vec3.prototype.mult;
      Vec3.prototype.dot = function (v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
      };
      Vec3.prototype.isZero = function () {
        return this.x === 0 && this.y === 0 && this.z === 0;
      };
      Vec3.prototype.negate = function (target) {
        target = target || new Vec3();
        target.x = -this.x;
        target.y = -this.y;
        target.z = -this.z;
        return target;
      };
      var Vec3_tangents_n = new Vec3();
      var Vec3_tangents_randVec = new Vec3();
      Vec3.prototype.tangents = function (t1, t2) {
        var norm = this.norm();
        if (norm > 0.0) {
          var n = Vec3_tangents_n;
          var inorm = 1 / norm;
          n.set(this.x * inorm, this.y * inorm, this.z * inorm);
          var randVec = Vec3_tangents_randVec;
          if (Math.abs(n.x) < 0.9) {
            randVec.set(1, 0, 0);
            n.cross(randVec, t1);
          } else {
            randVec.set(0, 1, 0);
            n.cross(randVec, t1);
          }
          n.cross(t1, t2);
        } else {
          t1.set(1, 0, 0);
          t2.set(0, 1, 0);
        }
      };
      Vec3.prototype.toString = function () {
        return this.x + "," + this.y + "," + this.z;
      };
      Vec3.prototype.toArray = function () {
        return [this.x, this.y, this.z];
      };
      Vec3.prototype.copy = function (source) {
        this.x = source.x;
        this.y = source.y;
        this.z = source.z;
        return this;
      };
      Vec3.prototype.lerp = function (v, t, target) {
        var x = this.x,
            y = this.y,
            z = this.z;
        target.x = x + (v.x - x) * t;
        target.y = y + (v.y - y) * t;
        target.z = z + (v.z - z) * t;
      };
      Vec3.prototype.almostEquals = function (v, precision) {
        if (precision === undefined) {
          precision = 1e-6;
        }
        if (Math.abs(this.x - v.x) > precision || Math.abs(this.y - v.y) > precision || Math.abs(this.z - v.z) > precision) {
          return false;
        }
        return true;
      };
      Vec3.prototype.almostZero = function (precision) {
        if (precision === undefined) {
          precision = 1e-6;
        }
        if (Math.abs(this.x) > precision || Math.abs(this.y) > precision || Math.abs(this.z) > precision) {
          return false;
        }
        return true;
      };
      var antip_neg = new Vec3();
      Vec3.prototype.isAntiparallelTo = function (v, precision) {
        this.negate(antip_neg);
        return antip_neg.almostEquals(v, precision);
      };
      Vec3.prototype.clone = function () {
        return new Vec3(this.x, this.y, this.z);
      };
    }, {
      "./Mat3": 27
    }],
    31: [function (_dereq_, module, exports) {
      module.exports = Body;
      var EventTarget = _dereq_('../utils/EventTarget');
      var Shape = _dereq_('../shapes/Shape');
      var Vec3 = _dereq_('../math/Vec3');
      var Mat3 = _dereq_('../math/Mat3');
      var Quaternion = _dereq_('../math/Quaternion');
      var Material = _dereq_('../material/Material');
      var AABB = _dereq_('../collision/AABB');
      var Box = _dereq_('../shapes/Box');
      function Body(options) {
        options = options || {};
        EventTarget.apply(this);
        this.id = Body.idCounter++;
        this.world = null;
        this.preStep = null;
        this.postStep = null;
        this.vlambda = new Vec3();
        this.collisionFilterGroup = typeof options.collisionFilterGroup === 'number' ? options.collisionFilterGroup : 1;
        this.collisionFilterMask = typeof options.collisionFilterMask === 'number' ? options.collisionFilterMask : 1;
        this.collisionResponse = true;
        this.position = new Vec3();
        if (options.position) {
          this.position.copy(options.position);
        }
        this.previousPosition = new Vec3();
        this.initPosition = new Vec3();
        this.velocity = new Vec3();
        if (options.velocity) {
          this.velocity.copy(options.velocity);
        }
        this.initVelocity = new Vec3();
        this.force = new Vec3();
        var mass = typeof options.mass === 'number' ? options.mass : 0;
        this.mass = mass;
        this.invMass = mass > 0 ? 1.0 / mass : 0;
        this.material = options.material || null;
        this.linearDamping = typeof options.linearDamping === 'number' ? options.linearDamping : 0.01;
        this.type = mass <= 0.0 ? Body.STATIC : Body.DYNAMIC;
        if (typeof options.type === typeof Body.STATIC) {
          this.type = options.type;
        }
        this.allowSleep = typeof options.allowSleep !== 'undefined' ? options.allowSleep : true;
        this.sleepState = 0;
        this.sleepSpeedLimit = typeof options.sleepSpeedLimit !== 'undefined' ? options.sleepSpeedLimit : 0.1;
        this.sleepTimeLimit = typeof options.sleepTimeLimit !== 'undefined' ? options.sleepTimeLimit : 1;
        this.timeLastSleepy = 0;
        this._wakeUpAfterNarrowphase = false;
        this.torque = new Vec3();
        this.quaternion = new Quaternion();
        if (options.quaternion) {
          this.quaternion.copy(options.quaternion);
        }
        this.initQuaternion = new Quaternion();
        this.angularVelocity = new Vec3();
        if (options.angularVelocity) {
          this.angularVelocity.copy(options.angularVelocity);
        }
        this.initAngularVelocity = new Vec3();
        this.interpolatedPosition = new Vec3();
        this.interpolatedQuaternion = new Quaternion();
        this.shapes = [];
        this.shapeOffsets = [];
        this.shapeOrientations = [];
        this.inertia = new Vec3();
        this.invInertia = new Vec3();
        this.invInertiaWorld = new Mat3();
        this.invMassSolve = 0;
        this.invInertiaSolve = new Vec3();
        this.invInertiaWorldSolve = new Mat3();
        this.fixedRotation = typeof options.fixedRotation !== "undefined" ? options.fixedRotation : false;
        this.angularDamping = typeof options.angularDamping !== 'undefined' ? options.angularDamping : 0.01;
        this.aabb = new AABB();
        this.aabbNeedsUpdate = true;
        this.wlambda = new Vec3();
        if (options.shape) {
          this.addShape(options.shape);
        }
        this.updateMassProperties();
      }
      Body.prototype = new EventTarget();
      Body.prototype.constructor = Body;
      Body.DYNAMIC = 1;
      Body.STATIC = 2;
      Body.KINEMATIC = 4;
      Body.AWAKE = 0;
      Body.SLEEPY = 1;
      Body.SLEEPING = 2;
      Body.idCounter = 0;
      Body.prototype.wakeUp = function () {
        var s = this.sleepState;
        this.sleepState = 0;
        if (s === Body.SLEEPING) {
          this.dispatchEvent({
            type: "wakeup"
          });
        }
      };
      Body.prototype.sleep = function () {
        this.sleepState = Body.SLEEPING;
        this.velocity.set(0, 0, 0);
        this.angularVelocity.set(0, 0, 0);
      };
      Body.sleepyEvent = {
        type: "sleepy"
      };
      Body.sleepEvent = {
        type: "sleep"
      };
      Body.prototype.sleepTick = function (time) {
        if (this.allowSleep) {
          var sleepState = this.sleepState;
          var speedSquared = this.velocity.norm2() + this.angularVelocity.norm2();
          var speedLimitSquared = Math.pow(this.sleepSpeedLimit, 2);
          if (sleepState === Body.AWAKE && speedSquared < speedLimitSquared) {
            this.sleepState = Body.SLEEPY;
            this.timeLastSleepy = time;
            this.dispatchEvent(Body.sleepyEvent);
          } else if (sleepState === Body.SLEEPY && speedSquared > speedLimitSquared) {
            this.wakeUp();
          } else if (sleepState === Body.SLEEPY && time - this.timeLastSleepy > this.sleepTimeLimit) {
            this.sleep();
            this.dispatchEvent(Body.sleepEvent);
          }
        }
      };
      Body.prototype.updateSolveMassProperties = function () {
        if (this.sleepState === Body.SLEEPING || this.type === Body.KINEMATIC) {
          this.invMassSolve = 0;
          this.invInertiaSolve.setZero();
          this.invInertiaWorldSolve.setZero();
        } else {
          this.invMassSolve = this.invMass;
          this.invInertiaSolve.copy(this.invInertia);
          this.invInertiaWorldSolve.copy(this.invInertiaWorld);
        }
      };
      Body.prototype.pointToLocalFrame = function (worldPoint, result) {
        var result = result || new Vec3();
        worldPoint.vsub(this.position, result);
        this.quaternion.conjugate().vmult(result, result);
        return result;
      };
      Body.prototype.vectorToLocalFrame = function (worldVector, result) {
        var result = result || new Vec3();
        this.quaternion.conjugate().vmult(worldVector, result);
        return result;
      };
      Body.prototype.pointToWorldFrame = function (localPoint, result) {
        var result = result || new Vec3();
        this.quaternion.vmult(localPoint, result);
        result.vadd(this.position, result);
        return result;
      };
      Body.prototype.vectorToWorldFrame = function (localVector, result) {
        var result = result || new Vec3();
        this.quaternion.vmult(localVector, result);
        return result;
      };
      var tmpVec = new Vec3();
      var tmpQuat = new Quaternion();
      Body.prototype.addShape = function (shape, _offset, _orientation) {
        var offset = new Vec3();
        var orientation = new Quaternion();
        if (_offset) {
          offset.copy(_offset);
        }
        if (_orientation) {
          orientation.copy(_orientation);
        }
        this.shapes.push(shape);
        this.shapeOffsets.push(offset);
        this.shapeOrientations.push(orientation);
        this.updateMassProperties();
        this.updateBoundingRadius();
        this.aabbNeedsUpdate = true;
        return this;
      };
      Body.prototype.updateBoundingRadius = function () {
        var shapes = this.shapes,
            shapeOffsets = this.shapeOffsets,
            N = shapes.length,
            radius = 0;
        for (var i = 0; i !== N; i++) {
          var shape = shapes[i];
          shape.updateBoundingSphereRadius();
          var offset = shapeOffsets[i].norm(),
              r = shape.boundingSphereRadius;
          if (offset + r > radius) {
            radius = offset + r;
          }
        }
        this.boundingRadius = radius;
      };
      var computeAABB_shapeAABB = new AABB();
      Body.prototype.computeAABB = function () {
        var shapes = this.shapes,
            shapeOffsets = this.shapeOffsets,
            shapeOrientations = this.shapeOrientations,
            N = shapes.length,
            offset = tmpVec,
            orientation = tmpQuat,
            bodyQuat = this.quaternion,
            aabb = this.aabb,
            shapeAABB = computeAABB_shapeAABB;
        for (var i = 0; i !== N; i++) {
          var shape = shapes[i];
          shapeOrientations[i].mult(bodyQuat, orientation);
          orientation.vmult(shapeOffsets[i], offset);
          offset.vadd(this.position, offset);
          shape.calculateWorldAABB(offset, orientation, shapeAABB.lowerBound, shapeAABB.upperBound);
          if (i === 0) {
            aabb.copy(shapeAABB);
          } else {
            aabb.extend(shapeAABB);
          }
        }
        this.aabbNeedsUpdate = false;
      };
      var uiw_m1 = new Mat3(),
          uiw_m2 = new Mat3(),
          uiw_m3 = new Mat3();
      Body.prototype.updateInertiaWorld = function (force) {
        var I = this.invInertia;
        if (I.x === I.y && I.y === I.z && !force) ; else {
          var m1 = uiw_m1,
              m2 = uiw_m2;
          m1.setRotationFromQuaternion(this.quaternion);
          m1.transpose(m2);
          m1.scale(I, m1);
          m1.mmult(m2, this.invInertiaWorld);
        }
      };
      var Body_applyForce_r = new Vec3();
      var Body_applyForce_rotForce = new Vec3();
      Body.prototype.applyForce = function (force, worldPoint) {
        if (this.type !== Body.DYNAMIC) {
          return;
        }
        var r = Body_applyForce_r;
        worldPoint.vsub(this.position, r);
        var rotForce = Body_applyForce_rotForce;
        r.cross(force, rotForce);
        this.force.vadd(force, this.force);
        this.torque.vadd(rotForce, this.torque);
      };
      var Body_applyLocalForce_worldForce = new Vec3();
      var Body_applyLocalForce_worldPoint = new Vec3();
      Body.prototype.applyLocalForce = function (localForce, localPoint) {
        if (this.type !== Body.DYNAMIC) {
          return;
        }
        var worldForce = Body_applyLocalForce_worldForce;
        var worldPoint = Body_applyLocalForce_worldPoint;
        this.vectorToWorldFrame(localForce, worldForce);
        this.pointToWorldFrame(localPoint, worldPoint);
        this.applyForce(worldForce, worldPoint);
      };
      var Body_applyImpulse_r = new Vec3();
      var Body_applyImpulse_velo = new Vec3();
      var Body_applyImpulse_rotVelo = new Vec3();
      Body.prototype.applyImpulse = function (impulse, worldPoint) {
        if (this.type !== Body.DYNAMIC) {
          return;
        }
        var r = Body_applyImpulse_r;
        worldPoint.vsub(this.position, r);
        var velo = Body_applyImpulse_velo;
        velo.copy(impulse);
        velo.mult(this.invMass, velo);
        this.velocity.vadd(velo, this.velocity);
        var rotVelo = Body_applyImpulse_rotVelo;
        r.cross(impulse, rotVelo);
        this.invInertiaWorld.vmult(rotVelo, rotVelo);
        this.angularVelocity.vadd(rotVelo, this.angularVelocity);
      };
      var Body_applyLocalImpulse_worldImpulse = new Vec3();
      var Body_applyLocalImpulse_worldPoint = new Vec3();
      Body.prototype.applyLocalImpulse = function (localImpulse, localPoint) {
        if (this.type !== Body.DYNAMIC) {
          return;
        }
        var worldImpulse = Body_applyLocalImpulse_worldImpulse;
        var worldPoint = Body_applyLocalImpulse_worldPoint;
        this.vectorToWorldFrame(localImpulse, worldImpulse);
        this.pointToWorldFrame(localPoint, worldPoint);
        this.applyImpulse(worldImpulse, worldPoint);
      };
      var Body_updateMassProperties_halfExtents = new Vec3();
      Body.prototype.updateMassProperties = function () {
        var halfExtents = Body_updateMassProperties_halfExtents;
        this.invMass = this.mass > 0 ? 1.0 / this.mass : 0;
        var I = this.inertia;
        var fixed = this.fixedRotation;
        this.computeAABB();
        halfExtents.set((this.aabb.upperBound.x - this.aabb.lowerBound.x) / 2, (this.aabb.upperBound.y - this.aabb.lowerBound.y) / 2, (this.aabb.upperBound.z - this.aabb.lowerBound.z) / 2);
        Box.calculateInertia(halfExtents, this.mass, I);
        this.invInertia.set(I.x > 0 && !fixed ? 1.0 / I.x : 0, I.y > 0 && !fixed ? 1.0 / I.y : 0, I.z > 0 && !fixed ? 1.0 / I.z : 0);
        this.updateInertiaWorld(true);
      };
      Body.prototype.getVelocityAtWorldPoint = function (worldPoint, result) {
        var r = new Vec3();
        worldPoint.vsub(this.position, r);
        this.angularVelocity.cross(r, result);
        this.velocity.vadd(result, result);
        return result;
      };
    }, {
      "../collision/AABB": 3,
      "../material/Material": 25,
      "../math/Mat3": 27,
      "../math/Quaternion": 28,
      "../math/Vec3": 30,
      "../shapes/Box": 37,
      "../shapes/Shape": 43,
      "../utils/EventTarget": 49
    }],
    32: [function (_dereq_, module, exports) {
      var Body = _dereq_('./Body');
      var Vec3 = _dereq_('../math/Vec3');
      var Quaternion = _dereq_('../math/Quaternion');
      var RaycastResult = _dereq_('../collision/RaycastResult');
      var Ray = _dereq_('../collision/Ray');
      var WheelInfo = _dereq_('../objects/WheelInfo');
      module.exports = RaycastVehicle;
      function RaycastVehicle(options) {
        this.chassisBody = options.chassisBody;
        this.wheelInfos = [];
        this.sliding = false;
        this.world = null;
        this.indexRightAxis = typeof options.indexRightAxis !== 'undefined' ? options.indexRightAxis : 1;
        this.indexForwardAxis = typeof options.indexForwardAxis !== 'undefined' ? options.indexForwardAxis : 0;
        this.indexUpAxis = typeof options.indexUpAxis !== 'undefined' ? options.indexUpAxis : 2;
      }
      var tmpVec1 = new Vec3();
      var tmpVec2 = new Vec3();
      var tmpVec3 = new Vec3();
      var tmpVec4 = new Vec3();
      var tmpVec5 = new Vec3();
      var tmpVec6 = new Vec3();
      var tmpRay = new Ray();
      RaycastVehicle.prototype.addWheel = function (options) {
        options = options || {};
        var info = new WheelInfo(options);
        var index = this.wheelInfos.length;
        this.wheelInfos.push(info);
        return index;
      };
      RaycastVehicle.prototype.setSteeringValue = function (value, wheelIndex) {
        var wheel = this.wheelInfos[wheelIndex];
        wheel.steering = value;
      };
      var torque = new Vec3();
      RaycastVehicle.prototype.applyEngineForce = function (value, wheelIndex) {
        this.wheelInfos[wheelIndex].engineForce = value;
      };
      RaycastVehicle.prototype.setBrake = function (brake, wheelIndex) {
        this.wheelInfos[wheelIndex].brake = brake;
      };
      RaycastVehicle.prototype.addToWorld = function (world) {
        var constraints = this.constraints;
        world.add(this.chassisBody);
        var that = this;
        this.preStepCallback = function () {
          that.updateVehicle(world.dt);
        };
        world.addEventListener('preStep', this.preStepCallback);
        this.world = world;
      };
      RaycastVehicle.prototype.getVehicleAxisWorld = function (axisIndex, result) {
        result.set(axisIndex === 0 ? 1 : 0, axisIndex === 1 ? 1 : 0, axisIndex === 2 ? 1 : 0);
        this.chassisBody.vectorToWorldFrame(result, result);
      };
      RaycastVehicle.prototype.updateVehicle = function (timeStep) {
        var wheelInfos = this.wheelInfos;
        var numWheels = wheelInfos.length;
        var chassisBody = this.chassisBody;
        for (var i = 0; i < numWheels; i++) {
          this.updateWheelTransform(i);
        }
        this.currentVehicleSpeedKmHour = 3.6 * chassisBody.velocity.norm();
        var forwardWorld = new Vec3();
        this.getVehicleAxisWorld(this.indexForwardAxis, forwardWorld);
        if (forwardWorld.dot(chassisBody.velocity) < 0) {
          this.currentVehicleSpeedKmHour *= -1;
        }
        for (var i = 0; i < numWheels; i++) {
          this.castRay(wheelInfos[i]);
        }
        this.updateSuspension(timeStep);
        var impulse = new Vec3();
        var relpos = new Vec3();
        for (var i = 0; i < numWheels; i++) {
          var wheel = wheelInfos[i];
          var suspensionForce = wheel.suspensionForce;
          if (suspensionForce > wheel.maxSuspensionForce) {
            suspensionForce = wheel.maxSuspensionForce;
          }
          wheel.raycastResult.hitNormalWorld.scale(suspensionForce * timeStep, impulse);
          wheel.raycastResult.hitPointWorld.vsub(chassisBody.position, relpos);
          chassisBody.applyImpulse(impulse, wheel.raycastResult.hitPointWorld
          );
        }
        this.updateFriction(timeStep);
        var hitNormalWorldScaledWithProj = new Vec3();
        var fwd = new Vec3();
        var vel = new Vec3();
        for (i = 0; i < numWheels; i++) {
          var wheel = wheelInfos[i];
          chassisBody.getVelocityAtWorldPoint(wheel.chassisConnectionPointWorld, vel);
          var m = 1;
          switch (this.indexUpAxis) {
            case 1:
              m = -1;
              break;
          }
          if (wheel.isInContact) {
            this.getVehicleAxisWorld(this.indexForwardAxis, fwd);
            var proj = fwd.dot(wheel.raycastResult.hitNormalWorld);
            wheel.raycastResult.hitNormalWorld.scale(proj, hitNormalWorldScaledWithProj);
            fwd.vsub(hitNormalWorldScaledWithProj, fwd);
            var proj2 = fwd.dot(vel);
            wheel.deltaRotation = m * proj2 * timeStep / wheel.radius;
          }
          if ((wheel.sliding || !wheel.isInContact) && wheel.engineForce !== 0 && wheel.useCustomSlidingRotationalSpeed) {
            wheel.deltaRotation = (wheel.engineForce > 0 ? 1 : -1) * wheel.customSlidingRotationalSpeed * timeStep;
          }
          if (Math.abs(wheel.brake) > Math.abs(wheel.engineForce)) {
            wheel.deltaRotation = 0;
          }
          wheel.rotation += wheel.deltaRotation;
          wheel.deltaRotation *= 0.99;
        }
      };
      RaycastVehicle.prototype.updateSuspension = function (deltaTime) {
        var chassisBody = this.chassisBody;
        var chassisMass = chassisBody.mass;
        var wheelInfos = this.wheelInfos;
        var numWheels = wheelInfos.length;
        for (var w_it = 0; w_it < numWheels; w_it++) {
          var wheel = wheelInfos[w_it];
          if (wheel.isInContact) {
            var force;
            var susp_length = wheel.suspensionRestLength;
            var current_length = wheel.suspensionLength;
            var length_diff = susp_length - current_length;
            force = wheel.suspensionStiffness * length_diff * wheel.clippedInvContactDotSuspension;
            var projected_rel_vel = wheel.suspensionRelativeVelocity;
            var susp_damping;
            if (projected_rel_vel < 0) {
              susp_damping = wheel.dampingCompression;
            } else {
              susp_damping = wheel.dampingRelaxation;
            }
            force -= susp_damping * projected_rel_vel;
            wheel.suspensionForce = force * chassisMass;
            if (wheel.suspensionForce < 0) {
              wheel.suspensionForce = 0;
            }
          } else {
            wheel.suspensionForce = 0;
          }
        }
      };
      RaycastVehicle.prototype.removeFromWorld = function (world) {
        var constraints = this.constraints;
        world.remove(this.chassisBody);
        world.removeEventListener('preStep', this.preStepCallback);
        this.world = null;
      };
      var castRay_rayvector = new Vec3();
      var castRay_target = new Vec3();
      RaycastVehicle.prototype.castRay = function (wheel) {
        var rayvector = castRay_rayvector;
        var target = castRay_target;
        this.updateWheelTransformWorld(wheel);
        var chassisBody = this.chassisBody;
        var depth = -1;
        var raylen = wheel.suspensionRestLength + wheel.radius;
        wheel.directionWorld.scale(raylen, rayvector);
        var source = wheel.chassisConnectionPointWorld;
        source.vadd(rayvector, target);
        var raycastResult = wheel.raycastResult;
        raycastResult.reset();
        var oldState = chassisBody.collisionResponse;
        chassisBody.collisionResponse = false;
        this.world.rayTest(source, target, raycastResult);
        chassisBody.collisionResponse = oldState;
        var object = raycastResult.body;
        wheel.raycastResult.groundObject = 0;
        if (object) {
          depth = raycastResult.distance;
          wheel.raycastResult.hitNormalWorld = raycastResult.hitNormalWorld;
          wheel.isInContact = true;
          var hitDistance = raycastResult.distance;
          wheel.suspensionLength = hitDistance - wheel.radius;
          var minSuspensionLength = wheel.suspensionRestLength - wheel.maxSuspensionTravel;
          var maxSuspensionLength = wheel.suspensionRestLength + wheel.maxSuspensionTravel;
          if (wheel.suspensionLength < minSuspensionLength) {
            wheel.suspensionLength = minSuspensionLength;
          }
          if (wheel.suspensionLength > maxSuspensionLength) {
            wheel.suspensionLength = maxSuspensionLength;
            wheel.raycastResult.reset();
          }
          var denominator = wheel.raycastResult.hitNormalWorld.dot(wheel.directionWorld);
          var chassis_velocity_at_contactPoint = new Vec3();
          chassisBody.getVelocityAtWorldPoint(wheel.raycastResult.hitPointWorld, chassis_velocity_at_contactPoint);
          var projVel = wheel.raycastResult.hitNormalWorld.dot(chassis_velocity_at_contactPoint);
          if (denominator >= -0.1) {
            wheel.suspensionRelativeVelocity = 0;
            wheel.clippedInvContactDotSuspension = 1 / 0.1;
          } else {
            var inv = -1 / denominator;
            wheel.suspensionRelativeVelocity = projVel * inv;
            wheel.clippedInvContactDotSuspension = inv;
          }
        } else {
          wheel.suspensionLength = wheel.suspensionRestLength + 0 * wheel.maxSuspensionTravel;
          wheel.suspensionRelativeVelocity = 0.0;
          wheel.directionWorld.scale(-1, wheel.raycastResult.hitNormalWorld);
          wheel.clippedInvContactDotSuspension = 1.0;
        }
        return depth;
      };
      RaycastVehicle.prototype.updateWheelTransformWorld = function (wheel) {
        wheel.isInContact = false;
        var chassisBody = this.chassisBody;
        chassisBody.pointToWorldFrame(wheel.chassisConnectionPointLocal, wheel.chassisConnectionPointWorld);
        chassisBody.vectorToWorldFrame(wheel.directionLocal, wheel.directionWorld);
        chassisBody.vectorToWorldFrame(wheel.axleLocal, wheel.axleWorld);
      };
      RaycastVehicle.prototype.updateWheelTransform = function (wheelIndex) {
        var up = tmpVec4;
        var right = tmpVec5;
        var fwd = tmpVec6;
        var wheel = this.wheelInfos[wheelIndex];
        this.updateWheelTransformWorld(wheel);
        wheel.directionLocal.scale(-1, up);
        right.copy(wheel.axleLocal);
        up.cross(right, fwd);
        fwd.normalize();
        right.normalize();
        var steering = wheel.steering;
        var steeringOrn = new Quaternion();
        steeringOrn.setFromAxisAngle(up, steering);
        var rotatingOrn = new Quaternion();
        rotatingOrn.setFromAxisAngle(right, wheel.rotation);
        var q = wheel.worldTransform.quaternion;
        this.chassisBody.quaternion.mult(steeringOrn, q);
        q.mult(rotatingOrn, q);
        q.normalize();
        var p = wheel.worldTransform.position;
        p.copy(wheel.directionWorld);
        p.scale(wheel.suspensionLength, p);
        p.vadd(wheel.chassisConnectionPointWorld, p);
      };
      var directions = [new Vec3(1, 0, 0), new Vec3(0, 1, 0), new Vec3(0, 0, 1)];
      RaycastVehicle.prototype.getWheelTransformWorld = function (wheelIndex) {
        return this.wheelInfos[wheelIndex].worldTransform;
      };
      var updateFriction_surfNormalWS_scaled_proj = new Vec3();
      var updateFriction_axle = [];
      var updateFriction_forwardWS = [];
      var sideFrictionStiffness2 = 1;
      RaycastVehicle.prototype.updateFriction = function (timeStep) {
        var surfNormalWS_scaled_proj = updateFriction_surfNormalWS_scaled_proj;
        var wheelInfos = this.wheelInfos;
        var numWheels = wheelInfos.length;
        var chassisBody = this.chassisBody;
        var forwardWS = updateFriction_forwardWS;
        var axle = updateFriction_axle;
        for (var i = 0; i < numWheels; i++) {
          var wheel = wheelInfos[i];
          var groundObject = wheel.raycastResult.body;
          wheel.sideImpulse = 0;
          wheel.forwardImpulse = 0;
          if (!forwardWS[i]) {
            forwardWS[i] = new Vec3();
          }
          if (!axle[i]) {
            axle[i] = new Vec3();
          }
        }
        for (var i = 0; i < numWheels; i++) {
          var wheel = wheelInfos[i];
          var groundObject = wheel.raycastResult.body;
          if (groundObject) {
            var axlei = axle[i];
            var wheelTrans = this.getWheelTransformWorld(i);
            wheelTrans.vectorToWorldFrame(directions[this.indexRightAxis], axlei);
            var surfNormalWS = wheel.raycastResult.hitNormalWorld;
            var proj = axlei.dot(surfNormalWS);
            surfNormalWS.scale(proj, surfNormalWS_scaled_proj);
            axlei.vsub(surfNormalWS_scaled_proj, axlei);
            axlei.normalize();
            surfNormalWS.cross(axlei, forwardWS[i]);
            forwardWS[i].normalize();
            wheel.sideImpulse = resolveSingleBilateral(chassisBody, wheel.raycastResult.hitPointWorld, groundObject, wheel.raycastResult.hitPointWorld, axlei);
            wheel.sideImpulse *= sideFrictionStiffness2;
          }
        }
        var sideFactor = 1;
        var fwdFactor = 0.5;
        this.sliding = false;
        for (var i = 0; i < numWheels; i++) {
          var wheel = wheelInfos[i];
          var groundObject = wheel.raycastResult.body;
          var rollingFriction = 0;
          wheel.slipInfo = 1;
          if (groundObject) {
            var defaultRollingFrictionImpulse = 0;
            var maxImpulse = wheel.brake ? wheel.brake : defaultRollingFrictionImpulse;
            rollingFriction = calcRollingFriction(chassisBody, groundObject, wheel.raycastResult.hitPointWorld, forwardWS[i], maxImpulse);
            rollingFriction += wheel.engineForce * timeStep;
            var factor = maxImpulse / rollingFriction;
            wheel.slipInfo *= factor;
          }
          wheel.forwardImpulse = 0;
          wheel.skidInfo = 1;
          if (groundObject) {
            wheel.skidInfo = 1;
            var maximp = wheel.suspensionForce * timeStep * wheel.frictionSlip;
            var maximpSide = maximp;
            var maximpSquared = maximp * maximpSide;
            wheel.forwardImpulse = rollingFriction;
            var x = wheel.forwardImpulse * fwdFactor;
            var y = wheel.sideImpulse * sideFactor;
            var impulseSquared = x * x + y * y;
            wheel.sliding = false;
            if (impulseSquared > maximpSquared) {
              this.sliding = true;
              wheel.sliding = true;
              var factor = maximp / Math.sqrt(impulseSquared);
              wheel.skidInfo *= factor;
            }
          }
        }
        if (this.sliding) {
          for (var i = 0; i < numWheels; i++) {
            var wheel = wheelInfos[i];
            if (wheel.sideImpulse !== 0) {
              if (wheel.skidInfo < 1) {
                wheel.forwardImpulse *= wheel.skidInfo;
                wheel.sideImpulse *= wheel.skidInfo;
              }
            }
          }
        }
        for (var i = 0; i < numWheels; i++) {
          var wheel = wheelInfos[i];
          var rel_pos = new Vec3();
          rel_pos.copy(wheel.raycastResult.hitPointWorld);
          if (wheel.forwardImpulse !== 0) {
            var impulse = new Vec3();
            forwardWS[i].scale(wheel.forwardImpulse, impulse);
            chassisBody.applyImpulse(impulse, rel_pos);
          }
          if (wheel.sideImpulse !== 0) {
            var groundObject = wheel.raycastResult.body;
            var rel_pos2 = new Vec3();
            rel_pos2.copy(wheel.raycastResult.hitPointWorld);
            var sideImp = new Vec3();
            axle[i].scale(wheel.sideImpulse, sideImp);
            chassisBody.pointToLocalFrame(rel_pos, rel_pos);
            rel_pos['xyz'[this.indexUpAxis]] *= wheel.rollInfluence;
            chassisBody.pointToWorldFrame(rel_pos, rel_pos);
            chassisBody.applyImpulse(sideImp, rel_pos);
            sideImp.scale(-1, sideImp);
            groundObject.applyImpulse(sideImp, rel_pos2);
          }
        }
      };
      var calcRollingFriction_vel1 = new Vec3();
      var calcRollingFriction_vel2 = new Vec3();
      var calcRollingFriction_vel = new Vec3();
      function calcRollingFriction(body0, body1, frictionPosWorld, frictionDirectionWorld, maxImpulse) {
        var j1 = 0;
        var contactPosWorld = frictionPosWorld;
        var vel1 = calcRollingFriction_vel1;
        var vel2 = calcRollingFriction_vel2;
        var vel = calcRollingFriction_vel;
        body0.getVelocityAtWorldPoint(contactPosWorld, vel1);
        body1.getVelocityAtWorldPoint(contactPosWorld, vel2);
        vel1.vsub(vel2, vel);
        var vrel = frictionDirectionWorld.dot(vel);
        var denom0 = computeImpulseDenominator(body0, frictionPosWorld, frictionDirectionWorld);
        var denom1 = computeImpulseDenominator(body1, frictionPosWorld, frictionDirectionWorld);
        var relaxation = 1;
        var jacDiagABInv = relaxation / (denom0 + denom1);
        j1 = -vrel * jacDiagABInv;
        if (maxImpulse < j1) {
          j1 = maxImpulse;
        }
        if (j1 < -maxImpulse) {
          j1 = -maxImpulse;
        }
        return j1;
      }
      var computeImpulseDenominator_r0 = new Vec3();
      var computeImpulseDenominator_c0 = new Vec3();
      var computeImpulseDenominator_vec = new Vec3();
      var computeImpulseDenominator_m = new Vec3();
      function computeImpulseDenominator(body, pos, normal) {
        var r0 = computeImpulseDenominator_r0;
        var c0 = computeImpulseDenominator_c0;
        var vec = computeImpulseDenominator_vec;
        var m = computeImpulseDenominator_m;
        pos.vsub(body.position, r0);
        r0.cross(normal, c0);
        body.invInertiaWorld.vmult(c0, m);
        m.cross(r0, vec);
        return body.invMass + normal.dot(vec);
      }
      var resolveSingleBilateral_vel1 = new Vec3();
      var resolveSingleBilateral_vel2 = new Vec3();
      var resolveSingleBilateral_vel = new Vec3();
      function resolveSingleBilateral(body1, pos1, body2, pos2, normal, impulse) {
        var normalLenSqr = normal.norm2();
        if (normalLenSqr > 1.1) {
          return 0;
        }
        var vel1 = resolveSingleBilateral_vel1;
        var vel2 = resolveSingleBilateral_vel2;
        var vel = resolveSingleBilateral_vel;
        body1.getVelocityAtWorldPoint(pos1, vel1);
        body2.getVelocityAtWorldPoint(pos2, vel2);
        vel1.vsub(vel2, vel);
        var rel_vel = normal.dot(vel);
        var contactDamping = 0.2;
        var massTerm = 1 / (body1.invMass + body2.invMass);
        var impulse = -contactDamping * rel_vel * massTerm;
        return impulse;
      }
    }, {
      "../collision/Ray": 9,
      "../collision/RaycastResult": 10,
      "../math/Quaternion": 28,
      "../math/Vec3": 30,
      "../objects/WheelInfo": 36,
      "./Body": 31
    }],
    33: [function (_dereq_, module, exports) {
      var Body = _dereq_('./Body');
      var Sphere = _dereq_('../shapes/Sphere');
      var Box = _dereq_('../shapes/Box');
      var Vec3 = _dereq_('../math/Vec3');
      var HingeConstraint = _dereq_('../constraints/HingeConstraint');
      module.exports = RigidVehicle;
      function RigidVehicle(options) {
        this.wheelBodies = [];
        this.coordinateSystem = typeof options.coordinateSystem === 'undefined' ? new Vec3(1, 2, 3) : options.coordinateSystem.clone();
        this.chassisBody = options.chassisBody;
        if (!this.chassisBody) {
          var chassisShape = new Box(new Vec3(5, 2, 0.5));
          this.chassisBody = new Body(1, chassisShape);
        }
        this.constraints = [];
        this.wheelAxes = [];
        this.wheelForces = [];
      }
      RigidVehicle.prototype.addWheel = function (options) {
        options = options || {};
        var wheelBody = options.body;
        if (!wheelBody) {
          wheelBody = new Body(1, new Sphere(1.2));
        }
        this.wheelBodies.push(wheelBody);
        this.wheelForces.push(0);
        var zero = new Vec3();
        var position = typeof options.position !== 'undefined' ? options.position.clone() : new Vec3();
        var worldPosition = new Vec3();
        this.chassisBody.pointToWorldFrame(position, worldPosition);
        wheelBody.position.set(worldPosition.x, worldPosition.y, worldPosition.z);
        var axis = typeof options.axis !== 'undefined' ? options.axis.clone() : new Vec3(0, 1, 0);
        this.wheelAxes.push(axis);
        var hingeConstraint = new HingeConstraint(this.chassisBody, wheelBody, {
          pivotA: position,
          axisA: axis,
          pivotB: Vec3.ZERO,
          axisB: axis,
          collideConnected: false
        });
        this.constraints.push(hingeConstraint);
        return this.wheelBodies.length - 1;
      };
      RigidVehicle.prototype.setSteeringValue = function (value, wheelIndex) {
        var axis = this.wheelAxes[wheelIndex];
        var c = Math.cos(value),
            s = Math.sin(value),
            x = axis.x,
            y = axis.y;
        this.constraints[wheelIndex].axisA.set(c * x - s * y, s * x + c * y, 0);
      };
      RigidVehicle.prototype.setMotorSpeed = function (value, wheelIndex) {
        var hingeConstraint = this.constraints[wheelIndex];
        hingeConstraint.enableMotor();
        hingeConstraint.motorTargetVelocity = value;
      };
      RigidVehicle.prototype.disableMotor = function (wheelIndex) {
        var hingeConstraint = this.constraints[wheelIndex];
        hingeConstraint.disableMotor();
      };
      var torque = new Vec3();
      RigidVehicle.prototype.setWheelForce = function (value, wheelIndex) {
        this.wheelForces[wheelIndex] = value;
      };
      RigidVehicle.prototype.applyWheelForce = function (value, wheelIndex) {
        var axis = this.wheelAxes[wheelIndex];
        var wheelBody = this.wheelBodies[wheelIndex];
        var bodyTorque = wheelBody.torque;
        axis.scale(value, torque);
        wheelBody.vectorToWorldFrame(torque, torque);
        bodyTorque.vadd(torque, bodyTorque);
      };
      RigidVehicle.prototype.addToWorld = function (world) {
        var constraints = this.constraints;
        var bodies = this.wheelBodies.concat([this.chassisBody]);
        for (var i = 0; i < bodies.length; i++) {
          world.add(bodies[i]);
        }
        for (var i = 0; i < constraints.length; i++) {
          world.addConstraint(constraints[i]);
        }
        world.addEventListener('preStep', this._update.bind(this));
      };
      RigidVehicle.prototype._update = function () {
        var wheelForces = this.wheelForces;
        for (var i = 0; i < wheelForces.length; i++) {
          this.applyWheelForce(wheelForces[i], i);
        }
      };
      RigidVehicle.prototype.removeFromWorld = function (world) {
        var constraints = this.constraints;
        var bodies = this.wheelBodies.concat([this.chassisBody]);
        for (var i = 0; i < bodies.length; i++) {
          world.remove(bodies[i]);
        }
        for (var i = 0; i < constraints.length; i++) {
          world.removeConstraint(constraints[i]);
        }
      };
      var worldAxis = new Vec3();
      RigidVehicle.prototype.getWheelSpeed = function (wheelIndex) {
        var axis = this.wheelAxes[wheelIndex];
        var wheelBody = this.wheelBodies[wheelIndex];
        var w = wheelBody.angularVelocity;
        this.chassisBody.vectorToWorldFrame(axis, worldAxis);
        return w.dot(worldAxis);
      };
    }, {
      "../constraints/HingeConstraint": 15,
      "../math/Vec3": 30,
      "../shapes/Box": 37,
      "../shapes/Sphere": 44,
      "./Body": 31
    }],
    34: [function (_dereq_, module, exports) {
      module.exports = SPHSystem;
      var Shape = _dereq_('../shapes/Shape');
      var Vec3 = _dereq_('../math/Vec3');
      var Quaternion = _dereq_('../math/Quaternion');
      var Particle = _dereq_('../shapes/Particle');
      var Body = _dereq_('../objects/Body');
      var Material = _dereq_('../material/Material');
      function SPHSystem() {
        this.particles = [];
        this.density = 1;
        this.smoothingRadius = 1;
        this.speedOfSound = 1;
        this.viscosity = 0.01;
        this.eps = 0.000001;
        this.pressures = [];
        this.densities = [];
        this.neighbors = [];
      }
      SPHSystem.prototype.add = function (particle) {
        this.particles.push(particle);
        if (this.neighbors.length < this.particles.length) {
          this.neighbors.push([]);
        }
      };
      SPHSystem.prototype.remove = function (particle) {
        var idx = this.particles.indexOf(particle);
        if (idx !== -1) {
          this.particles.splice(idx, 1);
          if (this.neighbors.length > this.particles.length) {
            this.neighbors.pop();
          }
        }
      };
      var SPHSystem_getNeighbors_dist = new Vec3();
      SPHSystem.prototype.getNeighbors = function (particle, neighbors) {
        var N = this.particles.length,
            id = particle.id,
            R2 = this.smoothingRadius * this.smoothingRadius,
            dist = SPHSystem_getNeighbors_dist;
        for (var i = 0; i !== N; i++) {
          var p = this.particles[i];
          p.position.vsub(particle.position, dist);
          if (id !== p.id && dist.norm2() < R2) {
            neighbors.push(p);
          }
        }
      };
      var SPHSystem_update_dist = new Vec3(),
          SPHSystem_update_a_pressure = new Vec3(),
          SPHSystem_update_a_visc = new Vec3(),
          SPHSystem_update_gradW = new Vec3(),
          SPHSystem_update_r_vec = new Vec3(),
          SPHSystem_update_u = new Vec3();
      SPHSystem.prototype.update = function () {
        var N = this.particles.length,
            dist = SPHSystem_update_dist,
            cs = this.speedOfSound,
            eps = this.eps;
        for (var i = 0; i !== N; i++) {
          var p = this.particles[i];
          var neighbors = this.neighbors[i];
          neighbors.length = 0;
          this.getNeighbors(p, neighbors);
          neighbors.push(this.particles[i]);
          var numNeighbors = neighbors.length;
          var sum = 0.0;
          for (var j = 0; j !== numNeighbors; j++) {
            p.position.vsub(neighbors[j].position, dist);
            var len = dist.norm();
            var weight = this.w(len);
            sum += neighbors[j].mass * weight;
          }
          this.densities[i] = sum;
          this.pressures[i] = cs * cs * (this.densities[i] - this.density);
        }
        var a_pressure = SPHSystem_update_a_pressure;
        var a_visc = SPHSystem_update_a_visc;
        var gradW = SPHSystem_update_gradW;
        var r_vec = SPHSystem_update_r_vec;
        var u = SPHSystem_update_u;
        for (var i = 0; i !== N; i++) {
          var particle = this.particles[i];
          a_pressure.set(0, 0, 0);
          a_visc.set(0, 0, 0);
          var Pij;
          var nabla;
          var neighbors = this.neighbors[i];
          var numNeighbors = neighbors.length;
          for (var j = 0; j !== numNeighbors; j++) {
            var neighbor = neighbors[j];
            particle.position.vsub(neighbor.position, r_vec);
            var r = r_vec.norm();
            Pij = -neighbor.mass * (this.pressures[i] / (this.densities[i] * this.densities[i] + eps) + this.pressures[j] / (this.densities[j] * this.densities[j] + eps));
            this.gradw(r_vec, gradW);
            gradW.mult(Pij, gradW);
            a_pressure.vadd(gradW, a_pressure);
            neighbor.velocity.vsub(particle.velocity, u);
            u.mult(1.0 / (0.0001 + this.densities[i] * this.densities[j]) * this.viscosity * neighbor.mass, u);
            nabla = this.nablaw(r);
            u.mult(nabla, u);
            a_visc.vadd(u, a_visc);
          }
          a_visc.mult(particle.mass, a_visc);
          a_pressure.mult(particle.mass, a_pressure);
          particle.force.vadd(a_visc, particle.force);
          particle.force.vadd(a_pressure, particle.force);
        }
      };
      SPHSystem.prototype.w = function (r) {
        var h = this.smoothingRadius;
        return 315.0 / (64.0 * Math.PI * Math.pow(h, 9)) * Math.pow(h * h - r * r, 3);
      };
      SPHSystem.prototype.gradw = function (rVec, resultVec) {
        var r = rVec.norm(),
            h = this.smoothingRadius;
        rVec.mult(945.0 / (32.0 * Math.PI * Math.pow(h, 9)) * Math.pow(h * h - r * r, 2), resultVec);
      };
      SPHSystem.prototype.nablaw = function (r) {
        var h = this.smoothingRadius;
        var nabla = 945.0 / (32.0 * Math.PI * Math.pow(h, 9)) * (h * h - r * r) * (7 * r * r - 3 * h * h);
        return nabla;
      };
    }, {
      "../material/Material": 25,
      "../math/Quaternion": 28,
      "../math/Vec3": 30,
      "../objects/Body": 31,
      "../shapes/Particle": 41,
      "../shapes/Shape": 43
    }],
    35: [function (_dereq_, module, exports) {
      var Vec3 = _dereq_('../math/Vec3');
      module.exports = Spring;
      function Spring(bodyA, bodyB, options) {
        options = options || {};
        this.restLength = typeof options.restLength === "number" ? options.restLength : 1;
        this.stiffness = options.stiffness || 100;
        this.damping = options.damping || 1;
        this.bodyA = bodyA;
        this.bodyB = bodyB;
        this.localAnchorA = new Vec3();
        this.localAnchorB = new Vec3();
        if (options.localAnchorA) {
          this.localAnchorA.copy(options.localAnchorA);
        }
        if (options.localAnchorB) {
          this.localAnchorB.copy(options.localAnchorB);
        }
        if (options.worldAnchorA) {
          this.setWorldAnchorA(options.worldAnchorA);
        }
        if (options.worldAnchorB) {
          this.setWorldAnchorB(options.worldAnchorB);
        }
      }
      Spring.prototype.setWorldAnchorA = function (worldAnchorA) {
        this.bodyA.pointToLocalFrame(worldAnchorA, this.localAnchorA);
      };
      Spring.prototype.setWorldAnchorB = function (worldAnchorB) {
        this.bodyB.pointToLocalFrame(worldAnchorB, this.localAnchorB);
      };
      Spring.prototype.getWorldAnchorA = function (result) {
        this.bodyA.pointToWorldFrame(this.localAnchorA, result);
      };
      Spring.prototype.getWorldAnchorB = function (result) {
        this.bodyB.pointToWorldFrame(this.localAnchorB, result);
      };
      var applyForce_r = new Vec3(),
          applyForce_r_unit = new Vec3(),
          applyForce_u = new Vec3(),
          applyForce_f = new Vec3(),
          applyForce_worldAnchorA = new Vec3(),
          applyForce_worldAnchorB = new Vec3(),
          applyForce_ri = new Vec3(),
          applyForce_rj = new Vec3(),
          applyForce_ri_x_f = new Vec3(),
          applyForce_rj_x_f = new Vec3(),
          applyForce_tmp = new Vec3();
      Spring.prototype.applyForce = function () {
        var k = this.stiffness,
            d = this.damping,
            l = this.restLength,
            bodyA = this.bodyA,
            bodyB = this.bodyB,
            r = applyForce_r,
            r_unit = applyForce_r_unit,
            u = applyForce_u,
            f = applyForce_f,
            tmp = applyForce_tmp;
        var worldAnchorA = applyForce_worldAnchorA,
            worldAnchorB = applyForce_worldAnchorB,
            ri = applyForce_ri,
            rj = applyForce_rj,
            ri_x_f = applyForce_ri_x_f,
            rj_x_f = applyForce_rj_x_f;
        this.getWorldAnchorA(worldAnchorA);
        this.getWorldAnchorB(worldAnchorB);
        worldAnchorA.vsub(bodyA.position, ri);
        worldAnchorB.vsub(bodyB.position, rj);
        worldAnchorB.vsub(worldAnchorA, r);
        var rlen = r.norm();
        r_unit.copy(r);
        r_unit.normalize();
        bodyB.velocity.vsub(bodyA.velocity, u);
        bodyB.angularVelocity.cross(rj, tmp);
        u.vadd(tmp, u);
        bodyA.angularVelocity.cross(ri, tmp);
        u.vsub(tmp, u);
        r_unit.mult(-k * (rlen - l) - d * u.dot(r_unit), f);
        bodyA.force.vsub(f, bodyA.force);
        bodyB.force.vadd(f, bodyB.force);
        ri.cross(f, ri_x_f);
        rj.cross(f, rj_x_f);
        bodyA.torque.vsub(ri_x_f, bodyA.torque);
        bodyB.torque.vadd(rj_x_f, bodyB.torque);
      };
    }, {
      "../math/Vec3": 30
    }],
    36: [function (_dereq_, module, exports) {
      var Vec3 = _dereq_('../math/Vec3');
      var Transform = _dereq_('../math/Transform');
      var RaycastResult = _dereq_('../collision/RaycastResult');
      var Utils = _dereq_('../utils/Utils');
      module.exports = WheelInfo;
      function WheelInfo(options) {
        options = Utils.defaults(options, {
          chassisConnectionPointLocal: new Vec3(),
          chassisConnectionPointWorld: new Vec3(),
          directionLocal: new Vec3(),
          directionWorld: new Vec3(),
          axleLocal: new Vec3(),
          axleWorld: new Vec3(),
          suspensionRestLength: 1,
          suspensionMaxLength: 2,
          radius: 1,
          suspensionStiffness: 100,
          dampingCompression: 10,
          dampingRelaxation: 10,
          frictionSlip: 10000,
          steering: 0,
          rotation: 0,
          deltaRotation: 0,
          rollInfluence: 0.01,
          maxSuspensionForce: Number.MAX_VALUE,
          isFrontWheel: true,
          clippedInvContactDotSuspension: 1,
          suspensionRelativeVelocity: 0,
          suspensionForce: 0,
          skidInfo: 0,
          suspensionLength: 0,
          maxSuspensionTravel: 1,
          useCustomSlidingRotationalSpeed: false,
          customSlidingRotationalSpeed: -0.1
        });
        this.maxSuspensionTravel = options.maxSuspensionTravel;
        this.customSlidingRotationalSpeed = options.customSlidingRotationalSpeed;
        this.useCustomSlidingRotationalSpeed = options.useCustomSlidingRotationalSpeed;
        this.sliding = false;
        this.chassisConnectionPointLocal = options.chassisConnectionPointLocal.clone();
        this.chassisConnectionPointWorld = options.chassisConnectionPointWorld.clone();
        this.directionLocal = options.directionLocal.clone();
        this.directionWorld = options.directionWorld.clone();
        this.axleLocal = options.axleLocal.clone();
        this.axleWorld = options.axleWorld.clone();
        this.suspensionRestLength = options.suspensionRestLength;
        this.suspensionMaxLength = options.suspensionMaxLength;
        this.radius = options.radius;
        this.suspensionStiffness = options.suspensionStiffness;
        this.dampingCompression = options.dampingCompression;
        this.dampingRelaxation = options.dampingRelaxation;
        this.frictionSlip = options.frictionSlip;
        this.steering = 0;
        this.rotation = 0;
        this.deltaRotation = 0;
        this.rollInfluence = options.rollInfluence;
        this.maxSuspensionForce = options.maxSuspensionForce;
        this.engineForce = 0;
        this.brake = 0;
        this.isFrontWheel = options.isFrontWheel;
        this.clippedInvContactDotSuspension = 1;
        this.suspensionRelativeVelocity = 0;
        this.suspensionForce = 0;
        this.skidInfo = 0;
        this.suspensionLength = 0;
        this.sideImpulse = 0;
        this.forwardImpulse = 0;
        this.raycastResult = new RaycastResult();
        this.worldTransform = new Transform();
        this.isInContact = false;
      }
      var chassis_velocity_at_contactPoint = new Vec3();
      var relpos = new Vec3();
      var chassis_velocity_at_contactPoint = new Vec3();
      WheelInfo.prototype.updateWheel = function (chassis) {
        var raycastResult = this.raycastResult;
        if (this.isInContact) {
          var project = raycastResult.hitNormalWorld.dot(raycastResult.directionWorld);
          raycastResult.hitPointWorld.vsub(chassis.position, relpos);
          chassis.getVelocityAtWorldPoint(relpos, chassis_velocity_at_contactPoint);
          var projVel = raycastResult.hitNormalWorld.dot(chassis_velocity_at_contactPoint);
          if (project >= -0.1) {
            this.suspensionRelativeVelocity = 0.0;
            this.clippedInvContactDotSuspension = 1.0 / 0.1;
          } else {
            var inv = -1 / project;
            this.suspensionRelativeVelocity = projVel * inv;
            this.clippedInvContactDotSuspension = inv;
          }
        } else {
          raycastResult.suspensionLength = this.suspensionRestLength;
          this.suspensionRelativeVelocity = 0.0;
          raycastResult.directionWorld.scale(-1, raycastResult.hitNormalWorld);
          this.clippedInvContactDotSuspension = 1.0;
        }
      };
    }, {
      "../collision/RaycastResult": 10,
      "../math/Transform": 29,
      "../math/Vec3": 30,
      "../utils/Utils": 53
    }],
    37: [function (_dereq_, module, exports) {
      module.exports = Box;
      var Shape = _dereq_('./Shape');
      var Vec3 = _dereq_('../math/Vec3');
      var ConvexPolyhedron = _dereq_('./ConvexPolyhedron');
      function Box(halfExtents) {
        Shape.call(this);
        this.type = Shape.types.BOX;
        this.halfExtents = halfExtents;
        this.convexPolyhedronRepresentation = null;
        this.updateConvexPolyhedronRepresentation();
        this.updateBoundingSphereRadius();
      }
      Box.prototype = new Shape();
      Box.prototype.constructor = Box;
      Box.prototype.updateConvexPolyhedronRepresentation = function () {
        var sx = this.halfExtents.x;
        var sy = this.halfExtents.y;
        var sz = this.halfExtents.z;
        var V = Vec3;
        var vertices = [new V(-sx, -sy, -sz), new V(sx, -sy, -sz), new V(sx, sy, -sz), new V(-sx, sy, -sz), new V(-sx, -sy, sz), new V(sx, -sy, sz), new V(sx, sy, sz), new V(-sx, sy, sz)];
        var indices = [[3, 2, 1, 0],
        [4, 5, 6, 7],
        [5, 4, 0, 1],
        [2, 3, 7, 6],
        [0, 4, 7, 3],
        [1, 2, 6, 5]
        ];
        var axes = [new V(0, 0, 1), new V(0, 1, 0), new V(1, 0, 0)];
        var h = new ConvexPolyhedron(vertices, indices);
        this.convexPolyhedronRepresentation = h;
        h.material = this.material;
      };
      Box.prototype.calculateLocalInertia = function (mass, target) {
        target = target || new Vec3();
        Box.calculateInertia(this.halfExtents, mass, target);
        return target;
      };
      Box.calculateInertia = function (halfExtents, mass, target) {
        var e = halfExtents;
        target.x = 1.0 / 12.0 * mass * (2 * e.y * 2 * e.y + 2 * e.z * 2 * e.z);
        target.y = 1.0 / 12.0 * mass * (2 * e.x * 2 * e.x + 2 * e.z * 2 * e.z);
        target.z = 1.0 / 12.0 * mass * (2 * e.y * 2 * e.y + 2 * e.x * 2 * e.x);
      };
      Box.prototype.getSideNormals = function (sixTargetVectors, quat) {
        var sides = sixTargetVectors;
        var ex = this.halfExtents;
        sides[0].set(ex.x, 0, 0);
        sides[1].set(0, ex.y, 0);
        sides[2].set(0, 0, ex.z);
        sides[3].set(-ex.x, 0, 0);
        sides[4].set(0, -ex.y, 0);
        sides[5].set(0, 0, -ex.z);
        if (quat !== undefined) {
          for (var i = 0; i !== sides.length; i++) {
            quat.vmult(sides[i], sides[i]);
          }
        }
        return sides;
      };
      Box.prototype.volume = function () {
        return 8.0 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z;
      };
      Box.prototype.updateBoundingSphereRadius = function () {
        this.boundingSphereRadius = this.halfExtents.norm();
      };
      var worldCornerTempPos = new Vec3();
      var worldCornerTempNeg = new Vec3();
      Box.prototype.forEachWorldCorner = function (pos, quat, callback) {
        var e = this.halfExtents;
        var corners = [[e.x, e.y, e.z], [-e.x, e.y, e.z], [-e.x, -e.y, e.z], [-e.x, -e.y, -e.z], [e.x, -e.y, -e.z], [e.x, e.y, -e.z], [-e.x, e.y, -e.z], [e.x, -e.y, e.z]];
        for (var i = 0; i < corners.length; i++) {
          worldCornerTempPos.set(corners[i][0], corners[i][1], corners[i][2]);
          quat.vmult(worldCornerTempPos, worldCornerTempPos);
          pos.vadd(worldCornerTempPos, worldCornerTempPos);
          callback(worldCornerTempPos.x, worldCornerTempPos.y, worldCornerTempPos.z);
        }
      };
      var worldCornersTemp = [new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3()];
      Box.prototype.calculateWorldAABB = function (pos, quat, min, max) {
        var e = this.halfExtents;
        worldCornersTemp[0].set(e.x, e.y, e.z);
        worldCornersTemp[1].set(-e.x, e.y, e.z);
        worldCornersTemp[2].set(-e.x, -e.y, e.z);
        worldCornersTemp[3].set(-e.x, -e.y, -e.z);
        worldCornersTemp[4].set(e.x, -e.y, -e.z);
        worldCornersTemp[5].set(e.x, e.y, -e.z);
        worldCornersTemp[6].set(-e.x, e.y, -e.z);
        worldCornersTemp[7].set(e.x, -e.y, e.z);
        var wc = worldCornersTemp[0];
        quat.vmult(wc, wc);
        pos.vadd(wc, wc);
        max.copy(wc);
        min.copy(wc);
        for (var i = 1; i < 8; i++) {
          var wc = worldCornersTemp[i];
          quat.vmult(wc, wc);
          pos.vadd(wc, wc);
          var x = wc.x;
          var y = wc.y;
          var z = wc.z;
          if (x > max.x) {
            max.x = x;
          }
          if (y > max.y) {
            max.y = y;
          }
          if (z > max.z) {
            max.z = z;
          }
          if (x < min.x) {
            min.x = x;
          }
          if (y < min.y) {
            min.y = y;
          }
          if (z < min.z) {
            min.z = z;
          }
        }
      };
    }, {
      "../math/Vec3": 30,
      "./ConvexPolyhedron": 38,
      "./Shape": 43
    }],
    38: [function (_dereq_, module, exports) {
      module.exports = ConvexPolyhedron;
      var Shape = _dereq_('./Shape');
      var Vec3 = _dereq_('../math/Vec3');
      var Quaternion = _dereq_('../math/Quaternion');
      var Transform = _dereq_('../math/Transform');
      function ConvexPolyhedron(points, faces, uniqueAxes) {
        Shape.call(this);
        this.type = Shape.types.CONVEXPOLYHEDRON;
        this.vertices = points || [];
        this.worldVertices = [];
        this.worldVerticesNeedsUpdate = true;
        this.faces = faces || [];
        this.faceNormals = [];
        this.computeNormals();
        this.worldFaceNormalsNeedsUpdate = true;
        this.worldFaceNormals = [];
        this.uniqueEdges = [];
        this.uniqueAxes = uniqueAxes ? uniqueAxes.slice() : null;
        this.computeEdges();
        this.updateBoundingSphereRadius();
      }
      ConvexPolyhedron.prototype = new Shape();
      ConvexPolyhedron.prototype.constructor = ConvexPolyhedron;
      var computeEdges_tmpEdge = new Vec3();
      ConvexPolyhedron.prototype.computeEdges = function () {
        var faces = this.faces;
        var vertices = this.vertices;
        var nv = vertices.length;
        var edges = this.uniqueEdges;
        edges.length = 0;
        var edge = computeEdges_tmpEdge;
        for (var i = 0; i !== faces.length; i++) {
          var face = faces[i];
          var numVertices = face.length;
          for (var j = 0; j !== numVertices; j++) {
            var k = (j + 1) % numVertices;
            vertices[face[j]].vsub(vertices[face[k]], edge);
            edge.normalize();
            var found = false;
            for (var p = 0; p !== edges.length; p++) {
              if (edges[p].almostEquals(edge) || edges[p].almostEquals(edge)) {
                found = true;
                break;
              }
            }
            if (!found) {
              edges.push(edge.clone());
            }
          }
        }
      };
      ConvexPolyhedron.prototype.computeNormals = function () {
        this.faceNormals.length = this.faces.length;
        for (var i = 0; i < this.faces.length; i++) {
          for (var j = 0; j < this.faces[i].length; j++) {
            if (!this.vertices[this.faces[i][j]]) {
              throw new Error("Vertex " + this.faces[i][j] + " not found!");
            }
          }
          var n = this.faceNormals[i] || new Vec3();
          this.getFaceNormal(i, n);
          n.negate(n);
          this.faceNormals[i] = n;
          var vertex = this.vertices[this.faces[i][0]];
          if (n.dot(vertex) < 0) {
            console.error(".faceNormals[" + i + "] = Vec3(" + n.toString() + ") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");
            for (var j = 0; j < this.faces[i].length; j++) {
              console.warn(".vertices[" + this.faces[i][j] + "] = Vec3(" + this.vertices[this.faces[i][j]].toString() + ")");
            }
          }
        }
      };
      var cb = new Vec3();
      var ab = new Vec3();
      ConvexPolyhedron.computeNormal = function (va, vb, vc, target) {
        vb.vsub(va, ab);
        vc.vsub(vb, cb);
        cb.cross(ab, target);
        if (!target.isZero()) {
          target.normalize();
        }
      };
      ConvexPolyhedron.prototype.getFaceNormal = function (i, target) {
        var f = this.faces[i];
        var va = this.vertices[f[0]];
        var vb = this.vertices[f[1]];
        var vc = this.vertices[f[2]];
        return ConvexPolyhedron.computeNormal(va, vb, vc, target);
      };
      var cah_WorldNormal = new Vec3();
      ConvexPolyhedron.prototype.clipAgainstHull = function (posA, quatA, hullB, posB, quatB, separatingNormal, minDist, maxDist, result) {
        var WorldNormal = cah_WorldNormal;
        var closestFaceB = -1;
        var dmax = -Number.MAX_VALUE;
        for (var face = 0; face < hullB.faces.length; face++) {
          WorldNormal.copy(hullB.faceNormals[face]);
          quatB.vmult(WorldNormal, WorldNormal);
          var d = WorldNormal.dot(separatingNormal);
          if (d > dmax) {
            dmax = d;
            closestFaceB = face;
          }
        }
        var worldVertsB1 = [];
        var polyB = hullB.faces[closestFaceB];
        var numVertices = polyB.length;
        for (var e0 = 0; e0 < numVertices; e0++) {
          var b = hullB.vertices[polyB[e0]];
          var worldb = new Vec3();
          worldb.copy(b);
          quatB.vmult(worldb, worldb);
          posB.vadd(worldb, worldb);
          worldVertsB1.push(worldb);
        }
        if (closestFaceB >= 0) {
          this.clipFaceAgainstHull(separatingNormal, posA, quatA, worldVertsB1, minDist, maxDist, result);
        }
      };
      var fsa_faceANormalWS3 = new Vec3(),
          fsa_Worldnormal1 = new Vec3(),
          fsa_deltaC = new Vec3(),
          fsa_worldEdge0 = new Vec3(),
          fsa_worldEdge1 = new Vec3(),
          fsa_Cross = new Vec3();
      ConvexPolyhedron.prototype.findSeparatingAxis = function (hullB, posA, quatA, posB, quatB, target, faceListA, faceListB) {
        var faceANormalWS3 = fsa_faceANormalWS3,
            Worldnormal1 = fsa_Worldnormal1,
            deltaC = fsa_deltaC,
            worldEdge0 = fsa_worldEdge0,
            worldEdge1 = fsa_worldEdge1,
            Cross = fsa_Cross;
        var dmin = Number.MAX_VALUE;
        var hullA = this;
        if (!hullA.uniqueAxes) {
          var numFacesA = faceListA ? faceListA.length : hullA.faces.length;
          for (var i = 0; i < numFacesA; i++) {
            var fi = faceListA ? faceListA[i] : i;
            faceANormalWS3.copy(hullA.faceNormals[fi]);
            quatA.vmult(faceANormalWS3, faceANormalWS3);
            var d = hullA.testSepAxis(faceANormalWS3, hullB, posA, quatA, posB, quatB);
            if (d === false) {
              return false;
            }
            if (d < dmin) {
              dmin = d;
              target.copy(faceANormalWS3);
            }
          }
        } else {
          for (var i = 0; i !== hullA.uniqueAxes.length; i++) {
            quatA.vmult(hullA.uniqueAxes[i], faceANormalWS3);
            var d = hullA.testSepAxis(faceANormalWS3, hullB, posA, quatA, posB, quatB);
            if (d === false) {
              return false;
            }
            if (d < dmin) {
              dmin = d;
              target.copy(faceANormalWS3);
            }
          }
        }
        if (!hullB.uniqueAxes) {
          var numFacesB = faceListB ? faceListB.length : hullB.faces.length;
          for (var i = 0; i < numFacesB; i++) {
            var fi = faceListB ? faceListB[i] : i;
            Worldnormal1.copy(hullB.faceNormals[fi]);
            quatB.vmult(Worldnormal1, Worldnormal1);
            var d = hullA.testSepAxis(Worldnormal1, hullB, posA, quatA, posB, quatB);
            if (d === false) {
              return false;
            }
            if (d < dmin) {
              dmin = d;
              target.copy(Worldnormal1);
            }
          }
        } else {
          for (var i = 0; i !== hullB.uniqueAxes.length; i++) {
            quatB.vmult(hullB.uniqueAxes[i], Worldnormal1);
            var d = hullA.testSepAxis(Worldnormal1, hullB, posA, quatA, posB, quatB);
            if (d === false) {
              return false;
            }
            if (d < dmin) {
              dmin = d;
              target.copy(Worldnormal1);
            }
          }
        }
        for (var e0 = 0; e0 !== hullA.uniqueEdges.length; e0++) {
          quatA.vmult(hullA.uniqueEdges[e0], worldEdge0);
          for (var e1 = 0; e1 !== hullB.uniqueEdges.length; e1++) {
            quatB.vmult(hullB.uniqueEdges[e1], worldEdge1);
            worldEdge0.cross(worldEdge1, Cross);
            if (!Cross.almostZero()) {
              Cross.normalize();
              var dist = hullA.testSepAxis(Cross, hullB, posA, quatA, posB, quatB);
              if (dist === false) {
                return false;
              }
              if (dist < dmin) {
                dmin = dist;
                target.copy(Cross);
              }
            }
          }
        }
        posB.vsub(posA, deltaC);
        if (deltaC.dot(target) > 0.0) {
          target.negate(target);
        }
        return true;
      };
      var maxminA = [],
          maxminB = [];
      ConvexPolyhedron.prototype.testSepAxis = function (axis, hullB, posA, quatA, posB, quatB) {
        var hullA = this;
        ConvexPolyhedron.project(hullA, axis, posA, quatA, maxminA);
        ConvexPolyhedron.project(hullB, axis, posB, quatB, maxminB);
        var maxA = maxminA[0];
        var minA = maxminA[1];
        var maxB = maxminB[0];
        var minB = maxminB[1];
        if (maxA < minB || maxB < minA) {
          return false;
        }
        var d0 = maxA - minB;
        var d1 = maxB - minA;
        var depth = d0 < d1 ? d0 : d1;
        return depth;
      };
      var cli_aabbmin = new Vec3(),
          cli_aabbmax = new Vec3();
      ConvexPolyhedron.prototype.calculateLocalInertia = function (mass, target) {
        this.computeLocalAABB(cli_aabbmin, cli_aabbmax);
        var x = cli_aabbmax.x - cli_aabbmin.x,
            y = cli_aabbmax.y - cli_aabbmin.y,
            z = cli_aabbmax.z - cli_aabbmin.z;
        target.x = 1.0 / 12.0 * mass * (2 * y * 2 * y + 2 * z * 2 * z);
        target.y = 1.0 / 12.0 * mass * (2 * x * 2 * x + 2 * z * 2 * z);
        target.z = 1.0 / 12.0 * mass * (2 * y * 2 * y + 2 * x * 2 * x);
      };
      ConvexPolyhedron.prototype.getPlaneConstantOfFace = function (face_i) {
        var f = this.faces[face_i];
        var n = this.faceNormals[face_i];
        var v = this.vertices[f[0]];
        var c = -n.dot(v);
        return c;
      };
      var cfah_faceANormalWS = new Vec3(),
          cfah_edge0 = new Vec3(),
          cfah_WorldEdge0 = new Vec3(),
          cfah_worldPlaneAnormal1 = new Vec3(),
          cfah_planeNormalWS1 = new Vec3(),
          cfah_worldA1 = new Vec3(),
          cfah_localPlaneNormal = new Vec3(),
          cfah_planeNormalWS = new Vec3();
      ConvexPolyhedron.prototype.clipFaceAgainstHull = function (separatingNormal, posA, quatA, worldVertsB1, minDist, maxDist, result) {
        var faceANormalWS = cfah_faceANormalWS,
            edge0 = cfah_edge0,
            WorldEdge0 = cfah_WorldEdge0,
            worldPlaneAnormal1 = cfah_worldPlaneAnormal1,
            planeNormalWS1 = cfah_planeNormalWS1,
            worldA1 = cfah_worldA1,
            localPlaneNormal = cfah_localPlaneNormal,
            planeNormalWS = cfah_planeNormalWS;
        var hullA = this;
        var worldVertsB2 = [];
        var pVtxIn = worldVertsB1;
        var pVtxOut = worldVertsB2;
        var closestFaceA = -1;
        var dmin = Number.MAX_VALUE;
        for (var face = 0; face < hullA.faces.length; face++) {
          faceANormalWS.copy(hullA.faceNormals[face]);
          quatA.vmult(faceANormalWS, faceANormalWS);
          var d = faceANormalWS.dot(separatingNormal);
          if (d < dmin) {
            dmin = d;
            closestFaceA = face;
          }
        }
        if (closestFaceA < 0) {
          return;
        }
        var polyA = hullA.faces[closestFaceA];
        polyA.connectedFaces = [];
        for (var i = 0; i < hullA.faces.length; i++) {
          for (var j = 0; j < hullA.faces[i].length; j++) {
            if (polyA.indexOf(hullA.faces[i][j]) !== -1
            && i !== closestFaceA
            && polyA.connectedFaces.indexOf(i) === -1
            ) {
                polyA.connectedFaces.push(i);
              }
          }
        }
        var numContacts = pVtxIn.length;
        var numVerticesA = polyA.length;
        for (var e0 = 0; e0 < numVerticesA; e0++) {
          var a = hullA.vertices[polyA[e0]];
          var b = hullA.vertices[polyA[(e0 + 1) % numVerticesA]];
          a.vsub(b, edge0);
          WorldEdge0.copy(edge0);
          quatA.vmult(WorldEdge0, WorldEdge0);
          posA.vadd(WorldEdge0, WorldEdge0);
          worldPlaneAnormal1.copy(this.faceNormals[closestFaceA]);
          quatA.vmult(worldPlaneAnormal1, worldPlaneAnormal1);
          posA.vadd(worldPlaneAnormal1, worldPlaneAnormal1);
          WorldEdge0.cross(worldPlaneAnormal1, planeNormalWS1);
          planeNormalWS1.negate(planeNormalWS1);
          worldA1.copy(a);
          quatA.vmult(worldA1, worldA1);
          posA.vadd(worldA1, worldA1);
          var planeEqWS1 = -worldA1.dot(planeNormalWS1);
          var planeEqWS;
          {
            var otherFace = polyA.connectedFaces[e0];
            localPlaneNormal.copy(this.faceNormals[otherFace]);
            var localPlaneEq = this.getPlaneConstantOfFace(otherFace);
            planeNormalWS.copy(localPlaneNormal);
            quatA.vmult(planeNormalWS, planeNormalWS);
            var planeEqWS = localPlaneEq - planeNormalWS.dot(posA);
          }
          this.clipFaceAgainstPlane(pVtxIn, pVtxOut, planeNormalWS, planeEqWS);
          while (pVtxIn.length) {
            pVtxIn.shift();
          }
          while (pVtxOut.length) {
            pVtxIn.push(pVtxOut.shift());
          }
        }
        localPlaneNormal.copy(this.faceNormals[closestFaceA]);
        var localPlaneEq = this.getPlaneConstantOfFace(closestFaceA);
        planeNormalWS.copy(localPlaneNormal);
        quatA.vmult(planeNormalWS, planeNormalWS);
        var planeEqWS = localPlaneEq - planeNormalWS.dot(posA);
        for (var i = 0; i < pVtxIn.length; i++) {
          var depth = planeNormalWS.dot(pVtxIn[i]) + planeEqWS;
          if (depth <= minDist) {
            console.log("clamped: depth=" + depth + " to minDist=" + (minDist + ""));
            depth = minDist;
          }
          if (depth <= maxDist) {
            var point = pVtxIn[i];
            if (depth <= 0) {
              var p = {
                point: point,
                normal: planeNormalWS,
                depth: depth
              };
              result.push(p);
            }
          }
        }
      };
      ConvexPolyhedron.prototype.clipFaceAgainstPlane = function (inVertices, outVertices, planeNormal, planeConstant) {
        var n_dot_first, n_dot_last;
        var numVerts = inVertices.length;
        if (numVerts < 2) {
          return outVertices;
        }
        var firstVertex = inVertices[inVertices.length - 1],
            lastVertex = inVertices[0];
        n_dot_first = planeNormal.dot(firstVertex) + planeConstant;
        for (var vi = 0; vi < numVerts; vi++) {
          lastVertex = inVertices[vi];
          n_dot_last = planeNormal.dot(lastVertex) + planeConstant;
          if (n_dot_first < 0) {
            if (n_dot_last < 0) {
              var newv = new Vec3();
              newv.copy(lastVertex);
              outVertices.push(newv);
            } else {
              var newv = new Vec3();
              firstVertex.lerp(lastVertex, n_dot_first / (n_dot_first - n_dot_last), newv);
              outVertices.push(newv);
            }
          } else {
            if (n_dot_last < 0) {
              var newv = new Vec3();
              firstVertex.lerp(lastVertex, n_dot_first / (n_dot_first - n_dot_last), newv);
              outVertices.push(newv);
              outVertices.push(lastVertex);
            }
          }
          firstVertex = lastVertex;
          n_dot_first = n_dot_last;
        }
        return outVertices;
      };
      ConvexPolyhedron.prototype.computeWorldVertices = function (position, quat) {
        var N = this.vertices.length;
        while (this.worldVertices.length < N) {
          this.worldVertices.push(new Vec3());
        }
        var verts = this.vertices,
            worldVerts = this.worldVertices;
        for (var i = 0; i !== N; i++) {
          quat.vmult(verts[i], worldVerts[i]);
          position.vadd(worldVerts[i], worldVerts[i]);
        }
        this.worldVerticesNeedsUpdate = false;
      };
      var computeLocalAABB_worldVert = new Vec3();
      ConvexPolyhedron.prototype.computeLocalAABB = function (aabbmin, aabbmax) {
        var n = this.vertices.length,
            vertices = this.vertices;
        aabbmin.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
        aabbmax.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (var i = 0; i < n; i++) {
          var v = vertices[i];
          if (v.x < aabbmin.x) {
            aabbmin.x = v.x;
          } else if (v.x > aabbmax.x) {
            aabbmax.x = v.x;
          }
          if (v.y < aabbmin.y) {
            aabbmin.y = v.y;
          } else if (v.y > aabbmax.y) {
            aabbmax.y = v.y;
          }
          if (v.z < aabbmin.z) {
            aabbmin.z = v.z;
          } else if (v.z > aabbmax.z) {
            aabbmax.z = v.z;
          }
        }
      };
      ConvexPolyhedron.prototype.computeWorldFaceNormals = function (quat) {
        var N = this.faceNormals.length;
        while (this.worldFaceNormals.length < N) {
          this.worldFaceNormals.push(new Vec3());
        }
        var normals = this.faceNormals,
            worldNormals = this.worldFaceNormals;
        for (var i = 0; i !== N; i++) {
          quat.vmult(normals[i], worldNormals[i]);
        }
        this.worldFaceNormalsNeedsUpdate = false;
      };
      ConvexPolyhedron.prototype.updateBoundingSphereRadius = function () {
        var max2 = 0;
        var verts = this.vertices;
        for (var i = 0, N = verts.length; i !== N; i++) {
          var norm2 = verts[i].norm2();
          if (norm2 > max2) {
            max2 = norm2;
          }
        }
        this.boundingSphereRadius = Math.sqrt(max2);
      };
      var tempWorldVertex = new Vec3();
      ConvexPolyhedron.prototype.calculateWorldAABB = function (pos, quat, min, max) {
        var n = this.vertices.length,
            verts = this.vertices;
        var minx, miny, minz, maxx, maxy, maxz;
        for (var i = 0; i < n; i++) {
          tempWorldVertex.copy(verts[i]);
          quat.vmult(tempWorldVertex, tempWorldVertex);
          pos.vadd(tempWorldVertex, tempWorldVertex);
          var v = tempWorldVertex;
          if (v.x < minx || minx === undefined) {
            minx = v.x;
          } else if (v.x > maxx || maxx === undefined) {
            maxx = v.x;
          }
          if (v.y < miny || miny === undefined) {
            miny = v.y;
          } else if (v.y > maxy || maxy === undefined) {
            maxy = v.y;
          }
          if (v.z < minz || minz === undefined) {
            minz = v.z;
          } else if (v.z > maxz || maxz === undefined) {
            maxz = v.z;
          }
        }
        min.set(minx, miny, minz);
        max.set(maxx, maxy, maxz);
      };
      ConvexPolyhedron.prototype.volume = function () {
        return 4.0 * Math.PI * this.boundingSphereRadius / 3.0;
      };
      ConvexPolyhedron.prototype.getAveragePointLocal = function (target) {
        target = target || new Vec3();
        var n = this.vertices.length,
            verts = this.vertices;
        for (var i = 0; i < n; i++) {
          target.vadd(verts[i], target);
        }
        target.mult(1 / n, target);
        return target;
      };
      ConvexPolyhedron.prototype.transformAllPoints = function (offset, quat) {
        var n = this.vertices.length,
            verts = this.vertices;
        if (quat) {
          for (var i = 0; i < n; i++) {
            var v = verts[i];
            quat.vmult(v, v);
          }
          for (var i = 0; i < this.faceNormals.length; i++) {
            var v = this.faceNormals[i];
            quat.vmult(v, v);
          }
        }
        if (offset) {
          for (var i = 0; i < n; i++) {
            var v = verts[i];
            v.vadd(offset, v);
          }
        }
      };
      var ConvexPolyhedron_pointIsInside = new Vec3();
      var ConvexPolyhedron_vToP = new Vec3();
      var ConvexPolyhedron_vToPointInside = new Vec3();
      ConvexPolyhedron.prototype.pointIsInside = function (p) {
        var n = this.vertices.length,
            verts = this.vertices,
            faces = this.faces,
            normals = this.faceNormals;
        var N = this.faces.length;
        var pointInside = ConvexPolyhedron_pointIsInside;
        this.getAveragePointLocal(pointInside);
        for (var i = 0; i < N; i++) {
          var numVertices = this.faces[i].length;
          var n = normals[i];
          var v = verts[faces[i][0]];
          var vToP = ConvexPolyhedron_vToP;
          p.vsub(v, vToP);
          var r1 = n.dot(vToP);
          var vToPointInside = ConvexPolyhedron_vToPointInside;
          pointInside.vsub(v, vToPointInside);
          var r2 = n.dot(vToPointInside);
          if (r1 < 0 && r2 > 0 || r1 > 0 && r2 < 0) {
            return false;
          }
        }
        return  -1;
      };
      var project_worldVertex = new Vec3();
      var project_localAxis = new Vec3();
      var project_localOrigin = new Vec3();
      ConvexPolyhedron.project = function (hull, axis, pos, quat, result) {
        var n = hull.vertices.length,
            localAxis = project_localAxis,
            max = 0,
            min = 0,
            localOrigin = project_localOrigin,
            vs = hull.vertices;
        localOrigin.setZero();
        Transform.vectorToLocalFrame(pos, quat, axis, localAxis);
        Transform.pointToLocalFrame(pos, quat, localOrigin, localOrigin);
        var add = localOrigin.dot(localAxis);
        min = max = vs[0].dot(localAxis);
        for (var i = 1; i < n; i++) {
          var val = vs[i].dot(localAxis);
          if (val > max) {
            max = val;
          }
          if (val < min) {
            min = val;
          }
        }
        min -= add;
        max -= add;
        if (min > max) {
          var temp = min;
          min = max;
          max = temp;
        }
        result[0] = max;
        result[1] = min;
      };
    }, {
      "../math/Quaternion": 28,
      "../math/Transform": 29,
      "../math/Vec3": 30,
      "./Shape": 43
    }],
    39: [function (_dereq_, module, exports) {
      module.exports = Cylinder;
      var Shape = _dereq_('./Shape');
      var Vec3 = _dereq_('../math/Vec3');
      var Quaternion = _dereq_('../math/Quaternion');
      var ConvexPolyhedron = _dereq_('./ConvexPolyhedron');
      function Cylinder(radiusTop, radiusBottom, height, numSegments) {
        var N = numSegments,
            verts = [],
            axes = [],
            faces = [],
            bottomface = [],
            topface = [],
            cos = Math.cos,
            sin = Math.sin;
        verts.push(new Vec3(radiusBottom * cos(0), radiusBottom * sin(0), -height * 0.5));
        bottomface.push(0);
        verts.push(new Vec3(radiusTop * cos(0), radiusTop * sin(0), height * 0.5));
        topface.push(1);
        for (var i = 0; i < N; i++) {
          var theta = 2 * Math.PI / N * (i + 1);
          var thetaN = 2 * Math.PI / N * (i + 0.5);
          if (i < N - 1) {
            verts.push(new Vec3(radiusBottom * cos(theta), radiusBottom * sin(theta), -height * 0.5));
            bottomface.push(2 * i + 2);
            verts.push(new Vec3(radiusTop * cos(theta), radiusTop * sin(theta), height * 0.5));
            topface.push(2 * i + 3);
            faces.push([2 * i + 2, 2 * i + 3, 2 * i + 1, 2 * i]);
          } else {
            faces.push([0, 1, 2 * i + 1, 2 * i]);
          }
          if (N % 2 === 1 || i < N / 2) {
            axes.push(new Vec3(cos(thetaN), sin(thetaN), 0));
          }
        }
        faces.push(topface);
        axes.push(new Vec3(0, 0, 1));
        var temp = [];
        for (var i = 0; i < bottomface.length; i++) {
          temp.push(bottomface[bottomface.length - i - 1]);
        }
        faces.push(temp);
        this.type = Shape.types.CONVEXPOLYHEDRON;
        ConvexPolyhedron.call(this, verts, faces, axes);
      }
      Cylinder.prototype = new ConvexPolyhedron();
    }, {
      "../math/Quaternion": 28,
      "../math/Vec3": 30,
      "./ConvexPolyhedron": 38,
      "./Shape": 43
    }],
    40: [function (_dereq_, module, exports) {
      var Shape = _dereq_('./Shape');
      var ConvexPolyhedron = _dereq_('./ConvexPolyhedron');
      var Vec3 = _dereq_('../math/Vec3');
      var Utils = _dereq_('../utils/Utils');
      module.exports = Heightfield;
      function Heightfield(data, options) {
        options = Utils.defaults(options, {
          maxValue: null,
          minValue: null,
          elementSize: 1
        });
        this.data = data;
        this.maxValue = options.maxValue;
        this.minValue = options.minValue;
        this.elementSize = options.elementSize;
        if (options.minValue === null) {
          this.updateMinValue();
        }
        if (options.maxValue === null) {
          this.updateMaxValue();
        }
        this.cacheEnabled = true;
        Shape.call(this);
        this.pillarConvex = new ConvexPolyhedron();
        this.pillarOffset = new Vec3();
        this.type = Shape.types.HEIGHTFIELD;
        this.updateBoundingSphereRadius();
        this._cachedPillars = {};
      }
      Heightfield.prototype = new Shape();
      Heightfield.prototype.update = function () {
        this._cachedPillars = {};
      };
      Heightfield.prototype.updateMinValue = function () {
        var data = this.data;
        var minValue = data[0][0];
        for (var i = 0; i !== data.length; i++) {
          for (var j = 0; j !== data[i].length; j++) {
            var v = data[i][j];
            if (v < minValue) {
              minValue = v;
            }
          }
        }
        this.minValue = minValue;
      };
      Heightfield.prototype.updateMaxValue = function () {
        var data = this.data;
        var maxValue = data[0][0];
        for (var i = 0; i !== data.length; i++) {
          for (var j = 0; j !== data[i].length; j++) {
            var v = data[i][j];
            if (v > maxValue) {
              maxValue = v;
            }
          }
        }
        this.maxValue = maxValue;
      };
      Heightfield.prototype.setHeightValueAtIndex = function (xi, yi, value) {
        var data = this.data;
        data[xi][yi] = value;
        this.clearCachedConvexTrianglePillar(xi, yi, false);
        if (xi > 0) {
          this.clearCachedConvexTrianglePillar(xi - 1, yi, true);
          this.clearCachedConvexTrianglePillar(xi - 1, yi, false);
        }
        if (yi > 0) {
          this.clearCachedConvexTrianglePillar(xi, yi - 1, true);
          this.clearCachedConvexTrianglePillar(xi, yi - 1, false);
        }
        if (yi > 0 && xi > 0) {
          this.clearCachedConvexTrianglePillar(xi - 1, yi - 1, true);
        }
      };
      Heightfield.prototype.getRectMinMax = function (iMinX, iMinY, iMaxX, iMaxY, result) {
        result = result || [];
        var data = this.data,
            max = this.minValue;
        for (var i = iMinX; i <= iMaxX; i++) {
          for (var j = iMinY; j <= iMaxY; j++) {
            var height = data[i][j];
            if (height > max) {
              max = height;
            }
          }
        }
        result[0] = this.minValue;
        result[1] = max;
      };
      Heightfield.prototype.getIndexOfPosition = function (x, y, result, clamp) {
        var w = this.elementSize;
        var data = this.data;
        var xi = Math.floor(x / w);
        var yi = Math.floor(y / w);
        result[0] = xi;
        result[1] = yi;
        if (clamp) {
          if (xi < 0) {
            xi = 0;
          }
          if (yi < 0) {
            yi = 0;
          }
          if (xi >= data.length - 1) {
            xi = data.length - 1;
          }
          if (yi >= data[0].length - 1) {
            yi = data[0].length - 1;
          }
        }
        if (xi < 0 || yi < 0 || xi >= data.length - 1 || yi >= data[0].length - 1) {
          return false;
        }
        return true;
      };
      Heightfield.prototype.getHeightAt = function (x, y, edgeClamp) {
        var idx = [];
        this.getIndexOfPosition(x, y, idx, edgeClamp);
        var minmax = [];
        this.getRectMinMax(idx[0], idx[1] + 1, idx[0], idx[1] + 1, minmax);
        return (minmax[0] + minmax[1]) / 2;
      };
      Heightfield.prototype.getCacheConvexTrianglePillarKey = function (xi, yi, getUpperTriangle) {
        return xi + '_' + yi + '_' + (getUpperTriangle ? 1 : 0);
      };
      Heightfield.prototype.getCachedConvexTrianglePillar = function (xi, yi, getUpperTriangle) {
        return this._cachedPillars[this.getCacheConvexTrianglePillarKey(xi, yi, getUpperTriangle)];
      };
      Heightfield.prototype.setCachedConvexTrianglePillar = function (xi, yi, getUpperTriangle, convex, offset) {
        this._cachedPillars[this.getCacheConvexTrianglePillarKey(xi, yi, getUpperTriangle)] = {
          convex: convex,
          offset: offset
        };
      };
      Heightfield.prototype.clearCachedConvexTrianglePillar = function (xi, yi, getUpperTriangle) {
        delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(xi, yi, getUpperTriangle)];
      };
      Heightfield.prototype.getConvexTrianglePillar = function (xi, yi, getUpperTriangle) {
        var result = this.pillarConvex;
        var offsetResult = this.pillarOffset;
        if (this.cacheEnabled) {
          var data = this.getCachedConvexTrianglePillar(xi, yi, getUpperTriangle);
          if (data) {
            this.pillarConvex = data.convex;
            this.pillarOffset = data.offset;
            return;
          }
          result = new ConvexPolyhedron();
          offsetResult = new Vec3();
          this.pillarConvex = result;
          this.pillarOffset = offsetResult;
        }
        var data = this.data;
        var elementSize = this.elementSize;
        var faces = result.faces;
        result.vertices.length = 6;
        for (var i = 0; i < 6; i++) {
          if (!result.vertices[i]) {
            result.vertices[i] = new Vec3();
          }
        }
        faces.length = 5;
        for (var i = 0; i < 5; i++) {
          if (!faces[i]) {
            faces[i] = [];
          }
        }
        var verts = result.vertices;
        var h = (Math.min(data[xi][yi], data[xi + 1][yi], data[xi][yi + 1], data[xi + 1][yi + 1]) - this.minValue) / 2 + this.minValue;
        if (!getUpperTriangle) {
          offsetResult.set((xi + 0.25) * elementSize,
          (yi + 0.25) * elementSize, h
          );
          verts[0].set(-0.25 * elementSize, -0.25 * elementSize, data[xi][yi] - h);
          verts[1].set(0.75 * elementSize, -0.25 * elementSize, data[xi + 1][yi] - h);
          verts[2].set(-0.25 * elementSize, 0.75 * elementSize, data[xi][yi + 1] - h);
          verts[3].set(-0.25 * elementSize, -0.25 * elementSize, -h - 1);
          verts[4].set(0.75 * elementSize, -0.25 * elementSize, -h - 1);
          verts[5].set(-0.25 * elementSize, 0.75 * elementSize, -h - 1);
          faces[0][0] = 0;
          faces[0][1] = 1;
          faces[0][2] = 2;
          faces[1][0] = 5;
          faces[1][1] = 4;
          faces[1][2] = 3;
          faces[2][0] = 0;
          faces[2][1] = 2;
          faces[2][2] = 5;
          faces[2][3] = 3;
          faces[3][0] = 1;
          faces[3][1] = 0;
          faces[3][2] = 3;
          faces[3][3] = 4;
          faces[4][0] = 4;
          faces[4][1] = 5;
          faces[4][2] = 2;
          faces[4][3] = 1;
        } else {
          offsetResult.set((xi + 0.75) * elementSize,
          (yi + 0.75) * elementSize, h
          );
          verts[0].set(0.25 * elementSize, 0.25 * elementSize, data[xi + 1][yi + 1] - h);
          verts[1].set(-0.75 * elementSize, 0.25 * elementSize, data[xi][yi + 1] - h);
          verts[2].set(0.25 * elementSize, -0.75 * elementSize, data[xi + 1][yi] - h);
          verts[3].set(0.25 * elementSize, 0.25 * elementSize, -h - 1);
          verts[4].set(-0.75 * elementSize, 0.25 * elementSize, -h - 1);
          verts[5].set(0.25 * elementSize, -0.75 * elementSize, -h - 1);
          faces[0][0] = 0;
          faces[0][1] = 1;
          faces[0][2] = 2;
          faces[1][0] = 5;
          faces[1][1] = 4;
          faces[1][2] = 3;
          faces[2][0] = 2;
          faces[2][1] = 5;
          faces[2][2] = 3;
          faces[2][3] = 0;
          faces[3][0] = 3;
          faces[3][1] = 4;
          faces[3][2] = 1;
          faces[3][3] = 0;
          faces[4][0] = 1;
          faces[4][1] = 4;
          faces[4][2] = 5;
          faces[4][3] = 2;
        }
        result.computeNormals();
        result.computeEdges();
        result.updateBoundingSphereRadius();
        this.setCachedConvexTrianglePillar(xi, yi, getUpperTriangle, result, offsetResult);
      };
      Heightfield.prototype.calculateLocalInertia = function (mass, target) {
        target = target || new Vec3();
        target.set(0, 0, 0);
        return target;
      };
      Heightfield.prototype.volume = function () {
        return Number.MAX_VALUE;
      };
      Heightfield.prototype.calculateWorldAABB = function (pos, quat, min, max) {
        min.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        max.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
      };
      Heightfield.prototype.updateBoundingSphereRadius = function () {
        var data = this.data,
            s = this.elementSize;
        this.boundingSphereRadius = new Vec3(data.length * s, data[0].length * s, Math.max(Math.abs(this.maxValue), Math.abs(this.minValue))).norm();
      };
    }, {
      "../math/Vec3": 30,
      "../utils/Utils": 53,
      "./ConvexPolyhedron": 38,
      "./Shape": 43
    }],
    41: [function (_dereq_, module, exports) {
      module.exports = Particle;
      var Shape = _dereq_('./Shape');
      var Vec3 = _dereq_('../math/Vec3');
      function Particle() {
        Shape.call(this);
        this.type = Shape.types.PARTICLE;
      }
      Particle.prototype = new Shape();
      Particle.prototype.constructor = Particle;
      Particle.prototype.calculateLocalInertia = function (mass, target) {
        target = target || new Vec3();
        target.set(0, 0, 0);
        return target;
      };
      Particle.prototype.volume = function () {
        return 0;
      };
      Particle.prototype.updateBoundingSphereRadius = function () {
        this.boundingSphereRadius = 0;
      };
      Particle.prototype.calculateWorldAABB = function (pos, quat, min, max) {
        min.copy(pos);
        max.copy(pos);
      };
    }, {
      "../math/Vec3": 30,
      "./Shape": 43
    }],
    42: [function (_dereq_, module, exports) {
      module.exports = Plane;
      var Shape = _dereq_('./Shape');
      var Vec3 = _dereq_('../math/Vec3');
      function Plane() {
        Shape.call(this);
        this.type = Shape.types.PLANE;
        this.worldNormal = new Vec3();
        this.worldNormalNeedsUpdate = true;
        this.boundingSphereRadius = Number.MAX_VALUE;
      }
      Plane.prototype = new Shape();
      Plane.prototype.constructor = Plane;
      Plane.prototype.computeWorldNormal = function (quat) {
        var n = this.worldNormal;
        n.set(0, 0, 1);
        quat.vmult(n, n);
        this.worldNormalNeedsUpdate = false;
      };
      Plane.prototype.calculateLocalInertia = function (mass, target) {
        target = target || new Vec3();
        return target;
      };
      Plane.prototype.volume = function () {
        return Number.MAX_VALUE;
      };
      var tempNormal = new Vec3();
      Plane.prototype.calculateWorldAABB = function (pos, quat, min, max) {
        tempNormal.set(0, 0, 1);
        quat.vmult(tempNormal, tempNormal);
        var maxVal = Number.MAX_VALUE;
        min.set(-maxVal, -maxVal, -maxVal);
        max.set(maxVal, maxVal, maxVal);
        if (tempNormal.x === 1) {
          max.x = pos.x;
        }
        if (tempNormal.y === 1) {
          max.y = pos.y;
        }
        if (tempNormal.z === 1) {
          max.z = pos.z;
        }
        if (tempNormal.x === -1) {
          min.x = pos.x;
        }
        if (tempNormal.y === -1) {
          min.y = pos.y;
        }
        if (tempNormal.z === -1) {
          min.z = pos.z;
        }
      };
      Plane.prototype.updateBoundingSphereRadius = function () {
        this.boundingSphereRadius = Number.MAX_VALUE;
      };
    }, {
      "../math/Vec3": 30,
      "./Shape": 43
    }],
    43: [function (_dereq_, module, exports) {
      module.exports = Shape;
      var Shape = _dereq_('./Shape');
      var Vec3 = _dereq_('../math/Vec3');
      var Quaternion = _dereq_('../math/Quaternion');
      var Material = _dereq_('../material/Material');
      function Shape() {
        this.id = Shape.idCounter++;
        this.type = 0;
        this.boundingSphereRadius = 0;
        this.collisionResponse = true;
        this.material = null;
      }
      Shape.prototype.constructor = Shape;
      Shape.prototype.updateBoundingSphereRadius = function () {
        throw "computeBoundingSphereRadius() not implemented for shape type " + this.type;
      };
      Shape.prototype.volume = function () {
        throw "volume() not implemented for shape type " + this.type;
      };
      Shape.prototype.calculateLocalInertia = function (mass, target) {
        throw "calculateLocalInertia() not implemented for shape type " + this.type;
      };
      Shape.idCounter = 0;
      Shape.types = {
        SPHERE: 1,
        PLANE: 2,
        BOX: 4,
        COMPOUND: 8,
        CONVEXPOLYHEDRON: 16,
        HEIGHTFIELD: 32,
        PARTICLE: 64,
        CYLINDER: 128,
        TRIMESH: 256
      };
    }, {
      "../material/Material": 25,
      "../math/Quaternion": 28,
      "../math/Vec3": 30,
      "./Shape": 43
    }],
    44: [function (_dereq_, module, exports) {
      module.exports = Sphere;
      var Shape = _dereq_('./Shape');
      var Vec3 = _dereq_('../math/Vec3');
      function Sphere(radius) {
        Shape.call(this);
        this.radius = radius !== undefined ? Number(radius) : 1.0;
        this.type = Shape.types.SPHERE;
        if (this.radius < 0) {
          throw new Error('The sphere radius cannot be negative.');
        }
        this.updateBoundingSphereRadius();
      }
      Sphere.prototype = new Shape();
      Sphere.prototype.constructor = Sphere;
      Sphere.prototype.calculateLocalInertia = function (mass, target) {
        target = target || new Vec3();
        var I = 2.0 * mass * this.radius * this.radius / 5.0;
        target.x = I;
        target.y = I;
        target.z = I;
        return target;
      };
      Sphere.prototype.volume = function () {
        return 4.0 * Math.PI * this.radius / 3.0;
      };
      Sphere.prototype.updateBoundingSphereRadius = function () {
        this.boundingSphereRadius = this.radius;
      };
      Sphere.prototype.calculateWorldAABB = function (pos, quat, min, max) {
        var r = this.radius;
        var axes = ['x', 'y', 'z'];
        for (var i = 0; i < axes.length; i++) {
          var ax = axes[i];
          min[ax] = pos[ax] - r;
          max[ax] = pos[ax] + r;
        }
      };
    }, {
      "../math/Vec3": 30,
      "./Shape": 43
    }],
    45: [function (_dereq_, module, exports) {
      module.exports = Trimesh;
      var Shape = _dereq_('./Shape');
      var Vec3 = _dereq_('../math/Vec3');
      var Quaternion = _dereq_('../math/Quaternion');
      var Transform = _dereq_('../math/Transform');
      var AABB = _dereq_('../collision/AABB');
      var Octree = _dereq_('../utils/Octree');
      function Trimesh(vertices, indices) {
        Shape.call(this);
        this.type = Shape.types.TRIMESH;
        this.vertices = new Float32Array(vertices);
        this.indices = new Int16Array(indices);
        this.normals = new Float32Array(indices.length);
        this.aabb = new AABB();
        this.edges = null;
        this.scale = new Vec3(1, 1, 1);
        this.tree = new Octree();
        this.updateEdges();
        this.updateNormals();
        this.updateAABB();
        this.updateBoundingSphereRadius();
        this.updateTree();
      }
      Trimesh.prototype = new Shape();
      Trimesh.prototype.constructor = Trimesh;
      var computeNormals_n = new Vec3();
      Trimesh.prototype.updateTree = function () {
        var tree = this.tree;
        tree.reset();
        tree.aabb.copy(this.aabb);
        var scale = this.scale;
        tree.aabb.lowerBound.x *= 1 / scale.x;
        tree.aabb.lowerBound.y *= 1 / scale.y;
        tree.aabb.lowerBound.z *= 1 / scale.z;
        tree.aabb.upperBound.x *= 1 / scale.x;
        tree.aabb.upperBound.y *= 1 / scale.y;
        tree.aabb.upperBound.z *= 1 / scale.z;
        var triangleAABB = new AABB();
        var a = new Vec3();
        var b = new Vec3();
        var c = new Vec3();
        var points = [a, b, c];
        for (var i = 0; i < this.indices.length / 3; i++) {
          var i3 = i * 3;
          this._getUnscaledVertex(this.indices[i3], a);
          this._getUnscaledVertex(this.indices[i3 + 1], b);
          this._getUnscaledVertex(this.indices[i3 + 2], c);
          triangleAABB.setFromPoints(points);
          tree.insert(triangleAABB, i);
        }
        tree.removeEmptyNodes();
      };
      var unscaledAABB = new AABB();
      Trimesh.prototype.getTrianglesInAABB = function (aabb, result) {
        unscaledAABB.copy(aabb);
        var scale = this.scale;
        var isx = scale.x;
        var isy = scale.y;
        var isz = scale.z;
        var l = unscaledAABB.lowerBound;
        var u = unscaledAABB.upperBound;
        l.x /= isx;
        l.y /= isy;
        l.z /= isz;
        u.x /= isx;
        u.y /= isy;
        u.z /= isz;
        return this.tree.aabbQuery(unscaledAABB, result);
      };
      Trimesh.prototype.setScale = function (scale) {
        var wasUniform = this.scale.x === this.scale.y === this.scale.z;
        var isUniform = scale.x === scale.y === scale.z;
        if (!(wasUniform && isUniform)) {
          this.updateNormals();
        }
        this.scale.copy(scale);
        this.updateAABB();
        this.updateBoundingSphereRadius();
      };
      Trimesh.prototype.updateNormals = function () {
        var n = computeNormals_n;
        var normals = this.normals;
        for (var i = 0; i < this.indices.length / 3; i++) {
          var i3 = i * 3;
          var a = this.indices[i3],
              b = this.indices[i3 + 1],
              c = this.indices[i3 + 2];
          this.getVertex(a, va);
          this.getVertex(b, vb);
          this.getVertex(c, vc);
          Trimesh.computeNormal(vb, va, vc, n);
          normals[i3] = n.x;
          normals[i3 + 1] = n.y;
          normals[i3 + 2] = n.z;
        }
      };
      Trimesh.prototype.updateEdges = function () {
        var edges = {};
        var add = function (indexA, indexB) {
          var key = a < b ? a + '_' + b : b + '_' + a;
          edges[key] = true;
        };
        for (var i = 0; i < this.indices.length / 3; i++) {
          var i3 = i * 3;
          var a = this.indices[i3],
              b = this.indices[i3 + 1],
              c = this.indices[i3 + 2];
          add();
          add();
          add();
        }
        var keys = Object.keys(edges);
        this.edges = new Int16Array(keys.length * 2);
        for (var i = 0; i < keys.length; i++) {
          var indices = keys[i].split('_');
          this.edges[2 * i] = parseInt(indices[0], 10);
          this.edges[2 * i + 1] = parseInt(indices[1], 10);
        }
      };
      Trimesh.prototype.getEdgeVertex = function (edgeIndex, firstOrSecond, vertexStore) {
        var vertexIndex = this.edges[edgeIndex * 2 + (firstOrSecond ? 1 : 0)];
        this.getVertex(vertexIndex, vertexStore);
      };
      var getEdgeVector_va = new Vec3();
      var getEdgeVector_vb = new Vec3();
      Trimesh.prototype.getEdgeVector = function (edgeIndex, vectorStore) {
        var va = getEdgeVector_va;
        var vb = getEdgeVector_vb;
        this.getEdgeVertex(edgeIndex, 0, va);
        this.getEdgeVertex(edgeIndex, 1, vb);
        vb.vsub(va, vectorStore);
      };
      var cb = new Vec3();
      var ab = new Vec3();
      Trimesh.computeNormal = function (va, vb, vc, target) {
        vb.vsub(va, ab);
        vc.vsub(vb, cb);
        cb.cross(ab, target);
        if (!target.isZero()) {
          target.normalize();
        }
      };
      var va = new Vec3();
      var vb = new Vec3();
      var vc = new Vec3();
      Trimesh.prototype.getVertex = function (i, out) {
        var scale = this.scale;
        this._getUnscaledVertex(i, out);
        out.x *= scale.x;
        out.y *= scale.y;
        out.z *= scale.z;
        return out;
      };
      Trimesh.prototype._getUnscaledVertex = function (i, out) {
        var i3 = i * 3;
        var vertices = this.vertices;
        return out.set(vertices[i3], vertices[i3 + 1], vertices[i3 + 2]);
      };
      Trimesh.prototype.getWorldVertex = function (i, pos, quat, out) {
        this.getVertex(i, out);
        Transform.pointToWorldFrame(pos, quat, out, out);
        return out;
      };
      Trimesh.prototype.getTriangleVertices = function (i, a, b, c) {
        var i3 = i * 3;
        this.getVertex(this.indices[i3], a);
        this.getVertex(this.indices[i3 + 1], b);
        this.getVertex(this.indices[i3 + 2], c);
      };
      Trimesh.prototype.getNormal = function (i, target) {
        var i3 = i * 3;
        return target.set(this.normals[i3], this.normals[i3 + 1], this.normals[i3 + 2]);
      };
      var cli_aabb = new AABB();
      Trimesh.prototype.calculateLocalInertia = function (mass, target) {
        this.computeLocalAABB(cli_aabb);
        var x = cli_aabb.upperBound.x - cli_aabb.lowerBound.x,
            y = cli_aabb.upperBound.y - cli_aabb.lowerBound.y,
            z = cli_aabb.upperBound.z - cli_aabb.lowerBound.z;
        return target.set(1.0 / 12.0 * mass * (2 * y * 2 * y + 2 * z * 2 * z), 1.0 / 12.0 * mass * (2 * x * 2 * x + 2 * z * 2 * z), 1.0 / 12.0 * mass * (2 * y * 2 * y + 2 * x * 2 * x));
      };
      var computeLocalAABB_worldVert = new Vec3();
      Trimesh.prototype.computeLocalAABB = function (aabb) {
        var l = aabb.lowerBound,
            u = aabb.upperBound,
            n = this.vertices.length,
            vertices = this.vertices,
            v = computeLocalAABB_worldVert;
        this.getVertex(0, v);
        l.copy(v);
        u.copy(v);
        for (var i = 0; i !== n; i++) {
          this.getVertex(i, v);
          if (v.x < l.x) {
            l.x = v.x;
          } else if (v.x > u.x) {
            u.x = v.x;
          }
          if (v.y < l.y) {
            l.y = v.y;
          } else if (v.y > u.y) {
            u.y = v.y;
          }
          if (v.z < l.z) {
            l.z = v.z;
          } else if (v.z > u.z) {
            u.z = v.z;
          }
        }
      };
      Trimesh.prototype.updateAABB = function () {
        this.computeLocalAABB(this.aabb);
      };
      Trimesh.prototype.updateBoundingSphereRadius = function () {
        var max2 = 0;
        var vertices = this.vertices;
        var v = new Vec3();
        for (var i = 0, N = vertices.length / 3; i !== N; i++) {
          this.getVertex(i, v);
          var norm2 = v.norm2();
          if (norm2 > max2) {
            max2 = norm2;
          }
        }
        this.boundingSphereRadius = Math.sqrt(max2);
      };
      var tempWorldVertex = new Vec3();
      var calculateWorldAABB_frame = new Transform();
      var calculateWorldAABB_aabb = new AABB();
      Trimesh.prototype.calculateWorldAABB = function (pos, quat, min, max) {
        var frame = calculateWorldAABB_frame;
        var result = calculateWorldAABB_aabb;
        frame.position = pos;
        frame.quaternion = quat;
        this.aabb.toWorldFrame(frame, result);
        min.copy(result.lowerBound);
        max.copy(result.upperBound);
      };
      Trimesh.prototype.volume = function () {
        return 4.0 * Math.PI * this.boundingSphereRadius / 3.0;
      };
      Trimesh.createTorus = function (radius, tube, radialSegments, tubularSegments, arc) {
        radius = radius || 1;
        tube = tube || 0.5;
        radialSegments = radialSegments || 8;
        tubularSegments = tubularSegments || 6;
        arc = arc || Math.PI * 2;
        var vertices = [];
        var indices = [];
        for (var j = 0; j <= radialSegments; j++) {
          for (var i = 0; i <= tubularSegments; i++) {
            var u = i / tubularSegments * arc;
            var v = j / radialSegments * Math.PI * 2;
            var x = (radius + tube * Math.cos(v)) * Math.cos(u);
            var y = (radius + tube * Math.cos(v)) * Math.sin(u);
            var z = tube * Math.sin(v);
            vertices.push(x, y, z);
          }
        }
        for (var j = 1; j <= radialSegments; j++) {
          for (var i = 1; i <= tubularSegments; i++) {
            var a = (tubularSegments + 1) * j + i - 1;
            var b = (tubularSegments + 1) * (j - 1) + i - 1;
            var c = (tubularSegments + 1) * (j - 1) + i;
            var d = (tubularSegments + 1) * j + i;
            indices.push(a, b, d);
            indices.push(b, c, d);
          }
        }
        return new Trimesh(vertices, indices);
      };
    }, {
      "../collision/AABB": 3,
      "../math/Quaternion": 28,
      "../math/Transform": 29,
      "../math/Vec3": 30,
      "../utils/Octree": 50,
      "./Shape": 43
    }],
    46: [function (_dereq_, module, exports) {
      module.exports = GSSolver;
      var Vec3 = _dereq_('../math/Vec3');
      var Quaternion = _dereq_('../math/Quaternion');
      var Solver = _dereq_('./Solver');
      function GSSolver() {
        Solver.call(this);
        this.iterations = 10;
        this.tolerance = 1e-7;
      }
      GSSolver.prototype = new Solver();
      var GSSolver_solve_lambda = [];
      var GSSolver_solve_invCs = [];
      var GSSolver_solve_Bs = [];
      GSSolver.prototype.solve = function (dt, world) {
        var iter = 0,
            maxIter = this.iterations,
            tolSquared = this.tolerance * this.tolerance,
            equations = this.equations,
            Neq = equations.length,
            bodies = world.bodies,
            Nbodies = bodies.length,
            h = dt,
            B,
            invC,
            deltalambda,
            deltalambdaTot,
            GWlambda,
            lambdaj;
        if (Neq !== 0) {
          for (var i = 0; i !== Nbodies; i++) {
            bodies[i].updateSolveMassProperties();
          }
        }
        var invCs = GSSolver_solve_invCs,
            Bs = GSSolver_solve_Bs,
            lambda = GSSolver_solve_lambda;
        invCs.length = Neq;
        Bs.length = Neq;
        lambda.length = Neq;
        for (var i = 0; i !== Neq; i++) {
          var c = equations[i];
          lambda[i] = 0.0;
          Bs[i] = c.computeB(h);
          invCs[i] = 1.0 / c.computeC();
        }
        if (Neq !== 0) {
          for (var i = 0; i !== Nbodies; i++) {
            var b = bodies[i],
                vlambda = b.vlambda,
                wlambda = b.wlambda;
            vlambda.set(0, 0, 0);
            if (wlambda) {
              wlambda.set(0, 0, 0);
            }
          }
          for (iter = 0; iter !== maxIter; iter++) {
            deltalambdaTot = 0.0;
            for (var j = 0; j !== Neq; j++) {
              var c = equations[j];
              B = Bs[j];
              invC = invCs[j];
              lambdaj = lambda[j];
              GWlambda = c.computeGWlambda();
              deltalambda = invC * (B - GWlambda - c.eps * lambdaj);
              if (lambdaj + deltalambda < c.minForce) {
                deltalambda = c.minForce - lambdaj;
              } else if (lambdaj + deltalambda > c.maxForce) {
                deltalambda = c.maxForce - lambdaj;
              }
              lambda[j] += deltalambda;
              deltalambdaTot += deltalambda > 0.0 ? deltalambda : -deltalambda;
              c.addToWlambda(deltalambda);
            }
            if (deltalambdaTot * deltalambdaTot < tolSquared) {
              break;
            }
          }
          for (var i = 0; i !== Nbodies; i++) {
            var b = bodies[i],
                v = b.velocity,
                w = b.angularVelocity;
            v.vadd(b.vlambda, v);
            if (w) {
              w.vadd(b.wlambda, w);
            }
          }
        }
        return iter;
      };
    }, {
      "../math/Quaternion": 28,
      "../math/Vec3": 30,
      "./Solver": 47
    }],
    47: [function (_dereq_, module, exports) {
      module.exports = Solver;
      function Solver() {
        this.equations = [];
      }
      Solver.prototype.solve = function (dt, world) {
        return 0;
      };
      Solver.prototype.addEquation = function (eq) {
        if (eq.enabled) {
          this.equations.push(eq);
        }
      };
      Solver.prototype.removeEquation = function (eq) {
        var eqs = this.equations;
        var i = eqs.indexOf(eq);
        if (i !== -1) {
          eqs.splice(i, 1);
        }
      };
      Solver.prototype.removeAllEquations = function () {
        this.equations.length = 0;
      };
    }, {}],
    48: [function (_dereq_, module, exports) {
      module.exports = SplitSolver;
      var Vec3 = _dereq_('../math/Vec3');
      var Quaternion = _dereq_('../math/Quaternion');
      var Solver = _dereq_('./Solver');
      var Body = _dereq_('../objects/Body');
      function SplitSolver(subsolver) {
        Solver.call(this);
        this.iterations = 10;
        this.tolerance = 1e-7;
        this.subsolver = subsolver;
        this.nodes = [];
        this.nodePool = [];
        while (this.nodePool.length < 128) {
          this.nodePool.push(this.createNode());
        }
      }
      SplitSolver.prototype = new Solver();
      var SplitSolver_solve_nodes = [];
      var SplitSolver_solve_eqs = [];
      var SplitSolver_solve_dummyWorld = {
        bodies: []
      };
      var STATIC = Body.STATIC;
      function getUnvisitedNode(nodes) {
        var Nnodes = nodes.length;
        for (var i = 0; i !== Nnodes; i++) {
          var node = nodes[i];
          if (!node.visited && !(node.body.type & STATIC)) {
            return node;
          }
        }
        return false;
      }
      var queue = [];
      function bfs(root, visitFunc, bds, eqs) {
        queue.push(root);
        root.visited = true;
        visitFunc(root, bds, eqs);
        while (queue.length) {
          var node = queue.pop();
          var child;
          while (child = getUnvisitedNode(node.children)) {
            child.visited = true;
            visitFunc(child, bds, eqs);
            queue.push(child);
          }
        }
      }
      function visitFunc(node, bds, eqs) {
        bds.push(node.body);
        var Neqs = node.eqs.length;
        for (var i = 0; i !== Neqs; i++) {
          var eq = node.eqs[i];
          if (eqs.indexOf(eq) === -1) {
            eqs.push(eq);
          }
        }
      }
      SplitSolver.prototype.createNode = function () {
        return {
          body: null,
          children: [],
          eqs: [],
          visited: false
        };
      };
      SplitSolver.prototype.solve = function (dt, world) {
        var nodes = SplitSolver_solve_nodes,
            nodePool = this.nodePool,
            bodies = world.bodies,
            equations = this.equations,
            Neq = equations.length,
            Nbodies = bodies.length,
            subsolver = this.subsolver;
        while (nodePool.length < Nbodies) {
          nodePool.push(this.createNode());
        }
        nodes.length = Nbodies;
        for (var i = 0; i < Nbodies; i++) {
          nodes[i] = nodePool[i];
        }
        for (var i = 0; i !== Nbodies; i++) {
          var node = nodes[i];
          node.body = bodies[i];
          node.children.length = 0;
          node.eqs.length = 0;
          node.visited = false;
        }
        for (var k = 0; k !== Neq; k++) {
          var eq = equations[k],
              i = bodies.indexOf(eq.bi),
              j = bodies.indexOf(eq.bj),
              ni = nodes[i],
              nj = nodes[j];
          ni.children.push(nj);
          ni.eqs.push(eq);
          nj.children.push(ni);
          nj.eqs.push(eq);
        }
        var child,
            n = 0,
            eqs = SplitSolver_solve_eqs;
        subsolver.tolerance = this.tolerance;
        subsolver.iterations = this.iterations;
        var dummyWorld = SplitSolver_solve_dummyWorld;
        while (child = getUnvisitedNode(nodes)) {
          eqs.length = 0;
          dummyWorld.bodies.length = 0;
          bfs(child, visitFunc, dummyWorld.bodies, eqs);
          var Neqs = eqs.length;
          eqs = eqs.sort(sortById);
          for (var i = 0; i !== Neqs; i++) {
            subsolver.addEquation(eqs[i]);
          }
          var iter = subsolver.solve(dt, dummyWorld);
          subsolver.removeAllEquations();
          n++;
        }
        return n;
      };
      function sortById(a, b) {
        return b.id - a.id;
      }
    }, {
      "../math/Quaternion": 28,
      "../math/Vec3": 30,
      "../objects/Body": 31,
      "./Solver": 47
    }],
    49: [function (_dereq_, module, exports) {
      var EventTarget = function () {};
      module.exports = EventTarget;
      EventTarget.prototype = {
        constructor: EventTarget,
        addEventListener: function (type, listener) {
          if (this._listeners === undefined) {
            this._listeners = {};
          }
          var listeners = this._listeners;
          if (listeners[type] === undefined) {
            listeners[type] = [];
          }
          if (listeners[type].indexOf(listener) === -1) {
            listeners[type].push(listener);
          }
          return this;
        },
        hasEventListener: function (type, listener) {
          if (this._listeners === undefined) {
            return false;
          }
          var listeners = this._listeners;
          if (listeners[type] !== undefined && listeners[type].indexOf(listener) !== -1) {
            return true;
          }
          return false;
        },
        removeEventListener: function (type, listener) {
          if (this._listeners === undefined) {
            return this;
          }
          var listeners = this._listeners;
          if (listeners[type] === undefined) {
            return this;
          }
          var index = listeners[type].indexOf(listener);
          if (index !== -1) {
            listeners[type].splice(index, 1);
          }
          return this;
        },
        dispatchEvent: function (event) {
          if (this._listeners === undefined) {
            return this;
          }
          var listeners = this._listeners;
          var listenerArray = listeners[event.type];
          if (listenerArray !== undefined) {
            event.target = this;
            for (var i = 0, l = listenerArray.length; i < l; i++) {
              listenerArray[i].call(this, event);
            }
          }
          return this;
        }
      };
    }, {}],
    50: [function (_dereq_, module, exports) {
      var AABB = _dereq_('../collision/AABB');
      var Vec3 = _dereq_('../math/Vec3');
      module.exports = Octree;
      function OctreeNode(options) {
        options = options || {};
        this.root = options.root || null;
        this.aabb = options.aabb ? options.aabb.clone() : new AABB();
        this.data = [];
        this.children = [];
      }
      function Octree(aabb, options) {
        options = options || {};
        options.root = null;
        options.aabb = aabb;
        OctreeNode.call(this, options);
        this.maxDepth = typeof options.maxDepth !== 'undefined' ? options.maxDepth : 8;
      }
      Octree.prototype = new OctreeNode();
      OctreeNode.prototype.reset = function (aabb, options) {
        this.children.length = this.data.length = 0;
      };
      OctreeNode.prototype.insert = function (aabb, elementData, level) {
        var nodeData = this.data;
        level = level || 0;
        if (!this.aabb.contains(aabb)) {
          return false;
        }
        var children = this.children;
        if (level < (this.maxDepth || this.root.maxDepth)) {
          var subdivided = false;
          if (!children.length) {
            this.subdivide();
            subdivided = true;
          }
          for (var i = 0; i !== 8; i++) {
            if (children[i].insert(aabb, elementData, level + 1)) {
              return true;
            }
          }
          if (subdivided) {
            children.length = 0;
          }
        }
        nodeData.push(elementData);
        return true;
      };
      var halfDiagonal = new Vec3();
      OctreeNode.prototype.subdivide = function () {
        var aabb = this.aabb;
        var l = aabb.lowerBound;
        var u = aabb.upperBound;
        var children = this.children;
        children.push(new OctreeNode({
          aabb: new AABB({
            lowerBound: new Vec3(0, 0, 0)
          })
        }), new OctreeNode({
          aabb: new AABB({
            lowerBound: new Vec3(1, 0, 0)
          })
        }), new OctreeNode({
          aabb: new AABB({
            lowerBound: new Vec3(1, 1, 0)
          })
        }), new OctreeNode({
          aabb: new AABB({
            lowerBound: new Vec3(1, 1, 1)
          })
        }), new OctreeNode({
          aabb: new AABB({
            lowerBound: new Vec3(0, 1, 1)
          })
        }), new OctreeNode({
          aabb: new AABB({
            lowerBound: new Vec3(0, 0, 1)
          })
        }), new OctreeNode({
          aabb: new AABB({
            lowerBound: new Vec3(1, 0, 1)
          })
        }), new OctreeNode({
          aabb: new AABB({
            lowerBound: new Vec3(0, 1, 0)
          })
        }));
        u.vsub(l, halfDiagonal);
        halfDiagonal.scale(0.5, halfDiagonal);
        var root = this.root || this;
        for (var i = 0; i !== 8; i++) {
          var child = children[i];
          child.root = root;
          var lowerBound = child.aabb.lowerBound;
          lowerBound.x *= halfDiagonal.x;
          lowerBound.y *= halfDiagonal.y;
          lowerBound.z *= halfDiagonal.z;
          lowerBound.vadd(l, lowerBound);
          lowerBound.vadd(halfDiagonal, child.aabb.upperBound);
        }
      };
      OctreeNode.prototype.aabbQuery = function (aabb, result) {
        var nodeData = this.data;
        var children = this.children;
        var queue = [this];
        while (queue.length) {
          var node = queue.pop();
          if (node.aabb.overlaps(aabb)) {
            Array.prototype.push.apply(result, node.data);
          }
          Array.prototype.push.apply(queue, node.children);
        }
        return result;
      };
      var tmpAABB = new AABB();
      OctreeNode.prototype.rayQuery = function (ray, treeTransform, result) {
        ray.getAABB(tmpAABB);
        tmpAABB.toLocalFrame(treeTransform, tmpAABB);
        this.aabbQuery(tmpAABB, result);
        return result;
      };
      OctreeNode.prototype.removeEmptyNodes = function () {
        var queue = [this];
        while (queue.length) {
          var node = queue.pop();
          for (var i = node.children.length - 1; i >= 0; i--) {
            if (!node.children[i].data.length) {
              node.children.splice(i, 1);
            }
          }
          Array.prototype.push.apply(queue, node.children);
        }
      };
    }, {
      "../collision/AABB": 3,
      "../math/Vec3": 30
    }],
    51: [function (_dereq_, module, exports) {
      module.exports = Pool;
      function Pool() {
        this.objects = [];
        this.type = Object;
      }
      Pool.prototype.release = function () {
        var Nargs = arguments.length;
        for (var i = 0; i !== Nargs; i++) {
          this.objects.push(arguments[i]);
        }
      };
      Pool.prototype.get = function () {
        if (this.objects.length === 0) {
          return this.constructObject();
        } else {
          return this.objects.pop();
        }
      };
      Pool.prototype.constructObject = function () {
        throw new Error("constructObject() not implemented in this Pool subclass yet!");
      };
    }, {}],
    52: [function (_dereq_, module, exports) {
      module.exports = TupleDictionary;
      function TupleDictionary() {
        this.data = {
          keys: []
        };
      }
      TupleDictionary.prototype.get = function (i, j) {
        if (i > j) {
          var temp = j;
          j = i;
          i = temp;
        }
        return this.data[i + '-' + j];
      };
      TupleDictionary.prototype.set = function (i, j, value) {
        if (i > j) {
          var temp = j;
          j = i;
          i = temp;
        }
        var key = i + '-' + j;
        if (!this.get(i, j)) {
          this.data.keys.push(key);
        }
        this.data[key] = value;
      };
      TupleDictionary.prototype.reset = function () {
        var data = this.data,
            keys = data.keys;
        while (keys.length > 0) {
          var key = keys.pop();
          delete data[key];
        }
      };
    }, {}],
    53: [function (_dereq_, module, exports) {
      function Utils() {}
      module.exports = Utils;
      Utils.defaults = function (options, defaults) {
        options = options || {};
        for (var key in defaults) {
          if (!(key in options)) {
            options[key] = defaults[key];
          }
        }
        return options;
      };
    }, {}],
    54: [function (_dereq_, module, exports) {
      module.exports = Vec3Pool;
      var Vec3 = _dereq_('../math/Vec3');
      var Pool = _dereq_('./Pool');
      function Vec3Pool() {
        Pool.call(this);
        this.type = Vec3;
      }
      Vec3Pool.prototype = new Pool();
      Vec3Pool.prototype.constructObject = function () {
        return new Vec3();
      };
    }, {
      "../math/Vec3": 30,
      "./Pool": 51
    }],
    55: [function (_dereq_, module, exports) {
      module.exports = Narrowphase;
      var AABB = _dereq_('../collision/AABB');
      var Shape = _dereq_('../shapes/Shape');
      var Ray = _dereq_('../collision/Ray');
      var Vec3 = _dereq_('../math/Vec3');
      var Transform = _dereq_('../math/Transform');
      var ConvexPolyhedron = _dereq_('../shapes/ConvexPolyhedron');
      var Quaternion = _dereq_('../math/Quaternion');
      var Solver = _dereq_('../solver/Solver');
      var Vec3Pool = _dereq_('../utils/Vec3Pool');
      var ContactEquation = _dereq_('../equations/ContactEquation');
      var FrictionEquation = _dereq_('../equations/FrictionEquation');
      function Narrowphase(world) {
        this.contactPointPool = [];
        this.frictionEquationPool = [];
        this.result = [];
        this.frictionResult = [];
        this.v3pool = new Vec3Pool();
        this.world = world;
        this.currentContactMaterial = null;
        this.enableFrictionReduction = false;
      }
      Narrowphase.prototype.createContactEquation = function (bi, bj, si, sj, rsi, rsj) {
        var c;
        if (this.contactPointPool.length) {
          c = this.contactPointPool.pop();
          c.bi = bi;
          c.bj = bj;
        } else {
          c = new ContactEquation(bi, bj);
        }
        c.enabled = bi.collisionResponse && bj.collisionResponse && si.collisionResponse && sj.collisionResponse;
        var cm = this.currentContactMaterial;
        c.restitution = cm.restitution;
        c.setSpookParams(cm.contactEquationStiffness, cm.contactEquationRelaxation, this.world.dt);
        var matA = si.material || bi.material;
        var matB = sj.material || bj.material;
        if (matA && matB && matA.restitution >= 0 && matB.restitution >= 0) {
          c.restitution = matA.restitution * matB.restitution;
        }
        c.si = rsi || si;
        c.sj = rsj || sj;
        return c;
      };
      Narrowphase.prototype.createFrictionEquationsFromContact = function (contactEquation, outArray) {
        var bodyA = contactEquation.bi;
        var bodyB = contactEquation.bj;
        var shapeA = contactEquation.si;
        var shapeB = contactEquation.sj;
        var world = this.world;
        var cm = this.currentContactMaterial;
        var friction = cm.friction;
        var matA = shapeA.material || bodyA.material;
        var matB = shapeB.material || bodyB.material;
        if (matA && matB && matA.friction >= 0 && matB.friction >= 0) {
          friction = matA.friction * matB.friction;
        }
        if (friction > 0) {
          var mug = friction * world.gravity.length();
          var reducedMass = bodyA.invMass + bodyB.invMass;
          if (reducedMass > 0) {
            reducedMass = 1 / reducedMass;
          }
          var pool = this.frictionEquationPool;
          var c1 = pool.length ? pool.pop() : new FrictionEquation(bodyA, bodyB, mug * reducedMass);
          var c2 = pool.length ? pool.pop() : new FrictionEquation(bodyA, bodyB, mug * reducedMass);
          c1.bi = c2.bi = bodyA;
          c1.bj = c2.bj = bodyB;
          c1.minForce = c2.minForce = -mug * reducedMass;
          c1.maxForce = c2.maxForce = mug * reducedMass;
          c1.ri.copy(contactEquation.ri);
          c1.rj.copy(contactEquation.rj);
          c2.ri.copy(contactEquation.ri);
          c2.rj.copy(contactEquation.rj);
          contactEquation.ni.tangents(c1.t, c2.t);
          c1.setSpookParams(cm.frictionEquationStiffness, cm.frictionEquationRelaxation, world.dt);
          c2.setSpookParams(cm.frictionEquationStiffness, cm.frictionEquationRelaxation, world.dt);
          c1.enabled = c2.enabled = contactEquation.enabled;
          outArray.push(c1, c2);
          return true;
        }
        return false;
      };
      var averageNormal = new Vec3();
      var averageContactPointA = new Vec3();
      var averageContactPointB = new Vec3();
      Narrowphase.prototype.createFrictionFromAverage = function (numContacts) {
        var c = this.result[this.result.length - 1];
        if (!this.createFrictionEquationsFromContact(c, this.frictionResult) || numContacts === 1) {
          return;
        }
        var f1 = this.frictionResult[this.frictionResult.length - 2];
        var f2 = this.frictionResult[this.frictionResult.length - 1];
        averageNormal.setZero();
        averageContactPointA.setZero();
        averageContactPointB.setZero();
        var bodyA = c.bi;
        var bodyB = c.bj;
        for (var i = 0; i !== numContacts; i++) {
          c = this.result[this.result.length - 1 - i];
          if (c.bodyA !== bodyA) {
            averageNormal.vadd(c.ni, averageNormal);
            averageContactPointA.vadd(c.ri, averageContactPointA);
            averageContactPointB.vadd(c.rj, averageContactPointB);
          } else {
            averageNormal.vsub(c.ni, averageNormal);
            averageContactPointA.vadd(c.rj, averageContactPointA);
            averageContactPointB.vadd(c.ri, averageContactPointB);
          }
        }
        var invNumContacts = 1 / numContacts;
        averageContactPointA.scale(invNumContacts, f1.ri);
        averageContactPointB.scale(invNumContacts, f1.rj);
        f2.ri.copy(f1.ri);
        f2.rj.copy(f1.rj);
        averageNormal.normalize();
        averageNormal.tangents(f1.t, f2.t);
      };
      var tmpVec1 = new Vec3();
      var tmpVec2 = new Vec3();
      var tmpQuat1 = new Quaternion();
      var tmpQuat2 = new Quaternion();
      Narrowphase.prototype.getContacts = function (p1, p2, world, result, oldcontacts, frictionResult, frictionPool) {
        this.contactPointPool = oldcontacts;
        this.frictionEquationPool = frictionPool;
        this.result = result;
        this.frictionResult = frictionResult;
        var qi = tmpQuat1;
        var qj = tmpQuat2;
        var xi = tmpVec1;
        var xj = tmpVec2;
        for (var k = 0, N = p1.length; k !== N; k++) {
          var bi = p1[k],
              bj = p2[k];
          var bodyContactMaterial = null;
          if (bi.material && bj.material) {
            bodyContactMaterial = world.getContactMaterial(bi.material, bj.material) || null;
          }
          for (var i = 0; i < bi.shapes.length; i++) {
            bi.quaternion.mult(bi.shapeOrientations[i], qi);
            bi.quaternion.vmult(bi.shapeOffsets[i], xi);
            xi.vadd(bi.position, xi);
            var si = bi.shapes[i];
            for (var j = 0; j < bj.shapes.length; j++) {
              bj.quaternion.mult(bj.shapeOrientations[j], qj);
              bj.quaternion.vmult(bj.shapeOffsets[j], xj);
              xj.vadd(bj.position, xj);
              var sj = bj.shapes[j];
              if (xi.distanceTo(xj) > si.boundingSphereRadius + sj.boundingSphereRadius) {
                continue;
              }
              var shapeContactMaterial = null;
              if (si.material && sj.material) {
                shapeContactMaterial = world.getContactMaterial(si.material, sj.material) || null;
              }
              this.currentContactMaterial = shapeContactMaterial || bodyContactMaterial || world.defaultContactMaterial;
              var resolver = this[si.type | sj.type];
              if (resolver) {
                if (si.type < sj.type) {
                  resolver.call(this, si, sj, xi, xj, qi, qj, bi, bj, si, sj);
                } else {
                  resolver.call(this, sj, si, xj, xi, qj, qi, bj, bi, si, sj);
                }
              }
            }
          }
        }
      };
      Narrowphase.prototype[Shape.types.BOX | Shape.types.BOX] = Narrowphase.prototype.boxBox = function (si, sj, xi, xj, qi, qj, bi, bj) {
        si.convexPolyhedronRepresentation.material = si.material;
        sj.convexPolyhedronRepresentation.material = sj.material;
        si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
        sj.convexPolyhedronRepresentation.collisionResponse = sj.collisionResponse;
        this.convexConvex(si.convexPolyhedronRepresentation, sj.convexPolyhedronRepresentation, xi, xj, qi, qj, bi, bj, si, sj);
      };
      Narrowphase.prototype[Shape.types.BOX | Shape.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.boxConvex = function (si, sj, xi, xj, qi, qj, bi, bj) {
        si.convexPolyhedronRepresentation.material = si.material;
        si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
        this.convexConvex(si.convexPolyhedronRepresentation, sj, xi, xj, qi, qj, bi, bj, si, sj);
      };
      Narrowphase.prototype[Shape.types.BOX | Shape.types.PARTICLE] = Narrowphase.prototype.boxParticle = function (si, sj, xi, xj, qi, qj, bi, bj) {
        si.convexPolyhedronRepresentation.material = si.material;
        si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
        this.convexParticle(si.convexPolyhedronRepresentation, sj, xi, xj, qi, qj, bi, bj, si, sj);
      };
      Narrowphase.prototype[Shape.types.SPHERE] = Narrowphase.prototype.sphereSphere = function (si, sj, xi, xj, qi, qj, bi, bj) {
        var r = this.createContactEquation(bi, bj, si, sj);
        xj.vsub(xi, r.ni);
        r.ni.normalize();
        r.ri.copy(r.ni);
        r.rj.copy(r.ni);
        r.ri.mult(si.radius, r.ri);
        r.rj.mult(-sj.radius, r.rj);
        r.ri.vadd(xi, r.ri);
        r.ri.vsub(bi.position, r.ri);
        r.rj.vadd(xj, r.rj);
        r.rj.vsub(bj.position, r.rj);
        this.result.push(r);
        this.createFrictionEquationsFromContact(r, this.frictionResult);
      };
      var planeTrimesh_normal = new Vec3();
      var planeTrimesh_relpos = new Vec3();
      var planeTrimesh_projected = new Vec3();
      Narrowphase.prototype[Shape.types.PLANE | Shape.types.TRIMESH] = Narrowphase.prototype.planeTrimesh = function (planeShape, trimeshShape, planePos, trimeshPos, planeQuat, trimeshQuat, planeBody, trimeshBody) {
        var v = new Vec3();
        var normal = planeTrimesh_normal;
        normal.set(0, 0, 1);
        planeQuat.vmult(normal, normal);
        for (var i = 0; i < trimeshShape.vertices.length / 3; i++) {
          trimeshShape.getVertex(i, v);
          var v2 = new Vec3();
          v2.copy(v);
          Transform.pointToWorldFrame(trimeshPos, trimeshQuat, v2, v);
          var relpos = planeTrimesh_relpos;
          v.vsub(planePos, relpos);
          var dot = normal.dot(relpos);
          if (dot <= 0.0) {
            var r = this.createContactEquation(planeBody, trimeshBody, planeShape, trimeshShape);
            r.ni.copy(normal);
            var projected = planeTrimesh_projected;
            normal.scale(relpos.dot(normal), projected);
            v.vsub(projected, projected);
            r.ri.copy(projected);
            r.ri.vsub(planeBody.position, r.ri);
            r.rj.copy(v);
            r.rj.vsub(trimeshBody.position, r.rj);
            this.result.push(r);
            this.createFrictionEquationsFromContact(r, this.frictionResult);
          }
        }
      };
      var sphereTrimesh_normal = new Vec3();
      var sphereTrimesh_relpos = new Vec3();
      var sphereTrimesh_projected = new Vec3();
      var sphereTrimesh_v = new Vec3();
      var sphereTrimesh_v2 = new Vec3();
      var sphereTrimesh_edgeVertexA = new Vec3();
      var sphereTrimesh_edgeVertexB = new Vec3();
      var sphereTrimesh_edgeVector = new Vec3();
      var sphereTrimesh_edgeVectorUnit = new Vec3();
      var sphereTrimesh_localSpherePos = new Vec3();
      var sphereTrimesh_tmp = new Vec3();
      var sphereTrimesh_va = new Vec3();
      var sphereTrimesh_vb = new Vec3();
      var sphereTrimesh_vc = new Vec3();
      var sphereTrimesh_localSphereAABB = new AABB();
      var sphereTrimesh_triangles = [];
      Narrowphase.prototype[Shape.types.SPHERE | Shape.types.TRIMESH] = Narrowphase.prototype.sphereTrimesh = function (sphereShape, trimeshShape, spherePos, trimeshPos, sphereQuat, trimeshQuat, sphereBody, trimeshBody) {
        var edgeVertexA = sphereTrimesh_edgeVertexA;
        var edgeVertexB = sphereTrimesh_edgeVertexB;
        var edgeVector = sphereTrimesh_edgeVector;
        var edgeVectorUnit = sphereTrimesh_edgeVectorUnit;
        var localSpherePos = sphereTrimesh_localSpherePos;
        var tmp = sphereTrimesh_tmp;
        var localSphereAABB = sphereTrimesh_localSphereAABB;
        var v2 = sphereTrimesh_v2;
        var relpos = sphereTrimesh_relpos;
        var triangles = sphereTrimesh_triangles;
        Transform.pointToLocalFrame(trimeshPos, trimeshQuat, spherePos, localSpherePos);
        var sphereRadius = sphereShape.radius;
        localSphereAABB.lowerBound.set(localSpherePos.x - sphereRadius, localSpherePos.y - sphereRadius, localSpherePos.z - sphereRadius);
        localSphereAABB.upperBound.set(localSpherePos.x + sphereRadius, localSpherePos.y + sphereRadius, localSpherePos.z + sphereRadius);
        trimeshShape.getTrianglesInAABB(localSphereAABB, triangles);
        var v = sphereTrimesh_v;
        var radiusSquared = sphereShape.radius * sphereShape.radius;
        for (var i = 0; i < triangles.length; i++) {
          for (var j = 0; j < 3; j++) {
            trimeshShape.getVertex(trimeshShape.indices[triangles[i] * 3 + j], v);
            v.vsub(localSpherePos, relpos);
            if (relpos.norm2() <= radiusSquared) {
              v2.copy(v);
              Transform.pointToWorldFrame(trimeshPos, trimeshQuat, v2, v);
              v.vsub(spherePos, relpos);
              var r = this.createContactEquation(sphereBody, trimeshBody, sphereShape, trimeshShape);
              r.ni.copy(relpos);
              r.ni.normalize();
              r.ri.copy(r.ni);
              r.ri.scale(sphereShape.radius, r.ri);
              r.ri.vadd(spherePos, r.ri);
              r.ri.vsub(sphereBody.position, r.ri);
              r.rj.copy(v);
              r.rj.vsub(trimeshBody.position, r.rj);
              this.result.push(r);
              this.createFrictionEquationsFromContact(r, this.frictionResult);
            }
          }
        }
        for (var i = 0; i < triangles.length; i++) {
          for (var j = 0; j < 3; j++) {
            trimeshShape.getVertex(trimeshShape.indices[triangles[i] * 3 + j], edgeVertexA);
            trimeshShape.getVertex(trimeshShape.indices[triangles[i] * 3 + (j + 1) % 3], edgeVertexB);
            edgeVertexB.vsub(edgeVertexA, edgeVector);
            localSpherePos.vsub(edgeVertexB, tmp);
            var positionAlongEdgeB = tmp.dot(edgeVector);
            localSpherePos.vsub(edgeVertexA, tmp);
            var positionAlongEdgeA = tmp.dot(edgeVector);
            if (positionAlongEdgeA > 0 && positionAlongEdgeB < 0) {
              localSpherePos.vsub(edgeVertexA, tmp);
              edgeVectorUnit.copy(edgeVector);
              edgeVectorUnit.normalize();
              positionAlongEdgeA = tmp.dot(edgeVectorUnit);
              edgeVectorUnit.scale(positionAlongEdgeA, tmp);
              tmp.vadd(edgeVertexA, tmp);
              var dist = tmp.distanceTo(localSpherePos);
              if (dist < sphereShape.radius) {
                var r = this.createContactEquation(sphereBody, trimeshBody, sphereShape, trimeshShape);
                tmp.vsub(localSpherePos, r.ni);
                r.ni.normalize();
                r.ni.scale(sphereShape.radius, r.ri);
                Transform.pointToWorldFrame(trimeshPos, trimeshQuat, tmp, tmp);
                tmp.vsub(trimeshBody.position, r.rj);
                Transform.vectorToWorldFrame(trimeshQuat, r.ni, r.ni);
                Transform.vectorToWorldFrame(trimeshQuat, r.ri, r.ri);
                this.result.push(r);
                this.createFrictionEquationsFromContact(r, this.frictionResult);
              }
            }
          }
        }
        var va = sphereTrimesh_va;
        var vb = sphereTrimesh_vb;
        var vc = sphereTrimesh_vc;
        var normal = sphereTrimesh_normal;
        for (var i = 0, N = triangles.length; i !== N; i++) {
          trimeshShape.getTriangleVertices(triangles[i], va, vb, vc);
          trimeshShape.getNormal(triangles[i], normal);
          localSpherePos.vsub(va, tmp);
          var dist = tmp.dot(normal);
          normal.scale(dist, tmp);
          localSpherePos.vsub(tmp, tmp);
          dist = tmp.distanceTo(localSpherePos);
          if (Ray.pointInTriangle(tmp, va, vb, vc) && dist < sphereShape.radius) {
            var r = this.createContactEquation(sphereBody, trimeshBody, sphereShape, trimeshShape);
            tmp.vsub(localSpherePos, r.ni);
            r.ni.normalize();
            r.ni.scale(sphereShape.radius, r.ri);
            Transform.pointToWorldFrame(trimeshPos, trimeshQuat, tmp, tmp);
            tmp.vsub(trimeshBody.position, r.rj);
            Transform.vectorToWorldFrame(trimeshQuat, r.ni, r.ni);
            Transform.vectorToWorldFrame(trimeshQuat, r.ri, r.ri);
            this.result.push(r);
            this.createFrictionEquationsFromContact(r, this.frictionResult);
          }
        }
        triangles.length = 0;
      };
      var point_on_plane_to_sphere = new Vec3();
      var plane_to_sphere_ortho = new Vec3();
      Narrowphase.prototype[Shape.types.SPHERE | Shape.types.PLANE] = Narrowphase.prototype.spherePlane = function (si, sj, xi, xj, qi, qj, bi, bj) {
        var r = this.createContactEquation(bi, bj, si, sj);
        r.ni.set(0, 0, 1);
        qj.vmult(r.ni, r.ni);
        r.ni.negate(r.ni);
        r.ni.normalize();
        r.ni.mult(si.radius, r.ri);
        xi.vsub(xj, point_on_plane_to_sphere);
        r.ni.mult(r.ni.dot(point_on_plane_to_sphere), plane_to_sphere_ortho);
        point_on_plane_to_sphere.vsub(plane_to_sphere_ortho, r.rj);
        if (-point_on_plane_to_sphere.dot(r.ni) <= si.radius) {
          var ri = r.ri;
          var rj = r.rj;
          ri.vadd(xi, ri);
          ri.vsub(bi.position, ri);
          rj.vadd(xj, rj);
          rj.vsub(bj.position, rj);
          this.result.push(r);
          this.createFrictionEquationsFromContact(r, this.frictionResult);
        }
      };
      var pointInPolygon_edge = new Vec3();
      var pointInPolygon_edge_x_normal = new Vec3();
      var pointInPolygon_vtp = new Vec3();
      function pointInPolygon(verts, normal, p) {
        var positiveResult = null;
        var N = verts.length;
        for (var i = 0; i !== N; i++) {
          var v = verts[i];
          var edge = pointInPolygon_edge;
          verts[(i + 1) % N].vsub(v, edge);
          var edge_x_normal = pointInPolygon_edge_x_normal;
          edge.cross(normal, edge_x_normal);
          var vertex_to_p = pointInPolygon_vtp;
          p.vsub(v, vertex_to_p);
          var r = edge_x_normal.dot(vertex_to_p);
          if (positiveResult === null || r > 0 && positiveResult === true || r <= 0 && positiveResult === false) {
            if (positiveResult === null) {
              positiveResult = r > 0;
            }
            continue;
          } else {
            return false;
          }
        }
        return true;
      }
      var box_to_sphere = new Vec3();
      var sphereBox_ns = new Vec3();
      var sphereBox_ns1 = new Vec3();
      var sphereBox_ns2 = new Vec3();
      var sphereBox_sides = [new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3()];
      var sphereBox_sphere_to_corner = new Vec3();
      var sphereBox_side_ns = new Vec3();
      var sphereBox_side_ns1 = new Vec3();
      var sphereBox_side_ns2 = new Vec3();
      Narrowphase.prototype[Shape.types.SPHERE | Shape.types.BOX] = Narrowphase.prototype.sphereBox = function (si, sj, xi, xj, qi, qj, bi, bj) {
        var v3pool = this.v3pool;
        var sides = sphereBox_sides;
        xi.vsub(xj, box_to_sphere);
        sj.getSideNormals(sides, qj);
        var R = si.radius;
        var found = false;
        var side_ns = sphereBox_side_ns;
        var side_ns1 = sphereBox_side_ns1;
        var side_ns2 = sphereBox_side_ns2;
        var side_h = null;
        var side_penetrations = 0;
        var side_dot1 = 0;
        var side_dot2 = 0;
        var side_distance = null;
        for (var idx = 0, nsides = sides.length; idx !== nsides && found === false; idx++) {
          var ns = sphereBox_ns;
          ns.copy(sides[idx]);
          var h = ns.norm();
          ns.normalize();
          var dot = box_to_sphere.dot(ns);
          if (dot < h + R && dot > 0) {
            var ns1 = sphereBox_ns1;
            var ns2 = sphereBox_ns2;
            ns1.copy(sides[(idx + 1) % 3]);
            ns2.copy(sides[(idx + 2) % 3]);
            var h1 = ns1.norm();
            var h2 = ns2.norm();
            ns1.normalize();
            ns2.normalize();
            var dot1 = box_to_sphere.dot(ns1);
            var dot2 = box_to_sphere.dot(ns2);
            if (dot1 < h1 && dot1 > -h1 && dot2 < h2 && dot2 > -h2) {
              var dist = Math.abs(dot - h - R);
              if (side_distance === null || dist < side_distance) {
                side_distance = dist;
                side_dot1 = dot1;
                side_dot2 = dot2;
                side_h = h;
                side_ns.copy(ns);
                side_ns1.copy(ns1);
                side_ns2.copy(ns2);
                side_penetrations++;
              }
            }
          }
        }
        if (side_penetrations) {
          found = true;
          var r = this.createContactEquation(bi, bj, si, sj);
          side_ns.mult(-R, r.ri);
          r.ni.copy(side_ns);
          r.ni.negate(r.ni);
          side_ns.mult(side_h, side_ns);
          side_ns1.mult(side_dot1, side_ns1);
          side_ns.vadd(side_ns1, side_ns);
          side_ns2.mult(side_dot2, side_ns2);
          side_ns.vadd(side_ns2, r.rj);
          r.ri.vadd(xi, r.ri);
          r.ri.vsub(bi.position, r.ri);
          r.rj.vadd(xj, r.rj);
          r.rj.vsub(bj.position, r.rj);
          this.result.push(r);
          this.createFrictionEquationsFromContact(r, this.frictionResult);
        }
        var rj = v3pool.get();
        var sphere_to_corner = sphereBox_sphere_to_corner;
        for (var j = 0; j !== 2 && !found; j++) {
          for (var k = 0; k !== 2 && !found; k++) {
            for (var l = 0; l !== 2 && !found; l++) {
              rj.set(0, 0, 0);
              if (j) {
                rj.vadd(sides[0], rj);
              } else {
                rj.vsub(sides[0], rj);
              }
              if (k) {
                rj.vadd(sides[1], rj);
              } else {
                rj.vsub(sides[1], rj);
              }
              if (l) {
                rj.vadd(sides[2], rj);
              } else {
                rj.vsub(sides[2], rj);
              }
              xj.vadd(rj, sphere_to_corner);
              sphere_to_corner.vsub(xi, sphere_to_corner);
              if (sphere_to_corner.norm2() < R * R) {
                found = true;
                var r = this.createContactEquation(bi, bj, si, sj);
                r.ri.copy(sphere_to_corner);
                r.ri.normalize();
                r.ni.copy(r.ri);
                r.ri.mult(R, r.ri);
                r.rj.copy(rj);
                r.ri.vadd(xi, r.ri);
                r.ri.vsub(bi.position, r.ri);
                r.rj.vadd(xj, r.rj);
                r.rj.vsub(bj.position, r.rj);
                this.result.push(r);
                this.createFrictionEquationsFromContact(r, this.frictionResult);
              }
            }
          }
        }
        v3pool.release(rj);
        rj = null;
        var edgeTangent = v3pool.get();
        var edgeCenter = v3pool.get();
        var r = v3pool.get();
        var orthogonal = v3pool.get();
        var dist = v3pool.get();
        var Nsides = sides.length;
        for (var j = 0; j !== Nsides && !found; j++) {
          for (var k = 0; k !== Nsides && !found; k++) {
            if (j % 3 !== k % 3) {
              sides[k].cross(sides[j], edgeTangent);
              edgeTangent.normalize();
              sides[j].vadd(sides[k], edgeCenter);
              r.copy(xi);
              r.vsub(edgeCenter, r);
              r.vsub(xj, r);
              var orthonorm = r.dot(edgeTangent);
              edgeTangent.mult(orthonorm, orthogonal);
              var l = 0;
              while (l === j % 3 || l === k % 3) {
                l++;
              }
              dist.copy(xi);
              dist.vsub(orthogonal, dist);
              dist.vsub(edgeCenter, dist);
              dist.vsub(xj, dist);
              var tdist = Math.abs(orthonorm);
              var ndist = dist.norm();
              if (tdist < sides[l].norm() && ndist < R) {
                found = true;
                var res = this.createContactEquation(bi, bj, si, sj);
                edgeCenter.vadd(orthogonal, res.rj);
                res.rj.copy(res.rj);
                dist.negate(res.ni);
                res.ni.normalize();
                res.ri.copy(res.rj);
                res.ri.vadd(xj, res.ri);
                res.ri.vsub(xi, res.ri);
                res.ri.normalize();
                res.ri.mult(R, res.ri);
                res.ri.vadd(xi, res.ri);
                res.ri.vsub(bi.position, res.ri);
                res.rj.vadd(xj, res.rj);
                res.rj.vsub(bj.position, res.rj);
                this.result.push(res);
                this.createFrictionEquationsFromContact(res, this.frictionResult);
              }
            }
          }
        }
        v3pool.release(edgeTangent, edgeCenter, r, orthogonal, dist);
      };
      var convex_to_sphere = new Vec3();
      var sphereConvex_edge = new Vec3();
      var sphereConvex_edgeUnit = new Vec3();
      var sphereConvex_sphereToCorner = new Vec3();
      var sphereConvex_worldCorner = new Vec3();
      var sphereConvex_worldNormal = new Vec3();
      var sphereConvex_worldPoint = new Vec3();
      var sphereConvex_worldSpherePointClosestToPlane = new Vec3();
      var sphereConvex_penetrationVec = new Vec3();
      var sphereConvex_sphereToWorldPoint = new Vec3();
      Narrowphase.prototype[Shape.types.SPHERE | Shape.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.sphereConvex = function (si, sj, xi, xj, qi, qj, bi, bj) {
        var v3pool = this.v3pool;
        xi.vsub(xj, convex_to_sphere);
        var normals = sj.faceNormals;
        var faces = sj.faces;
        var verts = sj.vertices;
        var R = si.radius;
        for (var i = 0; i !== verts.length; i++) {
          var v = verts[i];
          var worldCorner = sphereConvex_worldCorner;
          qj.vmult(v, worldCorner);
          xj.vadd(worldCorner, worldCorner);
          var sphere_to_corner = sphereConvex_sphereToCorner;
          worldCorner.vsub(xi, sphere_to_corner);
          if (sphere_to_corner.norm2() < R * R) {
            found = true;
            var r = this.createContactEquation(bi, bj, si, sj);
            r.ri.copy(sphere_to_corner);
            r.ri.normalize();
            r.ni.copy(r.ri);
            r.ri.mult(R, r.ri);
            worldCorner.vsub(xj, r.rj);
            r.ri.vadd(xi, r.ri);
            r.ri.vsub(bi.position, r.ri);
            r.rj.vadd(xj, r.rj);
            r.rj.vsub(bj.position, r.rj);
            this.result.push(r);
            this.createFrictionEquationsFromContact(r, this.frictionResult);
            return;
          }
        }
        var found = false;
        for (var i = 0, nfaces = faces.length; i !== nfaces && found === false; i++) {
          var normal = normals[i];
          var face = faces[i];
          var worldNormal = sphereConvex_worldNormal;
          qj.vmult(normal, worldNormal);
          var worldPoint = sphereConvex_worldPoint;
          qj.vmult(verts[face[0]], worldPoint);
          worldPoint.vadd(xj, worldPoint);
          var worldSpherePointClosestToPlane = sphereConvex_worldSpherePointClosestToPlane;
          worldNormal.mult(-R, worldSpherePointClosestToPlane);
          xi.vadd(worldSpherePointClosestToPlane, worldSpherePointClosestToPlane);
          var penetrationVec = sphereConvex_penetrationVec;
          worldSpherePointClosestToPlane.vsub(worldPoint, penetrationVec);
          var penetration = penetrationVec.dot(worldNormal);
          var worldPointToSphere = sphereConvex_sphereToWorldPoint;
          xi.vsub(worldPoint, worldPointToSphere);
          if (penetration < 0 && worldPointToSphere.dot(worldNormal) > 0) {
            var faceVerts = [];
            for (var j = 0, Nverts = face.length; j !== Nverts; j++) {
              var worldVertex = v3pool.get();
              qj.vmult(verts[face[j]], worldVertex);
              xj.vadd(worldVertex, worldVertex);
              faceVerts.push(worldVertex);
            }
            if (pointInPolygon(faceVerts, worldNormal, xi)) {
              found = true;
              var r = this.createContactEquation(bi, bj, si, sj);
              worldNormal.mult(-R, r.ri);
              worldNormal.negate(r.ni);
              var penetrationVec2 = v3pool.get();
              worldNormal.mult(-penetration, penetrationVec2);
              var penetrationSpherePoint = v3pool.get();
              worldNormal.mult(-R, penetrationSpherePoint);
              xi.vsub(xj, r.rj);
              r.rj.vadd(penetrationSpherePoint, r.rj);
              r.rj.vadd(penetrationVec2, r.rj);
              r.rj.vadd(xj, r.rj);
              r.rj.vsub(bj.position, r.rj);
              r.ri.vadd(xi, r.ri);
              r.ri.vsub(bi.position, r.ri);
              v3pool.release(penetrationVec2);
              v3pool.release(penetrationSpherePoint);
              this.result.push(r);
              this.createFrictionEquationsFromContact(r, this.frictionResult);
              for (var j = 0, Nfaceverts = faceVerts.length; j !== Nfaceverts; j++) {
                v3pool.release(faceVerts[j]);
              }
              return;
            } else {
              for (var j = 0; j !== face.length; j++) {
                var v1 = v3pool.get();
                var v2 = v3pool.get();
                qj.vmult(verts[face[(j + 1) % face.length]], v1);
                qj.vmult(verts[face[(j + 2) % face.length]], v2);
                xj.vadd(v1, v1);
                xj.vadd(v2, v2);
                var edge = sphereConvex_edge;
                v2.vsub(v1, edge);
                var edgeUnit = sphereConvex_edgeUnit;
                edge.unit(edgeUnit);
                var p = v3pool.get();
                var v1_to_xi = v3pool.get();
                xi.vsub(v1, v1_to_xi);
                var dot = v1_to_xi.dot(edgeUnit);
                edgeUnit.mult(dot, p);
                p.vadd(v1, p);
                var xi_to_p = v3pool.get();
                p.vsub(xi, xi_to_p);
                if (dot > 0 && dot * dot < edge.norm2() && xi_to_p.norm2() < R * R) {
                  var r = this.createContactEquation(bi, bj, si, sj);
                  p.vsub(xj, r.rj);
                  p.vsub(xi, r.ni);
                  r.ni.normalize();
                  r.ni.mult(R, r.ri);
                  r.rj.vadd(xj, r.rj);
                  r.rj.vsub(bj.position, r.rj);
                  r.ri.vadd(xi, r.ri);
                  r.ri.vsub(bi.position, r.ri);
                  this.result.push(r);
                  this.createFrictionEquationsFromContact(r, this.frictionResult);
                  for (var j = 0, Nfaceverts = faceVerts.length; j !== Nfaceverts; j++) {
                    v3pool.release(faceVerts[j]);
                  }
                  v3pool.release(v1);
                  v3pool.release(v2);
                  v3pool.release(p);
                  v3pool.release(xi_to_p);
                  v3pool.release(v1_to_xi);
                  return;
                }
                v3pool.release(v1);
                v3pool.release(v2);
                v3pool.release(p);
                v3pool.release(xi_to_p);
                v3pool.release(v1_to_xi);
              }
            }
            for (var j = 0, Nfaceverts = faceVerts.length; j !== Nfaceverts; j++) {
              v3pool.release(faceVerts[j]);
            }
          }
        }
      };
      var planeBox_normal = new Vec3();
      var plane_to_corner = new Vec3();
      Narrowphase.prototype[Shape.types.PLANE | Shape.types.BOX] = Narrowphase.prototype.planeBox = function (si, sj, xi, xj, qi, qj, bi, bj) {
        sj.convexPolyhedronRepresentation.material = sj.material;
        sj.convexPolyhedronRepresentation.collisionResponse = sj.collisionResponse;
        this.planeConvex(si, sj.convexPolyhedronRepresentation, xi, xj, qi, qj, bi, bj);
      };
      var planeConvex_v = new Vec3();
      var planeConvex_normal = new Vec3();
      var planeConvex_relpos = new Vec3();
      var planeConvex_projected = new Vec3();
      Narrowphase.prototype[Shape.types.PLANE | Shape.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.planeConvex = function (planeShape, convexShape, planePosition, convexPosition, planeQuat, convexQuat, planeBody, convexBody) {
        var worldVertex = planeConvex_v,
            worldNormal = planeConvex_normal;
        worldNormal.set(0, 0, 1);
        planeQuat.vmult(worldNormal, worldNormal);
        var numContacts = 0;
        var relpos = planeConvex_relpos;
        for (var i = 0; i !== convexShape.vertices.length; i++) {
          worldVertex.copy(convexShape.vertices[i]);
          convexQuat.vmult(worldVertex, worldVertex);
          convexPosition.vadd(worldVertex, worldVertex);
          worldVertex.vsub(planePosition, relpos);
          var dot = worldNormal.dot(relpos);
          if (dot <= 0.0) {
            var r = this.createContactEquation(planeBody, convexBody, planeShape, convexShape);
            var projected = planeConvex_projected;
            worldNormal.mult(worldNormal.dot(relpos), projected);
            worldVertex.vsub(projected, projected);
            projected.vsub(planePosition, r.ri);
            r.ni.copy(worldNormal);
            worldVertex.vsub(convexPosition, r.rj);
            r.ri.vadd(planePosition, r.ri);
            r.ri.vsub(planeBody.position, r.ri);
            r.rj.vadd(convexPosition, r.rj);
            r.rj.vsub(convexBody.position, r.rj);
            this.result.push(r);
            numContacts++;
            if (!this.enableFrictionReduction) {
              this.createFrictionEquationsFromContact(r, this.frictionResult);
            }
          }
        }
        if (this.enableFrictionReduction && numContacts) {
          this.createFrictionFromAverage(numContacts);
        }
      };
      var convexConvex_sepAxis = new Vec3();
      var convexConvex_q = new Vec3();
      Narrowphase.prototype[Shape.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.convexConvex = function (si, sj, xi, xj, qi, qj, bi, bj, rsi, rsj, faceListA, faceListB) {
        var sepAxis = convexConvex_sepAxis;
        if (xi.distanceTo(xj) > si.boundingSphereRadius + sj.boundingSphereRadius) {
          return;
        }
        if (si.findSeparatingAxis(sj, xi, qi, xj, qj, sepAxis, faceListA, faceListB)) {
          var res = [];
          var q = convexConvex_q;
          si.clipAgainstHull(xi, qi, sj, xj, qj, sepAxis, -100, 100, res);
          var numContacts = 0;
          for (var j = 0; j !== res.length; j++) {
            var r = this.createContactEquation(bi, bj, si, sj, rsi, rsj),
                ri = r.ri,
                rj = r.rj;
            sepAxis.negate(r.ni);
            res[j].normal.negate(q);
            q.mult(res[j].depth, q);
            res[j].point.vadd(q, ri);
            rj.copy(res[j].point);
            ri.vsub(xi, ri);
            rj.vsub(xj, rj);
            ri.vadd(xi, ri);
            ri.vsub(bi.position, ri);
            rj.vadd(xj, rj);
            rj.vsub(bj.position, rj);
            this.result.push(r);
            numContacts++;
            if (!this.enableFrictionReduction) {
              this.createFrictionEquationsFromContact(r, this.frictionResult);
            }
          }
          if (this.enableFrictionReduction && numContacts) {
            this.createFrictionFromAverage(numContacts);
          }
        }
      };
      var particlePlane_normal = new Vec3();
      var particlePlane_relpos = new Vec3();
      var particlePlane_projected = new Vec3();
      Narrowphase.prototype[Shape.types.PLANE | Shape.types.PARTICLE] = Narrowphase.prototype.planeParticle = function (sj, si, xj, xi, qj, qi, bj, bi) {
        var normal = particlePlane_normal;
        normal.set(0, 0, 1);
        bj.quaternion.vmult(normal, normal);
        var relpos = particlePlane_relpos;
        xi.vsub(bj.position, relpos);
        var dot = normal.dot(relpos);
        if (dot <= 0.0) {
          var r = this.createContactEquation(bi, bj, si, sj);
          r.ni.copy(normal);
          r.ni.negate(r.ni);
          r.ri.set(0, 0, 0);
          var projected = particlePlane_projected;
          normal.mult(normal.dot(xi), projected);
          xi.vsub(projected, projected);
          r.rj.copy(projected);
          this.result.push(r);
          this.createFrictionEquationsFromContact(r, this.frictionResult);
        }
      };
      var particleSphere_normal = new Vec3();
      Narrowphase.prototype[Shape.types.PARTICLE | Shape.types.SPHERE] = Narrowphase.prototype.sphereParticle = function (sj, si, xj, xi, qj, qi, bj, bi) {
        var normal = particleSphere_normal;
        normal.set(0, 0, 1);
        xi.vsub(xj, normal);
        var lengthSquared = normal.norm2();
        if (lengthSquared <= sj.radius * sj.radius) {
          var r = this.createContactEquation(bi, bj, si, sj);
          normal.normalize();
          r.rj.copy(normal);
          r.rj.mult(sj.radius, r.rj);
          r.ni.copy(normal);
          r.ni.negate(r.ni);
          r.ri.set(0, 0, 0);
          this.result.push(r);
          this.createFrictionEquationsFromContact(r, this.frictionResult);
        }
      };
      var cqj = new Quaternion();
      var convexParticle_local = new Vec3();
      var convexParticle_normal = new Vec3();
      var convexParticle_penetratedFaceNormal = new Vec3();
      var convexParticle_vertexToParticle = new Vec3();
      var convexParticle_worldPenetrationVec = new Vec3();
      Narrowphase.prototype[Shape.types.PARTICLE | Shape.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.convexParticle = function (sj, si, xj, xi, qj, qi, bj, bi) {
        var penetratedFaceIndex = -1;
        var penetratedFaceNormal = convexParticle_penetratedFaceNormal;
        var worldPenetrationVec = convexParticle_worldPenetrationVec;
        var minPenetration = null;
        var local = convexParticle_local;
        local.copy(xi);
        local.vsub(xj, local);
        qj.conjugate(cqj);
        cqj.vmult(local, local);
        if (sj.pointIsInside(local)) {
          if (sj.worldVerticesNeedsUpdate) {
            sj.computeWorldVertices(xj, qj);
          }
          if (sj.worldFaceNormalsNeedsUpdate) {
            sj.computeWorldFaceNormals(qj);
          }
          for (var i = 0, nfaces = sj.faces.length; i !== nfaces; i++) {
            var verts = [sj.worldVertices[sj.faces[i][0]]];
            var normal = sj.worldFaceNormals[i];
            xi.vsub(verts[0], convexParticle_vertexToParticle);
            var penetration = -normal.dot(convexParticle_vertexToParticle);
            if (minPenetration === null || Math.abs(penetration) < Math.abs(minPenetration)) {
              minPenetration = penetration;
              penetratedFaceIndex = i;
              penetratedFaceNormal.copy(normal);
            }
          }
          if (penetratedFaceIndex !== -1) {
            var r = this.createContactEquation(bi, bj, si, sj);
            penetratedFaceNormal.mult(minPenetration, worldPenetrationVec);
            worldPenetrationVec.vadd(xi, worldPenetrationVec);
            worldPenetrationVec.vsub(xj, worldPenetrationVec);
            r.rj.copy(worldPenetrationVec);
            penetratedFaceNormal.negate(r.ni);
            r.ri.set(0, 0, 0);
            var ri = r.ri,
                rj = r.rj;
            ri.vadd(xi, ri);
            ri.vsub(bi.position, ri);
            rj.vadd(xj, rj);
            rj.vsub(bj.position, rj);
            this.result.push(r);
            this.createFrictionEquationsFromContact(r, this.frictionResult);
          } else {
            console.warn("Point found inside convex, but did not find penetrating face!");
          }
        }
      };
      Narrowphase.prototype[Shape.types.BOX | Shape.types.HEIGHTFIELD] = Narrowphase.prototype.boxHeightfield = function (si, sj, xi, xj, qi, qj, bi, bj) {
        si.convexPolyhedronRepresentation.material = si.material;
        si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
        this.convexHeightfield(si.convexPolyhedronRepresentation, sj, xi, xj, qi, qj, bi, bj);
      };
      var convexHeightfield_tmp1 = new Vec3();
      var convexHeightfield_tmp2 = new Vec3();
      var convexHeightfield_faceList = [0];
      Narrowphase.prototype[Shape.types.CONVEXPOLYHEDRON | Shape.types.HEIGHTFIELD] = Narrowphase.prototype.convexHeightfield = function (convexShape, hfShape, convexPos, hfPos, convexQuat, hfQuat, convexBody, hfBody) {
        var data = hfShape.data,
            w = hfShape.elementSize,
            radius = convexShape.boundingSphereRadius,
            worldPillarOffset = convexHeightfield_tmp2,
            faceList = convexHeightfield_faceList;
        var localConvexPos = convexHeightfield_tmp1;
        Transform.pointToLocalFrame(hfPos, hfQuat, convexPos, localConvexPos);
        var iMinX = Math.floor((localConvexPos.x - radius) / w) - 1,
            iMaxX = Math.ceil((localConvexPos.x + radius) / w) + 1,
            iMinY = Math.floor((localConvexPos.y - radius) / w) - 1,
            iMaxY = Math.ceil((localConvexPos.y + radius) / w) + 1;
        if (iMaxX < 0 || iMaxY < 0 || iMinX > data.length || iMinY > data[0].length) {
          return;
        }
        if (iMinX < 0) {
          iMinX = 0;
        }
        if (iMaxX < 0) {
          iMaxX = 0;
        }
        if (iMinY < 0) {
          iMinY = 0;
        }
        if (iMaxY < 0) {
          iMaxY = 0;
        }
        if (iMinX >= data.length) {
          iMinX = data.length - 1;
        }
        if (iMaxX >= data.length) {
          iMaxX = data.length - 1;
        }
        if (iMaxY >= data[0].length) {
          iMaxY = data[0].length - 1;
        }
        if (iMinY >= data[0].length) {
          iMinY = data[0].length - 1;
        }
        var minMax = [];
        hfShape.getRectMinMax(iMinX, iMinY, iMaxX, iMaxY, minMax);
        var min = minMax[0];
        var max = minMax[1];
        if (localConvexPos.z - radius > max || localConvexPos.z + radius < min) {
          return;
        }
        for (var i = iMinX; i < iMaxX; i++) {
          for (var j = iMinY; j < iMaxY; j++) {
            hfShape.getConvexTrianglePillar(i, j, false);
            Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
            if (convexPos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + convexShape.boundingSphereRadius) {
              this.convexConvex(convexShape, hfShape.pillarConvex, convexPos, worldPillarOffset, convexQuat, hfQuat, convexBody, hfBody, null, null, faceList, null);
            }
            hfShape.getConvexTrianglePillar(i, j, true);
            Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
            if (convexPos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + convexShape.boundingSphereRadius) {
              this.convexConvex(convexShape, hfShape.pillarConvex, convexPos, worldPillarOffset, convexQuat, hfQuat, convexBody, hfBody, null, null, faceList, null);
            }
          }
        }
      };
      var sphereHeightfield_tmp1 = new Vec3();
      var sphereHeightfield_tmp2 = new Vec3();
      Narrowphase.prototype[Shape.types.SPHERE | Shape.types.HEIGHTFIELD] = Narrowphase.prototype.sphereHeightfield = function (sphereShape, hfShape, spherePos, hfPos, sphereQuat, hfQuat, sphereBody, hfBody) {
        var data = hfShape.data,
            radius = sphereShape.radius,
            w = hfShape.elementSize,
            worldPillarOffset = sphereHeightfield_tmp2;
        var localSpherePos = sphereHeightfield_tmp1;
        Transform.pointToLocalFrame(hfPos, hfQuat, spherePos, localSpherePos);
        var iMinX = Math.floor((localSpherePos.x - radius) / w) - 1,
            iMaxX = Math.ceil((localSpherePos.x + radius) / w) + 1,
            iMinY = Math.floor((localSpherePos.y - radius) / w) - 1,
            iMaxY = Math.ceil((localSpherePos.y + radius) / w) + 1;
        if (iMaxX < 0 || iMaxY < 0 || iMinX > data.length || iMaxY > data[0].length) {
          return;
        }
        if (iMinX < 0) {
          iMinX = 0;
        }
        if (iMaxX < 0) {
          iMaxX = 0;
        }
        if (iMinY < 0) {
          iMinY = 0;
        }
        if (iMaxY < 0) {
          iMaxY = 0;
        }
        if (iMinX >= data.length) {
          iMinX = data.length - 1;
        }
        if (iMaxX >= data.length) {
          iMaxX = data.length - 1;
        }
        if (iMaxY >= data[0].length) {
          iMaxY = data[0].length - 1;
        }
        if (iMinY >= data[0].length) {
          iMinY = data[0].length - 1;
        }
        var minMax = [];
        hfShape.getRectMinMax(iMinX, iMinY, iMaxX, iMaxY, minMax);
        var min = minMax[0];
        var max = minMax[1];
        if (localSpherePos.z - radius > max || localSpherePos.z + radius < min) {
          return;
        }
        var result = this.result;
        for (var i = iMinX; i < iMaxX; i++) {
          for (var j = iMinY; j < iMaxY; j++) {
            var numContactsBefore = result.length;
            hfShape.getConvexTrianglePillar(i, j, false);
            Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
            if (spherePos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + sphereShape.boundingSphereRadius) {
              this.sphereConvex(sphereShape, hfShape.pillarConvex, spherePos, worldPillarOffset, sphereQuat, hfQuat, sphereBody, hfBody);
            }
            hfShape.getConvexTrianglePillar(i, j, true);
            Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
            if (spherePos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + sphereShape.boundingSphereRadius) {
              this.sphereConvex(sphereShape, hfShape.pillarConvex, spherePos, worldPillarOffset, sphereQuat, hfQuat, sphereBody, hfBody);
            }
            var numContacts = result.length - numContactsBefore;
            if (numContacts > 2) {
              return;
            }
          }
        }
      };
    }, {
      "../collision/AABB": 3,
      "../collision/Ray": 9,
      "../equations/ContactEquation": 19,
      "../equations/FrictionEquation": 21,
      "../math/Quaternion": 28,
      "../math/Transform": 29,
      "../math/Vec3": 30,
      "../shapes/ConvexPolyhedron": 38,
      "../shapes/Shape": 43,
      "../solver/Solver": 47,
      "../utils/Vec3Pool": 54
    }],
    56: [function (_dereq_, module, exports) {
      module.exports = World;
      var Shape = _dereq_('../shapes/Shape');
      var Vec3 = _dereq_('../math/Vec3');
      var Quaternion = _dereq_('../math/Quaternion');
      var GSSolver = _dereq_('../solver/GSSolver');
      var Vec3Pool = _dereq_('../utils/Vec3Pool');
      var ContactEquation = _dereq_('../equations/ContactEquation');
      var FrictionEquation = _dereq_('../equations/FrictionEquation');
      var Narrowphase = _dereq_('./Narrowphase');
      var EventTarget = _dereq_('../utils/EventTarget');
      var ArrayCollisionMatrix = _dereq_('../collision/ArrayCollisionMatrix');
      var Material = _dereq_('../material/Material');
      var ContactMaterial = _dereq_('../material/ContactMaterial');
      var Body = _dereq_('../objects/Body');
      var TupleDictionary = _dereq_('../utils/TupleDictionary');
      var RaycastResult = _dereq_('../collision/RaycastResult');
      var AABB = _dereq_('../collision/AABB');
      var Ray = _dereq_('../collision/Ray');
      var NaiveBroadphase = _dereq_('../collision/NaiveBroadphase');
      function World() {
        EventTarget.apply(this);
        this.dt = -1;
        this.allowSleep = false;
        this.contacts = [];
        this.frictionEquations = [];
        this.quatNormalizeSkip = 0;
        this.quatNormalizeFast = false;
        this.time = 0.0;
        this.stepnumber = 0;
        this.default_dt = 1 / 60;
        this.nextId = 0;
        this.gravity = new Vec3();
        this.broadphase = new NaiveBroadphase();
        this.bodies = [];
        this.solver = new GSSolver();
        this.constraints = [];
        this.narrowphase = new Narrowphase(this);
        this.collisionMatrix = new ArrayCollisionMatrix();
        this.collisionMatrixPrevious = new ArrayCollisionMatrix();
        this.materials = [];
        this.contactmaterials = [];
        this.contactMaterialTable = new TupleDictionary();
        this.defaultMaterial = new Material("default");
        this.defaultContactMaterial = new ContactMaterial(this.defaultMaterial, this.defaultMaterial, {
          friction: 0.3,
          restitution: 0.0
        });
        this.doProfiling = false;
        this.profile = {
          solve: 0,
          makeContactConstraints: 0,
          broadphase: 0,
          integrate: 0,
          narrowphase: 0
        };
        this.subsystems = [];
        this.addBodyEvent = {
          type: "addBody",
          body: null
        };
        this.removeBodyEvent = {
          type: "removeBody",
          body: null
        };
      }
      World.prototype = new EventTarget();
      var tmpAABB1 = new AABB();
      var tmpRay = new Ray();
      World.prototype.getContactMaterial = function (m1, m2) {
        return this.contactMaterialTable.get(m1.id, m2.id);
      };
      World.prototype.numObjects = function () {
        return this.bodies.length;
      };
      World.prototype.collisionMatrixTick = function () {
        var temp = this.collisionMatrixPrevious;
        this.collisionMatrixPrevious = this.collisionMatrix;
        this.collisionMatrix = temp;
        this.collisionMatrix.reset();
      };
      World.prototype.add = World.prototype.addBody = function (body) {
        if (this.bodies.indexOf(body) !== -1) {
          return;
        }
        body.index = this.bodies.length;
        this.bodies.push(body);
        body.world = this;
        body.initPosition.copy(body.position);
        body.initVelocity.copy(body.velocity);
        body.timeLastSleepy = this.time;
        if (body instanceof Body) {
          body.initAngularVelocity.copy(body.angularVelocity);
          body.initQuaternion.copy(body.quaternion);
        }
        this.collisionMatrix.setNumObjects(this.bodies.length);
        this.addBodyEvent.body = body;
        this.dispatchEvent(this.addBodyEvent);
      };
      World.prototype.addConstraint = function (c) {
        this.constraints.push(c);
      };
      World.prototype.removeConstraint = function (c) {
        var idx = this.constraints.indexOf(c);
        if (idx !== -1) {
          this.constraints.splice(idx, 1);
        }
      };
      World.prototype.rayTest = function (from, to, result) {
        if (result instanceof RaycastResult) {
          this.raycastClosest(from, to, {
            skipBackfaces: true
          }, result);
        } else {
          this.raycastAll(from, to, {
            skipBackfaces: true
          }, result);
        }
      };
      World.prototype.raycastAll = function (from, to, options, callback) {
        options.mode = Ray.ALL;
        options.from = from;
        options.to = to;
        options.callback = callback;
        return tmpRay.intersectWorld(this, options);
      };
      World.prototype.raycastAny = function (from, to, options, result) {
        options.mode = Ray.ANY;
        options.from = from;
        options.to = to;
        options.result = result;
        return tmpRay.intersectWorld(this, options);
      };
      World.prototype.raycastClosest = function (from, to, options, result) {
        options.mode = Ray.CLOSEST;
        options.from = from;
        options.to = to;
        options.result = result;
        return tmpRay.intersectWorld(this, options);
      };
      World.prototype.remove = function (body) {
        body.world = null;
        var n = this.bodies.length - 1,
            bodies = this.bodies,
            idx = bodies.indexOf(body);
        if (idx !== -1) {
          bodies.splice(idx, 1);
          for (var i = 0; i !== bodies.length; i++) {
            bodies[i].index = i;
          }
          this.collisionMatrix.setNumObjects(n);
          this.removeBodyEvent.body = body;
          this.dispatchEvent(this.removeBodyEvent);
        }
      };
      World.prototype.removeBody = World.prototype.remove;
      World.prototype.addMaterial = function (m) {
        this.materials.push(m);
      };
      World.prototype.addContactMaterial = function (cmat) {
        this.contactmaterials.push(cmat);
        this.contactMaterialTable.set(cmat.materials[0].id, cmat.materials[1].id, cmat);
      };
      if (typeof performance === 'undefined') {
        performance = {};
      }
      if (!performance.now) {
        var nowOffset = Date.now();
        if (performance.timing && performance.timing.navigationStart) {
          nowOffset = performance.timing.navigationStart;
        }
        performance.now = function () {
          return Date.now() - nowOffset;
        };
      }
      var step_tmp1 = new Vec3();
      World.prototype.step = function (dt, timeSinceLastCalled, maxSubSteps) {
        maxSubSteps = maxSubSteps || 10;
        timeSinceLastCalled = timeSinceLastCalled || 0;
        if (timeSinceLastCalled === 0) {
          this.internalStep(dt);
          this.time += dt;
        } else {
          var internalSteps = Math.floor((this.time + timeSinceLastCalled) / dt) - Math.floor(this.time / dt);
          internalSteps = Math.min(internalSteps, maxSubSteps);
          var t0 = performance.now();
          for (var i = 0; i !== internalSteps; i++) {
            this.internalStep(dt);
            if (performance.now() - t0 > dt * 1000) {
              break;
            }
          }
          this.time += timeSinceLastCalled;
          var h = this.time % dt;
          var h_div_dt = h / dt;
          var interpvelo = step_tmp1;
          var bodies = this.bodies;
          for (var j = 0; j !== bodies.length; j++) {
            var b = bodies[j];
            if (b.type !== Body.STATIC && b.sleepState !== Body.SLEEPING) {
              b.position.vsub(b.previousPosition, interpvelo);
              interpvelo.scale(h_div_dt, interpvelo);
              b.position.vadd(interpvelo, b.interpolatedPosition);
            } else {
              b.interpolatedPosition.copy(b.position);
              b.interpolatedQuaternion.copy(b.quaternion);
            }
          }
        }
      };
      var World_step_postStepEvent = {
        type: "postStep"
      },
      World_step_preStepEvent = {
        type: "preStep"
      },
          World_step_collideEvent = {
        type: "collide",
        body: null,
        contact: null
      },
          World_step_oldContacts = [],
      World_step_frictionEquationPool = [],
          World_step_p1 = [],
      World_step_p2 = [],
          World_step_gvec = new Vec3(),
      World_step_vi = new Vec3(),
          World_step_vj = new Vec3(),
          World_step_wi = new Vec3(),
          World_step_wj = new Vec3(),
          World_step_t1 = new Vec3(),
          World_step_t2 = new Vec3(),
          World_step_rixn = new Vec3(),
          World_step_rjxn = new Vec3(),
          World_step_step_q = new Quaternion(),
          World_step_step_w = new Quaternion(),
          World_step_step_wq = new Quaternion(),
          invI_tau_dt = new Vec3();
      World.prototype.internalStep = function (dt) {
        this.dt = dt;
        var contacts = this.contacts,
            p1 = World_step_p1,
            p2 = World_step_p2,
            N = this.numObjects(),
            bodies = this.bodies,
            solver = this.solver,
            gravity = this.gravity,
            doProfiling = this.doProfiling,
            profile = this.profile,
            DYNAMIC = Body.DYNAMIC,
            profilingStart,
            constraints = this.constraints,
            frictionEquationPool = World_step_frictionEquationPool,
            gnorm = gravity.norm(),
            gx = gravity.x,
            gy = gravity.y,
            gz = gravity.z,
            i = 0;
        if (doProfiling) {
          profilingStart = performance.now();
        }
        for (i = 0; i !== N; i++) {
          var bi = bodies[i];
          if (bi.type & DYNAMIC) {
            var f = bi.force,
                m = bi.mass;
            f.x += m * gx;
            f.y += m * gy;
            f.z += m * gz;
          }
        }
        for (var i = 0, Nsubsystems = this.subsystems.length; i !== Nsubsystems; i++) {
          this.subsystems[i].update();
        }
        if (doProfiling) {
          profilingStart = performance.now();
        }
        p1.length = 0;
        p2.length = 0;
        this.broadphase.collisionPairs(this, p1, p2);
        if (doProfiling) {
          profile.broadphase = performance.now() - profilingStart;
        }
        var Nconstraints = constraints.length;
        for (i = 0; i !== Nconstraints; i++) {
          var c = constraints[i];
          if (!c.collideConnected) {
            for (var j = p1.length - 1; j >= 0; j -= 1) {
              if (c.bodyA === p1[j] && c.bodyB === p2[j] || c.bodyB === p1[j] && c.bodyA === p2[j]) {
                p1.splice(j, 1);
                p2.splice(j, 1);
              }
            }
          }
        }
        this.collisionMatrixTick();
        if (doProfiling) {
          profilingStart = performance.now();
        }
        var oldcontacts = World_step_oldContacts;
        var NoldContacts = contacts.length;
        for (i = 0; i !== NoldContacts; i++) {
          oldcontacts.push(contacts[i]);
        }
        contacts.length = 0;
        var NoldFrictionEquations = this.frictionEquations.length;
        for (i = 0; i !== NoldFrictionEquations; i++) {
          frictionEquationPool.push(this.frictionEquations[i]);
        }
        this.frictionEquations.length = 0;
        this.narrowphase.getContacts(p1, p2, this, contacts, oldcontacts,
        this.frictionEquations, frictionEquationPool);
        if (doProfiling) {
          profile.narrowphase = performance.now() - profilingStart;
        }
        if (doProfiling) {
          profilingStart = performance.now();
        }
        for (var i = 0; i < this.frictionEquations.length; i++) {
          solver.addEquation(this.frictionEquations[i]);
        }
        var ncontacts = contacts.length;
        for (var k = 0; k !== ncontacts; k++) {
          var c = contacts[k];
          var bi = c.bi,
              bj = c.bj,
              si = c.si,
              sj = c.sj;
          var cm;
          if (bi.material && bj.material) {
            cm = this.getContactMaterial(bi.material, bj.material) || this.defaultContactMaterial;
          } else {
            cm = this.defaultContactMaterial;
          }
          var mu = cm.friction;
          if (bi.material && bj.material) {
            if (bi.material.friction >= 0 && bj.material.friction >= 0) {
              mu = bi.material.friction * bj.material.friction;
            }
            if (bi.material.restitution >= 0 && bj.material.restitution >= 0) {
              c.restitution = bi.material.restitution * bj.material.restitution;
            }
          }
          solver.addEquation(c);
          if (bi.allowSleep && bi.type === Body.DYNAMIC && bi.sleepState === Body.SLEEPING && bj.sleepState === Body.AWAKE && bj.type !== Body.STATIC) {
            var speedSquaredB = bj.velocity.norm2() + bj.angularVelocity.norm2();
            var speedLimitSquaredB = Math.pow(bj.sleepSpeedLimit, 2);
            if (speedSquaredB >= speedLimitSquaredB * 2) {
              bi._wakeUpAfterNarrowphase = true;
            }
          }
          if (bj.allowSleep && bj.type === Body.DYNAMIC && bj.sleepState === Body.SLEEPING && bi.sleepState === Body.AWAKE && bi.type !== Body.STATIC) {
            var speedSquaredA = bi.velocity.norm2() + bi.angularVelocity.norm2();
            var speedLimitSquaredA = Math.pow(bi.sleepSpeedLimit, 2);
            if (speedSquaredA >= speedLimitSquaredA * 2) {
              bj._wakeUpAfterNarrowphase = true;
            }
          }
          this.collisionMatrix.set(bi, bj, true);
          if (!this.collisionMatrixPrevious.get(bi, bj)) {
            World_step_collideEvent.body = bj;
            World_step_collideEvent.contact = c;
            bi.dispatchEvent(World_step_collideEvent);
            World_step_collideEvent.body = bi;
            bj.dispatchEvent(World_step_collideEvent);
          }
        }
        if (doProfiling) {
          profile.makeContactConstraints = performance.now() - profilingStart;
          profilingStart = performance.now();
        }
        for (i = 0; i !== N; i++) {
          var bi = bodies[i];
          if (bi._wakeUpAfterNarrowphase) {
            bi.wakeUp();
            bi._wakeUpAfterNarrowphase = false;
          }
        }
        var Nconstraints = constraints.length;
        for (i = 0; i !== Nconstraints; i++) {
          var c = constraints[i];
          c.update();
          for (var j = 0, Neq = c.equations.length; j !== Neq; j++) {
            var eq = c.equations[j];
            solver.addEquation(eq);
          }
        }
        solver.solve(dt, this);
        if (doProfiling) {
          profile.solve = performance.now() - profilingStart;
        }
        solver.removeAllEquations();
        var pow = Math.pow;
        for (i = 0; i !== N; i++) {
          var bi = bodies[i];
          if (bi.type & DYNAMIC) {
            var ld = pow(1.0 - bi.linearDamping, dt);
            var v = bi.velocity;
            v.mult(ld, v);
            var av = bi.angularVelocity;
            if (av) {
              var ad = pow(1.0 - bi.angularDamping, dt);
              av.mult(ad, av);
            }
          }
        }
        this.dispatchEvent(World_step_preStepEvent);
        for (i = 0; i !== N; i++) {
          var bi = bodies[i];
          if (bi.preStep) {
            bi.preStep.call(bi);
          }
        }
        if (doProfiling) {
          profilingStart = performance.now();
        }
        var w = World_step_step_w;
        var wq = World_step_step_wq;
        var stepnumber = this.stepnumber;
        var DYNAMIC_OR_KINEMATIC = Body.DYNAMIC | Body.KINEMATIC;
        var quatNormalize = stepnumber % (this.quatNormalizeSkip + 1) === 0;
        var quatNormalizeFast = this.quatNormalizeFast;
        var half_dt = dt * 0.5;
        var PLANE = Shape.types.PLANE,
            CONVEX = Shape.types.CONVEXPOLYHEDRON;
        for (i = 0; i !== N; i++) {
          var b = bodies[i],
              force = b.force,
              tau = b.torque;
          if (b.type & DYNAMIC_OR_KINEMATIC && b.sleepState !== Body.SLEEPING) {
            var velo = b.velocity,
                angularVelo = b.angularVelocity,
                pos = b.position,
                quat = b.quaternion,
                invMass = b.invMass,
                invInertia = b.invInertiaWorld;
            velo.x += force.x * invMass * dt;
            velo.y += force.y * invMass * dt;
            velo.z += force.z * invMass * dt;
            if (b.angularVelocity) {
              invInertia.vmult(tau, invI_tau_dt);
              invI_tau_dt.mult(dt, invI_tau_dt);
              invI_tau_dt.vadd(angularVelo, angularVelo);
            }
            pos.x += velo.x * dt;
            pos.y += velo.y * dt;
            pos.z += velo.z * dt;
            if (b.angularVelocity) {
              w.set(angularVelo.x, angularVelo.y, angularVelo.z, 0);
              w.mult(quat, wq);
              quat.x += half_dt * wq.x;
              quat.y += half_dt * wq.y;
              quat.z += half_dt * wq.z;
              quat.w += half_dt * wq.w;
              if (quatNormalize) {
                if (quatNormalizeFast) {
                  quat.normalizeFast();
                } else {
                  quat.normalize();
                }
              }
            }
            if (b.aabb) {
              b.aabbNeedsUpdate = true;
            }
            if (b.updateInertiaWorld) {
              b.updateInertiaWorld();
            }
          }
        }
        this.clearForces();
        this.broadphase.dirty = true;
        if (doProfiling) {
          profile.integrate = performance.now() - profilingStart;
        }
        this.time += dt;
        this.stepnumber += 1;
        this.dispatchEvent(World_step_postStepEvent);
        for (i = 0; i !== N; i++) {
          var bi = bodies[i];
          var postStep = bi.postStep;
          if (postStep) {
            postStep.call(bi);
          }
        }
        if (this.allowSleep) {
          for (i = 0; i !== N; i++) {
            bodies[i].sleepTick(this.time);
          }
        }
      };
      World.prototype.clearForces = function () {
        var bodies = this.bodies;
        var N = bodies.length;
        for (var i = 0; i !== N; i++) {
          var b = bodies[i],
              force = b.force,
              tau = b.torque;
          b.force.set(0, 0, 0);
          b.torque.set(0, 0, 0);
        }
      };
    }, {
      "../collision/AABB": 3,
      "../collision/ArrayCollisionMatrix": 4,
      "../collision/NaiveBroadphase": 7,
      "../collision/Ray": 9,
      "../collision/RaycastResult": 10,
      "../equations/ContactEquation": 19,
      "../equations/FrictionEquation": 21,
      "../material/ContactMaterial": 24,
      "../material/Material": 25,
      "../math/Quaternion": 28,
      "../math/Vec3": 30,
      "../objects/Body": 31,
      "../shapes/Shape": 43,
      "../solver/GSSolver": 46,
      "../utils/EventTarget": 49,
      "../utils/TupleDictionary": 52,
      "../utils/Vec3Pool": 54,
      "./Narrowphase": 55
    }]
  }, {}, [2])(2);
});
});

function registerObservers(scene) {
  var _this = this;
  var observers = Object.keys(this.$listeners).reduce(function (out, key) {
    var name = key;
    var _name = name,
        _name2 = _toArray(_name),
        first = _name2[0],
        rest = _name2.slice(1);
    var target = 'add';
    if (first === '~') {
      target = 'addOnce';
      name = rest.join('');
    }
    name = camelize(name);
    key = key.replace('~', '');
    if (last(name) === '$') {
      name = _toConsumableArray(name);
      name.pop();
      name = name.join('');
      name = "on".concat(name, "Observable");
    } else {
      return out;
    }
    var observable = null;
    if (_this.$entity && _this.$entity[name] instanceof Observable) {
      observable = _this.$entity[name];
    } else if (scene && scene[name] instanceof Observable) {
      observable = scene[name];
    } else {
      console.warn("Could not find Observable with name ".concat(name));
      return out;
    }
    var observer = null;
    if (observable) {
      observer = observable[target](function () {
        return _this.$emit(key, {
          observable: observable,
          observer: observer
        });
      });
    }
    if (observer) {
      out.push(function () {
        return observable.remove(observer);
      });
    }
    return out;
  }, []);
  return function () {
    return observers.forEach(function (fn) {
      return fn();
    });
  };
}

var AbstractEntity = {
  inject: {
    _$_sceneReady: 'SceneReady',
    _$_parentReady: {
      from: 'EntityReady',
      default: Promise.resolve(null)
    },
    $bus: {
      from: 'EntityBus',
      default: function _default() {
        return createBus.call(this);
      }
    },
    $sceneBus: {
      from: 'SceneBus',
      default: function _default() {
        return createBus.call(this);
      }
    }
  },
  provide: function provide() {
    return {
      EntityReady: this._$_entityReady,
      EntityBus: this.$event
    };
  },
  model: {
    prop: '_$_input',
    event: '_$_output'
  },
  props: {
    _$_input: {
      type: Object,
      default: null
    },
    name: {
      type: String,
      default: id
    },
    properties: {
      type: Object,
      default: null
    }
  },
  methods: {
    _$_applyProperties: function _$_applyProperties() {
      if (this.$entity && this.properties) {
        Object.assign(this.$entity, this.properties);
      }
    },
    _$_init: function _$_init() {
      var _this = this;
      return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this._$_clearObservers = registerObservers.call(_this, _this.$scene);
                if (!_this.$options._$_onTransform) {
                  _context.next = 4;
                  break;
                }
                _context.next = 4;
                return _this.$options._$_onTransform.call(_this);
              case 4:
                if (!_this.$options.onEntity) {
                  _context.next = 7;
                  break;
                }
                _context.next = 7;
                return _this.$options.onEntity.call(_this, _this._$_hookArgs);
              case 7:
                if (isDisposable(_this.$entity)) {
                  _this.$entity.onDispose = function () {
                    if (!_this._$_destroyed) {
                      _this.$destroy();
                    }
                  };
                }
                _this.$emit('_$_output', _this.$entity);
                _this.$event.$emit('change', _this.$entity);
                _this.$emit('entity', _this._$_hookArgs);
              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    _$_onParent: function _$_onParent(parent) {
      var _this2 = this;
      return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2._$_parent = parent;
                _this2._$_hookArgs.parent = _this2._$_parent;
                if (!_this2.$options.onParent) {
                  _context2.next = 5;
                  break;
                }
                _context2.next = 5;
                return _this2.$options.onParent.call(_this2, _this2._$_hookArgs);
              case 5:
                _this2.$emit('parent', _this2._$_hookArgs);
              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    $replace: function $replace(entity) {
      var _this3 = this;
      return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (_this3._$_clearObservers) {
                  _this3._$_clearObservers();
                }
                if (isDisposable(_this3.$entity)) {
                  _this3._$_destroyed = true;
                  _this3.$entity.dispose();
                  _this3._$_destroyed = false;
                }
                _this3.$entity = entity;
                _context3.next = 5;
                return _this3._$_init();
              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    register: function register(_ref) {
      var name = _ref.name;
      this._$_children[name] = defer();
    },
    complete: function complete(_ref2) {
      var name = _ref2.name,
          entity = _ref2.entity;
      this._$_children[name].complete({
        name: name,
        entity: entity
      });
    }
  },
  watch: {
    properties: {
      handler: function handler() {
        this._$_applyProperties();
      },
      deep: true
    },
    _$_input: function _$_input() {
      if (this.$entity !== this._$_input) {
        this.$replace(this._$_input);
      }
    }
  },
  beforeCreate: function beforeCreate() {
    this.$event = createBus.call(this);
    this._$_entityReady = defer();
  },
  created: function created() {
    var _this4 = this;
    this._$_hookArgs = {
      name: this.name
    };
    if (this.$options.events) {
      Object.entries(this.$options.events).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            name = _ref4[0],
            fn = _ref4[1];
        _this4.$event.$on(name, fn.bind(_this4));
      });
    }
  },
  beforeMount: function beforeMount() {
    this._$_children = {};
    this.$event.$on('register', this.register);
    this.$event.$on('complete', this.complete);
    this.$bus.$emit('register', {
      name: this.name
    });
  },
  mounted: function mounted() {
    var _this5 = this;
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
      var sceneArgs, children;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!_this5.$options.beforeScene) {
                _context4.next = 4;
                break;
              }
              _context4.next = 3;
              return _this5.$options.beforeScene.call(_this5, Object.assign({
                sceneReady: _this5._$_sceneReady,
                parentReady: _this5._$_parentReady
              }, _this5._$_hookArgs));
            case 3:
              _this5.$entity = _context4.sent;
            case 4:
              _context4.next = 6;
              return _this5._$_sceneReady;
            case 6:
              _this5.$scene = _context4.sent;
              _this5._$_hookArgs.scene = _this5.$scene;
              sceneArgs = Object.assign({
                parentReady: _this5._$_parentReady
              }, _this5._$_hookArgs);
              _this5.$emit('scene', sceneArgs);
              if (!_this5.$options.onScene) {
                _context4.next = 14;
                break;
              }
              _context4.next = 13;
              return _this5.$options.onScene.call(_this5, sceneArgs);
            case 13:
              _this5.$entity = _context4.sent;
            case 14:
              _this5._$_hookArgs.entity = _this5.$entity;
              _context4.t0 = _this5;
              _context4.next = 18;
              return _this5._$_parentReady;
            case 18:
              _context4.t1 = _context4.sent;
              _context4.t0._$_onParent.call(_context4.t0, _context4.t1);
              _this5.$bus.$on('change', _this5._$_onParent.bind(_this5));
              if (!_this5._$_input) {
                _context4.next = 25;
                break;
              }
              _this5.$replace(_this5._$_input);
              _context4.next = 27;
              break;
            case 25:
              _context4.next = 27;
              return _this5._$_init();
            case 27:
              if (_this5.$options.beforeRender) {
                _this5._$_beforeRender = _this5.$options.beforeRender.bind(_this5);
                _this5.$scene.registerBeforeRender(_this5._$_beforeRender);
              }
              if (_this5.$options.afterRender) {
                _this5._$_afterRender = _this5.$options.afterRender.bind(_this5);
                _this5.$scene.registerAfterRender(_this5._$_afterRender);
              }
              _this5._$_entityReady.complete(_this5.$entity);
              _this5.$bus.$emit('complete', {
                name: _this5.name,
                entity: _this5.$entity
              });
              _this5._$_applyProperties();
              _context4.next = 34;
              return Promise.all(Object.values(_this5._$_children));
            case 34:
              children = _context4.sent;
              children = children.reduce(function (out, _ref5) {
                var name = _ref5.name,
                    entity = _ref5.entity;
                out[name] = entity;
                return out;
              }, {});
              _this5._$_hookArgs.children = children;
              _this5.$emit('complete', _this5._$_hookArgs);
            case 38:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  beforeDestroy: function beforeDestroy() {
    this._$_destroyed = true;
    if (this._$_clearObservers) {
      this._$_clearObservers();
    }
    this.$emit('dispose');
    if (isDisposable(this.$entity)) {
      this.$entity.dispose();
    }
    if (this._$_beforeRender) {
      this.$scene.unregisterBeforeRender(this._$_beforeRender);
    }
    if (this._$_afterRender) {
      this.$scene.unregisterAfterRender(this._$_afterRender);
    }
  },
  render: function render(createElement) {
    return createElement('div', this.$slots.default);
  }
};

var TYPES = {
  BOX: 'box',
  CYLINDER: 'cylinder',
  HEIGHTMAP: 'heightmap',
  MESH: 'mesh',
  PARTICLE: 'particle',
  PLANE: 'plane',
  SPHERE: 'sphere'
};
var AbstractPhysics = {
  mixins: [AbstractEntity],
  inject: {
    gravity: {
      from: 'SceneGravity',
      default: new Vector3(0, -9.81, 0)
    }
  },
  props: {
    type: {
      validator: function validator(value) {
        return Object.values(TYPES).includes(value);
      },
      default: Object.values(TYPES)[0]
    },
    mass: {
      type: Number,
      default: 0
    },
    friction: {
      type: Number,
      default: 0.2
    },
    restitution: {
      type: Number,
      default: 0.2
    },
    options: {
      type: Object,
      default: undefined
    },
    ignoreParent: {
      type: Boolean,
      default: false
    },
    bidirectional: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    impostor: function impostor() {
      return PhysicsImpostor["".concat(capitalize(this.type), "Impostor")];
    }
  },
  methods: {
    create: function create() {
      var options = {
        mass: this.mass,
        restitution: this.restitution,
        friction: this.friction
      };
      if (this.options) {
        options.nativeOptions = this.options;
      }
      if (this.ignoreParent) {
        options.ignoreParent = true;
      }
      if (!this.bidirectional) {
        options.disableBidirectionalTransformation = true;
      }
      this.$replace(new PhysicsImpostor(this._$_parent, this.impostor, options, this.$scene));
    }
  },
  watch: {
    type: function type() {
      this.create();
    },
    mass: function mass() {
      this.$entity.setMass(this.mass);
    },
    friction: function friction() {
      this.$entity.setParam('friction', this.friction);
    },
    restitution: function restitution() {
      this.$entity.setParam('restitution', this.restitution);
    },
    options: {
      handler: function handler() {
        this.$entity.setParam('nativeOptions', this.options);
      },
      deep: true
    },
    ignoreParent: function ignoreParent() {
      this.$entity.setParam('ignoreParent', this.ignoreParent);
    },
    disableBidirectionalTransformation: function disableBidirectionalTransformation() {
      this.$entity.setParam('disableBidirectionalTransformation', !this.bidirectional);
    }
  },
  onScene: function onScene(_ref) {
    var scene = _ref.scene;
    if (!scene.getPhysicsEngine()) {
      scene.enablePhysics(this.gravity, this.getPhysicsPlugin());
    }
  },
  onParent: function onParent() {
    this.create();
  }
};

var Physics = {
  mixins: [AbstractPhysics],
  methods: {
    getPhysicsPlugin: function getPhysicsPlugin() {
      return new CannonJSPlugin(undefined, undefined, cannon);
    }
  }
};

if (Number.EPSILON === undefined) {
  Number.EPSILON = Math.pow(2, -52);
}
if (Math.sign === undefined) {
  Math.sign = function (x) {
    return x < 0 ? -1 : x > 0 ? 1 : +x;
  };
}
if (Function.prototype.name === undefined) {
  Object.defineProperty(Function.prototype, 'name', {
    get: function () {
      return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1];
    }
  });
}
if (Object.assign === undefined) {
  (function () {
    Object.assign = function (target) {
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
      var output = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null) {
          for (var nextKey in source) {
            if (Object.prototype.hasOwnProperty.call(source, nextKey)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
      }
      return output;
    };
  })();
}
var REVISION = '1.0.9';
var BR_NULL = 0;
var BR_BRUTE_FORCE = 1;
var BR_SWEEP_AND_PRUNE = 2;
var BR_BOUNDING_VOLUME_TREE = 3;
var BODY_NULL = 0;
var BODY_DYNAMIC = 1;
var BODY_STATIC = 2;
var BODY_KINEMATIC = 3;
var BODY_GHOST = 4;
var SHAPE_NULL = 0;
var SHAPE_SPHERE = 1;
var SHAPE_BOX = 2;
var SHAPE_CYLINDER = 3;
var SHAPE_PLANE = 4;
var SHAPE_PARTICLE = 5;
var SHAPE_TETRA = 6;
var JOINT_NULL = 0;
var JOINT_DISTANCE = 1;
var JOINT_BALL_AND_SOCKET = 2;
var JOINT_HINGE = 3;
var JOINT_WHEEL = 4;
var JOINT_SLIDER = 5;
var JOINT_PRISMATIC = 6;
var AABB_PROX = 0.005;
var _Math = {
  sqrt: Math.sqrt,
  abs: Math.abs,
  floor: Math.floor,
  cos: Math.cos,
  sin: Math.sin,
  acos: Math.acos,
  asin: Math.asin,
  atan2: Math.atan2,
  round: Math.round,
  pow: Math.pow,
  max: Math.max,
  min: Math.min,
  random: Math.random,
  degtorad: 0.0174532925199432957,
  radtodeg: 57.295779513082320876,
  PI: 3.141592653589793,
  TwoPI: 6.283185307179586,
  PI90: 1.570796326794896,
  PI270: 4.712388980384689,
  INF: Infinity,
  EPZ: 0.00001,
  EPZ2: 0.000001,
  lerp: function (x, y, t) {
    return (1 - t) * x + t * y;
  },
  randInt: function (low, high) {
    return low + _Math.floor(_Math.random() * (high - low + 1));
  },
  rand: function (low, high) {
    return low + _Math.random() * (high - low);
  },
  generateUUID: function () {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = new Array(36);
    var rnd = 0,
        r;
    return function generateUUID() {
      for (var i = 0; i < 36; i++) {
        if (i === 8 || i === 13 || i === 18 || i === 23) {
          uuid[i] = '-';
        } else if (i === 14) {
          uuid[i] = '4';
        } else {
          if (rnd <= 0x02) rnd = 0x2000000 + Math.random() * 0x1000000 | 0;
          r = rnd & 0xf;
          rnd = rnd >> 4;
          uuid[i] = chars[i === 19 ? r & 0x3 | 0x8 : r];
        }
      }
      return uuid.join('');
    };
  }(),
  int: function (x) {
    return _Math.floor(x);
  },
  fix: function (x, n) {
    return x.toFixed(n || 3, 10);
  },
  clamp: function (value, min, max) {
    return _Math.max(min, _Math.min(max, value));
  },
  distance: function (p1, p2) {
    var xd = p2[0] - p1[0];
    var yd = p2[1] - p1[1];
    var zd = p2[2] - p1[2];
    return _Math.sqrt(xd * xd + yd * yd + zd * zd);
  },
  acosClamp: function (cos) {
    if (cos > 1) return 0;else if (cos < -1) return _Math.PI;else return _Math.acos(cos);
  },
  distanceVector: function (v1, v2) {
    var xd = v1.x - v2.x;
    var yd = v1.y - v2.y;
    var zd = v1.z - v2.z;
    return xd * xd + yd * yd + zd * zd;
  },
  dotVectors: function (a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
  }
};
function printError(clazz, msg) {
  console.error("[OIMO] " + clazz + ": " + msg);
}
function InfoDisplay(world) {
  this.parent = world;
  this.infos = new Float32Array(13);
  this.f = [0, 0, 0];
  this.times = [0, 0, 0, 0];
  this.broadPhase = this.parent.broadPhaseType;
  this.version = REVISION;
  this.fps = 0;
  this.tt = 0;
  this.broadPhaseTime = 0;
  this.narrowPhaseTime = 0;
  this.solvingTime = 0;
  this.totalTime = 0;
  this.updateTime = 0;
  this.MaxBroadPhaseTime = 0;
  this.MaxNarrowPhaseTime = 0;
  this.MaxSolvingTime = 0;
  this.MaxTotalTime = 0;
  this.MaxUpdateTime = 0;
}
Object.assign(InfoDisplay.prototype, {
  setTime: function (n) {
    this.times[n || 0] = performance.now();
  },
  resetMax: function () {
    this.MaxBroadPhaseTime = 0;
    this.MaxNarrowPhaseTime = 0;
    this.MaxSolvingTime = 0;
    this.MaxTotalTime = 0;
    this.MaxUpdateTime = 0;
  },
  calcBroadPhase: function () {
    this.setTime(2);
    this.broadPhaseTime = this.times[2] - this.times[1];
  },
  calcNarrowPhase: function () {
    this.setTime(3);
    this.narrowPhaseTime = this.times[3] - this.times[2];
  },
  calcEnd: function () {
    this.setTime(2);
    this.solvingTime = this.times[2] - this.times[1];
    this.totalTime = this.times[2] - this.times[0];
    this.updateTime = this.totalTime - (this.broadPhaseTime + this.narrowPhaseTime + this.solvingTime);
    if (this.tt === 100) this.resetMax();
    if (this.tt > 100) {
      if (this.broadPhaseTime > this.MaxBroadPhaseTime) this.MaxBroadPhaseTime = this.broadPhaseTime;
      if (this.narrowPhaseTime > this.MaxNarrowPhaseTime) this.MaxNarrowPhaseTime = this.narrowPhaseTime;
      if (this.solvingTime > this.MaxSolvingTime) this.MaxSolvingTime = this.solvingTime;
      if (this.totalTime > this.MaxTotalTime) this.MaxTotalTime = this.totalTime;
      if (this.updateTime > this.MaxUpdateTime) this.MaxUpdateTime = this.updateTime;
    }
    this.upfps();
    this.tt++;
    if (this.tt > 500) this.tt = 0;
  },
  upfps: function () {
    this.f[1] = Date.now();
    if (this.f[1] - 1000 > this.f[0]) {
      this.f[0] = this.f[1];
      this.fps = this.f[2];
      this.f[2] = 0;
    }
    this.f[2]++;
  },
  show: function () {
    var info = ["Oimo.js " + this.version + "<br>", this.broadPhase + "<br><br>", "FPS: " + this.fps + " fps<br><br>", "rigidbody " + this.parent.numRigidBodies + "<br>", "contact &nbsp;&nbsp;" + this.parent.numContacts + "<br>", "ct-point &nbsp;" + this.parent.numContactPoints + "<br>", "paircheck " + this.parent.broadPhase.numPairChecks + "<br>", "island &nbsp;&nbsp;&nbsp;" + this.parent.numIslands + "<br><br>", "Time in milliseconds<br><br>", "broadphase &nbsp;" + _Math.fix(this.broadPhaseTime) + " | " + _Math.fix(this.MaxBroadPhaseTime) + "<br>", "narrowphase " + _Math.fix(this.narrowPhaseTime) + " | " + _Math.fix(this.MaxNarrowPhaseTime) + "<br>", "solving &nbsp;&nbsp;&nbsp;&nbsp;" + _Math.fix(this.solvingTime) + " | " + _Math.fix(this.MaxSolvingTime) + "<br>", "total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + _Math.fix(this.totalTime) + " | " + _Math.fix(this.MaxTotalTime) + "<br>", "updating &nbsp;&nbsp;&nbsp;" + _Math.fix(this.updateTime) + " | " + _Math.fix(this.MaxUpdateTime) + "<br>"].join("\n");
    return info;
  },
  toArray: function () {
    this.infos[0] = this.parent.broadPhase.types;
    this.infos[1] = this.parent.numRigidBodies;
    this.infos[2] = this.parent.numContacts;
    this.infos[3] = this.parent.broadPhase.numPairChecks;
    this.infos[4] = this.parent.numContactPoints;
    this.infos[5] = this.parent.numIslands;
    this.infos[6] = this.broadPhaseTime;
    this.infos[7] = this.narrowPhaseTime;
    this.infos[8] = this.solvingTime;
    this.infos[9] = this.updateTime;
    this.infos[10] = this.totalTime;
    this.infos[11] = this.fps;
    return this.infos;
  }
});
function Vec3(x, y, z) {
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
}
Object.assign(Vec3.prototype, {
  Vec3: true,
  set: function (x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  },
  add: function (a, b) {
    if (b !== undefined) return this.addVectors(a, b);
    this.x += a.x;
    this.y += a.y;
    this.z += a.z;
    return this;
  },
  addVectors: function (a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    this.z = a.z + b.z;
    return this;
  },
  addEqual: function (v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
  },
  sub: function (a, b) {
    if (b !== undefined) return this.subVectors(a, b);
    this.x -= a.x;
    this.y -= a.y;
    this.z -= a.z;
    return this;
  },
  subVectors: function (a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    this.z = a.z - b.z;
    return this;
  },
  subEqual: function (v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    return this;
  },
  scale: function (v, s) {
    this.x = v.x * s;
    this.y = v.y * s;
    this.z = v.z * s;
    return this;
  },
  scaleEqual: function (s) {
    this.x *= s;
    this.y *= s;
    this.z *= s;
    return this;
  },
  multiply: function (v) {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
    return this;
  },
  multiplyScalar: function (s) {
    this.x *= s;
    this.y *= s;
    this.z *= s;
    return this;
  },
  addScaledVector: function (v, s) {
    this.x += v.x * s;
    this.y += v.y * s;
    this.z += v.z * s;
    return this;
  },
  subScaledVector: function (v, s) {
    this.x -= v.x * s;
    this.y -= v.y * s;
    this.z -= v.z * s;
    return this;
  },
  cross: function (a, b) {
    if (b !== undefined) return this.crossVectors(a, b);
    var x = this.x,
        y = this.y,
        z = this.z;
    this.x = y * a.z - z * a.y;
    this.y = z * a.x - x * a.z;
    this.z = x * a.y - y * a.x;
    return this;
  },
  crossVectors: function (a, b) {
    var ax = a.x,
        ay = a.y,
        az = a.z;
    var bx = b.x,
        by = b.y,
        bz = b.z;
    this.x = ay * bz - az * by;
    this.y = az * bx - ax * bz;
    this.z = ax * by - ay * bx;
    return this;
  },
  tangent: function (a) {
    var ax = a.x,
        ay = a.y,
        az = a.z;
    this.x = ay * ax - az * az;
    this.y = -az * ay - ax * ax;
    this.z = ax * az + ay * ay;
    return this;
  },
  invert: function (v) {
    this.x = -v.x;
    this.y = -v.y;
    this.z = -v.z;
    return this;
  },
  negate: function () {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  },
  dot: function (v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  },
  addition: function () {
    return this.x + this.y + this.z;
  },
  lengthSq: function () {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  },
  length: function () {
    return _Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  },
  copy: function (v) {
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;
    return this;
  },
  applyMatrix3: function (m, transpose) {
    var x = this.x,
        y = this.y,
        z = this.z;
    var e = m.elements;
    if (transpose) {
      this.x = e[0] * x + e[1] * y + e[2] * z;
      this.y = e[3] * x + e[4] * y + e[5] * z;
      this.z = e[6] * x + e[7] * y + e[8] * z;
    } else {
      this.x = e[0] * x + e[3] * y + e[6] * z;
      this.y = e[1] * x + e[4] * y + e[7] * z;
      this.z = e[2] * x + e[5] * y + e[8] * z;
    }
    return this;
  },
  applyQuaternion: function (q) {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var qx = q.x;
    var qy = q.y;
    var qz = q.z;
    var qw = q.w;
    var ix = qw * x + qy * z - qz * y;
    var iy = qw * y + qz * x - qx * z;
    var iz = qw * z + qx * y - qy * x;
    var iw = -qx * x - qy * y - qz * z;
    this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    return this;
  },
  testZero: function () {
    if (this.x !== 0 || this.y !== 0 || this.z !== 0) return true;else return false;
  },
  testDiff: function (v) {
    return this.equals(v) ? false : true;
  },
  equals: function (v) {
    return v.x === this.x && v.y === this.y && v.z === this.z;
  },
  clone: function () {
    return new this.constructor(this.x, this.y, this.z);
  },
  toString: function () {
    return "Vec3[" + this.x.toFixed(4) + ", " + this.y.toFixed(4) + ", " + this.z.toFixed(4) + "]";
  },
  multiplyScalar: function (scalar) {
    if (isFinite(scalar)) {
      this.x *= scalar;
      this.y *= scalar;
      this.z *= scalar;
    } else {
      this.x = 0;
      this.y = 0;
      this.z = 0;
    }
    return this;
  },
  divideScalar: function (scalar) {
    return this.multiplyScalar(1 / scalar);
  },
  normalize: function () {
    return this.divideScalar(this.length());
  },
  toArray: function (array, offset) {
    if (offset === undefined) offset = 0;
    array[offset] = this.x;
    array[offset + 1] = this.y;
    array[offset + 2] = this.z;
  },
  fromArray: function (array, offset) {
    if (offset === undefined) offset = 0;
    this.x = array[offset];
    this.y = array[offset + 1];
    this.z = array[offset + 2];
    return this;
  }
});
function Quat(x, y, z, w) {
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
  this.w = w !== undefined ? w : 1;
}
Object.assign(Quat.prototype, {
  Quat: true,
  set: function (x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    return this;
  },
  addTime: function (v, t) {
    var ax = v.x,
        ay = v.y,
        az = v.z;
    var qw = this.w,
        qx = this.x,
        qy = this.y,
        qz = this.z;
    t *= 0.5;
    this.x += t * (ax * qw + ay * qz - az * qy);
    this.y += t * (ay * qw + az * qx - ax * qz);
    this.z += t * (az * qw + ax * qy - ay * qx);
    this.w += t * (-ax * qx - ay * qy - az * qz);
    this.normalize();
    return this;
  },
  multiply: function (q, p) {
    if (p !== undefined) return this.multiplyQuaternions(q, p);
    return this.multiplyQuaternions(this, q);
  },
  multiplyQuaternions: function (a, b) {
    var qax = a.x,
        qay = a.y,
        qaz = a.z,
        qaw = a.w;
    var qbx = b.x,
        qby = b.y,
        qbz = b.z,
        qbw = b.w;
    this.x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
    this.y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
    this.z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
    this.w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;
    return this;
  },
  setFromUnitVectors: function (v1, v2) {
    var vx = new Vec3();
    var r = v1.dot(v2) + 1;
    if (r < _Math.EPS2) {
      r = 0;
      if (_Math.abs(v1.x) > _Math.abs(v1.z)) vx.set(-v1.y, v1.x, 0);else vx.set(0, -v1.z, v1.y);
    } else {
      vx.crossVectors(v1, v2);
    }
    this._x = vx.x;
    this._y = vx.y;
    this._z = vx.z;
    this._w = r;
    return this.normalize();
  },
  arc: function (v1, v2) {
    var x1 = v1.x;
    var y1 = v1.y;
    var z1 = v1.z;
    var x2 = v2.x;
    var y2 = v2.y;
    var z2 = v2.z;
    var d = x1 * x2 + y1 * y2 + z1 * z2;
    if (d == -1) {
      x2 = y1 * x1 - z1 * z1;
      y2 = -z1 * y1 - x1 * x1;
      z2 = x1 * z1 + y1 * y1;
      d = 1 / _Math.sqrt(x2 * x2 + y2 * y2 + z2 * z2);
      this.w = 0;
      this.x = x2 * d;
      this.y = y2 * d;
      this.z = z2 * d;
      return this;
    }
    var cx = y1 * z2 - z1 * y2;
    var cy = z1 * x2 - x1 * z2;
    var cz = x1 * y2 - y1 * x2;
    this.w = _Math.sqrt((1 + d) * 0.5);
    d = 0.5 / this.w;
    this.x = cx * d;
    this.y = cy * d;
    this.z = cz * d;
    return this;
  },
  normalize: function () {
    var l = this.length();
    if (l === 0) {
      this.set(0, 0, 0, 1);
    } else {
      l = 1 / l;
      this.x = this.x * l;
      this.y = this.y * l;
      this.z = this.z * l;
      this.w = this.w * l;
    }
    return this;
  },
  inverse: function () {
    return this.conjugate().normalize();
  },
  invert: function (q) {
    this.x = q.x;
    this.y = q.y;
    this.z = q.z;
    this.w = q.w;
    this.conjugate().normalize();
    return this;
  },
  conjugate: function () {
    this.x *= -1;
    this.y *= -1;
    this.z *= -1;
    return this;
  },
  length: function () {
    return _Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  },
  lengthSq: function () {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  },
  copy: function (q) {
    this.x = q.x;
    this.y = q.y;
    this.z = q.z;
    this.w = q.w;
    return this;
  },
  clone: function (q) {
    return new Quat(this.x, this.y, this.z, this.w);
  },
  testDiff: function (q) {
    return this.equals(q) ? false : true;
  },
  equals: function (q) {
    return this.x === q.x && this.y === q.y && this.z === q.z && this.w === q.w;
  },
  toString: function () {
    return "Quat[" + this.x.toFixed(4) + ", (" + this.y.toFixed(4) + ", " + this.z.toFixed(4) + ", " + this.w.toFixed(4) + ")]";
  },
  setFromEuler: function (x, y, z) {
    var c1 = Math.cos(x * 0.5);
    var c2 = Math.cos(y * 0.5);
    var c3 = Math.cos(z * 0.5);
    var s1 = Math.sin(x * 0.5);
    var s2 = Math.sin(y * 0.5);
    var s3 = Math.sin(z * 0.5);
    this.x = s1 * c2 * c3 + c1 * s2 * s3;
    this.y = c1 * s2 * c3 - s1 * c2 * s3;
    this.z = c1 * c2 * s3 + s1 * s2 * c3;
    this.w = c1 * c2 * c3 - s1 * s2 * s3;
    return this;
  },
  setFromAxis: function (axis, rad) {
    axis.normalize();
    rad = rad * 0.5;
    var s = _Math.sin(rad);
    this.x = s * axis.x;
    this.y = s * axis.y;
    this.z = s * axis.z;
    this.w = _Math.cos(rad);
    return this;
  },
  setFromMat33: function (m) {
    var trace = m[0] + m[4] + m[8];
    var s;
    if (trace > 0) {
      s = _Math.sqrt(trace + 1.0);
      this.w = 0.5 / s;
      s = 0.5 / s;
      this.x = (m[5] - m[7]) * s;
      this.y = (m[6] - m[2]) * s;
      this.z = (m[1] - m[3]) * s;
    } else {
      var out = [];
      var i = 0;
      if (m[4] > m[0]) i = 1;
      if (m[8] > m[i * 3 + i]) i = 2;
      var j = (i + 1) % 3;
      var k = (i + 2) % 3;
      s = _Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
      out[i] = 0.5 * fRoot;
      s = 0.5 / fRoot;
      this.w = (m[j * 3 + k] - m[k * 3 + j]) * s;
      out[j] = (m[j * 3 + i] + m[i * 3 + j]) * s;
      out[k] = (m[k * 3 + i] + m[i * 3 + k]) * s;
      this.x = out[1];
      this.y = out[2];
      this.z = out[3];
    }
    return this;
  },
  toArray: function (array, offset) {
    offset = offset || 0;
    array[offset] = this.x;
    array[offset + 1] = this.y;
    array[offset + 2] = this.z;
    array[offset + 3] = this.w;
  },
  fromArray: function (array, offset) {
    offset = offset || 0;
    this.set(array[offset], array[offset + 1], array[offset + 2], array[offset + 3]);
    return this;
  }
});
function Mat33(e00, e01, e02, e10, e11, e12, e20, e21, e22) {
  this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  if (arguments.length > 0) {
    console.error('OIMO.Mat33: the constructor no longer reads arguments. use .set() instead.');
  }
}
Object.assign(Mat33.prototype, {
  Mat33: true,
  set: function (e00, e01, e02, e10, e11, e12, e20, e21, e22) {
    var te = this.elements;
    te[0] = e00;
    te[1] = e01;
    te[2] = e02;
    te[3] = e10;
    te[4] = e11;
    te[5] = e12;
    te[6] = e20;
    te[7] = e21;
    te[8] = e22;
    return this;
  },
  add: function (a, b) {
    if (b !== undefined) return this.addMatrixs(a, b);
    var e = this.elements,
        te = a.elements;
    e[0] += te[0];
    e[1] += te[1];
    e[2] += te[2];
    e[3] += te[3];
    e[4] += te[4];
    e[5] += te[5];
    e[6] += te[6];
    e[7] += te[7];
    e[8] += te[8];
    return this;
  },
  addMatrixs: function (a, b) {
    var te = this.elements,
        tem1 = a.elements,
        tem2 = b.elements;
    te[0] = tem1[0] + tem2[0];
    te[1] = tem1[1] + tem2[1];
    te[2] = tem1[2] + tem2[2];
    te[3] = tem1[3] + tem2[3];
    te[4] = tem1[4] + tem2[4];
    te[5] = tem1[5] + tem2[5];
    te[6] = tem1[6] + tem2[6];
    te[7] = tem1[7] + tem2[7];
    te[8] = tem1[8] + tem2[8];
    return this;
  },
  addEqual: function (m) {
    var te = this.elements,
        tem = m.elements;
    te[0] += tem[0];
    te[1] += tem[1];
    te[2] += tem[2];
    te[3] += tem[3];
    te[4] += tem[4];
    te[5] += tem[5];
    te[6] += tem[6];
    te[7] += tem[7];
    te[8] += tem[8];
    return this;
  },
  sub: function (a, b) {
    if (b !== undefined) return this.subMatrixs(a, b);
    var e = this.elements,
        te = a.elements;
    e[0] -= te[0];
    e[1] -= te[1];
    e[2] -= te[2];
    e[3] -= te[3];
    e[4] -= te[4];
    e[5] -= te[5];
    e[6] -= te[6];
    e[7] -= te[7];
    e[8] -= te[8];
    return this;
  },
  subMatrixs: function (a, b) {
    var te = this.elements,
        tem1 = a.elements,
        tem2 = b.elements;
    te[0] = tem1[0] - tem2[0];
    te[1] = tem1[1] - tem2[1];
    te[2] = tem1[2] - tem2[2];
    te[3] = tem1[3] - tem2[3];
    te[4] = tem1[4] - tem2[4];
    te[5] = tem1[5] - tem2[5];
    te[6] = tem1[6] - tem2[6];
    te[7] = tem1[7] - tem2[7];
    te[8] = tem1[8] - tem2[8];
    return this;
  },
  subEqual: function (m) {
    var te = this.elements,
        tem = m.elements;
    te[0] -= tem[0];
    te[1] -= tem[1];
    te[2] -= tem[2];
    te[3] -= tem[3];
    te[4] -= tem[4];
    te[5] -= tem[5];
    te[6] -= tem[6];
    te[7] -= tem[7];
    te[8] -= tem[8];
    return this;
  },
  scale: function (m, s) {
    var te = this.elements,
        tm = m.elements;
    te[0] = tm[0] * s;
    te[1] = tm[1] * s;
    te[2] = tm[2] * s;
    te[3] = tm[3] * s;
    te[4] = tm[4] * s;
    te[5] = tm[5] * s;
    te[6] = tm[6] * s;
    te[7] = tm[7] * s;
    te[8] = tm[8] * s;
    return this;
  },
  scaleEqual: function (s) {
    var te = this.elements;
    te[0] *= s;
    te[1] *= s;
    te[2] *= s;
    te[3] *= s;
    te[4] *= s;
    te[5] *= s;
    te[6] *= s;
    te[7] *= s;
    te[8] *= s;
    return this;
  },
  multiplyMatrices: function (m1, m2, transpose) {
    if (transpose) m2 = m2.clone().transpose();
    var te = this.elements;
    var tm1 = m1.elements;
    var tm2 = m2.elements;
    var a0 = tm1[0],
        a3 = tm1[3],
        a6 = tm1[6];
    var a1 = tm1[1],
        a4 = tm1[4],
        a7 = tm1[7];
    var a2 = tm1[2],
        a5 = tm1[5],
        a8 = tm1[8];
    var b0 = tm2[0],
        b3 = tm2[3],
        b6 = tm2[6];
    var b1 = tm2[1],
        b4 = tm2[4],
        b7 = tm2[7];
    var b2 = tm2[2],
        b5 = tm2[5],
        b8 = tm2[8];
    te[0] = a0 * b0 + a1 * b3 + a2 * b6;
    te[1] = a0 * b1 + a1 * b4 + a2 * b7;
    te[2] = a0 * b2 + a1 * b5 + a2 * b8;
    te[3] = a3 * b0 + a4 * b3 + a5 * b6;
    te[4] = a3 * b1 + a4 * b4 + a5 * b7;
    te[5] = a3 * b2 + a4 * b5 + a5 * b8;
    te[6] = a6 * b0 + a7 * b3 + a8 * b6;
    te[7] = a6 * b1 + a7 * b4 + a8 * b7;
    te[8] = a6 * b2 + a7 * b5 + a8 * b8;
    return this;
  },
  transpose: function (m) {
    if (m !== undefined) {
      var a = m.elements;
      this.set(a[0], a[3], a[6], a[1], a[4], a[7], a[2], a[5], a[8]);
      return this;
    }
    var te = this.elements;
    var a01 = te[1],
        a02 = te[2],
        a12 = te[5];
    te[1] = te[3];
    te[2] = te[6];
    te[3] = a01;
    te[5] = te[7];
    te[6] = a02;
    te[7] = a12;
    return this;
  },
  setQuat: function (q) {
    var te = this.elements;
    var x = q.x,
        y = q.y,
        z = q.z,
        w = q.w;
    var x2 = x + x,
        y2 = y + y,
        z2 = z + z;
    var xx = x * x2,
        xy = x * y2,
        xz = x * z2;
    var yy = y * y2,
        yz = y * z2,
        zz = z * z2;
    var wx = w * x2,
        wy = w * y2,
        wz = w * z2;
    te[0] = 1 - (yy + zz);
    te[1] = xy - wz;
    te[2] = xz + wy;
    te[3] = xy + wz;
    te[4] = 1 - (xx + zz);
    te[5] = yz - wx;
    te[6] = xz - wy;
    te[7] = yz + wx;
    te[8] = 1 - (xx + yy);
    return this;
  },
  invert: function (m) {
    var te = this.elements,
        tm = m.elements,
        a00 = tm[0],
        a10 = tm[3],
        a20 = tm[6],
        a01 = tm[1],
        a11 = tm[4],
        a21 = tm[7],
        a02 = tm[2],
        a12 = tm[5],
        a22 = tm[8],
        b01 = a22 * a11 - a12 * a21,
        b11 = -a22 * a10 + a12 * a20,
        b21 = a21 * a10 - a11 * a20,
        det = a00 * b01 + a01 * b11 + a02 * b21;
    if (det === 0) {
      console.log("can't invert matrix, determinant is 0");
      return this.identity();
    }
    det = 1.0 / det;
    te[0] = b01 * det;
    te[1] = (-a22 * a01 + a02 * a21) * det;
    te[2] = (a12 * a01 - a02 * a11) * det;
    te[3] = b11 * det;
    te[4] = (a22 * a00 - a02 * a20) * det;
    te[5] = (-a12 * a00 + a02 * a10) * det;
    te[6] = b21 * det;
    te[7] = (-a21 * a00 + a01 * a20) * det;
    te[8] = (a11 * a00 - a01 * a10) * det;
    return this;
  },
  addOffset: function (m, v) {
    var relX = v.x;
    var relY = v.y;
    var relZ = v.z;
    var te = this.elements;
    te[0] += m * (relY * relY + relZ * relZ);
    te[4] += m * (relX * relX + relZ * relZ);
    te[8] += m * (relX * relX + relY * relY);
    var xy = m * relX * relY;
    var yz = m * relY * relZ;
    var zx = m * relZ * relX;
    te[1] -= xy;
    te[3] -= xy;
    te[2] -= yz;
    te[6] -= yz;
    te[5] -= zx;
    te[7] -= zx;
    return this;
  },
  subOffset: function (m, v) {
    var relX = v.x;
    var relY = v.y;
    var relZ = v.z;
    var te = this.elements;
    te[0] -= m * (relY * relY + relZ * relZ);
    te[4] -= m * (relX * relX + relZ * relZ);
    te[8] -= m * (relX * relX + relY * relY);
    var xy = m * relX * relY;
    var yz = m * relY * relZ;
    var zx = m * relZ * relX;
    te[1] += xy;
    te[3] += xy;
    te[2] += yz;
    te[6] += yz;
    te[5] += zx;
    te[7] += zx;
    return this;
  },
  multiplyScalar: function (s) {
    var te = this.elements;
    te[0] *= s;
    te[3] *= s;
    te[6] *= s;
    te[1] *= s;
    te[4] *= s;
    te[7] *= s;
    te[2] *= s;
    te[5] *= s;
    te[8] *= s;
    return this;
  },
  identity: function () {
    this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
    return this;
  },
  clone: function () {
    return new Mat33().fromArray(this.elements);
  },
  copy: function (m) {
    for (var i = 0; i < 9; i++) this.elements[i] = m.elements[i];
    return this;
  },
  determinant: function () {
    var te = this.elements;
    var a = te[0],
        b = te[1],
        c = te[2],
        d = te[3],
        e = te[4],
        f = te[5],
        g = te[6],
        h = te[7],
        i = te[8];
    return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;
  },
  fromArray: function (array, offset) {
    if (offset === undefined) offset = 0;
    for (var i = 0; i < 9; i++) {
      this.elements[i] = array[i + offset];
    }
    return this;
  },
  toArray: function (array, offset) {
    if (array === undefined) array = [];
    if (offset === undefined) offset = 0;
    var te = this.elements;
    array[offset] = te[0];
    array[offset + 1] = te[1];
    array[offset + 2] = te[2];
    array[offset + 3] = te[3];
    array[offset + 4] = te[4];
    array[offset + 5] = te[5];
    array[offset + 6] = te[6];
    array[offset + 7] = te[7];
    array[offset + 8] = te[8];
    return array;
  }
});
function AABB(minX, maxX, minY, maxY, minZ, maxZ) {
  this.elements = new Float32Array(6);
  var te = this.elements;
  te[0] = minX || 0;
  te[1] = minY || 0;
  te[2] = minZ || 0;
  te[3] = maxX || 0;
  te[4] = maxY || 0;
  te[5] = maxZ || 0;
}
Object.assign(AABB.prototype, {
  AABB: true,
  set: function (minX, maxX, minY, maxY, minZ, maxZ) {
    var te = this.elements;
    te[0] = minX;
    te[3] = maxX;
    te[1] = minY;
    te[4] = maxY;
    te[2] = minZ;
    te[5] = maxZ;
    return this;
  },
  intersectTest: function (aabb) {
    var te = this.elements;
    var ue = aabb.elements;
    return te[0] > ue[3] || te[1] > ue[4] || te[2] > ue[5] || te[3] < ue[0] || te[4] < ue[1] || te[5] < ue[2] ? true : false;
  },
  intersectTestTwo: function (aabb) {
    var te = this.elements;
    var ue = aabb.elements;
    return te[0] < ue[0] || te[1] < ue[1] || te[2] < ue[2] || te[3] > ue[3] || te[4] > ue[4] || te[5] > ue[5] ? true : false;
  },
  clone: function () {
    return new this.constructor().fromArray(this.elements);
  },
  copy: function (aabb, margin) {
    var m = margin || 0;
    var me = aabb.elements;
    this.set(me[0] - m, me[3] + m, me[1] - m, me[4] + m, me[2] - m, me[5] + m);
    return this;
  },
  fromArray: function (array) {
    this.elements.set(array);
    return this;
  },
  combine: function (aabb1, aabb2) {
    var a = aabb1.elements;
    var b = aabb2.elements;
    var te = this.elements;
    te[0] = a[0] < b[0] ? a[0] : b[0];
    te[1] = a[1] < b[1] ? a[1] : b[1];
    te[2] = a[2] < b[2] ? a[2] : b[2];
    te[3] = a[3] > b[3] ? a[3] : b[3];
    te[4] = a[4] > b[4] ? a[4] : b[4];
    te[5] = a[5] > b[5] ? a[5] : b[5];
    return this;
  },
  surfaceArea: function () {
    var te = this.elements;
    var a = te[3] - te[0];
    var h = te[4] - te[1];
    var d = te[5] - te[2];
    return 2 * (a * (h + d) + h * d);
  },
  intersectsWithPoint: function (x, y, z) {
    var te = this.elements;
    return x >= te[0] && x <= te[3] && y >= te[1] && y <= te[4] && z >= te[2] && z <= te[5];
  },
  setFromPoints: function (arr) {
    this.makeEmpty();
    for (var i = 0; i < arr.length; i++) {
      this.expandByPoint(arr[i]);
    }
  },
  makeEmpty: function () {
    this.set(-Infinity, -Infinity, -Infinity, Infinity, Infinity, Infinity);
  },
  expandByPoint: function (pt) {
    var te = this.elements;
    this.set(_Math.min(te[0], pt.x), _Math.min(te[1], pt.y), _Math.min(te[2], pt.z), _Math.max(te[3], pt.x), _Math.max(te[4], pt.y), _Math.max(te[5], pt.z));
  },
  expandByScalar: function (s) {
    var te = this.elements;
    te[0] += -s;
    te[1] += -s;
    te[2] += -s;
    te[3] += s;
    te[4] += s;
    te[5] += s;
  }
});
var count = 0;
function ShapeIdCount() {
  return count++;
}
function Shape(config) {
  this.type = SHAPE_NULL;
  this.id = ShapeIdCount();
  this.prev = null;
  this.next = null;
  this.proxy = null;
  this.parent = null;
  this.contactLink = null;
  this.numContacts = 0;
  this.position = new Vec3();
  this.rotation = new Mat33();
  this.relativePosition = new Vec3().copy(config.relativePosition);
  this.relativeRotation = new Mat33().copy(config.relativeRotation);
  this.aabb = new AABB();
  this.density = config.density;
  this.friction = config.friction;
  this.restitution = config.restitution;
  this.belongsTo = config.belongsTo;
  this.collidesWith = config.collidesWith;
}
Object.assign(Shape.prototype, {
  Shape: true,
  calculateMassInfo: function (out) {
    printError("Shape", "Inheritance error.");
  },
  updateProxy: function () {
    printError("Shape", "Inheritance error.");
  }
});
function Box(config, Width, Height, Depth) {
  Shape.call(this, config);
  this.type = SHAPE_BOX;
  this.width = Width;
  this.height = Height;
  this.depth = Depth;
  this.halfWidth = Width * 0.5;
  this.halfHeight = Height * 0.5;
  this.halfDepth = Depth * 0.5;
  this.dimentions = new Float32Array(18);
  this.elements = new Float32Array(24);
}
Box.prototype = Object.assign(Object.create(Shape.prototype), {
  constructor: Box,
  calculateMassInfo: function (out) {
    var mass = this.width * this.height * this.depth * this.density;
    var divid = 1 / 12;
    out.mass = mass;
    out.inertia.set(mass * (this.height * this.height + this.depth * this.depth) * divid, 0, 0, 0, mass * (this.width * this.width + this.depth * this.depth) * divid, 0, 0, 0, mass * (this.width * this.width + this.height * this.height) * divid);
  },
  updateProxy: function () {
    var te = this.rotation.elements;
    var di = this.dimentions;
    di[0] = te[0];
    di[1] = te[3];
    di[2] = te[6];
    di[3] = te[1];
    di[4] = te[4];
    di[5] = te[7];
    di[6] = te[2];
    di[7] = te[5];
    di[8] = te[8];
    di[9] = te[0] * this.halfWidth;
    di[10] = te[3] * this.halfWidth;
    di[11] = te[6] * this.halfWidth;
    di[12] = te[1] * this.halfHeight;
    di[13] = te[4] * this.halfHeight;
    di[14] = te[7] * this.halfHeight;
    di[15] = te[2] * this.halfDepth;
    di[16] = te[5] * this.halfDepth;
    di[17] = te[8] * this.halfDepth;
    var wx = di[9];
    var wy = di[10];
    var wz = di[11];
    var hx = di[12];
    var hy = di[13];
    var hz = di[14];
    var dx = di[15];
    var dy = di[16];
    var dz = di[17];
    var x = this.position.x;
    var y = this.position.y;
    var z = this.position.z;
    var v = this.elements;
    v[0] = x + wx + hx + dx;
    v[1] = y + wy + hy + dy;
    v[2] = z + wz + hz + dz;
    v[3] = x + wx + hx - dx;
    v[4] = y + wy + hy - dy;
    v[5] = z + wz + hz - dz;
    v[6] = x + wx - hx + dx;
    v[7] = y + wy - hy + dy;
    v[8] = z + wz - hz + dz;
    v[9] = x + wx - hx - dx;
    v[10] = y + wy - hy - dy;
    v[11] = z + wz - hz - dz;
    v[12] = x - wx + hx + dx;
    v[13] = y - wy + hy + dy;
    v[14] = z - wz + hz + dz;
    v[15] = x - wx + hx - dx;
    v[16] = y - wy + hy - dy;
    v[17] = z - wz + hz - dz;
    v[18] = x - wx - hx + dx;
    v[19] = y - wy - hy + dy;
    v[20] = z - wz - hz + dz;
    v[21] = x - wx - hx - dx;
    v[22] = y - wy - hy - dy;
    v[23] = z - wz - hz - dz;
    var w = di[9] < 0 ? -di[9] : di[9];
    var h = di[10] < 0 ? -di[10] : di[10];
    var d = di[11] < 0 ? -di[11] : di[11];
    w = di[12] < 0 ? w - di[12] : w + di[12];
    h = di[13] < 0 ? h - di[13] : h + di[13];
    d = di[14] < 0 ? d - di[14] : d + di[14];
    w = di[15] < 0 ? w - di[15] : w + di[15];
    h = di[16] < 0 ? h - di[16] : h + di[16];
    d = di[17] < 0 ? d - di[17] : d + di[17];
    var p = AABB_PROX;
    this.aabb.set(this.position.x - w - p, this.position.x + w + p, this.position.y - h - p, this.position.y + h + p, this.position.z - d - p, this.position.z + d + p);
    if (this.proxy != null) this.proxy.update();
  }
});
function Sphere(config, radius) {
  Shape.call(this, config);
  this.type = SHAPE_SPHERE;
  this.radius = radius;
}
Sphere.prototype = Object.assign(Object.create(Shape.prototype), {
  constructor: Sphere,
  volume: function () {
    return _Math.PI * this.radius * 1.333333;
  },
  calculateMassInfo: function (out) {
    var mass = this.volume() * this.radius * this.radius * this.density;
    out.mass = mass;
    var inertia = mass * this.radius * this.radius * 0.4;
    out.inertia.set(inertia, 0, 0, 0, inertia, 0, 0, 0, inertia);
  },
  updateProxy: function () {
    var p = AABB_PROX;
    this.aabb.set(this.position.x - this.radius - p, this.position.x + this.radius + p, this.position.y - this.radius - p, this.position.y + this.radius + p, this.position.z - this.radius - p, this.position.z + this.radius + p);
    if (this.proxy != null) this.proxy.update();
  }
});
function Cylinder(config, radius, height) {
  Shape.call(this, config);
  this.type = SHAPE_CYLINDER;
  this.radius = radius;
  this.height = height;
  this.halfHeight = height * 0.5;
  this.normalDirection = new Vec3();
  this.halfDirection = new Vec3();
}
Cylinder.prototype = Object.assign(Object.create(Shape.prototype), {
  constructor: Cylinder,
  calculateMassInfo: function (out) {
    var rsq = this.radius * this.radius;
    var mass = _Math.PI * rsq * this.height * this.density;
    var inertiaXZ = (0.25 * rsq + 0.0833 * this.height * this.height) * mass;
    var inertiaY = 0.5 * rsq;
    out.mass = mass;
    out.inertia.set(inertiaXZ, 0, 0, 0, inertiaY, 0, 0, 0, inertiaXZ);
  },
  updateProxy: function () {
    var te = this.rotation.elements;
    var len, wx, hy, dz, xx, yy, zz, w, h, d, p;
    xx = te[1] * te[1];
    yy = te[4] * te[4];
    zz = te[7] * te[7];
    this.normalDirection.set(te[1], te[4], te[7]);
    this.halfDirection.scale(this.normalDirection, this.halfHeight);
    wx = 1 - xx;
    len = _Math.sqrt(wx * wx + xx * yy + xx * zz);
    if (len > 0) len = this.radius / len;
    wx *= len;
    hy = 1 - yy;
    len = _Math.sqrt(yy * xx + hy * hy + yy * zz);
    if (len > 0) len = this.radius / len;
    hy *= len;
    dz = 1 - zz;
    len = _Math.sqrt(zz * xx + zz * yy + dz * dz);
    if (len > 0) len = this.radius / len;
    dz *= len;
    w = this.halfDirection.x < 0 ? -this.halfDirection.x : this.halfDirection.x;
    h = this.halfDirection.y < 0 ? -this.halfDirection.y : this.halfDirection.y;
    d = this.halfDirection.z < 0 ? -this.halfDirection.z : this.halfDirection.z;
    w = wx < 0 ? w - wx : w + wx;
    h = hy < 0 ? h - hy : h + hy;
    d = dz < 0 ? d - dz : d + dz;
    p = AABB_PROX;
    this.aabb.set(this.position.x - w - p, this.position.x + w + p, this.position.y - h - p, this.position.y + h + p, this.position.z - d - p, this.position.z + d + p);
    if (this.proxy != null) this.proxy.update();
  }
});
function Plane(config, normal) {
  Shape.call(this, config);
  this.type = SHAPE_PLANE;
  this.normal = new Vec3(0, 1, 0);
}
Plane.prototype = Object.assign(Object.create(Shape.prototype), {
  constructor: Plane,
  volume: function () {
    return Number.MAX_VALUE;
  },
  calculateMassInfo: function (out) {
    out.mass = this.density;
    var inertia = 1;
    out.inertia.set(inertia, 0, 0, 0, inertia, 0, 0, 0, inertia);
  },
  updateProxy: function () {
    var p = AABB_PROX;
    var min = -_Math.INF;
    var max = _Math.INF;
    var n = this.normal;
    this.aabb.set(n.x === -1 ? this.position.x - p : min, n.x === 1 ? this.position.x + p : max, n.y === -1 ? this.position.y - p : min, n.y === 1 ? this.position.y + p : max, n.z === -1 ? this.position.z - p : min, n.z === 1 ? this.position.z + p : max);
    if (this.proxy != null) this.proxy.update();
  }
});
function Particle(config, normal) {
  Shape.call(this, config);
  this.type = SHAPE_PARTICLE;
}
Particle.prototype = Object.assign(Object.create(Shape.prototype), {
  constructor: Particle,
  volume: function () {
    return Number.MAX_VALUE;
  },
  calculateMassInfo: function (out) {
    var inertia = 0;
    out.inertia.set(inertia, 0, 0, 0, inertia, 0, 0, 0, inertia);
  },
  updateProxy: function () {
    var p = 0;
    this.aabb.set(this.position.x - p, this.position.x + p, this.position.y - p, this.position.y + p, this.position.z - p, this.position.z + p);
    if (this.proxy != null) this.proxy.update();
  }
});
function ShapeConfig() {
  this.relativePosition = new Vec3();
  this.relativeRotation = new Mat33();
  this.friction = 0.2;
  this.restitution = 0.2;
  this.density = 1;
  this.belongsTo = 1;
  this.collidesWith = 0xffffffff;
}
function LimitMotor(axis, fixed) {
  fixed = fixed || false;
  this.axis = axis;
  this.angle = 0;
  this.lowerLimit = fixed ? 0 : 1;
  this.upperLimit = 0;
  this.motorSpeed = 0;
  this.maxMotorForce = 0;
  this.frequency = 0;
  this.dampingRatio = 0;
}
Object.assign(LimitMotor.prototype, {
  LimitMotor: true,
  setLimit: function (lowerLimit, upperLimit) {
    this.lowerLimit = lowerLimit;
    this.upperLimit = upperLimit;
  },
  setMotor: function (motorSpeed, maxMotorForce) {
    this.motorSpeed = motorSpeed;
    this.maxMotorForce = maxMotorForce;
  },
  setSpring: function (frequency, dampingRatio) {
    this.frequency = frequency;
    this.dampingRatio = dampingRatio;
  }
});
function Constraint() {
  this.parent = null;
  this.body1 = null;
  this.body2 = null;
  this.addedToIsland = false;
}
Object.assign(Constraint.prototype, {
  Constraint: true,
  preSolve: function (timeStep, invTimeStep) {
    printError("Constraint", "Inheritance error.");
  },
  solve: function () {
    printError("Constraint", "Inheritance error.");
  },
  postSolve: function () {
    printError("Constraint", "Inheritance error.");
  }
});
function JointLink(joint) {
  this.prev = null;
  this.next = null;
  this.body = null;
  this.joint = joint;
}
function Joint(config) {
  Constraint.call(this);
  this.scale = 1;
  this.invScale = 1;
  this.name = "";
  this.id = NaN;
  this.type = JOINT_NULL;
  this.prev = null;
  this.next = null;
  this.body1 = config.body1;
  this.body2 = config.body2;
  this.localAnchorPoint1 = new Vec3().copy(config.localAnchorPoint1);
  this.localAnchorPoint2 = new Vec3().copy(config.localAnchorPoint2);
  this.relativeAnchorPoint1 = new Vec3();
  this.relativeAnchorPoint2 = new Vec3();
  this.anchorPoint1 = new Vec3();
  this.anchorPoint2 = new Vec3();
  this.allowCollision = config.allowCollision;
  this.b1Link = new JointLink(this);
  this.b2Link = new JointLink(this);
}
Joint.prototype = Object.assign(Object.create(Constraint.prototype), {
  constructor: Joint,
  setId: function (n) {
    this.id = i;
  },
  setParent: function (world) {
    this.parent = world;
    this.scale = this.parent.scale;
    this.invScale = this.parent.invScale;
    this.id = this.parent.numJoints;
    if (!this.name) this.name = 'J' + this.id;
  },
  updateAnchorPoints: function () {
    this.relativeAnchorPoint1.copy(this.localAnchorPoint1).applyMatrix3(this.body1.rotation, true);
    this.relativeAnchorPoint2.copy(this.localAnchorPoint2).applyMatrix3(this.body2.rotation, true);
    this.anchorPoint1.add(this.relativeAnchorPoint1, this.body1.position);
    this.anchorPoint2.add(this.relativeAnchorPoint2, this.body2.position);
  },
  attach: function (isX) {
    this.b1Link.body = this.body2;
    this.b2Link.body = this.body1;
    if (isX) {
      this.body1.jointLink.push(this.b1Link);
      this.body2.jointLink.push(this.b2Link);
    } else {
      if (this.body1.jointLink != null) (this.b1Link.next = this.body1.jointLink).prev = this.b1Link;else this.b1Link.next = null;
      this.body1.jointLink = this.b1Link;
      this.body1.numJoints++;
      if (this.body2.jointLink != null) (this.b2Link.next = this.body2.jointLink).prev = this.b2Link;else this.b2Link.next = null;
      this.body2.jointLink = this.b2Link;
      this.body2.numJoints++;
    }
  },
  detach: function (isX) {
    if (isX) {
      this.body1.jointLink.splice(this.body1.jointLink.indexOf(this.b1Link), 1);
      this.body2.jointLink.splice(this.body2.jointLink.indexOf(this.b2Link), 1);
    } else {
      var prev = this.b1Link.prev;
      var next = this.b1Link.next;
      if (prev != null) prev.next = next;
      if (next != null) next.prev = prev;
      if (this.body1.jointLink == this.b1Link) this.body1.jointLink = next;
      this.b1Link.prev = null;
      this.b1Link.next = null;
      this.b1Link.body = null;
      this.body1.numJoints--;
      prev = this.b2Link.prev;
      next = this.b2Link.next;
      if (prev != null) prev.next = next;
      if (next != null) next.prev = prev;
      if (this.body2.jointLink == this.b2Link) this.body2.jointLink = next;
      this.b2Link.prev = null;
      this.b2Link.next = null;
      this.b2Link.body = null;
      this.body2.numJoints--;
    }
    this.b1Link.body = null;
    this.b2Link.body = null;
  },
  awake: function () {
    this.body1.awake();
    this.body2.awake();
  },
  preSolve: function (timeStep, invTimeStep) {},
  solve: function () {},
  postSolve: function () {},
  remove: function () {
    this.dispose();
  },
  dispose: function () {
    this.parent.removeJoint(this);
  },
  getPosition: function () {
    var p1 = new Vec3().scale(this.anchorPoint1, this.scale);
    var p2 = new Vec3().scale(this.anchorPoint2, this.scale);
    return [p1, p2];
  }
});
function LinearConstraint(joint) {
  this.m1 = NaN;
  this.m2 = NaN;
  this.ii1 = null;
  this.ii2 = null;
  this.dd = null;
  this.r1x = NaN;
  this.r1y = NaN;
  this.r1z = NaN;
  this.r2x = NaN;
  this.r2y = NaN;
  this.r2z = NaN;
  this.ax1x = NaN;
  this.ax1y = NaN;
  this.ax1z = NaN;
  this.ay1x = NaN;
  this.ay1y = NaN;
  this.ay1z = NaN;
  this.az1x = NaN;
  this.az1y = NaN;
  this.az1z = NaN;
  this.ax2x = NaN;
  this.ax2y = NaN;
  this.ax2z = NaN;
  this.ay2x = NaN;
  this.ay2y = NaN;
  this.ay2z = NaN;
  this.az2x = NaN;
  this.az2y = NaN;
  this.az2z = NaN;
  this.vel = NaN;
  this.velx = NaN;
  this.vely = NaN;
  this.velz = NaN;
  this.joint = joint;
  this.r1 = joint.relativeAnchorPoint1;
  this.r2 = joint.relativeAnchorPoint2;
  this.p1 = joint.anchorPoint1;
  this.p2 = joint.anchorPoint2;
  this.b1 = joint.body1;
  this.b2 = joint.body2;
  this.l1 = this.b1.linearVelocity;
  this.l2 = this.b2.linearVelocity;
  this.a1 = this.b1.angularVelocity;
  this.a2 = this.b2.angularVelocity;
  this.i1 = this.b1.inverseInertia;
  this.i2 = this.b2.inverseInertia;
  this.impx = 0;
  this.impy = 0;
  this.impz = 0;
}
Object.assign(LinearConstraint.prototype, {
  LinearConstraint: true,
  preSolve: function (timeStep, invTimeStep) {
    this.r1x = this.r1.x;
    this.r1y = this.r1.y;
    this.r1z = this.r1.z;
    this.r2x = this.r2.x;
    this.r2y = this.r2.y;
    this.r2z = this.r2.z;
    this.m1 = this.b1.inverseMass;
    this.m2 = this.b2.inverseMass;
    this.ii1 = this.i1.clone();
    this.ii2 = this.i2.clone();
    var ii1 = this.ii1.elements;
    var ii2 = this.ii2.elements;
    this.ax1x = this.r1z * ii1[1] + -this.r1y * ii1[2];
    this.ax1y = this.r1z * ii1[4] + -this.r1y * ii1[5];
    this.ax1z = this.r1z * ii1[7] + -this.r1y * ii1[8];
    this.ay1x = -this.r1z * ii1[0] + this.r1x * ii1[2];
    this.ay1y = -this.r1z * ii1[3] + this.r1x * ii1[5];
    this.ay1z = -this.r1z * ii1[6] + this.r1x * ii1[8];
    this.az1x = this.r1y * ii1[0] + -this.r1x * ii1[1];
    this.az1y = this.r1y * ii1[3] + -this.r1x * ii1[4];
    this.az1z = this.r1y * ii1[6] + -this.r1x * ii1[7];
    this.ax2x = this.r2z * ii2[1] + -this.r2y * ii2[2];
    this.ax2y = this.r2z * ii2[4] + -this.r2y * ii2[5];
    this.ax2z = this.r2z * ii2[7] + -this.r2y * ii2[8];
    this.ay2x = -this.r2z * ii2[0] + this.r2x * ii2[2];
    this.ay2y = -this.r2z * ii2[3] + this.r2x * ii2[5];
    this.ay2z = -this.r2z * ii2[6] + this.r2x * ii2[8];
    this.az2x = this.r2y * ii2[0] + -this.r2x * ii2[1];
    this.az2y = this.r2y * ii2[3] + -this.r2x * ii2[4];
    this.az2z = this.r2y * ii2[6] + -this.r2x * ii2[7];
    var rxx = this.m1 + this.m2;
    var kk = new Mat33().set(rxx, 0, 0, 0, rxx, 0, 0, 0, rxx);
    var k = kk.elements;
    k[0] += ii1[4] * this.r1z * this.r1z - (ii1[7] + ii1[5]) * this.r1y * this.r1z + ii1[8] * this.r1y * this.r1y;
    k[1] += (ii1[6] * this.r1y + ii1[5] * this.r1x) * this.r1z - ii1[3] * this.r1z * this.r1z - ii1[8] * this.r1x * this.r1y;
    k[2] += (ii1[3] * this.r1y - ii1[4] * this.r1x) * this.r1z - ii1[6] * this.r1y * this.r1y + ii1[7] * this.r1x * this.r1y;
    k[3] += (ii1[2] * this.r1y + ii1[7] * this.r1x) * this.r1z - ii1[1] * this.r1z * this.r1z - ii1[8] * this.r1x * this.r1y;
    k[4] += ii1[0] * this.r1z * this.r1z - (ii1[6] + ii1[2]) * this.r1x * this.r1z + ii1[8] * this.r1x * this.r1x;
    k[5] += (ii1[1] * this.r1x - ii1[0] * this.r1y) * this.r1z - ii1[7] * this.r1x * this.r1x + ii1[6] * this.r1x * this.r1y;
    k[6] += (ii1[1] * this.r1y - ii1[4] * this.r1x) * this.r1z - ii1[2] * this.r1y * this.r1y + ii1[5] * this.r1x * this.r1y;
    k[7] += (ii1[3] * this.r1x - ii1[0] * this.r1y) * this.r1z - ii1[5] * this.r1x * this.r1x + ii1[2] * this.r1x * this.r1y;
    k[8] += ii1[0] * this.r1y * this.r1y - (ii1[3] + ii1[1]) * this.r1x * this.r1y + ii1[4] * this.r1x * this.r1x;
    k[0] += ii2[4] * this.r2z * this.r2z - (ii2[7] + ii2[5]) * this.r2y * this.r2z + ii2[8] * this.r2y * this.r2y;
    k[1] += (ii2[6] * this.r2y + ii2[5] * this.r2x) * this.r2z - ii2[3] * this.r2z * this.r2z - ii2[8] * this.r2x * this.r2y;
    k[2] += (ii2[3] * this.r2y - ii2[4] * this.r2x) * this.r2z - ii2[6] * this.r2y * this.r2y + ii2[7] * this.r2x * this.r2y;
    k[3] += (ii2[2] * this.r2y + ii2[7] * this.r2x) * this.r2z - ii2[1] * this.r2z * this.r2z - ii2[8] * this.r2x * this.r2y;
    k[4] += ii2[0] * this.r2z * this.r2z - (ii2[6] + ii2[2]) * this.r2x * this.r2z + ii2[8] * this.r2x * this.r2x;
    k[5] += (ii2[1] * this.r2x - ii2[0] * this.r2y) * this.r2z - ii2[7] * this.r2x * this.r2x + ii2[6] * this.r2x * this.r2y;
    k[6] += (ii2[1] * this.r2y - ii2[4] * this.r2x) * this.r2z - ii2[2] * this.r2y * this.r2y + ii2[5] * this.r2x * this.r2y;
    k[7] += (ii2[3] * this.r2x - ii2[0] * this.r2y) * this.r2z - ii2[5] * this.r2x * this.r2x + ii2[2] * this.r2x * this.r2y;
    k[8] += ii2[0] * this.r2y * this.r2y - (ii2[3] + ii2[1]) * this.r2x * this.r2y + ii2[4] * this.r2x * this.r2x;
    var inv = 1 / (k[0] * (k[4] * k[8] - k[7] * k[5]) + k[3] * (k[7] * k[2] - k[1] * k[8]) + k[6] * (k[1] * k[5] - k[4] * k[2]));
    this.dd = new Mat33().set(k[4] * k[8] - k[5] * k[7], k[2] * k[7] - k[1] * k[8], k[1] * k[5] - k[2] * k[4], k[5] * k[6] - k[3] * k[8], k[0] * k[8] - k[2] * k[6], k[2] * k[3] - k[0] * k[5], k[3] * k[7] - k[4] * k[6], k[1] * k[6] - k[0] * k[7], k[0] * k[4] - k[1] * k[3]).scaleEqual(inv);
    this.velx = this.p2.x - this.p1.x;
    this.vely = this.p2.y - this.p1.y;
    this.velz = this.p2.z - this.p1.z;
    var len = _Math.sqrt(this.velx * this.velx + this.vely * this.vely + this.velz * this.velz);
    if (len > 0.005) {
      len = (0.005 - len) / len * invTimeStep * 0.05;
      this.velx *= len;
      this.vely *= len;
      this.velz *= len;
    } else {
      this.velx = 0;
      this.vely = 0;
      this.velz = 0;
    }
    this.impx *= 0.95;
    this.impy *= 0.95;
    this.impz *= 0.95;
    this.l1.x += this.impx * this.m1;
    this.l1.y += this.impy * this.m1;
    this.l1.z += this.impz * this.m1;
    this.a1.x += this.impx * this.ax1x + this.impy * this.ay1x + this.impz * this.az1x;
    this.a1.y += this.impx * this.ax1y + this.impy * this.ay1y + this.impz * this.az1y;
    this.a1.z += this.impx * this.ax1z + this.impy * this.ay1z + this.impz * this.az1z;
    this.l2.x -= this.impx * this.m2;
    this.l2.y -= this.impy * this.m2;
    this.l2.z -= this.impz * this.m2;
    this.a2.x -= this.impx * this.ax2x + this.impy * this.ay2x + this.impz * this.az2x;
    this.a2.y -= this.impx * this.ax2y + this.impy * this.ay2y + this.impz * this.az2y;
    this.a2.z -= this.impx * this.ax2z + this.impy * this.ay2z + this.impz * this.az2z;
  },
  solve: function () {
    var d = this.dd.elements;
    var rvx = this.l2.x - this.l1.x + this.a2.y * this.r2z - this.a2.z * this.r2y - this.a1.y * this.r1z + this.a1.z * this.r1y - this.velx;
    var rvy = this.l2.y - this.l1.y + this.a2.z * this.r2x - this.a2.x * this.r2z - this.a1.z * this.r1x + this.a1.x * this.r1z - this.vely;
    var rvz = this.l2.z - this.l1.z + this.a2.x * this.r2y - this.a2.y * this.r2x - this.a1.x * this.r1y + this.a1.y * this.r1x - this.velz;
    var nimpx = rvx * d[0] + rvy * d[1] + rvz * d[2];
    var nimpy = rvx * d[3] + rvy * d[4] + rvz * d[5];
    var nimpz = rvx * d[6] + rvy * d[7] + rvz * d[8];
    this.impx += nimpx;
    this.impy += nimpy;
    this.impz += nimpz;
    this.l1.x += nimpx * this.m1;
    this.l1.y += nimpy * this.m1;
    this.l1.z += nimpz * this.m1;
    this.a1.x += nimpx * this.ax1x + nimpy * this.ay1x + nimpz * this.az1x;
    this.a1.y += nimpx * this.ax1y + nimpy * this.ay1y + nimpz * this.az1y;
    this.a1.z += nimpx * this.ax1z + nimpy * this.ay1z + nimpz * this.az1z;
    this.l2.x -= nimpx * this.m2;
    this.l2.y -= nimpy * this.m2;
    this.l2.z -= nimpz * this.m2;
    this.a2.x -= nimpx * this.ax2x + nimpy * this.ay2x + nimpz * this.az2x;
    this.a2.y -= nimpx * this.ax2y + nimpy * this.ay2y + nimpz * this.az2y;
    this.a2.z -= nimpx * this.ax2z + nimpy * this.ay2z + nimpz * this.az2z;
  }
});
function Rotational3Constraint(joint, limitMotor1, limitMotor2, limitMotor3) {
  this.cfm1 = NaN;
  this.cfm2 = NaN;
  this.cfm3 = NaN;
  this.i1e00 = NaN;
  this.i1e01 = NaN;
  this.i1e02 = NaN;
  this.i1e10 = NaN;
  this.i1e11 = NaN;
  this.i1e12 = NaN;
  this.i1e20 = NaN;
  this.i1e21 = NaN;
  this.i1e22 = NaN;
  this.i2e00 = NaN;
  this.i2e01 = NaN;
  this.i2e02 = NaN;
  this.i2e10 = NaN;
  this.i2e11 = NaN;
  this.i2e12 = NaN;
  this.i2e20 = NaN;
  this.i2e21 = NaN;
  this.i2e22 = NaN;
  this.ax1 = NaN;
  this.ay1 = NaN;
  this.az1 = NaN;
  this.ax2 = NaN;
  this.ay2 = NaN;
  this.az2 = NaN;
  this.ax3 = NaN;
  this.ay3 = NaN;
  this.az3 = NaN;
  this.a1x1 = NaN;
  this.a1y1 = NaN;
  this.a1z1 = NaN;
  this.a2x1 = NaN;
  this.a2y1 = NaN;
  this.a2z1 = NaN;
  this.a1x2 = NaN;
  this.a1y2 = NaN;
  this.a1z2 = NaN;
  this.a2x2 = NaN;
  this.a2y2 = NaN;
  this.a2z2 = NaN;
  this.a1x3 = NaN;
  this.a1y3 = NaN;
  this.a1z3 = NaN;
  this.a2x3 = NaN;
  this.a2y3 = NaN;
  this.a2z3 = NaN;
  this.lowerLimit1 = NaN;
  this.upperLimit1 = NaN;
  this.limitVelocity1 = NaN;
  this.limitState1 = 0;
  this.enableMotor1 = false;
  this.motorSpeed1 = NaN;
  this.maxMotorForce1 = NaN;
  this.maxMotorImpulse1 = NaN;
  this.lowerLimit2 = NaN;
  this.upperLimit2 = NaN;
  this.limitVelocity2 = NaN;
  this.limitState2 = 0;
  this.enableMotor2 = false;
  this.motorSpeed2 = NaN;
  this.maxMotorForce2 = NaN;
  this.maxMotorImpulse2 = NaN;
  this.lowerLimit3 = NaN;
  this.upperLimit3 = NaN;
  this.limitVelocity3 = NaN;
  this.limitState3 = 0;
  this.enableMotor3 = false;
  this.motorSpeed3 = NaN;
  this.maxMotorForce3 = NaN;
  this.maxMotorImpulse3 = NaN;
  this.k00 = NaN;
  this.k01 = NaN;
  this.k02 = NaN;
  this.k10 = NaN;
  this.k11 = NaN;
  this.k12 = NaN;
  this.k20 = NaN;
  this.k21 = NaN;
  this.k22 = NaN;
  this.kv00 = NaN;
  this.kv11 = NaN;
  this.kv22 = NaN;
  this.dv00 = NaN;
  this.dv11 = NaN;
  this.dv22 = NaN;
  this.d00 = NaN;
  this.d01 = NaN;
  this.d02 = NaN;
  this.d10 = NaN;
  this.d11 = NaN;
  this.d12 = NaN;
  this.d20 = NaN;
  this.d21 = NaN;
  this.d22 = NaN;
  this.limitMotor1 = limitMotor1;
  this.limitMotor2 = limitMotor2;
  this.limitMotor3 = limitMotor3;
  this.b1 = joint.body1;
  this.b2 = joint.body2;
  this.a1 = this.b1.angularVelocity;
  this.a2 = this.b2.angularVelocity;
  this.i1 = this.b1.inverseInertia;
  this.i2 = this.b2.inverseInertia;
  this.limitImpulse1 = 0;
  this.motorImpulse1 = 0;
  this.limitImpulse2 = 0;
  this.motorImpulse2 = 0;
  this.limitImpulse3 = 0;
  this.motorImpulse3 = 0;
}
Object.assign(Rotational3Constraint.prototype, {
  Rotational3Constraint: true,
  preSolve: function (timeStep, invTimeStep) {
    this.ax1 = this.limitMotor1.axis.x;
    this.ay1 = this.limitMotor1.axis.y;
    this.az1 = this.limitMotor1.axis.z;
    this.ax2 = this.limitMotor2.axis.x;
    this.ay2 = this.limitMotor2.axis.y;
    this.az2 = this.limitMotor2.axis.z;
    this.ax3 = this.limitMotor3.axis.x;
    this.ay3 = this.limitMotor3.axis.y;
    this.az3 = this.limitMotor3.axis.z;
    this.lowerLimit1 = this.limitMotor1.lowerLimit;
    this.upperLimit1 = this.limitMotor1.upperLimit;
    this.motorSpeed1 = this.limitMotor1.motorSpeed;
    this.maxMotorForce1 = this.limitMotor1.maxMotorForce;
    this.enableMotor1 = this.maxMotorForce1 > 0;
    this.lowerLimit2 = this.limitMotor2.lowerLimit;
    this.upperLimit2 = this.limitMotor2.upperLimit;
    this.motorSpeed2 = this.limitMotor2.motorSpeed;
    this.maxMotorForce2 = this.limitMotor2.maxMotorForce;
    this.enableMotor2 = this.maxMotorForce2 > 0;
    this.lowerLimit3 = this.limitMotor3.lowerLimit;
    this.upperLimit3 = this.limitMotor3.upperLimit;
    this.motorSpeed3 = this.limitMotor3.motorSpeed;
    this.maxMotorForce3 = this.limitMotor3.maxMotorForce;
    this.enableMotor3 = this.maxMotorForce3 > 0;
    var ti1 = this.i1.elements;
    var ti2 = this.i2.elements;
    this.i1e00 = ti1[0];
    this.i1e01 = ti1[1];
    this.i1e02 = ti1[2];
    this.i1e10 = ti1[3];
    this.i1e11 = ti1[4];
    this.i1e12 = ti1[5];
    this.i1e20 = ti1[6];
    this.i1e21 = ti1[7];
    this.i1e22 = ti1[8];
    this.i2e00 = ti2[0];
    this.i2e01 = ti2[1];
    this.i2e02 = ti2[2];
    this.i2e10 = ti2[3];
    this.i2e11 = ti2[4];
    this.i2e12 = ti2[5];
    this.i2e20 = ti2[6];
    this.i2e21 = ti2[7];
    this.i2e22 = ti2[8];
    var frequency1 = this.limitMotor1.frequency;
    var frequency2 = this.limitMotor2.frequency;
    var frequency3 = this.limitMotor3.frequency;
    var enableSpring1 = frequency1 > 0;
    var enableSpring2 = frequency2 > 0;
    var enableSpring3 = frequency3 > 0;
    var enableLimit1 = this.lowerLimit1 <= this.upperLimit1;
    var enableLimit2 = this.lowerLimit2 <= this.upperLimit2;
    var enableLimit3 = this.lowerLimit3 <= this.upperLimit3;
    var angle1 = this.limitMotor1.angle;
    if (enableLimit1) {
      if (this.lowerLimit1 == this.upperLimit1) {
        if (this.limitState1 != 0) {
          this.limitState1 = 0;
          this.limitImpulse1 = 0;
        }
        this.limitVelocity1 = this.lowerLimit1 - angle1;
      } else if (angle1 < this.lowerLimit1) {
        if (this.limitState1 != -1) {
          this.limitState1 = -1;
          this.limitImpulse1 = 0;
        }
        this.limitVelocity1 = this.lowerLimit1 - angle1;
      } else if (angle1 > this.upperLimit1) {
        if (this.limitState1 != 1) {
          this.limitState1 = 1;
          this.limitImpulse1 = 0;
        }
        this.limitVelocity1 = this.upperLimit1 - angle1;
      } else {
        this.limitState1 = 2;
        this.limitImpulse1 = 0;
        this.limitVelocity1 = 0;
      }
      if (!enableSpring1) {
        if (this.limitVelocity1 > 0.02) this.limitVelocity1 -= 0.02;else if (this.limitVelocity1 < -0.02) this.limitVelocity1 += 0.02;else this.limitVelocity1 = 0;
      }
    } else {
      this.limitState1 = 2;
      this.limitImpulse1 = 0;
    }
    var angle2 = this.limitMotor2.angle;
    if (enableLimit2) {
      if (this.lowerLimit2 == this.upperLimit2) {
        if (this.limitState2 != 0) {
          this.limitState2 = 0;
          this.limitImpulse2 = 0;
        }
        this.limitVelocity2 = this.lowerLimit2 - angle2;
      } else if (angle2 < this.lowerLimit2) {
        if (this.limitState2 != -1) {
          this.limitState2 = -1;
          this.limitImpulse2 = 0;
        }
        this.limitVelocity2 = this.lowerLimit2 - angle2;
      } else if (angle2 > this.upperLimit2) {
        if (this.limitState2 != 1) {
          this.limitState2 = 1;
          this.limitImpulse2 = 0;
        }
        this.limitVelocity2 = this.upperLimit2 - angle2;
      } else {
        this.limitState2 = 2;
        this.limitImpulse2 = 0;
        this.limitVelocity2 = 0;
      }
      if (!enableSpring2) {
        if (this.limitVelocity2 > 0.02) this.limitVelocity2 -= 0.02;else if (this.limitVelocity2 < -0.02) this.limitVelocity2 += 0.02;else this.limitVelocity2 = 0;
      }
    } else {
      this.limitState2 = 2;
      this.limitImpulse2 = 0;
    }
    var angle3 = this.limitMotor3.angle;
    if (enableLimit3) {
      if (this.lowerLimit3 == this.upperLimit3) {
        if (this.limitState3 != 0) {
          this.limitState3 = 0;
          this.limitImpulse3 = 0;
        }
        this.limitVelocity3 = this.lowerLimit3 - angle3;
      } else if (angle3 < this.lowerLimit3) {
        if (this.limitState3 != -1) {
          this.limitState3 = -1;
          this.limitImpulse3 = 0;
        }
        this.limitVelocity3 = this.lowerLimit3 - angle3;
      } else if (angle3 > this.upperLimit3) {
        if (this.limitState3 != 1) {
          this.limitState3 = 1;
          this.limitImpulse3 = 0;
        }
        this.limitVelocity3 = this.upperLimit3 - angle3;
      } else {
        this.limitState3 = 2;
        this.limitImpulse3 = 0;
        this.limitVelocity3 = 0;
      }
      if (!enableSpring3) {
        if (this.limitVelocity3 > 0.02) this.limitVelocity3 -= 0.02;else if (this.limitVelocity3 < -0.02) this.limitVelocity3 += 0.02;else this.limitVelocity3 = 0;
      }
    } else {
      this.limitState3 = 2;
      this.limitImpulse3 = 0;
    }
    if (this.enableMotor1 && (this.limitState1 != 0 || enableSpring1)) {
      this.maxMotorImpulse1 = this.maxMotorForce1 * timeStep;
    } else {
      this.motorImpulse1 = 0;
      this.maxMotorImpulse1 = 0;
    }
    if (this.enableMotor2 && (this.limitState2 != 0 || enableSpring2)) {
      this.maxMotorImpulse2 = this.maxMotorForce2 * timeStep;
    } else {
      this.motorImpulse2 = 0;
      this.maxMotorImpulse2 = 0;
    }
    if (this.enableMotor3 && (this.limitState3 != 0 || enableSpring3)) {
      this.maxMotorImpulse3 = this.maxMotorForce3 * timeStep;
    } else {
      this.motorImpulse3 = 0;
      this.maxMotorImpulse3 = 0;
    }
    this.a1x1 = this.ax1 * this.i1e00 + this.ay1 * this.i1e01 + this.az1 * this.i1e02;
    this.a1y1 = this.ax1 * this.i1e10 + this.ay1 * this.i1e11 + this.az1 * this.i1e12;
    this.a1z1 = this.ax1 * this.i1e20 + this.ay1 * this.i1e21 + this.az1 * this.i1e22;
    this.a2x1 = this.ax1 * this.i2e00 + this.ay1 * this.i2e01 + this.az1 * this.i2e02;
    this.a2y1 = this.ax1 * this.i2e10 + this.ay1 * this.i2e11 + this.az1 * this.i2e12;
    this.a2z1 = this.ax1 * this.i2e20 + this.ay1 * this.i2e21 + this.az1 * this.i2e22;
    this.a1x2 = this.ax2 * this.i1e00 + this.ay2 * this.i1e01 + this.az2 * this.i1e02;
    this.a1y2 = this.ax2 * this.i1e10 + this.ay2 * this.i1e11 + this.az2 * this.i1e12;
    this.a1z2 = this.ax2 * this.i1e20 + this.ay2 * this.i1e21 + this.az2 * this.i1e22;
    this.a2x2 = this.ax2 * this.i2e00 + this.ay2 * this.i2e01 + this.az2 * this.i2e02;
    this.a2y2 = this.ax2 * this.i2e10 + this.ay2 * this.i2e11 + this.az2 * this.i2e12;
    this.a2z2 = this.ax2 * this.i2e20 + this.ay2 * this.i2e21 + this.az2 * this.i2e22;
    this.a1x3 = this.ax3 * this.i1e00 + this.ay3 * this.i1e01 + this.az3 * this.i1e02;
    this.a1y3 = this.ax3 * this.i1e10 + this.ay3 * this.i1e11 + this.az3 * this.i1e12;
    this.a1z3 = this.ax3 * this.i1e20 + this.ay3 * this.i1e21 + this.az3 * this.i1e22;
    this.a2x3 = this.ax3 * this.i2e00 + this.ay3 * this.i2e01 + this.az3 * this.i2e02;
    this.a2y3 = this.ax3 * this.i2e10 + this.ay3 * this.i2e11 + this.az3 * this.i2e12;
    this.a2z3 = this.ax3 * this.i2e20 + this.ay3 * this.i2e21 + this.az3 * this.i2e22;
    this.k00 = this.ax1 * (this.a1x1 + this.a2x1) + this.ay1 * (this.a1y1 + this.a2y1) + this.az1 * (this.a1z1 + this.a2z1);
    this.k01 = this.ax1 * (this.a1x2 + this.a2x2) + this.ay1 * (this.a1y2 + this.a2y2) + this.az1 * (this.a1z2 + this.a2z2);
    this.k02 = this.ax1 * (this.a1x3 + this.a2x3) + this.ay1 * (this.a1y3 + this.a2y3) + this.az1 * (this.a1z3 + this.a2z3);
    this.k10 = this.ax2 * (this.a1x1 + this.a2x1) + this.ay2 * (this.a1y1 + this.a2y1) + this.az2 * (this.a1z1 + this.a2z1);
    this.k11 = this.ax2 * (this.a1x2 + this.a2x2) + this.ay2 * (this.a1y2 + this.a2y2) + this.az2 * (this.a1z2 + this.a2z2);
    this.k12 = this.ax2 * (this.a1x3 + this.a2x3) + this.ay2 * (this.a1y3 + this.a2y3) + this.az2 * (this.a1z3 + this.a2z3);
    this.k20 = this.ax3 * (this.a1x1 + this.a2x1) + this.ay3 * (this.a1y1 + this.a2y1) + this.az3 * (this.a1z1 + this.a2z1);
    this.k21 = this.ax3 * (this.a1x2 + this.a2x2) + this.ay3 * (this.a1y2 + this.a2y2) + this.az3 * (this.a1z2 + this.a2z2);
    this.k22 = this.ax3 * (this.a1x3 + this.a2x3) + this.ay3 * (this.a1y3 + this.a2y3) + this.az3 * (this.a1z3 + this.a2z3);
    this.kv00 = this.k00;
    this.kv11 = this.k11;
    this.kv22 = this.k22;
    this.dv00 = 1 / this.kv00;
    this.dv11 = 1 / this.kv11;
    this.dv22 = 1 / this.kv22;
    if (enableSpring1 && this.limitState1 != 2) {
      var omega = 6.2831853 * frequency1;
      var k = omega * omega * timeStep;
      var dmp = invTimeStep / (k + 2 * this.limitMotor1.dampingRatio * omega);
      this.cfm1 = this.kv00 * dmp;
      this.limitVelocity1 *= k * dmp;
    } else {
      this.cfm1 = 0;
      this.limitVelocity1 *= invTimeStep * 0.05;
    }
    if (enableSpring2 && this.limitState2 != 2) {
      omega = 6.2831853 * frequency2;
      k = omega * omega * timeStep;
      dmp = invTimeStep / (k + 2 * this.limitMotor2.dampingRatio * omega);
      this.cfm2 = this.kv11 * dmp;
      this.limitVelocity2 *= k * dmp;
    } else {
      this.cfm2 = 0;
      this.limitVelocity2 *= invTimeStep * 0.05;
    }
    if (enableSpring3 && this.limitState3 != 2) {
      omega = 6.2831853 * frequency3;
      k = omega * omega * timeStep;
      dmp = invTimeStep / (k + 2 * this.limitMotor3.dampingRatio * omega);
      this.cfm3 = this.kv22 * dmp;
      this.limitVelocity3 *= k * dmp;
    } else {
      this.cfm3 = 0;
      this.limitVelocity3 *= invTimeStep * 0.05;
    }
    this.k00 += this.cfm1;
    this.k11 += this.cfm2;
    this.k22 += this.cfm3;
    var inv = 1 / (this.k00 * (this.k11 * this.k22 - this.k21 * this.k12) + this.k10 * (this.k21 * this.k02 - this.k01 * this.k22) + this.k20 * (this.k01 * this.k12 - this.k11 * this.k02));
    this.d00 = (this.k11 * this.k22 - this.k12 * this.k21) * inv;
    this.d01 = (this.k02 * this.k21 - this.k01 * this.k22) * inv;
    this.d02 = (this.k01 * this.k12 - this.k02 * this.k11) * inv;
    this.d10 = (this.k12 * this.k20 - this.k10 * this.k22) * inv;
    this.d11 = (this.k00 * this.k22 - this.k02 * this.k20) * inv;
    this.d12 = (this.k02 * this.k10 - this.k00 * this.k12) * inv;
    this.d20 = (this.k10 * this.k21 - this.k11 * this.k20) * inv;
    this.d21 = (this.k01 * this.k20 - this.k00 * this.k21) * inv;
    this.d22 = (this.k00 * this.k11 - this.k01 * this.k10) * inv;
    this.limitImpulse1 *= 0.95;
    this.motorImpulse1 *= 0.95;
    this.limitImpulse2 *= 0.95;
    this.motorImpulse2 *= 0.95;
    this.limitImpulse3 *= 0.95;
    this.motorImpulse3 *= 0.95;
    var totalImpulse1 = this.limitImpulse1 + this.motorImpulse1;
    var totalImpulse2 = this.limitImpulse2 + this.motorImpulse2;
    var totalImpulse3 = this.limitImpulse3 + this.motorImpulse3;
    this.a1.x += totalImpulse1 * this.a1x1 + totalImpulse2 * this.a1x2 + totalImpulse3 * this.a1x3;
    this.a1.y += totalImpulse1 * this.a1y1 + totalImpulse2 * this.a1y2 + totalImpulse3 * this.a1y3;
    this.a1.z += totalImpulse1 * this.a1z1 + totalImpulse2 * this.a1z2 + totalImpulse3 * this.a1z3;
    this.a2.x -= totalImpulse1 * this.a2x1 + totalImpulse2 * this.a2x2 + totalImpulse3 * this.a2x3;
    this.a2.y -= totalImpulse1 * this.a2y1 + totalImpulse2 * this.a2y2 + totalImpulse3 * this.a2y3;
    this.a2.z -= totalImpulse1 * this.a2z1 + totalImpulse2 * this.a2z2 + totalImpulse3 * this.a2z3;
  },
  solve_: function () {
    var rvx = this.a2.x - this.a1.x;
    var rvy = this.a2.y - this.a1.y;
    var rvz = this.a2.z - this.a1.z;
    this.limitVelocity3 = 30;
    var rvn1 = rvx * this.ax1 + rvy * this.ay1 + rvz * this.az1 - this.limitVelocity1;
    var rvn2 = rvx * this.ax2 + rvy * this.ay2 + rvz * this.az2 - this.limitVelocity2;
    var rvn3 = rvx * this.ax3 + rvy * this.ay3 + rvz * this.az3 - this.limitVelocity3;
    var dLimitImpulse1 = rvn1 * this.d00 + rvn2 * this.d01 + rvn3 * this.d02;
    var dLimitImpulse2 = rvn1 * this.d10 + rvn2 * this.d11 + rvn3 * this.d12;
    var dLimitImpulse3 = rvn1 * this.d20 + rvn2 * this.d21 + rvn3 * this.d22;
    this.limitImpulse1 += dLimitImpulse1;
    this.limitImpulse2 += dLimitImpulse2;
    this.limitImpulse3 += dLimitImpulse3;
    this.a1.x += dLimitImpulse1 * this.a1x1 + dLimitImpulse2 * this.a1x2 + dLimitImpulse3 * this.a1x3;
    this.a1.y += dLimitImpulse1 * this.a1y1 + dLimitImpulse2 * this.a1y2 + dLimitImpulse3 * this.a1y3;
    this.a1.z += dLimitImpulse1 * this.a1z1 + dLimitImpulse2 * this.a1z2 + dLimitImpulse3 * this.a1z3;
    this.a2.x -= dLimitImpulse1 * this.a2x1 + dLimitImpulse2 * this.a2x2 + dLimitImpulse3 * this.a2x3;
    this.a2.y -= dLimitImpulse1 * this.a2y1 + dLimitImpulse2 * this.a2y2 + dLimitImpulse3 * this.a2y3;
    this.a2.z -= dLimitImpulse1 * this.a2z1 + dLimitImpulse2 * this.a2z2 + dLimitImpulse3 * this.a2z3;
  },
  solve: function () {
    var rvx = this.a2.x - this.a1.x;
    var rvy = this.a2.y - this.a1.y;
    var rvz = this.a2.z - this.a1.z;
    var rvn1 = rvx * this.ax1 + rvy * this.ay1 + rvz * this.az1;
    var rvn2 = rvx * this.ax2 + rvy * this.ay2 + rvz * this.az2;
    var rvn3 = rvx * this.ax3 + rvy * this.ay3 + rvz * this.az3;
    var oldMotorImpulse1 = this.motorImpulse1;
    var oldMotorImpulse2 = this.motorImpulse2;
    var oldMotorImpulse3 = this.motorImpulse3;
    var dMotorImpulse1 = 0;
    var dMotorImpulse2 = 0;
    var dMotorImpulse3 = 0;
    if (this.enableMotor1) {
      dMotorImpulse1 = (rvn1 - this.motorSpeed1) * this.dv00;
      this.motorImpulse1 += dMotorImpulse1;
      if (this.motorImpulse1 > this.maxMotorImpulse1) {
        this.motorImpulse1 = this.maxMotorImpulse1;
      } else if (this.motorImpulse1 < -this.maxMotorImpulse1) {
        this.motorImpulse1 = -this.maxMotorImpulse1;
      }
      dMotorImpulse1 = this.motorImpulse1 - oldMotorImpulse1;
    }
    if (this.enableMotor2) {
      dMotorImpulse2 = (rvn2 - this.motorSpeed2) * this.dv11;
      this.motorImpulse2 += dMotorImpulse2;
      if (this.motorImpulse2 > this.maxMotorImpulse2) {
        this.motorImpulse2 = this.maxMotorImpulse2;
      } else if (this.motorImpulse2 < -this.maxMotorImpulse2) {
        this.motorImpulse2 = -this.maxMotorImpulse2;
      }
      dMotorImpulse2 = this.motorImpulse2 - oldMotorImpulse2;
    }
    if (this.enableMotor3) {
      dMotorImpulse3 = (rvn3 - this.motorSpeed3) * this.dv22;
      this.motorImpulse3 += dMotorImpulse3;
      if (this.motorImpulse3 > this.maxMotorImpulse3) {
        this.motorImpulse3 = this.maxMotorImpulse3;
      } else if (this.motorImpulse3 < -this.maxMotorImpulse3) {
        this.motorImpulse3 = -this.maxMotorImpulse3;
      }
      dMotorImpulse3 = this.motorImpulse3 - oldMotorImpulse3;
    }
    rvn1 += dMotorImpulse1 * this.kv00 + dMotorImpulse2 * this.k01 + dMotorImpulse3 * this.k02;
    rvn2 += dMotorImpulse1 * this.k10 + dMotorImpulse2 * this.kv11 + dMotorImpulse3 * this.k12;
    rvn3 += dMotorImpulse1 * this.k20 + dMotorImpulse2 * this.k21 + dMotorImpulse3 * this.kv22;
    rvn1 -= this.limitVelocity1 + this.limitImpulse1 * this.cfm1;
    rvn2 -= this.limitVelocity2 + this.limitImpulse2 * this.cfm2;
    rvn3 -= this.limitVelocity3 + this.limitImpulse3 * this.cfm3;
    var oldLimitImpulse1 = this.limitImpulse1;
    var oldLimitImpulse2 = this.limitImpulse2;
    var oldLimitImpulse3 = this.limitImpulse3;
    var dLimitImpulse1 = rvn1 * this.d00 + rvn2 * this.d01 + rvn3 * this.d02;
    var dLimitImpulse2 = rvn1 * this.d10 + rvn2 * this.d11 + rvn3 * this.d12;
    var dLimitImpulse3 = rvn1 * this.d20 + rvn2 * this.d21 + rvn3 * this.d22;
    this.limitImpulse1 += dLimitImpulse1;
    this.limitImpulse2 += dLimitImpulse2;
    this.limitImpulse3 += dLimitImpulse3;
    var clampState = 0;
    if (this.limitState1 == 2 || this.limitImpulse1 * this.limitState1 < 0) {
      dLimitImpulse1 = -oldLimitImpulse1;
      rvn2 += dLimitImpulse1 * this.k10;
      rvn3 += dLimitImpulse1 * this.k20;
      clampState |= 1;
    }
    if (this.limitState2 == 2 || this.limitImpulse2 * this.limitState2 < 0) {
      dLimitImpulse2 = -oldLimitImpulse2;
      rvn1 += dLimitImpulse2 * this.k01;
      rvn3 += dLimitImpulse2 * this.k21;
      clampState |= 2;
    }
    if (this.limitState3 == 2 || this.limitImpulse3 * this.limitState3 < 0) {
      dLimitImpulse3 = -oldLimitImpulse3;
      rvn1 += dLimitImpulse3 * this.k02;
      rvn2 += dLimitImpulse3 * this.k12;
      clampState |= 4;
    }
    var det;
    switch (clampState) {
      case 1:
        det = 1 / (this.k11 * this.k22 - this.k12 * this.k21);
        dLimitImpulse2 = (this.k22 * rvn2 + -this.k12 * rvn3) * det;
        dLimitImpulse3 = (-this.k21 * rvn2 + this.k11 * rvn3) * det;
        break;
      case 2:
        det = 1 / (this.k00 * this.k22 - this.k02 * this.k20);
        dLimitImpulse1 = (this.k22 * rvn1 + -this.k02 * rvn3) * det;
        dLimitImpulse3 = (-this.k20 * rvn1 + this.k00 * rvn3) * det;
        break;
      case 3:
        dLimitImpulse3 = rvn3 / this.k22;
        break;
      case 4:
        det = 1 / (this.k00 * this.k11 - this.k01 * this.k10);
        dLimitImpulse1 = (this.k11 * rvn1 + -this.k01 * rvn2) * det;
        dLimitImpulse2 = (-this.k10 * rvn1 + this.k00 * rvn2) * det;
        break;
      case 5:
        dLimitImpulse2 = rvn2 / this.k11;
        break;
      case 6:
        dLimitImpulse1 = rvn1 / this.k00;
        break;
    }
    this.limitImpulse1 = dLimitImpulse1 + oldLimitImpulse1;
    this.limitImpulse2 = dLimitImpulse2 + oldLimitImpulse2;
    this.limitImpulse3 = dLimitImpulse3 + oldLimitImpulse3;
    var dImpulse1 = dMotorImpulse1 + dLimitImpulse1;
    var dImpulse2 = dMotorImpulse2 + dLimitImpulse2;
    var dImpulse3 = dMotorImpulse3 + dLimitImpulse3;
    this.a1.x += dImpulse1 * this.a1x1 + dImpulse2 * this.a1x2 + dImpulse3 * this.a1x3;
    this.a1.y += dImpulse1 * this.a1y1 + dImpulse2 * this.a1y2 + dImpulse3 * this.a1y3;
    this.a1.z += dImpulse1 * this.a1z1 + dImpulse2 * this.a1z2 + dImpulse3 * this.a1z3;
    this.a2.x -= dImpulse1 * this.a2x1 + dImpulse2 * this.a2x2 + dImpulse3 * this.a2x3;
    this.a2.y -= dImpulse1 * this.a2y1 + dImpulse2 * this.a2y2 + dImpulse3 * this.a2y3;
    this.a2.z -= dImpulse1 * this.a2z1 + dImpulse2 * this.a2z2 + dImpulse3 * this.a2z3;
    rvx = this.a2.x - this.a1.x;
    rvy = this.a2.y - this.a1.y;
    rvz = this.a2.z - this.a1.z;
    rvn2 = rvx * this.ax2 + rvy * this.ay2 + rvz * this.az2;
  }
});
function HingeJoint(config, lowerAngleLimit, upperAngleLimit) {
  Joint.call(this, config);
  this.type = JOINT_HINGE;
  this.localAxis1 = config.localAxis1.clone().normalize();
  this.localAxis2 = config.localAxis2.clone().normalize();
  var arc = new Mat33().setQuat(new Quat().setFromUnitVectors(this.localAxis1, this.localAxis2));
  this.localAngle1 = new Vec3().tangent(this.localAxis1).normalize();
  this.localAngle2 = this.localAngle1.clone().applyMatrix3(arc, true);
  this.ax1 = new Vec3();
  this.ax2 = new Vec3();
  this.an1 = new Vec3();
  this.an2 = new Vec3();
  this.tmp = new Vec3();
  this.nor = new Vec3();
  this.tan = new Vec3();
  this.bin = new Vec3();
  this.limitMotor = new LimitMotor(this.nor, false);
  this.limitMotor.lowerLimit = lowerAngleLimit;
  this.limitMotor.upperLimit = upperAngleLimit;
  this.lc = new LinearConstraint(this);
  this.r3 = new Rotational3Constraint(this, this.limitMotor, new LimitMotor(this.tan, true), new LimitMotor(this.bin, true));
}
HingeJoint.prototype = Object.assign(Object.create(Joint.prototype), {
  constructor: HingeJoint,
  preSolve: function (timeStep, invTimeStep) {
    this.updateAnchorPoints();
    this.ax1.copy(this.localAxis1).applyMatrix3(this.body1.rotation, true);
    this.ax2.copy(this.localAxis2).applyMatrix3(this.body2.rotation, true);
    this.an1.copy(this.localAngle1).applyMatrix3(this.body1.rotation, true);
    this.an2.copy(this.localAngle2).applyMatrix3(this.body2.rotation, true);
    this.nor.set(this.ax1.x * this.body2.inverseMass + this.ax2.x * this.body1.inverseMass, this.ax1.y * this.body2.inverseMass + this.ax2.y * this.body1.inverseMass, this.ax1.z * this.body2.inverseMass + this.ax2.z * this.body1.inverseMass).normalize();
    this.tan.tangent(this.nor).normalize();
    this.bin.crossVectors(this.nor, this.tan);
    var limite = _Math.acosClamp(_Math.dotVectors(this.an1, this.an2));
    this.tmp.crossVectors(this.an1, this.an2);
    if (_Math.dotVectors(this.nor, this.tmp) < 0) this.limitMotor.angle = -limite;else this.limitMotor.angle = limite;
    this.tmp.crossVectors(this.ax1, this.ax2);
    this.r3.limitMotor2.angle = _Math.dotVectors(this.tan, this.tmp);
    this.r3.limitMotor3.angle = _Math.dotVectors(this.bin, this.tmp);
    this.r3.preSolve(timeStep, invTimeStep);
    this.lc.preSolve(timeStep, invTimeStep);
  },
  solve: function () {
    this.r3.solve();
    this.lc.solve();
  },
  postSolve: function () {}
});
function BallAndSocketJoint(config) {
  Joint.call(this, config);
  this.type = JOINT_BALL_AND_SOCKET;
  this.lc = new LinearConstraint(this);
}
BallAndSocketJoint.prototype = Object.assign(Object.create(Joint.prototype), {
  constructor: BallAndSocketJoint,
  preSolve: function (timeStep, invTimeStep) {
    this.updateAnchorPoints();
    this.lc.preSolve(timeStep, invTimeStep);
  },
  solve: function () {
    this.lc.solve();
  },
  postSolve: function () {}
});
function TranslationalConstraint(joint, limitMotor) {
  this.cfm = NaN;
  this.m1 = NaN;
  this.m2 = NaN;
  this.i1e00 = NaN;
  this.i1e01 = NaN;
  this.i1e02 = NaN;
  this.i1e10 = NaN;
  this.i1e11 = NaN;
  this.i1e12 = NaN;
  this.i1e20 = NaN;
  this.i1e21 = NaN;
  this.i1e22 = NaN;
  this.i2e00 = NaN;
  this.i2e01 = NaN;
  this.i2e02 = NaN;
  this.i2e10 = NaN;
  this.i2e11 = NaN;
  this.i2e12 = NaN;
  this.i2e20 = NaN;
  this.i2e21 = NaN;
  this.i2e22 = NaN;
  this.motorDenom = NaN;
  this.invMotorDenom = NaN;
  this.invDenom = NaN;
  this.ax = NaN;
  this.ay = NaN;
  this.az = NaN;
  this.r1x = NaN;
  this.r1y = NaN;
  this.r1z = NaN;
  this.r2x = NaN;
  this.r2y = NaN;
  this.r2z = NaN;
  this.t1x = NaN;
  this.t1y = NaN;
  this.t1z = NaN;
  this.t2x = NaN;
  this.t2y = NaN;
  this.t2z = NaN;
  this.l1x = NaN;
  this.l1y = NaN;
  this.l1z = NaN;
  this.l2x = NaN;
  this.l2y = NaN;
  this.l2z = NaN;
  this.a1x = NaN;
  this.a1y = NaN;
  this.a1z = NaN;
  this.a2x = NaN;
  this.a2y = NaN;
  this.a2z = NaN;
  this.lowerLimit = NaN;
  this.upperLimit = NaN;
  this.limitVelocity = NaN;
  this.limitState = 0;
  this.enableMotor = false;
  this.motorSpeed = NaN;
  this.maxMotorForce = NaN;
  this.maxMotorImpulse = NaN;
  this.limitMotor = limitMotor;
  this.b1 = joint.body1;
  this.b2 = joint.body2;
  this.p1 = joint.anchorPoint1;
  this.p2 = joint.anchorPoint2;
  this.r1 = joint.relativeAnchorPoint1;
  this.r2 = joint.relativeAnchorPoint2;
  this.l1 = this.b1.linearVelocity;
  this.l2 = this.b2.linearVelocity;
  this.a1 = this.b1.angularVelocity;
  this.a2 = this.b2.angularVelocity;
  this.i1 = this.b1.inverseInertia;
  this.i2 = this.b2.inverseInertia;
  this.limitImpulse = 0;
  this.motorImpulse = 0;
}
Object.assign(TranslationalConstraint.prototype, {
  TranslationalConstraint: true,
  preSolve: function (timeStep, invTimeStep) {
    this.ax = this.limitMotor.axis.x;
    this.ay = this.limitMotor.axis.y;
    this.az = this.limitMotor.axis.z;
    this.lowerLimit = this.limitMotor.lowerLimit;
    this.upperLimit = this.limitMotor.upperLimit;
    this.motorSpeed = this.limitMotor.motorSpeed;
    this.maxMotorForce = this.limitMotor.maxMotorForce;
    this.enableMotor = this.maxMotorForce > 0;
    this.m1 = this.b1.inverseMass;
    this.m2 = this.b2.inverseMass;
    var ti1 = this.i1.elements;
    var ti2 = this.i2.elements;
    this.i1e00 = ti1[0];
    this.i1e01 = ti1[1];
    this.i1e02 = ti1[2];
    this.i1e10 = ti1[3];
    this.i1e11 = ti1[4];
    this.i1e12 = ti1[5];
    this.i1e20 = ti1[6];
    this.i1e21 = ti1[7];
    this.i1e22 = ti1[8];
    this.i2e00 = ti2[0];
    this.i2e01 = ti2[1];
    this.i2e02 = ti2[2];
    this.i2e10 = ti2[3];
    this.i2e11 = ti2[4];
    this.i2e12 = ti2[5];
    this.i2e20 = ti2[6];
    this.i2e21 = ti2[7];
    this.i2e22 = ti2[8];
    var dx = this.p2.x - this.p1.x;
    var dy = this.p2.y - this.p1.y;
    var dz = this.p2.z - this.p1.z;
    var d = dx * this.ax + dy * this.ay + dz * this.az;
    var frequency = this.limitMotor.frequency;
    var enableSpring = frequency > 0;
    var enableLimit = this.lowerLimit <= this.upperLimit;
    if (enableSpring && d > 20 || d < -20) {
      enableSpring = false;
    }
    if (enableLimit) {
      if (this.lowerLimit == this.upperLimit) {
        if (this.limitState != 0) {
          this.limitState = 0;
          this.limitImpulse = 0;
        }
        this.limitVelocity = this.lowerLimit - d;
        if (!enableSpring) d = this.lowerLimit;
      } else if (d < this.lowerLimit) {
        if (this.limitState != -1) {
          this.limitState = -1;
          this.limitImpulse = 0;
        }
        this.limitVelocity = this.lowerLimit - d;
        if (!enableSpring) d = this.lowerLimit;
      } else if (d > this.upperLimit) {
        if (this.limitState != 1) {
          this.limitState = 1;
          this.limitImpulse = 0;
        }
        this.limitVelocity = this.upperLimit - d;
        if (!enableSpring) d = this.upperLimit;
      } else {
        this.limitState = 2;
        this.limitImpulse = 0;
        this.limitVelocity = 0;
      }
      if (!enableSpring) {
        if (this.limitVelocity > 0.005) this.limitVelocity -= 0.005;else if (this.limitVelocity < -0.005) this.limitVelocity += 0.005;else this.limitVelocity = 0;
      }
    } else {
      this.limitState = 2;
      this.limitImpulse = 0;
    }
    if (this.enableMotor && (this.limitState != 0 || enableSpring)) {
      this.maxMotorImpulse = this.maxMotorForce * timeStep;
    } else {
      this.motorImpulse = 0;
      this.maxMotorImpulse = 0;
    }
    var rdx = d * this.ax;
    var rdy = d * this.ay;
    var rdz = d * this.az;
    var w1 = this.m1 / (this.m1 + this.m2);
    var w2 = 1 - w1;
    this.r1x = this.r1.x + rdx * w1;
    this.r1y = this.r1.y + rdy * w1;
    this.r1z = this.r1.z + rdz * w1;
    this.r2x = this.r2.x - rdx * w2;
    this.r2y = this.r2.y - rdy * w2;
    this.r2z = this.r2.z - rdz * w2;
    this.t1x = this.r1y * this.az - this.r1z * this.ay;
    this.t1y = this.r1z * this.ax - this.r1x * this.az;
    this.t1z = this.r1x * this.ay - this.r1y * this.ax;
    this.t2x = this.r2y * this.az - this.r2z * this.ay;
    this.t2y = this.r2z * this.ax - this.r2x * this.az;
    this.t2z = this.r2x * this.ay - this.r2y * this.ax;
    this.l1x = this.ax * this.m1;
    this.l1y = this.ay * this.m1;
    this.l1z = this.az * this.m1;
    this.l2x = this.ax * this.m2;
    this.l2y = this.ay * this.m2;
    this.l2z = this.az * this.m2;
    this.a1x = this.t1x * this.i1e00 + this.t1y * this.i1e01 + this.t1z * this.i1e02;
    this.a1y = this.t1x * this.i1e10 + this.t1y * this.i1e11 + this.t1z * this.i1e12;
    this.a1z = this.t1x * this.i1e20 + this.t1y * this.i1e21 + this.t1z * this.i1e22;
    this.a2x = this.t2x * this.i2e00 + this.t2y * this.i2e01 + this.t2z * this.i2e02;
    this.a2y = this.t2x * this.i2e10 + this.t2y * this.i2e11 + this.t2z * this.i2e12;
    this.a2z = this.t2x * this.i2e20 + this.t2y * this.i2e21 + this.t2z * this.i2e22;
    this.motorDenom = this.m1 + this.m2 + this.ax * (this.a1y * this.r1z - this.a1z * this.r1y + this.a2y * this.r2z - this.a2z * this.r2y) + this.ay * (this.a1z * this.r1x - this.a1x * this.r1z + this.a2z * this.r2x - this.a2x * this.r2z) + this.az * (this.a1x * this.r1y - this.a1y * this.r1x + this.a2x * this.r2y - this.a2y * this.r2x);
    this.invMotorDenom = 1 / this.motorDenom;
    if (enableSpring && this.limitState != 2) {
      var omega = 6.2831853 * frequency;
      var k = omega * omega * timeStep;
      var dmp = invTimeStep / (k + 2 * this.limitMotor.dampingRatio * omega);
      this.cfm = this.motorDenom * dmp;
      this.limitVelocity *= k * dmp;
    } else {
      this.cfm = 0;
      this.limitVelocity *= invTimeStep * 0.05;
    }
    this.invDenom = 1 / (this.motorDenom + this.cfm);
    var totalImpulse = this.limitImpulse + this.motorImpulse;
    this.l1.x += totalImpulse * this.l1x;
    this.l1.y += totalImpulse * this.l1y;
    this.l1.z += totalImpulse * this.l1z;
    this.a1.x += totalImpulse * this.a1x;
    this.a1.y += totalImpulse * this.a1y;
    this.a1.z += totalImpulse * this.a1z;
    this.l2.x -= totalImpulse * this.l2x;
    this.l2.y -= totalImpulse * this.l2y;
    this.l2.z -= totalImpulse * this.l2z;
    this.a2.x -= totalImpulse * this.a2x;
    this.a2.y -= totalImpulse * this.a2y;
    this.a2.z -= totalImpulse * this.a2z;
  },
  solve: function () {
    var rvn = this.ax * (this.l2.x - this.l1.x) + this.ay * (this.l2.y - this.l1.y) + this.az * (this.l2.z - this.l1.z) + this.t2x * this.a2.x - this.t1x * this.a1.x + this.t2y * this.a2.y - this.t1y * this.a1.y + this.t2z * this.a2.z - this.t1z * this.a1.z;
    var newMotorImpulse;
    if (this.enableMotor) {
      newMotorImpulse = (rvn - this.motorSpeed) * this.invMotorDenom;
      var oldMotorImpulse = this.motorImpulse;
      this.motorImpulse += newMotorImpulse;
      if (this.motorImpulse > this.maxMotorImpulse) this.motorImpulse = this.maxMotorImpulse;else if (this.motorImpulse < -this.maxMotorImpulse) this.motorImpulse = -this.maxMotorImpulse;
      newMotorImpulse = this.motorImpulse - oldMotorImpulse;
      rvn -= newMotorImpulse * this.motorDenom;
    } else newMotorImpulse = 0;
    var newLimitImpulse;
    if (this.limitState != 2) {
      newLimitImpulse = (rvn - this.limitVelocity - this.limitImpulse * this.cfm) * this.invDenom;
      var oldLimitImpulse = this.limitImpulse;
      this.limitImpulse += newLimitImpulse;
      if (this.limitImpulse * this.limitState < 0) this.limitImpulse = 0;
      newLimitImpulse = this.limitImpulse - oldLimitImpulse;
    } else newLimitImpulse = 0;
    var totalImpulse = newLimitImpulse + newMotorImpulse;
    this.l1.x += totalImpulse * this.l1x;
    this.l1.y += totalImpulse * this.l1y;
    this.l1.z += totalImpulse * this.l1z;
    this.a1.x += totalImpulse * this.a1x;
    this.a1.y += totalImpulse * this.a1y;
    this.a1.z += totalImpulse * this.a1z;
    this.l2.x -= totalImpulse * this.l2x;
    this.l2.y -= totalImpulse * this.l2y;
    this.l2.z -= totalImpulse * this.l2z;
    this.a2.x -= totalImpulse * this.a2x;
    this.a2.y -= totalImpulse * this.a2y;
    this.a2.z -= totalImpulse * this.a2z;
  }
});
function DistanceJoint(config, minDistance, maxDistance) {
  Joint.call(this, config);
  this.type = JOINT_DISTANCE;
  this.nor = new Vec3();
  this.limitMotor = new LimitMotor(this.nor, true);
  this.limitMotor.lowerLimit = minDistance;
  this.limitMotor.upperLimit = maxDistance;
  this.t = new TranslationalConstraint(this, this.limitMotor);
}
DistanceJoint.prototype = Object.assign(Object.create(Joint.prototype), {
  constructor: DistanceJoint,
  preSolve: function (timeStep, invTimeStep) {
    this.updateAnchorPoints();
    this.nor.sub(this.anchorPoint2, this.anchorPoint1).normalize();
    this.t.preSolve(timeStep, invTimeStep);
  },
  solve: function () {
    this.t.solve();
  },
  postSolve: function () {}
});
function AngularConstraint(joint, targetOrientation) {
  this.joint = joint;
  this.targetOrientation = new Quat().invert(targetOrientation);
  this.relativeOrientation = new Quat();
  this.ii1 = null;
  this.ii2 = null;
  this.dd = null;
  this.vel = new Vec3();
  this.imp = new Vec3();
  this.rn0 = new Vec3();
  this.rn1 = new Vec3();
  this.rn2 = new Vec3();
  this.b1 = joint.body1;
  this.b2 = joint.body2;
  this.a1 = this.b1.angularVelocity;
  this.a2 = this.b2.angularVelocity;
  this.i1 = this.b1.inverseInertia;
  this.i2 = this.b2.inverseInertia;
}
Object.assign(AngularConstraint.prototype, {
  AngularConstraint: true,
  preSolve: function (timeStep, invTimeStep) {
    var inv, len, v;
    this.ii1 = this.i1.clone();
    this.ii2 = this.i2.clone();
    v = new Mat33().add(this.ii1, this.ii2).elements;
    inv = 1 / (v[0] * (v[4] * v[8] - v[7] * v[5]) + v[3] * (v[7] * v[2] - v[1] * v[8]) + v[6] * (v[1] * v[5] - v[4] * v[2]));
    this.dd = new Mat33().set(v[4] * v[8] - v[5] * v[7], v[2] * v[7] - v[1] * v[8], v[1] * v[5] - v[2] * v[4], v[5] * v[6] - v[3] * v[8], v[0] * v[8] - v[2] * v[6], v[2] * v[3] - v[0] * v[5], v[3] * v[7] - v[4] * v[6], v[1] * v[6] - v[0] * v[7], v[0] * v[4] - v[1] * v[3]).multiplyScalar(inv);
    this.relativeOrientation.invert(this.b1.orientation).multiply(this.targetOrientation).multiply(this.b2.orientation);
    inv = this.relativeOrientation.w * 2;
    this.vel.copy(this.relativeOrientation).multiplyScalar(inv);
    len = this.vel.length();
    if (len > 0.02) {
      len = (0.02 - len) / len * invTimeStep * 0.05;
      this.vel.multiplyScalar(len);
    } else {
      this.vel.set(0, 0, 0);
    }
    this.rn1.copy(this.imp).applyMatrix3(this.ii1, true);
    this.rn2.copy(this.imp).applyMatrix3(this.ii2, true);
    this.a1.add(this.rn1);
    this.a2.sub(this.rn2);
  },
  solve: function () {
    var r = this.a2.clone().sub(this.a1).sub(this.vel);
    this.rn0.copy(r).applyMatrix3(this.dd, true);
    this.rn1.copy(this.rn0).applyMatrix3(this.ii1, true);
    this.rn2.copy(this.rn0).applyMatrix3(this.ii2, true);
    this.imp.add(this.rn0);
    this.a1.add(this.rn1);
    this.a2.sub(this.rn2);
  }
});
function Translational3Constraint(joint, limitMotor1, limitMotor2, limitMotor3) {
  this.m1 = NaN;
  this.m2 = NaN;
  this.i1e00 = NaN;
  this.i1e01 = NaN;
  this.i1e02 = NaN;
  this.i1e10 = NaN;
  this.i1e11 = NaN;
  this.i1e12 = NaN;
  this.i1e20 = NaN;
  this.i1e21 = NaN;
  this.i1e22 = NaN;
  this.i2e00 = NaN;
  this.i2e01 = NaN;
  this.i2e02 = NaN;
  this.i2e10 = NaN;
  this.i2e11 = NaN;
  this.i2e12 = NaN;
  this.i2e20 = NaN;
  this.i2e21 = NaN;
  this.i2e22 = NaN;
  this.ax1 = NaN;
  this.ay1 = NaN;
  this.az1 = NaN;
  this.ax2 = NaN;
  this.ay2 = NaN;
  this.az2 = NaN;
  this.ax3 = NaN;
  this.ay3 = NaN;
  this.az3 = NaN;
  this.r1x = NaN;
  this.r1y = NaN;
  this.r1z = NaN;
  this.r2x = NaN;
  this.r2y = NaN;
  this.r2z = NaN;
  this.t1x1 = NaN;
  this.t1y1 = NaN;
  this.t1z1 = NaN;
  this.t2x1 = NaN;
  this.t2y1 = NaN;
  this.t2z1 = NaN;
  this.l1x1 = NaN;
  this.l1y1 = NaN;
  this.l1z1 = NaN;
  this.l2x1 = NaN;
  this.l2y1 = NaN;
  this.l2z1 = NaN;
  this.a1x1 = NaN;
  this.a1y1 = NaN;
  this.a1z1 = NaN;
  this.a2x1 = NaN;
  this.a2y1 = NaN;
  this.a2z1 = NaN;
  this.t1x2 = NaN;
  this.t1y2 = NaN;
  this.t1z2 = NaN;
  this.t2x2 = NaN;
  this.t2y2 = NaN;
  this.t2z2 = NaN;
  this.l1x2 = NaN;
  this.l1y2 = NaN;
  this.l1z2 = NaN;
  this.l2x2 = NaN;
  this.l2y2 = NaN;
  this.l2z2 = NaN;
  this.a1x2 = NaN;
  this.a1y2 = NaN;
  this.a1z2 = NaN;
  this.a2x2 = NaN;
  this.a2y2 = NaN;
  this.a2z2 = NaN;
  this.t1x3 = NaN;
  this.t1y3 = NaN;
  this.t1z3 = NaN;
  this.t2x3 = NaN;
  this.t2y3 = NaN;
  this.t2z3 = NaN;
  this.l1x3 = NaN;
  this.l1y3 = NaN;
  this.l1z3 = NaN;
  this.l2x3 = NaN;
  this.l2y3 = NaN;
  this.l2z3 = NaN;
  this.a1x3 = NaN;
  this.a1y3 = NaN;
  this.a1z3 = NaN;
  this.a2x3 = NaN;
  this.a2y3 = NaN;
  this.a2z3 = NaN;
  this.lowerLimit1 = NaN;
  this.upperLimit1 = NaN;
  this.limitVelocity1 = NaN;
  this.limitState1 = 0;
  this.enableMotor1 = false;
  this.motorSpeed1 = NaN;
  this.maxMotorForce1 = NaN;
  this.maxMotorImpulse1 = NaN;
  this.lowerLimit2 = NaN;
  this.upperLimit2 = NaN;
  this.limitVelocity2 = NaN;
  this.limitState2 = 0;
  this.enableMotor2 = false;
  this.motorSpeed2 = NaN;
  this.maxMotorForce2 = NaN;
  this.maxMotorImpulse2 = NaN;
  this.lowerLimit3 = NaN;
  this.upperLimit3 = NaN;
  this.limitVelocity3 = NaN;
  this.limitState3 = 0;
  this.enableMotor3 = false;
  this.motorSpeed3 = NaN;
  this.maxMotorForce3 = NaN;
  this.maxMotorImpulse3 = NaN;
  this.k00 = NaN;
  this.k01 = NaN;
  this.k02 = NaN;
  this.k10 = NaN;
  this.k11 = NaN;
  this.k12 = NaN;
  this.k20 = NaN;
  this.k21 = NaN;
  this.k22 = NaN;
  this.kv00 = NaN;
  this.kv11 = NaN;
  this.kv22 = NaN;
  this.dv00 = NaN;
  this.dv11 = NaN;
  this.dv22 = NaN;
  this.d00 = NaN;
  this.d01 = NaN;
  this.d02 = NaN;
  this.d10 = NaN;
  this.d11 = NaN;
  this.d12 = NaN;
  this.d20 = NaN;
  this.d21 = NaN;
  this.d22 = NaN;
  this.limitMotor1 = limitMotor1;
  this.limitMotor2 = limitMotor2;
  this.limitMotor3 = limitMotor3;
  this.b1 = joint.body1;
  this.b2 = joint.body2;
  this.p1 = joint.anchorPoint1;
  this.p2 = joint.anchorPoint2;
  this.r1 = joint.relativeAnchorPoint1;
  this.r2 = joint.relativeAnchorPoint2;
  this.l1 = this.b1.linearVelocity;
  this.l2 = this.b2.linearVelocity;
  this.a1 = this.b1.angularVelocity;
  this.a2 = this.b2.angularVelocity;
  this.i1 = this.b1.inverseInertia;
  this.i2 = this.b2.inverseInertia;
  this.limitImpulse1 = 0;
  this.motorImpulse1 = 0;
  this.limitImpulse2 = 0;
  this.motorImpulse2 = 0;
  this.limitImpulse3 = 0;
  this.motorImpulse3 = 0;
  this.cfm1 = 0;
  this.cfm2 = 0;
  this.cfm3 = 0;
  this.weight = -1;
}
Object.assign(Translational3Constraint.prototype, {
  Translational3Constraint: true,
  preSolve: function (timeStep, invTimeStep) {
    this.ax1 = this.limitMotor1.axis.x;
    this.ay1 = this.limitMotor1.axis.y;
    this.az1 = this.limitMotor1.axis.z;
    this.ax2 = this.limitMotor2.axis.x;
    this.ay2 = this.limitMotor2.axis.y;
    this.az2 = this.limitMotor2.axis.z;
    this.ax3 = this.limitMotor3.axis.x;
    this.ay3 = this.limitMotor3.axis.y;
    this.az3 = this.limitMotor3.axis.z;
    this.lowerLimit1 = this.limitMotor1.lowerLimit;
    this.upperLimit1 = this.limitMotor1.upperLimit;
    this.motorSpeed1 = this.limitMotor1.motorSpeed;
    this.maxMotorForce1 = this.limitMotor1.maxMotorForce;
    this.enableMotor1 = this.maxMotorForce1 > 0;
    this.lowerLimit2 = this.limitMotor2.lowerLimit;
    this.upperLimit2 = this.limitMotor2.upperLimit;
    this.motorSpeed2 = this.limitMotor2.motorSpeed;
    this.maxMotorForce2 = this.limitMotor2.maxMotorForce;
    this.enableMotor2 = this.maxMotorForce2 > 0;
    this.lowerLimit3 = this.limitMotor3.lowerLimit;
    this.upperLimit3 = this.limitMotor3.upperLimit;
    this.motorSpeed3 = this.limitMotor3.motorSpeed;
    this.maxMotorForce3 = this.limitMotor3.maxMotorForce;
    this.enableMotor3 = this.maxMotorForce3 > 0;
    this.m1 = this.b1.inverseMass;
    this.m2 = this.b2.inverseMass;
    var ti1 = this.i1.elements;
    var ti2 = this.i2.elements;
    this.i1e00 = ti1[0];
    this.i1e01 = ti1[1];
    this.i1e02 = ti1[2];
    this.i1e10 = ti1[3];
    this.i1e11 = ti1[4];
    this.i1e12 = ti1[5];
    this.i1e20 = ti1[6];
    this.i1e21 = ti1[7];
    this.i1e22 = ti1[8];
    this.i2e00 = ti2[0];
    this.i2e01 = ti2[1];
    this.i2e02 = ti2[2];
    this.i2e10 = ti2[3];
    this.i2e11 = ti2[4];
    this.i2e12 = ti2[5];
    this.i2e20 = ti2[6];
    this.i2e21 = ti2[7];
    this.i2e22 = ti2[8];
    var dx = this.p2.x - this.p1.x;
    var dy = this.p2.y - this.p1.y;
    var dz = this.p2.z - this.p1.z;
    var d1 = dx * this.ax1 + dy * this.ay1 + dz * this.az1;
    var d2 = dx * this.ax2 + dy * this.ay2 + dz * this.az2;
    var d3 = dx * this.ax3 + dy * this.ay3 + dz * this.az3;
    var frequency1 = this.limitMotor1.frequency;
    var frequency2 = this.limitMotor2.frequency;
    var frequency3 = this.limitMotor3.frequency;
    var enableSpring1 = frequency1 > 0;
    var enableSpring2 = frequency2 > 0;
    var enableSpring3 = frequency3 > 0;
    var enableLimit1 = this.lowerLimit1 <= this.upperLimit1;
    var enableLimit2 = this.lowerLimit2 <= this.upperLimit2;
    var enableLimit3 = this.lowerLimit3 <= this.upperLimit3;
    if (enableSpring1 && d1 > 20 || d1 < -20) {
      enableSpring1 = false;
    }
    if (enableSpring2 && d2 > 20 || d2 < -20) {
      enableSpring2 = false;
    }
    if (enableSpring3 && d3 > 20 || d3 < -20) {
      enableSpring3 = false;
    }
    if (enableLimit1) {
      if (this.lowerLimit1 == this.upperLimit1) {
        if (this.limitState1 != 0) {
          this.limitState1 = 0;
          this.limitImpulse1 = 0;
        }
        this.limitVelocity1 = this.lowerLimit1 - d1;
        if (!enableSpring1) d1 = this.lowerLimit1;
      } else if (d1 < this.lowerLimit1) {
        if (this.limitState1 != -1) {
          this.limitState1 = -1;
          this.limitImpulse1 = 0;
        }
        this.limitVelocity1 = this.lowerLimit1 - d1;
        if (!enableSpring1) d1 = this.lowerLimit1;
      } else if (d1 > this.upperLimit1) {
        if (this.limitState1 != 1) {
          this.limitState1 = 1;
          this.limitImpulse1 = 0;
        }
        this.limitVelocity1 = this.upperLimit1 - d1;
        if (!enableSpring1) d1 = this.upperLimit1;
      } else {
        this.limitState1 = 2;
        this.limitImpulse1 = 0;
        this.limitVelocity1 = 0;
      }
      if (!enableSpring1) {
        if (this.limitVelocity1 > 0.005) this.limitVelocity1 -= 0.005;else if (this.limitVelocity1 < -0.005) this.limitVelocity1 += 0.005;else this.limitVelocity1 = 0;
      }
    } else {
      this.limitState1 = 2;
      this.limitImpulse1 = 0;
    }
    if (enableLimit2) {
      if (this.lowerLimit2 == this.upperLimit2) {
        if (this.limitState2 != 0) {
          this.limitState2 = 0;
          this.limitImpulse2 = 0;
        }
        this.limitVelocity2 = this.lowerLimit2 - d2;
        if (!enableSpring2) d2 = this.lowerLimit2;
      } else if (d2 < this.lowerLimit2) {
        if (this.limitState2 != -1) {
          this.limitState2 = -1;
          this.limitImpulse2 = 0;
        }
        this.limitVelocity2 = this.lowerLimit2 - d2;
        if (!enableSpring2) d2 = this.lowerLimit2;
      } else if (d2 > this.upperLimit2) {
        if (this.limitState2 != 1) {
          this.limitState2 = 1;
          this.limitImpulse2 = 0;
        }
        this.limitVelocity2 = this.upperLimit2 - d2;
        if (!enableSpring2) d2 = this.upperLimit2;
      } else {
        this.limitState2 = 2;
        this.limitImpulse2 = 0;
        this.limitVelocity2 = 0;
      }
      if (!enableSpring2) {
        if (this.limitVelocity2 > 0.005) this.limitVelocity2 -= 0.005;else if (this.limitVelocity2 < -0.005) this.limitVelocity2 += 0.005;else this.limitVelocity2 = 0;
      }
    } else {
      this.limitState2 = 2;
      this.limitImpulse2 = 0;
    }
    if (enableLimit3) {
      if (this.lowerLimit3 == this.upperLimit3) {
        if (this.limitState3 != 0) {
          this.limitState3 = 0;
          this.limitImpulse3 = 0;
        }
        this.limitVelocity3 = this.lowerLimit3 - d3;
        if (!enableSpring3) d3 = this.lowerLimit3;
      } else if (d3 < this.lowerLimit3) {
        if (this.limitState3 != -1) {
          this.limitState3 = -1;
          this.limitImpulse3 = 0;
        }
        this.limitVelocity3 = this.lowerLimit3 - d3;
        if (!enableSpring3) d3 = this.lowerLimit3;
      } else if (d3 > this.upperLimit3) {
        if (this.limitState3 != 1) {
          this.limitState3 = 1;
          this.limitImpulse3 = 0;
        }
        this.limitVelocity3 = this.upperLimit3 - d3;
        if (!enableSpring3) d3 = this.upperLimit3;
      } else {
        this.limitState3 = 2;
        this.limitImpulse3 = 0;
        this.limitVelocity3 = 0;
      }
      if (!enableSpring3) {
        if (this.limitVelocity3 > 0.005) this.limitVelocity3 -= 0.005;else if (this.limitVelocity3 < -0.005) this.limitVelocity3 += 0.005;else this.limitVelocity3 = 0;
      }
    } else {
      this.limitState3 = 2;
      this.limitImpulse3 = 0;
    }
    if (this.enableMotor1 && (this.limitState1 != 0 || enableSpring1)) {
      this.maxMotorImpulse1 = this.maxMotorForce1 * timeStep;
    } else {
      this.motorImpulse1 = 0;
      this.maxMotorImpulse1 = 0;
    }
    if (this.enableMotor2 && (this.limitState2 != 0 || enableSpring2)) {
      this.maxMotorImpulse2 = this.maxMotorForce2 * timeStep;
    } else {
      this.motorImpulse2 = 0;
      this.maxMotorImpulse2 = 0;
    }
    if (this.enableMotor3 && (this.limitState3 != 0 || enableSpring3)) {
      this.maxMotorImpulse3 = this.maxMotorForce3 * timeStep;
    } else {
      this.motorImpulse3 = 0;
      this.maxMotorImpulse3 = 0;
    }
    var rdx = d1 * this.ax1 + d2 * this.ax2 + d3 * this.ax2;
    var rdy = d1 * this.ay1 + d2 * this.ay2 + d3 * this.ay2;
    var rdz = d1 * this.az1 + d2 * this.az2 + d3 * this.az2;
    var w1 = this.m2 / (this.m1 + this.m2);
    if (this.weight >= 0) w1 = this.weight;
    var w2 = 1 - w1;
    this.r1x = this.r1.x + rdx * w1;
    this.r1y = this.r1.y + rdy * w1;
    this.r1z = this.r1.z + rdz * w1;
    this.r2x = this.r2.x - rdx * w2;
    this.r2y = this.r2.y - rdy * w2;
    this.r2z = this.r2.z - rdz * w2;
    this.t1x1 = this.r1y * this.az1 - this.r1z * this.ay1;
    this.t1y1 = this.r1z * this.ax1 - this.r1x * this.az1;
    this.t1z1 = this.r1x * this.ay1 - this.r1y * this.ax1;
    this.t2x1 = this.r2y * this.az1 - this.r2z * this.ay1;
    this.t2y1 = this.r2z * this.ax1 - this.r2x * this.az1;
    this.t2z1 = this.r2x * this.ay1 - this.r2y * this.ax1;
    this.l1x1 = this.ax1 * this.m1;
    this.l1y1 = this.ay1 * this.m1;
    this.l1z1 = this.az1 * this.m1;
    this.l2x1 = this.ax1 * this.m2;
    this.l2y1 = this.ay1 * this.m2;
    this.l2z1 = this.az1 * this.m2;
    this.a1x1 = this.t1x1 * this.i1e00 + this.t1y1 * this.i1e01 + this.t1z1 * this.i1e02;
    this.a1y1 = this.t1x1 * this.i1e10 + this.t1y1 * this.i1e11 + this.t1z1 * this.i1e12;
    this.a1z1 = this.t1x1 * this.i1e20 + this.t1y1 * this.i1e21 + this.t1z1 * this.i1e22;
    this.a2x1 = this.t2x1 * this.i2e00 + this.t2y1 * this.i2e01 + this.t2z1 * this.i2e02;
    this.a2y1 = this.t2x1 * this.i2e10 + this.t2y1 * this.i2e11 + this.t2z1 * this.i2e12;
    this.a2z1 = this.t2x1 * this.i2e20 + this.t2y1 * this.i2e21 + this.t2z1 * this.i2e22;
    this.t1x2 = this.r1y * this.az2 - this.r1z * this.ay2;
    this.t1y2 = this.r1z * this.ax2 - this.r1x * this.az2;
    this.t1z2 = this.r1x * this.ay2 - this.r1y * this.ax2;
    this.t2x2 = this.r2y * this.az2 - this.r2z * this.ay2;
    this.t2y2 = this.r2z * this.ax2 - this.r2x * this.az2;
    this.t2z2 = this.r2x * this.ay2 - this.r2y * this.ax2;
    this.l1x2 = this.ax2 * this.m1;
    this.l1y2 = this.ay2 * this.m1;
    this.l1z2 = this.az2 * this.m1;
    this.l2x2 = this.ax2 * this.m2;
    this.l2y2 = this.ay2 * this.m2;
    this.l2z2 = this.az2 * this.m2;
    this.a1x2 = this.t1x2 * this.i1e00 + this.t1y2 * this.i1e01 + this.t1z2 * this.i1e02;
    this.a1y2 = this.t1x2 * this.i1e10 + this.t1y2 * this.i1e11 + this.t1z2 * this.i1e12;
    this.a1z2 = this.t1x2 * this.i1e20 + this.t1y2 * this.i1e21 + this.t1z2 * this.i1e22;
    this.a2x2 = this.t2x2 * this.i2e00 + this.t2y2 * this.i2e01 + this.t2z2 * this.i2e02;
    this.a2y2 = this.t2x2 * this.i2e10 + this.t2y2 * this.i2e11 + this.t2z2 * this.i2e12;
    this.a2z2 = this.t2x2 * this.i2e20 + this.t2y2 * this.i2e21 + this.t2z2 * this.i2e22;
    this.t1x3 = this.r1y * this.az3 - this.r1z * this.ay3;
    this.t1y3 = this.r1z * this.ax3 - this.r1x * this.az3;
    this.t1z3 = this.r1x * this.ay3 - this.r1y * this.ax3;
    this.t2x3 = this.r2y * this.az3 - this.r2z * this.ay3;
    this.t2y3 = this.r2z * this.ax3 - this.r2x * this.az3;
    this.t2z3 = this.r2x * this.ay3 - this.r2y * this.ax3;
    this.l1x3 = this.ax3 * this.m1;
    this.l1y3 = this.ay3 * this.m1;
    this.l1z3 = this.az3 * this.m1;
    this.l2x3 = this.ax3 * this.m2;
    this.l2y3 = this.ay3 * this.m2;
    this.l2z3 = this.az3 * this.m2;
    this.a1x3 = this.t1x3 * this.i1e00 + this.t1y3 * this.i1e01 + this.t1z3 * this.i1e02;
    this.a1y3 = this.t1x3 * this.i1e10 + this.t1y3 * this.i1e11 + this.t1z3 * this.i1e12;
    this.a1z3 = this.t1x3 * this.i1e20 + this.t1y3 * this.i1e21 + this.t1z3 * this.i1e22;
    this.a2x3 = this.t2x3 * this.i2e00 + this.t2y3 * this.i2e01 + this.t2z3 * this.i2e02;
    this.a2y3 = this.t2x3 * this.i2e10 + this.t2y3 * this.i2e11 + this.t2z3 * this.i2e12;
    this.a2z3 = this.t2x3 * this.i2e20 + this.t2y3 * this.i2e21 + this.t2z3 * this.i2e22;
    var m12 = this.m1 + this.m2;
    this.k00 = (this.ax1 * this.ax1 + this.ay1 * this.ay1 + this.az1 * this.az1) * m12;
    this.k01 = (this.ax1 * this.ax2 + this.ay1 * this.ay2 + this.az1 * this.az2) * m12;
    this.k02 = (this.ax1 * this.ax3 + this.ay1 * this.ay3 + this.az1 * this.az3) * m12;
    this.k10 = (this.ax2 * this.ax1 + this.ay2 * this.ay1 + this.az2 * this.az1) * m12;
    this.k11 = (this.ax2 * this.ax2 + this.ay2 * this.ay2 + this.az2 * this.az2) * m12;
    this.k12 = (this.ax2 * this.ax3 + this.ay2 * this.ay3 + this.az2 * this.az3) * m12;
    this.k20 = (this.ax3 * this.ax1 + this.ay3 * this.ay1 + this.az3 * this.az1) * m12;
    this.k21 = (this.ax3 * this.ax2 + this.ay3 * this.ay2 + this.az3 * this.az2) * m12;
    this.k22 = (this.ax3 * this.ax3 + this.ay3 * this.ay3 + this.az3 * this.az3) * m12;
    this.k00 += this.t1x1 * this.a1x1 + this.t1y1 * this.a1y1 + this.t1z1 * this.a1z1;
    this.k01 += this.t1x1 * this.a1x2 + this.t1y1 * this.a1y2 + this.t1z1 * this.a1z2;
    this.k02 += this.t1x1 * this.a1x3 + this.t1y1 * this.a1y3 + this.t1z1 * this.a1z3;
    this.k10 += this.t1x2 * this.a1x1 + this.t1y2 * this.a1y1 + this.t1z2 * this.a1z1;
    this.k11 += this.t1x2 * this.a1x2 + this.t1y2 * this.a1y2 + this.t1z2 * this.a1z2;
    this.k12 += this.t1x2 * this.a1x3 + this.t1y2 * this.a1y3 + this.t1z2 * this.a1z3;
    this.k20 += this.t1x3 * this.a1x1 + this.t1y3 * this.a1y1 + this.t1z3 * this.a1z1;
    this.k21 += this.t1x3 * this.a1x2 + this.t1y3 * this.a1y2 + this.t1z3 * this.a1z2;
    this.k22 += this.t1x3 * this.a1x3 + this.t1y3 * this.a1y3 + this.t1z3 * this.a1z3;
    this.k00 += this.t2x1 * this.a2x1 + this.t2y1 * this.a2y1 + this.t2z1 * this.a2z1;
    this.k01 += this.t2x1 * this.a2x2 + this.t2y1 * this.a2y2 + this.t2z1 * this.a2z2;
    this.k02 += this.t2x1 * this.a2x3 + this.t2y1 * this.a2y3 + this.t2z1 * this.a2z3;
    this.k10 += this.t2x2 * this.a2x1 + this.t2y2 * this.a2y1 + this.t2z2 * this.a2z1;
    this.k11 += this.t2x2 * this.a2x2 + this.t2y2 * this.a2y2 + this.t2z2 * this.a2z2;
    this.k12 += this.t2x2 * this.a2x3 + this.t2y2 * this.a2y3 + this.t2z2 * this.a2z3;
    this.k20 += this.t2x3 * this.a2x1 + this.t2y3 * this.a2y1 + this.t2z3 * this.a2z1;
    this.k21 += this.t2x3 * this.a2x2 + this.t2y3 * this.a2y2 + this.t2z3 * this.a2z2;
    this.k22 += this.t2x3 * this.a2x3 + this.t2y3 * this.a2y3 + this.t2z3 * this.a2z3;
    this.kv00 = this.k00;
    this.kv11 = this.k11;
    this.kv22 = this.k22;
    this.dv00 = 1 / this.kv00;
    this.dv11 = 1 / this.kv11;
    this.dv22 = 1 / this.kv22;
    if (enableSpring1 && this.limitState1 != 2) {
      var omega = 6.2831853 * frequency1;
      var k = omega * omega * timeStep;
      var dmp = invTimeStep / (k + 2 * this.limitMotor1.dampingRatio * omega);
      this.cfm1 = this.kv00 * dmp;
      this.limitVelocity1 *= k * dmp;
    } else {
      this.cfm1 = 0;
      this.limitVelocity1 *= invTimeStep * 0.05;
    }
    if (enableSpring2 && this.limitState2 != 2) {
      omega = 6.2831853 * frequency2;
      k = omega * omega * timeStep;
      dmp = invTimeStep / (k + 2 * this.limitMotor2.dampingRatio * omega);
      this.cfm2 = this.kv11 * dmp;
      this.limitVelocity2 *= k * dmp;
    } else {
      this.cfm2 = 0;
      this.limitVelocity2 *= invTimeStep * 0.05;
    }
    if (enableSpring3 && this.limitState3 != 2) {
      omega = 6.2831853 * frequency3;
      k = omega * omega * timeStep;
      dmp = invTimeStep / (k + 2 * this.limitMotor3.dampingRatio * omega);
      this.cfm3 = this.kv22 * dmp;
      this.limitVelocity3 *= k * dmp;
    } else {
      this.cfm3 = 0;
      this.limitVelocity3 *= invTimeStep * 0.05;
    }
    this.k00 += this.cfm1;
    this.k11 += this.cfm2;
    this.k22 += this.cfm3;
    var inv = 1 / (this.k00 * (this.k11 * this.k22 - this.k21 * this.k12) + this.k10 * (this.k21 * this.k02 - this.k01 * this.k22) + this.k20 * (this.k01 * this.k12 - this.k11 * this.k02));
    this.d00 = (this.k11 * this.k22 - this.k12 * this.k21) * inv;
    this.d01 = (this.k02 * this.k21 - this.k01 * this.k22) * inv;
    this.d02 = (this.k01 * this.k12 - this.k02 * this.k11) * inv;
    this.d10 = (this.k12 * this.k20 - this.k10 * this.k22) * inv;
    this.d11 = (this.k00 * this.k22 - this.k02 * this.k20) * inv;
    this.d12 = (this.k02 * this.k10 - this.k00 * this.k12) * inv;
    this.d20 = (this.k10 * this.k21 - this.k11 * this.k20) * inv;
    this.d21 = (this.k01 * this.k20 - this.k00 * this.k21) * inv;
    this.d22 = (this.k00 * this.k11 - this.k01 * this.k10) * inv;
    var totalImpulse1 = this.limitImpulse1 + this.motorImpulse1;
    var totalImpulse2 = this.limitImpulse2 + this.motorImpulse2;
    var totalImpulse3 = this.limitImpulse3 + this.motorImpulse3;
    this.l1.x += totalImpulse1 * this.l1x1 + totalImpulse2 * this.l1x2 + totalImpulse3 * this.l1x3;
    this.l1.y += totalImpulse1 * this.l1y1 + totalImpulse2 * this.l1y2 + totalImpulse3 * this.l1y3;
    this.l1.z += totalImpulse1 * this.l1z1 + totalImpulse2 * this.l1z2 + totalImpulse3 * this.l1z3;
    this.a1.x += totalImpulse1 * this.a1x1 + totalImpulse2 * this.a1x2 + totalImpulse3 * this.a1x3;
    this.a1.y += totalImpulse1 * this.a1y1 + totalImpulse2 * this.a1y2 + totalImpulse3 * this.a1y3;
    this.a1.z += totalImpulse1 * this.a1z1 + totalImpulse2 * this.a1z2 + totalImpulse3 * this.a1z3;
    this.l2.x -= totalImpulse1 * this.l2x1 + totalImpulse2 * this.l2x2 + totalImpulse3 * this.l2x3;
    this.l2.y -= totalImpulse1 * this.l2y1 + totalImpulse2 * this.l2y2 + totalImpulse3 * this.l2y3;
    this.l2.z -= totalImpulse1 * this.l2z1 + totalImpulse2 * this.l2z2 + totalImpulse3 * this.l2z3;
    this.a2.x -= totalImpulse1 * this.a2x1 + totalImpulse2 * this.a2x2 + totalImpulse3 * this.a2x3;
    this.a2.y -= totalImpulse1 * this.a2y1 + totalImpulse2 * this.a2y2 + totalImpulse3 * this.a2y3;
    this.a2.z -= totalImpulse1 * this.a2z1 + totalImpulse2 * this.a2z2 + totalImpulse3 * this.a2z3;
  },
  solve: function () {
    var rvx = this.l2.x - this.l1.x + this.a2.y * this.r2z - this.a2.z * this.r2y - this.a1.y * this.r1z + this.a1.z * this.r1y;
    var rvy = this.l2.y - this.l1.y + this.a2.z * this.r2x - this.a2.x * this.r2z - this.a1.z * this.r1x + this.a1.x * this.r1z;
    var rvz = this.l2.z - this.l1.z + this.a2.x * this.r2y - this.a2.y * this.r2x - this.a1.x * this.r1y + this.a1.y * this.r1x;
    var rvn1 = rvx * this.ax1 + rvy * this.ay1 + rvz * this.az1;
    var rvn2 = rvx * this.ax2 + rvy * this.ay2 + rvz * this.az2;
    var rvn3 = rvx * this.ax3 + rvy * this.ay3 + rvz * this.az3;
    var oldMotorImpulse1 = this.motorImpulse1;
    var oldMotorImpulse2 = this.motorImpulse2;
    var oldMotorImpulse3 = this.motorImpulse3;
    var dMotorImpulse1 = 0;
    var dMotorImpulse2 = 0;
    var dMotorImpulse3 = 0;
    if (this.enableMotor1) {
      dMotorImpulse1 = (rvn1 - this.motorSpeed1) * this.dv00;
      this.motorImpulse1 += dMotorImpulse1;
      if (this.motorImpulse1 > this.maxMotorImpulse1) {
        this.motorImpulse1 = this.maxMotorImpulse1;
      } else if (this.motorImpulse1 < -this.maxMotorImpulse1) {
        this.motorImpulse1 = -this.maxMotorImpulse1;
      }
      dMotorImpulse1 = this.motorImpulse1 - oldMotorImpulse1;
    }
    if (this.enableMotor2) {
      dMotorImpulse2 = (rvn2 - this.motorSpeed2) * this.dv11;
      this.motorImpulse2 += dMotorImpulse2;
      if (this.motorImpulse2 > this.maxMotorImpulse2) {
        this.motorImpulse2 = this.maxMotorImpulse2;
      } else if (this.motorImpulse2 < -this.maxMotorImpulse2) {
        this.motorImpulse2 = -this.maxMotorImpulse2;
      }
      dMotorImpulse2 = this.motorImpulse2 - oldMotorImpulse2;
    }
    if (this.enableMotor3) {
      dMotorImpulse3 = (rvn3 - this.motorSpeed3) * this.dv22;
      this.motorImpulse3 += dMotorImpulse3;
      if (this.motorImpulse3 > this.maxMotorImpulse3) {
        this.motorImpulse3 = this.maxMotorImpulse3;
      } else if (this.motorImpulse3 < -this.maxMotorImpulse3) {
        this.motorImpulse3 = -this.maxMotorImpulse3;
      }
      dMotorImpulse3 = this.motorImpulse3 - oldMotorImpulse3;
    }
    rvn1 += dMotorImpulse1 * this.kv00 + dMotorImpulse2 * this.k01 + dMotorImpulse3 * this.k02;
    rvn2 += dMotorImpulse1 * this.k10 + dMotorImpulse2 * this.kv11 + dMotorImpulse3 * this.k12;
    rvn3 += dMotorImpulse1 * this.k20 + dMotorImpulse2 * this.k21 + dMotorImpulse3 * this.kv22;
    rvn1 -= this.limitVelocity1 + this.limitImpulse1 * this.cfm1;
    rvn2 -= this.limitVelocity2 + this.limitImpulse2 * this.cfm2;
    rvn3 -= this.limitVelocity3 + this.limitImpulse3 * this.cfm3;
    var oldLimitImpulse1 = this.limitImpulse1;
    var oldLimitImpulse2 = this.limitImpulse2;
    var oldLimitImpulse3 = this.limitImpulse3;
    var dLimitImpulse1 = rvn1 * this.d00 + rvn2 * this.d01 + rvn3 * this.d02;
    var dLimitImpulse2 = rvn1 * this.d10 + rvn2 * this.d11 + rvn3 * this.d12;
    var dLimitImpulse3 = rvn1 * this.d20 + rvn2 * this.d21 + rvn3 * this.d22;
    this.limitImpulse1 += dLimitImpulse1;
    this.limitImpulse2 += dLimitImpulse2;
    this.limitImpulse3 += dLimitImpulse3;
    var clampState = 0;
    if (this.limitState1 == 2 || this.limitImpulse1 * this.limitState1 < 0) {
      dLimitImpulse1 = -oldLimitImpulse1;
      rvn2 += dLimitImpulse1 * this.k10;
      rvn3 += dLimitImpulse1 * this.k20;
      clampState |= 1;
    }
    if (this.limitState2 == 2 || this.limitImpulse2 * this.limitState2 < 0) {
      dLimitImpulse2 = -oldLimitImpulse2;
      rvn1 += dLimitImpulse2 * this.k01;
      rvn3 += dLimitImpulse2 * this.k21;
      clampState |= 2;
    }
    if (this.limitState3 == 2 || this.limitImpulse3 * this.limitState3 < 0) {
      dLimitImpulse3 = -oldLimitImpulse3;
      rvn1 += dLimitImpulse3 * this.k02;
      rvn2 += dLimitImpulse3 * this.k12;
      clampState |= 4;
    }
    var det;
    switch (clampState) {
      case 1:
        det = 1 / (this.k11 * this.k22 - this.k12 * this.k21);
        dLimitImpulse2 = (this.k22 * rvn2 + -this.k12 * rvn3) * det;
        dLimitImpulse3 = (-this.k21 * rvn2 + this.k11 * rvn3) * det;
        break;
      case 2:
        det = 1 / (this.k00 * this.k22 - this.k02 * this.k20);
        dLimitImpulse1 = (this.k22 * rvn1 + -this.k02 * rvn3) * det;
        dLimitImpulse3 = (-this.k20 * rvn1 + this.k00 * rvn3) * det;
        break;
      case 3:
        dLimitImpulse3 = rvn3 / this.k22;
        break;
      case 4:
        det = 1 / (this.k00 * this.k11 - this.k01 * this.k10);
        dLimitImpulse1 = (this.k11 * rvn1 + -this.k01 * rvn2) * det;
        dLimitImpulse2 = (-this.k10 * rvn1 + this.k00 * rvn2) * det;
        break;
      case 5:
        dLimitImpulse2 = rvn2 / this.k11;
        break;
      case 6:
        dLimitImpulse1 = rvn1 / this.k00;
        break;
    }
    this.limitImpulse1 = oldLimitImpulse1 + dLimitImpulse1;
    this.limitImpulse2 = oldLimitImpulse2 + dLimitImpulse2;
    this.limitImpulse3 = oldLimitImpulse3 + dLimitImpulse3;
    var dImpulse1 = dMotorImpulse1 + dLimitImpulse1;
    var dImpulse2 = dMotorImpulse2 + dLimitImpulse2;
    var dImpulse3 = dMotorImpulse3 + dLimitImpulse3;
    this.l1.x += dImpulse1 * this.l1x1 + dImpulse2 * this.l1x2 + dImpulse3 * this.l1x3;
    this.l1.y += dImpulse1 * this.l1y1 + dImpulse2 * this.l1y2 + dImpulse3 * this.l1y3;
    this.l1.z += dImpulse1 * this.l1z1 + dImpulse2 * this.l1z2 + dImpulse3 * this.l1z3;
    this.a1.x += dImpulse1 * this.a1x1 + dImpulse2 * this.a1x2 + dImpulse3 * this.a1x3;
    this.a1.y += dImpulse1 * this.a1y1 + dImpulse2 * this.a1y2 + dImpulse3 * this.a1y3;
    this.a1.z += dImpulse1 * this.a1z1 + dImpulse2 * this.a1z2 + dImpulse3 * this.a1z3;
    this.l2.x -= dImpulse1 * this.l2x1 + dImpulse2 * this.l2x2 + dImpulse3 * this.l2x3;
    this.l2.y -= dImpulse1 * this.l2y1 + dImpulse2 * this.l2y2 + dImpulse3 * this.l2y3;
    this.l2.z -= dImpulse1 * this.l2z1 + dImpulse2 * this.l2z2 + dImpulse3 * this.l2z3;
    this.a2.x -= dImpulse1 * this.a2x1 + dImpulse2 * this.a2x2 + dImpulse3 * this.a2x3;
    this.a2.y -= dImpulse1 * this.a2y1 + dImpulse2 * this.a2y2 + dImpulse3 * this.a2y3;
    this.a2.z -= dImpulse1 * this.a2z1 + dImpulse2 * this.a2z2 + dImpulse3 * this.a2z3;
  }
});
function PrismaticJoint(config, lowerTranslation, upperTranslation) {
  Joint.call(this, config);
  this.type = JOINT_PRISMATIC;
  this.localAxis1 = config.localAxis1.clone().normalize();
  this.localAxis2 = config.localAxis2.clone().normalize();
  this.ax1 = new Vec3();
  this.ax2 = new Vec3();
  this.nor = new Vec3();
  this.tan = new Vec3();
  this.bin = new Vec3();
  this.ac = new AngularConstraint(this, new Quat().setFromUnitVectors(this.localAxis1, this.localAxis2));
  this.limitMotor = new LimitMotor(this.nor, true);
  this.limitMotor.lowerLimit = lowerTranslation;
  this.limitMotor.upperLimit = upperTranslation;
  this.t3 = new Translational3Constraint(this, this.limitMotor, new LimitMotor(this.tan, true), new LimitMotor(this.bin, true));
}
PrismaticJoint.prototype = Object.assign(Object.create(Joint.prototype), {
  constructor: PrismaticJoint,
  preSolve: function (timeStep, invTimeStep) {
    this.updateAnchorPoints();
    this.ax1.copy(this.localAxis1).applyMatrix3(this.body1.rotation, true);
    this.ax2.copy(this.localAxis2).applyMatrix3(this.body2.rotation, true);
    this.nor.set(this.ax1.x * this.body2.inverseMass + this.ax2.x * this.body1.inverseMass, this.ax1.y * this.body2.inverseMass + this.ax2.y * this.body1.inverseMass, this.ax1.z * this.body2.inverseMass + this.ax2.z * this.body1.inverseMass).normalize();
    this.tan.tangent(this.nor).normalize();
    this.bin.crossVectors(this.nor, this.tan);
    this.ac.preSolve(timeStep, invTimeStep);
    this.t3.preSolve(timeStep, invTimeStep);
  },
  solve: function () {
    this.ac.solve();
    this.t3.solve();
  },
  postSolve: function () {}
});
function SliderJoint(config, lowerTranslation, upperTranslation) {
  Joint.call(this, config);
  this.type = JOINT_SLIDER;
  this.localAxis1 = config.localAxis1.clone().normalize();
  this.localAxis2 = config.localAxis2.clone().normalize();
  var arc = new Mat33().setQuat(new Quat().setFromUnitVectors(this.localAxis1, this.localAxis2));
  this.localAngle1 = new Vec3().tangent(this.localAxis1).normalize();
  this.localAngle2 = this.localAngle1.clone().applyMatrix3(arc, true);
  this.ax1 = new Vec3();
  this.ax2 = new Vec3();
  this.an1 = new Vec3();
  this.an2 = new Vec3();
  this.tmp = new Vec3();
  this.nor = new Vec3();
  this.tan = new Vec3();
  this.bin = new Vec3();
  this.rotationalLimitMotor = new LimitMotor(this.nor, false);
  this.r3 = new Rotational3Constraint(this, this.rotationalLimitMotor, new LimitMotor(this.tan, true), new LimitMotor(this.bin, true));
  this.translationalLimitMotor = new LimitMotor(this.nor, true);
  this.translationalLimitMotor.lowerLimit = lowerTranslation;
  this.translationalLimitMotor.upperLimit = upperTranslation;
  this.t3 = new Translational3Constraint(this, this.translationalLimitMotor, new LimitMotor(this.tan, true), new LimitMotor(this.bin, true));
}
SliderJoint.prototype = Object.assign(Object.create(Joint.prototype), {
  constructor: SliderJoint,
  preSolve: function (timeStep, invTimeStep) {
    this.updateAnchorPoints();
    this.ax1.copy(this.localAxis1).applyMatrix3(this.body1.rotation, true);
    this.an1.copy(this.localAngle1).applyMatrix3(this.body1.rotation, true);
    this.ax2.copy(this.localAxis2).applyMatrix3(this.body2.rotation, true);
    this.an2.copy(this.localAngle2).applyMatrix3(this.body2.rotation, true);
    this.nor.set(this.ax1.x * this.body2.inverseMass + this.ax2.x * this.body1.inverseMass, this.ax1.y * this.body2.inverseMass + this.ax2.y * this.body1.inverseMass, this.ax1.z * this.body2.inverseMass + this.ax2.z * this.body1.inverseMass).normalize();
    this.tan.tangent(this.nor).normalize();
    this.bin.crossVectors(this.nor, this.tan);
    this.tmp.crossVectors(this.an1, this.an2);
    var limite = _Math.acosClamp(_Math.dotVectors(this.an1, this.an2));
    if (_Math.dotVectors(this.nor, this.tmp) < 0) this.rotationalLimitMotor.angle = -limite;else this.rotationalLimitMotor.angle = limite;
    this.tmp.crossVectors(this.ax1, this.ax2);
    this.r3.limitMotor2.angle = _Math.dotVectors(this.tan, this.tmp);
    this.r3.limitMotor3.angle = _Math.dotVectors(this.bin, this.tmp);
    this.r3.preSolve(timeStep, invTimeStep);
    this.t3.preSolve(timeStep, invTimeStep);
  },
  solve: function () {
    this.r3.solve();
    this.t3.solve();
  },
  postSolve: function () {}
});
function WheelJoint(config) {
  Joint.call(this, config);
  this.type = JOINT_WHEEL;
  this.localAxis1 = config.localAxis1.clone().normalize();
  this.localAxis2 = config.localAxis2.clone().normalize();
  this.localAngle1 = new Vec3();
  this.localAngle2 = new Vec3();
  var dot = _Math.dotVectors(this.localAxis1, this.localAxis2);
  if (dot > -1 && dot < 1) {
    this.localAngle1.set(this.localAxis2.x - dot * this.localAxis1.x, this.localAxis2.y - dot * this.localAxis1.y, this.localAxis2.z - dot * this.localAxis1.z).normalize();
    this.localAngle2.set(this.localAxis1.x - dot * this.localAxis2.x, this.localAxis1.y - dot * this.localAxis2.y, this.localAxis1.z - dot * this.localAxis2.z).normalize();
  } else {
    var arc = new Mat33().setQuat(new Quat().setFromUnitVectors(this.localAxis1, this.localAxis2));
    this.localAngle1.tangent(this.localAxis1).normalize();
    this.localAngle2 = this.localAngle1.clone().applyMatrix3(arc, true);
  }
  this.ax1 = new Vec3();
  this.ax2 = new Vec3();
  this.an1 = new Vec3();
  this.an2 = new Vec3();
  this.tmp = new Vec3();
  this.nor = new Vec3();
  this.tan = new Vec3();
  this.bin = new Vec3();
  this.translationalLimitMotor = new LimitMotor(this.tan, true);
  this.translationalLimitMotor.frequency = 8;
  this.translationalLimitMotor.dampingRatio = 1;
  this.rotationalLimitMotor1 = new LimitMotor(this.tan, false);
  this.rotationalLimitMotor2 = new LimitMotor(this.bin, false);
  this.t3 = new Translational3Constraint(this, new LimitMotor(this.nor, true), this.translationalLimitMotor, new LimitMotor(this.bin, true));
  this.t3.weight = 1;
  this.r3 = new Rotational3Constraint(this, new LimitMotor(this.nor, true), this.rotationalLimitMotor1, this.rotationalLimitMotor2);
}
WheelJoint.prototype = Object.assign(Object.create(Joint.prototype), {
  constructor: WheelJoint,
  preSolve: function (timeStep, invTimeStep) {
    this.updateAnchorPoints();
    this.ax1.copy(this.localAxis1).applyMatrix3(this.body1.rotation, true);
    this.an1.copy(this.localAngle1).applyMatrix3(this.body1.rotation, true);
    this.ax2.copy(this.localAxis2).applyMatrix3(this.body2.rotation, true);
    this.an2.copy(this.localAngle2).applyMatrix3(this.body2.rotation, true);
    this.r3.limitMotor1.angle = _Math.dotVectors(this.ax1, this.ax2);
    var limite = _Math.dotVectors(this.an1, this.ax2);
    if (_Math.dotVectors(this.ax1, this.tmp.crossVectors(this.an1, this.ax2)) < 0) this.rotationalLimitMotor1.angle = -limite;else this.rotationalLimitMotor1.angle = limite;
    limite = _Math.dotVectors(this.an2, this.ax1);
    if (_Math.dotVectors(this.ax2, this.tmp.crossVectors(this.an2, this.ax1)) < 0) this.rotationalLimitMotor2.angle = -limite;else this.rotationalLimitMotor2.angle = limite;
    this.nor.crossVectors(this.ax1, this.ax2).normalize();
    this.tan.crossVectors(this.nor, this.ax2).normalize();
    this.bin.crossVectors(this.nor, this.ax1).normalize();
    this.r3.preSolve(timeStep, invTimeStep);
    this.t3.preSolve(timeStep, invTimeStep);
  },
  solve: function () {
    this.r3.solve();
    this.t3.solve();
  },
  postSolve: function () {}
});
function JointConfig() {
  this.scale = 1;
  this.invScale = 1;
  this.body1 = null;
  this.body2 = null;
  this.localAnchorPoint1 = new Vec3();
  this.localAnchorPoint2 = new Vec3();
  this.localAxis1 = new Vec3();
  this.localAxis2 = new Vec3();
  this.allowCollision = false;
}
function MassInfo() {
  this.mass = 0;
  this.inertia = new Mat33();
}
function ContactLink(contact) {
  this.prev = null;
  this.next = null;
  this.shape = null;
  this.body = null;
  this.contact = contact;
}
function ImpulseDataBuffer() {
  this.lp1X = NaN;
  this.lp1Y = NaN;
  this.lp1Z = NaN;
  this.lp2X = NaN;
  this.lp2Y = NaN;
  this.lp2Z = NaN;
  this.impulse = NaN;
}
function ManifoldPoint() {
  this.warmStarted = false;
  this.position = new Vec3();
  this.localPoint1 = new Vec3();
  this.localPoint2 = new Vec3();
  this.normal = new Vec3();
  this.tangent = new Vec3();
  this.binormal = new Vec3();
  this.normalImpulse = 0;
  this.tangentImpulse = 0;
  this.binormalImpulse = 0;
  this.normalDenominator = 0;
  this.tangentDenominator = 0;
  this.binormalDenominator = 0;
  this.penetration = 0;
}
function ContactManifold() {
  this.body1 = null;
  this.body2 = null;
  this.numPoints = 0;
  this.points = [new ManifoldPoint(), new ManifoldPoint(), new ManifoldPoint(), new ManifoldPoint()];
}
ContactManifold.prototype = {
  constructor: ContactManifold,
  reset: function (shape1, shape2) {
    this.body1 = shape1.parent;
    this.body2 = shape2.parent;
    this.numPoints = 0;
  },
  addPointVec: function (pos, norm, penetration, flip) {
    var p = this.points[this.numPoints++];
    p.position.copy(pos);
    p.localPoint1.sub(pos, this.body1.position).applyMatrix3(this.body1.rotation);
    p.localPoint2.sub(pos, this.body2.position).applyMatrix3(this.body2.rotation);
    p.normal.copy(norm);
    if (flip) p.normal.negate();
    p.normalImpulse = 0;
    p.penetration = penetration;
    p.warmStarted = false;
  },
  addPoint: function (x, y, z, nx, ny, nz, penetration, flip) {
    var p = this.points[this.numPoints++];
    p.position.set(x, y, z);
    p.localPoint1.sub(p.position, this.body1.position).applyMatrix3(this.body1.rotation);
    p.localPoint2.sub(p.position, this.body2.position).applyMatrix3(this.body2.rotation);
    p.normalImpulse = 0;
    p.normal.set(nx, ny, nz);
    if (flip) p.normal.negate();
    p.penetration = penetration;
    p.warmStarted = false;
  }
};
function ContactPointDataBuffer() {
  this.nor = new Vec3();
  this.tan = new Vec3();
  this.bin = new Vec3();
  this.norU1 = new Vec3();
  this.tanU1 = new Vec3();
  this.binU1 = new Vec3();
  this.norU2 = new Vec3();
  this.tanU2 = new Vec3();
  this.binU2 = new Vec3();
  this.norT1 = new Vec3();
  this.tanT1 = new Vec3();
  this.binT1 = new Vec3();
  this.norT2 = new Vec3();
  this.tanT2 = new Vec3();
  this.binT2 = new Vec3();
  this.norTU1 = new Vec3();
  this.tanTU1 = new Vec3();
  this.binTU1 = new Vec3();
  this.norTU2 = new Vec3();
  this.tanTU2 = new Vec3();
  this.binTU2 = new Vec3();
  this.norImp = 0;
  this.tanImp = 0;
  this.binImp = 0;
  this.norDen = 0;
  this.tanDen = 0;
  this.binDen = 0;
  this.norTar = 0;
  this.next = null;
  this.last = false;
}
function ContactConstraint(manifold) {
  Constraint.call(this);
  this.manifold = manifold;
  this.restitution = NaN;
  this.friction = NaN;
  this.p1 = null;
  this.p2 = null;
  this.lv1 = null;
  this.lv2 = null;
  this.av1 = null;
  this.av2 = null;
  this.i1 = null;
  this.i2 = null;
  this.tmp = new Vec3();
  this.tmpC1 = new Vec3();
  this.tmpC2 = new Vec3();
  this.tmpP1 = new Vec3();
  this.tmpP2 = new Vec3();
  this.tmplv1 = new Vec3();
  this.tmplv2 = new Vec3();
  this.tmpav1 = new Vec3();
  this.tmpav2 = new Vec3();
  this.m1 = NaN;
  this.m2 = NaN;
  this.num = 0;
  this.ps = manifold.points;
  this.cs = new ContactPointDataBuffer();
  this.cs.next = new ContactPointDataBuffer();
  this.cs.next.next = new ContactPointDataBuffer();
  this.cs.next.next.next = new ContactPointDataBuffer();
}
ContactConstraint.prototype = Object.assign(Object.create(Constraint.prototype), {
  constructor: ContactConstraint,
  attach: function () {
    this.p1 = this.body1.position;
    this.p2 = this.body2.position;
    this.lv1 = this.body1.linearVelocity;
    this.av1 = this.body1.angularVelocity;
    this.lv2 = this.body2.linearVelocity;
    this.av2 = this.body2.angularVelocity;
    this.i1 = this.body1.inverseInertia;
    this.i2 = this.body2.inverseInertia;
  },
  detach: function () {
    this.p1 = null;
    this.p2 = null;
    this.lv1 = null;
    this.lv2 = null;
    this.av1 = null;
    this.av2 = null;
    this.i1 = null;
    this.i2 = null;
  },
  preSolve: function (timeStep, invTimeStep) {
    this.m1 = this.body1.inverseMass;
    this.m2 = this.body2.inverseMass;
    var m1m2 = this.m1 + this.m2;
    this.num = this.manifold.numPoints;
    var c = this.cs;
    var p, rvn, len, norImp, norTar, sepV, i1, i2;
    for (var i = 0; i < this.num; i++) {
      p = this.ps[i];
      this.tmpP1.sub(p.position, this.p1);
      this.tmpP2.sub(p.position, this.p2);
      this.tmpC1.crossVectors(this.av1, this.tmpP1);
      this.tmpC2.crossVectors(this.av2, this.tmpP2);
      c.norImp = p.normalImpulse;
      c.tanImp = p.tangentImpulse;
      c.binImp = p.binormalImpulse;
      c.nor.copy(p.normal);
      this.tmp.set(this.lv2.x + this.tmpC2.x - (this.lv1.x + this.tmpC1.x), this.lv2.y + this.tmpC2.y - (this.lv1.y + this.tmpC1.y), this.lv2.z + this.tmpC2.z - (this.lv1.z + this.tmpC1.z));
      rvn = _Math.dotVectors(c.nor, this.tmp);
      c.tan.set(this.tmp.x - rvn * c.nor.x, this.tmp.y - rvn * c.nor.y, this.tmp.z - rvn * c.nor.z);
      len = _Math.dotVectors(c.tan, c.tan);
      if (len <= 0.04) {
        c.tan.tangent(c.nor);
      }
      c.tan.normalize();
      c.bin.crossVectors(c.nor, c.tan);
      c.norU1.scale(c.nor, this.m1);
      c.norU2.scale(c.nor, this.m2);
      c.tanU1.scale(c.tan, this.m1);
      c.tanU2.scale(c.tan, this.m2);
      c.binU1.scale(c.bin, this.m1);
      c.binU2.scale(c.bin, this.m2);
      c.norT1.crossVectors(this.tmpP1, c.nor);
      c.tanT1.crossVectors(this.tmpP1, c.tan);
      c.binT1.crossVectors(this.tmpP1, c.bin);
      c.norT2.crossVectors(this.tmpP2, c.nor);
      c.tanT2.crossVectors(this.tmpP2, c.tan);
      c.binT2.crossVectors(this.tmpP2, c.bin);
      i1 = this.i1;
      i2 = this.i2;
      c.norTU1.copy(c.norT1).applyMatrix3(i1, true);
      c.tanTU1.copy(c.tanT1).applyMatrix3(i1, true);
      c.binTU1.copy(c.binT1).applyMatrix3(i1, true);
      c.norTU2.copy(c.norT2).applyMatrix3(i2, true);
      c.tanTU2.copy(c.tanT2).applyMatrix3(i2, true);
      c.binTU2.copy(c.binT2).applyMatrix3(i2, true);
      this.tmpC1.crossVectors(c.norTU1, this.tmpP1);
      this.tmpC2.crossVectors(c.norTU2, this.tmpP2);
      this.tmp.add(this.tmpC1, this.tmpC2);
      c.norDen = 1 / (m1m2 + _Math.dotVectors(c.nor, this.tmp));
      this.tmpC1.crossVectors(c.tanTU1, this.tmpP1);
      this.tmpC2.crossVectors(c.tanTU2, this.tmpP2);
      this.tmp.add(this.tmpC1, this.tmpC2);
      c.tanDen = 1 / (m1m2 + _Math.dotVectors(c.tan, this.tmp));
      this.tmpC1.crossVectors(c.binTU1, this.tmpP1);
      this.tmpC2.crossVectors(c.binTU2, this.tmpP2);
      this.tmp.add(this.tmpC1, this.tmpC2);
      c.binDen = 1 / (m1m2 + _Math.dotVectors(c.bin, this.tmp));
      if (p.warmStarted) {
        norImp = p.normalImpulse;
        this.lv1.addScaledVector(c.norU1, norImp);
        this.av1.addScaledVector(c.norTU1, norImp);
        this.lv2.subScaledVector(c.norU2, norImp);
        this.av2.subScaledVector(c.norTU2, norImp);
        c.norImp = norImp;
        c.tanImp = 0;
        c.binImp = 0;
        rvn = 0;
      } else {
        c.norImp = 0;
        c.tanImp = 0;
        c.binImp = 0;
      }
      if (rvn > -1) rvn = 0;
      norTar = this.restitution * -rvn;
      sepV = -(p.penetration + 0.005) * invTimeStep * 0.05;
      if (norTar < sepV) norTar = sepV;
      c.norTar = norTar;
      c.last = i == this.num - 1;
      c = c.next;
    }
  },
  solve: function () {
    this.tmplv1.copy(this.lv1);
    this.tmplv2.copy(this.lv2);
    this.tmpav1.copy(this.av1);
    this.tmpav2.copy(this.av2);
    var oldImp1, newImp1, oldImp2, newImp2, rvn, norImp, tanImp, binImp, max, len;
    var c = this.cs;
    while (true) {
      norImp = c.norImp;
      tanImp = c.tanImp;
      binImp = c.binImp;
      max = -norImp * this.friction;
      this.tmp.sub(this.tmplv2, this.tmplv1);
      rvn = _Math.dotVectors(this.tmp, c.tan) + _Math.dotVectors(this.tmpav2, c.tanT2) - _Math.dotVectors(this.tmpav1, c.tanT1);
      oldImp1 = tanImp;
      newImp1 = rvn * c.tanDen;
      tanImp += newImp1;
      rvn = _Math.dotVectors(this.tmp, c.bin) + _Math.dotVectors(this.tmpav2, c.binT2) - _Math.dotVectors(this.tmpav1, c.binT1);
      oldImp2 = binImp;
      newImp2 = rvn * c.binDen;
      binImp += newImp2;
      len = tanImp * tanImp + binImp * binImp;
      if (len > max * max) {
        len = max / _Math.sqrt(len);
        tanImp *= len;
        binImp *= len;
      }
      newImp1 = tanImp - oldImp1;
      newImp2 = binImp - oldImp2;
      this.tmp.set(c.tanU1.x * newImp1 + c.binU1.x * newImp2, c.tanU1.y * newImp1 + c.binU1.y * newImp2, c.tanU1.z * newImp1 + c.binU1.z * newImp2);
      this.tmplv1.addEqual(this.tmp);
      this.tmp.set(c.tanTU1.x * newImp1 + c.binTU1.x * newImp2, c.tanTU1.y * newImp1 + c.binTU1.y * newImp2, c.tanTU1.z * newImp1 + c.binTU1.z * newImp2);
      this.tmpav1.addEqual(this.tmp);
      this.tmp.set(c.tanU2.x * newImp1 + c.binU2.x * newImp2, c.tanU2.y * newImp1 + c.binU2.y * newImp2, c.tanU2.z * newImp1 + c.binU2.z * newImp2);
      this.tmplv2.subEqual(this.tmp);
      this.tmp.set(c.tanTU2.x * newImp1 + c.binTU2.x * newImp2, c.tanTU2.y * newImp1 + c.binTU2.y * newImp2, c.tanTU2.z * newImp1 + c.binTU2.z * newImp2);
      this.tmpav2.subEqual(this.tmp);
      this.tmp.sub(this.tmplv2, this.tmplv1);
      rvn = _Math.dotVectors(this.tmp, c.nor) + _Math.dotVectors(this.tmpav2, c.norT2) - _Math.dotVectors(this.tmpav1, c.norT1);
      oldImp1 = norImp;
      newImp1 = (rvn - c.norTar) * c.norDen;
      norImp += newImp1;
      if (norImp > 0) norImp = 0;
      newImp1 = norImp - oldImp1;
      this.tmplv1.addScaledVector(c.norU1, newImp1);
      this.tmpav1.addScaledVector(c.norTU1, newImp1);
      this.tmplv2.subScaledVector(c.norU2, newImp1);
      this.tmpav2.subScaledVector(c.norTU2, newImp1);
      c.norImp = norImp;
      c.tanImp = tanImp;
      c.binImp = binImp;
      if (c.last) break;
      c = c.next;
    }
    this.lv1.copy(this.tmplv1);
    this.lv2.copy(this.tmplv2);
    this.av1.copy(this.tmpav1);
    this.av2.copy(this.tmpav2);
  },
  postSolve: function () {
    var c = this.cs,
        p;
    var i = this.num;
    while (i--) {
      p = this.ps[i];
      p.normal.copy(c.nor);
      p.tangent.copy(c.tan);
      p.binormal.copy(c.bin);
      p.normalImpulse = c.norImp;
      p.tangentImpulse = c.tanImp;
      p.binormalImpulse = c.binImp;
      p.normalDenominator = c.norDen;
      p.tangentDenominator = c.tanDen;
      p.binormalDenominator = c.binDen;
      c = c.next;
    }
  }
});
function Contact() {
  this.shape1 = null;
  this.shape2 = null;
  this.body1 = null;
  this.body2 = null;
  this.prev = null;
  this.next = null;
  this.persisting = false;
  this.sleeping = false;
  this.detector = null;
  this.constraint = null;
  this.touching = false;
  this.close = false;
  this.dist = _Math.INF;
  this.b1Link = new ContactLink(this);
  this.b2Link = new ContactLink(this);
  this.s1Link = new ContactLink(this);
  this.s2Link = new ContactLink(this);
  this.manifold = new ContactManifold();
  this.buffer = [new ImpulseDataBuffer(), new ImpulseDataBuffer(), new ImpulseDataBuffer(), new ImpulseDataBuffer()];
  this.points = this.manifold.points;
  this.constraint = new ContactConstraint(this.manifold);
}
Object.assign(Contact.prototype, {
  Contact: true,
  mixRestitution: function (restitution1, restitution2) {
    return _Math.sqrt(restitution1 * restitution2);
  },
  mixFriction: function (friction1, friction2) {
    return _Math.sqrt(friction1 * friction2);
  },
  updateManifold: function () {
    this.constraint.restitution = this.mixRestitution(this.shape1.restitution, this.shape2.restitution);
    this.constraint.friction = this.mixFriction(this.shape1.friction, this.shape2.friction);
    var numBuffers = this.manifold.numPoints;
    var i = numBuffers;
    while (i--) {
      var b = this.buffer[i];
      var p = this.points[i];
      b.lp1X = p.localPoint1.x;
      b.lp1Y = p.localPoint1.y;
      b.lp1Z = p.localPoint1.z;
      b.lp2X = p.localPoint2.x;
      b.lp2Y = p.localPoint2.y;
      b.lp2Z = p.localPoint2.z;
      b.impulse = p.normalImpulse;
    }
    this.manifold.numPoints = 0;
    this.detector.detectCollision(this.shape1, this.shape2, this.manifold);
    var num = this.manifold.numPoints;
    if (num == 0) {
      this.touching = false;
      this.close = false;
      this.dist = _Math.INF;
      return;
    }
    if (this.touching || this.dist < 0.001) this.close = true;
    this.touching = true;
    i = num;
    while (i--) {
      p = this.points[i];
      var lp1x = p.localPoint1.x;
      var lp1y = p.localPoint1.y;
      var lp1z = p.localPoint1.z;
      var lp2x = p.localPoint2.x;
      var lp2y = p.localPoint2.y;
      var lp2z = p.localPoint2.z;
      var index = -1;
      var minDistance = 0.0004;
      var j = numBuffers;
      while (j--) {
        b = this.buffer[j];
        var dx = b.lp1X - lp1x;
        var dy = b.lp1Y - lp1y;
        var dz = b.lp1Z - lp1z;
        var distance1 = dx * dx + dy * dy + dz * dz;
        dx = b.lp2X - lp2x;
        dy = b.lp2Y - lp2y;
        dz = b.lp2Z - lp2z;
        var distance2 = dx * dx + dy * dy + dz * dz;
        if (distance1 < distance2) {
          if (distance1 < minDistance) {
            minDistance = distance1;
            index = j;
          }
        } else {
          if (distance2 < minDistance) {
            minDistance = distance2;
            index = j;
          }
        }
        if (minDistance < this.dist) this.dist = minDistance;
      }
      if (index != -1) {
        var tmp = this.buffer[index];
        this.buffer[index] = this.buffer[--numBuffers];
        this.buffer[numBuffers] = tmp;
        p.normalImpulse = tmp.impulse;
        p.warmStarted = true;
      } else {
        p.normalImpulse = 0;
        p.warmStarted = false;
      }
    }
  },
  attach: function (shape1, shape2) {
    this.shape1 = shape1;
    this.shape2 = shape2;
    this.body1 = shape1.parent;
    this.body2 = shape2.parent;
    this.manifold.body1 = this.body1;
    this.manifold.body2 = this.body2;
    this.constraint.body1 = this.body1;
    this.constraint.body2 = this.body2;
    this.constraint.attach();
    this.s1Link.shape = shape2;
    this.s1Link.body = this.body2;
    this.s2Link.shape = shape1;
    this.s2Link.body = this.body1;
    if (shape1.contactLink != null) (this.s1Link.next = shape1.contactLink).prev = this.s1Link;else this.s1Link.next = null;
    shape1.contactLink = this.s1Link;
    shape1.numContacts++;
    if (shape2.contactLink != null) (this.s2Link.next = shape2.contactLink).prev = this.s2Link;else this.s2Link.next = null;
    shape2.contactLink = this.s2Link;
    shape2.numContacts++;
    this.b1Link.shape = shape2;
    this.b1Link.body = this.body2;
    this.b2Link.shape = shape1;
    this.b2Link.body = this.body1;
    if (this.body1.contactLink != null) (this.b1Link.next = this.body1.contactLink).prev = this.b1Link;else this.b1Link.next = null;
    this.body1.contactLink = this.b1Link;
    this.body1.numContacts++;
    if (this.body2.contactLink != null) (this.b2Link.next = this.body2.contactLink).prev = this.b2Link;else this.b2Link.next = null;
    this.body2.contactLink = this.b2Link;
    this.body2.numContacts++;
    this.prev = null;
    this.next = null;
    this.persisting = true;
    this.sleeping = this.body1.sleeping && this.body2.sleeping;
    this.manifold.numPoints = 0;
  },
  detach: function () {
    var prev = this.s1Link.prev;
    var next = this.s1Link.next;
    if (prev !== null) prev.next = next;
    if (next !== null) next.prev = prev;
    if (this.shape1.contactLink == this.s1Link) this.shape1.contactLink = next;
    this.s1Link.prev = null;
    this.s1Link.next = null;
    this.s1Link.shape = null;
    this.s1Link.body = null;
    this.shape1.numContacts--;
    prev = this.s2Link.prev;
    next = this.s2Link.next;
    if (prev !== null) prev.next = next;
    if (next !== null) next.prev = prev;
    if (this.shape2.contactLink == this.s2Link) this.shape2.contactLink = next;
    this.s2Link.prev = null;
    this.s2Link.next = null;
    this.s2Link.shape = null;
    this.s2Link.body = null;
    this.shape2.numContacts--;
    prev = this.b1Link.prev;
    next = this.b1Link.next;
    if (prev !== null) prev.next = next;
    if (next !== null) next.prev = prev;
    if (this.body1.contactLink == this.b1Link) this.body1.contactLink = next;
    this.b1Link.prev = null;
    this.b1Link.next = null;
    this.b1Link.shape = null;
    this.b1Link.body = null;
    this.body1.numContacts--;
    prev = this.b2Link.prev;
    next = this.b2Link.next;
    if (prev !== null) prev.next = next;
    if (next !== null) next.prev = prev;
    if (this.body2.contactLink == this.b2Link) this.body2.contactLink = next;
    this.b2Link.prev = null;
    this.b2Link.next = null;
    this.b2Link.shape = null;
    this.b2Link.body = null;
    this.body2.numContacts--;
    this.manifold.body1 = null;
    this.manifold.body2 = null;
    this.constraint.body1 = null;
    this.constraint.body2 = null;
    this.constraint.detach();
    this.shape1 = null;
    this.shape2 = null;
    this.body1 = null;
    this.body2 = null;
  }
});
function RigidBody(Position, Rotation) {
  this.position = Position || new Vec3();
  this.orientation = Rotation || new Quat();
  this.scale = 1;
  this.invScale = 1;
  this.mesh = null;
  this.id = NaN;
  this.name = "";
  this.prev = null;
  this.next = null;
  this.type = BODY_NULL;
  this.massInfo = new MassInfo();
  this.newPosition = new Vec3();
  this.controlPos = false;
  this.newOrientation = new Quat();
  this.newRotation = new Vec3();
  this.currentRotation = new Vec3();
  this.controlRot = false;
  this.controlRotInTime = false;
  this.quaternion = new Quat();
  this.pos = new Vec3();
  this.linearVelocity = new Vec3();
  this.angularVelocity = new Vec3();
  this.parent = null;
  this.contactLink = null;
  this.numContacts = 0;
  this.shapes = null;
  this.numShapes = 0;
  this.jointLink = null;
  this.numJoints = 0;
  this.sleepPosition = new Vec3();
  this.sleepOrientation = new Quat();
  this.isStatic = false;
  this.isDynamic = false;
  this.isKinematic = false;
  this.rotation = new Mat33();
  this.mass = 0;
  this.inverseMass = 0;
  this.inverseInertia = new Mat33();
  this.localInertia = new Mat33();
  this.inverseLocalInertia = new Mat33();
  this.tmpInertia = new Mat33();
  this.addedToIsland = false;
  this.allowSleep = true;
  this.sleepTime = 0;
  this.sleeping = false;
}
Object.assign(RigidBody.prototype, {
  setParent: function (world) {
    this.parent = world;
    this.scale = this.parent.scale;
    this.invScale = this.parent.invScale;
    this.id = this.parent.numRigidBodies;
    if (!this.name) this.name = this.id;
    this.updateMesh();
  },
  addShape: function (shape) {
    if (shape.parent) {
      printError("RigidBody", "It is not possible that you add a shape which already has an associated body.");
    }
    if (this.shapes != null) (this.shapes.prev = shape).next = this.shapes;
    this.shapes = shape;
    shape.parent = this;
    if (this.parent) this.parent.addShape(shape);
    this.numShapes++;
  },
  removeShape: function (shape) {
    var remove = shape;
    if (remove.parent != this) return;
    var prev = remove.prev;
    var next = remove.next;
    if (prev != null) prev.next = next;
    if (next != null) next.prev = prev;
    if (this.shapes == remove) this.shapes = next;
    remove.prev = null;
    remove.next = null;
    remove.parent = null;
    if (this.parent) this.parent.removeShape(remove);
    this.numShapes--;
  },
  remove: function () {
    this.dispose();
  },
  dispose: function () {
    this.parent.removeRigidBody(this);
  },
  checkContact: function (name) {
    this.parent.checkContact(this.name, name);
  },
  setupMass: function (type, AdjustPosition) {
    var adjustPosition = AdjustPosition !== undefined ? AdjustPosition : true;
    this.type = type || BODY_STATIC;
    this.isDynamic = this.type === BODY_DYNAMIC;
    this.isStatic = this.type === BODY_STATIC;
    this.mass = 0;
    this.localInertia.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    var tmpM = new Mat33();
    var tmpV = new Vec3();
    for (var shape = this.shapes; shape !== null; shape = shape.next) {
      shape.calculateMassInfo(this.massInfo);
      var shapeMass = this.massInfo.mass;
      tmpV.addScaledVector(shape.relativePosition, shapeMass);
      this.mass += shapeMass;
      this.rotateInertia(shape.relativeRotation, this.massInfo.inertia, tmpM);
      this.localInertia.add(tmpM);
      this.localInertia.addOffset(shapeMass, shape.relativePosition);
    }
    this.inverseMass = 1 / this.mass;
    tmpV.scaleEqual(this.inverseMass);
    if (adjustPosition) {
      this.position.add(tmpV);
      for (shape = this.shapes; shape !== null; shape = shape.next) {
        shape.relativePosition.subEqual(tmpV);
      }
      this.localInertia.subOffset(this.mass, tmpV);
    }
    this.inverseLocalInertia.invert(this.localInertia);
    if (this.type === BODY_STATIC) {
      this.inverseMass = 0;
      this.inverseLocalInertia.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
    this.syncShapes();
    this.awake();
  },
  awake: function () {
    if (!this.allowSleep || !this.sleeping) return;
    this.sleeping = false;
    this.sleepTime = 0;
    var cs = this.contactLink;
    while (cs != null) {
      cs.body.sleepTime = 0;
      cs.body.sleeping = false;
      cs = cs.next;
    }
    var js = this.jointLink;
    while (js != null) {
      js.body.sleepTime = 0;
      js.body.sleeping = false;
      js = js.next;
    }
    for (var shape = this.shapes; shape != null; shape = shape.next) {
      shape.updateProxy();
    }
  },
  sleep: function () {
    if (!this.allowSleep || this.sleeping) return;
    this.linearVelocity.set(0, 0, 0);
    this.angularVelocity.set(0, 0, 0);
    this.sleepPosition.copy(this.position);
    this.sleepOrientation.copy(this.orientation);
    this.sleepTime = 0;
    this.sleeping = true;
    for (var shape = this.shapes; shape != null; shape = shape.next) {
      shape.updateProxy();
    }
  },
  testWakeUp: function () {
    if (this.linearVelocity.testZero() || this.angularVelocity.testZero() || this.position.testDiff(this.sleepPosition) || this.orientation.testDiff(this.sleepOrientation)) this.awake();
  },
  isLonely: function () {
    return this.numJoints == 0 && this.numContacts == 0;
  },
  updatePosition: function (timeStep) {
    switch (this.type) {
      case BODY_STATIC:
        this.linearVelocity.set(0, 0, 0);
        this.angularVelocity.set(0, 0, 0);
        if (this.controlPos) {
          this.position.copy(this.newPosition);
          this.controlPos = false;
        }
        if (this.controlRot) {
          this.orientation.copy(this.newOrientation);
          this.controlRot = false;
        }
        break;
      case BODY_DYNAMIC:
        if (this.isKinematic) {
          this.linearVelocity.set(0, 0, 0);
          this.angularVelocity.set(0, 0, 0);
        }
        if (this.controlPos) {
          this.linearVelocity.subVectors(this.newPosition, this.position).multiplyScalar(1 / timeStep);
          this.controlPos = false;
        }
        if (this.controlRot) {
          this.angularVelocity.copy(this.getAxis());
          this.orientation.copy(this.newOrientation);
          this.controlRot = false;
        }
        this.position.addScaledVector(this.linearVelocity, timeStep);
        this.orientation.addTime(this.angularVelocity, timeStep);
        this.updateMesh();
        break;
      default:
        printError("RigidBody", "Invalid type.");
    }
    this.syncShapes();
    this.updateMesh();
  },
  getAxis: function () {
    return new Vec3(0, 1, 0).applyMatrix3(this.inverseLocalInertia, true).normalize();
  },
  rotateInertia: function (rot, inertia, out) {
    this.tmpInertia.multiplyMatrices(rot, inertia);
    out.multiplyMatrices(this.tmpInertia, rot, true);
  },
  syncShapes: function () {
    this.rotation.setQuat(this.orientation);
    this.rotateInertia(this.rotation, this.inverseLocalInertia, this.inverseInertia);
    for (var shape = this.shapes; shape != null; shape = shape.next) {
      shape.position.copy(shape.relativePosition).applyMatrix3(this.rotation, true).add(this.position);
      shape.rotation.multiplyMatrices(this.rotation, shape.relativeRotation);
      shape.updateProxy();
    }
  },
  applyImpulse: function (position, force) {
    this.linearVelocity.addScaledVector(force, this.inverseMass);
    var rel = new Vec3().copy(position).sub(this.position).cross(force).applyMatrix3(this.inverseInertia, true);
    this.angularVelocity.add(rel);
  },
  setPosition: function (pos) {
    this.newPosition.copy(pos).multiplyScalar(this.invScale);
    this.controlPos = true;
    if (!this.isKinematic) this.isKinematic = true;
  },
  setQuaternion: function (q) {
    this.newOrientation.set(q.x, q.y, q.z, q.w);
    this.controlRot = true;
    if (!this.isKinematic) this.isKinematic = true;
  },
  setRotation: function (rot) {
    this.newOrientation = new Quat().setFromEuler(rot.x * _Math.degtorad, rot.y * _Math.degtorad, rot.y * _Math.degtorad);
    this.controlRot = true;
  },
  resetPosition: function (x, y, z) {
    this.linearVelocity.set(0, 0, 0);
    this.angularVelocity.set(0, 0, 0);
    this.position.set(x, y, z).multiplyScalar(this.invScale);
    this.awake();
  },
  resetQuaternion: function (q) {
    this.angularVelocity.set(0, 0, 0);
    this.orientation = new Quat(q.x, q.y, q.z, q.w);
    this.awake();
  },
  resetRotation: function (x, y, z) {
    this.angularVelocity.set(0, 0, 0);
    this.orientation = new Quat().setFromEuler(x * _Math.degtorad, y * _Math.degtorad, z * _Math.degtorad);
    this.awake();
  },
  getPosition: function () {
    return this.pos;
  },
  getQuaternion: function () {
    return this.quaternion;
  },
  connectMesh: function (mesh) {
    this.mesh = mesh;
    this.updateMesh();
  },
  updateMesh: function () {
    this.pos.scale(this.position, this.scale);
    this.quaternion.copy(this.orientation);
    if (this.mesh === null) return;
    this.mesh.position.copy(this.getPosition());
    this.mesh.quaternion.copy(this.getQuaternion());
  }
});
function Pair(s1, s2) {
  this.shape1 = s1 || null;
  this.shape2 = s2 || null;
}
function BroadPhase() {
  this.types = BR_NULL;
  this.numPairChecks = 0;
  this.numPairs = 0;
  this.pairs = [];
}
Object.assign(BroadPhase.prototype, {
  BroadPhase: true,
  createProxy: function (shape) {
    printError("BroadPhase", "Inheritance error.");
  },
  addProxy: function (proxy) {
    printError("BroadPhase", "Inheritance error.");
  },
  removeProxy: function (proxy) {
    printError("BroadPhase", "Inheritance error.");
  },
  isAvailablePair: function (s1, s2) {
    var b1 = s1.parent;
    var b2 = s2.parent;
    if (b1 == b2 ||
    !b1.isDynamic && !b2.isDynamic ||
    (s1.belongsTo & s2.collidesWith) == 0 || (s2.belongsTo & s1.collidesWith) == 0
    ) {
        return false;
      }
    var js;
    if (b1.numJoints < b2.numJoints) js = b1.jointLink;else js = b2.jointLink;
    while (js !== null) {
      var joint = js.joint;
      if (!joint.allowCollision && (joint.body1 == b1 && joint.body2 == b2 || joint.body1 == b2 && joint.body2 == b1)) {
        return false;
      }
      js = js.next;
    }
    return true;
  },
  detectPairs: function () {
    this.pairs = [];
    this.numPairs = 0;
    this.numPairChecks = 0;
    this.collectPairs();
  },
  collectPairs: function () {
  },
  addPair: function (s1, s2) {
    var pair = new Pair(s1, s2);
    this.pairs.push(pair);
    this.numPairs++;
  }
});
var count$1 = 0;
function ProxyIdCount() {
  return count$1++;
}
function Proxy$1(shape) {
  this.shape = shape;
  this.aabb = shape.aabb;
}
Object.assign(Proxy$1.prototype, {
  Proxy: true,
  update: function () {
    printError("Proxy", "Inheritance error.");
  }
});
function BasicProxy(shape) {
  Proxy$1.call(this, shape);
  this.id = ProxyIdCount();
}
BasicProxy.prototype = Object.assign(Object.create(Proxy$1.prototype), {
  constructor: BasicProxy,
  update: function () {}
});
function BruteForceBroadPhase() {
  BroadPhase.call(this);
  this.types = BR_BRUTE_FORCE;
  this.proxies = [];
}
BruteForceBroadPhase.prototype = Object.assign(Object.create(BroadPhase.prototype), {
  constructor: BruteForceBroadPhase,
  createProxy: function (shape) {
    return new BasicProxy(shape);
  },
  addProxy: function (proxy) {
    this.proxies.push(proxy);
  },
  removeProxy: function (proxy) {
    var n = this.proxies.indexOf(proxy);
    if (n > -1) {
      this.proxies.splice(n, 1);
    }
  },
  collectPairs: function () {
    var i = 0,
        j,
        p1,
        p2;
    var px = this.proxies;
    var l = px.length;
    this.numPairChecks = l * (l - 1) >> 1;
    while (i < l) {
      p1 = px[i++];
      j = i + 1;
      while (j < l) {
        p2 = px[j++];
        if (p1.aabb.intersectTest(p2.aabb) || !this.isAvailablePair(p1.shape, p2.shape)) continue;
        this.addPair(p1.shape, p2.shape);
      }
    }
  }
});
function SAPAxis() {
  this.numElements = 0;
  this.bufferSize = 256;
  this.elements = [];
  this.elements.length = this.bufferSize;
  this.stack = new Float32Array(64);
}
Object.assign(SAPAxis.prototype, {
  SAPAxis: true,
  addElements: function (min, max) {
    if (this.numElements + 2 >= this.bufferSize) {
      this.bufferSize *= 2;
      var newElements = [];
      var i = this.numElements;
      while (i--) {
        newElements[i] = this.elements[i];
      }
    }
    this.elements[this.numElements++] = min;
    this.elements[this.numElements++] = max;
  },
  removeElements: function (min, max) {
    var minIndex = -1;
    var maxIndex = -1;
    for (var i = 0, l = this.numElements; i < l; i++) {
      var e = this.elements[i];
      if (e == min || e == max) {
        if (minIndex == -1) {
          minIndex = i;
        } else {
          maxIndex = i;
          break;
        }
      }
    }
    for (i = minIndex + 1, l = maxIndex; i < l; i++) {
      this.elements[i - 1] = this.elements[i];
    }
    for (i = maxIndex + 1, l = this.numElements; i < l; i++) {
      this.elements[i - 2] = this.elements[i];
    }
    this.elements[--this.numElements] = null;
    this.elements[--this.numElements] = null;
  },
  sort: function () {
    var count = 0;
    var threshold = 1;
    while (this.numElements >> threshold != 0) threshold++;
    threshold = threshold * this.numElements >> 2;
    count = 0;
    var giveup = false;
    var elements = this.elements;
    for (var i = 1, l = this.numElements; i < l; i++) {
      var tmp = elements[i];
      var pivot = tmp.value;
      var tmp2 = elements[i - 1];
      if (tmp2.value > pivot) {
        var j = i;
        do {
          elements[j] = tmp2;
          if (--j == 0) break;
          tmp2 = elements[j - 1];
        } while (tmp2.value > pivot);
        elements[j] = tmp;
        count += i - j;
        if (count > threshold) {
          giveup = true;
          break;
        }
      }
    }
    if (!giveup) return;
    count = 2;
    var stack = this.stack;
    stack[0] = 0;
    stack[1] = this.numElements - 1;
    while (count > 0) {
      var right = stack[--count];
      var left = stack[--count];
      var diff = right - left;
      if (diff > 16) {
        var mid = left + _Math.floor(diff * 0.5);
        tmp = elements[mid];
        elements[mid] = elements[right];
        elements[right] = tmp;
        pivot = tmp.value;
        i = left - 1;
        j = right;
        while (true) {
          var ei;
          var ej;
          do {
            ei = elements[++i];
          } while (ei.value < pivot);
          do {
            ej = elements[--j];
          } while (pivot < ej.value && j != left);
          if (i >= j) break;
          elements[i] = ej;
          elements[j] = ei;
        }
        elements[right] = elements[i];
        elements[i] = tmp;
        if (i - left > right - i) {
          stack[count++] = left;
          stack[count++] = i - 1;
          stack[count++] = i + 1;
          stack[count++] = right;
        } else {
          stack[count++] = i + 1;
          stack[count++] = right;
          stack[count++] = left;
          stack[count++] = i - 1;
        }
      } else {
        for (i = left + 1; i <= right; i++) {
          tmp = elements[i];
          pivot = tmp.value;
          tmp2 = elements[i - 1];
          if (tmp2.value > pivot) {
            j = i;
            do {
              elements[j] = tmp2;
              if (--j == 0) break;
              tmp2 = elements[j - 1];
            } while (tmp2.value > pivot);
            elements[j] = tmp;
          }
        }
      }
    }
  },
  calculateTestCount: function () {
    var num = 1;
    var sum = 0;
    for (var i = 1, l = this.numElements; i < l; i++) {
      if (this.elements[i].max) {
        num--;
      } else {
        sum += num;
        num++;
      }
    }
    return sum;
  }
});
function SAPElement(proxy, max) {
  this.proxy = proxy;
  this.pair = null;
  this.min1 = null;
  this.max1 = null;
  this.min2 = null;
  this.max2 = null;
  this.max = max;
  this.value = 0;
}
function SAPProxy(sap, shape) {
  Proxy$1.call(this, shape);
  this.belongsTo = 0;
  this.max = [];
  this.min = [];
  this.sap = sap;
  this.min[0] = new SAPElement(this, false);
  this.max[0] = new SAPElement(this, true);
  this.min[1] = new SAPElement(this, false);
  this.max[1] = new SAPElement(this, true);
  this.min[2] = new SAPElement(this, false);
  this.max[2] = new SAPElement(this, true);
  this.max[0].pair = this.min[0];
  this.max[1].pair = this.min[1];
  this.max[2].pair = this.min[2];
  this.min[0].min1 = this.min[1];
  this.min[0].max1 = this.max[1];
  this.min[0].min2 = this.min[2];
  this.min[0].max2 = this.max[2];
  this.min[1].min1 = this.min[0];
  this.min[1].max1 = this.max[0];
  this.min[1].min2 = this.min[2];
  this.min[1].max2 = this.max[2];
  this.min[2].min1 = this.min[0];
  this.min[2].max1 = this.max[0];
  this.min[2].min2 = this.min[1];
  this.min[2].max2 = this.max[1];
}
SAPProxy.prototype = Object.assign(Object.create(Proxy$1.prototype), {
  constructor: SAPProxy,
  isDynamic: function () {
    var body = this.shape.parent;
    return body.isDynamic && !body.sleeping;
  },
  update: function () {
    var te = this.aabb.elements;
    this.min[0].value = te[0];
    this.min[1].value = te[1];
    this.min[2].value = te[2];
    this.max[0].value = te[3];
    this.max[1].value = te[4];
    this.max[2].value = te[5];
    if (this.belongsTo == 1 && !this.isDynamic() || this.belongsTo == 2 && this.isDynamic()) {
      this.sap.removeProxy(this);
      this.sap.addProxy(this);
    }
  }
});
function SAPBroadPhase() {
  BroadPhase.call(this);
  this.types = BR_SWEEP_AND_PRUNE;
  this.numElementsD = 0;
  this.numElementsS = 0;
  this.axesD = [new SAPAxis(), new SAPAxis(), new SAPAxis()];
  this.axesS = [new SAPAxis(), new SAPAxis(), new SAPAxis()];
  this.index1 = 0;
  this.index2 = 1;
}
SAPBroadPhase.prototype = Object.assign(Object.create(BroadPhase.prototype), {
  constructor: SAPBroadPhase,
  createProxy: function (shape) {
    return new SAPProxy(this, shape);
  },
  addProxy: function (proxy) {
    var p = proxy;
    if (p.isDynamic()) {
      this.axesD[0].addElements(p.min[0], p.max[0]);
      this.axesD[1].addElements(p.min[1], p.max[1]);
      this.axesD[2].addElements(p.min[2], p.max[2]);
      p.belongsTo = 1;
      this.numElementsD += 2;
    } else {
      this.axesS[0].addElements(p.min[0], p.max[0]);
      this.axesS[1].addElements(p.min[1], p.max[1]);
      this.axesS[2].addElements(p.min[2], p.max[2]);
      p.belongsTo = 2;
      this.numElementsS += 2;
    }
  },
  removeProxy: function (proxy) {
    var p = proxy;
    if (p.belongsTo == 0) return;
    switch (p.belongsTo) {
      case 1:
        this.axesD[0].removeElements(p.min[0], p.max[0]);
        this.axesD[1].removeElements(p.min[1], p.max[1]);
        this.axesD[2].removeElements(p.min[2], p.max[2]);
        this.numElementsD -= 2;
        break;
      case 2:
        this.axesS[0].removeElements(p.min[0], p.max[0]);
        this.axesS[1].removeElements(p.min[1], p.max[1]);
        this.axesS[2].removeElements(p.min[2], p.max[2]);
        this.numElementsS -= 2;
        break;
    }
    p.belongsTo = 0;
  },
  collectPairs: function () {
    if (this.numElementsD == 0) return;
    var axis1 = this.axesD[this.index1];
    var axis2 = this.axesD[this.index2];
    axis1.sort();
    axis2.sort();
    var count1 = axis1.calculateTestCount();
    var count2 = axis2.calculateTestCount();
    var elementsD;
    var elementsS;
    if (count1 <= count2) {
      axis2 = this.axesS[this.index1];
      axis2.sort();
      elementsD = axis1.elements;
      elementsS = axis2.elements;
    } else {
      axis1 = this.axesS[this.index2];
      axis1.sort();
      elementsD = axis2.elements;
      elementsS = axis1.elements;
      this.index1 ^= this.index2;
      this.index2 ^= this.index1;
      this.index1 ^= this.index2;
    }
    var activeD;
    var activeS;
    var p = 0;
    var q = 0;
    while (p < this.numElementsD) {
      var e1;
      var dyn;
      if (q == this.numElementsS) {
        e1 = elementsD[p];
        dyn = true;
        p++;
      } else {
        var d = elementsD[p];
        var s = elementsS[q];
        if (d.value < s.value) {
          e1 = d;
          dyn = true;
          p++;
        } else {
          e1 = s;
          dyn = false;
          q++;
        }
      }
      if (!e1.max) {
        var s1 = e1.proxy.shape;
        var min1 = e1.min1.value;
        var max1 = e1.max1.value;
        var min2 = e1.min2.value;
        var max2 = e1.max2.value;
        for (var e2 = activeD; e2 != null; e2 = e2.pair) {
          var s2 = e2.proxy.shape;
          this.numPairChecks++;
          if (min1 > e2.max1.value || max1 < e2.min1.value || min2 > e2.max2.value || max2 < e2.min2.value || !this.isAvailablePair(s1, s2)) continue;
          this.addPair(s1, s2);
        }
        if (dyn) {
          for (e2 = activeS; e2 != null; e2 = e2.pair) {
            s2 = e2.proxy.shape;
            this.numPairChecks++;
            if (min1 > e2.max1.value || max1 < e2.min1.value || min2 > e2.max2.value || max2 < e2.min2.value || !this.isAvailablePair(s1, s2)) continue;
            this.addPair(s1, s2);
          }
          e1.pair = activeD;
          activeD = e1;
        } else {
          e1.pair = activeS;
          activeS = e1;
        }
      } else {
        var min = e1.pair;
        if (dyn) {
          if (min == activeD) {
            activeD = activeD.pair;
            continue;
          } else {
            e1 = activeD;
          }
        } else {
          if (min == activeS) {
            activeS = activeS.pair;
            continue;
          } else {
            e1 = activeS;
          }
        }
        do {
          e2 = e1.pair;
          if (e2 == min) {
            e1.pair = e2.pair;
            break;
          }
          e1 = e2;
        } while (e1 != null);
      }
    }
    this.index2 = (this.index1 | this.index2) ^ 3;
  }
});
function DBVTNode() {
  this.child1 = null;
  this.child2 = null;
  this.parent = null;
  this.proxy = null;
  this.height = 0;
  this.aabb = new AABB();
}
function DBVT() {
  this.root = null;
  this.freeNodes = [];
  this.freeNodes.length = 16384;
  this.numFreeNodes = 0;
  this.aabb = new AABB();
}
Object.assign(DBVT.prototype, {
  DBVT: true,
  moveLeaf: function (leaf) {
    this.deleteLeaf(leaf);
    this.insertLeaf(leaf);
  },
  insertLeaf: function (leaf) {
    if (this.root == null) {
      this.root = leaf;
      return;
    }
    var lb = leaf.aabb;
    var sibling = this.root;
    var oldArea;
    var newArea;
    while (sibling.proxy == null) {
      var c1 = sibling.child1;
      var c2 = sibling.child2;
      var b = sibling.aabb;
      var c1b = c1.aabb;
      var c2b = c2.aabb;
      oldArea = b.surfaceArea();
      this.aabb.combine(lb, b);
      newArea = this.aabb.surfaceArea();
      var creatingCost = newArea * 2;
      var incrementalCost = (newArea - oldArea) * 2;
      var discendingCost1 = incrementalCost;
      this.aabb.combine(lb, c1b);
      if (c1.proxy != null) {
        discendingCost1 += this.aabb.surfaceArea();
      } else {
        discendingCost1 += this.aabb.surfaceArea() - c1b.surfaceArea();
      }
      var discendingCost2 = incrementalCost;
      this.aabb.combine(lb, c2b);
      if (c2.proxy != null) {
        discendingCost2 += this.aabb.surfaceArea();
      } else {
        discendingCost2 += this.aabb.surfaceArea() - c2b.surfaceArea();
      }
      if (discendingCost1 < discendingCost2) {
        if (creatingCost < discendingCost1) {
          break;
        } else {
          sibling = c1;
        }
      } else {
        if (creatingCost < discendingCost2) {
          break;
        } else {
          sibling = c2;
        }
      }
    }
    var oldParent = sibling.parent;
    var newParent;
    if (this.numFreeNodes > 0) {
      newParent = this.freeNodes[--this.numFreeNodes];
    } else {
      newParent = new DBVTNode();
    }
    newParent.parent = oldParent;
    newParent.child1 = leaf;
    newParent.child2 = sibling;
    newParent.aabb.combine(leaf.aabb, sibling.aabb);
    newParent.height = sibling.height + 1;
    sibling.parent = newParent;
    leaf.parent = newParent;
    if (sibling == this.root) {
      this.root = newParent;
    } else {
      if (oldParent.child1 == sibling) {
        oldParent.child1 = newParent;
      } else {
        oldParent.child2 = newParent;
      }
    }
    do {
      newParent = this.balance(newParent);
      this.fix(newParent);
      newParent = newParent.parent;
    } while (newParent != null);
  },
  getBalance: function (node) {
    if (node.proxy != null) return 0;
    return node.child1.height - node.child2.height;
  },
  deleteLeaf: function (leaf) {
    if (leaf == this.root) {
      this.root = null;
      return;
    }
    var parent = leaf.parent;
    var sibling;
    if (parent.child1 == leaf) {
      sibling = parent.child2;
    } else {
      sibling = parent.child1;
    }
    if (parent == this.root) {
      this.root = sibling;
      sibling.parent = null;
      return;
    }
    var grandParent = parent.parent;
    sibling.parent = grandParent;
    if (grandParent.child1 == parent) {
      grandParent.child1 = sibling;
    } else {
      grandParent.child2 = sibling;
    }
    if (this.numFreeNodes < 16384) {
      this.freeNodes[this.numFreeNodes++] = parent;
    }
    do {
      grandParent = this.balance(grandParent);
      this.fix(grandParent);
      grandParent = grandParent.parent;
    } while (grandParent != null);
  },
  balance: function (node) {
    var nh = node.height;
    if (nh < 2) {
      return node;
    }
    var p = node.parent;
    var l = node.child1;
    var r = node.child2;
    var lh = l.height;
    var rh = r.height;
    var balance = lh - rh;
    var t;
    if (balance > 1) {
      var ll = l.child1;
      var lr = l.child2;
      var llh = ll.height;
      var lrh = lr.height;
      if (llh > lrh) {
        l.child2 = node;
        node.parent = l;
        node.child1 = lr;
        lr.parent = node;
        node.aabb.combine(lr.aabb, r.aabb);
        t = lrh - rh;
        node.height = lrh - (t & t >> 31) + 1;
        l.aabb.combine(ll.aabb, node.aabb);
        t = llh - nh;
        l.height = llh - (t & t >> 31) + 1;
      } else {
        l.child1 = node;
        node.parent = l;
        node.child1 = ll;
        ll.parent = node;
        node.aabb.combine(ll.aabb, r.aabb);
        t = llh - rh;
        node.height = llh - (t & t >> 31) + 1;
        l.aabb.combine(node.aabb, lr.aabb);
        t = nh - lrh;
        l.height = nh - (t & t >> 31) + 1;
      }
      if (p != null) {
        if (p.child1 == node) {
          p.child1 = l;
        } else {
          p.child2 = l;
        }
      } else {
        this.root = l;
      }
      l.parent = p;
      return l;
    } else if (balance < -1) {
      var rl = r.child1;
      var rr = r.child2;
      var rlh = rl.height;
      var rrh = rr.height;
      if (rlh > rrh) {
        r.child2 = node;
        node.parent = r;
        node.child2 = rr;
        rr.parent = node;
        node.aabb.combine(l.aabb, rr.aabb);
        t = lh - rrh;
        node.height = lh - (t & t >> 31) + 1;
        r.aabb.combine(rl.aabb, node.aabb);
        t = rlh - nh;
        r.height = rlh - (t & t >> 31) + 1;
      } else {
        r.child1 = node;
        node.parent = r;
        node.child2 = rl;
        rl.parent = node;
        node.aabb.combine(l.aabb, rl.aabb);
        t = lh - rlh;
        node.height = lh - (t & t >> 31) + 1;
        r.aabb.combine(node.aabb, rr.aabb);
        t = nh - rrh;
        r.height = nh - (t & t >> 31) + 1;
      }
      if (p != null) {
        if (p.child1 == node) {
          p.child1 = r;
        } else {
          p.child2 = r;
        }
      } else {
        this.root = r;
      }
      r.parent = p;
      return r;
    }
    return node;
  },
  fix: function (node) {
    var c1 = node.child1;
    var c2 = node.child2;
    node.aabb.combine(c1.aabb, c2.aabb);
    node.height = c1.height < c2.height ? c2.height + 1 : c1.height + 1;
  }
});
function DBVTProxy(shape) {
  Proxy$1.call(this, shape);
  this.leaf = new DBVTNode();
  this.leaf.proxy = this;
}
DBVTProxy.prototype = Object.assign(Object.create(Proxy$1.prototype), {
  constructor: DBVTProxy,
  update: function () {}
});
function DBVTBroadPhase() {
  BroadPhase.call(this);
  this.types = BR_BOUNDING_VOLUME_TREE;
  this.tree = new DBVT();
  this.stack = [];
  this.leaves = [];
  this.numLeaves = 0;
}
DBVTBroadPhase.prototype = Object.assign(Object.create(BroadPhase.prototype), {
  constructor: DBVTBroadPhase,
  createProxy: function (shape) {
    return new DBVTProxy(shape);
  },
  addProxy: function (proxy) {
    this.tree.insertLeaf(proxy.leaf);
    this.leaves.push(proxy.leaf);
    this.numLeaves++;
  },
  removeProxy: function (proxy) {
    this.tree.deleteLeaf(proxy.leaf);
    var n = this.leaves.indexOf(proxy.leaf);
    if (n > -1) {
      this.leaves.splice(n, 1);
      this.numLeaves--;
    }
  },
  collectPairs: function () {
    if (this.numLeaves < 2) return;
    var leaf,
        margin = 0.1,
        i = this.numLeaves;
    while (i--) {
      leaf = this.leaves[i];
      if (leaf.proxy.aabb.intersectTestTwo(leaf.aabb)) {
        leaf.aabb.copy(leaf.proxy.aabb, margin);
        this.tree.deleteLeaf(leaf);
        this.tree.insertLeaf(leaf);
        this.collide(leaf, this.tree.root);
      }
    }
  },
  collide: function (node1, node2) {
    var stackCount = 2;
    var s1, s2, n1, n2, l1, l2;
    this.stack[0] = node1;
    this.stack[1] = node2;
    while (stackCount > 0) {
      n1 = this.stack[--stackCount];
      n2 = this.stack[--stackCount];
      l1 = n1.proxy != null;
      l2 = n2.proxy != null;
      this.numPairChecks++;
      if (l1 && l2) {
        s1 = n1.proxy.shape;
        s2 = n2.proxy.shape;
        if (s1 == s2 || s1.aabb.intersectTest(s2.aabb) || !this.isAvailablePair(s1, s2)) continue;
        this.addPair(s1, s2);
      } else {
        if (n1.aabb.intersectTest(n2.aabb)) continue;
        if (l2 || !l1 && n1.aabb.surfaceArea() > n2.aabb.surfaceArea()) {
          this.stack[stackCount++] = n1.child1;
          this.stack[stackCount++] = n2;
          this.stack[stackCount++] = n1.child2;
          this.stack[stackCount++] = n2;
        } else {
          this.stack[stackCount++] = n1;
          this.stack[stackCount++] = n2.child1;
          this.stack[stackCount++] = n1;
          this.stack[stackCount++] = n2.child2;
        }
      }
    }
  }
});
function CollisionDetector() {
  this.flip = false;
}
Object.assign(CollisionDetector.prototype, {
  CollisionDetector: true,
  detectCollision: function (shape1, shape2, manifold) {
    printError("CollisionDetector", "Inheritance error.");
  }
});
function BoxBoxCollisionDetector() {
  CollisionDetector.call(this);
  this.clipVertices1 = new Float32Array(24);
  this.clipVertices2 = new Float32Array(24);
  this.used = new Float32Array(8);
  this.INF = 1 / 0;
}
BoxBoxCollisionDetector.prototype = Object.assign(Object.create(CollisionDetector.prototype), {
  constructor: BoxBoxCollisionDetector,
  detectCollision: function (shape1, shape2, manifold) {
    var b1;
    var b2;
    if (shape1.id < shape2.id) {
      b1 = shape1;
      b2 = shape2;
    } else {
      b1 = shape2;
      b2 = shape1;
    }
    var V1 = b1.elements;
    var V2 = b2.elements;
    var D1 = b1.dimentions;
    var D2 = b2.dimentions;
    var p1 = b1.position;
    var p2 = b2.position;
    var p1x = p1.x;
    var p1y = p1.y;
    var p1z = p1.z;
    var p2x = p2.x;
    var p2y = p2.y;
    var p2z = p2.z;
    var dx = p2x - p1x;
    var dy = p2y - p1y;
    var dz = p2z - p1z;
    var w1 = b1.halfWidth;
    var h1 = b1.halfHeight;
    var d1 = b1.halfDepth;
    var w2 = b2.halfWidth;
    var h2 = b2.halfHeight;
    var d2 = b2.halfDepth;
    var a1x = D1[0];
    var a1y = D1[1];
    var a1z = D1[2];
    var a2x = D1[3];
    var a2y = D1[4];
    var a2z = D1[5];
    var a3x = D1[6];
    var a3y = D1[7];
    var a3z = D1[8];
    var d1x = D1[9];
    var d1y = D1[10];
    var d1z = D1[11];
    var d2x = D1[12];
    var d2y = D1[13];
    var d2z = D1[14];
    var d3x = D1[15];
    var d3y = D1[16];
    var d3z = D1[17];
    var a4x = D2[0];
    var a4y = D2[1];
    var a4z = D2[2];
    var a5x = D2[3];
    var a5y = D2[4];
    var a5z = D2[5];
    var a6x = D2[6];
    var a6y = D2[7];
    var a6z = D2[8];
    var d4x = D2[9];
    var d4y = D2[10];
    var d4z = D2[11];
    var d5x = D2[12];
    var d5y = D2[13];
    var d5z = D2[14];
    var d6x = D2[15];
    var d6y = D2[16];
    var d6z = D2[17];
    var a7x = a1y * a4z - a1z * a4y;
    var a7y = a1z * a4x - a1x * a4z;
    var a7z = a1x * a4y - a1y * a4x;
    var a8x = a1y * a5z - a1z * a5y;
    var a8y = a1z * a5x - a1x * a5z;
    var a8z = a1x * a5y - a1y * a5x;
    var a9x = a1y * a6z - a1z * a6y;
    var a9y = a1z * a6x - a1x * a6z;
    var a9z = a1x * a6y - a1y * a6x;
    var aax = a2y * a4z - a2z * a4y;
    var aay = a2z * a4x - a2x * a4z;
    var aaz = a2x * a4y - a2y * a4x;
    var abx = a2y * a5z - a2z * a5y;
    var aby = a2z * a5x - a2x * a5z;
    var abz = a2x * a5y - a2y * a5x;
    var acx = a2y * a6z - a2z * a6y;
    var acy = a2z * a6x - a2x * a6z;
    var acz = a2x * a6y - a2y * a6x;
    var adx = a3y * a4z - a3z * a4y;
    var ady = a3z * a4x - a3x * a4z;
    var adz = a3x * a4y - a3y * a4x;
    var aex = a3y * a5z - a3z * a5y;
    var aey = a3z * a5x - a3x * a5z;
    var aez = a3x * a5y - a3y * a5x;
    var afx = a3y * a6z - a3z * a6y;
    var afy = a3z * a6x - a3x * a6z;
    var afz = a3x * a6y - a3y * a6x;
    var right1;
    var right2;
    var right3;
    var right4;
    var right5;
    var right6;
    var right7;
    var right8;
    var right9;
    var righta;
    var rightb;
    var rightc;
    var rightd;
    var righte;
    var rightf;
    var overlap1;
    var overlap2;
    var overlap3;
    var overlap4;
    var overlap5;
    var overlap6;
    var overlap7;
    var overlap8;
    var overlap9;
    var overlapa;
    var overlapb;
    var overlapc;
    var overlapd;
    var overlape;
    var overlapf;
    var invalid7 = false;
    var invalid8 = false;
    var invalid9 = false;
    var invalida = false;
    var invalidb = false;
    var invalidc = false;
    var invalidd = false;
    var invalide = false;
    var invalidf = false;
    var len;
    var len1;
    var len2;
    var dot1;
    var dot2;
    var dot3;
    len = a1x * dx + a1y * dy + a1z * dz;
    right1 = len > 0;
    if (!right1) len = -len;
    len1 = w1;
    dot1 = a1x * a4x + a1y * a4y + a1z * a4z;
    dot2 = a1x * a5x + a1y * a5y + a1z * a5z;
    dot3 = a1x * a6x + a1y * a6y + a1z * a6z;
    if (dot1 < 0) dot1 = -dot1;
    if (dot2 < 0) dot2 = -dot2;
    if (dot3 < 0) dot3 = -dot3;
    len2 = dot1 * w2 + dot2 * h2 + dot3 * d2;
    overlap1 = len - len1 - len2;
    if (overlap1 > 0) return;
    len = a2x * dx + a2y * dy + a2z * dz;
    right2 = len > 0;
    if (!right2) len = -len;
    len1 = h1;
    dot1 = a2x * a4x + a2y * a4y + a2z * a4z;
    dot2 = a2x * a5x + a2y * a5y + a2z * a5z;
    dot3 = a2x * a6x + a2y * a6y + a2z * a6z;
    if (dot1 < 0) dot1 = -dot1;
    if (dot2 < 0) dot2 = -dot2;
    if (dot3 < 0) dot3 = -dot3;
    len2 = dot1 * w2 + dot2 * h2 + dot3 * d2;
    overlap2 = len - len1 - len2;
    if (overlap2 > 0) return;
    len = a3x * dx + a3y * dy + a3z * dz;
    right3 = len > 0;
    if (!right3) len = -len;
    len1 = d1;
    dot1 = a3x * a4x + a3y * a4y + a3z * a4z;
    dot2 = a3x * a5x + a3y * a5y + a3z * a5z;
    dot3 = a3x * a6x + a3y * a6y + a3z * a6z;
    if (dot1 < 0) dot1 = -dot1;
    if (dot2 < 0) dot2 = -dot2;
    if (dot3 < 0) dot3 = -dot3;
    len2 = dot1 * w2 + dot2 * h2 + dot3 * d2;
    overlap3 = len - len1 - len2;
    if (overlap3 > 0) return;
    len = a4x * dx + a4y * dy + a4z * dz;
    right4 = len > 0;
    if (!right4) len = -len;
    dot1 = a4x * a1x + a4y * a1y + a4z * a1z;
    dot2 = a4x * a2x + a4y * a2y + a4z * a2z;
    dot3 = a4x * a3x + a4y * a3y + a4z * a3z;
    if (dot1 < 0) dot1 = -dot1;
    if (dot2 < 0) dot2 = -dot2;
    if (dot3 < 0) dot3 = -dot3;
    len1 = dot1 * w1 + dot2 * h1 + dot3 * d1;
    len2 = w2;
    overlap4 = (len - len1 - len2) * 1.0;
    if (overlap4 > 0) return;
    len = a5x * dx + a5y * dy + a5z * dz;
    right5 = len > 0;
    if (!right5) len = -len;
    dot1 = a5x * a1x + a5y * a1y + a5z * a1z;
    dot2 = a5x * a2x + a5y * a2y + a5z * a2z;
    dot3 = a5x * a3x + a5y * a3y + a5z * a3z;
    if (dot1 < 0) dot1 = -dot1;
    if (dot2 < 0) dot2 = -dot2;
    if (dot3 < 0) dot3 = -dot3;
    len1 = dot1 * w1 + dot2 * h1 + dot3 * d1;
    len2 = h2;
    overlap5 = (len - len1 - len2) * 1.0;
    if (overlap5 > 0) return;
    len = a6x * dx + a6y * dy + a6z * dz;
    right6 = len > 0;
    if (!right6) len = -len;
    dot1 = a6x * a1x + a6y * a1y + a6z * a1z;
    dot2 = a6x * a2x + a6y * a2y + a6z * a2z;
    dot3 = a6x * a3x + a6y * a3y + a6z * a3z;
    if (dot1 < 0) dot1 = -dot1;
    if (dot2 < 0) dot2 = -dot2;
    if (dot3 < 0) dot3 = -dot3;
    len1 = dot1 * w1 + dot2 * h1 + dot3 * d1;
    len2 = d2;
    overlap6 = (len - len1 - len2) * 1.0;
    if (overlap6 > 0) return;
    len = a7x * a7x + a7y * a7y + a7z * a7z;
    if (len > 1e-5) {
      len = 1 / _Math.sqrt(len);
      a7x *= len;
      a7y *= len;
      a7z *= len;
      len = a7x * dx + a7y * dy + a7z * dz;
      right7 = len > 0;
      if (!right7) len = -len;
      dot1 = a7x * a2x + a7y * a2y + a7z * a2z;
      dot2 = a7x * a3x + a7y * a3y + a7z * a3z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len1 = dot1 * h1 + dot2 * d1;
      dot1 = a7x * a5x + a7y * a5y + a7z * a5z;
      dot2 = a7x * a6x + a7y * a6y + a7z * a6z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len2 = dot1 * h2 + dot2 * d2;
      overlap7 = len - len1 - len2;
      if (overlap7 > 0) return;
    } else {
      right7 = false;
      overlap7 = 0;
      invalid7 = true;
    }
    len = a8x * a8x + a8y * a8y + a8z * a8z;
    if (len > 1e-5) {
      len = 1 / _Math.sqrt(len);
      a8x *= len;
      a8y *= len;
      a8z *= len;
      len = a8x * dx + a8y * dy + a8z * dz;
      right8 = len > 0;
      if (!right8) len = -len;
      dot1 = a8x * a2x + a8y * a2y + a8z * a2z;
      dot2 = a8x * a3x + a8y * a3y + a8z * a3z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len1 = dot1 * h1 + dot2 * d1;
      dot1 = a8x * a4x + a8y * a4y + a8z * a4z;
      dot2 = a8x * a6x + a8y * a6y + a8z * a6z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len2 = dot1 * w2 + dot2 * d2;
      overlap8 = len - len1 - len2;
      if (overlap8 > 0) return;
    } else {
      right8 = false;
      overlap8 = 0;
      invalid8 = true;
    }
    len = a9x * a9x + a9y * a9y + a9z * a9z;
    if (len > 1e-5) {
      len = 1 / _Math.sqrt(len);
      a9x *= len;
      a9y *= len;
      a9z *= len;
      len = a9x * dx + a9y * dy + a9z * dz;
      right9 = len > 0;
      if (!right9) len = -len;
      dot1 = a9x * a2x + a9y * a2y + a9z * a2z;
      dot2 = a9x * a3x + a9y * a3y + a9z * a3z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len1 = dot1 * h1 + dot2 * d1;
      dot1 = a9x * a4x + a9y * a4y + a9z * a4z;
      dot2 = a9x * a5x + a9y * a5y + a9z * a5z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len2 = dot1 * w2 + dot2 * h2;
      overlap9 = len - len1 - len2;
      if (overlap9 > 0) return;
    } else {
      right9 = false;
      overlap9 = 0;
      invalid9 = true;
    }
    len = aax * aax + aay * aay + aaz * aaz;
    if (len > 1e-5) {
      len = 1 / _Math.sqrt(len);
      aax *= len;
      aay *= len;
      aaz *= len;
      len = aax * dx + aay * dy + aaz * dz;
      righta = len > 0;
      if (!righta) len = -len;
      dot1 = aax * a1x + aay * a1y + aaz * a1z;
      dot2 = aax * a3x + aay * a3y + aaz * a3z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len1 = dot1 * w1 + dot2 * d1;
      dot1 = aax * a5x + aay * a5y + aaz * a5z;
      dot2 = aax * a6x + aay * a6y + aaz * a6z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len2 = dot1 * h2 + dot2 * d2;
      overlapa = len - len1 - len2;
      if (overlapa > 0) return;
    } else {
      righta = false;
      overlapa = 0;
      invalida = true;
    }
    len = abx * abx + aby * aby + abz * abz;
    if (len > 1e-5) {
      len = 1 / _Math.sqrt(len);
      abx *= len;
      aby *= len;
      abz *= len;
      len = abx * dx + aby * dy + abz * dz;
      rightb = len > 0;
      if (!rightb) len = -len;
      dot1 = abx * a1x + aby * a1y + abz * a1z;
      dot2 = abx * a3x + aby * a3y + abz * a3z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len1 = dot1 * w1 + dot2 * d1;
      dot1 = abx * a4x + aby * a4y + abz * a4z;
      dot2 = abx * a6x + aby * a6y + abz * a6z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len2 = dot1 * w2 + dot2 * d2;
      overlapb = len - len1 - len2;
      if (overlapb > 0) return;
    } else {
      rightb = false;
      overlapb = 0;
      invalidb = true;
    }
    len = acx * acx + acy * acy + acz * acz;
    if (len > 1e-5) {
      len = 1 / _Math.sqrt(len);
      acx *= len;
      acy *= len;
      acz *= len;
      len = acx * dx + acy * dy + acz * dz;
      rightc = len > 0;
      if (!rightc) len = -len;
      dot1 = acx * a1x + acy * a1y + acz * a1z;
      dot2 = acx * a3x + acy * a3y + acz * a3z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len1 = dot1 * w1 + dot2 * d1;
      dot1 = acx * a4x + acy * a4y + acz * a4z;
      dot2 = acx * a5x + acy * a5y + acz * a5z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len2 = dot1 * w2 + dot2 * h2;
      overlapc = len - len1 - len2;
      if (overlapc > 0) return;
    } else {
      rightc = false;
      overlapc = 0;
      invalidc = true;
    }
    len = adx * adx + ady * ady + adz * adz;
    if (len > 1e-5) {
      len = 1 / _Math.sqrt(len);
      adx *= len;
      ady *= len;
      adz *= len;
      len = adx * dx + ady * dy + adz * dz;
      rightd = len > 0;
      if (!rightd) len = -len;
      dot1 = adx * a1x + ady * a1y + adz * a1z;
      dot2 = adx * a2x + ady * a2y + adz * a2z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len1 = dot1 * w1 + dot2 * h1;
      dot1 = adx * a5x + ady * a5y + adz * a5z;
      dot2 = adx * a6x + ady * a6y + adz * a6z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len2 = dot1 * h2 + dot2 * d2;
      overlapd = len - len1 - len2;
      if (overlapd > 0) return;
    } else {
      rightd = false;
      overlapd = 0;
      invalidd = true;
    }
    len = aex * aex + aey * aey + aez * aez;
    if (len > 1e-5) {
      len = 1 / _Math.sqrt(len);
      aex *= len;
      aey *= len;
      aez *= len;
      len = aex * dx + aey * dy + aez * dz;
      righte = len > 0;
      if (!righte) len = -len;
      dot1 = aex * a1x + aey * a1y + aez * a1z;
      dot2 = aex * a2x + aey * a2y + aez * a2z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len1 = dot1 * w1 + dot2 * h1;
      dot1 = aex * a4x + aey * a4y + aez * a4z;
      dot2 = aex * a6x + aey * a6y + aez * a6z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len2 = dot1 * w2 + dot2 * d2;
      overlape = len - len1 - len2;
      if (overlape > 0) return;
    } else {
      righte = false;
      overlape = 0;
      invalide = true;
    }
    len = afx * afx + afy * afy + afz * afz;
    if (len > 1e-5) {
      len = 1 / _Math.sqrt(len);
      afx *= len;
      afy *= len;
      afz *= len;
      len = afx * dx + afy * dy + afz * dz;
      rightf = len > 0;
      if (!rightf) len = -len;
      dot1 = afx * a1x + afy * a1y + afz * a1z;
      dot2 = afx * a2x + afy * a2y + afz * a2z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len1 = dot1 * w1 + dot2 * h1;
      dot1 = afx * a4x + afy * a4y + afz * a4z;
      dot2 = afx * a5x + afy * a5y + afz * a5z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len2 = dot1 * w2 + dot2 * h2;
      overlapf = len - len1 - len2;
      if (overlapf > 0) return;
    } else {
      rightf = false;
      overlapf = 0;
      invalidf = true;
    }
    var depth = overlap1;
    var depth2 = overlap1;
    var minIndex = 0;
    var right = right1;
    if (overlap2 > depth2) {
      depth = overlap2;
      depth2 = overlap2;
      minIndex = 1;
      right = right2;
    }
    if (overlap3 > depth2) {
      depth = overlap3;
      depth2 = overlap3;
      minIndex = 2;
      right = right3;
    }
    if (overlap4 > depth2) {
      depth = overlap4;
      depth2 = overlap4;
      minIndex = 3;
      right = right4;
    }
    if (overlap5 > depth2) {
      depth = overlap5;
      depth2 = overlap5;
      minIndex = 4;
      right = right5;
    }
    if (overlap6 > depth2) {
      depth = overlap6;
      depth2 = overlap6;
      minIndex = 5;
      right = right6;
    }
    if (overlap7 - 0.01 > depth2 && !invalid7) {
      depth = overlap7;
      depth2 = overlap7 - 0.01;
      minIndex = 6;
      right = right7;
    }
    if (overlap8 - 0.01 > depth2 && !invalid8) {
      depth = overlap8;
      depth2 = overlap8 - 0.01;
      minIndex = 7;
      right = right8;
    }
    if (overlap9 - 0.01 > depth2 && !invalid9) {
      depth = overlap9;
      depth2 = overlap9 - 0.01;
      minIndex = 8;
      right = right9;
    }
    if (overlapa - 0.01 > depth2 && !invalida) {
      depth = overlapa;
      depth2 = overlapa - 0.01;
      minIndex = 9;
      right = righta;
    }
    if (overlapb - 0.01 > depth2 && !invalidb) {
      depth = overlapb;
      depth2 = overlapb - 0.01;
      minIndex = 10;
      right = rightb;
    }
    if (overlapc - 0.01 > depth2 && !invalidc) {
      depth = overlapc;
      depth2 = overlapc - 0.01;
      minIndex = 11;
      right = rightc;
    }
    if (overlapd - 0.01 > depth2 && !invalidd) {
      depth = overlapd;
      depth2 = overlapd - 0.01;
      minIndex = 12;
      right = rightd;
    }
    if (overlape - 0.01 > depth2 && !invalide) {
      depth = overlape;
      depth2 = overlape - 0.01;
      minIndex = 13;
      right = righte;
    }
    if (overlapf - 0.01 > depth2 && !invalidf) {
      depth = overlapf;
      minIndex = 14;
      right = rightf;
    }
    var nx = 0;
    var ny = 0;
    var nz = 0;
    var n1x = 0;
    var n1y = 0;
    var n1z = 0;
    var n2x = 0;
    var n2y = 0;
    var n2z = 0;
    var cx = 0;
    var cy = 0;
    var cz = 0;
    var s1x = 0;
    var s1y = 0;
    var s1z = 0;
    var s2x = 0;
    var s2y = 0;
    var s2z = 0;
    var swap = false;
    if (minIndex == 0) {
      if (right) {
        cx = p1x + d1x;
        cy = p1y + d1y;
        cz = p1z + d1z;
        nx = a1x;
        ny = a1y;
        nz = a1z;
      } else {
        cx = p1x - d1x;
        cy = p1y - d1y;
        cz = p1z - d1z;
        nx = -a1x;
        ny = -a1y;
        nz = -a1z;
      }
      s1x = d2x;
      s1y = d2y;
      s1z = d2z;
      n1x = -a2x;
      n1y = -a2y;
      n1z = -a2z;
      s2x = d3x;
      s2y = d3y;
      s2z = d3z;
      n2x = -a3x;
      n2y = -a3y;
      n2z = -a3z;
    } else if (minIndex == 1) {
      if (right) {
        cx = p1x + d2x;
        cy = p1y + d2y;
        cz = p1z + d2z;
        nx = a2x;
        ny = a2y;
        nz = a2z;
      } else {
        cx = p1x - d2x;
        cy = p1y - d2y;
        cz = p1z - d2z;
        nx = -a2x;
        ny = -a2y;
        nz = -a2z;
      }
      s1x = d1x;
      s1y = d1y;
      s1z = d1z;
      n1x = -a1x;
      n1y = -a1y;
      n1z = -a1z;
      s2x = d3x;
      s2y = d3y;
      s2z = d3z;
      n2x = -a3x;
      n2y = -a3y;
      n2z = -a3z;
    } else if (minIndex == 2) {
      if (right) {
        cx = p1x + d3x;
        cy = p1y + d3y;
        cz = p1z + d3z;
        nx = a3x;
        ny = a3y;
        nz = a3z;
      } else {
        cx = p1x - d3x;
        cy = p1y - d3y;
        cz = p1z - d3z;
        nx = -a3x;
        ny = -a3y;
        nz = -a3z;
      }
      s1x = d1x;
      s1y = d1y;
      s1z = d1z;
      n1x = -a1x;
      n1y = -a1y;
      n1z = -a1z;
      s2x = d2x;
      s2y = d2y;
      s2z = d2z;
      n2x = -a2x;
      n2y = -a2y;
      n2z = -a2z;
    } else if (minIndex == 3) {
      swap = true;
      if (!right) {
        cx = p2x + d4x;
        cy = p2y + d4y;
        cz = p2z + d4z;
        nx = a4x;
        ny = a4y;
        nz = a4z;
      } else {
        cx = p2x - d4x;
        cy = p2y - d4y;
        cz = p2z - d4z;
        nx = -a4x;
        ny = -a4y;
        nz = -a4z;
      }
      s1x = d5x;
      s1y = d5y;
      s1z = d5z;
      n1x = -a5x;
      n1y = -a5y;
      n1z = -a5z;
      s2x = d6x;
      s2y = d6y;
      s2z = d6z;
      n2x = -a6x;
      n2y = -a6y;
      n2z = -a6z;
    } else if (minIndex == 4) {
      swap = true;
      if (!right) {
        cx = p2x + d5x;
        cy = p2y + d5y;
        cz = p2z + d5z;
        nx = a5x;
        ny = a5y;
        nz = a5z;
      } else {
        cx = p2x - d5x;
        cy = p2y - d5y;
        cz = p2z - d5z;
        nx = -a5x;
        ny = -a5y;
        nz = -a5z;
      }
      s1x = d4x;
      s1y = d4y;
      s1z = d4z;
      n1x = -a4x;
      n1y = -a4y;
      n1z = -a4z;
      s2x = d6x;
      s2y = d6y;
      s2z = d6z;
      n2x = -a6x;
      n2y = -a6y;
      n2z = -a6z;
    } else if (minIndex == 5) {
      swap = true;
      if (!right) {
        cx = p2x + d6x;
        cy = p2y + d6y;
        cz = p2z + d6z;
        nx = a6x;
        ny = a6y;
        nz = a6z;
      } else {
        cx = p2x - d6x;
        cy = p2y - d6y;
        cz = p2z - d6z;
        nx = -a6x;
        ny = -a6y;
        nz = -a6z;
      }
      s1x = d4x;
      s1y = d4y;
      s1z = d4z;
      n1x = -a4x;
      n1y = -a4y;
      n1z = -a4z;
      s2x = d5x;
      s2y = d5y;
      s2z = d5z;
      n2x = -a5x;
      n2y = -a5y;
      n2z = -a5z;
    } else if (minIndex == 6) {
      nx = a7x;
      ny = a7y;
      nz = a7z;
      n1x = a1x;
      n1y = a1y;
      n1z = a1z;
      n2x = a4x;
      n2y = a4y;
      n2z = a4z;
    } else if (minIndex == 7) {
      nx = a8x;
      ny = a8y;
      nz = a8z;
      n1x = a1x;
      n1y = a1y;
      n1z = a1z;
      n2x = a5x;
      n2y = a5y;
      n2z = a5z;
    } else if (minIndex == 8) {
      nx = a9x;
      ny = a9y;
      nz = a9z;
      n1x = a1x;
      n1y = a1y;
      n1z = a1z;
      n2x = a6x;
      n2y = a6y;
      n2z = a6z;
    } else if (minIndex == 9) {
      nx = aax;
      ny = aay;
      nz = aaz;
      n1x = a2x;
      n1y = a2y;
      n1z = a2z;
      n2x = a4x;
      n2y = a4y;
      n2z = a4z;
    } else if (minIndex == 10) {
      nx = abx;
      ny = aby;
      nz = abz;
      n1x = a2x;
      n1y = a2y;
      n1z = a2z;
      n2x = a5x;
      n2y = a5y;
      n2z = a5z;
    } else if (minIndex == 11) {
      nx = acx;
      ny = acy;
      nz = acz;
      n1x = a2x;
      n1y = a2y;
      n1z = a2z;
      n2x = a6x;
      n2y = a6y;
      n2z = a6z;
    } else if (minIndex == 12) {
      nx = adx;
      ny = ady;
      nz = adz;
      n1x = a3x;
      n1y = a3y;
      n1z = a3z;
      n2x = a4x;
      n2y = a4y;
      n2z = a4z;
    } else if (minIndex == 13) {
      nx = aex;
      ny = aey;
      nz = aez;
      n1x = a3x;
      n1y = a3y;
      n1z = a3z;
      n2x = a5x;
      n2y = a5y;
      n2z = a5z;
    } else if (minIndex == 14) {
      nx = afx;
      ny = afy;
      nz = afz;
      n1x = a3x;
      n1y = a3y;
      n1z = a3z;
      n2x = a6x;
      n2y = a6y;
      n2z = a6z;
    }
    if (minIndex > 5) {
      if (!right) {
        nx = -nx;
        ny = -ny;
        nz = -nz;
      }
      var distance;
      var maxDistance;
      var vx;
      var vy;
      var vz;
      var v1x;
      var v1y;
      var v1z;
      var v2x;
      var v2y;
      var v2z;
      v1x = V1[0];
      v1y = V1[1];
      v1z = V1[2];
      maxDistance = nx * v1x + ny * v1y + nz * v1z;
      vx = V1[3];
      vy = V1[4];
      vz = V1[5];
      distance = nx * vx + ny * vy + nz * vz;
      if (distance > maxDistance) {
        maxDistance = distance;
        v1x = vx;
        v1y = vy;
        v1z = vz;
      }
      vx = V1[6];
      vy = V1[7];
      vz = V1[8];
      distance = nx * vx + ny * vy + nz * vz;
      if (distance > maxDistance) {
        maxDistance = distance;
        v1x = vx;
        v1y = vy;
        v1z = vz;
      }
      vx = V1[9];
      vy = V1[10];
      vz = V1[11];
      distance = nx * vx + ny * vy + nz * vz;
      if (distance > maxDistance) {
        maxDistance = distance;
        v1x = vx;
        v1y = vy;
        v1z = vz;
      }
      vx = V1[12];
      vy = V1[13];
      vz = V1[14];
      distance = nx * vx + ny * vy + nz * vz;
      if (distance > maxDistance) {
        maxDistance = distance;
        v1x = vx;
        v1y = vy;
        v1z = vz;
      }
      vx = V1[15];
      vy = V1[16];
      vz = V1[17];
      distance = nx * vx + ny * vy + nz * vz;
      if (distance > maxDistance) {
        maxDistance = distance;
        v1x = vx;
        v1y = vy;
        v1z = vz;
      }
      vx = V1[18];
      vy = V1[19];
      vz = V1[20];
      distance = nx * vx + ny * vy + nz * vz;
      if (distance > maxDistance) {
        maxDistance = distance;
        v1x = vx;
        v1y = vy;
        v1z = vz;
      }
      vx = V1[21];
      vy = V1[22];
      vz = V1[23];
      distance = nx * vx + ny * vy + nz * vz;
      if (distance > maxDistance) {
        maxDistance = distance;
        v1x = vx;
        v1y = vy;
        v1z = vz;
      }
      v2x = V2[0];
      v2y = V2[1];
      v2z = V2[2];
      maxDistance = nx * v2x + ny * v2y + nz * v2z;
      vx = V2[3];
      vy = V2[4];
      vz = V2[5];
      distance = nx * vx + ny * vy + nz * vz;
      if (distance < maxDistance) {
        maxDistance = distance;
        v2x = vx;
        v2y = vy;
        v2z = vz;
      }
      vx = V2[6];
      vy = V2[7];
      vz = V2[8];
      distance = nx * vx + ny * vy + nz * vz;
      if (distance < maxDistance) {
        maxDistance = distance;
        v2x = vx;
        v2y = vy;
        v2z = vz;
      }
      vx = V2[9];
      vy = V2[10];
      vz = V2[11];
      distance = nx * vx + ny * vy + nz * vz;
      if (distance < maxDistance) {
        maxDistance = distance;
        v2x = vx;
        v2y = vy;
        v2z = vz;
      }
      vx = V2[12];
      vy = V2[13];
      vz = V2[14];
      distance = nx * vx + ny * vy + nz * vz;
      if (distance < maxDistance) {
        maxDistance = distance;
        v2x = vx;
        v2y = vy;
        v2z = vz;
      }
      vx = V2[15];
      vy = V2[16];
      vz = V2[17];
      distance = nx * vx + ny * vy + nz * vz;
      if (distance < maxDistance) {
        maxDistance = distance;
        v2x = vx;
        v2y = vy;
        v2z = vz;
      }
      vx = V2[18];
      vy = V2[19];
      vz = V2[20];
      distance = nx * vx + ny * vy + nz * vz;
      if (distance < maxDistance) {
        maxDistance = distance;
        v2x = vx;
        v2y = vy;
        v2z = vz;
      }
      vx = V2[21];
      vy = V2[22];
      vz = V2[23];
      distance = nx * vx + ny * vy + nz * vz;
      if (distance < maxDistance) {
        maxDistance = distance;
        v2x = vx;
        v2y = vy;
        v2z = vz;
      }
      vx = v2x - v1x;
      vy = v2y - v1y;
      vz = v2z - v1z;
      dot1 = n1x * n2x + n1y * n2y + n1z * n2z;
      var t = (vx * (n1x - n2x * dot1) + vy * (n1y - n2y * dot1) + vz * (n1z - n2z * dot1)) / (1 - dot1 * dot1);
      manifold.addPoint(v1x + n1x * t + nx * depth * 0.5, v1y + n1y * t + ny * depth * 0.5, v1z + n1z * t + nz * depth * 0.5, nx, ny, nz, depth, false);
      return;
    }
    var q1x;
    var q1y;
    var q1z;
    var q2x;
    var q2y;
    var q2z;
    var q3x;
    var q3y;
    var q3z;
    var q4x;
    var q4y;
    var q4z;
    var minDot = 1;
    var dot = 0;
    var minDotIndex = 0;
    if (swap) {
      dot = a1x * nx + a1y * ny + a1z * nz;
      if (dot < minDot) {
        minDot = dot;
        minDotIndex = 0;
      }
      if (-dot < minDot) {
        minDot = -dot;
        minDotIndex = 1;
      }
      dot = a2x * nx + a2y * ny + a2z * nz;
      if (dot < minDot) {
        minDot = dot;
        minDotIndex = 2;
      }
      if (-dot < minDot) {
        minDot = -dot;
        minDotIndex = 3;
      }
      dot = a3x * nx + a3y * ny + a3z * nz;
      if (dot < minDot) {
        minDot = dot;
        minDotIndex = 4;
      }
      if (-dot < minDot) {
        minDot = -dot;
        minDotIndex = 5;
      }
      if (minDotIndex == 0) {
        q1x = V1[0];
        q1y = V1[1];
        q1z = V1[2];
        q2x = V1[6];
        q2y = V1[7];
        q2z = V1[8];
        q3x = V1[9];
        q3y = V1[10];
        q3z = V1[11];
        q4x = V1[3];
        q4y = V1[4];
        q4z = V1[5];
      } else if (minDotIndex == 1) {
        q1x = V1[15];
        q1y = V1[16];
        q1z = V1[17];
        q2x = V1[21];
        q2y = V1[22];
        q2z = V1[23];
        q3x = V1[18];
        q3y = V1[19];
        q3z = V1[20];
        q4x = V1[12];
        q4y = V1[13];
        q4z = V1[14];
      } else if (minDotIndex == 2) {
        q1x = V1[12];
        q1y = V1[13];
        q1z = V1[14];
        q2x = V1[0];
        q2y = V1[1];
        q2z = V1[2];
        q3x = V1[3];
        q3y = V1[4];
        q3z = V1[5];
        q4x = V1[15];
        q4y = V1[16];
        q4z = V1[17];
      } else if (minDotIndex == 3) {
        q1x = V1[21];
        q1y = V1[22];
        q1z = V1[23];
        q2x = V1[9];
        q2y = V1[10];
        q2z = V1[11];
        q3x = V1[6];
        q3y = V1[7];
        q3z = V1[8];
        q4x = V1[18];
        q4y = V1[19];
        q4z = V1[20];
      } else if (minDotIndex == 4) {
        q1x = V1[12];
        q1y = V1[13];
        q1z = V1[14];
        q2x = V1[18];
        q2y = V1[19];
        q2z = V1[20];
        q3x = V1[6];
        q3y = V1[7];
        q3z = V1[8];
        q4x = V1[0];
        q4y = V1[1];
        q4z = V1[2];
      } else if (minDotIndex == 5) {
        q1x = V1[3];
        q1y = V1[4];
        q1z = V1[5];
        q2x = V2[9];
        q2y = V2[10];
        q2z = V2[11];
        q3x = V1[21];
        q3y = V1[22];
        q3z = V1[23];
        q4x = V1[15];
        q4y = V1[16];
        q4z = V1[17];
      }
    } else {
      dot = a4x * nx + a4y * ny + a4z * nz;
      if (dot < minDot) {
        minDot = dot;
        minDotIndex = 0;
      }
      if (-dot < minDot) {
        minDot = -dot;
        minDotIndex = 1;
      }
      dot = a5x * nx + a5y * ny + a5z * nz;
      if (dot < minDot) {
        minDot = dot;
        minDotIndex = 2;
      }
      if (-dot < minDot) {
        minDot = -dot;
        minDotIndex = 3;
      }
      dot = a6x * nx + a6y * ny + a6z * nz;
      if (dot < minDot) {
        minDot = dot;
        minDotIndex = 4;
      }
      if (-dot < minDot) {
        minDot = -dot;
        minDotIndex = 5;
      }
      if (minDotIndex == 0) {
        q1x = V2[0];
        q1y = V2[1];
        q1z = V2[2];
        q2x = V2[6];
        q2y = V2[7];
        q2z = V2[8];
        q3x = V2[9];
        q3y = V2[10];
        q3z = V2[11];
        q4x = V2[3];
        q4y = V2[4];
        q4z = V2[5];
      } else if (minDotIndex == 1) {
        q1x = V2[15];
        q1y = V2[16];
        q1z = V2[17];
        q2x = V2[21];
        q2y = V2[22];
        q2z = V2[23];
        q3x = V2[18];
        q3y = V2[19];
        q3z = V2[20];
        q4x = V2[12];
        q4y = V2[13];
        q4z = V2[14];
      } else if (minDotIndex == 2) {
        q1x = V2[12];
        q1y = V2[13];
        q1z = V2[14];
        q2x = V2[0];
        q2y = V2[1];
        q2z = V2[2];
        q3x = V2[3];
        q3y = V2[4];
        q3z = V2[5];
        q4x = V2[15];
        q4y = V2[16];
        q4z = V2[17];
      } else if (minDotIndex == 3) {
        q1x = V2[21];
        q1y = V2[22];
        q1z = V2[23];
        q2x = V2[9];
        q2y = V2[10];
        q2z = V2[11];
        q3x = V2[6];
        q3y = V2[7];
        q3z = V2[8];
        q4x = V2[18];
        q4y = V2[19];
        q4z = V2[20];
      } else if (minDotIndex == 4) {
        q1x = V2[12];
        q1y = V2[13];
        q1z = V2[14];
        q2x = V2[18];
        q2y = V2[19];
        q2z = V2[20];
        q3x = V2[6];
        q3y = V2[7];
        q3z = V2[8];
        q4x = V2[0];
        q4y = V2[1];
        q4z = V2[2];
      } else if (minDotIndex == 5) {
        q1x = V2[3];
        q1y = V2[4];
        q1z = V2[5];
        q2x = V2[9];
        q2y = V2[10];
        q2z = V2[11];
        q3x = V2[21];
        q3y = V2[22];
        q3z = V2[23];
        q4x = V2[15];
        q4y = V2[16];
        q4z = V2[17];
      }
    }
    var numClipVertices;
    var numAddedClipVertices;
    var index;
    var x1;
    var y1;
    var z1;
    var x2;
    var y2;
    var z2;
    this.clipVertices1[0] = q1x;
    this.clipVertices1[1] = q1y;
    this.clipVertices1[2] = q1z;
    this.clipVertices1[3] = q2x;
    this.clipVertices1[4] = q2y;
    this.clipVertices1[5] = q2z;
    this.clipVertices1[6] = q3x;
    this.clipVertices1[7] = q3y;
    this.clipVertices1[8] = q3z;
    this.clipVertices1[9] = q4x;
    this.clipVertices1[10] = q4y;
    this.clipVertices1[11] = q4z;
    numAddedClipVertices = 0;
    x1 = this.clipVertices1[9];
    y1 = this.clipVertices1[10];
    z1 = this.clipVertices1[11];
    dot1 = (x1 - cx - s1x) * n1x + (y1 - cy - s1y) * n1y + (z1 - cz - s1z) * n1z;
    for (var i = 0; i < 4; i++) {
      index = i * 3;
      x2 = this.clipVertices1[index];
      y2 = this.clipVertices1[index + 1];
      z2 = this.clipVertices1[index + 2];
      dot2 = (x2 - cx - s1x) * n1x + (y2 - cy - s1y) * n1y + (z2 - cz - s1z) * n1z;
      if (dot1 > 0) {
        if (dot2 > 0) {
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          this.clipVertices2[index] = x2;
          this.clipVertices2[index + 1] = y2;
          this.clipVertices2[index + 2] = z2;
        } else {
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          t = dot1 / (dot1 - dot2);
          this.clipVertices2[index] = x1 + (x2 - x1) * t;
          this.clipVertices2[index + 1] = y1 + (y2 - y1) * t;
          this.clipVertices2[index + 2] = z1 + (z2 - z1) * t;
        }
      } else {
        if (dot2 > 0) {
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          t = dot1 / (dot1 - dot2);
          this.clipVertices2[index] = x1 + (x2 - x1) * t;
          this.clipVertices2[index + 1] = y1 + (y2 - y1) * t;
          this.clipVertices2[index + 2] = z1 + (z2 - z1) * t;
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          this.clipVertices2[index] = x2;
          this.clipVertices2[index + 1] = y2;
          this.clipVertices2[index + 2] = z2;
        }
      }
      x1 = x2;
      y1 = y2;
      z1 = z2;
      dot1 = dot2;
    }
    numClipVertices = numAddedClipVertices;
    if (numClipVertices == 0) return;
    numAddedClipVertices = 0;
    index = (numClipVertices - 1) * 3;
    x1 = this.clipVertices2[index];
    y1 = this.clipVertices2[index + 1];
    z1 = this.clipVertices2[index + 2];
    dot1 = (x1 - cx - s2x) * n2x + (y1 - cy - s2y) * n2y + (z1 - cz - s2z) * n2z;
    for (i = 0; i < numClipVertices; i++) {
      index = i * 3;
      x2 = this.clipVertices2[index];
      y2 = this.clipVertices2[index + 1];
      z2 = this.clipVertices2[index + 2];
      dot2 = (x2 - cx - s2x) * n2x + (y2 - cy - s2y) * n2y + (z2 - cz - s2z) * n2z;
      if (dot1 > 0) {
        if (dot2 > 0) {
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          this.clipVertices1[index] = x2;
          this.clipVertices1[index + 1] = y2;
          this.clipVertices1[index + 2] = z2;
        } else {
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          t = dot1 / (dot1 - dot2);
          this.clipVertices1[index] = x1 + (x2 - x1) * t;
          this.clipVertices1[index + 1] = y1 + (y2 - y1) * t;
          this.clipVertices1[index + 2] = z1 + (z2 - z1) * t;
        }
      } else {
        if (dot2 > 0) {
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          t = dot1 / (dot1 - dot2);
          this.clipVertices1[index] = x1 + (x2 - x1) * t;
          this.clipVertices1[index + 1] = y1 + (y2 - y1) * t;
          this.clipVertices1[index + 2] = z1 + (z2 - z1) * t;
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          this.clipVertices1[index] = x2;
          this.clipVertices1[index + 1] = y2;
          this.clipVertices1[index + 2] = z2;
        }
      }
      x1 = x2;
      y1 = y2;
      z1 = z2;
      dot1 = dot2;
    }
    numClipVertices = numAddedClipVertices;
    if (numClipVertices == 0) return;
    numAddedClipVertices = 0;
    index = (numClipVertices - 1) * 3;
    x1 = this.clipVertices1[index];
    y1 = this.clipVertices1[index + 1];
    z1 = this.clipVertices1[index + 2];
    dot1 = (x1 - cx + s1x) * -n1x + (y1 - cy + s1y) * -n1y + (z1 - cz + s1z) * -n1z;
    for (i = 0; i < numClipVertices; i++) {
      index = i * 3;
      x2 = this.clipVertices1[index];
      y2 = this.clipVertices1[index + 1];
      z2 = this.clipVertices1[index + 2];
      dot2 = (x2 - cx + s1x) * -n1x + (y2 - cy + s1y) * -n1y + (z2 - cz + s1z) * -n1z;
      if (dot1 > 0) {
        if (dot2 > 0) {
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          this.clipVertices2[index] = x2;
          this.clipVertices2[index + 1] = y2;
          this.clipVertices2[index + 2] = z2;
        } else {
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          t = dot1 / (dot1 - dot2);
          this.clipVertices2[index] = x1 + (x2 - x1) * t;
          this.clipVertices2[index + 1] = y1 + (y2 - y1) * t;
          this.clipVertices2[index + 2] = z1 + (z2 - z1) * t;
        }
      } else {
        if (dot2 > 0) {
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          t = dot1 / (dot1 - dot2);
          this.clipVertices2[index] = x1 + (x2 - x1) * t;
          this.clipVertices2[index + 1] = y1 + (y2 - y1) * t;
          this.clipVertices2[index + 2] = z1 + (z2 - z1) * t;
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          this.clipVertices2[index] = x2;
          this.clipVertices2[index + 1] = y2;
          this.clipVertices2[index + 2] = z2;
        }
      }
      x1 = x2;
      y1 = y2;
      z1 = z2;
      dot1 = dot2;
    }
    numClipVertices = numAddedClipVertices;
    if (numClipVertices == 0) return;
    numAddedClipVertices = 0;
    index = (numClipVertices - 1) * 3;
    x1 = this.clipVertices2[index];
    y1 = this.clipVertices2[index + 1];
    z1 = this.clipVertices2[index + 2];
    dot1 = (x1 - cx + s2x) * -n2x + (y1 - cy + s2y) * -n2y + (z1 - cz + s2z) * -n2z;
    for (i = 0; i < numClipVertices; i++) {
      index = i * 3;
      x2 = this.clipVertices2[index];
      y2 = this.clipVertices2[index + 1];
      z2 = this.clipVertices2[index + 2];
      dot2 = (x2 - cx + s2x) * -n2x + (y2 - cy + s2y) * -n2y + (z2 - cz + s2z) * -n2z;
      if (dot1 > 0) {
        if (dot2 > 0) {
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          this.clipVertices1[index] = x2;
          this.clipVertices1[index + 1] = y2;
          this.clipVertices1[index + 2] = z2;
        } else {
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          t = dot1 / (dot1 - dot2);
          this.clipVertices1[index] = x1 + (x2 - x1) * t;
          this.clipVertices1[index + 1] = y1 + (y2 - y1) * t;
          this.clipVertices1[index + 2] = z1 + (z2 - z1) * t;
        }
      } else {
        if (dot2 > 0) {
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          t = dot1 / (dot1 - dot2);
          this.clipVertices1[index] = x1 + (x2 - x1) * t;
          this.clipVertices1[index + 1] = y1 + (y2 - y1) * t;
          this.clipVertices1[index + 2] = z1 + (z2 - z1) * t;
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          this.clipVertices1[index] = x2;
          this.clipVertices1[index + 1] = y2;
          this.clipVertices1[index + 2] = z2;
        }
      }
      x1 = x2;
      y1 = y2;
      z1 = z2;
      dot1 = dot2;
    }
    numClipVertices = numAddedClipVertices;
    if (swap) {
      var tb = b1;
      b1 = b2;
      b2 = tb;
    }
    if (numClipVertices == 0) return;
    var flipped = b1 != shape1;
    if (numClipVertices > 4) {
      x1 = (q1x + q2x + q3x + q4x) * 0.25;
      y1 = (q1y + q2y + q3y + q4y) * 0.25;
      z1 = (q1z + q2z + q3z + q4z) * 0.25;
      n1x = q1x - x1;
      n1y = q1y - y1;
      n1z = q1z - z1;
      n2x = q2x - x1;
      n2y = q2y - y1;
      n2z = q2z - z1;
      var index1 = 0;
      var index2 = 0;
      var index3 = 0;
      var index4 = 0;
      var maxDot = -this.INF;
      minDot = this.INF;
      for (i = 0; i < numClipVertices; i++) {
        this.used[i] = false;
        index = i * 3;
        x1 = this.clipVertices1[index];
        y1 = this.clipVertices1[index + 1];
        z1 = this.clipVertices1[index + 2];
        dot = x1 * n1x + y1 * n1y + z1 * n1z;
        if (dot < minDot) {
          minDot = dot;
          index1 = i;
        }
        if (dot > maxDot) {
          maxDot = dot;
          index3 = i;
        }
      }
      this.used[index1] = true;
      this.used[index3] = true;
      maxDot = -this.INF;
      minDot = this.INF;
      for (i = 0; i < numClipVertices; i++) {
        if (this.used[i]) continue;
        index = i * 3;
        x1 = this.clipVertices1[index];
        y1 = this.clipVertices1[index + 1];
        z1 = this.clipVertices1[index + 2];
        dot = x1 * n2x + y1 * n2y + z1 * n2z;
        if (dot < minDot) {
          minDot = dot;
          index2 = i;
        }
        if (dot > maxDot) {
          maxDot = dot;
          index4 = i;
        }
      }
      index = index1 * 3;
      x1 = this.clipVertices1[index];
      y1 = this.clipVertices1[index + 1];
      z1 = this.clipVertices1[index + 2];
      dot = (x1 - cx) * nx + (y1 - cy) * ny + (z1 - cz) * nz;
      if (dot < 0) manifold.addPoint(x1, y1, z1, nx, ny, nz, dot, flipped);
      index = index2 * 3;
      x1 = this.clipVertices1[index];
      y1 = this.clipVertices1[index + 1];
      z1 = this.clipVertices1[index + 2];
      dot = (x1 - cx) * nx + (y1 - cy) * ny + (z1 - cz) * nz;
      if (dot < 0) manifold.addPoint(x1, y1, z1, nx, ny, nz, dot, flipped);
      index = index3 * 3;
      x1 = this.clipVertices1[index];
      y1 = this.clipVertices1[index + 1];
      z1 = this.clipVertices1[index + 2];
      dot = (x1 - cx) * nx + (y1 - cy) * ny + (z1 - cz) * nz;
      if (dot < 0) manifold.addPoint(x1, y1, z1, nx, ny, nz, dot, flipped);
      index = index4 * 3;
      x1 = this.clipVertices1[index];
      y1 = this.clipVertices1[index + 1];
      z1 = this.clipVertices1[index + 2];
      dot = (x1 - cx) * nx + (y1 - cy) * ny + (z1 - cz) * nz;
      if (dot < 0) manifold.addPoint(x1, y1, z1, nx, ny, nz, dot, flipped);
    } else {
      for (i = 0; i < numClipVertices; i++) {
        index = i * 3;
        x1 = this.clipVertices1[index];
        y1 = this.clipVertices1[index + 1];
        z1 = this.clipVertices1[index + 2];
        dot = (x1 - cx) * nx + (y1 - cy) * ny + (z1 - cz) * nz;
        if (dot < 0) manifold.addPoint(x1, y1, z1, nx, ny, nz, dot, flipped);
      }
    }
  }
});
function BoxCylinderCollisionDetector(flip) {
  CollisionDetector.call(this);
  this.flip = flip;
}
BoxCylinderCollisionDetector.prototype = Object.assign(Object.create(CollisionDetector.prototype), {
  constructor: BoxCylinderCollisionDetector,
  getSep: function (c1, c2, sep, pos, dep) {
    var t1x;
    var t1y;
    var t1z;
    var t2x;
    var t2y;
    var t2z;
    var sup = new Vec3();
    var len;
    var p1x;
    var p1y;
    var p1z;
    var p2x;
    var p2y;
    var p2z;
    var v01x = c1.position.x;
    var v01y = c1.position.y;
    var v01z = c1.position.z;
    var v02x = c2.position.x;
    var v02y = c2.position.y;
    var v02z = c2.position.z;
    var v0x = v02x - v01x;
    var v0y = v02y - v01y;
    var v0z = v02z - v01z;
    if (v0x * v0x + v0y * v0y + v0z * v0z == 0) v0y = 0.001;
    var nx = -v0x;
    var ny = -v0y;
    var nz = -v0z;
    this.supportPointB(c1, -nx, -ny, -nz, sup);
    var v11x = sup.x;
    var v11y = sup.y;
    var v11z = sup.z;
    this.supportPointC(c2, nx, ny, nz, sup);
    var v12x = sup.x;
    var v12y = sup.y;
    var v12z = sup.z;
    var v1x = v12x - v11x;
    var v1y = v12y - v11y;
    var v1z = v12z - v11z;
    if (v1x * nx + v1y * ny + v1z * nz <= 0) {
      return false;
    }
    nx = v1y * v0z - v1z * v0y;
    ny = v1z * v0x - v1x * v0z;
    nz = v1x * v0y - v1y * v0x;
    if (nx * nx + ny * ny + nz * nz == 0) {
      sep.set(v1x - v0x, v1y - v0y, v1z - v0z).normalize();
      pos.set((v11x + v12x) * 0.5, (v11y + v12y) * 0.5, (v11z + v12z) * 0.5);
      return true;
    }
    this.supportPointB(c1, -nx, -ny, -nz, sup);
    var v21x = sup.x;
    var v21y = sup.y;
    var v21z = sup.z;
    this.supportPointC(c2, nx, ny, nz, sup);
    var v22x = sup.x;
    var v22y = sup.y;
    var v22z = sup.z;
    var v2x = v22x - v21x;
    var v2y = v22y - v21y;
    var v2z = v22z - v21z;
    if (v2x * nx + v2y * ny + v2z * nz <= 0) {
      return false;
    }
    t1x = v1x - v0x;
    t1y = v1y - v0y;
    t1z = v1z - v0z;
    t2x = v2x - v0x;
    t2y = v2y - v0y;
    t2z = v2z - v0z;
    nx = t1y * t2z - t1z * t2y;
    ny = t1z * t2x - t1x * t2z;
    nz = t1x * t2y - t1y * t2x;
    if (nx * v0x + ny * v0y + nz * v0z > 0) {
      t1x = v1x;
      t1y = v1y;
      t1z = v1z;
      v1x = v2x;
      v1y = v2y;
      v1z = v2z;
      v2x = t1x;
      v2y = t1y;
      v2z = t1z;
      t1x = v11x;
      t1y = v11y;
      t1z = v11z;
      v11x = v21x;
      v11y = v21y;
      v11z = v21z;
      v21x = t1x;
      v21y = t1y;
      v21z = t1z;
      t1x = v12x;
      t1y = v12y;
      t1z = v12z;
      v12x = v22x;
      v12y = v22y;
      v12z = v22z;
      v22x = t1x;
      v22y = t1y;
      v22z = t1z;
      nx = -nx;
      ny = -ny;
      nz = -nz;
    }
    var iterations = 0;
    while (true) {
      if (++iterations > 100) {
        return false;
      }
      this.supportPointB(c1, -nx, -ny, -nz, sup);
      var v31x = sup.x;
      var v31y = sup.y;
      var v31z = sup.z;
      this.supportPointC(c2, nx, ny, nz, sup);
      var v32x = sup.x;
      var v32y = sup.y;
      var v32z = sup.z;
      var v3x = v32x - v31x;
      var v3y = v32y - v31y;
      var v3z = v32z - v31z;
      if (v3x * nx + v3y * ny + v3z * nz <= 0) {
        return false;
      }
      if ((v1y * v3z - v1z * v3y) * v0x + (v1z * v3x - v1x * v3z) * v0y + (v1x * v3y - v1y * v3x) * v0z < 0) {
        v2x = v3x;
        v2y = v3y;
        v2z = v3z;
        v21x = v31x;
        v21y = v31y;
        v21z = v31z;
        v22x = v32x;
        v22y = v32y;
        v22z = v32z;
        t1x = v1x - v0x;
        t1y = v1y - v0y;
        t1z = v1z - v0z;
        t2x = v3x - v0x;
        t2y = v3y - v0y;
        t2z = v3z - v0z;
        nx = t1y * t2z - t1z * t2y;
        ny = t1z * t2x - t1x * t2z;
        nz = t1x * t2y - t1y * t2x;
        continue;
      }
      if ((v3y * v2z - v3z * v2y) * v0x + (v3z * v2x - v3x * v2z) * v0y + (v3x * v2y - v3y * v2x) * v0z < 0) {
        v1x = v3x;
        v1y = v3y;
        v1z = v3z;
        v11x = v31x;
        v11y = v31y;
        v11z = v31z;
        v12x = v32x;
        v12y = v32y;
        v12z = v32z;
        t1x = v3x - v0x;
        t1y = v3y - v0y;
        t1z = v3z - v0z;
        t2x = v2x - v0x;
        t2y = v2y - v0y;
        t2z = v2z - v0z;
        nx = t1y * t2z - t1z * t2y;
        ny = t1z * t2x - t1x * t2z;
        nz = t1x * t2y - t1y * t2x;
        continue;
      }
      var hit = false;
      while (true) {
        t1x = v2x - v1x;
        t1y = v2y - v1y;
        t1z = v2z - v1z;
        t2x = v3x - v1x;
        t2y = v3y - v1y;
        t2z = v3z - v1z;
        nx = t1y * t2z - t1z * t2y;
        ny = t1z * t2x - t1x * t2z;
        nz = t1x * t2y - t1y * t2x;
        len = 1 / _Math.sqrt(nx * nx + ny * ny + nz * nz);
        nx *= len;
        ny *= len;
        nz *= len;
        if (nx * v1x + ny * v1y + nz * v1z >= 0 && !hit) {
          var b0 = (v1y * v2z - v1z * v2y) * v3x + (v1z * v2x - v1x * v2z) * v3y + (v1x * v2y - v1y * v2x) * v3z;
          var b1 = (v3y * v2z - v3z * v2y) * v0x + (v3z * v2x - v3x * v2z) * v0y + (v3x * v2y - v3y * v2x) * v0z;
          var b2 = (v0y * v1z - v0z * v1y) * v3x + (v0z * v1x - v0x * v1z) * v3y + (v0x * v1y - v0y * v1x) * v3z;
          var b3 = (v2y * v1z - v2z * v1y) * v0x + (v2z * v1x - v2x * v1z) * v0y + (v2x * v1y - v2y * v1x) * v0z;
          var sum = b0 + b1 + b2 + b3;
          if (sum <= 0) {
            b0 = 0;
            b1 = (v2y * v3z - v2z * v3y) * nx + (v2z * v3x - v2x * v3z) * ny + (v2x * v3y - v2y * v3x) * nz;
            b2 = (v3y * v2z - v3z * v2y) * nx + (v3z * v2x - v3x * v2z) * ny + (v3x * v2y - v3y * v2x) * nz;
            b3 = (v1y * v2z - v1z * v2y) * nx + (v1z * v2x - v1x * v2z) * ny + (v1x * v2y - v1y * v2x) * nz;
            sum = b1 + b2 + b3;
          }
          var inv = 1 / sum;
          p1x = (v01x * b0 + v11x * b1 + v21x * b2 + v31x * b3) * inv;
          p1y = (v01y * b0 + v11y * b1 + v21y * b2 + v31y * b3) * inv;
          p1z = (v01z * b0 + v11z * b1 + v21z * b2 + v31z * b3) * inv;
          p2x = (v02x * b0 + v12x * b1 + v22x * b2 + v32x * b3) * inv;
          p2y = (v02y * b0 + v12y * b1 + v22y * b2 + v32y * b3) * inv;
          p2z = (v02z * b0 + v12z * b1 + v22z * b2 + v32z * b3) * inv;
          hit = true;
        }
        this.supportPointB(c1, -nx, -ny, -nz, sup);
        var v41x = sup.x;
        var v41y = sup.y;
        var v41z = sup.z;
        this.supportPointC(c2, nx, ny, nz, sup);
        var v42x = sup.x;
        var v42y = sup.y;
        var v42z = sup.z;
        var v4x = v42x - v41x;
        var v4y = v42y - v41y;
        var v4z = v42z - v41z;
        var separation = -(v4x * nx + v4y * ny + v4z * nz);
        if ((v4x - v3x) * nx + (v4y - v3y) * ny + (v4z - v3z) * nz <= 0.01 || separation >= 0) {
          if (hit) {
            sep.set(-nx, -ny, -nz);
            pos.set((p1x + p2x) * 0.5, (p1y + p2y) * 0.5, (p1z + p2z) * 0.5);
            dep.x = separation;
            return true;
          }
          return false;
        }
        if ((v4y * v1z - v4z * v1y) * v0x + (v4z * v1x - v4x * v1z) * v0y + (v4x * v1y - v4y * v1x) * v0z < 0) {
          if ((v4y * v2z - v4z * v2y) * v0x + (v4z * v2x - v4x * v2z) * v0y + (v4x * v2y - v4y * v2x) * v0z < 0) {
            v1x = v4x;
            v1y = v4y;
            v1z = v4z;
            v11x = v41x;
            v11y = v41y;
            v11z = v41z;
            v12x = v42x;
            v12y = v42y;
            v12z = v42z;
          } else {
            v3x = v4x;
            v3y = v4y;
            v3z = v4z;
            v31x = v41x;
            v31y = v41y;
            v31z = v41z;
            v32x = v42x;
            v32y = v42y;
            v32z = v42z;
          }
        } else {
          if ((v4y * v3z - v4z * v3y) * v0x + (v4z * v3x - v4x * v3z) * v0y + (v4x * v3y - v4y * v3x) * v0z < 0) {
            v2x = v4x;
            v2y = v4y;
            v2z = v4z;
            v21x = v41x;
            v21y = v41y;
            v21z = v41z;
            v22x = v42x;
            v22y = v42y;
            v22z = v42z;
          } else {
            v1x = v4x;
            v1y = v4y;
            v1z = v4z;
            v11x = v41x;
            v11y = v41y;
            v11z = v41z;
            v12x = v42x;
            v12y = v42y;
            v12z = v42z;
          }
        }
      }
    }
  },
  supportPointB: function (c, dx, dy, dz, out) {
    var rot = c.rotation.elements;
    var ldx = rot[0] * dx + rot[3] * dy + rot[6] * dz;
    var ldy = rot[1] * dx + rot[4] * dy + rot[7] * dz;
    var ldz = rot[2] * dx + rot[5] * dy + rot[8] * dz;
    var w = c.halfWidth;
    var h = c.halfHeight;
    var d = c.halfDepth;
    var ox;
    var oy;
    var oz;
    if (ldx < 0) ox = -w;else ox = w;
    if (ldy < 0) oy = -h;else oy = h;
    if (ldz < 0) oz = -d;else oz = d;
    ldx = rot[0] * ox + rot[1] * oy + rot[2] * oz + c.position.x;
    ldy = rot[3] * ox + rot[4] * oy + rot[5] * oz + c.position.y;
    ldz = rot[6] * ox + rot[7] * oy + rot[8] * oz + c.position.z;
    out.set(ldx, ldy, ldz);
  },
  supportPointC: function (c, dx, dy, dz, out) {
    var rot = c.rotation.elements;
    var ldx = rot[0] * dx + rot[3] * dy + rot[6] * dz;
    var ldy = rot[1] * dx + rot[4] * dy + rot[7] * dz;
    var ldz = rot[2] * dx + rot[5] * dy + rot[8] * dz;
    var radx = ldx;
    var radz = ldz;
    var len = radx * radx + radz * radz;
    var rad = c.radius;
    var hh = c.halfHeight;
    var ox;
    var oy;
    var oz;
    if (len == 0) {
      if (ldy < 0) {
        ox = rad;
        oy = -hh;
        oz = 0;
      } else {
        ox = rad;
        oy = hh;
        oz = 0;
      }
    } else {
      len = c.radius / _Math.sqrt(len);
      if (ldy < 0) {
        ox = radx * len;
        oy = -hh;
        oz = radz * len;
      } else {
        ox = radx * len;
        oy = hh;
        oz = radz * len;
      }
    }
    ldx = rot[0] * ox + rot[1] * oy + rot[2] * oz + c.position.x;
    ldy = rot[3] * ox + rot[4] * oy + rot[5] * oz + c.position.y;
    ldz = rot[6] * ox + rot[7] * oy + rot[8] * oz + c.position.z;
    out.set(ldx, ldy, ldz);
  },
  detectCollision: function (shape1, shape2, manifold) {
    var b;
    var c;
    if (this.flip) {
      b = shape2;
      c = shape1;
    } else {
      b = shape1;
      c = shape2;
    }
    var sep = new Vec3();
    var pos = new Vec3();
    var dep = new Vec3();
    if (!this.getSep(b, c, sep, pos, dep)) return;
    var pbx = b.position.x;
    var pby = b.position.y;
    var pbz = b.position.z;
    var pcx = c.position.x;
    var pcy = c.position.y;
    var pcz = c.position.z;
    var bw = b.halfWidth;
    var bh = b.halfHeight;
    var bd = b.halfDepth;
    var ch = c.halfHeight;
    var r = c.radius;
    var D = b.dimentions;
    var nwx = D[0];
    var nwy = D[1];
    var nwz = D[2];
    var nhx = D[3];
    var nhy = D[4];
    var nhz = D[5];
    var ndx = D[6];
    var ndy = D[7];
    var ndz = D[8];
    var dwx = D[9];
    var dwy = D[10];
    var dwz = D[11];
    var dhx = D[12];
    var dhy = D[13];
    var dhz = D[14];
    var ddx = D[15];
    var ddy = D[16];
    var ddz = D[17];
    var ncx = c.normalDirection.x;
    var ncy = c.normalDirection.y;
    var ncz = c.normalDirection.z;
    var dcx = c.halfDirection.x;
    var dcy = c.halfDirection.y;
    var dcz = c.halfDirection.z;
    var nx = sep.x;
    var ny = sep.y;
    var nz = sep.z;
    var dotw = nx * nwx + ny * nwy + nz * nwz;
    var doth = nx * nhx + ny * nhy + nz * nhz;
    var dotd = nx * ndx + ny * ndy + nz * ndz;
    var dotc = nx * ncx + ny * ncy + nz * ncz;
    var right1 = dotw > 0;
    var right2 = doth > 0;
    var right3 = dotd > 0;
    var right4 = dotc > 0;
    if (!right1) dotw = -dotw;
    if (!right2) doth = -doth;
    if (!right3) dotd = -dotd;
    if (!right4) dotc = -dotc;
    var state = 0;
    if (dotc > 0.999) {
      if (dotw > 0.999) {
        if (dotw > dotc) state = 1;else state = 4;
      } else if (doth > 0.999) {
        if (doth > dotc) state = 2;else state = 4;
      } else if (dotd > 0.999) {
        if (dotd > dotc) state = 3;else state = 4;
      } else state = 4;
    } else {
      if (dotw > 0.999) state = 1;else if (doth > 0.999) state = 2;else if (dotd > 0.999) state = 3;
    }
    var cbx;
    var cby;
    var cbz;
    var ccx;
    var ccy;
    var ccz;
    var r00;
    var r01;
    var r02;
    var r10;
    var r11;
    var r12;
    var r20;
    var r21;
    var r22;
    var px;
    var py;
    var pz;
    var pd;
    var dot;
    var len;
    var tx;
    var ty;
    var tz;
    var td;
    var dx;
    var dy;
    var dz;
    var d1x;
    var d1y;
    var d1z;
    var d2x;
    var d2y;
    var d2z;
    var sx;
    var sy;
    var sz;
    var sd;
    var ex;
    var ey;
    var ez;
    var ed;
    var dot1;
    var dot2;
    var t1;
    var dir1x;
    var dir1y;
    var dir1z;
    var dir2x;
    var dir2y;
    var dir2z;
    var dir1l;
    var dir2l;
    if (state == 0) {
      manifold.addPoint(pos.x, pos.y, pos.z, nx, ny, nz, dep.x, this.flip);
    } else if (state == 4) {
      if (right4) {
        ccx = pcx - dcx;
        ccy = pcy - dcy;
        ccz = pcz - dcz;
        nx = -ncx;
        ny = -ncy;
        nz = -ncz;
      } else {
        ccx = pcx + dcx;
        ccy = pcy + dcy;
        ccz = pcz + dcz;
        nx = ncx;
        ny = ncy;
        nz = ncz;
      }
      var v1x;
      var v1y;
      var v1z;
      var v2x;
      var v2y;
      var v2z;
      var v3x;
      var v3y;
      var v3z;
      var v4x;
      var v4y;
      var v4z;
      dot = 1;
      state = 0;
      dot1 = nwx * nx + nwy * ny + nwz * nz;
      if (dot1 < dot) {
        dot = dot1;
        state = 0;
      }
      if (-dot1 < dot) {
        dot = -dot1;
        state = 1;
      }
      dot1 = nhx * nx + nhy * ny + nhz * nz;
      if (dot1 < dot) {
        dot = dot1;
        state = 2;
      }
      if (-dot1 < dot) {
        dot = -dot1;
        state = 3;
      }
      dot1 = ndx * nx + ndy * ny + ndz * nz;
      if (dot1 < dot) {
        dot = dot1;
        state = 4;
      }
      if (-dot1 < dot) {
        dot = -dot1;
        state = 5;
      }
      var v = b.elements;
      switch (state) {
        case 0:
          v1x = v[0];
          v1y = v[1];
          v1z = v[2];
          v2x = v[6];
          v2y = v[7];
          v2z = v[8];
          v3x = v[9];
          v3y = v[10];
          v3z = v[11];
          v4x = v[3];
          v4y = v[4];
          v4z = v[5];
          break;
        case 1:
          v1x = v[15];
          v1y = v[16];
          v1z = v[17];
          v2x = v[21];
          v2y = v[22];
          v2z = v[23];
          v3x = v[18];
          v3y = v[19];
          v3z = v[20];
          v4x = v[12];
          v4y = v[13];
          v4z = v[14];
          break;
        case 2:
          v1x = v[12];
          v1y = v[13];
          v1z = v[14];
          v2x = v[0];
          v2y = v[1];
          v2z = v[2];
          v3x = v[3];
          v3y = v[4];
          v3z = v[5];
          v4x = v[15];
          v4y = v[16];
          v4z = v[17];
          break;
        case 3:
          v1x = v[21];
          v1y = v[22];
          v1z = v[23];
          v2x = v[9];
          v2y = v[10];
          v2z = v[11];
          v3x = v[6];
          v3y = v[7];
          v3z = v[8];
          v4x = v[18];
          v4y = v[19];
          v4z = v[20];
          break;
        case 4:
          v1x = v[12];
          v1y = v[13];
          v1z = v[14];
          v2x = v[18];
          v2y = v[19];
          v2z = v[20];
          v3x = v[6];
          v3y = v[7];
          v3z = v[8];
          v4x = v[0];
          v4y = v[1];
          v4z = v[2];
          break;
        case 5:
          v1x = v[3];
          v1y = v[4];
          v1z = v[5];
          v2x = v[9];
          v2y = v[10];
          v2z = v[11];
          v3x = v[21];
          v3y = v[22];
          v3z = v[23];
          v4x = v[15];
          v4y = v[16];
          v4z = v[17];
          break;
      }
      pd = nx * (v1x - ccx) + ny * (v1y - ccy) + nz * (v1z - ccz);
      if (pd <= 0) manifold.addPoint(v1x, v1y, v1z, -nx, -ny, -nz, pd, this.flip);
      pd = nx * (v2x - ccx) + ny * (v2y - ccy) + nz * (v2z - ccz);
      if (pd <= 0) manifold.addPoint(v2x, v2y, v2z, -nx, -ny, -nz, pd, this.flip);
      pd = nx * (v3x - ccx) + ny * (v3y - ccy) + nz * (v3z - ccz);
      if (pd <= 0) manifold.addPoint(v3x, v3y, v3z, -nx, -ny, -nz, pd, this.flip);
      pd = nx * (v4x - ccx) + ny * (v4y - ccy) + nz * (v4z - ccz);
      if (pd <= 0) manifold.addPoint(v4x, v4y, v4z, -nx, -ny, -nz, pd, this.flip);
    } else {
      switch (state) {
        case 1:
          if (right1) {
            cbx = pbx + dwx;
            cby = pby + dwy;
            cbz = pbz + dwz;
            nx = nwx;
            ny = nwy;
            nz = nwz;
          } else {
            cbx = pbx - dwx;
            cby = pby - dwy;
            cbz = pbz - dwz;
            nx = -nwx;
            ny = -nwy;
            nz = -nwz;
          }
          dir1x = nhx;
          dir1y = nhy;
          dir1z = nhz;
          dir1l = bh;
          dir2x = ndx;
          dir2y = ndy;
          dir2z = ndz;
          dir2l = bd;
          break;
        case 2:
          if (right2) {
            cbx = pbx + dhx;
            cby = pby + dhy;
            cbz = pbz + dhz;
            nx = nhx;
            ny = nhy;
            nz = nhz;
          } else {
            cbx = pbx - dhx;
            cby = pby - dhy;
            cbz = pbz - dhz;
            nx = -nhx;
            ny = -nhy;
            nz = -nhz;
          }
          dir1x = nwx;
          dir1y = nwy;
          dir1z = nwz;
          dir1l = bw;
          dir2x = ndx;
          dir2y = ndy;
          dir2z = ndz;
          dir2l = bd;
          break;
        case 3:
          if (right3) {
            cbx = pbx + ddx;
            cby = pby + ddy;
            cbz = pbz + ddz;
            nx = ndx;
            ny = ndy;
            nz = ndz;
          } else {
            cbx = pbx - ddx;
            cby = pby - ddy;
            cbz = pbz - ddz;
            nx = -ndx;
            ny = -ndy;
            nz = -ndz;
          }
          dir1x = nwx;
          dir1y = nwy;
          dir1z = nwz;
          dir1l = bw;
          dir2x = nhx;
          dir2y = nhy;
          dir2z = nhz;
          dir2l = bh;
          break;
      }
      dot = nx * ncx + ny * ncy + nz * ncz;
      if (dot < 0) len = ch;else len = -ch;
      ccx = pcx + len * ncx;
      ccy = pcy + len * ncy;
      ccz = pcz + len * ncz;
      if (dotc >= 0.999999) {
        tx = -ny;
        ty = nz;
        tz = nx;
      } else {
        tx = nx;
        ty = ny;
        tz = nz;
      }
      len = tx * ncx + ty * ncy + tz * ncz;
      dx = len * ncx - tx;
      dy = len * ncy - ty;
      dz = len * ncz - tz;
      len = _Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (len == 0) return;
      len = r / len;
      dx *= len;
      dy *= len;
      dz *= len;
      tx = ccx + dx;
      ty = ccy + dy;
      tz = ccz + dz;
      if (dot < -0.96 || dot > 0.96) {
        r00 = ncx * ncx * 1.5 - 0.5;
        r01 = ncx * ncy * 1.5 - ncz * 0.866025403;
        r02 = ncx * ncz * 1.5 + ncy * 0.866025403;
        r10 = ncy * ncx * 1.5 + ncz * 0.866025403;
        r11 = ncy * ncy * 1.5 - 0.5;
        r12 = ncy * ncz * 1.5 - ncx * 0.866025403;
        r20 = ncz * ncx * 1.5 - ncy * 0.866025403;
        r21 = ncz * ncy * 1.5 + ncx * 0.866025403;
        r22 = ncz * ncz * 1.5 - 0.5;
        px = tx;
        py = ty;
        pz = tz;
        pd = nx * (px - cbx) + ny * (py - cby) + nz * (pz - cbz);
        tx = px - pd * nx - cbx;
        ty = py - pd * ny - cby;
        tz = pz - pd * nz - cbz;
        sd = dir1x * tx + dir1y * ty + dir1z * tz;
        ed = dir2x * tx + dir2y * ty + dir2z * tz;
        if (sd < -dir1l) sd = -dir1l;else if (sd > dir1l) sd = dir1l;
        if (ed < -dir2l) ed = -dir2l;else if (ed > dir2l) ed = dir2l;
        tx = sd * dir1x + ed * dir2x;
        ty = sd * dir1y + ed * dir2y;
        tz = sd * dir1z + ed * dir2z;
        px = cbx + tx;
        py = cby + ty;
        pz = cbz + tz;
        manifold.addPoint(px, py, pz, nx, ny, nz, pd, this.flip);
        px = dx * r00 + dy * r01 + dz * r02;
        py = dx * r10 + dy * r11 + dz * r12;
        pz = dx * r20 + dy * r21 + dz * r22;
        px = (dx = px) + ccx;
        py = (dy = py) + ccy;
        pz = (dz = pz) + ccz;
        pd = nx * (px - cbx) + ny * (py - cby) + nz * (pz - cbz);
        if (pd <= 0) {
          tx = px - pd * nx - cbx;
          ty = py - pd * ny - cby;
          tz = pz - pd * nz - cbz;
          sd = dir1x * tx + dir1y * ty + dir1z * tz;
          ed = dir2x * tx + dir2y * ty + dir2z * tz;
          if (sd < -dir1l) sd = -dir1l;else if (sd > dir1l) sd = dir1l;
          if (ed < -dir2l) ed = -dir2l;else if (ed > dir2l) ed = dir2l;
          tx = sd * dir1x + ed * dir2x;
          ty = sd * dir1y + ed * dir2y;
          tz = sd * dir1z + ed * dir2z;
          px = cbx + tx;
          py = cby + ty;
          pz = cbz + tz;
          manifold.addPoint(px, py, pz, nx, ny, nz, pd, this.flip);
        }
        px = dx * r00 + dy * r01 + dz * r02;
        py = dx * r10 + dy * r11 + dz * r12;
        pz = dx * r20 + dy * r21 + dz * r22;
        px = (dx = px) + ccx;
        py = (dy = py) + ccy;
        pz = (dz = pz) + ccz;
        pd = nx * (px - cbx) + ny * (py - cby) + nz * (pz - cbz);
        if (pd <= 0) {
          tx = px - pd * nx - cbx;
          ty = py - pd * ny - cby;
          tz = pz - pd * nz - cbz;
          sd = dir1x * tx + dir1y * ty + dir1z * tz;
          ed = dir2x * tx + dir2y * ty + dir2z * tz;
          if (sd < -dir1l) sd = -dir1l;else if (sd > dir1l) sd = dir1l;
          if (ed < -dir2l) ed = -dir2l;else if (ed > dir2l) ed = dir2l;
          tx = sd * dir1x + ed * dir2x;
          ty = sd * dir1y + ed * dir2y;
          tz = sd * dir1z + ed * dir2z;
          px = cbx + tx;
          py = cby + ty;
          pz = cbz + tz;
          manifold.addPoint(px, py, pz, nx, ny, nz, pd, this.flip);
        }
      } else {
        sx = tx;
        sy = ty;
        sz = tz;
        sd = nx * (sx - cbx) + ny * (sy - cby) + nz * (sz - cbz);
        sx -= sd * nx;
        sy -= sd * ny;
        sz -= sd * nz;
        if (dot > 0) {
          ex = tx + dcx * 2;
          ey = ty + dcy * 2;
          ez = tz + dcz * 2;
        } else {
          ex = tx - dcx * 2;
          ey = ty - dcy * 2;
          ez = tz - dcz * 2;
        }
        ed = nx * (ex - cbx) + ny * (ey - cby) + nz * (ez - cbz);
        ex -= ed * nx;
        ey -= ed * ny;
        ez -= ed * nz;
        d1x = sx - cbx;
        d1y = sy - cby;
        d1z = sz - cbz;
        d2x = ex - cbx;
        d2y = ey - cby;
        d2z = ez - cbz;
        tx = ex - sx;
        ty = ey - sy;
        tz = ez - sz;
        td = ed - sd;
        dotw = d1x * dir1x + d1y * dir1y + d1z * dir1z;
        doth = d2x * dir1x + d2y * dir1y + d2z * dir1z;
        dot1 = dotw - dir1l;
        dot2 = doth - dir1l;
        if (dot1 > 0) {
          if (dot2 > 0) return;
          t1 = dot1 / (dot1 - dot2);
          sx = sx + tx * t1;
          sy = sy + ty * t1;
          sz = sz + tz * t1;
          sd = sd + td * t1;
          d1x = sx - cbx;
          d1y = sy - cby;
          d1z = sz - cbz;
          dotw = d1x * dir1x + d1y * dir1y + d1z * dir1z;
          tx = ex - sx;
          ty = ey - sy;
          tz = ez - sz;
          td = ed - sd;
        } else if (dot2 > 0) {
          t1 = dot1 / (dot1 - dot2);
          ex = sx + tx * t1;
          ey = sy + ty * t1;
          ez = sz + tz * t1;
          ed = sd + td * t1;
          d2x = ex - cbx;
          d2y = ey - cby;
          d2z = ez - cbz;
          doth = d2x * dir1x + d2y * dir1y + d2z * dir1z;
          tx = ex - sx;
          ty = ey - sy;
          tz = ez - sz;
          td = ed - sd;
        }
        dot1 = dotw + dir1l;
        dot2 = doth + dir1l;
        if (dot1 < 0) {
          if (dot2 < 0) return;
          t1 = dot1 / (dot1 - dot2);
          sx = sx + tx * t1;
          sy = sy + ty * t1;
          sz = sz + tz * t1;
          sd = sd + td * t1;
          d1x = sx - cbx;
          d1y = sy - cby;
          d1z = sz - cbz;
          tx = ex - sx;
          ty = ey - sy;
          tz = ez - sz;
          td = ed - sd;
        } else if (dot2 < 0) {
          t1 = dot1 / (dot1 - dot2);
          ex = sx + tx * t1;
          ey = sy + ty * t1;
          ez = sz + tz * t1;
          ed = sd + td * t1;
          d2x = ex - cbx;
          d2y = ey - cby;
          d2z = ez - cbz;
          tx = ex - sx;
          ty = ey - sy;
          tz = ez - sz;
          td = ed - sd;
        }
        dotw = d1x * dir2x + d1y * dir2y + d1z * dir2z;
        doth = d2x * dir2x + d2y * dir2y + d2z * dir2z;
        dot1 = dotw - dir2l;
        dot2 = doth - dir2l;
        if (dot1 > 0) {
          if (dot2 > 0) return;
          t1 = dot1 / (dot1 - dot2);
          sx = sx + tx * t1;
          sy = sy + ty * t1;
          sz = sz + tz * t1;
          sd = sd + td * t1;
          d1x = sx - cbx;
          d1y = sy - cby;
          d1z = sz - cbz;
          dotw = d1x * dir2x + d1y * dir2y + d1z * dir2z;
          tx = ex - sx;
          ty = ey - sy;
          tz = ez - sz;
          td = ed - sd;
        } else if (dot2 > 0) {
          t1 = dot1 / (dot1 - dot2);
          ex = sx + tx * t1;
          ey = sy + ty * t1;
          ez = sz + tz * t1;
          ed = sd + td * t1;
          d2x = ex - cbx;
          d2y = ey - cby;
          d2z = ez - cbz;
          doth = d2x * dir2x + d2y * dir2y + d2z * dir2z;
          tx = ex - sx;
          ty = ey - sy;
          tz = ez - sz;
          td = ed - sd;
        }
        dot1 = dotw + dir2l;
        dot2 = doth + dir2l;
        if (dot1 < 0) {
          if (dot2 < 0) return;
          t1 = dot1 / (dot1 - dot2);
          sx = sx + tx * t1;
          sy = sy + ty * t1;
          sz = sz + tz * t1;
          sd = sd + td * t1;
        } else if (dot2 < 0) {
          t1 = dot1 / (dot1 - dot2);
          ex = sx + tx * t1;
          ey = sy + ty * t1;
          ez = sz + tz * t1;
          ed = sd + td * t1;
        }
        if (sd < 0) {
          manifold.addPoint(sx, sy, sz, nx, ny, nz, sd, this.flip);
        }
        if (ed < 0) {
          manifold.addPoint(ex, ey, ez, nx, ny, nz, ed, this.flip);
        }
      }
    }
  }
});
function CylinderCylinderCollisionDetector() {
  CollisionDetector.call(this);
}
CylinderCylinderCollisionDetector.prototype = Object.assign(Object.create(CollisionDetector.prototype), {
  constructor: CylinderCylinderCollisionDetector,
  getSep: function (c1, c2, sep, pos, dep) {
    var t1x;
    var t1y;
    var t1z;
    var t2x;
    var t2y;
    var t2z;
    var sup = new Vec3();
    var len;
    var p1x;
    var p1y;
    var p1z;
    var p2x;
    var p2y;
    var p2z;
    var v01x = c1.position.x;
    var v01y = c1.position.y;
    var v01z = c1.position.z;
    var v02x = c2.position.x;
    var v02y = c2.position.y;
    var v02z = c2.position.z;
    var v0x = v02x - v01x;
    var v0y = v02y - v01y;
    var v0z = v02z - v01z;
    if (v0x * v0x + v0y * v0y + v0z * v0z == 0) v0y = 0.001;
    var nx = -v0x;
    var ny = -v0y;
    var nz = -v0z;
    this.supportPoint(c1, -nx, -ny, -nz, sup);
    var v11x = sup.x;
    var v11y = sup.y;
    var v11z = sup.z;
    this.supportPoint(c2, nx, ny, nz, sup);
    var v12x = sup.x;
    var v12y = sup.y;
    var v12z = sup.z;
    var v1x = v12x - v11x;
    var v1y = v12y - v11y;
    var v1z = v12z - v11z;
    if (v1x * nx + v1y * ny + v1z * nz <= 0) {
      return false;
    }
    nx = v1y * v0z - v1z * v0y;
    ny = v1z * v0x - v1x * v0z;
    nz = v1x * v0y - v1y * v0x;
    if (nx * nx + ny * ny + nz * nz == 0) {
      sep.set(v1x - v0x, v1y - v0y, v1z - v0z).normalize();
      pos.set((v11x + v12x) * 0.5, (v11y + v12y) * 0.5, (v11z + v12z) * 0.5);
      return true;
    }
    this.supportPoint(c1, -nx, -ny, -nz, sup);
    var v21x = sup.x;
    var v21y = sup.y;
    var v21z = sup.z;
    this.supportPoint(c2, nx, ny, nz, sup);
    var v22x = sup.x;
    var v22y = sup.y;
    var v22z = sup.z;
    var v2x = v22x - v21x;
    var v2y = v22y - v21y;
    var v2z = v22z - v21z;
    if (v2x * nx + v2y * ny + v2z * nz <= 0) {
      return false;
    }
    t1x = v1x - v0x;
    t1y = v1y - v0y;
    t1z = v1z - v0z;
    t2x = v2x - v0x;
    t2y = v2y - v0y;
    t2z = v2z - v0z;
    nx = t1y * t2z - t1z * t2y;
    ny = t1z * t2x - t1x * t2z;
    nz = t1x * t2y - t1y * t2x;
    if (nx * v0x + ny * v0y + nz * v0z > 0) {
      t1x = v1x;
      t1y = v1y;
      t1z = v1z;
      v1x = v2x;
      v1y = v2y;
      v1z = v2z;
      v2x = t1x;
      v2y = t1y;
      v2z = t1z;
      t1x = v11x;
      t1y = v11y;
      t1z = v11z;
      v11x = v21x;
      v11y = v21y;
      v11z = v21z;
      v21x = t1x;
      v21y = t1y;
      v21z = t1z;
      t1x = v12x;
      t1y = v12y;
      t1z = v12z;
      v12x = v22x;
      v12y = v22y;
      v12z = v22z;
      v22x = t1x;
      v22y = t1y;
      v22z = t1z;
      nx = -nx;
      ny = -ny;
      nz = -nz;
    }
    var iterations = 0;
    while (true) {
      if (++iterations > 100) {
        return false;
      }
      this.supportPoint(c1, -nx, -ny, -nz, sup);
      var v31x = sup.x;
      var v31y = sup.y;
      var v31z = sup.z;
      this.supportPoint(c2, nx, ny, nz, sup);
      var v32x = sup.x;
      var v32y = sup.y;
      var v32z = sup.z;
      var v3x = v32x - v31x;
      var v3y = v32y - v31y;
      var v3z = v32z - v31z;
      if (v3x * nx + v3y * ny + v3z * nz <= 0) {
        return false;
      }
      if ((v1y * v3z - v1z * v3y) * v0x + (v1z * v3x - v1x * v3z) * v0y + (v1x * v3y - v1y * v3x) * v0z < 0) {
        v2x = v3x;
        v2y = v3y;
        v2z = v3z;
        v21x = v31x;
        v21y = v31y;
        v21z = v31z;
        v22x = v32x;
        v22y = v32y;
        v22z = v32z;
        t1x = v1x - v0x;
        t1y = v1y - v0y;
        t1z = v1z - v0z;
        t2x = v3x - v0x;
        t2y = v3y - v0y;
        t2z = v3z - v0z;
        nx = t1y * t2z - t1z * t2y;
        ny = t1z * t2x - t1x * t2z;
        nz = t1x * t2y - t1y * t2x;
        continue;
      }
      if ((v3y * v2z - v3z * v2y) * v0x + (v3z * v2x - v3x * v2z) * v0y + (v3x * v2y - v3y * v2x) * v0z < 0) {
        v1x = v3x;
        v1y = v3y;
        v1z = v3z;
        v11x = v31x;
        v11y = v31y;
        v11z = v31z;
        v12x = v32x;
        v12y = v32y;
        v12z = v32z;
        t1x = v3x - v0x;
        t1y = v3y - v0y;
        t1z = v3z - v0z;
        t2x = v2x - v0x;
        t2y = v2y - v0y;
        t2z = v2z - v0z;
        nx = t1y * t2z - t1z * t2y;
        ny = t1z * t2x - t1x * t2z;
        nz = t1x * t2y - t1y * t2x;
        continue;
      }
      var hit = false;
      while (true) {
        t1x = v2x - v1x;
        t1y = v2y - v1y;
        t1z = v2z - v1z;
        t2x = v3x - v1x;
        t2y = v3y - v1y;
        t2z = v3z - v1z;
        nx = t1y * t2z - t1z * t2y;
        ny = t1z * t2x - t1x * t2z;
        nz = t1x * t2y - t1y * t2x;
        len = 1 / _Math.sqrt(nx * nx + ny * ny + nz * nz);
        nx *= len;
        ny *= len;
        nz *= len;
        if (nx * v1x + ny * v1y + nz * v1z >= 0 && !hit) {
          var b0 = (v1y * v2z - v1z * v2y) * v3x + (v1z * v2x - v1x * v2z) * v3y + (v1x * v2y - v1y * v2x) * v3z;
          var b1 = (v3y * v2z - v3z * v2y) * v0x + (v3z * v2x - v3x * v2z) * v0y + (v3x * v2y - v3y * v2x) * v0z;
          var b2 = (v0y * v1z - v0z * v1y) * v3x + (v0z * v1x - v0x * v1z) * v3y + (v0x * v1y - v0y * v1x) * v3z;
          var b3 = (v2y * v1z - v2z * v1y) * v0x + (v2z * v1x - v2x * v1z) * v0y + (v2x * v1y - v2y * v1x) * v0z;
          var sum = b0 + b1 + b2 + b3;
          if (sum <= 0) {
            b0 = 0;
            b1 = (v2y * v3z - v2z * v3y) * nx + (v2z * v3x - v2x * v3z) * ny + (v2x * v3y - v2y * v3x) * nz;
            b2 = (v3y * v2z - v3z * v2y) * nx + (v3z * v2x - v3x * v2z) * ny + (v3x * v2y - v3y * v2x) * nz;
            b3 = (v1y * v2z - v1z * v2y) * nx + (v1z * v2x - v1x * v2z) * ny + (v1x * v2y - v1y * v2x) * nz;
            sum = b1 + b2 + b3;
          }
          var inv = 1 / sum;
          p1x = (v01x * b0 + v11x * b1 + v21x * b2 + v31x * b3) * inv;
          p1y = (v01y * b0 + v11y * b1 + v21y * b2 + v31y * b3) * inv;
          p1z = (v01z * b0 + v11z * b1 + v21z * b2 + v31z * b3) * inv;
          p2x = (v02x * b0 + v12x * b1 + v22x * b2 + v32x * b3) * inv;
          p2y = (v02y * b0 + v12y * b1 + v22y * b2 + v32y * b3) * inv;
          p2z = (v02z * b0 + v12z * b1 + v22z * b2 + v32z * b3) * inv;
          hit = true;
        }
        this.supportPoint(c1, -nx, -ny, -nz, sup);
        var v41x = sup.x;
        var v41y = sup.y;
        var v41z = sup.z;
        this.supportPoint(c2, nx, ny, nz, sup);
        var v42x = sup.x;
        var v42y = sup.y;
        var v42z = sup.z;
        var v4x = v42x - v41x;
        var v4y = v42y - v41y;
        var v4z = v42z - v41z;
        var separation = -(v4x * nx + v4y * ny + v4z * nz);
        if ((v4x - v3x) * nx + (v4y - v3y) * ny + (v4z - v3z) * nz <= 0.01 || separation >= 0) {
          if (hit) {
            sep.set(-nx, -ny, -nz);
            pos.set((p1x + p2x) * 0.5, (p1y + p2y) * 0.5, (p1z + p2z) * 0.5);
            dep.x = separation;
            return true;
          }
          return false;
        }
        if ((v4y * v1z - v4z * v1y) * v0x + (v4z * v1x - v4x * v1z) * v0y + (v4x * v1y - v4y * v1x) * v0z < 0) {
          if ((v4y * v2z - v4z * v2y) * v0x + (v4z * v2x - v4x * v2z) * v0y + (v4x * v2y - v4y * v2x) * v0z < 0) {
            v1x = v4x;
            v1y = v4y;
            v1z = v4z;
            v11x = v41x;
            v11y = v41y;
            v11z = v41z;
            v12x = v42x;
            v12y = v42y;
            v12z = v42z;
          } else {
            v3x = v4x;
            v3y = v4y;
            v3z = v4z;
            v31x = v41x;
            v31y = v41y;
            v31z = v41z;
            v32x = v42x;
            v32y = v42y;
            v32z = v42z;
          }
        } else {
          if ((v4y * v3z - v4z * v3y) * v0x + (v4z * v3x - v4x * v3z) * v0y + (v4x * v3y - v4y * v3x) * v0z < 0) {
            v2x = v4x;
            v2y = v4y;
            v2z = v4z;
            v21x = v41x;
            v21y = v41y;
            v21z = v41z;
            v22x = v42x;
            v22y = v42y;
            v22z = v42z;
          } else {
            v1x = v4x;
            v1y = v4y;
            v1z = v4z;
            v11x = v41x;
            v11y = v41y;
            v11z = v41z;
            v12x = v42x;
            v12y = v42y;
            v12z = v42z;
          }
        }
      }
    }
  },
  supportPoint: function (c, dx, dy, dz, out) {
    var rot = c.rotation.elements;
    var ldx = rot[0] * dx + rot[3] * dy + rot[6] * dz;
    var ldy = rot[1] * dx + rot[4] * dy + rot[7] * dz;
    var ldz = rot[2] * dx + rot[5] * dy + rot[8] * dz;
    var radx = ldx;
    var radz = ldz;
    var len = radx * radx + radz * radz;
    var rad = c.radius;
    var hh = c.halfHeight;
    var ox;
    var oy;
    var oz;
    if (len == 0) {
      if (ldy < 0) {
        ox = rad;
        oy = -hh;
        oz = 0;
      } else {
        ox = rad;
        oy = hh;
        oz = 0;
      }
    } else {
      len = c.radius / _Math.sqrt(len);
      if (ldy < 0) {
        ox = radx * len;
        oy = -hh;
        oz = radz * len;
      } else {
        ox = radx * len;
        oy = hh;
        oz = radz * len;
      }
    }
    ldx = rot[0] * ox + rot[1] * oy + rot[2] * oz + c.position.x;
    ldy = rot[3] * ox + rot[4] * oy + rot[5] * oz + c.position.y;
    ldz = rot[6] * ox + rot[7] * oy + rot[8] * oz + c.position.z;
    out.set(ldx, ldy, ldz);
  },
  detectCollision: function (shape1, shape2, manifold) {
    var c1;
    var c2;
    if (shape1.id < shape2.id) {
      c1 = shape1;
      c2 = shape2;
    } else {
      c1 = shape2;
      c2 = shape1;
    }
    var p1 = c1.position;
    var p2 = c2.position;
    var p1x = p1.x;
    var p1y = p1.y;
    var p1z = p1.z;
    var p2x = p2.x;
    var p2y = p2.y;
    var p2z = p2.z;
    var h1 = c1.halfHeight;
    var h2 = c2.halfHeight;
    var n1 = c1.normalDirection;
    var n2 = c2.normalDirection;
    var d1 = c1.halfDirection;
    var d2 = c2.halfDirection;
    var r1 = c1.radius;
    var r2 = c2.radius;
    var n1x = n1.x;
    var n1y = n1.y;
    var n1z = n1.z;
    var n2x = n2.x;
    var n2y = n2.y;
    var n2z = n2.z;
    var d1x = d1.x;
    var d1y = d1.y;
    var d1z = d1.z;
    var d2x = d2.x;
    var d2y = d2.y;
    var d2z = d2.z;
    var dx = p1x - p2x;
    var dy = p1y - p2y;
    var dz = p1z - p2z;
    var len;
    var c1x;
    var c1y;
    var c1z;
    var c2x;
    var c2y;
    var c2z;
    var tx;
    var ty;
    var tz;
    var sx;
    var sy;
    var sz;
    var ex;
    var ey;
    var ez;
    var depth1;
    var depth2;
    var dot;
    var t1;
    var t2;
    var sep = new Vec3();
    var pos = new Vec3();
    var dep = new Vec3();
    if (!this.getSep(c1, c2, sep, pos, dep)) return;
    var dot1 = sep.x * n1x + sep.y * n1y + sep.z * n1z;
    var dot2 = sep.x * n2x + sep.y * n2y + sep.z * n2z;
    var right1 = dot1 > 0;
    var right2 = dot2 > 0;
    if (!right1) dot1 = -dot1;
    if (!right2) dot2 = -dot2;
    var state = 0;
    if (dot1 > 0.999 || dot2 > 0.999) {
      if (dot1 > dot2) state = 1;else state = 2;
    }
    var nx;
    var ny;
    var nz;
    var depth = dep.x;
    var r00;
    var r01;
    var r02;
    var r10;
    var r11;
    var r12;
    var r20;
    var r21;
    var r22;
    var px;
    var py;
    var pz;
    var pd;
    var a;
    var b;
    var e;
    var f;
    nx = sep.x;
    ny = sep.y;
    nz = sep.z;
    switch (state) {
      case 0:
        manifold.addPoint(pos.x, pos.y, pos.z, nx, ny, nz, depth, false);
        break;
      case 1:
        if (right1) {
          c1x = p1x + d1x;
          c1y = p1y + d1y;
          c1z = p1z + d1z;
          nx = n1x;
          ny = n1y;
          nz = n1z;
        } else {
          c1x = p1x - d1x;
          c1y = p1y - d1y;
          c1z = p1z - d1z;
          nx = -n1x;
          ny = -n1y;
          nz = -n1z;
        }
        dot = nx * n2x + ny * n2y + nz * n2z;
        if (dot < 0) len = h2;else len = -h2;
        c2x = p2x + len * n2x;
        c2y = p2y + len * n2y;
        c2z = p2z + len * n2z;
        if (dot2 >= 0.999999) {
          tx = -ny;
          ty = nz;
          tz = nx;
        } else {
          tx = nx;
          ty = ny;
          tz = nz;
        }
        len = tx * n2x + ty * n2y + tz * n2z;
        dx = len * n2x - tx;
        dy = len * n2y - ty;
        dz = len * n2z - tz;
        len = _Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (len == 0) break;
        len = r2 / len;
        dx *= len;
        dy *= len;
        dz *= len;
        tx = c2x + dx;
        ty = c2y + dy;
        tz = c2z + dz;
        if (dot < -0.96 || dot > 0.96) {
          r00 = n2x * n2x * 1.5 - 0.5;
          r01 = n2x * n2y * 1.5 - n2z * 0.866025403;
          r02 = n2x * n2z * 1.5 + n2y * 0.866025403;
          r10 = n2y * n2x * 1.5 + n2z * 0.866025403;
          r11 = n2y * n2y * 1.5 - 0.5;
          r12 = n2y * n2z * 1.5 - n2x * 0.866025403;
          r20 = n2z * n2x * 1.5 - n2y * 0.866025403;
          r21 = n2z * n2y * 1.5 + n2x * 0.866025403;
          r22 = n2z * n2z * 1.5 - 0.5;
          px = tx;
          py = ty;
          pz = tz;
          pd = nx * (px - c1x) + ny * (py - c1y) + nz * (pz - c1z);
          tx = px - pd * nx - c1x;
          ty = py - pd * ny - c1y;
          tz = pz - pd * nz - c1z;
          len = tx * tx + ty * ty + tz * tz;
          if (len > r1 * r1) {
            len = r1 / _Math.sqrt(len);
            tx *= len;
            ty *= len;
            tz *= len;
          }
          px = c1x + tx;
          py = c1y + ty;
          pz = c1z + tz;
          manifold.addPoint(px, py, pz, nx, ny, nz, pd, false);
          px = dx * r00 + dy * r01 + dz * r02;
          py = dx * r10 + dy * r11 + dz * r12;
          pz = dx * r20 + dy * r21 + dz * r22;
          px = (dx = px) + c2x;
          py = (dy = py) + c2y;
          pz = (dz = pz) + c2z;
          pd = nx * (px - c1x) + ny * (py - c1y) + nz * (pz - c1z);
          if (pd <= 0) {
            tx = px - pd * nx - c1x;
            ty = py - pd * ny - c1y;
            tz = pz - pd * nz - c1z;
            len = tx * tx + ty * ty + tz * tz;
            if (len > r1 * r1) {
              len = r1 / _Math.sqrt(len);
              tx *= len;
              ty *= len;
              tz *= len;
            }
            px = c1x + tx;
            py = c1y + ty;
            pz = c1z + tz;
            manifold.addPoint(px, py, pz, nx, ny, nz, pd, false);
          }
          px = dx * r00 + dy * r01 + dz * r02;
          py = dx * r10 + dy * r11 + dz * r12;
          pz = dx * r20 + dy * r21 + dz * r22;
          px = (dx = px) + c2x;
          py = (dy = py) + c2y;
          pz = (dz = pz) + c2z;
          pd = nx * (px - c1x) + ny * (py - c1y) + nz * (pz - c1z);
          if (pd <= 0) {
            tx = px - pd * nx - c1x;
            ty = py - pd * ny - c1y;
            tz = pz - pd * nz - c1z;
            len = tx * tx + ty * ty + tz * tz;
            if (len > r1 * r1) {
              len = r1 / _Math.sqrt(len);
              tx *= len;
              ty *= len;
              tz *= len;
            }
            px = c1x + tx;
            py = c1y + ty;
            pz = c1z + tz;
            manifold.addPoint(px, py, pz, nx, ny, nz, pd, false);
          }
        } else {
          sx = tx;
          sy = ty;
          sz = tz;
          depth1 = nx * (sx - c1x) + ny * (sy - c1y) + nz * (sz - c1z);
          sx -= depth1 * nx;
          sy -= depth1 * ny;
          sz -= depth1 * nz;
          if (dot > 0) {
            ex = tx + n2x * h2 * 2;
            ey = ty + n2y * h2 * 2;
            ez = tz + n2z * h2 * 2;
          } else {
            ex = tx - n2x * h2 * 2;
            ey = ty - n2y * h2 * 2;
            ez = tz - n2z * h2 * 2;
          }
          depth2 = nx * (ex - c1x) + ny * (ey - c1y) + nz * (ez - c1z);
          ex -= depth2 * nx;
          ey -= depth2 * ny;
          ez -= depth2 * nz;
          dx = c1x - sx;
          dy = c1y - sy;
          dz = c1z - sz;
          tx = ex - sx;
          ty = ey - sy;
          tz = ez - sz;
          a = dx * dx + dy * dy + dz * dz;
          b = dx * tx + dy * ty + dz * tz;
          e = tx * tx + ty * ty + tz * tz;
          f = b * b - e * (a - r1 * r1);
          if (f < 0) break;
          f = _Math.sqrt(f);
          t1 = (b + f) / e;
          t2 = (b - f) / e;
          if (t2 < t1) {
            len = t1;
            t1 = t2;
            t2 = len;
          }
          if (t2 > 1) t2 = 1;
          if (t1 < 0) t1 = 0;
          tx = sx + (ex - sx) * t1;
          ty = sy + (ey - sy) * t1;
          tz = sz + (ez - sz) * t1;
          ex = sx + (ex - sx) * t2;
          ey = sy + (ey - sy) * t2;
          ez = sz + (ez - sz) * t2;
          sx = tx;
          sy = ty;
          sz = tz;
          len = depth1 + (depth2 - depth1) * t1;
          depth2 = depth1 + (depth2 - depth1) * t2;
          depth1 = len;
          if (depth1 < 0) manifold.addPoint(sx, sy, sz, nx, ny, nz, pd, false);
          if (depth2 < 0) manifold.addPoint(ex, ey, ez, nx, ny, nz, pd, false);
        }
        break;
      case 2:
        if (right2) {
          c2x = p2x - d2x;
          c2y = p2y - d2y;
          c2z = p2z - d2z;
          nx = -n2x;
          ny = -n2y;
          nz = -n2z;
        } else {
          c2x = p2x + d2x;
          c2y = p2y + d2y;
          c2z = p2z + d2z;
          nx = n2x;
          ny = n2y;
          nz = n2z;
        }
        dot = nx * n1x + ny * n1y + nz * n1z;
        if (dot < 0) len = h1;else len = -h1;
        c1x = p1x + len * n1x;
        c1y = p1y + len * n1y;
        c1z = p1z + len * n1z;
        if (dot1 >= 0.999999) {
          tx = -ny;
          ty = nz;
          tz = nx;
        } else {
          tx = nx;
          ty = ny;
          tz = nz;
        }
        len = tx * n1x + ty * n1y + tz * n1z;
        dx = len * n1x - tx;
        dy = len * n1y - ty;
        dz = len * n1z - tz;
        len = _Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (len == 0) break;
        len = r1 / len;
        dx *= len;
        dy *= len;
        dz *= len;
        tx = c1x + dx;
        ty = c1y + dy;
        tz = c1z + dz;
        if (dot < -0.96 || dot > 0.96) {
          r00 = n1x * n1x * 1.5 - 0.5;
          r01 = n1x * n1y * 1.5 - n1z * 0.866025403;
          r02 = n1x * n1z * 1.5 + n1y * 0.866025403;
          r10 = n1y * n1x * 1.5 + n1z * 0.866025403;
          r11 = n1y * n1y * 1.5 - 0.5;
          r12 = n1y * n1z * 1.5 - n1x * 0.866025403;
          r20 = n1z * n1x * 1.5 - n1y * 0.866025403;
          r21 = n1z * n1y * 1.5 + n1x * 0.866025403;
          r22 = n1z * n1z * 1.5 - 0.5;
          px = tx;
          py = ty;
          pz = tz;
          pd = nx * (px - c2x) + ny * (py - c2y) + nz * (pz - c2z);
          tx = px - pd * nx - c2x;
          ty = py - pd * ny - c2y;
          tz = pz - pd * nz - c2z;
          len = tx * tx + ty * ty + tz * tz;
          if (len > r2 * r2) {
            len = r2 / _Math.sqrt(len);
            tx *= len;
            ty *= len;
            tz *= len;
          }
          px = c2x + tx;
          py = c2y + ty;
          pz = c2z + tz;
          manifold.addPoint(px, py, pz, -nx, -ny, -nz, pd, false);
          px = dx * r00 + dy * r01 + dz * r02;
          py = dx * r10 + dy * r11 + dz * r12;
          pz = dx * r20 + dy * r21 + dz * r22;
          px = (dx = px) + c1x;
          py = (dy = py) + c1y;
          pz = (dz = pz) + c1z;
          pd = nx * (px - c2x) + ny * (py - c2y) + nz * (pz - c2z);
          if (pd <= 0) {
            tx = px - pd * nx - c2x;
            ty = py - pd * ny - c2y;
            tz = pz - pd * nz - c2z;
            len = tx * tx + ty * ty + tz * tz;
            if (len > r2 * r2) {
              len = r2 / _Math.sqrt(len);
              tx *= len;
              ty *= len;
              tz *= len;
            }
            px = c2x + tx;
            py = c2y + ty;
            pz = c2z + tz;
            manifold.addPoint(px, py, pz, -nx, -ny, -nz, pd, false);
          }
          px = dx * r00 + dy * r01 + dz * r02;
          py = dx * r10 + dy * r11 + dz * r12;
          pz = dx * r20 + dy * r21 + dz * r22;
          px = (dx = px) + c1x;
          py = (dy = py) + c1y;
          pz = (dz = pz) + c1z;
          pd = nx * (px - c2x) + ny * (py - c2y) + nz * (pz - c2z);
          if (pd <= 0) {
            tx = px - pd * nx - c2x;
            ty = py - pd * ny - c2y;
            tz = pz - pd * nz - c2z;
            len = tx * tx + ty * ty + tz * tz;
            if (len > r2 * r2) {
              len = r2 / _Math.sqrt(len);
              tx *= len;
              ty *= len;
              tz *= len;
            }
            px = c2x + tx;
            py = c2y + ty;
            pz = c2z + tz;
            manifold.addPoint(px, py, pz, -nx, -ny, -nz, pd, false);
          }
        } else {
          sx = tx;
          sy = ty;
          sz = tz;
          depth1 = nx * (sx - c2x) + ny * (sy - c2y) + nz * (sz - c2z);
          sx -= depth1 * nx;
          sy -= depth1 * ny;
          sz -= depth1 * nz;
          if (dot > 0) {
            ex = tx + n1x * h1 * 2;
            ey = ty + n1y * h1 * 2;
            ez = tz + n1z * h1 * 2;
          } else {
            ex = tx - n1x * h1 * 2;
            ey = ty - n1y * h1 * 2;
            ez = tz - n1z * h1 * 2;
          }
          depth2 = nx * (ex - c2x) + ny * (ey - c2y) + nz * (ez - c2z);
          ex -= depth2 * nx;
          ey -= depth2 * ny;
          ez -= depth2 * nz;
          dx = c2x - sx;
          dy = c2y - sy;
          dz = c2z - sz;
          tx = ex - sx;
          ty = ey - sy;
          tz = ez - sz;
          a = dx * dx + dy * dy + dz * dz;
          b = dx * tx + dy * ty + dz * tz;
          e = tx * tx + ty * ty + tz * tz;
          f = b * b - e * (a - r2 * r2);
          if (f < 0) break;
          f = _Math.sqrt(f);
          t1 = (b + f) / e;
          t2 = (b - f) / e;
          if (t2 < t1) {
            len = t1;
            t1 = t2;
            t2 = len;
          }
          if (t2 > 1) t2 = 1;
          if (t1 < 0) t1 = 0;
          tx = sx + (ex - sx) * t1;
          ty = sy + (ey - sy) * t1;
          tz = sz + (ez - sz) * t1;
          ex = sx + (ex - sx) * t2;
          ey = sy + (ey - sy) * t2;
          ez = sz + (ez - sz) * t2;
          sx = tx;
          sy = ty;
          sz = tz;
          len = depth1 + (depth2 - depth1) * t1;
          depth2 = depth1 + (depth2 - depth1) * t2;
          depth1 = len;
          if (depth1 < 0) {
            manifold.addPoint(sx, sy, sz, -nx, -ny, -nz, depth1, false);
          }
          if (depth2 < 0) {
            manifold.addPoint(ex, ey, ez, -nx, -ny, -nz, depth2, false);
          }
        }
        break;
    }
  }
});
function SphereBoxCollisionDetector(flip) {
  CollisionDetector.call(this);
  this.flip = flip;
}
SphereBoxCollisionDetector.prototype = Object.assign(Object.create(CollisionDetector.prototype), {
  constructor: SphereBoxCollisionDetector,
  detectCollision: function (shape1, shape2, manifold) {
    var s;
    var b;
    if (this.flip) {
      s = shape2;
      b = shape1;
    } else {
      s = shape1;
      b = shape2;
    }
    var D = b.dimentions;
    var ps = s.position;
    var psx = ps.x;
    var psy = ps.y;
    var psz = ps.z;
    var pb = b.position;
    var pbx = pb.x;
    var pby = pb.y;
    var pbz = pb.z;
    var rad = s.radius;
    var hw = b.halfWidth;
    var hh = b.halfHeight;
    var hd = b.halfDepth;
    var dx = psx - pbx;
    var dy = psy - pby;
    var dz = psz - pbz;
    var sx = D[0] * dx + D[1] * dy + D[2] * dz;
    var sy = D[3] * dx + D[4] * dy + D[5] * dz;
    var sz = D[6] * dx + D[7] * dy + D[8] * dz;
    var cx;
    var cy;
    var cz;
    var len;
    var invLen;
    var overlap = 0;
    if (sx > hw) {
      sx = hw;
    } else if (sx < -hw) {
      sx = -hw;
    } else {
      overlap = 1;
    }
    if (sy > hh) {
      sy = hh;
    } else if (sy < -hh) {
      sy = -hh;
    } else {
      overlap |= 2;
    }
    if (sz > hd) {
      sz = hd;
    } else if (sz < -hd) {
      sz = -hd;
    } else {
      overlap |= 4;
    }
    if (overlap == 7) {
      if (sx < 0) {
        dx = hw + sx;
      } else {
        dx = hw - sx;
      }
      if (sy < 0) {
        dy = hh + sy;
      } else {
        dy = hh - sy;
      }
      if (sz < 0) {
        dz = hd + sz;
      } else {
        dz = hd - sz;
      }
      if (dx < dy) {
        if (dx < dz) {
          len = dx - hw;
          if (sx < 0) {
            sx = -hw;
            dx = D[0];
            dy = D[1];
            dz = D[2];
          } else {
            sx = hw;
            dx = -D[0];
            dy = -D[1];
            dz = -D[2];
          }
        } else {
          len = dz - hd;
          if (sz < 0) {
            sz = -hd;
            dx = D[6];
            dy = D[7];
            dz = D[8];
          } else {
            sz = hd;
            dx = -D[6];
            dy = -D[7];
            dz = -D[8];
          }
        }
      } else {
        if (dy < dz) {
          len = dy - hh;
          if (sy < 0) {
            sy = -hh;
            dx = D[3];
            dy = D[4];
            dz = D[5];
          } else {
            sy = hh;
            dx = -D[3];
            dy = -D[4];
            dz = -D[5];
          }
        } else {
          len = dz - hd;
          if (sz < 0) {
            sz = -hd;
            dx = D[6];
            dy = D[7];
            dz = D[8];
          } else {
            sz = hd;
            dx = -D[6];
            dy = -D[7];
            dz = -D[8];
          }
        }
      }
      cx = pbx + sx * D[0] + sy * D[3] + sz * D[6];
      cy = pby + sx * D[1] + sy * D[4] + sz * D[7];
      cz = pbz + sx * D[2] + sy * D[5] + sz * D[8];
      manifold.addPoint(psx + rad * dx, psy + rad * dy, psz + rad * dz, dx, dy, dz, len - rad, this.flip);
    } else {
      cx = pbx + sx * D[0] + sy * D[3] + sz * D[6];
      cy = pby + sx * D[1] + sy * D[4] + sz * D[7];
      cz = pbz + sx * D[2] + sy * D[5] + sz * D[8];
      dx = cx - ps.x;
      dy = cy - ps.y;
      dz = cz - ps.z;
      len = dx * dx + dy * dy + dz * dz;
      if (len > 0 && len < rad * rad) {
        len = _Math.sqrt(len);
        invLen = 1 / len;
        dx *= invLen;
        dy *= invLen;
        dz *= invLen;
        manifold.addPoint(psx + rad * dx, psy + rad * dy, psz + rad * dz, dx, dy, dz, len - rad, this.flip);
      }
    }
  }
});
function SphereCylinderCollisionDetector(flip) {
  CollisionDetector.call(this);
  this.flip = flip;
}
SphereCylinderCollisionDetector.prototype = Object.assign(Object.create(CollisionDetector.prototype), {
  constructor: SphereCylinderCollisionDetector,
  detectCollision: function (shape1, shape2, manifold) {
    var s;
    var c;
    if (this.flip) {
      s = shape2;
      c = shape1;
    } else {
      s = shape1;
      c = shape2;
    }
    var ps = s.position;
    var psx = ps.x;
    var psy = ps.y;
    var psz = ps.z;
    var pc = c.position;
    var pcx = pc.x;
    var pcy = pc.y;
    var pcz = pc.z;
    var dirx = c.normalDirection.x;
    var diry = c.normalDirection.y;
    var dirz = c.normalDirection.z;
    var rads = s.radius;
    var radc = c.radius;
    var rad2 = rads + radc;
    var halfh = c.halfHeight;
    var dx = psx - pcx;
    var dy = psy - pcy;
    var dz = psz - pcz;
    var dot = dx * dirx + dy * diry + dz * dirz;
    if (dot < -halfh - rads || dot > halfh + rads) return;
    var cx = pcx + dot * dirx;
    var cy = pcy + dot * diry;
    var cz = pcz + dot * dirz;
    var d2x = psx - cx;
    var d2y = psy - cy;
    var d2z = psz - cz;
    var len = d2x * d2x + d2y * d2y + d2z * d2z;
    if (len > rad2 * rad2) return;
    if (len > radc * radc) {
      len = radc / _Math.sqrt(len);
      d2x *= len;
      d2y *= len;
      d2z *= len;
    }
    if (dot < -halfh) dot = -halfh;else if (dot > halfh) dot = halfh;
    cx = pcx + dot * dirx + d2x;
    cy = pcy + dot * diry + d2y;
    cz = pcz + dot * dirz + d2z;
    dx = cx - psx;
    dy = cy - psy;
    dz = cz - psz;
    len = dx * dx + dy * dy + dz * dz;
    var invLen;
    if (len > 0 && len < rads * rads) {
      len = _Math.sqrt(len);
      invLen = 1 / len;
      dx *= invLen;
      dy *= invLen;
      dz *= invLen;
      manifold.addPoint(psx + dx * rads, psy + dy * rads, psz + dz * rads, dx, dy, dz, len - rads, this.flip);
    }
  }
});
function SphereSphereCollisionDetector() {
  CollisionDetector.call(this);
}
SphereSphereCollisionDetector.prototype = Object.assign(Object.create(CollisionDetector.prototype), {
  constructor: SphereSphereCollisionDetector,
  detectCollision: function (shape1, shape2, manifold) {
    var s1 = shape1;
    var s2 = shape2;
    var p1 = s1.position;
    var p2 = s2.position;
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    var dz = p2.z - p1.z;
    var len = dx * dx + dy * dy + dz * dz;
    var r1 = s1.radius;
    var r2 = s2.radius;
    var rad = r1 + r2;
    if (len > 0 && len < rad * rad) {
      len = _Math.sqrt(len);
      var invLen = 1 / len;
      dx *= invLen;
      dy *= invLen;
      dz *= invLen;
      manifold.addPoint(p1.x + dx * r1, p1.y + dy * r1, p1.z + dz * r1, dx, dy, dz, len - rad, false);
    }
  }
});
function SpherePlaneCollisionDetector(flip) {
  CollisionDetector.call(this);
  this.flip = flip;
  this.n = new Vec3();
  this.p = new Vec3();
}
SpherePlaneCollisionDetector.prototype = Object.assign(Object.create(CollisionDetector.prototype), {
  constructor: SpherePlaneCollisionDetector,
  detectCollision: function (shape1, shape2, manifold) {
    var n = this.n;
    var p = this.p;
    var s = this.flip ? shape2 : shape1;
    var pn = this.flip ? shape1 : shape2;
    var rad = s.radius;
    var len;
    n.sub(s.position, pn.position);
    n.x *= pn.normal.x;
    n.y *= pn.normal.y;
    n.z *= pn.normal.z;
    var len = n.lengthSq();
    if (len > 0 && len < rad * rad) {
      len = _Math.sqrt(len);
      n.copy(pn.normal).negate();
      p.copy(s.position).addScaledVector(n, rad);
      manifold.addPointVec(p, n, len - rad, this.flip);
    }
  }
});
function BoxPlaneCollisionDetector(flip) {
  CollisionDetector.call(this);
  this.flip = flip;
  this.n = new Vec3();
  this.p = new Vec3();
  this.dix = new Vec3();
  this.diy = new Vec3();
  this.diz = new Vec3();
  this.cc = new Vec3();
  this.cc2 = new Vec3();
}
BoxPlaneCollisionDetector.prototype = Object.assign(Object.create(CollisionDetector.prototype), {
  constructor: BoxPlaneCollisionDetector,
  detectCollision: function (shape1, shape2, manifold) {
    var n = this.n;
    var p = this.p;
    var cc = this.cc;
    var b = this.flip ? shape2 : shape1;
    var pn = this.flip ? shape1 : shape2;
    var D = b.dimentions;
    var hw = b.halfWidth;
    var hh = b.halfHeight;
    var hd = b.halfDepth;
    var len;
    var overlap = 0;
    this.dix.set(D[0], D[1], D[2]);
    this.diy.set(D[3], D[4], D[5]);
    this.diz.set(D[6], D[7], D[8]);
    n.sub(b.position, pn.position);
    n.x *= pn.normal.x;
    n.y *= pn.normal.y;
    n.z *= pn.normal.z;
    cc.set(_Math.dotVectors(this.dix, n), _Math.dotVectors(this.diy, n), _Math.dotVectors(this.diz, n));
    if (cc.x > hw) cc.x = hw;else if (cc.x < -hw) cc.x = -hw;else overlap = 1;
    if (cc.y > hh) cc.y = hh;else if (cc.y < -hh) cc.y = -hh;else overlap |= 2;
    if (cc.z > hd) cc.z = hd;else if (cc.z < -hd) cc.z = -hd;else overlap |= 4;
    if (overlap === 7) {
      n.set(cc.x < 0 ? hw + cc.x : hw - cc.x, cc.y < 0 ? hh + cc.y : hh - cc.y, cc.z < 0 ? hd + cc.z : hd - cc.z);
      if (n.x < n.y) {
        if (n.x < n.z) {
          len = n.x - hw;
          if (cc.x < 0) {
            cc.x = -hw;
            n.copy(this.dix);
          } else {
            cc.x = hw;
            n.subEqual(this.dix);
          }
        } else {
          len = n.z - hd;
          if (cc.z < 0) {
            cc.z = -hd;
            n.copy(this.diz);
          } else {
            cc.z = hd;
            n.subEqual(this.diz);
          }
        }
      } else {
        if (n.y < n.z) {
          len = n.y - hh;
          if (cc.y < 0) {
            cc.y = -hh;
            n.copy(this.diy);
          } else {
            cc.y = hh;
            n.subEqual(this.diy);
          }
        } else {
          len = n.z - hd;
          if (cc.z < 0) {
            cc.z = -hd;
            n.copy(this.diz);
          } else {
            cc.z = hd;
            n.subEqual(this.diz);
          }
        }
      }
      p.copy(pn.position).addScaledVector(n, 1);
      manifold.addPointVec(p, n, len, this.flip);
    }
  }
});
function World(o) {
  if (!(o instanceof Object)) o = {};
  this.scale = o.worldscale || 1;
  this.invScale = 1 / this.scale;
  this.timeStep = o.timestep || 0.01666;
  this.timerate = this.timeStep * 1000;
  this.timer = null;
  this.preLoop = null;
  this.postLoop = null;
  this.numIterations = o.iterations || 8;
  switch (o.broadphase || 2) {
    case 1:
      this.broadPhase = new BruteForceBroadPhase();
      break;
    case 2:
    default:
      this.broadPhase = new SAPBroadPhase();
      break;
    case 3:
      this.broadPhase = new DBVTBroadPhase();
      break;
  }
  this.Btypes = ['None', 'BruteForce', 'Sweep & Prune', 'Bounding Volume Tree'];
  this.broadPhaseType = this.Btypes[o.broadphase || 2];
  this.performance = null;
  this.isStat = o.info === undefined ? false : o.info;
  if (this.isStat) this.performance = new InfoDisplay(this);
  this.enableRandomizer = o.random !== undefined ? o.random : true;
  this.rigidBodies = null;
  this.numRigidBodies = 0;
  this.contacts = null;
  this.unusedContacts = null;
  this.numContacts = 0;
  this.numContactPoints = 0;
  this.joints = null;
  this.numJoints = 0;
  this.numIslands = 0;
  this.gravity = new Vec3(0, -9.8, 0);
  if (o.gravity !== undefined) this.gravity.fromArray(o.gravity);
  var numShapeTypes = 5;
  this.detectors = [];
  this.detectors.length = numShapeTypes;
  var i = numShapeTypes;
  while (i--) {
    this.detectors[i] = [];
    this.detectors[i].length = numShapeTypes;
  }
  this.detectors[SHAPE_SPHERE][SHAPE_SPHERE] = new SphereSphereCollisionDetector();
  this.detectors[SHAPE_SPHERE][SHAPE_BOX] = new SphereBoxCollisionDetector(false);
  this.detectors[SHAPE_BOX][SHAPE_SPHERE] = new SphereBoxCollisionDetector(true);
  this.detectors[SHAPE_BOX][SHAPE_BOX] = new BoxBoxCollisionDetector();
  this.detectors[SHAPE_CYLINDER][SHAPE_CYLINDER] = new CylinderCylinderCollisionDetector();
  this.detectors[SHAPE_CYLINDER][SHAPE_BOX] = new BoxCylinderCollisionDetector(true);
  this.detectors[SHAPE_BOX][SHAPE_CYLINDER] = new BoxCylinderCollisionDetector(false);
  this.detectors[SHAPE_CYLINDER][SHAPE_SPHERE] = new SphereCylinderCollisionDetector(true);
  this.detectors[SHAPE_SPHERE][SHAPE_CYLINDER] = new SphereCylinderCollisionDetector(false);
  this.detectors[SHAPE_PLANE][SHAPE_SPHERE] = new SpherePlaneCollisionDetector(true);
  this.detectors[SHAPE_SPHERE][SHAPE_PLANE] = new SpherePlaneCollisionDetector(false);
  this.detectors[SHAPE_PLANE][SHAPE_BOX] = new BoxPlaneCollisionDetector(true);
  this.detectors[SHAPE_BOX][SHAPE_PLANE] = new BoxPlaneCollisionDetector(false);
  this.randX = 65535;
  this.randA = 98765;
  this.randB = 123456789;
  this.islandRigidBodies = [];
  this.islandStack = [];
  this.islandConstraints = [];
}
Object.assign(World.prototype, {
  World: true,
  play: function () {
    if (this.timer !== null) return;
    var _this = this;
    this.timer = setInterval(function () {
      _this.step();
    }, this.timerate);
  },
  stop: function () {
    if (this.timer === null) return;
    clearInterval(this.timer);
    this.timer = null;
  },
  setGravity: function (ar) {
    this.gravity.fromArray(ar);
  },
  getInfo: function () {
    return this.isStat ? this.performance.show() : '';
  },
  clear: function () {
    this.stop();
    this.preLoop = null;
    this.postLoop = null;
    this.randX = 65535;
    while (this.joints !== null) {
      this.removeJoint(this.joints);
    }
    while (this.contacts !== null) {
      this.removeContact(this.contacts);
    }
    while (this.rigidBodies !== null) {
      this.removeRigidBody(this.rigidBodies);
    }
  },
  addRigidBody: function (rigidBody) {
    if (rigidBody.parent) {
      printError("World", "It is not possible to be added to more than one world one of the rigid body");
    }
    rigidBody.setParent(this);
    for (var shape = rigidBody.shapes; shape !== null; shape = shape.next) {
      this.addShape(shape);
    }
    if (this.rigidBodies !== null) (this.rigidBodies.prev = rigidBody).next = this.rigidBodies;
    this.rigidBodies = rigidBody;
    this.numRigidBodies++;
  },
  removeRigidBody: function (rigidBody) {
    var remove = rigidBody;
    if (remove.parent !== this) return;
    remove.awake();
    var js = remove.jointLink;
    while (js != null) {
      var joint = js.joint;
      js = js.next;
      this.removeJoint(joint);
    }
    for (var shape = rigidBody.shapes; shape !== null; shape = shape.next) {
      this.removeShape(shape);
    }
    var prev = remove.prev;
    var next = remove.next;
    if (prev !== null) prev.next = next;
    if (next !== null) next.prev = prev;
    if (this.rigidBodies == remove) this.rigidBodies = next;
    remove.prev = null;
    remove.next = null;
    remove.parent = null;
    this.numRigidBodies--;
  },
  getByName: function (name) {
    var body = this.rigidBodies;
    while (body !== null) {
      if (body.name === name) return body;
      body = body.next;
    }
    var joint = this.joints;
    while (joint !== null) {
      if (joint.name === name) return joint;
      joint = joint.next;
    }
    return null;
  },
  addShape: function (shape) {
    if (!shape.parent || !shape.parent.parent) {
      printError("World", "It is not possible to be added alone to shape world");
    }
    shape.proxy = this.broadPhase.createProxy(shape);
    shape.updateProxy();
    this.broadPhase.addProxy(shape.proxy);
  },
  removeShape: function (shape) {
    this.broadPhase.removeProxy(shape.proxy);
    shape.proxy = null;
  },
  addJoint: function (joint) {
    if (joint.parent) {
      printError("World", "It is not possible to be added to more than one world one of the joint");
    }
    if (this.joints != null) (this.joints.prev = joint).next = this.joints;
    this.joints = joint;
    joint.setParent(this);
    this.numJoints++;
    joint.awake();
    joint.attach();
  },
  removeJoint: function (joint) {
    var remove = joint;
    var prev = remove.prev;
    var next = remove.next;
    if (prev !== null) prev.next = next;
    if (next !== null) next.prev = prev;
    if (this.joints == remove) this.joints = next;
    remove.prev = null;
    remove.next = null;
    this.numJoints--;
    remove.awake();
    remove.detach();
    remove.parent = null;
  },
  addContact: function (s1, s2) {
    var newContact;
    if (this.unusedContacts !== null) {
      newContact = this.unusedContacts;
      this.unusedContacts = this.unusedContacts.next;
    } else {
      newContact = new Contact();
    }
    newContact.attach(s1, s2);
    newContact.detector = this.detectors[s1.type][s2.type];
    if (this.contacts) (this.contacts.prev = newContact).next = this.contacts;
    this.contacts = newContact;
    this.numContacts++;
  },
  removeContact: function (contact) {
    var prev = contact.prev;
    var next = contact.next;
    if (next) next.prev = prev;
    if (prev) prev.next = next;
    if (this.contacts == contact) this.contacts = next;
    contact.prev = null;
    contact.next = null;
    contact.detach();
    contact.next = this.unusedContacts;
    this.unusedContacts = contact;
    this.numContacts--;
  },
  getContact: function (b1, b2) {
    b1 = b1.constructor === RigidBody ? b1.name : b1;
    b2 = b2.constructor === RigidBody ? b2.name : b2;
    var n1, n2;
    var contact = this.contacts;
    while (contact !== null) {
      n1 = contact.body1.name;
      n2 = contact.body2.name;
      if (n1 === b1 && n2 === b2 || n2 === b1 && n1 === b2) {
        if (contact.touching) return contact;else return null;
      } else contact = contact.next;
    }
    return null;
  },
  checkContact: function (name1, name2) {
    var n1, n2;
    var contact = this.contacts;
    while (contact !== null) {
      n1 = contact.body1.name || ' ';
      n2 = contact.body2.name || ' ';
      if (n1 == name1 && n2 == name2 || n2 == name1 && n1 == name2) {
        if (contact.touching) return true;else return false;
      } else contact = contact.next;
    }
  },
  callSleep: function (body) {
    if (!body.allowSleep) return false;
    if (body.linearVelocity.lengthSq() > 0.04) return false;
    if (body.angularVelocity.lengthSq() > 0.25) return false;
    return true;
  },
  step: function () {
    var stat = this.isStat;
    if (stat) this.performance.setTime(0);
    var body = this.rigidBodies;
    while (body !== null) {
      body.addedToIsland = false;
      if (body.sleeping) body.testWakeUp();
      body = body.next;
    }
    if (stat) this.performance.setTime(1);
    this.broadPhase.detectPairs();
    var pairs = this.broadPhase.pairs;
    var i = this.broadPhase.numPairs;
    while (i--) {
      var pair = pairs[i];
      var s1;
      var s2;
      if (pair.shape1.id < pair.shape2.id) {
        s1 = pair.shape1;
        s2 = pair.shape2;
      } else {
        s1 = pair.shape2;
        s2 = pair.shape1;
      }
      var link;
      if (s1.numContacts < s2.numContacts) link = s1.contactLink;else link = s2.contactLink;
      var exists = false;
      while (link) {
        var contact = link.contact;
        if (contact.shape1 == s1 && contact.shape2 == s2) {
          contact.persisting = true;
          exists = true;
          break;
        }
        link = link.next;
      }
      if (!exists) {
        this.addContact(s1, s2);
      }
    }
    if (stat) this.performance.calcBroadPhase();
    this.numContactPoints = 0;
    contact = this.contacts;
    while (contact !== null) {
      if (!contact.persisting) {
        if (contact.shape1.aabb.intersectTest(contact.shape2.aabb)) {
          var next = contact.next;
          this.removeContact(contact);
          contact = next;
          continue;
        }
      }
      var b1 = contact.body1;
      var b2 = contact.body2;
      if (b1.isDynamic && !b1.sleeping || b2.isDynamic && !b2.sleeping) contact.updateManifold();
      this.numContactPoints += contact.manifold.numPoints;
      contact.persisting = false;
      contact.constraint.addedToIsland = false;
      contact = contact.next;
    }
    if (stat) this.performance.calcNarrowPhase();
    var invTimeStep = 1 / this.timeStep;
    var joint;
    var constraint;
    for (joint = this.joints; joint !== null; joint = joint.next) {
      joint.addedToIsland = false;
    }
    this.islandRigidBodies = [];
    this.islandConstraints = [];
    this.islandStack = [];
    if (stat) this.performance.setTime(1);
    this.numIslands = 0;
    for (var base = this.rigidBodies; base !== null; base = base.next) {
      if (base.addedToIsland || base.isStatic || base.sleeping) continue;
      if (base.isLonely()) {
        if (base.isDynamic) {
          base.linearVelocity.addScaledVector(this.gravity, this.timeStep);
        }
        if (this.callSleep(base)) {
          base.sleepTime += this.timeStep;
          if (base.sleepTime > 0.5) base.sleep();else base.updatePosition(this.timeStep);
        } else {
          base.sleepTime = 0;
          base.updatePosition(this.timeStep);
        }
        this.numIslands++;
        continue;
      }
      var islandNumRigidBodies = 0;
      var islandNumConstraints = 0;
      var stackCount = 1;
      this.islandStack[0] = base;
      base.addedToIsland = true;
      do {
        body = this.islandStack[--stackCount];
        this.islandStack[stackCount] = null;
        body.sleeping = false;
        this.islandRigidBodies[islandNumRigidBodies++] = body;
        if (body.isStatic) continue;
        for (var cs = body.contactLink; cs !== null; cs = cs.next) {
          var contact = cs.contact;
          constraint = contact.constraint;
          if (constraint.addedToIsland || !contact.touching) continue;
          this.islandConstraints[islandNumConstraints++] = constraint;
          constraint.addedToIsland = true;
          var next = cs.body;
          if (next.addedToIsland) continue;
          this.islandStack[stackCount++] = next;
          next.addedToIsland = true;
        }
        for (var js = body.jointLink; js !== null; js = js.next) {
          constraint = js.joint;
          if (constraint.addedToIsland) continue;
          this.islandConstraints[islandNumConstraints++] = constraint;
          constraint.addedToIsland = true;
          next = js.body;
          if (next.addedToIsland || !next.isDynamic) continue;
          this.islandStack[stackCount++] = next;
          next.addedToIsland = true;
        }
      } while (stackCount != 0);
      var gVel = new Vec3().addScaledVector(this.gravity, this.timeStep);
      var j = islandNumRigidBodies;
      while (j--) {
        body = this.islandRigidBodies[j];
        if (body.isDynamic) {
          body.linearVelocity.addEqual(gVel);
        }
      }
      if (this.enableRandomizer) {
        j = islandNumConstraints;
        while (j--) {
          if (j !== 0) {
            var swap = (this.randX = this.randX * this.randA + this.randB & 0x7fffffff) / 2147483648.0 * j | 0;
            constraint = this.islandConstraints[j];
            this.islandConstraints[j] = this.islandConstraints[swap];
            this.islandConstraints[swap] = constraint;
          }
        }
      }
      j = islandNumConstraints;
      while (j--) {
        this.islandConstraints[j].preSolve(this.timeStep, invTimeStep);
      }
      var k = this.numIterations;
      while (k--) {
        j = islandNumConstraints;
        while (j--) {
          this.islandConstraints[j].solve();
        }
      }
      j = islandNumConstraints;
      while (j--) {
        this.islandConstraints[j].postSolve();
        this.islandConstraints[j] = null;
      }
      var sleepTime = 10;
      j = islandNumRigidBodies;
      while (j--) {
        body = this.islandRigidBodies[j];
        if (this.callSleep(body)) {
          body.sleepTime += this.timeStep;
          if (body.sleepTime < sleepTime) sleepTime = body.sleepTime;
        } else {
          body.sleepTime = 0;
          sleepTime = 0;
          continue;
        }
      }
      if (sleepTime > 0.5) {
        j = islandNumRigidBodies;
        while (j--) {
          this.islandRigidBodies[j].sleep();
          this.islandRigidBodies[j] = null;
        }
      } else {
        j = islandNumRigidBodies;
        while (j--) {
          this.islandRigidBodies[j].updatePosition(this.timeStep);
          this.islandRigidBodies[j] = null;
        }
      }
      this.numIslands++;
    }
    if (stat) this.performance.calcEnd();
    if (this.postLoop !== null) this.postLoop();
  },
  remove: function (obj) {},
  add: function (o) {
    o = o || {};
    var type = o.type || "box";
    if (type.constructor === String) type = [type];
    var isJoint = type[0].substring(0, 5) === 'joint' ? true : false;
    if (isJoint) return this.initJoint(type[0], o);else return this.initBody(type, o);
  },
  initBody: function (type, o) {
    var invScale = this.invScale;
    var move = o.move || false;
    var kinematic = o.kinematic || false;
    var p = o.pos || [0, 0, 0];
    p = p.map(function (x) {
      return x * invScale;
    });
    var p2 = o.posShape || [0, 0, 0];
    p2 = p2.map(function (x) {
      return x * invScale;
    });
    var r = o.rot || [0, 0, 0];
    r = r.map(function (x) {
      return x * _Math.degtorad;
    });
    var r2 = o.rotShape || [0, 0, 0];
    r2 = r.map(function (x) {
      return x * _Math.degtorad;
    });
    var s = o.size === undefined ? [1, 1, 1] : o.size;
    if (s.length === 1) {
      s[1] = s[0];
    }
    if (s.length === 2) {
      s[2] = s[0];
    }
    s = s.map(function (x) {
      return x * invScale;
    });
    var sc = new ShapeConfig();
    if (o.density !== undefined) sc.density = o.density;
    if (o.friction !== undefined) sc.friction = o.friction;
    if (o.restitution !== undefined) sc.restitution = o.restitution;
    if (o.belongsTo !== undefined) sc.belongsTo = o.belongsTo;
    if (o.collidesWith !== undefined) sc.collidesWith = o.collidesWith;
    if (o.config !== undefined) {
      if (o.config[0] !== undefined) sc.density = o.config[0];
      if (o.config[1] !== undefined) sc.friction = o.config[1];
      if (o.config[2] !== undefined) sc.restitution = o.config[2];
      if (o.config[3] !== undefined) sc.belongsTo = o.config[3];
      if (o.config[4] !== undefined) sc.collidesWith = o.config[4];
    }
    var position = new Vec3(p[0], p[1], p[2]);
    var rotation = new Quat().setFromEuler(r[0], r[1], r[2]);
    var body = new RigidBody(position, rotation);
    var shape, n;
    for (var i = 0; i < type.length; i++) {
      n = i * 3;
      if (p2[n] !== undefined) sc.relativePosition.set(p2[n], p2[n + 1], p2[n + 2]);
      if (r2[n] !== undefined) sc.relativeRotation.setQuat(new Quat().setFromEuler(r2[n], r2[n + 1], r2[n + 2]));
      switch (type[i]) {
        case "sphere":
          shape = new Sphere(sc, s[n]);
          break;
        case "cylinder":
          shape = new Cylinder(sc, s[n], s[n + 1]);
          break;
        case "box":
          shape = new Box(sc, s[n], s[n + 1], s[n + 2]);
          break;
        case "plane":
          shape = new Plane(sc);
          break;
      }
      body.addShape(shape);
    }
    if (o.neverSleep || kinematic) body.allowSleep = false;else body.allowSleep = true;
    body.isKinematic = kinematic;
    if (move) {
      if (o.massPos || o.massRot) body.setupMass(BODY_DYNAMIC, false);else body.setupMass(BODY_DYNAMIC, true);
    } else {
      body.setupMass(BODY_STATIC);
    }
    if (o.name !== undefined) body.name = o.name;
    this.addRigidBody(body);
    if (move) {
      if (o.sleep) body.sleep();else body.awake();
    }
    return body;
  },
  initJoint: function (type, o) {
    var invScale = this.invScale;
    var axe1 = o.axe1 || [1, 0, 0];
    var axe2 = o.axe2 || [1, 0, 0];
    var pos1 = o.pos1 || [0, 0, 0];
    var pos2 = o.pos2 || [0, 0, 0];
    pos1 = pos1.map(function (x) {
      return x * invScale;
    });
    pos2 = pos2.map(function (x) {
      return x * invScale;
    });
    var min, max;
    if (type === "jointDistance") {
      min = o.min || 0;
      max = o.max || 10;
      min = min * invScale;
      max = max * invScale;
    } else {
      min = o.min || 57.29578;
      max = o.max || 0;
      min = min * _Math.degtorad;
      max = max * _Math.degtorad;
    }
    var limit = o.limit || null;
    var spring = o.spring || null;
    var motor = o.motor || null;
    var jc = new JointConfig();
    jc.scale = this.scale;
    jc.invScale = this.invScale;
    jc.allowCollision = o.collision || false;
    jc.localAxis1.set(axe1[0], axe1[1], axe1[2]);
    jc.localAxis2.set(axe2[0], axe2[1], axe2[2]);
    jc.localAnchorPoint1.set(pos1[0], pos1[1], pos1[2]);
    jc.localAnchorPoint2.set(pos2[0], pos2[1], pos2[2]);
    var b1 = null;
    var b2 = null;
    if (o.body1 === undefined || o.body2 === undefined) return printError('World', "Can't add joint if attach rigidbodys not define !");
    if (o.body1.constructor === String) {
      b1 = this.getByName(o.body1);
    } else if (o.body1.constructor === Number) {
      b1 = this.getByName(o.body1);
    } else if (o.body1.constructor === RigidBody) {
      b1 = o.body1;
    }
    if (o.body2.constructor === String) {
      b2 = this.getByName(o.body2);
    } else if (o.body2.constructor === Number) {
      b2 = this.getByName(o.body2);
    } else if (o.body2.constructor === RigidBody) {
      b2 = o.body2;
    }
    if (b1 === null || b2 === null) return printError('World', "Can't add joint attach rigidbodys not find !");
    jc.body1 = b1;
    jc.body2 = b2;
    var joint;
    switch (type) {
      case "jointDistance":
        joint = new DistanceJoint(jc, min, max);
        if (spring !== null) joint.limitMotor.setSpring(spring[0], spring[1]);
        if (motor !== null) joint.limitMotor.setMotor(motor[0], motor[1]);
        break;
      case "jointHinge":
      case "joint":
        joint = new HingeJoint(jc, min, max);
        if (spring !== null) joint.limitMotor.setSpring(spring[0], spring[1]);
        if (motor !== null) joint.limitMotor.setMotor(motor[0], motor[1]);
        break;
      case "jointPrisme":
        joint = new PrismaticJoint(jc, min, max);
        break;
      case "jointSlide":
        joint = new SliderJoint(jc, min, max);
        break;
      case "jointBall":
        joint = new BallAndSocketJoint(jc);
        break;
      case "jointWheel":
        joint = new WheelJoint(jc);
        if (limit !== null) joint.rotationalLimitMotor1.setLimit(limit[0], limit[1]);
        if (spring !== null) joint.rotationalLimitMotor1.setSpring(spring[0], spring[1]);
        if (motor !== null) joint.rotationalLimitMotor1.setMotor(motor[0], motor[1]);
        break;
    }
    joint.name = o.name || '';
    this.addJoint(joint);
    return joint;
  }
});

var oimo = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Math: _Math,
  Vec3: Vec3,
  Quat: Quat,
  Mat33: Mat33,
  Shape: Shape,
  Box: Box,
  Sphere: Sphere,
  Cylinder: Cylinder,
  Plane: Plane,
  Particle: Particle,
  ShapeConfig: ShapeConfig,
  LimitMotor: LimitMotor,
  HingeJoint: HingeJoint,
  BallAndSocketJoint: BallAndSocketJoint,
  DistanceJoint: DistanceJoint,
  PrismaticJoint: PrismaticJoint,
  SliderJoint: SliderJoint,
  WheelJoint: WheelJoint,
  JointConfig: JointConfig,
  RigidBody: RigidBody,
  World: World,
  REVISION: REVISION,
  BR_NULL: BR_NULL,
  BR_BRUTE_FORCE: BR_BRUTE_FORCE,
  BR_SWEEP_AND_PRUNE: BR_SWEEP_AND_PRUNE,
  BR_BOUNDING_VOLUME_TREE: BR_BOUNDING_VOLUME_TREE,
  BODY_NULL: BODY_NULL,
  BODY_DYNAMIC: BODY_DYNAMIC,
  BODY_STATIC: BODY_STATIC,
  BODY_KINEMATIC: BODY_KINEMATIC,
  BODY_GHOST: BODY_GHOST,
  SHAPE_NULL: SHAPE_NULL,
  SHAPE_SPHERE: SHAPE_SPHERE,
  SHAPE_BOX: SHAPE_BOX,
  SHAPE_CYLINDER: SHAPE_CYLINDER,
  SHAPE_PLANE: SHAPE_PLANE,
  SHAPE_PARTICLE: SHAPE_PARTICLE,
  SHAPE_TETRA: SHAPE_TETRA,
  JOINT_NULL: JOINT_NULL,
  JOINT_DISTANCE: JOINT_DISTANCE,
  JOINT_BALL_AND_SOCKET: JOINT_BALL_AND_SOCKET,
  JOINT_HINGE: JOINT_HINGE,
  JOINT_WHEEL: JOINT_WHEEL,
  JOINT_SLIDER: JOINT_SLIDER,
  JOINT_PRISMATIC: JOINT_PRISMATIC,
  AABB_PROX: AABB_PROX,
  printError: printError,
  InfoDisplay: InfoDisplay
});

var oimo$1 = {
  mixins: [AbstractPhysics],
  methods: {
    getPhysicsPlugin: function getPhysicsPlugin() {
      return new OimoJSPlugin(undefined, oimo);
    }
  }
};

var FOG_TYPES = {
  NONE: 'none',
  EXP: 'exp',
  EXP2: 'exp2',
  LINEAR: 'linear'
};
var index = {
  provide: function provide() {
    return {
      EngineReady: this.EngineReady,
      SceneReady: this.SceneReady,
      SceneBus: this.sceneBus,
      SceneGravity: this.gravityVector3,
      EntityBus: this.$event
    };
  },
  model: {
    prop: 'model',
    event: 'change'
  },
  props: {
    model: {
      type: Object,
      default: null
    },
    ambient: {
      validator: color3.validator,
      default: function _default() {
        return Color3.Black();
      }
    },
    fog: {
      validator: function validator(value) {
        return Object.values(FOG_TYPES).includes(value);
      },
      default: Object.values(FOG_TYPES)[0]
    },
    fogStart: {
      type: Number,
      default: 20
    },
    fogEnd: {
      type: Number,
      default: 60
    },
    fogDensity: {
      type: Number,
      default: 0.1
    },
    fogColor: {
      validator: color3.validator,
      default: function _default() {
        return new Color3(0.2, 0.2, 0.3);
      }
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    debug: {
      type: Boolean,
      default: false
    },
    environment: {
      type: Object,
      default: undefined
    },
    main: {
      validator: color3.validator,
      default: null
    },
    gravity: {
      validator: vecValidator,
      default: function _default() {
        return new Vector3(0, -9.81, 0);
      }
    }
  },
  computed: {
    ambientColor: function ambientColor() {
      return toColor3(this.ambient);
    },
    fogMode: function fogMode() {
      return Scene["FOGMODE_".concat(this.fog.toUpperCase())];
    },
    fogColor3: function fogColor3() {
      return toColor3(this.fogColor);
    },
    mainColor: function mainColor() {
      if (!this.main) {
        return null;
      }
      return toColor3(this.main);
    },
    gravityVecor3: function gravityVecor3() {
      return toVec3(this.gravity);
    }
  },
  methods: {
    setAmbientColor: function setAmbientColor() {
      this.scene.ambientColor = this.ambientColor;
    },
    setFogStart: function setFogStart() {
      this.scene.fogStart = this.fogStart;
    },
    setFogEnd: function setFogEnd() {
      this.scene.fogStart = this.fogEnd;
    },
    setFogDensity: function setFogDensity() {
      this.scene.fogDensity = this.fogDensity;
    },
    setFogColor: function setFogColor() {
      this.scene.fogColor = this.fogColor3;
    },
    setFogMode: function setFogMode() {
      this.scene.fogMode = this.fogMode;
      switch (this.fog) {
        case 'none':
          break;
        case 'linear':
          this.setFogStart();
          this.setFogEnd();
          break;
        default:
          this.setFogDensity();
      }
      this.setFogColor();
    },
    requestFullScreen: function requestFullScreen() {
      if (this.fullscreen) {
        this.$refs.scene.requestFullScreen();
      }
    },
    debugLayer: function debugLayer() {
      if (this.debug) {
        this.scene.debugLayer.show();
      } else {
        this.scene.debugLayer.hide();
      }
    },
    resize: function resize() {
      this.engine.resize();
    },
    defaultEnvironment: function defaultEnvironment() {
      if (this.scene.cameras.length < 1) {
        this.scene.createDefaultCameraOrLight(true, true, true);
        var helper = this.scene.createDefaultEnvironment(this.environment);
        if (this.mainColor) {
          helper.setMainColor(this.mainColor);
        }
      }
    },
    setScene: function setScene() {
      var _this = this;
      this.engine = new Engine(this.$refs.scene, true);
      this.$emit('engine', this.engine);
      this.scene = new Scene(this.engine);
      this.$emit('scene', this.scene);
      this.observers = registerObservers.call(this, this.scene);
      this.setAmbientColor();
      this.setFogMode();
      this.resolveScene(this.scene);
      this.resolveEngine(this.engine);
      this.engine.runRenderLoop(function () {
        return _this.scene.render();
      });
      this.requestFullScreen();
      this.debugLayer();
      this.scene.executeWhenReady(this.resize);
    },
    setGravity: function setGravity() {
      if (this.scene && this.scene.getPhysicsEngine()) {
        this.physicsEngine.setGravity(this.gravityVector3);
      }
    },
    register: function register(_ref) {
      var name = _ref.name;
      this._$_children[name] = defer();
    },
    complete: function complete(_ref2) {
      var name = _ref2.name,
          entity = _ref2.entity;
      this._$_children[name].complete({
        name: name,
        entity: entity
      });
    }
  },
  watch: {
    ambientColor: function ambientColor() {
      this.setAmbientColor();
    },
    fog: function fog() {
      this.setFogMode();
    },
    fogDensity: function fogDensity() {
      this.setFogDensity();
    },
    fogStart: function fogStart() {
      this.setFogStart();
    },
    fogEnd: function fogEnd() {
      this.setFogEnd();
    },
    fogColor3: function fogColor3() {
      this.setFogColor();
    },
    fullscreen: function fullscreen() {
      this.requestFullScreen();
    },
    debug: function debug() {
      this.debugLayer();
    },
    gravityVector3: function gravityVector3() {
      this.setGravity();
    }
  },
  beforeCreate: function beforeCreate() {
    var _this2 = this;
    this.sceneBus = createBus.call(this);
    this.SceneReady = new Promise(function (resolve) {
      _this2.resolveScene = resolve;
    });
    this.EngineReady = new Promise(function (resolve) {
      _this2.resolveEngine = resolve;
    });
    this.$event = createBus.call(this);
  },
  beforeMount: function beforeMount() {
    this._$_children = {};
    this.$event.$on('register', this.register);
    this.$event.$on('complete', this.complete);
  },
  mounted: function mounted() {
    var _this3 = this;
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var children;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this3.setScene(_this3.$refs.scene);
              window.addEventListener('resize', _this3.resize);
              _context.next = 4;
              return Promise.all(Object.values(_this3._$_children));
            case 4:
              children = _context.sent;
              children = children.reduce(function (out, _ref3) {
                var name = _ref3.name,
                    entity = _ref3.entity;
                out[name] = entity;
                return out;
              }, {});
              _this3.$emit('complete', {
                children: children,
                scene: _this3.scene,
                engine: _this3.engine
              });
              _this3.defaultEnvironment();
            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.resize);
    this.engine.stopRenderLoop();
    this.observers();
    this.scene.dispose();
    this.vrHelper = null;
    this.scene = null;
    this.engine = null;
  },
  render: function render(createElement) {
    return createElement('canvas', {
      ref: 'scene',
      style: {
        height: '100%',
        width: '100%'
      }
    }, this.$slots.default);
  }
};

var TYPES$1 = {
  universal: UniversalCamera,
  free: FreeCamera,
  follow: FollowCamera,
  arcRotate: ArcRotateCamera,
  arcFollow: ArcFollowCamera,
  deviceOrientation: DeviceOrientationCamera,
  touch: TouchCamera,
  gamepad: GamepadCamera
};
var index$1 = {
  mixins: [AbstractEntity],
  inject: ['EngineReady'],
  props: {
    type: {
      validator: function validator(value) {
        return Object.keys(TYPES$1).includes(value);
      },
      default: Object.keys(TYPES$1)[0]
    },
    position: {
      validator: vec3.validator,
      default: function _default() {
        return new Vector3(0, 0, -10);
      }
    },
    target: vec3,
    alpha: {
      type: Number,
      default: -Math.PI / 2
    },
    beta: {
      type: Number,
      default: Math.PI / 2
    },
    radius: {
      type: Number,
      default: 10
    }
  },
  computed: {
    positionVector3: function positionVector3() {
      return toVec3(this.position);
    },
    targetVector3: function targetVector3() {
      return toVec3(this.target);
    },
    args: function args() {
      var out = [this.name];
      if (this.type === 'arcRotate' || this.type === 'arcFollow') {
        out = out.concat([this.alpha, this.beta, this.radius, this.targetVector3]);
      } else {
        out = out.concat([this.positionVector3]);
      }
      return out.concat([this.$scene]);
    }
  },
  methods: {
    attachControl: function attachControl() {
      this.$entity.attachControl(this.canvas);
    },
    detachControl: function detachControl() {
      this.$entity.detachControl();
    },
    create: function create() {
      var _this = this;
      if (this.$entity) {
        this.detachControl();
        delete this.$entity.onDispose;
        this.$entity.dispose();
      }
      this.$entity = _construct(TYPES$1[this.type], _toConsumableArray(this.args));
      this.$entity.onDispose = function () {
        _this.detachControl();
        if (!_this._$_destroyed) {
          _this.$destroy();
        }
      };
    }
  },
  watch: {
    type: function type() {
      this.create();
    },
    position: function position() {
      this.$entity.position.copyFrom(this.positionVector3);
    },
    target: function target() {
      this.$entity.setTarget(this.targetVector3);
    },
    alpha: function alpha() {
      this.$entity.alpha = this.alpha;
    },
    beta: function beta() {
      this.$entity.beta = this.beta;
    },
    radius: function radius() {
      this.$entity.radius = this.radius;
    }
  },
  events: {
    attachControl: function attachControl() {
      this.attachControl();
    },
    detachControl: function detachControl() {
      this.detachControl();
    }
  },
  onScene: function onScene(_ref) {
    var _this2 = this;
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var scene;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              scene = _ref.scene;
              _this2.canvas = scene.getEngine().getRenderingCanvas();
              _this2.create();
              _this2.attachControl();
              return _context.abrupt("return", _this2.$entity);
            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  beforeDestroy: function beforeDestroy() {
    this._$_destroyed = true;
    if (this.$entity && this.$entity.dispose) {
      this.$entity.dispose();
    }
  }
};

var validator = vec3.validator;
var Entity = {
  mixins: [AbstractEntity],
  props: {
    position: vec3,
    rotation: vec3,
    scaling: {
      validator: validator,
      default: function _default() {
        return Vector3.One();
      }
    }
  },
  computed: {
    _$_positionVector3: function _$_positionVector3() {
      return toVec3(this.position);
    },
    _$_rotationVector3: function _$_rotationVector3() {
      return toVec3(this.rotation);
    },
    _$_scalingVector3: function _$_scalingVector3() {
      return toVec3(this.scaling);
    }
  },
  watch: {
    _$_positionVector3: function _$_positionVector3() {
      this._$_setPosition();
    },
    _$_rotationVector3: function _$_rotationVector3() {
      this._$_setRotation();
    },
    _$_scalingVector3: function _$_scalingVector3() {
      this._$_setScaling();
    }
  },
  methods: {
    _$_setPosition: function _$_setPosition() {
      if (this.$entity && this.$entity.position) {
        this.$entity.position.copyFrom(this._$_positionVector3);
      }
    },
    _$_setRotation: function _$_setRotation() {
      if (this.$entity && this.$entity.rotation) {
        this.$entity.rotation.copyFrom(this._$_rotationVector3);
      }
    },
    _$_setScaling: function _$_setScaling() {
      if (this.$entity && this.$entity.scaling) {
        this.$entity.scaling.copyFrom(this._$_scalingVector3);
      }
    }
  },
  created: function created() {
    Object.assign(this._$_hookArgs, {
      position: this._$_positionVector3,
      rotation: this._$_rotationVector3,
      scaling: this._$_scalingVector3
    });
  },
  _$_onTransform: function _$_onTransform() {
    if (!this.$entity) {
      var box = MeshBuilder.CreateBox(this.name, {}, this.$scene);
      box.isVisible = false;
      this.$entity = box;
    }
    this._$_setPosition();
    this._$_setRotation();
    this._$_setScaling();
    if (!this.$entity.parent) {
      this.$entity.parent = this._$_parent;
    }
  }
};

var index$2 = {
  mixins: [AbstractEntity],
  props: {
    name: {
      type: String
    },
    any: {
      default: null
    },
    float: {
      validator: isFloat,
      default: null
    },
    color: {
      validator: function validator(value) {
        return color3.validator(value) || color4.validator(value);
      },
      default: null
    },
    vector: {
      validator: vecValidator,
      default: null
    },
    matrix: {
      validator: matrix.validator,
      default: null
    }
  },
  computed: {
    value: function value() {
      if (this.any) {
        return this.any;
      }
      if (this.float !== null) {
        return this.float;
      }
      if (this.color) {
        if (color4.validator(this.color)) {
          return toColor4(this.color);
        }
        return toColor3(this.color);
      }
      if (this.vector) {
        if (vec4.validator(this.vector)) {
          return toVec4(this.vector);
        }
        if (vec3.validator(this.vector)) {
          return toVec3(this.vector);
        }
        return toVec2(this.vector);
      }
      if (this.matrix) {
        return toMatrix(this.matrix);
      }
      return null;
    }
  },
  methods: {
    set: function set() {
      if (this._$_parent) {
        this._$_parent[this.name] = this.value;
      } else {
        this.$scene[this.name] = this.value;
      }
    }
  },
  watch: {
    value: function value() {
      this.set();
    }
  },
  onParent: function onParent() {
    this.set();
  }
};

var index$3 = {
  mixins: [Entity],
  props: {
    src: {
      type: String,
      default: null
    }
  },
  watch: {
    src: function src() {
      this.loadAssetContainer();
    }
  },
  methods: {
    loadAssetContainer: function loadAssetContainer() {
      var _this = this;
      return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var assetContainer;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.src) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return");
              case 2:
                _context.next = 4;
                return _this._$_sceneReady;
              case 4:
                _context.next = 6;
                return SceneLoader.LoadAssetContainerAsync(_this.src);
              case 6:
                assetContainer = _context.sent;
                _context.next = 9;
                return _this._$_parentReady;
              case 9:
                if (assetContainer.meshes.length > 1) {
                  _this.$replace(assetContainer.createRootMesh());
                } else {
                  _this.$replace(assetContainer.meshes[0]);
                }
                assetContainer.addAllToScene();
              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  mounted: function mounted() {
    this.loadAssetContainer();
  }
};

var STANDARD = 'standard';
var PBR = 'pbr';
var validator$1 = color3.validator;
var index$4 = {
  mixins: [AbstractEntity],
  props: {
    diffuse: {
      validator: validator$1,
      default: function _default() {
        return new Color3(1, 1, 1);
      }
    },
    specular: {
      validator: validator$1,
      default: function _default() {
        return new Color3(1, 1, 1);
      }
    },
    emissive: {
      validator: validator$1,
      default: function _default() {
        return new Color3(0, 0, 0);
      }
    },
    ambient: {
      validator: validator$1,
      default: function _default() {
        return new Color3(0, 0, 0);
      }
    },
    reflection: {
      validator: validator$1,
      default: function _default() {
        return new Color3(1, 1, 1);
      }
    },
    alpha: {
      type: Number,
      default: 1
    },
    metallic: {
      type: Number,
      default: null
    },
    roughness: {
      type: Number,
      default: null
    },
    glossiness: {
      type: Number,
      default: null
    },
    indexOfRefraction: {
      type: Number,
      default: 0.66
    }
  },
  computed: {
    type: function type() {
      if (this.glossiness !== null || this.metallic !== null || this.roughness !== null) {
        return PBR;
      }
      return STANDARD;
    },
    diffuseColor3: function diffuseColor3() {
      return toColor3(this.diffuse);
    },
    specularColor3: function specularColor3() {
      return toColor3(this.specular);
    },
    emissiveColor3: function emissiveColor3() {
      return toColor3(this.emissive);
    },
    ambientColor3: function ambientColor3() {
      return toColor3(this.ambient);
    },
    reflectionColor3: function reflectionColor3() {
      return toColor3(this.reflection);
    }
  },
  methods: {
    createMaterial: function createMaterial(parent) {
      var entity;
      if (this.type === PBR) {
        if (this.$entity instanceof PBRMaterial) {
          return;
        }
        entity = new PBRMaterial(this.name, this.$scene);
        entity.albedoColor = this.diffuseColor3;
        entity.reflectivityColor = this.specularColor3;
        entity.reflectionColor = this.reflectionColor3;
        entity.metallic = this.metallic;
        entity.roughness = this.roughness;
        entity.microSurface = this.glossiness;
        entity.indexOfRefraction = this.indexOfRefraction;
      } else {
        if (this.$entity instanceof StandardMaterial) {
          return;
        }
        entity = new StandardMaterial(this.name, this.$scene);
        entity.diffuseColor = this.diffuseColor3;
        entity.specularColor = this.specularColor3;
      }
      entity.emissiveColor = this.emissiveColor3;
      entity.ambientColor = this.ambientColor3;
      entity.alpha = this.alpha;
      this.$replace(entity);
      parent.material = this.$entity;
    },
    getTextureName: function getTextureName(name) {
      if (this.type === STANDARD) {
        return name;
      }
      switch (name) {
        case 'baseTexture':
        case 'diffuseTexture':
          return 'albedoTexture';
        case 'metallicRoughnessTexture':
          return 'metallicTexture';
        case 'environmentTexture':
          return 'reflectionTexture';
        case 'normalTexture':
          return 'bumpTexture';
        case 'occlusionTexture':
          return 'ambientTexture';
        case 'specularGlossinessTexture':
          return 'reflectivityTexture';
        default:
          return name;
      }
    }
  },
  watch: {
    type: function type() {
      this.createMaterial(this._$_parent);
    },
    diffuseColor3: function diffuseColor3() {
      if (this.type === PBR) {
        this.$entity.albedoColor = this.diffuseColor3;
      } else {
        this.$entity.diffuseColor = this.diffuseColor3;
      }
    },
    specularColor3: function specularColor3() {
      if (this.type === PBR) {
        this.$entity.reflectivityColor = this.specularColor3;
      } else {
        this.$entity.specularColor = this.specularColor3;
      }
    },
    emissiveColor3: function emissiveColor3() {
      this.$entity.emissiveColor = this.emissiveColor3;
    },
    ambientColor3: function ambientColor3() {
      this.$entity.ambientColor = this.ambientColor3;
    },
    reflectionColor3: function reflectionColor3() {
      this.$entity.reflectionColor = this.reflectionColor3;
    },
    alpha: function alpha() {
      this.$entity.alpha = this.alpha;
    },
    metallic: function metallic() {
      this.$entity.metallic = this.metallic;
    },
    roughness: function roughness() {
      this.$entity.roughness = this.roughness;
    },
    glossiness: function glossiness() {
      this.$entity.microSurface = this.glossiness;
    },
    indexOfRefraction: function indexOfRefraction() {
      this.$entity.indexOfRefraction = this.indexOfRefraction;
    }
  },
  events: {
    setTexture: function setTexture(_ref) {
      var property = _ref.property,
          texture = _ref.texture;
      this.$entity[this.getTextureName(property)] = texture;
    },
    disposeTexture: function disposeTexture(_ref2) {
      var property = _ref2.property;
      this.$entity[this.getTextureName(property)] = null;
    }
  },
  onParent: function onParent(_ref3) {
    var parent = _ref3.parent;
    this.createMaterial(parent);
  }
};

var TYPES$2 = {
  DIFFUSE: 'diffuse',
  AMBIENT: 'ambient',
  OPACITY: 'opacity',
  REFLECTION: 'reflection',
  EMISSIVE: 'emissive',
  SPECULAR: 'specular',
  BUMP: 'bump',
  LIGHTMAP: 'lightmap',
  REFRACTION: 'refraction',
  CAMERA_COLOR_GRADING: 'cameraColorGrading',
  ALBEDO: 'albedo',
  REFLECTIVITY: 'reflectivity',
  METALLIC: 'metallic',
  MICROSURFACE: 'microSurface',
  ENVIRONMENT_BRDF: 'environmentBRDF',
  METALLIC_ROUGHNESS: 'metallicRoughness',
  ENVIRONMENT: 'environment',
  NORMAL: 'normal',
  OCCLUSION: 'occlusion',
  SPECULAR_GLOSSINESS: 'specularGlossiness'
};
var index$5 = {
  mixins: [AbstractEntity],
  props: {
    type: {
      validator: function validator(value) {
        return Object.values(TYPES$2).includes(value);
      },
      default: Object.values(TYPES$2)[0]
    },
    property: {
      type: String,
      default: null
    },
    src: {
      type: String,
      default: null
    },
    value: {
      validator: function validator(value) {
        return value instanceof Texture;
      },
      default: null
    }
  },
  computed: {
    identifier: function identifier() {
      return this.property || "".concat(this.type, "Texture");
    }
  },
  methods: {
    create: function create() {
      var texture = this.value || new Texture(this.src, this.$scene);
      this.$replace(texture);
    },
    dispose: function dispose() {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.identifier;
      this.$bus.$emit('disposeTexture', {
        property: property
      });
    },
    set: function set() {
      this.$bus.$emit('setTexture', {
        property: this.identifier,
        texture: this.$entity
      });
    },
    change: function change() {
      if (!this.$entity) {
        this.create();
      }
      this.set();
    }
  },
  watch: {
    identifier: function identifier(_, property) {
      this.dispose(property);
      this.set();
    },
    src: function src() {
      this.dispose();
      this.create();
      this.set();
    },
    value: function value() {
      this.dispose();
      this.create();
      this.set();
    }
  },
  onParent: function onParent() {
    this.$bus.$on('change', this.change);
    this.change();
  },
  beforeDestroy: function beforeDestroy() {
    this.dispose();
  }
};

var EASINGS = {
  circle: CircleEase,
  back: BackEase,
  bounce: BounceEase,
  cubic: CubicEase,
  elastic: ElasticEase,
  exponential: ExponentialEase,
  power: PowerEase,
  quadratic: QuadraticEase,
  quartic: QuarticEase,
  quintic: QuinticEase,
  sine: SineEase,
  bezierCurve: BezierCurveEase
};
var TYPES$3 = {
  FLOAT: 'float',
  VECTOR2: 'vector2',
  VECTOR3: 'vector3',
  SIZE: 'size',
  QUATERNION: 'quaternion',
  MATRIX: 'matrix',
  COLOR3: 'color3'
};
var MODES = {
  CYCLE: 'cycle',
  RELATIVE: 'relative',
  CONSTANT: 'constant'
};
var EASING_MODES = {
  IN: 'in',
  OUT: 'out',
  INOUT: 'inout'
};
var index$6 = {
  mixins: [AbstractEntity],
  data: function data() {
    return {
      keys: {}
    };
  },
  props: {
    type: {
      validator: function validator(value) {
        return Object.values(TYPES$3).includes(value);
      },
      default: Object.values(TYPES$3)[0]
    },
    mode: {
      validator: function validator(value) {
        return Object.values(MODES).includes(value);
      },
      default: Object.values(MODES)[0]
    },
    property: {
      type: String
    },
    fps: {
      type: Number,
      default: 60
    },
    from: {
      type: Number,
      default: 0
    },
    to: {
      type: Number,
      default: 60
    },
    duration: {
      type: Number,
      default: null
    },
    start: {
      default: 0
    },
    end: {
      default: 1
    },
    loop: {
      type: Boolean,
      default: true
    },
    speedRatio: {
      type: Number,
      default: 1
    },
    animatable: {
      type: Object,
      default: null
    },
    blending: {
      type: Boolean,
      default: false
    },
    blendingSpeed: {
      type: Number,
      default: null
    },
    easing: {
      validator: function validator(value) {
        return Object.values(EASINGS).includes(value);
      },
      default: null
    },
    easingMode: {
      validator: function validator(value) {
        return Object.values(EASING_MODES).includes(value);
      },
      default: Object.values(EASING_MODES)[0]
    },
    amplitude: {
      type: Number,
      default: 1
    },
    bounces: {
      type: Number,
      default: 3
    },
    bounciness: {
      type: Number,
      default: 2
    },
    oscillations: {
      type: Number,
      default: 3
    },
    springiness: {
      type: Number,
      default: 3
    },
    exponent: {
      type: Number,
      default: 2
    },
    power: {
      type: Number,
      default: 2
    },
    x1: {
      type: Number,
      default: 0.32
    },
    y1: {
      type: Number,
      default: -0.73
    },
    x2: {
      type: Number,
      default: 0.69
    },
    y2: {
      type: Number,
      default: 1.59
    }
  },
  computed: {
    easingFunction: function easingFunction() {
      if (!this.easing) {
        return null;
      }
      var easing = EASINGS[this.easing];
      var easingFunction;
      switch (this.easing) {
        case 'back':
          easingFunction = easing(this.amplitude);
          break;
        case 'bounce':
          easingFunction = easing(this.bounces, this.bounciness);
          break;
        case 'elastic':
          easingFunction = easing(this.oscillations, this.springiness);
          break;
        case 'exponential':
          easingFunction = easing(this.exponent);
          break;
        case 'power':
          easingFunction = easing(this.power);
          break;
        case 'bezierCurve':
          easingFunction = easing(this.x1, this.y1, this.x2, this.y2);
          break;
        default:
          easingFunction = easing();
      }
      easingFunction.setEasingMode(EasingFunction["EASINGMODE_EASE".concat(this.easingMode.toUpperCase())]);
      return easingFunction;
    },
    finish: function finish() {
      return this.duration ? this.duration * this.fps : this.to;
    },
    frames: function frames() {
      var _this = this;
      var keys = Object.values(this.keys);
      if (keys.length < 1) {
        return [{
          frame: this.from,
          value: this.start
        }, {
          frame: this.finish,
          value: this.end
        }];
      }
      return keys.map(function (key) {
        var frame = Number.parseFloat(key.frame);
        if (!isFloat(key.frame)) {
          frame = Math.floor(frame / 100 * _this.finish);
        }
        var out = {
          frame: frame,
          value: key.value
        };
        if (key.outTangent) {
          out.outTangent = key.outTangent;
        }
        if (key.inTangent) {
          out.inTangent = key.inTangent;
        }
        return out;
      });
    },
    animationType: function animationType() {
      return Animation["ANIMATIONTYPE_".concat(this.type.toUpperCase())];
    },
    animationLoopMode: function animationLoopMode() {
      return Animation["ANIMATIONLOOPMODE_".concat(this.mode.toUpperCase())];
    }
  },
  methods: {
    enableBlending: function enableBlending(speed) {
      this.$entity.enableBlending(speed);
    },
    disableBlending: function disableBlending() {
      this.$entity.disableBlending();
    },
    setEasingFunction: function setEasingFunction() {
      this.$entity.setEasingFunction(this.easingFunction);
    },
    setFrames: function setFrames() {
      if (this.$entity) {
        this.$entity.setKeys(this.frames);
      }
    }
  },
  watch: {
    fps: function fps() {
      this.$entity.framePerSecond = this.fps;
    },
    property: function property() {
      this.$entity.targetProperty = this.property;
    },
    animationType: function animationType() {
      this.dataType = this.animationType;
    },
    animationLoopMode: function animationLoopMode() {
      this.loopMode = this.animationLoopMode;
    },
    frames: function frames() {
      this.setFrames();
    },
    easingFunction: function easingFunction() {
      this.setEasingFunction();
    },
    speedRatio: function speedRatio() {
      this.$entity.speedRatio = this.speedRatio;
    },
    loop: function loop() {
      this.$entity.loopAnimation = this.loop;
    },
    blending: function blending() {
      if (this.blending) {
        this.enableBlending(this.blendingSpeed);
      } else {
        this.disableBlending();
      }
    }
  },
  events: {
    setKey: function setKey(_ref) {
      var name = _ref.name,
          key = _ref.key;
      this.$set(this.keys, name, key);
    },
    removeKey: function removeKey(name) {
      this.$delete(this.keys, name);
    },
    reset: function reset() {
      this.$entity.stop();
    },
    enableBlending: function enableBlending(speed) {
      this.enableBlending(speed);
    },
    disableBlending: function disableBlending() {
      this.disableBlending();
    },
    goToFrame: function goToFrame(frame) {
      this.$entity.goToFrame(frame);
    },
    pause: function pause() {
      this.$entity.pause();
    },
    restart: function restart() {
      this.$entity.restart();
    },
    stop: function stop() {
      this.$entity.stop();
    }
  },
  onScene: function onScene(_ref2) {
    var name = _ref2.name;
    return new Animation(name, this.property, this.fps, this.animationType, this.animationLoopMode);
  },
  onParent: function onParent(_ref3) {
    var _this2 = this;
    var parent = _ref3.parent,
        entity = _ref3.entity,
        scene = _ref3.scene;
    this.setEasingFunction();
    this.setFrames();
    parent.animations.push(entity);
    scene.beginAnimation(parent, this.from, this.finish, this.loop, this.speedRatio, function () {
      _this2.$event.$emit('end');
    }, this.animatable);
  }
};

var validator$2 = vec3.validator;
var key = {
  mixins: [AbstractEntity],
  props: {
    frame: {
      validator: function validator(value) {
        return isFloat(value) || isPercent(value);
      },
      default: 0
    },
    value: {
      default: 0
    },
    inTangent: {
      validator: validator$2,
      default: null
    },
    outTangent: {
      validator: validator$2,
      default: null
    }
  },
  computed: {
    key: function key() {
      return {
        frame: this.frame,
        value: this.value,
        inTangent: this.inTangent,
        outTangent: this.outTangent
      };
    }
  },
  methods: {
    setKey: function setKey() {
      this.$bus.$emit('setKey', {
        name: this.name,
        key: this.key
      });
    },
    dispose: function dispose() {
      this.$bus.$emit('disposeKey', this.name);
    }
  },
  watch: {
    key: function key() {
      this.setKey();
    }
  },
  created: function created() {
    this.setKey();
  },
  beforeDestroy: function beforeDestroy() {
    this.dispose();
  }
};

var AbstractLight = {
  mixins: [Entity],
  props: {
    diffuse: color3,
    specular: color3
  },
  computed: {
    diffuseColor3: function diffuseColor3() {
      return toColor3(this.diffuse);
    },
    specularColor3: function specularColor3() {
      return toColor3(this.specular);
    }
  },
  watch: {
    diffuseColor3: function diffuseColor3() {
      this.setDiffuse();
    },
    specularColor3: function specularColor3() {
      this.setSpecular();
    }
  },
  methods: {
    setDiffuse: function setDiffuse() {
      this.$entity.diffuse.copyFrom(this.diffuseColor3);
    },
    setSpecular: function setSpecular() {
      this.$entity.specular.copyFrom(this.specularColor3);
    }
  },
  onEntity: function onEntity() {
    this.setDiffuse();
    this.setSpecular();
  }
};

var DirectionalLight = {
  mixins: [AbstractLight],
  props: {
    direction: vec3
  },
  computed: {
    directionVector3: function directionVector3() {
      return toVec3(this.direction);
    }
  },
  watch: {
    directionVector3: function directionVector3() {
      this.setDirection();
    }
  },
  methods: {
    setDirection: function setDirection() {
      this.$entity.direction.copyFrom(this.directionVector3);
    }
  },
  onScene: function onScene(_ref) {
    var name = _ref.name,
        scene = _ref.scene;
    return new DirectionalLight$1(name, this.directionVector3, scene);
  }
};

var hemispheric = {
  mixins: [DirectionalLight],
  onScene: function onScene(_ref) {
    var name = _ref.name,
        scene = _ref.scene;
    return new HemisphericLight(name, this.directionVector3, scene);
  }
};

var point = {
  mixins: [AbstractLight],
  onScene: function onScene(_ref) {
    var name = _ref.name,
        position = _ref.position,
        scene = _ref.scene;
    return new PointLight(name, position, scene);
  }
};

var spot = {
  mixins: [DirectionalLight],
  props: {
    angle: {
      validator: isFloat,
      default: Math.PI / 2
    },
    exponent: {
      validator: isFloat,
      default: 1.5
    }
  },
  watch: {
    angle: function angle() {
      this.$entity.angle = this.angle;
    },
    exponent: function exponent() {
      this.$entity.exponent = this.exponent;
    }
  },
  onScene: function onScene(_ref) {
    var name = _ref.name,
        position = _ref.position,
        scene = _ref.scene;
    return new SpotLight(name, position, this.directionVector3, this.angle, this.exponent, scene);
  }
};

var VERTEX = 'VertexShader';
var FRAGMENT = 'FragmentShader';
var ATTRIBUTES = {
  POSITION: 'position',
  NORMAL: 'normal',
  UV: 'uv'
};
var UNIFORMS = {
  WORLD: 'world',
  WORLD_VIEW: 'worldView',
  WORLD_VIEW_PROJECTION: 'worldViewProjection',
  VIEW: 'view',
  PROJECTION: 'projection',
  TIME: 'time'
};
var NAME = 'vue-babylonjs';
var DEFAULT_VERTEX_NAME = "".concat(NAME).concat(VERTEX);
var DEFAULT_VERTEX = "\nattribute vec3 position;\nattribute vec2 uv;\nuniform mat4 worldViewProjection;\nuniform float time;\nvarying vec2 vUv;\n\nvoid main() {\n  gl_Position = worldViewProjection * vec4(position, 1.0);\n  vUv = uv;\n}\n";
var DEFAULT_FRAGMENT_NAME = "".concat(NAME).concat(FRAGMENT);
var DEFAULT_FRAGMENT = "\nprecision highp float;\n\nvoid main() {\n  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n}\n";
var index$7 = {
  mixins: [AbstractEntity],
  data: function data() {
    return {
      uniformStore: {},
      attributeStore: {},
      vertexComponent: null,
      fragmentComponent: null
    };
  },
  provide: function provide() {
    return {
      ShaderName: this.name
    };
  },
  props: {
    name: {
      type: String,
      default: null
    },
    vertex: {
      type: String,
      default: null
    },
    vertexElement: {
      type: String,
      default: null
    },
    vertexShader: {
      type: String,
      default: null
    },
    fragment: {
      type: String,
      default: null
    },
    fragmentElement: {
      type: String,
      default: null
    },
    fragmentShader: {
      type: String,
      default: null
    },
    shader: {
      type: String,
      default: null
    },
    src: {
      type: String,
      default: null
    }
  },
  computed: {
    options: function options() {
      if (this.src) {
        return this.src;
      }
      if (this.shader) {
        return {
          fragment: this.shader,
          vertex: this.shader
        };
      }
      var options = {};
      if (this.vertexComponent) {
        options.vertex = this.vertexComponent;
      } else if (this.vertex) {
        options.vertex = this.vertex;
      } else if (this.vertexElement) {
        options.vertexElement = this.vertexElement;
      } else if (this.vertexShader) {
        this.storeShader(VERTEX, this.uid, this.vertexShader);
        options.vertex = this.uid;
      } else {
        if (!Effect.ShadersStore[DEFAULT_VERTEX_NAME]) {
          Effect.ShadersStore[DEFAULT_VERTEX_NAME] = DEFAULT_VERTEX;
        }
        options.vertex = NAME;
      }
      if (this.fragmentComponent) {
        options.fragment = this.fragmentComponent;
      } else if (this.fragment) {
        options.fragment = this.fragment;
      } else if (this.fragmentElement) {
        options.fragmentElement = this.fragmentElement;
      } else if (this.fragmentShader) {
        this.storeShader(FRAGMENT, this.uid, this.fragmentShader);
        options.fragment = this.uid;
      } else {
        if (!Effect.ShadersStore[DEFAULT_FRAGMENT_NAME]) {
          Effect.ShadersStore[DEFAULT_FRAGMENT_NAME] = DEFAULT_FRAGMENT;
        }
        options.fragment = NAME;
      }
      return options;
    },
    attributes: function attributes() {
      return Object.values(ATTRIBUTES).concat(Object.keys(this.attributeStore));
    },
    uniforms: function uniforms() {
      return Object.values(UNIFORMS).concat(Object.keys(this.uniformStore));
    },
    variables: function variables() {
      return {
        attributes: this.attributes,
        uniforms: this.uniforms
      };
    }
  },
  methods: {
    createMaterial: function createMaterial() {
      if (!this._$_parent) {
        return;
      }
      this.$replace(new ShaderMaterial(this.name, this.$scene, this.options, this.variables));
      this._$_parent.material = this.$entity;
    },
    setValue: function setValue(store, variable, value) {
      this.$entity["set".concat(store[variable])](variable, value);
    },
    storeShader: function storeShader(type, name, value) {
      Effect.ShadersStore[name + type] = value;
    },
    getStore: function getStore(kind) {
      if (kind === 'attribute') {
        return this.attributeStore;
      }
      return this.uniformStore;
    }
  },
  watch: {
    options: function options() {
      this.createMaterial();
    }
  },
  events: {
    registerVariable: function registerVariable(_ref) {
      var kind = _ref.kind,
          variable = _ref.variable,
          type = _ref.type;
      this.getStore(kind)[variable] = type;
    },
    setVariable: function setVariable(_ref2) {
      var kind = _ref2.kind,
          variable = _ref2.variable,
          value = _ref2.value;
      this.setValue(this.getStore(kind), variable, value);
    },
    disposeVariable: function disposeVariable(_ref3) {
      var kind = _ref3.kind,
          variable = _ref3.variable;
      delete this.getStore(kind)[variable];
    },
    setVertex: function setVertex(_ref4) {
      var name = _ref4.name,
          value = _ref4.value;
      this.vertexComponent = name;
      this.storeShader(VERTEX, name, value);
    },
    setFragment: function setFragment(_ref5) {
      var name = _ref5.name,
          value = _ref5.value;
      this.fragmentComponent = name;
      this.storeShader(FRAGMENT, name, value);
    }
  },
  beforeCreate: function beforeCreate() {
    this.uid = id();
  },
  onParent: function onParent() {
    this.createMaterial();
  },
  beforeRender: function beforeRender() {
    this.$entity.setFloat('time', performance.now());
  },
  beforeDestroy: function beforeDestroy() {
    this._$_destroyed = true;
    this.$entity.dispose();
  }
};

var Content = {
  mixins: [AbstractEntity],
  inject: {
    ShaderName: {
      default: null
    }
  },
  data: function data() {
    return {
      text: null
    };
  },
  props: {
    name: {
      type: String,
      validator: function validator() {
        var _this = this;
        return function (value) {
          return value || _this.ShaderName;
        };
      }
    },
    content: {
      type: String,
      default: null
    }
  },
  computed: {
    uid: function uid() {
      return this.name || this.ShaderName;
    },
    value: function value() {
      return this.content || this.text;
    },
    shader: function shader() {
      return {
        name: this.uid,
        value: this.value
      };
    }
  },
  watch: {
    shader: function shader() {
      this.setStore();
    }
  },
  mounted: function mounted() {
    this.text = this.$refs.content.textContent;
    this.setStore();
  },
  render: function render(createElement) {
    return createElement('div', {
      ref: 'content'
    }, this.$slots.default);
  }
};

var vertex = {
  mixins: [Content],
  methods: {
    setStore: function setStore() {
      this.$bus.$emit('setVertex', this.shader);
    }
  }
};

var fragment = {
  mixins: [Content],
  methods: {
    setStore: function setStore() {
      this.$bus.$emit('setFragment', this.shader);
    }
  }
};

var Variable = {
  mixins: [AbstractEntity],
  props: {
    variable: {
      type: String
    },
    float: {
      validator: isFloat,
      default: null
    },
    color: {
      validator: function validator(value) {
        return color3.validator(value) || color4.validator(value);
      },
      default: null
    },
    vector: {
      validator: vecValidator,
      default: null
    },
    matrix: {
      validator: matrix.validator,
      default: null
    },
    matrix2x2: {
      type: Float32Array,
      default: null
    },
    matrix3x3: {
      type: Float32Array,
      default: null
    },
    array: {
      validator: isFloatArray,
      default: null
    }
  },
  computed: {
    details: function details() {
      var type;
      var value;
      if (this.float !== null) {
        value = this.float;
        type = 'Float';
        if (isFloatArray(this.float)) {
          type = 'Floats';
        }
      } else if (this.color) {
        if (color4.validator(this.color)) {
          value = toColor4(this.color);
          type = 'Color4';
        } else {
          value = toColor3(this.color);
          type = 'Color3';
        }
      } else if (this.vector) {
        if (vec4.validator(this.vector)) {
          value = toVec4(this.vector);
          type = 'Vector4';
        } else if (vec3.validator(this.vector)) {
          value = toVec3(this.vector);
          type = 'Vector3';
        } else {
          value = toVec2(this.vector);
          type = 'Vector2';
        }
      } else if (this.matrix) {
        value = toMatrix(this.matrix);
        type = 'Matrix';
      } else if (this.matrix2x2) {
        value = this.matrix2x2;
        type = 'Matrix2x2';
      } else if (this.matrix3x3) {
        value = this.matrix3x3;
        type = 'Matrix3x3';
      } else if (this.array) {
        value = this.array;
        type = 'Array2';
        if (value.length > 2) {
          type = 'Array3';
        }
      }
      return {
        kind: this.kind,
        variable: this.variable,
        type: type,
        value: value
      };
    }
  },
  methods: {
    register: function register() {
      this.$bus.$emit('registerVariable', this.details);
    },
    set: function set() {
      this.$bus.$emit('setVariable', this.details);
    },
    dispose: function dispose() {
      this.$bus.$emit('disposeVariable', this.details);
    }
  },
  watch: {
    details: function details() {
      this.set();
    }
  },
  onScene: function onScene() {
    return this.details;
  },
  onParent: function onParent() {
    this.register();
    this.set();
  },
  beforeDistroy: function beforeDistroy() {
    this.dispose();
  }
};

var attribute = {
  mixins: [Variable],
  beforeCreate: function beforeCreate() {
    this.kind = 'attribute';
  }
};

var uniform = {
  mixins: [Variable],
  beforeCreate: function beforeCreate() {
    this.kind = 'uniform';
  }
};

var earcut_1 = earcut;
var _default = earcut;
function earcut(data, holeIndices, dim) {
  dim = dim || 2;
  var hasHoles = holeIndices && holeIndices.length,
      outerLen = hasHoles ? holeIndices[0] * dim : data.length,
      outerNode = linkedList(data, 0, outerLen, dim, true),
      triangles = [];
  if (!outerNode || outerNode.next === outerNode.prev) return triangles;
  var minX, minY, maxX, maxY, x, y, invSize;
  if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);
  if (data.length > 80 * dim) {
    minX = maxX = data[0];
    minY = maxY = data[1];
    for (var i = dim; i < outerLen; i += dim) {
      x = data[i];
      y = data[i + 1];
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }
    invSize = Math.max(maxX - minX, maxY - minY);
    invSize = invSize !== 0 ? 1 / invSize : 0;
  }
  earcutLinked(outerNode, triangles, dim, minX, minY, invSize);
  return triangles;
}
function linkedList(data, start, end, dim, clockwise) {
  var i, last;
  if (clockwise === signedArea(data, start, end, dim) > 0) {
    for (i = start; i < end; i += dim) last = insertNode(i, data[i], data[i + 1], last);
  } else {
    for (i = end - dim; i >= start; i -= dim) last = insertNode(i, data[i], data[i + 1], last);
  }
  if (last && equals(last, last.next)) {
    removeNode(last);
    last = last.next;
  }
  return last;
}
function filterPoints(start, end) {
  if (!start) return start;
  if (!end) end = start;
  var p = start,
      again;
  do {
    again = false;
    if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
      removeNode(p);
      p = end = p.prev;
      if (p === p.next) break;
      again = true;
    } else {
      p = p.next;
    }
  } while (again || p !== end);
  return end;
}
function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
  if (!ear) return;
  if (!pass && invSize) indexCurve(ear, minX, minY, invSize);
  var stop = ear,
      prev,
      next;
  while (ear.prev !== ear.next) {
    prev = ear.prev;
    next = ear.next;
    if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
      triangles.push(prev.i / dim);
      triangles.push(ear.i / dim);
      triangles.push(next.i / dim);
      removeNode(ear);
      ear = next.next;
      stop = next.next;
      continue;
    }
    ear = next;
    if (ear === stop) {
      if (!pass) {
        earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);
      } else if (pass === 1) {
        ear = cureLocalIntersections(filterPoints(ear), triangles, dim);
        earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);
      } else if (pass === 2) {
        splitEarcut(ear, triangles, dim, minX, minY, invSize);
      }
      break;
    }
  }
}
function isEar(ear) {
  var a = ear.prev,
      b = ear,
      c = ear.next;
  if (area(a, b, c) >= 0) return false;
  var p = ear.next.next;
  while (p !== ear.prev) {
    if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
    p = p.next;
  }
  return true;
}
function isEarHashed(ear, minX, minY, invSize) {
  var a = ear.prev,
      b = ear,
      c = ear.next;
  if (area(a, b, c) >= 0) return false;
  var minTX = a.x < b.x ? a.x < c.x ? a.x : c.x : b.x < c.x ? b.x : c.x,
      minTY = a.y < b.y ? a.y < c.y ? a.y : c.y : b.y < c.y ? b.y : c.y,
      maxTX = a.x > b.x ? a.x > c.x ? a.x : c.x : b.x > c.x ? b.x : c.x,
      maxTY = a.y > b.y ? a.y > c.y ? a.y : c.y : b.y > c.y ? b.y : c.y;
  var minZ = zOrder(minTX, minTY, minX, minY, invSize),
      maxZ = zOrder(maxTX, maxTY, minX, minY, invSize);
  var p = ear.prevZ,
      n = ear.nextZ;
  while (p && p.z >= minZ && n && n.z <= maxZ) {
    if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
    p = p.prevZ;
    if (n !== ear.prev && n !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) && area(n.prev, n, n.next) >= 0) return false;
    n = n.nextZ;
  }
  while (p && p.z >= minZ) {
    if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
    p = p.prevZ;
  }
  while (n && n.z <= maxZ) {
    if (n !== ear.prev && n !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) && area(n.prev, n, n.next) >= 0) return false;
    n = n.nextZ;
  }
  return true;
}
function cureLocalIntersections(start, triangles, dim) {
  var p = start;
  do {
    var a = p.prev,
        b = p.next.next;
    if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {
      triangles.push(a.i / dim);
      triangles.push(p.i / dim);
      triangles.push(b.i / dim);
      removeNode(p);
      removeNode(p.next);
      p = start = b;
    }
    p = p.next;
  } while (p !== start);
  return filterPoints(p);
}
function splitEarcut(start, triangles, dim, minX, minY, invSize) {
  var a = start;
  do {
    var b = a.next.next;
    while (b !== a.prev) {
      if (a.i !== b.i && isValidDiagonal(a, b)) {
        var c = splitPolygon(a, b);
        a = filterPoints(a, a.next);
        c = filterPoints(c, c.next);
        earcutLinked(a, triangles, dim, minX, minY, invSize);
        earcutLinked(c, triangles, dim, minX, minY, invSize);
        return;
      }
      b = b.next;
    }
    a = a.next;
  } while (a !== start);
}
function eliminateHoles(data, holeIndices, outerNode, dim) {
  var queue = [],
      i,
      len,
      start,
      end,
      list;
  for (i = 0, len = holeIndices.length; i < len; i++) {
    start = holeIndices[i] * dim;
    end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
    list = linkedList(data, start, end, dim, false);
    if (list === list.next) list.steiner = true;
    queue.push(getLeftmost(list));
  }
  queue.sort(compareX);
  for (i = 0; i < queue.length; i++) {
    eliminateHole(queue[i], outerNode);
    outerNode = filterPoints(outerNode, outerNode.next);
  }
  return outerNode;
}
function compareX(a, b) {
  return a.x - b.x;
}
function eliminateHole(hole, outerNode) {
  outerNode = findHoleBridge(hole, outerNode);
  if (outerNode) {
    var b = splitPolygon(outerNode, hole);
    filterPoints(outerNode, outerNode.next);
    filterPoints(b, b.next);
  }
}
function findHoleBridge(hole, outerNode) {
  var p = outerNode,
      hx = hole.x,
      hy = hole.y,
      qx = -Infinity,
      m;
  do {
    if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
      var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
      if (x <= hx && x > qx) {
        qx = x;
        if (x === hx) {
          if (hy === p.y) return p;
          if (hy === p.next.y) return p.next;
        }
        m = p.x < p.next.x ? p : p.next;
      }
    }
    p = p.next;
  } while (p !== outerNode);
  if (!m) return null;
  if (hx === qx) return m;
  var stop = m,
      mx = m.x,
      my = m.y,
      tanMin = Infinity,
      tan;
  p = m;
  do {
    if (hx >= p.x && p.x >= mx && hx !== p.x && pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {
      tan = Math.abs(hy - p.y) / (hx - p.x);
      if (locallyInside(p, hole) && (tan < tanMin || tan === tanMin && (p.x > m.x || p.x === m.x && sectorContainsSector(m, p)))) {
        m = p;
        tanMin = tan;
      }
    }
    p = p.next;
  } while (p !== stop);
  return m;
}
function sectorContainsSector(m, p) {
  return area(m.prev, m, p.prev) < 0 && area(p.next, m, m.next) < 0;
}
function indexCurve(start, minX, minY, invSize) {
  var p = start;
  do {
    if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, invSize);
    p.prevZ = p.prev;
    p.nextZ = p.next;
    p = p.next;
  } while (p !== start);
  p.prevZ.nextZ = null;
  p.prevZ = null;
  sortLinked(p);
}
function sortLinked(list) {
  var i,
      p,
      q,
      e,
      tail,
      numMerges,
      pSize,
      qSize,
      inSize = 1;
  do {
    p = list;
    list = null;
    tail = null;
    numMerges = 0;
    while (p) {
      numMerges++;
      q = p;
      pSize = 0;
      for (i = 0; i < inSize; i++) {
        pSize++;
        q = q.nextZ;
        if (!q) break;
      }
      qSize = inSize;
      while (pSize > 0 || qSize > 0 && q) {
        if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
          e = p;
          p = p.nextZ;
          pSize--;
        } else {
          e = q;
          q = q.nextZ;
          qSize--;
        }
        if (tail) tail.nextZ = e;else list = e;
        e.prevZ = tail;
        tail = e;
      }
      p = q;
    }
    tail.nextZ = null;
    inSize *= 2;
  } while (numMerges > 1);
  return list;
}
function zOrder(x, y, minX, minY, invSize) {
  x = 32767 * (x - minX) * invSize;
  y = 32767 * (y - minY) * invSize;
  x = (x | x << 8) & 0x00FF00FF;
  x = (x | x << 4) & 0x0F0F0F0F;
  x = (x | x << 2) & 0x33333333;
  x = (x | x << 1) & 0x55555555;
  y = (y | y << 8) & 0x00FF00FF;
  y = (y | y << 4) & 0x0F0F0F0F;
  y = (y | y << 2) & 0x33333333;
  y = (y | y << 1) & 0x55555555;
  return x | y << 1;
}
function getLeftmost(start) {
  var p = start,
      leftmost = start;
  do {
    if (p.x < leftmost.x || p.x === leftmost.x && p.y < leftmost.y) leftmost = p;
    p = p.next;
  } while (p !== start);
  return leftmost;
}
function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
  return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 && (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 && (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
}
function isValidDiagonal(a, b) {
  return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && (
  locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && (
  area(a.prev, a, b.prev) || area(a, b.prev, b)) ||
  equals(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0);
}
function area(p, q, r) {
  return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}
function equals(p1, p2) {
  return p1.x === p2.x && p1.y === p2.y;
}
function intersects(p1, q1, p2, q2) {
  var o1 = sign(area(p1, q1, p2));
  var o2 = sign(area(p1, q1, q2));
  var o3 = sign(area(p2, q2, p1));
  var o4 = sign(area(p2, q2, q1));
  if (o1 !== o2 && o3 !== o4) return true;
  if (o1 === 0 && onSegment(p1, p2, q1)) return true;
  if (o2 === 0 && onSegment(p1, q2, q1)) return true;
  if (o3 === 0 && onSegment(p2, p1, q2)) return true;
  if (o4 === 0 && onSegment(p2, q1, q2)) return true;
  return false;
}
function onSegment(p, q, r) {
  return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
}
function sign(num) {
  return num > 0 ? 1 : num < 0 ? -1 : 0;
}
function intersectsPolygon(a, b) {
  var p = a;
  do {
    if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i && intersects(p, p.next, a, b)) return true;
    p = p.next;
  } while (p !== a);
  return false;
}
function locallyInside(a, b) {
  return area(a.prev, a, a.next) < 0 ? area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 : area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
}
function middleInside(a, b) {
  var p = a,
      inside = false,
      px = (a.x + b.x) / 2,
      py = (a.y + b.y) / 2;
  do {
    if (p.y > py !== p.next.y > py && p.next.y !== p.y && px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x) inside = !inside;
    p = p.next;
  } while (p !== a);
  return inside;
}
function splitPolygon(a, b) {
  var a2 = new Node(a.i, a.x, a.y),
      b2 = new Node(b.i, b.x, b.y),
      an = a.next,
      bp = b.prev;
  a.next = b;
  b.prev = a;
  a2.next = an;
  an.prev = a2;
  b2.next = a2;
  a2.prev = b2;
  bp.next = b2;
  b2.prev = bp;
  return b2;
}
function insertNode(i, x, y, last) {
  var p = new Node(i, x, y);
  if (!last) {
    p.prev = p;
    p.next = p;
  } else {
    p.next = last.next;
    p.prev = last;
    last.next.prev = p;
    last.next = p;
  }
  return p;
}
function removeNode(p) {
  p.next.prev = p.prev;
  p.prev.next = p.next;
  if (p.prevZ) p.prevZ.nextZ = p.nextZ;
  if (p.nextZ) p.nextZ.prevZ = p.prevZ;
}
function Node(i, x, y) {
  this.i = i;
  this.x = x;
  this.y = y;
  this.prev = null;
  this.next = null;
  this.z = null;
  this.prevZ = null;
  this.nextZ = null;
  this.steiner = false;
}
earcut.deviation = function (data, holeIndices, dim, triangles) {
  var hasHoles = holeIndices && holeIndices.length;
  var outerLen = hasHoles ? holeIndices[0] * dim : data.length;
  var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
  if (hasHoles) {
    for (var i = 0, len = holeIndices.length; i < len; i++) {
      var start = holeIndices[i] * dim;
      var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
      polygonArea -= Math.abs(signedArea(data, start, end, dim));
    }
  }
  var trianglesArea = 0;
  for (i = 0; i < triangles.length; i += 3) {
    var a = triangles[i] * dim;
    var b = triangles[i + 1] * dim;
    var c = triangles[i + 2] * dim;
    trianglesArea += Math.abs((data[a] - data[c]) * (data[b + 1] - data[a + 1]) - (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
  }
  return polygonArea === 0 && trianglesArea === 0 ? 0 : Math.abs((trianglesArea - polygonArea) / polygonArea);
};
function signedArea(data, start, end, dim) {
  var sum = 0;
  for (var i = start, j = end - dim; i < end; i += dim) {
    sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
    j = i;
  }
  return sum;
}
earcut.flatten = function (data) {
  var dim = data[0][0].length,
      result = {
    vertices: [],
    holes: [],
    dimensions: dim
  },
      holeIndex = 0;
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].length; j++) {
      for (var d = 0; d < dim; d++) result.vertices.push(data[i][j][d]);
    }
    if (i > 0) {
      holeIndex += data[i - 1].length;
      result.holes.push(holeIndex);
    }
  }
  return result;
};
earcut_1.default = _default;

var AbstractMesh = {
  mixins: [Entity],
  props: {
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  }
};

var prepare = function prepare(fn) {
  return {
    mixins: [AbstractMesh],
    onScene: function onScene(_ref) {
      var name = _ref.name,
          scene = _ref.scene;
      return fn(name, this.options, scene, earcut_1);
    }
  };
};
var Box$1 = prepare(MeshBuilder.CreateBox);
var Cylinder$1 = prepare(MeshBuilder.CreateCylinder);
var DashedLines = prepare(MeshBuilder.CreateDashedLines);
var Disc = prepare(MeshBuilder.CreateDisc);
var Ground = prepare(MeshBuilder.CreateGround);
var IcoSphere = prepare(MeshBuilder.CreateIcoSphere);
var Lathe = prepare(MeshBuilder.CreateLathe);
var Lines = prepare(MeshBuilder.CreateLines);
var LineSystem = prepare(MeshBuilder.CreateLineSystem);
var Plane$1 = prepare(MeshBuilder.CreatePlane);
var PolygonMesh = prepare(MeshBuilder.CreatePolygon);
var Polyhedron = prepare(MeshBuilder.CreatePolyhedron);
var Ribbon = prepare(MeshBuilder.CreateRibbon);
var Sphere$1 = prepare(MeshBuilder.CreateSphere);
var TiledGround = prepare(MeshBuilder.CreateTiledGround);
var Torus = prepare(MeshBuilder.CreateTorus);
var TorusKnot = prepare(MeshBuilder.CreateTorusKnot);
var Tube = prepare(MeshBuilder.CreateTube);
var ExtrudePolygon = prepare(MeshBuilder.ExtrudePolygon);
var ExtrudeShape = prepare(MeshBuilder.ExtrudeShape);
var ExtrudeShapeCustom = prepare(MeshBuilder.ExtrudeShapeCustom);

var mixins = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Scene: index,
  Camera: index$1,
  Entity: Entity,
  Property: index$2,
  Asset: index$3,
  Material: index$4,
  Texture: index$5,
  Animation: index$6,
  Key: key,
  DirectionalLight: DirectionalLight,
  HemisphericLight: hemispheric,
  PointLight: point,
  SpotLight: spot,
  Shader: index$7,
  Vertex: vertex,
  Fragment: fragment,
  Attribute: attribute,
  Uniform: uniform,
  Box: Box$1,
  Cylinder: Cylinder$1,
  DashedLines: DashedLines,
  Disc: Disc,
  Ground: Ground,
  IcoSphere: IcoSphere,
  Lathe: Lathe,
  Lines: Lines,
  LineSystem: LineSystem,
  Plane: Plane$1,
  PolygonMesh: PolygonMesh,
  Polyhedron: Polyhedron,
  Ribbon: Ribbon,
  Sphere: Sphere$1,
  TiledGround: TiledGround,
  Torus: Torus,
  TorusKnot: TorusKnot,
  Tube: Tube,
  ExtrudePolygon: ExtrudePolygon,
  ExtrudeShape: ExtrudeShape,
  ExtrudeShapeCustom: ExtrudeShapeCustom
});

function install$1(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Object.assign(Vue.prototype, {
    BABYLON: BABYLON
  });
  Object.assign(Vue, {
    BABYLON: BABYLON
  });
  install(Vue, Object.assign({
    components: Object.assign({
      Physics: Physics
    }, mixins)
  }, options));
}

var full = /*#__PURE__*/Object.freeze({
  __proto__: null,
  install: install$1,
  BABYLON: BABYLON,
  $vector: $vector,
  $color: $color,
  $matrix: $matrix
});

export default full;
export { $color, $matrix, $vector, AbstractEntity, index$6 as Animation, index$3 as Asset, attribute as Attribute, Box$1 as Box, index$1 as Camera, Physics as Cannon, Cylinder$1 as Cylinder, DashedLines, DirectionalLight, Disc, Entity, ExtrudePolygon, ExtrudeShape, ExtrudeShapeCustom, fragment as Fragment, Ground, hemispheric as HemisphericLight, IcoSphere, key as Key, Lathe, LineSystem, Lines, index$4 as Material, oimo$1 as Oimo, Plane$1 as Plane, point as PointLight, PolygonMesh, Polyhedron, index$2 as Property, Ribbon, index as Scene, index$7 as Shader, Sphere$1 as Sphere, spot as SpotLight, index$5 as Texture, TiledGround, Torus, TorusKnot, Tube, uniform as Uniform, vertex as Vertex, install, core as plugin };
