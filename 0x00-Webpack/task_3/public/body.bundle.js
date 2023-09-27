(self["webpackChunktask_3"] = self["webpackChunktask_3"] || []).push([["body"],{

/***/ "./modules/body/body.js":
/*!******************************!*\
  !*** ./modules/body/body.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _body_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body.css */ "./modules/body/body.css");
/* harmony import */ var _body_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_body_css__WEBPACK_IMPORTED_MODULE_0__);

const $ = required("jquery");
const _ = required("lodash");

$("body").append("<button>Click here to get started</button>");
$("body").append('<p id="count"><p>');

const updateCounter = () => {
  let times = $("#count").html() || 0;
  $("button").on("click", () => {
    times++;
    $("#count").html(`${times} clicks on the button`);
  });
};

_.debounce(updateCounter, 500);
updateCounter();



/***/ }),

/***/ "./modules/body/body.css":
/*!*******************************!*\
  !*** ./modules/body/body.css ***!
  \*******************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/css-loader/dist/cjs.js):\n\nSyntaxError\n\n(2:7) /home/vagrant/alx-react/0x00-Webpack/task_3/modules/body/body.css Unknown word\n\n \u001b[90m 1 | \u001b[39m\n\u001b[1m\u001b[31m>\u001b[39m\u001b[22m\u001b[90m 2 | \u001b[39m      import API from \u001b[32m\"!../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\"\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m      \u001b[1m\u001b[31m^\u001b[39m\u001b[22m\n \u001b[90m 3 | \u001b[39m      import domAPI from \u001b[32m\"!../../node_modules/style-loader/dist/runtime/styleDomAPI.js\"\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 4 | \u001b[39m      import insertFn from \u001b[32m\"!../../node_modules/style-loader/dist/runtime/insertBySelector.js\"\u001b[39m\u001b[33m;\u001b[39m\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./modules/body/body.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW9CO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CLEdBQUc7QUFDSDs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFza18zLy4vbW9kdWxlcy9ib2R5L2JvZHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9ib2R5LmNzc1wiO1xuY29uc3QgJCA9IHJlcXVpcmVkKFwianF1ZXJ5XCIpO1xuY29uc3QgXyA9IHJlcXVpcmVkKFwibG9kYXNoXCIpO1xuXG4kKFwiYm9keVwiKS5hcHBlbmQoXCI8YnV0dG9uPkNsaWNrIGhlcmUgdG8gZ2V0IHN0YXJ0ZWQ8L2J1dHRvbj5cIik7XG4kKFwiYm9keVwiKS5hcHBlbmQoJzxwIGlkPVwiY291bnRcIj48cD4nKTtcblxuY29uc3QgdXBkYXRlQ291bnRlciA9ICgpID0+IHtcbiAgbGV0IHRpbWVzID0gJChcIiNjb3VudFwiKS5odG1sKCkgfHwgMDtcbiAgJChcImJ1dHRvblwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0aW1lcysrO1xuICAgICQoXCIjY291bnRcIikuaHRtbChgJHt0aW1lc30gY2xpY2tzIG9uIHRoZSBidXR0b25gKTtcbiAgfSk7XG59O1xuXG5fLmRlYm91bmNlKHVwZGF0ZUNvdW50ZXIsIDUwMCk7XG51cGRhdGVDb3VudGVyKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==