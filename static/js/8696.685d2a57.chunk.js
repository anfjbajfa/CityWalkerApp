"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[8696],{28696:(e,t,s)=>{s.r(t),s.d(t,{default:()=>y});var r=s(70273),n=s(55678),i=s(82439),a=s(73896),o=s(67519),c=(s(27052),s(11434),s(11215),s(55292)),h=s(81099),u=s(19677),l=s(39306),d=s(5849);const p=e=>{let t=class extends e{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}disconnect(){this._doDisconnect()}connect(){this._doConnect()}clear(){this._doClear()}constructor(){super(...arguments),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return(this._isUserPaused||this.suspended)&&"connected"===this._streamConnectionStatus?"paused":this._streamConnectionStatus}_onSuspendedChange(e){e?this._doPause():this._isUserPaused||this._doResume()}};return(0,r._)([(0,o.MZ)()],t.prototype,"_isUserPaused",void 0),(0,r._)([(0,o.MZ)({readOnly:!0})],t.prototype,"connectionStatus",null),(0,r._)([(0,o.MZ)({type:d.A})],t.prototype,"filter",void 0),t=(0,r._)([(0,c.$)("esri.views.layers.StreamLayerView")],t),t};let _=class extends(p(u.default)){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null}initialize(){this.addHandles([(0,a.wB)((()=>this.layer.customParameters),(async e=>{(await this.getWorker()).streamMessenger.updateCustomParameters(e)})),this.layer.on("send-message-to-socket",(async e=>{(await this.getWorker()).streamMessenger.sendMessageToSocket(e)})),this.layer.on("send-message-to-client",(async e=>{(await this.getWorker()).streamMessenger.sendMessageToClient(e),this._isUserPaused&&"type"in e&&"clear"===e.type&&this.incrementSourceRefreshVersion()})),(0,a.wB)((()=>this.layer.purgeOptions),(()=>this._update())),(0,a.wB)((()=>this.suspended),this._onSuspendedChange.bind(this))],"constructor"),this._doResume()}destroy(){this._doPause()}get connectionError(){return this.pipelineErrorString?new n.A("stream-controller",this.pipelineErrorString):null}on(e,t){if(Array.isArray(e))return(0,i.vE)(e.map((e=>this.on(e,t))));const s=["data-received","message-received"].includes(e);s&&this.getWorker().then((t=>t.streamMessenger.enableEvent(e,!0)));const r=super.on(e,t),n=this;return(0,i.hA)((()=>{r.remove(),s&&(n._workerProxy.closed||n.hasEventListener(e)||n.getWorker().then((t=>t.streamMessenger.enableEvent(e,!1))))}))}async queryLatestObservations(e,t){if(!(this.layer.timeInfo?.endField||this.layer.timeInfo?.startField||this.layer.timeInfo?.trackIdField))throw new n.A("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");const s=await this.getWorker();return(0,l.E)(s.features.executeQueryForLatestObservations(this._cleanUpQuery(e),t).then((e=>{const t=h.A.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer})),t})),new h.A({features:[]}))}detach(){super.detach(),this.pipelineConnectionStatus="disconnected"}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){null!=this._refreshInterval&&(clearInterval(this._refreshInterval),this._refreshInterval=null)}_doResume(){this._refreshInterval=setInterval((()=>this.incrementSourceRefreshVersion()),this.layer.updateInterval)}_doDisconnect(){this.getWorker().then((e=>e.streamMessenger.disconnect())),this._doPause()}_doConnect(){this.getWorker().then((e=>e.streamMessenger.connect())),this.resume()}_doClear(){this.getWorker().then((e=>e.streamMessenger.clear())),null==this._refreshInterval&&this.incrementSourceRefreshVersion()}_createClientOptions(){const e=super._createClientOptions(),t=this;return{...e,get container(){return t.featureContainer},setProperty:e=>{this.set(e.propertyName,e.value)}}}};(0,r._)([(0,o.MZ)()],_.prototype,"pipelineConnectionStatus",void 0),(0,r._)([(0,o.MZ)()],_.prototype,"pipelineErrorString",void 0),(0,r._)([(0,o.MZ)({readOnly:!0})],_.prototype,"connectionError",null),(0,r._)([(0,o.MZ)({readOnly:!0})],_.prototype,"_streamConnectionStatus",null),_=(0,r._)([(0,c.$)("esri.views.2d.layers.StreamLayerView2D")],_);const y=_}}]);
//# sourceMappingURL=8696.685d2a57.chunk.js.map