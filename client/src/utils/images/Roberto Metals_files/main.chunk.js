(this["webpackJsonproberto-metals"] = this["webpackJsonproberto-metals"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_images_copper_bg_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/images/copper_bg.jpeg */ "./src/utils/images/copper_bg.jpeg");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_utils_images_copper_bg_jpeg__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n  --primary: #274228;\n  --secondary: #276575;\n  --tertiary: #b2c2c1;\n  --quatrinary: #cadbda;\n  --light: #e1f5f4;\n  --dark: #6c7575;\n  --error: rgb(228, 46, 1);\n  --border-radius: 0.3rem;\n  --spacing-one: calc(1rem * 0.25);\n  --spacing-two: calc(1rem * 0.5);\n  --spacing-three: 1rem;\n  --spacing-four: calc(1rem * 1.5);\n  --spacing-five: calc(1rem * 3);\n}\n\n* {\n  box-sizing: border-box;\n}\n.rapid-green-color {\n  color: #8cc63f\n}\nhtml,\nbody {\n  min-height: 100%;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: 'Inconsolata', monospace;\n  font-weight: 400;\n  line-height: 1.5;\n  font-size: 20px;\n  color: var(--dark);\n  /* background-color: #f3fffee1; */\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed;\n  background-size: cover;\n}\n.copper-bg {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-attachment: static;\n  width: 100%;\n  height: 100vh;\n}\n\n.logo {\n  height: 100px;\n\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: 'Karla', sans-serif;\n  font-weight: 700;\n  margin: 5px 0;\n  line-height: 1.25;\n}\n\nh1 {\n  font-size: 2.25rem;\n}\n\nh2 {\n  font-size: 2rem;\n}\n\nh3 {\n  font-size: 1.75rem;\n}\n\nh4 {\n  font-size: 1.5rem;\n}\n\nh5 {\n  font-size: 1.25rem;\n}\n\nh6 {\n  font-size: 1rem;\n}\n\np {\n  font-size: 1.1rem;\n  margin-top: 0;\n}\n\na {\n  color: var(--dark);\n  text-decoration: none;\n}\n\na:visited {\n  color: inherit;\n}\n\nnav {\n  width: 100%;\n  justify-content: center;\n}\n\nnav a {\n  padding: 6px 10px;\n  margin: 0 15px;\n  transition: all 0.2s;\n}\n\nnav a:hover {\n  color: var(--secondary);\n  background-color: var(--dark);\n}\n\n.page-title {\n  text-align: center;\n  width: 100%;\n  margin: 0;\n  font-size: 2.5rem;\n}\n\n.btn,\n.pill {\n  font-size: 1.3rem;\n  text-decoration: none;\n  padding: 0.5rem 1.2rem;\n  margin: 5px 0;\n  border-radius: var(--border-radius);\n  border: none;\n  color: var(--dark);\n  outline: none;\n  background-color: var(--secondary);\n  transition: all 0.5s;\n}\n\n.btn:hover,\n.pill:hover {\n  color: var(--secondary);\n  background-color: var(--dark);\n}\n\n.btn-inline {\n  display: inline;\n}\n /* Modal content */\n.modal-container {\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  z-index: 99;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.modal-content {\n  background-color: #f4f4f4;\n  margin: 50px auto;\n  width: 467px;\n  height: 400px;\n  max-width: 100%;\n  max-height: 100%;\n  border: 1px solid #ccc;\n  padding: 40px 60px;\n  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);\n}\n/* CARDS */\n.card {\n  margin: 20px;\n  border: 3px solid var(--dark);\n  border-radius: var(--border-radius);\n  background-color: var(--light);\n  color: var(--dark);\n}\n\n.card-header {\n  color: #8cc63f;\n  margin: 0;\n  width: 100%;\n  background-color: var(--dark);\n  padding: 0.625rem;\n  border-radius: calc(0.18rem - 1px) calc(0.18rem - 1px) 0 0;\n}\n\n.card-body {\n  padding: 2.5%;\n  font-size: 1.4rem;\n}\n\n/* FORM */\n.form-label,\n.form-input,\n.form-textarea {\n  display: block;\n}\n\n.form-label {\n  font-size: 1.2rem;\n  margin: 0.625rem 0 0.25rem;\n}\n\n.form-input {\n  width: 100%;\n  padding: 0.75rem;\n  margin: 0.2rem 0;\n  font-size: 1.2rem;\n  border: 2px solid var(--dark);\n  border-radius: var(--border-radius);\n}\n\n[type='radio']:checked,\n[type='radio']:not(:checked) {\n  position: absolute;\n  left: -9999px;\n}\n[type='radio']:checked + label,\n[type='radio']:not(:checked) + label {\n  position: relative;\n  padding-left: 25px;\n  cursor: pointer;\n  line-height: 20px;\n  display: inline-block;\n  color: var(--secondary);\n  margin-right: 0.2rem;\n}\n\n[type='radio']:checked + label:before,\n[type='radio']:not(:checked) + label:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 18px;\n  height: 18px;\n  border: 2px solid var(--secondary);\n  border-radius: 100%;\n  background: #fff;\n}\n[type='radio']:checked + label:after,\n[type='radio']:not(:checked) + label:after {\n  content: '';\n  width: 12px;\n  height: 12px;\n  background-color: var(--secondary);\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  border-radius: 100%;\n  transition: all 0.2s ease;\n}\n\n[type='radio']:not(:checked) + label:after {\n  opacity: 0;\n  transform: scale(0);\n}\n\n[type='radio']:checked + label:after {\n  opacity: 1;\n  transform: scale(1);\n}\n\n/* LAYOUT */\n.container {\n  width: 85%;\n  max-width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.container-fluid {\n  width: 92%;\n}\n\n/* DISPLAY */\n.display-none {\n  display: none;\n}\n\n.display-block {\n  display: block;\n}\n\n.display-inline-block {\n  display: inline-block;\n}\n\n.display-inline {\n  display: inline;\n}\n\n/* HEIGHT / WIDTH UTILS */\n.w-100 {\n  width: 100%;\n}\n\n.w-75 {\n  width: 75%;\n}\n\n.w-50 {\n  width: 50%;\n}\n\n.w-25 {\n  width: 25%;\n}\n\n.min-100-vh {\n  min-height: 100vh;\n}\n\n.min-100-vw {\n  min-width: 100vw;\n}\n\n/* MARGIN/PADDING UTILS */\n\n/* Margin - all sides */\n.m-0 {\n  margin: 0;\n}\n\n.m-1 {\n  margin: var(--spacing-one);\n}\n\n.m-2 {\n  margin: var(--spacing-two);\n}\n\n.m-3 {\n  margin: var(--spacing-three);\n}\n\n.m-4 {\n  margin: var(--spacing-four);\n}\n\n.m-5 {\n  margin: var(--spacing-five);\n}\n\n.m-auto {\n  margin: auto;\n}\n\n/* Margin-bottom */\n\n.mb-0 {\n  margin-bottom: 0;\n}\n\n.mb-1 {\n  margin-bottom: var(--spacing-one);\n}\n\n.mb-2 {\n  margin-bottom: var(--spacing-two);\n}\n\n.mb-3 {\n  margin-bottom: var(--spacing-three);\n}\n\n.mb-4 {\n  margin-bottom: var(--spacing-four);\n}\n\n.mb-5 {\n  margin-bottom: var(--spacing-five);\n}\n\n.mb-auto {\n  margin-bottom: auto;\n}\n\n/* Margin-top */\n\n.mt-0 {\n  margin-top: 0;\n}\n\n.mt-1 {\n  margin-top: var(--spacing-one);\n}\n\n.mt-2 {\n  margin-top: var(--spacing-two);\n}\n\n.mt-3 {\n  margin-top: var(--spacing-three);\n}\n\n.mt-4 {\n  margin-top: var(--spacing-four);\n}\n\n.mt-5 {\n  margin-top: var(--spacing-five);\n}\n\n.mt-auto {\n  margin-top: auto;\n}\n\n/* Margin-right */\n\n.mr-0 {\n  margin-right: 0;\n}\n\n.mr-1 {\n  margin-right: var(--spacing-one);\n}\n\n.mr-2 {\n  margin-right: var(--spacing-two);\n}\n\n.mr-3 {\n  margin-right: var(--spacing-three);\n}\n\n.mr-4 {\n  margin-right: var(--spacing-four);\n}\n\n.mr-5 {\n  margin-right: var(--spacing-five);\n}\n\n.mr-auto {\n  margin-right: auto;\n}\n\n/* Margin-left */\n\n.ml-0 {\n  margin-left: 0;\n}\n\n.ml-1 {\n  margin-left: var(--spacing-one);\n}\n\n.ml-2 {\n  margin-left: var(--spacing-two);\n}\n\n.ml-3 {\n  margin-left: var(--spacing-three);\n}\n\n.ml-4 {\n  margin-left: var(--spacing-four);\n}\n\n.ml-5 {\n  margin-left: var(--spacing-five);\n}\n\n.ml-auto {\n  margin-left: auto;\n}\n\n/* Margin - x axis */\n\n.mx-0 {\n  margin-right: 0;\n  margin-left: 0;\n}\n\n.mx-1 {\n  margin-right: var(--spacing-one);\n  margin-left: var(--spacing-one);\n}\n\n.mx-2 {\n  margin-right: var(--spacing-two);\n  margin-left: var(--spacing-two);\n}\n\n.mx-3 {\n  margin-right: var(--spacing-three);\n  margin-left: var(--spacing-three);\n}\n\n.mx-4 {\n  margin-right: var(--spacing-four);\n  margin-left: var(--spacing-four);\n}\n\n.mx-5 {\n  margin-right: var(--spacing-five);\n  margin-left: var(--spacing-five);\n}\n\n.mx-auto {\n  margin-right: auto;\n  margin-left: auto;\n}\n\n/* Margin - y axis */\n\n.my-0 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.my-1 {\n  margin-top: var(--spacing-one);\n  margin-bottom: var(--spacing-one);\n}\n\n.my-2 {\n  margin-top: var(--spacing-two);\n  margin-bottom: var(--spacing-two);\n}\n\n.my-3 {\n  margin-top: var(--spacing-three);\n  margin-bottom: var(--spacing-three);\n}\n\n.my-4 {\n  margin-top: var(--spacing-four);\n  margin-bottom: var(--spacing-four);\n}\n\n.my-5 {\n  margin-top: var(--spacing-five);\n  margin-bottom: var(--spacing-five);\n}\n\n.my-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n/* Padding - all sides */\n.p-0 {\n  padding: 0;\n}\n\n.p-1 {\n  padding: var(--spacing-one);\n}\n\n.p-2 {\n  padding: var(--spacing-two);\n}\n\n.p-3 {\n  padding: var(--spacing-three);\n}\n\n.p-4 {\n  padding: var(--spacing-four);\n}\n\n.p-5 {\n  padding: var(--spacing-five);\n}\n\n.p-auto {\n  padding: auto;\n}\n\n/* padding-bottom */\n\n.pb-0 {\n  padding-bottom: 0;\n}\n\n.pb-1 {\n  padding-bottom: var(--spacing-one);\n}\n\n.pb-2 {\n  padding-bottom: var(--spacing-two);\n}\n\n.pb-3 {\n  padding-bottom: var(--spacing-three);\n}\n\n.pb-4 {\n  padding-bottom: var(--spacing-four);\n}\n\n.pb-5 {\n  padding-bottom: var(--spacing-five);\n}\n\n.pb-auto {\n  padding-bottom: auto;\n}\n\n/* padding-top */\n\n.pt-0 {\n  padding-top: 0;\n}\n\n.pt-1 {\n  padding-top: var(--spacing-one);\n}\n\n.pt-2 {\n  padding-top: var(--spacing-two);\n}\n\n.pt-3 {\n  padding-top: var(--spacing-three);\n}\n\n.pt-4 {\n  padding-top: var(--spacing-four);\n}\n\n.pt-5 {\n  padding-top: var(--spacing-five);\n}\n\n.pt-auto {\n  padding-top: auto;\n}\n\n/* padding-right */\n\n.pr-0 {\n  padding-right: 0;\n}\n\n.pr-1 {\n  padding-right: var(--spacing-one);\n}\n\n.pr-2 {\n  padding-right: var(--spacing-two);\n}\n\n.pr-3 {\n  padding-right: var(--spacing-three);\n}\n\n.pr-4 {\n  padding-right: var(--spacing-four);\n}\n\n.pr-5 {\n  padding-right: var(--spacing-five);\n}\n\n.pr-auto {\n  padding-right: auto;\n}\n\n/* padding-left */\n\n.pl-0 {\n  padding-left: 0;\n}\n\n.pl-1 {\n  padding-left: var(--spacing-one);\n}\n\n.pl-2 {\n  padding-left: var(--spacing-two);\n}\n\n.pl-3 {\n  padding-left: var(--spacing-three);\n}\n\n.pl-4 {\n  padding-left: var(--spacing-four);\n}\n\n.pl-5 {\n  padding-left: var(--spacing-five);\n}\n\n.pl-auto {\n  padding-left: auto;\n}\n\n/* padding - x axis */\n\n.px-0 {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.px-1 {\n  padding-right: var(--spacing-one);\n  padding-left: var(--spacing-one);\n}\n\n.px-2 {\n  padding-right: var(--spacing-two);\n  padding-left: var(--spacing-two);\n}\n\n.px-3 {\n  padding-right: var(--spacing-three);\n  padding-left: var(--spacing-three);\n}\n\n.px-4 {\n  padding-right: var(--spacing-four);\n  padding-left: var(--spacing-four);\n}\n\n.px-5 {\n  padding-right: var(--spacing-five);\n  padding-left: var(--spacing-five);\n}\n\n.px-auto {\n  padding-right: auto;\n  padding-left: auto;\n}\n\n/* Padding - y axis */\n\n.py-0 {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.py-1 {\n  padding-top: var(--spacing-one);\n  padding-bottom: var(--spacing-one);\n}\n\n.py-2 {\n  padding-top: var(--spacing-two);\n  padding-bottom: var(--spacing-two);\n}\n\n.py-3 {\n  padding-top: var(--spacing-three);\n  padding-bottom: var(--spacing-three);\n}\n\n.py-4 {\n  padding-top: var(--spacing-four);\n  padding-bottom: var(--spacing-four);\n}\n\n.py-5 {\n  padding-top: var(--spacing-five);\n  padding-bottom: var(--spacing-five);\n}\n\n.py-auto {\n  padding-top: auto;\n  padding-bottom: auto;\n}\n\n.float-left {\n  float: left;\n}\n\n.float-right {\n  float: right;\n}\n/* FONT UTILS */\n.text-uppercase {\n  text-transform: uppercase;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-justify {\n  text-align: justify;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-primary {\n  color: var(--primary);\n}\n\n.text-secondary {\n  color: var(--secondary);\n}\n\n.text-tertiary {\n  color: var(--tertiary);\n}\n\n.text-quatrinary {\n  color: var(--quatrinary);\n}\n\n.text-light {\n  color: var(--light);\n}\n\n.text-dark {\n  color: var(--dark);\n}\n\n.text-error {\n  color: var(--error);\n}\n\n/* BACKGROUND UTILS */\n.bg-primary {\n  background-color: var(--primary);\n}\n\n.bg-secondary {\n  background-color: var(--secondary);\n}\n\n.bg-tertiary {\n  background-color: var(--tertiary);\n}\n\n.bg-light {\n  background-color: var(--light);\n}\n\n.bg-dark {\n  background-color: var(--dark);\n}\n\n\n/* FLEX CONTENT */\n.flex-row {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.flex-column {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n}\n\n.justify-space-between {\n  justify-content: space-between;\n}\n\n.justify-space-around {\n  justify-content: space-around;\n}\n\n.justify-flex-start {\n  justify-content: flex-start;\n}\n\n.justify-flex-end {\n  justify-content: flex-end;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.align-stretch {\n  align-items: stretch;\n}\n\n.align-end {\n  align-items: flex-end;\n}\n\n.align-center {\n  align-items: center;\n}\n\n.col-auto {\n  flex-grow: 1;\n  flex-basis: 0;\n}\n\n.col-1 {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: calc(100% * 1 / 12 - 0.5%);\n}\n\n.col-2 {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: calc(100% * 2 / 12 - 0.5%);\n}\n\n.col-3 {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: calc(100% * 3 / 12 - 0.5%);\n}\n\n.col-4 {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: calc(100% * 4 / 12 - 0.5%);\n}\n\n.col-5 {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: calc(100% * 5 / 12 - 0.5%);\n}\n\n.col-6 {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: calc(100% * 6 / 12 - 0.5%);\n}\n\n.col-7 {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: calc(100% * 7 / 12 - 0.5%);\n}\n\n.col-8 {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: calc(100% * 8 / 12 - 0.5%);\n}\n\n.col-9 {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: calc(100% * 9 / 12 - 0.5%);\n}\n\n.col-10 {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: calc(100% * 10 / 12 - 0.5%);\n}\n\n.col-11 {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: calc(100% * 11 / 12 - 0.5%);\n}\n\n.col-12 {\n  flex: 0 0 100%;\n}\n\n/* col-sm */\n@media screen and (min-width: 640px) {\n  .col-sm-auto {\n    flex-grow: 1;\n    flex-basis: 0;\n  }\n\n  .col-sm-1 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 1 / 12 - 0.5%);\n  }\n\n  .col-sm-2 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 2 / 12 - 0.5%);\n  }\n\n  .col-sm-3 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 3 / 12 - 0.5%);\n  }\n\n  .col-sm-4 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 4 / 12 - 0.5%);\n  }\n\n  .col-sm-5 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 5 / 12 - 0.5%);\n  }\n\n  .col-sm-6 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 6 / 12 - 0.5%);\n  }\n\n  .col-sm-7 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 7 / 12 - 0.5%);\n  }\n\n  .col-sm-8 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 8 / 12 - 0.5%);\n  }\n\n  .col-sm-9 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 9 / 12 - 0.5%);\n  }\n\n  .col-sm-10 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 10 / 12 - 0.5%);\n  }\n\n  .col-sm-11 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 11 / 12 - 0.5%);\n  }\n\n  .col-sm-12 {\n    flex: 0 0 100%;\n  }\n\n  .justify-space-between-sm {\n    justify-content: space-between;\n  }\n\n  .justify-space-around-sm {\n    justify-content: space-around;\n  }\n\n  .justify-flex-start-sm {\n    justify-content: flex-start;\n  }\n\n  .justify-flex-end-sm {\n    justify-content: flex-end;\n  }\n\n  .justify-center-sm {\n    justify-content: center;\n  }\n\n  .align-stretch-sm {\n    align-items: stretch;\n  }\n\n  .align-end-sm {\n    align-items: flex-end;\n  }\n\n  .align-center-sm {\n    align-items: center;\n  }\n}\n\n/* col-md */\n@media screen and (min-width: 768px) {\n  .col-md-auto {\n    flex-grow: 1;\n    flex-basis: 0;\n  }\n\n  .col-md-1 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 1 / 12 - 0.5%);\n  }\n\n  .col-md-2 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 2 / 12 - 0.5%);\n  }\n\n  .col-md-3 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 3 / 12 - 0.5%);\n  }\n\n  .col-md-4 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 4 / 12 - 0.5%);\n  }\n\n  .col-md-5 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 5 / 12 - 0.5%);\n  }\n\n  .col-md-6 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 6 / 12 - 0.5%);\n  }\n\n  .col-md-7 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 7 / 12 - 0.5%);\n  }\n\n  .col-md-8 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 8 / 12 - 0.5%);\n  }\n\n  .col-md-9 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 9 / 12 - 0.5%);\n  }\n\n  .col-md-10 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 10 / 12 - 0.5%);\n  }\n\n  .col-md-11 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 11 / 12 - 0.5%);\n  }\n\n  .col-md-12 {\n    flex: 0 0 100%;\n  }\n\n  .justify-space-between-md {\n    justify-content: space-between;\n  }\n\n  .justify-space-around-md {\n    justify-content: space-around;\n  }\n\n  .justify-flex-start-md {\n    justify-content: flex-start;\n  }\n\n  .justify-flex-end-md {\n    justify-content: flex-end;\n  }\n\n  .justify-center-md {\n    justify-content: center;\n  }\n\n  .align-stretch-md {\n    align-items: stretch;\n  }\n\n  .align-end-md {\n    align-items: flex-end;\n  }\n\n  .align-center-md {\n    align-items: center;\n  }\n}\n\n/* col-lg */\n@media screen and (min-width: 992px) {\n  nav {\n    width: auto;\n    justify-content: flex-end;\n  }\n\n  .page-title {\n    width: auto;\n  }\n\n  .col-md-auto {\n    flex-grow: 1;\n    flex-basis: 0;\n  }\n\n  .col-lg-1 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 1 / 12 - 0.5%);\n  }\n\n  .col-lg-2 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 2 / 12 - 0.5%);\n  }\n\n  .col-lg-3 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 3 / 12 - 0.5%);\n  }\n\n  .col-lg-4 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 4 / 12 - 0.5%);\n  }\n\n  .col-lg-5 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 5 / 12 - 0.5%);\n  }\n\n  .col-lg-6 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 6 / 12 - 0.5%);\n  }\n\n  .col-lg-7 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 7 / 12 - 0.5%);\n  }\n\n  .col-lg-8 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 8 / 12 - 0.5%);\n  }\n\n  .col-lg-9 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 9 / 12 - 0.5%);\n  }\n\n  .col-lg-10 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 10 / 12 - 0.5%);\n  }\n\n  .col-lg-11 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 11 / 12 - 0.5%);\n  }\n\n  .col-lg-12 {\n    flex: 0 0 100%;\n  }\n\n  .justify-space-between-lg {\n    justify-content: space-between;\n  }\n\n  .justify-space-around-lg {\n    justify-content: space-around;\n  }\n\n  .justify-flex-start-lg {\n    justify-content: flex-start;\n  }\n\n  .justify-flex-end-lg {\n    justify-content: flex-end;\n  }\n\n  .justify-center-lg {\n    justify-content: center;\n  }\n\n  .align-stretch-lg {\n    align-items: stretch;\n  }\n\n  .align-end-lg {\n    align-items: flex-end;\n  }\n\n  .align-center-lg {\n    align-items: center;\n  }\n}\n\n/* col-xl */\n@media screen and (min-width: 1200px) {\n  .col-xl-1 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 1 / 12 - 0.5%);\n  }\n\n  .col-xl-2 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 2 / 12 - 0.5%);\n  }\n\n  .col-xl-3 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 3 / 12 - 0.5%);\n  }\n\n  .col-xl-4 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 4 / 12 - 0.5%);\n  }\n\n  .col-xl-5 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 5 / 12 - 0.5%);\n  }\n\n  .col-xl-6 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 6 / 12 - 0.5%);\n  }\n\n  .col-xl-7 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 7 / 12 - 0.5%);\n  }\n\n  .col-xl-8 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 8 / 12 - 0.5%);\n  }\n\n  .col-xl-9 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 9 / 12 - 0.5%);\n  }\n\n  .col-xl-10 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 10 / 12 - 0.5%);\n  }\n\n  .col-xl-11 {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% * 11 / 12 - 0.5%);\n  }\n\n  .col-xl-12 {\n    flex: 0 0 100%;\n  }\n\n  .justify-space-between-xl {\n    justify-content: space-between;\n  }\n\n  .justify-space-around-xl {\n    justify-content: space-around;\n  }\n\n  .justify-flex-start-xl {\n    justify-content: flex-start;\n  }\n\n  .justify-flex-end-xl {\n    justify-content: flex-end;\n  }\n\n  .justify-center-xl {\n    justify-content: center;\n  }\n\n  .align-stretch-xl {\n    align-items: stretch;\n  }\n\n  .align-end-xl {\n    align-items: flex-end;\n  }\n\n  .align-center-xl {\n    align-items: center;\n  }\n}\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --primary: #274228;\n  --secondary: #276575;\n  --tertiary: #b2c2c1;\n  --quatrinary: #cadbda;\n  --light: #e1f5f4;\n  --dark: #6c7575;\n  --error: rgb(228, 46, 1);\n  --border-radius: 0.3rem;\n  --spacing-one: calc(1rem * 0.25);\n  --spacing-two: calc(1rem * 0.5);\n  --spacing-three: 1rem;\n  --spacing-four: calc(1rem * 1.5);\n  --spacing-five: calc(1rem * 3);\n}\n\n* {\n  box-sizing: border-box;\n}\n.rapid-green-color {\n  color: #8cc63f\n}\nhtml,\nbody {\n  min-height: 100%;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: 'Inconsolata', monospace;\n  font-weight: 400;\n  line-height: 1.5;\n  font-size: 20px;\n  color: var(--dark);\n  /* background-color: #f3fffee1; */\n  background: url(../src/utils/images/copper_bg.jpeg) no-repeat center center fixed;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n}\n.copper-bg {\n  background-image: url(../src/utils/images/copper_bg.jpeg);\n  background-repeat: no-repeat;\n  background-attachment: static;\n  width: 100%;\n  height: 100vh;\n}\n\n.logo {\n  height: 100px;\n\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: 'Karla', sans-serif;\n  font-weight: 700;\n  margin: 5px 0;\n  line-height: 1.25;\n}\n\nh1 {\n  font-size: 2.25rem;\n}\n\nh2 {\n  font-size: 2rem;\n}\n\nh3 {\n  font-size: 1.75rem;\n}\n\nh4 {\n  font-size: 1.5rem;\n}\n\nh5 {\n  font-size: 1.25rem;\n}\n\nh6 {\n  font-size: 1rem;\n}\n\np {\n  font-size: 1.1rem;\n  margin-top: 0;\n}\n\na {\n  color: var(--dark);\n  text-decoration: none;\n}\n\na:visited {\n  color: inherit;\n}\n\nnav {\n  width: 100%;\n  justify-content: center;\n}\n\nnav a {\n  padding: 6px 10px;\n  margin: 0 15px;\n  transition: all 0.2s;\n}\n\nnav a:hover {\n  color: var(--secondary);\n  background-color: var(--dark);\n}\n\n.page-title {\n  text-align: center;\n  width: 100%;\n  margin: 0;\n  font-size: 2.5rem;\n}\n\n.btn,\n.pill {\n  font-size: 1.3rem;\n  text-decoration: none;\n  padding: 0.5rem 1.2rem;\n  margin: 5px 0;\n  border-radius: var(--border-radius);\n  border: none;\n  color: var(--dark);\n  outline: none;\n  background-color: var(--secondary);\n  transition: all 0.5s;\n}\n\n.btn:hover,\n.pill:hover {\n  color: var(--secondary);\n  background-color: var(--dark);\n}\n\n.btn-inline {\n  display: inline;\n}\n /* Modal content */\n.modal-container {\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  z-index: 99;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.modal-content {\n  background-color: #f4f4f4;\n  margin: 50px auto;\n  width: 467px;\n  height: 400px;\n  max-width: 100%;\n  max-height: 100%;\n  border: 1px solid #ccc;\n  padding: 40px 60px;\n  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);\n}\n/* CARDS */\n.card {\n  margin: 20px;\n  border: 3px solid var(--dark);\n  border-radius: var(--border-radius);\n  background-color: var(--light);\n  color: var(--dark);\n}\n\n.card-header {\n  color: #8cc63f;\n  margin: 0;\n  width: 100%;\n  background-color: var(--dark);\n  padding: 0.625rem;\n  border-radius: calc(0.18rem - 1px) calc(0.18rem - 1px) 0 0;\n}\n\n.card-body {\n  padding: 2.5%;\n  font-size: 1.4rem;\n}\n\n/* FORM */\n.form-label,\n.form-input,\n.form-textarea {\n  display: block;\n}\n\n.form-label {\n  font-size: 1.2rem;\n  margin: 0.625rem 0 0.25rem;\n}\n\n.form-input {\n  width: 100%;\n  padding: 0.75rem;\n  margin: 0.2rem 0;\n  font-size: 1.2rem;\n  border: 2px solid var(--dark);\n  border-radius: var(--border-radius);\n}\n\n[type='radio']:checked,\n[type='radio']:not(:checked) {\n  position: absolute;\n  left: -9999px;\n}\n[type='radio']:checked + label,\n[type='radio']:not(:checked) + label {\n  position: relative;\n  padding-left: 25px;\n  cursor: pointer;\n  line-height: 20px;\n  display: inline-block;\n  color: var(--secondary);\n  margin-right: 0.2rem;\n}\n\n[type='radio']:checked + label:before,\n[type='radio']:not(:checked) + label:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 18px;\n  height: 18px;\n  border: 2px solid var(--secondary);\n  border-radius: 100%;\n  background: #fff;\n}\n[type='radio']:checked + label:after,\n[type='radio']:not(:checked) + label:after {\n  content: '';\n  width: 12px;\n  height: 12px;\n  background-color: var(--secondary);\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  border-radius: 100%;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n\n[type='radio']:not(:checked) + label:after {\n  opacity: 0;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n\n[type='radio']:checked + label:after {\n  opacity: 1;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n}\n\n/* LAYOUT */\n.container {\n  width: 85%;\n  max-width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.container-fluid {\n  width: 92%;\n}\n\n/* DISPLAY */\n.display-none {\n  display: none;\n}\n\n.display-block {\n  display: block;\n}\n\n.display-inline-block {\n  display: inline-block;\n}\n\n.display-inline {\n  display: inline;\n}\n\n/* HEIGHT / WIDTH UTILS */\n.w-100 {\n  width: 100%;\n}\n\n.w-75 {\n  width: 75%;\n}\n\n.w-50 {\n  width: 50%;\n}\n\n.w-25 {\n  width: 25%;\n}\n\n.min-100-vh {\n  min-height: 100vh;\n}\n\n.min-100-vw {\n  min-width: 100vw;\n}\n\n/* MARGIN/PADDING UTILS */\n\n/* Margin - all sides */\n.m-0 {\n  margin: 0;\n}\n\n.m-1 {\n  margin: var(--spacing-one);\n}\n\n.m-2 {\n  margin: var(--spacing-two);\n}\n\n.m-3 {\n  margin: var(--spacing-three);\n}\n\n.m-4 {\n  margin: var(--spacing-four);\n}\n\n.m-5 {\n  margin: var(--spacing-five);\n}\n\n.m-auto {\n  margin: auto;\n}\n\n/* Margin-bottom */\n\n.mb-0 {\n  margin-bottom: 0;\n}\n\n.mb-1 {\n  margin-bottom: var(--spacing-one);\n}\n\n.mb-2 {\n  margin-bottom: var(--spacing-two);\n}\n\n.mb-3 {\n  margin-bottom: var(--spacing-three);\n}\n\n.mb-4 {\n  margin-bottom: var(--spacing-four);\n}\n\n.mb-5 {\n  margin-bottom: var(--spacing-five);\n}\n\n.mb-auto {\n  margin-bottom: auto;\n}\n\n/* Margin-top */\n\n.mt-0 {\n  margin-top: 0;\n}\n\n.mt-1 {\n  margin-top: var(--spacing-one);\n}\n\n.mt-2 {\n  margin-top: var(--spacing-two);\n}\n\n.mt-3 {\n  margin-top: var(--spacing-three);\n}\n\n.mt-4 {\n  margin-top: var(--spacing-four);\n}\n\n.mt-5 {\n  margin-top: var(--spacing-five);\n}\n\n.mt-auto {\n  margin-top: auto;\n}\n\n/* Margin-right */\n\n.mr-0 {\n  margin-right: 0;\n}\n\n.mr-1 {\n  margin-right: var(--spacing-one);\n}\n\n.mr-2 {\n  margin-right: var(--spacing-two);\n}\n\n.mr-3 {\n  margin-right: var(--spacing-three);\n}\n\n.mr-4 {\n  margin-right: var(--spacing-four);\n}\n\n.mr-5 {\n  margin-right: var(--spacing-five);\n}\n\n.mr-auto {\n  margin-right: auto;\n}\n\n/* Margin-left */\n\n.ml-0 {\n  margin-left: 0;\n}\n\n.ml-1 {\n  margin-left: var(--spacing-one);\n}\n\n.ml-2 {\n  margin-left: var(--spacing-two);\n}\n\n.ml-3 {\n  margin-left: var(--spacing-three);\n}\n\n.ml-4 {\n  margin-left: var(--spacing-four);\n}\n\n.ml-5 {\n  margin-left: var(--spacing-five);\n}\n\n.ml-auto {\n  margin-left: auto;\n}\n\n/* Margin - x axis */\n\n.mx-0 {\n  margin-right: 0;\n  margin-left: 0;\n}\n\n.mx-1 {\n  margin-right: var(--spacing-one);\n  margin-left: var(--spacing-one);\n}\n\n.mx-2 {\n  margin-right: var(--spacing-two);\n  margin-left: var(--spacing-two);\n}\n\n.mx-3 {\n  margin-right: var(--spacing-three);\n  margin-left: var(--spacing-three);\n}\n\n.mx-4 {\n  margin-right: var(--spacing-four);\n  margin-left: var(--spacing-four);\n}\n\n.mx-5 {\n  margin-right: var(--spacing-five);\n  margin-left: var(--spacing-five);\n}\n\n.mx-auto {\n  margin-right: auto;\n  margin-left: auto;\n}\n\n/* Margin - y axis */\n\n.my-0 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.my-1 {\n  margin-top: var(--spacing-one);\n  margin-bottom: var(--spacing-one);\n}\n\n.my-2 {\n  margin-top: var(--spacing-two);\n  margin-bottom: var(--spacing-two);\n}\n\n.my-3 {\n  margin-top: var(--spacing-three);\n  margin-bottom: var(--spacing-three);\n}\n\n.my-4 {\n  margin-top: var(--spacing-four);\n  margin-bottom: var(--spacing-four);\n}\n\n.my-5 {\n  margin-top: var(--spacing-five);\n  margin-bottom: var(--spacing-five);\n}\n\n.my-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n/* Padding - all sides */\n.p-0 {\n  padding: 0;\n}\n\n.p-1 {\n  padding: var(--spacing-one);\n}\n\n.p-2 {\n  padding: var(--spacing-two);\n}\n\n.p-3 {\n  padding: var(--spacing-three);\n}\n\n.p-4 {\n  padding: var(--spacing-four);\n}\n\n.p-5 {\n  padding: var(--spacing-five);\n}\n\n.p-auto {\n  padding: auto;\n}\n\n/* padding-bottom */\n\n.pb-0 {\n  padding-bottom: 0;\n}\n\n.pb-1 {\n  padding-bottom: var(--spacing-one);\n}\n\n.pb-2 {\n  padding-bottom: var(--spacing-two);\n}\n\n.pb-3 {\n  padding-bottom: var(--spacing-three);\n}\n\n.pb-4 {\n  padding-bottom: var(--spacing-four);\n}\n\n.pb-5 {\n  padding-bottom: var(--spacing-five);\n}\n\n.pb-auto {\n  padding-bottom: auto;\n}\n\n/* padding-top */\n\n.pt-0 {\n  padding-top: 0;\n}\n\n.pt-1 {\n  padding-top: var(--spacing-one);\n}\n\n.pt-2 {\n  padding-top: var(--spacing-two);\n}\n\n.pt-3 {\n  padding-top: var(--spacing-three);\n}\n\n.pt-4 {\n  padding-top: var(--spacing-four);\n}\n\n.pt-5 {\n  padding-top: var(--spacing-five);\n}\n\n.pt-auto {\n  padding-top: auto;\n}\n\n/* padding-right */\n\n.pr-0 {\n  padding-right: 0;\n}\n\n.pr-1 {\n  padding-right: var(--spacing-one);\n}\n\n.pr-2 {\n  padding-right: var(--spacing-two);\n}\n\n.pr-3 {\n  padding-right: var(--spacing-three);\n}\n\n.pr-4 {\n  padding-right: var(--spacing-four);\n}\n\n.pr-5 {\n  padding-right: var(--spacing-five);\n}\n\n.pr-auto {\n  padding-right: auto;\n}\n\n/* padding-left */\n\n.pl-0 {\n  padding-left: 0;\n}\n\n.pl-1 {\n  padding-left: var(--spacing-one);\n}\n\n.pl-2 {\n  padding-left: var(--spacing-two);\n}\n\n.pl-3 {\n  padding-left: var(--spacing-three);\n}\n\n.pl-4 {\n  padding-left: var(--spacing-four);\n}\n\n.pl-5 {\n  padding-left: var(--spacing-five);\n}\n\n.pl-auto {\n  padding-left: auto;\n}\n\n/* padding - x axis */\n\n.px-0 {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.px-1 {\n  padding-right: var(--spacing-one);\n  padding-left: var(--spacing-one);\n}\n\n.px-2 {\n  padding-right: var(--spacing-two);\n  padding-left: var(--spacing-two);\n}\n\n.px-3 {\n  padding-right: var(--spacing-three);\n  padding-left: var(--spacing-three);\n}\n\n.px-4 {\n  padding-right: var(--spacing-four);\n  padding-left: var(--spacing-four);\n}\n\n.px-5 {\n  padding-right: var(--spacing-five);\n  padding-left: var(--spacing-five);\n}\n\n.px-auto {\n  padding-right: auto;\n  padding-left: auto;\n}\n\n/* Padding - y axis */\n\n.py-0 {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.py-1 {\n  padding-top: var(--spacing-one);\n  padding-bottom: var(--spacing-one);\n}\n\n.py-2 {\n  padding-top: var(--spacing-two);\n  padding-bottom: var(--spacing-two);\n}\n\n.py-3 {\n  padding-top: var(--spacing-three);\n  padding-bottom: var(--spacing-three);\n}\n\n.py-4 {\n  padding-top: var(--spacing-four);\n  padding-bottom: var(--spacing-four);\n}\n\n.py-5 {\n  padding-top: var(--spacing-five);\n  padding-bottom: var(--spacing-five);\n}\n\n.py-auto {\n  padding-top: auto;\n  padding-bottom: auto;\n}\n\n.float-left {\n  float: left;\n}\n\n.float-right {\n  float: right;\n}\n/* FONT UTILS */\n.text-uppercase {\n  text-transform: uppercase;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-justify {\n  text-align: justify;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-primary {\n  color: var(--primary);\n}\n\n.text-secondary {\n  color: var(--secondary);\n}\n\n.text-tertiary {\n  color: var(--tertiary);\n}\n\n.text-quatrinary {\n  color: var(--quatrinary);\n}\n\n.text-light {\n  color: var(--light);\n}\n\n.text-dark {\n  color: var(--dark);\n}\n\n.text-error {\n  color: var(--error);\n}\n\n/* BACKGROUND UTILS */\n.bg-primary {\n  background-color: var(--primary);\n}\n\n.bg-secondary {\n  background-color: var(--secondary);\n}\n\n.bg-tertiary {\n  background-color: var(--tertiary);\n}\n\n.bg-light {\n  background-color: var(--light);\n}\n\n.bg-dark {\n  background-color: var(--dark);\n}\n\n\n/* FLEX CONTENT */\n.flex-row {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.flex-column {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n}\n\n.justify-space-between {\n  justify-content: space-between;\n}\n\n.justify-space-around {\n  justify-content: space-around;\n}\n\n.justify-flex-start {\n  justify-content: flex-start;\n}\n\n.justify-flex-end {\n  justify-content: flex-end;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.align-stretch {\n  align-items: stretch;\n}\n\n.align-end {\n  align-items: flex-end;\n}\n\n.align-center {\n  align-items: center;\n}\n\n.col-auto {\n  flex-grow: 1;\n  flex-basis: 0;\n}\n\n.col-1 {\n  flex: 0 0 calc(100% * 1 / 12 - 0.5%);\n}\n\n.col-2 {\n  flex: 0 0 calc(100% * 2 / 12 - 0.5%);\n}\n\n.col-3 {\n  flex: 0 0 calc(100% * 3 / 12 - 0.5%);\n}\n\n.col-4 {\n  flex: 0 0 calc(100% * 4 / 12 - 0.5%);\n}\n\n.col-5 {\n  flex: 0 0 calc(100% * 5 / 12 - 0.5%);\n}\n\n.col-6 {\n  flex: 0 0 calc(100% * 6 / 12 - 0.5%);\n}\n\n.col-7 {\n  flex: 0 0 calc(100% * 7 / 12 - 0.5%);\n}\n\n.col-8 {\n  flex: 0 0 calc(100% * 8 / 12 - 0.5%);\n}\n\n.col-9 {\n  flex: 0 0 calc(100% * 9 / 12 - 0.5%);\n}\n\n.col-10 {\n  flex: 0 0 calc(100% * 10 / 12 - 0.5%);\n}\n\n.col-11 {\n  flex: 0 0 calc(100% * 11 / 12 - 0.5%);\n}\n\n.col-12 {\n  flex: 0 0 100%;\n}\n\n/* col-sm */\n@media screen and (min-width: 640px) {\n  .col-sm-auto {\n    flex-grow: 1;\n    flex-basis: 0;\n  }\n\n  .col-sm-1 {\n    flex: 0 0 calc(100% * 1 / 12 - 0.5%);\n  }\n\n  .col-sm-2 {\n    flex: 0 0 calc(100% * 2 / 12 - 0.5%);\n  }\n\n  .col-sm-3 {\n    flex: 0 0 calc(100% * 3 / 12 - 0.5%);\n  }\n\n  .col-sm-4 {\n    flex: 0 0 calc(100% * 4 / 12 - 0.5%);\n  }\n\n  .col-sm-5 {\n    flex: 0 0 calc(100% * 5 / 12 - 0.5%);\n  }\n\n  .col-sm-6 {\n    flex: 0 0 calc(100% * 6 / 12 - 0.5%);\n  }\n\n  .col-sm-7 {\n    flex: 0 0 calc(100% * 7 / 12 - 0.5%);\n  }\n\n  .col-sm-8 {\n    flex: 0 0 calc(100% * 8 / 12 - 0.5%);\n  }\n\n  .col-sm-9 {\n    flex: 0 0 calc(100% * 9 / 12 - 0.5%);\n  }\n\n  .col-sm-10 {\n    flex: 0 0 calc(100% * 10 / 12 - 0.5%);\n  }\n\n  .col-sm-11 {\n    flex: 0 0 calc(100% * 11 / 12 - 0.5%);\n  }\n\n  .col-sm-12 {\n    flex: 0 0 100%;\n  }\n\n  .justify-space-between-sm {\n    justify-content: space-between;\n  }\n\n  .justify-space-around-sm {\n    justify-content: space-around;\n  }\n\n  .justify-flex-start-sm {\n    justify-content: flex-start;\n  }\n\n  .justify-flex-end-sm {\n    justify-content: flex-end;\n  }\n\n  .justify-center-sm {\n    justify-content: center;\n  }\n\n  .align-stretch-sm {\n    align-items: stretch;\n  }\n\n  .align-end-sm {\n    align-items: flex-end;\n  }\n\n  .align-center-sm {\n    align-items: center;\n  }\n}\n\n/* col-md */\n@media screen and (min-width: 768px) {\n  .col-md-auto {\n    flex-grow: 1;\n    flex-basis: 0;\n  }\n\n  .col-md-1 {\n    flex: 0 0 calc(100% * 1 / 12 - 0.5%);\n  }\n\n  .col-md-2 {\n    flex: 0 0 calc(100% * 2 / 12 - 0.5%);\n  }\n\n  .col-md-3 {\n    flex: 0 0 calc(100% * 3 / 12 - 0.5%);\n  }\n\n  .col-md-4 {\n    flex: 0 0 calc(100% * 4 / 12 - 0.5%);\n  }\n\n  .col-md-5 {\n    flex: 0 0 calc(100% * 5 / 12 - 0.5%);\n  }\n\n  .col-md-6 {\n    flex: 0 0 calc(100% * 6 / 12 - 0.5%);\n  }\n\n  .col-md-7 {\n    flex: 0 0 calc(100% * 7 / 12 - 0.5%);\n  }\n\n  .col-md-8 {\n    flex: 0 0 calc(100% * 8 / 12 - 0.5%);\n  }\n\n  .col-md-9 {\n    flex: 0 0 calc(100% * 9 / 12 - 0.5%);\n  }\n\n  .col-md-10 {\n    flex: 0 0 calc(100% * 10 / 12 - 0.5%);\n  }\n\n  .col-md-11 {\n    flex: 0 0 calc(100% * 11 / 12 - 0.5%);\n  }\n\n  .col-md-12 {\n    flex: 0 0 100%;\n  }\n\n  .justify-space-between-md {\n    justify-content: space-between;\n  }\n\n  .justify-space-around-md {\n    justify-content: space-around;\n  }\n\n  .justify-flex-start-md {\n    justify-content: flex-start;\n  }\n\n  .justify-flex-end-md {\n    justify-content: flex-end;\n  }\n\n  .justify-center-md {\n    justify-content: center;\n  }\n\n  .align-stretch-md {\n    align-items: stretch;\n  }\n\n  .align-end-md {\n    align-items: flex-end;\n  }\n\n  .align-center-md {\n    align-items: center;\n  }\n}\n\n/* col-lg */\n@media screen and (min-width: 992px) {\n  nav {\n    width: auto;\n    justify-content: flex-end;\n  }\n\n  .page-title {\n    width: auto;\n  }\n\n  .col-md-auto {\n    flex-grow: 1;\n    flex-basis: 0;\n  }\n\n  .col-lg-1 {\n    flex: 0 0 calc(100% * 1 / 12 - 0.5%);\n  }\n\n  .col-lg-2 {\n    flex: 0 0 calc(100% * 2 / 12 - 0.5%);\n  }\n\n  .col-lg-3 {\n    flex: 0 0 calc(100% * 3 / 12 - 0.5%);\n  }\n\n  .col-lg-4 {\n    flex: 0 0 calc(100% * 4 / 12 - 0.5%);\n  }\n\n  .col-lg-5 {\n    flex: 0 0 calc(100% * 5 / 12 - 0.5%);\n  }\n\n  .col-lg-6 {\n    flex: 0 0 calc(100% * 6 / 12 - 0.5%);\n  }\n\n  .col-lg-7 {\n    flex: 0 0 calc(100% * 7 / 12 - 0.5%);\n  }\n\n  .col-lg-8 {\n    flex: 0 0 calc(100% * 8 / 12 - 0.5%);\n  }\n\n  .col-lg-9 {\n    flex: 0 0 calc(100% * 9 / 12 - 0.5%);\n  }\n\n  .col-lg-10 {\n    flex: 0 0 calc(100% * 10 / 12 - 0.5%);\n  }\n\n  .col-lg-11 {\n    flex: 0 0 calc(100% * 11 / 12 - 0.5%);\n  }\n\n  .col-lg-12 {\n    flex: 0 0 100%;\n  }\n\n  .justify-space-between-lg {\n    justify-content: space-between;\n  }\n\n  .justify-space-around-lg {\n    justify-content: space-around;\n  }\n\n  .justify-flex-start-lg {\n    justify-content: flex-start;\n  }\n\n  .justify-flex-end-lg {\n    justify-content: flex-end;\n  }\n\n  .justify-center-lg {\n    justify-content: center;\n  }\n\n  .align-stretch-lg {\n    align-items: stretch;\n  }\n\n  .align-end-lg {\n    align-items: flex-end;\n  }\n\n  .align-center-lg {\n    align-items: center;\n  }\n}\n\n/* col-xl */\n@media screen and (min-width: 1200px) {\n  .col-xl-1 {\n    flex: 0 0 calc(100% * 1 / 12 - 0.5%);\n  }\n\n  .col-xl-2 {\n    flex: 0 0 calc(100% * 2 / 12 - 0.5%);\n  }\n\n  .col-xl-3 {\n    flex: 0 0 calc(100% * 3 / 12 - 0.5%);\n  }\n\n  .col-xl-4 {\n    flex: 0 0 calc(100% * 4 / 12 - 0.5%);\n  }\n\n  .col-xl-5 {\n    flex: 0 0 calc(100% * 5 / 12 - 0.5%);\n  }\n\n  .col-xl-6 {\n    flex: 0 0 calc(100% * 6 / 12 - 0.5%);\n  }\n\n  .col-xl-7 {\n    flex: 0 0 calc(100% * 7 / 12 - 0.5%);\n  }\n\n  .col-xl-8 {\n    flex: 0 0 calc(100% * 8 / 12 - 0.5%);\n  }\n\n  .col-xl-9 {\n    flex: 0 0 calc(100% * 9 / 12 - 0.5%);\n  }\n\n  .col-xl-10 {\n    flex: 0 0 calc(100% * 10 / 12 - 0.5%);\n  }\n\n  .col-xl-11 {\n    flex: 0 0 calc(100% * 11 / 12 - 0.5%);\n  }\n\n  .col-xl-12 {\n    flex: 0 0 100%;\n  }\n\n  .justify-space-between-xl {\n    justify-content: space-between;\n  }\n\n  .justify-space-around-xl {\n    justify-content: space-around;\n  }\n\n  .justify-flex-start-xl {\n    justify-content: flex-start;\n  }\n\n  .justify-flex-end-xl {\n    justify-content: flex-end;\n  }\n\n  .justify-center-xl {\n    justify-content: center;\n  }\n\n  .align-stretch-xl {\n    align-items: stretch;\n  }\n\n  .align-end-xl {\n    align-items: flex-end;\n  }\n\n  .align-center-xl {\n    align-items: center;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _pages_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Login */ "./src/pages/Login.js");
/* harmony import */ var _pages_Signup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Signup */ "./src/pages/Signup.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Home */ "./src/pages/Home.js");
/* harmony import */ var _pages_Profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/Profile */ "./src/pages/Profile.js");
/* harmony import */ var _pages_SingleTicket__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/SingleTicket */ "./src/pages/SingleTicket.js");
/* harmony import */ var _pages_NoMatch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/NoMatch */ "./src/pages/NoMatch.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/client/link/context */ "./node_modules/@apollo/client/link/context/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/bradfordanderson/Documents/CODE/UofU/final_proj/roberto-metals/client/src/App.js";











 // establish connect to back-end servers /graphql endpoint


