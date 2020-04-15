webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Orders/OrderItem.tsx":
/*!*********************************************!*\
  !*** ./src/components/Orders/OrderItem.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _StatusSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StatusSelector */ "./src/components/Orders/StatusSelector.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_LocalShipping__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/LocalShipping */ "./node_modules/@material-ui/icons/LocalShipping.js");
/* harmony import */ var _material_ui_icons_LocalShipping__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalShipping__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_HouseOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/HouseOutlined */ "./node_modules/@material-ui/icons/HouseOutlined.js");
/* harmony import */ var _material_ui_icons_HouseOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HouseOutlined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Fade */ "./node_modules/@material-ui/core/esm/Fade/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/build/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_11__);



var _this = undefined,
    _jsxFileName = "/Users/Morgan/Programmation/ReactJS/FleurilandDashboard/client/src/components/Orders/OrderItem.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











var OrderItem = function OrderItem(props) {
  var order = props.order;
  return order && __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: order.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(IdCell, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, order.id), __jsx(NameCell, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, order.billing.first_name, " ", order.billing.last_name, " "), __jsx(PriceCell, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, order.total, "\u20AC"), __jsx(StatusCell, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  })), order.shipping_lines[0] && __jsx(MethodCell, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, order.shipping_lines[0].method_title));
};

var IdCell = function IdCell(props) {
  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, props.children);
};

var NameCell = function NameCell(props) {
  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, props.children);
};

var PriceCell = function PriceCell(props) {
  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, props.children);
};

var StatusCell = function StatusCell(_ref) {
  var order = _ref.order,
      enqueueSnackbar = _ref.enqueueSnackbar;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(order.status),
      status = _useState[0],
      setStatus = _useState[1];

  var handleChange = function handleChange(event) {
    var status, rep;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleChange$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            status = event.target.value;
            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_6___default.a.put("http://localhost:3000/api/updateOrder?id=".concat(order.id, "&status=").concat(status)));

          case 3:
            rep = _context.sent;
            console.log("ok");

            if (rep.data.status == event.target.value) {
              setStatus(event.target.value);
              enqueueSnackbar('Mise à jour réussie', {
                variant: 'success',
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'right'
                }
              });
            } else enqueueSnackbar('Erreur de connexion au serveur', {
              variant: 'error',
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right'
              }
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      borderRadius: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx(_StatusSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
    status: status,
    handleChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }));
};

var MethodCell = function MethodCell(props) {
  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], {
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: props.children,
    TransitionComponent: _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_10__["default"],
    TransitionProps: {
      timeout: 600
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, props.children == "Retrait en point de vente" ? __jsx(_material_ui_icons_HouseOutlined__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fontSize: "large",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }) : __jsx(_material_ui_icons_LocalShipping__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "large",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(notistack__WEBPACK_IMPORTED_MODULE_11__["withSnackbar"])(OrderItem));

/***/ })

})
//# sourceMappingURL=index.js.863afee84f8ea1068748.hot-update.js.map