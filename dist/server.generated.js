module.exports =
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/config/config.js":
/*!*********************************!*\
  !*** ./server/config/config.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nconst config = {\n  port: process.env.PORT || 3200,\n  secret: process.env.SECRET_KEY,\n  mongodbUri: process.env.MONGODB_URI || `mongodb://localhost:27017/mernSimpleSetup`\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(config, \"config\", \"C:\\\\Users\\\\Spina\\\\Desktop\\\\top_project\\\\top_backend\\\\server\\\\config\\\\config.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/config/config.js?");

/***/ }),

/***/ "./server/controller/staff.controller.js":
/*!***********************************************!*\
  !*** ./server/controller/staff.controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _models_staff_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/staff.model */ \"./server/models/staff.model.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config */ \"./server/config/config.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_validateToken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/validateToken */ \"./server/helpers/validateToken.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst controller = {\n  create: async (req, res) => {\n    const {\n      password,\n      email,\n      username\n    } = req.body;\n    const staff = new _models_staff_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      username,\n      email,\n      password\n    });\n    staff.password = await staff.encryptPassword(staff.password);\n    await staff.save();\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign({\n      id: staff._id\n    }, _config_config__WEBPACK_IMPORTED_MODULE_3___default.a.secret, {\n      expiresIn: 60 * 60 * 24\n    });\n    res.json({\n      auth: true,\n      token\n    });\n  },\n  verifyAccess: async (req, res) => {\n    const token = req.headers['x-access-token'];\n\n    if (!token) {\n      res.status(401).json({\n        auth: false,\n        message: 'No token provided'\n      });\n    }\n\n    _helpers_validateToken__WEBPACK_IMPORTED_MODULE_4__[\"default\"].validateToken(res, token);\n    const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.verify(token, _config_config__WEBPACK_IMPORTED_MODULE_3___default.a.secret);\n    const staff = await _models_staff_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(decoded.id, {\n      password: 0\n    });\n\n    if (!staff) {\n      res.status(404).json({\n        message: 'No user found'\n      });\n    }\n\n    res.json({\n      auth: true,\n      staff\n    });\n  },\n  signIn: async (req, res) => {\n    const {\n      email,\n      password\n    } = req.body;\n    const staff = await _models_staff_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n      email: email\n    });\n\n    if (!staff) {\n      return res.status(404).json({\n        message: 'Email doesn\\'t exists'\n      });\n    }\n\n    const isValid = await staff.validatePassword(password);\n    console.log(isValid, password);\n\n    if (!isValid) {\n      return res.status(401).json({\n        auth: isValid,\n        token: null,\n        message: 'Wrong password'\n      });\n    }\n\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign({\n      id: staff._id\n    }, _config_config__WEBPACK_IMPORTED_MODULE_3___default.a.secret, {\n      expiresIn: 60 * 60 * 24\n    });\n    return res.status(200).json({\n      auth: isValid,\n      token\n    });\n  }\n};\nconst _default = controller;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(controller, \"controller\", \"C:\\\\Users\\\\Spina\\\\Desktop\\\\top_project\\\\top_backend\\\\server\\\\controller\\\\staff.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Spina\\\\Desktop\\\\top_project\\\\top_backend\\\\server\\\\controller\\\\staff.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controller/staff.controller.js?");

/***/ }),

