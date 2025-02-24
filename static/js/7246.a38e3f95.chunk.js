"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[7246],{27246:(e,t,o)=>{o.d(t,{MediaLayerInteraction:()=>v});var n=o(70273),s=o(27907),i=o(82439),l=o(92976),a=o(73896),r=o(67519),d=(o(27052),o(11434),o(11215),o(55292)),h=o(37293),c=o(24864);const _="r",p="z",u=Symbol(),m=Symbol(),y=Symbol();let v=class extends s.A{constructor(e){super(e),this._tool=null,this._updatingHandles=new h.U,this.enabled=!1,this._onPointerMove=(0,l.sg)((async e=>{const t=await this._updatingHandles.addPromise(this._findElementAtScreenPoint(e));this.destroyed||(this.removeHandles(m),t&&t!==this.selectedElement&&(this.view.cursor="pointer",this.addHandles((0,i.hA)((()=>this.view.cursor=null)),m)))}))}initialize(){this.addHandles((0,i.DQ)(this._updatingHandles)),this._updatingHandles.add((()=>this.enabled),(e=>this._setEnabled(e)),a.Vh),this._updatingHandles.add((()=>this._preferredInteractionTool),(()=>this._preferredInteractionToolChanged()))}get _validatedSelectedElement(){const e=this.selectedElement;if(!e)return null;const{layer:{source:t}}=this;return t?"hasElement"in t?t.hasElement(e)?e:null:t===e?e:null:null}get _preferredInteractionTool(){return this.options?.tool??"transform"}get updating(){return this._updatingHandles.updating}_setEnabled(e){if(this.removeHandles(u),!e)return;const{view:t}=this;this.addHandles([t.on("immediate-click",(e=>this._onClick(e)),c.o.TOOL),t.on("pointer-move",(e=>this._onPointerMove(e).catch((()=>{}))),c.o.TOOL),t.on("key-down",(e=>{e.key===p&&this._tool?.canUndo()&&(this._tool.undo(),e.stopPropagation()),e.key===_&&this._tool?.canRedo()&&(this._tool.redo(),e.stopPropagation())})),this._updatingHandles.add((()=>this._validatedSelectedElement),(e=>this._selectedElementChanged(e)),a.Vh),(0,i.hA)((()=>{t.cursor=null,this._removeTool()}))],u)}async _findElementAtScreenPoint(e){const t=(await this.view.hitTest(e,{include:[this.layer]})).results[0];return"media"===t?.type?t.element:null}async _onClick(e){await this._updatingHandles.addPromise(e.async((async()=>{const t=await this._findElementAtScreenPoint(e);this.destroyed||(t&&e.stopPropagation(),this.selectedElement=t,this.selectedElement&&(this.view.cursor=null))})))}_preferredInteractionToolChanged(){const{_tool:e}=this;e&&(this._preferredInteractionTool===e.type||this._updatingHandles.addPromise(this._recreateTool()))}async _recreateTool(){this.removeHandles(y),this._removeTool();const e=this._validatedSelectedElement;if(!e)return;const t=new AbortController;this.addHandles((0,i.rE)(t),y);const{TransformTool:n,ControlPointsTransformTool:s}=await Promise.all([o.e(5358),o.e(9477),o.e(5737),o.e(5212),o.e(7563),o.e(1252),o.e(8486)]).then(o.bind(o,38486));if(t.signal.aborted)return;const{view:l}=this;switch(this._preferredInteractionTool){case"transform":this._tool=new n({target:e,view:l});break;case"reshape":this._tool=new s({mediaElement:e,view:l})}this.addHandles([(0,i.hA)((()=>{this._tool&&(l.tools.remove(this._tool),this._tool=null)}))],this._tool),l.addAndActivateTool(this._tool)}_removeTool(){this._tool&&this.removeHandles(this._tool)}async _selectedElementChanged(e){e?.georeference?await this._updatingHandles.addPromise(this._recreateTool()):this._removeTool()}};(0,n._)([(0,r.MZ)()],v.prototype,"_validatedSelectedElement",null),(0,n._)([(0,r.MZ)()],v.prototype,"_preferredInteractionTool",null),(0,n._)([(0,r.MZ)({constructOnly:!0})],v.prototype,"view",void 0),(0,n._)([(0,r.MZ)({constructOnly:!0})],v.prototype,"layer",void 0),(0,n._)([(0,r.MZ)()],v.prototype,"selectedElement",void 0),(0,n._)([(0,r.MZ)()],v.prototype,"enabled",void 0),(0,n._)([(0,r.MZ)()],v.prototype,"options",void 0),(0,n._)([(0,r.MZ)()],v.prototype,"updating",null),v=(0,n._)([(0,d.$)("esri.views.2d.layers.support.MediaLayerInteraction")],v)}}]);
//# sourceMappingURL=7246.a38e3f95.chunk.js.map