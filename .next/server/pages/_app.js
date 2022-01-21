/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_ThemeConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/ThemeConfig */ \"./styles/ThemeConfig.js\");\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll-parallax */ \"react-scroll-parallax\");\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/Users/myriankatto/Dropbox/Family Room/yucacreative/website/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nconst Nav = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ \"components_Nav_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Nav */ \"./components/Nav.js\")), {\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../components/Nav */ \"./components/Nav.js\")],\n    modules: [\"_app.js -> \" + '../components/Nav']\n  }\n});\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const {\n    0: theme,\n    1: setTheme\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('dark');\n\n  const toggleTheme = () => {\n    theme == 'light' ? setTheme('dark') : setTheme('light');\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    document.documentElement.lang = 'en-us';\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    if (\"serviceWorker\" in navigator) {\n      window.addEventListener(\"load\", function () {\n        navigator.serviceWorker.register(\"/sw.js\").then(function (registration) {\n          console.log(\"Service Worker registration successful with scope: \", registration.scope);\n        }, function (err) {\n          console.log(\"Service Worker registration failed: \", err);\n        });\n      });\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n    theme: theme == 'light' ? _styles_ThemeConfig__WEBPACK_IMPORTED_MODULE_4__.lightTheme : _styles_ThemeConfig__WEBPACK_IMPORTED_MODULE_4__.darkTheme,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_5__.ParallaxProvider, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_ThemeConfig__WEBPACK_IMPORTED_MODULE_4__.GlobalStyles, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Nav, {\n        toggleTheme: toggleTheme,\n        theme: theme\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {\n        theme: theme\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this), ' ']\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL3BhZ2VzL19hcHAuanM/ZDUzMCJdLCJuYW1lcyI6WyJOYXYiLCJkeW5hbWljIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsInNldFRoZW1lIiwidXNlU3RhdGUiLCJ0b2dnbGVUaGVtZSIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwibGFuZyIsIm5hdmlnYXRvciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiLCJ0aGVuIiwicmVnaXN0cmF0aW9uIiwiY29uc29sZSIsImxvZyIsInNjb3BlIiwiZXJyIiwibGlnaHRUaGVtZSIsImRhcmtUaGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQSxNQUFNQSxHQUFHLEdBQUdDLG1EQUFPLENBQUMsTUFBTSw4SkFBUDtBQUFBO0FBQUEsd0NBQWMsOENBQWQ7QUFBQSw4QkFBYyxtQkFBZDtBQUFBO0FBQUEsRUFBbkI7O0FBRUEsU0FBU0MsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsK0NBQVEsQ0FBQyxNQUFELENBQWxDOztBQUVBLFFBQU1DLFdBQVcsR0FBRyxNQUFNO0FBQ3hCSCxTQUFLLElBQUksT0FBVCxHQUFtQkMsUUFBUSxDQUFDLE1BQUQsQ0FBM0IsR0FBc0NBLFFBQVEsQ0FBQyxPQUFELENBQTlDO0FBQ0QsR0FGRDs7QUFJQUcsa0RBQVMsQ0FBQyxNQUFNO0FBQ2RDLFlBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsSUFBekIsR0FBZ0MsT0FBaEM7QUFDRCxHQUZRLENBQVQ7QUFLQUgsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBRyxtQkFBbUJJLFNBQXRCLEVBQWlDO0FBQy9CQyxZQUFNLENBQUNDLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFlBQVk7QUFDM0NGLGlCQUFTLENBQUNHLGFBQVYsQ0FBd0JDLFFBQXhCLENBQWlDLFFBQWpDLEVBQTJDQyxJQUEzQyxDQUNHLFVBQVVDLFlBQVYsRUFBd0I7QUFDdEJDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxxREFBWixFQUFtRUYsWUFBWSxDQUFDRyxLQUFoRjtBQUNELFNBSEosRUFJRyxVQUFVQyxHQUFWLEVBQWU7QUFDYkgsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHNDQUFaLEVBQW9ERSxHQUFwRDtBQUNELFNBTko7QUFRQSxPQVREO0FBVUQ7QUFDRixHQWJRLEVBYU4sRUFiTSxDQUFUO0FBZUEsc0JBQ0UsOERBQUMsNERBQUQ7QUFBZSxTQUFLLEVBQUVsQixLQUFLLElBQUksT0FBVCxHQUFtQm1CLDJEQUFuQixHQUFnQ0MsMERBQXREO0FBQUEsMkJBQ0UsOERBQUMsbUVBQUQ7QUFBQSw4QkFDRSw4REFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyxHQUFEO0FBQUssbUJBQVcsRUFBRWpCLFdBQWxCO0FBQStCLGFBQUssRUFBRUg7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UsOERBQUMsU0FBRCxrQ0FBZUQsU0FBZjtBQUEwQixhQUFLLEVBQUVDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixFQUc2QyxHQUg3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRDs7QUFFRCwrREFBZUgsS0FBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5cbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBsaWdodFRoZW1lLCBkYXJrVGhlbWUsIEdsb2JhbFN0eWxlcyB9IGZyb20gJy4uL3N0eWxlcy9UaGVtZUNvbmZpZyc7XG5pbXBvcnQgeyBQYXJhbGxheFByb3ZpZGVyIH0gZnJvbSAncmVhY3Qtc2Nyb2xsLXBhcmFsbGF4JztcblxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuXG5jb25zdCBOYXYgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vY29tcG9uZW50cy9OYXYnKSk7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKCdkYXJrJyk7XG5cbiAgY29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XG4gICAgdGhlbWUgPT0gJ2xpZ2h0JyA/IHNldFRoZW1lKCdkYXJrJykgOiBzZXRUaGVtZSgnbGlnaHQnKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gJ2VuLXVzJztcbiAgfSk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKFwic2VydmljZVdvcmtlclwiIGluIG5hdmlnYXRvcikge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihcIi9zdy5qc1wiKS50aGVuKFxuICAgICAgICAgIGZ1bmN0aW9uIChyZWdpc3RyYXRpb24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZSBXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwgd2l0aCBzY29wZTogXCIsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2UgV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6IFwiLCBlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pXG4gIFxuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZSA9PSAnbGlnaHQnID8gbGlnaHRUaGVtZSA6IGRhcmtUaGVtZX0+XG4gICAgICA8UGFyYWxsYXhQcm92aWRlcj5cbiAgICAgICAgPEdsb2JhbFN0eWxlcyAvPlxuICAgICAgICA8TmF2IHRvZ2dsZVRoZW1lPXt0b2dnbGVUaGVtZX0gdGhlbWU9e3RoZW1lfSAvPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IHRoZW1lPXt0aGVtZX0gLz57JyAnfVxuICAgICAgPC9QYXJhbGxheFByb3ZpZGVyPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/ThemeConfig.js":
/*!*******************************!*\
  !*** ./styles/ThemeConfig.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lightTheme\": function() { return /* binding */ lightTheme; },\n/* harmony export */   \"darkTheme\": function() { return /* binding */ darkTheme; },\n/* harmony export */   \"GlobalStyles\": function() { return /* binding */ GlobalStyles; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst lightTheme = {\n  text: '#232323',\n  background: '#f6f6f3fa',\n  nav_background: '#f6f6f3f5'\n};\nconst darkTheme = {\n  text: '#f6f6f3',\n  background: '#232323',\n  nav_background: '#242424fc'\n};\nconst GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\n  body {\n    background: ${({\n  theme\n}) => theme.background};\n    color: ${({\n  theme\n}) => theme.text};\n  }\n  nav{\n    background:${({\n  theme\n}) => theme.nav_background};\n  }\n\n  }\n \n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYmxvZy8uL3N0eWxlcy9UaGVtZUNvbmZpZy5qcz9lYWM3Il0sIm5hbWVzIjpbImxpZ2h0VGhlbWUiLCJ0ZXh0IiwiYmFja2dyb3VuZCIsIm5hdl9iYWNrZ3JvdW5kIiwiZGFya1RoZW1lIiwiR2xvYmFsU3R5bGVzIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJ0aGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVPLE1BQU1BLFVBQVUsR0FBRztBQUN4QkMsTUFBSSxFQUFFLFNBRGtCO0FBRXhCQyxZQUFVLEVBQUUsV0FGWTtBQUd4QkMsZ0JBQWMsRUFBRTtBQUhRLENBQW5CO0FBTUEsTUFBTUMsU0FBUyxHQUFHO0FBQ3ZCSCxNQUFJLEVBQUUsU0FEaUI7QUFFdkJDLFlBQVUsRUFBRSxTQUZXO0FBR3ZCQyxnQkFBYyxFQUFFO0FBSE8sQ0FBbEI7QUFNQSxNQUFNRSxZQUFZLEdBQUdDLGdFQUFrQjtBQUM5QztBQUNBLGtCQUFrQixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNMLFVBQVc7QUFDbEQsYUFBYSxDQUFDO0FBQUVLO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNOLElBQUs7QUFDdkM7QUFDQTtBQUNBLGlCQUFpQixDQUFDO0FBQUVNO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNKLGNBQWU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVhPIiwiZmlsZSI6Ii4vc3R5bGVzL1RoZW1lQ29uZmlnLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBsaWdodFRoZW1lID0ge1xuICB0ZXh0OiAnIzIzMjMyMycsXG4gIGJhY2tncm91bmQ6ICcjZjZmNmYzZmEnLFxuICBuYXZfYmFja2dyb3VuZDogJyNmNmY2ZjNmNScsXG59O1xuXG5leHBvcnQgY29uc3QgZGFya1RoZW1lID0ge1xuICB0ZXh0OiAnI2Y2ZjZmMycsXG4gIGJhY2tncm91bmQ6ICcjMjMyMzIzJyxcbiAgbmF2X2JhY2tncm91bmQ6ICcjMjQyNDI0ZmMnLFxufTtcblxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmR9O1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICB9XG4gIG5hdntcbiAgICBiYWNrZ3JvdW5kOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubmF2X2JhY2tncm91bmR9O1xuICB9XG5cbiAgfVxuIFxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/ThemeConfig.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dynamic");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-icons/fa");;

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-icons/md");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-scroll-parallax":
/*!****************************************!*\
  !*** external "react-scroll-parallax" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-scroll-parallax");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();