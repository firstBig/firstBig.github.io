import{u as x,d as Q,r as U,a as g,t as P,o as _,c as k,b as a,e as o,f as K,w as u,g as l,i as C,h as L,F as S,j as A,_ as M,k as c}from"./index-DJF5lodq.js";import{regular as T}from"./func-jAAXyp7B.js";import{p as j,g as O}from"./request-CdlGjvlz.js";const z=x(),H=i=>j("/login/qr/key",i),J=i=>j("/login/qr/create",i),W=i=>O("/login/qr/check",i),X={class:"page-layout"},Y={class:"login-layout flex-r justify-c align-c p-20 border-r-6"},Z={class:"other"},$={class:"qr-box"},ee=["src"],ae=Q({__name:"login",setup(i){const F=x();console.log(F,z);let m=U({username:"",password:"",code:"",remember:!0}),p=g(!1),v=g(!1),w=g(""),b=g(""),d=P(m,"username"),f=P(m,"password"),h=null;const V={username:[{trigger:"blur",required:!0,message:"Please input your username!"}],password:[{trigger:"blur",required:!0,message:"Please input your password!"}],code:[{validator:async(t,e)=>e?T({type:"number"},e)==!1?Promise.reject("Please input number"):T({type:"number",length:6},e)==!1?Promise.reject("code length is 6"):Promise.resolve():Promise.reject("Please input the code"),required:!0,trigger:"blur"}]},B=t=>{console.log("Success:",t),new Promise((e,n)=>{setTimeout(()=>{let s=Math.random()*10;console.log(s),e(s)},3e3)}).then(e=>new Promise((n,s)=>{e>4?setTimeout(()=>{n(!0)},2e3):setTimeout(()=>{s(!1)},2e3)})).then(e=>{e==!0?(console.log("成功"),M(()=>import("./func-jAAXyp7B.js"),[]).then(n=>{let s=n.login({username:"admin",password:"admin@123"});console.log(s)})):console.log("失败"),console.log()})},D=t=>{console.log("Failed:",t)};let q=t=>{t==1?p.value=!1:(p.value=!0,y())},y=()=>{let t=new Date().getTime();H({timestamp:t}).then(e=>{w.value=e.data.unikey,E(e.data.unikey)}).catch(e=>{})},E=t=>{v.value=!1,J({key:t,qrimg:!0}).then(e=>{b.value=e.data.qrimg,h=setInterval(()=>{I()},3e3)})},I=()=>{p.value=!0;let t=new Date().getTime();W({key:w.value,timestamp:t}).then(e=>{e.code==800&&(clearInterval(h),v.value=!0),e.cookie&&window.localStorage.setItem("cookie",e.cookie)}).catch(e=>{})};return(t,e)=>{const n=c("a-input"),s=c("a-form-item"),N=c("a-input-password"),R=c("a-button"),G=c("a-form");return _(),k("div",X,[a("div",Y,[o(p)?(_(),k(S,{key:1},[a("span",{class:"type-1",onClick:e[4]||(e[4]=r=>o(q)(1))},"密码登录"),a("div",$,[a("img",{src:o(b),alt:""},null,8,ee),o(v)?(_(),k("span",{key:0,class:"btn-refresh",onClick:e[5]||(e[5]=(...r)=>o(y)&&o(y)(...r))},"刷新")):A("",!0)])],64)):(_(),K(G,{key:0,class:"w-100",name:"basic",autocomplete:"off",model:o(m),"label-col":{span:5},"wrapper-col":{span:19},rules:V,onFinish:B,onFinishFailed:D},{default:u(()=>[l(s,{label:"用户名",name:"username"},{default:u(()=>[l(n,{value:o(d),"onUpdate:value":e[0]||(e[0]=r=>C(d)?d.value=r:d=r)},null,8,["value"])]),_:1}),l(s,{label:"密码",name:"password"},{default:u(()=>[l(N,{value:o(f),"onUpdate:value":e[1]||(e[1]=r=>C(f)?f.value=r:f=r)},null,8,["value"])]),_:1}),l(s,{label:"验证码",name:"code"},{default:u(()=>[l(n,{value:o(m).code,"onUpdate:value":e[2]||(e[2]=r=>o(m).code=r)},null,8,["value"])]),_:1}),l(s,{class:"item-login","wrapper-col":{span:24}},{default:u(()=>[l(R,{type:"primary","html-type":"submit",style:{margin:"0 auto"}},{default:u(()=>e[6]||(e[6]=[L("登录")])),_:1}),e[7]||(e[7]=a("div",{class:"tip"},[a("span",null,"忘记密码")],-1)),a("div",Z,[a("span",{onClick:e[3]||(e[3]=r=>o(q)(2))},"扫码登录")])]),_:1})]),_:1},8,["model"]))])])}}});export{ae as default};