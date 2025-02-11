"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[5393],{58272:(e,t,r)=>{r.d(t,{X:()=>i,b:()=>n});const i=50,n=5},86524:(e,t,r)=>{r.d(t,{Ge:()=>d,WT:()=>g,XV:()=>h});r(35238);var i=r(31633),n=r(7137),s=r(1438),o=r(80963),a=r(45417),l=r(58272),c=r(13312),u=r(19247),p=r(23701);function d(e,t,r){const i=1===e?10:e;return i**(r?Math.round(function(e,t){return Math.log(e)/Math.log(t)}(l.X/t,i)):0)}function h(e){const{isGeographic:t,isWebMercator:r}=e;return!t&&!r}function g(e,t,r){const l="number"==typeof e?null:e,d=r??l?.spatialReference;if(null==d||!(0,o.fn)(d)||h(d))return(0,i.GA)(d);let g=l?.x??e,f=l?.y??t;const M=1/Math.sqrt(2);let v=g+M,y=f+M;const{isWebMercator:S,isGeographic:w}=d;let R=w&&!(0,n.TT)(d)?c.A.WGS84:d;if(S){let e=new u.A({x:g,y:f,spatialReference:d});(0,a.ci)(e,!0,e),g=e.x,f=e.y,e=new u.A({x:v,y:y,spatialReference:d}),(0,a.ci)(e,!0,e),v=e.x,y=e.y,R=c.A.WGS84}const P=new p.A({paths:[[[g,f],[v,y]]],spatialReference:R}),x=(0,s.XX)(P,10);let _;try{[_]=(0,n.l1)([x],"meters")}catch{return(0,i.GA)(d)}return _}},95393:(e,t,r)=>{r.d(t,{GridSnappingEngine:()=>w});var i=r(35143),n=r(91967),s=r(76460),o=r(15941),a=r(31633),l=r(46053),c=(r(81806),r(47249),r(85842)),u=r(20664),p=r(9624),d=r(1438),h=r(68002),g=r(58272),f=r(86524),M=r(23862),v=r(70330),y=r(90836),S=r(45633);let w=class extends n.A{constructor(e){super(e),this.options=null}destroy(){this._set("options",null)}get grid(){return this.view.grid}get effectiveViewRotation(){return this.grid?.rotateWithMap?0:(0,o.kU)(this.view.rotation??0)}get gridRotation(){return(0,o.kU)(this.grid?.rotation??0)}get gridCenter(){const{spatialReference:e,grid:t}=this;if(!t||!e||!(0,p.isLoadedOrLoadFor)(t.center.spatialReference,e))return null;try{const r=(0,p.project)(t.center,e),i=e.isWrappable&&null!=this.view?.center?(0,d.O7)(r.x,this.view.center.x,e):r.x;return(0,M.vt)(i,r.y,r.z)}catch(r){return s.A.getLogger(this).errorOnce("Grid Snapping - Failed to project grid center.",r),null}}get offsetScaleFactor(){const{pixelsPerStride:e,grid:t}=this;if(!t||!e)return 1;const{majorLineInterval:r,dynamicScaling:i}=t;return r<1?null:(0,f.Ge)(r,e,i)}get spatialReference(){return this.view.spatialReference}get gridMetersPerStride(){const{grid:e}=this;return e?(0,a.oU)(e.spacing,e.units,"meters"):null}get viewMetersPerPixel(){const{viewMetersPerSRUnit:e}=this;return null==e?null:e*(0,h.i1)(this.view.scale,this.view.spatialReference)}get viewMetersPerSRUnit(){const{spatialReference:e}=this.view;return this.gridCenter?(0,f.WT)(this.gridCenter[0],this.gridCenter[1],e):null}get pixelsPerStride(){const{gridMetersPerStride:e,viewMetersPerPixel:t}=this;return t&&e?e/t:null}get updating(){return null!=this.grid&&null!=this.spatialReference&&null==this.viewMetersPerSRUnit}async fetchCandidates(e,t,r){const{options:i,view:n}=this;if(!i?.effectiveGridEnabled||!n.grid||r.feature?.attributes&&v.io in r.feature.attributes)return[];const s=r.coordinateHelper.arrayToPoint(e),o=i.distance*("touch"===r.pointer?i.touchSensitivityMultiplier:1);return this.fetchCandidatesSync(s,o)}fetchCandidatesSync(e,t){const r=[],{grid:i,effectiveViewRotation:n,gridRotation:s,gridCenter:o,viewMetersPerPixel:a,viewMetersPerSRUnit:l,offsetScaleFactor:c,spatialReference:u,gridMetersPerStride:d,pixelsPerStride:h}=this;if(!(i&&a&&l&&o&&u&&c&&d&&h))return r;if(!i.dynamicScaling&&h<g.b)return r;if(!(0,p.isLoadedOrLoadFor)(e.spatialReference,u))return r;const f=(0,p.project)(e,u),v=(0,M.vt)(f.x,f.y,f.z),w=R(v,-s,o,-n),b=d/l*c,Z=P(w,b,o),{shouldSnapX:G,shouldSnapY:C}=x(Z,w,t,a,l);if(!G&&!C)return[];const A=(0,M.vt)((G?Z:w)[0],(C?Z:w)[1]),k=R(A,s,o,n),U=R(Z,s,o,n);if(C){const e=_(Z,w,b,"y"),t=R(e,s,o,n);r.push(new S.o({lineStart:U,lineEnd:t,targetPoint:k,isDraped:!1}))}if(G){const e=_(Z,w,b,"x"),t=R(e,s,o,n);r.push(new S.o({lineStart:U,lineEnd:t,targetPoint:k,isDraped:!1}))}return G&&C&&r.push(new y.N(k,r[0],r[1],!1)),r}};(0,i._)([(0,l.MZ)({constructOnly:!0})],w.prototype,"view",void 0),(0,i._)([(0,l.MZ)()],w.prototype,"options",void 0),(0,i._)([(0,l.MZ)()],w.prototype,"grid",null),(0,i._)([(0,l.MZ)()],w.prototype,"effectiveViewRotation",null),(0,i._)([(0,l.MZ)()],w.prototype,"gridRotation",null),(0,i._)([(0,l.MZ)()],w.prototype,"gridCenter",null),(0,i._)([(0,l.MZ)()],w.prototype,"offsetScaleFactor",null),(0,i._)([(0,l.MZ)()],w.prototype,"spatialReference",null),(0,i._)([(0,l.MZ)()],w.prototype,"gridMetersPerStride",null),(0,i._)([(0,l.MZ)()],w.prototype,"viewMetersPerPixel",null),(0,i._)([(0,l.MZ)()],w.prototype,"viewMetersPerSRUnit",null),(0,i._)([(0,l.MZ)()],w.prototype,"pixelsPerStride",null),(0,i._)([(0,l.MZ)()],w.prototype,"updating",null),w=(0,i._)([(0,c.$)("esri.views.interactive.snapping.GridSnappingEngine")],w);const R=(e,t,r,i)=>{const n=(0,M.Hh)(e[0],e[1],e[2]);return(0,u.K)(n,(0,u.K)(n,n,r,t),r,i)},P=(e,t,r)=>{const i=(e[0]-r[0])/t,n=(e[1]-r[1])/t,s=Math.trunc(i),o=Math.trunc(n),a=Math.round(i%1),l=Math.round(n%1),c=r[0]+(s+a)*t,u=r[1]+(o+l)*t;return(0,M.vt)(c,u)},x=(e,t,r,i,n)=>{if(i<=0)return{shouldSnapX:!1,shouldSnapY:!1};const s=(e[0]-t[0])/i,o=(e[1]-t[1])/i;return{shouldSnapX:Math.abs(s*n)<r,shouldSnapY:Math.abs(o*n)<r}},_=(e,t,r,i)=>{if("y"===i){const i=t[0]>e[0]?1:-1;return(0,M.vt)(e[0]+r*i,e[1])}const n=t[1]>e[1]?1:-1;return(0,M.vt)(e[0],e[1]+r*n)}}}]);
//# sourceMappingURL=5393.a3e6e83e.chunk.js.map