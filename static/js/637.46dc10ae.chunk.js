"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[637],{637:(e,t,a)=>{a.r(t),a.d(t,{execute:()=>r});var s=a(55678);function r(e,t){let a=t.responseType;a?"array-buffer"!==a&&"blob"!==a&&"json"!==a&&"native"!==a&&"native-request-init"!==a&&"text"!==a&&(a="text"):a="json",t.responseType=a;const r=t.signal;return delete t.signal,globalThis.invokeStaticMessage("request",{url:e,options:t},{signal:r}).then((async n=>{let i,o,l,u,c;if(n.data)if(n.data instanceof ArrayBuffer){if(!("json"!==a&&"text"!==a&&"blob"!==a||(i=new Blob([n.data]),"json"!==a&&"text"!==a||(u=await i.text(),"json"!==a)))){try{o=JSON.parse(u||null)}catch(p){const a={...p,url:e,requestOptions:t};throw new s.A("request:server",p.message,a)}if(o.error){const a={...o.error,url:e,requestOptions:t};throw new s.A("request:server",o.error.message,a)}}}else"native"===a&&(n.data.signal=r,l=await fetch(n.data.url,n.data),n.httpStatus=l.status);switch(a){case"blob":c=i;break;case"json":c=o;break;case"native":c=l;break;case"text":c=u;break;default:c=n.data}return{data:c,httpStatus:n.httpStatus,requestOptions:t,ssl:n.ssl,url:e}}))}}}]);
//# sourceMappingURL=637.46dc10ae.chunk.js.map