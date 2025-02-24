"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[9870],{49870:(e,t,i)=>{i.r(t),i.d(t,{default:()=>B});var r,s=i(70273),o=(i(77844),i(41487)),n=(i(65366),i(59308),i(20989),i(12139),i(73354),i(75234),i(51556),i(42767),i(50906)),a=i(25016),l=i(25943),p=i(34816),d=i(55678),c=i(82439),h=i(65930),u=i(11434),y=i(68313),m=i(92976),f=i(67519),v=i(53295),g=i(35097),w=i(55292),b=i(6550),_=i(97719),S=i(5180),I=i(67846),M=i(80948),Z=i(49386),A=i(9948),j=i(94452),x=i(52851),R=i(8065),T=i(89136),F=i(5579),P=i(20005),k=i(72076),O=i(1105),E=i(8120),D=i(42552),C=i(95587),N=i(68907),U=i(74084);i(27052),i(11215);let L=r=class extends U.oY{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new r({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};(0,s._)([(0,f.MZ)({type:Number,json:{write:!0}})],L.prototype,"age",void 0),(0,s._)([(0,f.MZ)({type:Number,json:{write:!0}})],L.prototype,"ageReceived",void 0),(0,s._)([(0,f.MZ)({type:Number,json:{write:!0}})],L.prototype,"displayCount",void 0),(0,s._)([(0,f.MZ)({type:Number,json:{write:!0}})],L.prototype,"maxObservations",void 0),L=r=(0,s._)([(0,w.$)("esri.layers.support.PurgeOptions")],L);const V=L;var J=i(3351),G=i(21553),z=i(69423),$=i(94523),X=i(57731),q=i(34614),W=i(76607);const Q=(0,E.p)();function Y(e,t){return new d.A("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}let H=class extends((0,A.J)((0,Z.F)((0,I.dM)((0,F.e)((0,T.j)((0,R.J)((0,S.b)((0,j.q)((0,x.A)((0,y.P)((0,M.d)((0,p.O)(_.A))))))))))))){constructor(){super(...arguments),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.outFields=["*"],this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new V,this.refreshInterval=0,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=q.A.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.useViewTime=!0,this.webSocketUrl=null,this._debouncedSaveOperations=(0,m.sg)((async(e,t,r)=>{const{save:s,saveAs:o}=await i.e(6953).then(i.bind(i,6953));switch(e){case X.X.SAVE:return s(this,t);case X.X.SAVE_AS:return o(this,r,t)}}))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new d.A("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(m.QP).then((()=>this._fetchService(t)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set featureReduction(e){const t=this._normalizeFeatureReduction(e);this._set("featureReduction",t)}set renderer(e){(0,D.yp)(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,i){t=t.layerDefinition||t;const r=t.drawingInfo?.renderer;if(r){const e=(0,n.L)(r,t,i)||void 0;return e||u.A.getLogger(this).error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:i}),e}return(0,k.PD)(t,i)}async connect(e){const[{createConnection:t}]=await Promise.all([Promise.all([i.e(7292),i.e(6871),i.e(8969)]).then(i.bind(i,86871)),this.load()]),r=this.geometryType?b.g.toJSON(this.geometryType):null,{customParameters:s=null,definitionExpression:o=null,geometryDefinition:n=null,maxReconnectionAttempts:a=0,maxReconnectionInterval:l=20,spatialReference:p=this.spatialReference}=e||this.createConnectionParameters(),d=t(this.parsedUrl,this.spatialReference,p,r,o,n,a,l,s??void 0),h=(0,c.vE)([this.on("send-message-to-socket",(e=>d.sendMessageToSocket(e))),this.on("send-message-to-client",(e=>d.sendMessageToClient(e)))]);return d.once("destroy",h.remove),d}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return(0,z.tn)(this,e)}createQuery(){const e=new G.A;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,t){if(!this.fields)return null;let i=null;return this.fields.some((t=>(t.name===e&&(i=t.domain),!!i))),i}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}async save(e){return this._debouncedSaveOperations(X.X.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(X.X.SAVE_AS,t,e)}write(e,t){const i=t?.messages;return this.webSocketUrl?(i?.push(Y(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,t):(i?.push(Y(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){if(!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:t}=await(0,l.A)(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=t}}else{if(!this.timeInfo?.trackIdField)throw new d.A("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const e=this.fields.find((e=>"oid"===e.type))?.name;if(!e)throw new d.A("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=e}if(!this.fields)throw new d.A("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some((e=>e.name===this.objectIdField))||this.fields.push(new O.A({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new d.A("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}),(0,D.yp)(this.renderer,this.fieldsIndex),(0,D.sv)(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),(0,J.L)(this,{origin:"service"})}};(0,s._)([(0,f.MZ)({type:String})],H.prototype,"copyright",void 0),(0,s._)([(0,f.MZ)({readOnly:!0})],H.prototype,"defaultPopupTemplate",null),(0,s._)([(0,f.MZ)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],H.prototype,"definitionExpression",void 0),(0,s._)([(0,f.MZ)({type:String})],H.prototype,"displayField",void 0),(0,s._)([(0,f.MZ)({type:$.A})],H.prototype,"elevationInfo",void 0),(0,s._)([(0,f.MZ)({json:{origins:{"web-map":{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],H.prototype,"featureReduction",null),(0,s._)([(0,f.MZ)(Q.fields)],H.prototype,"fields",void 0),(0,s._)([(0,f.MZ)(Q.fieldsIndex)],H.prototype,"fieldsIndex",void 0),(0,s._)([(0,f.MZ)({type:W.A,json:{name:"layerDefinition.definitionGeometry",write:!0}})],H.prototype,"geometryDefinition",void 0),(0,s._)([(0,f.MZ)({type:b.g.apiValues,json:{read:{reader:b.g.read}}})],H.prototype,"geometryType",void 0),(0,s._)([(0,f.MZ)(P.kF)],H.prototype,"labelsVisible",void 0),(0,s._)([(0,f.MZ)({type:[C.A],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:N.w},write:!0}})],H.prototype,"labelingInfo",void 0),(0,s._)([(0,f.MZ)(P.fV)],H.prototype,"legendEnabled",void 0),(0,s._)([(0,f.MZ)({type:["show","hide"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],H.prototype,"listMode",void 0),(0,s._)([(0,f.MZ)({type:v.jz})],H.prototype,"maxReconnectionAttempts",void 0),(0,s._)([(0,f.MZ)({type:v.jz})],H.prototype,"maxReconnectionInterval",void 0),(0,s._)([(0,f.MZ)(P.hG)],H.prototype,"maxScale",void 0),(0,s._)([(0,f.MZ)(P.hn)],H.prototype,"minScale",void 0),(0,s._)([(0,f.MZ)({type:String})],H.prototype,"objectIdField",void 0),(0,s._)([(0,f.MZ)({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],H.prototype,"operationalLayerType",void 0),(0,s._)([(0,f.MZ)({readOnly:!0})],H.prototype,"outFields",void 0),(0,s._)([(0,f.MZ)(P.M6)],H.prototype,"popupEnabled",void 0),(0,s._)([(0,f.MZ)({type:o.A,json:{name:"popupInfo",write:!0}})],H.prototype,"popupTemplate",void 0),(0,s._)([(0,f.MZ)({type:V})],H.prototype,"purgeOptions",void 0),(0,s._)([(0,f.MZ)({json:{read:!1,write:!1}})],H.prototype,"refreshInterval",void 0),(0,s._)([(0,f.MZ)({types:a.H,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:a.X,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],H.prototype,"renderer",null),(0,s._)([(0,g.w)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),(0,g.w)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],H.prototype,"readRenderer",null),(0,s._)([(0,f.MZ)((()=>{const e=(0,h.o8)(P.PY);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],H.prototype,"screenSizePerspectiveEnabled",void 0),(0,s._)([(0,f.MZ)()],H.prototype,"sourceJSON",void 0),(0,s._)([(0,f.MZ)({type:q.A,json:{origins:{service:{read:{source:"spatialReference"}}}}})],H.prototype,"spatialReference",void 0),(0,s._)([(0,f.MZ)({json:{read:!1}})],H.prototype,"type",void 0),(0,s._)([(0,f.MZ)(P.OZ)],H.prototype,"url",void 0),(0,s._)([(0,f.MZ)({type:Number})],H.prototype,"updateInterval",void 0),(0,s._)([(0,f.MZ)({json:{read:!1,write:!1}})],H.prototype,"useViewTime",void 0),(0,s._)([(0,f.MZ)({type:String})],H.prototype,"webSocketUrl",void 0),H=(0,s._)([(0,w.$)("esri.layers.StreamLayer")],H);const B=H}}]);
//# sourceMappingURL=9870.31cdaf2f.chunk.js.map