import{E as se,a as ue,c as de,b as ie}from"./el-input-e486841c.js";import{f as ce,c as me,e as fe}from"./el-radio-7c56b119.js";import{d as pe,r as _,g as ge,C as A,o as ve,a as be,c as xe,b as o,k as s,bD as _e,e as p,ap as w,H as V,I as he,J as F}from"./index-766b67b2.js";import"./firebaseConfig-03883ad3.js";import"./focus-trap-4ef46637.js";const N="3.7.3",ye=N,Ae=typeof atob=="function",Ve=typeof btoa=="function",x=typeof Buffer=="function",q=typeof TextDecoder=="function"?new TextDecoder:void 0,P=typeof TextEncoder=="function"?new TextEncoder:void 0,Ue="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",h=Array.prototype.slice.call(Ue),U=(e=>{let a={};return e.forEach((n,d)=>a[n]=d),a})(h),Ce=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,u=String.fromCharCode.bind(String),Y=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):(e,a=n=>n)=>new Uint8Array(Array.prototype.slice.call(e,0).map(a)),Z=e=>e.replace(/=/g,"").replace(/[+\/]/g,a=>a=="+"?"-":"_"),j=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),O=e=>{let a,n,d,t,f="";const g=e.length%3;for(let v=0;v<e.length;){if((n=e.charCodeAt(v++))>255||(d=e.charCodeAt(v++))>255||(t=e.charCodeAt(v++))>255)throw new TypeError("invalid character found");a=n<<16|d<<8|t,f+=h[a>>18&63]+h[a>>12&63]+h[a>>6&63]+h[a&63]}return g?f.slice(0,g-3)+"===".substring(g):f},R=Ve?e=>btoa(e):x?e=>Buffer.from(e,"binary").toString("base64"):O,D=x?e=>Buffer.from(e).toString("base64"):e=>{let n=[];for(let d=0,t=e.length;d<t;d+=4096)n.push(u.apply(null,e.subarray(d,d+4096)));return R(n.join(""))},C=(e,a=!1)=>a?Z(D(e)):D(e),Be=e=>{if(e.length<2){var a=e.charCodeAt(0);return a<128?e:a<2048?u(192|a>>>6)+u(128|a&63):u(224|a>>>12&15)+u(128|a>>>6&63)+u(128|a&63)}else{var a=65536+(e.charCodeAt(0)-55296)*1024+(e.charCodeAt(1)-56320);return u(240|a>>>18&7)+u(128|a>>>12&63)+u(128|a>>>6&63)+u(128|a&63)}},we=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,G=e=>e.replace(we,Be),z=x?e=>Buffer.from(e,"utf8").toString("base64"):P?e=>D(P.encode(e)):e=>R(G(e)),b=(e,a=!1)=>a?Z(z(e)):z(e),M=e=>b(e,!0),Fe=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,De=e=>{switch(e.length){case 4:var a=(7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3),n=a-65536;return u((n>>>10)+55296)+u((n&1023)+56320);case 3:return u((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return u((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},H=e=>e.replace(Fe,De),$=e=>{if(e=e.replace(/\s+/g,""),!Ce.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(e.length&3));let a,n="",d,t;for(let f=0;f<e.length;)a=U[e.charAt(f++)]<<18|U[e.charAt(f++)]<<12|(d=U[e.charAt(f++)])<<6|(t=U[e.charAt(f++)]),n+=d===64?u(a>>16&255):t===64?u(a>>16&255,a>>8&255):u(a>>16&255,a>>8&255,a&255);return n},S=Ae?e=>atob(j(e)):x?e=>Buffer.from(e,"base64").toString("binary"):$,J=x?e=>Y(Buffer.from(e,"base64")):e=>Y(S(e),a=>a.charCodeAt(0)),X=e=>J(K(e)),Ee=x?e=>Buffer.from(e,"base64").toString("utf8"):q?e=>q.decode(J(e)):e=>H(S(e)),K=e=>j(e.replace(/[-_]/g,a=>a=="-"?"+":"/")),E=e=>Ee(K(e)),Re=e=>{if(typeof e!="string")return!1;const a=e.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(a)||!/[^\s0-9a-zA-Z\-_]/.test(a)},Q=e=>({value:e,enumerable:!1,writable:!0,configurable:!0}),W=function(){const e=(a,n)=>Object.defineProperty(String.prototype,a,Q(n));e("fromBase64",function(){return E(this)}),e("toBase64",function(a){return b(this,a)}),e("toBase64URI",function(){return b(this,!0)}),e("toBase64URL",function(){return b(this,!0)}),e("toUint8Array",function(){return X(this)})},ee=function(){const e=(a,n)=>Object.defineProperty(Uint8Array.prototype,a,Q(n));e("toBase64",function(a){return C(this,a)}),e("toBase64URI",function(){return C(this,!0)}),e("toBase64URL",function(){return C(this,!0)})},Se=()=>{W(),ee()},L={version:N,VERSION:ye,atob:S,atobPolyfill:$,btoa:R,btoaPolyfill:O,fromBase64:E,toBase64:b,encode:b,encodeURI:M,encodeURL:M,utob:G,btou:H,decode:E,isValid:Re,fromUint8Array:C,toUint8Array:X,extendString:W,extendUint8Array:ee,extendBuiltins:Se},Te={class:"basic_information"},Ie={class:"upload_img"},ke=["src"],qe=p("i",{class:"fa-solid fa-cloud-arrow-up"},null,-1),Pe=p("div",{class:"text"},"上傳圖片",-1),Ye=p("div",{class:"text"},"檔案格式為JPG、PNG ，最佳尺寸50pxX50px",-1),ze={class:"form_deal"},Me={class:"teacher_content"},Le={class:"btn_area"},He=pe({__name:"Teacher",setup(e){const a=he(),n=_e(),d=_(),t=_({id:"",name:"",password:"",birthday:"",phone:"",educational:"",depart:"",graduate:null,email:"",address:"",content:"",picture:""}),f=ge({name:[{required:!0,message:"請填寫姓名!",trigger:"change"},{min:2,max:10,message:"長度2~10個字符之間",trigger:"blur"}],password:[{required:!0,message:"請填寫密碼!",trigger:"change"},{min:2,max:10,message:"長度2~10個字符之間",trigger:"blur"}],birthday:[{type:"date",required:!0,message:"請選擇出生日期!",trigger:"change"}],phone:[{required:!0,message:"請填寫行動電話!",trigger:"change"},{min:10,max:10,message:"長度10個字符",trigger:"blur"}],educational:[{required:!0,message:"請填寫畢業學校",trigger:"change"},{min:2,max:10,message:"長度2~10個字符之間",trigger:"blur"}],depart:[{required:!0,message:"請填寫畢業學校",trigger:"change"},{min:2,max:10,message:"長度2~10個字符之間",trigger:"blur"}],graduate:[{required:!0,message:"請選擇！",trigger:"change"}],email:[{required:!0,message:"電子郵件不能為空",trigger:"change"},{type:"email",required:!0,message:"電子郵件格式不正確",trigger:"blur"}],address:[{required:!0,message:"請填寫出生地",trigger:"change"},{min:2,max:10,message:"長度2~10個字符之間",trigger:"blur"}],content:[{required:!0,message:"簡介不能為空！",trigger:"change"},{min:5,max:200,message:"長度5~200個字符之間",trigger:"blur"}]}),g=_(!0),v=m=>{const r=m.target.files||m.dataTransfer.files;if(!r.length)return;t.value.picture=r[0];var i=m.target.files.item(0);const c=new FileReader;c.addEventListener("load",te),c.readAsDataURL(i)},te=m=>{t.value.picture=m.target.result,t.value.picture!=null&&(g.value=!0)};A.database().ref("teachers/");const y=_(n.params.id),T=()=>{y.value!=null?A.database().ref("teachers/"+y.value).once("value",r=>{t.value=r.val(),t.value.picture!=null&&(g.value=!0)}):g.value=!1},ae=m=>{if(y.value==null||t==null){if(!m)return;m.validate(r=>{if(r){let i=Math.floor(Date.now()/1e3);A.database().ref("teachers/"+i).set({id:i,picture:t.value.picture,name:t.value.name,password:L.encode(t.value.password),birthday:t.value.birthday,phone:t.value.phone,educational:t.value.educational,depart:t.value.depart,graduate:t.value.graduate,email:t.value.email,address:t.value.address,content:t.value.content}),T(),a.push("/admin/index"),F({message:"新增成功！",type:"success"})}else F.error("新增失敗")})}else{let r={id:t.value.id,picture:t.value.picture,name:t.value.name,password:L.encode(t.value.password),birthday:t.value.birthday,phone:t.value.phone,educational:t.value.educational,depart:t.value.depart,graduate:t.value.graduate,email:t.value.email,address:t.value.address,content:t.value.content};A.database().ref("teachers/"+t.value.id).set(r),F({message:"編輯成功！",type:"success"}),a.push("/admin/index")}},re=m=>{m&&m.resetFields()},B=_(!1);return ve(()=>{T(),y.value==null?B.value=!0:B.value=!1}),(m,r)=>{const i=se,c=ue,oe=ce,I=me,le=fe,k=de,ne=ie;return be(),xe("div",Te,[o(ne,{class:"form_area",ref_key:"ruleFormRef",ref:d,model:t.value,rules:f,"status-icon":""},{default:s(()=>[p("div",Ie,[p("img",{src:t.value.picture,class:w({active:g.value})},null,10,ke),p("div",{class:w(["mask",{maskActive:g.value}])},[qe,p("input",{type:"file",accept:".jpg,.jpeg,.png",onChange:v,class:"img_input"},null,32),Pe,Ye],2)]),p("div",ze,[o(c,{label:"姓名",prop:"name"},{default:s(()=>[o(i,{modelValue:t.value.name,"onUpdate:modelValue":r[0]||(r[0]=l=>t.value.name=l)},null,8,["modelValue"])]),_:1}),o(c,{label:"員工編碼",class:w({HiddenActive:B.value})},{default:s(()=>[o(i,{modelValue:t.value.id,"onUpdate:modelValue":r[1]||(r[1]=l=>t.value.id=l),disabled:""},null,8,["modelValue"])]),_:1},8,["class"]),o(c,{label:"登入密碼",prop:"password"},{default:s(()=>[o(i,{type:"password",modelValue:t.value.password,"onUpdate:modelValue":r[2]||(r[2]=l=>t.value.password=l)},null,8,["modelValue"])]),_:1}),o(c,{label:"出生日期",prop:"birthday"},{default:s(()=>[o(oe,{class:"birthday",modelValue:t.value.birthday,"onUpdate:modelValue":r[3]||(r[3]=l=>t.value.birthday=l),type:"date",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1}),o(c,{label:"行動電話",prop:"phone"},{default:s(()=>[o(i,{modelValue:t.value.phone,"onUpdate:modelValue":r[4]||(r[4]=l=>t.value.phone=l)},null,8,["modelValue"])]),_:1}),o(c,{label:"學歷",prop:"educational"},{default:s(()=>[o(i,{modelValue:t.value.educational,"onUpdate:modelValue":r[5]||(r[5]=l=>t.value.educational=l)},null,8,["modelValue"])]),_:1}),o(c,{label:"系所",prop:"depart"},{default:s(()=>[o(i,{modelValue:t.value.depart,"onUpdate:modelValue":r[6]||(r[6]=l=>t.value.depart=l)},null,8,["modelValue"])]),_:1}),o(c,{label:"畢業",prop:"graduate"},{default:s(()=>[o(le,{modelValue:t.value.graduate,"onUpdate:modelValue":r[7]||(r[7]=l=>t.value.graduate=l)},{default:s(()=>[o(I,{label:"true",value:"true"},{default:s(()=>[V("是")]),_:1}),o(I,{label:"false",value:"false"},{default:s(()=>[V("否")]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(c,{label:"電子郵件",prop:"email"},{default:s(()=>[o(i,{modelValue:t.value.email,"onUpdate:modelValue":r[8]||(r[8]=l=>t.value.email=l),type:"email"},null,8,["modelValue"])]),_:1}),o(c,{label:"出生地",prop:"address"},{default:s(()=>[o(i,{modelValue:t.value.address,"onUpdate:modelValue":r[9]||(r[9]=l=>t.value.address=l)},null,8,["modelValue"])]),_:1})]),p("div",Me,[o(c,{label:"簡介",prop:"content"},{default:s(()=>[o(i,{modelValue:t.value.content,"onUpdate:modelValue":r[10]||(r[10]=l=>t.value.content=l),type:"textarea"},null,8,["modelValue"])]),_:1})]),p("div",Le,[o(k,{class:"btn_cancel",onClick:r[11]||(r[11]=l=>re(d.value))},{default:s(()=>[V("取消")]),_:1}),o(k,{onClick:r[12]||(r[12]=l=>ae(d.value)),class:"addSave"},{default:s(()=>[V("儲存")]),_:1})])]),_:1},8,["model","rules"])])}}});export{He as default};
