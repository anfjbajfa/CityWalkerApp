"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[1472],{61472:(t,i,e)=>{e.r(i),e.d(i,{default:()=>D});var s=e(35143),r=(e(95444),e(54099)),n=e(53084),h=e(68134),a=e(46053),o=(e(81806),e(76460),e(85842)),l=e(63733),c=e(71523),p=e(20072),y=e(69120);class d{constructor(t,i,e,s,r){this.graphic=t,this.index=i,this.x=e,this.y=s,this.viewEvent=r,this.type="graphic-click"}}class u{constructor(t,i,e,s,r){this.graphic=t,this.index=i,this.x=e,this.y=s,this.viewEvent=r,this.type="graphic-double-click"}}class g{constructor(t,i,e,s,r,n,h,a,o,l){this.graphic=t,this.allGraphics=i,this.index=e,this.x=s,this.y=r,this.dx=n,this.dy=h,this.totalDx=a,this.totalDy=o,this.viewEvent=l,this.defaultPrevented=!1,this.type="graphic-move-start"}preventDefault(){this.defaultPrevented=!0}}class v{constructor(t,i,e,s,r,n,h,a,o,l){this.graphic=t,this.allGraphics=i,this.index=e,this.x=s,this.y=r,this.dx=n,this.dy=h,this.totalDx=a,this.totalDy=o,this.viewEvent=l,this.defaultPrevented=!1,this.type="graphic-move"}preventDefault(){this.defaultPrevented=!0}}class m{constructor(t,i,e,s,r,n,h,a,o,l){this.graphic=t,this.allGraphics=i,this.index=e,this.x=s,this.y=r,this.dx=n,this.dy=h,this.totalDx=a,this.totalDy=o,this.viewEvent=l,this.defaultPrevented=!1,this.type="graphic-move-stop"}preventDefault(){this.defaultPrevented=!0}}class f{constructor(t,i,e,s,r){this.graphic=t,this.index=i,this.x=e,this.y=s,this.viewEvent=r,this.type="graphic-pointer-over"}}class _{constructor(t,i,e,s,r){this.graphic=t,this.index=i,this.x=e,this.y=s,this.viewEvent=r,this.type="graphic-pointer-out"}}class b{constructor(t,i,e,s,r){this.graphic=t,this.index=i,this.x=e,this.y=s,this.viewEvent=r,this.type="graphic-pointer-down"}}class x{constructor(t,i,e,s,r){this.graphic=t,this.index=i,this.x=e,this.y=s,this.viewEvent=r,this.type="graphic-pointer-up"}}var w=e(57308),G=e(91720),M=e(11500),k=e(76940),S=e(7246),E=e(86875);const O="indicator-symbols";let P=class extends r.A.EventedAccessor{constructor(t){super(t),this._activeGraphic=null,this._dragEvent=null,this._hoverGraphic=null,this._indicators=[],this._initialDragGeometry=null,this._manipulators=[],this._layerViews=null,this.type="graphic-mover",this.callbacks={onGraphicClick(){},onGraphicDoubleClick(){},onGraphicMoveStart(){},onGraphicMove(){},onGraphicMoveStop(){},onGraphicPointerOver(){},onGraphicPointerOut(){},onGraphicPointerDown(){},onGraphicPointerUp(){}},this.enableMoveAllGraphics=!1,this.graphics=[],this.indicatorsEnabled=!1,this.layer=new l.A({listMode:"hide",internal:!0,title:"GraphicMover highlight layer"}),this.view=null}initialize(){(0,y.Y)(this.view,this.layer),this._highlightHelper=new p.A({view:this.view}),this.refresh(),this.addHandles([(0,h.wB)((()=>this.graphics.length),(()=>this.refresh())),(0,h.z7)((()=>this.view?.ready),(()=>{this.addHandles([this.view.on("immediate-click",(t=>this._clickHandler(t)),w.o.TOOL),this.view.on("double-click",(t=>this._doubleClickHandler(t)),w.o.TOOL),this.view.on("pointer-down",(t=>this._pointerDownHandler(t)),w.o.TOOL),this.view.on("pointer-move",(t=>this._pointerMoveHandler(t)),w.o.TOOL),this.view.on("pointer-up",(t=>this._pointerUpHandler(t)),w.o.TOOL),this.view.on("drag",(t=>this._dragHandler(t)),w.o.TOOL),this.view.on("key-down",(t=>this._keyDownHandler(t)),w.o.TOOL)])}),{once:!0,initial:!0}),(0,h.wB)((()=>this.view),(t=>{this._highlightHelper.removeAll(),this._highlightHelper.view=t}))])}destroy(){this._removeIndicators(),this.view.map?.remove(this.layer),this.layer.destroy(),this.reset(),this._manipulators.forEach((t=>t.destroy())),this._manipulators=null}set highlightsEnabled(t){this._highlightHelper?.removeAll(),this._set("highlightsEnabled",t),t&&this._highlightHelper?.add(this.graphics)}get state(){const t=this.view.ready,i=this.graphics.length>0,e=this._activeGraphic;return t&&i?e?"moving":"active":t?"ready":"disabled"}refresh(){this.reset(),this._setup()}reset(){this._activeGraphic=null,this._hoverGraphic=null,this._dragEvent=null,this._highlightHelper.removeAll()}updateGeometry(t,i){const e=this.graphics[t];e&&(e.set("geometry",i),this._setUpIndicators())}_setup(){this._setUpHighlights(),this._setUpIndicators(),this._setUpManipulators(),this._syncLayerViews()}_clickHandler(t){const i=this._findTargetGraphic((0,M.ZV)(t));if(i){const e=new d(i,this.graphics.indexOf(i),t.x,t.y,t);this.emit("graphic-click",e),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(e)}}_doubleClickHandler(t){const i=this._findTargetGraphic((0,M.ZV)(t));if(i){const e=new u(i,this.graphics.indexOf(i),t.x,t.y,t);this.emit("graphic-double-click",e),this.callbacks.onGraphicDoubleClick&&this.callbacks.onGraphicDoubleClick(e)}}_pointerDownHandler(t){const i=this._findTargetGraphic((0,M.ZV)(t));if(i){this._activeGraphic=i;const{x:e,y:s}=t,r=new b(i,this.graphics.indexOf(i),e,s,t);this.emit("graphic-pointer-down",r),this.callbacks.onGraphicPointerDown&&this.callbacks.onGraphicPointerDown(r)}else this._activeGraphic=null}_pointerUpHandler(t){if(this._activeGraphic){const{x:i,y:e}=t,s=this.graphics.indexOf(this._activeGraphic),r=new x(this._activeGraphic,s,i,e,t);this.emit("graphic-pointer-up",r),this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(r)}}_pointerMoveHandler(t){if(this._dragEvent)return;const i=this._findTargetGraphic((0,M.ZV)(t));if(i){const{x:e,y:s}=t;if(this._hoverGraphic){if(this._hoverGraphic===i)return;const r=this.graphics.indexOf(this._hoverGraphic),n=new _(this.graphics[r],r,e,s,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",n),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(n)}const r=this.graphics.indexOf(i),n=new f(i,r,e,s,t);return this._hoverGraphic=i,this.emit("graphic-pointer-over",n),void(this.callbacks.onGraphicPointerOver&&this.callbacks.onGraphicPointerOver(n))}if(this._hoverGraphic){const{x:i,y:e}=t,s=this.graphics.indexOf(this._hoverGraphic),r=new _(this.graphics[s],s,i,e,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",r),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(r)}}_dragHandler(t){if("start"!==t.action&&!this._dragEvent||!this._activeGraphic?.geometry)return;"start"===t.action&&this._removeIndicators(),t.stopPropagation();const{action:i,x:e,y:s}=t,r=this.graphics.indexOf(this._activeGraphic),h=this._dragEvent?e-this._dragEvent.x:0,a=this._dragEvent?s-this._dragEvent.y:0,o=e-t.origin.x,l=s-t.origin.y,p="start"===i?this._activeGraphic.geometry:this._initialDragGeometry,y=(0,c.lR)(p,o,l,this.view);if(this._activeGraphic.geometry=y,this.enableMoveAllGraphics&&this.graphics.forEach((t=>{t!==this._activeGraphic&&(t.geometry=(0,c.lR)(t.geometry,h,a,this.view))})),this._dragEvent=t,"start"===i){this._initialDragGeometry=(0,n.o8)(p);const i=new g(this._activeGraphic,this.graphics,r,e,s,h,a,o,l,t);this.emit("graphic-move-start",i),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(i),i.defaultPrevented&&this._activeGraphic.set("geometry",p)}else if("update"===i){const i=new v(this._activeGraphic,this.graphics,r,e,s,h,a,o,l,t);this.emit("graphic-move",i),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(i),i.defaultPrevented&&(this._activeGraphic.geometry=p)}else{const i=new m(this._activeGraphic,this.graphics,r,e,s,h,a,o,l,t);this._dragEvent=null,this._activeGraphic=null,this._setUpIndicators(),this.emit("graphic-move-stop",i),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(i),i.defaultPrevented&&(this.graphics[r].set("geometry",this._initialDragGeometry),this._setUpIndicators()),this._initialDragGeometry=null}}_keyDownHandler(t){"a"!==t.key&&"d"!==t.key&&"n"!==t.key||"moving"!==this.state||t.stopPropagation()}_findTargetGraphic(t){const i=this.view.toMap(t),e=this.graphics;let s=null,r=Number.MAX_VALUE;this._syncLayerViews();const n=this._layerViews.flatMap((t=>"graphicsViews"in t?Array.from(t.graphicsViews(),(t=>t.hitTest(i))).flat():t.graphicsView.hitTest(i))).filter((t=>e.includes(t))).sort(((t,i)=>e.indexOf(t)-e.indexOf(i)));return n.length?n[0]:(this._manipulators.forEach((i=>{const e=i.intersectionDistance(t);null!=e&&e<r&&(r=e,s=i.graphic)})),s)}_syncLayerViews(){this._layerViews=[];const t=new Set;for(const i of this.graphics){const e=(0,y.i)(this.view,i.layer);e&&t.add(e)}this._layerViews=[...t]}_setUpManipulators(){const{graphics:t,view:i}=this;this._manipulators.forEach((t=>t.destroy())),this._manipulators=t.length?t.map((t=>new G.l({graphic:t,view:i}))):[]}_setUpHighlights(){this.highlightsEnabled&&this._highlightHelper.add(this.graphics)}_setUpIndicators(){if(this._removeIndicators(),this.indicatorsEnabled){for(const t of this.graphics){const i=t.clone();i.symbol=C(t),this._indicators.push(i),this.addHandles((0,h.wB)((()=>t.symbol),(()=>this._setUpIndicators())),O)}this.layer.addMany(this._indicators)}}_removeIndicators(){this.removeHandles(O),this._indicators.length&&(this.layer.removeMany(this._indicators),this._indicators.forEach((t=>t.destroy())),this._indicators=[])}};function C(t){if(null==t.symbol)return null;switch(t.symbol.type){case"cim":return new k.default({style:"circle",size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});case"picture-marker":{const{xoffset:i,yoffset:e,height:s,width:r}=t.symbol,n=s===r?r:Math.max(s,r);return new k.default({xoffset:i,yoffset:e,size:n,style:"square",color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-marker":{const{xoffset:i,yoffset:e,size:s,style:r}=t.symbol;return new k.default({xoffset:i,yoffset:e,style:"circle"===r?"circle":"square",size:s+2,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-fill":return new E.default({color:[0,0,0,0],outline:{style:"dash",color:[255,127,0,1],width:1}});case"simple-line":return new S.default({color:[255,127,0,1],style:"dash",width:1});case"text":{const{xoffset:i,yoffset:e}=t.symbol;return new k.default({xoffset:i,yoffset:e,size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}default:return null}}(0,s._)([(0,a.MZ)()],P.prototype,"_activeGraphic",void 0),(0,s._)([(0,a.MZ)({readOnly:!0})],P.prototype,"type",void 0),(0,s._)([(0,a.MZ)()],P.prototype,"callbacks",void 0),(0,s._)([(0,a.MZ)()],P.prototype,"enableMoveAllGraphics",void 0),(0,s._)([(0,a.MZ)()],P.prototype,"graphics",void 0),(0,s._)([(0,a.MZ)({value:!1})],P.prototype,"highlightsEnabled",null),(0,s._)([(0,a.MZ)()],P.prototype,"indicatorsEnabled",void 0),(0,s._)([(0,a.MZ)()],P.prototype,"layer",void 0),(0,s._)([(0,a.MZ)({readOnly:!0})],P.prototype,"state",null),(0,s._)([(0,a.MZ)()],P.prototype,"view",void 0),P=(0,s._)([(0,o.$)("esri.views.draw.support.GraphicMover")],P);const D=P},71523:(t,i,e)=>{e.d(i,{UT:()=>p,hs:()=>l,lR:()=>o,wW:()=>c});var s=e(15941),r=e(2413),n=e(65391),h=e(5262);function a(t,i,e,s){if(null==s||t.hasZ||(s=void 0),"point"===t.type)return t.x+=i,t.y+=e,t.hasZ&&null!=s&&(t.z+=s),t;if("multipoint"===t.type){const r=t.points;for(let t=0;t<r.length;t++)r[t]=y(r[t],i,e,s);return t}if("extent"===t.type)return t.xmin+=i,t.xmax+=i,t.ymin+=e,t.ymax+=e,null!=s&&(t.zmin??=0,t.zmin+=s,t.zmax??=0,t.zmax+=s),t;const r=(0,h.$K)(t),n="polyline"===t.type?t.paths:t.rings;for(let h=0;h<r.length;h++){const t=r[h];for(let r=0;r<t.length;r++)t[r]=y(t[r],i,e,s)}return"paths"in t?t.paths=n:t.rings=n,t}function o(t,i,e,s,r){const n=t.clone(),o=s.resolution;if("point"===n.type){if(r)a(n,i*o,-e*o);else{const t=s.state.transform,r=s.state.inverseTransform,h=t[0]*n.x+t[2]*n.y+t[4],a=t[1]*n.x+t[3]*n.y+t[5];n.x=r[0]*(h+i)+r[2]*(a+e)+r[4],n.y=r[1]*(h+i)+r[3]*(a+e)+r[5]}return n}if("multipoint"===n.type){if(r)a(n,i*o,-e*o);else{const t=n.points,r=s.state.transform,h=s.state.inverseTransform;for(let s=0;s<t.length;s++){const n=t[s],a=r[0]*n[0]+r[2]*n[1]+r[4],o=r[1]*n[0]+r[3]*n[1]+r[5],l=h[0]*(a+i)+h[2]*(o+e)+h[4],c=h[1]*(a+i)+h[3]*(o+e)+h[5];t[s]=d(n,l,c,void 0)}}return n}if("extent"===n.type){if(r)a(n,i*o,-e*o);else{const t=s.state.transform,r=s.state.inverseTransform,h=t[0]*n.xmin+t[2]*n.ymin+t[4],a=t[1]*n.xmin+t[3]*n.ymin+t[5],o=t[0]*n.xmax+t[2]*n.ymax+t[4],l=t[1]*n.xmax+t[3]*n.ymax+t[5];n.xmin=r[0]*(h+i)+r[2]*(a+e)+r[4],n.ymin=r[1]*(h+i)+r[3]*(a+e)+r[5],n.xmax=r[0]*(o+i)+r[2]*(l+e)+r[4],n.ymax=r[1]*(o+i)+r[3]*(l+e)+r[5]}return n}if(r)a(n,i*o,-e*o);else{const t=(0,h.$K)(n),r="polyline"===n.type?n.paths:n.rings,a=s.state.transform,o=s.state.inverseTransform;for(let s=0;s<t.length;s++){const r=t[s];for(let t=0;t<r.length;t++){const s=r[t],n=a[0]*s[0]+a[2]*s[1]+a[4],h=a[1]*s[0]+a[3]*s[1]+a[5],l=o[0]*(n+i)+o[2]*(h+e)+o[4],c=o[1]*(n+i)+o[3]*(h+e)+o[5];r[t]=d(s,l,c,void 0)}}"paths"in n?n.paths=r:n.rings=r}return n}function l(t,i,e,s){if("point"===t.type){const{x:r,y:n}=t,h=s?s[0]:r,a=s?s[1]:n,o=t.clone(),l=(r-h)*i+h,c=(n-a)*e+a;return o.x=l,o.y=c,o}if("multipoint"===t.type){const a=(0,h.$K)(t),o=(0,r.vt)(),[l,c,p,y]=(0,n.Yz)(o,[a]),u=s?s[0]:(l+p)/2,g=s?s[1]:(y+c)/2,v=t.clone(),m=v.points;for(let t=0;t<m.length;t++){const s=m[t],[r,n]=s,h=(r-u)*i+u,a=(n-g)*e+g;m[t]=d(s,h,a,void 0)}return v}if("extent"===t.type){const{xmin:r,xmax:n,ymin:h,ymax:a}=t,o=s?s[0]:(r+n)/2,l=s?s[1]:(a+h)/2,c=t.clone();if(c.xmin=(r-o)*i+o,c.ymax=(a-l)*e+l,c.xmax=(n-o)*i+o,c.ymin=(h-l)*e+l,c.xmin>c.xmax){const t=c.xmin,i=c.xmax;c.xmin=i,c.xmax=t}if(c.ymin>c.ymax){const t=c.ymin,i=c.ymax;c.ymin=i,c.ymax=t}return c}const a=(0,h.$K)(t),o=(0,r.vt)(),[l,c,p,y]=(0,n.Yz)(o,a),u=s?s[0]:(l+p)/2,g=s?s[1]:(y+c)/2,v=t.clone(),m="polyline"===v.type?v.paths:v.rings;for(let r=0;r<a.length;r++){const t=a[r];for(let s=0;s<t.length;s++){const n=t[s],[h,a]=n,o=(h-u)*i+u,l=(a-g)*e+g;m[r][s]=d(n,o,l,void 0)}}return"paths"in v?v.paths=m:v.rings=m,v}function c(t,i,e,s,r,n){const h=Math.sqrt((e-t)*(e-t)+(s-i)*(s-i));return Math.sqrt((r-t)*(r-t)+(n-i)*(n-i))/h}function p(t,i,e){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const n=Math.atan2(i.y-e.y,i.x-e.x)-Math.atan2(t.y-e.y,t.x-e.x),h=Math.atan2(Math.sin(n),Math.cos(n));return r?h:(0,s.KJ)(h)}function y(t,i,e,s){return d(t,t[0]+i,t[1]+e,null!=t[2]&&null!=s?t[2]+s:void 0)}function d(t,i,e,s){const r=[i,e];return t.length>2&&r.push(null!=s?s:t[2]),t.length>3&&r.push(t[3]),r}},91720:(t,i,e)=>{e.d(i,{l:()=>b});var s=e(35143),r=e(91967),n=e(54099),h=e(68134),a=e(76931),o=e(46053),l=(e(81806),e(76460),e(47249),e(85842)),c=e(19555),p=e(20664),y=e(9392),d=e(9624),u=e(64232),g=e(12482),v=e(84202),m=e(731),f=e(22579),_=e(55754);let b=class extends r.A{set graphic(t){this._circleCollisionCache=null,this._originalSymbol=t.symbol,this._set("graphic",t),this.attachSymbolChanged()}get elevationInfo(){const{layer:t}=this.graphic,i=t&&"elevationInfo"in t?t.elevationInfo:null,e=(0,g.ky)(this.graphic),s=i?i.offset:0;return new m.A({mode:e,offset:s})}set focusedSymbol(t){t!==this._get("focusedSymbol")&&(this._set("focusedSymbol",t),this._updateGraphicSymbol(),this._circleCollisionCache=null)}grabbableForEvent(){return!0}set grabbing(t){t!==this._get("grabbing")&&(this._set("grabbing",t),this._updateGraphicSymbol())}set hovering(t){t!==this._get("hovering")&&(this._set("hovering",t),this._updateGraphicSymbol())}set selected(t){t!==this._get("selected")&&(this._set("selected",t),this._updateGraphicSymbol(),this.events.emit("select-changed",{action:t?"select":"deselect"}))}get _focused(){return this._get("hovering")||this._get("grabbing")}constructor(t){super(t),this.layer=null,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.dragging=!1,this.cursor=null,this.consumesClicks=!0,this.events=new n.A.EventEmitter,this._circleCollisionCache=null,this._graphicSymbolChangedHandle=null,this._originalSymbol=null}destroy(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this._set("view",null)}intersectionDistance(t){const i=this.graphic;if(!1===i.visible)return null;const e=i.geometry;if(null==e)return null;const s=this._get("focusedSymbol"),r=null!=s?s:i.symbol;return"2d"===this.view.type?this._intersectDistance2D(this.view,t,e,r):this._intersectDistance3D(this.view,t,i)}attach(){this.attachSymbolChanged(),null!=this.layer&&this.layer.add(this.graphic)}detach(){this.detachSymbolChanged(),this._resetGraphicSymbol(),null!=this.layer&&this.layer.remove(this.graphic)}attachSymbolChanged(){this.detachSymbolChanged(),this._graphicSymbolChangedHandle=(0,h.wB)((()=>this.graphic?.symbol),(t=>{null!=t&&t!==this.focusedSymbol&&t!==this._originalSymbol&&(this._originalSymbol=t,this._focused&&null!=this.focusedSymbol&&(this.graphic.symbol=this.focusedSymbol))}),h.OH)}detachSymbolChanged(){null!=this._graphicSymbolChangedHandle&&(this._graphicSymbolChangedHandle.remove(),this._graphicSymbolChangedHandle=null)}onElevationChange(){}onViewChange(){}_updateGraphicSymbol(){this.graphic.symbol=this._focused&&null!=this.focusedSymbol?this.focusedSymbol:this._originalSymbol}_resetGraphicSymbol(){this.graphic.symbol=this._originalSymbol}_intersectDistance2D(t,i,e,s){if(null==(s=s||(0,v.SF)(e)))return null;let r=this._circleCollisionCache;if("point"===e.type&&"cim"===s.type&&"CIMPointSymbol"===s.data.symbol?.type&&s.data.symbol.symbolLayers){const{offsetX:r,offsetY:n,size:h}=(0,f.T)(s),o=(0,a.WA)(i,w),l=h/2,p=t.toScreen(e),y=p.x+r,d=p.y+n;return(0,c.hG)(o,[y,d])<l*l?1:null}if("point"!==e.type||"simple-marker"!==s.type)return(0,_.t)(i,e,t)?1:null;if(null==r||!r.originalPoint.equals(e)){const i=e,n=t.spatialReference;if((0,d.canProjectWithoutEngine)(i.spatialReference,n)){const t=(0,d.project)(i,n);r={originalPoint:i.clone(),mapPoint:t,radiusPx:(0,a.Lz)(s.size)},this._circleCollisionCache=r}}if(null!=r){const e=(0,a.WA)(i,w),n=t.toScreen?.(r.mapPoint);if(!n)return null;const h=r.radiusPx,o=n.x+(0,a.Lz)(s.xoffset),l=n.y-(0,a.Lz)(s.yoffset);return(0,c.hG)(e,[o,l])<h*h?1:null}return null}_intersectDistance3D(t,i,e){const s=t.toMap(i,{include:[e]});return s&&(0,u.g)(s,x,t.renderSpatialReference)?(0,p.j)(x,t.state.camera.eye):null}};(0,s._)([(0,o.MZ)({constructOnly:!0,nonNullable:!0})],b.prototype,"graphic",null),(0,s._)([(0,o.MZ)()],b.prototype,"elevationInfo",null),(0,s._)([(0,o.MZ)({constructOnly:!0,nonNullable:!0})],b.prototype,"view",void 0),(0,s._)([(0,o.MZ)({value:null})],b.prototype,"focusedSymbol",null),(0,s._)([(0,o.MZ)({constructOnly:!0})],b.prototype,"layer",void 0),(0,s._)([(0,o.MZ)()],b.prototype,"interactive",void 0),(0,s._)([(0,o.MZ)()],b.prototype,"selectable",void 0),(0,s._)([(0,o.MZ)()],b.prototype,"grabbable",void 0),(0,s._)([(0,o.MZ)({value:!1})],b.prototype,"grabbing",null),(0,s._)([(0,o.MZ)()],b.prototype,"dragging",void 0),(0,s._)([(0,o.MZ)()],b.prototype,"hovering",null),(0,s._)([(0,o.MZ)({value:!1})],b.prototype,"selected",null),(0,s._)([(0,o.MZ)()],b.prototype,"cursor",void 0),b=(0,s._)([(0,l.$)("esri.views.interactive.GraphicManipulator")],b);const x=(0,y.vt)(),w=(0,a.gs)()},22579:(t,i,e)=>{e.d(i,{T:()=>r});var s=e(76931);function r(t){let i=0,e=0,r=0;return t?("cim"===t.type&&t.data.symbol&&"symbolLayers"in t.data.symbol&&t.data.symbol.symbolLayers&&t.data.symbol.symbolLayers.map((t=>{"CIMVectorMarker"===t.type&&t.anchorPoint&&(Math.abs(t.anchorPoint.x)>i&&(i=t.anchorPoint.x),Math.abs(t.anchorPoint.y)>e&&(e=t.anchorPoint.y),null!=t.size&&t.size>r&&(r=t.size))})),i=(0,s.Lz)(i),e=(0,s.Lz)(e),r=(0,s.Lz)(r),{offsetX:i,offsetY:e,size:r}):{offsetX:i,offsetY:e,size:r}}}}]);
//# sourceMappingURL=1472.89e2779e.chunk.js.map