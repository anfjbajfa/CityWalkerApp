"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[5034],{41222:(t,n,e)=>{e.d(n,{A6:()=>g,B8:()=>M,Xd:()=>l,Xr:()=>p,Yc:()=>I,hZ:()=>E,lw:()=>f,t2:()=>z,x8:()=>u});var r=e(71958),o=e(59458),s=e(90646),a=e(19068),i=e(68358),c=e(32345);function u(t,n,e){e*=.5;const r=Math.sin(e);return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=Math.cos(e),t}function l(t,n){const e=2*Math.acos(n[3]),r=Math.sin(e/2);return r>(0,a.FD)()?(t[0]=n[0]/r,t[1]=n[1]/r,t[2]=n[2]/r):(t[0]=1,t[1]=0,t[2]=0),e}function f(t,n,e){const r=n[0],o=n[1],s=n[2],a=n[3],i=e[0],c=e[1],u=e[2],l=e[3];return t[0]=r*l+a*i+o*u-s*c,t[1]=o*l+a*c+s*i-r*u,t[2]=s*l+a*u+r*c-o*i,t[3]=a*l-r*i-o*c-s*u,t}function h(t,n,e,r){const o=n[0],s=n[1],i=n[2],c=n[3];let u,l,f,h,M,p=e[0],A=e[1],g=e[2],m=e[3];return l=o*p+s*A+i*g+c*m,l<0&&(l=-l,p=-p,A=-A,g=-g,m=-m),1-l>(0,a.FD)()?(u=Math.acos(l),f=Math.sin(u),h=Math.sin((1-r)*u)/f,M=Math.sin(r*u)/f):(h=1-r,M=r),t[0]=h*o+M*p,t[1]=h*s+M*A,t[2]=h*i+M*g,t[3]=h*c+M*m,t}function M(t,n){const e=n[0],r=n[1],o=n[2],s=n[3],a=e*e+r*r+o*o+s*s,i=a?1/a:0;return t[0]=-e*i,t[1]=-r*i,t[2]=-o*i,t[3]=s*i,t}function p(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t}function A(t,n){const e=n[0]+n[4]+n[8];let r;if(e>0)r=Math.sqrt(e+1),t[3]=.5*r,r=.5/r,t[0]=(n[5]-n[7])*r,t[1]=(n[6]-n[2])*r,t[2]=(n[1]-n[3])*r;else{let e=0;n[4]>n[0]&&(e=1),n[8]>n[3*e+e]&&(e=2);const o=(e+1)%3,s=(e+2)%3;r=Math.sqrt(n[3*e+e]-n[3*o+o]-n[3*s+s]+1),t[e]=.5*r,r=.5/r,t[3]=(n[3*o+s]-n[3*s+o])*r,t[o]=(n[3*o+e]+n[3*e+o])*r,t[s]=(n[3*s+e]+n[3*e+s])*r}return t}function g(t,n,e,r){const o=.5*Math.PI/180;n*=o,e*=o,r*=o;const s=Math.sin(n),a=Math.cos(n),i=Math.sin(e),c=Math.cos(e),u=Math.sin(r),l=Math.cos(r);return t[0]=s*c*l-a*i*u,t[1]=a*i*l+s*c*u,t[2]=a*c*u-s*i*l,t[3]=a*c*l+s*i*u,t}const m=c.c,E=c.s,d=c.g,w=f,S=c.d,v=c.h,L=c.l,C=c.j,y=C,P=c.b,N=P,O=c.n,z=c.a,_=c.e;function I(t,n,e){const r=(0,i.f)(n,e);return r<-.999999?((0,i.e)(T,F,n),(0,i.G)(T)<1e-6&&(0,i.e)(T,D,n),(0,i.n)(T,T),u(t,T,Math.PI),t):r>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):((0,i.e)(T,n,e),t[0]=T[0],t[1]=T[1],t[2]=T[2],t[3]=1+r,O(t,t))}const T=(0,s.vt)(),F=(0,s.fA)(1,0,0),D=(0,s.fA)(0,1,0);const R=(0,o.vt)(),Z=(0,o.vt)();const k=(0,r.vt)();Object.freeze(Object.defineProperty({__proto__:null,add:d,calculateW:function(t,n){const e=n[0],r=n[1],o=n[2];return t[0]=e,t[1]=r,t[2]=o,t[3]=Math.sqrt(Math.abs(1-e*e-r*r-o*o)),t},conjugate:p,copy:m,dot:v,equals:_,exactEquals:z,fromEuler:g,fromMat3:A,getAxisAngle:l,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},invert:M,len:y,length:C,lerp:L,mul:w,multiply:f,normalize:O,random:function(t){const n=a.Ov,e=n(),r=n(),o=n(),s=Math.sqrt(1-e),i=Math.sqrt(e);return t[0]=s*Math.sin(2*Math.PI*r),t[1]=s*Math.cos(2*Math.PI*r),t[2]=i*Math.sin(2*Math.PI*o),t[3]=i*Math.cos(2*Math.PI*o),t},rotateX:function(t,n,e){e*=.5;const r=n[0],o=n[1],s=n[2],a=n[3],i=Math.sin(e),c=Math.cos(e);return t[0]=r*c+a*i,t[1]=o*c+s*i,t[2]=s*c-o*i,t[3]=a*c-r*i,t},rotateY:function(t,n,e){e*=.5;const r=n[0],o=n[1],s=n[2],a=n[3],i=Math.sin(e),c=Math.cos(e);return t[0]=r*c-s*i,t[1]=o*c+a*i,t[2]=s*c+r*i,t[3]=a*c-o*i,t},rotateZ:function(t,n,e){e*=.5;const r=n[0],o=n[1],s=n[2],a=n[3],i=Math.sin(e),c=Math.cos(e);return t[0]=r*c+o*i,t[1]=o*c-r*i,t[2]=s*c+a*i,t[3]=a*c-s*i,t},rotationTo:I,scale:S,set:E,setAxes:function(t,n,e,r){const o=k;return o[0]=e[0],o[3]=e[1],o[6]=e[2],o[1]=r[0],o[4]=r[1],o[7]=r[2],o[2]=-n[0],o[5]=-n[1],o[8]=-n[2],O(t,A(t,o))},setAxisAngle:u,slerp:h,sqlerp:function(t,n,e,r,o,s){return h(R,n,o,s),h(Z,e,r,s),h(t,R,Z,2*s*(1-s)),t},sqrLen:N,squaredLength:P,str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}},Symbol.toStringTag,{value:"Module"}))},36759:(t,n,e)=>{e.d(n,{l:()=>u});var r=e(37819),o=e(26895),s=e(90646),a=e(45495),i=e(55780),c=e(38609);function u(t,n,e,r){if(null==t||null==r)return!1;const s=(0,i.Qk)(t,i.Wv),u=(0,i.Qk)(r,i.zp);if(s===u&&!l(u)&&(s!==i.rz.UNKNOWN||(0,c.aI)(t,r)))return(0,o.kN)(e,n),!0;if(l(u)){const t=i.w5[s][i.rz.LON_LAT],r=i.w5[i.rz.LON_LAT][u];return null!=t&&null!=r&&(t(n,0,h,0),r(h,0,M,0),(0,a.z)(f*h[0],f*h[1],e),e[12]=M[0],e[13]=M[1],e[14]=M[2],!0)}const p=l(s);if((u===i.rz.WEB_MERCATOR||u===i.rz.PLATE_CARREE||u===i.rz.WGS84||u===i.rz.CGCS2000)&&(s===i.rz.WGS84||p||s===i.rz.WEB_MERCATOR||s===i.rz.CGCS2000)){const t=i.w5[s][i.rz.LON_LAT],r=i.w5[i.rz.LON_LAT][u];return null!=t&&null!=r&&(t(n,0,h,0),r(h,0,M,0),p?(0,a.Z)(f*h[0],f*h[1],e):(0,o.D_)(e),e[12]=M[0],e[13]=M[1],e[14]=M[2],!0)}return!1}function l(t){return t===i.rz.SPHERICAL_ECEF||t===i.rz.SPHERICAL_MARS_PCPF||t===i.rz.SPHERICAL_MOON_PCPF||t===i.rz.WGS84_ECEF}const f=(0,r.kU)(1),h=(0,s.vt)(),M=(0,s.vt)()},45495:(t,n,e)=>{e.d(n,{Z:()=>s,z:()=>o});var r=e(26895);function o(t,n,e){const r=Math.sin(t),o=Math.cos(t),s=Math.sin(n),a=Math.cos(n),i=e;return i[0]=-r,i[4]=-s*o,i[8]=a*o,i[12]=0,i[1]=o,i[5]=-s*r,i[9]=a*r,i[13]=0,i[2]=0,i[6]=a,i[10]=s,i[14]=0,i[3]=0,i[7]=0,i[11]=0,i[15]=1,i}function s(t,n,e){return o(t,n,e),(0,r.mg)(e,e),e}},18704:(t,n,e)=>{e.d(n,{Y0:()=>u,lO:()=>l});var r=e(38825),o=e(34614),s=e(38609);const a=new o.A(r.fv),i=new o.A(r.FY),c=new o.A(r.LJ),u=new o.A(r.Ro);function l(t){const n=f.get(t);if(n)return n;let e=a;if(t)if(t===i)e=i;else if(t===c)e=c;else{const n=t.wkid,r=t.latestWkid;if(null!=n||null!=r)(0,s.tl)(n)||(0,s.tl)(r)?e=i:((0,s.ZL)(n)||(0,s.ZL)(r))&&(e=c);else{const n=t.wkt2??t.wkt;if(n){const t=n.toUpperCase();t===h?e=i:t===M&&(e=c)}}}return f.set(t,e),e}const f=new Map,h=i.wkt.toUpperCase(),M=c.wkt.toUpperCase()},24749:(t,n,e)=>{e.d(n,{V:()=>s,f:()=>a});e(77844);var r=e(71312),o=e(65433);function s(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i;return new o.A({x:t[e.originX],y:t[e.originY],z:t[e.originZ],spatialReference:n})}function a(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;return new r.A({translation:[t[n.translationX],-t[n.translationZ],t[n.translationY]],rotationAxis:[t[n.rotationX],-t[n.rotationZ],t[n.rotationY]],rotationAngle:t[n.rotationDeg],scale:[t[n.scaleX],t[n.scaleZ],t[n.scaleY]]})}const i={originX:"originX",originY:"originY",originZ:"originZ",translationX:"translationX",translationY:"translationY",translationZ:"translationZ",scaleX:"scaleX",scaleY:"scaleY",scaleZ:"scaleZ",rotationX:"rotationX",rotationY:"rotationY",rotationZ:"rotationZ",rotationDeg:"rotationDeg"}},92270:(t,n,e)=>{e.r(n),e.d(n,{assetMapFromAssetMapsJSON:()=>E,extractMesh:()=>A,meshFeatureSetFromJSON:()=>p});var r=e(42494),o=e(11434),s=e(1121),a=e(76607),i=e(66026),c=e(34614),u=e(19831),l=e(73321),f=e(81099),h=e(24749);const M=()=>o.A.getLogger("esri.rest.support.meshFeatureSet");function p(t,n,e){const o=e.features;e.features=[],delete e.geometryType;const s=f.A.fromJSON(e);if(s.geometryType="mesh",!e.assetMaps)return s;const a=E(n,e.assetMaps),i=t.sourceSpatialReference??c.A.WGS84,u=e.globalIdFieldName,{outFields:l}=t,h=null!=l&&l.length>0?(M=l.includes("*")?null:new Set(l),t=>{let{attributes:n}=t;if(!n)return{};if(!M)return n;for(const e in n)M.has(e)||delete n[e];return n}):()=>({});var M;for(const c of o){const t=A(c,u,i,n,a);s.features.push(new r.A({geometry:t,attributes:h(c)}))}return s}function A(t,n,e,r,o){const s=t.attributes[n],c=o.get(s);if(null==c||!t.geometry)return null;const l=(0,h.V)(t.attributes,e,r.transformFieldRoles),f=a.A.fromJSON(t.geometry);f.spatialReference=e;const M=(0,h.f)(t.attributes,r.transformFieldRoles),p=e.isGeographic?"local":"georeferenced",A=function(t){const n=Array.from(t.files.values()),e=new Array;for(const r of n){if(r.status!==g.COMPLETED)return null;const t=new Array;for(const n of r.parts){if(!n)return null;t.push(new u.Bq(n.url,n.hash))}e.push(new u.Qp(r.name,r.mimeType,t))}return e}(c);return A?i.A.createWithExternalSource(l,A,{extent:f,transform:M,vertexSpace:p,unitConversionDisabled:!0}):i.A.createIncomplete(l,{extent:f,transform:M,vertexSpace:p})}var g,m;function E(t,n){const e=new Map;for(const r of n){const n=r.parentGlobalId;if(null==n)continue;const o=r.assetName,a=r.assetType,i=r.assetHash,c=r.assetURL,u=r.conversionStatus,f=r.seqNo,h=(0,l.Fm)(a,t.supportedFormats);if(!h){M().error("mesh-feature-set:unknown-format",`Service returned an asset of type ${a}, but it does not list it as a supported type`);continue}const p=(0,s.tE)(e,n,(()=>({files:new Map})));(0,s.tE)(p.files,o,(()=>({name:o,type:a,mimeType:h,status:d(u),parts:[]}))).parts[f]={hash:i,url:c}}return e}function d(t){switch(t){case"COMPLETED":case"SUBMITTED":return g.COMPLETED;case"INPROGRESS":return g.PENDING;default:return g.FAILED}}(m=g||(g={}))[m.FAILED=0]="FAILED",m[m.PENDING=1]="PENDING",m[m.COMPLETED=2]="COMPLETED"}}]);
//# sourceMappingURL=5034.d1270284.chunk.js.map