const httpLink = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_10__["createHttpLink"])({
  uri: '/graphql'
});
const authLink = Object(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_11__["setContext"])((_, {
  headers
}) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: { ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});
const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_10__["ApolloClient"]({
  link: authLink.concat(httpLink),
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_10__["InMemoryCache"]()
});

function App() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_apollo_client__WEBPACK_IMPORTED_MODULE_10__["ApolloProvider"], {
    client: client,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
        className: "flex-column justify-flex-start min-100-vh",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
          className: "container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
              exact: true,
              path: "/",
              component: _pages_Home__WEBPACK_IMPORTED_MODULE_6__["default"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
              exact: true,
              path: "/login",
              component: _pages_Login__WEBPACK_IMPORTED_MODULE_4__["default"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
              exact: true,
              path: "/signup",
              component: _pages_Signup__WEBPACK_IMPORTED_MODULE_5__["default"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
              exact: true,
              path: "/profile/:clientName?",
              component: _pages_Profile__WEBPACK_IMPORTED_MODULE_7__["default"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
              exact: true,
              path: "/ticket/:id",
              component: _pages_SingleTicket__WEBPACK_IMPORTED_MODULE_8__["default"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
              component: _pages_NoMatch__WEBPACK_IMPORTED_MODULE_9__["default"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/EditMaterialModal/index.js":
/*!***************************************************!*\
  !*** ./src/components/EditMaterialModal/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _utils_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/queries */ "./src/utils/queries.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/bradfordanderson/Documents/CODE/UofU/final_proj/roberto-metals/client/src/components/EditMaterialModal/index.js",
    _s = __webpack_require__.$Refresh$.signature();

 // import { useMutation } from '@apollo/client';
// import { ADD_TICKET } from '../../utils/mutations';





const EditTicketModal = () => {
  _s();

  // option to add client name in form than material later
  const [clientName, setText] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''); // const [addTicket] =  (ADD_TICKET);
  // const { loading, data } = useQuery(QUERY_TICKET, {
  //     variables: { id: ticketID }
  //   });
  //   const ticket = data?.ticket || {};
  //   console.log(333, data)

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleFormSubmit = async event => {
    event.preventDefault(); // try {
    //     // add ticket to database
    //     await addTicket ({
    //         variables: { clientName }  
    //     })
    //     console.log('added new ticket')
    // } catch (e) {
    //     console.log('errrrg')
    //     console.error(e);
    // }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
      children: "New Ticket"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
      className: "flex-row justify-center justify-space-between-md align-stretch",
      onSubmit: handleFormSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
        placeholder: "Client Name",
        value: clientName,
        className: "",
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        className: "",
        type: "submit",
        children: "Add Ticket"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, undefined);
};

_s(EditTicketModal, "huub2h/BzFcB9b+yn18852x0B4k=");

_c = EditTicketModal;
/* harmony default export */ __webpack_exports__["default"] = (EditTicketModal);

var _c;

__webpack_require__.$Refresh$.register(_c, "EditTicketModal");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/bradfordanderson/Documents/CODE/UofU/final_proj/roberto-metals/client/src/components/Footer/index.js";



const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("footer", {
    className: "w-100 mt-auto bg-secondary p-4",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "container",
      children: " \xA9 2021 by Bradford Anderson "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

__webpack_require__.$Refresh$.register(_c, "Footer");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _utils_images_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/images/logo.png */ "./src/utils/images/logo.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/bradfordanderson/Documents/CODE/UofU/final_proj/roberto-metals/client/src/components/Header/index.js";





const Header = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("header", {
    className: "bg-secondary flex-row",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "rapid-green-color container flex-row justify-space-between jusitfy-center float-left",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
          children: " Roberto Metals "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
        src: _utils_images_logo_png__WEBPACK_IMPORTED_MODULE_2__["default"],
        alt: "BigCo Inc. logo",
        className: "logo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("nav", {
        className: "float-right",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          to: "/login",
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          to: "/signup",
          children: "Signup"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

__webpack_require__.$Refresh$.register(_c, "Header");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/TicketList/index.js":
/*!********************************************!*\
  !*** ./src/components/TicketList/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TicketModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TicketModal */ "./src/components/TicketModal/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/bradfordanderson/Documents/CODE/UofU/final_proj/roberto-metals/client/src/components/TicketList/index.js",
    _s = __webpack_require__.$Refresh$.signature();






const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    widht: '75%',
    transform: 'translate(-50%, -50%)'
  }
};
react_modal__WEBPACK_IMPORTED_MODULE_2___default.a.setAppElement('#root');

const TicketList = ({
  tickets,
  title
}) => {
  _s();

  // let subtitle;
  const [modalIsOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  if (!tickets.length) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h3", {
      children: " No tickets yet "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 16
    }, undefined);
  }

  console.log(1111, tickets);

  function openModal() {
    setIsOpen(true);
  } //   function afterOpenModal() {
  //     // references are now sync'd and can be accessed.
  //     subtitle.style.color = '#f00';
  //   }


  function closeModal() {
    setIsOpen(false);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
        onClick: openModal,
        children: "Add Ticket"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, {
        isOpen: modalIsOpen // onAfterOpen={afterOpenModal}
        ,
        onRequestClose: closeModal,
        style: customStyles,
        contentLabel: "Example Modal",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
            onClick: closeModal,
            children: "close"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_TicketModal__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "flex-row justify-center",
      children: tickets && tickets.map(ticket => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "card mb-3 col-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "card-header",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h3", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
              to: `/profile/${ticket.clientName}`,
              style: {
                fontWeight: 700
              },
              className: "text-light",
              children: ["Client: ", ticket.clientName]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 37
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 37
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 33
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h4", {
            children: ["Pickup Date: ", ticket.pickupDate]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 33
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h6", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
              to: `/ticket/${ticket._id}`,
              style: {
                fontWeight: 700
              },
              className: "text-light",
              children: ["Ticket Number: ", ticket._id]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 37
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 33
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 29
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "card-body",
          children: ticket.materials.map(material => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "flex-row card mb-auto pl-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
              children: ["Material: ", material.materialName]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 45
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
              children: ["Weight: ", material.quantity, " lbs"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 45
            }, undefined)]
          }, material._id, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 41
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 29
        }, undefined)]
      }, ticket._id, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 25
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, undefined);
};

_s(TicketList, "EOxo+0MXKxyCdUCTWpcfchJ0gFI=");

_c = TicketList;
/* harmony default export */ __webpack_exports__["default"] = (TicketList);

var _c;

__webpack_require__.$Refresh$.register(_c, "TicketList");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/TicketModal/index.js":
/*!*********************************************!*\
  !*** ./src/components/TicketModal/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _utils_mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/mutations */ "./src/utils/mutations.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/bradfordanderson/Documents/CODE/UofU/final_proj/roberto-metals/client/src/components/TicketModal/index.js",
    _s = __webpack_require__.$Refresh$.signature();






const TicketModal = () => {
  _s();

  // option to add client name in form than material later
  const [clientName, setText] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [addTicket] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_utils_mutations__WEBPACK_IMPORTED_MODULE_2__["ADD_TICKET"]);

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      // add ticket to database
      await addTicket({
        variables: {
          clientName
        }
      });
      console.log('added new ticket');
    } catch (e) {
      console.log('errrrg');
      console.error(e);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
      children: "New Ticket"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
      className: "flex-row justify-center justify-space-between-md align-stretch",
      onSubmit: handleFormSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
        placeholder: "Client Name",
        value: clientName,
        className: "",
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        className: "",
        type: "submit",
        children: "Add Ticket"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, undefined);
};

