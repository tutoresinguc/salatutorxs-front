(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{187:function(e,t,n){},188:function(e,t,n){},383:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(35),c=n.n(r),s=(n(187),n.p,n(188),n(189),n(33)),i=n(388),l=n(38),u=n(179),d=n(389),b=n(391),g=n(165),j=n.n(g),p=n(57),h=n.n(p),m=n(102),f=n(168),O=n.n(f),x=n.p+"static/media/logo.605cbd06.gif",v=n(9),C="https://sala-tutorxs.herokuapp.com",y="808906601781-gnnc5q5lrvr25lf9nci6rc79824mgiok.apps.googleusercontent.com",D=[],S="(0/4)",w=0,A="".concat(C,"/week");function T(){var e=Object(a.useState)({}),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(""),c=Object(s.a)(r,2),g=c[0],p=c[1],f=Object(a.useState)(""),T=Object(s.a)(f,2),k=T[0],L=T[1],E=Object(a.useState)(""),F=Object(s.a)(E,2),z=F[0],B=F[1],M=Object(a.useState)(""),R=Object(s.a)(M,2),W=R[0],_=R[1],I=Object(a.useState)(new Date),P=Object(s.a)(I,2),G=P[0],J=P[1],H=Object(a.useState)(!0),N=Object(s.a)(H,2),q=N[0],Q=N[1],K=Object(a.useState)(""),U=Object(s.a)(K,2),V=(U[0],U[1]),X=Object(a.useState)(""),Y=Object(s.a)(X,2),Z=Y[0],$=Y[1],ee=Object(a.useState)({email:"",nombre:"",gds:"",apodo:"",pronombre:"",tiene_llave:!1,gda:"",rol:[]}),te=Object(s.a)(ee,2),ne=te[0],ae=te[1];function oe(){var e;h.a.get(A,{},{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){D=e.data.schedule,w=new Date(D[0].date),J(w),e.data.cupos,S=e.data.cupos_0,o({})})).catch((function(e){console.log(e),e.response})),(e=3e3,new Promise((function(t){return setTimeout(t,e)}))).then((function(){Q(!1)}))}var re=function(e){if(console.log("AAA",e),e.includes("Ws")){console.log(e,e.includes("Ws")),B(e.Ws.Ht),_(e.Ws.Qe),V(e.Ws.wJ);var t="".concat(C,"/tutore?email=")+e.Ws.Ht;h.a.get(t,{},{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){ae(e.data),p(e.data.apodo),$(e.data.apodo)})).catch((function(e){console.log(e),e.response}))}else B(""),_(""),ae({email:"",nombre:"",pronombre:"",apodo:"",gds:"",tiene_llave:!1,rol:[],gda:""});oe()},ce=function(e){for(var t in D)if(Date.parse(new Date(D[t].date))===Date.parse(e))return"".concat(D[t].cupos);return S},se="rgba(89, 154, 242, 1)",ie="rgba(162, 198, 248, 1)",le="#dbedff",ue=function(e){var t=!0,n=!1,a=!1;for(var o in D)Date.parse(new Date(D[o].date))===Date.parse(e)&&(t=D[o].verde,n=D[o].not,z&&D[o].emails.includes(z)&&(a=!0));return t?a?(se="#EC7063",ie="#52BE80",le="#7DCEA0"):n?(se="rgba(142, 68, 173, 1)",ie="rgba(187, 143, 206, 1)",le="#D2B4DE"):(se="rgba(89, 154, 242, 1)",ie="rgba(162, 198, 248, 1)",le="#dbedff"):(se="rgba(142, 68, 173, 1)",ie="rgba(187, 143, 206, 1)",le="#D2B4DE"),[se,ie,le]},de=function(e){if(!e)return Object(v.jsx)("span",{});var t=e.rol,n="#E74C3C";return"coordi"===t?n="#273746":"jefx"===t&&(n="rgba(46, 134, 193, 1)"),Object(v.jsx)("span",{className:"ant-btn-primary tutore",style:{backgroundColor:n,color:"white",borderRadius:"0.3rem",borderColor:"transparent",margin:"0.1rem",fontSize:"0.8rem",paddingTop:"0.2rem",paddingBottom:"0.26rem",paddingLeft:"0.3rem",paddingRight:"0.3rem",verticalAlign:"center"},children:e.nombre},e.nombre)};return Object(v.jsx)(O.a,{loading:q,bgColor:"#ff5757",textColor:"white",logoSrc:x,text:"Buscando las llaves de la sala...",children:Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Salita Tutores \ud83e\udd70"}),Object(v.jsx)(i.a,{style:{width:600},children:Object(v.jsxs)(l.a,{children:[Object(v.jsx)(j.a,{timeFormat:"h",startDate:G,numDays:5,minTime:1,maxTime:8,selection:n.schedule,onChange:function(e){o({schedule:e})},renderDateCell:function(e,t,n){var a=ue(e),o=Object(s.a)(a,3),r=o[0],c=o[1],i=o[2];return Object(v.jsx)("div",{style:{textAlign:"center",backgroundColor:t?r:c},ref:n,onMouseOver:function(t){t.target.style.backgroundColor=i,L(function(e){var t=[];for(var n in D)Date.parse(new Date(D[n].date))===Date.parse(e)&&(t=D[n].nombres);var a=[];for(var o in t)a.push(de(t[o]));return a}(e))},onMouseLeave:function(e){e.target.style.backgroundColor=t?r:c},children:ce(e)})},dateFormat:"DD/MM"}),Object(v.jsxs)("p",{style:{marginTop:"2%"},children:["Tutores en la casilla: ",k]}),Object(v.jsx)(u.a,{type:"primary",size:"large",style:{textAlign:"center",marginTop:"5%",borderRadius:"10px",fontSize:"15px",color:"white"},onClick:oe,children:"Recargar"}),Object(v.jsx)(u.a,{type:"primary",size:"large",style:{textAlign:"center",marginTop:"5%",borderRadius:"10px",fontSize:"15px",color:"white"},onClick:function(){h.a.post("".concat(C,"/horarios/reservar"),{tutore:ne,schedule:n},{tutore:ne,schedule:n}).then((function(e){oe()}))},children:"Enviar"}),Object(v.jsx)(d.a,{placeholder:"Cambiar tu nombre",value:g,style:{marginTop:"1%"},onChange:function(e){return p(e.target.value)}}),Object(v.jsx)(u.a,{type:"primary",size:"large",style:{textAlign:"center",marginTop:"5%",borderRadius:"10px",fontSize:"15px",color:"white"},onClick:function(){h.a.put("".concat(C,"/tutore/change-name"),{nombre:g,tutore:ne,schedule:n},{nombre:g,tutore:ne,schedule:n}).then((function(e){$(e.data.name)})),oe()},children:"Cambiar mi nombre"})]})}),Object(v.jsx)("h1",{children:z}),Object(v.jsx)("h1",{children:W}),Object(v.jsx)("h1",{children:Z}),ne&&ne.email?Object(v.jsx)(m.GoogleLogout,{clientId:y,buttonText:"Logout",onLogoutSuccess:re}):Object(v.jsx)(m.GoogleLogin,{clientId:y,buttonText:"Login",onSuccess:re,onFailure:re,cookiePolicy:"single_host_origin",isSignedIn:!0}),Object(v.jsxs)("p",{style:{textAlign:"center"},children:["Made with ",Object(v.jsx)(b.a,{})," by PFGang"]})]})})}h.a.get(A,{},{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){D=e.data.schedule,e.data.cupos,S=e.data.cupos_0})).catch((function(e){console.log(e),e.response}));var k=n(178),L=n(12);var E=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(k.a,{children:Object(v.jsx)(L.a,{exact:!0,path:"/sala",children:Object(v.jsx)(T,{})})})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,392)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)}))};c.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)(E,{})}),document.getElementById("root")),F()}},[[383,1,2]]]);
//# sourceMappingURL=main.d03206e4.chunk.js.map