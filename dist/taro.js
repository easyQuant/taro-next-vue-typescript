(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["taro"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/template/comp.js":
/*!****************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/template/comp.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var runtime_1 = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js"); // @ts-ignore


Component(runtime_1.createRecursiveComponentConfig());

/***/ }),

/***/ "./node_modules/@tarojs/runtime/dist/runtime.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/@tarojs/runtime/dist/runtime.esm.js ***!
  \**********************************************************/
/*! exports provided: Current, Events, Style, TaroElement, TaroEvent, TaroNode, TaroRootElement, TaroText, connectReactPage, connectVuePage, createComponentConfig, createDocument, createEvent, createPageConfig, createReactApp, createRecursiveComponentConfig, createVueApp, document, eventCenter, hydrate, injectPageInstance, navigator, nextTick, options, useDidHide, useDidShow, useOptionMenuClick, usePageScroll, usePullDownRefresh, usePullIntercept, useReachBottom, useResize, useRouter, useScope, useShareAppMessage, useTabItemTap, useTitleClick, window */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(document, window) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Current", function() { return Current; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return Style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroElement", function() { return TaroElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroEvent", function() { return TaroEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroNode", function() { return TaroNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroRootElement", function() { return TaroRootElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroText", function() { return TaroText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectReactPage", function() { return connectReactPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectVuePage", function() { return connectVuePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponentConfig", function() { return createComponentConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDocument", function() { return createDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEvent", function() { return createEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPageConfig", function() { return createPageConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReactApp", function() { return createReactApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRecursiveComponentConfig", function() { return createRecursiveComponentConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVueApp", function() { return createVueApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return document$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventCenter", function() { return eventCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectPageInstance", function() { return injectPageInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigator", function() { return navigator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return nextTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDidHide", function() { return useDidHide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDidShow", function() { return useDidShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOptionMenuClick", function() { return useOptionMenuClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePageScroll", function() { return usePageScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePullDownRefresh", function() { return usePullDownRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePullIntercept", function() { return usePullIntercept; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReachBottom", function() { return useReachBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useResize", function() { return useResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouter", function() { return useRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScope", function() { return useScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useShareAppMessage", function() { return useShareAppMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTabItemTap", function() { return useTabItemTap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTitleClick", function() { return useTitleClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return window$1; });
/* harmony import */ var _Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/set */ "./node_modules/@babel/runtime/helpers/esm/set.js");
/* harmony import */ var _Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");












function isString(o) {
  return typeof o === 'string';
}

function isUndefined(o) {
  return typeof o === 'undefined';
}

function isObject(o) {
  return o !== null && Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(o) === 'object';
}

function isFunction(o) {
  return typeof o === 'function';
}

var isArray = Array.isArray;
var EMPTY_OBJ = {};

var noop = function noop() {};

function toDashed(s) {
  return s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function toCamelCase(s) {
  var camel = '';
  var nextCap = false;

  for (var i = 0; i < s.length; i++) {
    if (s[i] !== '-') {
      camel += nextCap ? s[i].toUpperCase() : s[i];
      nextCap = false;
    } else {
      nextCap = true;
    }
  }

  return camel;
}

var reportIssue = '如有疑问，请提交 issue 至：https://github.com/nervjs/taro/issues';
/**
 * ensure takes a condition and throw a error if the condition fails,
 * like failure::ensure: https://docs.rs/failure/0.1.1/failure/macro.ensure.html
 * @param condition condition.
 * @param msg error message.
 */

function ensure(condition, msg) {
  if (condition) {
    return;
  }

  throw new Error(msg + '\n' + reportIssue);
}

function warn(condition, msg) {
  if (true) {
    if (condition) {
      console.warn(msg);
    }
  }
}

var touchEvents = {
  bindTouchStart: '',
  bindTouchMove: '',
  bindTouchEnd: '',
  bindTouchCancel: '',
  bindLongTap: ''
};
var View = Object.assign({
  'hover-class': singleQuote('none'),
  'hover-stop-propagation': 'false',
  'hover-start-time': '50',
  'hover-stay-time': '400',
  animation: '',
  bindAnimationEnd: ''
}, touchEvents);
var Map$1 = Object.assign({
  longitude: '',
  latitude: '',
  scale: '16',
  markers: '',
  covers: '',
  polyline: '',
  circles: '',
  controls: '',
  'include-point': 'false',
  'show-location': '',
  polygons: '',
  subkey: '',
  'layer-style': '1',
  rotate: '0',
  skew: 'skew',
  'enable-3D': 'false',
  'show-compass': 'false',
  'show-scale': 'false',
  'enable-overlooking': 'false',
  'enable-zoom': 'true',
  'enable-scroll': 'true',
  'enable-rotate': 'false',
  'enable-satellite': 'false',
  'enable-traffic': 'false',
  setting: '',
  bindMarkerTap: '',
  bindLabelTap: '',
  bindControlTap: '',
  bindCalloutTap: '',
  bindUpdated: '',
  bindRegionChange: '',
  bindPoiTap: ''
}, touchEvents);
if (false) {}
var CoverView = Object.assign({
  'scroll-top': 'false'
}, touchEvents);
var MovableView = Object.assign({
  direction: 'none',
  inertia: 'false',
  'out-of-bounds': 'false',
  x: '',
  y: '',
  damping: '20',
  friction: '2',
  disabled: '',
  scale: 'false',
  'scale-min': '0.5',
  'scale-max': '10',
  'scale-value': '1',
  animation: 'true',
  bindAnimationEnd: '',
  bindChange: '',
  bindScale: '',
  htouchmove: '',
  vtouchmove: '',
  width: singleQuote('10px'),
  height: singleQuote('10px')
}, touchEvents);
var ScrollView = Object.assign({
  'scroll-x': 'false',
  'scroll-y': 'false',
  'upper-threshold': '50',
  'lower-threshold': '50',
  'scroll-top': '',
  'scroll-left': '',
  'scroll-into-view': '',
  'scroll-with-animation': 'false',
  'enable-back-to-top': 'false',
  'enable-flex': 'false',
  'scroll-anchoring': ' false',
  bindScrolltoUpper: '',
  bindScrolltoLower: '',
  bindScroll: ''
}, touchEvents);

function singleQuote(s) {
  return "'".concat(s, "'");
}

var controlledComponent = new Set(['input', 'checkbox', 'picker-view', 'radio', 'slider', 'textarea']);

var incrementId = function incrementId() {
  var id = 0;
  return function () {
    return (id++).toString();
  };
};

function isElement(node) {
  return node.nodeType === 1
  /* ELEMENT_NODE */
  ;
}

function isText(node) {
  return node.nodeType === 3
  /* TEXT_NODE */
  ;
}

var TaroEventTarget = /*#__PURE__*/function () {
  function TaroEventTarget() {
    Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, TaroEventTarget);

    this.__handlers = {};
  }

  Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(TaroEventTarget, [{
    key: "addEventListener",
    value: function addEventListener(type, handler, options) {
      warn(type === 'regionchange', 'map 组件的 regionchange 事件非常特殊，请使用 begin/end 事件替代。详情：https://github.com/NervJS/taro/issues/5766');
      type = type.toLowerCase();
      var handlers = this.__handlers[type];
      var isCapture = Boolean(options);
      var isOnce = false;

      if (isObject(options)) {
        isCapture = Boolean(options.capture);
        isOnce = Boolean(options.once);
      }

      if (isOnce) {
        var wrapper = function wrapper() {
          handler.apply(this, arguments); // this 指向 Element

          this.removeEventListener(type, wrapper);
        };

        this.addEventListener(type, wrapper, Object.assign(Object.assign({}, options), {
          once: false
        }));
        return;
      }

      warn(isCapture, 'The event capture feature is unimplemented.');

      if (isArray(handlers)) {
        handlers.push(handler);
      } else {
        this.__handlers[type] = [handler];
      }
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, handler) {
      type = type.toLowerCase();

      if (handler == null) {
        return;
      }

      var handlers = this.__handlers[type];

      if (!isArray(handlers)) {
        return;
      }

      var index = handlers.indexOf(handler);
      warn(index === -1, "\u4E8B\u4EF6: '".concat(type, "' \u6CA1\u6709\u6CE8\u518C\u5728 DOM \u4E2D\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u88AB\u79FB\u9664\u3002"));
      handlers.splice(index, 1);
    }
  }]);

  return TaroEventTarget;
}();

var eventSource = new Map();

var TaroEvent = /*#__PURE__*/function () {
  function TaroEvent(type, opts, event) {
    Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, TaroEvent);

    this._stop = false;
    this._end = false;
    this.defaultPrevented = false;
    this.type = type.toLowerCase();
    this.mpEvent = event;
    this.bubbles = Boolean(opts && opts.bubbles);
    this.cancelable = Boolean(opts && opts.cancelable);
  }

  Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(TaroEvent, [{
    key: "stopPropagation",
    value: function stopPropagation() {
      this._stop = true;
    }
  }, {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      this._end = this._stop = true;
    }
  }, {
    key: "preventDefault",
    value: function preventDefault() {
      this.defaultPrevented = true;
    }
  }, {
    key: "target",
    get: function get() {
      var element = document$1.getElementById(this.mpEvent.target.id);
      return Object.assign(Object.assign(Object.assign({}, this.mpEvent.target), this.mpEvent.detail), {
        dataset: element !== null ? element.dataset : EMPTY_OBJ
      });
    }
  }, {
    key: "currentTarget",
    get: function get() {
      var element = document$1.getElementById(this.mpEvent.currentTarget.id);

      if (element === null) {
        return this.target;
      }

      return Object.assign(Object.assign(Object.assign({}, this.mpEvent.currentTarget), this.mpEvent.detail), {
        dataset: element.dataset
      });
    }
  }]);

  return TaroEvent;
}();

function createEvent(event, _) {
  var domEv = new TaroEvent(event.type, {
    bubbles: true,
    cancelable: true
  }, event);

  for (var key in event) {
    if (key === 'currentTarget' || key === 'target' || key === 'type') {
      continue;
    } else {
      domEv[key] = event[key];
    }
  }

  return domEv;
}

function eventHandler(event) {
  if (event.currentTarget == null) {
    event.currentTarget = event.target;
  }

  var node = document$1.getElementById(event.currentTarget.id);

  if (node != null) {
    node.dispatchEvent(createEvent(event));
  }
}
/**
 * React also has a fancy function's name for this: `hydrate()`.
 * You may have been heard `hydrate` as a SSR-related function,
 * actually, `hydrate` basicly do the `render()` thing, but ignore some properties,
 * it's a vnode traverser and modifier: that's exactly what Taro's doing in here.
 */


function hydrate(node) {
  var _data;

  if (isText(node)) {
    var _ref;

    return _ref = {}, Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_ref, "v"
    /* Text */
    , node.nodeValue), Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_ref, "nn"
    /* NodeName */
    , node.nodeName), _ref;
  }

  var data = (_data = {}, Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_data, "nn"
  /* NodeName */
  , node.nodeName), Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_data, "uid", node.uid), _data);
  var props = node.props,
      childNodes = node.childNodes;

  for (var prop in props) {
    if (!prop.startsWith('data-') && // 在 node.dataset 的数据
    prop !== 'class' && prop !== 'style' && prop !== 'id') {
      data[ true ? toCamelCase(prop) : undefined] = props[prop];
    }
  }

  if (childNodes.length > 0) {
    data["cn"
    /* Childnodes */
    ] = childNodes.map(hydrate);
  }

  if (node.className !== '') {
    data["cl"
    /* Class */
    ] = node.className;
  }

  if (node.cssText !== '') {
    data["st"
    /* Style */
    ] = node.cssText;
  }

  return data;
}

var options = {
  prerender: true,
  debug: false,
  // html 只影响 Element#innerHTML API
  html: {
    skipElements: new Set(['style', 'script']),
    voidElements: new Set(['!doctype', 'area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']),
    closingElements: new Set(['html', 'head', 'body', 'p', 'dt', 'dd', 'li', 'option', 'thead', 'th', 'tbody', 'tr', 'td', 'tfoot', 'colgroup'])
  }
};

function initPosition() {
  return {
    index: 0,
    column: 0,
    line: 0
  };
}

function feedPosition(position, str, len) {
  var start = position.index;
  var end = position.index = start + len;

  for (var i = start; i < end; i++) {
    var char = str.charAt(i);

    if (char === '\n') {
      position.line++;
      position.column = 0;
    } else {
      position.column++;
    }
  }
}

function jumpPosition(position, str, end) {
  var len = end - position.index;
  return feedPosition(position, str, len);
}

function copyPosition(position) {
  return {
    index: position.index,
    line: position.line,
    column: position.column
  };
}

var whitespace = /\s/;

function isWhitespaceChar(char) {
  return whitespace.test(char);
}

function shouldBeIgnore(tagName) {
  var name = tagName.toLowerCase();

  if (options.html.skipElements.has(name)) {
    return true;
  }

  return false;
}

var alphanumeric = /[A-Za-z0-9]/;

function findTextEnd(str, index) {
  while (true) {
    var textEnd = str.indexOf('<', index);

    if (textEnd === -1) {
      return textEnd;
    }

    var char = str.charAt(textEnd + 1);

    if (char === '/' || char === '!' || alphanumeric.test(char)) {
      return textEnd;
    }

    index = textEnd + 1;
  }
}

var Scaner = /*#__PURE__*/function () {
  function Scaner(html) {
    Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, Scaner);

    this.tokens = [];
    this.position = initPosition();
    this.html = html;
  }

  Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Scaner, [{
    key: "scan",
    value: function scan() {
      var html = this.html,
          position = this.position;
      var len = html.length;

      while (position.index < len) {
        var start = position.index;
        this.scanText();

        if (position.index === start) {
          var isComment = html.startsWith('!--', start + 1);

          if (isComment) {
            this.scanComment();
          } else {
            var tagName = this.scanTag();

            if (shouldBeIgnore(tagName)) {
              this.scanSkipTag(tagName);
            }
          }
        }
      }

      return this.tokens;
    }
  }, {
    key: "scanText",
    value: function scanText() {
      var type = 'text';
      var html = this.html,
          position = this.position;
      var textEnd = findTextEnd(html, position.index);

      if (textEnd === position.index) {
        return;
      }

      if (textEnd === -1) {
        textEnd = html.length;
      }

      var start = copyPosition(position);
      var content = html.slice(position.index, textEnd);
      jumpPosition(position, html, textEnd);
      var end = copyPosition(position);
      this.tokens.push({
        type: type,
        content: content,
        position: {
          start: start,
          end: end
        }
      });
    }
  }, {
    key: "scanComment",
    value: function scanComment() {
      var type = 'comment';
      var html = this.html,
          position = this.position;
      var start = copyPosition(position);
      feedPosition(position, html, 4); // "<!--".length

      var contentEnd = html.indexOf('-->', position.index);
      var commentEnd = contentEnd + 3; // "-->".length

      if (contentEnd === -1) {
        contentEnd = commentEnd = html.length;
      }

      var content = html.slice(position.index, contentEnd);
      jumpPosition(position, html, commentEnd);
      this.tokens.push({
        type: type,
        content: content,
        position: {
          start: start,
          end: copyPosition(position)
        }
      });
    }
  }, {
    key: "scanTag",
    value: function scanTag() {
      this.scanTagStart();
      var tagName = this.scanTagName();
      this.scanAttrs();
      this.scanTagEnd();
      return tagName;
    }
  }, {
    key: "scanTagStart",
    value: function scanTagStart() {
      var type = 'tag-start';
      var html = this.html,
          position = this.position;
      var secondChar = html.charAt(position.index + 1);
      var close = secondChar === '/';
      var start = copyPosition(position);
      feedPosition(position, html, close ? 2 : 1);
      this.tokens.push({
        type: type,
        close: close,
        position: {
          start: start
        }
      });
    }
  }, {
    key: "scanTagEnd",
    value: function scanTagEnd() {
      var type = 'tag-end';
      var html = this.html,
          position = this.position;
      var firstChar = html.charAt(position.index);
      var close = firstChar === '/';
      feedPosition(position, html, close ? 2 : 1);
      var end = copyPosition(position);
      this.tokens.push({
        type: type,
        close: close,
        position: {
          end: end
        }
      });
    }
  }, {
    key: "scanTagName",
    value: function scanTagName() {
      var type = 'tag';
      var html = this.html,
          position = this.position;
      var len = html.length;
      var start = position.index;

      while (start < len) {
        var char = html.charAt(start);
        var isTagChar = !(isWhitespaceChar(char) || char === '/' || char === '>');
        if (isTagChar) break;
        start++;
      }

      var end = start + 1;

      while (end < len) {
        var _char = html.charAt(end);

        var _isTagChar = !(isWhitespaceChar(_char) || _char === '/' || _char === '>');

        if (!_isTagChar) break;
        end++;
      }

      jumpPosition(position, html, end);
      var tagName = html.slice(start, end);
      this.tokens.push({
        type: type,
        content: tagName
      });
      return tagName;
    }
  }, {
    key: "scanAttrs",
    value: function scanAttrs() {
      var html = this.html,
          position = this.position,
          tokens = this.tokens;
      var cursor = position.index;
      var quote = null; // null, single-, or double-quote

      var wordBegin = cursor; // index of word start

      var words = []; // "key", "key=value", "key='value'", etc

      var len = html.length;

      while (cursor < len) {
        var char = html.charAt(cursor);

        if (quote) {
          var isQuoteEnd = char === quote;

          if (isQuoteEnd) {
            quote = null;
          }

          cursor++;
          continue;
        }

        var isTagEnd = char === '/' || char === '>';

        if (isTagEnd) {
          if (cursor !== wordBegin) {
            words.push(html.slice(wordBegin, cursor));
          }

          break;
        }

        var isWordEnd = isWhitespaceChar(char);

        if (isWordEnd) {
          if (cursor !== wordBegin) {
            words.push(html.slice(wordBegin, cursor));
          }

          wordBegin = cursor + 1;
          cursor++;
          continue;
        }

        var isQuoteStart = char === '\'' || char === '"';

        if (isQuoteStart) {
          quote = char;
          cursor++;
          continue;
        }

        cursor++;
      }

      jumpPosition(position, html, cursor);
      var wLen = words.length;
      var type = 'attribute';

      for (var i = 0; i < wLen; i++) {
        var word = words[i];
        var isNotPair = word.includes('=');

        if (isNotPair) {
          var secondWord = words[i + 1];

          if (secondWord && secondWord.startsWith('=')) {
            if (secondWord.length > 1) {
              var newWord = word + secondWord;
              tokens.push({
                type: type,
                content: newWord
              });
              i += 1;
              continue;
            }

            var thirdWord = words[i + 2];
            i += 1;

            if (thirdWord) {
              var _newWord = word + '=' + thirdWord;

              tokens.push({
                type: type,
                content: _newWord
              });
              i += 1;
              continue;
            }
          }
        }

        if (word.endsWith('=')) {
          var _secondWord = words[i + 1];

          if (_secondWord && !_secondWord.includes('=')) {
            var _newWord3 = word + _secondWord;

            tokens.push({
              type: type,
              content: _newWord3
            });
            i += 1;
            continue;
          }

          var _newWord2 = word.slice(0, -1);

          tokens.push({
            type: type,
            content: _newWord2
          });
          continue;
        }

        tokens.push({
          type: type,
          content: word
        });
      }
    }
  }, {
    key: "scanSkipTag",
    value: function scanSkipTag(tagName) {
      var html = this.html,
          position = this.position,
          tokens = this.tokens;
      var safeTagName = tagName.toLowerCase();
      var len = html.length;
      var index = position.index;

      while (index < len) {
        var nextTag = html.indexOf('</', index);

        if (nextTag === -1) {
          this.scanText();
          break;
        }

        var tagStartPosition = copyPosition(position);
        jumpPosition(tagStartPosition, html, nextTag);
        var tagState = {
          html: html,
          position: tagStartPosition,
          tokens: []
        };
        var name = this.scanTag();

        if (safeTagName !== name.toLowerCase()) {
          index = tagState.position.index;
          continue;
        }

        if (nextTag !== position.index) {
          var textStart = copyPosition(position);
          jumpPosition(position, html, nextTag);
          tokens.push({
            type: 'text',
            content: html.slice(textStart.index, nextTag),
            position: {
              start: textStart,
              end: copyPosition(position)
            }
          });
        }

        tokens.push.apply(tokens, tagState.tokens);
        jumpPosition(position, html, tagState.position.index);
        break;
      }
    }
  }]);

  return Scaner;
}();

function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return !!map[val.toLowerCase()];
  } : function (val) {
    return !!map[val];
  };
}

var specialMiniElements = {
  img: 'image',
  iframe: 'web-view'
}; // https://developers.weixin.qq.com/miniprogram/dev/component

var isMiniElements = makeMap('input,canvas,progress,video,audio,form', true); // https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements

var isInlineElements = makeMap('a,i,abbr,iframe,select,acronym,slot,small,bdi,kbd,strong,big,map,sup,br,mark,mark,meter,template,canvas,textarea,cite,object,time,code,output,u,data,picture,tt,datalist,var,dfn,del,q,em,s,embed,samp', true); // https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements

var isBlockElements = makeMap('address,fieldset,li,article,figcaption,main,aside,figure,nav,blockquote,footer,ol,details,form,p,dialog,h1,h2,h3,h4,h5,h6,pre,dd,header,section,div,hgroup,table,dl,hr,ul,dt', true);
var closingTagAncestorBreakers = {
  li: ['ul', 'ol', 'menu'],
  dt: ['dl'],
  dd: ['dl'],
  tbody: ['table'],
  thead: ['table'],
  tfoot: ['table'],
  tr: ['table'],
  td: ['table']
};

function hasTerminalParent(tagName, stack) {
  var tagParents = closingTagAncestorBreakers[tagName];

  if (tagParents) {
    var currentIndex = stack.length - 1;

    while (currentIndex >= 0) {
      var parentTagName = stack[currentIndex].tagName;

      if (parentTagName === tagName) {
        break;
      }

      if (tagParents && tagParents.includes(parentTagName)) {
        return true;
      }

      currentIndex--;
    }
  }

  return false;
}

function unquote(str) {
  var car = str.charAt(0);
  var end = str.length - 1;
  var isQuoteStart = car === '"' || car === "'";

  if (isQuoteStart && car === str.charAt(end)) {
    return str.slice(1, end);
  }

  return str;
}

function getTagName(tag) {
  if (specialMiniElements[tag]) {
    return specialMiniElements[tag];
  } else if (isMiniElements(tag)) {
    return tag;
  } else if (isBlockElements(tag)) {
    return 'view';
  } else if (isInlineElements(tag)) {
    return 'text';
  }

  return 'view';
}

function format(children) {
  return children.filter(function (child) {
    if (child.type === 'comment') {
      return false;
    } else if (child.type === 'text') {
      return child.content !== '';
    }

    return true;
  }).map(function (child) {
    if (child.type === 'text') {
      var text = document$1.createTextNode(child.content);

      if (isFunction(options.html.transformText)) {
        return options.html.transformText(text, child);
      }

      return text;
    }

    var el = document$1.createElement(getTagName(child.tagName));
    el.className = child.tagName;

    for (var i = 0; i < child.attributes.length; i++) {
      var attr = child.attributes[i];

      var _attr$split = attr.split('='),
          _attr$split2 = Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_attr$split, 2),
          key = _attr$split2[0],
          value = _attr$split2[1];

      if (key === 'class') {
        el.className += el.className;
      } else if (key[0] === 'o' && key[1] === 'n') {
        continue;
      } else {
        el.setAttribute(key, value == null ? true : unquote(value));
      }
    }

    var ch = format(child.children);

    for (var _i = 0; _i < ch.length; _i++) {
      el.appendChild(ch[_i]);
    }

    if (isFunction(options.html.transformElement)) {
      return options.html.transformElement(el, child);
    }

    return el;
  });
}

function parser(html) {
  var tokens = new Scaner(html).scan();
  var root = {
    tagName: '',
    children: [],
    type: 'element',
    attributes: []
  };
  var state = {
    tokens: tokens,
    options: options,
    cursor: 0,
    stack: [root]
  };
  parse(state);
  return format(root.children);
}

function parse(state) {
  var tokens = state.tokens,
      stack = state.stack;
  var cursor = state.cursor;
  var len = tokens.length;
  var nodes = stack[stack.length - 1].children;

  while (cursor < len) {
    var token = tokens[cursor];

    if (token.type !== 'tag-start') {
      // comment or text
      nodes.push(token);
      cursor++;
      continue;
    }

    var tagToken = tokens[++cursor];
    cursor++;
    var tagName = tagToken.content.toLowerCase();

    if (token.close) {
      var index = stack.length;
      var shouldRewind = false;

      while (--index > -1) {
        if (stack[index].tagName === tagName) {
          shouldRewind = true;
          break;
        }
      }

      while (cursor < len) {
        var endToken = tokens[cursor];
        if (endToken.type !== 'tag-end') break;
        cursor++;
      }

      if (shouldRewind) {
        stack.splice(index);
        break;
      } else {
        continue;
      }
    }

    var isClosingTag = options.html.closingElements.has(tagName);
    var shouldRewindToAutoClose = isClosingTag;

    if (shouldRewindToAutoClose) {
      shouldRewindToAutoClose = !hasTerminalParent(tagName, stack);
    }

    if (shouldRewindToAutoClose) {
      var currentIndex = stack.length - 1;

      while (currentIndex > 0) {
        if (tagName === stack[currentIndex].tagName) {
          stack.splice(currentIndex);
          var previousIndex = currentIndex - 1;
          nodes = stack[previousIndex].children;
          break;
        }

        currentIndex = currentIndex - 1;
      }
    }

    var attributes = [];
    var attrToken = void 0;

    while (cursor < len) {
      attrToken = tokens[cursor];
      if (attrToken.type === 'tag-end') break;
      attributes.push(attrToken.content);
      cursor++;
    }

    cursor++;
    var children = [];
    var element = {
      type: 'element',
      tagName: tagToken.content,
      attributes: attributes,
      children: children
    };
    nodes.push(element);
    var hasChildren = !(attrToken.close || options.html.voidElements.has(tagName));

    if (hasChildren) {
      stack.push({
        tagName: tagName,
        children: children
      });
      var innerState = {
        tokens: tokens,
        cursor: cursor,
        stack: stack
      };
      parse(innerState);
      cursor = innerState.cursor;
    }
  }

  state.cursor = cursor;
}

function setInnerHTML(element, html) {
  element.textContent = '';
  var children = parser(html);

  for (var i = 0; i < children.length; i++) {
    element.appendChild(children[i]);
  }
}

var nodeId = incrementId();

var TaroNode = /*#__PURE__*/function (_TaroEventTarget) {
  Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(TaroNode, _TaroEventTarget);

  var _super = Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(TaroNode);

  function TaroNode(nodeType, nodeName) {
    var _this;

    Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, TaroNode);

    _this = _super.call(this);
    _this.parentNode = null;
    _this.childNodes = [];

    _this.hydrate = function (node) {
      return function () {
        return hydrate(node);
      };
    };

    _this.nodeType = nodeType;
    _this.nodeName = nodeName;
    _this.uid = "_n_".concat(nodeId());
    eventSource.set(_this.uid, Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this));
    return _this;
  }

  Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(TaroNode, [{
    key: "insertBefore",
    value: function insertBefore(newChild, refChild, isReplace) {
      var _this2 = this;

      newChild.remove();
      newChild.parentNode = this;
      var payload;

      if (refChild) {
        var index = this.findIndex(this.childNodes, refChild);
        this.childNodes.splice(index, 0, newChild);

        if (isReplace === true) {
          payload = {
            path: newChild._path,
            value: this.hydrate(newChild)
          };
        } else {
          payload = {
            path: "".concat(this._path, ".", "cn"
            /* Childnodes */
            ),
            value: function value() {
              return _this2.childNodes.map(hydrate);
            }
          };
        }
      } else {
        this.childNodes.push(newChild);
        payload = {
          path: newChild._path,
          value: this.hydrate(newChild)
        };
      }

      this.enqueueUpdate(payload);
      return newChild;
    }
  }, {
    key: "appendChild",
    value: function appendChild(child) {
      this.insertBefore(child);
    }
  }, {
    key: "replaceChild",
    value: function replaceChild(newChild, oldChild) {
      if (oldChild.parentNode === this) {
        this.insertBefore(newChild, oldChild, true);
        oldChild.remove(true);
        return oldChild;
      }
    }
  }, {
    key: "removeChild",
    value: function removeChild(child, isReplace) {
      var _this3 = this;

      var index = this.findIndex(this.childNodes, child);
      this.childNodes.splice(index, 1);

      if (isReplace !== true) {
        this.enqueueUpdate({
          path: "".concat(this._path, ".", "cn"
          /* Childnodes */
          ),
          value: function value() {
            return _this3.childNodes.map(hydrate);
          }
        });
      }

      child.parentNode = null;
      eventSource.delete(child.uid);
      return child;
    }
  }, {
    key: "remove",
    value: function remove(isReplace) {
      if (this.parentNode) {
        this.parentNode.removeChild(this, isReplace);
      }
    }
  }, {
    key: "hasChildNodes",
    value: function hasChildNodes() {
      return this.childNodes.length > 0;
    }
  }, {
    key: "enqueueUpdate",
    value: function enqueueUpdate(payload) {
      if (this._root === null) {
        return;
      }

      this._root.enqueueUpdate(payload);
    }
    /**
     * @textContent 目前只能置空子元素
     * @TODO 等待完整 innerHTML 实现
     */

  }, {
    key: "findIndex",
    value: function findIndex(childeNodes, refChild) {
      var index = childeNodes.indexOf(refChild);
      ensure(index !== -1, 'The node to be replaced is not a child of this node.');
      return index;
    }
  }, {
    key: "_path",
    get: function get() {
      if (this.parentNode !== null) {
        var index =  false ? undefined : '[' + this.parentNode.childNodes.indexOf(this) + ']';
        return "".concat(this.parentNode._path, ".", "cn"
        /* Childnodes */
        , ".").concat(index);
      }

      return '';
    }
  }, {
    key: "_root",
    get: function get() {
      if (this.parentNode !== null) {
        return this.parentNode._root;
      }

      return null;
    }
  }, {
    key: "nextSibling",
    get: function get() {
      var parentNode = this.parentNode;

      if (parentNode) {
        return parentNode.childNodes[this.findIndex(parentNode.childNodes, this) + 1] || null;
      }

      return null;
    }
  }, {
    key: "previousSibling",
    get: function get() {
      var parentNode = this.parentNode;

      if (parentNode) {
        return parentNode.childNodes[this.findIndex(parentNode.childNodes, this) - 1] || null;
      }

      return null;
    }
  }, {
    key: "firstChild",
    get: function get() {
      return this.childNodes[0] || null;
    }
  }, {
    key: "lastChild",
    get: function get() {
      var c = this.childNodes;
      return c[c.length - 1] || null;
    }
  }, {
    key: "textContent",
    set: function set(text) {
      if (text === '') {
        while (this.childNodes.length > 0) {
          this.childNodes[0].remove();
        }
      }
    }
  }, {
    key: "innerHTML",
    set: function set(html) {
      setInnerHTML(this, html);
    },
    get: function get() {
      return '';
    }
  }]);

  return TaroNode;
}(TaroEventTarget);

var TaroText = /*#__PURE__*/function (_TaroNode) {
  Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(TaroText, _TaroNode);

  var _super2 = Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(TaroText);

  function TaroText(text) {
    var _this4;

    Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, TaroText);

    _this4 = _super2.call(this, 3
    /* TEXT_NODE */
    , '#text');
    _this4._value = text;
    return _this4;
  }

  Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(TaroText, [{
    key: "textContent",
    set: function set(text) {
      this._value = text;
      this.enqueueUpdate({
        path: "".concat(this._path, ".", "v"
        /* Text */
        ),
        value: text
      });
    },
    get: function get() {
      return this._value;
    }
  }, {
    key: "nodeValue",
    set: function set(text) {
      this.textContent = text;
    },
    get: function get() {
      return this._value;
    }
  }]);

  return TaroText;
}(TaroNode);
/*
 *
 * https://www.w3.org/Style/CSS/all-properties.en.html
 */