/***/ "./server/controller/user.controller.js":
/*!**********************************************!*\
  !*** ./server/controller/user.controller.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var _helpers_dates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/dates */ \"./server/helpers/dates.js\");\n/* harmony import */ var _helpers_validateToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/validateToken */ \"./server/helpers/validateToken.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst controller = {\n  get_users: async (req, res) => {\n    //Verify if token was provided in petition\n    const token = req.headers['x-access-token'];\n    _helpers_validateToken__WEBPACK_IMPORTED_MODULE_2__[\"default\"].validateToken(res, token); //Get all users list\n\n    let users = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find();\n\n    if (!users) {\n      return res.status(404).send({\n        message: \"Not users found\"\n      });\n    }\n\n    await validateUsersStatus(users);\n    users = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find();\n    return res.status(200).json({\n      message: \"Success\",\n      users\n    });\n  },\n  create_user: async (req, res) => {\n    //Verify if token was provided in petition\n    const token = req.headers['x-access-token'];\n    _helpers_validateToken__WEBPACK_IMPORTED_MODULE_2__[\"default\"].validateToken(res, token);\n    const {\n      months,\n      name,\n      email,\n      phone,\n      plan\n    } = req.body;\n    const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      months,\n      init_membership: \"\",\n      end_membership: \"\",\n      name,\n      email,\n      phone,\n      plan\n    });\n    const dateNow = new Date();\n    user.init_membership = await user.getTimeStamp(dateNow);\n    user.end_membership = await user.sumDays(dateNow);\n    await user.save();\n    return res.status(200).json({\n      message: \"Saved\",\n      user\n    });\n  }\n};\n\nasync function validateUsersStatus(users) {\n  //Validate status of user\n  for (let user in users) {\n    let endDate = users[user].end_membership;\n    const isValidate = _helpers_dates__WEBPACK_IMPORTED_MODULE_1__[\"default\"].validateRange(endDate);\n\n    if (!isValidate) {\n      await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateOne({\n        \"_id\": users[user]._id\n      }, {\n        isActived: false\n      });\n    }\n\n    if (isValidate) {\n      await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateOne({\n        \"_id\": users[user]._id\n      }, {\n        isActived: true\n      });\n    }\n  }\n}\n\nconst _default = controller;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(controller, \"controller\", \"C:\\\\Users\\\\Spina\\\\Desktop\\\\top_project\\\\top_backend\\\\server\\\\controller\\\\user.controller.js\");\n  reactHotLoader.register(validateUsersStatus, \"validateUsersStatus\", \"C:\\\\Users\\\\Spina\\\\Desktop\\\\top_project\\\\top_backend\\\\server\\\\controller\\\\user.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Spina\\\\Desktop\\\\top_project\\\\top_backend\\\\server\\\\controller\\\\user.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controller/user.controller.js?");

/***/ }),

/***/ "./server/database.js":
/*!****************************!*\
  !*** ./server/database.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/config */ \"./server/config/config.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconsole.log(process.env.MONGODB_URI);\nmongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connect(_config_config__WEBPACK_IMPORTED_MODULE_0___default.a.mongodbUri, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n}).then(db => console.log(\"Database connected\"));\n\n//# sourceURL=webpack:///./server/database.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _webpack_config_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../webpack.config.client */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client__WEBPACK_IMPORTED_MODULE_3__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst compile = app => {\n  if (true) {\n    const compiler = webpack__WEBPACK_IMPORTED_MODULE_0___default()(_webpack_config_client__WEBPACK_IMPORTED_MODULE_3___default.a);\n    const middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default()(compiler, {\n      publicPath: _webpack_config_client__WEBPACK_IMPORTED_MODULE_3___default.a.output.publicPath\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler));\n  }\n};\n\nconst _default = {\n  compile\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"C:\\\\Users\\\\Spina\\\\Desktop\\\\top_project\\\\top_backend\\\\server\\\\devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Spina\\\\Desktop\\\\top_project\\\\top_backend\\\\server\\\\devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/helpers/dates.js":
/*!*********************************!*\
  !*** ./server/helpers/dates.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst validateDates = {\n  validateRange: fecha => {\n    const fechaSplit = fecha.split(\"-\");\n    const date = new Date();\n\n    if (fechaSplit[2] >= date.getFullYear()) {\n      if (fechaSplit[1] >= date.getMonth()) {\n        if (fechaSplit[0] >= date.getDate()) {\n          return true;\n        }\n      }\n    }\n\n    return false;\n  }\n};\nconst _default = validateDates;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(validateDates, \"validateDates\", \"C:\\\\Users\\\\Spina\\\\Desktop\\\\top_project\\\\top_backend\\\\server\\\\helpers\\\\dates.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Spina\\\\Desktop\\\\top_project\\\\top_backend\\\\server\\\\helpers\\\\dates.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/helpers/dates.js?");

/***/ }),

