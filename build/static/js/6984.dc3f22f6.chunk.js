"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[6984],{46984:(e,i,t)=>{t.r(i),t.d(i,{default:()=>y});var s=t(35143),h=t(39356),r=t(18690),a=t(94643),n=t(54901),l=t(68134),o=(t(76460),t(81806),t(50076),t(85842)),c=t(90104),d=t(31394),g=t(43321),p=t(91196);const u="sublayers",w="layerView",_=new Set(["default"]);let f=class extends((0,c.e)(p.A)){constructor(){super(...arguments),this._highlightIds=new Map}*graphicsViews(){null==this._graphicsViewsFeatureCollectionMap?null==this._graphicsViews?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}async hitTest(e,i){return Array.from(this.graphicsViews(),(i=>{const t=i.hitTest(e);if(null!=this._graphicsViewsFeatureCollectionMap){const e=this._graphicsViewsFeatureCollectionMap.get(i);for(const i of t)!i.popupTemplate&&e.popupTemplate&&(i.popupTemplate=e.popupTemplate),i.sourceLayer=i.layer=this.layer}return t})).flat().map((i=>({type:"graphic",graphic:i,layer:this.layer,mapPoint:e})))}highlight(e){let i;"number"==typeof e?i=[e]:e instanceof h.A?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):a.A.isCollection(e)&&(i=e.map((e=>e&&e.uid)).toArray());const t=i?.filter(r.Ru);return t?.length?(this._addHighlight(t),(0,n.hA)((()=>this._removeHighlight(t)))):(0,n.hA)()}update(e){for(const i of this.graphicsViews())i.processUpdate(e)}attach(){const e=this.view,i=()=>this.requestUpdate(),t=this.layer.featureCollections;if(null!=t&&t.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of t){const t=new d.A(this.view.featuresTilingScheme),h=new g.A({view:e,graphics:s.source,renderer:s.renderer,requestUpdateCallback:i,container:t});this._graphicsViewsFeatureCollectionMap.set(h,s),this.container.addChild(h.container),this.addHandles([(0,l.wB)((()=>s.visible),(e=>h.container.visible=e),l.Vh),(0,l.wB)((()=>h.updating),(()=>this.notifyChange("updating")),l.Vh)],w)}this._updateHighlight()}else null!=this.layer.sublayers&&this.addHandles((0,l.on)((()=>this.layer.sublayers),"change",(()=>this._createGraphicsViews()),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),u)}detach(){this._destroyGraphicsViews(),this.removeHandles(u)}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange()}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(w);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),null==this.layer.sublayers)return;const e=[],i=this.view,t=()=>this.requestUpdate();for(const s of this.layer.sublayers){const h=new d.A(this.view.featuresTilingScheme);h.fadeTransitionEnabled=!0;const r=new g.A({view:i,graphics:s.graphics,requestUpdateCallback:t,container:h});this.addHandles([s.on("graphic-update",r.graphicUpdateHandler),(0,l.wB)((()=>s.visible),(e=>r.container.visible=e),l.Vh),(0,l.wB)((()=>r.updating),(()=>this.notifyChange("updating")),l.Vh)],w),this.container.addChild(r.container),e.push(r)}this._graphicsViews=e,this._updateHighlight()}_addHighlight(e){for(const i of e)if(this._highlightIds.has(i)){const e=this._highlightIds.get(i);this._highlightIds.set(i,e+1)}else this._highlightIds.set(i,1);this._updateHighlight()}_removeHighlight(e){for(const i of e)if(this._highlightIds.has(i)){const e=this._highlightIds.get(i)-1;0===e?this._highlightIds.delete(i):this._highlightIds.set(i,e)}this._updateHighlight()}_updateHighlight(){const e=Array.from(this._highlightIds.keys()),i=this._getHighlightBits(_);for(const t of this.graphicsViews())t.setHighlight(e.map((e=>({objectId:e,highlightFlags:i}))))}};f=(0,s._)([(0,o.$)("esri.views.2d.layers.MapNotesLayerView2D")],f);const y=f},31394:(e,i,t)=>{t.d(i,{A:()=>a});var s=t(61551),h=t(8995),r=t(13692);class a extends h.f{renderChildren(e){for(const i of this.children)i.setTransform(e.state);if(super.renderChildren(e),this._updateAttributeView(),this.children.some((e=>e.hasData))){switch(e.drawPhase){case s.S5.MAP:this._renderChildren(e,s.RI.All);break;case s.S5.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(e)}this._boundsRenderer&&this._boundsRenderer.doRender(e)}}_renderHighlight(e){(0,r.lB)(e,!1,(e=>{this._renderChildren(e,s.RI.Highlight)}))}}}}]);
//# sourceMappingURL=6984.dc3f22f6.chunk.js.map