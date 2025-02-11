"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[4506],{51344:(e,t,n)=>{function s(e){return null!=a(e)||null!=o(e)}function i(e){return l.test(e)}function r(e){return a(e)??o(e)}function o(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let n=!0;if(c&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,s=0;for(;!t&&s<=e.length;)t=!u.test(e[s]),s++;n=!t}}return n}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function a(e){const t=l.exec(e);if(!t?.groups)return null;const n=t.groups,s=+n.year,i=+n.month-1,r=+n.day,o=+(n.hours??"0"),a=+(n.minutes??"0"),u=+(n.seconds??"0");if(o>23)return null;if(a>59)return null;if(u>59)return null;const c=n.ms??"0",d=c?+c.padEnd(3,"0").slice(0,3):0;let h;if(n.isUTC||!n.offsetSign)h=Date.UTC(s,i,r,o,a,u,d);else{const e=+n.offsetHours,t=+n.offsetMinutes;h=6e4*("+"===n.offsetSign?-1:1)*(60*e+t)+Date.UTC(s,i,r,o,a,u,d)}return Number.isNaN(h)?null:h}n.d(t,{Br:()=>i,Cq:()=>s,_U:()=>r});const l=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;const u=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,c=!Number.isNaN(new Date("technology 10").getTime())},70373:(e,t,n)=>{n.d(t,{E:()=>F,w:()=>o});var s=n(18690),i=(n(81806),n(30015)),r=n(61196);class o{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,t=arguments.length>1?arguments[1]:void 0;this._compareMinX=d,this._compareMinY=h,this._toBBox=e=>e,this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this._toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),I.prune(),b.prune(),B.prune(),w.prune()}all(e){a(this._data,e)}search(e,t){let n=this._data;const s=this._toBBox;if(_(e,n))for(I.clear();n;){for(let i=0,r=n.children.length;i<r;i++){const r=n.children[i],o=n.leaf?s(r):r;_(e,o)&&(n.leaf?t(r):y(e,o)?a(r,t):I.push(r))}n=I.pop()}}collides(e){let t=this._data;const n=this._toBBox;if(!_(e,t))return!1;for(I.clear();t;){for(let s=0,i=t.children.length;s<i;s++){const i=t.children[s],r=t.leaf?n(i):i;if(_(e,r)){if(t.leaf||y(e,r))return!0;I.push(i)}}t=I.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,n=e.length;t<n;t++)this.insert(e[t]);return this}let t=this._build(e.slice(),0,e.length-1,0);if(this._data.children.length)if(this._data.height===t.height)this._splitRoot(this._data,t);else{if(this._data.height<t.height){const e=this._data;this._data=t,t=e}this._insert(t,this._data.height-t.height-1,!0)}else this._data=t;return this}insert(e){return e&&this._insert(e,this._data.height-1),this}clear(){return this._data=new S([]),this}remove(e){if(!e)return this;let t,n=this._data,i=null,r=0,o=!1;const a=this._toBBox(e);for(B.clear(),w.clear();n||B.length>0;){if(n||(n=B.pop(),i=B.data[B.length-1],r=w.pop()??0,o=!0),n.leaf&&(t=(0,s.qh)(n.children,e,n.children.length,n.indexHint),-1!==t))return n.children.splice(t,1),B.push(n),this._condense(B),this;o||n.leaf||!y(n,a)?i?(r++,n=i.children[r],o=!1):n=null:(B.push(n),w.push(r),r=0,i=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(e){return this._data=e,this}_build(e,t,n,s){const i=n-t+1;let r=this._maxEntries;if(i<=r){const s=new S(e.slice(t,n+1));return l(s,this._toBBox),s}s||(s=Math.ceil(Math.log(i)/Math.log(r)),r=Math.ceil(i/r**(s-1)));const o=new N([]);o.height=s;const a=Math.ceil(i/r),u=a*Math.ceil(Math.sqrt(r));x(e,t,n,u,this._compareMinX);for(let l=t;l<=n;l+=u){const t=Math.min(l+u-1,n);x(e,l,t,a,this._compareMinY);for(let n=l;n<=t;n+=a){const i=Math.min(n+a-1,t);o.children.push(this._build(e,n,i,s-1))}}return l(o,this._toBBox),o}_insert(e,t,n){const s=this._toBBox,i=n?e:s(e);B.clear();const r=function(e,t,n,s){for(;s.push(t),!0!==t.leaf&&s.length-1!==n;){let n,s=1/0,i=1/0;for(let r=0,o=t.children.length;r<o;r++){const o=t.children[r],a=p(o),l=m(e,o)-a;l<i?(i=l,s=a<s?a:s,n=o):l===i&&a<s&&(s=a,n=o)}t=n||t.children[0]}return t}(i,this._data,t,B);for(r.children.push(e),c(r,i);t>=0&&B.data[t].children.length>this._maxEntries;)this._split(B,t),t--;!function(e,t,n){for(let s=n;s>=0;s--)c(t.data[s],e)}(i,B,t)}_split(e,t){const n=e.data[t],s=n.children.length,i=this._minEntries;this._chooseSplitAxis(n,i,s);const r=this._chooseSplitIndex(n,i,s);if(!r)return;const o=n.children.splice(r,n.children.length-r),a=n.leaf?new S(o):new N(o);a.height=n.height,l(n,this._toBBox),l(a,this._toBBox),t?e.data[t-1].children.push(a):this._splitRoot(n,a)}_splitRoot(e,t){this._data=new N([e,t]),this._data.height=e.height+1,l(this._data,this._toBBox)}_chooseSplitIndex(e,t,n){let s,i,r;s=i=1/0;for(let o=t;o<=n-t;o++){const t=u(e,0,o,this._toBBox),a=u(e,o,n,this._toBBox),l=g(t,a),c=p(t)+p(a);l<s?(s=l,r=o,i=c<i?c:i):l===s&&c<i&&(i=c,r=o)}return r}_chooseSplitAxis(e,t,n){const s=e.leaf?this._compareMinX:d,i=e.leaf?this._compareMinY:h;this._allDistMargin(e,t,n,s)<this._allDistMargin(e,t,n,i)&&e.children.sort(s)}_allDistMargin(e,t,n,s){e.children.sort(s);const i=this._toBBox,r=u(e,0,t,i),o=u(e,n-t,n,i);let a=f(r)+f(o);for(let l=t;l<n-t;l++){const t=e.children[l];c(r,e.leaf?i(t):t),a+=f(r)}for(let l=n-t-1;l>=t;l--){const t=e.children[l];c(o,e.leaf?i(t):t),a+=f(o)}return a}_condense(e){for(let t=e.length-1;t>=0;t--){const n=e.data[t];if(0===n.children.length)if(t>0){const i=e.data[t-1],r=i.children;r.splice((0,s.qh)(r,n,r.length,i.indexHint),1)}else this.clear();else l(n,this._toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this._compareMinX=new Function("a","b",t.join(e[0])),this._compareMinY=new Function("a","b",t.join(e[1])),this._toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function a(e,t){let n=e;for(b.clear();n;){if(!0===n.leaf)for(const e of n.children)t(e);else b.pushArray(n.children);n=b.pop()??null}}function l(e,t){u(e,0,e.children.length,t,e)}function u(e,t,n,s,i){i||(i=new S([])),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(let r,o=t;o<n;o++)r=e.children[o],c(i,e.leaf?s(r):r);return i}function c(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function d(e,t){return e.minX-t.minX}function h(e,t){return e.minY-t.minY}function p(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function f(e){return e.maxX-e.minX+(e.maxY-e.minY)}function m(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function g(e,t){const n=Math.max(e.minX,t.minX),s=Math.max(e.minY,t.minY),i=Math.min(e.maxX,t.maxX),r=Math.min(e.maxY,t.maxY);return Math.max(0,i-n)*Math.max(0,r-s)}function y(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function _(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function x(e,t,n,s,i){const o=[t,n];for(;o.length;){const t=o.pop(),n=o.pop();if(t-n<=s)continue;const a=n+Math.ceil((t-n)/s/2)*s;(0,r.q)(e,a,n,t,i),o.push(n,a,a,t)}}const I=new i.A,b=new i.A,B=new i.A,w=new i.A({deallocator:void 0});class F{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class v extends F{constructor(){super(...arguments),this.height=1,this.indexHint=new s.vW}}class S extends v{constructor(e){super(),this.children=e,this.leaf=!0}}class N extends v{constructor(e){super(),this.children=e,this.leaf=!1}}},20481:(e,t,n)=>{n.d(t,{B:()=>u,GP:()=>a,ZY:()=>o,qg:()=>c});var s=n(88685),i=n(38042);const r={ar:[".",","],bg:[",","\xa0"],bs:[",","."],ca:[",","."],cs:[",","\xa0"],da:[",","."],de:[",","."],"de-ch":[".","\u2019"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[",","\xa0"],fi:[",","\xa0"],fr:[",","\u202f"],"fr-ch":[",","\u202f"],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[",","\xa0"],id:[",","."],it:[",","."],"it-ch":[".","\u2019"],ja:[".",","],ko:[".",","],lt:[",","\xa0"],lv:[",","\xa0"],mk:[",","."],nb:[",","\xa0"],nl:[",","."],pl:[",","\xa0"],pt:[",","."],"pt-pt":[",","\xa0"],ro:[",","."],ru:[",","\xa0"],sk:[",","\xa0"],sl:[",","."],sr:[",","."],sv:[",","\xa0"],th:[".",","],tr:[",","."],uk:[",","\xa0"],vi:[",","."],zh:[".",","]};function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,i.JK)(),t=(e=e.toLowerCase())in r;if(!t){const n=e.split("-");n.length>1&&n[0]in r&&(e=n[0],t=!0),t||(e="en")}const[n,s,o="#,##0.###"]=r[e];return{decimal:n,group:s,pattern:o}}function a(e,t){const n=o((t={...t}).locale);t.customs=n;const s=t.pattern||n.pattern;return isNaN(e)||Math.abs(e)===1/0?null:function(e,t,n){const s=(n=n||{}).customs.group,i=n.customs.decimal,r=t.split(";"),o=r[0];if((t=r[e<0?1:0]||"-"+o).includes("%"))e*=100;else if(t.includes("\u2030"))e*=1e3;else{if(t.includes("\xa4"))throw new Error("currency notation not supported");if(t.includes("E"))throw new Error("exponential notation not supported")}const a=l,u=o.match(a);if(!u)throw new Error("unable to find a number expression in pattern: "+t);return!1===n.fractional&&(n.places=0),t.replace(a,function(e,t,n){!0===(n=n||{}).places&&(n.places=0),n.places===1/0&&(n.places=6);const s=t.split("."),i="string"==typeof n.places&&n.places.indexOf(",");let r=n.places;i?r=n.places.slice(i+1):+r>=0||(r=(s[1]||[]).length),n.round<0||(e=Number(e.toFixed(Number(r))));const o=String(Math.abs(e)).split("."),a=o[1]||"";if(s[1]||n.places){i&&(n.places=n.places.slice(0,Math.max(0,i)));const e=void 0!==n.places?n.places:s[1]&&s[1].lastIndexOf("0")+1;+e>a.length&&(o[1]=a.padEnd(Number(e),"0")),+r<a.length&&(o[1]=a.slice(0,Math.max(0,Number(r))))}else o[1]&&o.pop();const l=s[0].replace(",","");let u=l.indexOf("0");-1!==u&&(u=l.length-u,u>o[0].length&&(o[0]=o[0].padStart(u,"0")),l.includes("#")||(o[0]=o[0].slice(-u)));let c,d,h=s[0].lastIndexOf(",");if(-1!==h){c=s[0].length-h-1;const e=s[0].slice(0,h);h=e.lastIndexOf(","),-1!==h&&(d=e.length-h-1)}const p=[];for(let f=o[0];f;){const e=f.length-c;p.push(e>0?f.slice(Math.max(0,e)):f),f=e>0?f.slice(0,e):"",d&&(c=d,d=void 0)}return o[0]=p.reverse().join(n.group||","),o.join(n.decimal||".")}(e,u[0],{decimal:i,group:s,places:n.places,round:n.round}))}(e,s,t)}const l=/[#0,]*[#0](?:\.0*#*)?/;function u(e){const t=o((e=e||{}).locale),n=e.pattern||t.pattern,i=t.group,r=t.decimal;let a=1;if(n.includes("%"))a/=100;else if(n.includes("\u2030"))a/=1e3;else if(n.includes("\xa4"))throw new Error("currency notation not supported");const u=n.split(";");1===u.length&&u.push("-"+u[0]);const c=h(u,(t=>(t="(?:"+(0,s.Cj)(t,".")+")").replace(l,(t=>{const n={signed:!1,separator:e.strict?i:[i,""],fractional:e.fractional,decimal:r,exponent:!1},s=t.split(".");let o=e.places;1===s.length&&1!==a&&(s[1]="###"),1===s.length||0===o?n.fractional=!1:(void 0===o&&(o=e.pattern?s[1].lastIndexOf("0")+1:1/0),o&&null==e.fractional&&(n.fractional=!0),!e.places&&+o<s[1].length&&(o+=","+s[1].length),n.places=o);const l=s[0].split(",");return l.length>1&&(n.groupSize=l.pop().length,l.length>1&&(n.groupSize2=l.pop().length)),"("+function(e){"places"in(e=e||{})||(e.places=1/0),"string"!=typeof e.decimal&&(e.decimal="."),"fractional"in e&&!String(e.places).startsWith("0")||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);const t=d(e),n=h(e.fractional,(t=>{let n="";return t&&0!==e.places&&(n="\\"+e.decimal,e.places===1/0?n="(?:"+n+"\\d+)?":n+="\\d{"+e.places+"}"),n}),!0);let s=t+n;return n&&(s="(?:(?:"+s+")|(?:"+n+"))"),s+h(e.exponent,(t=>t?"([eE]"+d({signed:e.eSigned})+")":""))}(n)+")"}))),!0);return{regexp:c.replaceAll(/[\xa0 ]/g,"[\\s\\xa0]"),group:i,decimal:r,factor:a}}function c(e,t){const n=u(t),s=new RegExp("^"+n.regexp+"$").exec(e);if(!s)return NaN;let i=s[1];if(!s[1]){if(!s[2])return NaN;i=s[2],n.factor*=-1}return i=i.replaceAll(new RegExp("["+n.group+"\\s\\xa0]","g"),"").replace(n.decimal,"."),Number(i)*n.factor}function d(e){return"signed"in(e=e||{})||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="",h(e.signed,(e=>e?"[-+]":""),!0)+h(e.separator,(t=>{if(!t)return"(?:\\d+)";" "===(t=(0,s.Cj)(t))?t="\\s":"\xa0"===t&&(t="\\s\\xa0");const n=e.groupSize,i=e.groupSize2;if(i){const e="(?:0|[1-9]\\d{0,"+(i-1)+"}(?:["+t+"]\\d{"+i+"})*["+t+"]\\d{"+n+"})";return n-i>0?"(?:"+e+"|(?:0|[1-9]\\d{0,"+(n-1)+"}))":e}return"(?:0|[1-9]\\d{0,"+(n-1)+"}(?:["+t+"]\\d{"+n+"})*)"}),!0)}const h=(e,t,n)=>{if(!Array.isArray(e))return t(e);const s=[];for(let i=0;i<e.length;i++)s.push(t(e[i]));return p(s.join("|"),Boolean(n))},p=(e,t)=>"("+(t?"?:":"")+e+")"},33328:(e,t,n)=>{n.d(t,{F:()=>l});var s=n(81806),i=n(70373),r=n(2413);const o={minX:0,minY:0,maxX:0,maxY:0};function a(e,t,n){(function(e){o.minX=e[0],o.minY=e[1],o.maxX=e[2],o.maxY=e[3]})(t),e.search(o,n)}class l{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new i.w(9,(0,s.A)("esri-csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach(((n,s)=>{e[t++]=s})),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter((e=>this._idByBounds.has(e)))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const e=(0,r.Ie)();for(const t of this._boundsById.values())t&&(e[0]=Math.min(t[0],e[0]),e[1]=Math.min(t[1],e[1]),e[2]=Math.max(t[2],e[2]),e[3]=Math.max(t[3],e[3]));return e}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),a(this._index,e,(e=>t(this._idByBounds.get(e))))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},72547:(e,t,n)=>{n.d(t,{A:()=>f});var s=n(18690),i=n(50076),r=n(54099),o=n(76460),a=n(42294),l=n(2413),u=n(98618),c=n(33328),d=n(55167),h=n(33376);const p=(0,a.vt)();class f{constructor(e){this.geometryInfo=e,this._boundsStore=new c.F,this._featuresById=new Map,this.events=new r.A,this.featureAdapter=h.T}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{null!=t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(e){if(null==this.fullBounds)return null;const[t,n,s,i]=this.fullBounds;return{xmin:t,ymin:n,xmax:s,ymax:i,spatialReference:(0,d.ag)(e)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}upsertMany(e){const t=e.map((e=>this._upsert(e)));return this._emitChanged(),t.filter(s.Ru)}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t){for(const n of e){const e=this._boundsStore.get(n.objectId);e&&t((0,a.Jt)(p,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void o.A.getLogger("esri.layers.graphics.data.FeatureStore").error(new i.A("featurestore:invalid-feature","feature id is missing",{feature:e}));const n=this._featuresById.get(t);let s;if(n?(e.displayId=n.displayId,s=this._boundsStore.get(t),this._boundsStore.delete(t)):null!=this.onFeatureAdd&&this.onFeatureAdd(e),!e.geometry?.coords?.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);s=(0,u.jQ)(null!=s?s:(0,l.vt)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),null!=s&&this._boundsStore.set(t,s),this._featuresById.set(t,e)}_upsert(e){const t=e?.objectId;if(null==t)return o.A.getLogger("esri.layers.graphics.data.FeatureStore").error(new i.A("featurestore:invalid-feature","feature id is missing",{feature:e})),null;const n=this._featuresById.get(t);if(!n)return this._add(e),e;const{geometry:s,attributes:r}=e;for(const i in r)n.attributes[i]=r[i];return s&&(n.geometry=s,this._boundsStore.set(t,(0,u.jQ)((0,l.vt)(),s,this.geometryInfo.hasZ,this.geometryInfo.hasM)??null)),n}_remove(e){null!=this.onFeatureRemove&&this.onFeatureRemove(e);const t=e.objectId;return this._boundsStore.delete(t),this._featuresById.delete(t),e}}},33376:(e,t,n)=>{n.d(t,{T:()=>o});var s=n(90321),i=n(20176),r=n(1484);const o={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new i.Om(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>(null==e.centroid&&(e.centroid=(0,s.Q)(new r.A,e.geometry,t.hasZ,t.hasM)),e.centroid)}},64506:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$});n(35238);var s=n(3825),i=n(98773),r=n(51344),o=n(50076),a=n(76460),l=n(50346),u=n(90534),c=n(9624),d=n(28778),h=n(80963),p=n(45417),f=n(20176),m=n(1484),g=n(72547),y=n(24586),_=n(38276),x=n(20481),I=n(53430);function b(e,t,n){t=(0,I.rS)(t)?.toLowerCase(),n=(0,I.rS)(n)?.toLowerCase();const s=e.map((e=>e.toLowerCase())),i=t?e[s.indexOf(t)]:null,r=n?e[s.indexOf(n)]:null;return{longitudeFieldName:i||e[s.indexOf(w.find((e=>s.includes(e))))],latitudeFieldName:r||e[s.indexOf(B.find((e=>s.includes(e))))]}}const B=["lat","lat83","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point_y"],w=["lon","lng","lng83","long","long83","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point_x"],F=/^\s*"([\S\s]*)"\s*$/,v=/""/g,S=[","," ",";","|","\t"];function*N(e,t,n){let s=0;for(;s<=e.length;){const i=e.indexOf(t,s),r=e.slice(s,i>-1?i:void 0);s+=r.length+t.length,n&&!r.trim()||(yield r)}}function A(e){const t=e.includes("\r\n")?"\r\n":"\n";return N(e,t,!0)}function E(e,t){return N(e,t,!1)}function M(e,t,n){e=e.trim(),t=t?.trim();const s=[],i=Array.from(new Set([n?.delimiter,...S])).filter((e=>null!=e));for(const o of i){const n=O(e,o).length,i=O(t,o).length??n;n>1&&s.push({weight:Math.min(n,i),delimiter:o})}const r=s.sort(((e,t)=>{let{weight:n}=e,{weight:s}=t;return s-n})).map((e=>{let{delimiter:t}=e;return t}));for(const o of r){const t=b(C(e,o).names,n?.longitudeField,n?.latitudeField);if(t.longitudeFieldName&&t.latitudeFieldName)return{delimiter:o,locationInfo:t}}return{delimiter:r[0],locationInfo:null}}function T(e,t,n){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:()=>Object.create(null);return function*(){const i=A(e);i.next();let r="",o="",a=0,l=s(),u=0;e:for(const e of i){const i=E(e,n);for(const e of i)if(r+=o+e,o="",a+=Y(e),a%2==0){if(a>0){const e=F.exec(r);if(!e){l=s(),u=0,r="",a=0;continue e}l[t[u]]=e[1].replaceAll(v,'"'),u++}else l[t[u]]=r,u++;r="",a=0}else o=n;0===a?(yield l,l=s(),u=0):o="\n"}}()}function C(e,t){const n=O(e,t).filter((e=>null!=e)),s=n.map((e=>(0,I.rS)(e)));for(let i=s.length-1;i>=0;i--)s[i]||(s.splice(i,1),n.splice(i,1));return{names:s,aliases:n}}function O(e,t){if(!e?.length)return[];const n=[];let s="",i="",r=0;const o=E(e,t);for(const a of o)if(s+=i+a,i="",r+=Y(a),r%2==0){if(r>0){const e=F.exec(s);e&&n.push(e[1].replaceAll(v,'"'))}else n.push(s);s="",r=0}else i=t;return n}function Y(e){let t=0,n=0;for(n=e.indexOf('"',n);n>=0;)t++,n=e.indexOf('"',n+1);return t}function X(e,t,n,s,i){const r=[],o=T(e,n,t),a=[];for(const l of o){if(10===a.length)break;a.push(l)}for(let l=0;l<n.length;l++){const e=n[l],t=s[l];if(e===i.longitudeFieldName||e===i.latitudeFieldName)r.push({name:e,type:"esriFieldTypeDouble",alias:t});else{let n;switch(q(a.map((t=>t[e])))){case"integer":n="esriFieldTypeInteger";break;case"double":n="esriFieldTypeDouble";break;case"date":n="esriFieldTypeDate";break;default:n="esriFieldTypeString"}r.push({name:e,type:n,alias:t,length:(0,I._b)(n)})}}return r}function q(e){if(!e.length)return"string";const t=/[^+\-.,0-9]/;return e.map((e=>{if(""!==e){if(!t.test(e)){let t=R(e);if(!isNaN(t))return/[.,]/.test(e)||!Number.isInteger(t)||t>214783647||t<-214783648?"double":"integer";if(e.includes("E")){if(t=Number(e),!Number.isNaN(t))return"double";if(e.includes(",")&&(e=e.replace(",","."),t=Number(e),!Number.isNaN(t)))return"double"}}return(0,r.Cq)(e)?"date":"string"}})).reduce(((e,t)=>void 0===e?t:void 0===t?e:e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0))}const R=function(){const e=(0,x.B)(),t=new RegExp("^"+e.regexp+"$"),n=new RegExp("["+e.group+"\\s\\xa0]","g"),s=e.factor;return i=>{const r=t.exec(i);if(e.factor=s,!r)return NaN;let o=r[1];if(!r[1]){if(!r[2])return NaN;o=r[2],e.factor*=-1}return o=o.replace(n,"").replace(e.decimal,"."),+o*e.factor}}();function D(e){return JSON.parse(JSON.stringify(e))}var j=n(40296),k=n(1900),Q=n(67478),z=n(13312);const L=(0,j.F0)("esriGeometryPoint"),P=["csv"],G=[0,0];class U{constructor(e,t){this.x=e,this.y=t}}class ${constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}async load(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._loadOptions=e;const[n]=await Promise.all([this._fetch(t.signal),this._checkProjection(e?.parsingOptions?.spatialReference)]),s=function(e,t){const n=t.parsingOptions||{},s={delimiter:n.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:n.latitudeField,longitudeFieldName:n.longitudeField}},i=s.layerDefinition={name:(0,u.e7)(t.url,P)||"csv",dateFieldsTimeReference:{timeZoneIANA:Q.n$},drawingInfo:L,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:n.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:n.spatialReference||{wkid:4326}}},r=A(e),a=r.next().value?.trim(),l=r.next().value?.trim();if(!a)throw new o.A("csv-layer:empty-csv","CSV is empty",{csv:e});const{delimiter:c,locationInfo:d}=M(a,l,n);if(!c)throw new o.A("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV",{firstLine:a,secondLine:l,parsingOptions:n});if(!d)throw new o.A("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file",{firstLine:a,secondLine:l,parsingOptions:n});s.locationInfo=d,s.delimiter=c;const{names:h,aliases:p}=C(a,c),f=X(e,s.delimiter,h,p,s.locationInfo);if(n.fields?.length){const e=new k.A(n.fields);for(const t of f){const n=e.get(t.name);n&&Object.assign(t,n)}}if(!f.some((e=>"esriFieldTypeOID"===e.type&&(i.objectIdField=e.name,!0)))){const e={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};i.objectIdField=e.name,f.unshift(e)}i.fields=f;const m=new k.A(i.fields);if(s.locationInfo&&(s.locationInfo.latitudeFieldName=m.get(s.locationInfo.latitudeFieldName).name,s.locationInfo.longitudeFieldName=m.get(s.locationInfo.longitudeFieldName).name),i.timeInfo){const e=i.timeInfo;if(e.startTimeField){const t=m.get(e.startTimeField);t?(e.startTimeField=t.name,t.type="esriFieldTypeDate"):e.startTimeField=null}if(e.endTimeField){const t=m.get(e.endTimeField);t?(e.endTimeField=t.name,t.type="esriFieldTypeDate"):e.endTimeField=null}if(e.trackIdField){const t=m.get(e.trackIdField);e.trackIdField=t?t.name:null}e.startTimeField||e.endTimeField||(i.timeInfo=null)}return s}(n,e);this._locationInfo=s.locationInfo,this._delimiter=s.delimiter,this._queryEngine=this._createQueryEngine(s);const i=await this._createFeatures(n);this._queryEngine.featureStore.addMany(i);const{fullExtent:r,timeExtent:a}=await this._queryEngine.fetchRecomputedExtents();if(s.layerDefinition.extent=r,a){const{start:e,end:t}=a;s.layerDefinition.timeInfo.timeExtent=[e,t]}return s}async applyEdits(){throw new o.A("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){this._loadOptions.customParameters=e,this._snapshotTask?.abort(),this._snapshotTask=(0,i.UT)(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)}),(e=>{this._queryEngine.featureStore.clear(),(0,l.zf)(e)||a.A.getLogger("esri.layers.CSVLayer").error(new o.A("csv-layer:refresh","An error occurred during refresh",{error:e}))})),await this._waitSnapshotComplete();const{fullExtent:t,timeExtent:n}=await this._queryEngine.fetchRecomputedExtents();return{extent:t,timeExtent:n}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:n}=this._loadOptions;if(!t)throw new o.A("csv-layer:invalid-source","url not defined");const i=(0,u.An)(t);return(await(0,s.A)(i.path,{query:{...i.query,...n},responseType:"text",signal:e})).data}_createQueryEngine(e){const{objectIdField:t,fields:n,extent:s,timeInfo:i}=e.layerDefinition,r=new g.A({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new _.d({fieldsIndex:k.A.fromLayerJSON({fields:n,dateFieldsTimeReference:{timeZoneIANA:Q.n$}}),geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:i,objectIdField:t,spatialReference:s.spatialReference||{wkid:4326},featureStore:r})}async _createFeatures(e){const{latitudeFieldName:t,longitudeFieldName:n}=this._locationInfo,{objectIdField:s,fieldsIndex:i,spatialReference:o}=this._queryEngine;let a=[];const l=[],u=i.fields.filter((e=>e.name!==s)).map((e=>e.name));let g=0;const y={};for(const r of i.fields)if("esriFieldTypeOID"!==r.type&&"esriFieldTypeGlobalID"!==r.type){const e=(0,I.lD)(r);void 0!==e&&(y[r.name]=e)}const _=T(e,u,this._delimiter,(0,j.Vx)(y,s));for(const c of _){const e=this._parseCoordinateValue(c[t]),o=this._parseCoordinateValue(c[n]);if(null!=o&&null!=e&&!isNaN(e)&&!isNaN(o)){c[t]=e,c[n]=o;for(const e in c)if(e!==t&&e!==n)if(i.isDateField(e))c[e]=(0,r._U)(c[e]);else if(i.isNumericField(e)){const t=R(c[e]);isNaN(t)?c[e]=null:c[e]=t}else null!=c[e]&&(c[e]=D(c[e]));c[s]=g,g++,a.push(new U(o,e)),l.push(c)}}if(!(0,h.aI)({wkid:4326},o))if((0,h.K8)(o))for(const r of a)[r.x,r.y]=(0,p.je)(r.x,r.y,G);else a=(0,c.projectMany)(d.g,a,z.A.WGS84,o,null,null);const x=[];for(let r=0;r<a.length;r++){const{x:e,y:t}=a[r],n=l[r];n[s]=r+1,x.push(new f.Om(new m.A([],[e,t]),n,null,n[s]))}return x}_parseCoordinateValue(e){if(null==e||""===e)return null;let t=R(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}async _checkProjection(e){try{await(0,y.Nk)(h.KK,e)}catch{throw new o.A("csv-layer:projection-not-supported","Projection not supported")}}}},40296:(e,t,n)=>{n.d(t,{F0:()=>l,Vx:()=>d,e2:()=>p,f:()=>f});var s=n(81806),i=n(53084),r=n(8298),o=n(16981),a=n(44460);function l(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?a.Cb:"esriGeometryPolyline"===e?a.yM:a.WR}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let c=1;function d(e,t){if((0,s.A)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let n=`this${h(t)} = null;`;for(const t in e)n+=`this${h(t)} = ${JSON.stringify(e[t])};`;const s=new Function(`\n      return class AttributesClass$${c++} {\n        constructor() {\n          ${n};\n        }\n      }\n    `)();return()=>new s}catch(n){return()=>({[t]:null,...e})}}function h(e){return u.test(e)?`.${e}`:`["${e}"]`}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,i.o8)(e)}}]}function f(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryBins:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:r.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:o.$,editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},16981:(e,t,n)=>{n.d(t,{$:()=>s,P:()=>i});const s={supportsDate:!1,supportsFixedInterval:!1,supportsAutoInterval:!1,supportsFixedBoundaries:!1,supportedStatistics:void 0},i={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsAsyncApplyEdits:!1,zDefault:void 0},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryBins:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:s,query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}}}]);
//# sourceMappingURL=4506.471a64c8.chunk.js.map