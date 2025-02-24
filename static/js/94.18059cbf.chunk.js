"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[94],{18989:(e,t,r)=>{r.d(t,{a:()=>s,f:()=>a,n:()=>o});var n=r(65271);function o(e,t){s(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function s(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r;const s=t.length/2;let a=0,i=0;if((0,n.cy)(t)||(0,n.dk)(t)){for(let n=0;n<s;++n)e[a]=t[i],e[a+1]=t[i+1],a+=r,i+=o;return}const u=(0,n.a3)(t);if((0,n.JI)(t))for(let n=0;n<s;++n)e[a]=Math.max(t[i]/u,-1),e[a+1]=Math.max(t[i+1]/u,-1),a+=r,i+=o;else for(let n=0;n<s;++n)e[a]=t[i]/u,e[a+1]=t[i+1]/u,a+=r,i+=o}function a(e,t,r,n){const o=e.typedBuffer,s=e.typedBufferStride,a=n?.count??e.count;let i=(n?.dstIndex??0)*s;for(let u=0;u<a;++u)o[i]=t,o[i+1]=r,i+=s}Object.freeze(Object.defineProperty({__proto__:null,fill:a,normalizeIntegerBuffer:s,normalizeIntegerBufferView:o},Symbol.toStringTag,{value:"Module"}))},99077:(e,t,r)=>{function n(e,t){o(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function o(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r;const o=t.length/n;let s=0,a=0;for(let i=0;i<o;++i)e[s]=t[a],e[s+1]=t[a+1],e[s+2]=t[a+2],s+=r,a+=n}function s(e,t,r,n,o){const s=e.typedBuffer,a=e.typedBufferStride,i=o?.count??e.count;let u=(o?.dstIndex??0)*a;for(let l=0;l<i;++l)s[u]=t,s[u+1]=r,s[u+2]=n,u+=a}r.d(t,{a:()=>n,c:()=>o,f:()=>s});Object.freeze(Object.defineProperty({__proto__:null,copy:o,copyView:n,fill:s},Symbol.toStringTag,{value:"Module"}))},19562:(e,t,r)=>{function n(e,t){o(e.typedBuffer,t,e.typedBufferStride)}function o(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;const n=t.typedBuffer,o=t.typedBufferStride,s=t.count;let a=0,i=0;for(let u=0;u<s;++u)e[a]=n[i],e[a+1]=n[i+1],e[a+2]=n[i+2],e[a+3]=n[i+3],a+=r,i+=o}function s(e,t,r,n,o,s){const a=e.typedBuffer,i=e.typedBufferStride,u=s?.count??e.count;let l=(s?.dstIndex??0)*i;for(let c=0;c<u;++c)a[l]=t,a[l+1]=r,a[l+2]=n,a[l+3]=o,l+=i}r.d(t,{a:()=>o,c:()=>n,f:()=>s});Object.freeze(Object.defineProperty({__proto__:null,copy:o,copyView:n,fill:s},Symbol.toStringTag,{value:"Module"}))},35643:(e,t,r)=>{r.d(t,{R:()=>u});var n=r(25943),o=r(71755),s=r(55678),a=r(92976),i=r(89524);class u{constructor(e){this._streamDataRequester=e}async loadJSON(e,t){return this._load("json",e,t)}async loadBinary(e,t){return(0,i.DB)(e)?((0,a.Te)(t),(0,i.lJ)(e)):this._load("binary",e,t)}async loadImage(e,t){return this._load("image",e,t)}async _load(e,t,r){if(null==this._streamDataRequester)return(await(0,n.A)(t,{responseType:l[e]})).data;const i=await(0,o.Ke)(this._streamDataRequester.request(t,e,r));if(!0===i.ok)return i.value;throw(0,a.QP)(i.error),new s.A("glt-loader-request-error",`Request for resource failed: ${i.error}`)}}const l={image:"image",binary:"array-buffer",json:"json","image+type":void 0}},31525:(e,t,r)=>{r.d(t,{G:()=>a});var n=r(71958),o=r(15616),s=r(6862);function a(e){if(null==e)return null;const t=null!=e.offset?e.offset:o.uY,r=null!=e.rotation?e.rotation:0,a=null!=e.scale?e.scale:o.Un,i=(0,n.fA)(1,0,0,0,1,0,t[0],t[1],1),u=(0,n.fA)(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),l=(0,n.fA)(a[0],0,0,0,a[1],0,0,0,1),c=(0,n.vt)();return(0,s.lw)(c,u,l),(0,s.lw)(c,i,c),c}},95574:(e,t,r)=>{r.d(t,{x:()=>a});var n=r(65271),o=r(87934),s=r(5719);function a(e,t){switch(t){case s.WR.TRIANGLES:return"number"==typeof(r=e)?(0,o.tM)(r):(0,n.mg)(r)?new Uint16Array(r):r;case s.WR.TRIANGLE_STRIP:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return[];const r=t-2,n=(0,o.my)(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(n[e++]=t,n[e++]=t+1,n[e++]=t+2):(n[e++]=t+1,n[e++]=t,n[e++]=t+2)}else{let t=0;for(let o=0;o<r;o+=1)o%2==0?(n[t++]=e[o],n[t++]=e[o+1],n[t++]=e[o+2]):(n[t++]=e[o+1],n[t++]=e[o],n[t++]=e[o+2])}return n}(e);case s.WR.TRIANGLE_FAN:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)n[e++]=0,n[e++]=t+1,n[e++]=t+2;return n}const o=e[0];let s=e[1],a=0;for(let i=0;i<r;++i){const t=e[i+2];n[a++]=o,n[a++]=s,n[a++]=t,s=t}return n}(e)}var r}},64910:(e,t,r)=>{r.d(t,{KB:()=>i,Xi:()=>s,pn:()=>u,x3:()=>a});var n=r(27052),o=r(83636);class s{constructor(e){this.data=e,this.type="encoded-mesh-texture",this.encoding=o.JS.KTX2_ENCODING}}function a(e){return"encoded-mesh-texture"===e?.type}async function i(e){const t=new Blob([e]),r=await t.text();return JSON.parse(r)}async function u(e,t){if(t===o.JS.KTX2_ENCODING)return new s(e);const r=new Blob([e],{type:t}),a=URL.createObjectURL(r),i=new Image;if((0,n.A)("esri-iPhone"))return new Promise(((e,t)=>{const r=()=>{o(),e(i)},n=e=>{o(),t(e)},o=()=>{URL.revokeObjectURL(a),i.removeEventListener("load",r),i.removeEventListener("error",n)};i.addEventListener("load",r),i.addEventListener("error",n),i.src=a}));try{i.src=a,await i.decode()}catch(u){console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(a),i}},90094:(e,t,r)=>{r.d(t,{fetch:()=>ee});var n=r(45733),o=r(37819),s=r(6862),a=r(71958),i=r(26895),u=r(30185),l=r(16687),c=r(68358),f=r(90646),d=r(52476),m=r(60336),p=r(83661),y=r(86030),h=r(97035),g=r(18989),x=r(99077),b=r(19562),w=r(35643),v=r(95574),T=r(64910),R=r(31525);class B{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class A{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new B,this.numberOfVertices=0}}var S=r(25943),M=r(71755),I=r(69545),O=r(55678),E=r(11434),P=r(44959),_=r(92976),U=r(90696),L=r(87934),C=r(44729),F=r(56254),k=r(83636),N=r(57665),j=r(32920),G=r(64216),q=r(99112),D=r(5719);const V=()=>E.A.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function $(e,t){const r=await async function(e,t){const r=t?.streamDataRequester;if(r)return async function(e,t,r){const n=await(0,M.Ke)(t.request(e,"json",r));if(!0===n.ok)return n.value;(0,_.QP)(n.error),z(n.error.details.url)}(e,r,t);const n=await(0,M.Ke)((0,S.A)(e,t));if(!0===n.ok)return n.value.data;(0,_.QP)(n.error),z(n.error)}(e,t),n=await async function(e,t){const r=new Array;for(const s in e){const n=e[s],o=n.images[0].data;if(!o){V().warn("Externally referenced texture data is not yet supported");continue}const a=n.encoding+";base64,"+o,i="/textureDefinitions/"+s,u="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",l={noUnpackFlip:!0,wrap:{s:D.pF.REPEAT,t:D.pF.REPEAT},preMultiplyAlpha:K(u)!==k.sf.Opaque},c=t?.disableTextures?Promise.resolve(null):(0,C.D)(a,t);r.push(c.then((e=>({refId:i,image:e,parameters:l,alphaChannelUsage:u}))))}const n=await Promise.all(r),o={};for(const s of n)o[s.refId]=s;return o}(r.textureDefinitions??{},t);let o=0;for(const s in n)if(n.hasOwnProperty(s)){const e=n[s];o+=e?.image?e.image.width*e.image.height*4:0}return{resource:r,textures:n,size:o+(0,I.iL)(r)}}function z(e){throw new O.A("",`Request for object resource failed: ${e}`)}function W(e){const t=e.params,r=t.topology;let n=!0;switch(t.vertexAttributes||(V().warn("Geometry must specify vertex attributes"),n=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t?.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(V().warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),n=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(V().warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),n=!1)):(V().warn(`Indexed geometry does not specify face indices for '${r}' attribute`),n=!1)}}else V().warn("Indexed geometries must specify faces"),n=!1;break}default:V().warn(`Unsupported topology '${r}'`),n=!1}e.params.material||(V().warn("Geometry requires material"),n=!1);const o=e.params.vertexAttributes;for(const s in o)o[s].values||(V().warn("Geometries with externally defined attributes are not yet supported"),n=!1);return n}function J(e){const t=(0,d.Ie)();return e.forEach((e=>{const r=e.boundingInfo;null!=r&&((0,d.iT)(t,r.bbMin),(0,d.iT)(t,r.bbMax))})),t}function K(e){switch(e){case"mask":return k.sf.Mask;case"maskAndTransparency":return k.sf.MaskBlend;case"none":return k.sf.Opaque;default:return k.sf.Blend}}function X(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Q=new U.R(1,2,"wosr");var H=r(56172),Y=r(50977),Z=r(50550);async function ee(e,t){const a=function(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}((0,n.EM)(e));if("wosr"===a.fileType){const e=await(t.cache?t.cache.loadWOSR(a.url,t):$(a.url,t)),{engineResources:r,referenceBoundingBox:n}=function(e,t){const r=new Array,n=new Array,o=new Array,s=new P.O,a=e.resource,i=U.R.parse(a.version||"1.0","wosr");Q.validate(i);const u=a.model.name,l=a.model.geometries,c=a.materialDefinitions??{},d=e.textures;let m=0;const p=new Map;for(let y=0;y<l.length;y++){const e=l[y];if(!W(e))continue;const a=X(e),i=e.params.vertexAttributes,u=[],h=t=>{if("PerAttributeArray"===e.params.topology)return null;const r=e.params.faces;for(const e in r)if(e===t)return r[e].values;return null},g=i[G.r.POSITION],x=g.values.length/g.valuesPerElement;for(const t in i){const e=i[t],r=e.values,n=h(t)??(0,L.tM)(x);u.push([t,new F.n(r,n,e.valuesPerElement,!0)])}const b=a.texture,w=d&&d[b];if(w&&!p.has(b)){const{image:e,parameters:t}=w,r=new j.g(e,t);n.push(r),p.set(b,r)}const v=p.get(b),T=v?v.id:void 0,R=a.material;let B=s.get(R,b);if(null==B){const e=c[R.slice(R.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=w&&w.alphaChannelUsage,n=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,o=w?K(w.alphaChannelUsage):void 0,a={ambient:(0,f.ci)(e.diffuse),diffuse:(0,f.ci)(e.diffuse),opacity:1-(e.transparency||0),transparent:n,textureAlphaMode:o,textureAlphaCutoff:.33,textureId:T,initTextureTransparent:!0,doubleSided:!0,cullFace:k.s2.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:w?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(a,t.materialParameters),B=new q.$U(a,t),s.set(R,b,B)}o.push(B);const A=new N.V(B,u);m+=u.find((e=>e[0]===G.r.POSITION))?.[1]?.indices.length??0,r.push(A)}return{engineResources:[{name:u,stageResources:{textures:n,materials:o,geometries:r},pivotOffset:a.model.pivotOffset,numberOfVertices:m,lodThreshold:null}],referenceBoundingBox:J(r)}}(e,t);return{lods:r,referenceBoundingBox:n,isEsriSymbolResource:!1,isWosr:!0}}let B;if(t.cache)B=await t.cache.loadGLTF(a.url,t,!!t.usePBR);else{const{loadGLTF:e}=await r.e(286).then(r.bind(r,70286));B=await e(new w.R(t.streamDataRequester),a.url,t,t.usePBR)}const S=B.model.meta?.ESRI_proxyEllipsoid,M=B.meta.isEsriSymbolResource&&null!=S&&"EsriRealisticTreesStyle"===B.meta.ESRI_webstyle;M&&!B.customMeta.esriTreeRendering&&(B.customMeta.esriTreeRendering=!0,function(e,t){for(let r=0;r<e.model.lods.length;++r){const n=e.model.lods[r];for(const o of n.parts){const n=o.attributes.normal;if(null==n)return;const s=o.attributes.position,a=s.count,l=(0,f.vt)(),d=(0,f.vt)(),m=(0,f.vt)(),y=new Uint8Array(4*a),h=new Float64Array(3*a),g=(0,i.B8)((0,u.vt)(),o.transform);let x=0,b=0;for(let i=0;i<a;i++){s.getVec(i,d),n.getVec(i,l),(0,c.t)(d,d,o.transform),(0,c.d)(m,d,t.center),(0,c.E)(m,m,t.radius);const a=m[2],u=(0,c.l)(m),f=Math.min(.45+.55*u*u,1);(0,c.E)(m,m,t.radius),null!==g&&(0,c.t)(m,m,g),(0,c.n)(m,m),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,c.m)(m,m,l,a>-1?.2:Math.min(-4*a-3.8,1)),h[x]=m[0],h[x+1]=m[1],h[x+2]=m[2],x+=3,y[b]=255*f,y[b+1]=255*f,y[b+2]=255*f,y[b+3]=255,b+=4}o.attributes.normal=new p.xs(h),o.attributes.color=new p.XP(y)}}}(B,S));const I=!!t.usePBR,O=B.meta.isEsriSymbolResource?{usePBR:I,isSchematic:!1,treeRendering:M,mrrFactors:Z.SY}:{usePBR:I,isSchematic:!1,treeRendering:!1,mrrFactors:Z.mb},E={...t.materialParameters,treeRendering:M},{engineResources:_,referenceBoundingBox:C}=function(e,t,r,n,a){const i=e.model,u=new Array,c=new Map,f=new Map,w=i.lods.length,B=(0,d.Ie)();return i.lods.forEach(((e,S)=>{const M=!0===n.skipHighLods&&(w>1&&0===S||w>3&&1===S)||!1===n.skipHighLods&&null!=a&&S!==a;if(M&&0!==S)return;const I=new A(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const a=M?new q.$U({},n):function(e,t,r,n,o,s,a,i){const u=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),c=e.materials.get(t.material),f=null!=t.attributes.texCoord0,d=null!=t.attributes.normal;if(null==c)return null;const m=function(e){switch(e){case"BLEND":return k.sf.Blend;case"MASK":return k.sf.Mask;case"OPAQUE":case null:case void 0:return k.sf.Opaque}}(c.alphaMode);if(!s.has(u)){if(f){const t=function(t){let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(null!=t&&!a.has(t)){const n=e.textures.get(t);if(null!=n){const e=n.data;a.set(t,new j.g((0,T.x3)(e)?e.data:e,{...n.parameters,preMultiplyAlpha:!(0,T.x3)(e)&&r,encoding:(0,T.x3)(e)&&null!=e.encoding?e.encoding:void 0}))}}};t(c.textureColor,m!==k.sf.Opaque),t(c.textureNormal),t(c.textureOcclusion),t(c.textureEmissive),t(c.textureMetallicRoughness)}const r=c.color[0]**(1/Y.T),p=c.color[1]**(1/Y.T),y=c.color[2]**(1/Y.T),h=c.emissiveFactor[0]**(1/Y.T),g=c.emissiveFactor[1]**(1/Y.T),x=c.emissiveFactor[2]**(1/Y.T),b=null!=c.textureColor&&f?a.get(c.textureColor):null,w=(0,Z.Jr)({normalTexture:c.textureNormal,metallicRoughnessTexture:c.textureMetallicRoughness,metallicFactor:c.metallicFactor,roughnessFactor:c.roughnessFactor,emissiveTexture:c.textureEmissive,emissiveFactor:c.emissiveFactor,occlusionTexture:c.textureOcclusion}),v=null!=c.normalTextureTransform?.scale?c.normalTextureTransform?.scale:l.Un;s.set(u,new q.$U({...n,transparent:m===k.sf.Blend,customDepthTest:k.it.Lequal,textureAlphaMode:m,textureAlphaCutoff:c.alphaCutoff,diffuse:[r,p,y],ambient:[r,p,y],opacity:c.opacity,doubleSided:c.doubleSided,doubleSidedType:"winding-order",cullFace:c.doubleSided?k.s2.None:k.s2.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:d?H.W.Attribute:H.W.ScreenDerivative,castShadows:!0,receiveShadows:c.receiveShadows,receiveAmbientOcclusion:c.receiveAmbientOcclustion,textureId:null!=b?b.id:void 0,colorMixMode:c.colorMixMode,normalTextureId:null!=c.textureNormal&&f?a.get(c.textureNormal).id:void 0,textureAlphaPremultiplied:null!=b&&!!b.parameters.preMultiplyAlpha,occlusionTextureId:null!=c.textureOcclusion&&f?a.get(c.textureOcclusion).id:void 0,emissiveTextureId:null!=c.textureEmissive&&f?a.get(c.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=c.textureMetallicRoughness&&f?a.get(c.textureMetallicRoughness).id:void 0,emissiveFactor:[h,g,x],mrrFactors:w?Z.Bt:[c.metallicFactor,c.roughnessFactor,n.mrrFactors[2]],isSchematic:w,colorTextureTransformMatrix:(0,R.G)(c.colorTextureTransform),normalTextureTransformMatrix:(0,R.G)(c.normalTextureTransform),scale:[v[0],v[1]],occlusionTextureTransformMatrix:(0,R.G)(c.occlusionTextureTransform),emissiveTextureTransformMatrix:(0,R.G)(c.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:(0,R.G)(c.metallicRoughnessTextureTransform),...o},i))}const p=s.get(u);if(r.stageResources.materials.push(p),f){const e=e=>{null!=e&&r.stageResources.textures.push(a.get(e))};e(c.textureColor),e(c.textureNormal),e(c.textureOcclusion),e(c.textureEmissive),e(c.textureMetallicRoughness)}return p}(i,e,I,t,r,c,f,n),{geometry:u,vertexCount:w}=function(e,t){const r=e.attributes.position.count,n=(0,v.x)(e.indices||r,e.primitiveType),a=(0,m.oe)(3*r),{typedBuffer:i,typedBufferStride:u}=e.attributes.position;(0,y.t)(a,i,e.transform,3,u);const l=[[G.r.POSITION,new F.n(a,n,3,!0)]];if(null!=e.attributes.normal){const t=(0,m.oe)(3*r),{typedBuffer:a,typedBufferStride:i}=e.attributes.normal;(0,s.Ge)(te,e.transform),(0,y.b)(t,a,te,3,i),(0,o.or)(te)&&(0,y.n)(t,t),l.push([G.r.NORMAL,new F.n(t,n,3,!0)])}if(null!=e.attributes.tangent){const t=(0,m.oe)(4*r),{typedBuffer:a,typedBufferStride:i}=e.attributes.tangent;(0,s.z0)(te,e.transform),(0,h.t)(t,a,te,4,i),(0,o.or)(te)&&(0,y.n)(t,t,4),l.push([G.r.TANGENT,new F.n(t,n,4,!0)])}if(null!=e.attributes.texCoord0){const t=(0,m.oe)(2*r),{typedBuffer:o,typedBufferStride:s}=e.attributes.texCoord0;(0,g.a)(t,o,2,s),l.push([G.r.UV0,new F.n(t,n,2,!0)])}const c=e.attributes.color;if(null!=c){const t=new Uint8Array(4*r);4===c.elementCount?c instanceof p.Eq?(0,h.b)(t,c,255):c instanceof p.XP?(0,b.a)(t,c):c instanceof p.Uz&&(0,h.b)(t,c,1/256):(t.fill(255),c instanceof p.xs?(0,y.f)(t,c.typedBuffer,255,4,c.typedBufferStride):e.attributes.color instanceof p.eI?(0,x.c)(t,c.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof p.nS&&(0,y.f)(t,c.typedBuffer,1/256,4,c.typedBufferStride)),l.push([G.r.COLOR,new F.n(t,n,4,!0)])}return{geometry:new N.V(t,l),vertexCount:r}}(e,a??new q.$U({},n)),A=u.boundingInfo;null!=A&&0===S&&((0,d.iT)(B,A.bbMin),(0,d.iT)(B,A.bbMax)),null!=a&&(I.stageResources.geometries.push(u),I.numberOfVertices+=w)})),M||u.push(I)})),{engineResources:u,referenceBoundingBox:B}}(B,O,E,t,a.specifiedLodIndex);return{lods:_,referenceBoundingBox:C,isEsriSymbolResource:B.meta.isEsriSymbolResource,isWosr:!1}}const te=(0,a.vt)()},50977:(e,t,r)=>{r.d(t,{T:()=>n});const n=2.1}}]);
//# sourceMappingURL=94.18059cbf.chunk.js.map