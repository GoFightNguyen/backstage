/*! For license information please see 81628058.3e60dda2.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[92817],{51242:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var n=t(824246),o=t(511151);const c={id:"plugin-techdocs.techdocsreaderpageheaderprops",title:"TechDocsReaderPageHeaderProps",description:"API reference for TechDocsReaderPageHeaderProps"},a=void 0,s={id:"reference/plugin-techdocs.techdocsreaderpageheaderprops",title:"TechDocsReaderPageHeaderProps",description:"API reference for TechDocsReaderPageHeaderProps",source:"@site/../docs/reference/plugin-techdocs.techdocsreaderpageheaderprops.md",sourceDirName:"reference",slug:"/reference/plugin-techdocs.techdocsreaderpageheaderprops",permalink:"/docs/reference/plugin-techdocs.techdocsreaderpageheaderprops",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-techdocs.techdocsreaderpageheaderprops.md",tags:[],version:"current",frontMatter:{id:"plugin-techdocs.techdocsreaderpageheaderprops",title:"TechDocsReaderPageHeaderProps",description:"API reference for TechDocsReaderPageHeaderProps"}},u={},i=[];function f(e){const r=Object.assign({p:"p",a:"a",code:"code",blockquote:"blockquote",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-techdocs",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-techdocs"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-techdocs.techdocsreaderpageheaderprops",children:(0,n.jsx)(r.code,{children:"TechDocsReaderPageHeaderProps"})})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Warning: This API is now obsolete."}),"\n",(0,n.jsxs)(r.p,{children:["No need to pass down properties anymore. The component consumes data from ",(0,n.jsx)(r.code,{children:"TechDocsReaderPageContext"})," instead. Use the ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-techdocs-react.usetechdocsreaderpage",children:"useTechDocsReaderPage"})," hook for custom header."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Props for ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-techdocs.techdocsreaderpageheader",children:"TechDocsReaderPageHeader"})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type TechDocsReaderPageHeaderProps = PropsWithChildren<{\n    entityRef?: CompoundEntityRef;\n    entityMetadata?: TechDocsEntityMetadata;\n    techDocsMetadata?: TechDocsMetadata;\n}>;\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/reference/catalog-model.compoundentityref",children:"CompoundEntityRef"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-techdocs-react.techdocsentitymetadata",children:"TechDocsEntityMetadata"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-techdocs-react.techdocsmetadata",children:"TechDocsMetadata"})]})]})}const l=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var n,c={},i=null,f=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(f=r.ref),r)a.call(r,n)&&!u.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:i,ref:f,props:c,_owner:s.current}}r.Fragment=c,r.jsx=i,r.jsxs=i},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function g(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||h}function _(){}function b(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=g.prototype;var v=b.prototype=new _;v.constructor=b,y(v,g.prototype),v.isPureReactComponent=!0;var j=Array.isArray,x=Object.prototype.hasOwnProperty,P={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function k(e,r,n){var o,c={},a=null,s=null;if(null!=r)for(o in void 0!==r.ref&&(s=r.ref),void 0!==r.key&&(a=""+r.key),r)x.call(r,o)&&!R.hasOwnProperty(o)&&(c[o]=r[o]);var u=arguments.length-2;if(1===u)c.children=n;else if(1<u){for(var i=Array(u),f=0;f<u;f++)i[f]=arguments[f+2];c.children=i}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===c[o]&&(c[o]=u[o]);return{$$typeof:t,type:e,key:a,ref:s,props:c,_owner:P.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var E=/\/+/g;function w(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,o,c,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var u=!1;if(null===e)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case t:case n:u=!0}}if(u)return a=a(u=e),e=""===c?"."+w(u,0):c,j(a)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),C(a,r,o,"",(function(e){return e}))):null!=a&&(S(a)&&(a=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(E,"$&/")+"/")+e)),r.push(a)),1;if(u=0,c=""===c?".":c+":",j(e))for(var i=0;i<e.length;i++){var f=c+w(s=e[i],i);u+=C(s,r,o,f,a)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),i=0;!(s=e.next()).done;)u+=C(s=s.value,r,o,f=c+w(s,i++),a);else if("object"===s)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return u}function T(e,r,t){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function D(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},O={transition:null},I={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:O,ReactCurrentOwner:P};r.Children={map:T,forEach:function(e,r,t){T(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return T(e,(function(){r++})),r},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=g,r.Fragment=o,r.Profiler=a,r.PureComponent=b,r.StrictMode=c,r.Suspense=f,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),c=e.key,a=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,s=P.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(i in r)x.call(r,i)&&!R.hasOwnProperty(i)&&(o[i]=void 0===r[i]&&void 0!==u?u[i]:r[i])}var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){u=Array(i);for(var f=0;f<i;f++)u[f]=arguments[f+2];o.children=u}return{$$typeof:t,type:e.type,key:c,ref:a,props:o,_owner:s}},r.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=k,r.createFactory=function(e){var r=k.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:i,render:e}},r.isValidElement=S,r.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:D}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=O.transition;O.transition={};try{e()}finally{O.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return $.current.useCallback(e,r)},r.useContext=function(e){return $.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return $.current.useDeferredValue(e)},r.useEffect=function(e,r){return $.current.useEffect(e,r)},r.useId=function(){return $.current.useId()},r.useImperativeHandle=function(e,r,t){return $.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return $.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return $.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return $.current.useMemo(e,r)},r.useReducer=function(e,r,t){return $.current.useReducer(e,r,t)},r.useRef=function(e){return $.current.useRef(e)},r.useState=function(e){return $.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return $.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return $.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>s,ah:()=>c});var n=t(667294);const o=n.createContext({});function c(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const a={};function s({components:e,children:r,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||a:c(e),n.createElement(o.Provider,{value:s},r)}}}]);