global.webpackJsonp([2],{

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(168);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '培训班详情'
  }
});

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_template_compiler_index_id_data_v_89ed7994_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(172);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(169)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-89ed7994"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_template_compiler_index_id_data_v_89ed7994_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\trainingClassDetails\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-89ed7994", Component.options)
  } else {
    hotAPI.reload("data-v-89ed7994", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 169:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_map__ = __webpack_require__(33);
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
//
//
//
//
//
//


var qqmapsdk;
qqmapsdk = new __WEBPACK_IMPORTED_MODULE_0__utils_map__["a" /* default */]({
  key: 'DHNBZ-2ZLKK-T7IJJ-AXSQW-WX5L6-A6FJZ'
});
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      backgroundDiv: {
        backgroundImage: 'url(' + __webpack_require__(171) + ')'
      },
      imgalist: [__webpack_require__(7), __webpack_require__(34), __webpack_require__(7), __webpack_require__(7), __webpack_require__(7), __webpack_require__(7)],
      markers: [{
        iconPath: __webpack_require__(34),
        id: 0,
        latitude: 23.099994,
        longitude: 113.324520,
        width: 50,
        height: 50
      }],
      polyline: [{
        points: [{
          longitude: 113.3245211,
          latitude: 23.10229
        }, {
          longitude: 113.324520,
          latitude: 23.21229
        }],
        color: "#FF0000DD",
        width: 2,
        dottedLine: true
      }],
      controls: [{
        id: 1,
        iconPath: __webpack_require__(34),
        position: {
          left: 0,
          top: 300 - 50,
          width: 50,
          height: 50
        },
        clickable: true
      }]
    };
  },


  onLoad: function onLoad(options) {
    // 页面初始化 options为页面跳转所带来的参数 
    // this.setData({
    //   title: options.id
    // })

    var bean = options.id;
    console.log(JSON.parse(bean));
  },

  created: function created() {},

  methods: {
    toMap: function toMap() {
      wx.getLocation({
        type: 'gcj02', //返回可以用于wx.openLocation的经纬度
        success: function success(res) {
          var latitude = res.latitude;
          var longitude = res.longitude;
          wx.openLocation({
            latitude: latitude,
            longitude: longitude,
            scale: 28,
            name: 'xxx培训班',
            address: '湖北省武汉市蔡甸区汉阳大道3545工厂恒大',
            infoUrl: 'http://weixin.qq.com'
          });
        }
      });
      // wx.navigateTo({
      //   url: '/pages/map/main'
      // })
    },
    getCenterLocation: function getCenterLocation() {
      wx.createMapContext('myMap').getCenterLocation({
        success: function success(res) {
          console.log(res.longitude);
          console.log(res.latitude);
        }
      });
    },

    /** 
     * 预览图片
     */
    previewImage: function previewImage(img) {
      //var current = e.target.dataset.src;
      //console.log(img);
      wx.previewImage({
        current: img, // 当前显示图片的http链接
        urls: this.imgalist // 需要预览的图片http链接列表
      });
    },


    //打电话
    toCallPhone: function toCallPhone() {
      wx.makePhoneCall({
        phoneNumber: '1340000' //仅为示例，并非真实的电话号码
      });
    },


    //跳转问题反馈页面
    tofeedback: function tofeedback() {
      wx.navigateTo({
        url: '/pages/feedback/main'
      });
    },
    regionchange: function regionchange(e) {
      console.log(e.type);
    },
    markertap: function markertap(e) {
      console.log(e.markerId);
    },
    controltap: function controltap(e) {
      console.log(e.controlId);
    }
  },

  components: {},
  computed: {
    // $$imagePath() {
    //   console.log(this.$imagePath)
    //   return this.$imagePath
    // },
  }
});

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/Group.svg";

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('div', {
    staticClass: "titleTex"
  }, [_c('p', [_vm._v("鸿途教育")]), _vm._v(" "), _c('span', [_vm._v("主营：美术培训、少儿托管")])], 1), _vm._v(" "), _c('img', {
    attrs: {
      "src": "../../assets/userImg.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "borderTop"
  }, [_c('div', {
    staticClass: "adrress",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.toMap
    }
  }, [_vm._m(0), _vm._v(" "), _c('img', {
    staticClass: "arrow",
    attrs: {
      "src": "../../assets/Back.svg"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "adrress",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toCallPhone
    }
  }, [_vm._m(1), _vm._v(" "), _c('img', {
    staticClass: "arrow",
    attrs: {
      "src": "../../assets/Back.svg"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "showPic"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "imgalist"
  }, _vm._l((_vm.imgalist), function(img, index) {
    return _c('div', {
      staticClass: "previewimg"
    }, [_c('img', {
      attrs: {
        "src": img,
        "eventid": '2-' + index
      },
      on: {
        "click": function($event) {
          _vm.previewImage(img)
        }
      }
    })])
  }))])]), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('span', {
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.tofeedback
    }
  }, [_vm._v("问题反馈")])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "flex"
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "src": "../../assets/adrress.svg"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "content"
  }, [_vm._v("湖北省武汉市蔡甸区汉阳大道3545工厂恒大xxxxxxxxxxxxxxxxxxxxx")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "flex"
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "src": "../../assets/phone.svg"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "content"
  }, [_vm._v("027-84989887")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "flex"
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "src": "../../assets/Camera.svg"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "content"
  }, [_vm._v("门店照片")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-89ed7994", esExports)
  }
}

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })

},[167]);
//# sourceMappingURL=main.js.map