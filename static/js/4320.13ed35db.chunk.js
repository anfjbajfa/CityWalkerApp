"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[424,4320],{67150:(e,t,r)=>{r.d(t,{v:()=>s});var o=r(21629);function s(e){e?.writtenProperties&&e.writtenProperties.forEach((e=>{let{target:t,propName:r,newOrigin:s}=e;(0,o.H)(t)&&s&&t.originOf(r)!==s&&t.updateOrigin(r,s)}))}},21629:(e,t,r)=>{function o(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{H:()=>o})},54320:(e,t,r)=>{r.d(t,{Xh:()=>T,w6:()=>P});var o=r(70273),s=r(25943),n=r(55678),a=r(11434),i=r(92976),l=r(89524),c=r(67519),p=(r(27052),r(11215),r(35097)),u=r(55292),d=r(8597),h=r(67150),f=r(76607),y=r(21331),m=r(34614),v=r(63410),w=r(20005),g=r(69518);let S=null;function I(){return S}var x=r(83807),A=r(40710),_=r(72560),b=r(262),R=r(45514);const P=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=(0,i.sg)((async(e,t,r)=>{switch(e){case T.SAVE:return this._save(t);case T.SAVE_AS:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return O(t)}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const o=null==e.spatialReference?{...e,spatialReference:O(t)}:e;return f.A.fromJSON(o,r)}const o=t.store,s=O(t);return null==s||null==o?.extent||!Array.isArray(o.extent)||o.extent.some((e=>e<N))?null:new f.A({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:s})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"";return this.parseVersionString(o)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem?.title;if("item-title"===this.sublayerTitleMode)return this.url?(0,v.yG)(this.url,t.name):t.name;let o=t.name;if(!o&&this.url){const e=(0,v.qg)(this.url);null!=e&&(o=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),(0,v.cr)(o)}set url(e){if(null==e)return void this._set("url",e);const t=(0,v.HZ)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:a.A.getLogger(this)});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){(0,v.LS)(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url"),t=(0,l.An)(e);return t&&null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=(0,g.F)(this.parsedUrl?.path??"",this.rootNode,e,this.customParameters,this.apiKey,a.A.getLogger(this),t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===e?.type){const t=e.rootIndex%e.pageSize,r=e.rootPage?.nodes?.[t];if(null==r?.obb?.center||null==r.obb.halfSize)throw new n.A("sceneservice:invalid-node-page","Invalid node page.");if(r.obb.center[0]<N||null==this.fullExtent||this.fullExtent.hasZ)return;const o=r.obb.halfSize,s=r.obb.center[2],a=Math.sqrt(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]);this.fullExtent.zmin=s-a,this.fullExtent.zmax=s+a}else if("node"===e?.type){const t=e.rootNode?.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<N)return;const r=t[2],o=t[3],{fullExtent:s}=this;s&&(s.zmin=r-o,s.zmax=r+o)}}async _fetchService(e){if(null==this.url)throw new n.A("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await(0,s.A)(this.url??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await(0,s.A)(this.parsedUrl?.path??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});t.ssl&&this.url&&(this.url=this.url.replace(/^http:/i,"https:"));let r=!1;if(t.data.layerType&&"Voxel"===t.data.layerType&&(r=!0),r)return this._fetchVoxelServiceLayer();const o=t.data;this.read(o,this._getServiceContext()),this.validateLayer(o)}async _fetchVoxelServiceLayer(e){const t=(await(0,s.A)(this.parsedUrl?.path+"/layer",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,this._getServiceContext()),this.validateLayer(t)}_getServiceContext(){return{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}async _saveAs(e,t){const r={...L,...t};let o=A.default.from(e);if(!o)throw new n.A("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");o.id&&(o=o.clone(),o.id=null);const s=o.portal||x.A.getDefault();await this._ensureLoadBeforeSave(),o.type=M,o.portal=s;const a=(0,_.m)(o,"portal-item",!0),i={layers:[this.write({},a)]};return await Promise.all(a.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(i,a,r),this.url&&(o.url=this.url),o.title||(o.title=this.title),U(o,r,j.newItem),await s.signIn(),await s.user.addItem({item:o,folder:r?.folder,data:i}),await(0,b.r)(this.resourceReferences,a),this.portalItem=o,(0,h.v)(a),a.portalItem=o,o}async _save(e){const t={...L,...e};if(!this.portalItem)throw new n.A("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if(this.portalItem.type!==M)throw new n.A("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${M}"`);await this._ensureLoadBeforeSave();const r=(0,_.m)(this.portalItem,"portal-item",!0),o={layers:[this.write({},r)]};return await Promise.all(r.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(o,r,t),this.url&&(this.portalItem.url=this.url),this.portalItem.title||(this.portalItem.title=this.title),U(this.portalItem,t,j.existingItem),await(0,b.S)(this.portalItem,o,this.resourceReferences,r),(0,h.v)(r),this.portalItem}async _validateAgainstJSONSchema(e,t,r){const o=r?.validationOptions;(0,R.c)(t,{errorName:"sceneservice:save"},{ignoreUnsupported:o?.ignoreUnsupported,supplementalUnsupportedErrors:["scenemodification:unsupported"]});const s=o?.enabled,i=I();if(s&&i){const t=(await i()).validate(e,r.portalItemLayerType);if(!t.length)return;const s=`Layer item did not validate:\n${t.join("\n")}`;if(a.A.getLogger(this).error(`_validateAgainstJSONSchema(): ${s}`),"throw"===o.failPolicy){const e=t.map((e=>new n.A("sceneservice:schema-validation",e)));throw new n.A("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{validationErrors:e})}}}};return(0,o._)([(0,c.MZ)(w.id)],t.prototype,"id",void 0),(0,o._)([(0,c.MZ)({type:m.A})],t.prototype,"spatialReference",void 0),(0,o._)([(0,p.w)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),(0,o._)([(0,c.MZ)({type:f.A})],t.prototype,"fullExtent",void 0),(0,o._)([(0,p.w)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),(0,o._)([(0,c.MZ)({readOnly:!0,type:y.A})],t.prototype,"heightModelInfo",void 0),(0,o._)([(0,c.MZ)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),(0,o._)([(0,c.MZ)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),(0,o._)([(0,c.MZ)({readOnly:!0})],t.prototype,"version",void 0),(0,o._)([(0,p.w)("version",["store.version"])],t.prototype,"readVersion",null),(0,o._)([(0,c.MZ)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,o._)([(0,c.MZ)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),(0,o._)([(0,c.MZ)({type:String})],t.prototype,"title",void 0),(0,o._)([(0,p.w)("portal-item","title")],t.prototype,"readTitlePortalItem",null),(0,o._)([(0,p.w)("service","title",["name"])],t.prototype,"readTitleService",null),(0,o._)([(0,c.MZ)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),(0,o._)([(0,c.MZ)(w.OZ)],t.prototype,"url",null),(0,o._)([(0,d.K)("url")],t.prototype,"writeUrl",null),(0,o._)([(0,c.MZ)()],t.prototype,"parsedUrl",null),(0,o._)([(0,c.MZ)({readOnly:!0})],t.prototype,"store",void 0),(0,o._)([(0,c.MZ)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=(0,o._)([(0,u.$)("esri.layers.mixins.SceneService")],t),t},N=-1e38;function O(e){if(null!=e.spatialReference)return m.A.fromJSON(e.spatialReference);const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.slice(r.lastIndexOf("/")+1),10);return null!=o?new m.A(o):null}function U(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const s of o)e.typeKeywords.push(s);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),r===j.newItem&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}var j,E;(E=j||(j={}))[E.existingItem=0]="existingItem",E[E.newItem=1]="newItem";const M="Scene Service",L={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var T;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(T||(T={}))},69518:(e,t,r)=>{r.d(t,{F:()=>n});var o=r(25943),s=r(55678);async function n(e,t,r,n,a,i,l){let c=null;if(null!=r){const t=`${e}/nodepages/`,s=t+Math.floor(r.rootIndex/r.nodesPerPage);try{return{type:"page",rootPage:(await(0,o.A)(s,{query:{f:"json",...n,token:a},responseType:"json",signal:l})).data,rootIndex:r.rootIndex,pageSize:r.nodesPerPage,lodMetric:r.lodSelectionMetricType,urlPrefix:t}}catch(h){null!=i&&i.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",s,h),c=h}}if(!t)return null;const p=t?.split("/").pop(),u=`${e}/nodes/`,d=u+p;try{return{type:"node",rootNode:(await(0,o.A)(d,{query:{f:"json",...n,token:a},responseType:"json",signal:l})).data,urlPrefix:u}}catch(h){throw new s.A("sceneservice:root-node-missing","Root node missing.",{pageError:c,nodeError:h,url:d})}}},72560:(e,t,r)=>{r.d(t,{m:()=>a,v:()=>n});var o=r(89524),s=r(83807);function n(e,t){return{...i(e,t),readResourcePaths:[]}}function a(e,t,r){const s=(0,o.An)(e.itemUrl);return{...i(e,t),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:s?{rootPath:s.path,writtenUrls:[]}:null,resources:r?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function i(e,t){return{origin:t,url:(0,o.An)(e.itemUrl),portal:e.portal||s.A.getDefault(),portalItem:e}}},424:(e,t,r)=>{r.d(t,{addOrUpdateResources:()=>i,bg:()=>h,cL:()=>d,fetchResources:()=>a,removeAllResources:()=>c,removeResource:()=>l});var o=r(25943),s=r(55678),n=r(89524);async function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;await e.load(r);const o=(0,n.fj)(e.itemUrl,"resources"),{start:s=1,num:a=10,sortOrder:i="asc",sortField:l="resource"}=t,c={query:{start:s,num:a,sortOrder:i,sortField:l,token:e.apiKey},signal:r?.signal},p=await e.portal.request(o,c);return{total:p.total,nextStart:p.nextStart,resources:p.resources.map((t=>{let{created:r,size:o,resource:s}=t;return{created:new Date(r),size:o,resource:e.resourceFromPath(s)}}))}}async function i(e,t,r,o){const a=new Map;for(const{resource:n,content:l,compress:c,access:u}of t){if(!n.hasPath())throw new s.A(`portal-item-resource-${r}:invalid-path`,"Resource does not have a valid path");const[e,t]=p(n.path),o=`${e}/${c??""}/${u??""}`;a.has(o)||a.set(o,{prefix:e,compress:c,access:u,files:[]}),a.get(o).files.push({fileName:t,content:l})}await e.load(o);const i=(0,n.fj)(e.userItemUrl,"add"===r?"addResources":"updateResources");for(const{prefix:s,compress:n,access:l,files:c}of a.values()){const t=25;for(let r=0;r<c.length;r+=t){const a=c.slice(r,r+t),p=new FormData;s&&"."!==s&&p.append("resourcesPrefix",s),n&&p.append("compress","true"),l&&p.append("access",l);let u=0;for(const{fileName:e,content:t}of a)p.append("file"+ ++u,t,e);p.append("f","json"),await e.portal.request(i,{method:"post",body:p,signal:o?.signal})}}}async function l(e,t,r){if(!t.hasPath())throw new s.A("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const o=(0,n.fj)(e.userItemUrl,"removeResources");await e.portal.request(o,{method:"post",query:{resource:t.path},signal:r?.signal}),t.portalItem=null}async function c(e,t){await e.load(t);const r=(0,n.fj)(e.userItemUrl,"removeResources");return e.portal.request(r,{method:"post",query:{deleteAll:!0},signal:t?.signal})}function p(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function u(e){const[t,r]=function(e){const t=(0,n.Zo)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[o,s]=p(t);return[o,s,r]}async function d(e){return"blob"===e.type?e.blob:"json"===e.type?new Blob([e.jsonString],{type:"application/json"}):(await(0,o.A)(e.url,{responseType:"blob"})).data}function h(e,t){if(!e.hasPath())return null;const[r,,o]=u(e.path);return e.portalItem.resourceFromPath((0,n.fj)(r,t+o))}},262:(e,t,r)=>{r.d(t,{S:()=>l,r:()=>i});var o=r(55678),s=r(92976),n=r(77625),a=r(424);async function i(e,t,r){const o=await c(e,t,r);await p(o,t,r)}async function l(e,t,r,o,s){const n=await c(r,o,s);await e.update({data:t}),await p(n,o,s)}async function c(e,t,i){if(!t?.resources)return;const l=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const c=new Set(t.resources.toKeep.map((e=>e.resource.path))),p=new Set,u=[];c.forEach((t=>{l.delete(t),e.paths.push(t)}));const d=[],h=[],f=[];for(const r of t.resources.toUpdate)if(l.delete(r.resource.path),c.has(r.resource.path)||p.has(r.resource.path)){const{resource:t,content:o,finish:s}=r,i=(0,a.bg)(t,(0,n.lk)());e.paths.push(i.path),d.push({resource:i,content:await(0,a.cL)(o),compress:r.compress}),s&&f.push((()=>s(i)))}else{e.paths.push(r.resource.path),h.push({resource:r.resource,content:await(0,a.cL)(r.content),compress:r.compress});const t=r.finish;t&&f.push((()=>t(r.resource))),p.add(r.resource.path)}for(const r of t.resources.toAdd)if(e.paths.push(r.resource.path),l.has(r.resource.path))l.delete(r.resource.path);else{d.push({resource:r.resource,content:await(0,a.cL)(r.content),compress:r.compress});const e=r.finish;e&&f.push((()=>e(r.resource)))}if(d.length||h.length){const{addOrUpdateResources:e}=await Promise.resolve().then(r.bind(r,424));await e(t.portalItem,d,"add",i),await e(t.portalItem,h,"update",i)}if(f.forEach((e=>e())),0===u.length)return l;const y=await(0,s.Ol)(u);if((0,s.Te)(i),y.length>0)throw new o.A("save:resources","Failed to save one or more resources",{errors:y});return l}async function p(e,t,r){if(!e||!t.portalItem)return;const o=[];for(const s of e){const e=t.portalItem.resourceFromPath(s);o.push(e.portalItem.removeResource(e,r))}await(0,s.Lx)(o)}},45514:(e,t,r)=>{r.d(t,{c:()=>a,d:()=>s});var o=r(55678);async function s(e){const t=[];for(const r of e.allLayers)if("beforeSave"in r&&"function"==typeof r.beforeSave){const e=r.beforeSave();e&&t.push(e)}await Promise.allSettled(t)}const n=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function a(e,t,r){let s=(e.messages??[]).filter((e=>{let{type:t}=e;return"error"===t})).map((e=>{let{name:t,message:r,details:s}=e;return new o.A(t,r,s)}));if(e.blockedRelativeUrls&&(s=s.concat(e.blockedRelativeUrls.map((e=>new o.A("url:unsupported",`Relative url '${e}' is not supported`))))),r){const{ignoreUnsupported:e,supplementalUnsupportedErrors:t=[],requiredPropertyChecksDisabled:o}=r;e&&(s=s.filter((e=>{let{name:r}=e;return!(n.has(r)||t.includes(r))}))),o&&(s=s.filter((e=>"web-document-write:property-required"!==e.name)))}if(s.length>0)throw new o.A(t.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:s})}}}]);
//# sourceMappingURL=4320.13ed35db.chunk.js.map