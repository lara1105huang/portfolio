webpackJsonp([2],{"/ocq":function(e,t,n){"use strict";
/*!
  * vue-router v3.5.3
  * (c) 2021 Evan You
  * @license MIT
  */function r(e,t){for(var n in t)e[n]=t[n];return e}var i=/[!'()*]/g,s=function(e){return"%"+e.charCodeAt(0).toString(16)},o=/%2C/g,a=function(e){return encodeURIComponent(e).replace(i,s).replace(o,",")};function c(e){try{return decodeURIComponent(e)}catch(e){0}return e}var u=function(e){return null==e||"object"==typeof e?e:String(e)};function l(e){var t={};return(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var n=e.replace(/\+/g," ").split("="),r=c(n.shift()),i=n.length>0?c(n.join("=")):null;void 0===t[r]?t[r]=i:Array.isArray(t[r])?t[r].push(i):t[r]=[t[r],i]}),t):t}function h(e){var t=e?Object.keys(e).map(function(t){var n=e[t];if(void 0===n)return"";if(null===n)return a(t);if(Array.isArray(n)){var r=[];return n.forEach(function(e){void 0!==e&&(null===e?r.push(a(t)):r.push(a(t)+"="+a(e)))}),r.join("&")}return a(t)+"="+a(n)}).filter(function(e){return e.length>0}).join("&"):null;return t?"?"+t:""}var d=/\/?$/;function f(e,t,n,r){var i=r&&r.options.stringifyQuery,s=t.query||{};try{s=p(s)}catch(e){}var o={name:t.name||e&&e.name,meta:e&&e.meta||{},path:t.path||"/",hash:t.hash||"",query:s,params:t.params||{},fullPath:g(t,i),matched:e?function(e){var t=[];for(;e;)t.unshift(e),e=e.parent;return t}(e):[]};return n&&(o.redirectedFrom=g(n,i)),Object.freeze(o)}function p(e){if(Array.isArray(e))return e.map(p);if(e&&"object"==typeof e){var t={};for(var n in e)t[n]=p(e[n]);return t}return e}var m=f(null,{path:"/"});function g(e,t){var n=e.path,r=e.query;void 0===r&&(r={});var i=e.hash;return void 0===i&&(i=""),(n||"/")+(t||h)(r)+i}function y(e,t,n){return t===m?e===t:!!t&&(e.path&&t.path?e.path.replace(d,"")===t.path.replace(d,"")&&(n||e.hash===t.hash&&v(e.query,t.query)):!(!e.name||!t.name)&&(e.name===t.name&&(n||e.hash===t.hash&&v(e.query,t.query)&&v(e.params,t.params))))}function v(e,t){if(void 0===e&&(e={}),void 0===t&&(t={}),!e||!t)return e===t;var n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every(function(n,i){var s=e[n];if(r[i]!==n)return!1;var o=t[n];return null==s||null==o?s===o:"object"==typeof s&&"object"==typeof o?v(s,o):String(s)===String(o)})}function _(e){for(var t=0;t<e.matched.length;t++){var n=e.matched[t];for(var r in n.instances){var i=n.instances[r],s=n.enteredCbs[r];if(i&&s){delete n.enteredCbs[r];for(var o=0;o<s.length;o++)i._isBeingDestroyed||s[o](i)}}}}var w={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,t){var n=t.props,i=t.children,s=t.parent,o=t.data;o.routerView=!0;for(var a=s.$createElement,c=n.name,u=s.$route,l=s._routerViewCache||(s._routerViewCache={}),h=0,d=!1;s&&s._routerRoot!==s;){var f=s.$vnode?s.$vnode.data:{};f.routerView&&h++,f.keepAlive&&s._directInactive&&s._inactive&&(d=!0),s=s.$parent}if(o.routerViewDepth=h,d){var p=l[c],m=p&&p.component;return m?(p.configProps&&b(m,o,p.route,p.configProps),a(m,o,i)):a()}var g=u.matched[h],y=g&&g.components[c];if(!g||!y)return l[c]=null,a();l[c]={component:y},o.registerRouteInstance=function(e,t){var n=g.instances[c];(t&&n!==e||!t&&n===e)&&(g.instances[c]=t)},(o.hook||(o.hook={})).prepatch=function(e,t){g.instances[c]=t.componentInstance},o.hook.init=function(e){e.data.keepAlive&&e.componentInstance&&e.componentInstance!==g.instances[c]&&(g.instances[c]=e.componentInstance),_(u)};var v=g.props&&g.props[c];return v&&(r(l[c],{route:u,configProps:v}),b(y,o,u,v)),a(y,o,i)}};function b(e,t,n,i){var s=t.props=function(e,t){switch(typeof t){case"undefined":return;case"object":return t;case"function":return t(e);case"boolean":return t?e.params:void 0;default:0}}(n,i);if(s){s=t.props=r({},s);var o=t.attrs=t.attrs||{};for(var a in s)e.props&&a in e.props||(o[a]=s[a],delete s[a])}}function I(e,t,n){var r=e.charAt(0);if("/"===r)return e;if("?"===r||"#"===r)return t+e;var i=t.split("/");n&&i[i.length-1]||i.pop();for(var s=e.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function T(e){return e.replace(/\/+/g,"/")}var E=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},C=U,S=x,k=function(e,t){return P(x(e,t),t)},O=P,A=F,N=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function x(e,t){for(var n,r=[],i=0,s=0,o="",a=t&&t.delimiter||"/";null!=(n=N.exec(e));){var c=n[0],u=n[1],l=n.index;if(o+=e.slice(s,l),s=l+c.length,u)o+=u[1];else{var h=e[s],d=n[2],f=n[3],p=n[4],m=n[5],g=n[6],y=n[7];o&&(r.push(o),o="");var v=null!=d&&null!=h&&h!==d,_="+"===g||"*"===g,w="?"===g||"*"===g,b=n[2]||a,I=p||m;r.push({name:f||i++,prefix:d||"",delimiter:b,optional:w,repeat:_,partial:v,asterisk:!!y,pattern:I?L(I):y?".*":"[^"+D(b)+"]+?"})}}return s<e.length&&(o+=e.substr(s)),o&&r.push(o),r}function R(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function P(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",M(t)));return function(t,r){for(var i="",s=t||{},o=(r||{}).pretty?R:encodeURIComponent,a=0;a<e.length;a++){var c=e[a];if("string"!=typeof c){var u,l=s[c.name];if(null==l){if(c.optional){c.partial&&(i+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(E(l)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var h=0;h<l.length;h++){if(u=o(l[h]),!n[a].test(u))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(u)+"`");i+=(0===h?c.prefix:c.delimiter)+u}}else{if(u=c.asterisk?encodeURI(l).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):o(l),!n[a].test(u))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+u+'"');i+=c.prefix+u}}else i+=c}return i}}function D(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function L(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function j(e,t){return e.keys=t,e}function M(e){return e&&e.sensitive?"":"i"}function F(e,t,n){E(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,i=!1!==n.end,s="",o=0;o<e.length;o++){var a=e[o];if("string"==typeof a)s+=D(a);else{var c=D(a.prefix),u="(?:"+a.pattern+")";t.push(a),a.repeat&&(u+="(?:"+c+u+")*"),s+=u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")"}}var l=D(n.delimiter||"/"),h=s.slice(-l.length)===l;return r||(s=(h?s.slice(0,-l.length):s)+"(?:"+l+"(?=$))?"),s+=i?"$":r&&h?"":"(?="+l+"|$)",j(new RegExp("^"+s,M(n)),t)}function U(e,t,n){return E(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return j(e,t)}(e,t):E(e)?function(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(U(e[i],t,n).source);return j(new RegExp("(?:"+r.join("|")+")",M(n)),t)}(e,t,n):function(e,t,n){return F(x(e,n),t,n)}(e,t,n)}C.parse=S,C.compile=k,C.tokensToFunction=O,C.tokensToRegExp=A;var V=Object.create(null);function q(e,t,n){t=t||{};try{var r=V[e]||(V[e]=C.compile(e));return"string"==typeof t.pathMatch&&(t[0]=t.pathMatch),r(t,{pretty:!0})}catch(e){return""}finally{delete t[0]}}function $(e,t,n,i){var s="string"==typeof e?{path:e}:e;if(s._normalized)return s;if(s.name){var o=(s=r({},e)).params;return o&&"object"==typeof o&&(s.params=r({},o)),s}if(!s.path&&s.params&&t){(s=r({},s))._normalized=!0;var a=r(r({},t.params),s.params);if(t.name)s.name=t.name,s.params=a;else if(t.matched.length){var c=t.matched[t.matched.length-1].path;s.path=q(c,a,t.path)}else 0;return s}var h=function(e){var t="",n="",r=e.indexOf("#");r>=0&&(t=e.slice(r),e=e.slice(0,r));var i=e.indexOf("?");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{path:e,query:n,hash:t}}(s.path||""),d=t&&t.path||"/",f=h.path?I(h.path,d,n||s.append):d,p=function(e,t,n){void 0===t&&(t={});var r,i=n||l;try{r=i(e||"")}catch(e){r={}}for(var s in t){var o=t[s];r[s]=Array.isArray(o)?o.map(u):u(o)}return r}(h.query,s.query,i&&i.options.parseQuery),m=s.hash||h.hash;return m&&"#"!==m.charAt(0)&&(m="#"+m),{_normalized:!0,path:f,query:p,hash:m}}var B,K=[String,Object],z=[String,Array],W=function(){},H={name:"RouterLink",props:{to:{type:K,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:z,default:"click"}},render:function(e){var t=this,n=this.$router,i=this.$route,s=n.resolve(this.to,i,this.append),o=s.location,a=s.route,c=s.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,p=null==l?"router-link-active":l,m=null==h?"router-link-exact-active":h,g=null==this.activeClass?p:this.activeClass,v=null==this.exactActiveClass?m:this.exactActiveClass,_=a.redirectedFrom?f(null,$(a.redirectedFrom),null,n):a;u[v]=y(i,_,this.exactPath),u[g]=this.exact||this.exactPath?u[v]:function(e,t){return 0===e.path.replace(d,"/").indexOf(t.path.replace(d,"/"))&&(!t.hash||e.hash===t.hash)&&function(e,t){for(var n in t)if(!(n in e))return!1;return!0}(e.query,t.query)}(i,_);var w=u[v]?this.ariaCurrentValue:null,b=function(e){G(e)&&(t.replace?n.replace(o,W):n.push(o,W))},I={click:G};Array.isArray(this.event)?this.event.forEach(function(e){I[e]=b}):I[this.event]=b;var T={class:u},E=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:b,isActive:u[g],isExactActive:u[v]});if(E){if(1===E.length)return E[0];if(E.length>1||!E.length)return 0===E.length?e():e("span",{},E)}if("a"===this.tag)T.on=I,T.attrs={href:c,"aria-current":w};else{var C=function e(t){if(t)for(var n,r=0;r<t.length;r++){if("a"===(n=t[r]).tag)return n;if(n.children&&(n=e(n.children)))return n}}(this.$slots.default);if(C){C.isStatic=!1;var S=C.data=r({},C.data);for(var k in S.on=S.on||{},S.on){var O=S.on[k];k in I&&(S.on[k]=Array.isArray(O)?O:[O])}for(var A in I)A in S.on?S.on[A].push(I[A]):S.on[A]=b;var N=C.data.attrs=r({},C.data.attrs);N.href=c,N["aria-current"]=w}else T.on=I}return e(this.tag,T,this.$slots.default)}};function G(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.defaultPrevented||void 0!==e.button&&0!==e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Q(e){if(!Q.installed||B!==e){Q.installed=!0,B=e;var t=function(e){return void 0!==e},n=function(e,n){var r=e.$options._parentVnode;t(r)&&t(r=r.data)&&t(r=r.registerRouteInstance)&&r(e,n)};e.mixin({beforeCreate:function(){t(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",w),e.component("RouterLink",H);var r=e.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var Y="undefined"!=typeof window;function J(e,t,n,r,i){var s=t||[],o=n||Object.create(null),a=r||Object.create(null);e.forEach(function(e){!function e(t,n,r,i,s,o){var a=i.path;var c=i.name;0;var u=i.pathToRegexpOptions||{};var l=function(e,t,n){n||(e=e.replace(/\/$/,""));if("/"===e[0])return e;if(null==t)return e;return T(t.path+"/"+e)}(a,s,u.strict);"boolean"==typeof i.caseSensitive&&(u.sensitive=i.caseSensitive);var h={path:l,regex:function(e,t){var n=C(e,[],t);return n}(l,u),components:i.components||{default:i.component},alias:i.alias?"string"==typeof i.alias?[i.alias]:i.alias:[],instances:{},enteredCbs:{},name:c,parent:s,matchAs:o,redirect:i.redirect,beforeEnter:i.beforeEnter,meta:i.meta||{},props:null==i.props?{}:i.components?i.props:{default:i.props}};i.children&&i.children.forEach(function(i){var s=o?T(o+"/"+i.path):void 0;e(t,n,r,i,h,s)});n[h.path]||(t.push(h.path),n[h.path]=h);if(void 0!==i.alias)for(var d=Array.isArray(i.alias)?i.alias:[i.alias],f=0;f<d.length;++f){var p=d[f];0;var m={path:p,children:i.children};e(t,n,r,m,s,h.path||"/")}c&&(r[c]||(r[c]=h))}(s,o,a,e,i)});for(var c=0,u=s.length;c<u;c++)"*"===s[c]&&(s.push(s.splice(c,1)[0]),u--,c--);return{pathList:s,pathMap:o,nameMap:a}}function X(e,t){var n=J(e),r=n.pathList,i=n.pathMap,s=n.nameMap;function o(e,n,o){var a=$(e,n,!1,t),u=a.name;if(u){var l=s[u];if(!l)return c(null,a);var h=l.regex.keys.filter(function(e){return!e.optional}).map(function(e){return e.name});if("object"!=typeof a.params&&(a.params={}),n&&"object"==typeof n.params)for(var d in n.params)!(d in a.params)&&h.indexOf(d)>-1&&(a.params[d]=n.params[d]);return a.path=q(l.path,a.params),c(l,a,o)}if(a.path){a.params={};for(var f=0;f<r.length;f++){var p=r[f],m=i[p];if(Z(m.regex,a.path,a.params))return c(m,a,o)}}return c(null,a)}function a(e,n){var r=e.redirect,i="function"==typeof r?r(f(e,n,null,t)):r;if("string"==typeof i&&(i={path:i}),!i||"object"!=typeof i)return c(null,n);var a=i,u=a.name,l=a.path,h=n.query,d=n.hash,p=n.params;if(h=a.hasOwnProperty("query")?a.query:h,d=a.hasOwnProperty("hash")?a.hash:d,p=a.hasOwnProperty("params")?a.params:p,u){s[u];return o({_normalized:!0,name:u,query:h,hash:d,params:p},void 0,n)}if(l){var m=function(e,t){return I(e,t.parent?t.parent.path:"/",!0)}(l,e);return o({_normalized:!0,path:q(m,p),query:h,hash:d},void 0,n)}return c(null,n)}function c(e,n,r){return e&&e.redirect?a(e,r||n):e&&e.matchAs?function(e,t,n){var r=o({_normalized:!0,path:q(n,t.params)});if(r){var i=r.matched,s=i[i.length-1];return t.params=r.params,c(s,t)}return c(null,t)}(0,n,e.matchAs):f(e,n,r,t)}return{match:o,addRoute:function(e,t){var n="object"!=typeof e?s[e]:void 0;J([t||e],r,i,s,n),n&&n.alias.length&&J(n.alias.map(function(e){return{path:e,children:[t]}}),r,i,s,n)},getRoutes:function(){return r.map(function(e){return i[e]})},addRoutes:function(e){J(e,r,i,s)}}}function Z(e,t,n){var r=t.match(e);if(!r)return!1;if(!n)return!0;for(var i=1,s=r.length;i<s;++i){var o=e.keys[i-1];o&&(n[o.name||"pathMatch"]="string"==typeof r[i]?c(r[i]):r[i])}return!0}var ee=Y&&window.performance&&window.performance.now?window.performance:Date;function te(){return ee.now().toFixed(3)}var ne=te();function re(){return ne}function ie(e){return ne=e}var se=Object.create(null);function oe(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=window.location.protocol+"//"+window.location.host,t=window.location.href.replace(e,""),n=r({},window.history.state);return n.key=re(),window.history.replaceState(n,"",t),window.addEventListener("popstate",ue),function(){window.removeEventListener("popstate",ue)}}function ae(e,t,n,r){if(e.app){var i=e.options.scrollBehavior;i&&e.app.$nextTick(function(){var s=function(){var e=re();if(e)return se[e]}(),o=i.call(e,t,n,r?s:null);o&&("function"==typeof o.then?o.then(function(e){pe(e,s)}).catch(function(e){0}):pe(o,s))})}}function ce(){var e=re();e&&(se[e]={x:window.pageXOffset,y:window.pageYOffset})}function ue(e){ce(),e.state&&e.state.key&&ie(e.state.key)}function le(e){return de(e.x)||de(e.y)}function he(e){return{x:de(e.x)?e.x:window.pageXOffset,y:de(e.y)?e.y:window.pageYOffset}}function de(e){return"number"==typeof e}var fe=/^#\d/;function pe(e,t){var n,r="object"==typeof e;if(r&&"string"==typeof e.selector){var i=fe.test(e.selector)?document.getElementById(e.selector.slice(1)):document.querySelector(e.selector);if(i){var s=e.offset&&"object"==typeof e.offset?e.offset:{};t=function(e,t){var n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{x:r.left-n.left-t.x,y:r.top-n.top-t.y}}(i,s={x:de((n=s).x)?n.x:0,y:de(n.y)?n.y:0})}else le(e)&&(t=he(e))}else r&&le(e)&&(t=he(e));t&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:t.x,top:t.y,behavior:e.behavior}):window.scrollTo(t.x,t.y))}var me,ge=Y&&((-1===(me=window.navigator.userAgent).indexOf("Android 2.")&&-1===me.indexOf("Android 4.0")||-1===me.indexOf("Mobile Safari")||-1!==me.indexOf("Chrome")||-1!==me.indexOf("Windows Phone"))&&window.history&&"function"==typeof window.history.pushState);function ye(e,t){ce();var n=window.history;try{if(t){var i=r({},n.state);i.key=re(),n.replaceState(i,"",e)}else n.pushState({key:ie(te())},"",e)}catch(n){window.location[t?"replace":"assign"](e)}}function ve(e){ye(e,!0)}function _e(e,t,n){var r=function(i){i>=e.length?n():e[i]?t(e[i],function(){r(i+1)}):r(i+1)};r(0)}var we={redirected:2,aborted:4,cancelled:8,duplicated:16};function be(e,t){return Te(e,t,we.redirected,'Redirected when going from "'+e.fullPath+'" to "'+function(e){if("string"==typeof e)return e;if("path"in e)return e.path;var t={};return Ee.forEach(function(n){n in e&&(t[n]=e[n])}),JSON.stringify(t,null,2)}(t)+'" via a navigation guard.')}function Ie(e,t){return Te(e,t,we.cancelled,'Navigation cancelled from "'+e.fullPath+'" to "'+t.fullPath+'" with a new navigation.')}function Te(e,t,n,r){var i=new Error(r);return i._isRouter=!0,i.from=e,i.to=t,i.type=n,i}var Ee=["params","query","hash"];function Ce(e){return Object.prototype.toString.call(e).indexOf("Error")>-1}function Se(e,t){return Ce(e)&&e._isRouter&&(null==t||e.type===t)}function ke(e){return function(t,n,r){var i=!1,s=0,o=null;Oe(e,function(e,t,n,a){if("function"==typeof e&&void 0===e.cid){i=!0,s++;var c,u=xe(function(t){var i;((i=t).__esModule||Ne&&"Module"===i[Symbol.toStringTag])&&(t=t.default),e.resolved="function"==typeof t?t:B.extend(t),n.components[a]=t,--s<=0&&r()}),l=xe(function(e){var t="Failed to resolve async component "+a+": "+e;o||(o=Ce(e)?e:new Error(t),r(o))});try{c=e(u,l)}catch(e){l(e)}if(c)if("function"==typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"==typeof h.then&&h.then(u,l)}}}),i||r()}}function Oe(e,t){return Ae(e.map(function(e){return Object.keys(e.components).map(function(n){return t(e.components[n],e.instances[n],e,n)})}))}function Ae(e){return Array.prototype.concat.apply([],e)}var Ne="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;function xe(e){var t=!1;return function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];if(!t)return t=!0,e.apply(this,n)}}var Re=function(e,t){this.router=e,this.base=function(e){if(!e)if(Y){var t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else e="/";"/"!==e.charAt(0)&&(e="/"+e);return e.replace(/\/$/,"")}(t),this.current=m,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function Pe(e,t,n,r){var i=Oe(e,function(e,r,i,s){var o=function(e,t){"function"!=typeof e&&(e=B.extend(e));return e.options[t]}(e,t);if(o)return Array.isArray(o)?o.map(function(e){return n(e,r,i,s)}):n(o,r,i,s)});return Ae(r?i.reverse():i)}function De(e,t){if(t)return function(){return e.apply(t,arguments)}}Re.prototype.listen=function(e){this.cb=e},Re.prototype.onReady=function(e,t){this.ready?e():(this.readyCbs.push(e),t&&this.readyErrorCbs.push(t))},Re.prototype.onError=function(e){this.errorCbs.push(e)},Re.prototype.transitionTo=function(e,t,n){var r,i=this;try{r=this.router.match(e,this.current)}catch(e){throw this.errorCbs.forEach(function(t){t(e)}),e}var s=this.current;this.confirmTransition(r,function(){i.updateRoute(r),t&&t(r),i.ensureURL(),i.router.afterHooks.forEach(function(e){e&&e(r,s)}),i.ready||(i.ready=!0,i.readyCbs.forEach(function(e){e(r)}))},function(e){n&&n(e),e&&!i.ready&&(Se(e,we.redirected)&&s===m||(i.ready=!0,i.readyErrorCbs.forEach(function(t){t(e)})))})},Re.prototype.confirmTransition=function(e,t,n){var r=this,i=this.current;this.pending=e;var s,o,a=function(e){!Se(e)&&Ce(e)&&(r.errorCbs.length?r.errorCbs.forEach(function(t){t(e)}):console.error(e)),n&&n(e)},c=e.matched.length-1,u=i.matched.length-1;if(y(e,i)&&c===u&&e.matched[c]===i.matched[u])return this.ensureURL(),e.hash&&ae(this.router,i,e,!1),a(((o=Te(s=i,e,we.duplicated,'Avoided redundant navigation to current location: "'+s.fullPath+'".')).name="NavigationDuplicated",o));var l=function(e,t){var n,r=Math.max(e.length,t.length);for(n=0;n<r&&e[n]===t[n];n++);return{updated:t.slice(0,n),activated:t.slice(n),deactivated:e.slice(n)}}(this.current.matched,e.matched),h=l.updated,d=l.deactivated,f=l.activated,p=function(t,n){if(r.pending!==e)return a(Ie(i,e));try{t(e,i,function(t){!1===t?(r.ensureURL(!0),a(function(e,t){return Te(e,t,we.aborted,'Navigation aborted from "'+e.fullPath+'" to "'+t.fullPath+'" via a navigation guard.')}(i,e))):Ce(t)?(r.ensureURL(!0),a(t)):"string"==typeof t||"object"==typeof t&&("string"==typeof t.path||"string"==typeof t.name)?(a(be(i,e)),"object"==typeof t&&t.replace?r.replace(t):r.push(t)):n(t)})}catch(e){a(e)}};_e([].concat(function(e){return Pe(e,"beforeRouteLeave",De,!0)}(d),this.router.beforeHooks,function(e){return Pe(e,"beforeRouteUpdate",De)}(h),f.map(function(e){return e.beforeEnter}),ke(f)),p,function(){_e(function(e){return Pe(e,"beforeRouteEnter",function(e,t,n,r){return function(e,t,n){return function(r,i,s){return e(r,i,function(e){"function"==typeof e&&(t.enteredCbs[n]||(t.enteredCbs[n]=[]),t.enteredCbs[n].push(e)),s(e)})}}(e,n,r)})}(f).concat(r.router.resolveHooks),p,function(){if(r.pending!==e)return a(Ie(i,e));r.pending=null,t(e),r.router.app&&r.router.app.$nextTick(function(){_(e)})})})},Re.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)},Re.prototype.setupListeners=function(){},Re.prototype.teardown=function(){this.listeners.forEach(function(e){e()}),this.listeners=[],this.current=m,this.pending=null};var Le=function(e){function t(t,n){e.call(this,t,n),this._startLocation=je(this.base)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=ge&&n;r&&this.listeners.push(oe());var i=function(){var n=e.current,i=je(e.base);e.current===m&&i===e._startLocation||e.transitionTo(i,function(e){r&&ae(t,e,n,!0)})};window.addEventListener("popstate",i),this.listeners.push(function(){window.removeEventListener("popstate",i)})}},t.prototype.go=function(e){window.history.go(e)},t.prototype.push=function(e,t,n){var r=this,i=this.current;this.transitionTo(e,function(e){ye(T(r.base+e.fullPath)),ae(r.router,e,i,!1),t&&t(e)},n)},t.prototype.replace=function(e,t,n){var r=this,i=this.current;this.transitionTo(e,function(e){ve(T(r.base+e.fullPath)),ae(r.router,e,i,!1),t&&t(e)},n)},t.prototype.ensureURL=function(e){if(je(this.base)!==this.current.fullPath){var t=T(this.base+this.current.fullPath);e?ye(t):ve(t)}},t.prototype.getCurrentLocation=function(){return je(this.base)},t}(Re);function je(e){var t=window.location.pathname,n=t.toLowerCase(),r=e.toLowerCase();return!e||n!==r&&0!==n.indexOf(T(r+"/"))||(t=t.slice(e.length)),(t||"/")+window.location.search+window.location.hash}var Me=function(e){function t(t,n,r){e.call(this,t,n),r&&function(e){var t=je(e);if(!/^\/#/.test(t))return window.location.replace(T(e+"/#"+t)),!0}(this.base)||Fe()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router.options.scrollBehavior,n=ge&&t;n&&this.listeners.push(oe());var r=function(){var t=e.current;Fe()&&e.transitionTo(Ue(),function(r){n&&ae(e.router,r,t,!0),ge||$e(r.fullPath)})},i=ge?"popstate":"hashchange";window.addEventListener(i,r),this.listeners.push(function(){window.removeEventListener(i,r)})}},t.prototype.push=function(e,t,n){var r=this,i=this.current;this.transitionTo(e,function(e){qe(e.fullPath),ae(r.router,e,i,!1),t&&t(e)},n)},t.prototype.replace=function(e,t,n){var r=this,i=this.current;this.transitionTo(e,function(e){$e(e.fullPath),ae(r.router,e,i,!1),t&&t(e)},n)},t.prototype.go=function(e){window.history.go(e)},t.prototype.ensureURL=function(e){var t=this.current.fullPath;Ue()!==t&&(e?qe(t):$e(t))},t.prototype.getCurrentLocation=function(){return Ue()},t}(Re);function Fe(){var e=Ue();return"/"===e.charAt(0)||($e("/"+e),!1)}function Ue(){var e=window.location.href,t=e.indexOf("#");return t<0?"":e=e.slice(t+1)}function Ve(e){var t=window.location.href,n=t.indexOf("#");return(n>=0?t.slice(0,n):t)+"#"+e}function qe(e){ge?ye(Ve(e)):window.location.hash=e}function $e(e){ge?ve(Ve(e)):window.location.replace(Ve(e))}var Be=function(e){function t(t,n){e.call(this,t,n),this.stack=[],this.index=-1}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.push=function(e,t,n){var r=this;this.transitionTo(e,function(e){r.stack=r.stack.slice(0,r.index+1).concat(e),r.index++,t&&t(e)},n)},t.prototype.replace=function(e,t,n){var r=this;this.transitionTo(e,function(e){r.stack=r.stack.slice(0,r.index).concat(e),t&&t(e)},n)},t.prototype.go=function(e){var t=this,n=this.index+e;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,function(){var e=t.current;t.index=n,t.updateRoute(r),t.router.afterHooks.forEach(function(t){t&&t(r,e)})},function(e){Se(e,we.duplicated)&&(t.index=n)})}},t.prototype.getCurrentLocation=function(){var e=this.stack[this.stack.length-1];return e?e.fullPath:"/"},t.prototype.ensureURL=function(){},t}(Re),Ke=function(e){void 0===e&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=X(e.routes||[],this);var t=e.mode||"hash";switch(this.fallback="history"===t&&!ge&&!1!==e.fallback,this.fallback&&(t="hash"),Y||(t="abstract"),this.mode=t,t){case"history":this.history=new Le(this,e.base);break;case"hash":this.history=new Me(this,e.base,this.fallback);break;case"abstract":this.history=new Be(this,e.base);break;default:0}},ze={currentRoute:{configurable:!0}};function We(e,t){return e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}Ke.prototype.match=function(e,t,n){return this.matcher.match(e,t,n)},ze.currentRoute.get=function(){return this.history&&this.history.current},Ke.prototype.init=function(e){var t=this;if(this.apps.push(e),e.$once("hook:destroyed",function(){var n=t.apps.indexOf(e);n>-1&&t.apps.splice(n,1),t.app===e&&(t.app=t.apps[0]||null),t.app||t.history.teardown()}),!this.app){this.app=e;var n=this.history;if(n instanceof Le||n instanceof Me){var r=function(e){n.setupListeners(),function(e){var r=n.current,i=t.options.scrollBehavior;ge&&i&&"fullPath"in e&&ae(t,e,r,!1)}(e)};n.transitionTo(n.getCurrentLocation(),r,r)}n.listen(function(e){t.apps.forEach(function(t){t._route=e})})}},Ke.prototype.beforeEach=function(e){return We(this.beforeHooks,e)},Ke.prototype.beforeResolve=function(e){return We(this.resolveHooks,e)},Ke.prototype.afterEach=function(e){return We(this.afterHooks,e)},Ke.prototype.onReady=function(e,t){this.history.onReady(e,t)},Ke.prototype.onError=function(e){this.history.onError(e)},Ke.prototype.push=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!=typeof Promise)return new Promise(function(t,n){r.history.push(e,t,n)});this.history.push(e,t,n)},Ke.prototype.replace=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!=typeof Promise)return new Promise(function(t,n){r.history.replace(e,t,n)});this.history.replace(e,t,n)},Ke.prototype.go=function(e){this.history.go(e)},Ke.prototype.back=function(){this.go(-1)},Ke.prototype.forward=function(){this.go(1)},Ke.prototype.getMatchedComponents=function(e){var t=e?e.matched?e:this.resolve(e).route:this.currentRoute;return t?[].concat.apply([],t.matched.map(function(e){return Object.keys(e.components).map(function(t){return e.components[t]})})):[]},Ke.prototype.resolve=function(e,t,n){var r=$(e,t=t||this.history.current,n,this),i=this.match(r,t),s=i.redirectedFrom||i.fullPath;return{location:r,route:i,href:function(e,t,n){var r="hash"===n?"#"+t:t;return e?T(e+"/"+r):r}(this.history.base,s,this.mode),normalizedTo:r,resolved:i}},Ke.prototype.getRoutes=function(){return this.matcher.getRoutes()},Ke.prototype.addRoute=function(e,t){this.matcher.addRoute(e,t),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},Ke.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(Ke.prototype,ze),Ke.install=Q,Ke.version="3.5.3",Ke.isNavigationFailure=Se,Ke.NavigationFailureType=we,Ke.START_LOCATION=m,Y&&window.Vue&&window.Vue.use(Ke),t.a=Ke},"28tl":function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return f}),n.d(t,"b",function(){return A}),n.d(t,"c",function(){return O}),n.d(t,"d",function(){return z}),n.d(t,"e",function(){return i}),n.d(t,"f",function(){return s}),n.d(t,"g",function(){return a}),n.d(t,"h",function(){return l}),n.d(t,"i",function(){return c}),n.d(t,"j",function(){return j}),n.d(t,"k",function(){return p}),n.d(t,"l",function(){return W}),n.d(t,"m",function(){return h}),n.d(t,"n",function(){return V}),n.d(t,"o",function(){return d}),n.d(t,"p",function(){return Y}),n.d(t,"q",function(){return K}),n.d(t,"r",function(){return te}),n.d(t,"s",function(){return m}),n.d(t,"t",function(){return L}),n.d(t,"u",function(){return v}),n.d(t,"v",function(){return _}),n.d(t,"w",function(){return b}),n.d(t,"x",function(){return F}),n.d(t,"y",function(){return I}),n.d(t,"z",function(){return S}),n.d(t,"A",function(){return g}),n.d(t,"B",function(){return y}),n.d(t,"C",function(){return E}),n.d(t,"D",function(){return w}),n.d(t,"E",function(){return C}),n.d(t,"F",function(){return T}),n.d(t,"G",function(){return D}),n.d(t,"H",function(){return x}),n.d(t,"I",function(){return U}),n.d(t,"J",function(){return $}),n.d(t,"K",function(){return B}),n.d(t,"L",function(){return M}),n.d(t,"M",function(){return ee}),n.d(t,"N",function(){return Z}),n.d(t,"O",function(){return R}),n.d(t,"P",function(){return Q}),n.d(t,"Q",function(){return J}),n.d(t,"R",function(){return X});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw s(t)},s=function(e){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},o=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,u=i>>2,l=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0,o=++t<e.length?n[e.charAt(t)]:64,a=++t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw Error();const c=i<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},c=function(e){const t=o(e);return a.encodeByteArray(t,!0)},u=function(e){return c(e).replace(/\./g,"")},l=function(e){try{return a.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(e){return d(void 0,e)}function d(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=d(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class f{constructor(){this.reject=(()=>{}),this.resolve=(()=>{}),this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[u(JSON.stringify({alg:"none",type:"JWT"})),u(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function g(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(m())}function y(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(e){return!1}}function v(){return"object"==typeof self&&self.self===self}function _(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function w(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function b(){return m().indexOf("Electron/")>=0}function I(){const e=m();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function T(){return m().indexOf("MSAppHost/")>=0}function E(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}function C(){return!y()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function S(){return"object"==typeof indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const k="FirebaseError";class O extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=k,Object.setPrototypeOf(this,O.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,A.prototype.create)}}class A{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(N,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new O(r,o,n)}}const N=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){return JSON.parse(e)}function R(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=x(l(s[0])||""),n=x(l(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},D=function(e){const t=P(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},L=function(e){const t=P(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function M(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function F(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function U(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function V(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(q(n)&&q(s)){if(!V(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function q(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function B(e){const t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function K(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let r,i,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],u=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(r=c^o&(a^c),i=1518500249):(r=o^a^c,i=1859775393):e<60?(r=o&a|c&(o|a),i=2400959708):(r=o^a^c,i=3395469782);const t=(s<<5|s>>>27)+r+u+i+n[e]&4294967295;u=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let s=this.inbuf_;for(;r<t;){if(0===s)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s]=e.charCodeAt(r),++r,++s===this.blockSize){this.compress_(i),s=0;break}}else for(;r<t;)if(i[s]=e[r],++r,++s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}}function W(e,t){const n=new H(e,t);return n.subscribe.bind(n)}class H{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=G),void 0===r.error&&(r.error=G),void 0===r.complete&&(r.complete=G);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function G(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=function(e,t,n,r){let i;if(r<t?i="at least "+t:r>n&&(i=0===n?"none":"no more than "+n),i){throw new Error(e+" failed: Was called with "+r+(1===r?" argument.":" arguments.")+" Expects "+i+".")}};function Y(e,t){return`${e} failed: ${t} argument `}function J(e,t,n,r){if((!r||n)&&"function"!=typeof n)throw new Error(Y(e,t)+"must be a valid function.")}function X(e,t,n,r){if((!r||n)&&("object"!=typeof n||null===n))throw new Error(Y(e,t)+"must be a valid context object.")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);if(s>=55296&&s<=56319){const t=s-55296;i(++r<e.length,"Surrogate pair missing trail surrogate."),s=65536+(t<<10)+(e.charCodeAt(r)-56320)}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},ee=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function te(e){return e&&e._delegate?e._delegate:e}}).call(t,n("DuR2"))},"7+uW":function(e,t,n){"use strict";(function(e){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(e){return void 0===e||null===e}function i(e){return void 0!==e&&null!==e}function s(e){return!0===e}function o(e){return"string"==typeof e||"number"==typeof e||"symbol"==typeof e||"boolean"==typeof e}function a(e){return null!==e&&"object"==typeof e}var c=Object.prototype.toString;function u(e){return"[object Object]"===c.call(e)}function l(e){return"[object RegExp]"===c.call(e)}function h(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function d(e){return i(e)&&"function"==typeof e.then&&"function"==typeof e.catch}function f(e){return null==e?"":Array.isArray(e)||u(e)&&e.toString===c?JSON.stringify(e,null,2):String(e)}function p(e){var t=parseFloat(e);return isNaN(t)?e:t}function m(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}var g=m("slot,component",!0),y=m("key,ref,slot,slot-scope,is");function v(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function w(e,t){return _.call(e,t)}function b(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}var I=/-(\w)/g,T=b(function(e){return e.replace(I,function(e,t){return t?t.toUpperCase():""})}),E=b(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),C=/\B([A-Z])/g,S=b(function(e){return e.replace(C,"-$1").toLowerCase()});var k=Function.prototype.bind?function(e,t){return e.bind(t)}:function(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n};function O(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function A(e,t){for(var n in t)e[n]=t[n];return e}function N(e){for(var t={},n=0;n<e.length;n++)e[n]&&A(t,e[n]);return t}function x(e,t,n){}var R=function(e,t,n){return!1},P=function(e){return e};function D(e,t){if(e===t)return!0;var n=a(e),r=a(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),s=Array.isArray(t);if(i&&s)return e.length===t.length&&e.every(function(e,n){return D(e,t[n])});if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||s)return!1;var o=Object.keys(e),c=Object.keys(t);return o.length===c.length&&o.every(function(n){return D(e[n],t[n])})}catch(e){return!1}}function L(e,t){for(var n=0;n<e.length;n++)if(D(e[n],t))return n;return-1}function j(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var M="data-server-rendered",F=["component","directive","filter"],U=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],V={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:R,isReservedAttr:R,isUnknownElement:R,getTagNamespace:x,parsePlatformTagName:P,mustUseProp:R,async:!0,_lifecycleHooks:U},q=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function $(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function B(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var K=new RegExp("[^"+q.source+".$_\\d]");var z,W="__proto__"in{},H="undefined"!=typeof window,G="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,Q=G&&WXEnvironment.platform.toLowerCase(),Y=H&&window.navigator.userAgent.toLowerCase(),J=Y&&/msie|trident/.test(Y),X=Y&&Y.indexOf("msie 9.0")>0,Z=Y&&Y.indexOf("edge/")>0,ee=(Y&&Y.indexOf("android"),Y&&/iphone|ipad|ipod|ios/.test(Y)||"ios"===Q),te=(Y&&/chrome\/\d+/.test(Y),Y&&/phantomjs/.test(Y),Y&&Y.match(/firefox\/(\d+)/)),ne={}.watch,re=!1;if(H)try{var ie={};Object.defineProperty(ie,"passive",{get:function(){re=!0}}),window.addEventListener("test-passive",null,ie)}catch(e){}var se=function(){return void 0===z&&(z=!H&&!G&&void 0!==e&&(e.process&&"server"===e.process.env.VUE_ENV)),z},oe=H&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ae(e){return"function"==typeof e&&/native code/.test(e.toString())}var ce,ue="undefined"!=typeof Symbol&&ae(Symbol)&&"undefined"!=typeof Reflect&&ae(Reflect.ownKeys);ce="undefined"!=typeof Set&&ae(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var le=x,he=0,de=function(){this.id=he++,this.subs=[]};de.prototype.addSub=function(e){this.subs.push(e)},de.prototype.removeSub=function(e){v(this.subs,e)},de.prototype.depend=function(){de.target&&de.target.addDep(this)},de.prototype.notify=function(){var e=this.subs.slice();for(var t=0,n=e.length;t<n;t++)e[t].update()},de.target=null;var fe=[];function pe(e){fe.push(e),de.target=e}function me(){fe.pop(),de.target=fe[fe.length-1]}var ge=function(e,t,n,r,i,s,o,a){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},ye={child:{configurable:!0}};ye.child.get=function(){return this.componentInstance},Object.defineProperties(ge.prototype,ye);var ve=function(e){void 0===e&&(e="");var t=new ge;return t.text=e,t.isComment=!0,t};function _e(e){return new ge(void 0,void 0,void 0,String(e))}function we(e){var t=new ge(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var be=Array.prototype,Ie=Object.create(be);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=be[e];B(Ie,e,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var i,s=t.apply(this,n),o=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&o.observeArray(i),o.dep.notify(),s})});var Te=Object.getOwnPropertyNames(Ie),Ee=!0;function Ce(e){Ee=e}var Se=function(e){var t;this.value=e,this.dep=new de,this.vmCount=0,B(e,"__ob__",this),Array.isArray(e)?(W?(t=Ie,e.__proto__=t):function(e,t,n){for(var r=0,i=n.length;r<i;r++){var s=n[r];B(e,s,t[s])}}(e,Ie,Te),this.observeArray(e)):this.walk(e)};function ke(e,t){var n;if(a(e)&&!(e instanceof ge))return w(e,"__ob__")&&e.__ob__ instanceof Se?n=e.__ob__:Ee&&!se()&&(Array.isArray(e)||u(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new Se(e)),t&&n&&n.vmCount++,n}function Oe(e,t,n,r,i){var s=new de,o=Object.getOwnPropertyDescriptor(e,t);if(!o||!1!==o.configurable){var a=o&&o.get,c=o&&o.set;a&&!c||2!==arguments.length||(n=e[t]);var u=!i&&ke(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;return de.target&&(s.depend(),u&&(u.dep.depend(),Array.isArray(t)&&function e(t){for(var n=void 0,r=0,i=t.length;r<i;r++)(n=t[r])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&e(n)}(t))),t},set:function(t){var r=a?a.call(e):n;t===r||t!=t&&r!=r||a&&!c||(c?c.call(e,t):n=t,u=!i&&ke(t),s.notify())}})}}function Ae(e,t,n){if(Array.isArray(e)&&h(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(Oe(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function Ne(e,t){if(Array.isArray(e)&&h(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||w(e,t)&&(delete e[t],n&&n.dep.notify())}}Se.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)Oe(e,t[n])},Se.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)ke(e[t])};var xe=V.optionMergeStrategies;function Re(e,t){if(!t)return e;for(var n,r,i,s=ue?Reflect.ownKeys(t):Object.keys(t),o=0;o<s.length;o++)"__ob__"!==(n=s[o])&&(r=e[n],i=t[n],w(e,n)?r!==i&&u(r)&&u(i)&&Re(r,i):Ae(e,n,i));return e}function Pe(e,t,n){return n?function(){var r="function"==typeof t?t.call(n,n):t,i="function"==typeof e?e.call(n,n):e;return r?Re(r,i):i}:t?e?function(){return Re("function"==typeof t?t.call(this,this):t,"function"==typeof e?e.call(this,this):e)}:t:e}function De(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(n):n}function Le(e,t,n,r){var i=Object.create(e||null);return t?A(i,t):i}xe.data=function(e,t,n){return n?Pe(e,t,n):t&&"function"!=typeof t?e:Pe(e,t)},U.forEach(function(e){xe[e]=De}),F.forEach(function(e){xe[e+"s"]=Le}),xe.watch=function(e,t,n,r){if(e===ne&&(e=void 0),t===ne&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};for(var s in A(i,e),t){var o=i[s],a=t[s];o&&!Array.isArray(o)&&(o=[o]),i[s]=o?o.concat(a):Array.isArray(a)?a:[a]}return i},xe.props=xe.methods=xe.inject=xe.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return A(i,e),t&&A(i,t),i},xe.provide=Pe;var je=function(e,t){return void 0===t?e:t};function Me(e,t,n){if("function"==typeof t&&(t=t.options),function(e,t){var n=e.props;if(n){var r,i,s={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(i=n[r])&&(s[T(i)]={type:null});else if(u(n))for(var o in n)i=n[o],s[T(o)]=u(i)?i:{type:i};e.props=s}}(t),function(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(u(n))for(var s in n){var o=n[s];r[s]=u(o)?A({from:s},o):{from:o}}}}(t),function(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}(t),!t._base&&(t.extends&&(e=Me(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=Me(e,t.mixins[r],n);var s,o={};for(s in e)a(s);for(s in t)w(e,s)||a(s);function a(r){var i=xe[r]||je;o[r]=i(e[r],t[r],n,r)}return o}function Fe(e,t,n,r){if("string"==typeof n){var i=e[t];if(w(i,n))return i[n];var s=T(n);if(w(i,s))return i[s];var o=E(s);return w(i,o)?i[o]:i[n]||i[s]||i[o]}}function Ue(e,t,n,r){var i=t[e],s=!w(n,e),o=n[e],a=Be(Boolean,i.type);if(a>-1)if(s&&!w(i,"default"))o=!1;else if(""===o||o===S(e)){var c=Be(String,i.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=function(e,t,n){if(!w(t,"default"))return;var r=t.default;0;if(e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n])return e._props[n];return"function"==typeof r&&"Function"!==qe(t.type)?r.call(e):r}(r,i,e);var u=Ee;Ce(!0),ke(o),Ce(u)}return o}var Ve=/^\s*function (\w+)/;function qe(e){var t=e&&e.toString().match(Ve);return t?t[1]:""}function $e(e,t){return qe(e)===qe(t)}function Be(e,t){if(!Array.isArray(t))return $e(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if($e(t[n],e))return n;return-1}function Ke(e,t,n){pe();try{if(t)for(var r=t;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var s=0;s<i.length;s++)try{if(!1===i[s].call(r,e,t,n))return}catch(e){We(e,r,"errorCaptured hook")}}We(e,t,n)}finally{me()}}function ze(e,t,n,r,i){var s;try{(s=n?e.apply(t,n):e.call(t))&&!s._isVue&&d(s)&&!s._handled&&(s.catch(function(e){return Ke(e,r,i+" (Promise/async)")}),s._handled=!0)}catch(e){Ke(e,r,i)}return s}function We(e,t,n){if(V.errorHandler)try{return V.errorHandler.call(null,e,t,n)}catch(t){t!==e&&He(t,null,"config.errorHandler")}He(e,t,n)}function He(e,t,n){if(!H&&!G||"undefined"==typeof console)throw e;console.error(e)}var Ge,Qe=!1,Ye=[],Je=!1;function Xe(){Je=!1;var e=Ye.slice(0);Ye.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!=typeof Promise&&ae(Promise)){var Ze=Promise.resolve();Ge=function(){Ze.then(Xe),ee&&setTimeout(x)},Qe=!0}else if(J||"undefined"==typeof MutationObserver||!ae(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Ge="undefined"!=typeof setImmediate&&ae(setImmediate)?function(){setImmediate(Xe)}:function(){setTimeout(Xe,0)};else{var et=1,tt=new MutationObserver(Xe),nt=document.createTextNode(String(et));tt.observe(nt,{characterData:!0}),Ge=function(){et=(et+1)%2,nt.data=String(et)},Qe=!0}function rt(e,t){var n;if(Ye.push(function(){if(e)try{e.call(t)}catch(e){Ke(e,t,"nextTick")}else n&&n(t)}),Je||(Je=!0,Ge()),!e&&"undefined"!=typeof Promise)return new Promise(function(e){n=e})}var it=new ce;function st(e){!function e(t,n){var r,i;var s=Array.isArray(t);if(!s&&!a(t)||Object.isFrozen(t)||t instanceof ge)return;if(t.__ob__){var o=t.__ob__.dep.id;if(n.has(o))return;n.add(o)}if(s)for(r=t.length;r--;)e(t[r],n);else for(i=Object.keys(t),r=i.length;r--;)e(t[i[r]],n)}(e,it),it.clear()}var ot=b(function(e){var t="&"===e.charAt(0),n="~"===(e=t?e.slice(1):e).charAt(0),r="!"===(e=n?e.slice(1):e).charAt(0);return{name:e=r?e.slice(1):e,once:n,capture:r,passive:t}});function at(e,t){function n(){var e=arguments,r=n.fns;if(!Array.isArray(r))return ze(r,null,arguments,t,"v-on handler");for(var i=r.slice(),s=0;s<i.length;s++)ze(i[s],null,e,t,"v-on handler")}return n.fns=e,n}function ct(e,t,n,i,o,a){var c,u,l,h;for(c in e)u=e[c],l=t[c],h=ot(c),r(u)||(r(l)?(r(u.fns)&&(u=e[c]=at(u,a)),s(h.once)&&(u=e[c]=o(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,e[c]=l));for(c in t)r(e[c])&&i((h=ot(c)).name,t[c],h.capture)}function ut(e,t,n){var o;e instanceof ge&&(e=e.data.hook||(e.data.hook={}));var a=e[t];function c(){n.apply(this,arguments),v(o.fns,c)}r(a)?o=at([c]):i(a.fns)&&s(a.merged)?(o=a).fns.push(c):o=at([a,c]),o.merged=!0,e[t]=o}function lt(e,t,n,r,s){if(i(t)){if(w(t,n))return e[n]=t[n],s||delete t[n],!0;if(w(t,r))return e[n]=t[r],s||delete t[r],!0}return!1}function ht(e){return o(e)?[_e(e)]:Array.isArray(e)?function e(t,n){var a=[];var c,u,l,h;for(c=0;c<t.length;c++)r(u=t[c])||"boolean"==typeof u||(l=a.length-1,h=a[l],Array.isArray(u)?u.length>0&&(dt((u=e(u,(n||"")+"_"+c))[0])&&dt(h)&&(a[l]=_e(h.text+u[0].text),u.shift()),a.push.apply(a,u)):o(u)?dt(h)?a[l]=_e(h.text+u):""!==u&&a.push(_e(u)):dt(u)&&dt(h)?a[l]=_e(h.text+u.text):(s(t._isVList)&&i(u.tag)&&r(u.key)&&i(n)&&(u.key="__vlist"+n+"_"+c+"__"),a.push(u)));return a}(e):void 0}function dt(e){return i(e)&&i(e.text)&&!1===e.isComment}function ft(e,t){if(e){for(var n=Object.create(null),r=ue?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var s=r[i];if("__ob__"!==s){for(var o=e[s].from,a=t;a;){if(a._provided&&w(a._provided,o)){n[s]=a._provided[o];break}a=a.$parent}if(!a)if("default"in e[s]){var c=e[s].default;n[s]="function"==typeof c?c.call(t):c}else 0}}return n}}function pt(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var s=e[r],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==t&&s.fnContext!==t||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var u in n)n[u].every(mt)&&delete n[u];return n}function mt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function gt(e){return e.isComment&&e.asyncFactory}function yt(e,t,r){var i,s=Object.keys(t).length>0,o=e?!!e.$stable:!s,a=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(o&&r&&r!==n&&a===r.$key&&!s&&!r.$hasNormal)return r;for(var c in i={},e)e[c]&&"$"!==c[0]&&(i[c]=vt(t,c,e[c]))}else i={};for(var u in t)u in i||(i[u]=_t(t,u));return e&&Object.isExtensible(e)&&(e._normalized=i),B(i,"$stable",o),B(i,"$key",a),B(i,"$hasNormal",s),i}function vt(e,t,n){var r=function(){var e=arguments.length?n.apply(null,arguments):n({}),t=(e=e&&"object"==typeof e&&!Array.isArray(e)?[e]:ht(e))&&e[0];return e&&(!t||1===e.length&&t.isComment&&!gt(t))?void 0:e};return n.proxy&&Object.defineProperty(e,t,{get:r,enumerable:!0,configurable:!0}),r}function _t(e,t){return function(){return e[t]}}function wt(e,t){var n,r,s,o,c;if(Array.isArray(e)||"string"==typeof e)for(n=new Array(e.length),r=0,s=e.length;r<s;r++)n[r]=t(e[r],r);else if("number"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(a(e))if(ue&&e[Symbol.iterator]){n=[];for(var u=e[Symbol.iterator](),l=u.next();!l.done;)n.push(t(l.value,n.length)),l=u.next()}else for(o=Object.keys(e),n=new Array(o.length),r=0,s=o.length;r<s;r++)c=o[r],n[r]=t(e[c],c,r);return i(n)||(n=[]),n._isVList=!0,n}function bt(e,t,n,r){var i,s=this.$scopedSlots[e];s?(n=n||{},r&&(n=A(A({},r),n)),i=s(n)||("function"==typeof t?t():t)):i=this.$slots[e]||("function"==typeof t?t():t);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},i):i}function It(e){return Fe(this.$options,"filters",e)||P}function Tt(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function Et(e,t,n,r,i){var s=V.keyCodes[t]||n;return i&&r&&!V.keyCodes[t]?Tt(i,r):s?Tt(s,e):r?S(r)!==t:void 0===e}function Ct(e,t,n,r,i){if(n)if(a(n)){var s;Array.isArray(n)&&(n=N(n));var o=function(o){if("class"===o||"style"===o||y(o))s=e;else{var a=e.attrs&&e.attrs.type;s=r||V.mustUseProp(t,a,o)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=T(o),u=S(o);c in s||u in s||(s[o]=n[o],i&&((e.on||(e.on={}))["update:"+o]=function(e){n[o]=e}))};for(var c in n)o(c)}else;return e}function St(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t?r:(Ot(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),"__static__"+e,!1),r)}function kt(e,t,n){return Ot(e,"__once__"+t+(n?"_"+n:""),!0),e}function Ot(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&At(e[r],t+"_"+r,n);else At(e,t,n)}function At(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function Nt(e,t){if(t)if(u(t)){var n=e.on=e.on?A({},e.on):{};for(var r in t){var i=n[r],s=t[r];n[r]=i?[].concat(i,s):s}}else;return e}function xt(e,t,n,r){t=t||{$stable:!n};for(var i=0;i<e.length;i++){var s=e[i];Array.isArray(s)?xt(s,t,n):s&&(s.proxy&&(s.fn.proxy=!0),t[s.key]=s.fn)}return r&&(t.$key=r),t}function Rt(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"==typeof r&&r&&(e[t[n]]=t[n+1])}return e}function Pt(e,t){return"string"==typeof e?t+e:e}function Dt(e){e._o=kt,e._n=p,e._s=f,e._l=wt,e._t=bt,e._q=D,e._i=L,e._m=St,e._f=It,e._k=Et,e._b=Ct,e._v=_e,e._e=ve,e._u=xt,e._g=Nt,e._d=Rt,e._p=Pt}function Lt(e,t,r,i,o){var a,c=this,u=o.options;w(i,"_uid")?(a=Object.create(i))._original=i:(a=i,i=i._original);var l=s(u._compiled),h=!l;this.data=e,this.props=t,this.children=r,this.parent=i,this.listeners=e.on||n,this.injections=ft(u.inject,i),this.slots=function(){return c.$slots||yt(e.scopedSlots,c.$slots=pt(r,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return yt(e.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=yt(e.scopedSlots,this.$slots)),u._scopeId?this._c=function(e,t,n,r){var s=Kt(a,e,t,n,r,h);return s&&!Array.isArray(s)&&(s.fnScopeId=u._scopeId,s.fnContext=i),s}:this._c=function(e,t,n,r){return Kt(a,e,t,n,r,h)}}function jt(e,t,n,r,i){var s=we(e);return s.fnContext=n,s.fnOptions=r,t.slot&&((s.data||(s.data={})).slot=t.slot),s}function Mt(e,t){for(var n in t)e[T(n)]=t[n]}Dt(Lt.prototype);var Ft={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;Ft.prepatch(n,n)}else{(e.componentInstance=function(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},r=e.data.inlineTemplate;i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns);return new e.componentOptions.Ctor(n)}(e,Zt)).$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var r=t.componentOptions;!function(e,t,r,i,s){0;var o=i.data.scopedSlots,a=e.$scopedSlots,c=!!(o&&!o.$stable||a!==n&&!a.$stable||o&&e.$scopedSlots.$key!==o.$key||!o&&e.$scopedSlots.$key),u=!!(s||e.$options._renderChildren||c);e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i);if(e.$options._renderChildren=s,e.$attrs=i.data.attrs||n,e.$listeners=r||n,t&&e.$options.props){Ce(!1);for(var l=e._props,h=e.$options._propKeys||[],d=0;d<h.length;d++){var f=h[d],p=e.$options.props;l[f]=Ue(f,p,t,e)}Ce(!0),e.$options.propsData=t}r=r||n;var m=e.$options._parentListeners;e.$options._parentListeners=r,Xt(e,r,m),u&&(e.$slots=pt(s,i.context),e.$forceUpdate());0}(t.componentInstance=e.componentInstance,r.propsData,r.listeners,t,r.children)},insert:function(e){var t,n=e.context,r=e.componentInstance;r._isMounted||(r._isMounted=!0,rn(r,"mounted")),e.data.keepAlive&&(n._isMounted?((t=r)._inactive=!1,on.push(t)):nn(r,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?function e(t,n){if(n&&(t._directInactive=!0,tn(t)))return;if(!t._inactive){t._inactive=!0;for(var r=0;r<t.$children.length;r++)e(t.$children[r]);rn(t,"deactivated")}}(t,!0):t.$destroy())}},Ut=Object.keys(Ft);function Vt(e,t,o,c,u){if(!r(e)){var l=o.$options._base;if(a(e)&&(e=l.extend(e)),"function"==typeof e){var h;if(r(e.cid)&&void 0===(e=function(e,t){if(s(e.error)&&i(e.errorComp))return e.errorComp;if(i(e.resolved))return e.resolved;var n=Wt;n&&i(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n);if(s(e.loading)&&i(e.loadingComp))return e.loadingComp;if(n&&!i(e.owners)){var o=e.owners=[n],c=!0,u=null,l=null;n.$on("hook:destroyed",function(){return v(o,n)});var h=function(e){for(var t=0,n=o.length;t<n;t++)o[t].$forceUpdate();e&&(o.length=0,null!==u&&(clearTimeout(u),u=null),null!==l&&(clearTimeout(l),l=null))},f=j(function(n){e.resolved=Ht(n,t),c?o.length=0:h(!0)}),p=j(function(t){i(e.errorComp)&&(e.error=!0,h(!0))}),m=e(f,p);return a(m)&&(d(m)?r(e.resolved)&&m.then(f,p):d(m.component)&&(m.component.then(f,p),i(m.error)&&(e.errorComp=Ht(m.error,t)),i(m.loading)&&(e.loadingComp=Ht(m.loading,t),0===m.delay?e.loading=!0:u=setTimeout(function(){u=null,r(e.resolved)&&r(e.error)&&(e.loading=!0,h(!1))},m.delay||200)),i(m.timeout)&&(l=setTimeout(function(){l=null,r(e.resolved)&&p(null)},m.timeout)))),c=!1,e.loading?e.loadingComp:e.resolved}}(h=e,l)))return function(e,t,n,r,i){var s=ve();return s.asyncFactory=e,s.asyncMeta={data:t,context:n,children:r,tag:i},s}(h,t,o,c,u);t=t||{},Sn(e),i(t.model)&&function(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var s=t.on||(t.on={}),o=s[r],a=t.model.callback;i(o)?(Array.isArray(o)?-1===o.indexOf(a):o!==a)&&(s[r]=[a].concat(o)):s[r]=a}(e.options,t);var f=function(e,t,n){var s=t.options.props;if(!r(s)){var o={},a=e.attrs,c=e.props;if(i(a)||i(c))for(var u in s){var l=S(u);lt(o,c,u,l,!0)||lt(o,a,u,l,!1)}return o}}(t,e);if(s(e.options.functional))return function(e,t,r,s,o){var a=e.options,c={},u=a.props;if(i(u))for(var l in u)c[l]=Ue(l,u,t||n);else i(r.attrs)&&Mt(c,r.attrs),i(r.props)&&Mt(c,r.props);var h=new Lt(r,c,o,s,e),d=a.render.call(null,h._c,h);if(d instanceof ge)return jt(d,r,h.parent,a);if(Array.isArray(d)){for(var f=ht(d)||[],p=new Array(f.length),m=0;m<f.length;m++)p[m]=jt(f[m],r,h.parent,a);return p}}(e,f,t,o,c);var p=t.on;if(t.on=t.nativeOn,s(e.options.abstract)){var m=t.slot;t={},m&&(t.slot=m)}!function(e){for(var t=e.hook||(e.hook={}),n=0;n<Ut.length;n++){var r=Ut[n],i=t[r],s=Ft[r];i===s||i&&i._merged||(t[r]=i?qt(s,i):s)}}(t);var g=e.options.name||u;return new ge("vue-component-"+e.cid+(g?"-"+g:""),t,void 0,void 0,void 0,o,{Ctor:e,propsData:f,listeners:p,tag:u,children:c},h)}}}function qt(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}var $t=1,Bt=2;function Kt(e,t,n,c,u,l){return(Array.isArray(n)||o(n))&&(u=c,c=n,n=void 0),s(l)&&(u=Bt),function(e,t,n,o,c){if(i(n)&&i(n.__ob__))return ve();i(n)&&i(n.is)&&(t=n.is);if(!t)return ve();0;Array.isArray(o)&&"function"==typeof o[0]&&((n=n||{}).scopedSlots={default:o[0]},o.length=0);c===Bt?o=ht(o):c===$t&&(o=function(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}(o));var u,l;if("string"==typeof t){var h;l=e.$vnode&&e.$vnode.ns||V.getTagNamespace(t),u=V.isReservedTag(t)?new ge(V.parsePlatformTagName(t),n,o,void 0,void 0,e):n&&n.pre||!i(h=Fe(e.$options,"components",t))?new ge(t,n,o,void 0,void 0,e):Vt(h,n,e,o,t)}else u=Vt(t,n,e,o);return Array.isArray(u)?u:i(u)?(i(l)&&function e(t,n,o){t.ns=n;"foreignObject"===t.tag&&(n=void 0,o=!0);if(i(t.children))for(var a=0,c=t.children.length;a<c;a++){var u=t.children[a];i(u.tag)&&(r(u.ns)||s(o)&&"svg"!==u.tag)&&e(u,n,o)}}(u,l),i(n)&&function(e){a(e.style)&&st(e.style);a(e.class)&&st(e.class)}(n),u):ve()}(e,t,n,c,u)}var zt,Wt=null;function Ht(e,t){return(e.__esModule||ue&&"Module"===e[Symbol.toStringTag])&&(e=e.default),a(e)?t.extend(e):e}function Gt(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(i(n)&&(i(n.componentOptions)||gt(n)))return n}}function Qt(e,t){zt.$on(e,t)}function Yt(e,t){zt.$off(e,t)}function Jt(e,t){var n=zt;return function r(){null!==t.apply(null,arguments)&&n.$off(e,r)}}function Xt(e,t,n){zt=e,ct(t,n||{},Qt,Yt,Jt,e),zt=void 0}var Zt=null;function en(e){var t=Zt;return Zt=e,function(){Zt=t}}function tn(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function nn(e,t){if(t){if(e._directInactive=!1,tn(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)nn(e.$children[n]);rn(e,"activated")}}function rn(e,t){pe();var n=e.$options[t],r=t+" hook";if(n)for(var i=0,s=n.length;i<s;i++)ze(n[i],e,null,e,r);e._hasHookEvent&&e.$emit("hook:"+t),me()}var sn=[],on=[],an={},cn=!1,un=!1,ln=0;var hn=0,dn=Date.now;if(H&&!J){var fn=window.performance;fn&&"function"==typeof fn.now&&dn()>document.createEvent("Event").timeStamp&&(dn=function(){return fn.now()})}function pn(){var e,t;for(hn=dn(),un=!0,sn.sort(function(e,t){return e.id-t.id}),ln=0;ln<sn.length;ln++)(e=sn[ln]).before&&e.before(),t=e.id,an[t]=null,e.run();var n=on.slice(),r=sn.slice();ln=sn.length=on.length=0,an={},cn=un=!1,function(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,nn(e[t],!0)}(n),function(e){var t=e.length;for(;t--;){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&rn(r,"updated")}}(r),oe&&V.devtools&&oe.emit("flush")}var mn=0,gn=function(e,t,n,r,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++mn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ce,this.newDepIds=new ce,this.expression="","function"==typeof t?this.getter=t:(this.getter=function(e){if(!K.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}(t),this.getter||(this.getter=x)),this.value=this.lazy?void 0:this.get()};gn.prototype.get=function(){var e;pe(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(e){if(!this.user)throw e;Ke(e,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&st(e),me(),this.cleanupDeps()}return e},gn.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},gn.prototype.cleanupDeps=function(){for(var e=this.deps.length;e--;){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},gn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(e){var t=e.id;if(null==an[t]){if(an[t]=!0,un){for(var n=sn.length-1;n>ln&&sn[n].id>e.id;)n--;sn.splice(n+1,0,e)}else sn.push(e);cn||(cn=!0,rt(pn))}}(this)},gn.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||a(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'+this.expression+'"';ze(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},gn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},gn.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()},gn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||v(this.vm._watchers,this);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1}};var yn={enumerable:!0,configurable:!0,get:x,set:x};function vn(e,t,n){yn.get=function(){return this[t][n]},yn.set=function(e){this[t][n]=e},Object.defineProperty(e,n,yn)}function _n(e){e._watchers=[];var t=e.$options;t.props&&function(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[],s=!e.$parent;s||Ce(!1);var o=function(s){i.push(s);var o=Ue(s,t,n,e);Oe(r,s,o),s in e||vn(e,"_props",s)};for(var a in t)o(a);Ce(!0)}(e,t.props),t.methods&&function(e,t){e.$options.props;for(var n in t)e[n]="function"!=typeof t[n]?x:k(t[n],e)}(e,t.methods),t.data?function(e){var t=e.$options.data;u(t=e._data="function"==typeof t?function(e,t){pe();try{return e.call(t,t)}catch(e){return Ke(e,t,"data()"),{}}finally{me()}}(t,e):t||{})||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);for(;i--;){var s=n[i];0,r&&w(r,s)||$(s)||vn(e,"_data",s)}ke(t,!0)}(e):ke(e._data={},!0),t.computed&&function(e,t){var n=e._computedWatchers=Object.create(null),r=se();for(var i in t){var s=t[i],o="function"==typeof s?s:s.get;0,r||(n[i]=new gn(e,o||x,x,wn)),i in e||bn(e,i,s)}}(e,t.computed),t.watch&&t.watch!==ne&&function(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)En(e,n,r[i]);else En(e,n,r)}}(e,t.watch)}var wn={lazy:!0};function bn(e,t,n){var r=!se();"function"==typeof n?(yn.get=r?In(t):Tn(n),yn.set=x):(yn.get=n.get?r&&!1!==n.cache?In(t):Tn(n.get):x,yn.set=n.set||x),Object.defineProperty(e,t,yn)}function In(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),de.target&&t.depend(),t.value}}function Tn(e){return function(){return e.call(this,this)}}function En(e,t,n,r){return u(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}var Cn=0;function Sn(e){var t=e.options;if(e.super){var n=Sn(e.super);if(n!==e.superOptions){e.superOptions=n;var r=function(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}(e);r&&A(e.extendOptions,r),(t=e.options=Me(n,e.extendOptions)).name&&(t.components[t.name]=e)}}return t}function kn(e){this._init(e)}function On(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var s=e.name||n.options.name;var o=function(e){this._init(e)};return(o.prototype=Object.create(n.prototype)).constructor=o,o.cid=t++,o.options=Me(n.options,e),o.super=n,o.options.props&&function(e){var t=e.options.props;for(var n in t)vn(e.prototype,"_props",n)}(o),o.options.computed&&function(e){var t=e.options.computed;for(var n in t)bn(e.prototype,n,t[n])}(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,F.forEach(function(e){o[e]=n[e]}),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=e,o.sealedOptions=A({},o.options),i[r]=o,o}}function An(e){return e&&(e.Ctor.options.name||e.tag)}function Nn(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"==typeof e?e.split(",").indexOf(t)>-1:!!l(e)&&e.test(t)}function xn(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!t(a)&&Rn(n,s,r,i)}}}function Rn(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,v(n,t)}!function(e){e.prototype._init=function(e){var t=this;t._uid=Cn++,t._isVue=!0,e&&e._isComponent?function(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}(t,e):t.$options=Me(Sn(t.constructor),e||{},t),t._renderProxy=t,t._self=t,function(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}(t),function(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&Xt(e,t)}(t),function(e){e._vnode=null,e._staticTrees=null;var t=e.$options,r=e.$vnode=t._parentVnode,i=r&&r.context;e.$slots=pt(t._renderChildren,i),e.$scopedSlots=n,e._c=function(t,n,r,i){return Kt(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return Kt(e,t,n,r,i,!0)};var s=r&&r.data;Oe(e,"$attrs",s&&s.attrs||n,null,!0),Oe(e,"$listeners",t._parentListeners||n,null,!0)}(t),rn(t,"beforeCreate"),function(e){var t=ft(e.$options.inject,e);t&&(Ce(!1),Object.keys(t).forEach(function(n){Oe(e,n,t[n])}),Ce(!0))}(t),_n(t),function(e){var t=e.$options.provide;t&&(e._provided="function"==typeof t?t.call(e):t)}(t),rn(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}(kn),function(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=Ae,e.prototype.$delete=Ne,e.prototype.$watch=function(e,t,n){if(u(t))return En(this,e,t,n);(n=n||{}).user=!0;var r=new gn(this,e,t,n);if(n.immediate){var i='callback for immediate watcher "'+r.expression+'"';pe(),ze(t,this,[r.value],this,i),me()}return function(){r.teardown()}}}(kn),function(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(Array.isArray(e))for(var i=0,s=e.length;i<s;i++)r.$on(e[i],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var r=0,i=e.length;r<i;r++)n.$off(e[r],t);return n}var s,o=n._events[e];if(!o)return n;if(!t)return n._events[e]=null,n;for(var a=o.length;a--;)if((s=o[a])===t||s.fn===t){o.splice(a,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?O(n):n;for(var r=O(arguments,1),i='event handler for "'+e+'"',s=0,o=n.length;s<o;s++)ze(n[s],t,r,t,i)}return t}}(kn),function(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,s=en(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),s(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){rn(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||v(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),rn(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}(kn),function(e){Dt(e.prototype),e.prototype.$nextTick=function(e){return rt(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,i=n._parentVnode;i&&(t.$scopedSlots=yt(i.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=i;try{Wt=t,e=r.call(t._renderProxy,t.$createElement)}catch(n){Ke(n,t,"render"),e=t._vnode}finally{Wt=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof ge||(e=ve()),e.parent=i,e}}(kn);var Pn=[String,RegExp,Array],Dn={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Pn,exclude:Pn,max:[String,Number]},methods:{cacheVNode:function(){var e=this.cache,t=this.keys,n=this.vnodeToCache,r=this.keyToCache;if(n){var i=n.tag,s=n.componentInstance,o=n.componentOptions;e[r]={name:An(o),tag:i,componentInstance:s},t.push(r),this.max&&t.length>parseInt(this.max)&&Rn(e,t[0],t,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Rn(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",function(t){xn(e,function(e){return Nn(t,e)})}),this.$watch("exclude",function(t){xn(e,function(e){return!Nn(t,e)})})},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=Gt(e),n=t&&t.componentOptions;if(n){var r=An(n),i=this.include,s=this.exclude;if(i&&(!r||!Nn(i,r))||s&&r&&Nn(s,r))return t;var o=this.cache,a=this.keys,c=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;o[c]?(t.componentInstance=o[c].componentInstance,v(a,c),a.push(c)):(this.vnodeToCache=t,this.keyToCache=c),t.data.keepAlive=!0}return t||e&&e[0]}}};!function(e){var t={get:function(){return V}};Object.defineProperty(e,"config",t),e.util={warn:le,extend:A,mergeOptions:Me,defineReactive:Oe},e.set=Ae,e.delete=Ne,e.nextTick=rt,e.observable=function(e){return ke(e),e},e.options=Object.create(null),F.forEach(function(t){e.options[t+"s"]=Object.create(null)}),e.options._base=e,A(e.options.components,Dn),function(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=O(arguments,1);return n.unshift(this),"function"==typeof e.install?e.install.apply(e,n):"function"==typeof e&&e.apply(null,n),t.push(e),this}}(e),function(e){e.mixin=function(e){return this.options=Me(this.options,e),this}}(e),On(e),function(e){F.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&u(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}})}(e)}(kn),Object.defineProperty(kn.prototype,"$isServer",{get:se}),Object.defineProperty(kn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(kn,"FunctionalRenderContext",{value:Lt}),kn.version="2.6.14";var Ln=m("style,class"),jn=m("input,textarea,option,select,progress"),Mn=function(e,t,n){return"value"===n&&jn(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},Fn=m("contenteditable,draggable,spellcheck"),Un=m("events,caret,typing,plaintext-only"),Vn=function(e,t){return zn(t)||"false"===t?"false":"contenteditable"===e&&Un(t)?t:"true"},qn=m("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),$n="http://www.w3.org/1999/xlink",Bn=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Kn=function(e){return Bn(e)?e.slice(6,e.length):""},zn=function(e){return null==e||!1===e};function Wn(e){for(var t=e.data,n=e,r=e;i(r.componentInstance);)(r=r.componentInstance._vnode)&&r.data&&(t=Hn(r.data,t));for(;i(n=n.parent);)n&&n.data&&(t=Hn(t,n.data));return function(e,t){if(i(e)||i(t))return Gn(e,Qn(t));return""}(t.staticClass,t.class)}function Hn(e,t){return{staticClass:Gn(e.staticClass,t.staticClass),class:i(e.class)?[e.class,t.class]:t.class}}function Gn(e,t){return e?t?e+" "+t:e:t||""}function Qn(e){return Array.isArray(e)?function(e){for(var t,n="",r=0,s=e.length;r<s;r++)i(t=Qn(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}(e):a(e)?function(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}(e):"string"==typeof e?e:""}var Yn={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Jn=m("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Xn=m("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Zn=function(e){return Jn(e)||Xn(e)};function er(e){return Xn(e)?"svg":"math"===e?"math":void 0}var tr=Object.create(null);var nr=m("text,number,password,search,email,tel,url");function rr(e){if("string"==typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}var ir=Object.freeze({createElement:function(e,t){var n=document.createElement(e);return"select"!==e?n:(t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)},createElementNS:function(e,t){return document.createElementNS(Yn[e],t)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){e.appendChild(t)},parentNode:function(e){return e.parentNode},nextSibling:function(e){return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},setStyleScope:function(e,t){e.setAttribute(t,"")}}),sr={create:function(e,t){or(t)},update:function(e,t){e.data.ref!==t.data.ref&&(or(e,!0),or(t))},destroy:function(e){or(e,!0)}};function or(e,t){var n=e.data.ref;if(i(n)){var r=e.context,s=e.componentInstance||e.elm,o=r.$refs;t?Array.isArray(o[n])?v(o[n],s):o[n]===s&&(o[n]=void 0):e.data.refInFor?Array.isArray(o[n])?o[n].indexOf(s)<0&&o[n].push(s):o[n]=[s]:o[n]=s}}var ar=new ge("",{},[]),cr=["create","activate","update","remove","destroy"];function ur(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&i(e.data)===i(t.data)&&function(e,t){if("input"!==e.tag)return!0;var n,r=i(n=e.data)&&i(n=n.attrs)&&n.type,s=i(n=t.data)&&i(n=n.attrs)&&n.type;return r===s||nr(r)&&nr(s)}(e,t)||s(e.isAsyncPlaceholder)&&r(t.asyncFactory.error))}function lr(e,t,n){var r,s,o={};for(r=t;r<=n;++r)i(s=e[r].key)&&(o[s]=r);return o}var hr={create:dr,update:dr,destroy:function(e){dr(e,ar)}};function dr(e,t){(e.data.directives||t.data.directives)&&function(e,t){var n,r,i,s=e===ar,o=t===ar,a=pr(e.data.directives,e.context),c=pr(t.data.directives,t.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,gr(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(gr(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)gr(u[n],"inserted",t,e)};s?ut(t,"insert",h):h()}l.length&&ut(t,"postpatch",function(){for(var n=0;n<l.length;n++)gr(l[n],"componentUpdated",t,e)});if(!s)for(n in a)c[n]||gr(a[n],"unbind",e,e,o)}(e,t)}var fr=Object.create(null);function pr(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++)(r=e[n]).modifiers||(r.modifiers=fr),i[mr(r)]=r,r.def=Fe(t.$options,"directives",r.name);return i}function mr(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function gr(e,t,n,r,i){var s=e.def&&e.def[t];if(s)try{s(n.elm,e,n,r,i)}catch(r){Ke(r,n.context,"directive "+e.name+" "+t+" hook")}}var yr=[sr,hr];function vr(e,t){var n=t.componentOptions;if(!(i(n)&&!1===n.Ctor.options.inheritAttrs||r(e.data.attrs)&&r(t.data.attrs))){var s,o,a=t.elm,c=e.data.attrs||{},u=t.data.attrs||{};for(s in i(u.__ob__)&&(u=t.data.attrs=A({},u)),u)o=u[s],c[s]!==o&&_r(a,s,o,t.data.pre);for(s in(J||Z)&&u.value!==c.value&&_r(a,"value",u.value),c)r(u[s])&&(Bn(s)?a.removeAttributeNS($n,Kn(s)):Fn(s)||a.removeAttribute(s))}}function _r(e,t,n,r){r||e.tagName.indexOf("-")>-1?wr(e,t,n):qn(t)?zn(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):Fn(t)?e.setAttribute(t,Vn(t,n)):Bn(t)?zn(n)?e.removeAttributeNS($n,Kn(t)):e.setAttributeNS($n,t,n):wr(e,t,n)}function wr(e,t,n){if(zn(n))e.removeAttribute(t);else{if(J&&!X&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var br={create:vr,update:vr};function Ir(e,t){var n=t.elm,s=t.data,o=e.data;if(!(r(s.staticClass)&&r(s.class)&&(r(o)||r(o.staticClass)&&r(o.class)))){var a=Wn(t),c=n._transitionClasses;i(c)&&(a=Gn(a,Qn(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Tr,Er,Cr,Sr,kr,Or,Ar={create:Ir,update:Ir},Nr=/[\w).+\-_$\]]/;function xr(e){var t,n,r,i,s,o=!1,a=!1,c=!1,u=!1,l=0,h=0,d=0,f=0;for(r=0;r<e.length;r++)if(n=t,t=e.charCodeAt(r),o)39===t&&92!==n&&(o=!1);else if(a)34===t&&92!==n&&(a=!1);else if(c)96===t&&92!==n&&(c=!1);else if(u)47===t&&92!==n&&(u=!1);else if(124!==t||124===e.charCodeAt(r+1)||124===e.charCodeAt(r-1)||l||h||d){switch(t){case 34:a=!0;break;case 39:o=!0;break;case 96:c=!0;break;case 40:d++;break;case 41:d--;break;case 91:h++;break;case 93:h--;break;case 123:l++;break;case 125:l--}if(47===t){for(var p=r-1,m=void 0;p>=0&&" "===(m=e.charAt(p));p--);m&&Nr.test(m)||(u=!0)}}else void 0===i?(f=r+1,i=e.slice(0,r).trim()):g();function g(){(s||(s=[])).push(e.slice(f,r).trim()),f=r+1}if(void 0===i?i=e.slice(0,r).trim():0!==f&&g(),s)for(r=0;r<s.length;r++)i=Rr(i,s[r]);return i}function Rr(e,t){var n=t.indexOf("(");if(n<0)return'_f("'+t+'")('+e+")";var r=t.slice(0,n),i=t.slice(n+1);return'_f("'+r+'")('+e+(")"!==i?","+i:i)}function Pr(e,t){console.error("[Vue compiler]: "+e)}function Dr(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function Lr(e,t,n,r,i){(e.props||(e.props=[])).push(zr({name:t,value:n,dynamic:i},r)),e.plain=!1}function jr(e,t,n,r,i){(i?e.dynamicAttrs||(e.dynamicAttrs=[]):e.attrs||(e.attrs=[])).push(zr({name:t,value:n,dynamic:i},r)),e.plain=!1}function Mr(e,t,n,r){e.attrsMap[t]=n,e.attrsList.push(zr({name:t,value:n},r))}function Fr(e,t,n,r,i,s,o,a){(e.directives||(e.directives=[])).push(zr({name:t,rawName:n,value:r,arg:i,isDynamicArg:s,modifiers:o},a)),e.plain=!1}function Ur(e,t,n){return n?"_p("+t+',"'+e+'")':e+t}function Vr(e,t,r,i,s,o,a,c){var u;(i=i||n).right?c?t="("+t+")==='click'?'contextmenu':("+t+")":"click"===t&&(t="contextmenu",delete i.right):i.middle&&(c?t="("+t+")==='click'?'mouseup':("+t+")":"click"===t&&(t="mouseup")),i.capture&&(delete i.capture,t=Ur("!",t,c)),i.once&&(delete i.once,t=Ur("~",t,c)),i.passive&&(delete i.passive,t=Ur("&",t,c)),i.native?(delete i.native,u=e.nativeEvents||(e.nativeEvents={})):u=e.events||(e.events={});var l=zr({value:r.trim(),dynamic:c},a);i!==n&&(l.modifiers=i);var h=u[t];Array.isArray(h)?s?h.unshift(l):h.push(l):u[t]=h?s?[l,h]:[h,l]:l,e.plain=!1}function qr(e,t){return e.rawAttrsMap[":"+t]||e.rawAttrsMap["v-bind:"+t]||e.rawAttrsMap[t]}function $r(e,t,n){var r=Br(e,":"+t)||Br(e,"v-bind:"+t);if(null!=r)return xr(r);if(!1!==n){var i=Br(e,t);if(null!=i)return JSON.stringify(i)}}function Br(e,t,n){var r;if(null!=(r=e.attrsMap[t]))for(var i=e.attrsList,s=0,o=i.length;s<o;s++)if(i[s].name===t){i.splice(s,1);break}return n&&delete e.attrsMap[t],r}function Kr(e,t){for(var n=e.attrsList,r=0,i=n.length;r<i;r++){var s=n[r];if(t.test(s.name))return n.splice(r,1),s}}function zr(e,t){return t&&(null!=t.start&&(e.start=t.start),null!=t.end&&(e.end=t.end)),e}function Wr(e,t,n){var r=n||{},i=r.number,s="$$v";r.trim&&(s="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(s="_n("+s+")");var o=Hr(t,s);e.model={value:"("+t+")",expression:JSON.stringify(t),callback:"function ($$v) {"+o+"}"}}function Hr(e,t){var n=function(e){if(e=e.trim(),Tr=e.length,e.indexOf("[")<0||e.lastIndexOf("]")<Tr-1)return(Sr=e.lastIndexOf("."))>-1?{exp:e.slice(0,Sr),key:'"'+e.slice(Sr+1)+'"'}:{exp:e,key:null};Er=e,Sr=kr=Or=0;for(;!Qr();)Yr(Cr=Gr())?Xr(Cr):91===Cr&&Jr(Cr);return{exp:e.slice(0,kr),key:e.slice(kr+1,Or)}}(e);return null===n.key?e+"="+t:"$set("+n.exp+", "+n.key+", "+t+")"}function Gr(){return Er.charCodeAt(++Sr)}function Qr(){return Sr>=Tr}function Yr(e){return 34===e||39===e}function Jr(e){var t=1;for(kr=Sr;!Qr();)if(Yr(e=Gr()))Xr(e);else if(91===e&&t++,93===e&&t--,0===t){Or=Sr;break}}function Xr(e){for(var t=e;!Qr()&&(e=Gr())!==t;);}var Zr,ei="__r",ti="__c";function ni(e,t,n){var r=Zr;return function i(){null!==t.apply(null,arguments)&&si(e,i,n,r)}}var ri=Qe&&!(te&&Number(te[1])<=53);function ii(e,t,n,r){if(ri){var i=hn,s=t;t=s._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return s.apply(this,arguments)}}Zr.addEventListener(e,t,re?{capture:n,passive:r}:n)}function si(e,t,n,r){(r||Zr).removeEventListener(e,t._wrapper||t,n)}function oi(e,t){if(!r(e.data.on)||!r(t.data.on)){var n=t.data.on||{},s=e.data.on||{};Zr=t.elm,function(e){if(i(e[ei])){var t=J?"change":"input";e[t]=[].concat(e[ei],e[t]||[]),delete e[ei]}i(e[ti])&&(e.change=[].concat(e[ti],e.change||[]),delete e[ti])}(n),ct(n,s,ii,si,ni,t.context),Zr=void 0}}var ai,ci={create:oi,update:oi};function ui(e,t){if(!r(e.data.domProps)||!r(t.data.domProps)){var n,s,o=t.elm,a=e.data.domProps||{},c=t.data.domProps||{};for(n in i(c.__ob__)&&(c=t.data.domProps=A({},c)),a)n in c||(o[n]="");for(n in c){if(s=c[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),s===a[n])continue;1===o.childNodes.length&&o.removeChild(o.childNodes[0])}if("value"===n&&"PROGRESS"!==o.tagName){o._value=s;var u=r(s)?"":String(s);li(o,u)&&(o.value=u)}else if("innerHTML"===n&&Xn(o.tagName)&&r(o.innerHTML)){(ai=ai||document.createElement("div")).innerHTML="<svg>"+s+"</svg>";for(var l=ai.firstChild;o.firstChild;)o.removeChild(o.firstChild);for(;l.firstChild;)o.appendChild(l.firstChild)}else if(s!==a[n])try{o[n]=s}catch(e){}}}}function li(e,t){return!e.composing&&("OPTION"===e.tagName||function(e,t){var n=!0;try{n=document.activeElement!==e}catch(e){}return n&&e.value!==t}(e,t)||function(e,t){var n=e.value,r=e._vModifiers;if(i(r)){if(r.number)return p(n)!==p(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}(e,t))}var hi={create:ui,update:ui},di=b(function(e){var t={},n=/:(.+)/;return e.split(/;(?![^(]*\))/g).forEach(function(e){if(e){var r=e.split(n);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t});function fi(e){var t=pi(e.style);return e.staticStyle?A(e.staticStyle,t):t}function pi(e){return Array.isArray(e)?N(e):"string"==typeof e?di(e):e}var mi,gi=/^--/,yi=/\s*!important$/,vi=function(e,t,n){if(gi.test(t))e.style.setProperty(t,n);else if(yi.test(n))e.style.setProperty(S(t),n.replace(yi,""),"important");else{var r=wi(t);if(Array.isArray(n))for(var i=0,s=n.length;i<s;i++)e.style[r]=n[i];else e.style[r]=n}},_i=["Webkit","Moz","ms"],wi=b(function(e){if(mi=mi||document.createElement("div").style,"filter"!==(e=T(e))&&e in mi)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<_i.length;n++){var r=_i[n]+t;if(r in mi)return r}});function bi(e,t){var n=t.data,s=e.data;if(!(r(n.staticStyle)&&r(n.style)&&r(s.staticStyle)&&r(s.style))){var o,a,c=t.elm,u=s.staticStyle,l=s.normalizedStyle||s.style||{},h=u||l,d=pi(t.data.style)||{};t.data.normalizedStyle=i(d.__ob__)?A({},d):d;var f=function(e,t){var n,r={};if(t)for(var i=e;i.componentInstance;)(i=i.componentInstance._vnode)&&i.data&&(n=fi(i.data))&&A(r,n);(n=fi(e.data))&&A(r,n);for(var s=e;s=s.parent;)s.data&&(n=fi(s.data))&&A(r,n);return r}(t,!0);for(a in h)r(f[a])&&vi(c,a,"");for(a in f)(o=f[a])!==h[a]&&vi(c,a,null==o?"":o)}}var Ii={create:bi,update:bi},Ti=/\s+/;function Ei(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Ti).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Ci(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Ti).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{for(var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?e.setAttribute("class",n):e.removeAttribute("class")}}function Si(e){if(e){if("object"==typeof e){var t={};return!1!==e.css&&A(t,ki(e.name||"v")),A(t,e),t}return"string"==typeof e?ki(e):void 0}}var ki=b(function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}}),Oi=H&&!X,Ai="transition",Ni="animation",xi="transition",Ri="transitionend",Pi="animation",Di="animationend";Oi&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(xi="WebkitTransition",Ri="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Pi="WebkitAnimation",Di="webkitAnimationEnd"));var Li=H?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function ji(e){Li(function(){Li(e)})}function Mi(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Ei(e,t))}function Fi(e,t){e._transitionClasses&&v(e._transitionClasses,t),Ci(e,t)}function Ui(e,t,n){var r=qi(e,t),i=r.type,s=r.timeout,o=r.propCount;if(!i)return n();var a=i===Ai?Ri:Di,c=0,u=function(){e.removeEventListener(a,l),n()},l=function(t){t.target===e&&++c>=o&&u()};setTimeout(function(){c<o&&u()},s+1),e.addEventListener(a,l)}var Vi=/\b(transform|all)(,|$)/;function qi(e,t){var n,r=window.getComputedStyle(e),i=(r[xi+"Delay"]||"").split(", "),s=(r[xi+"Duration"]||"").split(", "),o=$i(i,s),a=(r[Pi+"Delay"]||"").split(", "),c=(r[Pi+"Duration"]||"").split(", "),u=$i(a,c),l=0,h=0;return t===Ai?o>0&&(n=Ai,l=o,h=s.length):t===Ni?u>0&&(n=Ni,l=u,h=c.length):h=(n=(l=Math.max(o,u))>0?o>u?Ai:Ni:null)?n===Ai?s.length:c.length:0,{type:n,timeout:l,propCount:h,hasTransform:n===Ai&&Vi.test(r[xi+"Property"])}}function $i(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return Bi(t)+Bi(e[n])}))}function Bi(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Ki(e,t){var n=e.elm;i(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var s=Si(e.data.transition);if(!r(s)&&!i(n._enterCb)&&1===n.nodeType){for(var o=s.css,c=s.type,u=s.enterClass,l=s.enterToClass,h=s.enterActiveClass,d=s.appearClass,f=s.appearToClass,m=s.appearActiveClass,g=s.beforeEnter,y=s.enter,v=s.afterEnter,_=s.enterCancelled,w=s.beforeAppear,b=s.appear,I=s.afterAppear,T=s.appearCancelled,E=s.duration,C=Zt,S=Zt.$vnode;S&&S.parent;)C=S.context,S=S.parent;var k=!C._isMounted||!e.isRootInsert;if(!k||b||""===b){var O=k&&d?d:u,A=k&&m?m:h,N=k&&f?f:l,x=k&&w||g,R=k&&"function"==typeof b?b:y,P=k&&I||v,D=k&&T||_,L=p(a(E)?E.enter:E);0;var M=!1!==o&&!X,F=Hi(R),U=n._enterCb=j(function(){M&&(Fi(n,N),Fi(n,A)),U.cancelled?(M&&Fi(n,O),D&&D(n)):P&&P(n),n._enterCb=null});e.data.show||ut(e,"insert",function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),R&&R(n,U)}),x&&x(n),M&&(Mi(n,O),Mi(n,A),ji(function(){Fi(n,O),U.cancelled||(Mi(n,N),F||(Wi(L)?setTimeout(U,L):Ui(n,c,U)))})),e.data.show&&(t&&t(),R&&R(n,U)),M||F||U()}}}function zi(e,t){var n=e.elm;i(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var s=Si(e.data.transition);if(r(s)||1!==n.nodeType)return t();if(!i(n._leaveCb)){var o=s.css,c=s.type,u=s.leaveClass,l=s.leaveToClass,h=s.leaveActiveClass,d=s.beforeLeave,f=s.leave,m=s.afterLeave,g=s.leaveCancelled,y=s.delayLeave,v=s.duration,_=!1!==o&&!X,w=Hi(f),b=p(a(v)?v.leave:v);0;var I=n._leaveCb=j(function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),_&&(Fi(n,l),Fi(n,h)),I.cancelled?(_&&Fi(n,u),g&&g(n)):(t(),m&&m(n)),n._leaveCb=null});y?y(T):T()}function T(){I.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),d&&d(n),_&&(Mi(n,u),Mi(n,h),ji(function(){Fi(n,u),I.cancelled||(Mi(n,l),w||(Wi(b)?setTimeout(I,b):Ui(n,c,I)))})),f&&f(n,I),_||w||I())}}function Wi(e){return"number"==typeof e&&!isNaN(e)}function Hi(e){if(r(e))return!1;var t=e.fns;return i(t)?Hi(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function Gi(e,t){!0!==t.data.show&&Ki(t)}var Qi=function(e){var t,n,a={},c=e.modules,u=e.nodeOps;for(t=0;t<cr.length;++t)for(a[cr[t]]=[],n=0;n<c.length;++n)i(c[n][cr[t]])&&a[cr[t]].push(c[n][cr[t]]);function l(e){var t=u.parentNode(e);i(t)&&u.removeChild(t,e)}function h(e,t,n,r,o,c,l){if(i(e.elm)&&i(c)&&(e=c[l]=we(e)),e.isRootInsert=!o,!function(e,t,n,r){var o=e.data;if(i(o)){var c=i(e.componentInstance)&&o.keepAlive;if(i(o=o.hook)&&i(o=o.init)&&o(e,!1),i(e.componentInstance))return d(e,t),f(n,e.elm,r),s(c)&&function(e,t,n,r){for(var s,o=e;o.componentInstance;)if(o=o.componentInstance._vnode,i(s=o.data)&&i(s=s.transition)){for(s=0;s<a.activate.length;++s)a.activate[s](ar,o);t.push(o);break}f(n,e.elm,r)}(e,t,n,r),!0}}(e,t,n,r)){var h=e.data,m=e.children,g=e.tag;i(g)?(e.elm=e.ns?u.createElementNS(e.ns,g):u.createElement(g,e),v(e),p(e,m,t),i(h)&&y(e,t),f(n,e.elm,r)):s(e.isComment)?(e.elm=u.createComment(e.text),f(n,e.elm,r)):(e.elm=u.createTextNode(e.text),f(n,e.elm,r))}}function d(e,t){i(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,g(e)?(y(e,t),v(e)):(or(e),t.push(e))}function f(e,t,n){i(e)&&(i(n)?u.parentNode(n)===e&&u.insertBefore(e,t,n):u.appendChild(e,t))}function p(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)h(t[r],n,e.elm,null,!0,t,r);else o(e.text)&&u.appendChild(e.elm,u.createTextNode(String(e.text)))}function g(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return i(e.tag)}function y(e,n){for(var r=0;r<a.create.length;++r)a.create[r](ar,e);i(t=e.data.hook)&&(i(t.create)&&t.create(ar,e),i(t.insert)&&n.push(e))}function v(e){var t;if(i(t=e.fnScopeId))u.setStyleScope(e.elm,t);else for(var n=e;n;)i(t=n.context)&&i(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t),n=n.parent;i(t=Zt)&&t!==e.context&&t!==e.fnContext&&i(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t)}function _(e,t,n,r,i,s){for(;r<=i;++r)h(n[r],s,e,t,!1,n,r)}function w(e){var t,n,r=e.data;if(i(r))for(i(t=r.hook)&&i(t=t.destroy)&&t(e),t=0;t<a.destroy.length;++t)a.destroy[t](e);if(i(t=e.children))for(n=0;n<e.children.length;++n)w(e.children[n])}function b(e,t,n){for(;t<=n;++t){var r=e[t];i(r)&&(i(r.tag)?(I(r),w(r)):l(r.elm))}}function I(e,t){if(i(t)||i(e.data)){var n,r=a.remove.length+1;for(i(t)?t.listeners+=r:t=function(e,t){function n(){0==--n.listeners&&l(e)}return n.listeners=t,n}(e.elm,r),i(n=e.componentInstance)&&i(n=n._vnode)&&i(n.data)&&I(n,t),n=0;n<a.remove.length;++n)a.remove[n](e,t);i(n=e.data.hook)&&i(n=n.remove)?n(e,t):t()}else l(e.elm)}function T(e,t,n,r){for(var s=n;s<r;s++){var o=t[s];if(i(o)&&ur(e,o))return s}}function E(e,t,n,o,c,l){if(e!==t){i(t.elm)&&i(o)&&(t=o[c]=we(t));var d=t.elm=e.elm;if(s(e.isAsyncPlaceholder))i(t.asyncFactory.resolved)?k(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(s(t.isStatic)&&s(e.isStatic)&&t.key===e.key&&(s(t.isCloned)||s(t.isOnce)))t.componentInstance=e.componentInstance;else{var f,p=t.data;i(p)&&i(f=p.hook)&&i(f=f.prepatch)&&f(e,t);var m=e.children,y=t.children;if(i(p)&&g(t)){for(f=0;f<a.update.length;++f)a.update[f](e,t);i(f=p.hook)&&i(f=f.update)&&f(e,t)}r(t.text)?i(m)&&i(y)?m!==y&&function(e,t,n,s,o){for(var a,c,l,d=0,f=0,p=t.length-1,m=t[0],g=t[p],y=n.length-1,v=n[0],w=n[y],I=!o;d<=p&&f<=y;)r(m)?m=t[++d]:r(g)?g=t[--p]:ur(m,v)?(E(m,v,s,n,f),m=t[++d],v=n[++f]):ur(g,w)?(E(g,w,s,n,y),g=t[--p],w=n[--y]):ur(m,w)?(E(m,w,s,n,y),I&&u.insertBefore(e,m.elm,u.nextSibling(g.elm)),m=t[++d],w=n[--y]):ur(g,v)?(E(g,v,s,n,f),I&&u.insertBefore(e,g.elm,m.elm),g=t[--p],v=n[++f]):(r(a)&&(a=lr(t,d,p)),r(c=i(v.key)?a[v.key]:T(v,t,d,p))?h(v,s,e,m.elm,!1,n,f):ur(l=t[c],v)?(E(l,v,s,n,f),t[c]=void 0,I&&u.insertBefore(e,l.elm,m.elm)):h(v,s,e,m.elm,!1,n,f),v=n[++f]);d>p?_(e,r(n[y+1])?null:n[y+1].elm,n,f,y,s):f>y&&b(t,d,p)}(d,m,y,n,l):i(y)?(i(e.text)&&u.setTextContent(d,""),_(d,null,y,0,y.length-1,n)):i(m)?b(m,0,m.length-1):i(e.text)&&u.setTextContent(d,""):e.text!==t.text&&u.setTextContent(d,t.text),i(p)&&i(f=p.hook)&&i(f=f.postpatch)&&f(e,t)}}}function C(e,t,n){if(s(n)&&i(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}var S=m("attrs,class,staticClass,staticStyle,key");function k(e,t,n,r){var o,a=t.tag,c=t.data,u=t.children;if(r=r||c&&c.pre,t.elm=e,s(t.isComment)&&i(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(i(c)&&(i(o=c.hook)&&i(o=o.init)&&o(t,!0),i(o=t.componentInstance)))return d(t,n),!0;if(i(a)){if(i(u))if(e.hasChildNodes())if(i(o=c)&&i(o=o.domProps)&&i(o=o.innerHTML)){if(o!==e.innerHTML)return!1}else{for(var l=!0,h=e.firstChild,f=0;f<u.length;f++){if(!h||!k(h,u[f],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else p(t,u,n);if(i(c)){var m=!1;for(var g in c)if(!S(g)){m=!0,y(t,n);break}!m&&c.class&&st(c.class)}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,o){if(!r(t)){var c,l=!1,d=[];if(r(e))l=!0,h(t,d);else{var f=i(e.nodeType);if(!f&&ur(e,t))E(e,t,d,null,null,o);else{if(f){if(1===e.nodeType&&e.hasAttribute(M)&&(e.removeAttribute(M),n=!0),s(n)&&k(e,t,d))return C(t,d,!0),e;c=e,e=new ge(u.tagName(c).toLowerCase(),{},[],void 0,c)}var p=e.elm,m=u.parentNode(p);if(h(t,d,p._leaveCb?null:m,u.nextSibling(p)),i(t.parent))for(var y=t.parent,v=g(t);y;){for(var _=0;_<a.destroy.length;++_)a.destroy[_](y);if(y.elm=t.elm,v){for(var I=0;I<a.create.length;++I)a.create[I](ar,y);var T=y.data.hook.insert;if(T.merged)for(var S=1;S<T.fns.length;S++)T.fns[S]()}else or(y);y=y.parent}i(m)?b([e],0,0):i(e.tag)&&w(e)}}return C(t,d,l),t.elm}i(e)&&w(e)}}({nodeOps:ir,modules:[br,Ar,ci,hi,Ii,H?{create:Gi,activate:Gi,remove:function(e,t){!0!==e.data.show?zi(e,t):t()}}:{}].concat(yr)});X&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&rs(e,"input")});var Yi={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?ut(n,"postpatch",function(){Yi.componentUpdated(e,t,n)}):Ji(e,t,n.context),e._vOptions=[].map.call(e.options,es)):("textarea"===n.tag||nr(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",ts),e.addEventListener("compositionend",ns),e.addEventListener("change",ns),X&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Ji(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,es);if(i.some(function(e,t){return!D(e,r[t])}))(e.multiple?t.value.some(function(e){return Zi(e,i)}):t.value!==t.oldValue&&Zi(t.value,i))&&rs(e,"change")}}};function Ji(e,t,n){Xi(e,t,n),(J||Z)&&setTimeout(function(){Xi(e,t,n)},0)}function Xi(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var s,o,a=0,c=e.options.length;a<c;a++)if(o=e.options[a],i)s=L(r,es(o))>-1,o.selected!==s&&(o.selected=s);else if(D(es(o),r))return void(e.selectedIndex!==a&&(e.selectedIndex=a));i||(e.selectedIndex=-1)}}function Zi(e,t){return t.every(function(t){return!D(t,e)})}function es(e){return"_value"in e?e._value:e.value}function ts(e){e.target.composing=!0}function ns(e){e.target.composing&&(e.target.composing=!1,rs(e.target,"input"))}function rs(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function is(e){return!e.componentInstance||e.data&&e.data.transition?e:is(e.componentInstance._vnode)}var ss={model:Yi,show:{bind:function(e,t,n){var r=t.value,i=(n=is(n)).data&&n.data.transition,s=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,Ki(n,function(){e.style.display=s})):e.style.display=r?s:"none"},update:function(e,t,n){var r=t.value;!r!=!t.oldValue&&((n=is(n)).data&&n.data.transition?(n.data.show=!0,r?Ki(n,function(){e.style.display=e.__vOriginalDisplay}):zi(n,function(){e.style.display="none"})):e.style.display=r?e.__vOriginalDisplay:"none")},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}}},os={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function as(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?as(Gt(t.children)):e}function cs(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var s in i)t[T(s)]=i[s];return t}function us(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}var ls=function(e){return e.tag||gt(e)},hs=function(e){return"show"===e.name},ds={name:"transition",props:os,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(ls)).length){0;var r=this.mode;0;var i=n[0];if(function(e){for(;e=e.parent;)if(e.data.transition)return!0}(this.$vnode))return i;var s=as(i);if(!s)return i;if(this._leaving)return us(e,i);var a="__transition-"+this._uid+"-";s.key=null==s.key?s.isComment?a+"comment":a+s.tag:o(s.key)?0===String(s.key).indexOf(a)?s.key:a+s.key:s.key;var c=(s.data||(s.data={})).transition=cs(this),u=this._vnode,l=as(u);if(s.data.directives&&s.data.directives.some(hs)&&(s.data.show=!0),l&&l.data&&!function(e,t){return t.key===e.key&&t.tag===e.tag}(s,l)&&!gt(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=A({},c);if("out-in"===r)return this._leaving=!0,ut(h,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),us(e,i);if("in-out"===r){if(gt(s))return u;var d,f=function(){d()};ut(c,"afterEnter",f),ut(c,"enterCancelled",f),ut(h,"delayLeave",function(e){d=e})}}return i}}},fs=A({tag:String,moveClass:String},os);function ps(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function ms(e){e.data.newPos=e.elm.getBoundingClientRect()}function gs(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var s=e.elm.style;s.transform=s.WebkitTransform="translate("+r+"px,"+i+"px)",s.transitionDuration="0s"}}delete fs.mode;var ys={Transition:ds,TransitionGroup:{props:fs,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=en(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],s=this.children=[],o=cs(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(r){for(var u=[],l=[],h=0;h<r.length;h++){var d=r[h];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?u.push(d):l.push(d)}this.kept=e(t,null,u),this.removed=l}return e(t,null,s)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(ps),e.forEach(ms),e.forEach(gs),this._reflow=document.body.offsetHeight,e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;Mi(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Ri,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Ri,e),n._moveCb=null,Fi(n,t))})}}))},methods:{hasMove:function(e,t){if(!Oi)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(e){Ci(n,e)}),Ei(n,t),n.style.display="none",this.$el.appendChild(n);var r=qi(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};kn.config.mustUseProp=Mn,kn.config.isReservedTag=Zn,kn.config.isReservedAttr=Ln,kn.config.getTagNamespace=er,kn.config.isUnknownElement=function(e){if(!H)return!0;if(Zn(e))return!1;if(e=e.toLowerCase(),null!=tr[e])return tr[e];var t=document.createElement(e);return e.indexOf("-")>-1?tr[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:tr[e]=/HTMLUnknownElement/.test(t.toString())},A(kn.options.directives,ss),A(kn.options.components,ys),kn.prototype.__patch__=H?Qi:x,kn.prototype.$mount=function(e,t){return function(e,t,n){return e.$el=t,e.$options.render||(e.$options.render=ve),rn(e,"beforeMount"),new gn(e,function(){e._update(e._render(),n)},x,{before:function(){e._isMounted&&!e._isDestroyed&&rn(e,"beforeUpdate")}},!0),n=!1,null==e.$vnode&&(e._isMounted=!0,rn(e,"mounted")),e}(this,e=e&&H?rr(e):void 0,t)},H&&setTimeout(function(){V.devtools&&oe&&oe.emit("init",kn)},0);var vs=/\{\{((?:.|\r?\n)+?)\}\}/g,_s=/[-.*+?^${}()|[\]\/\\]/g,ws=b(function(e){var t=e[0].replace(_s,"\\$&"),n=e[1].replace(_s,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")});function bs(e,t){var n=t?ws(t):vs;if(n.test(e)){for(var r,i,s,o=[],a=[],c=n.lastIndex=0;r=n.exec(e);){(i=r.index)>c&&(a.push(s=e.slice(c,i)),o.push(JSON.stringify(s)));var u=xr(r[1].trim());o.push("_s("+u+")"),a.push({"@binding":u}),c=i+r[0].length}return c<e.length&&(a.push(s=e.slice(c)),o.push(JSON.stringify(s))),{expression:o.join("+"),tokens:a}}}var Is={staticKeys:["staticClass"],transformNode:function(e,t){t.warn;var n=Br(e,"class");n&&(e.staticClass=JSON.stringify(n));var r=$r(e,"class",!1);r&&(e.classBinding=r)},genData:function(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}};var Ts,Es={staticKeys:["staticStyle"],transformNode:function(e,t){t.warn;var n=Br(e,"style");n&&(e.staticStyle=JSON.stringify(di(n)));var r=$r(e,"style",!1);r&&(e.styleBinding=r)},genData:function(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}},Cs=function(e){return(Ts=Ts||document.createElement("div")).innerHTML=e,Ts.textContent},Ss=m("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),ks=m("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),Os=m("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),As=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,Ns=/^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,xs="[a-zA-Z_][\\-\\.0-9_a-zA-Z"+q.source+"]*",Rs="((?:"+xs+"\\:)?"+xs+")",Ps=new RegExp("^<"+Rs),Ds=/^\s*(\/?)>/,Ls=new RegExp("^<\\/"+Rs+"[^>]*>"),js=/^<!DOCTYPE [^>]+>/i,Ms=/^<!\--/,Fs=/^<!\[/,Us=m("script,style,textarea",!0),Vs={},qs={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t","&#39;":"'"},$s=/&(?:lt|gt|quot|amp|#39);/g,Bs=/&(?:lt|gt|quot|amp|#39|#10|#9);/g,Ks=m("pre,textarea",!0),zs=function(e,t){return e&&Ks(e)&&"\n"===t[0]};function Ws(e,t){var n=t?Bs:$s;return e.replace(n,function(e){return qs[e]})}var Hs,Gs,Qs,Ys,Js,Xs,Zs,eo,to=/^@|^v-on:/,no=/^v-|^@|^:|^#/,ro=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,io=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,so=/^\(|\)$/g,oo=/^\[.*\]$/,ao=/:(.*)$/,co=/^:|^\.|^v-bind:/,uo=/\.[^.\]]+(?=[^\]]*$)/g,lo=/^v-slot(:|$)|^#/,ho=/[\r\n]/,fo=/[ \f\t\r\n]+/g,po=b(Cs),mo="_empty_";function go(e,t,n){return{type:1,tag:e,attrsList:t,attrsMap:function(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}(t),rawAttrsMap:{},parent:n,children:[]}}function yo(e,t){Hs=t.warn||Pr,Xs=t.isPreTag||R,Zs=t.mustUseProp||R,eo=t.getTagNamespace||R;var n=t.isReservedTag||R;(function(e){return!(!(e.component||e.attrsMap[":is"]||e.attrsMap["v-bind:is"])&&(e.attrsMap.is?n(e.attrsMap.is):n(e.tag)))}),Qs=Dr(t.modules,"transformNode"),Ys=Dr(t.modules,"preTransformNode"),Js=Dr(t.modules,"postTransformNode"),Gs=t.delimiters;var r,i,s=[],o=!1!==t.preserveWhitespace,a=t.whitespace,c=!1,u=!1;function l(e){if(h(e),c||e.processed||(e=vo(e,t)),s.length||e===r||r.if&&(e.elseif||e.else)&&wo(r,{exp:e.elseif,block:e}),i&&!e.forbidden)if(e.elseif||e.else)o=e,(a=function(e){var t=e.length;for(;t--;){if(1===e[t].type)return e[t];e.pop()}}(i.children))&&a.if&&wo(a,{exp:o.elseif,block:o});else{if(e.slotScope){var n=e.slotTarget||'"default"';(i.scopedSlots||(i.scopedSlots={}))[n]=e}i.children.push(e),e.parent=i}var o,a;e.children=e.children.filter(function(e){return!e.slotScope}),h(e),e.pre&&(c=!1),Xs(e.tag)&&(u=!1);for(var l=0;l<Js.length;l++)Js[l](e,t)}function h(e){if(!u)for(var t;(t=e.children[e.children.length-1])&&3===t.type&&" "===t.text;)e.children.pop()}return function(e,t){for(var n,r,i=[],s=t.expectHTML,o=t.isUnaryTag||R,a=t.canBeLeftOpenTag||R,c=0;e;){if(n=e,r&&Us(r)){var u=0,l=r.toLowerCase(),h=Vs[l]||(Vs[l]=new RegExp("([\\s\\S]*?)(</"+l+"[^>]*>)","i")),d=e.replace(h,function(e,n,r){return u=r.length,Us(l)||"noscript"===l||(n=n.replace(/<!\--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),zs(l,n)&&(n=n.slice(1)),t.chars&&t.chars(n),""});c+=e.length-d.length,e=d,S(l,c-u,c)}else{var f=e.indexOf("<");if(0===f){if(Ms.test(e)){var p=e.indexOf("--\x3e");if(p>=0){t.shouldKeepComment&&t.comment(e.substring(4,p),c,c+p+3),T(p+3);continue}}if(Fs.test(e)){var m=e.indexOf("]>");if(m>=0){T(m+2);continue}}var g=e.match(js);if(g){T(g[0].length);continue}var y=e.match(Ls);if(y){var v=c;T(y[0].length),S(y[1],v,c);continue}var _=E();if(_){C(_),zs(_.tagName,e)&&T(1);continue}}var w=void 0,b=void 0,I=void 0;if(f>=0){for(b=e.slice(f);!(Ls.test(b)||Ps.test(b)||Ms.test(b)||Fs.test(b)||(I=b.indexOf("<",1))<0);)f+=I,b=e.slice(f);w=e.substring(0,f)}f<0&&(w=e),w&&T(w.length),t.chars&&w&&t.chars(w,c-w.length,c)}if(e===n){t.chars&&t.chars(e);break}}function T(t){c+=t,e=e.substring(t)}function E(){var t=e.match(Ps);if(t){var n,r,i={tagName:t[1],attrs:[],start:c};for(T(t[0].length);!(n=e.match(Ds))&&(r=e.match(Ns)||e.match(As));)r.start=c,T(r[0].length),r.end=c,i.attrs.push(r);if(n)return i.unarySlash=n[1],T(n[0].length),i.end=c,i}}function C(e){var n=e.tagName,c=e.unarySlash;s&&("p"===r&&Os(n)&&S(r),a(n)&&r===n&&S(n));for(var u=o(n)||!!c,l=e.attrs.length,h=new Array(l),d=0;d<l;d++){var f=e.attrs[d],p=f[3]||f[4]||f[5]||"",m="a"===n&&"href"===f[1]?t.shouldDecodeNewlinesForHref:t.shouldDecodeNewlines;h[d]={name:f[1],value:Ws(p,m)}}u||(i.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:h,start:e.start,end:e.end}),r=n),t.start&&t.start(n,h,u,e.start,e.end)}function S(e,n,s){var o,a;if(null==n&&(n=c),null==s&&(s=c),e)for(a=e.toLowerCase(),o=i.length-1;o>=0&&i[o].lowerCasedTag!==a;o--);else o=0;if(o>=0){for(var u=i.length-1;u>=o;u--)t.end&&t.end(i[u].tag,n,s);i.length=o,r=o&&i[o-1].tag}else"br"===a?t.start&&t.start(e,[],!0,n,s):"p"===a&&(t.start&&t.start(e,[],!1,n,s),t.end&&t.end(e,n,s))}S()}(e,{warn:Hs,expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,canBeLeftOpenTag:t.canBeLeftOpenTag,shouldDecodeNewlines:t.shouldDecodeNewlines,shouldDecodeNewlinesForHref:t.shouldDecodeNewlinesForHref,shouldKeepComment:t.comments,outputSourceRange:t.outputSourceRange,start:function(e,n,o,a,h){var d=i&&i.ns||eo(e);J&&"svg"===d&&(n=function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];To.test(r.name)||(r.name=r.name.replace(Eo,""),t.push(r))}return t}(n));var f,p=go(e,n,i);d&&(p.ns=d),"style"!==(f=p).tag&&("script"!==f.tag||f.attrsMap.type&&"text/javascript"!==f.attrsMap.type)||se()||(p.forbidden=!0);for(var m=0;m<Ys.length;m++)p=Ys[m](p,t)||p;c||(!function(e){null!=Br(e,"v-pre")&&(e.pre=!0)}(p),p.pre&&(c=!0)),Xs(p.tag)&&(u=!0),c?function(e){var t=e.attrsList,n=t.length;if(n)for(var r=e.attrs=new Array(n),i=0;i<n;i++)r[i]={name:t[i].name,value:JSON.stringify(t[i].value)},null!=t[i].start&&(r[i].start=t[i].start,r[i].end=t[i].end);else e.pre||(e.plain=!0)}(p):p.processed||(_o(p),function(e){var t=Br(e,"v-if");if(t)e.if=t,wo(e,{exp:t,block:e});else{null!=Br(e,"v-else")&&(e.else=!0);var n=Br(e,"v-else-if");n&&(e.elseif=n)}}(p),function(e){null!=Br(e,"v-once")&&(e.once=!0)}(p)),r||(r=p),o?l(p):(i=p,s.push(p))},end:function(e,t,n){var r=s[s.length-1];s.length-=1,i=s[s.length-1],l(r)},chars:function(e,t,n){if(i&&(!J||"textarea"!==i.tag||i.attrsMap.placeholder!==e)){var r,s,l,h=i.children;if(e=u||e.trim()?"script"===(r=i).tag||"style"===r.tag?e:po(e):h.length?a?"condense"===a&&ho.test(e)?"":" ":o?" ":"":"")u||"condense"!==a||(e=e.replace(fo," ")),!c&&" "!==e&&(s=bs(e,Gs))?l={type:2,expression:s.expression,tokens:s.tokens,text:e}:" "===e&&h.length&&" "===h[h.length-1].text||(l={type:3,text:e}),l&&h.push(l)}},comment:function(e,t,n){if(i){var r={type:3,text:e,isComment:!0};0,i.children.push(r)}}}),r}function vo(e,t){var n,r;!function(e){var t=$r(e,"key");if(t){e.key=t}}(e),e.plain=!e.key&&!e.scopedSlots&&!e.attrsList.length,(r=$r(n=e,"ref"))&&(n.ref=r,n.refInFor=function(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}(n)),function(e){var t;"template"===e.tag?(t=Br(e,"scope"),e.slotScope=t||Br(e,"slot-scope")):(t=Br(e,"slot-scope"))&&(e.slotScope=t);var n=$r(e,"slot");n&&(e.slotTarget='""'===n?'"default"':n,e.slotTargetDynamic=!(!e.attrsMap[":slot"]&&!e.attrsMap["v-bind:slot"]),"template"===e.tag||e.slotScope||jr(e,"slot",n,qr(e,"slot")));if("template"===e.tag){var r=Kr(e,lo);if(r){0;var i=bo(r),s=i.name,o=i.dynamic;e.slotTarget=s,e.slotTargetDynamic=o,e.slotScope=r.value||mo}}else{var a=Kr(e,lo);if(a){0;var c=e.scopedSlots||(e.scopedSlots={}),u=bo(a),l=u.name,h=u.dynamic,d=c[l]=go("template",[],e);d.slotTarget=l,d.slotTargetDynamic=h,d.children=e.children.filter(function(e){if(!e.slotScope)return e.parent=d,!0}),d.slotScope=a.value||mo,e.children=[],e.plain=!1}}}(e),function(e){"slot"===e.tag&&(e.slotName=$r(e,"name"))}(e),function(e){var t;(t=$r(e,"is"))&&(e.component=t);null!=Br(e,"inline-template")&&(e.inlineTemplate=!0)}(e);for(var i=0;i<Qs.length;i++)e=Qs[i](e,t)||e;return function(e){var t,n,r,i,s,o,a,c,u=e.attrsList;for(t=0,n=u.length;t<n;t++){if(r=i=u[t].name,s=u[t].value,no.test(r))if(e.hasBindings=!0,(o=Io(r.replace(no,"")))&&(r=r.replace(uo,"")),co.test(r))r=r.replace(co,""),s=xr(s),(c=oo.test(r))&&(r=r.slice(1,-1)),o&&(o.prop&&!c&&"innerHtml"===(r=T(r))&&(r="innerHTML"),o.camel&&!c&&(r=T(r)),o.sync&&(a=Hr(s,"$event"),c?Vr(e,'"update:"+('+r+")",a,null,!1,0,u[t],!0):(Vr(e,"update:"+T(r),a,null,!1,0,u[t]),S(r)!==T(r)&&Vr(e,"update:"+S(r),a,null,!1,0,u[t])))),o&&o.prop||!e.component&&Zs(e.tag,e.attrsMap.type,r)?Lr(e,r,s,u[t],c):jr(e,r,s,u[t],c);else if(to.test(r))r=r.replace(to,""),(c=oo.test(r))&&(r=r.slice(1,-1)),Vr(e,r,s,o,!1,0,u[t],c);else{var l=(r=r.replace(no,"")).match(ao),h=l&&l[1];c=!1,h&&(r=r.slice(0,-(h.length+1)),oo.test(h)&&(h=h.slice(1,-1),c=!0)),Fr(e,r,i,s,h,c,o,u[t])}else jr(e,r,JSON.stringify(s),u[t]),!e.component&&"muted"===r&&Zs(e.tag,e.attrsMap.type,r)&&Lr(e,r,"true",u[t])}}(e),e}function _o(e){var t;if(t=Br(e,"v-for")){var n=function(e){var t=e.match(ro);if(!t)return;var n={};n.for=t[2].trim();var r=t[1].trim().replace(so,""),i=r.match(io);i?(n.alias=r.replace(io,"").trim(),n.iterator1=i[1].trim(),i[2]&&(n.iterator2=i[2].trim())):n.alias=r;return n}(t);n&&A(e,n)}}function wo(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function bo(e){var t=e.name.replace(lo,"");return t||"#"!==e.name[0]&&(t="default"),oo.test(t)?{name:t.slice(1,-1),dynamic:!0}:{name:'"'+t+'"',dynamic:!1}}function Io(e){var t=e.match(uo);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}var To=/^xmlns:NS\d+/,Eo=/^NS\d+:/;function Co(e){return go(e.tag,e.attrsList.slice(),e.parent)}var So=[Is,Es,{preTransformNode:function(e,t){if("input"===e.tag){var n,r=e.attrsMap;if(!r["v-model"])return;if((r[":type"]||r["v-bind:type"])&&(n=$r(e,"type")),r.type||n||!r["v-bind"]||(n="("+r["v-bind"]+").type"),n){var i=Br(e,"v-if",!0),s=i?"&&("+i+")":"",o=null!=Br(e,"v-else",!0),a=Br(e,"v-else-if",!0),c=Co(e);_o(c),Mr(c,"type","checkbox"),vo(c,t),c.processed=!0,c.if="("+n+")==='checkbox'"+s,wo(c,{exp:c.if,block:c});var u=Co(e);Br(u,"v-for",!0),Mr(u,"type","radio"),vo(u,t),wo(c,{exp:"("+n+")==='radio'"+s,block:u});var l=Co(e);return Br(l,"v-for",!0),Mr(l,":type",n),vo(l,t),wo(c,{exp:i,block:l}),o?c.else=!0:a&&(c.elseif=a),c}}}}];var ko,Oo,Ao={expectHTML:!0,modules:So,directives:{model:function(e,t,n){n;var r=t.value,i=t.modifiers,s=e.tag,o=e.attrsMap.type;if(e.component)return Wr(e,r,i),!1;if("select"===s)!function(e,t,n){var r='var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(n&&n.number?"_n(val)":"val")+"});";r=r+" "+Hr(t,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),Vr(e,"change",r,null,!0)}(e,r,i);else if("input"===s&&"checkbox"===o)!function(e,t,n){var r=n&&n.number,i=$r(e,"value")||"null",s=$r(e,"true-value")||"true",o=$r(e,"false-value")||"false";Lr(e,"checked","Array.isArray("+t+")?_i("+t+","+i+")>-1"+("true"===s?":("+t+")":":_q("+t+","+s+")")),Vr(e,"change","var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+s+"):("+o+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+Hr(t,"$$a.concat([$$v])")+")}else{$$i>-1&&("+Hr(t,"$$a.slice(0,$$i).concat($$a.slice($$i+1))")+")}}else{"+Hr(t,"$$c")+"}",null,!0)}(e,r,i);else if("input"===s&&"radio"===o)!function(e,t,n){var r=n&&n.number,i=$r(e,"value")||"null";Lr(e,"checked","_q("+t+","+(i=r?"_n("+i+")":i)+")"),Vr(e,"change",Hr(t,i),null,!0)}(e,r,i);else if("input"===s||"textarea"===s)!function(e,t,n){var r=e.attrsMap.type,i=n||{},s=i.lazy,o=i.number,a=i.trim,c=!s&&"range"!==r,u=s?"change":"range"===r?ei:"input",l="$event.target.value";a&&(l="$event.target.value.trim()"),o&&(l="_n("+l+")");var h=Hr(t,l);c&&(h="if($event.target.composing)return;"+h),Lr(e,"value","("+t+")"),Vr(e,u,h,null,!0),(a||o)&&Vr(e,"blur","$forceUpdate()")}(e,r,i);else if(!V.isReservedTag(s))return Wr(e,r,i),!1;return!0},text:function(e,t){t.value&&Lr(e,"textContent","_s("+t.value+")",t)},html:function(e,t){t.value&&Lr(e,"innerHTML","_s("+t.value+")",t)}},isPreTag:function(e){return"pre"===e},isUnaryTag:Ss,mustUseProp:Mn,canBeLeftOpenTag:ks,isReservedTag:Zn,getTagNamespace:er,staticKeys:function(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")}(So)},No=b(function(e){return m("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap"+(e?","+e:""))});function xo(e,t){e&&(ko=No(t.staticKeys||""),Oo=t.isReservedTag||R,function e(t){t.static=function(e){if(2===e.type)return!1;if(3===e.type)return!0;return!(!e.pre&&(e.hasBindings||e.if||e.for||g(e.tag)||!Oo(e.tag)||function(e){for(;e.parent;){if("template"!==(e=e.parent).tag)return!1;if(e.for)return!0}return!1}(e)||!Object.keys(e).every(ko)))}(t);if(1===t.type){if(!Oo(t.tag)&&"slot"!==t.tag&&null==t.attrsMap["inline-template"])return;for(var n=0,r=t.children.length;n<r;n++){var i=t.children[n];e(i),i.static||(t.static=!1)}if(t.ifConditions)for(var s=1,o=t.ifConditions.length;s<o;s++){var a=t.ifConditions[s].block;e(a),a.static||(t.static=!1)}}}(e),function e(t,n){if(1===t.type){if((t.static||t.once)&&(t.staticInFor=n),t.static&&t.children.length&&(1!==t.children.length||3!==t.children[0].type))return void(t.staticRoot=!0);if(t.staticRoot=!1,t.children)for(var r=0,i=t.children.length;r<i;r++)e(t.children[r],n||!!t.for);if(t.ifConditions)for(var s=1,o=t.ifConditions.length;s<o;s++)e(t.ifConditions[s].block,n)}}(e,!1))}var Ro=/^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,Po=/\([^)]*?\);*$/,Do=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,Lo={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},jo={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]},Mo=function(e){return"if("+e+")return null;"},Fo={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:Mo("$event.target !== $event.currentTarget"),ctrl:Mo("!$event.ctrlKey"),shift:Mo("!$event.shiftKey"),alt:Mo("!$event.altKey"),meta:Mo("!$event.metaKey"),left:Mo("'button' in $event && $event.button !== 0"),middle:Mo("'button' in $event && $event.button !== 1"),right:Mo("'button' in $event && $event.button !== 2")};function Uo(e,t){var n=t?"nativeOn:":"on:",r="",i="";for(var s in e){var o=Vo(e[s]);e[s]&&e[s].dynamic?i+=s+","+o+",":r+='"'+s+'":'+o+","}return r="{"+r.slice(0,-1)+"}",i?n+"_d("+r+",["+i.slice(0,-1)+"])":n+r}function Vo(e){if(!e)return"function(){}";if(Array.isArray(e))return"["+e.map(function(e){return Vo(e)}).join(",")+"]";var t=Do.test(e.value),n=Ro.test(e.value),r=Do.test(e.value.replace(Po,""));if(e.modifiers){var i="",s="",o=[];for(var a in e.modifiers)if(Fo[a])s+=Fo[a],Lo[a]&&o.push(a);else if("exact"===a){var c=e.modifiers;s+=Mo(["ctrl","shift","alt","meta"].filter(function(e){return!c[e]}).map(function(e){return"$event."+e+"Key"}).join("||"))}else o.push(a);return o.length&&(i+=function(e){return"if(!$event.type.indexOf('key')&&"+e.map(qo).join("&&")+")return null;"}(o)),s&&(i+=s),"function($event){"+i+(t?"return "+e.value+".apply(null, arguments)":n?"return ("+e.value+").apply(null, arguments)":r?"return "+e.value:e.value)+"}"}return t||n?e.value:"function($event){"+(r?"return "+e.value:e.value)+"}"}function qo(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=Lo[e],r=jo[e];return"_k($event.keyCode,"+JSON.stringify(e)+","+JSON.stringify(n)+",$event.key,"+JSON.stringify(r)+")"}var $o={on:function(e,t){e.wrapListeners=function(e){return"_g("+e+","+t.value+")"}},bind:function(e,t){e.wrapData=function(n){return"_b("+n+",'"+e.tag+"',"+t.value+","+(t.modifiers&&t.modifiers.prop?"true":"false")+(t.modifiers&&t.modifiers.sync?",true":"")+")"}},cloak:x},Bo=function(e){this.options=e,this.warn=e.warn||Pr,this.transforms=Dr(e.modules,"transformCode"),this.dataGenFns=Dr(e.modules,"genData"),this.directives=A(A({},$o),e.directives);var t=e.isReservedTag||R;this.maybeComponent=function(e){return!!e.component||!t(e.tag)},this.onceId=0,this.staticRenderFns=[],this.pre=!1};function Ko(e,t){var n=new Bo(t);return{render:"with(this){return "+(e?"script"===e.tag?"null":zo(e,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function zo(e,t){if(e.parent&&(e.pre=e.pre||e.parent.pre),e.staticRoot&&!e.staticProcessed)return Wo(e,t);if(e.once&&!e.onceProcessed)return Ho(e,t);if(e.for&&!e.forProcessed)return Qo(e,t);if(e.if&&!e.ifProcessed)return Go(e,t);if("template"!==e.tag||e.slotTarget||t.pre){if("slot"===e.tag)return function(e,t){var n=e.slotName||'"default"',r=Zo(e,t),i="_t("+n+(r?",function(){return "+r+"}":""),s=e.attrs||e.dynamicAttrs?na((e.attrs||[]).concat(e.dynamicAttrs||[]).map(function(e){return{name:T(e.name),value:e.value,dynamic:e.dynamic}})):null,o=e.attrsMap["v-bind"];!s&&!o||r||(i+=",null");s&&(i+=","+s);o&&(i+=(s?"":",null")+","+o);return i+")"}(e,t);var n;if(e.component)n=function(e,t,n){var r=t.inlineTemplate?null:Zo(t,n,!0);return"_c("+e+","+Yo(t,n)+(r?","+r:"")+")"}(e.component,e,t);else{var r;(!e.plain||e.pre&&t.maybeComponent(e))&&(r=Yo(e,t));var i=e.inlineTemplate?null:Zo(e,t,!0);n="_c('"+e.tag+"'"+(r?","+r:"")+(i?","+i:"")+")"}for(var s=0;s<t.transforms.length;s++)n=t.transforms[s](e,n);return n}return Zo(e,t)||"void 0"}function Wo(e,t){e.staticProcessed=!0;var n=t.pre;return e.pre&&(t.pre=e.pre),t.staticRenderFns.push("with(this){return "+zo(e,t)+"}"),t.pre=n,"_m("+(t.staticRenderFns.length-1)+(e.staticInFor?",true":"")+")"}function Ho(e,t){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return Go(e,t);if(e.staticInFor){for(var n="",r=e.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+zo(e,t)+","+t.onceId+++","+n+")":zo(e,t)}return Wo(e,t)}function Go(e,t,n,r){return e.ifProcessed=!0,function e(t,n,r,i){if(!t.length)return i||"_e()";var s=t.shift();return s.exp?"("+s.exp+")?"+o(s.block)+":"+e(t,n,r,i):""+o(s.block);function o(e){return r?r(e,n):e.once?Ho(e,n):zo(e,n)}}(e.ifConditions.slice(),t,n,r)}function Qo(e,t,n,r){var i=e.for,s=e.alias,o=e.iterator1?","+e.iterator1:"",a=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,(r||"_l")+"(("+i+"),function("+s+o+a+"){return "+(n||zo)(e,t)+"})"}function Yo(e,t){var n="{",r=function(e,t){var n=e.directives;if(!n)return;var r,i,s,o,a="directives:[",c=!1;for(r=0,i=n.length;r<i;r++){s=n[r],o=!0;var u=t.directives[s.name];u&&(o=!!u(e,s,t.warn)),o&&(c=!0,a+='{name:"'+s.name+'",rawName:"'+s.rawName+'"'+(s.value?",value:("+s.value+"),expression:"+JSON.stringify(s.value):"")+(s.arg?",arg:"+(s.isDynamicArg?s.arg:'"'+s.arg+'"'):"")+(s.modifiers?",modifiers:"+JSON.stringify(s.modifiers):"")+"},")}if(c)return a.slice(0,-1)+"]"}(e,t);r&&(n+=r+","),e.key&&(n+="key:"+e.key+","),e.ref&&(n+="ref:"+e.ref+","),e.refInFor&&(n+="refInFor:true,"),e.pre&&(n+="pre:true,"),e.component&&(n+='tag:"'+e.tag+'",');for(var i=0;i<t.dataGenFns.length;i++)n+=t.dataGenFns[i](e);if(e.attrs&&(n+="attrs:"+na(e.attrs)+","),e.props&&(n+="domProps:"+na(e.props)+","),e.events&&(n+=Uo(e.events,!1)+","),e.nativeEvents&&(n+=Uo(e.nativeEvents,!0)+","),e.slotTarget&&!e.slotScope&&(n+="slot:"+e.slotTarget+","),e.scopedSlots&&(n+=function(e,t,n){var r=e.for||Object.keys(t).some(function(e){var n=t[e];return n.slotTargetDynamic||n.if||n.for||Jo(n)}),i=!!e.if;if(!r)for(var s=e.parent;s;){if(s.slotScope&&s.slotScope!==mo||s.for){r=!0;break}s.if&&(i=!0),s=s.parent}var o=Object.keys(t).map(function(e){return Xo(t[e],n)}).join(",");return"scopedSlots:_u(["+o+"]"+(r?",null,true":"")+(!r&&i?",null,false,"+function(e){var t=5381,n=e.length;for(;n;)t=33*t^e.charCodeAt(--n);return t>>>0}(o):"")+")"}(e,e.scopedSlots,t)+","),e.model&&(n+="model:{value:"+e.model.value+",callback:"+e.model.callback+",expression:"+e.model.expression+"},"),e.inlineTemplate){var s=function(e,t){var n=e.children[0];0;if(n&&1===n.type){var r=Ko(n,t.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}(e,t);s&&(n+=s+",")}return n=n.replace(/,$/,"")+"}",e.dynamicAttrs&&(n="_b("+n+',"'+e.tag+'",'+na(e.dynamicAttrs)+")"),e.wrapData&&(n=e.wrapData(n)),e.wrapListeners&&(n=e.wrapListeners(n)),n}function Jo(e){return 1===e.type&&("slot"===e.tag||e.children.some(Jo))}function Xo(e,t){var n=e.attrsMap["slot-scope"];if(e.if&&!e.ifProcessed&&!n)return Go(e,t,Xo,"null");if(e.for&&!e.forProcessed)return Qo(e,t,Xo);var r=e.slotScope===mo?"":String(e.slotScope),i="function("+r+"){return "+("template"===e.tag?e.if&&n?"("+e.if+")?"+(Zo(e,t)||"undefined")+":undefined":Zo(e,t)||"undefined":zo(e,t))+"}",s=r?"":",proxy:true";return"{key:"+(e.slotTarget||'"default"')+",fn:"+i+s+"}"}function Zo(e,t,n,r,i){var s=e.children;if(s.length){var o=s[0];if(1===s.length&&o.for&&"template"!==o.tag&&"slot"!==o.tag){var a=n?t.maybeComponent(o)?",1":",0":"";return""+(r||zo)(o,t)+a}var c=n?function(e,t){for(var n=0,r=0;r<e.length;r++){var i=e[r];if(1===i.type){if(ea(i)||i.ifConditions&&i.ifConditions.some(function(e){return ea(e.block)})){n=2;break}(t(i)||i.ifConditions&&i.ifConditions.some(function(e){return t(e.block)}))&&(n=1)}}return n}(s,t.maybeComponent):0,u=i||ta;return"["+s.map(function(e){return u(e,t)}).join(",")+"]"+(c?","+c:"")}}function ea(e){return void 0!==e.for||"template"===e.tag||"slot"===e.tag}function ta(e,t){return 1===e.type?zo(e,t):3===e.type&&e.isComment?(r=e,"_e("+JSON.stringify(r.text)+")"):"_v("+(2===(n=e).type?n.expression:ra(JSON.stringify(n.text)))+")";var n,r}function na(e){for(var t="",n="",r=0;r<e.length;r++){var i=e[r],s=ra(i.value);i.dynamic?n+=i.name+","+s+",":t+='"'+i.name+'":'+s+","}return t="{"+t.slice(0,-1)+"}",n?"_d("+t+",["+n.slice(0,-1)+"])":t}function ra(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)");function ia(e,t){try{return new Function(e)}catch(n){return t.push({err:n,code:e}),x}}function sa(e){var t=Object.create(null);return function(n,r,i){(r=A({},r)).warn;delete r.warn;var s=r.delimiters?String(r.delimiters)+n:n;if(t[s])return t[s];var o=e(n,r);var a={},c=[];return a.render=ia(o.render,c),a.staticRenderFns=o.staticRenderFns.map(function(e){return ia(e,c)}),t[s]=a}}var oa,aa,ca=(oa=function(e,t){var n=yo(e.trim(),t);!1!==t.optimize&&xo(n,t);var r=Ko(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}},function(e){function t(t,n){var r=Object.create(e),i=[],s=[],o=function(e,t,n){(n?s:i).push(e)};if(n)for(var a in n.modules&&(r.modules=(e.modules||[]).concat(n.modules)),n.directives&&(r.directives=A(Object.create(e.directives||null),n.directives)),n)"modules"!==a&&"directives"!==a&&(r[a]=n[a]);r.warn=o;var c=oa(t.trim(),r);return c.errors=i,c.tips=s,c}return{compile:t,compileToFunctions:sa(t)}})(Ao),ua=(ca.compile,ca.compileToFunctions);function la(e){return(aa=aa||document.createElement("div")).innerHTML=e?'<a href="\n"/>':'<div a="\n"/>',aa.innerHTML.indexOf("&#10;")>0}var ha=!!H&&la(!1),da=!!H&&la(!0),fa=b(function(e){var t=rr(e);return t&&t.innerHTML}),pa=kn.prototype.$mount;kn.prototype.$mount=function(e,t){if((e=e&&rr(e))===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=fa(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=function(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}(e));if(r){0;var i=ua(r,{outputSourceRange:!1,shouldDecodeNewlines:ha,shouldDecodeNewlinesForHref:da,delimiters:n.delimiters,comments:n.comments},this),s=i.render,o=i.staticRenderFns;n.render=s,n.staticRenderFns=o}}return pa.call(this,e,t)},kn.compile=ua,t.a=kn}).call(t,n("DuR2"))},"7EjX":function(e,t,n){"use strict";var r=n("28tl"),i=n("a7sP");function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var o=n("gZMR"),a=n("xq9A");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c={PHONE:"phone"},u={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},l={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},h={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},d={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};function f(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const p=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}},m=f,g=new r.b("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),y={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized"},v=new o.b("@firebase/auth");function _(e,...t){v.logLevel<=o.a.ERROR&&v.error(`Auth (${i.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e,...t){throw E(e,...t)}function b(e,...t){return E(e,...t)}function I(e,t,n){const i=Object.assign(Object.assign({},m()),{[t]:n});return new r.b("auth","Firebase",i).create(t,{appName:e.name})}function T(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&w(e,"argument-error"),I(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.`+"Did you pass a reference from a different Auth SDK?")}function E(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return g.create(e,...t)}function C(e,t,...n){if(!e)throw E(t,...n)}function S(e){const t="INTERNAL ASSERTION FAILED: "+e;throw _(t),new Error(t)}function k(e,t){e||S(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=new Map;function A(e){k(e instanceof Function,"Expected a class definition");let t=O.get(e);return t?(k(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,O.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){const n=Object(i._getProvider)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if(Object(r.n)(i,null!==t&&void 0!==t?t:{}))return e;w(e,"already-initialized")}return n.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function x(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function R(){return"http:"===P()||"https:"===P()}function P(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class D{constructor(e,t){this.shortDelay=e,this.longDelay=t,k(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r.A)()||Object(r.D)()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(R()||Object(r.v)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){k(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void S("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void S("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void S("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},F=new D(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function V(e,t,n,i,s={}){return q(e,s,async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=Object(r.J)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),j.fetch()(B(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function q(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},M),t);try{const t=new K(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw z(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const t=s.ok?o.errorMessage:o.error.message,[n,r]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw z(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw z(e,"email-already-in-use",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(r)throw I(e,a,r);w(e,a)}}catch(t){if(t instanceof r.c)throw t;w(e,"network-request-failed")}}async function $(e,t,n,r,i={}){const s=await V(e,t,n,r,i);return"mfaPendingCredential"in s&&w(e,"multi-factor-auth-required",{_serverResponse:s}),s}function B(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?L(e.config,i):`${e.config.apiScheme}://${i}`}class K{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(b(this.auth,"network-request-failed")),F.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function z(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=b(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e,t=!1){return Object(r.r)(e).getIdToken(t)}async function G(e,t=!1){const n=Object(r.r)(e),i=await n.getIdToken(t),s=Y(i);C(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"==typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:W(Q(s.auth_time)),issuedAtTime:W(Q(s.iat)),expirationTime:W(Q(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o.sign_in_second_factor)||null}}function Q(e){return 1e3*Number(e)}function Y(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return _("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r.h)(n);return e?JSON.parse(e):(_("Failed to decode base64 JWT payload"),null)}catch(e){return _("Caught error parsing JWT payload as JSON",e),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function J(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof r.c&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class X{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=W(this.lastLoginAt),this.creationTime=W(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e){var t;const n=e.auth,r=await e.getIdToken(),i=await J(e,async function(e,t){return V(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));C(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map(e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}):[];const c=(u=e.providerData,l=a,[...u.filter(e=>!l.some(t=>t.providerId===e.providerId)),...l]);var u,l;const h=e.isAnonymous,d=!(e.email&&o.passwordHash||(null===c||void 0===c?void 0:c.length)),f=!!h&&d,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Z(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(e,p)}async function te(e){const t=Object(r.r)(e);await ee(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ne{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){C(e.idToken,"internal-error"),C(void 0!==e.idToken,"internal-error"),C(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Y(e);return C(t,"internal-error"),C(void 0!==t.exp,"internal-error"),C(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return C(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await q(e,{},async()=>{const n=Object(r.J)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=B(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",j.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ne;return n&&(C("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(C("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(C("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ne,this.toJSON())}_performRefresh(){return S("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e,t){C("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ie{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Z(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await J(this,this.stsTokenManager.getToken(this.auth,e));return C(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return G(this,e)}reload(){return te(this)}_assign(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ie(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ee(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await J(this,async function(e,t){return V(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:_,isAnonymous:w,providerData:b,stsTokenManager:I}=t;C(v&&I,e,"internal-error");const T=ne.fromJSON(this.name,I);C("string"==typeof v,e,"internal-error"),re(l,e.name),re(h,e.name),C("boolean"==typeof _,e,"internal-error"),C("boolean"==typeof w,e,"internal-error"),re(d,e.name),re(f,e.name),re(p,e.name),re(m,e.name),re(g,e.name),re(y,e.name);const E=new ie({uid:v,auth:e,email:h,emailVerified:_,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return b&&Array.isArray(b)&&(E.providerData=b.map(e=>Object.assign({},e))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new ne;r.updateFromServerResponse(t);const i=new ie({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ee(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const oe=se;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t,n){return`firebase:${e}:${t}:${n}`}class ce{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ae(this.userKey,r.apiKey,i),this.fullPersistenceKey=ae("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ie._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ce(A(oe),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||A(oe);const s=ae(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=ie._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(e){}})),new ce(i,e,n)):new ce(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(fe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(le(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(ge(t))return"Webos";if(he(t))return"Safari";if((t.includes("chrome/")||de(t))&&!t.includes("edge/"))return"Chrome";if(pe(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function le(e=Object(r.s)()){return/firefox\//i.test(e)}function he(e=Object(r.s)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function de(e=Object(r.s)()){return/crios\//i.test(e)}function fe(e=Object(r.s)()){return/iemobile/i.test(e)}function pe(e=Object(r.s)()){return/android/i.test(e)}function me(e=Object(r.s)()){return/blackberry/i.test(e)}function ge(e=Object(r.s)()){return/webos/i.test(e)}function ye(e=Object(r.s)()){return/iphone|ipad|ipod/i.test(e)}function ve(e=Object(r.s)()){return ye(e)||pe(e)||ge(e)||me(e)||/windows phone/i.test(e)||fe(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _e(e,t=[]){let n;switch(e){case"Browser":n=ue(Object(r.s)());break;case"Worker":n=`${ue(Object(r.s)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.SDK_VERSION}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ie(this),this.idTokenSubscription=new Ie(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=g,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=A(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ce.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||null===s||void 0===s||!s.user||(n=s.user)}return n?n._redirectEventId?(C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ee(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r.r)(e):null;return t&&C(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&C(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(A(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.b("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&A(e)||this._popupRedirectResolver;C(t,this,"argument-error"),this.redirectPersistenceManager=await ce.create(this,[A(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return C(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_e(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function be(e){return Object(r.r)(e)}class Ie{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r.l)(e=>this.observer=e)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Te(e,t,n){const r=be(e);C(r._canInitEmulator,r,"emulator-config-failed"),C(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Ee(t),{host:o,port:a}=function(e){const t=Ee(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Ce(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ce(t)}}}(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Ee(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ce(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Se{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return S("not implemented")}_getIdTokenResponse(e){return S("not implemented")}_linkToIdToken(e,t){return S("not implemented")}_getReauthenticationResolver(e){return S("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ke(e,t){return V(e,"POST","/v1/accounts:resetPassword",U(e,t))}async function Oe(e,t){return V(e,"POST","/v1/accounts:update",t)}async function Ae(e,t){return V(e,"POST","/v1/accounts:sendOobCode",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ne extends Se{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ne(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ne(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return $(e,"POST","/v1/accounts:signInWithPassword",U(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return $(e,"POST","/v1/accounts:signInWithEmailLink",U(e,t))}(e,{email:this._email,oobCode:this._password});default:w(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Oe(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return $(e,"POST","/v1/accounts:signInWithEmailLink",U(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:w(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(e,t){return $(e,"POST","/v1/accounts:signInWithIdp",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="http://localhost";class Pe extends Se{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Pe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):w("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Pe(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){return xe(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,xe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xe(e,t)}buildRequest(){const e={requestUri:Re,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Object(r.J)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Le extends Se{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Le({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Le({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return $(e,"POST","/v1/accounts:signInWithPhoneNumber",U(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await $(e,"POST","/v1/accounts:signInWithPhoneNumber",U(e,t));if(n.temporaryProof)throw z(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return $(e,"POST","/v1/accounts:signInWithPhoneNumber",U(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),De)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Le({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){var t,n,i,s,o,a;const c=Object(r.K)(Object(r.q)(e)),u=null!==(t=c.apiKey)&&void 0!==t?t:null,l=null!==(n=c.oobCode)&&void 0!==n?n:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=c.mode)&&void 0!==i?i:null);C(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=c.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=c.tenantId)&&void 0!==a?a:null}static parseLink(e){const t=function(e){const t=Object(r.K)(Object(r.q)(e)).link,n=t?Object(r.K)(Object(r.q)(t)).deep_link_id:null,i=Object(r.K)(Object(r.q)(e)).deep_link_id;return(i?Object(r.K)(Object(r.q)(i)).link:null)||i||n||t||e}(e);try{return new je(t)}catch(e){return null}}}function Me(e){return je.parseLink(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(){this.providerId=Fe.PROVIDER_ID}static credential(e,t){return Ne._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=je.parseLink(t);return C(n,"argument-error"),Ne._fromEmailAndCode(e,n.code,n.tenantId)}}Fe.PROVIDER_ID="password",Fe.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Fe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ue{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends Ue{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class qe extends Ve{static credentialFromJSON(e){const t="string"==typeof e?JSON.parse(e):e;return C("providerId"in t&&"signInMethod"in t,"argument-error"),Pe._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return C(e.idToken||e.accessToken,"argument-error"),Pe._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return qe.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return qe.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!(n||r||t||i))return null;if(!o)return null;try{return new qe(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends Ve{constructor(){super("facebook.com")}static credential(e){return Pe._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!(e&&"oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return $e.credential(e.oauthAccessToken)}catch(e){return null}}}$e.FACEBOOK_SIGN_IN_METHOD="facebook.com",$e.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Be extends Ve{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Pe._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Be.credential(t,n)}catch(e){return null}}}Be.GOOGLE_SIGN_IN_METHOD="google.com",Be.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke extends Ve{constructor(){super("github.com")}static credential(e){return Pe._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!(e&&"oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ke.credential(e.oauthAccessToken)}catch(e){return null}}}Ke.GITHUB_SIGN_IN_METHOD="github.com",Ke.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ze="http://localhost";class We extends Se{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){return xe(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,xe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xe(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new We(n,i):null}static _create(e,t){return new We(e,t)}buildRequest(){return{requestUri:ze,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="saml.";class Ge extends Ue{constructor(e){C(e.startsWith(He),"argument-error"),super(e)}static credentialFromResult(e){return Ge.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ge.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=We.fromJSON(e);return C(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return We._create(n,t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends Ve{constructor(){super("twitter.com")}static credential(e,t){return Pe._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Qe.credential(t,n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ye(e,t){return $(e,"POST","/v1/accounts:signUp",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe.TWITTER_SIGN_IN_METHOD="twitter.com",Qe.PROVIDER_ID="twitter.com";class Je{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ie._fromIdTokenResponse(e,n,r),s=Xe(n);return new Je({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Xe(n);return new Je({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Xe(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ze(e){var t;const n=be(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Je({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Ye(n,{returnSecureToken:!0}),i=await Je._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends r.c{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,et.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new et(e,t,n,r)}}function tt(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw et._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(e,t){const n=Object(r.r)(e);await st(!0,n,t);const{providerUserInfo:i}=await async function(e,t){return V(e,"POST","/v1/accounts:update",t)}(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=nt(i||[]);return n.providerData=n.providerData.filter(e=>s.has(e.providerId)),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function it(e,t,n=!1){const r=await J(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Je._forOperation(e,"link",r)}async function st(e,t,n){await ee(t);const r=nt(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";C(r.has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(e,t,n=!1){const{auth:r}=e;try{const i=await J(e,tt(r,"reauthenticate",t,e),n);C(i.idToken,r,"internal-error");const s=Y(i.idToken);C(s,r,"internal-error");const{sub:o}=s;return C(e.uid===o,r,"user-mismatch"),Je._forOperation(e,"reauthenticate",i)}catch(e){throw"auth/user-not-found"===(null===e||void 0===e?void 0:e.code)&&w(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(e,t,n=!1){const r=await tt(e,"signIn",t),i=await Je._fromIdTokenResponse(e,"signIn",r);return n||await e._updateCurrentUser(i.user),i}async function ct(e,t){return at(be(e),t)}async function ut(e,t){const n=Object(r.r)(e);return await st(!1,n,t.providerId),it(n,t)}async function lt(e,t){return ot(Object(r.r)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ht(e,t){const n=be(e),r=await async function(e,t){return $(e,"POST","/v1/accounts:signInWithCustomToken",U(e,t))}(n,{token:t,returnSecureToken:!0}),i=await Je._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?ft._fromServerResponse(e,t):w(e,"internal-error")}}class ft extends dt{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new ft(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(e,t,n){var r;C((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),C(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(C(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(C(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mt(e,t,n){const i=Object(r.r)(e),s={requestType:"PASSWORD_RESET",email:t};n&&pt(i,s,n),await async function(e,t){return Ae(e,t)}(i,s)}async function gt(e,t,n){await ke(Object(r.r)(e),{oobCode:t,newPassword:n})}async function yt(e,t){await async function(e,t){return V(e,"POST","/v1/accounts:update",U(e,t))}(Object(r.r)(e),{oobCode:t})}async function vt(e,t){const n=Object(r.r)(e),i=await ke(n,{oobCode:t}),s=i.requestType;switch(C(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":C(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":C(i.mfaInfo,n,"internal-error");default:C(i.email,n,"internal-error")}let o=null;return i.mfaInfo&&(o=dt._fromServerResponse(be(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:o},operation:s}}async function _t(e,t){const{data:n}=await vt(Object(r.r)(e),t);return n.email}async function wt(e,t,n){const r=be(e),i=await Ye(r,{returnSecureToken:!0,email:t,password:n}),s=await Je._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function bt(e,t,n){return ct(Object(r.r)(e),Fe.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function It(e,t,n){const i=Object(r.r)(e),s={requestType:"EMAIL_SIGNIN",email:t};C(n.handleCodeInApp,i,"argument-error"),n&&pt(i,s,n),await async function(e,t){return Ae(e,t)}(i,s)}function Tt(e,t){const n=je.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Et(e,t,n){const i=Object(r.r)(e),s=Fe.credentialWithLink(t,n||x());return C(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),ct(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ct(e,t){const n={identifier:t,continueUri:R()?x():"http://localhost"},{signinMethods:i}=await async function(e,t){return V(e,"POST","/v1/accounts:createAuthUri",U(e,t))}(Object(r.r)(e),n);return i||[]}async function St(e,t){const n=Object(r.r)(e),i={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&pt(n.auth,i,t);const{email:s}=await async function(e,t){return Ae(e,t)}(n.auth,i);s!==e.email&&await e.reload()}async function kt(e,t,n){const i=Object(r.r)(e),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};n&&pt(i.auth,s,n);const{email:o}=await async function(e,t){return Ae(e,t)}(i.auth,s);o!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ot(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=Object(r.r)(e),s={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await J(i,async function(e,t){return V(e,"POST","/v1/accounts:update",t)}(i.auth,s));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:e})=>"password"===e);a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function At(e,t){return xt(Object(r.r)(e),t,null)}function Nt(e,t){return xt(Object(r.r)(e),null,t)}async function xt(e,t,n){const{auth:r}=e,i={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(i.email=t),n&&(i.password=n);const s=await J(e,Oe(r,i));await e._updateTokensIfNecessary(s,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class Pt extends Rt{constructor(e,t,n,r){super(e,t,n),this.username=r}}class Dt extends Rt{constructor(e,t){super(e,"facebook.com",t)}}class Lt extends Pt{constructor(e,t){super(e,"github.com",t,"string"==typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class jt extends Rt{constructor(e,t){super(e,"google.com",t)}}class Mt extends Pt{constructor(e,t,n){super(e,"twitter.com",t,n)}}function Ft(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:function(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=Y(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n.sign_in_provider;if(r)return new Rt(s,"anonymous"!==r&&"custom"!==r?r:null)}if(!r)return null;switch(r){case"facebook.com":return new Dt(s,i);case"github.com":return new Lt(s,i);case"google.com":return new jt(s,i);case"twitter.com":return new Mt(s,i,e.screenName||null);case"custom":case"anonymous":return new Rt(s,null);default:return new Rt(s,r,i)}}(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(e,t){return Object(r.r)(e).setPersistence(t)}function Vt(e,t,n,i){return Object(r.r)(e).onIdTokenChanged(t,n,i)}function qt(e,t,n,i){return Object(r.r)(e).onAuthStateChanged(t,n,i)}function $t(e){Object(r.r)(e).useDeviceLanguage()}function Bt(e,t){return Object(r.r)(e).updateCurrentUser(t)}function Kt(e){return Object(r.r)(e).signOut()}async function zt(e){return Object(r.r)(e).delete()}class Wt{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new Wt("enroll",e)}static _fromMfaPendingCredential(e){return new Wt("signin",e)}toJSON(){return{multiFactorSession:{["enroll"===this.type?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return Wt._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return Wt._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=be(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map(e=>dt._fromServerResponse(n,e));C(r.mfaPendingCredential,n,"internal-error");const s=Wt._fromMfaPendingCredential(r.mfaPendingCredential);return new Ht(s,i,async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await Je._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return C(t.user,n,"internal-error"),Je._forOperation(t.user,t.operationType,o);default:w(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Gt(e,t){var n;const i=Object(r.r)(e),s=t;return C(t.customData.operationType,i,"argument-error"),C(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),Ht._fromError(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>dt._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new Qt(e)}async getSession(){return Wt._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const n=e,r=await this.getSession(),i=await J(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"==typeof e?e:e.uid,n=await this.user.getIdToken(),r=await J(this.user,(i=this.user.auth,s={idToken:n,mfaEnrollmentId:t},V(i,"POST","/v2/accounts/mfaEnrollment:withdraw",U(i,s))));var i,s;this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==t),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(e){if("auth/user-token-expired"!==e.code)throw e}}}const Yt=new WeakMap;function Jt(e){const t=Object(r.r)(e);return Yt.has(t)||Yt.set(t,Qt._fromUser(t)),Yt.get(t)}const Xt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Xt,"1"),this.storage.removeItem(Xt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=1e3,tn=10;class nn extends Zt{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=((e,t)=>this.onStorageEvent(e,t)),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Object(r.s)();return he(e)||ye(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=ve(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);Object(r.y)()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,tn):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},en)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}nn.type="LOCAL";const rn=nn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Zt{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}sn.type="SESSION";const on=sn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class an{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new an(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async e=>e(t.origin,i)),a=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}}))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cn(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an.receivers=[];class un{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const c=cn("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hn(){return void 0!==ln().WorkerGlobalScope&&"function"==typeof ln().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dn="firebaseLocalStorageDb",fn=1,pn="firebaseLocalStorage",mn="fbase_key";class gn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function yn(e,t){return e.transaction([pn],t?"readwrite":"readonly").objectStore(pn)}function vn(){const e=indexedDB.open(dn,fn);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(pn,{keyPath:mn})}catch(e){n(e)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(pn)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(dn);return new gn(e).toPromise()}(),t(await vn()))})})}async function _n(e,t,n){const r=yn(e,!0).put({[mn]:t,value:n});return new gn(r).toPromise()}function wn(e,t){const n=yn(e,!0).delete(t);return new gn(n).toPromise()}const bn=800,In=3;class Tn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vn(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(e){if(t++>In)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=an._getInstance(hn()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>{return{keyProcessed:(await this._poll()).includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new un(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vn();return await _n(e,Xt,"1"),await wn(e,Xt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>_n(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>(async function(e,t){const n=yn(e,!1).get(t),r=await new gn(n).toPromise();return void 0===r?null:r.value})(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>wn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=yn(e,!1).getAll();return new gn(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Tn.type="LOCAL";const En=Tn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(e){return new Promise((r,i)=>{const s=document.createElement("script");s.setAttribute("src",e),s.onload=r,s.onerror=(e=>{const t=b("internal-error");t.customData=e,i(t)}),s.type="text/javascript",s.charset="UTF-8",(null!==(n=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==n?n:document).appendChild(s)});
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var t,n}function Sn(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=500,On=6e4,An=1e12;class Nn{constructor(e){this.auth=e,this.counter=An,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new xn(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||An;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||An;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||An;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class xn{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=(()=>{this.execute()});const r="string"==typeof e?document.getElementById(e):e;C(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=function(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(e){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()},On)},kn))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}const Rn=Sn("rcb"),Pn=new D(3e4,6e4),Dn="https://www.google.com/recaptcha/api.js?";class Ln{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!ln().grecaptcha}load(e,t=""){return C(function(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(ln().grecaptcha):new Promise((n,i)=>{const s=ln().setTimeout(()=>{i(b(e,"network-request-failed"))},Pn.get());ln()[Rn]=(()=>{ln().clearTimeout(s),delete ln()[Rn];const r=ln().grecaptcha;if(!r)return void i(b(e,"internal-error"));const o=r.render;r.render=((e,t)=>{const n=o(e,t);return this.counter++,n}),this.hostLanguage=t,n(r)}),Cn(`${Dn}?${Object(r.J)({onload:Rn,render:"explicit",hl:t})}`).catch(()=>{clearTimeout(s),i(b(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!ln().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}class jn{async load(e){return new Nn(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn="recaptcha",Fn={theme:"light",type:"image"};class Un{constructor(e,t=Object.assign({},Fn),n){this.parameters=t,this.type=Mn,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=be(n),this.isInvisible="invisible"===this.parameters.size,C("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"==typeof e?document.getElementById(e):e;C(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new jn:new Ln,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){C(!this.parameters.sitekey,this.auth,"argument-error"),C(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),C("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"==typeof e)e(t);else if("string"==typeof e){const n=ln()[e];"function"==typeof n&&n(t)}}}assertNotDestroyed(){C(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){C(R()&&!hn(),this.auth,"internal-error"),await function(){let e=null;return new Promise(t=>{"complete"!==document.readyState?(e=(()=>t()),window.addEventListener("load",e)):t()}).catch(t=>{throw e&&window.removeEventListener("load",e),t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e){return(await V(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}(this.auth);C(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return C(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}class Vn{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Le._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function qn(e,t,n){const i=be(e),s=await Kn(i,t,Object(r.r)(n));return new Vn(s,e=>ct(i,e))}async function $n(e,t,n){const i=Object(r.r)(e);await st(!1,i,"phone");const s=await Kn(i.auth,t,Object(r.r)(n));return new Vn(s,e=>ut(i,e))}async function Bn(e,t,n){const i=Object(r.r)(e),s=await Kn(i.auth,t,Object(r.r)(n));return new Vn(s,e=>lt(i,e))}async function Kn(e,t,n){var r;const i=await n.verify();try{let s;if(C("string"==typeof i,e,"argument-error"),C(n.type===Mn,e,"argument-error"),"session"in(s="string"==typeof t?{phoneNumber:t}:t)){const t=s.session;if("phoneNumber"in s){return C("enroll"===t.type,e,"internal-error"),(await function(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:start",U(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo}{C("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;return C(n,e,"missing-multi-factor-info"),(await function(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:start",U(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return V(e,"POST","/v1/accounts:sendVerificationCode",U(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function zn(e,t){await it(Object(r.r)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.providerId=Wn.PROVIDER_ID,this.auth=be(e)}verifyPhoneNumber(e,t){return Kn(this.auth,e,Object(r.r)(t))}static credential(e,t){return Le._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Wn.credentialFromTaggedObject(t)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Le._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Hn(e,t){return t?A(t):(C(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wn.PROVIDER_ID="phone",Wn.PHONE_SIGN_IN_METHOD="phone";class Gn extends Se{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Qn(e){return at(e.auth,new Gn(e),e.bypassAuthState)}function Yn(e){const{auth:t,user:n}=e;return C(n,t,"internal-error"),ot(n,new Gn(e),e.bypassAuthState)}async function Jn(e){const{auth:t,user:n}=e;return C(n,t,"internal-error"),it(n,new Gn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qn;case"linkViaPopup":case"linkViaRedirect":return Jn;case"reauthViaPopup":case"reauthViaRedirect":return Yn;default:w(this.auth,"internal-error")}}resolve(e){k(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){k(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new D(2e3,1e4);async function er(e,t,n){const r=be(e);T(e,t,Ue);const i=Hn(r,n);return new rr(r,"signInViaPopup",t,i).executeNotNull()}async function tr(e,t,n){const i=Object(r.r)(e);T(i.auth,t,Ue);const s=Hn(i.auth,n);return new rr(i.auth,"reauthViaPopup",t,s,i).executeNotNull()}async function nr(e,t,n){const i=Object(r.r)(e);T(i.auth,t,Ue);const s=Hn(i.auth,n);return new rr(i.auth,"linkViaPopup",t,s,i).executeNotNull()}class rr extends Xn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,rr.currentPopupAction&&rr.currentPopupAction.cancel(),rr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return C(e,this.auth,"internal-error"),e}async onExecution(){k(1===this.filter.length,"Popup operations only handle one event");const e=cn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(b(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(b(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;null!==(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)&&void 0!==n&&n.closed?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(b(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,Zn.get())};e()}}rr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ir="pendingRedirect",sr=new Map;class or extends Xn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=sr.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=ur(t),r=cr(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=(()=>Promise.resolve(t))}catch(t){e=(()=>Promise.reject(t))}sr.set(this.auth._key(),e)}return this.bypassAuthState||sr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function ar(e,t){return cr(e)._set(ur(t),"true")}function cr(e){return A(e._redirectPersistence)}function ur(e){return ae(ir,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(e,t,n){return async function(e,t,n){const r=be(e);T(e,t,Ue);const i=Hn(r,n);return await ar(i,r),i._openRedirect(r,t,"signInViaRedirect")}(e,t,n)}function hr(e,t,n){return async function(e,t,n){const i=Object(r.r)(e);T(i.auth,t,Ue);const s=Hn(i.auth,n);await ar(s,i.auth);const o=await mr(i);return s._openRedirect(i.auth,t,"reauthViaRedirect",o)}(e,t,n)}function dr(e,t,n){return async function(e,t,n){const i=Object(r.r)(e);T(i.auth,t,Ue);const s=Hn(i.auth,n);await st(!1,i,t.providerId),await ar(s,i.auth);const o=await mr(i);return s._openRedirect(i.auth,t,"linkViaRedirect",o)}(e,t,n)}async function fr(e,t){return await be(e)._initializationPromise,pr(e,t,!1)}async function pr(e,t,n=!1){const r=be(e),i=Hn(r,t),s=new or(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function mr(e){const t=cn(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=6e5;class yr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _r(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)?t:(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0),t)}sendToConsumer(e,t){var n;if(e.error&&!_r(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(b(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gr&&this.cachedEventUids.clear(),this.cachedEventUids.has(vr(e))}saveEventToCache(e){this.cachedEventUids.add(vr(e)),this.lastProcessedEventTime=Date.now()}}function vr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function _r({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}async function wr(e,t={}){return V(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ir=/^https?/;function Tr(e){const t=x(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Ir.test(n))return!1;if(br.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new D(3e4,6e4);function Cr(){const e=ln().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Sr=null;function kr(e){return Sr=Sr||function(e){return new Promise((t,n)=>{var r,i,s;function o(){Cr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Cr(),n(b(e,"network-request-failed"))},timeout:Er.get()})}if(null===(i=null===(r=ln().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(null===(s=ln().gapi)||void 0===s||!s.load){const t=Sn("iframefcb");return ln()[t]=(()=>{gapi.load?o():n(b(e,"network-request-failed"))}),Cn(`https://apis.google.com/js/api.js?onload=${t}`).catch(e=>n(e))}o()}}).catch(e=>{throw Sr=null,e})}(e)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new D(5e3,15e3),Ar="__/auth/iframe",Nr="emulator/auth/iframe",xr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Rr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function Pr(e){const t=await kr(e),n=ln().gapi;return C(n,e,"internal-error"),t.open({where:document.body,url:function(e){const t=e.config;C(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?L(t,Nr):`https://${e.config.authDomain}/${Ar}`,s={apiKey:t.apiKey,appName:e.name,v:i.SDK_VERSION},o=Rr.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(r.J)(s).slice(1)}`}(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xr,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=b(e,"network-request-failed"),s=ln().setTimeout(()=>{r(i)},Or.get());function o(){ln().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Lr=500,jr=600,Mr="_blank",Fr="http://localhost";class Ur{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Vr(e,t,n,i=Lr,s=jr){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Dr),{width:i.toString(),height:s.toString(),top:o,left:a}),l=Object(r.s)().toLowerCase();n&&(c=de(l)?Mr:n),le(l)&&(t=t||Fr,u.scrollbars="yes");const h=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=Object(r.s)()){var t;return ye(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==c)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",c),new Ur(null);const d=window.open(t||"",c,h);C(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Ur(d)}const qr="__/auth/handler",$r="emulator/auth/handler";function Br(e,t,n,s,o,a){C(e.config.authDomain,e,"auth-domain-config-required"),C(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i.SDK_VERSION,eventId:o};if(t instanceof Ue){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r.x)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ve){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const e of Object.keys(u))void 0===u[e]&&delete u[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${qr}`;return L(e,$r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Object(r.J)(u).slice(1)}`}const Kr="webStorageSupport";const zr=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=on,this._completeRedirectFn=pr}async _openPopup(e,t,n,r){var i;return k(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()"),Vr(e,Br(e,t,n,x(),r),cn())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Br(e,t,n,x(),r),ln().location.href=i,new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(k(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Pr(e),n=new yr(e);return t.register("authEvent",t=>(C(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event"),{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Kr,{type:Kr},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Kr];void 0!==i&&t(!!i),w(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){if(e.config.emulator)return;const{authorizedDomains:t}=await wr(e);for(const e of t)try{if(Tr(e))return}catch(e){}w(e,"unauthorized-domain")}(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ve()||he()||ye()}};class Wr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return S("unexpected MultiFactorSessionType")}}}class Hr extends Wr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Hr(e)}_finalizeEnroll(e,t,n){return function(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:finalize",U(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return function(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:finalize",U(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Gr{constructor(){}static assertion(e){return Hr._fromCredential(e)}}Gr.FACTOR_ID="phone";var Qr,Yr="@firebase/auth",Jr="0.19.9";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zr(e=Object(i.getApp)()){const t=Object(i._getProvider)(e,"auth");return t.isInitialized()?t.getImmediate():N(e,{popupRedirectResolver:zr,persistence:[En,rn,on]})}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ei(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qr="Browser",Object(i._registerComponent)(new a.a("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{C(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),C(!(null===i||void 0===i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:Qr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_e(Qr)},s=new we(e,n);return function(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(A);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}(s,t),s})(n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Object(i._registerComponent)(new a.a("auth-internal",e=>(e=>new Xr(e))(be(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i.registerVersion)(Yr,Jr,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Qr)),Object(i.registerVersion)(Yr,Jr,"esm2017"),n.d(t,"w",function(){return mi}),n.d(t,"E",function(){return fi}),n.d(t,"a",function(){return d}),n.d(t,!1,function(){return je}),n.d(t,"b",function(){return Se}),n.d(t,!1,function(){return y}),n.d(t,!1,function(){return we}),n.d(t,!1,function(){return Ur}),n.d(t,!1,function(){return Ne}),n.d(t,"c",function(){return Fe}),n.d(t,"d",function(){return $e}),n.d(t,!1,function(){return c}),n.d(t,!1,function(){return j}),n.d(t,"e",function(){return Ke}),n.d(t,"f",function(){return Be}),n.d(t,"g",function(){return Pe}),n.d(t,"h",function(){return qe}),n.d(t,!1,function(){return h}),n.d(t,!1,function(){return Le}),n.d(t,"i",function(){return Wn}),n.d(t,"j",function(){return Gr}),n.d(t,"k",function(){return u}),n.d(t,"l",function(){return Un}),n.d(t,"m",function(){return We}),n.d(t,"n",function(){return Ge}),n.d(t,!1,function(){return l}),n.d(t,"o",function(){return Qe}),n.d(t,!1,function(){return ie}),n.d(t,"p",function(){return C}),n.d(t,"q",function(){return be}),n.d(t,"r",function(){return w}),n.d(t,"s",function(){return cn}),n.d(t,!1,function(){return _e}),n.d(t,"t",function(){return A}),n.d(t,"u",function(){return pr}),n.d(t,"v",function(){return ae}),n.d(t,"x",function(){return yt}),n.d(t,"y",function(){return rn}),n.d(t,"z",function(){return zr}),n.d(t,"A",function(){return on}),n.d(t,"B",function(){return vt}),n.d(t,"C",function(){return gt}),n.d(t,"D",function(){return Te}),n.d(t,"F",function(){return wt}),n.d(t,"G",function(){return p}),n.d(t,!1,function(){return zt}),n.d(t,"H",function(){return Ct}),n.d(t,"I",function(){return Ft}),n.d(t,!1,function(){return Zr}),n.d(t,!1,function(){return H}),n.d(t,!1,function(){return G}),n.d(t,"J",function(){return Gt}),n.d(t,"K",function(){return fr}),n.d(t,"L",function(){return oe}),n.d(t,"M",function(){return En}),n.d(t,!1,function(){return N}),n.d(t,"N",function(){return Tt}),n.d(t,"O",function(){return ut}),n.d(t,"P",function(){return $n}),n.d(t,"Q",function(){return nr}),n.d(t,"R",function(){return dr}),n.d(t,"S",function(){return Jt}),n.d(t,!1,function(){return qt}),n.d(t,!1,function(){return Vt}),n.d(t,!1,function(){return Me}),n.d(t,!1,function(){return m}),n.d(t,"T",function(){return lt}),n.d(t,"U",function(){return Bn}),n.d(t,"V",function(){return tr}),n.d(t,"W",function(){return hr}),n.d(t,!1,function(){return te}),n.d(t,"X",function(){return St}),n.d(t,"Y",function(){return mt}),n.d(t,"Z",function(){return It}),n.d(t,!1,function(){return Ut}),n.d(t,"_0",function(){return Ze}),n.d(t,"_1",function(){return ct}),n.d(t,"_2",function(){return ht}),n.d(t,"_3",function(){return bt}),n.d(t,"_4",function(){return Et}),n.d(t,"_5",function(){return qn}),n.d(t,"_6",function(){return er}),n.d(t,"_7",function(){return lr}),n.d(t,!1,function(){return Kt}),n.d(t,"_8",function(){return rt}),n.d(t,!1,function(){return Bt}),n.d(t,"_9",function(){return At}),n.d(t,"_10",function(){return Nt}),n.d(t,"_11",function(){return zn}),n.d(t,"_12",function(){return Ot}),n.d(t,!1,function(){return $t}),n.d(t,"_13",function(){return kt}),n.d(t,"_14",function(){return _t});const ti=2e3;async function ni(e,t,n){var r;const{BuildInfo:i}=ei();k(t.sessionId,"AuthEvent did not contain a session ID");const s=await async function(e){const t=function(e){if(k(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),n=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map(e=>e.toString(16).padStart(2,"0")).join("")}(t.sessionId),o={};return ye()?o.ibi=i.packageName:pe()?o.apn=i.packageName:w(e,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Br(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,o)}function ri(e){const{cordova:t}=ei();return new Promise(n=>{t.plugins.browsertab.isAvailable(i=>{let s=null;i?t.plugins.browsertab.openUrl(e):s=t.InAppBrowser.open(e,function(e=Object(r.s)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}()?"_blank":"_system","location=yes"),n(s)})})}const ii=20;class si extends yr{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function oi(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:function(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<ii;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}(),postBody:null,tenantId:e.tenantId,error:b(e,"no-auth-event")}}async function ai(e){const t=await ui()._get(li(e));return t&&await ui()._remove(li(e)),t}function ci(e,t){var n,r;const i=function(e){const t=hi(e),n=t.link?decodeURIComponent(t.link):void 0,r=hi(n).link,i=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return hi(i).link||i||r||n||e}(t);if(i.includes("/__/auth/callback")){const t=hi(i),s=t.firebaseError?function(e){try{return JSON.parse(e)}catch(e){return null}}(decodeURIComponent(t.firebaseError)):null,o=null===(r=null===(n=null===s||void 0===s?void 0:s.code)||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=o?b(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function ui(){return A(rn)}function li(e){return ae("authEvent",e.config.apiKey,e.name)}function hi(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return Object(r.K)(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=500;const fi=class{constructor(){this._redirectPersistence=on,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=pr}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new si(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){w(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){!function(e){var t,n,r,i,s,o,a,c,u,l;const h=ei();C("function"==typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),C(void 0!==(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),C("function"==typeof(null===(s=null===(i=null===(r=null===h||void 0===h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),C("function"==typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),C("function"==typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),sr.clear(),await this._originValidation(e);const s=oi(e,n,r);await function(e,t){return ui()._set(li(e),t)}(e,s);const o=await ni(e,s,t);return async function(e,t,n){const{cordova:r}=ei();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var e;s();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"==typeof t&&t(),"function"==typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(b(e,"redirect-cancelled-by-user"))},ti))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),pe()&&document.addEventListener("visibilitychange",l,!1),i=(()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)})})}finally{i()}}(e,i,await ri(o))}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){const{BuildInfo:t}=ei(),n={};ye()?n.iosBundleId=t.packageName:pe()?n.androidPackageName=t.packageName:w(e,"operation-not-supported-in-this-environment"),await wr(e,n)}(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=ei(),s=setTimeout(async()=>{await ai(e),t.onEvent(pi())},di),o=async n=>{clearTimeout(s);const r=await ai(e);let i=null;r&&(null===n||void 0===n?void 0:n.url)&&(i=ci(r,n.url)),t.onEvent(i||pi())};void 0!==n&&"function"==typeof n.subscribe&&n.subscribe(null,o);const a=r,c=`${i.packageName.toLowerCase()}://`;ei().handleOpenURL=(async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"==typeof a)try{a(e)}catch(e){console.error(e)}})}};function pi(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:b("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(e,t){be(e)._logFramework(t)}},"9lTP":function(e,t,n){"use strict";var r=n("Rzxn"),i=n("fQOS"),s=n("28tl"),o=n("xq9A");const a="@firebase/firestore-compat",c="0.1.14";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new i.g("invalid-argument",`Invalid options passed to function ${e}(): You cannot `+'specify both "merge" and "mergeFields".');return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){if("undefined"==typeof Uint8Array)throw new i.g("unimplemented","Uint8Arrays are not available in this environment.")}function h(){if(!Object(i.r)())throw new i.g("unimplemented","Blobs are unavailable in Firestore in this environment.")}class d{constructor(e){this._delegate=e}static fromBase64String(e){return h(),new d(i.b.fromBase64String(e))}static fromUint8Array(e){return l(),new d(i.b.fromUint8Array(e))}toBase64(){return h(),this._delegate.toBase64()}toUint8Array(){return l(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of t)if(e in n&&"function"==typeof n[e])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class p{enableIndexedDbPersistence(e,t){return Object(i.F)(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Object(i.G)(e._delegate)}clearIndexedDbPersistence(e){return Object(i.x)(e._delegate)}}class m{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof i.m||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Object(i.s)("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&delete(e=Object.assign(Object.assign({},t),e)).merge,this._delegate._setSettings(e)}useEmulator(e,t,n={}){Object(i.A)(this._delegate,e,t,n)}enableNetwork(){return Object(i.H)(this._delegate)}disableNetwork(){return Object(i.D)(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,Object(i.t)("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Object(i._11)(this._delegate)}onSnapshotsInSync(e){return Object(i.Y)(this._delegate,e)}get app(){if(!this._appCompat)throw new i.g("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new A(this,Object(i.y)(this._delegate,e))}catch(e){throw b(e,"collection()","Firestore.collection()")}}doc(e){try{return new w(this,Object(i.E)(this._delegate,e))}catch(e){throw b(e,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new S(this,Object(i.z)(this._delegate,e))}catch(e){throw b(e,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Object(i._3)(this._delegate,t=>e(new y(this,t)))}batch(){return Object(i.K)(this._delegate),new v(new i.l(this._delegate,e=>Object(i.L)(this._delegate,e)))}loadBundle(e){return Object(i.V)(this._delegate,e)}namedQuery(e){return Object(i.W)(this._delegate,e).then(e=>e?new S(this,e):null)}}class g extends i.a{constructor(e){super(),this.firestore=e}convertBytes(e){return new d(new i.b(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return w.forKey(t,this.firestore,null)}}class y{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new g(e)}get(e){const t=N(e);return this._delegate.get(t).then(e=>new E(this._firestore,new i.e(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter)))}set(e,t,n){const r=N(e);return n?(u("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=N(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=N(e);return this._delegate.delete(t),this}}class v{constructor(e){this._delegate=e}set(e,t,n){const r=N(e);return n?(u("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=N(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=N(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class _{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new i.i(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new C(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=_.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new _(e,new g(e),t),r.set(t,i)),i}}_.INSTANCES=new WeakMap;class w{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new g(e)}static forPath(e,t,n){if(e.length%2!=0)throw new i.g("invalid-argument","Invalid document reference. Document references must have an even number of segments, but "+`${e.canonicalString()} has ${e.length}`);return new w(t,new i.d(t._delegate,n,new i.n(e)))}static forKey(e,t,n){return new w(t,new i.d(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new A(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new A(this.firestore,Object(i.y)(this._delegate,e))}catch(e){throw b(e,"collection()","DocumentReference.collection()")}}isEqual(e){return(e=Object(s.r)(e))instanceof i.d&&Object(i._2)(this._delegate,e)}set(e,t){t=u("DocumentReference.set",t);try{return t?Object(i._5)(this._delegate,e,t):Object(i._5)(this._delegate,e)}catch(e){throw b(e,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?Object(i._10)(this._delegate,e):Object(i._10)(this._delegate,e,t,...n)}catch(e){throw b(e,"updateDoc()","DocumentReference.update()")}}delete(){return Object(i.B)(this._delegate)}onSnapshot(...e){const t=I(e),n=T(e,e=>new E(this.firestore,new i.e(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)));return Object(i.X)(this._delegate,t,n)}get(e){let t;return(t="cache"===(null===e||void 0===e?void 0:e.source)?Object(i.N)(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Object(i.O)(this._delegate):Object(i.M)(this._delegate)).then(e=>new E(this.firestore,new i.e(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)))}withConverter(e){return new w(this.firestore,e?this._delegate.withConverter(_.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function b(e,t,n){return e.message=e.message.replace(t,n),e}function I(e){for(const t of e)if("object"==typeof t&&!f(t))return t;return{}}function T(e,t){var n,r;let i;return{next:e=>{i.next&&i.next(t(e))},error:null===(n=(i=f(e[0])?e[0]:f(e[1])?e[1]:"function"==typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]}).error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class E{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new w(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Object(i._7)(this._delegate,e._delegate)}}class C extends E{data(e){const t=this._delegate.data(e);return Object(i.q)(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class S{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new g(e)}where(e,t,n){try{return new S(this.firestore,Object(i._0)(this._delegate,Object(i._12)(e,t,n)))}catch(e){throw b(e,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new S(this.firestore,Object(i._0)(this._delegate,Object(i.Z)(e,t)))}catch(e){throw b(e,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new S(this.firestore,Object(i._0)(this._delegate,Object(i.T)(e)))}catch(e){throw b(e,"limit()","Query.limit()")}}limitToLast(e){try{return new S(this.firestore,Object(i._0)(this._delegate,Object(i.U)(e)))}catch(e){throw b(e,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new S(this.firestore,Object(i._0)(this._delegate,Object(i._9)(...e)))}catch(e){throw b(e,"startAt()","Query.startAt()")}}startAfter(...e){try{return new S(this.firestore,Object(i._0)(this._delegate,Object(i._8)(...e)))}catch(e){throw b(e,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new S(this.firestore,Object(i._0)(this._delegate,Object(i.J)(...e)))}catch(e){throw b(e,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new S(this.firestore,Object(i._0)(this._delegate,Object(i.I)(...e)))}catch(e){throw b(e,"endAt()","Query.endAt()")}}isEqual(e){return Object(i._1)(this._delegate,e._delegate)}get(e){let t;return(t="cache"===(null===e||void 0===e?void 0:e.source)?Object(i.Q)(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Object(i.R)(this._delegate):Object(i.P)(this._delegate)).then(e=>new O(this.firestore,new i.j(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)))}onSnapshot(...e){const t=I(e),n=T(e,e=>new O(this.firestore,new i.j(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)));return Object(i.X)(this._delegate,t,n)}withConverter(e){return new S(this.firestore,e?this._delegate.withConverter(_.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class k{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new C(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class O{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new S(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new C(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(e=>new k(this._firestore,e))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new C(this._firestore,n))})}isEqual(e){return Object(i._7)(this._delegate,e._delegate)}}class A extends S{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new w(this.firestore,e):null}doc(e){try{return new w(this.firestore,void 0===e?Object(i.E)(this._delegate):Object(i.E)(this._delegate,e))}catch(e){throw b(e,"doc()","CollectionReference.doc()")}}add(e){return Object(i.u)(this._delegate,e).then(e=>new w(this.firestore,e))}isEqual(e){return Object(i._2)(this._delegate,e._delegate)}withConverter(e){return new A(this.firestore,e?this._delegate.withConverter(_.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function N(e){return Object(i.p)(e,i.d)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(...e){this._delegate=new i.f(...e)}static documentId(){return new x(i.o.keyField().canonicalString())}isEqual(e){return(e=Object(s.r)(e))instanceof i.f&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this._delegate=e}static serverTimestamp(){const e=Object(i._4)();return e._methodName="FieldValue.serverTimestamp",new R(e)}static delete(){const e=Object(i.C)();return e._methodName="FieldValue.delete",new R(e)}static arrayUnion(...e){const t=Object(i.w)(...e);return t._methodName="FieldValue.arrayUnion",new R(t)}static arrayRemove(...e){const t=Object(i.v)(...e);return t._methodName="FieldValue.arrayRemove",new R(t)}static increment(e){const t=Object(i.S)(e);return t._methodName="FieldValue.increment",new R(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={Firestore:m,GeoPoint:i.h,Timestamp:i.k,Blob:d,Transaction:y,WriteBatch:v,DocumentReference:w,DocumentSnapshot:E,Query:S,QueryDocumentSnapshot:C,QuerySnapshot:O,CollectionReference:A,FieldPath:x,FieldValue:R,setLogLevel:function(e){Object(i._6)(e)},CACHE_SIZE_UNLIMITED:i.c};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var D,L;D=r.a,L=((e,t)=>new m(e,t,new p)),D.INTERNAL.registerComponent(new o.a("firestore-compat",e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("firestore").getImmediate();return L(t,n)},"PUBLIC").setServiceProps(Object.assign({},P))),D.registerVersion(a,c)},"Bh+8":function(e,t,n){"use strict";n("TT7D")},DuR2:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},"E/LO":function(e,t,n){"use strict";var r=n("Rzxn");n.d(t,"a",function(){return r.a});
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r.a.registerVersion("firebase","9.6.7","app-compat")},RUaj:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return Es}),n.d(t,"b",function(){return Cs}),n.d(t,"c",function(){return mn}),n.d(t,"d",function(){return As}),n.d(t,"e",function(){return Eo}),n.d(t,"f",function(){return l}),n.d(t,"g",function(){return Fi}),n.d(t,"h",function(){return Vi}),n.d(t,"i",function(){return Ps}),n.d(t,"j",function(){return So}),n.d(t,"k",function(){return Ao}),n.d(t,"l",function(){return Xs}),n.d(t,"m",function(){return eo}),n.d(t,"n",function(){return _o}),n.d(t,"o",function(){return Vs}),n.d(t,"p",function(){return ko}),n.d(t,"q",function(){return Oo}),n.d(t,"r",function(){return Ro}),n.d(t,"s",function(){return oo}),n.d(t,"t",function(){return co}),n.d(t,"u",function(){return Qs}),n.d(t,"v",function(){return zs}),n.d(t,"w",function(){return Ws}),n.d(t,"x",function(){return Hs}),n.d(t,"y",function(){return Gs}),n.d(t,"z",function(){return Ks}),n.d(t,"A",function(){return lo}),n.d(t,"B",function(){return fo}),n.d(t,"C",function(){return mo}),n.d(t,"D",function(){return yo}),n.d(t,"E",function(){return Ds}),n.d(t,"F",function(){return wo}),n.d(t,"G",function(){return xs}),n.d(t,"H",function(){return Rs}),n.d(t,"I",function(){return Ls}),n.d(t,"J",function(){return Do}),n.d(t,"K",function(){return xo}),n.d(t,"L",function(){return js}),n.d(t,"M",function(){return Ms}),n.d(t,"N",function(){return Fs}),n.d(t,"O",function(){return io}),n.d(t,"P",function(){return no}),n.d(t,"Q",function(){return Us});var r=n("a7sP"),i=n("xq9A"),s=n("28tl"),o=n("gZMR");const a="@firebase/database",c="0.12.5";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let u="";function l(e){u=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const h=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new class{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Object(s.O)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Object(s.H)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}}catch(e){}return new class{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Object(s.j)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}},d=h("localStorage"),f=h("sessionStorage"),p=new o.b("@firebase/database"),m=function(){let e=1;return function(){return e++}}(),g=function(e){const t=Object(s.N)(e),n=new s.d;n.update(t);const r=n.digest();return s.g.encodeByteArray(r)},y=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=y.apply(null,r):t+="object"==typeof r?Object(s.O)(r):r,t+=" "}return t};let v=null,_=!0;const w=function(e,t){Object(s.e)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(p.logLevel=o.a.VERBOSE,v=p.log.bind(p),t&&f.set("logging_enabled",!0)):"function"==typeof e?v=e:(v=null,f.remove("logging_enabled"))},b=function(...e){if(!0===_&&(_=!1,null===v&&!0===f.get("logging_enabled")&&w(!0)),v){const t=y.apply(null,e);v(t)}},I=function(e){return function(...t){b(e,...t)}},T=function(...e){const t="FIREBASE INTERNAL ERROR: "+y(...e);p.error(t)},E=function(...e){const t=`FIREBASE FATAL ERROR: ${y(...e)}`;throw p.error(t),new Error(t)},C=function(...e){const t="FIREBASE WARNING: "+y(...e);p.warn(t)},S=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},k=function(e){if(Object(s.C)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},O="[MIN_NAME]",A="[MAX_NAME]",N=function(e,t){if(e===t)return 0;if(e===O||t===A)return-1;if(t===O||e===A)return 1;{const n=V(e),r=V(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},x=function(e,t){return e===t?0:e<t?-1:1},R=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Object(s.O)(t))},P=function(e){if("object"!=typeof e||null===e)return Object(s.O)(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=Object(s.O)(t[r]),n+=":",n+=P(e[t[r]]);return n+="}"},D=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function L(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const j=function(e){Object(s.e)(!S(e),"Invalid JSON number");let t,n,r,i,o;0===e?(n=0,r=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(n=(i=Math.min(Math.floor(Math.log(e)/Math.LN2),1023))+1023,r=Math.round(e*Math.pow(2,52-i)-Math.pow(2,52))):(n=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)a.push(n%2?1:0),n=Math.floor(n/2);a.push(t?1:0),a.reverse();const c=a.join("");let u="";for(o=0;o<64;o+=8){let e=parseInt(c.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),u+=e}return u.toLowerCase()},M=function(){return!("object"!=typeof window||!window.chrome||!window.chrome.extension||/^chrome/.test(window.location.href))},F=function(){return"object"==typeof Windows&&"object"==typeof Windows.UI};const U=new RegExp("^-?(0*)\\d{1,10}$"),V=function(e){if(U.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},q=function(e){try{e()}catch(e){setTimeout(()=>{const t=e.stack||"";throw C("Exception was thrown by user callback.",t),e},Math.floor(0))}},$=function(){return("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},B=function(e,t){const n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class K{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){C(`Provided AppCheck credentials for the app named "${this.appName_}" `+"are invalid. This usually indicates your app was not initialized correctly.")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(b("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',C(e)}}class W{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}W.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const H="5",G="v",Q="s",Y="r",J="f",X=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Z="ls",ee="p",te="ac",ne="websocket",re="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ie{constructor(e,t,n,r,i=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=d.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&d.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function se(e,t,n){let r;if(Object(s.e)("string"==typeof t,"typeof type must == string"),Object(s.e)("object"==typeof n,"typeof params must == object"),t===ne)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==re)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const i=[];return L(n,(e,t)=>{i.push(e+"="+t)}),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.counters_={}}incrementCounter(e,t=1){Object(s.j)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Object(s.m)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae={},ce={};function ue(e){const t=e.toString();return ae[t]||(ae[t]=new oe),ae[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class le{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&q(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he="start",de="close",fe="pLPCommand",pe="pRTLPCB",me="id",ge="pw",ye="ser",ve="cb",_e="seg",we="ts",be="d",Ie="dframe",Te=1870,Ee=30,Ce=Te-Ee,Se=25e3,ke=3e4;class Oe{constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=I(e),this.stats_=ue(t),this.urlFn=(e=>(this.appCheckToken&&(e[te]=this.appCheckToken),se(t,re,e)))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new le(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ke)),k(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ae((...e)=>{const[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===he)this.id=n,this.password=r;else{if(t!==de)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);const e={};e[he]="t",e[ye]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[ve]=this.scriptTagHolder.uniqueCallbackIdentifier),e[G]=H,this.transportSessionId&&(e[Q]=this.transportSessionId),this.lastSessionId&&(e[Z]=this.lastSessionId),this.applicationId&&(e[ee]=this.applicationId),this.appCheckToken&&(e[te]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&X.test(location.hostname)&&(e[Y]=J);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Oe.forceAllow_=!0}static forceDisallow(){Oe.forceDisallow_=!0}static isAvailable(){return!Object(s.C)()&&(!!Oe.forceAllow_||!Oe.forceDisallow_&&"undefined"!=typeof document&&null!=document.createElement&&!M()&&!F())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Object(s.O)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Object(s.i)(t),r=D(n,Ce);for(let e=0;e<r.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Object(s.C)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Ie]="t",n[me]=e,n[ge]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Object(s.O)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ae{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(s.C)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=m(),window[fe+this.uniqueCallbackIdentifier]=e,window[pe+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ae.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){n='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(e){b("frame writing exception"),e.stack&&b(e.stack),b(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||b("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[me]=this.myID,e[ge]=this.myPW,e[ye]=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+Ee+n.length<=Te))break;{const e=this.pendingSegs.shift();n=n+"&"+_e+r+"="+e.seg+"&"+we+r+"="+e.ts+"&"+be+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(Se));this.addTag(e,()=>{clearTimeout(r),n()})}addTag(e,t){Object(s.C)()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=(()=>{b("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()}),this.myIFrame.doc.body.appendChild(n)}catch(e){}},Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=16384,xe=45e3;let Re=null;"undefined"!=typeof MozWebSocket?Re=MozWebSocket:"undefined"!=typeof WebSocket&&(Re=WebSocket);class Pe{constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=I(this.connId),this.stats_=ue(t),this.connURL=Pe.connectionURL_(t,s,o,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r){const i={};return i[G]=H,!Object(s.C)()&&"undefined"!=typeof location&&location.hostname&&X.test(location.hostname)&&(i[Y]=J),t&&(i[Q]=t),n&&(i[Z]=n),r&&(i[te]=r),se(e,ne,i)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,d.set("previous_websocket_failure",!0);try{if(Object(s.C)()){const t=this.nodeAdmin?"AdminNode":"Node",n={headers:{"User-Agent":`Firebase/${H}/${u}/${e.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(n.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(n.headers["X-Firebase-AppCheck"]=this.appCheckToken);const r=Object({NODE_ENV:"production"}),i=0===this.connURL.indexOf("wss://")?r.HTTPS_PROXY||r.https_proxy:r.HTTP_PROXY||r.http_proxy;i&&(n.proxy={origin:i}),this.mySock=new Re(this.connURL,[],n)}else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Re(this.connURL,[],e)}}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=(()=>{this.log_("Websocket connected."),this.everConnected_=!0}),this.mySock.onclose=(()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()}),this.mySock.onmessage=(e=>{this.handleIncomingFrame(e)}),this.mySock.onerror=(e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()})}start(){}static forceDisallow(){Pe.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Re&&!Pe.forceDisallow_}static previouslyFailed(){return d.isInMemoryStorage||!0===d.get("previous_websocket_failure")}markConnectionHealthy(){d.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Object(s.H)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Object(s.e)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Object(s.O)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=D(t,Ne);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(xe))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Pe.responsesRequiredToBeHealthy=2,Pe.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class De{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Oe,Pe]}initTransports_(e){const t=Pe&&Pe.isAvailable();let n=t&&!Pe.previouslyFailed();if(e.webSocketOnly&&(t||C("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Pe];else{const e=this.transports_=[];for(const t of De.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le=6e4,je=5e3,Me=10240,Fe=102400,Ue="t",Ve="d",qe="s",$e="r",Be="e",Ke="o",ze="a",We="n",He="p",Ge="h";class Qe{constructor(e,t,n,r,i,s,o,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=I("c:"+this.id+":"),this.transportManager_=new De(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=B(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Fe?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Me?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ue in e){const t=e[Ue];t===ze?this.upgradeIfSecondaryHealthy_():t===$e?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Ke&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=R("t",e),n=R("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:He,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ze,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:We,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=R("t",e),n=R("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=R(Ue,e);if(Ve in e){const n=e[Ve];if(t===Ge)this.onHandshake_(n);else if(t===We){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===qe?this.onConnectionShutdown_(n):t===$e?this.onReset_(n):t===Be?T("Server Error: "+n):t===Ke?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):T("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),H!==n&&C("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),B(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Le))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):B(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(je))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:He,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(d.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.allowedEvents_=e,this.listeners_={},Object(s.e)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let e=0;e<r.length;e++)if(r[e].callback===t&&(!n||n===r[e].context))return void r.splice(e,1)}validateEventType_(e){Object(s.e)(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends Je{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Object(s.A)()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Xe}getInitialEvent(e){return Object(s.e)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=32,et=768;class tt{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function nt(){return new tt("")}function rt(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function it(e){return e.pieces_.length-e.pieceNum_}function st(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new tt(e.pieces_,t)}function ot(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function at(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function ct(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new tt(t,0)}function ut(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof tt)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new tt(n,0)}function lt(e){return e.pieceNum_>=e.pieces_.length}function ht(e,t){const n=rt(e),r=rt(t);if(null===n)return t;if(n===r)return ht(st(e),st(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function dt(e,t){const n=at(e,0),r=at(t,0);for(let e=0;e<n.length&&e<r.length;e++){const t=N(n[e],r[e]);if(0!==t)return t}return n.length===r.length?0:n.length<r.length?-1:1}function ft(e,t){if(it(e)!==it(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function pt(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(it(e)>it(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}function mt(e){if(e.byteLength_>et)throw new Error(e.errorPrefix_+"has a key path longer than "+et+" bytes ("+e.byteLength_+").");if(e.parts_.length>Ze)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ze+") or object contains a cycle "+gt(e))}function gt(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Je{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new yt}getInitialEvent(e){return Object(s.e)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=1e3,_t=3e5,wt=3e3,bt=3e4,It=1.3,Tt=3e4,Et="server_kill",Ct=3;class St extends Ye{constructor(e,t,n,r,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=St.nextPersistentConnectionId_++,this.log_=I("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=vt,this.maxReconnectDelay_=_t,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Object(s.C)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");yt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Xe.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(Object(s.O)(i)),Object(s.e)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new s.a,n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const r=e.d;"ok"===e.s?(this.onDataUpdate_(n.p,r,!1,null),t.resolve(r)):t.reject(r)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const e=this.outstandingGets_[i];void 0!==e&&r===e&&(delete this.outstandingGets_[i],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+i+" timed out on connection"),t.reject(new Error("Client is offline.")))},wt),this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),Object(s.e)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(s.e)(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,i=>{const s=i.d,o=i.s;St.warnOnListenWarnings_(s,t),(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&Object(s.j)(e,"w")){const n=Object(s.L)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();C("Using an unspecified index. Your data will be downloaded and "+`filtered on the client. Consider adding ${e} at `+`${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||Object(s.t)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=bt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Object(s.G)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,t=>{const n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),Object(s.e)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,e=>{r&&setTimeout(()=>{r(e.s,e.d)},Math.floor(0))})}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const s={p:t,d:n};void 0!==i&&(s.h=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Object(s.O)(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):T("Unrecognized action received from server: "+Object(s.O)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Object(s.e)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=vt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=vt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>Tt&&(this.reconnectDelay_=vt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*It)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+St.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,n())},u=function(e){Object(s.e)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:u};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,u]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);o?b("getToken() completed but was canceled"):(b("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=u&&u.token,a=new Qe(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{C(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Et)},i))}catch(e){this.log_("Failed to get token: "+e),o||(this.repoInfo_.nodeAdmin&&C(e),c())}}}interrupt(e){b("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){b("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Object(s.x)(this.interruptReasons_)&&(this.reconnectDelay_=vt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>P(e)).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new tt(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){b("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ct&&(this.reconnectDelay_=bt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){b("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ct&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Object(s.C)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+u.replace(/\./g,"-")]=1,Object(s.A)()?e["framework.cordova"]=1:Object(s.D)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xe.getInstance().currentlyOnline();return Object(s.x)(this.interruptReasons_)&&e}}St.nextPersistentConnectionId_=0,St.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new kt(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new kt(O,e),r=new kt(O,t);return 0!==this.compare(n,r)}minPost(){return kt.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let At;class Nt extends Ot{static get __EMPTY_NODE(){return At}static set __EMPTY_NODE(e){At=e}compare(e,t){return N(e.name,t.name)}isDefinedOn(e){throw Object(s.f)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return kt.MIN}maxPost(){return new kt(A,At)}makePost(e,t){return Object(s.e)("string"==typeof e,"KeyIndex indexValue must always be a string."),new kt(e,At)}toString(){return".key"}}const xt=new Nt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(e=e,s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Pt{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Pt.RED,this.left=null!=r?r:Dt.EMPTY_NODE,this.right=null!=i?i:Dt.EMPTY_NODE}copy(e,t,n,r,i){return new Pt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp_()}removeMin_(){if(this.left.isEmpty())return Dt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}remove(e,t){let n,r;if(t(e,(n=this).key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Dt.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Pt.RED=!0,Pt.BLACK=!1;class Dt{constructor(e,t=Dt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Dt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Pt.BLACK,null,null))}remove(e){return new Dt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Pt.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Rt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Rt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Rt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Rt(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lt(e,t){return N(e.name,t.name)}function jt(e,t){return N(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mt;Dt.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new Pt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Ft=function(e){return"number"==typeof e?"number:"+j(e):"string:"+e},Ut=function(e){if(e.isLeafNode()){const t=e.val();Object(s.e)("string"==typeof t||"number"==typeof t||"object"==typeof t&&Object(s.j)(t,".sv"),"Priority must be a string or number.")}else Object(s.e)(e===Mt||e.isEmpty(),"priority of unexpected type.");Object(s.e)(e===Mt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Vt,qt,$t;class Bt{constructor(e,t=Bt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Object(s.e)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Ut(this.priorityNode_)}static set __childrenNodeConstructor(e){Vt=e}static get __childrenNodeConstructor(){return Vt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Bt(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Bt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return lt(e)?this:".priority"===rt(e)?this.priorityNode_:Bt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Bt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=rt(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Object(s.e)(".priority"!==n||1===it(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Bt.__childrenNodeConstructor.EMPTY_NODE.updateChild(st(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ft(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?j(this.value_):this.value_,this.lazyHash_=g(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Bt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Bt.__childrenNodeConstructor?-1:(Object(s.e)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=Bt.VALUE_TYPE_ORDER.indexOf(t),i=Bt.VALUE_TYPE_ORDER.indexOf(n);return Object(s.e)(r>=0,"Unknown leaf type: "+t),Object(s.e)(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Bt.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Kt=new class extends Ot{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?N(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return kt.MIN}maxPost(){return new kt(A,new Bt("[PRIORITY-POST]",$t))}makePost(e,t){const n=qt(e);return new kt(t,new Bt("[PRIORITY-POST]",n))}toString(){return".priority"}},zt=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=function(e,t,n,r){e.sort(t);const i=function(t,r){const s=r-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Pt(a,o.node,Pt.BLACK,null,null);{const c=parseInt(s/2,10)+t,u=i(t,c),l=i(c+1,r);return o=e[c],a=n?n(o):o,new Pt(a,o.node,Pt.BLACK,u,l)}},s=function(t){let r=null,s=null,o=e.length;const a=function(t,r){const s=o-t,a=o;o-=t;const u=i(s+1,a),l=e[s],h=n?n(l):l;c(new Pt(h,l.node,r,null,u))},c=function(e){r?(r.left=e,r=e):(s=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Pt.BLACK):(a(r,Pt.BLACK),a(r,Pt.RED))}return s}(new class{constructor(e){this.count=(e=>parseInt(Math.log(e)/zt,10))(e+1),this.current_=this.count-1;const t=(e=>parseInt(Array(e+1).join("1"),2))(this.count);this.bits_=e+1&t}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}(e.length));return new Dt(r||t,s)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ht;const Gt={};class Qt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Object(s.e)(Gt&&Kt,"ChildrenNode.ts has not been loaded"),Ht=Ht||new Qt({".priority":Gt},{".priority":Kt})}get(e){const t=Object(s.L)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Dt?t:null}hasIndex(e){return Object(s.j)(this.indexSet_,e.toString())}addIndex(e,t){Object(s.e)(e!==xt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(kt.Wrap);let o,a=i.getNext();for(;a;)r=r||e.isDefinedOn(a.node),n.push(a),a=i.getNext();o=r?Wt(n,e.getCompare()):Gt;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const l=Object.assign({},this.indexes_);return l[c]=o,new Qt(l,u)}addToIndexes(e,t){const n=Object(s.I)(this.indexes_,(n,r)=>{const i=Object(s.L)(this.indexSet_,r);if(Object(s.e)(i,"Missing index implementation for "+r),n===Gt){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(kt.Wrap);let s=r.getNext();for(;s;)s.name!==e.name&&n.push(s),s=r.getNext();return n.push(e),Wt(n,i.getCompare())}return Gt}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new kt(e.name,r))),i.insert(e,e.node)}});return new Qt(n,this.indexSet_)}removeFromIndexes(e,t){const n=Object(s.I)(this.indexes_,n=>{if(n===Gt)return n;{const r=t.get(e.name);return r?n.remove(new kt(e.name,r)):n}});return new Qt(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yt;class Jt{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Ut(this.priorityNode_),this.children_.isEmpty()&&Object(s.e)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Yt||(Yt=new Jt(new Dt(jt),null,Qt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Yt}updatePriority(e){return this.children_.isEmpty()?this:new Jt(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Yt:t}}getChild(e){const t=rt(e);return null===t?this:this.getImmediateChild(t).getChild(st(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Object(s.e)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new kt(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?Yt:this.priorityNode_;return new Jt(r,s,i)}}updateChild(e,t){const n=rt(e);if(null===n)return t;{Object(s.e)(".priority"!==rt(e)||1===it(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(st(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(Kt,(s,o)=>{t[s]=o.val(e),n++,i&&Jt.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1}),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ft(this.getPriority().val())+":"),this.forEachChild(Kt,(t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)}),this.lazyHash_=""===e?"":g(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new kt(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new kt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new kt(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{const n=this.children_.getIteratorFrom(e.name,kt.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{const n=this.children_.getReverseIteratorFrom(e.name,kt.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xt?-1:0}withIndex(e){if(e===xt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Jt(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===xt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Kt),n=t.getIterator(Kt);let r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===xt?null:this.indexMap_.get(e.toString())}}Jt.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Xt=new class extends Jt{constructor(){super(new Dt(jt),Jt.EMPTY_NODE,Qt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Jt.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(kt,{MIN:{value:new kt(O,Jt.EMPTY_NODE)},MAX:{value:new kt(A,Xt)}}),Nt.__EMPTY_NODE=Jt.EMPTY_NODE,Bt.__childrenNodeConstructor=Jt,Mt=Xt,function(e){$t=e}(Xt);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zt=!0;function en(e,t=null){if(null===e)return Jt.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),Object(s.e)(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Bt(e,en(t))}if(e instanceof Array||!Zt){let n=Jt.EMPTY_NODE;return L(e,(t,r)=>{if(Object(s.j)(e,t)&&"."!==t.substring(0,1)){const e=en(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}}),n.updatePriority(en(t))}{const n=[];let r=!1;if(L(e,(e,t)=>{if("."!==e.substring(0,1)){const i=en(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new kt(e,i)))}}),0===n.length)return Jt.EMPTY_NODE;const i=Wt(n,Lt,e=>e.name,jt);if(r){const e=Wt(n,Kt.getCompare());return new Jt(i,en(t),new Qt({".priority":e},{".priority":Kt}))}return new Jt(i,en(t),Qt.Default)}}!function(e){qt=e}(en);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tn extends Ot{constructor(e){super(),this.indexPath_=e,Object(s.e)(!lt(e)&&".priority"!==rt(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?N(e.name,t.name):i}makePost(e,t){const n=en(e),r=Jt.EMPTY_NODE.updateChild(this.indexPath_,n);return new kt(t,r)}maxPost(){const e=Jt.EMPTY_NODE.updateChild(this.indexPath_,Xt);return new kt(A,e)}toString(){return at(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new class extends Ot{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?N(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return kt.MIN}maxPost(){return kt.MAX}makePost(e,t){const n=en(e);return new kt(t,n)}toString(){return".value"}},rn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",sn=function(){let e=0;const t=[];return function(n){const r=n===e;let i;e=n;const o=new Array(8);for(i=7;i>=0;i--)o[i]=rn.charAt(n%64),n=Math.floor(n/64);Object(s.e)(0===n,"Cannot push at time == 0");let a=o.join("");if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)a+=rn.charAt(t[i]);return Object(s.e)(20===a.length,"nextPushId: Length should be 20."),a}}(),on=function(e){if("2147483647"===e)return"-";const t=V(e);if(null!=t)return""+(t+1);const n=new Array(e.length);for(let t=0;t<n.length;t++)n[t]=e.charAt(t);if(n.length<786)return n.push("-"),n.join("");let r=n.length-1;for(;r>=0&&"z"===n[r];)r--;if(-1===r)return A;const i=n[r],s=rn.charAt(rn.indexOf(i)+1);return n[r]=s,n.slice(0,r+1).join("")},an=function(e){if("-2147483648"===e)return O;const t=V(e);if(null!=t)return""+(t-1);const n=new Array(e.length);for(let t=0;t<n.length;t++)n[t]=e.charAt(t);return"-"===n[n.length-1]?1===n.length?"2147483647":(delete n[n.length-1],n.join("")):(n[n.length-1]=rn.charAt(rn.indexOf(n[n.length-1])-1),n.join("")+"z".repeat(786-n.length))};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cn(e){return{type:"value",snapshotNode:e}}function un(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ln(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function hn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dn{constructor(e){this.index_=e}updateChild(e,t,n,r,i,o){Object(s.e)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(ln(t,a)):Object(s.e)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(un(t,n)):o.trackChildChange(hn(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Kt,(e,r)=>{t.hasChild(e)||n.trackChildChange(ln(e,r))}),t.isLeafNode()||t.forEachChild(Kt,(t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(hn(t,r,i))}else n.trackChildChange(un(t,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Jt.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.indexedFilter_=new dn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=fn.getStartPost_(e),this.endPost_=fn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,r,i,s){return this.matches(new kt(t,n))||(n=Jt.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Jt.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(Jt.EMPTY_NODE);const i=this;return t.forEachChild(Kt,(e,t)=>{i.matches(new kt(e,t))||(r=r.updateImmediateChild(e,Jt.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.rangedFilter_=new fn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,r,i,s){return this.rangedFilter_.matches(new kt(t,n))||(n=Jt.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,s):this.fullLimitUpdateChild_(e,t,n,i,s)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=Jt.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=Jt.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();let i;if(!(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0))break;r=r.updateImmediateChild(t.name,t.node),n++}}else{let e,n,i,s;if(r=(r=t.withIndex(this.index_)).updatePriority(Jt.EMPTY_NODE),this.reverse_){s=r.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();i=((e,n)=>t(n,e))}else s=r.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let o=0,a=!1;for(;s.hasNext();){const t=s.getNext();!a&&i(e,t)<=0&&(a=!0),a&&o<this.limit_&&i(t,n)<=0?o++:r=r.updateImmediateChild(t.name,Jt.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let o;if(this.reverse_){const e=this.index_.getCompare();o=((t,n)=>e(n,t))}else o=this.index_.getCompare();const a=e;Object(s.e)(a.numChildren()===this.limit_,"");const c=new kt(t,n),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),l=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let s=r.getChildAfterChild(this.index_,u,this.reverse_);for(;null!=s&&(s.name===t||a.hasChild(s.name));)s=r.getChildAfterChild(this.index_,s,this.reverse_);const h=null==s?1:o(s,c);if(l&&!n.isEmpty()&&h>=0)return null!=i&&i.trackChildChange(hn(t,n,e)),a.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(ln(t,e));const n=a.updateImmediateChild(t,Jt.EMPTY_NODE);return null!=s&&this.rangedFilter_.matches(s)?(null!=i&&i.trackChildChange(un(s.name,s.node)),n.updateImmediateChild(s.name,s.node)):n}}return n.isEmpty()?e:l&&o(u,c)>=0?(null!=i&&(i.trackChildChange(ln(u.name,u.node)),i.trackChildChange(un(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(u.name,Jt.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Kt}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(s.e)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(s.e)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:O}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(s.e)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(s.e)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:A}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(s.e)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Kt}copy(){const e=new mn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function gn(e,t,n){const r=e.copy();return r.startSet_=!0,void 0===t&&(t=null),r.indexStartValue_=t,null!=n?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function yn(e,t,n){const r=e.copy();return r.endSet_=!0,void 0===t&&(t=null),r.indexEndValue_=t,void 0!==n?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function vn(e,t){const n=e.copy();return n.index_=t,n}function _n(e){const t={};if(e.isDefault())return t;let n;return e.index_===Kt?n="$priority":e.index_===nn?n="$value":e.index_===xt?n="$key":(Object(s.e)(e.index_ instanceof tn,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Object(s.O)(n),e.startSet_&&(t.startAt=Object(s.O)(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+Object(s.O)(e.indexStartName_))),e.endSet_&&(t.endAt=Object(s.O)(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+Object(s.O)(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function wn(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Kt&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Ye{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=I("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Object(s.e)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=bn.getListenId_(e,n),a={};this.listens_[o]=a;const c=_n(e._queryParams);this.restRequest_(i+".json",c,(e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(i,c,!1,n),Object(s.L)(this.listens_,o)===a){let t;r(t=e?401===e?"permission_denied":"rest_error:"+e:"ok",null)}})}unlisten(e,t){const n=bn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=_n(e._queryParams),n=e._path.toString(),r=new s.a;return this.restRequest_(n+".json",t,(e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Object(s.J)(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=(()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let e=null;if(a.status>=200&&a.status<300){try{e=Object(s.H)(a.responseText)}catch(e){C("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,e)}else 401!==a.status&&404!==a.status&&C("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}}),a.open("GET",o,!0),a.send()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(){this.rootNode_=Jt.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){return{value:null,children:new Map}}function En(e,t,n){if(lt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=rt(t);e.children.has(r)||e.children.set(r,Tn()),En(e.children.get(r),t=st(t),n)}}function Cn(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((e,n)=>{t(n,e)})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,(e,r)=>{Cn(r,new tt(t.toString()+"/"+e),n)})}class Sn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&L(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=1e4,On=3e4,An=3e5;class Nn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Sn(e);const n=kn+(On-kn)*Math.random();B(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e={};let t=!1;L(this.statsListener_.get(),(n,r)=>{r>0&&Object(s.j)(this.statsToReport_,n)&&(e[n]=r,t=!0)}),t&&this.server_.reportStats(e),B(this.reportStats_.bind(this),Math.floor(2*Math.random()*An))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xn;function Rn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"}(xn||(xn={}));class Pn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=xn.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(lt(this.path)){if(null!=this.affectedTree.value)return Object(s.e)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new tt(e));return new Pn(nt(),t,this.revert)}}return Object(s.e)(rt(this.path)===e,"operationForChild called for unrelated child."),new Pn(st(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t){this.source=e,this.path=t,this.type=xn.LISTEN_COMPLETE}operationForChild(e){return lt(this.path)?new Dn(this.source,nt()):new Dn(this.source,st(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=xn.OVERWRITE}operationForChild(e){return lt(this.path)?new Ln(this.source,nt(),this.snap.getImmediateChild(e)):new Ln(this.source,st(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=xn.MERGE}operationForChild(e){if(lt(this.path)){const t=this.children.subtree(new tt(e));return t.isEmpty()?null:t.value?new Ln(this.source,nt(),t.value):new jn(this.source,nt(),t)}return Object(s.e)(rt(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new jn(this.source,st(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(lt(e))return this.isFullyInitialized()&&!this.filtered_;const t=rt(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Un(e,t,n,r,i,o){const a=r.filter(e=>e.type===n);a.sort((t,n)=>(function(e,t,n){if(null==t.childName||null==n.childName)throw Object(s.f)("Should only compare child_ events.");const r=new kt(t.childName,t.snapshotNode),i=new kt(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(e,t,n)),a.forEach(n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type?t:(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_),t)}(e,n,o);i.forEach(i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))})})}function Vn(e,t){return{eventCache:e,serverCache:t}}function qn(e,t,n,r){return Vn(new Mn(t,n,r),e.serverCache)}function $n(e,t,n,r){return Vn(e.eventCache,new Mn(t,n,r))}function Bn(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Kn(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zn;const Wn=()=>(zn||(zn=new Dt(x)),zn);class Hn{constructor(e,t=Wn()){this.value=e,this.children=t}static fromObject(e){let t=new Hn(null);return L(e,(e,n)=>{t=t.set(new tt(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:nt(),value:this.value};if(lt(e))return null;{const n=rt(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(st(e),t);if(null!=i){return{path:ut(new tt(n),i.path),value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(lt(e))return this;{const t=rt(e),n=this.children.get(t);return null!==n?n.subtree(st(e)):new Hn(null)}}set(e,t){if(lt(e))return new Hn(t,this.children);{const n=rt(e),r=(this.children.get(n)||new Hn(null)).set(st(e),t),i=this.children.insert(n,r);return new Hn(this.value,i)}}remove(e){if(lt(e))return this.children.isEmpty()?new Hn(null):new Hn(null,this.children);{const t=rt(e),n=this.children.get(t);if(n){const r=n.remove(st(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new Hn(null):new Hn(this.value,i)}return this}}get(e){if(lt(e))return this.value;{const t=rt(e),n=this.children.get(t);return n?n.get(st(e)):null}}setTree(e,t){if(lt(e))return t;{const n=rt(e),r=(this.children.get(n)||new Hn(null)).setTree(st(e),t);let i;return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new Hn(this.value,i)}}fold(e){return this.fold_(nt(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((r,i)=>{n[r]=i.fold_(ut(e,r),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,nt(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(lt(e))return null;{const r=rt(e),i=this.children.get(r);return i?i.findOnPath_(st(e),ut(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,nt(),t)}foreachOnPath_(e,t,n){if(lt(e))return this;{this.value&&n(t,this.value);const r=rt(e),i=this.children.get(r);return i?i.foreachOnPath_(st(e),ut(t,r),n):new Hn(null)}}foreach(e){this.foreach_(nt(),e)}foreach_(e,t){this.children.inorderTraversal((n,r)=>{r.foreach_(ut(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.writeTree_=e}static empty(){return new Gn(new Hn(null))}}function Qn(e,t,n){if(lt(t))return new Gn(new Hn(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let s=r.value;const o=ht(i,t);return s=s.updateChild(o,n),new Gn(e.writeTree_.set(i,s))}{const r=new Hn(n),i=e.writeTree_.setTree(t,r);return new Gn(i)}}}function Yn(e,t,n){let r=e;return L(n,(e,n)=>{r=Qn(r,ut(t,e),n)}),r}function Jn(e,t){if(lt(t))return Gn.empty();{const n=e.writeTree_.setTree(t,new Hn(null));return new Gn(n)}}function Xn(e,t){return null!=Zn(e,t)}function Zn(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(ht(n.path,t)):null}function er(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Kt,(e,n)=>{t.push(new kt(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new kt(e,n.value))}),t}function tr(e,t){if(lt(t))return e;{const n=Zn(e,t);return new Gn(null!=n?new Hn(n):e.writeTree_.subtree(t))}}function nr(e){return e.writeTree_.isEmpty()}function rr(e,t){return function e(t,n,r){if(null!=n.value)return r.updateChild(t,n.value);{let i=null;return n.children.inorderTraversal((n,o)=>{".priority"===n?(Object(s.e)(null!==o.value,"Priority writes must always be leaf nodes"),i=o.value):r=e(ut(t,n),o,r)}),r.getChild(t).isEmpty()||null===i||(r=r.updateChild(ut(t,".priority"),i)),r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(nt(),e.writeTree_,t)}function ir(e,t){return yr(t,e)}function sr(e,t){const n=e.allWrites.findIndex(e=>e.writeId===t);Object(s.e)(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,o=!1,a=e.allWrites.length-1;for(;i&&a>=0;){const t=e.allWrites[a];t.visible&&(a>=n&&or(t,r.path)?i=!1:pt(r.path,t.path)&&(o=!0)),a--}if(i){if(o)return function(e){e.visibleWrites=cr(e.allWrites,ar,nt()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=Jn(e.visibleWrites,r.path);else{L(r.children,t=>{e.visibleWrites=Jn(e.visibleWrites,ut(r.path,t))})}return!0}return!1}function or(e,t){if(e.snap)return pt(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&pt(ut(e.path,n),t))return!0;return!1}function ar(e){return e.visible}function cr(e,t,n){let r=Gn.empty();for(let i=0;i<e.length;++i){const o=e[i];if(t(o)){const e=o.path;let t;if(o.snap)pt(n,e)?r=Qn(r,t=ht(n,e),o.snap):pt(e,n)&&(t=ht(e,n),r=Qn(r,nt(),o.snap.getChild(t)));else{if(!o.children)throw Object(s.f)("WriteRecord should have .snap or .children");if(pt(n,e))r=Yn(r,t=ht(n,e),o.children);else if(pt(e,n))if(lt(t=ht(e,n)))r=Yn(r,nt(),o.children);else{const e=Object(s.L)(o.children,rt(t));if(e){const n=e.getChild(st(t));r=Qn(r,nt(),n)}}}}}return r}function ur(e,t,n,r,i){if(r||i){const s=tr(e.visibleWrites,t);if(!i&&nr(s))return n;if(i||null!=n||Xn(s,nt())){const s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(pt(e.path,t)||pt(t,e.path))};return rr(cr(e.allWrites,s,t),n||Jt.EMPTY_NODE)}return null}{const r=Zn(e.visibleWrites,t);if(null!=r)return r;{const r=tr(e.visibleWrites,t);if(nr(r))return n;if(null!=n||Xn(r,nt())){return rr(r,n||Jt.EMPTY_NODE)}return null}}}function lr(e,t,n,r){return ur(e.writeTree,e.treePath,t,n,r)}function hr(e,t){return function(e,t,n){let r=Jt.EMPTY_NODE;const i=Zn(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Kt,(e,t)=>{r=r.updateImmediateChild(e,t)}),r;if(n){const i=tr(e.visibleWrites,t);return n.forEachChild(Kt,(e,t)=>{const n=rr(tr(i,new tt(e)),t);r=r.updateImmediateChild(e,n)}),er(i).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}return er(tr(e.visibleWrites,t)).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}(e.writeTree,e.treePath,t)}function dr(e,t,n,r){return function(e,t,n,r,i){Object(s.e)(r||i,"Either existingEventSnap or existingServerSnap must exist");const o=ut(t,n);if(Xn(e.visibleWrites,o))return null;{const t=tr(e.visibleWrites,o);return nr(t)?i.getChild(n):rr(t,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function fr(e,t){return function(e,t){return Zn(e.visibleWrites,t)}(e.writeTree,ut(e.treePath,t))}function pr(e,t,n,r,i,s){return function(e,t,n,r,i,s,o){let a;const c=tr(e.visibleWrites,t),u=Zn(c,nt());if(null!=u)a=u;else{if(null==n)return[];a=rr(c,n)}if((a=a.withIndex(o)).isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let c=n.getNext();for(;c&&e.length<i;)0!==t(c,r)&&e.push(c),c=n.getNext();return e}}(e.writeTree,e.treePath,t,n,r,i,s)}function mr(e,t,n){return function(e,t,n,r){const i=ut(t,n),s=Zn(e.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n))return rr(tr(e.visibleWrites,i),r.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function gr(e,t){return yr(ut(e.treePath,t),e.writeTree)}function yr(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Object(s.e)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Object(s.e)(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,hn(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,ln(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,un(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw Object(s.f)("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,hn(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class wr{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Mn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return mr(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Kn(this.viewCache_),i=pr(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(e,t,n,r,i){const o=new vr;let a,c;if(n.type===xn.OVERWRITE){const u=n;u.source.fromUser?a=Er(e,t,u.path,u.snap,r,i,o):(Object(s.e)(u.source.fromServer,"Unknown source."),c=u.source.tagged||t.serverCache.isFiltered()&&!lt(u.path),a=Tr(e,t,u.path,u.snap,r,i,c,o))}else if(n.type===xn.MERGE){const u=n;u.source.fromUser?a=function(e,t,n,r,i,s,o){let a=t;return r.foreach((r,c)=>{const u=ut(n,r);Cr(t,rt(u))&&(a=Er(e,a,u,c,i,s,o))}),r.foreach((r,c)=>{const u=ut(n,r);Cr(t,rt(u))||(a=Er(e,a,u,c,i,s,o))}),a}(e,t,u.path,u.children,r,i,o):(Object(s.e)(u.source.fromServer,"Unknown source."),c=u.source.tagged||t.serverCache.isFiltered(),a=kr(e,t,u.path,u.children,r,i,c,o))}else if(n.type===xn.ACK_USER_WRITE){const c=n;a=c.revert?function(e,t,n,r,i,o){let a;if(null!=fr(r,n))return t;{const c=new wr(r,t,i),u=t.eventCache.getNode();let l;if(lt(n)||".priority"===rt(n)){let n;if(t.serverCache.isFullyInitialized())n=lr(r,Kn(t));else{const e=t.serverCache.getNode();Object(s.e)(e instanceof Jt,"serverChildren would be complete if leaf node"),n=hr(r,e)}n=n,l=e.filter.updateFullNode(u,n,o)}else{const i=rt(n);let s=mr(r,i,t.serverCache);null==s&&t.serverCache.isCompleteForChild(i)&&(s=u.getImmediateChild(i)),(l=null!=s?e.filter.updateChild(u,i,s,st(n),c,o):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(u,i,Jt.EMPTY_NODE,st(n),c,o):u).isEmpty()&&t.serverCache.isFullyInitialized()&&(a=lr(r,Kn(t))).isLeafNode()&&(l=e.filter.updateFullNode(l,a,o))}return a=t.serverCache.isFullyInitialized()||null!=fr(r,nt()),qn(t,l,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,c.path,r,i,o):function(e,t,n,r,i,s,o){if(null!=fr(i,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=r.value){if(lt(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Tr(e,t,n,c.getNode().getChild(n),i,s,a,o);if(lt(n)){let r=new Hn(null);return c.getNode().forEachChild(xt,(e,t)=>{r=r.set(new tt(e),t)}),kr(e,t,n,r,i,s,a,o)}return t}{let u=new Hn(null);return r.foreach((e,t)=>{const r=ut(n,e);c.isCompleteForPath(r)&&(u=u.set(e,c.getNode().getChild(r)))}),kr(e,t,n,u,i,s,a,o)}}(e,t,c.path,c.affectedTree,r,i,o)}else{if(n.type!==xn.LISTEN_COMPLETE)throw Object(s.f)("Unknown operation type: "+n.type);a=function(e,t,n,r,i){const s=t.serverCache,o=$n(t,s.getNode(),s.isFullyInitialized()||lt(n),s.isFiltered());return Ir(e,o,n,r,_r,i)}(e,t,n.path,r,o)}const u=o.getChanges();return function(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Bn(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(cn(Bn(t)))}}(t,a,u),{viewCache:a,changes:u}}function Ir(e,t,n,r,i,o){const a=t.eventCache;if(null!=fr(r,n))return t;{let c,u;if(lt(n))if(Object(s.e)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Kn(t),i=hr(r,n instanceof Jt?n:Jt.EMPTY_NODE);c=e.filter.updateFullNode(t.eventCache.getNode(),i,o)}else{const n=lr(r,Kn(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const l=rt(n);if(".priority"===l){Object(s.e)(1===it(n),"Can't have a priority with additional path components");const i=a.getNode(),o=dr(r,n,i,u=t.serverCache.getNode());c=null!=o?e.filter.updatePriority(i,o):a.getNode()}else{const s=st(n);let h;if(a.isCompleteForChild(l)){u=t.serverCache.getNode();const e=dr(r,n,a.getNode(),u);h=null!=e?a.getNode().getImmediateChild(l).updateChild(s,e):a.getNode().getImmediateChild(l)}else h=mr(r,l,t.serverCache);c=null!=h?e.filter.updateChild(a.getNode(),l,h,s,i,o):a.getNode()}}return qn(t,c,a.isFullyInitialized()||lt(n),e.filter.filtersNodes())}}function Tr(e,t,n,r,i,s,o,a){const c=t.serverCache;let u;const l=o?e.filter:e.filter.getIndexedFilter();if(lt(n))u=l.updateFullNode(c.getNode(),r,null);else if(l.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,r);u=l.updateFullNode(c.getNode(),e,null)}else{const e=rt(n);if(!c.isCompleteForPath(n)&&it(n)>1)return t;const i=st(n),s=c.getNode().getImmediateChild(e).updateChild(i,r);u=".priority"===e?l.updatePriority(c.getNode(),s):l.updateChild(c.getNode(),e,s,i,_r,null)}const h=$n(t,u,c.isFullyInitialized()||lt(n),l.filtersNodes());return Ir(e,h,n,i,new wr(i,h,s),a)}function Er(e,t,n,r,i,s,o){const a=t.eventCache;let c,u;const l=new wr(i,t,s);if(lt(n))c=qn(t,u=e.filter.updateFullNode(t.eventCache.getNode(),r,o),!0,e.filter.filtersNodes());else{const i=rt(n);if(".priority"===i)c=qn(t,u=e.filter.updatePriority(t.eventCache.getNode(),r),a.isFullyInitialized(),a.isFiltered());else{const s=st(n),u=a.getNode().getImmediateChild(i);let h;if(lt(s))h=r;else{const e=l.getCompleteChild(i);h=null!=e?".priority"===ot(s)&&e.getChild(ct(s)).isEmpty()?e:e.updateChild(s,r):Jt.EMPTY_NODE}if(u.equals(h))c=t;else{c=qn(t,e.filter.updateChild(a.getNode(),i,h,s,l,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function Cr(e,t){return e.eventCache.isCompleteForChild(t)}function Sr(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function kr(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,u=t;c=lt(n)?r:new Hn(null).setTree(n,r);const l=t.serverCache.getNode();return c.children.inorderTraversal((n,r)=>{if(l.hasChild(n)){const c=Sr(0,t.serverCache.getNode().getImmediateChild(n),r);u=Tr(e,u,new tt(n),c,i,s,o,a)}}),c.children.inorderTraversal((n,r)=>{const c=!t.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!l.hasChild(n)&&!c){const c=Sr(0,t.serverCache.getNode().getImmediateChild(n),r);u=Tr(e,u,new tt(n),c,i,s,o,a)}}),u}class Or{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new dn(n.getIndex()),i=(s=n).loadsAllData()?new dn(s.getIndex()):s.hasLimit()?new pn(s):new fn(s);var s;this.processor_=function(e){return{filter:e}}(i);const o=t.serverCache,a=t.eventCache,c=r.updateFullNode(Jt.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(Jt.EMPTY_NODE,a.getNode(),null),l=new Mn(c,o.isFullyInitialized(),r.filtersNodes()),h=new Mn(u,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=Vn(h,l),this.eventGenerator_=new Fn(this.query_)}get query(){return this.query_}}function Ar(e,t){const n=Kn(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!lt(t)&&!n.getImmediateChild(rt(t)).isEmpty())?n.getChild(t):null}function Nr(e){return 0===e.eventRegistrations_.length}function xr(e,t,n){const r=[];if(n){Object(s.e)(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)})}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function Rr(e,t,n,r){t.type===xn.MERGE&&null!==t.source.queryId&&(Object(s.e)(Kn(e.viewCache_),"We should always have a full cache before handling merges"),Object(s.e)(Bn(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,o=br(e.processor_,i,t,n,r);var a,c;return a=e.processor_,c=o.viewCache,Object(s.e)(c.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),Object(s.e)(c.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed"),Object(s.e)(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,Pr(e,o.changes,o.viewCache.eventCache.getNode(),null)}function Pr(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){const i=[],s=[];var o;return t.forEach(t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((o=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:o}))}),Un(e,i,"child_removed",t,r,n),Un(e,i,"child_added",t,r,n),Un(e,i,"child_moved",s,r,n),Un(e,i,"child_changed",t,r,n),Un(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dr,Lr;class jr{constructor(){this.views=new Map}}function Mr(e,t,n,r){const i=t.source.queryId;if(null!==i){const o=e.views.get(i);return Object(s.e)(null!=o,"SyncTree gave us an op for an invalid query."),Rr(o,t,n,r)}{let i=[];for(const s of e.views.values())i=i.concat(Rr(s,t,n,r));return i}}function Fr(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=lr(n,i?r:null),s=!1;e?s=!0:r instanceof Jt?(e=hr(n,r),s=!1):(e=Jt.EMPTY_NODE,s=!1);const o=Vn(new Mn(e,s,!1),new Mn(r,i,!1));return new Or(t,o)}return o}function Ur(e,t,n,r,i,s){const o=Fr(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,r=[];n.getNode().isLeafNode()||n.getNode().forEachChild(Kt,(e,t)=>{r.push(un(e,t))});return n.isFullyInitialized()&&r.push(cn(n.getNode())),Pr(e,r,n.getNode(),t)}(o,n)}function Vr(e,t,n,r){const i=t._queryIdentifier,o=[];let a=[];const c=zr(e);if("default"===i)for(const[t,i]of e.views.entries())a=a.concat(xr(i,n,r)),Nr(i)&&(e.views.delete(t),i.query._queryParams.loadsAllData()||o.push(i.query));else{const t=e.views.get(i);t&&(a=a.concat(xr(t,n,r)),Nr(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||o.push(t.query)))}return c&&!zr(e)&&o.push(new(Object(s.e)(Dr,"Reference.ts has not been loaded"),Dr)(t._repo,t._path)),{removed:o,events:a}}function qr(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function $r(e,t){let n=null;for(const r of e.views.values())n=n||Ar(r,t);return n}function Br(e,t){if(t._queryParams.loadsAllData())return Wr(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Kr(e,t){return null!=Br(e,t)}function zr(e){return null!=Wr(e)}function Wr(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hr=1;class Gr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Hn(null),this.pendingWriteTree_={visibleWrites:Gn.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Qr(e,t,n,r,i){return function(e,t,n,r,i){Object(s.e)(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Qn(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?ri(e,new Ln({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Yr(e,t,n,r){!function(e,t,n,r){Object(s.e)(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=Yn(e.visibleWrites,t,n),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r);const i=Hn.fromObject(n);return ri(e,new jn({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,i))}function Jr(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if(sr(e.pendingWriteTree_,t)){let t=new Hn(null);return null!=r.snap?t=t.set(nt(),!0):L(r.children,e=>{t=t.set(new tt(e),!0)}),ri(e,new Pn(r.path,t,n))}return[]}function Xr(e,t,n){return ri(e,new Ln({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Zr(e,t,n,r){const i=t._path,s=e.syncPointTree_.get(i);let o=[];if(s&&("default"===t._queryIdentifier||Kr(s,t))){const a=Vr(s,t,n,r);0===s.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(i));const c=a.removed;o=a.events;const u=-1!==c.findIndex(e=>e._queryParams.loadsAllData()),l=e.syncPointTree_.findOnPath(i,(e,t)=>zr(t));if(u&&!l){const t=e.syncPointTree_.subtree(i);if(!t.isEmpty()){const n=t.fold((e,t,n)=>{if(t&&zr(t)){const e=Wr(t);return[e]}{let e=[];return t&&(e=qr(t)),L(n,(t,n)=>{e=e.concat(n)}),e}});for(let t=0;t<n.length;++t){const r=n[t],i=r.query,s=ii(e,r);e.listenProvider_.startListening(li(i),si(e,i),s.hashFn,s.onComplete)}}}if(!l&&c.length>0&&!r)if(u){const n=null;e.listenProvider_.stopListening(li(t),n)}else c.forEach(t=>{const n=e.queryToTagMap.get(oi(t));e.listenProvider_.stopListening(li(t),n)});!function(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=oi(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return o}function ei(e,t,n){const r=t._path;let i=null,o=!1;e.syncPointTree_.foreachOnPath(r,(e,t)=>{const n=ht(e,r);i=i||$r(t,n),o=o||zr(t)});let a,c=e.syncPointTree_.get(r);if(c?(o=o||zr(c),i=i||$r(c,nt())):(c=new jr,e.syncPointTree_=e.syncPointTree_.set(r,c)),null!=i)a=!0;else{a=!1,i=Jt.EMPTY_NODE,e.syncPointTree_.subtree(r).foreachChild((e,t)=>{const n=$r(t,nt());n&&(i=i.updateImmediateChild(e,n))})}const u=Kr(c,t);if(!u&&!t._queryParams.loadsAllData()){const n=oi(t);Object(s.e)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=Hr++;e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}let l=Ur(c,t,n,ir(e.pendingWriteTree_,r),i,a);if(!u&&!o){const n=Br(c,t);l=l.concat(function(e,t,n){const r=t._path,i=si(e,t),o=ii(e,n),a=e.listenProvider_.startListening(li(t),i,o.hashFn,o.onComplete),c=e.syncPointTree_.subtree(r);if(i)Object(s.e)(!zr(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold((e,t,n)=>{if(!lt(e)&&t&&zr(t))return[Wr(t).query];{let e=[];return t&&(e=e.concat(qr(t).map(e=>e.query))),L(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(li(r),si(e,r))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return l}function ti(e,t,n){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,(e,n)=>{const r=$r(n,ht(e,t));if(r)return r});return ur(r,t,i,n,!0)}function ni(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,(e,t)=>{const i=ht(e,n);r=r||$r(t,i)});let i=e.syncPointTree_.get(n);i?r=r||$r(i,nt()):(i=new jr,e.syncPointTree_=e.syncPointTree_.set(n,i));const s=null!=r,o=s?new Mn(r,!0,!1):null;return function(e){return Bn(e.viewCache_)}(Fr(i,t,ir(e.pendingWriteTree_,t._path),s?o.getNode():Jt.EMPTY_NODE,s))}function ri(e,t){return function e(t,n,r,i){if(lt(t.path))return function e(t,n,r,i){const s=n.get(nt());null==r&&null!=s&&(r=$r(s,nt()));let o=[];n.children.inorderTraversal((n,s)=>{const a=r?r.getImmediateChild(n):null,c=gr(i,n),u=t.operationForChild(n);u&&(o=o.concat(e(u,s,a,c)))});s&&(o=o.concat(Mr(s,t,i,r)));return o}(t,n,r,i);{const s=n.get(nt());null==r&&null!=s&&(r=$r(s,nt()));let o=[];const a=rt(t.path),c=t.operationForChild(a),u=n.children.get(a);if(u&&c){const t=r?r.getImmediateChild(a):null,n=gr(i,a);o=o.concat(e(c,u,t,n))}return s&&(o=o.concat(Mr(s,t,i,r))),o}}(t,e.syncPointTree_,null,ir(e.pendingWriteTree_,nt()))}function ii(e,t){const n=t.query,r=si(e,n);return{hashFn:()=>{return(function(e){return e.viewCache_.serverCache.getNode()}(t)||Jt.EMPTY_NODE).hash()},onComplete:t=>{if("ok"===t)return r?function(e,t,n){const r=ai(e,n);if(r){const n=ci(r),i=n.path,s=n.queryId,o=ht(i,t);return ui(e,i,new Dn(Rn(s),o))}return[]}(e,n._path,r):function(e,t){return ri(e,new Dn({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const r=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return Zr(e,n,null,r)}}}}function si(e,t){const n=oi(t);return e.queryToTagMap.get(n)}function oi(e){return e._path.toString()+"$"+e._queryIdentifier}function ai(e,t){return e.tagToQueryMap.get(t)}function ci(e){const t=e.indexOf("$");return Object(s.e)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new tt(e.substr(0,t))}}function ui(e,t,n){const r=e.syncPointTree_.get(t);return Object(s.e)(r,"Missing sync point for query tag that we're tracking"),Mr(r,n,ir(e.pendingWriteTree_,t),null)}function li(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Object(s.e)(Lr,"Reference.ts has not been loaded"),Lr)(e._repo,e._path):e}class hi{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new hi(t)}node(){return this.node_}}class di{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ut(this.path_,e);return new di(this.syncTree_,t)}node(){return ti(this.syncTree_,this.path_)}}const fi=function(e){return(e=e||{}).timestamp=e.timestamp||(new Date).getTime(),e},pi=function(e,t,n){return e&&"object"==typeof e?(Object(s.e)(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?mi(e[".sv"],t,n):"object"==typeof e[".sv"]?gi(e[".sv"],t):void Object(s.e)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},mi=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:Object(s.e)(!1,"Unexpected server value: "+e)}},gi=function(e,t,n){e.hasOwnProperty("increment")||Object(s.e)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&Object(s.e)(!1,"Unexpected increment value: "+r);const i=t.node();if(Object(s.e)(null!==i&&void 0!==i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return"number"!=typeof o?r:o+r},yi=function(e,t,n,r){return _i(t,new di(n,e),r)},vi=function(e,t,n){return _i(e,new hi(t),n)};function _i(e,t,n){const r=e.getPriority().val(),i=pi(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const r=e,s=pi(r.getValue(),t,n);return s!==r.getValue()||i!==r.getPriority().val()?new Bt(s,en(i)):e}{const r=e;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new Bt(i))),r.forEachChild(Kt,(e,r)=>{const i=_i(r,t.getImmediateChild(e),n);i!==r&&(s=s.updateImmediateChild(e,i))}),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function bi(e,t){let n=t instanceof tt?t:new tt(t),r=e,i=rt(n);for(;null!==i;){const e=Object(s.L)(r.node.children,i)||{children:{},childCount:0};r=new wi(i,r,e),i=rt(n=st(n))}return r}function Ii(e){return e.node.value}function Ti(e,t){e.node.value=t,ki(e)}function Ei(e){return e.node.childCount>0}function Ci(e,t){L(e.node.children,(n,r)=>{t(new wi(n,e,r))})}function Si(e){return new tt(null===e.parent?e.name:Si(e.parent)+"/"+e.name)}function ki(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===Ii(e)&&!Ei(e)}(n),i=Object(s.j)(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,ki(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,ki(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const Oi=/[\[\].#$\/\u0000-\u001F\u007F]/,Ai=/[\[\].#$\u0000-\u001F\u007F]/,Ni=function(e){return"string"==typeof e&&0!==e.length&&!Oi.test(e)},xi=function(e){return"string"==typeof e&&0!==e.length&&!Ai.test(e)},Ri=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!S(e)||e&&"object"==typeof e&&Object(s.j)(e,".sv")},Pi=function(e,t,n,r){r&&void 0===t||Di(Object(s.p)(e,"value"),t,n)},Di=function(e,t,n){const r=n instanceof tt?new class{constructor(e,t){this.errorPrefix_=t,this.parts_=at(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=Object(s.M)(this.parts_[e]);mt(this)}}(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+gt(r));if("function"==typeof t)throw new Error(e+"contains a function "+gt(r)+" with contents = "+t.toString());if(S(t))throw new Error(e+"contains "+t.toString()+" "+gt(r));if("string"==typeof t&&t.length>10485760/3&&Object(s.M)(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+gt(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,a=!1;if(L(t,(t,c)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(a=!0,!Ni(t)))throw new Error(e+" contains an invalid key ("+t+") "+gt(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');o=t,(i=r).parts_.length>0&&(i.byteLength_+=1),i.parts_.push(o),i.byteLength_+=Object(s.M)(o),mt(i),Di(e,c,r),function(e){const t=e.parts_.pop();e.byteLength_-=Object(s.M)(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)}),n&&a)throw new Error(e+' contains ".value" child '+gt(r)+" in addition to actual children.")}var i,o},Li=function(e,t,n,r){if(r&&void 0===t)return;const i=Object(s.p)(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");const o=[];L(t,(e,t)=>{const r=new tt(e);if(Di(i,t,ut(n,r)),".priority"===ot(r)&&!Ri(t))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(r)}),function(e,t){let n,r;for(n=0;n<t.length;n++){const i=at(r=t[n]);for(let t=0;t<i.length;t++)if(".priority"===i[t]&&t===i.length-1);else if(!Ni(i[t]))throw new Error(e+"contains an invalid key ("+i[t]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(dt);let i=null;for(n=0;n<t.length;n++){if(r=t[n],null!==i&&pt(i,r))throw new Error(e+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}}(i,o)},ji=function(e,t,n){if(!n||void 0!==t){if(S(t))throw new Error(Object(s.p)(e,"priority")+"is "+t.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Ri(t))throw new Error(Object(s.p)(e,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},Mi=function(e,t,n,r){if(!(r&&void 0===n||Ni(n)))throw new Error(Object(s.p)(e,t)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},Fi=function(e,t,n,r){if(!(r&&void 0===n||xi(n)))throw new Error(Object(s.p)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Ui=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Fi(e,t,n,r)},Vi=function(e,t){if(".info"===rt(t))throw new Error(e+" failed = Can't modify data under /.info/")},qi=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Ni(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),xi(e)}(n))throw new Error(Object(s.p)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $i{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Bi(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();null===n||ft(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function Ki(e,t,n){Bi(e,n),Wi(e,e=>ft(e,t))}function zi(e,t,n){Bi(e,n),Wi(e,e=>pt(e,t)||pt(t,e))}function Wi(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){t(i.path)?(Hi(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Hi(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();v&&b("event: "+n.toString()),q(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi="repo_interrupt",Qi=25;class Yi{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $i,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Tn(),this.transactionQueueTree_=new wi,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ji(e,t,n){if(e.stats_=ue(e.repoInfo_),e.forceRestClient_||$())e.server_=new bn(e.repoInfo_,(t,n,r,i)=>{es(e,t,n,r,i)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>ts(e,!0),0);else{if(void 0!==n&&null!==n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(s.O)(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new St(e.repoInfo_,t,(t,n,r,i)=>{es(e,t,n,r,i)},t=>{ts(e,t)},t=>{!function(e,t){L(t,(t,n)=>{ns(e,t,n)})}(e,t)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=function(e,t){const n=e.toString();return ce[n]||(ce[n]=t()),ce[n]}(e.repoInfo_,()=>new Nn(e.stats_,e.server_)),e.infoData_=new In,e.infoSyncTree_=new Gr({startListening:(t,n,r,i)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Xr(e.infoSyncTree_,t._path,o),setTimeout(()=>{i("ok")},0)),s},stopListening:()=>{}}),ns(e,"connected",!1),e.serverSyncTree_=new Gr({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,(n,r)=>{const s=i(n,r);zi(e.eventQueue_,t._path,s)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Xi(e){const t=e.infoData_.getNode(new tt(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Zi(e){return fi({timestamp:Xi(e)})}function es(e,t,n,r,i){e.dataUpdateCount++;const o=new tt(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(i)if(r){const t=Object(s.I)(n,e=>en(e));a=function(e,t,n,r){const i=ai(e,r);if(i){const r=ci(i),s=r.path,o=r.queryId,a=ht(s,t),c=Hn.fromObject(n);return ui(e,s,new jn(Rn(o),a,c))}return[]}(e.serverSyncTree_,o,t,i)}else{const t=en(n);a=function(e,t,n,r){const i=ai(e,r);if(null!=i){const r=ci(i),s=r.path,o=r.queryId,a=ht(s,t);return ui(e,s,new Ln(Rn(o),a,n))}return[]}(e.serverSyncTree_,o,t,i)}else if(r){const t=Object(s.I)(n,e=>en(e));a=function(e,t,n){const r=Hn.fromObject(n);return ri(e,new jn({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,o,t)}else{const t=en(n);a=Xr(e.serverSyncTree_,o,t)}let c=o;a.length>0&&(c=fs(e,o)),zi(e.eventQueue_,c,a)}function ts(e,t){ns(e,"connected",t),!1===t&&function(e){us(e,"onDisconnectEvents");const t=Zi(e),n=Tn();Cn(e.onDisconnect_,nt(),(r,i)=>{const s=yi(r,i,e.serverSyncTree_,t);En(n,r,s)});let r=[];Cn(n,nt(),(t,n)=>{r=r.concat(Xr(e.serverSyncTree_,t,n));const i=ys(e,t);fs(e,i)}),e.onDisconnect_=Tn(),zi(e.eventQueue_,nt(),r)}(e)}function ns(e,t,n){const r=new tt("/.info/"+t),i=en(n);e.infoData_.updateSnapshot(r,i);const s=Xr(e.infoSyncTree_,r,i);zi(e.eventQueue_,r,s)}function rs(e){return e.nextWriteId_++}function is(e,t,n,r,i){us(e,"set",{path:t.toString(),value:n,priority:r});const s=Zi(e),o=en(n,r),a=ti(e.serverSyncTree_,t),c=vi(o,a,s),u=rs(e),l=Qr(e.serverSyncTree_,t,c,u,!0);Bi(e.eventQueue_,l),e.server_.put(t.toString(),o.val(!0),(n,r)=>{const s="ok"===n;s||C("set at "+t+" failed: "+n);const o=Jr(e.serverSyncTree_,u,!s);zi(e.eventQueue_,t,o),ls(e,i,n,r)});const h=ys(e,t);fs(e,h),zi(e.eventQueue_,h,[])}function ss(e,t,n){e.server_.onDisconnectCancel(t.toString(),(r,i)=>{"ok"===r&&function e(t,n){if(lt(n))return t.value=null,t.children.clear(),!0;if(null!==t.value){if(t.value.isLeafNode())return!1;{const r=t.value;return t.value=null,r.forEachChild(Kt,(e,n)=>{En(t,new tt(e),n)}),e(t,n)}}if(t.children.size>0){const r=rt(n);return n=st(n),t.children.has(r)&&e(t.children.get(r),n)&&t.children.delete(r),0===t.children.size}return!0}(e.onDisconnect_,t),ls(e,n,r,i)})}function os(e,t,n,r){const i=en(n);e.server_.onDisconnectPut(t.toString(),i.val(!0),(n,s)=>{"ok"===n&&En(e.onDisconnect_,t,i),ls(e,r,n,s)})}function as(e,t,n){let r;r=".info"===rt(t._path)?Zr(e.infoSyncTree_,t,n):Zr(e.serverSyncTree_,t,n),Ki(e.eventQueue_,t._path,r)}function cs(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Gi)}function us(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),b(n,...t)}function ls(e,t,n,r){t&&q(()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const s=new Error(i);s.code=e,t(s)}})}function hs(e,t,n){return ti(e.serverSyncTree_,t,n)||Jt.EMPTY_NODE}function ds(e,t=e.transactionQueueTree_){if(t||gs(e,t),Ii(t)){const n=ms(e,t);Object(s.e)(n.length>0,"Sending zero length transaction queue"),n.every(e=>0===e.status)&&function(e,t,n){const r=n.map(e=>e.currentWriteId),i=hs(e,t,r);let o=i;const a=i.hash();for(let e=0;e<n.length;e++){const r=n[e];Object(s.e)(0===r.status,"tryToSendTransactionQueue_: items in queue should all be run."),r.status=1,r.retryCount++;const i=ht(t,r.path);o=o.updateChild(i,r.currentOutputSnapshotRaw)}const c=o.val(!0),u=t;e.server_.put(u.toString(),c,r=>{us(e,"transaction put response",{path:u.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(Jr(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push(()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)),n[t].unwatcher();gs(e,bi(e.transactionQueueTree_,t)),ds(e,e.transactionQueueTree_),zi(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)q(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{C("transaction at "+u.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}fs(e,t)}},a)}(e,Si(t),n)}else Ei(t)&&Ci(t,t=>{ds(e,t)})}function fs(e,t){const n=ps(e,t),r=Si(n);return function(e,t,n){if(0===t.length)return;const r=[];let i=[];const o=t.filter(e=>0===e.status).map(e=>e.currentWriteId);for(let c=0;c<t.length;c++){const u=t[c],l=ht(n,u.path);let h,d=!1;if(Object(s.e)(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===u.status)d=!0,h=u.abortReason,i=i.concat(Jr(e.serverSyncTree_,u.currentWriteId,!0));else if(0===u.status)if(u.retryCount>=Qi)d=!0,h="maxretry",i=i.concat(Jr(e.serverSyncTree_,u.currentWriteId,!0));else{const n=hs(e,u.path,o);u.currentInputSnapshot=n;const r=t[c].update(n.val());if(void 0!==r){Di("transaction failed: Data returned ",r,u.path);let t=en(r);const a="object"==typeof r&&null!=r&&Object(s.j)(r,".priority");a||(t=t.updatePriority(n.getPriority()));const c=u.currentWriteId,l=Zi(e),h=vi(t,n,l);u.currentOutputSnapshotRaw=t,u.currentOutputSnapshotResolved=h,u.currentWriteId=rs(e),o.splice(o.indexOf(c),1),i=(i=i.concat(Qr(e.serverSyncTree_,u.path,h,u.currentWriteId,u.applyLocally))).concat(Jr(e.serverSyncTree_,c,!0))}else d=!0,h="nodata",i=i.concat(Jr(e.serverSyncTree_,u.currentWriteId,!0))}zi(e.eventQueue_,n,i),i=[],d&&(t[c].status=2,a=t[c].unwatcher,setTimeout(a,Math.floor(0)),t[c].onComplete&&("nodata"===h?r.push(()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot)):r.push(()=>t[c].onComplete(new Error(h),!1,null))))}var a;gs(e,e.transactionQueueTree_);for(let e=0;e<r.length;e++)q(r[e]);ds(e,e.transactionQueueTree_)}(e,ms(e,n),r),r}function ps(e,t){let n,r=e.transactionQueueTree_;for(n=rt(t);null!==n&&void 0===Ii(r);)r=bi(r,n),n=rt(t=st(t));return r}function ms(e,t){const n=[];return function e(t,n,r){const i=Ii(n);if(i)for(let e=0;e<i.length;e++)r.push(i[e]);Ci(n,n=>{e(t,n,r)})}(e,t,n),n.sort((e,t)=>e.order-t.order),n}function gs(e,t){const n=Ii(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Ti(t,n.length>0?n:void 0)}Ci(t,t=>{gs(e,t)})}function ys(e,t){const n=Si(ps(e,t)),r=bi(e.transactionQueueTree_,t);return function(e,t,n){let r=n?e:e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,t=>{vs(e,t)}),vs(e,r),function e(t,n,r,i){r&&!i&&n(t),Ci(t,t=>{e(t,n,!0,i)}),r&&i&&n(t)}(r,t=>{vs(e,t)}),n}function vs(e,t){const n=Ii(t);if(n){const r=[];let i=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Object(s.e)(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(Object(s.e)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(Jr(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Ti(t,void 0):n.length=o+1,zi(e.eventQueue_,Si(t),i);for(let e=0;e<r.length;e++)q(r[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=function(e,t){const n=ws(e),r=n.namespace;"firebase.com"===n.domain&&E(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||E("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&C("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ie(n.host,n.secure,r,t,i,"",r!==n.subdomain),path:new tt(n.pathString)}},ws=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",c=443;if("string"==typeof e){let u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));let l=e.indexOf("/");-1===l&&(l=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(l,h)),l<h&&(i=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let r=n[e];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(e){}t+="/"+r}return t}(e.substring(l,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):C(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));(u=t.indexOf(":"))>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(u+1),10)):u=t.length;const f=t.slice(0,u);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in d&&(s=d.ns)}return{host:t,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bs{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Object(s.O)(this.snapshot.exportVal())}}class Is{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Object(s.e)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new s.a;return ss(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Vi("OnDisconnect.remove",this._path);const e=new s.a;return os(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Vi("OnDisconnect.set",this._path),Pi("OnDisconnect.set",e,this._path,!1);const t=new s.a;return os(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Vi("OnDisconnect.setWithPriority",this._path),Pi("OnDisconnect.setWithPriority",e,this._path,!1),ji("OnDisconnect.setWithPriority",t,!1);const n=new s.a;return function(e,t,n,r,i){const s=en(n,r);e.server_.onDisconnectPut(t.toString(),s.val(!0),(n,r)=>{"ok"===n&&En(e.onDisconnect_,t,s),ls(0,i,n,r)})}(this._repo,this._path,e,t,n.wrapCallback(()=>{})),n.promise}update(e){Vi("OnDisconnect.update",this._path),Li("OnDisconnect.update",e,this._path,!1);const t=new s.a;return function(e,t,n,r){if(Object(s.x)(n))return b("onDisconnect().update() called with empty data.  Don't do anything."),void ls(0,r,"ok",void 0);e.server_.onDisconnectMerge(t.toString(),n,(i,s)=>{"ok"===i&&L(n,(n,r)=>{const i=en(r);En(e.onDisconnect_,ut(t,n),i)}),ls(0,r,i,s)})}(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return lt(this._path)?null:ot(this._path)}get ref(){return new As(this._repo,this._path)}get _queryIdentifier(){const e=wn(this._queryParams),t=P(e);return"{}"===t?"default":t}get _queryObject(){return wn(this._queryParams)}isEqual(e){if(!((e=Object(s.r)(e))instanceof Cs))return!1;const t=this._repo===e._repo,n=ft(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}function Ss(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}function ks(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===xt){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){if(e.getIndexStartName()!==O)throw new Error(r);if("string"!=typeof t)throw new Error(i)}if(e.hasEnd()){if(e.getIndexEndName()!==A)throw new Error(r);if("string"!=typeof n)throw new Error(i)}}else if(e.getIndex()===Kt){if(null!=t&&!Ri(t)||null!=n&&!Ri(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(Object(s.e)(e.getIndex()instanceof tn||e.getIndex()===nn,"unknown index type."),null!=t&&"object"==typeof t||null!=n&&"object"==typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Os(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class As extends Cs{constructor(e,t){super(e,t,new mn,!1)}get parent(){const e=ct(this._path);return null===e?null:new As(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class Ns{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new tt(e),n=Ps(this.ref,e);return new Ns(this._node.getChild(t),n,Kt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,(t,n)=>e(new Ns(n,Ps(this.ref,t),Kt)))}hasChild(e){const t=new tt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function xs(e,t){return(e=Object(s.r)(e))._checkNotDeleted("ref"),void 0!==t?Ps(e._root,t):e._root}function Rs(e,t){(e=Object(s.r)(e))._checkNotDeleted("refFromURL");const n=_s(t,e._repo.repoInfo_.nodeAdmin);qi("refFromURL",n);const r=n.repoInfo;return e._repo.repoInfo_.isCustomHost()||r.host===e._repo.repoInfo_.host||E("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+e._repo.repoInfo_.host+")"),xs(e,n.path.toString())}function Ps(e,t){return null===rt((e=Object(s.r)(e))._path)?Ui("child","path",t,!1):Fi("child","path",t,!1),new As(e._repo,ut(e._path,t))}function Ds(e,t){e=Object(s.r)(e),Vi("push",e._path),Pi("push",t,e._path,!0);const n=Xi(e._repo),r=sn(n),i=Ps(e,r),o=Ps(e,r);let a;return a=null!=t?js(o,t).then(()=>o):Promise.resolve(o),i.then=a.then.bind(a),i.catch=a.then.bind(a,void 0),i}function Ls(e){return Vi("remove",e._path),js(e,null)}function js(e,t){e=Object(s.r)(e),Vi("set",e._path),Pi("set",t,e._path,!1);const n=new s.a;return is(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function Ms(e,t){e=Object(s.r)(e),Vi("setPriority",e._path),ji("setPriority",t,!1);const n=new s.a;return is(e._repo,ut(e._path,".priority"),t,null,n.wrapCallback(()=>{})),n.promise}function Fs(e,t,n){if(Vi("setWithPriority",e._path),Pi("setWithPriority",t,e._path,!1),ji("setWithPriority",n,!1),".length"===e.key||".keys"===e.key)throw"setWithPriority failed: "+e.key+" is a read-only object.";const r=new s.a;return is(e._repo,e._path,t,n,r.wrapCallback(()=>{})),r.promise}function Us(e,t){Li("update",t,e._path,!1);const n=new s.a;return function(e,t,n,r){us(e,"update",{path:t.toString(),value:n});let i=!0;const s=Zi(e),o={};if(L(n,(n,r)=>{i=!1,o[n]=yi(ut(t,n),en(r),e.serverSyncTree_,s)}),i)b("update() called with empty data.  Don't do anything."),ls(0,r,"ok",void 0);else{const i=rs(e),s=Yr(e.serverSyncTree_,t,o,i);Bi(e.eventQueue_,s),e.server_.merge(t.toString(),n,(n,s)=>{const o="ok"===n;o||C("update at "+t+" failed: "+n);const a=Jr(e.serverSyncTree_,i,!o),c=a.length>0?fs(e,t):t;zi(e.eventQueue_,c,a),ls(0,r,n,s)}),L(n,n=>{const r=ys(e,ut(t,n));fs(e,r)}),zi(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback(()=>{})),n.promise}function Vs(e){return function(e,t){const n=ni(e.serverSyncTree_,t);return null!=n?Promise.resolve(n):e.server_.get(t).then(n=>{const r=en(n).withIndex(t._queryParams.getIndex()),i=Xr(e.serverSyncTree_,t._path,r);return Ki(e.eventQueue_,t._path,i),Promise.resolve(r)},n=>(us(e,"get for query "+Object(s.O)(t)+" failed: "+n),Promise.reject(new Error(n))))}((e=Object(s.r)(e))._repo,e).then(t=>new Ns(t,new As(e._repo,e._path),e._queryParams.getIndex()))}class qs{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new bs("value",this,new Ns(e.snapshotNode,new As(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Is(this,e,t):null}matches(e){return e instanceof qs&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class $s{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Is(this,e,t):null}createEvent(e,t){Object(s.e)(null!=e.childName,"Child events should have a childName.");const n=Ps(new As(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new bs(e.type,this,new Ns(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof $s&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Bs(e,t,n,r,i){let s;if("object"==typeof r&&(s=void 0,i=r),"function"==typeof r&&(s=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{as(e._repo,e,a),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const o=new Ts(n,s||void 0),a="value"===t?new qs(o):new $s(t,o);return function(e,t,n){let r;r=".info"===rt(t._path)?ei(e.infoSyncTree_,t,n):ei(e.serverSyncTree_,t,n),Ki(e.eventQueue_,t._path,r)}(e._repo,e,a),()=>as(e._repo,e,a)}function Ks(e,t,n,r){return Bs(e,"value",t,n,r)}function zs(e,t,n,r){return Bs(e,"child_added",t,n,r)}function Ws(e,t,n,r){return Bs(e,"child_changed",t,n,r)}function Hs(e,t,n,r){return Bs(e,"child_moved",t,n,r)}function Gs(e,t,n,r){return Bs(e,"child_removed",t,n,r)}function Qs(e,t,n){let r=null;const i=n?new Ts(n):null;"value"===t?r=new qs(i):t&&(r=new $s(t,i)),as(e._repo,e,r)}class Ys{}class Js extends Ys{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Pi("endAt",this._value,e._path,!0);const t=yn(e._queryParams,this._value,this._key);if(Os(t),ks(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Cs(e._repo,e._path,t,e._orderByCalled)}}function Xs(e,t){return Mi("endAt","key",t,!0),new Js(e,t)}class Zs extends Ys{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Pi("endBefore",this._value,e._path,!1);const t=function(e,t,n){let r,i;return e.index_===xt?("string"==typeof t&&(t=an(t)),i=yn(e,t,n)):i=yn(e,t,r=null==n?O:an(n)),i.endBeforeSet_=!0,i}(e._queryParams,this._value,this._key);if(Os(t),ks(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Cs(e._repo,e._path,t,e._orderByCalled)}}function eo(e,t){return Mi("endBefore","key",t,!0),new Zs(e,t)}class to extends Ys{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Pi("startAt",this._value,e._path,!0);const t=gn(e._queryParams,this._value,this._key);if(Os(t),ks(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Cs(e._repo,e._path,t,e._orderByCalled)}}function no(e=null,t){return Mi("startAt","key",t,!0),new to(e,t)}class ro extends Ys{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Pi("startAfter",this._value,e._path,!1);const t=function(e,t,n){let r;if(e.index_===xt)"string"==typeof t&&(t=on(t)),r=gn(e,t,n);else{let i;r=gn(e,t,i=null==n?A:on(n))}return r.startAfterSet_=!0,r}(e._queryParams,this._value,this._key);if(Os(t),ks(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new Cs(e._repo,e._path,t,e._orderByCalled)}}function io(e,t){return Mi("startAfter","key",t,!0),new ro(e,t)}class so extends Ys{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Cs(e._repo,e._path,function(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="l",n}(e._queryParams,this._limit),e._orderByCalled)}}function oo(e){if("number"!=typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new so(e)}class ao extends Ys{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Cs(e._repo,e._path,function(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="r",n}(e._queryParams,this._limit),e._orderByCalled)}}function co(e){if("number"!=typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new ao(e)}class uo extends Ys{constructor(e){super(),this._path=e}_apply(e){Ss(e,"orderByChild");const t=new tt(this._path);if(lt(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new tn(t),r=vn(e._queryParams,n);return ks(r),new Cs(e._repo,e._path,r,!0)}}function lo(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Fi("orderByChild","path",e,!1),new uo(e)}class ho extends Ys{_apply(e){Ss(e,"orderByKey");const t=vn(e._queryParams,xt);return ks(t),new Cs(e._repo,e._path,t,!0)}}function fo(){return new ho}class po extends Ys{_apply(e){Ss(e,"orderByPriority");const t=vn(e._queryParams,Kt);return ks(t),new Cs(e._repo,e._path,t,!0)}}function mo(){return new po}class go extends Ys{_apply(e){Ss(e,"orderByValue");const t=vn(e._queryParams,nn);return ks(t),new Cs(e._repo,e._path,t,!0)}}function yo(){return new go}class vo extends Ys{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(Pi("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Js(this._value,this._key)._apply(new to(this._value,this._key)._apply(e))}}function _o(e,t){return Mi("equalTo","key",t,!0),new vo(e,t)}function wo(e,...t){let n=Object(s.r)(e);for(const e of t)n=e._apply(n);return n}!function(e){Object(s.e)(!Dr,"__referenceConstructor has already been defined"),Dr=e}(As),function(e){Object(s.e)(!Lr,"__referenceConstructor has already been defined"),Lr=e}(As);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bo="FIREBASE_DATABASE_EMULATOR_HOST",Io={};let To=!1;function Eo(t,n,r,i,s){let o=i||t.options.databaseURL;void 0===o&&(t.options.projectId||E("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),b("Using default host for project ",t.options.projectId),o=`${t.options.projectId}-default-rtdb.firebaseio.com`);let a,c=_s(o,s),u=c.repoInfo,l=void 0;void 0!==e&&(l=Object({NODE_ENV:"production"})[bo]),l?(a=!0,o=`http://${l}?ns=${u.namespace}`,u=(c=_s(o,s)).repoInfo):a=!c.repoInfo.secure;const h=s&&a?new W(W.OWNER):new z(t.name,t.options,n);qi("Invalid Firebase Database URL",c),lt(c.path)||E("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,r){let i=Io[t.name];i||(i={},Io[t.name]=i);let s=i[e.toURLString()];s&&E("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new Yi(e,To,n,r),i[e.toURLString()]=s,s}(u,t,h,new K(t.name,r));return new Co(d,t)}class Co{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ji(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new As(this._repo,nt())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Io[t];n&&n[e.key]===e||E(`Database ${t}(${e.repoInfo_}) has already been deleted.`),cs(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&E("Cannot call "+e+" on a deleted database.")}}function So(e,t,n,r={}){(e=Object(s.r)(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&E("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let o=void 0;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&E('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new W(W.OWNER);else if(r.mockUserToken){const t="string"==typeof r.mockUserToken?r.mockUserToken:Object(s.k)(r.mockUserToken,e.app.options.projectId);o=new W(t)}!function(e,t,n,r){e.repoInfo_=new ie(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),r&&(e.authTokenProvider_=r)}(i,t,n,o)}function ko(e){(e=Object(s.r)(e))._checkNotDeleted("goOffline"),cs(e._repo)}function Oo(e){var t;(e=Object(s.r)(e))._checkNotDeleted("goOnline"),(t=e._repo).persistentConnection_&&t.persistentConnection_.resume(Gi)}function Ao(e,t){w(e,t)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const No={".sv":"timestamp"};function xo(){return No}function Ro(e){return{".sv":{increment:e}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function Do(e,t,n){var r;if(e=Object(s.r)(e),Vi("Reference.transaction",e._path),".length"===e.key||".keys"===e.key)throw"Reference.transaction failed: "+e.key+" is a read-only object.";const i=null===(r=null===n||void 0===n?void 0:n.applyLocally)||void 0===r||r,o=new s.a,a=Ks(e,()=>{});return function(e,t,n,r,i,o){us(e,"transaction on "+t);const a={path:t,update:n,onComplete:r,status:null,order:m(),applyLocally:o,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},c=hs(e,t,void 0);a.currentInputSnapshot=c;const u=a.update(c.val());if(void 0===u)a.unwatcher(),a.currentOutputSnapshotRaw=null,a.currentOutputSnapshotResolved=null,a.onComplete&&a.onComplete(null,!1,a.currentInputSnapshot);else{Di("transaction failed: Data returned ",u,a.path),a.status=0;const n=bi(e.transactionQueueTree_,t),r=Ii(n)||[];let i;r.push(a),Ti(n,r),"object"==typeof u&&null!==u&&Object(s.j)(u,".priority")?(i=Object(s.L)(u,".priority"),Object(s.e)(Ri(i),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):i=(ti(e.serverSyncTree_,t)||Jt.EMPTY_NODE).getPriority().val();const o=Zi(e),l=en(u,i),h=vi(l,c,o);a.currentOutputSnapshotRaw=l,a.currentOutputSnapshotResolved=h,a.currentWriteId=rs(e);const d=Qr(e.serverSyncTree_,t,h,a.currentWriteId,a.applyLocally);zi(e.eventQueue_,t,d),ds(e,e.transactionQueueTree_)}}(e._repo,e._path,t,(t,n,r)=>{let i=null;t?o.reject(t):(i=new Ns(r,new As(e._repo,e._path),Kt),o.resolve(new Po(n,i)))},a,i),o.promise}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},St.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};var Lo;l(r.SDK_VERSION),Object(r._registerComponent)(new i.a("database",(e,{instanceIdentifier:t})=>Eo(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t),"PUBLIC").setMultipleInstances(!0)),Object(r.registerVersion)(a,c,Lo),Object(r.registerVersion)(a,c,"esm2017")}).call(t,n("W2nU"))},Rzxn:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r=n("28tl"),i=n("xq9A"),s=n("a7sP"),o=n("gZMR");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,Object(s._addComponent)(e,new i.a("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(s.deleteApp)(this._delegate)))}_getService(e,t=s._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Object(s._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){Object(s._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r.b("app-compat","Firebase",c);const l=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function e(){const t=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){const t={},n={__esModule:!0,initializeApp:function(i,o={}){const a=s.initializeApp(i,o);if(Object(r.j)(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c},app:i,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:function(t){const o=t.name,a=o.replace("-compat","");if(s._registerComponent(t)&&"PUBLIC"===t.type){const s=(e=i())=>{if("function"!=typeof e[a])throw u.create("invalid-app-argument",{appName:o});return e[a]()};void 0!==t.serviceProps&&Object(r.o)(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,o);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:s}};function i(e){if(e=e||s._DEFAULT_ENTRY_NAME,!Object(r.j)(t,e))throw u.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map(e=>t[e])}}),i.App=e,n}(a);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){Object(r.o)(t,e)},createSubscribe:r.l,ErrorFactory:r.b,deepExtend:r.o}),t}(),h=new o.b("@firebase/app-compat"),d="@firebase/app-compat",f="0.1.18";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if(Object(r.u)()&&void 0!==self.firebase){h.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&h.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const p=l;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var m;Object(s.registerVersion)(d,f,m)},TT7D:function(e,t,n){"use strict";(function(e){var t=n("Rzxn"),r=n("7EjX"),i=n("xq9A"),s=n("28tl"),o="@firebase/auth-compat",a="0.2.9";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c=1e3;function u(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function l(e=Object(s.s)()){return!("file:"!==u()&&"ionic:"!==u()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function h(e=Object(s.s)()){return Object(s.y)()&&11===(null===document||void 0===document?void 0:document.documentMode)||function(e=Object(s.s)()){return/Edge\/\d+/.test(e)}(e)}function d(){try{const e=self.localStorage,t=r.s();if(e)return e.setItem(t,"1"),e.removeItem(t),!h()||Object(s.z)()}catch(e){return f()&&Object(s.z)()}return!1}function f(){return void 0!==e&&"WorkerGlobalScope"in e&&"importScripts"in e}function p(){return("http:"===u()||"https:"===u()||Object(s.v)()||l())&&!(Object(s.D)()||Object(s.B)())&&d()&&!f()}function m(){return l()&&"undefined"!=typeof document}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const g={LOCAL:"local",NONE:"none",SESSION:"session"},y=r.p,v="persistence";async function _(e){await e._initializationPromise;const t=w(),n=r.v(v,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function w(){var e;try{return(null===(e="undefined"!=typeof window?window:null)||void 0===e?void 0:e.sessionStorage)||null}catch(e){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=r.p;class I{constructor(){this.browserResolver=r.t(r.z),this.cordovaResolver=r.t(r.E),this.underlyingResolver=null,this._redirectPersistence=r.A,this._completeRedirectFn=r.u}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return m()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return b(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await async function(){return!!m()&&new Promise(e=>{const t=setTimeout(()=>{e(!1)},c);document.addEventListener("deviceready",()=>{clearTimeout(t),e(!0)})})}();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e){return e.unwrap()}function E(e){const{_tokenResponse:t}=e instanceof s.c?e.customData:e;if(!t)return null;if(!(e instanceof s.c)&&"temporaryProof"in t&&"phoneNumber"in t)return r.i.credentialFromResult(e);const n=t.providerId;if(!n||n===r.k.PASSWORD)return null;let i;switch(n){case r.k.GOOGLE:i=r.f;break;case r.k.FACEBOOK:i=r.d;break;case r.k.GITHUB:i=r.e;break;case r.k.TWITTER:i=r.o;break;default:const{oauthIdToken:e,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=t;return s||o||e||a?a?n.startsWith("saml.")?r.m._create(n,a):r.g._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:e,accessToken:s}):new r.h(n).credential({idToken:e,accessToken:s,rawNonce:c}):null}return e instanceof s.c?i.credentialFromError(e):i.credentialFromResult(e)}function C(e,t){return t.catch(t=>{throw t instanceof s.c&&function(e,t){var n;const i=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===t.code)t.resolver=new k(e,r.J(e,t));else if(i){const e=E(t),n=t;e&&(n.credential=e,n.tenantId=i.tenantId||void 0,n.email=i.email||void 0,n.phoneNumber=i.phoneNumber||void 0)}}(e,t),t}).then(e=>{const t=e.operationType,i=e.user;return{operationType:t,credential:(n=e,E(n)),additionalUserInfo:r.I(e),user:O.getOrCreate(i)}});
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var n}async function S(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>C(e,n.confirm(t))}}class k{constructor(e,t){this.resolver=t,this.auth=e.wrapped()}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return C(T(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this._delegate=e,this.multiFactor=r.S(e)}static getOrCreate(e){return O.USER_MAP.has(e)||O.USER_MAP.set(e,new O(e)),O.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return C(this.auth,r.O(this._delegate,e))}async linkWithPhoneNumber(e,t){return S(this.auth,r.P(this._delegate,e,t))}async linkWithPopup(e){return C(this.auth,r.Q(this._delegate,e,I))}async linkWithRedirect(e){return await _(r.q(this.auth)),r.R(this._delegate,e,I)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return C(this.auth,r.T(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return S(this.auth,r.U(this._delegate,e,t))}reauthenticateWithPopup(e){return C(this.auth,r.V(this._delegate,e,I))}async reauthenticateWithRedirect(e){return await _(r.q(this.auth)),r.W(this._delegate,e,I)}sendEmailVerification(e){return r.X(this._delegate,e)}async unlink(e){return await r._8(this._delegate,e),this}updateEmail(e){return r._9(this._delegate,e)}updatePassword(e){return r._10(this._delegate,e)}updatePhoneNumber(e){return r._11(this._delegate,e)}updateProfile(e){return r._12(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return r._13(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}O.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const A=r.p;class N{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;A(n,"invalid-api-key",{appName:e.name}),A(n,"invalid-api-key",{appName:e.name});const i="undefined"!=typeof window?I:void 0;this._delegate=t.initialize({options:{persistence:function(e,t){const n=function(e,t){const n=w();if(!n)return[];const i=r.v(v,e,t);switch(n.getItem(i)){case g.NONE:return[r.L];case g.LOCAL:return[r.M,r.A];case g.SESSION:return[r.A];default:return[]}}(e,t);"undefined"==typeof self||n.includes(r.M)||n.push(r.M);if("undefined"!=typeof window)for(const e of[r.y,r.A])n.includes(e)||n.push(e);n.includes(r.L)||n.push(r.L);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(r.G),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?O.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){r.D(this._delegate,e,t)}applyActionCode(e){return r.x(this._delegate,e)}checkActionCode(e){return r.B(this._delegate,e)}confirmPasswordReset(e,t){return r.C(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return C(this._delegate,r.F(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return r.H(this._delegate,e)}isSignInWithEmailLink(e){return r.N(this._delegate,e)}async getRedirectResult(){A(p(),this._delegate,"operation-not-supported-in-this-environment");const e=await r.K(this._delegate,I);return e?C(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){r.w(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=x(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=x(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return r.Z(this._delegate,e,t)}sendPasswordResetEmail(e,t){return r.Y(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(function(e,t){y(Object.values(g).includes(t),e,"invalid-persistence-type"),Object(s.D)()?y(t!==g.SESSION,e,"unsupported-persistence-type"):Object(s.B)()?y(t===g.NONE,e,"unsupported-persistence-type"):f()?y(t===g.NONE||t===g.LOCAL&&Object(s.z)(),e,"unsupported-persistence-type"):y(t===g.NONE||d(),e,"unsupported-persistence-type")}(this._delegate,e),e){case g.SESSION:t=r.A;break;case g.LOCAL:t=await r.t(r.M)._isAvailable()?r.M:r.y;break;case g.NONE:t=r.L;break;default:return r.r("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return C(this._delegate,r._0(this._delegate))}signInWithCredential(e){return C(this._delegate,r._1(this._delegate,e))}signInWithCustomToken(e){return C(this._delegate,r._2(this._delegate,e))}signInWithEmailAndPassword(e,t){return C(this._delegate,r._3(this._delegate,e,t))}signInWithEmailLink(e,t){return C(this._delegate,r._4(this._delegate,e,t))}signInWithPhoneNumber(e,t){return S(this._delegate,r._5(this._delegate,e,t))}async signInWithPopup(e){return A(p(),this._delegate,"operation-not-supported-in-this-environment"),C(this._delegate,r._6(this._delegate,e,I))}async signInWithRedirect(e){return A(p(),this._delegate,"operation-not-supported-in-this-environment"),await _(this._delegate),r._7(this._delegate,e,I)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return r._14(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=(()=>this)}}function x(e,t,n){let r=e;"function"!=typeof e&&({next:r,error:t,complete:n}=e);const i=r;return{next:e=>i(e&&O.getOrCreate(e)),error:t,complete:n}}N.Persistence=g;class R{constructor(){this.providerId="phone",this._delegate=new r.i(T(t.a.auth()))}static credential(e,t){return r.i.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}R.PHONE_SIGN_IN_METHOD=r.i.PHONE_SIGN_IN_METHOD,R.PROVIDER_ID=r.i.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const P=r.p;class D{constructor(e,n,i=t.a.app()){var s;P(null===(s=i.options)||void 0===s?void 0:s.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new r.l(e,n,i.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L="auth-compat";var j;(j=t.a).INTERNAL.registerComponent(new i.a(L,e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new N(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:r.a.EMAIL_SIGNIN,PASSWORD_RESET:r.a.PASSWORD_RESET,RECOVER_EMAIL:r.a.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:r.a.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:r.a.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:r.a.VERIFY_EMAIL}},EmailAuthProvider:r.c,FacebookAuthProvider:r.d,GithubAuthProvider:r.e,GoogleAuthProvider:r.f,OAuthProvider:r.h,SAMLAuthProvider:r.n,PhoneAuthProvider:R,PhoneMultiFactorGenerator:r.j,RecaptchaVerifier:D,TwitterAuthProvider:r.o,Auth:N,AuthCredential:r.b,Error:s.c}).setInstantiationMode("LAZY").setMultipleInstances(!1)),j.registerVersion(o,a)}).call(t,n("DuR2"))},"VU/8":function(e,t){e.exports=function(e,t,n,r,i,s){var o,a=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(o=e,a=e.default);var u,l="function"==typeof a?a.options:a;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId=i),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=u):r&&(u=r),u){var h=l.functional,d=h?l.render:l.beforeCreate;h?(l._injectStyles=u,l.render=function(e,t){return u.call(t),d(e,t)}):l.beforeCreate=d?[].concat(d,u):[u]}return{esModule:o,exports:a,options:l}}},W2nU:function(e,t){var n,r,i=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,u=[],l=!1,h=-1;function d(){l&&c&&(l=!1,c.length?u=c.concat(u):h=-1,u.length&&f())}function f(){if(!l){var e=a(d);l=!0;for(var t=u.length;t;){for(c=u,u=[];++h<t;)c&&c[h].run();h=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||l||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"YB+D":function(e,t,n){"use strict";var r=n("Rzxn"),i=n("xq9A"),s=n("RUaj"),o=n("28tl");const a="@firebase/database-compat",c="0.1.5",u=new(n("gZMR").b)("@firebase/database-compat"),l=function(e){const t="FIREBASE WARNING: "+e;u.warn(t)},h=function(e,t,n,r){if((!r||void 0!==n)&&"boolean"!=typeof n)throw new Error(Object(o.p)(e,t)+"must be a boolean.")},d=function(e,t,n){if(!n||void 0!==t)switch(t){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(Object(o.p)(e,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class f{constructor(e){this._delegate=e}cancel(e){Object(o.P)("OnDisconnect.cancel",0,1,arguments.length),Object(o.Q)("OnDisconnect.cancel","onComplete",e,!0);const t=this._delegate.cancel();return e&&t.then(()=>e(null),t=>e(t)),t}remove(e){Object(o.P)("OnDisconnect.remove",0,1,arguments.length),Object(o.Q)("OnDisconnect.remove","onComplete",e,!0);const t=this._delegate.remove();return e&&t.then(()=>e(null),t=>e(t)),t}set(e,t){Object(o.P)("OnDisconnect.set",1,2,arguments.length),Object(o.Q)("OnDisconnect.set","onComplete",t,!0);const n=this._delegate.set(e);return t&&n.then(()=>t(null),e=>t(e)),n}setWithPriority(e,t,n){Object(o.P)("OnDisconnect.setWithPriority",2,3,arguments.length),Object(o.Q)("OnDisconnect.setWithPriority","onComplete",n,!0);const r=this._delegate.setWithPriority(e,t);return n&&r.then(()=>n(null),e=>n(e)),r}update(e,t){if(Object(o.P)("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const t={};for(let n=0;n<e.length;++n)t[""+n]=e[n];e=t,l("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Object(o.Q)("OnDisconnect.update","onComplete",t,!0);const n=this._delegate.update(e);return t&&n.then(()=>t(null),e=>t(e)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return Object(o.P)("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(e,t){this._database=e,this._delegate=t}val(){return Object(o.P)("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return Object(o.P)("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return Object(o.P)("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return Object(o.P)("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return Object(o.P)("DataSnapshot.child",0,1,arguments.length),e=String(e),Object(s.g)("DataSnapshot.child","path",e,!1),new m(this._database,this._delegate.child(e))}hasChild(e){return Object(o.P)("DataSnapshot.hasChild",1,1,arguments.length),Object(s.g)("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return Object(o.P)("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return Object(o.P)("DataSnapshot.forEach",1,1,arguments.length),Object(o.Q)("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(t=>e(new m(this._database,t)))}hasChildren(){return Object(o.P)("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return Object(o.P)("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return Object(o.P)("DataSnapshot.ref",0,0,arguments.length),new y(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class g{constructor(e,t){this.database=e,this._delegate=t}on(e,t,n,r){var i;Object(o.P)("Query.on",2,4,arguments.length),Object(o.Q)("Query.on","callback",t,!1);const a=g.getCancelAndContextArgs_("Query.on",n,r),c=(e,n)=>{t.call(a.context,new m(this.database,e),n)};c.userCallback=t,c.context=a.context;const u=null===(i=a.cancel)||void 0===i?void 0:i.bind(a.context);switch(e){case"value":return Object(s.z)(this._delegate,c,u),t;case"child_added":return Object(s.v)(this._delegate,c,u),t;case"child_removed":return Object(s.y)(this._delegate,c,u),t;case"child_changed":return Object(s.w)(this._delegate,c,u),t;case"child_moved":return Object(s.x)(this._delegate,c,u),t;default:throw new Error(Object(o.p)("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,t,n){if(Object(o.P)("Query.off",0,3,arguments.length),d("Query.off",e,!0),Object(o.Q)("Query.off","callback",t,!0),Object(o.R)("Query.off","context",n,!0),t){const r=()=>{};r.userCallback=t,r.context=n,Object(s.u)(this._delegate,e,r)}else Object(s.u)(this._delegate,e)}get(){return Object(s.o)(this._delegate).then(e=>new m(this.database,e))}once(e,t,n,r){Object(o.P)("Query.once",1,4,arguments.length),Object(o.Q)("Query.once","callback",t,!0);const i=g.getCancelAndContextArgs_("Query.once",n,r),a=new o.a,c=(e,n)=>{const r=new m(this.database,e);t&&t.call(i.context,r,n),a.resolve(r)};c.userCallback=t,c.context=i.context;const u=e=>{i.cancel&&i.cancel.call(i.context,e),a.reject(e)};switch(e){case"value":Object(s.z)(this._delegate,c,u,{onlyOnce:!0});break;case"child_added":Object(s.v)(this._delegate,c,u,{onlyOnce:!0});break;case"child_removed":Object(s.y)(this._delegate,c,u,{onlyOnce:!0});break;case"child_changed":Object(s.w)(this._delegate,c,u,{onlyOnce:!0});break;case"child_moved":Object(s.x)(this._delegate,c,u,{onlyOnce:!0});break;default:throw new Error(Object(o.p)("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return a.promise}limitToFirst(e){return Object(o.P)("Query.limitToFirst",1,1,arguments.length),new g(this.database,Object(s.F)(this._delegate,Object(s.s)(e)))}limitToLast(e){return Object(o.P)("Query.limitToLast",1,1,arguments.length),new g(this.database,Object(s.F)(this._delegate,Object(s.t)(e)))}orderByChild(e){return Object(o.P)("Query.orderByChild",1,1,arguments.length),new g(this.database,Object(s.F)(this._delegate,Object(s.A)(e)))}orderByKey(){return Object(o.P)("Query.orderByKey",0,0,arguments.length),new g(this.database,Object(s.F)(this._delegate,Object(s.B)()))}orderByPriority(){return Object(o.P)("Query.orderByPriority",0,0,arguments.length),new g(this.database,Object(s.F)(this._delegate,Object(s.C)()))}orderByValue(){return Object(o.P)("Query.orderByValue",0,0,arguments.length),new g(this.database,Object(s.F)(this._delegate,Object(s.D)()))}startAt(e=null,t){return Object(o.P)("Query.startAt",0,2,arguments.length),new g(this.database,Object(s.F)(this._delegate,Object(s.P)(e,t)))}startAfter(e=null,t){return Object(o.P)("Query.startAfter",0,2,arguments.length),new g(this.database,Object(s.F)(this._delegate,Object(s.O)(e,t)))}endAt(e=null,t){return Object(o.P)("Query.endAt",0,2,arguments.length),new g(this.database,Object(s.F)(this._delegate,Object(s.l)(e,t)))}endBefore(e=null,t){return Object(o.P)("Query.endBefore",0,2,arguments.length),new g(this.database,Object(s.F)(this._delegate,Object(s.m)(e,t)))}equalTo(e,t){return Object(o.P)("Query.equalTo",1,2,arguments.length),new g(this.database,Object(s.F)(this._delegate,Object(s.n)(e,t)))}toString(){return Object(o.P)("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return Object(o.P)("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(Object(o.P)("Query.isEqual",1,1,arguments.length),!(e instanceof g)){throw new Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.")}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,t,n){const r={cancel:void 0,context:void 0};if(t&&n)r.cancel=t,Object(o.Q)(e,"cancel",r.cancel,!0),r.context=n,Object(o.R)(e,"context",r.context,!0);else if(t)if("object"==typeof t&&null!==t)r.context=t;else{if("function"!=typeof t)throw new Error(Object(o.p)(e,"cancelOrContext")+" must either be a cancel callback or a context object.");r.cancel=t}return r}get ref(){return new y(this.database,new s.d(this._delegate._repo,this._delegate._path))}}class y extends g{constructor(e,t){super(e,new s.b(t._repo,t._path,new s.c,!1)),this.database=e,this._delegate=t}getKey(){return Object(o.P)("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return Object(o.P)("Reference.child",1,1,arguments.length),"number"==typeof e&&(e=String(e)),new y(this.database,Object(s.i)(this._delegate,e))}getParent(){Object(o.P)("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new y(this.database,e):null}getRoot(){return Object(o.P)("Reference.root",0,0,arguments.length),new y(this.database,this._delegate.root)}set(e,t){Object(o.P)("Reference.set",1,2,arguments.length),Object(o.Q)("Reference.set","onComplete",t,!0);const n=Object(s.L)(this._delegate,e);return t&&n.then(()=>t(null),e=>t(e)),n}update(e,t){if(Object(o.P)("Reference.update",1,2,arguments.length),Array.isArray(e)){const t={};for(let n=0;n<e.length;++n)t[""+n]=e[n];e=t,l("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Object(s.h)("Reference.update",this._delegate._path),Object(o.Q)("Reference.update","onComplete",t,!0);const n=Object(s.Q)(this._delegate,e);return t&&n.then(()=>t(null),e=>t(e)),n}setWithPriority(e,t,n){Object(o.P)("Reference.setWithPriority",2,3,arguments.length),Object(o.Q)("Reference.setWithPriority","onComplete",n,!0);const r=Object(s.N)(this._delegate,e,t);return n&&r.then(()=>n(null),e=>n(e)),r}remove(e){Object(o.P)("Reference.remove",0,1,arguments.length),Object(o.Q)("Reference.remove","onComplete",e,!0);const t=Object(s.I)(this._delegate);return e&&t.then(()=>e(null),t=>e(t)),t}transaction(e,t,n){Object(o.P)("Reference.transaction",1,3,arguments.length),Object(o.Q)("Reference.transaction","transactionUpdate",e,!1),Object(o.Q)("Reference.transaction","onComplete",t,!0),h("Reference.transaction","applyLocally",n,!0);const r=Object(s.J)(this._delegate,e,{applyLocally:n}).then(e=>new p(e.committed,new m(this.database,e.snapshot)));return t&&r.then(e=>t(null,e.committed,e.snapshot),e=>t(e,!1,null)),r}setPriority(e,t){Object(o.P)("Reference.setPriority",1,2,arguments.length),Object(o.Q)("Reference.setPriority","onComplete",t,!0);const n=Object(s.M)(this._delegate,e);return t&&n.then(()=>t(null),e=>t(e)),n}push(e,t){Object(o.P)("Reference.push",0,2,arguments.length),Object(o.Q)("Reference.push","onComplete",t,!0);const n=Object(s.E)(this._delegate,e),r=n.then(e=>new y(this.database,e));t&&r.then(()=>t(null),e=>t(e));const i=new y(this.database,n);return i.then=r.then.bind(r),i.catch=r.catch.bind(r,void 0),i}onDisconnect(){return Object(s.h)("Reference.onDisconnect",this._delegate._path),new f(new s.a(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e,t){this._delegate=e,this.app=t,this.INTERNAL={delete:()=>this._delegate._delete()}}useEmulator(e,t,n={}){Object(s.j)(this._delegate,e,t,n)}ref(e){if(Object(o.P)("database.ref",0,1,arguments.length),e instanceof y){const t=Object(s.H)(this._delegate,e.toString());return new y(this,t)}{const t=Object(s.G)(this._delegate,e);return new y(this,t)}}refFromURL(e){Object(o.P)("database.refFromURL",1,1,arguments.length);const t=Object(s.H)(this._delegate,e);return new y(this,t)}goOffline(){return Object(o.P)("database.goOffline",0,0,arguments.length),Object(s.p)(this._delegate)}goOnline(){return Object(o.P)("database.goOnline",0,0,arguments.length),Object(s.q)(this._delegate)}}v.ServerValue={TIMESTAMP:Object(s.K)(),increment:e=>Object(s.r)(e)};var _=Object.freeze({__proto__:null,initStandalone:
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function({app:e,url:t,version:n,customAuthImpl:r,namespace:o,nodeAdmin:a=!1}){Object(s.f)(n);const c=new i.c("auth-internal",new i.b("database-standalone"));return c.setComponent(new i.a("auth-internal",()=>r,"PRIVATE")),{instance:new v(Object(s.e)(e,c,void 0,t,a),e),namespace:o}}});
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=v.ServerValue;var b;(b=r.a).INTERNAL.registerComponent(new i.a("database-compat",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("database").getImmediate({identifier:t});return new v(r,n)},"PUBLIC").setServiceProps({Reference:y,Query:g,Database:v,DataSnapshot:m,enableLogging:s.k,INTERNAL:_,ServerValue:w}).setMultipleInstances(!0)),b.registerVersion(a,c)},a7sP:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"SDK_VERSION",function(){return T}),n.d(t,"_DEFAULT_ENTRY_NAME",function(){return l}),n.d(t,"_addComponent",function(){return p}),n.d(t,"_addOrOverwriteComponent",function(){return m}),n.d(t,"_apps",function(){return d}),n.d(t,"_clearComponents",function(){return _}),n.d(t,"_components",function(){return f}),n.d(t,"_getProvider",function(){return y}),n.d(t,"_registerComponent",function(){return g}),n.d(t,"_removeServiceInstance",function(){return v}),n.d(t,"deleteApp",function(){return k}),n.d(t,"getApp",function(){return C}),n.d(t,"getApps",function(){return S}),n.d(t,"initializeApp",function(){return E}),n.d(t,"onLog",function(){return A}),n.d(t,"registerVersion",function(){return O}),n.d(t,"setLogLevel",function(){return N});var r=n("xq9A"),i=n("gZMR"),s=n("28tl");n.d(t,"FirebaseError",function(){return s.c});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const a="@firebase/app",c="0.7.17",u=new i.b("@firebase/app"),l="[DEFAULT]",h={[a]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},d=new Map,f=new Map;function p(e,t){try{e.container.addComponent(t)}catch(n){u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function m(e,t){e.container.addOrOverwriteComponent(t)}function g(e){const t=e.name;if(f.has(t))return u.debug(`There were multiple attempts to register component ${t}.`),!1;f.set(t,e);for(const t of d.values())p(t,e);return!0}function y(e,t){return e.container.getProvider(t)}function v(e,t,n=l){y(e,t).clearInstance(n)}function _(){f.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."},b=new s.b("app","Firebase",w);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.a("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw b.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T="9.6.7";function E(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:l,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw b.create("bad-app-name",{appName:String(i)});const o=d.get(i);if(o){if(Object(s.n)(e,o.options)&&Object(s.n)(n,o.config))return o;throw b.create("duplicate-app",{appName:i})}const a=new r.b(i);for(const e of f.values())a.addComponent(e);const c=new I(e,n,a);return d.set(i,c),c}function C(e=l){const t=d.get(e);if(!t)throw b.create("no-app",{appName:e});return t}function S(){return Array.from(d.values())}async function k(e){const t=e.name;d.has(t)&&(d.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function O(e,t,n){var i;let s=null!==(i=h[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void u.warn(e.join(" "))}g(new r.a(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}function A(e,t){if(null!==e&&"function"!=typeof e)throw b.create("invalid-log-argument");Object(i.d)(e,t)}function N(e){Object(i.c)(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x;x="",g(new r.a("platform-logger",e=>new o(e),"PRIVATE")),O(a,c,x),O(a,c,"esm2017"),O("fire-js","")},fQOS:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return au}),n.d(t,"b",function(){return ic}),n.d(t,"c",function(){return Ba}),n.d(t,"d",function(){return Ra}),n.d(t,"e",function(){return Mc}),n.d(t,"f",function(){return rc}),n.d(t,"g",function(){return T}),n.d(t,"h",function(){return oc}),n.d(t,"i",function(){return Fc}),n.d(t,"j",function(){return Uc}),n.d(t,"k",function(){return M}),n.d(t,"l",function(){return lu}),n.d(t,"m",function(){return ne}),n.d(t,"n",function(){return oe}),n.d(t,"o",function(){return z}),n.d(t,"p",function(){return ka}),n.d(t,"q",function(){return w}),n.d(t,"r",function(){return H}),n.d(t,"s",function(){return g}),n.d(t,"t",function(){return Ta}),n.d(t,"u",function(){return Iu}),n.d(t,"v",function(){return Ru}),n.d(t,"w",function(){return xu}),n.d(t,"x",function(){return Ya}),n.d(t,"y",function(){return La}),n.d(t,"z",function(){return ja}),n.d(t,"A",function(){return xa}),n.d(t,"B",function(){return bu}),n.d(t,"C",function(){return Au}),n.d(t,"D",function(){return Za}),n.d(t,"E",function(){return Ma}),n.d(t,"F",function(){return Ha}),n.d(t,"G",function(){return Ga}),n.d(t,"H",function(){return Xa}),n.d(t,"I",function(){return nu}),n.d(t,"J",function(){return tu}),n.d(t,"K",function(){return za}),n.d(t,"L",function(){return Cu}),n.d(t,"M",function(){return du}),n.d(t,"N",function(){return pu}),n.d(t,"O",function(){return mu}),n.d(t,"P",function(){return gu}),n.d(t,"Q",function(){return yu}),n.d(t,"R",function(){return vu}),n.d(t,"S",function(){return Pu}),n.d(t,"T",function(){return Qc}),n.d(t,"U",function(){return Yc}),n.d(t,"V",function(){return ec}),n.d(t,"W",function(){return tc}),n.d(t,"X",function(){return Tu}),n.d(t,"Y",function(){return Eu}),n.d(t,"Z",function(){return Hc}),n.d(t,"_0",function(){return Bc}),n.d(t,"_1",function(){return Ua}),n.d(t,"_2",function(){return Fa}),n.d(t,"_3",function(){return Ou}),n.d(t,"_4",function(){return Nu}),n.d(t,"_5",function(){return _u}),n.d(t,"_6",function(){return f}),n.d(t,"_7",function(){return Vc}),n.d(t,"_8",function(){return Zc}),n.d(t,"_9",function(){return Xc}),n.d(t,"_10",function(){return wu}),n.d(t,"_11",function(){return Ja}),n.d(t,"_12",function(){return zc});var r=n("a7sP"),i=n("xq9A"),s=n("gZMR"),o=n("28tl"),a=n("zBsV");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.6.7";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new s.b("@firebase/firestore");function d(){return h.logLevel}function f(e){h.setLogLevel(e)}function p(e,...t){if(h.logLevel<=s.a.DEBUG){const n=t.map(y);h.debug(`Firestore (${l}): ${e}`,...n)}}function m(e,...t){if(h.logLevel<=s.a.ERROR){const n=t.map(y);h.error(`Firestore (${l}): ${e}`,...n)}}function g(e,...t){if(h.logLevel<=s.a.WARN){const n=t.map(y);h.warn(`Firestore (${l}): ${e}`,...n)}}function y(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e="Unexpected state"){const t=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+e;throw m(t),new Error(t)}function _(e,t){e||v()}function w(e,t){e||v()}function b(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends o.c{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=(()=>`${this.name}: [code=${this.code}]: ${this.message}`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(u.UNAUTHENTICATED))}shutdown(){}}class k{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class O{constructor(e,t,n){this.type="FirstParty",this.user=u.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class A{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new O(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class N{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class x{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=(e=>this.I(e)),this.T=(e=>t.writeSequenceNumber(e)))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */x.A=-1;class P{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=R(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function D(e,t){return e<t?-1:e>t?1:0}function L(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}function j(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new T(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new T(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new T(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new T(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return M.fromMillis(Date.now())}static fromDate(e){return M.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new M(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?D(this.nanoseconds,e.nanoseconds):D(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new M(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function V(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function q(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e,t,n){void 0===t?t=0:t>e.length&&v(),void 0===n?n=e.length-t:n>e.length-t&&v(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===$.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof $?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class B extends ${construct(e,t,n){return new B(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new T(I.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new B(t)}static emptyPath(){return new B([])}}const K=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class z extends ${construct(e,t,n){return new z(e,t,n)}static isValidIdentifier(e){return K.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),z.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new z(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new T(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new T(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new T(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new T(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new z(t)}static emptyPath(){return new z([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.fields=e,e.sort(z.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return L(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new G(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new G(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return D(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}G.EMPTY_BYTE_STRING=new G("");const Q=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Y(e){if(_(!!e),"string"==typeof e){let t=0;const n=Q.exec(e);if(_(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:J(e.seconds),nanos:J(e.nanos)}}function J(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function X(e){return"string"==typeof e?G.fromBase64String(e):G.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ee(e){const t=Y(e.mapValue.fields.__local_write_time__.timestampValue);return new M(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class ne{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ne("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ne&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e){return null==e}function ie(e){return 0===e&&1/e==-1/0}function se(e){return"number"==typeof e&&Number.isInteger(e)&&!ie(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(B.fromString(e))}static fromName(e){return new oe(B.fromString(e).popFirst(5))}static empty(){return new oe(B.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===B.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return B.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new B(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae={mapValue:{fields:{__type__:{stringValue:"__max___"}}}};function ce(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Z(e)?4:10:v()}function ue(e,t){if(e===t)return!0;const n=ce(e);if(n!==ce(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ee(e).isEqual(ee(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Y(e.timestampValue),r=Y(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return X(e.bytesValue).isEqual(X(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return J(e.geoPointValue.latitude)===J(t.geoPointValue.latitude)&&J(e.geoPointValue.longitude)===J(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return J(e.integerValue)===J(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=J(e.doubleValue),r=J(t.doubleValue);return n===r?ie(n)===ie(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return L(e.arrayValue.values||[],t.arrayValue.values||[],ue);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(U(n)!==U(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!ue(n[e],r[e])))return!1;return!0}(e,t);default:return v()}}function le(e,t){return void 0!==(e.values||[]).find(e=>ue(e,t))}function he(e,t){if(e===t)return 0;const n=ce(e),r=ce(t);if(n!==r)return D(n,r);switch(n){case 0:return 0;case 1:return D(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=J(e.integerValue||e.doubleValue),r=J(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return de(e.timestampValue,t.timestampValue);case 4:return de(ee(e),ee(t));case 5:return D(e.stringValue,t.stringValue);case 6:return function(e,t){const n=X(e),r=X(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=D(n[e],r[e]);if(0!==t)return t}return D(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=D(J(e.latitude),J(t.latitude));return 0!==n?n:D(J(e.longitude),J(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=he(n[e],r[e]);if(t)return t}return D(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){const t=D(r[e],s[e]);if(0!==t)return t;const o=he(n[r[e]],i[s[e]]);if(0!==o)return o}return D(r.length,s.length)}(e.mapValue,t.mapValue);default:throw v()}}function de(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return D(e,t);const n=Y(e),r=Y(t),i=D(n.seconds,r.seconds);return 0!==i?i:D(n.nanos,r.nanos)}function fe(e){return function e(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(e){const t=Y(e);return`time(${t.seconds},${t.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?X(t.bytesValue).toBase64():"referenceValue"in t?(r=t.referenceValue,oe.fromName(r).toString()):"geoPointValue"in t?`geo(${(n=t.geoPointValue).latitude},${n.longitude})`:"arrayValue"in t?function(t){let n="[",r=!0;for(const i of t.values||[])r?r=!1:n+=",",n+=e(i);return n+"]"}(t.arrayValue):"mapValue"in t?function(t){const n=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const s of n)i?i=!1:r+=",",r+=`${s}:${e(t.fields[s])}`;return r+"}"}(t.mapValue):v();var n,r}(e)}function pe(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function me(e){return!!e&&"integerValue"in e}function ge(e){return!!e&&"arrayValue"in e}function ye(e){return!!e&&"nullValue"in e}function ve(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function _e(e){return!!e&&"mapValue"in e}function we(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return V(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=we(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=we(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.value=e}static empty(){return new be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!_e(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=we(t)}setAll(e){let t=z.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=we(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());_e(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ue(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];_e(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){V(t,(t,n)=>e[t]=n);for(const t of n)delete e[t]}clone(){return new be(we(this.value))}}function Ie(e){const t=[];return V(e.fields,(e,n)=>{const r=new z([e]);if(_e(n)){const e=Ie(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new W(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Te{constructor(e,t,n,r,i,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new Te(e,0,F.min(),F.min(),be.empty(),0)}static newFoundDocument(e,t,n){return new Te(e,1,t,F.min(),n,0)}static newNoDocument(e,t){return new Te(e,2,t,F.min(),be.empty(),0)}static newUnknownDocument(e,t){return new Te(e,3,t,F.min(),be.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Te(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class Ee{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}Ee.UNKNOWN_ID=-1;class Ce{constructor(e,t){this.fieldPath=e,this.kind=t}}class Se{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Se(0,ke.min())}}class ke{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ke(F.min(),oe.empty(),-1)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.P=null}}function Ae(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Oe(e,t,n,r,i,s,o)}function Ne(e){const t=b(e);if(null===t.P){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>{return(t=e).field.canonicalString()+t.op.toString()+fe(t.value);var t}).join(","),e+="|ob:",e+=t.orderBy.map(e=>(function(e){return e.field.canonicalString()+e.dir})(e)).join(","),re(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>fe(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>fe(e)).join(",")),t.P=e}return t.P}function xe(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Ke(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!ue(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!We(e.startAt,t.startAt)&&We(e.endAt,t.endAt)}function Re(e){return oe.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class Pe extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.v(e,t,n):new De(e,t,n):"array-contains"===t?new Fe(e,n):"in"===t?new Ue(e,n):"not-in"===t?new Ve(e,n):"array-contains-any"===t?new qe(e,n):new Pe(e,t,n)}static v(e,t,n){return"in"===t?new Le(e,n):new je(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.V(he(t,this.value)):null!==t&&ce(this.value)===ce(t)&&this.V(he(t,this.value))}V(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return v()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class De extends Pe{constructor(e,t,n){super(e,t,n),this.key=oe.fromName(n.referenceValue)}matches(e){const t=oe.comparator(e.key,this.key);return this.V(t)}}class Le extends Pe{constructor(e,t){super(e,"in",t),this.keys=Me("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class je extends Pe{constructor(e,t){super(e,"not-in",t),this.keys=Me("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Me(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>oe.fromName(e.referenceValue))}class Fe extends Pe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ge(t)&&le(t.arrayValue,this.value)}}class Ue extends Pe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&le(this.value.arrayValue,t)}}class Ve extends Pe{constructor(e,t){super(e,"not-in",t)}matches(e){if(le(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!le(this.value.arrayValue,t)}}class qe extends Pe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ge(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>le(this.value.arrayValue,e))}}class $e{constructor(e,t){this.position=e,this.inclusive=t}}class Be{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ke(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function ze(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?oe.comparator(oe.fromName(o.referenceValue),n.key):he(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function We(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ue(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function Ge(e,t,n,r,i,s,o,a){return new He(e,t,n,r,i,s,o,a)}function Qe(e){return new He(e)}function Ye(e){return!re(e.limit)&&"F"===e.limitType}function Je(e){return!re(e.limit)&&"L"===e.limitType}function Xe(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Ze(e){for(const t of e.filters)if(t.S())return t.field;return null}function et(e){return null!==e.collectionGroup}function tt(e){const t=b(e);if(null===t.D){t.D=[];const e=Ze(t),n=Xe(t);if(null!==e&&null===n)e.isKeyField()||t.D.push(new Be(e)),t.D.push(new Be(z.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.D.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new Be(z.keyField(),e))}}}return t.D}function nt(e){const t=b(e);if(!t.C)if("F"===t.limitType)t.C=Ae(t.path,t.collectionGroup,tt(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of tt(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Be(n.field,t))}const n=t.endAt?new $e(t.endAt.position,!t.endAt.inclusive):null,r=t.startAt?new $e(t.startAt.position,!t.startAt.inclusive):null;t.C=Ae(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.C}function rt(e,t,n){return new He(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function it(e,t){return xe(nt(e),nt(t))&&e.limitType===t.limitType}function st(e){return`${Ne(nt(e))}|lt:${e.limitType}`}function ot(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>{return`${(t=e).field.canonicalString()} ${t.op} ${fe(t.value)}`;var t}).join(", ")}]`),re(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>(function(e){return`${e.field.canonicalString()} (${e.dir})`})(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>fe(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>fe(e)).join(",")),`Target(${t})`}(nt(e))}; limitType=${e.limitType})`}function at(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):oe.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=ze(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,tt(e),t))&&!(e.endAt&&!function(e,t,n){const r=ze(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,tt(e),t))}(e,t)}function ct(e){return(t,n)=>{let r=!1;for(const i of tt(e)){const e=ut(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function ut(e,t,n){const r=e.field.isKeyField()?oe.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?he(r,i):v()}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ie(t)?"-0":t}}function ht(e){return{integerValue:""+e}}function dt(e,t){return se(t)?ht(t):lt(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(){this._=void 0}}function pt(e,t,n){return e instanceof yt?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof vt?_t(e,t):e instanceof wt?bt(e,t):function(e,t){const n=gt(e,t),r=Tt(n)+Tt(e.k);return me(n)&&me(e.k)?ht(r):lt(e.O,r)}(e,t)}function mt(e,t,n){return e instanceof vt?_t(e,t):e instanceof wt?bt(e,t):n}function gt(e,t){return e instanceof It?me(n=t)||n&&"doubleValue"in n?t:{integerValue:0}:null;var n}class yt extends ft{}class vt extends ft{constructor(e){super(),this.elements=e}}function _t(e,t){const n=Et(t);for(const t of e.elements)n.some(e=>ue(e,t))||n.push(t);return{arrayValue:{values:n}}}class wt extends ft{constructor(e){super(),this.elements=e}}function bt(e,t){let n=Et(t);for(const t of e.elements)n=n.filter(e=>!ue(e,t));return{arrayValue:{values:n}}}class It extends ft{constructor(e,t){super(),this.O=e,this.k=t}}function Tt(e){return J(e.integerValue||e.doubleValue)}function Et(e){return ge(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,t){this.field=e,this.transform=t}}class St{constructor(e,t){this.version=e,this.transformResults=t}}class kt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new kt}static exists(e){return new kt(void 0,e)}static updateTime(e){return new kt(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ot(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class At{}function Nt(e,t,n){e instanceof Lt?function(e,t,n){const r=e.value.clone(),i=Ft(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof jt?function(e,t,n){if(!Ot(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Ft(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Mt(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function xt(e,t,n){e instanceof Lt?function(e,t,n){if(!Ot(e.precondition,t))return;const r=e.value.clone(),i=Ut(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(Dt(t),r).setHasLocalMutations()}(e,t,n):e instanceof jt?function(e,t,n){if(!Ot(e.precondition,t))return;const r=Ut(e.fieldTransforms,n,t),i=t.data;i.setAll(Mt(e)),i.setAll(r),t.convertToFoundDocument(Dt(t),i).setHasLocalMutations()}(e,t,n):function(e,t){Ot(e.precondition,t)&&t.convertToNoDocument(F.min())}(e,t)}function Rt(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=gt(r.transform,e||null);null!=i&&(null==n&&(n=be.empty()),n.set(r.field,i))}return n||null}function Pt(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&L(e,t,(e,t)=>(function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof vt&&t instanceof vt||e instanceof wt&&t instanceof wt?L(e.elements,t.elements,ue):e instanceof It&&t instanceof It?ue(e.k,t.k):e instanceof yt&&t instanceof yt}(e.transform,t.transform)})(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Dt(e){return e.isFoundDocument()?e.version:F.min()}class Lt extends At{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class jt extends At{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Mt(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Ft(e,t,n){const r=new Map;_(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,mt(o,a,n[i]))}return r}function Ut(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,pt(e,s,t))}return r}class Vt extends At{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class qt extends At{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bt,Kt;function zt(e){switch(e){default:return v();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function Wt(e){if(void 0===e)return m("GRPC error has no .code"),I.UNKNOWN;switch(e){case Bt.OK:return I.OK;case Bt.CANCELLED:return I.CANCELLED;case Bt.UNKNOWN:return I.UNKNOWN;case Bt.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Bt.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Bt.INTERNAL:return I.INTERNAL;case Bt.UNAVAILABLE:return I.UNAVAILABLE;case Bt.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Bt.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Bt.NOT_FOUND:return I.NOT_FOUND;case Bt.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Bt.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Bt.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Bt.ABORTED:return I.ABORTED;case Bt.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Bt.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Bt.DATA_LOSS:return I.DATA_LOSS;default:return v()}}(Kt=Bt||(Bt={}))[Kt.OK=0]="OK",Kt[Kt.CANCELLED=1]="CANCELLED",Kt[Kt.UNKNOWN=2]="UNKNOWN",Kt[Kt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Kt[Kt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Kt[Kt.NOT_FOUND=5]="NOT_FOUND",Kt[Kt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Kt[Kt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Kt[Kt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Kt[Kt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Kt[Kt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Kt[Kt.ABORTED=10]="ABORTED",Kt[Kt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Kt[Kt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Kt[Kt.INTERNAL=13]="INTERNAL",Kt[Kt.UNAVAILABLE=14]="UNAVAILABLE",Kt[Kt.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ht{constructor(e,t){this.comparator=e,this.root=t||Qt.EMPTY}insert(e,t){return new Ht(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Qt.BLACK,null,null))}remove(e){return new Ht(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gt(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gt(this.root,e,this.comparator,!0)}}class Gt{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qt{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Qt.RED,this.left=null!=r?r:Qt.EMPTY,this.right=null!=i?i:Qt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Qt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return Qt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Qt.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const e=this.left.check();if(e!==this.right.check())throw v();return e+(this.isRed()?0:1)}}Qt.EMPTY=null,Qt.RED=!0,Qt.BLACK=!1,Qt.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Qt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt{constructor(e){this.comparator=e,this.data=new Ht(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Jt(this.data.getIterator())}getIteratorFrom(e){return new Jt(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof Yt))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Yt(this.comparator);return t.data=e,t}}class Jt{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Xt(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new Ht(oe.comparator);function en(){return Zt}const tn=new Ht(oe.comparator);function nn(){return tn}const rn=new Ht(oe.comparator),sn=new Yt(oe.comparator);function on(...e){let t=sn;for(const n of e)t=t.add(n);return t}const an=new Yt(D);function cn(){return an}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,ln.createSynthesizedTargetChangeForCurrentChange(e,t)),new un(F.min(),n,cn(),en(),on())}}class ln{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new ln(G.EMPTY_BYTE_STRING,t,on(),on(),on())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t,n,r){this.M=e,this.removedTargetIds=t,this.key=n,this.$=r}}class dn{constructor(e,t){this.targetId=e,this.F=t}}class fn{constructor(e,t,n=G.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class pn{constructor(){this.B=0,this.L=yn(),this.U=G.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=on(),t=on(),n=on();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:v()}}),new ln(this.U,this.q,e,t,n)}J(){this.K=!1,this.L=yn()}Y(e,t){this.K=!0,this.L=this.L.insert(e,t)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class mn{constructor(e){this.nt=e,this.st=new Map,this.it=en(),this.rt=gn(),this.ot=new Yt(D)}ct(e){for(const t of e.M)e.$&&e.$.isFoundDocument()?this.ut(t,e.$):this.at(t,e.key,e.$);for(const t of e.removedTargetIds)this.at(t,e.key,e.$)}ht(e){this.forEachTarget(e,t=>{const n=this.lt(t);switch(e.state){case 0:this.ft(t)&&n.W(e.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(e.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(t);break;case 3:this.ft(t)&&(n.et(),n.W(e.resumeToken));break;case 4:this.ft(t)&&(this.dt(t),n.W(e.resumeToken));break;default:v()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.st.forEach((e,n)=>{this.ft(n)&&t(n)})}_t(e){const t=e.targetId,n=e.F.count,r=this.wt(t);if(r){const e=r.target;if(Re(e))if(0===n){const n=new oe(e.path);this.at(t,n,Te.newNoDocument(n,F.min()))}else _(1===n);else this.gt(t)!==n&&(this.dt(t),this.ot=this.ot.add(t))}}yt(e){const t=new Map;this.st.forEach((n,r)=>{const i=this.wt(r);if(i){if(n.current&&Re(i.target)){const t=new oe(i.target.path);null!==this.it.get(t)||this.It(r,t)||this.at(r,t,Te.newNoDocument(t,e))}n.j&&(t.set(r,n.H()),n.J())}});let n=on();this.rt.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.it.forEach((t,n)=>n.setReadTime(e));const r=new un(e,t,this.ot,this.it,n);return this.it=en(),this.rt=gn(),this.ot=new Yt(D),r}ut(e,t){if(!this.ft(e))return;const n=this.It(e,t.key)?2:0;this.lt(e).Y(t.key,n),this.it=this.it.insert(t.key,t),this.rt=this.rt.insert(t.key,this.Et(t.key).add(e))}at(e,t,n){if(!this.ft(e))return;const r=this.lt(e);this.It(e,t)?r.Y(t,1):r.X(t),this.rt=this.rt.insert(t,this.Et(t).delete(e)),n&&(this.it=this.it.insert(t,n))}removeTarget(e){this.st.delete(e)}gt(e){const t=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let t=this.st.get(e);return t||(t=new pn,this.st.set(e,t)),t}Et(e){let t=this.rt.get(e);return t||(t=new Yt(D),this.rt=this.rt.insert(e,t)),t}ft(e){const t=null!==this.wt(e);return t||p("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.st.get(e);return t&&t.G?null:this.nt.Tt(e)}dt(e){this.st.set(e,new pn),this.nt.getRemoteKeysForTarget(e).forEach(t=>{this.at(e,t,null)})}It(e,t){return this.nt.getRemoteKeysForTarget(e).has(t)}}function gn(){return new Ht(oe.comparator)}function yn(){return new Ht(oe.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn={asc:"ASCENDING",desc:"DESCENDING"},_n={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class wn{constructor(e,t){this.databaseId=e,this.N=t}}function bn(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function In(e,t){return e.N?t.toBase64():t.toUint8Array()}function Tn(e){return _(!!e),F.fromTimestamp(function(e){const t=Y(e);return new M(t.seconds,t.nanos)}(e))}function En(e,t){return function(e){return new B(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Cn(e){const t=B.fromString(e);return _(qn(t)),t}function Sn(e,t){return En(e.databaseId,t.path)}function kn(e,t){const n=Cn(t);if(n.get(1)!==e.databaseId.projectId)throw new T(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new T(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new oe(xn(n))}function On(e,t){return En(e.databaseId,t)}function An(e){const t=Cn(e);return 4===t.length?B.emptyPath():xn(t)}function Nn(e){return new B(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function xn(e){return _(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Rn(e,t,n){return{name:Sn(e,t),fields:n.value.mapValue.fields}}function Pn(e,t,n){const r=kn(e,t.name),i=Tn(t.updateTime),s=new be({mapValue:{fields:t.fields}}),o=Te.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Dn(e,t){let n;if(t instanceof Lt)n={update:Rn(e,t.key,t.value)};else if(t instanceof Vt)n={delete:Sn(e,t.key)};else if(t instanceof jt)n={update:Rn(e,t.key,t.data),updateMask:function(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof qt))return v();n={verify:Sn(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){const n=t.transform;if(n instanceof yt)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof vt)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof wt)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof It)return{fieldPath:t.field.canonicalString(),increment:n.k};throw v()})(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:function(e,t){return bn(e,t.toTimestamp())}(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:v()}(e,t.precondition)),n}function Ln(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?kt.updateTime(Tn(e.updateTime)):void 0!==e.exists?kt.exists(e.exists):kt.none()}(t.currentDocument):kt.none(),r=t.updateTransforms?t.updateTransforms.map(t=>(function(e,t){let n=null;if("setToServerValue"in t)_("REQUEST_TIME"===t.setToServerValue),n=new yt;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new vt(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new wt(e)}else"increment"in t?n=new It(e,t.increment):v();const r=z.fromServerFormat(t.fieldPath);return new Ct(r,n)})(e,t)):[];if(t.update){t.update.name;const i=kn(e,t.update.name),s=new be({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new W(t.map(e=>z.fromServerFormat(e)))}(t.updateMask);return new jt(i,s,e,n,r)}return new Lt(i,s,n,r)}if(t.delete){const r=kn(e,t.delete);return new Vt(r,n)}if(t.verify){const r=kn(e,t.verify);return new qt(r,n)}return v()}function jn(e,t){return{documents:[On(e,t.path)]}}function Mn(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=On(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=On(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map(e=>(function(e){if("=="===e.op){if(ve(e.value))return{unaryFilter:{field:Un(e.field),op:"IS_NAN"}};if(ye(e.value))return{unaryFilter:{field:Un(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ve(e.value))return{unaryFilter:{field:Un(e.field),op:"IS_NOT_NAN"}};if(ye(e.value))return{unaryFilter:{field:Un(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Un(e.field),op:function(e){return _n[e]}(e.op),value:e.value}}})(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map(e=>(function(e){return{field:Un(e.field),direction:function(e){return vn[e]}(e.dir)}})(e))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.N||re(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Fn(e){let t=An(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){_(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function e(t){return t?void 0!==t.unaryFilter?[function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Vn(e.unaryFilter.field);return Pe.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Vn(e.unaryFilter.field);return Pe.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Vn(e.unaryFilter.field);return Pe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Vn(e.unaryFilter.field);return Pe.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}(t)]:void 0!==t.fieldFilter?[function(e){return Pe.create(Vn(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(e.fieldFilter.op),e.fieldFilter.value)}(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>e(t)).reduce((e,t)=>e.concat(t)):v():[]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(e=>(function(e){return new Be(Vn(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))})(e)));let a=null;n.limit&&(a=function(e){let t;return re(t="object"==typeof e?e.value:e)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new $e(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new $e(n,t)}(n.endAt)),Ge(t,i,o,s,a,"F",c,u)}function Un(e){return{fieldPath:e.canonicalString()}}function Vn(e){return z.fromServerFormat(e.fieldPath)}function qn(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Kn(t)),t=Bn(e.get(n),t);return Kn(t)}function Bn(e,t){let n=t;const r=e.length;for(let t=0;t<r;t++){const r=e.charAt(t);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function Kn(e){return e+""}function zn(e){const t=e.length;if(_(t>=2),2===t)return _(""===e.charAt(0)&&""===e.charAt(1)),B.emptyPath();const n=t-2,r=[];let i="";for(let n=0;n<t;){const t=e.indexOf("",n);switch((t<0||t>s)&&v(),e.charAt(t+1)){case"":const s=e.substring(n,t);let o;0===i.length?o=s:(o=i+=s,i=""),r.push(o);break;case"":i+=e.substring(n,t),i+="\0";break;case"":i+=e.substring(n,t+1);break;default:v()}n=t+2}return new B(r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,t){this.seconds=e,this.nanoseconds=t}}class Hn{constructor(e,t,n){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=n}}Hn.store="owner",Hn.key="owner";class Gn{constructor(e,t,n){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=n}}Gn.store="mutationQueues",Gn.keyPath="userId";class Qn{constructor(e,t,n,r,i){this.userId=e,this.batchId=t,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}Qn.store="mutations",Qn.keyPath="batchId",Qn.userMutationsIndex="userMutationsIndex",Qn.userMutationsKeyPath=["userId","batchId"];class Yn{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,$n(t)]}static key(e,t,n){return[e,$n(t),n]}}Yn.store="documentMutations",Yn.PLACEHOLDER=new Yn;class Jn{constructor(e,t){this.path=e,this.readTime=t}}class Xn{constructor(e,t){this.path=e,this.version=t}}class Zn{constructor(e,t,n,r,i,s){this.unknownDocument=e,this.noDocument=t,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=s}}Zn.store="remoteDocuments",Zn.readTimeIndex="readTimeIndex",Zn.readTimeIndexPath="readTime",Zn.collectionReadTimeIndex="collectionReadTimeIndex",Zn.collectionReadTimeIndexPath=["parentPath","readTime"];class er{constructor(e){this.byteSize=e}}er.store="remoteDocumentGlobal",er.key="remoteDocumentGlobalKey";class tr{constructor(e,t,n,r,i,s,o){this.targetId=e,this.canonicalId=t,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=s,this.query=o}}tr.store="targets",tr.keyPath="targetId",tr.queryTargetsIndexName="queryTargetsIndex",tr.queryTargetsKeyPath=["canonicalId","targetId"];class nr{constructor(e,t,n){this.targetId=e,this.path=t,this.sequenceNumber=n}}nr.store="targetDocuments",nr.keyPath=["targetId","path"],nr.documentTargetsIndex="documentTargetsIndex",nr.documentTargetsKeyPath=["path","targetId"];class rr{constructor(e,t,n,r){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}rr.key="targetGlobalKey",rr.store="targetGlobal";class ir{constructor(e,t){this.collectionId=e,this.parent=t}}ir.store="collectionParents",ir.keyPath=["collectionId","parent"];class sr{constructor(e,t,n,r){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=n,this.inForeground=r}}sr.store="clientMetadata",sr.keyPath="clientId";class or{constructor(e,t,n){this.bundleId=e,this.createTime=t,this.version=n}}or.store="bundles",or.keyPath="bundleId";class ar{constructor(e,t,n){this.name=e,this.readTime=t,this.bundledQuery=n}}ar.store="namedQueries",ar.keyPath="name";class cr{constructor(e,t,n){this.indexId=e,this.collectionGroup=t,this.fields=n}}cr.store="indexConfiguration",cr.keyPath="indexId",cr.collectionGroupIndex="collectionGroupIndex",cr.collectionGroupIndexPath="collectionGroup";class ur{constructor(e,t,n,r,i,s){this.indexId=e,this.uid=t,this.sequenceNumber=n,this.readTime=r,this.documentKey=i,this.largestBatchId=s}}ur.store="indexState",ur.keyPath=["indexId","uid"],ur.sequenceNumberIndex="sequenceNumberIndex",ur.sequenceNumberIndexPath=["uid","sequenceNumber"];class lr{constructor(e,t,n,r,i){this.indexId=e,this.uid=t,this.arrayValue=n,this.directionalValue=r,this.documentKey=i}}lr.store="indexEntries",lr.keyPath=["indexId","uid","arrayValue","directionalValue","documentKey"],lr.documentKeyIndex="documentKeyIndex",lr.documentKeyIndexPath=["indexId","uid","documentKey"];class hr{constructor(e,t,n,r,i,s){this.userId=e,this.collectionPath=t,this.documentId=n,this.collectionGroup=r,this.largestBatchId=i,this.overlayMutation=s}}hr.store="documentOverlays",hr.keyPath=["userId","collectionPath","documentId"],hr.collectionPathOverlayIndex="collectionPathOverlayIndex",hr.collectionPathOverlayIndexPath=["userId","collectionPath","largestBatchId"],hr.collectionGroupOverlayIndex="collectionGroupOverlayIndex",hr.collectionGroupOverlayIndexPath=["userId","collectionGroup","largestBatchId"];const dr=[...[...[...[...[Gn.store,Qn.store,Yn.store,Zn.store,tr.store,Hn.store,rr.store,nr.store],sr.store],er.store],ir.store],or.store,ar.store],fr=[...dr,hr.store],pr=[...fr,cr.store,ur.store,lr.store],mr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new yr((n,r)=>{this.nextCallback=(t=>{this.wrapSuccess(e,t).next(n,r)}),this.catchCallback=(e=>{this.wrapFailure(t,e).next(n,r)})})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof yr?t:yr.resolve(t)}catch(e){return yr.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):yr.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):yr.reject(t)}static resolve(e){return new yr((t,n)=>{t(e)})}static reject(e){return new yr((t,n)=>{n(e)})}static waitFor(e){return new yr((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=yr.resolve(!1);for(const n of e)t=t.next(e=>e?yr.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.At=new E,this.transaction.oncomplete=(()=>{this.At.resolve()}),this.transaction.onabort=(()=>{t.error?this.At.reject(new br(e,t.error)):this.At.resolve()}),this.transaction.onerror=(t=>{const n=Sr(t.target.error);this.At.reject(new br(e,n))})}static open(e,t,n,r){try{return new vr(t,e.transaction(r,n))}catch(e){throw new br(t,e)}}get Rt(){return this.At.promise}abort(e){e&&this.At.reject(e),this.aborted||(p("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}Pt(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Tr(t)}}class _r{constructor(e,t,n){this.name=e,this.version=t,this.bt=n,12.2===_r.vt(Object(o.s)())&&m("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return p("SimpleDb","Removing database:",e),Er(window.indexedDB.deleteDatabase(e)).toPromise()}static Vt(){if(!Object(o.z)())return!1;if(_r.St())return!0;const e=Object(o.s)(),t=_r.vt(e),n=0<t&&t<10,r=_r.Dt(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static St(){var t;return void 0!==e&&"YES"===(null===(t=Object({NODE_ENV:"production"}))||void 0===t?void 0:t.Ct)}static Nt(e,t){return e.store(t)}static vt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static Dt(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async xt(e){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=(e=>{const n=e.target.result;t(n)}),r.onblocked=(()=>{n(new br(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))}),r.onerror=(t=>{const r=t.target.error;"VersionError"===r.name?n(new T(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new T(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new br(e,r))}),r.onupgradeneeded=(e=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.bt.kt(t,r.transaction,e.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})})})),this.Ot&&(this.db.onversionchange=(e=>this.Ot(e))),this.db}Mt(e){this.Ot=e,this.db&&(this.db.onversionchange=(t=>e(t)))}async runTransaction(e,t,n,r){const i="readonly"===t;for(;;){0;try{this.db=await this.xt(e);const t=vr.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next(e=>(t.Pt(),e)).catch(e=>(t.abort(e),yr.reject(e))).toPromise();return s.catch(()=>{}),await t.Rt,s}catch(e){const t="FirebaseError"!==e.name&&s<3;if(p("SimpleDb","Transaction failed with error:",e.message,"Retrying:",t),this.close(),!t)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}class wr{constructor(e){this.$t=e,this.Ft=!1,this.Bt=null}get isDone(){return this.Ft}get Lt(){return this.Bt}set cursor(e){this.$t=e}done(){this.Ft=!0}Ut(e){this.Bt=e}delete(){return Er(this.$t.delete())}}class br extends T{constructor(e,t){super(I.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ir(e){return"IndexedDbTransactionError"===e.name}class Tr{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(p("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Er(n)}add(e){return p("SimpleDb","ADD",this.store.name,e,e),Er(this.store.add(e))}get(e){return Er(this.store.get(e)).next(t=>(void 0===t&&(t=null),p("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return p("SimpleDb","DELETE",this.store.name,e),Er(this.store.delete(e))}count(){return p("SimpleDb","COUNT",this.store.name),Er(this.store.count())}qt(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.Kt(e,(e,n)=>{t.push(n)}).next(()=>t)}{const e=this.store.getAll(n.range);return new yr((t,n)=>{e.onerror=(e=>{n(e.target.error)}),e.onsuccess=(e=>{t(e.target.result)})})}}Gt(e,t){p("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.jt=!1;const r=this.cursor(n);return this.Kt(r,(e,t,n)=>n.delete())}Qt(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.Kt(r,t)}Wt(e){const t=this.cursor({});return new yr((n,r)=>{t.onerror=(e=>{const t=Sr(e.target.error);r(t)}),t.onsuccess=(t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()})})}Kt(e,t){const n=[];return new yr((r,i)=>{e.onerror=(e=>{i(e.target.error)}),e.onsuccess=(e=>{const i=e.target.result;if(!i)return void r();const s=new wr(i),o=t(i.primaryKey,i.value,s);if(o instanceof yr){const e=o.catch(e=>(s.done(),yr.reject(e)));n.push(e)}s.isDone?r():null===s.Lt?i.continue():i.continue(s.Lt)})}).next(()=>yr.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.jt?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Er(e){return new yr((t,n)=>{e.onsuccess=(e=>{const n=e.target.result;t(n)}),e.onerror=(e=>{const t=Sr(e.target.error);n(t)})})}let Cr=!1;function Sr(e){const t=_r.vt(Object(o.s)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new T("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Cr||(Cr=!0,setTimeout(()=>{throw e},0)),e}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends gr{constructor(e,t){super(),this.zt=e,this.currentSequenceNumber=t}}function Or(e,t){const n=b(e);return _r.Nt(n.zt,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&Nt(r,e,n[t])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&xt(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&xt(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(F.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),on())}isEqual(e){return this.batchId===e.batchId&&L(this.mutations,e.mutations,(e,t)=>Pt(e,t))&&L(this.baseMutations,e.baseMutations,(e,t)=>Pt(e,t))}}class Nr{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){_(e.mutations.length===n.length);let r=rn;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new Nr(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t,n,r,i=F.min(),s=F.min(),o=G.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new Rr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this.Ht=e}}function Dr(e,t){let n;if(t.document)n=Pn(e.Ht,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=oe.fromSegments(t.noDocument.path),r=Ur(t.noDocument.readTime);n=Te.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return v();{const e=oe.fromSegments(t.unknownDocument.path),r=Ur(t.unknownDocument.version);n=Te.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(Mr(t.readTime)),n}function Lr(e,t){const n=jr(t.readTime),r=t.key.path.popLast().toArray();if(t.isFoundDocument()){const i=function(e,t){return{name:Sn(e,t.key),fields:t.data.value.mapValue.fields,updateTime:bn(e,t.version.toTimestamp())}}(e.Ht,t),s=t.hasCommittedMutations;return new Zn(null,null,i,s,n,r)}if(t.isNoDocument()){const e=t.key.path.toArray(),i=Fr(t.version),s=t.hasCommittedMutations;return new Zn(null,new Jn(e,i),null,s,n,r)}if(t.isUnknownDocument()){const e=t.key.path.toArray(),i=Fr(t.version);return new Zn(new Xn(e,i),null,null,!0,n,r)}return v()}function jr(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Mr(e){const t=new M(e[0],e[1]);return F.fromTimestamp(t)}function Fr(e){const t=e.toTimestamp();return new Wn(t.seconds,t.nanoseconds)}function Ur(e){const t=new M(e.seconds,e.nanoseconds);return F.fromTimestamp(t)}function Vr(e,t){const n=(t.baseMutations||[]).map(t=>Ln(e.Ht,t));for(let e=0;e<t.mutations.length-1;++e){const n=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){const r=t.mutations[e+1];n.updateTransforms=r.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}const r=t.mutations.map(t=>Ln(e.Ht,t)),i=M.fromMillis(t.localWriteTimeMs);return new Ar(t.batchId,i,n,r)}function qr(e){const t=Ur(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Ur(e.lastLimboFreeSnapshotVersion):F.min();let r;var i;return void 0!==e.query.documents?(_(1===(i=e.query).documents.length),r=nt(Qe(An(i.documents[0])))):r=function(e){return nt(Fn(e))}(e.query),new Rr(r,e.targetId,0,e.lastListenSequenceNumber,t,n,G.fromBase64String(e.resumeToken))}function $r(e,t){const n=Fr(t.snapshotVersion),r=Fr(t.lastLimboFreeSnapshotVersion);let i;i=Re(t.target)?jn(e.Ht,t.target):Mn(e.Ht,t.target);const s=t.resumeToken.toBase64();return new tr(t.targetId,Ne(t.target),n,s,t.sequenceNumber,r,i)}function Br(e){const t=Fn({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?rt(t,t.limit,"L"):t}function Kr(e,t){return new xr(t.largestBatchId,Ln(e.Ht,t.overlayMutation))}function zr(e,t){const n=t.path.lastSegment();return[e,$n(t.path.popLast()),n]}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{getBundleMetadata(e,t){return Hr(e).get(t).next(e=>{if(e)return{id:(t=e).bundleId,createTime:Ur(t.createTime),version:t.version};var t})}saveBundleMetadata(e,t){return Hr(e).put({bundleId:(n=t).id,createTime:Fr(Tn(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return Gr(e).get(t).next(e=>{if(e)return{name:(t=e).name,query:Br(t.bundledQuery),readTime:Ur(t.readTime)};var t})}saveNamedQuery(e,t){return Gr(e).put(function(e){return{name:e.name,readTime:Fr(Tn(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function Hr(e){return Or(e,or.store)}function Gr(e){return Or(e,ar.store)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,t){this.O=e,this.userId=t}static Jt(e,t){const n=t.uid||"";return new Qr(e,n)}getOverlay(e,t){return Yr(e).get(zr(this.userId,t)).next(e=>e?Kr(this.O,e):null)}saveOverlays(e,t,n){const r=[];return n.forEach(n=>{const i=new xr(t,n);r.push(this.Yt(e,i))}),yr.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach(e=>r.add($n(e.getCollectionPath())));const i=[];return r.forEach(t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(Yr(e).Gt(hr.collectionPathOverlayIndex,r))}),yr.waitFor(i)}getOverlaysForCollection(e,t,n){const r=new Map,i=$n(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Yr(e).qt(hr.collectionPathOverlayIndex,s).next(e=>{for(const t of e){const e=Kr(this.O,t);r.set(e.getKey(),e)}return r})}getOverlaysForCollectionGroup(e,t,n,r){const i=new Map;let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Yr(e).Qt({index:hr.collectionGroupOverlayIndex,range:o},(e,t,n)=>{const o=Kr(this.O,t);i.size<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()}).next(()=>i)}Yt(e,t){return Yr(e).put(function(e,t,n){const[r,i,s]=zr(t,n.mutation.key);return new hr(t,i,s,n.mutation.key.getCollectionGroup(),n.largestBatchId,Dn(e.Ht,n.mutation))}(this.O,this.userId,t))}}function Yr(e){return Or(e,hr.store)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(){}Xt(e,t){this.Zt(e,t),t.te()}Zt(e,t){if("nullValue"in e)this.ee(t,5);else if("booleanValue"in e)this.ee(t,10),t.ne(e.booleanValue?1:0);else if("integerValue"in e)this.ee(t,15),t.ne(J(e.integerValue));else if("doubleValue"in e){const n=J(e.doubleValue);isNaN(n)?this.ee(t,13):(this.ee(t,15),ie(n)?t.ne(0):t.ne(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ee(t,20),"string"==typeof n?t.se(n):(t.se(`${n.seconds||""}`),t.ne(n.nanos||0))}else if("stringValue"in e)this.ie(e.stringValue,t),this.re(t);else if("bytesValue"in e)this.ee(t,30),t.oe(X(e.bytesValue)),this.re(t);else if("referenceValue"in e)this.ce(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ee(t,45),t.ne(n.latitude||0),t.ne(n.longitude||0)}else"mapValue"in e?ue(e,ae)?this.ee(t,Number.MAX_SAFE_INTEGER):(this.ue(e.mapValue,t),this.re(t)):"arrayValue"in e?(this.ae(e.arrayValue,t),this.re(t)):v()}ie(e,t){this.ee(t,25),this.he(e,t)}he(e,t){t.se(e)}ue(e,t){const n=e.fields||{};this.ee(t,55);for(const e of Object.keys(n))this.ie(e,t),this.Zt(n[e],t)}ae(e,t){const n=e.values||[];this.ee(t,50);for(const e of n)this.Zt(e,t)}ce(e,t){this.ee(t,37),oe.fromName(e).path.forEach(e=>{this.ee(t,60),this.he(e,t)})}ee(e,t){e.ne(t)}re(e){e.ne(2)}}function Xr(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function Zr(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=Xr(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}Jr.le=new Jr;class ei{constructor(){this.buffer=new Uint8Array(1024),this.position=0}fe(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.de(n.value),n=t.next();this._e()}we(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.me(n.value),n=t.next();this.ge()}ye(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.de(e);else if(e<2048)this.de(960|e>>>6),this.de(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.de(480|e>>>12),this.de(128|63&e>>>6),this.de(128|63&e);else{const e=t.codePointAt(0);this.de(240|e>>>18),this.de(128|63&e>>>12),this.de(128|63&e>>>6),this.de(128|63&e)}}this._e()}pe(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.me(e);else if(e<2048)this.me(960|e>>>6),this.me(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.me(480|e>>>12),this.me(128|63&e>>>6),this.me(128|63&e);else{const e=t.codePointAt(0);this.me(240|e>>>18),this.me(128|63&e>>>12),this.me(128|63&e>>>6),this.me(128|63&e)}}this.ge()}Ie(e){const t=this.Ee(e),n=Zr(t);this.Te(1+n),this.buffer[this.position++]=255&n;for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=255&t[e]}Ae(e){const t=this.Ee(e),n=Zr(t);this.Te(1+n),this.buffer[this.position++]=~(255&n);for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=~(255&t[e])}Re(){this.Pe(255),this.Pe(255)}be(){this.ve(255),this.ve(255)}reset(){this.position=0}seed(e){this.Te(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ve(){return this.buffer.slice(0,this.position)}Ee(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let e=1;e<t.length;++e)t[e]^=n?255:0;return t}de(e){const t=255&e;0===t?(this.Pe(0),this.Pe(255)):255===t?(this.Pe(255),this.Pe(0)):this.Pe(t)}me(e){const t=255&e;0===t?(this.ve(0),this.ve(255)):255===t?(this.ve(255),this.ve(0)):this.ve(e)}_e(){this.Pe(0),this.Pe(1)}ge(){this.ve(0),this.ve(1)}Pe(e){this.Te(1),this.buffer[this.position++]=e}ve(e){this.Te(1),this.buffer[this.position++]=~e}Te(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class ti{constructor(e){this.Se=e}oe(e){this.Se.fe(e)}se(e){this.Se.ye(e)}ne(e){this.Se.Ie(e)}te(){this.Se.Re()}}class ni{constructor(e){this.Se=e}oe(e){this.Se.we(e)}se(e){this.Se.pe(e)}ne(e){this.Se.Ae(e)}te(){this.Se.be()}}class ri{constructor(){this.Se=new ei,this.De=new ti(this.Se),this.Ce=new ni(this.Se)}seed(e){this.Se.seed(e)}Ne(e){return 0===e?this.De:this.Ce}Ve(){return this.Se.Ve()}reset(){this.Se.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}}function si(e,t){let n=e.indexId-t.indexId;return 0!==n?n:0!==(n=oe.comparator(e.documentKey,t.documentKey))?n:0!==(n=oi(e.arrayValue,t.arrayValue))?n:oi(e.directionalValue,t.directionalValue)}function oi(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.xe=new ci}addToCollectionParentIndex(e,t){return this.xe.add(t),yr.resolve()}getCollectionParents(e,t){return yr.resolve(this.xe.getEntries(t))}addFieldIndex(e,t){return yr.resolve()}deleteFieldIndex(e,t){return yr.resolve()}getDocumentsMatchingTarget(e,t,n){return yr.resolve(on())}getFieldIndex(e,t){return yr.resolve(null)}getFieldIndexes(e,t){return yr.resolve([])}getNextCollectionGroupToUpdate(e){return yr.resolve(null)}updateCollectionGroup(e,t,n){return yr.resolve()}updateIndexEntries(e,t){return yr.resolve()}}class ci{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Yt(B.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Yt(B.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this.user=e,this.ke=new ci,this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.ke.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.ke.add(t)});const i={collectionId:n,parent:$n(r)};return li(e).put(i)}return yr.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[j(t),""],!1,!0);return li(e).qt(r).next(e=>{for(const r of e){if(r.collectionId!==t)break;n.push(zn(r.parent))}return n})}addFieldIndex(e,t){const n=di(e),r=function(e){return new cr(e.indexId,e.collectionGroup,e.fields.map(e=>[e.fieldPath.canonicalString(),e.kind]))}(t);return delete r.indexId,n.add(r).next()}deleteFieldIndex(e,t){const n=di(e),r=fi(e),i=hi(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t,n){return yr.resolve(on())}getFieldIndex(e,t){return yr.resolve(null)}Oe(e,t){const n=new ri;for(const r of function(e){return e.fields.filter(e=>2!==e.kind)}(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.Ne(r.kind);Jr.le.Xt(e,i)}return n.Ve()}Me(e){const t=new ri;return Jr.le.Xt(e,t.Ne(0)),t.Ve()}getFieldIndexes(e,t){const n=di(e),r=fi(e);return(t?n.qt(cr.collectionGroupIndex,IDBKeyRange.bound(t,t)):n.qt()).next(e=>{const t=[];return yr.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){const n=t?new Se(t.sequenceNumber,new ke(Ur(t.readTime),new oe(zn(t.documentKey)),t.largestBatchId)):Se.empty(),r=e.fields.map(([e,t])=>new Ce(z.fromServerFormat(e),t));return new Ee(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>e.indexState.sequenceNumber-t.indexState.sequenceNumber),e[0].collectionGroup))}updateCollectionGroup(e,t,n){const r=di(e),i=fi(e);return this.$e(e).next(e=>r.qt(cr.collectionGroupIndex,IDBKeyRange.bound(t,t)).next(t=>yr.forEach(t,t=>i.put(function(e,t,n,r){return new ur(e,t.uid||"",n,Fr(r.readTime),$n(r.documentKey.path),r.largestBatchId)}(t.indexId,this.user,e,n)))))}updateIndexEntries(e,t){const n=new Map;return yr.forEach(t,(t,r)=>{const i=n.get(t.collectionGroup);return(i?yr.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(n.set(t.collectionGroup,i),yr.forEach(i,n=>this.Fe(e,t,n).next(t=>{const i=this.Be(r,n);return t.isEqual(i)?yr.resolve():this.Le(e,r,t,i)}))))})}Ue(e,t,n){return hi(e).put(new lr(n.indexId,this.uid,n.arrayValue,n.directionalValue,$n(t.key.path)))}qe(e,t,n){return hi(e).delete([n.indexId,this.uid,n.arrayValue,n.directionalValue,$n(t.key.path)])}Fe(e,t,n){const r=hi(e);let i=new Yt(si);return r.Qt({index:lr.documentKeyIndex,range:IDBKeyRange.only([n.indexId,this.uid,$n(t.path)])},(e,r)=>{i=i.add(new ii(n.indexId,t,r.arrayValue,r.directionalValue))}).next(()=>i)}Be(e,t){let n=new Yt(si);const r=this.Oe(t,e);if(null==r)return n;const i=t.fields.find(e=>2===e.kind);if(null!=i){const s=e.data.field(i.fieldPath);if(ge(s))for(const i of s.arrayValue.values||[])n=n.add(new ii(t.indexId,e.key,this.Me(i),r))}else n=n.add(new ii(t.indexId,e.key,new Uint8Array,r));return n}Le(e,t,n,r){p("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const i=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=Xt(s),c=Xt(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=Xt(o)):t?(i(a),a=Xt(s)):(a=Xt(s),c=Xt(o))}}(n,r,si,n=>{i.push(this.Ue(e,t,n))},n=>{i.push(this.qe(e,t,n))}),yr.waitFor(i)}$e(e){let t=1;return fi(e).Qt({index:ur.sequenceNumberIndex,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}}function li(e){return Or(e,ir.store)}function hi(e){return Or(e,lr.store)}function di(e){return Or(e,cr.store)}function fi(e){return Or(e,ur.store)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class mi{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new mi(e,mi.DEFAULT_COLLECTION_PERCENTILE,mi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(e,t,n){const r=e.store(Qn.store),i=e.store(Yn.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Qt({range:o},(e,t,n)=>(a++,n.delete()));s.push(c.next(()=>{_(1===a)}));const u=[];for(const e of n.mutations){const r=Yn.key(t,e.key.path,n.batchId);s.push(i.delete(r)),u.push(e.key)}return yr.waitFor(s).next(()=>u)}function yi(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw v();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mi.DEFAULT_COLLECTION_PERCENTILE=10,mi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,mi.DEFAULT=new mi(41943040,mi.DEFAULT_COLLECTION_PERCENTILE,mi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),mi.DISABLED=new mi(-1,0,0);class vi{constructor(e,t,n,r){this.userId=e,this.O=t,this.indexManager=n,this.referenceDelegate=r,this.Ke={}}static Jt(e,t,n,r){_(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new vi(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return wi(e).Qt({index:Qn.userMutationsIndex,range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){const i=bi(e),s=wi(e);return s.add({}).next(o=>{_("number"==typeof o);const a=new Ar(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map(t=>Dn(e.Ht,t)),i=n.mutations.map(t=>Dn(e.Ht,t));return new Qn(t,n.batchId,n.localWriteTime.toMillis(),r,i)}(this.O,this.userId,a),u=[];let l=new Yt((e,t)=>D(e.canonicalString(),t.canonicalString()));for(const e of r){const t=Yn.key(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,Yn.PLACEHOLDER))}return l.forEach(t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.Ke[o]=a.keys()}),yr.waitFor(u).next(()=>a)})}lookupMutationBatch(e,t){return wi(e).get(t).next(e=>e?(_(e.userId===this.userId),Vr(this.O,e)):null)}Ge(e,t){return this.Ke[t]?yr.resolve(this.Ke[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){const n=e.keys();return this.Ke[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return wi(e).Qt({index:Qn.userMutationsIndex,range:r},(e,t,r)=>{t.userId===this.userId&&(_(t.batchId>=n),i=Vr(this.O,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return wi(e).Qt({index:Qn.userMutationsIndex,range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return wi(e).qt(Qn.userMutationsIndex,t).next(e=>e.map(e=>Vr(this.O,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Yn.prefixForPath(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return bi(e).Qt({range:r},(n,r,s)=>{const[o,a,c]=n,u=zn(a);if(o===this.userId&&t.path.isEqual(u))return wi(e).get(c).next(e=>{if(!e)throw v();_(e.userId===this.userId),i.push(Vr(this.O,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Yt(D);const r=[];return t.forEach(t=>{const i=Yn.prefixForPath(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=bi(e).Qt({range:s},(e,r,i)=>{const[s,o,a]=e,c=zn(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()});r.push(o)}),yr.waitFor(r).next(()=>this.je(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=Yn.prefixForPath(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new Yt(D);return bi(e).Qt({range:s},(e,t,i)=>{const[s,a,c]=e,u=zn(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()}).next(()=>this.je(e,o))}je(e,t){const n=[],r=[];return t.forEach(t=>{r.push(wi(e).get(t).next(e=>{if(null===e)throw v();_(e.userId===this.userId),n.push(Vr(this.O,e))}))}),yr.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return gi(e.zt,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.Qe(t.batchId)}),yr.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}Qe(e){delete this.Ke[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return yr.resolve();const n=IDBKeyRange.lowerBound(Yn.prefixForUser(this.userId)),r=[];return bi(e).Qt({range:n},(e,t,n)=>{if(e[0]===this.userId){const t=zn(e[1]);r.push(t)}else n.done()}).next(()=>{_(0===r.length)})})}containsKey(e,t){return _i(e,this.userId,t)}We(e){return Ii(e).get(this.userId).next(e=>e||new Gn(this.userId,-1,""))}}function _i(e,t,n){const r=Yn.prefixForPath(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return bi(e).Qt({range:s,jt:!0},(e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()}).next(()=>o)}function wi(e){return Or(e,Qn.store)}function bi(e){return Or(e,Yn.store)}function Ii(e){return Or(e,Gn.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.ze=e}next(){return this.ze+=2,this.ze}static He(){return new Ti(0)}static Je(){return new Ti(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t){this.referenceDelegate=e,this.O=t}allocateTargetId(e){return this.Ye(e).next(t=>{const n=new Ti(t.highestTargetId);return t.highestTargetId=n.next(),this.Xe(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Ye(e).next(e=>F.fromTimestamp(new M(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Ye(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.Ye(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Xe(e,r)))}addTargetData(e,t){return this.Ze(e,t).next(()=>this.Ye(e).next(n=>(n.targetCount+=1,this.tn(t,n),this.Xe(e,n))))}updateTargetData(e,t){return this.Ze(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Ci(e).delete(t.targetId)).next(()=>this.Ye(e)).next(t=>(_(t.targetCount>0),t.targetCount-=1,this.Xe(e,t)))}removeTargets(e,t,n){let r=0;const i=[];return Ci(e).Qt((s,o)=>{const a=qr(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))}).next(()=>yr.waitFor(i)).next(()=>r)}forEachTarget(e,t){return Ci(e).Qt((e,n)=>{const r=qr(n);t(r)})}Ye(e){return Si(e).get(rr.key).next(e=>(_(null!==e),e))}Xe(e,t){return Si(e).put(rr.key,t)}Ze(e,t){return Ci(e).put($r(this.O,t))}tn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Ye(e).next(e=>e.targetCount)}getTargetData(e,t){const n=Ne(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Ci(e).Qt({range:r,index:tr.queryTargetsIndexName},(e,n,r)=>{const s=qr(n);xe(t,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){const r=[],i=ki(e);return t.forEach(t=>{const s=$n(t.path);r.push(i.put(new nr(n,s))),r.push(this.referenceDelegate.addReference(e,n,t))}),yr.waitFor(r)}removeMatchingKeys(e,t,n){const r=ki(e);return yr.forEach(t,t=>{const i=$n(t.path);return yr.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){const n=ki(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=ki(e);let i=on();return r.Qt({range:n,jt:!0},(e,t,n)=>{const r=zn(e[1]),s=new oe(r);i=i.add(s)}).next(()=>i)}containsKey(e,t){const n=$n(t.path),r=IDBKeyRange.bound([n],[j(n)],!1,!0);let i=0;return ki(e).Qt({index:nr.documentTargetsIndex,jt:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}Tt(e,t){return Ci(e).get(t).next(e=>e?qr(e):null)}}function Ci(e){return Or(e,tr.store)}function Si(e){return Or(e,rr.store)}function ki(e){return Or(e,nr.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(e){if(e.code!==I.FAILED_PRECONDITION||e.message!==mr)throw e;p("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai([e,t],[n,r]){const i=D(e,n);return 0===i?D(t,r):i}class Ni{constructor(e){this.en=e,this.buffer=new Yt(Ai),this.nn=0}sn(){return++this.nn}rn(e){const t=[e,this.sn()];if(this.buffer.size<this.en)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Ai(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class xi{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.on=!1,this.cn=null}start(e){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.un(e)}stop(){this.cn&&(this.cn.cancel(),this.cn=null)}get started(){return null!==this.cn}un(e){const t=this.on?3e5:6e4;p("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.cn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.cn=null,this.on=!0;try{await e.collectGarbage(this.garbageCollector)}catch(e){Ir(e)?p("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Oi(e)}await this.un(e)})}}class Ri{constructor(e,t){this.an=e,this.params=t}calculateTargetCount(e,t){return this.an.hn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return yr.resolve(x.A);const n=new Ni(t);return this.an.forEachTarget(e,e=>n.rn(e.sequenceNumber)).next(()=>this.an.ln(e,e=>n.rn(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.an.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.an.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector","Garbage collection skipped; disabled"),yr.resolve(pi)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pi):this.fn(e,t))}getCacheSize(e){return this.an.getCacheSize(e)}fn(e,t){let n,r,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(p("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,o=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(u=Date.now(),d()<=s.a.DEBUG&&p("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-l}ms\n\tDetermined least recently used ${r} in `+(a-o)+"ms\n"+`\tRemoved ${i} targets in `+(c-a)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),yr.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new Ri(e,t)}(this,t)}hn(e){const t=this.dn(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}dn(e){let t=0;return this.ln(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}ln(e,t){return this._n(e,(e,n)=>t(n))}addReference(e,t,n){return Di(e,n)}removeReference(e,t,n){return Di(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Di(e,t)}wn(e,t){return function(e,t){let n=!1;return Ii(e).Wt(r=>_i(e,r,t).next(e=>(e&&(n=!0),yr.resolve(!e)))).next(()=>n)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this._n(e,(s,o)=>{if(o<=t){const t=this.wn(e,s).next(t=>{if(!t)return i++,n.getEntry(e,s).next(()=>(n.removeEntry(s,F.min()),ki(e).delete([0,$n(s.path)])))});r.push(t)}}).next(()=>yr.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Di(e,t)}_n(e,t){const n=ki(e);let r,i=x.A;return n.Qt({index:nr.documentTargetsIndex},([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==x.A&&t(new oe(zn(r)),i),i=o,r=s):i=x.A}).next(()=>{i!==x.A&&t(new oe(zn(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Di(e,t){return ki(e).put(function(e,t){return new nr(0,$n(e.path),t)}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){V(this.inner,(t,n)=>{for(const[t,r]of n)e(t,r)})}isEmpty(){return q(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.changes=new Li(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Te.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?yr.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.O=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Vi(e).put(qi(t),n)}removeEntry(e,t){const n=Vi(e),r=qi(t);return n.delete(r)}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.mn(e,n)))}getEntry(e,t){return Vi(e).get(qi(t)).next(e=>this.gn(t,e))}yn(e,t){return Vi(e).get(qi(t)).next(e=>({document:this.gn(t,e),size:yi(e)}))}getEntries(e,t){let n=en();return this.pn(e,t,(e,t)=>{const r=this.gn(e,t);n=n.insert(e,r)}).next(()=>n)}In(e,t){let n=en(),r=new Ht(oe.comparator);return this.pn(e,t,(e,t)=>{const i=this.gn(e,t);n=n.insert(e,i),r=r.insert(e,yi(t))}).next(()=>({documents:n,En:r}))}pn(e,t,n){if(t.isEmpty())return yr.resolve();const r=IDBKeyRange.bound(t.first().path.toArray(),t.last().path.toArray()),i=t.getIterator();let s=i.getNext();return Vi(e).Qt({range:r},(e,t,r)=>{const o=oe.fromSegments(e);for(;s&&oe.comparator(s,o)<0;)n(s,null),s=i.getNext();s&&s.isEqual(o)&&(n(s,t),s=i.hasNext()?i.getNext():null),s?r.Ut(s.path.toArray()):r.done()}).next(()=>{for(;s;)n(s,null),s=i.hasNext()?i.getNext():null})}getAll(e,t,n){let r=en();const i=t.length+1,s={};if(n.isEqual(F.min())){const e=t.toArray();s.range=IDBKeyRange.lowerBound(e)}else{const e=t.toArray(),r=jr(n);s.range=IDBKeyRange.lowerBound([e,r],!0),s.index=Zn.collectionReadTimeIndex}return Vi(e).Qt(s,(e,n,s)=>{if(e.length!==i)return;const o=this.gn(oe.fromSegments(e),n);t.isPrefixOf(o.key.path)?r=r.insert(o.key,o):s.done()}).next(()=>r)}newChangeBuffer(e){return new Fi(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return Ui(e).get(er.key).next(e=>(_(!!e),e))}mn(e,t){return Ui(e).put(er.key,t)}gn(e,t){if(t){const e=Dr(this.O,t);if(!e.isNoDocument()||!e.version.isEqual(F.min()))return e}return Te.newInvalidDocument(e)}}class Fi extends ji{constructor(e,t){super(),this.Tn=e,this.trackRemovals=t,this.An=new Li(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){const t=[];let n=0,r=new Yt((e,t)=>D(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{const o=this.An.get(i);if(s.isValidDocument()){const a=Lr(this.Tn.O,s);r=r.add(i.path.popLast());const c=yi(a);n+=c-o,t.push(this.Tn.addEntry(e,i,a))}else if(n-=o,this.trackRemovals){const n=Lr(this.Tn.O,s.convertToNoDocument(F.min()));t.push(this.Tn.addEntry(e,i,n))}else t.push(this.Tn.removeEntry(e,i))}),r.forEach(n=>{t.push(this.Tn.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.Tn.updateMetadata(e,n)),yr.waitFor(t)}getFromCache(e,t){return this.Tn.yn(e,t).next(e=>(this.An.set(t,e.size),e.document))}getAllFromCache(e,t){return this.Tn.In(e,t).next(({documents:e,En:t})=>(t.forEach((e,t)=>{this.An.set(e,t)}),e))}}function Ui(e){return Or(e,er.store)}function Vi(e){return Or(e,Zn.store)}function qi(e){return e.path.toArray()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this.O=e}kt(e,t,n,r){const i=new vr("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore(Hn.store)}(e),function(e){e.createObjectStore(Gn.store,{keyPath:Gn.keyPath}),e.createObjectStore(Qn.store,{keyPath:Qn.keyPath,autoIncrement:!0}).createIndex(Qn.userMutationsIndex,Qn.userMutationsKeyPath,{unique:!0}),e.createObjectStore(Yn.store)}(e),Bi(e),function(e){e.createObjectStore(Zn.store)}(e));let s=yr.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore(nr.store),e.deleteObjectStore(tr.store),e.deleteObjectStore(rr.store)}(e),Bi(e)),s=s.next(()=>(function(e){const t=i.store(rr.store),n=new rr(0,0,F.min().toTimestamp(),0);return t.put(rr.key,n)})())),n<4&&r>=4&&(0!==n&&(s=s.next(()=>(function(e,t){return t.store(Qn.store).qt().next(n=>{e.deleteObjectStore(Qn.store),e.createObjectStore(Qn.store,{keyPath:Qn.keyPath,autoIncrement:!0}).createIndex(Qn.userMutationsIndex,Qn.userMutationsKeyPath,{unique:!0});const r=t.store(Qn.store),i=n.map(e=>r.put(e));return yr.waitFor(i)})})(e,i))),s=s.next(()=>{!function(e){e.createObjectStore(sr.store,{keyPath:sr.keyPath})}(e)})),n<5&&r>=5&&(s=s.next(()=>this.Rn(i))),n<6&&r>=6&&(s=s.next(()=>((function(e){e.createObjectStore(er.store)})(e),this.Pn(i)))),n<7&&r>=7&&(s=s.next(()=>this.bn(i))),n<8&&r>=8&&(s=s.next(()=>this.vn(e,i))),n<9&&r>=9&&(s=s.next(()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e),function(e){const t=e.objectStore(Zn.store);t.createIndex(Zn.readTimeIndex,Zn.readTimeIndexPath,{unique:!1}),t.createIndex(Zn.collectionReadTimeIndex,Zn.collectionReadTimeIndexPath,{unique:!1})}(t)})),n<10&&r>=10&&(s=s.next(()=>this.Vn(i))),n<11&&r>=11&&(s=s.next(()=>{!function(e){e.createObjectStore(or.store,{keyPath:or.keyPath})}(e),function(e){e.createObjectStore(ar.store,{keyPath:ar.keyPath})}(e)})),n<12&&r>=12&&(s=s.next(()=>{!function(e){const t=e.createObjectStore(hr.store,{keyPath:hr.keyPath});t.createIndex(hr.collectionPathOverlayIndex,hr.collectionPathOverlayIndexPath,{unique:!1}),t.createIndex(hr.collectionGroupOverlayIndex,hr.collectionGroupOverlayIndexPath,{unique:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)})),n<13&&r>=13&&(s=s.next(()=>{!function(e){e.createObjectStore(cr.store,{keyPath:cr.keyPath,autoIncrement:!0}).createIndex(cr.collectionGroupIndex,cr.collectionGroupIndexPath,{unique:!1}),e.createObjectStore(ur.store,{keyPath:ur.keyPath}).createIndex(ur.sequenceNumberIndex,ur.sequenceNumberIndexPath,{unique:!1}),e.createObjectStore(lr.store,{keyPath:lr.keyPath}).createIndex(lr.documentKeyIndex,lr.documentKeyIndexPath,{unique:!1})}(e)})),s}Pn(e){let t=0;return e.store(Zn.store).Qt((e,n)=>{t+=yi(n)}).next(()=>{const n=new er(t);return e.store(er.store).put(er.key,n)})}Rn(e){const t=e.store(Gn.store),n=e.store(Qn.store);return t.qt().next(t=>yr.forEach(t,t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.qt(Qn.userMutationsIndex,r).next(n=>yr.forEach(n,n=>{_(n.userId===t.userId);const r=Vr(this.O,n);return gi(e,t.userId,r).next(()=>{})}))}))}bn(e){const t=e.store(nr.store),n=e.store(Zn.store);return e.store(rr.store).get(rr.key).next(e=>{const r=[];return n.Qt((n,i)=>{const s=new B(n),o=[0,$n(s)];r.push(t.get(o).next(n=>n?yr.resolve():(n=>t.put(new nr(0,$n(n),e.highestListenSequenceNumber)))(s)))}).next(()=>yr.waitFor(r))})}vn(e,t){e.createObjectStore(ir.store,{keyPath:ir.keyPath});const n=t.store(ir.store),r=new ci,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:$n(r)})}};return t.store(Zn.store).Qt({jt:!0},(e,t)=>{const n=new B(e);return i(n.popLast())}).next(()=>t.store(Yn.store).Qt({jt:!0},([e,t,n],r)=>{const s=zn(t);return i(s.popLast())}))}Vn(e){const t=e.store(tr.store);return t.Qt((e,n)=>{const r=qr(n),i=$r(this.O,r);return t.put(i)})}}function Bi(e){e.createObjectStore(nr.store,{keyPath:nr.keyPath}).createIndex(nr.documentTargetsIndex,nr.documentTargetsKeyPath,{unique:!0}),e.createObjectStore(tr.store,{keyPath:tr.keyPath}).createIndex(tr.queryTargetsIndexName,tr.queryTargetsKeyPath,{unique:!0}),e.createObjectStore(rr.store)}const Ki="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class zi{constructor(e,t,n,r,i,s,o,a,c,u,l=12){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Sn=i,this.window=s,this.document=o,this.Dn=c,this.Cn=u,this.schemaVersion=l,this.Nn=null,this.xn=!1,this.isPrimary=!1,this.networkEnabled=!0,this.kn=null,this.inForeground=!1,this.On=null,this.Mn=null,this.$n=Number.NEGATIVE_INFINITY,this.Fn=(e=>Promise.resolve()),!zi.Vt())throw new T(I.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Pi(this,r),this.Bn=t+"main",this.O=new Pr(a),this.Ln=new _r(this.Bn,this.schemaVersion,new $i(this.O)),this.Un=new Ei(this.referenceDelegate,this.O),this.qn=function(e){return new Mi(e)}(this.O),this.Kn=new Wr,this.window&&this.window.localStorage?this.Gn=this.window.localStorage:(this.Gn=null,!1===u&&m("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.jn().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new T(I.FAILED_PRECONDITION,Ki);return this.Qn(),this.Wn(),this.zn(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Un.getHighestSequenceNumber(e))}).then(e=>{this.Nn=new x(e,this.Dn)}).then(()=>{this.xn=!0}).catch(e=>(this.Ln&&this.Ln.close(),Promise.reject(e)))}Hn(e){return this.Fn=(async t=>{if(this.started)return e(t)}),e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ln.Mt(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Sn.enqueueAndForget(async()=>{this.started&&await this.jn()}))}jn(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Hi(e).put(new sr(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.Jn(e).next(e=>{e||(this.isPrimary=!1,this.Sn.enqueueRetryable(()=>this.Fn(!1)))})}).next(()=>this.Yn(e)).next(t=>this.isPrimary&&!t?this.Xn(e).next(()=>!1):!!t&&this.Zn(e).next(()=>!0))).catch(e=>{if(Ir(e))return p("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return p("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Sn.enqueueRetryable(()=>this.Fn(e)),this.isPrimary=e})}Jn(e){return Wi(e).get(Hn.key).next(e=>yr.resolve(this.ts(e)))}es(e){return Hi(e).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.ss(this.$n,18e5)){this.$n=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const t=Or(e,sr.store);return t.qt().next(e=>{const n=this.rs(e,18e5),r=e.filter(e=>-1===n.indexOf(e));return yr.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this.Gn)for(const t of e)this.Gn.removeItem(this.os(t.clientId))}}zn(){this.Mn=this.Sn.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.jn().then(()=>this.ns()).then(()=>this.zn()))}ts(e){return!!e&&e.ownerId===this.clientId}Yn(e){return this.Cn?yr.resolve(!0):Wi(e).get(Hn.key).next(t=>{if(null!==t&&this.ss(t.leaseTimestampMs,5e3)&&!this.cs(t.ownerId)){if(this.ts(t)&&this.networkEnabled)return!0;if(!this.ts(t)){if(!t.allowTabSynchronization)throw new T(I.FAILED_PRECONDITION,Ki);return!1}}return!(!this.networkEnabled||!this.inForeground)||Hi(e).qt().next(e=>void 0===this.rs(e,5e3).find(e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&p("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.xn=!1,this.us(),this.Mn&&(this.Mn.cancel(),this.Mn=null),this.hs(),this.ls(),await this.Ln.runTransaction("shutdown","readwrite",[Hn.store,sr.store],e=>{const t=new kr(e,x.A);return this.Xn(t).next(()=>this.es(t))}),this.Ln.close(),this.fs()}rs(e,t){return e.filter(e=>this.ss(e.updateTimeMs,t)&&!this.cs(e.clientId))}ds(){return this.runTransaction("getActiveClients","readonly",e=>Hi(e).qt().next(e=>this.rs(e,18e5).map(e=>e.clientId)))}get started(){return this.xn}getMutationQueue(e,t){return vi.Jt(e,this.O,t,this.referenceDelegate)}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getIndexManager(e){return new ui(e)}getDocumentOverlayCache(e){return Qr.Jt(this.O,e)}getBundleCache(){return this.Kn}runTransaction(e,t,n){p("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=13===(s=this.schemaVersion)?pr:12===s?fr:11===s?dr:void v();var s;let o;return this.Ln.runTransaction(e,r,i,r=>(o=new kr(r,this.Nn?this.Nn.next():x.A),"readwrite-primary"===t?this.Jn(o).next(e=>!!e||this.Yn(o)).next(t=>{if(!t)throw m(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Sn.enqueueRetryable(()=>this.Fn(!1)),new T(I.FAILED_PRECONDITION,mr);return n(o)}).next(e=>this.Zn(o).next(()=>e)):this._s(o).next(()=>n(o)))).then(e=>(o.raiseOnCommittedEvent(),e))}_s(e){return Wi(e).get(Hn.key).next(e=>{if(null!==e&&this.ss(e.leaseTimestampMs,5e3)&&!this.cs(e.ownerId)&&!this.ts(e)&&!(this.Cn||this.allowTabSynchronization&&e.allowTabSynchronization))throw new T(I.FAILED_PRECONDITION,Ki)})}Zn(e){const t=new Hn(this.clientId,this.allowTabSynchronization,Date.now());return Wi(e).put(Hn.key,t)}static Vt(){return _r.Vt()}Xn(e){const t=Wi(e);return t.get(Hn.key).next(e=>this.ts(e)?(p("IndexedDbPersistence","Releasing primary lease."),t.delete(Hn.key)):yr.resolve())}ss(e,t){const n=Date.now();return!(e<n-t||e>n&&(m(`Detected an update time that is in the future: ${e} > ${n}`),1))}Qn(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.On=(()=>{this.Sn.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.jn()))}),this.document.addEventListener("visibilitychange",this.On),this.inForeground="visible"===this.document.visibilityState)}hs(){this.On&&(this.document.removeEventListener("visibilitychange",this.On),this.On=null)}Wn(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.kn=(()=>{this.us(),Object(o.E)()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Sn.enterRestrictedMode(!0),this.Sn.enqueueAndForget(()=>this.shutdown())}),this.window.addEventListener("pagehide",this.kn))}ls(){this.kn&&(this.window.removeEventListener("pagehide",this.kn),this.kn=null)}cs(e){var t;try{const n=null!==(null===(t=this.Gn)||void 0===t?void 0:t.getItem(this.os(e)));return p("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return m("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}us(){if(this.Gn)try{this.Gn.setItem(this.os(this.clientId),String(Date.now()))}catch(e){m("Failed to set zombie client id.",e)}}fs(){if(this.Gn)try{this.Gn.removeItem(this.os(this.clientId))}catch(e){}}os(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Wi(e){return Or(e,Hn.store)}function Hi(e){return Or(e,sr.store)}function Gi(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Qi{constructor(e,t){this.progress=e,this.ws=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,t,n){this.qn=e,this.gs=t,this.indexManager=n}ys(e,t){return this.gs.getAllMutationBatchesAffectingDocumentKey(e,t).next(n=>this.ps(e,t,n))}ps(e,t,n){return this.qn.getEntry(e,t).next(e=>{for(const t of n)t.applyToLocalView(e);return e})}Is(e,t){e.forEach((e,n)=>{for(const e of t)e.applyToLocalView(n)})}Es(e,t){return this.qn.getEntries(e,t).next(t=>this.Ts(e,t).next(()=>t))}Ts(e,t){return this.gs.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>this.Is(t,e))}As(e,t,n){return function(e){return oe.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Rs(e,t.path):et(t)?this.Ps(e,t,n):this.bs(e,t,n)}Rs(e,t){return this.ys(e,new oe(t)).next(e=>{let t=nn();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}Ps(e,t,n){const r=t.collectionGroup;let i=nn();return this.indexManager.getCollectionParents(e,r).next(s=>yr.forEach(s,s=>{const o=function(e,t){return new He(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.bs(e,o,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}bs(e,t,n){let r;return this.qn.getAll(e,t.path,n).next(n=>(r=n,this.gs.getAllMutationBatchesAffectingQuery(e,t))).next(e=>{for(const t of e)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=Te.newInvalidDocument(n),r=r.insert(n,i)),xt(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}).next(()=>(r.forEach((e,n)=>{at(t,n)||(r=r.remove(e))}),r))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.vs=n,this.Vs=r}static Ss(e,t){let n=on(),r=on();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new Ji(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{Ds(e){this.Cs=e}As(e,t,n,r){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(F.min())?this.Ns(e,t):this.Cs.Es(e,r).next(i=>{const o=this.xs(t,i);return(Ye(t)||Je(t))&&this.ks(t.limitType,o,r,n)?this.Ns(e,t):(d()<=s.a.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),ot(t)),this.Cs.As(e,t,n).next(e=>(o.forEach(t=>{e=e.insert(t.key,t)}),e)))})}xs(e,t){let n=new Yt(ct(e));return t.forEach((t,r)=>{at(e,r)&&(n=n.add(r))}),n}ks(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ns(e,t){return d()<=s.a.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",ot(t)),this.Cs.As(e,t,F.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,t,n,r){this.persistence=e,this.Os=t,this.O=r,this.Ms=new Ht(D),this.$s=new Li(e=>Ne(e),xe),this.Fs=F.min(),this.Bs=e.getRemoteDocumentCache(),this.Un=e.getTargetCache(),this.Kn=e.getBundleCache(),this.Ls(n)}Ls(e){this.indexManager=this.persistence.getIndexManager(e),this.gs=this.persistence.getMutationQueue(e,this.indexManager),this.Us=new Yi(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function es(e,t,n,r){return new Zi(e,t,n,r)}async function ts(e,t){const n=b(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.gs.getAllMutationBatches(e).next(i=>(r=i,n.Ls(t),n.gs.getAllMutationBatches(e))).next(t=>{const i=[],s=[];let o=on();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.Us.Es(e,o).next(e=>({qs:e,removedBatchIds:i,addedBatchIds:s}))})})}function ns(e){const t=b(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Un.getLastRemoteSnapshotVersion(e))}function rs(e,t,n){let r=on();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=en();return n.forEach((n,i)=>{const s=e.get(n);i.isNoDocument()&&i.version.isEqual(F.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!s.isValidDocument()||i.version.compareTo(s.version)>0||0===i.version.compareTo(s.version)&&s.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",i.version)}),r})}function is(e,t){const n=b(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.gs.getNextMutationBatchAfterBatchId(e,t)))}function ss(e,t){const n=b(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.Un.getTargetData(e,t).next(i=>i?(r=i,yr.resolve(r)):n.Un.allocateTargetId(e).next(i=>(r=new Rr(t,i,0,e.currentSequenceNumber),n.Un.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.Ms.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(e.targetId,e),n.$s.set(t,e.targetId)),e})}async function os(e,t,n){const r=b(e),i=r.Ms.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!Ir(e))throw e;p("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ms=r.Ms.remove(t),r.$s.delete(i.target)}function as(e,t,n){const r=b(e);let i=F.min(),s=on();return r.persistence.runTransaction("Execute query","readonly",e=>(function(e,t,n){const r=b(e),i=r.$s.get(n);return void 0!==i?yr.resolve(r.Ms.get(i)):r.Un.getTargetData(t,n)})(r,e,nt(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Un.getMatchingKeysForTargetId(e,t.targetId).next(e=>{s=e})}).next(()=>r.Os.As(e,t,n?i:F.min(),n?s:on())).next(e=>({documents:e,Ks:s})))}function cs(e,t){const n=b(e),r=b(n.Un),i=n.Ms.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",e=>r.Tt(e,t).next(e=>e?e.target:null))}function us(e){const t=b(e);return t.persistence.runTransaction("Get new document changes","readonly",e=>(function(e,t,n){const r=b(e);let i=en(),s=jr(n);const o=Vi(t),a=IDBKeyRange.lowerBound(s,!0);return o.Qt({index:Zn.readTimeIndex,range:a},(e,t)=>{const n=Dr(r.O,t);i=i.insert(n.key,n),s=t.readTime}).next(()=>({ws:i,readTime:Mr(s)}))})(t.Bs,e,t.Fs)).then(({ws:e,readTime:n})=>(t.Fs=n,e))}async function ls(e,t,n=on()){const r=await ss(e,nt(Br(t.bundledQuery))),i=b(e);return i.persistence.runTransaction("Save named query","readwrite",e=>{const s=Tn(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Kn.saveNamedQuery(e,t);const o=r.withResumeToken(G.EMPTY_BYTE_STRING,s);return i.Ms=i.Ms.insert(o.targetId,o),i.Un.updateTargetData(e,o).next(()=>i.Un.removeMatchingKeysForTargetId(e,r.targetId)).next(()=>i.Un.addMatchingKeys(e,n,r.targetId)).next(()=>i.Kn.saveNamedQuery(e,t))})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.O=e,this.Ws=new Map,this.zs=new Map}getBundleMetadata(e,t){return yr.resolve(this.Ws.get(t))}saveBundleMetadata(e,t){var n;return this.Ws.set(t.id,{id:(n=t).id,version:n.version,createTime:Tn(n.createTime)}),yr.resolve()}getNamedQuery(e,t){return yr.resolve(this.zs.get(t))}saveNamedQuery(e,t){return this.zs.set(t.name,function(e){return{name:e.name,query:Br(e.bundledQuery),readTime:Tn(e.readTime)}}(t)),yr.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(){this.overlays=new Ht(oe.comparator),this.Hs=new Map}getOverlay(e,t){return yr.resolve(this.overlays.get(t))}saveOverlays(e,t,n){return n.forEach(n=>{this.Yt(e,t,n)}),yr.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Hs.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Hs.delete(n)),yr.resolve()}getOverlaysForCollection(e,t,n){const r=new Map,i=t.length+1,s=new oe(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return yr.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Ht((e,t)=>e-t);const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=new Map,i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=new Map,a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(t,e)),!(o.size>=r)););return yr.resolve(o)}Yt(e,t,n){if(null===n)return;const r=this.overlays.get(n.key);null!==r&&this.Hs.get(r.largestBatchId).delete(n.key),this.overlays=this.overlays.insert(n.key,new xr(t,n));let i=this.Hs.get(t);void 0===i&&(i=new Set,this.Hs.set(t,i)),i.add(n.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.Js=new Yt(ps.Ys),this.Xs=new Yt(ps.Zs)}isEmpty(){return this.Js.isEmpty()}addReference(e,t){const n=new ps(e,t);this.Js=this.Js.add(n),this.Xs=this.Xs.add(n)}ti(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.ei(new ps(e,t))}ni(e,t){e.forEach(e=>this.removeReference(e,t))}si(e){const t=new oe(new B([])),n=new ps(t,e),r=new ps(t,e+1),i=[];return this.Xs.forEachInRange([n,r],e=>{this.ei(e),i.push(e.key)}),i}ii(){this.Js.forEach(e=>this.ei(e))}ei(e){this.Js=this.Js.delete(e),this.Xs=this.Xs.delete(e)}ri(e){const t=new oe(new B([])),n=new ps(t,e),r=new ps(t,e+1);let i=on();return this.Xs.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new ps(e,0),n=this.Js.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class ps{constructor(e,t){this.key=e,this.oi=t}static Ys(e,t){return oe.comparator(e.key,t.key)||D(e.oi,t.oi)}static Zs(e,t){return D(e.oi,t.oi)||oe.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.gs=[],this.ci=1,this.ui=new Yt(ps.Ys)}checkEmpty(e){return yr.resolve(0===this.gs.length)}addMutationBatch(e,t,n,r){const i=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];const s=new Ar(i,t,n,r);this.gs.push(s);for(const t of r)this.ui=this.ui.add(new ps(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return yr.resolve(s)}lookupMutationBatch(e,t){return yr.resolve(this.ai(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.hi(n),i=r<0?0:r;return yr.resolve(this.gs.length>i?this.gs[i]:null)}getHighestUnacknowledgedBatchId(){return yr.resolve(0===this.gs.length?-1:this.ci-1)}getAllMutationBatches(e){return yr.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ps(t,0),r=new ps(t,Number.POSITIVE_INFINITY),i=[];return this.ui.forEachInRange([n,r],e=>{const t=this.ai(e.oi);i.push(t)}),yr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Yt(D);return t.forEach(e=>{const t=new ps(e,0),r=new ps(e,Number.POSITIVE_INFINITY);this.ui.forEachInRange([t,r],e=>{n=n.add(e.oi)})}),yr.resolve(this.li(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;oe.isDocumentKey(i)||(i=i.child(""));const s=new ps(new oe(i),0);let o=new Yt(D);return this.ui.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.oi)),!0)},s),yr.resolve(this.li(o))}li(e){const t=[];return e.forEach(e=>{const n=this.ai(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){_(0===this.fi(t.batchId,"removed")),this.gs.shift();let n=this.ui;return yr.forEach(t.mutations,r=>{const i=new ps(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ui=n})}Qe(e){}containsKey(e,t){const n=new ps(t,0),r=this.ui.firstAfterOrEqual(n);return yr.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.gs.length,yr.resolve()}fi(e,t){return this.hi(e)}hi(e){return 0===this.gs.length?0:e-this.gs[0].batchId}ai(e){const t=this.hi(e);return t<0||t>=this.gs.length?null:this.gs[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.di=e,this.docs=new Ht(oe.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.di(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return yr.resolve(n?n.document.mutableCopy():Te.newInvalidDocument(t))}getEntries(e,t){let n=en();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Te.newInvalidDocument(e))}),yr.resolve(n)}getAll(e,t,n){let r=en();const i=new oe(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||i.readTime.compareTo(n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return yr.resolve(r)}_i(e,t){return yr.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new ys(this)}getSize(e){return yr.resolve(this.size)}}class ys extends ji{constructor(e){super(),this.Tn=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Tn.addEntry(e,r)):this.Tn.removeEntry(n)}),yr.waitFor(t)}getFromCache(e,t){return this.Tn.getEntry(e,t)}getAllFromCache(e,t){return this.Tn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.persistence=e,this.wi=new Li(e=>Ne(e),xe),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.mi=0,this.gi=new fs,this.targetCount=0,this.yi=Ti.He()}forEachTarget(e,t){return this.wi.forEach((e,n)=>t(n)),yr.resolve()}getLastRemoteSnapshotVersion(e){return yr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return yr.resolve(this.mi)}allocateTargetId(e){return this.highestTargetId=this.yi.next(),yr.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.mi&&(this.mi=t),yr.resolve()}Ze(e){this.wi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.yi=new Ti(t),this.highestTargetId=t),e.sequenceNumber>this.mi&&(this.mi=e.sequenceNumber)}addTargetData(e,t){return this.Ze(t),this.targetCount+=1,yr.resolve()}updateTargetData(e,t){return this.Ze(t),yr.resolve()}removeTargetData(e,t){return this.wi.delete(t.target),this.gi.si(t.targetId),this.targetCount-=1,yr.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.wi.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.wi.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),yr.waitFor(i).next(()=>r)}getTargetCount(e){return yr.resolve(this.targetCount)}getTargetData(e,t){const n=this.wi.get(t)||null;return yr.resolve(n)}addMatchingKeys(e,t,n){return this.gi.ti(t,n),yr.resolve()}removeMatchingKeys(e,t,n){this.gi.ni(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),yr.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.gi.si(t),yr.resolve()}getMatchingKeysForTargetId(e,t){const n=this.gi.ri(t);return yr.resolve(n)}containsKey(e,t){return yr.resolve(this.gi.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,t){this.pi={},this.overlays={},this.Nn=new x(0),this.xn=!1,this.xn=!0,this.referenceDelegate=e(this),this.Un=new vs(this),this.indexManager=new ai,this.qn=function(e){return new gs(e)}(e=>this.referenceDelegate.Ii(e)),this.O=new Pr(t),this.Kn=new hs(this.O)}start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ds,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.pi[e.toKey()];return n||(n=new ms(t,this.referenceDelegate),this.pi[e.toKey()]=n),n}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(e,t,n){p("MemoryPersistence","Starting transaction:",e);const r=new ws(this.Nn.next());return this.referenceDelegate.Ei(),n(r).next(e=>this.referenceDelegate.Ti(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ai(e,t){return yr.or(Object.values(this.pi).map(n=>()=>n.containsKey(e,t)))}}class ws extends gr{constructor(e){super(),this.currentSequenceNumber=e}}class bs{constructor(e){this.persistence=e,this.Ri=new fs,this.Pi=null}static bi(e){return new bs(e)}get vi(){if(this.Pi)return this.Pi;throw v()}addReference(e,t,n){return this.Ri.addReference(n,t),this.vi.delete(n.toString()),yr.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.vi.add(n.toString()),yr.resolve()}markPotentiallyOrphaned(e,t){return this.vi.add(t.toString()),yr.resolve()}removeTarget(e,t){this.Ri.si(t.targetId).forEach(e=>this.vi.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.vi.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ei(){this.Pi=new Set}Ti(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return yr.forEach(this.vi,n=>{const r=oe.fromPath(n);return this.Vi(e,r).next(e=>{e||t.removeEntry(r,F.min())})}).next(()=>(this.Pi=null,t.apply(e)))}updateLimboDocument(e,t){return this.Vi(e,t).next(e=>{e?this.vi.delete(t.toString()):this.vi.add(t.toString())})}Ii(e){return 0}Vi(e,t){return yr.or([()=>yr.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(e,t){return`firestore_clients_${e}_${t}`}function Ts(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function Es(e,t){return`firestore_targets_${e}_${t}`}class Cs{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Si(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&((s="string"==typeof r.error.message&&"string"==typeof r.error.code)&&(i=new T(r.error.code,r.error.message))),s?new Cs(e,t,r.state,i):(m("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Di(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ss{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Si(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&((i="string"==typeof n.error.message&&"string"==typeof n.error.code)&&(r=new T(n.error.code,n.error.message))),i?new Ss(e,n.state,r):(m("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Di(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ks{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Si(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=cn();for(let e=0;r&&e<n.activeTargetIds.length;++e)r=se(n.activeTargetIds[e]),i=i.add(n.activeTargetIds[e]);return r?new ks(e,i):(m("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Os{constructor(e,t){this.clientId=e,this.onlineState=t}static Si(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new Os(t.clientId,t.onlineState):(m("SharedClientState",`Failed to parse online state: ${e}`),null)}}class As{constructor(){this.activeTargetIds=cn()}Ci(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ni(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Di(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ns{constructor(e,t,n,r,i){this.window=e,this.Sn=t,this.persistenceKey=n,this.xi=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ki=this.Oi.bind(this),this.Mi=new Ht(D),this.started=!1,this.$i=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Fi=Is(this.persistenceKey,this.xi),this.Bi=function(e){return`firestore_sequence_number_${e}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.Mi=this.Mi.insert(this.xi,new As),this.Li=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.Ui=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.qi=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.Ki=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.Gi=function(e){return`firestore_bundle_loaded_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.ki)}static Vt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.ds();for(const t of e){if(t===this.xi)continue;const e=this.getItem(Is(this.persistenceKey,t));if(e){const n=ks.Si(t,e);n&&(this.Mi=this.Mi.insert(n.clientId,n))}}this.ji();const t=this.storage.getItem(this.Ki);if(t){const e=this.Qi(t);e&&this.Wi(e)}for(const e of this.$i)this.Oi(e);this.$i=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Bi,JSON.stringify(e))}getAllActiveQueryTargets(){return this.zi(this.Mi)}isActiveQueryTarget(e){let t=!1;return this.Mi.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Hi(e,"pending")}updateMutationState(e,t,n){this.Hi(e,t,n),this.Ji(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Es(this.persistenceKey,e));if(n){const r=Ss.Si(e,n);r&&(t=r.state)}}return this.Yi.Ci(e),this.ji(),t}removeLocalQueryTarget(e){this.Yi.Ni(e),this.ji()}isLocalQueryTarget(e){return this.Yi.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Es(this.persistenceKey,e))}updateQueryState(e,t,n){this.Xi(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.Ji(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.Zi(e)}notifyBundleLoaded(){this.tr()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ki),this.removeItem(this.Fi),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return p("SharedClientState","READ",e,t),t}setItem(e,t){p("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){p("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Oi(e){const t=e;if(t.storageArea===this.storage){if(p("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Fi)return void m("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Sn.enqueueRetryable(async()=>{if(this.started){if(null!==t.key)if(this.Li.test(t.key)){if(null==t.newValue){const e=this.er(t.key);return this.nr(e,null)}{const e=this.sr(t.key,t.newValue);if(e)return this.nr(e.clientId,e)}}else if(this.Ui.test(t.key)){if(null!==t.newValue){const e=this.ir(t.key,t.newValue);if(e)return this.rr(e)}}else if(this.qi.test(t.key)){if(null!==t.newValue){const e=this.cr(t.key,t.newValue);if(e)return this.ur(e)}}else if(t.key===this.Ki){if(null!==t.newValue){const e=this.Qi(t.newValue);if(e)return this.Wi(e)}}else if(t.key===this.Bi){const e=function(e){let t=x.A;if(null!=e)try{const n=JSON.parse(e);_("number"==typeof n),t=n}catch(e){m("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==x.A&&this.sequenceNumberHandler(e)}else if(t.key===this.Gi)return this.syncEngine.ar()}else this.$i.push(t)})}}get Yi(){return this.Mi.get(this.xi)}ji(){this.setItem(this.Fi,this.Yi.Di())}Hi(e,t,n){const r=new Cs(this.currentUser,e,t,n),i=Ts(this.persistenceKey,this.currentUser,e);this.setItem(i,r.Di())}Ji(e){const t=Ts(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Zi(e){const t={clientId:this.xi,onlineState:e};this.storage.setItem(this.Ki,JSON.stringify(t))}Xi(e,t,n){const r=Es(this.persistenceKey,e),i=new Ss(e,t,n);this.setItem(r,i.Di())}tr(){this.setItem(this.Gi,"value-not-used")}er(e){const t=this.Li.exec(e);return t?t[1]:null}sr(e,t){const n=this.er(e);return ks.Si(n,t)}ir(e,t){const n=this.Ui.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return Cs.Si(new u(i),r,t)}cr(e,t){const n=this.qi.exec(e),r=Number(n[1]);return Ss.Si(r,t)}Qi(e){return Os.Si(e)}async rr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.hr(e.batchId,e.state,e.error);p("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}ur(e){return this.syncEngine.lr(e.targetId,e.state,e.error)}nr(e,t){const n=t?this.Mi.insert(e,t):this.Mi.remove(e),r=this.zi(this.Mi),i=this.zi(n),s=[],o=[];return i.forEach(e=>{r.has(e)||s.push(e)}),r.forEach(e=>{i.has(e)||o.push(e)}),this.syncEngine.dr(s,o).then(()=>{this.Mi=n})}Wi(e){this.Mi.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}zi(e){let t=cn();return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class xs{constructor(){this._r=new As,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this._r.Ci(e),this.wr[e]||"not-current"}updateQueryState(e,t,n){this.wr[e]=t}removeLocalQueryTarget(e){this._r.Ni(e)}isLocalQueryTarget(e){return this._r.activeTargetIds.has(e)}clearQueryState(e){delete this.wr[e]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(e){return this._r.activeTargetIds.has(e)}start(){return this._r=new As,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{mr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(){this.gr=(()=>this.yr()),this.pr=(()=>this.Ir()),this.Er=[],this.Tr()}mr(e){this.Er.push(e)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Er)e(0)}Ir(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Er)e(1)}static Vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.Ar=e.Ar,this.Rr=e.Rr}Pr(e){this.br=e}vr(e){this.Vr=e}onMessage(e){this.Sr=e}close(){this.Rr()}send(e){this.Ar(e)}Dr(){this.br()}Cr(e){this.Vr(e)}Nr(e){this.Sr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.kr=t+"://"+e.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Mr(e,t,n,r,i){const s=this.$r(e,t);p("RestConnection","Sending: ",s,n);const o={};return this.Fr(o,r,i),this.Br(e,s,o,n).then(e=>(p("RestConnection","Received: ",e),e),t=>{throw g("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t})}Lr(e,t,n,r,i){return this.Mr(e,t,n,r,i)}Fr(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+l,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}$r(e,t){const n=Ds[e];return`${this.kr}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Br(e,t,n,r){return new Promise((i,s)=>{const o=new a.g;o.listenOnce(a.c.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a.a.NO_ERROR:const t=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(t)),i(t);break;case a.a.TIMEOUT:p("Connection",'RPC "'+e+'" timed out'),s(new T(I.DEADLINE_EXCEEDED,"Request time out"));break;case a.a.HTTP_ERROR:const n=o.getStatus();if(p("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(t)>=0?t:I.UNKNOWN}(e.status);s(new T(t,e.message))}else s(new T(I.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new T(I.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{p("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);o.send(t,"POST",c,n,15)})}Ur(e,t,n){const r=[this.kr,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Object(a.h)(),s=Object(a.i)(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new a.d({})),this.Fr(c.initMessageHeaders,t,n),Object(o.A)()||Object(o.D)()||Object(o.w)()||Object(o.y)()||Object(o.F)()||Object(o.v)()||(c.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");p("Connection","Creating WebChannel: "+u,c);const l=i.createWebChannel(u,c);let h=!1,d=!1;const f=new Ls({Ar:e=>{d?p("Connection","Not sending because WebChannel is closed:",e):(h||(p("Connection","Opening WebChannel transport."),l.open(),h=!0),p("Connection","WebChannel sending:",e),l.send(e))},Rr:()=>l.close()}),m=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return m(l,a.f.EventType.OPEN,()=>{d||p("Connection","WebChannel transport opened.")}),m(l,a.f.EventType.CLOSE,()=>{d||(d=!0,p("Connection","WebChannel transport closed"),f.Cr())}),m(l,a.f.EventType.ERROR,e=>{d||(d=!0,g("Connection","WebChannel transport errored:",e),f.Cr(new T(I.UNAVAILABLE,"The operation could not be completed")))}),m(l,a.f.EventType.MESSAGE,e=>{var t;if(!d){const n=e.data[0];_(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){p("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=Bt[e];if(void 0!==t)return Wt(t)}(e),n=i.message;void 0===t&&(t=I.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),d=!0,f.Cr(new T(t,n)),l.close()}else p("Connection","WebChannel received:",n),f.Nr(n)}}),m(s,a.b.STAT_EVENT,e=>{e.stat===a.e.PROXY?p("Connection","Detected buffering proxy"):e.stat===a.e.NOPROXY&&p("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.Dr()},0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(){return"undefined"!=typeof window?window:null}function Fs(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(e){return new wn(e,!0)}class Vs{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Sn=e,this.timerId=t,this.qr=n,this.Kr=r,this.Gr=i,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(e){this.cancel();const t=Math.floor(this.jr+this.Jr()),n=Math.max(0,Date.now()-this.Wr),r=Math.max(0,t-n);r>0&&p("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.jr} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,r,()=>(this.Wr=Date.now(),e())),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){null!==this.Qr&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){null!==this.Qr&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,t,n,r,i,s,o,a){this.Sn=e,this.Xr=n,this.Zr=r,this.eo=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new Vs(e,t)}oo(){return 1===this.state||5===this.state||this.co()}co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&null===this.so&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,()=>this.lo()))}fo(e){this._o(),this.stream.send(e)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(e,t){this._o(),this.wo(),this.ro.cancel(),this.no++,4!==e?this.ro.reset():t&&t.code===I.RESOURCE_EXHAUSTED?(m(t.toString()),m("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):t&&t.code===I.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.mo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.vr(t)}mo(){}auth(){this.state=1;const e=this.yo(this.no),t=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.no===t&&this.po(e,n)},t=>{e(()=>{const e=new T(I.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Io(e)})})}po(e,t){const n=this.yo(this.no);this.stream=this.Eo(e,t),this.stream.Pr(()=>{n(()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,()=>(this.co()&&(this.state=3),Promise.resolve())),this.listener.Pr()))}),this.stream.vr(e=>{n(()=>this.Io(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}uo(){this.state=5,this.ro.Hr(async()=>{this.state=0,this.start()})}Io(e){return p("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}yo(e){return t=>{this.Sn.enqueueAndForget(()=>this.no===e?t():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $s extends qs{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.O=i}Eo(e,t){return this.eo.Ur("Listen",e,t)}onMessage(e){this.ro.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:v()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.N?(_(void 0===t||"string"==typeof t),G.fromBase64String(t||"")):(_(void 0===t||t instanceof Uint8Array),G.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?I.UNKNOWN:Wt(e.code);return new T(t,e.message||"")}(o);n=new fn(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=kn(e,r.document.name),s=Tn(r.document.updateTime),o=new be({mapValue:{fields:r.document.fields}}),a=Te.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new hn(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=kn(e,r.document),s=r.readTime?Tn(r.readTime):F.min(),o=Te.newNoDocument(i,s),a=r.removedTargetIds||[];n=new hn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=kn(e,r.document),s=r.removedTargetIds||[];n=new hn([],s,i,null)}else{if(!("filter"in t))return v();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new $t(r),s=e.targetId;n=new dn(s,i)}}return n}(this.O,e),n=function(e){if(!("targetChange"in e))return F.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?F.min():t.readTime?Tn(t.readTime):F.min()}(e);return this.listener.To(t,n)}Ao(e){const t={};t.database=Nn(this.O),t.addTarget=function(e,t){let n;const r=t.target;return(n=Re(r)?{documents:jn(e,r)}:{query:Mn(e,r)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=In(e,t.resumeToken):t.snapshotVersion.compareTo(F.min())>0&&(n.readTime=bn(e,t.snapshotVersion.toTimestamp())),n}(this.O,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.O,e);n&&(t.labels=n),this.fo(t)}Ro(e){const t={};t.database=Nn(this.O),t.removeTarget=e,this.fo(t)}}class Bs extends qs{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.O=i,this.Po=!1}get bo(){return this.Po}start(){this.Po=!1,this.lastStreamToken=void 0,super.start()}mo(){this.Po&&this.vo([])}Eo(e,t){return this.eo.Ur("Write",e,t)}onMessage(e){if(_(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Po){this.ro.reset();const t=function(e,t){return e&&e.length>0?(_(void 0!==t),e.map(e=>(function(e,t){let n=e.updateTime?Tn(e.updateTime):Tn(t);return n.isEqual(F.min())&&(n=Tn(t)),new St(n,e.transformResults||[])})(e,t))):[]}(e.writeResults,e.commitTime),n=Tn(e.commitTime);return this.listener.Vo(n,t)}return _(!e.writeResults||0===e.writeResults.length),this.Po=!0,this.listener.So()}Do(){const e={};e.database=Nn(this.O),this.fo(e)}vo(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>Dn(this.O,e))};this.fo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.eo=n,this.O=r,this.Co=!1}No(){if(this.Co)throw new T(I.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(e,t,n){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.eo.Mr(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(I.UNKNOWN,e.toString())})}Lr(e,t,n){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.eo.Lr(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(I.UNKNOWN,e.toString())})}terminate(){this.Co=!0}}class zs{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}Mo(){0===this.xo&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve())))}Bo(e){"Online"===this.state?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.$o("Offline")))}set(e){this.Lo(),this.xo=0,"Online"===e&&(this.Oo=!1),this.$o(e)}$o(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Fo(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?(m(t),this.Oo=!1):p("OnlineStateTracker",t)}Lo(){null!==this.ko&&(this.ko.cancel(),this.ko=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=i,this.jo.mr(e=>{n.enqueueAndForget(async()=>{to(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=b(e);t.Ko.add(4),await Gs(t),t.Qo.set("Unknown"),t.Ko.delete(4),await Hs(t)}(this))})}),this.Qo=new zs(n,r)}}async function Hs(e){if(to(e))for(const t of e.Go)await t(!0)}async function Gs(e){for(const t of e.Go)await t(!1)}function Qs(e,t){const n=b(e);n.qo.has(t.targetId)||(n.qo.set(t.targetId,t),eo(n)?Zs(n):fo(n).co()&&Js(n,t))}function Ys(e,t){const n=b(e),r=fo(n);n.qo.delete(t),r.co()&&Xs(n,t),0===n.qo.size&&(r.co()?r.ho():to(n)&&n.Qo.set("Unknown"))}function Js(e,t){e.Wo.Z(t.targetId),fo(e).Ao(t)}function Xs(e,t){e.Wo.Z(t),fo(e).Ro(t)}function Zs(e){e.Wo=new mn({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Tt:t=>e.qo.get(t)||null}),fo(e).start(),e.Qo.Mo()}function eo(e){return to(e)&&!fo(e).oo()&&e.qo.size>0}function to(e){return 0===b(e).Ko.size}function no(e){e.Wo=void 0}async function ro(e,t,n){if(!Ir(t))throw t;e.Ko.add(1),await Gs(e),e.Qo.set("Offline"),n||(n=(()=>ns(e.localStore))),e.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),e.Ko.delete(1),await Hs(e)})}function io(e,t){return t().catch(n=>ro(e,n,t))}async function so(e){const t=b(e),n=po(t);let r=t.Uo.length>0?t.Uo[t.Uo.length-1].batchId:-1;for(;oo(t);)try{const i=await is(t.localStore,r);if(null===i){0===t.Uo.length&&n.ho();break}r=i.batchId,ao(t,i)}catch(e){await ro(t,e)}co(t)&&uo(t)}function oo(e){return to(e)&&e.Uo.length<10}function ao(e,t){e.Uo.push(t);const n=po(e);n.co()&&n.bo&&n.vo(t.mutations)}function co(e){return to(e)&&!po(e).oo()&&e.Uo.length>0}function uo(e){po(e).start()}async function lo(e,t){const n=b(e);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const r=to(n);n.Ko.add(3),await Gs(n),r&&n.Qo.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ko.delete(3),await Hs(n)}async function ho(e,t){const n=b(e);t?(n.Ko.delete(2),await Hs(n)):t||(n.Ko.add(2),await Gs(n),n.Qo.set("Unknown"))}function fo(e){return e.zo||(e.zo=function(e,t,n){const r=b(e);return r.No(),new $s(t,r.eo,r.authCredentials,r.appCheckCredentials,r.O,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Pr:async function(e){e.qo.forEach((t,n)=>{Js(e,t)})}.bind(null,e),vr:async function(e,t){no(e),eo(e)?(e.Qo.Bo(t),Zs(e)):e.Qo.set("Unknown")}.bind(null,e),To:async function(e,t,n){if(e.Qo.set("Online"),t instanceof fn&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.qo.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.qo.delete(r),e.Wo.removeTarget(r))}(e,t)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ro(e,n)}else if(t instanceof hn?e.Wo.ct(t):t instanceof dn?e.Wo._t(t):e.Wo.ht(t),!n.isEqual(F.min()))try{const r=await ns(e.localStore);n.compareTo(r)>=0&&await function(e,t){const n=e.Wo.yt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.qo.get(r);i&&e.qo.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{const n=e.qo.get(t);if(!n)return;e.qo.set(t,n.withResumeToken(G.EMPTY_BYTE_STRING,n.snapshotVersion)),Xs(e,t);const r=new Rr(n.target,t,1,n.sequenceNumber);Js(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){p("RemoteStore","Failed to raise snapshot:",t),await ro(e,t)}}.bind(null,e)}),e.Go.push(async t=>{t?(e.zo.ao(),eo(e)?Zs(e):e.Qo.set("Unknown")):(await e.zo.stop(),no(e))})),e.zo}function po(e){return e.Ho||(e.Ho=function(e,t,n){const r=b(e);return r.No(),new Bs(t,r.eo,r.authCredentials,r.appCheckCredentials,r.O,n)}(e.datastore,e.asyncQueue,{Pr:async function(e){po(e).Do()}.bind(null,e),vr:async function(e,t){t&&po(e).bo&&await async function(e,t){if(zt(n=t.code)&&n!==I.ABORTED){const n=e.Uo.shift();po(e).ao(),await io(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await so(e)}var n}(e,t),co(e)&&uo(e)}.bind(null,e),So:async function(e){const t=po(e);for(const n of e.Uo)t.vo(n.mutations)}.bind(null,e),Vo:async function(e,t,n){const r=e.Uo.shift(),i=Nr.from(r,t,n);await io(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await so(e)}.bind(null,e)}),e.Go.push(async t=>{t?(e.Ho.ao(),await so(e)):(await e.Ho.stop(),e.Uo.length>0&&(p("RemoteStore",`Stopping write stream with ${e.Uo.length} pending writes`),e.Uo=[]))})),e.Ho
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class mo{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new E,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new mo(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function go(e,t){if(m("AsyncQueue",`${t}: ${e}`),Ir(e))return new T(I.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e){this.comparator=e?(t,n)=>e(t,n)||oe.comparator(t.key,n.key):(e,t)=>oe.comparator(e.key,t.key),this.keyedMap=nn(),this.sortedSet=new Ht(this.comparator)}static emptySet(e){return new yo(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof yo))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new yo;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.Jo=new Ht(oe.comparator)}track(e){const t=e.doc.key,n=this.Jo.get(t);n?0!==e.type&&3===n.type?this.Jo=this.Jo.insert(t,e):3===e.type&&1!==n.type?this.Jo=this.Jo.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Jo=this.Jo.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Jo=this.Jo.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Jo=this.Jo.remove(t):1===e.type&&2===n.type?this.Jo=this.Jo.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Jo=this.Jo.insert(t,{type:2,doc:e.doc}):v():this.Jo=this.Jo.insert(t,e)}Yo(){const e=[];return this.Jo.inorderTraversal((t,n)=>{e.push(n)}),e}}class _o{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new _o(e,t,yo.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&it(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.Xo=void 0,this.listeners=[]}}class bo{constructor(){this.queries=new Li(e=>st(e),it),this.onlineState="Unknown",this.Zo=new Set}}async function Io(e,t){const n=b(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new wo),i)try{s.Xo=await n.onListen(r)}catch(e){const n=go(e,`Initialization of query '${ot(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.tc(n.onlineState),s.Xo&&t.ec(s.Xo)&&Eo(n)}async function To(e,t){const n=b(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Eo(e){e.Zo.forEach(e=>{e.next()})}class Co{constructor(e,t,n){this.query=e,this.nc=t,this.sc=!1,this.ic=null,this.onlineState="Unknown",this.options=n||{}}ec(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new _o(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.sc?this.rc(e)&&(this.nc.next(e),t=!0):this.oc(e,this.onlineState)&&(this.cc(e),t=!0),this.ic=e,t}onError(e){this.nc.error(e)}tc(e){this.onlineState=e;let t=!1;return this.ic&&!this.sc&&this.oc(this.ic,e)&&(this.cc(this.ic),t=!0),t}oc(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return!(this.options.uc&&n||e.docs.isEmpty()&&"Offline"!==t)}rc(e){if(e.docChanges.length>0)return!0;const t=this.ic&&this.ic.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}cc(e){e=_o.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.sc=!0,this.nc.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t){this.payload=e,this.byteLength=t}ac(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.O=e}Gs(e){return kn(this.O,e)}js(e){return e.metadata.exists?Pn(this.O,e.document,!1):Te.newNoDocument(this.Gs(e.metadata.name),this.Qs(e.metadata.readTime))}Qs(e){return Tn(e)}}class Oo{constructor(e,t,n){this.hc=e,this.localStore=t,this.O=n,this.queries=[],this.documents=[],this.progress=Ao(e)}lc(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t),t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}fc(e){const t=new Map,n=new ko(this.O);for(const r of e)if(r.metadata.queries){const e=n.Gs(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||on()).add(e);t.set(n,r)}}return t}async complete(){const e=await async function(e,t,n,r){const i=b(e);let s=on(),o=en();for(const e of n){const n=t.Gs(e.metadata.name);e.document&&(s=s.add(n));const r=t.js(e);r.setReadTime(t.Qs(e.metadata.readTime)),o=o.insert(n,r)}const a=i.Bs.newChangeBuffer({trackRemovals:!0}),c=await ss(i,function(e){return nt(Qe(B.fromString(`__bundle__/docs/${e}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",e=>rs(e,a,o).next(t=>(a.apply(e),t)).next(t=>i.Un.removeMatchingKeysForTargetId(e,c.targetId).next(()=>i.Un.addMatchingKeys(e,s,c.targetId)).next(()=>i.Us.Ts(e,t)).next(()=>t)))}(this.localStore,new ko(this.O),this.documents,this.hc.id),t=this.fc(this.documents);for(const e of this.queries)await ls(this.localStore,e,t.get(e.name));return this.progress.taskState="Success",new Qi(Object.assign({},this.progress),e)}}function Ao(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.key=e}}class xo{constructor(e){this.key=e}}class Ro{constructor(e,t){this.query=e,this.dc=t,this._c=null,this.current=!1,this.wc=on(),this.mutatedKeys=on(),this.mc=ct(e),this.gc=new yo(this.mc)}get yc(){return this.dc}Ic(e,t){const n=t?t.Ec:new vo,r=t?t.gc:this.gc;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Ye(this.query)&&r.size===this.query.limit?r.last():null,c=Je(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const u=r.get(e),l=at(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Tc(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.mc(l,a)>0||c&&this.mc(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),Ye(this.query)||Je(this.query))for(;s.size>this.query.limit;){const e=Ye(this.query)?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{gc:s,Ec:n,ks:o,mutatedKeys:i}}Tc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.gc;this.gc=e.gc,this.mutatedKeys=e.mutatedKeys;const i=e.Ec.Yo();i.sort((e,t)=>(function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(e.type,t.type)||this.mc(e.doc,t.doc)),this.Ac(n);const s=t?this.Rc():[],o=0===this.wc.size&&this.current?1:0,a=o!==this._c;return this._c=o,0!==i.length||a?{snapshot:new _o(this.query,e.gc,r,i,e.mutatedKeys,0===o,a,!1),Pc:s}:{Pc:s}}tc(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({gc:this.gc,Ec:new vo,mutatedKeys:this.mutatedKeys,ks:!1},!1)):{Pc:[]}}bc(e){return!this.dc.has(e)&&!!this.gc.has(e)&&!this.gc.get(e).hasLocalMutations}Ac(e){e&&(e.addedDocuments.forEach(e=>this.dc=this.dc.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.dc=this.dc.delete(e)),this.current=e.current)}Rc(){if(!this.current)return[];const e=this.wc;this.wc=on(),this.gc.forEach(e=>{this.bc(e.key)&&(this.wc=this.wc.add(e.key))});const t=[];return e.forEach(e=>{this.wc.has(e)||t.push(new xo(e))}),this.wc.forEach(n=>{e.has(n)||t.push(new No(n))}),t}vc(e){this.dc=e.Ks,this.wc=on();const t=this.Ic(e.documents);return this.applyChanges(t,!0)}Vc(){return _o.fromInitialDocuments(this.query,this.gc,this.mutatedKeys,0===this._c)}}class Po{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Do{constructor(e){this.key=e,this.Sc=!1}}class Lo{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Dc={},this.Cc=new Li(e=>st(e),it),this.Nc=new Map,this.xc=new Set,this.kc=new Ht(oe.comparator),this.Oc=new Map,this.Mc=new fs,this.$c={},this.Fc=new Map,this.Bc=Ti.Je(),this.onlineState="Unknown",this.Lc=void 0}get isPrimaryClient(){return!0===this.Lc}}async function jo(e,t,n,r){e.Uc=((t,n,r)=>(async function(e,t,n,r){let i=t.view.Ic(n);i.ks&&(i=await as(e.localStore,t.query,!1).then(({documents:e})=>t.view.Ic(e,i)));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return Ko(e,t.targetId,o.Pc),o.snapshot})(e,t,n,r));const i=await as(e.localStore,t,!0),s=new Ro(t,i.Ks),o=s.Ic(i.documents),a=ln.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);Ko(e,n,c.Pc);const u=new Po(t,n,s);return e.Cc.set(t,u),e.Nc.has(n)?e.Nc.get(n).push(t):e.Nc.set(n,[t]),c.snapshot}async function Mo(e,t){const n=b(e);try{const r=await function(e,t){const n=b(e),r=t.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const s=n.Bs.newChangeBuffer({trackRemovals:!0});i=n.Ms;const o=[];t.targetChanges.forEach((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Un.removeMatchingKeys(e,s.removedDocuments,a).next(()=>n.Un.addMatchingKeys(e,s.addedDocuments,a)));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(G.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,u,s)&&o.push(n.Un.updateTargetData(e,u))});let a=en();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),o.push(rs(e,s,t.documentUpdates).next(e=>{a=e})),!r.isEqual(F.min())){const t=n.Un.getLastRemoteSnapshotVersion(e).next(t=>n.Un.setTargetsMetadata(e,e.currentSequenceNumber,r));o.push(t)}return yr.waitFor(o).next(()=>s.apply(e)).next(()=>n.Us.Ts(e,a)).next(()=>a)}).then(e=>(n.Ms=i,e))}(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.Oc.get(t);r&&(_(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Sc=!0:e.modifiedDocuments.size>0?_(r.Sc):e.removedDocuments.size>0&&(_(r.Sc),r.Sc=!1))}),await Ho(n,r,t)}catch(e){await Oi(e)}}function Fo(e,t,n){const r=b(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Cc.forEach((n,r)=>{const i=r.view.tc(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=b(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const e of n.listeners)e.tc(t)&&(r=!0)}),r&&Eo(n)}(r.eventManager,t),e.length&&r.Dc.To(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Uo(e,t){const n=b(e),r=t.batch.batchId;try{const i=await function(e,t){const n=b(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=yr.resolve();return s.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const s=n.docVersions.get(e);_(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.gs.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.gs.performConsistencyCheck(e)).next(()=>n.Us.Es(e,r))})}(n.localStore,t);qo(n,r,null),Vo(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ho(n,i)}catch(e){await Oi(e)}}function Vo(e,t){(e.Fc.get(t)||[]).forEach(e=>{e.resolve()}),e.Fc.delete(t)}function qo(e,t,n){const r=b(e);let i=r.$c[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.$c[r.currentUser.toKey()]=i}}function $o(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Nc.get(t))e.Cc.delete(r),n&&e.Dc.qc(r,n);e.Nc.delete(t),e.isPrimaryClient&&e.Mc.si(t).forEach(t=>{e.Mc.containsKey(t)||Bo(e,t)})}function Bo(e,t){e.xc.delete(t.path.canonicalString());const n=e.kc.get(t);null!==n&&(Ys(e.remoteStore,n),e.kc=e.kc.remove(t),e.Oc.delete(n),Wo(e))}function Ko(e,t,n){for(const r of n)r instanceof No?(e.Mc.addReference(r.key,t),zo(e,r)):r instanceof xo?(p("SyncEngine","Document no longer in limbo: "+r.key),e.Mc.removeReference(r.key,t),e.Mc.containsKey(r.key)||Bo(e,r.key)):v()}function zo(e,t){const n=t.key,r=n.path.canonicalString();e.kc.get(n)||e.xc.has(r)||(p("SyncEngine","New document in limbo: "+n),e.xc.add(r),Wo(e))}function Wo(e){for(;e.xc.size>0&&e.kc.size<e.maxConcurrentLimboResolutions;){const t=e.xc.values().next().value;e.xc.delete(t);const n=new oe(B.fromString(t)),r=e.Bc.next();e.Oc.set(r,new Do(n)),e.kc=e.kc.insert(n,r),Qs(e.remoteStore,new Rr(nt(Qe(n.path)),r,2,x.A))}}async function Ho(e,t,n){const r=b(e),i=[],s=[],o=[];r.Cc.isEmpty()||(r.Cc.forEach((e,a)=>{o.push(r.Uc(a,t,n).then(e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=Ji.Ss(a.targetId,e);s.push(t)}}))}),await Promise.all(o),r.Dc.To(i),await async function(e,t){const n=b(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>yr.forEach(t,t=>yr.forEach(t.vs,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>yr.forEach(t.Vs,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!Ir(e))throw e;p("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Ms.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ms=n.Ms.insert(t,i)}}}(r.localStore,s))}async function Go(e,t){const n=b(e),r=await as(n.localStore,t.query,!0),i=t.view.vc(r);return n.isPrimaryClient&&Ko(n,t.targetId,i.Pc),i}async function Qo(e,t,n){const r=b(e),i=[],s=[];for(const e of t){let t;const n=r.Nc.get(e);if(n&&0!==n.length){t=await ss(r.localStore,nt(n[0]));for(const e of n){const t=r.Cc.get(e),n=await Go(r,t);n.snapshot&&s.push(n.snapshot)}}else{const n=await cs(r.localStore,e);t=await ss(r.localStore,n),await jo(r,Yo(n),e,!1)}i.push(t)}return r.Dc.To(s),i}function Yo(e){return Ge(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function Jo(e){const t=b(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Mo.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=function(e,t){const n=b(e),r=n.Oc.get(t);if(r&&r.Sc)return on().add(r.key);{let e=on();const r=n.Nc.get(t);if(!r)return e;for(const t of r){const r=n.Cc.get(t);e=e.unionWith(r.view.yc)}return e}}.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=async function(e,t,n){const r=b(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Oc.get(t),s=i&&i.key;if(s){let e=new Ht(oe.comparator);e=e.insert(s,Te.newNoDocument(s,F.min()));const n=on().add(s),i=new un(F.min(),new Map,new Yt(D),e,n);await Mo(r,i),r.kc=r.kc.remove(s),r.Oc.delete(t),Wo(r)}else await os(r.localStore,t,!1).then(()=>$o(r,t,n)).catch(Oi)}.bind(null,t),t.Dc.To=function(e,t){const n=b(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.listeners)t.ec(e)&&(r=!0);i.Xo=e}}r&&Eo(n)}.bind(null,t.eventManager),t.Dc.qc=function(e,t,n){const r=b(e),i=r.queries.get(t);if(i)for(const e of i.listeners)e.onError(n);r.queries.delete(t)}.bind(null,t.eventManager),t}function Xo(e){const t=b(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Uo.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=async function(e,t,n){const r=b(e);try{const e=await function(e,t){const n=b(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.gs.lookupMutationBatch(e,t).next(t=>(_(null!==t),r=t.keys(),n.gs.removeMutationBatch(e,t))).next(()=>n.gs.performConsistencyCheck(e)).next(()=>n.Us.Es(e,r))})}(r.localStore,t);qo(r,t,n),Vo(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Ho(r,e)}catch(n){await Oi(n)}}.bind(null,t),t}class Zo{constructor(){this.synchronizeTabs=!1}async initialize(e){this.O=Us(e.databaseInfo.databaseId),this.sharedClientState=this.Gc(e),this.persistence=this.jc(e),await this.persistence.start(),this.gcScheduler=this.Qc(e),this.localStore=this.Wc(e)}Qc(e){return null}Wc(e){return es(this.persistence,new Xi,e.initialUser,this.O)}jc(e){return new _s(bs.bi,this.O)}Gc(e){return new xs}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ea extends Zo{constructor(e,t,n){super(),this.zc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await async function(e){const t=b(e);return t.persistence.runTransaction("Synchronize last document change read time","readonly",e=>(function(e){const t=Vi(e);let n=F.min();return t.Qt({index:Zn.readTimeIndex,reverse:!0},(e,t,r)=>{t.readTime&&(n=Mr(t.readTime)),r.done()}).next(()=>n)})(e)).then(e=>{t.Fs=e})}(this.localStore),await this.zc.initialize(this,e),await Xo(this.zc.syncEngine),await so(this.zc.remoteStore),await this.persistence.Hn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Wc(e){return es(this.persistence,new Xi,e.initialUser,this.O)}Qc(e){const t=this.persistence.referenceDelegate.garbageCollector;return new xi(t,e.asyncQueue)}jc(e){const t=Gi(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?mi.withCacheSize(this.cacheSizeBytes):mi.DEFAULT;return new zi(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Ms(),Fs(),this.O,this.sharedClientState,!!this.forceOwnership)}Gc(e){return new xs}}class ta extends ea{constructor(e,t){super(e,t,!1),this.zc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.zc.syncEngine;this.sharedClientState instanceof Ns&&(this.sharedClientState.syncEngine={hr:async function(e,t,n,r){const i=b(e),s=await function(e,t){const n=b(e),r=b(n.gs);return n.persistence.runTransaction("Lookup mutation documents","readonly",e=>r.Ge(e,t).next(t=>t?n.Us.Es(e,t):yr.resolve(null)))}(i.localStore,t);null!==s?("pending"===n?await so(i.remoteStore):"acknowledged"===n||"rejected"===n?(qo(i,t,r||null),Vo(i,t),function(e,t){b(b(e).gs).Qe(t)}(i.localStore,t)):v(),await Ho(i,s)):p("SyncEngine","Cannot apply mutation batch with id: "+t)}.bind(null,t),lr:async function(e,t,n,r){const i=b(e);if(i.Lc)p("SyncEngine","Ignoring unexpected query state notification.");else if(i.Nc.has(t))switch(n){case"current":case"not-current":{const e=await us(i.localStore),r=un.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await Ho(i,e,r);break}case"rejected":await os(i.localStore,t,!0),$o(i,t,r);break;default:v()}}.bind(null,t),dr:async function(e,t,n){const r=Jo(e);if(r.Lc){for(const e of t){if(r.Nc.has(e)){p("SyncEngine","Adding an already active target "+e);continue}const t=await cs(r.localStore,e),n=await ss(r.localStore,t);await jo(r,Yo(t),n.targetId,!1),Qs(r.remoteStore,n)}for(const e of n)r.Nc.has(e)&&await os(r.localStore,e,!1).then(()=>{Ys(r.remoteStore,e),$o(r,e)}).catch(Oi)}}.bind(null,t),ds:function(e){return b(b(b(e).localStore).persistence).ds()}.bind(null,t),ar:async function(e){const t=b(e);return us(t.localStore).then(e=>Ho(t,e))}.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Hn(async e=>{await async function(e,t){const n=b(e);if(Jo(n),Xo(n),!0===t&&!0!==n.Lc){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await Qo(n,e.toArray());n.Lc=!0,await ho(n.remoteStore,!0);for(const e of t)Qs(n.remoteStore,e)}else if(!1===t&&!1!==n.Lc){const e=[];let t=Promise.resolve();n.Nc.forEach((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then(()=>($o(n,i),os(n.localStore,i,!0))),Ys(n.remoteStore,i)}),await t,await Qo(n,e),function(e){const t=b(n);t.Oc.forEach((e,n)=>{Ys(t.remoteStore,n)}),t.Mc.ii(),t.Oc=new Map,t.kc=new Ht(oe.comparator)}(),n.Lc=!1,await ho(n.remoteStore,!1)}}(this.zc.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):e||this.gcScheduler.stop())})}Gc(e){const t=Ms();if(!Ns.Vt(t))throw new T(I.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Gi(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ns(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class na{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=(e=>Fo(this.syncEngine,e,1)),this.remoteStore.remoteSyncer.handleCredentialChange=async function(e,t){const n=b(e);if(!n.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());const e=await ts(n.localStore,t);n.currentUser=t,function(e,t){e.Fc.forEach(e=>{e.forEach(e=>{e.reject(new T(I.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.Fc.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Ho(n,e.qs)}}.bind(null,this.syncEngine),await ho(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new bo}createDatastore(e){const t=Us(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new js(r));var r;return function(e,t,n,r){return new Ks(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=(e=>Fo(this.syncEngine,e,0)),s=Ps.Vt()?new Ps:new Rs,new Ws(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Lo(e,t,n,r,i,s);return o&&(a.Lc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=b(e);p("RemoteStore","RemoteStore shutting down."),t.Ko.add(5),await Gs(t),t.jo.shutdown(),t.Qo.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Hc(this.observer.next,e)}error(e){this.observer.error?this.Hc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Jc(){this.muted=!0}Hc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,t){this.Yc=e,this.O=t,this.metadata=new E,this.buffer=new Uint8Array,this.Xc=new TextDecoder("utf-8"),this.Zc().then(e=>{e&&e.ac()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.payload)}`))},e=>this.metadata.reject(e))}close(){return this.Yc.cancel()}async getMetadata(){return this.metadata.promise}async Kc(){return await this.getMetadata(),this.Zc()}async Zc(){const e=await this.tu();if(null===e)return null;const t=this.Xc.decode(e),n=Number(t);isNaN(n)&&this.eu(`length string (${t}) is not valid number`);const r=await this.nu(n);return new So(JSON.parse(r),e.length+n)}su(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async tu(){for(;this.su()<0&&!await this.iu(););if(0===this.buffer.length)return null;const e=this.su();e<0&&this.eu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async nu(e){for(;this.buffer.length<e;)await this.iu()&&this.eu("Reached the end of bundle when more is expected.");const t=this.Xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}eu(e){throw this.Yc.cancel(),new Error(`Invalid bundle format: ${e}`)}async iu(){const e=await this.Yc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=b(e),r=Nn(n.O)+"/documents",i={documents:t.map(e=>Sn(n.O,e))},s=await n.Lr("BatchGetDocuments",r,i),o=new Map;s.forEach(e=>{const t=function(e,t){return"found"in t?function(e,t){_(!!t.found),t.found.name,t.found.updateTime;const n=kn(e,t.found.name),r=Tn(t.found.updateTime),i=new be({mapValue:{fields:t.found.fields}});return Te.newFoundDocument(n,r,i)}(e,t):"missing"in t?function(e,t){_(!!t.missing),_(!!t.readTime);const n=kn(e,t.missing),r=Tn(t.readTime);return Te.newNoDocument(n,r)}(e,t):v()}(n.O,e);o.set(t.key.toString(),t)});const a=[];return t.forEach(e=>{const t=o.get(e.toString());_(!!t),a.push(t)}),a}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new Vt(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{const n=oe.fromPath(t);this.mutations.push(new qt(n,this.precondition(n)))}),await async function(e,t){const n=b(e),r=Nn(n.O)+"/documents",i={writes:t.map(e=>Dn(n.O,e))};await n.Mr("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw v();t=F.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new T(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?kt.updateTime(t):kt.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(F.min()))throw new T(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return kt.updateTime(t)}return kt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,t,n,r){this.asyncQueue=e,this.datastore=t,this.updateFunction=n,this.deferred=r,this.ru=5,this.ro=new Vs(this.asyncQueue,"transaction_retry")}run(){this.ru-=1,this.ou()}ou(){this.ro.Hr(async()=>{const e=new oa(this.datastore),t=this.cu(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.uu(e)}))}).catch(e=>{this.uu(e)})})}cu(e){try{const t=this.updateFunction(e);return!re(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}uu(e){this.ru>0&&this.au(e)?(this.ru-=1,this.asyncQueue.enqueueAndForget(()=>(this.ou(),Promise.resolve()))):this.deferred.reject(e)}au(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!zt(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=P.R(),this.authCredentialListener=(()=>Promise.resolve()),this.appCheckCredentialListener=(()=>Promise.resolve()),this.authCredentials.start(n,async e=>{p("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(p("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new E;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=go(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function ua(e,t){e.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await ts(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function la(e,t){e.asyncQueue.verifyOperationInProgress();const n=await ha(e);p("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>lo(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>lo(t.remoteStore,n)),e.onlineComponents=t}async function ha(e){return e.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await ua(e,new Zo)),e.offlineComponents}async function da(e){return e.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await la(e,new na)),e.onlineComponents}function fa(e){return ha(e).then(e=>e.persistence)}function pa(e){return ha(e).then(e=>e.localStore)}function ma(e){return da(e).then(e=>e.remoteStore)}function ga(e){return da(e).then(e=>e.syncEngine)}async function ya(e){const t=await da(e),n=t.eventManager;return n.onListen=async function(e,t){const n=Jo(e);let r,i;const s=n.Cc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Vc();else{const e=await ss(n.localStore,nt(t));n.isPrimaryClient&&Qs(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await jo(n,t,r,"current"===s)}return i}.bind(null,t.syncEngine),n.onUnlisten=async function(e,t){const n=b(e),r=n.Cc.get(t),i=n.Nc.get(r.targetId);if(i.length>1)return n.Nc.set(r.targetId,i.filter(e=>!it(e,t))),void n.Cc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await os(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ys(n.remoteStore,r.targetId),$o(n,r.targetId)}).catch(Oi)):($o(n,r.targetId),await os(n.localStore,r.targetId,!0))}.bind(null,t.syncEngine),n}function va(e,t,n={}){const r=new E;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){const s=new ia({next:s=>{t.enqueueAndForget(()=>To(e,o));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new T(I.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new T(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Co(Qe(n.path),s,{includeMetadataChanges:!0,uc:!0});return Io(e,o)})(await ya(e),e.asyncQueue,t,n,r)),r.promise}function _a(e,t,n={}){const r=new E;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){const s=new ia({next:n=>{t.enqueueAndForget(()=>To(e,o)),n.fromCache&&"server"===r.source?i.reject(new T(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Co(n,s,{includeMetadataChanges:!0,uc:!0});return Io(e,o)})(await ya(e),e.asyncQueue,t,n,r)),r.promise}function wa(e,t,n,r){const i=function(e,t){let n;return function(e,t){return new sa(e,t)}(function(e,t){if(e instanceof Uint8Array)return ra(e,t);if(e instanceof ArrayBuffer)return ra(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n="string"==typeof e?(new TextEncoder).encode(e):e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,Us(t));e.asyncQueue.enqueueAndForget(async()=>{!function(e,t,n){const r=b(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=b(e),r=Tn(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",e=>n.Kn.getBundleMetadata(e,t.id)).then(e=>!!e&&e.createTime.compareTo(r)>=0)}(e.localStore,r))return await t.close(),void n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r));n._updateProgress(Ao(r));const i=new Oo(r,e.localStore,t.O);let s=await t.Kc();for(;s;){const e=await i.lc(s);e&&n._updateProgress(e),s=await t.Kc()}const o=await i.complete();await Ho(e,o.ws,void 0),await function(e,t){const n=b(e);return n.persistence.runTransaction("Save bundle","readwrite",e=>n.Kn.saveBundleMetadata(e,t))}(e.localStore,r),n._completeWith(o.progress)}catch(e){g("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then(()=>{r.sharedClientState.notifyBundleLoaded()})}(await ga(e),i,r)})}const ba=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(e,t,n){if(!n)throw new T(I.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ta(e,t,n,r){if(!0===t&&!0===r)throw new T(I.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ea(e){if(!oe.isDocumentKey(e))throw new T(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ca(e){if(oe.isDocumentKey(e))throw new T(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Sa(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":v()}function ka(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new T(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sa(e);throw new T(I.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Oa(e,t){if(t<=0)throw new T(I.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new T(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new T(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Ta("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Aa({}),this._settingsFrozen=!1,e instanceof ne?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new T(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ne(e.options.projectId)}(e))}get app(){if(!this._app)throw new T(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new T(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Aa(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new S;switch(e.type){case"gapi":const t=e.client;return _(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new A(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new T(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=ba.get(e);t&&(p("ComponentProvider","Removing Datastore"),ba.delete(e),t.terminate())}(this),Promise.resolve()}}function xa(e,t,n,r={}){var i;const s=(e=ka(e,Na))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&g("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=u.MOCK_USER;else{t=Object(o.k)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new T(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(s)}e._authCredentials=new k(new C(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Da(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ra(this.firestore,e,this._key)}}class Pa{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Pa(this.firestore,e,this._query)}}class Da extends Pa{constructor(e,t,n){super(e,t,Qe(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ra(this.firestore,null,new oe(e))}withConverter(e){return new Da(this.firestore,e,this._path)}}function La(e,t,...n){if(e=Object(o.r)(e),Ia("collection","path",t),e instanceof Na){const r=B.fromString(t,...n);return Ca(r),new Da(e,null,r)}{if(!(e instanceof Ra||e instanceof Da))throw new T(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(B.fromString(t,...n));return Ca(r),new Da(e.firestore,null,r)}}function ja(e,t){if(e=ka(e,Na),Ia("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new T(I.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Pa(e,null,function(e){return new He(B.emptyPath(),e)}(t))}function Ma(e,t,...n){if(e=Object(o.r)(e),1===arguments.length&&(t=P.R()),Ia("doc","path",t),e instanceof Na){const r=B.fromString(t,...n);return Ea(r),new Ra(e,null,new oe(r))}{if(!(e instanceof Ra||e instanceof Da))throw new T(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(B.fromString(t,...n));return Ea(r),new Ra(e.firestore,e instanceof Da?e.converter:null,new oe(r))}}function Fa(e,t){return e=Object(o.r)(e),t=Object(o.r)(t),(e instanceof Ra||e instanceof Da)&&(t instanceof Ra||t instanceof Da)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function Ua(e,t){return e=Object(o.r)(e),t=Object(o.r)(t),e instanceof Pa&&t instanceof Pa&&e.firestore===t.firestore&&it(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Va{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new Vs(this,"async_queue_retry"),this.yu=(()=>{const e=Fs();e&&p("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ro.Yr()});const e=Fs();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.fu){this.fu=!0,this.mu=e||!1;const t=Fs();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.yu)}}enqueue(e){if(this.pu(),this.fu)return new Promise(()=>{});const t=new E;return this.Iu(()=>this.fu&&this.mu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.lu.push(e),this.Eu()))}async Eu(){if(0!==this.lu.length){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(e){if(!Ir(e))throw e;p("AsyncQueue","Operation failed with retryable error: "+e)}this.lu.length>0&&this.ro.Hr(()=>this.Eu())}}Iu(e){const t=this.hu.then(()=>(this.wu=!0,e().catch(e=>{throw this._u=e,this.wu=!1,m("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)),e}).then(e=>(this.wu=!1,e))));return this.hu=t,t}enqueueAfterDelay(e,t,n){this.pu(),this.gu.indexOf(e)>-1&&(t=0);const r=mo.createAndSchedule(this,e,t,n,e=>this.Tu(e));return this.du.push(r),r}pu(){this._u&&v()}verifyOperationInProgress(){}async Au(){let e;do{e=this.hu,await e}while(e!==this.hu)}Ru(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}Pu(e){return this.Au().then(()=>{this.du.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.du)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Au()})}bu(e){this.gu.push(e)}Tu(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function qa(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of["next","error","complete"])if(e in n&&"function"==typeof n[e])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}class $a{constructor(){this._progressObserver={},this._taskCompletionResolver=new E,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=-1;class Ka extends Na{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new Va,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Wa(this),this._firestoreClient.terminate()}}function za(e){return e._firestoreClient||Wa(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Wa(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new te(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new ca(e._authCredentials,e._appCheckCredentials,e._queue,r)}function Ha(e,t){nc(e=ka(e,Ka));const n=za(e),r=e._freezeSettings(),i=new na;return Qa(n,i,new ea(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function Ga(e){nc(e=ka(e,Ka));const t=za(e),n=e._freezeSettings(),r=new na;return Qa(t,r,new ta(r,n.cacheSizeBytes))}function Qa(e,t,n){const r=new E;return e.asyncQueue.enqueue(async()=>{try{await ua(e,n),await la(e,t),r.resolve()}catch(e){if(!function(e){return"FirebaseError"===e.name?e.code===I.FAILED_PRECONDITION||e.code===I.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(e))throw e;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+e),r.reject(e)}}).then(()=>r.promise)}function Ya(e){if(e._initialized&&!e._terminated)throw new T(I.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new E;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!_r.Vt())return Promise.resolve();const t=e+"main";await _r.delete(t)}(Gi(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function Ja(e){return function(e){const t=new E;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t){const n=b(e);to(n.remoteStore)||p("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(e){const t=b(n.localStore);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>t.gs.getHighestUnacknowledgedBatchId(e))}();if(-1===r)return void t.resolve();const i=n.Fc.get(r)||[];i.push(t),n.Fc.set(r,i)}catch(e){const n=go(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}})(await ga(e),t)),t.promise}(za(e=ka(e,Ka)))}function Xa(e){return function(e){return e.asyncQueue.enqueue(async()=>{const t=await fa(e),n=await ma(e);return t.setNetworkEnabled(!0),function(e){const t=b(n);return t.Ko.delete(0),Hs(t)}()})}(za(e=ka(e,Ka)))}function Za(e){return function(e){return e.asyncQueue.enqueue(async()=>{const t=await fa(e),n=await ma(e);return t.setNetworkEnabled(!1),async function(e){const t=b(n);t.Ko.add(0),await Gs(t),t.Qo.set("Offline")}()})}(za(e=ka(e,Ka)))}function ec(e,t){const n=za(e=ka(e,Ka)),r=new $a;return wa(n,e._databaseId,t,r),r}function tc(e,t){return function(e,t){return e.asyncQueue.enqueue(async()=>(function(e,t){const n=b(e);return n.persistence.runTransaction("Get named query","readonly",e=>n.Kn.getNamedQuery(e,t))})(await pa(e),t))}(za(e=ka(e,Ka)),t).then(t=>t?new Pa(e,null,t.query):null)}function nc(e){if(e._initialized||e._terminated)throw new T(I.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new T(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new z(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ic{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ic(G.fromBase64String(e))}catch(e){throw new T(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new ic(G.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new T(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new T(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return D(this._lat,e._lat)||D(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=/^__.*__$/;class cc{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new jt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Lt(e,this.data,t,this.fieldTransforms)}}class uc{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new jt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function lc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class hc{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.O=n,this.ignoreUndefinedProperties=r,void 0===i&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}Su(e){return new hc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.O,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Du(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Su({path:n,Cu:!1});return r.Nu(e),r}xu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Su({path:n,Cu:!1});return r.vu(),r}ku(e){return this.Su({path:void 0,Cu:!0})}Ou(e){return xc(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.$u)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Nu(this.path.get(e))}Nu(e){if(0===e.length)throw this.Ou("Document fields must not be empty");if(lc(this.Vu)&&ac.test(e))throw this.Ou('Document fields cannot begin and end with "__"')}}class dc{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.O=n||Us(e)}Fu(e,t,n,r=!1){return new hc({Vu:e,methodName:t,$u:n,path:z.emptyPath(),Cu:!1,Mu:r},this.databaseId,this.O,this.ignoreUndefinedProperties)}}function fc(e){const t=e._freezeSettings(),n=Us(e._databaseId);return new dc(e._databaseId,!!t.ignoreUndefinedProperties,n)}function pc(e,t,n,r,i,s={}){const o=e.Fu(s.merge||s.mergeFields?2:0,t,n,i);kc("Data must be an object, but it was:",o,r);const a=Cc(r,o);let c,u;if(s.merge)c=new W(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Oc(t,r,n);if(!o.contains(i))throw new T(I.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Rc(e,i)||e.push(i)}c=new W(e),u=o.fieldTransforms.filter(e=>c.covers(e.field))}else c=null,u=o.fieldTransforms;return new cc(new be(a),c,u)}class mc extends sc{_toFieldTransform(e){if(2!==e.Vu)throw 1===e.Vu?e.Ou(`${this._methodName}() can only appear at the top level of your update data`):e.Ou(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mc}}function gc(e,t,n){return new hc({Vu:3,$u:t.settings.$u,methodName:e._methodName,Cu:n},t.databaseId,t.O,t.ignoreUndefinedProperties)}class yc extends sc{_toFieldTransform(e){return new Ct(e.path,new yt)}isEqual(e){return e instanceof yc}}class vc extends sc{constructor(e,t){super(e),this.Bu=t}_toFieldTransform(e){const t=gc(this,e,!0),n=this.Bu.map(e=>Ec(e,t)),r=new vt(n);return new Ct(e.path,r)}isEqual(e){return this===e}}class _c extends sc{constructor(e,t){super(e),this.Bu=t}_toFieldTransform(e){const t=gc(this,e,!0),n=this.Bu.map(e=>Ec(e,t)),r=new wt(n);return new Ct(e.path,r)}isEqual(e){return this===e}}class wc extends sc{constructor(e,t){super(e),this.Lu=t}_toFieldTransform(e){const t=new It(e.O,dt(e.O,this.Lu));return new Ct(e.path,t)}isEqual(e){return this===e}}function bc(e,t,n,r){const i=e.Fu(1,t,n);kc("Data must be an object, but it was:",i,r);const s=[],a=be.empty();V(r,(e,r)=>{const c=Nc(t,e,n);r=Object(o.r)(r);const u=i.xu(c);if(r instanceof mc)s.push(c);else{const e=Ec(r,u);null!=e&&(s.push(c),a.set(c,e))}});const c=new W(s);return new uc(a,c,i.fieldTransforms)}function Ic(e,t,n,r,i,s){const a=e.Fu(1,t,n),c=[Oc(t,r,n)],u=[i];if(s.length%2!=0)throw new T(I.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)c.push(Oc(t,s[e])),u.push(s[e+1]);const l=[],h=be.empty();for(let e=c.length-1;e>=0;--e)if(!Rc(l,c[e])){const t=c[e];let n=u[e];n=Object(o.r)(n);const r=a.xu(t);if(n instanceof mc)l.push(t);else{const e=Ec(n,r);null!=e&&(l.push(t),h.set(t,e))}}const d=new W(l);return new uc(h,d,a.fieldTransforms)}function Tc(e,t,n,r=!1){return Ec(n,e.Fu(r?4:3,t))}function Ec(e,t){if(Sc(e=Object(o.r)(e)))return kc("Unsupported field value:",t,e),Cc(e,t);if(e instanceof sc)return function(e,t){if(!lc(t.Vu))throw t.Ou(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Ou(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Cu&&4!==t.Vu)throw t.Ou("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Ec(i,t.ku(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Object(o.r)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return dt(t.O,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=M.fromDate(e);return{timestampValue:bn(t.O,n)}}if(e instanceof M){const n=new M(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:bn(t.O,n)}}if(e instanceof oc)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof ic)return{bytesValue:In(t.O,e._byteString)};if(e instanceof Ra){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Ou(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:En(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Ou(`Unsupported field value: ${Sa(e)}`)}(e,t)}function Cc(e,t){const n={};return q(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):V(e,(e,r)=>{const i=Ec(r,t.Du(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function Sc(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof M||e instanceof oc||e instanceof ic||e instanceof Ra||e instanceof sc)}function kc(e,t,n){if(!Sc(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Sa(n);throw"an object"===r?t.Ou(e+" a custom object"):t.Ou(e+" "+r)}}function Oc(e,t,n){if((t=Object(o.r)(t))instanceof rc)return t._internalPath;if("string"==typeof t)return Nc(e,t);throw xc("Field path arguments must be of type string or ",e,!1,void 0,n)}const Ac=new RegExp("[~\\*/\\[\\]]");function Nc(e,t,n){if(t.search(Ac)>=0)throw xc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new rc(...t.split("."))._internalPath}catch(r){throw xc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function xc(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new T(I.INVALID_ARGUMENT,a+e+c)}function Rc(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ra(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Dc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Lc("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Dc extends Pc{data(){return super.data()}}function Lc(e,t){return"string"==typeof t?Nc(e,t):t instanceof rc?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mc extends Pc{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Fc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Lc("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Fc extends Mc{data(e={}){return super.data(e)}}class Uc{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new jc(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Fc(this._firestore,this._userDataWriter,n.key,n,new jc(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new T(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>({type:"added",doc:new Fc(e._firestore,e._userDataWriter,n.doc.key,n.doc,new jc(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new Fc(e._firestore,e._userDataWriter,t.doc.key,t.doc,new jc(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Vc(e,t){return e instanceof Mc&&t instanceof Mc?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof Uc&&t instanceof Uc&&e._firestore===t._firestore&&Ua(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(e){if(Je(e)&&0===e.explicitOrderBy.length)throw new T(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $c{}function Bc(e,...t){for(const n of t)e=n._apply(e);return e}class Kc extends $c{constructor(e,t,n){super(),this.Uu=e,this.qu=t,this.Ku=n,this.type="where"}_apply(e){const t=fc(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new T(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){su(o,s);const t=[];for(const n of o)t.push(iu(r,e,n));a={arrayValue:{values:t}}}else a=iu(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||su(o,s),a=Tc(n,"where",o,"in"===s||"not-in"===s);const c=Pe.create(i,s,a);return function(e,t){if(t.S()){const n=Ze(e);if(null!==n&&!n.isEqual(t.field))throw new T(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=Xe(e);null!==r&&ou(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(t.op){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}());if(null!==n)throw n===t.op?new T(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new T(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,0,t,e.firestore._databaseId,this.Uu,this.qu,this.Ku);return new Pa(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new He(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function zc(e,t,n){const r=t,i=Lc("where",e);return new Kc(i,r,n)}class Wc extends $c{constructor(e,t){super(),this.Uu=e,this.Gu=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new T(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new T(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Be(t,n);return function(e,t){if(null===Xe(e)){const n=Ze(e);null!==n&&ou(e,n,t.field)}}(e,r),r}(e._query,this.Uu,this.Gu);return new Pa(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new He(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Hc(e,t="asc"){const n=t,r=Lc("orderBy",e);return new Wc(r,n)}class Gc extends $c{constructor(e,t,n){super(),this.type=e,this.ju=t,this.Qu=n}_apply(e){return new Pa(e.firestore,e.converter,rt(e._query,this.ju,this.Qu))}}function Qc(e){return Oa("limit",e),new Gc("limit",e,"F")}function Yc(e){return Oa("limitToLast",e),new Gc("limitToLast",e,"L")}class Jc extends $c{constructor(e,t,n){super(),this.type=e,this.Wu=t,this.zu=n}_apply(e){const t=ru(e,this.type,this.Wu,this.zu);return new Pa(e.firestore,e.converter,function(e,t){return new He(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function Xc(...e){return new Jc("startAt",e,!0)}function Zc(...e){return new Jc("startAfter",e,!1)}class eu extends $c{constructor(e,t,n){super(),this.type=e,this.Wu=t,this.zu=n}_apply(e){const t=ru(e,this.type,this.Wu,this.zu);return new Pa(e.firestore,e.converter,function(e,t){return new He(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function tu(...e){return new eu("endBefore",e,!1)}function nu(...e){return new eu("endAt",e,!0)}function ru(e,t,n,r){if(n[0]=Object(o.r)(n[0]),n[0]instanceof Pc)return function(e,t,n,r,i){if(!r)throw new T(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const n of tt(e))if(n.field.isKeyField())s.push(pe(t,r.key));else{const e=r.data.field(n.field);if(Z(e))throw new T(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=n.field.canonicalString();throw new T(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new $e(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=fc(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new T(I.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let s=0;s<i.length;s++){const c=i[s];if(o[s].field.isKeyField()){if("string"!=typeof c)throw new T(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof c}`);if(!et(e)&&-1!==c.indexOf("/"))throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${c}' contains a slash.`);const n=e.path.child(B.fromString(c));if(!oe.isDocumentKey(n))throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new oe(n);a.push(pe(t,i))}else{const e=Tc(n,r,c);a.push(e)}}return new $e(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function iu(e,t,n){if("string"==typeof(n=Object(o.r)(n))){if(""===n)throw new T(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!et(t)&&-1!==n.indexOf("/"))throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(B.fromString(n));if(!oe.isDocumentKey(r))throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return pe(e,new oe(r))}if(n instanceof Ra)return pe(e,n._key);throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Sa(n)}.`)}function su(e,t){if(!Array.isArray(e)||0===e.length)throw new T(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new T(I.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function ou(e,t,n){if(!n.isEqual(t))throw new T(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{convertValue(e,t="none"){switch(ce(e)){case 0:return null;case 1:return e.booleanValue;case 2:return J(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(X(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw v()}}convertObject(e,t){const n={};return V(e.fields,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new oc(J(e.latitude),J(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=function e(t){const n=t.mapValue.fields.__previous_value__;return Z(n)?e(n):n}(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ee(e));default:return null}}convertTimestamp(e){const t=Y(e);return new M(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=B.fromString(e);_(qn(n));const r=new ne(n.get(1),n.get(3)),i=new oe(n.popFirst(5));return r.isEqual(t)||m(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}class uu extends au{constructor(e){super(),this.firestore=e}convertBytes(e){return new ic(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ra(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=fc(e)}set(e,t,n){this._verifyNotCommitted();const r=hu(e,this._firestore),i=cu(r.converter,t,n),s=pc(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,kt.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=hu(e,this._firestore);let s;return s="string"==typeof(t=Object(o.r)(t))||t instanceof rc?Ic(this._dataReader,"WriteBatch.update",i._key,t,n,r):bc(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,kt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=hu(e,this._firestore);return this._mutations=this._mutations.concat(new Vt(t._key,kt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new T(I.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function hu(e,t){if((e=Object(o.r)(e)).firestore!==t)throw new T(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(e){const t=ka((e=ka(e,Ra)).firestore,Ka);return va(za(t),e._key).then(n=>Su(t,e,n))}class fu extends au{constructor(e){super(),this.firestore=e}convertBytes(e){return new ic(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ra(this.firestore,null,t)}}function pu(e){const t=ka((e=ka(e,Ra)).firestore,Ka),n=za(t),r=new fu(t);return function(e,t){const n=new E;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,n){try{const r=await function(e,t){const n=b(e);return n.persistence.runTransaction("read document","readonly",e=>n.Us.ys(e,t))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new T(I.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=go(e,`Failed to get document '${t} from cache`);n.reject(r)}})(await pa(e),t,n)),n.promise}(n,e._key).then(n=>new Mc(t,r,e._key,n,new jc(null!==n&&n.hasLocalMutations,!0),e.converter))}function mu(e){const t=ka((e=ka(e,Ra)).firestore,Ka);return va(za(t),e._key,{source:"server"}).then(n=>Su(t,e,n))}function gu(e){const t=ka((e=ka(e,Pa)).firestore,Ka),n=za(t),r=new fu(t);return qc(e._query),_a(n,e._query).then(n=>new Uc(t,r,e,n))}function yu(e){const t=ka((e=ka(e,Pa)).firestore,Ka),n=za(t),r=new fu(t);return function(e,t){const n=new E;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,n){try{const r=await as(e,t,!0),i=new Ro(t,r.Ks),s=i.Ic(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=go(e,`Failed to execute query '${t} against cache`);n.reject(r)}})(await pa(e),t,n)),n.promise}(n,e._query).then(n=>new Uc(t,r,e,n))}function vu(e){const t=ka((e=ka(e,Pa)).firestore,Ka),n=za(t),r=new fu(t);return _a(n,e._query,{source:"server"}).then(n=>new Uc(t,r,e,n))}function _u(e,t,n){const r=ka((e=ka(e,Ra)).firestore,Ka),i=cu(e.converter,t,n);return Cu(r,[pc(fc(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,kt.none())])}function wu(e,t,n,...r){const i=ka((e=ka(e,Ra)).firestore,Ka),s=fc(i);let a;return Cu(i,[(a="string"==typeof(t=Object(o.r)(t))||t instanceof rc?Ic(s,"updateDoc",e._key,t,n,r):bc(s,"updateDoc",e._key,t)).toMutation(e._key,kt.exists(!0))])}function bu(e){return Cu(ka(e.firestore,Ka),[new Vt(e._key,kt.none())])}function Iu(e,t){const n=ka(e.firestore,Ka),r=Ma(e),i=cu(e.converter,t);return Cu(n,[pc(fc(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,kt.exists(!1))]).then(()=>r)}function Tu(e,...t){var n,r,i;e=Object(o.r)(e);let s={includeMetadataChanges:!1},a=0;"object"!=typeof t[a]||qa(t[a])||(s=t[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges};if(qa(t[a])){const e=t[a];t[a]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[a+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[a+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,h;if(e instanceof Ra)l=ka(e.firestore,Ka),h=Qe(e._key.path),u={next:n=>{t[a]&&t[a](Su(l,e,n))},error:t[a+1],complete:t[a+2]};else{const n=ka(e,Pa);l=ka(n.firestore,Ka),h=n._query;const r=new fu(l);u={next:e=>{t[a]&&t[a](new Uc(l,r,n,e))},error:t[a+1],complete:t[a+2]},qc(e._query)}return function(e,t,n,r){const i=new ia(u),s=new Co(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>Io(await ya(e),s)),()=>{i.Jc(),e.asyncQueue.enqueueAndForget(async()=>To(await ya(e),s))}}(za(l),h,c)}function Eu(e,t){return function(e,t){const n=new ia(t);return e.asyncQueue.enqueueAndForget(async()=>(function(e,t){b(e).Zo.add(t),t.next()})(await ya(e),n)),()=>{n.Jc(),e.asyncQueue.enqueueAndForget(async()=>(function(e,t){b(e).Zo.delete(t)})(await ya(e),n))}}(za(e=ka(e,Ka)),qa(t)?t:{next:t})}function Cu(e,t){return function(e,t){const n=new E;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,n){const r=Xo(e);try{const i=await function(e,t){const n=b(e),r=M.now(),i=t.reduce((e,t)=>e.add(t.key),on());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>n.Us.Es(e,i).next(i=>{s=i;const o=[];for(const e of t){const t=Rt(e,s.get(e.key));null!=t&&o.push(new jt(e.key,t,Ie(t.value.mapValue),kt.exists(!0)))}return n.gs.addMutationBatch(e,r,o,t)})).then(e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(e,t,n){let r=e.$c[e.currentUser.toKey()];r||(r=new Ht(D)),r=r.insert(t,n),e.$c[e.currentUser.toKey()]=r}(r,i.batchId,n),await Ho(r,i.changes),await so(r.remoteStore)}catch(e){const t=go(e,"Failed to persist write");n.reject(t)}})(await ga(e),t,n)),n.promise}(za(e),t)}function Su(e,t,n){const r=n.docs.get(t._key),i=new fu(e);return new Mc(e,i,t._key,r,new jc(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=fc(e)}get(e){const t=hu(e,this._firestore),n=new uu(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return v();const r=e[0];if(r.isFoundDocument())return new Pc(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new Pc(this._firestore,n,t._key,null,t.converter);throw v()})}set(e,t,n){const r=hu(e,this._firestore),i=cu(r.converter,t,n),s=pc(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=hu(e,this._firestore);let s;return s="string"==typeof(t=Object(o.r)(t))||t instanceof rc?Ic(this._dataReader,"Transaction.update",i._key,t,n,r):bc(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=hu(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=hu(e,this._firestore),n=new fu(this._firestore);return super.get(e).then(e=>new Mc(this._firestore,n,t._key,e._document,new jc(!1,!1),t.converter))}}function Ou(e,t){return function(e,t){const n=new E;return e.asyncQueue.enqueueAndForget(async()=>{const r=await function(e){return da(e).then(e=>e.datastore)}(e);new aa(e.asyncQueue,r,t,n).run()}),n.promise}(za(e=ka(e,Ka)),n=>t(new ku(e,n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(){return new mc("deleteField")}function Nu(){return new yc("serverTimestamp")}function xu(...e){return new vc("arrayUnion",e)}function Ru(...e){return new _c("arrayRemove",e)}function Pu(e){return new wc("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){l=e}(r.SDK_VERSION),Object(r._registerComponent)(new i.a("firestore",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=new Ka(r,new class{constructor(e){this.t=e,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new E;this.o=(()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new E,e.enqueueRetryable(()=>r(this.currentUser))});const s=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new E)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(_("string"==typeof t.accessToken),new C(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return _(null===e||"string"==typeof e),new u(e)}}(e.getProvider("auth-internal")),new class{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const n=e=>{null!=e.error&&p("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.p;return this.p=e.token,p("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=(t=>{e.enqueueRetryable(()=>n(t))});const r=e=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?r(e):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(_("string"==typeof e.token),this.p=e.token,new N(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i},"PUBLIC")),Object(r.registerVersion)(c,"3.4.5",void 0),Object(r.registerVersion)(c,"3.4.5","esm2017")}()}).call(t,n("W2nU"))},gZMR:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return u}),n.d(t,"c",function(){return l}),n.d(t,"d",function(){return h});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},xq9A:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return o});var r=n("28tl");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.a;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===s?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class a{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},zBsV:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return rr}),n.d(t,"b",function(){return sr}),n.d(t,"c",function(){return ir}),n.d(t,"d",function(){return ar}),n.d(t,"e",function(){return or}),n.d(t,"f",function(){return cr}),n.d(t,"g",function(){return ur}),n.d(t,"h",function(){return tr}),n.d(t,"i",function(){return nr});var r,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},s={},o=o||{},a=i||self;function c(){}function u(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function l(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var h="closure_uid_"+(1e9*Math.random()>>>0),d=0;function f(e,t,n){return e.call.apply(e.bind,arguments)}function p(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function m(e,t,n){return(m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?f:p).apply(null,arguments)}function g(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function y(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function v(){this.s=this.s,this.o=this.o}var _={};v.prototype.s=!1,v.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,h)&&e[h]||(e[h]=++d)}(this);delete _[e]}},v.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const w=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},b=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"==typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function I(e){return Array.prototype.concat.apply([],arguments)}function T(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function E(e){return/^[\s\xa0]*$/.test(e)}var C,S=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function k(e,t){return-1!=e.indexOf(t)}function O(e,t){return e<t?-1:e>t?1:0}e:{var A=a.navigator;if(A){var N=A.userAgent;if(N){C=N;break e}}C=""}function x(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function R(e){const t={};for(const n in e)t[n]=e[n];return t}var P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t])e[n]=r[n];for(let t=0;t<P.length;t++)n=P[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function L(e){return L[" "](e),e}L[" "]=c;var j,M,F=k(C,"Opera"),U=k(C,"Trident")||k(C,"MSIE"),V=k(C,"Edge"),q=V||U,$=k(C,"Gecko")&&!(k(C.toLowerCase(),"webkit")&&!k(C,"Edge"))&&!(k(C,"Trident")||k(C,"MSIE"))&&!k(C,"Edge"),B=k(C.toLowerCase(),"webkit")&&!k(C,"Edge");function K(){var e=a.document;return e?e.documentMode:void 0}e:{var z="",W=(M=C,$?/rv:([^\);]+)(\)|;)/.exec(M):V?/Edge\/([\d\.]+)/.exec(M):U?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(M):B?/WebKit\/(\S+)/.exec(M):F?/(?:Version)[ \/]?(\S+)/.exec(M):void 0);if(W&&(z=W?W[1]:""),U){var H=K();if(null!=H&&H>parseFloat(z)){j=String(H);break e}}j=z}var G,Q={};function Y(){return e=function(){let e=0;const t=S(String(j)).split("."),n=S("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=O(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||O(0==i[2].length,0==s[2].length)||O(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e},t=Q,Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9);var e,t}if(a.document&&U){var J=K();G=J||(parseInt(j,10)||void 0)}else G=void 0;var X=G,Z=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{a.addEventListener("test",c,t),a.removeEventListener("test",c,t)}catch(e){}return e}();function ee(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function te(e,t){if(ee.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if($){e:{try{L(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:ne[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&te.Z.h.call(this)}}ee.prototype.h=function(){this.defaultPrevented=!0},y(te,ee);var ne={2:"touch",3:"pen",4:"mouse"};te.prototype.h=function(){te.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var re="closure_listenable_"+(1e6*Math.random()|0),ie=0;function se(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function oe(e){this.src=e,this.g={},this.h=0}function ae(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=w(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(se(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ce(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}oe.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=ce(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new function(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++ie,this.ca=this.fa=!1}(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var ue="closure_lm_"+(1e6*Math.random()|0),le={};function he(e,t,n,r,i){if(r&&r.once)return function e(t,n,r,i,s){if(Array.isArray(n)){for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);return null}r=ve(r);return t&&t[re]?t.O(n,r,l(i)?!!i.capture:!!i,s):de(t,n,r,!0,i,s)}(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)he(e,t[s],n,r,i);return null}return n=ve(n),e&&e[re]?e.N(t,n,l(r)?!!r.capture:!!r,i):de(e,t,n,!1,r,i)}function de(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=l(i)?!!i.capture:!!i,a=ge(e);if(a||(e[ue]=a=new oe(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){var e=me;return function t(n){return e.call(t.src,t.listener,n)}}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Z||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(pe(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function fe(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[re])ae(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(pe(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ge(t))?(ae(n,e),0==n.h&&(n.src=null,t[ue]=null)):se(e)}}}function pe(e){return e in le?le[e]:le[e]="on"+e}function me(e,t){if(e.ca)e=!0;else{t=new te(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&fe(e),e=n.call(r,t)}return e}function ge(e){return(e=e[ue])instanceof oe?e:null}var ye="__closure_events_fn_"+(1e9*Math.random()>>>0);function ve(e){return"function"==typeof e?e:(e[ye]||(e[ye]=function(t){return e.handleEvent(t)}),e[ye])}function _e(){v.call(this),this.i=new oe(this),this.P=this,this.I=null}function we(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new ee(t,e);else if(t instanceof ee)t.target=t.target||e;else{var i=t;D(t=new ee(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=be(o,r,!0,t)&&i}if(i=be(o=t.g=e,r,!0,t)&&i,i=be(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=be(o=t.g=n[s],r,!1,t)&&i}function be(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ae(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}y(_e,v),_e.prototype[re]=!0,_e.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,i,s){if(Array.isArray(n))for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);else i=l(i)?!!i.capture:!!i,r=ve(r),t&&t[re]?(t=t.i,(n=String(n).toString())in t.g&&-1<(r=ce(o=t.g[n],r,i,s))&&(se(o[r]),Array.prototype.splice.call(o,r,1),0==o.length&&(delete t.g[n],t.h--))):t&&(t=ge(t))&&(n=t.g[n.toString()],t=-1,n&&(t=ce(n,r,i,s)),(r=-1<t?n[t]:null)&&fe(r))}(this,e,t,n,r)},_e.prototype.M=function(){if(_e.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)se(n[r]);delete t.g[e],t.h--}}this.I=null},_e.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},_e.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ie=a.JSON.stringify;function Te(){var e=Ae;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Ee,Ce=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new class{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}},e=>e.reset());function Se(e){a.setTimeout(()=>{throw e},0)}function ke(e,t){Ee||function(){var e=a.Promise.resolve(void 0);Ee=function(){e.then(Ne)}}(),Oe||(Ee(),Oe=!0),Ae.add(e,t)}var Oe=!1,Ae=new class{constructor(){this.h=this.g=null}add(e,t){const n=Ce.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function Ne(){for(var e;e=Te();){try{e.h.call(e.g)}catch(e){Se(e)}var t=Ce;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Oe=!1}function xe(e,t){_e.call(this),this.h=e||1,this.g=t||a,this.j=m(this.kb,this),this.l=Date.now()}function Re(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function Pe(e,t,n){if("function"==typeof e)n&&(e=m(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=m(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}y(xe,_e),(r=xe.prototype).da=!1,r.S=null,r.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),we(this,"tick"),this.da&&(Re(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){xe.Z.M.call(this),Re(this),delete this.g};class De extends v{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=Pe(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);const n=t.h;t.h=null,t.m.apply(null,n)}(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Le(e){v.call(this),this.h=e,this.g={}}y(Le,v);var je=[];function Me(e,t,n,r){Array.isArray(n)||(n&&(je[0]=n.toString()),n=je);for(var i=0;i<n.length;i++){var s=he(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Fe(e){x(e.g,function(e,t){this.g.hasOwnProperty(t)&&fe(e)},e),e.g={}}function Ue(){this.g=!0}function Ve(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Ie(n)}catch(e){return t}}(e,n)+(r?" "+r:"")})}Le.prototype.M=function(){Le.Z.M.call(this),Fe(this)},Le.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ue.prototype.Aa=function(){this.g=!1},Ue.prototype.info=function(){};var qe={},$e=null;function Be(){return $e=$e||new _e}function Ke(e){ee.call(this,qe.Ma,e)}function ze(e){const t=Be();we(t,new Ke(t,e))}function We(e,t){ee.call(this,qe.STAT_EVENT,e),this.stat=t}function He(e){const t=Be();we(t,new We(t,e))}function Ge(e,t){ee.call(this,qe.Na,e),this.size=t}function Qe(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){e()},t)}qe.Ma="serverreachability",y(Ke,ee),qe.STAT_EVENT="statevent",y(We,ee),qe.Na="timingevent",y(Ge,ee);var Ye={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Je={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Xe(){}function Ze(e){return e.h||(e.h=e.i())}function et(){}Xe.prototype.h=null;var tt,nt={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function rt(){ee.call(this,"d")}function it(){ee.call(this,"c")}function st(){}function ot(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Le(this),this.P=ct,e=q?125:void 0,this.W=new xe(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new at}function at(){this.i=null,this.g="",this.h=!1}y(rt,ee),y(it,ee),y(st,Xe),st.prototype.g=function(){return new XMLHttpRequest},st.prototype.i=function(){return{}},tt=new st;var ct=45e3,ut={},lt={};function ht(e,t,n){e.K=1,e.v=Dt(Ot(t)),e.s=n,e.U=!0,dt(e,null)}function dt(e,t){e.F=Date.now(),gt(e),e.A=Ot(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),Ht(n.h,"t",r),e.C=0,n=e.l.H,e.h=new at,e.g=Gn(e.l,n?t:null,!e.s),0<e.O&&(e.L=new De(m(e.Ia,e,e.g),e.O)),Me(e.V,e.g,"readystatechange",e.gb),t=e.H?R(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ze(1),function(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o})}(e.j,e.u,e.A,e.m,e.X,e.s)}function ft(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function pt(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if((r=mt(e,n))==lt){4==t&&(e.o=4,He(14),i=!1),Ve(e.j,e.m,null,"[Incomplete Response]");break}if(r==ut){e.o=4,He(15),Ve(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ve(e.j,e.m,r,null),bt(e,r)}ft(e)&&r!=lt&&r!=ut&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,He(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vn(t),t.L=!0,He(11))):(Ve(e.j,e.m,n,"[Invalid Chunked Response]"),wt(e),_t(e))}function mt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?lt:(n=Number(t.substring(n,r)),isNaN(n)?ut:(r+=1)+n>t.length?lt:(t=t.substr(r,n),e.C=r+n,t))}function gt(e){e.Y=Date.now()+e.P,yt(e,e.P)}function yt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Qe(m(e.eb,e),t)}function vt(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function _t(e){0==e.l.G||e.I||Bn(e.l,e)}function wt(e){vt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Re(e.W),Fe(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function bt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||en(n.i,e)))if(n.I=e.N,!e.J&&en(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;$n(n),xn(n)}Un(n),He(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=Qe(m(n.ab,n),6e3));if(1>=Zt(n.i)&&n.ka){try{n.ka()}catch(e){}n.ka=void 0}}else zn(n,11)}else if((e.J||n.g==e)&&$n(n),!E(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const t=u[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(k(e,"spdy")||k(e,"quic")||k(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(tn(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,Pt(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=e;if((r=n).oa=Hn(r,r.H?r.la:null,r.W),o.J){nn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(vt(a),gt(a)),r.g=o}else Fn(r);0<n.l.length&&Dn(n)}else"stop"!=u[0]&&"close"!=u[0]||zn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?zn(n,7):Nn(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}ze(4)}catch(e){}}function It(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(u(e)||"string"==typeof e)b(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(u(e)||"string"==typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;i=(r=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(u(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e)).length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function Tt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Tt)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Et(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Ct(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)Ct(i,r=e.g[t])||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function Ct(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(r=ot.prototype).setTimeout=function(e){this.P=e},r.gb=function(e){e=e.target;const t=this.L;t&&3==Cn(e)?t.l():this.Ia(e)},r.Ia=function(e){try{if(e==this.g)e:{const h=Cn(this.g);var t=this.g.Da();const d=this.g.ba();if(!(3>h)&&(3!=h||q||this.g&&(this.h.h||this.g.ga()||Sn(this.g)))){this.I||4!=h||7==t||ze(8==t||0>=d?3:2),vt(this);var n=this.g.ba();this.N=n;t:if(ft(this)){var r=Sn(this.g);e="";var i=r.length,s=4==Cn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){wt(this),_t(this);var o="";break t}this.h.i=new a.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o})}(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){t:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(c)){var l=c;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,He(12),wt(this),_t(this);break e}Ve(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,bt(this,n)}this.U?(pt(this,h,o),q&&this.i&&3==h&&(Me(this.V,this.W,"tick",this.fb),this.W.start())):(Ve(this.j,this.m,o,null),bt(this,o)),4==h&&wt(this),this.i&&!this.I&&(4==h?Bn(this.l,this):(this.i=!1,gt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,He(12)):(this.o=0,He(13)),wt(this),_t(this)}}}catch(e){}},r.fb=function(){if(this.g){var e=Cn(this.g),t=this.g.ga();this.C<t.length&&(vt(this),pt(this,e,t),this.i&&4!=e&&gt(this))}},r.cancel=function(){this.I=!0,wt(this)},r.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.A),2!=this.K&&(ze(3),He(17)),wt(this),this.o=2,_t(this)):yt(this,this.Y-e)},(r=Tt.prototype).R=function(){Et(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},r.T=function(){return Et(this),this.g.concat()},r.get=function(e,t){return Ct(this.h,e)?this.h[e]:t},r.set=function(e,t){Ct(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},r.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var St=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function kt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof kt){this.g=void 0!==t?t:e.g,At(this,e.j),this.s=e.s,Nt(this,e.i),xt(this,e.m),this.l=e.l,t=e.h;var n=new Bt;n.i=t.i,t.g&&(n.g=new Tt(t.g),n.h=t.h),Rt(this,n),this.o=e.o}else e&&(n=String(e).match(St))?(this.g=!!t,At(this,n[1]||"",!0),this.s=Lt(n[2]||""),Nt(this,n[3]||"",!0),xt(this,n[4]),this.l=Lt(n[5]||"",!0),Rt(this,n[6]||"",!0),this.o=Lt(n[7]||"")):(this.g=!!t,this.h=new Bt(null,this.g))}function Ot(e){return new kt(e)}function At(e,t,n){e.j=n?Lt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Nt(e,t,n){e.i=n?Lt(t,!0):t}function xt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Rt(e,t,n){t instanceof Bt?(e.h=t,function(e,t){t&&!e.j&&(Kt(e),e.i=null,e.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(zt(this,t),Ht(this,n,e))},e)),e.j=t}(e.h,e.g)):(n||(t=jt(t,qt)),e.h=new Bt(t,e.g))}function Pt(e,t,n){e.h.set(t,n)}function Dt(e){return Pt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Lt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function jt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Mt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Mt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}kt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(jt(t,Ft,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(jt(t,Ft,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(jt(n,"/"==n.charAt(0)?Vt:Ut,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",jt(n,$t)),e.join("")};var Ft=/[#\/\?@]/g,Ut=/[#\?:]/g,Vt=/[#\?]/g,qt=/[#\?@]/g,$t=/#/g;function Bt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Kt(e){e.g||(e.g=new Tt,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function zt(e,t){Kt(e),t=Gt(e,t),Ct(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,Ct((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Et(e)))}function Wt(e,t){return Kt(e),t=Gt(e,t),Ct(e.g.h,t)}function Ht(e,t,n){zt(e,t),0<n.length&&(e.i=null,e.g.set(Gt(e,t),T(n)),e.h+=n.length)}function Gt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(r=Bt.prototype).add=function(e,t){Kt(this),this.i=null,e=Gt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){Kt(this),this.g.forEach(function(n,r){b(n,function(n){e.call(t,n,r,this)},this)},this)},r.T=function(){Kt(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},r.R=function(e){Kt(this);var t=[];if("string"==typeof e)Wt(this,e)&&(t=I(t,this.g.get(Gt(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=I(t,e[n])}return t},r.set=function(e,t){return Kt(this),this.i=null,Wt(this,e=Gt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};var Qt=class{constructor(e,t){this.h=e,this.g=t}};function Yt(e){this.l=e||Jt,a.PerformanceNavigationTiming?e=0<(e=a.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Jt=10;function Xt(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Zt(e){return e.h?1:e.g?e.g.size:0}function en(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function tn(e,t){e.g?e.g.add(t):e.h=t}function nn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function rn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return T(e.i)}function sn(){}function on(e,t,n){const r=n||"";try{It(e,function(e,n){let i=e;l(e)&&(i=Ie(e)),t.push(r+n+"="+encodeURIComponent(i))})}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function an(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function cn(e){this.l=e.$b||null,this.j=e.ib||!1}function un(e,t){_e.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=ln,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Yt.prototype.cancel=function(){if(this.i=rn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},sn.prototype.stringify=function(e){return a.JSON.stringify(e,void 0)},sn.prototype.parse=function(e){return a.JSON.parse(e,void 0)},y(cn,Xe),cn.prototype.g=function(){return new un(this.l,this.j)},cn.prototype.i=function(e){return function(){return e}}({}),y(un,_e);var ln=0;function hn(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function dn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,fn(e)}function fn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(r=un.prototype).open=function(e,t){if(this.readyState!=ln)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,fn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,dn(this)),this.readyState=ln},r.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,fn(this)),this.g&&(this.readyState=3,fn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;hn(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?dn(this):fn(this),3==this.readyState&&hn(this)}},r.Ua=function(e){this.g&&(this.response=this.responseText=e,dn(this))},r.Ta=function(e){this.g&&(this.response=e,dn(this))},r.ha=function(){this.g&&dn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(un.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var pn=a.JSON.parse;function mn(e){_e.call(this),this.headers=new Tt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=gn,this.K=this.L=!1}y(mn,_e);var gn="",yn=/^https?$/i,vn=["POST","PUT"];function _n(e){return"content-type"==e.toLowerCase()}function wn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,bn(e),Tn(e)}function bn(e){e.D||(e.D=!0,we(e,"complete"),we(e,"error"))}function In(e){if(e.h&&void 0!==o&&(!e.C[1]||4!=Cn(e)||2!=e.ba()))if(e.v&&4==Cn(e))Pe(e.Fa,0,e);else if(we(e,"readystatechange"),4==Cn(e)){e.h=!1;try{const o=e.ba();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===o){var i=String(e.H).match(St)[1]||null;if(!i&&a.self&&a.self.location){var s=a.self.location.protocol;i=s.substr(0,s.length-1)}r=!yn.test(i?i.toLowerCase():"")}n=r}if(n)we(e,"complete"),we(e,"success");else{e.m=6;try{var c=2<Cn(e)?e.g.statusText:""}catch(e){c=""}e.j=c+" ["+e.ba()+"]",bn(e)}}finally{Tn(e)}}}function Tn(e,t){if(e.g){En(e);const n=e.g,r=e.C[0]?c:null;e.g=null,e.C=null,t||we(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function En(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(a.clearTimeout(e.A),e.A=null)}function Cn(e){return e.g?e.g.readyState:0}function Sn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case gn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function kn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=function(e){let t="";return x(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Pt(e,t,n))}function On(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function An(e){this.za=0,this.l=[],this.h=new Ue,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=On("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=On("baseRetryDelayMs",5e3,e),this.$a=On("retryDelaySeedMs",1e4,e),this.Ya=On("forwardChannelMaxRetries",2,e),this.ra=On("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Yt(e&&e.concurrentRequestLimit),this.Ca=new function(){this.g=new sn},this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function Nn(e){if(Rn(e),3==e.G){var t=e.V++,n=Ot(e.F);Pt(n,"SID",e.J),Pt(n,"RID",t),Pt(n,"TYPE","terminate"),jn(e,n),(t=new ot(e,e.h,t,void 0)).K=2,t.v=Dt(Ot(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(t.v.toString(),"")),!n&&a.Image&&((new Image).src=t.v,n=!0),n||(t.g=Gn(t.l,null),t.g.ea(t.v)),t.F=Date.now(),gt(t)}Wn(e)}function xn(e){e.g&&(Vn(e),e.g.cancel(),e.g=null)}function Rn(e){xn(e),e.u&&(a.clearTimeout(e.u),e.u=null),$n(e),e.i.cancel(),e.m&&("number"==typeof e.m&&a.clearTimeout(e.m),e.m=null)}function Pn(e,t){e.l.push(new Qt(e.Za++,t)),3==e.G&&Dn(e)}function Dn(e){Xt(e.i)||e.m||(e.m=!0,ke(e.Ha,e),e.C=0)}function Ln(e,t){var n;n=t?t.m:e.V++;const r=Ot(e.F);Pt(r,"SID",e.J),Pt(r,"RID",n),Pt(r,"AID",e.U),jn(e,r),e.o&&e.s&&kn(r,e.o,e.s),n=new ot(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Mn(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),tn(e.i,n),ht(n,r,t)}function jn(e,t){e.j&&It({},function(e,n){Pt(t,n,e)})}function Mn(e,t,n){n=Math.min(e.l.length,n);var r=e.j?m(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(0>(n-=t))t=Math.max(0,i[o].h-100),s=!1;else try{on(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function Fn(e){e.g||e.u||(e.Y=1,ke(e.Ga,e),e.A=0)}function Un(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=Qe(m(e.Ga,e),Kn(e,e.A)),e.A++,!0)}function Vn(e){null!=e.B&&(a.clearTimeout(e.B),e.B=null)}function qn(e){e.g=new ot(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Ot(e.oa);Pt(t,"RID","rpc"),Pt(t,"SID",e.J),Pt(t,"CI",e.N?"0":"1"),Pt(t,"AID",e.U),jn(e,t),Pt(t,"TYPE","xmlhttp"),e.o&&e.s&&kn(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Dt(Ot(t)),n.s=null,n.U=!0,dt(n,e)}function $n(e){null!=e.v&&(a.clearTimeout(e.v),e.v=null)}function Bn(e,t){var n=null;if(e.g==t){$n(e),Vn(e),e.g=null;var r=2}else{if(!en(e.i,t))return;n=t.D,nn(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;we(r=Be(),new Ge(r,n,t,i)),Dn(e)}else Fn(e);else if(3==(i=t.o)||0==i&&0<e.I||!(1==r&&function(e,t){return!(Zt(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=Qe(m(e.Ha,e,t),Kn(e,e.C)),e.C++,0)))}(e,t)||2==r&&Un(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:zn(e,5);break;case 4:zn(e,10);break;case 3:zn(e,6);break;default:zn(e,2)}}function Kn(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function zn(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=m(e.jb,e);n||(n=new kt("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||At(n,"https"),Dt(n)),function(e,t){const n=new Ue;if(a.Image){const r=new Image;r.onload=g(an,n,r,"TestLoadImage: loaded",!0,t),r.onerror=g(an,n,r,"TestLoadImage: error",!1,t),r.onabort=g(an,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=g(an,n,r,"TestLoadImage: timeout",!1,t),a.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(n.toString(),r)}else He(2);e.G=0,e.j&&e.j.va(t),Wn(e),Rn(e)}function Wn(e){e.G=0,e.I=-1,e.j&&(0==rn(e.i).length&&0==e.l.length||(e.i.i.length=0,T(e.l),e.l.length=0),e.j.ua())}function Hn(e,t,n){let r=function(e){return e instanceof kt?Ot(e):new kt(e,void 0)}(n);if(""!=r.i)t&&Nt(r,t+"."+r.i),xt(r,r.m);else{const e=a.location;r=function(e,t,n,r){var i=new kt(null,void 0);return e&&At(i,e),t&&Nt(i,t),n&&xt(i,n),r&&(i.l=r),i}(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&x(e.aa,function(e,t){Pt(r,t,e)}),t=e.D,n=e.sa,t&&n&&Pt(r,t,n),Pt(r,"VER",e.ma),jn(e,r),r}function Gn(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new mn(new cn({ib:!0})):new mn(e.qa)).L=e.H,t}function Qn(){}function Yn(){if(U&&!(10<=Number(X)))throw Error("Environmental error: no available transport.")}function Jn(e,t){_e.call(this),this.g=new An(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!E(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!E(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new er(this)}function Xn(e){rt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Zn(){it.call(this),this.status=1}function er(e){this.g=e}(r=mn.prototype).ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():tt.g(),this.C=this.u?Ze(this.u):Ze(tt),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void wn(this,e)}e=n||"";const i=new Tt(this.headers);r&&It(r,function(e,t){i.set(t,e)}),r=function(e){e:{var t=_n;const n=e.length,r="string"==typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(i.T()),n=a.FormData&&e instanceof a.FormData,!(0<=w(vn,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(e,t){this.g.setRequestHeader(t,e)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{En(this),0<this.B&&((this.K=function(e){return U&&Y()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=Pe(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){wn(this,e)}},r.pa=function(){void 0!==o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,we(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,we(this,"complete"),we(this,"abort"),Tn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Tn(this,!0)),mn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?In(this):this.cb())},r.cb=function(){In(this)},r.ba=function(){try{return 2<Cn(this)?this.g.status:-1}catch(e){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),pn(t)}},r.Da=function(){return this.m},r.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(r=An.prototype).ma=8,r.G=1,r.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(e){}},r.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new ot(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?D(s=R(s),this.P):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Mn(this,i,t),Pt(n=Ot(this.F),"RID",e),Pt(n,"CVER",22),this.D&&Pt(n,"X-HTTP-Session-Id",this.D),jn(this,n),this.o&&s&&kn(n,this.o,s),tn(this.i,i),this.Ra&&Pt(n,"TYPE","init"),this.ja?(Pt(n,"$req",t),Pt(n,"SID","null"),i.$=!0,ht(i,n,null)):ht(i,n,t),this.G=2}}else 3==this.G&&(e?Ln(this,e):0==this.l.length||Xt(this.i)||Ln(this))},r.Ga=function(){if(this.u=null,qn(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Qe(m(this.bb,this),e)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,He(10),xn(this),qn(this))},r.ab=function(){null!=this.v&&(this.v=null,xn(this),Un(this),He(19))},r.jb=function(e){e?(this.h.info("Successfully pinged google.com"),He(2)):(this.h.info("Failed to ping google.com"),He(1))},(r=Qn.prototype).xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},Yn.prototype.g=function(e,t){return new Jn(e,t)},y(Jn,_e),Jn.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),ke(m(e.hb,e,t))),He(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Hn(e,null,e.W),Dn(e)},Jn.prototype.close=function(){Nn(this.g)},Jn.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,Pn(this.g,t)}else this.v?((t={}).__data__=Ie(e),Pn(this.g,t)):Pn(this.g,e)},Jn.prototype.M=function(){this.g.j=null,delete this.j,Nn(this.g),delete this.g,Jn.Z.M.call(this)},y(Xn,rt),y(Zn,it),y(er,Qn),er.prototype.xa=function(){we(this.g,"a")},er.prototype.wa=function(e){we(this.g,new Xn(e))},er.prototype.va=function(e){we(this.g,new Zn(e))},er.prototype.ua=function(){we(this.g,"b")},Yn.prototype.createWebChannel=Yn.prototype.g,Jn.prototype.send=Jn.prototype.u,Jn.prototype.open=Jn.prototype.m,Jn.prototype.close=Jn.prototype.close,Ye.NO_ERROR=0,Ye.TIMEOUT=8,Ye.HTTP_ERROR=6,Je.COMPLETE="complete",et.EventType=nt,nt.OPEN="a",nt.CLOSE="b",nt.ERROR="c",nt.MESSAGE="d",_e.prototype.listen=_e.prototype.N,mn.prototype.listenOnce=mn.prototype.O,mn.prototype.getLastError=mn.prototype.La,mn.prototype.getLastErrorCode=mn.prototype.Da,mn.prototype.getStatus=mn.prototype.ba,mn.prototype.getResponseJson=mn.prototype.Qa,mn.prototype.getResponseText=mn.prototype.ga,mn.prototype.send=mn.prototype.ea;var tr=s.createWebChannelTransport=function(){return new Yn},nr=s.getStatEventTarget=function(){return Be()},rr=s.ErrorCode=Ye,ir=s.EventType=Je,sr=s.Event=qe,or=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},ar=s.FetchXmlHttpFactory=cn,cr=s.WebChannel=et,ur=s.XhrIo=mn}).call(t,n("DuR2"))}});
//# sourceMappingURL=vendor.ce07802f8958769540f2.js.map