var styleProperties = ['alignContent', 'alignItems', 'alignSelf', 'alignmentAdjust', 'alignmentBaseline', 'all', 'animation', 'animationDelay', 'animationDirection', 'animationDuration', 'animationFillMode', 'animationIterationCount', 'animationName', 'animationPlayState', 'animationTimingFunction', 'appearance', 'azimuth', 'backfaceVisibility', 'background', 'backgroundAttachment', 'backgroundBlendMode', 'backgroundClip', 'backgroundColor', 'backgroundImage', 'backgroundOrigin', 'backgroundPosition', 'backgroundRepeat', 'backgroundSize', 'baselineShift', 'blockOverflow', 'blockSize', 'bookmarkLabel', 'bookmarkLevel', 'bookmarkState', 'border', 'borderBlock', 'borderBlockColor', 'borderBlockEnd', 'borderBlockEndColor', 'borderBlockEndStyle', 'borderBlockEndWidth', 'borderBlockStart', 'borderBlockStartColor', 'borderBlockStartStyle', 'borderBlockStartWidth', 'borderBlockStyle', 'borderBlockWidth', 'borderBottom', 'borderBottomColor', 'borderBottomFitLength', 'borderBottomFitWidth', 'borderBottomImage', 'borderBottomLeftFitWidth', 'borderBottomLeftImage', 'borderBottomLeftRadius', 'borderBottomRightFitLength', 'borderBottomRightFitWidth', 'borderBottomRightImage', 'borderBottomRightRadius', 'borderBottomStyle', 'borderBottomWidth', 'borderBottomlEftFitLength', 'borderBoundary', 'borderBreak', 'borderCollapse', 'borderColor', 'borderCornerFit', 'borderCornerImage', 'borderCornerImageTransform', 'borderEndEndRadius', 'borderEndStartRadius', 'borderFit', 'borderFitLength', 'borderFitWidth', 'borderImage', 'borderImageOutset', 'borderImageRepeat', 'borderImageSlice', 'borderImageSource', 'borderImageTransform', 'borderImageWidth', 'borderInline', 'borderInlineColor', 'borderInlineEnd', 'borderInlineEndColor', 'borderInlineEndStyle', 'borderInlineEndWidth', 'borderInlineStart', 'borderInlineStartColor', 'borderInlineStartStyle', 'borderInlineStartWidth', 'borderInlineStyle', 'borderInlineWidth', 'borderLeft', 'borderLeftColor', 'borderLeftFitLength', 'borderLeftFitWidth', 'borderLeftImage', 'borderLeftStyle', 'borderLeftWidth', 'borderRadius', 'borderRight', 'borderRightColor', 'borderRightFitLength', 'borderRightFitWidth', 'borderRightImage', 'borderRightStyle', 'borderRightWidth', 'borderSpacing', 'borderStartEndRadius', 'borderStartStartRadius', 'borderStyle', 'borderTop', 'borderTopColor', 'borderTopFitLength', 'borderTopFitWidth', 'borderTopImage', 'borderTopLeftFitLength', 'borderTopLeftFitWidth', 'borderTopLeftImage', 'borderTopLeftRadius', 'borderTopRightFitLength', 'borderTopRightFitWidth', 'borderTopRightImage', 'borderTopRightRadius', 'borderTopStyle', 'borderTopWidth', 'borderWidth', 'bottom', 'boxDecorationBreak', 'boxShadow', 'boxSizing', 'boxSnap', 'breakAfter', 'breakBefore', 'breakInside', 'captionSide', 'caret', 'caretColor', 'caretShape', 'chains', 'clear', 'clip', 'clipPath', 'clipRule', 'color', 'colorAdjust', 'colorInterpolationFilters', 'colorScheme', 'columnCount', 'columnFill', 'columnGap', 'columnRule', 'columnRuleColor', 'columnRuleStyle', 'columnRuleWidth', 'columnSpan', 'columnWidth', 'columns', 'contain', 'content', 'continue', 'counterIncrement', 'counterReset', 'counterSet', 'cue', 'cueAfter', 'cueBefore', 'cursor', 'direction', 'display', 'dominantBaseline', 'dropInitialAfterAdjust', 'dropInitialAfterAlign', 'dropInitialBeforeAdjust', 'dropInitialBeforeAlign', 'dropInitialSize', 'dropInitialValue', 'elevation', 'emptyCells', 'filter', 'flex', 'flexBasis', 'flexDirection', 'flexFlow', 'flexGrow', 'flexShrink', 'flexWrap', 'float', 'floodColor', 'floodOpacity', 'flow', 'flowFrom', 'flowInto', 'font', 'fontFamily', 'fontFeatureSettings', 'fontKerning', 'fontLanguageOverride', 'fontMaxSize', 'fontMinSize', 'fontOpticalSizing', 'fontPalette', 'fontSize', 'fontSizeAdjust', 'fontStretch', 'fontStyle', 'fontSynthesis', 'fontSynthesisSmallCaps', 'fontSynthesisStyle', 'fontSynthesisWeight', 'fontVariant', 'fontVariantAlternates', 'fontVariantCaps', 'fontVariantEastAsian', 'fontVariantEmoji', 'fontVariantLigatures', 'fontVariantNumeric', 'fontVariantPosition', 'fontVariationSettings', 'fontWeight', 'footnoteDisplay', 'footnotePolicy', 'forcedColorAdjust', 'gap', 'glyphOrientationVertical', 'grid', 'gridArea', 'gridAutoColumns', 'gridAutoFlow', 'gridAutoRows', 'gridColumn', 'gridColumnEnd', 'gridColumnStart', 'gridRow', 'gridRowEnd', 'gridRowStart', 'gridTemplate', 'gridTemplateAreas', 'gridTemplateColumns', 'gridTemplateRows', 'hangingPunctuation', 'height', 'hyphenateCharacter', 'hyphenateLimitChars', 'hyphenateLimitLast', 'hyphenateLimitLines', 'hyphenateLimitZone', 'hyphens', 'imageOrientation', 'imageResolution', 'initialLetters', 'initialLettersAlign', 'initialLettersWrap', 'inlineBoxAlign', 'inlineSize', 'inlineSizing', 'inset', 'insetBlock', 'insetBlockEnd', 'insetBlockStart', 'insetInline', 'insetInlineEnd', 'insetInlineStart', 'isolation', 'justifyContent', 'justifyItems', 'justifySelf', 'left', 'letterSpacing', 'lightingColor', 'lineBreak', 'lineClamp', 'lineGrid', 'lineHeight', 'linePadding', 'lineSnap', 'lineStacking', 'lineStackingRuby', 'lineStackingShift', 'lineStackingStrategy', 'listStyle', 'listStyleImage', 'listStylePosition', 'listStyleType', 'margin', 'marginBlock', 'marginBlockEnd', 'marginBlockStart', 'marginBottom', 'marginInline', 'marginInlineEnd', 'marginInlineStart', 'marginLeft', 'marginRight', 'marginTop', 'marginTrim', 'markerSide', 'mask', 'maskBorder', 'maskBorderMode', 'maskBorderOutset', 'maskBorderRepeat', 'maskBorderSlice', 'maskBorderSource', 'maskBorderWidth', 'maskClip', 'maskComposite', 'maskImage', 'maskMode', 'maskOrigin', 'maskPosition', 'maskRepeat', 'maskSize', 'maskType', 'maxBlockSize', 'maxHeight', 'maxInlineSize', 'maxLines', 'maxWidth', 'minBlockSize', 'minHeight', 'minInlineSize', 'minWidth', 'mixBlendMode', 'navDown', 'navLeft', 'navRight', 'navUp', 'objectFit', 'objectPosition', 'offset', 'offsetAfter', 'offsetAnchor', 'offsetBefore', 'offsetDistance', 'offsetEnd', 'offsetPath', 'offsetPosition', 'offsetRotate', 'offsetStart', 'opacity', 'order', 'orphans', 'outline', 'outlineColor', 'outlineOffset', 'outlineStyle', 'outlineWidth', 'overflow', 'overflowBlock', 'overflowInline', 'overflowWrap', 'overflowX', 'overflowY', 'padding', 'paddingBlock', 'paddingBlockEnd', 'paddingBlockStart', 'paddingBottom', 'paddingInline', 'paddingInlineEnd', 'paddingInlineStart', 'paddingLeft', 'paddingRight', 'paddingTop', 'page', 'pageBreakAfter', 'pageBreakBefore', 'pageBreakInside', 'pause', 'pauseAfter', 'pauseBefore', 'perspective', 'perspectiveOrigin', 'pitch', 'pitchRange', 'placeContent', 'placeItems', 'placeSelf', 'playDuring', 'position', 'quotes', 'regionFragment', 'resize', 'richness', 'right', 'rowGap', 'rubyAlign', 'rubyMerge', 'rubyPosition', 'running', 'scrollBehavior', 'scrollMargin', 'scrollMarginBlock', 'scrollMarginBlockEnd', 'scrollMarginBlockStart', 'scrollMarginBottom', 'scrollMarginInline', 'scrollMarginInlineEnd', 'scrollMarginInlineStart', 'scrollMarginLeft', 'scrollMarginRight', 'scrollMarginTop', 'scrollPadding', 'scrollPaddingBlock', 'scrollPaddingBlockEnd', 'scrollPaddingBlockStart', 'scrollPaddingBottom', 'scrollPaddingInline', 'scrollPaddingInlineEnd', 'scrollPaddingInlineStart', 'scrollPaddingLeft', 'scrollPaddingRight', 'scrollPaddingTop', 'scrollSnapAlign', 'scrollSnapStop', 'scrollSnapType', 'shapeImageThreshold', 'shapeInside', 'shapeMargin', 'shapeOutside', 'speak', 'speakHeader', 'speakNumeral', 'speakPunctuation', 'speechRate', 'stress', 'stringSet', 'tabSize', 'tableLayout', 'textAlign', 'textAlignAll', 'textAlignLast', 'textCombineUpright', 'textDecoration', 'textDecorationColor', 'textDecorationLine', 'textDecorationStyle', 'textEmphasis', 'textEmphasisColor', 'textEmphasisPosition', 'textEmphasisStyle', 'textGroupAlign', 'textHeight', 'textIndent', 'textJustify', 'textOrientation', 'textOverflow', 'textShadow', 'textSpaceCollapse', 'textSpaceTrim', 'textSpacing', 'textTransform', 'textUnderlinePosition', 'textWrap', 'top', 'transform', 'transformBox', 'transformOrigin', 'transformStyle', 'transition', 'transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction', 'unicodeBidi', 'userSelect', 'verticalAlign', 'visibility', 'voiceFamily', 'volume', 'whiteSpace', 'widows', 'width', 'willChange', 'wordBreak', 'wordSpacing', 'wordWrap', 'wrapAfter', 'wrapBefore', 'wrapFlow', 'wrapInside', 'wrapThrough', 'writingMode', 'zIndex'];
var PROPERTY_THRESHOLD = 2046;
var SET_DATA = '小程序 setData';
var PAGE_INIT = '页面初始化';

