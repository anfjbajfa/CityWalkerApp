"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[1361],{14623:(e,t,i)=>{i.d(t,{R:()=>R,b:()=>A,r:()=>b});var r=i(34981),n=i(26917),o=i(90080),s=i(3838),a=i(56906),l=i(17698),c=i(36324),d=i(94192),p=i(90235),h=i(80883),u=i(42451),f=i(95756),m=i(58350),v=i(21390),g=i(64839),S=i(43425),_=i(32307),T=i(66470),E=i(50125),y=i(91911),O=i(46259);const b=1;function A(e){const t=new _.N5,{attributes:i,varyings:A,vertex:R,fragment:x}=t,{applyMarkerOffset:C,draped:D,output:L,capType:I,stippleEnabled:P,falloffEnabled:N,roundJoins:w,wireframe:W,innerColorEnabled:U}=e;t.include(c.p),t.include(s.s,e),t.include(a.q,e),t.include(o.g,e);const z=C&&!D;z&&(R.uniforms.add(new v.m("markerScale",(e=>e.markerScale))),t.include(l.r,{space:E.lM.World})),(0,u.NB)(R,e),R.uniforms.add(new S.X("inverseProjectionMatrix",((e,t)=>t.camera.inverseProjectionMatrix)),new f.G("nearFar",((e,t)=>t.camera.nearFar)),new v.m("miterLimit",(e=>"miter"!==e.join?0:e.miterLimit)),new m.E("viewport",((e,t)=>t.camera.fullViewport))),R.constants.add("LARGE_HALF_FLOAT","float",65500),i.add(T.r.POSITION,"vec3"),i.add(T.r.PREVPOSITION,"vec3"),i.add(T.r.NEXTPOSITION,"vec3"),i.add(T.r.SUBDIVISIONFACTOR,"float"),i.add(T.r.UV0,"vec2"),A.add("vColor","vec4"),A.add("vpos","vec3"),A.add("vLineDistance","float"),A.add("vLineWidth","float");const F=e.terrainDepthTest&&L===r.V.Color;F&&A.add("depth","float");const j=P;j&&A.add("vLineSizeInv","float");const M=I===O.x.ROUND,H=P&&M,V=N||H;V&&A.add("vLineDistanceNorm","float"),M&&(A.add("vSegmentSDF","float"),A.add("vReverseSegmentSDF","float")),R.code.add(g.H`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),R.code.add(g.H`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),R.code.add(g.H`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = nearFar[0] * 0.99;

      if(pos.z > -nearFar[0]) {
        //current pos behind ncp --> we need to clip
        if (!isStartVertex) {
          if(prev.z < -nearFar[0]) {
            //previous in front of ncp
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if(next.z < -nearFar[0]) {
            //next in front of ncp
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        if (prev.z > -nearFar[0]) {
          //previous behind ncp
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        if (next.z > -nearFar[0]) {
          //next behind ncp
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${F?"depth = pos.z;":""}

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
  `),(0,u.Nz)(R),R.constants.add("aaWidth","float",P?0:1).main.add(g.H`
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;
      float lineSize = getSize();

      if (lineSize < 1.0) {
        coverage = lineSize; // convert sub-pixel coverage to alpha
        lineSize = 1.0;
      }
      lineSize += aaWidth;

      float lineWidth = lineSize * pixelRatio;
      vLineWidth = lineWidth;
      ${j?g.H`vLineSizeInv = 1.0 / lineSize;`:""}

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);
  `),z&&R.main.add(g.H`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),R.main.add(g.H`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),(P||M)&&R.main.add(g.H`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${M?g.H`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),R.main.add(g.H`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),w?R.main.add(g.H`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = PERPENDICULAR(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = PERPENDICULAR(endDir);

        float factor = ${P?g.H`min(1.0, subdivisionFactor * ${g.H.float((b+2)/(b+1))})`:g.H`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):R.main.add(g.H`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);const B=I!==O.x.BUTT;return R.main.add(g.H`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      ${B?g.H`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),R.main.add(g.H`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = sign(uv0.y) * pos.w;

    vLineDistance =  lineWidth * lineDistNorm;
    ${V?g.H`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),M&&R.main.add(g.H`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),P&&(D?R.uniforms.add(new v.m("worldToScreenRatio",((e,t)=>1/t.screenToPCSRatio))):R.main.add(g.H`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),R.main.add(g.H`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),D?R.main.add(g.H`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):R.main.add(g.H`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),R.uniforms.add(new v.m("stipplePatternPixelSize",(e=>(0,a.h)(e)))),R.main.add(g.H`float patternLength = lineSize * stipplePatternPixelSize;
vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);
if (segmentLengthScreenDouble >= 0.001) {
vec2 stippleDisplacement = pos.xy - segmentOrigin;
float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);
vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
}
vStippleDistanceLimits *= pos.w;
vStippleDistance *= pos.w;
vStippleDistanceLimits = isJoin ?
vStippleDistanceLimits :
isStartVertex ?
vec2(-1e34, vStippleDistanceLimits.y) :
vec2(vStippleDistanceLimits.x, 1e34);`)),R.main.add(g.H`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${W&&!D?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),F&&t.include(d.Z,e),t.include(n.HQ,e),t.include(y.z,e),x.include(h.a),x.main.add(g.H`
    discardBySlice(vpos);
    ${F?"terrainDepthTest(depth);":""}
  `),W?x.main.add(g.H`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(M&&x.main.add(g.H`
        float sdf = min(vSegmentSDF, vReverseSegmentSDF);
        vec2 fragmentPosition = vec2(
          min(sdf, 0.0),
          vLineDistance
        ) * gl_FragCoord.w;

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${g.H.float(p.Q)}) {
          discard;
        }
      `),H?x.main.add(g.H`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${g.H.float(p.Q)}, stippleCoverage);
      `):x.main.add(g.H`float stippleAlpha = getStippleAlpha();`),L!==r.V.ObjectAndLayerIdColor&&x.main.add(g.H`discardByStippleAlpha(stippleAlpha, ${g.H.float(p.Q)});`),x.uniforms.add(new m.E("intrinsicColor",(e=>e.color))),x.main.add(g.H`vec4 color = intrinsicColor * vColor;`),U&&(x.uniforms.add(new m.E("innerColor",(e=>e.innerColor??e.color)),new v.m("innerWidth",((e,t)=>e.innerWidth*t.camera.pixelRatio))),x.main.add(g.H`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),x.main.add(g.H`vec4 finalColor = blendStipple(color, stippleAlpha);`),N&&(x.uniforms.add(new v.m("falloff",(e=>e.falloff))),x.main.add(g.H`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`)),P||x.main.add(g.H`float featherStartDistance = max(vLineWidth - 2.0, 0.0);
float value = abs(vLineDistance) * gl_FragCoord.w;
float feather = (value - featherStartDistance) / (vLineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`)),x.main.add(g.H`outputColorHighlightOID(finalColor, vpos);`),t}const R=Object.freeze(Object.defineProperty({__proto__:null,build:A,ribbonlineNumRoundJoinSubdivisions:b},Symbol.toStringTag,{value:"Module"}))},49296:(e,t,i)=>{i.d(t,{F:()=>o});var r=i(59097),n=i(41595);class o{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=(0,r.Ao)(e)}get requiresSampledElevationInfo(){return"absolute-height"!==this.mode}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,t){const i=this.calculateOffsetRenderUnits(t);return null!=this.featureExpressionInfoContext?i:e+i}calculateOffsetRenderUnits(e){let t=this._meterUnitOffset;const i=this.featureExpressionInfoContext;return null!=i&&(t+=(0,n.g7)(i)*this._metersPerElevationInfoUnit),t/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=(0,r.Tg)(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=e.offset??0}updateFeatureExpressionInfoContext(e,t,i){if(null==e)return void(this._featureExpressionInfoContext=null);const r=e?.arcade;r&&null!=t&&null!=i?(this._featureExpressionInfoContext=(0,n.o8)(e),(0,n.gf)(this._featureExpressionInfoContext,(0,n.VG)(r.modules,t,i))):this._featureExpressionInfoContext=e}static fromElevationInfo(e){const t=new o;return null!=e&&t.setFromElevationInfo(e),t}}},67425:(e,t,i)=>{i.d(t,{I2:()=>m,Kf:()=>g,Uk:()=>T,ai:()=>_,au:()=>h,fe:()=>S,nG:()=>f,nu:()=>v,sE:()=>u,uw:()=>r});var r,n=i(34761),o=i(13191),s=i(9392),a=i(5809),l=i(45308),c=i(81284),d=i(80935),p=i(66470);function h(e,t,i,r,n,o,s,a,c,d,p){const h=E[p.mode];let u,f,m=0;if((0,l.projectBuffer)(e,t,i,r,c.spatialReference,n,a))return h?.requiresAlignment(p)?(m=h.applyElevationAlignmentBuffer(r,n,o,s,a,c,d,p),u=o,f=s):(u=r,f=n),(0,l.projectBuffer)(u,c.spatialReference,f,o,d.spatialReference,s,a)?m:void 0}function u(e,t,i,r,n){const o=((0,c.v)(e)?e.z:(0,d.cN)(e)?e.array[e.offset+2]:e[2])||0;switch(i.mode){case"on-the-ground":{const i=(0,d.R1)(t,e,"ground")??0;return n.verticalDistanceToGround=0,n.sampledElevation=i,void(n.z=i)}case"relative-to-ground":{const s=(0,d.R1)(t,e,"ground")??0,a=i.geometryZWithOffset(o,r);return n.verticalDistanceToGround=a,n.sampledElevation=s,void(n.z=a+s)}case"relative-to-scene":{const s=(0,d.R1)(t,e,"scene")??0,a=i.geometryZWithOffset(o,r);return n.verticalDistanceToGround=a,n.sampledElevation=s,void(n.z=a+s)}case"absolute-height":{const s=i.geometryZWithOffset(o,r),a=(0,d.R1)(t,e,"ground")??0;return n.verticalDistanceToGround=s-a,n.sampledElevation=a,void(n.z=s)}default:return void(n.z=0)}}function f(e,t,i,r){return u(e,t,i,r,O),O.z}function m(e,t,i){return"on-the-ground"===t&&"on-the-ground"===i?e.staysOnTheGround:t===i||"on-the-ground"!==t&&"on-the-ground"!==i?null==t||null==i?e.definedChanged:r.UPDATE:e.onTheGroundChanged}function v(e){return"relative-to-ground"===e||"relative-to-scene"===e}function g(e){return"absolute-height"!==e}function S(e,t,i,r,o){u(t,i,o,r,O),_(e,O.verticalDistanceToGround);const s=O.sampledElevation,l=(0,n.C)(y,e.transformation);return b[0]=t.x,b[1]=t.y,b[2]=O.z,(0,a.l)(t.spatialReference,b,l,r.spatialReference)?e.transformation=l:console.warn("Could not locate symbol object properly, it might be misplaced"),s}function _(e,t){for(let i=0;i<e.geometries.length;++i){const r=e.geometries[i].getMutableAttribute(p.r.CENTEROFFSETANDDISTANCE);r&&r.data[3]!==t&&(r.data[3]=t,e.geometryVertexAttributeUpdated(e.geometries[i],p.r.CENTEROFFSETANDDISTANCE))}}class T{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}}!function(e){e[e.NONE=0]="NONE",e[e.UPDATE=1]="UPDATE",e[e.RECREATE=2]="RECREATE"}(r||(r={}));const E={"absolute-height":{applyElevationAlignmentBuffer:function(e,t,i,r,n,o,s,a){const l=a.calculateOffsetRenderUnits(s),c=a.featureExpressionInfoContext;t*=3,r*=3;for(let d=0;d<n;++d){const n=e[t],o=e[t+1],s=e[t+2];i[r]=n,i[r+1]=o,i[r+2]=null==c?s+l:l,t+=3,r+=3}return 0},requiresAlignment:function(e){const t=e.meterUnitOffset,i=e.featureExpressionInfoContext;return 0!==t||null!=i}},"on-the-ground":{applyElevationAlignmentBuffer:function(e,t,i,r,n,o){let s=0;const a=o.spatialReference;t*=3,r*=3;for(let l=0;l<n;++l){const n=e[t],l=e[t+1],c=e[t+2],d=o.getElevation(n,l,c,a,"ground")??0;s+=d,i[r]=n,i[r+1]=l,i[r+2]=d,t+=3,r+=3}return s/n},requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:function(e,t,i,r,n,o,s,a){let l=0;const c=a.calculateOffsetRenderUnits(s),d=a.featureExpressionInfoContext,p=o.spatialReference;t*=3,r*=3;for(let h=0;h<n;++h){const n=e[t],s=e[t+1],a=e[t+2],h=o.getElevation(n,s,a,p,"ground")??0;l+=h,i[r]=n,i[r+1]=s,i[r+2]=null==d?a+h+c:h+c,t+=3,r+=3}return l/n},requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:function(e,t,i,r,n,o,s,a){let l=0;const c=a.calculateOffsetRenderUnits(s),d=a.featureExpressionInfoContext,p=o.spatialReference;t*=3,r*=3;for(let h=0;h<n;++h){const n=e[t],s=e[t+1],a=e[t+2],h=o.getElevation(n,s,a,p,"scene")??0;l+=h,i[r]=n,i[r+1]=s,i[r+2]=null==d?a+h+c:h+c,t+=3,r+=3}return l/n},requiresAlignment:()=>!0}},y=(0,o.vt)(),O=new T,b=(0,s.vt)()},41595:(e,t,i)=>{i.d(t,{KF:()=>f,MF:()=>u,VG:()=>d,g7:()=>h,gf:()=>p,o8:()=>l,q6:()=>c});var r=i(76460),n=i(50346),o=i(32535),s=i(98976);const a=()=>r.A.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function l(e){return{cachedResult:e.cachedResult,arcade:e.arcade?{func:e.arcade.func,context:e.arcade.modules.arcadeUtils.createExecContext(null,{sr:e.arcade.context.spatialReference}),modules:e.arcade.modules}:null}}async function c(e,t,i,r){const o=e?.expression;if("string"!=typeof o)return null;const a=v(o);if(null!=a)return{cachedResult:a};const l=await(0,s.lw)();(0,n.Te)(i);const c=l.arcadeUtils,d=c.createSyntaxTree(o);return c.dependsOnView(d)?(null!=r&&r.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:c.createFunction(d),context:c.createExecContext(null,{sr:t}),modules:l}}}function d(e,t,i){return e.arcadeUtils.createFeature(t.attributes,t.geometry,i)}function p(e,t){if(null!=e&&!m(e)){if(!t||!e.arcade)return void a().errorOncePerTick("Arcade support required but not provided");const i=t;i._geometry&&(i._geometry=(0,o.wZ)(i._geometry)),e.arcade.modules.arcadeUtils.updateExecContext(e.arcade.context,t)}}function h(e){if(null!=e){if(m(e))return e.cachedResult;const t=e.arcade;let i=t?.modules.arcadeUtils.executeFunction(t.func,t.context);return"number"!=typeof i&&(e.cachedResult=0,i=0),i}return 0}function u(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e?.featureExpressionInfo;const r=i?.expression;return t||"0"===r||(i=null),i??null}const f={cachedResult:0};function m(e){return null!=e.cachedResult}function v(e){return"0"===e?0:null}},57662:(e,t,i)=>{var r,n,o;i.d(t,{O7:()=>n,Om:()=>r,sv:()=>o}),function(e){e[e.RasterImage=0]="RasterImage",e[e.Features=1]="Features"}(r||(r={})),function(e){e[e.MapLayer=0]="MapLayer",e[e.ViewLayer=1]="ViewLayer",e[e.Outline=2]="Outline",e[e.SnappingHint=3]="SnappingHint"}(n||(n={})),function(e){e[e.WithRasterImage=0]="WithRasterImage",e[e.WithoutRasterImage=1]="WithoutRasterImage"}(o||(o={}))},80935:(e,t,i)=>{i.d(t,{R1:()=>s,aY:()=>n,cN:()=>o});var r=i(81284);class n{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.array=e,this.spatialReference=t,this.offset=i}}function o(e){return"array"in e}function s(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ground";if((0,r.v)(t))return e.getElevation(t.x,t.y,t.z||0,t.spatialReference,i);if(o(t)){let r=t.offset;return e.getElevation(t.array[r++],t.array[r++],t.array[r]||0,t.spatialReference??e.spatialReference,i)}return e.getElevation(t[0],t[1],t[2]||0,e.spatialReference,i)}},99443:(e,t,i)=>{i.d(t,{Cz:()=>n,DZ:()=>a,PV:()=>s,vO:()=>r});i(72900),i(93345),i(29492),i(96673);const r=64,n=r/2,o=n/5,s=r/o,a=.25},3838:(e,t,i)=>{i.d(t,{s:()=>d});var r=i(66763),n=i(5517),o=i(21390),s=i(60205),a=i(64839),l=i(66470);const c=8;function d(e,t){const i=e.vertex;i.uniforms.add(new o.m("intrinsicWidth",(e=>e.width))),t.vvSize?(e.attributes.add(l.r.SIZEFEATUREATTRIBUTE,"float"),i.uniforms.add(new n.t("vvSizeMinSize",(e=>e.vvSize.minSize)),new n.t("vvSizeMaxSize",(e=>e.vvSize.maxSize)),new n.t("vvSizeOffset",(e=>e.vvSize.offset)),new n.t("vvSizeFactor",(e=>e.vvSize.factor))),i.code.add(a.H`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(e.attributes.add(l.r.SIZE,"float"),i.code.add(a.H`float getSize(){
return intrinsicWidth * size;
}`)),t.vvOpacity?(e.attributes.add(l.r.OPACITYFEATUREATTRIBUTE,"float"),i.constants.add("vvOpacityNumber","int",8),i.uniforms.add(new s.x("vvOpacityValues",(e=>e.vvOpacity.values),c),new s.x("vvOpacityOpacities",(e=>e.vvOpacity.opacityValues),c)),i.code.add(a.H`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):i.code.add(a.H`vec4 applyOpacity( vec4 color ){
return color;
}`),t.vvColor?(e.include(r.A,t),e.attributes.add(l.r.COLORFEATUREATTRIBUTE,"float"),i.code.add(a.H`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)):(e.attributes.add(l.r.COLOR,"vec4"),i.code.add(a.H`vec4 getColor(){
return applyOpacity(color);
}`))}},56906:(e,t,i)=>{i.d(t,{q:()=>m,h:()=>v});var r=i(81449),n=i(42451),o=i(58350),s=i(21390),a=i(64839),l=i(70367);i(14522),i(93345),i(29492),i(96673);function c(e){return e.pattern.map((t=>Math.round(t*e.pixelRatio)))}function d(e){if(null==e)return 1;const t=c(e);return Math.floor(t.reduce(((e,t)=>e+t)))}function p(e){return c(e).reduce(((e,t)=>Math.max(e,t)))}var h=i(43047),u=i(55855);const f=(0,u.vt)();function m(e,t){t.stippleEnabled?function(e,t){const i=!(t.draped&&t.stipplePreferContinuous),{vertex:c,fragment:d}=e;d.include(r.W),t.draped||((0,n.yu)(c,t),c.uniforms.add(new s.m("worldToScreenPerDistanceRatio",((e,t)=>1/t.camera.perScreenPixelRatio))),c.code.add(a.H`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),e.varyings.add("vStippleDistance","float"),e.varyings.add("vStippleDistanceLimits","vec2"),e.varyings.add("vStipplePatternStretch","float"),c.code.add(a.H`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${g};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),c.code.add(a.H`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),c.code.add(a.H`
    if (segmentLengthPseudoScreen >= ${i?"patternLength":"1e4"}) {
  `),(0,n.Nz)(c),c.code.add(a.H`float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
float segmentLengthScreenRounded = flooredRepetitions * patternLength;
float stretch = repetitions / flooredRepetitions;
vStipplePatternStretch = max(0.75, stretch);
return vec2(0.0, segmentLengthScreenRounded);
}
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}`),d.uniforms.add(new l.N("stipplePatternTexture",(e=>e.stippleTexture)),new s.m("stipplePatternSDFNormalizer",(e=>function(e){return e?(Math.floor(.5*(p(e)-1))+.5)/e.pixelRatio:1}(e.stipplePattern))),new s.m("stipplePatternPixelSizeInv",(e=>1/v(e)))),d.code.add(a.H`float getStippleSDF(out bool isClamped) {
float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv * vLineSizeInv;
u = fract(u);
float encodedSDF = rgba2float(texture(stipplePatternTexture, vec2(u, 0.5)));
float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;
return (sdf - 0.5) * vStipplePatternStretch + 0.5;
}
float getStippleSDF() {
bool ignored;
return getStippleSDF(ignored);
}
float getStippleAlpha() {
bool isClamped;
float stippleSDF = getStippleSDF(isClamped);
float antiAliasedResult = clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);
return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
}`),t.stippleOffColorEnabled?(d.uniforms.add(new o.E("stippleOffColor",(e=>function(e){return null==e?u.uY:4===e.length?e:(0,h.s)(f,e[0],e[1],e[2],1)}(e.stippleOffColor)))),d.code.add(a.H`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)):d.code.add(a.H`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}(e,t):function(e){e.fragment.code.add(a.H`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}(e)}function v(e){const t=e.stipplePattern;return t?d(e.stipplePattern)/t.pixelRatio:1}const g=a.H.float(.4)},17698:(e,t,i)=>{i.d(t,{r:()=>l});var r=i(99443),n=i(42451),o=i(21390),s=i(64839),a=i(50125);function l(e,t){const i=e.vertex;(0,n.Nz)(i),null==i.uniforms.get("markerScale")&&i.constants.add("markerScale","float",1),i.constants.add("markerSizePerLineWidth","float",r.PV).code.add(s.H`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),t.space===a.lM.World&&(i.constants.add("maxSegmentLengthFraction","float",.45),i.uniforms.add(new o.m("perRenderPixelRatio",((e,t)=>t.camera.perRenderPixelRatio))),i.code.add(s.H`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}
float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}`))}},97583:(e,t,i)=>{i.d(t,{g:()=>g});i(81806);var r=i(90632),n=i(20664),o=i(9392),s=i(55855),a=i(45308),l=i(50468),c=i(87634),d=i(17345),p=i(75507),h=i(37046),u=i(67737),f=i(66470),m=i(8918),v=i(425);class g{constructor(e){this._originSR=e,this._rootOriginId="root/"+(0,r.c)(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5}getOrigin(e){const t=this._origins.get(this._rootOriginId);if(null==t){const t=u.Q.rootOrigin;if(null!=t)return this._origins.set(this._rootOriginId,(0,p.f)(t[0],t[1],t[2],this._rootOriginId)),this.getOrigin(e);const i=(0,p.f)(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,i),i}const i=this._gridSize,r=Math.round(e[0]/i),o=Math.round(e[1]/i),s=Math.round(e[2]/i),a=`${r}/${o}/${s}`;let l=this._origins.get(a);const c=.5*i;if((0,n.d)(S,e,t.vec3),S[0]=Math.abs(S[0]),S[1]=Math.abs(S[1]),S[2]=Math.abs(S[2]),S[0]<c&&S[1]<c&&S[2]<c){if(l){const t=Math.max(...S);if((0,n.d)(S,e,l.vec3),S[0]=Math.abs(S[0]),S[1]=Math.abs(S[1]),S[2]=Math.abs(S[2]),Math.max(...S)<t)return l}return t}return l||(l=(0,p.f)(r*i,o*i,s*i,a),this._origins.set(a,l)),l}_drawOriginBox(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,s.fA)(1,1,0,1);const i=window.view,r=i._stage,n=t.toString();if(!this._objects.has(n)){this._material=new v.W({width:2,color:t}),r.add(this._material);const e=new m.x(r,{pickable:!1}),i=new h.B({castShadow:!1});r.add(i),e.add(i),this._objects.set(n,i)}const o=this._objects.get(n),p=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],u=p.length,g=new Array(3*u),S=new Array,_=.5*this._gridSize;for(let s=0;s<u;s++)g[3*s]=e[0]+(1&p[s]?_:-_),g[3*s+1]=e[1]+(2&p[s]?_:-_),g[3*s+2]=e[2]+(4&p[s]?_:-_),s>0&&S.push(s-1,s);(0,a.projectBuffer)(g,this._originSR,0,g,i.renderSpatialReference,0,u);const T=new d.V(this._material,[[f.r.POSITION,new l.n(g,S,3,!0)]],null,c.X.Line);r.add(T),o.addGeometry(T)}get test(){}}const S=(0,o.vt)()},75507:(e,t,i)=>{i.d(t,{f:()=>o});var r=i(9392);class n{constructor(e,t){this.vec3=e,this.id=t}}function o(e,t,i,o){return new n((0,r.fA)(e,t,i),o)}},37046:(e,t,i)=>{i.d(t,{B:()=>v});i(81806);var r=i(34761),n=i(13191),o=i(20664),s=i(9392),a=i(78315),l=i(94966),c=i(83490),d=i(73146),p=i(87634),h=i(35416),u=i(86994),f=i(66470),m=i(68967);class v extends d.J{get geometries(){return this._geometries}get transformation(){return this._transformation??n.zK}set transformation(e){this._transformation=(0,r.C)(this._transformation??(0,n.vt)(),e),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?(0,r.C)(this._shaderTransformation??(0,n.vt)(),e):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(),this.type=p.X.Object,this._shaderTransformation=null,this._parentLayer=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerUid=e.layerUid,e.isElevationSource&&(this.lastValidElevationBB=new g),this._geometries=e.geometries?Array.from(e.geometries):new Array}dispose(){this._geometries.length=0}get parentLayer(){return this._parentLayer}set parentLayer(e){(0,u.vA)(null==this._parentLayer||null==e,"Object3D can only be added to a single Layer"),this._parentLayer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e),this._emit("geometryAdded",{object:this,geometry:e}),this._invalidateBoundingVolume()}removeGeometry(e){const t=this._geometries.splice(e,1)[0];t&&(this._emit("geometryRemoved",{object:this,geometry:t}),this._invalidateBoundingVolume())}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this._emit("attributesChanged",{object:this,geometry:e,attribute:t,sync:i}),(0,f.b)(t)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(const e of this._geometries)e.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const e=new h.p;for(const t of this._geometries)t.occludees=(0,m.Ci)(t.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(const t of this._geometries)t.occludees=(0,m.PC)(t.occludees,e);this._emit("occlusionChanged",this)}highlight(e){const t=new h.h(e);for(const i of this._geometries)i.addHighlight(t);return this._emit("highlightChanged",this),t}removeHighlight(e){for(const t of this._geometries)t.removeHighlight(e);this._emit("highlightChanged",this)}removeStateID(e){e.channel===c.Mg.Highlight?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,t){return(0,r.lw)(t,this.transformation,e.transformation)}getCombinedShaderTransformation(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,n.vt)();return(0,r.lw)(t,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=this._bvWorldSpace||new S,this._validateBoundingVolume(this._bvWorldSpace,b.WorldSpace)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=this._bvObjectSpace||new S,this._validateBoundingVolume(this._bvObjectSpace,b.ObjectSpace)),this._bvObjectSpace}_validateBoundingVolume(e,t){const i=t===b.ObjectSpace;for(const r of this._geometries){const t=r.boundingInfo;t&&_(t,e,i?r.transformation:this.getCombinedShaderTransformation(r))}(0,o.m)((0,a.a)(e.bounds),e.min,e.max,.5);for(const r of this._geometries){const t=r.boundingInfo;if(null==t)continue;const n=i?r.transformation:this.getCombinedShaderTransformation(r),s=(0,l.hG)(n);(0,o.t)(O,t.center,n);const c=(0,o.j)(O,(0,a.a)(e.bounds)),d=t.radius*s;e.bounds[3]=Math.max(e.bounds[3],c+d)}}_invalidateBoundingVolume(){const e=this._bvWorldSpace?.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this._parentLayer&&e&&this._parentLayer.notifyObjectBBChanged(this,e)}_emit(e,t){this._parentLayer&&this._parentLayer.events.emit(e,t)}get test(){}}class g{constructor(){this.min=(0,s.fA)(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.max=(0,s.fA)(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.max[0]<this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]}}class S extends g{constructor(){super(...arguments),this.bounds=(0,a.c)()}}function _(e,t,i){const n=e.bbMin,s=e.bbMax;if((0,r.tZ)(i)){const e=(0,o.i)(T,i[12],i[13],i[14]);(0,o.g)(E,n,e),(0,o.g)(y,s,e);for(let i=0;i<3;++i)t.min[i]=Math.min(t.min[i],E[i]),t.max[i]=Math.max(t.max[i],y[i])}else if((0,o.t)(E,n,i),(0,o.p)(n,s))for(let r=0;r<3;++r)t.min[r]=Math.min(t.min[r],E[r]),t.max[r]=Math.max(t.max[r],E[r]);else{(0,o.t)(y,s,i);for(let e=0;e<3;++e)t.min[e]=Math.min(t.min[e],E[e],y[e]),t.max[e]=Math.max(t.max[e],E[e],y[e]);for(let e=0;e<3;++e){(0,o.c)(E,n),(0,o.c)(y,s),E[e]=s[e],y[e]=n[e],(0,o.t)(E,E,i),(0,o.t)(y,y,i);for(let e=0;e<3;++e)t.min[e]=Math.min(t.min[e],E[e],y[e]),t.max[e]=Math.max(t.max[e],E[e],y[e])}}}const T=(0,s.vt)(),E=(0,s.vt)(),y=(0,s.vt)(),O=(0,s.vt)();var b;!function(e){e[e.WorldSpace=0]="WorldSpace",e[e.ObjectSpace=1]="ObjectSpace"}(b||(b={}))},44513:(e,t,i)=>{var r;i.d(t,{q:()=>r}),function(e){e[e.ASYNC=0]="ASYNC",e[e.SYNC=1]="SYNC"}(r||(r={}))},8918:(e,t,i)=>{i.d(t,{x:()=>h});var r=i(54099),n=i(88321),o=i(30726),s=i(30015),a=i(73146),l=i(87634);const c=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];var d=i(94536),p=i(44513);class h extends a.J{constructor(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";super(),this.stage=e,this.apiLayerUid=i,this.type=l.X.Layer,this.events=new r.A,this.visible=!0,this.sliceable=!1,this._objectsAdded=new s.A,this._handles=new n.A,this._objects=new s.A,this._pickable=!0,this.visible=t?.visible??!0,this._pickable=t?.pickable??!0,this.updatePolicy=t?.updatePolicy??p.q.ASYNC,this._disableOctree=t?.disableOctree??!1,e.add(this);for(const r of c)this._handles.add(this.events.on(r,(t=>e.handleEvent(r,t))))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.remove(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.push(e),e.parentLayer=this,this.events.emit("layerObjectAdded",{layer:this,object:e}),null!=this._octree&&this._objectsAdded.push(e)}remove(e){this._objects.removeUnordered(e)&&(e.parentLayer=null,this.events.emit("layerObjectRemoved",{layer:this,object:e}),null!=this._octree&&(this._objectsAdded.removeUnordered(e)||this._octree.remove([e])))}addMany(e){this._objects.pushArray(e);for(const t of e)t.parentLayer=this;this.events.emit("layerObjectsAdded",{layer:this,objects:e}),null!=this._octree&&this._objectsAdded.pushArray(e)}removeMany(e){const t=new Array;if(this._objects.removeUnorderedMany(e,e.length,t),0!==t.length){for(const e of t)e.parentLayer=null;if(this.events.emit("layerObjectsRemoved",{layer:this,objects:t}),null!=this._octree){for(let e=0;e<t.length;)this._objectsAdded.removeUnordered(t[e])?(t[e]=t[t.length-1],t.length-=1):++e;this._octree.remove(t)}}}sync(){this.updatePolicy!==p.q.SYNC&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,t){null==this._octree||this._objectsAdded.includes(e)||this._octree.update(e,t)}getSpatialQueryAccelerator(){return null==this._octree&&this._objects.length>50&&!this._disableOctree?(this._octree=new d.A((e=>e.boundingVolumeWorldSpace.bounds)),this._octree.add(this._objects.data,this._objects.length)):null!=this._octree&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded.data,this._objectsAdded.length),this._objectsAdded.clear()),this._octree}invalidateSpatialQueryAccelerator(){this._octree=(0,o.pR)(this._octree),this._objectsAdded.clear()}}},67737:(e,t,i)=>{i.d(t,{G:()=>r,Q:()=>n});const r={stableRendering:!1},n={rootOrigin:null}},425:(e,t,i)=>{i.d(t,{W:()=>z});var r=i(76460),n=i(15941),o=i(76931),s=i(19555),a=i(20664),l=i(9392),c=i(55855),d=i(4763),p=i(44230),h=i(13927),u=i(48549),f=i(34981),m=i(90235),v=i(61785),g=i(59696),S=i(45463),_=i(77730),T=i(86994),E=i(66470),y=i(93684),O=i(50125),b=i(14623),A=(i(81806),i(16506)),R=i(59246),x=i(72001),C=i(60322),D=i(96643),L=i(93345),I=i(57162);class P extends R.w{constructor(e,t,r){super(e,t,new A.$(b.R,(()=>i.e(1721).then(i.bind(i,61721)))),r,w),this.primitiveType=t.wireframe?L.WR.LINES:L.WR.TRIANGLE_STRIP}_makePipelineState(e,t){const{oitPass:i,output:r,hasOccludees:n,hasPolygonOffset:o}=e,s=i===x.Y.NONE,a=i===x.Y.FrontFace;return(0,I.Ey)({blending:e.output===f.V.Color?(0,C.Yf)(i):null,depthTest:{func:(0,C.K_)(i)},depthWrite:(0,C.z5)(e),drawBuffers:r===f.V.Depth?{buffers:[L.Hr.NONE]}:(0,C.m6)(i,r),colorWrite:I.kn,stencilWrite:n?D.v0:null,stencilTest:n?t?D.a9:D.qh:null,polygonOffset:s||a?o?N:null:C.SE})}initializePipeline(e){if(e.occluder){const t=e.hasPolygonOffset?N:null;this._occluderPipelineTransparent=(0,I.Ey)({blending:I.Ky,polygonOffset:t,depthTest:D.sf,depthWrite:null,colorWrite:I.kn,stencilWrite:null,stencilTest:D.mK,drawBuffers:e.output===f.V.Depth?{buffers:[L.Hr.NONE]}:null}),this._occluderPipelineOpaque=(0,I.Ey)({blending:I.Ky,polygonOffset:t,depthTest:D.sf,depthWrite:null,colorWrite:I.kn,stencilWrite:D.r8,stencilTest:D.I$,drawBuffers:e.output===f.V.Depth?{buffers:[L.Hr.NONE]}:null}),this._occluderPipelineMaskWrite=(0,I.Ey)({blending:null,polygonOffset:t,depthTest:D.m,depthWrite:null,colorWrite:null,stencilWrite:D.v0,stencilTest:D.a9,drawBuffers:e.output===f.V.Depth?{buffers:[L.Hr.NONE]}:null})}return this._occludeePipeline=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,t){if(e)return this._occludeePipeline;switch(t){case _.N.TRANSPARENT_OCCLUDER_MATERIAL:return this._occluderPipelineTransparent??super.getPipeline();case _.N.OCCLUDER_MATERIAL:return this._occluderPipelineOpaque??super.getPipeline();default:return this._occluderPipelineMaskWrite??super.getPipeline()}}}const N={factor:0,units:-4},w=new Map([[E.r.POSITION,0],[E.r.PREVPOSITION,1],[E.r.NEXTPOSITION,2],[E.r.SUBDIVISIONFACTOR,3],[E.r.UV0,4],[E.r.COLOR,5],[E.r.COLORFEATUREATTRIBUTE,5],[E.r.SIZE,6],[E.r.SIZEFEATUREATTRIBUTE,6],[E.r.OPACITYFEATUREATTRIBUTE,7],[E.r.OBJECTANDLAYERIDCOLOR,8]]);var W,U=i(46259);!function(e){e[e.LEFT_JOIN_START=-2]="LEFT_JOIN_START",e[e.LEFT_JOIN_END=-1]="LEFT_JOIN_END",e[e.LEFT_CAP_START=-4]="LEFT_CAP_START",e[e.LEFT_CAP_END=-5]="LEFT_CAP_END",e[e.RIGHT_JOIN_START=2]="RIGHT_JOIN_START",e[e.RIGHT_JOIN_END=1]="RIGHT_JOIN_END",e[e.RIGHT_CAP_START=4]="RIGHT_CAP_START",e[e.RIGHT_CAP_END=5]="RIGHT_CAP_END"}(W||(W={}));class z extends S.im{constructor(e){super(e,j),this._configuration=new U.Q,this.vertexAttributeLocations=w,this.produces=new Map([[_.N.OPAQUE_MATERIAL,e=>(0,f.CL)(e)||(0,f._o)(e)&&this.parameters.renderOccluded===S.m$.OccludeAndTransparentStencil],[_.N.OPAQUE_MATERIAL_WITHOUT_NORMALS,e=>(0,f.eh)(e)],[_.N.OCCLUDER_MATERIAL,e=>(0,f.MO)(e)&&this.parameters.renderOccluded===S.m$.OccludeAndTransparentStencil],[_.N.TRANSPARENT_OCCLUDER_MATERIAL,e=>(0,f.MO)(e)&&this.parameters.renderOccluded===S.m$.OccludeAndTransparentStencil],[_.N.TRANSPARENT_MATERIAL,e=>e===f.V.Color&&this.parameters.writeDepth&&this.parameters.renderOccluded!==S.m$.OccludeAndTransparentStencil],[_.N.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>e===f.V.Color&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==S.m$.OccludeAndTransparentStencil],[_.N.DRAPED_MATERIAL,e=>(0,f.i3)(e)]])}getConfiguration(e,t){this._configuration.output=e,this._configuration.oitPass=t.oitPass,this._configuration.draped=t.slot===_.N.DRAPED_MATERIAL;const i=null!=this.parameters.stipplePattern&&e!==f.V.Highlight;return this._configuration.stippleEnabled=i,this._configuration.stippleOffColorEnabled=i&&null!=this.parameters.stippleOffColor,this._configuration.stipplePreferContinuous=i&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins="round"===this.parameters.join,this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=null!=this.parameters.markerParameters&&function(e){return e.anchor===O.kJ.Tip&&e.hideOnShortSegments&&"begin-end"===e.placement&&e.worldSpace}(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&null!=this.parameters.innerColor,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=t.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===S.m$.OccludeAndTransparentStencil,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.wireframe=this.parameters.wireframe,this._configuration}get visible(){return this.parameters.color[3]>=m.Q||null!=this.parameters.stipplePattern&&(this.parameters.stippleOffColor?.[3]??0)>m.Q}intersectDraped(e,t,i,r,o,s){let{attributes:a,screenToWorldRatio:l}=e;if(!i.options.selectionMode)return;const c=a.get(E.r.SIZE);let d=this.parameters.width;if(this.parameters.vvSize){const e=a.get(E.r.SIZEFEATUREATTRIBUTE).data[0];d*=(0,n.qE)(this.parameters.vvSize.offset[0]+e*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else c&&(d*=c.data[0]);const p=r[0],h=r[1],u=(d/2+4)*l;let f=Number.MAX_VALUE,m=0;const v=a.get(E.r.POSITION).data,g=V(this.parameters,a)?v.length-2:v.length-5;for(let S=0;S<g;S+=3){const e=v[S],t=v[S+1],i=(S+3)%v.length,r=p-e,o=h-t,s=v[i]-e,a=v[i+1]-t,l=(0,n.qE)((s*r+a*o)/(s*s+a*a),0,1),c=s*l-r,d=a*l-o,u=c*c+d*d;u<f&&(f=u,m=S/3)}f<u*u&&o(s.dist,s.normal,m,!1)}intersect(e,t,i,o,l,c){if(!i.options.selectionMode||!e.visible)return;if(!(0,T.zH)(t))return void r.A.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const u=e.attributes,f=u.get(E.r.POSITION).data;let m=this.parameters.width;if(this.parameters.vvSize){const e=u.get(E.r.SIZEFEATUREATTRIBUTE).data[0];m*=(0,n.qE)(this.parameters.vvSize.offset[0]+e*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else u.has(E.r.SIZE)&&(m*=u.get(E.r.SIZE).data[0]);const v=i.camera,g=$;(0,s.C)(g,i.point);const S=m*v.pixelRatio/2+4*v.pixelRatio;(0,a.i)(re[0],g[0]-S,g[1]+S,0),(0,a.i)(re[1],g[0]+S,g[1]+S,0),(0,a.i)(re[2],g[0]+S,g[1]-S,0),(0,a.i)(re[3],g[0]-S,g[1]-S,0);for(let r=0;r<4;r++)if(!v.unprojectFromRenderScreen(re[r],ne[r]))return;(0,h.Cr)(v.eye,ne[0],ne[1],oe),(0,h.Cr)(v.eye,ne[1],ne[2],se),(0,h.Cr)(v.eye,ne[2],ne[3],ae),(0,h.Cr)(v.eye,ne[3],ne[0],le);let _=Number.MAX_VALUE,y=0;const O=V(this.parameters,u)?f.length-2:f.length-5;for(let r=0;r<O;r+=3){B[0]=f[r]+t[12],B[1]=f[r+1]+t[13],B[2]=f[r+2]+t[14];const e=(r+3)%f.length;if(k[0]=f[e]+t[12],k[1]=f[e+1]+t[13],k[2]=f[e+2]+t[14],(0,h.mN)(oe,B)<0&&(0,h.mN)(oe,k)<0||(0,h.mN)(se,B)<0&&(0,h.mN)(se,k)<0||(0,h.mN)(ae,B)<0&&(0,h.mN)(ae,k)<0||(0,h.mN)(le,B)<0&&(0,h.mN)(le,k)<0)continue;if(v.projectToRenderScreen(B,Z),v.projectToRenderScreen(k,q),Z[2]<0&&q[2]>0){(0,a.d)(G,B,k);const e=v.frustum,t=-(0,h.mN)(e[d.FB.NEAR],B)/(0,a.f)(G,(0,h.Qj)(e[d.FB.NEAR]));(0,a.h)(G,G,t),(0,a.g)(B,B,G),v.projectToRenderScreen(B,Z)}else if(Z[2]>0&&q[2]<0){(0,a.d)(G,k,B);const e=v.frustum,t=-(0,h.mN)(e[d.FB.NEAR],k)/(0,a.f)(G,(0,h.Qj)(e[d.FB.NEAR]));(0,a.h)(G,G,t),(0,a.g)(k,k,G),v.projectToRenderScreen(k,q)}else if(Z[2]<0&&q[2]<0)continue;Z[2]=0,q[2]=0;const i=(0,p.kb)((0,p.Cr)(Z,q,X),g);i<_&&(_=i,(0,a.c)(Y,B),(0,a.c)(Q,k),y=r/3)}const b=i.rayBegin,A=i.rayEnd;if(_<S*S){let e=Number.MAX_VALUE;if((0,p.ld)((0,p.Cr)(Y,Q,X),(0,p.Cr)(b,A,K),J)){(0,a.d)(J,J,b);const t=(0,a.l)(J);(0,a.h)(J,J,1/t),e=t/(0,a.j)(b,A)}c(e,J,y,!1)}}get _layout(){const e=(0,u.BP)().vec3f(E.r.POSITION).vec3f(E.r.PREVPOSITION).vec3f(E.r.NEXTPOSITION).f32(E.r.SUBDIVISIONFACTOR).vec2f(E.r.UV0);return this.parameters.vvSize?e.f32(E.r.SIZEFEATUREATTRIBUTE):e.f32(E.r.SIZE),this.parameters.vvColor?e.f32(E.r.COLORFEATUREATTRIBUTE):e.vec4f(E.r.COLOR),this.parameters.vvOpacity&&e.f32(E.r.OPACITYFEATUREATTRIBUTE),(0,v.E)()&&e.vec4u8(E.r.OBJECTANDLAYERIDCOLOR),e}createBufferWriter(){return new M(this._layout,this.parameters)}createGLMaterial(e){return new F(e)}validateParameters(e){"miter"!==e.join&&(e.miterLimit=0),null!=e.markerParameters&&(e.markerScale=e.markerParameters.width/e.width)}}class F extends g.A{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){const t=this._material.parameters.stipplePattern;return this._stipplePattern!==t&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(t,this._stipplePattern)}),this._stipplePattern=t),this.acquireTechnique(P,e)}}class j extends y.S{constructor(){super(...arguments),this.width=0,this.color=c.Un,this.join="miter",this.cap=U.x.BUTT,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1}get transparent(){return this.color[3]<1||null!=this.stipplePattern&&(this.stippleOffColor?.[3]??0)<1}}class M{constructor(e,t){this.vertexBufferLayout=e,this._parameters=t,this.numJoinSubdivisions=0;const i=t.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=i;break;case"round":this.numJoinSubdivisions=b.r+i}}_isClosed(e){return V(this._parameters,e)}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const t=e.get(E.r.POSITION).indices.length/2+1,i=this._isClosed(e);let r=i?2:4;return r+=((i?t:t-1)-(i?0:1))*(2*this.numJoinSubdivisions+4),r+=2,this._parameters.wireframe&&(r=2+4*(r-2)),r}write(e,t,i,r,n,o){const s=ee,l=te,c=ie,d=i.get(E.r.POSITION),p=d.indices,h=d.data.length/3,u=i.get(E.r.DISTANCETOSTART)?.data;p&&p.length!==2*(h-1)&&console.warn("RibbonLineMaterial does not support indices");const f=i.get(E.r.SIZEFEATUREATTRIBUTE)?.data[0]??i.get(E.r.SIZE)?.data[0]??1;let m=[1,1,1,1],g=0;const S=this.vertexBufferLayout.fields.has(E.r.COLORFEATUREATTRIBUTE);S?g=i.get(E.r.COLORFEATUREATTRIBUTE).data[0]:i.has(E.r.COLOR)&&(m=i.get(E.r.COLOR).data);const _=this.vertexBufferLayout.fields.has(E.r.OPACITYFEATUREATTRIBUTE),T=_?i.get(E.r.OPACITYFEATUREATTRIBUTE).data[0]:0,y=new Float32Array(n.buffer),O=(0,v.E)()?new Uint8Array(n.buffer):null,b=this.vertexBufferLayout.stride/4;let A=o*b;const R=A;let x=0;const C=u?(e,t,i)=>x=u[i]:(e,t,i)=>x+=(0,a.j)(e,t),D=(e,t,i,n,o,s,a)=>{if(y[A++]=t[0],y[A++]=t[1],y[A++]=t[2],y[A++]=e[0],y[A++]=e[1],y[A++]=e[2],y[A++]=i[0],y[A++]=i[1],y[A++]=i[2],y[A++]=n,y[A++]=a,y[A++]=o,y[A++]=f,S)y[A++]=g;else{const e=Math.min(4*s,m.length-4);y[A++]=m[e],y[A++]=m[e+1],y[A++]=m[e+2],y[A++]=m[e+3]}_&&(y[A++]=T),(0,v.E)()&&(r&&(O[4*A]=r[0],O[4*A+1]=r[1],O[4*A+2]=r[2],O[4*A+3]=r[3]),A++)};A+=b,(0,a.i)(l,d.data[0],d.data[1],d.data[2]),e&&(0,a.t)(l,l,e);const L=this._isClosed(i);if(L){const t=d.data.length-3;(0,a.i)(s,d.data[t],d.data[t+1],d.data[t+2]),e&&(0,a.t)(s,s,e)}else(0,a.i)(c,d.data[3],d.data[4],d.data[5]),e&&(0,a.t)(c,c,e),D(l,l,c,1,W.LEFT_CAP_START,0,0),D(l,l,c,1,W.RIGHT_CAP_START,0,0),(0,a.c)(s,l),(0,a.c)(l,c);const I=L?0:1,P=L?h:h-1;for(let v=I;v<P;v++){const t=(v+1)%h*3;(0,a.i)(c,d.data[t],d.data[t+1],d.data[t+2]),e&&(0,a.t)(c,c,e),C(s,l,v),D(s,l,c,0,W.LEFT_JOIN_END,v,x),D(s,l,c,0,W.RIGHT_JOIN_END,v,x);const i=this.numJoinSubdivisions;for(let e=0;e<i;++e){const t=(e+1)/(i+1);D(s,l,c,t,W.LEFT_JOIN_END,v,x),D(s,l,c,t,W.RIGHT_JOIN_END,v,x)}D(s,l,c,1,W.LEFT_JOIN_START,v,x),D(s,l,c,1,W.RIGHT_JOIN_START,v,x),(0,a.c)(s,l),(0,a.c)(l,c)}L?((0,a.i)(c,d.data[3],d.data[4],d.data[5]),e&&(0,a.t)(c,c,e),x=C(s,l,P),D(s,l,c,0,W.LEFT_JOIN_END,I,x),D(s,l,c,0,W.RIGHT_JOIN_END,I,x)):(x=C(s,l,P),D(s,l,l,0,W.LEFT_CAP_END,P,x),D(s,l,l,0,W.RIGHT_CAP_END,P,x)),H(y,R+b,y,R,b),A=H(y,A-b,y,A,b),this._parameters.wireframe&&this._addWireframeVertices(n,R,A,b)}_addWireframeVertices(e,t,i,r){const n=new Float32Array(e.buffer,i*Float32Array.BYTES_PER_ELEMENT),o=new Float32Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT,i-t);let s=0;const a=e=>s=H(o,e,n,s,r);for(let l=0;l<o.length-1;l+=2*r)a(l),a(l+2*r),a(l+1*r),a(l+2*r),a(l+1*r),a(l+3*r)}}function H(e,t,i,r,n){for(let o=0;o<n;o++)i[r++]=e[t++];return r}function V(e,t){return!!e.isClosed&&t.get(E.r.POSITION).indices.length>2}const B=(0,l.vt)(),k=(0,l.vt)(),G=(0,l.vt)(),J=(0,l.vt)(),$=(0,l.vt)(),Z=(0,o.r_)(),q=(0,o.r_)(),Y=(0,l.vt)(),Q=(0,l.vt)(),X=(0,p.vt)(),K=(0,p.vt)(),ee=(0,l.vt)(),te=(0,l.vt)(),ie=(0,l.vt)(),re=[(0,o.r_)(),(0,o.r_)(),(0,o.r_)(),(0,o.r_)()],ne=[(0,l.vt)(),(0,l.vt)(),(0,l.vt)(),(0,l.vt)()],oe=(0,h.vt)(),se=(0,h.vt)(),ae=(0,h.vt)(),le=(0,h.vt)()},50125:(e,t,i)=>{i.d(t,{Dt:()=>d,kJ:()=>n,lM:()=>r});var r,n,o=i(35143),s=i(97808),a=i(42717),l=i(6485),c=i(94570);!function(e){e[e.Draped=0]="Draped",e[e.Screen=1]="Screen",e[e.World=2]="World",e[e.COUNT=3]="COUNT"}(r||(r={})),function(e){e[e.Center=0]="Center",e[e.Tip=1]="Tip",e[e.COUNT=2]="COUNT"}(n||(n={}));class d extends c.E{constructor(){super(...arguments),this.space=r.Screen,this.anchor=n.Center,this.occluder=!1,this.hasSlicePlane=!1,this.writeDepth=!1,this.hideOnShortSegments=!1,this.hasCap=!1,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.textureCoordinateType=s.I.None,this.emissionSource=a.ZX.None,this.discardInvisibleFragments=!0,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0,this.objectAndLayerIdColorInstanced=!1}get draped(){return this.space===r.Draped}}(0,o._)([(0,l.W)({count:r.COUNT})],d.prototype,"space",void 0),(0,o._)([(0,l.W)({count:n.COUNT})],d.prototype,"anchor",void 0),(0,o._)([(0,l.W)()],d.prototype,"occluder",void 0),(0,o._)([(0,l.W)()],d.prototype,"hasSlicePlane",void 0),(0,o._)([(0,l.W)()],d.prototype,"writeDepth",void 0),(0,o._)([(0,l.W)()],d.prototype,"hideOnShortSegments",void 0),(0,o._)([(0,l.W)()],d.prototype,"hasCap",void 0),(0,o._)([(0,l.W)()],d.prototype,"hasTip",void 0),(0,o._)([(0,l.W)()],d.prototype,"vvSize",void 0),(0,o._)([(0,l.W)()],d.prototype,"vvColor",void 0),(0,o._)([(0,l.W)()],d.prototype,"vvOpacity",void 0),(0,o._)([(0,l.W)()],d.prototype,"hasOccludees",void 0),(0,o._)([(0,l.W)()],d.prototype,"terrainDepthTest",void 0),(0,o._)([(0,l.W)()],d.prototype,"cullAboveTerrain",void 0)},46259:(e,t,i)=>{i.d(t,{Q:()=>c,x:()=>r});var r,n=i(35143),o=i(97808),s=i(42717),a=i(6485),l=i(94570);!function(e){e[e.BUTT=0]="BUTT",e[e.SQUARE=1]="SQUARE",e[e.ROUND=2]="ROUND",e[e.COUNT=3]="COUNT"}(r||(r={}));class c extends l.E{constructor(){super(...arguments),this.capType=r.BUTT,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.objectAndLayerIdColorInstanced=!1,this.textureCoordinateType=o.I.None,this.emissionSource=s.ZX.None,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0}}(0,n._)([(0,a.W)({count:r.COUNT})],c.prototype,"capType",void 0),(0,n._)([(0,a.W)()],c.prototype,"hasSlicePlane",void 0),(0,n._)([(0,a.W)()],c.prototype,"hasPolygonOffset",void 0),(0,n._)([(0,a.W)()],c.prototype,"writeDepth",void 0),(0,n._)([(0,a.W)()],c.prototype,"draped",void 0),(0,n._)([(0,a.W)()],c.prototype,"stippleEnabled",void 0),(0,n._)([(0,a.W)()],c.prototype,"stippleOffColorEnabled",void 0),(0,n._)([(0,a.W)()],c.prototype,"stipplePreferContinuous",void 0),(0,n._)([(0,a.W)()],c.prototype,"roundJoins",void 0),(0,n._)([(0,a.W)()],c.prototype,"applyMarkerOffset",void 0),(0,n._)([(0,a.W)()],c.prototype,"vvSize",void 0),(0,n._)([(0,a.W)()],c.prototype,"vvColor",void 0),(0,n._)([(0,a.W)()],c.prototype,"vvOpacity",void 0),(0,n._)([(0,a.W)()],c.prototype,"falloffEnabled",void 0),(0,n._)([(0,a.W)()],c.prototype,"innerColorEnabled",void 0),(0,n._)([(0,a.W)()],c.prototype,"hasOccludees",void 0),(0,n._)([(0,a.W)()],c.prototype,"occluder",void 0),(0,n._)([(0,a.W)()],c.prototype,"terrainDepthTest",void 0),(0,n._)([(0,a.W)()],c.prototype,"cullAboveTerrain",void 0),(0,n._)([(0,a.W)()],c.prototype,"wireframe",void 0),(0,n._)([(0,a.W)()],c.prototype,"discardInvisibleFragments",void 0),(0,n._)([(0,a.W)()],c.prototype,"objectAndLayerIdColorInstanced",void 0)}}]);
//# sourceMappingURL=1361.61c00094.chunk.js.map