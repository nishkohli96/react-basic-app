(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{168:function(e,a,t){e.exports=t(183)},179:function(e,a,t){},181:function(e,a,t){},182:function(e,a,t){},183:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=t.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=t(51),i=t(17),u=t(38),m=t(39),s=t(42),d=t(41),p=t(239),b=t(4),E=t(240),g=t(116),h=t.n(g),f=t(115),v=t.n(f),y=t(25),k=t(22);function C(){var e=Object(y.a)(["\n    color: palevioletred;\n    font-size: 1em;\n    border: 2px solid blue;\n    border-radius: 3px;\n\n    /* here we use the dynamically computed prop */\n    margin: ",";\n    padding: ",";\n"]);return C=function(){return e},e}function O(){var e=Object(y.a)(["\n    padding: 0.5em;\n    margin: 0.5em;\n    color: ",";\n    background: lightgreen;\n    border: none;\n    font-weight: bold;\n    border-radius: 3px;\n"]);return O=function(){return e},e}function j(){var e=Object(y.a)(["\n    background: ",";\n    color: ",";\n\n    font-size: 1em;\n    margin: 1em;\n    padding: 0.25em 1em;\n    border: 2px solid palevioletred;\n    border-radius: 3px;\n"]);return j=function(){return e},e}function x(){var e=Object(y.a)(["\n    padding: 4em;\n    background: papayawhip;\n"]);return x=function(){return e},e}function w(){var e=Object(y.a)(["\n    font-size: 1.5em;\n    text-align: center;\n    color: palevioletred;\n"]);return w=function(){return e},e}function N(){var e=Object(y.a)(["\n    background-color: skyblue;\n    padding: 20px;\n"]);return N=function(){return e},e}var S=k.b.div(N()),T=k.b.h1(w()),I=k.b.section(x()),P=k.b.button(j(),(function(e){return e.primary?"palevioletred":"white"}),(function(e){return e.primary?"white":"palevioletred"})),F=k.b.input(O(),(function(e){return e.inputColor||"palevioletred"})),L=k.b.input.attrs((function(e){return{type:"password",size:e.size||"1em"}}))(C(),(function(e){return e.size}),(function(e){return e.size}));function D(){var e=Object(y.a)(["\n    font-size: 1em;\n    margin: 1em;\n    padding: 0.25em 1em;\n    border-radius: 3px;\n    color: ",";\n    border: 2px solid ",";\n"]);return D=function(){return e},e}var B=k.b.button(D(),(function(e){return e.theme.main}),(function(e){return e.theme.main}));B.defaultProps={theme:{main:"palevioletred"}};var M=B;function G(){var e=Object(y.a)(["\n    background-color: ",";\n    padding: 20px;\n    text-align: centre;\n"]);return G=function(){return e},e}function R(){var e=Object(y.a)(["\n    font-size: 20px;\n    color: ",";\n"]);return R=function(){return e},e}function A(){var e=Object(y.a)(["\n    background-color: ",";\n    padding: 20px;\n"]);return A=function(){return e},e}var z=k.b.div(A(),(function(e){return e.theme.bodybgColor})),W=k.b.p(R(),(function(e){return e.theme.textColor})),q=k.b.div(G(),(function(e){return e.theme.divbgColor})),H=t(11),_={bodybgColor:"#000000",textColor:"#ffffff",divbgColor:"darkgreen"},V={bodybgColor:"#ffffff",textColor:"#000000",divbgColor:"lightgreen"},$=r.a.createContext(),J=function(e){var a=e.children,t=localStorage.getItem("theme");t||(t="light",localStorage.setItem("theme",t));var n=r.a.useState(t),l=Object(H.a)(n,2),c=l[0],o=l[1],i=function(e){var a=e.children;return r.a.createElement(k.a,{theme:"light"===c?V:_},a)};return r.a.createElement($.Provider,{value:{theme:c,changeTheme:function(e){localStorage.setItem("theme",e),o(e)}}},r.a.createElement(i,null,a))},K=t(114),U=t.n(K),Q={main:"mediumseagreen"},X=function(){var e=Object(n.useContext)($),a=e.theme,t=e.changeTheme;return r.a.createElement(z,null,r.a.createElement(q,null,r.a.createElement(T,null," Themed Components "),r.a.createElement(W,null," Click on the Below Btn to switch Themes "),r.a.createElement(U.a,{style:{color:"blue"},onClick:function(){t("light"===a?"dark":"light")}}),r.a.createElement(P,null,"Normal"),r.a.createElement(M,{theme:Q},"Themed")))},Y=Object(p.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}})),Z=Object(b.a)({root:{fontSize:16,textTransform:"none",borderColor:"#007ABA",fontFamily:['"Helvetica Neue"'].join(","),"&:hover":{backgroundColor:"#0069d9",borderColor:"red",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"#0062cc",borderColor:"#005cbf"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0,123,255,.5)"}},button:{backgroundColor:"orange",color:"#007aba"}})(E.a);function ee(){var e=Y(),a=Object(i.g)();return r.a.createElement("div",{className:e.root},r.a.createElement(E.a,{style:{backgroundColor:"#21b6ae",color:"yellow"},variant:"contained",className:e.button,endIcon:r.a.createElement(v.a,null),onClick:te},"Fetch data"),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"outlined",style:{color:"#21b6ae"},className:e.button,startIcon:r.a.createElement(h.a,null),onClick:ne},"Login"),r.a.createElement(Z,{variant:"contained",color:"primary",disableRipple:!0,onClick:ae},"Activate Lazers"),r.a.createElement(Z,{variant:"outlined",color:"primary",disableRipple:!0,onClick:function(){return a.push("/styled")}},"GoTo Styled Components"),r.a.createElement(o.b,{to:{pathname:"/ui",data:{name:"nish",msg:"Hi people"}}},"Click Me"),r.a.createElement(o.b,{to:{pathname:"/dashboard"}},"Go to dashboard"),r.a.createElement(o.b,{to:{pathname:"/redux"}},"Open a To-do List"))}function ae(){window.location.href="/ui"}function te(){fetch("http://localhost:4000/items",{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log(e)}),(function(e){console.log(e)}))}function ne(){fetch("http://localhost:4000/data",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:"nk@qw.qw",password:"nish134"})}).then((function(e){return e.json()})).then((function(e){console.log(e)}),(function(e){}))}var re=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(X,null),r.a.createElement(ee,null))}}]),t}(r.a.Component),le=(t(179),t(92)),ce=t(272),oe=t(277),ie=t(273),ue=t(58),me=t(276),se=t(129),de=t.n(se),pe=t(278),be=t(247),Ee=t(241),ge=Object(p.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}})),he=Object(b.a)({switchBase:{color:"yellow","&$checked":{color:"red"},"&$checked + $track":{backgroundColor:"#006699"}},checked:{},track:{}})(Ee.a),fe=function(e){e.target.checked?document.getElementById("standard-required").value="Switch Toggled On":document.getElementById("standard-required").value="Toggled Off"};function ve(){var e=ge();return r.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off"},r.a.createElement("div",null,r.a.createElement(pe.a,{required:!0,id:"standard-required",label:"Required",defaultValue:"Hello World"}),r.a.createElement(pe.a,{id:"standard-password-input",label:"Password",type:"password",autoComplete:"current-password"}),r.a.createElement(pe.a,{id:"standard-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0}}),r.a.createElement(pe.a,{error:!0,id:"standard-error-helper-text",label:"Error",defaultValue:"Hello World",helperText:"Incorrect entry."}),r.a.createElement(be.a,{control:r.a.createElement(Ee.a,{onChange:fe,name:"checkedB",color:"primary"}),label:"Change value of reqd field"})," ",r.a.createElement("br",null),r.a.createElement(be.a,{control:r.a.createElement(he,{onChange:fe,name:"checkedC"}),label:"Change value of reqd field"})))}var ye=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(ve,null)}}]),t}(r.a.Component),ke=t(248),Ce=t(249);function Oe(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ke.a,null),r.a.createElement(Ce.a,{fixed:!0},r.a.createElement(ue.a,{component:"div",style:{backgroundColor:"#cfe8fc",height:"100px"}},"Inside Container",r.a.createElement("div",{style:{backgroundColor:"pink",color:"#FFFFFF"}},"Inside the pink Container"))))}var je=t(138),xe=t(250),we=Object(p.a)((function(e){return{root:{flexGrow:1},paper:{margin:e.spacing(.5),padding:e.spacing(2),textAlign:"center",color:"blue",backgroundColor:"lightgreen"}}}));function Ne(){var e=we();return r.a.createElement("div",{className:e.root},r.a.createElement(xe.a,{container:!0},r.a.createElement(xe.a,{item:!0,xs:12},r.a.createElement(je.a,{className:e.paper},"xs=12")),r.a.createElement(xe.a,{item:!0,xs:12,sm:6},r.a.createElement(je.a,{className:e.paper},"xs=12 sm=6")),r.a.createElement(xe.a,{item:!0,xs:12,sm:6},r.a.createElement(je.a,{className:e.paper},"xs=12 sm=6")),r.a.createElement(xe.a,{item:!0,xs:6,sm:3},r.a.createElement(je.a,{className:e.paper},"xs=6 sm=3")),r.a.createElement(xe.a,{item:!0,xs:6,sm:3},r.a.createElement(je.a,{className:e.paper},"xs=6 sm=3")),r.a.createElement(xe.a,{item:!0,xs:6,sm:3},r.a.createElement(je.a,{className:e.paper},"xs=6 sm=3")),r.a.createElement(xe.a,{item:!0,xs:6,sm:3},r.a.createElement(je.a,{className:e.paper},"xs=6 sm=3"))))}var Se=t(283),Te=t(252),Ie=t(253),Pe=Object(b.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",backgroundColor:"lightgreen",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(Se.a),Fe=Object(b.a)({root:{backgroundColor:"skyblue",borderBottom:"1px solid orange",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"}},expanded:{backgroundColor:"#007ABA"}})(Te.a),Le=Object(b.a)((function(e){return{root:{padding:e.spacing(2)}}}))(Ie.a);function De(){var e=r.a.useState("panel1"),a=Object(H.a)(e,2),t=a[0],n=a[1],l=function(e){return function(a,t){n(!!t&&e)}};return r.a.createElement("div",null,r.a.createElement(Pe,{square:!0,expanded:"panel1"===t,onChange:l("panel1")},r.a.createElement(Fe,{"aria-controls":"panel1d-content",id:"panel1d-header"},r.a.createElement(ue.a,null,"Collapsible Group Item #1")),r.a.createElement(Le,null,r.a.createElement(ue.a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))),r.a.createElement(Pe,{square:!0,expanded:"panel2"===t,onChange:l("panel2")},r.a.createElement(Fe,{"aria-controls":"panel2d-content",id:"panel2d-header"},r.a.createElement(ue.a,null,"Collapsible Group Item #2")),r.a.createElement(Le,null,r.a.createElement(ue.a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))),r.a.createElement(Pe,{square:!0,expanded:"panel3"===t,onChange:l("panel3")},r.a.createElement(Fe,{"aria-controls":"panel3d-content",id:"panel3d-header"},r.a.createElement(ue.a,null,"Collapsible Group Item #3")),r.a.createElement(Le,null,r.a.createElement(ue.a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))))}var Be=t(254),Me=t(258),Ge=t(256),Re=t(257),Ae=t(255);function ze(){var e=r.a.useState(!1),a=Object(H.a)(e,2),t=a[0],n=a[1],l=function(){n(!1)};return r.a.createElement("div",null,r.a.createElement(E.a,{variant:"outlined",color:"primary",onClick:function(){n(!0)}},"Open alert dialog"),r.a.createElement(Be.a,{open:t,onClose:l,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(Ae.a,{id:"alert-dialog-title"},"Use Google's location service?"),r.a.createElement(Ge.a,null,r.a.createElement(Re.a,{id:"alert-dialog-description"},"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")),r.a.createElement(Me.a,null,r.a.createElement(E.a,{onClick:l,color:"primary"},"Disagree"),r.a.createElement(E.a,{onClick:l,color:"primary",autoFocus:!0},"Agree"))))}var We=t(246),qe=t(186),He=t(259),_e=t(284),Ve=t(279),$e=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"];function Je(e){var a=e.onClose,t=e.value,n=e.open,l=Object(le.a)(e,["onClose","value","open"]),c=r.a.useState(t),o=Object(H.a)(c,2),i=o[0],u=o[1],m=r.a.useRef(null);r.a.useEffect((function(){n||u(t)}),[t,n]);return r.a.createElement(Be.a,Object.assign({disableBackdropClick:!0,disableEscapeKeyDown:!0,maxWidth:"xs",onEntering:function(){null!=m.current&&m.current.focus()},"aria-labelledby":"confirmation-dialog-title",open:n},l),r.a.createElement(Ae.a,{id:"confirmation-dialog-title"},"Phone Ringtone"),r.a.createElement(Ge.a,{dividers:!0},r.a.createElement(_e.a,{ref:m,"aria-label":"ringtone",name:"ringtone",value:i,onChange:function(e){u(e.target.value)}},$e.map((function(e){return r.a.createElement(be.a,{value:e,key:e,control:r.a.createElement(Ve.a,null),label:e})})))),r.a.createElement(Me.a,null,r.a.createElement(E.a,{autoFocus:!0,onClick:function(){a()},color:"primary"},"Cancel"),r.a.createElement(E.a,{onClick:function(){a(i)},color:"primary"},"Ok")))}var Ke=Object(p.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},paper:{width:"80%",maxHeight:435}}}));function Ue(){var e=Ke(),a=r.a.useState(!1),t=Object(H.a)(a,2),n=t[0],l=t[1],c=r.a.useState("Dione"),o=Object(H.a)(c,2),i=o[0],u=o[1];return r.a.createElement("div",{className:e.root},r.a.createElement(We.a,{component:"div",role:"list"},r.a.createElement(qe.a,{button:!0,divider:!0,disabled:!0,role:"listitem"},r.a.createElement(He.a,{primary:"Interruptions"})),r.a.createElement(qe.a,{button:!0,divider:!0,"aria-haspopup":"true","aria-controls":"ringtone-menu","aria-label":"phone ringtone",onClick:function(){l(!0)},role:"listitem"},r.a.createElement(He.a,{primary:"Phone ringtone",secondary:i})),r.a.createElement(qe.a,{button:!0,divider:!0,disabled:!0,role:"listitem"},r.a.createElement(He.a,{primary:"Default notification ringtone",secondary:"Tethys"})),r.a.createElement(Je,{classes:{paper:e.paper},id:"ringtone-menu",keepMounted:!0,open:n,onClose:function(e){l(!1),e&&u(e)},value:i})))}var Qe=t(285),Xe=t(117),Ye=t.n(Xe),Ze=Object(p.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap",listStyle:"none",padding:e.spacing(.5),margin:0},chip:{margin:e.spacing(.5)}}}));function ea(){var e=Ze(),a=r.a.useState([{key:0,label:"Angular"},{key:1,label:"jQuery"},{key:2,label:"Polymer"},{key:3,label:"React"},{key:4,label:"Vue.js"}]),t=Object(H.a)(a,2),n=t[0],l=t[1];return r.a.createElement(je.a,{component:"ul",className:e.root},n.map((function(a){var t,n;return"React"===a.label&&(t=r.a.createElement(Ye.a,null)),r.a.createElement("li",{key:a.key},r.a.createElement(Qe.a,{icon:t,label:a.label,onDelete:"React"===a.label?void 0:(n=a,function(){l((function(e){return e.filter((function(e){return e.key!==n.key}))}))}),className:e.chip}))}))," ",r.a.createElement("br",null),["red","skyblue","green","orange","yellow"].map((function(a){return r.a.createElement("li",{key:a},r.a.createElement(Qe.a,{label:a,className:e.chip,style:{backgroundColor:a}}))})))}var aa=t(260),ta=t(261),na=t(251),ra=t(71),la=t.n(ra),ca=t(119),oa=t.n(ca),ia=t(118),ua=t.n(ia),ma=t(120),sa=t.n(ma),da=t(121),pa=t.n(da),ba=t(122),Ea=t.n(ba),ga=Object(p.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:"#4c4c4c"},nested:{paddingLeft:e.spacing(4)}}}));function ha(){var e=ga(),a=r.a.useState(!0),t=Object(H.a)(a,2),n=t[0],l=t[1];return r.a.createElement(We.a,{component:"nav","aria-labelledby":"nested-list-subheader",subheader:r.a.createElement(aa.a,{component:"div",id:"nested-list-subheader"},"Nested List Items"),className:e.root},r.a.createElement(qe.a,{button:!0},r.a.createElement(ta.a,null,r.a.createElement(ua.a,null)),r.a.createElement(He.a,{primary:"Sent mail"})),r.a.createElement(qe.a,{button:!0},r.a.createElement(ta.a,null,r.a.createElement(oa.a,null)),r.a.createElement(He.a,{primary:"Drafts"})),r.a.createElement(qe.a,{button:!0,onClick:function(){l(!n)}},r.a.createElement(ta.a,null,r.a.createElement(la.a,null)),r.a.createElement(He.a,{primary:"Inbox"}),n?r.a.createElement(sa.a,null):r.a.createElement(pa.a,null)),r.a.createElement(na.a,{in:n,timeout:"auto",unmountOnExit:!0},r.a.createElement(We.a,{component:"div",disablePadding:!0},r.a.createElement(qe.a,{button:!0,className:e.nested},r.a.createElement(ta.a,null,r.a.createElement(Ea.a,null)),r.a.createElement(He.a,{primary:"Starred"})))))}var fa=t(262),va=t(286),ya=t(123),ka=t.n(ya),Ca=t(125),Oa=t.n(Ca),ja=t(126),xa=t.n(ja),wa=t(263),Na=t(287),Sa=Object(p.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},listItem:{backgroundColor:"skyblue",color:"purple"}}}));function Ta(){var e=Sa();return r.a.createElement(We.a,{className:e.root},r.a.createElement(qe.a,{className:e.listItem},r.a.createElement(fa.a,null,r.a.createElement(va.a,null,r.a.createElement(ka.a,null))),r.a.createElement(He.a,{primary:"Photos",secondary:"Jan 9, 2014"})),r.a.createElement(wa.a,null),r.a.createElement(Na.a,{title:"Work baby",placement:"right-start",arrow:!0},r.a.createElement(qe.a,null,r.a.createElement(fa.a,null,r.a.createElement(va.a,null,r.a.createElement(Oa.a,{style:{color:"lightgreen"}}))),r.a.createElement(He.a,{primary:"Work",secondary:"Jan 7, 2014"}))),r.a.createElement(wa.a,{light:!0}),r.a.createElement(qe.a,null,r.a.createElement(He.a,{primary:"Vacation",secondary:"July 20, 2014"}),r.a.createElement(fa.a,null,r.a.createElement(va.a,null,r.a.createElement(xa.a,null)))))}var Ia=t(27),Pa=t(3),Fa=t(7),La=t(269),Da=t(270),Ba=t(266),Ma=t(268),Ga=t(264),Ra=t(289),Aa=t(265),za=t(288),Wa=t(267),qa=t(282),Ha=t(137),_a=t(127),Va=t.n(_a),$a=t(128),Ja=t.n($a);function Ka(e,a,t,n,r){return{name:e,calories:a,fat:t,carbs:n,protein:r}}var Ua=[Ka("Cupcake",305,3.7,67,4.3),Ka("Donut",452,25,51,4.9),Ka("Eclair",262,16,24,6),Ka("Frozen yoghurt",159,6,24,4),Ka("Gingerbread",356,16,49,3.9),Ka("Honeycomb",408,3.2,87,6.5),Ka("Ice cream sandwich",237,9,37,4.3),Ka("Jelly Bean",375,0,94,0),Ka("KitKat",518,26,65,7),Ka("Lollipop",392,.2,98,0),Ka("Marshmallow",318,0,81,2),Ka("Nougat",360,19,9,37),Ka("Oreo",437,18,63,4)];function Qa(e,a,t){return a[t]<e[t]?-1:a[t]>e[t]?1:0}var Xa=[{id:"name",numeric:!1,disablePadding:!0,label:"Dessert\xa0(100g serving)"},{id:"calories",numeric:!0,disablePadding:!1,label:"Calories"},{id:"fat",numeric:!0,disablePadding:!1,label:"Fat\xa0(g)"},{id:"carbs",numeric:!0,disablePadding:!1,label:"Carbs\xa0(g)"},{id:"protein",numeric:!0,disablePadding:!1,label:"Protein\xa0(g)"}];function Ya(e){var a=e.classes,t=e.onSelectAllClick,n=e.order,l=e.orderBy,c=e.numSelected,o=e.rowCount,i=e.onRequestSort;return r.a.createElement(Ga.a,null,r.a.createElement(Aa.a,null,r.a.createElement(Ba.a,{padding:"checkbox"},r.a.createElement(qa.a,{indeterminate:c>0&&c<o,checked:o>0&&c===o,onChange:t,inputProps:{"aria-label":"select all desserts"}})),Xa.map((function(e){return r.a.createElement(Ba.a,{key:e.id,align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:l===e.id&&n},r.a.createElement(za.a,{active:l===e.id,direction:l===e.id?n:"asc",onClick:(t=e.id,function(e){i(e,t)})},e.label,l===e.id?r.a.createElement("span",{className:a.visuallyHidden},"desc"===n?"sorted descending":"sorted ascending"):null));var t}))))}var Za=Object(p.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(Fa.e)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}}})),et=function(e){var a=Za(),t=e.numSelected;return r.a.createElement(Wa.a,{className:Object(Pa.a)(a.root,Object(Ia.a)({},a.highlight,t>0))},t>0?r.a.createElement(ue.a,{className:a.title,color:"inherit",variant:"subtitle1",component:"div"},t," selected"):r.a.createElement(ue.a,{className:a.title,variant:"h6",id:"tableTitle",component:"div"},"Nutrition"),t>0?r.a.createElement(Na.a,{title:"Delete"},r.a.createElement(Ha.a,{"aria-label":"delete"},r.a.createElement(Va.a,null))):r.a.createElement(Na.a,{title:"Filter list"},r.a.createElement(Ha.a,{"aria-label":"filter list"},r.a.createElement(Ja.a,null))))},at=Object(p.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function tt(){var e=at(),a=r.a.useState("asc"),t=Object(H.a)(a,2),n=t[0],l=t[1],c=r.a.useState("calories"),o=Object(H.a)(c,2),i=o[0],u=o[1],m=r.a.useState([]),s=Object(H.a)(m,2),d=s[0],p=s[1],b=r.a.useState(0),E=Object(H.a)(b,2),g=E[0],h=E[1],f=r.a.useState(!1),v=Object(H.a)(f,2),y=v[0],k=v[1],C=r.a.useState(5),O=Object(H.a)(C,2),j=O[0],x=O[1],w=j-Math.min(j,Ua.length-g*j);return r.a.createElement("div",{className:e.root},r.a.createElement(je.a,{className:e.paper},r.a.createElement(et,{numSelected:d.length}),r.a.createElement(Ma.a,null,r.a.createElement(La.a,{className:e.table,"aria-labelledby":"tableTitle",size:y?"small":"medium","aria-label":"enhanced table"},r.a.createElement(Ya,{classes:e,numSelected:d.length,order:n,orderBy:i,onSelectAllClick:function(e){if(e.target.checked){var a=Ua.map((function(e){return e.name}));p(a)}else p([])},onRequestSort:function(e,a){l(i===a&&"asc"===n?"desc":"asc"),u(a)},rowCount:Ua.length}),r.a.createElement(Da.a,null,function(e,a){var t=e.map((function(e,a){return[e,a]}));return t.sort((function(e,t){var n=a(e[0],t[0]);return 0!==n?n:e[1]-t[1]})),t.map((function(e){return e[0]}))}(Ua,function(e,a){return"desc"===e?function(e,t){return Qa(e,t,a)}:function(e,t){return-Qa(e,t,a)}}(n,i)).slice(g*j,g*j+j).map((function(e,a){var t,n=(t=e.name,-1!==d.indexOf(t)),l="enhanced-table-checkbox-".concat(a);return r.a.createElement(Aa.a,{hover:!0,onClick:function(a){return function(e,a){var t=d.indexOf(a),n=[];-1===t?n=n.concat(d,a):0===t?n=n.concat(d.slice(1)):t===d.length-1?n=n.concat(d.slice(0,-1)):t>0&&(n=n.concat(d.slice(0,t),d.slice(t+1))),p(n)}(0,e.name)},role:"checkbox","aria-checked":n,tabIndex:-1,key:e.name,selected:n},r.a.createElement(Ba.a,{padding:"checkbox"},r.a.createElement(qa.a,{checked:n,inputProps:{"aria-labelledby":l}})),r.a.createElement(Ba.a,{component:"th",id:l,scope:"row",padding:"none"},e.name),r.a.createElement(Ba.a,{align:"right"},e.calories),r.a.createElement(Ba.a,{align:"right"},e.fat),r.a.createElement(Ba.a,{align:"right"},e.carbs),r.a.createElement(Ba.a,{align:"right"},e.protein))})),w>0&&r.a.createElement(Aa.a,{style:{height:(y?33:53)*w}},r.a.createElement(Ba.a,{colSpan:6}))))),r.a.createElement(Ra.a,{rowsPerPageOptions:[5,10,25],component:"div",count:Ua.length,rowsPerPage:j,page:g,onChangePage:function(e,a){h(a)},onChangeRowsPerPage:function(e){x(parseInt(e.target.value,10)),h(0)}})),r.a.createElement(be.a,{control:r.a.createElement(Ee.a,{checked:y,onChange:function(e){k(e.target.checked)}}),label:"Dense padding"}))}function nt(e){var a=e.children,t=e.value,n=e.index,l=Object(le.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},l),t===n&&r.a.createElement(me.a,{p:3},r.a.createElement(ue.a,null,a)))}function rt(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var lt=Object(p.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));function ct(){var e=lt(),a=r.a.useState(1),t=Object(H.a)(a,2),n=t[0],l=t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(ce.a,{position:"static"},r.a.createElement(oe.a,{value:n,variant:"fullWidth",onChange:function(e,a){l(a)},"aria-label":"simple tabs example"},r.a.createElement(ie.a,Object.assign({label:"TextField",icon:r.a.createElement(de.a,null),wrapped:!0},rt(0))),r.a.createElement(ie.a,Object.assign({label:"Container"},rt(1))),r.a.createElement(ie.a,Object.assign({label:"Grids"},rt(2))),r.a.createElement(ie.a,Object.assign({label:"Disabled Tab",disabled:!0},rt(3))),r.a.createElement(ie.a,Object.assign({label:"Tables"},rt(4))))),r.a.createElement(nt,{value:n,index:0},r.a.createElement(ye,null),r.a.createElement("br",null),r.a.createElement(ea,null)," ",r.a.createElement("br",null),r.a.createElement(ha,null)),r.a.createElement(nt,{value:n,index:1},r.a.createElement(Oe,null)," ",r.a.createElement("br",null),r.a.createElement(De,null)," ",r.a.createElement("br",null),r.a.createElement(Ta,null)),r.a.createElement(nt,{value:n,index:2},r.a.createElement(Ne,null)," ",r.a.createElement("br",null),r.a.createElement(ze,null)," ",r.a.createElement("br",null),r.a.createElement(Ue,null)),r.a.createElement(nt,{value:n,index:3},"This Table is disabled."),r.a.createElement(nt,{value:n,index:4},r.a.createElement(tt,null)))}var ot=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement(ct,null))}}]),t}(r.a.Component),it=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Page Not Found")}}]),t}(r.a.Component),ut=t(140),mt=t(274),st=t(271),dt=t(136),pt=t(131),bt=t.n(pt),Et=t(100),gt=t.n(Et),ht=t(65),ft=t.n(ht),vt=t(99),yt=t.n(vt),kt=t(132),Ct=t.n(kt),Ot=t(47),jt=t(280),xt=t(130),wt=t.n(xt),Nt=Object(p.a)({list:{width:250,color:"#FFFFFF"},listicon:{color:"#FFFFFF"},fullList:{width:"auto"},drawerPaper:{background:"#2E3B55"},menu:{color:"#FFFFFF",marginLeft:"-10px",marginRight:"20px"}});function St(){var e=Nt(),a=r.a.useState({top:!1,left:!1,bottom:!1,right:!1}),t=Object(H.a)(a,2),n=t[0],l=t[1],c=function(e,a){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&l(Object(Ot.a)(Object(Ot.a)({},n),{},Object(Ia.a)({},e,a)))}};return r.a.createElement("div",null,["left"].map((function(a){return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement(Ha.a,{className:e.menu,onClick:c(a,!0)}," ",r.a.createElement(wt.a,null)," "),r.a.createElement(jt.a,{anchor:a,open:n[a],onClose:c(a,!1),onOpen:c(a,!0),classes:{paper:e.drawerPaper}},function(a){return r.a.createElement("div",{className:Object(Pa.a)(e.list,Object(Ia.a)({},e.fullList,"top"===a||"bottom"===a)),role:"presentation",onClick:c(a,!1),onKeyDown:c(a,!1)},r.a.createElement(We.a,null,["Inbox","Starred","Send email","Drafts"].map((function(a,t){return r.a.createElement(qe.a,{button:!0,key:a},r.a.createElement(ta.a,{className:e.listicon},t%2===0?r.a.createElement(la.a,null):r.a.createElement(ft.a,null)),r.a.createElement(He.a,{primary:a}))}))),r.a.createElement(wa.a,null),r.a.createElement(We.a,null,["All mail","Trash","Spam"].map((function(a,t){return r.a.createElement(qe.a,{button:!0,key:a},r.a.createElement(ta.a,{className:e.listicon},t%2===0?r.a.createElement(la.a,null):r.a.createElement(ft.a,null)),r.a.createElement(He.a,{primary:a}))}))))}(a)))})))}var Tt=Object(p.a)((function(e){return{grow:{flexGrow:1},navbgcolor:{backgroundColor:"#2E3B55"},menuButton:{marginLeft:e.spacing(1)},title:Object(Ia.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(Ia.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Fa.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Fa.c)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(Ia.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(Ia.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(Ia.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function It(){var e=Tt(),a=r.a.useState(null),t=Object(H.a)(a,2),n=t[0],l=t[1],c=r.a.useState(null),o=Object(H.a)(c,2),i=o[0],u=o[1],m=Boolean(n),s=Boolean(i),d=function(e){l(e.currentTarget)},p=function(){u(null)},b=function(){l(null),p()};var E="primary-search-account-menu",g=r.a.createElement(dt.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:E,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:m,onClose:b},r.a.createElement(st.a,{onClick:b},"Profile"),r.a.createElement(st.a,{onClick:b},"My account")),h=r.a.createElement(dt.a,{anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:s,onClose:p},r.a.createElement(st.a,null,r.a.createElement(Ha.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(mt.a,{badgeContent:4,color:"secondary"},r.a.createElement(ft.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(st.a,null,r.a.createElement(Ha.a,{"aria-label":"show 11 new notifications",color:"inherit"},r.a.createElement(mt.a,{badgeContent:11,color:"secondary"},r.a.createElement(yt.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(st.a,{onClick:d},r.a.createElement(Ha.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(gt.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:e.grow},r.a.createElement(ce.a,{position:"static",className:e.navbgcolor},r.a.createElement(Wa.a,null,r.a.createElement(St,{className:e.menuButton}),r.a.createElement(ue.a,{className:e.title,variant:"h6",noWrap:!0},"Material-UI"),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(bt.a,null)),r.a.createElement(ut.a,{placeholder:"Search\u2026",id:"searchInput",classes:{root:e.inputRoot,input:e.inputInput},onKeyUp:function(e){console.log("event : ",e.keyCode);var a=document.getElementById("searchInput").value;console.log(a)},inputProps:{"aria-label":"search"}})),r.a.createElement("div",{className:e.sectionDesktop},r.a.createElement(Ha.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(mt.a,{badgeContent:4,color:"secondary"},r.a.createElement(ft.a,null))),r.a.createElement(Ha.a,{"aria-label":"show 17 new notifications",color:"inherit"},r.a.createElement(mt.a,{badgeContent:17,color:"secondary"},r.a.createElement(yt.a,null))),r.a.createElement(Ha.a,{edge:"end","aria-label":"account of current user","aria-controls":E,"aria-haspopup":"true",onClick:d,color:"inherit"},r.a.createElement(gt.a,null))),r.a.createElement("div",{className:e.sectionMobile},r.a.createElement(Ha.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},color:"inherit"},r.a.createElement(Ct.a,null))))),h,g)}var Pt=t(101),Ft=t.n(Pt),Lt=t(275),Dt=t(133),Bt=t.n(Dt),Mt=Object(p.a)((function(e){return{root:{flexGrow:1},paper:{margin:e.spacing(.5),padding:e.spacing(2),textAlign:"center",color:"blue"},fabGreen:{color:"blue",backgroundColor:"orange","&:hover":{backgroundColor:"teal"}}}})),Gt=Object(b.a)({root:{color:"pink","&$checked":{color:"blue"}},checked:{}})((function(e){return r.a.createElement(qa.a,Object.assign({color:"default"},e))}));function Rt(){var e=Mt(),a=r.a.useState({checkedA:!0,checkedB:!1,checkedF:!0,checkedG:!0}),t=Object(H.a)(a,2),n=t[0],l=t[1],c=function(e){l(Object(Ot.a)(Object(Ot.a)({},n),{},Object(Ia.a)({},e.target.name,e.target.checked)))};return r.a.createElement("div",null,"Inside form body",r.a.createElement("div",{className:e.root},r.a.createElement(xe.a,{container:!0},r.a.createElement(xe.a,{item:!0,xs:12,md:4},r.a.createElement(je.a,{elevation:5,className:e.paper},r.a.createElement(be.a,{checked:n.checkedB,control:r.a.createElement(qa.a,{checked:n.checkedB,onChange:c,name:"checkedB",color:"primary"}),label:"Primary"}))),r.a.createElement(xe.a,{item:!0,xs:12,md:4},r.a.createElement(je.a,{className:e.paper},r.a.createElement(be.a,{checked:n.checkedA,control:r.a.createElement(qa.a,{icon:r.a.createElement(Ft.a,null),checkedIcon:r.a.createElement(Ft.a,null),name:"checkedA",onChange:c}),label:"Custom icon"}))),r.a.createElement(xe.a,{item:!0,xs:12,md:4},r.a.createElement(je.a,{className:e.paper},r.a.createElement(be.a,{control:r.a.createElement(Gt,{checked:n.checkedC,onChange:c,name:"checkedC"}),label:"Custom color"}))))),r.a.createElement(Lt.a,{className:e.fabGreen,onClick:function(e){console.log("fab btn clicked")},size:"small","aria-label":"add"}," ",r.a.createElement(Bt.a,null)," "))}var At=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(It,null),r.a.createElement(Rt,null))}}]),t}(r.a.Component);function zt(){var e=Object(y.a)(["\n    width: 300px;\n    height: 100px;\n    align-self: centre;\n"]);return zt=function(){return e},e}function Wt(){var e=Object(y.a)(["\n    color: tomato;\n    border-color: tomato;\n"]);return Wt=function(){return e},e}var qt=Object(k.b)(P)(Wt()),Ht=function(e){return r.a.createElement(P,Object.assign({},e,{children:e.children.split("").reverse()}))},_t=Object(k.b)(z)(zt()),Vt=function(){var e=Object(i.g)();return r.a.createElement(S,null,r.a.createElement(I,null,r.a.createElement(T,null," My First Styled Component "),r.a.createElement(P,{primary:!0},"Primary"),r.a.createElement(qt,null," TomatoButton "),r.a.createElement(P,{primary:!0,as:Ht},"Custom Button with Normal Button styles"),r.a.createElement(F,{defaultValue:"@geelen",type:"text",inputColor:"blue"}),r.a.createElement(L,null),r.a.createElement(P,{onClick:function(){return e.push("/theme")}},"Go to Themed Page"),r.a.createElement(_t,null,r.a.createElement(W,null,"Themed Text inside a Themed Div")),r.a.createElement(W,null," This Text uses theme color ")))},$t=t(91),Jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;default:return e}},Kt=t(103),Ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0,t={id:a.id,text:a.text,completed:!1};if(""===a.text)return Object(Kt.a)(e);switch(a.type){case"ADD_ITEM":return[].concat(Object(Kt.a)(e),[t]);case"DELETE_ITEM":return e.filter((function(e){return e.id!==a.id}));case"TOGGLE_ITEM":return e.map((function(e){return e.id!==a.id?e:Object(Ot.a)(Object(Ot.a)({},e),{},{completed:!e.completed})}));default:return e}},Qt=Object($t.a)({returnCounter:Jt,todoList:Ut}),Xt=Object($t.b)(Qt),Yt=t(135),Zt=t.n(Yt),en=(t(181),function(){var e,a=Object(n.useState)(Xt.getState().returnCounter),t=Object(H.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)(Xt.getState().todoList),i=Object(H.a)(o,2),u=i[0],m=i[1],s=Object(n.useState)("SHOW_ALL"),d=Object(H.a)(s,2),p=d[0],b=d[1],g=Object(n.useState)(0),h=Object(H.a)(g,2),f=h[0],v=h[1];Xt.subscribe((function(){return c(Xt.getState().returnCounter)})),Xt.subscribe((function(){return m(Xt.getState().todoList)}));var y=function(e){var a=e.item;return r.a.createElement("div",{className:"listitem"},r.a.createElement("div",{className:"itemText",onClick:function(){return Xt.dispatch({type:"TOGGLE_ITEM",id:a.id})}},a.completed?j(a.text):a.text),r.a.createElement("div",{className:"itemRemove"},r.a.createElement(Zt.a,{onClick:function(){return Xt.dispatch({type:"DELETE_ITEM",id:a.id})}})))},k=function(e){var a=e.title,t=e.filterName;return t===p?r.a.createElement("span",null," ",a," "):r.a.createElement("div",{className:"activeFilter",onClick:function(){return b(t)}},a)},C=function(){var e=u;switch(p){case"SHOW_ALL":return e.length>0?r.a.createElement(O,{list:e}):"No Tasks Noted Down";case"ITEMS_COMPLETED":return(e=e.filter((function(e){return e.completed}))).length>0?r.a.createElement(O,{list:e}):"No Completed Tasks";case"ITEMS_PENDING":return(e=e.filter((function(e){return!e.completed}))).length>0?r.a.createElement(O,{list:e}):"No Pending Tasks";default:return"No Tasks Noted Down"}},O=function(e){var a=e.list;return r.a.createElement("div",null,r.a.createElement("ul",{type:"square"},a.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(y,{item:e}))}))))},j=function(e){return r.a.createElement("div",{className:"text-striked"}," ",e," ")};return r.a.createElement("div",{style:{padding:"20px"}},r.a.createElement("p",null," Redux Counter and To-Do List Example "),r.a.createElement("p",null," Counter Value : ",l," "),r.a.createElement(E.a,{style:{backgroundColor:"#21b6ae",color:"yellow"},variant:"contained",onClick:function(){return Xt.dispatch({type:"INCREMENT"})}},"Inc counter"),r.a.createElement(E.a,{style:{backgroundColor:"#21b6ae",color:"yellow"},variant:"contained",onClick:function(){return Xt.dispatch({type:"DECREMENT"})}},"Dec counter"),r.a.createElement("div",{className:"div_list"},r.a.createElement("p",null," To-Do List ")," ",r.a.createElement("br",null),r.a.createElement("input",{ref:function(a){e=a},style:{width:"200px",height:"25px"}}),r.a.createElement(E.a,{onClick:function(){Xt.dispatch({type:"ADD_ITEM",text:e.value,id:f}),v(f+1),e.value=""},style:{backgroundColor:"#21b6ae",marginLeft:"10px",color:"yellow"}},"Add Item"),r.a.createElement("div",{className:"listOptions"},r.a.createElement("div",null,r.a.createElement(k,{filterName:"SHOW_ALL",title:"All Items"})),r.a.createElement("div",null,r.a.createElement(k,{filterName:"ITEMS_PENDING",title:"Pending"})),r.a.createElement("div",null,r.a.createElement(k,{filterName:"ITEMS_COMPLETED",title:"Completed"}))),r.a.createElement(C,null)))}),an=(t(182),function(){return r.a.createElement(J,null,r.a.createElement(o.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:re}),r.a.createElement(i.b,{path:"/ui",component:ot}),r.a.createElement(i.b,{path:"/dashboard",component:At}),r.a.createElement(i.b,{path:"/styled",component:Vt}),r.a.createElement(i.b,{path:"/theme",component:X}),r.a.createElement(i.b,{path:"/redux",component:en}),r.a.createElement(i.b,{path:"/404",component:it}),r.a.createElement(i.a,{to:"/404"}))))});c.a.render(r.a.createElement(an,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[168,1,2]]]);
//# sourceMappingURL=main.0bc8de10.chunk.js.map