function setStyle(newVal, styleKey) {
  var old = this[styleKey];

  if (newVal) {
    this._usedStyleProp.add(styleKey);
  }

  warn(isString(newVal) && newVal.length > PROPERTY_THRESHOLD, "Style \u5C5E\u6027 ".concat(styleKey, " \u7684\u503C\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u6E32\u67D3\u6027\u80FD\uFF0C\u8003\u8651\u4F7F\u7528 CSS \u7C7B\u6216\u5176\u5B83\u65B9\u6848\u66FF\u4EE3\u3002"));

  if (old !== newVal) {
    this._value[styleKey] = newVal;

    this._element.enqueueUpdate({
      path: "".concat(this._element._path, ".", "st"
      /* Style */
      ),
      value: this.cssText
    });
  }
}

function initStyle(ctor) {
  var properties = {};

  var _loop = function _loop(i) {
    var styleKey = styleProperties[i];
    properties[styleKey] = {
      get: function get() {
        return this._value[styleKey] || '';
      },
      set: function set(newVal) {
        setStyle.call(this, newVal, styleKey);
      }
    };
  };

  for (var i = 0; i < styleProperties.length; i++) {
    _loop(i);
  }

  Object.defineProperties(ctor.prototype, properties);
}

var Style = /*#__PURE__*/function () {
  function Style(element) {
    Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, Style);

    this._element = element;
    this._usedStyleProp = new Set();
    this._value = {};
  }

  Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Style, [{
    key: "setCssVariables",
    value: function setCssVariables(styleKey) {
      var _this5 = this;

      this.hasOwnProperty(styleKey) || Object.defineProperty(this, styleKey, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return _this5._value[styleKey] || '';
        },
        set: function set(newVal) {
          setStyle.call(_this5, newVal, styleKey);
        }
      });
    }
  }, {
    key: "setProperty",
    value: function setProperty(propertyName, value) {
      if (propertyName[0] === '-') {
        this.setCssVariables(propertyName);
      } else {
        propertyName = toCamelCase(propertyName);
      }

      if (isUndefined(value)) {
        return;
      }

      if (value === null || value === '') {
        this.removeProperty(propertyName);
      } else {
        this[propertyName] = value;
      }
    }
  }, {
    key: "removeProperty",
    value: function removeProperty(propertyName) {
      propertyName = toCamelCase(propertyName);

      if (!this._usedStyleProp.has(propertyName)) {
        return '';
      }

      var value = this[propertyName];
      this[propertyName] = '';

      this._usedStyleProp.delete(propertyName);

      return value;
    }
  }, {
    key: "getPropertyValue",
    value: function getPropertyValue(propertyName) {
      propertyName = toCamelCase(propertyName);
      var value = this[propertyName];

      if (!value) {
        return '';
      }

      return value;
    }
  }, {
    key: "cssText",
    get: function get() {
      var _this6 = this;

      var text = '';

      this._usedStyleProp.forEach(function (key) {
        var val = _this6[key];
        if (!val) return;
        text += "".concat(toDashed(key), ": ").concat(val, ";");
      });

      return text;
    },
    set: function set(str) {
      var _this7 = this;

      if (str == null) {
        str = '';
      }

      this._usedStyleProp.forEach(function (prop) {
        _this7.removeProperty(prop);
      });

      if (str === '') {
        return;
      }

      var rules = str.split(';');

      for (var i = 0; i < rules.length; i++) {
        var rule = rules[i].trim();

        if (rule === '') {
          continue;
        }

        var _rule$split = rule.split(':'),
            _rule$split2 = Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_rule$split, 2),
            propName = _rule$split2[0],
            val = _rule$split2[1];

        if (isUndefined(val)) {
          continue;
        }

        this.setProperty(propName.trim(), val.trim());
      }
    }
  }]);

  return Style;
}();

