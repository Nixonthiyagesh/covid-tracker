(this["webpackJsonpclone-react-app"]=this["webpackJsonpclone-react-app"]||[]).push([[0],{14:function(e,t,n){e.exports={container:"Cards_container__-bAry",card:"Cards_card__-2tUw",infected:"Cards_infected__15cR3",deaths:"Cards_deaths__2X9eO",recovered:"Cards_recovered__1oFlP"}},209:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n.n(r),o=n(71),s=n.n(o),i=(n(89),n(6)),d=n.n(i),u=n(11),l=n(72),p=n(73),f=n(81),j=n(80),h=n(227),b=n(232),v=n(228),x=n(229),m=n(31),O=n.n(m),g=n(14),y=n.n(g),C=n(32),_=n.n(C),w=function(e){var t=e.data,n=t.confirmed,r=t.recovered,c=t.deaths,o=t.lastUpdate;return console.log("erwewewggg",n),n?Object(a.jsx)("div",{className:y.a.container,children:Object(a.jsxs)(h.a,{container:!0,spacing:3,justify:"center",children:[Object(a.jsx)(h.a,{item:!0,xs:12,md:3,component:b.a,className:_()(y.a.card,y.a.infected),children:Object(a.jsxs)(v.a,{children:[Object(a.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:"Infected"}),Object(a.jsx)(x.a,{variant:"h5",children:Object(a.jsx)(O.a,{start:0,end:null===n||void 0===n?void 0:n.value,duration:2.5,separator:","})}),Object(a.jsx)(x.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(a.jsx)(x.a,{variant:"body2",children:"Numbber of active cases of Covid-19"})]})}),Object(a.jsx)(h.a,{item:!0,xs:12,md:3,component:b.a,className:_()(y.a.card,y.a.recovered),children:Object(a.jsxs)(v.a,{children:[Object(a.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:"Recovered"}),Object(a.jsx)(x.a,{variant:"h5",children:Object(a.jsx)(O.a,{start:0,end:null===r||void 0===r?void 0:r.value,duration:2.5,separator:","})}),Object(a.jsx)(x.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(a.jsx)(x.a,{variant:"body2",children:"Numbber of recovered cases of Covid-19"})]})}),Object(a.jsx)(h.a,{item:!0,xs:12,md:3,component:b.a,className:_()(y.a.card,y.a.deaths),children:Object(a.jsxs)(v.a,{children:[Object(a.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:"Deaths"}),Object(a.jsx)(x.a,{variant:"h5",children:Object(a.jsx)(O.a,{start:0,end:null===c||void 0===c?void 0:c.value,duration:2.5,separator:","})}),Object(a.jsx)(x.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(a.jsx)(x.a,{variant:"body2",children:"Numbber of deaths caused by Covid-19"})]})})]})}):"Loading...."},S=n(30),k=n(231),D=n(230),N=n(78),B=n.n(N),F=n(33),L=n.n(F),U="https://covid19.mathdro.id/api",A=function(){var e=Object(u.a)(d.a.mark((function e(t){var n,a,r,c,o,s,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=U,t&&"global"!==t&&(n="".concat(U,"/countries/").concat(t)),console.log("countryUrl",n),e.prev=3,e.next=6,L.a.get(n);case 6:return a=e.sent,r=a.data,c=r.confirmed,o=r.recovered,s=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:i});case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(d.a.mark((function e(){var t,n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("".concat(U,"/daily"));case 3:return t=e.sent,n=t.data,a=n.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),console.log("data",n,"modify",a),e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("".concat(U,"/countries"));case 3:return t=e.sent,n=t.data.countries,console.log("countries",n),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log("err",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),J=function(e){var t=e.handleCountryChange,n=Object(r.useState)(""),c=Object(S.a)(n,2),o=c[0],s=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,E();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),0===o.length?"Loading":Object(a.jsx)(k.a,{className:B.a.formControl,children:Object(a.jsxs)(D.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(a.jsx)("option",{value:"global",children:"Global"}),null===o||void 0===o?void 0:o.map((function(e,t){return Object(a.jsx)("option",{value:e.name,children:e.name},t)}))]})})},P=n(45),M=n(79),R=n.n(M),T=function(e){var t=e.data,n=t.confirmed,c=t.deaths,o=t.recovered,s=e.country,i=Object(r.useState)([]),l=Object(S.a)(i,2),p=l[0],f=l[1];Object(r.useEffect)((function(){(function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var j=p.length&&Object(a.jsx)(P.Line,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}});console.log("daily",p.map((function(e){return e.deaths})));var h=n&&Object(a.jsx)(P.Bar,{data:{labels:["infected","recovered","deaths"],datasets:[{label:"people",backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"],data:[n.value,o.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current State in "+s}}});return Object(a.jsx)("div",{className:R.a.container,children:s?h:j})},q=n(46),G=n.n(q),H=n.p+"static/media/covid-19-img.9e5d4fc7.png",V=function(e){Object(f.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(u.a)(d.a.mark((function t(n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(n);case 2:a=t.sent,e.setState({data:a,country:n}),console.log(n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,console.log("didmount",t),this.setState({data:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,n=e.country;return Object(a.jsxs)("div",{className:G.a.container,children:[Object(a.jsx)("img",{src:H,className:G.a.covid}),Object(a.jsx)(w,{data:t}),Object(a.jsx)(J,{handleCountryChange:this.handleCountryChange}),Object(a.jsx)(T,{data:t,country:n})]})}}]),n}(c.a.Component),W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,233)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(V,{})}),document.getElementById("root")),W()},46:function(e,t,n){e.exports={container:"App_container__uqg3n",covid:"App_covid__2oWnB"}},78:function(e,t,n){e.exports={formControl:"Countrypicker_formControl__1YZJr"}},79:function(e,t,n){e.exports={container:"Chart_container__kixHp"}},89:function(e,t,n){}},[[209,1,2]]]);
//# sourceMappingURL=main.e77c1550.chunk.js.map