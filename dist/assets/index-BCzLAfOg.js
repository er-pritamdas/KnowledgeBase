import{j as i,X as Gp,M as _h,B as St,S as za,N as Kp,a as ti,b as Ms,C as Nn,c as Nh,d as Th,I as Dh,e as zp,f as Ke,A as Dr,m as js,F as jr,Z as Vp,T as Mh,g as Es,h as Mr,i as jh,k as Eh,l as qp,n as Oh,L as zh,o as Rh,p as Lh,q as Uh,r as Ra,s as Bh,t as Hh,u as Ih,R as Rp,v as Yh}from"./ui-CpfvL5Pu.js";import{a as Gh,b as Kh,g as Vh,u as Qp,R as ei,L as ge,c as At,r as Z,d as Xp,B as qh,e as Qh,f as Qt}from"./vendor-dnxPr4VK.js";import{M as Xh,r as Zh,a as Wh,b as Jh}from"./markdown-isGjzEmh.js";(function(){const y=document.createElement("link").relList;if(y&&y.supports&&y.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))u(b);new MutationObserver(b=>{for(const A of b)if(A.type==="childList")for(const _ of A.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&u(_)}).observe(document,{childList:!0,subtree:!0});function w(b){const A={};return b.integrity&&(A.integrity=b.integrity),b.referrerPolicy&&(A.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?A.credentials="include":b.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function u(b){if(b.ep)return;b.ep=!0;const A=w(b);fetch(b.href,A)}})();var Sr={exports:{}},Ts={},Ar={exports:{}},_r={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function Ph(){return Lp||(Lp=1,(function(p){function y(f,N){var H=f.length;f.push(N);e:for(;0<H;){var ee=H-1>>>1,ne=f[ee];if(0<b(ne,N))f[ee]=N,f[H]=ne,H=ee;else break e}}function w(f){return f.length===0?null:f[0]}function u(f){if(f.length===0)return null;var N=f[0],H=f.pop();if(H!==N){f[0]=H;e:for(var ee=0,ne=f.length,ze=ne>>>1;ee<ze;){var Y=2*(ee+1)-1,K=f[Y],ke=Y+1,Fe=f[ke];if(0>b(K,H))ke<ne&&0>b(Fe,K)?(f[ee]=Fe,f[ke]=H,ee=ke):(f[ee]=K,f[Y]=H,ee=Y);else if(ke<ne&&0>b(Fe,H))f[ee]=Fe,f[ke]=H,ee=ke;else break e}}return N}function b(f,N){var H=f.sortIndex-N.sortIndex;return H!==0?H:f.id-N.id}if(p.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var A=performance;p.unstable_now=function(){return A.now()}}else{var _=Date,j=_.now();p.unstable_now=function(){return _.now()-j}}var D=[],U=[],R=1,E=null,T=3,q=!1,X=!1,M=!1,be=!1,Pe=typeof setTimeout=="function"?setTimeout:null,un=typeof clearTimeout=="function"?clearTimeout:null,Te=typeof setImmediate<"u"?setImmediate:null;function Ie(f){for(var N=w(U);N!==null;){if(N.callback===null)u(U);else if(N.startTime<=f)u(U),N.sortIndex=N.expirationTime,y(D,N);else break;N=w(U)}}function Me(f){if(M=!1,Ie(f),!X)if(w(D)!==null)X=!0,Ye||(Ye=!0,pe());else{var N=w(U);N!==null&&Cn(Me,N.startTime-f)}}var Ye=!1,z=-1,G=5,oe=-1;function je(){return be?!0:!(p.unstable_now()-oe<G)}function de(){if(be=!1,Ye){var f=p.unstable_now();oe=f;var N=!0;try{e:{X=!1,M&&(M=!1,un(z),z=-1),q=!0;var H=T;try{n:{for(Ie(f),E=w(D);E!==null&&!(E.expirationTime>f&&je());){var ee=E.callback;if(typeof ee=="function"){E.callback=null,T=E.priorityLevel;var ne=ee(E.expirationTime<=f);if(f=p.unstable_now(),typeof ne=="function"){E.callback=ne,Ie(f),N=!0;break n}E===w(D)&&u(D),Ie(f)}else u(D);E=w(D)}if(E!==null)N=!0;else{var ze=w(U);ze!==null&&Cn(Me,ze.startTime-f),N=!1}}break e}finally{E=null,T=H,q=!1}N=void 0}}finally{N?pe():Ye=!1}}}var pe;if(typeof Te=="function")pe=function(){Te(de)};else if(typeof MessageChannel<"u"){var En=new MessageChannel,Fn=En.port2;En.port1.onmessage=de,pe=function(){Fn.postMessage(null)}}else pe=function(){Pe(de,0)};function Cn(f,N){z=Pe(function(){f(p.unstable_now())},N)}p.unstable_IdlePriority=5,p.unstable_ImmediatePriority=1,p.unstable_LowPriority=4,p.unstable_NormalPriority=3,p.unstable_Profiling=null,p.unstable_UserBlockingPriority=2,p.unstable_cancelCallback=function(f){f.callback=null},p.unstable_forceFrameRate=function(f){0>f||125<f?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<f?Math.floor(1e3/f):5},p.unstable_getCurrentPriorityLevel=function(){return T},p.unstable_next=function(f){switch(T){case 1:case 2:case 3:var N=3;break;default:N=T}var H=T;T=N;try{return f()}finally{T=H}},p.unstable_requestPaint=function(){be=!0},p.unstable_runWithPriority=function(f,N){switch(f){case 1:case 2:case 3:case 4:case 5:break;default:f=3}var H=T;T=f;try{return N()}finally{T=H}},p.unstable_scheduleCallback=function(f,N,H){var ee=p.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ee+H:ee):H=ee,f){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=H+ne,f={id:R++,callback:N,priorityLevel:f,startTime:H,expirationTime:ne,sortIndex:-1},H>ee?(f.sortIndex=H,y(U,f),w(D)===null&&f===w(U)&&(M?(un(z),z=-1):M=!0,Cn(Me,H-ee))):(f.sortIndex=ne,y(D,f),X||q||(X=!0,Ye||(Ye=!0,pe()))),f},p.unstable_shouldYield=je,p.unstable_wrapCallback=function(f){var N=T;return function(){var H=T;T=N;try{return f.apply(this,arguments)}finally{T=H}}}})(_r)),_r}var Up;function Fh(){return Up||(Up=1,Ar.exports=Ph()),Ar.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function $h(){if(Bp)return Ts;Bp=1;var p=Fh(),y=Gh(),w=Kh();function u(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function b(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function A(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function _(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function j(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function D(e){if(A(e)!==e)throw Error(u(188))}function U(e){var n=e.alternate;if(!n){if(n=A(e),n===null)throw Error(u(188));return n!==e?null:e}for(var t=e,a=n;;){var s=t.return;if(s===null)break;var l=s.alternate;if(l===null){if(a=s.return,a!==null){t=a;continue}break}if(s.child===l.child){for(l=s.child;l;){if(l===t)return D(s),e;if(l===a)return D(s),n;l=l.sibling}throw Error(u(188))}if(t.return!==a.return)t=s,a=l;else{for(var o=!1,r=s.child;r;){if(r===t){o=!0,t=s,a=l;break}if(r===a){o=!0,a=s,t=l;break}r=r.sibling}if(!o){for(r=l.child;r;){if(r===t){o=!0,t=l,a=s;break}if(r===a){o=!0,a=l,t=s;break}r=r.sibling}if(!o)throw Error(u(189))}}if(t.alternate!==a)throw Error(u(190))}if(t.tag!==3)throw Error(u(188));return t.stateNode.current===t?e:n}function R(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=R(e),n!==null)return n;e=e.sibling}return null}var E=Object.assign,T=Symbol.for("react.element"),q=Symbol.for("react.transitional.element"),X=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),be=Symbol.for("react.strict_mode"),Pe=Symbol.for("react.profiler"),un=Symbol.for("react.consumer"),Te=Symbol.for("react.context"),Ie=Symbol.for("react.forward_ref"),Me=Symbol.for("react.suspense"),Ye=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),oe=Symbol.for("react.activity"),je=Symbol.for("react.memo_cache_sentinel"),de=Symbol.iterator;function pe(e){return e===null||typeof e!="object"?null:(e=de&&e[de]||e["@@iterator"],typeof e=="function"?e:null)}var En=Symbol.for("react.client.reference");function Fn(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===En?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case Pe:return"Profiler";case be:return"StrictMode";case Me:return"Suspense";case Ye:return"SuspenseList";case oe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case X:return"Portal";case Te:return e.displayName||"Context";case un:return(e._context.displayName||"Context")+".Consumer";case Ie:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:Fn(e.type)||"Memo";case G:n=e._payload,e=e._init;try{return Fn(e(n))}catch{}}return null}var Cn=Array.isArray,f=y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=w.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},ee=[],ne=-1;function ze(e){return{current:e}}function Y(e){0>ne||(e.current=ee[ne],ee[ne]=null,ne--)}function K(e,n){ne++,ee[ne]=e.current,e.current=n}var ke=ze(null),Fe=ze(null),dn=ze(null),zs=ze(null);function Rs(e,n){switch(K(dn,n),K(Fe,e),K(ke,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?ap(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=ap(n),e=sp(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(ke),K(ke,e)}function Wt(){Y(ke),Y(Fe),Y(dn)}function si(e){e.memoizedState!==null&&K(zs,e);var n=ke.current,t=sp(n,e.type);n!==t&&(K(Fe,e),K(ke,t))}function Ls(e){Fe.current===e&&(Y(ke),Y(Fe)),zs.current===e&&(Y(zs),Ss._currentValue=H)}var li,Or;function Nt(e){if(li===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);li=n&&n[1]||"",Or=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+li+e+Or}var ii=!1;function oi(e,n){if(!e||ii)return"";ii=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(x){var v=x}Reflect.construct(e,[],S)}else{try{S.call()}catch(x){v=x}e.call(S.prototype)}}else{try{throw Error()}catch(x){v=x}(S=e())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(x){if(x&&v&&typeof x.stack=="string")return[x.stack,v.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=a.DetermineComponentFrameRoot(),o=l[0],r=l[1];if(o&&r){var c=o.split(`
`),g=r.split(`
`);for(s=a=0;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;for(;s<g.length&&!g[s].includes("DetermineComponentFrameRoot");)s++;if(a===c.length||s===g.length)for(a=c.length-1,s=g.length-1;1<=a&&0<=s&&c[a]!==g[s];)s--;for(;1<=a&&0<=s;a--,s--)if(c[a]!==g[s]){if(a!==1||s!==1)do if(a--,s--,0>s||c[a]!==g[s]){var k=`
`+c[a].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=a&&0<=s);break}}}finally{ii=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Nt(t):""}function tm(e,n){switch(e.tag){case 26:case 27:case 5:return Nt(e.type);case 16:return Nt("Lazy");case 13:return e.child!==n&&n!==null?Nt("Suspense Fallback"):Nt("Suspense");case 19:return Nt("SuspenseList");case 0:case 15:return oi(e.type,!1);case 11:return oi(e.type.render,!1);case 1:return oi(e.type,!0);case 31:return Nt("Activity");default:return""}}function zr(e){try{var n="",t=null;do n+=tm(e,t),t=e,e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var ri=Object.prototype.hasOwnProperty,ci=p.unstable_scheduleCallback,ui=p.unstable_cancelCallback,am=p.unstable_shouldYield,sm=p.unstable_requestPaint,$e=p.unstable_now,lm=p.unstable_getCurrentPriorityLevel,Rr=p.unstable_ImmediatePriority,Lr=p.unstable_UserBlockingPriority,Us=p.unstable_NormalPriority,im=p.unstable_LowPriority,Ur=p.unstable_IdlePriority,om=p.log,rm=p.unstable_setDisableYieldValue,La=null,en=null;function $n(e){if(typeof om=="function"&&rm(e),en&&typeof en.setStrictMode=="function")try{en.setStrictMode(La,e)}catch{}}var nn=Math.clz32?Math.clz32:dm,cm=Math.log,um=Math.LN2;function dm(e){return e>>>=0,e===0?32:31-(cm(e)/um|0)|0}var Bs=256,Hs=262144,Is=4194304;function Tt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ys(e,n,t){var a=e.pendingLanes;if(a===0)return 0;var s=0,l=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var r=a&134217727;return r!==0?(a=r&~l,a!==0?s=Tt(a):(o&=r,o!==0?s=Tt(o):t||(t=r&~e,t!==0&&(s=Tt(t))))):(r=a&~l,r!==0?s=Tt(r):o!==0?s=Tt(o):t||(t=a&~e,t!==0&&(s=Tt(t)))),s===0?0:n!==0&&n!==s&&(n&l)===0&&(l=s&-s,t=n&-n,l>=t||l===32&&(t&4194048)!==0)?n:s}function Ua(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function pm(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Br(){var e=Is;return Is<<=1,(Is&62914560)===0&&(Is=4194304),e}function di(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ba(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function mm(e,n,t,a,s,l){var o=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var r=e.entanglements,c=e.expirationTimes,g=e.hiddenUpdates;for(t=o&~t;0<t;){var k=31-nn(t),S=1<<k;r[k]=0,c[k]=-1;var v=g[k];if(v!==null)for(g[k]=null,k=0;k<v.length;k++){var x=v[k];x!==null&&(x.lane&=-536870913)}t&=~S}a!==0&&Hr(e,a,0),l!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=l&~(o&~n))}function Hr(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-nn(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&261930}function Ir(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-nn(t),s=1<<a;s&n|e[a]&n&&(e[a]|=n),t&=~s}}function Yr(e,n){var t=n&-n;return t=(t&42)!==0?1:pi(t),(t&(e.suspendedLanes|n))!==0?0:t}function pi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function mi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Gr(){var e=N.p;return e!==0?e:(e=window.event,e===void 0?32:Np(e.type))}function Kr(e,n){var t=N.p;try{return N.p=e,n()}finally{N.p=t}}var et=Math.random().toString(36).slice(2),Re="__reactFiber$"+et,Ve="__reactProps$"+et,Jt="__reactContainer$"+et,fi="__reactEvents$"+et,fm="__reactListeners$"+et,hm="__reactHandles$"+et,Vr="__reactResources$"+et,Ha="__reactMarker$"+et;function hi(e){delete e[Re],delete e[Ve],delete e[fi],delete e[fm],delete e[hm]}function Pt(e){var n=e[Re];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Jt]||t[Re]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=dp(e);e!==null;){if(t=e[Re])return t;e=dp(e)}return n}e=t,t=e.parentNode}return null}function Ft(e){if(e=e[Re]||e[Jt]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ia(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(u(33))}function $t(e){var n=e[Vr];return n||(n=e[Vr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ee(e){e[Ha]=!0}var qr=new Set,Qr={};function Dt(e,n){ea(e,n),ea(e+"Capture",n)}function ea(e,n){for(Qr[e]=n,e=0;e<n.length;e++)qr.add(n[e])}var gm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xr={},Zr={};function vm(e){return ri.call(Zr,e)?!0:ri.call(Xr,e)?!1:gm.test(e)?Zr[e]=!0:(Xr[e]=!0,!1)}function Gs(e,n,t){if(vm(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function Ks(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function On(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+a)}}function pn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wr(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function bm(e,n,t){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var s=a.get,l=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return s.call(this)},set:function(o){t=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(o){t=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function gi(e){if(!e._valueTracker){var n=Wr(e)?"checked":"value";e._valueTracker=bm(e,n,""+e[n])}}function Jr(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Wr(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function Vs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ym=/[\n"\\]/g;function mn(e){return e.replace(ym,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function vi(e,n,t,a,s,l,o,r){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),n!=null?o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+pn(n)):e.value!==""+pn(n)&&(e.value=""+pn(n)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),n!=null?bi(e,o,pn(n)):t!=null?bi(e,o,pn(t)):a!=null&&e.removeAttribute("value"),s==null&&l!=null&&(e.defaultChecked=!!l),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+pn(r):e.removeAttribute("name")}function Pr(e,n,t,a,s,l,o,r){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),n!=null||t!=null){if(!(l!=="submit"&&l!=="reset"||n!=null)){gi(e);return}t=t!=null?""+pn(t):"",n=n!=null?""+pn(n):t,r||n===e.value||(e.value=n),e.defaultValue=n}a=a??s,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=r?e.checked:!!a,e.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),gi(e)}function bi(e,n,t){n==="number"&&Vs(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function na(e,n,t,a){if(e=e.options,n){n={};for(var s=0;s<t.length;s++)n["$"+t[s]]=!0;for(t=0;t<e.length;t++)s=n.hasOwnProperty("$"+e[t].value),e[t].selected!==s&&(e[t].selected=s),s&&a&&(e[t].defaultSelected=!0)}else{for(t=""+pn(t),n=null,s=0;s<e.length;s++){if(e[s].value===t){e[s].selected=!0,a&&(e[s].defaultSelected=!0);return}n!==null||e[s].disabled||(n=e[s])}n!==null&&(n.selected=!0)}}function Fr(e,n,t){if(n!=null&&(n=""+pn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+pn(t):""}function $r(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(u(92));if(Cn(a)){if(1<a.length)throw Error(u(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=pn(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a),gi(e)}function ta(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var xm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ec(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||xm.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function nc(e,n,t){if(n!=null&&typeof n!="object")throw Error(u(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var s in n)a=n[s],n.hasOwnProperty(s)&&t[s]!==a&&ec(e,s,a)}else for(var l in n)n.hasOwnProperty(l)&&ec(e,l,n[l])}function yi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var km=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qs(e){return wm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function zn(){}var xi=null;function ki(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var aa=null,sa=null;function tc(e){var n=Ft(e);if(n&&(e=n.stateNode)){var t=e[Ve]||null;e:switch(e=n.stateNode,n.type){case"input":if(vi(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+mn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var s=a[Ve]||null;if(!s)throw Error(u(90));vi(a,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&Jr(a)}break e;case"textarea":Fr(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&na(e,!!t.multiple,n,!1)}}}var wi=!1;function ac(e,n,t){if(wi)return e(n,t);wi=!0;try{var a=e(n);return a}finally{if(wi=!1,(aa!==null||sa!==null)&&(El(),aa&&(n=aa,e=sa,sa=aa=null,tc(n),e)))for(n=0;n<e.length;n++)tc(e[n])}}function Ya(e,n){var t=e.stateNode;if(t===null)return null;var a=t[Ve]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(u(231,n,typeof t));return t}var Rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ci=!1;if(Rn)try{var Ga={};Object.defineProperty(Ga,"passive",{get:function(){Ci=!0}}),window.addEventListener("test",Ga,Ga),window.removeEventListener("test",Ga,Ga)}catch{Ci=!1}var nt=null,Si=null,Qs=null;function sc(){if(Qs)return Qs;var e,n=Si,t=n.length,a,s="value"in nt?nt.value:nt.textContent,l=s.length;for(e=0;e<t&&n[e]===s[e];e++);var o=t-e;for(a=1;a<=o&&n[t-a]===s[l-a];a++);return Qs=s.slice(e,1<a?1-a:void 0)}function Xs(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Zs(){return!0}function lc(){return!1}function qe(e){function n(t,a,s,l,o){this._reactName=t,this._targetInst=s,this.type=a,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(t=e[r],this[r]=t?t(l):l[r]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Zs:lc,this.isPropagationStopped=lc,this}return E(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Zs)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Zs)},persist:function(){},isPersistent:Zs}),n}var Mt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ws=qe(Mt),Ka=E({},Mt,{view:0,detail:0}),Cm=qe(Ka),Ai,_i,Va,Js=E({},Ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ti,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Va&&(Va&&e.type==="mousemove"?(Ai=e.screenX-Va.screenX,_i=e.screenY-Va.screenY):_i=Ai=0,Va=e),Ai)},movementY:function(e){return"movementY"in e?e.movementY:_i}}),ic=qe(Js),Sm=E({},Js,{dataTransfer:0}),Am=qe(Sm),_m=E({},Ka,{relatedTarget:0}),Ni=qe(_m),Nm=E({},Mt,{animationName:0,elapsedTime:0,pseudoElement:0}),Tm=qe(Nm),Dm=E({},Mt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mm=qe(Dm),jm=E({},Mt,{data:0}),oc=qe(jm),Em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Om={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rm(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=zm[e])?!!n[e]:!1}function Ti(){return Rm}var Lm=E({},Ka,{key:function(e){if(e.key){var n=Em[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Xs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Om[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ti,charCode:function(e){return e.type==="keypress"?Xs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Um=qe(Lm),Bm=E({},Js,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rc=qe(Bm),Hm=E({},Ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ti}),Im=qe(Hm),Ym=E({},Mt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gm=qe(Ym),Km=E({},Js,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vm=qe(Km),qm=E({},Mt,{newState:0,oldState:0}),Qm=qe(qm),Xm=[9,13,27,32],Di=Rn&&"CompositionEvent"in window,qa=null;Rn&&"documentMode"in document&&(qa=document.documentMode);var Zm=Rn&&"TextEvent"in window&&!qa,cc=Rn&&(!Di||qa&&8<qa&&11>=qa),uc=" ",dc=!1;function pc(e,n){switch(e){case"keyup":return Xm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var la=!1;function Wm(e,n){switch(e){case"compositionend":return mc(n);case"keypress":return n.which!==32?null:(dc=!0,uc);case"textInput":return e=n.data,e===uc&&dc?null:e;default:return null}}function Jm(e,n){if(la)return e==="compositionend"||!Di&&pc(e,n)?(e=sc(),Qs=Si=nt=null,la=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return cc&&n.locale!=="ko"?null:n.data;default:return null}}var Pm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Pm[e.type]:n==="textarea"}function hc(e,n,t,a){aa?sa?sa.push(a):sa=[a]:aa=a,n=Hl(n,"onChange"),0<n.length&&(t=new Ws("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var Qa=null,Xa=null;function Fm(e){Pd(e,0)}function Ps(e){var n=Ia(e);if(Jr(n))return e}function gc(e,n){if(e==="change")return n}var vc=!1;if(Rn){var Mi;if(Rn){var ji="oninput"in document;if(!ji){var bc=document.createElement("div");bc.setAttribute("oninput","return;"),ji=typeof bc.oninput=="function"}Mi=ji}else Mi=!1;vc=Mi&&(!document.documentMode||9<document.documentMode)}function yc(){Qa&&(Qa.detachEvent("onpropertychange",xc),Xa=Qa=null)}function xc(e){if(e.propertyName==="value"&&Ps(Xa)){var n=[];hc(n,Xa,e,ki(e)),ac(Fm,n)}}function $m(e,n,t){e==="focusin"?(yc(),Qa=n,Xa=t,Qa.attachEvent("onpropertychange",xc)):e==="focusout"&&yc()}function ef(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ps(Xa)}function nf(e,n){if(e==="click")return Ps(n)}function tf(e,n){if(e==="input"||e==="change")return Ps(n)}function af(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var tn=typeof Object.is=="function"?Object.is:af;function Za(e,n){if(tn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var s=t[a];if(!ri.call(n,s)||!tn(e[s],n[s]))return!1}return!0}function kc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wc(e,n){var t=kc(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=kc(t)}}function Cc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Cc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Sc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Vs(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Vs(e.document)}return n}function Ei(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var sf=Rn&&"documentMode"in document&&11>=document.documentMode,ia=null,Oi=null,Wa=null,zi=!1;function Ac(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;zi||ia==null||ia!==Vs(a)||(a=ia,"selectionStart"in a&&Ei(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Wa&&Za(Wa,a)||(Wa=a,a=Hl(Oi,"onSelect"),0<a.length&&(n=new Ws("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=ia)))}function jt(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var oa={animationend:jt("Animation","AnimationEnd"),animationiteration:jt("Animation","AnimationIteration"),animationstart:jt("Animation","AnimationStart"),transitionrun:jt("Transition","TransitionRun"),transitionstart:jt("Transition","TransitionStart"),transitioncancel:jt("Transition","TransitionCancel"),transitionend:jt("Transition","TransitionEnd")},Ri={},_c={};Rn&&(_c=document.createElement("div").style,"AnimationEvent"in window||(delete oa.animationend.animation,delete oa.animationiteration.animation,delete oa.animationstart.animation),"TransitionEvent"in window||delete oa.transitionend.transition);function Et(e){if(Ri[e])return Ri[e];if(!oa[e])return e;var n=oa[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in _c)return Ri[e]=n[t];return e}var Nc=Et("animationend"),Tc=Et("animationiteration"),Dc=Et("animationstart"),lf=Et("transitionrun"),of=Et("transitionstart"),rf=Et("transitioncancel"),Mc=Et("transitionend"),jc=new Map,Li="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Li.push("scrollEnd");function Sn(e,n){jc.set(e,n),Dt(n,[e])}var Fs=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fn=[],ra=0,Ui=0;function $s(){for(var e=ra,n=Ui=ra=0;n<e;){var t=fn[n];fn[n++]=null;var a=fn[n];fn[n++]=null;var s=fn[n];fn[n++]=null;var l=fn[n];if(fn[n++]=null,a!==null&&s!==null){var o=a.pending;o===null?s.next=s:(s.next=o.next,o.next=s),a.pending=s}l!==0&&Ec(t,s,l)}}function el(e,n,t,a){fn[ra++]=e,fn[ra++]=n,fn[ra++]=t,fn[ra++]=a,Ui|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Bi(e,n,t,a){return el(e,n,t,a),nl(e)}function Ot(e,n){return el(e,null,null,n),nl(e)}function Ec(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var s=!1,l=e.return;l!==null;)l.childLanes|=t,a=l.alternate,a!==null&&(a.childLanes|=t),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(s=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,s&&n!==null&&(s=31-nn(t),e=l.hiddenUpdates,a=e[s],a===null?e[s]=[n]:a.push(n),n.lane=t|536870912),l):null}function nl(e){if(50<vs)throw vs=0,Zo=null,Error(u(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ca={};function cf(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(e,n,t,a){return new cf(e,n,t,a)}function Hi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ln(e,n){var t=e.alternate;return t===null?(t=an(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Oc(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function tl(e,n,t,a,s,l){var o=0;if(a=e,typeof e=="function")Hi(e)&&(o=1);else if(typeof e=="string")o=fh(e,t,ke.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case oe:return e=an(31,t,n,s),e.elementType=oe,e.lanes=l,e;case M:return zt(t.children,s,l,n);case be:o=8,s|=24;break;case Pe:return e=an(12,t,n,s|2),e.elementType=Pe,e.lanes=l,e;case Me:return e=an(13,t,n,s),e.elementType=Me,e.lanes=l,e;case Ye:return e=an(19,t,n,s),e.elementType=Ye,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Te:o=10;break e;case un:o=9;break e;case Ie:o=11;break e;case z:o=14;break e;case G:o=16,a=null;break e}o=29,t=Error(u(130,e===null?"null":typeof e,"")),a=null}return n=an(o,t,n,s),n.elementType=e,n.type=a,n.lanes=l,n}function zt(e,n,t,a){return e=an(7,e,a,n),e.lanes=t,e}function Ii(e,n,t){return e=an(6,e,null,n),e.lanes=t,e}function zc(e){var n=an(18,null,null,0);return n.stateNode=e,n}function Yi(e,n,t){return n=an(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Rc=new WeakMap;function hn(e,n){if(typeof e=="object"&&e!==null){var t=Rc.get(e);return t!==void 0?t:(n={value:e,source:n,stack:zr(n)},Rc.set(e,n),n)}return{value:e,source:n,stack:zr(n)}}var ua=[],da=0,al=null,Ja=0,gn=[],vn=0,tt=null,Tn=1,Dn="";function Un(e,n){ua[da++]=Ja,ua[da++]=al,al=e,Ja=n}function Lc(e,n,t){gn[vn++]=Tn,gn[vn++]=Dn,gn[vn++]=tt,tt=e;var a=Tn;e=Dn;var s=32-nn(a)-1;a&=~(1<<s),t+=1;var l=32-nn(n)+s;if(30<l){var o=s-s%5;l=(a&(1<<o)-1).toString(32),a>>=o,s-=o,Tn=1<<32-nn(n)+s|t<<s|a,Dn=l+e}else Tn=1<<l|t<<s|a,Dn=e}function Gi(e){e.return!==null&&(Un(e,1),Lc(e,1,0))}function Ki(e){for(;e===al;)al=ua[--da],ua[da]=null,Ja=ua[--da],ua[da]=null;for(;e===tt;)tt=gn[--vn],gn[vn]=null,Dn=gn[--vn],gn[vn]=null,Tn=gn[--vn],gn[vn]=null}function Uc(e,n){gn[vn++]=Tn,gn[vn++]=Dn,gn[vn++]=tt,Tn=n.id,Dn=n.overflow,tt=e}var Le=null,fe=null,$=!1,at=null,bn=!1,Vi=Error(u(519));function st(e){var n=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pa(hn(n,e)),Vi}function Bc(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[Re]=e,n[Ve]=a,t){case"dialog":J("cancel",n),J("close",n);break;case"iframe":case"object":case"embed":J("load",n);break;case"video":case"audio":for(t=0;t<ys.length;t++)J(ys[t],n);break;case"source":J("error",n);break;case"img":case"image":case"link":J("error",n),J("load",n);break;case"details":J("toggle",n);break;case"input":J("invalid",n),Pr(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":J("invalid",n);break;case"textarea":J("invalid",n),$r(n,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||np(n.textContent,t)?(a.popover!=null&&(J("beforetoggle",n),J("toggle",n)),a.onScroll!=null&&J("scroll",n),a.onScrollEnd!=null&&J("scrollend",n),a.onClick!=null&&(n.onclick=zn),n=!0):n=!1,n||st(e,!0)}function Hc(e){for(Le=e.return;Le;)switch(Le.tag){case 5:case 31:case 13:bn=!1;return;case 27:case 3:bn=!0;return;default:Le=Le.return}}function pa(e){if(e!==Le)return!1;if(!$)return Hc(e),$=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||cr(e.type,e.memoizedProps)),t=!t),t&&fe&&st(e),Hc(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));fe=up(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));fe=up(e)}else n===27?(n=fe,bt(e.type)?(e=fr,fr=null,fe=e):fe=n):fe=Le?xn(e.stateNode.nextSibling):null;return!0}function Rt(){fe=Le=null,$=!1}function qi(){var e=at;return e!==null&&(We===null?We=e:We.push.apply(We,e),at=null),e}function Pa(e){at===null?at=[e]:at.push(e)}var Qi=ze(null),Lt=null,Bn=null;function lt(e,n,t){K(Qi,n._currentValue),n._currentValue=t}function Hn(e){e._currentValue=Qi.current,Y(Qi)}function Xi(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function Zi(e,n,t,a){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){var o=s.child;l=l.firstContext;e:for(;l!==null;){var r=l;l=s;for(var c=0;c<n.length;c++)if(r.context===n[c]){l.lanes|=t,r=l.alternate,r!==null&&(r.lanes|=t),Xi(l.return,t,e),a||(o=null);break e}l=r.next}}else if(s.tag===18){if(o=s.return,o===null)throw Error(u(341));o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),Xi(o,t,e),o=null}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}}function ma(e,n,t,a){e=null;for(var s=n,l=!1;s!==null;){if(!l){if((s.flags&524288)!==0)l=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var o=s.alternate;if(o===null)throw Error(u(387));if(o=o.memoizedProps,o!==null){var r=s.type;tn(s.pendingProps.value,o.value)||(e!==null?e.push(r):e=[r])}}else if(s===zs.current){if(o=s.alternate,o===null)throw Error(u(387));o.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Ss):e=[Ss])}s=s.return}e!==null&&Zi(n,e,t,a),n.flags|=262144}function sl(e){for(e=e.firstContext;e!==null;){if(!tn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ut(e){Lt=e,Bn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ue(e){return Ic(Lt,e)}function ll(e,n){return Lt===null&&Ut(e),Ic(e,n)}function Ic(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},Bn===null){if(e===null)throw Error(u(308));Bn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Bn=Bn.next=n;return t}var uf=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},df=p.unstable_scheduleCallback,pf=p.unstable_NormalPriority,Se={$$typeof:Te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wi(){return{controller:new uf,data:new Map,refCount:0}}function Fa(e){e.refCount--,e.refCount===0&&df(pf,function(){e.controller.abort()})}var $a=null,Ji=0,fa=0,ha=null;function mf(e,n){if($a===null){var t=$a=[];Ji=0,fa=er(),ha={status:"pending",value:void 0,then:function(a){t.push(a)}}}return Ji++,n.then(Yc,Yc),n}function Yc(){if(--Ji===0&&$a!==null){ha!==null&&(ha.status="fulfilled");var e=$a;$a=null,fa=0,ha=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function ff(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(s){t.push(s)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var s=0;s<t.length;s++)(0,t[s])(n)},function(s){for(a.status="rejected",a.reason=s,s=0;s<t.length;s++)(0,t[s])(void 0)}),a}var Gc=f.S;f.S=function(e,n){Ad=$e(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&mf(e,n),Gc!==null&&Gc(e,n)};var Bt=ze(null);function Pi(){var e=Bt.current;return e!==null?e:me.pooledCache}function il(e,n){n===null?K(Bt,Bt.current):K(Bt,n.pool)}function Kc(){var e=Pi();return e===null?null:{parent:Se._currentValue,pool:e}}var ga=Error(u(460)),Fi=Error(u(474)),ol=Error(u(542)),rl={then:function(){}};function Vc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function qc(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(zn,zn),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Xc(e),e;default:if(typeof n.status=="string")n.then(zn,zn);else{if(e=me,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var s=n;s.status="fulfilled",s.value=a}},function(a){if(n.status==="pending"){var s=n;s.status="rejected",s.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Xc(e),e}throw It=n,ga}}function Ht(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(It=t,ga):t}}var It=null;function Qc(){if(It===null)throw Error(u(459));var e=It;return It=null,e}function Xc(e){if(e===ga||e===ol)throw Error(u(483))}var va=null,es=0;function cl(e){var n=es;return es+=1,va===null&&(va=[]),qc(va,e,n)}function ns(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ul(e,n){throw n.$$typeof===T?Error(u(525)):(e=Object.prototype.toString.call(n),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Zc(e){function n(m,d){if(e){var h=m.deletions;h===null?(m.deletions=[d],m.flags|=16):h.push(d)}}function t(m,d){if(!e)return null;for(;d!==null;)n(m,d),d=d.sibling;return null}function a(m){for(var d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function s(m,d){return m=Ln(m,d),m.index=0,m.sibling=null,m}function l(m,d,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<d?(m.flags|=67108866,d):h):(m.flags|=67108866,d)):(m.flags|=1048576,d)}function o(m){return e&&m.alternate===null&&(m.flags|=67108866),m}function r(m,d,h,C){return d===null||d.tag!==6?(d=Ii(h,m.mode,C),d.return=m,d):(d=s(d,h),d.return=m,d)}function c(m,d,h,C){var B=h.type;return B===M?k(m,d,h.props.children,C,h.key):d!==null&&(d.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===G&&Ht(B)===d.type)?(d=s(d,h.props),ns(d,h),d.return=m,d):(d=tl(h.type,h.key,h.props,null,m.mode,C),ns(d,h),d.return=m,d)}function g(m,d,h,C){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Yi(h,m.mode,C),d.return=m,d):(d=s(d,h.children||[]),d.return=m,d)}function k(m,d,h,C,B){return d===null||d.tag!==7?(d=zt(h,m.mode,C,B),d.return=m,d):(d=s(d,h),d.return=m,d)}function S(m,d,h){if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return d=Ii(""+d,m.mode,h),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case q:return h=tl(d.type,d.key,d.props,null,m.mode,h),ns(h,d),h.return=m,h;case X:return d=Yi(d,m.mode,h),d.return=m,d;case G:return d=Ht(d),S(m,d,h)}if(Cn(d)||pe(d))return d=zt(d,m.mode,h,null),d.return=m,d;if(typeof d.then=="function")return S(m,cl(d),h);if(d.$$typeof===Te)return S(m,ll(m,d),h);ul(m,d)}return null}function v(m,d,h,C){var B=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return B!==null?null:r(m,d,""+h,C);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case q:return h.key===B?c(m,d,h,C):null;case X:return h.key===B?g(m,d,h,C):null;case G:return h=Ht(h),v(m,d,h,C)}if(Cn(h)||pe(h))return B!==null?null:k(m,d,h,C,null);if(typeof h.then=="function")return v(m,d,cl(h),C);if(h.$$typeof===Te)return v(m,d,ll(m,h),C);ul(m,h)}return null}function x(m,d,h,C,B){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return m=m.get(h)||null,r(d,m,""+C,B);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case q:return m=m.get(C.key===null?h:C.key)||null,c(d,m,C,B);case X:return m=m.get(C.key===null?h:C.key)||null,g(d,m,C,B);case G:return C=Ht(C),x(m,d,h,C,B)}if(Cn(C)||pe(C))return m=m.get(h)||null,k(d,m,C,B,null);if(typeof C.then=="function")return x(m,d,h,cl(C),B);if(C.$$typeof===Te)return x(m,d,h,ll(d,C),B);ul(d,C)}return null}function O(m,d,h,C){for(var B=null,te=null,L=d,Q=d=0,F=null;L!==null&&Q<h.length;Q++){L.index>Q?(F=L,L=null):F=L.sibling;var ae=v(m,L,h[Q],C);if(ae===null){L===null&&(L=F);break}e&&L&&ae.alternate===null&&n(m,L),d=l(ae,d,Q),te===null?B=ae:te.sibling=ae,te=ae,L=F}if(Q===h.length)return t(m,L),$&&Un(m,Q),B;if(L===null){for(;Q<h.length;Q++)L=S(m,h[Q],C),L!==null&&(d=l(L,d,Q),te===null?B=L:te.sibling=L,te=L);return $&&Un(m,Q),B}for(L=a(L);Q<h.length;Q++)F=x(L,m,Q,h[Q],C),F!==null&&(e&&F.alternate!==null&&L.delete(F.key===null?Q:F.key),d=l(F,d,Q),te===null?B=F:te.sibling=F,te=F);return e&&L.forEach(function(Ct){return n(m,Ct)}),$&&Un(m,Q),B}function I(m,d,h,C){if(h==null)throw Error(u(151));for(var B=null,te=null,L=d,Q=d=0,F=null,ae=h.next();L!==null&&!ae.done;Q++,ae=h.next()){L.index>Q?(F=L,L=null):F=L.sibling;var Ct=v(m,L,ae.value,C);if(Ct===null){L===null&&(L=F);break}e&&L&&Ct.alternate===null&&n(m,L),d=l(Ct,d,Q),te===null?B=Ct:te.sibling=Ct,te=Ct,L=F}if(ae.done)return t(m,L),$&&Un(m,Q),B;if(L===null){for(;!ae.done;Q++,ae=h.next())ae=S(m,ae.value,C),ae!==null&&(d=l(ae,d,Q),te===null?B=ae:te.sibling=ae,te=ae);return $&&Un(m,Q),B}for(L=a(L);!ae.done;Q++,ae=h.next())ae=x(L,m,Q,ae.value,C),ae!==null&&(e&&ae.alternate!==null&&L.delete(ae.key===null?Q:ae.key),d=l(ae,d,Q),te===null?B=ae:te.sibling=ae,te=ae);return e&&L.forEach(function(Ah){return n(m,Ah)}),$&&Un(m,Q),B}function ue(m,d,h,C){if(typeof h=="object"&&h!==null&&h.type===M&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case q:e:{for(var B=h.key;d!==null;){if(d.key===B){if(B=h.type,B===M){if(d.tag===7){t(m,d.sibling),C=s(d,h.props.children),C.return=m,m=C;break e}}else if(d.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===G&&Ht(B)===d.type){t(m,d.sibling),C=s(d,h.props),ns(C,h),C.return=m,m=C;break e}t(m,d);break}else n(m,d);d=d.sibling}h.type===M?(C=zt(h.props.children,m.mode,C,h.key),C.return=m,m=C):(C=tl(h.type,h.key,h.props,null,m.mode,C),ns(C,h),C.return=m,m=C)}return o(m);case X:e:{for(B=h.key;d!==null;){if(d.key===B)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){t(m,d.sibling),C=s(d,h.children||[]),C.return=m,m=C;break e}else{t(m,d);break}else n(m,d);d=d.sibling}C=Yi(h,m.mode,C),C.return=m,m=C}return o(m);case G:return h=Ht(h),ue(m,d,h,C)}if(Cn(h))return O(m,d,h,C);if(pe(h)){if(B=pe(h),typeof B!="function")throw Error(u(150));return h=B.call(h),I(m,d,h,C)}if(typeof h.then=="function")return ue(m,d,cl(h),C);if(h.$$typeof===Te)return ue(m,d,ll(m,h),C);ul(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,d!==null&&d.tag===6?(t(m,d.sibling),C=s(d,h),C.return=m,m=C):(t(m,d),C=Ii(h,m.mode,C),C.return=m,m=C),o(m)):t(m,d)}return function(m,d,h,C){try{es=0;var B=ue(m,d,h,C);return va=null,B}catch(L){if(L===ga||L===ol)throw L;var te=an(29,L,null,m.mode);return te.lanes=C,te.return=m,te}finally{}}}var Yt=Zc(!0),Wc=Zc(!1),it=!1;function $i(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function eo(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ot(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function rt(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(se&2)!==0){var s=a.pending;return s===null?n.next=n:(n.next=s.next,s.next=n),a.pending=n,n=nl(e),Ec(e,null,t),n}return el(e,a,n,t),nl(e)}function ts(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Ir(e,t)}}function no(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var s=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};l===null?s=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?s=l=n:l=l.next=n}else s=l=n;t={baseState:a.baseState,firstBaseUpdate:s,lastBaseUpdate:l,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var to=!1;function as(){if(to){var e=ha;if(e!==null)throw e}}function ss(e,n,t,a){to=!1;var s=e.updateQueue;it=!1;var l=s.firstBaseUpdate,o=s.lastBaseUpdate,r=s.shared.pending;if(r!==null){s.shared.pending=null;var c=r,g=c.next;c.next=null,o===null?l=g:o.next=g,o=c;var k=e.alternate;k!==null&&(k=k.updateQueue,r=k.lastBaseUpdate,r!==o&&(r===null?k.firstBaseUpdate=g:r.next=g,k.lastBaseUpdate=c))}if(l!==null){var S=s.baseState;o=0,k=g=c=null,r=l;do{var v=r.lane&-536870913,x=v!==r.lane;if(x?(P&v)===v:(a&v)===v){v!==0&&v===fa&&(to=!0),k!==null&&(k=k.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var O=e,I=r;v=n;var ue=t;switch(I.tag){case 1:if(O=I.payload,typeof O=="function"){S=O.call(ue,S,v);break e}S=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=I.payload,v=typeof O=="function"?O.call(ue,S,v):O,v==null)break e;S=E({},S,v);break e;case 2:it=!0}}v=r.callback,v!==null&&(e.flags|=64,x&&(e.flags|=8192),x=s.callbacks,x===null?s.callbacks=[v]:x.push(v))}else x={lane:v,tag:r.tag,payload:r.payload,callback:r.callback,next:null},k===null?(g=k=x,c=S):k=k.next=x,o|=v;if(r=r.next,r===null){if(r=s.shared.pending,r===null)break;x=r,r=x.next,x.next=null,s.lastBaseUpdate=x,s.shared.pending=null}}while(!0);k===null&&(c=S),s.baseState=c,s.firstBaseUpdate=g,s.lastBaseUpdate=k,l===null&&(s.shared.lanes=0),mt|=o,e.lanes=o,e.memoizedState=S}}function Jc(e,n){if(typeof e!="function")throw Error(u(191,e));e.call(n)}function Pc(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Jc(t[e],n)}var ba=ze(null),dl=ze(0);function Fc(e,n){e=Zn,K(dl,e),K(ba,n),Zn=e|n.baseLanes}function ao(){K(dl,Zn),K(ba,ba.current)}function so(){Zn=dl.current,Y(ba),Y(dl)}var sn=ze(null),yn=null;function ct(e){var n=e.alternate;K(we,we.current&1),K(sn,e),yn===null&&(n===null||ba.current!==null||n.memoizedState!==null)&&(yn=e)}function lo(e){K(we,we.current),K(sn,e),yn===null&&(yn=e)}function $c(e){e.tag===22?(K(we,we.current),K(sn,e),yn===null&&(yn=e)):ut()}function ut(){K(we,we.current),K(sn,sn.current)}function ln(e){Y(sn),yn===e&&(yn=null),Y(we)}var we=ze(0);function pl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||pr(t)||mr(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var In=0,V=null,re=null,Ae=null,ml=!1,ya=!1,Gt=!1,fl=0,ls=0,xa=null,hf=0;function ye(){throw Error(u(321))}function io(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!tn(e[t],n[t]))return!1;return!0}function oo(e,n,t,a,s,l){return In=l,V=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,f.H=e===null||e.memoizedState===null?Lu:Co,Gt=!1,l=t(a,s),Gt=!1,ya&&(l=nu(n,t,a,s)),eu(e),l}function eu(e){f.H=rs;var n=re!==null&&re.next!==null;if(In=0,Ae=re=V=null,ml=!1,ls=0,xa=null,n)throw Error(u(300));e===null||_e||(e=e.dependencies,e!==null&&sl(e)&&(_e=!0))}function nu(e,n,t,a){V=e;var s=0;do{if(ya&&(xa=null),ls=0,ya=!1,25<=s)throw Error(u(301));if(s+=1,Ae=re=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}f.H=Uu,l=n(t,a)}while(ya);return l}function gf(){var e=f.H,n=e.useState()[0];return n=typeof n.then=="function"?is(n):n,e=e.useState()[0],(re!==null?re.memoizedState:null)!==e&&(V.flags|=1024),n}function ro(){var e=fl!==0;return fl=0,e}function co(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function uo(e){if(ml){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ml=!1}In=0,Ae=re=V=null,ya=!1,ls=fl=0,xa=null}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?V.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function Ce(){if(re===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var n=Ae===null?V.memoizedState:Ae.next;if(n!==null)Ae=n,re=e;else{if(e===null)throw V.alternate===null?Error(u(467)):Error(u(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},Ae===null?V.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function hl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function is(e){var n=ls;return ls+=1,xa===null&&(xa=[]),e=qc(xa,e,n),n=V,(Ae===null?n.memoizedState:Ae.next)===null&&(n=n.alternate,f.H=n===null||n.memoizedState===null?Lu:Co),e}function gl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return is(e);if(e.$$typeof===Te)return Ue(e)}throw Error(u(438,String(e)))}function po(e){var n=null,t=V.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=V.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(s){return s.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=hl(),V.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=je;return n.index++,t}function Yn(e,n){return typeof n=="function"?n(e):n}function vl(e){var n=Ce();return mo(n,re,e)}function mo(e,n,t){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=t;var s=e.baseQueue,l=a.pending;if(l!==null){if(s!==null){var o=s.next;s.next=l.next,l.next=o}n.baseQueue=s=l,a.pending=null}if(l=e.baseState,s===null)e.memoizedState=l;else{n=s.next;var r=o=null,c=null,g=n,k=!1;do{var S=g.lane&-536870913;if(S!==g.lane?(P&S)===S:(In&S)===S){var v=g.revertLane;if(v===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),S===fa&&(k=!0);else if((In&v)===v){g=g.next,v===fa&&(k=!0);continue}else S={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},c===null?(r=c=S,o=l):c=c.next=S,V.lanes|=v,mt|=v;S=g.action,Gt&&t(l,S),l=g.hasEagerState?g.eagerState:t(l,S)}else v={lane:S,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},c===null?(r=c=v,o=l):c=c.next=v,V.lanes|=S,mt|=S;g=g.next}while(g!==null&&g!==n);if(c===null?o=l:c.next=r,!tn(l,e.memoizedState)&&(_e=!0,k&&(t=ha,t!==null)))throw t;e.memoizedState=l,e.baseState=o,e.baseQueue=c,a.lastRenderedState=l}return s===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function fo(e){var n=Ce(),t=n.queue;if(t===null)throw Error(u(311));t.lastRenderedReducer=e;var a=t.dispatch,s=t.pending,l=n.memoizedState;if(s!==null){t.pending=null;var o=s=s.next;do l=e(l,o.action),o=o.next;while(o!==s);tn(l,n.memoizedState)||(_e=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,a]}function tu(e,n,t){var a=V,s=Ce(),l=$;if(l){if(t===void 0)throw Error(u(407));t=t()}else t=n();var o=!tn((re||s).memoizedState,t);if(o&&(s.memoizedState=t,_e=!0),s=s.queue,vo(lu.bind(null,a,s,e),[e]),s.getSnapshot!==n||o||Ae!==null&&Ae.memoizedState.tag&1){if(a.flags|=2048,ka(9,{destroy:void 0},su.bind(null,a,s,t,n),null),me===null)throw Error(u(349));l||(In&127)!==0||au(a,n,t)}return t}function au(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=V.updateQueue,n===null?(n=hl(),V.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function su(e,n,t,a){n.value=t,n.getSnapshot=a,iu(n)&&ou(e)}function lu(e,n,t){return t(function(){iu(n)&&ou(e)})}function iu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!tn(e,t)}catch{return!0}}function ou(e){var n=Ot(e,2);n!==null&&Je(n,e,2)}function ho(e){var n=Ge();if(typeof e=="function"){var t=e;if(e=t(),Gt){$n(!0);try{t()}finally{$n(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:e},n}function ru(e,n,t,a){return e.baseState=t,mo(e,re,typeof a=="function"?a:Yn)}function vf(e,n,t,a,s){if(xl(e))throw Error(u(485));if(e=n.action,e!==null){var l={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){l.listeners.push(o)}};f.T!==null?t(!0):l.isTransition=!1,a(l),t=n.pending,t===null?(l.next=n.pending=l,cu(n,l)):(l.next=t.next,n.pending=t.next=l)}}function cu(e,n){var t=n.action,a=n.payload,s=e.state;if(n.isTransition){var l=f.T,o={};f.T=o;try{var r=t(s,a),c=f.S;c!==null&&c(o,r),uu(e,n,r)}catch(g){go(e,n,g)}finally{l!==null&&o.types!==null&&(l.types=o.types),f.T=l}}else try{l=t(s,a),uu(e,n,l)}catch(g){go(e,n,g)}}function uu(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){du(e,n,a)},function(a){return go(e,n,a)}):du(e,n,t)}function du(e,n,t){n.status="fulfilled",n.value=t,pu(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,cu(e,t)))}function go(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,pu(n),n=n.next;while(n!==a)}e.action=null}function pu(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function mu(e,n){return n}function fu(e,n){if($){var t=me.formState;if(t!==null){e:{var a=V;if($){if(fe){n:{for(var s=fe,l=bn;s.nodeType!==8;){if(!l){s=null;break n}if(s=xn(s.nextSibling),s===null){s=null;break n}}l=s.data,s=l==="F!"||l==="F"?s:null}if(s){fe=xn(s.nextSibling),a=s.data==="F!";break e}}st(a)}a=!1}a&&(n=t[0])}}return t=Ge(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mu,lastRenderedState:n},t.queue=a,t=Ou.bind(null,V,a),a.dispatch=t,a=ho(!1),l=wo.bind(null,V,!1,a.queue),a=Ge(),s={state:n,dispatch:null,action:e,pending:null},a.queue=s,t=vf.bind(null,V,s,l,t),s.dispatch=t,a.memoizedState=e,[n,t,!1]}function hu(e){var n=Ce();return gu(n,re,e)}function gu(e,n,t){if(n=mo(e,n,mu)[0],e=vl(Yn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=is(n)}catch(o){throw o===ga?ol:o}else a=n;n=Ce();var s=n.queue,l=s.dispatch;return t!==n.memoizedState&&(V.flags|=2048,ka(9,{destroy:void 0},bf.bind(null,s,t),null)),[a,l,e]}function bf(e,n){e.action=n}function vu(e){var n=Ce(),t=re;if(t!==null)return gu(n,t,e);Ce(),n=n.memoizedState,t=Ce();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function ka(e,n,t,a){return e={tag:e,create:t,deps:a,inst:n,next:null},n=V.updateQueue,n===null&&(n=hl(),V.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function bu(){return Ce().memoizedState}function bl(e,n,t,a){var s=Ge();V.flags|=e,s.memoizedState=ka(1|n,{destroy:void 0},t,a===void 0?null:a)}function yl(e,n,t,a){var s=Ce();a=a===void 0?null:a;var l=s.memoizedState.inst;re!==null&&a!==null&&io(a,re.memoizedState.deps)?s.memoizedState=ka(n,l,t,a):(V.flags|=e,s.memoizedState=ka(1|n,l,t,a))}function yu(e,n){bl(8390656,8,e,n)}function vo(e,n){yl(2048,8,e,n)}function yf(e){V.flags|=4;var n=V.updateQueue;if(n===null)n=hl(),V.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function xu(e){var n=Ce().memoizedState;return yf({ref:n,nextImpl:e}),function(){if((se&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}function ku(e,n){return yl(4,2,e,n)}function wu(e,n){return yl(4,4,e,n)}function Cu(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Su(e,n,t){t=t!=null?t.concat([e]):null,yl(4,4,Cu.bind(null,n,e),t)}function bo(){}function Au(e,n){var t=Ce();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&io(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function _u(e,n){var t=Ce();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&io(n,a[1]))return a[0];if(a=e(),Gt){$n(!0);try{e()}finally{$n(!1)}}return t.memoizedState=[a,n],a}function yo(e,n,t){return t===void 0||(In&1073741824)!==0&&(P&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=Nd(),V.lanes|=e,mt|=e,t)}function Nu(e,n,t,a){return tn(t,n)?t:ba.current!==null?(e=yo(e,t,a),tn(e,n)||(_e=!0),e):(In&42)===0||(In&1073741824)!==0&&(P&261930)===0?(_e=!0,e.memoizedState=t):(e=Nd(),V.lanes|=e,mt|=e,n)}function Tu(e,n,t,a,s){var l=N.p;N.p=l!==0&&8>l?l:8;var o=f.T,r={};f.T=r,wo(e,!1,n,t);try{var c=s(),g=f.S;if(g!==null&&g(r,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var k=ff(c,a);os(e,n,k,cn(e))}else os(e,n,a,cn(e))}catch(S){os(e,n,{then:function(){},status:"rejected",reason:S},cn())}finally{N.p=l,o!==null&&r.types!==null&&(o.types=r.types),f.T=o}}function xf(){}function xo(e,n,t,a){if(e.tag!==5)throw Error(u(476));var s=Du(e).queue;Tu(e,s,n,H,t===null?xf:function(){return Mu(e),t(a)})}function Du(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:H},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Mu(e){var n=Du(e);n.next===null&&(n=e.alternate.memoizedState),os(e,n.next.queue,{},cn())}function ko(){return Ue(Ss)}function ju(){return Ce().memoizedState}function Eu(){return Ce().memoizedState}function kf(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=cn();e=ot(t);var a=rt(n,e,t);a!==null&&(Je(a,n,t),ts(a,n,t)),n={cache:Wi()},e.payload=n;return}n=n.return}}function wf(e,n,t){var a=cn();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},xl(e)?zu(n,t):(t=Bi(e,n,t,a),t!==null&&(Je(t,e,a),Ru(t,n,a)))}function Ou(e,n,t){var a=cn();os(e,n,t,a)}function os(e,n,t,a){var s={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(xl(e))zu(n,s);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,r=l(o,t);if(s.hasEagerState=!0,s.eagerState=r,tn(r,o))return el(e,n,s,0),me===null&&$s(),!1}catch{}finally{}if(t=Bi(e,n,s,a),t!==null)return Je(t,e,a),Ru(t,n,a),!0}return!1}function wo(e,n,t,a){if(a={lane:2,revertLane:er(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},xl(e)){if(n)throw Error(u(479))}else n=Bi(e,t,a,2),n!==null&&Je(n,e,2)}function xl(e){var n=e.alternate;return e===V||n!==null&&n===V}function zu(e,n){ya=ml=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Ru(e,n,t){if((t&4194048)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Ir(e,t)}}var rs={readContext:Ue,use:gl,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useLayoutEffect:ye,useInsertionEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useSyncExternalStore:ye,useId:ye,useHostTransitionStatus:ye,useFormState:ye,useActionState:ye,useOptimistic:ye,useMemoCache:ye,useCacheRefresh:ye};rs.useEffectEvent=ye;var Lu={readContext:Ue,use:gl,useCallback:function(e,n){return Ge().memoizedState=[e,n===void 0?null:n],e},useContext:Ue,useEffect:yu,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,bl(4194308,4,Cu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return bl(4194308,4,e,n)},useInsertionEffect:function(e,n){bl(4,2,e,n)},useMemo:function(e,n){var t=Ge();n=n===void 0?null:n;var a=e();if(Gt){$n(!0);try{e()}finally{$n(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=Ge();if(t!==void 0){var s=t(n);if(Gt){$n(!0);try{t(n)}finally{$n(!1)}}}else s=n;return a.memoizedState=a.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},a.queue=e,e=e.dispatch=wf.bind(null,V,e),[a.memoizedState,e]},useRef:function(e){var n=Ge();return e={current:e},n.memoizedState=e},useState:function(e){e=ho(e);var n=e.queue,t=Ou.bind(null,V,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:bo,useDeferredValue:function(e,n){var t=Ge();return yo(t,e,n)},useTransition:function(){var e=ho(!1);return e=Tu.bind(null,V,e.queue,!0,!1),Ge().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=V,s=Ge();if($){if(t===void 0)throw Error(u(407));t=t()}else{if(t=n(),me===null)throw Error(u(349));(P&127)!==0||au(a,n,t)}s.memoizedState=t;var l={value:t,getSnapshot:n};return s.queue=l,yu(lu.bind(null,a,l,e),[e]),a.flags|=2048,ka(9,{destroy:void 0},su.bind(null,a,l,t,n),null),t},useId:function(){var e=Ge(),n=me.identifierPrefix;if($){var t=Dn,a=Tn;t=(a&~(1<<32-nn(a)-1)).toString(32)+t,n="_"+n+"R_"+t,t=fl++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=hf++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ko,useFormState:fu,useActionState:fu,useOptimistic:function(e){var n=Ge();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=wo.bind(null,V,!0,t),t.dispatch=n,[e,n]},useMemoCache:po,useCacheRefresh:function(){return Ge().memoizedState=kf.bind(null,V)},useEffectEvent:function(e){var n=Ge(),t={impl:e};return n.memoizedState=t,function(){if((se&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}},Co={readContext:Ue,use:gl,useCallback:Au,useContext:Ue,useEffect:vo,useImperativeHandle:Su,useInsertionEffect:ku,useLayoutEffect:wu,useMemo:_u,useReducer:vl,useRef:bu,useState:function(){return vl(Yn)},useDebugValue:bo,useDeferredValue:function(e,n){var t=Ce();return Nu(t,re.memoizedState,e,n)},useTransition:function(){var e=vl(Yn)[0],n=Ce().memoizedState;return[typeof e=="boolean"?e:is(e),n]},useSyncExternalStore:tu,useId:ju,useHostTransitionStatus:ko,useFormState:hu,useActionState:hu,useOptimistic:function(e,n){var t=Ce();return ru(t,re,e,n)},useMemoCache:po,useCacheRefresh:Eu};Co.useEffectEvent=xu;var Uu={readContext:Ue,use:gl,useCallback:Au,useContext:Ue,useEffect:vo,useImperativeHandle:Su,useInsertionEffect:ku,useLayoutEffect:wu,useMemo:_u,useReducer:fo,useRef:bu,useState:function(){return fo(Yn)},useDebugValue:bo,useDeferredValue:function(e,n){var t=Ce();return re===null?yo(t,e,n):Nu(t,re.memoizedState,e,n)},useTransition:function(){var e=fo(Yn)[0],n=Ce().memoizedState;return[typeof e=="boolean"?e:is(e),n]},useSyncExternalStore:tu,useId:ju,useHostTransitionStatus:ko,useFormState:vu,useActionState:vu,useOptimistic:function(e,n){var t=Ce();return re!==null?ru(t,re,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:po,useCacheRefresh:Eu};Uu.useEffectEvent=xu;function So(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:E({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ao={enqueueSetState:function(e,n,t){e=e._reactInternals;var a=cn(),s=ot(a);s.payload=n,t!=null&&(s.callback=t),n=rt(e,s,a),n!==null&&(Je(n,e,a),ts(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=cn(),s=ot(a);s.tag=1,s.payload=n,t!=null&&(s.callback=t),n=rt(e,s,a),n!==null&&(Je(n,e,a),ts(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=cn(),a=ot(t);a.tag=2,n!=null&&(a.callback=n),n=rt(e,a,t),n!==null&&(Je(n,e,t),ts(n,e,t))}};function Bu(e,n,t,a,s,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,o):n.prototype&&n.prototype.isPureReactComponent?!Za(t,a)||!Za(s,l):!0}function Hu(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&Ao.enqueueReplaceState(n,n.state,null)}function Kt(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=E({},t));for(var s in e)t[s]===void 0&&(t[s]=e[s])}return t}function Iu(e){Fs(e)}function Yu(e){console.error(e)}function Gu(e){Fs(e)}function kl(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function Ku(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function _o(e,n,t){return t=ot(t),t.tag=3,t.payload={element:null},t.callback=function(){kl(e,n)},t}function Vu(e){return e=ot(e),e.tag=3,e}function qu(e,n,t,a){var s=t.type.getDerivedStateFromError;if(typeof s=="function"){var l=a.value;e.payload=function(){return s(l)},e.callback=function(){Ku(n,t,a)}}var o=t.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Ku(n,t,a),typeof s!="function"&&(ft===null?ft=new Set([this]):ft.add(this));var r=a.stack;this.componentDidCatch(a.value,{componentStack:r!==null?r:""})})}function Cf(e,n,t,a,s){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&ma(n,t,s,!0),t=sn.current,t!==null){switch(t.tag){case 31:case 13:return yn===null?Ol():t.alternate===null&&xe===0&&(xe=3),t.flags&=-257,t.flags|=65536,t.lanes=s,a===rl?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),Po(e,a,s)),!1;case 22:return t.flags|=65536,a===rl?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),Po(e,a,s)),!1}throw Error(u(435,t.tag))}return Po(e,a,s),Ol(),!1}if($)return n=sn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=s,a!==Vi&&(e=Error(u(422),{cause:a}),Pa(hn(e,t)))):(a!==Vi&&(n=Error(u(423),{cause:a}),Pa(hn(n,t))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,a=hn(a,t),s=_o(e.stateNode,a,s),no(e,s),xe!==4&&(xe=2)),!1;var l=Error(u(520),{cause:a});if(l=hn(l,t),gs===null?gs=[l]:gs.push(l),xe!==4&&(xe=2),n===null)return!0;a=hn(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=s&-s,t.lanes|=e,e=_o(t.stateNode,a,e),no(t,e),!1;case 1:if(n=t.type,l=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(ft===null||!ft.has(l))))return t.flags|=65536,s&=-s,t.lanes|=s,s=Vu(s),qu(s,e,t,a),no(t,s),!1}t=t.return}while(t!==null);return!1}var No=Error(u(461)),_e=!1;function Be(e,n,t,a){n.child=e===null?Wc(n,null,t,a):Yt(n,e.child,t,a)}function Qu(e,n,t,a,s){t=t.render;var l=n.ref;if("ref"in a){var o={};for(var r in a)r!=="ref"&&(o[r]=a[r])}else o=a;return Ut(n),a=oo(e,n,t,o,l,s),r=ro(),e!==null&&!_e?(co(e,n,s),Gn(e,n,s)):($&&r&&Gi(n),n.flags|=1,Be(e,n,a,s),n.child)}function Xu(e,n,t,a,s){if(e===null){var l=t.type;return typeof l=="function"&&!Hi(l)&&l.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=l,Zu(e,n,l,a,s)):(e=tl(t.type,null,a,n,n.mode,s),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!Ro(e,s)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:Za,t(o,a)&&e.ref===n.ref)return Gn(e,n,s)}return n.flags|=1,e=Ln(l,a),e.ref=n.ref,e.return=n,n.child=e}function Zu(e,n,t,a,s){if(e!==null){var l=e.memoizedProps;if(Za(l,a)&&e.ref===n.ref)if(_e=!1,n.pendingProps=a=l,Ro(e,s))(e.flags&131072)!==0&&(_e=!0);else return n.lanes=e.lanes,Gn(e,n,s)}return To(e,n,t,a,s)}function Wu(e,n,t,a){var s=a.children,l=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((n.flags&128)!==0){if(l=l!==null?l.baseLanes|t:t,e!==null){for(a=n.child=e.child,s=0;a!==null;)s=s|a.lanes|a.childLanes,a=a.sibling;a=s&~l}else a=0,n.child=null;return Ju(e,n,l,t,a)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&il(n,l!==null?l.cachePool:null),l!==null?Fc(n,l):ao(),$c(n);else return a=n.lanes=536870912,Ju(e,n,l!==null?l.baseLanes|t:t,t,a)}else l!==null?(il(n,l.cachePool),Fc(n,l),ut(),n.memoizedState=null):(e!==null&&il(n,null),ao(),ut());return Be(e,n,s,t),n.child}function cs(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Ju(e,n,t,a,s){var l=Pi();return l=l===null?null:{parent:Se._currentValue,pool:l},n.memoizedState={baseLanes:t,cachePool:l},e!==null&&il(n,null),ao(),$c(n),e!==null&&ma(e,n,a,!0),n.childLanes=s,null}function wl(e,n){return n=Sl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Pu(e,n,t){return Yt(n,e.child,null,t),e=wl(n,n.pendingProps),e.flags|=2,ln(n),n.memoizedState=null,e}function Sf(e,n,t){var a=n.pendingProps,s=(n.flags&128)!==0;if(n.flags&=-129,e===null){if($){if(a.mode==="hidden")return e=wl(n,a),n.lanes=536870912,cs(null,e);if(lo(n),(e=fe)?(e=cp(e,bn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:tt!==null?{id:Tn,overflow:Dn}:null,retryLane:536870912,hydrationErrors:null},t=zc(e),t.return=n,n.child=t,Le=n,fe=null)):e=null,e===null)throw st(n);return n.lanes=536870912,null}return wl(n,a)}var l=e.memoizedState;if(l!==null){var o=l.dehydrated;if(lo(n),s)if(n.flags&256)n.flags&=-257,n=Pu(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(u(558));else if(_e||ma(e,n,t,!1),s=(t&e.childLanes)!==0,_e||s){if(a=me,a!==null&&(o=Yr(a,t),o!==0&&o!==l.retryLane))throw l.retryLane=o,Ot(e,o),Je(a,e,o),No;Ol(),n=Pu(e,n,t)}else e=l.treeContext,fe=xn(o.nextSibling),Le=n,$=!0,at=null,bn=!1,e!==null&&Uc(n,e),n=wl(n,a),n.flags|=4096;return n}return e=Ln(e.child,{mode:a.mode,children:a.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Cl(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(u(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function To(e,n,t,a,s){return Ut(n),t=oo(e,n,t,a,void 0,s),a=ro(),e!==null&&!_e?(co(e,n,s),Gn(e,n,s)):($&&a&&Gi(n),n.flags|=1,Be(e,n,t,s),n.child)}function Fu(e,n,t,a,s,l){return Ut(n),n.updateQueue=null,t=nu(n,a,t,s),eu(e),a=ro(),e!==null&&!_e?(co(e,n,l),Gn(e,n,l)):($&&a&&Gi(n),n.flags|=1,Be(e,n,t,l),n.child)}function $u(e,n,t,a,s){if(Ut(n),n.stateNode===null){var l=ca,o=t.contextType;typeof o=="object"&&o!==null&&(l=Ue(o)),l=new t(a,l),n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Ao,n.stateNode=l,l._reactInternals=n,l=n.stateNode,l.props=a,l.state=n.memoizedState,l.refs={},$i(n),o=t.contextType,l.context=typeof o=="object"&&o!==null?Ue(o):ca,l.state=n.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(So(n,t,o,a),l.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(o=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),o!==l.state&&Ao.enqueueReplaceState(l,l.state,null),ss(n,a,l,s),as(),l.state=n.memoizedState),typeof l.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){l=n.stateNode;var r=n.memoizedProps,c=Kt(t,r);l.props=c;var g=l.context,k=t.contextType;o=ca,typeof k=="object"&&k!==null&&(o=Ue(k));var S=t.getDerivedStateFromProps;k=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function",r=n.pendingProps!==r,k||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(r||g!==o)&&Hu(n,l,a,o),it=!1;var v=n.memoizedState;l.state=v,ss(n,a,l,s),as(),g=n.memoizedState,r||v!==g||it?(typeof S=="function"&&(So(n,t,S,a),g=n.memoizedState),(c=it||Bu(n,t,c,a,v,g,o))?(k||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=g),l.props=a,l.state=g,l.context=o,a=c):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{l=n.stateNode,eo(e,n),o=n.memoizedProps,k=Kt(t,o),l.props=k,S=n.pendingProps,v=l.context,g=t.contextType,c=ca,typeof g=="object"&&g!==null&&(c=Ue(g)),r=t.getDerivedStateFromProps,(g=typeof r=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==S||v!==c)&&Hu(n,l,a,c),it=!1,v=n.memoizedState,l.state=v,ss(n,a,l,s),as();var x=n.memoizedState;o!==S||v!==x||it||e!==null&&e.dependencies!==null&&sl(e.dependencies)?(typeof r=="function"&&(So(n,t,r,a),x=n.memoizedState),(k=it||Bu(n,t,k,a,v,x,c)||e!==null&&e.dependencies!==null&&sl(e.dependencies))?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,x,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,x,c)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=x),l.props=a,l.state=x,l.context=c,a=k):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),a=!1)}return l=a,Cl(e,n),a=(n.flags&128)!==0,l||a?(l=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:l.render(),n.flags|=1,e!==null&&a?(n.child=Yt(n,e.child,null,s),n.child=Yt(n,null,t,s)):Be(e,n,t,s),n.memoizedState=l.state,e=n.child):e=Gn(e,n,s),e}function ed(e,n,t,a){return Rt(),n.flags|=256,Be(e,n,t,a),n.child}var Do={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mo(e){return{baseLanes:e,cachePool:Kc()}}function jo(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=rn),e}function nd(e,n,t){var a=n.pendingProps,s=!1,l=(n.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(we.current&2)!==0),o&&(s=!0,n.flags&=-129),o=(n.flags&32)!==0,n.flags&=-33,e===null){if($){if(s?ct(n):ut(),(e=fe)?(e=cp(e,bn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:tt!==null?{id:Tn,overflow:Dn}:null,retryLane:536870912,hydrationErrors:null},t=zc(e),t.return=n,n.child=t,Le=n,fe=null)):e=null,e===null)throw st(n);return mr(e)?n.lanes=32:n.lanes=536870912,null}var r=a.children;return a=a.fallback,s?(ut(),s=n.mode,r=Sl({mode:"hidden",children:r},s),a=zt(a,s,t,null),r.return=n,a.return=n,r.sibling=a,n.child=r,a=n.child,a.memoizedState=Mo(t),a.childLanes=jo(e,o,t),n.memoizedState=Do,cs(null,a)):(ct(n),Eo(n,r))}var c=e.memoizedState;if(c!==null&&(r=c.dehydrated,r!==null)){if(l)n.flags&256?(ct(n),n.flags&=-257,n=Oo(e,n,t)):n.memoizedState!==null?(ut(),n.child=e.child,n.flags|=128,n=null):(ut(),r=a.fallback,s=n.mode,a=Sl({mode:"visible",children:a.children},s),r=zt(r,s,t,null),r.flags|=2,a.return=n,r.return=n,a.sibling=r,n.child=a,Yt(n,e.child,null,t),a=n.child,a.memoizedState=Mo(t),a.childLanes=jo(e,o,t),n.memoizedState=Do,n=cs(null,a));else if(ct(n),mr(r)){if(o=r.nextSibling&&r.nextSibling.dataset,o)var g=o.dgst;o=g,a=Error(u(419)),a.stack="",a.digest=o,Pa({value:a,source:null,stack:null}),n=Oo(e,n,t)}else if(_e||ma(e,n,t,!1),o=(t&e.childLanes)!==0,_e||o){if(o=me,o!==null&&(a=Yr(o,t),a!==0&&a!==c.retryLane))throw c.retryLane=a,Ot(e,a),Je(o,e,a),No;pr(r)||Ol(),n=Oo(e,n,t)}else pr(r)?(n.flags|=192,n.child=e.child,n=null):(e=c.treeContext,fe=xn(r.nextSibling),Le=n,$=!0,at=null,bn=!1,e!==null&&Uc(n,e),n=Eo(n,a.children),n.flags|=4096);return n}return s?(ut(),r=a.fallback,s=n.mode,c=e.child,g=c.sibling,a=Ln(c,{mode:"hidden",children:a.children}),a.subtreeFlags=c.subtreeFlags&65011712,g!==null?r=Ln(g,r):(r=zt(r,s,t,null),r.flags|=2),r.return=n,a.return=n,a.sibling=r,n.child=a,cs(null,a),a=n.child,r=e.child.memoizedState,r===null?r=Mo(t):(s=r.cachePool,s!==null?(c=Se._currentValue,s=s.parent!==c?{parent:c,pool:c}:s):s=Kc(),r={baseLanes:r.baseLanes|t,cachePool:s}),a.memoizedState=r,a.childLanes=jo(e,o,t),n.memoizedState=Do,cs(e.child,a)):(ct(n),t=e.child,e=t.sibling,t=Ln(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(o=n.deletions,o===null?(n.deletions=[e],n.flags|=16):o.push(e)),n.child=t,n.memoizedState=null,t)}function Eo(e,n){return n=Sl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Sl(e,n){return e=an(22,e,null,n),e.lanes=0,e}function Oo(e,n,t){return Yt(n,e.child,null,t),e=Eo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function td(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Xi(e.return,n,t)}function zo(e,n,t,a,s,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:s,treeForkCount:l}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=t,o.tailMode=s,o.treeForkCount=l)}function ad(e,n,t){var a=n.pendingProps,s=a.revealOrder,l=a.tail;a=a.children;var o=we.current,r=(o&2)!==0;if(r?(o=o&1|2,n.flags|=128):o&=1,K(we,o),Be(e,n,a,t),a=$?Ja:0,!r&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&td(e,t,n);else if(e.tag===19)td(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(t=n.child,s=null;t!==null;)e=t.alternate,e!==null&&pl(e)===null&&(s=t),t=t.sibling;t=s,t===null?(s=n.child,n.child=null):(s=t.sibling,t.sibling=null),zo(n,!1,s,t,l,a);break;case"backwards":case"unstable_legacy-backwards":for(t=null,s=n.child,n.child=null;s!==null;){if(e=s.alternate,e!==null&&pl(e)===null){n.child=s;break}e=s.sibling,s.sibling=t,t=s,s=e}zo(n,!0,t,null,l,a);break;case"together":zo(n,!1,null,null,void 0,a);break;default:n.memoizedState=null}return n.child}function Gn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),mt|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(ma(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(u(153));if(n.child!==null){for(e=n.child,t=Ln(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Ln(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Ro(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&sl(e)))}function Af(e,n,t){switch(n.tag){case 3:Rs(n,n.stateNode.containerInfo),lt(n,Se,e.memoizedState.cache),Rt();break;case 27:case 5:si(n);break;case 4:Rs(n,n.stateNode.containerInfo);break;case 10:lt(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,lo(n),null;break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(ct(n),n.flags|=128,null):(t&n.child.childLanes)!==0?nd(e,n,t):(ct(n),e=Gn(e,n,t),e!==null?e.sibling:null);ct(n);break;case 19:var s=(e.flags&128)!==0;if(a=(t&n.childLanes)!==0,a||(ma(e,n,t,!1),a=(t&n.childLanes)!==0),s){if(a)return ad(e,n,t);n.flags|=128}if(s=n.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),K(we,we.current),a)break;return null;case 22:return n.lanes=0,Wu(e,n,t,n.pendingProps);case 24:lt(n,Se,e.memoizedState.cache)}return Gn(e,n,t)}function sd(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)_e=!0;else{if(!Ro(e,t)&&(n.flags&128)===0)return _e=!1,Af(e,n,t);_e=(e.flags&131072)!==0}else _e=!1,$&&(n.flags&1048576)!==0&&Lc(n,Ja,n.index);switch(n.lanes=0,n.tag){case 16:e:{var a=n.pendingProps;if(e=Ht(n.elementType),n.type=e,typeof e=="function")Hi(e)?(a=Kt(e,a),n.tag=1,n=$u(null,n,e,a,t)):(n.tag=0,n=To(null,n,e,a,t));else{if(e!=null){var s=e.$$typeof;if(s===Ie){n.tag=11,n=Qu(null,n,e,a,t);break e}else if(s===z){n.tag=14,n=Xu(null,n,e,a,t);break e}}throw n=Fn(e)||e,Error(u(306,n,""))}}return n;case 0:return To(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,s=Kt(a,n.pendingProps),$u(e,n,a,s,t);case 3:e:{if(Rs(n,n.stateNode.containerInfo),e===null)throw Error(u(387));a=n.pendingProps;var l=n.memoizedState;s=l.element,eo(e,n),ss(n,a,null,t);var o=n.memoizedState;if(a=o.cache,lt(n,Se,a),a!==l.cache&&Zi(n,[Se],t,!0),as(),a=o.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:o.cache},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){n=ed(e,n,a,t);break e}else if(a!==s){s=hn(Error(u(424)),n),Pa(s),n=ed(e,n,a,t);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(fe=xn(e.firstChild),Le=n,$=!0,at=null,bn=!0,t=Wc(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Rt(),a===s){n=Gn(e,n,t);break e}Be(e,n,a,t)}n=n.child}return n;case 26:return Cl(e,n),e===null?(t=hp(n.type,null,n.pendingProps,null))?n.memoizedState=t:$||(t=n.type,e=n.pendingProps,a=Il(dn.current).createElement(t),a[Re]=n,a[Ve]=e,He(a,t,e),Ee(a),n.stateNode=a):n.memoizedState=hp(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return si(n),e===null&&$&&(a=n.stateNode=pp(n.type,n.pendingProps,dn.current),Le=n,bn=!0,s=fe,bt(n.type)?(fr=s,fe=xn(a.firstChild)):fe=s),Be(e,n,n.pendingProps.children,t),Cl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&$&&((s=a=fe)&&(a=nh(a,n.type,n.pendingProps,bn),a!==null?(n.stateNode=a,Le=n,fe=xn(a.firstChild),bn=!1,s=!0):s=!1),s||st(n)),si(n),s=n.type,l=n.pendingProps,o=e!==null?e.memoizedProps:null,a=l.children,cr(s,l)?a=null:o!==null&&cr(s,o)&&(n.flags|=32),n.memoizedState!==null&&(s=oo(e,n,gf,null,null,t),Ss._currentValue=s),Cl(e,n),Be(e,n,a,t),n.child;case 6:return e===null&&$&&((e=t=fe)&&(t=th(t,n.pendingProps,bn),t!==null?(n.stateNode=t,Le=n,fe=null,e=!0):e=!1),e||st(n)),null;case 13:return nd(e,n,t);case 4:return Rs(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=Yt(n,null,a,t):Be(e,n,a,t),n.child;case 11:return Qu(e,n,n.type,n.pendingProps,t);case 7:return Be(e,n,n.pendingProps,t),n.child;case 8:return Be(e,n,n.pendingProps.children,t),n.child;case 12:return Be(e,n,n.pendingProps.children,t),n.child;case 10:return a=n.pendingProps,lt(n,n.type,a.value),Be(e,n,a.children,t),n.child;case 9:return s=n.type._context,a=n.pendingProps.children,Ut(n),s=Ue(s),a=a(s),n.flags|=1,Be(e,n,a,t),n.child;case 14:return Xu(e,n,n.type,n.pendingProps,t);case 15:return Zu(e,n,n.type,n.pendingProps,t);case 19:return ad(e,n,t);case 31:return Sf(e,n,t);case 22:return Wu(e,n,t,n.pendingProps);case 24:return Ut(n),a=Ue(Se),e===null?(s=Pi(),s===null&&(s=me,l=Wi(),s.pooledCache=l,l.refCount++,l!==null&&(s.pooledCacheLanes|=t),s=l),n.memoizedState={parent:a,cache:s},$i(n),lt(n,Se,s)):((e.lanes&t)!==0&&(eo(e,n),ss(n,null,null,t),as()),s=e.memoizedState,l=n.memoizedState,s.parent!==a?(s={parent:a,cache:a},n.memoizedState=s,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=s),lt(n,Se,a)):(a=l.cache,lt(n,Se,a),a!==s.cache&&Zi(n,[Se],t,!0))),Be(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(u(156,n.tag))}function Kn(e){e.flags|=4}function Lo(e,n,t,a,s){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(jd())e.flags|=8192;else throw It=rl,Fi}else e.flags&=-16777217}function ld(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!xp(n))if(jd())e.flags|=8192;else throw It=rl,Fi}function Al(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Br():536870912,e.lanes|=n,Aa|=n)}function us(e,n){if(!$)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function he(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var s=e.child;s!==null;)t|=s.lanes|s.childLanes,a|=s.subtreeFlags&65011712,a|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)t|=s.lanes|s.childLanes,a|=s.subtreeFlags,a|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function _f(e,n,t){var a=n.pendingProps;switch(Ki(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(n),null;case 1:return he(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Hn(Se),Wt(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(pa(n)?Kn(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,qi())),he(n),null;case 26:var s=n.type,l=n.memoizedState;return e===null?(Kn(n),l!==null?(he(n),ld(n,l)):(he(n),Lo(n,s,null,a,t))):l?l!==e.memoizedState?(Kn(n),he(n),ld(n,l)):(he(n),n.flags&=-16777217):(e=e.memoizedProps,e!==a&&Kn(n),he(n),Lo(n,s,e,a,t)),null;case 27:if(Ls(n),t=dn.current,s=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&Kn(n);else{if(!a){if(n.stateNode===null)throw Error(u(166));return he(n),null}e=ke.current,pa(n)?Bc(n):(e=pp(s,a,t),n.stateNode=e,Kn(n))}return he(n),null;case 5:if(Ls(n),s=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&Kn(n);else{if(!a){if(n.stateNode===null)throw Error(u(166));return he(n),null}if(l=ke.current,pa(n))Bc(n);else{var o=Il(dn.current);switch(l){case 1:l=o.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:l=o.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":l=o.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":l=o.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":l=o.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?l.multiple=!0:a.size&&(l.size=a.size);break;default:l=typeof a.is=="string"?o.createElement(s,{is:a.is}):o.createElement(s)}}l[Re]=n,l[Ve]=a;e:for(o=n.child;o!==null;){if(o.tag===5||o.tag===6)l.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break e;for(;o.sibling===null;){if(o.return===null||o.return===n)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}n.stateNode=l;e:switch(He(l,s,a),s){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Kn(n)}}return he(n),Lo(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&Kn(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(u(166));if(e=dn.current,pa(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,s=Le,s!==null)switch(s.tag){case 27:case 5:a=s.memoizedProps}e[Re]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||np(e.nodeValue,t)),e||st(n,!0)}else e=Il(e).createTextNode(a),e[Re]=n,n.stateNode=e}return he(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(a=pa(n),t!==null){if(e===null){if(!a)throw Error(u(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Re]=n}else Rt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;he(n),e=!1}else t=qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(ln(n),n):(ln(n),null);if((n.flags&128)!==0)throw Error(u(558))}return he(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=pa(n),a!==null&&a.dehydrated!==null){if(e===null){if(!s)throw Error(u(318));if(s=n.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(u(317));s[Re]=n}else Rt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;he(n),s=!1}else s=qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return n.flags&256?(ln(n),n):(ln(n),null)}return ln(n),(n.flags&128)!==0?(n.lanes=t,n):(t=a!==null,e=e!==null&&e.memoizedState!==null,t&&(a=n.child,s=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(s=a.alternate.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==s&&(a.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),Al(n,n.updateQueue),he(n),null);case 4:return Wt(),e===null&&sr(n.stateNode.containerInfo),he(n),null;case 10:return Hn(n.type),he(n),null;case 19:if(Y(we),a=n.memoizedState,a===null)return he(n),null;if(s=(n.flags&128)!==0,l=a.rendering,l===null)if(s)us(a,!1);else{if(xe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(l=pl(e),l!==null){for(n.flags|=128,us(a,!1),e=l.updateQueue,n.updateQueue=e,Al(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Oc(t,e),t=t.sibling;return K(we,we.current&1|2),$&&Un(n,a.treeForkCount),n.child}e=e.sibling}a.tail!==null&&$e()>Ml&&(n.flags|=128,s=!0,us(a,!1),n.lanes=4194304)}else{if(!s)if(e=pl(l),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,Al(n,e),us(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!$)return he(n),null}else 2*$e()-a.renderingStartTime>Ml&&t!==536870912&&(n.flags|=128,s=!0,us(a,!1),n.lanes=4194304);a.isBackwards?(l.sibling=n.child,n.child=l):(e=a.last,e!==null?e.sibling=l:n.child=l,a.last=l)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=$e(),e.sibling=null,t=we.current,K(we,s?t&1|2:t&1),$&&Un(n,a.treeForkCount),e):(he(n),null);case 22:case 23:return ln(n),so(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(he(n),n.subtreeFlags&6&&(n.flags|=8192)):he(n),t=n.updateQueue,t!==null&&Al(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&Y(Bt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),Hn(Se),he(n),null;case 25:return null;case 30:return null}throw Error(u(156,n.tag))}function Nf(e,n){switch(Ki(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Hn(Se),Wt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ls(n),null;case 31:if(n.memoizedState!==null){if(ln(n),n.alternate===null)throw Error(u(340));Rt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ln(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(u(340));Rt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Y(we),null;case 4:return Wt(),null;case 10:return Hn(n.type),null;case 22:case 23:return ln(n),so(),e!==null&&Y(Bt),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Hn(Se),null;case 25:return null;default:return null}}function id(e,n){switch(Ki(n),n.tag){case 3:Hn(Se),Wt();break;case 26:case 27:case 5:Ls(n);break;case 4:Wt();break;case 31:n.memoizedState!==null&&ln(n);break;case 13:ln(n);break;case 19:Y(we);break;case 10:Hn(n.type);break;case 22:case 23:ln(n),so(),e!==null&&Y(Bt);break;case 24:Hn(Se)}}function ds(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var s=a.next;t=s;do{if((t.tag&e)===e){a=void 0;var l=t.create,o=t.inst;a=l(),o.destroy=a}t=t.next}while(t!==s)}}catch(r){ie(n,n.return,r)}}function dt(e,n,t){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var l=s.next;a=l;do{if((a.tag&e)===e){var o=a.inst,r=o.destroy;if(r!==void 0){o.destroy=void 0,s=n;var c=t,g=r;try{g()}catch(k){ie(s,c,k)}}}a=a.next}while(a!==l)}}catch(k){ie(n,n.return,k)}}function od(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Pc(n,t)}catch(a){ie(e,e.return,a)}}}function rd(e,n,t){t.props=Kt(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){ie(e,n,a)}}function ps(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof t=="function"?e.refCleanup=t(a):t.current=a}}catch(s){ie(e,n,s)}}function Mn(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(s){ie(e,n,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(s){ie(e,n,s)}else t.current=null}function cd(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(s){ie(e,e.return,s)}}function Uo(e,n,t){try{var a=e.stateNode;Wf(a,e.type,t,n),a[Ve]=n}catch(s){ie(e,e.return,s)}}function ud(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&bt(e.type)||e.tag===4}function Bo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ud(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&bt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ho(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=zn));else if(a!==4&&(a===27&&bt(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(Ho(e,n,t),e=e.sibling;e!==null;)Ho(e,n,t),e=e.sibling}function _l(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(a===27&&bt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(_l(e,n,t),e=e.sibling;e!==null;)_l(e,n,t),e=e.sibling}function dd(e){var n=e.stateNode,t=e.memoizedProps;try{for(var a=e.type,s=n.attributes;s.length;)n.removeAttributeNode(s[0]);He(n,a,t),n[Re]=e,n[Ve]=t}catch(l){ie(e,e.return,l)}}var Vn=!1,Ne=!1,Io=!1,pd=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Tf(e,n){if(e=e.containerInfo,or=Xl,e=Sc(e),Ei(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var s=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,r=-1,c=-1,g=0,k=0,S=e,v=null;n:for(;;){for(var x;S!==t||s!==0&&S.nodeType!==3||(r=o+s),S!==l||a!==0&&S.nodeType!==3||(c=o+a),S.nodeType===3&&(o+=S.nodeValue.length),(x=S.firstChild)!==null;)v=S,S=x;for(;;){if(S===e)break n;if(v===t&&++g===s&&(r=o),v===l&&++k===a&&(c=o),(x=S.nextSibling)!==null)break;S=v,v=S.parentNode}S=x}t=r===-1||c===-1?null:{start:r,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(rr={focusedElem:e,selectionRange:t},Xl=!1,Oe=n;Oe!==null;)if(n=Oe,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Oe=e;else for(;Oe!==null;){switch(n=Oe,l=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)s=e[t],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,t=n,s=l.memoizedProps,l=l.memoizedState,a=t.stateNode;try{var O=Kt(t.type,s);e=a.getSnapshotBeforeUpdate(O,l),a.__reactInternalSnapshotBeforeUpdate=e}catch(I){ie(t,t.return,I)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)dr(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":dr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=n.sibling,e!==null){e.return=n.return,Oe=e;break}Oe=n.return}}function md(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Qn(e,t),a&4&&ds(5,t);break;case 1:if(Qn(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(o){ie(t,t.return,o)}else{var s=Kt(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(s,n,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ie(t,t.return,o)}}a&64&&od(t),a&512&&ps(t,t.return);break;case 3:if(Qn(e,t),a&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{Pc(e,n)}catch(o){ie(t,t.return,o)}}break;case 27:n===null&&a&4&&dd(t);case 26:case 5:Qn(e,t),n===null&&a&4&&cd(t),a&512&&ps(t,t.return);break;case 12:Qn(e,t);break;case 31:Qn(e,t),a&4&&gd(e,t);break;case 13:Qn(e,t),a&4&&vd(e,t),a&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=Uf.bind(null,t),ah(e,t))));break;case 22:if(a=t.memoizedState!==null||Vn,!a){n=n!==null&&n.memoizedState!==null||Ne,s=Vn;var l=Ne;Vn=a,(Ne=n)&&!l?Xn(e,t,(t.subtreeFlags&8772)!==0):Qn(e,t),Vn=s,Ne=l}break;case 30:break;default:Qn(e,t)}}function fd(e){var n=e.alternate;n!==null&&(e.alternate=null,fd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&hi(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ve=null,Qe=!1;function qn(e,n,t){for(t=t.child;t!==null;)hd(e,n,t),t=t.sibling}function hd(e,n,t){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(La,t)}catch{}switch(t.tag){case 26:Ne||Mn(t,n),qn(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Ne||Mn(t,n);var a=ve,s=Qe;bt(t.type)&&(ve=t.stateNode,Qe=!1),qn(e,n,t),ks(t.stateNode),ve=a,Qe=s;break;case 5:Ne||Mn(t,n);case 6:if(a=ve,s=Qe,ve=null,qn(e,n,t),ve=a,Qe=s,ve!==null)if(Qe)try{(ve.nodeType===9?ve.body:ve.nodeName==="HTML"?ve.ownerDocument.body:ve).removeChild(t.stateNode)}catch(l){ie(t,n,l)}else try{ve.removeChild(t.stateNode)}catch(l){ie(t,n,l)}break;case 18:ve!==null&&(Qe?(e=ve,op(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Oa(e)):op(ve,t.stateNode));break;case 4:a=ve,s=Qe,ve=t.stateNode.containerInfo,Qe=!0,qn(e,n,t),ve=a,Qe=s;break;case 0:case 11:case 14:case 15:dt(2,t,n),Ne||dt(4,t,n),qn(e,n,t);break;case 1:Ne||(Mn(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&rd(t,n,a)),qn(e,n,t);break;case 21:qn(e,n,t);break;case 22:Ne=(a=Ne)||t.memoizedState!==null,qn(e,n,t),Ne=a;break;default:qn(e,n,t)}}function gd(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Oa(e)}catch(t){ie(n,n.return,t)}}}function vd(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Oa(e)}catch(t){ie(n,n.return,t)}}function Df(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new pd),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new pd),n;default:throw Error(u(435,e.tag))}}function Nl(e,n){var t=Df(e);n.forEach(function(a){if(!t.has(a)){t.add(a);var s=Bf.bind(null,e,a);a.then(s,s)}})}function Xe(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var s=t[a],l=e,o=n,r=o;e:for(;r!==null;){switch(r.tag){case 27:if(bt(r.type)){ve=r.stateNode,Qe=!1;break e}break;case 5:ve=r.stateNode,Qe=!1;break e;case 3:case 4:ve=r.stateNode.containerInfo,Qe=!0;break e}r=r.return}if(ve===null)throw Error(u(160));hd(l,o,s),ve=null,Qe=!1,l=s.alternate,l!==null&&(l.return=null),s.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)bd(n,e),n=n.sibling}var An=null;function bd(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xe(n,e),Ze(e),a&4&&(dt(3,e,e.return),ds(3,e),dt(5,e,e.return));break;case 1:Xe(n,e),Ze(e),a&512&&(Ne||t===null||Mn(t,t.return)),a&64&&Vn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var s=An;if(Xe(n,e),Ze(e),a&512&&(Ne||t===null||Mn(t,t.return)),a&4){var l=t!==null?t.memoizedState:null;if(a=e.memoizedState,t===null)if(a===null)if(e.stateNode===null){e:{a=e.type,t=e.memoizedProps,s=s.ownerDocument||s;n:switch(a){case"title":l=s.getElementsByTagName("title")[0],(!l||l[Ha]||l[Re]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=s.createElement(a),s.head.insertBefore(l,s.querySelector("head > title"))),He(l,a,t),l[Re]=e,Ee(l),a=l;break e;case"link":var o=bp("link","href",s).get(a+(t.href||""));if(o){for(var r=0;r<o.length;r++)if(l=o[r],l.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&l.getAttribute("rel")===(t.rel==null?null:t.rel)&&l.getAttribute("title")===(t.title==null?null:t.title)&&l.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){o.splice(r,1);break n}}l=s.createElement(a),He(l,a,t),s.head.appendChild(l);break;case"meta":if(o=bp("meta","content",s).get(a+(t.content||""))){for(r=0;r<o.length;r++)if(l=o[r],l.getAttribute("content")===(t.content==null?null:""+t.content)&&l.getAttribute("name")===(t.name==null?null:t.name)&&l.getAttribute("property")===(t.property==null?null:t.property)&&l.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&l.getAttribute("charset")===(t.charSet==null?null:t.charSet)){o.splice(r,1);break n}}l=s.createElement(a),He(l,a,t),s.head.appendChild(l);break;default:throw Error(u(468,a))}l[Re]=e,Ee(l),a=l}e.stateNode=a}else yp(s,e.type,e.stateNode);else e.stateNode=vp(s,a,e.memoizedProps);else l!==a?(l===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):l.count--,a===null?yp(s,e.type,e.stateNode):vp(s,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Uo(e,e.memoizedProps,t.memoizedProps)}break;case 27:Xe(n,e),Ze(e),a&512&&(Ne||t===null||Mn(t,t.return)),t!==null&&a&4&&Uo(e,e.memoizedProps,t.memoizedProps);break;case 5:if(Xe(n,e),Ze(e),a&512&&(Ne||t===null||Mn(t,t.return)),e.flags&32){s=e.stateNode;try{ta(s,"")}catch(O){ie(e,e.return,O)}}a&4&&e.stateNode!=null&&(s=e.memoizedProps,Uo(e,s,t!==null?t.memoizedProps:s)),a&1024&&(Io=!0);break;case 6:if(Xe(n,e),Ze(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a}catch(O){ie(e,e.return,O)}}break;case 3:if(Kl=null,s=An,An=Yl(n.containerInfo),Xe(n,e),An=s,Ze(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Oa(n.containerInfo)}catch(O){ie(e,e.return,O)}Io&&(Io=!1,yd(e));break;case 4:a=An,An=Yl(e.stateNode.containerInfo),Xe(n,e),Ze(e),An=a;break;case 12:Xe(n,e),Ze(e);break;case 31:Xe(n,e),Ze(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Nl(e,a)));break;case 13:Xe(n,e),Ze(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Dl=$e()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Nl(e,a)));break;case 22:s=e.memoizedState!==null;var c=t!==null&&t.memoizedState!==null,g=Vn,k=Ne;if(Vn=g||s,Ne=k||c,Xe(n,e),Ne=k,Vn=g,Ze(e),a&8192)e:for(n=e.stateNode,n._visibility=s?n._visibility&-2:n._visibility|1,s&&(t===null||c||Vn||Ne||Vt(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){c=t=n;try{if(l=c.stateNode,s)o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{r=c.stateNode;var S=c.memoizedProps.style,v=S!=null&&S.hasOwnProperty("display")?S.display:null;r.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(O){ie(c,c.return,O)}}}else if(n.tag===6){if(t===null){c=n;try{c.stateNode.nodeValue=s?"":c.memoizedProps}catch(O){ie(c,c.return,O)}}}else if(n.tag===18){if(t===null){c=n;try{var x=c.stateNode;s?rp(x,!0):rp(c.stateNode,!1)}catch(O){ie(c,c.return,O)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,Nl(e,t))));break;case 19:Xe(n,e),Ze(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Nl(e,a)));break;case 30:break;case 21:break;default:Xe(n,e),Ze(e)}}function Ze(e){var n=e.flags;if(n&2){try{for(var t,a=e.return;a!==null;){if(ud(a)){t=a;break}a=a.return}if(t==null)throw Error(u(160));switch(t.tag){case 27:var s=t.stateNode,l=Bo(e);_l(e,l,s);break;case 5:var o=t.stateNode;t.flags&32&&(ta(o,""),t.flags&=-33);var r=Bo(e);_l(e,r,o);break;case 3:case 4:var c=t.stateNode.containerInfo,g=Bo(e);Ho(e,g,c);break;default:throw Error(u(161))}}catch(k){ie(e,e.return,k)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function yd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;yd(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Qn(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)md(e,n.alternate,n),n=n.sibling}function Vt(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:dt(4,n,n.return),Vt(n);break;case 1:Mn(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&rd(n,n.return,t),Vt(n);break;case 27:ks(n.stateNode);case 26:case 5:Mn(n,n.return),Vt(n);break;case 22:n.memoizedState===null&&Vt(n);break;case 30:Vt(n);break;default:Vt(n)}e=e.sibling}}function Xn(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,s=e,l=n,o=l.flags;switch(l.tag){case 0:case 11:case 15:Xn(s,l,t),ds(4,l);break;case 1:if(Xn(s,l,t),a=l,s=a.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(g){ie(a,a.return,g)}if(a=l,s=a.updateQueue,s!==null){var r=a.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)Jc(c[s],r)}catch(g){ie(a,a.return,g)}}t&&o&64&&od(l),ps(l,l.return);break;case 27:dd(l);case 26:case 5:Xn(s,l,t),t&&a===null&&o&4&&cd(l),ps(l,l.return);break;case 12:Xn(s,l,t);break;case 31:Xn(s,l,t),t&&o&4&&gd(s,l);break;case 13:Xn(s,l,t),t&&o&4&&vd(s,l);break;case 22:l.memoizedState===null&&Xn(s,l,t),ps(l,l.return);break;case 30:break;default:Xn(s,l,t)}n=n.sibling}}function Yo(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Fa(t))}function Go(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Fa(e))}function _n(e,n,t,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)xd(e,n,t,a),n=n.sibling}function xd(e,n,t,a){var s=n.flags;switch(n.tag){case 0:case 11:case 15:_n(e,n,t,a),s&2048&&ds(9,n);break;case 1:_n(e,n,t,a);break;case 3:_n(e,n,t,a),s&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Fa(e)));break;case 12:if(s&2048){_n(e,n,t,a),e=n.stateNode;try{var l=n.memoizedProps,o=l.id,r=l.onPostCommit;typeof r=="function"&&r(o,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(c){ie(n,n.return,c)}}else _n(e,n,t,a);break;case 31:_n(e,n,t,a);break;case 13:_n(e,n,t,a);break;case 23:break;case 22:l=n.stateNode,o=n.alternate,n.memoizedState!==null?l._visibility&2?_n(e,n,t,a):ms(e,n):l._visibility&2?_n(e,n,t,a):(l._visibility|=2,wa(e,n,t,a,(n.subtreeFlags&10256)!==0||!1)),s&2048&&Yo(o,n);break;case 24:_n(e,n,t,a),s&2048&&Go(n.alternate,n);break;default:_n(e,n,t,a)}}function wa(e,n,t,a,s){for(s=s&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var l=e,o=n,r=t,c=a,g=o.flags;switch(o.tag){case 0:case 11:case 15:wa(l,o,r,c,s),ds(8,o);break;case 23:break;case 22:var k=o.stateNode;o.memoizedState!==null?k._visibility&2?wa(l,o,r,c,s):ms(l,o):(k._visibility|=2,wa(l,o,r,c,s)),s&&g&2048&&Yo(o.alternate,o);break;case 24:wa(l,o,r,c,s),s&&g&2048&&Go(o.alternate,o);break;default:wa(l,o,r,c,s)}n=n.sibling}}function ms(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,s=a.flags;switch(a.tag){case 22:ms(t,a),s&2048&&Yo(a.alternate,a);break;case 24:ms(t,a),s&2048&&Go(a.alternate,a);break;default:ms(t,a)}n=n.sibling}}var fs=8192;function Ca(e,n,t){if(e.subtreeFlags&fs)for(e=e.child;e!==null;)kd(e,n,t),e=e.sibling}function kd(e,n,t){switch(e.tag){case 26:Ca(e,n,t),e.flags&fs&&e.memoizedState!==null&&hh(t,An,e.memoizedState,e.memoizedProps);break;case 5:Ca(e,n,t);break;case 3:case 4:var a=An;An=Yl(e.stateNode.containerInfo),Ca(e,n,t),An=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=fs,fs=16777216,Ca(e,n,t),fs=a):Ca(e,n,t));break;default:Ca(e,n,t)}}function wd(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function hs(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Oe=a,Sd(a,e)}wd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Cd(e),e=e.sibling}function Cd(e){switch(e.tag){case 0:case 11:case 15:hs(e),e.flags&2048&&dt(9,e,e.return);break;case 3:hs(e);break;case 12:hs(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Tl(e)):hs(e);break;default:hs(e)}}function Tl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Oe=a,Sd(a,e)}wd(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:dt(8,n,n.return),Tl(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,Tl(n));break;default:Tl(n)}e=e.sibling}}function Sd(e,n){for(;Oe!==null;){var t=Oe;switch(t.tag){case 0:case 11:case 15:dt(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Fa(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,Oe=a;else e:for(t=e;Oe!==null;){a=Oe;var s=a.sibling,l=a.return;if(fd(a),a===t){Oe=null;break e}if(s!==null){s.return=l,Oe=s;break e}Oe=l}}}var Mf={getCacheForType:function(e){var n=Ue(Se),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return Ue(Se).controller.signal}},jf=typeof WeakMap=="function"?WeakMap:Map,se=0,me=null,W=null,P=0,le=0,on=null,pt=!1,Sa=!1,Ko=!1,Zn=0,xe=0,mt=0,qt=0,Vo=0,rn=0,Aa=0,gs=null,We=null,qo=!1,Dl=0,Ad=0,Ml=1/0,jl=null,ft=null,De=0,ht=null,_a=null,Wn=0,Qo=0,Xo=null,_d=null,vs=0,Zo=null;function cn(){return(se&2)!==0&&P!==0?P&-P:f.T!==null?er():Gr()}function Nd(){if(rn===0)if((P&536870912)===0||$){var e=Hs;Hs<<=1,(Hs&3932160)===0&&(Hs=262144),rn=e}else rn=536870912;return e=sn.current,e!==null&&(e.flags|=32),rn}function Je(e,n,t){(e===me&&(le===2||le===9)||e.cancelPendingCommit!==null)&&(Na(e,0),gt(e,P,rn,!1)),Ba(e,t),((se&2)===0||e!==me)&&(e===me&&((se&2)===0&&(qt|=t),xe===4&&gt(e,P,rn,!1)),jn(e))}function Td(e,n,t){if((se&6)!==0)throw Error(u(327));var a=!t&&(n&127)===0&&(n&e.expiredLanes)===0||Ua(e,n),s=a?zf(e,n):Jo(e,n,!0),l=a;do{if(s===0){Sa&&!a&&gt(e,n,0,!1);break}else{if(t=e.current.alternate,l&&!Ef(t)){s=Jo(e,n,!1),l=!1;continue}if(s===2){if(l=n,e.errorRecoveryDisabledLanes&l)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){n=o;e:{var r=e;s=gs;var c=r.current.memoizedState.isDehydrated;if(c&&(Na(r,o).flags|=256),o=Jo(r,o,!1),o!==2){if(Ko&&!c){r.errorRecoveryDisabledLanes|=l,qt|=l,s=4;break e}l=We,We=s,l!==null&&(We===null?We=l:We.push.apply(We,l))}s=o}if(l=!1,s!==2)continue}}if(s===1){Na(e,0),gt(e,n,0,!0);break}e:{switch(a=e,l=s,l){case 0:case 1:throw Error(u(345));case 4:if((n&4194048)!==n)break;case 6:gt(a,n,rn,!pt);break e;case 2:We=null;break;case 3:case 5:break;default:throw Error(u(329))}if((n&62914560)===n&&(s=Dl+300-$e(),10<s)){if(gt(a,n,rn,!pt),Ys(a,0,!0)!==0)break e;Wn=n,a.timeoutHandle=lp(Dd.bind(null,a,t,We,jl,qo,n,rn,qt,Aa,pt,l,"Throttled",-0,0),s);break e}Dd(a,t,We,jl,qo,n,rn,qt,Aa,pt,l,null,-0,0)}}break}while(!0);jn(e)}function Dd(e,n,t,a,s,l,o,r,c,g,k,S,v,x){if(e.timeoutHandle=-1,S=n.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zn},kd(n,l,S);var O=(l&62914560)===l?Dl-$e():(l&4194048)===l?Ad-$e():0;if(O=gh(S,O),O!==null){Wn=l,e.cancelPendingCommit=O(Ud.bind(null,e,n,l,t,a,s,o,r,c,k,S,null,v,x)),gt(e,l,o,!g);return}}Ud(e,n,l,t,a,s,o,r,c)}function Ef(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var s=t[a],l=s.getSnapshot;s=s.value;try{if(!tn(l(),s))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function gt(e,n,t,a){n&=~Vo,n&=~qt,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var s=n;0<s;){var l=31-nn(s),o=1<<l;a[l]=-1,s&=~o}t!==0&&Hr(e,t,n)}function El(){return(se&6)===0?(bs(0),!1):!0}function Wo(){if(W!==null){if(le===0)var e=W.return;else e=W,Bn=Lt=null,uo(e),va=null,es=0,e=W;for(;e!==null;)id(e.alternate,e),e=e.return;W=null}}function Na(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Ff(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Wn=0,Wo(),me=e,W=t=Ln(e.current,null),P=n,le=0,on=null,pt=!1,Sa=Ua(e,n),Ko=!1,Aa=rn=Vo=qt=mt=xe=0,We=gs=null,qo=!1,(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var s=31-nn(a),l=1<<s;n|=e[s],a&=~l}return Zn=n,$s(),t}function Md(e,n){V=null,f.H=rs,n===ga||n===ol?(n=Qc(),le=3):n===Fi?(n=Qc(),le=4):le=n===No?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,on=n,W===null&&(xe=1,kl(e,hn(n,e.current)))}function jd(){var e=sn.current;return e===null?!0:(P&4194048)===P?yn===null:(P&62914560)===P||(P&536870912)!==0?e===yn:!1}function Ed(){var e=f.H;return f.H=rs,e===null?rs:e}function Od(){var e=f.A;return f.A=Mf,e}function Ol(){xe=4,pt||(P&4194048)!==P&&sn.current!==null||(Sa=!0),(mt&134217727)===0&&(qt&134217727)===0||me===null||gt(me,P,rn,!1)}function Jo(e,n,t){var a=se;se|=2;var s=Ed(),l=Od();(me!==e||P!==n)&&(jl=null,Na(e,n)),n=!1;var o=xe;e:do try{if(le!==0&&W!==null){var r=W,c=on;switch(le){case 8:Wo(),o=6;break e;case 3:case 2:case 9:case 6:sn.current===null&&(n=!0);var g=le;if(le=0,on=null,Ta(e,r,c,g),t&&Sa){o=0;break e}break;default:g=le,le=0,on=null,Ta(e,r,c,g)}}Of(),o=xe;break}catch(k){Md(e,k)}while(!0);return n&&e.shellSuspendCounter++,Bn=Lt=null,se=a,f.H=s,f.A=l,W===null&&(me=null,P=0,$s()),o}function Of(){for(;W!==null;)zd(W)}function zf(e,n){var t=se;se|=2;var a=Ed(),s=Od();me!==e||P!==n?(jl=null,Ml=$e()+500,Na(e,n)):Sa=Ua(e,n);e:do try{if(le!==0&&W!==null){n=W;var l=on;n:switch(le){case 1:le=0,on=null,Ta(e,n,l,1);break;case 2:case 9:if(Vc(l)){le=0,on=null,Rd(n);break}n=function(){le!==2&&le!==9||me!==e||(le=7),jn(e)},l.then(n,n);break e;case 3:le=7;break e;case 4:le=5;break e;case 7:Vc(l)?(le=0,on=null,Rd(n)):(le=0,on=null,Ta(e,n,l,7));break;case 5:var o=null;switch(W.tag){case 26:o=W.memoizedState;case 5:case 27:var r=W;if(o?xp(o):r.stateNode.complete){le=0,on=null;var c=r.sibling;if(c!==null)W=c;else{var g=r.return;g!==null?(W=g,zl(g)):W=null}break n}}le=0,on=null,Ta(e,n,l,5);break;case 6:le=0,on=null,Ta(e,n,l,6);break;case 8:Wo(),xe=6;break e;default:throw Error(u(462))}}Rf();break}catch(k){Md(e,k)}while(!0);return Bn=Lt=null,f.H=a,f.A=s,se=t,W!==null?0:(me=null,P=0,$s(),xe)}function Rf(){for(;W!==null&&!am();)zd(W)}function zd(e){var n=sd(e.alternate,e,Zn);e.memoizedProps=e.pendingProps,n===null?zl(e):W=n}function Rd(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=Fu(t,n,n.pendingProps,n.type,void 0,P);break;case 11:n=Fu(t,n,n.pendingProps,n.type.render,n.ref,P);break;case 5:uo(n);default:id(t,n),n=W=Oc(n,Zn),n=sd(t,n,Zn)}e.memoizedProps=e.pendingProps,n===null?zl(e):W=n}function Ta(e,n,t,a){Bn=Lt=null,uo(n),va=null,es=0;var s=n.return;try{if(Cf(e,s,n,t,P)){xe=1,kl(e,hn(t,e.current)),W=null;return}}catch(l){if(s!==null)throw W=s,l;xe=1,kl(e,hn(t,e.current)),W=null;return}n.flags&32768?($||a===1?e=!0:Sa||(P&536870912)!==0?e=!1:(pt=e=!0,(a===2||a===9||a===3||a===6)&&(a=sn.current,a!==null&&a.tag===13&&(a.flags|=16384))),Ld(n,e)):zl(n)}function zl(e){var n=e;do{if((n.flags&32768)!==0){Ld(n,pt);return}e=n.return;var t=_f(n.alternate,n,Zn);if(t!==null){W=t;return}if(n=n.sibling,n!==null){W=n;return}W=n=e}while(n!==null);xe===0&&(xe=5)}function Ld(e,n){do{var t=Nf(e.alternate,e);if(t!==null){t.flags&=32767,W=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){W=e;return}W=e=t}while(e!==null);xe=6,W=null}function Ud(e,n,t,a,s,l,o,r,c){e.cancelPendingCommit=null;do Rl();while(De!==0);if((se&6)!==0)throw Error(u(327));if(n!==null){if(n===e.current)throw Error(u(177));if(l=n.lanes|n.childLanes,l|=Ui,mm(e,t,l,o,r,c),e===me&&(W=me=null,P=0),_a=n,ht=e,Wn=t,Qo=l,Xo=s,_d=a,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Hf(Us,function(){return Gd(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=f.T,f.T=null,s=N.p,N.p=2,o=se,se|=4;try{Tf(e,n,t)}finally{se=o,N.p=s,f.T=a}}De=1,Bd(),Hd(),Id()}}function Bd(){if(De===1){De=0;var e=ht,n=_a,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=f.T,f.T=null;var a=N.p;N.p=2;var s=se;se|=4;try{bd(n,e);var l=rr,o=Sc(e.containerInfo),r=l.focusedElem,c=l.selectionRange;if(o!==r&&r&&r.ownerDocument&&Cc(r.ownerDocument.documentElement,r)){if(c!==null&&Ei(r)){var g=c.start,k=c.end;if(k===void 0&&(k=g),"selectionStart"in r)r.selectionStart=g,r.selectionEnd=Math.min(k,r.value.length);else{var S=r.ownerDocument||document,v=S&&S.defaultView||window;if(v.getSelection){var x=v.getSelection(),O=r.textContent.length,I=Math.min(c.start,O),ue=c.end===void 0?I:Math.min(c.end,O);!x.extend&&I>ue&&(o=ue,ue=I,I=o);var m=wc(r,I),d=wc(r,ue);if(m&&d&&(x.rangeCount!==1||x.anchorNode!==m.node||x.anchorOffset!==m.offset||x.focusNode!==d.node||x.focusOffset!==d.offset)){var h=S.createRange();h.setStart(m.node,m.offset),x.removeAllRanges(),I>ue?(x.addRange(h),x.extend(d.node,d.offset)):(h.setEnd(d.node,d.offset),x.addRange(h))}}}}for(S=[],x=r;x=x.parentNode;)x.nodeType===1&&S.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<S.length;r++){var C=S[r];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}Xl=!!or,rr=or=null}finally{se=s,N.p=a,f.T=t}}e.current=n,De=2}}function Hd(){if(De===2){De=0;var e=ht,n=_a,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=f.T,f.T=null;var a=N.p;N.p=2;var s=se;se|=4;try{md(e,n.alternate,n)}finally{se=s,N.p=a,f.T=t}}De=3}}function Id(){if(De===4||De===3){De=0,sm();var e=ht,n=_a,t=Wn,a=_d;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?De=5:(De=0,_a=ht=null,Yd(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(ft=null),mi(t),n=n.stateNode,en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(La,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=f.T,s=N.p,N.p=2,f.T=null;try{for(var l=e.onRecoverableError,o=0;o<a.length;o++){var r=a[o];l(r.value,{componentStack:r.stack})}}finally{f.T=n,N.p=s}}(Wn&3)!==0&&Rl(),jn(e),s=e.pendingLanes,(t&261930)!==0&&(s&42)!==0?e===Zo?vs++:(vs=0,Zo=e):vs=0,bs(0)}}function Yd(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Fa(n)))}function Rl(){return Bd(),Hd(),Id(),Gd()}function Gd(){if(De!==5)return!1;var e=ht,n=Qo;Qo=0;var t=mi(Wn),a=f.T,s=N.p;try{N.p=32>t?32:t,f.T=null,t=Xo,Xo=null;var l=ht,o=Wn;if(De=0,_a=ht=null,Wn=0,(se&6)!==0)throw Error(u(331));var r=se;if(se|=4,Cd(l.current),xd(l,l.current,o,t),se=r,bs(0,!1),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(La,l)}catch{}return!0}finally{N.p=s,f.T=a,Yd(e,n)}}function Kd(e,n,t){n=hn(t,n),n=_o(e.stateNode,n,2),e=rt(e,n,2),e!==null&&(Ba(e,2),jn(e))}function ie(e,n,t){if(e.tag===3)Kd(e,e,t);else for(;n!==null;){if(n.tag===3){Kd(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ft===null||!ft.has(a))){e=hn(t,e),t=Vu(2),a=rt(n,t,2),a!==null&&(qu(t,a,n,e),Ba(a,2),jn(a));break}}n=n.return}}function Po(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new jf;var s=new Set;a.set(n,s)}else s=a.get(n),s===void 0&&(s=new Set,a.set(n,s));s.has(t)||(Ko=!0,s.add(t),e=Lf.bind(null,e,n,t),n.then(e,e))}function Lf(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,me===e&&(P&t)===t&&(xe===4||xe===3&&(P&62914560)===P&&300>$e()-Dl?(se&2)===0&&Na(e,0):Vo|=t,Aa===P&&(Aa=0)),jn(e)}function Vd(e,n){n===0&&(n=Br()),e=Ot(e,n),e!==null&&(Ba(e,n),jn(e))}function Uf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Vd(e,t)}function Bf(e,n){var t=0;switch(e.tag){case 31:case 13:var a=e.stateNode,s=e.memoizedState;s!==null&&(t=s.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(n),Vd(e,t)}function Hf(e,n){return ci(e,n)}var Ll=null,Da=null,Fo=!1,Ul=!1,$o=!1,vt=0;function jn(e){e!==Da&&e.next===null&&(Da===null?Ll=Da=e:Da=Da.next=e),Ul=!0,Fo||(Fo=!0,Yf())}function bs(e,n){if(!$o&&Ul){$o=!0;do for(var t=!1,a=Ll;a!==null;){if(e!==0){var s=a.pendingLanes;if(s===0)var l=0;else{var o=a.suspendedLanes,r=a.pingedLanes;l=(1<<31-nn(42|e)+1)-1,l&=s&~(o&~r),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(t=!0,Zd(a,l))}else l=P,l=Ys(a,a===me?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(l&3)===0||Ua(a,l)||(t=!0,Zd(a,l));a=a.next}while(t);$o=!1}}function If(){qd()}function qd(){Ul=Fo=!1;var e=0;vt!==0&&Pf()&&(e=vt);for(var n=$e(),t=null,a=Ll;a!==null;){var s=a.next,l=Qd(a,n);l===0?(a.next=null,t===null?Ll=s:t.next=s,s===null&&(Da=t)):(t=a,(e!==0||(l&3)!==0)&&(Ul=!0)),a=s}De!==0&&De!==5||bs(e),vt!==0&&(vt=0)}function Qd(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,s=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var o=31-nn(l),r=1<<o,c=s[o];c===-1?((r&t)===0||(r&a)!==0)&&(s[o]=pm(r,n)):c<=n&&(e.expiredLanes|=r),l&=~r}if(n=me,t=P,t=Ys(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,t===0||e===n&&(le===2||le===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&ui(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Ua(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&ui(a),mi(t)){case 2:case 8:t=Lr;break;case 32:t=Us;break;case 268435456:t=Ur;break;default:t=Us}return a=Xd.bind(null,e),t=ci(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&ui(a),e.callbackPriority=2,e.callbackNode=null,2}function Xd(e,n){if(De!==0&&De!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Rl()&&e.callbackNode!==t)return null;var a=P;return a=Ys(e,e===me?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Td(e,a,n),Qd(e,$e()),e.callbackNode!=null&&e.callbackNode===t?Xd.bind(null,e):null)}function Zd(e,n){if(Rl())return null;Td(e,n,!0)}function Yf(){$f(function(){(se&6)!==0?ci(Rr,If):qd()})}function er(){if(vt===0){var e=fa;e===0&&(e=Bs,Bs<<=1,(Bs&261888)===0&&(Bs=256)),vt=e}return vt}function Wd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:qs(""+e)}function Jd(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function Gf(e,n,t,a,s){if(n==="submit"&&t&&t.stateNode===s){var l=Wd((s[Ve]||null).action),o=a.submitter;o&&(n=(n=o[Ve]||null)?Wd(n.formAction):o.getAttribute("formAction"),n!==null&&(l=n,o=null));var r=new Ws("action","action",null,a,s);e.push({event:r,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(vt!==0){var c=o?Jd(s,o):new FormData(s);xo(t,{pending:!0,data:c,method:s.method,action:l},null,c)}}else typeof l=="function"&&(r.preventDefault(),c=o?Jd(s,o):new FormData(s),xo(t,{pending:!0,data:c,method:s.method,action:l},l,c))},currentTarget:s}]})}}for(var nr=0;nr<Li.length;nr++){var tr=Li[nr],Kf=tr.toLowerCase(),Vf=tr[0].toUpperCase()+tr.slice(1);Sn(Kf,"on"+Vf)}Sn(Nc,"onAnimationEnd"),Sn(Tc,"onAnimationIteration"),Sn(Dc,"onAnimationStart"),Sn("dblclick","onDoubleClick"),Sn("focusin","onFocus"),Sn("focusout","onBlur"),Sn(lf,"onTransitionRun"),Sn(of,"onTransitionStart"),Sn(rf,"onTransitionCancel"),Sn(Mc,"onTransitionEnd"),ea("onMouseEnter",["mouseout","mouseover"]),ea("onMouseLeave",["mouseout","mouseover"]),ea("onPointerEnter",["pointerout","pointerover"]),ea("onPointerLeave",["pointerout","pointerover"]),Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ys="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qf=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ys));function Pd(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],s=a.event;a=a.listeners;e:{var l=void 0;if(n)for(var o=a.length-1;0<=o;o--){var r=a[o],c=r.instance,g=r.currentTarget;if(r=r.listener,c!==l&&s.isPropagationStopped())break e;l=r,s.currentTarget=g;try{l(s)}catch(k){Fs(k)}s.currentTarget=null,l=c}else for(o=0;o<a.length;o++){if(r=a[o],c=r.instance,g=r.currentTarget,r=r.listener,c!==l&&s.isPropagationStopped())break e;l=r,s.currentTarget=g;try{l(s)}catch(k){Fs(k)}s.currentTarget=null,l=c}}}}function J(e,n){var t=n[fi];t===void 0&&(t=n[fi]=new Set);var a=e+"__bubble";t.has(a)||(Fd(n,e,2,!1),t.add(a))}function ar(e,n,t){var a=0;n&&(a|=4),Fd(t,e,a,n)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function sr(e){if(!e[Bl]){e[Bl]=!0,qr.forEach(function(t){t!=="selectionchange"&&(qf.has(t)||ar(t,!1,e),ar(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Bl]||(n[Bl]=!0,ar("selectionchange",!1,n))}}function Fd(e,n,t,a){switch(Np(n)){case 2:var s=yh;break;case 8:s=xh;break;default:s=yr}t=s.bind(null,n,t,e),s=void 0,!Ci||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(s=!0),a?s!==void 0?e.addEventListener(n,t,{capture:!0,passive:s}):e.addEventListener(n,t,!0):s!==void 0?e.addEventListener(n,t,{passive:s}):e.addEventListener(n,t,!1)}function lr(e,n,t,a,s){var l=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var r=a.stateNode.containerInfo;if(r===s)break;if(o===4)for(o=a.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===s)return;o=o.return}for(;r!==null;){if(o=Pt(r),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){a=l=o;continue e}r=r.parentNode}}a=a.return}ac(function(){var g=l,k=ki(t),S=[];e:{var v=jc.get(e);if(v!==void 0){var x=Ws,O=e;switch(e){case"keypress":if(Xs(t)===0)break e;case"keydown":case"keyup":x=Um;break;case"focusin":O="focus",x=Ni;break;case"focusout":O="blur",x=Ni;break;case"beforeblur":case"afterblur":x=Ni;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=ic;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Am;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Im;break;case Nc:case Tc:case Dc:x=Tm;break;case Mc:x=Gm;break;case"scroll":case"scrollend":x=Cm;break;case"wheel":x=Vm;break;case"copy":case"cut":case"paste":x=Mm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=rc;break;case"toggle":case"beforetoggle":x=Qm}var I=(n&4)!==0,ue=!I&&(e==="scroll"||e==="scrollend"),m=I?v!==null?v+"Capture":null:v;I=[];for(var d=g,h;d!==null;){var C=d;if(h=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||h===null||m===null||(C=Ya(d,m),C!=null&&I.push(xs(d,C,h))),ue)break;d=d.return}0<I.length&&(v=new x(v,O,null,t,k),S.push({event:v,listeners:I}))}}if((n&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",v&&t!==xi&&(O=t.relatedTarget||t.fromElement)&&(Pt(O)||O[Jt]))break e;if((x||v)&&(v=k.window===k?k:(v=k.ownerDocument)?v.defaultView||v.parentWindow:window,x?(O=t.relatedTarget||t.toElement,x=g,O=O?Pt(O):null,O!==null&&(ue=A(O),I=O.tag,O!==ue||I!==5&&I!==27&&I!==6)&&(O=null)):(x=null,O=g),x!==O)){if(I=ic,C="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(I=rc,C="onPointerLeave",m="onPointerEnter",d="pointer"),ue=x==null?v:Ia(x),h=O==null?v:Ia(O),v=new I(C,d+"leave",x,t,k),v.target=ue,v.relatedTarget=h,C=null,Pt(k)===g&&(I=new I(m,d+"enter",O,t,k),I.target=h,I.relatedTarget=ue,C=I),ue=C,x&&O)n:{for(I=Qf,m=x,d=O,h=0,C=m;C;C=I(C))h++;C=0;for(var B=d;B;B=I(B))C++;for(;0<h-C;)m=I(m),h--;for(;0<C-h;)d=I(d),C--;for(;h--;){if(m===d||d!==null&&m===d.alternate){I=m;break n}m=I(m),d=I(d)}I=null}else I=null;x!==null&&$d(S,v,x,I,!1),O!==null&&ue!==null&&$d(S,ue,O,I,!0)}}e:{if(v=g?Ia(g):window,x=v.nodeName&&v.nodeName.toLowerCase(),x==="select"||x==="input"&&v.type==="file")var te=gc;else if(fc(v))if(vc)te=tf;else{te=ef;var L=$m}else x=v.nodeName,!x||x.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?g&&yi(g.elementType)&&(te=gc):te=nf;if(te&&(te=te(e,g))){hc(S,te,t,k);break e}L&&L(e,v,g),e==="focusout"&&g&&v.type==="number"&&g.memoizedProps.value!=null&&bi(v,"number",v.value)}switch(L=g?Ia(g):window,e){case"focusin":(fc(L)||L.contentEditable==="true")&&(ia=L,Oi=g,Wa=null);break;case"focusout":Wa=Oi=ia=null;break;case"mousedown":zi=!0;break;case"contextmenu":case"mouseup":case"dragend":zi=!1,Ac(S,t,k);break;case"selectionchange":if(sf)break;case"keydown":case"keyup":Ac(S,t,k)}var Q;if(Di)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else la?pc(e,t)&&(F="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(F="onCompositionStart");F&&(cc&&t.locale!=="ko"&&(la||F!=="onCompositionStart"?F==="onCompositionEnd"&&la&&(Q=sc()):(nt=k,Si="value"in nt?nt.value:nt.textContent,la=!0)),L=Hl(g,F),0<L.length&&(F=new oc(F,e,null,t,k),S.push({event:F,listeners:L}),Q?F.data=Q:(Q=mc(t),Q!==null&&(F.data=Q)))),(Q=Zm?Wm(e,t):Jm(e,t))&&(F=Hl(g,"onBeforeInput"),0<F.length&&(L=new oc("onBeforeInput","beforeinput",null,t,k),S.push({event:L,listeners:F}),L.data=Q)),Gf(S,e,g,t,k)}Pd(S,n)})}function xs(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Hl(e,n){for(var t=n+"Capture",a=[];e!==null;){var s=e,l=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||l===null||(s=Ya(e,t),s!=null&&a.unshift(xs(e,s,l)),s=Ya(e,n),s!=null&&a.push(xs(e,s,l))),e.tag===3)return a;e=e.return}return[]}function Qf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $d(e,n,t,a,s){for(var l=n._reactName,o=[];t!==null&&t!==a;){var r=t,c=r.alternate,g=r.stateNode;if(r=r.tag,c!==null&&c===a)break;r!==5&&r!==26&&r!==27||g===null||(c=g,s?(g=Ya(t,l),g!=null&&o.unshift(xs(t,g,c))):s||(g=Ya(t,l),g!=null&&o.push(xs(t,g,c)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Xf=/\r\n?/g,Zf=/\u0000|\uFFFD/g;function ep(e){return(typeof e=="string"?e:""+e).replace(Xf,`
`).replace(Zf,"")}function np(e,n){return n=ep(n),ep(e)===n}function ce(e,n,t,a,s,l){switch(t){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||ta(e,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&ta(e,""+a);break;case"className":Ks(e,"class",a);break;case"tabIndex":Ks(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ks(e,t,a);break;case"style":nc(e,a,l);break;case"data":if(n!=="object"){Ks(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=qs(""+a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(t==="formAction"?(n!=="input"&&ce(e,n,"name",s.name,s,null),ce(e,n,"formEncType",s.formEncType,s,null),ce(e,n,"formMethod",s.formMethod,s,null),ce(e,n,"formTarget",s.formTarget,s,null)):(ce(e,n,"encType",s.encType,s,null),ce(e,n,"method",s.method,s,null),ce(e,n,"target",s.target,s,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=qs(""+a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=zn);break;case"onScroll":a!=null&&J("scroll",e);break;case"onScrollEnd":a!=null&&J("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(t=a.__html,t!=null){if(s.children!=null)throw Error(u(60));e.innerHTML=t}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=qs(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""+a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":J("beforetoggle",e),J("toggle",e),Gs(e,"popover",a);break;case"xlinkActuate":On(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":On(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":On(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":On(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":On(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":On(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":On(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":On(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":On(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Gs(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=km.get(t)||t,Gs(e,t,a))}}function ir(e,n,t,a,s,l){switch(t){case"style":nc(e,a,l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(t=a.__html,t!=null){if(s.children!=null)throw Error(u(60));e.innerHTML=t}}break;case"children":typeof a=="string"?ta(e,a):(typeof a=="number"||typeof a=="bigint")&&ta(e,""+a);break;case"onScroll":a!=null&&J("scroll",e);break;case"onScrollEnd":a!=null&&J("scrollend",e);break;case"onClick":a!=null&&(e.onclick=zn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qr.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(s=t.endsWith("Capture"),n=t.slice(2,s?t.length-7:void 0),l=e[Ve]||null,l=l!=null?l[t]:null,typeof l=="function"&&e.removeEventListener(n,l,s),typeof a=="function")){typeof l!="function"&&l!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,a,s);break e}t in e?e[t]=a:a===!0?e.setAttribute(t,""):Gs(e,t,a)}}}function He(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":J("error",e),J("load",e);var a=!1,s=!1,l;for(l in t)if(t.hasOwnProperty(l)){var o=t[l];if(o!=null)switch(l){case"src":a=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:ce(e,n,l,o,t,null)}}s&&ce(e,n,"srcSet",t.srcSet,t,null),a&&ce(e,n,"src",t.src,t,null);return;case"input":J("invalid",e);var r=l=o=s=null,c=null,g=null;for(a in t)if(t.hasOwnProperty(a)){var k=t[a];if(k!=null)switch(a){case"name":s=k;break;case"type":o=k;break;case"checked":c=k;break;case"defaultChecked":g=k;break;case"value":l=k;break;case"defaultValue":r=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(u(137,n));break;default:ce(e,n,a,k,t,null)}}Pr(e,l,r,c,g,o,s,!1);return;case"select":J("invalid",e),a=o=l=null;for(s in t)if(t.hasOwnProperty(s)&&(r=t[s],r!=null))switch(s){case"value":l=r;break;case"defaultValue":o=r;break;case"multiple":a=r;default:ce(e,n,s,r,t,null)}n=l,t=o,e.multiple=!!a,n!=null?na(e,!!a,n,!1):t!=null&&na(e,!!a,t,!0);return;case"textarea":J("invalid",e),l=s=a=null;for(o in t)if(t.hasOwnProperty(o)&&(r=t[o],r!=null))switch(o){case"value":a=r;break;case"defaultValue":s=r;break;case"children":l=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(u(91));break;default:ce(e,n,o,r,t,null)}$r(e,a,s,l);return;case"option":for(c in t)if(t.hasOwnProperty(c)&&(a=t[c],a!=null))switch(c){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ce(e,n,c,a,t,null)}return;case"dialog":J("beforetoggle",e),J("toggle",e),J("cancel",e),J("close",e);break;case"iframe":case"object":J("load",e);break;case"video":case"audio":for(a=0;a<ys.length;a++)J(ys[a],e);break;case"image":J("error",e),J("load",e);break;case"details":J("toggle",e);break;case"embed":case"source":case"link":J("error",e),J("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in t)if(t.hasOwnProperty(g)&&(a=t[g],a!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:ce(e,n,g,a,t,null)}return;default:if(yi(n)){for(k in t)t.hasOwnProperty(k)&&(a=t[k],a!==void 0&&ir(e,n,k,a,t,void 0));return}}for(r in t)t.hasOwnProperty(r)&&(a=t[r],a!=null&&ce(e,n,r,a,t,null))}function Wf(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,l=null,o=null,r=null,c=null,g=null,k=null;for(x in t){var S=t[x];if(t.hasOwnProperty(x)&&S!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":c=S;default:a.hasOwnProperty(x)||ce(e,n,x,null,a,S)}}for(var v in a){var x=a[v];if(S=t[v],a.hasOwnProperty(v)&&(x!=null||S!=null))switch(v){case"type":l=x;break;case"name":s=x;break;case"checked":g=x;break;case"defaultChecked":k=x;break;case"value":o=x;break;case"defaultValue":r=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(u(137,n));break;default:x!==S&&ce(e,n,v,x,a,S)}}vi(e,o,r,c,g,k,l,s);return;case"select":x=o=r=v=null;for(l in t)if(c=t[l],t.hasOwnProperty(l)&&c!=null)switch(l){case"value":break;case"multiple":x=c;default:a.hasOwnProperty(l)||ce(e,n,l,null,a,c)}for(s in a)if(l=a[s],c=t[s],a.hasOwnProperty(s)&&(l!=null||c!=null))switch(s){case"value":v=l;break;case"defaultValue":r=l;break;case"multiple":o=l;default:l!==c&&ce(e,n,s,l,a,c)}n=r,t=o,a=x,v!=null?na(e,!!t,v,!1):!!a!=!!t&&(n!=null?na(e,!!t,n,!0):na(e,!!t,t?[]:"",!1));return;case"textarea":x=v=null;for(r in t)if(s=t[r],t.hasOwnProperty(r)&&s!=null&&!a.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:ce(e,n,r,null,a,s)}for(o in a)if(s=a[o],l=t[o],a.hasOwnProperty(o)&&(s!=null||l!=null))switch(o){case"value":v=s;break;case"defaultValue":x=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(u(91));break;default:s!==l&&ce(e,n,o,s,a,l)}Fr(e,v,x);return;case"option":for(var O in t)if(v=t[O],t.hasOwnProperty(O)&&v!=null&&!a.hasOwnProperty(O))switch(O){case"selected":e.selected=!1;break;default:ce(e,n,O,null,a,v)}for(c in a)if(v=a[c],x=t[c],a.hasOwnProperty(c)&&v!==x&&(v!=null||x!=null))switch(c){case"selected":e.selected=v&&typeof v!="function"&&typeof v!="symbol";break;default:ce(e,n,c,v,a,x)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var I in t)v=t[I],t.hasOwnProperty(I)&&v!=null&&!a.hasOwnProperty(I)&&ce(e,n,I,null,a,v);for(g in a)if(v=a[g],x=t[g],a.hasOwnProperty(g)&&v!==x&&(v!=null||x!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(u(137,n));break;default:ce(e,n,g,v,a,x)}return;default:if(yi(n)){for(var ue in t)v=t[ue],t.hasOwnProperty(ue)&&v!==void 0&&!a.hasOwnProperty(ue)&&ir(e,n,ue,void 0,a,v);for(k in a)v=a[k],x=t[k],!a.hasOwnProperty(k)||v===x||v===void 0&&x===void 0||ir(e,n,k,v,a,x);return}}for(var m in t)v=t[m],t.hasOwnProperty(m)&&v!=null&&!a.hasOwnProperty(m)&&ce(e,n,m,null,a,v);for(S in a)v=a[S],x=t[S],!a.hasOwnProperty(S)||v===x||v==null&&x==null||ce(e,n,S,v,a,x)}function tp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Jf(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var s=t[a],l=s.transferSize,o=s.initiatorType,r=s.duration;if(l&&r&&tp(o)){for(o=0,r=s.responseEnd,a+=1;a<t.length;a++){var c=t[a],g=c.startTime;if(g>r)break;var k=c.transferSize,S=c.initiatorType;k&&tp(S)&&(c=c.responseEnd,o+=k*(c<r?1:(r-g)/(c-g)))}if(--a,n+=8*(l+o)/(s.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var or=null,rr=null;function Il(e){return e.nodeType===9?e:e.ownerDocument}function ap(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sp(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function cr(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ur=null;function Pf(){var e=window.event;return e&&e.type==="popstate"?e===ur?!1:(ur=e,!0):(ur=null,!1)}var lp=typeof setTimeout=="function"?setTimeout:void 0,Ff=typeof clearTimeout=="function"?clearTimeout:void 0,ip=typeof Promise=="function"?Promise:void 0,$f=typeof queueMicrotask=="function"?queueMicrotask:typeof ip<"u"?function(e){return ip.resolve(null).then(e).catch(eh)}:lp;function eh(e){setTimeout(function(){throw e})}function bt(e){return e==="head"}function op(e,n){var t=n,a=0;do{var s=t.nextSibling;if(e.removeChild(t),s&&s.nodeType===8)if(t=s.data,t==="/$"||t==="/&"){if(a===0){e.removeChild(s),Oa(n);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")ks(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,ks(t);for(var l=t.firstChild;l;){var o=l.nextSibling,r=l.nodeName;l[Ha]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&l.rel.toLowerCase()==="stylesheet"||t.removeChild(l),l=o}}else t==="body"&&ks(e.ownerDocument.body);t=s}while(t);Oa(n)}function rp(e,n){var t=e;e=0;do{var a=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=a}while(t)}function dr(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":dr(t),hi(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function nh(e,n,t,a){for(;e.nodeType===1;){var s=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ha])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var l=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=xn(e.nextSibling),e===null)break}return null}function th(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=xn(e.nextSibling),e===null))return null;return e}function cp(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=xn(e.nextSibling),e===null))return null;return e}function pr(e){return e.data==="$?"||e.data==="$~"}function mr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ah(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var a=function(){n(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function xn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var fr=null;function up(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return xn(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function dp(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function pp(e,n,t){switch(n=Il(t),e){case"html":if(e=n.documentElement,!e)throw Error(u(452));return e;case"head":if(e=n.head,!e)throw Error(u(453));return e;case"body":if(e=n.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function ks(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);hi(e)}var kn=new Map,mp=new Set;function Yl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Jn=N.d;N.d={f:sh,r:lh,D:ih,C:oh,L:rh,m:ch,X:dh,S:uh,M:ph};function sh(){var e=Jn.f(),n=El();return e||n}function lh(e){var n=Ft(e);n!==null&&n.tag===5&&n.type==="form"?Mu(n):Jn.r(e)}var Ma=typeof document>"u"?null:document;function fp(e,n,t){var a=Ma;if(a&&typeof n=="string"&&n){var s=mn(n);s='link[rel="'+e+'"][href="'+s+'"]',typeof t=="string"&&(s+='[crossorigin="'+t+'"]'),mp.has(s)||(mp.add(s),e={rel:e,crossOrigin:t,href:n},a.querySelector(s)===null&&(n=a.createElement("link"),He(n,"link",e),Ee(n),a.head.appendChild(n)))}}function ih(e){Jn.D(e),fp("dns-prefetch",e,null)}function oh(e,n){Jn.C(e,n),fp("preconnect",e,n)}function rh(e,n,t){Jn.L(e,n,t);var a=Ma;if(a&&e&&n){var s='link[rel="preload"][as="'+mn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(s+='[imagesrcset="'+mn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(s+='[imagesizes="'+mn(t.imageSizes)+'"]')):s+='[href="'+mn(e)+'"]';var l=s;switch(n){case"style":l=ja(e);break;case"script":l=Ea(e)}kn.has(l)||(e=E({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),kn.set(l,e),a.querySelector(s)!==null||n==="style"&&a.querySelector(ws(l))||n==="script"&&a.querySelector(Cs(l))||(n=a.createElement("link"),He(n,"link",e),Ee(n),a.head.appendChild(n)))}}function ch(e,n){Jn.m(e,n);var t=Ma;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",s='link[rel="modulepreload"][as="'+mn(a)+'"][href="'+mn(e)+'"]',l=s;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Ea(e)}if(!kn.has(l)&&(e=E({rel:"modulepreload",href:e},n),kn.set(l,e),t.querySelector(s)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Cs(l)))return}a=t.createElement("link"),He(a,"link",e),Ee(a),t.head.appendChild(a)}}}function uh(e,n,t){Jn.S(e,n,t);var a=Ma;if(a&&e){var s=$t(a).hoistableStyles,l=ja(e);n=n||"default";var o=s.get(l);if(!o){var r={loading:0,preload:null};if(o=a.querySelector(ws(l)))r.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":n},t),(t=kn.get(l))&&hr(e,t);var c=o=a.createElement("link");Ee(c),He(c,"link",e),c._p=new Promise(function(g,k){c.onload=g,c.onerror=k}),c.addEventListener("load",function(){r.loading|=1}),c.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Gl(o,n,a)}o={type:"stylesheet",instance:o,count:1,state:r},s.set(l,o)}}}function dh(e,n){Jn.X(e,n);var t=Ma;if(t&&e){var a=$t(t).hoistableScripts,s=Ea(e),l=a.get(s);l||(l=t.querySelector(Cs(s)),l||(e=E({src:e,async:!0},n),(n=kn.get(s))&&gr(e,n),l=t.createElement("script"),Ee(l),He(l,"link",e),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(s,l))}}function ph(e,n){Jn.M(e,n);var t=Ma;if(t&&e){var a=$t(t).hoistableScripts,s=Ea(e),l=a.get(s);l||(l=t.querySelector(Cs(s)),l||(e=E({src:e,async:!0,type:"module"},n),(n=kn.get(s))&&gr(e,n),l=t.createElement("script"),Ee(l),He(l,"link",e),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(s,l))}}function hp(e,n,t,a){var s=(s=dn.current)?Yl(s):null;if(!s)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=ja(t.href),t=$t(s).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=ja(t.href);var l=$t(s).hoistableStyles,o=l.get(e);if(o||(s=s.ownerDocument||s,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,o),(l=s.querySelector(ws(e)))&&!l._p&&(o.instance=l,o.state.loading=5),kn.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},kn.set(e,t),l||mh(s,e,t,o.state))),n&&a===null)throw Error(u(528,""));return o}if(n&&a!==null)throw Error(u(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ea(t),t=$t(s).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function ja(e){return'href="'+mn(e)+'"'}function ws(e){return'link[rel="stylesheet"]['+e+"]"}function gp(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function mh(e,n,t,a){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=e.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),He(n,"link",t),Ee(n),e.head.appendChild(n))}function Ea(e){return'[src="'+mn(e)+'"]'}function Cs(e){return"script[async]"+e}function vp(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+mn(t.href)+'"]');if(a)return n.instance=a,Ee(a),a;var s=E({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ee(a),He(a,"style",s),Gl(a,t.precedence,e),n.instance=a;case"stylesheet":s=ja(t.href);var l=e.querySelector(ws(s));if(l)return n.state.loading|=4,n.instance=l,Ee(l),l;a=gp(t),(s=kn.get(s))&&hr(a,s),l=(e.ownerDocument||e).createElement("link"),Ee(l);var o=l;return o._p=new Promise(function(r,c){o.onload=r,o.onerror=c}),He(l,"link",a),n.state.loading|=4,Gl(l,t.precedence,e),n.instance=l;case"script":return l=Ea(t.src),(s=e.querySelector(Cs(l)))?(n.instance=s,Ee(s),s):(a=t,(s=kn.get(l))&&(a=E({},t),gr(a,s)),e=e.ownerDocument||e,s=e.createElement("script"),Ee(s),He(s,"link",a),e.head.appendChild(s),n.instance=s);case"void":return null;default:throw Error(u(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,Gl(a,t.precedence,e));return n.instance}function Gl(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=a.length?a[a.length-1]:null,l=s,o=0;o<a.length;o++){var r=a[o];if(r.dataset.precedence===n)l=r;else if(l!==s)break}l?l.parentNode.insertBefore(e,l.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function hr(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function gr(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Kl=null;function bp(e,n,t){if(Kl===null){var a=new Map,s=Kl=new Map;s.set(t,a)}else s=Kl,a=s.get(t),a||(a=new Map,s.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),s=0;s<t.length;s++){var l=t[s];if(!(l[Ha]||l[Re]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var o=l.getAttribute(n)||"";o=e+o;var r=a.get(o);r?r.push(l):a.set(o,[l])}}return a}function yp(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function fh(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function xp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function hh(e,n,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var s=ja(a.href),l=n.querySelector(ws(s));if(l){n=l._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Vl.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=l,Ee(l);return}l=n.ownerDocument||n,a=gp(a),(s=kn.get(s))&&hr(a,s),l=l.createElement("link"),Ee(l);var o=l;o._p=new Promise(function(r,c){o.onload=r,o.onerror=c}),He(l,"link",a),t.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Vl.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var vr=0;function gh(e,n){return e.stylesheets&&e.count===0&&Ql(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var a=setTimeout(function(){if(e.stylesheets&&Ql(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+n);0<e.imgBytes&&vr===0&&(vr=62500*Jf());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ql(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>vr?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(s)}}:null}function Vl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ql(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ql=null;function Ql(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ql=new Map,n.forEach(vh,e),ql=null,Vl.call(e))}function vh(e,n){if(!(n.state.loading&4)){var t=ql.get(e);if(t)var a=t.get(null);else{t=new Map,ql.set(e,t);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<s.length;l++){var o=s[l];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(t.set(o.dataset.precedence,o),a=o)}a&&t.set(null,a)}s=n.instance,o=s.getAttribute("data-precedence"),l=t.get(o)||a,l===a&&t.set(null,s),t.set(o,s),this.count++,a=Vl.bind(this),s.addEventListener("load",a),s.addEventListener("error",a),l?l.parentNode.insertBefore(s,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),n.state.loading|=4}}var Ss={$$typeof:Te,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function bh(e,n,t,a,s,l,o,r,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=di(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=di(0),this.hiddenUpdates=di(null),this.identifierPrefix=a,this.onUncaughtError=s,this.onCaughtError=l,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function kp(e,n,t,a,s,l,o,r,c,g,k,S){return e=new bh(e,n,t,o,c,g,k,S,r),n=1,l===!0&&(n|=24),l=an(3,null,null,n),e.current=l,l.stateNode=e,n=Wi(),n.refCount++,e.pooledCache=n,n.refCount++,l.memoizedState={element:a,isDehydrated:t,cache:n},$i(l),e}function wp(e){return e?(e=ca,e):ca}function Cp(e,n,t,a,s,l){s=wp(s),a.context===null?a.context=s:a.pendingContext=s,a=ot(n),a.payload={element:t},l=l===void 0?null:l,l!==null&&(a.callback=l),t=rt(e,a,n),t!==null&&(Je(t,e,n),ts(t,e,n))}function Sp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function br(e,n){Sp(e,n),(e=e.alternate)&&Sp(e,n)}function Ap(e){if(e.tag===13||e.tag===31){var n=Ot(e,67108864);n!==null&&Je(n,e,67108864),br(e,67108864)}}function _p(e){if(e.tag===13||e.tag===31){var n=cn();n=pi(n);var t=Ot(e,n);t!==null&&Je(t,e,n),br(e,n)}}var Xl=!0;function yh(e,n,t,a){var s=f.T;f.T=null;var l=N.p;try{N.p=2,yr(e,n,t,a)}finally{N.p=l,f.T=s}}function xh(e,n,t,a){var s=f.T;f.T=null;var l=N.p;try{N.p=8,yr(e,n,t,a)}finally{N.p=l,f.T=s}}function yr(e,n,t,a){if(Xl){var s=xr(a);if(s===null)lr(e,n,a,Zl,t),Tp(e,a);else if(wh(s,e,n,t,a))a.stopPropagation();else if(Tp(e,a),n&4&&-1<kh.indexOf(e)){for(;s!==null;){var l=Ft(s);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var o=Tt(l.pendingLanes);if(o!==0){var r=l;for(r.pendingLanes|=2,r.entangledLanes|=2;o;){var c=1<<31-nn(o);r.entanglements[1]|=c,o&=~c}jn(l),(se&6)===0&&(Ml=$e()+500,bs(0))}}break;case 31:case 13:r=Ot(l,2),r!==null&&Je(r,l,2),El(),br(l,2)}if(l=xr(a),l===null&&lr(e,n,a,Zl,t),l===s)break;s=l}s!==null&&a.stopPropagation()}else lr(e,n,a,null,t)}}function xr(e){return e=ki(e),kr(e)}var Zl=null;function kr(e){if(Zl=null,e=Pt(e),e!==null){var n=A(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=_(n),e!==null)return e;e=null}else if(t===31){if(e=j(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Zl=e,null}function Np(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(lm()){case Rr:return 2;case Lr:return 8;case Us:case im:return 32;case Ur:return 268435456;default:return 32}default:return 32}}var wr=!1,yt=null,xt=null,kt=null,As=new Map,_s=new Map,wt=[],kh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Tp(e,n){switch(e){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":xt=null;break;case"mouseover":case"mouseout":kt=null;break;case"pointerover":case"pointerout":As.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_s.delete(n.pointerId)}}function Ns(e,n,t,a,s,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:l,targetContainers:[s]},n!==null&&(n=Ft(n),n!==null&&Ap(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,s!==null&&n.indexOf(s)===-1&&n.push(s),e)}function wh(e,n,t,a,s){switch(n){case"focusin":return yt=Ns(yt,e,n,t,a,s),!0;case"dragenter":return xt=Ns(xt,e,n,t,a,s),!0;case"mouseover":return kt=Ns(kt,e,n,t,a,s),!0;case"pointerover":var l=s.pointerId;return As.set(l,Ns(As.get(l)||null,e,n,t,a,s)),!0;case"gotpointercapture":return l=s.pointerId,_s.set(l,Ns(_s.get(l)||null,e,n,t,a,s)),!0}return!1}function Dp(e){var n=Pt(e.target);if(n!==null){var t=A(n);if(t!==null){if(n=t.tag,n===13){if(n=_(t),n!==null){e.blockedOn=n,Kr(e.priority,function(){_p(t)});return}}else if(n===31){if(n=j(t),n!==null){e.blockedOn=n,Kr(e.priority,function(){_p(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=xr(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);xi=a,t.target.dispatchEvent(a),xi=null}else return n=Ft(t),n!==null&&Ap(n),e.blockedOn=t,!1;n.shift()}return!0}function Mp(e,n,t){Wl(e)&&t.delete(n)}function Ch(){wr=!1,yt!==null&&Wl(yt)&&(yt=null),xt!==null&&Wl(xt)&&(xt=null),kt!==null&&Wl(kt)&&(kt=null),As.forEach(Mp),_s.forEach(Mp)}function Jl(e,n){e.blockedOn===n&&(e.blockedOn=null,wr||(wr=!0,p.unstable_scheduleCallback(p.unstable_NormalPriority,Ch)))}var Pl=null;function jp(e){Pl!==e&&(Pl=e,p.unstable_scheduleCallback(p.unstable_NormalPriority,function(){Pl===e&&(Pl=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],s=e[n+2];if(typeof a!="function"){if(kr(a||t)===null)continue;break}var l=Ft(t);l!==null&&(e.splice(n,3),n-=3,xo(l,{pending:!0,data:s,method:t.method,action:a},a,s))}}))}function Oa(e){function n(c){return Jl(c,e)}yt!==null&&Jl(yt,e),xt!==null&&Jl(xt,e),kt!==null&&Jl(kt,e),As.forEach(n),_s.forEach(n);for(var t=0;t<wt.length;t++){var a=wt[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<wt.length&&(t=wt[0],t.blockedOn===null);)Dp(t),t.blockedOn===null&&wt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var s=t[a],l=t[a+1],o=s[Ve]||null;if(typeof l=="function")o||jp(t);else if(o){var r=null;if(l&&l.hasAttribute("formAction")){if(s=l,o=l[Ve]||null)r=o.formAction;else if(kr(s)!==null)continue}else r=o.action;typeof r=="function"?t[a+1]=r:(t.splice(a,3),a-=3),jp(t)}}}function Ep(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(o){return s=o})},focusReset:"manual",scroll:"manual"})}function n(){s!==null&&(s(),s=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),s!==null&&(s(),s=null)}}}function Cr(e){this._internalRoot=e}Fl.prototype.render=Cr.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(u(409));var t=n.current,a=cn();Cp(t,a,e,n,null,null)},Fl.prototype.unmount=Cr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Cp(e.current,2,null,e,null,null),El(),n[Jt]=null}};function Fl(e){this._internalRoot=e}Fl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Gr();e={blockedOn:null,target:e,priority:n};for(var t=0;t<wt.length&&n!==0&&n<wt[t].priority;t++);wt.splice(t,0,e),t===0&&Dp(e)}};var Op=y.version;if(Op!=="19.2.8")throw Error(u(527,Op,"19.2.8"));N.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=U(n),e=e!==null?R(e):null,e=e===null?null:e.stateNode,e};var Sh={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:f,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$l.isDisabled&&$l.supportsFiber)try{La=$l.inject(Sh),en=$l}catch{}}return Ts.createRoot=function(e,n){if(!b(e))throw Error(u(299));var t=!1,a="",s=Iu,l=Yu,o=Gu;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(l=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=kp(e,1,!1,null,null,t,a,null,s,l,o,Ep),e[Jt]=n.current,sr(e),new Cr(n)},Ts.hydrateRoot=function(e,n,t){if(!b(e))throw Error(u(299));var a=!1,s="",l=Iu,o=Yu,r=Gu,c=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError),t.formState!==void 0&&(c=t.formState)),n=kp(e,1,!0,n,t??null,a,s,c,l,o,r,Ep),n.context=wp(null),t=n.current,a=cn(),a=pi(a),s=ot(a),s.callback=null,rt(t,s,a),t=a,n.current.lanes=t,Ba(n,t),jn(n),e[Jt]=n.current,sr(e),new Fl(n)},Ts.version="19.2.8",Ts}var Hp;function eg(){if(Hp)return Sr.exports;Hp=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(y){console.error(y)}}return p(),Sr.exports=$h(),Sr.exports}var ng=eg();const tg=Vh(ng),Zp="knowledge_pulse_completed",Wp="knowledge_pulse_bookmarks",Jp="knowledge_pulse_notes",Pp="knowledge_pulse_recent",Fp="knowledge_pulse_theme";function Pn(){try{const p=localStorage.getItem(Zp);return p?JSON.parse(p):[]}catch{return[]}}function $p(p){const y=Pn(),w=y.indexOf(p);let u;return w>-1?u=y.filter(b=>b!==p):u=[...y,p],localStorage.setItem(Zp,JSON.stringify(u)),window.dispatchEvent(new Event("knowledge_pulse_storage_update")),u}function Xt(){try{const p=localStorage.getItem(Wp);return p?JSON.parse(p):[]}catch{return[]}}function Er(p){const y=Xt(),w=y.indexOf(p);let u;return w>-1?u=y.filter(b=>b!==p):u=[...y,p],localStorage.setItem(Wp,JSON.stringify(u)),window.dispatchEvent(new Event("knowledge_pulse_storage_update")),u}function em(){try{const p=localStorage.getItem(Jp);return p?JSON.parse(p):{}}catch{return{}}}function ag(p,y){const w=em();return y.trim()?w[p]=y:delete w[p],localStorage.setItem(Jp,JSON.stringify(w)),w}function nm(){try{const p=localStorage.getItem(Pp);return p?JSON.parse(p):[]}catch{return[]}}function sg(p){const w=nm().filter(b=>b!==p),u=[p,...w].slice(0,10);return localStorage.setItem(Pp,JSON.stringify(u)),u}function lg(){const p=localStorage.getItem(Fp);return p==="light"||p==="dark"?p:"dark"}function ig(p){localStorage.setItem(Fp,p),p==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}const og=`# 🛣️ Terraform Roadmap: From Beginner to Master

## 🌱 **1. Basics of Terraform**
- **What is Terraform?**: Understand Infrastructure as Code (IaC) and Terraform's purpose.
- **Installation**: Install Terraform on your local machine.
- **First Configuration**: Write a simple configuration to provision a resource (e.g., an AWS EC2 instance).
- **Commands**:
  - \`terraform init\`
  - \`terraform plan\`
  - \`terraform apply\`
  - \`terraform destroy\`
- **State File**: Learn about \`terraform.tfstate\` and its importance.

---

## 🧱 **2. Core Concepts**
- **Providers**: Understand providers (e.g., AWS, Azure, GCP) and how to configure them.
- **Resources**: Learn how to define and manage resources.
- **Variables**:
  - Input variables
  - Default values
  - Variable types (string, number, bool, list, map, object)
- **Outputs**: Use output blocks to expose resource attributes.
- **Data Sources**: Fetch existing resources using \`data\` blocks.
- **Terraform Files**:
  - \`main.tf\`
  - \`variables.tf\`
  - \`outputs.tf\`

---

## 🔄 **3. Intermediate Topics**
- **State Management**:
  - Remote state storage (e.g., S3, Azure Blob, GCS).
  - State locking with DynamoDB or other mechanisms.
  - \`terraform state\` commands (e.g., \`state mv\`, \`state rm\`).
- **Modules**:
  - Create reusable modules.
  - Use public modules from the Terraform Registry.
  - Pass variables and outputs between modules.
- **Lifecycle Meta-Arguments**:
  - \`create_before_destroy\`
  - \`prevent_destroy\`
  - \`ignore_changes\`
- **Provisioners**:
  - \`local-exec\`
  - \`remote-exec\`
  - File uploads.
- **Dependencies**:
  - Implicit dependencies.
  - Explicit dependencies using \`depends_on\`.

---

## 🛠️ **4. Advanced Topics**
- **Dynamic Blocks**:
  - Use \`for_each\` and \`count\` for dynamic resource creation.
  - Generate dynamic configurations with \`dynamic\` blocks.
- **Expressions**:
  - Conditional expressions (\`if\`, \`else\`).
  - Loops (\`for\` expressions).
  - Functions (e.g., \`join\`, \`split\`, \`lookup\`, \`length\`).
- **Workspaces**:
  - Manage multiple environments (e.g., dev, staging, prod) using workspaces.
- **Backends**:
  - Configure backends like S3, Azure Blob, GCS, or Terraform Cloud.
  - Migrate state between backends.
- **Remote State**:
  - Use \`terraform_remote_state\` to reference outputs from other configurations.
- **Sensitive Data**:
  - Mark variables and outputs as \`sensitive\`.
  - Use tools like HashiCorp Vault for secrets management.

---

## 🌐 **5. Collaboration and Best Practices**
- **Version Control**:
  - Store Terraform configurations in Git.
  - Use \`.gitignore\` for sensitive files (e.g., \`.terraform\`, \`terraform.tfstate\`).
- **Team Collaboration**:
  - Use remote backends for shared state.
  - Implement state locking.
- **Code Quality**:
  - Use \`terraform fmt\` for formatting.
  - Use \`terraform validate\` to check configuration syntax.
  - Implement pre-commit hooks for Terraform.
- **Testing**:
  - Use tools like \`terratest\` for automated testing.
- **Documentation**:
  - Write clear comments and use \`description\` fields for variables and outputs.

---

## 🚀 **6. Expert-Level Topics**
- **Custom Providers**:
  - Write custom providers using the Terraform Plugin SDK.
- **Terraform Enterprise/Cloud**:
  - Use Terraform Cloud for collaboration and governance.
  - Implement Sentinel policies for compliance.
- **Complex Modules**:
  - Build highly reusable and parameterized modules.
  - Publish modules to the Terraform Registry.
- **Performance Optimization**:
  - Optimize large configurations for faster execution.
  - Use \`parallelism\` to speed up resource creation.
- **Debugging**:
  - Use \`TF_LOG\` for debugging Terraform runs.
  - Analyze state files and plan outputs for troubleshooting.
- **Advanced State Management**:
  - Split state files for large projects.
  - Manage state drift and recovery.

---

## 🏁 **7. Real-World Projects**
- **Multi-Cloud Deployments**:
  - Deploy resources across AWS, Azure, and GCP.
- **CI/CD Integration**:
  - Automate Terraform workflows using Jenkins, GitHub Actions, or GitLab CI.
- **Infrastructure Governance**:
  - Implement policies and compliance checks.
- **Disaster Recovery**:
  - Design and test disaster recovery plans using Terraform.

---

## 📚 **8. Resources for Learning**
- **Official Documentation**: [Terraform Docs](https://www.terraform.io/docs)
- **Books**:
  - "Terraform: Up & Running" by Yevgeniy Brikman.
- **Courses**:
  - HashiCorp Certified: Terraform Associate.
  - Online platforms like Udemy, Pluralsight, or Coursera.
- **Community**:
  - Join Terraform forums, Slack channels, and GitHub discussions.

---

### 🎯 Final Goal: Master Terraform to Build Scalable, Reliable, and Secure Infrastructure!
`,rg=`# Terraform Notes

## 🌍 What Is Terraform?

**Terraform** is an **Infrastructure as Code (IaC)** tool that helps you safely and efficiently **build**, **change**, and **version** cloud and on-premises resources.

---

## ⚙️ How Terraform Works

- Terraform uses **APIs** to manage and provision resources.
- It interacts with **providers** (like AWS, Azure, GCP, etc.) to communicate with different platforms and services.

---

## ✅ Common Use Cases

### 1. **Multi-Cloud Deployment**
- Manage resources across multiple cloud providers.
- Improves **fault tolerance** and **disaster recovery**.
- Use a **single workflow** for all providers.

### 2. **Application Infrastructure Deployment**
- Manage **multi-tier architectures** (web, API, DB, cache, etc.).
- Automatically handles **dependencies** between resources.
- Supports **scaling**, **monitoring**, and **rolling updates**.

### 3. **Self-Service Infrastructure**
- Teams can deploy infrastructure without depending on Ops teams.
- Use **modules** to enforce standards and speed up deployment.
- Integrate with tools like **ServiceNow** for automated requests.

### 4. **Policy Compliance and Management**
- Use **Sentinel** for policy-as-code enforcement.
- Enforce resource limits and configurations before deployment.
- Replace manual ticket-based reviews with automation.

### 5. **PaaS Application Setup**
- Automate setup for **Heroku**, **DNS**, **CDN**, and add-ons.
- Consistent infrastructure provisioning **without UI**.

### 6. **Software Defined Networking (SDN)**
- Auto-configure network based on app needs.
- Integrate with **Consul-Terraform-Sync** for dynamic updates.
- Enable **Network Infrastructure Automation (NIA)**.

### 7. **Kubernetes Management**
- Provision Kubernetes clusters.
- Manage resources like **pods**, **services**, **deployments**.
- Use Terraform **Kubernetes Operator** and **CRDs**.

### 8. **Parallel Environments (Dev, QA, Prod)**
- Spin up test environments quickly.
- Dispose them after use to **save cost**.
- Keep environments consistent and up-to-date.

### 9. **Software Demos**
- Launch on-demand software demos on any cloud.
- Let users customize parameters (e.g., cluster size).
- Ideal for **trial versions** or **sandbox environments**.

---

## 🧩 Terraform Core Concepts

### 📦 Provider
- Interface between Terraform and cloud platforms.
- Manages cloud resources like compute, storage, networking, etc.

### 🧱 Resource
- Basic building block in Terraform.
- Represents infrastructure elements like VMs, networks, or DNS records.

### 📁 Module
- Group of reusable Terraform configurations.
- Promotes reusability and clean organization.
- Can be used to create multiple instances of similar resources.

### 📂 State
- Stores information about existing infrastructure.
- Helps Terraform determine what changes need to be applied.

### 📤 Output
- Exposes values from Terraform-managed resources.
- Useful for referencing in other configurations or scripts.
`,cg=`# 📘 Terraform Configuration Blocks Cheat Sheet

## 🔧 1. provider
Defines the cloud/service provider.
\`\`\`hcl
provider "aws" {
  region = "us-east-1"
}
\`\`\`

## 🧱 2. resource
Declares infrastructure resources.
\`\`\`hcl
resource "aws_instance" "example" {
  ami           = "ami-123456"
  instance_type = "t2.micro"
}
\`\`\`

## 📥 3. variable
Declares input variables.
\`\`\`hcl
variable "region" {
  type    = string
  default = "us-east-1"
}
\`\`\`

## 📤 4. output
Returns values from resources.
\`\`\`hcl
output "instance_ip" {
  value = aws_instance.example.public_ip
}
\`\`\`

## 📦 5. module
Calls reusable Terraform modules.
\`\`\`hcl
module "vpc" {
  source     = "./modules/vpc"
  cidr_block = "10.0.0.0/16"
}
\`\`\`

## 🧮 6. locals
Defines internal-only variables.
\`\`\`hcl
locals {
  env = "dev"
}
\`\`\`

## 📡 7. data
Fetches data from existing resources.
\`\`\`hcl
data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"]
}
\`\`\`

## ⚙️ 8. terraform
Sets backend and required version.
\`\`\`hcl
terraform {
  required_version = ">= 1.0.0"
  backend "s3" {
    bucket = "my-bucket"
    key    = "state.tfstate"
    region = "us-east-1"
  }
}
\`\`\`

## 📂 9. backend
Stores Terraform state file (inside \`terraform\` block).

## 🔗 10. depends_on
Explicit resource dependencies.
\`\`\`hcl
depends_on = [aws_db_instance.db]
\`\`\`

## 🔁 11. lifecycle
Controls how Terraform handles resources.
\`\`\`hcl
lifecycle {
  prevent_destroy = true
}
\`\`\`

## 🔢 12. count / for_each
Creates multiple instances.
\`\`\`hcl
resource "aws_instance" "web" {
  count = 3
}
\`\`\`

---

## 📋 Summary Table

| **Block**       | **Purpose**                                      |
|------------------|--------------------------------------------------|
| \`provider\`       | Defines the cloud/service provider.             |
| \`resource\`       | Declares infrastructure resources.              |
| \`variable\`       | Declares input variables.                       |
| \`output\`         | Returns values from resources.                  |
| \`module\`         | Calls reusable Terraform modules.               |
| \`locals\`         | Defines internal-only variables.                |
| \`data\`           | Fetches data from existing resources.           |
| \`terraform\`      | Sets backend and required version.              |
| \`backend\`        | Stores Terraform state file.                    |
| \`depends_on\`     | Explicitly defines resource dependencies.       |
| \`lifecycle\`      | Controls how Terraform handles resources.       |
| \`count/for_each\` | Creates multiple instances of a resource.       |

---

📝 **Tip:** Combine \`variable\`, \`module\`, and \`output\` for production-grade infrastructure.
`,ug=`
## 🌍 Terraform Provider Block

### 🧠 What Is a Provider Block?

The provider block is used to configure the connection to a specific cloud, SaaS, or on-prem platform that Terraform will use to provision resources.

Think of it as the plugin that Terraform uses to talk to AWS, Azure, GCP, Docker, GitHub, and hundreds of other platforms.

---

### 🧱 Basic Syntax

\`\`\`hcl
provider "<NAME>" {
  # Configuration options
}
\`\`\`

- **<NAME>** is usually the name of the provider (like aws, azurerm, google, docker, etc.).

---

### ✅ Example: AWS Provider

\`\`\`hcl
provider "aws" {
  region  = "us-east-1"
  profile = "default"
}
\`\`\`

This sets the AWS region and uses the default AWS CLI profile.

---

### 🏗️ How Terraform Knows What to Use

In addition to the provider block, you must also declare the provider in the terraform block like this:

\`\`\`hcl
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}
\`\`\`

---

### 🎯 Common Arguments (per provider)

Here are some typical arguments used in different providers:

🟡 **AWS**

\`\`\`hcl
provider "aws" {
  region     = "us-west-2"
  access_key = "YOUR_KEY"
  secret_key = "YOUR_SECRET"
}
\`\`\`

⚠️ **Prefer using environment variables or named profiles for credentials instead of hardcoding them!**

🔵 **Azure**

\`\`\`hcl
provider "azurerm" {
  features = {}
}
\`\`\`

🔴 **Google Cloud**

\`\`\`hcl
provider "google" {
  project = "my-gcp-project"
  region  = "us-central1"
}
\`\`\`

---

### 🧩 Multiple Providers

You can configure multiple provider blocks for different regions or accounts:

\`\`\`hcl
provider "aws" {
  alias  = "us_east"
  region = "us-east-1"
}

provider "aws" {
  alias  = "us_west"
  region = "us-west-1"
}
\`\`\`

Then refer to them in resources:

\`\`\`hcl
resource "aws_instance" "example" {
  provider = aws.us_west
  ami      = "ami-123456"
  instance_type = "t2.micro"
}
\`\`\`

---

### 🔐 Auth & Security Tips

Avoid hardcoding credentials.

**Use:**  
- Environment variables (AWS_ACCESS_KEY_ID, etc.)  
- IAM roles (if running from AWS EC2)  
- Cloud SDK credentials  

---

### 📌 Summary

| Feature | Description |
|---------|-------------|
| Purpose | Connect Terraform to a platform |
| Examples | AWS, Azure, GCP, Docker, GitHub |
| Uses | Credentials, regions, project IDs, etc. |
| Good Practice | Avoid hardcoded secrets, use profiles/env |
| Supports Aliasing | Yes, for multiple accounts or regions |
`,dg=`
## 🔧 Resource Block in Terraform

### 🧠 What Is a Resource Block?

A resource block is used to create and manage infrastructure components, such as virtual machines, storage, databases, load balancers, networks, etc.

---

### 🧱 Basic Syntax

\`\`\`hcl
resource "<PROVIDER>_<TYPE>" "<NAME>" {
  # Configuration arguments
}
\`\`\`

- **<PROVIDER>**: The cloud/service provider (e.g., aws, google, azurerm).  
- **<TYPE>**: The type of resource (e.g., instance, bucket, vpc).  
- **<NAME>**: A local name used to refer to the resource in the Terraform configuration.  

---

### ✅ Example: AWS EC2 Instance

\`\`\`hcl
resource "aws_instance" "web_server" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  tags = {
    Name = "MyWebServer"
  }
}
\`\`\`

- **aws_instance**: Tells Terraform to create an EC2 instance using the AWS provider.  
- **web_server**: A name to reference this resource elsewhere in your code.  
- **ami**, **instance_type**, and **tags** are arguments supported by the AWS EC2 instance resource.  

---

### 🔄 Using Values from a Resource

You can use values from a resource in other parts of your Terraform configuration:

\`\`\`hcl
aws_instance.web_server.public_ip
\`\`\`

---

### 🔁 Creating Multiple Resources

You can use **count** or **for_each** to create multiple instances:

\`\`\`hcl
resource "aws_instance" "web" {
  count         = 3
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}
\`\`\`

---

### 🔐 Adding Provisioners (Not Recommended for Most Cases)

Provisioners allow you to run scripts on resources after creation:

\`\`\`hcl
provisioner "remote-exec" {
  inline = [
    "sudo apt-get update",
    "sudo apt-get install nginx -y"
  ]
}
\`\`\`

⚠️ **Use provisioners only as a last resort** — Terraform prefers declarative resource management.

---

### 🔍 Inspecting Resources

After applying, Terraform stores the resource data in the state file so it knows what exists and what needs to be managed.

---
`,pg=`## 🌱 Variables in Terraform

### 📚 What Are Variables in Terraform?

Variables in Terraform are used to generalize and customize configurations. They allow you to make your Terraform configuration more flexible and reusable by defining values that can be passed into modules or used to parameterize the configuration.

---

### 🧱 Basic Syntax for Defining Variables

To define a variable in Terraform, you use the \`variable\` block:

\`\`\`hcl
variable "<variable_name>" {
  type        = <type>
  description = "<description>"
  default     = <default_value>
}
\`\`\`

- **\`<variable_name>\`**: Name of the variable.
- **\`type\`** (optional): The type of value the variable will hold (e.g., string, number, bool, list, map, etc.).
- **\`description\`** (optional): A brief description of the variable (helps with documentation).
- **\`default\`** (optional): The default value for the variable. If not provided, Terraform will prompt for a value during execution.

---

### ✅ Example of a Simple Variable

\`\`\`hcl
variable "region" {
  type        = string
  description = "The AWS region to deploy resources in"
  default     = "us-east-1"
}
\`\`\`

- **region**: Defined as a string type.
- **Description**: "The AWS region to deploy resources in".
- **Default Value**: "us-east-1".

---

### 🔗 Using Variables in Your Configuration

Once you've defined a variable, you can reference it in your Terraform configuration using the \`var.<variable_name>\` syntax.

Example:

\`\`\`hcl
provider "aws" {
  region = var.region
}
\`\`\`

---

### 🗂️ Types of Variables

**String Variable**

\`\`\`hcl
variable "instance_type" {
  type    = string
  default = "t2.micro"
}
\`\`\`

**Number Variable**

\`\`\`hcl
variable "instance_count" {
  type    = number
  default = 2
}
\`\`\`

**Boolean Variable**

\`\`\`hcl
variable "enable_feature" {
  type    = bool
  default = true
}
\`\`\`

**List Variable**

\`\`\`hcl
variable "subnets" {
  type    = list(string)
  default = ["subnet-12345", "subnet-67890"]
}
\`\`\`

**Map Variable**

\`\`\`hcl
variable "tags" {
  type    = map(string)
  default = {
    Name        = "MyApp"
    Environment = "Production"
  }
}
\`\`\`

**Object Variable**

\`\`\`hcl
variable "app_config" {
  type = object({
    name        = string
    instance_id = string
    replicas    = number
  })
  default = {
    name        = "webapp"
    instance_id = "i-1234567890"
    replicas    = 3
  }
}
\`\`\`

---

### 🌍 Variable Scope

- **Input Variables**: Defined and passed into the Terraform configuration.
- **Output Variables**: Returned by Terraform after resource creation, often used for passing data between modules.

---

### 📥 Providing Values to Variables

1. **Environment Variables**

\`\`\`bash
export TF_VAR_region="us-west-2"
terraform apply
\`\`\`

2. **Command Line Input**

\`\`\`bash
terraform apply -var="region=us-west-2"
\`\`\`

3. **Variable Files**

**terraform.tfvars**

\`\`\`hcl
region = "us-west-2"
instance_type = "t2.medium"
\`\`\`

4. **Interactive Input**

Terraform will prompt for missing variable values if no default is set.

---

### 📝 Example Configuration Using Variables

**variables.tf**

\`\`\`hcl
variable "region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t2.micro"
}
\`\`\`

**main.tf**

\`\`\`hcl
provider "aws" {
  region = var.region
}

resource "aws_instance" "example" {
  ami           = "ami-12345678"
  instance_type = var.instance_type
}

output "instance_id" {
  value = aws_instance.example.id
}
\`\`\`

---

### 🎯 Precedence of Variable Sources

1. Environment variables (\`TF_VAR_<variable_name>\`)
2. \`.tfvars\` files (if used with \`-var-file\` or automatically loaded)
3. Command-line \`-var\` options
4. Default values in the variable block (if no other value is provided)

---

### 🔢 \`count\` and \`for_each\` in Terraform

#### 🆚 Quick Comparison

| **Feature** | **\`count\`**                     | **\`for_each\`**                     |
|-------------|---------------------------------|------------------------------------|
| **Type**    | Integer                        | Map or Set                        |
| **Use case**| Repeating a resource N times   | Creating a resource for each key or element |
| **Accessing**| \`resource[count.index]\`       | \`resource[each.key]\`, \`each.value\` |

---

#### ✅ \`count\` – Repeat a Resource N Times

🔹 Syntax:

\`\`\`hcl
resource "aws_instance" "example" {
  count         = 3
  ami           = "ami-123456"
  instance_type = "t2.micro"
  tags = {
    Name = "Instance \${count.index}"
  }
}
\`\`\`

- Creates 3 instances.
- Index starts from 0.

🧠 Access in Output:

\`\`\`hcl
output "instance_ips" {
  value = aws_instance.example[*].public_ip
}
\`\`\`

---

#### 🧮 \`for_each\` – Loop Over Maps or Sets

🔹 With a Map:

\`\`\`hcl
variable "servers" {
  default = {
    "dev"  = "t2.micro"
    "prod" = "t3.medium"
  }
}

resource "aws_instance" "example" {
  for_each      = var.servers
  instance_type = each.value
  ami           = "ami-123456"

  tags = {
    Name = each.key
  }
}
\`\`\`

🔹 With a Set of Strings:

\`\`\`hcl
variable "names" {
  default = ["web", "db", "cache"]
}

resource "aws_s3_bucket" "buckets" {
  for_each = toset(var.names)
  bucket   = "\${each.key}-bucket"
}
\`\`\`

---

### ⛔ When Not to Use \`count\`

Avoid \`count\` when:

- You want to iterate over named values (use \`for_each\` instead).
- The inputs are maps or strings – \`count\` only accepts integers.

---

### 📦 Mixed Example with \`for_each\` and \`locals\`

\`\`\`hcl
locals {
  user_roles = {
    "alice" = "admin"
    "bob"   = "viewer"
  }
}

resource "example_user" "users" {
  for_each = local.user_roles
  name     = each.key
  role     = each.value
}
\`\`\`

---

### 📝 When to Use What?

| **Use This** | **When You Need To**          |
|--------------|-------------------------------|
| \`count\`      | Repeat X times                |
| \`for_each\`   | Loop over named data (map, set, list of strings) |

---

### 🏁 Conclusion

Variables in Terraform provide a way to make your infrastructure code flexible and reusable across different environments. By using variables, you can easily change configurations without altering the core logic of your infrastructure.
`,mg=`# 🌟 What are Output Variables in Terraform?

Output variables in Terraform are used to display or expose specific information from your Terraform configuration after the resources have been created or modified. These variables allow you to output values (such as the public IP of an EC2 instance or the ID of a created resource) after the execution of Terraform commands, such as \`terraform apply\`.

In simpler terms, output variables provide a way to access information about your infrastructure once Terraform has finished provisioning or modifying it.

## 🤔 Why Use Output Variables?
                       
- **📤 Sharing Information**: Outputs allow you to share important details about the infrastructure with other modules, scripts, or users.
- **🤖 Automation & Scripting**: Outputs can be used in automated workflows or external systems where you need to use the value of a resource (e.g., pass it to another system or another Terraform configuration).
- **👀 Human-readable Information**: They make it easier for you to see the important values after running \`terraform apply\`.

## 🛠️ How to Define and Use Output Variables

You define output variables in Terraform using the \`output\` block. Here’s the basic structure:

\`\`\`hcl
output "output_variable_name" {
  value       = <expression>
  description = "<Optional description of the output>"
  sensitive   = <true/false> # Optional flag to hide the output value in logs
}
\`\`\`

- **\`output_variable_name\`**: The name of the output variable.
- **\`value\`**: The value or expression that the output will display. This can be a reference to a resource or any other expression in Terraform.
- **\`description\` (optional)**: A human-readable description of what the output variable is showing.
- **\`sensitive\` (optional)**: If set to \`true\`, the output will be hidden (useful for sensitive data like passwords or access keys).

### 📋 Example of Output Variables

Let's say you create an EC2 instance in AWS, and you want to output the instance's public IP address after creation.

**\`main.tf\`**

\`\`\`hcl
provider "aws" {
  region = "us-west-2"
}

resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}

output "instance_public_ip" {
  value       = aws_instance.example.public_ip
  description = "The public IP of the EC2 instance"
}
\`\`\`

In this example:

- We create an EC2 instance using the \`aws_instance\` resource.
- The output variable \`instance_public_ip\` will display the public IP address of the created EC2 instance after running \`terraform apply\`.

### 🏃‍♂️ 1. Run Terraform:

\`\`\`bash
terraform init
terraform apply
\`\`\`

After applying the Terraform configuration, the public IP address of the EC2 instance will be displayed in the output.

### 📤 2. Example Output:

\`\`\`bash
Outputs:

instance_public_ip = "34.212.45.120"
\`\`\`

## 🔗 Accessing Output Values in Other Terraform Configurations or Modules

You can also use output values from one Terraform configuration in another by using the \`terraform output\` command or by referencing them in other modules.

For example, after applying your configuration, you can use the \`terraform output\` command to access output variables:

\`\`\`bash
terraform output instance_public_ip
\`\`\`

You can also reference outputs in other Terraform modules like this:

\`\`\`hcl
module "another_module" {
  source = "./path/to/module"
}

output "module_output" {
  value = module.another_module.output_variable_name
}
\`\`\`

## 🔒 Sensitive Outputs

Sometimes you might want to output sensitive information, such as passwords, API keys, etc. Terraform allows you to mark output variables as sensitive so that their values are not displayed in the terminal during \`terraform apply\`.

To do this, simply add the \`sensitive = true\` flag:

\`\`\`hcl
output "db_password" {
  value     = aws_secretsmanager_secret.example.secret_string
  sensitive = true
}
\`\`\`

With \`sensitive = true\`, Terraform will not show the value of \`db_password\` in the terminal output.

---

## 📝 Summary of Key Points:

- ✅ Output variables help you access and display important information after resource provisioning.
- ✅ You define output variables using the \`output\` block.
- ✅ Outputs can be used in automated workflows or shared between modules.
- ✅ Use the \`terraform output\` command to retrieve the value of output variables.
- ✅ You can mark outputs as sensitive to hide sensitive data like passwords or access keys.`,fg=`# 📦 Understanding Terraform Modules

Modules in Terraform are a way to organize and encapsulate your Terraform configurations for better reusability, maintainability, and scalability. They allow you to group resources into a single unit that can be reused in different parts of your Terraform configuration or across multiple projects.

In simpler terms, modules are like functions in programming. They let you write reusable pieces of code that can be called and used in multiple places without having to rewrite the same code again and again.

## 🤔 Why Use Modules in Terraform?

- **🔄 Reusability**: Modules allow you to define infrastructure components that can be reused across different projects or environments.
- **📂 Organization**: Modules help break up large Terraform configurations into smaller, more manageable pieces.
- **🔒 Encapsulation**: A module is a self-contained unit of Terraform configurations, meaning you can abstract away complex logic and present a simple interface to users.
- **🛠️ Maintainability**: Changes to a module can be made once and then reflected in all places where it is used, reducing the need for code duplication.

## 🏗️ Structure of a Terraform Module

A module consists of the following:

- **Input Variables**: Accept configuration values from the calling module.
- **Resources**: Define the actual infrastructure components.
- **Output Variables**: Expose values from the module to the outside.
- **(Optional) Provisioners & Data Sources**: Manage resources and fetch information from outside of Terraform.

---

## 📋 Example of a Simple Module

Let’s walk through an example where we create a simple module to deploy an AWS EC2 instance.

### 1️⃣ Module Structure

The module could be organized in the following structure:

\`\`\`plaintext
my-module/
├── main.tf
├── variables.tf
├── outputs.tf
\`\`\`

**\`main.tf\`**  
This file will contain the actual resource definitions.

\`\`\`hcl
resource "aws_instance" "example" {
  ami           = var.ami
  instance_type = var.instance_type
}
\`\`\`

**\`variables.tf\`**  
This file defines the variables that the module will accept.

\`\`\`hcl
variable "ami" {
  description = "AMI ID for the EC2 instance"
  type        = string
}

variable "instance_type" {
  description = "Instance type for the EC2 instance"
  type        = string
}
\`\`\`

**\`outputs.tf\`**  
This file will expose the output variables, which can be used by other configurations.

\`\`\`hcl
output "instance_public_ip" {
  value = aws_instance.example.public_ip
}
\`\`\`

---

### 2️⃣ Using the Module in Another Configuration

To use this module in another Terraform configuration, you would refer to it like this:

\`\`\`hcl
module "my_ec2" {
  source        = "./my-module"
  ami           = "ami-0c55b159cbfafe1f0"  # Replace with a valid AMI ID
  instance_type = "t2.micro"
}

output "ec2_public_ip" {
  value = module.my_ec2.instance_public_ip
}
\`\`\`

- **\`source\`** tells Terraform where to find the module. In this case, it’s a local path (\`./my-module\`), but you can also source it from a remote location like the Terraform Registry.
- We pass the necessary variables (\`ami\`, \`instance_type\`) to the module, and it returns the \`instance_public_ip\` as an output.

---

### 3️⃣ Running the Configuration

Now, when you run \`terraform init\` and \`terraform apply\`, Terraform will:

1. Initialize the module (if it’s not already).
2. Create an EC2 instance using the module's logic.
3. Output the public IP of the EC2 instance.

---

## 🌐 Module Sources

Modules can be sourced from various locations:

- **📂 Local Directory**: As shown in the example above, you can use a local directory for your module.

  \`\`\`hcl
  module "example" {
    source = "./path/to/module"
  }
  \`\`\`

- **📦 Terraform Registry**: Terraform has an official registry where you can find pre-built modules for popular providers and resources.

  \`\`\`hcl
  module "vpc" {
    source  = "terraform-aws-modules/vpc/aws"
    version = "2.78.0"
    name    = "my-vpc"
    cidr    = "10.0.0.0/16"
  }
  \`\`\`

- **🐙 GitHub**: You can also reference modules hosted on GitHub repositories.

  \`\`\`hcl
  module "example" {
    source = "github.com/username/repository//module-directory"
  }
  \`\`\`

- **🦊 Bitbucket/GitLab**: Modules can also be sourced from other version control systems like Bitbucket and GitLab.

---

## 🏅 Module Best Practices

- **🔧 Use Variables for Customization**: Always use input variables for any configurable parameters, so the module can be reused in different scenarios.
- **📤 Use Outputs to Expose Values**: Expose useful information via output variables to make the module’s results accessible to the calling configuration.
- **📏 Keep Modules Small and Focused**: A module should ideally perform a single task or be responsible for a single resource type. This keeps it maintainable and reusable.
- **📌 Version Control**: If you’re using remote modules, always specify a version to ensure that your configuration is reproducible and stable.

---

## 📝 Summary of Module Key Concepts:

- ✅ Modules are reusable Terraform configurations that encapsulate logic and resources.
- ✅ You can organize your code into input variables, resources, and output variables within a module.
- ✅ Modules improve reusability, maintainability, and organization of your Terraform infrastructure.
- ✅ Modules can be sourced from local directories, Terraform Registry, or remote Git repositories.
- ✅ Use output variables to expose essential data and interact with other parts of your infrastructure.`,hg=`# 🧠 Terraform Locals

\`locals\` in Terraform allow you to define named values that you can reference throughout your configuration. Think of them like constants or helper variables to make your code cleaner, more DRY (Don’t Repeat Yourself), and easier to manage.

---

## ✅ Use Cases of \`locals\`

- 🚫 Avoid repeating hardcoded values.
- ✨ Simplify complex expressions.
- 🛠️ Make large configurations easier to maintain.

---

## 🧱 Syntax

\`\`\`hcl
locals {
  environment   = "dev"
  instance_name = "web-\${local.environment}"
  ports         = [80, 443]
}
\`\`\`

You access a local variable with the \`local\` keyword:

\`\`\`hcl
name = local.instance_name
\`\`\`

---

## 💡 Real Example

\`\`\`hcl
locals {
  region         = "us-east-1"
  instance_count = 3
  tags = {
    Owner      = "Pritam"
    ManagedBy  = "Terraform"
  }
}

resource "aws_instance" "example" {
  count         = local.instance_count
  ami           = "ami-12345678"
  instance_type = "t2.micro"
  tags          = local.tags
}
\`\`\`

---

## 🎯 Notes

- 🔄 **Local values are evaluated once** and cannot be changed dynamically like input variables.
- 📦 **They are only available within the current module.**
- 🧮 **You can use them to construct dynamic expressions**, like:

\`\`\`hcl
locals {
  project_name = "pulse"
  bucket_name  = "\${local.project_name}-bucket"
}
\`\`\`

---

## ⚠️ Best Practices

- ✅ Use \`locals\` to simplify logic, but don’t overuse them. Sometimes it’s better to use variables or modules for clarity.
- 🏷️ Prefix complex expressions or reused strings with \`locals\` to make your code more readable.`,gg=`# 📦 Terraform \`data\` Block

## 📘 What Is It?

The \`data\` block in Terraform is used to fetch or reference existing resources that weren’t created in your current Terraform configuration — like resources created manually, by another Terraform project, or by a different system.

---

## 🧱 Syntax

\`\`\`hcl
data "<PROVIDER>_<DATA_SOURCE_TYPE>" "<NAME>" {
  # configuration arguments
}
\`\`\`

---

## 🔍 Example – AWS AMI Lookup

\`\`\`hcl
data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }

  owners = ["099720109477"] # Canonical
}

resource "aws_instance" "web" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t2.micro"
}
\`\`\`

---

## 🧠 Key Concepts

- ❌ **Does not create resources**, only reads information.
- 📋 Useful for fetching IDs, metadata, or remote state data.
- 🔄 Values fetched via \`data\` blocks are dynamic — always pulled fresh during \`plan\`/\`apply\`.

---

## 📦 Other Examples

### 👉 Fetching an Existing S3 Bucket

\`\`\`hcl
data "aws_s3_bucket" "existing_bucket" {
  bucket = "my-existing-bucket"
}
\`\`\`

### 👉 Getting Data from Terraform Remote State

\`\`\`hcl
data "terraform_remote_state" "network" {
  backend = "s3"
  config = {
    bucket = "my-tf-state"
    key    = "network/terraform.tfstate"
    region = "us-east-1"
  }
}
\`\`\`

---

## 🏷 Accessing Data

\`\`\`hcl
# Access output value from remote state
data.terraform_remote_state.network.outputs.vpc_id

# Access attribute from data
data.aws_ami.ubuntu.id
\`\`\`

---

## ✅ When To Use \`data\`

| **Use Case**         | **Example**                              |
| -------------------------- | ---------------------------------------------- |
| Fetching latest AMI        | \`data "aws_ami"\`                             |
| Referencing existing VPC   | \`data "aws_vpc"\`                             |
| Reading secrets            | \`data "vault_generic_secret"\`                |
| Querying remote state      | \`data "terraform_remote_state"\`              |
| Getting info from DNS/HTTP | \`data "http"\` or \`data "dns_a_record_set"\` |

---

## ⚠️ Note

- 🛑 It is **read-only** and does not change infrastructure.
- 🔄 Fetched at **plan time**, so always up-to-date.
`,vg=`# ⚙️ Terraform \`terraform\` Block

The \`terraform\` block is a meta-configuration block. It defines settings and behaviors that apply to the Terraform project as a whole.

---

## 🧱 Syntax

\`\`\`hcl
terraform {
  required_version = ">= 1.0.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket = "my-tf-state"
    key    = "dev/terraform.tfstate"
    region = "us-east-1"
  }
}
\`\`\`

---

## 🗃️ \`backend\` Block

### 📘 What Is It?

The \`backend\` block inside \`terraform {}\` defines where Terraform's state file is stored. By default, it's local, but you can configure remote backends like S3, Azure Blob, GCS, Terraform Cloud, etc.

---

### ✅ Why Use a Remote Backend?

- 🤝 Collaboration with your team
- 🔒 Locking and consistency
- 🛠️ Recovery from local machine failure
- 🌐 Integration with remote tooling (like Terraform Cloud)

---

### 🔧 Common Backend Types

| **Backend** | **Use Case**                              |
|-------------|------------------------------------------|
| \`local\`     | Default – stores state in local \`.tfstate\` |
| \`s3\`        | AWS S3 bucket (with DynamoDB for locking) |
| \`gcs\`       | Google Cloud Storage                     |
| \`azurerm\`   | Azure Blob Storage                       |
| \`remote\`    | Terraform Cloud / Enterprise             |
| \`consul\`    | For distributed systems using Consul     |

---

## 🌩 Example — S3 Backend

\`\`\`hcl
terraform {
  backend "s3" {
    bucket         = "my-terraform-state"
    key            = "env/dev/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-locks"  # for state locking
    encrypt        = true
  }
}
\`\`\`

To initialize and configure the backend, run:

\`\`\`bash
terraform init
\`\`\`

---

## ☁️ Example — Azure Backend

\`\`\`hcl
terraform {
  backend "azurerm" {
    resource_group_name  = "tf-state-rg"
    storage_account_name = "tfstorageacct"
    container_name       = "tfstate"
    key                  = "dev.terraform.tfstate"
  }
}
\`\`\`

---

## 📦 Notes

- 🛑 **You can only define one backend per Terraform configuration.**
- 🔄 Changing backends requires migrating state (e.g., using \`terraform state pull\` and \`terraform state push\`).
- 🚫 **No dynamic expressions** (like variables) are allowed in the \`backend\` block directly.`,bg=`# 🔗 \`depends_on\` in Terraform

## 📘 What Is It?

Terraform automatically infers dependencies between resources based on references. However, when there's no direct reference, you can use \`depends_on\` to manually tell Terraform that one resource must be created before another.

---

## 🧱 Syntax

\`\`\`hcl
resource "aws_instance" "app_server" {
  ami           = "ami-123456"
  instance_type = "t2.micro"

  depends_on = [
    aws_security_group.app_sg,
    null_resource.delay
  ]
}
\`\`\`

---

## 📦 Example Use Case

\`\`\`hcl
resource "aws_s3_bucket" "logs" {
  bucket = "my-logs-bucket"
}

resource "null_resource" "trigger" {
  depends_on = [aws_s3_bucket.logs]

  provisioner "local-exec" {
    command = "echo Bucket created!"
  }
}
\`\`\`

Even though \`null_resource\` doesn’t reference the bucket directly, it won’t run until the bucket is created, thanks to \`depends_on\`.

---

## 🔥 When To Use \`depends_on\`

| **Scenario**                                      | **Why \`depends_on\` is Needed**                     |
|---------------------------------------------------|---------------------------------------------------|
| Resource depends on something not referenced directly | To enforce the order of creation                  |
| Provisioner runs a script that needs a resource to exist | Avoids errors due to timing                       |
| Using \`null_resource\`, \`local-exec\`, or external scripts | These may not reference other resources directly  |
| Output generation or DNS setup timing             | Ensure dependent infra is already available       |

---

## ⚠️ Notes

- \`depends_on\` accepts a **list of resources**.
- You **don’t need to use it** if resources are already referenced directly (Terraform automatically builds the dependency graph).
- Overusing \`depends_on\` can make your graph harder to read and maintain — use only when needed.

---

## 🧠 Bonus Tip

Terraform internally creates a dependency graph before execution. You can visualize it with:

\`\`\`bash
terraform graph | dot -Tsvg > graph.svg
\`\`\``,yg=`# 🔁 \`lifecycle\` Block in Terraform

## 📘 What Is It?

The \`lifecycle\` block is used inside a resource block to customize how Terraform manages that resource over time — such as preventing it from being destroyed, controlling recreation, or ignoring certain changes.

---

## 🔧 Syntax

\`\`\`hcl
resource "aws_instance" "example" {
  ami           = "ami-123456"
  instance_type = "t2.micro"

  lifecycle {
    create_before_destroy = true
    prevent_destroy        = true
    ignore_changes         = [tags["Name"]]
  }
}
\`\`\`

---

## 🔍 Lifecycle Meta-Arguments

### 1. ✅ \`create_before_destroy\`

Ensures a new resource is created before the old one is destroyed.

\`\`\`hcl
lifecycle {
  create_before_destroy = true
}
\`\`\`

- Useful for zero-downtime deployments (e.g., load balancers, servers, etc.).
- Prevents service disruption.

---

### 2. ❌ \`prevent_destroy\`

Stops Terraform from destroying the resource — even if you run \`terraform destroy\`.

\`\`\`hcl
lifecycle {
  prevent_destroy = true
}
\`\`\`

- Helpful for critical resources (e.g., production DBs, secrets).
- Will throw an error if a destroy plan is attempted.

---

### 3. 🔄 \`ignore_changes\`

Tells Terraform to ignore changes to specific attributes.

\`\`\`hcl
lifecycle {
  ignore_changes = [tags, user_data]
}
\`\`\`

- Useful when external systems modify resource attributes.
- Prevents unnecessary drift and updates.

You can ignore:

- Entire attributes (e.g., \`tags\`).
- Specific sub-keys (e.g., \`tags["Name"]\`).

---

## 📦 Complete Example

\`\`\`hcl
resource "aws_s3_bucket" "logs" {
  bucket = "my-logs-bucket"

  lifecycle {
    prevent_destroy      = true
    ignore_changes       = [acl]
    create_before_destroy = true
  }
}
\`\`\`

---

## ⚠️ Tips

| **Tip**                     | **Why Important**                                      |
|------------------------------|-------------------------------------------------------|
| Use \`prevent_destroy\` carefully | It blocks all destroy operations on that resource.   |
| Overuse of \`ignore_changes\` hides drift | Only ignore things you know are safe to ignore. |
| \`create_before_destroy\` needs planning | Especially when resources depend on each other. |`,xg=`# ⚙️ \`provisioner\` Block in Terraform

## 📘 What Is It?

The \`provisioner\` block allows you to run scripts or commands on a local machine or remote resource after it's created or before it's destroyed.

⚠️ **Provisioners should be a last resort.** Prefer using provider features or configuration management tools like Ansible or Chef.

---

## 🧱 Types of Provisioners

### 1. \`local-exec\`

Runs commands on the machine where Terraform is executed.

\`\`\`hcl
resource "null_resource" "example" {
  provisioner "local-exec" {
    command = "echo Hello from Terraform!"
  }
}
\`\`\`

---

### 2. \`remote-exec\`

Runs commands on the provisioned resource via SSH (Linux) or WinRM (Windows).

\`\`\`hcl
resource "aws_instance" "web" {
  ami           = "ami-123456"
  instance_type = "t2.micro"

  provisioner "remote-exec" {
    inline = [
      "sudo apt update",
      "sudo apt install nginx -y"
    ]
  }

  connection {
    type        = "ssh"
    user        = "ubuntu"
    private_key = file("~/.ssh/id_rsa")
    host        = self.public_ip
  }
}
\`\`\`

---

### 3. \`file\`

Uploads a file from your local machine to the remote instance.

\`\`\`hcl
resource "aws_instance" "web" {
  # ...existing code...

  provisioner "file" {
    source      = "app.conf"
    destination = "/etc/myapp/app.conf"
  }

  connection {
    # ...existing code...
  }
}
\`\`\`

---

## 🔁 \`when = destroy\`

Use \`when = "destroy"\` to execute commands before a resource is destroyed.

\`\`\`hcl
resource "null_resource" "cleanup" {
  provisioner "local-exec" {
    when    = "destroy"
    command = "echo Destroying resource!"
  }
}
\`\`\`

---

## 🧠 Common Use Cases

| **Use Case**                  | **Provisioner Type**              |
|--------------------------------|-----------------------------------|
| Notify Slack on deployment     | \`local-exec\`                     |
| Run \`ansible-playbook\`         | \`local-exec\`                     |
| Configure server via SSH       | \`remote-exec\`                    |
| Upload config files            | \`file\`                           |
| Perform cleanup                | \`local-exec\` with \`when = destroy\` |

---

## ⚠️ Cautions

- ❌ **Not idempotent** – Commands may run multiple times.
- 🛠️ **Hard to troubleshoot**.
- 🚫 **Not suitable for production workflows** unless absolutely necessary.
- Use \`null_resource\` if no actual infrastructure resource is needed.

---

## 📦 Full Example

\`\`\`hcl
resource "null_resource" "example" {
  provisioner "local-exec" {
    command = "echo 'Deployment complete!'"
  }

  provisioner "local-exec" {
    when    = "destroy"
    command = "echo 'Cleaning up...'"
  }
}
\`\`\`
`,kg=`# Terraform Best Practices & Concepts

## 1. Introduction to Terraform State

- **State File** (\`terraform.tfstate\`): Keeps track of the resources Terraform manages, storing metadata about your infrastructure.
- **State Management**: By default, Terraform creates the state file in the same directory where you run Terraform commands, but this can be configured to use remote storage like AWS S3, Azure Storage, or Terraform Cloud.

## 2. Remote State and Versioning

- **Remote State**: Use a remote backend (e.g., S3, Terraform Cloud) for storing the state file to allow **collaboration** and **avoid state corruption**.
- **State Versioning**: If using a remote backend like S3, enable versioning to **recover** old versions of the state file if necessary.

## 3. Best Practices for State Management

### 3.1 Always Run \`terraform refresh\`
- Before \`terraform plan\` and \`terraform apply\`, always run \`terraform refresh\` to ensure Terraform has the most up-to-date view of the actual infrastructure.
- **Why?**: Syncs Terraform's state file with real-world infrastructure, preventing mismatches.

### 3.2 Use Remote State Storage
- Store the state file in a **remote backend** (e.g., AWS S3, Terraform Cloud) for **centralized access** and to ensure **team collaboration**.
- **Benefits**:
  - Access the latest state file across team members.
  - Use **state locking** to prevent concurrent applies.
  - Enable **versioning** for backup and recovery.

### 3.3 Enable State Locking
- Use **state locking** with a remote backend (e.g., DynamoDB with S3) to avoid **concurrent applies**, ensuring only one team member can apply changes at a time.

### 3.4 Manual State Backup
- Back up the state file **periodically** and use versioning to recover previous states if needed.

### 3.5 Collaborate Using Version Control
- Use **version control** (e.g., Git) for \`.tf\` files to maintain infrastructure consistency and ensure all team members are aligned on the infrastructure configuration.

## 4. Understanding \`terraform refresh\`

### 4.1 What is \`terraform refresh\`?
- \`terraform refresh\` is used to **sync** the local state file with the actual infrastructure in the cloud. It queries the cloud provider's API (AWS, GCP, Azure, etc.) to get the current status of resources managed by Terraform.

### 4.2 How Does It Work?
- **Communication with Cloud Providers**: It queries the cloud provider's APIs to fetch the actual state of resources.
- **No Changes Made to Infrastructure**: It does not modify any cloud resources but updates the state file to reflect the current state.
- **Drift Detection**: It helps detect changes that may have occurred outside of Terraform (e.g., manual updates in the cloud console).

### 4.3 Why Use \`terraform refresh\`?
- **State Consistency**: Ensures the state file is in sync with real-world infrastructure.
- **Drift Detection**: Detects any "drift" in your infrastructure, such as changes made outside of Terraform.
- **Synchronize State**: Keeps the Terraform state file up to date, preventing errors in future \`terraform apply\` operations.

## 5. Rollback and Error Handling

### 5.1 Terraform Does Not Automatically Roll Back
- If a resource creation or modification fails during \`terraform apply\`, Terraform does not **automatically roll back** previous successful changes.
- **Manual Fix**: You need to address the error, correct the issue, and rerun \`terraform apply\`.

### 5.2 Handling State Drift
- If the state file is outdated or manually altered, use \`terraform refresh\` to **sync** the state file with the actual infrastructure.
- **Remote State Management**: Use a remote backend to ensure the state file is always up-to-date and shared across the team.

## 6. Conclusion

By following these best practices for state management, you can ensure that Terraform works efficiently and consistently in a team environment, while minimizing errors caused by state drift, outdated configurations, and concurrent apply issues.

---

*This provides a summary of Terraform state management best practices and essential concepts. By adhering to these practices, you'll ensure smoother collaboration, safer deployments, and reduced risk of infrastructure drift in your projects.*
`,wg=`# 📘 Terraform State Management – Notes

---

## 🔹 What is Terraform State?

* **State file (\`terraform.tfstate\`)** stores the mapping between your Terraform code and real-world infrastructure.
* Without it → Terraform won’t know what resources exist.
* Acts as Terraform’s **“memory.”**

---

## 🔹 Why is State Important?

1. Tracks **real infra resource IDs** (like \`i-123456\` for EC2).
2. Enables **plan & apply** by comparing  **code vs state vs real infra** .
3. Allows **team collaboration** with remote state.

---

## 🔹 Types of State

1. **Local State** (default)
   * Stored in \`terraform.tfstate\` locally.
   * Not good for teams.
2. **Remote State**
   * Stored in S3, GCS, Terraform Cloud, etc.
   * Supports  **locking, encryption, versioning, sharing** .

---

## 🔹 State Locking

* Prevents **parallel changes** to the same state file.
* Example: In AWS, use **S3 backend + DynamoDB** for locking.
* Error if someone else is applying:

  *“Error acquiring the state lock”*

---

## 🔹 Drift

* **Drift = real infra ≠ Terraform state.**
* Happens when changes are made **outside Terraform** (e.g., AWS console).
* Fix: \`terraform plan\` detects → \`terraform apply\` reconciles infra with code.
* **Code (\`main.tf\`) is always the source of truth.**

---

## 🔹 Important Commands

<pre class="overflow-visible!" data-start="1425" data-end="1870"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"><span class="" data-state="closed"></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>terraform state list              </span><span># list resources in state</span><span>
terraform state show <resource>   </span><span># show details</span><span>
terraform state </span><span>rm</span><span> <resource>     </span><span># remove from state (infra not destroyed)</span><span>
terraform state </span><span>mv</span><span> <old> <new>    </span><span># move resource in state</span><span>
terraform import <res> <</span><span>id</span><span>>       </span><span># import existing infra into state</span><span>
terraform refresh                 </span><span># sync state with real infra (legacy)</span><span>
terraform plan                    </span><span># detect drift</span><span>
</span></span></code></div></div></pre>

---

## 🔹 Importing Resources

* Bring existing infra under Terraform management.

<pre class="overflow-visible!" data-start="1956" data-end="2012"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"><span class="" data-state="closed"></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>terraform import aws_instance.web i-0abc1234
</span></span></code></div></div></pre>

---

## 🔹 Remote State & Data Sharing

* Share infra outputs between projects.

<pre class="overflow-visible!" data-start="2095" data-end="2391"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"><span class="" data-state="closed"></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-hcl"><span>data "terraform_remote_state" "network" {
  backend = "s3"
  config = {
    bucket = "pritam-terraform-state"
    key    = "network/terraform.tfstate"
    region = "ap-south-1"
  }
}

resource "aws_instance" "web" {
  subnet_id = data.terraform_remote_state.network.outputs.subnet_id
}
</span></code></div></div></pre>

---

## 🔹 Security of State

* State may contain  **secrets (passwords, keys)** .
* Always:
  * Encrypt state (e.g., S3 + KMS).
  * Restrict access with IAM.
  * Use Terraform Cloud/Vault for sensitive data.

---

## 🔹 Best Practices

1. Always use **remote state** in teams.
2. Enable  **locking + versioning** .
3. Never edit state manually.
4. Keep code updated → avoid drift.
5. Split states for large projects (network, compute, DB).
6. Use \`terraform import\` instead of recreating existing infra.

---

# 🎯 Interview Tips

* **Q:** What is Terraform state & why is it needed?

  ✅ State is a file mapping resources between code & real infra. Terraform needs it to know what exists and what to change.
* **Q:** How do you handle drift?

  ✅ Run \`terraform plan\` → detect drift → \`terraform apply\` → fix. Code is the source of truth.
* **Q:** Difference between local and remote state?

  ✅ Local = only on your machine. Remote = centralized, supports collaboration, locking, and security.
* **Q:** How do you secure Terraform state?

  ✅ Encrypt, restrict access, use Terraform Cloud or S3 + KMS + DynamoDB.
* **Q:** Have you used \`terraform import\`?

  ✅ Yes, to bring existing resources into Terraform state without recreating.
`,Cg=`# 📘 **Ansible Syllabus for Interview Preparation**

## 1. **Basics & Fundamentals**

* What is Ansible? Why use it?
* Push vs Pull configuration management
* Ansible architecture (Control Node, Managed Node, Inventory, Modules, Playbooks)
* SSH & Agentless nature of Ansible
* YAML basics (syntax, indentation rules)

---

## 2. **Installation & Setup**

* Installing Ansible on Linux/Mac/Windows (WSL)
* Ansible configuration file (\`ansible.cfg\`) — global vs local
* Understanding Ansible inventory (\`/etc/ansible/hosts\`, dynamic inventory)
* Ad-hoc commands (\`ansible all -m ping\`)

---

## 3. **Core Concepts**

* **Inventory**
  * Static inventory
  * Dynamic inventory (AWS, GCP, Azure)
  * Group variables, host variables
* **Modules**
  * Commonly used modules: \`command\`, \`shell\`, \`copy\`, \`template\`, \`file\`, \`service\`, \`yum/apt\`, \`user\`, \`lineinfile\`
  * Difference between \`command\` vs \`shell\`
* **Playbooks**
  * Anatomy of a playbook (hosts, tasks, handlers, vars)
  * Idempotency
  * Variables (host_vars, group_vars, extra_vars, facts)
  * Conditionals (\`when\`, \`register\`)
  * Loops (\`with_items\`, \`loop\`)
  * Handlers & notify
  * Error handling (\`ignore_errors\`, \`failed_when\`)
* **Facts**
  * Gathering facts
  * \`setup\` module

---

## 4. **Intermediate Concepts**

* **Templates**
  * Jinja2 templating
  * Using variables in templates
* **Roles**
  * Role structure
  * Role dependencies
  * Galaxy roles (\`ansible-galaxy install\`)
* **Vault**
  * Encrypting sensitive data
  * \`ansible-vault create/edit/view\`
* **Tags**
  * Running specific tasks with tags
* **Lookups**
  * File, environment, command lookups

---

## 5. **Advanced Concepts**

* **Dynamic Inventory**
  * Writing custom scripts
  * Cloud provider plugins (AWS, Azure, GCP)
* **Custom Modules**
  * Writing your own module in Python
* **Plugins**
  * Callback, filter plugins
* **Strategies**
  * Linear vs free strategy
* **Delegation & Local Actions**
  * \`delegate_to\`, \`local_action\`
* **Blocks**
  * \`block\`, \`rescue\`, \`always\`

---

## 6. **Integration with DevOps Tools**

* Ansible with Jenkins (CI/CD pipelines)
* Ansible with Git (version control, best practices)
* Ansible with Docker & Kubernetes (deploy containers, K8s modules)
* Ansible + Terraform (infra provisioning vs configuration management)

---

## 7. **Best Practices**

* Directory structure for large projects
* Naming conventions
* Using roles effectively
* Reusability & modularity
* Testing with Molecule
* Debugging (\`-vvv\`, \`debug\` module)

---

## 8. **Real-World Scenarios & Interview Questions**

* Deploying an application with Ansible
* Writing a playbook to configure Apache/Nginx
* Handling secrets with Vault
* Rolling updates with Ansible
* Blue-Green deployment strategy
* Common troubleshooting (inventory not found, variable undefined, permission issues)

---

## 9. **Hands-On Practice**

👉 Practice at least:

* Write a playbook to create users and set SSH keys
* Install & configure Apache/Nginx
* Deploy a sample web app with roles
* Encrypt DB passwords with Vault
* Run ad-hoc commands to manage services

---

⚡  **Pro Tip for Interviews** :

Most interviewers don’t just check theory, they’ll ask:

* “Write a playbook to install Nginx and copy an index.html file.”
* “How do you handle secrets?”
* “Difference between static and dynamic inventory?”
* “How does Ansible ensure idempotency?”
`,Sg=`# 📘 **Section 1: Basics & Fundamentals**

### 🔹 What is Ansible?

* **Definition** : Ansible is an **open-source IT automation tool** used for configuration management, application deployment, and orchestration.
* **Developed by** : Michael DeHaan, later acquired by RedHat.
* **Key Point** : It is  **agentless** , meaning no software needs to be installed on managed nodes.
* Works over **SSH** (Linux/Unix) and **WinRM** (Windows).

---

## 📜 Brief History of Ansible

* 🧑‍💻 **Created by Michael DeHaan** in  **2012** .
* 🐧 Initially built as a simple, agentless automation tool for Linux systems.
* 🌟 Gained popularity due to its simplicity compared to Puppet & Chef.
* 🏢 In  **2015** , **Red Hat acquired Ansible** → integrated into Red Hat Automation Suite.
* 🛠️ Today, it’s one of the most widely used automation tools for  **cloud, devops, networking, and security** .

---

🔹 Why use Ansible?

* **Simplicity** : Uses **YAML** (human-readable syntax).
* **Agentless** : No agents running on client machines.
* **Idempotency** : Ensures that applying a playbook multiple times results in the same state.
* **Cross-Platform** : Supports Linux, Unix, macOS, Windows, cloud (AWS, Azure, GCP).
* **Scalability** : Can manage 1 to 1000+ servers with the same playbook.

---

### 🔹 Push vs Pull Configuration Management

* **Push (Ansible approach)** :
* Control node pushes configuration to target nodes over SSH.
* Example: \`ansible-playbook site.yml\` runs from control node → updates all managed nodes.
* **Pull (e.g., Puppet, Chef)** :
* Client nodes periodically pull configs from a central server.

👉 In interviews, highlight that  **Ansible = push-based + agentless** .

---

### 🔹 Ansible Architecture

**Main Components:**

1. **Control Node**
   * The system where Ansible is installed.
   * Executes playbooks and manages inventory.
2. **Managed Nodes**
   * Target machines (servers, network devices, cloud instances).
   * Require only SSH or WinRM access.
3. **Inventory**
   * A list of managed nodes (static or dynamic).
   * Example:
\`\`\`ini
[web]
192.168.1.10
192.168.1.11
\`\`\`
4. **Modules**
   * Predefined units of work (like \`yum\`, \`apt\`, \`service\`, \`copy\`, \`file\`).
   * Example: \`ansible all -m ping\` uses the \`ping\` module.
5. **Playbooks**
   * YAML files defining automation tasks.
   * Example:
\`\`\`yaml
- hosts: web
  tasks:
    - name: Install nginx
      yum:
        name: nginx
        state: present
\`\`\`

---

### 🔹 SSH & Agentless Nature

* Ansible does not require installing software on nodes.
* Uses **SSH keys** or passwords to connect.
* Supports privilege escalation (\`become: yes\` for sudo).

---

### 🔹 YAML Basics (Essential for Playbooks)

* **YAML = “Yet Another Markup Language”**
* Used because it’s  **human-readable** .
* Rules:
  1. Indentation is  **spaces only** , no tabs.
  2. Use \`-\` for lists.
  3. Key-value pairs separated by \`:\`.

Example:

\`\`\`yaml
name: Pritam
skills:
  - DevOps
  - Ansible
  - Terraform
\`\`\`

---

✅ **Interview Checkpoints (Section 1):**

* Explain **Ansible architecture** clearly.
* Difference between  **push vs pull tools** .
* Why Ansible is  **agentless** .
* Show a **basic inventory + ad-hoc command** example.

---

# 📘 **Section 2: Installation & Setup**

### 🔹 Installation of Ansible

**On Linux (Ubuntu/Debian):**

\`\`\`bash
sudo apt update
sudo apt install ansible -y
ansible --version
\`\`\`

**On RHEL/CentOS:**

\`\`\`bash
sudo yum install epel-release -y
sudo yum install ansible -y
\`\`\`

**On macOS (via Homebrew):**

\`\`\`bash
brew install ansible
\`\`\`

**On Windows:**

* Install **WSL (Windows Subsystem for Linux)** and run Ansible inside Linux environment.
* OR use a **control node VM** on Linux.

---

### 🔹 Ansible Configuration File

Default file: \`/etc/ansible/ansible.cfg\`

You can also have:

* **Global config** → \`/etc/ansible/ansible.cfg\`
* **User config** → \`~/.ansible.cfg\`
* **Project config** → \`./ansible.cfg\` (highest priority)

**Important sections inside \`ansible.cfg\`:**

\`\`\`ini
[defaults]
inventory = ./hosts
remote_user = ubuntu
private_key_file = ~/.ssh/id_rsa
host_key_checking = False
\`\`\`

---

### 🔹 Inventory File

Defines managed nodes.

**Static Inventory Example:**

\`\`\`ini
[web]
192.168.1.10
192.168.1.11

[db]
192.168.1.20 ansible_user=ubuntu ansible_ssh_private_key_file=~/.ssh/id_rsa
\`\`\`

**Dynamic Inventory Example:**

* Uses scripts/plugins to fetch hosts dynamically (e.g., AWS EC2, Azure).

\`\`\`bash
ansible-inventory -i inventory_aws_ec2.yml --list
\`\`\`

---

### 🔹 Ad-Hoc Commands

Quick commands without playbooks.

Examples:

\`\`\`bash
# Ping all servers
ansible all -m ping

# Check uptime of all servers
ansible all -m command -a "uptime"

# Install package on web servers
ansible web -m yum -a "name=nginx state=present"
\`\`\`

---

✅ **Interview Checkpoints (Section 2):**

* Installation steps (Ubuntu, CentOS, Windows).
* Explain \`ansible.cfg\` priority.
* Static vs Dynamic inventory.
* Difference between  **ad-hoc command vs playbook** .
`,Ag=`# 🔀 Ansible vs Chef

## 🏗️ Architecture Overview

### ⚡ Ansible

* **Agentless** → No software required on client machines.
* **Control Node** → Machine where Ansible is installed.
* **Managed Nodes** → Target systems (connected via SSH/WinRM).
* **Inventory** → File containing list of managed nodes (\`/etc/ansible/hosts\`).
* **Modules** → Pre-built units of work (install pkg, copy file, start service, etc.).
* **Playbooks** → YAML files describing tasks/automation.
* **Roles** → Way to organize playbooks & tasks into reusable components.

---

### 🍴 Chef

* **Agent-based** → Requires an agent (\`chef-client\`) on every managed node.
* **Chef Server** → Central server that stores configurations (cookbooks, roles, data bags).
* **Workstation** → Developer machine where code is written & pushed to server.
* **Nodes** → Systems where \`chef-client\` pulls configuration from Chef Server.
* **Knife** → CLI tool used to interact with Chef Server.
* **Cookbook** → Collection of configuration & policy.
* **Recipe** → Inside a cookbook; actual steps to configure a node.
* **Ohai** → Tool that collects system information and passes it to Chef.

---

## 🔑 Key Differences

| Feature                           | **Ansible**⚡                               | **Chef**🍴                                  |
| --------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| **Architecture**            | Agentless (SSH/WinRM)                             | Agent-based (\`chef-client\`)                     |
| **Language**                | YAML (easy to read/write)                         | Ruby DSL (developer-centric)                      |
| **Setup**                   | Simple, no extra servers needed                   | Requires Chef Server setup                        |
| **Configuration Pull/Push** | **Push-based**(control node pushes configs) | **Pull-based**(nodes pull from Chef Server) |
| **Ease of Learning**        | Very easy (YAML syntax)                           | Steeper learning curve (Ruby knowledge needed)    |
| **Scalability**             | Scales well, simpler                              | More complex but highly scalable                  |
| **Community Modules**       | Huge library (Ansible Galaxy)                     | Rich ecosystem (Cookbooks from Supermarket)       |

---

## 🏆 Why Many Prefer Ansible over Chef?

* ✅ Easier learning curve (YAML vs Ruby).
* ✅ No need for a dedicated  **Chef Server** .
* ✅ Agentless → less maintenance.
* ✅ Faster to set up in labs, cloud, or hybrid environments.
* ⚠️ Chef is still very strong in **large-scale enterprise setups** where **pull-based** architecture is preferred.


# 🔀 Ansible vs Chef (Architecture Flow)

### ⚡ Ansible → **Push Model**

<pre class="overflow-visible!" data-start="184" data-end="301"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"><span class="" data-state="closed"></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>[ Control Node (Ansible) ]</span><span>
          |
          |  </span><span>SSH</span><span>/</span><span>WinRM</span><span> (Push)
          </span><span>v</span><span>
 </span><span>[ Managed Nodes / Clients ]</span><span>
</span></span></code></div></div></pre>

👉 Ansible **pushes configurations** directly from the control node to managed nodes.

---

### 🍴 Chef → **Pull Model**

<pre class="overflow-visible!" data-start="425" data-end="614"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"><span class="" data-state="closed"></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span></span><span>[ Workstation ]</span><span>
        |
        |  (Upload Cookbooks, Policies)
        </span><span>v</span><span>
 </span><span>[ Chef Server ]</span><span>
        ^
        |  (Pull Configurations)
        |
 </span><span>[ Nodes with chef-client + Ohai ]</span><span>
</span></span></code></div></div></pre>

👉 Chef clients **pull configurations** from the central Chef Server, after registering.

---

⚡  **Key takeaway** :

* **Ansible** → Push-based, agentless, simple.
* **Chef** → Pull-based, agent-based, more complex but powerful.
`,_g=`# 📘 **Section 3: Core Concepts**

---

## 🔹 3.1 **Inventory**

### What is Inventory?

* A file that tells Ansible  **which hosts/servers to manage** .
* Can be **static** or  **dynamic** .

### Static Inventory

\`hosts.ini\`

\`\`\`ini
[web]
192.168.1.10
192.168.1.11

[db]
192.168.1.20 ansible_user=ubuntu ansible_ssh_private_key_file=~/.ssh/id_rsa
\`\`\`

### Dynamic Inventory

* Pulls host info from cloud providers (AWS, Azure, GCP).
* Example (AWS):

\`\`\`yaml
plugin: aws_ec2
regions:
  - ap-south-1
keyed_groups:
  - key: tags.Name
\`\`\`

**Check inventory:**

\`\`\`bash
ansible-inventory -i hosts.ini --list
ansible-inventory -i inventory_aws_ec2.yml --graph
\`\`\`

👉 **Interview Q:** What is the difference between **static** and **dynamic** inventory?

---

## 🔹 3.2 **Modules**

* Small programs that Ansible runs on nodes.
* Over **3000+ modules** available.
* Common modules:
  * \`ping\` → Test connectivity
  * \`command\` → Run commands
  * \`shell\` → Run shell commands
  * \`yum/apt\` → Install packages
  * \`service\` → Manage services
  * \`file\` → Manage files/directories
  * \`copy\` → Copy files
  * \`template\` → Copy files with Jinja2 templating
  * \`user\` → Manage users
  * \`lineinfile\` → Edit config files line by line

**Example:**

\`\`\`bash
ansible all -m ping
ansible web -m yum -a "name=httpd state=present"
\`\`\`

👉 **Interview Q:** What’s the difference between \`command\` and \`shell\` modules?

* \`command\` → does **not** process shell features (\`|\`, \`>\`, \`&&\`).
* \`shell\` → runs through the shell, supports pipes, redirection, variables.

---

## 🔹 3.3 **Playbooks**

* YAML files that  **define automation tasks** .
* More powerful than ad-hoc commands.
* Run using:

\`\`\`bash
ansible-playbook site.yml
\`\`\`

**Example Playbook:**

\`\`\`yaml
- name: Install Apache Web Server
  hosts: web
  become: yes
  tasks:
    - name: Install Apache
      yum:
        name: httpd
        state: present

    - name: Start Apache
      service:
        name: httpd
        state: started
        enabled: yes
\`\`\`

👉 **Interview Q:** What is  **idempotency** ?

* Applying the same playbook multiple times results in the same final state without unnecessary changes.

---

## 🔹 3.4 **Variables**

* Variables make playbooks  **dynamic** .

**Define variables in playbook:**

\`\`\`yaml
- hosts: web
  vars:
    pkg: nginx
  tasks:
    - name: Install package
      yum:
        name: "{{ pkg }}"
        state: present
\`\`\`

**Host/Group Variables:**

\`\`\`yaml
# group_vars/web.yml
pkg: httpd
\`\`\`

**Extra Variables (highest priority):**

\`\`\`bash
ansible-playbook install.yml -e "pkg=nginx"
\`\`\`

👉 **Interview Q:** What are different ways to define variables in Ansible?

* Playbook vars, \`group_vars/\`, \`host_vars/\`, \`vars_files\`, extra-vars, facts.

---

## 🔹 3.5 **Conditionals**

* Use \`when\` to run tasks conditionally.

<details>
<summary>Example with <code>when</code>:</summary>

\`\`\`yaml
- hosts: all
  tasks:
    - name: Install Apache on CentOS
      yum:
        name: httpd
        state: present
      when: ansible_facts['os_family'] == "RedHat"
\`\`\`

</details>

👉 **Interview Q:** How do you run a task only if the OS is Ubuntu?

Use \`when: ansible_facts['os_family'] == "Debian"\`.

---

## 🔹 3.6 **Loops**

* Run tasks multiple times with lists.

**Example with \`loop\`:**

\`\`\`yaml
- hosts: all
  tasks:
    - name: Create multiple users
      user:
        name: "{{ item }}"
        state: present
      loop:
        - user1
        - user2
        - user3
\`\`\`

**Example with \`with_items\`:**

\`\`\`yaml
- name: Install multiple packages
  yum:
    name: "{{ item }}"
    state: present
  with_items:
    - git
    - wget
    - curl
\`\`\`

👉 **Interview Q:** Difference between \`with_items\` and \`loop\`?

* \`loop\` is the  **new standard** ; \`with_items\` is older but still supported.

---

## 🔹 3.7 **Handlers**

* Special tasks that run  **only when notified** .
* Useful for restarting services after a config change.

\`\`\`yaml
- hosts: web
  tasks:
    - name: Copy Apache config
      copy:
        src: httpd.conf
        dest: /etc/httpd/conf/httpd.conf
      notify: Restart Apache

  handlers:
    - name: Restart Apache
      service:
        name: httpd
        state: restarted
\`\`\`

👉 **Interview Q:** When do handlers run?

* At the  **end of the playbook execution** , unless forced with \`--force-handlers\`.

---

## 🔹 3.8 **Facts**

* Facts = system information collected by Ansible.
* Gathered at the beginning of a playbook (unless disabled).

**Example:**

\`\`\`yaml
- hosts: all
  tasks:
    - debug:
        msg: "My hostname is {{ ansible_hostname }} and IP is {{ ansible_default_ipv4.address }}"
\`\`\`

**Disable fact gathering:**

\`\`\`yaml
- hosts: all
  gather_facts: no
\`\`\`




## 📂 1. Default Inventory Location

By default, Ansible looks at:

\`\`\`text
/etc/ansible/hosts
\`\`\`

But you can also specify your own inventory file with:

\`\`\`bash
ansible -i inventory.ini all -m ping
\`\`\`

---

## 📌 2. Creating Groups in Inventory

You can use **INI format** or  **YAML format** .

---

### **INI Format (most common)**

\`\`\`ini
[webservers]
192.168.1.10
192.168.1.11 ansible_user=ubuntu ansible_port=2222

[dbservers]
192.168.1.20

[loadbalancers]
lb1.example.com
\`\`\`

➡️ Here:

* Group **webservers** has 2 hosts
* Group **dbservers** has 1 host
* Group **loadbalancers** has 1 host

---

### **YAML Format (modern style)**

\`\`\`yaml
all:
  children:
    webservers:
      hosts:
        192.168.1.10:
        192.168.1.11:
          ansible_user: ubuntu
          ansible_port: 2222
    dbservers:
      hosts:
        192.168.1.20:
    loadbalancers:
      hosts:
        lb1.example.com:
\`\`\`

---

## 📌 3. Nested Groups (Group of Groups)

Sometimes you want a  **higher-level group** :

\`\`\`ini
[frontend]
192.168.1.10
192.168.1.11

[backend]
192.168.1.20

[production:children]
frontend
backend
\`\`\`

➡️ \`production\` is a parent group that includes  **frontend + backend** .

---

## 📌 4. Using Groups in Playbooks

\`\`\`yaml
- name: Deploy web servers
  hosts: webservers
  tasks:
    - name: Install Apache
      apt:
        name: apache2
        state: present
\`\`\`

If you run:

\`\`\`bash
ansible-playbook -i inventory.ini site.yml --limit webservers
\`\`\`

👉 This will only target **webservers** group.

---

## 📌 5. Special Groups

* **all** → includes every host in inventory
* **ungrouped** → includes hosts not in any group

---

⚡ So basically:

* You define **groups** in inventory (\`INI\` or \`YAML\`).
* You run playbooks targeting  **groups** .
* You can combine, nest, or limit groups during execution.

---

# ✅ **Interview Checkpoints (Section 3)**

* Difference between  **ad-hoc vs playbook** .
* Explain  **idempotency** .
* \`command\` vs \`shell\`.
* How to use **variables** (priority order).
* Example of  **loops** ,  **when conditionals** .
* Handlers (why they run at the end).
* How to get system info using  **facts** .

---
`,Ng=`# 📘 **YAML (Yet Another Markup Language)**

YAML is a **human-readable data serialization format** used in Ansible, Kubernetes, Docker Compose, etc.

Ansible playbooks = YAML files.

---

## 🔹 1. **Basic Rules of YAML**

1. **Case-sensitive** → \`Name\` ≠ \`name\`.
2. **Indentation matters** → Always use **spaces** , never tabs.
   - Standard: 2 spaces or 4 spaces (must be consistent).
3. **Key-Value pairs** use \`:\`

\`\`\`YAML
name: Pritam
role: DevOps
\`\`\`

4. **Lists** use \`-\` (dash + space).

\`\`\`YAML
fruits:
  - apple
  - banana
  - mango
\`\`\`

5. **Strings** → no need for quotes unless special characters.

\`\`\`YAML
message: "Hello World"
path: "/usr/local/bin"
\`\`\`

6. **Comments** → start with \`#\`.

\`\`\`YAML
# This is a comment
\`\`\`

---

## 🔹 2. **YAML Data Types**

### Scalars (Single values)

\`\`\`YAML
string: "Hello Ansible"
integer: 10
float: 3.14
boolean_true: true
boolean_false: false
null_value: null
\`\`\`

### Lists (Arrays)

\`\`\`YAML
cities:
  - Mumbai
  - Delhi
  - Bangalore
\`\`\`

### Dictionaries (Key-Value Maps)

\`\`\`YAML
person:
  name: Pritam
  age: 28
  skills:
    - Ansible
    - Terraform
    - Docker
\`\`\`

👉 You can combine lists & dictionaries:

\`\`\`YAML
users:
  - name: Alice
    role: admin
  - name: Bob
    role: developer
\`\`\`

---

## 🔹 3. **YAML in Ansible Playbooks**

### Example Playbook:

\`\`\`YAML
- name: Install and start Apache
  hosts: web
  become: yes
  vars:
    package_name: httpd
  tasks:
    - name: Install Apache package
      yum:
        name: "{{ package_name }}"
        state: present

    - name: Start Apache service
      service:
        name: "{{ package_name }}"
        state: started
        enabled: yes

\`\`\`

### Breaking It Down:

1. \`- name:\` → Each play starts with a name.
2. \`hosts:\` → Target hosts (from inventory).
3. \`vars:\` → Define variables.
4. \`tasks:\` → List of steps.
5. Each task uses a **module** (like \`yum\`, \`service\`) with arguments.

---

## 🔹 4. **Special YAML Syntax in Ansible**

### Variables

\`\`\`YAML
username: "pritam"
home_dir: "/home/{{ username }}"
\`\`\`

### Multiline Strings

\`\`\`YAML
message: |
  This is a multi-line message.
  Line 2 of the message.
\`\`\`

### Inline List & Dictionary

\`\`\`YAML
colors: ["red", "blue", "green"]
server: { name: "web01", ip: "192.168.1.10" }
\`\`\`

### Anchors & Aliases (Advanced)

\`\`\`YAML
defaults: &defaults
  state: present
  enabled: yes

service:
  <<: *defaults
  name: nginx
\`\`\`

- Reduce duplication using \`&\` (anchor) and \`*\` (alias).

\`\`\`YAML
defaults: &defaults
  state: present
  enabled: yes

service:
  <<: *defaults
  name: nginx
\`\`\`

- Reduce duplication using \`&\` (anchor) and \`*\` (alias).

\`\`\`YAML
defaults: &defaults
  state: present
  enabled: yes

service:
  <<: *defaults
  name: nginx
\`\`\`

---

## 🔹 5. **Common Mistakes in YAML**

❌ Wrong (tabs used):

\`\`\`YAML
name: Pritam
age: 28
\`\`\`

✅ Correct (spaces used):

\`\`\`YAML
name: Pritam
age: 28
\`\`\`

❌ Wrong (colon without space):

\`\`\`YAML
role:admin
\`\`\`

✅ Correct:

\`\`\`YAML
role: admin
\`\`\`

---

## 🔹 6. **YAML Validation**

Use tools to check syntax:

\`\`\`bash
yamllint playbook.yml
\`\`\`

Or online validators like [yamllint.com]().

---

## 🔹 5. **Common Mistakes in YAML**

\`\`\`YAML
name: Pritam
age: 28
\`\`\`

✅ Correct (spaces used):

\`\`\`YAML
name: Pritam
age: 28
\`\`\`

❌ Wrong (colon without space):

\`\`\`YAML
role:admin
\`\`\`

✅ Correct:

\`\`\`YAML
role: admin
\`\`\`

---

## 🔹 6. **YAML Validation**

Use tools to check syntax:

\`\`\`bash
yamllint playbook.yml
\`\`\`

Or online validators like [yamllint.com]().

---

## 🔹 5. **Common Mistakes in YAML**

\`\`\`\`YAML
❌ Wrong (tabs used):

\`\`\`YAML
name: Pritam
age: 28
\`\`\`\`

✅ Correct (spaces used):

\`\`\`YAML
name: Pritam
age: 28
\`\`\`

❌ Wrong (colon without space):

\`\`\`YAML
role:admin
\`\`\`

✅ Correct:

\`\`\`YAML
role: admin
\`\`\`

---

✅ Correct (spaces used):

\`\`\`YAML
name: Pritam
age: 28
\`\`\`

❌ Wrong (colon without space):

\`\`\`YAML
role:admin
\`\`\`

✅ Correct:

\`\`\`YAML
role: admin
\`\`\`

---

## 🔹 6. **YAML Validation**

Use tools to check syntax:

\`\`\`bash
yamllint playbook.yml
\`\`\`

Or online validators like [yamllint.com]().

---

# ✅ **Interview Checkpoints for YAML**

- Explain YAML syntax (key-value, lists, dictionaries).
- How YAML is different from JSON?
  - YAML is more **human-readable** , supports comments, less strict.
- Common mistakes (tabs vs spaces, colons).
- Example playbook explaining indentation and structure.

---

👉 Do you want me to create a **mini YAML practice workbook** (for hands-on practice)?

✅ Correct:

\`\`\`YAML
role: admin
\`\`\`

---

## 🔹 6. **YAML Validation**

\`\`\`bash
yamllint playbook.yml
\`\`\`

Or online validators like [yamllint.com]().

---

# ✅ **Interview Checkpoints for YAML**

Use tools to check syntax:

\`\`\`bash
yamllint playbook.yml
\`\`\`

Or online validators like [yamllint.com]().

---

# ✅ **Interview Checkpoints for YAML**

- Explain YAML syntax (key-value, lists, dictionaries).
- How YAML is different from JSON?
  - YAML is more **human-readable** , supports comments, less strict.
- Common mistakes (tabs vs spaces, colons).
- Example playbook explaining indentation and structure.

---

👉 Do you want me to create a **mini YAML practice workbook** (
`,Tg=`# 📘 **Section 4: Intermediate Concepts in Ansible**

This section moves beyond the basics and covers the **real-world Ansible features** that interviewers love to ask about.

---

## 🔹 4.1 **Templates (Jinja2)**

Templates let you create **dynamic configuration files** using variables.

Ansible uses **Jinja2 templating** (similar to Django/Flask templating).

**Example Template (nginx.conf.j2):**

\`\`\`jinja
server {
  listen 80;
  server_name {{ server_name }};
  root {{ document_root }};
}
\`\`\`

**Playbook Using Template:**

\`\`\`yaml
- hosts: web
  vars:
    server_name: example.com
    document_root: /var/www/html
  tasks:
    - name: Deploy nginx config
      template:
        src: nginx.conf.j2
        dest: /etc/nginx/conf.d/nginx.conf
      notify: Restart nginx
\`\`\`

👉 Interview Q: *What’s the difference between \`copy\` and \`template\`?*

* \`copy\` → Copies a static file.
* \`template\` → Processes variables/placeholders dynamically.

---

## 🔹 4.2 **Roles**

Roles = **modular way to organize playbooks** (reusable units).

**Role Structure:**

\`\`\`text
my-role/
  tasks/main.yml
  handlers/main.yml
  templates/
  files/
  vars/main.yml
  defaults/main.yml
\`\`\`

**Using a Role:**

\`\`\`yaml
- hosts: web
  roles:
    - my-role
\`\`\`

👉 Interview Q: *When do you use roles?*

* For large projects, roles bring  **reusability, readability, and modularity** .

---

## 🔹 4.3 **Ansible Vault**

Vault is used to **encrypt sensitive data** (like passwords, API keys).

**Encrypt a file:**

\`\`\`bash
ansible-vault create secrets.yml
\`\`\`

**Edit a vault file:**

\`\`\`bash
ansible-vault edit secrets.yml
\`\`\`

**Run playbook with vault password:**

\`\`\`bash
ansible-playbook site.yml --ask-vault-pass
\`\`\`

👉 Interview Q: *How do you store DB passwords securely in Ansible?*

* Use **Ansible Vault** to encrypt and reference them in playbooks.

---

## 🔹 4.4 **Tags**

Tags let you run **only specific tasks** from a playbook.

**Example:**

\`\`\`yaml
- hosts: web
  tasks:
    - name: Install Apache
      yum:
        name: httpd
        state: present
      tags: apache

    - name: Install MySQL
      yum:
        name: mariadb
        state: present
      tags: mysql
\`\`\`

**Run only MySQL tasks:**

\`\`\`bash
ansible-playbook site.yml --tags mysql
\`\`\`

👉 Interview Q: *When are tags useful?*

* Large playbooks where you want to run only a subset of tasks.

---

## 🔹 4.5 **Lookups**

Lookups fetch data from outside sources (files, environment variables, commands).

**Examples:**

\`\`\`yaml
- hosts: all
  tasks:
    - name: Read a file
      debug:
        msg: "{{ lookup('file', '/etc/hostname') }}"

    - name: Use environment variable
      debug:
        msg: "{{ lookup('env', 'HOME') }}"
\`\`\`

👉 Interview Q: *What’s the use of \`lookup\` in Ansible?*

* To fetch external data (file, env vars, secret managers, etc.) into playbooks.

---

# ✅ **Interview Checkpoints (Section 4)**

* **Template vs Copy module.**
* **Role structure** and why we use roles.
* **How to secure secrets** (Vault).
* **Use of tags** (run specific tasks).
* **Lookups** (fetching external data).

---
`,Dg=`# 📘 **Section 5: Advanced Concepts in Ansible**

---

## 🔹 5.1 **Dynamic Inventory**

* Static inventory is fine for a few servers.
* In real environments (AWS, Azure, GCP, Kubernetes), hosts change dynamically.
* **Dynamic inventory** pulls host data directly from cloud APIs.

**Example: AWS EC2 Dynamic Inventory (plugin):**

\`aws_ec2.yml\`

\`\`\`yaml
plugin: aws_ec2
regions:
  - ap-south-1
keyed_groups:
  - key: tags.Name
    prefix: tag
filters:
  instance-state-name: running
\`\`\`

Run it:

\`\`\`bash
ansible-inventory -i aws_ec2.yml --list
\`\`\`

👉 **Interview Q:** *What’s the difference between static and dynamic inventory?*

* Static = fixed list of hosts in file.
* Dynamic = generated from external sources (cloud APIs, DB, etc.).

---

## 🔹 5.2 **Custom Modules**

* If built-in modules don’t cover a use case, you can write your own (Python, PowerShell, etc.).

**Example: Simple Python module**

\`\`\`python
#!/usr/bin/python

from ansible.module_utils.basic import AnsibleModule

def main():
    module = AnsibleModule(argument_spec=dict(name=dict(required=True)))
    response = {"message": "Hello " + module.params['name']}
    module.exit_json(changed=False, meta=response)

if __name__ == '__main__':
    main()
\`\`\`

Use in playbook:

\`\`\`yaml
- hosts: all
  tasks:
    - name: Run custom hello module
      hello:
        name: Pritam
\`\`\`

👉 **Interview Q:** *Have you written a custom module? Why?*

* When required functionality is missing from built-ins.

---

## 🔹 5.3 **Plugins**

Plugins extend Ansible’s behavior.

Types:  **callback, connection, lookup, filter** .

**Example: Callback plugin (log all output to JSON):**

\`\`\`bash
export ANSIBLE_STDOUT_CALLBACK=json
\`\`\`

👉 **Interview Q:** *Difference between modules and plugins?*

* **Module** = does work on nodes.
* **Plugin** = extends Ansible core engine behavior.

---

## 🔹 5.4 **Strategies**

Define  **how tasks run across multiple hosts** .

* **Linear (default):**

  Runs task 1 on all hosts → then task 2 on all hosts → etc.
* **Free strategy:**

  Each host runs tasks independently as fast as possible.

\`\`\`yaml
- hosts: all
  strategy: free
  tasks:
    - name: Install package
      yum:
        name: nginx
        state: present
\`\`\`

👉 **Interview Q:** *When would you use \`free\` strategy?*

* When tasks are independent (faster execution).

---

## 🔹 5.5 **Delegation & Local Actions**

Sometimes you want tasks to run **on a different host** than the target.

**Delegate to another host:**

\`\`\`yaml
- hosts: web
  tasks:
    - name: Run task on DB server
      command: echo "DB Update Trigger"
      delegate_to: db01
\`\`\`

**Run locally:**

\`\`\`yaml
- hosts: web
  tasks:
    - name: Create file locally
      local_action: command touch /tmp/localfile
\`\`\`

👉 **Interview Q:** *What is \`delegate_to\` used for?*

* Running a task on another host (common in load balancers, DB migrations).

---

## 🔹 5.6 **Blocks, Rescue & Always**

Blocks group multiple tasks and handle failures.

\`\`\`yaml
- hosts: all
  tasks:
    - block:
        - name: Install nginx
          yum:
            name: nginx
            state: present

        - name: Start nginx
          service:
            name: nginx
            state: started

      rescue:
        - name: Print failure message
          debug:
            msg: "Installation failed!"

      always:
        - name: Always run cleanup
          file:
            path: /tmp/tempfile
            state: absent
\`\`\`

👉 **Interview Q:** *Why use \`block\` in Ansible?*

* To group tasks and handle errors with **rescue** and **always** sections.

---

# ✅ **Interview Checkpoints (Section 5)**

* Explain **dynamic inventory** (AWS/GCP/Azure use cases).
* Difference between  **modules vs plugins** .
* When do you use  **custom modules** ?
* Strategies →  **linear vs free** .
* \`delegate_to\` vs \`local_action\`.
* \`block\`, \`rescue\`, \`always\` for error handling.

---
`,Mg=`# 🔥 Ansible Commands Cheat Sheet (Everything You’ll Need)

---

## 1. 🏃 Running a Playbook

\`\`\`bash
ansible-playbook site.yml
\`\`\`

👉 Runs the playbook \`site.yml\` on the inventory specified (default: \`/etc/ansible/hosts\`).

If you have a custom inventory:

\`\`\`bash
ansible-playbook -i inventory.ini site.yml
\`\`\`

---

## 2. 🎯 Run Against Specific Groups or Hosts

* Run against a  **group** :

\`\`\`bash
ansible-playbook -i inventory.ini site.yml --limit webservers
\`\`\`

* Run against a  **specific host** :

\`\`\`bash
ansible-playbook -i inventory.ini site.yml --limit host1.example.com
\`\`\`

* Run against **multiple hosts** (comma-separated):

\`\`\`bash
ansible-playbook -i inventory.ini site.yml --limit "host1,host2"
\`\`\`

* Run against  **a single host inside a group** :

\`\`\`bash
ansible-playbook -i inventory.ini site.yml --limit "webservers[0]"
\`\`\`

---

## 3. 🧪 Dry Run (Check Mode)

See what Ansible *would do* without making changes:

\`\`\`bash
ansible-playbook site.yml --check
\`\`\`

👉 Super useful before applying changes in production.

---

## 4. 🔑 Using Vault (Encrypted Files)

Encrypt a file:

\`\`\`bash
ansible-vault encrypt secrets.yml
\`\`\`

Decrypt:

\`\`\`bash
ansible-vault decrypt secrets.yml
\`\`\`

Edit securely:

\`\`\`bash
ansible-vault edit secrets.yml
\`\`\`

Run a playbook that uses vault-encrypted vars:

\`\`\`bash
ansible-playbook site.yml --ask-vault-pass
\`\`\`

Or use a password file:

\`\`\`bash
ansible-playbook site.yml --vault-password-file ~/.vault_pass.txt
\`\`\`

---

## 5. 📂 Running Specific Tags

If your playbook has tags like this:

\`\`\`yaml
- name: Install Apache
  yum:
    name: httpd
    state: present
  tags: install
\`\`\`

Run only that tag:

\`\`\`bash
ansible-playbook site.yml --tags "install"
\`\`\`

Skip certain tags:

\`\`\`bash
ansible-playbook site.yml --skip-tags "install"
\`\`\`

---

## 6. 🔄 Run Specific Roles or Tasks

Run only one role by using tags:

\`\`\`bash
ansible-playbook site.yml --tags "role_name"
\`\`\`

Run only a specific task by name:

\`\`\`bash
ansible-playbook site.yml --start-at-task="Install Apache"
\`\`\`

---

## 7. 🖥️ Running Ad-Hoc Commands (Quick Tasks)

Instead of writing a playbook, you can run tasks quickly:

* Ping all hosts:

\`\`\`bash
ansible all -m ping
\`\`\`

* Run a command:

\`\`\`bash
ansible all -m command -a "uptime"
\`\`\`

* Install a package:

\`\`\`bash
ansible webservers -m yum -a "name=httpd state=present"
\`\`\`

* Copy a file:

\`\`\`bash
ansible webservers -m copy -a "src=./index.html dest=/var/www/html/"
\`\`\`

---

## 8. 📊 Gather Current Config (Facts)

To collect facts about a system:

\`\`\`bash
ansible all -m setup
\`\`\`

👉 This shows OS, IP, kernel, memory, etc.

Run playbook with facts disabled (faster):

\`\`\`bash
ansible-playbook site.yml --skip-tags "facts"
\`\`\`

---

## 9. 🚀 Useful Execution Flags

* Run with  **extra variables** :

\`\`\`bash
ansible-playbook site.yml -e "user=pritam env=production"
\`\`\`

* Run with  **verbose output** :

\`\`\`bash
ansible-playbook site.yml -v
ansible-playbook site.yml -vvv   # max verbosity (debugging)
\`\`\`

* Limit forks (parallelism):

\`\`\`bash
ansible-playbook site.yml --forks 5
\`\`\`

* Continue from failed task:

\`\`\`bash
ansible-playbook site.yml --start-at-task="Task Name"
\`\`\`

---

## 10. 🌀 Running in Background (Async)

Run a task asynchronously:

\`\`\`bash
ansible all -m shell -a "sleep 60" -B 90 -P 10
\`\`\`

* \`-B\` = time to wait (seconds)
* \`-P\` = poll interval

---

## 11. 🔐 Privilege Escalation (sudo)

\`\`\`bash
ansible-playbook site.yml --ask-become-pass
\`\`\`

Or without prompt (if nopass sudo):

\`\`\`bash
ansible-playbook site.yml --become
\`\`\`

---

## 12. 📝 Dry Run + Diff (Preview Changes)

See exactly what would change in files/configs:

\`\`\`bash
ansible-playbook site.yml --check --diff
\`\`\`

---

# ✅ Summary

* **Run playbooks** : \`ansible-playbook site.yml\`
* **Dry run** : \`--check\`
* **Vault** : \`--ask-vault-pass\` or \`--vault-password-file\`
* **Roles/Tags** : \`--tags\`, \`--skip-tags\`, \`--start-at-task\`
* **Groups/Hosts** : \`--limit\`
* **Facts** : \`ansible all -m setup\`
* **Ad-hoc commands** : \`ansible all -m ping\` etc.
* **Verbose logs** : \`-v\`, \`-vvv\`

---


# 📑 Ansible Command Summary Table

| **Use Case**                        | **Command**                                                     | **Notes**                              |
| ----------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------- |
| **Run a Playbook**                  | \`ansible-playbook site.yml\`                                         | Runs the playbook on all hosts in inventory. |
| **Dry Run (Check Mode)**            | \`ansible-playbook site.yml --check\`                                 | Simulates changes, no changes applied.       |
| **Verbose Output**                  | \`ansible-playbook site.yml -v\`(or \`-vvv\`)                         | Adds more debugging info.                    |
| **Limit to Host(s)**                | \`ansible-playbook site.yml --limit host1,host2\`                     | Runs only on specified hosts.                |
| **Run on a Group**                  | \`ansible-playbook site.yml --limit webservers\`                      | Executes only for \`webservers\`group.       |
| **Tags - Run Specific Tasks**       | \`ansible-playbook site.yml --tags "install,config"\`                 | Runs only tagged tasks.                      |
| **Skip Tags**                       | \`ansible-playbook site.yml --skip-tags "debug"\`                     | Skips specific tagged tasks.                 |
| **Ask for Vault Password**          | \`ansible-playbook site.yml --ask-vault-pass\`                        | Prompts for vault decryption password.       |
| **Use Vault File**                  | \`ansible-playbook site.yml --vault-password-file ~/.vault_pass.txt\` | Uses saved password file.                    |
| **Decrypt Vault File**              | \`ansible-vault decrypt secrets.yml\`                                 | Decrypts a vault-encrypted file.             |
| **Encrypt File**                    | \`ansible-vault encrypt secrets.yml\`                                 | Encrypts a YAML file.                        |
| **Edit Encrypted File**             | \`ansible-vault edit secrets.yml\`                                    | Opens vault file for editing.                |
| **Ad-hoc Command (Ping All Hosts)** | \`ansible all -m ping\`                                               | Checks connectivity.                         |
| **Ad-hoc (Run Command)**            | \`ansible all -a "uptime"\`                                           | Runs shell command on all hosts.             |
| **Ad-hoc (Use Module)**             | \`ansible webservers -m yum -a "name=httpd state=present"\`           | Installs Apache on group.                    |
| **Check Current Configuration**     | \`ansible-inventory --list\`                                          | Shows full inventory with vars.              |
| **List Hosts in Group**             | \`ansible webservers --list-hosts\`                                   | Lists all hosts in \`webservers\`.           |
| **Syntax Check Only**               | \`ansible-playbook site.yml --syntax-check\`                          | Verifies YAML/playbook structure.            |
| **Dry Run + Diff**                  | \`ansible-playbook site.yml --check --diff\`                          | Shows what would change.                     |
| **Run Specific Role**               | \`ansible-playbook site.yml --tags "role_name"\`                      | Runs only that role.                         |
| **Parallel Execution**              | \`ansible-playbook site.yml -f 20\`                                   | Runs on 20 hosts in parallel.                |
| **Become (sudo)**                   | \`ansible-playbook site.yml -K\`                                      | Asks for privilege escalation password.      |
| **Use Specific Inventory**          | \`ansible-playbook -i inventory.ini site.yml\`                        | Uses custom inventory file.                  |
| **Check Host Variables**            | \`ansible -m debug -a "var=hostvars['host1']"\`                       | Shows variables for a host.                  |
| **Display Facts**                   | \`ansible host1 -m setup\`                                            | Shows all facts (OS, IP, CPU, etc.).         |
`,jg=`<<<<<<< HEAD
🛣️ Chef Learning Roadmap: Beginner → Master
🟢 Stage 1: Basics of Infrastructure as Code (IaC) & Chef
📌 Concepts to Learn:
What is Infrastructure as Code (IaC)?

Declarative vs Imperative IaC tools

Introduction to Chef

Chef vs Puppet vs Ansible vs Terraform

Chef Components:

Chef Server

Chef Workstation

Chef Client / Node

✅ Hands-on Goals:
Set up Chef DK / Chef Workstation

Set up a test VM (VirtualBox, Vagrant, or Cloud)

Bootstrap a node using knife

🟡 Stage 2: Core Chef Concepts
📌 Chef Essentials:
Chef Architecture Deep Dive

Chef Recipes

Basic Ruby for writing recipes

Resources (package, service, file, template, etc.)

Chef Cookbooks

Structure & Files (metadata.rb, recipes, templates, attributes)

Chef Attributes

Default, override, force_override, automatic

Chef Templates (ERB)

Chef Resource Properties and Notifications

notifies, subscribes

Chef Run Context & Execution Phase

✅ Hands-on Goals:
Create a simple cookbook

Deploy Apache/Nginx using a recipe

Use templates to manage configuration files

🟠 Stage 3: Intermediate Chef – Expanding Cookbooks & Nodes
📌 Advanced Topics:
Chef Roles

Chef Environments

Chef Data Bags

Chef Search

Chef Node Object

Idempotency in Chef

✅ Hands-on Goals:
Create roles (e.g., web_server, db_server)

Use data bags to manage user credentials

Implement environments (dev, staging, prod)

🔵 Stage 4: Chef Ecosystem & Tooling
📌 Chef Tools:
Knife CLI (advanced usage)

Ohai – Node data collection

Test Kitchen – Local testing of cookbooks

InSpec – Compliance testing

ChefSpec – Unit testing of cookbooks

Berkshelf – Dependency management

✅ Hands-on Goals:
Write automated tests for cookbooks using ChefSpec and InSpec

Use Test Kitchen to test recipes locally

Manage cookbook dependencies with Berkshelf

🔴 Stage 5: Scaling Chef in Production
📌 Enterprise Concepts:
Chef Automate

Workflow, Compliance, Visibility

Chef Policyfiles (modern alternative to roles/environments)

Chef Habitat (app automation framework)

Handling Cookbook Versions

Chef Server HA setup

Integrating Chef with CI/CD tools (Jenkins, GitLab CI)

Secrets Management with Chef Vault or HashiCorp Vault

✅ Hands-on Goals:
Use Chef Automate dashboards

Migrate from roles/environments to Policyfiles

Set up CI pipeline to lint, test, and deploy cookbooks

🧠 Bonus Skills:
📌 Learn related tools and skills:
Ruby programming (intermediate level)

Linux shell scripting

Version control with Git

Cloud platforms (AWS/Azure/GCP)

Networking basics (for node configuration)

Monitoring & Logging integration with Chef-managed nodes

📘 Resources & Tools
📚 Official Documentation:
Chef Docs

Learn Chef Tutorials

Chef GitHub

📺 YouTube / Courses:
Chef on Udemy or Pluralsight

FreeCodeCamp IaC videos (for IaC fundamentals)

🧪 Practice Platforms:
Katacoda (interactive Chef labs)

TryChef (Chef Workstation practice)

📁 Folder Structure Suggestion for Your Repo (Chef/)
Copy
Edit
Chef/
├── 01_Basics/
├── 02_Recipes/
├── 03_Cookbooks/
├── 04_Attributes_Templates/
├── 05_Advanced_Chef/
├── 06_Testing_Chef/
├── 07_Chef_Automate/
├── 08_Projects/
│   ├── WebServer_Deployment/
│   └── CI-CD_Integration/
└── README.md
=======
## 🧭 **Chef Learning Roadmap: Beginner to Master**

---

### 🟢 **1. Foundations (Beginner Level)**

✅ Goal: Understand what Chef is and how it works.

* 📖 Learn the Basics of Configuration Management
  * What is Infrastructure as Code (IaC)?
  * Why we use CM tools like Chef, Puppet, Ansible, etc.
* 🔍 Understand Chef’s Core Concepts
  * 🍱  **Cookbooks** , 🍳 **Recipes**
  * 🔧  **Resources** , 🧾 **Attributes**
  * 🗂️  **Templates** , 🗃️ **Files**
  * 📦  **Metadata.rb** , 📄 **Default.rb**
* 📚 Learn Ruby Basics (Chef uses Ruby DSL)
  * Variables, Loops, Conditionals, Blocks
  * Writing simple Ruby scripts
* ⚙️ Set Up Your Lab
  * Install Chef Workstation on local machine
  * Use Vagrant or VirtualBox to simulate nodes
  * Setup a basic Chef Server or use **Hosted Chef**

---

### 🟡 **2. Intermediate – Hands-On Skills**

✅ Goal: Get comfortable writing and testing Chef configurations.

* 🏗️ Develop & Upload Cookbooks
  * Write reusable cookbooks
  * Use \`knife\` to upload and manage them
* 🧪 Learn Chef Testing Tools
  * ✅ **Test Kitchen** – for testing cookbooks locally
  * 🧫 **InSpec** – for compliance testing
  * 🔄 **ChefSpec** – unit testing of recipes
* 🔁 Master Node Management
  * Node registration, bootstrapping
  * Writing  **roles** ,  **environments** , and **data bags**
* 🌐 Work With Cloud
  * Use **knife plugins** to connect Chef with:
    * AWS ☁️
    * Azure ☁️
    * GCP ☁️
* 🔐 Understand Chef Vault
  * Encrypt secrets like DB passwords or API keys

---

### 🔵 **3. Advanced – Production Readiness**

✅ Goal: Operate Chef at scale across environments.

* 🧩 Architect Scalable Chef Infrastructure
  * Configure Chef Server for HA (High Availability)
  * Manage multiple environments (dev/stage/prod)
* 🗺️ Learn Policy-Based Management
  * Use **Policyfiles** (modern alternative to roles/environments)
* 🛠️ Integrate CI/CD for Chef
  * Integrate Chef with GitHub Actions / Jenkins
  * Auto-deploy cookbooks with tests
* 🧰 Explore Knife Plugins & Custom Ruby Tools
  * Build your own \`knife\` commands
  * Extend Chef with custom resources

---

### 🔴 **4. Expert – DevOps Integration & Contribution**

✅ Goal: Master automation with Chef in a DevOps environment.

* 🚀 Integrate Chef with DevOps Pipelines
  * Terraform + Chef for full Infra Provisioning + Configuration
  * Docker + Chef for hybrid containers + bare-metal setup
* 📊 Use Chef Automate
  * Monitor compliance
  * Visualize node configurations
  * Manage drift and reporting
* 🧠 Become a Contributor
  * Contribute to **Supermarket** (Chef's cookbook repo)
  * Join the **Chef Community Slack / Forums**
* 📝 Certify Your Skills
  * 🔖 Take **Chef Certified Developer** or **Chef Automate** certifications

---

## 🛠️ **Tools to Practice**

| Tool                     | Purpose                 |
| ------------------------ | ----------------------- |
| VirtualBox / Vagrant     | Simulate local nodes    |
| Test Kitchen             | Cookbook testing        |
| InSpec                   | Compliance testing      |
| Git                      | Version control         |
| Jenkins / GitHub Actions | CI/CD Integration       |
| AWS Free Tier            | Cloud Chef demo         |
| Chef Automate            | Monitoring + visibility |

---

## 📚 Recommended Resources

* 🔗 [Learn Chef Official Site]()
* 📘 *Learn Chef in a Month of Lunches* (book)
* 📺 YouTube: "Chef Essentials" by Linux Academy
* 🧑‍💻 GitHub: Search open-source cookbooks to reverse engineer

---

## 🎯 Final Goal: Become a **Chef + DevOps** Pro

You'll be able to:

* Write, test, and deploy cookbooks
* Manage 100s of nodes across environments
* Integrate Chef into CI/CD pipelines
* Use Chef Automate for visibility and auditing
* Build resilient, repeatable, and secure infra at scale
>>>>>>> 15a0c0d712622b7f2b4b0db58ec7159537ea52b9
`,Eg=`# 👨‍🍳 **Chef - Configuration Management Tool**

## 🧑‍💻 **Introduction**

* 🆓 **Chef** is an **open-source** tool developed by  **Opscode** .
* 👨‍🔧  **Adam Jacob** , co-founder of Opscode, is the creator of Chef.
* 📝 Uses **Ruby DSL** to create infrastructure automation blocks like **Recipes** and  **Cookbooks** .
* 🛠️ Automates infrastructure tasks, reducing manual effort.

---

## ❓ **Why Chef?**

* ⚙️ Automates server configuration & provisioning.
* 🧱 Built using  **Ruby DSL (Domain-Specific Language)** .
* ☁️ Easily integrates with  **cloud providers** .
* 💼 Used in **DevOps** for deployment and management (on-prem & cloud).

---

## ✨ **Features of Chef**

* 💎 Written in  **Ruby** , enabling expressive configuration.
* 🔍 Chef checks the **actual state** of a node instead of making assumptions.
* ☁️ Perfect for managing **cloud-based infrastructure** (compute, storage, software).

---

## ✅ **Advantages**

* 🚪 **Low barrier to entry** if you're familiar with Ruby.
* 🔗 **Great cloud integration** using \`knife\` tool.
* 🌐 Supports  **multi-cloud environments** .

---

## ❌ **Disadvantages**

* 👶 **Cookbooks need careful handling** to avoid conflicts.
* 👤 Only **Chef Solo** available (no server mode in open source).
* 🟡 Best suited for  **AWS** , not other platforms.
* 📘 Not beginner-friendly if you're new to Ruby.
* 📄 **Documentation** needs improvement.

---

## 🧩 **Key Building Blocks**

### 📜 **1. Recipe**

* 📋 A set of  **instructions (resources + attributes)** .
* 🔁 Executed during the  **Chef client run** .
* 🏗️ Helps bring the node to the  **desired state** .
* 🧰 Main worker unit of a cookbook.

---

### 📚 **2. Cookbook**

* 📦 A  **collection of recipes** .
* ☁️ Gets  **uploaded to the Chef server** .
* 🧭 Ensures infrastructure matches the recipe-defined state.

---

### ⚙️ **3. Resource**

* 🔧 The **building blocks** of a recipe.
* Each resource has:
  * **Type** (e.g., \`package\`, \`user\`)
  * **Name**
  * **Attributes**

🔨 **Examples of Resources:**

| Resource                     | Description                |
| ---------------------------- | -------------------------- |
| 📦\`package\`                | Manages software packages  |
| ⚙️\`service\`              | Manages system services    |
| 👤\`user\`                   | Manages users              |
| 👥\`group\`                  | Manages groups             |
| 📄\`template\`               | Embedded Ruby file manager |
| 📁\`file\`,\`cookbook_file\` | File handling              |
| 🗂️\`directory\`            | Directory operations       |
| 🖥️\`execute\`              | Runs shell commands        |
| ⏰\`cron\`                   | Cron job scheduler         |

---

### 🔑 **4. Attribute**

* 🧠 Used as **key-value** pairs.
* 🧬 Can define node settings or variables.
* 🥇 Precedence levels determine final values.

---

### 🗂️ **5. File**

* 📂 Static files stored under \`files/\` in a cookbook.
* 📌 Copied to target nodes during execution.

---

### 📑 **6. Template**

* 🧾 Dynamic files using  **Embedded Ruby (ERB)** .
* 🧬 Replaces placeholders with  **attribute values** .
* 🔚 Ends with \`.erb\`.

---

### 🧾 **7. Metadata.rb**

* 🪪 Contains metadata like:
  * 📛 Name
  * 📦 Dependencies
  * ℹ️ Description
* 📬 Helps the Chef server **build run-lists** correctly.

---

## 🧱 **Default Cookbook Structure**

<pre class="overflow-visible!" data-start="3295" data-end="3515"><div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary"><div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary dark:bg-token-main-surface-secondary select-none rounded-t-[5px]">cpp</div><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-sidebar-surface-primary text-token-text-secondary dark:bg-token-main-surface-secondary flex items-center rounded-sm px-2 font-sans text-xs"><button class="flex gap-1 items-center select-none px-4 py-1" aria-label="Copy"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-xs"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>Copy</button><span class="" data-state="closed"><button class="flex items-center gap-1 px-4 py-1 select-none"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-xs"><path d="M2.5 5.5C4.3 5.2 5.2 4 5.5 2.5C5.8 4 6.7 5.2 8.5 5.5C6.7 5.8 5.8 7 5.5 8.5C5.2 7 4.3 5.8 2.5 5.5Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.66282 16.5231L5.18413 19.3952C5.12203 19.7678 5.09098 19.9541 5.14876 20.0888C5.19933 20.2067 5.29328 20.3007 5.41118 20.3512C5.54589 20.409 5.73218 20.378 6.10476 20.3159L8.97693 19.8372C9.72813 19.712 10.1037 19.6494 10.4542 19.521C10.7652 19.407 11.0608 19.2549 11.3343 19.068C11.6425 18.8575 11.9118 18.5882 12.4503 18.0497L20 10.5C21.3807 9.11929 21.3807 6.88071 20 5.5C18.6193 4.11929 16.3807 4.11929 15 5.5L7.45026 13.0497C6.91175 13.5882 6.6425 13.8575 6.43197 14.1657C6.24513 14.4392 6.09299 14.7348 5.97903 15.0458C5.85062 15.3963 5.78802 15.7719 5.66282 16.5231Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.5 7L18.5 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>Edit</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>cookbooks/
└── nginx/
    ├── attributes/
    ├── definitions/
    ├── files/
    │   └── </span><span>default</span><span>/
    ├── libraries/
    ├── providers/
    ├── recipes/
    ├── resources/
    └── templates/
        └── </span><span>default</span><span>/
</span></span></code></div></div></pre>

---

## 🧑‍🤝‍🧑 **Chef vs Other Tools**

### 🐶 **Puppet**

* 🛠️ Standard way of managing infrastructure.
* 📈 Centralized specs to update, manage, and scale infrastructure.
* 🔁 Handles upgrades, security, and monitoring.

---

### ⚡ **Ansible**

* 😌 Simple and **agentless** (uses SSH).
* 🐍 Written in Python.
* 📜 Uses  **YAML-based playbooks** .
* 🌍 Has a reusable module repository called  **Ansible Galaxy** .

---

### 🧂 **SaltStack**

* 🧠 Data-driven orchestration and execution engine.
* 📡 Real-time communication and config management.
* ⚙️ Works on any infrastructure or stack.

---

### 🧵 **Fabric**

* 🐍 Python-based API for configuration tasks.
* 📤 Allows scripting deployments and infrastructure operations.
`,Og=`# 🏗️ **Chef - Architecture Overview**

👨‍🍳 **Chef** follows a **three-tier client-server model** for configuration management and automation.

---

## 🧩 **Chef Architecture Components**

### 💻 **1. Chef Workstation**

* 🏠 **Local machine** where:
  * 🧱 Cookbooks, Recipes, and other artifacts are  **developed** .
  * 🛠️ Uses **command-line tools** like \`knife\` to interact with the server.
* 📤 Uploads configurations to the  **Chef Server** .
* 📌 Primary  **developer interface** .

---

### 🖥️ **2. Chef Server**

* 🧠 Acts as the **central hub** of the Chef ecosystem.
* 🗂️ Stores all the uploaded  **Cookbooks** ,  **Policies** , and  **Metadata** .
* 🔁 Handles requests from **nodes** during Chef client runs.
* ☁️ Can be:
  * 🌐 **Hosted Chef Server** (SaaS)
  * 🏢 **On-premise Chef Server**

---

### 🖥️ **3. Chef Nodes**

* 🧑‍💻 Actual **target machines** (servers, VMs, containers, etc.) that:
  * Need to be **configured** and  **managed** .
* 🧩 Each node runs:
  * ⚙️ **Chef Client** → Talks to Chef Server.
  * 🧠 **Ohai** → Collects system info (CPU, Memory, OS, etc.).
* 🔄 Chef Client periodically:
  * 📥 Fetches **cookbooks**
  * 🛠️ Applies configurations
  * 📤 Sends status reports

---

## 🔁 **Chef Workflow Summary**

1. 🧑‍💻 **Write code** (recipes/cookbooks) on  **Chef Workstation** .
2. 🔪 Use **knife** to **upload** configurations to  **Chef Server** .
3. 🖥️ **Nodes** (with Chef client) **pull configs** and apply them.
4. 🧠 **Ohai** gathers node info and syncs with server.

---

### 📌 **Chef Communication Flow**

\`\`\`mermaid
graph TD
  A["💻 Chef Workstation"]
  B["🔪 knife CLI"]
  C["🖥️ Chef Server"]
  D1["🧑‍💻 Node 1"]
  D2["🧑‍💻 Node 2"]
  D3["🧑‍💻 Node N"]
  E1["⚙️ Chef Client"]
  E2["⚙️ Chef Client"]
  E3["⚙️ Chef Client"]
  F1["🧠 Ohai"]
  F2["🧠 Ohai"]
  F3["🧠 Ohai"]

  A --> B
  B --> C
  C --> E1
  C --> E2
  C --> E3
  E1 --> D1
  E2 --> D2
  E3 --> D3
  F1 --> C
  F2 --> C
  F3 --> C
  D1 --> F1
  D2 --> F2
  D3 --> F3
\`\`\`

`,zg=`
# 📘 Docker Syllabus (Zero → Hero)

## 1. **Introduction & Basics**

* What is Docker? Why use it?
* Traditional Virtualization vs Containers
* Core Docker Concepts:
  * **Images, Containers, Volumes, Networks, Registries**
* Installation & Setup (Linux, Windows, Mac)

---

## 2. **Docker Fundamentals**

* Docker Architecture (Client–Daemon–Registry)
* Hello World with Docker
* Basic Commands:
  * \`docker run\`, \`docker ps\`, \`docker images\`, \`docker stop\`, \`docker rm\`, \`docker exec\`
* Container lifecycle (create → start → stop → restart → delete)

---

## 3. **Docker Images**

* What is an Image?
* Pulling & Pushing Images from **Docker Hub**
* Layers in Docker Images
* Building Custom Images with **Dockerfile**
  * Base Images
  * Instructions (\`FROM\`, \`RUN\`, \`COPY\`, \`ADD\`, \`EXPOSE\`, \`CMD\`, \`ENTRYPOINT\`, \`ENV\`, \`WORKDIR\`)
* Best practices for writing Dockerfiles
* Image optimization (reducing size, multi-stage builds)

---

## 4. **Docker Volumes & Storage**

* Ephemeral nature of containers
* **Volumes vs Bind Mounts**
* Managing Volumes (\`docker volume create/ls/rm\`)
* Data persistence
* Sharing data between containers

---

## 5. **Docker Networking**

* Default Docker networks (bridge, host, none)
* Creating custom networks
* Container-to-container communication
* Exposing ports
* Linking containers
* DNS in Docker networks

---

## 6. **Docker Compose**

* What is Docker Compose?
* Installing Compose
* \`docker-compose.yml\` structure
* Multi-container applications
* Scaling services (\`docker-compose up --scale\`)
* Best practices for Compose files

---

## 7. **Advanced Docker Usage**

* Logs & Debugging (\`docker logs\`, \`docker inspect\`, \`docker stats\`, \`docker top\`)
* Resource Limits (\`--cpus\`, \`--memory\`)
* Healthchecks in Dockerfiles
* Entrypoint vs CMD (deep dive)
* Docker BuildKit
* Environment variables & \`.env\` files

---

## 8. **Docker Registry**

* Docker Hub, Docker Store
* Private Docker Registry
* Authentication & Authorization
* Pushing/Pulling to private registry

---

## 9. **Docker in Development Workflow**

* Using Docker for local development
* Dockerizing applications:
  * Node.js / React frontend
  * Python / Java backend
  * Databases (MySQL, MongoDB, PostgreSQL)
* Dockerizing full stack apps
* Debugging inside containers

---

## 10. **Docker in CI/CD**

* Docker + GitHub Actions
* Docker + Jenkins
* Building & pushing images in CI/CD pipeline
* Automated builds with Docker Hub

---

## 11. **Docker Security**

* User namespaces
* Image scanning (Trivy, Docker Scout)
* Minimizing attack surface (distroless images)
* Secrets management
* Best practices for securing Docker containers

---

## 12. **Docker Swarm (Optional but Good to Know)**

* What is Swarm?
* Swarm vs Kubernetes
* Setting up a Swarm cluster
* Deploying services on Swarm
* Load balancing & scaling

---

## 13. **Docker & Kubernetes (Integration)**

* Why Kubernetes is needed beyond Docker?
* Running Docker containers on Kubernetes
* Migration from Docker Compose to Kubernetes (Kompose)
* OCI runtime (containerd vs Docker)

---

## 14. **Real-World Projects (Hands-on)**

* Dockerizing a React + Node.js + MongoDB app
* Multi-stage Docker builds for optimized production images
* Running WordPress + MySQL with Docker Compose
* Building a private Docker registry with authentication
* Creating a CI/CD pipeline with Jenkins + Docker

---

## 15. **Expert Level (Going Beyond)**

* Docker Engine internals
* Container runtimes (Docker vs containerd vs CRI-O)
* Image signing & verification
* Using Docker with cloud providers (AWS ECR, Azure ACR, GCP Artifact Registry)
* Performance tuning for containers

---

✅ This roadmap takes you from  **basics → advanced concepts → real-world projects → production usage** .
`,Rg=`
# 📘 Section 1: Introduction & Basics

## 1.1 What is Docker?

* **Docker** is an open-source platform designed to **build, ship, and run applications** inside lightweight, portable  **containers** .
* Containers package the **application code + dependencies + runtime environment** into one unit.
* This ensures that the application runs the same everywhere (dev, test, prod).

👉 In short: *Docker = consistent environment for apps.*

---

## 1.2 Why use Docker?

* **Works Anywhere** → Eliminates “But it works on my machine” issue.
* **Lightweight** → Unlike VMs, containers share the host OS kernel → faster startup, lower resource use.
* **Portability** → Build once, run anywhere.
* **Scalability** → Easy to scale apps horizontally.
* **Isolation** → Apps run in isolated environments (security + stability).
* **DevOps Friendly** → Plays a huge role in CI/CD pipelines.

---

## 1.3 Traditional Virtualization vs Containers

| Feature                  | Virtual Machine (VM)                             | Docker Container                  |
| ------------------------ | ------------------------------------------------ | --------------------------------- |
| **Architecture**   | Runs on Hypervisor, each VM has its own OS + App | Runs on Host OS kernel, shares OS |
| **Size**           | Heavy (GBs)                                      | Lightweight (MBs)                 |
| **Boot Time**      | Minutes                                          | Seconds                           |
| **Performance**    | Slower due to full OS                            | Near-native performance           |
| **Resource Usage** | High (RAM, CPU overhead)                         | Low, efficient                    |
| **Use Case**       | Running multiple OS environments                 | Running multiple app environments |

👉 Analogy:

* VM = A house with its own land, walls, water, and electricity.
* Container = An apartment in a shared building (shares resources but isolated).

---

## 1.4 Core Docker Concepts

To understand Docker, you must know  **5 core building blocks** :

1. **Image** 🖼️
   * A blueprint/template for containers.
   * Example:  *Ubuntu image* ,  *Nginx image* .
   * Built using a \`Dockerfile\`.
2. **Container** 📦
   * A running instance of an image.
   * Example: Running a MySQL container from MySQL image.
3. **Volume** 💾
   * Used for  **persistent storage** .
   * Without volumes, data inside containers disappears when container stops.
4. **Network** 🌐
   * Provides communication between containers, and between containers & outside world.
5. **Registry** 📂
   * Stores Docker images.
   * Public: Docker Hub.
   * Private: You can host your own registry.

---

## 1.5 Installing Docker (Quick Overview)

### On Linux (Ubuntu example)

<pre class="overflow-visible!" data-start="2674" data-end="2875"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span># Update system</span><span>
sudo apt update

</span><span># Install Docker</span><span>
sudo apt install docker.io -y

</span><span># Enable & Start service</span><span>
sudo systemctl </span><span>enable</span><span> docker
sudo systemctl start docker

</span><span># Verify</span><span>
docker --version
</span></span></code></div></div></pre>

### On Windows/Mac

* Install **Docker Desktop** → provides Docker Engine + Docker Compose + UI.
* Verify with:

<pre class="overflow-visible!" data-start="2990" data-end="3024"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-powershell"><span>docker --version
</span></code></div></div></pre>

---

✅ **Summary of Section 1**

* Docker = containerization platform.
* Containers are lighter & faster than VMs.
* Core concepts = Image, Container, Volume, Network, Registry.
* Installation is simple, works on all OS.

---
`,Lg=`
# 📘 Section 2: Docker Fundamentals

## 2.1 Docker Architecture 🏗️

Docker follows a  **Client–Server model** :

1. **Docker Client (CLI / API)**
   * You run commands like \`docker run\` or \`docker ps\`.
   * The client communicates with the **Docker Daemon** using REST API.
2. **Docker Daemon (dockerd)**
   * Background service that manages images, containers, networks, and volumes.
   * Does the heavy lifting (building, running, distributing containers).
3. **Docker Registry**
   * Stores Docker images.
   * Public: **Docker Hub**
   * Private: Self-hosted registry.
4. **Docker Objects**
   * **Images** → Templates
   * **Containers** → Running apps
   * **Volumes** → Storage
   * **Networks** → Communication

📌 Diagram (conceptual):

<pre class="overflow-visible!" data-start="938" data-end="1293"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>+</span><span>-------------------+</span><span>
|   Docker Client   |   </span><span>---> docker run, docker ps</span><span>
+</span><span>-------------------+</span><span>
         |
         v
+</span><span>-------------------+</span><span>
|  Docker Daemon    |   </span><span>---> Creates containers, manages images</span><span>
+</span><span>-------------------+</span><span>
         |
         v
+</span><span>-------------------+</span><span>
| Docker Registry   |   </span><span>---> Stores images (Hub/Private)</span><span>
+</span><span>-------------------+</span><span>
</span></span></code></div></div></pre>

---

## 2.2 First Container – Hello World 🌍

<pre class="overflow-visible!" data-start="1340" data-end="1374"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker run hello-world
</span></span></code></div></div></pre>

* Docker pulls the \`hello-world\` image (if not present).
* Creates and runs a container from it.
* Prints a message confirming installation works.

---

## 2.3 Basic Docker Commands 🐳

### 🔍 Image Commands

<pre class="overflow-visible!" data-start="1589" data-end="1733"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker images                </span><span># List images</span><span>
docker pull nginx            </span><span># Download image</span><span>
docker rmi <image_id>        </span><span># Remove image</span><span>
</span></span></code></div></div></pre>

### 📦 Container Commands

<pre class="overflow-visible!" data-start="1761" data-end="2218"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker ps                    </span><span># List running containers</span><span>
docker ps -a                 </span><span># List all (including stopped)</span><span>
docker run -it ubuntu bash   </span><span># Run Ubuntu container interactively</span><span>
docker </span><span>exec</span><span> -it <container_id> bash   </span><span># Enter a running container</span><span>
docker stop <container_id>   </span><span># Stop container</span><span>
docker start <container_id>  </span><span># Start stopped container</span><span>
docker restart <container_id> </span><span># Restart container</span><span>
docker </span><span>rm</span><span> <container_id>     </span><span># Remove container</span><span>
</span></span></code></div></div></pre>

### 🧹 System Cleanup

<pre class="overflow-visible!" data-start="2242" data-end="2325"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker system prune -a       </span><span># Remove unused containers/images/networks</span><span>
</span></span></code></div></div></pre>

---

## 2.4 Container Lifecycle 🔄

Think of a **container like a process** with states:

1. **Create** → \`docker create\`
2. **Start** → \`docker start\`
3. **Running** → Active state
4. **Paused** → Suspended
5. **Stopped** → \`docker stop\`
6. **Deleted** → \`docker rm\`

📌 Example:

<pre class="overflow-visible!" data-start="2607" data-end="2727"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker create --name myubuntu ubuntu
docker start myubuntu
docker ps
docker stop myubuntu
docker </span><span>rm</span><span> myubuntu
</span></span></code></div></div></pre>

---

## 2.5 Detached vs Attached Mode

* **Attached Mode (default)** → Container runs in the foreground.
  <pre class="overflow-visible!" data-start="2838" data-end="2871"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker run ubuntu
  </span></span></code></div></div></pre>
* **Detached Mode (-d)** → Container runs in background.
  <pre class="overflow-visible!" data-start="2933" data-end="3006"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker run -d nginx
  docker ps     </span><span># Verify it's running</span><span>
  </span></span></code></div></div></pre>

---

## 2.6 Exposing Ports 🌐

To make containers accessible outside host:

<pre class="overflow-visible!" data-start="3082" data-end="3124"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker run -d -p 8080:80 nginx
</span></span></code></div></div></pre>

* \`8080\` = host port
* \`80\` = container port (nginx default)
* Access via: \`http://localhost:8080\`

---

## 2.7 Inspecting & Monitoring Containers 🛠️

<pre class="overflow-visible!" data-start="3280" data-end="3509"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker logs <container_id>        </span><span># View logs</span><span>
docker inspect <container_id>     </span><span># Low-level info (JSON)</span><span>
docker stats                      </span><span># Resource usage</span><span>
docker top <container_id>         </span><span># Processes inside container</span><span>
</span></span></code></div></div></pre>

---

✅ **Summary of Section 2**

* Docker has Client, Daemon, Registry.
* Basic commands cover images & containers.
* Lifecycle = create → run → stop → delete.
* You can run in foreground/background, map ports, and monitor logs.

---


## 🔹 Image Management Commands

| Command                             | Options                  | Description                                         |
| ----------------------------------- | ------------------------ | --------------------------------------------------- |
| \`docker images\`                   | \`-a\`/\`--all\`         | Show all images (default hides intermediate layers) |
|                                     | \`-q\`/\`--quiet\`       | Show only image IDs                                 |
|                                     | \`--digests\`            | Show image digests                                  |
|                                     | \`--filter <key=value>\` | Filter output (e.g., dangling=true, label=...)      |
| \`docker pull <image>\`             | \`:tag\`                 | Pull a specific tag (default =\`latest\`)           |
|                                     | \`--all-tags\`           | Download all tags for the image                     |
| \`docker rmi <image_id>\`           | \`-f\`/\`--force\`       | Force remove image even if used by container        |
|                                     | \`--no-prune\`           | Do not delete untagged parents                      |
| \`docker tag <src> <target>\`       | —                       | Tag an image with new name                          |
| \`docker save -o file.tar <image>\` | —                       | Save image to tar archive                           |
| \`docker load -i file.tar\`         | —                       | Load image from tar archive                         |

---

## 🔹 Container Management Commands

| Command                        | Options                  | Description                                                            |
| ------------------------------ | ------------------------ | ---------------------------------------------------------------------- |
| \`docker ps\`                  | \`-a\`/\`--all\`         | Show all containers (running + stopped)                                |
|                                | \`-q\`/\`--quiet\`       | Show only container IDs                                                |
|                                | \`--filter <key=value>\` | Filter by status, name, label, etc.                                    |
| \`docker run <image>\`         | \`-d\`/\`--detach\`      | Run container in background                                            |
|                                | \`-it\`                  | Run interactively with terminal                                        |
|                                | \`--name <name>\`        | Assign a name to container                                             |
|                                | \`-p <host:container>\`  | Map host port to container port                                        |
|                                | \`-v <host:container>\`  | Mount volume/bind mount                                                |
|                                | \`--rm\`                 | Auto-remove container on exit                                          |
|                                | \`--network <network>\`  | Connect to custom network                                              |
|                                | \`--env <key=value>\`    | Set environment variables                                              |
|                                | \`--cpus="1.5"\`         | Limit CPU usage                                                        |
|                                | \`--memory="512m"\`      | Limit memory usage                                                     |
|                                | \`--restart=<policy>\`   | Restart policies (\`no\`,\`always\`,\`on-failure\`,\`unless-stopped\`) |
| \`docker exec <container>\`    | \`-it\`                  | Run command inside running container interactively                     |
| \`docker stop <container>\`    | \`-t <seconds>\`         | Timeout before force killing container                                 |
| \`docker start <container>\`   | \`-a\`                   | Attach to container after starting                                     |
|                                | \`-i\`                   | Attach STDIN                                                           |
| \`docker restart <container>\` | —                       | Restart container                                                      |
| \`docker rm <container>\`      | \`-f\`                   | Force remove running container                                         |
|                                | \`-v\`                   | Remove volumes with container                                          |
| \`docker logs <container>\`    | \`-f\`/\`--follow\`      | Stream logs live                                                       |
|                                | \`--tail <n>\`           | Show last \`n\`lines of logs                                           |
| \`docker inspect <container>\` | \`--format\`             | Format output (Go template)                                            |
| \`docker stats\`               | \`--no-stream\`          | Show single snapshot instead of continuous stream                      |
| \`docker top <container>\`     | —                       | Show running processes inside container                                |
| \`docker attach <container>\`  | —                       | Attach to running container's console                                  |

---

## 🔹 System & Cleanup Commands

| Command                 | Options      | Description                                                        |
| ----------------------- | ------------ | ------------------------------------------------------------------ |
| \`docker system df\`    | —           | Show disk usage by images, containers, volumes                     |
| \`docker system prune\` | \`-a\`       | Remove all unused containers, networks, images (not just dangling) |
|                         | \`-f\`       | Force cleanup without prompt                                       |
| \`docker info\`         | —           | Show system-wide information about Docker                          |
| \`docker version\`      | \`--format\` | Display version info in formatted way                              |

---
`,Ug=`
# 📘 Section 3: Docker Images

## 3.1 What is a Docker Image?

* A **Docker Image** is a **read-only template** that contains:
  * Application code
  * Runtime (e.g., Python, Node.js)
  * Libraries & dependencies
  * Configuration files
* Images are the **blueprint** for containers.
* Containers are **running instances** of images.

---

## 3.2 Working with Images

### Listing Images

<pre class="overflow-visible!" data-start="567" data-end="697"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker images
docker images -a     </span><span># Show all images including intermediate</span><span>
docker images -q     </span><span># Show only image IDs</span><span>
</span></span></code></div></div></pre>

### Pulling Images

<pre class="overflow-visible!" data-start="718" data-end="823"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker pull ubuntu
docker pull nginx:1.25   </span><span># Pull specific tag</span><span>
docker pull ubuntu --all-tags
</span></span></code></div></div></pre>

### Removing Images

<pre class="overflow-visible!" data-start="845" data-end="977"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker rmi nginx:latest
docker rmi -f <image_id>     </span><span># Force remove</span><span>
docker rmi $(docker images -q)   </span><span># Remove all images</span><span>
</span></span></code></div></div></pre>

### Tagging Images

<pre class="overflow-visible!" data-start="998" data-end="1047"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker tag myapp:1.0 myrepo/myapp:1.0
</span></span></code></div></div></pre>

* Tags help in versioning (e.g., \`nginx:1.25\`, \`python:3.11\`).

---

## 3.3 Docker Image Layers

* Every instruction in a **Dockerfile** creates a  **new layer** .
* Layers are **cached** → speeds up rebuilds.
* Example:
  <pre class="overflow-visible!" data-start="1274" data-end="1487"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>FROM</span><span> ubuntu:</span><span>20.04</span><span>       # Base layer
  RUN apt</span><span>-</span><span>get</span><span></span><span>update</span><span>      # </span><span>New</span><span> layer
  RUN apt</span><span>-</span><span>get</span><span> install </span><span>-</span><span>y python3  # </span><span>New</span><span> layer
  </span><span>COPY</span><span> app.py </span><span>/</span><span>app        # </span><span>New</span><span> layer
  CMD ["python3", "app.py"]  # </span><span>Final</span><span> layer
  </span></span></code></div></div></pre>
* Rebuild efficiency: if only \`COPY app.py\` changes, only that layer + below rebuilds.

---

## 3.4 Building Custom Images with Dockerfile

### What is Dockerfile?

* A **text file** containing step-by-step instructions to build an image.
* Example (\`Dockerfile\`):
  <pre class="overflow-visible!" data-start="1758" data-end="1918"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-dockerfile"><span>FROM python:3.11-slim
  WORKDIR /app
  COPY requirements.txt .
  RUN pip install -r requirements.txt
  COPY . .
  CMD ["python", "app.py"]
  </span></code></div></div></pre>

### Building Image

<pre class="overflow-visible!" data-start="1939" data-end="1978"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker build -t myapp:1.0 .
</span></span></code></div></div></pre>

* \`-t\` = tag name
* \`.\` = current directory where Dockerfile is

---

## 3.5 Common Dockerfile Instructions

| Instruction    | Description                                              | Example                                       |
| -------------- | -------------------------------------------------------- | --------------------------------------------- |
| \`FROM\`       | Base image                                               | \`FROM ubuntu:20.04\`                         |
| \`RUN\`        | Execute commands while building image                    | \`RUN apt-get install -y python3\`            |
| \`COPY\`       | Copy files from host to image                            | \`COPY app.py /app/\`                         |
| \`ADD\`        | Like COPY but also supports remote URLs & tar extraction | \`ADD https://example.com/file.tar.gz /app/\` |
| \`WORKDIR\`    | Set working directory                                    | \`WORKDIR /app\`                              |
| \`CMD\`        | Default command when container starts                    | \`CMD ["python3", "app.py"]\`                 |
| \`ENTRYPOINT\` | Main executable (cannot be overridden easily)            | \`ENTRYPOINT ["python3"]\`                    |
| \`EXPOSE\`     | Document container’s listening port                     | \`EXPOSE 8080\`                               |
| \`ENV\`        | Set environment variables                                | \`ENV APP_ENV=prod\`                          |

---

## 3.6 CMD vs ENTRYPOINT

* **CMD** → Default command but can be overridden.

  <pre class="overflow-visible!" data-start="2923" data-end="2979"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-dockerfile"><span>CMD ["nginx", "-g", "daemon off;"]
  </span></code></div></div></pre>

  Run:

  <pre class="overflow-visible!" data-start="2989" data-end="3054"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker run myimage </span><span>echo</span><span></span><span>"hello"</span><span></span><span># Overrides CMD</span><span>
  </span></span></code></div></div></pre>
* **ENTRYPOINT** → Command is fixed, arguments are appended.

  <pre class="overflow-visible!" data-start="3121" data-end="3178"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-dockerfile"><span>ENTRYPOINT ["echo"]
  CMD ["hello"]
  </span></code></div></div></pre>

  Run:

  <pre class="overflow-visible!" data-start="3188" data-end="3241"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker run myimage hi   </span><span># Output → hi</span><span>
  </span></span></code></div></div></pre>

---

## 3.7 Image Optimization

* Use **small base images** (e.g., \`alpine\` instead of \`ubuntu\`).
* Combine RUN commands with \`&&\` to reduce layers.
* Use \`.dockerignore\` to avoid copying unnecessary files.
* Use **multi-stage builds** for production.

**Multi-stage example:**

<pre class="overflow-visible!" data-start="3526" data-end="3738"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-dockerfile"><span># Stage 1: Build
FROM golang:1.20 as builder
WORKDIR /app
COPY . .
RUN go build -o myapp

# Stage 2: Production
FROM alpine:3.17
COPY --from=builder /app/myapp /usr/local/bin/myapp
CMD ["myapp"]
</span></code></div></div></pre>

→ Final image only has compiled binary, no Go toolchain.

---

## 3.8 Saving & Sharing Images

### Save Image to File

<pre class="overflow-visible!" data-start="3857" data-end="3903"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker save -o myapp.tar myapp:1.0
</span></span></code></div></div></pre>

### Load Image from File

<pre class="overflow-visible!" data-start="3930" data-end="3966"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker load -i myapp.tar
</span></span></code></div></div></pre>

### Push to Docker Hub

<pre class="overflow-visible!" data-start="3991" data-end="4086"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker login
docker tag myapp:1.0 username/myapp:1.0
docker push username/myapp:1.0
</span></span></code></div></div></pre>

---

✅ **Summary of Section 3**

* Images = blueprints for containers.
* Built using **Dockerfile** instructions.
* Layers & caching improve efficiency.
* Best practices: small images, multi-stage builds.
* Images can be saved, loaded, pushed to registries.

---

👉 Do you want me to now make a **big comman**
`,Bg=`# 📄 Dockerfile Overview

A **Dockerfile** is a plain text document that contains a series of instructions used to build a Docker image. It defines everything needed to create a customized container environment.

## 📝 Table of Contents

- [📄 Dockerfile Overview](#-dockerfile-overview)
  - [📝 Table of Contents](#-table-of-contents)
    - [🔹 Purpose of a Dockerfile](#-purpose-of-a-dockerfile)
    - [🔹 How It Works](#-how-it-works)
    - [📘 Dockerfile Instructions Table](#-dockerfile-instructions-table)
    - [Example of a Dockerfile](#example-of-a-dockerfile)

### 🔹 Purpose of a Dockerfile

- Automates the process of building Docker images.
- Ensures consistency and reproducibility across environments.
- Makes deployment easier and more reliable.

### 🔹 How It Works

- The first instruction usually defines the **base image** (\`FROM\`).
- Additional commands are used to:
  - Install software
  - Copy files
  - Set environment variables
  - Run scripts

The final product is a Docker **image** — a self-contained executable package with everything required to run your application.

Dockerfiles are a core part of modern DevOps workflows, enabling clean and consistent application delivery.

### 📘 Dockerfile Instructions Table

| Instruction  | Description                                                                                            |
| ------------ | ------------------------------------------------------------------------------------------------------ |
| \`FROM\`       | Specifies the base image for the Docker image. Must be the first instruction.                          |
| \`LABEL\`      | Adds metadata to the image as key-value pairs.                                                         |
| \`ENV\`        | Sets environment variables inside the image.                                                           |
| \`RUN\`        | Executes commands in a new layer and commits the results. Often used to install packages.              |
| \`CMD\`        | Sets the default command to run when the container starts (can be overridden).                         |
| \`ENTRYPOINT\` | Configures a container to run as an executable. Cannot be overridden by command line arguments easily. |
| \`COPY\`       | Copies files and directories from the host into the container.                                         |
| \`ADD\`        | Similar to \`COPY\` but also supports remote URLs and unpacking compressed files.                        |
| \`WORKDIR\`    | Sets the working directory for \`RUN\`, \`CMD\`, \`ENTRYPOINT\`, \`COPY\`, and \`ADD\` instructions.             |
| \`USER\`       | Specifies the user to use when running the image.                                                      |
| \`EXPOSE\`     | Informs Docker that the container listens on the specified network ports at runtime.                   |
| \`VOLUME\`     | Creates a mount point and marks it as a volume to persist data.                                        |
| \`ARG\`        | Defines a build-time variable that users can pass at build-time.                                       |
| \`ONBUILD\`    | Adds a trigger instruction to be executed when the image is used as a base for another build.          |
| \`SHELL\`      | Overrides the default shell used for the \`RUN\` instructions.                                           |

### Example of a Dockerfile

\`\`\`Dockerfile
# Use an official Node.js base image
FROM node:18-alpine

# Add metadata to the image
LABEL maintainer="pritam@example.com"
LABEL version="1.0"
LABEL description="Example Dockerfile using all major instructions"

# Define build-time variable (can be overridden with --build-arg)
ARG APP_ENV=production

# Set environment variables
ENV NODE_ENV=$APP_ENV
ENV PORT=3000

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy application files from host to container
COPY package*.json ./

# Add a remote file (example use; not recommended for production)
ADD https://raw.githubusercontent.com/github/gitignore/main/Node.gitignore .gitignore

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Create a volume to persist logs
VOLUME ["/usr/src/app/logs"]

# Expose the application port
EXPOSE $PORT

# Set default user
USER node

# Default command to run the app
CMD ["node", "index.js"]

# Alternative way to define entry point (more strict than CMD)
# ENTRYPOINT ["node", "index.js"]

# Define an on-build trigger (only relevant if this image is used as a base image)
ONBUILD COPY . /app
ONBUILD RUN npm install

# Override the default shell used for RUN commands
SHELL ["/bin/sh", "-c"]
\`\`\`

---
`,Hg=`
# 📘 Section 4: Docker Volumes & Storage

## 4.1 Why Storage is Needed?

* By default,  **container data is temporary** .
* Example:
  <pre class="overflow-visible!" data-start="339" data-end="506"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker run -it ubuntu bash
  </span><span>echo</span><span></span><span>"hello"</span><span> > /data.txt
  </span><span>exit</span><span>
  docker start -ai <container>
  </span><span>cat</span><span> /data.txt   </span><span># File may be gone if container recreated</span><span>
  </span></span></code></div></div></pre>

👉 To persist data beyond the container’s lifecycle → use **Volumes** or  **Bind Mounts** .

---

## 4.2 Types of Storage in Docker

| Storage Type           | Description                                      | Use Case                                            |
| ---------------------- | ------------------------------------------------ | --------------------------------------------------- |
| **Volumes**      | Managed by Docker (\`/var/lib/docker/volumes/\`) | Persistent DB storage, preferred for portability    |
| **Bind Mounts**  | Link host directory → container directory       | Useful for dev (sync code between host & container) |
| **tmpfs Mounts** | Data stored in memory (not disk)                 | Sensitive data, cache, improves speed               |

---

## 4.3 Volumes

### Creating & Managing Volumes

<pre class="overflow-visible!" data-start="1106" data-end="1268"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker volume create myvolume
docker volume </span><span>ls</span><span>
docker volume inspect myvolume
docker volume </span><span>rm</span><span> myvolume
docker volume prune    </span><span># Remove unused volumes</span><span>
</span></span></code></div></div></pre>

### Using Volumes in Containers

<pre class="overflow-visible!" data-start="1302" data-end="1351"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker run -d -v myvolume:/data nginx
</span></span></code></div></div></pre>

* Mounts volume \`myvolume\` to \`/data\` in container.
* Data persists even if container is deleted.

📌 Test:

<pre class="overflow-visible!" data-start="1464" data-end="1680"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker run -it -v myvolume:/app ubuntu bash
</span><span>echo</span><span></span><span>"Hello World"</span><span> > /app/file.txt
</span><span>exit</span><span>

</span><span># Run another container using same volume</span><span>
docker run -it -v myvolume:/app ubuntu bash
</span><span>cat</span><span> /app/file.txt   </span><span># Hello World</span><span>
</span></span></code></div></div></pre>

---

## 4.4 Bind Mounts

* Mounts a **host directory/file** into the container.
* Syntax:

  <pre class="overflow-visible!" data-start="1776" data-end="1844"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker run -v /path/on/host:/path/in/container image
  </span></span></code></div></div></pre>
* Example:

  <pre class="overflow-visible!" data-start="1858" data-end="1941"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker run -d -p 8080:80 -v $(</span><span>pwd</span><span>)/site:/usr/share/nginx/html nginx
  </span></span></code></div></div></pre>

  → Edits in \`./site\` (host) instantly reflect inside Nginx.

---

## 4.5 tmpfs Mounts (In-Memory Storage)

* Stored in **RAM only** (not written to disk).
* Example:

  <pre class="overflow-visible!" data-start="2112" data-end="2178"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker run -d --tmpfs /app/cache:rw,size=64m nginx
  </span></span></code></div></div></pre>

  → Mounts \`/app/cache\` in memory, limited to 64MB.

---

## 4.6 Inspecting Storage

<pre class="overflow-visible!" data-start="2263" data-end="2370"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker inspect <container_id>   </span><span># Look for "Mounts" section</span><span>
docker volume inspect <volume_name>
</span></span></code></div></div></pre>

---

## 4.7 Volume Drivers (Advanced)

* Default = local driver.
* Plugins available for NFS, GlusterFS, Ceph, cloud storage.
* Example:
  <pre class="overflow-visible!" data-start="2514" data-end="2667"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker volume create --driver </span><span>local</span><span> --opt </span><span>type</span><span>=nfs \\
    --opt o=addr=192.168.1.100,rw \\
    --opt device=:/exported/path \\
    nfsvolume
  </span></span></code></div></div></pre>

---

## 4.8 Best Practices

* Prefer **volumes** over bind mounts for production (better portability & security).
* Use **bind mounts** in development (live editing of code).
* Regularly **prune unused volumes** to free space.
* For databases: always mount volumes for persistence.

---

✅ **Summary of Section 4**

* Containers are ephemeral → use  **volumes, bind mounts, tmpfs** .
* **Volumes** = best for persistent data.
* **Bind mounts** = great for dev (sync host files).
* **tmpfs** = in-memory, secure, fast.
* Volumes can be managed with \`docker volume\` commands.

---

👉 Do you want me to now prepare a **command reference table (like in**
`,Ig=`# 📘 Section 5: Docker Networking

## 5.1 Why Networking is Needed?

* By default, containers are  **isolated** .
* Networking allows:
  * Container ↔ Container communication
  * Container ↔ Host communication
  * Container ↔ Internet communication

---

## 5.2 Default Docker Networks

Docker automatically creates three networks on installation:

| Network Type     | Description                               | Use Case                            |
| ---------------- | ----------------------------------------- | ----------------------------------- |
| **bridge** | Default network for standalone containers | Containers communicate on same host |
| **host**   | Container shares host network stack       | High-performance networking         |
| **none**   | Container has no network                  | Isolation for security or testing   |

---

## 5.3 Inspecting Networks

<pre class="overflow-visible!" data-start="918" data-end="1032"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker network </span><span>ls</span><span></span><span># List all networks</span><span>
docker network inspect bridge   </span><span># Details about a network</span><span>
</span></span></code></div></div></pre>

---

## 5.4 Creating Custom Networks

<pre class="overflow-visible!" data-start="1071" data-end="1110"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker network create mynet
</span></span></code></div></div></pre>

* You can specify driver (default = bridge):

<pre class="overflow-visible!" data-start="1158" data-end="1213"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker network create --driver bridge mynet
</span></span></code></div></div></pre>

* Custom networks make it easy for containers to  **discover each other by name** .

---

## 5.5 Connecting Containers

<pre class="overflow-visible!" data-start="1331" data-end="1436"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker run -d --name web --network mynet nginx
docker run -d --name app --network mynet myapp
</span></span></code></div></div></pre>

* Containers \`web\` and \`app\` can now communicate using container names:

<pre class="overflow-visible!" data-start="1511" data-end="1554"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>ping app   </span><span># from web container</span><span>
</span></span></code></div></div></pre>

---

## 5.6 Exposing Ports

* To access container from host or outside world:

<pre class="overflow-visible!" data-start="1635" data-end="1677"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker run -d -p 8080:80 nginx
</span></span></code></div></div></pre>

* Format: \`-p <host_port>:<container_port>\`

---

## 5.7 Linking Containers (Legacy)

<pre class="overflow-visible!" data-start="1765" data-end="1829"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker run -d --name web --</span><span>link</span><span> db:database mywebapp
</span></span></code></div></div></pre>

* Old method for container-to-container communication.
* Now **custom networks** are preferred.

---

## 5.8 Network Drivers (Overview)

| Driver            | Description                       | Use Case                      |
| ----------------- | --------------------------------- | ----------------------------- |
| **bridge**  | Default, isolated network         | Most standalone containers    |
| **host**    | Shares host networking            | High-performance, no NAT      |
| **overlay** | Multi-host networking             | Swarm services across hosts   |
| **macvlan** | Assigns MAC address per container | Directly appear on LAN        |
| **none**    | No networking                     | Completely isolated container |

---

## 5.9 Inspecting Container Network

<pre class="overflow-visible!" data-start="2427" data-end="2541"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker inspect <container_name>
</span><span># Look for "Networks" section</span><span>
docker </span><span>exec</span><span> -it <container_name> ip addr
</span></span></code></div></div></pre>

---

## 5.10 Docker Compose Networking

* Containers in same \`docker-compose.yml\` are on a  **default custom network** .
* Services can communicate by  **service name** .

<pre class="overflow-visible!" data-start="2713" data-end="2782"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-yaml"><span><span>services:</span><span>
  </span><span>web:</span><span>
    </span><span>image:</span><span></span><span>nginx</span><span>
  </span><span>app:</span><span>
    </span><span>image:</span><span></span><span>myapp</span><span>
</span></span></code></div></div></pre>

* \`web\` can ping \`app\` directly.

---

✅ **Summary of Section 5**

* Docker containers are isolated by default → need networking for communication.
* Default networks = bridge, host, none.
* Custom networks are preferred for container-to-container communication.
* Ports must be exposed to access containers externally.
* Docker Compose automatically handles networking.
`,Yg=`# 📘 Section 6: Docker Compose

## 6.1 What is Docker Compose?

* **Docker Compose** is a tool to  **define and manage multi-container Docker applications** .
* Instead of running multiple \`docker run\` commands, you define all containers in a **single YAML file** (\`docker-compose.yml\`).
* It handles **networks, volumes, dependencies, and scaling** automatically.

---

## 6.2 Installing Docker Compose

### On Linux

<pre class="overflow-visible!" data-start="558" data-end="629"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>sudo apt install docker-compose -y
docker-compose --version
</span></span></code></div></div></pre>

### On Windows/Mac

* Comes pre-installed with  **Docker Desktop** .
* Verify:

<pre class="overflow-visible!" data-start="708" data-end="744"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker-compose --version
</span></span></code></div></div></pre>

---

## 6.3 docker-compose.yml Structure

Basic structure:

<pre class="overflow-visible!" data-start="804" data-end="1289"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-yaml"><span><span>version:</span><span></span><span>"3.9"</span><span></span><span># Compose file version</span><span>

</span><span>services:</span><span></span><span># Define containers</span><span>
  </span><span>web:</span><span>
    </span><span>image:</span><span></span><span>nginx</span><span>
    </span><span>ports:</span><span>
      </span><span>-</span><span></span><span>"8080:80"</span><span>
    </span><span>volumes:</span><span>
      </span><span>-</span><span></span><span>./site:/usr/share/nginx/html</span><span>
  </span><span>app:</span><span>
    </span><span>build:</span><span></span><span>./app</span><span></span><span># Dockerfile directory</span><span>
    </span><span>environment:</span><span>
      </span><span>-</span><span></span><span>APP_ENV=prod</span><span>
    </span><span>depends_on:</span><span>
      </span><span>-</span><span></span><span>db</span><span>
  </span><span>db:</span><span>
    </span><span>image:</span><span></span><span>mysql:8</span><span>
    </span><span>environment:</span><span>
      </span><span>MYSQL_ROOT_PASSWORD:</span><span></span><span>root123</span><span>
    </span><span>volumes:</span><span>
      </span><span>-</span><span></span><span>db_data:/var/lib/mysql</span><span>

</span><span>volumes:</span><span></span><span># Named volumes</span><span>
  </span><span>db_data:</span><span>
</span></span></code></div></div></pre>

---

## 6.4 Key Sections in Compose File

| Section                       | Description                          | Example                            |
| ----------------------------- | ------------------------------------ | ---------------------------------- |
| **services**            | Defines all containers               | \`web\`,\`app\`,\`db\`             |
| **image**               | Pull pre-built image from Docker Hub | \`nginx\`                          |
| **build**               | Build image from local Dockerfile    | \`build: ./app\`                   |
| **ports**               | Expose container ports to host       | \`"8080:80"\`                      |
| **volumes**             | Mount host or named volume           | \`- ./site:/usr/share/nginx/html\` |
| **environment**         | Set env variables inside container   | \`- APP_ENV=prod\`                 |
| **depends_on**          | Define container startup order       | \`depends_on: - db\`               |
| **networks**            | Custom networks for containers       | \`networks: - frontend\`           |
| **volumes (top-level)** | Define persistent named volumes      | \`db_data:\`                       |

---

## 6.5 Common Docker Compose Commands

| Command                                 | Description                                                      |
| --------------------------------------- | ---------------------------------------------------------------- |
| \`docker-compose up\`                   | Start all services in the compose file                           |
| \`docker-compose up -d\`                | Run services in detached/background mode                         |
| \`docker-compose down\`                 | Stop and remove all containers, networks                         |
| \`docker-compose build\`                | Build or rebuild service images                                  |
| \`docker-compose logs\`                 | View combined logs from all services                             |
| \`docker-compose logs -f\`              | Follow logs in real-time                                         |
| \`docker-compose ps\`                   | List running services                                            |
| \`docker-compose exec <service> <cmd>\` | Execute command inside running service                           |
| \`docker-compose stop\`                 | Stop services without removing                                   |
| \`docker-compose restart\`              | Restart services                                                 |
| \`docker-compose scale <service>=n\`    | Scale services (deprecated in v3, use \`replicas\`in swarm mode) |

---

## 6.6 Networks in Compose

* By default, Compose creates a **single network** for all services in the file.
* Services can communicate via  **service name** .
* Custom network example:

<pre class="overflow-visible!" data-start="3057" data-end="3291"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-yaml"><span><span>networks:</span><span>
  </span><span>frontend:</span><span>
  </span><span>backend:</span><span>

</span><span>services:</span><span>
  </span><span>web:</span><span>
    </span><span>image:</span><span></span><span>nginx</span><span>
    </span><span>networks:</span><span>
      </span><span>-</span><span></span><span>frontend</span><span>
  </span><span>app:</span><span>
    </span><span>image:</span><span></span><span>myapp</span><span>
    </span><span>networks:</span><span>
      </span><span>-</span><span></span><span>frontend</span><span>
      </span><span>-</span><span></span><span>backend</span><span>
  </span><span>db:</span><span>
    </span><span>image:</span><span></span><span>mysql</span><span>
    </span><span>networks:</span><span>
      </span><span>-</span><span></span><span>backend</span><span>
</span></span></code></div></div></pre>

---

## 6.7 Volumes in Compose

* Named volumes are declared **top-level** and mounted into services:

<pre class="overflow-visible!" data-start="3394" data-end="3503"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-yaml"><span><span>volumes:</span><span>
  </span><span>db_data:</span><span>

</span><span>services:</span><span>
  </span><span>db:</span><span>
    </span><span>image:</span><span></span><span>mysql</span><span>
    </span><span>volumes:</span><span>
      </span><span>-</span><span></span><span>db_data:/var/lib/mysql</span><span>
</span></span></code></div></div></pre>

* Host paths can also be mounted:

<pre class="overflow-visible!" data-start="3538" data-end="3591"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-yaml"><span><span>volumes:</span><span>
  </span><span>-</span><span></span><span>./site:/usr/share/nginx/html</span><span>
</span></span></code></div></div></pre>

---

## 6.8 Scaling Services

* In v3+, scaling is mostly for **Docker Swarm** (\`deploy.replicas\`):

<pre class="overflow-visible!" data-start="3692" data-end="3767"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-yaml"><span><span>services:</span><span>
  </span><span>app:</span><span>
    </span><span>image:</span><span></span><span>myapp</span><span>
    </span><span>deploy:</span><span>
      </span><span>replicas:</span><span></span><span>3</span><span>
</span></span></code></div></div></pre>

* Compose v2 still supports \`docker-compose up --scale app=3\`.

---

✅ **Summary of Section 6**

* Docker Compose simplifies  **multi-container apps** .
* YAML file defines  **services, networks, volumes, environment variables** .
* Commands like \`up\`, \`down\`, \`logs\`, \`exec\` manage containers.
* Compose handles networking and dependency automatically.

---

Do you want me to make a **Docker Compose che**
`,Gg=`When you use **Git with SSH**, you’re telling Git to authenticate your pushes, pulls, and fetches using your **SSH key**, instead of username/password (HTTPS).

But note — SSH doesn’t come into play *during* a \`git commit\`, only when you communicate with a **remote repository** (e.g., pushing your commit to GitHub, GitLab, Bitbucket, etc.).

Here’s the full flow:

---

### 🧩 Step 1: Check if you already have an SSH key

Run:

\`\`\`bash
ls -al ~/.ssh
\`\`\`

You should see something like:

\`\`\`text
id_rsa  id_rsa.pub
\`\`\`

If not, create a new SSH key.

---

### ⚙️ Step 2: Generate a new SSH key

\`\`\`bash
ssh-keygen -t ed25519 -C "your_email@example.com"
\`\`\`

If your system doesn’t support \`ed25519\`, use:

\`\`\`bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
\`\`\`

Press Enter for defaults (recommended).

---

### 🪄 Step 3: Add SSH key to the ssh-agent

\`\`\`bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
\`\`\`

---

### 🌐 Step 4: Add your SSH key to GitHub / GitLab / Bitbucket

Copy your public key:

\`\`\`bash
cat ~/.ssh/id_ed25519.pub
\`\`\`

Then go to your Git provider → **Settings → SSH and GPG keys → New SSH key**, and paste it.

---

### 🔗 Step 5: Configure your Git remote to use SSH

If your repo is cloned using HTTPS, change it to SSH:

\`\`\`bash
git remote -v
\`\`\`

You might see:

\`\`\`text
origin  https://github.com/pritamdas/project.git (fetch)
origin  https://github.com/pritamdas/project.git (push)
\`\`\`

Change it to SSH:

\`\`\`bash
git remote set-url origin git@github.com:pritamdas/project.git
\`\`\`

Now:

\`\`\`text
origin  git@github.com:pritamdas/project.git (fetch)
origin  git@github.com:pritamdas/project.git (push)
\`\`\`

---

### ✅ Step 6: Use Git as usual

Local commits don’t need SSH. You just commit normally:

\`\`\`bash
git add .
git commit -m "your message"
\`\`\`

When pushing:

\`\`\`bash
git push origin main
\`\`\`

SSH will automatically be used for authentication.

---

### 🧠 Bonus Tip — Test your SSH connection

Run:

\`\`\`bash
ssh -T git@github.com
\`\`\`

Expected output:

\`\`\`text
Hi pritamdas! You've successfully authenticated, but GitHub does not provide shell access.
\`\`\`
`,Kg=`## 🛠️ Configuration

| Command                                              | Description                             |
| ---------------------------------------------------- | --------------------------------------- |
| \`git config --global user.name "Your Name"\`        | Sets the global Git username.           |
| \`git config --global user.email "you@example.com"\` | Sets the global Git email.              |
| \`git config --list\`                                | Lists all the Git configuration values. |
| \`git config --global --unset code.editor\`          | Unsets the globally defined editor.     |

---

## 🧱 Repository Setup & Status

| Command        | Description                                          |
| -------------- | ---------------------------------------------------- |
| \`git init\`   | Initializes a new Git repository.                    |
| \`git status\` | Shows the working directory and staging area status. |

---

## 📥 Staging & Unstaging

| Command                            | Description                                  |
| ---------------------------------- | -------------------------------------------- |
| \`git add <file>\`                 | Stages a specific file.                      |
| \`git add --all\`or \`git add -A\` | Stages all changes (new, modified, deleted). |
| \`git restore --staged <file>\`    | Unstages a file from the staging area.       |

---

## ✅ Commit

| Command                        | Description                                    |
| ------------------------------ | ---------------------------------------------- |
| \`git commit -m "message"\`    | Commits staged changes with a message.         |
| \`git commit -a -m "message"\` | Commits all tracked changes (without staging). |
| \`git log\`                    | Shows the commit history.                      |

---

## 🔖 Tagging

| Command                                      | Description                                              |
| -------------------------------------------- | -------------------------------------------------------- |
| \`git tag -a v1.0 -m "Version 1.0 release"\` | Creates an annotated tag with a message.                 |
| \`git tag v1.1 1a2b3c4d\`                    | Creates a lightweight tag pointing to a specific commit. |
| \`git tag\`                                  | Lists all tags.                                          |
| \`git show v1.0\`                            | Shows details about a specific tag.                      |
| \`git push origin v1.0\`                     | Pushes a specific tag to the remote.                     |
| \`git push --tags\`                          | Pushes all local tags to the remote.                     |
| \`git tag -d v1.0\`                          | Deletes a local tag.                                     |
| \`git tag -f v1.0 <new-commit-hash>\`        | Force-updates an existing tag to a new commit.           |
| \`git push --force origin v1.0\`             | Force-pushes the updated tag to the remote.              |

---

## 📦 Stashing

| Command                              | Description                                                   |
| ------------------------------------ | ------------------------------------------------------------- |
| \`git stash\`                        | Stashes your local changes to a stack (clean working dir).    |
| \`git stash save "message"\`         | Stashes changes with a custom message (older syntax).         |
| \`git stash push -m "message"\`      | Stashes with a message (modern syntax).                       |
| \`git stash list\`                   | Shows all stashes saved.                                      |
| \`git stash show\`                   | Shows the changes of the most recent stash.                   |
| \`git stash show -p\`                | Shows a detailed diff of the most recent stash.               |
| \`git stash pop\`                    | Applies the most recent stash and removes it from stash list. |
| \`git stash apply\`                  | Applies the most recent stash without deleting it.            |
| \`git stash apply stash@{1}\`        | Applies a specific stash by index.                            |
| \`git stash drop stash@{0}\`         | Deletes a specific stash entry.                               |
| \`git stash clear\`                  | Deletes all stashes.                                          |
| \`git stash branch new-branch-name\` | Creates a new branch and applies the latest stash to it.      |

---


## 📜 Viewing History & Changes

| Command               | Description                                                   |
| --------------------- | ------------------------------------------------------------- |
| \`git log\`           | Shows full commit history.                                    |
| \`git log --oneline\` | Shows each commit on one line (short hash + message).         |
| \`git show <commit>\` | Shows details of a specific commit.                           |
| \`git diff\`          | Shows differences between working directory and staging area. |
| \`git diff --staged\` | Shows differences between staging area and last commit.       |

---

## 🆘 Help & Documentation

| Command                  | Description                                     |
| ------------------------ | ----------------------------------------------- |
| \`git help <command>\`   | Opens the manual for a specific Git command.    |
| \`git <command> --help\` | Shows the same help as above.                   |
| \`git <command> -h\`     | Shows a brief summary of options for a command. |
| \`git help --all\`       | Lists all available Git commands.               |
| \`git help -g\`          | Lists Git concept guides and tutorials.         |

---

## 🌿 Branching

| Command                             | Description                                                      |
| ----------------------------------- | ---------------------------------------------------------------- |
| \`git branch\`                      | Lists all local branches.                                        |
| \`git branch -a\`                   | Lists all local and remote branches.                             |
| \`git branch <branch-name>\`        | Creates a new branch.                                            |
| \`git switch <branch-name>\`        | Switches to another branch (recommended).                        |
| \`git checkout <branch-name>\`      | Legacy way to switch branches (still used).                      |
| \`git checkout -b <branch-name>\`   | Creates and switches to a new branch.                            |
| \`git switch -c <branch-name>\`     | Equivalent to the above using \`switch\`.                        |
| \`git branch -d <branch-name>\`     | Deletes a local branch (only if merged).                         |
| \`git branch -D <branch-name>\`     | Force-deletes a local branch.                                    |
| \`git merge <branch-name>\`         | Merges the given branch into the current branch.                 |
| \`git merge --no-ff <branch-name>\` | Merges with a commit even if fast-forward is possible.           |
| \`git rebase <branch-name>\`        | Applies commits from the current branch on top of the given one. |
| \`git branch --merged\`             | Shows branches that have been merged into the current one.       |
| \`git branch --no-merged\`          | Shows branches that have not been merged.                        |

---


## 🔀 Merging Branches

| Command                     | Description                                                          |
| --------------------------- | -------------------------------------------------------------------- |
| \`git merge <branch-name>\` | Merges the given branch into the current branch.                     |
| \`git merge --no-ff\`       | Forces creation of a merge commit, even if fast-forward is possible. |
| \`git merge --squash\`      | Combines all changes into a single commit, but doesn’t auto-commit. |
| \`git merge --abort\`       | Aborts an in-progress merge and resets to pre-merge state.           |

---
`,Vg=`🛣️ Kubernetes Learning Roadmap
1. Foundations (Core Concepts)

👉 Goal: Understand what Kubernetes is and why it’s needed.

What is Kubernetes?

Kubernetes vs Docker vs Docker Swarm

Kubernetes Architecture

Master (control plane) components (API Server, etcd, Scheduler, Controller Manager)

Worker node components (kubelet, kube-proxy, container runtime)

Pods, Nodes, Clusters

✅ Practice:

Install Kind / Minikube

Deploy a simple Nginx pod

2. Pods & Workloads

👉 Goal: Learn how apps run inside Kubernetes.

Pods (single / multi-container)

ReplicaSets (scaling pods)

Deployments (self-healing apps)

DaemonSets (1 pod per node, e.g., monitoring agents)

StatefulSets (for databases)

Jobs & CronJobs (batch tasks)

✅ Practice:

Deploy a MERN app with frontend + backend

Scale backend using kubectl scale

3. Networking

👉 Goal: How pods talk to each other and to the outside world.

Pod-to-Pod communication (Cluster networking)

Services: ClusterIP, NodePort, LoadBalancer

DNS inside Kubernetes (CoreDNS)

Ingress (expose HTTP/HTTPS apps with rules)

CNI plugins (Flannel, Calico, Cilium)

✅ Practice:

Expose your MERN app via Service + Ingress

Curl frontend → backend inside cluster

4. Storage

👉 Goal: Make apps stateful (databases, file storage).

Volumes

Persistent Volumes (PV)

Persistent Volume Claims (PVC)

Storage Classes & Dynamic provisioning

✅ Practice:

Deploy MongoDB with PVC

Connect backend pod to MongoDB via Service

5. Configuration & Secrets

👉 Goal: Externalize configs, secure secrets.

ConfigMaps (store environment configs)

Secrets (store passwords, API keys)

Mounting configs & secrets into pods

✅ Practice:

Store DB connection string in a Secret

Inject config into backend via ConfigMap

6. Advanced Workloads & Patterns

👉 Goal: Deploy production-ready apps.

Multi-container Pods (sidecars, init containers)

Affinity & Anti-affinity rules

Taints & Tolerations (control scheduling)

Namespaces (multi-tenancy)

✅ Practice:

Add a logging sidecar container

Use node affinity to run pods only on specific workers

7. Observability & Security

👉 Goal: Monitor, log, and secure clusters.

Monitoring: Prometheus + Grafana

Logging: EFK (Elasticsearch, Fluentd, Kibana) or Loki stack

Security:

RBAC (Role-based access control)

Network Policies

Pod Security Policies

✅ Practice:

Install Prometheus & Grafana in your cluster

Create an RBAC role that only allows viewing pods

8. Cluster Operations

👉 Goal: Learn real admin/ops tasks.

Node management (drain, cordon, taints)

Upgrades with kubeadm

Scaling cluster (add/remove nodes)

Backups (etcd)

High Availability clusters

✅ Practice:

Deploy a 3-node kubeadm cluster on EC2

Practice draining a worker node and moving pods

9. Cloud & Production

👉 Goal: Run Kubernetes at scale in cloud.

AWS EKS, Google GKE, Azure AKS

Autoscaling: HPA (Horizontal Pod Autoscaler), VPA, Cluster Autoscaler

CI/CD with Kubernetes (GitOps with ArgoCD, Flux)

Service Mesh (Istio, Linkerd)

✅ Practice:

Deploy MERN app on AWS EKS with Ingress + HPA

Add ArgoCD for GitOps deployment

10. Mastery & Beyond

👉 Goal: Become an advanced Kubernetes engineer.

Design highly available multi-region clusters

Deep dive into networking (Cilium, eBPF)

Chaos engineering with LitmusChaos

Operator pattern (write custom controllers in Go/Python)

Certification:

CKA (Certified Kubernetes Administrator)

CKAD (Certified Kubernetes Application Developer)

CKS (Certified Kubernetes Security Specialist)

🚀 Suggested Learning Path (Actionable)

Step 1 → Install Kind/Minikube → Learn Pods, Deployments, Services

Step 2 → Deploy MERN app (frontend + backend + DB)

Step 3 → Explore Ingress, Storage, Secrets, ConfigMaps

Step 4 → Learn Observability (Prometheus/Grafana)

Step 5 → Build a kubeadm cluster on EC2

Step 6 → Try Managed K8s (EKS/GKE/AKS)

Step 7 → Aim for CKA/CKAD`,qg=`# 🐳 Docker vs ☸️ Kubernetes

### 🔹 What Docker Does

* **Docker** is a  **container runtime** .
* It helps you:
  * Build an image (\`docker build\`)
  * Run a container (\`docker run\`)
  * Ship/share containers (via Docker Hub or registry)

👉 Docker makes it easy to package and run  **a single container on one machine** .

But what happens when your app grows?

---

### ⚠️ The Limitations of Docker Alone

1. **Scaling**
   * Docker alone can’t easily scale your app across multiple servers.
   * If you need 100 containers across 10 machines, you’d have to script and manage it yourself.
2. **High Availability**
   * If a container crashes, Docker won’t automatically restart it (unless you set restart policies, but still only on the same machine).
   * No guarantee of maintaining the  *desired number of replicas* .
3. **Load Balancing & Networking**
   * Docker doesn’t natively handle distributing traffic across containers on different hosts.
   * You’d have to manually configure reverse proxies/load balancers.
4. **Multi-node Management**
   * Docker works great on  **one host** . But managing containers across a cluster of machines is painful.
   * Example: "Run this container on node1, node2, and node3" → not possible natively.
5. **Storage**
   * Docker volumes are local to the machine.
   * If a container moves to another node, the data doesn’t follow automatically.
6. **Monitoring & Self-Healing**
   * Docker doesn’t monitor containers deeply.
   * If one goes down, it doesn’t automatically create another somewhere else.

---

### 🔹 What Kubernetes Adds on Top

Kubernetes was designed to solve exactly those problems:

1. **Cluster Management**
   * Manages multiple nodes (machines) as one cluster.
2. **Scheduling**
   * Automatically decides *where* to run containers based on resources.
3. **Scaling**
   * Horizontal Pod Autoscaler → add/remove pods automatically.
4. **Self-Healing**
   * If a pod crashes, Kubernetes restarts it.
   * If a node dies, Kubernetes reschedules pods on another node.
5. **Networking**
   * Built-in Service & Ingress abstractions for stable networking, service discovery, and load balancing.
6. **Storage Orchestration**
   * Supports persistent storage (local, NFS, AWS EBS, GCP PD, etc.).
   * Pods can move around but still use the same storage.
7. **Declarative Management**
   * Instead of manual commands (\`docker run ...\`), you declare the desired state in YAML:

     *“I want 5 replicas of this app running”* → Kubernetes ensures that always happens.

---

### 🚀 Analogy

* **Docker** = Shipping containers (each holds goods safely).
* **Kubernetes** = The **port authority + cranes + logistics system** that manages thousands of containers across many ships, ensures deliveries, balances traffic, and replaces lost containers.

---

👉 In short:

* **Docker = Creates & runs containers** (single machine).
* **Kubernetes = Manages containers at scale** (across a cluster, with self-healing, scaling, and networking).

---
`,Qg=`# 🌐 Kubernetes Architecture Overview

Kubernetes is a  **container orchestration system** . Think of it as an operating system for your cluster.

It manages your **applications (containers)** and ensures they run as expected on a set of  **machines (nodes)** .

At the highest level, Kubernetes architecture has  **two planes** :

1. **Control Plane** → The “brain” (management layer).
   * Decides *what* should run, *where* it should run, and *how* the cluster behaves.
   * Runs on a **Master Node** (or multiple for HA).
2. **Data Plane / Worker Nodes** → The “muscles” (execution layer).
   * Actually run the containers (your applications).
   * Worker nodes execute the instructions given by the control plane.

---

# 🧠 Control Plane Components (Master)

The control plane is made up of several components that together provide cluster management:

### 1. **API Server (\`kube-apiserver\`)**

* The **front door** to Kubernetes.
* Every interaction (kubectl, dashboards, other services) goes through the API server.
* It exposes a  **REST API** .
* Example: When you type \`kubectl apply -f deployment.yaml\`, it talks to the API Server.

---

### 2. **etcd**

* A **key-value store** that holds all cluster data (the “source of truth”).
* Stores:
  * Nodes in the cluster
  * Configurations
  * Secrets
  * Workloads, replicas, policies
* Highly available and consistent.
* Think of it as the  **Kubernetes database** .

---

### 3. **Controller Manager (\`kube-controller-manager\`)**

* Runs **controllers** (background processes) that constantly check the state of the cluster and make corrections.
* Examples:
  * **Node Controller** → ensures nodes are healthy.
  * **Replication Controller** → ensures the right number of pods are running.
  * **Job Controller** → monitors jobs and pods.
* Analogy: It’s like a **thermostat** → if desired state ≠ current state, it fixes it.

---

### 4. **Scheduler (\`kube-scheduler\`)**

* Decides **where pods should run** (which worker node).
* Uses constraints:
  * Resource availability (CPU, memory)
  * Node affinity/anti-affinity
  * Taints and tolerations
* Example: If a new pod needs to be scheduled, the scheduler finds the best worker node.

---

### 5. **Cloud Controller Manager** (optional, cloud integrations)

* If running in AWS, GCP, Azure → interacts with their APIs.
* Handles things like:
  * Load Balancers
  * Storage Volumes
  * Node provisioning

---

# ⚙️ Worker Node Components (Data Plane)

Each worker node is responsible for running your **pods** (containers). Key components:

### 1. **Kubelet**

* Agent that runs on every node.
* Talks to the API server.
* Ensures:
  * Pods described in etcd actually run on the node.
  * Containers are healthy.
* Think of it as a  **node manager** .

---

### 2. **Kube-proxy**

* Handles **networking** on each node.
* Implements **Kubernetes Services** (ClusterIP, NodePort, LoadBalancer).
* Uses iptables or IPVS to forward traffic correctly.

---

### 3. **Container Runtime**

* Actual engine that runs containers.
* Examples: Docker, containerd, CRI-O.
* Kubernetes doesn’t run containers itself → it asks the container runtime to do so.

---

# 🧩 Pods & Higher-Level Abstractions

* **Pod** → Smallest deployable unit in Kubernetes. A pod wraps one or more containers.
* **ReplicaSet** → Ensures multiple copies of pods exist.
* **Deployment** → Manages ReplicaSets and rolling updates.
* **Service** → Provides stable networking to pods.
* **ConfigMap & Secret** → Store configuration and sensitive data.
* **Ingress** → Manages external access (usually HTTP/HTTPS).

---

# 🔄 How it All Works Together (Flow)

1. You run \`kubectl apply -f deployment.yaml\`.
2. **kubectl** → talks to  **API Server** .
3. **API Server** → stores desired state in  **etcd** .
4. **Controller Manager** → notices a new Deployment.
5. **Scheduler** → picks the best worker node.
6. **Kubelet** on that node → tells container runtime (Docker/containerd) to start the container.
7. **Kube-proxy** → configures networking so traffic can reach the pod.
8. Controllers keep monitoring → If a pod dies, a new one is started.

---



# 📝 Ways of Running Kubernetes

---

## 1. **Local Development Environments**

Best for **learning & experimenting** on a single machine (laptop, VM, or EC2).

### 🔹 Minikube

* Runs K8s cluster **inside a VM or a big container** on your host.
* By default, master + worker are inside that environment.
* Good for beginners, lightweight clusters, testing.
* Driver options: Docker, VirtualBox, Hyper-V.
* Pods are  **containers inside the big container/VM** .

  ✅ Pros: Easy to install, simple for beginners.

  ❌ Cons: Nested container setup, not like real production.

---

### 🔹 Kind (Kubernetes-in-Docker)

* Each Kubernetes node (master/worker) is a  **Docker container** .
* Pods run inside those containerized nodes.
* Great for CI/CD testing because clusters start fast.

  ✅ Pros: Super fast, lightweight, easy for pipelines.

  ❌ Cons: Still “containers inside containers,” not real-world infra.

---

### 🔹 K3s

* Lightweight Kubernetes (by Rancher/SUSE).
* Installs directly on the host (no big container).
* Uses **containerd** by default (no heavy Docker).
* Great for edge devices, Raspberry Pi, IoT.

  ✅ Pros: Tiny footprint, production-ready for small/edge infra.

  ❌ Cons: Not full enterprise K8s (but very close).

---

### 🔹 MicroK8s

* Lightweight distribution from Canonical (Ubuntu).
* Runs on host machine, minimal dependencies.
* Can easily enable/disable features with \`microk8s enable ...\`.
* Production-ready for both small and big environments.

  ✅ Pros: Easy single command setup, close to real K8s.

  ❌ Cons: Mostly Ubuntu-focused.

---

## 2. **Production-Style DIY Setup**

Best for  **serious labs or real-world deployments** .

### 🔹 kubeadm

* Official tool from Kubernetes project.
* You provision  **your own machines (VMs/EC2/bare metal)** .
* On master node → install control plane (apiserver, etcd, scheduler).
* On worker nodes → install kubelet + join cluster.
* Pods run **directly on host’s runtime** (Docker/containerd).

  ✅ Pros: Real production-style, flexible, teaches internals.

  ❌ Cons: Manual setup (you manage everything).

---

### 🔹 Kubespray

* Ansible-based automation to set up Kubernetes across machines.
* Uses kubeadm under the hood but automated.
* Good for bigger clusters.

  ✅ Pros: Less manual than kubeadm.

  ❌ Cons: More complexity for small labs.

---

### 🔹 Rancher

* GUI + automation platform for managing K8s clusters.
* Can deploy & manage multiple clusters (on-prem, cloud, hybrid).

  ✅ Pros: Enterprise features, multi-cluster management.

  ❌ Cons: More overhead than you need for just learning.

---

## 3. **Managed Kubernetes (Cloud Providers)**

Best for **production & enterprises** who don’t want to manage infra.

### 🔹 AWS EKS (Elastic Kubernetes Service)

* AWS manages the master (control plane).
* You manage worker nodes (or use Fargate for serverless pods).

### 🔹 Google GKE (Google Kubernetes Engine)

* Google pioneered K8s, so GKE is most mature.
* Control plane fully managed.

### 🔹 Azure AKS (Azure Kubernetes Service)

* Microsoft’s managed service.

✅ Pros: No headache of managing masters, high availability, autoscaling, cloud integrations.

❌ Cons: Costs $, less control over low-level configs.

---

# 🏁 Summary

* **Minikube / Kind** → Best for quick  **local learning** , but not production-like.
* **MicroK8s / K3s** → Lightweight, good for  **host-based single-node clusters** .
* **kubeadm** → Best for **realistic production-style learning** (separate master/worker).
* **Managed K8s (EKS/GKE/AKS)** → For **enterprise production** clusters in cloud.

---

👉 Think of it like  **levels of learning** :

1. Start with **Minikube/Kind** (easy intro).
2. Move to **MicroK8s/K3s** (pods on host directly).
3. Graduate to **kubeadm with multiple EC2s** (real cluster).
4. Finally, explore  **cloud-managed K8s (EKS/GKE/AKS)** .

---
`,Xg=`# 🚀 Step 1: Install Prerequisites

Install KIND and kubectl using the script "install.sh"

# 🚀 Step 2: Create a Cluster

1. Create a  **default single-node cluster** :

   <pre class="overflow-visible!" data-start="968" data-end="1022"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>kind create cluster --name mycluster
   </span></span></code></div></div></pre>

   🔹 This will spin up **one Docker container** → acting as both master + worker.

   🔹 Check nodes:

   <pre class="overflow-visible!" data-start="1131" data-end="1166"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>kubectl get nodes
   </span></span></code></div></div></pre>
2. Create a **multi-node cluster** (1 master, 2 workers):

   * Create a config file:
     <pre class="overflow-visible!" data-start="1260" data-end="1444"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-yaml"><span><span># kind-config.yaml</span><span>
     </span><span>kind:</span><span></span><span>Cluster</span><span>
     </span><span>apiVersion:</span><span></span><span>kind.x-k8s.io/v1alpha4</span><span>
     </span><span>nodes:</span><span>
       </span><span>-</span><span></span><span>role:</span><span></span><span>control-plane</span><span>
       </span><span>-</span><span></span><span>role:</span><span></span><span>worker</span><span>
       </span><span>-</span><span></span><span>role:</span><span></span><span>worker</span><span>
     </span></span></code></div></div></pre>
   * Run:
     <pre class="overflow-visible!" data-start="1460" data-end="1544"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>kind create cluster --name mycluster --config kind-config.yaml
     </span></span></code></div></div></pre>

   🔹 This will spin up **3 Docker containers** (1 master, 2 workers).

---

# 🚀 Step 3: Verify

* Check Docker containers (nodes):

  <pre class="overflow-visible!" data-start="1682" data-end="1707"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker ps
  </span></span></code></div></div></pre>

  You’ll see containers like:

  <pre class="overflow-visible!" data-start="1740" data-end="1799"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>kind-control-plane
  kind-worker
  kind-worker2
  </span></span></code></div></div></pre>
* Check Kubernetes nodes:

  <pre class="overflow-visible!" data-start="1829" data-end="1870"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>kubectl get nodes -o wide
  </span></span></code></div></div></pre>
* Deploy a test Pod:

  <pre class="overflow-visible!" data-start="1895" data-end="1979"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>kubectl run nginx --image=nginx --port=80
  kubectl get pods -o wide
  </span></span></code></div></div></pre>

---

# 🚀 Step 4: Delete Cluster

<pre class="overflow-visible!" data-start="2014" data-end="2062"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>kind delete cluster --name mycluster
</span></span></code></div></div></pre>
`,Zg=`# DevSecOps Overview

## Overview

This is the learning note for **DevSecOps Overview**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning DevSecOps Overview"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Wg=`# Software Composition Analysis

## Overview

This is the learning note for **Software Composition Analysis**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Software Composition Analysis"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Jg=`# Static Application Security Testing

## Overview

This is the learning note for **Static Application Security Testing**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Static Application Security Testing"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Pg=`# Secrets Management

## Overview

This is the learning note for **Secrets Management**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Secrets Management"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Fg=`# Container Security

## Overview

This is the learning note for **Container Security**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Container Security"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,$g=`# CI/CD Security

## Overview

This is the learning note for **CI/CD Security**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning CI/CD Security"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,ev=`# Testing Overview

## Overview

This is the learning note for **Testing Overview**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Testing Overview"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,nv=`# Unit Testing

## Overview

This is the learning note for **Unit Testing**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Unit Testing"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,tv=`# Integration Testing

## Overview

This is the learning note for **Integration Testing**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Integration Testing"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,av=`# API Testing

## Overview

This is the learning note for **API Testing**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning API Testing"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,sv=`# Automation Testing

## Overview

This is the learning note for **Automation Testing**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Automation Testing"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,lv=`# Networking Overview

## Overview

This is the learning note for **Networking Overview**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Networking Overview"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,iv=`# Switching

## Overview

This is the learning note for **Switching**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Switching"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,ov=`# Routing

## Overview

This is the learning note for **Routing**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Routing"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,rv=`# TCP/IP

## Overview

This is the learning note for **TCP/IP**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning TCP/IP"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,cv=`# DNS

## Overview

This is the learning note for **DNS**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning DNS"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,uv=`# HTTP and HTTPS

## Overview

This is the learning note for **HTTP and HTTPS**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning HTTP and HTTPS"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,dv=`# AI Overview

## Overview

This is the learning note for **AI Overview**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning AI Overview"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,pv=`# Large Language Models

## Overview

This is the learning note for **Large Language Models**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Large Language Models"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,mv=`# Retrieval Augmented Generation

## Overview

This is the learning note for **Retrieval Augmented Generation**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Retrieval Augmented Generation"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,fv=`# LangChain

## Overview

This is the learning note for **LangChain**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning LangChain"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,hv=`# LangGraph

## Overview

This is the learning note for **LangGraph**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning LangGraph"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,gv=`# N8N

## Overview

This is the learning note for **N8N**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning N8N"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,vv=`# Model Context Protocol

## Overview

This is the learning note for **Model Context Protocol**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Model Context Protocol"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,bv=`# AI Agents

## Overview

This is the learning note for **AI Agents**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning AI Agents"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,yv=`# Frontend Overview

## Overview

This is the learning note for **Frontend Overview**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Frontend Overview"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,xv=`# HTML

## Overview

This is the learning note for **HTML**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning HTML"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,kv=`# CSS

## Overview

This is the learning note for **CSS**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning CSS"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,wv=`# JavaScript

## Overview

This is the learning note for **JavaScript**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning JavaScript"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Cv=`# TypeScript

## Overview

This is the learning note for **TypeScript**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning TypeScript"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Sv=`# React

## Overview

This is the learning note for **React**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning React"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Av=`# Vite

## Overview

This is the learning note for **Vite**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Vite"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,_v=`# Backend Overview

## Overview

This is the learning note for **Backend Overview**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Backend Overview"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Nv=`# Node.js

## Overview

This is the learning note for **Node.js**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Node.js"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Tv=`# Express.js

## Overview

This is the learning note for **Express.js**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Express.js"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Dv=`# Flask

## Overview

This is the learning note for **Flask**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Flask"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Mv=`# REST APIs

## Overview

This is the learning note for **REST APIs**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning REST APIs"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,jv=`# Authentication

## Overview

This is the learning note for **Authentication**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Authentication"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Ev=`# Database Overview

## Overview

This is the learning note for **Database Overview**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Database Overview"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Ov=`# SQL

## Overview

This is the learning note for **SQL**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning SQL"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,zv=`# Microsoft SQL Server

## Overview

This is the learning note for **Microsoft SQL Server**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Microsoft SQL Server"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Rv=`# PostgreSQL

## Overview

This is the learning note for **PostgreSQL**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning PostgreSQL"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Lv=`# MongoDB

## Overview

This is the learning note for **MongoDB**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning MongoDB"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Uv=`# Cloud Overview

## Overview

This is the learning note for **Cloud Overview**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Cloud Overview"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Bv=`# AWS Overview

## Overview

This is the learning note for **AWS Overview**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning AWS Overview"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Hv=`# AWS IAM

## Overview

This is the learning note for **AWS IAM**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning AWS IAM"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Iv=`# AWS EC2

## Overview

This is the learning note for **AWS EC2**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning AWS EC2"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Yv=`# AWS VPC

## Overview

This is the learning note for **AWS VPC**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning AWS VPC"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Gv=`# Azure Overview

## Overview

This is the learning note for **Azure Overview**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Azure Overview"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Kv=`# Azure Virtual Machines

## Overview

This is the learning note for **Azure Virtual Machines**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Azure Virtual Machines"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Vv=`# GCP Overview

## Overview

This is the learning note for **GCP Overview**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning GCP Overview"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,qv=`# VMware Overview

## Overview

This is the learning note for **VMware Overview**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning VMware Overview"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Qv=`# System Design Overview

## Overview

This is the learning note for **System Design Overview**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning System Design Overview"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Xv=`# Scalability

## Overview

This is the learning note for **Scalability**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Scalability"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Zv=`# Load Balancing

## Overview

This is the learning note for **Load Balancing**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Load Balancing"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Wv=`# Caching

## Overview

This is the learning note for **Caching**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Caching"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Jv=`# Database Design

## Overview

This is the learning note for **Database Design**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Database Design"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Pv=`# Message Queues

## Overview

This is the learning note for **Message Queues**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Message Queues"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,Fv=`# Microservices

## Overview

This is the learning note for **Microservices**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Microservices"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,$v=`# Security Overview

## Overview

This is the learning note for **Security Overview**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Security Overview"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,eb=`# Cryptography

## Overview

This is the learning note for **Cryptography**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Cryptography"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,nb=`# Network Security

## Overview

This is the learning note for **Network Security**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Network Security"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,tb=`# Identity and Access Management

## Overview

This is the learning note for **Identity and Access Management**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Identity and Access Management"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,ab=`# Secrets Management

## Overview

This is the learning note for **Secrets Management**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Secrets Management"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,sb=`# Vulnerability Management

## Overview

This is the learning note for **Vulnerability Management**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Vulnerability Management"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,lb=`# Programming Languages Overview

## Overview

This is the learning note for **Programming Languages Overview**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Programming Languages Overview"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,ib=`# Python

## Overview

This is the learning note for **Python**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Python"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,ob=`# JavaScript

## Overview

This is the learning note for **JavaScript**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning JavaScript"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,rb=`# TypeScript

## Overview

This is the learning note for **TypeScript**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning TypeScript"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,cb=`# Bash

## Overview

This is the learning note for **Bash**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Bash"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,ub=`# C

## Overview

This is the learning note for **C**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning C"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,db=`# C++

## Overview

This is the learning note for **C++**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning C++"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,pb=`# Personal Projects

## Overview

This is the learning note for **Personal Projects**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Personal Projects"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,mb=`# Progress Pulse

## Overview

This is the learning note for **Progress Pulse**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning Progress Pulse"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,fb=`# RMS

## Overview

This is the learning note for **RMS**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning RMS"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,hb=`# PMS

## Overview

This is the learning note for **PMS**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning PMS"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,gb=`# AI Automation

## Overview

This is the learning note for **AI Automation**.

## Key Concepts

- Concept 1
- Concept 2
- Concept 3

## Notes

Add your detailed learning notes here.

## Examples

\`\`\`bash
# Add examples here
echo "Learning AI Automation"
\`\`\`

## Important Points

- Important point 1
- Important point 2
- Important point 3

## Resources

- Add useful documentation links here.
`,vb=Object.assign({"/learning/01. DevOps/01. Terraform/00. Roadmap.md":og,"/learning/01. DevOps/01. Terraform/01. Basics.md":rg,"/learning/01. DevOps/01. Terraform/02. Configuration Block.md":cg,"/learning/01. DevOps/01. Terraform/03. Provider.md":ug,"/learning/01. DevOps/01. Terraform/04. Resources.md":dg,"/learning/01. DevOps/01. Terraform/05. Variables.md":pg,"/learning/01. DevOps/01. Terraform/06. Output Variables.md":mg,"/learning/01. DevOps/01. Terraform/07. Modules.md":fg,"/learning/01. DevOps/01. Terraform/08. Locals.md":hg,"/learning/01. DevOps/01. Terraform/09. Data.md":gg,"/learning/01. DevOps/01. Terraform/10. Backend Block.md":vg,"/learning/01. DevOps/01. Terraform/11. Depends_on.md":bg,"/learning/01. DevOps/01. Terraform/12. Lifecycle.md":yg,"/learning/01. DevOps/01. Terraform/13. Provisioner.md":xg,"/learning/01. DevOps/01. Terraform/15. Best Practices.md":kg,"/learning/01. DevOps/01. Terraform/16. State Management.md":wg,"/learning/01. DevOps/Ansible/00. Roadmap.md":Cg,"/learning/01. DevOps/Ansible/01. What is Ansible.md":Sg,"/learning/01. DevOps/Ansible/02. Ansible Vs Chef.md":Ag,"/learning/01. DevOps/Ansible/03. Core Concepts.md":_g,"/learning/01. DevOps/Ansible/04. YAML.md":Ng,"/learning/01. DevOps/Ansible/05. Intermediate Concepts.md":Tg,"/learning/01. DevOps/Ansible/06. Advance Concepts.md":Dg,"/learning/01. DevOps/Ansible/07. Commands Cheat Sheet.md":Mg,"/learning/01. DevOps/Chef/00. Roadmap.md":jg,"/learning/01. DevOps/Chef/01. Basics.md":Eg,"/learning/01. DevOps/Chef/02. Chef Arcitecture.md":Og,"/learning/01. DevOps/Docker/00. Syllabus.md":zg,"/learning/01. DevOps/Docker/01. Basics.md":Rg,"/learning/01. DevOps/Docker/02. Docker Fundamentals.md":Lg,"/learning/01. DevOps/Docker/03. Docker Images.md":Ug,"/learning/01. DevOps/Docker/04. Dockerfile.md":Bg,"/learning/01. DevOps/Docker/05. Docker Volumes.md":Hg,"/learning/01. DevOps/Docker/06. Docker Networking.md":Ig,"/learning/01. DevOps/Docker/07. Docker Compose.md":Yg,"/learning/01. DevOps/Git/HowToSSHIntoGitHub.md":Gg,"/learning/01. DevOps/Git/gitCommands.md":Kg,"/learning/01. DevOps/Kubernetes/00. Roadmap.md":Vg,"/learning/01. DevOps/Kubernetes/01. Why Kubernetes.md":qg,"/learning/01. DevOps/Kubernetes/02. Architecture.md":Qg,"/learning/01. DevOps/Kubernetes/Kind-Cluster/README.md":Xg,"/learning/02. DevSecOps/00. Overview.md":Zg,"/learning/02. DevSecOps/01. SCA.md":Wg,"/learning/02. DevSecOps/02. SAST.md":Jg,"/learning/02. DevSecOps/03. Secrets Management.md":Pg,"/learning/02. DevSecOps/04. Container Security.md":Fg,"/learning/02. DevSecOps/05. CI-CD Security.md":$g,"/learning/03. Testing/00. Overview.md":ev,"/learning/03. Testing/01. Unit Testing.md":nv,"/learning/03. Testing/02. Integration Testing.md":tv,"/learning/03. Testing/03. API Testing.md":av,"/learning/03. Testing/04. Automation Testing.md":sv,"/learning/04. Networking/00. Overview.md":lv,"/learning/04. Networking/01. Switching.md":iv,"/learning/04. Networking/02. Routing.md":ov,"/learning/04. Networking/03. TCP-IP.md":rv,"/learning/04. Networking/04. DNS.md":cv,"/learning/04. Networking/05. HTTP-HTTPS.md":uv,"/learning/05. AI/00. Overview.md":dv,"/learning/05. AI/01. LLM.md":pv,"/learning/05. AI/02. RAG.md":mv,"/learning/05. AI/03. LangChain.md":fv,"/learning/05. AI/04. LangGraph.md":hv,"/learning/05. AI/05. N8N.md":gv,"/learning/05. AI/06. MCP.md":vv,"/learning/05. AI/07. AI Agents.md":bv,"/learning/06. Frontend/00. Overview.md":yv,"/learning/06. Frontend/01. HTML.md":xv,"/learning/06. Frontend/02. CSS.md":kv,"/learning/06. Frontend/03. JavaScript.md":wv,"/learning/06. Frontend/04. TypeScript.md":Cv,"/learning/06. Frontend/05. React.md":Sv,"/learning/06. Frontend/06. Vite.md":Av,"/learning/07. Backend/00. Overview.md":_v,"/learning/07. Backend/01. Node.js.md":Nv,"/learning/07. Backend/02. Express.js.md":Tv,"/learning/07. Backend/03. Flask.md":Dv,"/learning/07. Backend/04. REST APIs.md":Mv,"/learning/07. Backend/05. Authentication.md":jv,"/learning/08. Database/00. Overview.md":Ev,"/learning/08. Database/01. SQL.md":Ov,"/learning/08. Database/02. MSSQL.md":zv,"/learning/08. Database/03. PostgreSQL.md":Rv,"/learning/08. Database/04. MongoDB.md":Lv,"/learning/09. Cloud/00. Overview.md":Uv,"/learning/09. Cloud/AWS/00. Overview.md":Bv,"/learning/09. Cloud/AWS/01. IAM.md":Hv,"/learning/09. Cloud/AWS/02. EC2.md":Iv,"/learning/09. Cloud/AWS/03. VPC.md":Yv,"/learning/09. Cloud/Azure/00. Overview.md":Gv,"/learning/09. Cloud/Azure/01. Virtual Machines.md":Kv,"/learning/09. Cloud/GCP/00. Overview.md":Vv,"/learning/09. Cloud/VMware/00. Overview.md":qv,"/learning/10. System Design/00. Overview.md":Qv,"/learning/10. System Design/01. Scalability.md":Xv,"/learning/10. System Design/02. Load Balancing.md":Zv,"/learning/10. System Design/03. Caching.md":Wv,"/learning/10. System Design/04. Databases.md":Jv,"/learning/10. System Design/05. Message Queues.md":Pv,"/learning/10. System Design/06. Microservices.md":Fv,"/learning/11. Security/00. Overview.md":$v,"/learning/11. Security/01. Cryptography.md":eb,"/learning/11. Security/02. Network Security.md":nb,"/learning/11. Security/03. Identity and Access Management.md":tb,"/learning/11. Security/04. Secrets Management.md":ab,"/learning/11. Security/05. Vulnerability Management.md":sb,"/learning/12. Languages/00. Overview.md":lb,"/learning/12. Languages/01. Python.md":ib,"/learning/12. Languages/02. JavaScript.md":ob,"/learning/12. Languages/03. TypeScript.md":rb,"/learning/12. Languages/04. Bash.md":cb,"/learning/12. Languages/05. C.md":ub,"/learning/12. Languages/06. C++.md":db,"/learning/13. Personal Projects/00. Overview.md":pb,"/learning/13. Personal Projects/01. Progress Pulse.md":mb,"/learning/13. Personal Projects/02. RMS.md":fb,"/learning/13. Personal Projects/03. PMS.md":hb,"/learning/13. Personal Projects/04. AI Automation.md":gb}),bb={DevOps:{icon:"Server",description:"Infrastructure automation, containers, CI/CD, Kubernetes, and orchestration.",color:"from-blue-500 to-cyan-500"},DevSecOps:{icon:"ShieldCheck",description:"Integrating security into DevOps pipelines, SAST, SCA, container security.",color:"from-emerald-500 to-teal-500"},Testing:{icon:"CheckCircle2",description:"Unit testing, integration testing, API validation, and automation suites.",color:"from-indigo-500 to-purple-500"},Networking:{icon:"Network",description:"TCP/IP, routing, DNS, switching protocols, and HTTP/HTTPS network stack.",color:"from-sky-500 to-blue-600"},AI:{icon:"Cpu",description:"Large Language Models, RAG, LangChain, LangGraph, AI Agents & MCP.",color:"from-purple-500 to-pink-500"},Frontend:{icon:"Layout",description:"HTML5, CSS3, JavaScript, TypeScript, React framework, and Vite build tool.",color:"from-amber-500 to-orange-500"},Backend:{icon:"Terminal",description:"Node.js, Express, Flask, REST APIs, and authentication mechanisms.",color:"from-emerald-500 to-green-600"},Database:{icon:"Database",description:"Relational & NoSQL systems: SQL, PostgreSQL, MSSQL, MongoDB.",color:"from-cyan-500 to-blue-500"},Cloud:{icon:"Cloud",description:"Multi-cloud architectures across AWS, Azure, GCP, and VMware virtualization.",color:"from-violet-500 to-purple-600"},"System Design":{icon:"Layers",description:"Scalability, Load Balancing, Caching, Databases, Message Queues & Microservices.",color:"from-rose-500 to-red-500"},Security:{icon:"Lock",description:"Cryptography, Network Security, IAM, Secrets, and Vulnerability Management.",color:"from-red-500 to-orange-500"},Languages:{icon:"Code2",description:"Core programming languages: Python, JavaScript, TypeScript, Bash, C, C++.",color:"from-yellow-500 to-amber-600"},"Personal Projects":{icon:"FolderKanban",description:"Hands-on projects: Progress Pulse, RMS, PMS, AI Automation.",color:"from-teal-500 to-emerald-600"}};function Ds(p){return p.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}function yb(p){const y=[],w=p.split(`
`);for(const u of w){const b=u.trim();if(b.startsWith("## ")){const A=b.replace(/^##\s+/,"").trim(),_=Ds(A);y.push({id:_,text:A,level:2})}else if(b.startsWith("### ")){const A=b.replace(/^###\s+/,"").trim(),_=Ds(A);y.push({id:_,text:A,level:3})}}return y}function xb(p){const y=p.replace(/```[\s\S]*?```/g,"").replace(/#+\s+.*?\n/g,"").replace(/[*_~`]/g,"").replace(/\n+/g," ").trim();return y.slice(0,180)+(y.length>180?"...":"")}function kb(p,y){const w=p.replace(/\\/g,"/"),u=w.split("/learning/")[1]||w.split("learning/")[1]||w,b=u.split("/").filter(Boolean);let A=b[0]||"Uncategorized",_="99",j=A;const D=A.match(/^(\d+)\.\s*(.+)$/);D&&(_=D[1],j=D[2]);let U,R=b[b.length-1]||"article.md";b.length>2&&(U=b[1]);const E=R.replace(/\.md$/i,""),T=E.replace(/^\d+[\.\s\-]+/,"").trim()||E;let q="00",X=T;const M=E.match(/^(\d+)\.\s*(.+)$/);M&&(q=M[1],X=M[2]);const be=y.match(/^#\s+(.+)$/m);be&&be[1].trim()&&(X=be[1].trim());const Pe=U?`${Ds(U)}-`:"",un=`${Ds(j)}-${Pe}${q}-${Ds(T)}`,Te=yb(y),Ie=y.trim().split(/\s+/).length,Me=Math.max(1,Math.ceil(Ie/150)),Ye=xb(y);return{id:un,title:X,category:j,categoryOrder:_,rawFolderName:A,fileNameClean:T,subcategory:U,orderNumber:q,filePath:`learning/${u}`,rawContent:y,headings:Te,readTimeMinutes:Me,wordCount:Ie,snippet:Ye}}let Nr=null,Tr=null;function _t(){if(Nr)return Nr;const p=[];for(const[y,w]of Object.entries(vb))if(y.endsWith(".md")){const u=kb(y,w);p.push(u)}return p.sort((y,w)=>{if(y.categoryOrder!==w.categoryOrder)return parseInt(y.categoryOrder,10)-parseInt(w.categoryOrder,10);if(y.subcategory||w.subcategory){if(y.subcategory&&w.subcategory&&y.subcategory!==w.subcategory)return y.subcategory.localeCompare(w.subcategory);if(y.subcategory&&!w.subcategory)return 1;if(!y.subcategory&&w.subcategory)return-1}return parseInt(y.orderNumber,10)-parseInt(w.orderNumber,10)}),Nr=p,p}function Os(){if(Tr)return Tr;const p=_t(),y=new Map;for(const u of p){if(!y.has(u.category)){const A=bb[u.category]||{icon:"BookOpen",description:`Comprehensive guide and documentation for ${u.category}.`};y.set(u.category,{name:u.category,rawFolderName:u.rawFolderName,order:u.categoryOrder,iconName:A.icon,description:A.description,articles:[],subcategories:[]})}const b=y.get(u.category);if(u.subcategory){let A=b.subcategories.find(_=>_.name===u.subcategory);A||(A={name:u.subcategory,articles:[]},b.subcategories.push(A)),A.articles.push(u)}else b.articles.push(u)}const w=Array.from(y.values()).sort((u,b)=>parseInt(u.order,10)-parseInt(b.order,10));return Tr=w,w}function ni(p){return _t().find(w=>w.id===p)}function wb(p){if(!p.trim())return[];const y=p.toLowerCase().trim(),w=_t(),u=[];for(const b of w){let A=0;const _=[];b.title.toLowerCase().includes(y)&&(A+=10),b.category.toLowerCase().includes(y)&&(A+=5),b.subcategory&&b.subcategory.toLowerCase().includes(y)&&(A+=5);for(const U of b.headings)U.text.toLowerCase().includes(y)&&(A+=3,_.push(U.text));const j=b.rawContent.toLowerCase(),D=(j.match(new RegExp(y.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g"))||[]).length;if(D>0&&(A+=Math.min(D,10)),A>0){let U;const R=j.indexOf(y);if(R!==-1){const E=Math.max(0,R-40),T=Math.min(j.length,R+y.length+60);U=b.rawContent.slice(E,T).replace(/\n+/g," ")}u.push({article:b,matchedHeadings:_,snippetMatch:U,score:A})}}return u.sort((b,A)=>A.score-b.score)}function Cb(p){const y=_t(),w=y.findIndex(u=>u.id===p);return w===-1?{}:{prev:w>0?y[w-1]:void 0,next:w<y.length-1?y[w+1]:void 0}}const Sb=({onOpenSearch:p,toggleSidebar:y,isSidebarOpen:w,theme:u,setTheme:b})=>{const A=Qp(),_=_t(),[j,D]=ei.useState(Pn()),[U,R]=ei.useState(Xt());ei.useEffect(()=>{const T=()=>{D(Pn()),R(Xt())};return window.addEventListener("knowledge_pulse_storage_update",T),window.addEventListener("storage",T),()=>{window.removeEventListener("knowledge_pulse_storage_update",T),window.removeEventListener("storage",T)}},[]);const E=Math.round(j.length/_.length*100)||0;return i.jsx("header",{className:"sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 backdrop-blur-xl",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("button",{onClick:y,className:"lg:hidden p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 transition-colors","aria-label":"Toggle navigation menu",children:w?i.jsx(Gp,{className:"w-5 h-5"}):i.jsx(_h,{className:"w-5 h-5"})}),i.jsxs(ge,{to:"/",className:"flex items-center gap-3 group",children:[i.jsx("div",{className:"w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform",children:i.jsx(St,{className:"w-5 h-5 text-white"})}),i.jsx("div",{children:i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsxs("span",{className:"font-extrabold text-lg text-slate-100 tracking-tight",children:["Knowledge",i.jsx("span",{className:"text-indigo-400",children:"Vault"})]}),i.jsx("span",{className:"hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold bg-indigo-950/80 text-indigo-300 border border-indigo-800/60 rounded-full",children:"88 DOCS"})]})})]})]}),i.jsx("div",{className:"flex-1 max-w-md hidden md:block",children:i.jsxs("button",{onClick:p,className:"w-full flex items-center justify-between px-3.5 py-2 bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/60 hover:border-indigo-500/50 rounded-xl text-slate-400 transition-all text-sm group shadow-inner",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(za,{className:"w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors"}),i.jsx("span",{children:"Search topics, codes, concepts..."})]}),i.jsx("kbd",{className:"px-2 py-0.5 text-xs text-slate-400 bg-slate-800 border border-slate-700 rounded-md font-mono",children:"Ctrl K"})]})}),i.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[i.jsx("button",{onClick:p,className:"md:hidden p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 transition-colors",title:"Search",children:i.jsx(za,{className:"w-5 h-5"})}),i.jsxs(ge,{to:"/graph",className:`hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xl transition-all ${A.pathname==="/graph"?"bg-indigo-600/20 text-indigo-300 border border-indigo-500/40":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`,children:[i.jsx(Kp,{className:"w-4 h-4 text-cyan-400"}),i.jsx("span",{children:"Mind Map"})]}),i.jsxs(ge,{to:"/quiz",className:`hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xl transition-all ${A.pathname==="/quiz"?"bg-indigo-600/20 text-indigo-300 border border-indigo-500/40":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`,children:[i.jsx(ti,{className:"w-4 h-4 text-amber-400"}),i.jsx("span",{children:"Flashcards"})]}),i.jsxs(ge,{to:"/bookmarks",className:`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xl transition-all ${A.pathname==="/bookmarks"?"bg-indigo-600/20 text-indigo-300 border border-indigo-500/40":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`,children:[i.jsx(Ms,{className:"w-4 h-4 text-purple-400"}),i.jsx("span",{className:"hidden sm:inline",children:"Saved"}),U.length>0&&i.jsx("span",{className:"px-1.5 py-0.2 text-[10px] bg-purple-950 text-purple-300 border border-purple-800/60 rounded-full font-bold",children:U.length})]}),i.jsxs("div",{className:"hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs",children:[i.jsx(Nn,{className:"w-4 h-4 text-emerald-400"}),i.jsxs("span",{className:"text-slate-300 font-medium",children:[E,"% Completed"]})]}),i.jsx("button",{onClick:()=>b(u==="dark"?"light":"dark"),className:"p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 transition-colors",title:"Toggle theme",children:u==="dark"?i.jsx(Nh,{className:"w-5 h-5 text-amber-400"}):i.jsx(Th,{className:"w-5 h-5 text-indigo-400"})})]})]})})},Zt=({name:p,className:y="w-5 h-5",size:w})=>{const u=Dh[p]||St;return i.jsx(u,{className:y,size:w})};function ai(p){const y=p.toLowerCase();return y.includes("devsecops")?"ShieldCheck":y.includes("devops")?"Server":y.includes("testing")?"CheckCircle2":y.includes("networking")?"Network":y.includes("ai")?"Cpu":y.includes("frontend")?"Layout":y.includes("backend")?"Terminal":y.includes("database")?"Database":y.includes("cloud")||y.includes("aws")||y.includes("azure")||y.includes("gcp")?"Cloud":y.includes("vmware")?"Server":y.includes("system design")?"Layers":y.includes("security")?"Lock":y.includes("language")?"Code2":y.includes("project")?"FolderKanban":"Folder"}function wn(p){return p.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}const Ab=({isOpen:p,onCloseMobile:y})=>{const w=Qp(),u=At(),b=Os(),[A,_]=Z.useState(Pn()),[j,D]=Z.useState(Xt()),[U,R]=Z.useState({}),[E,T]=Z.useState({}),[q,X]=Z.useState("");Z.useEffect(()=>{const z=()=>{_(Pn()),D(Xt())};return window.addEventListener("knowledge_pulse_storage_update",z),window.addEventListener("storage",z),()=>{window.removeEventListener("knowledge_pulse_storage_update",z),window.removeEventListener("storage",z)}},[]),Z.useEffect(()=>{if(w.pathname.startsWith("/category/")){const z=w.pathname.split("/category/")[1].split("/"),G=decodeURIComponent(z[0]||""),oe=z[1]?decodeURIComponent(z[1]):void 0,je=b.find(de=>de.name.toLowerCase()===G.toLowerCase()||de.rawFolderName.toLowerCase()===G.toLowerCase()||wn(de.name)===wn(G)||wn(de.rawFolderName)===wn(G));if(je&&(R(de=>({...de,[je.name]:!0})),oe)){const de=je.subcategories.find(pe=>pe.name.toLowerCase()===oe.toLowerCase()||wn(pe.name)===wn(oe));de&&T(pe=>({...pe,[`${je.name}-${de.name}`]:!0}))}}else if(w.pathname.startsWith("/topic/")){const z=w.pathname.split("/topic/")[1],G=ni(z);G&&(R(oe=>({...oe,[G.category]:!0})),G.subcategory&&T(oe=>({...oe,[`${G.category}-${G.subcategory}`]:!0})))}},[w.pathname,b]);const M=z=>{R(G=>({...G,[z]:!G[z]}))},be=(z,G)=>{const oe=`${z}-${G}`;T(je=>({...je,[oe]:!je[oe]}))},Pe=z=>{M(z),u(`/category/${encodeURIComponent(z.toLowerCase())}`),y()},un=(z,G)=>{be(z,G),u(`/category/${encodeURIComponent(z.toLowerCase())}/${encodeURIComponent(G.toLowerCase())}`),y()},Te=(z,G)=>{G.preventDefault(),G.stopPropagation();const oe=$p(z);_(oe)},Ie=(z,G)=>{G.preventDefault(),G.stopPropagation();const oe=Er(z);D(oe)},Me=(z,G)=>{if(G.preventDefault(),G.stopPropagation(),z.length===0)return;const oe=z.map(pe=>pe.id),je=oe.every(pe=>A.includes(pe));let de=Pn();if(je)de=de.filter(pe=>!oe.includes(pe));else{const pe=oe.filter(En=>!de.includes(En));de=[...de,...pe]}localStorage.setItem("knowledge_pulse_completed",JSON.stringify(de)),window.dispatchEvent(new Event("knowledge_pulse_storage_update")),_(de)},Ye=z=>w.pathname===`/topic/${z}`;return i.jsxs("aside",{className:`fixed lg:sticky top-16 left-0 z-30 w-72 h-[calc(100vh-4rem)] glass-panel border-r border-slate-800/80 transition-transform duration-300 ease-in-out flex flex-col ${p?"translate-x-0":"-translate-x-full lg:translate-x-0"}`,children:[i.jsx("div",{className:"p-3 border-b border-slate-800/80 bg-slate-900/60",children:i.jsxs("div",{className:"relative",children:[i.jsx(za,{className:"w-4 h-4 text-slate-400 absolute left-3 top-2.5"}),i.jsx("input",{type:"text",value:q,onChange:z=>X(z.target.value),placeholder:"Filter topics...",className:"w-full pl-9 pr-3 py-1.5 bg-slate-950/80 text-xs text-slate-200 placeholder-slate-500 rounded-lg border border-slate-800 focus:outline-none focus:border-indigo-500/50"})]})}),i.jsx("div",{className:"flex-1 overflow-y-auto p-3 space-y-1",children:b.map(z=>{const G=[...z.articles,...z.subcategories.flatMap(f=>f.articles)],oe=G.length>0&&G.every(f=>A.includes(f.id)),je=(()=>{if(w.pathname.startsWith("/category/")){const f=w.pathname.split("/category/")[1].split("/"),N=decodeURIComponent(f[0]||"");return z.name.toLowerCase()===N.toLowerCase()||z.rawFolderName.toLowerCase()===N.toLowerCase()||wn(z.name)===wn(N)||wn(z.rawFolderName)===wn(N)}else if(w.pathname.startsWith("/topic/")){const f=w.pathname.split("/topic/")[1],N=ni(f);return(N==null?void 0:N.category)===z.name}return!1})(),de=U[z.name]||je||q.length>0,pe=ai(z.rawFolderName||z.name),En=z.articles.filter(f=>f.fileNameClean.toLowerCase().includes(q.toLowerCase())||f.title.toLowerCase().includes(q.toLowerCase())),Fn=z.subcategories.map(f=>({...f,articles:f.articles.filter(N=>N.fileNameClean.toLowerCase().includes(q.toLowerCase())||N.title.toLowerCase().includes(q.toLowerCase()))})).filter(f=>f.articles.length>0),Cn=En.length>0||Fn.length>0;return q&&!Cn?null:i.jsxs("div",{className:"rounded-xl overflow-hidden bg-slate-950/40 border border-slate-800/40 mb-1",children:[i.jsxs("div",{className:`w-full flex items-center justify-between p-2.5 transition-colors text-left group rounded-t-xl ${je?"bg-indigo-600/20 border-l-4 border-indigo-500 text-indigo-100 font-semibold":"hover:bg-slate-800/60 text-slate-200"}`,children:[i.jsxs("button",{onClick:()=>Pe(z.name),className:"flex items-center gap-2 font-medium text-xs sm:text-sm truncate flex-1 hover:text-indigo-300 transition-colors",children:[i.jsx("div",{className:`p-1 rounded-md border shrink-0 transition-colors ${je?"bg-indigo-600 border-indigo-400 text-white":"bg-slate-900 border-slate-700/60 text-indigo-400 group-hover:border-indigo-500/50"}`,children:i.jsx(Zt,{name:pe,size:15})}),i.jsx("span",{className:"truncate",children:z.rawFolderName})]}),i.jsxs("div",{className:"flex items-center gap-1 shrink-0 ml-1",children:[i.jsx("button",{onClick:f=>Me(G,f),className:"p-1 rounded-md hover:bg-slate-800/80 transition-colors",title:oe?"Mark folder as uncompleted":"Mark folder as completed",children:i.jsx(Nn,{className:`w-4 h-4 transition-all ${oe?"text-emerald-400 fill-emerald-500/20":"text-slate-600 hover:text-slate-300"}`})}),i.jsx("button",{onClick:f=>{f.stopPropagation(),M(z.name)},className:"p-1 text-slate-400 hover:text-slate-200 rounded-md hover:bg-slate-800/80 transition-colors",title:"Toggle expand/collapse",children:de?i.jsx(zp,{className:"w-4 h-4 shrink-0"}):i.jsx(Ke,{className:"w-4 h-4 shrink-0"})})]})]}),i.jsx(Dr,{initial:!1,children:de&&i.jsxs(js.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.2},className:"overflow-hidden bg-slate-950/80 border-t border-slate-800/60 pl-3 pr-1 py-1 space-y-0.5",children:[En.map(f=>{const N=Ye(f.id),H=A.includes(f.id),ee=j.includes(f.id);return i.jsxs("div",{className:`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all group/item ${N?"bg-indigo-600/40 text-white font-bold border border-indigo-400/60 shadow-lg shadow-indigo-500/20":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`,children:[i.jsxs(ge,{to:`/topic/${f.id}`,onClick:y,className:"truncate flex-1 pr-1.5 hover:underline flex items-center gap-1.5",children:[i.jsxs("span",{className:"font-mono text-[10px] text-slate-500 font-semibold shrink-0",children:["#",f.orderNumber]}),i.jsx("span",{className:"truncate",children:f.fileNameClean})]}),i.jsxs("div",{className:"flex items-center gap-1 shrink-0 ml-1",children:[i.jsx("button",{onClick:ne=>Ie(f.id,ne),className:"p-0.5 rounded hover:bg-slate-700/50 transition-colors shrink-0",title:ee?"Remove bookmark":"Bookmark topic",children:i.jsx(Ms,{className:`w-3.5 h-3.5 transition-all ${ee?"text-purple-400 fill-purple-400/20":"text-slate-600 hover:text-purple-300"}`})}),i.jsx("button",{onClick:ne=>Te(f.id,ne),className:"p-0.5 rounded hover:bg-slate-700/50 transition-colors shrink-0",title:H?"Mark as uncompleted":"Mark as completed",children:i.jsx(Nn,{className:`w-3.5 h-3.5 transition-all ${H?"text-emerald-400 fill-emerald-500/20":"text-slate-600 hover:text-slate-300"}`})})]})]},f.id)}),Fn.map(f=>{const N=`${z.name}-${f.name}`,H=f.articles.length>0&&f.articles.every(Y=>A.includes(Y.id)),ee=(()=>{if(w.pathname.startsWith("/category/")){const Y=w.pathname.split("/category/")[1].split("/"),K=Y[1]?decodeURIComponent(Y[1]):void 0;if(K)return f.name.toLowerCase()===K.toLowerCase()||wn(f.name)===wn(K)}else if(w.pathname.startsWith("/topic/")){const Y=w.pathname.split("/topic/")[1],K=ni(Y);return(K==null?void 0:K.category)===z.name&&(K==null?void 0:K.subcategory)===f.name}return!1})(),ne=!!E[N]||ee||q.length>0,ze=ai(f.name);return i.jsxs("div",{className:"mt-1 pl-1 border-l border-slate-800/80 space-y-0.5",children:[i.jsxs("div",{className:`w-full flex items-center justify-between px-2 py-1 text-xs font-medium rounded-md transition-colors text-left ${ee?"bg-cyan-950/80 text-cyan-200 font-semibold border-l-2 border-cyan-400":"text-slate-300 hover:text-white hover:bg-slate-900/60"}`,children:[i.jsxs("button",{onClick:()=>un(z.name,f.name),className:"flex items-center gap-1.5 truncate flex-1 hover:text-cyan-300 transition-colors",children:[i.jsx(Zt,{name:ze,size:13,className:ee?"text-cyan-300":"text-cyan-400 shrink-0"}),i.jsx("span",{className:"truncate",children:f.name})]}),i.jsxs("div",{className:"flex items-center gap-1 shrink-0 ml-1",children:[i.jsx("button",{onClick:Y=>Me(f.articles,Y),className:"p-0.5 rounded hover:bg-slate-800/80 transition-colors",title:H?"Mark subfolder as uncompleted":"Mark subfolder as completed",children:i.jsx(Nn,{className:`w-3.5 h-3.5 transition-all ${H?"text-emerald-400 fill-emerald-500/20":"text-slate-600 hover:text-slate-300"}`})}),i.jsx("button",{onClick:Y=>{Y.stopPropagation(),be(z.name,f.name)},className:"p-0.5 text-slate-500 hover:text-slate-300 rounded",title:"Toggle expand/collapse",children:ne?i.jsx(zp,{className:"w-3.5 h-3.5 shrink-0"}):i.jsx(Ke,{className:"w-3.5 h-3.5 shrink-0"})})]})]}),i.jsx(Dr,{initial:!1,children:ne&&i.jsx(js.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.15},className:"overflow-hidden space-y-0.5 pl-2",children:f.articles.map(Y=>{const K=Ye(Y.id),ke=A.includes(Y.id),Fe=j.includes(Y.id);return i.jsxs("div",{className:`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all group/subitem ${K?"bg-indigo-600/40 text-white font-bold border border-indigo-400/60 shadow-lg shadow-indigo-500/20":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`,children:[i.jsxs(ge,{to:`/topic/${Y.id}`,onClick:y,className:"truncate flex-1 pr-1.5 hover:underline flex items-center gap-1.5",children:[i.jsxs("span",{className:"font-mono text-[10px] text-slate-500 font-semibold shrink-0",children:["#",Y.orderNumber]}),i.jsx("span",{className:"truncate",children:Y.fileNameClean})]}),i.jsxs("div",{className:"flex items-center gap-1 shrink-0 ml-1",children:[i.jsx("button",{onClick:dn=>Ie(Y.id,dn),className:"p-0.5 rounded hover:bg-slate-700/50 transition-colors shrink-0",title:Fe?"Remove bookmark":"Bookmark topic",children:i.jsx(Ms,{className:`w-3.5 h-3.5 transition-all ${Fe?"text-purple-400 fill-purple-400/20":"text-slate-600 hover:text-purple-300"}`})}),i.jsx("button",{onClick:dn=>Te(Y.id,dn),className:"p-0.5 rounded hover:bg-slate-700/50 transition-colors shrink-0",title:ke?"Mark as uncompleted":"Mark as completed",children:i.jsx(Nn,{className:`w-3.5 h-3.5 transition-all ${ke?"text-emerald-400 fill-emerald-500/20":"text-slate-600 hover:text-slate-300"}`})})]})]},Y.id)})})})]},f.name)})]})})]},z.name)})})]})},_b=({isOpen:p,onClose:y})=>{const[w,u]=Z.useState(""),[b,A]=Z.useState([]),[_,j]=Z.useState(0),D=Z.useRef(null),U=At();Z.useEffect(()=>{p?setTimeout(()=>{var T;return(T=D.current)==null?void 0:T.focus()},50):(u(""),A([]))},[p]),Z.useEffect(()=>{if(w.trim()){const T=wb(w);A(T.slice(0,8)),j(0)}else A([])},[w]);const R=T=>{T.key==="ArrowDown"?(T.preventDefault(),j(q=>q<b.length-1?q+1:0)):T.key==="ArrowUp"?(T.preventDefault(),j(q=>q>0?q-1:b.length-1)):T.key==="Enter"&&b[_]?(T.preventDefault(),E(b[_].article.id)):T.key==="Escape"&&y()},E=T=>{y(),U(`/topic/${T}`)};return p?i.jsx(Dr,{children:i.jsx("div",{className:"fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-md",children:i.jsxs(js.div,{initial:{opacity:0,scale:.95,y:-10},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:-10},transition:{duration:.15},className:"w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]",onKeyDown:R,children:[i.jsxs("div",{className:"relative flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-900/90",children:[i.jsx(za,{className:"w-5 h-5 text-indigo-400 mr-3 shrink-0"}),i.jsx("input",{ref:D,type:"text",value:w,onChange:T=>u(T.target.value),placeholder:"Search all 88 topics, tools, concepts...",className:"w-full bg-transparent text-slate-100 placeholder-slate-400 text-base focus:outline-none"}),w&&i.jsx("button",{onClick:()=>u(""),className:"p-1 hover:bg-slate-800 rounded-md text-slate-400 hover:text-slate-200 transition-colors mr-1",children:i.jsx(Gp,{className:"w-4 h-4"})}),i.jsx("kbd",{className:"hidden sm:inline-block px-2 py-0.5 text-xs text-slate-400 bg-slate-800 border border-slate-700 rounded-md font-mono",children:"ESC"})]}),i.jsx("div",{className:"overflow-y-auto p-2 divide-y divide-slate-800/50",children:b.length>0?b.map((T,q)=>{const X=q===_;return i.jsxs("div",{onClick:()=>E(T.article.id),onMouseEnter:()=>j(q),className:`p-3.5 rounded-xl cursor-pointer transition-all duration-150 flex flex-col gap-1.5 ${X?"bg-indigo-600/20 border border-indigo-500/40 text-slate-100":"hover:bg-slate-800/60 text-slate-300 border border-transparent"}`,children:[i.jsxs("div",{className:"flex items-center justify-between gap-2",children:[i.jsxs("div",{className:"flex items-center gap-2 font-medium text-slate-100",children:[i.jsx(jr,{className:"w-4 h-4 text-indigo-400 shrink-0"}),i.jsx("span",{children:T.article.title})]}),i.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[i.jsxs("span",{className:"px-2.5 py-0.5 text-xs rounded-full bg-indigo-950/80 text-indigo-300 border border-indigo-800/50 font-medium",children:[T.article.category," ",T.article.subcategory?`› ${T.article.subcategory}`:""]}),i.jsx(Ke,{className:"w-4 h-4 text-slate-500"})]})]}),T.snippetMatch&&i.jsxs("p",{className:"text-xs text-slate-400 line-clamp-2 pl-6 italic",children:['"...',T.snippetMatch,'..."']})]},T.article.id)}):w.trim()?i.jsxs("div",{className:"py-12 text-center text-slate-400",children:[i.jsx(St,{className:"w-10 h-10 mx-auto text-slate-600 mb-3 stroke-[1.5]"}),i.jsxs("p",{className:"text-sm",children:['No topics matching "',i.jsx("span",{className:"text-indigo-400 font-medium",children:w}),'"']}),i.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Try searching for concepts like Docker, React, TCP, SQL, or Azure"})]}):i.jsxs("div",{className:"py-8 px-4 text-center text-slate-400",children:[i.jsx("p",{className:"text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3",children:"Suggested Topics"}),i.jsx("div",{className:"flex flex-wrap justify-center gap-2",children:["Docker","Kubernetes","React","TypeScript","REST APIs","PostgreSQL","AWS EC2","System Design"].map(T=>i.jsx("button",{onClick:()=>u(T),className:"px-3 py-1.5 text-xs rounded-lg bg-slate-800/80 hover:bg-indigo-900/40 text-slate-300 hover:text-indigo-300 border border-slate-700/60 transition-colors",children:T},T))})]})}),i.jsxs("div",{className:"px-4 py-2.5 bg-slate-950/60 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsxs("span",{className:"flex items-center gap-1",children:[i.jsx("kbd",{className:"px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded",children:"↑"}),i.jsx("kbd",{className:"px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded",children:"↓"})," to navigate"]}),i.jsxs("span",{className:"flex items-center gap-1",children:[i.jsx("kbd",{className:"px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded",children:"↵"})," to select"]})]}),i.jsx("span",{children:"88 Total Knowledge Base Docs"})]})]})})}):null},Nb=({onOpenSearch:p})=>{At();const y=Os(),w=_t(),u=Pn(),b=nm(),A=w.length,_=w.reduce((R,E)=>R+E.readTimeMinutes,0),j=Math.round(u.length/A*100)||0,D=b.map(R=>w.find(E=>E.id===R)).filter(Boolean),U=["01-devops-05-kubernetes","06-frontend-05-react","05-ai-01-llm","10-system-design-06-microservices","07-backend-04-rest-apis","08-database-03-postgresql"].map(R=>w.find(E=>E.id===R)).filter(Boolean);return i.jsxs("div",{className:"space-y-10 pb-12",children:[i.jsxs("section",{className:"relative overflow-hidden rounded-3xl glass-panel border border-slate-800 p-8 sm:p-12 text-center bg-gradient-to-b from-indigo-950/40 via-slate-900/60 to-slate-950",children:[i.jsx("div",{className:"absolute -top-24 -left-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),i.jsx("div",{className:"absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"}),i.jsxs("div",{className:"relative max-w-3xl mx-auto space-y-6",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 text-xs font-semibold",children:[i.jsx(ti,{className:"w-3.5 h-3.5 text-indigo-400"}),i.jsx("span",{children:"Interactive Learning Vault & Developer Knowledge Base"})]}),i.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight",children:["Master Technical Skills & ",i.jsx("br",{className:"hidden sm:inline"}),i.jsx("span",{className:"bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent",children:"System Architecture"})]}),i.jsx("p",{className:"text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal",children:"Explore 88 parsed markdown guides across DevOps, Cloud, AI, Security, System Design, Frontend, Backend, Databases, and Languages."}),i.jsxs("div",{className:"pt-2 flex flex-col sm:flex-row items-center justify-center gap-3",children:[i.jsxs("button",{onClick:p,className:"w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold rounded-2xl shadow-xl shadow-indigo-600/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5",children:[i.jsx(za,{className:"w-4 h-4"}),i.jsx("span",{children:"Search All 88 Guides"}),i.jsx("kbd",{className:"hidden sm:inline-block ml-2 px-2 py-0.5 text-xs text-indigo-200 bg-indigo-950/80 border border-indigo-800 rounded font-mono",children:"Ctrl K"})]}),i.jsxs(ge,{to:"/graph",className:"w-full sm:w-auto px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold rounded-2xl border border-slate-700/80 flex items-center justify-center gap-2 transition-colors",children:[i.jsx(Vp,{className:"w-4 h-4 text-cyan-400"}),i.jsx("span",{children:"Explore Mind Map"})]})]})]})]}),i.jsxs("section",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[i.jsxs("div",{className:"glass-panel p-5 rounded-2xl border border-slate-800 flex items-center gap-4",children:[i.jsx("div",{className:"w-12 h-12 rounded-xl bg-indigo-950/80 border border-indigo-800/60 flex items-center justify-center text-indigo-400",children:i.jsx(St,{className:"w-6 h-6"})}),i.jsxs("div",{children:[i.jsx("div",{className:"text-2xl font-extrabold text-white",children:A}),i.jsx("div",{className:"text-xs text-slate-400 font-medium",children:"Total Docs"})]})]}),i.jsxs("div",{className:"glass-panel p-5 rounded-2xl border border-slate-800 flex items-center gap-4",children:[i.jsx("div",{className:"w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400",children:i.jsx(Mh,{className:"w-6 h-6"})}),i.jsxs("div",{children:[i.jsx("div",{className:"text-2xl font-extrabold text-white",children:y.length}),i.jsx("div",{className:"text-xs text-slate-400 font-medium",children:"Learning Domains"})]})]}),i.jsxs("div",{className:"glass-panel p-5 rounded-2xl border border-slate-800 flex items-center gap-4",children:[i.jsx("div",{className:"w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400",children:i.jsx(Nn,{className:"w-6 h-6"})}),i.jsxs("div",{children:[i.jsxs("div",{className:"text-2xl font-extrabold text-white",children:[j,"%"]}),i.jsx("div",{className:"text-xs text-slate-400 font-medium",children:"Read Completion"})]})]}),i.jsxs("div",{className:"glass-panel p-5 rounded-2xl border border-slate-800 flex items-center gap-4",children:[i.jsx("div",{className:"w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-800/60 flex items-center justify-center text-purple-400",children:i.jsx(Es,{className:"w-6 h-6"})}),i.jsxs("div",{children:[i.jsxs("div",{className:"text-2xl font-extrabold text-white",children:["~",Math.ceil(_/60)," hrs"]}),i.jsx("div",{className:"text-xs text-slate-400 font-medium",children:"Total Content Time"})]})]})]}),D.length>0&&i.jsxs("section",{className:"space-y-4",children:[i.jsx("div",{className:"flex items-center justify-between",children:i.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[i.jsx(Es,{className:"w-5 h-5 text-indigo-400"}),i.jsx("span",{children:"Jump Back In"})]})}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:D.slice(0,3).map(R=>R&&i.jsxs(ge,{to:`/topic/${R.id}`,className:"glass-panel glass-panel-hover p-4 rounded-2xl border border-slate-800 flex flex-col justify-between group",children:[i.jsxs("div",{children:[i.jsx("span",{className:"px-2.5 py-0.5 text-[10px] font-semibold bg-indigo-950 text-indigo-300 rounded-full border border-indigo-800",children:R.category}),i.jsx("h3",{className:"text-base font-bold text-slate-100 mt-2 group-hover:text-indigo-300 transition-colors",children:R.title}),i.jsx("p",{className:"text-xs text-slate-400 mt-1 line-clamp-2",children:R.snippet})]}),i.jsxs("div",{className:"mt-4 flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-800/60",children:[i.jsxs("span",{children:[R.readTimeMinutes," min read"]}),i.jsx(Mr,{className:"w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform"})]})]},R.id))})]}),i.jsxs("section",{className:"space-y-4",children:[i.jsx("div",{className:"flex items-center justify-between",children:i.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[i.jsx(ti,{className:"w-5 h-5 text-amber-400"}),i.jsx("span",{children:"Essential Core Topics"})]})}),i.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3",children:U.map(R=>R&&i.jsxs(ge,{to:`/topic/${R.id}`,className:"p-4 rounded-2xl glass-panel glass-panel-hover border border-slate-800 text-center flex flex-col items-center justify-between group",children:[i.jsx("div",{className:"w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-indigo-400 mb-2 group-hover:scale-110 transition-transform",children:i.jsx(St,{className:"w-5 h-5"})}),i.jsx("span",{className:"text-xs font-bold text-slate-200 group-hover:text-indigo-300 transition-colors line-clamp-1",children:R.title}),i.jsx("span",{className:"text-[10px] text-slate-500 mt-1 uppercase font-semibold",children:R.category})]},R.id))})]}),i.jsxs("section",{className:"space-y-6",children:[i.jsx("div",{className:"flex items-center justify-between",children:i.jsxs("div",{children:[i.jsx("h2",{className:"text-2xl font-extrabold text-white tracking-tight",children:"Explore All 13 Learning Domains"}),i.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Select a domain to view detailed notes, architecture guides, and technical concepts."})]})}),i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",children:y.map((R,E)=>{const T=[...R.articles,...R.subcategories.flatMap(M=>M.articles)],q=T.filter(M=>u.includes(M.id)).length,X=Math.round(q/T.length*100)||0;return i.jsx(js.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.2,delay:E*.03},children:i.jsxs(ge,{to:`/category/${R.name.toLowerCase()}`,className:"glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 flex flex-col justify-between h-full group block relative overflow-hidden",children:[i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("div",{className:"w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform shadow-inner",children:i.jsx(Zt,{name:R.iconName,size:24})}),i.jsxs("span",{className:"px-3 py-1 text-xs font-semibold rounded-full bg-slate-900 text-slate-300 border border-slate-800",children:[T.length," Docs"]})]}),i.jsxs("div",{children:[i.jsxs("h3",{className:"text-xl font-bold text-white group-hover:text-indigo-300 transition-colors flex items-center gap-2",children:[i.jsx("span",{children:R.name}),i.jsx(Mr,{className:"w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-indigo-400"})]}),i.jsx("p",{className:"text-xs text-slate-400 mt-2 leading-relaxed line-clamp-2",children:R.description})]}),R.subcategories.length>0&&i.jsx("div",{className:"flex flex-wrap gap-1.5 pt-1",children:R.subcategories.map(M=>i.jsx("span",{className:"px-2 py-0.5 text-[10px] font-medium rounded-md bg-slate-950 text-cyan-400 border border-slate-800",children:M.name},M.name))})]}),i.jsxs("div",{className:"mt-6 pt-4 border-t border-slate-800/80 space-y-2",children:[i.jsxs("div",{className:"flex items-center justify-between text-xs font-medium text-slate-400",children:[i.jsx("span",{children:"Progress"}),i.jsxs("span",{className:"text-slate-200",children:[q,"/",T.length," (",X,"%)"]})]}),i.jsx("div",{className:"w-full h-1.5 bg-slate-900 rounded-full overflow-hidden",children:i.jsx("div",{className:"h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-300",style:{width:`${X}%`}})})]})]})},R.name)})})]})]})},Tb=({article:p,onStatusChange:y})=>{const[w,u]=Z.useState(Xt()),[b,A]=Z.useState(Pn()),[_,j]=Z.useState(!1),D=w.includes(p.id),U=b.includes(p.id),R=()=>{const M=Er(p.id);u(M),y&&y()},E=()=>{const M=$p(p.id);A(M),y&&y()},T=()=>{navigator.clipboard.writeText(window.location.href),j(!0),setTimeout(()=>j(!1),2e3)},q=`/category/${encodeURIComponent(p.category.toLowerCase())}`,X=p.subcategory?`/category/${encodeURIComponent(p.category.toLowerCase())}/${encodeURIComponent(p.subcategory.toLowerCase())}`:void 0;return i.jsxs("div",{className:"mb-8 border-b border-slate-800 pb-6",children:[i.jsxs("nav",{className:"flex items-center gap-1.5 text-xs text-slate-400 mb-4 flex-wrap",children:[i.jsx(ge,{to:"/",className:"hover:text-indigo-400 hover:underline transition-colors font-medium",children:"Learning Hub"}),i.jsx(Ke,{className:"w-3.5 h-3.5 text-slate-600"}),i.jsx(ge,{to:q,className:"text-slate-300 hover:text-indigo-300 hover:underline font-semibold transition-colors",children:p.rawFolderName||p.category}),p.subcategory&&X&&i.jsxs(i.Fragment,{children:[i.jsx(Ke,{className:"w-3.5 h-3.5 text-slate-600"}),i.jsx(ge,{to:X,className:"text-cyan-400 hover:text-cyan-300 hover:underline font-semibold transition-colors",children:p.subcategory})]}),i.jsx(Ke,{className:"w-3.5 h-3.5 text-slate-600"}),i.jsx(ge,{to:`/topic/${p.id}`,className:"text-slate-400 hover:text-slate-200 hover:underline transition-colors truncate max-w-[220px]",children:p.fileNameClean||p.title})]}),i.jsxs("div",{className:"flex flex-col md:flex-row md:items-start justify-between gap-4",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center gap-2 mb-2 flex-wrap",children:[i.jsx(ge,{to:q,className:"px-3 py-1 text-xs font-semibold rounded-full bg-indigo-950/80 hover:bg-indigo-900 text-indigo-300 hover:text-indigo-200 border border-indigo-800/60 uppercase tracking-wider transition-colors",children:p.rawFolderName||p.category}),p.subcategory&&X&&i.jsx(ge,{to:X,className:"px-3 py-1 text-xs font-semibold rounded-full bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 hover:text-cyan-200 border border-cyan-800/60 uppercase tracking-wider transition-colors",children:p.subcategory}),i.jsxs("span",{className:"px-2.5 py-1 text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 rounded-full",children:["Doc #",p.orderNumber]})]}),i.jsx("h1",{className:"text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-tight mb-3",children:p.title}),i.jsxs("div",{className:"flex items-center gap-4 text-xs text-slate-400 flex-wrap",children:[i.jsxs("div",{className:"flex items-center gap-1.5",children:[i.jsx(Es,{className:"w-4 h-4 text-indigo-400"}),i.jsxs("span",{children:[p.readTimeMinutes," min read"]})]}),i.jsxs("div",{className:"flex items-center gap-1.5",children:[i.jsx(jr,{className:"w-4 h-4 text-blue-400"}),i.jsxs("span",{children:[p.wordCount," words"]})]})]})]}),i.jsxs("div",{className:"flex items-center gap-2 shrink-0 pt-2 md:pt-0",children:[i.jsxs("button",{onClick:E,className:`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${U?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-lg shadow-emerald-500/10":"bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700/80"}`,children:[i.jsx(Nn,{className:`w-4 h-4 ${U?"text-emerald-400":"text-slate-400"}`}),i.jsx("span",{children:U?"Completed":"Mark Done"})]}),i.jsx("button",{onClick:R,className:`p-2 rounded-xl text-xs font-semibold transition-all ${D?"bg-purple-500/20 text-purple-300 border border-purple-500/40":"bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-700/80"}`,title:D?"Remove bookmark":"Bookmark topic",children:i.jsx(Ms,{className:`w-4 h-4 ${D?"text-purple-400 fill-purple-400/20":"text-slate-400"}`})}),i.jsx("button",{onClick:T,className:"p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-700/80 transition-colors",title:"Copy topic link",children:i.jsx(jh,{className:`w-4 h-4 ${_?"text-emerald-400":"text-slate-400"}`})})]})]})]})},Db=({content:p})=>i.jsx("div",{className:"markdown-body",children:i.jsx(Xh,{remarkPlugins:[Jh],rehypePlugins:[Zh,Wh],components:{code({node:y,className:w,children:u,...b}){const A=/language-(\w+)/.exec(w||""),_=A?A[1]:"",j=String(u).replace(/\n$/,"");return A?i.jsx(Mb,{language:_,code:j}):i.jsx("code",{className:w,...b,children:u})}},children:p})}),Mb=({language:p,code:y})=>{const[w,u]=Z.useState(!1),b=()=>{navigator.clipboard.writeText(y),u(!0),setTimeout(()=>u(!1),2e3)};return i.jsxs("div",{className:"relative group my-6 rounded-xl overflow-hidden border border-slate-800 bg-[#0d1117] shadow-xl",children:[i.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-slate-900/90 border-b border-slate-800 text-xs font-mono text-slate-400",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(Eh,{className:"w-3.5 h-3.5 text-indigo-400"}),i.jsx("span",{className:"uppercase font-semibold tracking-wider text-slate-300",children:p||"code"})]}),i.jsx("button",{onClick:b,className:"flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-indigo-600/30 text-slate-300 hover:text-indigo-200 border border-slate-700/60 transition-colors",title:"Copy snippet",children:w?i.jsxs(i.Fragment,{children:[i.jsx(qp,{className:"w-3.5 h-3.5 text-emerald-400"}),i.jsx("span",{className:"text-emerald-400 font-medium",children:"Copied!"})]}):i.jsxs(i.Fragment,{children:[i.jsx(Oh,{className:"w-3.5 h-3.5 text-slate-400"}),i.jsx("span",{children:"Copy"})]})})]}),i.jsx("pre",{className:"p-4 overflow-x-auto text-sm leading-relaxed",children:i.jsx("code",{className:`language-${p}`,children:y})})]})},jb=({headings:p})=>{const[y,w]=Z.useState("");if(Z.useEffect(()=>{const b=()=>{const A=p.map(j=>document.getElementById(j.id)).filter(Boolean),_=window.scrollY+100;for(let j=A.length-1;j>=0;j--)if(A[j].offsetTop<=_){w(p[j].id);break}};return window.addEventListener("scroll",b,{passive:!0}),b(),()=>window.removeEventListener("scroll",b)},[p]),p.length===0)return null;const u=b=>{const A=document.getElementById(b);if(A){const _=A.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:_,behavior:"smooth"}),w(b)}};return i.jsxs("div",{className:"glass-panel rounded-2xl p-4 border border-slate-800/80 sticky top-24",children:[i.jsxs("div",{className:"flex items-center gap-2 pb-3 mb-3 border-b border-slate-800 text-xs font-semibold uppercase tracking-wider text-slate-400",children:[i.jsx(zh,{className:"w-4 h-4 text-indigo-400"}),i.jsx("span",{children:"On This Page"})]}),i.jsx("nav",{className:"space-y-1 text-xs",children:p.map(b=>{const A=y===b.id;return i.jsxs("button",{onClick:()=>u(b.id),className:`w-full text-left flex items-center gap-1.5 py-1.5 px-2 rounded-lg transition-all ${b.level===3?"pl-5":""} ${A?"bg-indigo-600/20 text-indigo-300 font-medium border-l-2 border-indigo-500":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`,children:[b.level===2&&i.jsx(Ke,{className:`w-3.5 h-3.5 ${A?"text-indigo-400":"text-slate-600"}`}),i.jsx("span",{className:"truncate",children:b.text})]},b.id)})})]})},Eb=({articleId:p})=>{const[y,w]=Z.useState(""),[u,b]=Z.useState(!1);Z.useEffect(()=>{const _=em();w(_[p]||"")},[p]);const A=()=>{ag(p,y),b(!0),setTimeout(()=>b(!1),2e3)};return i.jsxs("div",{className:"mt-12 glass-panel rounded-2xl p-5 border border-slate-800",children:[i.jsxs("div",{className:"flex items-center justify-between mb-3",children:[i.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold text-slate-200",children:[i.jsx(Rh,{className:"w-4 h-4 text-amber-400"}),i.jsx("span",{children:"My Personal Notes & Snippets"})]}),i.jsx("button",{onClick:A,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md transition-all",children:u?i.jsxs(i.Fragment,{children:[i.jsx(qp,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:"Saved!"})]}):i.jsxs(i.Fragment,{children:[i.jsx(Lh,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:"Save Note"})]})})]}),i.jsx("textarea",{value:y,onChange:_=>w(_.target.value),placeholder:"Type key takeaways, commands, or personal reminders for this topic...",className:"w-full h-28 bg-slate-950/80 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 resize-none font-mono"})]})},Ob=()=>{const{id:p}=Xp(),y=At(),[w,u]=Z.useState(0),b=p?ni(p):void 0,{prev:A,next:_}=p?Cb(p):{};return Z.useEffect(()=>{p&&(sg(p),window.scrollTo({top:0,behavior:"smooth"}))},[p]),b?i.jsx(js.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.2},className:"pb-16",children:i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-8",children:[i.jsxs("div",{className:"lg:col-span-3 min-w-0",children:[i.jsx(Tb,{article:b,onStatusChange:()=>u(j=>j+1)}),i.jsx("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800/80 shadow-2xl",children:i.jsx(Db,{content:b.rawContent})}),i.jsx(Eb,{articleId:b.id}),i.jsxs("div",{className:"mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-800",children:[A?i.jsxs(ge,{to:`/topic/${A.id}`,className:"glass-panel glass-panel-hover p-4 rounded-2xl border border-slate-800 flex items-center gap-3 group",children:[i.jsx("div",{className:"p-2 rounded-xl bg-slate-900 border border-slate-700/80 text-indigo-400 group-hover:-translate-x-1 transition-transform",children:i.jsx(Bh,{className:"w-5 h-5"})}),i.jsxs("div",{className:"overflow-hidden",children:[i.jsx("div",{className:"text-[11px] text-slate-500 uppercase font-semibold",children:"Previous Topic"}),i.jsx("div",{className:"text-sm font-bold text-slate-200 group-hover:text-indigo-300 transition-colors truncate",children:A.title})]})]}):i.jsx("div",{}),_?i.jsxs(ge,{to:`/topic/${_.id}`,className:"glass-panel glass-panel-hover p-4 rounded-2xl border border-slate-800 flex items-center justify-end text-right gap-3 group sm:col-start-2",children:[i.jsxs("div",{className:"overflow-hidden",children:[i.jsx("div",{className:"text-[11px] text-slate-500 uppercase font-semibold",children:"Next Topic"}),i.jsx("div",{className:"text-sm font-bold text-slate-200 group-hover:text-indigo-300 transition-colors truncate",children:_.title})]}),i.jsx("div",{className:"p-2 rounded-xl bg-slate-900 border border-slate-700/80 text-indigo-400 group-hover:translate-x-1 transition-transform",children:i.jsx(Ke,{className:"w-5 h-5"})})]}):i.jsx("div",{})]})]}),i.jsx("div",{className:"hidden lg:block lg:col-span-1",children:i.jsx(jb,{headings:b.headings})})]})},b.id):i.jsxs("div",{className:"py-20 text-center space-y-4",children:[i.jsx("div",{className:"w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-amber-400",children:i.jsx(Uh,{className:"w-8 h-8"})}),i.jsx("h2",{className:"text-2xl font-bold text-slate-100",children:"Topic Not Found"}),i.jsx("p",{className:"text-slate-400 text-sm max-w-md mx-auto",children:"The requested knowledge document could not be found or has been moved."}),i.jsxs("button",{onClick:()=>y("/"),className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-colors shadow-lg shadow-indigo-600/20",children:[i.jsx(Ra,{className:"w-4 h-4"}),i.jsx("span",{children:"Back to Learning Hub"})]})]})},Ip=()=>{const{name:p,sub:y}=Xp(),w=At(),u=Os(),b=Pn(),[A,_]=Z.useState(""),j=M=>M.toLowerCase().replace(/[^\w]/g,""),D=u.find(M=>{if(!p)return!1;const be=j(p);return M.name.toLowerCase()===p.toLowerCase()||M.rawFolderName.toLowerCase()===p.toLowerCase()||j(M.name)===be||j(M.rawFolderName)===be});if(!D)return i.jsxs("div",{className:"py-20 text-center space-y-4",children:[i.jsx("h2",{className:"text-2xl font-bold text-slate-100",children:"Folder Not Found"}),i.jsxs("button",{onClick:()=>w("/"),className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-medium text-sm",children:[i.jsx(Ra,{className:"w-4 h-4"}),i.jsx("span",{children:"Back to Hub"})]})]});const U=y?D.subcategories.find(M=>M.name.toLowerCase()===y.toLowerCase()||j(M.name)===j(y)):void 0,R=U?U.articles:[...D.articles,...D.subcategories.flatMap(M=>M.articles)],E=R.filter(M=>M.title.toLowerCase().includes(A.toLowerCase())||M.fileNameClean.toLowerCase().includes(A.toLowerCase())||M.snippet.toLowerCase().includes(A.toLowerCase())),T=R.filter(M=>b.includes(M.id)).length,q=R.length>0?Math.round(T/R.length*100):0,X=U?`${D.rawFolderName||D.name} / ${U.name}`:D.rawFolderName||D.name;return i.jsxs("div",{className:"space-y-8 pb-12",children:[i.jsxs("div",{className:"glass-panel p-8 rounded-3xl border border-slate-800 relative overflow-hidden bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-950",children:[i.jsxs("div",{className:"flex items-center gap-2 text-xs text-indigo-400 mb-4 flex-wrap",children:[i.jsxs(ge,{to:"/",className:"hover:underline flex items-center gap-1",children:[i.jsx(Ra,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:"Learning Hub"})]}),U?i.jsxs(i.Fragment,{children:[i.jsx(Ke,{className:"w-3.5 h-3.5 text-slate-600"}),i.jsx(ge,{to:`/category/${encodeURIComponent(D.name.toLowerCase())}`,className:"hover:underline text-slate-300",children:D.rawFolderName||D.name}),i.jsx(Ke,{className:"w-3.5 h-3.5 text-slate-600"}),i.jsx("span",{className:"text-cyan-400 font-semibold",children:U.name})]}):i.jsxs(i.Fragment,{children:[i.jsx(Ke,{className:"w-3.5 h-3.5 text-slate-600"}),i.jsx("span",{className:"text-slate-300 font-semibold",children:D.rawFolderName||D.name})]})]}),i.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6",children:[i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsx("div",{className:"w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-indigo-400 shadow-xl shrink-0",children:i.jsx(Zt,{name:U?ai(U.name):D.iconName,size:32})}),i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[i.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-white tracking-tight",children:X}),i.jsxs("span",{className:"px-3 py-1 text-xs font-semibold rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800",children:[R.length," Docs"]})]}),i.jsx("p",{className:"text-sm text-slate-300 mt-1 max-w-2xl",children:U?`Topics and learning notes inside ${U.name} subfolder.`:D.description})]})]}),i.jsxs("div",{className:"flex items-center gap-3 bg-slate-950/80 px-4 py-3 rounded-2xl border border-slate-800 text-xs text-slate-300 shrink-0",children:[i.jsx(Nn,{className:"w-5 h-5 text-emerald-400 shrink-0"}),i.jsxs("div",{children:[i.jsxs("div",{className:"font-bold text-slate-100",children:[T," of ",R.length," Completed"]}),i.jsxs("div",{className:"text-slate-400 text-[11px]",children:[q,"% Progress"]})]})]})]})]}),U?i.jsxs("div",{className:"space-y-6",children:[i.jsx("div",{className:"flex items-center justify-between gap-4",children:i.jsxs("div",{className:"relative flex-1 max-w-md",children:[i.jsx(za,{className:"w-4 h-4 text-slate-400 absolute left-3 top-3"}),i.jsx("input",{type:"text",value:A,onChange:M=>_(M.target.value),placeholder:`Search topics in ${U.name}...`,className:"w-full pl-9 pr-4 py-2.5 bg-slate-900 text-sm text-slate-100 placeholder-slate-400 rounded-xl border border-slate-700/80 focus:outline-none focus:border-indigo-500"})]})}),i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:E.map(M=>i.jsx(Yp,{article:M,isDone:b.includes(M.id)},M.id))})]}):i.jsxs("div",{className:"space-y-8",children:[D.subcategories.length>0&&i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("h2",{className:"text-xl font-extrabold text-white tracking-tight flex items-center gap-2",children:[i.jsx(Hh,{className:"w-5 h-5 text-cyan-400"}),i.jsxs("span",{children:["Folders in ",D.rawFolderName||D.name]})]}),i.jsxs("span",{className:"text-xs text-slate-400",children:[D.subcategories.length," Subfolders"]})]}),i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",children:D.subcategories.map(M=>{const be=M.articles,Pe=be.filter(Me=>b.includes(Me.id)).length,un=be.length>0?Math.round(Pe/be.length*100):0,Te=ai(M.name),Ie=`/category/${encodeURIComponent(D.name.toLowerCase())}/${encodeURIComponent(M.name.toLowerCase())}`;return i.jsxs(ge,{to:Ie,className:"glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 flex flex-col justify-between group block relative overflow-hidden",children:[i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("div",{className:"w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shadow-inner",children:i.jsx(Zt,{name:Te,size:24})}),i.jsxs("span",{className:"px-3 py-1 text-xs font-semibold rounded-full bg-slate-900 text-slate-300 border border-slate-800",children:[be.length," Topics"]})]}),i.jsx("div",{children:i.jsxs("h3",{className:"text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2",children:[i.jsx("span",{children:M.name}),i.jsx(Mr,{className:"w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-cyan-400"})]})}),i.jsxs("div",{className:"space-y-1.5",children:[i.jsx("div",{className:"text-[11px] font-semibold uppercase tracking-wider text-slate-500",children:"Topics in folder"}),i.jsx("div",{className:"flex flex-wrap gap-1.5",children:be.map(Me=>i.jsx("span",{className:"px-2 py-0.5 text-[10px] font-medium rounded-md bg-slate-950 text-cyan-300/90 border border-slate-800/80",children:Me.fileNameClean||Me.title},Me.id))})]})]}),i.jsxs("div",{className:"mt-6 pt-4 border-t border-slate-800/80 space-y-2",children:[i.jsxs("div",{className:"flex items-center justify-between text-xs font-medium text-slate-400",children:[i.jsx("span",{children:"Completion"}),i.jsxs("span",{className:"text-slate-200 font-bold",children:[Pe,"/",be.length," (",un,"%)"]})]}),i.jsx("div",{className:"w-full h-1.5 bg-slate-900 rounded-full overflow-hidden",children:i.jsx("div",{className:"h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-300",style:{width:`${un}%`}})})]})]},M.name)})})]}),D.articles.length>0&&i.jsxs("div",{className:"space-y-4",children:[i.jsx("div",{className:"flex items-center justify-between",children:i.jsxs("h3",{className:"text-lg font-bold text-indigo-300 border-b border-slate-800/80 pb-2",children:["General Guides (",D.articles.length,")"]})}),i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:D.articles.filter(M=>M.title.toLowerCase().includes(A.toLowerCase())||M.fileNameClean.toLowerCase().includes(A.toLowerCase())).map(M=>i.jsx(Yp,{article:M,isDone:b.includes(M.id)},M.id))})]})]})]})},Yp=({article:p,isDone:y})=>i.jsxs(ge,{to:`/topic/${p.id}`,className:"glass-panel glass-panel-hover p-5 rounded-2xl border border-slate-800 flex flex-col justify-between group",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[i.jsxs("span",{className:"px-2.5 py-0.5 text-[10px] font-semibold bg-slate-900 text-indigo-300 border border-slate-800 rounded-full",children:["Doc #",p.orderNumber]}),y&&i.jsxs("span",{className:"flex items-center gap-1 text-[11px] text-emerald-400 font-medium",children:[i.jsx(Nn,{className:"w-3.5 h-3.5"}),i.jsx("span",{children:"Done"})]})]}),i.jsx("h4",{className:"text-base font-bold text-slate-100 group-hover:text-indigo-300 transition-colors",children:p.fileNameClean||p.title}),i.jsx("p",{className:"text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed",children:p.snippet})]}),i.jsxs("div",{className:"mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsxs("span",{className:"flex items-center gap-1",children:[i.jsx(Es,{className:"w-3.5 h-3.5 text-indigo-400"}),p.readTimeMinutes," min"]}),i.jsxs("span",{className:"flex items-center gap-1",children:[i.jsx(jr,{className:"w-3.5 h-3.5 text-blue-400"}),p.wordCount," words"]})]}),i.jsx(Ke,{className:"w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform group-hover:text-indigo-400"})]})]}),zb=()=>{const p=At(),[y,w]=Z.useState(Xt()),u=_t(),b=y.map(_=>u.find(j=>j.id===_)).filter(Boolean),A=(_,j)=>{j.preventDefault(),j.stopPropagation();const D=Er(_);w(D)};return i.jsxs("div",{className:"space-y-8 pb-12",children:[i.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[i.jsxs("div",{children:[i.jsxs("button",{onClick:()=>p("/"),className:"inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 mb-2 transition-colors",children:[i.jsx(Ra,{className:"w-4 h-4"}),i.jsx("span",{children:"Back to Hub"})]}),i.jsxs("h1",{className:"text-3xl font-extrabold text-white tracking-tight flex items-center gap-2",children:[i.jsx(Ms,{className:"w-7 h-7 text-purple-400 fill-purple-400/20"}),i.jsx("span",{children:"Saved Bookmarks"})]})]}),i.jsxs("span",{className:"px-3.5 py-1.5 text-xs font-semibold rounded-full bg-purple-950 text-purple-300 border border-purple-800",children:[b.length," Saved"]})]}),b.length>0?i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",children:b.map(_=>_&&i.jsxs(ge,{to:`/topic/${_.id}`,className:"glass-panel glass-panel-hover p-5 rounded-2xl border border-slate-800 flex flex-col justify-between group relative",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[i.jsxs("span",{className:"px-2.5 py-0.5 text-[10px] font-semibold bg-indigo-950 text-indigo-300 border border-indigo-800 rounded-full",children:[_.category," ",_.subcategory?`› ${_.subcategory}`:""]}),i.jsx("button",{onClick:j=>A(_.id,j),className:"p-1 text-slate-500 hover:text-red-400 rounded-lg hover:bg-slate-800 transition-colors",title:"Remove from bookmarks",children:i.jsx(Ih,{className:"w-4 h-4"})})]}),i.jsx("h3",{className:"text-base font-bold text-slate-100 group-hover:text-indigo-300 transition-colors mt-1",children:_.title}),i.jsx("p",{className:"text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed",children:_.snippet})]}),i.jsxs("div",{className:"mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400",children:[i.jsxs("span",{className:"flex items-center gap-1",children:[i.jsx(Es,{className:"w-3.5 h-3.5 text-indigo-400"}),_.readTimeMinutes," min read"]}),i.jsx(Ke,{className:"w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform group-hover:text-indigo-400"})]})]},_.id))}):i.jsxs("div",{className:"py-20 text-center glass-panel rounded-3xl border border-slate-800 max-w-lg mx-auto p-8 space-y-4",children:[i.jsx(St,{className:"w-12 h-12 text-slate-600 mx-auto"}),i.jsx("h2",{className:"text-xl font-bold text-slate-200",children:"No Bookmarks Saved Yet"}),i.jsx("p",{className:"text-slate-400 text-xs leading-relaxed",children:"Click the bookmark icon on any topic page to save guides here for quick review."}),i.jsx("button",{onClick:()=>p("/"),className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold",children:i.jsx("span",{children:"Browse Topics"})})]})]})},Rb=()=>{var A;const p=At(),y=Os(),[w,u]=Z.useState(((A=y[0])==null?void 0:A.name)||""),b=y.find(_=>_.name===w)||y[0];return i.jsxs("div",{className:"space-y-8 pb-12",children:[i.jsx("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:i.jsxs("div",{children:[i.jsxs("button",{onClick:()=>p("/"),className:"inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 mb-2 transition-colors",children:[i.jsx(Ra,{className:"w-4 h-4"}),i.jsx("span",{children:"Back to Hub"})]}),i.jsxs("h1",{className:"text-3xl font-extrabold text-white tracking-tight flex items-center gap-2",children:[i.jsx(Kp,{className:"w-7 h-7 text-cyan-400"}),i.jsx("span",{children:"Knowledge Mind Map"})]})]})}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6",children:[i.jsxs("div",{className:"lg:col-span-1 glass-panel p-4 rounded-3xl border border-slate-800 space-y-2 max-h-[70vh] overflow-y-auto",children:[i.jsx("div",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400 px-2 mb-2",children:"Select Domain"}),y.map(_=>{const j=_.name===w,D=_.articles.length+_.subcategories.reduce((U,R)=>U+R.articles.length,0);return i.jsxs("button",{onClick:()=>u(_.name),className:`w-full flex items-center justify-between p-3 rounded-2xl text-left transition-all ${j?"bg-gradient-to-r from-indigo-600/30 to-blue-600/30 text-white border border-indigo-500/50 shadow-lg":"text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-transparent"}`,children:[i.jsxs("div",{className:"flex items-center gap-2.5 font-medium text-sm",children:[i.jsx(Zt,{name:_.iconName,size:18,className:j?"text-cyan-400":"text-indigo-400"}),i.jsx("span",{children:_.name})]}),i.jsx("span",{className:"text-xs font-mono px-2 py-0.5 rounded-full bg-slate-950/80 text-slate-400 border border-slate-800",children:D})]},_.name)})]}),i.jsx("div",{className:"lg:col-span-3 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 relative bg-gradient-to-b from-slate-950/90 to-slate-900 min-h-[500px] flex flex-col justify-between",children:i.jsxs("div",{className:"space-y-6",children:[i.jsxs("div",{className:"flex items-center gap-4 bg-indigo-950/60 border border-indigo-700/60 p-5 rounded-2xl max-w-md shadow-xl",children:[i.jsx("div",{className:"w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg",children:i.jsx(Zt,{name:b.iconName,size:24})}),i.jsxs("div",{children:[i.jsx("span",{className:"text-[10px] uppercase font-bold tracking-widest text-indigo-300",children:"Root Node"}),i.jsx("h2",{className:"text-2xl font-extrabold text-white",children:b.name})]})]}),i.jsx("div",{className:"w-1 h-6 bg-gradient-to-b from-indigo-500 to-cyan-500 ml-10 rounded-full"}),b.subcategories.length>0?i.jsx("div",{className:"space-y-8 pl-4 sm:pl-8 border-l-2 border-slate-800/80",children:b.subcategories.map(_=>i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 text-xs font-bold",children:[i.jsx(Vp,{className:"w-3.5 h-3.5"}),i.jsxs("span",{children:[_.name," Branch"]})]}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",children:_.articles.map(j=>i.jsxs(ge,{to:`/topic/${j.id}`,className:"glass-panel glass-panel-hover p-3.5 rounded-xl border border-slate-800 flex items-center justify-between group",children:[i.jsxs("div",{className:"flex items-center gap-2 overflow-hidden",children:[i.jsx(St,{className:"w-4 h-4 text-indigo-400 shrink-0"}),i.jsx("span",{className:"text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors truncate",children:j.title})]}),i.jsx(Ke,{className:"w-4 h-4 text-slate-600 group-hover:translate-x-1 transition-transform group-hover:text-cyan-400"})]},j.id))})]},_.name))}):i.jsxs("div",{className:"pl-4 sm:pl-8 border-l-2 border-slate-800/80 space-y-3",children:[i.jsxs("div",{className:"text-xs font-bold uppercase tracking-wider text-indigo-400",children:["Topic Nodes (",b.articles.length,")"]}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",children:b.articles.map(_=>i.jsxs(ge,{to:`/topic/${_.id}`,className:"glass-panel glass-panel-hover p-3.5 rounded-xl border border-slate-800 flex items-center justify-between group",children:[i.jsxs("div",{className:"flex items-center gap-2 overflow-hidden",children:[i.jsx(St,{className:"w-4 h-4 text-indigo-400 shrink-0"}),i.jsx("span",{className:"text-xs font-semibold text-slate-200 group-hover:text-indigo-300 transition-colors truncate",children:_.title})]}),i.jsx(Ke,{className:"w-4 h-4 text-slate-600 group-hover:translate-x-1 transition-transform group-hover:text-indigo-400"})]},_.id))})]})]})})]})]})};function Lb(p){const y=_t(),w=[],u=p&&p!=="all"?y.filter(b=>b.category.toLowerCase()===p.toLowerCase()):y;for(const b of u){const A=b.rawContent.split(`
`),_=[];for(const j of A){const D=j.trim();if(D.startsWith("## "))D.replace(/^##\s+/,"");else if(D.startsWith("- ")&&D.length>3){const U=D.replace(/^-\s+/,"");U&&!U.includes("Add your")&&!U.includes("Add useful")&&_.push(U)}}_.length>0?w.push({id:`fc-${b.id}-1`,articleId:b.id,articleTitle:b.title,category:b.category,question:`What are key concepts or points for "${b.title}" in ${b.category}?`,answer:_.slice(0,4).join(`
• `),concepts:_}):w.push({id:`fc-${b.id}-def`,articleId:b.id,articleTitle:b.title,category:b.category,question:`Define and summarize the core purpose of "${b.title}"`,answer:b.snippet||`Overview and learning notes for ${b.title}.`,concepts:[b.title,b.category]})}return w.sort(()=>Math.random()-.5)}const Ub=()=>{const p=At(),y=Os(),[w,u]=Z.useState("all"),[b,A]=Z.useState([]),[_,j]=Z.useState(0),[D,U]=Z.useState(!1),[R,E]=Z.useState({correct:0,review:0});Z.useEffect(()=>{const X=Lb(w);A(X),j(0),U(!1),E({correct:0,review:0})},[w]);const T=b[_],q=X=>{E(M=>({correct:X?M.correct+1:M.correct,review:X?M.review:M.review+1})),U(!1),setTimeout(()=>{_<b.length-1&&j(M=>M+1)},150)};return i.jsxs("div",{className:"space-y-8 pb-12",children:[i.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[i.jsxs("div",{children:[i.jsxs("button",{onClick:()=>p("/"),className:"inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 mb-2 transition-colors",children:[i.jsx(Ra,{className:"w-4 h-4"}),i.jsx("span",{children:"Back to Hub"})]}),i.jsxs("h1",{className:"text-3xl font-extrabold text-white tracking-tight flex items-center gap-2",children:[i.jsx(ti,{className:"w-7 h-7 text-amber-400"}),i.jsx("span",{children:"Knowledge Flashcards"})]})]}),i.jsxs("select",{value:w,onChange:X=>u(X.target.value),className:"bg-slate-900 text-xs font-semibold text-slate-200 border border-slate-700/80 px-3 py-2 rounded-xl focus:outline-none focus:border-indigo-500",children:[i.jsx("option",{value:"all",children:"All Domains (88 Topics)"}),y.map(X=>i.jsx("option",{value:X.name,children:X.name},X.name))]})]}),i.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400 max-w-xl mx-auto px-4",children:[i.jsxs("span",{className:"font-mono",children:["Card ",b.length>0?_+1:0," of ",b.length]}),i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsxs("span",{className:"text-emerald-400 font-semibold flex items-center gap-1",children:[i.jsx(Nn,{className:"w-4 h-4"})," ",R.correct," Known"]}),i.jsxs("span",{className:"text-amber-400 font-semibold flex items-center gap-1",children:[i.jsx(Rp,{className:"w-4 h-4"})," ",R.review," Review"]})]})]}),T?i.jsxs("div",{className:"max-w-xl mx-auto space-y-6",children:[i.jsxs("div",{onClick:()=>U(!D),className:"cursor-pointer perspective-1000 min-h-[320px] glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col justify-between text-center relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl hover:border-indigo-500/40 transition-colors group",children:[i.jsxs("div",{className:"flex items-center justify-between text-xs",children:[i.jsx("span",{className:"px-3 py-1 font-semibold rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800",children:T.category}),i.jsx("span",{className:"text-slate-500 text-[11px]",children:"Click card to flip"})]}),i.jsx("div",{className:"my-auto py-6",children:D?i.jsxs("div",{className:"space-y-4 animate-fade-in",children:[i.jsx("span",{className:"text-xs uppercase tracking-widest font-bold text-emerald-400",children:"Answer / Summary"}),i.jsx("p",{className:"text-base text-slate-200 leading-relaxed font-normal whitespace-pre-line max-h-[220px] overflow-y-auto px-2",children:T.answer})]}):i.jsxs("div",{className:"space-y-4",children:[i.jsx("span",{className:"text-xs uppercase tracking-widest font-bold text-indigo-400",children:"Question"}),i.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-slate-100 leading-snug",children:T.question})]})}),i.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/60",children:[i.jsx("span",{className:"font-semibold text-slate-400",children:T.articleTitle}),i.jsx("span",{className:"text-indigo-400 group-hover:underline",children:D?"Show Question":"Reveal Answer"})]})]}),i.jsxs("div",{className:"flex items-center justify-center gap-4",children:[i.jsxs("button",{onClick:()=>q(!1),className:"flex-1 py-3 px-4 rounded-2xl bg-amber-950/80 hover:bg-amber-900/80 text-amber-300 border border-amber-800/60 font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-lg",children:[i.jsx(Rp,{className:"w-4 h-4"}),i.jsx("span",{children:"Needs Review"})]}),i.jsxs("button",{onClick:()=>q(!0),className:"flex-1 py-3 px-4 rounded-2xl bg-emerald-950/80 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-800/60 font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-lg",children:[i.jsx(Nn,{className:"w-4 h-4"}),i.jsx("span",{children:"I Know This"})]})]})]}):i.jsxs("div",{className:"py-20 text-center glass-panel rounded-3xl border border-slate-800 max-w-md mx-auto p-8 space-y-4",children:[i.jsx(Yh,{className:"w-12 h-12 text-indigo-400 mx-auto"}),i.jsx("h2",{className:"text-xl font-bold text-slate-200",children:"Flashcards Completed!"}),i.jsxs("p",{className:"text-slate-400 text-xs",children:["Great job testing your knowledge on ",w,"."]}),i.jsx("button",{onClick:()=>{j(0),E({correct:0,review:0})},className:"px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold",children:"Restart Flashcard Deck"})]})]})};function Bb(){const[p,y]=Z.useState(!1),[w,u]=Z.useState(!1),[b,A]=Z.useState(lg());return Z.useEffect(()=>{ig(b)},[b]),Z.useEffect(()=>{const _=j=>{(j.metaKey||j.ctrlKey)&&j.key==="k"&&(j.preventDefault(),y(!0))};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[]),i.jsx(qh,{children:i.jsxs("div",{className:"min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-300 font-sans",children:[i.jsx(Sb,{onOpenSearch:()=>y(!0),toggleSidebar:()=>u(!w),isSidebarOpen:w,theme:b,setTheme:A}),i.jsx(_b,{isOpen:p,onClose:()=>y(!1)}),i.jsxs("div",{className:"flex-1 flex max-w-[1600px] w-full mx-auto",children:[i.jsx(Ab,{isOpen:w,onCloseMobile:()=>u(!1)}),i.jsx("main",{className:"flex-1 p-4 sm:p-6 lg:p-8 min-w-0",children:i.jsxs(Qh,{children:[i.jsx(Qt,{path:"/",element:i.jsx(Nb,{onOpenSearch:()=>y(!0)})}),i.jsx(Qt,{path:"/topic/:id",element:i.jsx(Ob,{})}),i.jsx(Qt,{path:"/category/:name",element:i.jsx(Ip,{})}),i.jsx(Qt,{path:"/category/:name/:sub",element:i.jsx(Ip,{})}),i.jsx(Qt,{path:"/bookmarks",element:i.jsx(zb,{})}),i.jsx(Qt,{path:"/graph",element:i.jsx(Rb,{})}),i.jsx(Qt,{path:"/quiz",element:i.jsx(Ub,{})})]})})]})]})})}tg.createRoot(document.getElementById("root")).render(i.jsx(ei.StrictMode,{children:i.jsx(Bb,{})}));