initStyle(Style);
/* eslint-disable no-dupe-class-members */

var TaroElement = /*#__PURE__*/function (_TaroNode2) {
  Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(TaroElement, _TaroNode2);

  var _super3 = Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(TaroElement);

  function TaroElement(nodeType, nodeName) {
    var _this8;

    Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, TaroElement);

    _this8 = _super3.call(this, nodeType || 1
    /* ELEMENT_NODE */
    , nodeName);
    _this8.props = {};
    _this8.dataset = EMPTY_OBJ;
    _this8.tagName = nodeName.toUpperCase();
    _this8.style = new Style(Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this8));
    warn(_this8.tagName === 'MAP' && "weapp" === 'weapp', '微信小程序 map 组件的 `setting` 属性需要传递一个默认值。详情：\n https://developers.weixin.qq.com/miniprogram/dev/component/map.html');
    return _this8;
  }

  Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(TaroElement, [{
    key: "hasAttribute",
    value: function hasAttribute(qualifiedName) {
      return !isUndefined(this.props[qualifiedName]);
    }
  }, {
    key: "hasAttributes",
    value: function hasAttributes() {
      return this.attributes.length > 0;
    }
  }, {
    key: "focus",
    value: function focus() {
      this.setAttribute('focus', true);
    }
  }, {
    key: "blur",
    value: function blur() {
      this.setAttribute('focus', false);
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(qualifiedName, value) {
      warn(isString(value) && value.length > PROPERTY_THRESHOLD, "\u5143\u7D20 ".concat(this.nodeName, " \u7684 \u5C5E\u6027 ").concat(qualifiedName, " \u7684\u503C\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u6E32\u67D3\u6027\u80FD\u3002\u8003\u8651\u964D\u4F4E\u56FE\u7247\u8F6C\u4E3A base64 \u7684\u9608\u503C\u6216\u5728 CSS \u4E2D\u4F7F\u7528 base64\u3002"));

      if (qualifiedName === 'style') {
        this.style.cssText = value;
        qualifiedName = "st"
        /* Style */
        ;
      } else if (qualifiedName === 'id') {
        eventSource.delete(this.uid);
        this.props[qualifiedName] = this.uid = value;
        eventSource.set(value, this);
        qualifiedName = 'uid';
      } else {
        this.props[qualifiedName] = value;

        if (qualifiedName === 'class') {
          qualifiedName = "cl"
          /* Class */
          ;
        }

        if (qualifiedName.startsWith('data-')) {
          if (this.dataset === EMPTY_OBJ) {
            this.dataset = Object.create(null);
          }

          this.dataset[toCamelCase(qualifiedName.replace(/^data-/, ''))] = value;
        }
      }

      this.enqueueUpdate({
        path: "".concat(this._path, ".").concat( true ? toCamelCase(qualifiedName) : undefined),
        value: value
      });
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute(qualifiedName) {
      if (qualifiedName === 'style') {
        this.style.cssText = '';
      } else {
        delete this.props[qualifiedName];
      }

      this.enqueueUpdate({
        path: "".concat(this._path, ".").concat( true ? toCamelCase(qualifiedName) : undefined),
        value: ''
      });
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(qualifiedName) {
      var attr = qualifiedName === 'style' ? this.style.cssText : this.props[qualifiedName];
      return attr !== null && attr !== void 0 ? attr : '';
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      var cancelable = event.cancelable;
      var listeners = this.__handlers[event.type];

      if (!isArray(listeners)) {
        return;
      }

      for (var i = listeners.length; i--;) {
        var listener = listeners[i];
        var result = void 0;

        if (listener._stop) {
          listener._stop = false;
        } else {
          result = listener.call(this, event);
        }

        if ((result === false || event._end) && cancelable) {
          event.defaultPrevented = true;
        }

        if (event._end && event._stop) {
          break;
        }
      }

      if (event._stop) {
        this._stopPropagation(event);
      } else {
        event._stop = true;
      }

      return listeners != null;
    }
  }, {
    key: "_stopPropagation",
    value: function _stopPropagation(event) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      var target = this; // eslint-disable-next-line no-cond-assign

      while (target = target.parentNode) {
        var listeners = target.__handlers[event.type];

        if (!isArray(listeners)) {
          continue;
        }

        for (var i = listeners.length; i--;) {
          var l = listeners[i];
          l._stop = true;
        }
      }
    }
  }, {
    key: "id",
    get: function get() {
      return this.getAttribute('id');
    },
    set: function set(val) {
      this.setAttribute('id', val);
    }
  }, {
    key: "className",
    get: function get() {
      return this.getAttribute('class') || '';
    },
    set: function set(val) {
      this.setAttribute('class', val);
    }
  }, {
    key: "cssText",
    get: function get() {
      return this.getAttribute('style') || '';
    }
  }, {
    key: "children",
    get: function get() {
      return this.childNodes.filter(isElement);
    }
  }, {
    key: "attributes",
    get: function get() {
      var _this9 = this;

      var propKeys = Object.keys(this.props);
      var style = this.style.cssText;
      var attrs = propKeys.map(function (p) {
        return {
          name: p,
          value: _this9.props[p]
        };
      });
      return attrs.concat(style ? {
        name: 'style',
        value: style
      } : []);
    }
  }, {
    key: "parentElement",
    get: function get() {
      if (this.parentNode instanceof TaroElement) {
        return this.parentNode;
      }

      return null;
    }
  }, {
    key: "textContent",
    get: function get() {
      var text = '';

      for (var i = 0; i < this.childNodes.length; i++) {
        var element = this.childNodes[i];
        text += element.textContent;
      }

      return text;
    },
    set: function set(text) {
      Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_set__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(TaroElement.prototype), "textContent", text, this, true);
    }
  }]);

  return TaroElement;
}(TaroNode);

