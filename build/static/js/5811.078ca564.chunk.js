"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[5811,6203],{25811:(n,e,t)=>{t.r(e),t.d(e,{registerFunctions:()=>$});var r=t(26043),i=t(67253),a=t(9861),o=t(80324),c=t(43036),s=t(45018),u=t(92975),l=t(77702),f=t(31633),d=t(76797),w=t(89189),A=t(56203),h=t(66388),y=t(19247),p=t(65215),m=t(23701),g=t(19902),v=t(65308),D=t(55171),T=t(3825);async function P(n,e,t){const r=D.id?.findCredential(n.restUrl);if(!r)return null;if("loaded"===n.loadStatus&&""===e&&n.user?.sourceJSON&&!1===t)return n.user.sourceJSON;const i={responseType:"json",query:{f:"json"}};if(t&&(i.query.returnUserLicenseTypeExtensions=!0),""===e){const e=await(0,T.A)(n.restUrl+"/community/self",i);if(e.data){const n=e.data;if(n?.username)return n}return null}const a=await(0,T.A)(n.restUrl+"/community/users/"+e,i);if(a.data){const n=a.data;return n.error?null:n}return null}function I(n,e,t){if((0,c.G)(n,2,2,e,t),n[0]instanceof w.A&&n[1]instanceof w.A);else if(n[0]instanceof w.A&&null===n[1]);else if(n[1]instanceof w.A&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new a.D$(e,a.TX.InvalidParameter,t)}async function X(n,e){if("polygon"!==n.type&&"polyline"!==n.type&&"extent"!==n.type)return 0;let t=1;(n.spatialReference.vcsWkid||n.spatialReference.latestVcsWkid)&&(t=(0,u.G9)(n.spatialReference)/(0,f.GA)(n.spatialReference));let r=0;if("polyline"===n.type)for(const a of n.paths)for(let n=1;n<a.length;n++)r+=(0,u.BM)(a[n],a[n-1],t);else if("polygon"===n.type)for(const a of n.rings){for(let n=1;n<a.length;n++)r+=(0,u.BM)(a[n],a[n-1],t);(a[0][0]!==a[a.length-1][0]||a[0][1]!==a[a.length-1][1]||void 0!==a[0][2]&&a[0][2]!==a[a.length-1][2])&&(r+=(0,u.BM)(a[0],a[a.length-1],t))}else"extent"===n.type&&(r+=2*(0,u.BM)([n.xmin,n.ymin,0],[n.xmax,n.ymin,0],t),r+=2*(0,u.BM)([n.xmin,n.ymin,0],[n.xmin,n.ymax,0],t),r*=2,r+=4*Math.abs((0,c.K)(n.zmax,0)*t-(0,c.K)(n.zmin,0)*t));const i=new m.A({hasZ:!1,hasM:!1,spatialReference:n.spatialReference,paths:[[[0,0],[0,r]]]});return(0,A.planarLength)(i,e)}function $(n){"async"===n.mode&&(n.functions.disjoint=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>(I(i=(0,c.H)(i),e,t),null===i[0]||null===i[1]||(0,A.disjoint)(i[0],i[1]))))},n.functions.intersects=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>(I(i=(0,c.H)(i),e,t),null!==i[0]&&null!==i[1]&&(0,A.intersects)(i[0],i[1]))))},n.functions.touches=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>(I(i=(0,c.H)(i),e,t),null!==i[0]&&null!==i[1]&&(0,A.touches)(i[0],i[1]))))},n.functions.crosses=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>(I(i=(0,c.H)(i),e,t),null!==i[0]&&null!==i[1]&&(0,A.crosses)(i[0],i[1]))))},n.functions.within=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>(I(i=(0,c.H)(i),e,t),null!==i[0]&&null!==i[1]&&(0,A.within)(i[0],i[1]))))},n.functions.contains=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>(I(i=(0,c.H)(i),e,t),null!==i[0]&&null!==i[1]&&(0,A.contains)(i[0],i[1]))))},n.functions.overlaps=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>(I(i=(0,c.H)(i),e,t),null!==i[0]&&null!==i[1]&&(0,A.overlaps)(i[0],i[1]))))},n.functions.equals=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>((0,c.G)(i,2,2,e,t),i[0]===i[1]||(i[0]instanceof w.A&&i[1]instanceof w.A?(0,A.equals)(i[0],i[1]):((0,c.k)(i[0])&&(0,c.k)(i[1])||!!((0,c.n)(i[0])&&(0,c.n)(i[1])||(0,c.m)(i[0])&&(0,c.m)(i[1])))&&i[0].equals(i[1])))))},n.functions.relate=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,c.H)(i),(0,c.G)(i,3,3,e,t),i[0]instanceof w.A&&i[1]instanceof w.A)return(0,A.relate)(i[0],i[1],(0,c.j)(i[2]));if(i[0]instanceof w.A&&null===i[1])return!1;if(i[1]instanceof w.A&&null===i[0])return!1;if(null===i[0]&&null===i[1])return!1;throw new a.D$(e,a.TX.InvalidParameter,t)}))},n.functions.intersection=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>(I(i=(0,c.H)(i),e,t),null===i[0]||null===i[1]?null:(0,A.intersect)(i[0],i[1]))))},n.functions.union=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{const s=[];if(0===(i=(0,c.H)(i)).length)throw new a.D$(e,a.TX.WrongNumberOfParameters,t);if(1===i.length)if((0,c.o)(i[0])){const n=(0,c.H)(i[0]);for(let r=0;r<n.length;r++)if(null!==n[r]){if(!(n[r]instanceof w.A))throw new a.D$(e,a.TX.InvalidParameter,t);s.push(n[r])}}else{if(!(0,c.q)(i[0])){if(i[0]instanceof w.A)return(0,c.x)((0,o.Yq)(i[0]),e.spatialReference);if(null===i[0])return null;throw new a.D$(e,a.TX.InvalidParameter,t)}{const n=(0,c.H)(i[0].toArray());for(let r=0;r<n.length;r++)if(null!==n[r]){if(!(n[r]instanceof w.A))throw new a.D$(e,a.TX.InvalidParameter,t);s.push(n[r])}}}else for(let o=0;o<i.length;o++)if(null!==i[o]){if(!(i[o]instanceof w.A))throw new a.D$(e,a.TX.InvalidParameter,t);s.push(i[o])}return 0===s.length?null:(0,A.union)(s)}))},n.functions.difference=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>(I(i=(0,c.H)(i),e,t),null===i[0]?null:null===i[1]?(0,o.Yq)(i[0]):(0,A.difference)(i[0],i[1]))))},n.functions.symmetricdifference=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>(I(i=(0,c.H)(i),e,t),null===i[0]&&null===i[1]?null:null===i[0]?(0,o.Yq)(i[1]):null===i[1]?(0,o.Yq)(i[0]):(0,A.symmetricDifference)(i[0],i[1]))))},n.functions.clip=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,c.H)(i),(0,c.G)(i,2,2,e,t),!(i[1]instanceof d.A)&&null!==i[1])throw new a.D$(e,a.TX.InvalidParameter,t);if(null===i[0])return null;if(!(i[0]instanceof w.A))throw new a.D$(e,a.TX.InvalidParameter,t);return null===i[1]?null:(0,A.clip)(i[0],i[1])}))},n.functions.cut=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,c.H)(i),(0,c.G)(i,2,2,e,t),!(i[1]instanceof m.A)&&null!==i[1])throw new a.D$(e,a.TX.InvalidParameter,t);if(null===i[0])return[];if(!(i[0]instanceof w.A))throw new a.D$(e,a.TX.InvalidParameter,t);return null===i[1]?[(0,o.Yq)(i[0])]:(0,A.cut)(i[0],i[1])}))},n.functions.area=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,i)=>{if((0,c.G)(i,1,2,e,t),null===(i=(0,c.H)(i))[0])return 0;if((0,c.u)(i[0])){const n=await i[0].sumArea((0,o.uf)((0,c.K)(i[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new a.D$(e,a.TX.Cancelled,t);return n}if((0,c.o)(i[0])||(0,c.q)(i[0])){const n=(0,c.J)(i[0],e.spatialReference);return null===n?0:(0,A.planarArea)(n,(0,o.uf)((0,c.K)(i[1],-1)))}if(!(i[0]instanceof w.A))throw new a.D$(e,a.TX.InvalidParameter,t);return(0,A.planarArea)(i[0],(0,o.uf)((0,c.K)(i[1],-1)))}))},n.functions.areageodetic=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,i)=>{if((0,c.G)(i,1,2,e,t),null===(i=(0,c.H)(i))[0])return 0;if((0,c.u)(i[0])){const n=await i[0].sumArea((0,o.uf)((0,c.K)(i[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new a.D$(e,a.TX.Cancelled,t);return n}if((0,c.o)(i[0])||(0,c.q)(i[0])){const n=(0,c.J)(i[0],e.spatialReference);return null===n?0:(0,A.geodesicArea)(n,(0,o.uf)((0,c.K)(i[1],-1)))}if(!(i[0]instanceof w.A))throw new a.D$(e,a.TX.InvalidParameter,t);return(0,A.geodesicArea)(i[0],(0,o.uf)((0,c.K)(i[1],-1)))}))},n.functions.length=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,i)=>{if((0,c.G)(i,1,2,e,t),null===(i=(0,c.H)(i))[0])return 0;if((0,c.u)(i[0])){const n=await i[0].sumLength((0,o.SQ)((0,c.K)(i[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new a.D$(e,a.TX.Cancelled,t);return n}if((0,c.o)(i[0])||(0,c.q)(i[0])){const n=(0,c.L)(i[0],e.spatialReference);return null===n?0:(0,A.planarLength)(n,(0,o.SQ)((0,c.K)(i[1],-1)))}if(!(i[0]instanceof w.A))throw new a.D$(e,a.TX.InvalidParameter,t);return(0,A.planarLength)(i[0],(0,o.SQ)((0,c.K)(i[1],-1)))}))},n.functions.length3d=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if((0,c.G)(i,1,2,e,t),null===(i=(0,c.H)(i))[0])return 0;if((0,c.o)(i[0])||(0,c.q)(i[0])){const n=(0,c.L)(i[0],e.spatialReference);return null===n?0:!0===n.hasZ?X(n,(0,o.SQ)((0,c.K)(i[1],-1))):(0,A.planarLength)(n,(0,o.SQ)((0,c.K)(i[1],-1)))}if(!(i[0]instanceof w.A))throw new a.D$(e,a.TX.InvalidParameter,t);return!0===i[0].hasZ?X(i[0],(0,o.SQ)((0,c.K)(i[1],-1))):(0,A.planarLength)(i[0],(0,o.SQ)((0,c.K)(i[1],-1)))}))},n.functions.lengthgeodetic=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,i)=>{if((0,c.G)(i,1,2,e,t),null===(i=(0,c.H)(i))[0])return 0;if((0,c.u)(i[0])){const n=await i[0].sumLength((0,o.SQ)((0,c.K)(i[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new a.D$(e,a.TX.Cancelled,t);return n}if((0,c.o)(i[0])||(0,c.q)(i[0])){const n=(0,c.L)(i[0],e.spatialReference);return null===n?0:(0,A.geodesicLength)(n,(0,o.SQ)((0,c.K)(i[1],-1)))}if(!(i[0]instanceof w.A))throw new a.D$(e,a.TX.InvalidParameter,t);return(0,A.geodesicLength)(i[0],(0,o.SQ)((0,c.K)(i[1],-1)))}))},n.functions.distance=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{i=(0,c.H)(i),(0,c.G)(i,2,3,e,t);let s=i[0];((0,c.o)(i[0])||(0,c.q)(i[0]))&&(s=(0,c.M)(i[0],e.spatialReference));let u=i[1];if(((0,c.o)(i[1])||(0,c.q)(i[1]))&&(u=(0,c.M)(i[1],e.spatialReference)),!(s instanceof w.A))throw new a.D$(e,a.TX.InvalidParameter,t);if(!(u instanceof w.A))throw new a.D$(e,a.TX.InvalidParameter,t);return(0,A.distance)(s,u,(0,o.SQ)((0,c.K)(i[2],-1)))}))},n.functions.distancegeodetic=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{i=(0,c.H)(i),(0,c.G)(i,2,3,e,t);const s=i[0],u=i[1];if(!(s instanceof y.A))throw new a.D$(e,a.TX.InvalidParameter,t);if(!(u instanceof y.A))throw new a.D$(e,a.TX.InvalidParameter,t);const l=new m.A({paths:[],spatialReference:s.spatialReference});return l.addPath([s,u]),(0,A.geodesicLength)(l,(0,o.SQ)((0,c.K)(i[2],-1)))}))},n.functions.densify=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,c.H)(i),(0,c.G)(i,2,3,e,t),null===i[0])return null;if(!(i[0]instanceof w.A))throw new a.D$(e,a.TX.InvalidParameter,t);const s=(0,c.g)(i[1]);if(isNaN(s))throw new a.D$(e,a.TX.InvalidParameter,t);if(s<=0)throw new a.D$(e,a.TX.InvalidParameter,t);return i[0]instanceof p.A||i[0]instanceof m.A?(0,A.densify)(i[0],s,(0,o.SQ)((0,c.K)(i[2],-1))):i[0]instanceof d.A?(0,A.densify)(p.A.fromExtent(i[0]),s,(0,o.SQ)((0,c.K)(i[2],-1))):i[0]}))},n.functions.densifygeodetic=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,c.H)(i),(0,c.G)(i,2,3,e,t),null===i[0])return null;if(!(i[0]instanceof w.A))throw new a.D$(e,a.TX.InvalidParameter,t);const s=(0,c.g)(i[1]);if(isNaN(s))throw new a.D$(e,a.TX.InvalidParameter,t);if(s<=0)throw new a.D$(e,a.TX.InvalidParameter,t);return i[0]instanceof p.A||i[0]instanceof m.A?(0,A.geodesicDensify)(i[0],s,(0,o.SQ)((0,c.K)(i[2],-1))):i[0]instanceof d.A?(0,A.geodesicDensify)(p.A.fromExtent(i[0]),s,(0,o.SQ)((0,c.K)(i[2],-1))):i[0]}))},n.functions.generalize=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,c.H)(i),(0,c.G)(i,2,4,e,t),null===i[0])return null;if(!(i[0]instanceof w.A))throw new a.D$(e,a.TX.InvalidParameter,t);const s=(0,c.g)(i[1]);if(isNaN(s))throw new a.D$(e,a.TX.InvalidParameter,t);return(0,A.generalize)(i[0],s,(0,c.h)((0,c.K)(i[2],!0)),(0,o.SQ)((0,c.K)(i[3],-1)))}))},n.functions.buffer=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,c.H)(i),(0,c.G)(i,2,3,e,t),null===i[0])return null;if(!(i[0]instanceof w.A))throw new a.D$(e,a.TX.InvalidParameter,t);const s=(0,c.g)(i[1]);if(isNaN(s))throw new a.D$(e,a.TX.InvalidParameter,t);return 0===s?(0,o.Yq)(i[0]):(0,A.buffer)(i[0],s,(0,o.SQ)((0,c.K)(i[2],-1)))}))},n.functions.buffergeodetic=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,c.H)(i),(0,c.G)(i,2,3,e,t),null===i[0])return null;if(!(i[0]instanceof w.A))throw new a.D$(e,a.TX.InvalidParameter,t);const s=(0,c.g)(i[1]);if(isNaN(s))throw new a.D$(e,a.TX.InvalidParameter,t);return 0===s?(0,o.Yq)(i[0]):(0,A.geodesicBuffer)(i[0],s,(0,o.SQ)((0,c.K)(i[2],-1)))}))},n.functions.offset=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,c.H)(i),(0,c.G)(i,2,6,e,t),null===i[0])return null;if(!(i[0]instanceof p.A||i[0]instanceof m.A))throw new a.D$(e,a.TX.InvalidParameter,t);const s=(0,c.g)(i[1]);if(isNaN(s))throw new a.D$(e,a.TX.InvalidParameter,t);const u=(0,c.g)((0,c.K)(i[4],10));if(isNaN(u))throw new a.D$(e,a.TX.InvalidParameter,t);const l=(0,c.g)((0,c.K)(i[5],0));if(isNaN(l))throw new a.D$(e,a.TX.InvalidParameter,t);return(0,A.offset)(i[0],s,(0,o.SQ)((0,c.K)(i[2],-1)),(0,c.j)((0,c.K)(i[3],"round")).toLowerCase(),u,l)}))},n.functions.rotate=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,c.H)(i),(0,c.G)(i,2,3,e,t),null===i[0])return null;if(!(i[0]instanceof w.A))throw new a.D$(e,a.TX.InvalidParameter,t);const o=i[0]instanceof d.A?p.A.fromExtent(i[0]):i[0],s=(0,c.g)(i[1]);if(isNaN(s))throw new a.D$(e,a.TX.InvalidParameter,t);const u=(0,c.K)(i[2],null);if(null===u)return(0,A.rotate)(o,s);if(u instanceof y.A)return(0,A.rotate)(o,s,u);throw new a.D$(e,a.TX.InvalidParameter,t)}))},n.functions.centroid=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,c.H)(i),(0,c.G)(i,1,1,e,t),null===i[0])return null;let s=i[0];if(((0,c.o)(i[0])||(0,c.q)(i[0]))&&(s=(0,c.M)(i[0],e.spatialReference)),null===s)return null;if(!(s instanceof w.A))throw new a.D$(e,a.TX.InvalidParameter,t);return s instanceof y.A?(0,c.x)((0,o.Yq)(s),e.spatialReference):s instanceof p.A?s.centroid:s instanceof m.A?(0,u.tI)(s):s instanceof h.A?(0,u.e0)(s):s instanceof d.A?s.center:null}))},n.functions.measuretocoordinate=function(e,t){return n.standardFunctionAsync(e,t,((n,r,o)=>{if(o=(0,c.H)(o),(0,c.G)(o,2,2,e,t),null===o[0])return null;let s=o[0];if(((0,c.o)(o[0])||(0,c.q)(o[0]))&&(s=(0,c.L)(o[0],e.spatialReference)),null===s)return null;if(!(s instanceof w.A))throw new a.D$(e,a.TX.InvalidParameter,t);if(!(s instanceof m.A))throw new a.D$(e,a.TX.InvalidParameter,t);if((0,c.b)(!1===o[1]))throw new a.D$(e,a.TX.InvalidParameter,t);const u=(0,l.EP)(s,o[1]);return u?i.A.convertObjectToArcadeDictionary(u,(0,c.N)(e),!1,!0):null}))},n.functions.pointtocoordinate=function(e,t){return n.standardFunctionAsync(e,t,((n,r,o)=>{if(o=(0,c.H)(o),(0,c.G)(o,2,2,e,t),null===o[0])return null;let s=o[0];if(((0,c.o)(o[0])||(0,c.q)(o[0]))&&(s=(0,c.L)(o[0],e.spatialReference)),null===s)return null;if(!(s instanceof w.A))throw new a.D$(e,a.TX.InvalidParameter,t);if(!(s instanceof m.A))throw new a.D$(e,a.TX.InvalidParameter,t);const u=o[1];if(null===u)return null;if(!(u instanceof y.A))throw new a.D$(e,a.TX.InvalidParameter,t);if((0,c.b)(!1===o[1]))throw new a.D$(e,a.TX.InvalidParameter,t);const f=(0,l.sO)(s,u);return f?i.A.convertObjectToArcadeDictionary(f,(0,c.N)(e),!1,!0):null}))},n.functions.distancetocoordinate=function(e,t){return n.standardFunctionAsync(e,t,((n,r,o)=>{if(o=(0,c.H)(o),(0,c.G)(o,2,2,e,t),null===o[0])return null;let s=o[0];if(((0,c.o)(o[0])||(0,c.q)(o[0]))&&(s=(0,c.L)(o[0],e.spatialReference)),null===s)return null;if(!(s instanceof w.A))throw new a.D$(e,a.TX.InvalidParameter,t);if(!(s instanceof m.A))throw new a.D$(e,a.TX.InvalidParameter,t);if((0,c.b)(!1===o[1]))throw new a.D$(e,a.TX.InvalidParameter,t);const u=(0,l.du)(s,o[1]);return u?i.A.convertObjectToArcadeDictionary(u,(0,c.N)(e),!1,!0):null}))},n.functions.multiparttosinglepart=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,i)=>{if(i=(0,c.H)(i),(0,c.G)(i,1,1,e,t),null===i[0])return null;if(!(i[0]instanceof w.A))throw new a.D$(e,a.TX.InvalidParameter,t);if(i[0]instanceof y.A)return[(0,c.x)((0,o.Yq)(i[0]),e.spatialReference)];if(i[0]instanceof d.A)return[(0,c.x)((0,o.Yq)(i[0]),e.spatialReference)];const s=await(0,A.simplify)(i[0]);if(s instanceof p.A){const n=[],e=[];for(let t=0;t<s.rings.length;t++)if(s.isClockwise(s.rings[t])){const e=(0,g.rS)({rings:[s.rings[t]],hasZ:!0===s.hasZ,hasM:!0===s.hasM,spatialReference:s.spatialReference.toJSON()});n.push(e)}else e.push({ring:s.rings[t],pt:s.getPoint(t,0)});for(let t=0;t<e.length;t++)for(let r=0;r<n.length;r++)if(n[r].contains(e[t].pt)){n[r].addRing(e[t].ring);break}return n}if(s instanceof m.A){const n=[];for(let e=0;e<s.paths.length;e++){const t=(0,g.rS)({paths:[s.paths[e]],hasZ:!0===s.hasZ,hasM:!0===s.hasM,spatialReference:s.spatialReference.toJSON()});n.push(t)}return n}if(i[0]instanceof h.A){const n=[],t=(0,c.x)((0,o.Yq)(i[0]),e.spatialReference);for(let e=0;e<t.points.length;e++)n.push(t.getPoint(e));return n}return null}))},n.functions.issimple=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,c.H)(i),(0,c.G)(i,1,1,e,t),null===i[0])return!0;if(!(i[0]instanceof w.A))throw new a.D$(e,a.TX.InvalidParameter,t);return(0,A.isSimple)(i[0])}))},n.functions.simplify=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,c.H)(i),(0,c.G)(i,1,1,e,t),null===i[0])return null;if(!(i[0]instanceof w.A))throw new a.D$(e,a.TX.InvalidParameter,t);return(0,A.simplify)(i[0])}))},n.functions.convexhull=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,c.H)(i),(0,c.G)(i,1,1,e,t),null===i[0])return null;if(!(i[0]instanceof w.A))throw new a.D$(e,a.TX.InvalidParameter,t);return(0,A.convexHull)(i[0])}))},n.functions.getuser=function(e,t){return n.standardFunctionAsync(e,t,(async(n,o,u)=>{(0,c.G)(u,0,2,e,t);let l=(0,c.K)(u[1],""),f=!0===l;if(l=!0===l||!1===l?"":(0,c.j)(l),0===u.length||u[0]instanceof r.A){let n;n=e.services?.portal?e.services.portal:v.A.getDefault(),u.length>0&&(n=(0,s.R)(u[0],n));const t=await P(n,l,f);if(t){const n=JSON.parse(JSON.stringify(t));for(const e of["lastLogin","created","modified"])void 0!==n[e]&&null!==n[e]&&(n[e]=new Date(n[e]));return i.A.convertObjectToArcadeDictionary(n,(0,c.N)(e))}return null}let d=null;if((0,c.u)(u[0])&&(d=u[0]),d){if(f=!1,l)return null;await d.load();const n=await d.getOwningSystemUrl();if(!n){if(!l){const n=await d.getIdentityUser();return n?i.A.convertObjectToArcadeDictionary({username:n},(0,c.N)(e)):null}return null}let t;t=e.services?.portal?e.services.portal:v.A.getDefault(),t=(0,s.R)(new r.A(n),t);const a=await P(t,l,f);if(a){const n=JSON.parse(JSON.stringify(a));for(const e of["lastLogin","created","modified"])void 0!==n[e]&&null!==n[e]&&(n[e]=new Date(n[e]));return i.A.convertObjectToArcadeDictionary(n,(0,c.N)(e))}return null}throw new a.D$(e,a.TX.InvalidParameter,t)}))},n.functions.nearestcoordinate=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,o)=>{if(o=(0,c.H)(o),(0,c.G)(o,2,2,e,t),!(o[0]instanceof w.A||null===o[0]))throw new a.D$(e,a.TX.InvalidParameter,t);if(!(o[1]instanceof y.A||null===o[1]))throw new a.D$(e,a.TX.InvalidParameter,t);if(null===o[0]||null===o[1])return null;const s=await(0,A.nearestCoordinate)(o[0],o[1]);return null===s?null:i.A.convertObjectToArcadeDictionary({coordinate:s.coordinate,distance:s.distance,sideOfLine:0===s.distance?"straddle":s.isRightSide?"right":"left"},(0,c.N)(e),!1,!0)}))},n.functions.nearestvertex=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,o)=>{if(o=(0,c.H)(o),(0,c.G)(o,2,2,e,t),!(o[0]instanceof w.A||null===o[0]))throw new a.D$(e,a.TX.InvalidParameter,t);if(!(o[1]instanceof y.A||null===o[1]))throw new a.D$(e,a.TX.InvalidParameter,t);if(null===o[0]||null===o[1])return null;const s=await(0,A.nearestVertex)(o[0],o[1]);return null===s?null:i.A.convertObjectToArcadeDictionary({coordinate:s.coordinate,distance:s.distance,sideOfLine:0===s.distance?"straddle":s.isRightSide?"right":"left"},(0,c.N)(e),!1,!0)}))})}},45018:(n,e,t)=>{t.d(e,{R:()=>i});var r=t(65308);function i(n,e){return null===n?e:new r.A({url:n.field("url")})}},56203:(n,e,t)=>{t.r(e),t.d(e,{buffer:()=>G,changeDefaultSpatialReferenceTolerance:()=>U,clearDefaultSpatialReferenceTolerance:()=>W,clip:()=>A,contains:()=>y,convexHull:()=>R,crosses:()=>p,cut:()=>h,densify:()=>C,difference:()=>H,disjoint:()=>P,distance:()=>m,equals:()=>g,extendedSpatialReferenceInfo:()=>w,flipHorizontal:()=>j,flipVertical:()=>k,generalize:()=>M,geodesicArea:()=>B,geodesicBuffer:()=>K,geodesicDensify:()=>Y,geodesicLength:()=>V,intersect:()=>F,intersectLinesToPoints:()=>Z,intersects:()=>v,isSimple:()=>$,nearestCoordinate:()=>O,nearestVertex:()=>q,nearestVertices:()=>L,offset:()=>x,overlaps:()=>I,planarArea:()=>E,planarLength:()=>z,relate:()=>X,rotate:()=>J,simplify:()=>S,symmetricDifference:()=>N,touches:()=>D,union:()=>b,within:()=>T});t(35238);var r=t(16783),i=t(19247),a=t(19902);function o(n){return Array.isArray(n)?n[0]?.spatialReference:n?.spatialReference}function c(n){return n?Array.isArray(n)?n.map(c):n.toJSON?n.toJSON():n:n}function s(n){return Array.isArray(n)?n.map((n=>(0,a.rS)(n))):(0,a.rS)(n)}let u;async function l(){return u||(u=(0,r.ho)("geometryEngineWorker",{strategy:"distributed"})),u}async function f(n,e){return(await l()).invoke("executeGEOperation",{operation:n,parameters:c(e)})}async function d(n,e){const t=await l();return Promise.all(t.broadcast("executeGEOperation",{operation:n,parameters:c(e)}))}function w(n){return f("extendedSpatialReferenceInfo",[n])}async function A(n,e){return s(await f("clip",[o(n),n,e]))}async function h(n,e){return s(await f("cut",[o(n),n,e]))}function y(n,e){return f("contains",[o(n),n,e])}function p(n,e){return f("crosses",[o(n),n,e])}function m(n,e,t){return f("distance",[o(n),n,e,t])}function g(n,e){return f("equals",[o(n),n,e])}function v(n,e){return f("intersects",[o(n),n,e])}function D(n,e){return f("touches",[o(n),n,e])}function T(n,e){return f("within",[o(n),n,e])}function P(n,e){return f("disjoint",[o(n),n,e])}function I(n,e){return f("overlaps",[o(n),n,e])}function X(n,e,t){return f("relate",[o(n),n,e,t])}function $(n){return f("isSimple",[o(n),n])}async function S(n){return s(await f("simplify",[o(n),n]))}async function R(n){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return s(await f("convexHull",[o(n),n,e]))}async function H(n,e){return s(await f("difference",[o(n),n,e]))}async function N(n,e){return s(await f("symmetricDifference",[o(n),n,e]))}async function F(n,e){return s(await f("intersect",[o(n),n,e]))}async function b(n){const e=function(n,e){let t;return Array.isArray(n)?t=n:(t=[],t.push(n),null!=e&&t.push(e)),t}(n,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null);return s(await f("union",[o(e),e]))}async function x(n,e,t,r,i,a){return s(await f("offset",[o(n),n,e,t,r,i,a]))}async function G(n,e,t){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=[o(n),n,e,t,r];return s(await f("buffer",i))}async function K(n,e,t,r,i,a){const c=[o(n),n,e,t,r,i,a];return s(await f("geodesicBuffer",c))}async function O(n,e){let t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const r=await f("nearestCoordinate",[o(n),n,e,t]);return{...r,coordinate:i.A.fromJSON(r.coordinate)}}async function q(n,e){const t=await f("nearestVertex",[o(n),n,e]);return{...t,coordinate:i.A.fromJSON(t.coordinate)}}async function L(n,e,t,r){return(await f("nearestVertices",[o(n),n,e,t,r])).map((n=>({...n,coordinate:i.A.fromJSON(n.coordinate)})))}function Q(n){return"xmin"in n?n.center:"x"in n?n:n.extent?.center}async function J(n,e,t){if(null==n)throw new _;const r=n.spatialReference;if(null==(t=t??Q(n)))throw new _;const i=n.constructor.fromJSON(await f("rotate",[r,n,e,t]));return i.spatialReference=r,i}async function j(n,e){if(null==n)throw new _;const t=n.spatialReference;if(null==(e=e??Q(n)))throw new _;const r=n.constructor.fromJSON(await f("flipHorizontal",[t,n,e]));return r.spatialReference=t,r}async function k(n,e){if(null==n)throw new _;const t=n.spatialReference;if(null==(e=e??Q(n)))throw new _;const r=n.constructor.fromJSON(await f("flipVertical",[t,n,e]));return r.spatialReference=t,r}async function M(n,e,t,r){return s(await f("generalize",[o(n),n,e,t,r]))}async function C(n,e,t){return s(await f("densify",[o(n),n,e,t]))}async function Y(n,e,t){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return s(await f("geodesicDensify",[o(n),n,e,t,r]))}function E(n,e){return f("planarArea",[o(n),n,e])}function z(n,e){return f("planarLength",[o(n),n,e])}function B(n,e,t){return f("geodesicArea",[o(n),n,e,t])}function V(n,e,t){return f("geodesicLength",[o(n),n,e,t])}async function Z(n,e){return s(await f("intersectLinesToPoints",[o(n),n,e]))}async function U(n,e){await d("changeDefaultSpatialReferenceTolerance",[n,e])}async function W(n){await d("clearDefaultSpatialReferenceTolerance",[n])}class _ extends Error{constructor(){super("Illegal Argument Exception")}}}}]);
//# sourceMappingURL=5811.078ca564.chunk.js.map