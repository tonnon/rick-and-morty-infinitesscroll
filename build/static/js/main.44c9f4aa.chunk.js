(this["webpackJsonpaot-avaliation"]=this["webpackJsonpaot-avaliation"]||[]).push([[0],{29:function(e,a,t){e.exports=t.p+"static/media/logo.700ea584.png"},36:function(e,a,t){e.exports=t(67)},41:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(24),l=t.n(r),o=t(25),i=t(26),s=t(34),m=t(27),u=t(35),p=(t(41),t(7)),E=t(6),d=t(11),f=t.n(d),h=t(28),b=t(33),g=(t(43),t(44),t(29)),v=t.n(g),N=function(){return c.a.createElement("div",{className:"navbar"},c.a.createElement("img",{src:v.a,alt:"logo",width:"20px"}))},w=t(30),j=t.n(w).a.create({baseURL:"https://rickandmortyapi.com/api/character/"}),k=function(e,a){var t=parseInt(a,10)+e;return t>=0?t:1},y=function(e){var a,t=e.match,r=Object(n.useState)([]),l=Object(b.a)(r,2),o=l[0],i=l[1],s=(a=Number(t.params.page)||1,[0,1,2,3,4].map((function(e){return parseInt(a,10)+e}))),m=Number(t.params.page)||1;return Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(f.a.mark((function e(){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get("/?page=".concat(m));case 2:a=e.sent,i(a.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t.params.page,m]),c.a.createElement("div",{className:"container"},c.a.createElement(N,null),c.a.createElement("div",{className:"header"},c.a.createElement("ul",{className:"pageNumberContainer"},c.a.createElement(p.b,{to:"/".concat(k(-1,m))},c.a.createElement("li",{className:"direction"}," prev ")),s.map((function(e){return c.a.createElement(p.b,{to:"/".concat(e),key:e},c.a.createElement("li",{className:"pageNumber",actualpage:m?1:void 0},e))})),c.a.createElement(p.b,{to:"/".concat(k(1,m))},c.a.createElement("li",{className:"direction"}," next ")))),c.a.createElement("ul",{className:"cardGrid"},o.map((function(e){return c.a.createElement("li",{key:e.id,className:"card"},c.a.createElement("img",{src:e.image,alt:e.name}),c.a.createElement("section",null,c.a.createElement("header",null,c.a.createElement("h3",null,c.a.createElement("span",null,e.id)," ",e.name),c.a.createElement("h4",null,c.a.createElement("span",null,e.species," - ",e.status)))))})),";"))};function O(){return c.a.createElement(E.c,null,c.a.createElement(E.a,{path:"/:page?",exact:!0,component:y}))}var x=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement(p.a,null,c.a.createElement(O,null))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.44c9f4aa.chunk.js.map