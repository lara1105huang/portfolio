(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Di(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function gs(e){if(B(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=ge(r)?mf(r):gs(r);if(s)for(const i in s)t[i]=s[i]}return t}else{if(ge(e))return e;if(se(e))return e}}const hf=/;(?![^(]*\))/g,pf=/:([^]+)/,gf=/\/\*.*?\*\//gs;function mf(e){const t={};return e.replace(gf,"").split(hf).forEach(n=>{if(n){const r=n.split(pf);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function qe(e){let t="";if(ge(e))t=e;else if(B(e))for(let n=0;n<e.length;n++){const r=qe(e[n]);r&&(t+=r+" ")}else if(se(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const _f="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vf=Di(_f);function Oc(e){return!!e||e===""}function yf(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Yr(e[r],t[r]);return n}function Yr(e,t){if(e===t)return!0;let n=No(e),r=No(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=or(e),r=or(t),n||r)return e===t;if(n=B(e),r=B(t),n||r)return n&&r?yf(e,t):!1;if(n=se(e),r=se(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const o in e){const a=e.hasOwnProperty(o),c=t.hasOwnProperty(o);if(a&&!c||!a&&c||!Yr(e[o],t[o]))return!1}}return String(e)===String(t)}const Ac=e=>ge(e)?e:e==null?"":B(e)||se(e)&&(e.toString===xc||!K(e.toString))?JSON.stringify(e,Rc,2):String(e),Rc=(e,t)=>t&&t.__v_isRef?Rc(e,t.value):Tn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Pc(t)?{[`Set(${t.size})`]:[...t.values()]}:se(t)&&!B(t)&&!Nc(t)?String(t):t,pe={},In=[],je=()=>{},bf=()=>!1,wf=/^on[^a-z]/,ms=e=>wf.test(e),Mi=e=>e.startsWith("onUpdate:"),Oe=Object.assign,$i=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ef=Object.prototype.hasOwnProperty,Z=(e,t)=>Ef.call(e,t),B=Array.isArray,Tn=e=>Er(e)==="[object Map]",Pc=e=>Er(e)==="[object Set]",No=e=>Er(e)==="[object Date]",K=e=>typeof e=="function",ge=e=>typeof e=="string",or=e=>typeof e=="symbol",se=e=>e!==null&&typeof e=="object",kc=e=>se(e)&&K(e.then)&&K(e.catch),xc=Object.prototype.toString,Er=e=>xc.call(e),If=e=>Er(e).slice(8,-1),Nc=e=>Er(e)==="[object Object]",Ui=e=>ge(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Hr=Di(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_s=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Tf=/-(\w)/g,Ye=_s(e=>e.replace(Tf,(t,n)=>n?n.toUpperCase():"")),Cf=/\B([A-Z])/g,fn=_s(e=>e.replace(Cf,"-$1").toLowerCase()),vs=_s(e=>e.charAt(0).toUpperCase()+e.slice(1)),Hs=_s(e=>e?`on${vs(e)}`:""),ar=(e,t)=>!Object.is(e,t),zr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Qr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},cr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Lo;const Sf=()=>Lo||(Lo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Me;class Lc{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!t&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Me;try{return Me=this,t()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this.active=!1}}}function Dc(e){return new Lc(e)}function Of(e,t=Me){t&&t.active&&t.effects.push(e)}function Mc(){return Me}function $c(e){Me&&Me.cleanups.push(e)}const Fi=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Uc=e=>(e.w&Mt)>0,Fc=e=>(e.n&Mt)>0,Af=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Mt},Rf=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];Uc(s)&&!Fc(s)?s.delete(e):t[n++]=s,s.w&=~Mt,s.n&=~Mt}t.length=n}},ai=new WeakMap;let qn=0,Mt=1;const ci=30;let Ge;const tn=Symbol(""),li=Symbol("");class Bi{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Of(this,r)}run(){if(!this.active)return this.fn();let t=Ge,n=xt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ge,Ge=this,xt=!0,Mt=1<<++qn,qn<=ci?Af(this):Do(this),this.fn()}finally{qn<=ci&&Rf(this),Mt=1<<--qn,Ge=this.parent,xt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ge===this?this.deferStop=!0:this.active&&(Do(this),this.onStop&&this.onStop(),this.active=!1)}}function Do(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let xt=!0;const Bc=[];function Mn(){Bc.push(xt),xt=!1}function $n(){const e=Bc.pop();xt=e===void 0?!0:e}function Ue(e,t,n){if(xt&&Ge){let r=ai.get(e);r||ai.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=Fi()),jc(s)}}function jc(e,t){let n=!1;qn<=ci?Fc(e)||(e.n|=Mt,n=!Uc(e)):n=!e.has(Ge),n&&(e.add(Ge),Ge.deps.push(e))}function pt(e,t,n,r,s,i){const o=ai.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&B(e)){const c=cr(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":B(e)?Ui(n)&&a.push(o.get("length")):(a.push(o.get(tn)),Tn(e)&&a.push(o.get(li)));break;case"delete":B(e)||(a.push(o.get(tn)),Tn(e)&&a.push(o.get(li)));break;case"set":Tn(e)&&a.push(o.get(tn));break}if(a.length===1)a[0]&&ui(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ui(Fi(c))}}function ui(e,t){const n=B(e)?e:[...e];for(const r of n)r.computed&&Mo(r);for(const r of n)r.computed||Mo(r)}function Mo(e,t){(e!==Ge||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Pf=Di("__proto__,__v_isRef,__isVue"),Hc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(or)),kf=ji(),xf=ji(!1,!0),Nf=ji(!0),$o=Lf();function Lf(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=ne(this);for(let i=0,o=this.length;i<o;i++)Ue(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(ne)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Mn();const r=ne(this)[t].apply(this,n);return $n(),r}}),e}function ji(e=!1,t=!1){return function(r,s,i){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&i===(e?t?Yf:qc:t?Kc:Wc).get(r))return r;const o=B(r);if(!e&&o&&Z($o,s))return Reflect.get($o,s,i);const a=Reflect.get(r,s,i);return(or(s)?Hc.has(s):Pf(s))||(e||Ue(r,"get",s),t)?a:ye(a)?o&&Ui(s)?a:a.value:se(a)?e?Vi(a):Un(a):a}}const Df=zc(),Mf=zc(!0);function zc(e=!1){return function(n,r,s,i){let o=n[r];if(An(o)&&ye(o)&&!ye(s))return!1;if(!e&&(!Xr(s)&&!An(s)&&(o=ne(o),s=ne(s)),!B(n)&&ye(o)&&!ye(s)))return o.value=s,!0;const a=B(n)&&Ui(r)?Number(r)<n.length:Z(n,r),c=Reflect.set(n,r,s,i);return n===ne(i)&&(a?ar(s,o)&&pt(n,"set",r,s):pt(n,"add",r,s)),c}}function $f(e,t){const n=Z(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&pt(e,"delete",t,void 0),r}function Uf(e,t){const n=Reflect.has(e,t);return(!or(t)||!Hc.has(t))&&Ue(e,"has",t),n}function Ff(e){return Ue(e,"iterate",B(e)?"length":tn),Reflect.ownKeys(e)}const Vc={get:kf,set:Df,deleteProperty:$f,has:Uf,ownKeys:Ff},Bf={get:Nf,set(e,t){return!0},deleteProperty(e,t){return!0}},jf=Oe({},Vc,{get:xf,set:Mf}),Hi=e=>e,ys=e=>Reflect.getPrototypeOf(e);function Nr(e,t,n=!1,r=!1){e=e.__v_raw;const s=ne(e),i=ne(t);n||(t!==i&&Ue(s,"get",t),Ue(s,"get",i));const{has:o}=ys(s),a=r?Hi:n?Ki:lr;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function Lr(e,t=!1){const n=this.__v_raw,r=ne(n),s=ne(e);return t||(e!==s&&Ue(r,"has",e),Ue(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Dr(e,t=!1){return e=e.__v_raw,!t&&Ue(ne(e),"iterate",tn),Reflect.get(e,"size",e)}function Uo(e){e=ne(e);const t=ne(this);return ys(t).has.call(t,e)||(t.add(e),pt(t,"add",e,e)),this}function Fo(e,t){t=ne(t);const n=ne(this),{has:r,get:s}=ys(n);let i=r.call(n,e);i||(e=ne(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?ar(t,o)&&pt(n,"set",e,t):pt(n,"add",e,t),this}function Bo(e){const t=ne(this),{has:n,get:r}=ys(t);let s=n.call(t,e);s||(e=ne(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&pt(t,"delete",e,void 0),i}function jo(){const e=ne(this),t=e.size!==0,n=e.clear();return t&&pt(e,"clear",void 0,void 0),n}function Mr(e,t){return function(r,s){const i=this,o=i.__v_raw,a=ne(o),c=t?Hi:e?Ki:lr;return!e&&Ue(a,"iterate",tn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function $r(e,t,n){return function(...r){const s=this.__v_raw,i=ne(s),o=Tn(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?Hi:t?Ki:lr;return!t&&Ue(i,"iterate",c?li:tn),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function vt(e){return function(...t){return e==="delete"?!1:this}}function Hf(){const e={get(i){return Nr(this,i)},get size(){return Dr(this)},has:Lr,add:Uo,set:Fo,delete:Bo,clear:jo,forEach:Mr(!1,!1)},t={get(i){return Nr(this,i,!1,!0)},get size(){return Dr(this)},has:Lr,add:Uo,set:Fo,delete:Bo,clear:jo,forEach:Mr(!1,!0)},n={get(i){return Nr(this,i,!0)},get size(){return Dr(this,!0)},has(i){return Lr.call(this,i,!0)},add:vt("add"),set:vt("set"),delete:vt("delete"),clear:vt("clear"),forEach:Mr(!0,!1)},r={get(i){return Nr(this,i,!0,!0)},get size(){return Dr(this,!0)},has(i){return Lr.call(this,i,!0)},add:vt("add"),set:vt("set"),delete:vt("delete"),clear:vt("clear"),forEach:Mr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=$r(i,!1,!1),n[i]=$r(i,!0,!1),t[i]=$r(i,!1,!0),r[i]=$r(i,!0,!0)}),[e,n,t,r]}const[zf,Vf,Wf,Kf]=Hf();function zi(e,t){const n=t?e?Kf:Wf:e?Vf:zf;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(Z(n,s)&&s in r?n:r,s,i)}const qf={get:zi(!1,!1)},Gf={get:zi(!1,!0)},Jf={get:zi(!0,!1)},Wc=new WeakMap,Kc=new WeakMap,qc=new WeakMap,Yf=new WeakMap;function Qf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xf(e){return e.__v_skip||!Object.isExtensible(e)?0:Qf(If(e))}function Un(e){return An(e)?e:Wi(e,!1,Vc,qf,Wc)}function Gc(e){return Wi(e,!1,jf,Gf,Kc)}function Vi(e){return Wi(e,!0,Bf,Jf,qc)}function Wi(e,t,n,r,s){if(!se(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=Xf(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function dt(e){return An(e)?dt(e.__v_raw):!!(e&&e.__v_isReactive)}function An(e){return!!(e&&e.__v_isReadonly)}function Xr(e){return!!(e&&e.__v_isShallow)}function Jc(e){return dt(e)||An(e)}function ne(e){const t=e&&e.__v_raw;return t?ne(t):e}function Rn(e){return Qr(e,"__v_skip",!0),e}const lr=e=>se(e)?Un(e):e,Ki=e=>se(e)?Vi(e):e;function Yc(e){xt&&Ge&&(e=ne(e),jc(e.dep||(e.dep=Fi())))}function qi(e,t){e=ne(e),e.dep&&ui(e.dep)}function ye(e){return!!(e&&e.__v_isRef===!0)}function Ee(e){return Xc(e,!1)}function Qc(e){return Xc(e,!0)}function Xc(e,t){return ye(e)?e:new Zf(e,t)}class Zf{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ne(t),this._value=n?t:lr(t)}get value(){return Yc(this),this._value}set value(t){const n=this.__v_isShallow||Xr(t)||An(t);t=n?t:ne(t),ar(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:lr(t),qi(this))}}function Qw(e){qi(e)}function G(e){return ye(e)?e.value:e}const ed={get:(e,t,n)=>G(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return ye(s)&&!ye(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Zc(e){return dt(e)?e:new Proxy(e,ed)}function td(e){const t=B(e)?new Array(e.length):{};for(const n in e)t[n]=el(e,n);return t}class nd{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function el(e,t,n){const r=e[t];return ye(r)?r:new nd(e,t,n)}var tl;class rd{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[tl]=!1,this._dirty=!0,this.effect=new Bi(t,()=>{this._dirty||(this._dirty=!0,qi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=ne(this);return Yc(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}tl="__v_isReadonly";function sd(e,t,n=!1){let r,s;const i=K(e);return i?(r=e,s=je):(r=e.get,s=e.set),new rd(r,s,i||!s,n)}function id(e,...t){}function Nt(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){bs(i,t,n)}return s}function He(e,t,n,r){if(K(e)){const i=Nt(e,t,n,r);return i&&kc(i)&&i.catch(o=>{bs(o,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(He(e[i],t,n,r));return s}function bs(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){Nt(c,null,10,[e,o,a]);return}}od(e,n,s,r)}function od(e,t,n,r=!0){console.error(e)}let ur=!1,fi=!1;const Ae=[];let rt=0;const Cn=[];let lt=null,Jt=0;const nl=Promise.resolve();let Gi=null;function ws(e){const t=Gi||nl;return e?t.then(this?e.bind(this):e):t}function ad(e){let t=rt+1,n=Ae.length;for(;t<n;){const r=t+n>>>1;fr(Ae[r])<e?t=r+1:n=r}return t}function Ji(e){(!Ae.length||!Ae.includes(e,ur&&e.allowRecurse?rt+1:rt))&&(e.id==null?Ae.push(e):Ae.splice(ad(e.id),0,e),rl())}function rl(){!ur&&!fi&&(fi=!0,Gi=nl.then(il))}function cd(e){const t=Ae.indexOf(e);t>rt&&Ae.splice(t,1)}function ld(e){B(e)?Cn.push(...e):(!lt||!lt.includes(e,e.allowRecurse?Jt+1:Jt))&&Cn.push(e),rl()}function Ho(e,t=ur?rt+1:0){for(;t<Ae.length;t++){const n=Ae[t];n&&n.pre&&(Ae.splice(t,1),t--,n())}}function sl(e){if(Cn.length){const t=[...new Set(Cn)];if(Cn.length=0,lt){lt.push(...t);return}for(lt=t,lt.sort((n,r)=>fr(n)-fr(r)),Jt=0;Jt<lt.length;Jt++)lt[Jt]();lt=null,Jt=0}}const fr=e=>e.id==null?1/0:e.id,ud=(e,t)=>{const n=fr(e)-fr(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function il(e){fi=!1,ur=!0,Ae.sort(ud);const t=je;try{for(rt=0;rt<Ae.length;rt++){const n=Ae[rt];n&&n.active!==!1&&Nt(n,null,14)}}finally{rt=0,Ae.length=0,sl(),ur=!1,Gi=null,(Ae.length||Cn.length)&&il()}}function fd(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||pe;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=r[u]||pe;h&&(s=n.map(g=>ge(g)?g.trim():g)),f&&(s=n.map(cr))}let a,c=r[a=Hs(t)]||r[a=Hs(Ye(t))];!c&&i&&(c=r[a=Hs(fn(t))]),c&&He(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,He(l,e,6,s)}}function ol(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!K(e)){const c=l=>{const u=ol(l,t,!0);u&&(a=!0,Oe(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(se(e)&&r.set(e,null),null):(B(i)?i.forEach(c=>o[c]=null):Oe(o,i),se(e)&&r.set(e,o),o)}function Es(e,t){return!e||!ms(t)?!1:(t=t.slice(2).replace(/Once$/,""),Z(e,t[0].toLowerCase()+t.slice(1))||Z(e,fn(t))||Z(e,t))}let Se=null,al=null;function Zr(e){const t=Se;return Se=e,al=e&&e.type.__scopeId||null,t}function Yn(e,t=Se,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Zo(-1);const i=Zr(t);let o;try{o=e(...s)}finally{Zr(i),r._d&&Zo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function zs(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:h,setupState:g,ctx:m,inheritAttrs:y}=e;let R,S;const D=Zr(e);try{if(n.shapeFlag&4){const k=s||r;R=nt(u.call(k,k,f,i,g,h,m)),S=c}else{const k=t;R=nt(k.length>1?k(i,{attrs:c,slots:a,emit:l}):k(i,null)),S=t.props?c:dd(c)}}catch(k){tr.length=0,bs(k,e,1),R=Ie(ze)}let x=R;if(S&&y!==!1){const k=Object.keys(S),{shapeFlag:H}=x;k.length&&H&7&&(o&&k.some(Mi)&&(S=hd(S,o)),x=$t(x,S))}return n.dirs&&(x=$t(x),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),R=x,Zr(D),R}const dd=e=>{let t;for(const n in e)(n==="class"||n==="style"||ms(n))&&((t||(t={}))[n]=e[n]);return t},hd=(e,t)=>{const n={};for(const r in e)(!Mi(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function pd(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?zo(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==r[h]&&!Es(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?zo(r,o,l):!0:!!o;return!1}function zo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Es(n,i))return!0}return!1}function gd({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const md=e=>e.__isSuspense;function _d(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):ld(e)}function Qn(e,t){if(Ce){let n=Ce.provides;const r=Ce.parent&&Ce.parent.provides;r===n&&(n=Ce.provides=Object.create(r)),n[e]=t}}function Re(e,t,n=!1){const r=Ce||Se;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&K(t)?t.call(r.proxy):t}}function vd(e,t){return Yi(e,null,t)}const Ur={};function it(e,t,n){return Yi(e,t,n)}function Yi(e,t,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=pe){const a=Ce;let c,l=!1,u=!1;if(ye(e)?(c=()=>e.value,l=Xr(e)):dt(e)?(c=()=>e,r=!0):B(e)?(u=!0,l=e.some(x=>dt(x)||Xr(x)),c=()=>e.map(x=>{if(ye(x))return x.value;if(dt(x))return en(x);if(K(x))return Nt(x,a,2)})):K(e)?t?c=()=>Nt(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),He(e,a,3,[h])}:c=je,t&&r){const x=c;c=()=>en(x())}let f,h=x=>{f=S.onStop=()=>{Nt(x,a,4)}},g;if(hr)if(h=je,t?n&&He(t,a,3,[c(),u?[]:void 0,h]):c(),s==="sync"){const x=dh();g=x.__watcherHandles||(x.__watcherHandles=[])}else return je;let m=u?new Array(e.length).fill(Ur):Ur;const y=()=>{if(S.active)if(t){const x=S.run();(r||l||(u?x.some((k,H)=>ar(k,m[H])):ar(x,m)))&&(f&&f(),He(t,a,3,[x,m===Ur?void 0:u&&m[0]===Ur?[]:m,h]),m=x)}else S.run()};y.allowRecurse=!!t;let R;s==="sync"?R=y:s==="post"?R=()=>Le(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),R=()=>Ji(y));const S=new Bi(c,R);t?n?y():m=S.run():s==="post"?Le(S.run.bind(S),a&&a.suspense):S.run();const D=()=>{S.stop(),a&&a.scope&&$i(a.scope.effects,S)};return g&&g.push(D),D}function yd(e,t,n){const r=this.proxy,s=ge(e)?e.includes(".")?cl(r,e):()=>r[e]:e.bind(r,r);let i;K(t)?i=t:(i=t.handler,n=t);const o=Ce;kn(this);const a=Yi(s,i.bind(r),n);return o?kn(o):nn(),a}function cl(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function en(e,t){if(!se(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ye(e))en(e.value,t);else if(B(e))for(let n=0;n<e.length;n++)en(e[n],t);else if(Pc(e)||Tn(e))e.forEach(n=>{en(n,t)});else if(Nc(e))for(const n in e)en(e[n],t);return e}function bd(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ir(()=>{e.isMounted=!0}),hl(()=>{e.isUnmounting=!0}),e}const Fe=[Function,Array],wd={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fe,onEnter:Fe,onAfterEnter:Fe,onEnterCancelled:Fe,onBeforeLeave:Fe,onLeave:Fe,onAfterLeave:Fe,onLeaveCancelled:Fe,onBeforeAppear:Fe,onAppear:Fe,onAfterAppear:Fe,onAppearCancelled:Fe},setup(e,{slots:t}){const n=dn(),r=bd();let s;return()=>{const i=t.default&&fl(t.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const y of i)if(y.type!==ze){o=y;break}}const a=ne(e),{mode:c}=a;if(r.isLeaving)return Vs(o);const l=Vo(o);if(!l)return Vs(o);const u=di(l,a,r,n);hi(l,u);const f=n.subTree,h=f&&Vo(f);let g=!1;const{getTransitionKey:m}=l.type;if(m){const y=m();s===void 0?s=y:y!==s&&(s=y,g=!0)}if(h&&h.type!==ze&&(!Qt(l,h)||g)){const y=di(h,a,r,n);if(hi(h,y),c==="out-in")return r.isLeaving=!0,y.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Vs(o);c==="in-out"&&l.type!==ze&&(y.delayLeave=(R,S,D)=>{const x=ul(r,h);x[String(h.key)]=h,R._leaveCb=()=>{S(),R._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=D})}return o}}},ll=wd;function ul(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function di(e,t,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:y,onAppear:R,onAfterAppear:S,onAppearCancelled:D}=t,x=String(e.key),k=ul(n,e),H=(O,V)=>{O&&He(O,r,9,V)},Q=(O,V)=>{const q=V[1];H(O,V),B(O)?O.every(re=>re.length<=1)&&q():O.length<=1&&q()},j={mode:i,persisted:o,beforeEnter(O){let V=a;if(!n.isMounted)if(s)V=y||a;else return;O._leaveCb&&O._leaveCb(!0);const q=k[x];q&&Qt(e,q)&&q.el._leaveCb&&q.el._leaveCb(),H(V,[O])},enter(O){let V=c,q=l,re=u;if(!n.isMounted)if(s)V=R||c,q=S||l,re=D||u;else return;let L=!1;const le=O._enterCb=me=>{L||(L=!0,me?H(re,[O]):H(q,[O]),j.delayedLeave&&j.delayedLeave(),O._enterCb=void 0)};V?Q(V,[O,le]):le()},leave(O,V){const q=String(e.key);if(O._enterCb&&O._enterCb(!0),n.isUnmounting)return V();H(f,[O]);let re=!1;const L=O._leaveCb=le=>{re||(re=!0,V(),le?H(m,[O]):H(g,[O]),O._leaveCb=void 0,k[q]===e&&delete k[q])};k[q]=e,h?Q(h,[O,L]):L()},clone(O){return di(O,t,n,r)}};return j}function Vs(e){if(Is(e))return e=$t(e),e.children=null,e}function Vo(e){return Is(e)?e.children?e.children[0]:void 0:e}function hi(e,t){e.shapeFlag&6&&e.component?hi(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function fl(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===$e?(o.patchFlag&128&&s++,r=r.concat(fl(o.children,t,a))):(t||o.type!==ze)&&r.push(a!=null?$t(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Ze(e){return K(e)?{setup:e,name:e.name}:e}const Xn=e=>!!e.type.__asyncLoader,Is=e=>e.type.__isKeepAlive;function Ed(e,t){dl(e,"a",t)}function Id(e,t){dl(e,"da",t)}function dl(e,t,n=Ce){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Ts(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Is(s.parent.vnode)&&Td(r,t,n,s),s=s.parent}}function Td(e,t,n,r){const s=Ts(t,e,r,!0);pl(()=>{$i(r[t],s)},n)}function Ts(e,t,n=Ce,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Mn(),kn(n);const a=He(t,n,e,o);return nn(),$n(),a});return r?s.unshift(i):s.push(i),i}}const mt=e=>(t,n=Ce)=>(!hr||e==="sp")&&Ts(e,(...r)=>t(...r),n),Cd=mt("bm"),Ir=mt("m"),Sd=mt("bu"),Od=mt("u"),hl=mt("bum"),pl=mt("um"),Ad=mt("sp"),Rd=mt("rtg"),Pd=mt("rtc");function kd(e,t=Ce){Ts("ec",e,t)}function gl(e,t){const n=Se;if(n===null)return e;const r=As(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,a,c,l=pe]=t[i];o&&(K(o)&&(o={mounted:o,updated:o}),o.deep&&en(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return e}function Ht(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Mn(),He(c,n,8,[e.el,a,e,t]),$n())}}const Qi="components",xd="directives";function ml(e,t){return Xi(Qi,e,!0,t)||e}const _l=Symbol();function Nd(e){return ge(e)?Xi(Qi,e,!1)||e:e||_l}function Xw(e){return Xi(xd,e)}function Xi(e,t,n=!0,r=!1){const s=Se||Ce;if(s){const i=s.type;if(e===Qi){const a=lh(i,!1);if(a&&(a===t||a===Ye(t)||a===vs(Ye(t))))return i}const o=Wo(s[e]||i[e],t)||Wo(s.appContext[e],t);return!o&&r?i:o}}function Wo(e,t){return e&&(e[t]||e[Ye(t)]||e[vs(Ye(t))])}function Zw(e,t,n,r){let s;const i=n&&n[r];if(B(e)||ge(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i&&i[o])}else if(se(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=t(e[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function e2(e,t){for(let n=0;n<t.length;n++){const r=t[n];if(B(r))for(let s=0;s<r.length;s++)e[r[s].name]=r[s].fn;else r&&(e[r.name]=r.key?(...s)=>{const i=r.fn(...s);return i&&(i.key=r.key),i}:r.fn)}return e}function Cs(e,t,n={},r,s){if(Se.isCE||Se.parent&&Xn(Se.parent)&&Se.parent.isCE)return t!=="default"&&(n.name=t),Ie("slot",n,r&&r());let i=e[t];i&&i._c&&(i._d=!1),te();const o=i&&vl(i(n)),a=Yt($e,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function vl(e){return e.some(t=>Pn(t)?!(t.type===ze||t.type===$e&&!vl(t.children)):!0)?e:null}const pi=e=>e?Pl(e)?As(e)||e.proxy:pi(e.parent):null,Zn=Oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>pi(e.parent),$root:e=>pi(e.root),$emit:e=>e.emit,$options:e=>Zi(e),$forceUpdate:e=>e.f||(e.f=()=>Ji(e.update)),$nextTick:e=>e.n||(e.n=ws.bind(e.proxy)),$watch:e=>yd.bind(e)}),Ws=(e,t)=>e!==pe&&!e.__isScriptSetup&&Z(e,t),Ld={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Ws(r,t))return o[t]=1,r[t];if(s!==pe&&Z(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&Z(l,t))return o[t]=3,i[t];if(n!==pe&&Z(n,t))return o[t]=4,n[t];gi&&(o[t]=0)}}const u=Zn[t];let f,h;if(u)return t==="$attrs"&&Ue(e,"get",t),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==pe&&Z(n,t))return o[t]=4,n[t];if(h=c.config.globalProperties,Z(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Ws(s,t)?(s[t]=n,!0):r!==pe&&Z(r,t)?(r[t]=n,!0):Z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==pe&&Z(e,o)||Ws(t,o)||(a=i[0])&&Z(a,o)||Z(r,o)||Z(Zn,o)||Z(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let gi=!0;function Dd(e){const t=Zi(e),n=e.proxy,r=e.ctx;gi=!1,t.beforeCreate&&Ko(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:g,updated:m,activated:y,deactivated:R,beforeDestroy:S,beforeUnmount:D,destroyed:x,unmounted:k,render:H,renderTracked:Q,renderTriggered:j,errorCaptured:O,serverPrefetch:V,expose:q,inheritAttrs:re,components:L,directives:le,filters:me}=t;if(l&&Md(l,r,null,e.appContext.config.unwrapInjectedRef),o)for(const fe in o){const oe=o[fe];K(oe)&&(r[fe]=oe.bind(n))}if(s){const fe=s.call(n,n);se(fe)&&(e.data=Un(fe))}if(gi=!0,i)for(const fe in i){const oe=i[fe],Ve=K(oe)?oe.bind(n,n):K(oe.get)?oe.get.bind(n,n):je,jt=!K(oe)&&K(oe.set)?oe.set.bind(n):je,We=ce({get:Ve,set:jt});Object.defineProperty(r,fe,{enumerable:!0,configurable:!0,get:()=>We.value,set:xe=>We.value=xe})}if(a)for(const fe in a)yl(a[fe],r,n,fe);if(c){const fe=K(c)?c.call(n):c;Reflect.ownKeys(fe).forEach(oe=>{Qn(oe,fe[oe])})}u&&Ko(u,e,"c");function _e(fe,oe){B(oe)?oe.forEach(Ve=>fe(Ve.bind(n))):oe&&fe(oe.bind(n))}if(_e(Cd,f),_e(Ir,h),_e(Sd,g),_e(Od,m),_e(Ed,y),_e(Id,R),_e(kd,O),_e(Pd,Q),_e(Rd,j),_e(hl,D),_e(pl,k),_e(Ad,V),B(q))if(q.length){const fe=e.exposed||(e.exposed={});q.forEach(oe=>{Object.defineProperty(fe,oe,{get:()=>n[oe],set:Ve=>n[oe]=Ve})})}else e.exposed||(e.exposed={});H&&e.render===je&&(e.render=H),re!=null&&(e.inheritAttrs=re),L&&(e.components=L),le&&(e.directives=le)}function Md(e,t,n=je,r=!1){B(e)&&(e=mi(e));for(const s in e){const i=e[s];let o;se(i)?"default"in i?o=Re(i.from||s,i.default,!0):o=Re(i.from||s):o=Re(i),ye(o)&&r?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[s]=o}}function Ko(e,t,n){He(B(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function yl(e,t,n,r){const s=r.includes(".")?cl(n,r):()=>n[r];if(ge(e)){const i=t[e];K(i)&&it(s,i)}else if(K(e))it(s,e.bind(n));else if(se(e))if(B(e))e.forEach(i=>yl(i,t,n,r));else{const i=K(e.handler)?e.handler.bind(n):t[e.handler];K(i)&&it(s,i,e)}}function Zi(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>es(c,l,o,!0)),es(c,t,o)),se(t)&&i.set(t,c),c}function es(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&es(e,i,n,!0),s&&s.forEach(o=>es(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=$d[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const $d={data:qo,props:qt,emits:qt,methods:qt,computed:qt,beforeCreate:ke,created:ke,beforeMount:ke,mounted:ke,beforeUpdate:ke,updated:ke,beforeDestroy:ke,beforeUnmount:ke,destroyed:ke,unmounted:ke,activated:ke,deactivated:ke,errorCaptured:ke,serverPrefetch:ke,components:qt,directives:qt,watch:Fd,provide:qo,inject:Ud};function qo(e,t){return t?e?function(){return Oe(K(e)?e.call(this,this):e,K(t)?t.call(this,this):t)}:t:e}function Ud(e,t){return qt(mi(e),mi(t))}function mi(e){if(B(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ke(e,t){return e?[...new Set([].concat(e,t))]:t}function qt(e,t){return e?Oe(Oe(Object.create(null),e),t):t}function Fd(e,t){if(!e)return t;if(!t)return e;const n=Oe(Object.create(null),e);for(const r in t)n[r]=ke(e[r],t[r]);return n}function Bd(e,t,n,r=!1){const s={},i={};Qr(i,Os,1),e.propsDefaults=Object.create(null),bl(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Gc(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function jd(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=ne(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Es(e.emitsOptions,h))continue;const g=t[h];if(c)if(Z(i,h))g!==i[h]&&(i[h]=g,l=!0);else{const m=Ye(h);s[m]=_i(c,a,m,g,e,!1)}else g!==i[h]&&(i[h]=g,l=!0)}}}else{bl(e,t,s,i)&&(l=!0);let u;for(const f in a)(!t||!Z(t,f)&&((u=fn(f))===f||!Z(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=_i(c,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!t||!Z(t,f))&&(delete i[f],l=!0)}l&&pt(e,"set","$attrs")}function bl(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(Hr(c))continue;const l=t[c];let u;s&&Z(s,u=Ye(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Es(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=ne(n),l=a||pe;for(let u=0;u<i.length;u++){const f=i[u];n[f]=_i(s,c,f,l[f],e,!Z(l,f))}}return o}function _i(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=Z(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&K(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(kn(s),r=l[n]=c.call(null,t),nn())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===fn(n))&&(r=!0))}return r}function wl(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!K(e)){const u=f=>{c=!0;const[h,g]=wl(f,t,!0);Oe(o,h),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return se(e)&&r.set(e,In),In;if(B(i))for(let u=0;u<i.length;u++){const f=Ye(i[u]);Go(f)&&(o[f]=pe)}else if(i)for(const u in i){const f=Ye(u);if(Go(f)){const h=i[u],g=o[f]=B(h)||K(h)?{type:h}:Object.assign({},h);if(g){const m=Qo(Boolean,g.type),y=Qo(String,g.type);g[0]=m>-1,g[1]=y<0||m<y,(m>-1||Z(g,"default"))&&a.push(f)}}}const l=[o,a];return se(e)&&r.set(e,l),l}function Go(e){return e[0]!=="$"}function Jo(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Yo(e,t){return Jo(e)===Jo(t)}function Qo(e,t){return B(t)?t.findIndex(n=>Yo(n,e)):K(t)&&Yo(t,e)?0:-1}const El=e=>e[0]==="_"||e==="$stable",eo=e=>B(e)?e.map(nt):[nt(e)],Hd=(e,t,n)=>{if(t._n)return t;const r=Yn((...s)=>eo(t(...s)),n);return r._c=!1,r},Il=(e,t,n)=>{const r=e._ctx;for(const s in e){if(El(s))continue;const i=e[s];if(K(i))t[s]=Hd(s,i,r);else if(i!=null){const o=eo(i);t[s]=()=>o}}},Tl=(e,t)=>{const n=eo(t);e.slots.default=()=>n},zd=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=ne(t),Qr(t,"_",n)):Il(t,e.slots={})}else e.slots={},t&&Tl(e,t);Qr(e.slots,Os,1)},Vd=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=pe;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(Oe(s,t),!n&&a===1&&delete s._):(i=!t.$stable,Il(t,s)),o=t}else t&&(Tl(e,t),o={default:1});if(i)for(const a in s)!El(a)&&!(a in o)&&delete s[a]};function Cl(){return{app:null,config:{isNativeTag:bf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wd=0;function Kd(e,t){return function(r,s=null){K(r)||(r=Object.assign({},r)),s!=null&&!se(s)&&(s=null);const i=Cl(),o=new Set;let a=!1;const c=i.app={_uid:Wd++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:hh,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&K(l.install)?(o.add(l),l.install(c,...u)):K(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const h=Ie(r,s);return h.appContext=i,u&&t?t(h,l):e(h,l,f),a=!0,c._container=l,l.__vue_app__=c,As(h.component)||h.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function vi(e,t,n,r,s=!1){if(B(e)){e.forEach((h,g)=>vi(h,t&&(B(t)?t[g]:t),n,r,s));return}if(Xn(r)&&!s)return;const i=r.shapeFlag&4?As(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===pe?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(ge(l)?(u[l]=null,Z(f,l)&&(f[l]=null)):ye(l)&&(l.value=null)),K(c))Nt(c,a,12,[o,u]);else{const h=ge(c),g=ye(c);if(h||g){const m=()=>{if(e.f){const y=h?Z(f,c)?f[c]:u[c]:c.value;s?B(y)&&$i(y,i):B(y)?y.includes(i)||y.push(i):h?(u[c]=[i],Z(f,c)&&(f[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else h?(u[c]=o,Z(f,c)&&(f[c]=o)):g&&(c.value=o,e.k&&(u[e.k]=o))};o?(m.id=-1,Le(m,n)):m()}}}const Le=_d;function qd(e){return Gd(e)}function Gd(e,t){const n=Sf();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:g=je,insertStaticContent:m}=e,y=(d,p,_,v=null,w=null,T=null,P=!1,I=null,C=!!p.dynamicChildren)=>{if(d===p)return;d&&!Qt(d,p)&&(v=A(d),xe(d,w,T,!0),d=null),p.patchFlag===-2&&(C=!1,p.dynamicChildren=null);const{type:E,ref:U,shapeFlag:M}=p;switch(E){case Ss:R(d,p,_,v);break;case ze:S(d,p,_,v);break;case Ks:d==null&&D(p,_,v,P);break;case $e:L(d,p,_,v,w,T,P,I,C);break;default:M&1?H(d,p,_,v,w,T,P,I,C):M&6?le(d,p,_,v,w,T,P,I,C):(M&64||M&128)&&E.process(d,p,_,v,w,T,P,I,C,ee)}U!=null&&w&&vi(U,d&&d.ref,T,p||d,!p)},R=(d,p,_,v)=>{if(d==null)r(p.el=a(p.children),_,v);else{const w=p.el=d.el;p.children!==d.children&&l(w,p.children)}},S=(d,p,_,v)=>{d==null?r(p.el=c(p.children||""),_,v):p.el=d.el},D=(d,p,_,v)=>{[d.el,d.anchor]=m(d.children,p,_,v,d.el,d.anchor)},x=({el:d,anchor:p},_,v)=>{let w;for(;d&&d!==p;)w=h(d),r(d,_,v),d=w;r(p,_,v)},k=({el:d,anchor:p})=>{let _;for(;d&&d!==p;)_=h(d),s(d),d=_;s(p)},H=(d,p,_,v,w,T,P,I,C)=>{P=P||p.type==="svg",d==null?Q(p,_,v,w,T,P,I,C):V(d,p,w,T,P,I,C)},Q=(d,p,_,v,w,T,P,I)=>{let C,E;const{type:U,props:M,shapeFlag:F,transition:W,dirs:X}=d;if(C=d.el=o(d.type,T,M&&M.is,M),F&8?u(C,d.children):F&16&&O(d.children,C,null,v,w,T&&U!=="foreignObject",P,I),X&&Ht(d,null,v,"created"),M){for(const ae in M)ae!=="value"&&!Hr(ae)&&i(C,ae,null,M[ae],T,d.children,v,w,N);"value"in M&&i(C,"value",null,M.value),(E=M.onVnodeBeforeMount)&&tt(E,v,d)}j(C,d,d.scopeId,P,v),X&&Ht(d,null,v,"beforeMount");const de=(!w||w&&!w.pendingBranch)&&W&&!W.persisted;de&&W.beforeEnter(C),r(C,p,_),((E=M&&M.onVnodeMounted)||de||X)&&Le(()=>{E&&tt(E,v,d),de&&W.enter(C),X&&Ht(d,null,v,"mounted")},w)},j=(d,p,_,v,w)=>{if(_&&g(d,_),v)for(let T=0;T<v.length;T++)g(d,v[T]);if(w){let T=w.subTree;if(p===T){const P=w.vnode;j(d,P,P.scopeId,P.slotScopeIds,w.parent)}}},O=(d,p,_,v,w,T,P,I,C=0)=>{for(let E=C;E<d.length;E++){const U=d[E]=I?It(d[E]):nt(d[E]);y(null,U,p,_,v,w,T,P,I)}},V=(d,p,_,v,w,T,P)=>{const I=p.el=d.el;let{patchFlag:C,dynamicChildren:E,dirs:U}=p;C|=d.patchFlag&16;const M=d.props||pe,F=p.props||pe;let W;_&&zt(_,!1),(W=F.onVnodeBeforeUpdate)&&tt(W,_,p,d),U&&Ht(p,d,_,"beforeUpdate"),_&&zt(_,!0);const X=w&&p.type!=="foreignObject";if(E?q(d.dynamicChildren,E,I,_,v,X,T):P||oe(d,p,I,null,_,v,X,T,!1),C>0){if(C&16)re(I,p,M,F,_,v,w);else if(C&2&&M.class!==F.class&&i(I,"class",null,F.class,w),C&4&&i(I,"style",M.style,F.style,w),C&8){const de=p.dynamicProps;for(let ae=0;ae<de.length;ae++){const we=de[ae],Ke=M[we],_n=F[we];(_n!==Ke||we==="value")&&i(I,we,Ke,_n,w,d.children,_,v,N)}}C&1&&d.children!==p.children&&u(I,p.children)}else!P&&E==null&&re(I,p,M,F,_,v,w);((W=F.onVnodeUpdated)||U)&&Le(()=>{W&&tt(W,_,p,d),U&&Ht(p,d,_,"updated")},v)},q=(d,p,_,v,w,T,P)=>{for(let I=0;I<p.length;I++){const C=d[I],E=p[I],U=C.el&&(C.type===$e||!Qt(C,E)||C.shapeFlag&70)?f(C.el):_;y(C,E,U,null,v,w,T,P,!0)}},re=(d,p,_,v,w,T,P)=>{if(_!==v){if(_!==pe)for(const I in _)!Hr(I)&&!(I in v)&&i(d,I,_[I],null,P,p.children,w,T,N);for(const I in v){if(Hr(I))continue;const C=v[I],E=_[I];C!==E&&I!=="value"&&i(d,I,E,C,P,p.children,w,T,N)}"value"in v&&i(d,"value",_.value,v.value)}},L=(d,p,_,v,w,T,P,I,C)=>{const E=p.el=d?d.el:a(""),U=p.anchor=d?d.anchor:a("");let{patchFlag:M,dynamicChildren:F,slotScopeIds:W}=p;W&&(I=I?I.concat(W):W),d==null?(r(E,_,v),r(U,_,v),O(p.children,_,U,w,T,P,I,C)):M>0&&M&64&&F&&d.dynamicChildren?(q(d.dynamicChildren,F,_,w,T,P,I),(p.key!=null||w&&p===w.subTree)&&to(d,p,!0)):oe(d,p,_,U,w,T,P,I,C)},le=(d,p,_,v,w,T,P,I,C)=>{p.slotScopeIds=I,d==null?p.shapeFlag&512?w.ctx.activate(p,_,v,P,C):me(p,_,v,w,T,P,C):be(d,p,C)},me=(d,p,_,v,w,T,P)=>{const I=d.component=ih(d,v,w);if(Is(d)&&(I.ctx.renderer=ee),oh(I),I.asyncDep){if(w&&w.registerDep(I,_e),!d.el){const C=I.subTree=Ie(ze);S(null,C,p,_)}return}_e(I,d,p,_,w,T,P)},be=(d,p,_)=>{const v=p.component=d.component;if(pd(d,p,_))if(v.asyncDep&&!v.asyncResolved){fe(v,p,_);return}else v.next=p,cd(v.update),v.update();else p.el=d.el,v.vnode=p},_e=(d,p,_,v,w,T,P)=>{const I=()=>{if(d.isMounted){let{next:U,bu:M,u:F,parent:W,vnode:X}=d,de=U,ae;zt(d,!1),U?(U.el=X.el,fe(d,U,P)):U=X,M&&zr(M),(ae=U.props&&U.props.onVnodeBeforeUpdate)&&tt(ae,W,U,X),zt(d,!0);const we=zs(d),Ke=d.subTree;d.subTree=we,y(Ke,we,f(Ke.el),A(Ke),d,w,T),U.el=we.el,de===null&&gd(d,we.el),F&&Le(F,w),(ae=U.props&&U.props.onVnodeUpdated)&&Le(()=>tt(ae,W,U,X),w)}else{let U;const{el:M,props:F}=p,{bm:W,m:X,parent:de}=d,ae=Xn(p);if(zt(d,!1),W&&zr(W),!ae&&(U=F&&F.onVnodeBeforeMount)&&tt(U,de,p),zt(d,!0),M&&Y){const we=()=>{d.subTree=zs(d),Y(M,d.subTree,d,w,null)};ae?p.type.__asyncLoader().then(()=>!d.isUnmounted&&we()):we()}else{const we=d.subTree=zs(d);y(null,we,_,v,d,w,T),p.el=we.el}if(X&&Le(X,w),!ae&&(U=F&&F.onVnodeMounted)){const we=p;Le(()=>tt(U,de,we),w)}(p.shapeFlag&256||de&&Xn(de.vnode)&&de.vnode.shapeFlag&256)&&d.a&&Le(d.a,w),d.isMounted=!0,p=_=v=null}},C=d.effect=new Bi(I,()=>Ji(E),d.scope),E=d.update=()=>C.run();E.id=d.uid,zt(d,!0),E()},fe=(d,p,_)=>{p.component=d;const v=d.vnode.props;d.vnode=p,d.next=null,jd(d,p.props,v,_),Vd(d,p.children,_),Mn(),Ho(),$n()},oe=(d,p,_,v,w,T,P,I,C=!1)=>{const E=d&&d.children,U=d?d.shapeFlag:0,M=p.children,{patchFlag:F,shapeFlag:W}=p;if(F>0){if(F&128){jt(E,M,_,v,w,T,P,I,C);return}else if(F&256){Ve(E,M,_,v,w,T,P,I,C);return}}W&8?(U&16&&N(E,w,T),M!==E&&u(_,M)):U&16?W&16?jt(E,M,_,v,w,T,P,I,C):N(E,w,T,!0):(U&8&&u(_,""),W&16&&O(M,_,v,w,T,P,I,C))},Ve=(d,p,_,v,w,T,P,I,C)=>{d=d||In,p=p||In;const E=d.length,U=p.length,M=Math.min(E,U);let F;for(F=0;F<M;F++){const W=p[F]=C?It(p[F]):nt(p[F]);y(d[F],W,_,null,w,T,P,I,C)}E>U?N(d,w,T,!0,!1,M):O(p,_,v,w,T,P,I,C,M)},jt=(d,p,_,v,w,T,P,I,C)=>{let E=0;const U=p.length;let M=d.length-1,F=U-1;for(;E<=M&&E<=F;){const W=d[E],X=p[E]=C?It(p[E]):nt(p[E]);if(Qt(W,X))y(W,X,_,null,w,T,P,I,C);else break;E++}for(;E<=M&&E<=F;){const W=d[M],X=p[F]=C?It(p[F]):nt(p[F]);if(Qt(W,X))y(W,X,_,null,w,T,P,I,C);else break;M--,F--}if(E>M){if(E<=F){const W=F+1,X=W<U?p[W].el:v;for(;E<=F;)y(null,p[E]=C?It(p[E]):nt(p[E]),_,X,w,T,P,I,C),E++}}else if(E>F)for(;E<=M;)xe(d[E],w,T,!0),E++;else{const W=E,X=E,de=new Map;for(E=X;E<=F;E++){const De=p[E]=C?It(p[E]):nt(p[E]);De.key!=null&&de.set(De.key,E)}let ae,we=0;const Ke=F-X+1;let _n=!1,Po=0;const Hn=new Array(Ke);for(E=0;E<Ke;E++)Hn[E]=0;for(E=W;E<=M;E++){const De=d[E];if(we>=Ke){xe(De,w,T,!0);continue}let et;if(De.key!=null)et=de.get(De.key);else for(ae=X;ae<=F;ae++)if(Hn[ae-X]===0&&Qt(De,p[ae])){et=ae;break}et===void 0?xe(De,w,T,!0):(Hn[et-X]=E+1,et>=Po?Po=et:_n=!0,y(De,p[et],_,null,w,T,P,I,C),we++)}const ko=_n?Jd(Hn):In;for(ae=ko.length-1,E=Ke-1;E>=0;E--){const De=X+E,et=p[De],xo=De+1<U?p[De+1].el:v;Hn[E]===0?y(null,et,_,xo,w,T,P,I,C):_n&&(ae<0||E!==ko[ae]?We(et,_,xo,2):ae--)}}},We=(d,p,_,v,w=null)=>{const{el:T,type:P,transition:I,children:C,shapeFlag:E}=d;if(E&6){We(d.component.subTree,p,_,v);return}if(E&128){d.suspense.move(p,_,v);return}if(E&64){P.move(d,p,_,ee);return}if(P===$e){r(T,p,_);for(let M=0;M<C.length;M++)We(C[M],p,_,v);r(d.anchor,p,_);return}if(P===Ks){x(d,p,_);return}if(v!==2&&E&1&&I)if(v===0)I.beforeEnter(T),r(T,p,_),Le(()=>I.enter(T),w);else{const{leave:M,delayLeave:F,afterLeave:W}=I,X=()=>r(T,p,_),de=()=>{M(T,()=>{X(),W&&W()})};F?F(T,X,de):de()}else r(T,p,_)},xe=(d,p,_,v=!1,w=!1)=>{const{type:T,props:P,ref:I,children:C,dynamicChildren:E,shapeFlag:U,patchFlag:M,dirs:F}=d;if(I!=null&&vi(I,null,_,d,!0),U&256){p.ctx.deactivate(d);return}const W=U&1&&F,X=!Xn(d);let de;if(X&&(de=P&&P.onVnodeBeforeUnmount)&&tt(de,p,d),U&6)b(d.component,_,v);else{if(U&128){d.suspense.unmount(_,v);return}W&&Ht(d,null,p,"beforeUnmount"),U&64?d.type.remove(d,p,_,w,ee,v):E&&(T!==$e||M>0&&M&64)?N(E,p,_,!1,!0):(T===$e&&M&384||!w&&U&16)&&N(C,p,_),v&&mn(d)}(X&&(de=P&&P.onVnodeUnmounted)||W)&&Le(()=>{de&&tt(de,p,d),W&&Ht(d,null,p,"unmounted")},_)},mn=d=>{const{type:p,el:_,anchor:v,transition:w}=d;if(p===$e){xr(_,v);return}if(p===Ks){k(d);return}const T=()=>{s(_),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:P,delayLeave:I}=w,C=()=>P(_,T);I?I(d.el,T,C):C()}else T()},xr=(d,p)=>{let _;for(;d!==p;)_=h(d),s(d),d=_;s(p)},b=(d,p,_)=>{const{bum:v,scope:w,update:T,subTree:P,um:I}=d;v&&zr(v),w.stop(),T&&(T.active=!1,xe(P,d,p,_)),I&&Le(I,p),Le(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},N=(d,p,_,v=!1,w=!1,T=0)=>{for(let P=T;P<d.length;P++)xe(d[P],p,_,v,w)},A=d=>d.shapeFlag&6?A(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),$=(d,p,_)=>{d==null?p._vnode&&xe(p._vnode,null,null,!0):y(p._vnode||null,d,p,null,null,null,_),Ho(),sl(),p._vnode=d},ee={p:y,um:xe,m:We,r:mn,mt:me,mc:O,pc:oe,pbc:q,n:A,o:e};let ve,Y;return t&&([ve,Y]=t(ee)),{render:$,hydrate:ve,createApp:Kd($,ve)}}function zt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function to(e,t,n=!1){const r=e.children,s=t.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=It(s[i]),a.el=o.el),n||to(o,a)),a.type===Ss&&(a.el=o.el)}}function Jd(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Yd=e=>e.__isTeleport,er=e=>e&&(e.disabled||e.disabled===""),Xo=e=>typeof SVGElement<"u"&&e instanceof SVGElement,yi=(e,t)=>{const n=e&&e.to;return ge(n)?t?t(n):null:n},Qd={__isTeleport:!0,process(e,t,n,r,s,i,o,a,c,l){const{mc:u,pc:f,pbc:h,o:{insert:g,querySelector:m,createText:y,createComment:R}}=l,S=er(t.props);let{shapeFlag:D,children:x,dynamicChildren:k}=t;if(e==null){const H=t.el=y(""),Q=t.anchor=y("");g(H,n,r),g(Q,n,r);const j=t.target=yi(t.props,m),O=t.targetAnchor=y("");j&&(g(O,j),o=o||Xo(j));const V=(q,re)=>{D&16&&u(x,q,re,s,i,o,a,c)};S?V(n,Q):j&&V(j,O)}else{t.el=e.el;const H=t.anchor=e.anchor,Q=t.target=e.target,j=t.targetAnchor=e.targetAnchor,O=er(e.props),V=O?n:Q,q=O?H:j;if(o=o||Xo(Q),k?(h(e.dynamicChildren,k,V,s,i,o,a),to(e,t,!0)):c||f(e,t,V,q,s,i,o,a,!1),S)O||Fr(t,n,H,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const re=t.target=yi(t.props,m);re&&Fr(t,re,null,l,0)}else O&&Fr(t,Q,j,l,1)}Sl(t)},remove(e,t,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:f,props:h}=e;if(f&&i(u),(o||!er(h))&&(i(l),a&16))for(let g=0;g<c.length;g++){const m=c[g];s(m,t,n,!0,!!m.dynamicChildren)}},move:Fr,hydrate:Xd};function Fr(e,t,n,{o:{insert:r},m:s},i=2){i===0&&r(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=e,f=i===2;if(f&&r(o,t,n),(!f||er(u))&&c&16)for(let h=0;h<l.length;h++)s(l[h],t,n,2);f&&r(a,t,n)}function Xd(e,t,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=t.target=yi(t.props,c);if(u){const f=u._lpa||u.firstChild;if(t.shapeFlag&16)if(er(t.props))t.anchor=l(o(e),t,a(e),n,r,s,i),t.targetAnchor=f;else{t.anchor=o(e);let h=f;for(;h;)if(h=o(h),h&&h.nodeType===8&&h.data==="teleport anchor"){t.targetAnchor=h,u._lpa=t.targetAnchor&&o(t.targetAnchor);break}l(f,t,u,n,r,s,i)}Sl(t)}return t.anchor&&o(t.anchor)}const t2=Qd;function Sl(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const $e=Symbol(void 0),Ss=Symbol(void 0),ze=Symbol(void 0),Ks=Symbol(void 0),tr=[];let Je=null;function te(e=!1){tr.push(Je=e?null:[])}function Zd(){tr.pop(),Je=tr[tr.length-1]||null}let dr=1;function Zo(e){dr+=e}function Ol(e){return e.dynamicChildren=dr>0?Je||In:null,Zd(),dr>0&&Je&&Je.push(e),e}function he(e,t,n,r,s,i){return Ol(J(e,t,n,r,s,i,!0))}function Yt(e,t,n,r,s){return Ol(Ie(e,t,n,r,s,!0))}function Pn(e){return e?e.__v_isVNode===!0:!1}function Qt(e,t){return e.type===t.type&&e.key===t.key}const Os="__vInternal",Al=({key:e})=>e??null,Vr=({ref:e,ref_key:t,ref_for:n})=>e!=null?ge(e)||ye(e)||K(e)?{i:Se,r:e,k:t,f:!!n}:e:null;function J(e,t=null,n=null,r=0,s=null,i=e===$e?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Al(t),ref:t&&Vr(t),scopeId:al,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Se};return a?(no(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=ge(n)?8:16),dr>0&&!o&&Je&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Je.push(c),c}const Ie=eh;function eh(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===_l)&&(e=ze),Pn(e)){const a=$t(e,t,!0);return n&&no(a,n),dr>0&&!i&&Je&&(a.shapeFlag&6?Je[Je.indexOf(e)]=a:Je.push(a)),a.patchFlag|=-2,a}if(uh(e)&&(e=e.__vccOpts),t){t=th(t);let{class:a,style:c}=t;a&&!ge(a)&&(t.class=qe(a)),se(c)&&(Jc(c)&&!B(c)&&(c=Oe({},c)),t.style=gs(c))}const o=ge(e)?1:md(e)?128:Yd(e)?64:se(e)?4:K(e)?2:0;return J(e,t,n,r,s,o,i,!0)}function th(e){return e?Jc(e)||Os in e?Oe({},e):e:null}function $t(e,t,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=e,a=t?Rl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Al(a),ref:t&&t.ref?n&&s?B(s)?s.concat(Vr(t)):[s,Vr(t)]:Vr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==$e?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&$t(e.ssContent),ssFallback:e.ssFallback&&$t(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function nh(e=" ",t=0){return Ie(Ss,null,e,t)}function Br(e="",t=!1){return t?(te(),Yt(ze,null,e)):Ie(ze,null,e)}function nt(e){return e==null||typeof e=="boolean"?Ie(ze):B(e)?Ie($e,null,e.slice()):typeof e=="object"?It(e):Ie(Ss,null,String(e))}function It(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:$t(e)}function no(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(B(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),no(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(Os in t)?t._ctx=Se:s===3&&Se&&(Se.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else K(t)?(t={default:t,_ctx:Se},n=32):(t=String(t),r&64?(n=16,t=[nh(t)]):n=8);e.children=t,e.shapeFlag|=n}function Rl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=qe([t.class,r.class]));else if(s==="style")t.style=gs([t.style,r.style]);else if(ms(s)){const i=t[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function tt(e,t,n,r=null){He(e,t,7,[n,r])}const rh=Cl();let sh=0;function ih(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||rh,i={uid:sh++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Lc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wl(r,s),emitsOptions:ol(r,s),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:r.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=fd.bind(null,i),e.ce&&e.ce(i),i}let Ce=null;const dn=()=>Ce||Se,kn=e=>{Ce=e,e.scope.on()},nn=()=>{Ce&&Ce.scope.off(),Ce=null};function Pl(e){return e.vnode.shapeFlag&4}let hr=!1;function oh(e,t=!1){hr=t;const{props:n,children:r}=e.vnode,s=Pl(e);Bd(e,n,s,t),zd(e,r);const i=s?ah(e,t):void 0;return hr=!1,i}function ah(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Rn(new Proxy(e.ctx,Ld));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?xl(e):null;kn(e),Mn();const i=Nt(r,e,0,[e.props,s]);if($n(),nn(),kc(i)){if(i.then(nn,nn),t)return i.then(o=>{ea(e,o,t)}).catch(o=>{bs(o,e,0)});e.asyncDep=i}else ea(e,i,t)}else kl(e,t)}function ea(e,t,n){K(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:se(t)&&(e.setupState=Zc(t)),kl(e,n)}let ta;function kl(e,t,n){const r=e.type;if(!e.render){if(!t&&ta&&!r.render){const s=r.template||Zi(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Oe(Oe({isCustomElement:i,delimiters:a},o),c);r.render=ta(s,l)}}e.render=r.render||je}kn(e),Mn(),Dd(e),$n(),nn()}function ch(e){return new Proxy(e.attrs,{get(t,n){return Ue(e,"get","$attrs"),t[n]}})}function xl(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=ch(e))},slots:e.slots,emit:e.emit,expose:t}}function As(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Zc(Rn(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Zn)return Zn[n](e)},has(t,n){return n in t||n in Zn}}))}function lh(e,t=!0){return K(e)?e.displayName||e.name:e.name||t&&e.__name}function uh(e){return K(e)&&"__vccOpts"in e}const ce=(e,t)=>sd(e,t,hr);function n2(){return Nl().slots}function r2(){return Nl().attrs}function Nl(){const e=dn();return e.setupContext||(e.setupContext=xl(e))}function ro(e,t,n){const r=arguments.length;return r===2?se(t)&&!B(t)?Pn(t)?Ie(e,null,[t]):Ie(e,t):Ie(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Pn(n)&&(n=[n]),Ie(e,t,n))}const fh=Symbol(""),dh=()=>Re(fh),hh="3.2.45",ph="http://www.w3.org/2000/svg",Xt=typeof document<"u"?document:null,na=Xt&&Xt.createElement("template"),gh={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?Xt.createElementNS(ph,e):Xt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Xt.createTextNode(e),createComment:e=>Xt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Xt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{na.innerHTML=r?`<svg>${e}</svg>`:e;const a=na.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function mh(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function _h(e,t,n){const r=e.style,s=ge(n);if(n&&!s){for(const i in n)bi(r,i,n[i]);if(t&&!ge(t))for(const i in t)n[i]==null&&bi(r,i,"")}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ra=/\s*!important$/;function bi(e,t,n){if(B(n))n.forEach(r=>bi(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=vh(e,t);ra.test(n)?e.setProperty(fn(r),n.replace(ra,""),"important"):e[r]=n}}const sa=["Webkit","Moz","ms"],qs={};function vh(e,t){const n=qs[t];if(n)return n;let r=Ye(t);if(r!=="filter"&&r in e)return qs[t]=r;r=vs(r);for(let s=0;s<sa.length;s++){const i=sa[s]+r;if(i in e)return qs[t]=i}return t}const ia="http://www.w3.org/1999/xlink";function yh(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ia,t.slice(6,t.length)):e.setAttributeNS(ia,t,n);else{const i=vf(t);n==null||i&&!Oc(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function bh(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Oc(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function Zt(e,t,n,r){e.addEventListener(t,n,r)}function wh(e,t,n,r){e.removeEventListener(t,n,r)}function Eh(e,t,n,r,s=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=Ih(t);if(r){const l=i[t]=Sh(r,s);Zt(e,a,l,c)}else o&&(wh(e,a,o,c),i[t]=void 0)}}const oa=/(?:Once|Passive|Capture)$/;function Ih(e){let t;if(oa.test(e)){t={};let r;for(;r=e.match(oa);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):fn(e.slice(2)),t]}let Gs=0;const Th=Promise.resolve(),Ch=()=>Gs||(Th.then(()=>Gs=0),Gs=Date.now());function Sh(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;He(Oh(r,n.value),t,5,[r])};return n.value=e,n.attached=Ch(),n}function Oh(e,t){if(B(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const aa=/^on[a-z]/,Ah=(e,t,n,r,s=!1,i,o,a,c)=>{t==="class"?mh(e,r,s):t==="style"?_h(e,n,r):ms(t)?Mi(t)||Eh(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Rh(e,t,r,s))?bh(e,t,r,i,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),yh(e,t,r,s))};function Rh(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&aa.test(t)&&K(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||aa.test(t)&&ge(n)?!1:t in e}const yt="transition",zn="animation",Rs=(e,{slots:t})=>ro(ll,Ph(e),t);Rs.displayName="Transition";const Ll={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Rs.props=Oe({},ll.props,Ll);const Vt=(e,t=[])=>{B(e)?e.forEach(n=>n(...t)):e&&e(...t)},ca=e=>e?B(e)?e.some(t=>t.length>1):e.length>1:!1;function Ph(e){const t={};for(const L in e)L in Ll||(t[L]=e[L]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,m=kh(s),y=m&&m[0],R=m&&m[1],{onBeforeEnter:S,onEnter:D,onEnterCancelled:x,onLeave:k,onLeaveCancelled:H,onBeforeAppear:Q=S,onAppear:j=D,onAppearCancelled:O=x}=t,V=(L,le,me)=>{Wt(L,le?u:a),Wt(L,le?l:o),me&&me()},q=(L,le)=>{L._isLeaving=!1,Wt(L,f),Wt(L,g),Wt(L,h),le&&le()},re=L=>(le,me)=>{const be=L?j:D,_e=()=>V(le,L,me);Vt(be,[le,_e]),la(()=>{Wt(le,L?c:i),bt(le,L?u:a),ca(be)||ua(le,r,y,_e)})};return Oe(t,{onBeforeEnter(L){Vt(S,[L]),bt(L,i),bt(L,o)},onBeforeAppear(L){Vt(Q,[L]),bt(L,c),bt(L,l)},onEnter:re(!1),onAppear:re(!0),onLeave(L,le){L._isLeaving=!0;const me=()=>q(L,le);bt(L,f),Lh(),bt(L,h),la(()=>{L._isLeaving&&(Wt(L,f),bt(L,g),ca(k)||ua(L,r,R,me))}),Vt(k,[L,me])},onEnterCancelled(L){V(L,!1),Vt(x,[L])},onAppearCancelled(L){V(L,!0),Vt(O,[L])},onLeaveCancelled(L){q(L),Vt(H,[L])}})}function kh(e){if(e==null)return null;if(se(e))return[Js(e.enter),Js(e.leave)];{const t=Js(e);return[t,t]}}function Js(e){return cr(e)}function bt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Wt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function la(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let xh=0;function ua(e,t,n,r){const s=e._endId=++xh,i=()=>{s===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Nh(e,t);if(!o)return r();const l=o+"end";let u=0;const f=()=>{e.removeEventListener(l,h),i()},h=g=>{g.target===e&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},a+1),e.addEventListener(l,h)}function Nh(e,t){const n=window.getComputedStyle(e),r=m=>(n[m]||"").split(", "),s=r(`${yt}Delay`),i=r(`${yt}Duration`),o=fa(s,i),a=r(`${zn}Delay`),c=r(`${zn}Duration`),l=fa(a,c);let u=null,f=0,h=0;t===yt?o>0&&(u=yt,f=o,h=i.length):t===zn?l>0&&(u=zn,f=l,h=c.length):(f=Math.max(o,l),u=f>0?o>l?yt:zn:null,h=u?u===yt?i.length:c.length:0);const g=u===yt&&/\b(transform|all)(,|$)/.test(r(`${yt}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:g}}function fa(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>da(n)+da(e[r])))}function da(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Lh(){return document.body.offsetHeight}const ts=e=>{const t=e.props["onUpdate:modelValue"]||!1;return B(t)?n=>zr(t,n):t};function Dh(e){e.target.composing=!0}function ha(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const s2={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e._assign=ts(s);const i=r||s.props&&s.props.type==="number";Zt(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=cr(a)),e._assign(a)}),n&&Zt(e,"change",()=>{e.value=e.value.trim()}),t||(Zt(e,"compositionstart",Dh),Zt(e,"compositionend",ha),Zt(e,"change",ha))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},i){if(e._assign=ts(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(s||e.type==="number")&&cr(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},i2={created(e,{value:t},n){e.checked=Yr(t,n.props.value),e._assign=ts(n),Zt(e,"change",()=>{e._assign(Mh(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e._assign=ts(r),t!==n&&(e.checked=Yr(t,r.props.value))}};function Mh(e){return"_value"in e?e._value:e.value}const $h=["ctrl","shift","alt","meta"],Uh={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>$h.some(n=>e[`${n}Key`]&&!t.includes(n))},Wr=(e,t)=>(n,...r)=>{for(let s=0;s<t.length;s++){const i=Uh[t[s]];if(i&&i(n,t))return}return e(n,...r)},Fh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},o2=(e,t)=>n=>{if(!("key"in n))return;const r=fn(n.key);if(t.some(s=>s===r||Fh[s]===r))return e(n)},Dl={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Vn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Vn(e,!0),r.enter(e)):r.leave(e,()=>{Vn(e,!1)}):Vn(e,t))},beforeUnmount(e,{value:t}){Vn(e,t)}};function Vn(e,t){e.style.display=t?e._vod:"none"}const Bh=Oe({patchProp:Ah},gh);let pa;function Ml(){return pa||(pa=qd(Bh))}const ga=(...e)=>{Ml().render(...e)},jh=(...e)=>{const t=Ml().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Hh(r);if(!s)return;const i=t._component;!K(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Hh(e){return ge(e)?document.querySelector(e):e}var zh=!1;/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let $l;const Ps=e=>$l=e,Ul=Symbol();function wi(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var nr;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(nr||(nr={}));function Vh(){const e=Dc(!0),t=e.run(()=>Ee({}));let n=[],r=[];const s=Rn({install(i){Ps(s),s._a=i,i.provide(Ul,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!zh?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const Fl=()=>{};function ma(e,t,n,r=Fl){e.push(t);const s=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&Mc()&&$c(s),s}function vn(e,...t){e.slice().forEach(n=>{n(...t)})}function Ei(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];wi(s)&&wi(r)&&e.hasOwnProperty(n)&&!ye(r)&&!dt(r)?e[n]=Ei(s,r):e[n]=r}return e}const Wh=Symbol();function Kh(e){return!wi(e)||!e.hasOwnProperty(Wh)}const{assign:Tt}=Object;function qh(e){return!!(ye(e)&&e.effect)}function Gh(e,t,n,r){const{state:s,actions:i,getters:o}=t,a=n.state.value[e];let c;function l(){a||(n.state.value[e]=s?s():{});const u=td(n.state.value[e]);return Tt(u,i,Object.keys(o||{}).reduce((f,h)=>(f[h]=Rn(ce(()=>{Ps(n);const g=n._s.get(e);return o[h].call(g,g)})),f),{}))}return c=Bl(e,l,t,n,r,!0),c.$reset=function(){const f=s?s():{};this.$patch(h=>{Tt(h,f)})},c}function Bl(e,t,n={},r,s,i){let o;const a=Tt({actions:{}},n),c={deep:!0};let l,u,f=Rn([]),h=Rn([]),g;const m=r.state.value[e];!i&&!m&&(r.state.value[e]={}),Ee({});let y;function R(j){let O;l=u=!1,typeof j=="function"?(j(r.state.value[e]),O={type:nr.patchFunction,storeId:e,events:g}):(Ei(r.state.value[e],j),O={type:nr.patchObject,payload:j,storeId:e,events:g});const V=y=Symbol();ws().then(()=>{y===V&&(l=!0)}),u=!0,vn(f,O,r.state.value[e])}const S=Fl;function D(){o.stop(),f=[],h=[],r._s.delete(e)}function x(j,O){return function(){Ps(r);const V=Array.from(arguments),q=[],re=[];function L(be){q.push(be)}function le(be){re.push(be)}vn(h,{args:V,name:j,store:H,after:L,onError:le});let me;try{me=O.apply(this&&this.$id===e?this:H,V)}catch(be){throw vn(re,be),be}return me instanceof Promise?me.then(be=>(vn(q,be),be)).catch(be=>(vn(re,be),Promise.reject(be))):(vn(q,me),me)}}const k={_p:r,$id:e,$onAction:ma.bind(null,h),$patch:R,$reset:S,$subscribe(j,O={}){const V=ma(f,j,O.detached,()=>q()),q=o.run(()=>it(()=>r.state.value[e],re=>{(O.flush==="sync"?u:l)&&j({storeId:e,type:nr.direct,events:g},re)},Tt({},c,O)));return V},$dispose:D},H=Un(k);r._s.set(e,H);const Q=r._e.run(()=>(o=Dc(),o.run(()=>t())));for(const j in Q){const O=Q[j];if(ye(O)&&!qh(O)||dt(O))i||(m&&Kh(O)&&(ye(O)?O.value=m[j]:Ei(O,m[j])),r.state.value[e][j]=O);else if(typeof O=="function"){const V=x(j,O);Q[j]=V,a.actions[j]=O}}return Tt(H,Q),Tt(ne(H),Q),Object.defineProperty(H,"$state",{get:()=>r.state.value[e],set:j=>{R(O=>{Tt(O,j)})}}),r._p.forEach(j=>{Tt(H,o.run(()=>j({store:H,app:r._a,pinia:r,options:a})))}),m&&i&&n.hydrate&&n.hydrate(H.$state,m),l=!0,u=!0,H}function a2(e,t,n){let r,s;const i=typeof t=="function";typeof e=="string"?(r=e,s=i?n:t):(s=e,r=e.id);function o(a,c){const l=dn();return a=a||l&&Re(Ul,null),a&&Ps(a),a=$l,a._s.has(r)||(i?Bl(r,t,s,a):Gh(r,s,a)),a._s.get(r)}return o.$id=r,o}function c2(e){{e=ne(e);const t={};for(const n in e){const r=e[n];(ye(r)||dt(r))&&(t[n]=el(e,n))}return t}}const Jh="modulepreload",Yh=function(e,t){return new URL(e,t).href},_a={},Be=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Yh(i,r),i in _a)return;_a[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const f=s[u];if(f.href===i&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Jh,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const bn=typeof window<"u";function Qh(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ie=Object.assign;function Ys(e,t){const n={};for(const r in t){const s=t[r];n[r]=Qe(s)?s.map(e):e(s)}return n}const rr=()=>{},Qe=Array.isArray,Xh=/\/$/,Zh=e=>e.replace(Xh,"");function Qs(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=rp(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function ep(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function va(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function tp(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&xn(t.matched[r],n.matched[s])&&jl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function xn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function jl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!np(e[n],t[n]))return!1;return!0}function np(e,t){return Qe(e)?ya(e,t):Qe(t)?ya(t,e):e===t}function ya(e,t){return Qe(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function rp(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var pr;(function(e){e.pop="pop",e.push="push"})(pr||(pr={}));var sr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(sr||(sr={}));function sp(e){if(!e)if(bn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Zh(e)}const ip=/^[^#]+#/;function op(e,t){return e.replace(ip,"#")+t}function ap(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ks=()=>({left:window.pageXOffset,top:window.pageYOffset});function cp(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=ap(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ba(e,t){return(history.state?history.state.position-t:-1)+e}const Ii=new Map;function lp(e,t){Ii.set(e,t)}function up(e){const t=Ii.get(e);return Ii.delete(e),t}let fp=()=>location.protocol+"//"+location.host;function Hl(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),va(c,"")}return va(n,e)+r+s}function dp(e,t,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const g=Hl(e,location),m=n.value,y=t.value;let R=0;if(h){if(n.value=g,t.value=h,o&&o===m){o=null;return}R=y?h.position-y.position:0}else r(g);s.forEach(S=>{S(n.value,m,{delta:R,type:pr.pop,direction:R?R>0?sr.forward:sr.back:sr.unknown})})};function c(){o=n.value}function l(h){s.push(h);const g=()=>{const m=s.indexOf(h);m>-1&&s.splice(m,1)};return i.push(g),g}function u(){const{history:h}=window;h.state&&h.replaceState(ie({},h.state,{scroll:ks()}),"")}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:f}}function wa(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?ks():null}}function hp(e){const{history:t,location:n}=window,r={value:Hl(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=e.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:fp()+e+c;try{t[u?"replaceState":"pushState"](l,"",h),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](h)}}function o(c,l){const u=ie({},t.state,wa(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ie({},s.value,t.state,{forward:c,scroll:ks()});i(u.current,u,!0);const f=ie({},wa(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function pp(e){e=sp(e);const t=hp(e),n=dp(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ie({location:"",base:e,go:r,createHref:op.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function gp(e){return typeof e=="string"||e&&typeof e=="object"}function zl(e){return typeof e=="string"||typeof e=="symbol"}const wt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Vl=Symbol("");var Ea;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ea||(Ea={}));function Nn(e,t){return ie(new Error,{type:e,[Vl]:!0},t)}function ct(e,t){return e instanceof Error&&Vl in e&&(t==null||!!(e.type&t))}const Ia="[^/]+?",mp={sensitive:!1,strict:!1,start:!0,end:!0},_p=/[.+*?^${}()[\]/\\]/g;function vp(e,t){const n=ie({},mp,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const h=l[f];let g=40+(n.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(_p,"\\$&"),g+=40;else if(h.type===1){const{value:m,repeatable:y,optional:R,regexp:S}=h;i.push({name:m,repeatable:y,optional:R});const D=S||Ia;if(D!==Ia){g+=10;try{new RegExp(`(${D})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${m}" (${D}): `+k.message)}}let x=y?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;f||(x=R&&l.length<2?`(?:/${x})`:"/"+x),R&&(x+="?"),s+=x,g+=20,R&&(g+=-8),y&&(g+=-20),D===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const g=u[h]||"",m=i[h-1];f[m.name]=g&&m.repeatable?g.split("/"):g}return f}function c(l){let u="",f=!1;for(const h of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of h)if(g.type===0)u+=g.value;else if(g.type===1){const{value:m,repeatable:y,optional:R}=g,S=m in l?l[m]:"";if(Qe(S)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const D=Qe(S)?S.join("/"):S;if(!D)if(R)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${m}"`);u+=D}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function yp(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function bp(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=yp(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ta(r))return 1;if(Ta(s))return-1}return s.length-r.length}function Ta(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const wp={type:0,value:""},Ep=/[a-zA-Z0-9_]/;function Ip(e){if(!e)return[[]];if(e==="/")return[[wp]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:Ep.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function Tp(e,t,n){const r=vp(Ip(e.path),n),s=ie(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Cp(e,t){const n=[],r=new Map;t=Oa({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function i(u,f,h){const g=!h,m=Sp(u);m.aliasOf=h&&h.record;const y=Oa(t,u),R=[m];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const k of x)R.push(ie({},m,{components:h?h.record.components:m.components,path:k,aliasOf:h?h.record:m}))}let S,D;for(const x of R){const{path:k}=x;if(f&&k[0]!=="/"){const H=f.record.path,Q=H[H.length-1]==="/"?"":"/";x.path=f.record.path+(k&&Q+k)}if(S=Tp(x,f,y),h?h.alias.push(S):(D=D||S,D!==S&&D.alias.push(S),g&&u.name&&!Sa(S)&&o(u.name)),m.children){const H=m.children;for(let Q=0;Q<H.length;Q++)i(H[Q],S,h&&h.children[Q])}h=h||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&c(S)}return D?()=>{o(D)}:rr}function o(u){if(zl(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&bp(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Wl(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Sa(u)&&r.set(u.record.name,u)}function l(u,f){let h,g={},m,y;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw Nn(1,{location:u});y=h.record.name,g=ie(Ca(f.params,h.keys.filter(D=>!D.optional).map(D=>D.name)),u.params&&Ca(u.params,h.keys.map(D=>D.name))),m=h.stringify(g)}else if("path"in u)m=u.path,h=n.find(D=>D.re.test(m)),h&&(g=h.parse(m),y=h.record.name);else{if(h=f.name?r.get(f.name):n.find(D=>D.re.test(f.path)),!h)throw Nn(1,{location:u,currentLocation:f});y=h.record.name,g=ie({},f.params,u.params),m=h.stringify(g)}const R=[];let S=h;for(;S;)R.unshift(S.record),S=S.parent;return{name:y,path:m,params:g,matched:R,meta:Ap(R)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Ca(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Sp(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Op(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Op(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Sa(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ap(e){return e.reduce((t,n)=>ie(t,n.meta),{})}function Oa(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Wl(e,t){return t.children.some(n=>n===e||Wl(e,n))}const Kl=/#/g,Rp=/&/g,Pp=/\//g,kp=/=/g,xp=/\?/g,ql=/\+/g,Np=/%5B/g,Lp=/%5D/g,Gl=/%5E/g,Dp=/%60/g,Jl=/%7B/g,Mp=/%7C/g,Yl=/%7D/g,$p=/%20/g;function so(e){return encodeURI(""+e).replace(Mp,"|").replace(Np,"[").replace(Lp,"]")}function Up(e){return so(e).replace(Jl,"{").replace(Yl,"}").replace(Gl,"^")}function Ti(e){return so(e).replace(ql,"%2B").replace($p,"+").replace(Kl,"%23").replace(Rp,"%26").replace(Dp,"`").replace(Jl,"{").replace(Yl,"}").replace(Gl,"^")}function Fp(e){return Ti(e).replace(kp,"%3D")}function Bp(e){return so(e).replace(Kl,"%23").replace(xp,"%3F")}function jp(e){return e==null?"":Bp(e).replace(Pp,"%2F")}function ns(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Hp(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ql," "),o=i.indexOf("="),a=ns(o<0?i:i.slice(0,o)),c=o<0?null:ns(i.slice(o+1));if(a in t){let l=t[a];Qe(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Aa(e){let t="";for(let n in e){const r=e[n];if(n=Fp(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Qe(r)?r.map(i=>i&&Ti(i)):[r&&Ti(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function zp(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Qe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Vp=Symbol(""),Ra=Symbol(""),xs=Symbol(""),io=Symbol(""),Ci=Symbol("");function Wn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Ct(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(Nn(4,{from:n,to:t})):f instanceof Error?a(f):gp(f)?a(Nn(2,{from:t,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},l=e.call(r&&r.instances[s],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function Xs(e,t,n,r){const s=[];for(const i of e)for(const o in i.components){let a=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Wp(a)){const l=(a.__vccOpts||a)[t];l&&s.push(Ct(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Qh(l)?l.default:l;i.components[o]=u;const h=(u.__vccOpts||u)[t];return h&&Ct(h,n,r,i,o)()}))}}return s}function Wp(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Pa(e){const t=Re(xs),n=Re(io),r=ce(()=>t.resolve(G(e.to))),s=ce(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(xn.bind(null,u));if(h>-1)return h;const g=ka(c[l-2]);return l>1&&ka(u)===g&&f[f.length-1].path!==g?f.findIndex(xn.bind(null,c[l-2])):h}),i=ce(()=>s.value>-1&&Jp(n.params,r.value.params)),o=ce(()=>s.value>-1&&s.value===n.matched.length-1&&jl(n.params,r.value.params));function a(c={}){return Gp(c)?t[G(e.replace)?"replace":"push"](G(e.to)).catch(rr):Promise.resolve()}return{route:r,href:ce(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Kp=Ze({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Pa,setup(e,{slots:t}){const n=Un(Pa(e)),{options:r}=Re(xs),s=ce(()=>({[xa(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[xa(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:ro("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),qp=Kp;function Gp(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Jp(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Qe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ka(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const xa=(e,t,n)=>e??t??n,Yp=Ze({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Re(Ci),s=ce(()=>e.route||r.value),i=Re(Ra,0),o=ce(()=>{let l=G(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=ce(()=>s.value.matched[o.value]);Qn(Ra,ce(()=>o.value+1)),Qn(Vp,a),Qn(Ci,s);const c=Ee();return it(()=>[c.value,a.value,e.name],([l,u,f],[h,g,m])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!xn(u,g)||!h)&&(u.enterCallbacks[f]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,f=a.value,h=f&&f.components[u];if(!h)return Na(n.default,{Component:h,route:l});const g=f.props[u],m=g?g===!0?l.params:typeof g=="function"?g(l):g:null,R=ro(h,ie({},m,t,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Na(n.default,{Component:R,route:l})||R}}});function Na(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Qp=Yp;function Xp(e){const t=Cp(e.routes,e),n=e.parseQuery||Hp,r=e.stringifyQuery||Aa,s=e.history,i=Wn(),o=Wn(),a=Wn(),c=Qc(wt);let l=wt;bn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ys.bind(null,b=>""+b),f=Ys.bind(null,jp),h=Ys.bind(null,ns);function g(b,N){let A,$;return zl(b)?(A=t.getRecordMatcher(b),$=N):$=b,t.addRoute($,A)}function m(b){const N=t.getRecordMatcher(b);N&&t.removeRoute(N)}function y(){return t.getRoutes().map(b=>b.record)}function R(b){return!!t.getRecordMatcher(b)}function S(b,N){if(N=ie({},N||c.value),typeof b=="string"){const d=Qs(n,b,N.path),p=t.resolve({path:d.path},N),_=s.createHref(d.fullPath);return ie(d,p,{params:h(p.params),hash:ns(d.hash),redirectedFrom:void 0,href:_})}let A;if("path"in b)A=ie({},b,{path:Qs(n,b.path,N.path).path});else{const d=ie({},b.params);for(const p in d)d[p]==null&&delete d[p];A=ie({},b,{params:f(b.params)}),N.params=f(N.params)}const $=t.resolve(A,N),ee=b.hash||"";$.params=u(h($.params));const ve=ep(r,ie({},b,{hash:Up(ee),path:$.path})),Y=s.createHref(ve);return ie({fullPath:ve,hash:ee,query:r===Aa?zp(b.query):b.query||{}},$,{redirectedFrom:void 0,href:Y})}function D(b){return typeof b=="string"?Qs(n,b,c.value.path):ie({},b)}function x(b,N){if(l!==b)return Nn(8,{from:N,to:b})}function k(b){return j(b)}function H(b){return k(ie(D(b),{replace:!0}))}function Q(b){const N=b.matched[b.matched.length-1];if(N&&N.redirect){const{redirect:A}=N;let $=typeof A=="function"?A(b):A;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=D($):{path:$},$.params={}),ie({query:b.query,hash:b.hash,params:"path"in $?{}:b.params},$)}}function j(b,N){const A=l=S(b),$=c.value,ee=b.state,ve=b.force,Y=b.replace===!0,d=Q(A);if(d)return j(ie(D(d),{state:typeof d=="object"?ie({},ee,d.state):ee,force:ve,replace:Y}),N||A);const p=A;p.redirectedFrom=N;let _;return!ve&&tp(r,$,A)&&(_=Nn(16,{to:p,from:$}),jt($,$,!0,!1)),(_?Promise.resolve(_):V(p,$)).catch(v=>ct(v)?ct(v,2)?v:Ve(v):fe(v,p,$)).then(v=>{if(v){if(ct(v,2))return j(ie({replace:Y},D(v.to),{state:typeof v.to=="object"?ie({},ee,v.to.state):ee,force:ve}),N||p)}else v=re(p,$,!0,Y,ee);return q(p,$,v),v})}function O(b,N){const A=x(b,N);return A?Promise.reject(A):Promise.resolve()}function V(b,N){let A;const[$,ee,ve]=Zp(b,N);A=Xs($.reverse(),"beforeRouteLeave",b,N);for(const d of $)d.leaveGuards.forEach(p=>{A.push(Ct(p,b,N))});const Y=O.bind(null,b,N);return A.push(Y),yn(A).then(()=>{A=[];for(const d of i.list())A.push(Ct(d,b,N));return A.push(Y),yn(A)}).then(()=>{A=Xs(ee,"beforeRouteUpdate",b,N);for(const d of ee)d.updateGuards.forEach(p=>{A.push(Ct(p,b,N))});return A.push(Y),yn(A)}).then(()=>{A=[];for(const d of b.matched)if(d.beforeEnter&&!N.matched.includes(d))if(Qe(d.beforeEnter))for(const p of d.beforeEnter)A.push(Ct(p,b,N));else A.push(Ct(d.beforeEnter,b,N));return A.push(Y),yn(A)}).then(()=>(b.matched.forEach(d=>d.enterCallbacks={}),A=Xs(ve,"beforeRouteEnter",b,N),A.push(Y),yn(A))).then(()=>{A=[];for(const d of o.list())A.push(Ct(d,b,N));return A.push(Y),yn(A)}).catch(d=>ct(d,8)?d:Promise.reject(d))}function q(b,N,A){for(const $ of a.list())$(b,N,A)}function re(b,N,A,$,ee){const ve=x(b,N);if(ve)return ve;const Y=N===wt,d=bn?history.state:{};A&&($||Y?s.replace(b.fullPath,ie({scroll:Y&&d&&d.scroll},ee)):s.push(b.fullPath,ee)),c.value=b,jt(b,N,A,Y),Ve()}let L;function le(){L||(L=s.listen((b,N,A)=>{if(!xr.listening)return;const $=S(b),ee=Q($);if(ee){j(ie(ee,{replace:!0}),$).catch(rr);return}l=$;const ve=c.value;bn&&lp(ba(ve.fullPath,A.delta),ks()),V($,ve).catch(Y=>ct(Y,12)?Y:ct(Y,2)?(j(Y.to,$).then(d=>{ct(d,20)&&!A.delta&&A.type===pr.pop&&s.go(-1,!1)}).catch(rr),Promise.reject()):(A.delta&&s.go(-A.delta,!1),fe(Y,$,ve))).then(Y=>{Y=Y||re($,ve,!1),Y&&(A.delta&&!ct(Y,8)?s.go(-A.delta,!1):A.type===pr.pop&&ct(Y,20)&&s.go(-1,!1)),q($,ve,Y)}).catch(rr)}))}let me=Wn(),be=Wn(),_e;function fe(b,N,A){Ve(b);const $=be.list();return $.length?$.forEach(ee=>ee(b,N,A)):console.error(b),Promise.reject(b)}function oe(){return _e&&c.value!==wt?Promise.resolve():new Promise((b,N)=>{me.add([b,N])})}function Ve(b){return _e||(_e=!b,le(),me.list().forEach(([N,A])=>b?A(b):N()),me.reset()),b}function jt(b,N,A,$){const{scrollBehavior:ee}=e;if(!bn||!ee)return Promise.resolve();const ve=!A&&up(ba(b.fullPath,0))||($||!A)&&history.state&&history.state.scroll||null;return ws().then(()=>ee(b,N,ve)).then(Y=>Y&&cp(Y)).catch(Y=>fe(Y,b,N))}const We=b=>s.go(b);let xe;const mn=new Set,xr={currentRoute:c,listening:!0,addRoute:g,removeRoute:m,hasRoute:R,getRoutes:y,resolve:S,options:e,push:k,replace:H,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:be.add,isReady:oe,install(b){const N=this;b.component("RouterLink",qp),b.component("RouterView",Qp),b.config.globalProperties.$router=N,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>G(c)}),bn&&!xe&&c.value===wt&&(xe=!0,k(s.location).catch(ee=>{}));const A={};for(const ee in wt)A[ee]=ce(()=>c.value[ee]);b.provide(xs,N),b.provide(io,Un(A)),b.provide(Ci,c);const $=b.unmount;mn.add(b),b.unmount=function(){mn.delete(b),mn.size<1&&(l=wt,L&&L(),L=null,c.value=wt,xe=!1,_e=!1),$()}}};return xr}function yn(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Zp(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>xn(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>xn(l,c))||s.push(c))}return[n,r,s]}function eg(){return Re(xs)}function l2(){return Re(io)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=function(e,t){if(!e)throw ng(t)},ng=function(e){return new Error("Firebase Database ("+Ql.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},rg=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Zl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(h=64)),r.push(n[u],n[f],n[h],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Xl(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):rg(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw Error();const h=i<<2|a>>4;if(r.push(h),l!==64){const g=a<<4&240|l>>2;if(r.push(g),f!==64){const m=l<<6&192|f;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},sg=function(e){const t=Xl(e);return Zl.encodeByteArray(t,!0)},rs=function(e){return sg(e).replace(/\./g,"")},ss=function(e){try{return Zl.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u2(e){return gr(void 0,e)}function gr(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!ig(n)||(e[n]=gr(e[n],t[n]));return e}function ig(e){return e!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function og(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function ag(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cg(){return typeof self=="object"&&self.self===self}function lg(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function ug(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fg(){const e=Pe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function f2(){return Ql.NODE_ADMIN===!0}function d2(){return!ag()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dg(){try{return typeof indexedDB=="object"}catch{return!1}}function hg(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function pg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gg=()=>pg().__FIREBASE_DEFAULTS__,mg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},_g=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ss(e[1]);return t&&JSON.parse(t)},oo=()=>{try{return gg()||mg()||_g()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},vg=e=>{var t,n;return(n=(t=oo())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},yg=()=>{var e;return(e=oo())===null||e===void 0?void 0:e.config},eu=e=>{var t;return(t=oo())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function h2(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[rs(JSON.stringify(n)),rs(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="FirebaseError";class _t extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=wg,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hn.prototype.create)}}class hn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Eg(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new _t(s,a,r)}}function Eg(e,t){return e.replace(Ig,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Ig=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(e){return JSON.parse(e)}function p2(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu=function(e){let t={},n={},r={},s="";try{const i=e.split(".");t=La(ss(i[0])||""),n=La(ss(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:s}},g2=function(e){const t=tu(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},m2=function(e){const t=tu(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function _2(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function Tg(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function v2(e,t,n){const r={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(r[s]=t.call(n,e[s],s,e));return r}function is(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(Ma(i)&&Ma(o)){if(!is(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ma(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Gn(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function Jn(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const r=this.W_;if(typeof t=="string")for(let f=0;f<16;f++)r[f]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let f=16;f<80;f++){const h=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let f=0;f<80;f++){f<40?f<20?(l=a^i&(o^a),u=1518500249):(l=i^o^a,u=1859775393):f<60?(l=i&o|a&(i|o),u=2400959708):(l=i^o^a,u=3395469782);const h=(s<<5|s>>>27)+l+c+u+r[f]&4294967295;c=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<n;)if(i[o]=t.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=t[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)t[r]=this.chain_[s]>>i&255,++r;return t}}function nu(e,t){const n=new Cg(e,t);return n.subscribe.bind(n)}class Cg{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Sg(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=Zs),s.error===void 0&&(s.error=Zs),s.complete===void 0&&(s.complete=Zs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Sg(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Zs(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2=function(e,t,n,r){let s;if(r<t?s="at least "+t:r>n&&(s=n===0?"none":"no more than "+n),s){const i=e+" failed: Was called with "+r+(r===1?" argument.":" arguments.")+" Expects "+s+".";throw new Error(i)}};function ru(e,t){return`${e} failed: ${t} argument `}function w2(e,t,n,r){if(!(r&&!n)&&typeof n!="function")throw new Error(ru(e,t)+"must be a valid function.")}function E2(e,t,n,r){if(!(r&&!n)&&(typeof n!="object"||n===null))throw new Error(ru(e,t)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,tg(r<e.length,"Surrogate pair missing trail surrogate.");const o=e.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},T2=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};/**
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
 */function Bt(e){return e&&e._delegate?e._delegate:e}class sn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Gt="[DEFAULT]";/**
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
 */class Og{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new bg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Rg(t))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Gt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Gt){return this.instances.has(t)}getOptions(t=Gt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ag(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Gt){return this.component?this.component.multipleInstances?t:Gt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ag(e){return e===Gt?void 0:e}function Rg(e){return e.instantiationMode==="EAGER"}/**
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
 */class Pg{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Og(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=[];var ue;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ue||(ue={}));const su={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},kg=ue.INFO,xg={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},Ng=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=xg[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class co{constructor(t){this.name=t,this._logLevel=kg,this._logHandler=Ng,this._userLogHandler=null,ao.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ue))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?su[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...t),this._logHandler(this,ue.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...t),this._logHandler(this,ue.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...t),this._logHandler(this,ue.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...t),this._logHandler(this,ue.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...t),this._logHandler(this,ue.ERROR,...t)}}function Lg(e){ao.forEach(t=>{t.setLogLevel(e)})}function Dg(e,t){for(const n of ao){let r=null;t&&t.level&&(r=su[t.level]),e===null?n.userLogHandler=null:n.userLogHandler=(s,i,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");i>=(r??s.logLevel)&&e({level:ue[i].toLowerCase(),message:a,args:o,type:s.name})}}}const Mg=(e,t)=>t.some(n=>e instanceof n);let $a,Ua;function $g(){return $a||($a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ug(){return Ua||(Ua=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iu=new WeakMap,Si=new WeakMap,ou=new WeakMap,ei=new WeakMap,lo=new WeakMap;function Fg(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Lt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&iu.set(n,e)}).catch(()=>{}),lo.set(t,e),t}function Bg(e){if(Si.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Si.set(e,t)}let Oi={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Si.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ou.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function jg(e){Oi=e(Oi)}function Hg(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ti(this),t,...n);return ou.set(r,t.sort?t.sort():[t]),Lt(r)}:Ug().includes(e)?function(...t){return e.apply(ti(this),t),Lt(iu.get(this))}:function(...t){return Lt(e.apply(ti(this),t))}}function zg(e){return typeof e=="function"?Hg(e):(e instanceof IDBTransaction&&Bg(e),Mg(e,$g())?new Proxy(e,Oi):e)}function Lt(e){if(e instanceof IDBRequest)return Fg(e);if(ei.has(e))return ei.get(e);const t=zg(e);return t!==e&&(ei.set(e,t),lo.set(t,e)),t}const ti=e=>lo.get(e);function Vg(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Lt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Lt(o.result),c.oldVersion,c.newVersion,Lt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Wg=["get","getKey","getAll","getAllKeys","count"],Kg=["put","add","delete","clear"],ni=new Map;function Fa(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ni.get(t))return ni.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Kg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Wg.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ni.set(t,i),i}jg(e=>({...e,get:(t,n,r)=>Fa(t,n)||e.get(t,n,r),has:(t,n)=>!!Fa(t,n)||e.has(t,n)}));/**
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
 */class qg{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Gg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Gg(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ai="@firebase/app",Ba="0.9.0";/**
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
 */const on=new co("@firebase/app"),Jg="@firebase/app-compat",Yg="@firebase/analytics-compat",Qg="@firebase/analytics",Xg="@firebase/app-check-compat",Zg="@firebase/app-check",em="@firebase/auth",tm="@firebase/auth-compat",nm="@firebase/database",rm="@firebase/database-compat",sm="@firebase/functions",im="@firebase/functions-compat",om="@firebase/installations",am="@firebase/installations-compat",cm="@firebase/messaging",lm="@firebase/messaging-compat",um="@firebase/performance",fm="@firebase/performance-compat",dm="@firebase/remote-config",hm="@firebase/remote-config-compat",pm="@firebase/storage",gm="@firebase/storage-compat",mm="@firebase/firestore",_m="@firebase/firestore-compat",vm="firebase",ym="9.15.0";/**
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
 */const Ut="[DEFAULT]",bm={[Ai]:"fire-core",[Jg]:"fire-core-compat",[Qg]:"fire-analytics",[Yg]:"fire-analytics-compat",[Zg]:"fire-app-check",[Xg]:"fire-app-check-compat",[em]:"fire-auth",[tm]:"fire-auth-compat",[nm]:"fire-rtdb",[rm]:"fire-rtdb-compat",[sm]:"fire-fn",[im]:"fire-fn-compat",[om]:"fire-iid",[am]:"fire-iid-compat",[cm]:"fire-fcm",[lm]:"fire-fcm-compat",[um]:"fire-perf",[fm]:"fire-perf-compat",[dm]:"fire-rc",[hm]:"fire-rc-compat",[pm]:"fire-gcs",[gm]:"fire-gcs-compat",[mm]:"fire-fst",[_m]:"fire-fst-compat","fire-js":"fire-js",[vm]:"fire-js-all"};/**
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
 */const Ft=new Map,mr=new Map;function os(e,t){try{e.container.addComponent(t)}catch(n){on.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function au(e,t){e.container.addOrOverwriteComponent(t)}function an(e){const t=e.name;if(mr.has(t))return on.debug(`There were multiple attempts to register component ${t}.`),!1;mr.set(t,e);for(const n of Ft.values())os(n,e);return!0}function Ns(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function wm(e,t,n=Ut){Ns(e,t).clearInstance(n)}function Em(){mr.clear()}/**
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
 */const Im={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ht=new hn("app","Firebase",Im);/**
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
 */let Tm=class{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ht.create("app-deleted",{appName:this._name})}};/**
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
 */const Fn=ym;function uo(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ut,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw ht.create("bad-app-name",{appName:String(s)});if(n||(n=yg()),!n)throw ht.create("no-options");const i=Ft.get(s);if(i){if(is(n,i.options)&&is(r,i.config))return i;throw ht.create("duplicate-app",{appName:s})}const o=new Pg(s);for(const c of mr.values())o.addComponent(c);const a=new Tm(n,r,o);return Ft.set(s,a),a}function cu(e=Ut){const t=Ft.get(e);if(!t&&e===Ut)return uo();if(!t)throw ht.create("no-app",{appName:e});return t}function Cm(){return Array.from(Ft.values())}async function lu(e){const t=e.name;Ft.has(t)&&(Ft.delete(t),await Promise.all(e.container.getProviders().map(n=>n.delete())),e.isDeleted=!0)}function Dt(e,t,n){var r;let s=(r=bm[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),on.warn(a.join(" "));return}an(new sn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}function uu(e,t){if(e!==null&&typeof e!="function")throw ht.create("invalid-log-argument");Dg(e,t)}function fu(e){Lg(e)}/**
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
 */const Sm="firebase-heartbeat-database",Om=1,_r="firebase-heartbeat-store";let ri=null;function du(){return ri||(ri=Vg(Sm,Om,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(_r)}}}).catch(e=>{throw ht.create("idb-open",{originalErrorMessage:e.message})})),ri}async function Am(e){try{return(await du()).transaction(_r).objectStore(_r).get(hu(e))}catch(t){if(t instanceof _t)on.warn(t.message);else{const n=ht.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});on.warn(n.message)}}}async function ja(e,t){try{const r=(await du()).transaction(_r,"readwrite");return await r.objectStore(_r).put(t,hu(e)),r.done}catch(n){if(n instanceof _t)on.warn(n.message);else{const r=ht.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});on.warn(r.message)}}}function hu(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Rm=1024,Pm=30*24*60*60*1e3;class km{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Nm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ha();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Pm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ha(),{heartbeatsToSend:n,unsentEntries:r}=xm(this._heartbeatsCache.heartbeats),s=rs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ha(){return new Date().toISOString().substring(0,10)}function xm(e,t=Rm){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),za(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),za(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Nm{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dg()?hg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Am(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ja(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ja(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function za(e){return rs(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Lm(e){an(new sn("platform-logger",t=>new qg(t),"PRIVATE")),an(new sn("heartbeat",t=>new km(t),"PRIVATE")),Dt(Ai,Ba,e),Dt(Ai,Ba,"esm2017"),Dt("fire-js","")}Lm("");const Dm=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:Fn,_DEFAULT_ENTRY_NAME:Ut,_addComponent:os,_addOrOverwriteComponent:au,_apps:Ft,_clearComponents:Em,_components:mr,_getProvider:Ns,_registerComponent:an,_removeServiceInstance:wm,deleteApp:lu,getApp:cu,getApps:Cm,initializeApp:uo,onLog:uu,registerVersion:Dt,setLogLevel:fu,FirebaseError:_t},Symbol.toStringTag,{value:"Module"}));var Ri=function(e,t){return Ri=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])},Ri(e,t)};function S2(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Ri(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var Va=function(){return Va=Object.assign||function(t){for(var n,r=1,s=arguments.length;r<s;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Va.apply(this,arguments)};function fo(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function O2(e,t,n){if(n||arguments.length===2)for(var r=0,s=t.length,i;r<s;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function pu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Mm=pu,gu=new hn("auth","Firebase",pu());/**
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
 */const Wa=new co("@firebase/auth");function Kr(e,...t){Wa.logLevel<=ue.ERROR&&Wa.error(`Auth (${Fn}): ${e}`,...t)}/**
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
 */function Xe(e,...t){throw ho(e,...t)}function ot(e,...t){return ho(e,...t)}function $m(e,t,n){const r=Object.assign(Object.assign({},Mm()),{[t]:n});return new hn("auth","Firebase",r).create(t,{appName:e.name})}function ho(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return gu.create(e,...t)}function z(e,t,...n){if(!e)throw ho(t,...n)}function ut(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Kr(t),new Error(t)}function gt(e,t){e||ut(t)}/**
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
 */const Ka=new Map;function ft(e){gt(e instanceof Function,"Expected a class definition");let t=Ka.get(e);return t?(gt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ka.set(e,t),t)}/**
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
 */function Um(e,t){const n=Ns(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(is(i,t??{}))return s;Xe(s,"already-initialized")}return n.initialize({options:t})}function Fm(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ft);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
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
 */function Pi(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Bm(){return qa()==="http:"||qa()==="https:"}function qa(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function jm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Bm()||lg()||"connection"in navigator)?navigator.onLine:!0}function Hm(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Cr{constructor(t,n){this.shortDelay=t,this.longDelay=n,gt(n>t,"Short delay should be less than long delay!"),this.isMobile=og()||ug()}get(){return jm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function po(e,t){gt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class mu{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Vm=new Cr(3e4,6e4);function Sr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Or(e,t,n,r,s={}){return _u(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=Tr(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),mu.fetch()(vu(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))})}async function _u(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},zm),t);try{const s=new Wm(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw jr(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw jr(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw jr(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw jr(e,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw $m(e,u,l);Xe(e,u)}}catch(s){if(s instanceof _t)throw s;Xe(e,"network-request-failed")}}async function Ar(e,t,n,r,s={}){const i=await Or(e,t,n,r,s);return"mfaPendingCredential"in i&&Xe(e,"multi-factor-auth-required",{_serverResponse:i}),i}function vu(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?po(e.config,s):`${e.config.apiScheme}://${s}`}class Wm{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ot(this.auth,"network-request-failed")),Vm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function jr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ot(e,t,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Km(e,t){return Or(e,"POST","/v1/accounts:delete",t)}async function qm(e,t){return Or(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function ir(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Gm(e,t=!1){const n=Bt(e),r=await n.getIdToken(t),s=go(r);z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ir(si(s.auth_time)),issuedAtTime:ir(si(s.iat)),expirationTime:ir(si(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function si(e){return Number(e)*1e3}function go(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Kr("JWT malformed, contained fewer than 3 sections"),null;try{const s=ss(n);return s?JSON.parse(s):(Kr("Failed to decode base64 JWT payload"),null)}catch(s){return Kr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Jm(e){const t=go(e);return z(t,"internal-error"),z(typeof t.exp<"u","internal-error"),z(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function vr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof _t&&Ym(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Ym({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class Qm{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class yu{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ir(this.lastLoginAt),this.creationTime=ir(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function as(e){var t;const n=e.auth,r=await e.getIdToken(),s=await vr(e,qm(n,{idToken:r}));z(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?e_(i.providerUserInfo):[],a=Zm(e.providerData,o),c=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new yu(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function Xm(e){const t=Bt(e);await as(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Zm(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function e_(e){return e.map(t=>{var{providerId:n}=t,r=fo(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function t_(e,t){const n=await _u(e,{},async()=>{const r=Tr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=vu(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",mu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class yr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){z(t.idToken,"internal-error"),z(typeof t.idToken<"u","internal-error"),z(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Jm(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return z(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await t_(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new yr;return r&&(z(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(z(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(z(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new yr,this.toJSON())}_performRefresh(){return ut("not implemented")}}/**
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
 */function Et(e,t){z(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class rn{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=fo(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Qm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new yu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await vr(this,this.stsTokenManager.getToken(this.auth,t));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Gm(this,t)}reload(){return Xm(this)}_assign(t){this!==t&&(z(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new rn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await as(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await vr(this,Km(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(l=n.createdAt)!==null&&l!==void 0?l:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:x,emailVerified:k,isAnonymous:H,providerData:Q,stsTokenManager:j}=n;z(x&&j,t,"internal-error");const O=yr.fromJSON(this.name,j);z(typeof x=="string",t,"internal-error"),Et(f,t.name),Et(h,t.name),z(typeof k=="boolean",t,"internal-error"),z(typeof H=="boolean",t,"internal-error"),Et(g,t.name),Et(m,t.name),Et(y,t.name),Et(R,t.name),Et(S,t.name),Et(D,t.name);const V=new rn({uid:x,auth:t,email:h,emailVerified:k,displayName:f,isAnonymous:H,photoURL:m,phoneNumber:g,tenantId:y,stsTokenManager:O,createdAt:S,lastLoginAt:D});return Q&&Array.isArray(Q)&&(V.providerData=Q.map(q=>Object.assign({},q))),R&&(V._redirectEventId=R),V}static async _fromIdTokenResponse(t,n,r=!1){const s=new yr;s.updateFromServerResponse(n);const i=new rn({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await as(i),i}}/**
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
 */class bu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}bu.type="NONE";const Ga=bu;/**
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
 */function qr(e,t,n){return`firebase:${e}:${t}:${n}`}class Sn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=qr(this.userKey,s.apiKey,i),this.fullPersistenceKey=qr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?rn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Sn(ft(Ga),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ft(Ga);const o=qr(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=rn._fromJSON(t,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Sn(i,t,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Sn(i,t,r))}}/**
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
 */function Ja(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Iu(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(wu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Cu(t))return"Blackberry";if(Su(t))return"Webos";if(mo(t))return"Safari";if((t.includes("chrome/")||Eu(t))&&!t.includes("edge/"))return"Chrome";if(Tu(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wu(e=Pe()){return/firefox\//i.test(e)}function mo(e=Pe()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Eu(e=Pe()){return/crios\//i.test(e)}function Iu(e=Pe()){return/iemobile/i.test(e)}function Tu(e=Pe()){return/android/i.test(e)}function Cu(e=Pe()){return/blackberry/i.test(e)}function Su(e=Pe()){return/webos/i.test(e)}function Ls(e=Pe()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function n_(e=Pe()){var t;return Ls(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function r_(){return fg()&&document.documentMode===10}function Ou(e=Pe()){return Ls(e)||Tu(e)||Su(e)||Cu(e)||/windows phone/i.test(e)||Iu(e)}function s_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Au(e,t=[]){let n;switch(e){case"Browser":n=Ja(Pe());break;case"Worker":n=`${Ja(Pe())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fn}/${r}`}/**
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
 */class i_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class o_{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ya(this),this.idTokenSubscription=new Ya(this),this.beforeStateQueue=new i_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ft(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Sn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await as(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Hm()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Bt(t):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&z(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ft(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new hn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ft(t)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Sn.create(this,[ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?t.addObserver(n,r,s):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Au(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Rr(e){return Bt(e)}class Ya{constructor(t){this.auth=t,this.observer=null,this.addObserver=nu(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function a_(e,t,n){const r=Rr(e);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Ru(t),{host:o,port:a}=c_(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||l_()}function Ru(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function c_(e){const t=Ru(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Qa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Qa(o)}}}function Qa(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function l_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class _o{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ut("not implemented")}_getIdTokenResponse(t){return ut("not implemented")}_linkToIdToken(t,n){return ut("not implemented")}_getReauthenticationResolver(t){return ut("not implemented")}}async function u_(e,t){return Or(e,"POST","/v1/accounts:update",t)}/**
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
 */async function f_(e,t){return Ar(e,"POST","/v1/accounts:signInWithPassword",Sr(e,t))}/**
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
 */async function d_(e,t){return Ar(e,"POST","/v1/accounts:signInWithEmailLink",Sr(e,t))}async function h_(e,t){return Ar(e,"POST","/v1/accounts:signInWithEmailLink",Sr(e,t))}/**
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
 */class br extends _o{constructor(t,n,r,s=null){super("password",r),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new br(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new br(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return f_(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return d_(t,{email:this._email,oobCode:this._password});default:Xe(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return u_(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return h_(t,{idToken:n,email:this._email,oobCode:this._password});default:Xe(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function On(e,t){return Ar(e,"POST","/v1/accounts:signInWithIdp",Sr(e,t))}/**
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
 */const p_="http://localhost";class cn extends _o{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new cn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=fo(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new cn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return On(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,On(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,On(t,n)}buildRequest(){const t={requestUri:p_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Tr(n)}return t}}/**
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
 */function g_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function m_(e){const t=Gn(Jn(e)).link,n=t?Gn(Jn(t)).deep_link_id:null,r=Gn(Jn(e)).deep_link_id;return(r?Gn(Jn(r)).link:null)||r||n||t||e}class vo{constructor(t){var n,r,s,i,o,a;const c=Gn(Jn(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=g_((s=c.mode)!==null&&s!==void 0?s:null);z(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=m_(t);try{return new vo(n)}catch{return null}}}/**
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
 */class Bn{constructor(){this.providerId=Bn.PROVIDER_ID}static credential(t,n){return br._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=vo.parseLink(n);return z(r,"argument-error"),br._fromEmailAndCode(t,r.code,r.tenantId)}}Bn.PROVIDER_ID="password";Bn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Pu{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pr extends Pu{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class St extends Pr{constructor(){super("facebook.com")}static credential(t){return cn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return St.credentialFromTaggedObject(t)}static credentialFromError(t){return St.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return St.credential(t.oauthAccessToken)}catch{return null}}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com";St.PROVIDER_ID="facebook.com";/**
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
 */class Ot extends Pr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return cn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ot.credentialFromTaggedObject(t)}static credentialFromError(t){return Ot.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Ot.credential(n,r)}catch{return null}}}Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";/**
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
 */class At extends Pr{constructor(){super("github.com")}static credential(t){return cn._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return At.credentialFromTaggedObject(t)}static credentialFromError(t){return At.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return At.credential(t.oauthAccessToken)}catch{return null}}}At.GITHUB_SIGN_IN_METHOD="github.com";At.PROVIDER_ID="github.com";/**
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
 */class Rt extends Pr{constructor(){super("twitter.com")}static credential(t,n){return cn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Rt.credentialFromTaggedObject(t)}static credentialFromError(t){return Rt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Rt.credential(n,r)}catch{return null}}}Rt.TWITTER_SIGN_IN_METHOD="twitter.com";Rt.PROVIDER_ID="twitter.com";/**
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
 */async function __(e,t){return Ar(e,"POST","/v1/accounts:signUp",Sr(e,t))}/**
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
 */class ln{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await rn._fromIdTokenResponse(t,r,s),o=Xa(r);return new ln({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=Xa(r);return new ln({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function Xa(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class cs extends _t{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,cs.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new cs(t,n,r,s)}}function ku(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?cs._fromErrorAndOperation(e,i,t,r):i})}async function v_(e,t,n=!1){const r=await vr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ln._forOperation(e,"link",r)}/**
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
 */async function y_(e,t,n=!1){const{auth:r}=e,s="reauthenticate";try{const i=await vr(e,ku(r,s,t,e),n);z(i.idToken,r,"internal-error");const o=go(i.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(e.uid===a,r,"user-mismatch"),ln._forOperation(e,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Xe(r,"user-mismatch"),i}}/**
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
 */async function xu(e,t,n=!1){const r="signIn",s=await ku(e,r,t),i=await ln._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function b_(e,t){return xu(Rr(e),t)}async function A2(e,t,n){const r=Rr(e),s=await __(r,{returnSecureToken:!0,email:t,password:n}),i=await ln._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function R2(e,t,n){return b_(Bt(e),Bn.credential(t,n))}function w_(e,t,n,r){return Bt(e).onIdTokenChanged(t,n,r)}function E_(e,t,n){return Bt(e).beforeAuthStateChanged(t,n)}function I_(e){return Bt(e).signOut()}const ls="__sak";/**
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
 */class Nu{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ls,"1"),this.storage.removeItem(ls),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function T_(){const e=Pe();return mo(e)||Ls(e)}const C_=1e3,S_=10;class Lu extends Nu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=T_()&&s_(),this.fallbackToPolling=Ou(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);r_()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,S_):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},C_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Lu.type="LOCAL";const O_=Lu;/**
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
 */class Du extends Nu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Du.type="SESSION";const Mu=Du;/**
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
 */function A_(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ds{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new Ds(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await A_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ds.receivers=[];/**
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
 */function yo(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class R_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=yo("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const h=f;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function at(){return window}function P_(e){at().location.href=e}/**
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
 */function $u(){return typeof at().WorkerGlobalScope<"u"&&typeof at().importScripts=="function"}async function k_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function x_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function N_(){return $u()?self:null}/**
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
 */const Uu="firebaseLocalStorageDb",L_=1,us="firebaseLocalStorage",Fu="fbase_key";class kr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ms(e,t){return e.transaction([us],t?"readwrite":"readonly").objectStore(us)}function D_(){const e=indexedDB.deleteDatabase(Uu);return new kr(e).toPromise()}function ki(){const e=indexedDB.open(Uu,L_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(us,{keyPath:Fu})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(us)?t(r):(r.close(),await D_(),t(await ki()))})})}async function Za(e,t,n){const r=Ms(e,!0).put({[Fu]:t,value:n});return new kr(r).toPromise()}async function M_(e,t){const n=Ms(e,!1).get(t),r=await new kr(n).toPromise();return r===void 0?null:r.value}function ec(e,t){const n=Ms(e,!0).delete(t);return new kr(n).toPromise()}const $_=800,U_=3;class Bu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ki(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>U_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $u()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ds._getInstance(N_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await k_(),!this.activeServiceWorker)return;this.sender=new R_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||x_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ki();return await Za(t,ls,"1"),await ec(t,ls),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Za(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>M_(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ec(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=Ms(s,!1).getAll();return new kr(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bu.type="LOCAL";const F_=Bu;/**
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
 */function B_(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function j_(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=ot("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",B_().appendChild(r)})}function H_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Cr(3e4,6e4);/**
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
 */function z_(e,t){return t?ft(t):(z(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class bo extends _o{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return On(t,this._buildIdpRequest())}_linkToIdToken(t,n){return On(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return On(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function V_(e){return xu(e.auth,new bo(e),e.bypassAuthState)}function W_(e){const{auth:t,user:n}=e;return z(n,t,"internal-error"),y_(n,new bo(e),e.bypassAuthState)}async function K_(e){const{auth:t,user:n}=e;return z(n,t,"internal-error"),v_(n,new bo(e),e.bypassAuthState)}/**
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
 */class ju{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return V_;case"linkViaPopup":case"linkViaRedirect":return K_;case"reauthViaPopup":case"reauthViaRedirect":return W_;default:Xe(this.auth,"internal-error")}}resolve(t){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const q_=new Cr(2e3,1e4);class wn extends ju{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,wn.currentPopupAction&&wn.currentPopupAction.cancel(),wn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return z(t,this.auth,"internal-error"),t}async onExecution(){gt(this.filter.length===1,"Popup operations only handle one event");const t=yo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ot(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,q_.get())};t()}}wn.currentPopupAction=null;/**
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
 */const G_="pendingRedirect",Gr=new Map;class J_ extends ju{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Gr.get(this.auth._key());if(!t){try{const r=await Y_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Gr.set(this.auth._key(),t)}return this.bypassAuthState||Gr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Y_(e,t){const n=Z_(t),r=X_(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Q_(e,t){Gr.set(e._key(),t)}function X_(e){return ft(e._redirectPersistence)}function Z_(e){return qr(G_,e.config.apiKey,e.name)}async function e0(e,t,n=!1){const r=Rr(e),s=z_(r,t),o=await new J_(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const t0=10*60*1e3;class n0{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!r0(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Hu(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ot(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=t0&&this.cachedEventUids.clear(),this.cachedEventUids.has(tc(t))}saveEventToCache(t){this.cachedEventUids.add(tc(t)),this.lastProcessedEventTime=Date.now()}}function tc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Hu({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function r0(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hu(e);default:return!1}}/**
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
 */async function s0(e,t={}){return Or(e,"GET","/v1/projects",t)}/**
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
 */const i0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,o0=/^https?/;async function a0(e){if(e.config.emulator)return;const{authorizedDomains:t}=await s0(e);for(const n of t)try{if(c0(n))return}catch{}Xe(e,"unauthorized-domain")}function c0(e){const t=Pi(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!o0.test(n))return!1;if(i0.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const l0=new Cr(3e4,6e4);function nc(){const e=at().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function u0(e){return new Promise((t,n)=>{var r,s,i;function o(){nc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{nc(),n(ot(e,"network-request-failed"))},timeout:l0.get()})}if(!((s=(r=at().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=at().gapi)===null||i===void 0)&&i.load)o();else{const a=H_("iframefcb");return at()[a]=()=>{gapi.load?o():n(ot(e,"network-request-failed"))},j_(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Jr=null,t})}let Jr=null;function f0(e){return Jr=Jr||u0(e),Jr}/**
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
 */const d0=new Cr(5e3,15e3),h0="__/auth/iframe",p0="emulator/auth/iframe",g0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},m0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _0(e){const t=e.config;z(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?po(t,p0):`https://${e.config.authDomain}/${h0}`,r={apiKey:t.apiKey,appName:e.name,v:Fn},s=m0.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Tr(r).slice(1)}`}async function v0(e){const t=await f0(e),n=at().gapi;return z(n,e,"internal-error"),t.open({where:document.body,url:_0(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:g0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ot(e,"network-request-failed"),a=at().setTimeout(()=>{i(o)},d0.get());function c(){at().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const y0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},b0=500,w0=600,E0="_blank",I0="http://localhost";class rc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function T0(e,t,n,r=b0,s=w0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},y0),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Pe().toLowerCase();n&&(a=Eu(l)?E0:n),wu(l)&&(t=t||I0,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[g,m])=>`${h}${g}=${m},`,"");if(n_(l)&&a!=="_self")return C0(t||"",a),new rc(null);const f=window.open(t||"",a,u);z(f,e,"popup-blocked");try{f.focus()}catch{}return new rc(f)}function C0(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const S0="__/auth/handler",O0="emulator/auth/handler";function sc(e,t,n,r,s,i){z(e.config.authDomain,e,"auth-domain-config-required"),z(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Fn,eventId:s};if(t instanceof Pu){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Tg(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(t instanceof Pr){const c=t.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${A0(e)}?${Tr(a).slice(1)}`}function A0({config:e}){return e.emulator?po(e,O0):`https://${e.authDomain}/${S0}`}/**
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
 */const ii="webStorageSupport";class R0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mu,this._completeRedirectFn=e0,this._overrideRedirectResult=Q_}async _openPopup(t,n,r,s){var i;gt((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=sc(t,n,r,Pi(),s);return T0(t,o,yo())}async _openRedirect(t,n,r,s){return await this._originValidation(t),P_(sc(t,n,r,Pi(),s)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(gt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await v0(t),r=new n0(t);return n.register("authEvent",s=>(z(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(ii,{type:ii},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ii];o!==void 0&&n(!!o),Xe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=a0(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ou()||mo()||Ls()}}const P0=R0;var ic="@firebase/auth",oc="0.21.0";/**
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
 */class k0{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function x0(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function N0(e){an(new sn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{z(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),z(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Au(e)},u=new o_(a,c,l);return Fm(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),an(new sn("auth-internal",t=>{const n=Rr(t.getProvider("auth").getImmediate());return(r=>new k0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dt(ic,oc,x0(e)),Dt(ic,oc,"esm2017")}/**
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
 */const L0=5*60,D0=eu("authIdTokenMaxAge")||L0;let ac=null;const M0=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>D0)return;const s=n==null?void 0:n.token;ac!==s&&(ac=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $0(e=cu()){const t=Ns(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Um(e,{popupRedirectResolver:P0,persistence:[F_,O_,Mu]}),r=eu("authTokenSyncURL");if(r){const i=M0(r);E_(n,i,()=>i(n.currentUser)),w_(n,o=>i(o))}const s=vg("auth");return s&&a_(n,`http://${s}`),n}N0("Browser");var U0=typeof global=="object"&&global&&global.Object===Object&&global;const F0=U0;var B0=typeof self=="object"&&self&&self.Object===Object&&self,j0=F0||B0||Function("return this")();const wo=j0;var H0=wo.Symbol;const Ln=H0;var zu=Object.prototype,z0=zu.hasOwnProperty,V0=zu.toString,Kn=Ln?Ln.toStringTag:void 0;function W0(e){var t=z0.call(e,Kn),n=e[Kn];try{e[Kn]=void 0;var r=!0}catch{}var s=V0.call(e);return r&&(t?e[Kn]=n:delete e[Kn]),s}var K0=Object.prototype,q0=K0.toString;function G0(e){return q0.call(e)}var J0="[object Null]",Y0="[object Undefined]",cc=Ln?Ln.toStringTag:void 0;function Vu(e){return e==null?e===void 0?Y0:J0:cc&&cc in Object(e)?W0(e):G0(e)}function Q0(e){return e!=null&&typeof e=="object"}var X0="[object Symbol]";function Eo(e){return typeof e=="symbol"||Q0(e)&&Vu(e)==X0}function Z0(e,t){for(var n=-1,r=e==null?0:e.length,s=Array(r);++n<r;)s[n]=t(e[n],n,e);return s}var ev=Array.isArray;const Io=ev;var tv=1/0,lc=Ln?Ln.prototype:void 0,uc=lc?lc.toString:void 0;function Wu(e){if(typeof e=="string")return e;if(Io(e))return Z0(e,Wu)+"";if(Eo(e))return uc?uc.call(e):"";var t=e+"";return t=="0"&&1/e==-tv?"-0":t}function fs(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var nv="[object AsyncFunction]",rv="[object Function]",sv="[object GeneratorFunction]",iv="[object Proxy]";function ov(e){if(!fs(e))return!1;var t=Vu(e);return t==rv||t==sv||t==nv||t==iv}var av=wo["__core-js_shared__"];const oi=av;var fc=function(){var e=/[^.]+$/.exec(oi&&oi.keys&&oi.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function cv(e){return!!fc&&fc in e}var lv=Function.prototype,uv=lv.toString;function fv(e){if(e!=null){try{return uv.call(e)}catch{}try{return e+""}catch{}}return""}var dv=/[\\^$.*+?()[\]{}|]/g,hv=/^\[object .+?Constructor\]$/,pv=Function.prototype,gv=Object.prototype,mv=pv.toString,_v=gv.hasOwnProperty,vv=RegExp("^"+mv.call(_v).replace(dv,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function yv(e){if(!fs(e)||cv(e))return!1;var t=ov(e)?vv:hv;return t.test(fv(e))}function bv(e,t){return e==null?void 0:e[t]}function To(e,t){var n=bv(e,t);return yv(n)?n:void 0}var wv=function(){try{var e=To(Object,"defineProperty");return e({},"",{}),e}catch{}}();const dc=wv;var Ev=9007199254740991,Iv=/^(?:0|[1-9]\d*)$/;function Tv(e,t){var n=typeof e;return t=t??Ev,!!t&&(n=="number"||n!="symbol"&&Iv.test(e))&&e>-1&&e%1==0&&e<t}function Cv(e,t,n){t=="__proto__"&&dc?dc(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function Ku(e,t){return e===t||e!==e&&t!==t}var Sv=Object.prototype,Ov=Sv.hasOwnProperty;function Av(e,t,n){var r=e[t];(!(Ov.call(e,t)&&Ku(r,n))||n===void 0&&!(t in e))&&Cv(e,t,n)}var Rv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Pv=/^\w*$/;function kv(e,t){if(Io(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||Eo(e)?!0:Pv.test(e)||!Rv.test(e)||t!=null&&e in Object(t)}var xv=To(Object,"create");const wr=xv;function Nv(){this.__data__=wr?wr(null):{},this.size=0}function Lv(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Dv="__lodash_hash_undefined__",Mv=Object.prototype,$v=Mv.hasOwnProperty;function Uv(e){var t=this.__data__;if(wr){var n=t[e];return n===Dv?void 0:n}return $v.call(t,e)?t[e]:void 0}var Fv=Object.prototype,Bv=Fv.hasOwnProperty;function jv(e){var t=this.__data__;return wr?t[e]!==void 0:Bv.call(t,e)}var Hv="__lodash_hash_undefined__";function zv(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=wr&&t===void 0?Hv:t,this}function un(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}un.prototype.clear=Nv;un.prototype.delete=Lv;un.prototype.get=Uv;un.prototype.has=jv;un.prototype.set=zv;function Vv(){this.__data__=[],this.size=0}function $s(e,t){for(var n=e.length;n--;)if(Ku(e[n][0],t))return n;return-1}var Wv=Array.prototype,Kv=Wv.splice;function qv(e){var t=this.__data__,n=$s(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Kv.call(t,n,1),--this.size,!0}function Gv(e){var t=this.__data__,n=$s(t,e);return n<0?void 0:t[n][1]}function Jv(e){return $s(this.__data__,e)>-1}function Yv(e,t){var n=this.__data__,r=$s(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function jn(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}jn.prototype.clear=Vv;jn.prototype.delete=qv;jn.prototype.get=Gv;jn.prototype.has=Jv;jn.prototype.set=Yv;var Qv=To(wo,"Map");const Xv=Qv;function Zv(){this.size=0,this.__data__={hash:new un,map:new(Xv||jn),string:new un}}function ey(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Us(e,t){var n=e.__data__;return ey(t)?n[typeof t=="string"?"string":"hash"]:n.map}function ty(e){var t=Us(this,e).delete(e);return this.size-=t?1:0,t}function ny(e){return Us(this,e).get(e)}function ry(e){return Us(this,e).has(e)}function sy(e,t){var n=Us(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function pn(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}pn.prototype.clear=Zv;pn.prototype.delete=ty;pn.prototype.get=ny;pn.prototype.has=ry;pn.prototype.set=sy;var iy="Expected a function";function Co(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(iy);var n=function(){var r=arguments,s=t?t.apply(this,r):r[0],i=n.cache;if(i.has(s))return i.get(s);var o=e.apply(this,r);return n.cache=i.set(s,o)||i,o};return n.cache=new(Co.Cache||pn),n}Co.Cache=pn;var oy=500;function ay(e){var t=Co(e,function(r){return n.size===oy&&n.clear(),r}),n=t.cache;return t}var cy=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ly=/\\(\\)?/g,uy=ay(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(cy,function(n,r,s,i){t.push(s?i.replace(ly,"$1"):r||n)}),t});const fy=uy;function dy(e){return e==null?"":Wu(e)}function qu(e,t){return Io(e)?e:kv(e,t)?[e]:fy(dy(e))}var hy=1/0;function Gu(e){if(typeof e=="string"||Eo(e))return e;var t=e+"";return t=="0"&&1/e==-hy?"-0":t}function py(e,t){t=qu(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[Gu(t[n++])];return n&&n==r?e:void 0}function gy(e,t,n){var r=e==null?void 0:py(e,t);return r===void 0?n:r}function my(e){for(var t=-1,n=e==null?0:e.length,r={};++t<n;){var s=e[t];r[s[0]]=s[1]}return r}function _y(e,t,n,r){if(!fs(e))return e;t=qu(t,e);for(var s=-1,i=t.length,o=i-1,a=e;a!=null&&++s<i;){var c=Gu(t[s]),l=n;if(c==="__proto__"||c==="constructor"||c==="prototype")return e;if(s!=o){var u=a[c];l=r?r(u,c,a):void 0,l===void 0&&(l=fs(u)?u:Tv(t[s+1])?[]:{})}Av(a,c,l),a=a[c]}return e}function vy(e,t,n){return e==null?e:_y(e,t,n)}var yy=Object.defineProperty,by=Object.defineProperties,wy=Object.getOwnPropertyDescriptors,hc=Object.getOwnPropertySymbols,Ey=Object.prototype.hasOwnProperty,Iy=Object.prototype.propertyIsEnumerable,pc=(e,t,n)=>t in e?yy(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ty=(e,t)=>{for(var n in t||(t={}))Ey.call(t,n)&&pc(e,n,t[n]);if(hc)for(var n of hc(t))Iy.call(t,n)&&pc(e,n,t[n]);return e},Cy=(e,t)=>by(e,wy(t));function P2(e,t){var n;const r=Qc();return vd(()=>{r.value=e()},Cy(Ty({},t),{flush:(n=t==null?void 0:t.flush)!=null?n:"sync"})),Vi(r)}var gc;const gn=typeof window<"u",k2=e=>typeof e=="boolean",ds=e=>typeof e=="number",Sy=e=>typeof e=="string",Oy=()=>{};gn&&((gc=window==null?void 0:window.navigator)!=null&&gc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function hs(e){return typeof e=="function"?e():G(e)}function Ay(e,t){function n(...r){e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})}return n}function Ry(e,t={}){let n,r;return i=>{const o=hs(e),a=hs(t.maxWait);if(n&&clearTimeout(n),o<=0||a!==void 0&&a<=0)return r&&(clearTimeout(r),r=null),i();a&&!r&&(r=setTimeout(()=>{n&&clearTimeout(n),r=null,i()},a)),n=setTimeout(()=>{r&&clearTimeout(r),r=null,i()},o)}}function Py(e){return e}function So(e){return Mc()?($c(e),!0):!1}function ky(e,t=200,n={}){return Ay(Ry(t,n),e)}function x2(e,t=200,n={}){const r=Ee(e.value),s=ky(()=>{r.value=e.value},t,n);return it(e,()=>s()),r}function xy(e,t=!0){dn()?Ir(e):t?e():ws(e)}function Ny(e,t,n={}){const{immediate:r=!0}=n,s=Ee(!1);let i=null;function o(){i&&(clearTimeout(i),i=null)}function a(){s.value=!1,o()}function c(...l){o(),s.value=!0,i=setTimeout(()=>{s.value=!1,i=null,e(...l)},hs(t))}return r&&(s.value=!0,gn&&c()),So(a),{isPending:s,start:c,stop:a}}function En(e){var t;const n=hs(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Fs=gn?window:void 0,Ly=gn?window.document:void 0;function Pt(...e){let t,n,r,s;if(Sy(e[0])||Array.isArray(e[0])?([n,r,s]=e,t=Fs):[t,n,r,s]=e,!t)return Oy;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},a=(u,f,h)=>(u.addEventListener(f,h,s),()=>u.removeEventListener(f,h,s)),c=it(()=>En(t),u=>{o(),u&&i.push(...n.flatMap(f=>r.map(h=>a(u,f,h))))},{immediate:!0,flush:"post"}),l=()=>{c(),o()};return So(l),l}function N2(e,t,n={}){const{window:r=Fs,ignore:s=[],capture:i=!0,detectIframe:o=!1}=n;if(!r)return;let a=!0,c;const l=g=>s.some(m=>{if(typeof m=="string")return Array.from(r.document.querySelectorAll(m)).some(y=>y===g.target||g.composedPath().includes(y));{const y=En(m);return y&&(g.target===y||g.composedPath().includes(y))}}),u=g=>{r.clearTimeout(c);const m=En(e);if(!(!m||m===g.target||g.composedPath().includes(m))){if(g.detail===0&&(a=!l(g)),!a){a=!0;return}t(g)}},f=[Pt(r,"click",u,{passive:!0,capture:i}),Pt(r,"pointerdown",g=>{const m=En(e);m&&(a=!g.composedPath().includes(m)&&!l(g))},{passive:!0}),Pt(r,"pointerup",g=>{if(g.button===0){const m=g.composedPath();g.composedPath=()=>m,c=r.setTimeout(()=>u(g),50)}},{passive:!0}),o&&Pt(r,"blur",g=>{var m;const y=En(e);((m=r.document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(y!=null&&y.contains(r.document.activeElement))&&t(g)})].filter(Boolean);return()=>f.forEach(g=>g())}function Dy(e,t=!1){const n=Ee(),r=()=>n.value=Boolean(e());return r(),xy(r,t),n}const xi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ni="__vueuse_ssr_handlers__";xi[Ni]=xi[Ni]||{};xi[Ni];function L2({document:e=Ly}={}){if(!e)return Ee("visible");const t=Ee(e.visibilityState);return Pt(e,"visibilitychange",()=>{t.value=e.visibilityState}),t}var mc=Object.getOwnPropertySymbols,My=Object.prototype.hasOwnProperty,$y=Object.prototype.propertyIsEnumerable,Uy=(e,t)=>{var n={};for(var r in e)My.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&mc)for(var r of mc(e))t.indexOf(r)<0&&$y.call(e,r)&&(n[r]=e[r]);return n};function Fy(e,t,n={}){const r=n,{window:s=Fs}=r,i=Uy(r,["window"]);let o;const a=Dy(()=>s&&"ResizeObserver"in s),c=()=>{o&&(o.disconnect(),o=void 0)},l=it(()=>En(e),f=>{c(),a.value&&s&&f&&(o=new ResizeObserver(t),o.observe(f,i))},{immediate:!0,flush:"post"}),u=()=>{c(),l()};return So(u),{isSupported:a,stop:u}}var _c;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(_c||(_c={}));var By=Object.defineProperty,vc=Object.getOwnPropertySymbols,jy=Object.prototype.hasOwnProperty,Hy=Object.prototype.propertyIsEnumerable,yc=(e,t,n)=>t in e?By(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,zy=(e,t)=>{for(var n in t||(t={}))jy.call(t,n)&&yc(e,n,t[n]);if(vc)for(var n of vc(t))Hy.call(t,n)&&yc(e,n,t[n]);return e};const Vy={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};zy({linear:Py},Vy);function D2({window:e=Fs}={}){if(!e)return Ee(!1);const t=Ee(e.document.hasFocus());return Pt(e,"blur",()=>{t.value=!1}),Pt(e,"focus",()=>{t.value=!0}),t}const Wy=e=>e===void 0,M2=e=>!e&&e!==0||B(e)&&e.length===0||se(e)&&!Object.keys(e).length,Ky=e=>typeof Element>"u"?!1:e instanceof Element,qy=e=>ge(e)?!Number.isNaN(Number(e)):!1,bc=e=>Object.keys(e),$2=(e,t,n)=>({get value(){return gy(e,t,n)},set value(r){vy(e,t,r)}}),Ju=(e="")=>e.split(" ").filter(t=>!!t.trim()),U2=(e,t)=>{if(!e||!t)return!1;if(t.includes(" "))throw new Error("className should not contain space.");return e.classList.contains(t)},F2=(e,t)=>{!e||!t.trim()||e.classList.add(...Ju(t))},B2=(e,t)=>{!e||!t.trim()||e.classList.remove(...Ju(t))},j2=(e,t)=>{var n;if(!gn||!e||!t)return"";let r=Ye(t);r==="float"&&(r="cssFloat");try{const s=e.style[r];if(s)return s;const i=(n=document.defaultView)==null?void 0:n.getComputedStyle(e,"");return i?i[r]:""}catch{return e.style[r]}};function Gy(e,t="px"){if(!e)return"";if(ds(e)||qy(e))return`${e}${t}`;if(ge(e))return e}/*! Element Plus Icons Vue v2.0.10 */var Te=(e,t)=>{let n=e.__vccOpts||e;for(let[r,s]of t)n[r]=s;return n},Jy={name:"ArrowDown"},Yy={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Qy=J("path",{fill:"currentColor",d:"M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"},null,-1),Xy=[Qy];function Zy(e,t,n,r,s,i){return te(),he("svg",Yy,Xy)}var H2=Te(Jy,[["render",Zy],["__file","arrow-down.vue"]]),eb={name:"ArrowLeft"},tb={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},nb=J("path",{fill:"currentColor",d:"M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"},null,-1),rb=[nb];function sb(e,t,n,r,s,i){return te(),he("svg",tb,rb)}var z2=Te(eb,[["render",sb],["__file","arrow-left.vue"]]),ib={name:"ArrowRight"},ob={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},ab=J("path",{fill:"currentColor",d:"M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"},null,-1),cb=[ab];function lb(e,t,n,r,s,i){return te(),he("svg",ob,cb)}var V2=Te(ib,[["render",lb],["__file","arrow-right.vue"]]),ub={name:"ArrowUp"},fb={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},db=J("path",{fill:"currentColor",d:"m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"},null,-1),hb=[db];function pb(e,t,n,r,s,i){return te(),he("svg",fb,hb)}var W2=Te(ub,[["render",pb],["__file","arrow-up.vue"]]),gb={name:"Calendar"},mb={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},_b=J("path",{fill:"currentColor",d:"M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z"},null,-1),vb=[_b];function yb(e,t,n,r,s,i){return te(),he("svg",mb,vb)}var K2=Te(gb,[["render",yb],["__file","calendar.vue"]]),bb={name:"CircleCheck"},wb={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Eb=J("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"},null,-1),Ib=J("path",{fill:"currentColor",d:"M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"},null,-1),Tb=[Eb,Ib];function Cb(e,t,n,r,s,i){return te(),he("svg",wb,Tb)}var Sb=Te(bb,[["render",Cb],["__file","circle-check.vue"]]),Ob={name:"CircleCloseFilled"},Ab={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Rb=J("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"},null,-1),Pb=[Rb];function kb(e,t,n,r,s,i){return te(),he("svg",Ab,Pb)}var Yu=Te(Ob,[["render",kb],["__file","circle-close-filled.vue"]]),xb={name:"CircleClose"},Nb={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Lb=J("path",{fill:"currentColor",d:"m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"},null,-1),Db=J("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"},null,-1),Mb=[Lb,Db];function $b(e,t,n,r,s,i){return te(),he("svg",Nb,Mb)}var Ub=Te(xb,[["render",$b],["__file","circle-close.vue"]]),Fb={name:"Clock"},Bb={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},jb=J("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"},null,-1),Hb=J("path",{fill:"currentColor",d:"M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"},null,-1),zb=J("path",{fill:"currentColor",d:"M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z"},null,-1),Vb=[jb,Hb,zb];function Wb(e,t,n,r,s,i){return te(),he("svg",Bb,Vb)}var q2=Te(Fb,[["render",Wb],["__file","clock.vue"]]),Kb={name:"Close"},qb={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Gb=J("path",{fill:"currentColor",d:"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"},null,-1),Jb=[Gb];function Yb(e,t,n,r,s,i){return te(),he("svg",qb,Jb)}var Qu=Te(Kb,[["render",Yb],["__file","close.vue"]]),Qb={name:"DArrowLeft"},Xb={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Zb=J("path",{fill:"currentColor",d:"M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"},null,-1),e1=[Zb];function t1(e,t,n,r,s,i){return te(),he("svg",Xb,e1)}var G2=Te(Qb,[["render",t1],["__file","d-arrow-left.vue"]]),n1={name:"DArrowRight"},r1={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},s1=J("path",{fill:"currentColor",d:"M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"},null,-1),i1=[s1];function o1(e,t,n,r,s,i){return te(),he("svg",r1,i1)}var J2=Te(n1,[["render",o1],["__file","d-arrow-right.vue"]]),a1={name:"Hide"},c1={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},l1=J("path",{d:"M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",fill:"currentColor"},null,-1),u1=J("path",{d:"M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",fill:"currentColor"},null,-1),f1=[l1,u1];function d1(e,t,n,r,s,i){return te(),he("svg",c1,f1)}var Y2=Te(a1,[["render",d1],["__file","hide.vue"]]),h1={name:"InfoFilled"},p1={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},g1=J("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"},null,-1),m1=[g1];function _1(e,t,n,r,s,i){return te(),he("svg",p1,m1)}var Xu=Te(h1,[["render",_1],["__file","info-filled.vue"]]),v1={name:"Loading"},y1={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},b1=J("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"},null,-1),w1=[b1];function E1(e,t,n,r,s,i){return te(),he("svg",y1,w1)}var I1=Te(v1,[["render",E1],["__file","loading.vue"]]),T1={name:"Plus"},C1={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},S1=J("path",{fill:"currentColor",d:"M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"},null,-1),O1=[S1];function A1(e,t,n,r,s,i){return te(),he("svg",C1,O1)}var Q2=Te(T1,[["render",A1],["__file","plus.vue"]]),R1={name:"SuccessFilled"},P1={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},k1=J("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"},null,-1),x1=[k1];function N1(e,t,n,r,s,i){return te(),he("svg",P1,x1)}var Zu=Te(R1,[["render",N1],["__file","success-filled.vue"]]),L1={name:"View"},D1={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},M1=J("path",{fill:"currentColor",d:"M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"},null,-1),$1=[M1];function U1(e,t,n,r,s,i){return te(),he("svg",D1,$1)}var X2=Te(L1,[["render",U1],["__file","view.vue"]]),F1={name:"WarningFilled"},B1={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},j1=J("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"},null,-1),H1=[j1];function z1(e,t,n,r,s,i){return te(),he("svg",B1,H1)}var ef=Te(F1,[["render",z1],["__file","warning-filled.vue"]]);const tf="__epPropKey",kt=e=>e,V1=e=>se(e)&&!!e[tf],nf=(e,t)=>{if(!se(e)||V1(e))return e;const{values:n,required:r,default:s,type:i,validator:o}=e,c={type:i,required:!!r,validator:n||o?l=>{let u=!1,f=[];if(n&&(f=Array.from(n),Z(e,"default")&&f.push(s),u||(u=f.includes(l))),o&&(u||(u=o(l))),!u&&f.length>0){const h=[...new Set(f)].map(g=>JSON.stringify(g)).join(", ");id(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${h}], got value ${JSON.stringify(l)}.`)}return u}:void 0,[tf]:!0};return Z(e,"default")&&(c.default=s),c},Bs=e=>my(Object.entries(e).map(([t,n])=>[t,nf(n,t)])),W1=kt([String,Object,Function]),Z2={Close:Qu},K1={Close:Qu,SuccessFilled:Zu,InfoFilled:Xu,WarningFilled:ef,CircleCloseFilled:Yu},wc={success:Zu,warning:ef,error:Yu,info:Xu},eE={validating:I1,success:Sb,error:Ub},rf=(e,t)=>{if(e.install=n=>{for(const r of[e,...Object.values(t??{})])n.component(r.name,r)},t)for(const[n,r]of Object.entries(t))e[n]=r;return e},q1=(e,t)=>(e.install=n=>{e._context=n._context,n.config.globalProperties[t]=e},e),tE=e=>(e.install=je,e),G1={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},J1=["","default","small","large"],nE={large:40,default:32,small:24},Y1=e=>e,sf=Symbol(),of=Symbol("formContextKey"),Q1=Symbol("formItemContextKey"),af=e=>{const t=dn();return ce(()=>{var n,r;return(r=((n=t.proxy)==null?void 0:n.$props)[e])!=null?r:void 0})},ps=Ee();function js(e,t=void 0){const n=dn()?Re(sf,ps):ps;return e?ce(()=>{var r,s;return(s=(r=n.value)==null?void 0:r[e])!=null?s:t}):n}const X1=(e,t,n=!1)=>{var r;const s=!!dn(),i=s?js():void 0,o=(r=t==null?void 0:t.provide)!=null?r:s?Qn:void 0;if(!o)return;const a=ce(()=>{const c=G(e);return i!=null&&i.value?Z1(i.value,c):c});return o(sf,a),(n||!ps.value)&&(ps.value=a.value),a},Z1=(e,t)=>{var n;const r=[...new Set([...bc(e),...bc(t)])],s={};for(const i of r)s[i]=(n=t[i])!=null?n:e[i];return s},ew=nf({type:String,values:J1,required:!1}),rE=(e,t={})=>{const n=Ee(void 0),r=t.prop?n:af("size"),s=t.global?n:js("size"),i=t.form?{size:void 0}:Re(of,void 0),o=t.formItem?{size:void 0}:Re(Q1,void 0);return ce(()=>r.value||G(e)||(o==null?void 0:o.size)||(i==null?void 0:i.size)||s.value||"")},sE=e=>{const t=af("disabled"),n=Re(of,void 0);return ce(()=>t.value||G(e)||(n==null?void 0:n.disabled)||!1)},tw="el",nw="is-",Kt=(e,t,n,r,s)=>{let i=`${e}-${t}`;return n&&(i+=`-${n}`),r&&(i+=`__${r}`),s&&(i+=`--${s}`),i},Oo=e=>{const t=js("namespace",tw);return{namespace:t,b:(m="")=>Kt(t.value,e,m,"",""),e:m=>m?Kt(t.value,e,"",m,""):"",m:m=>m?Kt(t.value,e,"","",m):"",be:(m,y)=>m&&y?Kt(t.value,e,m,y,""):"",em:(m,y)=>m&&y?Kt(t.value,e,"",m,y):"",bm:(m,y)=>m&&y?Kt(t.value,e,m,"",y):"",bem:(m,y,R)=>m&&y&&R?Kt(t.value,e,m,y,R):"",is:(m,...y)=>{const R=y.length>=1?y[0]:!0;return m&&R?`${nw}${m}`:""},cssVar:m=>{const y={};for(const R in m)m[R]&&(y[`--${t.value}-${R}`]=m[R]);return y},cssVarName:m=>`--${t.value}-${m}`,cssVarBlock:m=>{const y={};for(const R in m)m[R]&&(y[`--${t.value}-${e}-${R}`]=m[R]);return y},cssVarBlockName:m=>`--${t.value}-${e}-${m}`}},Ec=Ee(0),rw=()=>{const e=js("zIndex",2e3),t=ce(()=>e.value+Ec.value);return{initialZIndex:e,currentZIndex:t,nextZIndex:()=>(Ec.value++,t.value)}};var Ao=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n};const sw=Bs({size:{type:kt([Number,String])},color:{type:String}}),iw=Ze({name:"ElIcon",inheritAttrs:!1}),ow=Ze({...iw,props:sw,setup(e){const t=e,n=Oo("icon"),r=ce(()=>{const{size:s,color:i}=t;return!s&&!i?{}:{fontSize:Wy(s)?void 0:Gy(s),"--color":i}});return(s,i)=>(te(),he("i",Rl({class:G(n).b(),style:G(r)},s.$attrs),[Cs(s.$slots,"default")],16))}});var aw=Ao(ow,[["__file","/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);const Ic=rf(aw),cw=Bs({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),lw=["textContent"],uw=Ze({name:"ElBadge"}),fw=Ze({...uw,props:cw,setup(e,{expose:t}){const n=e,r=Oo("badge"),s=ce(()=>n.isDot?"":ds(n.value)&&ds(n.max)?n.max<n.value?`${n.max}+`:`${n.value}`:`${n.value}`);return t({content:s}),(i,o)=>(te(),he("div",{class:qe(G(r).b())},[Cs(i.$slots,"default"),Ie(Rs,{name:`${G(r).namespace.value}-zoom-in-center`,persisted:""},{default:Yn(()=>[gl(J("sup",{class:qe([G(r).e("content"),G(r).em("content",i.type),G(r).is("fixed",!!i.$slots.default),G(r).is("dot",i.isDot)]),textContent:Ac(G(s))},null,10,lw),[[Dl,!i.hidden&&(G(s)||i.isDot)]])]),_:1},8,["name"])],2))}});var dw=Ao(fw,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const hw=rf(dw),Li={},pw=Bs({a11y:{type:Boolean,default:!0},locale:{type:kt(Object)},size:ew,button:{type:kt(Object)},experimentalFeatures:{type:kt(Object)},keyboardNavigation:{type:Boolean,default:!0},message:{type:kt(Object)},zIndex:Number,namespace:{type:String,default:"el"}});Ze({name:"ElConfigProvider",props:pw,setup(e,{slots:t}){it(()=>e.message,r=>{Object.assign(Li,r??{})},{immediate:!0,deep:!0});const n=X1(e);return()=>Cs(t,"default",{config:n==null?void 0:n.value})}});const cf=["success","info","warning","error"],Ne=Y1({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:gn?document.body:void 0}),gw=Bs({customClass:{type:String,default:Ne.customClass},center:{type:Boolean,default:Ne.center},dangerouslyUseHTMLString:{type:Boolean,default:Ne.dangerouslyUseHTMLString},duration:{type:Number,default:Ne.duration},icon:{type:W1,default:Ne.icon},id:{type:String,default:Ne.id},message:{type:kt([String,Object,Function]),default:Ne.message},onClose:{type:kt(Function),required:!1},showClose:{type:Boolean,default:Ne.showClose},type:{type:String,values:cf,default:Ne.type},offset:{type:Number,default:Ne.offset},zIndex:{type:Number,default:Ne.zIndex},grouping:{type:Boolean,default:Ne.grouping},repeatNum:{type:Number,default:Ne.repeatNum}}),mw={destroy:()=>!0},st=Gc([]),_w=e=>{const t=st.findIndex(s=>s.id===e),n=st[t];let r;return t>0&&(r=st[t-1]),{current:n,prev:r}},vw=e=>{const{prev:t}=_w(e);return t?t.vm.exposed.bottom.value:0},yw=["id"],bw=["innerHTML"],ww=Ze({name:"ElMessage"}),Ew=Ze({...ww,props:gw,emits:mw,setup(e,{expose:t}){const n=e,{Close:r}=K1,s=Oo("message"),i=Ee(),o=Ee(!1),a=Ee(0);let c;const l=ce(()=>n.type?n.type==="error"?"danger":n.type:"info"),u=ce(()=>{const k=n.type;return{[s.bm("icon",k)]:k&&wc[k]}}),f=ce(()=>n.icon||wc[n.type]||""),h=ce(()=>vw(n.id)),g=ce(()=>n.offset+h.value),m=ce(()=>a.value+g.value),y=ce(()=>({top:`${g.value}px`,zIndex:n.zIndex}));function R(){n.duration!==0&&({stop:c}=Ny(()=>{D()},n.duration))}function S(){c==null||c()}function D(){o.value=!1}function x({code:k}){k===G1.esc&&D()}return Ir(()=>{R(),o.value=!0}),it(()=>n.repeatNum,()=>{S(),R()}),Pt(document,"keydown",x),Fy(i,()=>{a.value=i.value.getBoundingClientRect().height}),t({visible:o,bottom:m,close:D}),(k,H)=>(te(),Yt(Rs,{name:G(s).b("fade"),onBeforeLeave:k.onClose,onAfterLeave:H[0]||(H[0]=Q=>k.$emit("destroy")),persisted:""},{default:Yn(()=>[gl(J("div",{id:k.id,ref_key:"messageRef",ref:i,class:qe([G(s).b(),{[G(s).m(k.type)]:k.type&&!k.icon},G(s).is("center",k.center),G(s).is("closable",k.showClose),k.customClass]),style:gs(G(y)),role:"alert",onMouseenter:S,onMouseleave:R},[k.repeatNum>1?(te(),Yt(G(hw),{key:0,value:k.repeatNum,type:G(l),class:qe(G(s).e("badge"))},null,8,["value","type","class"])):Br("v-if",!0),G(f)?(te(),Yt(G(Ic),{key:1,class:qe([G(s).e("icon"),G(u)])},{default:Yn(()=>[(te(),Yt(Nd(G(f))))]),_:1},8,["class"])):Br("v-if",!0),Cs(k.$slots,"default",{},()=>[k.dangerouslyUseHTMLString?(te(),he($e,{key:1},[Br(" Caution here, message could've been compromised, never use user's input as message "),J("p",{class:qe(G(s).e("content")),innerHTML:k.message},null,10,bw)],2112)):(te(),he("p",{key:0,class:qe(G(s).e("content"))},Ac(k.message),3))]),k.showClose?(te(),Yt(G(Ic),{key:2,class:qe(G(s).e("closeBtn")),onClick:Wr(D,["stop"])},{default:Yn(()=>[Ie(G(r))]),_:1},8,["class","onClick"])):Br("v-if",!0)],46,yw),[[Dl,o.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Iw=Ao(Ew,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let Tw=1;const lf=e=>{const t=!e||ge(e)||Pn(e)||K(e)?{message:e}:e,n={...Ne,...t};if(!n.appendTo)n.appendTo=document.body;else if(ge(n.appendTo)){let r=document.querySelector(n.appendTo);Ky(r)||(r=document.body),n.appendTo=r}return n},Cw=e=>{const t=st.indexOf(e);if(t===-1)return;st.splice(t,1);const{handler:n}=e;n.close()},Sw=({appendTo:e,...t},n)=>{const{nextZIndex:r}=rw(),s=`message_${Tw++}`,i=t.onClose,o=document.createElement("div"),a={...t,zIndex:r()+t.zIndex,id:s,onClose:()=>{i==null||i(),Cw(f)},onDestroy:()=>{ga(null,o)}},c=Ie(Iw,a,K(a.message)||Pn(a.message)?{default:K(a.message)?a.message:()=>a.message}:null);c.appContext=n||Dn._context,ga(c,o),e.appendChild(o.firstElementChild);const l=c.component,f={id:s,vnode:c,vm:l,handler:{close:()=>{l.exposed.visible.value=!1}},props:c.component.props};return f},Dn=(e={},t)=>{if(!gn)return{close:()=>{}};if(ds(Li.max)&&st.length>=Li.max)return{close:()=>{}};const n=lf(e);if(n.grouping&&st.length){const s=st.find(({vnode:i})=>{var o;return((o=i.props)==null?void 0:o.message)===n.message});if(s)return s.props.repeatNum+=1,s.props.type=n.type,s.handler}const r=Sw(n,t);return st.push(r),r.handler};cf.forEach(e=>{Dn[e]=(t={},n)=>{const r=lf(t);return Dn({...r,type:e},n)}});function Ow(e){for(const t of st)(!e||e===t.props.type)&&t.handler.close()}Dn.closeAll=Ow;Dn._context=null;const Tc=q1(Dn,"$message"),Aw={class:"admin_navbar"},Rw=J("i",{class:"icon-sun"},null,-1),Pw=[Rw],kw={class:"menu"},xw=Ze({__name:"AdminNavbar",setup(e){const t=eg();Ee("1"),Ee(!0);const n=$0(),r=()=>{I_(n).then(o=>{localStorage.clear(),t.push("/login"),Tc({message:"登出成功！",type:"success"})}).catch(o=>{Tc.error("登出失敗")})},s=Ee(!1),i=Ee(localStorage.getItem("token"));return Ir(()=>{i.value!=null&&(s.value=!0)}),(o,a)=>(te(),he("div",Aw,[J("div",{class:"logo",onClick:a[0]||(a[0]=Wr(c=>o.$router.push("/admin"),["prevent"]))},Pw),J("div",kw,[J("ul",null,[J("li",{onClick:a[1]||(a[1]=Wr(c=>o.$router.push("/admin"),["prevent"]))},"教師列表"),J("li",{onClick:a[2]||(a[2]=Wr(c=>o.$router.push("/admin/schedules"),["prevent"]))},"教師課程表"),J("li",{onClick:r},"登出")])])]))}}),Nw={class:"main"},Lw=J("footer",null,[J("p",null,"版權所有")],-1),Dw=Ze({__name:"Layout",setup(e){return(t,n)=>{const r=ml("RouterView");return te(),he("div",null,[Ie(xw),J("div",Nw,[Ie(r)]),Lw])}}}),Mw=[{path:"/",redirect:"/index",component:()=>Be(()=>import("./FrontDeskLayout-165c79b0.js"),["./FrontDeskLayout-165c79b0.js","./moment-fbc5633a.js","./Navbar.vue_vue_type_style_index_0_lang-6540af88.js","./Navbar-e8f6747d.css"],import.meta.url),children:[{path:"index",component:()=>Be(()=>import("./Home-c88f25f0.js"),["./Home-c88f25f0.js","./el-input-89f3f19c.js","./el-input-53787a25.css","./el-overlay-589df493.js","./focus-trap-d6905be5.js","./el-overlay-c056f2fa.css","./main-fd2ff41c.js","./main-dc13c8dd.css","./firebaseConfig-68d48485.js","./Home-d0f2d079.css"],import.meta.url),name:"Home"},{path:"teacher/:id",component:()=>Be(()=>import("./Teacher-e95d1258.js"),["./Teacher-e95d1258.js","./firebaseConfig-68d48485.js"],import.meta.url),name:"FrontTeacher"},{path:"onetoone",component:()=>Be(()=>import("./onetoone-b65ddfd6.js"),["./onetoone-b65ddfd6.js","./firebaseConfig-68d48485.js"],import.meta.url),name:"OneToOne"},{path:"talk/:id",name:"Talk",component:()=>Be(()=>import("./Talk-9712c3c7.js"),["./Talk-9712c3c7.js","./el-input-89f3f19c.js","./el-input-53787a25.css","./el-overlay-589df493.js","./focus-trap-d6905be5.js","./el-overlay-c056f2fa.css","./moment-fbc5633a.js","./firebaseConfig-68d48485.js"],import.meta.url)}]},{path:"/login",component:()=>Be(()=>import("./Login-15446c44.js"),["./Login-15446c44.js","./el-input-89f3f19c.js","./el-input-53787a25.css","./Navbar.vue_vue_type_style_index_0_lang-6540af88.js","./Navbar-e8f6747d.css"],import.meta.url),name:"Login"},{path:"/register",component:()=>Be(()=>import("./Register-1b9b78bb.js"),["./Register-1b9b78bb.js","./el-input-89f3f19c.js","./el-input-53787a25.css","./Navbar.vue_vue_type_style_index_0_lang-6540af88.js","./Navbar-e8f6747d.css"],import.meta.url),name:"Register"},{path:"/admin",redirect:"/admin/index",component:Dw,children:[{path:"index",component:()=>Be(()=>import("./Teachers-79fad93a.js"),["./Teachers-79fad93a.js","./firebaseConfig-68d48485.js"],import.meta.url),name:"Teachers",meta:{requiresAuth:!0}},{path:"schedules",name:"Schedules",component:()=>Be(()=>import("./Schedules-2a0ec378.js"),["./Schedules-2a0ec378.js","./el-input-89f3f19c.js","./el-input-53787a25.css","./el-overlay-589df493.js","./focus-trap-d6905be5.js","./el-overlay-c056f2fa.css","./el-radio-b03f2a1e.js","./el-radio-642d4559.css","./moment-fbc5633a.js","./main-fd2ff41c.js","./main-dc13c8dd.css","./firebaseConfig-68d48485.js","./Schedules-7dddd0a8.css"],import.meta.url),meta:{requiresAuth:!0}},{path:"add_teacher",name:"addTeacher",component:()=>Be(()=>import("./Teacher-d04b3adc.js"),["./Teacher-d04b3adc.js","./el-input-89f3f19c.js","./el-input-53787a25.css","./el-radio-b03f2a1e.js","./focus-trap-d6905be5.js","./el-radio-642d4559.css","./firebaseConfig-68d48485.js","./Teacher-291341ed.css"],import.meta.url),meta:{requiresAuth:!0}},{path:"teacher/:id",name:"Teacher",component:()=>Be(()=>import("./Teacher-d04b3adc.js"),["./Teacher-d04b3adc.js","./el-input-89f3f19c.js","./el-input-53787a25.css","./el-radio-b03f2a1e.js","./focus-trap-d6905be5.js","./el-radio-642d4559.css","./firebaseConfig-68d48485.js","./Teacher-291341ed.css"],import.meta.url),meta:{requiresAuth:!0}}]},{path:"/:catchAll(.*)",component:()=>Be(()=>import("./404-73a98c18.js"),[],import.meta.url),meta:{title:"404"},name:"404"}],uf=Xp({history:pp(),routes:Mw});uf.beforeEach((e,t,n)=>{const r=localStorage.teacherId,s=localStorage.talkId,i=!!localStorage.token;e.path==="/admin"||e.path==="/login"||e.path==="/index"||e.path==="/teachers"||e.path==="/user_login"||e.path==="/register"||e.path===`/teacher/${r}`||e.path==="/onetoone"||e.path===`/talk/${s}`||i?n():n("/login")});const $w=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},Uw={};function Fw(e,t){const n=ml("RouterView");return te(),he("div",null,[Ie(n)])}const Bw=$w(Uw,[["render",Fw],["__scopeId","data-v-970e4332"]]);/**
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
 */class jw{constructor(t,n){this._delegate=t,this.firebase=n,os(t,new sn("app-compat",()=>this,"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(t=>{this._delegate.checkDestroyed(),t()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),lu(this._delegate)))}_getService(t,n=Ut){var r;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(t);return!s.isInitialized()&&((r=s.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:n})}_removeServiceInstance(t,n=Ut){this._delegate.container.getProvider(t).clearInstance(n)}_addComponent(t){os(this._delegate,t)}_addOrOverwriteComponent(t){au(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const Hw={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Cc=new hn("app-compat","Firebase",Hw);/**
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
 */function zw(e){const t={},n={__esModule:!0,initializeApp:i,app:s,registerVersion:Dt,setLogLevel:fu,onLog:uu,apps:null,SDK_VERSION:Fn,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:Dm}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete t[l]}function s(l){if(l=l||Ut,!Da(t,l))throw Cc.create("no-app",{appName:l});return t[l]}s.App=e;function i(l,u={}){const f=uo(l,u);if(Da(t,f.name))return t[f.name];const h=new e(f,n);return t[f.name]=h,h}function o(){return Object.keys(t).map(l=>t[l])}function a(l){const u=l.name,f=u.replace("-compat","");if(an(l)&&l.type==="PUBLIC"){const h=(g=s())=>{if(typeof g[f]!="function")throw Cc.create("invalid-app-argument",{appName:u});return g[f]()};l.serviceProps!==void 0&&gr(h,l.serviceProps),n[f]=h,e.prototype[f]=function(...g){return this._getService.bind(this,u).apply(this,l.multipleInstances?g:[])}}return l.type==="PUBLIC"?n[f]:null}function c(l,u){return u==="serverAuth"?null:u}return n}/**
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
 */function ff(){const e=zw(jw);e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:ff,extendNamespace:t,createSubscribe:nu,ErrorFactory:hn,deepExtend:gr});function t(n){gr(e,n)}return e}const Vw=ff();/**
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
 */const Sc=new co("@firebase/app-compat"),Ww="@firebase/app-compat",Kw="0.2.0";/**
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
 */function qw(e){Dt(Ww,Kw,e)}/**
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
 */if(cg()&&self.firebase!==void 0){Sc.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&Sc.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const df=Vw;qw();var Gw="firebase",Jw="9.15.0";/**
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
 */df.registerVersion(Gw,Jw,"app-compat");var Yw={apiKey:"AIzaSyDUdUd05bhQNrvuxXnqbErencxLKpKt9jw",authDomain:"lara-3f721.firebaseapp.com",databaseURL:"https://lara-3f721-default-rtdb.firebaseio.com",projectId:"lara-3f721",storageBucket:"lara-3f721.appspot.com",messagingSenderId:"289041287227",appId:"1:289041287227:web:b768a2d08bfdf3c7b2b41e"};df.initializeApp(Yw);const Ro=jh(Bw);Ro.use(Vh());Ro.use(uf);Ro.mount("#app");export{my as $,ye as A,fn as B,df as C,ce as D,G as E,$e as F,Zw as G,nh as H,eg as I,Tc as J,To as K,wo as L,fs as M,Cv as N,Av as O,ov as P,Q0 as Q,Vu as R,F0 as S,Rs as T,Io as U,Tv as V,jn as W,Xv as X,pn as Y,fv as Z,Ln as _,te as a,sn as a$,dn as a0,it as a1,js as a2,Re as a3,tw as a4,of as a5,Q1 as a6,el as a7,pl as a8,ds as a9,Ss as aA,I1 as aB,Qn as aC,tE as aD,J1 as aE,B as aF,k2 as aG,K as aH,hl as aI,Od as aJ,x2 as aK,Gy as aL,$2 as aM,Pn as aN,vd as aO,sd as aP,U2 as aQ,$c as aR,Z2 as aS,Ny as aT,e2 as aU,t2 as aV,S2 as aW,Va as aX,O2 as aY,Dt as aZ,an as a_,Bs as aa,ew as ab,kt as ac,W1 as ad,Y1 as ae,r2 as af,n2 as ag,rE as ah,sE as ai,Qc as aj,eE as ak,X2 as al,Y2 as am,Fy as an,Br as ao,qe as ap,Cs as aq,Yt as ar,Nd as as,Ic as at,Rl as au,Ub as av,je as aw,gs as ax,Ao as ay,rf as az,Ie as b,Ku as b$,co as b0,_t as b1,ue as b2,Fn as b3,h2 as b4,Bt as b5,Pe as b6,dg as b7,d2 as b8,tg as b9,$0 as bA,gy as bB,G1 as bC,l2 as bD,s2 as bE,o2 as bF,R2 as bG,a2 as bH,A2 as bI,c2 as bJ,vs as bK,nE as bL,Qu as bM,Z as bN,H2 as bO,ne as bP,Qw as bQ,If as bR,Xw as bS,L2 as bT,D2 as bU,z2 as bV,V2 as bW,Q2 as bX,Wy as bY,P2 as bZ,Eo as b_,p2 as ba,La as bb,Da as bc,I2 as bd,y2 as be,Zl as bf,_2 as bg,v2 as bh,ng as bi,ru as bj,bg as bk,f2 as bl,m2 as bm,g2 as bn,Tg as bo,og as bp,ug as bq,Tr as br,T2 as bs,u2 as bt,sg as bu,b2 as bv,w2 as bw,E2 as bx,Og as by,Pg as bz,he as c,nf as c0,So as c1,Cd as c2,Pt as c3,$t as c4,ze as c5,En as c6,Ky as c7,N2 as c8,Vi as c9,Id as ca,M2 as cb,No as cc,q2 as cd,K2 as ce,W2 as cf,i2 as cg,G2 as ch,J2 as ci,$w as cj,Ze as d,J as e,ml as f,Un as g,jh as h,td as i,ro as j,Yn as k,gl as l,B2 as m,gn as n,Ir as o,ws as p,ge as q,Ee as r,rw as s,Ac as t,Oo as u,Dl as v,Wr as w,j2 as x,F2 as y,se as z};
