/*! For license information please see ad9011b0.e249a545.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[614046],{727461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>u,metadata:()=>s,toc:()=>a});var r=n(824246),o=n(511151);const u={id:"plugin-kubernetes-node.kubernetesfetcherextensionpoint",title:"kubernetesFetcherExtensionPoint",description:"API reference for kubernetesFetcherExtensionPoint"},c=void 0,s={id:"reference/plugin-kubernetes-node.kubernetesfetcherextensionpoint",title:"kubernetesFetcherExtensionPoint",description:"API reference for kubernetesFetcherExtensionPoint",source:"@site/../docs/reference/plugin-kubernetes-node.kubernetesfetcherextensionpoint.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-node.kubernetesfetcherextensionpoint",permalink:"/docs/reference/plugin-kubernetes-node.kubernetesfetcherextensionpoint",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-kubernetes-node.kubernetesfetcherextensionpoint.md",tags:[],version:"current",frontMatter:{id:"plugin-kubernetes-node.kubernetesfetcherextensionpoint",title:"kubernetesFetcherExtensionPoint",description:"API reference for kubernetesFetcherExtensionPoint"}},i={},a=[];function f(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-node",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-kubernetes-node"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesfetcherextensionpoint",children:(0,r.jsx)(t.code,{children:"kubernetesFetcherExtensionPoint"})})]}),"\n",(0,r.jsx)(t.p,{children:"An extension point the exposes the ability to configure a kubernetes fetcher."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'kubernetesFetcherExtensionPoint: import("@backstage/backend-plugin-api").ExtensionPoint<KubernetesFetcherExtensionPoint>\n'})})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(f,e)})):f(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,u={},a=null,f=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(f=t.ref),t)c.call(t,r)&&!i.hasOwnProperty(r)&&(u[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===u[r]&&(u[r]=t[r]);return{$$typeof:o,type:e,key:a,ref:f,props:u,_owner:s.current}}t.Fragment=u,t.jsx=a,t.jsxs=a},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,b={};function _(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||y}function m(){}function k(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||y}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=_.prototype;var v=k.prototype=new m;v.constructor=k,h(v,_.prototype),v.isPureReactComponent=!0;var x=Array.isArray,g=Object.prototype.hasOwnProperty,E={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var o,u={},c=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(c=""+t.key),t)g.call(t,o)&&!S.hasOwnProperty(o)&&(u[o]=t[o]);var i=arguments.length-2;if(1===i)u.children=r;else if(1<i){for(var a=Array(i),f=0;f<i;f++)a[f]=arguments[f+2];u.children=a}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===u[o]&&(u[o]=i[o]);return{$$typeof:n,type:e,key:c,ref:s,props:u,_owner:E.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var w=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,o,u,c){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var i=!1;if(null===e)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case r:i=!0}}if(i)return c=c(i=e),e=""===u?"."+R(i,0):u,x(c)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),C(c,t,o,"",(function(e){return e}))):null!=c&&(P(c)&&(c=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(w,"$&/")+"/")+e)),t.push(c)),1;if(i=0,u=""===u?".":u+":",x(e))for(var a=0;a<e.length;a++){var f=u+R(s=e[a],a);i+=C(s,t,o,f,c)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),a=0;!(s=e.next()).done;)i+=C(s=s.value,t,o,f=u+R(s,a++),c);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function $(e,t,n){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var F={current:null},I={transition:null},A={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:I,ReactCurrentOwner:E};t.Children={map:$,forEach:function(e,t,n){$(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=_,t.Fragment=o,t.Profiler=c,t.PureComponent=k,t.StrictMode=u,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),u=e.key,c=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,s=E.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(a in t)g.call(t,a)&&!S.hasOwnProperty(a)&&(o[a]=void 0===t[a]&&void 0!==i?i[a]:t[a])}var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){i=Array(a);for(var f=0;f<a;f++)i[f]=arguments[f+2];o.children=i}return{$$typeof:n,type:e.type,key:u,ref:c,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return F.current.useCallback(e,t)},t.useContext=function(e){return F.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return F.current.useDeferredValue(e)},t.useEffect=function(e,t){return F.current.useEffect(e,t)},t.useId=function(){return F.current.useId()},t.useImperativeHandle=function(e,t,n){return F.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return F.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return F.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return F.current.useMemo(e,t)},t.useReducer=function(e,t,n){return F.current.useReducer(e,t,n)},t.useRef=function(e){return F.current.useRef(e)},t.useState=function(e){return F.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return F.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return F.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>u});var r=n(667294);const o=r.createContext({});function u(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||c:u(e),r.createElement(o.Provider,{value:s},t)}}}]);