var FormElement = /*#__PURE__*/function (_TaroElement) {
  Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(FormElement, _TaroElement);

  var _super4 = Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(FormElement);

  function FormElement() {
    Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, FormElement);

    return _super4.apply(this, arguments);
  }

  Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(FormElement, [{
    key: "value",
    get: function get() {
      // eslint-disable-next-line dot-notation
      var val = this.props['value'];
      return val == null ? '' : val;
    },
    set: function set(val) {
      this.setAttribute('value', val);
    }
  }]);

  return FormElement;
}(TaroElement);

var Performance = /*#__PURE__*/function () {
  function Performance() {
    Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, Performance);

    this.recorder = new Map();
  }

  Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Performance, [{
    key: "start",
    value: function start(id) {
      if (!options.debug) {
        return;
      }

      this.recorder.set(id, Date.now());
    }
  }, {
    key: "stop",
    value: function stop(id) {
      if (!options.debug) {
        return;
      }

      var now = Date.now();
      var prev = this.recorder.get(id);
      var time = now - prev; // eslint-disable-next-line no-console

      console.log("".concat(id, " \u65F6\u957F\uFF1A ").concat(time, "ms"));
    }
  }]);

  return Performance;
}();

var perf = new Performance();

var TaroRootElement = /*#__PURE__*/function (_TaroElement2) {
  Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(TaroRootElement, _TaroElement2);

  var _super5 = Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(TaroRootElement);

  function TaroRootElement() {
    var _this10;

    Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, TaroRootElement);

    _this10 = _super5.call(this, 1
    /* ELEMENT_NODE */
    , 'root');
    _this10.pendingUpdate = false;
    _this10.updatePayloads = [];
    _this10.ctx = null;
    return _this10;
  }

  Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(TaroRootElement, [{
    key: "enqueueUpdate",
    value: function enqueueUpdate(payload) {
      this.updatePayloads.push(payload);

      if (this.pendingUpdate || this.ctx === null) {
        return;
      }

      this.performUpdate();
    }
  }, {
    key: "performUpdate",
    value: function performUpdate() {
      var _this11 = this;

      var initRender = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var prerender = arguments.length > 1 ? arguments[1] : undefined;
      this.pendingUpdate = true;
      var ctx = this.ctx;
      setTimeout(function () {
        perf.start(SET_DATA);
        var data = Object.create(null);
        var resetPaths = new Set(initRender ? ['root.cn.[0]', 'root.cn[0]'] : []);

        while (_this11.updatePayloads.length > 0) {
          var _this11$updatePayload = _this11.updatePayloads.shift(),
              path = _this11$updatePayload.path,
              value = _this11$updatePayload.value;

          if (path.endsWith("cn"
          /* Childnodes */
          )) {
            resetPaths.add(path);
          }

          data[path] = value;
        }

        var _loop2 = function _loop2(_path) {
          resetPaths.forEach(function (p) {
            // 已经重置了数组，就不需要分别再设置了
            if (_path.includes(p) && _path !== p) {
              delete data[_path];
            }
          });
          var value = data[_path];

          if (isFunction(value)) {
            data[_path] = value();
          }
        };

        for (var _path in data) {
          _loop2(_path);
        }

        if (isFunction(prerender)) {
          prerender(data);
        } else {
          _this11.pendingUpdate = false;
          ctx.setData(data, function () {
            perf.stop(SET_DATA);

            if (initRender) {
              perf.stop(PAGE_INIT);
            }
          });
        }
      }, 0);
    }
  }, {
    key: "_path",
    get: function get() {
      return 'root';
    }
  }, {
    key: "_root",
    get: function get() {
      return this;
    }
  }]);

  return TaroRootElement;
}(TaroElement);

