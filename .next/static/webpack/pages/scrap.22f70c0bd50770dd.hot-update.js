"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/scrap",{

/***/ "./components/scrapbox.js":
/*!********************************!*\
  !*** ./components/scrapbox.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Scrapbox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Scrapbox(param) {\n    let { title , link , description  } = param;\n    console.log(title);\n    return(//   <div class=\"p-4 lg:w-1/3\">\n    //   <div class=\"h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative\">\n    //     <h1 class=\"title-font text-2xl font-bold text-gray-900 mb-3\">\n    //       <a href={link}>\n    //        {title}\n    //       </a>\n    //     </h1>\n    //     <div>\n    //      <p class=\"leading-relaxed text-xl mb-3\">{description}</p>\n    //     </div>\n    //   </div>\n    // </div>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"lg:w-1/4 md:w-1/2 p-4 w-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"mt-4 py-12 px-12 bg-red-800\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    class: \"text-gray-500 text-xs tracking-widest title-font mb-1\",\n                    children: \"CATEGORY\"\n                }, void 0, false, {\n                    fileName: \"/Users/maili/Desktop/Portfolio/components/scrapbox.js\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    class: \"text-gray-900 title-font text-lg font-medium\",\n                    children: \"The Catalyzer\"\n                }, void 0, false, {\n                    fileName: \"/Users/maili/Desktop/Portfolio/components/scrapbox.js\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    class: \"mt-1\",\n                    children: description\n                }, void 0, false, {\n                    fileName: \"/Users/maili/Desktop/Portfolio/components/scrapbox.js\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/maili/Desktop/Portfolio/components/scrapbox.js\",\n            lineNumber: 21,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/maili/Desktop/Portfolio/components/scrapbox.js\",\n        lineNumber: 17,\n        columnNumber: 3\n    }, this));\n}\n_c = Scrapbox;\nvar _c;\n$RefreshReg$(_c, \"Scrapbox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NjcmFwYm94LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDZSxTQUFTQSxTQUFTLEtBQXdCLEVBQUU7UUFBMUIsRUFBQ0MsTUFBSyxFQUFDQyxLQUFJLEVBQUNDLFlBQVcsRUFBQyxHQUF4QjtJQUMvQkMsUUFBUUMsR0FBRyxDQUFDSjtJQUNaLE9BQ0EsK0JBQStCO0lBQy9CLG9IQUFvSDtJQUNwSCxvRUFBb0U7SUFDcEUsd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWixpRUFBaUU7SUFDakUsYUFBYTtJQUNiLFdBQVc7SUFDWCxTQUFTO2tCQUNULDhEQUFDSztRQUFJQyxPQUFNO2tCQUlULDRFQUFDRDtZQUFJQyxPQUFNOzs4QkFDVCw4REFBQ0M7b0JBQUdELE9BQU07OEJBQXdEOzs7Ozs7OEJBQ2xFLDhEQUFDRTtvQkFBR0YsT0FBTTs4QkFBK0M7Ozs7Ozs4QkFDekQsOERBQUNHO29CQUFFSCxPQUFNOzhCQUFRSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdkIsQ0FBQztLQTVCdUJIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2NyYXBib3guanM/NWI5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjcmFwYm94KHt0aXRsZSxsaW5rLGRlc2NyaXB0aW9ufSkge1xuICBjb25zb2xlLmxvZyh0aXRsZSlcbiAgcmV0dXJuIChcbiAgLy8gICA8ZGl2IGNsYXNzPVwicC00IGxnOnctMS8zXCI+XG4gIC8vICAgPGRpdiBjbGFzcz1cImgtZnVsbCBiZy1ncmF5LTEwMCBiZy1vcGFjaXR5LTc1IHB4LTggcHQtMTYgcGItMjQgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gdGV4dC1jZW50ZXIgcmVsYXRpdmVcIj5cbiAgLy8gICAgIDxoMSBjbGFzcz1cInRpdGxlLWZvbnQgdGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDAgbWItM1wiPlxuICAvLyAgICAgICA8YSBocmVmPXtsaW5rfT5cbiAgLy8gICAgICAgIHt0aXRsZX1cbiAgLy8gICAgICAgPC9hPlxuICAvLyAgICAgPC9oMT5cbiAgLy8gICAgIDxkaXY+XG4gIC8vICAgICAgPHAgY2xhc3M9XCJsZWFkaW5nLXJlbGF4ZWQgdGV4dC14bCBtYi0zXCI+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgLy8gICAgIDwvZGl2PlxuICAvLyAgIDwvZGl2PlxuICAvLyA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImxnOnctMS80IG1kOnctMS8yIHAtNCB3LWZ1bGxcIj5cbiAgICB7LyogPGEgY2xhc3M9XCJibG9jayByZWxhdGl2ZSBoLTQ4IHJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8aW1nIGFsdD1cImVjb21tZXJjZVwiIGNsYXNzPVwib2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXIgdy1mdWxsIGgtZnVsbCBibG9ja1wiIHNyYz1cImh0dHBzOi8vZHVtbXlpbWFnZS5jb20vNDIweDI2MFwiIC8+XG4gICAgPC9hPiAqL31cbiAgICA8ZGl2IGNsYXNzPVwibXQtNCBweS0xMiBweC0xMiBiZy1yZWQtODAwXCI+XG4gICAgICA8aDMgY2xhc3M9XCJ0ZXh0LWdyYXktNTAwIHRleHQteHMgdHJhY2tpbmctd2lkZXN0IHRpdGxlLWZvbnQgbWItMVwiPkNBVEVHT1JZPC9oMz5cbiAgICAgIDxoMiBjbGFzcz1cInRleHQtZ3JheS05MDAgdGl0bGUtZm9udCB0ZXh0LWxnIGZvbnQtbWVkaXVtXCI+VGhlIENhdGFseXplcjwvaDI+XG4gICAgICA8cCBjbGFzcz1cIm10LTFcIj57ZGVzY3JpcHRpb259PC9wPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG5cbiAgKTtcbn1cblxuIl0sIm5hbWVzIjpbIlNjcmFwYm94IiwidGl0bGUiLCJsaW5rIiwiZGVzY3JpcHRpb24iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3MiLCJoMyIsImgyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/scrapbox.js\n"));

/***/ })

});