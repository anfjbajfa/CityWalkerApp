"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[7563],{41222:(e,t,n)=>{n.d(t,{A6:()=>x,B8:()=>u,Xd:()=>y,Xr:()=>h,Yc:()=>R,hZ:()=>g,lw:()=>p,t2:()=>k,x8:()=>c});var r=n(71958),i=n(59458),a=n(90646),o=n(19068),s=n(68358),l=n(32345);function c(e,t,n){n*=.5;const r=Math.sin(n);return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=Math.cos(n),e}function y(e,t){const n=2*Math.acos(t[3]),r=Math.sin(n/2);return r>(0,o.FD)()?(e[0]=t[0]/r,e[1]=t[1]/r,e[2]=t[2]/r):(e[0]=1,e[1]=0,e[2]=0),n}function p(e,t,n){const r=t[0],i=t[1],a=t[2],o=t[3],s=n[0],l=n[1],c=n[2],y=n[3];return e[0]=r*y+o*s+i*c-a*l,e[1]=i*y+o*l+a*s-r*c,e[2]=a*y+o*c+r*l-i*s,e[3]=o*y-r*s-i*l-a*c,e}function m(e,t,n,r){const i=t[0],a=t[1],s=t[2],l=t[3];let c,y,p,m,u,h=n[0],f=n[1],x=n[2],M=n[3];return y=i*h+a*f+s*x+l*M,y<0&&(y=-y,h=-h,f=-f,x=-x,M=-M),1-y>(0,o.FD)()?(c=Math.acos(y),p=Math.sin(c),m=Math.sin((1-r)*c)/p,u=Math.sin(r*c)/p):(m=1-r,u=r),e[0]=m*i+u*h,e[1]=m*a+u*f,e[2]=m*s+u*x,e[3]=m*l+u*M,e}function u(e,t){const n=t[0],r=t[1],i=t[2],a=t[3],o=n*n+r*r+i*i+a*a,s=o?1/o:0;return e[0]=-n*s,e[1]=-r*s,e[2]=-i*s,e[3]=a*s,e}function h(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function f(e,t){const n=t[0]+t[4]+t[8];let r;if(n>0)r=Math.sqrt(n+1),e[3]=.5*r,r=.5/r,e[0]=(t[5]-t[7])*r,e[1]=(t[6]-t[2])*r,e[2]=(t[1]-t[3])*r;else{let n=0;t[4]>t[0]&&(n=1),t[8]>t[3*n+n]&&(n=2);const i=(n+1)%3,a=(n+2)%3;r=Math.sqrt(t[3*n+n]-t[3*i+i]-t[3*a+a]+1),e[n]=.5*r,r=.5/r,e[3]=(t[3*i+a]-t[3*a+i])*r,e[i]=(t[3*i+n]+t[3*n+i])*r,e[a]=(t[3*a+n]+t[3*n+a])*r}return e}function x(e,t,n,r){const i=.5*Math.PI/180;t*=i,n*=i,r*=i;const a=Math.sin(t),o=Math.cos(t),s=Math.sin(n),l=Math.cos(n),c=Math.sin(r),y=Math.cos(r);return e[0]=a*l*y-o*s*c,e[1]=o*s*y+a*l*c,e[2]=o*l*c-a*s*y,e[3]=o*l*y+a*s*c,e}const M=l.c,g=l.s,d=l.g,v=p,b=l.d,P=l.h,S=l.l,w=l.j,C=w,I=l.b,z=I,A=l.n,k=l.a,L=l.e;function R(e,t,n){const r=(0,s.f)(t,n);return r<-.999999?((0,s.e)(_,T,t),(0,s.G)(_)<1e-6&&(0,s.e)(_,O,t),(0,s.n)(_,_),c(e,_,Math.PI),e):r>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):((0,s.e)(_,t,n),e[0]=_[0],e[1]=_[1],e[2]=_[2],e[3]=1+r,A(e,e))}const _=(0,a.vt)(),T=(0,a.fA)(1,0,0),O=(0,a.fA)(0,1,0);const q=(0,i.vt)(),V=(0,i.vt)();const F=(0,r.vt)();Object.freeze(Object.defineProperty({__proto__:null,add:d,calculateW:function(e,t){const n=t[0],r=t[1],i=t[2];return e[0]=n,e[1]=r,e[2]=i,e[3]=Math.sqrt(Math.abs(1-n*n-r*r-i*i)),e},conjugate:h,copy:M,dot:P,equals:L,exactEquals:k,fromEuler:x,fromMat3:f,getAxisAngle:y,identity:function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},invert:u,len:C,length:w,lerp:S,mul:v,multiply:p,normalize:A,random:function(e){const t=o.Ov,n=t(),r=t(),i=t(),a=Math.sqrt(1-n),s=Math.sqrt(n);return e[0]=a*Math.sin(2*Math.PI*r),e[1]=a*Math.cos(2*Math.PI*r),e[2]=s*Math.sin(2*Math.PI*i),e[3]=s*Math.cos(2*Math.PI*i),e},rotateX:function(e,t,n){n*=.5;const r=t[0],i=t[1],a=t[2],o=t[3],s=Math.sin(n),l=Math.cos(n);return e[0]=r*l+o*s,e[1]=i*l+a*s,e[2]=a*l-i*s,e[3]=o*l-r*s,e},rotateY:function(e,t,n){n*=.5;const r=t[0],i=t[1],a=t[2],o=t[3],s=Math.sin(n),l=Math.cos(n);return e[0]=r*l-a*s,e[1]=i*l+o*s,e[2]=a*l+r*s,e[3]=o*l-i*s,e},rotateZ:function(e,t,n){n*=.5;const r=t[0],i=t[1],a=t[2],o=t[3],s=Math.sin(n),l=Math.cos(n);return e[0]=r*l+i*s,e[1]=i*l-r*s,e[2]=a*l+o*s,e[3]=o*l-a*s,e},rotationTo:R,scale:b,set:g,setAxes:function(e,t,n,r){const i=F;return i[0]=n[0],i[3]=n[1],i[6]=n[2],i[1]=r[0],i[4]=r[1],i[7]=r[2],i[2]=-t[0],i[5]=-t[1],i[8]=-t[2],A(e,f(e,i))},setAxisAngle:c,slerp:m,sqlerp:function(e,t,n,r,i,a){return m(q,t,i,a),m(V,n,r,a),m(e,q,V,2*a*(1-a)),e},sqrLen:z,squaredLength:I,str:function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}},Symbol.toStringTag,{value:"Module"}))},18704:(e,t,n)=>{n.d(t,{Y0:()=>c,lO:()=>y});var r=n(38825),i=n(34614),a=n(38609);const o=new i.A(r.fv),s=new i.A(r.FY),l=new i.A(r.LJ),c=new i.A(r.Ro);function y(e){const t=p.get(e);if(t)return t;let n=o;if(e)if(e===s)n=s;else if(e===l)n=l;else{const t=e.wkid,r=e.latestWkid;if(null!=t||null!=r)(0,a.tl)(t)||(0,a.tl)(r)?n=s:((0,a.ZL)(t)||(0,a.ZL)(r))&&(n=l);else{const t=e.wkt2??e.wkt;if(t){const e=t.toUpperCase();e===m?n=s:e===u&&(n=l)}}}return p.set(e,n),n}const p=new Map,m=s.wkt.toUpperCase(),u=l.wkt.toUpperCase()},72299:(e,t,n)=>{n.d(t,{J:()=>v});n(77844);var r=n(42494),i=(n(95026),n(82439)),a=n(3409),o=n(53295),s=n(52165),l=n(16687),c=n(90646),y=n(17674),p=n(37628),m=n(92956),u=n(51221),h=n(65433),f=n(74795),x=n(34614),M=n(80219),g=n(69806),d=n(67553);class v extends u.b{constructor(e){super(),this._graphicsLayer=e,this._symbolPairingsByType=new Map}visualizeIntersectionPoint(e,t){return this._visualizeSnappingIndicator(new h.A({x:e.intersectionPoint[0],y:e.intersectionPoint[1],spatialReference:t.spatialReference}),this._getOrCreateSymbol("intersectionPoint",t.view.effectiveTheme.accentColor))}visualizePoint(e,t){return this._visualizeSnappingIndicator(new h.A({x:e.point[0],y:e.point[1],spatialReference:t.spatialReference}),this._getOrCreateSymbol("point",t.view.effectiveTheme.accentColor))}visualizeLine(e,t){return this._visualizeSnappingIndicator(new f.A({paths:[[[...e.lineStart],[...e.lineEnd]]],spatialReference:(0,o.PZ)(x.A,t.spatialReference)}),this._getOrCreateSymbol("line",t.view.effectiveTheme.accentColor))}visualizeParallelSign(e,t){return this._visualizeSnappingIndicator(new f.A({paths:[[[...e.lineStart],[...e.lineEnd]]],spatialReference:(0,o.PZ)(x.A,t.spatialReference)}),this._getOrCreateSymbol("parallelSign",t.view.effectiveTheme.accentColor))}visualizeRightAngleQuad(e,t){const n=(0,l.vt)(),r=(0,l.vt)(),i=(0,c.vt)();(0,s.Re)(n,(0,p.Xz)(e.centerVertex),(0,p.Xz)(e.previousVertex)),(0,s.Re)(r,(0,p.Xz)(e.nextVertex),(0,p.Xz)(e.previousVertex)),(0,s.$A)(i,n,r);const a="rightAngleQuad"+(i[2]<0?45:225);return this._visualizeSnappingIndicator(new f.A({paths:[[[...e.previousVertex],[...e.centerVertex],[...e.nextVertex]]],spatialReference:(0,o.PZ)(x.A,t.spatialReference)}),this._getOrCreateSymbol(a,t.view.effectiveTheme.accentColor))}_visualizeSnappingIndicator(e,t){const n=new r.A({geometry:e,symbol:t});return this._graphicsLayer.add(n),(0,i.hA)((()=>{this._graphicsLayer.remove(n)}))}_getOrCreateSymbol(e,t){const n=this._symbolPairingsByType;return n.get(e)?.color!==t&&n.set(e,{color:t,symbol:b(e,t)}),n.get(e).symbol}}function b(e,t){const n=[...t.toRgb(),255*t.a];switch(e){case"point":return new g.default({outline:{width:.5,color:[0,0,0,1]},size:10,color:t});case"intersectionPoint":return new g.default({outline:new d.default({width:1.5,color:t}),size:15,color:[0,0,0,0]});case"line":return new M.A({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:y.uT.Butt,joinStyle:y.wd.Round,miterLimit:10,width:(0,a.PN)(m.N.lineHintWidthTarget),color:n}]}}});case"parallelSign":return new M.A({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:-1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,1.5],[7,1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:n}]}}],scaleSymbolsProportionally:!0,respectFrame:!0},{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,-1.5],[7,-1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:n}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}});case"rightAngleQuad45":case"rightAngleQuad225":{const r="rightAngleQuad45"===e?45:225;return new M.A({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:.5,y:.5,z:0},anchorPointUnits:"Relative",size:(0,a.PN)(m.N.rightAngleHintSize),rotation:r,markerPlacement:{type:"CIMMarkerPlacementOnVertices",placePerPart:!0,angleToLine:!0,placeOnEndPoints:!1},frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[5,-5],[-5,-5],[-5,5],[5,5],[5,-5]]]},symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:(0,a.PN)(m.N.rightAngleHintOutlineSize),color:n},{type:"CIMSolidFill",enable:!0,color:[...t.toRgb(),255*t.a*.4]}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}})}}}},92813:(e,t,n)=>{n.d(t,{UT:()=>p,hs:()=>c,lR:()=>l,wW:()=>y});var r=n(37819),i=n(23423),a=n(7133),o=n(9440);function s(e,t,n,r){if(null==r||e.hasZ||(r=void 0),"point"===e.type)return e.x+=t,e.y+=n,e.hasZ&&null!=r&&(e.z+=r),e;if("multipoint"===e.type){const i=e.points;for(let e=0;e<i.length;e++)i[e]=m(i[e],t,n,r);return e}if("extent"===e.type)return e.xmin+=t,e.xmax+=t,e.ymin+=n,e.ymax+=n,null!=r&&(e.zmin??=0,e.zmin+=r,e.zmax??=0,e.zmax+=r),e;const i=(0,o.$K)(e),a="polyline"===e.type?e.paths:e.rings;for(let o=0;o<i.length;o++){const e=i[o];for(let i=0;i<e.length;i++)e[i]=m(e[i],t,n,r)}return"paths"in e?e.paths=a:e.rings=a,e}function l(e,t,n,r,i){const a=e.clone(),l=r.resolution;if("point"===a.type){if(i)s(a,t*l,-n*l);else{const e=r.state.transform,i=r.state.inverseTransform,o=e[0]*a.x+e[2]*a.y+e[4],s=e[1]*a.x+e[3]*a.y+e[5];a.x=i[0]*(o+t)+i[2]*(s+n)+i[4],a.y=i[1]*(o+t)+i[3]*(s+n)+i[5]}return a}if("multipoint"===a.type){if(i)s(a,t*l,-n*l);else{const e=a.points,i=r.state.transform,o=r.state.inverseTransform;for(let r=0;r<e.length;r++){const a=e[r],s=i[0]*a[0]+i[2]*a[1]+i[4],l=i[1]*a[0]+i[3]*a[1]+i[5],c=o[0]*(s+t)+o[2]*(l+n)+o[4],y=o[1]*(s+t)+o[3]*(l+n)+o[5];e[r]=u(a,c,y,void 0)}}return a}if("extent"===a.type){if(i)s(a,t*l,-n*l);else{const e=r.state.transform,i=r.state.inverseTransform,o=e[0]*a.xmin+e[2]*a.ymin+e[4],s=e[1]*a.xmin+e[3]*a.ymin+e[5],l=e[0]*a.xmax+e[2]*a.ymax+e[4],c=e[1]*a.xmax+e[3]*a.ymax+e[5];a.xmin=i[0]*(o+t)+i[2]*(s+n)+i[4],a.ymin=i[1]*(o+t)+i[3]*(s+n)+i[5],a.xmax=i[0]*(l+t)+i[2]*(c+n)+i[4],a.ymax=i[1]*(l+t)+i[3]*(c+n)+i[5]}return a}if(i)s(a,t*l,-n*l);else{const e=(0,o.$K)(a),i="polyline"===a.type?a.paths:a.rings,s=r.state.transform,l=r.state.inverseTransform;for(let r=0;r<e.length;r++){const i=e[r];for(let e=0;e<i.length;e++){const r=i[e],a=s[0]*r[0]+s[2]*r[1]+s[4],o=s[1]*r[0]+s[3]*r[1]+s[5],c=l[0]*(a+t)+l[2]*(o+n)+l[4],y=l[1]*(a+t)+l[3]*(o+n)+l[5];i[e]=u(r,c,y,void 0)}}"paths"in a?a.paths=i:a.rings=i}return a}function c(e,t,n,r){if("point"===e.type){const{x:i,y:a}=e,o=r?r[0]:i,s=r?r[1]:a,l=e.clone(),c=(i-o)*t+o,y=(a-s)*n+s;return l.x=c,l.y=y,l}if("multipoint"===e.type){const s=(0,o.$K)(e),l=(0,i.vt)(),[c,y,p,m]=(0,a.Yz)(l,[s]),h=r?r[0]:(c+p)/2,f=r?r[1]:(m+y)/2,x=e.clone(),M=x.points;for(let e=0;e<M.length;e++){const r=M[e],[i,a]=r,o=(i-h)*t+h,s=(a-f)*n+f;M[e]=u(r,o,s,void 0)}return x}if("extent"===e.type){const{xmin:i,xmax:a,ymin:o,ymax:s}=e,l=r?r[0]:(i+a)/2,c=r?r[1]:(s+o)/2,y=e.clone();if(y.xmin=(i-l)*t+l,y.ymax=(s-c)*n+c,y.xmax=(a-l)*t+l,y.ymin=(o-c)*n+c,y.xmin>y.xmax){const e=y.xmin,t=y.xmax;y.xmin=t,y.xmax=e}if(y.ymin>y.ymax){const e=y.ymin,t=y.ymax;y.ymin=t,y.ymax=e}return y}const s=(0,o.$K)(e),l=(0,i.vt)(),[c,y,p,m]=(0,a.Yz)(l,s),h=r?r[0]:(c+p)/2,f=r?r[1]:(m+y)/2,x=e.clone(),M="polyline"===x.type?x.paths:x.rings;for(let i=0;i<s.length;i++){const e=s[i];for(let r=0;r<e.length;r++){const a=e[r],[o,s]=a,l=(o-h)*t+h,c=(s-f)*n+f;M[i][r]=u(a,l,c,void 0)}}return"paths"in x?x.paths=M:x.rings=M,x}function y(e,t,n,r,i,a){const o=Math.sqrt((n-e)*(n-e)+(r-t)*(r-t));return Math.sqrt((i-e)*(i-e)+(a-t)*(a-t))/o}function p(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const a=Math.atan2(t.y-n.y,t.x-n.x)-Math.atan2(e.y-n.y,e.x-n.x),o=Math.atan2(Math.sin(a),Math.cos(a));return i?o:(0,r.KJ)(o)}function m(e,t,n,r){return u(e,e[0]+t,e[1]+n,null!=e[2]&&null!=r?e[2]+r:void 0)}function u(e,t,n,r){const i=[t,n];return e.length>2&&i.push(null!=r?r:e[2]),e.length>3&&i.push(e[3]),i}}}]);
//# sourceMappingURL=7563.07bbfc0a.chunk.js.map