/*! For license information please see 4706.5bcd3a6d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[4706],{22097:(e,t,n)=>{n.d(t,{S:()=>f,d:()=>b});var i=n(95146),o=n(29746),a=n(39879),s=n(66418),l=n(15520),c=n(76527),r=n(48897),u=n(67294),d=n(26964),h=n(53794);const p="menu",m="default-trigger",f={tooltip:"tooltip",trigger:"trigger"},v="ellipsis",g=["ArrowUp","ArrowDown","End","Home"],E=(0,i.w$)(class extends i.wt{constructor(){var e;super(),e=this,this.__registerHost(),this.__attachShadow(),this.calciteActionMenuOpen=(0,i.lh)(this,"calciteActionMenuOpen",6),this.actionElements=[],this.guid=`calcite-action-menu-${(0,s.g)()}`,this.menuId=`${this.guid}-menu`,this.menuButtonId=`${this.guid}-menu-button`,this.connectMenuButtonEl=()=>{const{menuButtonId:e,menuId:t,open:n,label:i}=this,o=this.slottedMenuButtonEl||this.defaultMenuButtonEl;this.menuButtonEl!==o&&(this.disconnectMenuButtonEl(),this.menuButtonEl=o,this.setTooltipReferenceElement(),o&&(o.active=n,o.setAttribute("aria-controls",t),o.setAttribute("aria-expanded",(0,a.t)(n)),o.setAttribute("aria-haspopup","true"),o.id||(o.id=e),o.label||(o.label=i),o.text||(o.text=i),o.addEventListener("click",this.menuButtonClick),o.addEventListener("keydown",this.menuButtonKeyDown)))},this.disconnectMenuButtonEl=()=>{const{menuButtonEl:e}=this;e&&(e.removeEventListener("click",this.menuButtonClick),e.removeEventListener("keydown",this.menuButtonKeyDown))},this.setMenuButtonEl=e=>{const t=e.target.assignedElements({flatten:!0}).filter((e=>e?.matches("calcite-action")));this.slottedMenuButtonEl=t[0],this.connectMenuButtonEl()},this.setDefaultMenuButtonEl=e=>{this.defaultMenuButtonEl=e,this.connectMenuButtonEl()},this.handleCalciteActionClick=()=>{this.open=!1,this.setFocus()},this.menuButtonClick=()=>{this.toggleOpen()},this.updateTooltip=e=>{const t=e.target.assignedElements({flatten:!0}).filter((e=>e?.matches("calcite-tooltip")));this.tooltipEl=t[0],this.setTooltipReferenceElement()},this.setTooltipReferenceElement=()=>{const{tooltipEl:e,expanded:t,menuButtonEl:n,open:i}=this;e&&(e.referenceElement=t||i?null:n)},this.updateAction=(e,t)=>{const{guid:n,activeMenuItemIndex:i}=this,o=`${n}-action-${t}`;e.tabIndex=-1,e.setAttribute("role","menuitem"),e.id||(e.id=o),e.toggleAttribute("data-active",t===i)},this.updateActions=e=>{e?.forEach(this.updateAction)},this.handleDefaultSlotChange=e=>{const t=e.target.assignedElements({flatten:!0}).reduce(((e,t)=>t?.matches("calcite-action")?(e.push(t),e):t?.matches("calcite-action-group")?e.concat(Array.from(t.querySelectorAll("calcite-action"))):e),[]);this.actionElements=t.filter((e=>!e.disabled&&!e.hidden))},this.menuButtonKeyDown=e=>{const{key:t}=e,{actionElements:n,activeMenuItemIndex:i,open:o}=this;if(n.length){if((0,l.i)(t)){if(e.preventDefault(),!o)return void this.toggleOpen();const t=n[i];t?t.click():this.toggleOpen(!1)}if("Tab"!==t)return"Escape"===t?(this.toggleOpen(!1),void e.preventDefault()):void this.handleActionNavigation(e,t,n);this.open=!1}},this.handleActionNavigation=(e,t,n)=>{if(!this.isValidKey(t,g))return;if(e.preventDefault(),!this.open)return this.toggleOpen(),"Home"!==t&&"ArrowDown"!==t||(this.activeMenuItemIndex=0),void("End"!==t&&"ArrowUp"!==t||(this.activeMenuItemIndex=n.length-1));"Home"===t&&(this.activeMenuItemIndex=0),"End"===t&&(this.activeMenuItemIndex=n.length-1);const i=this.activeMenuItemIndex;"ArrowUp"===t&&(this.activeMenuItemIndex=(0,o.g)(Math.max(i-1,-1),n.length)),"ArrowDown"===t&&(this.activeMenuItemIndex=(0,o.g)(i+1,n.length))},this.toggleOpenEnd=()=>{this.setFocus(),this.el.removeEventListener("calcitePopoverOpen",this.toggleOpenEnd)},this.toggleOpen=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!e.open;e.el.addEventListener("calcitePopoverOpen",e.toggleOpenEnd),e.open=t},this.handlePopoverOpen=()=>{this.open=!0},this.handlePopoverClose=()=>{this.open=!1},this.appearance="solid",this.expanded=!1,this.flipPlacements=void 0,this.label=void 0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.scale=void 0,this.menuButtonEl=void 0,this.activeMenuItemIndex=-1}connectedCallback(){this.connectMenuButtonEl()}componentWillLoad(){(0,c.s)(this)}componentDidLoad(){(0,c.a)(this)}disconnectedCallback(){this.disconnectMenuButtonEl()}expandedHandler(){this.open=!1,this.setTooltipReferenceElement()}openHandler(e){this.activeMenuItemIndex=this.open?0:-1,this.menuButtonEl&&(this.menuButtonEl.active=e),this.calciteActionMenuOpen.emit(),this.setTooltipReferenceElement()}activeMenuItemIndexHandler(){this.updateActions(this.actionElements)}async setFocus(){return await(0,c.c)(this),(0,a.e)(this.menuButtonEl)}renderMenuButton(){const{appearance:e,label:t,scale:n,expanded:o}=this;return(0,i.h)("slot",{name:f.trigger,onSlotchange:this.setMenuButtonEl},(0,i.h)("calcite-action",{appearance:e,class:m,icon:v,ref:this.setDefaultMenuButtonEl,scale:n,text:t,textEnabled:o}))}renderMenuItems(){const{actionElements:e,activeMenuItemIndex:t,open:n,menuId:o,menuButtonEl:a,label:s,placement:l,overlayPositioning:c,flipPlacements:r}=this,u=e[t],d=u?.id||null;return(0,i.h)("calcite-popover",{autoClose:!0,flipPlacements:r,focusTrapDisabled:!0,label:s,offsetDistance:0,onCalcitePopoverClose:this.handlePopoverClose,onCalcitePopoverOpen:this.handlePopoverOpen,open:n,overlayPositioning:c,placement:l,pointerDisabled:!0,referenceElement:a},(0,i.h)("div",{"aria-activedescendant":d,"aria-labelledby":a?.id,class:p,id:o,onClick:this.handleCalciteActionClick,role:"menu",tabIndex:-1},(0,i.h)("slot",{onSlotchange:this.handleDefaultSlotChange})))}render(){return(0,i.h)(i.FK,{key:"d13aa4f3d43fb5651c0487ccfa456813f69955d2"},this.renderMenuButton(),this.renderMenuItems(),(0,i.h)("slot",{key:"b63d187516c766db6a1b1db3df34050fdec9e6ce",name:f.tooltip,onSlotchange:this.updateTooltip}))}isValidKey(e,t){return!!t.find((t=>t===e))}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}}static get style(){return":host{box-sizing:border-box;display:flex;flex-direction:column;font-size:var(--calcite-font-size-1)}::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:var(--calcite-border-width-sm)}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{display:flex;max-block-size:45vh;flex-direction:column;flex-wrap:nowrap;overflow-y:auto;overflow-x:hidden;outline:2px solid transparent;outline-offset:2px;gap:var(--calcite-action-menu-items-space, 0)}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-action-menu",{appearance:[513],expanded:[516],flipPlacements:[16],label:[1],open:[1540],overlayPositioning:[513,"overlay-positioning"],placement:[513],scale:[513],menuButtonEl:[32],activeMenuItemIndex:[32],setFocus:[64]},void 0,{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}]);function b(){if("undefined"===typeof customElements)return;["calcite-action-menu","calcite-action","calcite-icon","calcite-loader","calcite-popover"].forEach((e=>{switch(e){case"calcite-action-menu":customElements.get(e)||customElements.define(e,E);break;case"calcite-action":customElements.get(e)||(0,r.d)();break;case"calcite-icon":customElements.get(e)||(0,u.d)();break;case"calcite-loader":customElements.get(e)||(0,d.d)();break;case"calcite-popover":customElements.get(e)||(0,h.d)()}}))}b()},29746:(e,t,n)=>{function i(e,t){return(e+t)%t}n.d(t,{g:()=>i})},80416:(e,t,n)=>{function i(e){return"l"===e?"m":"s"}async function o(e){await(function(e){return"function"===typeof e.componentOnReady}(e)?e.componentOnReady():new Promise((e=>requestAnimationFrame((()=>e())))))}n.d(t,{c:()=>o,g:()=>i})},65079:(e,t,n)=>{n.d(t,{I:()=>d,u:()=>r});var i=n(95146);function o(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function a(e){e.target.disabled&&e.preventDefault()}const s=["mousedown","mouseup","click"];function l(e){e.target.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}const c={capture:!0};function r(e){if(e.disabled)return e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void function(e){e.el.click=o,t=e.el,t.addEventListener("pointerdown",a,c),s.forEach((e=>t.addEventListener(e,l,c)));var t}(e);!function(e){delete e.el.click,t=e.el,t.removeEventListener("pointerdown",a,c),s.forEach((e=>t.removeEventListener(e,l,c)));var t}(e),e.el.removeAttribute("aria-disabled")}const u="interaction-container",d=(e,t)=>{let{disabled:n}=e;return(0,i.h)("div",{class:u,inert:n},...t)}},76527:(e,t,n)=>{n.d(t,{a:()=>c,b:()=>r,c:()=>u,s:()=>l});var i=n(95146),o=n(32811);const a=new WeakMap,s=new WeakMap;function l(e){s.set(e,new Promise((t=>a.set(e,t))))}function c(e){a.get(e)()}function r(e){return s.get(e)}async function u(e){if(await r(e),(0,o.i)())return(0,i.$x)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}}}]);
//# sourceMappingURL=4706.5bcd3a6d.chunk.js.map