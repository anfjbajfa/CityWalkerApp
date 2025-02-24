"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[6810],{96810:(e,t,n)=>{function s(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}n.d(t,{Marked:()=>ae});let r={async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null};function i(e){r=e}const l=/[&<>"']/,o=new RegExp(l.source,"g"),a=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,c=new RegExp(a.source,"g"),h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},p=e=>h[e];function u(e,t){if(t){if(l.test(e))return e.replace(o,p)}else if(a.test(e))return e.replace(c,p);return e}const k=/(^|[^\[])\^/g;function g(e,t){let n="string"===typeof e?e:e.source;t=t||"";const s={replace:(e,t)=>{let r="string"===typeof t?t:t.source;return r=r.replace(k,"$1"),n=n.replace(e,r),s},getRegex:()=>new RegExp(n,t)};return s}function f(e){try{e=encodeURI(e).replace(/%25/g,"%")}catch{return null}return e}const d={exec:()=>null};function x(e,t){const n=e.replace(/\|/g,((e,t,n)=>{let s=!1,r=t;for(;--r>=0&&"\\"===n[r];)s=!s;return s?"|":" |"})).split(/ \|/);let s=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(/\\\|/g,"|");return n}function b(e,t,n){const s=e.length;if(0===s)return"";let r=0;for(;r<s;){const i=e.charAt(s-r-1);if(i!==t||n){if(i===t||!n)break;r++}else r++}return e.slice(0,s-r)}function w(e,t,n,s){const r=t.href,i=t.title?u(t.title):null,l=e[1].replace(/\\([\[\]])/g,"$1");if("!"!==e[0].charAt(0)){s.state.inLink=!0;const e={type:"link",raw:n,href:r,title:i,text:l,tokens:s.inlineTokens(l)};return s.state.inLink=!1,e}return{type:"image",raw:n,href:r,title:i,text:u(l)}}class m{options;rules;lexer;constructor(e){this.options=e||r}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const e=t[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:b(e,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],n=function(e,t){const n=e.match(/^(\s+)(?:```)/);if(null===n)return t;const s=n[1];return t.split("\n").map((e=>{const t=e.match(/^\s+/);if(null===t)return e;const[n]=t;return n.length>=s.length?e.slice(s.length):e})).join("\n")}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:n}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){const t=b(e,"#");this.options.pedantic?e=t.trim():t&&!/ $/.test(t)||(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:b(t[0],"\n")}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let e=b(t[0],"\n").split("\n"),n="",s="";const r=[];for(;e.length>0;){let t=!1;const i=[];let l;for(l=0;l<e.length;l++)if(/^ {0,3}>/.test(e[l]))i.push(e[l]),t=!0;else{if(t)break;i.push(e[l])}e=e.slice(l);const o=i.join("\n"),a=o.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,"\n    $1").replace(/^ {0,3}>[ \t]?/gm,"");n=n?`${n}\n${o}`:o,s=s?`${s}\n${a}`:a;const c=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(a,r,!0),this.lexer.state.top=c,0===e.length)break;const h=r[r.length-1];if("code"===h?.type)break;if("blockquote"===h?.type){const t=h,i=t.raw+"\n"+e.join("\n"),l=this.blockquote(i);r[r.length-1]=l,n=n.substring(0,n.length-t.raw.length)+l.raw,s=s.substring(0,s.length-t.text.length)+l.text;break}if("list"!==h?.type);else{const t=h,i=t.raw+"\n"+e.join("\n"),l=this.list(i);r[r.length-1]=l,n=n.substring(0,n.length-h.raw.length)+l.raw,s=s.substring(0,s.length-t.raw.length)+l.raw,e=i.substring(r[r.length-1].raw.length).split("\n")}}return{type:"blockquote",raw:n,tokens:r,text:s}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const s=n.length>1,r={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");const i=new RegExp(`^( {0,3}${n})((?:[\t ][^\\n]*)?(?:\\n|$))`);let l=!1;for(;e;){let n=!1,s="",o="";if(!(t=i.exec(e)))break;if(this.rules.block.hr.test(e))break;s=t[0],e=e.substring(s.length);let a=t[2].split("\n",1)[0].replace(/^\t+/,(e=>" ".repeat(3*e.length))),c=e.split("\n",1)[0],h=!a.trim(),p=0;if(this.options.pedantic?(p=2,o=a.trimStart()):h?p=t[1].length+1:(p=t[2].search(/[^ ]/),p=p>4?1:p,o=a.slice(p),p+=t[1].length),h&&/^[ \t]*$/.test(c)&&(s+=c+"\n",e=e.substring(c.length+1),n=!0),!n){const t=new RegExp(`^ {0,${Math.min(3,p-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),n=new RegExp(`^ {0,${Math.min(3,p-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),r=new RegExp(`^ {0,${Math.min(3,p-1)}}(?:\`\`\`|~~~)`),i=new RegExp(`^ {0,${Math.min(3,p-1)}}#`),l=new RegExp(`^ {0,${Math.min(3,p-1)}}<(?:[a-z].*>|!--)`,"i");for(;e;){const u=e.split("\n",1)[0];let k;if(c=u,this.options.pedantic?(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),k=c):k=c.replace(/\t/g,"    "),r.test(c))break;if(i.test(c))break;if(l.test(c))break;if(t.test(c))break;if(n.test(c))break;if(k.search(/[^ ]/)>=p||!c.trim())o+="\n"+k.slice(p);else{if(h)break;if(a.replace(/\t/g,"    ").search(/[^ ]/)>=4)break;if(r.test(a))break;if(i.test(a))break;if(n.test(a))break;o+="\n"+c}h||c.trim()||(h=!0),s+=u+"\n",e=e.substring(u.length+1),a=k.slice(p)}}r.loose||(l?r.loose=!0:/\n[ \t]*\n[ \t]*$/.test(s)&&(l=!0));let u,k=null;this.options.gfm&&(k=/^\[[ xX]\] /.exec(o),k&&(u="[ ] "!==k[0],o=o.replace(/^\[[ xX]\] +/,""))),r.items.push({type:"list_item",raw:s,task:!!k,checked:u,loose:!1,text:o,tokens:[]}),r.raw+=s}r.items[r.items.length-1].raw=r.items[r.items.length-1].raw.trimEnd(),r.items[r.items.length-1].text=r.items[r.items.length-1].text.trimEnd(),r.raw=r.raw.trimEnd();for(let e=0;e<r.items.length;e++)if(this.lexer.state.top=!1,r.items[e].tokens=this.lexer.blockTokens(r.items[e].text,[]),!r.loose){const t=r.items[e].tokens.filter((e=>"space"===e.type)),n=t.length>0&&t.some((e=>/\n.*\n/.test(e.raw)));r.loose=n}if(r.loose)for(let e=0;e<r.items.length;e++)r.items[e].loose=!0;return r}}html(e){const t=this.rules.block.html.exec(e);if(t){return{type:"html",block:!0,raw:t[0],pre:"pre"===t[1]||"script"===t[1]||"style"===t[1],text:t[0]}}}def(e){const t=this.rules.block.def.exec(e);if(t){const e=t[1].toLowerCase().replace(/\s+/g," "),n=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:n,title:s}}}table(e){const t=this.rules.block.table.exec(e);if(!t)return;if(!/[:|]/.test(t[2]))return;const n=x(t[1]),s=t[2].replace(/^\||\| *$/g,"").split("|"),r=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split("\n"):[],i={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(const e of s)/^ *-+: *$/.test(e)?i.align.push("right"):/^ *:-+: *$/.test(e)?i.align.push("center"):/^ *:-+ *$/.test(e)?i.align.push("left"):i.align.push(null);for(let e=0;e<n.length;e++)i.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:i.align[e]});for(const e of r)i.rows.push(x(e,i.header.length).map(((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:i.align[t]}))));return i}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const e="\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:u(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const t=b(e.slice(0,-1),"\\");if((e.length-t.length)%2===0)return}else{const e=function(e,t){if(-1===e.indexOf(t[1]))return-1;let n=0;for(let s=0;s<e.length;s++)if("\\"===e[s])s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&(n--,n<0))return s;return-1}(t[2],"()");if(e>-1){const n=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=""}}let n=t[2],s="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);e&&(n=e[1],s=e[3])}else s=t[3]?t[3].slice(1,-1):"";return n=n.trim(),/^</.test(n)&&(n=this.options.pedantic&&!/>$/.test(e)?n.slice(1):n.slice(1,-1)),w(t,{href:n?n.replace(this.rules.inline.anyPunctuation,"$1"):n,title:s?s.replace(this.rules.inline.anyPunctuation,"$1"):s},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const e=t[(n[2]||n[1]).replace(/\s+/g," ").toLowerCase()];if(!e){const e=n[0].charAt(0);return{type:"text",raw:e,text:e}}return w(n,e,n[0],this.lexer)}}emStrong(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=this.rules.inline.emStrongLDelim.exec(e);if(!s)return;if(s[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const n=[...s[0]].length-1;let r,i,l=n,o=0;const a="*"===s[0][0]?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(a.lastIndex=0,t=t.slice(-1*e.length+n);null!=(s=a.exec(t));){if(r=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!r)continue;if(i=[...r].length,s[3]||s[4]){l+=i;continue}if((s[5]||s[6])&&n%3&&!((n+i)%3)){o+=i;continue}if(l-=i,l>0)continue;i=Math.min(i,i+l+o);const t=[...s[0]][0].length,a=e.slice(0,n+s.index+t+i);if(Math.min(n,i)%2){const e=a.slice(1,-1);return{type:"em",raw:a,text:e,tokens:this.lexer.inlineTokens(e)}}const c=a.slice(2,-2);return{type:"strong",raw:a,text:c,tokens:this.lexer.inlineTokens(c)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," ");const n=/[^ ]/.test(e),s=/^ /.test(e)&&/ $/.test(e);return n&&s&&(e=e.substring(1,e.length-1)),e=u(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let e,n;return"@"===t[2]?(e=u(t[1]),n="mailto:"+e):(e=u(t[1]),n=e),{type:"link",raw:t[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if("@"===t[2])e=u(t[0]),n="mailto:"+e;else{let s;do{s=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??""}while(s!==t[0]);e=u(t[0]),n="www."===t[1]?"http://"+t[0]:t[0]}return{type:"link",raw:t[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let e;return e=this.lexer.state.inRawBlock?t[0]:u(t[0]),{type:"text",raw:t[0],text:e}}}}const y=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,$=/(?:[*+-]|\d{1,9}[.)])/,z=g(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,$).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),_=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,R=/(?!\s*\])(?:\\.|[^\[\]\\])+/,T=g(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",R).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),A=g(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,$).getRegex(),S="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",I=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,E=g("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$))","i").replace("comment",I).replace("tag",S).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),v=g(_).replace("hr",y).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",S).getRegex(),q={blockquote:g(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",v).getRegex(),code:/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,def:T,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hr:y,html:E,lheading:z,list:A,newline:/^(?:[ \t]*(?:\n|$))+/,paragraph:v,table:d,text:/^[^\n]+/},Z=g("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",y).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}\t)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",S).getRegex(),P={...q,table:Z,paragraph:g(_).replace("hr",y).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Z).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",S).getRegex()},L={...q,html:g("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",I).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:d,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:g(_).replace("hr",y).replace("heading"," *#{1,6} *[^\n]").replace("lheading",z).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Q=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,B=/^( {2,}|\\)\n(?!\s*$)/,M="\\p{P}\\p{S}",C=g(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,M).getRegex(),O=g(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,M).getRegex(),j=g("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,M).getRegex(),D=g("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,M).getRegex(),H=g(/\\([punct])/,"gu").replace(/punct/g,M).getRegex(),U=g(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),X=g(I).replace("(?:--\x3e|$)","--\x3e").getRegex(),F=g("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",X).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),N=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,G=g(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",N).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),J=g(/^!?\[(label)\]\[(ref)\]/).replace("label",N).replace("ref",R).getRegex(),K=g(/^!?\[(ref)\](?:\[\])?/).replace("ref",R).getRegex(),V={_backpedal:d,anyPunctuation:H,autolink:U,blockSkip:/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,br:B,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,del:d,emStrongLDelim:O,emStrongRDelimAst:j,emStrongRDelimUnd:D,escape:Q,link:G,nolink:K,punctuation:C,reflink:J,reflinkSearch:g("reflink|nolink(?!\\()","g").replace("reflink",J).replace("nolink",K).getRegex(),tag:F,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,url:d},W={...V,link:g(/^!?\[(label)\]\((.*?)\)/).replace("label",N).getRegex(),reflink:g(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",N).getRegex()},Y={...V,escape:g(Q).replace("])","~|])").getRegex(),url:g(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},ee={...Y,br:g(B).replace("{2,}","*").getRegex(),text:g(Y.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},te={normal:q,gfm:P,pedantic:L},ne={normal:V,gfm:Y,breaks:ee,pedantic:W};class se{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||r,this.options.tokenizer=this.options.tokenizer||new m,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:te.normal,inline:ne.normal};this.options.pedantic?(t.block=te.pedantic,t.inline=ne.pedantic):this.options.gfm&&(t.block=te.gfm,this.options.breaks?t.inline=ne.breaks:t.inline=ne.gfm),this.tokenizer.rules=t}static get rules(){return{block:te,inline:ne}}static lex(e,t){return new se(t).lex(e)}static lexInline(e,t){return new se(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,"\n"),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const e=this.inlineQueue[t];this.inlineTokens(e.src,e.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e){let t,n,s,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];for(this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((n=>!!(t=n.call({lexer:this},e,r))&&(e=e.substring(t.raw.length),r.push(t),!0)))))if(t=this.tokenizer.space(e))e=e.substring(t.raw.length),1===t.raw.length&&r.length>0?r[r.length-1].raw+="\n":r.push(t);else if(t=this.tokenizer.code(e))e=e.substring(t.raw.length),n=r[r.length-1],!n||"paragraph"!==n.type&&"text"!==n.type?r.push(t):(n.raw+="\n"+t.raw,n.text+="\n"+t.text,this.inlineQueue[this.inlineQueue.length-1].src=n.text);else if(t=this.tokenizer.fences(e))e=e.substring(t.raw.length),r.push(t);else if(t=this.tokenizer.heading(e))e=e.substring(t.raw.length),r.push(t);else if(t=this.tokenizer.hr(e))e=e.substring(t.raw.length),r.push(t);else if(t=this.tokenizer.blockquote(e))e=e.substring(t.raw.length),r.push(t);else if(t=this.tokenizer.list(e))e=e.substring(t.raw.length),r.push(t);else if(t=this.tokenizer.html(e))e=e.substring(t.raw.length),r.push(t);else if(t=this.tokenizer.def(e))e=e.substring(t.raw.length),n=r[r.length-1],!n||"paragraph"!==n.type&&"text"!==n.type?this.tokens.links[t.tag]||(this.tokens.links[t.tag]={href:t.href,title:t.title}):(n.raw+="\n"+t.raw,n.text+="\n"+t.raw,this.inlineQueue[this.inlineQueue.length-1].src=n.text);else if(t=this.tokenizer.table(e))e=e.substring(t.raw.length),r.push(t);else if(t=this.tokenizer.lheading(e))e=e.substring(t.raw.length),r.push(t);else{if(s=e,this.options.extensions&&this.options.extensions.startBlock){let t=1/0;const n=e.slice(1);let r;this.options.extensions.startBlock.forEach((e=>{r=e.call({lexer:this},n),"number"===typeof r&&r>=0&&(t=Math.min(t,r))})),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(this.state.top&&(t=this.tokenizer.paragraph(s)))n=r[r.length-1],i&&"paragraph"===n?.type?(n.raw+="\n"+t.raw,n.text+="\n"+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):r.push(t),i=s.length!==e.length,e=e.substring(t.raw.length);else if(t=this.tokenizer.text(e))e=e.substring(t.raw.length),n=r[r.length-1],n&&"text"===n.type?(n.raw+="\n"+t.raw,n.text+="\n"+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):r.push(t);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return this.state.top=!0,r}inline(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e){let t,n,s,r,i,l,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=e;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(r=this.tokenizer.rules.inline.reflinkSearch.exec(a));)e.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(r=this.tokenizer.rules.inline.blockSkip.exec(a));)a=a.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(r=this.tokenizer.rules.inline.anyPunctuation.exec(a));)a=a.slice(0,r.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(i||(l=""),i=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((n=>!!(t=n.call({lexer:this},e,o))&&(e=e.substring(t.raw.length),o.push(t),!0)))))if(t=this.tokenizer.escape(e))e=e.substring(t.raw.length),o.push(t);else if(t=this.tokenizer.tag(e))e=e.substring(t.raw.length),n=o[o.length-1],n&&"text"===t.type&&"text"===n.type?(n.raw+=t.raw,n.text+=t.text):o.push(t);else if(t=this.tokenizer.link(e))e=e.substring(t.raw.length),o.push(t);else if(t=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(t.raw.length),n=o[o.length-1],n&&"text"===t.type&&"text"===n.type?(n.raw+=t.raw,n.text+=t.text):o.push(t);else if(t=this.tokenizer.emStrong(e,a,l))e=e.substring(t.raw.length),o.push(t);else if(t=this.tokenizer.codespan(e))e=e.substring(t.raw.length),o.push(t);else if(t=this.tokenizer.br(e))e=e.substring(t.raw.length),o.push(t);else if(t=this.tokenizer.del(e))e=e.substring(t.raw.length),o.push(t);else if(t=this.tokenizer.autolink(e))e=e.substring(t.raw.length),o.push(t);else if(this.state.inLink||!(t=this.tokenizer.url(e))){if(s=e,this.options.extensions&&this.options.extensions.startInline){let t=1/0;const n=e.slice(1);let r;this.options.extensions.startInline.forEach((e=>{r=e.call({lexer:this},n),"number"===typeof r&&r>=0&&(t=Math.min(t,r))})),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(t=this.tokenizer.inlineText(s))e=e.substring(t.raw.length),"_"!==t.raw.slice(-1)&&(l=t.raw.slice(-1)),i=!0,n=o[o.length-1],n&&"text"===n.type?(n.raw+=t.raw,n.text+=t.text):o.push(t);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}else e=e.substring(t.raw.length),o.push(t);return o}}class re{options;parser;constructor(e){this.options=e||r}space(e){return""}code(e){let{text:t,lang:n,escaped:s}=e;const r=(n||"").match(/^\S*/)?.[0],i=t.replace(/\n$/,"")+"\n";return r?'<pre><code class="language-'+u(r)+'">'+(s?i:u(i,!0))+"</code></pre>\n":"<pre><code>"+(s?i:u(i,!0))+"</code></pre>\n"}blockquote(e){let{tokens:t}=e;return`<blockquote>\n${this.parser.parse(t)}</blockquote>\n`}html(e){let{text:t}=e;return t}heading(e){let{tokens:t,depth:n}=e;return`<h${n}>${this.parser.parseInline(t)}</h${n}>\n`}hr(e){return"<hr>\n"}list(e){const t=e.ordered,n=e.start;let s="";for(let i=0;i<e.items.length;i++){const t=e.items[i];s+=this.listitem(t)}const r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+s+"</"+r+">\n"}listitem(e){let t="";if(e.task){const n=this.checkbox({checked:!!e.checked});e.loose?e.tokens.length>0&&"paragraph"===e.tokens[0].type?(e.tokens[0].text=n+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&"text"===e.tokens[0].tokens[0].type&&(e.tokens[0].tokens[0].text=n+" "+e.tokens[0].tokens[0].text)):e.tokens.unshift({type:"text",raw:n+" ",text:n+" "}):t+=n+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>\n`}checkbox(e){let{checked:t}=e;return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(e){let{tokens:t}=e;return`<p>${this.parser.parseInline(t)}</p>\n`}table(e){let t="",n="";for(let r=0;r<e.header.length;r++)n+=this.tablecell(e.header[r]);t+=this.tablerow({text:n});let s="";for(let r=0;r<e.rows.length;r++){const t=e.rows[r];n="";for(let e=0;e<t.length;e++)n+=this.tablecell(t[e]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),"<table>\n<thead>\n"+t+"</thead>\n"+s+"</table>\n"}tablerow(e){let{text:t}=e;return`<tr>\n${t}</tr>\n`}tablecell(e){const t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>\n`}strong(e){let{tokens:t}=e;return`<strong>${this.parser.parseInline(t)}</strong>`}em(e){let{tokens:t}=e;return`<em>${this.parser.parseInline(t)}</em>`}codespan(e){let{text:t}=e;return`<code>${t}</code>`}br(e){return"<br>"}del(e){let{tokens:t}=e;return`<del>${this.parser.parseInline(t)}</del>`}link(e){let{href:t,title:n,tokens:s}=e;const r=this.parser.parseInline(s),i=f(t);if(null===i)return r;t=i;let l='<a href="'+t+'"';return n&&(l+=' title="'+n+'"'),l+=">"+r+"</a>",l}image(e){let{href:t,title:n,text:s}=e;const r=f(t);if(null===r)return s;t=r;let i=`<img src="${t}" alt="${s}"`;return n&&(i+=` title="${n}"`),i+=">",i}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class ie{strong(e){let{text:t}=e;return t}em(e){let{text:t}=e;return t}codespan(e){let{text:t}=e;return t}del(e){let{text:t}=e;return t}html(e){let{text:t}=e;return t}text(e){let{text:t}=e;return t}link(e){let{text:t}=e;return""+t}image(e){let{text:t}=e;return""+t}br(){return""}}class le{options;renderer;textRenderer;constructor(e){this.options=e||r,this.options.renderer=this.options.renderer||new re,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ie}static parse(e,t){return new le(t).parse(e)}static parseInline(e,t){return new le(t).parseInline(e)}parse(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n="";for(let s=0;s<e.length;s++){const r=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){const e=r,t=this.options.extensions.renderers[e.type].call({parser:this},e);if(!1!==t||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(e.type)){n+=t||"";continue}}const i=r;switch(i.type){case"space":n+=this.renderer.space(i);continue;case"hr":n+=this.renderer.hr(i);continue;case"heading":n+=this.renderer.heading(i);continue;case"code":n+=this.renderer.code(i);continue;case"table":n+=this.renderer.table(i);continue;case"blockquote":n+=this.renderer.blockquote(i);continue;case"list":n+=this.renderer.list(i);continue;case"html":n+=this.renderer.html(i);continue;case"paragraph":n+=this.renderer.paragraph(i);continue;case"text":{let r=i,l=this.renderer.text(r);for(;s+1<e.length&&"text"===e[s+1].type;)r=e[++s],l+="\n"+this.renderer.text(r);n+=t?this.renderer.paragraph({type:"paragraph",raw:l,text:l,tokens:[{type:"text",raw:l,text:l}]}):l;continue}default:{const e='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(e),"";throw new Error(e)}}}return n}parseInline(e,t){t=t||this.renderer;let n="";for(let s=0;s<e.length;s++){const r=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){const e=this.options.extensions.renderers[r.type].call({parser:this},r);if(!1!==e||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)){n+=e||"";continue}}const i=r;switch(i.type){case"escape":case"text":n+=t.text(i);break;case"html":n+=t.html(i);break;case"link":n+=t.link(i);break;case"image":n+=t.image(i);break;case"strong":n+=t.strong(i);break;case"em":n+=t.em(i);break;case"codespan":n+=t.codespan(i);break;case"br":n+=t.br(i);break;case"del":n+=t.del(i);break;default:{const e='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(e),"";throw new Error(e)}}}return n}}class oe{options;block;constructor(e){this.options=e||r}static passThroughHooks=(()=>new Set(["preprocess","postprocess","processAllTokens"]))();preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?se.lex:se.lexInline}provideParser(){return this.block?le.parse:le.parseInline}}class ae{defaults={async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null};options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=(()=>le)();Renderer=(()=>re)();TextRenderer=(()=>ie)();Lexer=(()=>se)();Tokenizer=(()=>m)();Hooks=(()=>oe)();constructor(){this.use(...arguments)}walkTokens(e,t){let n=[];for(const s of e)switch(n=n.concat(t.call(this,s)),s.type){case"table":{const e=s;for(const s of e.header)n=n.concat(this.walkTokens(s.tokens,t));for(const s of e.rows)for(const e of s)n=n.concat(this.walkTokens(e.tokens,t));break}case"list":{const e=s;n=n.concat(this.walkTokens(e.items,t));break}default:{const e=s;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach((s=>{const r=e[s].flat(1/0);n=n.concat(this.walkTokens(r,t))})):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(){const e=this.defaults.extensions||{renderers:{},childTokens:{}};for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return n.forEach((t=>{const n={...t};if(n.async=this.defaults.async||n.async||!1,t.extensions&&(t.extensions.forEach((t=>{if(!t.name)throw new Error("extension name required");if("renderer"in t){const n=e.renderers[t.name];e.renderers[t.name]=n?function(){for(var e=arguments.length,s=new Array(e),r=0;r<e;r++)s[r]=arguments[r];let i=t.renderer.apply(this,s);return!1===i&&(i=n.apply(this,s)),i}:t.renderer}if("tokenizer"in t){if(!t.level||"block"!==t.level&&"inline"!==t.level)throw new Error("extension level must be 'block' or 'inline'");const n=e[t.level];n?n.unshift(t.tokenizer):e[t.level]=[t.tokenizer],t.start&&("block"===t.level?e.startBlock?e.startBlock.push(t.start):e.startBlock=[t.start]:"inline"===t.level&&(e.startInline?e.startInline.push(t.start):e.startInline=[t.start]))}"childTokens"in t&&t.childTokens&&(e.childTokens[t.name]=t.childTokens)})),n.extensions=e),t.renderer){const e=this.defaults.renderer||new re(this.defaults);for(const n in t.renderer){if(!(n in e))throw new Error(`renderer '${n}' does not exist`);if(["options","parser"].includes(n))continue;const s=n,r=t.renderer[s],i=e[s];e[s]=function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];let l=r.apply(e,n);return!1===l&&(l=i.apply(e,n)),l||""}}n.renderer=e}if(t.tokenizer){const e=this.defaults.tokenizer||new m(this.defaults);for(const n in t.tokenizer){if(!(n in e))throw new Error(`tokenizer '${n}' does not exist`);if(["options","rules","lexer"].includes(n))continue;const s=n,r=t.tokenizer[s],i=e[s];e[s]=function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];let l=r.apply(e,n);return!1===l&&(l=i.apply(e,n)),l}}n.tokenizer=e}if(t.hooks){const e=this.defaults.hooks||new oe;for(const n in t.hooks){if(!(n in e))throw new Error(`hook '${n}' does not exist`);if(["options","block"].includes(n))continue;const s=n,r=t.hooks[s],i=e[s];oe.passThroughHooks.has(n)?e[s]=t=>{if(this.defaults.async)return Promise.resolve(r.call(e,t)).then((t=>i.call(e,t)));const n=r.call(e,t);return i.call(e,n)}:e[s]=function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];let l=r.apply(e,n);return!1===l&&(l=i.apply(e,n)),l}}n.hooks=e}if(t.walkTokens){const e=this.defaults.walkTokens,s=t.walkTokens;n.walkTokens=function(t){let n=[];return n.push(s.call(this,t)),e&&(n=n.concat(e.call(this,t))),n}}this.defaults={...this.defaults,...n}})),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return se.lex(e,t??this.defaults)}parser(e,t){return le.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{const s={...n},r={...this.defaults,...s},i=this.onError(!!r.silent,!!r.async);if(!0===this.defaults.async&&!1===s.async)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if("undefined"===typeof t||null===t)return i(new Error("marked(): input parameter is undefined or null"));if("string"!==typeof t)return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));r.hooks&&(r.hooks.options=r,r.hooks.block=e);const l=r.hooks?r.hooks.provideLexer():e?se.lex:se.lexInline,o=r.hooks?r.hooks.provideParser():e?le.parse:le.parseInline;if(r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(t):t).then((e=>l(e,r))).then((e=>r.hooks?r.hooks.processAllTokens(e):e)).then((e=>r.walkTokens?Promise.all(this.walkTokens(e,r.walkTokens)).then((()=>e)):e)).then((e=>o(e,r))).then((e=>r.hooks?r.hooks.postprocess(e):e)).catch(i);try{r.hooks&&(t=r.hooks.preprocess(t));let e=l(t,r);r.hooks&&(e=r.hooks.processAllTokens(e)),r.walkTokens&&this.walkTokens(e,r.walkTokens);let n=o(e,r);return r.hooks&&(n=r.hooks.postprocess(n)),n}catch(a){return i(a)}}}onError(e,t){return n=>{if(n.message+="\nPlease report this to https://github.com/markedjs/marked.",e){const e="<p>An error occurred:</p><pre>"+u(n.message+"",!0)+"</pre>";return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}}const ce=new ae;function he(e,t){return ce.parse(e,t)}he.options=he.setOptions=function(e){return ce.setOptions(e),he.defaults=ce.defaults,i(he.defaults),he},he.getDefaults=s,he.defaults=r,he.use=function(){return ce.use(...arguments),he.defaults=ce.defaults,i(he.defaults),he},he.walkTokens=function(e,t){return ce.walkTokens(e,t)},he.parseInline=ce.parseInline,he.Parser=le,he.parser=le.parse,he.Renderer=re,he.TextRenderer=ie,he.Lexer=se,he.lexer=se.lex,he.Tokenizer=m,he.Hooks=oe,he.parse=he;he.options,he.setOptions,he.use,he.walkTokens,he.parseInline,le.parse,se.lex}}]);
//# sourceMappingURL=6810.f505acb7.chunk.js.map