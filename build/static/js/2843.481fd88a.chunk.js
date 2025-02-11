"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[2843],{12843:(e,t,r)=>{r.d(t,{FeatureSnappingEngine:()=>G});var n=r(35143),i=r(91967),a=r(18690),s=r(54901),l=r(81806),o=r(50346),u=r(68134),c=r(31633),d=r(46053),p=r(76460),h=r(85842),y=r(19555),g=r(20664),f=r(9392),S=r(53494),v=r(19451),w=r(12482),_=r(75543),m=r(23862),b=r(34154),F=(r(47249),r(8203)),M=r(46530),R=r(31933),x=r(70330),E=r(90992);let L=class extends i.A{set attributeRulesEnabled(e){this._set("attributeRulesEnabled",e),e&&this.loadRules()}get layerView(){return this.view?.allLayerViews?.find((e=>e.layer===this.layer))}get valid(){const{_valid:e,snappingSource:t,layer:r}=this;return!(!t||!r)&&e}get subtypeFilter(){const{layer:e,snappingSource:t}=this;if(!(0,R.F2)(e)||!e.subtypes?.length||!t)return{mode:"not-in-use",filter:null};const r=t.layerSource.sublayerSources.filter((e=>e.enabled&&e.layer.visible&&(0,E.JU)(this.view?.scale,e.layer.effectiveScaleRange.minScale,e.layer.effectiveScaleRange.maxScale))).map((e=>e.layer.subtypeCode));if(!r.length)return{mode:"none-visible",filter:null};if(r.length===e.subtypes.length)return{mode:"all-visible",filter:null};const n=e.fieldsIndex.get(e.subtypeField)?.name??e.subtypeField;return 1===r.length?{mode:"in-use",filter:`${n} = ${r.getItemAt(0)}`}:{mode:"in-use",filter:`${n} IN (${r.join(", ")})`}}get floorFilter(){const{view:e,layer:t}=this;return e&&t?(0,M.E)({view:e,layer:t}):null}constructor(e){super(e),this.layer=null,this.snappingSource=null,this.rulesTable=null,this._valid=null}initialize(){if(!this.snappingSource||!this.layer)return void(this._valid=!1);const{layer:e,snappingSource:t}=this;if("refresh"in e){const r=e;this.addHandles(r.on("refresh",(()=>t.refresh())))}this.loadRules(),this.addHandles([(0,u.wB)((()=>t.updating),(e=>t.layerSource.updating=e),u.pc),(0,u.wB)((()=>t.availability),(e=>t.layerSource.availability=e),u.pc)])}getFetchCandidatesParameters(e,t,r){if(!this.valid)return[];const{layer:n,layerView:i,floorFilter:a,rulesTable:s,subtypeFilter:o}=this,u={distance:r,mode:this.view?.type??"2d",point:e,coordinateHelper:t.coordinateHelper,returnEdge:!0,vertexMode:"all",filter:i&&"filter"in i?i.filter:null};if(a&&(u.filter=C(u.filter,a)),"not-in-use"!==o.mode&&"all-visible"!==o.mode){if("none-visible"===o.mode)return[];u.filter?u.filter.where=(0,b.m)(u.filter.where,o.mode):u.filter=new F.A({where:o.filter})}if(!this.attributeRulesEnabled)return[u];const c=t.feature,d="subtype-sublayer"===c?.sourceLayer?.type?c.sourceLayer.parent:c?.sourceLayer;if(s&&c&&(0,x.Tu)(this.view?.map)&&((0,R.yZ)(n)||(0,R.F2)(n))&&n.layerId&&((0,R.yZ)(d)||(0,R.F2)(d))&&this.view.map.utilityNetworks?.find((e=>e.isUtilityLayer(d)))){if("loaded"!==s.loadStatus)return[];const e=[],t=n.layerId,r=s.getFeatureSQL(d,c)?.[t];if(!r)return[];const i=r.anyVertex;let a=r.endVertex;return a&&i&&a===i&&(a=""),a&&e.push({...u,returnEdge:!1,vertexMode:"ends",filter:C(u.filter,a)}),i&&e.push({...u,returnEdge:(0,l.A)("snapping-include-edges-when-applying-any-vertex-rule")??!1,vertexMode:"all",filter:C(u.filter,i)}),e}return[u]}async loadRules(){this._valid=null;const{layer:e,view:t,attributeRulesEnabled:r}=this;if(r&&e&&t&&(0,x.Tu)(t?.map)&&((0,R.yZ)(e)||(0,R.F2)(e)))try{await Promise.allSettled(t.map.utilityNetworks?.map((e=>e.load()))??[]);const r=t.map.utilityNetworks?.find((t=>t.isUtilityLayer(e)));r&&(this.rulesTable=await r.getRulesTable(),await(this.rulesTable?.load()))}catch(n){return this._valid=!1,void p.A.getLogger("esri.views.interactive.snapping.FeatureSnappingSourceInfo").error("Failed to load rules table for snapping source",e.title)}this._valid=!0}remove(){this.destroy()}destroy(){this.snappingSource?.destroy()}};function C(e,t){return null==e?new F.A({where:t}):e.where?new F.A({where:(0,b.m)(e.where,t)}):new F.A({where:t})}(0,n._)([(0,d.MZ)({constructOnly:!0})],L.prototype,"layer",void 0),(0,n._)([(0,d.MZ)({constructOnly:!0})],L.prototype,"snappingSource",void 0),(0,n._)([(0,d.MZ)({constructOnly:!0})],L.prototype,"view",void 0),(0,n._)([(0,d.MZ)({value:!1})],L.prototype,"attributeRulesEnabled",null),(0,n._)([(0,d.MZ)()],L.prototype,"layerView",null),(0,n._)([(0,d.MZ)()],L.prototype,"rulesTable",void 0),(0,n._)([(0,d.MZ)()],L.prototype,"valid",null),(0,n._)([(0,d.MZ)()],L.prototype,"subtypeFilter",null),(0,n._)([(0,d.MZ)()],L.prototype,"floorFilter",null),(0,n._)([(0,d.MZ)()],L.prototype,"_valid",void 0),L=(0,n._)([(0,h.$)("esri.views.interactive.snapping.FeatureSnappingSourceInfo")],L);var A=r(99791),I=r(80794),T=r(9876),Z=r(61751),z=r(78228),H=r(17072);let G=class extends i.A{get updating(){return this._snappingSources.some((e=>null==e?.valid||!0===e.valid&&!0===e.snappingSource?.updating))||this._updatingHandles.updating}constructor(e){super(e),this.options=null,this._domain=A.n.FEATURE,this._updatingHandles=new v.U,this._sourceModules={featureService:{module:null,loader:null},featureCollection:{module:null,loader:null},graphics:{module:null,loader:null},notes:{module:null,loader:null},scene:{module:null,loader:null}}}initialize(){const e=(0,u.lZ)((()=>this.options?._effectiveFeatureSources),((e,t)=>this._createSourceInfo(e,t)));this._snappingSources=e,this.addHandles([(0,s.DQ)(e),(0,u.wB)((()=>({rulesEnabled:!!this.options?.attributeRulesEnabled,sources:this._snappingSources.filter(a.Ru)})),(e=>{let{rulesEnabled:t,sources:r}=e;for(const n of r)n.attributeRulesEnabled=t}),u.OH)])}destroy(){this._set("options",null),this._updatingHandles.destroy()}async fetchCandidates(e,t,r,n){if(!(t&this._domain&&null!=this.options&&this.options.effectiveFeatureEnabled))return[];const i=[],a=this._computeScreenSizeDistanceParameters(e,r);for(const l of this._snappingSources){if(!l?.valid||!l.snappingSource?.layerSource?.enabled||l.layerView?.suspended)continue;const t=l.getFetchCandidatesParameters(e,r,a);for(const e of t)i.push(l.snappingSource.fetchCandidates(e,n).then((e=>e.filter((e=>!this._candidateIsExcluded(l.snappingSource,e,r.excludeFeature))))))}const s=(await(0,o.nA)(i)).flat();return this._addRightAngleCandidates(s,e,a,r),(0,o.Te)(n),(0,x.xX)(e,s),s}_addRightAngleCandidates(e,t,r,n){const i=null!=n.vertexHandle?n.vertexHandle.rightEdge?.rightVertex?.pos:null!=n.editGeometryOperations&&"polygon"===n.editGeometryOperations.data.type?n.editGeometryOperations.data.components[0]?.getFirstVertex()?.pos:null,a=null!=n.vertexHandle?n.vertexHandle.leftEdge?.leftVertex?.pos:null!=n.editGeometryOperations?n.editGeometryOperations.data.components[0]?.getLastVertex()?.pos:null,{view:s}=this,l=(0,m.Lp)(i,s,n),o=(0,m.Lp)(a,s,n),u=e.length;for(let c=0;c<u;c++)this._addRightAngleCandidate(e[c],o,t,r,e),this._addRightAngleCandidate(e[c],l,t,r,e)}_addRightAngleCandidate(e,t,r,n,i){if(null==t||!function(e){return(e instanceof T.z||e instanceof I.X)&&!function(e){let{constraint:{start:t,end:r}}=e;const n=(0,g.s)(t,r),i=(0,y.hG)((0,m.Xz)(t),(0,m.Xz)(r));return n<(0,S.FD)()||i/n<j}(e)}(e))return;const a=e.constraint.closestTo(t),s=(a[0]-r[0])/n.x,l=(a[1]-r[1])/n.y,{start:o,end:u}=e.constraint;if(s*s+l*l<=1){const r=(0,y.hG)((0,m.Xz)(a),(0,m.Xz)(o))>(0,y.hG)((0,m.Xz)(a),(0,m.Xz)(u))?o:u,n=new z.HJ({targetPoint:(0,m.de)(a),otherVertex:t,otherVertexType:z.pn.NEXT,previousVertex:r,constraint:new _.FX(t,a),objectId:e.objectId,isDraped:e.isDraped,domain:A.n.FEATURE});i.push(n)}}_computeScreenSizeDistanceParameters(e,t){let r=null!=this.options?this.options.distance*("touch"===t.pointer?this.options.touchSensitivityMultiplier:1):0;return null==this.view?{x:r,y:r,z:r,distance:r}:"2d"===this.view.type?(r*=this.view.resolution,{x:r,y:r,z:r,distance:r}):this._computeScreenSizeDistanceParameters3D(e,r,this.view,t)}_computeScreenSizeDistanceParameters3D(e,t,r,n){const{spatialReference:i}=n;r.renderCoordsHelper.toRenderCoords(e,i,O);const a=r.state.camera.computeScreenPixelSizeAt(O),s=a*r.renderCoordsHelper.unitInMeters,l=s/(0,c.GA)(i),o=s/(0,c.G9)(i),u=t*l,d=t*o,p=(0,H.j)(e,i,w.qt,r),h=p?P(p,e,l,0,0,r,n):0,y=p?P(p,e,0,l,0,r,n):0,g=p?P(p,e,0,0,o,r,n):0;return{x:0===h?0:u/h,y:0===y?0:u/y,z:0===g?0:d/g,distance:a*t}}_candidateIsExcluded(e,t,r){if(null==r)return!1;const n=this._getCandidateObjectId(t);if(null==n)return!1;const i=e.layerSource.layer;return"graphics"===i.type?r.uid===n:r.sourceLayer===i&&!(!r.attributes||!("objectIdField"in i))&&r.attributes[i.objectIdField]===n}_getCandidateObjectId(e){return e instanceof Z.w?e.objectId:null}async _createSourceInfo(e,t){const r=e.layer;r.loaded||(await r.load(),(0,o.Te)(t));const{view:n}=this,i=await this._createFeatureSnappingSourceType(e);return(0,o.Te)(t),new L(null==i?{}:{snappingSource:i,view:n,layer:r})}async _createFeatureSnappingSourceType(e){switch(e.layer.type){case"feature":case"geojson":case"csv":case"oriented-imagery":case"subtype-group":case"wfs":return this._createFeatureSnappingSourceFeatureLayer(e);case"graphics":return this._createFeatureSnappingSourceGraphicsLayer(e);case"map-notes":return this._createFeatureSnappingSourceMapNotesLayer(e);case"scene":case"building-scene":return this._createFeatureSnappingSourceSceneLayer(e)}return null}async _createFeatureSnappingSourceSceneLayer(e){const{view:t}=this;return null==t||"3d"!==t.type?null:new((await this._getSourceModule("scene")).SceneLayerSnappingSource)({layerSource:e,view:t})}async _createFeatureSnappingSourceFeatureLayer(e){switch(e.layer.source?.type){case"feature-layer":case"oriented-imagery":return new((await this._getSourceModule("featureService")).FeatureServiceSnappingSource)({spatialReference:this.spatialReference,view:this.view,layerSource:e});case"memory":case"csv":case"geojson":case"wfs":return"mesh"===e.layer.geometryType?null:new((await this._getSourceModule("featureCollection")).FeatureCollectionSnappingSource)({layerSource:e,view:this.view})}return null}async _createFeatureSnappingSourceGraphicsLayer(e){return new((await this._getSourceModule("graphics")).GraphicsSnappingSource)({getGraphicsLayers:()=>[e.layer],spatialReference:this.spatialReference,view:this.view,layerSource:e})}async _createFeatureSnappingSourceMapNotesLayer(e){return new((await this._getSourceModule("notes")).GraphicsSnappingSource)({getGraphicsLayers:()=>e.layer.sublayers?.toArray()??[],spatialReference:this.spatialReference,view:this.view,layerSource:e})}async _getSourceModule(e){const t=this._sourceModules[e];if(null==t.loader){const t=this._loadSourceModule(e),r={module:null,loader:t};this._sourceModules[e]=r;const n=await t,i={module:n,loader:t};return this._sourceModules[e]=i,n}return null==t.module?t.loader:t.module}_loadSourceModule(e){const t=this._updatingHandles;switch(e){case"featureService":return t.addPromise(r.e(1927).then(r.bind(r,51927)));case"featureCollection":return t.addPromise(r.e(7567).then(r.bind(r,77567)));case"graphics":case"notes":return t.addPromise(Promise.all([r.e(8618),r.e(7425),r.e(8683),r.e(2003),r.e(8276),r.e(9546)]).then(r.bind(r,99546)));case"scene":return t.addPromise(Promise.all([r.e(8105),r.e(2259),r.e(1929)]).then(r.bind(r,91929)))}}get test(){}};function P(e,t,r,n,i,a,s){let{spatialReference:l}=s;const o=(0,g.c)(V,t);o[0]+=r,o[1]+=n,o[2]+=i;const u=(0,H.j)(o,l,w.qt,a);return u?(0,x.Mo)(u,e):1/0}(0,n._)([(0,d.MZ)({constructOnly:!0})],G.prototype,"spatialReference",void 0),(0,n._)([(0,d.MZ)({constructOnly:!0})],G.prototype,"view",void 0),(0,n._)([(0,d.MZ)()],G.prototype,"options",void 0),(0,n._)([(0,d.MZ)({readOnly:!0})],G.prototype,"updating",null),(0,n._)([(0,d.MZ)()],G.prototype,"_snappingSources",void 0),G=(0,n._)([(0,h.$)("esri.views.interactive.snapping.FeatureSnappingEngine")],G);const O=(0,f.vt)(),V=(0,f.vt)(),j=1e-4}}]);
//# sourceMappingURL=2843.481fd88a.chunk.js.map