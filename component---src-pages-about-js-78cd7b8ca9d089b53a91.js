(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=(a(147),a(159)),s=a(154),o=a(228),l=(a(203),a(204),a(148)),c=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,{className:"aboutTitle"},"About"),i.a.createElement(h,{className:"aboutContent"},"I’ve always sought out opportunities and challenges that are meaningful to me. Although my professional path has taken many twists and turns. I've never stopped engaging my passion to help others and solve problems. As a web developer, I enjoy using my obsessive attention to detail, and my unequivocal love for making things. That's why I’m excited to make a big impact at a high growth company."))},d=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,{className:"aboutTitle"},"Skillsets"),i.a.createElement(o.a,{container:!0,spacing:3},i.a.createElement(o.a,{item:!0,xs:6,sm:6},i.a.createElement(p,null,i.a.createElement(g,null,"HTML & CSS"),i.a.createElement(g,null,"JavaScripts ES6"),i.a.createElement(g,null,"NodeJs"),i.a.createElement(g,null,"ReactJs"),i.a.createElement(g,null,"Redux"))),i.a.createElement(o.a,{item:!0,xs:6,sm:6},i.a.createElement(p,null,i.a.createElement(g,null,"Apollo QL"),i.a.createElement(g,null,"Graph QL"),i.a.createElement(g,null,"Ruby On Rails"),i.a.createElement(g,null,"MongoDB"),i.a.createElement(g,null,"PostgreSQL")))))},u=(t.default=function(e){return i.a.createElement(r.a,null,i.a.createElement(s.a,{title:"About Me"}),i.a.createElement(o.a,{container:!0,spacing:3},i.a.createElement(o.a,{item:!0},i.a.createElement(u,{src:a(205)})),i.a.createElement(f,{item:!0,xs:12,sm:6},i.a.createElement(d,null)),i.a.createElement(m,{item:!0,xs:12,sm:6},i.a.createElement(c,null))))},l.a.img.withConfig({displayName:"about__StyledImage",componentId:"sc-190nmfb-0"})(["display:block;margin-bottom:40px;width:100%;height:auto;}"])),f=Object(l.a)(o.a).withConfig({displayName:"about__StyledGridSkillSets",componentId:"sc-190nmfb-1"})(["order:2;@media (min-width:600px){order:1;}"]),m=Object(l.a)(o.a).withConfig({displayName:"about__StyledGridAbout",componentId:"sc-190nmfb-2"})(["order:1;float:right;@media (min-width:600px){order:2;}"]),p=l.a.ul.withConfig({displayName:"about__StyledSkillSetsUl",componentId:"sc-190nmfb-3"})(["margin:0;"]),g=l.a.li.withConfig({displayName:"about__StyledSkillSetsLi",componentId:"sc-190nmfb-4"})(['line-height:1.5em;letter-spacing:0.02em;text-decoration:none;text-rendering:optimizeLegibility;font-size:1em;font-weight:400;font-style:normal;font-family:"Open Sans",sans-serif;list-style:none;margin-bottom:12px;']),h=l.a.h6.withConfig({displayName:"about__StyledAboutText",componentId:"sc-190nmfb-5"})(['line-height:1.8em;letter-spacing:0.02em;text-decoration:none;text-rendering:optimizeLegibility;font-weight:400;font-style:normal;font-family:"Open Sans",sans-serif;&.aboutTitle{margin-bottom:16px;text-transform:uppercase;line-height:1.6em;letter-spacing:0.2em;}&.aboutContent{font-size:1em;}'])},147:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),i=a.n(n),r=a(4),s=a.n(r),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(149);var c=i.a.createContext({}),d=function(e){return i.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},149:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},154:function(e,t,a){"use strict";var n=a(158),i=a(0),r=a.n(i),s=a(4),o=a.n(s),l=a(166),c=a.n(l);function d(e){var t=e.description,a=e.lang,i=e.meta,s=e.keywords,o=e.title,l=n.data.site,d=t||l.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Victor Tsay"}}}}},157:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),r=a(4),s=a.n(r),o=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Victor Tsay",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"Victor Tsay"}}}}},159:function(e,t,a){"use strict";var n=a(156),i=a(0),r=a.n(i),s=a(4),o=a.n(s),l=a(147),c=a(228),d=a(148),u=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{item:!0,md:3},r.a.createElement(y,{to:"/",activeStyle:{color:"black"}},"Projects")),r.a.createElement(c.a,{item:!0,md:3},r.a.createElement(y,{to:"/about",activeStyle:{color:"black"}},"About")),r.a.createElement(c.a,{item:!0,md:3},r.a.createElement(b,{href:"https://github.com/vt0826"},"GitHub")),r.a.createElement(c.a,{item:!0,md:3},r.a.createElement(b,{href:"mailto:vt0826@gmail.com"},"Contact")))},f=function(e){var t=e.siteTitle;return r.a.createElement("header",null,r.a.createElement(p,{container:!0},r.a.createElement(c.a,{item:!0,xs:12,sm:6,md:8,lg:9},r.a.createElement(h,{to:"/"},t)),r.a.createElement(c.a,{item:!0,xs:12,sm:6,md:4,lg:3},r.a.createElement(g,{container:!0,direction:"row",justify:"flex-start",alignItems:"center"},r.a.createElement(u,null)))))};f.propTypes={siteTitle:o.a.string},f.defaultProps={siteTitle:""};var m=f,p=Object(d.a)(c.a).withConfig({displayName:"header__StyledGridContainer",componentId:"sc-31ozxh-0"})(["margin-top:40px;margin-bottom:40px;display:flex;justify-content:space-between;"]),g=Object(d.a)(c.a).withConfig({displayName:"header__StyledGridHeaderLink",componentId:"sc-31ozxh-1"})(["width:100%;direction:row;display:flex;justify-content:space-between;"]),h=Object(d.a)(l.a).withConfig({displayName:"header__StyledNavLinkName",componentId:"sc-31ozxh-2"})(['color:black;display:inline;align:left;font-size:0.7em;line-height:1.6em;text-transform:uppercase;letter-spacing:0.02em;text-decoration:none;font-weight:400;font-style:normal;font-family:"Open Sans",sans-serif;@media (min-width:600px){font-size:1em;}']),y=Object(d.a)(l.a).withConfig({displayName:"header__StyledNavLink",componentId:"sc-31ozxh-3"})(['margin-top:12px;font-size:0.7em;display:block;margin-top:12px;text-align:right;text-transform:none;text-decoration:none;letter-spacing:0.02em;font-weight:400;font-style:normal;line-height:1em;font-family:"Open Sans",sans-serif;color:#aaa;@media (min-width:600px){font-size:1em;margin-top:0;}']),b=d.a.a.withConfig({displayName:"header__StyledEmailLink",componentId:"sc-31ozxh-4"})(['margin-top:12px;font-size:0.7em;display:block;text-align:right;text-transform:none;text-decoration:none;letter-spacing:0.02em;font-weight:400;font-style:normal;line-height:1em;font-family:"Open Sans",sans-serif;color:#aaa;@media (min-width:600px){font-size:1em;margin-top:0;}']),w=(a(165),a(229)),S=function(e){var t=e.children;return r.a.createElement(l.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{maxWidth:"lg"},r.a.createElement(m,{siteTitle:e.site.siteMetadata.title})),r.a.createElement("main",null,r.a.createElement(w.a,{maxWidth:"lg"}," ",t)),r.a.createElement("footer",null,r.a.createElement(w.a,{maxWidth:"lg"},r.a.createElement(E,null,"© ",(new Date).getFullYear(),", Develop By Victor Tsay"))))},data:n})};S.propTypes={children:o.a.node.isRequired};t.a=S;var E=d.a.h6.withConfig({displayName:"layout__StyledFooterText",componentId:"ii2kc2-0"})(['font-size:0.8em;text-align:left;line-height:1.6em;text-transform:capitalize;letter-spacing:0.02em;text-decoration:none;font-weight:400;font-style:normal;font-family:"Open Sans",sans-serif;color:black;'])},203:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fbe2f/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e1fed/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/08283/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fbe2f/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59257/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/26d9e/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/a3fa0/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},204:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var i,r=n(a(7)),s=n(a(37)),o=n(a(76)),l=n(a(74)),c=n(a(0)),d=n(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),m=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},p=new WeakMap;var g=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(p.has(e.target)){var t=p.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),p.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),p.set(e,t)),function(){a.unobserve(e),p.delete(e)}},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+n+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+i+t+s+r+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef(function(e,t){var a=e.sizes,n=e.srcSet,i=e.src,r=e.style,s=e.onLoad,d=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:n,src:i},u,{onLoad:s,onError:d,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});y.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,i=!1,r=t.fadeIn,o=m(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,i=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,i=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,IOSupported:i,fadeIn:r,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:t.imageRef.current.currentSrc.length>0})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,i=e.style,r=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,p=e.fluid,g=e.fixed,b=e.backgroundColor,w=e.Tag,S=e.itemProp,E=this.state.imgLoaded||!1===this.state.fadeIn,v=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,l.default)({opacity:E?1:0,transition:v?"opacity 0.5s":"none"},o),I="boolean"==typeof b?"lightgray":b,z={transitionDelay:"0.5s"},L=(0,l.default)({opacity:this.state.imgLoaded?0:1},v&&z,o,f),R={title:t,alt:this.state.isVisible?"":a,style:L,className:m};if(p){var N=p;return c.default.createElement(w,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},c.default.createElement(w,{style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),I&&c.default.createElement(w,{title:t,style:(0,l.default)({backgroundColor:I,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},v&&z)}),N.base64&&c.default.createElement(y,(0,l.default)({src:N.base64},R)),N.tracedSVG&&c.default.createElement(y,(0,l.default)({src:N.tracedSVG},R)),this.state.isVisible&&c.default.createElement("picture",null,N.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),c.default.createElement(y,{alt:a,title:t,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t},N))}}))}if(g){var O=g,A=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:O.width,height:O.height},r);return"inherit"===r.display&&delete A.display,c.default.createElement(w,{className:(n||"")+" gatsby-image-wrapper",style:A,ref:this.handleRef,key:"fixed-"+JSON.stringify(O.srcSet)},I&&c.default.createElement(w,{title:t,style:(0,l.default)({backgroundColor:I,width:O.width,opacity:this.state.imgLoaded?0:1,height:O.height},v&&z)}),O.base64&&c.default.createElement(y,(0,l.default)({src:O.base64},R)),O.tracedSVG&&c.default.createElement(y,(0,l.default)({src:O.tracedSVG},R)),this.state.isVisible&&c.default.createElement("picture",null,O.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),c.default.createElement(y,{alt:a,title:t,width:O.width,height:O.height,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t},O))}}))}return null},t}(c.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),S=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});b.propTypes={resolutions:w,sizes:S,fixed:w,fluid:S,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var E=b;t.default=E},205:function(e,t,a){e.exports=a.p+"static/aboutme-51270a72e779d21770886724d75aae72.jpg"}}]);
//# sourceMappingURL=component---src-pages-about-js-78cd7b8ca9d089b53a91.js.map