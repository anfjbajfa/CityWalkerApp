"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[424,3338],{67150:(e,t,r)=>{r.d(t,{v:()=>o});var a=r(21629);function o(e){e?.writtenProperties&&e.writtenProperties.forEach((e=>{let{target:t,propName:r,newOrigin:o}=e;(0,a.H)(t)&&o&&t.originOf(r)!==o&&t.updateOrigin(r,o)}))}},21629:(e,t,r)=>{function a(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{H:()=>a})},3338:(e,t,r)=>{r.d(t,{save:()=>w,saveAs:()=>y});var a=r(17614),o=r(72560),s=r(16339),n=r(262);const i="Group Layer",c="group-layer-save",l="group-layer-save-as",u=s.mm.GROUP_LAYER_MAP;function p(e){return{isValid:"group"===e.type,errorMessage:"Layer.type should be 'group'"}}function d(e){return{isValid:(0,s.Y)(e,u),errorMessage:`Layer.portalItem.typeKeywords should have '${u}'`}}function f(e,t){return{...(0,o.m)(e,"web-map",!0),initiator:t}}function m(e){const t=e.layerJSON;return Promise.resolve(t&&Object.keys(t).length?t:null)}async function h(e,t){t.title||=e.title,(0,s.OM)(t,s.mm.METADATA),(0,s.LG)(t,u)}async function w(e,t){return(0,a.UN)({layer:e,itemType:i,validateLayer:p,validateItem:d,createJSONContext:t=>f(t,e),createItemData:m,errorNamePrefix:c,saveResources:async(t,r)=>(e.sourceIsPortalItem||await t.removeAllResources().catch((()=>{})),(0,n.r)(e.resourceReferences,r))},t)}async function y(e,t,r){return(0,a.Uh)({layer:e,itemType:i,validateLayer:p,createJSONContext:t=>f(t,e),createItemData:m,errorNamePrefix:l,newItem:t,setItemProperties:h,saveResources:(t,r)=>(0,n.r)(e.resourceReferences,r)},r)}},17614:(e,t,r)=>{r.d(t,{UN:()=>v,Uh:()=>g});var a=r(55678),o=r(67150),s=r(83807),n=r(40710),i=r(72560),c=r(16339),l=r(45514);async function u(e){const{layer:t,errorNamePrefix:r,validateLayer:o}=e;await t.load(),function(e,t,r){const o=r(e);if(!o.isValid)throw new a.A(`${t}:invalid-parameters`,o.errorMessage,{layer:e})}(t,r,o)}function p(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function d(e){const{item:t,errorNamePrefix:r,layer:o,validateItem:s}=e;if(function(e){const{item:t,itemType:r,additionalItemType:o,errorNamePrefix:s,layer:n}=e,i=[r];if(o&&i.push(o),!i.includes(t.type)){const e=i.map((e=>`'${e}'`)).join(", ");throw new a.A(`${s}:portal-item-wrong-type`,`Portal item type should be one of: "${e}"`,{item:t,layer:n})}}(e),s){const e=s(t);if(!e.isValid)throw new a.A(`${r}:invalid-parameters`,e.errorMessage,{layer:o})}}function f(e){const{layer:t,errorNamePrefix:r}=e,{portalItem:o}=t;if(!o)throw new a.A(`${r}:portal-item-not-set`,p(t,"requires the portalItem property to be set"));if(!o.loaded)throw new a.A(`${r}:portal-item-not-loaded`,p(t,"cannot be saved to a portal item that does not exist or is inaccessible"));d({...e,item:o})}function m(e){const{newItem:t,itemType:r}=e;let a=n.default.from(t);return a.id&&(a=a.clone(),a.id=null),a.type??=r,a.portal??=s.A.getDefault(),d({...e,item:a}),a}function h(e){return(0,i.m)(e,"portal-item")}async function w(e,t,r){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const a=e.write({},t);return await Promise.all(t.resources?.pendingOperations??[]),(0,l.c)(t,{errorName:"layer-write:unsupported"},r),a}function y(e){(0,c.LG)(e,c.mm.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}async function v(e,t){const{layer:r,createItemData:a,createJSONContext:s,setItemProperties:n,saveResources:i,supplementalUnsupportedErrors:c}=e;await u(e),f(e);const l=r.portalItem,p=s?s(l):h(l),d=await w(r,p,{...t,supplementalUnsupportedErrors:c}),m=await a({layer:r,layerJSON:d},l);return await(n?.(r,l,m)),y(l),await l.update({data:m}),(0,o.v)(p),await(i?.(l,p)),l}async function g(e,t){const{layer:r,createItemData:a,createJSONContext:s,setItemProperties:n,saveResources:i,supplementalUnsupportedErrors:c}=e;await u(e);const l=m(e),p=s?s(l):h(l),d=await w(r,p,{...t,supplementalUnsupportedErrors:c}),f=await a({layer:r,layerJSON:d},l);return await n(r,l,f),y(l),await async function(e,t,r){const a=e.portal;await a.signIn(),await a.user.addItem({item:e,data:t,folder:r?.folder})}(l,f,t),r.portalItem=l,(0,o.v)(p),await(i?.(l,p)),l}},72560:(e,t,r)=>{r.d(t,{m:()=>n,v:()=>s});var a=r(89524),o=r(83807);function s(e,t){return{...i(e,t),readResourcePaths:[]}}function n(e,t,r){const o=(0,a.An)(e.itemUrl);return{...i(e,t),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:o?{rootPath:o.path,writtenUrls:[]}:null,resources:r?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function i(e,t){return{origin:t,url:(0,a.An)(e.itemUrl),portal:e.portal||o.A.getDefault(),portalItem:e}}},424:(e,t,r)=>{r.d(t,{addOrUpdateResources:()=>i,bg:()=>f,cL:()=>d,fetchResources:()=>n,removeAllResources:()=>l,removeResource:()=>c});var a=r(25943),o=r(55678),s=r(89524);async function n(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;await e.load(r);const a=(0,s.fj)(e.itemUrl,"resources"),{start:o=1,num:n=10,sortOrder:i="asc",sortField:c="resource"}=t,l={query:{start:o,num:n,sortOrder:i,sortField:c,token:e.apiKey},signal:r?.signal},u=await e.portal.request(a,l);return{total:u.total,nextStart:u.nextStart,resources:u.resources.map((t=>{let{created:r,size:a,resource:o}=t;return{created:new Date(r),size:a,resource:e.resourceFromPath(o)}}))}}async function i(e,t,r,a){const n=new Map;for(const{resource:s,content:c,compress:l,access:p}of t){if(!s.hasPath())throw new o.A(`portal-item-resource-${r}:invalid-path`,"Resource does not have a valid path");const[e,t]=u(s.path),a=`${e}/${l??""}/${p??""}`;n.has(a)||n.set(a,{prefix:e,compress:l,access:p,files:[]}),n.get(a).files.push({fileName:t,content:c})}await e.load(a);const i=(0,s.fj)(e.userItemUrl,"add"===r?"addResources":"updateResources");for(const{prefix:o,compress:s,access:c,files:l}of n.values()){const t=25;for(let r=0;r<l.length;r+=t){const n=l.slice(r,r+t),u=new FormData;o&&"."!==o&&u.append("resourcesPrefix",o),s&&u.append("compress","true"),c&&u.append("access",c);let p=0;for(const{fileName:e,content:t}of n)u.append("file"+ ++p,t,e);u.append("f","json"),await e.portal.request(i,{method:"post",body:u,signal:a?.signal})}}}async function c(e,t,r){if(!t.hasPath())throw new o.A("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const a=(0,s.fj)(e.userItemUrl,"removeResources");await e.portal.request(a,{method:"post",query:{resource:t.path},signal:r?.signal}),t.portalItem=null}async function l(e,t){await e.load(t);const r=(0,s.fj)(e.userItemUrl,"removeResources");return e.portal.request(r,{method:"post",query:{deleteAll:!0},signal:t?.signal})}function u(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function p(e){const[t,r]=function(e){const t=(0,s.Zo)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[a,o]=u(t);return[a,o,r]}async function d(e){return"blob"===e.type?e.blob:"json"===e.type?new Blob([e.jsonString],{type:"application/json"}):(await(0,a.A)(e.url,{responseType:"blob"})).data}function f(e,t){if(!e.hasPath())return null;const[r,,a]=p(e.path);return e.portalItem.resourceFromPath((0,s.fj)(r,t+a))}},262:(e,t,r)=>{r.d(t,{S:()=>c,r:()=>i});var a=r(55678),o=r(92976),s=r(77625),n=r(424);async function i(e,t,r){const a=await l(e,t,r);await u(a,t,r)}async function c(e,t,r,a,o){const s=await l(r,a,o);await e.update({data:t}),await u(s,a,o)}async function l(e,t,i){if(!t?.resources)return;const c=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const l=new Set(t.resources.toKeep.map((e=>e.resource.path))),u=new Set,p=[];l.forEach((t=>{c.delete(t),e.paths.push(t)}));const d=[],f=[],m=[];for(const r of t.resources.toUpdate)if(c.delete(r.resource.path),l.has(r.resource.path)||u.has(r.resource.path)){const{resource:t,content:a,finish:o}=r,i=(0,n.bg)(t,(0,s.lk)());e.paths.push(i.path),d.push({resource:i,content:await(0,n.cL)(a),compress:r.compress}),o&&m.push((()=>o(i)))}else{e.paths.push(r.resource.path),f.push({resource:r.resource,content:await(0,n.cL)(r.content),compress:r.compress});const t=r.finish;t&&m.push((()=>t(r.resource))),u.add(r.resource.path)}for(const r of t.resources.toAdd)if(e.paths.push(r.resource.path),c.has(r.resource.path))c.delete(r.resource.path);else{d.push({resource:r.resource,content:await(0,n.cL)(r.content),compress:r.compress});const e=r.finish;e&&m.push((()=>e(r.resource)))}if(d.length||f.length){const{addOrUpdateResources:e}=await Promise.resolve().then(r.bind(r,424));await e(t.portalItem,d,"add",i),await e(t.portalItem,f,"update",i)}if(m.forEach((e=>e())),0===p.length)return c;const h=await(0,o.Ol)(p);if((0,o.Te)(i),h.length>0)throw new a.A("save:resources","Failed to save one or more resources",{errors:h});return c}async function u(e,t,r){if(!e||!t.portalItem)return;const a=[];for(const o of e){const e=t.portalItem.resourceFromPath(o);a.push(e.portalItem.removeResource(e,r))}await(0,o.Lx)(a)}}}]);
//# sourceMappingURL=3338.5a044a8f.chunk.js.map