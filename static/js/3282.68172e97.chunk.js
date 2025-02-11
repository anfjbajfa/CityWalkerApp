"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[3282],{28778:(t,e,i)=>{i.d(e,{g:()=>n});const n={convertToGEGeometry:function(t,e){return null==e?null:t.convertJSONToGeometry(e)},exportPoint:function(t,e,i){const n=new r(t.getPointX(e),t.getPointY(e),i),s=t.hasZ(e),o=t.hasM(e);return s&&(n.z=t.getPointZ(e)),o&&(n.m=t.getPointM(e)),n},exportPolygon:function(t,e,i){return new s(t.exportPaths(e),i,t.hasZ(e),t.hasM(e))},exportPolyline:function(t,e,i){return new o(t.exportPaths(e),i,t.hasZ(e),t.hasM(e))},exportMultipoint:function(t,e,i){return new a(t.exportPoints(e),i,t.hasZ(e),t.hasM(e))},exportExtent:function(t,e,i){const n=t.hasZ(e),r=t.hasM(e),s=new l(t.getXMin(e),t.getYMin(e),t.getXMax(e),t.getYMax(e),i);if(n){const i=t.getZExtent(e);s.zmin=i.vmin,s.zmax=i.vmax}if(r){const i=t.getMExtent(e);s.mmin=i.vmin,s.mmax=i.vmax}return s}};class r{constructor(t,e,i){this.x=t,this.y=e,this.spatialReference=i,this.z=void 0,this.m=void 0}}class s{constructor(t,e,i,n){this.rings=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}class o{constructor(t,e,i,n){this.paths=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}class a{constructor(t,e,i,n){this.points=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}class l{constructor(t,e,i,n,r){this.xmin=t,this.ymin=e,this.xmax=i,this.ymax=n,this.spatialReference=r,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},24586:(t,e,i)=>{i.d(e,{Cv:()=>f,Nk:()=>d,lK:()=>g});var n=i(18690),r=i(50346),s=i(9624),o=i(28778),a=i(80963),l=i(45417);const p=[0,0];function u(t,e){if(!e)return null;if("x"in e){const i={x:0,y:0};return[i.x,i.y]=t(e.x,e.y,p),null!=e.z&&(i.z=e.z),null!=e.m&&(i.m=e.m),i}if("xmin"in e){const i={xmin:0,ymin:0,xmax:0,ymax:0};return[i.xmin,i.ymin]=t(e.xmin,e.ymin,p),[i.xmax,i.ymax]=t(e.xmax,e.ymax,p),e.hasZ&&(i.zmin=e.zmin,i.zmax=e.zmax,i.hasZ=!0),e.hasM&&(i.mmin=e.mmin,i.mmax=e.mmax,i.hasM=!0),i}return"rings"in e?{rings:c(e.rings,t),hasM:e.hasM,hasZ:e.hasZ}:"paths"in e?{paths:c(e.paths,t),hasM:e.hasM,hasZ:e.hasZ}:"points"in e?{points:m(e.points,t),hasM:e.hasM,hasZ:e.hasZ}:null}function c(t,e){const i=[];for(const n of t)i.push(m(n,e));return i}function m(t,e){const i=[];for(const n of t){const t=e(n[0],n[1],[0,0]);i.push(t),n.length>2&&t.push(n[2]),n.length>3&&t.push(n[3])}return i}async function d(t,e){if(!t||!e)return;const i=Array.isArray(t)?t.map((t=>null!=t.geometry?t.geometry.spatialReference:null)).filter(n.Ru):[t];await(0,s.initializeProjection)(i.map((t=>({source:t,dest:e}))))}const y=u.bind(null,l.je),h=u.bind(null,l.tD);function f(t,e,i,n){if(!t)return t;if(i||(i=e,e=t.spatialReference),!(0,a.fn)(e)||!(0,a.fn)(i)||(0,a.aI)(e,i))return t;if((0,l.y7)(e,i)){const e=(0,a.K8)(i)?y(t):h(t);return e.spatialReference=i,e}return(0,s.projectMany)(o.g,[t],e,i,null,n)[0]}const v=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,e,i,n){if(!t?.length||!e||!i||(0,a.aI)(e,i))return t;const s={geometries:t,inSpatialReference:e,outSpatialReference:i,geographicTransformation:n,resolve:(0,r.Tw)()};return this._jobs.push(s),this._timer??=setTimeout(this._process,10),s.resolve.promise}_process(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:e,inSpatialReference:i,outSpatialReference:n,resolve:r,geographicTransformation:p}=t;(0,l.y7)(i,n)?(0,a.K8)(n)?r(e.map(y)):r(e.map(h)):r((0,s.projectMany)(o.g,e,i,n,p,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};function g(t,e,i,n){return v.push(t,e,i,n)}},71857:(t,e,i)=>{i.d(e,{GC:()=>d,T2:()=>y,VY:()=>c,v8:()=>m});var n=i(45802),r=i(31633),s=i(9624),o=i(27084),a=i(19902),l=i(1438),p=i(80963),u=i(24586);const c=new n.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),m=Object.freeze({});async function d(t,e,i){const{outFields:n,orderByFields:r,groupByFieldsForStatistics:s,outStatistics:o}=t;if(n)for(let a=0;a<n.length;a++)n[a]=n[a].trim();if(r)for(let a=0;a<r.length;a++)r[a]=r[a].trim();if(s)for(let a=0;a<s.length;a++)s[a]=s[a].trim();if(o)for(let a=0;a<o.length;a++)o[a].onStatisticField&&(o[a].onStatisticField=o[a].onStatisticField.trim());return t.geometry&&!t.outSR&&(t.outSR=t.geometry.spatialReference),y(t,e,i)}async function y(t,e,n){if(!t)return null;let{where:s}=t;if(t.where=s=s?.trim(),(!s||/^1 *= *1$/.test(s)||e&&e===s)&&(t.where=null),!t.geometry)return t;let d=await async function(t){const{distance:e,units:n}=t,s=t.geometry;if(null==e||"vertexAttributes"in s)return s;const o=s.spatialReference,a=n?c.fromJSON(n):(0,r.Ij)(o),l=o&&((0,p.EA)(o)||(0,p.K8)(o))?s:await(0,u.Nk)(o,p.KK).then((()=>(0,u.Cv)(s,p.KK)));return(await async function(){return(await Promise.all([i.e(2612),i.e(364)]).then(i.bind(i,1669))).geodesicBuffer}())(l.spatialReference,l,e,a)}(t);if(t.distance=0,t.units=null,"esriSpatialRelEnvelopeIntersects"===t.spatialRel){const{spatialReference:e}=t.geometry;d=(0,o.HA)(d),d.spatialReference=e}if(d){await(0,u.Nk)(d.spatialReference,n),d=function(t,e){const i=t.spatialReference;return h(t,e)&&(0,a.ZC)(t)?{spatialReference:i,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]}:t}(d,n);const e=(await(0,l.el)((0,a.rS)(d)))[0];if(null==e)throw m;const i="quantizationParameters"in t&&t.quantizationParameters?.tolerance||"maxAllowableOffset"in t&&t.maxAllowableOffset||0,r=i&&h(d,n)?{densificationStep:8*i}:void 0,s=e.toJSON(),o=(0,u.Cv)(s,s.spatialReference,n,r);if(!o)throw m;o.spatialReference=n,t.geometry=o}return t}function h(t,e){if(!t)return!1;const i=t.spatialReference;return((0,a.ZC)(t)||(0,a.Bi)(t)||(0,a.Rg)(t))&&!(0,p.aI)(i,e)&&!(0,s.canProjectWithoutEngine)(i,e)}},33282:(t,e,i)=>{i.r(e),i.d(e,{default:()=>G});var n=i(35143),r=i(35238),s=i(69098),o=i(45802),a=i(42553),l=i(76460),p=i(46053),u=i(40565),c=(i(47249),i(81806),i(6409)),m=i(85842),d=i(19902),y=i(71857),h=i(48611);let f=class extends((0,s.O)(a.oY)){constructor(t){super(t),this.alias=null,this.expression=null,this.field=null,this.responseType=null}};(0,n._)([(0,p.MZ)({type:String,json:{write:!0}})],f.prototype,"alias",void 0),(0,n._)([(0,p.MZ)({type:String,json:{write:!0}})],f.prototype,"expression",void 0),(0,n._)([(0,p.MZ)({type:String,json:{write:!0}})],f.prototype,"field",void 0),(0,n._)([(0,p.MZ)({type:String,json:{write:!0}})],f.prototype,"responseType",void 0),f=(0,n._)([(0,m.$)("esri.rest.support.BinParametersAttributes")],f);const v=f;f.from=(0,u.dp)(f);const g=new o.J({naturalLog:"natural-log",squareRoot:"square-root"});let w=class extends((0,s.O)(a.oY)){constructor(t){super(t),this.expression=null,this.field=null,this.firstDayOfWeek=null,this.hideUpperBound=null,this.splitByAttributes=null,this.stackByAttributes=null,this.transformation=null}};(0,n._)([(0,p.MZ)({type:String,json:{write:!0}})],w.prototype,"expression",void 0),(0,n._)([(0,p.MZ)({type:String,json:{name:"onField",write:!0}})],w.prototype,"field",void 0),(0,n._)([(0,p.MZ)({type:String,json:{write:!0}})],w.prototype,"firstDayOfWeek",void 0),(0,n._)([(0,p.MZ)({type:String,json:{write:!0}})],w.prototype,"hideUpperBound",void 0),(0,n._)([(0,p.MZ)({type:v,json:{write:{target:{splitBy:{type:String},splitByField:{type:String},splitByAlias:{type:String}},writer:(t,e)=>{null!=t.field&&(e.splitByField=t.field),null!=t.expression&&(e.splitBy=t.expression),null!=t.alias&&(e.splitByAlias=t.alias)}},read:{source:["splitBy","splitByField","splitByAlias"],reader:(t,e)=>new v({field:e.splitByField,expression:e.splitBy,alias:e.splitByAlias})}}})],w.prototype,"splitByAttributes",void 0),(0,n._)([(0,p.MZ)({type:v,json:{write:{target:{stackBy:{type:String},stackByField:{type:String},stackByAlias:{type:String},jsonStyle:{type:String}},writer:(t,e)=>{null!=t.field&&(e.stackByField=t.field),null!=t.expression&&(e.stackBy=t.expression),null!=t.alias&&(e.stackByAlias=t.alias),null!=t.responseType&&(e.jsonStyle=t.responseType)},overridePolicy(){return{enabled:null!=this.stackByAttributes?.field||null!=this.stackByAttributes?.expression}}},read:{source:["stackBy","stackByField","stackByAlias","jsonStyle"],reader:(t,e)=>new v({field:e.stackByField,expression:e.stackBy,alias:e.stackByAlias,responseType:e.jsonStyle})}}})],w.prototype,"stackByAttributes",void 0),(0,n._)([(0,c.e)(g)],w.prototype,"transformation",void 0),w=(0,n._)([(0,m.$)("esri.rest.support.BinParametersBase")],w);const x=w,M=(0,o.O)()({naturalLog:"natural-log",squareRoot:"square-root",percentOfTotal:"percent-of-total",log:"log",field:"field"}),_="percent-of-total",Z="field",S=t=>{let e=class extends t{constructor(){super(...arguments),this.normalizationField=null,this.normalizationMaxValue=null,this.normalizationMinValue=null,this.normalizationTotal=null}get normalizationType(){let t=this._get("normalizationType");const e=!!this.normalizationField,i=null!=this.normalizationTotal;return e||i?(t=e&&Z||i&&_||null,e&&i&&l.A.getLogger(this).warn("warning: both normalizationField and normalizationTotal are set!")):t!==Z&&t!==_||(t=null),t}set normalizationType(t){this._set("normalizationType",t)}};return(0,n._)([(0,p.MZ)({type:String,json:{name:"parameters.normalizationField",write:!0}})],e.prototype,"normalizationField",void 0),(0,n._)([(0,p.MZ)({type:Number,json:{name:"parameters.normalizationMaxValue",write:!0}})],e.prototype,"normalizationMaxValue",void 0),(0,n._)([(0,p.MZ)({type:Number,json:{name:"parameters.normalizationMinValue",write:!0}})],e.prototype,"normalizationMinValue",void 0),(0,n._)([(0,p.MZ)({type:Number,json:{name:"parameters.normalizationTotal",write:!0}})],e.prototype,"normalizationTotal",void 0),(0,n._)([(0,c.e)(M,{name:"parameters.normalizationType"})],e.prototype,"normalizationType",null),e=(0,n._)([(0,m.$)("esri.rest.support.NormalizationBinParametersMixin")],e),e};function B(t,e,i){(0,h.sM)(i,t instanceof Date?t.getTime():t,e)}let j=class extends(S(x)){constructor(t){super(t),this.bins=null,this.end=null,this.start=null,this.type="auto-interval"}};(0,n._)([(0,p.MZ)({type:Number,json:{name:"parameters.numberOfBins",write:!0}})],j.prototype,"bins",void 0),(0,n._)([(0,p.MZ)({json:{name:"parameters.end",write:{writer:B}}})],j.prototype,"end",void 0),(0,n._)([(0,p.MZ)({json:{name:"parameters.start",write:{writer:B}}})],j.prototype,"start",void 0),(0,n._)([(0,c.e)({autoIntervalBin:"auto-interval"},{readOnly:!0})],j.prototype,"type",void 0),j=(0,n._)([(0,m.$)("esri.rest.support.AutoIntervalBinParameters")],j);const b=j;j.from=(0,u.dp)(j);const R=(0,o.O)()({year:"years",quarter:"quarters",month:"months",week:"weeks",day:"days",hour:"hours",minute:"minutes",second:"seconds"});let z=class extends((0,s.O)(a.oY)){constructor(t){super(t),this.value=null,this.units=null}};(0,n._)([(0,p.MZ)({type:Number,json:{name:"number",write:!0}})],z.prototype,"value",void 0),(0,n._)([(0,c.e)(R,{name:"unit"})],z.prototype,"units",void 0),z=(0,n._)([(0,m.$)("esri.rest.support.DateBinTimeInterval")],z);const T=z;function A(t,e,i){(0,h.sM)(i,"string"==typeof t?t:t?.getTime(),e)}function k(t,e){const i=t.parameters[e];return i?"string"==typeof i?i:new Date(i):null}z.from=(0,u.dp)(z);let P=class extends x{constructor(t){super(t),this.end=null,this.interval=null,this.offset=null,this.start=null,this.type="date"}};(0,n._)([(0,p.MZ)({cast:t=>t?"string"==typeof t?t:new Date(t):null,json:{name:"parameters.end",read:{reader:(t,e)=>k(e,"end")},write:{writer:A}}})],P.prototype,"end",void 0),(0,n._)([(0,p.MZ)({type:T,json:{name:"parameters",write:!0}})],P.prototype,"interval",void 0),(0,n._)([(0,p.MZ)({type:T,json:{name:"parameters.offset",write:!0}})],P.prototype,"offset",void 0),(0,n._)([(0,p.MZ)({cast:t=>t?"string"==typeof t?t:new Date(t):null,json:{name:"parameters.start",read:{reader:(t,e)=>k(e,"start")},write:{writer:A}}})],P.prototype,"start",void 0),(0,n._)([(0,c.e)({dateBin:"date"},{readOnly:!0})],P.prototype,"type",void 0),P=(0,n._)([(0,m.$)("esri.rest.support.DateBinParameters")],P);const F=P;P.from=(0,u.dp)(P);let O=class extends x{constructor(t){super(t),this.boundaries=null,this.type="fixed-boundaries"}};(0,n._)([(0,p.MZ)({json:{name:"parameters.boundaries",write:{writer:function(t,e,i){(0,h.sM)(i,t&&function(t){return t[0]instanceof Date}(t)?t.map((t=>t.getTime())):t,e)}}}})],O.prototype,"boundaries",void 0),(0,n._)([(0,c.e)({fixedBoundariesBin:"fixed-boundaries"},{readOnly:!0})],O.prototype,"type",void 0),O=(0,n._)([(0,m.$)("esri.rest.support.FixedBoundariesBinParameters")],O);const N=O;function D(t,e,i){(0,h.sM)(i,t instanceof Date?t.getTime():t,e)}O.from=(0,u.dp)(O);let I=class extends(S(x)){constructor(t){super(t),this.end=null,this.interval=null,this.start=null,this.type="fixed-interval"}};(0,n._)([(0,p.MZ)({json:{name:"parameters.end",write:{writer:D}}})],I.prototype,"end",void 0),(0,n._)([(0,p.MZ)({type:Number,json:{name:"parameters.interval",write:!0}})],I.prototype,"interval",void 0),(0,n._)([(0,p.MZ)({json:{name:"parameters.start",write:{writer:D}}})],I.prototype,"start",void 0),(0,n._)([(0,c.e)({fixedIntervalBin:"fixed-interval"},{readOnly:!0})],I.prototype,"type",void 0),I=(0,n._)([(0,m.$)("esri.rest.support.FixedIntervalBinParameters")],I);const V=I;I.from=(0,u.dp)(I);var $=i(69194),q=i(38432),Y=i(21820),K=i(67478),U=i(13312);const C=new o.J({asc:"ascending",desc:"descending"}),E={base:x,key:"type",typeMap:{"auto-interval":b,date:F,"fixed-boundaries":N,"fixed-interval":V}};let J=class extends((0,s.O)(a.oY)){constructor(t){super(t),this.binParameters=null,this.binOrder="ascending",this.cacheHint=void 0,this.datumTransformation=null,this.defaultSpatialReference=null,this.distance=void 0,this.geometry=null,this.lowerBoundaryAlias=null,this.outSpatialReference=null,this.outStatistics=null,this.quantizationParameters=null,this.returnDistinctValues=null,this.spatialRelationship="intersects",this.upperBoundaryAlias=null,this.units=null,this.where="1=1"}set outTimeZone(t){this._set("outTimeZone",t),t&&!(0,K.wr)(t)&&l.A.getLogger(this).warn("#outTimeZone",`the parsed value '${t}' may not be a valid IANA time zone`)}};(0,n._)([(0,p.MZ)({types:E,json:{name:"bin",write:!0}})],J.prototype,"binParameters",void 0),(0,n._)([(0,c.e)(C)],J.prototype,"binOrder",void 0),(0,n._)([(0,p.MZ)({type:Boolean,json:{write:!0}})],J.prototype,"cacheHint",void 0),(0,n._)([(0,p.MZ)({json:{write:!0}})],J.prototype,"datumTransformation",void 0),(0,n._)([(0,p.MZ)({type:U.A,json:{name:"defaultSR",write:!0}})],J.prototype,"defaultSpatialReference",void 0),(0,n._)([(0,p.MZ)({type:Number,json:{write:{overridePolicy:t=>({enabled:t>0})}}})],J.prototype,"distance",void 0),(0,n._)([(0,p.MZ)({types:r.yR,json:{read:d.rS,write:!0}})],J.prototype,"geometry",void 0),(0,n._)([(0,p.MZ)({type:String,json:{write:!0}})],J.prototype,"lowerBoundaryAlias",void 0),(0,n._)([(0,p.MZ)({type:U.A,json:{name:"outSR",write:!0}})],J.prototype,"outSpatialReference",void 0),(0,n._)([(0,p.MZ)({type:[Y.A],json:{write:{enabled:!0,overridePolicy(){return{enabled:null!=this.outStatistics&&this.outStatistics.length>0}}}}})],J.prototype,"outStatistics",void 0),(0,n._)([(0,p.MZ)({value:null,json:{name:"outTimeReference",read:{reader:t=>t.ianaTimeZone},write:{writer:(t,e,i)=>{t&&(e[i]={ianaTimeZone:t})}}}})],J.prototype,"outTimeZone",null),(0,n._)([(0,p.MZ)({type:$.A,json:{write:!0}})],J.prototype,"quantizationParameters",void 0),(0,n._)([(0,p.MZ)({type:Boolean,json:{write:!0}})],J.prototype,"returnDistinctValues",void 0),(0,n._)([(0,c.e)(q.x,{name:"spatialRel"})],J.prototype,"spatialRelationship",void 0),(0,n._)([(0,p.MZ)({type:String,json:{write:!0}})],J.prototype,"upperBoundaryAlias",void 0),(0,n._)([(0,p.MZ)({type:String,json:{read:y.VY.read,write:{writer:y.VY.write,overridePolicy(t){return{enabled:null!=t&&null!=this.distance&&this.distance>0}}}}})],J.prototype,"units",void 0),(0,n._)([(0,p.MZ)({type:String,json:{write:!0}})],J.prototype,"where",void 0),J=(0,n._)([(0,m.$)("esri.rest.support.BinsQuery")],J);const G=J;J.from=(0,u.dp)(J)}}]);
//# sourceMappingURL=3282.68172e97.chunk.js.map