/*! For license information please see c372a0d7.a0125176.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[434681],{747513:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var n=r(824246),o=r(511151);const s={id:"plugin-permission-common.evaluatepermissionrequestbatch",title:"EvaluatePermissionRequestBatch",description:"API reference for EvaluatePermissionRequestBatch"},u=void 0,i={id:"reference/plugin-permission-common.evaluatepermissionrequestbatch",title:"EvaluatePermissionRequestBatch",description:"API reference for EvaluatePermissionRequestBatch",source:"@site/../docs/reference/plugin-permission-common.evaluatepermissionrequestbatch.md",sourceDirName:"reference",slug:"/reference/plugin-permission-common.evaluatepermissionrequestbatch",permalink:"/docs/reference/plugin-permission-common.evaluatepermissionrequestbatch",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-common.evaluatepermissionrequestbatch.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-common.evaluatepermissionrequestbatch",title:"EvaluatePermissionRequestBatch",description:"API reference for EvaluatePermissionRequestBatch"}},c={},a=[];function l(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-permission-common",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-permission-common"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-permission-common.evaluatepermissionrequestbatch",children:(0,n.jsx)(t.code,{children:"EvaluatePermissionRequestBatch"})})]}),"\n",(0,n.jsx)(t.p,{children:"A batch of requests sent to the permission backend."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export type EvaluatePermissionRequestBatch = PermissionMessageBatch<EvaluatePermissionRequest>;\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"References:"})," ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-permission-common.permissionmessagebatch",children:"PermissionMessageBatch"}),", ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-permission-common.evaluatepermissionrequest",children:"EvaluatePermissionRequest"})]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,s={},a=null,l=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)u.call(t,n)&&!c.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:l,props:s,_owner:i.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,h={};function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||d}function b(){}function _(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||d}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var g=_.prototype=new b;g.constructor=_,y(g,v.prototype),g.isPureReactComponent=!0;var E=Array.isArray,j=Object.prototype.hasOwnProperty,S={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var o,s={},u=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)j.call(t,o)&&!R.hasOwnProperty(o)&&(s[o]=t[o]);var c=arguments.length-2;if(1===c)s.children=n;else if(1<c){for(var a=Array(c),l=0;l<c;l++)a[l]=arguments[l+2];s.children=a}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===s[o]&&(s[o]=c[o]);return{$$typeof:r,type:e,key:u,ref:i,props:s,_owner:S.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var P=/\/+/g;function w(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,o,s,u){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return u=u(c=e),e=""===s?"."+w(c,0):s,E(u)?(o="",null!=e&&(o=e.replace(P,"$&/")+"/"),C(u,t,o,"",(function(e){return e}))):null!=u&&(k(u)&&(u=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||c&&c.key===u.key?"":(""+u.key).replace(P,"$&/")+"/")+e)),t.push(u)),1;if(c=0,s=""===s?".":s+":",E(e))for(var a=0;a<e.length;a++){var l=s+w(i=e[a],a);c+=C(i,t,o,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(i=e.next()).done;)c+=C(i=i.value,t,o,l=s+w(i,a++),u);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function q(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},I={transition:null},B={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:I,ReactCurrentOwner:S};t.Children={map:q,forEach:function(e,t,r){q(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return q(e,(function(){t++})),t},toArray:function(e){return q(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=u,t.PureComponent=_,t.StrictMode=s,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),s=e.key,u=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,i=S.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(a in t)j.call(t,a)&&!R.hasOwnProperty(a)&&(o[a]=void 0===t[a]&&void 0!==c?c[a]:t[a])}var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){c=Array(a);for(var l=0;l<a;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:r,type:e.type,key:s,ref:u,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,r){return O.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,r){return O.current.useReducer(e,t,r)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return O.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return O.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>i,ah:()=>s});var n=r(667294);const o=n.createContext({});function s(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const u={};function i({components:e,children:t,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||u:s(e),n.createElement(o.Provider,{value:i},t)}}}]);