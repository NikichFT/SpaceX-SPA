/*! For license information please see main.87a5074b.chunk.js.LICENSE.txt */
(this.webpackJsonpspacex=this.webpackJsonpspacex||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/logo.d5ab31ce.svg"},34:function(e,t,a){e.exports=a(71)},39:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(24),r=a.n(l),s=a(13),m=a(25),o=a(33),i=a(31),u=a(6),E=a(1),h=a(10),d=a.n(h),p=(a(39),function(e){return c.a.createElement("header",{className:"header"},c.a.createElement(u.b,{to:"/"},c.a.createElement("img",{src:d.a,alt:"Logo Space X",className:"logo"})),c.a.createElement("nav",{className:"main-nav nav"},c.a.createElement("ul",{className:"list"},e.rockets.map((function(t,a){return c.a.createElement("li",{key:a,className:"item"},c.a.createElement(u.b,{to:"/rocket/".concat(t.replace(" ","_")),onClick:function(){e.changeRocket(t)},className:"item-link"},t))})))),c.a.createElement("nav",{className:"secondary-nav"},c.a.createElement("ul",{className:"list"},c.a.createElement("li",{className:"item"},c.a.createElement(u.c,{exact:!0,to:"/",className:"item-link",activeClassName:"active"},"Home")),c.a.createElement("li",{className:"item"},c.a.createElement(u.c,{to:"/calendar",className:"item-link",activeClassName:"active"},"Calendar")))))}),f=(a(44),a(45),{"Falcon 1":"moon","Falcon 9":"earth","Falcon Heavy":"mars",other:"space"}),b=function(e){var t=e.rocket,a=e.name;return c.a.createElement("section",{className:"main"},c.a.createElement("h1",{className:"title"},a||t),t&&c.a.createElement("div",{className:"video-container"},c.a.createElement("video",{className:"video",autoPlay:!0,loop:!0,muted:!0,src:"/video/".concat(f.hasOwnProperty(t)?f[t]:f.other,".mp4")})))},N=function(e){var t=e.companies;return c.a.createElement(c.a.Fragment,null,c.a.createElement(b,null),c.a.createElement("main",{className:"main"},c.a.createElement("div",{className:"container"},c.a.createElement("hgroup",{className:"title"},c.a.createElement("h1",null,c.a.createElement("img",{className:"logo-title",src:d.a,alt:t.name})),c.a.createElement("h2",{className:"subtitle"},t.summary)),c.a.createElement("div",{className:"row"},c.a.createElement("table",{className:"home_table home_table-manager"},c.a.createElement("caption",{className:"home_table-title"},"Manager"),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"CEO"),c.a.createElement("td",{className:"home_table-column"},t.ceo)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"COO"),c.a.createElement("td",{className:"home_table-column"},t.coo)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"CTO"),c.a.createElement("td",{className:"home_table-column"},t.cto)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"CTO PROPULSION"),c.a.createElement("td",{className:"home_table-column"},t.cto_propulsion)))),c.a.createElement("table",{className:"home_table home_table-location"},c.a.createElement("caption",{className:"home_table-title"},"Location"),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"State"),c.a.createElement("td",{className:"home_table-column"},t.headquarters.state)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"City"),c.a.createElement("td",{className:"home_table-column"},t.headquarters.city)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"Address"),c.a.createElement("td",{className:"home_table-column"},t.headquarters.address)))),c.a.createElement("video",{id:"video",autoPlay:!0,loop:!0,muted:!0,className:"responsive-video",width:"100%",height:"100%",preload:"auto"},c.a.createElement("source",{type:"video/mp4",src:"https://www.spacex.com/media/mission_reusability.mp4"}),c.a.createElement("source",{type:"video/webm",src:"https://www.spacex.com/media/mission_reusability.webm"}))))))},v=(a(46),a(27)),k=a.n(v),g={"Falcon 1":"falcon-1","Falcon 9":"falcon-9","Falcon Heavy":"falcon-heavy",Starship:"starship",other:"falcon-5"},w=function(e){var t=e.name,a=e.height,n=e.diameter,l=e.mass,r=e.description,s=e.payload_weights;return c.a.createElement(c.a.Fragment,null,c.a.createElement(b,{rocket:t}),c.a.createElement("section",{className:"features"},c.a.createElement("h2",{className:"features-title"},t," ",c.a.createElement("br",null),"Overview"),c.a.createElement("div",{className:"overview"},c.a.createElement("table",{className:"table"},c.a.createElement("caption",{className:"table-title"},"Size"),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"table-column"},"HEIGHT"),c.a.createElement("td",{className:"table-column"},a.meters," m/ ",a.feet," ft")),c.a.createElement("tr",null,c.a.createElement("td",{className:"table-column"},"DIAMETER"),c.a.createElement("td",{className:"table-column"},n.meters," m/ ",n.feet," ft")),c.a.createElement("tr",null,c.a.createElement("td",{className:"table-column"},"MASS"),c.a.createElement("td",{className:"table-column"},l.kg," kg/ ",l.lb," lb")),s.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",{className:"table-column"},"PAYLOAD TO ",e.id.toUpperCase()),c.a.createElement("td",{className:"table-column"},e.kg," kg / ",e.lb," lb"))})))),c.a.createElement(k.a,{speed:14},c.a.createElement("img",{src:"/img/".concat(g.hasOwnProperty(t)?g[t]:g.other,".png"),alt:"rocket",className:"rocket"})),c.a.createElement("article",null,c.a.createElement("h3",{className:"features-subtitle"},"DESCRIPTION"),c.a.createElement("p",{className:"features-text"},r)))))},y=(a(54),function(e){var t=e.companies,a=t.links;return c.a.createElement("footer",{className:"footer"},c.a.createElement("img",{src:d.a,alt:"logo Space X",className:"logo"}),c.a.createElement("nav",{className:"footer-nav"},c.a.createElement("ul",{className:"list"},c.a.createElement("li",{className:"item"},c.a.createElement("a",{href:a.elon_twitter,rel:"noopener noreferrer",target:"_blank",className:"item-link"},"".concat(t.founder," Twitter"))),c.a.createElement("li",{className:"item"},c.a.createElement("a",{href:a.twitter,rel:"noopener noreferrer",target:"_blank",className:"item-link"},"Twitter")),c.a.createElement("li",{className:"item"},c.a.createElement("a",{href:a.flickr,rel:"noopener noreferrer",target:"_blank",className:"item-link"},"Flickr")),c.a.createElement("li",{className:"item"},c.a.createElement("a",{href:a.website,rel:"noopener noreferrer",target:"_blank",className:"item-link"},"Website")))),c.a.createElement("p",{className:"footer-text"},"For additional questions, contact",c.a.createElement("a",{className:"footer-link",href:"mailto:rideshare@spacex.com"},"rideshare@spacex.com")))}),O=a(32),_=a(15),x=a(8),j=a.n(x),C=a(12),F=function e(){var t=this;Object(s.a)(this,e),this.startUrl="https://api.spacexdata.com/v4/",this.getResource=function(){var e=Object(C.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 ".concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getRocket=Object(C.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource(t.startUrl+"rockets");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getLaunches=Object(C.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource(t.startUrl+"launches/past");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getCompany=Object(C.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource(t.startUrl+"company");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))},S=new F,R=function(){var e=Object(n.useState)([]),t=Object(_.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){S.getLaunches().then((function(e){return c((function(t){return Object(O.a)(e)}))}))}),[]);return{data:a,getLaunch:function(e){return a.find((function(t){return t.id===e}))}}},L=(a(56),function(){var e=R().data;return console.log(e),c.a.createElement(c.a.Fragment,null,c.a.createElement(b,{name:"Calendar SpaceX"}),c.a.createElement("section",{className:"calendar"},c.a.createElement("div",{className:"container"},c.a.createElement("ul",{className:"calendar-list"},e.map((function(e){return c.a.createElement("li",{className:"calendar-item",key:e.id},c.a.createElement("article",{className:"launches"},c.a.createElement("div",{className:"launches-image"},c.a.createElement("img",{src:e.links.patch.small,alt:""}),c.a.createElement("a",{className:"launches-youtube",href:"https://www.youtube.com/watch?v=dLQ2tZEH6G0"})),c.a.createElement("div",{className:"launches-content"},c.a.createElement("h2",{className:"launches-title"},e.name),c.a.createElement(u.b,{to:"/details/".concat(e.id),className:"button launches-details"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))))}))))))}),P=a(28),T=(a(69),function(e){var t=Object(n.useState)(null),a=Object(_.a)(t,2),l=a[0],r=a[1],s=R().getLaunch;Object(n.useEffect)((function(){r(s(e.match.params.id))}),[s]);var m=Object(E.e)();return l?c.a.createElement(c.a.Fragment,null,c.a.createElement(b,{name:l.name}),c.a.createElement("main",{className:"details"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"details-row"},c.a.createElement("div",{className:"details-image"},c.a.createElement("img",{src:l.links.patch.small,alt:l.name})),c.a.createElement("div",{className:"details-content"},c.a.createElement("p",{className:"details-description"},l.details))),c.a.createElement("div",null,c.a.createElement(P.a,{className:"details-youtube",width:"560",height:"315",videoId:l.links.youtube_id}))),c.a.createElement("a",{onClick:m.goBack,className:"button button-back"},"go back"))):c.a.createElement("div",{style:{textAlign:"center"}},"Loading..")}),A=(a(70),function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).fetchData=new F,e.state={rocket:"Falcon 1",rocketFeatures:null,rockets:[],companies:null},e.changeRocket=function(t){e.setState({rocket:t},e.updateRockets)},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.updateRockets(),this.updateCompany()}},{key:"updateRockets",value:function(){var e=this;this.fetchData.getRocket().then((function(t){return e.setState({rockets:t.map((function(e){return e.name}))}),t})).then((function(t){return t.find((function(t){return t.name===e.state.rocket}))})).then((function(t){e.setState({rocketFeatures:t})}))}},{key:"updateCompany",value:function(){var e=this;this.fetchData.getCompany().then((function(t){e.setState({companies:t})}))}},{key:"render",value:function(){var e=this;return c.a.createElement(u.a,null,c.a.createElement(p,{rockets:this.state.rockets,changeRocket:this.changeRocket}),c.a.createElement(E.a,{exact:!0,path:"/",render:function(){return e.state.companies&&c.a.createElement(N,{companies:e.state.companies})}}),c.a.createElement(E.a,{path:"/rocket/:rockets",render:function(t){var a=t.match;return e.state.rocketFeatures&&c.a.createElement(w,Object.assign({},e.state.rocketFeatures,{match:a}))}}),c.a.createElement(E.a,{path:"/calendar",component:L}),c.a.createElement(E.a,{path:"/details/:id",component:T}),this.state.companies&&c.a.createElement(y,{companies:this.state.companies}))}}]),a}(c.a.Component));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.87a5074b.chunk.js.map