/***/ "./server/helpers/validateToken.js":
/*!*****************************************!*\
  !*** ./server/helpers/validateToken.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ \"./server/config/config.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst methods = {\n  validateToken: (res, token) => {\n    //Verify if token was provided in petition   \n    if (!token) {\n      return res.json({\n        auth: false,\n        message: 'No token provided'\n      });\n    } //Verify if token is valid\n\n\n    try {\n      jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.verify(token, _config_config__WEBPACK_IMPORTED_MODULE_0___default.a.secret);\n    } catch (e) {\n      if (e.message === 'invalid signature') {\n        return res.json({\n          auth: false,\n          message: 'Invalid Token'\n        });\n      }\n\n      if (e.message === 'jwt expired') {\n        return res.json({\n          auth: false,\n          message: 'Token expired'\n        });\n      }\n    }\n  }\n};\nconst _default = methods;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(methods, \"methods\", \"C:\\\\Users\\\\Spina\\\\Desktop\\\\top_project\\\\top_backend\\\\server\\\\helpers\\\\validateToken.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Spina\\\\Desktop\\\\top_project\\\\top_backend\\\\server\\\\helpers\\\\validateToken.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/helpers/validateToken.js?");

/***/ }),

/***/ "./server/models/staff.model.js":
/*!**************************************!*\
  !*** ./server/models/staff.model.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst staffSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  username: String,\n  password: String,\n  email: String\n}); //Encrypt password\n\nstaffSchema.methods.encryptPassword = async password => {\n  const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.genSalt(10);\n  return bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.hash(password, salt);\n}; //Validate Pasword\n\n\nstaffSchema.methods.validatePassword = function (password) {\n  console.log(this.password);\n  return bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.compare(password, this.password);\n};\n\nconst _default = Object(mongoose__WEBPACK_IMPORTED_MODULE_0__[\"model\"])('Staff', staffSchema);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(staffSchema, \"staffSchema\", \"C:\\\\Users\\\\Spina\\\\Desktop\\\\top_project\\\\top_backend\\\\server\\\\models\\\\staff.model.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Spina\\\\Desktop\\\\top_project\\\\top_backend\\\\server\\\\models\\\\staff.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/staff.model.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  name: String,\n  email: String,\n  phone: String,\n  plan: String,\n  isActived: {\n    type: Boolean,\n    default: true\n  },\n  init_membership: String,\n  end_membership: String,\n  months: Number\n}); //TimeStamp ex= 10-9-2021\n\nuserSchema.methods.getTimeStamp = function (date) {\n  this.timeStamp = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;\n  return this.timeStamp;\n}; //Sum days to a date\n\n\nuserSchema.methods.sumDays = function (date) {\n  date.setDate(date.getDate() + this.months * 30);\n  return this.getTimeStamp(date);\n};\n\nconst _default = Object(mongoose__WEBPACK_IMPORTED_MODULE_0__[\"model\"])(\"User\", userSchema);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(userSchema, \"userSchema\", \"C:\\\\Users\\\\Spina\\\\Desktop\\\\top_project\\\\top_backend\\\\server\\\\models\\\\user.model.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Spina\\\\Desktop\\\\top_project\\\\top_backend\\\\server\\\\models\\\\user.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/staff.routes.js":
/*!***************************************!*\
  !*** ./server/routes/staff.routes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controller_staff_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/staff.controller */ \"./server/controller/staff.controller.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route('/staff').put(_controller_staff_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create).get(_controller_staff_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].verifyAccess).post(_controller_staff_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signIn);\nconst _default = router;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:\\\\Users\\\\Spina\\\\Desktop\\\\top_project\\\\top_backend\\\\server\\\\routes\\\\staff.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Spina\\\\Desktop\\\\top_project\\\\top_backend\\\\server\\\\routes\\\\staff.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/staff.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controller_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/user.controller */ \"./server/controller/user.controller.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route(\"/users\").post(_controller_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create_user).get(_controller_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get_users);\nconst _default = router;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:\\\\Users\\\\Spina\\\\Desktop\\\\top_project\\\\top_backend\\\\server\\\\routes\\\\user.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Spina\\\\Desktop\\\\top_project\\\\top_backend\\\\server\\\\routes\\\\user.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/config */ \"./server/config/config.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database */ \"./server/database.js\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../template */ \"./template.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n/* harmony import */ var _routes_staff_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/staff.routes */ \"./server/routes/staff.routes.js\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_8__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_5___default()();\nconst CURRENT_WORKING_DIR = process.cwd(); //Middlewares\n\napp.use(express__WEBPACK_IMPORTED_MODULE_5___default.a.json());\napp.use(express__WEBPACK_IMPORTED_MODULE_5___default.a.urlencoded({\n  extended: false\n})); //Complie application with webpack, use only on npm run development\n\n_devBundle__WEBPACK_IMPORTED_MODULE_4__[\"default\"].compile(app); //Load dist folder to use static files\n\napp.use(\"/dist\", express__WEBPACK_IMPORTED_MODULE_5___default.a.static(path__WEBPACK_IMPORTED_MODULE_3___default.a.join(CURRENT_WORKING_DIR, \"./dist\"))); //Routes\n\napp.use(\"/api\", _routes_user_routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\napp.use('/api', _routes_staff_routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"]); //Send react components to browser DO NOT MOVE\n\napp.get(\"*\", (req, res) => {\n  res.status(200).send(Object(_template__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n});\napp.listen(_config_config__WEBPACK_IMPORTED_MODULE_0___default.a.port, err => {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info(`Server started on port: ${_config_config__WEBPACK_IMPORTED_MODULE_0___default.a.port}`);\n});\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"C:\\\\Users\\\\Spina\\\\Desktop\\\\top_project\\\\top_backend\\\\server\\\\server.js\");\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"C:\\\\Users\\\\Spina\\\\Desktop\\\\top_project\\\\top_backend\\\\server\\\\server.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst _default = () => {\n  return `<!doctype html>\n    <html lang=\"en\">\n    <head> \n        <meta charset= \"utf-8\" >\n        <title>TOP</title>\n        <link rel=\"icon\" href=\"favicon.ico\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />       \n        <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\">\n<link href=\"https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded&display=swap\" rel=\"stylesheet\"> \n        <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n    </head>\n    <body> \n        <div id=\"root\"></div>\n        <script type=\"text/javascript\" src=\"/dist/bundle.js\"></script> \n        <script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n        <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script>\n        <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\n    </body>\n    </html>\n    `;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Spina\\\\Desktop\\\\top_project\\\\top_backend\\\\template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: \"eval-source-map\",\n  entry: [\"webpack-hot-middleware/client?reload=true\", path.join(CURRENT_WORKING_DIR, \"./client/main.js\")],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, \"/dist\"),\n    filename: \"bundle.js\",\n    publicPath: \"/dist/\"\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: [\"babel-loader\"]\n    }, {\n      test: /\\.css?$/,\n      exclude: /node_modules/,\n      use: [\"style-loader\", \"css-loader\"]\n    }, {\n      test: /\\.(png|svg|jpg|jpeg|gif)?$/,\n      exclude: /node_modules/,\n      use: [\"file-loader\"]\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],\n  resolve: {\n    extensions: ['.js', 'jpg', 'png', 'css', 'svg'],\n    alias: {\n      \"react-dom\": \"@hot-loader/react-dom\"\n    }\n  }\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"C:\\\\Users\\\\Spina\\\\Desktop\\\\top_project\\\\top_backend\\\\webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"C:\\\\Users\\\\Spina\\\\Desktop\\\\top_project\\\\top_backend\\\\webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\Spina\\Desktop\\top_project\\top_backend\\server\\server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");\n\n//# sourceURL=webpack:///external_%22bcryptjs%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });