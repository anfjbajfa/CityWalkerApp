"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[176,1406],{38983:(e,n,t)=>{function r(e,n,t){t=t||2;var r,i,v,f,o,y,p,l=n&&n.length,h=l?n[0]*t:e.length,s=x(e,0,h,t,!0),c=[];if(!s||s.next===s.prev)return c;if(l&&(s=a(e,n,s,t)),e.length>80*t){r=v=e[0],i=f=e[1];for(var Z=t;Z<h;Z+=t)(o=e[Z])<r&&(r=o),(y=e[Z+1])<i&&(i=y),o>v&&(v=o),y>f&&(f=y);p=0!==(p=Math.max(v-r,f-i))?1/p:0}return u(s,c,t,r,i,p),c}function x(e,n,t,r,x){var i,u;if(x===F(e,n,t,r)>0)for(i=n;i<t;i+=r)u=C(i,e[i],e[i+1],u);else for(i=t-r;i>=n;i-=r)u=C(i,e[i],e[i+1],u);if(u&&M(u,u.next)){var v=u.next;D(u),u=v}return u}function i(e,n){if(!e)return e;n||(n=e);var t,r=e;do{if(t=!1,r.steiner||!M(r,r.next)&&0!==b(r.prev,r,r.next))r=r.next;else{var x=r.prev;if(D(r),(r=n=x)===r.next)break;t=!0}}while(t||r!==n);return n}function u(e,n,t,r,x,a,p){if(e){!p&&a&&c(e,r,x,a);for(var l,h,s=e;e.prev!==e.next;)if(l=e.prev,h=e.next,a?f(e,r,x,a):v(e))n.push(l.i/t),n.push(e.i/t),n.push(h.i/t),D(e),e=h.next,s=h.next;else if((e=h)===s){p?1===p?u(e=o(i(e),n,t),n,t,r,x,a,2):2===p&&y(e,n,t,r,x,a):u(i(e),n,t,r,x,a,1);break}}}function v(e){var n=e.prev,t=e,r=e.next;if(b(n,t,r)>=0)return!1;for(var x=e.next.next;x!==e.prev;){if(d(n.x,n.y,t.x,t.y,r.x,r.y,x.x,x.y)&&b(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function f(e,n,t,r){var x=e.prev,i=e,u=e.next;if(b(x,i,u)>=0)return!1;for(var v=x.x<i.x?x.x<u.x?x.x:u.x:i.x<u.x?i.x:u.x,f=x.y<i.y?x.y<u.y?x.y:u.y:i.y<u.y?i.y:u.y,o=x.x>i.x?x.x>u.x?x.x:u.x:i.x>u.x?i.x:u.x,y=x.y>i.y?x.y>u.y?x.y:u.y:i.y>u.y?i.y:u.y,a=Z(v,f,n,t,r),p=Z(o,y,n,t,r),l=e.prevZ,h=e.nextZ;l&&l.z>=a&&h&&h.z<=p;){if(l!==e.prev&&l!==e.next&&d(x.x,x.y,i.x,i.y,u.x,u.y,l.x,l.y)&&b(l.prev,l,l.next)>=0)return!1;if(l=l.prevZ,h!==e.prev&&h!==e.next&&d(x.x,x.y,i.x,i.y,u.x,u.y,h.x,h.y)&&b(h.prev,h,h.next)>=0)return!1;h=h.nextZ}for(;l&&l.z>=a;){if(l!==e.prev&&l!==e.next&&d(x.x,x.y,i.x,i.y,u.x,u.y,l.x,l.y)&&b(l.prev,l,l.next)>=0)return!1;l=l.prevZ}for(;h&&h.z<=p;){if(h!==e.prev&&h!==e.next&&d(x.x,x.y,i.x,i.y,u.x,u.y,h.x,h.y)&&b(h.prev,h,h.next)>=0)return!1;h=h.nextZ}return!0}function o(e,n,t){var r=e;do{var x=r.prev,u=r.next.next;!M(x,u)&&k(x,r,r.next,u)&&T(x,u)&&T(u,x)&&(n.push(x.i/t),n.push(r.i/t),n.push(u.i/t),D(r),D(r.next),r=e=u),r=r.next}while(r!==e);return i(r)}function y(e,n,t,r,x,v){var f=e;do{for(var o=f.next.next;o!==f.prev;){if(f.i!==o.i&&g(f,o)){var y=_(f,o);return f=i(f,f.next),y=i(y,y.next),u(f,n,t,r,x,v),void u(y,n,t,r,x,v)}o=o.next}f=f.next}while(f!==e)}function a(e,n,t,r){var u,v,f,o=[];for(u=0,v=n.length;u<v;u++)(f=x(e,n[u]*r,u<v-1?n[u+1]*r:e.length,r,!1))===f.next&&(f.steiner=!0),o.push(w(f));for(o.sort(p),u=0;u<o.length;u++)t=i(t=h(o[u],t),t.next);return t}function p(e,n){return e.x-n.x}function l(e){if(e.next.prev===e)return e;let n=e;for(;;){const t=n.next;if(t.prev===n||t===n||t===e)break;n=t}return n}function h(e,n){var t=function(e,n){var t,r=n,x=e.x,i=e.y,u=-1/0;do{if(i<=r.y&&i>=r.next.y&&r.next.y!==r.y){var v=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(v<=x&&v>u){if(u=v,v===x){if(i===r.y)return r;if(i===r.next.y)return r.next}t=r.x<r.next.x?r:r.next}}r=r.next}while(r!==n);if(!t)return null;if(x===u)return t;var f,o=t,y=t.x,a=t.y,p=1/0;r=t;do{x>=r.x&&r.x>=y&&x!==r.x&&d(i<a?x:u,i,y,a,i<a?u:x,i,r.x,r.y)&&(f=Math.abs(i-r.y)/(x-r.x),T(r,e)&&(f<p||f===p&&(r.x>t.x||r.x===t.x&&s(t,r)))&&(t=r,p=f)),r=r.next}while(r!==o);return t}(e,n);if(!t)return n;var r=_(t,e),x=i(t,t.next);let u=l(r);return i(u,u.next),x=l(x),l(n===t?x:n)}function s(e,n){return b(e.prev,e,n.prev)<0&&b(n.next,e,e.next)<0}function c(e,n,t,r){var x=e;do{null===x.z&&(x.z=Z(x.x,x.y,n,t,r)),x.prevZ=x.prev,x.nextZ=x.next,x=x.next}while(x!==e);x.prevZ.nextZ=null,x.prevZ=null,function(e){var n,t,r,x,i,u,v,f,o=1;do{for(t=e,e=null,i=null,u=0;t;){for(u++,r=t,v=0,n=0;n<o&&(v++,r=r.nextZ);n++);for(f=o;v>0||f>0&&r;)0!==v&&(0===f||!r||t.z<=r.z)?(x=t,t=t.nextZ,v--):(x=r,r=r.nextZ,f--),i?i.nextZ=x:e=x,x.prevZ=i,i=x;t=r}i.nextZ=null,o*=2}while(u>1)}(x)}function Z(e,n,t,r,x){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-t)*x)|e<<8))|e<<4))|e<<2))|e<<1))|(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=32767*(n-r)*x)|n<<8))|n<<4))|n<<2))|n<<1))<<1}function w(e){var n=e,t=e;do{(n.x<t.x||n.x===t.x&&n.y<t.y)&&(t=n),n=n.next}while(n!==e);return t}function d(e,n,t,r,x,i,u,v){return(x-u)*(n-v)-(e-u)*(i-v)>=0&&(e-u)*(r-v)-(t-u)*(n-v)>=0&&(t-u)*(i-v)-(x-u)*(r-v)>=0}function g(e,n){return e.next.i!==n.i&&e.prev.i!==n.i&&!function(e,n){var t=e;do{if(t.i!==e.i&&t.next.i!==e.i&&t.i!==n.i&&t.next.i!==n.i&&k(t,t.next,e,n))return!0;t=t.next}while(t!==e);return!1}(e,n)&&(T(e,n)&&T(n,e)&&function(e,n){var t=e,r=!1,x=(e.x+n.x)/2,i=(e.y+n.y)/2;do{t.y>i!=t.next.y>i&&t.next.y!==t.y&&x<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next}while(t!==e);return r}(e,n)&&(b(e.prev,e,n.prev)||b(e,n.prev,n))||M(e,n)&&b(e.prev,e,e.next)>0&&b(n.prev,n,n.next)>0)}function b(e,n,t){return(n.y-e.y)*(t.x-n.x)-(n.x-e.x)*(t.y-n.y)}function M(e,n){return e.x===n.x&&e.y===n.y}function k(e,n,t,r){var x=z(b(e,n,t)),i=z(b(e,n,r)),u=z(b(t,r,e)),v=z(b(t,r,n));return x!==i&&u!==v||!(0!==x||!m(e,t,n))||!(0!==i||!m(e,r,n))||!(0!==u||!m(t,e,r))||!(0!==v||!m(t,n,r))}function m(e,n,t){return n.x<=Math.max(e.x,t.x)&&n.x>=Math.min(e.x,t.x)&&n.y<=Math.max(e.y,t.y)&&n.y>=Math.min(e.y,t.y)}function z(e){return e>0?1:e<0?-1:0}function T(e,n){return b(e.prev,e,e.next)<0?b(e,n,e.next)>=0&&b(e,e.prev,n)>=0:b(e,n,e.prev)<0||b(e,e.next,n)<0}function _(e,n){var t=new B(e.i,e.x,e.y),r=new B(n.i,n.x,n.y),x=e.next,i=n.prev;return e.next=n,n.prev=e,t.next=x,x.prev=t,r.next=t,t.prev=r,i.next=r,r.prev=i,r}function C(e,n,t,r){var x=new B(e,n,t);return r?(x.next=r.next,x.prev=r,r.next.prev=x,r.next=x):(x.prev=x,x.next=x),x}function D(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function B(e,n,t){this.i=e,this.x=n,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function F(e,n,t,r){for(var x=0,i=n,u=t-r;i<t;i+=r)x+=(e[u]-e[i])*(e[i+1]+e[u+1]),u=i;return x}t.d(n,{e:()=>r}),r.deviation=function(e,n,t,r){var x=n&&n.length,i=x?n[0]*t:e.length,u=Math.abs(F(e,0,i,t));if(x)for(var v=0,f=n.length;v<f;v++){var o=n[v]*t,y=v<f-1?n[v+1]*t:e.length;u-=Math.abs(F(e,o,y,t))}var a=0;for(v=0;v<r.length;v+=3){var p=r[v]*t,l=r[v+1]*t,h=r[v+2]*t;a+=Math.abs((e[p]-e[h])*(e[l+1]-e[p+1])-(e[p]-e[l])*(e[h+1]-e[p+1]))}return 0===u&&0===a?0:Math.abs((a-u)/u)},r.flatten=function(e){for(var n=e[0][0].length,t={vertices:[],holes:[],dimensions:n},r=0,x=0;x<e.length;x++){for(var i=0;i<e[x].length;i++)for(var u=0;u<n;u++)t.vertices.push(e[x][i][u]);x>0&&(r+=e[x-1].length,t.holes.push(r))}return t}},60176:(e,n,t)=>{t.r(n),t.d(n,{ControlPointsTransformTool:()=>x.h,DrawGraphicTool2D:()=>r.F,MediaTransformToolsWrapper:()=>u.b,TransformTool:()=>i.B});var r=t(42376),x=t(6363),i=t(44342),u=t(62209)}}]);
//# sourceMappingURL=1406.1c7d2581.chunk.js.map