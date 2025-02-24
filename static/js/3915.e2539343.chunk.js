/*! For license information please see 3915.e2539343.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[3915],{51650:(t,e,n)=>{function r(t){return"Enter"===t||" "===t}n.d(e,{i:()=>r,n:()=>i});const i=["0","1","2","3","4","5","6","7","8","9"]},3915:(t,e,n)=>{n.d(e,{B:()=>l,a:()=>v,b:()=>x,c:()=>D,d:()=>A,e:()=>C,f:()=>O,g:()=>y,i:()=>c,n:()=>B,p:()=>u,s:()=>b});var r=n(36537),i=n(51650),s=n(62414);const a=new RegExp("\\.(0+)?$"),o=new RegExp("0+$");class l{constructor(t){if(t instanceof l)return t;const[e,n]=function(t){const e=t.split(/[eE]/);if(1===e.length)return t;const n=+t;if(Number.isSafeInteger(n))return`${n}`;const r="-"===t.charAt(0),i=+e[1],s=e[0].split("."),o=(r?s[0].substring(1):s[0])||"",l=s[1]||"",c=(t,e)=>{const n=Math.abs(e)-t.length,r=n>0?`${"0".repeat(n)}${t}`:t;return`${r.slice(0,e)}.${r.slice(e)}`},u=(t,e)=>{const n=e>t.length?`${t}${"0".repeat(e-t.length)}`:t;return`${n.slice(0,e)}.${n.slice(e)}`},m=i>0?`${o}${u(l,i)}`:`${c(o,i)}${l}`;return`${r?"-":""}${"."===m.charAt(0)?"0":""}${m.replace(a,"").replace(g,"")}`}(t).split(".").concat("");this.value=BigInt(e+n.padEnd(l.DECIMALS,"0").slice(0,l.DECIMALS))+BigInt(l.ROUNDED&&n[l.DECIMALS]>="5"),this.isNegative="-"===t.charAt(0)}getIntegersAndDecimals(){const t=this.value.toString().replace("-","").padStart(l.DECIMALS+1,"0");return{integers:t.slice(0,-l.DECIMALS),decimals:t.slice(-l.DECIMALS).replace(o,"")}}toString(){const{integers:t,decimals:e}=this.getIntegersAndDecimals();return`${this.isNegative?"-":""}${t}${e.length?"."+e:""}`}formatToParts(t){const{integers:e,decimals:n}=this.getIntegersAndDecimals(),r=t.numberFormatter.formatToParts(BigInt(e));return this.isNegative&&r.unshift({type:"minusSign",value:t.minusSign}),n.length&&(r.push({type:"decimal",value:t.decimal}),n.split("").forEach((t=>r.push({type:"fraction",value:t})))),r}format(t){const{integers:e,decimals:n}=this.getIntegersAndDecimals();return`${`${this.isNegative?t.minusSign:""}${t.numberFormatter.format(BigInt(e))}`}${n.length?`${t.decimal}${n.split("").map((e=>t.numberFormatter.format(Number(e)))).join("")}`:""}`}add(t){return l.fromBigInt(this.value+new l(t).value)}subtract(t){return l.fromBigInt(this.value-new l(t).value)}multiply(t){return l._divRound(this.value*new l(t).value,l.SHIFT)}divide(t){return l._divRound(this.value*l.SHIFT,new l(t).value)}}function c(t){return!(!t||isNaN(Number(t)))}function u(t){return t&&(e=t,i.n.some((t=>e.includes(t))))?f(t,(t=>{let e=!1;const n=t.split("").filter(((t,n)=>t.match(/\./g)&&!e?(e=!0,!0):!(!t.match(/-/g)||0!==n)||i.n.includes(t))).join("");return c(n)?new l(n).toString():""})):"";var e}l.DECIMALS=100,l.ROUNDED=!0,l.SHIFT=BigInt("1"+"0".repeat(l.DECIMALS)),l._divRound=(t,e)=>l.fromBigInt(t/e+(l.ROUNDED?t*BigInt(2)/e%BigInt(2):BigInt(0))),l.fromBigInt=t=>Object.assign(Object.create(l.prototype),{value:t,isNegative:t<BigInt(0)});const g=/^([-0])0+(?=\d)/,m=/(?!^\.)\.$/,h=/(?!^-)-/g,p=/^-\b0\b\.?0*$/,d=/0*$/,b=t=>f(t,(t=>{const e=t.replace(h,"").replace(m,"").replace(g,"$1");return c(e)?p.test(e)?e:function(t){const e=t.split(".")[1],n=new l(t).toString(),[r,i]=n.split(".");return e&&i!==e?`${r}.${e}`:n}(e):t}));function f(t,e){if(!t)return t;const n=t.toLowerCase().indexOf("e")+1;return n?t.replace(/[eE]*$/g,"").substring(0,n).concat(t.slice(n).replace(/[eE]/g,"")).split(/[eE]/).map(((t,n)=>e(1===n?t.replace(/\./g,""):t))).join("e").replace(/^e/,"1e"):e(t)}function v(t,e,n){const r=e.split(".")[1];if(r){const i=r.match(d)[0];if(i&&n.delocalize(t).length!==e.length&&-1===r.indexOf("e")){const e=n.decimal;return(t=t.includes(e)?t:`${t}${e}`).padEnd(t.length+i.length,n.localize("0"))}}return t}const $="en",_=["ar","bg","bs","ca","cs","da","de","el",$,"es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","no","nl","pl","pt-BR","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],w=["ar","bg","bs","ca","cs","da","de","de-AT","de-CH","el",$,"en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","no","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],I=["arab","arabext","latn"],E=t=>I.includes(t),S=(new Intl.NumberFormat).resolvedOptions().numberingSystem,F="arab"!==S&&E(S)?S:"latn",O=t=>E(t)?t:F;function y(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cldr";const n="cldr"===e?w:_;return t?n.includes(t)?t:"nb"===(t=t.toLowerCase())?"no":"t9n"===e&&"pt"===t?"pt-BR":(t.includes("-")&&(t=t.replace(/(\w+)-(\w+)/,((t,e,n)=>`${e}-${n.toUpperCase()}`)),n.includes(t)||(t=t.split("-")[0])),"zh"===t?"zh-CN":n.includes(t)?t:(console.warn(`Translations for the "${t}" locale are not available and will fall back to the default, English (en).`),$)):$}function C(t){switch(t){case"it-CH":return"de-CH";case"bs":return"bs-Cyrl";default:return t}}const N=new Set;function D(t){!function(t){t.effectiveLocale=function(t){return t.el.lang||(0,r.c)(t.el,"[lang]")?.lang||document.documentElement.lang||$}(t)}(t),0===N.size&&k?.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],subtree:!0}),N.add(t)}function A(t){N.delete(t),0===N.size&&k.disconnect()}const k=(0,s.c)("mutation",(t=>{t.forEach((t=>{const e=t.target;N.forEach((t=>{if(!(0,r.b)(e,t.el))return;const n=(0,r.c)(t.el,"[lang]");if(!n)return void(t.effectiveLocale=$);const i=n.lang;t.effectiveLocale=n.hasAttribute("lang")&&""===i?$:i}))}))}));const B=new class{constructor(){this.delocalize=t=>this._numberFormatOptions?f(t,(t=>t.replace(new RegExp(`[${this._minusSign}]`,"g"),"-").replace(new RegExp(`[${this._group}]`,"g"),"").replace(new RegExp(`[${this._decimal}]`,"g"),".").replace(new RegExp(`[${this._digits.join("")}]`,"g"),this._getDigitIndex))):t,this.localize=t=>this._numberFormatOptions?f(t,(t=>c(t.trim())?new l(t.trim()).format(this).replace(new RegExp(`[${this._actualGroup}]`,"g"),this._group):t)):t}get group(){return this._group}get decimal(){return this._decimal}get minusSign(){return this._minusSign}get digits(){return this._digits}get numberFormatter(){return this._numberFormatter}get numberFormatOptions(){return this._numberFormatOptions}set numberFormatOptions(t){if(t.locale=y(t?.locale),t.numberingSystem=O(t?.numberingSystem),!this._numberFormatOptions&&t.locale===$&&t.numberingSystem===F&&2===Object.keys(t).length||JSON.stringify(this._numberFormatOptions)===JSON.stringify(t))return;this._numberFormatOptions=t,this._numberFormatter=new Intl.NumberFormat(this._numberFormatOptions.locale,this._numberFormatOptions),this._digits=[...new Intl.NumberFormat(this._numberFormatOptions.locale,{useGrouping:!1,numberingSystem:this._numberFormatOptions.numberingSystem}).format(9876543210)].reverse();const e=new Map(this._digits.map(((t,e)=>[t,e]))),n=new Intl.NumberFormat(this._numberFormatOptions.locale,{numberingSystem:this._numberFormatOptions.numberingSystem}).formatToParts(-12345678.9);this._actualGroup=n.find((t=>"group"===t.type)).value,this._group=0===this._actualGroup.trim().length||" "==this._actualGroup?"\xa0":this._actualGroup,this._decimal=n.find((t=>"decimal"===t.type)).value,this._minusSign=n.find((t=>"minusSign"===t.type)).value,this._getDigitIndex=t=>e.get(t)}};let R,z;function x(t,e){t=y(t),R||(R=new Map),z!==t&&(R.clear(),z=t);const n=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.entries(t).sort(((t,e)=>{let[n]=t,[r]=e;return n.localeCompare(r)})).map((t=>`${t[0]}-${t[1]}`)).flat().join(":")}(e),r=R.get(n);if(r)return r;const i=new Intl.DateTimeFormat(t,e);return R.set(n,i),i}},62414:(t,e,n)=>{n.d(e,{c:()=>i});var r=n(44753);function i(t,e,n){if(!(0,r.i)())return;const i=function(t){class e extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,e){return this.observedEntry.push({target:t,options:e}),super.observe(t,e)}unobserve(t){const e=this.observedEntry.filter((e=>e.target!==t));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),e.forEach((t=>this.observe(t.target,t.options)))}}return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}(t);return new i(e,n)}}}]);
//# sourceMappingURL=3915.e2539343.chunk.js.map