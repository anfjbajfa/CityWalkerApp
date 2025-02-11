"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[904],{74e3:(t,e,s)=>{s.d(e,{CI:()=>n,fk:()=>a});s(81806);var r=s(15941),i=s(80963);function n(t,e){return t===e||null!=t&&null!=e&&(0,i.aI)(t.spatialReference,e.spatialReference)&&t.x===e.x&&t.y===e.y&&t.z===e.z&&t.m===e.m}function a(t,e,s){return t===e||null!=t&&null!=e&&(0,i.aI)(t.spatialReference,e.spatialReference)&&(0,r.Sp)(t.x,e.x,s)&&(0,r.Sp)(t.y,e.y,s)&&(0,r.Sp)(t.z??0,e.z??0,s)&&(0,r.Sp)(t.m??0,e.m??0,s)}},99784:(t,e,s)=>{s.d(e,{HP:()=>n,N3:()=>a,RW:()=>u,Uz:()=>c,iQ:()=>h,jy:()=>o,w9:()=>l});s(81806),s(78393),s(13312);var r=s(42294),i=s(2413);s(76279),s(31608),s(44135),s(74e3);class n{constructor(t,e,s){this.uid=t,this.geometry=e,this.attributes=s,this.visible=!0,this.objectId=null,this.centroid=null}}function a(t){return null!=t.geometry}class o{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}function l(t,e){switch((0,r.Ie)(e),"mesh"===t.type&&(t=t.extent),t.type){case"point":e[0]=e[3]=t.x,e[1]=e[4]=t.y,t.hasZ&&(e[2]=e[5]=t.z);break;case"polyline":for(let s=0;s<t.paths.length;s++)(0,r.Jf)(e,t.paths[s],!!t.hasZ);break;case"polygon":for(let s=0;s<t.rings.length;s++)(0,r.Jf)(e,t.rings[s],!!t.hasZ);break;case"multipoint":(0,r.Jf)(e,t.points,!!t.hasZ);break;case"extent":e[0]=t.xmin,e[1]=t.ymin,e[3]=t.xmax,e[4]=t.ymax,null!=t.zmin&&(e[2]=t.zmin),null!=t.zmax&&(e[5]=t.zmax)}}function h(t,e){switch((0,i.Ie)(e),"mesh"===t.type&&(t=t.extent),t.type){case"point":e[0]=e[2]=t.x,e[1]=e[3]=t.y;break;case"polyline":for(let s=0;s<t.paths.length;s++)(0,i.Jf)(e,t.paths[s]);break;case"polygon":for(let s=0;s<t.rings.length;s++)(0,i.Jf)(e,t.rings[s]);break;case"multipoint":(0,i.Jf)(e,t.points);break;case"extent":e[0]=t.xmin,e[1]=t.ymin,e[2]=t.xmax,e[3]=t.ymax}}function u(t,e){return null!=t.objectId?t.objectId:t.attributes&&e?t.attributes[e]:null}function c(t,e,s,r){if(e?.size&&null!=s&&t)for(const i in t){if(!e.has(i))continue;const n=t[i];"string"==typeof n&&n.length>s&&(r(i),t[i]="")}}},20904:(t,e,s)=>{s.r(e),s.d(e,{default:()=>b});var r=s(4212),i=s(90632),n=s(13312),a=s(86729),o=s(99784),l=s(98618),h=s(44135);function u(t,e){return e}function c(t,e,s,r){switch(s){case 0:return m(t,e+r,0);case 1:return"lowerLeft"===t.originPosition?m(t,e+r,1):function(t,e,s){let{translate:r,scale:i}=t;return r[s]-e*i[s]}(t,e+r,1)}}function p(t,e,s,r){return 2===s?m(t,e,2):c(t,e,s,r)}function d(t,e,s,r){return 2===s?m(t,e,3):c(t,e,s,r)}function f(t,e,s,r){return 3===s?m(t,e,3):p(t,e,s,r)}function m(t,e,s){let{translate:r,scale:i}=t;return r[s]+e*i[s]}class y{constructor(t){this._options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=u,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{},this._missingAttributes=[]}get missingAttributes(){return this._missingAttributes}createFeatureResult(){return new o.jy}finishFeatureResult(t){if(this._options.applyTransform&&(t.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!t.hasZ)return;const e=(0,a.N)(t.geometryType,this._options.sourceSpatialReference,t.spatialReference);if(null!=e)for(const s of t.features)e(s.geometry)}createSpatialReference(){return new n.A}addField(t,e){t.fields.push(h.A.fromJSON(e));const s=t.fields.map((t=>t.name));this._attributesConstructor=function(){for(const t of s)this[t]=null}}addFeature(t,e){const s=this._options.maxStringAttributeLength,r=this._options.maxStringAttributeFields;(0,o.Uz)(e.attributes,r,s,(s=>{const r=e.attributes[t.objectIdFieldName];null!=r&&this._missingAttributes.push({objectId:r,attribute:s})})),t.features.push(e)}addQueryGeometry(t,e){const{queryGeometry:s,queryGeometryType:r}=e,i=(0,l.Ch)(s.clone(),s,!1,!1,this._transform),n=(0,l.zv)(i,r,!1,!1);let a=null;switch(r){case"esriGeometryPoint":a="point";break;case"esriGeometryPolygon":a="polygon";break;case"esriGeometryPolyline":a="polyline";break;case"esriGeometryMultipoint":a="multipoint"}n.type=a,t.queryGeometryType=r,t.queryGeometry=n}prepareFeatures(t){switch(this._transform=t.transform??null,this._options.applyTransform&&t.transform&&(this._applyTransform=this._deriveApplyTransform(t)),this._vertexDimension=2,t.hasZ&&this._vertexDimension++,t.hasM&&this._vertexDimension++,t.geometryType){case"point":this.addCoordinate=(t,e,s)=>this.addCoordinatePoint(t,e,s),this.createGeometry=t=>this.createPointGeometry(t);break;case"polygon":this.addCoordinate=(t,e,s)=>this._addCoordinatePolygon(t,e,s),this.createGeometry=t=>this._createPolygonGeometry(t);break;case"polyline":this.addCoordinate=(t,e,s)=>this._addCoordinatePolyline(t,e,s),this.createGeometry=t=>this._createPolylineGeometry(t);break;case"multipoint":this.addCoordinate=(t,e,s)=>this._addCoordinateMultipoint(t,e,s),this.createGeometry=t=>this._createMultipointGeometry(t);break;case"mesh":case"extent":break;default:(0,r.Xb)(t.geometryType)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,new o.HP((0,i.c)(),null,new this._attributesConstructor)}allocateCoordinates(){const t=this._lengths.reduce(((t,e)=>t+e),0);this._coordinateBuffer=new Float64Array(t*this._vertexDimension),this._coordinateBufferPtr=0}addLength(t,e){0===this._lengths.length&&(this._toAddInCurrentPath=e),this._lengths.push(e)}createPointGeometry(t){const e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e}addCoordinatePoint(t,e,s){const r=this._transform?this._applyTransform(this._transform,e,s,0):e;if(null!=r)switch(s){case 0:t.x=r;break;case 1:t.y=r;break;case 2:t.hasZ?t.z=r:t.m=r;break;case 3:t.m=r}}_transformPathLikeValue(t,e){let s=0;return e<=1&&(s=this._previousCoordinate[e],this._previousCoordinate[e]+=t),this._transform?this._applyTransform(this._transform,t,e,s):t}_addCoordinatePolyline(t,e,s){this._dehydratedAddPointsCoordinate(t.paths,e,s)}_addCoordinatePolygon(t,e,s){this._dehydratedAddPointsCoordinate(t.rings,e,s)}_addCoordinateMultipoint(t,e,s){0===s&&t.points.push([]);const r=this._transformPathLikeValue(e,s);t.points[t.points.length-1].push(r)}_createPolygonGeometry(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,e,s){0===s&&0==this._toAddInCurrentPath--&&(t.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const r=this._transformPathLikeValue(e,s),i=t[t.length-1],n=this._coordinateBuffer;if(n){if(0===s){const t=this._coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT;i.push(new Float64Array(n.buffer,t,this._vertexDimension))}n[this._coordinateBufferPtr++]=r}}_deriveApplyTransform(t){const{hasZ:e,hasM:s}=t;return e&&s?f:e?p:s?d:c}}var _=s(89122);class g{_parseFeatureQuery(t){const e=new y(t.options),s=(0,_.m)(t.buffer,e),r={...s,spatialReference:s.spatialReference?.toJSON(),fields:s.fields?s.fields.map((t=>t.toJSON())):void 0,missingAttributes:e.missingAttributes};return Promise.resolve(r)}}function b(){return new g}}}]);
//# sourceMappingURL=904.284c5cf2.chunk.js.map