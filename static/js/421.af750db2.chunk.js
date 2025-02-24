"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[421],{15930:(t,e,i)=>{i.d(e,{LG:()=>c,mb:()=>_,yr:()=>p});var s=i(92976),r=i(6862),a=i(90861),o=i(15616),h=i(16964),n=i(16715),l=i(5719),d=i(67542),u=i(17743);function c(t){return t&&"render"in t}function p(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,t.render(e.getContext("2d")),e}class _ extends h.q{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this._texture=null,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.immutable=e,this.source=t,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),null!=this._uploadStatus&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return void 0!==this._height?this._height:this._sourceHeight}set height(t){this._height=t}get source(){return this._source}set source(t){null==t&&null==this._source||(this._source=t,this.invalidateTexture(),this.requestRender())}get width(){return void 0!==this._width?this._width:this._sourceWidth}set width(t){this._width=t}beforeRender(t){super.beforeRender(t),this.updateTexture(t)}async setSourceAsync(t,e){null!=this._uploadStatus&&this._uploadStatus.controller.abort();const i=new AbortController,r=(0,s.Tw)();return(0,s.NY)(e,(()=>i.abort())),(0,s.NY)(i,(t=>r.reject(t))),this._uploadStatus={controller:i,resolver:r},this.source=t,r.promise}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width))}transitionStep(t,e){t>=64&&(this.fadeTransitionEnabled=!1),super.transitionStep(t,e)}setTransform(t){const e=(0,r.D_)(this.transforms.displayViewScreenMat3),[i,s]=t.toScreenNoRotation([0,0],[this.x,this.y]),a=this.resolution/this.pixelRatio/t.resolution,h=a*this.width,n=a*this.height,l=Math.PI*this.rotation/180;(0,r.Tl)(e,e,(0,o.fA)(i,s)),(0,r.Tl)(e,e,(0,o.fA)(h/2,n/2)),(0,r.e$)(e,e,-l),(0,r.Tl)(e,e,(0,o.fA)(-h/2,-n/2)),(0,r.Oe)(e,e,(0,o.fA)(h,n)),(0,r.lw)(this.transforms.displayViewScreenMat3,t.displayViewMat3,e)}setSamplingProfile(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode))}bind(t,e){this._texture&&t.bindTexture(this._texture,e)}async updateTexture(t){let{context:e,painter:i}=t;if(!this._textureInvalidated)return;if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(e)),!this.source)return void this._texture.setData(null);this._texture.resize(this._sourceWidth,this._sourceHeight);const r=function(t){return c(t)?t instanceof n.A?t.getRenderedRasterPixels()?.renderedRasterPixels:p(t):t}(this.source);try{if(null!=this._uploadStatus){const{controller:t,resolver:e}=this._uploadStatus,s={signal:t.signal},{width:a,height:o}=this,h=this._texture,n=i.textureUploadManager;await n.enqueueTextureUpdate({data:r,texture:h,width:a,height:o},s),e.resolve(),this._uploadStatus=null}else this._texture.setData(r);this.ready()}catch(a){(0,s.jH)(a)}}onDetach(){this.destroy()}_createTransforms(){return{displayViewScreenMat3:(0,a.vt)()}}_createTexture(t){const e=this.immutable,i=new u.R;return i.internalFormat=e?l.H0.RGBA8:l.Ab.RGBA,i.wrapMode=l.pF.CLAMP_TO_EDGE,i.isImmutable=e,i.width=this._sourceWidth,i.height=this._sourceHeight,new d.g(t,i)}}},21387:(t,e,i)=>{i.d(e,{l:()=>o});var s=i(75373),r=i(58261),a=i(14750);class o extends a.A{constructor(){super(...arguments),this._hasCrossfade=!1}get requiresDedicatedFBO(){return super.requiresDedicatedFBO||this._hasCrossfade}beforeRender(t){super.beforeRender(t),this._manageFade()}prepareRenderPasses(t){const e=t.registerRenderPass({name:"bitmap",brushes:[s.d.bitmap],target:()=>this.children,drawPhase:r.S5.MAP});return[...super.prepareRenderPasses(t),e]}_manageFade(){this.children.reduce(((t,e)=>t+(e.inFadeTransition?1:0)),0)>=2?(this.children.forEach((t=>t.blendFunction="additive")),this._hasCrossfade=!0):(this.children.forEach((t=>t.blendFunction="standard")),this._hasCrossfade=!1)}}},16715:(t,e,i)=>{i.d(e,{A:()=>s});class s{constructor(t,e,i){this.pixelBlock=t,this.extent=e,this.originalPixelBlock=i}get width(){return null!=this.pixelBlock?this.pixelBlock.width:0}get height(){return null!=this.pixelBlock?this.pixelBlock.height:0}render(t){const e=this.pixelBlock;if(null==e)return;const i=this.filter({extent:this.extent,pixelBlock:this.originalPixelBlock??e});if(null==i.pixelBlock)return;i.pixelBlock.maskIsAlpha&&(i.pixelBlock.premultiplyAlpha=!0);const s=i.pixelBlock.getAsRGBA(),r=t.createImageData(i.pixelBlock.width,i.pixelBlock.height);r.data.set(s),t.putImageData(r,0,0)}getRenderedRasterPixels(){const t=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return null==t.pixelBlock?null:(t.pixelBlock.maskIsAlpha&&(t.pixelBlock.premultiplyAlpha=!0),{width:t.pixelBlock.width,height:t.pixelBlock.height,renderedRasterPixels:new Uint8Array(t.pixelBlock.getAsRGBA().buffer)})}}},50421:(t,e,i)=>{i.r(e),i.d(e,{default:()=>_});var s=i(70273),r=i(11434),a=i(92976),o=i(67519),h=(i(27052),i(11215),i(55292)),n=i(21387),l=i(51163),d=i(90444),u=i(17302),c=i(96277);let p=class extends((0,c.A)((0,l.e)(u.A))){update(t){this._strategy.update(t).catch((t=>{(0,a.zf)(t)||r.A.getLogger(this).error(t)})),this.notifyChange("updating")}attach(){this._bitmapContainer=new n.l,this.container.addChild(this._bitmapContainer),this._strategy=new d.A({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(t,e,i){return this.layer.fetchImageBitmap(t,e,i)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};(0,s._)([(0,o.MZ)()],p.prototype,"_strategy",void 0),(0,s._)([(0,o.MZ)()],p.prototype,"updating",void 0),p=(0,s._)([(0,h.$)("esri.views.2d.layers.BaseDynamicLayerView2D")],p);const _=p},90444:(t,e,i)=>{i.d(e,{A:()=>A});var s=i(70273),r=i(27907),a=(i(27052),i(92976)),o=i(67519),h=(i(11434),i(11215),i(55292)),n=i(23423),l=i(38609),d=i(27913);const u=Math.PI/180;function c(t){return t*u}function p(t,e){const i=c(e.rotation),s=Math.abs(Math.cos(i)),r=Math.abs(Math.sin(i)),[a,o]=e.size;return t[0]=Math.round(o*r+a*s),t[1]=Math.round(o*s+a*r),t}var _=i(15930),g=i(1444),x=i(5971);const m=(0,n.vt)(),f=[0,0],y=new x.A(0,0,0,0),w=2048,v=2048,M=!1,b=!1,R=!1;let S=class extends r.A{constructor(t){super(t),this._imagePromise=null,this.bitmaps=[],this.hidpi=R,this.imageMaxWidth=w,this.imageMaxHeight=v,this.imageRotationSupported=M,this.imageNormalizationSupported=b,this.update=(0,a.sg)((async(t,e)=>{if((0,a.Te)(e),!t.stationary||this.destroyed)return;const i=t.state,s=(0,l.Vp)(i.spatialReference),r=this.hidpi?t.pixelRatio:1,o=i.worldScreenWidth>0,h=o&&this.imageNormalizationSupported&&i.worldScreenWidth<i.size[0],n=Math.round((this.imageMaxWidth??0)/r),d=Math.round((this.imageMaxHeight??0)/r);h?(f[0]=i.worldScreenWidth,f[1]=i.size[1]):this.imageRotationSupported?(f[0]=i.size[0],f[1]=i.size[1]):p(f,i);const u=Math.floor(f[0])>n||Math.floor(f[1])>d,c=s&&(i.extent.xmin<s.valid[0]||i.extent.xmax>s.valid[1]),_=!this.imageNormalizationSupported&&c,g=!u&&!_,x=this.imageRotationSupported?i.rotation:0,m=this.container.children.slice();if(g){const t=h?i.paddedViewState.center:i.center;this._imagePromise=this._singleExport(i,f,t,i.resolution,x,r,e)}else{let t=Math.min(n,d);o&&(t=Math.min(i.worldScreenWidth,t),t=Math.round(i.worldScreenWidth/Math.ceil(i.worldScreenWidth/t))),this._imagePromise=this._tiledExport(i,t,r,e)}try{const t=await this._imagePromise??[];(0,a.Te)(e);const i=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=t;for(const e of m)t.includes(e)||i.push(e.fadeOut().then((()=>{e.remove(),e.destroy()})));for(const e of t)i.push(e.fadeIn());await Promise.all(i)}catch(y){this._imagePromise=null,(0,a.QP)(y)}}),5e3),this.updateExports=(0,a.sg)((async t=>{const e=[];for(const i of this.container.children){if(!i.visible||!i.stage)return;e.push(t(i).then((()=>{i.invalidateTexture(),i.requestRender()})))}this._imagePromise=(0,a.Lx)(e).then((()=>this._imagePromise=null)),await this._imagePromise}))}destroy(){this.bitmaps.forEach((t=>t.destroy())),this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}async _export(t,e,i,s,r,o){const h=await this.fetchSource(t,Math.floor(e*r),Math.floor(i*r),{rotation:s,pixelRatio:r,signal:o});(0,a.Te)(o);const n=new _.mb(null,!0);return n.x=t.xmin,n.y=t.ymax,n.resolution=t.width/e,n.rotation=s,n.pixelRatio=r,n.opacity=0,this.container.addChild(n),await n.setSourceAsync(h,o),(0,a.Te)(o),n}async _singleExport(t,e,i,s,r,a,o){!function(t,e,i,s){const[r,a]=e,[o,h]=s,n=.5*i;t[0]=r-n*o,t[1]=a-n*h,t[2]=r+n*o,t[3]=a+n*h}(m,i,s,e);const h=(0,n.w1)(m,t.spatialReference);return[await this._export(h,e[0],e[1],r,a,o)]}_tiledExport(t,e,i,s){const r=d.A.create({size:e,spatialReference:t.spatialReference,scales:[t.scale]}),a=new g.A(r),o=a.getTileCoverage(t);if(!o)return null;const h=[];return o.forEach(((r,o,l,d)=>{y.set(r,o,l,0),a.getTileBounds(m,y);const u=(0,n.w1)(m,t.spatialReference);h.push(this._export(u,e,e,0,i,s).then((t=>(0!==d&&(y.set(r,o,l,d),a.getTileBounds(m,y),t.x=m[0],t.y=m[3]),t))))})),Promise.all(h)}};(0,s._)([(0,o.MZ)()],S.prototype,"_imagePromise",void 0),(0,s._)([(0,o.MZ)()],S.prototype,"bitmaps",void 0),(0,s._)([(0,o.MZ)()],S.prototype,"container",void 0),(0,s._)([(0,o.MZ)()],S.prototype,"fetchSource",void 0),(0,s._)([(0,o.MZ)()],S.prototype,"hidpi",void 0),(0,s._)([(0,o.MZ)()],S.prototype,"imageMaxWidth",void 0),(0,s._)([(0,o.MZ)()],S.prototype,"imageMaxHeight",void 0),(0,s._)([(0,o.MZ)()],S.prototype,"imageRotationSupported",void 0),(0,s._)([(0,o.MZ)()],S.prototype,"imageNormalizationSupported",void 0),(0,s._)([(0,o.MZ)()],S.prototype,"requestUpdate",void 0),(0,s._)([(0,o.MZ)()],S.prototype,"updating",null),S=(0,s._)([(0,h.$)("esri.views.2d.layers.support.ExportStrategy")],S);const A=S},96277:(t,e,i)=>{i.d(e,{A:()=>n});var s=i(70273),r=i(11434),a=i(92976),o=i(73896),h=(i(27052),i(11215),i(55678),i(55292));const n=t=>{let e=class extends t{initialize(){this.addHandles((0,o.on)((()=>this.layer),"refresh",(t=>{this.doRefresh(t.dataChanged).catch((t=>{(0,a.zf)(t)||r.A.getLogger(this).error(t)}))})),"RefreshableLayerView")}};return e=(0,s._)([(0,h.$)("esri.views.layers.RefreshableLayerView")],e),e}}}]);
//# sourceMappingURL=421.af750db2.chunk.js.map