var isBrowser = typeof document !== 'undefined' && !!document.scripts;
var doc = isBrowser ? document : EMPTY_OBJ;
var win = isBrowser ? window : EMPTY_OBJ;

var TaroDocument = /*#__PURE__*/function (_TaroElement3) {
  Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(TaroDocument, _TaroElement3);

  var _super6 = Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(TaroDocument);

  function TaroDocument() {
    Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, TaroDocument);

    return _super6.call(this, 9
    /* DOCUMENT_NODE */
    , '#document');
  }

  Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(TaroDocument, [{
    key: "createElement",
    value: function createElement(type) {
      if (type === 'root') {
        return new TaroRootElement();
      }

      if (controlledComponent.has(type)) {
        return new FormElement(1
        /* ELEMENT_NODE */
        , type);
      }

      return new TaroElement(1
      /* ELEMENT_NODE */
      , type);
    }
  }, {
    key: "createTextNode",
    value: function createTextNode(text) {
      return new TaroText(text);
    }
  }, {
    key: "getElementById",
    value: function getElementById(id) {
      var el = eventSource.get(id);
      return isUndefined(el) ? null : el;
    } // @TODO: @PERF: 在 hydrate 移除掉空的 node

  }, {
    key: "createComment",
    value: function createComment() {
      return new TaroText('');
    }
  }]);

  return TaroDocument;
}(TaroElement);

