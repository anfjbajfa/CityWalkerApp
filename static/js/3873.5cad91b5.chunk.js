"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[3873],{47540:(e,t,n)=>{function i(e){let t,n,i=[],o=!1;return function(){for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return o&&t===this&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(a,i)||(n=e.apply(this,a),t=this,i=a,o=!0),n}}n.d(t,{B:()=>i})},70275:(e,t,n)=>{n.d(t,{C:()=>a});var i=n(50497),o=n(21761),s=n(85395);class a extends o.w{constructor(e){super({...e,constraint:new i.i7(e.targetPoint)})}get hints(){return[new s._(this.targetPoint,this.isDraped,this.domain)]}}},23873:(e,t,n)=>{n.r(t),n.d(t,{FeatureCollectionSnappingSource:()=>f});var i=n(70273),o=n(27907),s=n(47540),a=n(92976),r=n(73896),c=n(67519),l=(n(27052),n(11434),n(11215),n(55292)),u=n(24512),p=n(9752),d=n(89759),h=n(26727),y=n(61362),g=n(46577);let f=class extends o.A{get availability(){return 1}get _snappingElevationAligner(){const{view:e}=this,{layer:t}=this.layerSource,n=null!=e&&"3d"===e.type;if(!n||"subtype-group"===t.type)return(0,h.n)();return(0,h.n)(n,{elevationInfo:t.elevationInfo,alignPointsInFeatures:async(n,i)=>(await(0,a.qr)(e.whenLayerView(t),i)).elevationAlignPointsInFeatures(n,i)})}get _snappingElevationFilter(){const{view:e}=this,t=null!=e&&"3d"===e.type&&"subtype-group"!==this.layerSource.layer.type;return(0,y.z)(t)}get _symbologySnappingFetcher(){const{view:e}=this,{layer:t}=this.layerSource;return null!=e&&"3d"===e.type&&"subtype-group"!==t.type?(0,g.H)(this._symbologySnappingSupported,(async(n,i)=>{const o=await e.whenLayerView(t);return(0,a.Te)(i),o.queryForSymbologySnapping({candidates:n,spatialReference:e.spatialReference},i)})):(0,g.H)()}get _layerView3D(){const{view:e}=this;if(null==e||"2d"===e.type)return null;const{layer:t}=this.layerSource;return e.allLayerViews.find((e=>e.layer===t))}get _symbologySnappingSupported(){return null!=this._layerView3D&&this._layerView3D.symbologySnappingSupported}initialize(){const{view:e}=this,{layer:t}=this.layerSource;null!=e&&"3d"===e.type&&"subtype-group"!==t.type&&this.addHandles([e.elevationProvider.on("elevation-change",(e=>{let{context:n}=e;const{elevationInfo:i}=t;(0,u.Up)(n,i)&&this._snappingElevationAligner.notifyElevationSourceChange()})),(0,r.wB)((()=>t.elevationInfo),(()=>this._snappingElevationAligner.notifyElevationSourceChange()),r.Vh),(0,r.wB)((()=>null!=this._layerView3D?this._layerView3D.layer?.renderer:null),(()=>this._symbologySnappingFetcher.notifySymbologyChange()),r.Vh),(0,r.on)((()=>this._layerView3D?.layer),["edits","apply-edits","graphic-update"],(()=>this._symbologySnappingFetcher.notifySymbologyChange()))])}constructor(e){super(e),this.view=null,this.updating=!1,this._memoizedMakeGetGroundElevation=(0,s.B)(d.p)}refresh(){}async fetchCandidates(e,t){const{layer:n}=this.layerSource,i=n.source;if(!i?.querySnapping)return[];const o=(0,p.HN)(n),s=(0,p.nf)(e,this.view?.type??"2d",o),r=await i.querySnapping(s,{signal:t});(0,a.Te)(t);const c=e.coordinateHelper.spatialReference,l=await this._snappingElevationAligner.alignCandidates(r.candidates,c,t);(0,a.Te)(t);const u=await this._symbologySnappingFetcher.fetch(l,t);(0,a.Te)(t);const h=0===u.length?l:[...l,...u],y=this._snappingElevationFilter.filter(s,h),g=this._memoizedMakeGetGroundElevation(this.view,c);return y.map((e=>(0,d.$)(e,g)))}};(0,i._)([(0,c.MZ)({constructOnly:!0})],f.prototype,"layerSource",void 0),(0,i._)([(0,c.MZ)({constructOnly:!0})],f.prototype,"view",void 0),(0,i._)([(0,c.MZ)()],f.prototype,"_snappingElevationAligner",null),(0,i._)([(0,c.MZ)()],f.prototype,"_snappingElevationFilter",null),(0,i._)([(0,c.MZ)()],f.prototype,"_symbologySnappingFetcher",null),(0,i._)([(0,c.MZ)()],f.prototype,"_layerView3D",null),(0,i._)([(0,c.MZ)()],f.prototype,"_symbologySnappingSupported",null),f=(0,i._)([(0,l.$)("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],f)},89759:(e,t,n)=>{n.d(t,{$:()=>c,p:()=>l});var i=n(37628),o=n(48360),s=n(37142),a=n(70275);function r(e){let{x:t,y:n,z:o}=e;return(0,i.fA)(t,n,o??0)}function c(e,t){switch(e.type){case"edge":return e.draped?new o.X({edgeStart:r(e.start),edgeEnd:r(e.end),targetPoint:(0,i.de)(r(e.target)),objectId:e.objectId,getGroundElevation:t}):new s.z({edgeStart:r(e.start),edgeEnd:r(e.end),targetPoint:(0,i.de)(r(e.target)),objectId:e.objectId,isDraped:!1});case"vertex":return new a.C({targetPoint:(0,i.de)(r(e.target)),objectId:e.objectId,isDraped:!1})}}function l(e,t){return null!=e&&"3d"===e.type?(n,i)=>e.elevationProvider.getElevation(n,i,0,t,"ground"):()=>null}},26727:(e,t,n)=>{n.d(t,{n:()=>c});n(27052);var i=n(50347),o=n(1121),s=n(92976),a=n(34531),r=n(70411);function c(){let e=arguments.length>1?arguments[1]:void 0;if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]){const{elevationInfo:t,alignPointsInFeatures:n}=e;return new u(t,n)}return new l}class l{async alignCandidates(e,t,n){return e}notifyElevationSourceChange(){}}class u{constructor(e,t){this._elevationInfo=e,this._alignPointsInFeatures=t,this._alignmentsCache=new i.q(1024),this._cacheVersion=0}async alignCandidates(e,t,n){const i=this._elevationInfo;return null==i||"absolute-height"!==i.mode||i.featureExpressionInfo?this._alignComputedElevationCandidates(e,t,n):(function(e,t,n){const{offset:i,unit:o}=n;if(null==i)return;const s=(0,a.G9)(t),c=i*((0,r.Ao)(o??"meters")/s);for(const a of e)switch(a.type){case"edge":a.start.z+=c,a.end.z+=c;continue;case"vertex":a.target.z+=c;continue}}(e,t,i),e)}notifyElevationSourceChange(){this._alignmentsCache.clear(),this._cacheVersion++}async _alignComputedElevationCandidates(e,t,n){const i=new Map;for(const s of e)(0,o.tE)(i,s.objectId,h).push(s);const[a,r,c]=this._prepareQuery(i,t),l=await this._alignPointsInFeatures(a,n);if((0,s.Te)(n),c!==this._cacheVersion)return this._alignComputedElevationCandidates(e,t,n);this._applyCacheAndResponse(a,l,r);const{drapedObjectIds:u,failedObjectIds:p}=l,d=[];for(const o of e){const{objectId:e}=o;u.has(e)&&"edge"===o.type&&(o.draped=!0),p.has(e)||d.push(o)}return d}_prepareQuery(e,t){const n=[],i=[];for(const[o,s]of e){const e=[];for(const t of s)this._addToQueriesOrCachedResult(o,t.target,e,i),"edge"===t.type&&(this._addToQueriesOrCachedResult(o,t.start,e,i),this._addToQueriesOrCachedResult(o,t.end,e,i));0!==e.length&&n.push({objectId:o,points:e})}return[{spatialReference:t.toJSON(),pointsInFeatures:n},i,this._cacheVersion]}_addToQueriesOrCachedResult(e,t,n,i){const o=d(e,t),s=this._alignmentsCache.get(o);null==s?n.push(t):i.push(new p(t,s))}_applyCacheAndResponse(e,t,n){let{elevations:i,drapedObjectIds:o,failedObjectIds:s}=t;for(const c of n)c.apply();let a=0;const r=this._alignmentsCache;for(const{objectId:c,points:l}of e.pointsInFeatures){if(s.has(c)){a+=l.length;continue}const e=!o.has(c);for(const t of l){const n=d(c,t),o=i[a++];t.z=o,e&&r.put(n,o,1)}}}}class p{constructor(e,t){this.point=e,this.z=t}apply(){this.point.z=this.z}}function d(e,t){let{x:n,y:i,z:o,spatialReference:s}=t;return`${e}-${n}-${i}-${o??0}}-wkid:${s?.wkid}`}function h(){return[]}},61362:(e,t,n)=>{n.d(t,{z:()=>a});n(27052);class i{filter(e,t){return t}notifyElevationSourceChange(){}}class o{filter(e,t){const{point:n,distance:i}=e,{z:o}=n;if(null==o)return t;if(0===t.length)return t;const a=function(e){return"number"==typeof e?{x:e,y:e,z:e}:e}(i),r=this._updateCandidatesTo3D(t,n,a).filter(s);return r.sort(l),r}_updateCandidatesTo3D(e,t,n){for(const i of e)switch(i.type){case"edge":r(i,t,n);continue;case"vertex":c(i,t,n);continue}return e}}function s(e){return e.distance<=1}function a(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]?new o:new i}function r(e,t,n){let{x:i,y:o,z:s}=n;const{start:a,end:r,target:c}=e;e.draped||function(e,t,n,i){const o=i.x-n.x,s=i.y-n.y,a=i.z-n.z,r=o*o+s*s+a*a,c=(t.x-n.x)*o+(t.y-n.y)*s+a*(t.z-n.z),l=Math.min(1,Math.max(0,c/r)),u=n.x+o*l,p=n.y+s*l,d=n.z+a*l;e.x=u,e.y=p,e.z=d}(c,t,a,r);const l=(t.x-c.x)/i,u=(t.y-c.y)/o,p=(t.z-c.z)/s;e.distance=Math.sqrt(l*l+u*u+p*p)}function c(e,t,n){let{x:i,y:o,z:s}=n;const{target:a}=e,r=(t.x-a.x)/i,c=(t.y-a.y)/o,l=(t.z-a.z)/s,u=Math.sqrt(r*r+c*c+l*l);e.distance=u}function l(e,t){return e.distance-t.distance}},46577:(e,t,n)=>{n.d(t,{H:()=>r});n(27052);var i=n(65930),o=n(50347),s=n(92976),a=n(81883);function r(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]?new l(arguments.length>1?arguments[1]:void 0):new c}class c{async fetch(){return[]}notifySymbologyChange(){}}class l{constructor(e){this._getSymbologyCandidates=e,this._candidatesCache=new o.q(1024),this._cacheVersion=0}async fetch(e,t){if(0===e.length)return[];const n=[],o=[],a=this._candidatesCache;for(const s of e){const e=u(s),t=a.get(e);if(t)for(const n of t)o.push((0,i.o8)(n));else n.push(s),a.put(e,[],1)}if(0===n.length)return o;const r=this._cacheVersion,{candidates:c,sourceCandidateIndices:l}=await this._getSymbologyCandidates(n,t);if((0,s.Te)(t),r!==this._cacheVersion)return this.fetch(e,t);const p=[],{length:d}=c;for(let s=0;s<d;++s){const e=c[s],t=u(n[l[s]]),o=a.get(t);o.push(e),a.put(t,o,o.length),p.push((0,i.o8)(e))}return o.concat(p)}notifySymbologyChange(){this._candidatesCache.clear(),this._cacheVersion++}}function u(e){switch(e.type){case"vertex":{const{objectId:t,target:n}=e,i=`${t}-vertex-${n.x}-${n.y}-${n.z??0}`;return(0,a.Wm)(i).toString()}case"edge":{const{objectId:t,start:n,end:i}=e,o=`${t}-edge-${n.x}-${n.y}-${n.z??0}-to-${i.x}-${i.y}-${i.z??0}`;return(0,a.Wm)(o).toString()}default:return""}}},85395:(e,t,n)=>{n.d(t,{_:()=>s});var i=n(68358),o=n(22743);class s extends o.m{constructor(e,t,n){super(t,n),this.point=e}equals(e){return e instanceof s&&(0,i.p)(this.point,e.point)}}}}]);
//# sourceMappingURL=3873.5cad91b5.chunk.js.map