_s(TicketModal, "vr2kHIGwXtmlKATflyqOtXgMwnQ=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"]];
});

_c = TicketModal;
/* harmony default export */ __webpack_exports__["default"] = (TicketModal);

var _c;

__webpack_require__.$Refresh$.register(_c, "TicketModal");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/bradfordanderson/Documents/CODE/UofU/final_proj/roberto-metals/client/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_4__["default"])();

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _utils_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/queries */ "./src/utils/queries.js");
/* harmony import */ var _components_TicketList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TicketList */ "./src/components/TicketList/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/bradfordanderson/Documents/CODE/UofU/final_proj/roberto-metals/client/src/pages/Home.js",
    _s = __webpack_require__.$Refresh$.signature();







const Home = () => {
  _s();

  // use useQuery hook to make query request
  const {
    loading,
    data
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_utils_queries__WEBPACK_IMPORTED_MODULE_2__["QUERY_TICKETS"]);
  const tickets = (data === null || data === void 0 ? void 0 : data.tickets) || [];
  console.log(tickets);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("main", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "flex-row justify-space-between",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "col-12 mb-3",
        children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          children: "Loading..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 25
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_TicketList__WEBPACK_IMPORTED_MODULE_3__["default"], {
          tickets: tickets,
          title: "Tracker Sheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined);
};

_s(Home, "HasvTXHwlBNedvPpf4Gl00Z2xbw=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

__webpack_require__.$Refresh$.register(_c, "Home");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Login.js":
/*!****************************!*\
  !*** ./src/pages/Login.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _utils_mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/mutations */ "./src/utils/mutations.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/auth */ "./src/utils/auth.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/bradfordanderson/Documents/CODE/UofU/final_proj/roberto-metals/client/src/pages/Login.js",
    _s = __webpack_require__.$Refresh$.signature();







const Login = props => {
  _s();

  const [formState, setFormState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    email: '',
    password: ''
  });
  const [login, {
    error
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_utils_mutations__WEBPACK_IMPORTED_MODULE_2__["LOGIN_USER"]); // update state based on form input changes

  const handleChange = event => {
    const {
      name,
      value
    } = event.target;
    setFormState({ ...formState,
      [name]: value
    });
  }; // submit form


  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const {
        data
      } = await login({
        variables: { ...formState
        }
      });
      _utils_auth__WEBPACK_IMPORTED_MODULE_3__["default"].login(data.login.token);
      console.log('data', data);
    } catch (e) {
      console.log('errrror');
      console.error(e);
    } // clear form values


    setFormState({
      email: 'test2@test.com',
      password: 'test12345'
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("main", {
    className: "flex-row justify-center mb-4",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "col-12 col-md-6",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "card",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h4", {
          className: "card-header",
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "card-body",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("form", {
            onSubmit: handleFormSubmit,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
              className: "form-input",
              placeholder: "Your email",
              name: "email",
              type: "email",
              id: "email",
              value: formState.email,
              onChange: handleChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
              className: "form-input",
              placeholder: "******",
              name: "password",
              type: "password",
              id: "password",
              value: formState.password,
              onChange: handleChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
              className: "btn d-block w-100",
              type: "submit",
              children: "Submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, undefined), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            children: "Login failed"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 23
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, undefined);
};

_s(Login, "jxz3Tvm/8ibD2RwM3qnL/+rIC7U=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"]];
});

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

__webpack_require__.$Refresh$.register(_c, "Login");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/NoMatch.js":
/*!******************************!*\
  !*** ./src/pages/NoMatch.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/bradfordanderson/Documents/CODE/UofU/final_proj/roberto-metals/client/src/pages/NoMatch.js";



const NoMatch = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: "Oops, we couldn't find that page."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

_c = NoMatch;
/* harmony default export */ __webpack_exports__["default"] = (NoMatch);

var _c;

__webpack_require__.$Refresh$.register(_c, "NoMatch");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Profile.js":
/*!******************************!*\
  !*** ./src/pages/Profile.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_TicketList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TicketList */ "./src/components/TicketList/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _utils_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/queries */ "./src/utils/queries.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/bradfordanderson/Documents/CODE/UofU/final_proj/roberto-metals/client/src/pages/Profile.js",
    _s = __webpack_require__.$Refresh$.signature();








const Profile = props => {
  _s();

  const {
    clientName: clientName
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])();
  console.log(clientName);
  const {
    loading,
    data
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(_utils_queries__WEBPACK_IMPORTED_MODULE_4__["QUERY_CLIENT"], {
    variables: {
      clientName: clientName
    }
  });
  const client = (data === null || data === void 0 ? void 0 : data.client) || {};
  console.log('client', client);

  if (loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 12
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "flex-row mb-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h2", {
        className: "bg-dark text-secondary p-3 display-inline-block",
        children: ["Viewing ", client.clientName, "'s profile."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "flex-row justify-space-between mb-3"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};

_s(Profile, "uuZN/hwa80f23zJf2vnT+Fr+ayo=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"], _apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

_c = Profile;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

__webpack_require__.$Refresh$.register(_c, "Profile");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Signup.js":
/*!*****************************!*\
  !*** ./src/pages/Signup.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _utils_mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/mutations */ "./src/utils/mutations.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/auth */ "./src/utils/auth.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/bradfordanderson/Documents/CODE/UofU/final_proj/roberto-metals/client/src/pages/Signup.js",
    _s = __webpack_require__.$Refresh$.signature();







const Signup = () => {
  _s();

  const [formState, setFormState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    username: '',
    email: '',
    password: ''
  });
  const [addUser, {
    error
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_utils_mutations__WEBPACK_IMPORTED_MODULE_2__["ADD_USER"]); // update state based on form input changes

  const handleChange = event => {
    const {
      name,
      value
    } = event.target;
    setFormState({ ...formState,
      [name]: value
    });
  }; // submit form


  const handleFormSubmit = async event => {
    event.preventDefault(); // use try/catch instead of promises to handle errors

    try {
      // execute addUser mutation and pass in variable data from form
      const {
        data
      } = await addUser({
        variables: { ...formState
        }
      });
      _utils_auth__WEBPACK_IMPORTED_MODULE_3__["default"].login(data.addUser.token);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("main", {
    className: "flex-row justify-center mb-4",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "col-12 col-md-6",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "card",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h4", {
          className: "card-header",
          children: "Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "card-body",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("form", {
            onSubmit: handleFormSubmit,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
              className: "form-input",
              placeholder: "Your username",
              name: "username",
              type: "username",
              id: "username",
              value: formState.username,
              onChange: handleChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
              className: "form-input",
              placeholder: "Your email",
              name: "email",
              type: "email",
              id: "email",
              value: formState.email,
              onChange: handleChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
              className: "form-input",
              placeholder: "******",
              name: "password",
              type: "password",
              id: "password",
              value: formState.password,
              onChange: handleChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
              className: "btn d-block w-100",
              type: "submit",
              children: "Submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, undefined), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            children: "Sign up failed"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 23
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, undefined);
};

_s(Signup, "RRVZOk/iZWsOw4DkJh0RkPEuoAY=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"]];
});

_c = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);

var _c;

__webpack_require__.$Refresh$.register(_c, "Signup");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/SingleTicket.js":
/*!***********************************!*\
  !*** ./src/pages/SingleTicket.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_EditMaterialModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/EditMaterialModal */ "./src/components/EditMaterialModal/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _utils_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/queries */ "./src/utils/queries.js");
/* harmony import */ var _utils_mutations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/mutations */ "./src/utils/mutations.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/bradfordanderson/Documents/CODE/UofU/final_proj/roberto-metals/client/src/pages/SingleTicket.js",
    _s = __webpack_require__.$Refresh$.signature();

 // import ReactionList from '../components/ReactionList';








const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    widht: '75%',
    transform: 'translate(-50%, -50%)'
  }
};
react_modal__WEBPACK_IMPORTED_MODULE_1___default.a.setAppElement('#root');

const SingleTicket = props => {
  _s();

  const [modalIsOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [materialId, setMaterialId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    id: ticketId
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useParams"])();
  const {
    loading,
    data
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(_utils_queries__WEBPACK_IMPORTED_MODULE_5__["QUERY_TICKET"], {
    variables: {
      id: ticketId
    }
  });
  const [deleteMaterial] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_utils_mutations__WEBPACK_IMPORTED_MODULE_6__["DELETE_MATERIAL"]);
  const ticket = (data === null || data === void 0 ? void 0 : data.ticket) || {}; // const materialId = ticket.materials[0]._id || {};

  console.log('materialId', materialId);
  console.log('ticketId', ticketId);
  console.log(222, ticket);

  if (loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 12
    }, undefined);
  }

  const handleDeleteMaterial = async event => {
    // event.preventDefault();
    setMaterialId(event.target.value);
    console.log(111, materialId);

    try {
      await deleteMaterial({
        variables: {
          ticketId,
          materialId
        }
      });
      console.log(555, materialId);
      console.log('delete ticket from client side');
    } catch (e) {
      console.log('errr');
      console.error(e);
    }
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "card mb-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: " flex-row justify-space-between card-header",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
          style: {
            fontWeight: 700
          },
          className: "text-light",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h3", {
            children: [" ", ticket.clientName, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, undefined), ' ']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "card-body",
        children: ticket.materials.map(material => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "card mb-0",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            children: material._id
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            children: material.materialName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            children: material.quantity
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "flex-row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                onClick: openModal,
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
                isOpen: modalIsOpen // onAfterOpen={afterOpenModal}
                ,
                onRequestClose: closeModal,
                style: customStyles,
                contentLabel: "Example Modal",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                    onClick: closeModal,
                    children: "close"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_EditMaterialModal__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "pl-3",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                type: "text",
                value: material._id,
                onClick: handleDeleteMaterial,
                children: "Delete Material"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 15
          }, undefined)]
        }, material._id, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, undefined);
};

