webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Orders/OrderItem.tsx":
/*!*********************************************!*\
  !*** ./src/components/Orders/OrderItem.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _StatusSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StatusSelector */ "./src/components/Orders/StatusSelector.tsx");
var _this = undefined,
    _jsxFileName = "/Users/Morgan/Programmation/ReactJS/FleurilandDashboard/client/src/components/Orders/OrderItem.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var OrderItem = function OrderItem(props) {
  return props.order && __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: props.order.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(IdCell, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, props.order.id), __jsx(NameCell, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, props.order.billing.first_name, " ", props.order.billing.last_name, " "), __jsx(PriceCell, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, props.order.total, "\u20AC"), __jsx(StatusCell, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, props.order.status), props.order.shipping_lines[0] && __jsx(MethodCell, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, props.order.shipping_lines[0].method_title));
};

var IdCell = function IdCell(props) {
  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, props.children);
};

var NameCell = function NameCell(props) {
  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, props.children);
};

var PriceCell = function PriceCell(props) {
  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, props.children);
};

var StatusCell = function StatusCell(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.children.toString()),
      status = _useState[0],
      setStatus = _useState[1];

  var handleChange = function handleChange(event) {
    setStatus(event.target.value);
  };

  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      borderRadius: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(_StatusSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    status: status,
    handleChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }));
};

var MethodCell = function MethodCell(props) {
  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (OrderItem);

/***/ })

})
//# sourceMappingURL=index.js.3d4f6ed439e3d3307fbd.hot-update.js.map