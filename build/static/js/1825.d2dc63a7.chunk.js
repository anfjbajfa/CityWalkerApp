"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[1825],{11825:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var s=a(35143),r=a(94643),i=a(3975),l=a(46053),n=(a(81806),a(76460),a(47249),a(85842)),h=a(90104),d=a(91196);let c=class extends((0,h.e)(d.A)){constructor(e){super(e),this.layerViews=new r.A}set layerViews(e){this._set("layerViews",(0,i.V)(e,this._get("layerViews")))}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((e,t)=>e+t.updatingProgress),0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",(()=>this._updateStageChildren())))}detach(){this.container.removeAllChildren()}update(e){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,t)=>this.container.addChildAt(e.container,t)))}};(0,s._)([(0,l.MZ)({cast:i.H})],c.prototype,"layerViews",null),(0,s._)([(0,l.MZ)({readOnly:!0})],c.prototype,"updatingProgress",null),c=(0,s._)([(0,n.$)("esri.views.2d.layers.KnowledgeGraphLayerView2D")],c);const o=c}}]);
//# sourceMappingURL=1825.d2dc63a7.chunk.js.map