_s(SingleTicket, "rwSMU0BtoAXgp4BgUKpvRg+zsyA=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useParams"], _apollo_client__WEBPACK_IMPORTED_MODULE_4__["useQuery"], _apollo_client__WEBPACK_IMPORTED_MODULE_4__["useMutation"]];
});

_c = SingleTicket;
/* harmony default export */ __webpack_exports__["default"] = (SingleTicket);

var _c;

__webpack_require__.$Refresh$.register(_c, "SingleTicket");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.js")).then(({
      getCLS,
      getFID,
      getFCP,
      getLCP,
      getTTFB
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reportWebVitals);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/utils/auth.js":
/*!***************************!*\
  !*** ./src/utils/auth.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



class AuthService {
  // retrieve data saved in token
  getProfile() {
    return Object(jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(this.getToken());
  } // check if the user is still logged in


  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken(); // use type coersion to check if token is NOT undefined and the token is NOT expired

    return !!token && !this.isTokenExpired(token);
  } // check if the token has expired


  isTokenExpired(token) {
    try {
      const decoded = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(token);

      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  } // retrieve token from localStorage


  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  } // set token to localStorage and reload page to homepage


  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  } // clear token from localStorage and force logout with reload


  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token'); // this will reload the page and reset the state of the application

    window.location.assign('/');
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new AuthService());

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/utils/images/copper_bg.jpeg":
/*!*****************************************!*\
  !*** ./src/utils/images/copper_bg.jpeg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/copper_bg.d697e522.jpeg");

/***/ }),

