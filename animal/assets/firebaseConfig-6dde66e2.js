import{aZ as mi,a_ as Yd,a$ as Ki,b0 as Gc,b1 as By,b2 as xn,b3 as Xd,b4 as Jd,b5 as q,b6 as Ka,b7 as $y,b8 as Gy,C as pi,b9 as w,ba as ge,bb as Kc,bc as ht,bd as Ky,be as Wy,bf as jy,bg as Nn,bh as qr,bi as Wi,bj as rt,bk as He,bl as Zd,bm as Qy,bn as zy,bo as Wa,bp as ef,bq as Hy,br as Yy,bs as Eo,bt as Xy,bu as Jy,bv as A,bw as ve,bx as Wu,by as Zy,bz as e_,bA as t_}from"./index-837c2d33.js";var n_="firebase",s_="9.15.0";/**
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
 */mi(n_,s_,"app");var i_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},S,Wc=Wc||{},k=i_||self;function Br(){}function To(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function ji(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function r_(n){return Object.prototype.hasOwnProperty.call(n,Sa)&&n[Sa]||(n[Sa]=++o_)}var Sa="closure_uid_"+(1e9*Math.random()>>>0),o_=0;function a_(n,e,t){return n.call.apply(n.bind,arguments)}function c_(n,e,t){if(!n)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function Oe(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Oe=a_:Oe=c_,Oe.apply(null,arguments)}function Tr(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var s=t.slice();return s.push.apply(s,arguments),n.apply(this,s)}}function Pe(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function sn(){this.s=this.s,this.o=this.o}var l_=0;sn.prototype.s=!1;sn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),l_!=0)&&r_(this)};sn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const tf=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function jc(n){const e=n.length;if(0<e){const t=Array(e);for(let s=0;s<e;s++)t[s]=n[s];return t}return[]}function ju(n,e){for(let t=1;t<arguments.length;t++){const s=arguments[t];if(To(s)){const i=n.length||0,r=s.length||0;n.length=i+r;for(let o=0;o<r;o++)n[i+o]=s[o]}else n.push(s)}}function Me(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var u_=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{k.addEventListener("test",Br,e),k.removeEventListener("test",Br,e)}catch{}return n}();function $r(n){return/^[\s\xa0]*$/.test(n)}var Qu=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function ba(n,e){return n<e?-1:n>e?1:0}function Co(){var n=k.navigator;return n&&(n=n.userAgent)?n:""}function ft(n){return Co().indexOf(n)!=-1}function Qc(n){return Qc[" "](n),n}Qc[" "]=Br;function h_(n){var e=g_;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var d_=ft("Opera"),cs=ft("Trident")||ft("MSIE"),nf=ft("Edge"),ja=nf||cs,sf=ft("Gecko")&&!(Co().toLowerCase().indexOf("webkit")!=-1&&!ft("Edge"))&&!(ft("Trident")||ft("MSIE"))&&!ft("Edge"),f_=Co().toLowerCase().indexOf("webkit")!=-1&&!ft("Edge");function rf(){var n=k.document;return n?n.documentMode:void 0}var Gr;e:{var xa="",Na=function(){var n=Co();if(sf)return/rv:([^\);]+)(\)|;)/.exec(n);if(nf)return/Edge\/([\d\.]+)/.exec(n);if(cs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(f_)return/WebKit\/(\S+)/.exec(n);if(d_)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Na&&(xa=Na?Na[1]:""),cs){var Aa=rf();if(Aa!=null&&Aa>parseFloat(xa)){Gr=String(Aa);break e}}Gr=xa}var g_={};function m_(){return h_(function(){let n=0;const e=Qu(String(Gr)).split("."),t=Qu("9").split("."),s=Math.max(e.length,t.length);for(let o=0;n==0&&o<s;o++){var i=e[o]||"",r=t[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;n=ba(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||ba(i[2].length==0,r[2].length==0)||ba(i[2],r[2]),i=i[3],r=r[3]}while(n==0)}return 0<=n})}var Qa;if(k.document&&cs){var zu=rf();Qa=zu||parseInt(Gr,10)||void 0}else Qa=void 0;var p_=Qa;function yi(n,e){if(Me.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,s=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(sf){e:{try{Qc(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:y_[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&yi.X.h.call(this)}}Pe(yi,Me);var y_={2:"touch",3:"pen",4:"mouse"};yi.prototype.h=function(){yi.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Qi="closure_listenable_"+(1e6*Math.random()|0),__=0;function v_(n,e,t,s,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!s,this.ha=i,this.key=++__,this.ba=this.ea=!1}function So(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function zc(n,e,t){for(const s in n)e.call(t,n[s],s,n)}function of(n){const e={};for(const t in n)e[t]=n[t];return e}const Hu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function af(n,e){let t,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(t in s)n[t]=s[t];for(let r=0;r<Hu.length;r++)t=Hu[r],Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}}function bo(n){this.src=n,this.g={},this.h=0}bo.prototype.add=function(n,e,t,s,i){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var o=Ha(n,e,s,i);return-1<o?(e=n[o],t||(e.ea=!1)):(e=new v_(e,this.src,r,!!s,i),e.ea=t,n.push(e)),e};function za(n,e){var t=e.type;if(t in n.g){var s=n.g[t],i=tf(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(So(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Ha(n,e,t,s){for(var i=0;i<n.length;++i){var r=n[i];if(!r.ba&&r.listener==e&&r.capture==!!t&&r.ha==s)return i}return-1}var Hc="closure_lm_"+(1e6*Math.random()|0),ka={};function cf(n,e,t,s,i){if(s&&s.once)return uf(n,e,t,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)cf(n,e[r],t,s,i);return null}return t=Jc(t),n&&n[Qi]?n.N(e,t,ji(s)?!!s.capture:!!s,i):lf(n,e,t,!1,s,i)}function lf(n,e,t,s,i,r){if(!e)throw Error("Invalid event type");var o=ji(i)?!!i.capture:!!i,a=Xc(n);if(a||(n[Hc]=a=new bo(n)),t=a.add(e,t,s,o,r),t.proxy)return t;if(s=w_(),t.proxy=s,s.src=n,s.listener=t,n.addEventListener)u_||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),s,i);else if(n.attachEvent)n.attachEvent(df(e.toString()),s);else if(n.addListener&&n.removeListener)n.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return t}function w_(){function n(t){return e.call(n.src,n.listener,t)}const e=I_;return n}function uf(n,e,t,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)uf(n,e[r],t,s,i);return null}return t=Jc(t),n&&n[Qi]?n.O(e,t,ji(s)?!!s.capture:!!s,i):lf(n,e,t,!0,s,i)}function hf(n,e,t,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)hf(n,e[r],t,s,i);else s=ji(s)?!!s.capture:!!s,t=Jc(t),n&&n[Qi]?(n=n.i,e=String(e).toString(),e in n.g&&(r=n.g[e],t=Ha(r,t,s,i),-1<t&&(So(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete n.g[e],n.h--)))):n&&(n=Xc(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Ha(e,t,s,i)),(t=-1<n?e[n]:null)&&Yc(t))}function Yc(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[Qi])za(e.i,n);else{var t=n.type,s=n.proxy;e.removeEventListener?e.removeEventListener(t,s,n.capture):e.detachEvent?e.detachEvent(df(t),s):e.addListener&&e.removeListener&&e.removeListener(s),(t=Xc(e))?(za(t,n),t.h==0&&(t.src=null,e[Hc]=null)):So(n)}}}function df(n){return n in ka?ka[n]:ka[n]="on"+n}function I_(n,e){if(n.ba)n=!0;else{e=new yi(e,this);var t=n.listener,s=n.ha||n.src;n.ea&&Yc(n),n=t.call(s,e)}return n}function Xc(n){return n=n[Hc],n instanceof bo?n:null}var Da="__closure_events_fn_"+(1e9*Math.random()>>>0);function Jc(n){return typeof n=="function"?n:(n[Da]||(n[Da]=function(e){return n.handleEvent(e)}),n[Da])}function Ce(){sn.call(this),this.i=new bo(this),this.P=this,this.I=null}Pe(Ce,sn);Ce.prototype[Qi]=!0;Ce.prototype.removeEventListener=function(n,e,t,s){hf(this,n,e,t,s)};function De(n,e){var t,s=n.I;if(s)for(t=[];s;s=s.I)t.push(s);if(n=n.P,s=e.type||e,typeof e=="string")e=new Me(e,n);else if(e instanceof Me)e.target=e.target||n;else{var i=e;e=new Me(s,n),af(e,i)}if(i=!0,t)for(var r=t.length-1;0<=r;r--){var o=e.g=t[r];i=Cr(o,s,!0,e)&&i}if(o=e.g=n,i=Cr(o,s,!0,e)&&i,i=Cr(o,s,!1,e)&&i,t)for(r=0;r<t.length;r++)o=e.g=t[r],i=Cr(o,s,!1,e)&&i}Ce.prototype.M=function(){if(Ce.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],s=0;s<t.length;s++)So(t[s]);delete n.g[e],n.h--}}this.I=null};Ce.prototype.N=function(n,e,t,s){return this.i.add(String(n),e,!1,t,s)};Ce.prototype.O=function(n,e,t,s){return this.i.add(String(n),e,!0,t,s)};function Cr(n,e,t,s){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==t){var a=o.listener,c=o.ha||o.src;o.ea&&za(n.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Zc=k.JSON.stringify;function E_(){var n=mf;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class T_{constructor(){this.h=this.g=null}add(e,t){const s=ff.get();s.set(e,t),this.h?this.h.next=s:this.g=s,this.h=s}}var ff=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new C_,n=>n.reset());class C_{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function S_(n){k.setTimeout(()=>{throw n},0)}function gf(n,e){Ya||b_(),Xa||(Ya(),Xa=!0),mf.add(n,e)}var Ya;function b_(){var n=k.Promise.resolve(void 0);Ya=function(){n.then(x_)}}var Xa=!1,mf=new T_;function x_(){for(var n;n=E_();){try{n.h.call(n.g)}catch(t){S_(t)}var e=ff;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Xa=!1}function xo(n,e){Ce.call(this),this.h=n||1,this.g=e||k,this.j=Oe(this.lb,this),this.l=Date.now()}Pe(xo,Ce);S=xo.prototype;S.ca=!1;S.R=null;S.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),De(this,"tick"),this.ca&&(el(this),this.start()))}};S.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function el(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}S.M=function(){xo.X.M.call(this),el(this),delete this.g};function tl(n,e,t){if(typeof n=="function")t&&(n=Oe(n,t));else if(n&&typeof n.handleEvent=="function")n=Oe(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:k.setTimeout(n,e||0)}function pf(n){n.g=tl(()=>{n.g=null,n.i&&(n.i=!1,pf(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class N_ extends sn{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:pf(this)}M(){super.M(),this.g&&(k.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _i(n){sn.call(this),this.h=n,this.g={}}Pe(_i,sn);var Yu=[];function yf(n,e,t,s){Array.isArray(t)||(t&&(Yu[0]=t.toString()),t=Yu);for(var i=0;i<t.length;i++){var r=cf(e,t[i],s||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function _f(n){zc(n.g,function(e,t){this.g.hasOwnProperty(t)&&Yc(e)},n),n.g={}}_i.prototype.M=function(){_i.X.M.call(this),_f(this)};_i.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function No(){this.g=!0}No.prototype.Aa=function(){this.g=!1};function A_(n,e,t,s,i,r){n.info(function(){if(n.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function k_(n,e,t,s,i,r,o){n.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+t+`
`+r+" "+o})}function ss(n,e,t,s){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+R_(n,t)+(s?" "+s:"")})}function D_(n,e){n.info(function(){return"TIMEOUT: "+e})}No.prototype.info=function(){};function R_(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var s=t[n];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Zc(t)}catch{return e}}var $n={},Xu=null;function Ao(){return Xu=Xu||new Ce}$n.Pa="serverreachability";function vf(n){Me.call(this,$n.Pa,n)}Pe(vf,Me);function vi(n){const e=Ao();De(e,new vf(e))}$n.STAT_EVENT="statevent";function wf(n,e){Me.call(this,$n.STAT_EVENT,n),this.stat=e}Pe(wf,Me);function Ve(n){const e=Ao();De(e,new wf(e,n))}$n.Qa="timingevent";function If(n,e){Me.call(this,$n.Qa,n),this.size=e}Pe(If,Me);function zi(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return k.setTimeout(function(){n()},e)}var ko={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Ef={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function nl(){}nl.prototype.h=null;function Ju(n){return n.h||(n.h=n.i())}function Tf(){}var Hi={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function sl(){Me.call(this,"d")}Pe(sl,Me);function il(){Me.call(this,"c")}Pe(il,Me);var Ja;function Do(){}Pe(Do,nl);Do.prototype.g=function(){return new XMLHttpRequest};Do.prototype.i=function(){return{}};Ja=new Do;function Yi(n,e,t,s){this.l=n,this.j=e,this.m=t,this.U=s||1,this.S=new _i(this),this.O=P_,n=ja?125:void 0,this.T=new xo(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Cf}function Cf(){this.i=null,this.g="",this.h=!1}var P_=45e3,Za={},Kr={};S=Yi.prototype;S.setTimeout=function(n){this.O=n};function ec(n,e,t){n.K=1,n.v=Po(bt(e)),n.s=t,n.P=!0,Sf(n,null)}function Sf(n,e){n.F=Date.now(),Xi(n),n.A=bt(n.v);var t=n.A,s=n.U;Array.isArray(s)||(s=[String(s)]),Pf(t.i,"t",s),n.C=0,t=n.l.H,n.h=new Cf,n.g=eg(n.l,t?e:null,!n.s),0<n.N&&(n.L=new N_(Oe(n.La,n,n.g),n.N)),yf(n.S,n.g,"readystatechange",n.ib),e=n.H?of(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),vi(),A_(n.j,n.u,n.A,n.m,n.U,n.s)}S.ib=function(n){n=n.target;const e=this.L;e&&Tt(n)==3?e.l():this.La(n)};S.La=function(n){try{if(n==this.g)e:{const u=Tt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||ja||this.g&&(this.h.h||this.g.fa()||nh(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?vi(3):vi(2)),Ro(this);var t=this.g.aa();this.Y=t;t:if(bf(this)){var s=nh(this.g);n="";var i=s.length,r=Tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vn(this),ii(this);var o="";break t}this.h.i=new k.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=t==200,k_(this.j,this.u,this.A,this.m,this.U,u,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$r(a)){var l=a;break t}}l=null}if(t=l)ss(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,tc(this,t);else{this.i=!1,this.o=3,Ve(12),vn(this),ii(this);break e}}this.P?(xf(this,u,o),ja&&this.i&&u==3&&(yf(this.S,this.T,"tick",this.hb),this.T.start())):(ss(this.j,this.m,o,null),tc(this,o)),u==4&&vn(this),this.i&&!this.I&&(u==4?Yf(this.l,this):(this.i=!1,Xi(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ve(12)):(this.o=0,Ve(13)),vn(this),ii(this)}}}catch{}finally{}};function bf(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function xf(n,e,t){let s=!0,i;for(;!n.I&&n.C<t.length;)if(i=O_(n,t),i==Kr){e==4&&(n.o=4,Ve(14),s=!1),ss(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Za){n.o=4,Ve(15),ss(n.j,n.m,t,"[Invalid Chunk]"),s=!1;break}else ss(n.j,n.m,i,null),tc(n,i);bf(n)&&i!=Kr&&i!=Za&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Ve(16),s=!1),n.i=n.i&&s,s?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),hl(e),e.K=!0,Ve(11))):(ss(n.j,n.m,t,"[Invalid Chunked Response]"),vn(n),ii(n))}S.hb=function(){if(this.g){var n=Tt(this.g),e=this.g.fa();this.C<e.length&&(Ro(this),xf(this,n,e),this.i&&n!=4&&Xi(this))}};function O_(n,e){var t=n.C,s=e.indexOf(`
`,t);return s==-1?Kr:(t=Number(e.substring(t,s)),isNaN(t)?Za:(s+=1,s+t>e.length?Kr:(e=e.substr(s,t),n.C=s+t,e)))}S.cancel=function(){this.I=!0,vn(this)};function Xi(n){n.V=Date.now()+n.O,Nf(n,n.O)}function Nf(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=zi(Oe(n.gb,n),e)}function Ro(n){n.B&&(k.clearTimeout(n.B),n.B=null)}S.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(D_(this.j,this.A),this.K!=2&&(vi(),Ve(17)),vn(this),this.o=2,ii(this)):Nf(this,this.V-n)};function ii(n){n.l.G==0||n.I||Yf(n.l,n)}function vn(n){Ro(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,el(n.T),_f(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function tc(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||nc(t.h,n))){if(!n.J&&nc(t.h,n)&&t.G==3){try{var s=t.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)Qr(t),Lo(t);else break e;ul(t),Ve(18)}}else t.Ba=i[1],0<t.Ba-t.T&&37500>i[2]&&t.L&&t.A==0&&!t.v&&(t.v=zi(Oe(t.cb,t),6e3));if(1>=Lf(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else wn(t,11)}else if((n.J||t.g==n)&&Qr(t),!$r(e))for(i=t.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(t.T=l[0],l=l[1],t.G==2)if(l[0]=="c"){t.I=l[1],t.ka=l[2];const u=l[3];u!=null&&(t.ma=u,t.j.info("VER="+t.ma));const h=l[4];h!=null&&(t.Ca=h,t.j.info("SVER="+t.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,t.J=s,t.j.info("backChannelRequestTimeoutMs_="+s)),s=t;const f=n.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.h;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(rl(r,r.h),r.h=null))}if(s.D){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,Z(s.F,s.D,v))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),s=t;var o=n;if(s.sa=Zf(s,s.H?s.ka:null,s.V),o.J){Ff(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Ro(a),Xi(a)),s.g=o}else zf(s);0<t.i.length&&Fo(t)}else l[0]!="stop"&&l[0]!="close"||wn(t,7);else t.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?wn(t,7):ll(t):l[0]!="noop"&&t.l&&t.l.wa(l),t.A=0)}}vi(4)}catch{}}function M_(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(To(n)){for(var e=[],t=n.length,s=0;s<t;s++)e.push(n[s]);return e}e=[],t=0;for(s in n)e[t++]=n[s];return e}function L_(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(To(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const s in n)e[t++]=s;return e}}}function Af(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(To(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=L_(n),s=M_(n),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],t&&t[r],n)}var kf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function F_(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var s=n[t].indexOf("="),i=null;if(0<=s){var r=n[t].substring(0,s);i=n[t].substring(s+1)}else r=n[t];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Cn(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Cn){this.h=e!==void 0?e:n.h,Wr(this,n.j),this.s=n.s,this.g=n.g,jr(this,n.m),this.l=n.l,e=n.i;var t=new wi;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Zu(this,t),this.o=n.o}else n&&(t=String(n).match(kf))?(this.h=!!e,Wr(this,t[1]||"",!0),this.s=ei(t[2]||""),this.g=ei(t[3]||"",!0),jr(this,t[4]),this.l=ei(t[5]||"",!0),Zu(this,t[6]||"",!0),this.o=ei(t[7]||"")):(this.h=!!e,this.i=new wi(null,this.h))}Cn.prototype.toString=function(){var n=[],e=this.j;e&&n.push(ti(e,eh,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(ti(e,eh,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(ti(t,t.charAt(0)=="/"?q_:U_,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",ti(t,$_)),n.join("")};function bt(n){return new Cn(n)}function Wr(n,e,t){n.j=t?ei(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function jr(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Zu(n,e,t){e instanceof wi?(n.i=e,G_(n.i,n.h)):(t||(e=ti(e,B_)),n.i=new wi(e,n.h))}function Z(n,e,t){n.i.set(e,t)}function Po(n){return Z(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function ei(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function ti(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,V_),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function V_(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var eh=/[#\/\?@]/g,U_=/[#\?:]/g,q_=/[#\?]/g,B_=/[#\?@]/g,$_=/#/g;function wi(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function rn(n){n.g||(n.g=new Map,n.h=0,n.i&&F_(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}S=wi.prototype;S.add=function(n,e){rn(this),this.i=null,n=Ns(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Df(n,e){rn(n),e=Ns(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Rf(n,e){return rn(n),e=Ns(n,e),n.g.has(e)}S.forEach=function(n,e){rn(this),this.g.forEach(function(t,s){t.forEach(function(i){n.call(e,i,s,this)},this)},this)};S.oa=function(){rn(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let s=0;s<e.length;s++){const i=n[s];for(let r=0;r<i.length;r++)t.push(e[s])}return t};S.W=function(n){rn(this);let e=[];if(typeof n=="string")Rf(this,n)&&(e=e.concat(this.g.get(Ns(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};S.set=function(n,e){return rn(this),this.i=null,n=Ns(this,n),Rf(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};S.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function Pf(n,e,t){Df(n,e),0<t.length&&(n.i=null,n.g.set(Ns(n,e),jc(t)),n.h+=t.length)}S.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var s=e[t];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),n.push(i)}}return this.i=n.join("&")};function Ns(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function G_(n,e){e&&!n.j&&(rn(n),n.i=null,n.g.forEach(function(t,s){var i=s.toLowerCase();s!=i&&(Df(this,s),Pf(this,i,t))},n)),n.j=e}var K_=class{constructor(e,t){this.h=e,this.g=t}};function Of(n){this.l=n||W_,k.PerformanceNavigationTiming?(n=k.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(k.g&&k.g.Ga&&k.g.Ga()&&k.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var W_=10;function Mf(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Lf(n){return n.h?1:n.g?n.g.size:0}function nc(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function rl(n,e){n.g?n.g.add(e):n.h=e}function Ff(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Of.prototype.cancel=function(){if(this.i=Vf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Vf(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return jc(n.i)}function ol(){}ol.prototype.stringify=function(n){return k.JSON.stringify(n,void 0)};ol.prototype.parse=function(n){return k.JSON.parse(n,void 0)};function j_(){this.g=new ol}function Q_(n,e,t){const s=t||"";try{Af(n,function(i,r){let o=i;ji(i)&&(o=Zc(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function z_(n,e){const t=new No;if(k.Image){const s=new Image;s.onload=Tr(Sr,t,s,"TestLoadImage: loaded",!0,e),s.onerror=Tr(Sr,t,s,"TestLoadImage: error",!1,e),s.onabort=Tr(Sr,t,s,"TestLoadImage: abort",!1,e),s.ontimeout=Tr(Sr,t,s,"TestLoadImage: timeout",!1,e),k.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=n}else e(!1)}function Sr(n,e,t,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Ji(n){this.l=n.ac||null,this.j=n.jb||!1}Pe(Ji,nl);Ji.prototype.g=function(){return new Oo(this.l,this.j)};Ji.prototype.i=function(n){return function(){return n}}({});function Oo(n,e){Ce.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=al,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Pe(Oo,Ce);var al=0;S=Oo.prototype;S.open=function(n,e){if(this.readyState!=al)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Ii(this)};S.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||k).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};S.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zi(this)),this.readyState=al};S.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Ii(this)),this.g&&(this.readyState=3,Ii(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof k.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Uf(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function Uf(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}S.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Zi(this):Ii(this),this.readyState==3&&Uf(this)}};S.Va=function(n){this.g&&(this.response=this.responseText=n,Zi(this))};S.Ua=function(n){this.g&&(this.response=n,Zi(this))};S.ga=function(){this.g&&Zi(this)};function Zi(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Ii(n)}S.setRequestHeader=function(n,e){this.v.append(n,e)};S.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};S.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Ii(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Oo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var H_=k.JSON.parse;function re(n){Ce.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=qf,this.K=this.L=!1}Pe(re,Ce);var qf="",Y_=/^https?$/i,X_=["POST","PUT"];S=re.prototype;S.Ka=function(n){this.L=n};S.da=function(n,e,t,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ja.g(),this.C=this.u?Ju(this.u):Ju(Ja),this.g.onreadystatechange=Oe(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(r){th(this,r);return}if(n=t||"",t=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)t.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())t.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(t.keys()).find(r=>r.toLowerCase()=="content-type"),i=k.FormData&&n instanceof k.FormData,!(0<=tf(X_,e))||s||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of t)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Gf(this),0<this.B&&((this.K=J_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Oe(this.qa,this)):this.A=tl(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){th(this,r)}};function J_(n){return cs&&m_()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}S.qa=function(){typeof Wc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,De(this,"timeout"),this.abort(8))};function th(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Bf(n),Mo(n)}function Bf(n){n.D||(n.D=!0,De(n,"complete"),De(n,"error"))}S.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,De(this,"complete"),De(this,"abort"),Mo(this))};S.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mo(this,!0)),re.X.M.call(this)};S.Ha=function(){this.s||(this.F||this.v||this.l?$f(this):this.fb())};S.fb=function(){$f(this)};function $f(n){if(n.h&&typeof Wc<"u"&&(!n.C[1]||Tt(n)!=4||n.aa()!=2)){if(n.v&&Tt(n)==4)tl(n.Ha,0,n);else if(De(n,"readystatechange"),Tt(n)==4){n.h=!1;try{const a=n.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var s;if(s=a===0){var i=String(n.H).match(kf)[1]||null;if(!i&&k.self&&k.self.location){var r=k.self.location.protocol;i=r.substr(0,r.length-1)}s=!Y_.test(i?i.toLowerCase():"")}t=s}if(t)De(n,"complete"),De(n,"success");else{n.m=6;try{var o=2<Tt(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.aa()+"]",Bf(n)}}finally{Mo(n)}}}}function Mo(n,e){if(n.g){Gf(n);const t=n.g,s=n.C[0]?Br:null;n.g=null,n.C=null,e||De(n,"ready");try{t.onreadystatechange=s}catch{}}}function Gf(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(k.clearTimeout(n.A),n.A=null)}function Tt(n){return n.g?n.g.readyState:0}S.aa=function(){try{return 2<Tt(this)?this.g.status:-1}catch{return-1}};S.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};S.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),H_(e)}};function nh(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case qf:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}S.Ea=function(){return this.m};S.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Kf(n){let e="";return zc(n,function(t,s){e+=s,e+=":",e+=t,e+=`\r
`}),e}function cl(n,e,t){e:{for(s in t){var s=!1;break e}s=!0}s||(t=Kf(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):Z(n,e,t))}function Gs(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Wf(n){this.Ca=0,this.i=[],this.j=new No,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Gs("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Gs("baseRetryDelayMs",5e3,n),this.bb=Gs("retryDelaySeedMs",1e4,n),this.$a=Gs("forwardChannelMaxRetries",2,n),this.ta=Gs("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new Of(n&&n.concurrentRequestLimit),this.Fa=new j_,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}S=Wf.prototype;S.ma=8;S.G=1;function ll(n){if(jf(n),n.G==3){var e=n.U++,t=bt(n.F);Z(t,"SID",n.I),Z(t,"RID",e),Z(t,"TYPE","terminate"),er(n,t),e=new Yi(n,n.j,e,void 0),e.K=2,e.v=Po(bt(t)),t=!1,k.navigator&&k.navigator.sendBeacon&&(t=k.navigator.sendBeacon(e.v.toString(),"")),!t&&k.Image&&(new Image().src=e.v,t=!0),t||(e.g=eg(e.l,null),e.g.da(e.v)),e.F=Date.now(),Xi(e)}Jf(n)}function Lo(n){n.g&&(hl(n),n.g.cancel(),n.g=null)}function jf(n){Lo(n),n.u&&(k.clearTimeout(n.u),n.u=null),Qr(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&k.clearTimeout(n.m),n.m=null)}function Fo(n){Mf(n.h)||n.m||(n.m=!0,gf(n.Ja,n),n.C=0)}function Z_(n,e){return Lf(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=zi(Oe(n.Ja,n,e),Xf(n,n.C)),n.C++,!0)}S.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const i=new Yi(this,this.j,n,void 0);let r=this.s;if(this.S&&(r?(r=of(r),af(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var s=this.i[t];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Qf(this,i,e),t=bt(this.F),Z(t,"RID",n),Z(t,"CVER",22),this.D&&Z(t,"X-HTTP-Session-Id",this.D),er(this,t),r&&(this.N?e="headers="+encodeURIComponent(String(Kf(r)))+"&"+e:this.o&&cl(t,this.o,r)),rl(this.h,i),this.Ya&&Z(t,"TYPE","init"),this.O?(Z(t,"$req",e),Z(t,"SID","null"),i.Z=!0,ec(i,t,null)):ec(i,t,e),this.G=2}}else this.G==3&&(n?sh(this,n):this.i.length==0||Mf(this.h)||sh(this))};function sh(n,e){var t;e?t=e.m:t=n.U++;const s=bt(n.F);Z(s,"SID",n.I),Z(s,"RID",t),Z(s,"AID",n.T),er(n,s),n.o&&n.s&&cl(s,n.o,n.s),t=new Yi(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=Qf(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),rl(n.h,t),ec(t,s,e)}function er(n,e){n.ia&&zc(n.ia,function(t,s){Z(e,s,t)}),n.l&&Af({},function(t,s){Z(e,s,t)})}function Qf(n,e,t){t=Math.min(n.i.length,t);var s=n.l?Oe(n.l.Ra,n.l,n):null;e:{var i=n.i;let r=-1;for(;;){const o=["count="+t];r==-1?0<t?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<t;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{Q_(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,s}function zf(n){n.g||n.u||(n.Z=1,gf(n.Ia,n),n.A=0)}function ul(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=zi(Oe(n.Ia,n),Xf(n,n.A)),n.A++,!0)}S.Ia=function(){if(this.u=null,Hf(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=zi(Oe(this.eb,this),n)}};S.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ve(10),Lo(this),Hf(this))};function hl(n){n.B!=null&&(k.clearTimeout(n.B),n.B=null)}function Hf(n){n.g=new Yi(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=bt(n.sa);Z(e,"RID","rpc"),Z(e,"SID",n.I),Z(e,"CI",n.L?"0":"1"),Z(e,"AID",n.T),Z(e,"TYPE","xmlhttp"),er(n,e),n.o&&n.s&&cl(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=Po(bt(e)),t.s=null,t.P=!0,Sf(t,n)}S.cb=function(){this.v!=null&&(this.v=null,Lo(this),ul(this),Ve(19))};function Qr(n){n.v!=null&&(k.clearTimeout(n.v),n.v=null)}function Yf(n,e){var t=null;if(n.g==e){Qr(n),hl(n),n.g=null;var s=2}else if(nc(n.h,e))t=e.D,Ff(n.h,e),s=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(s==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var i=n.C;s=Ao(),De(s,new If(s,t)),Fo(n)}else zf(n);else if(i=e.o,i==3||i==0&&0<n.pa||!(s==1&&Z_(n,e)||s==2&&ul(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),i){case 1:wn(n,5);break;case 4:wn(n,10);break;case 3:wn(n,6);break;default:wn(n,2)}}}function Xf(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function wn(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var s=Oe(n.kb,n);t||(t=new Cn("//www.google.com/images/cleardot.gif"),k.location&&k.location.protocol=="http"||Wr(t,"https"),Po(t)),z_(t.toString(),s)}else Ve(2);n.G=0,n.l&&n.l.va(e),Jf(n),jf(n)}S.kb=function(n){n?(this.j.info("Successfully pinged google.com"),Ve(2)):(this.j.info("Failed to ping google.com"),Ve(1))};function Jf(n){if(n.G=0,n.la=[],n.l){const e=Vf(n.h);(e.length!=0||n.i.length!=0)&&(ju(n.la,e),ju(n.la,n.i),n.h.i.length=0,jc(n.i),n.i.length=0),n.l.ua()}}function Zf(n,e,t){var s=t instanceof Cn?bt(t):new Cn(t,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),jr(s,s.m);else{var i=k.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Cn(null,void 0);s&&Wr(r,s),e&&(r.g=e),i&&jr(r,i),t&&(r.l=t),s=r}return t=n.D,e=n.za,t&&e&&Z(s,t,e),Z(s,"VER",n.ma),er(n,s),s}function eg(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new re(new Ji({jb:!0})):new re(n.ra),e.Ka(n.H),e}function tg(){}S=tg.prototype;S.xa=function(){};S.wa=function(){};S.va=function(){};S.ua=function(){};S.Ra=function(){};function zr(){if(cs&&!(10<=Number(p_)))throw Error("Environmental error: no available transport.")}zr.prototype.g=function(n,e){return new Je(n,e)};function Je(n,e){Ce.call(this),this.g=new Wf(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!$r(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!$r(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new As(this)}Pe(Je,Ce);Je.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;Ve(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=Zf(n,null,n.V),Fo(n)};Je.prototype.close=function(){ll(this.g)};Je.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Zc(n),n=t);e.i.push(new K_(e.ab++,n)),e.G==3&&Fo(e)};Je.prototype.M=function(){this.g.l=null,delete this.j,ll(this.g),delete this.g,Je.X.M.call(this)};function ng(n){sl.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}Pe(ng,sl);function sg(){il.call(this),this.status=1}Pe(sg,il);function As(n){this.g=n}Pe(As,tg);As.prototype.xa=function(){De(this.g,"a")};As.prototype.wa=function(n){De(this.g,new ng(n))};As.prototype.va=function(n){De(this.g,new sg)};As.prototype.ua=function(){De(this.g,"b")};zr.prototype.createWebChannel=zr.prototype.g;Je.prototype.send=Je.prototype.u;Je.prototype.open=Je.prototype.m;Je.prototype.close=Je.prototype.close;ko.NO_ERROR=0;ko.TIMEOUT=8;ko.HTTP_ERROR=6;Ef.COMPLETE="complete";Tf.EventType=Hi;Hi.OPEN="a";Hi.CLOSE="b";Hi.ERROR="c";Hi.MESSAGE="d";Ce.prototype.listen=Ce.prototype.N;re.prototype.listenOnce=re.prototype.O;re.prototype.getLastError=re.prototype.Oa;re.prototype.getLastErrorCode=re.prototype.Ea;re.prototype.getStatus=re.prototype.aa;re.prototype.getResponseJson=re.prototype.Sa;re.prototype.getResponseText=re.prototype.fa;re.prototype.send=re.prototype.da;re.prototype.setWithCredentials=re.prototype.Ka;var ev=function(){return new zr},tv=function(){return Ao()},Ra=ko,nv=Ef,sv=$n,ih={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},iv=Ji,br=Tf,rv=re;const rh="@firebase/firestore";/**
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
 */class we{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}we.UNAUTHENTICATED=new we(null),we.GOOGLE_CREDENTIALS=new we("google-credentials-uid"),we.FIRST_PARTY=new we("first-party-uid"),we.MOCK_USER=new we("mock-user");/**
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
 */let ks="9.15.0";/**
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
 */const Kt=new Gc("@firebase/firestore");function sc(){return Kt.logLevel}function ov(n){Kt.setLogLevel(n)}function _(n,...e){if(Kt.logLevel<=xn.DEBUG){const t=e.map(dl);Kt.debug(`Firestore (${ks}): ${n}`,...t)}}function le(n,...e){if(Kt.logLevel<=xn.ERROR){const t=e.map(dl);Kt.error(`Firestore (${ks}): ${n}`,...t)}}function ls(n,...e){if(Kt.logLevel<=xn.WARN){const t=e.map(dl);Kt.warn(`Firestore (${ks}): ${n}`,...t)}}function dl(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
*/var e}/**
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
 */function T(n="Unexpected state"){const e=`FIRESTORE (${ks}) INTERNAL ASSERTION FAILED: `+n;throw le(e),new Error(e)}function b(n,e){n||T()}function av(n,e){n||T()}function E(n,e){return n}/**
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
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends By{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Te{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class ig{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(we.UNAUTHENTICATED))}shutdown(){}}class lv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class uv{constructor(e){this.t=e,this.currentUser=we.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const i=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let r=new Te;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Te,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Te)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(b(typeof s.accessToken=="string"),new ig(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return b(e===null||typeof e=="string"),new we(e)}}class hv{constructor(e,t,s,i){this.h=e,this.l=t,this.m=s,this.g=i,this.type="FirstParty",this.user=we.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(b(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class dv{constructor(e,t,s,i){this.h=e,this.l=t,this.m=s,this.g=i}getToken(){return Promise.resolve(new hv(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(we.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gv{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const s=r=>{r.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(b(typeof t.token=="string"),this.A=t.token,new fv(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function mv(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class rg{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=mv(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%e.length))}return s}}function D(n,e){return n<e?-1:n>e?1:0}function us(n,e,t){return n.length===e.length&&n.every((s,i)=>t(s,e[i]))}function og(n){return n+"\0"}/**
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
 */class ne{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new y(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new y(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new y(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new y(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ne.fromMillis(Date.now())}static fromDate(e){return ne.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new ne(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?D(this.nanoseconds,e.nanoseconds):D(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class x{constructor(e){this.timestamp=e}static fromTimestamp(e){return new x(e)}static min(){return new x(new ne(0,0))}static max(){return new x(new ne(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ei{constructor(e,t,s){t===void 0?t=0:t>e.length&&T(),s===void 0?s=e.length-t:s>e.length-t&&T(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ei.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ei?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=e.get(i),o=t.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class V extends Ei{construct(e,t,s){return new V(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new y(p.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(i=>i.length>0))}return new V(t)}static emptyPath(){return new V([])}}const pv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ue extends Ei{construct(e,t,s){return new ue(e,t,s)}static isValidIdentifier(e){return pv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ue(["__name__"])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new y(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new y(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new y(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new y(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ue(t)}static emptyPath(){return new ue([])}}/**
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
 */class I{constructor(e){this.path=e}static fromPath(e){return new I(V.fromString(e))}static fromName(e){return new I(V.fromString(e).popFirst(5))}static empty(){return new I(V.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&V.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return V.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new I(new V(e.slice()))}}/**
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
 */class ag{constructor(e,t,s,i){this.indexId=e,this.collectionGroup=t,this.fields=s,this.indexState=i}}function ic(n){return n.fields.find(e=>e.kind===2)}function dn(n){return n.fields.filter(e=>e.kind!==2)}ag.UNKNOWN_ID=-1;class yv{constructor(e,t){this.fieldPath=e,this.kind=t}}class Hr{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Hr(0,Ze.min())}}function cg(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=x.fromTimestamp(s===1e9?new ne(t+1,0):new ne(t,s));return new Ze(i,I.empty(),e)}function lg(n){return new Ze(n.readTime,n.key,-1)}class Ze{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ze(x.min(),I.empty(),-1)}static max(){return new Ze(x.max(),I.empty(),-1)}}function fl(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=I.comparator(n.documentKey,e.documentKey),t!==0?t:D(n.largestBatchId,e.largestBatchId))}/**
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
 */const ug="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function on(n){if(n.code!==p.FAILED_PRECONDITION||n.message!==ug)throw n;_("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class g{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new g((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof g?t:g.resolve(t)}catch(t){return g.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):g.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):g.reject(t)}static resolve(e){return new g((t,s)=>{t(e)})}static reject(e){return new g((t,s)=>{s(e)})}static waitFor(e){return new g((t,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&t()},c=>s(c))}),o=!0,r===i&&t()})}static or(e){let t=g.resolve(!1);for(const s of e)t=t.next(i=>i?g.resolve(i):s());return t}static forEach(e,t){const s=[];return e.forEach((i,r)=>{s.push(t.call(this,i,r))}),this.waitFor(s)}static mapArray(e,t){return new g((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;t(e[l]).next(u=>{o[l]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,t){return new g((s,i)=>{const r=()=>{e()===!0?t().next(()=>{r()},i):s()};r()})}}/**
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
 */class Vo{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.P=new Te,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{t.error?this.P.reject(new ri(e,t.error)):this.P.resolve()},this.transaction.onerror=s=>{const i=gl(s.target.error);this.P.reject(new ri(e,i))}}static open(e,t,s,i){try{return new Vo(t,e.transaction(i,s))}catch(r){throw new ri(t,r)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(_("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new vv(t)}}class ct{constructor(e,t,s){this.name=e,this.version=t,this.S=s,ct.D(Ka())===12.2&&le("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return _("SimpleDb","Removing database:",e),gn(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!$y())return!1;if(ct.N())return!0;const e=Ka(),t=ct.D(e),s=0<t&&t<10,i=ct.k(e),r=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||s||r)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.O)==="YES"}static M(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),s=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(s)}static k(e){const t=e.match(/Android ([\d.]+)/i),s=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(s)}async F(e){return this.db||(_("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,s)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=r=>{const o=r.target.result;t(o)},i.onblocked=()=>{s(new ri(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=r=>{const o=r.target.error;o.name==="VersionError"?s(new y(p.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?s(new y(p.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):s(new ri(e,o))},i.onupgradeneeded=r=>{_("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',r.oldVersion);const o=r.target.result;this.S.$(o,i.transaction,r.oldVersion,this.version).next(()=>{_("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=t=>this.B(t)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,s,i){const r=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.F(e);const a=Vo.open(this.db,e,r?"readonly":"readwrite",s),c=i(a).next(l=>(a.V(),l)).catch(l=>(a.abort(l),g.reject(l))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(_("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class _v{constructor(e){this.q=e,this.U=!1,this.K=null}get isDone(){return this.U}get G(){return this.K}set cursor(e){this.q=e}done(){this.U=!0}j(e){this.K=e}delete(){return gn(this.q.delete())}}class ri extends y{constructor(e,t){super(p.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function an(n){return n.name==="IndexedDbTransactionError"}class vv{constructor(e){this.store=e}put(e,t){let s;return t!==void 0?(_("SimpleDb","PUT",this.store.name,e,t),s=this.store.put(t,e)):(_("SimpleDb","PUT",this.store.name,"<auto-key>",e),s=this.store.put(e)),gn(s)}add(e){return _("SimpleDb","ADD",this.store.name,e,e),gn(this.store.add(e))}get(e){return gn(this.store.get(e)).next(t=>(t===void 0&&(t=null),_("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return _("SimpleDb","DELETE",this.store.name,e),gn(this.store.delete(e))}count(){return _("SimpleDb","COUNT",this.store.name),gn(this.store.count())}W(e,t){const s=this.options(e,t);if(s.index||typeof this.store.getAll!="function"){const i=this.cursor(s),r=[];return this.H(i,(o,a)=>{r.push(a)}).next(()=>r)}{const i=this.store.getAll(s.range);return new g((r,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{r(a.target.result)}})}}J(e,t){const s=this.store.getAll(e,t===null?void 0:t);return new g((i,r)=>{s.onerror=o=>{r(o.target.error)},s.onsuccess=o=>{i(o.target.result)}})}Y(e,t){_("SimpleDb","DELETE ALL",this.store.name);const s=this.options(e,t);s.X=!1;const i=this.cursor(s);return this.H(i,(r,o,a)=>a.delete())}Z(e,t){let s;t?s=e:(s={},t=e);const i=this.cursor(s);return this.H(i,t)}tt(e){const t=this.cursor({});return new g((s,i)=>{t.onerror=r=>{const o=gl(r.target.error);i(o)},t.onsuccess=r=>{const o=r.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():s()}):s()}})}H(e,t){const s=[];return new g((i,r)=>{e.onerror=o=>{r(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new _v(a),l=t(a.primaryKey,a.value,c);if(l instanceof g){const u=l.catch(h=>(c.done(),g.reject(h)));s.push(u)}c.isDone?i():c.G===null?a.continue():a.continue(c.G)}}).next(()=>g.waitFor(s))}options(e,t){let s;return e!==void 0&&(typeof e=="string"?s=e:t=e),{index:s,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const s=this.store.index(e.index);return e.X?s.openKeyCursor(e.range,t):s.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function gn(n){return new g((e,t)=>{n.onsuccess=s=>{const i=s.target.result;e(i)},n.onerror=s=>{const i=gl(s.target.error);t(i)}})}let oh=!1;function gl(n){const e=ct.D(Ka());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const s=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return oh||(oh=!0,setTimeout(()=>{throw s},0)),s}}return n}class wv{constructor(e,t){this.asyncQueue=e,this.et=t,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){_("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{_("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(t){an(t)?_("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await on(t)}await this.nt(6e4)})}}class Iv{constructor(e,t){this.localStore=e,this.persistence=t}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.it(t,e))}it(e,t){const s=new Set;let i=t,r=!0;return g.doWhile(()=>r===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!s.has(o))return _("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,i).next(a=>{i-=a,s.add(o)});r=!1})).next(()=>t-i)}rt(e,t,s){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,s).next(r=>{const o=r.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(i,r)).next(a=>(_("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}ot(e,t){let s=e;return t.changes.forEach((i,r)=>{const o=lg(r);fl(o,s)>0&&(s=o)}),new Ze(s.readTime,s.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Ke{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>t.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Ke.at=-1;/**
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
 */class Ev{constructor(e,t,s,i,r,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Wt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Wt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Wt&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function ah(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Gn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function dg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */function tr(n){return n==null}function Ti(n){return n===0&&1/n==-1/0}function fg(n){return typeof n=="number"&&Number.isInteger(n)&&!Ti(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Tv(){return typeof atob<"u"}/**
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
 */class me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new me(t)}static fromUint8Array(e){const t=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return D(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}me.EMPTY_BYTE_STRING=new me("");const Cv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jt(n){if(b(!!n),typeof n=="string"){let e=0;const t=Cv.exec(n);if(b(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ie(n.seconds),nanos:ie(n.nanos)}}function ie(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function An(n){return typeof n=="string"?me.fromBase64String(n):me.fromUint8Array(n)}/**
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
 */function ml(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function gg(n){const e=n.mapValue.fields.__previous_value__;return ml(e)?gg(e):e}function Ci(n){const e=jt(n.mapValue.fields.__local_write_time__.timestampValue);return new ne(e.seconds,e.nanos)}/**
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
 */const Ft={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Or={nullValue:"NULL_VALUE"};function kn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ml(n)?4:mg(n)?9007199254740991:10:T()}function vt(n,e){if(n===e)return!0;const t=kn(n);if(t!==kn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ci(n).isEqual(Ci(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=jt(s.timestampValue),o=jt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return An(s.bytesValue).isEqual(An(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ie(s.geoPointValue.latitude)===ie(i.geoPointValue.latitude)&&ie(s.geoPointValue.longitude)===ie(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ie(s.integerValue)===ie(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=ie(s.doubleValue),o=ie(i.doubleValue);return r===o?Ti(r)===Ti(o):isNaN(r)&&isNaN(o)}return!1}(n,e);case 9:return us(n.arrayValue.values||[],e.arrayValue.values||[],vt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(ah(r)!==ah(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!vt(r[a],o[a])))return!1;return!0}(n,e);default:return T()}}function Si(n,e){return(n.values||[]).find(t=>vt(t,e))!==void 0}function Qt(n,e){if(n===e)return 0;const t=kn(n),s=kn(e);if(t!==s)return D(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return D(n.booleanValue,e.booleanValue);case 2:return function(i,r){const o=ie(i.integerValue||i.doubleValue),a=ie(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return ch(n.timestampValue,e.timestampValue);case 4:return ch(Ci(n),Ci(e));case 5:return D(n.stringValue,e.stringValue);case 6:return function(i,r){const o=An(i),a=An(r);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=D(o[c],a[c]);if(l!==0)return l}return D(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,r){const o=D(ie(i.latitude),ie(r.latitude));return o!==0?o:D(ie(i.longitude),ie(r.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Qt(o[c],a[c]);if(l)return l}return D(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Ft.mapValue&&r===Ft.mapValue)return 0;if(i===Ft.mapValue)return 1;if(r===Ft.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=D(a[u],l[u]);if(h!==0)return h;const d=Qt(o[a[u]],c[l[u]]);if(d!==0)return d}return D(a.length,l.length)}(n.mapValue,e.mapValue);default:throw T()}}function ch(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return D(n,e);const t=jt(n),s=jt(e),i=D(t.seconds,s.seconds);return i!==0?i:D(t.nanos,s.nanos)}function hs(n){return rc(n)}function rc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(s){const i=jt(s);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?An(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,I.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=rc(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${rc(s.fields[a])}`;return r+"}"}(n.mapValue):T();var e,t}function Dn(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function oc(n){return!!n&&"integerValue"in n}function bi(n){return!!n&&"arrayValue"in n}function lh(n){return!!n&&"nullValue"in n}function uh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Mr(n){return!!n&&"mapValue"in n}function oi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Gn(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=oi(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=oi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function mg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function Sv(n){return"nullValue"in n?Or:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Dn(Wt.empty(),I.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:T()}function bv(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Dn(Wt.empty(),I.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?Ft:T()}function hh(n,e){const t=Qt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function dh(n,e){const t=Qt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class zt{constructor(e,t){this.position=e,this.inclusive=t}}function fh(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],o=n.position[i];if(r.field.isKeyField()?s=I.comparator(I.fromName(o.referenceValue),t.key):s=Qt(o,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function gh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!vt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class pg{}class L extends pg{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new xv(e,t,s):t==="array-contains"?new kv(e,s):t==="in"?new Cg(e,s):t==="not-in"?new Dv(e,s):t==="array-contains-any"?new Rv(e,s):new L(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Nv(e,s):new Av(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Qt(t,this.value)):t!==null&&kn(this.value)===kn(t)&&this.matchesComparison(Qt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class K extends pg{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new K(e,t)}matches(e){return ds(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(t=>t.isInequality());return e!==null?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function ds(n){return n.op==="and"}function ac(n){return n.op==="or"}function yg(n){return _g(n)&&ds(n)}function _g(n){for(const e of n.filters)if(e instanceof K)return!1;return!0}function vg(n){if(n instanceof L)return n.field.canonicalString()+n.op.toString()+hs(n.value);{const e=n.filters.map(t=>vg(t)).join(",");return`${n.op}(${e})`}}function wg(n,e){return n instanceof L?function(t,s){return s instanceof L&&t.op===s.op&&t.field.isEqual(s.field)&&vt(t.value,s.value)}(n,e):n instanceof K?function(t,s){return s instanceof K&&t.op===s.op&&t.filters.length===s.filters.length?t.filters.reduce((i,r,o)=>i&&wg(r,s.filters[o]),!0):!1}(n,e):void T()}function Ig(n,e){const t=n.filters.concat(e);return K.create(t,n.op)}function Eg(n){return n instanceof L?function(e){return`${e.field.canonicalString()} ${e.op} ${hs(e.value)}`}(n):n instanceof K?function(e){return e.op.toString()+" {"+e.getFilters().map(Eg).join(" ,")+"}"}(n):"Filter"}class xv extends L{constructor(e,t,s){super(e,t,s),this.key=I.fromName(s.referenceValue)}matches(e){const t=I.comparator(e.key,this.key);return this.matchesComparison(t)}}class Nv extends L{constructor(e,t){super(e,"in",t),this.keys=Tg("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Av extends L{constructor(e,t){super(e,"not-in",t),this.keys=Tg("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Tg(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>I.fromName(s.referenceValue))}class kv extends L{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return bi(t)&&Si(t.arrayValue,this.value)}}class Cg extends L{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Si(this.value.arrayValue,t)}}class Dv extends L{constructor(e,t){super(e,"not-in",t)}matches(e){if(Si(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Si(this.value.arrayValue,t)}}class Rv extends L{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!bi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Si(this.value.arrayValue,s))}}/**
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
 */class is{constructor(e,t="asc"){this.field=e,this.dir=t}}function Pv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class oe{constructor(e,t){this.comparator=e,this.root=t||Ae.EMPTY}insert(e,t){return new oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ae.BLACK,null,null))}remove(e){return new oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ae.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xr(this.root,e,this.comparator,!1)}getReverseIterator(){return new xr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xr(this.root,e,this.comparator,!0)}}class xr{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ae{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??Ae.RED,this.left=i??Ae.EMPTY,this.right=r??Ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new Ae(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ae.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const e=this.left.check();if(e!==this.right.check())throw T();return e+(this.isRed()?0:1)}}Ae.EMPTY=null,Ae.RED=!0,Ae.BLACK=!1;Ae.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(n,e,t,s,i){return this}insert(n,e,t){return new Ae(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class W{constructor(e){this.comparator=e,this.data=new oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new mh(this.data.getIterator())}getIteratorFrom(e){return new mh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof W)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new W(this.comparator);return t.data=e,t}}class mh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Xn(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class Xe{constructor(e){this.fields=e,e.sort(ue.comparator)}static empty(){return new Xe([])}unionWith(e){let t=new W(ue.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Xe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return us(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class ke{constructor(e){this.value=e}static empty(){return new ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Mr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=oi(t)}setAll(e){let t=ue.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,s,i),s={},i=[],t=a.popLast()}o?s[a.lastSegment()]=oi(o):i.push(a.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());Mr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return vt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];Mr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){Gn(t,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new ke(oi(this.value))}}function Sg(n){const e=[];return Gn(n.fields,(t,s)=>{const i=new ue([t]);if(Mr(s)){const r=Sg(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Xe(e)}/**
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
 */class X{constructor(e,t,s,i,r,o,a){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new X(e,0,x.min(),x.min(),x.min(),ke.empty(),0)}static newFoundDocument(e,t,s,i){return new X(e,1,t,x.min(),s,i,0)}static newNoDocument(e,t){return new X(e,2,t,x.min(),x.min(),ke.empty(),0)}static newUnknownDocument(e,t){return new X(e,3,t,x.min(),x.min(),ke.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(x.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=x.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof X&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new X(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ov{constructor(e,t=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function cc(n,e=null,t=[],s=[],i=null,r=null,o=null){return new Ov(n,e,t,s,i,r,o)}function Rn(n){const e=E(n);if(e.ft===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>vg(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),tr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>hs(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>hs(s)).join(",")),e.ft=t}return e.ft}function nr(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Pv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!wg(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!gh(n.startAt,e.startAt)&&gh(n.endAt,e.endAt)}function Yr(n){return I.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Xr(n,e){return n.filters.filter(t=>t instanceof L&&t.field.isEqual(e))}function ph(n,e,t){let s=Or,i=!0;for(const r of Xr(n,e)){let o=Or,a=!0;switch(r.op){case"<":case"<=":o=Sv(r.value);break;case"==":case"in":case">=":o=r.value;break;case">":o=r.value,a=!1;break;case"!=":case"not-in":o=Or}hh({value:s,inclusive:i},{value:o,inclusive:a})<0&&(s=o,i=a)}if(t!==null){for(let r=0;r<n.orderBy.length;++r)if(n.orderBy[r].field.isEqual(e)){const o=t.position[r];hh({value:s,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(s=o,i=t.inclusive);break}}return{value:s,inclusive:i}}function yh(n,e,t){let s=Ft,i=!0;for(const r of Xr(n,e)){let o=Ft,a=!0;switch(r.op){case">=":case">":o=bv(r.value),a=!1;break;case"==":case"in":case"<=":o=r.value;break;case"<":o=r.value,a=!1;break;case"!=":case"not-in":o=Ft}dh({value:s,inclusive:i},{value:o,inclusive:a})>0&&(s=o,i=a)}if(t!==null){for(let r=0;r<n.orderBy.length;++r)if(n.orderBy[r].field.isEqual(e)){const o=t.position[r];dh({value:s,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(s=o,i=t.inclusive);break}}return{value:s,inclusive:i}}/**
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
 */class At{constructor(e,t=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function bg(n,e,t,s,i,r,o,a){return new At(n,e,t,s,i,r,o,a)}function Ds(n){return new At(n)}function _h(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function pl(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Uo(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function yl(n){return n.collectionGroup!==null}function Sn(n){const e=E(n);if(e.dt===null){e.dt=[];const t=Uo(e),s=pl(e);if(t!==null&&s===null)t.isKeyField()||e.dt.push(new is(t)),e.dt.push(new is(ue.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new is(ue.keyField(),r))}}}return e.dt}function Qe(n){const e=E(n);if(!e._t)if(e.limitType==="F")e._t=cc(e.path,e.collectionGroup,Sn(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of Sn(e)){const o=r.dir==="desc"?"asc":"desc";t.push(new is(r.field,o))}const s=e.endAt?new zt(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new zt(e.startAt.position,e.startAt.inclusive):null;e._t=cc(e.path,e.collectionGroup,t,e.filters,e.limit,s,i)}return e._t}function lc(n,e){e.getFirstInequalityField(),Uo(n);const t=n.filters.concat([e]);return new At(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Jr(n,e,t){return new At(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function sr(n,e){return nr(Qe(n),Qe(e))&&n.limitType===e.limitType}function xg(n){return`${Rn(Qe(n))}|lt:${n.limitType}`}function uc(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(s=>Eg(s)).join(", ")}]`),tr(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>hs(s)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>hs(s)).join(",")),`Target(${t})`}(Qe(n))}; limitType=${n.limitType})`}function _l(n,e){return e.isFoundDocument()&&function(t,s){const i=s.key.path;return t.collectionGroup!==null?s.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):I.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,s){for(const i of Sn(t))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,s){for(const i of t.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(t,s){return!(t.startAt&&!function(i,r,o){const a=fh(i,r,o);return i.inclusive?a<=0:a<0}(t.startAt,Sn(t),s)||t.endAt&&!function(i,r,o){const a=fh(i,r,o);return i.inclusive?a>=0:a>0}(t.endAt,Sn(t),s))}(n,e)}function Ng(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ag(n){return(e,t)=>{let s=!1;for(const i of Sn(n)){const r=Mv(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Mv(n,e,t){const s=n.field.isKeyField()?I.comparator(e.key,t.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Qt(a,c):T()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return T()}}/**
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
 */function kg(n,e){if(n.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ti(e)?"-0":e}}function Dg(n){return{integerValue:""+n}}function Rg(n,e){return fg(e)?Dg(e):kg(n,e)}/**
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
 */class qo{constructor(){this._=void 0}}function Lv(n,e,t){return n instanceof fs?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(t,e):n instanceof Pn?Og(n,e):n instanceof On?Mg(n,e):function(s,i){const r=Pg(s,i),o=vh(r)+vh(s.gt);return oc(r)&&oc(s.gt)?Dg(o):kg(s.yt,o)}(n,e)}function Fv(n,e,t){return n instanceof Pn?Og(n,e):n instanceof On?Mg(n,e):t}function Pg(n,e){return n instanceof gs?oc(t=e)||function(s){return!!s&&"doubleValue"in s}(t)?e:{integerValue:0}:null;var t}class fs extends qo{}class Pn extends qo{constructor(e){super(),this.elements=e}}function Og(n,e){const t=Lg(e);for(const s of n.elements)t.some(i=>vt(i,s))||t.push(s);return{arrayValue:{values:t}}}class On extends qo{constructor(e){super(),this.elements=e}}function Mg(n,e){let t=Lg(e);for(const s of n.elements)t=t.filter(i=>!vt(i,s));return{arrayValue:{values:t}}}class gs extends qo{constructor(e,t){super(),this.yt=e,this.gt=t}}function vh(n){return ie(n.integerValue||n.doubleValue)}function Lg(n){return bi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class ir{constructor(e,t){this.field=e,this.transform=t}}function Vv(n,e){return n.field.isEqual(e.field)&&function(t,s){return t instanceof Pn&&s instanceof Pn||t instanceof On&&s instanceof On?us(t.elements,s.elements,vt):t instanceof gs&&s instanceof gs?vt(t.gt,s.gt):t instanceof fs&&s instanceof fs}(n.transform,e.transform)}class Uv{constructor(e,t){this.version=e,this.transformResults=t}}class ee{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ee}static exists(e){return new ee(void 0,e)}static updateTime(e){return new ee(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Bo{}function Fg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ps(n.key,ee.none()):new Rs(n.key,n.data,ee.none());{const t=n.data,s=ke.empty();let i=new W(ue.comparator);for(let r of e.fields)if(!i.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new kt(n.key,s,new Xe(i.toArray()),ee.none())}}function qv(n,e,t){n instanceof Rs?function(s,i,r){const o=s.value.clone(),a=Ih(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(n,e,t):n instanceof kt?function(s,i,r){if(!Lr(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Ih(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Vg(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(n,e,t):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,t)}function ai(n,e,t,s){return n instanceof Rs?function(i,r,o,a){if(!Lr(i.precondition,r))return o;const c=i.value.clone(),l=Eh(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(n,e,t,s):n instanceof kt?function(i,r,o,a){if(!Lr(i.precondition,r))return o;const c=Eh(i.fieldTransforms,a,r),l=r.data;return l.setAll(Vg(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(n,e,t,s):function(i,r,o){return Lr(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(n,e,t)}function Bv(n,e){let t=null;for(const s of n.fieldTransforms){const i=e.data.field(s.field),r=Pg(s.transform,i||null);r!=null&&(t===null&&(t=ke.empty()),t.set(s.field,r))}return t||null}function wh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,s){return t===void 0&&s===void 0||!(!t||!s)&&us(t,s,(i,r)=>Vv(i,r))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Rs extends Bo{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class kt extends Bo{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Vg(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function Ih(n,e,t){const s=new Map;b(n.length===t.length);for(let i=0;i<t.length;i++){const r=n[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Fv(o,a,t[i]))}return s}function Eh(n,e,t){const s=new Map;for(const i of n){const r=i.transform,o=t.data.field(i.field);s.set(i.field,Lv(r,o,e))}return s}class Ps extends Bo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vl extends Bo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class $v{constructor(e){this.count=e}}/**
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
 */var de,F;function Ug(n){switch(n){default:return T();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function qg(n){if(n===void 0)return le("GRPC error has no .code"),p.UNKNOWN;switch(n){case de.OK:return p.OK;case de.CANCELLED:return p.CANCELLED;case de.UNKNOWN:return p.UNKNOWN;case de.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case de.INTERNAL:return p.INTERNAL;case de.UNAVAILABLE:return p.UNAVAILABLE;case de.UNAUTHENTICATED:return p.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case de.NOT_FOUND:return p.NOT_FOUND;case de.ALREADY_EXISTS:return p.ALREADY_EXISTS;case de.PERMISSION_DENIED:return p.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case de.ABORTED:return p.ABORTED;case de.OUT_OF_RANGE:return p.OUT_OF_RANGE;case de.UNIMPLEMENTED:return p.UNIMPLEMENTED;case de.DATA_LOSS:return p.DATA_LOSS;default:return T()}}(F=de||(de={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class cn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Gn(this.inner,(t,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return dg(this.inner)}size(){return this.innerSize}}/**
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
 */const Gv=new oe(I.comparator);function We(){return Gv}const Bg=new oe(I.comparator);function ni(...n){let e=Bg;for(const t of n)e=e.insert(t.key,t);return e}function $g(n){let e=Bg;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function gt(){return ci()}function Gg(){return ci()}function ci(){return new cn(n=>n.toString(),(n,e)=>n.isEqual(e))}const Kv=new oe(I.comparator),Wv=new W(I.comparator);function R(...n){let e=Wv;for(const t of n)e=e.add(t);return e}const jv=new W(D);function $o(){return jv}/**
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
 */class rr{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,or.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new rr(x.min(),i,$o(),We(),R())}}class or{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new or(s,t,R(),R(),R())}}/**
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
 */class Fr{constructor(e,t,s,i){this.It=e,this.removedTargetIds=t,this.key=s,this.Tt=i}}class Kg{constructor(e,t){this.targetId=e,this.Et=t}}class Wg{constructor(e,t,s=me.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class Th{constructor(){this.At=0,this.Rt=Sh(),this.bt=me.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=R(),t=R(),s=R();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:T()}}),new or(this.bt,this.Pt,e,t,s)}xt(){this.vt=!1,this.Rt=Sh()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Qv{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=We(),this.qt=Ch(),this.Ut=new W(D)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}jt(e){this.forEachTarget(e,t=>{const s=this.Wt(t);switch(e.state){case 0:this.zt(t)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),s.Dt(e.resumeToken));break;default:T()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((s,i)=>{this.zt(i)&&t(i)})}Jt(e){const t=e.targetId,s=e.Et.count,i=this.Yt(t);if(i){const r=i.target;if(Yr(r))if(s===0){const o=new I(r.path);this.Qt(t,o,X.newNoDocument(o,x.min()))}else b(s===1);else this.Xt(t)!==s&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){const t=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&Yr(a.target)){const c=new I(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,X.newNoDocument(c,e))}r.St&&(t.set(o,r.Ct()),r.xt())}});let s=R();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new rr(e,t,this.Ut,this.Lt,s);return this.Lt=We(),this.qt=Ch(),this.Ut=new W(D),i}Gt(e,t){if(!this.zt(e))return;const s=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,s),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,s){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,t)?i.Nt(t,1):i.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),s&&(this.Lt=this.Lt.insert(t,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new Th,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new W(D),this.qt=this.qt.insert(e,t)),t}zt(e){const t=this.Yt(e)!==null;return t||_("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Th),this.$t.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}function Ch(){return new oe(I.comparator)}function Sh(){return new oe(I.comparator)}/**
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
 */const zv=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Hv=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Yv=(()=>({and:"AND",or:"OR"}))();class Xv{constructor(e,t){this.databaseId=e,this.wt=t}}function ms(n,e){return n.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jg(n,e){return n.wt?e.toBase64():e.toUint8Array()}function Jv(n,e){return ms(n,e.toTimestamp())}function he(n){return b(!!n),x.fromTimestamp(function(e){const t=jt(e);return new ne(t.seconds,t.nanos)}(n))}function wl(n,e){return function(t){return new V(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Qg(n){const e=V.fromString(n);return b(nm(e)),e}function xi(n,e){return wl(n.databaseId,e.path)}function pt(n,e){const t=Qg(e);if(t.get(1)!==n.databaseId.projectId)throw new y(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new y(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new I(Hg(t))}function hc(n,e){return wl(n.databaseId,e)}function zg(n){const e=Qg(n);return e.length===4?V.emptyPath():Hg(e)}function Ni(n){return new V(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Hg(n){return b(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function bh(n,e,t){return{name:xi(n,e),fields:t.value.mapValue.fields}}function Yg(n,e,t){const s=pt(n,e.name),i=he(e.updateTime),r=e.createTime?he(e.createTime):x.min(),o=new ke({mapValue:{fields:e.fields}}),a=X.newFoundDocument(s,i,r,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function Zv(n,e){return"found"in e?function(t,s){b(!!s.found),s.found.name,s.found.updateTime;const i=pt(t,s.found.name),r=he(s.found.updateTime),o=s.found.createTime?he(s.found.createTime):x.min(),a=new ke({mapValue:{fields:s.found.fields}});return X.newFoundDocument(i,r,o,a)}(n,e):"missing"in e?function(t,s){b(!!s.missing),b(!!s.readTime);const i=pt(t,s.missing),r=he(s.readTime);return X.newNoDocument(i,r)}(n,e):T()}function ew(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:T()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.wt?(b(l===void 0||typeof l=="string"),me.fromBase64String(l||"")):(b(l===void 0||l instanceof Uint8Array),me.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?p.UNKNOWN:qg(c.code);return new y(l,c.message||"")}(o);t=new Wg(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=pt(n,s.document.name),r=he(s.document.updateTime),o=s.document.createTime?he(s.document.createTime):x.min(),a=new ke({mapValue:{fields:s.document.fields}}),c=X.newFoundDocument(i,r,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];t=new Fr(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=pt(n,s.document),r=s.readTime?he(s.readTime):x.min(),o=X.newNoDocument(i,r),a=s.removedTargetIds||[];t=new Fr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=pt(n,s.document),r=s.removedTargetIds||[];t=new Fr([],r,i,null)}else{if(!("filter"in e))return T();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new $v(i),o=s.targetId;t=new Kg(o,r)}}return t}function Ai(n,e){let t;if(e instanceof Rs)t={update:bh(n,e.key,e.value)};else if(e instanceof Ps)t={delete:xi(n,e.key)};else if(e instanceof kt)t={update:bh(n,e.key,e.data),updateMask:ow(e.fieldMask)};else{if(!(e instanceof vl))return T();t={verify:xi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof fs)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Pn)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof On)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof gs)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw T()}(0,s))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Jv(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:T()}(n,e.precondition)),t}function dc(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?ee.updateTime(he(i.updateTime)):i.exists!==void 0?ee.exists(i.exists):ee.none()}(e.currentDocument):ee.none(),s=e.updateTransforms?e.updateTransforms.map(i=>function(r,o){let a=null;if("setToServerValue"in o)b(o.setToServerValue==="REQUEST_TIME"),a=new fs;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new Pn(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new On(l)}else"increment"in o?a=new gs(r,o.increment):T();const c=ue.fromServerFormat(o.fieldPath);return new ir(c,a)}(n,i)):[];if(e.update){e.update.name;const i=pt(n,e.update.name),r=new ke({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Xe(c.map(l=>ue.fromServerFormat(l)))}(e.updateMask);return new kt(i,r,o,t,s)}return new Rs(i,r,t,s)}if(e.delete){const i=pt(n,e.delete);return new Ps(i,t)}if(e.verify){const i=pt(n,e.verify);return new vl(i,t)}return T()}function tw(n,e){return n&&n.length>0?(b(e!==void 0),n.map(t=>function(s,i){let r=s.updateTime?he(s.updateTime):he(i);return r.isEqual(x.min())&&(r=he(i)),new Uv(r,s.transformResults||[])}(t,e))):[]}function Xg(n,e){return{documents:[hc(n,e.path)]}}function Jg(n,e){const t={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(t.parent=hc(n,s),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=hc(n,s.popLast()),t.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return tm(K.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:es(u.field),direction:sw(u.dir)}}(l))}(e.orderBy);r&&(t.structuredQuery.orderBy=r);const o=function(c,l){return c.wt||tr(l)?l:{value:l}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Zg(n){let e=zg(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){b(s===1);const u=t.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];t.where&&(r=function(u){const h=em(u);return h instanceof K&&yg(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(u=>function(h){return new is(ts(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;t.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,tr(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new zt(d,h)}(t.startAt));let l=null;return t.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new zt(d,h)}(t.endAt)),bg(e,i,o,r,a,"F",c,l)}function nw(n,e){const t=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return T()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function em(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=ts(e.unaryFilter.field);return L.create(t,"==",{doubleValue:NaN});case"IS_NULL":const s=ts(e.unaryFilter.field);return L.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ts(e.unaryFilter.field);return L.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ts(e.unaryFilter.field);return L.create(r,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(n):n.fieldFilter!==void 0?function(e){return L.create(ts(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return K.create(e.compositeFilter.filters.map(t=>em(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return T()}}(e.compositeFilter.op))}(n):T()}function sw(n){return zv[n]}function iw(n){return Hv[n]}function rw(n){return Yv[n]}function es(n){return{fieldPath:n.canonicalString()}}function ts(n){return ue.fromServerFormat(n.fieldPath)}function tm(n){return n instanceof L?function(e){if(e.op==="=="){if(uh(e.value))return{unaryFilter:{field:es(e.field),op:"IS_NAN"}};if(lh(e.value))return{unaryFilter:{field:es(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(uh(e.value))return{unaryFilter:{field:es(e.field),op:"IS_NOT_NAN"}};if(lh(e.value))return{unaryFilter:{field:es(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:es(e.field),op:iw(e.op),value:e.value}}}(n):n instanceof K?function(e){const t=e.getFilters().map(s=>tm(s));return t.length===1?t[0]:{compositeFilter:{op:rw(e.op),filters:t}}}(n):T()}function ow(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function nm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */function qe(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=xh(e)),e=aw(n.get(t),e);return xh(e)}function aw(n,e){let t=e;const s=n.length;for(let i=0;i<s;i++){const r=n.charAt(i);switch(r){case"\0":t+="";break;case"":t+="";break;default:t+=r}}return t}function xh(n){return n+""}function mt(n){const e=n.length;if(b(e>=2),e===2)return b(n.charAt(0)===""&&n.charAt(1)===""),V.emptyPath();const t=e-2,s=[];let i="";for(let r=0;r<e;){const o=n.indexOf("",r);switch((o<0||o>t)&&T(),n.charAt(o+1)){case"":const a=n.substring(r,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),s.push(c);break;case"":i+=n.substring(r,o),i+="\0";break;case"":i+=n.substring(r,o+1);break;default:T()}r=o+2}return new V(s)}/**
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
 */const Nh=["userId","batchId"];/**
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
 */function Vr(n,e){return[n,qe(e)]}function sm(n,e,t){return[n,qe(e),t]}const cw={},lw=["prefixPath","collectionGroup","readTime","documentId"],uw=["prefixPath","collectionGroup","documentId"],hw=["collectionGroup","readTime","prefixPath","documentId"],dw=["canonicalId","targetId"],fw=["targetId","path"],gw=["path","targetId"],mw=["collectionId","parent"],pw=["indexId","uid"],yw=["uid","sequenceNumber"],_w=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],vw=["indexId","uid","orderedDocumentKey"],ww=["userId","collectionPath","documentId"],Iw=["userId","collectionPath","largestBatchId"],Ew=["userId","collectionGroup","largestBatchId"],im=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Tw=[...im,"documentOverlays"],rm=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],om=rm,Cw=[...om,"indexConfiguration","indexState","indexEntries"];/**
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
 */class fc extends hg{constructor(e,t){super(),this.se=e,this.currentSequenceNumber=t}}function be(n,e){const t=E(n);return ct.M(t.se,e)}/**
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
 */class Il{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&qv(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ai(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ai(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Gg();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=t.has(i.key)?null:a;const c=Fg(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(x.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),R())}isEqual(e){return this.batchId===e.batchId&&us(this.mutations,e.mutations,(t,s)=>wh(t,s))&&us(this.baseMutations,e.baseMutations,(t,s)=>wh(t,s))}}class El{constructor(e,t,s,i){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=i}static from(e,t,s){b(e.mutations.length===s.length);let i=Kv;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new El(e,t,s,i)}}/**
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
 */class Tl{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class qt{constructor(e,t,s,i,r=x.min(),o=x.min(),a=me.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new qt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class am{constructor(e){this.ie=e}}function Sw(n,e){let t;if(e.document)t=Yg(n.ie,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const s=I.fromSegments(e.noDocument.path),i=Ln(e.noDocument.readTime);t=X.newNoDocument(s,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return T();{const s=I.fromSegments(e.unknownDocument.path),i=Ln(e.unknownDocument.version);t=X.newUnknownDocument(s,i)}}return e.readTime&&t.setReadTime(function(s){const i=new ne(s[0],s[1]);return x.fromTimestamp(i)}(e.readTime)),t}function Ah(n,e){const t=e.key,s={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Zr(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())s.document=function(i,r){return{name:xi(i,r.key),fields:r.data.value.mapValue.fields,updateTime:ms(i,r.version.toTimestamp()),createTime:ms(i,r.createTime.toTimestamp())}}(n.ie,e);else if(e.isNoDocument())s.noDocument={path:t.path.toArray(),readTime:Mn(e.version)};else{if(!e.isUnknownDocument())return T();s.unknownDocument={path:t.path.toArray(),version:Mn(e.version)}}return s}function Zr(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Mn(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ln(n){const e=new ne(n.seconds,n.nanoseconds);return x.fromTimestamp(e)}function mn(n,e){const t=(e.baseMutations||[]).map(r=>dc(n.ie,r));for(let r=0;r<e.mutations.length-1;++r){const o=e.mutations[r];if(r+1<e.mutations.length&&e.mutations[r+1].transform!==void 0){const a=e.mutations[r+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(r+1,1),++r}}const s=e.mutations.map(r=>dc(n.ie,r)),i=ne.fromMillis(e.localWriteTimeMs);return new Il(e.batchId,i,t,s)}function si(n){const e=Ln(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Ln(n.lastLimboFreeSnapshotVersion):x.min();let s;var i;return n.query.documents!==void 0?(b((i=n.query).documents.length===1),s=Qe(Ds(zg(i.documents[0])))):s=function(r){return Qe(Zg(r))}(n.query),new qt(s,n.targetId,0,n.lastListenSequenceNumber,e,t,me.fromBase64String(n.resumeToken))}function cm(n,e){const t=Mn(e.snapshotVersion),s=Mn(e.lastLimboFreeSnapshotVersion);let i;i=Yr(e.target)?Xg(n.ie,e.target):Jg(n.ie,e.target);const r=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Rn(e.target),readTime:t,resumeToken:r,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:s,query:i}}function Cl(n){const e=Zg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Jr(e,e.limit,"L"):e}function Pa(n,e){return new Tl(e.largestBatchId,dc(n.ie,e.overlayMutation))}function kh(n,e){const t=e.path.lastSegment();return[n,qe(e.path.popLast()),t]}function Dh(n,e,t,s){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:Mn(s.readTime),documentKey:qe(s.documentKey.path),largestBatchId:s.largestBatchId}}/**
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
 */class bw{getBundleMetadata(e,t){return Rh(e).get(t).next(s=>{if(s)return{id:(i=s).bundleId,createTime:Ln(i.createTime),version:i.version};var i})}saveBundleMetadata(e,t){return Rh(e).put({bundleId:(s=t).id,createTime:Mn(he(s.createTime)),version:s.version});var s}getNamedQuery(e,t){return Ph(e).get(t).next(s=>{if(s)return{name:(i=s).name,query:Cl(i.bundledQuery),readTime:Ln(i.readTime)};var i})}saveNamedQuery(e,t){return Ph(e).put(function(s){return{name:s.name,readTime:Mn(he(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Rh(n){return be(n,"bundles")}function Ph(n){return be(n,"namedQueries")}/**
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
 */class Go{constructor(e,t){this.yt=e,this.userId=t}static re(e,t){const s=t.uid||"";return new Go(e,s)}getOverlay(e,t){return Ks(e).get(kh(this.userId,t)).next(s=>s?Pa(this.yt,s):null)}getOverlays(e,t){const s=gt();return g.forEach(t,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,t,s){const i=[];return s.forEach((r,o)=>{const a=new Tl(t,o);i.push(this.oe(e,a))}),g.waitFor(i)}removeOverlaysForBatchId(e,t,s){const i=new Set;t.forEach(o=>i.add(qe(o.getCollectionPath())));const r=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,s],[this.userId,o,s+1],!1,!0);r.push(Ks(e).Y("collectionPathOverlayIndex",a))}),g.waitFor(r)}getOverlaysForCollection(e,t,s){const i=gt(),r=qe(t),o=IDBKeyRange.bound([this.userId,r,s],[this.userId,r,Number.POSITIVE_INFINITY],!0);return Ks(e).W("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const l=Pa(this.yt,c);i.set(l.getKey(),l)}return i})}getOverlaysForCollectionGroup(e,t,s,i){const r=gt();let o;const a=IDBKeyRange.bound([this.userId,t,s],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Ks(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,l,u)=>{const h=Pa(this.yt,l);r.size()<i||h.largestBatchId===o?(r.set(h.getKey(),h),o=h.largestBatchId):u.done()}).next(()=>r)}oe(e,t){return Ks(e).put(function(s,i,r){const[o,a,c]=kh(i,r.mutation.key);return{userId:i,collectionPath:a,documentId:c,collectionGroup:r.mutation.key.getCollectionGroup(),largestBatchId:r.largestBatchId,overlayMutation:Ai(s.ie,r.mutation)}}(this.yt,this.userId,t))}}function Ks(n){return be(n,"documentOverlays")}/**
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
 */class pn{constructor(){}ue(e,t){this.ce(e,t),t.ae()}ce(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(ie(e.integerValue));else if("doubleValue"in e){const s=ie(e.doubleValue);isNaN(s)?this.he(t,13):(this.he(t,15),Ti(s)?t.le(0):t.le(s))}else if("timestampValue"in e){const s=e.timestampValue;this.he(t,20),typeof s=="string"?t.fe(s):(t.fe(`${s.seconds||""}`),t.le(s.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(An(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){const s=e.geoPointValue;this.he(t,45),t.le(s.latitude||0),t.le(s.longitude||0)}else"mapValue"in e?mg(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):T()}de(e,t){this.he(t,25),this.pe(e,t)}pe(e,t){t.fe(e)}ge(e,t){const s=e.fields||{};this.he(t,55);for(const i of Object.keys(s))this.de(i,t),this.ce(s[i],t)}ye(e,t){const s=e.values||[];this.he(t,50);for(const i of s)this.ce(i,t)}me(e,t){this.he(t,37),I.fromName(e).path.forEach(s=>{this.he(t,60),this.pe(s,t)})}he(e,t){e.le(t)}_e(e){e.le(2)}}pn.Ie=new pn;function xw(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Oh(n){const e=64-function(t){let s=0;for(let i=0;i<8;++i){const r=xw(255&t[i]);if(s+=r,r!==8)break}return s}(n);return Math.ceil(e/8)}class Nw{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Te(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.Ee(s.value),s=t.next();this.Ae()}Re(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.be(s.value),s=t.next();this.Pe()}ve(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.Ee(s);else if(s<2048)this.Ee(960|s>>>6),this.Ee(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.Ee(480|s>>>12),this.Ee(128|63&s>>>6),this.Ee(128|63&s);else{const i=t.codePointAt(0);this.Ee(240|i>>>18),this.Ee(128|63&i>>>12),this.Ee(128|63&i>>>6),this.Ee(128|63&i)}}this.Ae()}Ve(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.be(s);else if(s<2048)this.be(960|s>>>6),this.be(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.be(480|s>>>12),this.be(128|63&s>>>6),this.be(128|63&s);else{const i=t.codePointAt(0);this.be(240|i>>>18),this.be(128|63&i>>>12),this.be(128|63&i>>>6),this.be(128|63&i)}}this.Pe()}Se(e){const t=this.De(e),s=Oh(t);this.Ce(1+s),this.buffer[this.position++]=255&s;for(let i=t.length-s;i<t.length;++i)this.buffer[this.position++]=255&t[i]}xe(e){const t=this.De(e),s=Oh(t);this.Ce(1+s),this.buffer[this.position++]=~(255&s);for(let i=t.length-s;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}Ne(){this.ke(255),this.ke(255)}Oe(){this.Me(255),this.Me(255)}reset(){this.position=0}seed(e){this.Ce(e.length),this.buffer.set(e,this.position),this.position+=e.length}Fe(){return this.buffer.slice(0,this.position)}De(e){const t=function(i){const r=new DataView(new ArrayBuffer(8));return r.setFloat64(0,i,!1),new Uint8Array(r.buffer)}(e),s=(128&t[0])!=0;t[0]^=s?255:128;for(let i=1;i<t.length;++i)t[i]^=s?255:0;return t}Ee(e){const t=255&e;t===0?(this.ke(0),this.ke(255)):t===255?(this.ke(255),this.ke(0)):this.ke(t)}be(e){const t=255&e;t===0?(this.Me(0),this.Me(255)):t===255?(this.Me(255),this.Me(0)):this.Me(e)}Ae(){this.ke(0),this.ke(1)}Pe(){this.Me(0),this.Me(1)}ke(e){this.Ce(1),this.buffer[this.position++]=e}Me(e){this.Ce(1),this.buffer[this.position++]=~e}Ce(e){const t=e+this.position;if(t<=this.buffer.length)return;let s=2*this.buffer.length;s<t&&(s=t);const i=new Uint8Array(s);i.set(this.buffer),this.buffer=i}}class Aw{constructor(e){this.$e=e}we(e){this.$e.Te(e)}fe(e){this.$e.ve(e)}le(e){this.$e.Se(e)}ae(){this.$e.Ne()}}class kw{constructor(e){this.$e=e}we(e){this.$e.Re(e)}fe(e){this.$e.Ve(e)}le(e){this.$e.xe(e)}ae(){this.$e.Oe()}}class Ws{constructor(){this.$e=new Nw,this.Be=new Aw(this.$e),this.Le=new kw(this.$e)}seed(e){this.$e.seed(e)}qe(e){return e===0?this.Be:this.Le}Fe(){return this.$e.Fe()}reset(){this.$e.reset()}}/**
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
 */class yn{constructor(e,t,s,i){this.indexId=e,this.documentKey=t,this.arrayValue=s,this.directionalValue=i}Ue(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,s=new Uint8Array(t);return s.set(this.directionalValue,0),t!==e?s.set([0],this.directionalValue.length):++s[s.length-1],new yn(this.indexId,this.documentKey,this.arrayValue,s)}}function Rt(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Mh(n.arrayValue,e.arrayValue),t!==0?t:(t=Mh(n.directionalValue,e.directionalValue),t!==0?t:I.comparator(n.documentKey,e.documentKey)))}function Mh(n,e){for(let t=0;t<n.length&&t<e.length;++t){const s=n[t]-e[t];if(s!==0)return s}return n.length-e.length}/**
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
 */class Dw{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ke=e.orderBy,this.Ge=[];for(const t of e.filters){const s=t;s.isInequality()?this.Qe=s:this.Ge.push(s)}}je(e){b(e.collectionGroup===this.collectionId);const t=ic(e);if(t!==void 0&&!this.We(t))return!1;const s=dn(e);let i=0,r=0;for(;i<s.length&&this.We(s[i]);++i);if(i===s.length)return!0;if(this.Qe!==void 0){const o=s[i];if(!this.ze(this.Qe,o)||!this.He(this.Ke[r++],o))return!1;++i}for(;i<s.length;++i){const o=s[i];if(r>=this.Ke.length||!this.He(this.Ke[r++],o))return!1}return!0}We(e){for(const t of this.Ge)if(this.ze(t,e))return!0;return!1}ze(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const s=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===s}He(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function lm(n){var e,t;if(b(n instanceof L||n instanceof K),n instanceof L){if(n instanceof Cg){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(r=>L.create(n.field,"==",r)))||[];return K.create(i,"or")}return n}const s=n.filters.map(i=>lm(i));return K.create(s,n.op)}function Rw(n){if(n.getFilters().length===0)return[];const e=pc(lm(n));return b(um(e)),gc(e)||mc(e)?[e]:e.getFilters()}function gc(n){return n instanceof L}function mc(n){return n instanceof K&&yg(n)}function um(n){return gc(n)||mc(n)||function(e){if(e instanceof K&&ac(e)){for(const t of e.getFilters())if(!gc(t)&&!mc(t))return!1;return!0}return!1}(n)}function pc(n){if(b(n instanceof L||n instanceof K),n instanceof L)return n;if(n.filters.length===1)return pc(n.filters[0]);const e=n.filters.map(s=>pc(s));let t=K.create(e,n.op);return t=eo(t),um(t)?t:(b(t instanceof K),b(ds(t)),b(t.filters.length>1),t.filters.reduce((s,i)=>Sl(s,i)))}function Sl(n,e){let t;return b(n instanceof L||n instanceof K),b(e instanceof L||e instanceof K),t=n instanceof L?e instanceof L?function(s,i){return K.create([s,i],"and")}(n,e):Lh(n,e):e instanceof L?Lh(e,n):function(s,i){if(b(s.filters.length>0&&i.filters.length>0),ds(s)&&ds(i))return Ig(s,i.getFilters());const r=ac(s)?s:i,o=ac(s)?i:s,a=r.filters.map(c=>Sl(c,o));return K.create(a,"or")}(n,e),eo(t)}function Lh(n,e){if(ds(e))return Ig(e,n.getFilters());{const t=e.filters.map(s=>Sl(n,s));return K.create(t,"or")}}function eo(n){if(b(n instanceof L||n instanceof K),n instanceof L)return n;const e=n.getFilters();if(e.length===1)return eo(e[0]);if(_g(n))return n;const t=e.map(i=>eo(i)),s=[];return t.forEach(i=>{i instanceof L?s.push(i):i instanceof K&&(i.op===n.op?s.push(...i.filters):s.push(i))}),s.length===1?s[0]:K.create(s,n.op)}/**
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
 */class Pw{constructor(){this.Je=new bl}addToCollectionParentIndex(e,t){return this.Je.add(t),g.resolve()}getCollectionParents(e,t){return g.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return g.resolve()}deleteFieldIndex(e,t){return g.resolve()}getDocumentsMatchingTarget(e,t){return g.resolve(null)}getIndexType(e,t){return g.resolve(0)}getFieldIndexes(e,t){return g.resolve([])}getNextCollectionGroupToUpdate(e){return g.resolve(null)}getMinOffset(e,t){return g.resolve(Ze.min())}getMinOffsetFromCollectionGroup(e,t){return g.resolve(Ze.min())}updateCollectionGroup(e,t,s){return g.resolve()}updateIndexEntries(e,t){return g.resolve()}}class bl{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new W(V.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new W(V.comparator)).toArray()}}/**
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
 */const Nr=new Uint8Array(0);class Ow{constructor(e,t){this.user=e,this.databaseId=t,this.Ye=new bl,this.Xe=new cn(s=>Rn(s),(s,i)=>nr(s,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Ye.has(t)){const s=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.Ye.add(t)});const r={collectionId:s,parent:qe(i)};return Fh(e).put(r)}return g.resolve()}getCollectionParents(e,t){const s=[],i=IDBKeyRange.bound([t,""],[og(t),""],!1,!0);return Fh(e).W(i).next(r=>{for(const o of r){if(o.collectionId!==t)break;s.push(mt(o.parent))}return s})}addFieldIndex(e,t){const s=Ar(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete i.indexId;const r=s.add(i);if(t.indexState){const o=Qs(e);return r.next(a=>{o.put(Dh(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return r.next()}deleteFieldIndex(e,t){const s=Ar(e),i=Qs(e),r=js(e);return s.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const s=js(e);let i=!0;const r=new Map;return g.forEach(this.Ze(t),o=>this.tn(e,o).next(a=>{i&&(i=!!a),r.set(o,a)})).next(()=>{if(i){let o=R();const a=[];return g.forEach(r,(c,l)=>{var u;_("IndexedDbIndexManager",`Using index ${u=c,`id=${u.indexId}|cg=${u.collectionGroup}|f=${u.fields.map(j=>`${j.fieldPath}:${j.kind}`).join(",")}`} to execute ${Rn(t)}`);const h=function(j,pe){const fe=ic(pe);if(fe===void 0)return null;for(const ce of Xr(j,fe.fieldPath))switch(ce.op){case"array-contains-any":return ce.value.arrayValue.values||[];case"array-contains":return[ce.value]}return null}(l,c),d=function(j,pe){const fe=new Map;for(const ce of dn(pe))for(const Be of Xr(j,ce.fieldPath))switch(Be.op){case"==":case"in":fe.set(ce.fieldPath.canonicalString(),Be.value);break;case"not-in":case"!=":return fe.set(ce.fieldPath.canonicalString(),Be.value),Array.from(fe.values())}return null}(l,c),f=function(j,pe){const fe=[];let ce=!0;for(const Be of dn(pe)){const $s=Be.kind===0?ph(j,Be.fieldPath,j.startAt):yh(j,Be.fieldPath,j.startAt);fe.push($s.value),ce&&(ce=$s.inclusive)}return new zt(fe,ce)}(l,c),m=function(j,pe){const fe=[];let ce=!0;for(const Be of dn(pe)){const $s=Be.kind===0?yh(j,Be.fieldPath,j.endAt):ph(j,Be.fieldPath,j.endAt);fe.push($s.value),ce&&(ce=$s.inclusive)}return new zt(fe,ce)}(l,c),v=this.en(c,l,f),C=this.en(c,l,m),$=this.nn(c,l,d),z=this.sn(c.indexId,h,v,f.inclusive,C,m.inclusive,$);return g.forEach(z,j=>s.J(j,t.limit).next(pe=>{pe.forEach(fe=>{const ce=I.fromSegments(fe.documentKey);o.has(ce)||(o=o.add(ce),a.push(ce))})}))}).next(()=>a)}return g.resolve(null)})}Ze(e){let t=this.Xe.get(e);return t||(e.filters.length===0?t=[e]:t=Rw(K.create(e.filters,"and")).map(s=>cc(e.path,e.collectionGroup,e.orderBy,s.getFilters(),e.limit,e.startAt,e.endAt)),this.Xe.set(e,t),t)}sn(e,t,s,i,r,o,a){const c=(t!=null?t.length:1)*Math.max(s.length,r.length),l=c/(t!=null?t.length:1),u=[];for(let h=0;h<c;++h){const d=t?this.rn(t[h/l]):Nr,f=this.on(e,d,s[h%l],i),m=this.un(e,d,r[h%l],o),v=a.map(C=>this.on(e,d,C,!0));u.push(...this.createRange(f,m,v))}return u}on(e,t,s,i){const r=new yn(e,I.empty(),t,s);return i?r:r.Ue()}un(e,t,s,i){const r=new yn(e,I.empty(),t,s);return i?r.Ue():r}tn(e,t){const s=new Dw(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(r=>{let o=null;for(const a of r)s.je(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let s=2;const i=this.Ze(t);return g.forEach(i,r=>this.tn(e,r).next(o=>{o?s!==0&&o.fields.length<function(a){let c=new W(ue.comparator),l=!1;for(const u of a.filters)for(const h of u.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?l=!0:c=c.add(h.field));for(const u of a.orderBy)u.field.isKeyField()||(c=c.add(u.field));return c.size+(l?1:0)}(r)&&(s=1):s=0})).next(()=>function(r){return r.limit!==null}(t)&&i.length>1&&s===2?1:s)}cn(e,t){const s=new Ws;for(const i of dn(e)){const r=t.data.field(i.fieldPath);if(r==null)return null;const o=s.qe(i.kind);pn.Ie.ue(r,o)}return s.Fe()}rn(e){const t=new Ws;return pn.Ie.ue(e,t.qe(0)),t.Fe()}an(e,t){const s=new Ws;return pn.Ie.ue(Dn(this.databaseId,t),s.qe(function(i){const r=dn(i);return r.length===0?0:r[r.length-1].kind}(e))),s.Fe()}nn(e,t,s){if(s===null)return[];let i=[];i.push(new Ws);let r=0;for(const o of dn(e)){const a=s[r++];for(const c of i)if(this.hn(t,o.fieldPath)&&bi(a))i=this.ln(i,o,a);else{const l=c.qe(o.kind);pn.Ie.ue(a,l)}}return this.fn(i)}en(e,t,s){return this.nn(e,t,s.position)}fn(e){const t=[];for(let s=0;s<e.length;++s)t[s]=e[s].Fe();return t}ln(e,t,s){const i=[...e],r=[];for(const o of s.arrayValue.values||[])for(const a of i){const c=new Ws;c.seed(a.Fe()),pn.Ie.ue(o,c.qe(t.kind)),r.push(c)}return r}hn(e,t){return!!e.filters.find(s=>s instanceof L&&s.field.isEqual(t)&&(s.op==="in"||s.op==="not-in"))}getFieldIndexes(e,t){const s=Ar(e),i=Qs(e);return(t?s.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):s.W()).next(r=>{const o=[];return g.forEach(r,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(l,u){const h=u?new Hr(u.sequenceNumber,new Ze(Ln(u.readTime),new I(mt(u.documentKey)),u.largestBatchId)):Hr.empty(),d=l.fields.map(([f,m])=>new yv(ue.fromServerFormat(f),m));return new ag(l.indexId,l.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((s,i)=>{const r=s.indexState.sequenceNumber-i.indexState.sequenceNumber;return r!==0?r:D(s.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,s){const i=Ar(e),r=Qs(e);return this.dn(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>g.forEach(a,c=>r.put(Dh(c.indexId,this.user,o,s)))))}updateIndexEntries(e,t){const s=new Map;return g.forEach(t,(i,r)=>{const o=s.get(i.collectionGroup);return(o?g.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(s.set(i.collectionGroup,a),g.forEach(a,c=>this._n(e,i,c).next(l=>{const u=this.wn(r,c);return l.isEqual(u)?g.resolve():this.mn(e,r,c,l,u)}))))})}gn(e,t,s,i){return js(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.an(s,t.key),documentKey:t.key.path.toArray()})}yn(e,t,s,i){return js(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.an(s,t.key),t.key.path.toArray()])}_n(e,t,s){const i=js(e);let r=new W(Rt);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([s.indexId,this.uid,this.an(s,t)])},(o,a)=>{r=r.add(new yn(s.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>r)}wn(e,t){let s=new W(Rt);const i=this.cn(t,e);if(i==null)return s;const r=ic(t);if(r!=null){const o=e.data.field(r.fieldPath);if(bi(o))for(const a of o.arrayValue.values||[])s=s.add(new yn(t.indexId,e.key,this.rn(a),i))}else s=s.add(new yn(t.indexId,e.key,Nr,i));return s}mn(e,t,s,i,r){_("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,l,u,h){const d=a.getIterator(),f=c.getIterator();let m=Xn(d),v=Xn(f);for(;m||v;){let C=!1,$=!1;if(m&&v){const z=l(m,v);z<0?$=!0:z>0&&(C=!0)}else m!=null?$=!0:C=!0;C?(u(v),v=Xn(f)):$?(h(m),m=Xn(d)):(m=Xn(d),v=Xn(f))}}(i,r,Rt,a=>{o.push(this.gn(e,t,s,a))},a=>{o.push(this.yn(e,t,s,a))}),g.waitFor(o)}dn(e){let t=1;return Qs(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(s,i,r)=>{r.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,s){s=s.sort((o,a)=>Rt(o,a)).filter((o,a,c)=>!a||Rt(o,c[a-1])!==0);const i=[];i.push(e);for(const o of s){const a=Rt(o,e),c=Rt(o,t);if(a===0)i[0]=e.Ue();else if(a>0&&c<0)i.push(o),i.push(o.Ue());else if(c>0)break}i.push(t);const r=[];for(let o=0;o<i.length;o+=2){if(this.pn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Nr,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Nr,[]];r.push(IDBKeyRange.bound(a,c))}return r}pn(e,t){return Rt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Vh)}getMinOffset(e,t){return g.mapArray(this.Ze(t),s=>this.tn(e,s).next(i=>i||T())).next(Vh)}}function Fh(n){return be(n,"collectionParents")}function js(n){return be(n,"indexEntries")}function Ar(n){return be(n,"indexConfiguration")}function Qs(n){return be(n,"indexState")}function Vh(n){b(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let s=1;s<n.length;s++){const i=n[s].indexState.offset;fl(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Ze(e.readTime,e.documentKey,t)}/**
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
 */const Uh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ge{constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}static withCacheSize(e){return new Ge(e,Ge.DEFAULT_COLLECTION_PERCENTILE,Ge.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function hm(n,e,t){const s=n.store("mutations"),i=n.store("documentMutations"),r=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=s.Z({range:o},(u,h,d)=>(a++,d.delete()));r.push(c.next(()=>{b(a===1)}));const l=[];for(const u of t.mutations){const h=sm(e,u.key.path,t.batchId);r.push(i.delete(h)),l.push(u.key)}return g.waitFor(r).next(()=>l)}function to(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw T();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Ge.DEFAULT_COLLECTION_PERCENTILE=10,Ge.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ge.DEFAULT=new Ge(41943040,Ge.DEFAULT_COLLECTION_PERCENTILE,Ge.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ge.DISABLED=new Ge(-1,0,0);class Ko{constructor(e,t,s,i){this.userId=e,this.yt=t,this.indexManager=s,this.referenceDelegate=i,this.In={}}static re(e,t,s,i){b(e.uid!=="");const r=e.isAuthenticated()?e.uid:"";return new Ko(r,t,s,i)}checkEmpty(e){let t=!0;const s=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Pt(e).Z({index:"userMutationsIndex",range:s},(i,r,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,s,i){const r=ns(e),o=Pt(e);return o.add({}).next(a=>{b(typeof a=="number");const c=new Il(a,t,s,i),l=function(d,f,m){const v=m.baseMutations.map($=>Ai(d.ie,$)),C=m.mutations.map($=>Ai(d.ie,$));return{userId:f,batchId:m.batchId,localWriteTimeMs:m.localWriteTime.toMillis(),baseMutations:v,mutations:C}}(this.yt,this.userId,c),u=[];let h=new W((d,f)=>D(d.canonicalString(),f.canonicalString()));for(const d of i){const f=sm(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),u.push(o.put(l)),u.push(r.put(f,cw))}return h.forEach(d=>{u.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.In[a]=c.keys()}),g.waitFor(u).next(()=>c)})}lookupMutationBatch(e,t){return Pt(e).get(t).next(s=>s?(b(s.userId===this.userId),mn(this.yt,s)):null)}Tn(e,t){return this.In[t]?g.resolve(this.In[t]):this.lookupMutationBatch(e,t).next(s=>{if(s){const i=s.keys();return this.In[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=IDBKeyRange.lowerBound([this.userId,s]);let r=null;return Pt(e).Z({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(b(a.batchId>=s),r=mn(this.yt,a)),c.done()}).next(()=>r)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let s=-1;return Pt(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(i,r,o)=>{s=r.batchId,o.done()}).next(()=>s)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Pt(e).W("userMutationsIndex",t).next(s=>s.map(i=>mn(this.yt,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const s=Vr(this.userId,t.path),i=IDBKeyRange.lowerBound(s),r=[];return ns(e).Z({range:i},(o,a,c)=>{const[l,u,h]=o,d=mt(u);if(l===this.userId&&t.path.isEqual(d))return Pt(e).get(h).next(f=>{if(!f)throw T();b(f.userId===this.userId),r.push(mn(this.yt,f))});c.done()}).next(()=>r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new W(D);const i=[];return t.forEach(r=>{const o=Vr(this.userId,r.path),a=IDBKeyRange.lowerBound(o),c=ns(e).Z({range:a},(l,u,h)=>{const[d,f,m]=l,v=mt(f);d===this.userId&&r.path.isEqual(v)?s=s.add(m):h.done()});i.push(c)}),g.waitFor(i).next(()=>this.En(e,s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1,r=Vr(this.userId,s),o=IDBKeyRange.lowerBound(r);let a=new W(D);return ns(e).Z({range:o},(c,l,u)=>{const[h,d,f]=c,m=mt(d);h===this.userId&&s.isPrefixOf(m)?m.length===i&&(a=a.add(f)):u.done()}).next(()=>this.En(e,a))}En(e,t){const s=[],i=[];return t.forEach(r=>{i.push(Pt(e).get(r).next(o=>{if(o===null)throw T();b(o.userId===this.userId),s.push(mn(this.yt,o))}))}),g.waitFor(i).next(()=>s)}removeMutationBatch(e,t){return hm(e.se,this.userId,t).next(s=>(e.addOnCommittedListener(()=>{this.An(t.batchId)}),g.forEach(s,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return g.resolve();const s=IDBKeyRange.lowerBound([this.userId]),i=[];return ns(e).Z({range:s},(r,o,a)=>{if(r[0]===this.userId){const c=mt(r[1]);i.push(c)}else a.done()}).next(()=>{b(i.length===0)})})}containsKey(e,t){return dm(e,this.userId,t)}Rn(e){return fm(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function dm(n,e,t){const s=Vr(e,t.path),i=s[1],r=IDBKeyRange.lowerBound(s);let o=!1;return ns(n).Z({range:r,X:!0},(a,c,l)=>{const[u,h,d]=a;u===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function Pt(n){return be(n,"mutations")}function ns(n){return be(n,"documentMutations")}function fm(n){return be(n,"mutationQueues")}/**
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
 */class Fn{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Fn(0)}static vn(){return new Fn(-1)}}/**
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
 */class Mw{constructor(e,t){this.referenceDelegate=e,this.yt=t}allocateTargetId(e){return this.Vn(e).next(t=>{const s=new Fn(t.highestTargetId);return t.highestTargetId=s.next(),this.Sn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(t=>x.fromTimestamp(new ne(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,s){return this.Vn(e).next(i=>(i.highestListenSequenceNumber=t,s&&(i.lastRemoteSnapshotVersion=s.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Sn(e,i)))}addTargetData(e,t){return this.Dn(e,t).next(()=>this.Vn(e).next(s=>(s.targetCount+=1,this.Cn(t,s),this.Sn(e,s))))}updateTargetData(e,t){return this.Dn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Jn(e).delete(t.targetId)).next(()=>this.Vn(e)).next(s=>(b(s.targetCount>0),s.targetCount-=1,this.Sn(e,s)))}removeTargets(e,t,s){let i=0;const r=[];return Jn(e).Z((o,a)=>{const c=si(a);c.sequenceNumber<=t&&s.get(c.targetId)===null&&(i++,r.push(this.removeTargetData(e,c)))}).next(()=>g.waitFor(r)).next(()=>i)}forEachTarget(e,t){return Jn(e).Z((s,i)=>{const r=si(i);t(r)})}Vn(e){return qh(e).get("targetGlobalKey").next(t=>(b(t!==null),t))}Sn(e,t){return qh(e).put("targetGlobalKey",t)}Dn(e,t){return Jn(e).put(cm(this.yt,t))}Cn(e,t){let s=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,s=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,s=!0),s}getTargetCount(e){return this.Vn(e).next(t=>t.targetCount)}getTargetData(e,t){const s=Rn(t),i=IDBKeyRange.bound([s,Number.NEGATIVE_INFINITY],[s,Number.POSITIVE_INFINITY]);let r=null;return Jn(e).Z({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const l=si(a);nr(t,l.target)&&(r=l,c.done())}).next(()=>r)}addMatchingKeys(e,t,s){const i=[],r=Mt(e);return t.forEach(o=>{const a=qe(o.path);i.push(r.put({targetId:s,path:a})),i.push(this.referenceDelegate.addReference(e,s,o))}),g.waitFor(i)}removeMatchingKeys(e,t,s){const i=Mt(e);return g.forEach(t,r=>{const o=qe(r.path);return g.waitFor([i.delete([s,o]),this.referenceDelegate.removeReference(e,s,r)])})}removeMatchingKeysForTargetId(e,t){const s=Mt(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return s.delete(i)}getMatchingKeysForTargetId(e,t){const s=IDBKeyRange.bound([t],[t+1],!1,!0),i=Mt(e);let r=R();return i.Z({range:s,X:!0},(o,a,c)=>{const l=mt(o[1]),u=new I(l);r=r.add(u)}).next(()=>r)}containsKey(e,t){const s=qe(t.path),i=IDBKeyRange.bound([s],[og(s)],!1,!0);let r=0;return Mt(e).Z({index:"documentTargetsIndex",X:!0,range:i},([o,a],c,l)=>{o!==0&&(r++,l.done())}).next(()=>r>0)}ne(e,t){return Jn(e).get(t).next(s=>s?si(s):null)}}function Jn(n){return be(n,"targets")}function qh(n){return be(n,"targetGlobal")}function Mt(n){return be(n,"targetDocuments")}/**
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
 */function Bh([n,e],[t,s]){const i=D(n,t);return i===0?D(e,s):i}class Lw{constructor(e){this.xn=e,this.buffer=new W(Bh),this.Nn=0}kn(){return++this.Nn}On(e){const t=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Bh(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Fw{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Mn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return this.Mn!==null}Fn(e){_("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){an(t)?_("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await on(t)}await this.Fn(3e5)})}}class Vw{constructor(e,t){this.$n=e,this.params=t}calculateTargetCount(e,t){return this.$n.Bn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return g.resolve(Ke.at);const s=new Lw(t);return this.$n.forEachTarget(e,i=>s.On(i.sequenceNumber)).next(()=>this.$n.Ln(e,i=>s.On(i))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.$n.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.$n.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(_("LruGarbageCollector","Garbage collection skipped; disabled"),g.resolve(Uh)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(_("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Uh):this.qn(e,t))}getCacheSize(e){return this.$n.getCacheSize(e)}qn(e,t){let s,i,r,o,a,c,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(_("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(s=h,a=Date.now(),this.removeTargets(e,s,t))).next(h=>(r=h,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(h=>(l=Date.now(),sc()<=xn.DEBUG&&_("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${r} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(l-c)+`ms
Total Duration: ${l-u}ms`),g.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:h})))}}/**
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
 */class Uw{constructor(e,t){this.db=e,this.garbageCollector=function(s,i){return new Vw(s,i)}(this,t)}Bn(e){const t=this.Un(e);return this.db.getTargetCache().getTargetCount(e).next(s=>t.next(i=>s+i))}Un(e){let t=0;return this.Ln(e,s=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ln(e,t){return this.Kn(e,(s,i)=>t(i))}addReference(e,t,s){return kr(e,s)}removeReference(e,t,s){return kr(e,s)}removeTargets(e,t,s){return this.db.getTargetCache().removeTargets(e,t,s)}markPotentiallyOrphaned(e,t){return kr(e,t)}Gn(e,t){return function(s,i){let r=!1;return fm(s).tt(o=>dm(s,o,i).next(a=>(a&&(r=!0),g.resolve(!a)))).next(()=>r)}(e,t)}removeOrphanedDocuments(e,t){const s=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let r=0;return this.Kn(e,(o,a)=>{if(a<=t){const c=this.Gn(e,o).next(l=>{if(!l)return r++,s.getEntry(e,o).next(()=>(s.removeEntry(o,x.min()),Mt(e).delete([0,qe(o.path)])))});i.push(c)}}).next(()=>g.waitFor(i)).next(()=>s.apply(e)).next(()=>r)}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,s)}updateLimboDocument(e,t){return kr(e,t)}Kn(e,t){const s=Mt(e);let i,r=Ke.at;return s.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:l})=>{o===0?(r!==Ke.at&&t(new I(mt(i)),r),r=l,i=c):r=Ke.at}).next(()=>{r!==Ke.at&&t(new I(mt(i)),r)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function kr(n,e){return Mt(n).put(function(t,s){return{targetId:0,path:qe(t.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
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
 */class gm{constructor(){this.changes=new cn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,X.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?g.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class qw{constructor(e){this.yt=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,s){return hn(e).put(s)}removeEntry(e,t,s){return hn(e).delete(function(i,r){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Zr(r),o[o.length-1]]}(t,s))}updateMetadata(e,t){return this.getMetadata(e).next(s=>(s.byteSize+=t,this.Qn(e,s)))}getEntry(e,t){let s=X.newInvalidDocument(t);return hn(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(zs(t))},(i,r)=>{s=this.jn(t,r)}).next(()=>s)}Wn(e,t){let s={size:0,document:X.newInvalidDocument(t)};return hn(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(zs(t))},(i,r)=>{s={document:this.jn(t,r),size:to(r)}}).next(()=>s)}getEntries(e,t){let s=We();return this.zn(e,t,(i,r)=>{const o=this.jn(i,r);s=s.insert(i,o)}).next(()=>s)}Hn(e,t){let s=We(),i=new oe(I.comparator);return this.zn(e,t,(r,o)=>{const a=this.jn(r,o);s=s.insert(r,a),i=i.insert(r,to(o))}).next(()=>({documents:s,Jn:i}))}zn(e,t,s){if(t.isEmpty())return g.resolve();let i=new W(Kh);t.forEach(c=>i=i.add(c));const r=IDBKeyRange.bound(zs(i.first()),zs(i.last())),o=i.getIterator();let a=o.getNext();return hn(e).Z({index:"documentKeyIndex",range:r},(c,l,u)=>{const h=I.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&Kh(a,h)<0;)s(a,null),a=o.getNext();a&&a.isEqual(h)&&(s(a,l),a=o.hasNext()?o.getNext():null),a?u.j(zs(a)):u.done()}).next(()=>{for(;a;)s(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,t,s){const i=[t.popLast().toArray(),t.lastSegment(),Zr(s.readTime),s.documentKey.path.isEmpty()?"":s.documentKey.path.lastSegment()],r=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return hn(e).W(IDBKeyRange.bound(i,r,!0)).next(o=>{let a=We();for(const c of o){const l=this.jn(I.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);a=a.insert(l.key,l)}return a})}getAllFromCollectionGroup(e,t,s,i){let r=We();const o=Gh(t,s),a=Gh(t,Ze.max());return hn(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,l,u)=>{const h=this.jn(I.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);r=r.insert(h.key,h),r.size===i&&u.done()}).next(()=>r)}newChangeBuffer(e){return new Bw(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return $h(e).get("remoteDocumentGlobalKey").next(t=>(b(!!t),t))}Qn(e,t){return $h(e).put("remoteDocumentGlobalKey",t)}jn(e,t){if(t){const s=Sw(this.yt,t);if(!(s.isNoDocument()&&s.version.isEqual(x.min())))return s}return X.newInvalidDocument(e)}}function mm(n){return new qw(n)}class Bw extends gm{constructor(e,t){super(),this.Yn=e,this.trackRemovals=t,this.Xn=new cn(s=>s.toString(),(s,i)=>s.isEqual(i))}applyChanges(e){const t=[];let s=0,i=new W((r,o)=>D(r.canonicalString(),o.canonicalString()));return this.changes.forEach((r,o)=>{const a=this.Xn.get(r);if(t.push(this.Yn.removeEntry(e,r,a.readTime)),o.isValidDocument()){const c=Ah(this.Yn.yt,o);i=i.add(r.path.popLast());const l=to(c);s+=l-a.size,t.push(this.Yn.addEntry(e,r,c))}else if(s-=a.size,this.trackRemovals){const c=Ah(this.Yn.yt,o.convertToNoDocument(x.min()));t.push(this.Yn.addEntry(e,r,c))}}),i.forEach(r=>{t.push(this.Yn.indexManager.addToCollectionParentIndex(e,r))}),t.push(this.Yn.updateMetadata(e,s)),g.waitFor(t)}getFromCache(e,t){return this.Yn.Wn(e,t).next(s=>(this.Xn.set(t,{size:s.size,readTime:s.document.readTime}),s.document))}getAllFromCache(e,t){return this.Yn.Hn(e,t).next(({documents:s,Jn:i})=>(i.forEach((r,o)=>{this.Xn.set(r,{size:o,readTime:s.get(r).readTime})}),s))}}function $h(n){return be(n,"remoteDocumentGlobal")}function hn(n){return be(n,"remoteDocumentsV14")}function zs(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Gh(n,e){const t=e.documentKey.path.toArray();return[n,Zr(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Kh(n,e){const t=n.path.toArray(),s=e.path.toArray();let i=0;for(let r=0;r<t.length-2&&r<s.length-2;++r)if(i=D(t[r],s[r]),i)return i;return i=D(t.length,s.length),i||(i=D(t[t.length-2],s[s.length-2]),i||D(t[t.length-1],s[s.length-1]))}/**
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
 *//**
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
 */class $w{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class pm{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(s!==null&&ai(s.mutation,i,Xe.empty(),ne.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,R()).next(()=>s))}getLocalViewOfDocuments(e,t,s=R()){const i=gt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,s).next(r=>{let o=ni();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=gt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,R()))}populateOverlays(e,t,s){const i=[];return s.forEach(r=>{t.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,i){let r=We();const o=ci(),a=ci();return t.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof kt)?r=r.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),ai(u.mutation,l,u.mutation.getFieldMask(),ne.now()))}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),t.forEach((l,u)=>{var h;return a.set(l,new $w(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const s=ci();let i=new oe((o,a)=>o-a),r=R();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=t.get(c);if(l===null)return;let u=s.get(c)||Xe.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(i.get(a.batchId)||R()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Gg();u.forEach(d=>{if(!r.has(d)){const f=Fg(t.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return g.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s){return function(i){return I.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):yl(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s):this.getDocumentsMatchingCollectionQuery(e,t,s)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):g.resolve(gt());let a=-1,c=r;return o.next(l=>g.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?g.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,R())).next(u=>({batchId:a,changes:$g(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new I(t)).next(s=>{let i=ni();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,s){const i=t.collectionGroup;let r=ni();return this.indexManager.getCollectionParents(e,i).next(o=>g.forEach(o,a=>{const c=function(l,u){return new At(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,t,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,t.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId))).next(r=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,X.newInvalidDocument(l)))});let o=ni();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&ai(l.mutation,c,Xe.empty(),ne.now()),_l(t,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class Gw{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return g.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var s;return this.Zn.set(t.id,{id:(s=t).id,version:s.version,createTime:he(s.createTime)}),g.resolve()}getNamedQuery(e,t){return g.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(s){return{name:s.name,query:Cl(s.bundledQuery),readTime:he(s.readTime)}}(t)),g.resolve()}}/**
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
 */class Kw{constructor(){this.overlays=new oe(I.comparator),this.es=new Map}getOverlay(e,t){return g.resolve(this.overlays.get(t))}getOverlays(e,t){const s=gt();return g.forEach(t,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((i,r)=>{this.oe(e,t,r)}),g.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),g.resolve()}getOverlaysForCollection(e,t,s){const i=gt(),r=t.length+1,o=new I(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return g.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new oe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=gt(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=gt(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return g.resolve(a)}oe(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Tl(t,s));let r=this.es.get(t);r===void 0&&(r=R(),this.es.set(t,r)),this.es.set(t,r.add(s.key))}}/**
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
 */class xl{constructor(){this.ns=new W(_e.ss),this.rs=new W(_e.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const s=new _e(e,t);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.cs(new _e(e,t))}hs(e,t){e.forEach(s=>this.removeReference(s,t))}ls(e){const t=new I(new V([])),s=new _e(t,e),i=new _e(t,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new I(new V([])),s=new _e(t,e),i=new _e(t,e+1);let r=R();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new _e(e,0),s=this.ns.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class _e{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return I.comparator(e.key,t.key)||D(e._s,t._s)}static os(e,t){return D(e._s,t._s)||I.comparator(e.key,t.key)}}/**
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
 */class Ww{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new W(_e.ss)}checkEmpty(e){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Il(r,t,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new _e(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(e,t){return g.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.ps(s),r=i<0?0:i;return g.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new _e(t,0),i=new _e(t,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),g.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new W(D);return t.forEach(i=>{const r=new _e(i,0),o=new _e(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),g.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;I.isDocumentKey(r)||(r=r.child(""));const o=new _e(new I(r),0);let a=new W(D);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c._s)),!0)},o),g.resolve(this.Is(a))}Is(e){const t=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){b(this.Ts(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return g.forEach(t.mutations,i=>{const r=new _e(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,t){const s=new _e(t,0),i=this.gs.firstAfterOrEqual(s);return g.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,g.resolve()}Ts(e,t){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class jw{constructor(e){this.Es=e,this.docs=new oe(I.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return g.resolve(s?s.document.mutableCopy():X.newInvalidDocument(t))}getEntries(e,t){let s=We();return t.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():X.newInvalidDocument(i))}),g.resolve(s)}getAllFromCollection(e,t,s){let i=We();const r=new I(t.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||fl(lg(c),s)<=0||(i=i.insert(c.key,c.mutableCopy()))}return g.resolve(i)}getAllFromCollectionGroup(e,t,s,i){T()}As(e,t){return g.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new Qw(this)}getSize(e){return g.resolve(this.size)}}class Qw extends gm{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?t.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),g.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
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
 */class zw{constructor(e){this.persistence=e,this.Rs=new cn(t=>Rn(t),nr),this.lastRemoteSnapshotVersion=x.min(),this.highestTargetId=0,this.bs=0,this.Ps=new xl,this.targetCount=0,this.vs=Fn.Pn()}forEachTarget(e,t){return this.Rs.forEach((s,i)=>t(i)),g.resolve()}getLastRemoteSnapshotVersion(e){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return g.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.bs&&(this.bs=t),g.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new Fn(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,g.resolve()}updateTargetData(e,t){return this.Dn(t),g.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,g.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),g.waitFor(r).next(()=>i)}getTargetCount(e){return g.resolve(this.targetCount)}getTargetData(e,t){const s=this.Rs.get(t)||null;return g.resolve(s)}addMatchingKeys(e,t,s){return this.Ps.us(t,s),g.resolve()}removeMatchingKeys(e,t,s){this.Ps.hs(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),g.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),g.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Ps.ds(t);return g.resolve(s)}containsKey(e,t){return g.resolve(this.Ps.containsKey(t))}}/**
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
 */class ym{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new Ke(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new zw(this),this.indexManager=new Pw,this.remoteDocumentCache=function(s){return new jw(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new am(t),this.Ns=new Gw(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Kw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Vs[e.toKey()];return s||(s=new Ww(t,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,s){_("MemoryPersistence","Starting transaction:",e);const i=new Hw(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,t){return g.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,t)))}}class Hw extends hg{constructor(e){super(),this.currentSequenceNumber=e}}class Wo{constructor(e){this.persistence=e,this.Fs=new xl,this.$s=null}static Bs(e){return new Wo(e)}get Ls(){if(this.$s)return this.$s;throw T()}addReference(e,t,s){return this.Fs.addReference(s,t),this.Ls.delete(s.toString()),g.resolve()}removeReference(e,t,s){return this.Fs.removeReference(s,t),this.Ls.add(s.toString()),g.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),g.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Ls,s=>{const i=I.fromPath(s);return this.qs(e,i).next(r=>{r||t.removeEntry(i,x.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.qs(e,t).next(s=>{s?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}qs(e,t){return g.or([()=>g.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}/**
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
 */class Yw{constructor(e){this.yt=e}$(e,t,s,i){const r=new Vo("createOrUpgrade",t);s<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Nh,{unique:!0}),a.createObjectStore("documentMutations")}(e),Wh(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=g.resolve();return s<3&&i>=3&&(s!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),Wh(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:x.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",l)}(r))),s<4&&i>=4&&(s!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").W().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Nh,{unique:!0});const u=c.store("mutations"),h=l.map(d=>u.put(d));return g.waitFor(h)})}(e,r))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),s<5&&i>=5&&(o=o.next(()=>this.Us(r))),s<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(r)))),s<7&&i>=7&&(o=o.next(()=>this.Gs(r))),s<8&&i>=8&&(o=o.next(()=>this.Qs(e,r))),s<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),s<10&&i>=10&&(o=o.next(()=>this.js(r))),s<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),s<12&&i>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:ww});c.createIndex("collectionPathOverlayIndex",Iw,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",Ew,{unique:!1})})(e)})),s<13&&i>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:lw});c.createIndex("documentKeyIndex",uw),c.createIndex("collectionGroupIndex",hw)}(e)).next(()=>this.Ws(e,r)).next(()=>e.deleteObjectStore("remoteDocuments"))),s<14&&i>=14&&(o=o.next(()=>this.zs(e,r))),s<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:pw}).createIndex("sequenceNumberIndex",yw,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:_w}).createIndex("documentKeyIndex",vw,{unique:!1})}(e))),o}Ks(e){let t=0;return e.store("remoteDocuments").Z((s,i)=>{t+=to(i)}).next(()=>{const s={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",s)})}Us(e){const t=e.store("mutationQueues"),s=e.store("mutations");return t.W().next(i=>g.forEach(i,r=>{const o=IDBKeyRange.bound([r.userId,-1],[r.userId,r.lastAcknowledgedBatchId]);return s.W("userMutationsIndex",o).next(a=>g.forEach(a,c=>{b(c.userId===r.userId);const l=mn(this.yt,c);return hm(e,r.userId,l).next(()=>{})}))}))}Gs(e){const t=e.store("targetDocuments"),s=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const r=[];return s.Z((o,a)=>{const c=new V(o),l=function(u){return[0,qe(u)]}(c);r.push(t.get(l).next(u=>u?g.resolve():(h=>t.put({targetId:0,path:qe(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>g.waitFor(r))})}Qs(e,t){e.createObjectStore("collectionParents",{keyPath:mw});const s=t.store("collectionParents"),i=new bl,r=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return s.put({collectionId:a,parent:qe(c)})}};return t.store("remoteDocuments").Z({X:!0},(o,a)=>{const c=new V(o);return r(c.popLast())}).next(()=>t.store("documentMutations").Z({X:!0},([o,a,c],l)=>{const u=mt(a);return r(u.popLast())}))}js(e){const t=e.store("targets");return t.Z((s,i)=>{const r=si(i),o=cm(this.yt,r);return t.put(o)})}Ws(e,t){const s=t.store("remoteDocuments"),i=[];return s.Z((r,o)=>{const a=t.store("remoteDocumentsV14"),c=(l=o,l.document?new I(V.fromString(l.document.name).popFirst(5)):l.noDocument?I.fromSegments(l.noDocument.path):l.unknownDocument?I.fromSegments(l.unknownDocument.path):T()).path.toArray();var l;/**
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
*/const u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>g.waitFor(i))}zs(e,t){const s=t.store("mutations"),i=mm(this.yt),r=new ym(Wo.Bs,this.yt.ie);return s.W().next(o=>{const a=new Map;return o.forEach(c=>{var l;let u=(l=a.get(c.userId))!==null&&l!==void 0?l:R();mn(this.yt,c).keys().forEach(h=>u=u.add(h)),a.set(c.userId,u)}),g.forEach(a,(c,l)=>{const u=new we(l),h=Go.re(this.yt,u),d=r.getIndexManager(u),f=Ko.re(u,this.yt,d,r.referenceDelegate);return new pm(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new fc(t,Ke.at),c).next()})})}}function Wh(n){n.createObjectStore("targetDocuments",{keyPath:fw}).createIndex("documentTargetsIndex",gw,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",dw,{unique:!0}),n.createObjectStore("targetGlobal")}const Oa="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Nl{constructor(e,t,s,i,r,o,a,c,l,u,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=s,this.Hs=r,this.window=o,this.document=a,this.Js=l,this.Ys=u,this.Xs=h,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=d=>Promise.resolve(),!Nl.C())throw new y(p.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Uw(this,i),this.ii=t+"main",this.yt=new am(c),this.ri=new ct(this.ii,this.Xs,new Yw(this.yt)),this.Cs=new Mw(this.referenceDelegate,this.yt),this.remoteDocumentCache=mm(this.yt),this.Ns=new bw,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,u===!1&&le("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new y(p.FAILED_PRECONDITION,Oa);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new Ke(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Dr(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(t=>{t||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(t=>this.isPrimary&&!t?this._i(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(an(e))return _("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return _("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return Hs(e).get("owner").next(t=>g.resolve(this.mi(t)))}gi(e){return Dr(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const s=be(t,"clientMetadata");return s.W().next(i=>{const r=this.Ii(i,18e5),o=i.filter(a=>r.indexOf(a)===-1);return g.forEach(o,a=>s.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.oi)for(const t of e)this.oi.removeItem(this.Ti(t.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?g.resolve(!0):Hs(e).get("owner").next(t=>{if(t!==null&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)){if(this.mi(t)&&this.networkEnabled)return!0;if(!this.mi(t)){if(!t.allowTabSynchronization)throw new y(p.FAILED_PRECONDITION,Oa);return!1}}return!(!this.networkEnabled||!this.inForeground)||Dr(e).W().next(s=>this.Ii(s,5e3).find(i=>{if(this.clientId!==i.clientId){const r=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(r||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&_("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new fc(e,Ke.at);return this._i(t).next(()=>this.gi(t))}),this.ri.close(),this.Pi()}Ii(e,t){return e.filter(s=>this.pi(s.updateTimeMs,t)&&!this.Ei(s.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>Dr(e).W().next(t=>this.Ii(t,18e5).map(s=>s.clientId)))}get started(){return this.Ds}getMutationQueue(e,t){return Ko.re(e,this.yt,t,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Ow(e,this.yt.ie.databaseId)}getDocumentOverlayCache(e){return Go.re(this.yt,e)}getBundleCache(){return this.Ns}runTransaction(e,t,s){_("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",r=(o=this.Xs)===15?Cw:o===14?om:o===13?rm:o===12?Tw:o===11?im:void T();var o;let a;return this.ri.runTransaction(e,i,r,c=>(a=new fc(c,this.Ss?this.Ss.next():Ke.at),t==="readwrite-primary"?this.fi(a).next(l=>!!l||this.di(a)).next(l=>{if(!l)throw le(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new y(p.FAILED_PRECONDITION,ug);return s(a)}).next(l=>this.wi(a).next(()=>l)):this.Vi(a).next(()=>s(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Vi(e){return Hs(e).get("owner").next(t=>{if(t!==null&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)&&!this.mi(t)&&!(this.Ys||this.allowTabSynchronization&&t.allowTabSynchronization))throw new y(p.FAILED_PRECONDITION,Oa)})}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Hs(e).put("owner",t)}static C(){return ct.C()}_i(e){const t=Hs(e);return t.get("owner").next(s=>this.mi(s)?(_("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):g.resolve())}pi(e,t){const s=Date.now();return!(e<s-t)&&(!(e>s)||(le(`Detected an update time that is in the future: ${e} > ${s}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),Gy()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var t;try{const s=((t=this.oi)===null||t===void 0?void 0:t.getItem(this.Ti(e)))!==null;return _("IndexedDbPersistence",`Client '${e}' ${s?"is":"is not"} zombied in LocalStorage`),s}catch(s){return le("IndexedDbPersistence","Failed to get zombied client id.",s),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){le("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Hs(n){return be(n,"owner")}function Dr(n){return be(n,"clientMetadata")}function Al(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class kl{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.Si=s,this.Di=i}static Ci(e,t){let s=R(),i=R();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new kl(e,t.fromCache,s,i)}}/**
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
 */class _m{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,s,i){return this.ki(e,t).next(r=>r||this.Oi(e,t,i,s)).next(r=>r||this.Mi(e,t))}ki(e,t){if(_h(t))return g.resolve(null);let s=Qe(t);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Jr(t,null,"F"),s=Qe(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=R(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(t,a);return this.$i(t,l,o,c.readTime)?this.ki(e,Jr(t,null,"F")):this.Bi(e,l,t,c)}))})))}Oi(e,t,s,i){return _h(t)||i.isEqual(x.min())?this.Mi(e,t):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(t,r);return this.$i(t,o,s,i)?this.Mi(e,t):(sc()<=xn.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),uc(t)),this.Bi(e,o,t,cg(i,-1)))})}Fi(e,t){let s=new W(Ag(e));return t.forEach((i,r)=>{_l(e,r)&&(s=s.add(r))}),s}$i(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,t){return sc()<=xn.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",uc(t)),this.Ni.getDocumentsMatchingQuery(e,t,Ze.min())}Bi(e,t,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class Xw{constructor(e,t,s,i){this.persistence=e,this.Li=t,this.yt=i,this.qi=new oe(D),this.Ui=new cn(r=>Rn(r),nr),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pm(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.qi))}}function vm(n,e,t,s){return new Xw(n,e,t,s)}async function wm(n,e){const t=E(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,t.Qi(e),t.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=R();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return t.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function Jw(n,e){const t=E(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=t.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=g.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(a,f)).next(m=>{const v=c.docVersions.get(f);b(v!==null),m.version.compareTo(v)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(t,s,e,r).next(()=>r.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=R();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(s,i))})}function Im(n){const e=E(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}function Zw(n,e){const t=E(n),s=e.snapshotVersion;let i=t.qi;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.Gi.newChangeBuffer({trackRemovals:!0});i=t.qi;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(t.Cs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>t.Cs.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(me.EMPTY_BYTE_STRING,x.min()).withLastLimboFreeSnapshotVersion(x.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(m,v,C){return m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(d,f,u)&&a.push(t.Cs.updateTargetData(r,f))});let c=We(),l=R();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(Em(r,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(x.min())){const u=t.Cs.getLastRemoteSnapshotVersion(r).next(h=>t.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return g.waitFor(a).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(t.qi=i,r))}function Em(n,e,t){let s=R(),i=R();return t.forEach(r=>s=s.add(r)),e.getEntries(n,s).next(r=>{let o=We();return t.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(x.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:i}})}function eI(n,e){const t=E(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function ps(n,e){const t=E(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return t.Cs.getTargetData(s,e).next(r=>r?(i=r,g.resolve(i)):t.Cs.allocateTargetId(s).next(o=>(i=new qt(e,o,0,s.currentSequenceNumber),t.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=t.qi.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.qi=t.qi.insert(s.targetId,s),t.Ui.set(e,s.targetId)),s})}async function ys(n,e,t){const s=E(n),i=s.qi.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!an(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(i.target)}function no(n,e,t){const s=E(n);let i=x.min(),r=R();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=E(a),h=u.Ui.get(l);return h!==void 0?g.resolve(u.qi.get(h)):u.Cs.getTargetData(c,l)}(s,o,Qe(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,t?i:x.min(),t?r:R())).next(a=>(Sm(s,Ng(e),a),{documents:a,Hi:r})))}function Tm(n,e){const t=E(n),s=E(t.Cs),i=t.qi.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",r=>s.ne(r,e).next(o=>o?o.target:null))}function Cm(n,e){const t=E(n),s=t.Ki.get(e)||x.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Gi.getAllFromCollectionGroup(i,e,cg(s,-1),Number.MAX_SAFE_INTEGER)).then(i=>(Sm(t,e,i),i))}function Sm(n,e,t){let s=n.Ki.get(e)||x.min();t.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.Ki.set(e,s)}async function tI(n,e,t,s){const i=E(n);let r=R(),o=We();for(const l of t){const u=e.Ji(l.metadata.name);l.document&&(r=r.add(u));const h=e.Yi(l);h.setReadTime(e.Xi(l.metadata.readTime)),o=o.insert(u,h)}const a=i.Gi.newChangeBuffer({trackRemovals:!0}),c=await ps(i,function(l){return Qe(Ds(V.fromString(`__bundle__/docs/${l}`)))}(s));return i.persistence.runTransaction("Apply bundle documents","readwrite",l=>Em(l,a,o).next(u=>(a.apply(l),u)).next(u=>i.Cs.removeMatchingKeysForTargetId(l,c.targetId).next(()=>i.Cs.addMatchingKeys(l,r,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(l,u.Wi,u.zi)).next(()=>u.Wi)))}async function nI(n,e,t=R()){const s=await ps(n,Qe(Cl(e.bundledQuery))),i=E(n);return i.persistence.runTransaction("Save named query","readwrite",r=>{const o=he(e.readTime);if(s.snapshotVersion.compareTo(o)>=0)return i.Ns.saveNamedQuery(r,e);const a=s.withResumeToken(me.EMPTY_BYTE_STRING,o);return i.qi=i.qi.insert(a.targetId,a),i.Cs.updateTargetData(r,a).next(()=>i.Cs.removeMatchingKeysForTargetId(r,s.targetId)).next(()=>i.Cs.addMatchingKeys(r,t,s.targetId)).next(()=>i.Ns.saveNamedQuery(r,e))})}function jh(n,e){return`firestore_clients_${n}_${e}`}function Qh(n,e,t){let s=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(s+=`_${e.uid}`),s}function Ma(n,e){return`firestore_targets_${n}_${e}`}class so{constructor(e,t,s,i){this.user=e,this.batchId=t,this.state=s,this.error=i}static Zi(e,t,s){const i=JSON.parse(s);let r,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(r=new y(i.error.code,i.error.message))),o?new so(e,t,i.state,r):(le("SharedClientState",`Failed to parse mutation state for ID '${t}': ${s}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class li{constructor(e,t,s){this.targetId=e,this.state=t,this.error=s}static Zi(e,t){const s=JSON.parse(t);let i,r=typeof s=="object"&&["not-current","current","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return r&&s.error&&(r=typeof s.error.message=="string"&&typeof s.error.code=="string",r&&(i=new y(s.error.code,s.error.message))),r?new li(e,s.state,i):(le("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class io{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const s=JSON.parse(t);let i=typeof s=="object"&&s.activeTargetIds instanceof Array,r=$o();for(let o=0;i&&o<s.activeTargetIds.length;++o)i=fg(s.activeTargetIds[o]),r=r.add(s.activeTargetIds[o]);return i?new io(e,r):(le("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Dl{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Dl(t.clientId,t.onlineState):(le("SharedClientState",`Failed to parse online state: ${e}`),null)}}class yc{constructor(){this.activeTargetIds=$o()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class La{constructor(e,t,s,i,r){this.window=e,this.Hs=t,this.persistenceKey=s,this.sr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new oe(D),this.started=!1,this.cr=[];const o=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=r,this.ar=jh(this.persistenceKey,this.sr),this.hr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ur=this.ur.insert(this.sr,new yc),this.lr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.mr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const s of e){if(s===this.sr)continue;const i=this.getItem(jh(this.persistenceKey,s));if(i){const r=io.Zi(s,i);r&&(this.ur=this.ur.insert(r.clientId,r))}}this.gr();const t=this.storage.getItem(this.wr);if(t){const s=this.yr(t);s&&this.pr(s)}for(const s of this.cr)this.rr(s);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let t=!1;return this.ur.forEach((s,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,t,s){this.Tr(e,t,s),this.Er(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Ma(this.persistenceKey,e));if(s){const i=li.Zi(e,s);i&&(t=i.state)}}return this.Ar.er(e),this.gr(),t}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ma(this.persistenceKey,e))}updateQueryState(e,t,s){this.Rr(e,t,s)}handleUserChange(e,t,s){t.forEach(i=>{this.Er(i)}),this.currentUser=e,s.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return _("SharedClientState","READ",e,t),t}setItem(e,t){_("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){_("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const t=e;if(t.storageArea===this.storage){if(_("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ar)return void le("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.lr.test(t.key)){if(t.newValue==null){const s=this.vr(t.key);return this.Vr(s,null)}{const s=this.Sr(t.key,t.newValue);if(s)return this.Vr(s.clientId,s)}}else if(this.dr.test(t.key)){if(t.newValue!==null){const s=this.Dr(t.key,t.newValue);if(s)return this.Cr(s)}}else if(this._r.test(t.key)){if(t.newValue!==null){const s=this.Nr(t.key,t.newValue);if(s)return this.kr(s)}}else if(t.key===this.wr){if(t.newValue!==null){const s=this.yr(t.newValue);if(s)return this.pr(s)}}else if(t.key===this.hr){const s=function(i){let r=Ke.at;if(i!=null)try{const o=JSON.parse(i);b(typeof o=="number"),r=o}catch(o){le("SharedClientState","Failed to read sequence number from WebStorage",o)}return r}(t.newValue);s!==Ke.at&&this.sequenceNumberHandler(s)}else if(t.key===this.mr){const s=this.Or(t.newValue);await Promise.all(s.map(i=>this.syncEngine.Mr(i)))}}}else this.cr.push(t)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,t,s){const i=new so(this.currentUser,e,t,s),r=Qh(this.persistenceKey,this.currentUser,e);this.setItem(r,i.tr())}Er(e){const t=Qh(this.persistenceKey,this.currentUser,e);this.removeItem(t)}br(e){const t={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Rr(e,t,s){const i=Ma(this.persistenceKey,e),r=new li(e,t,s);this.setItem(i,r.tr())}Pr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.mr,t)}vr(e){const t=this.lr.exec(e);return t?t[1]:null}Sr(e,t){const s=this.vr(e);return io.Zi(s,t)}Dr(e,t){const s=this.dr.exec(e),i=Number(s[1]),r=s[2]!==void 0?s[2]:null;return so.Zi(new we(r),i,t)}Nr(e,t){const s=this._r.exec(e),i=Number(s[1]);return li.Zi(i,t)}yr(e){return Dl.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);_("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,t){const s=t?this.ur.insert(e,t):this.ur.remove(e),i=this.Ir(this.ur),r=this.Ir(s),o=[],a=[];return r.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{r.has(c)||a.push(c)}),this.syncEngine.Br(o,a).then(()=>{this.ur=s})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let t=$o();return e.forEach((s,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class bm{constructor(){this.Lr=new yc,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,s){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new yc,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class sI{Ur(e){}shutdown(){}}/**
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
 */class zh{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const iI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class rI{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class oI extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,s,i,r){const o=this.ho(e,t);_("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(c=>(_("RestConnection","Received: ",c),c),c=>{throw ls("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,t,s,i,r,o){return this.ao(e,t,s,i,r)}lo(e,t,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+ks,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,t){const s=iI[e];return`${this.oo}/v1/${t}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,s,i){return new Promise((r,o)=>{const a=new rv;a.setWithCredentials(!0),a.listenOnce(nv.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ra.NO_ERROR:const l=a.getResponseJson();_("Connection","XHR received:",JSON.stringify(l)),r(l);break;case Ra.TIMEOUT:_("Connection",'RPC "'+e+'" timed out'),o(new y(p.DEADLINE_EXCEEDED,"Request time out"));break;case Ra.HTTP_ERROR:const u=a.getStatus();if(_("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const f=function(m){const v=m.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(v)>=0?v:p.UNKNOWN}(d.status);o(new y(f,d.message))}else o(new y(p.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new y(p.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{_("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(t,"POST",c,s,15)})}wo(e,t,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=ev(),o=tv(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new iv({})),this.lo(a.initMessageHeaders,t,s),a.encodeInitMessageHeaders=!0;const c=i.join("");_("Connection","Creating WebChannel: "+c,a);const l=r.createWebChannel(c,a);let u=!1,h=!1;const d=new rI({Hr:m=>{h?_("Connection","Not sending because WebChannel is closed:",m):(u||(_("Connection","Opening WebChannel transport."),l.open(),u=!0),_("Connection","WebChannel sending:",m),l.send(m))},Jr:()=>l.close()}),f=(m,v,C)=>{m.listen(v,$=>{try{C($)}catch(z){setTimeout(()=>{throw z},0)}})};return f(l,br.EventType.OPEN,()=>{h||_("Connection","WebChannel transport opened.")}),f(l,br.EventType.CLOSE,()=>{h||(h=!0,_("Connection","WebChannel transport closed"),d.io())}),f(l,br.EventType.ERROR,m=>{h||(h=!0,ls("Connection","WebChannel transport errored:",m),d.io(new y(p.UNAVAILABLE,"The operation could not be completed")))}),f(l,br.EventType.MESSAGE,m=>{var v;if(!h){const C=m.data[0];b(!!C);const $=C,z=$.error||((v=$[0])===null||v===void 0?void 0:v.error);if(z){_("Connection","WebChannel received error:",z);const j=z.status;let pe=function(ce){const Be=de[ce];if(Be!==void 0)return qg(Be)}(j),fe=z.message;pe===void 0&&(pe=p.INTERNAL,fe="Unknown error status: "+j+" with message "+z.message),h=!0,d.io(new y(pe,fe)),l.close()}else _("Connection","WebChannel received:",C),d.ro(C)}}),f(o,sv.STAT_EVENT,m=>{m.stat===ih.PROXY?_("Connection","Detected buffering proxy"):m.stat===ih.NOPROXY&&_("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}/**
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
 *//**
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
 */function xm(){return typeof window<"u"?window:null}function Ur(){return typeof document<"u"?document:null}/**
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
 */function ar(n){return new Xv(n,!0)}class Rl{constructor(e,t,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=t,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,t-s);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class Nm{constructor(e,t,s,i,r,o,a,c){this.Hs=e,this.vo=s,this.Vo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Rl(e,t)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():t&&t.code===p.RESOURCE_EXHAUSTED?(le(t.toString()),le("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===t&&this.Go(s,i)},s=>{e(()=>{const i=new y(p.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(e,t){const s=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return _("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aI extends Nm{constructor(e,t,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,o),this.yt=r}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=ew(this.yt,e),s=function(i){if(!("targetChange"in i))return x.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?x.min():r.readTime?he(r.readTime):x.min()}(e);return this.listener.Wo(t,s)}zo(e){const t={};t.database=Ni(this.yt),t.addTarget=function(i,r){let o;const a=r.target;return o=Yr(a)?{documents:Xg(i,a)}:{query:Jg(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=jg(i,r.resumeToken):r.snapshotVersion.compareTo(x.min())>0&&(o.readTime=ms(i,r.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=nw(this.yt,e);s&&(t.labels=s),this.Bo(t)}Ho(e){const t={};t.database=Ni(this.yt),t.removeTarget=e,this.Bo(t)}}class cI extends Nm{constructor(e,t,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,i,o),this.yt=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(b(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=tw(e.writeResults,e.commitTime),s=he(e.commitTime);return this.listener.Zo(s,t)}return b(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Ni(this.yt),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>Ai(this.yt,s))};this.Bo(t)}}/**
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
 */class lI extends class{}{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.yt=i,this.nu=!1}su(){if(this.nu)throw new y(p.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ao(e,t,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(p.UNKNOWN,i.toString())})}_o(e,t,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(e,t,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new y(p.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class uI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(le(t),this.ou=!1):_("OnlineStateTracker",t)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class hI{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{ln(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=E(a);c._u.add(4),await Os(c),c.gu.set("Unknown"),c._u.delete(4),await cr(c)}(this))})}),this.gu=new uI(s,i)}}async function cr(n){if(ln(n))for(const e of n.wu)await e(!0)}async function Os(n){for(const e of n.wu)await e(!1)}function jo(n,e){const t=E(n);t.du.has(e.targetId)||(t.du.set(e.targetId,e),Ml(t)?Ol(t):Ls(t).ko()&&Pl(t,e))}function ki(n,e){const t=E(n),s=Ls(t);t.du.delete(e),s.ko()&&Am(t,e),t.du.size===0&&(s.ko()?s.Fo():ln(t)&&t.gu.set("Unknown"))}function Pl(n,e){n.yu.Ot(e.targetId),Ls(n).zo(e)}function Am(n,e){n.yu.Ot(e),Ls(n).Ho(e)}function Ol(n){n.yu=new Qv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>n.du.get(e)||null}),Ls(n).start(),n.gu.uu()}function Ml(n){return ln(n)&&!Ls(n).No()&&n.du.size>0}function ln(n){return E(n)._u.size===0}function km(n){n.yu=void 0}async function dI(n){n.du.forEach((e,t)=>{Pl(n,e)})}async function fI(n,e){km(n),Ml(n)?(n.gu.hu(e),Ol(n)):n.gu.set("Unknown")}async function gI(n,e,t){if(n.gu.set("Online"),e instanceof Wg&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.du.delete(o),s.yu.removeTarget(o))}(n,e)}catch(s){_("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ro(n,s)}else if(e instanceof Fr?n.yu.Kt(e):e instanceof Kg?n.yu.Jt(e):n.yu.jt(e),!t.isEqual(x.min()))try{const s=await Im(n.localStore);t.compareTo(s)>=0&&await function(i,r){const o=i.yu.Zt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.du.get(c);l&&i.du.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.du.get(a);if(!c)return;i.du.set(a,c.withResumeToken(me.EMPTY_BYTE_STRING,c.snapshotVersion)),Am(i,a);const l=new qt(c.target,a,1,c.sequenceNumber);Pl(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(s){_("RemoteStore","Failed to raise snapshot:",s),await ro(n,s)}}async function ro(n,e,t){if(!an(e))throw e;n._u.add(1),await Os(n),n.gu.set("Offline"),t||(t=()=>Im(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await t(),n._u.delete(1),await cr(n)})}function Dm(n,e){return e().catch(t=>ro(n,t,e))}async function Ms(n){const e=E(n),t=Ht(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;mI(e);)try{const i=await eI(e.localStore,s);if(i===null){e.fu.length===0&&t.Fo();break}s=i.batchId,pI(e,i)}catch(i){await ro(e,i)}Rm(e)&&Pm(e)}function mI(n){return ln(n)&&n.fu.length<10}function pI(n,e){n.fu.push(e);const t=Ht(n);t.ko()&&t.Yo&&t.Xo(e.mutations)}function Rm(n){return ln(n)&&!Ht(n).No()&&n.fu.length>0}function Pm(n){Ht(n).start()}async function yI(n){Ht(n).eu()}async function _I(n){const e=Ht(n);for(const t of n.fu)e.Xo(t.mutations)}async function vI(n,e,t){const s=n.fu.shift(),i=El.from(s,e,t);await Dm(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ms(n)}async function wI(n,e){e&&Ht(n).Yo&&await async function(t,s){if(i=s.code,Ug(i)&&i!==p.ABORTED){const r=t.fu.shift();Ht(t).Mo(),await Dm(t,()=>t.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Ms(t)}var i}(n,e),Rm(n)&&Pm(n)}async function Hh(n,e){const t=E(n);t.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const s=ln(t);t._u.add(3),await Os(t),s&&t.gu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t._u.delete(3),await cr(t)}async function _c(n,e){const t=E(n);e?(t._u.delete(2),await cr(t)):e||(t._u.add(2),await Os(t),t.gu.set("Unknown"))}function Ls(n){return n.pu||(n.pu=function(e,t,s){const i=E(e);return i.su(),new aI(t,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(n.datastore,n.asyncQueue,{Yr:dI.bind(null,n),Zr:fI.bind(null,n),Wo:gI.bind(null,n)}),n.wu.push(async e=>{e?(n.pu.Mo(),Ml(n)?Ol(n):n.gu.set("Unknown")):(await n.pu.stop(),km(n))})),n.pu}function Ht(n){return n.Iu||(n.Iu=function(e,t,s){const i=E(e);return i.su(),new cI(t,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(n.datastore,n.asyncQueue,{Yr:yI.bind(null,n),Zr:wI.bind(null,n),tu:_I.bind(null,n),Zo:vI.bind(null,n)}),n.wu.push(async e=>{e?(n.Iu.Mo(),await Ms(n)):(await n.Iu.stop(),n.fu.length>0&&(_("RemoteStore",`Stopping write stream with ${n.fu.length} pending writes`),n.fu=[]))})),n.Iu}/**
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
 */class Ll{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Te,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,s,i,r){const o=Date.now()+s,a=new Ll(e,t,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fs(n,e){if(le("AsyncQueue",`${e}: ${n}`),an(n))return new y(p.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class rs{constructor(e){this.comparator=e?(t,s)=>e(t,s)||I.comparator(t.key,s.key):(t,s)=>I.comparator(t.key,s.key),this.keyedMap=ni(),this.sortedSet=new oe(this.comparator)}static emptySet(e){return new rs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof rs)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new rs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Yh{constructor(){this.Tu=new oe(I.comparator)}track(e){const t=e.doc.key,s=this.Tu.get(t);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(t,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(t):e.type===1&&s.type===2?this.Tu=this.Tu.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):T():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal((t,s)=>{e.push(s)}),e}}class _s{constructor(e,t,s,i,r,o,a,c,l){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,t,s,i,r){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new _s(e,t,rs.emptySet(t),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class II{constructor(){this.Au=void 0,this.listeners=[]}}class EI{constructor(){this.queries=new cn(e=>xg(e),sr),this.onlineState="Unknown",this.Ru=new Set}}async function Fl(n,e){const t=E(n),s=e.query;let i=!1,r=t.queries.get(s);if(r||(i=!0,r=new II),i)try{r.Au=await t.onListen(s)}catch(o){const a=Fs(o,`Initialization of query '${uc(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,r),r.listeners.push(e),e.bu(t.onlineState),r.Au&&e.Pu(r.Au)&&Ul(t)}async function Vl(n,e){const t=E(n),s=e.query;let i=!1;const r=t.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return t.queries.delete(s),t.onUnlisten(s)}function TI(n,e){const t=E(n);let s=!1;for(const i of e){const r=i.query,o=t.queries.get(r);if(o){for(const a of o.listeners)a.Pu(i)&&(s=!0);o.Au=i}}s&&Ul(t)}function CI(n,e,t){const s=E(n),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(t);s.queries.delete(e)}function Ul(n){n.Ru.forEach(e=>{e.next()})}class ql{constructor(e,t,s){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new _s(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const s=t!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}xu(e){e=_s.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class SI{constructor(e,t){this.ku=e,this.byteLength=t}Ou(){return"metadata"in this.ku}}/**
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
 */class Xh{constructor(e){this.yt=e}Ji(e){return pt(this.yt,e)}Yi(e){return e.metadata.exists?Yg(this.yt,e.document,!1):X.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return he(e)}}class bI{constructor(e,t,s){this.Mu=e,this.localStore=t,this.yt=s,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Om(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++t;const s=V.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(s.get(s.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}$u(e){const t=new Map,s=new Xh(this.yt);for(const i of e)if(i.metadata.queries){const r=s.Ji(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||R()).add(r);t.set(o,a)}}return t}async complete(){const e=await tI(this.localStore,new Xh(this.yt),this.documents,this.Mu.id),t=this.$u(this.documents);for(const s of this.queries)await nI(this.localStore,s,t.get(s.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function Om(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class Mm{constructor(e){this.key=e}}class Lm{constructor(e){this.key=e}}class Fm{constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=R(),this.mutatedKeys=R(),this.Gu=Ag(e),this.Qu=new rs(this.Gu)}get ju(){return this.qu}Wu(e,t){const s=t?t.zu:new Yh,i=t?t.Qu:this.Qu;let r=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=_l(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let C=!1;d&&f?d.data.isEqual(f.data)?m!==v&&(s.track({type:3,doc:f}),C=!0):this.Hu(d,f)||(s.track({type:2,doc:f}),C=!0,(c&&this.Gu(f,c)>0||l&&this.Gu(f,l)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),C=!0):d&&!f&&(s.track({type:1,doc:d}),C=!0,(c||l)&&(a=!0)),C&&(f?(o=o.add(f),r=v?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Eu();r.sort((l,u)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return f(h)-f(d)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=t?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,r.length!==0||c?{snapshot:new _s(this.query,e.Qu,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Yh,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(t=>this.qu=this.qu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.qu=this.qu.delete(t)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=R(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const t=[];return e.forEach(s=>{this.Ku.has(s)||t.push(new Lm(s))}),this.Ku.forEach(s=>{e.has(s)||t.push(new Mm(s))}),t}tc(e){this.qu=e.Hi,this.Ku=R();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return _s.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class xI{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class NI{constructor(e){this.key=e,this.nc=!1}}class AI{constructor(e,t,s,i,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new cn(a=>xg(a),sr),this.rc=new Map,this.oc=new Set,this.uc=new oe(I.comparator),this.cc=new Map,this.ac=new xl,this.hc={},this.lc=new Map,this.fc=Fn.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function kI(n,e){const t=Wl(n);let s,i;const r=t.ic.get(e);if(r)s=r.targetId,t.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await ps(t.localStore,Qe(e));t.isPrimaryClient&&jo(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Bl(t,e,s,a==="current",o.resumeToken)}return i}async function Bl(n,e,t,s,i){n._c=(h,d,f)=>async function(m,v,C,$){let z=v.view.Wu(C);z.$i&&(z=await no(m.localStore,v.query,!1).then(({documents:fe})=>v.view.Wu(fe,z)));const j=$&&$.targetChanges.get(v.targetId),pe=v.view.applyChanges(z,m.isPrimaryClient,j);return vc(m,v.targetId,pe.Xu),pe.snapshot}(n,h,d,f);const r=await no(n.localStore,e,!0),o=new Fm(e,r.Hi),a=o.Wu(r.documents),c=or.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),l=o.applyChanges(a,n.isPrimaryClient,c);vc(n,t,l.Xu);const u=new xI(e,t,o);return n.ic.set(e,u),n.rc.has(t)?n.rc.get(t).push(e):n.rc.set(t,[e]),l.snapshot}async function DI(n,e){const t=E(n),s=t.ic.get(e),i=t.rc.get(s.targetId);if(i.length>1)return t.rc.set(s.targetId,i.filter(r=>!sr(r,e))),void t.ic.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(s.targetId),t.sharedClientState.isActiveQueryTarget(s.targetId)||await ys(t.localStore,s.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(s.targetId),ki(t.remoteStore,s.targetId),vs(t,s.targetId)}).catch(on)):(vs(t,s.targetId),await ys(t.localStore,s.targetId,!0))}async function RI(n,e,t){const s=jl(n);try{const i=await function(r,o){const a=E(r),c=ne.now(),l=o.reduce((d,f)=>d.add(f.key),R());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=We(),m=R();return a.Gi.getEntries(d,l).next(v=>{f=v,f.forEach((C,$)=>{$.isValidDocument()||(m=m.add(C))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(v=>{u=v;const C=[];for(const $ of o){const z=Bv($,u.get($.key).overlayedDocument);z!=null&&C.push(new kt($.key,z,Sg(z.value.mapValue),ee.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,C,o)}).next(v=>{h=v;const C=v.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,v.batchId,C)})}).then(()=>({batchId:h.batchId,changes:$g(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.hc[r.currentUser.toKey()];c||(c=new oe(D)),c=c.insert(o,a),r.hc[r.currentUser.toKey()]=c}(s,i.batchId,t),await Dt(s,i.changes),await Ms(s.remoteStore)}catch(i){const r=Fs(i,"Failed to persist write");t.reject(r)}}async function Vm(n,e){const t=E(n);try{const s=await Zw(t.localStore,e);e.targetChanges.forEach((i,r)=>{const o=t.cc.get(r);o&&(b(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?b(o.nc):i.removedDocuments.size>0&&(b(o.nc),o.nc=!1))}),await Dt(t,s,e)}catch(s){await on(s)}}function Jh(n,e,t){const s=E(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=E(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&Ul(a)}(s.eventManager,e),i.length&&s.sc.Wo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function PI(n,e,t){const s=E(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new oe(I.comparator);o=o.insert(r,X.newNoDocument(r,x.min()));const a=R().add(r),c=new rr(x.min(),new Map,new W(D),o,a);await Vm(s,c),s.uc=s.uc.remove(r),s.cc.delete(e),Kl(s)}else await ys(s.localStore,e,!1).then(()=>vs(s,e,t)).catch(on)}async function OI(n,e){const t=E(n),s=e.batch.batchId;try{const i=await Jw(t.localStore,e);Gl(t,s,null),$l(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Dt(t,i)}catch(i){await on(i)}}async function MI(n,e,t){const s=E(n);try{const i=await function(r,o){const a=E(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(b(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Gl(s,e,t),$l(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Dt(s,i)}catch(i){await on(i)}}async function LI(n,e){const t=E(n);ln(t.remoteStore)||_("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const s=await function(r){const o=E(r);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(s===-1)return void e.resolve();const i=t.lc.get(s)||[];i.push(e),t.lc.set(s,i)}catch(s){const i=Fs(s,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function $l(n,e){(n.lc.get(e)||[]).forEach(t=>{t.resolve()}),n.lc.delete(e)}function Gl(n,e,t){const s=E(n);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(t?r.reject(t):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function vs(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.rc.get(e))n.ic.delete(s),t&&n.sc.wc(s,t);n.rc.delete(e),n.isPrimaryClient&&n.ac.ls(e).forEach(s=>{n.ac.containsKey(s)||Um(n,s)})}function Um(n,e){n.oc.delete(e.path.canonicalString());const t=n.uc.get(e);t!==null&&(ki(n.remoteStore,t),n.uc=n.uc.remove(e),n.cc.delete(t),Kl(n))}function vc(n,e,t){for(const s of t)s instanceof Mm?(n.ac.addReference(s.key,e),FI(n,s)):s instanceof Lm?(_("SyncEngine","Document no longer in limbo: "+s.key),n.ac.removeReference(s.key,e),n.ac.containsKey(s.key)||Um(n,s.key)):T()}function FI(n,e){const t=e.key,s=t.path.canonicalString();n.uc.get(t)||n.oc.has(s)||(_("SyncEngine","New document in limbo: "+t),n.oc.add(s),Kl(n))}function Kl(n){for(;n.oc.size>0&&n.uc.size<n.maxConcurrentLimboResolutions;){const e=n.oc.values().next().value;n.oc.delete(e);const t=new I(V.fromString(e)),s=n.fc.next();n.cc.set(s,new NI(t)),n.uc=n.uc.insert(t,s),jo(n.remoteStore,new qt(Qe(Ds(t.path)),s,2,Ke.at))}}async function Dt(n,e,t){const s=E(n),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,t).then(l=>{if((l||t)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=kl.Ci(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.sc.Wo(i),await async function(a,c){const l=E(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>g.forEach(c,h=>g.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>g.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!an(u))throw u;_("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.qi.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);l.qi=l.qi.insert(h,m)}}}(s.localStore,r))}async function VI(n,e){const t=E(n);if(!t.currentUser.isEqual(e)){_("SyncEngine","User change. New user:",e.toKey());const s=await wm(t.localStore,e);t.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new y(p.CANCELLED,r))})}),i.lc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Dt(t,s.ji)}}function UI(n,e){const t=E(n),s=t.cc.get(e);if(s&&s.nc)return R().add(s.key);{let i=R();const r=t.rc.get(e);if(!r)return i;for(const o of r){const a=t.ic.get(o);i=i.unionWith(a.view.ju)}return i}}async function qI(n,e){const t=E(n),s=await no(t.localStore,e.query,!0),i=e.view.tc(s);return t.isPrimaryClient&&vc(t,e.targetId,i.Xu),i}async function BI(n,e){const t=E(n);return Cm(t.localStore,e).then(s=>Dt(t,s))}async function $I(n,e,t,s){const i=E(n),r=await function(o,a){const c=E(o),l=E(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",u=>l.Tn(u,a).next(h=>h?c.localDocuments.getDocuments(u,h):g.resolve(null)))}(i.localStore,e);r!==null?(t==="pending"?await Ms(i.remoteStore):t==="acknowledged"||t==="rejected"?(Gl(i,e,s||null),$l(i,e),function(o,a){E(E(o).mutationQueue).An(a)}(i.localStore,e)):T(),await Dt(i,r)):_("SyncEngine","Cannot apply mutation batch with id: "+e)}async function GI(n,e){const t=E(n);if(Wl(t),jl(t),e===!0&&t.dc!==!0){const s=t.sharedClientState.getAllActiveQueryTargets(),i=await Zh(t,s.toArray());t.dc=!0,await _c(t.remoteStore,!0);for(const r of i)jo(t.remoteStore,r)}else if(e===!1&&t.dc!==!1){const s=[];let i=Promise.resolve();t.rc.forEach((r,o)=>{t.sharedClientState.isLocalQueryTarget(o)?s.push(o):i=i.then(()=>(vs(t,o),ys(t.localStore,o,!0))),ki(t.remoteStore,o)}),await i,await Zh(t,s),function(r){const o=E(r);o.cc.forEach((a,c)=>{ki(o.remoteStore,c)}),o.ac.fs(),o.cc=new Map,o.uc=new oe(I.comparator)}(t),t.dc=!1,await _c(t.remoteStore,!1)}}async function Zh(n,e,t){const s=E(n),i=[],r=[];for(const o of e){let a;const c=s.rc.get(o);if(c&&c.length!==0){a=await ps(s.localStore,Qe(c[0]));for(const l of c){const u=s.ic.get(l),h=await qI(s,u);h.snapshot&&r.push(h.snapshot)}}else{const l=await Tm(s.localStore,o);a=await ps(s.localStore,l),await Bl(s,qm(l),o,!1,a.resumeToken)}i.push(a)}return s.sc.Wo(r),i}function qm(n){return bg(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function KI(n){const e=E(n);return E(E(e.localStore).persistence).vi()}async function WI(n,e,t,s){const i=E(n);if(i.dc)return void _("SyncEngine","Ignoring unexpected query state notification.");const r=i.rc.get(e);if(r&&r.length>0)switch(t){case"current":case"not-current":{const o=await Cm(i.localStore,Ng(r[0])),a=rr.createSynthesizedRemoteEventForCurrentChange(e,t==="current",me.EMPTY_BYTE_STRING);await Dt(i,o,a);break}case"rejected":await ys(i.localStore,e,!0),vs(i,e,s);break;default:T()}}async function jI(n,e,t){const s=Wl(n);if(s.dc){for(const i of e){if(s.rc.has(i)){_("SyncEngine","Adding an already active target "+i);continue}const r=await Tm(s.localStore,i),o=await ps(s.localStore,r);await Bl(s,qm(r),o.targetId,!1,o.resumeToken),jo(s.remoteStore,o)}for(const i of t)s.rc.has(i)&&await ys(s.localStore,i,!1).then(()=>{ki(s.remoteStore,i),vs(s,i)}).catch(on)}}function Wl(n){const e=E(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=UI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=PI.bind(null,e),e.sc.Wo=TI.bind(null,e.eventManager),e.sc.wc=CI.bind(null,e.eventManager),e}function jl(n){const e=E(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=OI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=MI.bind(null,e),e}function QI(n,e,t){const s=E(n);(async function(i,r,o){try{const a=await r.getMetadata();if(await function(h,d){const f=E(h),m=he(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",v=>f.Ns.getBundleMetadata(v,d.id)).then(v=>!!v&&v.createTime.compareTo(m)>=0)}(i.localStore,a))return await r.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(Om(a));const c=new bI(a,i.localStore,r.yt);let l=await r.mc();for(;l;){const h=await c.Fu(l);h&&o._updateProgress(h),l=await r.mc()}const u=await c.complete();return await Dt(i,u.Lu,void 0),await function(h,d){const f=E(h);return f.persistence.runTransaction("Save bundle","readwrite",m=>f.Ns.saveBundleMetadata(m,d))}(i.localStore,a),o._completeWith(u.progress),Promise.resolve(u.Bu)}catch(a){return ls("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(s,e,t).then(i=>{s.sharedClientState.notifyBundleLoaded(i)})}class Bm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=ar(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return vm(this.persistence,new _m,e.initialUser,this.yt)}yc(e){return new ym(Wo.Bs,this.yt)}gc(e){return new bm}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class $m extends Bm{constructor(e,t,s){super(),this.Ac=e,this.cacheSizeBytes=t,this.forceOwnership=s,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await jl(this.Ac.syncEngine),await Ms(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return vm(this.persistence,new _m,e.initialUser,this.yt)}Tc(e,t){const s=this.persistence.referenceDelegate.garbageCollector;return new Fw(s,e.asyncQueue,t)}Ec(e,t){const s=new Iv(t,this.persistence);return new wv(e.asyncQueue,s)}yc(e){const t=Al(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),s=this.cacheSizeBytes!==void 0?Ge.withCacheSize(this.cacheSizeBytes):Ge.DEFAULT;return new Nl(this.synchronizeTabs,t,e.clientId,s,e.asyncQueue,xm(),Ur(),this.yt,this.sharedClientState,!!this.forceOwnership)}gc(e){return new bm}}class zI extends $m{constructor(e,t){super(e,t,!1),this.Ac=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ac.syncEngine;this.sharedClientState instanceof La&&(this.sharedClientState.syncEngine={Fr:$I.bind(null,t),$r:WI.bind(null,t),Br:jI.bind(null,t),vi:KI.bind(null,t),Mr:BI.bind(null,t)},await this.sharedClientState.start()),await this.persistence.li(async s=>{await GI(this.Ac.syncEngine,s),this.gcScheduler&&(s&&!this.gcScheduler.started?this.gcScheduler.start():s||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(s&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():s||this.indexBackfillerScheduler.stop())})}gc(e){const t=xm();if(!La.C(t))throw new y(p.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const s=Al(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new La(t,e.asyncQueue,s,e.clientId,e.initialUser)}}class Ql{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Jh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=VI.bind(null,this.syncEngine),await _c(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new EI}createDatastore(e){const t=ar(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new oI(i));var i;return function(r,o,a,c){return new lI(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return t=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Jh(this.syncEngine,a,0),o=zh.C()?new zh:new sI,new hI(t,s,i,r,o);var t,s,i,r,o}createSyncEngine(e,t){return function(s,i,r,o,a,c,l){const u=new AI(s,i,r,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=E(e);_("RemoteStore","RemoteStore shutting down."),t._u.add(5),await Os(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function zl(n,e,t){if(!t)throw new y(p.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Gm(n,e,t,s){if(e===!0&&s===!0)throw new y(p.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ed(n){if(!I.isDocumentKey(n))throw new y(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function td(n){if(I.isDocumentKey(n))throw new y(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Qo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":T()}function U(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new y(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Qo(n);throw new y(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Km(n,e){if(e<=0)throw new y(p.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */const nd=new Map;class sd{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new y(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new y(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Gm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class lr{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new y(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sd(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new cv;switch(t.type){case"gapi":const s=t.client;return new dv(s,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new y(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=nd.get(e);t&&(_("ComponentProvider","Removing Datastore"),nd.delete(e),t.terminate())}(this),Promise.resolve()}}function HI(n,e,t,s={}){var i;const r=(n=U(n,lr))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&ls("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${t}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=we.MOCK_USER;else{o=Jd(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new y(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new we(c)}n._authCredentials=new lv(new ig(o,a))}}/**
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
 */class J{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new J(this.firestore,e,this._key)}}class Re{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Re(this.firestore,e,this._query)}}class yt extends Re{constructor(e,t,s){super(e,t,Ds(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new J(this.firestore,null,new I(e))}withConverter(e){return new yt(this.firestore,e,this._path)}}function Wm(n,e,...t){if(n=q(n),zl("collection","path",e),n instanceof lr){const s=V.fromString(e,...t);return td(s),new yt(n,null,s)}{if(!(n instanceof J||n instanceof yt))throw new y(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(V.fromString(e,...t));return td(s),new yt(n.firestore,null,s)}}function YI(n,e){if(n=U(n,lr),zl("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new y(p.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Re(n,null,function(t){return new At(V.emptyPath(),t)}(e))}function oo(n,e,...t){if(n=q(n),arguments.length===1&&(e=rg.R()),zl("doc","path",e),n instanceof lr){const s=V.fromString(e,...t);return ed(s),new J(n,null,new I(s))}{if(!(n instanceof J||n instanceof yt))throw new y(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(V.fromString(e,...t));return ed(s),new J(n.firestore,n instanceof yt?n.converter:null,new I(s))}}function jm(n,e){return n=q(n),e=q(e),(n instanceof J||n instanceof yt)&&(e instanceof J||e instanceof yt)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Qm(n,e){return n=q(n),e=q(e),n instanceof Re&&e instanceof Re&&n.firestore===e.firestore&&sr(n._query,e._query)&&n.converter===e.converter}/**
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
 */function id(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const s={value:n.slice(t,t+e),done:!1};return t+=e,s}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
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
 *//**
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
 */class zo{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):le("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class XI{constructor(e,t){this.Pc=e,this.yt=t,this.metadata=new Te,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(s=>{s&&s.Ou()?this.metadata.resolve(s.ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(s==null?void 0:s.ku)}`))},s=>this.metadata.reject(s))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(e===null)return null;const t=this.vc.decode(e),s=Number(t);isNaN(s)&&this.Dc(`length string (${t}) is not valid number`);const i=await this.Cc(s);return new SI(JSON.parse(i),e.length+s)}xc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Sc(){for(;this.xc()<0&&!await this.Nc(););if(this.buffer.length===0)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const t=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class JI{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new y(p.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(s,i){const r=E(s),o=Ni(r.yt)+"/documents",a={documents:i.map(h=>xi(r.yt,h))},c=await r._o("BatchGetDocuments",o,a,i.length),l=new Map;c.forEach(h=>{const d=Zv(r.yt,h);l.set(d.key.toString(),d)});const u=[];return i.forEach(h=>{const d=l.get(h.toString());b(!!d),u.push(d)}),u}(this.datastore,e);return t.forEach(s=>this.recordVersion(s)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(s){this.lastWriteError=s}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ps(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,s)=>{const i=I.fromPath(s);this.mutations.push(new vl(i,this.precondition(i)))}),await async function(t,s){const i=E(t),r=Ni(i.yt)+"/documents",o={writes:s.map(a=>Ai(i.yt,a))};await i.ao("Commit",r,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw T();t=x.min()}const s=this.readVersions.get(e.key.toString());if(s){if(!t.isEqual(s))throw new y(p.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(x.min())?ee.exists(!1):ee.updateTime(t):ee.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(x.min()))throw new y(p.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ee.updateTime(t)}return ee.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class ZI{constructor(e,t,s,i,r){this.asyncQueue=e,this.datastore=t,this.options=s,this.updateFunction=i,this.deferred=r,this.kc=s.maxAttempts,this.xo=new Rl(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{const e=new JI(this.datastore),t=this.Mc(e);t&&t.then(s=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(s)}).catch(i=>{this.Fc(i)}))}).catch(s=>{this.Fc(s)})})}Mc(e){try{const t=this.updateFunction(e);return!tr(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Ug(t)}return!1}}/**
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
 */class eE{constructor(e,t,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=i,this.user=we.UNAUTHENTICATED,this.clientId=rg.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{_("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(_("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Te;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Fs(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function zm(n,e){n.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await wm(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function Hm(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Hl(n);_("FirestoreClient","Initializing OnlineComponentProvider");const s=await n.getConfiguration();await e.initialize(t,s),n.setCredentialChangeListener(i=>Hh(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,r)=>Hh(e.remoteStore,r)),n.onlineComponents=e}async function Hl(n){return n.offlineComponents||(_("FirestoreClient","Using default OfflineComponentProvider"),await zm(n,new Bm)),n.offlineComponents}async function Ho(n){return n.onlineComponents||(_("FirestoreClient","Using default OnlineComponentProvider"),await Hm(n,new Ql)),n.onlineComponents}function Ym(n){return Hl(n).then(e=>e.persistence)}function Yl(n){return Hl(n).then(e=>e.localStore)}function Xm(n){return Ho(n).then(e=>e.remoteStore)}function Xl(n){return Ho(n).then(e=>e.syncEngine)}function tE(n){return Ho(n).then(e=>e.datastore)}async function ws(n){const e=await Ho(n),t=e.eventManager;return t.onListen=kI.bind(null,e.syncEngine),t.onUnlisten=DI.bind(null,e.syncEngine),t}function nE(n){return n.asyncQueue.enqueue(async()=>{const e=await Ym(n),t=await Xm(n);return e.setNetworkEnabled(!0),function(s){const i=E(s);return i._u.delete(0),cr(i)}(t)})}function sE(n){return n.asyncQueue.enqueue(async()=>{const e=await Ym(n),t=await Xm(n);return e.setNetworkEnabled(!1),async function(s){const i=E(s);i._u.add(0),await Os(i),i.gu.set("Offline")}(t)})}function iE(n,e){const t=new Te;return n.asyncQueue.enqueueAndForget(async()=>async function(s,i,r){try{const o=await function(a,c){const l=E(a);return l.persistence.runTransaction("read document","readonly",u=>l.localDocuments.getDocument(u,c))}(s,i);o.isFoundDocument()?r.resolve(o):o.isNoDocument()?r.resolve(null):r.reject(new y(p.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Fs(o,`Failed to get document '${i} from cache`);r.reject(a)}}(await Yl(n),e,t)),t.promise}function Jm(n,e,t={}){const s=new Te;return n.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new zo({next:h=>{r.enqueueAndForget(()=>Vl(i,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new y(p.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new y(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new ql(Ds(o.path),l,{includeMetadataChanges:!0,Nu:!0});return Fl(i,u)}(await ws(n),n.asyncQueue,e,t,s)),s.promise}function rE(n,e){const t=new Te;return n.asyncQueue.enqueueAndForget(async()=>async function(s,i,r){try{const o=await no(s,i,!0),a=new Fm(i,o.Hi),c=a.Wu(o.documents),l=a.applyChanges(c,!1);r.resolve(l.snapshot)}catch(o){const a=Fs(o,`Failed to execute query '${i} against cache`);r.reject(a)}}(await Yl(n),e,t)),t.promise}function Zm(n,e,t={}){const s=new Te;return n.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new zo({next:h=>{r.enqueueAndForget(()=>Vl(i,u)),h.fromCache&&a.source==="server"?c.reject(new y(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new ql(o,l,{includeMetadataChanges:!0,Nu:!0});return Fl(i,u)}(await ws(n),n.asyncQueue,e,t,s)),s.promise}function oE(n,e){const t=new zo(e);return n.asyncQueue.enqueueAndForget(async()=>function(s,i){E(s).Ru.add(i),i.next()}(await ws(n),t)),()=>{t.bc(),n.asyncQueue.enqueueAndForget(async()=>function(s,i){E(s).Ru.delete(i)}(await ws(n),t))}}function aE(n,e,t,s){const i=function(r,o){let a;return a=typeof r=="string"?new TextEncoder().encode(r):r,function(c,l){return new XI(c,l)}(function(c,l){if(c instanceof Uint8Array)return id(c,l);if(c instanceof ArrayBuffer)return id(new Uint8Array(c),l);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,ar(e));n.asyncQueue.enqueueAndForget(async()=>{QI(await Xl(n),i,s)})}function cE(n,e){return n.asyncQueue.enqueue(async()=>function(t,s){const i=E(t);return i.persistence.runTransaction("Get named query","readonly",r=>i.Ns.getNamedQuery(r,s))}(await Yl(n),e))}class lE{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Rl(this,"async_queue_retry"),this.Wc=()=>{const t=Ur();t&&_("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const e=Ur();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const t=Ur();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const t=new Te;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!an(e))throw e;_("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const t=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw le("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=t,t}enqueueAfterDelay(e,t,s){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const i=Ll.createAndSchedule(this,e,t,s,r=>this.Yc(r));return this.Uc.push(i),i}zc(){this.Kc&&T()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Uc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}function wc(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of t)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class uE{constructor(){this._progressObserver={},this._taskCompletionResolver=new Te,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,s){this._progressObserver={next:e,error:t,complete:s}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const hE=-1;class ae extends lr{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new lE,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ep(this),this._firestoreClient.terminate()}}function xe(n){return n._firestoreClient||ep(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function ep(n){var e;const t=n._freezeSettings(),s=function(i,r,o,a){return new Ev(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new eE(n._authCredentials,n._appCheckCredentials,n._queue,s)}function dE(n,e){np(n=U(n,ae));const t=xe(n),s=n._freezeSettings(),i=new Ql;return tp(t,i,new $m(i,s.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function fE(n){np(n=U(n,ae));const e=xe(n),t=n._freezeSettings(),s=new Ql;return tp(e,s,new zI(s,t.cacheSizeBytes))}function tp(n,e,t){const s=new Te;return n.asyncQueue.enqueue(async()=>{try{await zm(n,t),await Hm(n,e),s.resolve()}catch(i){const r=i;if(!function(o){return o.name==="FirebaseError"?o.code===p.FAILED_PRECONDITION||o.code===p.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(r))throw r;ls("Error enabling offline persistence. Falling back to persistence disabled: "+r),s.reject(r)}}).then(()=>s.promise)}function gE(n){if(n._initialized&&!n._terminated)throw new y(p.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Te;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!ct.C())return Promise.resolve();const s=t+"main";await ct.delete(s)}(Al(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function mE(n){return function(e){const t=new Te;return e.asyncQueue.enqueueAndForget(async()=>LI(await Xl(e),t)),t.promise}(xe(n=U(n,ae)))}function pE(n){return nE(xe(n=U(n,ae)))}function yE(n){return sE(xe(n=U(n,ae)))}function _E(n,e){const t=xe(n=U(n,ae)),s=new uE;return aE(t,n._databaseId,e,s),s}function vE(n,e){return cE(xe(n=U(n,ae)),e).then(t=>t?new Re(n,null,t.query):null)}function np(n){if(n._initialized||n._terminated)throw new y(p.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 *//**
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
 */class wt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wt(me.fromBase64String(e))}catch(t){throw new y(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new wt(me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Yt{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new y(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Kn{constructor(e){this._methodName=e}}/**
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
 */class Yo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new y(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new y(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return D(this._lat,e._lat)||D(this._long,e._long)}}/**
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
 */const wE=/^__.*__$/;class IE{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new kt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Rs(e,this.data,t,this.fieldTransforms)}}class sp{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new kt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ip(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class Xo{constructor(e,t,s,i,r,o){this.settings=e,this.databaseId=t,this.yt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Xo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return ao(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(ip(this.sa)&&wE.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class EE{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.yt=s||ar(e)}da(e,t,s,i=!1){return new Xo({sa:e,methodName:t,fa:s,path:ue.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Wn(n){const e=n._freezeSettings(),t=ar(n._databaseId);return new EE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Jo(n,e,t,s,i,r={}){const o=n.da(r.merge||r.mergeFields?2:0,e,t,i);tu("Data must be an object, but it was:",o,s);const a=ap(s,o);let c,l;if(r.merge)c=new Xe(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=Ic(e,h,t);if(!o.contains(d))throw new y(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);lp(u,d)||u.push(d)}c=new Xe(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new IE(new ke(a),c,l)}class ur extends Kn{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ur}}function rp(n,e,t){return new Xo({sa:3,fa:e.settings.fa,methodName:n._methodName,oa:t},e.databaseId,e.yt,e.ignoreUndefinedProperties)}class Jl extends Kn{_toFieldTransform(e){return new ir(e.path,new fs)}isEqual(e){return e instanceof Jl}}class TE extends Kn{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=rp(this,e,!0),s=this._a.map(r=>jn(r,t)),i=new Pn(s);return new ir(e.path,i)}isEqual(e){return this===e}}class CE extends Kn{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=rp(this,e,!0),s=this._a.map(r=>jn(r,t)),i=new On(s);return new ir(e.path,i)}isEqual(e){return this===e}}class SE extends Kn{constructor(e,t){super(e),this.wa=t}_toFieldTransform(e){const t=new gs(e.yt,Rg(e.yt,this.wa));return new ir(e.path,t)}isEqual(e){return this===e}}function Zl(n,e,t,s){const i=n.da(1,e,t);tu("Data must be an object, but it was:",i,s);const r=[],o=ke.empty();Gn(s,(c,l)=>{const u=nu(e,c,t);l=q(l);const h=i.ca(u);if(l instanceof ur)r.push(u);else{const d=jn(l,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Xe(r);return new sp(o,a,i.fieldTransforms)}function eu(n,e,t,s,i,r){const o=n.da(1,e,t),a=[Ic(e,s,t)],c=[i];if(r.length%2!=0)throw new y(p.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Ic(e,r[d])),c.push(r[d+1]);const l=[],u=ke.empty();for(let d=a.length-1;d>=0;--d)if(!lp(l,a[d])){const f=a[d];let m=c[d];m=q(m);const v=o.ca(f);if(m instanceof ur)l.push(f);else{const C=jn(m,v);C!=null&&(l.push(f),u.set(f,C))}}const h=new Xe(l);return new sp(u,h,o.fieldTransforms)}function op(n,e,t,s=!1){return jn(t,n.da(s?4:3,e))}function jn(n,e){if(cp(n=q(n)))return tu("Unsupported field value:",e,n),ap(n,e);if(n instanceof Kn)return function(t,s){if(!ip(s.sa))throw s.ha(`${t._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(t,s){const i=[];let r=0;for(const o of t){let a=jn(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(n,e)}return function(t,s){if((t=q(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return Rg(s.yt,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=ne.fromDate(t);return{timestampValue:ms(s.yt,i)}}if(t instanceof ne){const i=new ne(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ms(s.yt,i)}}if(t instanceof Yo)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof wt)return{bytesValue:jg(s.yt,t._byteString)};if(t instanceof J){const i=s.databaseId,r=t.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:wl(t.firestore._databaseId||s.databaseId,t._key.path)}}throw s.ha(`Unsupported field value: ${Qo(t)}`)}(n,e)}function ap(n,e){const t={};return dg(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gn(n,(s,i)=>{const r=jn(i,e.ra(s));r!=null&&(t[s]=r)}),{mapValue:{fields:t}}}function cp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ne||n instanceof Yo||n instanceof wt||n instanceof J||n instanceof Kn)}function tu(n,e,t){if(!cp(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const s=Qo(t);throw s==="an object"?e.ha(n+" a custom object"):e.ha(n+" "+s)}}function Ic(n,e,t){if((e=q(e))instanceof Yt)return e._internalPath;if(typeof e=="string")return nu(n,e);throw ao("Field path arguments must be of type string or ",n,!1,void 0,t)}const bE=new RegExp("[~\\*/\\[\\]]");function nu(n,e,t){if(e.search(bE)>=0)throw ao(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Yt(...e.split("."))._internalPath}catch{throw ao(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ao(n,e,t,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new y(p.INVALID_ARGUMENT,a+n+c)}function lp(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Di{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new J(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Zo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class xE extends Di{data(){return super.data()}}function Zo(n,e){return typeof e=="string"?nu(n,e):e instanceof Yt?e._internalPath:e._delegate._internalPath}/**
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
 */function up(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new y(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class su{}class hr extends su{}function Ot(n,e,...t){let s=[];e instanceof su&&s.push(e),s=s.concat(t),function(i){const r=i.filter(a=>a instanceof iu).length,o=i.filter(a=>a instanceof ea).length;if(r>1||r>0&&o>0)throw new y(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)n=i._apply(n);return n}class ea extends hr{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new ea(e,t,s)}_apply(e){const t=this._parse(e);return dp(e._query,t),new Re(e.firestore,e.converter,lc(e._query,t))}_parse(e){const t=Wn(e.firestore);return function(i,r,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new y(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){od(u,l);const d=[];for(const f of u)d.push(rd(a,i,f));h={arrayValue:{values:d}}}else h=rd(a,i,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||od(u,l),h=op(o,r,u,l==="in"||l==="not-in");return L.create(c,l,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function NE(n,e,t){const s=e,i=Zo("where",n);return ea._create(i,s,t)}class iu extends su{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new iu(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:K.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)dp(r,a),r=lc(r,a)}(e._query,t),new Re(e.firestore,e.converter,lc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ru extends hr{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ru(e,t)}_apply(e){const t=function(s,i,r){if(s.startAt!==null)throw new y(p.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new y(p.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new is(i,r);return function(a,c){if(pl(a)===null){const l=Uo(a);l!==null&&fp(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new Re(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new At(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function AE(n,e="asc"){const t=e,s=Zo("orderBy",n);return ru._create(s,t)}class ta extends hr{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new ta(e,t,s)}_apply(e){return new Re(e.firestore,e.converter,Jr(e._query,this._limit,this._limitType))}}function kE(n){return Km("limit",n),ta._create("limit",n,"F")}function DE(n){return Km("limitToLast",n),ta._create("limitToLast",n,"L")}class na extends hr{constructor(e,t,s){super(),this.type=e,this._docOrFields=t,this._inclusive=s}static _create(e,t,s){return new na(e,t,s)}_apply(e){const t=hp(e,this.type,this._docOrFields,this._inclusive);return new Re(e.firestore,e.converter,function(s,i){return new At(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,t))}}function RE(...n){return na._create("startAt",n,!0)}function PE(...n){return na._create("startAfter",n,!1)}class sa extends hr{constructor(e,t,s){super(),this.type=e,this._docOrFields=t,this._inclusive=s}static _create(e,t,s){return new sa(e,t,s)}_apply(e){const t=hp(e,this.type,this._docOrFields,this._inclusive);return new Re(e.firestore,e.converter,function(s,i){return new At(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,i)}(e._query,t))}}function OE(...n){return sa._create("endBefore",n,!1)}function ME(...n){return sa._create("endAt",n,!0)}function hp(n,e,t,s){if(t[0]=q(t[0]),t[0]instanceof Di)return function(i,r,o,a,c){if(!a)throw new y(p.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of Sn(i))if(u.field.isKeyField())l.push(Dn(r,a.key));else{const h=a.data.field(u.field);if(ml(h))throw new y(p.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=u.field.canonicalString();throw new y(p.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new zt(l,c)}(n._query,n.firestore._databaseId,e,t[0]._document,s);{const i=Wn(n.firestore);return function(r,o,a,c,l,u){const h=r.explicitOrderBy;if(l.length>h.length)throw new y(p.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<l.length;f++){const m=l[f];if(h[f].field.isKeyField()){if(typeof m!="string")throw new y(p.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof m}`);if(!yl(r)&&m.indexOf("/")!==-1)throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${m}' contains a slash.`);const v=r.path.child(V.fromString(m));if(!I.isDocumentKey(v))throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const C=new I(v);d.push(Dn(o,C))}else{const v=op(a,c,m);d.push(v)}}return new zt(d,u)}(n._query,n.firestore._databaseId,i,e,t,s)}}function rd(n,e,t){if(typeof(t=q(t))=="string"){if(t==="")throw new y(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yl(e)&&t.indexOf("/")!==-1)throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(V.fromString(t));if(!I.isDocumentKey(s))throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Dn(n,new I(s))}if(t instanceof J)return Dn(n,t._key);throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qo(t)}.`)}function od(n,e){if(!Array.isArray(n)||n.length===0)throw new y(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new y(p.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function dp(n,e){if(e.isInequality()){const s=Uo(n),i=e.field;if(s!==null&&!s.isEqual(i))throw new y(p.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=pl(n);r!==null&&fp(n,i,r)}const t=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new y(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new y(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function fp(n,e,t){if(!t.isEqual(e))throw new y(p.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class ou{convertValue(e,t="none"){switch(kn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(An(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw T()}}convertObject(e,t){const s={};return Gn(e.fields,(i,r)=>{s[i]=this.convertValue(r,t)}),s}convertGeoPoint(e){return new Yo(ie(e.latitude),ie(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=gg(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ci(e));default:return null}}convertTimestamp(e){const t=jt(e);return new ne(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=V.fromString(e);b(nm(s));const i=new Wt(s.get(1),s.get(3)),r=new I(s.popFirst(5));return i.isEqual(t)||le(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */function ia(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class LE extends ou{constructor(e){super(),this.firestore=e}convertBytes(e){return new wt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new J(this.firestore,null,t)}}/**
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
 */class In{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xt extends Di{constructor(e,t,s,i,r,o){super(e,t,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ui(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Zo("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class ui extends xt{data(e={}){return super.data(e)}}class Xt{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new In(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new ui(this._firestore,this._userDataWriter,s.key,s,new In(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new y(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new ui(s._firestore,s._userDataWriter,o.doc.key,o.doc,new In(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ui(s._firestore,s._userDataWriter,o.doc.key,o.doc,new In(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:FE(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function FE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}function gp(n,e){return n instanceof xt&&e instanceof xt?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Xt&&e instanceof Xt&&n._firestore===e._firestore&&Qm(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function VE(n){n=U(n,J);const e=U(n.firestore,ae);return Jm(xe(e),n._key).then(t=>au(e,n,t))}class Qn extends ou{constructor(e){super(),this.firestore=e}convertBytes(e){return new wt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new J(this.firestore,null,t)}}function UE(n){n=U(n,J);const e=U(n.firestore,ae),t=xe(e),s=new Qn(e);return iE(t,n._key).then(i=>new xt(e,s,n._key,i,new In(i!==null&&i.hasLocalMutations,!0),n.converter))}function qE(n){n=U(n,J);const e=U(n.firestore,ae);return Jm(xe(e),n._key,{source:"server"}).then(t=>au(e,n,t))}function BE(n){n=U(n,Re);const e=U(n.firestore,ae),t=xe(e),s=new Qn(e);return up(n._query),Zm(t,n._query).then(i=>new Xt(e,s,n,i))}function $E(n){n=U(n,Re);const e=U(n.firestore,ae),t=xe(e),s=new Qn(e);return rE(t,n._query).then(i=>new Xt(e,s,n,i))}function GE(n){n=U(n,Re);const e=U(n.firestore,ae),t=xe(e),s=new Qn(e);return Zm(t,n._query,{source:"server"}).then(i=>new Xt(e,s,n,i))}function ad(n,e,t){n=U(n,J);const s=U(n.firestore,ae),i=ia(n.converter,e,t);return dr(s,[Jo(Wn(s),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,ee.none())])}function cd(n,e,t,...s){n=U(n,J);const i=U(n.firestore,ae),r=Wn(i);let o;return o=typeof(e=q(e))=="string"||e instanceof Yt?eu(r,"updateDoc",n._key,e,t,s):Zl(r,"updateDoc",n._key,e),dr(i,[o.toMutation(n._key,ee.exists(!0))])}function KE(n){return dr(U(n.firestore,ae),[new Ps(n._key,ee.none())])}function WE(n,e){const t=U(n.firestore,ae),s=oo(n),i=ia(n.converter,e);return dr(t,[Jo(Wn(n.firestore),"addDoc",s._key,i,n.converter!==null,{}).toMutation(s._key,ee.exists(!1))]).then(()=>s)}function mp(n,...e){var t,s,i;n=q(n);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||wc(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(wc(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(n instanceof J)l=U(n.firestore,ae),u=Ds(n._key.path),c={next:h=>{e[o]&&e[o](au(l,n,h))},error:e[o+1],complete:e[o+2]};else{const h=U(n,Re);l=U(h.firestore,ae),u=h._query;const d=new Qn(l);c={next:f=>{e[o]&&e[o](new Xt(l,d,h,f))},error:e[o+1],complete:e[o+2]},up(n._query)}return function(h,d,f,m){const v=new zo(m),C=new ql(d,v,f);return h.asyncQueue.enqueueAndForget(async()=>Fl(await ws(h),C)),()=>{v.bc(),h.asyncQueue.enqueueAndForget(async()=>Vl(await ws(h),C))}}(xe(l),u,a,c)}function jE(n,e){return oE(xe(n=U(n,ae)),wc(e)?e:{next:e})}function dr(n,e){return function(t,s){const i=new Te;return t.asyncQueue.enqueueAndForget(async()=>RI(await Xl(t),s,i)),i.promise}(xe(n),e)}function au(n,e,t){const s=t.docs.get(e._key),i=new Qn(n);return new xt(n,i,e._key,s,new In(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const QE={maxAttempts:5};/**
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
 */class zE{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Wn(e)}set(e,t,s){this._verifyNotCommitted();const i=Lt(e,this._firestore),r=ia(i.converter,t,s),o=Jo(this._dataReader,"WriteBatch.set",i._key,r,i.converter!==null,s);return this._mutations.push(o.toMutation(i._key,ee.none())),this}update(e,t,s,...i){this._verifyNotCommitted();const r=Lt(e,this._firestore);let o;return o=typeof(t=q(t))=="string"||t instanceof Yt?eu(this._dataReader,"WriteBatch.update",r._key,t,s,i):Zl(this._dataReader,"WriteBatch.update",r._key,t),this._mutations.push(o.toMutation(r._key,ee.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Lt(e,this._firestore);return this._mutations=this._mutations.concat(new Ps(t._key,ee.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new y(p.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Lt(n,e){if((n=q(n)).firestore!==e)throw new y(p.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 *//**
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
 */class HE extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Wn(e)}get(e){const t=Lt(e,this._firestore),s=new LE(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return T();const r=i[0];if(r.isFoundDocument())return new Di(this._firestore,s,r.key,r,t.converter);if(r.isNoDocument())return new Di(this._firestore,s,t._key,null,t.converter);throw T()})}set(e,t,s){const i=Lt(e,this._firestore),r=ia(i.converter,t,s),o=Jo(this._dataReader,"Transaction.set",i._key,r,i.converter!==null,s);return this._transaction.set(i._key,o),this}update(e,t,s,...i){const r=Lt(e,this._firestore);let o;return o=typeof(t=q(t))=="string"||t instanceof Yt?eu(this._dataReader,"Transaction.update",r._key,t,s,i):Zl(this._dataReader,"Transaction.update",r._key,t),this._transaction.update(r._key,o),this}delete(e){const t=Lt(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Lt(e,this._firestore),s=new Qn(this._firestore);return super.get(e).then(i=>new xt(this._firestore,s,t._key,i._document,new In(!1,!1),t.converter))}}function YE(n,e,t){n=U(n,ae);const s=Object.assign(Object.assign({},QE),t);return function(i){if(i.maxAttempts<1)throw new y(p.INVALID_ARGUMENT,"Max attempts must be at least 1")}(s),function(i,r,o){const a=new Te;return i.asyncQueue.enqueueAndForget(async()=>{const c=await tE(i);new ZI(i.asyncQueue,c,o,r,a).run()}),a.promise}(xe(n),i=>e(new HE(n,i)),s)}/**
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
 */function XE(){return new ur("deleteField")}function JE(){return new Jl("serverTimestamp")}function ZE(...n){return new TE("arrayUnion",n)}function eT(...n){return new CE("arrayRemove",n)}function tT(n){return new SE("increment",n)}(function(n,e=!0){(function(t){ks=t})(Xd),Yd(new Ki("firestore",(t,{instanceIdentifier:s,options:i})=>{const r=t.getProvider("app").getImmediate(),o=new ae(new uv(t.getProvider("auth-internal")),new gv(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new y(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wt(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),mi(rh,"3.8.0",n),mi(rh,"3.8.0","esm2017")})();const nT="@firebase/firestore-compat",sT="0.3.0";/**
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
 */function cu(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new y("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function ld(){if(typeof Uint8Array>"u")throw new y("unimplemented","Uint8Arrays are not available in this environment.")}function ud(){if(!Tv())throw new y("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Ri{constructor(e){this._delegate=e}static fromBase64String(e){return ud(),new Ri(wt.fromBase64String(e))}static fromUint8Array(e){return ld(),new Ri(wt.fromUint8Array(e))}toBase64(){return ud(),this._delegate.toBase64()}toUint8Array(){return ld(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Ec(n){return iT(n,["next","error","complete"])}function iT(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const s of e)if(s in t&&typeof t[s]=="function")return!0;return!1}/**
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
 */class rT{enableIndexedDbPersistence(e,t){return dE(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return fE(e._delegate)}clearIndexedDbPersistence(e){return gE(e._delegate)}}class pp{constructor(e,t,s){this._delegate=t,this._persistenceProvider=s,this.INTERNAL={delete:()=>this.terminate()},e instanceof Wt||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&ls("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,s={}){HI(this._delegate,e,t,s)}enableNetwork(){return pE(this._delegate)}disableNetwork(){return yE(this._delegate)}enablePersistence(e){let t=!1,s=!1;return e&&(t=!!e.synchronizeTabs,s=!!e.experimentalForceOwningTab,Gm("synchronizeTabs",t,"experimentalForceOwningTab",s)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,s)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return mE(this._delegate)}onSnapshotsInSync(e){return jE(this._delegate,e)}get app(){if(!this._appCompat)throw new y("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Is(this,Wm(this._delegate,e))}catch(t){throw Fe(t,"collection()","Firestore.collection()")}}doc(e){try{return new nt(this,oo(this._delegate,e))}catch(t){throw Fe(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new $e(this,YI(this._delegate,e))}catch(t){throw Fe(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return YE(this._delegate,t=>e(new yp(this,t)))}batch(){return xe(this._delegate),new _p(new zE(this._delegate,e=>dr(this._delegate,e)))}loadBundle(e){return _E(this._delegate,e)}namedQuery(e){return vE(this._delegate,e).then(t=>t?new $e(this,t):null)}}class ra extends ou{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ri(new wt(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return nt.forKey(t,this.firestore,null)}}function oT(n){ov(n)}class yp{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new ra(e)}get(e){const t=En(e);return this._delegate.get(t).then(s=>new Pi(this._firestore,new xt(this._firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,t.converter)))}set(e,t,s){const i=En(e);return s?(cu("Transaction.set",s),this._delegate.set(i,t,s)):this._delegate.set(i,t),this}update(e,t,s,...i){const r=En(e);return arguments.length===2?this._delegate.update(r,t):this._delegate.update(r,t,s,...i),this}delete(e){const t=En(e);return this._delegate.delete(t),this}}class _p{constructor(e){this._delegate=e}set(e,t,s){const i=En(e);return s?(cu("WriteBatch.set",s),this._delegate.set(i,t,s)):this._delegate.set(i,t),this}update(e,t,s,...i){const r=En(e);return arguments.length===2?this._delegate.update(r,t):this._delegate.update(r,t,s,...i),this}delete(e){const t=En(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Vn{constructor(e,t,s){this._firestore=e,this._userDataWriter=t,this._delegate=s}fromFirestore(e,t){const s=new ui(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Oi(this._firestore,s),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const s=Vn.INSTANCES;let i=s.get(e);i||(i=new WeakMap,s.set(e,i));let r=i.get(t);return r||(r=new Vn(e,new ra(e),t),i.set(t,r)),r}}Vn.INSTANCES=new WeakMap;class nt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ra(e)}static forPath(e,t,s){if(e.length%2!==0)throw new y("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new nt(t,new J(t._delegate,s,new I(e)))}static forKey(e,t,s){return new nt(t,new J(t._delegate,s,e))}get id(){return this._delegate.id}get parent(){return new Is(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Is(this.firestore,Wm(this._delegate,e))}catch(t){throw Fe(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=q(e),e instanceof J?jm(this._delegate,e):!1}set(e,t){t=cu("DocumentReference.set",t);try{return t?ad(this._delegate,e,t):ad(this._delegate,e)}catch(s){throw Fe(s,"setDoc()","DocumentReference.set()")}}update(e,t,...s){try{return arguments.length===1?cd(this._delegate,e):cd(this._delegate,e,t,...s)}catch(i){throw Fe(i,"updateDoc()","DocumentReference.update()")}}delete(){return KE(this._delegate)}onSnapshot(...e){const t=vp(e),s=wp(e,i=>new Pi(this.firestore,new xt(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return mp(this._delegate,t,s)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=UE(this._delegate):(e==null?void 0:e.source)==="server"?t=qE(this._delegate):t=VE(this._delegate),t.then(s=>new Pi(this.firestore,new xt(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)))}withConverter(e){return new nt(this.firestore,e?this._delegate.withConverter(Vn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Fe(n,e,t){return n.message=n.message.replace(e,t),n}function vp(n){for(const e of n)if(typeof e=="object"&&!Ec(e))return e;return{}}function wp(n,e){var t,s;let i;return Ec(n[0])?i=n[0]:Ec(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:r=>{i.next&&i.next(e(r))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(s=i.complete)===null||s===void 0?void 0:s.bind(i)}}class Pi{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new nt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return gp(this._delegate,e._delegate)}}class Oi extends Pi{data(e){const t=this._delegate.data(e);return av(t!==void 0),t}}let $e=class{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ra(e)}where(e,t,s){try{return new $e(this.firestore,Ot(this._delegate,NE(e,t,s)))}catch(i){throw Fe(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new $e(this.firestore,Ot(this._delegate,AE(e,t)))}catch(s){throw Fe(s,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new $e(this.firestore,Ot(this._delegate,kE(e)))}catch(t){throw Fe(t,"limit()","Query.limit()")}}limitToLast(e){try{return new $e(this.firestore,Ot(this._delegate,DE(e)))}catch(t){throw Fe(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new $e(this.firestore,Ot(this._delegate,RE(...e)))}catch(t){throw Fe(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new $e(this.firestore,Ot(this._delegate,PE(...e)))}catch(t){throw Fe(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new $e(this.firestore,Ot(this._delegate,OE(...e)))}catch(t){throw Fe(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new $e(this.firestore,Ot(this._delegate,ME(...e)))}catch(t){throw Fe(t,"endAt()","Query.endAt()")}}isEqual(e){return Qm(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=$E(this._delegate):(e==null?void 0:e.source)==="server"?t=GE(this._delegate):t=BE(this._delegate),t.then(s=>new Tc(this.firestore,new Xt(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)))}onSnapshot(...e){const t=vp(e),s=wp(e,i=>new Tc(this.firestore,new Xt(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return mp(this._delegate,t,s)}withConverter(e){return new $e(this.firestore,e?this._delegate.withConverter(Vn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}};class aT{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Oi(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Tc{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new $e(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Oi(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new aT(this._firestore,t))}forEach(e,t){this._delegate.forEach(s=>{e.call(t,new Oi(this._firestore,s))})}isEqual(e){return gp(this._delegate,e._delegate)}}class Is extends $e{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new nt(this.firestore,e):null}doc(e){try{return e===void 0?new nt(this.firestore,oo(this._delegate)):new nt(this.firestore,oo(this._delegate,e))}catch(t){throw Fe(t,"doc()","CollectionReference.doc()")}}add(e){return WE(this._delegate,e).then(t=>new nt(this.firestore,t))}isEqual(e){return jm(this._delegate,e._delegate)}withConverter(e){return new Is(this.firestore,e?this._delegate.withConverter(Vn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function En(n){return U(n,J)}/**
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
 */class lu{constructor(...e){this._delegate=new Yt(...e)}static documentId(){return new lu(ue.keyField().canonicalString())}isEqual(e){return e=q(e),e instanceof Yt?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class _n{constructor(e){this._delegate=e}static serverTimestamp(){const e=JE();return e._methodName="FieldValue.serverTimestamp",new _n(e)}static delete(){const e=XE();return e._methodName="FieldValue.delete",new _n(e)}static arrayUnion(...e){const t=ZE(...e);return t._methodName="FieldValue.arrayUnion",new _n(t)}static arrayRemove(...e){const t=eT(...e);return t._methodName="FieldValue.arrayRemove",new _n(t)}static increment(e){const t=tT(e);return t._methodName="FieldValue.increment",new _n(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const cT={Firestore:pp,GeoPoint:Yo,Timestamp:ne,Blob:Ri,Transaction:yp,WriteBatch:_p,DocumentReference:nt,DocumentSnapshot:Pi,Query:$e,QueryDocumentSnapshot:Oi,QuerySnapshot:Tc,CollectionReference:Is,FieldPath:lu,FieldValue:_n,setLogLevel:oT,CACHE_SIZE_UNLIMITED:hE};function lT(n,e){n.INTERNAL.registerComponent(new Ki("firestore-compat",t=>{const s=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(s,i)},"PUBLIC").setServiceProps(Object.assign({},cT)))}/**
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
 */function uT(n){lT(n,(e,t)=>new pp(e,t,new rT)),n.registerVersion(nT,sT)}uT(pi);const hd="@firebase/database",dd="0.14.0";/**
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
 */let Ip="";function Ep(n){Ip=n}/**
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
 */class hT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ge(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Kc(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class dT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ht(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Tp=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new hT(e)}}catch{}return new dT},Tn=Tp("localStorage"),Cc=Tp("sessionStorage");/**
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
 */const os=new Gc("@firebase/database"),Cp=function(){let n=1;return function(){return n++}}(),Sp=function(n){const e=Ky(n),t=new Wy;t.update(e);const s=t.digest();return jy.encodeByteArray(s)},fr=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=fr.apply(null,s):typeof s=="object"?e+=ge(s):e+=s,e+=" "}return e};let bn=null,fd=!0;const bp=function(n,e){w(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(os.logLevel=xn.VERBOSE,bn=os.log.bind(os),e&&Cc.set("logging_enabled",!0)):typeof n=="function"?bn=n:(bn=null,Cc.remove("logging_enabled"))},Ee=function(...n){if(fd===!0&&(fd=!1,bn===null&&Cc.get("logging_enabled")===!0&&bp(!0)),bn){const e=fr.apply(null,n);bn(e)}},gr=function(n){return function(...e){Ee(n,...e)}},Sc=function(...n){const e="FIREBASE INTERNAL ERROR: "+fr(...n);os.error(e)},It=function(...n){const e=`FIREBASE FATAL ERROR: ${fr(...n)}`;throw os.error(e),new Error(e)},Le=function(...n){const e="FIREBASE WARNING: "+fr(...n);os.warn(e)},fT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Le("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},oa=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},gT=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Jt="[MIN_NAME]",Nt="[MAX_NAME]",zn=function(n,e){if(n===e)return 0;if(n===Jt||e===Nt)return-1;if(e===Jt||n===Nt)return 1;{const t=gd(n),s=gd(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},mT=function(n,e){return n===e?0:n<e?-1:1},Ys=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ge(e))},uu=function(n){if(typeof n!="object"||n===null)return ge(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=ge(e[s]),t+=":",t+=uu(n[e[s]]);return t+="}",t},xp=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function Se(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Np=function(n){w(!oa(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},pT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},yT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function _T(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const vT=new RegExp("^-?(0*)\\d{1,10}$"),wT=-2147483648,IT=2147483647,gd=function(n){if(vT.test(n)){const e=Number(n);if(e>=wT&&e<=IT)return e}return null},Vs=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Le("Exception was thrown by user callback.",t),e},Math.floor(0))}},ET=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},hi=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class TT{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Le(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class CT{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ee("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Le(e)}}class as{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}as.OWNER="owner";/**
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
 */const hu="5",Ap="v",kp="s",Dp="r",Rp="f",Pp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Op="ls",Mp="p",bc="ac",Lp="websocket",Fp="long_polling";/**
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
 */class Vp{constructor(e,t,s,i,r=!1,o="",a=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Tn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Tn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function ST(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Up(n,e,t){w(typeof e=="string","typeof type must == string"),w(typeof t=="object","typeof params must == object");let s;if(e===Lp)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Fp)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ST(n)&&(t.ns=n.namespace);const i=[];return Se(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class bT{constructor(){this.counters_={}}incrementCounter(e,t=1){ht(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Xy(this.counters_)}}/**
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
 */const Fa={},Va={};function du(n){const e=n.toString();return Fa[e]||(Fa[e]=new bT),Fa[e]}function xT(n,e){const t=n.toString();return Va[t]||(Va[t]=e()),Va[t]}/**
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
 */class NT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Vs(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const md="start",AT="close",kT="pLPCommand",DT="pRTLPCB",qp="id",Bp="pw",$p="ser",RT="cb",PT="seg",OT="ts",MT="d",LT="dframe",Gp=1870,Kp=30,FT=Gp-Kp,VT=25e3,UT=3e4;class Vt{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=gr(e),this.stats_=du(t),this.urlFn=c=>(this.appCheckToken&&(c[bc]=this.appCheckToken),Up(t,Fp,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new NT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(UT)),gT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new fu((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===md)this.id=a,this.password=c;else if(o===AT)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[md]="t",s[$p]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[RT]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ap]=hu,this.transportSessionId&&(s[kp]=this.transportSessionId),this.lastSessionId&&(s[Op]=this.lastSessionId),this.applicationId&&(s[Mp]=this.applicationId),this.appCheckToken&&(s[bc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Pp.test(location.hostname)&&(s[Dp]=Rp);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Vt.forceAllow_=!0}static forceDisallow(){Vt.forceDisallow_=!0}static isAvailable(){return Vt.forceAllow_?!0:!Vt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!pT()&&!yT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ge(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Jy(t),i=xp(s,FT);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[LT]="t",s[qp]=e,s[Bp]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ge(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class fu{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Cp(),window[kT+this.uniqueCallbackIdentifier]=e,window[DT+this.uniqueCallbackIdentifier]=t,this.myIFrame=fu.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ee("frame writing exception"),a.stack&&Ee(a.stack),Ee(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ee("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[qp]=this.myID,e[Bp]=this.myPW,e[$p]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Kp+s.length<=Gp;){const o=this.pendingSegs.shift();s=s+"&"+PT+i+"="+o.seg+"&"+OT+i+"="+o.ts+"&"+MT+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(VT)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{Ee("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const qT=16384,BT=45e3;let co=null;typeof MozWebSocket<"u"?co=MozWebSocket:typeof WebSocket<"u"&&(co=WebSocket);class tt{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=gr(this.connId),this.stats_=du(t),this.connURL=tt.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Ap]=hu,typeof location<"u"&&location.hostname&&Pp.test(location.hostname)&&(o[Dp]=Rp),t&&(o[kp]=t),s&&(o[Op]=s),i&&(o[bc]=i),r&&(o[Mp]=r),Up(e,Lp,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Tn.set("previous_websocket_failure",!0);try{let s;Zd(),this.mySock=new co(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){tt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&co!==null&&!tt.forceDisallow_}static previouslyFailed(){return Tn.isInMemoryStorage||Tn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Tn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Kc(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(w(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=ge(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=xp(t,qT);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(BT))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}tt.responsesRequiredToBeHealthy=2;tt.healthyTimeout=3e4;/**
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
 */class Es{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Vt,tt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=tt&&tt.isAvailable();let s=t&&!tt.previouslyFailed();if(e.webSocketOnly&&(t||Le("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[tt];else{const i=this.transports_=[];for(const r of Es.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Es.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Es.globalTransportInitialized_=!1;/**
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
 */const $T=6e4,GT=5e3,KT=10*1024,WT=100*1024,Ua="t",pd="d",jT="s",yd="r",QT="e",_d="o",vd="a",wd="n",Id="p",zT="h";class HT{constructor(e,t,s,i,r,o,a,c,l,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=gr("c:"+this.id+":"),this.transportManager_=new Es(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=hi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>WT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>KT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ua in e){const t=e[Ua];t===vd?this.upgradeIfSecondaryHealthy_():t===yd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===_d&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ys("t",e),s=Ys("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Id,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:vd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:wd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ys("t",e),s=Ys("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ys(Ua,e);if(pd in e){const s=e[pd];if(t===zT)this.onHandshake_(s);else if(t===wd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===jT?this.onConnectionShutdown_(s):t===yd?this.onReset_(s):t===QT?Sc("Server Error: "+s):t===_d?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Sc("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),hu!==s&&Le("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),hi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor($T))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):hi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(GT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Id,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Tn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Wp{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class jp{constructor(e){this.allowedEvents_=e,this.listeners_={},w(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){w(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class lo extends jp{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ef()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new lo}getInitialEvent(e){return w(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ed=32,Td=768;class G{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function B(){return new G("")}function P(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Zt(n){return n.pieces_.length-n.pieceNum_}function Q(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new G(n.pieces_,e)}function gu(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function YT(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Mi(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Qp(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new G(e,0)}function te(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof G)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new G(t,0)}function O(n){return n.pieceNum_>=n.pieces_.length}function Ue(n,e){const t=P(n),s=P(e);if(t===null)return e;if(t===s)return Ue(Q(n),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function XT(n,e){const t=Mi(n,0),s=Mi(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=zn(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function mu(n,e){if(Zt(n)!==Zt(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function st(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Zt(n)>Zt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class JT{constructor(e,t){this.errorPrefix_=t,this.parts_=Mi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Eo(this.parts_[s]);zp(this)}}function ZT(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Eo(e),zp(n)}function eC(n){const e=n.parts_.pop();n.byteLength_-=Eo(e),n.parts_.length>0&&(n.byteLength_-=1)}function zp(n){if(n.byteLength_>Td)throw new Error(n.errorPrefix_+"has a key path longer than "+Td+" bytes ("+n.byteLength_+").");if(n.parts_.length>Ed)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ed+") or object contains a cycle "+fn(n))}function fn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class pu extends jp{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new pu}getInitialEvent(e){return w(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Xs=1e3,tC=60*5*1e3,Cd=30*1e3,nC=1.3,sC=3e4,iC="server_kill",Sd=3;class St extends Wp{constructor(e,t,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=St.nextPersistentConnectionId_++,this.log_=gr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xs,this.maxReconnectDelay_=tC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Zd())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");pu.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&lo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(ge(r)),w(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new He,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),w(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;St.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ht(e,"w")){const s=Nn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Le(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Qy(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Cd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=zy(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ge(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Sc("Unrecognized action received from server: "+ge(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){w(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>sC&&(this.reconnectDelay_=Xs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*nC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+St.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(h){w(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ee("getToken() completed but was canceled"):(Ee("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new HT(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{Le(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(iC)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Le(h),c())}}}interrupt(e){Ee("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ee("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Wa(this.interruptReasons_)&&(this.reconnectDelay_=Xs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>uu(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new G(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){Ee("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Sd&&(this.reconnectDelay_=Cd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ee("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Sd&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Ip.replace(/\./g,"-")]=1,ef()?e["framework.cordova"]=1:Hy()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=lo.getInstance().currentlyOnline();return Wa(this.interruptReasons_)&&e}}St.nextPersistentConnectionId_=0;St.nextConnectionId_=0;/**
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
 */class M{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new M(e,t)}}/**
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
 */class aa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new M(Jt,e),i=new M(Jt,t);return this.compare(s,i)!==0}minPost(){return M.MIN}}/**
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
 */let Rr;class Hp extends aa{static get __EMPTY_NODE(){return Rr}static set __EMPTY_NODE(e){Rr=e}compare(e,t){return zn(e.name,t.name)}isDefinedOn(e){throw Wi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return M.MIN}maxPost(){return new M(Nt,Rr)}makePost(e,t){return w(typeof e=="string","KeyIndex indexValue must always be a string."),new M(e,Rr)}toString(){return".key"}}const _t=new Hp;/**
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
 */class Pr{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ie{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??Ie.RED,this.left=i??je.EMPTY_NODE,this.right=r??je.EMPTY_NODE}copy(e,t,s,i,r){return new Ie(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return je.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return je.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ie.RED=!0;Ie.BLACK=!1;class rC{copy(e,t,s,i,r){return this}insert(e,t,s){return new Ie(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class je{constructor(e,t=je.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new je(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ie.BLACK,null,null))}remove(e){return new je(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ie.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Pr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Pr(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Pr(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Pr(this.root_,null,this.comparator_,!0,e)}}je.EMPTY_NODE=new rC;/**
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
 */function oC(n,e){return zn(n.name,e.name)}function yu(n,e){return zn(n,e)}/**
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
 */let xc;function aC(n){xc=n}const Yp=function(n){return typeof n=="number"?"number:"+Np(n):"string:"+n},Xp=function(n){if(n.isLeafNode()){const e=n.val();w(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ht(e,".sv"),"Priority must be a string or number.")}else w(n===xc||n.isEmpty(),"priority of unexpected type.");w(n===xc||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let bd;class ye{constructor(e,t=ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,w(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Xp(this.priorityNode_)}static set __childrenNodeConstructor(e){bd=e}static get __childrenNodeConstructor(){return bd}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return O(e)?this:P(e)===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=P(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(w(s!==".priority"||Zt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Yp(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Np(this.value_):e+=this.value_,this.lazyHash_=Sp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ye.__childrenNodeConstructor?-1:(w(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=ye.VALUE_TYPE_ORDER.indexOf(t),r=ye.VALUE_TYPE_ORDER.indexOf(s);return w(i>=0,"Unknown leaf type: "+t),w(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Jp,Zp;function cC(n){Jp=n}function lC(n){Zp=n}class uC extends aa{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?zn(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return M.MIN}maxPost(){return new M(Nt,new ye("[PRIORITY-POST]",Zp))}makePost(e,t){const s=Jp(e);return new M(t,new ye("[PRIORITY-POST]",s))}toString(){return".priority"}}const Y=new uC;/**
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
 */const hC=Math.log(2);class dC{constructor(e){const t=r=>parseInt(Math.log(r)/hC,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const uo=function(n,e,t,s){n.sort(e);const i=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=n[c],d=t?t(h):h,new Ie(d,h.node,Ie.BLACK,null,null);{const f=parseInt(u/2,10)+c,m=i(c,f),v=i(f+1,l);return h=n[f],d=t?t(h):h,new Ie(d,h.node,Ie.BLACK,m,v)}},r=function(c){let l=null,u=null,h=n.length;const d=function(m,v){const C=h-m,$=h;h-=m;const z=i(C+1,$),j=n[C],pe=t?t(j):j;f(new Ie(pe,j.node,v,null,z))},f=function(m){l?(l.left=m,l=m):(u=m,l=m)};for(let m=0;m<c.count;++m){const v=c.nextBitIsOne(),C=Math.pow(2,c.count-(m+1));v?d(C,Ie.BLACK):(d(C,Ie.BLACK),d(C,Ie.RED))}return u},o=new dC(n.length),a=r(o);return new je(s||e,a)};/**
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
 */let qa;const Zn={};class Ct{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return w(Zn&&Y,"ChildrenNode.ts has not been loaded"),qa=qa||new Ct({".priority":Zn},{".priority":Y}),qa}get(e){const t=Nn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof je?t:null}hasIndex(e){return ht(this.indexSet_,e.toString())}addIndex(e,t){w(e!==_t,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(M.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=uo(s,e.getCompare()):a=Zn;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Ct(u,l)}addToIndexes(e,t){const s=qr(this.indexes_,(i,r)=>{const o=Nn(this.indexSet_,r);if(w(o,"Missing index implementation for "+r),i===Zn)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(M.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),uo(a,o.getCompare())}else return Zn;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new M(e.name,a))),c.insert(e,e.node)}});return new Ct(s,this.indexSet_)}removeFromIndexes(e,t){const s=qr(this.indexes_,i=>{if(i===Zn)return i;{const r=t.get(e.name);return r?i.remove(new M(e.name,r)):i}});return new Ct(s,this.indexSet_)}}/**
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
 */let Js;class N{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Xp(this.priorityNode_),this.children_.isEmpty()&&w(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Js||(Js=new N(new je(yu),null,Ct.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Js}updatePriority(e){return this.children_.isEmpty()?this:new N(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Js:t}}getChild(e){const t=P(e);return t===null?this:this.getImmediateChild(t).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(w(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new M(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Js:this.priorityNode_;return new N(i,o,r)}}updateChild(e,t){const s=P(e);if(s===null)return t;{w(P(e)!==".priority"||Zt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Q(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(Y,(o,a)=>{t[o]=a.val(e),s++,r&&N.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Yp(this.getPriority().val())+":"),this.forEachChild(Y,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Sp(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new M(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new M(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new M(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,M.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,M.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===mr?-1:0}withIndex(e){if(e===_t||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new N(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===_t||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Y),i=t.getIterator(Y);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===_t?null:this.indexMap_.get(e.toString())}}N.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fC extends N{constructor(){super(new je(yu),N.EMPTY_NODE,Ct.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return N.EMPTY_NODE}isEmpty(){return!1}}const mr=new fC;Object.defineProperties(M,{MIN:{value:new M(Jt,N.EMPTY_NODE)},MAX:{value:new M(Nt,mr)}});Hp.__EMPTY_NODE=N.EMPTY_NODE;ye.__childrenNodeConstructor=N;aC(mr);lC(mr);/**
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
 */const gC=!0;function se(n,e=null){if(n===null)return N.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),w(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ye(t,se(e))}if(!(n instanceof Array)&&gC){const t=[];let s=!1;if(Se(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=se(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new M(o,c)))}}),t.length===0)return N.EMPTY_NODE;const r=uo(t,oC,o=>o.name,yu);if(s){const o=uo(t,Y.getCompare());return new N(r,se(e),new Ct({".priority":o},{".priority":Y}))}else return new N(r,se(e),Ct.Default)}else{let t=N.EMPTY_NODE;return Se(n,(s,i)=>{if(ht(n,s)&&s.substring(0,1)!=="."){const r=se(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(se(e))}}cC(se);/**
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
 */class _u extends aa{constructor(e){super(),this.indexPath_=e,w(!O(e)&&P(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?zn(e.name,t.name):r}makePost(e,t){const s=se(e),i=N.EMPTY_NODE.updateChild(this.indexPath_,s);return new M(t,i)}maxPost(){const e=N.EMPTY_NODE.updateChild(this.indexPath_,mr);return new M(Nt,e)}toString(){return Mi(this.indexPath_,0).join("/")}}/**
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
 */class mC extends aa{compare(e,t){const s=e.node.compareTo(t.node);return s===0?zn(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return M.MIN}maxPost(){return M.MAX}makePost(e,t){const s=se(e);return new M(t,s)}toString(){return".value"}}const vu=new mC;/**
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
 */function ey(n){return{type:"value",snapshotNode:n}}function Ts(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Li(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Fi(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function pC(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class wu{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){w(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Li(t,a)):w(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ts(t,s)):o.trackChildChange(Fi(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Y,(i,r)=>{t.hasChild(i)||s.trackChildChange(Li(i,r))}),t.isLeafNode()||t.forEachChild(Y,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Fi(i,r,o))}else s.trackChildChange(Ts(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?N.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Vi{constructor(e){this.indexedFilter_=new wu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Vi.getStartPost_(e),this.endPost_=Vi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new M(t,s))||(s=N.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=N.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(N.EMPTY_NODE);const r=this;return t.forEachChild(Y,(o,a)=>{r.matches(new M(o,a))||(i=i.updateImmediateChild(o,N.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class yC{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Vi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new M(t,s))||(s=N.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=N.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=N.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(N.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,N.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;w(a.numChildren()===this.limit_,"");const c=new M(t,s),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,l,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,c);if(u&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Fi(t,s,h)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Li(t,h));const v=a.updateImmediateChild(t,N.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Ts(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return s.isEmpty()?e:u&&o(l,c)>=0?(r!=null&&(r.trackChildChange(Li(l.name,l.node)),r.trackChildChange(Ts(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(l.name,N.EMPTY_NODE)):e}}/**
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
 */class ca{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Y}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return w(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return w(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Jt}hasEnd(){return this.endSet_}getIndexEndValue(){return w(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return w(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Nt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return w(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Y}copy(){const e=new ca;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function _C(n){return n.loadsAllData()?new wu(n.getIndex()):n.hasLimit()?new yC(n):new Vi(n)}function vC(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="l",t}function wC(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="r",t}function Nc(n,e,t){const s=n.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,t!=null?(s.startNameSet_=!0,s.indexStartName_=t):(s.startNameSet_=!1,s.indexStartName_=""),s}function IC(n,e,t){let s;return n.index_===_t||t?s=Nc(n,e,t):s=Nc(n,e,Nt),s.startAfterSet_=!0,s}function Ac(n,e,t){const s=n.copy();return s.endSet_=!0,e===void 0&&(e=null),s.indexEndValue_=e,t!==void 0?(s.endNameSet_=!0,s.indexEndName_=t):(s.endNameSet_=!1,s.indexEndName_=""),s}function EC(n,e,t){let s;return n.index_===_t||t?s=Ac(n,e,t):s=Ac(n,e,Jt),s.endBeforeSet_=!0,s}function la(n,e){const t=n.copy();return t.index_=e,t}function xd(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Y?t="$priority":n.index_===vu?t="$value":n.index_===_t?t="$key":(w(n.index_ instanceof _u,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ge(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=ge(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+ge(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=ge(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+ge(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Nd(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Y&&(e.i=n.index_.toString()),e}/**
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
 */class ho extends Wp{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=gr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(w(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ho.getListenId_(e,s),a={};this.listens_[o]=a;const c=xd(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,s),Nn(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",i(d,null)}})}unlisten(e,t){const s=ho.getListenId_(e,t);delete this.listens_[s]}get(e){const t=xd(e._queryParams),s=e._path.toString(),i=new He;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Yy(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Kc(a.responseText)}catch{Le("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Le("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class TC{constructor(){this.rootNode_=N.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function fo(){return{value:null,children:new Map}}function Us(n,e,t){if(O(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=P(e);n.children.has(s)||n.children.set(s,fo());const i=n.children.get(s);e=Q(e),Us(i,e,t)}}function kc(n,e){if(O(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(Y,(s,i)=>{Us(n,new G(s),i)}),kc(n,e)}}else if(n.children.size>0){const t=P(e);return e=Q(e),n.children.has(t)&&kc(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Dc(n,e,t){n.value!==null?t(e,n.value):CC(n,(s,i)=>{const r=new G(e.toString()+"/"+s);Dc(i,r,t)})}function CC(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class SC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Se(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const Ad=10*1e3,bC=30*1e3,xC=5*60*1e3;class NC{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new SC(e);const s=Ad+(bC-Ad)*Math.random();hi(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Se(e,(i,r)=>{r>0&&ht(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),hi(this.reportStats_.bind(this),Math.floor(Math.random()*2*xC))}}/**
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
 */var lt;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(lt||(lt={}));function Iu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Eu(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Tu(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class go{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=lt.ACK_USER_WRITE,this.source=Iu()}operationForChild(e){if(O(this.path)){if(this.affectedTree.value!=null)return w(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new G(e));return new go(B(),t,this.revert)}}else return w(P(this.path)===e,"operationForChild called for unrelated child."),new go(Q(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ui{constructor(e,t){this.source=e,this.path=t,this.type=lt.LISTEN_COMPLETE}operationForChild(e){return O(this.path)?new Ui(this.source,B()):new Ui(this.source,Q(this.path))}}/**
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
 */class Un{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=lt.OVERWRITE}operationForChild(e){return O(this.path)?new Un(this.source,B(),this.snap.getImmediateChild(e)):new Un(this.source,Q(this.path),this.snap)}}/**
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
 */class Cs{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=lt.MERGE}operationForChild(e){if(O(this.path)){const t=this.children.subtree(new G(e));return t.isEmpty()?null:t.value?new Un(this.source,B(),t.value):new Cs(this.source,B(),t)}else return w(P(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Cs(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class en{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(O(e))return this.isFullyInitialized()&&!this.filtered_;const t=P(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class AC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function kC(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(pC(o.childName,o.snapshotNode))}),Zs(n,i,"child_removed",e,s,t),Zs(n,i,"child_added",e,s,t),Zs(n,i,"child_moved",r,s,t),Zs(n,i,"child_changed",e,s,t),Zs(n,i,"value",e,s,t),i}function Zs(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,c)=>RC(n,a,c)),o.forEach(a=>{const c=DC(n,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function DC(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function RC(n,e,t){if(e.childName==null||t.childName==null)throw Wi("Should only compare child_ events.");const s=new M(e.childName,e.snapshotNode),i=new M(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function ua(n,e){return{eventCache:n,serverCache:e}}function di(n,e,t,s){return ua(new en(e,t,s),n.serverCache)}function ty(n,e,t,s){return ua(n.eventCache,new en(e,t,s))}function mo(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function qn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Ba;const PC=()=>(Ba||(Ba=new je(mT)),Ba);class H{constructor(e,t=PC()){this.value=e,this.children=t}static fromObject(e){let t=new H(null);return Se(e,(s,i)=>{t=t.set(new G(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:B(),value:this.value};if(O(e))return null;{const s=P(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Q(e),t);return r!=null?{path:te(new G(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(O(e))return this;{const t=P(e),s=this.children.get(t);return s!==null?s.subtree(Q(e)):new H(null)}}set(e,t){if(O(e))return new H(t,this.children);{const s=P(e),r=(this.children.get(s)||new H(null)).set(Q(e),t),o=this.children.insert(s,r);return new H(this.value,o)}}remove(e){if(O(e))return this.children.isEmpty()?new H(null):new H(null,this.children);{const t=P(e),s=this.children.get(t);if(s){const i=s.remove(Q(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new H(null):new H(this.value,r)}else return this}}get(e){if(O(e))return this.value;{const t=P(e),s=this.children.get(t);return s?s.get(Q(e)):null}}setTree(e,t){if(O(e))return t;{const s=P(e),r=(this.children.get(s)||new H(null)).setTree(Q(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new H(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(te(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,B(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(O(e))return null;{const r=P(e),o=this.children.get(r);return o?o.findOnPath_(Q(e),te(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,B(),t)}foreachOnPath_(e,t,s){if(O(e))return this;{this.value&&s(t,this.value);const i=P(e),r=this.children.get(i);return r?r.foreachOnPath_(Q(e),te(t,i),s):new H(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(te(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class ut{constructor(e){this.writeTree_=e}static empty(){return new ut(new H(null))}}function fi(n,e,t){if(O(e))return new ut(new H(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ue(i,e);return r=r.updateChild(o,t),new ut(n.writeTree_.set(i,r))}else{const i=new H(t),r=n.writeTree_.setTree(e,i);return new ut(r)}}}function Rc(n,e,t){let s=n;return Se(t,(i,r)=>{s=fi(s,te(e,i),r)}),s}function kd(n,e){if(O(e))return ut.empty();{const t=n.writeTree_.setTree(e,new H(null));return new ut(t)}}function Pc(n,e){return Hn(n,e)!=null}function Hn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Ue(t.path,e)):null}function Dd(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Y,(s,i)=>{e.push(new M(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new M(s,i.value))}),e}function Bt(n,e){if(O(e))return n;{const t=Hn(n,e);return t!=null?new ut(new H(t)):new ut(n.writeTree_.subtree(e))}}function Oc(n){return n.writeTree_.isEmpty()}function Ss(n,e){return ny(B(),n.writeTree_,e)}function ny(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(w(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=ny(te(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(te(n,".priority"),s)),t}}/**
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
 */function ha(n,e){return oy(e,n)}function OC(n,e,t,s,i){w(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=fi(n.visibleWrites,e,t)),n.lastWriteId=s}function MC(n,e,t,s){w(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=Rc(n.visibleWrites,e,t),n.lastWriteId=s}function LC(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function FC(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);w(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&VC(a,s.path)?i=!1:st(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return UC(n),!0;if(s.snap)n.visibleWrites=kd(n.visibleWrites,s.path);else{const a=s.children;Se(a,c=>{n.visibleWrites=kd(n.visibleWrites,te(s.path,c))})}return!0}else return!1}function VC(n,e){if(n.snap)return st(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&st(te(n.path,t),e))return!0;return!1}function UC(n){n.visibleWrites=sy(n.allWrites,qC,B()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function qC(n){return n.visible}function sy(n,e,t){let s=ut.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)st(t,o)?(a=Ue(t,o),s=fi(s,a,r.snap)):st(o,t)&&(a=Ue(o,t),s=fi(s,B(),r.snap.getChild(a)));else if(r.children){if(st(t,o))a=Ue(t,o),s=Rc(s,a,r.children);else if(st(o,t))if(a=Ue(o,t),O(a))s=Rc(s,B(),r.children);else{const c=Nn(r.children,P(a));if(c){const l=c.getChild(Q(a));s=fi(s,B(),l)}}}else throw Wi("WriteRecord should have .snap or .children")}}return s}function iy(n,e,t,s,i){if(!s&&!i){const r=Hn(n.visibleWrites,e);if(r!=null)return r;{const o=Bt(n.visibleWrites,e);if(Oc(o))return t;if(t==null&&!Pc(o,B()))return null;{const a=t||N.EMPTY_NODE;return Ss(o,a)}}}else{const r=Bt(n.visibleWrites,e);if(!i&&Oc(r))return t;if(!i&&t==null&&!Pc(r,B()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(st(l.path,e)||st(e,l.path))},a=sy(n.allWrites,o,e),c=t||N.EMPTY_NODE;return Ss(a,c)}}}function BC(n,e,t){let s=N.EMPTY_NODE;const i=Hn(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Y,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Bt(n.visibleWrites,e);return t.forEachChild(Y,(o,a)=>{const c=Ss(Bt(r,new G(o)),a);s=s.updateImmediateChild(o,c)}),Dd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Bt(n.visibleWrites,e);return Dd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function $C(n,e,t,s,i){w(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=te(e,t);if(Pc(n.visibleWrites,r))return null;{const o=Bt(n.visibleWrites,r);return Oc(o)?i.getChild(t):Ss(o,i.getChild(t))}}function GC(n,e,t,s){const i=te(e,t),r=Hn(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Bt(n.visibleWrites,i);return Ss(o,s.getNode().getImmediateChild(t))}else return null}function KC(n,e){return Hn(n.visibleWrites,e)}function WC(n,e,t,s,i,r,o){let a;const c=Bt(n.visibleWrites,e),l=Hn(c,B());if(l!=null)a=l;else if(t!=null)a=Ss(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function jC(){return{visibleWrites:ut.empty(),allWrites:[],lastWriteId:-1}}function po(n,e,t,s){return iy(n.writeTree,n.treePath,e,t,s)}function Cu(n,e){return BC(n.writeTree,n.treePath,e)}function Rd(n,e,t,s){return $C(n.writeTree,n.treePath,e,t,s)}function yo(n,e){return KC(n.writeTree,te(n.treePath,e))}function QC(n,e,t,s,i,r){return WC(n.writeTree,n.treePath,e,t,s,i,r)}function Su(n,e,t){return GC(n.writeTree,n.treePath,e,t)}function ry(n,e){return oy(te(n.treePath,e),n.writeTree)}function oy(n,e){return{treePath:n,writeTree:e}}/**
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
 */class zC{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;w(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),w(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Fi(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Li(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Ts(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Fi(s,e.snapshotNode,i.oldSnap));else throw Wi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class HC{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const ay=new HC;class bu{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new en(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Su(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qn(this.viewCache_),r=QC(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function YC(n){return{filter:n}}function XC(n,e){w(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),w(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function JC(n,e,t,s,i){const r=new zC;let o,a;if(t.type===lt.OVERWRITE){const l=t;l.source.fromUser?o=Mc(n,e,l.path,l.snap,s,i,r):(w(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!O(l.path),o=_o(n,e,l.path,l.snap,s,i,a,r))}else if(t.type===lt.MERGE){const l=t;l.source.fromUser?o=eS(n,e,l.path,l.children,s,i,r):(w(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Lc(n,e,l.path,l.children,s,i,a,r))}else if(t.type===lt.ACK_USER_WRITE){const l=t;l.revert?o=sS(n,e,l.path,s,i,r):o=tS(n,e,l.path,l.affectedTree,s,i,r)}else if(t.type===lt.LISTEN_COMPLETE)o=nS(n,e,t.path,s,r);else throw Wi("Unknown operation type: "+t.type);const c=r.getChanges();return ZC(e,o,c),{viewCache:o,changes:c}}function ZC(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=mo(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(ey(mo(e)))}}function cy(n,e,t,s,i,r){const o=e.eventCache;if(yo(s,t)!=null)return e;{let a,c;if(O(t))if(w(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=qn(e),u=l instanceof N?l:N.EMPTY_NODE,h=Cu(s,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=po(s,qn(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=P(t);if(l===".priority"){w(Zt(t)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Rd(s,t,u,c);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=Q(t);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=Rd(s,t,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=Su(s,l,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),l,h,u,i,r):a=o.getNode()}}return di(e,a,o.isFullyInitialized()||O(t),n.filter.filtersNodes())}}function _o(n,e,t,s,i,r,o,a){const c=e.serverCache;let l;const u=o?n.filter:n.filter.getIndexedFilter();if(O(t))l=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(t,s);l=u.updateFullNode(c.getNode(),f,null)}else{const f=P(t);if(!c.isCompleteForPath(t)&&Zt(t)>1)return e;const m=Q(t),C=c.getNode().getImmediateChild(f).updateChild(m,s);f===".priority"?l=u.updatePriority(c.getNode(),C):l=u.updateChild(c.getNode(),f,C,m,ay,null)}const h=ty(e,l,c.isFullyInitialized()||O(t),u.filtersNodes()),d=new bu(i,h,r);return cy(n,h,t,i,d,a)}function Mc(n,e,t,s,i,r,o){const a=e.eventCache;let c,l;const u=new bu(i,e,r);if(O(t))l=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=di(e,l,!0,n.filter.filtersNodes());else{const h=P(t);if(h===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),s),c=di(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=Q(t),f=a.getNode().getImmediateChild(h);let m;if(O(d))m=s;else{const v=u.getCompleteChild(h);v!=null?gu(d)===".priority"&&v.getChild(Qp(d)).isEmpty()?m=v:m=v.updateChild(d,s):m=N.EMPTY_NODE}if(f.equals(m))c=e;else{const v=n.filter.updateChild(a.getNode(),h,m,d,u,o);c=di(e,v,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Pd(n,e){return n.eventCache.isCompleteForChild(e)}function eS(n,e,t,s,i,r,o){let a=e;return s.foreach((c,l)=>{const u=te(t,c);Pd(e,P(u))&&(a=Mc(n,a,u,l,i,r,o))}),s.foreach((c,l)=>{const u=te(t,c);Pd(e,P(u))||(a=Mc(n,a,u,l,i,r,o))}),a}function Od(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Lc(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;O(t)?l=s:l=new H(null).setTree(t,s);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),m=Od(n,f,d);c=_o(n,c,new G(h),m,i,r,o,a)}}),l.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const m=e.serverCache.getNode().getImmediateChild(h),v=Od(n,m,d);c=_o(n,c,new G(h),v,i,r,o,a)}}),c}function tS(n,e,t,s,i,r,o){if(yo(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(O(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return _o(n,e,t,c.getNode().getChild(t),i,r,a,o);if(O(t)){let l=new H(null);return c.getNode().forEachChild(_t,(u,h)=>{l=l.set(new G(u),h)}),Lc(n,e,t,l,i,r,a,o)}else return e}else{let l=new H(null);return s.foreach((u,h)=>{const d=te(t,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),Lc(n,e,t,l,i,r,a,o)}}function nS(n,e,t,s,i){const r=e.serverCache,o=ty(e,r.getNode(),r.isFullyInitialized()||O(t),r.isFiltered());return cy(n,o,t,s,ay,i)}function sS(n,e,t,s,i,r){let o;if(yo(s,t)!=null)return e;{const a=new bu(s,e,i),c=e.eventCache.getNode();let l;if(O(t)||P(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=po(s,qn(e));else{const h=e.serverCache.getNode();w(h instanceof N,"serverChildren would be complete if leaf node"),u=Cu(s,h)}u=u,l=n.filter.updateFullNode(c,u,r)}else{const u=P(t);let h=Su(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=n.filter.updateChild(c,u,h,Q(t),a,r):e.eventCache.getNode().hasChild(u)?l=n.filter.updateChild(c,u,N.EMPTY_NODE,Q(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=po(s,qn(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||yo(s,B())!=null,di(e,l,o,n.filter.filtersNodes())}}/**
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
 */class iS{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new wu(s.getIndex()),r=_C(s);this.processor_=YC(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(N.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(N.EMPTY_NODE,a.getNode(),null),u=new en(c,o.isFullyInitialized(),i.filtersNodes()),h=new en(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=ua(h,u),this.eventGenerator_=new AC(this.query_)}get query(){return this.query_}}function rS(n){return n.viewCache_.serverCache.getNode()}function oS(n){return mo(n.viewCache_)}function aS(n,e){const t=qn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!O(e)&&!t.getImmediateChild(P(e)).isEmpty())?t.getChild(e):null}function Md(n){return n.eventRegistrations_.length===0}function cS(n,e){n.eventRegistrations_.push(e)}function Ld(n,e,t){const s=[];if(t){w(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Fd(n,e,t,s){e.type===lt.MERGE&&e.source.queryId!==null&&(w(qn(n.viewCache_),"We should always have a full cache before handling merges"),w(mo(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=JC(n.processor_,i,e,t,s);return XC(n.processor_,r.viewCache),w(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,ly(n,r.changes,r.viewCache.eventCache.getNode(),null)}function lS(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Y,(r,o)=>{s.push(Ts(r,o))}),t.isFullyInitialized()&&s.push(ey(t.getNode())),ly(n,s,t.getNode(),e)}function ly(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return kC(n.eventGenerator_,e,t,i)}/**
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
 */let vo;class uy{constructor(){this.views=new Map}}function uS(n){w(!vo,"__referenceConstructor has already been defined"),vo=n}function hS(){return w(vo,"Reference.ts has not been loaded"),vo}function dS(n){return n.views.size===0}function xu(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return w(r!=null,"SyncTree gave us an op for an invalid query."),Fd(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Fd(o,e,t,s));return r}}function hy(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=po(t,i?s:null),c=!1;a?c=!0:s instanceof N?(a=Cu(t,s),c=!1):(a=N.EMPTY_NODE,c=!1);const l=ua(new en(a,c,!1),new en(s,i,!1));return new iS(e,l)}return o}function fS(n,e,t,s,i,r){const o=hy(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),cS(o,t),lS(o,t)}function gS(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=tn(n);if(i==="default")for(const[c,l]of n.views.entries())o=o.concat(Ld(l,t,s)),Md(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=n.views.get(i);c&&(o=o.concat(Ld(c,t,s)),Md(c)&&(n.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!tn(n)&&r.push(new(hS())(e._repo,e._path)),{removed:r,events:o}}function dy(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function $t(n,e){let t=null;for(const s of n.views.values())t=t||aS(s,e);return t}function fy(n,e){if(e._queryParams.loadsAllData())return da(n);{const s=e._queryIdentifier;return n.views.get(s)}}function gy(n,e){return fy(n,e)!=null}function tn(n){return da(n)!=null}function da(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let wo;function mS(n){w(!wo,"__referenceConstructor has already been defined"),wo=n}function pS(){return w(wo,"Reference.ts has not been loaded"),wo}let yS=1;class Vd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new H(null),this.pendingWriteTree_=jC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Nu(n,e,t,s,i){return OC(n.pendingWriteTree_,e,t,s,i),i?qs(n,new Un(Iu(),e,t)):[]}function _S(n,e,t,s){MC(n.pendingWriteTree_,e,t,s);const i=H.fromObject(t);return qs(n,new Cs(Iu(),e,i))}function Ut(n,e,t=!1){const s=LC(n.pendingWriteTree_,e);if(FC(n.pendingWriteTree_,e)){let r=new H(null);return s.snap!=null?r=r.set(B(),!0):Se(s.children,o=>{r=r.set(new G(o),!0)}),qs(n,new go(s.path,r,t))}else return[]}function pr(n,e,t){return qs(n,new Un(Eu(),e,t))}function vS(n,e,t){const s=H.fromObject(t);return qs(n,new Cs(Eu(),e,s))}function wS(n,e){return qs(n,new Ui(Eu(),e))}function IS(n,e,t){const s=Au(n,t);if(s){const i=ku(s),r=i.path,o=i.queryId,a=Ue(r,e),c=new Ui(Tu(o),a);return Du(n,r,c)}else return[]}function Io(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||gy(o,e))){const c=gS(o,e,t,s);dS(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!i){const u=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,f)=>tn(f));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=CS(d);for(let m=0;m<f.length;++m){const v=f[m],C=v.query,$=_y(n,v);n.listenProvider_.startListening(gi(C),qi(n,C),$.hashFn,$.onComplete)}}}!h&&l.length>0&&!s&&(u?n.listenProvider_.stopListening(gi(e),null):l.forEach(d=>{const f=n.queryToTagMap.get(ga(d));n.listenProvider_.stopListening(gi(d),f)}))}SS(n,l)}return a}function my(n,e,t,s){const i=Au(n,s);if(i!=null){const r=ku(i),o=r.path,a=r.queryId,c=Ue(o,e),l=new Un(Tu(a),c,t);return Du(n,o,l)}else return[]}function ES(n,e,t,s){const i=Au(n,s);if(i){const r=ku(i),o=r.path,a=r.queryId,c=Ue(o,e),l=H.fromObject(t),u=new Cs(Tu(a),c,l);return Du(n,o,u)}else return[]}function Fc(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,f)=>{const m=Ue(d,i);r=r||$t(f,m),o=o||tn(f)});let a=n.syncPointTree_.get(i);a?(o=o||tn(a),r=r||$t(a,B())):(a=new uy,n.syncPointTree_=n.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=N.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,m)=>{const v=$t(m,B());v&&(r=r.updateImmediateChild(f,v))}));const l=gy(a,e);if(!l&&!e._queryParams.loadsAllData()){const d=ga(e);w(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=bS();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const u=ha(n.pendingWriteTree_,i);let h=fS(a,e,t,u,r,c);if(!l&&!o&&!s){const d=fy(a,e);h=h.concat(xS(n,e,d))}return h}function fa(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=Ue(o,e),l=$t(a,c);if(l)return l});return iy(i,e,r,t,!0)}function TS(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(l,u)=>{const h=Ue(l,t);s=s||$t(u,h)});let i=n.syncPointTree_.get(t);i?s=s||$t(i,B()):(i=new uy,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new en(s,!0,!1):null,a=ha(n.pendingWriteTree_,e._path),c=hy(i,e,a,r?o.getNode():N.EMPTY_NODE,r);return oS(c)}function qs(n,e){return py(e,n.syncPointTree_,null,ha(n.pendingWriteTree_,B()))}function py(n,e,t,s){if(O(n.path))return yy(n,e,t,s);{const i=e.get(B());t==null&&i!=null&&(t=$t(i,B()));let r=[];const o=P(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,u=ry(s,o);r=r.concat(py(a,c,l,u))}return i&&(r=r.concat(xu(i,n,s,t))),r}}function yy(n,e,t,s){const i=e.get(B());t==null&&i!=null&&(t=$t(i,B()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=ry(s,o),u=n.operationForChild(o);u&&(r=r.concat(yy(u,a,c,l)))}),i&&(r=r.concat(xu(i,n,s,t))),r}function _y(n,e){const t=e.query,s=qi(n,t);return{hashFn:()=>(rS(e)||N.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?IS(n,t._path,s):wS(n,t._path);{const r=_T(i,t);return Io(n,t,null,r)}}}}function qi(n,e){const t=ga(e);return n.queryToTagMap.get(t)}function ga(n){return n._path.toString()+"$"+n._queryIdentifier}function Au(n,e){return n.tagToQueryMap.get(e)}function ku(n){const e=n.indexOf("$");return w(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new G(n.substr(0,e))}}function Du(n,e,t){const s=n.syncPointTree_.get(e);w(s,"Missing sync point for query tag that we're tracking");const i=ha(n.pendingWriteTree_,e);return xu(s,t,i,null)}function CS(n){return n.fold((e,t,s)=>{if(t&&tn(t))return[da(t)];{let i=[];return t&&(i=dy(t)),Se(s,(r,o)=>{i=i.concat(o)}),i}})}function gi(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(pS())(n._repo,n._path):n}function SS(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=ga(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function bS(){return yS++}function xS(n,e,t){const s=e._path,i=qi(n,e),r=_y(n,t),o=n.listenProvider_.startListening(gi(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)w(!tn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,u,h)=>{if(!O(l)&&u&&tn(u))return[da(u).query];{let d=[];return u&&(d=d.concat(dy(u).map(f=>f.query))),Se(h,(f,m)=>{d=d.concat(m)}),d}});for(let l=0;l<c.length;++l){const u=c[l];n.listenProvider_.stopListening(gi(u),qi(n,u))}}return o}/**
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
 */class Ru{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ru(t)}node(){return this.node_}}class Pu{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=te(this.path_,e);return new Pu(this.syncTree_,t)}node(){return fa(this.syncTree_,this.path_)}}const NS=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Ud=function(n,e,t){if(!n||typeof n!="object")return n;if(w(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return AS(n[".sv"],e,t);if(typeof n[".sv"]=="object")return kS(n[".sv"],e);w(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},AS=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:w(!1,"Unexpected server value: "+n)}},kS=function(n,e,t){n.hasOwnProperty("increment")||w(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&w(!1,"Unexpected increment value: "+s);const i=e.node();if(w(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},vy=function(n,e,t,s){return Mu(e,new Pu(t,n),s)},Ou=function(n,e,t){return Mu(n,new Ru(e),t)};function Mu(n,e,t){const s=n.getPriority().val(),i=Ud(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Ud(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new ye(a,se(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ye(i))),o.forEachChild(Y,(a,c)=>{const l=Mu(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
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
 */class Lu{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function ma(n,e){let t=e instanceof G?e:new G(e),s=n,i=P(t);for(;i!==null;){const r=Nn(s.node.children,i)||{children:{},childCount:0};s=new Lu(i,s,r),t=Q(t),i=P(t)}return s}function Yn(n){return n.node.value}function Fu(n,e){n.node.value=e,Vc(n)}function wy(n){return n.node.childCount>0}function DS(n){return Yn(n)===void 0&&!wy(n)}function pa(n,e){Se(n.node.children,(t,s)=>{e(new Lu(t,n,s))})}function Iy(n,e,t,s){t&&!s&&e(n),pa(n,i=>{Iy(i,e,!0,s)}),t&&s&&e(n)}function RS(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function yr(n){return new G(n.parent===null?n.name:yr(n.parent)+"/"+n.name)}function Vc(n){n.parent!==null&&PS(n.parent,n.name,n)}function PS(n,e,t){const s=DS(t),i=ht(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Vc(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Vc(n))}/**
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
 */const OS=/[\[\].#$\/\u0000-\u001F\u007F]/,MS=/[\[\].#$\u0000-\u001F\u007F]/,$a=10*1024*1024,ya=function(n){return typeof n=="string"&&n.length!==0&&!OS.test(n)},Ey=function(n){return typeof n=="string"&&n.length!==0&&!MS.test(n)},LS=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ey(n)},Bi=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!oa(n)||n&&typeof n=="object"&&ht(n,".sv")},Et=function(n,e,t,s){s&&e===void 0||_r(rt(n,"value"),e,t)},_r=function(n,e,t){const s=t instanceof G?new JT(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+fn(s));if(typeof e=="function")throw new Error(n+"contains a function "+fn(s)+" with contents = "+e.toString());if(oa(e))throw new Error(n+"contains "+e.toString()+" "+fn(s));if(typeof e=="string"&&e.length>$a/3&&Eo(e)>$a)throw new Error(n+"contains a string greater than "+$a+" utf8 bytes "+fn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Se(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ya(o)))throw new Error(n+" contains an invalid key ("+o+") "+fn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ZT(s,o),_r(n,a,s),eC(s)}),i&&r)throw new Error(n+' contains ".value" child '+fn(s)+" in addition to actual children.")}},FS=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=Mi(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!ya(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(XT);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&st(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Ty=function(n,e,t,s){if(s&&e===void 0)return;const i=rt(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Se(e,(o,a)=>{const c=new G(o);if(_r(i,a,te(t,c)),gu(c)===".priority"&&!Bi(a))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),FS(i,r)},Vu=function(n,e,t){if(!(t&&e===void 0)){if(oa(e))throw new Error(rt(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Bi(e))throw new Error(rt(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},vr=function(n,e,t,s){if(!(s&&t===void 0)&&!ya(t))throw new Error(rt(n,e)+'was an invalid key = "'+t+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},$i=function(n,e,t,s){if(!(s&&t===void 0)&&!Ey(t))throw new Error(rt(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},VS=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),$i(n,e,t,s)},it=function(n,e){if(P(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Cy=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ya(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!LS(t))throw new Error(rt(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class US{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _a(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!mu(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Sy(n,e,t){_a(n,t),by(n,s=>mu(s,e))}function et(n,e,t){_a(n,t),by(n,s=>st(s,e)||st(e,s))}function by(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(qS(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function qS(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();bn&&Ee("event: "+t.toString()),Vs(s)}}}/**
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
 */const xy="repo_interrupt",BS=25;class $S{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new US,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=fo(),this.transactionQueueTree_=new Lu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function GS(n,e,t){if(n.stats_=du(n.repoInfo_),n.forceRestClient_||ET())n.server_=new ho(n.repoInfo_,(s,i,r,o)=>{qd(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Bd(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ge(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new St(n.repoInfo_,e,(s,i,r,o)=>{qd(n,s,i,r,o)},s=>{Bd(n,s)},s=>{KS(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=xT(n.repoInfo_,()=>new NC(n.stats_,n.server_)),n.infoData_=new TC,n.infoSyncTree_=new Vd({startListening:(s,i,r,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=pr(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Uu(n,"connected",!1),n.serverSyncTree_=new Vd({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);et(n.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Ny(n){const t=n.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function wr(n){return NS({timestamp:Ny(n)})}function qd(n,e,t,s,i){n.dataUpdateCount++;const r=new G(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=qr(t,l=>se(l));o=ES(n.serverSyncTree_,r,c,i)}else{const c=se(t);o=my(n.serverSyncTree_,r,c,i)}else if(s){const c=qr(t,l=>se(l));o=vS(n.serverSyncTree_,r,c)}else{const c=se(t);o=pr(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=bs(n,r)),et(n.eventQueue_,a,o)}function Bd(n,e){Uu(n,"connected",e),e===!1&&QS(n)}function KS(n,e){Se(e,(t,s)=>{Uu(n,t,s)})}function Uu(n,e,t){const s=new G("/.info/"+e),i=se(t);n.infoData_.updateSnapshot(s,i);const r=pr(n.infoSyncTree_,s,i);et(n.eventQueue_,s,r)}function va(n){return n.nextWriteId_++}function WS(n,e,t){const s=TS(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=se(i).withIndex(e._queryParams.getIndex());Fc(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=pr(n.serverSyncTree_,e._path,r);else{const a=qi(n.serverSyncTree_,e);o=my(n.serverSyncTree_,e._path,r,a)}return et(n.eventQueue_,e._path,o),Io(n.serverSyncTree_,e,t,null,!0),r},i=>(Bs(n,"get for query "+ge(e)+" failed: "+i),Promise.reject(new Error(i))))}function qu(n,e,t,s,i){Bs(n,"set",{path:e.toString(),value:t,priority:s});const r=wr(n),o=se(t,s),a=fa(n.serverSyncTree_,e),c=Ou(o,a,r),l=va(n),u=Nu(n.serverSyncTree_,e,c,l,!0);_a(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const m=d==="ok";m||Le("set at "+e+" failed: "+d);const v=Ut(n.serverSyncTree_,l,!m);et(n.eventQueue_,e,v),nn(n,i,d,f)});const h=$u(n,e);bs(n,h),et(n.eventQueue_,h,[])}function jS(n,e,t,s){Bs(n,"update",{path:e.toString(),value:t});let i=!0;const r=wr(n),o={};if(Se(t,(a,c)=>{i=!1,o[a]=vy(te(e,a),se(c),n.serverSyncTree_,r)}),i)Ee("update() called with empty data.  Don't do anything."),nn(n,s,"ok",void 0);else{const a=va(n),c=_S(n.serverSyncTree_,e,o,a);_a(n.eventQueue_,c),n.server_.merge(e.toString(),t,(l,u)=>{const h=l==="ok";h||Le("update at "+e+" failed: "+l);const d=Ut(n.serverSyncTree_,a,!h),f=d.length>0?bs(n,e):e;et(n.eventQueue_,f,d),nn(n,s,l,u)}),Se(t,l=>{const u=$u(n,te(e,l));bs(n,u)}),et(n.eventQueue_,e,[])}}function QS(n){Bs(n,"onDisconnectEvents");const e=wr(n),t=fo();Dc(n.onDisconnect_,B(),(i,r)=>{const o=vy(i,r,n.serverSyncTree_,e);Us(t,i,o)});let s=[];Dc(t,B(),(i,r)=>{s=s.concat(pr(n.serverSyncTree_,i,r));const o=$u(n,i);bs(n,o)}),n.onDisconnect_=fo(),et(n.eventQueue_,B(),s)}function zS(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&kc(n.onDisconnect_,e),nn(n,t,s,i)})}function $d(n,e,t,s){const i=se(t);n.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&Us(n.onDisconnect_,e,i),nn(n,s,r,o)})}function HS(n,e,t,s,i){const r=se(t,s);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&Us(n.onDisconnect_,e,r),nn(n,i,o,a)})}function YS(n,e,t,s){if(Wa(t)){Ee("onDisconnect().update() called with empty data.  Don't do anything."),nn(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(i,r)=>{i==="ok"&&Se(t,(o,a)=>{const c=se(a);Us(n.onDisconnect_,te(e,o),c)}),nn(n,s,i,r)})}function XS(n,e,t){let s;P(e._path)===".info"?s=Fc(n.infoSyncTree_,e,t):s=Fc(n.serverSyncTree_,e,t),Sy(n.eventQueue_,e._path,s)}function Uc(n,e,t){let s;P(e._path)===".info"?s=Io(n.infoSyncTree_,e,t):s=Io(n.serverSyncTree_,e,t),Sy(n.eventQueue_,e._path,s)}function Ay(n){n.persistentConnection_&&n.persistentConnection_.interrupt(xy)}function JS(n){n.persistentConnection_&&n.persistentConnection_.resume(xy)}function Bs(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Ee(t,...e)}function nn(n,e,t,s){e&&Vs(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function ZS(n,e,t,s,i,r){Bs(n,"transaction on "+e);const o={path:e,update:t,onComplete:s,status:null,order:Cp(),applyLocally:r,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Bu(n,e,void 0);o.currentInputSnapshot=a;const c=o.update(a.val());if(c===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{_r("transaction failed: Data returned ",c,o.path),o.status=0;const l=ma(n.transactionQueueTree_,e),u=Yn(l)||[];u.push(o),Fu(l,u);let h;typeof c=="object"&&c!==null&&ht(c,".priority")?(h=Nn(c,".priority"),w(Bi(h),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):h=(fa(n.serverSyncTree_,e)||N.EMPTY_NODE).getPriority().val();const d=wr(n),f=se(c,h),m=Ou(f,a,d);o.currentOutputSnapshotRaw=f,o.currentOutputSnapshotResolved=m,o.currentWriteId=va(n);const v=Nu(n.serverSyncTree_,e,m,o.currentWriteId,o.applyLocally);et(n.eventQueue_,e,v),wa(n,n.transactionQueueTree_)}}function Bu(n,e,t){return fa(n.serverSyncTree_,e,t)||N.EMPTY_NODE}function wa(n,e=n.transactionQueueTree_){if(e||Ia(n,e),Yn(e)){const t=Dy(n,e);w(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&eb(n,yr(e),t)}else wy(e)&&pa(e,t=>{wa(n,t)})}function eb(n,e,t){const s=t.map(l=>l.currentWriteId),i=Bu(n,e,s);let r=i;const o=i.hash();for(let l=0;l<t.length;l++){const u=t[l];w(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ue(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,l=>{Bs(n,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(Ut(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Ia(n,ma(n.transactionQueueTree_,e)),wa(n,n.transactionQueueTree_),et(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)Vs(h[d])}else{if(l==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{Le("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=l}bs(n,e)}},o)}function bs(n,e){const t=ky(n,e),s=yr(t),i=Dy(n,t);return tb(n,i,s),s}function tb(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Ue(t,c.path);let u=!1,h;if(w(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(Ut(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=BS)u=!0,h="maxretry",i=i.concat(Ut(n.serverSyncTree_,c.currentWriteId,!0));else{const d=Bu(n,c.path,o);c.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){_r("transaction failed: Data returned ",f,c.path);let m=se(f);typeof f=="object"&&f!=null&&ht(f,".priority")||(m=m.updatePriority(d.getPriority()));const C=c.currentWriteId,$=wr(n),z=Ou(m,d,$);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=z,c.currentWriteId=va(n),o.splice(o.indexOf(C),1),i=i.concat(Nu(n.serverSyncTree_,c.path,z,c.currentWriteId,c.applyLocally)),i=i.concat(Ut(n.serverSyncTree_,C,!0))}else u=!0,h="nodata",i=i.concat(Ut(n.serverSyncTree_,c.currentWriteId,!0))}et(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Ia(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)Vs(s[a]);wa(n,n.transactionQueueTree_)}function ky(n,e){let t,s=n.transactionQueueTree_;for(t=P(e);t!==null&&Yn(s)===void 0;)s=ma(s,t),e=Q(e),t=P(e);return s}function Dy(n,e){const t=[];return Ry(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Ry(n,e,t){const s=Yn(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);pa(e,i=>{Ry(n,i,t)})}function Ia(n,e){const t=Yn(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Fu(e,t.length>0?t:void 0)}pa(e,s=>{Ia(n,s)})}function $u(n,e){const t=yr(ky(n,e)),s=ma(n.transactionQueueTree_,e);return RS(s,i=>{Ga(n,i)}),Ga(n,s),Iy(s,i=>{Ga(n,i)}),t}function Ga(n,e){const t=Yn(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(w(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(w(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Ut(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Fu(e,void 0):t.length=r+1,et(n.eventQueue_,yr(e),i);for(let o=0;o<s.length;o++)Vs(s[o])}}/**
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
 */function nb(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function sb(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Le(`Invalid query segment '${t}' in query '${n}'`)}return e}const qc=function(n,e){const t=ib(n),s=t.namespace;t.domain==="firebase.com"&&It(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&It("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||fT();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Vp(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new G(t.pathString)}},ib=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=nb(n.substring(u,h)));const d=sb(n.substring(Math.min(n.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),t=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const Gd="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",rb=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Gd.charAt(t%64),t=Math.floor(t/64);w(t===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Gd.charAt(e[i]);return w(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class Py{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ge(this.snapshot.exportVal())}}class Oy{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Gu{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return w(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */let ob=class{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new He;return zS(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){it("OnDisconnect.remove",this._path);const e=new He;return $d(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){it("OnDisconnect.set",this._path),Et("OnDisconnect.set",e,this._path,!1);const t=new He;return $d(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){it("OnDisconnect.setWithPriority",this._path),Et("OnDisconnect.setWithPriority",e,this._path,!1),Vu("OnDisconnect.setWithPriority",t,!1);const s=new He;return HS(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){it("OnDisconnect.update",this._path),Ty("OnDisconnect.update",e,this._path,!1);const t=new He;return YS(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}};/**
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
 */class ze{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return O(this._path)?null:gu(this._path)}get ref(){return new ot(this._repo,this._path)}get _queryIdentifier(){const e=Nd(this._queryParams),t=uu(e);return t==="{}"?"default":t}get _queryObject(){return Nd(this._queryParams)}isEqual(e){if(e=q(e),!(e instanceof ze))return!1;const t=this._repo===e._repo,s=mu(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+YT(this._path)}}function Ea(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function un(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===_t){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==Jt)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(n.hasEnd()){if(n.getIndexEndName()!==Nt)throw new Error(s);if(typeof t!="string")throw new Error(i)}}else if(n.getIndex()===Y){if(e!=null&&!Bi(e)||t!=null&&!Bi(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(w(n.getIndex()instanceof _u||n.getIndex()===vu,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Ta(n){if(n.hasStart()&&n.hasEnd()&&n.hasLimit()&&!n.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class ot extends ze{constructor(e,t){super(e,t,new ca,!1)}get parent(){const e=Qp(this._path);return e===null?null:new ot(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}let xs=class{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new G(e),s=Bn(this.ref,e);return new xs(this._node.getChild(t),s,Y)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new xs(i,Bn(this.ref,s),Y)))}hasChild(e){const t=new G(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function My(n,e){return n=q(n),n._checkNotDeleted("ref"),e!==void 0?Bn(n._root,e):n._root}function Kd(n,e){n=q(n),n._checkNotDeleted("refFromURL");const t=qc(e,n._repo.repoInfo_.nodeAdmin);Cy("refFromURL",t);const s=t.repoInfo;return!n._repo.repoInfo_.isCustomHost()&&s.host!==n._repo.repoInfo_.host&&It("refFromURL: Host name does not match the current database: (found "+s.host+" but expected "+n._repo.repoInfo_.host+")"),My(n,t.path.toString())}function Bn(n,e){return n=q(n),P(n._path)===null?VS("child","path",e,!1):$i("child","path",e,!1),new ot(n._repo,te(n._path,e))}function ab(n,e){n=q(n),it("push",n._path),Et("push",e,n._path,!0);const t=Ny(n._repo),s=rb(t),i=Bn(n,s),r=Bn(n,s);let o;return e!=null?o=Ku(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function cb(n){return it("remove",n._path),Ku(n,null)}function Ku(n,e){n=q(n),it("set",n._path),Et("set",e,n._path,!1);const t=new He;return qu(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function lb(n,e){n=q(n),it("setPriority",n._path),Vu("setPriority",e,!1);const t=new He;return qu(n._repo,te(n._path,".priority"),e,null,t.wrapCallback(()=>{})),t.promise}function ub(n,e,t){if(it("setWithPriority",n._path),Et("setWithPriority",e,n._path,!1),Vu("setWithPriority",t,!1),n.key===".length"||n.key===".keys")throw"setWithPriority failed: "+n.key+" is a read-only object.";const s=new He;return qu(n._repo,n._path,e,t,s.wrapCallback(()=>{})),s.promise}function hb(n,e){Ty("update",e,n._path,!1);const t=new He;return jS(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function db(n){n=q(n);const e=new Gu(()=>{}),t=new Ir(e);return WS(n._repo,n,t).then(s=>new xs(s,new ot(n._repo,n._path),n._queryParams.getIndex()))}class Ir{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Py("value",this,new xs(e.snapshotNode,new ot(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Oy(this,e,t):null}matches(e){return e instanceof Ir?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Ca{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Oy(this,e,t):null}createEvent(e,t){w(e.childName!=null,"Child events should have a childName.");const s=Bn(new ot(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Py(e.type,this,new xs(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ca?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Er(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=t,l=(u,h)=>{Uc(n._repo,n,a),c(u,h)};l.userCallback=t.userCallback,l.context=t.context,t=l}const o=new Gu(t,r||void 0),a=e==="value"?new Ir(o):new Ca(e,o);return XS(n._repo,n,a),()=>Uc(n._repo,n,a)}function Bc(n,e,t,s){return Er(n,"value",e,t,s)}function Wd(n,e,t,s){return Er(n,"child_added",e,t,s)}function jd(n,e,t,s){return Er(n,"child_changed",e,t,s)}function Qd(n,e,t,s){return Er(n,"child_moved",e,t,s)}function zd(n,e,t,s){return Er(n,"child_removed",e,t,s)}function Hd(n,e,t){let s=null;const i=t?new Gu(t):null;e==="value"?s=new Ir(i):e&&(s=new Ca(e,i)),Uc(n._repo,n,s)}class dt{}class Ly extends dt{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Et("endAt",this._value,e._path,!0);const t=Ac(e._queryParams,this._value,this._key);if(Ta(t),un(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ze(e._repo,e._path,t,e._orderByCalled)}}function fb(n,e){return vr("endAt","key",e,!0),new Ly(n,e)}class gb extends dt{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Et("endBefore",this._value,e._path,!1);const t=EC(e._queryParams,this._value,this._key);if(Ta(t),un(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ze(e._repo,e._path,t,e._orderByCalled)}}function mb(n,e){return vr("endBefore","key",e,!0),new gb(n,e)}class Fy extends dt{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Et("startAt",this._value,e._path,!0);const t=Nc(e._queryParams,this._value,this._key);if(Ta(t),un(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new ze(e._repo,e._path,t,e._orderByCalled)}}function pb(n=null,e){return vr("startAt","key",e,!0),new Fy(n,e)}class yb extends dt{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Et("startAfter",this._value,e._path,!1);const t=IC(e._queryParams,this._value,this._key);if(Ta(t),un(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new ze(e._repo,e._path,t,e._orderByCalled)}}function _b(n,e){return vr("startAfter","key",e,!0),new yb(n,e)}class vb extends dt{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new ze(e._repo,e._path,vC(e._queryParams,this._limit),e._orderByCalled)}}function wb(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new vb(n)}class Ib extends dt{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new ze(e._repo,e._path,wC(e._queryParams,this._limit),e._orderByCalled)}}function Eb(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Ib(n)}class Tb extends dt{constructor(e){super(),this._path=e}_apply(e){Ea(e,"orderByChild");const t=new G(this._path);if(O(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new _u(t),i=la(e._queryParams,s);return un(i),new ze(e._repo,e._path,i,!0)}}function Cb(n){if(n==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(n==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(n==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return $i("orderByChild","path",n,!1),new Tb(n)}class Sb extends dt{_apply(e){Ea(e,"orderByKey");const t=la(e._queryParams,_t);return un(t),new ze(e._repo,e._path,t,!0)}}function bb(){return new Sb}class xb extends dt{_apply(e){Ea(e,"orderByPriority");const t=la(e._queryParams,Y);return un(t),new ze(e._repo,e._path,t,!0)}}function Nb(){return new xb}class Ab extends dt{_apply(e){Ea(e,"orderByValue");const t=la(e._queryParams,vu);return un(t),new ze(e._repo,e._path,t,!0)}}function kb(){return new Ab}class Db extends dt{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(Et("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Ly(this._value,this._key)._apply(new Fy(this._value,this._key)._apply(e))}}function Rb(n,e){return vr("equalTo","key",e,!0),new Db(n,e)}function at(n,...e){let t=q(n);for(const s of e)t=s._apply(t);return t}uS(ot);mS(ot);/**
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
 */const Pb="FIREBASE_DATABASE_EMULATOR_HOST",$c={};let Ob=!1;function Mb(n,e,t,s){n.repoInfo_=new Vp(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams),s&&(n.authTokenProvider_=s)}function Vy(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||It("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ee("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=qc(r,i),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[Pb]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=qc(r,i),a=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new as(as.OWNER):new CT(n.name,n.options,e);Cy("Invalid Firebase Database URL",o),O(o.path)||It("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Fb(a,n,u,new TT(n.name,t));return new Vb(h,n)}function Lb(n,e){const t=$c[e];(!t||t[n.key]!==n)&&It(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Ay(n),delete t[n.key]}function Fb(n,e,t,s){let i=$c[e.name];i||(i={},$c[e.name]=i);let r=i[n.toURLString()];return r&&It("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new $S(n,Ob,t,s),i[n.toURLString()]=r,r}let Vb=class{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(GS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ot(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Lb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&It("Cannot call "+e+" on a deleted database.")}};function Uy(){Es.IS_TRANSPORT_INITIALIZED&&Le("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function Ub(){Uy(),Vt.forceDisallow()}function qb(){Uy(),tt.forceDisallow(),Vt.forceAllow()}function Bb(n,e,t,s={}){n=q(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&It("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&It('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new as(as.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Jd(s.mockUserToken,n.app.options.projectId);r=new as(o)}Mb(i,e,t,r)}function $b(n){n=q(n),n._checkNotDeleted("goOffline"),Ay(n._repo)}function Gb(n){n=q(n),n._checkNotDeleted("goOnline"),JS(n._repo)}function Kb(n,e){bp(n,e)}/**
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
 */function Wb(n){Ep(Xd),Yd(new Ki("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Vy(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),mi(hd,dd,n),mi(hd,dd,"esm2017")}/**
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
 */const jb={".sv":"timestamp"};function Qb(){return jb}function zb(n){return{".sv":{increment:n}}}/**
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
 */let Hb=class{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}};function Yb(n,e,t){var s;if(n=q(n),it("Reference.transaction",n._path),n.key===".length"||n.key===".keys")throw"Reference.transaction failed: "+n.key+" is a read-only object.";const i=(s=t==null?void 0:t.applyLocally)!==null&&s!==void 0?s:!0,r=new He,o=(c,l,u)=>{let h=null;c?r.reject(c):(h=new xs(u,new ot(n._repo,n._path),Y),r.resolve(new Hb(l,h)))},a=Bc(n,()=>{});return ZS(n._repo,n._path,e,o,a,i),r.promise}St.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};St.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Wb();const Xb="@firebase/database-compat",Jb="0.3.0";/**
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
 */const Zb=new Gc("@firebase/database-compat"),qy=function(n){const e="FIREBASE WARNING: "+n;Zb.warn(e)};/**
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
 */const e0=function(n,e,t,s){if(!(s&&t===void 0)&&typeof t!="boolean")throw new Error(rt(n,e)+"must be a boolean.")},t0=function(n,e,t){if(!(t&&e===void 0))switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(rt(n,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
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
 */class n0{constructor(e){this._delegate=e}cancel(e){A("OnDisconnect.cancel",0,1,arguments.length),ve("OnDisconnect.cancel","onComplete",e,!0);const t=this._delegate.cancel();return e&&t.then(()=>e(null),s=>e(s)),t}remove(e){A("OnDisconnect.remove",0,1,arguments.length),ve("OnDisconnect.remove","onComplete",e,!0);const t=this._delegate.remove();return e&&t.then(()=>e(null),s=>e(s)),t}set(e,t){A("OnDisconnect.set",1,2,arguments.length),ve("OnDisconnect.set","onComplete",t,!0);const s=this._delegate.set(e);return t&&s.then(()=>t(null),i=>t(i)),s}setWithPriority(e,t,s){A("OnDisconnect.setWithPriority",2,3,arguments.length),ve("OnDisconnect.setWithPriority","onComplete",s,!0);const i=this._delegate.setWithPriority(e,t);return s&&i.then(()=>s(null),r=>s(r)),i}update(e,t){if(A("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let r=0;r<e.length;++r)i[""+r]=e[r];e=i,qy("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}ve("OnDisconnect.update","onComplete",t,!0);const s=this._delegate.update(e);return t&&s.then(()=>t(null),i=>t(i)),s}}/**
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
 */class s0{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return A("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
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
 */class Gt{constructor(e,t){this._database=e,this._delegate=t}val(){return A("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return A("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return A("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return A("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return A("DataSnapshot.child",0,1,arguments.length),e=String(e),$i("DataSnapshot.child","path",e,!1),new Gt(this._database,this._delegate.child(e))}hasChild(e){return A("DataSnapshot.hasChild",1,1,arguments.length),$i("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return A("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return A("DataSnapshot.forEach",1,1,arguments.length),ve("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(t=>e(new Gt(this._database,t)))}hasChildren(){return A("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return A("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return A("DataSnapshot.ref",0,0,arguments.length),new Ye(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class Ne{constructor(e,t){this.database=e,this._delegate=t}on(e,t,s,i){var r;A("Query.on",2,4,arguments.length),ve("Query.on","callback",t,!1);const o=Ne.getCancelAndContextArgs_("Query.on",s,i),a=(l,u)=>{t.call(o.context,new Gt(this.database,l),u)};a.userCallback=t,a.context=o.context;const c=(r=o.cancel)===null||r===void 0?void 0:r.bind(o.context);switch(e){case"value":return Bc(this._delegate,a,c),t;case"child_added":return Wd(this._delegate,a,c),t;case"child_removed":return zd(this._delegate,a,c),t;case"child_changed":return jd(this._delegate,a,c),t;case"child_moved":return Qd(this._delegate,a,c),t;default:throw new Error(rt("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,t,s){if(A("Query.off",0,3,arguments.length),t0("Query.off",e,!0),ve("Query.off","callback",t,!0),Wu("Query.off","context",s,!0),t){const i=()=>{};i.userCallback=t,i.context=s,Hd(this._delegate,e,i)}else Hd(this._delegate,e)}get(){return db(this._delegate).then(e=>new Gt(this.database,e))}once(e,t,s,i){A("Query.once",1,4,arguments.length),ve("Query.once","callback",t,!0);const r=Ne.getCancelAndContextArgs_("Query.once",s,i),o=new He,a=(l,u)=>{const h=new Gt(this.database,l);t&&t.call(r.context,h,u),o.resolve(h)};a.userCallback=t,a.context=r.context;const c=l=>{r.cancel&&r.cancel.call(r.context,l),o.reject(l)};switch(e){case"value":Bc(this._delegate,a,c,{onlyOnce:!0});break;case"child_added":Wd(this._delegate,a,c,{onlyOnce:!0});break;case"child_removed":zd(this._delegate,a,c,{onlyOnce:!0});break;case"child_changed":jd(this._delegate,a,c,{onlyOnce:!0});break;case"child_moved":Qd(this._delegate,a,c,{onlyOnce:!0});break;default:throw new Error(rt("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return A("Query.limitToFirst",1,1,arguments.length),new Ne(this.database,at(this._delegate,wb(e)))}limitToLast(e){return A("Query.limitToLast",1,1,arguments.length),new Ne(this.database,at(this._delegate,Eb(e)))}orderByChild(e){return A("Query.orderByChild",1,1,arguments.length),new Ne(this.database,at(this._delegate,Cb(e)))}orderByKey(){return A("Query.orderByKey",0,0,arguments.length),new Ne(this.database,at(this._delegate,bb()))}orderByPriority(){return A("Query.orderByPriority",0,0,arguments.length),new Ne(this.database,at(this._delegate,Nb()))}orderByValue(){return A("Query.orderByValue",0,0,arguments.length),new Ne(this.database,at(this._delegate,kb()))}startAt(e=null,t){return A("Query.startAt",0,2,arguments.length),new Ne(this.database,at(this._delegate,pb(e,t)))}startAfter(e=null,t){return A("Query.startAfter",0,2,arguments.length),new Ne(this.database,at(this._delegate,_b(e,t)))}endAt(e=null,t){return A("Query.endAt",0,2,arguments.length),new Ne(this.database,at(this._delegate,fb(e,t)))}endBefore(e=null,t){return A("Query.endBefore",0,2,arguments.length),new Ne(this.database,at(this._delegate,mb(e,t)))}equalTo(e,t){return A("Query.equalTo",1,2,arguments.length),new Ne(this.database,at(this._delegate,Rb(e,t)))}toString(){return A("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return A("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(A("Query.isEqual",1,1,arguments.length),!(e instanceof Ne)){const t="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(t)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,t,s){const i={cancel:void 0,context:void 0};if(t&&s)i.cancel=t,ve(e,"cancel",i.cancel,!0),i.context=s,Wu(e,"context",i.context,!0);else if(t)if(typeof t=="object"&&t!==null)i.context=t;else if(typeof t=="function")i.cancel=t;else throw new Error(rt(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return i}get ref(){return new Ye(this.database,new ot(this._delegate._repo,this._delegate._path))}}class Ye extends Ne{constructor(e,t){super(e,new ze(t._repo,t._path,new ca,!1)),this.database=e,this._delegate=t}getKey(){return A("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return A("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new Ye(this.database,Bn(this._delegate,e))}getParent(){A("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new Ye(this.database,e):null}getRoot(){return A("Reference.root",0,0,arguments.length),new Ye(this.database,this._delegate.root)}set(e,t){A("Reference.set",1,2,arguments.length),ve("Reference.set","onComplete",t,!0);const s=Ku(this._delegate,e);return t&&s.then(()=>t(null),i=>t(i)),s}update(e,t){if(A("Reference.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let r=0;r<e.length;++r)i[""+r]=e[r];e=i,qy("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}it("Reference.update",this._delegate._path),ve("Reference.update","onComplete",t,!0);const s=hb(this._delegate,e);return t&&s.then(()=>t(null),i=>t(i)),s}setWithPriority(e,t,s){A("Reference.setWithPriority",2,3,arguments.length),ve("Reference.setWithPriority","onComplete",s,!0);const i=ub(this._delegate,e,t);return s&&i.then(()=>s(null),r=>s(r)),i}remove(e){A("Reference.remove",0,1,arguments.length),ve("Reference.remove","onComplete",e,!0);const t=cb(this._delegate);return e&&t.then(()=>e(null),s=>e(s)),t}transaction(e,t,s){A("Reference.transaction",1,3,arguments.length),ve("Reference.transaction","transactionUpdate",e,!1),ve("Reference.transaction","onComplete",t,!0),e0("Reference.transaction","applyLocally",s,!0);const i=Yb(this._delegate,e,{applyLocally:s}).then(r=>new s0(r.committed,new Gt(this.database,r.snapshot)));return t&&i.then(r=>t(null,r.committed,r.snapshot),r=>t(r,!1,null)),i}setPriority(e,t){A("Reference.setPriority",1,2,arguments.length),ve("Reference.setPriority","onComplete",t,!0);const s=lb(this._delegate,e);return t&&s.then(()=>t(null),i=>t(i)),s}push(e,t){A("Reference.push",0,2,arguments.length),ve("Reference.push","onComplete",t,!0);const s=ab(this._delegate,e),i=s.then(o=>new Ye(this.database,o));t&&i.then(()=>t(null),o=>t(o));const r=new Ye(this.database,s);return r.then=i.then.bind(i),r.catch=i.catch.bind(i,void 0),r}onDisconnect(){return it("Reference.onDisconnect",this._delegate._path),new n0(new ob(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
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
 */class Gi{constructor(e,t){this._delegate=e,this.app=t,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:Ub,forceLongPolling:qb}}useEmulator(e,t,s={}){Bb(this._delegate,e,t,s)}ref(e){if(A("database.ref",0,1,arguments.length),e instanceof Ye){const t=Kd(this._delegate,e.toString());return new Ye(this,t)}else{const t=My(this._delegate,e);return new Ye(this,t)}}refFromURL(e){A("database.refFromURL",1,1,arguments.length);const s=Kd(this._delegate,e);return new Ye(this,s)}goOffline(){return A("database.goOffline",0,0,arguments.length),$b(this._delegate)}goOnline(){return A("database.goOnline",0,0,arguments.length),Gb(this._delegate)}}Gi.ServerValue={TIMESTAMP:Qb(),increment:n=>zb(n)};/**
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
 */function i0({app:n,url:e,version:t,customAuthImpl:s,namespace:i,nodeAdmin:r=!1}){Ep(t);const o=new Zy("auth-internal",new e_("database-standalone"));return o.setComponent(new Ki("auth-internal",()=>s,"PRIVATE")),{instance:new Gi(Vy(n,o,void 0,e,r),n),namespace:i}}var r0=Object.freeze({__proto__:null,initStandalone:i0});/**
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
 */const o0=Gi.ServerValue;function a0(n){n.INTERNAL.registerComponent(new Ki("database-compat",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app-compat").getImmediate(),i=e.getProvider("database").getImmediate({identifier:t});return new Gi(i,s)},"PUBLIC").setServiceProps({Reference:Ye,Query:Ne,Database:Gi,DataSnapshot:Gt,enableLogging:Kb,INTERNAL:r0,ServerValue:o0}).setMultipleInstances(!0)),n.registerVersion(Xb,Jb)}a0(pi);const c0={apiKey:"AIzaSyDUdUd05bhQNrvuxXnqbErencxLKpKt9jw",authDomain:"lara-3f721.firebaseapp.com",databaseURL:"https://lara-3f721-default-rtdb.firebaseio.com",projectId:"lara-3f721",storageBucket:"lara-3f721.appspot.com",messagingSenderId:"289041287227",appId:"1:289041287227:web:b768a2d08bfdf3c7b2b41e"};pi.initializeApp(c0);pi.apps.length||pi.initializeApp(firebaseConfig);t_();
