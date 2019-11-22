(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_wangfanghua618_Documents_wyy_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _Users_wangfanghua618_Documents_wyy_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _Users_wangfanghua618_Documents_wyy_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _Users_wangfanghua618_Documents_wyy_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _Users_wangfanghua618_Documents_wyy_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var Home=/*#__PURE__*/function(_React$Component){Object(_Users_wangfanghua618_Documents_wyy_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Home,_React$Component);function Home(props){var _this;Object(_Users_wangfanghua618_Documents_wyy_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this,Home);_this=Object(_Users_wangfanghua618_Documents_wyy_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this,Object(_Users_wangfanghua618_Documents_wyy_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Home).call(this,props));_this.onToApp=function(){window.location.href='#/blog?app=PAJK&outBizType=PAJK';};_this.onChangeAge=function(){var monkey=_this.state.monkey;var info=monkey.info;// info.age = 18;
console.log("monkey===monkey",monkey===_this.state.monkey);_this.setState({monkey:monkey},function(){console.log("changedState===>",_this.state.monkey);});};_this.state={monkey:{info:{name:'monkey',age:12}}};return _this;}Object(_Users_wangfanghua618_Documents_wyy_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Home,[{key:"render",value:function render(){console.log('render-info==>',this.state);return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div",null,react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("button",{onClick:this.onToApp},"\u8DF3\u8F6C\u4E2D\u95F4\u9875"),react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("button",{onClick:this.onChangeAge},"\u66F4\u6539\u5E74\u9F84"),react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div",null,react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("span",null,"\u59D3\u540D\uFF1A"),react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("span",null,this.state.monkey.info.name)),react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div",null,react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("span",null,"\u5E74\u7EAA\uFF1A"),react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("span",null,this.state.monkey.info.age)));}}]);return Home;}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

}]);
//# sourceMappingURL=home.ccdd9160.chunk.js.map