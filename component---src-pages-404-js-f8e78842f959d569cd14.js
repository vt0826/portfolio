(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(159),o=a(153);t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(o.a,{title:"404: Not found"}),i.a.createElement("h1",null,"NOT FOUND"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},147:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a});a(149);var d=i.a.createContext({}),s=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,a){var n;e.exports=(n=a(156))&&n.default||n},153:function(e,t,a){"use strict";var n=a(158),i=a(0),r=a.n(i),o=a(4),l=a.n(o),c=a(166),d=a.n(c);function s(e){var t=e.description,a=e.lang,i=e.meta,o=e.keywords,l=e.title,c=n.data.site,s=t||c.siteMetadata.description;return r.a.createElement(d.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:l},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:s}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})}s.defaultProps={lang:"en",meta:[],keywords:[],description:""},s.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=s},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Victor Tsay"}}}}},156:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(55),c=a(2),d=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Victor Tsay",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"Victor Tsay"}}}}},159:function(e,t,a){"use strict";var n=a(155),i=a(0),r=a.n(i),o=a(4),l=a.n(o),c=a(147),d=a(225),s=a(148),m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{item:!0,md:3},r.a.createElement(x,{to:"/",activeStyle:{color:"black"}},"Projects")),r.a.createElement(d.a,{item:!0,md:3},r.a.createElement(x,{to:"/about",activeStyle:{color:"black"}},"About")),r.a.createElement(d.a,{item:!0,md:3},r.a.createElement(E,{href:"https://github.com/vt0826"},"GitHub")),r.a.createElement(d.a,{item:!0,md:3},r.a.createElement(E,{href:"mailto:vt0826@gmail.com"},"Contact")))},p=function(e){var t=e.siteTitle;return r.a.createElement("header",null,r.a.createElement(f,{container:!0,spacing:1},r.a.createElement(d.a,{item:!0,xs:12,sm:5,lg:9},r.a.createElement(h,null,r.a.createElement(w,{to:"/"},t))),r.a.createElement(d.a,{item:!0,xs:12,sm:7,lg:3},r.a.createElement(g,null,r.a.createElement(y,{container:!0,direction:"row",justify:"flex-start",alignItems:"center"},r.a.createElement(m,null))))))};p.propTypes={siteTitle:l.a.string},p.defaultProps={siteTitle:""};var u=p,f=Object(s.a)(d.a).withConfig({displayName:"header__StyledGridContainer",componentId:"sc-31ozxh-0"})(["display:flex;justify-content:space-between;"]),h=s.a.div.withConfig({displayName:"header__StyledHeaderNameDiv",componentId:"sc-31ozxh-1"})(["padding-left:20px;padding-right:20px;"]),y=Object(s.a)(d.a).withConfig({displayName:"header__StyledGridHeaderLink",componentId:"sc-31ozxh-2"})(["padding-left:20px;padding-right:20px;width:100%;direction:row;display:flex;justify-content:space-between;"]),g=(Object(s.a)(d.a).withConfig({displayName:"header__StyledGridHeaderMobileLink",componentId:"sc-31ozxh-3"})(["padding-left:20px;padding-right:20px;width:100%;"]),s.a.div.withConfig({displayName:"header__StyledHeaderDiv",componentId:"sc-31ozxh-4"})(["display:inline;@media (min-width:500px){display:inline;}"])),w=(s.a.div.withConfig({displayName:"header__StyledMobileHeaderDiv",componentId:"sc-31ozxh-5"})(["display:none;@media (min-width:500px){display:none;}"]),Object(s.a)(c.a).withConfig({displayName:"header__StyledNavLinkName",componentId:"sc-31ozxh-6"})(['color:black;display:inline;align:left;font-size:0.7em;line-height:1.6em;text-transform:uppercase;letter-spacing:0.02em;text-decoration:none;font-weight:400;font-style:normal;font-family:"Open Sans",sans-serif;@media (min-width:500px){font-size:1em;}'])),x=Object(s.a)(c.a).withConfig({displayName:"header__StyledNavLink",componentId:"sc-31ozxh-7"})(['font-size:0.7em;display:block;text-align:right;text-transform:none;text-decoration:none;letter-spacing:0.02em;font-weight:400;font-style:normal;line-height:1em;font-family:"Open Sans",sans-serif;color:#aaa;@media (min-width:500px){font-size:1em;}']),E=s.a.a.withConfig({displayName:"header__StyledEmailLink",componentId:"sc-31ozxh-8"})(['font-size:0.7em;display:block;text-align:right;text-transform:none;text-decoration:none;letter-spacing:0.02em;font-weight:400;font-style:normal;line-height:1em;font-family:"Open Sans",sans-serif;color:#aaa;@media (min-width:500px){font-size:1em;}']),b=(a(165),function(e){var t=e.children;return r.a.createElement(c.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null,r.a.createElement(u,{siteTitle:e.site.siteMetadata.title})),r.a.createElement("main",null,r.a.createElement(v,null,t)),r.a.createElement("footer",null,r.a.createElement(v,null,r.a.createElement(_,null,"© ",(new Date).getFullYear(),", Develop By Victor Tsay"))))},data:n})});b.propTypes={children:l.a.node.isRequired};t.a=b;var v=s.a.div.withConfig({displayName:"layout__StyledContainer",componentId:"ii2kc2-0"})(["margin:0 auto;margin-left:auto;margin-right:auto;width:100%;max-width:1728px;padding:1.45rem 1.0875rem;"]),_=s.a.div.withConfig({displayName:"layout__StyledFooterDiv",componentId:"ii2kc2-1"})(["padding-left:20px;padding-right:20px;"])}}]);
//# sourceMappingURL=component---src-pages-404-js-f8e78842f959d569cd14.js.map