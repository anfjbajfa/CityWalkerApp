"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[7359],{52007:(e,t,n)=>{n.d(t,{a:()=>s,f:()=>a,n:()=>o});var r=n(78393);function o(e,t){s(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function s(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;const s=t.length/2;let a=0,u=0;if((0,r.cy)(t)||(0,r.dk)(t)){for(let r=0;r<s;++r)e[a]=t[u],e[a+1]=t[u+1],a+=n,u+=o;return}const l=(0,r.a3)(t);if((0,r.JI)(t))for(let r=0;r<s;++r)e[a]=Math.max(t[u]/l,-1),e[a+1]=Math.max(t[u+1]/l,-1),a+=n,u+=o;else for(let r=0;r<s;++r)e[a]=t[u]/l,e[a+1]=t[u+1]/l,a+=n,u+=o}function a(e,t,n,r){const o=e.typedBuffer,s=e.typedBufferStride,a=r?.count??e.count;let u=(r?.dstIndex??0)*s;for(let l=0;l<a;++l)o[u]=t,o[u+1]=n,u+=s}Object.freeze(Object.defineProperty({__proto__:null,fill:a,normalizeIntegerBuffer:s,normalizeIntegerBufferView:o},Symbol.toStringTag,{value:"Module"}))},64591:(e,t,n)=>{function r(e,t){o(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function o(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;const o=t.length/r;let s=0,a=0;for(let u=0;u<o;++u)e[s]=t[a],e[s+1]=t[a+1],e[s+2]=t[a+2],s+=n,a+=r}function s(e,t,n,r,o){const s=e.typedBuffer,a=e.typedBufferStride,u=o?.count??e.count;let l=(o?.dstIndex??0)*a;for(let i=0;i<u;++i)s[l]=t,s[l+1]=n,s[l+2]=r,l+=a}n.d(t,{a:()=>r,c:()=>o,f:()=>s});Object.freeze(Object.defineProperty({__proto__:null,copy:o,copyView:r,fill:s},Symbol.toStringTag,{value:"Module"}))},2e3:(e,t,n)=>{function r(e,t){o(e.typedBuffer,t,e.typedBufferStride)}function o(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;const r=t.typedBuffer,o=t.typedBufferStride,s=t.count;let a=0,u=0;for(let l=0;l<s;++l)e[a]=r[u],e[a+1]=r[u+1],e[a+2]=r[u+2],e[a+3]=r[u+3],a+=n,u+=o}function s(e,t,n,r,o,s){const a=e.typedBuffer,u=e.typedBufferStride,l=s?.count??e.count;let i=(s?.dstIndex??0)*u;for(let c=0;c<l;++c)a[i]=t,a[i+1]=n,a[i+2]=r,a[i+3]=o,i+=u}n.d(t,{a:()=>o,c:()=>r,f:()=>s});Object.freeze(Object.defineProperty({__proto__:null,copy:o,copyView:r,fill:s},Symbol.toStringTag,{value:"Module"}))},6381:(e,t,n)=>{function r(e){switch(e){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}n.d(t,{GJ:()=>r})},17359:(e,t,n)=>{n.r(t),n.d(t,{loadGLTFMesh:()=>N});var r=n(69539),o=n(3825),s=n(50076),a=n(87663),u=n(15941),l=n(63919),i=n(44680),c=n(9392),f=n(55855),d=n(79629),p=n(44032),m=n(75257),y=n(63713),g=n(56623),h=n(99773),x=n(88105),T=n(45136),v=n(10947),B=n(6381);Object.freeze(Object.defineProperty({__proto__:null,copy:function(e,t,n){const r=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride,u=n?n.count:t.count;let l=(n?.dstIndex??0)*o,i=(n?.srcIndex??0)*a;for(let c=0;c<u;++c){for(let e=0;e<9;++e)r[l+e]=s[i+e];l+=o,i+=a}}},Symbol.toStringTag,{value:"Module"}));Object.freeze(Object.defineProperty({__proto__:null,copy:function(e,t,n){const r=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride,u=n?n.count:t.count;let l=(n?.dstIndex??0)*o,i=(n?.srcIndex??0)*a;for(let c=0;c<u;++c){for(let e=0;e<16;++e)r[l+e]=s[i+e];l+=o,i+=a}}},Symbol.toStringTag,{value:"Module"}));n(39539);var w=n(52007),b=n(64591),O=n(2e3);function A(e,t){return new e(new ArrayBuffer(t*e.ElementCount*(0,B.GJ)(e.ElementType)))}var E=n(53848),_=n(11109),S=n(56516),R=n(420),C=n(37040),I=n(50791),M=n(93345);async function N(e,t,n){const l=new _.R(function(e){const t=e?.resolveFile;return t?{busy:!1,request:async(e,n,r)=>{const s=t?.(e)??e,a="image"===n?"image":"binary"===n||"image+type"===n?"array-buffer":"json";return(await(0,o.A)(s,{responseType:a,signal:r?.signal,timeout:0})).data}}:null}(n)),i=(await(0,S.loadGLTF)(l,t,n,!0)).model,d=i.lods.shift(),T=new Map,v=new Map;i.textures.forEach(((e,t)=>T.set(t,function(e){return new m.A({data:((0,C.x3)(e.data),e.data),wrap:G(e.parameters.wrap)})}(e)))),i.materials.forEach(((e,t)=>v.set(t,function(e,t){const n=new r.A(function(e,t){return(0,f.fA)(P(e[0]),P(e[1]),P(e[2]),t)}(e.color,e.opacity)),o=e.emissiveFactor?new r.A(function(e){return(0,c.fA)(P(e[0]),P(e[1]),P(e[2]))}(e.emissiveFactor)):null,s=e=>e?new y.A({scale:e.scale?[e.scale[0],e.scale[1]]:[1,1],rotation:(0,u.KJ)(e.rotation??0),offset:e.offset?[e.offset[0],e.offset[1]]:[0,0]}):null;return new p.A({color:n,colorTexture:t.get(e.textureColor),normalTexture:t.get(e.textureNormal),emissiveColor:o,emissiveTexture:t.get(e.textureEmissive),occlusionTexture:t.get(e.textureOcclusion),alphaMode:k(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:t.get(e.textureMetallicRoughness),colorTextureTransform:s(e.colorTextureTransform),normalTextureTransform:s(e.normalTextureTransform),occlusionTextureTransform:s(e.occlusionTextureTransform),emissiveTextureTransform:s(e.emissiveTextureTransform),metallicRoughnessTextureTransform:s(e.metallicRoughnessTextureTransform)})}(e,T))));const B=function(e){let t=0;const n={color:!1,tangent:!1,normal:!1,texCoord0:!1},r=new Map,o=new Map,s=[];for(const u of e.parts){const{attributes:{position:e,normal:l,color:i,tangent:c,texCoord0:f}}=u,d=`\n      ${D(e,r)}/\n      ${D(l,r)}/\n      ${D(i,r)}/\n      ${D(c,r)}/\n      ${D(f,r)}/\n      ${L(u.transform)}\n    `;let p=!1;const m=(0,a.tE)(o,d,(()=>(p=!0,{start:t,length:e.count})));p&&(t+=e.count),l&&(n.normal=!0),i&&(n.color=!0),c&&(n.tangent=!0),f&&(n.texCoord0=!0),s.push({gltf:u,writeVertices:p,region:m})}return{vertexAttributes:{position:A(x.Xm,t),normal:n.normal?A(x.xs,t):null,tangent:n.tangent?A(x.Eq,t):null,color:n.color?A(x.XP,t):null,texCoord0:n.texCoord0?A(x.gH,t):null},parts:s,components:[]}}(d);for(const r of B.parts)U(B,r,v);const{position:w,normal:b,tangent:O,color:R,texCoord0:I}=B.vertexAttributes,M=(0,h.TE)(e,n),N=e.spatialReference.isGeographic?(0,h.TE)(e):M,j=(0,E.UR)({vertexAttributes:{position:w.typedBuffer,normal:b?.typedBuffer,tangent:O?.typedBuffer},vertexSpace:N,spatialReference:e.spatialReference},M,{allowBufferReuse:!0,sourceUnit:n?.unitConversionDisabled?void 0:"meters"});if(!j)throw new s.A("load-gltf-mesh:vertex-space-projection",`Failed to load mesh from glTF because we could not convert the vertex space from ${N.type} to ${M.type}`);return{transform:null,vertexSpace:M,components:B.components,spatialReference:e.spatialReference,vertexAttributes:new g.H({...j,color:R?.typedBuffer,uv:I?.typedBuffer})}}function D(e,t){if(null==e)return"-";const n=e.typedBuffer;return`${(0,a.tE)(t,n.buffer,(()=>t.size))}/${n.byteOffset}/${n.byteLength}`}function L(e){return null!=e?e.toString():"-"}function U(e,t,n){t.writeVertices&&function(e,t){const{position:n,normal:r,tangent:o,color:s,texCoord0:a}=e.vertexAttributes,c=t.region.start,{attributes:f,transform:d}=t.gltf,p=f.position.count;if((0,T.d)(n.slice(c,p),f.position,d),null!=f.normal&&null!=r){const e=(0,l.Ge)((0,i.vt)(),d),t=r.slice(c,p);(0,T.c)(t,f.normal,e),(0,u.or)(e)&&(0,T.e)(t,t)}else null!=r&&(0,b.f)(r,0,0,1,{dstIndex:c,count:p});if(null!=f.tangent&&null!=o){const e=(0,l.z0)((0,i.vt)(),d),t=o.slice(c,p);(0,v.a)(t,f.tangent,e),(0,u.or)(e)&&(0,v.n)(t,t)}else null!=o&&(0,O.f)(o,0,0,1,1,{dstIndex:c,count:p});if(null!=f.texCoord0&&null!=a?(0,w.n)(a.slice(c,p),f.texCoord0):null!=a&&(0,w.f)(a,0,0,{dstIndex:c,count:p}),null!=f.color&&null!=s){const e=f.color,t=s.slice(c,p);if(4===e.elementCount)e instanceof x.Eq?(0,v.s)(t,e,255):e instanceof x.XP?(0,O.c)(t,e):e instanceof x.Uz&&(0,v.s)(t,e,1/256);else{(0,O.f)(t,255,255,255,255);const n=x.eI.fromTypedArray(t.typedBuffer,t.typedBufferStride);e instanceof x.xs?(0,T.s)(n,e,255):e instanceof x.eI?(0,b.a)(n,e):e instanceof x.nS&&(0,T.s)(n,e,1/256)}}else null!=s&&(0,O.f)(s.slice(c,p),255,255,255,255)}(e,t);const{indices:r,attributes:o,primitiveType:s,material:a}=t.gltf;let c=(0,R.x)(r||o.position.count,s);const f=t.region.start;if(f){const e=new Uint32Array(c);for(let t=0;t<c.length;t++)e[t]+=f;c=e}e.components.push(new d.A({name:t.gltf.name,faces:c,material:n.get(a),shading:o.normal?"source":"flat",trustSourceNormals:!0}))}function k(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function G(e){return{horizontal:j(e.s),vertical:j(e.t)}}function j(e){switch(e){case M.pF.CLAMP_TO_EDGE:return"clamp";case M.pF.MIRRORED_REPEAT:return"mirror";case M.pF.REPEAT:return"repeat"}}function P(e){return e**(1/I.T)*255}},11109:(e,t,n)=>{n.d(t,{R:()=>l});var r=n(3825),o=n(98773),s=n(50076),a=n(50346),u=n(90534);class l{constructor(e){this._streamDataRequester=e}async loadJSON(e,t){return this._load("json",e,t)}async loadBinary(e,t){return(0,u.DB)(e)?((0,a.Te)(t),(0,u.lJ)(e)):this._load("binary",e,t)}async loadImage(e,t){return this._load("image",e,t)}async _load(e,t,n){if(null==this._streamDataRequester)return(await(0,r.A)(t,{responseType:i[e]})).data;const u=await(0,o.Ke)(this._streamDataRequester.request(t,e,n));if(!0===u.ok)return u.value;throw(0,a.QP)(u.error),new s.A("glt-loader-request-error",`Request for resource failed: ${u.error}`)}}const i={image:"image",binary:"array-buffer",json:"json","image+type":void 0}},420:(e,t,n)=>{n.d(t,{x:()=>a});var r=n(78393),o=n(38496),s=n(93345);function a(e,t){switch(t){case s.WR.TRIANGLES:return"number"==typeof(n=e)?(0,o.tM)(n):(0,r.mg)(n)?new Uint16Array(n):n;case s.WR.TRIANGLE_STRIP:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return[];const n=t-2,r=(0,o.my)(3*n);if("number"==typeof e){let e=0;for(let t=0;t<n;t+=1)t%2==0?(r[e++]=t,r[e++]=t+1,r[e++]=t+2):(r[e++]=t+1,r[e++]=t,r[e++]=t+2)}else{let t=0;for(let o=0;o<n;o+=1)o%2==0?(r[t++]=e[o],r[t++]=e[o+1],r[t++]=e[o+2]):(r[t++]=e[o+1],r[t++]=e[o],r[t++]=e[o+2])}return r}(e);case s.WR.TRIANGLE_FAN:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const n=t-2,r=n<=65536?new Uint16Array(3*n):new Uint32Array(3*n);if("number"==typeof e){let e=0;for(let t=0;t<n;++t)r[e++]=0,r[e++]=t+1,r[e++]=t+2;return r}const o=e[0];let s=e[1],a=0;for(let u=0;u<n;++u){const t=e[u+2];r[a++]=o,r[a++]=s,r[a++]=t,s=t}return r}(e)}var n}},37040:(e,t,n)=>{n.d(t,{KB:()=>u,Xi:()=>s,pn:()=>l,x3:()=>a});var r=n(81806),o=n(83490);class s{constructor(e){this.data=e,this.type="encoded-mesh-texture",this.encoding=o.JS.KTX2_ENCODING}}function a(e){return"encoded-mesh-texture"===e?.type}async function u(e){const t=new Blob([e]),n=await t.text();return JSON.parse(n)}async function l(e,t){if(t===o.JS.KTX2_ENCODING)return new s(e);const n=new Blob([e],{type:t}),a=URL.createObjectURL(n),u=new Image;if((0,r.A)("esri-iPhone"))return new Promise(((e,t)=>{const n=()=>{o(),e(u)},r=e=>{o(),t(e)},o=()=>{URL.revokeObjectURL(a),u.removeEventListener("load",n),u.removeEventListener("error",r)};u.addEventListener("load",n),u.addEventListener("error",r),u.src=a}));try{u.src=a,await u.decode()}catch(l){console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(a),u}},83490:(e,t,n)=>{var r,o,s,a,u,l,i,c;n.d(t,{Am:()=>a,C7:()=>s,JS:()=>c,Mg:()=>l,dd:()=>u,it:()=>o,s2:()=>r,sf:()=>i}),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(r||(r={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(o||(o={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(s||(s={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(a||(a={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(u||(u={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee"}(l||(l={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(i||(i={})),function(e){e.DDS_ENCODING="image/vnd-ms.dds",e.KTX2_ENCODING="image/ktx2",e.BASIS_ENCODING="image/x.basis"}(c||(c={}))},50791:(e,t,n)=>{n.d(t,{T:()=>r});const r=2.1}}]);
//# sourceMappingURL=7359.9c764447.chunk.js.map