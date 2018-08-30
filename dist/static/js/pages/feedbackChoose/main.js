global.webpackJsonp([9],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(104);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '问题反馈'
  }
});

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_template_compiler_index_id_data_v_1bda80ce_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(107);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(105)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1bda80ce"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_template_compiler_index_id_data_v_1bda80ce_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\feedbackChoose\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1bda80ce", Component.options)
  } else {
    hotAPI.reload("data-v-1bda80ce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 105:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      select1: "select",
      select2: "",
      select3: "",
      remark: "" //备注
    };
  },

  methods: {
    //语言切换
    changLan: function changLan(v) {
      if (v == "select1") {
        this.select1 = "select";
        this.select2 = "";
        this.select3 = "";
      } else if (v == "select2") {
        this.select2 = "select";
        this.select1 = "";
        this.select3 = "";
      } else if (v == "select3") {
        this.select3 = "select";
        this.select1 = "";
        this.select2 = "";
      }
    }
  },

  created: function created() {},


  components: {}
});

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "selectB"
  }, [_c('div', {
    staticClass: "selectBox",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.changLan('select1')
      }
    }
  }, [_c('div', {
    staticClass: "flex"
  }, [_c('span', {
    staticClass: "selectBtn",
    class: _vm.select1
  }), _c('span', {
    staticClass: "selectCot"
  }, [_vm._v("门店信息不全，我要补全")])])]), _vm._v(" "), _c('div', {
    staticClass: "selectBox2",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.changLan('select2')
      }
    }
  }, [_c('div', {
    staticClass: "flex"
  }, [_c('span', {
    staticClass: "selectBtn",
    class: _vm.select2
  }), _c('span', {
    staticClass: "selectCot"
  }, [_vm._v("我不愿意门店信息出现在该平台上")])])]), _vm._v(" "), _c('div', {
    staticClass: "selectBox2",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.changLan('select3')
      }
    }
  }, [_c('div', {
    staticClass: "flex"
  }, [_c('span', {
    staticClass: "selectBtn",
    class: _vm.select3
  }), _c('span', {
    staticClass: "selectCot"
  }, [_vm._v("我想合作，提供更多功能和信息")])])])]), _vm._v(" "), _c('div', {
    staticClass: "remark"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.remark),
      expression: "remark"
    }],
    attrs: {
      "fixed": "true",
      "placeholder": "请描述你的想法和提供您的联系方式，提交后，站长会尽快与您联系",
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.remark)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.remark = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', [_vm._v("0/50")])]), _vm._v(" "), _c('div', {
    staticClass: "submit"
  }, [_vm._v("\n    提交\n  ")])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title"
  }, [_c('span', [_vm._v("反馈问题：")]), _vm._v(" "), _c('span', [_vm._v("我是该门店店主")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1bda80ce", esExports)
  }
}

/***/ })

},[103]);
//# sourceMappingURL=main.js.map