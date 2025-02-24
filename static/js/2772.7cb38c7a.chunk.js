/*! For license information please see 2772.7cb38c7a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[2772],{72772:(e,t,i)=>{i.r(t),i.d(t,{CalciteSwitch:()=>k,defineCustomElement:()=>m});var o=i(64843),c=i(36537),a=i(58867),n=i(27885),s=i(51650),r=i(41879),l=i(83601);const d="container",h="track",b="handle",p=(0,o.w$)(class extends o.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteSwitchChange=(0,o.lh)(this,"calciteSwitchChange",6),this.keyDownHandler=e=>{!this.disabled&&(0,s.i)(e.key)&&(this.toggle(),e.preventDefault())},this.clickHandler=()=>{this.disabled||this.toggle()},this.setSwitchEl=e=>{this.switchEl=e},this.disabled=!1,this.form=void 0,this.label=void 0,this.name=void 0,this.scale="m",this.checked=!1,this.value=void 0}async setFocus(){await(0,l.c)(this),(0,c.e)(this.switchEl)}syncHiddenFormInput(e){e.type="checkbox"}onLabelClick(){this.disabled||(this.toggle(),this.setFocus())}toggle(){this.checked=!this.checked,this.calciteSwitchChange.emit()}connectedCallback(){(0,r.c)(this),(0,a.c)(this)}componentWillLoad(){(0,l.s)(this)}componentDidLoad(){(0,l.a)(this)}disconnectedCallback(){(0,r.d)(this),(0,a.d)(this)}componentDidRender(){(0,n.u)(this)}render(){return(0,o.h)(o.xr,{key:"7731df888262acc136e2099fe599c6290967fea7",onClick:this.clickHandler,onKeyDown:this.keyDownHandler},(0,o.h)(n.I,{key:"6bc3781eb46221cbe022c6e6b3e7bad267e4d2c6",disabled:this.disabled},(0,o.h)("div",{key:"1670db00b1cdb4ad8f013ff0dae914683db2004c","aria-checked":(0,c.t)(this.checked),"aria-label":(0,r.g)(this),class:d,ref:this.setSwitchEl,role:"switch",tabIndex:0},(0,o.h)("div",{key:"3c6e6d5abc6df9d745e361a65d06f4e7c1a3da16",class:h},(0,o.h)("div",{key:"0973b399396b9bd44ac9d2c17b374e2fbfe77b5e",class:b})),(0,o.h)(a.H,{key:"7776a1881b7b6d43c543e4f388ae6cb4301b4181",component:this}))))}get el(){return this}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]) .container{block-size:0.75rem}:host([scale=s]) .track{block-size:0.75rem;inline-size:1.5rem}:host([scale=s]) .handle{block-size:0.5rem;inline-size:0.5rem}:host([scale=m]) .container{block-size:1rem}:host([scale=m]) .track{block-size:1rem;inline-size:2rem}:host([scale=m]) .handle{block-size:0.75rem;inline-size:0.75rem}:host([scale=l]) .container{block-size:1.5rem}:host([scale=l]) .track{block-size:1.5rem;inline-size:3rem}:host([scale=l]) .handle{block-size:1.25rem;inline-size:1.25rem}:host{position:relative;display:inline-block;inline-size:auto;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:middle;tap-highlight-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{outline-width:0px}.track{pointer-events:none;position:relative;box-sizing:border-box;display:inline-block;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-2);background-color:var(--calcite-color-foreground-2);vertical-align:top;outline-color:transparent}.container:focus .track{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.handle{pointer-events:none;position:absolute;display:block;border-radius:9999px;border-width:2px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);inset-block-start:-1px;inset-inline:-1px auto}.container:hover .handle,.container:focus .handle{border-color:var(--calcite-color-brand);box-shadow:inset 0 0 0 1px var(--calcite-color-brand)}:host([checked]) .track{border-color:var(--calcite-color-brand-hover);background-color:var(--calcite-color-brand)}:host([checked]) .handle{border-color:var(--calcite-color-brand);inset-inline:auto -1px}:host([checked]) .container:hover .handle{border-color:var(--calcite-color-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-color-brand-hover)}@media (forced-colors: active){:host([checked]) .track{background-color:canvasText}}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-switch",{disabled:[516],form:[513],label:[1],name:[513],scale:[513],checked:[1540],value:[8],setFocus:[64]}]);function u(){if("undefined"===typeof customElements)return;["calcite-switch"].forEach((e=>{if("calcite-switch"===e)customElements.get(e)||customElements.define(e,p)}))}u();const k=p,m=u},51650:(e,t,i)=>{function o(e){return"Enter"===e||" "===e}i.d(t,{i:()=>o,n:()=>c});const c=["0","1","2","3","4","5","6","7","8","9"]}}]);
//# sourceMappingURL=2772.7cb38c7a.chunk.js.map