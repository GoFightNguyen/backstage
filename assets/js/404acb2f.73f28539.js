/*! For license information please see 404acb2f.73f28539.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[780273],{281770:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=r(824246),s=r(511151);const o={id:"plugin-scaffolder-node",title:"@backstage/plugin-scaffolder-node",description:"API Reference for @backstage/plugin-scaffolder-node"},c=void 0,i={id:"reference/plugin-scaffolder-node",title:"@backstage/plugin-scaffolder-node",description:"API Reference for @backstage/plugin-scaffolder-node",source:"@site/../docs/reference/plugin-scaffolder-node.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-node",permalink:"/docs/reference/plugin-scaffolder-node",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-node.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-node",title:"@backstage/plugin-scaffolder-node",description:"API Reference for @backstage/plugin-scaffolder-node"}},l={},d=[{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function a(e){const n=Object.assign({p:"p",a:"a",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",div:"div"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-scaffolder-node"})})]}),"\n",(0,t.jsxs)(n.p,{children:["The scaffolder-node module for ",(0,t.jsx)(n.code,{children:"@backstage/plugin-scaffolder-backend"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Function"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.commitandpushrepo",children:"commitAndPushRepo(input)"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.deserializedirectorycontents",children:"deserializeDirectoryContents(targetPath, files)"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.p,{children:"Deserializes a list of serialized files into the target directory."}),(0,t.jsxs)(n.p,{children:["This method uses ",(0,t.jsx)(n.code,{children:"resolveSafeChildPath"})," to make sure that files are not written outside of the target directory."]})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.executeshellcommand",children:"executeShellCommand(options)"})}),(0,t.jsx)(n.td,{children:"Run a command in a sub-process, normally a shell command."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.fetchcontents",children:"fetchContents(options)"})}),(0,t.jsxs)(n.td,{children:["A helper function that reads the contents of a directory from the given URL. Can be used in your own actions, and also used behind fetch",(0,t.jsx)(n.div,{})," and fetch",(0,t.jsx)(n.div,{})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.fetchfile",children:"fetchFile(options)"})}),(0,t.jsxs)(n.td,{children:["A helper function that reads the content of a single file from the given URL. Can be used in your own actions, and also used behind ",(0,t.jsxs)(n.code,{children:["fetch:plain",(0,t.jsx)(n.div,{})]})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.initrepoandpush",children:"initRepoAndPush(input)"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.serializedirectorycontents",children:"serializeDirectoryContents(sourcePath, options)"})}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Interface"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.serializedfile",children:"SerializedFile"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.taskbroker",children:"TaskBroker"})}),(0,t.jsx)(n.td,{children:"TaskBroker"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.taskcontext",children:"TaskContext"})}),(0,t.jsx)(n.td,{children:"Task"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Variable"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.createtemplateaction",children:"createTemplateAction"})}),(0,t.jsx)(n.td,{children:"This function is used to create new template actions to get type safety. Will convert zod schemas to json schemas for use throughout the system."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.getreposourcedirectory",children:"getRepoSourceDirectory"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.parserepourl",children:"parseRepoUrl"})}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type Alias"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.actioncontext",children:"ActionContext"})}),(0,t.jsx)(n.td,{children:"ActionContext is passed into scaffolder actions."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.executeshellcommandoptions",children:"ExecuteShellCommandOptions"})}),(0,t.jsxs)(n.td,{children:["Options for ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.executeshellcommand",children:"executeShellCommand()"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.serializedtask",children:"SerializedTask"})}),(0,t.jsx)(n.td,{children:"SerializedTask"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.serializedtaskevent",children:"SerializedTaskEvent"})}),(0,t.jsx)(n.td,{children:"SerializedTaskEvent"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.taskbrokerdispatchoptions",children:"TaskBrokerDispatchOptions"})}),(0,t.jsxs)(n.td,{children:["The options passed to ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.taskbroker.dispatch",children:"TaskBroker.dispatch()"})," Currently a spec and optional secrets"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.taskbrokerdispatchresult",children:"TaskBrokerDispatchResult"})}),(0,t.jsxs)(n.td,{children:["The result of ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.taskbroker.dispatch",children:"TaskBroker.dispatch()"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.taskcompletionstate",children:"TaskCompletionState"})}),(0,t.jsx)(n.td,{children:"The state of a completed task."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.taskeventtype",children:"TaskEventType"})}),(0,t.jsx)(n.td,{children:"TaskEventType"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.tasksecrets",children:"TaskSecrets"})}),(0,t.jsx)(n.td,{children:"TaskSecrets"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.taskstatus",children:"TaskStatus"})}),(0,t.jsx)(n.td,{children:"The status of each step of the Task"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.templateactionoptions",children:"TemplateActionOptions"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.templateexample",children:"TemplateExample"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.templatefilter",children:"TemplateFilter"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.templateglobal",children:"TemplateGlobal"})}),(0,t.jsx)(n.td,{})]})]})]})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},371426:(e,n,r)=>{var t=r(827378),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var t,o={},d=null,a=null;for(t in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)c.call(n,t)&&!l.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:s,type:e,key:d,ref:a,props:o,_owner:i.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},541535:(e,n)=>{var r=Symbol.for("react.element"),t=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),l=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),a=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,j={};function y(e,n,r){this.props=e,this.context=n,this.refs=j,this.updater=r||p}function m(){}function g(e,n,r){this.props=e,this.context=n,this.refs=j,this.updater=r||p}y.prototype.isReactComponent={},y.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var b=g.prototype=new m;b.constructor=g,x(b,y.prototype),b.isPureReactComponent=!0;var k=Array.isArray,v=Object.prototype.hasOwnProperty,_={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function T(e,n,t){var s,o={},c=null,i=null;if(null!=n)for(s in void 0!==n.ref&&(i=n.ref),void 0!==n.key&&(c=""+n.key),n)v.call(n,s)&&!S.hasOwnProperty(s)&&(o[s]=n[s]);var l=arguments.length-2;if(1===l)o.children=t;else if(1<l){for(var d=Array(l),a=0;a<l;a++)d[a]=arguments[a+2];o.children=d}if(e&&e.defaultProps)for(s in l=e.defaultProps)void 0===o[s]&&(o[s]=l[s]);return{$$typeof:r,type:e,key:c,ref:i,props:o,_owner:_.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var R=/\/+/g;function E(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function w(e,n,s,o,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case t:l=!0}}if(l)return c=c(l=e),e=""===o?"."+E(l,0):o,k(c)?(s="",null!=e&&(s=e.replace(R,"$&/")+"/"),w(c,n,s,"",(function(e){return e}))):null!=c&&(C(c)&&(c=function(e,n){return{$$typeof:r,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(c,s+(!c.key||l&&l.key===c.key?"":(""+c.key).replace(R,"$&/")+"/")+e)),n.push(c)),1;if(l=0,o=""===o?".":o+":",k(e))for(var d=0;d<e.length;d++){var a=o+E(i=e[d],d);l+=w(i,n,s,a,c)}else if(a=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof a)for(e=a.call(e),d=0;!(i=e.next()).done;)l+=w(i=i.value,n,s,a=o+E(i,d++),c);else if("object"===i)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function O(e,n,r){if(null==e)return e;var t=[],s=0;return w(e,t,"","",(function(e){return n.call(r,e,s++)})),t}function P(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},A={transition:null},D={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:A,ReactCurrentOwner:_};n.Children={map:O,forEach:function(e,n,r){O(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return O(e,(function(){n++})),n},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=y,n.Fragment=s,n.Profiler=c,n.PureComponent=g,n.StrictMode=o,n.Suspense=a,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,n.cloneElement=function(e,n,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=x({},e.props),o=e.key,c=e.ref,i=e._owner;if(null!=n){if(void 0!==n.ref&&(c=n.ref,i=_.current),void 0!==n.key&&(o=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in n)v.call(n,d)&&!S.hasOwnProperty(d)&&(s[d]=void 0===n[d]&&void 0!==l?l[d]:n[d])}var d=arguments.length-2;if(1===d)s.children=t;else if(1<d){l=Array(d);for(var a=0;a<d;a++)l[a]=arguments[a+2];s.children=l}return{$$typeof:r,type:e.type,key:o,ref:c,props:s,_owner:i}},n.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},n.createElement=T,n.createFactory=function(e){var n=T.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:d,render:e}},n.isValidElement=C,n.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:P}},n.memo=function(e,n){return{$$typeof:f,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=A.transition;A.transition={};try{e()}finally{A.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return $.current.useCallback(e,n)},n.useContext=function(e){return $.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return $.current.useDeferredValue(e)},n.useEffect=function(e,n){return $.current.useEffect(e,n)},n.useId=function(){return $.current.useId()},n.useImperativeHandle=function(e,n,r){return $.current.useImperativeHandle(e,n,r)},n.useInsertionEffect=function(e,n){return $.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return $.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return $.current.useMemo(e,n)},n.useReducer=function(e,n,r){return $.current.useReducer(e,n,r)},n.useRef=function(e){return $.current.useRef(e)},n.useState=function(e){return $.current.useState(e)},n.useSyncExternalStore=function(e,n,r){return $.current.useSyncExternalStore(e,n,r)},n.useTransition=function(){return $.current.useTransition()},n.version="18.2.0"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Zo:()=>i,ah:()=>o});var t=r(667294);const s=t.createContext({});function o(e){const n=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function i({components:e,children:n,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||c:o(e),t.createElement(s.Provider,{value:i},n)}}}]);