"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[9092],{16060:(e,t,i)=>{i.d(t,{LG:()=>u,mb:()=>g,yr:()=>p});var s=i(50346),r=i(63919),a=i(85827),n=i(59422),o=i(8794),h=i(96145),l=i(93345),d=i(29492),c=i(96673);function u(e){return e&&"render"in e}function p(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}class g extends o.q{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this._texture=null,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.immutable=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),null!=this._uploadStatus&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return void 0!==this._height?this._height:this._sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){null==e&&null==this._source||(this._source=e,this.invalidateTexture(),this.requestRender())}get width(){return void 0!==this._width?this._width:this._sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e)}async setSourceAsync(e,t){null!=this._uploadStatus&&this._uploadStatus.controller.abort();const i=new AbortController,r=(0,s.Tw)();return(0,s.NY)(t,(()=>i.abort())),(0,s.NY)(i,(e=>r.reject(e))),this._uploadStatus={controller:i,resolver:r},this.source=e,r.promise}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width))}transitionStep(e,t){e>=64&&(this.fadeTransitionEnabled=!1),super.transitionStep(e,t)}setTransform(e){const t=(0,r.D_)(this.transforms.displayViewScreenMat3),[i,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),a=this.resolution/this.pixelRatio/e.resolution,o=a*this.width,h=a*this.height,l=Math.PI*this.rotation/180;(0,r.Tl)(t,t,(0,n.fA)(i,s)),(0,r.Tl)(t,t,(0,n.fA)(o/2,h/2)),(0,r.e$)(t,t,-l),(0,r.Tl)(t,t,(0,n.fA)(-o/2,-h/2)),(0,r.Oe)(t,t,(0,n.fA)(o,h)),(0,r.lw)(this.transforms.displayViewScreenMat3,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}async updateTexture(e){let{context:t,painter:i}=e;if(!this._textureInvalidated)return;if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(t)),!this.source)return void this._texture.setData(null);this._texture.resize(this._sourceWidth,this._sourceHeight);const r=function(e){return u(e)?e instanceof h.A?e.getRenderedRasterPixels()?.renderedRasterPixels:p(e):e}(this.source);try{if(null!=this._uploadStatus){const{controller:e,resolver:t}=this._uploadStatus,s={signal:e.signal},{width:a,height:n}=this,o=this._texture,h=i.textureUploadManager;await h.enqueueTextureUpdate({data:r,texture:o,width:a,height:n},s),t.resolve(),this._uploadStatus=null}else this._texture.setData(r);this.ready()}catch(a){(0,s.jH)(a)}}onDetach(){this.destroy()}_createTransforms(){return{displayViewScreenMat3:(0,a.vt)()}}_createTexture(e){const t=this.immutable,i=new c.R;return i.internalFormat=t?l.H0.RGBA8:l.Ab.RGBA,i.wrapMode=l.pF.CLAMP_TO_EDGE,i.isImmutable=t,i.width=this._sourceWidth,i.height=this._sourceHeight,new d.g(e,i)}}},14509:(e,t,i)=>{i.d(t,{l:()=>n});var s=i(57070),r=i(61551),a=i(36201);class n extends a.A{constructor(){super(...arguments),this._hasCrossfade=!1}get requiresDedicatedFBO(){return super.requiresDedicatedFBO||this._hasCrossfade}beforeRender(e){super.beforeRender(e),this._manageFade()}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[s.d.bitmap],target:()=>this.children,drawPhase:r.S5.MAP});return[...super.prepareRenderPasses(e),t]}_manageFade(){this.children.reduce(((e,t)=>e+(t.inFadeTransition?1:0)),0)>=2?(this.children.forEach((e=>e.blendFunction="additive")),this._hasCrossfade=!0):(this.children.forEach((e=>e.blendFunction="standard")),this._hasCrossfade=!1)}}},96145:(e,t,i)=>{i.d(t,{A:()=>s});class s{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return null!=this.pixelBlock?this.pixelBlock.width:0}get height(){return null!=this.pixelBlock?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if(null==t)return;const i=this.filter({extent:this.extent,pixelBlock:this.originalPixelBlock??t});if(null==i.pixelBlock)return;i.pixelBlock.maskIsAlpha&&(i.pixelBlock.premultiplyAlpha=!0);const s=i.pixelBlock.getAsRGBA(),r=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);r.data.set(s),e.putImageData(r,0,0)}getRenderedRasterPixels(){const e=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return null==e.pixelBlock?null:(e.pixelBlock.maskIsAlpha&&(e.pixelBlock.premultiplyAlpha=!0),{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)})}}},9092:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Y});var s=i(35143),r=i(39356),a=i(94643),n=i(54901),o=i(81806),h=i(68134),l=i(46053),d=i(76460),c=(i(47249),i(85842)),u=i(64519),p=i(64022),g=i(90104),m=i(43321),y=i(70822),x=i(91967),_=i(50346),w=i(52494),v=i(14509),f=i(21904),b=i(96145),M=i(4176);let A=class extends x.A{constructor(){super(...arguments),this.attached=!1,this.container=new f.m,this.updateRequested=!1,this.type="imagery",this._bitmapView=new v.l}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch((e=>{(0,_.zf)(e)||d.A.getLogger(this).error(e)}))}hitTest(e){return new r.A({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new M.A({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports((async e=>{const{source:t}=e;if(!t||t instanceof ImageBitmap)return;const i=await this.layer.applyRenderer({extent:t.extent,pixelBlock:t.originalPixelBlock??t.pixelBlock});t.filter=e=>this.layer.pixelFilter?this.layer.applyFilter(e):{...i,extent:t.extent}})).catch((e=>{(0,_.zf)(e)||d.A.getLogger(this).error(e)}))}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,i=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),s=(0,w.LY)(i,t);return null!=s?{extent:s.extent,pixelBlock:s.pixelBlock}:null}return null}async _fetchImage(e,t,i,s){(s=s||{}).timeExtent=this.timeExtent,s.requestAsImageElement=!0,s.returnImageBitmap=!0;const r=await this.layer.fetchImage(e,t,i,s);if(r.imageBitmap)return r.imageBitmap;const a=await this.layer.applyRenderer(r.pixelData,{signal:s.signal}),n=new b.A(a.pixelBlock,a.extent?.clone(),r.pixelData.pixelBlock);return n.filter=e=>this.layer.applyFilter(e),n}};(0,s._)([(0,l.MZ)()],A.prototype,"attached",void 0),(0,s._)([(0,l.MZ)()],A.prototype,"container",void 0),(0,s._)([(0,l.MZ)()],A.prototype,"layer",void 0),(0,s._)([(0,l.MZ)()],A.prototype,"strategy",void 0),(0,s._)([(0,l.MZ)()],A.prototype,"timeExtent",void 0),(0,s._)([(0,l.MZ)()],A.prototype,"view",void 0),(0,s._)([(0,l.MZ)()],A.prototype,"updateRequested",void 0),(0,s._)([(0,l.MZ)()],A.prototype,"updating",null),(0,s._)([(0,l.MZ)()],A.prototype,"type",void 0),A=(0,s._)([(0,c.$)("esri.views.2d.layers.imagery.ImageryView2D")],A);const R=A;var P=i(3825),S=i(76797),B=i(80963),k=i(59844),E=i(99846),T=i(17331),V=i(61551),I=i(36201);class D extends I.A{constructor(){super(...arguments),this.symbolTypes=["triangle"]}prepareRenderPasses(e){const t=e.registerRenderPass({name:"imagery (vf)",brushes:[T.A],target:()=>this.children,drawPhase:V.S5.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===V.S5.MAP&&this.symbolTypes.forEach((t=>{e.renderPass=t,super.doRender(e)}))}}var Z=i(86386);let q=class extends x.A{constructor(e){super(e),this._loading=null,this.update=(0,_.sg)(((e,t)=>this._update(e,t).catch((e=>{(0,_.zf)(e)||d.A.getLogger(this).error(e)}))))}get updating(){return!!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes="wind_speed"===e.style?["scalar","triangle"]:"simple_scalar"===e.style?["scalar"]:["triangle"],this.container.requestRender()}async _update(e,t,i){if(!e.stationary)return;const{extent:s,spatialReference:r}=e.state,a=new S.A({xmin:s.xmin,ymin:s.ymin,xmax:s.xmax,ymax:s.ymax,spatialReference:r}),[n,o]=e.state.size;this._loading=this.fetchPixels(a,n,o,i);const h=await this._loading;this._addToDisplay(h,t,e.state),this._loading=null}_addToDisplay(e,t,i){if(null==e.pixelBlock)return this.container.children.forEach((e=>e.destroy())),void this.container.removeAllChildren();const{extent:s,pixelBlock:r}=e,a=new Z.X(r);a.offset=[0,0],a.symbolizerParameters=t,a.rawPixelData=e,a.invalidateVAO(),a.x=s.xmin,a.y=s.ymax,a.pixelRatio=i.pixelRatio,a.rotation=i.rotation,a.resolution=i.resolution,a.width=r.width*t.symbolTileSize,a.height=r.height*t.symbolTileSize,this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.container.symbolTypes="wind_speed"===t.style?["scalar","triangle"]:"simple_scalar"===t.style?["scalar"]:["triangle"],this.container.addChild(a)}};(0,s._)([(0,l.MZ)()],q.prototype,"fetchPixels",void 0),(0,s._)([(0,l.MZ)()],q.prototype,"container",void 0),(0,s._)([(0,l.MZ)()],q.prototype,"_loading",void 0),(0,s._)([(0,l.MZ)()],q.prototype,"updating",null),q=(0,s._)([(0,c.$)("esri.views.2d.layers.imagery.ImageryVFStrategy")],q);const z=q;let C=class extends x.A{constructor(){super(...arguments),this.attached=!1,this.container=new D,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(e,t,i,s)=>{const r=await this._projectFullExtentPromise,{symbolTileSize:a}=this.layer.renderer,{extent:n,width:o,height:h}=(0,E.$Q)(e,t,i,a,r);if(null!=r&&!r.intersects(e))return{extent:n,pixelBlock:null};const l={bbox:`${n.xmin}, ${n.ymin}, ${n.xmax}, ${n.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:a,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(l)){const e=this.getPixelData();if(null!=e&&`${e.extent.xmin}, ${e.extent.ymin}, ${e.extent.xmax}, ${e.extent.ymax}`===l.bbox)return e}const{pixelData:d}=await this.layer.fetchImage(n,o,h,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:s});this._dataParameters=l;const c=d?.pixelBlock;return null==c?{extent:n,pixelBlock:null}:{extent:n,pixelBlock:"vector-uv"===this.layer.rasterInfo.dataType?(0,E.FI)(c,"vector-uv"):c}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new z({container:this.container,fetchPixels:this._fetchpixels}),this.addHandles((0,h.wB)((()=>this.layer.renderer),(e=>this._updateSymbolizerParams(e)),h.pc),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.removeHandles("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){const e=this.container.children[0]?.rawPixelData;if(this.updating||!e)return null;const{extent:t,pixelBlock:i}=e;return{extent:t,pixelBlock:i}}hitTest(e){return new r.A({attributes:{},geometry:e.clone(),layer:this.layer})}update(e){this._strategy.update(e,this._symbolizerParams).catch((e=>{(0,_.zf)(e)||d.A.getLogger(this).error(e)}))}redraw(){const{renderer:e}=this.layer;e&&(this._updateSymbolizerParams(e),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,i=this._dataParameters.time===e.time,s=this._dataParameters.symbolTileSize===e.symbolTileSize,r=this._dataParameters.bbox===e.bbox;return t&&i&&s&&r}async _getProjectedFullExtent(e){try{return(0,k._l)(this.layer.fullExtent,e)}catch(t){try{const t=(await(0,P.A)(this.layer.url,{query:{option:"footprints",outSR:(0,B.YX)(e),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return t?S.A.fromJSON(t):null}catch{return null}}}_updateSymbolizerParams(e){"vector-field"===e.type&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};(0,s._)([(0,l.MZ)()],C.prototype,"attached",void 0),(0,s._)([(0,l.MZ)()],C.prototype,"container",void 0),(0,s._)([(0,l.MZ)()],C.prototype,"layer",void 0),(0,s._)([(0,l.MZ)()],C.prototype,"timeExtent",void 0),(0,s._)([(0,l.MZ)()],C.prototype,"type",void 0),(0,s._)([(0,l.MZ)()],C.prototype,"view",void 0),(0,s._)([(0,l.MZ)()],C.prototype,"updating",null),C=(0,s._)([(0,c.$)("esri.views.2d.layers.imagery.VectorFieldView2D")],C);const F=C;var H=i(50076),U=i(19247),$=i(31516),W=i(68295),O=i(2257);const L=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}get timeExtent(){return(0,$.F)(this.layer,this.view?.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(e,t){const{layer:i}=this;if(!e)throw new H.A("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i});const{popupEnabled:s}=i,r=(0,O.D8)(i,t);if(!s||null==r)return[];const a=await r.getRequiredFields();(0,_.Te)(t);const n=new W.A;n.timeExtent=this.timeExtent,n.geometry=e,n.outFields=a,n.outSpatialReference=e.spatialReference;const{resolution:o,spatialReference:h}=this.view,l="2d"===this.view.type?new U.A(o,o,h):new U.A(.5*o,.5*o,h),{returnTopmostRaster:d,showNoDataRecords:c}=r.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},u={returnDomainValues:!0,returnTopmostRaster:d,pixelSize:l,showNoDataRecords:c,signal:t?.signal};return i.queryVisibleRasters(n,u).then((e=>e))}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return(0,s._)([(0,l.MZ)()],t.prototype,"layer",void 0),(0,s._)([(0,l.MZ)()],t.prototype,"suspended",void 0),(0,s._)([(0,l.MZ)({readOnly:!0})],t.prototype,"timeExtent",null),(0,s._)([(0,l.MZ)()],t.prototype,"view",void 0),t=(0,s._)([(0,c.$)("esri.views.layers.ImageryLayerView")],t),t};var G=i(91196),N=i(771);let j=class extends(L((0,N.A)((0,g.e)(G.A)))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new u.Y,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:e}=this;return this.updating||!e?null:"getPixelData"in e?e.getPixelData():null}update(e){this.subview?.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new m.A({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new y.A(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([(0,h.wB)((()=>this.layer.exportImageServiceParameters.version),(e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())}),h.OH),(0,h.wB)((()=>this.timeExtent),(e=>{const{subview:t}=this;t&&(t.timeExtent=e,"redraw"in t?this.requestUpdate():t.redrawOrRefetch())}),h.OH),this.layer.on("redraw",(()=>{const{subview:e}=this;e&&("redraw"in e?e.redraw():e.redrawOrRefetch())})),(0,h.wB)((()=>this.layer.renderer),(()=>this._setSubView()))])}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),this.subview?.destroy(),this.subview=null,this._highlightView?.destroy(),this._exportImageVersion=-1}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){if(!((Array.isArray(e)?e[0]:a.A.isCollection(e)?e.at(0):e)instanceof r.A))return(0,n.hA)();let i=[];return Array.isArray(e)||a.A.isCollection(e)?i=e.map((e=>e.clone())):e instanceof r.A&&(i=[e.clone()]),this._highlightGraphics.addMany(i),(0,n.hA)((()=>this._highlightGraphics.removeMany(i)))}async doRefresh(){this.requestUpdate()}isUpdating(){const e=!this.subview||this.subview.updating||!!this._highlightView?.updating;return(0,o.A)("esri-2d-log-updating")&&console.log(`Updating ImageryLayerView2D (${this.layer.id}): ${e}\n-> subview ${!this.subview||this.subview.updating}\n-> higlightView ${this._highlightView?.updating}\n`),e}_setSubView(){if(!this.view)return;const e=this.layer.renderer?.type;let t="imagery";if("vector-field"===e?t="imageryVF":"flow"===e&&(t="flow"),this.subview){const{type:e}=this.subview;if(e===t)return this._attachSubview(this.subview),void("flow"===e?this.subview.redrawOrRefetch():"imagery"===e&&"lerc"===this.layer.format?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),this.subview?.destroy()}this.subview="imagery"===t?new R({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):"imageryVF"===t?new F({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new p.A({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0))}_detachSubview(e){e?.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1)}};(0,s._)([(0,l.MZ)()],j.prototype,"pixelData",null),(0,s._)([(0,l.MZ)()],j.prototype,"subview",void 0),j=(0,s._)([(0,c.$)("esri.views.2d.layers.ImageryLayerView2D")],j);const Y=j},70822:(e,t,i)=>{i.d(t,{A:()=>l});var s=i(35143),r=(i(76460),i(81806),i(47249),i(50076),i(85842)),a=i(61551),n=i(8995),o=i(13692);let h=class extends n.f{get hasHighlight(){return this.children.some((e=>e.hasData))}renderChildren(e){this.attributeView.update(),e.drawPhase===a.S5.HIGHLIGHT&&this.children.some((e=>e.hasData))&&(super.renderChildren(e),e.context.setColorMask(!0,!0,!0,!0),(0,o.lB)(e,!0,(e=>{this._renderChildren(e,a.RI.All)}),0))}};h=(0,s._)([(0,r.$)("esri.views.2d.layers.graphics.HighlightGraphicContainer")],h);const l=h},4176:(e,t,i)=>{i.d(t,{A:()=>P});var s=i(35143),r=i(91967),a=(i(81806),i(50346)),n=i(46053),o=(i(76460),i(47249),i(85842)),h=i(2413),l=i(80963),d=i(88235);const c=Math.PI/180;function u(e){return e*c}function p(e,t){const i=u(t.rotation),s=Math.abs(Math.cos(i)),r=Math.abs(Math.sin(i)),[a,n]=t.size;return e[0]=Math.round(n*r+a*s),e[1]=Math.round(n*s+a*r),e}var g=i(16060),m=i(40181),y=i(93453);const x=(0,h.vt)(),_=[0,0],w=new y.A(0,0,0,0),v=2048,f=2048,b=!1,M=!1,A=!1;let R=class extends r.A{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=A,this.imageMaxWidth=v,this.imageMaxHeight=f,this.imageRotationSupported=b,this.imageNormalizationSupported=M,this.update=(0,a.sg)((async(e,t)=>{if((0,a.Te)(t),!e.stationary||this.destroyed)return;const i=e.state,s=(0,l.Vp)(i.spatialReference),r=this.hidpi?e.pixelRatio:1,n=i.worldScreenWidth>0,o=n&&this.imageNormalizationSupported&&i.worldScreenWidth<i.size[0],h=Math.round((this.imageMaxWidth??0)/r),d=Math.round((this.imageMaxHeight??0)/r);o?(_[0]=i.worldScreenWidth,_[1]=i.size[1]):this.imageRotationSupported?(_[0]=i.size[0],_[1]=i.size[1]):p(_,i);const c=Math.floor(_[0])>h||Math.floor(_[1])>d,u=s&&(i.extent.xmin<s.valid[0]||i.extent.xmax>s.valid[1]),g=!this.imageNormalizationSupported&&u,m=!c&&!g,y=this.imageRotationSupported?i.rotation:0,x=this.container.children.slice();if(m){const e=o?i.paddedViewState.center:i.center;this._imagePromise=this._singleExport(i,_,e,i.resolution,y,r,t)}else{let e=Math.min(h,d);n&&(e=Math.min(i.worldScreenWidth,e),e=Math.round(i.worldScreenWidth/Math.ceil(i.worldScreenWidth/e))),this._imagePromise=this._tiledExport(i,e,r,t)}try{const e=await this._imagePromise??[];(0,a.Te)(t);const i=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=e;for(const t of x)e.includes(t)||i.push(t.fadeOut().then((()=>{t.remove(),t.destroy()})));for(const t of e)i.push(t.fadeIn());await Promise.all(i)}catch(w){this._imagePromise=null,(0,a.QP)(w)}}),5e3),this.updateExports=(0,a.sg)((async e=>{const t=[];for(const i of this.container.children){if(!i.visible||!i.stage)return;t.push(e(i).then((()=>{i.invalidateTexture(),i.requestRender()})))}this._imagePromise=(0,a.Lx)(t).then((()=>this._imagePromise=null)),await this._imagePromise}))}destroy(){this.bitmaps.forEach((e=>e.destroy())),this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}async _export(e,t,i,s,r,n){const o=await this.fetchSource(e,Math.floor(t*r),Math.floor(i*r),{rotation:s,pixelRatio:r,signal:n});(0,a.Te)(n);const h=new g.mb(null,!0);return h.x=e.xmin,h.y=e.ymax,h.resolution=e.width/t,h.rotation=s,h.pixelRatio=r,h.opacity=0,this.container.addChild(h),await h.setSourceAsync(o,n),(0,a.Te)(n),h}async _singleExport(e,t,i,s,r,a,n){!function(e,t,i,s){const[r,a]=t,[n,o]=s,h=.5*i;e[0]=r-h*n,e[1]=a-h*o,e[2]=r+h*n,e[3]=a+h*o}(x,i,s,t);const o=(0,h.w1)(x,e.spatialReference);return[await this._export(o,t[0],t[1],r,a,n)]}_tiledExport(e,t,i,s){const r=d.A.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),a=new m.A(r),n=a.getTileCoverage(e);if(!n)return null;const o=[];return n.forEach(((r,n,l,d)=>{w.set(r,n,l,0),a.getTileBounds(x,w);const c=(0,h.w1)(x,e.spatialReference);o.push(this._export(c,t,t,0,i,s).then((e=>(0!==d&&(w.set(r,n,l,d),a.getTileBounds(x,w),e.x=x[0],e.y=x[3]),e))))})),Promise.all(o)}};(0,s._)([(0,n.MZ)()],R.prototype,"_imagePromise",void 0),(0,s._)([(0,n.MZ)()],R.prototype,"bitmaps",void 0),(0,s._)([(0,n.MZ)()],R.prototype,"container",void 0),(0,s._)([(0,n.MZ)()],R.prototype,"fetchSource",void 0),(0,s._)([(0,n.MZ)()],R.prototype,"hidpi",void 0),(0,s._)([(0,n.MZ)()],R.prototype,"imageMaxWidth",void 0),(0,s._)([(0,n.MZ)()],R.prototype,"imageMaxHeight",void 0),(0,s._)([(0,n.MZ)()],R.prototype,"imageRotationSupported",void 0),(0,s._)([(0,n.MZ)()],R.prototype,"imageNormalizationSupported",void 0),(0,s._)([(0,n.MZ)()],R.prototype,"requestUpdate",void 0),(0,s._)([(0,n.MZ)()],R.prototype,"updating",null),R=(0,s._)([(0,o.$)("esri.views.2d.layers.support.ExportStrategy")],R);const P=R}}]);
//# sourceMappingURL=9092.6a77b58b.chunk.js.map