const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/modal-BVLLUOgJ.js","assets/index-ScKnynwN.js","assets/index-DNQ5eDP1.css"])))=>i.map(i=>d[i]);
import{l as G,a as u,r as f,n as T,B as $,p as q,c as p,b as l,z as g,e as o,g as I,w as V,f as x,i as B,T as R,j as m,F as k,k as S,o as n,h as H,C as J,_ as K}from"./index-ScKnynwN.js";import{g as Q}from"./request-CdlGjvlz.js";import{u as W}from"./counter-1MX4DWhF.js";const X=h=>Q("/comment/music",h),Y={key:0,class:"btn-text name"},Z=["src"],ee={class:"btn-text name"},te=["onClick"],ae=["onClick"],le=["onClick","disabled"],oe={__name:"recentlyPlayed",setup(h){let y=null,c=W(),_=u(!1),i=u(!1),s=u(!1),E=u("新增"),C=f([]),b=f({total:0,current:1,pageSize:10});const O=[{title:"#",dataIndex:"xh",width:50,ellipsis:!0},{title:"标题",dataIndex:"name",width:"30%",ellipsis:!0},{title:"类型",dataIndex:"resourceType",width:"10%",ellipsis:!0},{title:"专辑",dataIndex:"album",width:"25%",ellipsis:!0},{title:"播放次数",dataIndex:"fee",width:"12%",ellipsis:!0},{title:"播放时间",dataIndex:"playTime",width:"20%",ellipsis:!0},{title:"操作",dataIndex:"operation",width:100}];let w=f({total:0,current:1,pageSize:10}),U=()=>{_.value=!0,X({id:186016,limit:50}).then(t=>{_.value=!1,C=t.comments.map((e,r)=>({name:e.content,album:e.likedCount,picUrl:e.expressionUrl,playTime:e.timeStr,fee:e.liked,resourceType:e.commentLocationType})),w.total=t.data.total}).catch(t=>{})};const N=(t,e,r)=>{},P=t=>{console.log(t),i.value=!0},z=(t,e,r)=>{i.value=!1},D=t=>{console.log(t),y=J(()=>K(()=>import("./modal-BVLLUOgJ.js"),__vite__mapDeps([0,1,2]))),s.value=!0},L=(t,e,r)=>{s.value=!1},M=t=>{t.fee++,console.log(t)},A=()=>{b.total++,c.increment(),console.log(b)};return T(()=>c.count,(t,e)=>{console.log(t)}),T(b,(t,e)=>{console.log(t,e)}),$(()=>{let t=c.count;console.log(666,t)}),q(()=>{U()}),(t,e)=>{const r=S("a-table"),F=S("a-modal");return n(),p(k,null,[l("span",null,g(o(c).count),1),l("button",{onClick:A},"加"),I(r,{class:"table-box",columns:O,"data-source":o(C),pagination:o(w),loading:o(_),onChange:N},{bodyCell:V(({column:a,index:j,record:d})=>[a.dataIndex==="xh"?(n(),p("span",Y,[H(g(j+1)+" ",1),e[2]||(e[2]=l("span",{class:""},null,-1))])):m("",!0),a.dataIndex==="name"?(n(),p(k,{key:1},[l("img",{class:"img-prew",src:d.picUrl,alt:""},null,8,Z),l("span",ee,g(d.name),1)],64)):m("",!0),a.dataIndex==="operation"?(n(),p(k,{key:2},[l("button",{class:"btn-text",onClick:v=>P(d)},"删除",8,te),l("button",{class:"btn-text",onClick:v=>D(d)},"编辑",8,ae),l("button",{class:"btn-text",onClick:v=>M(d),disabled:d.fee>12},"加",8,le)],64)):m("",!0)]),_:1},8,["data-source","pagination","loading"]),(n(),x(R,{to:"body"},[I(F,{visible:o(i),"onUpdate:visible":e[0]||(e[0]=a=>B(i)?i.value=a:i=a),centered:"",title:"Basic Modal",onOk:z},{default:V(()=>e[3]||(e[3]=[l("p",null,"确定删除当前数据？",-1)])),_:1},8,["visible"])])),(n(),x(R,{to:"body"},[o(s)?(n(),x(o(y),{key:0,editVisible:o(s),"onUpdate:editVisible":e[1]||(e[1]=a=>B(s)?s.value=a:s=a),editTitle:o(E),onEditOk:L},null,8,["editVisible","editTitle"])):m("",!0)]))],64)}}},de=G(oe,[["__scopeId","data-v-4678af65"]]);export{de as default};