"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[7073],{34273:(e,a,t)=>{t.d(a,{v:()=>n});var r=t(74643);class n{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(e,a){const t=this._serviceMetadatas.get(e);if(t)return t;const n=await(0,r.V)(e,a);return this._serviceMetadatas.set(e,n),n}async fetchItemData(e){const{id:a}=e;if(!a)return null;const{_itemDatas:t}=this;if(t.has(a))return t.get(a);const r=await e.fetchData();return t.set(a,r),r}async fetchCustomParameters(e,a){const t=await this.fetchItemData(e);return t&&"object"==typeof t&&(a?a(t):t.customParameters)||null}}},48941:(e,a,t)=>{t.d(a,{L:()=>o});var r=t(56705),n=t(25943),s=t(55678),i=t(92976),c=t(63410),l=t(83807),u=t(40710);async function o(e,a){const t=(0,c.qg)(e);if(!t)throw new s.A("invalid-url","Invalid scene service url");const o={...a,sceneServerUrl:t.url.path,layerId:t.sublayer??void 0};if(o.sceneLayerItem??=await async function(e){const a=(await y(e)).serviceItemId;if(!a)return null;const t=new u.default({id:a,apiKey:e.apiKey}),s=await async function(e){const a=r.id?.findServerInfo(e.sceneServerUrl);if(a?.owningSystemUrl)return a.owningSystemUrl;const t=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const a=(await(0,n.A)(t,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(a)return a}catch(f){(0,i.QP)(f)}return null}(e);null!=s&&(t.portal=new l.A({url:s}));try{return await t.load({signal:e.signal})}catch(m){return(0,i.QP)(m),null}}(o),null==o.sceneLayerItem)return d(o.sceneServerUrl.replace("/SceneServer","/FeatureServer"),o);const f=await async function(e){let{sceneLayerItem:a,signal:t}=e;if(!a)return null;try{const e=(await a.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:t})).find((e=>"Feature Service"===e.type))||null;if(!e)return null;const r=new u.default({portal:e.portal,id:e.id});return await r.load(),r}catch(r){return(0,i.QP)(r),null}}(o);if(!f?.url)throw new s.A("related-service-not-found","Could not find feature service through portal item relationship");o.featureServiceItem=f;const m=await d(f.url,o);return m.portalItem=f,m}async function y(e){if(e.rootDocument)return e.rootDocument;const a={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const t=await(0,n.A)(e.sceneServerUrl,a);e.rootDocument=t.data}catch{e.rootDocument={}}return e.rootDocument}async function d(e,a){const t=(0,c.qg)(e);if(!t)throw new s.A("invalid-feature-service-url","Invalid feature service url");const r=t.url.path,i=a.layerId;if(null==i)return{serverUrl:r};const l=y(a),u=a.featureServiceItem?await a.featureServiceItem.fetchData("json"):null,o=(u?.layers?.[0]||u?.tables?.[0])?.customParameters,d=e=>{const t={query:{f:"json",...o},responseType:"json",authMode:e,signal:a.signal};return(0,n.A)(r,t)},f=d("anonymous").catch((()=>d("no-prompt"))),[m,w]=await Promise.all([f,l]),p=w?.layers,h=m.data&&m.data.layers;if(!Array.isArray(h))throw new Error("expected layers array");if(Array.isArray(p)){for(let n=0;n<Math.min(p.length,h.length);n++)if(p[n].id===i)return{serverUrl:r,layerId:h[n].id}}else if(null!=i&&i<h.length)return{serverUrl:r,layerId:h[i].id};throw new Error("could not find matching associated sublayer")}},62950:(e,a,t)=>{t.d(a,{K:()=>d,Q:()=>s});var r=t(74643);const n=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function s(e,a){const{loadContext:t,...n}=a||{},s=t?await t.fetchServiceMetadata(e,n):await(0,r.V)(e,n);y(s),l(s);const i={serviceJSON:s};if((s.currentVersion??0)<10.5)return i;const c=`${e}/layers`,u=t?await t.fetchServiceMetadata(c,n):await(0,r.V)(c,n);return y(u),l(u),i.layersJSON={layers:u.layers,tables:u.tables},i}function i(e){const{type:a}=e;return!!a&&n.has(a)}function c(e){return"Table"===e.type}function l(e){e.layers=e.layers?.filter(i),e.tables=e.tables?.filter(c)}function u(e){e.type||="Feature Layer"}function o(e){e.type||="Table"}function y(e){e.layers?.forEach(u),e.tables?.forEach(o)}function d(e){switch(e){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}},38133:(e,a,t)=>{t.d(a,{S:()=>r});const r={BingMapsLayer:async()=>(await t.e(4877).then(t.bind(t,54877))).default,BuildingSceneLayer:async()=>(await Promise.all([t.e(7926),t.e(4320),t.e(9941),t.e(8260)]).then(t.bind(t,28260))).default,CSVLayer:async()=>(await t.e(7816).then(t.bind(t,47816))).default,CatalogLayer:async()=>(await Promise.all([t.e(384),t.e(733),t.e(7292),t.e(8368),t.e(3961),t.e(8085)]).then(t.bind(t,98085))).default,DimensionLayer:async()=>(await t.e(5384).then(t.bind(t,55384))).default,ElevationLayer:async()=>(await t.e(7134).then(t.bind(t,87134))).default,FeatureLayer:async()=>(await Promise.resolve().then(t.bind(t,80394))).default,GeoJSONLayer:async()=>(await t.e(4569).then(t.bind(t,84569))).default,GeoRSSLayer:async()=>(await t.e(1061).then(t.bind(t,31061))).default,GroupLayer:async()=>(await t.e(7913).then(t.bind(t,57913))).default,ImageryLayer:async()=>(await Promise.all([t.e(7292),t.e(3726),t.e(8761),t.e(4952),t.e(6923)]).then(t.bind(t,94811))).default,ImageryTileLayer:async()=>(await Promise.all([t.e(3726),t.e(8382),t.e(8761),t.e(3890),t.e(4952),t.e(4530)]).then(t.bind(t,34530))).default,IntegratedMesh3DTilesLayer:async()=>(await t.e(3204).then(t.bind(t,93204))).default,IntegratedMeshLayer:async()=>(await Promise.all([t.e(4320),t.e(4237)]).then(t.bind(t,24237))).default,KMLLayer:async()=>(await t.e(9538).then(t.bind(t,69538))).default,KnowledgeGraphLayer:async()=>(await Promise.all([t.e(384),t.e(2258),t.e(7731),t.e(733),t.e(9383),t.e(4770),t.e(6372),t.e(2440)]).then(t.bind(t,52440))).default,LineOfSightLayer:async()=>(await Promise.all([t.e(4645),t.e(9271)]).then(t.bind(t,49271))).default,LinkChartLayer:async()=>(await Promise.all([t.e(384),t.e(2258),t.e(7731),t.e(733),t.e(9383),t.e(4770),t.e(6372),t.e(9261)]).then(t.bind(t,9261))).default,MapImageLayer:async()=>(await Promise.all([t.e(384),t.e(7292),t.e(8368),t.e(2855),t.e(9085)]).then(t.bind(t,19085))).default,MapNotesLayer:async()=>(await t.e(621).then(t.bind(t,80621))).default,MediaLayer:async()=>(await t.e(2865).then(t.bind(t,62865))).default,OGCFeatureLayer:async()=>(await Promise.all([t.e(384),t.e(701),t.e(2541)]).then(t.bind(t,12408))).default,OpenStreetMapLayer:async()=>(await t.e(7953).then(t.bind(t,57953))).default,OrientedImageryLayer:async()=>(await t.e(359).then(t.bind(t,30359))).default,PointCloudLayer:async()=>(await Promise.all([t.e(4320),t.e(9518)]).then(t.bind(t,89518))).default,RouteLayer:async()=>(await Promise.all([t.e(2397),t.e(5699)]).then(t.bind(t,65699))).default,SceneLayer:async()=>(await Promise.all([t.e(3661),t.e(7926),t.e(4320),t.e(9680),t.e(9941),t.e(172),t.e(2569),t.e(4726)]).then(t.bind(t,94726))).default,StreamLayer:async()=>(await t.e(9870).then(t.bind(t,49870))).default,SubtypeGroupLayer:async()=>(await t.e(8261).then(t.bind(t,8261))).default,TileLayer:async()=>(await Promise.all([t.e(384),t.e(7292),t.e(8368),t.e(2855),t.e(3408)]).then(t.bind(t,73408))).default,UnknownLayer:async()=>(await t.e(5366).then(t.bind(t,25366))).default,UnsupportedLayer:async()=>(await t.e(9977).then(t.bind(t,49977))).default,VectorTileLayer:async()=>(await Promise.all([t.e(3849),t.e(1209)]).then(t.bind(t,83840))).default,VideoLayer:async()=>(await t.e(9120).then(t.bind(t,69120))).default,ViewshedLayer:async()=>(await Promise.all([t.e(4645),t.e(50)]).then(t.bind(t,50))).default,VoxelLayer:async()=>(await Promise.all([t.e(4320),t.e(8320)]).then(t.bind(t,98320))).default,WFSLayer:async()=>(await Promise.all([t.e(3558),t.e(100)]).then(t.bind(t,1415))).default,WMSLayer:async()=>(await t.e(78).then(t.bind(t,90078))).default,WMTSLayer:async()=>(await t.e(5982).then(t.bind(t,25982))).default,WebTileLayer:async()=>(await t.e(8318).then(t.bind(t,58318))).default}},26024:(e,a,t)=>{t.d(a,{Ju:()=>u,K8:()=>d,XH:()=>o,_r:()=>s,bO:()=>i,iK:()=>y,nu:()=>f,pJ:()=>c,rc:()=>l});var r=t(48941),n=t(62950);function s(e){const a={id:e.id,name:e.name},t=(0,n.K)(e.type);return"FeatureLayer"!==t&&(a.layerType=t),a}async function i(e,a,t){if(null==e?.layers||null==e?.tables){const r=await t.fetchServiceMetadata(a,{customParameters:c(e)?.customParameters});(e=e||{}).layers=e.layers||r?.layers?.map(s),e.tables=e.tables||r?.tables?.map(s)}return e}function c(e){if(!e)return null;const{layers:a,tables:t}=e;return a?.length?a[0]:t?.length?t[0]:null}function l(e,a){return null==a?null:[...e.layers||[],...e.tables||[]].find((e=>e.id===a))}function u(e,a){return[...e.layers||[],...e.tables||[]].filter((e=>{let{layerType:t}=e;return t?t===a:"ArcGISFeatureLayer"===a}))}function o(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function y(e){switch(e){case"catalog":return"CatalogLayer";case"feature":return"ArcGISFeatureLayer";case"oriented-imagery":return"OrientedImageryLayer";case"subtype-group":return"SubtypeGroupLayer"}return null}function d(e){switch(e){case"CatalogLayer":return"CatalogLayer";case"OrientedImageryLayer":return"OrientedImageryLayer";case"SubtypeGroupLayer":return"SubtypeGroupLayer"}return"FeatureLayer"}async function f(e,a,t){if(!e?.url)return a??{};if(a??={},!a.layers){const r=await t.fetchServiceMetadata(e.url);a.layers=r.layers?.map(s)}const{serverUrl:n,portalItem:i}=await(0,r.L)(e.url,{sceneLayerItem:e,customParameters:c(a)?.customParameters}).catch((()=>({serverUrl:null,portalItem:null})));if(null==n)return a.tables=[],a;if(!a.tables&&i){const e=await i.fetchData().catch((()=>null));if(e?.tables)a.tables=e.tables.map(s);else{const r=await t.fetchServiceMetadata(n,{customParameters:c(e)?.customParameters}).catch((()=>null));a.tables=r?.tables?.map(s)}}if(a.tables)for(const r of a.tables)r.url=`${n}/${r.id}`;return a}},47073:(e,a,t)=>{t.d(a,{fromItem:()=>d,n:()=>f});var r=t(55678),n=t(48941),s=t(62950),i=t(34273),c=t(38215),l=t(38133),u=t(40710),o=t(26024),y=t(16339);async function d(e){let{portalItem:a}=e;!a||a instanceof u.default||(a=new u.default(a));const t=await async function(e){await e.load();const a=new i.v;return async function(e){const a=e.className,t=l.S[a];return{constructor:await t(),properties:e.properties}}(await f(e,a))}(a);return new(0,t.constructor)({portalItem:a,...t.properties})}async function f(e,a){switch(e.type){case"3DTiles Service":return{className:"IntegratedMesh3DTilesLayer"};case"CSV":return{className:"CSVLayer"};case"Feature Collection":return async function(e){await e.load();const a=(0,y.Y)(e,"Map Notes"),t=(0,y.Y)(e,"Markup");if(a||t)return{className:"MapNotesLayer"};if((0,y.Y)(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return 1===(0,o.XH)(r)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Feature Service":return async function(e,a){const t=await m(e,a);if("object"==typeof t){const{sourceJSON:e,className:a}=t,r={sourceJSON:e};return null!=t.id&&(r.layerId=t.id),{className:a||"FeatureLayer",properties:r}}return{className:"GroupLayer"}}(e,a);case"Feed":case"Stream Service":return{className:"StreamLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"Group Layer":return{className:"GroupLayer"};case"Image Service":return async function(e,a){await e.load();const t=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(t.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(t.includes("tiled imagery"))return{className:"ImageryTileLayer"};const r=await a.fetchItemData(e),n=r?.layerType;if("ArcGISTiledImageServiceLayer"===n)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===n)return{className:"ImageryLayer"};const s=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),i=s.cacheType?.toLowerCase(),c=s.capabilities?.toLowerCase().includes("tilesonly"),l=s.tileInfo?.format?.toLowerCase()??"",u=null==i&&["jpg","jpeg","png","png8","png24","png32","mixed"].includes(l);return"map"===i||u||c?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e,a);case"KML":return{className:"KMLLayer"};case"Knowledge Graph Layer":return{className:"KnowledgeGraphLayer"};case"Map Service":return async function(e,a){return await async function(e,a){const{tileInfo:t}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return t}(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}(e,a);case"Media Layer":return{className:"MediaLayer"};case"Scene Service":return async function(e,a){const t=await m(e,a,(async()=>{try{if(!e.url)return[];const{serverUrl:t}=await(0,n.L)(e.url,{sceneLayerItem:e}),r=await a.fetchServiceMetadata(t);return r?.tables??[]}catch{return[]}}));if("object"==typeof t){const r={};let n;if(null!=t.id?(r.layerId=t.id,n=`${e.url}/layers/${t.id}`):n=e.url,e.typeKeywords?.length)for(const a of Object.keys(c.XX))if(e.typeKeywords.includes(a))return{className:c.XX[a]};const s=await a.fetchServiceMetadata(n,{customParameters:await a.fetchCustomParameters(e,(e=>(0,o.pJ)(e)?.customParameters))});return{className:c.XX[s?.layerType]||"SceneLayer",properties:r}}if(!1===t){const t=await a.fetchServiceMetadata(e.url);if("Voxel"===t?.layerType)return{className:"VoxelLayer"}}return{className:"GroupLayer"}}(e,a);case"Vector Tile Service":return{className:"VectorTileLayer"};case"WFS":return{className:"WFSLayer"};case"WMS":return{className:"WMSLayer"};case"WMTS":return{className:"WMTSLayer"};default:throw new r.A("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function m(e,a,t){const{url:r,type:n}=e,i="Feature Service"===n;if(!r)return{};if(/\/\d+$/.test(r)){if(i){const t=await a.fetchServiceMetadata(r,{customParameters:await a.fetchCustomParameters(e,(e=>(0,o.pJ)(e)?.customParameters))});return{id:t.id,className:(0,s.K)(t.type),sourceJSON:t}}return{}}await e.load();let c=await a.fetchItemData(e);if(i){const e=await(0,o.bO)(c,r,a),t=w(e);if("object"==typeof t){const a=(0,o.rc)(e,t.id);t.className=(0,o.K8)(a?.layerType)}return t}if("Scene Service"===n&&(c=await(0,o.nu)(e,c,a)),(0,o.XH)(c)>0)return w(c);const l=await a.fetchServiceMetadata(r);return t&&(l.tables=await t()),w(l)}function w(e){return 1===(0,o.XH)(e)&&{id:(0,o.pJ)(e)?.id}}},74643:(e,a,t)=>{t.d(a,{V:()=>n});var r=t(25943);async function n(e,a){const{data:t}=await(0,r.A)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return t}}}]);
//# sourceMappingURL=7073.33b031bc.chunk.js.map