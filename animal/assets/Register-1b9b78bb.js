import{E,a as x,c as C,b as T}from"./el-input-89f3f19c.js";import{bH as U,r as i,g as S,bA as $,bI as A,J as w,d as B,bJ as q,a as I,c as N,b as r,e as u,k as d,E as s,H as b,t as P,l as k,v as h}from"./index-4c4c41e9.js";import{_ as D}from"./Navbar.vue_vue_type_style_index_0_lang-6540af88.js";const H=""+new URL("56693-72b8adc0.png",import.meta.url).href,J=U("auth",()=>{const F=i(),m=i(""),a=i({email:"",password:"",checkin:null}),o=S({email:[{required:!0,message:"電子郵件不能為空",trigger:"change"},{type:"email",required:!0,message:"電子郵件格式不正確",trigger:"blur"}],password:[{required:!0,message:"密碼不能為空",trigger:"blur"},{mim:6,max:30,message:"長度6~30個字符之間",trigger:"blur"}]}),f=$(),l=i(""),y=i(""),_=async e=>{e&&await e.validate((c,p)=>{c?A(f,a.value.email,a.value.password).then(t=>{console.log(t.user.accessToken),t.user.accessToken.length>0&&(w({message:"註冊成功！",type:"success"}),a.value={})}).catch(t=>{console.log(t.code),t.code=="auth/email-already-in-use"?w.error("電子郵件已經被使用"):t.code=="auth/weak-password"&&w.error("密碼最少6個字符")}):console.log("fields",p)})},g=i(""),v=i(!1);return{title:m,ruleFormRef:F,formUser:a,userFormRules:o,seePsd:v,addRegister:_,resetForm:e=>{e&&e.resetFields()},token:g,error:l,dataT:y}}),L={class:"register_page"},M=u("img",{src:H},null,-1),W=u("div",{class:"headline"},"註冊",-1),j=["value"],z={class:"btn_area"},Q=B({__name:"Register",setup(F){const m=J(),{ruleFormRef:a,formUser:o,userFormRules:f,seePsd:l,error:y,dataT:_}=q(m),{addRegister:g,resetForm:v}=m;return(R,e)=>{const c=E,p=x,t=C,V=T;return I(),N("div",null,[r(D),u("div",L,[M,W,r(V,{ref_key:"ruleFormRef",ref:a,model:s(o),rules:s(f),class:"register_in"},{default:d(()=>[r(p,{label:"帳號",prop:"email"},{default:d(()=>[r(c,{modelValue:s(o).email,"onUpdate:modelValue":e[0]||(e[0]=n=>s(o).email=n)},null,8,["modelValue"])]),_:1}),r(p,{label:"密碼",prop:"password"},{default:d(()=>[r(c,{class:"addmin_pad",type:"password",modelValue:s(o).password,"onUpdate:modelValue":e[1]||(e[1]=n=>s(o).password=n)},null,8,["modelValue"]),k(u("i",{class:"fa-solid fa-eye-slash",onClick:e[2]||(e[2]=n=>l.value=!0)},null,512),[[h,!s(l)]]),k(u("i",{class:"fa-solid fa-eye",onClick:e[3]||(e[3]=n=>l.value=!1)},null,512),[[h,s(l)]]),k(u("input",{type:"text",class:"see_pad",value:s(o).password},null,8,j),[[h,s(l)]])]),_:1}),u("div",z,[r(t,{class:"btn_cancel",onClick:e[4]||(e[4]=n=>s(v)(s(a)))},{default:d(()=>[b("取消")]),_:1}),r(t,{onClick:e[5]||(e[5]=n=>s(g)(s(a))),class:"addSave"},{default:d(()=>[b("註冊")]),_:1})])]),_:1},8,["model","rules"]),b(" "+P(s(_)),1)])])}}});export{Q as default};
