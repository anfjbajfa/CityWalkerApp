"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[1229],{75469:(e,t,i)=>{i.d(t,{O:()=>u,W:()=>d});var n=i(6862),r=i(71958),s=i(52165),o=i(68358);const a=(0,i(90646).vt)(),l=(0,r.vt)(),h=(0,r.vt)(),c=(0,r.vt)();function d(e,t,i){return(0,o.i)(a,t[0],t[1],1),(0,o.q)(a,a,(0,n.mg)(l,i)),0===a[2]?(0,s.hZ)(e,a[0],a[1]):(0,s.hZ)(e,a[0]/a[2],a[1]/a[2])}function u(e,t,i){return m(h,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]),m(c,i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7]),(0,n.lw)(e,(0,n.KC)(h,h),c),0!==e[8]&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e}function m(e,t,i,r,s,h,c,d,u){(0,n.hZ)(e,t,r,h,i,s,c,1,1,1),(0,o.i)(a,d,u,1),(0,n.KC)(l,e);const[m,p,f]=(0,o.q)(a,a,(0,n.mg)(l,l));return(0,n.hZ)(l,m,0,0,0,p,0,0,0,f),(0,n.lw)(e,l,e)}},50235:(e,t,i)=>{i.d(t,{NH:()=>o,ip:()=>a,sU:()=>h,vG:()=>c});i(27052);var n=i(55678),r=i(92976),s=i(89524);function o(e){const t=l(e);return null!=t?t.toDataURL():""}async function a(e,t){const i=l(e);if(null==i)throw new n.A("imageToArrayBuffer","Unsupported image type");const o=function(e){if(!(e instanceof HTMLImageElement))return"image/png";const t=e.src;if((0,s.DB)(t)){const e=(0,s.r$)(t);return"image/jpeg"===e?.mediaType?e.mediaType:"image/png"}return/\.png$/i.test(t)?"image/png":/\.(jpg|jpeg)$/i.test(t)?"image/jpeg":"image/png"}(e),a=await new Promise((e=>i.toBlob(e,o)));if((0,r.Te)(t),!a)throw new n.A("imageToArrayBuffer","Failed to encode image");const h=await a.arrayBuffer();return(0,r.Te)(t),{data:h,type:o}}function l(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");return e instanceof HTMLImageElement?i.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&i.putImageData(e,0,0),t}function h(e){const t=[],i=new Uint8Array(e);for(let n=0;n<i.length;n++)t.push(String.fromCharCode(i[n]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}function c(e){if(e.byteLength<8)return!1;const t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}},76184:(e,t,i)=>{i.d(t,{_:()=>d});var n=i(70273),r=i(27907),s=i(67519),o=(i(27052),i(11434),i(11215),i(55292)),a=i(21673),l=i(60510),h=i(23423),c=i(74588);let d=class extends r.A{constructor(e){super(e)}get bounds(){const e=this.coords;return null==e?.extent?null:(0,h.VY)(e.extent)}get coords(){const e=this.element.georeference?.coords;return(0,l.projectOrLoad)(e,this.spatialReference).geometry}get normalizedCoords(){return a.A.fromJSON((0,c.jZ)(this.coords))}get normalizedBounds(){const e=null!=this.normalizedCoords?this.normalizedCoords.extent:null;return null!=e?(0,h.VY)(e):null}};(0,n._)([(0,s.MZ)()],d.prototype,"spatialReference",void 0),(0,n._)([(0,s.MZ)()],d.prototype,"element",void 0),(0,n._)([(0,s.MZ)()],d.prototype,"bounds",null),(0,n._)([(0,s.MZ)()],d.prototype,"coords",null),(0,n._)([(0,s.MZ)()],d.prototype,"normalizedCoords",null),(0,n._)([(0,s.MZ)()],d.prototype,"normalizedBounds",null),d=(0,n._)([(0,o.$)("esri.layers.support.MediaElementView")],d)},86941:(e,t,i)=>{i.d(t,{A:()=>E});var n=i(19068),r=i(6862),s=i(90861),o=i(15616),a=i(32845),l=i(3875),h=i(38609),c=i(26306),d=i(58261),u=i(14750),m=i(55748),p=i(97682),f=i(75642),_=i(40621),y=i(85789),g=i(70273),v=i(38218),w=i(7410);class x extends v.ZA{}(0,g._)([(0,v.C5)(0,w.ZY)],x.prototype,"pos",void 0),(0,g._)([(0,v.C5)(1,w.ZY)],x.prototype,"uv",void 0);class A extends v.HS{}class T extends v.k2{}(0,g._)([(0,v.Pi)(w.U)],T.prototype,"dvs",void 0);class M extends v.k2{}(0,g._)([(0,v.Pi)(w.ZY)],M.prototype,"perspective",void 0),(0,g._)([(0,v.Pi)(w.ZY)],M.prototype,"texSize",void 0),(0,g._)([(0,v.Pi)(w.nt)],M.prototype,"wrapAroundShift",void 0),(0,g._)([(0,v.Pi)(w.nt)],M.prototype,"opacity",void 0),(0,g._)([(0,v.Pi)(w.z7)],M.prototype,"texture",void 0);class C extends v.A{vertex(e){const t=e.uv.divide(this.config.texSize),i=new w.nt(1).add((0,w.Om)(t,this.config.perspective)),n=new w.eB(e.pos.add(new w.ZY(this.config.wrapAroundShift,0)),1),r=this.transform.dvs.multiply(n);return{uv:t,glPosition:new w.Zb(r.xy.multiply(i),0,i)}}fragment(e){const t=(0,w.US)(this.config.texture,e.uv).multiply(this.config.opacity),i=new v.mm;return i.glFragColor=t,i}}(0,g._)([(0,v.Pi)(T)],C.prototype,"transform",void 0),(0,g._)([(0,v.Pi)(M)],C.prototype,"config",void 0),(0,g._)([(0,g.a)(0,(0,v.hF)(x))],C.prototype,"vertex",null),(0,g._)([(0,g.a)(0,(0,v.hF)(A))],C.prototype,"fragment",null);var R=i(5719);class S extends _.j{constructor(){super(...arguments),this.type=y.N.Overlay,this._mesh=null,this.shaders={overlay:new C}}render(e,t){const{context:i,painter:n}=e,r=this._getMesh(e,t);n.setPipelineState(f.i);const{isWrapAround:s,wrapAroundShift:o}=t.config,a={...t.config,wrapAroundShift:0},l={shader:this.shaders.overlay,uniforms:{transform:t.transform,config:a},defines:null,optionalAttributes:null,useComputeBuffer:!1};n.setPipelineState({...f.i,stencil:{write:!1,test:{compare:R.MT.EQUAL,op:{fail:R.eA.KEEP,zFail:R.eA.KEEP,zPass:R.eA.REPLACE},ref:0,mask:255}}}),n.submitDrawMeshUntyped(i,l,r),s&&(a.wrapAroundShift=o,n.submitDrawMeshUntyped(i,l,r))}shutdown(){(0,m.pR)(this._mesh)}_getMesh(e,t){const{context:i}=e;if(this._mesh){const e=this._mesh.vertexBuffers.get("positions");if(!e)throw new Error("Buffer not found");e.setData(t.position)}else{const e=null!=t.index?t.index.length:t.position.length/2;this._mesh=new p.e(i,{vertex:{positions:t.position,uvs:t.tex},index:null!=t.index?{index:t.index}:void 0,groups:[{attributes:[{name:"pos",count:2,type:R.pe.FLOAT,location:0,vertex:"positions",stride:8,offset:0},{name:"tex",count:2,type:R.pe.UNSIGNED_SHORT,location:1,vertex:"uvs",stride:4,offset:0}],index:null!=t.index?"index":void 0,primitive:R.WR.TRIANGLE_STRIP}],parts:[{group:0,start:0,count:e}]})}return this._mesh}}class E extends u.A{constructor(){super(...arguments),this._viewStateId=-1,this._dvsMat3=(0,s.vt)(),this._overlayTechnique=new S}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}doRender(e){if(e.drawPhase!==d.S5.MAP||!this.visible)return;super.doRender(e);const t=this._overlayTechnique;for(const i of this.children)i.draw(e,t)}onDetach(){this._overlayTechnique.shutdown()}_updateMatrices(e){const{state:t}=e,{id:i,size:s,pixelRatio:h,resolution:c,rotation:d,viewpoint:u,displayMat3:m}=t;if(this._viewStateId===i)return;const p=(0,n.DF)(d),f=h*s[0],_=h*s[1];this._localOrigin=u.targetGeometry.clone();const{x:y,y:g}=this._localOrigin,v=(0,l.mT)(y,t.spatialReference);this._localOrigin.x=v,this._localOrigin.y=g;const w=c*f,x=c*_,A=(0,r.D_)(this._dvsMat3);(0,r.lw)(A,A,m),(0,r.Tl)(A,A,(0,o.fA)(f/2,_/2)),(0,r.hs)(A,A,(0,a.fA)(f/w,-_/x,1)),(0,r.e$)(A,A,-p),this._viewStateId=i}_updateOverlays(e,t){const{state:i}=e,{rotation:r,spatialReference:s,worldScreenWidth:o,size:a,viewpoint:l}=i,d=this._localOrigin;let u,m=0;const p=(0,h.Vp)(s);if(p&&s.isWrappable){const e=a[0],t=a[1],h=(0,n.DF)(r),d=Math.abs(Math.cos(h)),f=Math.abs(Math.sin(h)),_=Math.round(e*d+t*f),[y,g]=p.valid,v=(0,c.FT)(s),{x:w,y:x}=l.targetGeometry,A=[w,x],T=[0,0];i.toScreen(T,A);const M=[0,0];let C;C=_>o?.5*o:.5*_;const R=Math.floor((w+.5*v)/v),S=y+R*v,E=g+R*v,F=[T[0]+C,0];i.toMap(M,F),M[0]>E&&(m=v),F[0]=T[0]-C,i.toMap(M,F),M[0]<S&&(m=-v),u={worldWidth:v,xBounds:[y,g]}}for(const n of t)n.updateDrawCoords(d,m,s,u)}}},65550:(e,t,i)=>{i.d(t,{ZH:()=>c});var n=i(82439),r=i(53183),s=(i(50235),i(17674)),o=i(76878);function a(e,t){const{width:i,height:n,getFrame:s}=e,o=e.frameDurations.slice(),a=o.pop();return o.push((0,r.l5)(a+t)),{frameCount:e.frameCount,duration:e.duration+t,frameDurations:o,getFrame:s,width:i,height:n}}class l{constructor(e,t,i,n){this._animation=e,this._repeatType=i,this._onFrameData=n,this._direction=1,this._currentFrame=0,this.timeToFrame=this._animation.frameDurations[this._currentFrame];let r=0;for(;t>r;)r+=this.timeToFrame,this.nextFrame();const s=this._animation.getFrame(this._currentFrame);this._onFrameData(s)}nextFrame(){if(this._currentFrame+=this._direction,this._direction>0){if(this._currentFrame===this._animation.frameDurations.length)switch(this._repeatType){case s.fu.None:this._currentFrame-=this._direction;break;case s.fu.Loop:this._currentFrame=0;break;case s.fu.Oscillate:this._currentFrame-=this._direction,this._direction=-1}}else if(-1===this._currentFrame)switch(this._repeatType){case s.fu.None:this._currentFrame-=this._direction;break;case s.fu.Loop:this._currentFrame=this._animation.frameDurations.length-1;break;case s.fu.Oscillate:this._currentFrame-=this._direction,this._direction=1}this.timeToFrame=this._animation.frameDurations[this._currentFrame];const e=this._animation.getFrame(this._currentFrame);this._onFrameData(e)}}function h(e,t,i,n){let h,{repeatType:c}=t;if(null==c&&(c=s.fu.Loop),!0===t.reverseAnimation&&(e=function(e){const{width:t,height:i}=e,n=e.frameDurations.reverse();return{frameCount:e.frameCount,duration:e.duration,frameDurations:n,getFrame:t=>{const i=e.frameDurations.length-1-t;return e.getFrame(i)},width:t,height:i}}(e)),null!=t.duration&&(e=function(e,t){const{width:i,height:n,getFrame:s}=e,o=t/e.duration,a=e.frameDurations.map((e=>(0,r.l5)(e*o)));return{frameCount:e.frameCount,duration:e.duration,frameDurations:a,getFrame:s,width:i,height:n}}(e,(0,r.l5)(1e3*t.duration))),null!=t.repeatDelay){const i=1e3*t.repeatDelay;c===s.fu.Loop?e=a(e,(0,r.l5)(i)):c===s.fu.Oscillate&&(e=function(e,t){const{width:i,height:n,getFrame:s}=e,o=e.frameDurations.slice(),a=o.shift();return o.unshift((0,r.l5)(a+t)),{frameCount:e.frameCount,duration:e.duration+t,frameDurations:o,getFrame:s,width:i,height:n}}(a(e,(0,r.l5)(i/2)),(0,r.l5)(i/2)))}if(null!=t.startTimeOffset)h=(0,r.l5)(1e3*t.startTimeOffset);else if(null!=t.randomizeStartTime){const n=82749913,s=null!=t.randomizeStartSeed?t.randomizeStartSeed:n,a=(0,o.J)(i,s);h=(0,r.l5)(a*function(e){return(0,r.l5)(e.frameDurations.reduce(((e,t)=>e+t),0))}(e))}else h=(0,r.l5)(0);return new l(e,h,c,n)}function c(e,t,i,r){const s=null==t.playAnimation||t.playAnimation,o=h(e,t,i,r);let a,l=o.timeToFrame;return function e(){a=s?setTimeout((()=>{o.nextFrame(),l=o.timeToFrame,e()}),l):void 0}(),(0,n.hA)((()=>s&&clearTimeout(a)))}},76878:(e,t,i)=>{i.d(t,{A:()=>s,J:()=>r});var n=i(81883);function r(e,t){let i;if("string"==typeof e)i=(0,n.Wm)(e+`-seed(${t})`);else{let n=12;i=e^t;do{i=107*(i>>8^i)+n|0}while(0!=--n)}return(1+i/(1<<31))/2}function s(e){return Math.floor(r(e,o)*a)}const o=53290320,a=10},67258:(e,t,i)=>{i.r(t),i.d(t,{default:()=>j});var n=i(70273),r=(i(77844),i(42494),i(65366),i(59308),i(20989),i(12139),i(73354),i(75234),i(51556),i(42767),i(50906),i(11434)),s=(i(95026),i(80757)),o=i(55678),a=(i(27052),i(1121)),l=i(92976),h=i(73896),c=i(67519),d=(i(11215),i(55292)),u=i(23423),m=i(50210),p=i(9444),f=i(76184),_=(i(37072),i(33980),i(83402),i(57998),i(29816),i(17674)),y=(i(19208),i(76607)),g=(i(4711),i(25770),i(65433),i(21673),i(74795),i(95505),i(42626),i(71915),i(82731),i(69210),i(38609),i(39002),i(41639),i(22983),i(38810),i(5601),i(20858),i(43436),i(67058),i(41914),i(86469),i(1247),i(44628),i(7143),i(4672),i(80773),i(19380),i(21352),i(45050),i(89786),i(48317),i(8804),i(15599),i(37819),i(15616),i(21737),i(13568),i(89942),i(37250),i(34429),i(62285),i(58261),i(86291),i(16830),i(84636),i(5719)),v=(i(64761),i(84425),i(67542)),w=(i(64721),i(67307),i(37848),i(7206),i(37186),i(43738),i(41536),i(98893),i(51452),i(69124),i(43007),i(25943),i(89524),i(57980),i(17907),i(85789),i(28820),i(71990),i(19931),i(35268),i(57574),i(95784),i(36329),i(52199),i(97330),i(37818),i(89932),i(36914),i(50228),i(84520),i(45465),i(48466),i(52476),i(67174),i(78676),i(29037),i(63869),i(29936),i(86704),i(14209),i(35859),i(8335),i(47618),i(69329),i(32845),i(28414),i(34614),i(77886),i(56705),i(30260),i(34204),i(71755),i(37293),i(99255),i(34531),i(38825),i(9430),i(55780),i(39017),i(12527),i(1444),i(5971),i(62767)),x=i(9865),A=i(56271),T=i(483),M=i(55748),C=i(75469),R=i(71958),S=i(52165),E=i(16687),F=i(16964),b=i(65550),V=i(17743);const D=[1,1],q=(0,R.vt)(),O={none:_.fu.None,loop:_.fu.Loop,oscillate:_.fu.Oscillate};class P extends F.q{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.wrapAroundShift=0,this.perspectiveTransform=(0,E.vt)(),this._handles=new T.A,this._vertices=new Float32Array(8),this._indices=new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]),this._handles.add([(0,h.wB)((()=>this.elementView.element.opacity),(e=>this.opacity=e),h.Vh),(0,h.wB)((()=>[this.elementView.coords]),(()=>{this.requestRender()}),h.Vh),(0,h.wB)((()=>["animationOptions"in this.elementView.element&&this.elementView.element.animationOptions]),(()=>{this._handles.remove("play"),this.texture=(0,M.WD)(this.texture),this.requestRender()}),h.Vh),(0,h.z7)((()=>this.elementView.element.loaded),(()=>{const e=this.elementView.element;this.ready(),"video"===e.type&&null!=e.content&&(this._handles.add([(0,A.on)(e.content,"play",(()=>this.requestRender())),(0,A.on)(e.content,"loadeddata",(()=>this.requestRender())),(0,A.on)(e.content,"loaded",(()=>this.requestRender()))]),"requestVideoFrameCallback"in e.content?e.content.requestVideoFrameCallback((()=>this.requestRender())):this._handles.add([(0,A.on)(e.content,"seeked",(()=>this.requestRender()))]),this.requestRender())}),h.Vh)]),e.element.load().catch((t=>{r.A.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new o.A("element-load-error","Element cannot be displayed",{element:e,error:t}))}))}getMesh(e){throw new Error("Method not implemented.")}destroy(){this._handles.destroy(),this.texture=(0,M.WD)(this.texture)}get textureSize(){return D}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,i=this.elementView.element.content;if(null!=i){const e=i instanceof HTMLImageElement,n=i instanceof HTMLVideoElement,r=e?i.naturalWidth:n?i.videoWidth:i.width,s=e?i.naturalHeight:n?i.videoHeight:i.height;if(this._updatePerspectiveTransform(r,s),this.texture)n&&(this.texture.setData(i),this.texture.generateMipmap(),"requestVideoFrameCallback"in i?i.requestVideoFrameCallback((()=>this.requestRender())):i.paused||this.requestRender());else{const e=new V.R;if(e.wrapMode=g.pF.CLAMP_TO_EDGE,e.preMultiplyAlpha=!0,e.width=r,e.height=s,"getFrame"in i){const n=i=>{this.texture?this.texture.setData(i):this.texture=new v.g(t,e,i),this.requestRender()};"animationOptions"in this.elementView.element&&this._handles.add((0,b.ZH)(i,function(e){return e?{type:"CIMAnimatedSymbolProperties",...e,playAnimation:e.playing,repeatType:e.repeatType?O[e.repeatType]:void 0}:{type:"CIMAnimatedSymbolProperties"}}(this.elementView.element.animationOptions),null,n),"play")}else this.texture=new v.g(t,e,i);this.texture.generateMipmap(),n&&("requestVideoFrameCallback"in i?i.requestVideoFrameCallback((()=>this.requestRender())):i.paused||this.requestRender())}}super.beforeRender(e)}_createTransforms(){return null}draw(e,t){this.isReady&&null!=this.texture?t.render(e,{transform:{dvs:this.dvsMat3},config:{perspective:this.perspectiveTransform,texSize:D,wrapAroundShift:this.wrapAroundShift,isWrapAround:this.isWrapAround,opacity:this.opacity,texture:{texture:this.texture,unit:0}},position:this._vertices,tex:this._indices}):this.requestRender()}updateDrawCoords(e,t,i,n){const{coords:r,bounds:s}=this.elementView;if(null==r||null==s)return;const[o,a,l,h]=r.rings[0],c=this._vertices,{x:d,y:u}=e;c.set([a[0]-d,a[1]-u,o[0]-d,o[1]-u,l[0]-d,l[1]-u,h[0]-d,h[1]-u]);let m=t;if(n){const[e,,t]=s,{worldWidth:i,xBounds:r}=n,[o,a]=r;e<o&&t>o?m=i:t>a&&e<a&&(m=-i)}this.wrapAroundShift=m,this.isWrapAround=0!==m}_updatePerspectiveTransform(e,t){const i=this._vertices;(0,C.O)(q,[0,0,e,0,0,t,e,t],[i[0],i[1],i[4],i[5],i[2],i[3],i[6],i[7]]),(0,S.hZ)(this.perspectiveTransform,q[6]/q[8]*e,q[7]/q[8]*t)}}var L=i(86941),Z=i(51163),z=i(17302),k=i(27907);let U=class extends k.A{constructor(){super(...arguments),this.tool="transform"}};(0,n._)([(0,c.MZ)()],U.prototype,"tool",void 0),U=(0,n._)([(0,d.$)("esri.views.3d.layers.support.MediaLayerInteractionOptions")],U);const B=e=>{let t=class extends e{constructor(){super(...arguments),this.layer=null,this.interactive=!1,this.interactionOptions=new U,this.selectedElement=null}};return(0,n._)([(0,c.MZ)()],t.prototype,"layer",void 0),(0,n._)([(0,c.MZ)()],t.prototype,"interactive",void 0),(0,n._)([(0,c.MZ)()],t.prototype,"interactionOptions",void 0),(0,n._)([(0,c.MZ)()],t.prototype,"selectedElement",void 0),t=(0,n._)([(0,d.$)("esri.views.layers.MediaLayerView")],t),t};var H=i(53290);let I=class extends((0,Z.e)(B(z.A))){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this._interaction=null,this.layer=null,this.elements=new s.A}initialize(){this.addHandles([(0,h.wB)((()=>[this.interactive,this.suspended]),(async()=>{if(this.interactive&&!this._interaction){const{MediaLayerInteraction:e}=await i.e(7246).then(i.bind(i,27246));this._interaction=new e({view:this.view,layer:this.layer}),this.selectedElement!==this._interaction.selectedElement&&(this._interaction.selectedElement=this.selectedElement),this.interactionOptions!==this._interaction.options&&(this._interaction.options=this.interactionOptions)}this._interaction&&(this._interaction.enabled=!this.suspended&&this.interactive)}),h.pc),(0,h.wB)((()=>this.interactionOptions),(e=>{this._interaction&&(this._interaction.options=e)}),h.pc),(0,h.wB)((()=>this.selectedElement),(e=>{this._interaction&&(this._interaction.selectedElement=e)}),h.pc)])}attach(){this.addAttachHandles([(0,h.on)((()=>this.layer.effectiveSource),"refresh",(()=>{this._tileStrategy.refresh((e=>this._updateTile(e))),this.requestUpdate()})),(0,h.on)((()=>this.layer.effectiveSource),"change",(e=>{let{element:t}=e;return this._elementUpdateHandler(t)}))]),this._overlayContainer=new L.A,this.container.addChild(this._overlayContainer),this._fetchQueue=new w.A({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(e,t)=>this._queryElements(e,t),scheduler:this.scheduler,priority:H.W6.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new x.A({cachePolicy:"purge",resampling:!0,acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),this._debugGraphicsView?.destroy()}supportsSpatialReference(e){return!0}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(e){this._tileStrategy.update(e),this._debugGraphicsView?.update(e)}async hitTest(e,t){const i=[],n=e.normalize(),r=[n.x,n.y];for(const{elementView:{normalizedCoords:s,element:o}}of this._elementReferences.values())null!=s&&(0,m.t1)(s.rings,r)&&i.push({type:"media",element:o,layer:this.layer,mapPoint:e,sourcePoint:o.toSource(e)});return i.reverse()}canResume(){return null!=this.layer.source&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._updateTile(e)))}_acquireTile(e){const t=new $(e.clone());return this._updateTile(t),t}_updateTile(e){this._updatingHandles.addPromise(this._fetchQueue.push(e.key).then((t=>{const[i,n]=e.setElements(t);this._referenceElements(e,i),this._dereferenceElements(e,n),this.requestUpdate()}),(e=>{(0,l.zf)(e)||r.A.getLogger(this).error(e)})))}_releaseTile(e){this._fetchQueue.abort(e.key.id),e.elements&&this._dereferenceElements(e,e.elements),this.requestUpdate()}async _queryElements(e,t){const i=this.layer.effectiveSource;if(null==i)return[];this.view.featuresTilingScheme.getTileBounds(G,e,!0);const n=new y.A({xmin:G[0],ymin:G[1],xmax:G[2],ymax:G[3],spatialReference:this.view.spatialReference});return i.queryElements(n,t)}_referenceElements(e,t){if(null!=this.layer.source)for(const i of t)this._referenceElement(e,i)}_referenceElement(e,t){(0,a.tE)(this._elementReferences,t.uid,(()=>{const e=new f._({element:t,spatialReference:this.view.spatialReference}),i=new P(e);return this._overlayContainer.addChild(i),this.elements.add(t),this._updatingHandles.addPromise(t.load().catch((e=>{r.A.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new o.A("element-load-error","Element cannot be displayed",{element:t,error:e}))}))),{debugGraphic:null,elementView:e,overlay:i,tiles:new Set}})).tiles.add(e)}_dereferenceElements(e,t){for(const i of t)this._dereferenceElement(e,i)}_dereferenceElement(e,t){const i=this._elementReferences.get(t.uid);i.tiles.delete(e),i.tiles.size||(this._overlayContainer.removeChild(i.overlay),i.overlay.destroy(),i.elementView.destroy(),this._elementReferences.delete(t.uid),this.elements.remove(t),this._debugGraphicsView?.graphics.remove(i.debugGraphic))}_elementUpdateHandler(e){let t=this._elementReferences.get(e.uid);if(t){const i=t.elementView.normalizedCoords;if(null==i)return this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.elementView.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),void this._debugGraphicsView?.graphics.remove(t.debugGraphic);const n=[],r=[];for(const e of this._tileStrategy.tiles){const s=N(this.view.featuresTilingScheme,e,i);t.tiles.has(e)?s||r.push(e):s&&n.push(e)}for(const t of n)this._referenceElement(t,e);for(const t of r)this._dereferenceElement(t,e);return t=this._elementReferences.get(e.uid),void(t?.debugGraphic&&(t.debugGraphic.geometry=t.elementView.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:t.debugGraphic,property:"geometry"})))}const i=new f._({element:e,spatialReference:this.view.spatialReference}).normalizedCoords;if(null!=i)for(const n of this._tileStrategy.tiles)N(this.view.featuresTilingScheme,n,i)&&this._referenceElement(n,e)}};(0,n._)([(0,c.MZ)()],I.prototype,"layer",void 0),(0,n._)([(0,c.MZ)({readOnly:!0})],I.prototype,"elements",void 0),I=(0,n._)([(0,d.$)("esri.views.2d.layers.MediaLayerView2D")],I);const G=(0,u.vt)(),W={xmin:0,ymin:0,xmax:0,ymax:0};function N(e,t,i){return e.getTileBounds(G,t.key,!0),W.xmin=G[0],W.ymin=G[1],W.xmax=G[2],W.ymax=G[3],(0,p.fA)(W,i)}class ${constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],i=new Set(this.elements);this.elements=e;for(const n of e)i.has(n)?i.delete(n):t.push(n);return this.isReady=!0,[t,Array.from(i)]}destroy(){}}const j=I}}]);
//# sourceMappingURL=1229.bdc887ba.chunk.js.map