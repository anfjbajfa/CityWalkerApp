"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[3170],{53170:(t,n,e)=>{e.r(n),e.d(n,{l:()=>a});var r,i=e(91657),o={exports:{}};const u=(0,i.g)(function(){return r||(r=1,t=o,n="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,e=function(t){var e,r;(t=void 0!==(t=t||{})?t:{}).ready=new Promise((function(t,n){e=t,r=n}));var i=Object.assign({},t),o="object"==typeof window,u="function"==typeof importScripts;"object"==typeof process&&"object"==typeof process.versions&&process.versions.node;var a,s="";(o||u)&&(u?s=self.location.href:"undefined"!=typeof document&&document.currentScript&&(s=document.currentScript.src),n&&(s=n),s=0!==s.indexOf("blob:")?s.substr(0,s.replace(/[?#].*/,"").lastIndexOf("/")+1):"",u&&(a=t=>{var n=new XMLHttpRequest;return n.open("GET",t,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)})),t.print||console.log.bind(console);var c,f,p=t.printErr||console.warn.bind(console);Object.assign(t,i),i=null,t.arguments&&t.arguments,t.thisProgram&&t.thisProgram,t.quit&&t.quit,t.wasmBinary&&(c=t.wasmBinary),t.noExitRuntime,"object"!=typeof WebAssembly&&j("no native wasm support detected");var l,h,d,_,m,y,g=!1,w="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function b(t,n){return t?function(t,n,e){for(var r=n+e,i=n;t[i]&&!(i>=r);)++i;if(i-n>16&&t.buffer&&w)return w.decode(t.subarray(n,i));for(var o="";n<i;){var u=t[n++];if(128&u){var a=63&t[n++];if(192!=(224&u)){var s=63&t[n++];if((u=224==(240&u)?(15&u)<<12|a<<6|s:(7&u)<<18|a<<12|s<<6|63&t[n++])<65536)o+=String.fromCharCode(u);else{var c=u-65536;o+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else o+=String.fromCharCode((31&u)<<6|a)}else o+=String.fromCharCode(u)}return o}(d,t,n):""}function v(n){l=n,t.HEAP8=h=new Int8Array(n),t.HEAP16=new Int16Array(n),t.HEAP32=_=new Int32Array(n),t.HEAPU8=d=new Uint8Array(n),t.HEAPU16=new Uint16Array(n),t.HEAPU32=m=new Uint32Array(n),t.HEAPF32=new Float32Array(n),t.HEAPF64=new Float64Array(n)}t.INITIAL_MEMORY;var A=[],R=[],S=[];function I(t){A.unshift(t)}function x(t){S.unshift(t)}var P=0,E=null;function j(n){t.onAbort&&t.onAbort(n),p(n="Aborted("+n+")"),g=!0,n+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(n);throw r(e),e}var k;function C(t){return t.startsWith("data:application/octet-stream;base64,")}function D(t){try{if(t==k&&c)return new Uint8Array(c);if(a)return a(t);throw"both async and sync fetching of the wasm failed"}catch(p){j(p)}}function W(){return c||!o&&!u||"function"!=typeof fetch?Promise.resolve().then((function(){return D(k)})):fetch(k,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+k+"'";return t.arrayBuffer()})).catch((function(){return D(k)}))}function H(n){for(;n.length>0;){var e=n.shift();if("function"!=typeof e){var r=e.func;"number"==typeof r?void 0===e.arg?M(r)():M(r)(e.arg):r(void 0===e.arg?null:e.arg)}else e(t)}}C(k="lerc-wasm.wasm")||(k=function(n){return t.locateFile?t.locateFile(n,s):s+n}(k));var T=[];function M(t){var n=T[t];return n||(t>=T.length&&(T.length=t+1),T[t]=n=y.get(t)),n}function O(t){this.excPtr=t,this.ptr=t-24,this.set_type=function(t){m[this.ptr+4>>2]=t},this.get_type=function(){return m[this.ptr+4>>2]},this.set_destructor=function(t){m[this.ptr+8>>2]=t},this.get_destructor=function(){return m[this.ptr+8>>2]},this.set_refcount=function(t){_[this.ptr>>2]=t},this.set_caught=function(t){t=t?1:0,h[this.ptr+12|0]=t},this.get_caught=function(){return 0!=h[this.ptr+12|0]},this.set_rethrown=function(t){t=t?1:0,h[this.ptr+13|0]=t},this.get_rethrown=function(){return 0!=h[this.ptr+13|0]},this.init=function(t,n){this.set_adjusted_ptr(0),this.set_type(t),this.set_destructor(n),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var t=_[this.ptr>>2];_[this.ptr>>2]=t+1},this.release_ref=function(){var t=_[this.ptr>>2];return _[this.ptr>>2]=t-1,1===t},this.set_adjusted_ptr=function(t){m[this.ptr+16>>2]=t},this.get_adjusted_ptr=function(){return m[this.ptr+16>>2]},this.get_exception_ptr=function(){if(z(this.get_type()))return m[this.excPtr>>2];var t=this.get_adjusted_ptr();return 0!==t?t:this.excPtr}}function U(t){try{return f.grow(t-l.byteLength+65535>>>16),v(f.buffer),1}catch(e){}}var B={a:function(t,n,e,r){j("Assertion failed: "+b(t)+", at: "+[n?b(n):"unknown filename",e,r?b(r):"unknown function"])},c:function(t){return F(t+24)+24},b:function(t,n,e){throw new O(t).init(n,e),t},d:function(){j("")},f:function(t,n,e){d.copyWithin(t,n,n+e)},e:function(t){var n=d.length,e=2147483648;if((t>>>=0)>e)return!1;let r=(t,n)=>t+(n-t%n)%n;for(var i=1;i<=4;i*=2){var o=n*(1+.2/i);if(o=Math.min(o,t+100663296),U(Math.min(e,r(Math.max(t,o),65536))))return!0}return!1}};(function(){var n={a:B};function e(n,e){var r=n.exports;t.asm=r,v((f=t.asm.g).buffer),y=t.asm.m,function(t){R.unshift(t)}(t.asm.h),function(){if(P--,t.monitorRunDependencies&&t.monitorRunDependencies(P),0==P&&E){var n=E;E=null,n()}}()}function i(t){e(t.instance)}function o(t){return W().then((function(t){return WebAssembly.instantiate(t,n)})).then((function(t){return t})).then(t,(function(t){p("failed to asynchronously prepare wasm: "+t),j(t)}))}if(P++,t.monitorRunDependencies&&t.monitorRunDependencies(P),t.instantiateWasm)try{return t.instantiateWasm(n,e)}catch(a){return p("Module.instantiateWasm callback failed with error: "+a),!1}(c||"function"!=typeof WebAssembly.instantiateStreaming||C(k)||"function"!=typeof fetch?o(i):fetch(k,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,n).then(i,(function(t){return p("wasm streaming compile failed: "+t),p("falling back to ArrayBuffer instantiation"),o(i)}))}))).catch(r)})(),t.___wasm_call_ctors=function(){return(t.___wasm_call_ctors=t.asm.h).apply(null,arguments)},t._lerc_getBlobInfo=function(){return(t._lerc_getBlobInfo=t.asm.i).apply(null,arguments)},t._lerc_getDataRanges=function(){return(t._lerc_getDataRanges=t.asm.j).apply(null,arguments)},t._lerc_decode=function(){return(t._lerc_decode=t.asm.k).apply(null,arguments)},t._lerc_decode_4D=function(){return(t._lerc_decode_4D=t.asm.l).apply(null,arguments)};var F=t._malloc=function(){return(F=t._malloc=t.asm.n).apply(null,arguments)};t._free=function(){return(t._free=t.asm.o).apply(null,arguments)};var q,z=t.___cxa_is_pointer_type=function(){return(z=t.___cxa_is_pointer_type=t.asm.p).apply(null,arguments)};function L(n){function r(){q||(q=!0,t.calledRun=!0,g||(H(R),e(t),t.onRuntimeInitialized&&t.onRuntimeInitialized(),function(){if(t.postRun)for("function"==typeof t.postRun&&(t.postRun=[t.postRun]);t.postRun.length;)x(t.postRun.shift());H(S)}()))}P>0||(function(){if(t.preRun)for("function"==typeof t.preRun&&(t.preRun=[t.preRun]);t.preRun.length;)I(t.preRun.shift());H(A)}(),P>0||(t.setStatus?(t.setStatus("Running..."),setTimeout((function(){setTimeout((function(){t.setStatus("")}),1),r()}),1)):r()))}if(E=function t(){q||L(),q||(E=t)},t.run=L,t.preInit)for("function"==typeof t.preInit&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.pop()();return L(),t.ready},t.exports=e),o.exports;var t,n,e}()),a=Object.freeze(Object.defineProperty({__proto__:null,default:u},Symbol.toStringTag,{value:"Module"}))}}]);
//# sourceMappingURL=3170.4c380e0c.chunk.js.map