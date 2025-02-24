/*! For license information please see 1329.a387404d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[1329],{31329:(e,t,i)=>{i.r(t),i.d(t,{CalciteAccordionItem:()=>D,defineCustomElement:()=>O});var c=i(64843),n=i(78385),o=i(36537),a=i(71016),r=i(85610),l=i(83601),s=i(3020);const d="actions-start",h="actions-end",p="actions-end",m="actions-start",v="content",u="description",b="expand-icon",f="header",g="header-container",x="header-content",y="header-text",k="heading",w="icon",I="icon--end",E="icon--start",A="section",C="section-toggle",P=(0,c.w$)(class extends c.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalAccordionItemSelect=(0,c.lh)(this,"calciteInternalAccordionItemSelect",6),this.calciteInternalAccordionItemClose=(0,c.lh)(this,"calciteInternalAccordionItemClose",6),this.storeHeaderEl=e=>{this.headerEl=e},this.itemHeaderClickHandler=()=>this.emitRequestedItem(),this.expanded=!1,this.heading=void 0,this.description=void 0,this.iconStart=void 0,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconPosition=void 0,this.iconType=void 0,this.accordionParent=void 0,this.scale=void 0}connectedCallback(){(0,n.c)(this)}componentWillLoad(){(0,l.s)(this)}componentDidLoad(){(0,l.a)(this)}disconnectedCallback(){(0,n.d)(this)}renderActionsStart(){const{el:e}=this;return(0,o.g)(e,d)?(0,c.h)("div",{class:m},(0,c.h)("slot",{name:d})):null}renderActionsEnd(){const{el:e}=this;return(0,o.g)(e,h)?(0,c.h)("div",{class:p},(0,c.h)("slot",{name:h})):null}render(){const{iconFlipRtl:e}=this,t=(0,o.a)(this.el),i=this.iconStart?(0,c.h)("calcite-icon",{class:{[w]:!0,[E]:!0},flipRtl:"both"===e||"start"===e,icon:this.iconStart,key:"icon-start",scale:(0,r.g)(this.scale)}):null,n=this.iconEnd?(0,c.h)("calcite-icon",{class:{[I]:!0,[w]:!0},flipRtl:"both"===e||"end"===e,icon:this.iconEnd,key:"icon-end",scale:(0,r.g)(this.scale)}):null,{description:l}=this;return(0,c.h)(c.xr,{key:"73a74d61e41199c57868bd5375ba1b08f8e19dbc"},(0,c.h)("div",{key:"ce9e0a74ea1eb93b7e2f00e95e6a092dcf99726b",class:{[`icon-position--${this.iconPosition}`]:!0,[`icon-type--${this.iconType}`]:!0}},(0,c.h)("div",{key:"18af6a636b01a816363edf73bd05a486ac0cc2b2",class:{[f]:!0,[a.C.rtl]:"rtl"===t}},this.renderActionsStart(),(0,c.h)("div",{key:"8a82a3acec9576d7e936714d1bee0bd2a1cc4ab1","aria-controls":A,"aria-expanded":(0,o.t)(this.expanded),class:x,id:C,onClick:this.itemHeaderClickHandler,ref:this.storeHeaderEl,role:"button",tabindex:"0"},(0,c.h)("div",{key:"b9b223e8e0b0f60d9f6f9c5a9bda1458def7ae01",class:g},i,(0,c.h)("div",{key:"ccdba89b98942b7163d09a0f78175c374aba5875",class:y},(0,c.h)("span",{key:"c91bcaf36ba60ac2a8ef06e3356a15d1f3a7e78f",class:k},this.heading),l?(0,c.h)("span",{class:u},l):null),n),(0,c.h)("calcite-icon",{key:"aebf05069b1ceae376fb67074aad773c4f403c16",class:b,icon:"chevron"===this.iconType?"chevronDown":"caret"===this.iconType?"caretDown":this.expanded?"minus":"plus",scale:(0,r.g)(this.scale)})),this.renderActionsEnd()),(0,c.h)("section",{key:"7371b06f1ec99aab9351113663eda976540ae7b0","aria-labelledby":C,class:v,id:A},(0,c.h)("slot",{key:"69b851d2989876bece534e499a039e55eaabb1ec"}))))}keyDownHandler(e){if(e.target===this.el)switch(e.key){case" ":case"Enter":this.emitRequestedItem(),e.preventDefault()}}updateActiveItemOnChange(e){const[t]=e.composedPath(),i=(0,o.c)(this.el,"calcite-accordion");t===i&&(this.determineActiveItem(i.selectionMode,e.detail.requestedAccordionItem),e.stopPropagation())}accordionItemSyncHandler(e){const[t]=e.composedPath(),i=this.el;if(i.parentElement===t)return;const c=(0,o.c)(i,"calcite-accordion");t===c&&(this.iconPosition=c.iconPosition,this.iconType=c.iconType,this.scale=c.scale,e.stopPropagation())}async setFocus(){await(0,l.c)(this),this.headerEl.focus()}determineActiveItem(e,t){switch(e){case"multiple":this.el===t&&(this.expanded=!this.expanded);break;case"single":this.expanded=this.el===t&&!this.expanded;break;case"single-persist":this.expanded=this.el===t}}emitRequestedItem(){this.calciteInternalAccordionItemSelect.emit({requestedAccordionItem:this.el})}get el(){return this}static get style(){return".icon-position--end,.icon-position--start{--calcite-internal-accordion-item-icon-rotation:calc(90deg * -1);--calcite-internal-accordion-item-active-icon-rotation:0deg;--calcite-internal-accordion-item-icon-rotation-rtl:90deg;--calcite-internal-accordion-item-active-icon-rotation-rtl:0deg}:host{position:relative;display:flex;flex-direction:column;text-decoration-line:none;color:var(--calcite-accordion-item-text-color, var(--calcite-accordion-text-color, var(--calcite-color-text-3)));background-color:var(--calcite-accordion-item-background-color);border-width:0}:host .header{background-color:var(--calcite-accordion-item-header-background-color)}.icon-position--start{--calcite-internal-accordion-item-flex-direction:row-reverse;--calcite-internal-accordion-item-icon-spacing-start:0;--calcite-internal-accordion-item-icon-spacing-end:var(--calcite-internal-accordion-icon-margin)}.icon-position--end{--calcite-internal-accordion-item-flex-direction:row;--calcite-internal-accordion-item-icon-spacing-start:var(--calcite-internal-accordion-icon-margin);--calcite-internal-accordion-item-icon-spacing-end:0}.icon-position--end:not(.icon-type--plus-minus){--calcite-internal-accordion-item-icon-rotation:0deg;--calcite-internal-accordion-item-active-icon-rotation:180deg;--calcite-internal-accordion-item-icon-rotation-rtl:0deg;--calcite-internal-accordion-item-active-icon-rotation-rtl:calc(180deg * -1)}.content,.header{border-block-end-width:var(--calcite-border-width-sm);border-block-end-style:solid;border-color:var(--calcite-accordion-item-border-color, var(--calcite-accordion-border-color, var(--calcite-color-border-2)))}.header-content,.content{padding:var(--calcite-accordion-item-content-space, var(--calcite-internal-accordion-item-padding, var(--calcite-internal-accordion-item-spacing-unit, 0.5rem 0.75rem)))}.header{display:flex;align-items:stretch}.header *{display:inline-flex;align-items:center;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}.header-content{flex-grow:1;cursor:pointer;outline-color:transparent;flex-direction:var(--calcite-internal-accordion-item-flex-direction);color:var(--calcite-accordion-item-heading-text-color, var(--calcite-accordion-text-color, inherit))}.header-content:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.header-content:focus,.header-content:hover,.header-content:active{color:var(--calcite-accordion-item-heading-text-color, var(--calcite-accordion-text-color-hover, var(--calcite-color-text-2)))}.header-content:focus .heading,.header-content:hover .heading,.header-content:active .heading{color:var(--calcite-accordion-item-heading-text-color, var(--calcite-accordion-text-color-pressed, var(--calcite-color-text-1)))}.header-container{inline-size:100%}.header-text{margin-block:0px;flex-grow:1;flex-direction:column;padding-block:0px;text-align:initial;margin-inline-end:auto}.heading,.description{display:flex;inline-size:100%}.heading{font-weight:var(--calcite-font-weight-medium)}.actions-start,.actions-end{display:flex;align-items:center}.icon{display:flex;align-items:center;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:var(--calcite-internal-accordion-item-icon-spacing-start);margin-inline-start:var(--calcite-internal-accordion-item-icon-spacing-end)}.icon--start{color:var(--calcite-accordion-item-start-icon-color, var(--calcite-accordion-item-icon-color, currentColor));margin-inline-end:var(--calcite-internal-accordion-icon-margin)}.icon--end{color:var(--calcite-accordion-item-end-icon-color, var(--calcite-accordion-item-icon-color, currentColor));margin-inline-end:var(--calcite-internal-accordion-icon-margin);margin-inline-start:var(--calcite-internal-accordion-icon-margin)}.expand-icon{color:var(--calcite-accordion-item-expand-icon-color, var(--calcite-accordion-item-text-color, var(--calcite-accordion-text-color, var(--calcite-color-text-3))));margin-inline-start:var(--calcite-internal-accordion-item-icon-spacing-start);margin-inline-end:var(--calcite-internal-accordion-item-icon-spacing-end);transform:rotate(var(--calcite-internal-accordion-item-icon-rotation))}.calcite--rtl .expand-icon{transform:rotate(var(--calcite-internal-accordion-item-icon-rotation-rtl))}.description{margin-block-start:0.25rem}.content{display:none;padding-block-start:0px;text-align:initial}:host(:not(:focus):not(:hover):not([expanded])) .heading{color:var(--calcite-accordion-item-heading-text-color, var(--calcite-accordion-item-text-color-hover, var(--calcite-color-text-2)))}:host([expanded]){color:var(--calcite-accordion-item-text-color, var(--calcite-accordion-text-color, var(--calcite-accordion-text-color-pressed, var(--calcite-color-text-1))))}:host([expanded]) .header{border-block-end-color:transparent}:host([expanded]) .expand-icon{color:var(--calcite-accordion-item-expand-icon-color, var(--calcite-accordion-item-text-color, var(--calcite-accordion-text-color, var(--calcite-accordion-item-text-color-hover, var(--calcite-color-text-2)))));transform:rotate(var(--calcite-internal-accordion-item-active-icon-rotation))}:host([expanded]) .calcite--rtl .expand-icon{transform:rotate(var(--calcite-internal-accordion-item-active-icon-rotation-rtl))}:host([expanded]) .description{color:var(--calcite-accordion-item-text-color, var(--calcite-accordion-text-color, var(--calcite-accordion-item-text-color-hover, var(--calcite-color-text-2))))}:host([expanded]) .content{display:block}@media (forced-colors: active){:host([expanded]) .header{border-block-end:none}:host([expanded]) .heading{font-weight:bolder}.header-content:hover .heading,.header-content:focus .heading{text-decoration:underline}}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-accordion-item",{expanded:[1540],heading:[1],description:[1],iconStart:[513,"icon-start"],iconEnd:[513,"icon-end"],iconFlipRtl:[513,"icon-flip-rtl"],iconPosition:[1,"icon-position"],iconType:[1,"icon-type"],accordionParent:[16],scale:[1],setFocus:[64]},[[0,"keydown","keyDownHandler"],[16,"calciteInternalAccordionChange","updateActiveItemOnChange"],[4,"calciteInternalAccordionItemsSync","accordionItemSyncHandler"]]]);function z(){if("undefined"===typeof customElements)return;["calcite-accordion-item","calcite-icon"].forEach((e=>{switch(e){case"calcite-accordion-item":customElements.get(e)||customElements.define(e,P);break;case"calcite-icon":customElements.get(e)||(0,s.d)()}}))}z();const D=P,O=z},85610:(e,t,i)=>{function c(e){return"l"===e?"m":"s"}async function n(e){await(function(e){return"function"===typeof e.componentOnReady}(e)?e.componentOnReady():new Promise((e=>requestAnimationFrame((()=>e())))))}i.d(t,{c:()=>n,g:()=>c})},78385:(e,t,i)=>{i.d(t,{c:()=>r,d:()=>l});var c=i(64843),n=i(62414);let o;const a={childList:!0};function r(e){o||(o=(0,n.c)("mutation",s)),o.observe(e.el,a)}function l(e){o.unobserve(e.el)}function s(e){e.forEach((e=>{let{target:t}=e;(0,c.$x)(t)}))}},3020:(e,t,i)=>{i.d(t,{I:()=>m,d:()=>v});var c=i(64843),n=i(36537),o=i(62414),a=i(44753);const r="flip-rtl",l={},s={},d={s:16,m:24,l:32};function h(e){let{icon:t,scale:i}=e;const c=d[i],n=function(e){const t=!isNaN(Number(e.charAt(0))),i=e.split("-");if(i.length>0){const t=/[a-z]/i;e=i.map(((e,i)=>e.replace(t,(function(e,t){return 0===i&&0===t?e:e.toUpperCase()})))).join("")}return t?`i${e}`:e}(t),o="F"===n.charAt(n.length-1);return`${o?n.substring(0,n.length-1):n}${c}${o?"F":""}`}function p(e){return l[e]}const m=(0,c.w$)(class extends c.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.visible||this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){this.intersectionObserver?.disconnect(),this.intersectionObserver=null}render(){const{el:e,flipRtl:t,pathData:i,scale:o,textLabel:a}=this,l=(0,n.a)(e),s=d[o],h=!!a,p=[].concat(i||"");return(0,c.h)(c.xr,{key:"724265acdc6fb528bf7b25d7ec445c73a63f4c8e","aria-hidden":(0,n.t)(!h),"aria-label":h?a:null,role:h?"img":null},(0,c.h)("svg",{key:"864ee2d80bebd282543ba5d94c57f84b48a6204d","aria-hidden":"true",class:{[r]:"rtl"===l&&t,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${s} ${s}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},p.map((e=>"string"===typeof e?(0,c.h)("path",{d:e}):(0,c.h)("path",{d:e.d,opacity:"opacity"in e?e.opacity:1})))))}async loadIconPathData(){const{icon:e,scale:t,visible:i}=this;if(!(0,a.i)()||!e||!i)return;const n={icon:e,scale:t},o=p(h(n))||await async function(e){const t=h(e),i=p(t);if(i)return i;s[t]||(s[t]=fetch((0,c.OX)(`./assets/icon/${t}.json`)).then((e=>e.json())).catch((()=>(console.error(`"${t}" is not a valid calcite-ui-icon name`),""))));const n=await s[t];return l[t]=n,n}(n);e===this.icon&&(this.pathData=o)}waitUntilVisible(e){this.intersectionObserver=(0,o.c)("intersection",(t=>{t.forEach((t=>{t.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,e())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):e()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return":host{display:inline-flex;color:var(--calcite-icon-color, var(--calcite-ui-icon-color, currentColor))}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]},void 0,{icon:["loadIconPathData"],scale:["loadIconPathData"]}]);function v(){if("undefined"===typeof customElements)return;["calcite-icon"].forEach((e=>{if("calcite-icon"===e)customElements.get(e)||customElements.define(e,m)}))}v()},83601:(e,t,i)=>{i.d(t,{a:()=>l,b:()=>s,c:()=>d,s:()=>r});var c=i(64843),n=i(44753);const o=new WeakMap,a=new WeakMap;function r(e){a.set(e,new Promise((t=>o.set(e,t))))}function l(e){o.get(e)()}function s(e){return a.get(e)}async function d(e){if(await s(e),(0,n.i)())return(0,c.$x)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},62414:(e,t,i)=>{i.d(t,{c:()=>n});var c=i(44753);function n(e,t,i){if(!(0,c.i)())return;const n=function(e){class t extends window.MutationObserver{constructor(e){super(e),this.observedEntry=[],this.callback=e}observe(e,t){return this.observedEntry.push({target:e,options:t}),super.observe(e,t)}unobserve(e){const t=this.observedEntry.filter((t=>t.target!==e));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),t.forEach((e=>this.observe(e.target,e.options)))}}return"intersection"===e?window.IntersectionObserver:"mutation"===e?t:window.ResizeObserver}(e);return new n(t,i)}}}]);
//# sourceMappingURL=1329.a387404d.chunk.js.map