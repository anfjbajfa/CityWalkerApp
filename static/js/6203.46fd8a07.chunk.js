"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[6203],{56203:(n,e,t)=>{t.r(e),t.d(e,{buffer:()=>z,changeDefaultSpatialReferenceTolerance:()=>Y,clearDefaultSpatialReferenceTolerance:()=>Z,clip:()=>w,contains:()=>h,convexHull:()=>N,crosses:()=>g,cut:()=>d,densify:()=>W,difference:()=>b,disjoint:()=>v,distance:()=>m,equals:()=>S,extendedSpatialReferenceInfo:()=>y,flipHorizontal:()=>q,flipVertical:()=>B,generalize:()=>G,geodesicArea:()=>Q,geodesicBuffer:()=>C,geodesicDensify:()=>F,geodesicLength:()=>U,intersect:()=>T,intersectLinesToPoints:()=>X,intersects:()=>A,isSimple:()=>D,nearestCoordinate:()=>H,nearestVertex:()=>_,nearestVertices:()=>I,offset:()=>E,overlaps:()=>O,planarArea:()=>K,planarLength:()=>M,relate:()=>k,rotate:()=>j,simplify:()=>J,symmetricDifference:()=>L,touches:()=>R,union:()=>V,within:()=>x});t(35238);var r=t(16783),a=t(19247),i=t(19902);function c(n){return Array.isArray(n)?n[0]?.spatialReference:n?.spatialReference}function o(n){return n?Array.isArray(n)?n.map(o):n.toJSON?n.toJSON():n:n}function u(n){return Array.isArray(n)?n.map((n=>(0,i.rS)(n))):(0,i.rS)(n)}let s;async function f(){return s||(s=(0,r.ho)("geometryEngineWorker",{strategy:"distributed"})),s}async function l(n,e){return(await f()).invoke("executeGEOperation",{operation:n,parameters:o(e)})}async function p(n,e){const t=await f();return Promise.all(t.broadcast("executeGEOperation",{operation:n,parameters:o(e)}))}function y(n){return l("extendedSpatialReferenceInfo",[n])}async function w(n,e){return u(await l("clip",[c(n),n,e]))}async function d(n,e){return u(await l("cut",[c(n),n,e]))}function h(n,e){return l("contains",[c(n),n,e])}function g(n,e){return l("crosses",[c(n),n,e])}function m(n,e,t){return l("distance",[c(n),n,e,t])}function S(n,e){return l("equals",[c(n),n,e])}function A(n,e){return l("intersects",[c(n),n,e])}function R(n,e){return l("touches",[c(n),n,e])}function x(n,e){return l("within",[c(n),n,e])}function v(n,e){return l("disjoint",[c(n),n,e])}function O(n,e){return l("overlaps",[c(n),n,e])}function k(n,e,t){return l("relate",[c(n),n,e,t])}function D(n){return l("isSimple",[c(n),n])}async function J(n){return u(await l("simplify",[c(n),n]))}async function N(n){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return u(await l("convexHull",[c(n),n,e]))}async function b(n,e){return u(await l("difference",[c(n),n,e]))}async function L(n,e){return u(await l("symmetricDifference",[c(n),n,e]))}async function T(n,e){return u(await l("intersect",[c(n),n,e]))}async function V(n){const e=function(n,e){let t;return Array.isArray(n)?t=n:(t=[],t.push(n),null!=e&&t.push(e)),t}(n,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null);return u(await l("union",[c(e),e]))}async function E(n,e,t,r,a,i){return u(await l("offset",[c(n),n,e,t,r,a,i]))}async function z(n,e,t){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const a=[c(n),n,e,t,r];return u(await l("buffer",a))}async function C(n,e,t,r,a,i){const o=[c(n),n,e,t,r,a,i];return u(await l("geodesicBuffer",o))}async function H(n,e){let t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const r=await l("nearestCoordinate",[c(n),n,e,t]);return{...r,coordinate:a.A.fromJSON(r.coordinate)}}async function _(n,e){const t=await l("nearestVertex",[c(n),n,e]);return{...t,coordinate:a.A.fromJSON(t.coordinate)}}async function I(n,e,t,r){return(await l("nearestVertices",[c(n),n,e,t,r])).map((n=>({...n,coordinate:a.A.fromJSON(n.coordinate)})))}function P(n){return"xmin"in n?n.center:"x"in n?n:n.extent?.center}async function j(n,e,t){if(null==n)throw new $;const r=n.spatialReference;if(null==(t=t??P(n)))throw new $;const a=n.constructor.fromJSON(await l("rotate",[r,n,e,t]));return a.spatialReference=r,a}async function q(n,e){if(null==n)throw new $;const t=n.spatialReference;if(null==(e=e??P(n)))throw new $;const r=n.constructor.fromJSON(await l("flipHorizontal",[t,n,e]));return r.spatialReference=t,r}async function B(n,e){if(null==n)throw new $;const t=n.spatialReference;if(null==(e=e??P(n)))throw new $;const r=n.constructor.fromJSON(await l("flipVertical",[t,n,e]));return r.spatialReference=t,r}async function G(n,e,t,r){return u(await l("generalize",[c(n),n,e,t,r]))}async function W(n,e,t){return u(await l("densify",[c(n),n,e,t]))}async function F(n,e,t){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return u(await l("geodesicDensify",[c(n),n,e,t,r]))}function K(n,e){return l("planarArea",[c(n),n,e])}function M(n,e){return l("planarLength",[c(n),n,e])}function Q(n,e,t){return l("geodesicArea",[c(n),n,e,t])}function U(n,e,t){return l("geodesicLength",[c(n),n,e,t])}async function X(n,e){return u(await l("intersectLinesToPoints",[c(n),n,e]))}async function Y(n,e){await p("changeDefaultSpatialReferenceTolerance",[n,e])}async function Z(n){await p("clearDefaultSpatialReferenceTolerance",[n])}class $ extends Error{constructor(){super("Illegal Argument Exception")}}}}]);
//# sourceMappingURL=6203.46fd8a07.chunk.js.map