"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[9205],{89205:(e,i,a)=>{a.r(i),a.d(i,{classBreaks:()=>s,heatmapStatistics:()=>u,histogram:()=>r,summaryStatistics:()=>o,uniqueValues:()=>l});var n=a(55657),t=a(83114);async function o(e){const{attribute:i,features:a}=e,{normalizationType:o,normalizationField:l,minValue:s,maxValue:r,fieldType:u,outStatisticTypes:m}=i,f=await(0,n.Jc)({field:i.field,valueExpression:i.valueExpression,normalizationType:o,normalizationField:l,normalizationTotal:i.normalizationTotal,viewInfoParams:i.viewInfoParams,timeZone:i.timeZone,fieldInfos:i.fieldInfos},a),d=(0,t.Vb)({normalizationType:o,normalizationField:l,minValue:s,maxValue:r}),c={value:.5,fieldType:u},p="esriFieldTypeString"===u?(0,t.z9)({values:f,supportsNullCount:d,percentileParams:c,outStatisticTypes:m}):(0,t.G_)({values:f,minValue:s,maxValue:r,useSampleStdDev:!o,supportsNullCount:d,percentileParams:c,outStatisticTypes:m});return(0,t.oZ)(p,m,"esriFieldTypeDate"===u)}async function l(e){const{attribute:i,features:a}=e,o=await(0,n.Jc)({field:i.field,field2:i.field2,field3:i.field3,fieldDelimiter:i.fieldDelimiter,valueExpression:i.valueExpression,viewInfoParams:i.viewInfoParams,timeZone:i.timeZone,fieldInfos:i.fieldInfos},a,!1),l=(0,t.b3)(o);return(0,t.lv)(l,i.domains,i.returnAllCodedValues,i.fieldDelimiter)}async function s(e){const{attribute:i,features:a}=e,{field:o,normalizationType:l,normalizationField:s,normalizationTotal:r,classificationMethod:u}=i,m=await(0,n.Jc)({field:o,valueExpression:i.valueExpression,normalizationType:l,normalizationField:s,normalizationTotal:r,viewInfoParams:i.viewInfoParams,timeZone:i.timeZone,fieldInfos:i.fieldInfos},a),f=(0,t.Rw)(m,{field:o,normalizationType:l,normalizationField:s,normalizationTotal:r,classificationMethod:u,standardDeviationInterval:i.standardDeviationInterval,numClasses:i.numClasses,minValue:i.minValue,maxValue:i.maxValue});return(0,t.jM)(f,u)}async function r(e){const{attribute:i,features:a}=e,{field:o,normalizationType:l,normalizationField:s,normalizationTotal:r,classificationMethod:u}=i,m=await(0,n.Jc)({field:o,valueExpression:i.valueExpression,normalizationType:l,normalizationField:s,normalizationTotal:r,viewInfoParams:i.viewInfoParams,timeZone:i.timeZone,fieldInfos:i.fieldInfos},a);return(0,t.$y)(m,{field:o,normalizationType:l,normalizationField:s,normalizationTotal:r,classificationMethod:u,standardDeviationInterval:i.standardDeviationInterval,numBins:i.numBins,minValue:i.minValue,maxValue:i.maxValue})}async function u(e){const{attribute:i,features:a}=e,{field:t,radius:o,transform:l,spatialReference:s}=i,r=i.size??[0,0],u=(0,n.$r)(a??[],l,s,r);return(0,n.gV)(u,o??void 0,t,r[0],r[1])}},55657:(e,i,a)=>{a.d(i,{$r:()=>y,Jc:()=>h,gV:()=>z,rb:()=>I});a(77844),a(55678);var n=a(3409),t=a(23902),o=a(34614),l=a(44405),s=a(38609),r=a(42552),u=a(72884),m=a(34587),f=a(83114),d=a(43046),c=a(65433);let p=null;const v=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function y(e,i,a,n){const t=(0,s.d9)(a)?(0,s.Vp)(a):null,o=t?Math.round((t.valid[1]-t.valid[0])/i.scale[0]):null;return e.map((e=>{const a=new c.A(e.geometry);return(0,l.Gy)(i,a,a),e.geometry=t?function(e,i,a){return e.x<0?e.x+=i:e.x>a&&(e.x-=i),e}(a,o??0,n[0]):a,e}))}function z(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,a=arguments.length>2?arguments[2]:void 0,t=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;const l=new Float64Array(t*o);i=Math.round((0,n.Lz)(i));let s=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;const m=(0,u.YW)(a);for(const{geometry:n,attributes:f}of e){const{x:e,y:a}=n,d=Math.max(0,e-i),c=Math.max(0,a-i),p=Math.min(o,a+i),v=Math.min(t,e+i),y=+m(f);for(let n=c;n<p;n++)for(let o=d;o<v;o++){const m=n*t+o,f=(0,u.hv)(o-e,n-a,i)*y,d=l[m]+=f;s=Math.min(s,d),r=Math.max(r,d)}}return{min:s,max:r}}function I(e){const i=v.exec(e);if(!i)return null;const{hh:a,mm:n,ss:o,ms:l}=i.groups;return Number(a)*t.vf.hours+Number(n)*t.vf.minutes+Number(o)*t.vf.seconds+Number(l||0)}async function h(e,i){let a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(!i)return[];const{field:n,field2:t,field3:l,fieldDelimiter:s,fieldInfos:u,timeZone:c}=e,v=n&&u?.find((e=>e.name.toLowerCase()===n.toLowerCase())),y=!!v&&(0,r.OH)(v),z=!!v&&(0,m.fs)(v),h=e.valueExpression,T=e.normalizationType,w=e.normalizationField,x=e.normalizationTotal,V=[],g=e.viewInfoParams;let b=null,F=null;if(h){if(!p){const{arcadeUtils:e}=await(0,d.lw)();p=e}p.hasGeometryOperations(h)&&await p.enableGeometryOperations(),b=p.createFunction(h),F=g?p.getViewInfo({viewingMode:g.viewingMode,scale:g.scale,spatialReference:new o.A(g.spatialReference)}):null}const M=e.fieldInfos,E=i[0]&&"declaredClass"in i[0]&&"esri.Graphic"===i[0].declaredClass||!M?null:{fields:M};return i.forEach((e=>{const i=e.attributes;let o;if(h){const i=E?{...e,layer:E}:e,a=p.createExecContext(i,F,c);o=p.executeFunction(b,a)}else i&&(o=i[n],t?(o=`${(0,f.gJ)(o)}${s}${(0,f.gJ)(i[t])}`,l&&(o=`${o}${s}${(0,f.gJ)(i[l])}`)):"string"==typeof o&&a&&(z?o=o?new Date(o).getTime():null:y&&(o=o?I(o):null)));if(T&&"number"==typeof o&&isFinite(o)){const e=i&&parseFloat(i[w]);o=(0,f.zS)(o,T,e,x)}V.push(o)})),V}}}]);
//# sourceMappingURL=9205.69d327d6.chunk.js.map