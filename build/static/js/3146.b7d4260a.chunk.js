"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[3146],{37888:(e,t,r)=>{r.d(t,{v:()=>n});var a=r(24387);function n(e){e?.writtenProperties&&e.writtenProperties.forEach((e=>{let{target:t,propName:r,newOrigin:n}=e;(0,a.H)(t)&&n&&t.originOf(r)!==n&&t.updateOrigin(r,n)}))}},24387:(e,t,r)=>{function a(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{H:()=>a})},10765:(e,t,r)=>{r.d(t,{save:()=>T,saveAs:()=>R});var a=r(18690),n=(r(50076),r(97924)),o=r(13096),i=r(11668),s=r(31933),l=r(62487),u=r(72945);const c="Feature Service",p="feature-layer-utils",d=`${p}-save`,y=`${p}-save-as`;function f(e){return{isValid:(0,s.W_)(e)&&(!("dynamicDataSource"in e)||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function m(e){const t=[],r=[];for(const{layer:a,layerJSON:n}of e)a.isTable?r.push(n):t.push(n);return{layers:t,tables:r}}function w(e){return m([e])}async function v(e,t){return/\/\d+\/?$/.test(e.url)?w(t[0]):h(t,e)}async function h(e,t){if(e.reverse(),!t)return m(e);const r=await async function(e,t){let r=await e.fetchData("json");if(function(e){return!!(e&&Array.isArray(e.layers)&&Array.isArray(e.tables))}(r))return r;r||={},function(e){e.layers||=[],e.tables||=[]}(r);const{layer:{url:a,customParameters:n,apiKey:o}}=t[0];return await async function(e,t,r){const{url:a,customParameters:n,apiKey:o}=t,{serviceJSON:s,layersJSON:u}=await(0,i.Q)(a,{customParameters:n,apiKey:o}),c=A(e.layers,s.layers,r),p=A(e.tables,s.tables,r);e.layers=c.itemResources,e.tables=p.itemResources;const d=[...c.added,...p.added],y=u?[...u.layers,...u.tables]:[];await async function(e,t,r,a){const n=await async function(e){const t=[];e.forEach((e=>{let{type:r}=e;const a=(0,i.K)(r),n=l.S[a];t.push(n())}));const r=await Promise.all(t),a=new Map;return e.forEach(((e,t)=>{let{type:n}=e;a.set(n,r[t])})),a}(t),o=t.map((e=>{let{id:t,type:o}=e;return new(n.get(o))({url:r,layerId:t,sourceJSON:a.find((e=>{let{id:r}=e;return r===t}))})}));await Promise.allSettled(o.map((e=>e.load()))),o.forEach((t=>{const{layerId:r,loaded:a,defaultPopupTemplate:n}=t;if(!a||null==n)return;const o={id:r,popupInfo:n.toJSON()};"ArcGISFeatureLayer"!==t.operationalLayerType&&(o.layerType=t.operationalLayerType),S(t,o,e)}))}(e,d,a,y)}(r,{url:a??"",customParameters:n,apiKey:o},t.map((e=>e.layer.layerId))),r}(t,e);for(const a of e)S(a.layer,a.layerJSON,r);return function(e,t){const r=[],a=[];for(const{layer:n}of t){const{isTable:e,layerId:t}=n;e?a.push(t):r.push(t)}I(e.layers,r),I(e.tables,a)}(r,e),r}function I(e,t){if(e.length<2)return;const r=[];for(const{id:a}of e)r.push(a);(0,a.aI)(r.sort(b),t.slice().sort(b))&&e.sort(((e,r)=>{const a=t.indexOf(e.id),n=t.indexOf(r.id);return a<n?-1:a>n?1:0}))}function b(e,t){return e<t?-1:e>t?1:0}function A(e,t,r){const n=(0,a.iv)(e,t,((e,t)=>e.id===t.id));e=e.filter((e=>!n.removed.some((t=>t.id===e.id))));const o=n.added;return o.forEach((t=>{let{id:r}=t;e.push({id:r})})),{itemResources:e,added:o.filter((e=>{let{id:t}=e;return!r.includes(t)}))}}function S(e,t,r){e.isTable?P(r.tables,t):P(r.layers,t)}function P(e,t){const r=e.findIndex((e=>{let{id:r}=e;return r===t.id}));-1===r?e.push(t):e[r]=t}function g(e,t){const r=e.layers.some((e=>"OrientedImageryLayer"===e.layerType));(0,u.Sm)(t,u.mm.ORIENTED_IMAGERY_LAYER,r)}function O(e,t){const r=e.some((e=>"oriented-imagery"===e.type));(0,u.Sm)(t,u.mm.ORIENTED_IMAGERY_LAYER,r)}async function E(e,t,r){g(r,t)}async function N(e,t){const{url:r,layerId:a,title:n,fullExtent:i,isTable:s}=e,l=(0,o.qg)(r);t.url=("FeatureServer"===l?.serverType?r:`${r}/${a}`)??null,t.title||=n,t.extent=null,s||null==i||(t.extent=await(0,u.sQ)(i)),(0,u.OM)(t,u.mm.METADATA),(0,u.OM)(t,u.mm.MULTI_LAYER),(0,u.LG)(t,u.mm.SINGLE_LAYER),(0,u.Sm)(t,u.mm.TABLE,s),O([e],t)}async function T(e,t){return(0,n.UN)({layer:e,itemType:c,validateLayer:f,createItemData:(e,t)=>v(t,[e]),errorNamePrefix:d,setItemProperties:E},t)}async function R(e,t,r){return(0,n.Uh)({layer:e,itemType:c,validateLayer:f,createItemData:(e,t)=>Promise.resolve(w(e)),errorNamePrefix:y,newItem:t,setItemProperties:N},r)}},97924:(e,t,r)=>{r.d(t,{UN:()=>h,Uh:()=>I});var a=r(50076),n=r(37888),o=r(65308),i=r(70652),s=r(79942),l=r(72945),u=r(24907);async function c(e){const{layer:t,errorNamePrefix:r,validateLayer:n}=e;await t.load(),function(e,t,r){const n=r(e);if(!n.isValid)throw new a.A(`${t}:invalid-parameters`,n.errorMessage,{layer:e})}(t,r,n)}function p(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function d(e){const{item:t,errorNamePrefix:r,layer:n,validateItem:o}=e;if(function(e){const{item:t,itemType:r,additionalItemType:n,errorNamePrefix:o,layer:i}=e,s=[r];if(n&&s.push(n),!s.includes(t.type)){const e=s.map((e=>`'${e}'`)).join(", ");throw new a.A(`${o}:portal-item-wrong-type`,`Portal item type should be one of: "${e}"`,{item:t,layer:i})}}(e),o){const e=o(t);if(!e.isValid)throw new a.A(`${r}:invalid-parameters`,e.errorMessage,{layer:n})}}function y(e){const{layer:t,errorNamePrefix:r}=e,{portalItem:n}=t;if(!n)throw new a.A(`${r}:portal-item-not-set`,p(t,"requires the portalItem property to be set"));if(!n.loaded)throw new a.A(`${r}:portal-item-not-loaded`,p(t,"cannot be saved to a portal item that does not exist or is inaccessible"));d({...e,item:n})}function f(e){const{newItem:t,itemType:r}=e;let a=i.default.from(t);return a.id&&(a=a.clone(),a.id=null),a.type??=r,a.portal??=o.A.getDefault(),d({...e,item:a}),a}function m(e){return(0,s.m)(e,"portal-item")}async function w(e,t,r){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const a=e.write({},t);return await Promise.all(t.resources?.pendingOperations??[]),(0,u.c)(t,{errorName:"layer-write:unsupported"},r),a}function v(e){(0,l.LG)(e,l.mm.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}async function h(e,t){const{layer:r,createItemData:a,createJSONContext:o,setItemProperties:i,saveResources:s,supplementalUnsupportedErrors:l}=e;await c(e),y(e);const u=r.portalItem,p=o?o(u):m(u),d=await w(r,p,{...t,supplementalUnsupportedErrors:l}),f=await a({layer:r,layerJSON:d},u);return await(i?.(r,u,f)),v(u),await u.update({data:f}),(0,n.v)(p),await(s?.(u,p)),u}async function I(e,t){const{layer:r,createItemData:a,createJSONContext:o,setItemProperties:i,saveResources:s,supplementalUnsupportedErrors:l}=e;await c(e);const u=f(e),p=o?o(u):m(u),d=await w(r,p,{...t,supplementalUnsupportedErrors:l}),y=await a({layer:r,layerJSON:d},u);return await i(r,u,y),v(u),await async function(e,t,r){const a=e.portal;await a.signIn(),await a.user.addItem({item:e,data:t,folder:r?.folder})}(u,y,t),r.portalItem=u,(0,n.v)(p),await(s?.(u,p)),u}},79942:(e,t,r)=>{r.d(t,{m:()=>i,v:()=>o});var a=r(90534),n=r(65308);function o(e,t){return{...s(e,t),readResourcePaths:[]}}function i(e,t,r){const n=(0,a.An)(e.itemUrl);return{...s(e,t),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:n?{rootPath:n.path,writtenUrls:[]}:null,resources:r?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function s(e,t){return{origin:t,url:(0,a.An)(e.itemUrl),portal:e.portal||n.A.getDefault(),portalItem:e}}},24907:(e,t,r)=>{r.d(t,{c:()=>i,d:()=>n});var a=r(50076);async function n(e){const t=[];for(const r of e.allLayers)if("beforeSave"in r&&"function"==typeof r.beforeSave){const e=r.beforeSave();e&&t.push(e)}await Promise.allSettled(t)}const o=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function i(e,t,r){let n=(e.messages??[]).filter((e=>{let{type:t}=e;return"error"===t})).map((e=>{let{name:t,message:r,details:n}=e;return new a.A(t,r,n)}));if(e.blockedRelativeUrls&&(n=n.concat(e.blockedRelativeUrls.map((e=>new a.A("url:unsupported",`Relative url '${e}' is not supported`))))),r){const{ignoreUnsupported:e,supplementalUnsupportedErrors:t=[],requiredPropertyChecksDisabled:a}=r;e&&(n=n.filter((e=>{let{name:r}=e;return!(o.has(r)||t.includes(r))}))),a&&(n=n.filter((e=>"web-document-write:property-required"!==e.name)))}if(n.length>0)throw new a.A(t.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:n})}}}]);
//# sourceMappingURL=3146.b7d4260a.chunk.js.map