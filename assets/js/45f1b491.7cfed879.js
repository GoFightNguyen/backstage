/*! For license information please see 45f1b491.7cfed879.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[308265],{65973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(824246),o=n(511151);const a={id:"provider",title:"Cloudflare Access Provider",sidebar_label:"Cloudflare Access",description:"Adding Cloudflare Access as an authentication provider in Backstage"},i=void 0,s={id:"auth/cloudflare/provider",title:"Cloudflare Access Provider",description:"Adding Cloudflare Access as an authentication provider in Backstage",source:"@site/../docs/auth/cloudflare/access.md",sourceDirName:"auth/cloudflare",slug:"/auth/cloudflare/provider",permalink:"/docs/auth/cloudflare/provider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/cloudflare/access.md",tags:[],version:"current",frontMatter:{id:"provider",title:"Cloudflare Access Provider",sidebar_label:"Cloudflare Access",description:"Adding Cloudflare Access as an authentication provider in Backstage"},sidebar:"docs",previous:{title:"Bitbucket Server",permalink:"/docs/auth/bitbucketServer/provider"},next:{title:"GitHub",permalink:"/docs/auth/github/provider"}},c={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Backend Changes",id:"backend-changes",level:2},{value:"Adding the provider to the Backstage frontend",id:"adding-the-provider-to-the-backstage-frontend",level:2}];function l(e){const t=Object.assign({p:"p",h2:"h2",code:"code",pre:"pre",a:"a"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Similar to GCP IAP Proxy Provider or AWS ALB provider, developers can offload authentication\nsupport to Cloudflare Access."}),"\n",(0,r.jsx)(t.p,{children:"This tutorial shows how to use authentication on Cloudflare Access sitting in\nfront of Backstage."}),"\n",(0,r.jsx)(t.p,{children:"It is assumed a Cloudflare tunnel is already serving traffic in front of a\nBackstage instance configured to serve the frontend app from the backend and is\nalready gated using Cloudflare Access."}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(t.p,{children:["Let's start by adding the following ",(0,r.jsx)(t.code,{children:"auth"})," configuration in your\n",(0,r.jsx)(t.code,{children:"app-config.yaml"})," or ",(0,r.jsx)(t.code,{children:"app-config.production.yaml"})," or similar:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"auth:\n  providers:\n    cfaccess:\n      teamName: <Team Name>\n"})}),"\n",(0,r.jsx)(t.p,{children:"You can find the team name in the Cloudflare Zero Trust dashboard."}),"\n",(0,r.jsx)(t.p,{children:"This config section must be in place for the provider to load at all. Now let's\nadd the provider itself."}),"\n",(0,r.jsx)(t.h2,{id:"backend-changes",children:"Backend Changes"}),"\n",(0,r.jsxs)(t.p,{children:["Add a ",(0,r.jsx)(t.code,{children:"providerFactories"})," entry to the router in\n",(0,r.jsx)(t.code,{children:"packages/backend/plugin/auth.ts"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/plugin/auth.ts"',children:"import { providers } from '@backstage/plugin-auth-backend';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  return await createRouter({\n    logger: env.logger,\n    config: env.config,\n    database: env.database,\n    discovery: env.discovery,\n    providerFactories: {\n      'cfaccess': providers.cfAccess.create({\n        // Replace the auth handler if you want to customize the returned user\n        // profile info (can be left out; the default implementation is shown\n        // below which only returns the email). You may want to amend this code\n        // with something that loads additional user profile data out.\n        async authHandler({ accessToken }) {\n          return { profile: { email: accessToken.email } };\n        },\n        signIn: {\n          // You need to supply an identity resolver, that takes the profile\n          // and the access token and produces the Backstage token with the\n          // relevant user info.\n          async resolver({ profile, result }, ctx) {\n            // Somehow compute the Backstage token claims. Just some sample code\n            // shown here, but you may want to query your LDAP server, or\n            // https://<teamName>.cloudflareaccess.com/cdn-cgi/access/get-identity\n            // https://developers.cloudflare.com/cloudflare-one/identity/users/validating-json/#groups-within-a-jwt\n            const id = profile.email.split('@')[0];\n            const sub = stringifyEntityRef({ kind: 'User', name: id });\n            const ent = [sub, stringifyEntityRef({ kind: 'Group', name: 'team-name' });\n            return ctx.issueToken({ claims: { sub, ent } });\n          },\n        },\n      }),\n    },\n  });\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Now the backend is ready to serve auth requests on the\n",(0,r.jsx)(t.code,{children:"/api/auth/cfaccess/refresh"})," endpoint. All that's left is to update the\nfrontend sign-in mechanism to poll that endpoint through Cloudflare Access, on\nthe user's behalf."]}),"\n",(0,r.jsx)(t.h2,{id:"adding-the-provider-to-the-backstage-frontend",children:"Adding the provider to the Backstage frontend"}),"\n",(0,r.jsxs)(t.p,{children:["It is recommended to use the ",(0,r.jsx)(t.code,{children:"ProxiedSignInPage"})," for this provider, which is\ninstalled in ",(0,r.jsx)(t.code,{children:"packages/app/src/App.tsx"})," like this:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:"/* highlight-add-next-line */\nimport { ProxiedSignInPage } from '@backstage/core-components';\n\nconst app = createApp({\n  /* highlight-add-start */\n  components: {\n    SignInPage: props => <ProxiedSignInPage {...props} provider=\"cfaccess\" />,\n  },\n  /* highlight-add-end */\n  // ..\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["See ",(0,r.jsx)(t.a,{href:"/docs/auth/#sign-in-with-proxy-providers",children:"Sign-In with Proxy Providers"})," for pointers on how to set up the sign-in page to also work smoothly for local development."]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,a={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:l,props:a,_owner:s.current}}t.Fragment=a,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function v(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var k=b.prototype=new v;k.constructor=b,y(k,g.prototype),k.isPureReactComponent=!0;var _=Array.isArray,x=Object.prototype.hasOwnProperty,j={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var o,a={},i=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,o)&&!w.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:n,type:e,key:i,ref:s,props:a,_owner:j.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,o,a,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return i=i(c=e),e=""===a?"."+A(c,0):a,_(i)?(o="",null!=e&&(o=e.replace(P,"$&/")+"/"),E(i,t,o,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(c=0,a=""===a?".":a+":",_(e))for(var u=0;u<e.length;u++){var l=a+A(s=e[u],u);c+=E(s,t,o,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(s=e.next()).done;)c+=E(s=s.value,t,o,l=a+A(s,u++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function R(e,t,n){if(null==e)return e;var r=[],o=0;return E(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},I={transition:null},T={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:I,ReactCurrentOwner:j};t.Children={map:R,forEach:function(e,t,n){R(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=o,t.Profiler=i,t.PureComponent=b,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),a=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=j.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)x.call(t,u)&&!w.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){c=Array(u);for(var l=0;l<u;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:n,type:e.type,key:a,ref:i,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>a});var r=n(667294);const o=r.createContext({});function a(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||i:a(e),r.createElement(o.Provider,{value:s},t)}}}]);