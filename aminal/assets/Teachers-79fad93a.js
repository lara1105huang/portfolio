import{bH as I,C as p,r as u,I as L,J as S,d as m,bJ as y,o as E,a as C,c as k,e,E as l,F as T,G as B,t as i}from"./index-4c4c41e9.js";import"./firebaseConfig-68d48485.js";const D=I("teacher",()=>{const h=p.database().ref("teachers/"),n=u({}),b=()=>{h.once("value",o=>{n.value=o.val(),console.log(n.value)})},_=L(),c=u(!1),a=()=>{_.push("/admin/add_teacher")},v=o=>{_.push(`/admin/teacher/${o}`)},f=o=>{h.child(o.id).remove(),S({message:"刪除"+o.name+"成功！",type:"success"}),parent.location.reload()},d=u(localStorage.getItem("token")),g=u(localStorage.getItem("userId"));return{see:c,token:d,userId:g,teacherLists:n,goAdd:a,goEdit:v,toDelete:f,addLoveCount:o=>{if(g.value==null){console.log("addLoveCountId",o);const t=o.loveCount++;console.log(t),p.database().ref("teachers/"+o.id+"/loveCount").set(t)}if(d.value){console.log("addLoveCountId",o);const t=o.loveCount;console.log(t),p.database().ref("teachers/"+o.id+"/loveCount").set(t)}},tokenSee:()=>{d.value!=null?c.value=!0:c.value=!1},getTeachers:b}}),$={class:"teachers_info"},x={class:"addIcon"},A=e("td",null,"pic",-1),F=e("td",null,"姓名",-1),J=e("td",null,"出生日期",-1),M=e("td",null,"電子郵件",-1),R=e("td",null,"行動電話",-1),q=["src"],G=["onClick"],H=["onClick"],j=m({__name:"Teachers",setup(h){const n=D(),{token:b,userId:_,teacherLists:c}=y(n),{goAdd:a,goEdit:v,toDelete:f,getTeachers:d}=n;return E(()=>{d()}),(g,r)=>(C(),k("div",$,[e("div",x,[e("i",{onClick:r[0]||(r[0]=(...s)=>l(a)&&l(a)(...s)),class:"fa-solid fa-circle-plus"})]),e("table",null,[e("thead",null,[e("tr",null,[A,F,J,M,R,e("td",null,[e("i",{onClick:r[1]||(r[1]=(...s)=>l(a)&&l(a)(...s)),class:"fa-solid fa-circle-plus"})])])]),e("tbody",null,[(C(!0),k(T,null,B(l(c),(s,o)=>(C(),k("tr",{key:o},[e("td",null,[e("div",null,[e("img",{src:s.picture},null,8,q)])]),e("td",null,i(s.name),1),e("td",null,i(s.birthday),1),e("td",null,i(s.email),1),e("td",null,i(s.phone),1),e("td",null,[e("i",{onClick:t=>l(v)(s.id),class:"fa-solid fa-pen-to-square"},null,8,G),e("i",{onClick:t=>l(f)(s),class:"icon-bin"},null,8,H)])]))),128))])])]))}});export{j as default};