function createDocument() {
  var doc = new TaroDocument();
  doc.appendChild(doc.documentElement = doc.createElement('html'));
  doc.documentElement.appendChild(doc.head = doc.createElement('head'));
  doc.documentElement.appendChild(doc.createElement('body'));
  var app = doc.createElement('app');
  app.id = 'app';
  var container = doc.createElement('container'); // 多包一层主要为了兼容 vue

  container.appendChild(app);
  doc.documentElement.lastChild.appendChild(container);
  return doc;
}

var document$1 = isBrowser ? doc : createDocument();
var machine = 'Macintosh';
var arch = 'Intel Mac OS X 10_14_5';
var engine = 'AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36';
var navigator = isBrowser ? win.navigator : {
  appCodeName: 'Mozilla',
  appName: 'Netscape',
  appVersion: '5.0 (' + machine + '; ' + arch + ') ' + engine,
  cookieEnabled: true,
  mimeTypes: [],
  onLine: true,
  platform: 'MacIntel',
  plugins: [],
  product: 'Taro',
  productSub: '20030107',
  userAgent: 'Mozilla/5.0 (' + machine + '; ' + arch + ') ' + engine,
  vendor: 'Joyent',
  vendorSub: ''
};
var window$1 = isBrowser ? win : {
  navigator: navigator,
  document: document$1
};

if (false) {}

var Current = {
  app: null,
  router: null,
  page: null
};
/* eslint-disable dot-notation */

var instances = new Map();

function injectPageInstance(inst, id) {
  instances.set(id, inst);
}

function getPageInstance(id) {
  return instances.get(id);
}

function addLeadingSlash(path) {
  if (path == null) {
    return '';
  }

  return path.charAt(0) === '/' ? path : '/' + path;
}

var pageId = incrementId();

function safeExecute(path, lifecycle) {
  var isReact = "vue" !== 'vue'; // isReact means all kind of react-like library

  var instance = instances.get(path);

  if (instance == null) {
    return;
  }

  if (isReact) {
    if (lifecycle === 'onShow') {
      lifecycle = 'componentDidShow';
    } else if (lifecycle === 'onHide') {
      lifecycle = 'componentDidHide';
    }
  }

  var func = isReact ? instance[lifecycle] : instance.$options[lifecycle];

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  if (isArray(func)) {
    for (var i = 0; i < func.length; i++) {
      func[i].apply(instance, args);
    }

    return;
  }

  if (!isFunction(func)) {
    return;
  }

  return func.apply(instance, args);
}

function stringify(obj) {
  if (obj == null) {
    return '';
  }

  return '?' + Object.keys(obj).map(function (key) {
    return key + '=' + obj[key];
  }).join('&');
}

function getPath(id, options) {
  var path = id;

  if (!isBrowser) {
    path = id + stringify(options);
  }

  return path;
}

function createPageConfig(component, pageName, data) {
  var id = pageName !== null && pageName !== void 0 ? pageName : "taro_page_".concat(pageId()); // 小程序 Page 构造器是一个傲娇小公主，不能把复杂的对象挂载到参数上

  var pageElement = null;
  var config = {
    onLoad: function onLoad(options, cb) {
      var _this12 = this;

      Current.router = {
        params: options,
        path: addLeadingSlash(this.route || this.__route__)
      };
      perf.start(PAGE_INIT);
      var path = getPath(id, options);
      Current.app.mount(component, path, function () {
        pageElement = document$1.getElementById(path);
        ensure(pageElement !== null, '没有找到页面实例。');
        safeExecute(path, 'onLoad', options);

        if (!isBrowser) {
          pageElement.ctx = _this12;
          pageElement.performUpdate(true, cb);
        }
      });
    },
    onUnload: function onUnload() {
      Current.app.unmount(id, function () {
        if (pageElement) {
          pageElement.ctx = null;
        }
      });
    },
    onShow: function onShow() {
      Current.page = this;
      var path = getPath(id, this.options);
      safeExecute(path, 'onShow');
    },
    onHide: function onHide() {
      Current.page = null;
      Current.router = null;
      var path = getPath(id, this.options);
      safeExecute(path, 'onHide');
    },
    onPullDownRefresh: function onPullDownRefresh() {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onPullDownRefresh');
    },
    onReachBottom: function onReachBottom() {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onReachBottom');
    },
    onPageScroll: function onPageScroll(options) {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onPageScroll', options);
    },
    onShareAppMessage: function onShareAppMessage(options) {
      var target = options.target;

      if (target != null) {
        var _id = target.id;
        var element = document$1.getElementById(_id);

        if (element != null) {
          options.target.dataset = element.dataset;
        }
      }

      var path = getPath(id, this.options);
      return safeExecute(path, 'onShareAppMessage', options);
    },
    onResize: function onResize(options) {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onResize', options);
    },
    onTabItemTap: function onTabItemTap(options) {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onTabItemTap', options);
    },
    onTitleClick: function onTitleClick() {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onTitleClick');
    },
    onOptionMenuClick: function onOptionMenuClick() {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onOptionMenuClick');
    },
    onPopMenuClick: function onPopMenuClick() {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onPopMenuClick');
    },
    onPullIntercept: function onPullIntercept() {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onPullIntercept');
    }
  };
  config.eh = eventHandler;

  if (!isUndefined(data)) {
    config.data = data;
  }

  if (isBrowser) {
    config.path = id;
  }

  return config;
}

function createComponentConfig(component, componentName, data) {
  var _a, _b, _c;

  var id = componentName !== null && componentName !== void 0 ? componentName : "taro_component_".concat(pageId());
  var componentElement = null;
  var config = {
    attached: function attached() {
      var _this13 = this;

      perf.start(PAGE_INIT);
      Current.app.mount(component, id, function () {
        componentElement = document$1.getElementById(id);
        ensure(componentElement !== null, '没有找到组件实例。');
        safeExecute(id, 'onLoad');

        if (!isBrowser) {
          componentElement.ctx = _this13;
          componentElement.performUpdate(true);
        }
      });
    },
    detached: function detached() {
      Current.app.unmount(id, function () {
        if (componentElement) {
          componentElement.ctx = null;
        }
      });
    },
    pageLifetimes: {
      show: function show() {
        safeExecute(id, 'onShow');
      },
      hide: function hide() {
        safeExecute(id, 'onHide');
      }
    },
    methods: {
      eh: eventHandler
    }
  };

  if (!isUndefined(data)) {
    config.data = data;
  }

  config['options'] = (_a = component === null || component === void 0 ? void 0 : component['options']) !== null && _a !== void 0 ? _a : EMPTY_OBJ;
  config['externalClasses'] = (_b = component === null || component === void 0 ? void 0 : component['externalClasses']) !== null && _b !== void 0 ? _b : EMPTY_OBJ;
  config['behaviors'] = (_c = component === null || component === void 0 ? void 0 : component['behaviors']) !== null && _c !== void 0 ? _c : EMPTY_OBJ;
  return config;
}

function createRecursiveComponentConfig() {
  return {
    properties: {
      i: {
        type: Object,
        value: Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])({}, "nn"
        /* NodeName */
        , 'view')
      }
    },
    options: {
      addGlobalClass: true
    },
    methods: {
      eh: eventHandler
    }
  };
}

function connectReactPage(R, id) {
  var h = R.createElement;
  return function (component) {
    var _a; // eslint-disable-next-line dot-notation


    var isReactComponent = isFunction(component['render']) || !!((_a = component.prototype) === null || _a === void 0 ? void 0 : _a.isReactComponent) || component.prototype instanceof R.Component; // compat for some others react-like library

    var inject = function inject(node) {
      return node && injectPageInstance(node, id);
    };

    var refs = isReactComponent ? {
      ref: inject
    } : {
      forwardedRef: inject
    };

    if (PageContext === EMPTY_OBJ) {
      PageContext = R.createContext('');
    }

    return /*#__PURE__*/function (_R$Component) {
      Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Page, _R$Component);

      var _super7 = Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Page);

      function Page() {
        var _this14;

        Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, Page);

        _this14 = _super7.apply(this, arguments);
        _this14.state = {
          hasError: false
        };
        return _this14;
      }

      Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Page, [{
        key: "componentDidCatch",
        // React 16 uncaught error 会导致整个应用 crash，
        // 目前把错误缩小到页面
        value: function componentDidCatch(error, info) {
          console.warn(error);
          console.error(info.componentStack);
        }
      }, {
        key: "render",
        value: function render() {
          var children = this.state.hasError ? [] : h(PageContext.Provider, {
            value: id
          }, h(component, Object.assign(Object.assign({}, this.props), refs)));

          if (isBrowser) {
            return h('div', {
              id: id,
              className: 'taro_page'
            }, children);
          }

          return h('root', {
            id: id
          }, children);
        }
      }], [{
        key: "getDerivedStateFromError",
        value: function getDerivedStateFromError(error) {
          console.warn(error);
          return {
            hasError: true
          };
        }
      }]);

      return Page;
    }(R.Component);
  };
} // 初始值设置为 any 主要是为了过 TS 的校验


var R = EMPTY_OBJ;
var PageContext = EMPTY_OBJ;
var ReactDOM;