/***/ "./src/utils/images/logo.png":
/*!***********************************!*\
  !*** ./src/utils/images/logo.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/logo.43b64337.png");

/***/ }),

/***/ "./src/utils/mutations.js":
/*!********************************!*\
  !*** ./src/utils/mutations.js ***!
  \********************************/
/*! exports provided: LOGIN_USER, ADD_USER, ADD_TICKET, ADD_MATERIAL, DELETE_MATERIAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_USER", function() { return LOGIN_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_USER", function() { return ADD_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TICKET", function() { return ADD_TICKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MATERIAL", function() { return ADD_MATERIAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_MATERIAL", function() { return DELETE_MATERIAL; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const LOGIN_USER = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
const ADD_USER = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
const ADD_TICKET = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation addTicket($clientName: String!) {
        addTicket(clientName: $clientName) {
            _id
            clientName
            pickupDate
            materials {
                _id
                materialName
                quantity
            }
        }
    }
`;
const ADD_MATERIAL = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
mutation addMaterial($ticketId: ID!, $materialName: String!, $quantity: Int!) {
  addMaterial(ticketId: $ticketId, materialName: $materialName, quantity: $quantity) {
    _id
    materials {
      _id
      materialName
      quantity
    }
  }
}
`;
const DELETE_MATERIAL = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation deleteMaterial($ticketId: ID!, $materialId: ID!) {
    deleteMaterial(ticketId: $ticketId, materialId: $materialId) {
      _id 
      materials {
        _id
        materialName
        quantity
      }
    }
  }
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/utils/queries.js":
/*!******************************!*\
  !*** ./src/utils/queries.js ***!
  \******************************/
