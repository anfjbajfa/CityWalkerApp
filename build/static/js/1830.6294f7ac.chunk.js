"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[1830],{11830:(e,t,o)=>{o.r(t),o.d(t,{default:()=>te});var r=o(35143),i=o(16868),s=o(3825),n=o(50076),l=o(53084),p=o(76460),a=o(77717),d=o(48611),u=o(50346),y=o(90534),c=o(46053),h=(o(81806),o(28379)),f=o(85842),v=o(17707),m=o(25515),b=o(12406),w=o(19502),g=o(31362),_=o(11270),T=o(94729),M=o(5682),A=o(90260),S=o(40565),C=o(6409),j=o(42553);o(47249);let x=class extends j.oY{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};(0,r._)([(0,c.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],x.prototype,"field",void 0),(0,r._)([(0,c.MZ)({readOnly:!0,nonNullable:!0,json:{read:!1}})],x.prototype,"type",void 0),x=(0,r._)([(0,f.$)("esri.layers.pointCloudFilters.PointCloudFilter")],x);const Z=x;var I;let V=I=class extends Z{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new I({field:this.field,requiredClearBits:(0,l.o8)(this.requiredClearBits),requiredSetBits:(0,l.o8)(this.requiredSetBits)})}};(0,r._)([(0,c.MZ)({type:[S.jz],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],V.prototype,"requiredClearBits",void 0),(0,r._)([(0,c.MZ)({type:[S.jz],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],V.prototype,"requiredSetBits",void 0),(0,r._)([(0,C.e)({pointCloudBitfieldFilter:"bitfield"})],V.prototype,"type",void 0),V=I=(0,r._)([(0,f.$)("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],V);const P=V;var R;let F=R=class extends Z{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new R({field:this.field,includedReturns:(0,l.o8)(this.includedReturns)})}};(0,r._)([(0,c.MZ)({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],F.prototype,"includedReturns",void 0),(0,r._)([(0,C.e)({pointCloudReturnFilter:"return"})],F.prototype,"type",void 0),F=R=(0,r._)([(0,f.$)("esri.layers.pointCloudFilters.PointCloudReturnFilter")],F);const q=F;var B;let z=B=class extends Z{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new B({field:this.field,mode:this.mode,values:(0,l.o8)(this.values)})}};(0,r._)([(0,c.MZ)({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],z.prototype,"mode",void 0),(0,r._)([(0,C.e)({pointCloudValueFilter:"value"})],z.prototype,"type",void 0),(0,r._)([(0,c.MZ)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],z.prototype,"values",void 0),z=B=(0,r._)([(0,f.$)("esri.layers.pointCloudFilters.PointCloudValueFilter")],z);const N={key:"type",base:Z,typeMap:{value:z,bitfield:P,return:q}};var O,k=o(95363),$=o(44135),K=o(76350),D=o(81779),L=o(90975),E=o(120);let U=O=class extends E.A{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new O({...this.cloneProperties(),field:(0,l.o8)(this.field)})}};(0,r._)([(0,C.e)({pointCloudRGBRenderer:"point-cloud-rgb"})],U.prototype,"type",void 0),(0,r._)([(0,c.MZ)({type:String,json:{write:!0}})],U.prototype,"field",void 0),U=O=(0,r._)([(0,f.$)("esri.renderers.PointCloudRGBRenderer")],U);const Y=U;var G=o(42600),W=o(64724);const X={key:"type",base:E.A,typeMap:{"point-cloud-class-breaks":L.A,"point-cloud-rgb":Y,"point-cloud-stretch":G.A,"point-cloud-unique-value":W.A},errorContext:"renderer"};var J=o(12482),Q=o(30973);const H=(0,K.p)();let ee=class extends((0,A.w6)((0,w.b)((0,_.q)((0,T.A)((0,M.j)((0,a.P)((0,g.d)((0,b.p)(m.A))))))))){constructor(){super(...arguments),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t?.domain?t.domain:null}readServiceFields(e,t,o){return Array.isArray(e)?e.map((e=>{const t=new $.A;return"FieldTypeInteger"===e.type&&((e=(0,l.o8)(e)).type="esriFieldTypeInteger"),t.read(e,o),t})):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map((e=>new $.A({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,o,r){(0,d.sM)("layerDefinition.drawingInfo.renderer",e.write({},r),t)}load(e){const t=null!=e?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(u.QP).then((()=>this._fetchService(t)));return this.addResolvingPromise(o),Promise.resolve(this)}createPopupTemplate(e){const t=(0,Q.tn)(this,e);return t&&(this._formatPopupTemplateReturnsField(t),this._formatPopupTemplateRGBField(t)),t}_formatPopupTemplateReturnsField(e){const t=this.fieldsIndex.get("RETURNS");if(!t)return;const o=e.fieldInfos?.find((e=>e.fieldName===t.name));if(!o)return;const r=new D.A({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`\n        var returnValue = $feature.${t.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],r],o.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(e){const t=this.fieldsIndex.get("RGB");if(!t)return;const o=e.fieldInfos?.find((e=>e.fieldName===t.name));if(!o)return;const r=new D.A({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`\n        var rgb = $feature.${t.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],r],o.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new n.A("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const o=this.fieldsIndex.get(e);if(!o)throw new n.A("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const r of this.attributeStorageInfo)if(r.name===o.name){const e=(0,y.fj)(this.parsedUrl?.path??"",`./statistics/${r.key}`);return(0,s.A)(e,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new n.A("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(A.Xh.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(A.Xh.SAVE,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new n.A("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new n.A("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new n.A("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((t=>t.name===e))}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;(0,J.XF)(p.A.getLogger(this),(0,J.B)("Point cloud layers","absolute-height",e)),(0,J.XF)(p.A.getLogger(this),(0,J.tW)("Point cloud layers",e))}};(0,r._)([(0,c.MZ)({type:["PointCloudLayer"]})],ee.prototype,"operationalLayerType",void 0),(0,r._)([(0,c.MZ)(k.M6)],ee.prototype,"popupEnabled",void 0),(0,r._)([(0,c.MZ)({type:i.A,json:{name:"popupInfo",write:!0}})],ee.prototype,"popupTemplate",void 0),(0,r._)([(0,c.MZ)({readOnly:!0,json:{read:!1}})],ee.prototype,"defaultPopupTemplate",null),(0,r._)([(0,c.MZ)({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],ee.prototype,"opacity",void 0),(0,r._)([(0,c.MZ)({type:["show","hide"]})],ee.prototype,"listMode",void 0),(0,r._)([(0,c.MZ)({types:[N],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],ee.prototype,"filters",void 0),(0,r._)([(0,c.MZ)({type:[$.A]})],ee.prototype,"fields",void 0),(0,r._)([(0,c.MZ)(H.fieldsIndex)],ee.prototype,"fieldsIndex",void 0),(0,r._)([(0,h.w)("service","fields",["fields","attributeStorageInfo"])],ee.prototype,"readServiceFields",null),(0,r._)([(0,c.MZ)(H.outFields)],ee.prototype,"outFields",void 0),(0,r._)([(0,c.MZ)({readOnly:!0})],ee.prototype,"attributeStorageInfo",void 0),(0,r._)([(0,c.MZ)(k.Yj)],ee.prototype,"elevationInfo",null),(0,r._)([(0,c.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],ee.prototype,"path",void 0),(0,r._)([(0,c.MZ)(k.fV)],ee.prototype,"legendEnabled",void 0),(0,r._)([(0,c.MZ)({types:X,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:X},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],ee.prototype,"renderer",void 0),(0,r._)([(0,v.K)("renderer")],ee.prototype,"writeRenderer",null),(0,r._)([(0,c.MZ)({json:{read:!1},readOnly:!0})],ee.prototype,"type",void 0),ee=(0,r._)([(0,f.$)("esri.layers.PointCloudLayer")],ee);const te=ee},90975:(e,t,o)=>{o.d(t,{A:()=>b});var r,i=o(35143),s=o(53084),n=o(46053),l=(o(81806),o(76460),o(6409)),p=o(85842),a=o(120),d=o(84563),u=o(69539),y=o(42553),c=o(40565);let h=r=class extends y.oY{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new r({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,s.o8)(this.color)})}};(0,i._)([(0,n.MZ)({type:String,json:{write:!0}})],h.prototype,"description",void 0),(0,i._)([(0,n.MZ)({type:String,json:{write:!0}})],h.prototype,"label",void 0),(0,i._)([(0,n.MZ)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],h.prototype,"minValue",void 0),(0,i._)([(0,n.MZ)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],h.prototype,"maxValue",void 0),(0,i._)([(0,n.MZ)({type:u.A,json:{type:[c.jz],write:!0}})],h.prototype,"color",void 0),h=r=(0,i._)([(0,p.$)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],h);const f=h;var v;let m=v=class extends a.A{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new v({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,s.o8)(this.colorClassBreakInfos),legendOptions:(0,s.o8)(this.legendOptions)})}};(0,i._)([(0,l.e)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],m.prototype,"type",void 0),(0,i._)([(0,n.MZ)({json:{write:!0},type:String})],m.prototype,"field",void 0),(0,i._)([(0,n.MZ)({type:d.A,json:{write:!0}})],m.prototype,"legendOptions",void 0),(0,i._)([(0,n.MZ)({type:a.A.fieldTransformTypeKebabDict.apiValues,json:{type:a.A.fieldTransformTypeKebabDict.jsonValues,read:a.A.fieldTransformTypeKebabDict.read,write:a.A.fieldTransformTypeKebabDict.write}})],m.prototype,"fieldTransformType",void 0),(0,i._)([(0,n.MZ)({type:[f],json:{write:!0}})],m.prototype,"colorClassBreakInfos",void 0),m=v=(0,i._)([(0,p.$)("esri.renderers.PointCloudClassBreaksRenderer")],m);const b=m},120:(e,t,o)=>{o.d(t,{A:()=>A});var r,i=o(35143),s=o(45802),n=o(42553),l=o(53084),p=o(46053),a=(o(81806),o(76460),o(85842));o(47249);let d=r=class extends n.oY{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new r({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,i._)([(0,p.MZ)({type:String,json:{write:!0}})],d.prototype,"field",void 0),(0,i._)([(0,p.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],d.prototype,"minValue",void 0),(0,i._)([(0,p.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],d.prototype,"maxValue",void 0),d=r=(0,i._)([(0,a.$)("esri.renderers.support.pointCloud.ColorModulation")],d);const u=d,y=new s.J({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let c=class extends n.oY{};(0,i._)([(0,p.MZ)({type:y.apiValues,readOnly:!0,nonNullable:!0,json:{type:y.jsonValues,read:!1,write:y.write}})],c.prototype,"type",void 0),c=(0,i._)([(0,a.$)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],c);const h=c;var f,v=o(6409);let m=f=class extends h{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new f({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,i._)([(0,v.e)({pointCloudFixedSizeAlgorithm:"fixed-size"})],m.prototype,"type",void 0),(0,i._)([(0,p.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],m.prototype,"size",void 0),(0,i._)([(0,p.MZ)({type:Boolean,json:{write:!0}})],m.prototype,"useRealWorldSymbolSizes",void 0),m=f=(0,i._)([(0,a.$)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],m);const b=m;var w;let g=w=class extends h{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new w({scaleFactor:this.scaleFactor})}};(0,i._)([(0,v.e)({pointCloudSplatAlgorithm:"splat"})],g.prototype,"type",void 0),(0,i._)([(0,p.MZ)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],g.prototype,"scaleFactor",void 0),g=w=(0,i._)([(0,a.$)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],g);const _={key:"type",base:h,typeMap:{"fixed-size":b,splat:g}},T=(0,s.O)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let M=class extends n.oY{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,l.o8)(this.pointSizeAlgorithm),colorModulation:(0,l.o8)(this.colorModulation),pointsPerInch:(0,l.o8)(this.pointsPerInch)}}};(0,i._)([(0,p.MZ)({type:T.apiValues,readOnly:!0,nonNullable:!0,json:{type:T.jsonValues,read:!1,write:T.write}})],M.prototype,"type",void 0),(0,i._)([(0,p.MZ)({types:_,json:{write:!0}})],M.prototype,"pointSizeAlgorithm",void 0),(0,i._)([(0,p.MZ)({type:u,json:{write:!0}})],M.prototype,"colorModulation",void 0),(0,i._)([(0,p.MZ)({json:{write:!0},nonNullable:!0,type:Number})],M.prototype,"pointsPerInch",void 0),M=(0,i._)([(0,a.$)("esri.renderers.PointCloudRenderer")],M),(M||(M={})).fieldTransformTypeKebabDict=new s.J({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const A=M},42600:(e,t,o)=>{o.d(t,{A:()=>c});var r,i=o(35143),s=o(53084),n=o(46053),l=(o(81806),o(76460),o(6409)),p=o(85842),a=o(120),d=o(84563),u=o(77718);let y=r=class extends a.A{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new r({...this.cloneProperties(),field:(0,s.o8)(this.field),fieldTransformType:(0,s.o8)(this.fieldTransformType),stops:(0,s.o8)(this.stops),legendOptions:(0,s.o8)(this.legendOptions)})}};(0,i._)([(0,l.e)({pointCloudStretchRenderer:"point-cloud-stretch"})],y.prototype,"type",void 0),(0,i._)([(0,n.MZ)({json:{write:!0},type:String})],y.prototype,"field",void 0),(0,i._)([(0,n.MZ)({type:d.A,json:{write:!0}})],y.prototype,"legendOptions",void 0),(0,i._)([(0,n.MZ)({type:a.A.fieldTransformTypeKebabDict.apiValues,json:{type:a.A.fieldTransformTypeKebabDict.jsonValues,read:a.A.fieldTransformTypeKebabDict.read,write:a.A.fieldTransformTypeKebabDict.write}})],y.prototype,"fieldTransformType",void 0),(0,i._)([(0,n.MZ)({type:[u.A],json:{write:!0}})],y.prototype,"stops",void 0),y=r=(0,i._)([(0,p.$)("esri.renderers.PointCloudStretchRenderer")],y);const c=y},64724:(e,t,o)=>{o.d(t,{A:()=>b});var r,i=o(35143),s=o(53084),n=o(46053),l=(o(81806),o(76460),o(6409)),p=o(85842),a=o(120),d=o(84563),u=o(69539),y=o(42553),c=o(40565);let h=r=class extends y.oY{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new r({description:this.description,label:this.label,values:(0,s.o8)(this.values),color:(0,s.o8)(this.color)})}};(0,i._)([(0,n.MZ)({type:String,json:{write:!0}})],h.prototype,"description",void 0),(0,i._)([(0,n.MZ)({type:String,json:{write:!0}})],h.prototype,"label",void 0),(0,i._)([(0,n.MZ)({type:[String],json:{write:!0}})],h.prototype,"values",void 0),(0,i._)([(0,n.MZ)({type:u.A,json:{type:[c.jz],write:!0}})],h.prototype,"color",void 0),h=r=(0,i._)([(0,p.$)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],h);const f=h;var v;let m=v=class extends a.A{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new v({...this.cloneProperties(),field:(0,s.o8)(this.field),fieldTransformType:(0,s.o8)(this.fieldTransformType),colorUniqueValueInfos:(0,s.o8)(this.colorUniqueValueInfos),legendOptions:(0,s.o8)(this.legendOptions)})}};(0,i._)([(0,l.e)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],m.prototype,"type",void 0),(0,i._)([(0,n.MZ)({json:{write:!0},type:String})],m.prototype,"field",void 0),(0,i._)([(0,n.MZ)({type:a.A.fieldTransformTypeKebabDict.apiValues,json:{type:a.A.fieldTransformTypeKebabDict.jsonValues,read:a.A.fieldTransformTypeKebabDict.read,write:a.A.fieldTransformTypeKebabDict.write}})],m.prototype,"fieldTransformType",void 0),(0,i._)([(0,n.MZ)({type:[f],json:{write:!0}})],m.prototype,"colorUniqueValueInfos",void 0),(0,i._)([(0,n.MZ)({type:d.A,json:{write:!0}})],m.prototype,"legendOptions",void 0),m=v=(0,i._)([(0,p.$)("esri.renderers.PointCloudUniqueValueRenderer")],m);const b=m}}]);
//# sourceMappingURL=1830.6294f7ac.chunk.js.map