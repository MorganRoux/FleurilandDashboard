webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Orders/OrderTable.tsx":
/*!**********************************************!*\
  !*** ./src/components/Orders/OrderTable.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _OrderItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./OrderItem */ "./src/components/Orders/OrderItem.tsx");
/* harmony import */ var _sorters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sorters */ "./src/components/Orders/sorters.tsx");
/* harmony import */ var _sorters__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sorters__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var _this = undefined,
    _jsxFileName = "/Users/Morgan/Programmation/ReactJS/FleurilandDashboard/client/src/components/Orders/OrderTable.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var OrderHead = function OrderHead(_ref) {
  var orderBy = _ref.orderBy,
      orderDir = _ref.orderDir,
      setOrderBy = _ref.setOrderBy,
      setOrderDir = _ref.setOrderDir;
  var heads = ["N°", "Nom", "Total", "Status", "Date de commande", "Expédition"];

  var createSortHandler = function createSortHandler(id) {
    if (orderBy == id) setOrderDir(orderDir == 'asc' ? 'desc' : 'asc');else {
      setOrderBy(id);
      setOrderDir('asc');
    }
  };

  return __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, heads.map(function (name, id) {
    return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: id,
      align: name == "Expédition" ? "center" : "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["TableSortLabel"], {
      active: orderBy === id,
      direction: orderBy === id ? orderDir : 'asc',
      onClick: function onClick(id) {
        return createSortHandler(id);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    }, name));
  })));
};

var OrderTable = function OrderTable(props) {
  var orders = props.orders;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      orderBy = _useState[0],
      setOrderBy = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('asc'),
      orderDir = _useState2[0],
      setOrderDir = _useState2[1];

  var sorters = [_sorters__WEBPACK_IMPORTED_MODULE_8__["sortById"]];

  var getSortHandler = function getSortHandler(orderBy, orderDir) {
    return function (elmt1, elmt2) {
      var ret = sorters[orderBy](elmt1, elmt2); //elmt1.id <= elmt2.id ? -1 : 1;

      return orderDir == 'asc' ? ret : -ret;
    };
  };

  return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    stickyHeader: true,
    size: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(OrderHead, {
    orderBy: orderBy,
    orderDir: orderDir,
    setOrderBy: setOrderBy,
    setOrderDir: setOrderDir,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, orders.sort(getSortHandler(orderBy, orderDir)).map(function (order) {
    return __jsx(_OrderItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: order.id,
      order: order,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 21
      }
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (OrderTable);

/***/ }),

/***/ "./src/components/Orders/sorters.tsx":
/*!*******************************************!*\
  !*** ./src/components/Orders/sorters.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var sortById = function sortById(elmt1, elmt2) {
  return elmt1.id <= elmt2.id ? -1 : 1;
};

var sortByName = function sortByName(elmt1, elmt2) {
  var firstName1 = elmt1.billing.first_name.charAt(0).toUpperCase() + elmt1.billing.first_name.slice(1).toLowerCase();
  var lastName1 = elmt1.billing.last_name.charAt(0).toUpperCase() + elmt1.billing.last_name.slice(1).toLowerCase();
  var firstName2 = elmt2.billing.first_name.charAt(0).toUpperCase() + elmt2.billing.first_name.slice(1).toLowerCase();
  var lastName2 = elmt2.billing.last_name.charAt(0).toUpperCase() + elmt2.billing.last_name.slice(1).toLowerCase();

  if (firstName1 != firstName2) {
    return firstName1 <= firstName2 ? -1 : 1;
  } else return lastName1 <= lastName2 ? -1 : 1;
};

/***/ })

})
//# sourceMappingURL=index.js.dde1e63a36a3586a4ef7.hot-update.js.map