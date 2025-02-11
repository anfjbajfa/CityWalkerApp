/*! For license information please see 6577.5c765113.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[6577],{40076:(t,e,i)=>{i.d(e,{V:()=>n});var s=i(95146);const a="validation-container",n=t=>{let{scale:e,status:i,id:n,icon:o,message:c}=t;return(0,s.h)("div",{class:a},(0,s.h)("calcite-input-message",{"aria-live":"polite",icon:o,id:n,scale:e,status:i},c))}},66577:(t,e,i)=>{i.r(e),i.d(e,{CalciteRadioButtonGroup:()=>m,defineCustomElement:()=>g});var s=i(95146),a=i(6676),n=i(39879),o=i(76527),c=i(40076),l=i(67294),r=i(16345);const d="item-wrapper",h="radioButtonGroupValidationMessage",u=(0,s.w$)(class extends s.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteRadioButtonGroupChange=(0,s.lh)(this,"calciteRadioButtonGroupChange",6),this.mutationObserver=(0,a.c)("mutation",(()=>this.passPropsToRadioButtons())),this.passPropsToRadioButtons=()=>{this.radioButtons=Array.from(this.el.querySelectorAll("calcite-radio-button")),this.selectedItem=Array.from(this.radioButtons).find((t=>t.checked))||null,this.radioButtons.length>0&&this.radioButtons.forEach((t=>{t.disabled=this.disabled||t.disabled,t.hidden=this.el.hidden,t.name=this.name,t.required=this.required,t.scale=this.scale}))},this.disabled=!1,this.layout="horizontal",this.name=void 0,this.required=!1,this.selectedItem=null,this.scale="m",this.status="idle",this.validationMessage=void 0,this.validationIcon=void 0,this.radioButtons=[]}handleHiddenChange(){this.passPropsToRadioButtons()}onDisabledChange(){this.passPropsToRadioButtons()}onLayoutChange(){this.passPropsToRadioButtons()}onScaleChange(){this.passPropsToRadioButtons()}connectedCallback(){this.passPropsToRadioButtons(),this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0})}componentWillLoad(){(0,o.s)(this)}componentDidLoad(){(0,o.a)(this)}disconnectedCallback(){this.mutationObserver?.disconnect()}getFocusableRadioButton(){return this.radioButtons.find((t=>!t.disabled))??null}async setFocus(){return await(0,o.c)(this),this.selectedItem&&!this.selectedItem.disabled?this.selectedItem.setFocus():this.radioButtons.length>0?this.getFocusableRadioButton()?.setFocus():void 0}radioButtonChangeHandler(t){this.selectedItem=t.target,this.calciteRadioButtonGroupChange.emit()}render(){return(0,s.h)(s.xr,{key:"487c8e698a30bffc79b233b81faad9bab7ea17e5",role:"radiogroup"},(0,s.h)("div",{key:"63cf9169798fefa62551fa0a975735ed2afd5a66","aria-errormessage":h,"aria-invalid":(0,n.t)("invalid"===this.status),class:d},(0,s.h)("slot",{key:"a7274291fc93583ebdee167c3c1e2f71f7fa255c"})),this.validationMessage&&"invalid"===this.status?(0,s.h)(c.V,{icon:this.validationIcon,id:h,message:this.validationMessage,scale:this.scale,status:this.status}):null)}get el(){return this}static get watchers(){return{hidden:["handleHiddenChange"],disabled:["onDisabledChange"],layout:["onLayoutChange"],scale:["onScaleChange"]}}static get style(){return":host{display:flex;flex-direction:column}:host>.item-wrapper{display:flex;max-inline-size:100vw}:host([layout=horizontal])>.item-wrapper{flex-direction:row;flex-wrap:wrap}:host([layout=horizontal][scale=s])>.item-wrapper{column-gap:1rem}:host([layout=horizontal][scale=m])>.item-wrapper{column-gap:1.25rem}:host([layout=horizontal][scale=l])>.item-wrapper{column-gap:1.5rem}:host([layout=vertical])>.item-wrapper{flex-direction:column;inline-size:-moz-fit-content;inline-size:fit-content}:host([scale=s]) calcite-input-message{--calcite-input-message-spacing-value:calc(var(--calcite-spacing-xxs) * -1)}:host([scale=m]) calcite-input-message{--calcite-input-message-spacing-value:calc(var(--calcite-spacing-sm) * -1)}:host([scale=l]) calcite-input-message{--calcite-input-message-spacing-value:calc(var(--calcite-spacing-md) * -1)}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-radio-button-group",{disabled:[516],layout:[513],name:[513],required:[516],selectedItem:[1040],scale:[513],status:[513],validationMessage:[1,"validation-message"],validationIcon:[520,"validation-icon"],radioButtons:[32],setFocus:[64]},[[0,"calciteRadioButtonChange","radioButtonChangeHandler"]],{hidden:["handleHiddenChange"],disabled:["onDisabledChange"],layout:["onLayoutChange"],scale:["onScaleChange"]}]);function p(){if("undefined"===typeof customElements)return;["calcite-radio-button-group","calcite-icon","calcite-input-message"].forEach((t=>{switch(t){case"calcite-radio-button-group":customElements.get(t)||customElements.define(t,u);break;case"calcite-icon":customElements.get(t)||(0,l.d)();break;case"calcite-input-message":customElements.get(t)||(0,r.d)()}}))}p();const m=u,g=p},67294:(t,e,i)=>{i.d(e,{I:()=>p,d:()=>m});var s=i(95146),a=i(39879),n=i(6676),o=i(32811);const c="flip-rtl",l={},r={},d={s:16,m:24,l:32};function h(t){let{icon:e,scale:i}=t;const s=d[i],a=function(t){const e=!isNaN(Number(t.charAt(0))),i=t.split("-");if(i.length>0){const e=/[a-z]/i;t=i.map(((t,i)=>t.replace(e,(function(t,e){return 0===i&&0===e?t:t.toUpperCase()})))).join("")}return e?`i${t}`:t}(e),n="F"===a.charAt(a.length-1);return`${n?a.substring(0,a.length-1):a}${s}${n?"F":""}`}function u(t){return l[t]}const p=(0,s.w$)(class extends s.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.visible||this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){this.intersectionObserver?.disconnect(),this.intersectionObserver=null}render(){const{el:t,flipRtl:e,pathData:i,scale:n,textLabel:o}=this,l=(0,a.a)(t),r=d[n],h=!!o,u=[].concat(i||"");return(0,s.h)(s.xr,{key:"724265acdc6fb528bf7b25d7ec445c73a63f4c8e","aria-hidden":(0,a.t)(!h),"aria-label":h?o:null,role:h?"img":null},(0,s.h)("svg",{key:"864ee2d80bebd282543ba5d94c57f84b48a6204d","aria-hidden":"true",class:{[c]:"rtl"===l&&e,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${r} ${r}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},u.map((t=>"string"===typeof t?(0,s.h)("path",{d:t}):(0,s.h)("path",{d:t.d,opacity:"opacity"in t?t.opacity:1})))))}async loadIconPathData(){const{icon:t,scale:e,visible:i}=this;if(!(0,o.i)()||!t||!i)return;const a={icon:t,scale:e},n=u(h(a))||await async function(t){const e=h(t),i=u(e);if(i)return i;r[e]||(r[e]=fetch((0,s.OX)(`./assets/icon/${e}.json`)).then((t=>t.json())).catch((()=>(console.error(`"${e}" is not a valid calcite-ui-icon name`),""))));const a=await r[e];return l[e]=a,a}(a);t===this.icon&&(this.pathData=n)}waitUntilVisible(t){this.intersectionObserver=(0,n.c)("intersection",(e=>{e.forEach((e=>{e.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):t()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return":host{display:inline-flex;color:var(--calcite-icon-color, var(--calcite-ui-icon-color, currentColor))}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]},void 0,{icon:["loadIconPathData"],scale:["loadIconPathData"]}]);function m(){if("undefined"===typeof customElements)return;["calcite-icon"].forEach((t=>{if("calcite-icon"===t)customElements.get(t)||customElements.define(t,p)}))}m()},16345:(t,e,i)=>{i.d(e,{I:()=>c,d:()=>l});var s=i(95146),a=i(39879),n=i(67294);const o={valid:"check-circle",invalid:"exclamation-mark-triangle",idle:"information"},c=(0,s.w$)(class extends s.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=void 0,this.iconFlipRtl=!1,this.scale="m",this.status="idle"}handleIconEl(){this.requestedIcon=(0,a.o)(o,this.icon,this.status)}connectedCallback(){this.requestedIcon=(0,a.o)(o,this.icon,this.status)}render(){const t=this.el.hidden;return(0,s.h)(s.xr,{key:"c7d1b37721cec28dee1020b81ff66dee7fc8bc44","calcite-hydrated-hidden":t},this.renderIcon(this.requestedIcon),(0,s.h)("slot",{key:"7147d81e906765c154b4a61e31706a72c1ef3ae0"}))}renderIcon(t){if(t)return(0,s.h)("calcite-icon",{class:"calcite-input-message-icon",flipRtl:this.iconFlipRtl,icon:t,scale:"s"})}get el(){return this}static get watchers(){return{status:["handleIconEl"],icon:["handleIconEl"]}}static get style(){return":host{box-sizing:border-box;display:flex;block-size:auto;inline-size:100%;align-items:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);opacity:1;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;--calcite-input-message-spacing-value:0.25rem;margin-block-start:var(--calcite-input-message-spacing-value)}.calcite-input-message-icon{pointer-events:none;display:inline-flex;flex-shrink:0;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-inline-end:0.5rem}:host([status=invalid]) .calcite-input-message-icon{color:var(--calcite-color-status-danger)}:host([status=warning]) .calcite-input-message-icon{color:var(--calcite-color-status-warning)}:host([status=valid]) .calcite-input-message-icon{color:var(--calcite-color-status-success)}:host([status=idle]) .calcite-input-message-icon{color:var(--calcite-color-brand)}:host([scale=s]){font-size:var(--calcite-font-size--3);line-height:0.75rem}:host([scale=m]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=l]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-input-message",{icon:[520],iconFlipRtl:[516,"icon-flip-rtl"],scale:[513],status:[513]},void 0,{status:["handleIconEl"],icon:["handleIconEl"]}]);function l(){if("undefined"===typeof customElements)return;["calcite-input-message","calcite-icon"].forEach((t=>{switch(t){case"calcite-input-message":customElements.get(t)||customElements.define(t,c);break;case"calcite-icon":customElements.get(t)||(0,n.d)()}}))}l()},76527:(t,e,i)=>{i.d(e,{a:()=>l,b:()=>r,c:()=>d,s:()=>c});var s=i(95146),a=i(32811);const n=new WeakMap,o=new WeakMap;function c(t){o.set(t,new Promise((e=>n.set(t,e))))}function l(t){n.get(t)()}function r(t){return o.get(t)}async function d(t){if(await r(t),(0,a.i)())return(0,s.$x)(t),new Promise((t=>requestAnimationFrame((()=>t()))))}},6676:(t,e,i)=>{i.d(e,{c:()=>a});var s=i(32811);function a(t,e,i){if(!(0,s.i)())return;const a=function(t){class e extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,e){return this.observedEntry.push({target:t,options:e}),super.observe(t,e)}unobserve(t){const e=this.observedEntry.filter((e=>e.target!==t));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),e.forEach((t=>this.observe(t.target,t.options)))}}return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}(t);return new a(e,i)}}}]);
//# sourceMappingURL=6577.5c765113.chunk.js.map