/*! exports provided: QUERY_TICKETS, QUERY_TICKET, QUERY_MATERIAL, QUERY_CLIENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_TICKETS", function() { return QUERY_TICKETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_TICKET", function() { return QUERY_TICKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_MATERIAL", function() { return QUERY_MATERIAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_CLIENT", function() { return QUERY_CLIENT; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const QUERY_TICKETS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query tickets($clientName: String) {
        tickets(clientName: $clientName) {
            _id
            clientName
            pickupDate
            materials {
                _id
                materialName
                quantity
            }
        }
    }
`;
const QUERY_TICKET = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query ticket($id: ID!) {
    ticket(_id: $id) {
      _id
      clientName
      pickupDate
      materials {
        _id
        materialName
        quantity
      }
    }
  }
`;
const QUERY_MATERIAL = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query materials($id: ID!) {
    materials( _id: $id) {
      _id
      materialName
      quantity
    }
  }
`;
const QUERY_CLIENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query client($clientName: String!) {
    client(clientName: $clientName) {
      _id
      clientName
    }
  }
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/bradfordanderson/Documents/CODE/UofU/final_proj/roberto-metals/client/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/bradfordanderson/Documents/CODE/UofU/final_proj/roberto-metals/client/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/bradfordanderson/Documents/CODE/UofU/final_proj/roberto-metals/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/bradfordanderson/Documents/CODE/UofU/final_proj/roberto-metals/client/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map