"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[2798],{95085:(e,t,n)=>{n.d(t,{A:()=>c});var i=n(35143),s=n(91967),o=n(18690),r=n(69098),l=n(5632),p=n(42553),a=n(46053),u=(n(81806),n(76460),n(85842));let y=0,d=class extends((0,p.Te)((0,r.O)((0,l.sA)(s.A)))){constructor(e){super(e),this.id=`${Date.now().toString(16)}-analysis-${y++}`,this.title=null}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if(null!=t)switch(t.type){case"line-of-sight":case"dimension":case"viewshed":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",e)}get isEditable(){return this.requiredPropertiesForEditing.every(o.Ru)}};(0,i._)([(0,a.MZ)({type:String,constructOnly:!0,clonable:!1})],d.prototype,"id",void 0),(0,i._)([(0,a.MZ)({type:String})],d.prototype,"title",void 0),(0,i._)([(0,a.MZ)({clonable:!1,value:null})],d.prototype,"parent",null),(0,i._)([(0,a.MZ)({readOnly:!0})],d.prototype,"isEditable",null),d=(0,i._)([(0,u.$)("esri.analysis.Analysis")],d);const c=d},72798:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var i=n(35143),s=n(95085),o=n(69539),r=n(69098),l=n(42553),p=n(76931),a=n(46053),u=n(40565),y=(n(47249),n(81806),n(85842));let d=class extends((0,l.Te)(r.P)){constructor(e){super(e),this.type="simple",this.color=new o.A("black"),this.lineSize=2,this.fontSize=10,this.textColor=new o.A("black"),this.textBackgroundColor=new o.A([255,255,255,.6])}};(0,i._)([(0,a.MZ)({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],d.prototype,"type",void 0),(0,i._)([(0,a.MZ)({type:o.A,nonNullable:!0,json:{type:[u.jz],write:{isRequired:!0}}})],d.prototype,"color",void 0),(0,i._)([(0,a.MZ)({type:Number,cast:p.cr,nonNullable:!0,range:{min:(0,p.PN)(1)},json:{write:{isRequired:!0}}})],d.prototype,"lineSize",void 0),(0,i._)([(0,a.MZ)({type:Number,cast:p.cr,nonNullable:!0,json:{write:{isRequired:!0}}})],d.prototype,"fontSize",void 0),(0,i._)([(0,a.MZ)({type:o.A,nonNullable:!0,json:{type:[u.jz],write:{isRequired:!0}}})],d.prototype,"textColor",void 0),(0,i._)([(0,a.MZ)({type:o.A,nonNullable:!0,json:{type:[u.jz],write:{isRequired:!0}}})],d.prototype,"textBackgroundColor",void 0),d=(0,i._)([(0,y.$)("esri.analysis.DimensionSimpleStyle")],d);const c=d;var h;n(35238);!function(e){e.Horizontal="horizontal",e.Vertical="vertical",e.Direct="direct"}(h||(h={}));const m=[h.Horizontal,h.Vertical,h.Direct];var _=n(73582),w=n(21403),g=n(19247);let v=class extends((0,l.Te)(r.P)){constructor(e){super(e),this.type="length",this.startPoint=null,this.endPoint=null,this.measureType=h.Direct,this.offset=0,this.orientation=0}};(0,i._)([(0,a.MZ)({type:["length"],json:{write:{isRequired:!0}}})],v.prototype,"type",void 0),(0,i._)([(0,a.MZ)({type:g.A,json:{write:!0}})],v.prototype,"startPoint",void 0),(0,i._)([(0,a.MZ)({type:g.A,json:{write:!0}})],v.prototype,"endPoint",void 0),(0,i._)([(0,a.MZ)({type:m,nonNullable:!0,json:{write:{isRequired:!0}}})],v.prototype,"measureType",void 0),(0,i._)([(0,a.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],v.prototype,"offset",void 0),(0,i._)([(0,a.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),(0,w.w)((e=>_.ie.normalize((0,u.GB)(e),0,!0)))],v.prototype,"orientation",void 0),v=(0,i._)([(0,y.$)("esri.analysis.LengthDimension")],v);const f=v;var M=n(94643),Z=n(3975),b=n(68134),P=(n(76460),n(76797)),x=n(9624);const A=M.A.ofType(f);let j=class extends s.A{constructor(e){super(e),this.type="dimension",this.style=new c,this.extent=null}initialize(){this.addHandles((0,b.wB)((()=>this._computeExtent()),(e=>{null==e?.pending&&this._set("extent",null!=e?e.extent:null)}),b.pc))}get dimensions(){return this._get("dimensions")||new A}set dimensions(e){this._set("dimensions",(0,Z.V)(e,this.dimensions,A))}get spatialReference(){for(const e of this.dimensions){if(null!=e.startPoint)return e.startPoint.spatialReference;if(null!=e.endPoint)return e.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce(((e,t)=>(e.push(t.startPoint,t.endPoint),e)),[])}async waitComputeExtent(){const e=this._computeExtent();return null!=e?e.pending:Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(null==e)return{pending:null,extent:null};const t=[];for(const s of this.dimensions)null!=s.startPoint&&t.push(s.startPoint),null!=s.endPoint&&t.push(s.endPoint);const n=(0,x.projectOrLoadMany)(t,e);if(null!=n.pending)return{pending:n.pending,extent:null};let i=null;return null!=n.geometries&&(i=n.geometries.reduce(((e,t)=>null==e?null!=t?P.A.fromPoint(t):null:null!=t?e.union(P.A.fromPoint(t)):e),null)),{pending:null,extent:i}}clear(){this.dimensions.removeAll()}};(0,i._)([(0,a.MZ)({type:["dimension"]})],j.prototype,"type",void 0),(0,i._)([(0,a.MZ)({cast:Z.H,type:A,nonNullable:!0})],j.prototype,"dimensions",null),(0,i._)([(0,a.MZ)({readOnly:!0})],j.prototype,"spatialReference",null),(0,i._)([(0,a.MZ)({types:{key:"type",base:null,typeMap:{simple:c}},nonNullable:!0})],j.prototype,"style",void 0),(0,i._)([(0,a.MZ)({value:null,readOnly:!0})],j.prototype,"extent",void 0),(0,i._)([(0,a.MZ)({readOnly:!0})],j.prototype,"requiredPropertiesForEditing",null),j=(0,i._)([(0,y.$)("esri.analysis.DimensionAnalysis")],j);const R=j;var N=n(77717),O=n(17707),q=n(25515),k=n(11270);let z=class extends((0,k.q)((0,N.P)(q.A))){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new R,this.opacity=1,e){const{source:t,style:n}=e;t&&n&&(t.style=n)}}initialize(){this.addHandles([(0,b.wB)((()=>this.source),((e,t)=>{null!=t&&t.parent===this&&(t.parent=null),null!=e&&(e.parent=this)}),b.pc)])}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get style(){return this.source.style}set style(e){this.source.style=e}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new R)}get analysis(){return this.source}set analysis(e){this.source=e}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e}writeDimensions(e,t,n,i){t.dimensions=e.filter((e=>{let{startPoint:t,endPoint:n}=e;return null!=t&&null!=n})).map((e=>e.toJSON(i))).toJSON()}};(0,i._)([(0,a.MZ)({json:{read:!1},readOnly:!0})],z.prototype,"type",void 0),(0,i._)([(0,a.MZ)({type:["ArcGISDimensionLayer"]})],z.prototype,"operationalLayerType",void 0),(0,i._)([(0,a.MZ)({nonNullable:!0})],z.prototype,"source",void 0),(0,i._)([(0,a.MZ)({readOnly:!0})],z.prototype,"spatialReference",null),(0,i._)([(0,a.MZ)({types:{key:"type",base:null,typeMap:{simple:c}},json:{write:{ignoreOrigin:!0}}})],z.prototype,"style",null),(0,i._)([(0,a.MZ)({readOnly:!0})],z.prototype,"fullExtent",null),(0,i._)([(0,a.MZ)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],z.prototype,"opacity",void 0),(0,i._)([(0,a.MZ)({type:["show","hide"]})],z.prototype,"listMode",void 0),(0,i._)([(0,a.MZ)({type:M.A.ofType(f),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],z.prototype,"dimensions",null),(0,i._)([(0,O.K)("web-scene","dimensions")],z.prototype,"writeDimensions",null),z=(0,i._)([(0,y.$)("esri.layers.DimensionLayer")],z);const S=z}}]);
//# sourceMappingURL=2798.ad7b6d8a.chunk.js.map