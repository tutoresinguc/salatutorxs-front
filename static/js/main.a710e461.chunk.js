(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{187:function(e,t,n){},188:function(e,t,n){},383:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(35),c=n.n(r),i=(n(187),n.p,n(188),n(189),n(33)),s=n(179),l=n(388),u=n(38),d=n(389),b=n(391),g=n(165),p=n.n(g),j=n(51),h=n.n(j),f=n(102),m=n(168),O=n.n(m),x=n.p+"static/media/logo.605cbd06.gif",v=n(8),y="https://sala-tutorxs.herokuapp.com",C="808906601781-gnnc5q5lrvr25lf9nci6rc79824mgiok.apps.googleusercontent.com",D=[],S="(0/4)",w=0,A="".concat(y,"/week");function T(){var e=Object(o.useState)({}),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(o.useState)(""),c=Object(i.a)(r,2),g=c[0],j=c[1],m=Object(o.useState)(""),T=Object(i.a)(m,2),k=T[0],z=T[1],E=Object(o.useState)(""),L=Object(i.a)(E,2),F=L[0],B=L[1],M=Object(o.useState)(""),R=Object(i.a)(M,2),I=R[0],_=R[1],P=Object(o.useState)(new Date),W=Object(i.a)(P,2),G=W[0],H=W[1],J=Object(o.useState)(!0),N=Object(i.a)(J,2),q=N[0],Q=N[1],K=Object(o.useState)(""),U=Object(i.a)(K,2),V=(U[0],U[1]),X=Object(o.useState)(""),Y=Object(i.a)(X,2),Z=Y[0],$=Y[1],ee=Object(o.useState)({email:"",nombre:"",gds:"",apodo:"",pronombre:"",tiene_llave:!1,gda:"",rol:[]}),te=Object(i.a)(ee,2),ne=te[0],oe=te[1],ae=!1;function re(){var e;h.a.get(A,{},{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){D=e.data.schedule,w=new Date(D[0].date),H(w),e.data.cupos,S=e.data.cupos_0,a({})})).catch((function(e){console.log(e),e.response})),Q(!1),(e=2e3,new Promise((function(t){return setTimeout(t,e)}))).then((function(){Q(!1),console.log("deberia salirse la carga"),ae=!0}))}Object(o.useEffect)((function(){!0===ae&&(Q(!1),console.log("deberia salirse po"))}),[ae]);var ce=function(e){if(re(),console.log("AAA",e),e&&"Ws"in e){B(e.Ws.Ht),_(e.Ws.Qe),V(e.Ws.wJ);var t="".concat(y,"/tutore?email=")+e.Ws.Ht;h.a.get(t,{},{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){oe(e.data),j(e.data.apodo),$(e.data.apodo)})).catch((function(e){console.log(e),e.response}))}else B(""),_(""),oe({email:"",nombre:"",pronombre:"",apodo:"",gds:"",tiene_llave:!1,rol:[],gda:""});Q(!1),re()},ie=function(e){for(var t in D)if(Date.parse(new Date(D[t].date))===Date.parse(e))return"".concat(D[t].cupos);return S},se="rgba(89, 154, 242, 1)",le="rgba(162, 198, 248, 1)",ue="#dbedff",de=function(e){var t=!0,n=!1,o=!1;for(var a in D)Date.parse(new Date(D[a].date))===Date.parse(e)&&(t=D[a].verde,n=D[a].not,F&&D[a].emails.includes(F)&&(o=!0));return t?o?(se="#EC7063",le="#52BE80",ue="#7DCEA0"):n?(se="rgba(142, 68, 173, 1)",le="rgba(187, 143, 206, 1)",ue="#D2B4DE"):(se="rgba(89, 154, 242, 1)",le="rgba(162, 198, 248, 1)",ue="#dbedff"):(se="rgba(142, 68, 173, 1)",le="rgba(187, 143, 206, 1)",ue="#D2B4DE"),[se,le,ue]},be=function(){h.a.post("".concat(y,"/horarios/modificar"),{tutore:ne,schedule:n},{tutore:ne,schedule:n}).then((function(e){re()})).catch((function(e){console.log(e)}))},ge=function(e){if(!e)return Object(v.jsx)("span",{});var t=e.rol,n="#E74C3C";return"coordi"===t?n="#273746":"jefx"===t&&(n="rgba(46, 134, 193, 1)"),Object(v.jsx)("span",{className:"ant-btn-primary tutore",style:{backgroundColor:n,color:"white",borderRadius:"0.3rem",borderColor:"transparent",margin:"0.1rem",fontSize:"0.8rem",paddingTop:"0.2rem",paddingBottom:"0.26rem",paddingLeft:"0.3rem",paddingRight:"0.3rem",verticalAlign:"center"},children:e.nombre},e.nombre)};return Object(v.jsx)(O.a,{loading:q,bgColor:"#ff5757",spinnerColor:"#9ee5f8",textColor:"white",logoSrc:x,text:"Buscando las llaves de la sala...",children:Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Salita Tutores \ud83e\udd70"}),Object(v.jsx)(l.a,{style:{alignItems:"center"},children:Object(v.jsxs)(u.a,{xs:24,sm:30,md:36,lg:44,xl:50,children:[Object(v.jsx)(p.a,{timeFormat:"h",startDate:G,numDays:5,minTime:1,maxTime:8,selection:n.schedule,onChange:function(e){a({schedule:e})},renderDateCell:function(e,t,n){var o=de(e),a=Object(i.a)(o,3),r=a[0],c=a[1],s=a[2];return Object(v.jsx)("div",{style:{textAlign:"center",backgroundColor:t?r:c},ref:n,onMouseOver:function(t){t.target.style.backgroundColor=s,z(function(e){var t=[];for(var n in D)Date.parse(new Date(D[n].date))===Date.parse(e)&&(t=D[n].nombres);var o=[];for(var a in t)o.push(ge(t[a]));return o}(e))},onMouseLeave:function(e){e.target.style.backgroundColor=t?r:c},children:ie(e)})},dateFormat:"DD/MM"}),Object(v.jsxs)("p",{style:{marginTop:"2%"},children:["Tutores en la casilla: ",k]}),Object(v.jsx)(s.a,{type:"primary",size:"large",style:{textAlign:"center",marginTop:"5%",borderRadius:"10px",fontSize:"15px",color:"white"},onClick:re,children:"Recargar"}),Object(v.jsx)(s.a,{type:"primary",size:"large",style:{textAlign:"center",marginTop:"5%",borderRadius:"10px",fontSize:"15px",color:"white"},onClick:function(){h.a.post("".concat(y,"/horarios/reservar"),{tutore:ne,schedule:n},{tutore:ne,schedule:n}).then((function(e){re()}))},children:"Enviar"}),function(){if(ne.rol)return ne.rol.includes("pfg")||ne.rol.includes("supertutore")?Object(v.jsx)(s.a,{type:"primary",size:"large",style:{textAlign:"center",marginTop:"5%",borderRadius:"10px",fontSize:"15px",color:"white"},onClick:be,children:"Modificar Horario"}):void 0}(),Object(v.jsx)(d.a,{placeholder:"Cambiar tu nombre",value:g,style:{marginTop:"1%"},onChange:function(e){return j(e.target.value)}}),Object(v.jsx)(s.a,{type:"primary",size:"large",style:{textAlign:"center",marginTop:"5%",borderRadius:"10px",fontSize:"15px",color:"white"},onClick:function(){h.a.put("".concat(y,"/tutore/change-name"),{nombre:g,tutore:ne,schedule:n},{nombre:g,tutore:ne,schedule:n}).then((function(e){$(e.data.name)})),re()},children:"Cambiar mi nombre"})]})}),Object(v.jsx)("h1",{children:F}),Object(v.jsx)("h1",{children:I}),Object(v.jsx)("h1",{children:Z}),ne&&ne.email&&ne.apodo?Object(v.jsx)(f.GoogleLogout,{clientId:C,buttonText:"Logout",onLogoutSuccess:ce}):Object(v.jsx)(f.GoogleLogin,{clientId:C,buttonText:"Login",onSuccess:ce,onFailure:ce,cookiePolicy:"single_host_origin",isSignedIn:!0}),Object(v.jsxs)("p",{style:{textAlign:"center",marginTop:"4%"},children:["Made with ",Object(v.jsx)(b.a,{})," by PFGang"]})]})})}h.a.get(A,{},{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){D=e.data.schedule,e.data.cupos,S=e.data.cupos_0})).catch((function(e){console.log(e),e.response}));var k=n(178),z=n(12);var E=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(k.a,{children:Object(v.jsx)(z.a,{exact:!0,path:"/sala",children:Object(v.jsx)(T,{})})})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,392)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),o(e),a(e),r(e),c(e)}))};c.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(E,{})}),document.getElementById("root")),L()}},[[383,1,2]]]);
//# sourceMappingURL=main.a710e461.chunk.js.map