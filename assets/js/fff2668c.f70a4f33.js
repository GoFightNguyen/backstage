/*! For license information please see fff2668c.f70a4f33.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[664770],{332143:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(824246),a=r(511151);const o={id:"v1.4.0",title:"v1.4.0",description:"Backstage Release v1.4.0"},s=void 0,i={id:"releases/v1.4.0",title:"v1.4.0",description:"Backstage Release v1.4.0",source:"@site/../docs/releases/v1.4.0.md",sourceDirName:"releases",slug:"/releases/v1.4.0",permalink:"/docs/releases/v1.4.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.4.0.md",tags:[],version:"current",frontMatter:{id:"v1.4.0",title:"v1.4.0",description:"Backstage Release v1.4.0"},sidebar:"releases",previous:{title:"v1.5.0",permalink:"/docs/releases/v1.5.0"},next:{title:"v1.3.0",permalink:"/docs/releases/v1.3.0"}},c={},l=[{value:"Highlights",id:"highlights",level:2},{value:"Search is V1!",id:"search-is-v1",level:3},{value:"Experimental Backend System Evolution",id:"experimental-backend-system-evolution",level:3},{value:"<code>@backstage/cli</code> Deprecation Removals",id:"backstagecli-deprecation-removals",level:3},{value:"<code>@backstage/plugin-auth-backend</code> Deprecation Removals",id:"backstageplugin-auth-backend-deprecation-removals",level:3},{value:"New module: <code>@backstage/plugin-api-docs-module-protoc-gen-doc</code>",id:"new-module-backstageplugin-api-docs-module-protoc-gen-doc",level:3},{value:"New module: <code>@backstage/plugin-catalog-backend-module-openapi</code>",id:"new-module-backstageplugin-catalog-backend-module-openapi",level:3},{value:"New plugin: <code>@backstage/plugin-apollo-explorer</code>",id:"new-plugin-backstageplugin-apollo-explorer",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function u(e){const t=Object.assign({p:"p",a:"a",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["These are the release notes for the v1.4.0 release of ",(0,n.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."}),"\n",(0,n.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,n.jsx)(t.h3,{id:"search-is-v1",children:"Search is V1!"}),"\n",(0,n.jsx)(t.p,{children:"Backstage Search is now promoted to v1.0 with a stable Search API for plugin developers to add search to their plugins, and app integrators to expose that to their users."}),"\n",(0,n.jsx)(t.p,{children:"No additional features are released as part of the major release as the maintainers of the search packages focused on the following for this release:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Bug fixes and clean up of deprecations."}),"\n",(0,n.jsx)(t.li,{children:"Improved error handling for missing indices."}),"\n",(0,n.jsx)(t.li,{children:"Separation of AWS Elastic and Open Elastic support."}),"\n",(0,n.jsxs)(t.li,{children:["Refactor the packages by moving reusable components from ",(0,n.jsx)(t.code,{children:"@backstage/plugin-search"})," to ",(0,n.jsx)(t.code,{children:"@backstage/plugin-search-react"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Improved documentation including tutorials for how to ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/plugins/integrating-search-into-plugins",children:"Integrate Search into a plugin"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"With moving to v1.0 we also recommend using Elasticsearch for production usage. Moving forward, the search maintainers will prioritize the Elasticsearch engine while we\u2019ll rely on the community to maintain the Postgres engine."}),"\n",(0,n.jsx)(t.h3,{id:"experimental-backend-system-evolution",children:"Experimental Backend System Evolution"}),"\n",(0,n.jsxs)(t.p,{children:["This release adds the new ",(0,n.jsx)(t.code,{children:"@backstage/backend-app-api"})," and ",(0,n.jsx)(t.code,{children:"@backstage/backend-plugin-api"})," packages, both part of the ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/11611",children:"evolution of the backend system"}),". These packages are highly experimental and we do not recommend using them for any purpose, yet."]}),"\n",(0,n.jsxs)(t.h3,{id:"backstagecli-deprecation-removals",children:[(0,n.jsx)(t.code,{children:"@backstage/cli"})," Deprecation Removals"]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"@backstage/cli"})," had a large number of deprecated commands removed, for example, ",(0,n.jsx)(t.code,{children:"app:build"})," is now gone and should be replaced with ",(0,n.jsx)(t.code,{children:"package build"}),". For a full list of commands that were removed, see the ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/packages/cli/CHANGELOG.md#0180",children:"changelog"}),"."]}),"\n",(0,n.jsxs)(t.h3,{id:"backstageplugin-auth-backend-deprecation-removals",children:[(0,n.jsx)(t.code,{children:"@backstage/plugin-auth-backend"})," Deprecation Removals"]}),"\n",(0,n.jsxs)(t.p,{children:["Many deprecated symbols have now been removed from ",(0,n.jsx)(t.code,{children:"@backstage/plugin-auth-backend"}),", most notably the provider factories such as ",(0,n.jsx)(t.code,{children:"createGithubProvider"})," have been removed, which should be replaced with ",(0,n.jsx)(t.code,{children:"providers.github.create"}),". See the ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/auth-backend/CHANGELOG.md#0150",children:"changelog"})," for more details."]}),"\n",(0,n.jsxs)(t.h3,{id:"new-module-backstageplugin-api-docs-module-protoc-gen-doc",children:["New module: ",(0,n.jsx)(t.code,{children:"@backstage/plugin-api-docs-module-protoc-gen-doc"})]}),"\n",(0,n.jsxs)(t.p,{children:["This is a new module for ",(0,n.jsx)(t.code,{children:"@backstage/plugin-api-docs"})," that exports a widget implementation for rendering gRPC docs generated by ",(0,n.jsx)(t.code,{children:"protoc-gen-doc"}),". Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/kissmikijr",children:"@kissmikijr"})," ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/11923",children:"#11923"}),"."]}),"\n",(0,n.jsxs)(t.h3,{id:"new-module-backstageplugin-catalog-backend-module-openapi",children:["New module: ",(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-openapi"})]}),"\n",(0,n.jsxs)(t.p,{children:["This is a new module for ",(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog-backend"})," that exports a catalog processor which de-references ",(0,n.jsx)(t.code,{children:"$ref"})," fields in OpenAPI definitions. Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/mfrinnstrom",children:"@mfrinnstrom"})," ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/11645",children:"#11645"}),"."]}),"\n",(0,n.jsxs)(t.h3,{id:"new-plugin-backstageplugin-apollo-explorer",children:["New plugin: ",(0,n.jsx)(t.code,{children:"@backstage/plugin-apollo-explorer"})]}),"\n",(0,n.jsxs)(t.p,{children:["A plugin to embed the ",(0,n.jsx)(t.a,{href:"https://github.com/apollographql/embeddable-explorer/tree/main/packages/explorer",children:"Apollo Explorer"})," inside your Backstage instance to run queries against GraphQL endpoints. Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/unredundant",children:"@unredundant"})," ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/12600",children:"#12600"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend"}),", please upgrade to the latest version if you are using this module."]}),"\n",(0,n.jsx)(t.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,n.jsxs)(t.p,{children:["We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,n.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,n.jsxs)(t.li,{children:["Backstage's ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.4.0-changelog.md",children:"Changelog"})}),"\n",(0,n.jsxs)(t.li,{children:["Backstage ",(0,n.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and ",(0,n.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Sign up for our ",(0,n.jsx)(t.a,{href:"https://mailchi.mp/spotify/backstage-community",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(u,e)})):u(e)}},371426:(e,t,r)=>{var n=r(827378),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,o={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:a,type:e,key:l,ref:u,props:o,_owner:i.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function b(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||f}function k(){}function y(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||f}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=b.prototype;var v=y.prototype=new k;v.constructor=y,g(v,b.prototype),v.isPureReactComponent=!0;var x=Array.isArray,j=Object.prototype.hasOwnProperty,w={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var a,o={},s=null,i=null;if(null!=t)for(a in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)j.call(t,a)&&!_.hasOwnProperty(a)&&(o[a]=t[a]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(a in c=e.defaultProps)void 0===o[a]&&(o[a]=c[a]);return{$$typeof:r,type:e,key:s,ref:i,props:o,_owner:w.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var R=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,a,o,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return s=s(c=e),e=""===o?"."+C(c,0):o,x(s)?(a="",null!=e&&(a=e.replace(R,"$&/")+"/"),O(s,t,a,"",(function(e){return e}))):null!=s&&(E(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,a+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(R,"$&/")+"/")+e)),t.push(s)),1;if(c=0,o=""===o?".":o+":",x(e))for(var l=0;l<e.length;l++){var u=o+C(i=e[l],l);c+=O(i,t,a,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)c+=O(i=i.value,t,a,u=o+C(i,l++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function $(e,t,r){if(null==e)return e;var n=[],a=0;return O(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var B={current:null},I={transition:null},N={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:I,ReactCurrentOwner:w};t.Children={map:$,forEach:function(e,t,r){$(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=a,t.Profiler=s,t.PureComponent=y,t.StrictMode=o,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=g({},e.props),o=e.key,s=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,i=w.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)j.call(t,l)&&!_.hasOwnProperty(l)&&(a[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}return{$$typeof:r,type:e.type,key:o,ref:s,props:a,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return B.current.useCallback(e,t)},t.useContext=function(e){return B.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return B.current.useDeferredValue(e)},t.useEffect=function(e,t){return B.current.useEffect(e,t)},t.useId=function(){return B.current.useId()},t.useImperativeHandle=function(e,t,r){return B.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return B.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return B.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return B.current.useMemo(e,t)},t.useReducer=function(e,t,r){return B.current.useReducer(e,t,r)},t.useRef=function(e){return B.current.useRef(e)},t.useState=function(e){return B.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return B.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return B.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>i,ah:()=>o});var n=r(667294);const a=n.createContext({});function o(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function i({components:e,children:t,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||s:o(e),n.createElement(a.Provider,{value:i},t)}}}]);