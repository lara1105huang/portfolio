import{d as F,r as n,o as m,e as r,g as e,as as C,w as f,at as B,F as A,h as D,t as s,k as b,m as a,n as u,ar as k,au as E}from"./index.4e2480c2.js";import{f as g}from"./firebaseConfig.7bc004d5.js";const y={class:"tofu-area"},N={class:"single-order-list"},T={class:"name"},x={class:"no"},w=e("span",null,"\u60A8\u7684\u8A02\u55AE\u865F\u78BC:",-1),U={class:"row"},V={class:"time"},L=e("span",null,"\u8A02\u8CFC\u6642\u9593:",-1),O={class:"phone"},R=e("span",null,"\u884C\u52D5\u96FB\u8A71:",-1),q={class:"mail"},M=e("span",null,"\u96FB\u5B50\u4FE1\u7BB1:",-1),S={class:"order_area"},j=e("div",{class:"order_area_title"},[e("b",null,"\u8A02\u8CFC\u5167\u5BB9")],-1),z={class:"order-list"},G=e("thead",null,[e("tr",null,[e("th",null,"\u5546\u54C1\u540D\u7A31"),e("th",null,"\u55AE\u50F9"),e("th",null,"\u6578\u91CF"),e("th",null,"\u5408\u8A08")])],-1),H={class:"countTotal"},P=F({__name:"Order",setup(I){k();const _=E();var h=g.database().ref("orders/");const t=n({}),d=n({}),c=n(),v=()=>{c.value=_.params.id,h.orderByChild("orderNo").equalTo(c.value).once("value",function(i){i.forEach(l=>{t.value=l.val(),d.value=l.val().list})})};return m(()=>{v()}),(i,l)=>{const p=b("dir");return a(),r("div",y,[e("div",N,[t.value.countTotal>0?(a(),C(p,{key:0,class:"detail"},{default:f(()=>[e("div",T,s(t.value.orderUser.name)+"\uFF0C\u60A8\u597D\uFF1A",1),e("div",x,[e("b",null,[w,u(s(t.value.orderNo),1)])]),e("div",U,[e("div",V,[L,u(s(t.value.time),1)]),e("div",O,[R,u(s(t.value.orderUser.phone),1)]),e("div",q,[M,u(s(t.value.orderUser.email),1)])])]),_:1})):B("",!0),e("div",S,[j,e("table",z,[G,e("tbody",null,[(a(!0),r(A,null,D(d.value,o=>(a(),r("tr",{key:o},[e("td",null,s(o[1]),1),e("td",null,s(o[2]),1),e("td",null,s(o[3]),1),e("td",null,s(o[2]*o[3]),1)]))),128))])]),e("div",H,"\u7E3D\u91D1\u984D\uFF1A"+s(t.value.countTotal),1)])])])}}});export{P as default};
