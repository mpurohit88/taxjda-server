(this.webpackJsonpuploader=this.webpackJsonpuploader||[]).push([[0],{15:function(e,t,n){e.exports=n(41)},20:function(e,t,n){},22:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},23:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(13),l=n.n(r),c=(n(20),n(3)),u=n.n(c),i=n(2),s=(n(22),n(23),n(14)),p=n.n(s),d="https://express-uploader.herokuapp.com/api";function f(e,t,n){p()({url:"".concat(d,"/upload"),method:"POST",data:t,headers:{"Content-Type":e}}).then((function(e){n(e.data)})).catch((function(e){n("error")}))}var m=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(null),c=Object(i.a)(l,2),s=c[0],p=c[1],d=Object(a.useState)(""),m=Object(i.a)(d,2),h=m[0],v=m[1];return o.a.createElement("div",{className:"App"},o.a.createElement("h2",null,"Upload Form"),o.a.createElement("form",null,o.a.createElement("label",null,"File Title",o.a.createElement("input",{type:"text",vaue:n,onChange:function(e){r(e.target.value)},placeholder:"Give a title to your upload"})),o.a.createElement("label",null,"File",o.a.createElement("input",{type:"file",name:"file",onChange:function(e){return p(e.target.files[0])}})),o.a.createElement("label",null,"Description",o.a.createElement("textarea",{value:h,onChange:function(e){return v(e.target.value)}})),o.a.createElement("input",{type:"button",value:"Upload as Form",onClick:function(){var e=new FormData;e.append("title",n),e.append("file",s),e.append("desc",h),f("multipart/form-data",e,(function(e){return console.log(e)}))}}),o.a.createElement("input",{type:"button",value:"Upload as JSON",onClick:function(){var e;return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e=function(e){return new Promise((function(t,n){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){return t(a.result)},a.onerror=function(e){return n(e)}}))},t.t0=n,t.next=4,u.a.awrap(e(s));case 4:t.t1=t.sent,t.t2=h,f("application/json",{title:t.t0,file:t.t1,desc:t.t2},(function(e){return console.log(e)}));case 8:case"end":return t.stop()}}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.1243a3cd.chunk.js.map