function createReactApp(App, react, reactdom) {
  R = react;
  ReactDOM = reactdom;
  ensure(!!ReactDOM, '构建 React/Nerv 项目请把 process.env.FRAMEWORK 设置为 \'react\'/\'nerv\' ');
  var ref = R.createRef();
  var wrapper;

  var AppWrapper = /*#__PURE__*/function (_R$Component2) {
    Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AppWrapper, _R$Component2);

    var _super8 = Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AppWrapper);

    function AppWrapper() {
      var _this15;

      Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, AppWrapper);

      _this15 = _super8.apply(this, arguments); // run createElement() inside the render function to make sure that owner is right

      _this15.pages = [];
      _this15.elements = [];
      return _this15;
    }

    Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(AppWrapper, [{
      key: "mount",
      value: function mount(component, id, cb) {
        var page = function page() {
          return R.createElement(component, {
            key: id,
            tid: id
          });
        };

        this.pages.push(page);
        this.forceUpdate(cb);
      }
    }, {
      key: "unmount",
      value: function unmount(id, cb) {
        for (var i = 0; i < this.elements.length; i++) {
          var element = this.elements[i];

          if (element.key === id) {
            this.elements.splice(i, 1);
            break;
          }
        }

        this.forceUpdate(cb);
      }
    }, {
      key: "render",
      value: function render() {
        while (this.pages.length > 0) {
          var page = this.pages.pop();
          this.elements.push(page());
        }

        return R.createElement(App, {
          ref: ref
        }, isBrowser ? R.createElement('div', null, this.elements.slice()) : this.elements.slice());
      }
    }]);

    return AppWrapper;
  }(R.Component);

  var AppConfig = /*#__PURE__*/function () {
    function AppConfig() {
      Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, AppConfig);
    }

    Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(AppConfig, [{
      key: "onLaunch",
      value: function onLaunch(options) {
        wrapper = ReactDOM.render(R.createElement(AppWrapper), document$1.getElementById('app'));
        var app = ref.current;
        Current.router = Object.assign({
          params: options === null || options === void 0 ? void 0 : options.query
        }, options);

        if (app != null && isFunction(app.onLaunch)) {
          app.onLaunch(options);
        }
      }
    }, {
      key: "onShow",
      value: function onShow(options) {
        var app = ref.current;
        Current.router = Object.assign({
          params: options === null || options === void 0 ? void 0 : options.query
        }, options);

        if (app != null && isFunction(app.componentDidShow)) {
          app.componentDidShow(options);
        }
      }
    }, {
      key: "onHide",
      value: function onHide(options) {
        var app = ref.current;

        if (app != null && isFunction(app.componentDidHide)) {
          app.componentDidHide(options);
        }
      }
    }, {
      key: "render",
      value: function render(cb) {
        wrapper.forceUpdate(cb);
      }
    }, {
      key: "mount",
      value: function mount(component, id, cb) {
        var page = connectReactPage(R, id)(component);
        wrapper.mount(page, id, cb);
      }
    }, {
      key: "unmount",
      value: function unmount(id, cb) {
        wrapper.unmount(id, cb);
      }
    }]);

    return AppConfig;
  }();

  Current.app = new AppConfig();
  return Current.app;
}

function connectVuePage(Vue, id) {
  return function (component) {
    var injectedPage = Vue.extend({
      props: {
        tid: String
      },
      mixins: [component, {
        created: function created() {
          injectPageInstance(this, id);
        }
      }]
    });
    var options = {
      render: function render(h) {
        return h(isBrowser ? 'div' : 'root', {
          attrs: {
            id: id,
            class: isBrowser ? 'taro_page' : ''
          }
        }, [h(injectedPage, {
          props: {
            tid: id
          }
        })]);
      }
    };
    return options;
  };
}

var Vue;

function createVueApp(App, vue) {
  Vue = vue;
  ensure(!!Vue, '构建 Vue 项目请把 process.env.FRAMEWORK 设置为 \'vue\'');
  Vue.config.getTagNamespace = noop;
  var elements = [];
  var pages = [];
  var appInstance;
  var wrapper = new Vue({
    render: function render(h) {
      while (pages.length > 0) {
        var page = pages.pop();
        elements.push(page(h));
      }

      return h(App.$options, {
        ref: 'app'
      }, elements.slice());
    },
    methods: {
      mount: function mount(component, id, cb) {
        pages.push(function (h) {
          return h(component, {
            key: id
          });
        });
        this.updateSync(cb);
      },
      updateSync: function updateSync(cb) {
        this._update(this._render(), false);

        this.$children.forEach(function (child) {
          return child._update(child._render(), false);
        });
        cb();
      },
      unmount: function unmount(id, cb) {
        for (var i = 0; i < elements.length; i++) {
          var element = elements[i];

          if (element.key === id) {
            elements.splice(i, 1);
            break;
          }
        }

        this.updateSync(cb);
      }
    }
  });

  var AppConfig = /*#__PURE__*/function () {
    function AppConfig() {
      Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, AppConfig);
    }

    Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(AppConfig, [{
      key: "onLaunch",
      value: function onLaunch(options) {
        wrapper.$mount(document$1.getElementById('app'));
        appInstance = wrapper.$refs.app;
        Current.router = Object.assign({
          params: options === null || options === void 0 ? void 0 : options.query
        }, options);

        if (appInstance != null && isFunction(appInstance.$options.onLaunch)) {
          appInstance.$options.onLaunch.call(appInstance, options);
        }
      }
    }, {
      key: "onShow",
      value: function onShow(options) {
        Current.router = Object.assign({
          params: options === null || options === void 0 ? void 0 : options.query
        }, options);

        if (appInstance != null && isFunction(appInstance.$options.onShow)) {
          appInstance.$options.onShow.call(appInstance, options);
        }
      }
    }, {
      key: "onHide",
      value: function onHide(options) {
        if (appInstance != null && isFunction(appInstance.$options.onHide)) {
          appInstance.$options.onHide.call(appInstance, options);
        }
      }
    }, {
      key: "mount",
      value: function mount(component, id, cb) {
        var page = connectVuePage(Vue, id)(component);
        wrapper.mount(page, id, cb);
      }
    }, {
      key: "unmount",
      value: function unmount(id, cb) {
        wrapper.unmount(id, cb);
      }
    }]);

    return AppConfig;
  }();

  Current.app = new AppConfig();
  return Current.app;
}

var taroHooks = function taroHooks(lifecycle) {
  return function (fn) {
    var id = R.useContext(PageContext);
    R.useLayoutEffect(function () {
      var inst = getPageInstance(id);
      var first = false;

      if (inst == null) {
        first = true;
        inst = Object.create(null);
      }

      if (lifecycle !== 'onShareAppMessage') {
        inst[lifecycle] = [].concat(Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(inst[lifecycle] || []), [fn.bind(null)]);
      } else {
        inst[lifecycle] = fn.bind(null);
      }

      if (first) {
        injectPageInstance(inst, id);
      }
    }, []);
  };
};

var useDidShow = taroHooks('componentDidShow');
var useDidHide = taroHooks('componentDidHide');
var usePullDownRefresh = taroHooks('onPullDownRefresh');
var useReachBottom = taroHooks('onReachBottom');
var usePageScroll = taroHooks('onPageScroll');
var useResize = taroHooks('onResize');
var useShareAppMessage = taroHooks('onShareAppMessage');
var useTabItemTap = taroHooks('onTabItemTap');
var useTitleClick = taroHooks('onTitleClick');
var useOptionMenuClick = taroHooks('onOptionMenuClick');
var usePullIntercept = taroHooks('onPullIntercept');

var useRouter = function useRouter() {
  var dynamic = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return dynamic ? Current.router : R.useMemo(function () {
    return Current.router;
  }, []);
};

var useScope = function useScope() {
  return undefined;
};

var nextTick = function nextTick(cb) {
  setTimeout(cb, 1);
};

var Events = /*#__PURE__*/function () {
  function Events(opts) {
    Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, Events);

    if (typeof opts !== 'undefined' && opts.callbacks) {
      this.callbacks = opts.callbacks;
    } else {
      this.callbacks = {};
    }
  }

  Object(_Users_sobot_Downloads_github_apps_quant_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Events, [{
    key: "on",
    value: function on(eventName, callback, context) {
      var event, node, tail, list;

      if (!callback) {
        return this;
      }

      eventName = eventName.split(Events.eventSplitter);
      var calls = this.callbacks;

      while (event = eventName.shift()) {
        list = calls[event];
        node = list ? list.tail : {};
        node.next = tail = {};
        node.context = context;
        node.callback = callback;
        calls[event] = {
          tail: tail,
          next: list ? list.next : node
        };
      }

      return this;
    }
  }, {
    key: "once",
    value: function once(events, callback, context) {
      var _this16 = this;

      var wrapper = function wrapper() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        callback.apply(_this16, args);

        _this16.off(events, wrapper, context);
      };

      this.on(events, wrapper, context);
      return this;
    }
  }, {
    key: "off",
    value: function off(events, callback, context) {
      var event, calls, node, tail, cb, ctx;

      if (!(calls = this.callbacks)) {
        return this;
      }

      if (!(events || callback || context)) {
        delete this.callbacks;
        return this;
      }

      events = events ? events.split(Events.eventSplitter) : Object.keys(calls);

      while (event = events.shift()) {
        node = calls[event];
        delete calls[event];

        if (!node || !(callback || context)) {
          continue;
        }

        tail = node.tail;

        while ((node = node.next) !== tail) {
          cb = node.callback;
          ctx = node.context;

          if (callback && cb !== callback || context && ctx !== context) {
            this.on(event, cb, ctx);
          }
        }
      }

      return this;
    }
  }, {
    key: "trigger",
    value: function trigger(events) {
      var event, node, calls, tail;

      if (!(calls = this.callbacks)) {
        return this;
      }

      events = events.split(Events.eventSplitter);
      var rest = [].slice.call(arguments, 1);

      while (event = events.shift()) {
        if (node = calls[event]) {
          tail = node.tail;

          while ((node = node.next) !== tail) {
            node.callback.apply(node.context || this, rest);
          }
        }
      }

      return this;
    }
  }]);

  return Events;
}();

Events.eventSplitter = /\s+/;
var eventCenter;

if (false) {} else {
  eventCenter = new Events();
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ })

}]);
//# sourceMappingURL=taro.js.map