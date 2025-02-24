"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[5871],{84185:(e,t,s)=>{s.d(t,{y:()=>r});const r={upload:{createFromFiles:.8,loadMesh:.2},uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}}},5974:(e,t,s)=>{s.d(t,{V7:()=>c,XA:()=>a,aG:()=>p,sL:()=>u});var r=s(82439),o=s(27052),i=s(1121),n=s(53183);function a(e){return new l(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>{},arguments.length>2?arguments[2]:void 0)}class l{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>{},s=arguments.length>2?arguments[2]:void 0;if(this.onProgress=t,this.taskName=s,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,"number"==typeof e){this._weights={};for(let t=0;t<e;t++){const s=t,r=1/e;this._weights[s]=r,this._progressMap.set(s,0)}}else this._weights=e;this.emitProgress()}emitProgress(){let e=0;for(const[t,s]of this._progressMap.entries())e+=s*this._weights[t];if(1===e&&(0,o.A)("enable-feature:esri-3dofl-upload-timings")){const e=Math.round(performance.now()-(this._startTime??0))/1e3;console.log(`${this.taskName} done in ${e} sec`);for(const[t,s]of this._timingsMap){const r=Math.round(s.end-s.start)/1e3,o=Math.round(r/e*100);console.log(this.taskName??"Task",{stepKey:t,stepTime:r,relativeTime:o})}}this.onProgress(e)}setProgress(e,t){if(this._progressMap.set(e,t),(0,o.A)("enable-feature:esri-3dofl-upload-timings")){const s=performance.now();this._startTime??=s;const r=(0,i.tE)(this._timingsMap,e,(()=>({start:s,end:0})));1===t&&(r.end=s)}this.emitProgress()}simulate(e,t){return p((t=>this.setProgress(e,t)),t)}makeOnProgress(e){return t=>this.setProgress(e,t)}}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e=>{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m;const s=performance.now();e(0);const o=setInterval((()=>{const r=performance.now()-s,o=1-Math.exp(-r/t);e(o)}),g);return(0,r.hA)((()=>{clearInterval(o),e(1)}))}function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h;return(0,n.gr)((0,n.Kp)(e*f/t))}function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d;return(0,n.gr)((0,n.Kp)(e*f/t))}const h=10,d=10,f=8e-6,g=(0,n.l5)(50),m=(0,n.l5)(1e3)},95871:(e,t,s)=>{s.d(t,{Upload:()=>y});var r=s(70273),o=s(27907),i=s(71755),n=s(55678),a=s(56271),l=s(27052),p=s(92976),c=s(67519),u=(s(11434),s(11215),s(55292)),h=s(65433),d=s(60510),f=s(38609),g=s(84185),m=s(73321),_=s(5974);let y=class extends o.A{constructor(){super({}),this.files=[],this.progress=0,this._uploadTask=null,this._layer=null}destroy(){this.cancel(),this.files=[],this._layer=null,this._uploadTask=null}get state(){const e=this._uploadTask;return e&&0!==this.files.length?e.finished?e.error?"error":"success":"pending":"default"}get result(){return this._uploadTask?.value??null}get error(){return this._uploadTask?.error??null}uploadTo(e){this.cancel(),this.files=[],this._layer=e,this._uploadTask=(0,i.UT)((async t=>{const s=await async function(e){const{resolve:t,promise:s}=(0,p.Tw)(),r=document.createElement("input");r.type="file",r.multiple=!1,r.accept=[...(0,m.hK)(e.infoFor3D),".zip"].join(","),r.style.display="none",document.body.appendChild(r);const o=(0,a.on)(r,"change",(()=>t(r.files?Array.from(r.files):[])));return v?v(r):r.click(),s.finally((()=>{o.remove(),r.remove()}))}(e);(0,p.Te)(t),this.progress=0,this.files=s;const r=(0,_.XA)(g.y.upload,(e=>{this.progress=e}),"Upload.uploadTo");if(0===s.length)return null;(0,p.Te)(t);const o=await e.extractAndFilterFiles(s);(0,p.Te)(t),o.length>0&&(this.files=o);const i=await e.convertMesh(o,{signal:t,onProgress:r.makeOnProgress("createFromFiles")});if((0,p.Te)(t),!i)throw new n.A("editor:upload","could not upload or convert model");const c=o.reduce(((e,t)=>e+t.size),0),u=r.simulate("loadMesh",(0,_.V7)(c));try{await i.load()}finally{u.remove()}if((0,l.A)("enable-feature:georeferenced-uploads")&&i.metadata.georeferenced){if(await(0,f.Vv)(e.spatialReference,i.origin?.spatialReference))return{type:"georeferenced",mesh:i};if((e.spatialReference.isWebMercator||e.spatialReference.isWGS84)&&await async function(e,t){if(await(0,d.initializeProjection)(e.spatialReference,t),!e.vertexSpace.origin)return!1;const[s,r,o]=e.vertexSpace.origin,i=new h.A({x:s,y:r,z:o,spatialReference:e.spatialReference}),n=(0,d.project)(i,t);return!!n&&(e.vertexSpace.origin=[n.x,n.y,n.z??0],e.spatialReference=t,!0)}(i,e.spatialReference))return{type:"georeferenced-reprojected",mesh:i}}return i.spatialReference=e.spatialReference,i.vertexSpace.origin=[0,0,0],{type:"non-georeferenced",mesh:i}}))}retry(){this._layer&&this.uploadTo(this._layer)}cancel(){this._uploadTask?.abort()}};(0,r._)([(0,c.MZ)()],y.prototype,"files",void 0),(0,r._)([(0,c.MZ)()],y.prototype,"progress",void 0),(0,r._)([(0,c.MZ)()],y.prototype,"state",null),(0,r._)([(0,c.MZ)()],y.prototype,"result",null),(0,r._)([(0,c.MZ)()],y.prototype,"error",null),(0,r._)([(0,c.MZ)()],y.prototype,"_uploadTask",void 0),(0,r._)([(0,c.MZ)()],y.prototype,"_layer",void 0),y=(0,r._)([(0,u.$)("esri.widgets.Editor.Upload")],y);let v=null}}]);
//# sourceMappingURL=5871.bd77a564.chunk.js.map