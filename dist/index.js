parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"J4Nk":[function(require,module,exports) {
"use strict";var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable;function n(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function o(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(r){return t[r]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(r){n[r]=r}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}module.exports=o()?Object.assign:function(o,c){for(var a,i,s=n(o),f=1;f<arguments.length;f++){for(var u in a=Object(arguments[f]))t.call(a,u)&&(s[u]=a[u]);if(r){i=r(a);for(var b=0;b<i.length;b++)e.call(a,i[b])&&(s[i[b]]=a[i[b]])}}return s};
},{}],"awqi":[function(require,module,exports) {
"use strict";var e=require("object-assign"),t="function"==typeof Symbol&&Symbol.for,r=t?Symbol.for("react.element"):60103,n=t?Symbol.for("react.portal"):60106,o=t?Symbol.for("react.fragment"):60107,u=t?Symbol.for("react.strict_mode"):60108,l=t?Symbol.for("react.profiler"):60114,f=t?Symbol.for("react.provider"):60109,c=t?Symbol.for("react.context"):60110,i=t?Symbol.for("react.concurrent_mode"):60111,a=t?Symbol.for("react.forward_ref"):60112,s=t?Symbol.for("react.suspense"):60113,p=t?Symbol.for("react.memo"):60115,y=t?Symbol.for("react.lazy"):60116,d="function"==typeof Symbol&&Symbol.iterator;function v(e,t,r,n,o,u,l,f){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,o,u,l,f],i=0;(e=Error(t.replace(/%s/g,function(){return c[i++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}function m(e){for(var t=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);v(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function _(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||h}function S(){}function k(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||h}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&m("85"),this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=_.prototype;var g=k.prototype=new S;g.constructor=k,e(g,_.prototype),g.isPureReactComponent=!0;var $={current:null},x={current:null},C=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var o=void 0,u={},l=null,f=null;if(null!=t)for(o in void 0!==t.ref&&(f=t.ref),void 0!==t.key&&(l=""+t.key),t)C.call(t,o)&&!w.hasOwnProperty(o)&&(u[o]=t[o]);var c=arguments.length-2;if(1===c)u.children=n;else if(1<c){for(var i=Array(c),a=0;a<c;a++)i[a]=arguments[a+2];u.children=i}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===u[o]&&(u[o]=c[o]);return{$$typeof:r,type:e,key:l,ref:f,props:u,_owner:x.current}}function R(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}function j(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}var O=/\/+/g,A=[];function I(e,t,r,n){if(A.length){var o=A.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>A.length&&A.push(e)}function U(e,t,o,u){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var f=!1;if(null===e)f=!0;else switch(l){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case r:case n:f=!0}}if(f)return o(u,e,""===t?"."+F(e,0):t),1;if(f=0,t=""===t?".":t+":",Array.isArray(e))for(var c=0;c<e.length;c++){var i=t+F(l=e[c],c);f+=U(l,i,o,u)}else if(null===e||"object"!=typeof e?i=null:i="function"==typeof(i=d&&e[d]||e["@@iterator"])?i:null,"function"==typeof i)for(e=i.call(e),c=0;!(l=e.next()).done;)f+=U(l=l.value,i=t+F(l,c++),o,u);else"object"===l&&m("31","[object Object]"===(o=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":o,"");return f}function q(e,t,r){return null==e?0:U(e,"",t,r)}function F(e,t){return"object"==typeof e&&null!==e&&null!=e.key?j(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function V(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,n,r,function(e){return e}):null!=e&&(E(e)&&(e=R(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(O,"$&/")+"/")+r)),n.push(e))}function D(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(O,"$&/")+"/"),q(e,V,t=I(t,u,n,o)),M(t)}function T(){var e=$.current;return null===e&&m("321"),e}var N={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return D(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;q(e,L,t=I(null,null,t,r)),M(t)},count:function(e){return q(e,function(){return null},null)},toArray:function(e){var t=[];return D(e,t,null,function(e){return e}),t},only:function(e){return E(e)||m("143"),e}},createRef:function(){return{current:null}},Component:_,PureComponent:k,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:a,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return T().useCallback(e,t)},useContext:function(e,t){return T().useContext(e,t)},useEffect:function(e,t){return T().useEffect(e,t)},useImperativeHandle:function(e,t,r){return T().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return T().useLayoutEffect(e,t)},useMemo:function(e,t){return T().useMemo(e,t)},useReducer:function(e,t,r){return T().useReducer(e,t,r)},useRef:function(e){return T().useRef(e)},useState:function(e){return T().useState(e)},Fragment:o,StrictMode:u,Suspense:s,createElement:P,cloneElement:function(t,n,o){null==t&&m("267",t);var u=void 0,l=e({},t.props),f=t.key,c=t.ref,i=t._owner;if(null!=n){void 0!==n.ref&&(c=n.ref,i=x.current),void 0!==n.key&&(f=""+n.key);var a=void 0;for(u in t.type&&t.type.defaultProps&&(a=t.type.defaultProps),n)C.call(n,u)&&!w.hasOwnProperty(u)&&(l[u]=void 0===n[u]&&void 0!==a?a[u]:n[u])}if(1===(u=arguments.length-2))l.children=o;else if(1<u){a=Array(u);for(var s=0;s<u;s++)a[s]=arguments[s+2];l.children=a}return{$$typeof:r,type:t.type,key:f,ref:c,props:l,_owner:i}},createFactory:function(e){var t=P.bind(null,e);return t.type=e,t},isValidElement:E,version:"16.8.6",unstable_ConcurrentMode:i,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:$,ReactCurrentOwner:x,assign:e}},z={default:N},B=z&&N||z;module.exports=B.default||B;
},{"object-assign":"J4Nk"}],"1n8/":[function(require,module,exports) {
"use strict";module.exports=require("./cjs/react.production.min.js");
},{"./cjs/react.production.min.js":"awqi"}],"u9vI":[function(require,module,exports) {
function n(n){var o=typeof n;return null!=n&&("object"==o||"function"==o)}module.exports=n;
},{}],"j3D9":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3],t="object"==typeof e&&e&&e.Object===Object&&e;module.exports=t;
},{}],"MIhM":[function(require,module,exports) {
var e=require("./_freeGlobal"),t="object"==typeof self&&self&&self.Object===Object&&self,l=e||t||Function("return this")();module.exports=l;
},{"./_freeGlobal":"j3D9"}],"0pJf":[function(require,module,exports) {
var r=require("./_root"),e=function(){return r.Date.now()};module.exports=e;
},{"./_root":"MIhM"}],"wppe":[function(require,module,exports) {
var o=require("./_root"),r=o.Symbol;module.exports=r;
},{"./_root":"MIhM"}],"uiOY":[function(require,module,exports) {
var r=require("./_Symbol"),t=Object.prototype,e=t.hasOwnProperty,o=t.toString,a=r?r.toStringTag:void 0;function l(r){var t=e.call(r,a),l=r[a];try{r[a]=void 0;var c=!0}catch(n){}var i=o.call(r);return c&&(t?r[a]=l:delete r[a]),i}module.exports=l;
},{"./_Symbol":"wppe"}],"lPmd":[function(require,module,exports) {
var t=Object.prototype,o=t.toString;function r(t){return o.call(t)}module.exports=r;
},{}],"e5TX":[function(require,module,exports) {
var e=require("./_Symbol"),r=require("./_getRawTag"),o=require("./_objectToString"),t="[object Null]",i="[object Undefined]",n=e?e.toStringTag:void 0;function u(e){return null==e?void 0===e?i:t:n&&n in Object(e)?r(e):o(e)}module.exports=u;
},{"./_Symbol":"wppe","./_getRawTag":"uiOY","./_objectToString":"lPmd"}],"OuyB":[function(require,module,exports) {
function e(e){return null!=e&&"object"==typeof e}module.exports=e;
},{}],"bgO7":[function(require,module,exports) {
var e=require("./_baseGetTag"),r=require("./isObjectLike"),o="[object Symbol]";function t(t){return"symbol"==typeof t||r(t)&&e(t)==o}module.exports=t;
},{"./_baseGetTag":"e5TX","./isObjectLike":"OuyB"}],"iS0Z":[function(require,module,exports) {
var e=require("./isObject"),r=require("./isSymbol"),t=NaN,i=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,n=/^0o[0-7]+$/i,s=parseInt;function a(a){if("number"==typeof a)return a;if(r(a))return t;if(e(a)){var o="function"==typeof a.valueOf?a.valueOf():a;a=e(o)?o+"":o}if("string"!=typeof a)return 0===a?a:+a;a=a.replace(i,"");var l=u.test(a);return l||n.test(a)?s(a.slice(2),l?2:8):f.test(a)?t:+a}module.exports=a;
},{"./isObject":"u9vI","./isSymbol":"bgO7"}],"CXfR":[function(require,module,exports) {
var i=require("./isObject"),t=require("./now"),n=require("./toNumber"),r="Expected a function",e=Math.max,u=Math.min;function o(o,a,f){var c,v,d,m,l,s,p=0,T=!1,h=!1,x=!0;if("function"!=typeof o)throw new TypeError(r);function g(i){var t=c,n=v;return c=v=void 0,p=i,m=o.apply(n,t)}function q(i){var t=i-s;return void 0===s||t>=a||t<0||h&&i-p>=d}function w(){var i=t();if(q(i))return y(i);l=setTimeout(w,function(i){var t=a-(i-s);return h?u(t,d-(i-p)):t}(i))}function y(i){return l=void 0,x&&c?g(i):(c=v=void 0,m)}function b(){var i=t(),n=q(i);if(c=arguments,v=this,s=i,n){if(void 0===l)return function(i){return p=i,l=setTimeout(w,a),T?g(i):m}(s);if(h)return l=setTimeout(w,a),g(s)}return void 0===l&&(l=setTimeout(w,a)),m}return a=n(a)||0,i(f)&&(T=!!f.leading,d=(h="maxWait"in f)?e(n(f.maxWait)||0,a):d,x="trailing"in f?!!f.trailing:x),b.cancel=function(){void 0!==l&&clearTimeout(l),p=0,c=s=v=l=void 0},b.flush=function(){return void 0===l?m:y(t())},b}module.exports=o;
},{"./isObject":"u9vI","./now":"0pJf","./toNumber":"iS0Z"}],"Ywd4":[function(require,module,exports) {
var i=require("./debounce"),e=require("./isObject"),n="Expected a function";function r(r,t,a){var o=!0,u=!0;if("function"!=typeof r)throw new TypeError(n);return e(a)&&(o="leading"in a?!!a.leading:o,u="trailing"in a?!!a.trailing:u),i(r,t,{leading:o,maxWait:t,trailing:u})}module.exports=r;
},{"./debounce":"CXfR","./isObject":"u9vI"}],"zo2T":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("react")),t=o(require("lodash/throttle"));function o(e){return e&&e.__esModule?e:{default:e}}function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(t){i(e,t,o[t])})}return e}function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t,o){return t&&l(e.prototype,t),o&&l(e,o),e}function u(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?c(e):t}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(o){function n(){var o;return a(this,n),(o=u(this,f(n).apply(this,arguments))).rootRef=e.default.createRef(),o.wrapRef=e.default.createRef(),o.state={isOverflow:!1,rootWidth:0,wrapWidth:0,x:0,canUseMouseMove:!1,mouseX:0},o.throttledResize=(0,t.default)(function(){o.handleResize()},400),o.handleResize=function(){var e=o.state.isOverflow,t=o.rootRef.current.clientWidth,n=o.wrapRef.current.scrollWidth;t<n?o.setState({isOverflow:!0,rootWidth:t,wrapWidth:n}):e&&o.setState({isOverflow:!1})},o.handleWheel=function(e){var t=o.state,n=t.isOverflow,r=t.rootWidth,i=t.wrapWidth,a=t.x;if(n){var l=a;e.deltaX>0?r-i<a&&(l-=4):a<0&&(l+=4),o.setState({x:l})}},o.handleMouseDown=function(e){var t=o.state,n=t.isOverflow,r=t.x;if(n){var i=0;if("mousedown"===e.type)i=e.pageX+-r;else if("touchstart"===e.type){i=e.changedTouches[0].pageX+-r}o.setState({canUseMouseMove:!0,mouseX:i})}},o.handleMouseMove=function(e){var t=o.state,n=t.isOverflow,r=t.canUseMouseMove,i=t.rootWidth,a=t.wrapWidth,l=t.x,s=t.mouseX;if(n&&r){var u=0;if("mousemove"===e.type)e.preventDefault(),u=e.pageX-s;else if("touchmove"===e.type){u=e.changedTouches[0].pageX-s}var c=.5*(l+u);c>0&&(c=0),-c>a-i&&(c=-(a-i)),o.setState({x:c})}},o.handleMouseUp=function(){var e=o.state,t=e.isOverflow,n=e.canUseMouseMove;t&&n&&o.setState({canUseMouseMove:!1})},o.handleClickLeft=function(e){e.stopPropagation(),e.preventDefault(),o.setState(function(e){var t=e.x+100;return t>0&&(t=0),{x:t}})},o.handleClickRight=function(e){e.stopPropagation(),e.preventDefault();var t=o.state,n=t.rootWidth,r=t.wrapWidth;o.setState(function(e){var t=e.x-100;return-t>r-n&&(t=-(r-n)),{x:t}})},o}return h(n,e.default.Component),s(n,[{key:"componentDidMount",value:function(){this.handleResize(),window.addEventListener("resize",this.throttledResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.throttledResize)}},{key:"render",value:function(){var t=this.props,o=t.children,n=t.className,i=t.style,a=t.iconSize,l=t.iconWrapStyle,s=t.iconStyle,u=t.iconColor,c=this.state,f=c.x,h=c.isOverflow,d=c.rootWidth,p=c.wrapWidth;return e.default.createElement("div",{className:n,ref:this.rootRef,style:r({position:"relative",overflowX:"hidden"},i)},e.default.createElement("div",{ref:this.wrapRef,style:{transform:"translateX(".concat(f,"px)"),whiteSpace:"nowrap"},role:"presentation",onWheel:this.handleWheel,onMouseDown:this.handleMouseDown,onMouseMove:this.handleMouseMove,onMouseUp:this.handleMouseUp,onMouseLeave:this.handleMouseUp,onTouchStart:this.handleMouseDown,onTouchMove:this.handleMouseMove,onTouchEnd:this.handleMouseUp},o),h&&f<0&&e.default.createElement("div",{style:r({position:"absolute",zIndex:1,top:0,left:0,minWidth:50,height:"100%",textAlign:"left",cursor:"pointer",outline:0},l.left),role:"button",tabIndex:0,onClick:this.handleClickLeft},e.default.createElement("svg",{style:r({position:"relative"},s.left),width:a,height:a,viewBox:"0 0 48 48"},e.default.createElement("path",{d:"M30.83 32.67l-9.17-9.17 9.17-9.17L28 11.5l-12 12 12 12z",fill:u}),e.default.createElement("path",{d:"M0-.25h48v48H0z",fill:"none"}))),h&&-f<p-d&&e.default.createElement("div",{style:r({position:"absolute",zIndex:1,top:0,right:0,minWidth:50,height:"100%",textAlign:"right",cursor:"pointer",outline:0},l.right),role:"button",tabIndex:0,onClick:this.handleClickRight},e.default.createElement("svg",{style:r({position:"relative"},s.right),width:a,height:a,viewBox:"0 0 48 48"},e.default.createElement("path",{d:"M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z",fill:u}),e.default.createElement("path",{d:"M0-.25h48v48H0z",fill:"none"}))))}}]),n}();p.defaultProps={className:void 0,style:void 0,iconSize:26,iconColor:"#aeb6bb",iconWrapStyle:{left:{backgroundImage:"linear-gradient(to right, hsl(0, 100%, 100%) 25%, hsla(0, 0%, 0%, 0))"},right:{backgroundImage:"linear-gradient(to left, hsl(0, 100%, 100%) 25%, hsla(0, 0%, 0%, 0))"}},iconStyle:{left:{},right:{}}};var v=p;exports.default=v;
},{"react":"1n8/","lodash/throttle":"Ywd4"}]},{},["zo2T"], null)
//# sourceMappingURL=dist/index.js.map