"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[1332],{82250:(t,e,i)=>{i.d(e,{Ir:()=>l,QE:()=>o,RH:()=>c,Zd:()=>h,cN:()=>a,xU:()=>d});var s=i(19555),n=i(72745),r=i(42510);const a=Object.freeze({left:0,center:.5,right:1}),h=Object.freeze({"bottom-left":(0,n.fA)(0,0),bottom:(0,n.fA)(.5,0),"bottom-right":(0,n.fA)(1,0),left:(0,n.fA)(0,.5),center:(0,n.fA)(.5,.5),right:(0,n.fA)(1,.5),"top-left":(0,n.fA)(0,1),top:(0,n.fA)(.5,1),"top-right":(0,n.fA)(1,1)});function o(t){switch(t){case"left":return r.lV.Left;case"right":return r.lV.Right;default:return r.lV.Center}}function l(t,e){switch(e){case"bottom":return"left"===t?"bottom-left":"right"===t?"bottom-right":"bottom";case"center":return t;case"top":return"left"===t?"top-left":"right"===t?"top-right":"top"}}function c(t){return"middle"===t?"center":t}function d(t,e){switch(t){case"top":return(0,s.hZ)(e,0,r.Xd);case"bottom":return(0,s.hZ)(e,0,-r.Xd);default:return(0,s.C)(e,n.uY)}}},48190:(t,e,i)=>{i.d(e,{z:()=>n});var s=i(39345);function n(t){const{size:e}=t.definition,i=t.fontString(e);let n=r.get(i);if(!n){const l=(0,s.y)(h,0,0).getContext("2d");t.setFontProperties(l,e);const c=l.measureText(o);n=new a(c.actualBoundingBoxAscent,c.actualBoundingBoxDescent),r.set(i,n)}return n}const r=new Map;class a{get maxHeight(){return this.maxAscent+this.maxDescent}constructor(t,e){this.maxAscent=t,this.maxDescent=e}}const h={canvas:null},o=(()=>{let t="";for(let e=32;e<127;e++)t+=String.fromCharCode(e);return t})()},39345:(t,e,i)=>{function s(t,e,i){return t.canvas||(t.canvas=document.createElement("canvas")),t.canvas.width=e,t.canvas.height=i,t.canvas}i.d(e,{y:()=>s})},42510:(t,e,i)=>{i.d(e,{Js:()=>o,Xd:()=>h,lV:()=>c});var s=i(15941),n=i(22955),r=i(48190),a=i(39345);const h=1;class o{constructor(t,e,i,s){this.text=t,this._alignment=e,this._parameters=i,this._maxSize=s,this._textWidths=[],this._lineWidths=[],this._renderPixelRatio=null,this._metricsCached=null,this.key=`${t}--${this._parameters.key}-${this._alignment}`,this._lines=t.replaceAll(" ","\xa0").split(/\r?\n/)}get displayWidth(){return Math.ceil(this._displayWidth+2*this._horizontalPadding)}get displayHeight(){let t=this._metrics.firstLineAscent;for(let e=0;e<this._lines.length-1;e++)t+=this._lineSpacing;return t+=this._metrics.lastLineDescent,Math.ceil(t+2*this._haloSize+2*this._verticalPadding)}get renderedWidth(){return this._toRoundedRenderUnit(this.displayWidth)}get renderedHeight(){return this._toRoundedRenderUnit(this.displayHeight)}get firstRenderedBaselinePosition(){return this._toRenderUnit(this._firstLineYOffset+this._metrics.firstLineAscent)}get _firstLineYOffset(){return this._verticalPadding+this._haloSize}get _metrics(){if(null==this._metricsCached){const t=(0,a.y)(d,u,u).getContext("2d"),e=this._parameters.definition.pixelRatio,i=this._fontSize*e;this._parameters.setFontProperties(t,i);let s=2*this._haloSize;const n=this._parameters.definition.font;"italic"!==n.style&&"oblique"!==n.style&&"bold"!==n.weight&&"bolder"!==n.weight||(s+=.3*t.measureText("A").width),this._textWidths.length=0,this._lineWidths.length=0;let h=0,o=0,l=0,c=0,_=0;this._lines.forEach(((i,n)=>{const r=t.measureText(i),a=r.width/e,d=a+s;this._textWidths.push(a),this._lineWidths.push(d),h=Math.max(h,d),c=Math.max(c,r.actualBoundingBoxAscent/e),_=Math.max(_,r.actualBoundingBoxDescent/e),0===n&&(o=r.actualBoundingBoxAscent/e),n===this._lines.length-1&&(l=r.actualBoundingBoxDescent/e)}));const g=(0,r.z)(this._parameters),p=Math.max(c,g.maxAscent),m=Math.max(_,g.maxDescent),y=o,I="underline"===this._parameters.definition.font.decoration?m:l,v=h;this._metricsCached=new f(y,I,p,m,v)}return this._metricsCached}get _lineSpacing(){return(this._midLineHeight+this._linePadding)*this._parameters.definition.lineSpacingFactor}get _midLineHeight(){return this._metrics.midLineHeight}get _linePadding(){return this._midLineHeight*_}get _midLineAscent(){return this._metrics.maxLineAscent}get _renderedFontSize(){return this._toRenderUnit(this._fontSize)}get _fontSize(){return this._parameters.definition.size}get _renderedHaloSize(){return this._toRenderUnit(this._haloSize)}get _haloSize(){return this._parameters.haloSize}get _horizontalPadding(){return this._hasBackground?this._parameters.definition.background.padding[0]:0}get _verticalPadding(){return Math.max(this._hasBackground?this._parameters.definition.background.padding[1]:0,h)}get _hasBackground(){return!!this._parameters.backgroundStyle}get renderPixelRatio(){if(null==this._renderPixelRatio){const t=this._parameters.definition.pixelRatio;this._renderPixelRatio=Math.min(t,Math.min(this._maxSize[0]/this.displayWidth,this._maxSize[1]/this.displayHeight))}return this._renderPixelRatio}_getLineXOffset(t){switch(this._alignment){case c.Left:return this._horizontalPadding;case c.Center:return(this.displayWidth-this._lineWidths[t])/2;case c.Right:return this.displayWidth-this._horizontalPadding-this._lineWidths[t]}}render(t,e,i){t.save();const s=e/=this.renderPixelRatio,r=i/=this.renderPixelRatio,a=this._haloSize,h=this._firstLineYOffset+this._metrics.firstLineAscent;e+=a,i+=h;const o=this._haloSize>0;o&&this._renderHalo(t,s,r,a,h),this._parameters.setFontProperties(t,this._renderedFontSize);for(let n=0;n<this._lines.length;++n){const s=this._lines[n],r=this._getLineXOffset(n);o&&(t.globalCompositeOperation="destination-out",t.fillStyle="rgb(0, 0, 0)",this._fillText(t,s,e+r,i),this._renderLineDecoration(t,e+r,i,this._textWidths[n])),t.globalCompositeOperation="source-over",t.fillStyle=this._parameters.textStyle,this._fillText(t,s,e+this._getLineXOffset(n),i),this._renderLineDecoration(t,e+r,i,this._textWidths[n]),i+=this._lineSpacing}if(n.b.TEXT_SHOW_BASELINE){t.strokeStyle=g,t.setLineDash([2,2]),t.lineWidth=1;let e=r+h;for(let i=0;i<this._lines.length;++i)this._drawLine(t,[s,e],[s+this.displayWidth,e]),e+=this._lineSpacing}if(n.b.TEXT_SHOW_BORDER&&(t.strokeStyle=g,t.setLineDash([]),t.lineWidth=1,this._drawBox(t,[s,r],[this.displayWidth,this.displayHeight])),this._hasBackground){const e=this._parameters.definition.background.borderRadius*this.renderPixelRatio;this._roundedRect(t,s,r,e),t.globalCompositeOperation="destination-over",t.fillStyle=this._parameters.backgroundStyle,t.fill()}t.restore()}_renderLineDecoration(t,e,i,s){let n=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if("none"===this._parameters.definition.font.decoration||0===s)return;const r=Math.max(this._parameters.definition.size/16,1);switch(this._parameters.definition.font.decoration){case"underline":i+=2*r;break;case"line-through":i-=.33*this._midLineAscent}const a=n?this._haloSize:0;t.strokeStyle=n?this._parameters.haloStyle:this._parameters.textStyle,t.lineWidth=this._toRenderUnit(r+2*a),t.beginPath(),t.moveTo(this._toRenderUnit(e-a),this._toRenderUnit(i)),t.lineTo(this._toRenderUnit(e+s+a),this._toRenderUnit(i)),t.stroke()}_roundedRect(t,e,i,n){e=this._toRenderUnit(e),i=this._toRenderUnit(i);const r=this.renderedWidth,a=this.renderedHeight;0!==n?(n=(0,s.qE)(n,0,Math.floor(a/2)),t.beginPath(),t.moveTo(e,i+n),t.arcTo(e,i,e+n,i,n),t.lineTo(e+r-n,i),t.arcTo(e+r,i,e+r,i+n,n),t.lineTo(e+r,i+a-n),t.arcTo(e+r,i+a,e+r-n,i+a,n),t.lineTo(e+n,i+a),t.arcTo(e,i+a,e,i+a-n,n),t.closePath()):t.rect(e,i,r,a)}_renderHalo(t,e,i,s,n){const r=this.renderedWidth,h=this.renderedHeight,o=(0,a.y)(d,Math.max(r,u),Math.max(h,u)),l=o.getContext("2d");l.clearRect(0,0,r,h),this._parameters.setFontProperties(l,this._renderedFontSize),l.fillStyle=this._parameters.haloStyle,l.strokeStyle=this._parameters.haloStyle;const c=this._renderedHaloSize<3;l.lineJoin=c?"miter":"round",c?this._renderHaloEmulated(l,s,n):this._renderHaloNative(l,s,n);let _=n;for(let a=0;a<this._lines.length;++a){const t=this._getLineXOffset(a);this._renderLineDecoration(l,s+t,_,this._textWidths[a],!0),_+=this._lineSpacing}t.globalAlpha=this._parameters.definition.halo.color[3],t.drawImage(o,0,0,r,h,this._toRenderUnit(e),this._toRenderUnit(i),r,h),t.globalAlpha=1}_renderHaloEmulated(t,e,i){for(let s=0;s<this._lines.length;++s){const n=this._lines[s],r=this._getLineXOffset(s);for(const[s,a]of l)this._fillText(t,n,e+r+this._haloSize*s,i+this._haloSize*a);i+=this._lineSpacing}}_renderHaloNative(t,e,i){const s=2*this._haloSize;for(let n=0;n<this._lines.length;++n){const r=this._lines[n],a=this._getLineXOffset(n),h=5,o=.1;for(let n=0;n<h;n++){const l=1-(h-1)*o+n*o;t.lineWidth=this._toRenderUnit(l*s),this._strokeText(t,r,e+a,i)}i+=this._lineSpacing}}get _displayWidth(){return this._metrics.displayWidth}_toRenderUnit(t){return t*this.renderPixelRatio}_toRoundedRenderUnit(t){return Math.round(t*this.renderPixelRatio)}_fillText(t,e,i,s){t.fillText(e,this._toRenderUnit(i),this._toRenderUnit(s))}_strokeText(t,e,i,s){t.strokeText(e,this._toRenderUnit(i),this._toRenderUnit(s))}_drawLine(t,e,i){t.beginPath(),t.moveTo(this._toRoundedRenderUnit(e[0])+.5,this._toRoundedRenderUnit(e[1])+.5),t.lineTo(this._toRoundedRenderUnit(i[0])+.5,this._toRoundedRenderUnit(i[1])+.5),t.stroke()}_drawBox(t,e,i){const s=this._toRenderUnit(e[0]),n=this._toRenderUnit(e[1]),r=this._toRenderUnit(i[0]),a=this._toRenderUnit(i[1]),h=Math.floor(s)+.5,o=Math.ceil(s+r)-.5,l=Math.floor(n)+.5,c=Math.ceil(n+a)-.5;t.beginPath(),t.moveTo(h,l),t.lineTo(o,l),t.lineTo(o,c),t.lineTo(h,c),t.lineTo(h,l),t.stroke()}}const l=[];{const t=16;for(let e=0;e<360;e+=360/t)l.push([Math.cos(Math.PI*e/180),Math.sin(Math.PI*e/180)])}var c;!function(t){t[t.Left=0]="Left",t[t.Center=1]="Center",t[t.Right=2]="Right"}(c||(c={}));const d={canvas:null},_=.2,u=512,g="rgb(255, 0, 255, 0.5)";class f{get firstLineHeight(){return this.firstLineAscent+this.maxLineDescent}get midLineHeight(){return this.maxLineAscent+this.maxLineDescent}get lastLineHeight(){return this.maxLineAscent+this.lastLineDescent}constructor(t,e,i,s,n){this.firstLineAscent=t,this.lastLineDescent=e,this.maxLineAscent=i,this.maxLineDescent=s,this.displayWidth=n}}},71488:(t,e,i)=>{i.d(e,{h:()=>n});i(3112);var s=i(35737);i(46571);class n extends s.R6{constructor(t,e,i,s,n,r){super(t,e),this.layerUid=t,this.graphicUid=e,this.geometryId=i,this.triangleNr=s,this.baseBoundingSphere=n,this.numLodLevels=r}}},3595:(t,e,i)=>{i.d(e,{L:()=>lt});var s=i(35143),n=i(18690),r=i(50076),a=i(87663),h=i(30726),o=i(50346),l=i(46053),c=(i(81806),i(76460),i(85842)),d=i(13191),_=i(20664),u=i(9392),g=i(55855),f=i(22955),p=i(57481),m=i(48549),y=i(33062),I=i(34981),v=i(60586),A=i(32119),T=i(3112),S=i(94536),L=i(77730),R=i(86994),b=i(66470),x=i(91967),E=i(54099),C=i(63919),M=i(44680),O=i(34761),D=i(88105),w=i(94966),F=i(76718),N=i(93345);class H{constructor(t,e,i){this._elementSize=e,this._buffer=F.g.createVertex(t,N._U.STATIC_DRAW),this.resize(i)}destroy(){this._buffer.dispose()}get elementSize(){return this._elementSize}get capacity(){return this._capacity}get array(){return this._array}get buffer(){return this._buffer}get usedMemory(){return this._array.byteLength+this._buffer.usedMemory}copyRange(t,e,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const n=new Uint8Array(this.array,t*this.elementSize,(e-t)*this.elementSize);new Uint8Array(i.array,s*this.elementSize).set(n)}transferAll(){this._buffer.setData(this._array)}transferRange(t,e){const i=t*this._elementSize,s=e*this._elementSize;this._buffer.setSubData(new Uint8Array(this._array),i,i,s)}resize(t){const e=t*this._elementSize,i=new ArrayBuffer(e);this._array&&(t>=this._capacity?new Uint8Array(i).set(new Uint8Array(this._array)):new Uint8Array(i).set(new Uint8Array(this._array).subarray(0,t*this._elementSize))),this._array=i,this._buffer.setSize(e),this._capacity=t}}class U{constructor(t){this.modelOriginHi=t.getField(b.r.INSTANCEMODELORIGINHI,D.xs),this.modelOriginLo=t.getField(b.r.INSTANCEMODELORIGINLO,D.xs),this.model=t.getField(b.r.INSTANCEMODEL,D.jZ),this.modelNormal=t.getField(b.r.INSTANCEMODELNORMAL,D.jZ),this.featureAttribute=t.getField(b.r.INSTANCEFEATUREATTRIBUTE,D.Eq),this.color=t.getField(b.r.INSTANCECOLOR,D.XP),this.objectAndLayerIdColor=t.getField(b.r.INSTANCEOBJECTANDLAYERIDCOLOR,D.XP)}}class z{constructor(t,e){this._rctx=t,this._instanceBufferLayout=e,this._headIndex=0,this._tailIndex=0,this._firstIndex=null,this._captureFirstIndex=!0,this._updating=!1,this._prevHeadIndex=0,this._resized=!1,this._capacity=1}destroy(){this._buffer&&this._buffer.destroy()}get buffer(){return this._buffer.buffer}get view(){return this._view}get capacity(){return this._capacity}get size(){const t=this._headIndex,e=this._tailIndex;return t>=e?t-e:t+this._capacity-e}get isEmpty(){return this._headIndex===this._tailIndex}get isFull(){return this._tailIndex===(this._headIndex+1)%this._capacity}get headIndex(){return this._headIndex}get tailIndex(){return this._tailIndex}get firstIndex(){return this._firstIndex}get usedMemory(){return this._buffer?.usedMemory??0}reset(){this._headIndex=0,this._tailIndex=0,this._firstIndex=null}startUpdateCycle(){this._captureFirstIndex=!0}beginUpdate(){(0,R.vA)(!this._updating,"already updating"),this._updating=!0,this._prevHeadIndex=this._headIndex}endUpdate(){(0,R.vA)(this._updating,"not updating"),this.size<n.$U*this.capacity&&this._shrink(),this._resized?(this._buffer.transferAll(),this._resized=!1):this._transferRange(this._prevHeadIndex,this._headIndex),this._updating=!1}allocateHead(){(0,R.vA)(this._updating,"not updating"),this.isFull&&this._grow();const t=this.headIndex;return this._captureFirstIndex&&(this._firstIndex=t,this._captureFirstIndex=!1),this._incrementHead(),(0,R.vA)(this._headIndex!==this._tailIndex,"invalid pointers"),t}freeTail(){(0,R.vA)(this._updating,"not updating"),(0,R.vA)(this.size>0,"invalid size");const t=this._tailIndex===this._firstIndex;this._incrementTail(),t&&(this._firstIndex=this._tailIndex)}_grow(){const t=Math.max(B,Math.floor(this._capacity*n.Ji));this._resize(t)}_shrink(){const t=Math.max(B,Math.floor(this._capacity*n.He));this._resize(t)}_resize(t){if((0,R.vA)(this._updating,"not updating"),t===this._capacity)return;const e=new H(this._rctx,this._instanceBufferLayout.stride,t);if(this._buffer){this._firstIndex&&(this._firstIndex=(this._firstIndex+this._capacity-this._tailIndex)%this._capacity);const t=this.size,i=this._compactInstances(e);(0,R.vA)(i===t,"invalid compaction"),this._buffer.destroy(),this._tailIndex=0,this._headIndex=i,this._prevHeadIndex=0}this._resized=!0,this._capacity=t,this._buffer=e,this._view=new U(this._instanceBufferLayout.createView(this._buffer.array))}_compactInstances(t){const e=this._headIndex,i=this._tailIndex;return i<e?(this._buffer.copyRange(i,e,t),e-i):i>e?(this._buffer.copyRange(i,this._capacity,t),e>0&&this._buffer.copyRange(0,e,t,this._capacity-i),e+(this._capacity-i)):0}_incrementHead(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this._headIndex=(this._headIndex+t)%this._capacity}_incrementTail(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this._tailIndex=(this._tailIndex+t)%this._capacity}_transferRange(t,e){t<e?this._buffer.transferRange(t,e):t>e&&(e>0&&this._buffer.transferRange(0,e),this._buffer.transferRange(t,this._capacity))}}const B=64;var V;!function(t){t[t.ALLOCATED=1]="ALLOCATED",t[t.DEFAULT_ACTIVE=2]="DEFAULT_ACTIVE",t[t.VISIBLE=4]="VISIBLE",t[t.HIGHLIGHT=8]="HIGHLIGHT",t[t.HIGHLIGHT_ACTIVE=16]="HIGHLIGHT_ACTIVE",t[t.REMOVE=32]="REMOVE",t[t.TRANSFORM_CHANGED=64]="TRANSFORM_CHANGED",t[t.ACTIVE=18]="ACTIVE"}(V||(V={}));class P{constructor(t){this.localTransform=t.getField(b.r.LOCALTRANSFORM,D.E$),this.globalTransform=t.getField(b.r.GLOBALTRANSFORM,D.E$),this.modelOrigin=t.getField(b.r.MODELORIGIN,D.Xm),this.model=t.getField(b.r.INSTANCEMODEL,D.jZ),this.modelNormal=t.getField(b.r.INSTANCEMODELNORMAL,D.jZ),this.modelScaleFactors=t.getField(b.r.MODELSCALEFACTORS,D.gH),this.boundingSphere=t.getField(b.r.BOUNDINGSPHERE,D.Aj),this.featureAttribute=t.getField(b.r.FEATUREATTRIBUTE,D.Eq),this.color=t.getField(b.r.COLOR,D.XP),this.objectAndLayerIdColor=t.getField(b.r.OBJECTANDLAYERIDCOLOR,D.XP),this.state=t.getField(b.r.STATE,D.SL),this.lodLevel=t.getField(b.r.LODLEVEL,D.SL)}}let G=class extends x.A{constructor(t,e){super(t),this.events=new E.A,this._capacity=0,this._size=0,this._next=0,this._highlightGroupMap=new Map,this._highlightGroupMapPrev=new Map,this._layout=function(t){let e=(0,m.BP)().mat4f64(b.r.LOCALTRANSFORM).mat4f64(b.r.GLOBALTRANSFORM).vec4f64(b.r.BOUNDINGSPHERE).vec3f64(b.r.MODELORIGIN).mat3f(b.r.INSTANCEMODEL).mat3f(b.r.INSTANCEMODELNORMAL).vec2f(b.r.MODELSCALEFACTORS);return t.includes(b.r.FEATUREATTRIBUTE)&&(e=e.vec4f(b.r.FEATUREATTRIBUTE)),t.includes(b.r.COLOR)&&(e=e.vec4u8(b.r.COLOR)),t.includes(b.r.OBJECTANDLAYERIDCOLOR)&&(e=e.vec4u8(b.r.OBJECTANDLAYERIDCOLOR)),e=e.u8(b.r.STATE).u8(b.r.LODLEVEL),e}(e),this._capacity=B,this._buffer=this._layout.createBuffer(this._capacity),this._view=new P(this._buffer)}get capacity(){return this._capacity}get size(){return this._size}get view(){return this._view}addInstance(){this._size+1>this._capacity&&this._grow();const t=this._findSlot();return this._view.state.set(t,V.ALLOCATED),this._size++,this.events.emit("instances-changed"),t}removeInstance(t){const e=this._view.state;(0,R.vA)(t>=0&&t<this._capacity&&!!(e.get(t)&V.ALLOCATED),"invalid instance handle"),this._getStateFlag(t,V.ACTIVE)?this._setStateFlags(t,V.REMOVE):this.freeInstance(t),this.events.emit("instances-changed")}freeInstance(t){const e=this._view.state;(0,R.vA)(t>=0&&t<this._capacity&&!!(e.get(t)&V.ALLOCATED),"invalid instance handle"),e.set(t,0),this._size--}setLocalTransform(t,e){let i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this._view.localTransform.setMat(t,e),i&&this.updateModelTransform(t)}getLocalTransform(t,e){this._view.localTransform.getMat(t,e)}setGlobalTransform(t,e){let i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this._view.globalTransform.setMat(t,e),i&&this.updateModelTransform(t)}getGlobalTransform(t,e){this._view.globalTransform.getMat(t,e)}updateModelTransform(t){const e=this._view,i=W,s=k;e.localTransform.getMat(t,Z),e.globalTransform.getMat(t,j);const n=(0,O.lw)(j,j,Z);(0,_.i)(i,n[12],n[13],n[14]),e.modelOrigin.setVec(t,i),(0,C.z0)(s,n),e.model.setMat(t,s);const r=(0,w.wp)(W,n);r.sort(),e.modelScaleFactors.set(t,0,r[1]),e.modelScaleFactors.set(t,1,r[2]),(0,C.B8)(s,s),(0,C.mg)(s,s),e.modelNormal.setMat(t,s),this._setStateFlags(t,V.TRANSFORM_CHANGED),this.events.emit("instance-transform-changed",{index:t})}getModelTransform(t,e){const i=this._view;i.model.getMat(t,k),i.modelOrigin.getVec(t,W),e[0]=k[0],e[1]=k[1],e[2]=k[2],e[3]=0,e[4]=k[3],e[5]=k[4],e[6]=k[5],e[7]=0,e[8]=k[6],e[9]=k[7],e[10]=k[8],e[11]=0,e[12]=W[0],e[13]=W[1],e[14]=W[2],e[15]=1}applyShaderTransformation(t,e){null!=this.shaderTransformation&&this.shaderTransformation.applyTransform(this,t,e)}getCombinedModelTransform(t,e){return this.getModelTransform(t,e),null!=this.shaderTransformation&&this.shaderTransformation.applyTransform(this,t,e),e}getCombinedLocalTransform(t,e){this._view.localTransform.getMat(t,e),null!=this.shaderTransformation&&this.shaderTransformation.applyTransform(this,t,e)}getCombinedMaxScaleFactor(t){let e=this._view.modelScaleFactors.get(t,1);return null!=this.shaderTransformation&&(this.shaderTransformation.scaleFactor(W,this,t),e*=Math.max(W[0],W[1],W[2])),e}getCombinedMedianScaleFactor(t){let e=this._view.modelScaleFactors.get(t,0);return null!=this.shaderTransformation&&(this.shaderTransformation.scaleFactor(W,this,t),e*=function(t,e,i){return Math.max(Math.min(t,e),Math.min(Math.max(t,e),i))}(W[0],W[1],W[2])),e}getModel(t,e){this._view.model.getMat(t,e)}setFeatureAttribute(t,e){this._view.featureAttribute.setVec(t,e)}getFeatureAttribute(t,e){this._view.featureAttribute.getVec(t,e)}setColor(t,e){this._view.color.setVec(t,e)}setObjectAndLayerIdColor(t,e){this._view.objectAndLayerIdColor.setVec(t,e)}setVisible(t,e){e!==this.getVisible(t)&&(this._setStateFlag(t,V.VISIBLE,e),this.events.emit("instance-visibility-changed",{index:t}))}getVisible(t){return this._getStateFlag(t,V.VISIBLE)}setHighlight(t,e,i){let s=this._highlightGroupMap.get(t);e?(s||(s=new Set,this._highlightGroupMap.set(t,s)),s.add(i)&&(this._setStateFlag(t,V.HIGHLIGHT,!0),this.events.emit("instance-highlight-changed"))):s?.delete(i)&&(0===s.size&&(this._highlightGroupMap.delete(t),this._setStateFlag(t,V.HIGHLIGHT,!1)),this.events.emit("instance-highlight-changed"))}getHighlight(t){return this._getStateFlag(t,V.HIGHLIGHT)}foreachHighlightGroupPrev(t,e){this._highlightGroupMapPrev.get(t)?.forEach(e),this._highlightGroupMapPrev.delete(t)}foreachHighlightGroup(t,e){const i=this._highlightGroupMap.get(t);i?.forEach(e),i?this._highlightGroupMapPrev.set(t,new Set(i)):this._highlightGroupMapPrev.delete(t)}getState(t){return this._view.state.get(t)}getLodLevel(t){return this._view.lodLevel.get(t)}countFlags(t){let e=0;for(let i=0;i<this._capacity;++i)this.getState(i)&t&&++e;return e}_setStateFlags(t,e){const i=this._view.state;e=i.get(t)|e,i.set(t,e)}_clearStateFlags(t,e){const i=this._view.state;e=i.get(t)&~e,i.set(t,e)}_setStateFlag(t,e,i){i?this._setStateFlags(t,e):this._clearStateFlags(t,e)}_getStateFlag(t,e){return!!(this._view.state.get(t)&e)}_grow(){this._capacity=Math.max(B,Math.floor(this._capacity*n.Ji)),this._buffer=this._layout.createBuffer(this._capacity).copyFrom(this._buffer),this._view=new P(this._buffer)}_findSlot(){const t=this._view.state;let e=this._next;for(;t.get(e)&V.ALLOCATED;)e=e+1===this._capacity?0:e+1;return this._next=e+1===this._capacity?0:e+1,e}};(0,s._)([(0,l.MZ)({constructOnly:!0})],G.prototype,"shaderTransformation",void 0),(0,s._)([(0,l.MZ)()],G.prototype,"_size",void 0),(0,s._)([(0,l.MZ)({readOnly:!0})],G.prototype,"size",null),G=(0,s._)([(0,c.$)("esri.views.3d.webgl-engine.lib.lodRendering.InstanceData")],G);const W=(0,u.vt)(),k=(0,M.vt)(),Z=(0,d.vt)(),j=(0,d.vt)();var q=i(78315);class X extends S.A{constructor(t,e){super((t=>(0,q.w)(this._instanceData.view.boundingSphere.getVec(t,this._tmpSphere))),{maximumDepth:25}),this._instanceData=t,this._boundingSphere=e,this._tmpSphere=(0,q.c)(),this._tmpMat4=(0,d.vt)()}addInstance(t){const e=this._instanceData.view.boundingSphere,i=this._instanceData.getCombinedModelTransform(t,this._tmpMat4);(0,_.t)((0,q.a)(this._tmpSphere),this._boundingSphere.center,i),this._tmpSphere[3]=this._boundingSphere.radius*(0,w.hG)(i),e.setVec(t,this._tmpSphere),this.add([t])}removeInstance(t){this.remove([t])}}class J{constructor(t,e){this._worldSpaceRadius=t,this._minScreenSpaceRadii=e}selectLevel(t,e,i){const s=i.computeScreenPixelSizeAt(t),n=this._worldSpaceRadius*e/s;let r=0;for(let a=1;a<this._minScreenSpaceRadii.length;++a)n>=this._minScreenSpaceRadii[a]&&(r=a);return r}}var Y=i(42294),$=i(73146),K=i(50255),Q=i(29808),tt=i(69008),et=i(71488);class it{constructor(t,e){const i=t.renderContext.rctx,s=e.geometry;let n=null;n=s instanceof $.J?function(t,e,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;const n=t.createBufferWriter(),r=n.vertexBufferLayout,a=n.elementCount(e),h=r.createBuffer(a);return n.write(null,null,e,s,h,0),{material:t,vertexBufferLayout:r,buffer:h.buffer,elementCount:a,boundingInfo:i}}(s.material,s.attributes,s.boundingInfo):s;const r=n.material;this._materials=t.materials,r.setParameters({instancedDoublePrecision:!0}),this.geometry=s,this.material=r,this.glMaterials=new K.c(r,this._materials),this.vertexBufferLayout=n.vertexBufferLayout,this.vbo=F.g.createVertex(i,N._U.STATIC_DRAW,n.buffer),this.vao=new tt.Z(i,A.D,new Map([["geometry",(0,p.U)(n.vertexBufferLayout)]]),new Map([["geometry",this.vbo]])),this.vertexCount=n.elementCount}destroy(){this.glMaterials.dispose(),this.vbo.dispose(),this.vao.dispose()}get boundingInfo(){return this.geometry.boundingInfo}get triangleCount(){return this.vertexCount/3}intersect(t,e,i,s,n,r,a,h){if(!(this.geometry instanceof $.J))return;const o=this.geometry.id;this.material.intersect(this.geometry,t.transform.transform,t,i,s,((i,s,l,c,d)=>{if(i>=0){if(null!=e&&!e(t.rayBegin,t.rayEnd,i))return;const c=new et.h(r.layerUid,r.graphicUid(n),o,l,a,h);if((null==t.results.min.drapedLayerOrder||d>=t.results.min.drapedLayerOrder)&&(null==t.results.min.dist||i<t.results.min.dist)&&t.results.min.set(T.dz.LOD,c,i,s,t.transform.transform,d),t.options.store!==T.oH.MIN&&(null==t.results.max.drapedLayerOrder||d>=t.results.max.drapedLayerOrder)&&(null==t.results.max.dist||i>t.results.max.dist)&&t.results.max.set(T.dz.LOD,c,i,s,t.transform.transform,d),t.options.store===T.oH.ALL){const e=(0,Q.G7)(t.results.min.ray);e.set(T.dz.LOD,c,i,s,t.transform.transform,d),t.results.all.push(e)}}}))}}class st{static async create(t,e,i){const s=await Promise.allSettled(e.components.map((e=>t.controller.schedule((()=>new it(t,e)),i)))),r=s.map((t=>"fulfilled"===t.status?t.value:null)).filter(n.Ru);if((0,o.G4)(i)||r.length!==s.length){r.forEach((t=>t.destroy())),(0,o.Te)(i);for(const t of s)if("rejected"===t.status)throw t.reason}return new st(e.minScreenSpaceRadius,r)}constructor(t,e){this.minScreenSpaceRadius=t,this.components=e}destroy(){this.components.forEach((t=>t.destroy()))}intersect(t,e,i,s,n,r,a){this.components.forEach((h=>h.intersect(t,e,i,s,n,r,this.boundingSphere,a)))}get boundingBox(){if(null==this._boundingBox){const t=(0,Y.Ie)();this.components.forEach((e=>{null!=e.boundingInfo&&((0,Y.iT)(t,e.boundingInfo.bbMin),(0,Y.iT)(t,e.boundingInfo.bbMax))})),this._boundingBox=t}return this._boundingBox}get boundingSphere(){if(null==this._boundingSphere){const t=this.boundingBox,e=(0,u.vt)();(0,Y.gX)(t,e),this._boundingSphere={center:e,radius:.5*(0,Y._F)(t)}}return this._boundingSphere}get triangleCount(){return this.components.reduce(((t,e)=>t+e.triangleCount),0)}}var nt=i(99362),rt=i(68967),at=i(59648),ht=i(59752),ot=i(27207);let lt=class extends v.Cc{constructor(t,e){super(t),this.type=T.dz.LOD,this.isGround=!1,this._levels=[],this._defaultRenderInstanceData=new Array,this._highlightRenderInstanceDataMap=new Map,this._instanceIndex=0,this._cycleStartIndex=0,this._slicePlane=!1,this._camera=new y.A,this._updateCyclesWithStaticCamera=-1,this._needFullCycle=!1,this.produces=new Map([[L.N.OPAQUE_MATERIAL,t=>this._produces(t)],[L.N.TRANSPARENT_MATERIAL,t=>!!this._hasTransparentLevels()&&this._produces(t)]]),this._instanceData=new G({shaderTransformation:t.shaderTransformation},t.optionalFields),this.addHandles(e.registerTask(ht.W6.LOD_RENDERER,this))}initialize(){this._instanceBufferLayout=function(t){let e=(0,m.BP)().vec3f(b.r.INSTANCEMODELORIGINHI).vec3f(b.r.INSTANCEMODELORIGINLO).mat3f(b.r.INSTANCEMODEL).mat3f(b.r.INSTANCEMODELNORMAL);return null!=t&&t.includes("featureAttribute")&&(e=e.vec4f(b.r.INSTANCEFEATUREATTRIBUTE)),null!=t&&t.includes("color")&&(e=e.vec4u8(b.r.INSTANCECOLOR)),null!=t&&t.includes("objectAndLayerIdColor")&&(e=e.vec4u8(b.r.INSTANCEOBJECTANDLAYERIDCOLOR)),e}(this.optionalFields),this._glInstanceBufferLayout=(0,p.U)(this._instanceBufferLayout,1),this.addHandles([this._instanceData.events.on("instances-changed",(()=>this._requestUpdateCycle())),this._instanceData.events.on("instance-transform-changed",(t=>{let{index:e}=t;this._requestUpdateCycle(),this.metadata.notifyGraphicGeometryChanged(e)})),this._instanceData.events.on("instance-visibility-changed",(t=>{let{index:e}=t;this._requestUpdateCycle(!0),this.metadata.notifyGraphicVisibilityChanged(e)})),this._instanceData.events.on("instance-highlight-changed",(()=>this._requestUpdateCycle(!0)))])}get _allRenderInstanceData(){const t=[this._defaultRenderInstanceData];for(const e of this._highlightRenderInstanceDataMap)t.push(e[1]);return t}get _enableLevelSelection(){return this.symbol.levels.length>1}get levels(){return this._levels}get baseBoundingBox(){return this._levels[this._levels.length-1].boundingBox}get baseBoundingSphere(){return this._levels[this._levels.length-1].boundingSphere}get baseMaterial(){return this._levels[this._levels.length-1].components[0].material}get slicePlaneEnabled(){return this._slicePlane}set slicePlaneEnabled(t){this._slicePlane=t}get layerUid(){return this.metadata.layerUid}get instanceData(){return this._instanceData}get hasEmissions(){return this.baseMaterial.hasEmissions}get usedMemory(){return this._allRenderInstanceData.reduce(((t,e)=>e.reduce(((t,e)=>t+e.usedMemory),t)),0)}get renderStats(){const t=this._instanceData.size,e=[];return this._levels.forEach(((t,i)=>{const s=this._allRenderInstanceData[0][i].size+this._allRenderInstanceData[1][i].size,n=t.triangleCount;e.push({renderedInstances:s,renderedTriangles:s*n,trianglesPerInstance:n})})),{totalInstances:t,renderedInstances:e.reduce(((t,e)=>t+e.renderedInstances),0),renderedTriangles:e.reduce(((t,e)=>t+e.renderedTriangles),0),levels:e}}_createRenderInstanceDataArray(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const{rctx:e}=this._context.renderContext;return this.symbol.levels.map((i=>{t.push(new z(e,this._instanceBufferLayout))})),t}async initializeRenderContext(t,e){this._context=t,this._createRenderInstanceDataArray(this._defaultRenderInstanceData);const i=await Promise.allSettled(this.symbol.levels.map((i=>st.create(t,i,e)))),s=i.map((t=>"fulfilled"===t.status?t.value:null)).filter(n.Ru);if((0,o.G4)(e)||s.length!==i.length){s.forEach((t=>t.destroy())),(0,o.Te)(e);for(const t of i)if("rejected"===t.status)throw t.reason}this._levels=s,this._levelSelector=(t=>{const e=t.baseBoundingSphere.radius,i=t.levels.map((t=>t.minScreenSpaceRadius));return new J(e,i)})(this)}uninitializeRenderContext(){this._invalidateOctree(),this._levels.forEach((t=>t.destroy())),this._defaultRenderInstanceData.forEach((t=>t.destroy())),this._highlightRenderInstanceDataMap.forEach((t=>t.forEach((t=>t.destroy()))))}_hasTransparentLevels(){return this._levels.some((t=>t.components.some((t=>{const e=t.material.produces.get(L.N.TRANSPARENT_MATERIAL);return e?.(I.V.Color)}))))}hasHighlights(){return(0,a.Bs)(this._highlightRenderInstanceDataMap,(t=>t.some((t=>t.size>0))))}_produces(t){return t!==I.V.Highlight&&t!==I.V.ShadowHighlight||this.hasHighlights()}prepareRender(t){if(!f.b.LOD_INSTANCE_RENDERER_DISABLE_UPDATES){if(this._enableLevelSelection){const e=t.bind.contentCamera.equals(this._camera);this._camera.copyFrom(t.bind.contentCamera),e||this._requestUpdateCycle()}this._needFullCycle&&(this.runTask(ht.Bb),this._needFullCycle=!1)}}acquireTechniques(t){if(!this.baseMaterial.visible||!this.baseMaterial.isVisibleForOutput(t.output))return null;const e=this._getInstanceDatas(t);if(!e)return null;const i=new Array,s=this.levels;return e.forEach((e=>s.forEach(((s,n)=>{let{components:r}=s;return r.forEach((s=>i.push(this._beginComponent(t,e[n],s))))})))),i}render(t,e){const i=this._getInstanceDatas(t);if(!i||null==e)return;let s=0;t.rctx.bindVAO();const n=this.levels;i.forEach((i=>n.forEach(((n,r)=>{let{components:a}=n;return a.forEach((n=>this._renderComponent(t,e[s++],i[r],n,r)))}))))}_getInstanceDatas(t){const{output:e,bind:i}=t,s=e===I.V.Highlight,n=!s&&e!==I.V.ShadowHighlight,r=e!==I.V.ShadowExcludeHighlight;if(n)return r?this._allRenderInstanceData:[this._defaultRenderInstanceData];if(r){if(s){const{highlightGroupName:t}=i;if(!t)return null;const e=this._highlightRenderInstanceDataMap.get(t);return e?[e]:null}const t=[];for(const e of this._highlightRenderInstanceDataMap)t.push(e[1]);return t}return null}intersect(t,e,i,s){if(!this.baseMaterial.visible||null==this._octree)return;const n=(0,u.vt)();(0,_.d)(n,s,i);const r=n=>{this._instanceData.getCombinedModelTransform(n,ut),t.transform.set(ut),(0,_.t)(gt,i,t.transform.inverse),(0,_.t)(ft,s,t.transform.inverse);const r=this._instanceData.getState(n),a=this._instanceData.getLodLevel(n),h=this._levels.length;(0,R.vA)(!!(r&V.ACTIVE),"invalid instance state"),(0,R.vA)(a>=0&&a<h,"invaid lod level"),this._levels[a].intersect(t,e,gt,ft,n,this.metadata,h)};this.baseMaterial.parameters.verticalOffset?this._octree.forEach(r):this._octree.forEachAlongRay(i,n,r)}notifyShaderTransformationChanged(){this._invalidateOctree(),this._requestUpdateCycle()}get _octree(){if(null==this._octreeCached){const t=this._instanceData,e=t.view?.state;if(!e)return null;this._octreeCached=new X(t,this.baseBoundingSphere);for(let i=0;i<t.capacity;++i)e.get(i)&V.ACTIVE&&this._octreeCached.addInstance(i)}return this._octreeCached}_invalidateOctree(){this._octreeCached=(0,h.pR)(this._octreeCached)}queryDepthRange(t){if(null==this._octree)return{near:1/0,far:-1/0};const e=t.viewForward,i=this._octree.findClosest(e,S.A.DepthOrder.FRONT_TO_BACK,t.frustum),s=this._octree.findClosest(e,S.A.DepthOrder.BACK_TO_FRONT,t.frustum);if(null==i||null==s)return{near:1/0,far:-1/0};const n=t.eye,r=this._instanceData.view;r.boundingSphere.getVec(i,_t),(0,_.d)(_t,_t,n);const a=(0,_.f)(_t,e)-_t[3];r.boundingSphere.getVec(s,_t),(0,_.d)(_t,_t,n);const h=(0,_.f)(_t,e)+_t[3];return{near:Math.max(t.near,a),far:Math.min(t.far,h)}}_requestUpdateCycle(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this._updateCyclesWithStaticCamera=-1,this._cycleStartIndex=this._instanceIndex,t&&(this._needFullCycle=!0,this._context.requestRender())}_startUpdateCycle(){this._updateCyclesWithStaticCamera++,this._allRenderInstanceData.forEach((t=>t.forEach((t=>t.startUpdateCycle()))))}get running(){return this._instanceData.size>0&&this._updateCyclesWithStaticCamera<1}runTask(t){const{_enableLevelSelection:e,_camera:i,_levelSelector:s}=this;this._allRenderInstanceData.forEach((t=>t.forEach((t=>t.beginUpdate()))));const n=this._instanceData,a=n.view;let h=n.size;const o=n.capacity;let l=this._instanceIndex;const c=Math.ceil(o/500);for(let d=0;d<h&&!t.done;++d){l===this._cycleStartIndex&&this._startUpdateCycle();const d=a.state.get(l);let _=0;if(!(d&V.ALLOCATED)){l=l+1===o?0:l+1,h++;continue}const u=a.lodLevel.get(l);if(d&V.DEFAULT_ACTIVE&&this._defaultRenderInstanceData[u].freeTail(),d&V.HIGHLIGHT_ACTIVE&&n.foreachHighlightGroupPrev(l,(t=>{const e=this._highlightRenderInstanceDataMap.get(t);if(!e)throw new r.A("Internal error in lodRenderer");e[u].freeTail()})),d&V.REMOVE)n.freeInstance(l);else if(d&V.VISIBLE){let t=0;e&&(a.modelOrigin.getVec(l,dt),t=s.selectLevel(dt,n.getCombinedMedianScaleFactor(l),i)),_=d&~(V.ACTIVE|V.TRANSFORM_CHANGED),t>=0&&(d&V.HIGHLIGHT?(n.foreachHighlightGroup(l,(e=>{let i=this._highlightRenderInstanceDataMap.get(e);if(i||(i=this._createRenderInstanceDataArray(),i.forEach((t=>t.beginUpdate())),this._highlightRenderInstanceDataMap.set(e,i)),t>=i.length)throw new r.A(`LodRenderer internal error - missing lodLevel ${t}`);ct(i[t],a,l)})),_|=V.HIGHLIGHT_ACTIVE):(ct(this._defaultRenderInstanceData[t],a,l),_|=V.DEFAULT_ACTIVE)),a.state.set(l,_),a.lodLevel.set(l,t)}else _=d&~(V.ACTIVE|V.TRANSFORM_CHANGED),a.state.set(l,_);if(null!=this._octreeCached){const t=!!(d&V.ACTIVE),e=!!(_&V.ACTIVE);!t&&e?this._octreeCached.addInstance(l):t&&!e?this._octreeCached.removeInstance(l):t&&e&&d&V.TRANSFORM_CHANGED&&(this._octreeCached.removeInstance(l),this._octreeCached.addInstance(l))}l=l+1===o?0:l+1,l%c==0&&t.madeProgress()}this._instanceIndex=l,this._allRenderInstanceData.forEach((t=>t.forEach((t=>t.endUpdate())))),this._context.requestRender()}_beginComponent(t,e,i){if(0===e.size)return null;const s=i.glMaterials.load(t.rctx,t.bind.slot,t.output);return s?.beginSlot(t.bind)}_renderComponent(t,e,i,s,n){if(!e)return;const{bind:r,rctx:a}=t;a.runAppleAmdDriverHelper();const h=a.bindTechnique(e,r,s.material.parameters,mt);a.bindVAO(s.vao),e.ensureAttributeLocations(s.vao),f.b.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL&&t.output===I.V.Color&&(h.setUniform4fv("externalColor",pt[Math.min(n,pt.length-1)]),h.setUniform1i("colorMixMode",nt.Um.replace));const o=i.capacity,l=i.headIndex,c=i.tailIndex,d=i.firstIndex,_=this._glInstanceBufferLayout,u=(t,n)=>{(0,ot.yu)(a,A.D,i.buffer,_,t),a.drawArraysInstanced(e.primitiveType,0,s.vertexCount,n-t),(0,ot.Hi)(a,A.D,i.buffer,_)};s.material.parameters.transparent&&null!=d?l>c?((0,R.vA)(d>=c&&d<=l,"invalid firstIndex"),u(d,l),u(c,d)):l<c&&(d<=l?((0,R.vA)(d>=0&&d<=l,"invalid firstIndex"),u(d,l),u(c,o),u(0,d)):((0,R.vA)(d>=c&&d<=o,"invalid firstIndex"),u(d,o),u(0,l),u(c,d))):l>c?u(c,l):l<c&&(u(0,l),u(c,o)),a.bindVAO(null)}};function ct(t,e,i){const s=t.allocateHead();!function(t,e,i,s){(0,rt.Vk)(t.modelOrigin,e,i.modelOriginHi,i.modelOriginLo,s),i.model.copyFrom(s,t.model,e),i.modelNormal.copyFrom(s,t.modelNormal,e),t.color&&i.color&&i.color.copyFrom(s,t.color,e),t.objectAndLayerIdColor&&i.objectAndLayerIdColor&&i.objectAndLayerIdColor.copyFrom(s,t.objectAndLayerIdColor,e),t.featureAttribute&&i.featureAttribute&&i.featureAttribute.copyFrom(s,t.featureAttribute,e)}(e,i,t.view,s)}(0,s._)([(0,l.MZ)({constructOnly:!0})],lt.prototype,"symbol",void 0),(0,s._)([(0,l.MZ)({constructOnly:!0})],lt.prototype,"optionalFields",void 0),(0,s._)([(0,l.MZ)({constructOnly:!0})],lt.prototype,"metadata",void 0),(0,s._)([(0,l.MZ)({constructOnly:!0})],lt.prototype,"shaderTransformation",void 0),(0,s._)([(0,l.MZ)()],lt.prototype,"_instanceData",void 0),(0,s._)([(0,l.MZ)()],lt.prototype,"_cycleStartIndex",void 0),(0,s._)([(0,l.MZ)({readOnly:!0})],lt.prototype,"_enableLevelSelection",null),(0,s._)([(0,l.MZ)()],lt.prototype,"_updateCyclesWithStaticCamera",void 0),(0,s._)([(0,l.MZ)({readOnly:!0})],lt.prototype,"running",null),lt=(0,s._)([(0,c.$)("esri.views.3d.webgl-engine.lib.lodRendering.LodRenderer")],lt);const dt=(0,u.vt)(),_t=(0,g.vt)(),ut=(0,d.vt)(),gt=(0,u.vt)(),ft=(0,u.vt)(),pt=[(0,g.fA)(1,0,1,1),(0,g.fA)(0,0,1,1),(0,g.fA)(0,1,0,1),(0,g.fA)(1,1,0,1),(0,g.fA)(1,0,0,1)],mt=new at.V}}]);
//# sourceMappingURL=1332.e551da82.chunk.js.map