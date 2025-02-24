"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[3112],{19208:(t,e,n)=>{n.d(e,{T:()=>i,U:()=>o});var r=n(37819);function o(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const o=(0,r.qE)(t,0,l);for(let r=0;r<4;r++)e[n+r]=Math.floor(256*c(o*s[r]))}function i(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=0;for(let r=0;r<4;r++)n+=t[e+r]*a[r];return n}const s=[1,256,65536,16777216],a=[1/256,1/65536,1/16777216,1/4294967296],l=i(new Uint8ClampedArray([255,255,255,255]));function c(t){return t-Math.floor(t)}},32845:(t,e,n)=>{function r(){return new Float32Array(3)}function o(t){const e=new Float32Array(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function i(t,e,n){const r=new Float32Array(3);return r[0]=t,r[1]=e,r[2]=n,r}function s(){return r()}function a(){return i(1,1,1)}function l(){return i(1,0,0)}function c(){return i(0,1,0)}function u(){return i(0,0,1)}n.d(e,{fA:()=>i,o8:()=>o,vt:()=>r});const h=s(),f=a(),d=l(),p=c(),v=u();Object.freeze(Object.defineProperty({__proto__:null,ONES:f,UNIT_X:d,UNIT_Y:p,UNIT_Z:v,ZEROS:h,clone:o,create:r,createView:function(t,e){return new Float32Array(t,e,3)},fromValues:i,ones:a,unitX:l,unitY:c,unitZ:u,zeros:s},Symbol.toStringTag,{value:"Module"}))},70926:(t,e,n)=>{function r(t){return"point"===t.type}n.d(e,{v:()=>r})},8869:(t,e,n)=>{n.d(e,{$2:()=>P,$C:()=>A,Hj:()=>M,Mh:()=>T,W$:()=>O,pW:()=>x,t8:()=>w,vY:()=>b});var r=n(34531),o=n(26895),i=n(30185),s=n(90646),a=n(32345),l=n(6857),c=n(60510),u=n(52476),h=n(23423),f=n(20691),d=n(9440),p=n(88515),v=n(12703),g=n(69913);function O(t,e){if("point"===t.type)return y(t,e,!1);if((0,g.gr)(t))switch(t.type){case"extent":return y(t.center,e,!1);case"polygon":return y(t.centroid,e,!1);case"polyline":return y(m(t),e,!0);case"mesh":return y((0,p.MW)(t.vertexSpace,t.spatialReference)??t.extent.center,e,!1);case"multipoint":return}else switch(t.type){case"extent":return y(function(t){return(0,v.T)(.5*(t.xmax+t.xmin),.5*(t.ymax+t.ymin),null!=t.zmin&&null!=t.zmax&&isFinite(t.zmin)&&isFinite(t.zmax)?.5*(t.zmax+t.zmin):void 0,t.spatialReference)}(t),e,!0);case"polygon":return y(function(t){const e=t.rings[0];if(!e||0===e.length)return null;const n=(0,f.S8)(t.rings,!!t.hasZ);return(0,v.T)(n[0],n[1],n[2],t.spatialReference)}(t),e,!0);case"polyline":return y(m(t),e,!0);case"multipoint":return}}function m(t){const e=t.paths[0];if(!e||0===e.length)return null;const n=(0,d.$H)(e,(0,d.Yl)(e)/2);return(0,v.T)(n[0],n[1],n[2],t.spatialReference)}function y(t,e,n){const r=n?t:(0,g.EL)(t);return e&&t?(0,c.projectPoint)(t,r,e)?r:null:r}function w(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(t){e||(e=(0,h.vt)());const o=t;let i=.5*o.width*(n-1),s=.5*o.height*(n-1);return o.width<1e-7*o.height?i+=s/20:o.height<1e-7*o.width&&(s+=i/20),(0,a.s)(e,o.xmin-i-r,o.ymin-s-r,o.xmax+i+r,o.ymax+s+r),e}return null}function A(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const r=(0,l.o8)(l.Un);return null!=t&&(r[0]=t[0],r[1]=t[1],r[2]=t[2]),null!=e?r[3]=e:null!=t&&t.length>3&&(r[3]=t[3]),n&&(r[0]*=n,r[1]*=n,r[2]*=n,r[3]*=n),r}function x(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.Un,e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;const o=new Array(3);if(null==e||null==n)o[0]=1,o[1]=1,o[2]=1;else{let r,i=0;for(let s=2;s>=0;s--){const a=t[s];let l;const c=null!=a,u=0===s&&!r&&!c,h=n[s];"symbol-value"===a||u?l=0!==h?e[s]/h:1:c&&"proportional"!==a&&isFinite(a)&&(l=0!==h?a/h:1),null!=l&&(o[s]=l,r=l,i=Math.max(i,Math.abs(l)))}for(let t=2;t>=0;t--)null==o[t]?o[t]=r:0===o[t]&&(o[t]=.001*i)}for(let i=2;i>=0;i--)o[i]/=r;return(0,s.ci)(o)}function M(t){return T(function(t){return null!=t.isPrimitive}(t)?[t.width,t.depth,t.height]:t)?null:"Symbol sizes may not be negative values"}function T(t){const e=t=>null==t||t>=0;return Array.isArray(t)?t.every(e):e(t)}function P(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:(0,i.vt)();return t&&(0,o.Qr)(r,r,-t/180*Math.PI),e&&(0,o.eL)(r,r,e/180*Math.PI),n&&(0,o.Z8)(r,r,n/180*Math.PI),r}function b(t,e,n){if(null!=n.minDemResolution)return n.minDemResolution;const o=(0,r.GA)(e),i=(0,u.VL)(t)*o,s=(0,u.yr)(t)*o,a=(0,u.uJ)(t)*(e.isGeographic?1:o);return 0===i&&0===s&&0===a?n.minDemResolutionForPoints:.01*Math.max(i,s,a)}},76898:(t,e,n)=>{n.d(e,{CN:()=>a,Q_:()=>s,ny:()=>l,sZ:()=>c});n(27052);var r=n(19208),o=n(32920),i=n(5719);const s=128,a=.5;function l(t){return"cross"===t||"x"===t}function c(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;const n=u(t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:e*a,arguments.length>3&&void 0!==arguments[3]?arguments[3]:0);return new o.g(n,{mipmap:!1,wrap:{s:i.pF.CLAMP_TO_EDGE,t:i.pF.CLAMP_TO_EDGE},width:e,height:e,components:4,noUnpackFlip:!0,reloadable:!0})}function u(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e*a,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;switch(t){case"circle":default:return function(t,e){const n=t/2-.5;return v(t,d(n,n,e/2))}(e,n);case"square":return function(t,e){return h(t,e,!1)}(e,n);case"cross":return function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return f(t,e,!1,n)}(e,n,r);case"x":return function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return f(t,e,!0,n)}(e,n,r);case"kite":return function(t,e){return h(t,e,!0)}(e,n);case"triangle":return function(t,e){return v(t,p(t/2,e,e/2))}(e,n);case"arrow":return function(t,e){const n=e,r=e/2,o=t/2,i=.8*n,s=d(o,(t-e)/2-i,Math.sqrt(i*i+r*r)),a=p(o,n,r);return v(t,((t,e)=>Math.max(a(t,e),-s(t,e))))}(e,n)}}function h(t,e,n){return n&&(e/=Math.SQRT2),v(t,((r,o)=>{let i=r-.5*t+.25,s=.5*t-o-.75;if(n){const t=(i+s)/Math.SQRT2;s=(s-i)/Math.SQRT2,i=t}return Math.max(Math.abs(i),Math.abs(s))-.5*e}))}function f(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;e-=r,n&&(e*=Math.SQRT2);const o=.5*e;return v(t,((e,i)=>{let s,a=e-.5*t,l=.5*t-i-1;if(n){const t=(a+l)/Math.SQRT2;l=(l-a)/Math.SQRT2,a=t}return a=Math.abs(a),l=Math.abs(l),s=a>l?a>o?Math.sqrt((a-o)*(a-o)+l*l):l:l>o?Math.sqrt(a*a+(l-o)*(l-o)):a,s-=r/2,s}))}function d(t,e,n){return(r,o)=>{const i=r-t,s=o-e;return Math.sqrt(i*i+s*s)-n}}function p(t,e,n){const r=Math.sqrt(e*e+n*n);return(o,i)=>{const s=Math.abs(o-t)-n,a=i-t+e/2+.75,l=(e*s+n*a)/r,c=-a;return Math.max(l,c)}}function v(t,e){const n=new Uint8Array(4*t*t);for(let o=0;o<t;o++)for(let i=0;i<t;i++){const s=i+t*o;let a=e(i,o);a=a/t+.5,(0,r.U)(a,n,4*s)}return n}},79222:(t,e,n)=>{n.d(e,{K:()=>i});var r=n(56230),o=n(14209);function i(t){t.uniforms.add(new r.e("alignPixelEnabled",((t,e)=>e.alignPixelEnabled))),t.code.add(o.H`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),t.code.add(o.H`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}},99520:(t,e,n)=>{n.d(e,{Q:()=>h,R:()=>u});var r=n(73356),o=n(6359),i=n(29191),s=n(74368),a=n(37580),l=n(14209),c=n(64216);const u=.5;function h(t,e){t.include(o.Y6),t.attributes.add(c.r.POSITION,"vec3"),t.attributes.add(c.r.NORMAL,"vec3"),t.attributes.add(c.r.CENTEROFFSETANDDISTANCE,"vec4");const n=t.vertex;(0,i.NB)(n,e),(0,i.yu)(n,e),n.uniforms.add(new s.E("viewport",((t,e)=>e.camera.fullViewport)),new a.m("polygonOffset",(t=>t.shaderPolygonOffset)),new a.m("cameraGroundRelative",((t,e)=>e.camera.aboveGround?1:-1))),e.hasVerticalOffset&&(0,r.V)(n),n.constants.add("smallOffsetAngle","float",.984807753012208),n.code.add(l.H`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),n.code.add(l.H`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${e.terrainDepthTest?l.H.float(0):l.H`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),e.draped&&!e.hasVerticalOffset||(0,i.S7)(n),e.draped||(n.uniforms.add(new a.m("perDistancePixelRatio",((t,e)=>Math.tan(e.camera.fovY/2)/(e.camera.fullViewport[2]/2)))),n.code.add(l.H`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${l.H.float(u)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),e.screenCenterOffsetUnitsEnabled&&(0,i.Nz)(n),e.hasScreenSizePerspective&&(0,o.OH)(n),n.code.add(l.H`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${e.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${e.hasScreenSizePerspective&&(e.hasVerticalOffset||e.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${e.hasVerticalOffset?e.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${e.hasVerticalOffset?l.H`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled?"":l.H`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${e.screenCenterOffsetUnitsEnabled?e.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${e.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}},719:(t,e,n)=>{var r;n.d(e,{D:()=>r}),function(t){t[t.Occluded=0]="Occluded",t[t.NotOccluded=1]="NotOccluded",t[t.Both=2]="Both",t[t.COUNT=3]="COUNT"}(r||(r={}))},59516:(t,e,n)=>{n.d(e,{y:()=>c});var r=n(79222),o=n(719),i=n(74368),s=n(37580),a=n(14209),l=n(23133);function c(t){t.vertex.uniforms.add(new s.m("renderTransparentlyOccludedHUD",((t,e)=>e.hudRenderStyle===o.D.Occluded?1:e.hudRenderStyle===o.D.NotOccluded?0:.75)),new i.E("viewport",((t,e)=>e.camera.fullViewport)),new l.N("hudVisibilityTexture",((t,e)=>e.hudVisibility?.getTexture()))),t.vertex.include(r.K),t.vertex.code.add(a.H`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}},18735:(t,e,n)=>{n.d(e,{W:()=>o});var r=n(14209);function o(t){t.code.add(r.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}`),t.code.add(r.H`const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`),t.code.add(r.H`const vec4 uninterpolatedRGBAToFloatFactors = vec4(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBAToFloat(vec4 rgba) {
return (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;
}`)}},35029:(t,e,n)=>{n.d(e,{V:()=>i});var r=n(29337),o=n(51203);class i extends r.n{constructor(t,e){super(t,"vec4",o.c.Draw,((n,r,o)=>n.setUniform4fv(t,e(r,o))))}}},12827:(t,e,n)=>{n.d(e,{zC:()=>rt,C1:()=>T,EE:()=>W,YG:()=>Q,nW:()=>Z,td:()=>C,_B:()=>et,Nq:()=>K,DJ:()=>$,uX:()=>q,Z8:()=>tt,CM:()=>X,Gj:()=>Y,Ho:()=>B,Nb:()=>J,Xl:()=>it,xh:()=>nt});var r,o=n(68358),i=n(32845),s=n(90646),a=n(71337),l=n(60336),c=n(87934),u=n(7445),h=n(61459),f=n(56254);!function(t){t.length=function(t,e){const n=t[e],r=t[e+1],o=t[e+2];return Math.sqrt(n*n+r*r+o*o)},t.normalize=function(t,e){const n=t[e],r=t[e+1],o=t[e+2],i=1/Math.sqrt(n*n+r*r+o*o);t[e]*=i,t[e+1]*=i,t[e+2]*=i},t.scale=function(t,e,n){t[e]*=n,t[e+1]*=n,t[e+2]*=n},t.add=function(t,e,n,r,o){let i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e;(o=o||t)[i]=t[e]+n[r],o[i+1]=t[e+1]+n[r+1],o[i+2]=t[e+2]+n[r+2]},t.subtract=function(t,e,n,r,o){let i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e;(o=o||t)[i]=t[e]-n[r],o[i+1]=t[e+1]-n[r+1],o[i+2]=t[e+2]-n[r+2]}}(r||(r={}));var d=n(63132),p=n(57665),v=n(96960),g=n(64216);const O=r,m=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],y=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],w=[0,0,1,0,1,1,0,1],A=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],x=new Array(36);for(let lt=0;lt<6;lt++)for(let t=0;t<6;t++)x[6*lt+t]=lt;const M=new Array(36);for(let lt=0;lt<6;lt++)M[6*lt]=0,M[6*lt+1]=1,M[6*lt+2]=2,M[6*lt+3]=2,M[6*lt+4]=3,M[6*lt+5]=0;function T(t,e){Array.isArray(e)||(e=[e,e,e]);const n=new Array(24);for(let r=0;r<8;r++)n[3*r]=m[r][0]*e[0],n[3*r+1]=m[r][1]*e[1],n[3*r+2]=m[r][2]*e[2];return new p.V(t,[[g.r.POSITION,new f.n(n,A,3,!0)],[g.r.NORMAL,new f.n(y,x,3)],[g.r.UV0,new f.n(w,M,2)]])}const P=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],b=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],S=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],R=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function C(t,e){Array.isArray(e)||(e=[e,e,e]);const n=new Array(18);for(let r=0;r<6;r++)n[3*r]=P[r][0]*e[0],n[3*r+1]=P[r][1]*e[1],n[3*r+2]=P[r][2]*e[2];return new p.V(t,[[g.r.POSITION,new f.n(n,S,3,!0)],[g.r.NORMAL,new f.n(b,R,3)]])}const I=(0,i.fA)(-.5,0,-.5),_=(0,i.fA)(.5,0,-.5),L=(0,i.fA)(0,0,.5),N=(0,i.fA)(0,.5,0),V=(0,i.vt)(),E=(0,i.vt)(),z=(0,i.vt)(),D=(0,i.vt)(),U=(0,i.vt)();(0,o.d)(V,I,N),(0,o.d)(E,I,_),(0,o.e)(z,V,E),(0,o.n)(z,z),(0,o.d)(V,_,N),(0,o.d)(E,_,L),(0,o.e)(D,V,E),(0,o.n)(D,D),(0,o.d)(V,L,N),(0,o.d)(E,L,I),(0,o.e)(U,V,E),(0,o.n)(U,U);const H=[I,_,L,N],F=[0,-1,0,z[0],z[1],z[2],D[0],D[1],D[2],U[0],U[1],U[2]],G=[0,1,2,3,1,0,3,2,1,3,0,2],j=[0,0,0,1,1,1,2,2,2,3,3,3];function B(t,e){Array.isArray(e)||(e=[e,e,e]);const n=new Array(12);for(let r=0;r<4;r++)n[3*r]=H[r][0]*e[0],n[3*r+1]=H[r][1]*e[1],n[3*r+2]=H[r][2]*e[2];return new p.V(t,[[g.r.POSITION,new f.n(n,G,3,!0)],[g.r.NORMAL,new f.n(F,j,3)]])}function X(t,e,n,r){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{uv:!0};const i=-Math.PI,s=2*Math.PI,a=-Math.PI/2,u=Math.PI,h=Math.max(3,Math.floor(n)),d=Math.max(2,Math.floor(r)),v=(h+1)*(d+1),O=(0,l.oe)(3*v),m=(0,l.oe)(3*v),y=(0,l.oe)(2*v),w=[];let A=0;for(let l=0;l<=d;l++){const t=[],n=l/d,r=a+n*u,o=Math.cos(r);for(let a=0;a<=h;a++){const l=a/h,c=i+l*s,u=Math.cos(c)*o,f=Math.sin(r),d=-Math.sin(c)*o;O[3*A]=u*e,O[3*A+1]=f*e,O[3*A+2]=d*e,m[3*A]=u,m[3*A+1]=f,m[3*A+2]=d,y[2*A]=l,y[2*A+1]=n,t.push(A),++A}w.push(t)}const x=new Array;for(let l=0;l<d;l++)for(let t=0;t<h;t++){const e=w[l][t],n=w[l][t+1],r=w[l+1][t+1],o=w[l+1][t];0===l?(x.push(e),x.push(r),x.push(o)):l===d-1?(x.push(e),x.push(n),x.push(r)):(x.push(e),x.push(n),x.push(r),x.push(r),x.push(o),x.push(e))}const M=[[g.r.POSITION,new f.n(O,x,3,!0)],[g.r.NORMAL,new f.n(m,x,3,!0)]];return o.uv&&M.push([g.r.UV0,new f.n(y,x,2,!0)]),o.offset&&(M[0][0]=g.r.OFFSET,M.push([g.r.POSITION,new f.n(Float64Array.from(o.offset),(0,c.EH)(x.length),3,!0)])),new p.V(t,M)}function q(t,e,n,r){const o=function(t,e,n){const r=t;let o,i;if(n)o=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],i=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];else{const t=r*(1+Math.sqrt(5))/2;o=[-r,t,0,r,t,0,-r,-t,0,r,-t,0,0,-r,t,0,r,t,0,-r,-t,0,r,-t,t,0,-r,t,0,r,-t,0,-r,-t,0,r],i=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1]}for(let l=0;l<o.length;l+=3)O.scale(o,l,t/O.length(o,l));let s={};function a(e,n){e>n&&([e,n]=[n,e]);const r=e.toString()+"."+n.toString();if(s[r])return s[r];let i=o.length;return o.length+=3,O.add(o,3*e,o,3*n,o,i),O.scale(o,i,t/O.length(o,i)),i/=3,s[r]=i,i}for(let l=0;l<e;l++){const t=i.length,e=new Array(4*t);for(let n=0;n<t;n+=3){const t=i[n],r=i[n+1],o=i[n+2],s=a(t,r),l=a(r,o),c=a(o,t),u=4*n;e[u]=t,e[u+1]=s,e[u+2]=c,e[u+3]=r,e[u+4]=l,e[u+5]=s,e[u+6]=o,e[u+7]=c,e[u+8]=l,e[u+9]=s,e[u+10]=l,e[u+11]=c}i=e,s={}}const c=(0,l.Wz)(o);for(let l=0;l<c.length;l+=3)O.normalize(c,l);return[[g.r.POSITION,new f.n((0,l.Wz)(o),i,3,!0)],[g.r.NORMAL,new f.n(c,i,3,!0)]]}(e,n,r);return new p.V(t,o)}function $(t,e,n,r,o,i,a,l,u){let h=arguments.length>9&&void 0!==arguments[9]?arguments[9]:null;const v=n?(0,s.o8)(n):(0,s.vt)(),O=e?(0,s.o8)(e):(0,s.fA)(0,0,1),m=r?[255*r[0],255*r[1],255*r[2],r.length>3?255*r[3]:255]:[255,255,255,255],y=null!=i&&2===i.length?i:[1,1],w=null!=o?[o]:[0],A=(0,c.EH)(1),x=[[g.r.POSITION,new f.n(v,A,3,!0)],[g.r.NORMAL,new f.n(O,A,3,!0)],[g.r.COLOR,new f.n(m,A,4,!0)],[g.r.SIZE,new f.n(y,A,2)],[g.r.ROTATION,new f.n(w,A,1,!0)]];if(l&&x.push([g.r.UV0,new f.n(l,A,l.length)]),null!=a&&(a=[a[0],a[1],a[2],a[3]],x.push([g.r.CENTEROFFSETANDDISTANCE,new f.n(a,A,4)])),u){const t=[u[0],u[1],u[2],u[3]];x.push([g.r.FEATUREATTRIBUTE,new f.n(t,A,4)])}return new p.V(t,x,null,d.X.Point,h)}const k=[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0]];function Y(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k;const n=new Array(12);for(let s=0;s<4;s++)for(let t=0;t<3;t++)n[3*s+t]=e[s][t];const r=[0,1,2,2,3,0],o=[0,0,0,0,0,0],i=[[g.r.POSITION,new f.n(n,r,3,!0)],[g.r.NORMAL,new f.n([0,0,1],o,3,!0)],[g.r.UV0,new f.n([0,0,1,0,1,1,0,1],r,2,!0)],[g.r.COLOR,new f.n([255,255,255,255],o,4,!0)]];return new p.V(t,i)}function Q(t,e,n,r){let o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],s=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],a=0;const c=e,u=t;let h=(0,i.fA)(0,a,0),d=(0,i.fA)(0,a+u,0),p=(0,i.fA)(0,-1,0),v=(0,i.fA)(0,1,0);r&&(a=u,d=(0,i.fA)(0,0,0),h=(0,i.fA)(0,a,0),p=(0,i.fA)(0,1,0),v=(0,i.fA)(0,-1,0));const O=[d,h],m=[p,v],y=n+2,w=Math.sqrt(u*u+c*c);if(r)for(let l=n-1;l>=0;l--){const t=l*(2*Math.PI/n),e=(0,i.fA)(Math.cos(t)*c,a,Math.sin(t)*c);O.push(e);const r=(0,i.fA)(u*Math.cos(t)/w,-c/w,u*Math.sin(t)/w);m.push(r)}else for(let l=0;l<n;l++){const t=l*(2*Math.PI/n),e=(0,i.fA)(Math.cos(t)*c,a,Math.sin(t)*c);O.push(e);const r=(0,i.fA)(u*Math.cos(t)/w,c/w,u*Math.sin(t)/w);m.push(r)}const A=new Array,x=new Array;if(o){for(let t=3;t<O.length;t++)A.push(1),A.push(t-1),A.push(t),x.push(0),x.push(0),x.push(0);A.push(O.length-1),A.push(2),A.push(1),x.push(0),x.push(0),x.push(0)}if(s){for(let t=3;t<O.length;t++)A.push(t),A.push(t-1),A.push(0),x.push(t),x.push(t-1),x.push(1);A.push(0),A.push(2),A.push(O.length-1),x.push(1),x.push(2),x.push(m.length-1)}const M=(0,l.oe)(3*y);for(let i=0;i<y;i++)M[3*i]=O[i][0],M[3*i+1]=O[i][1],M[3*i+2]=O[i][2];const T=(0,l.oe)(3*y);for(let i=0;i<y;i++)T[3*i]=m[i][0],T[3*i+1]=m[i][1],T[3*i+2]=m[i][2];return[[g.r.POSITION,new f.n(M,A,3,!0)],[g.r.NORMAL,new f.n(T,x,3,!0)]]}function W(t,e,n,r,o){let i=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],s=!(arguments.length>6&&void 0!==arguments[6])||arguments[6];return new p.V(t,Q(e,n,r,o,i,s))}function Z(t,e,n,r,s,a,c){const u=s?(0,i.o8)(s):(0,i.fA)(1,0,0),h=a?(0,i.o8)(a):(0,i.fA)(0,0,0);c??=!0;const d=(0,i.vt)();(0,o.n)(d,u);const v=(0,i.vt)();(0,o.h)(v,d,Math.abs(e));const O=(0,i.vt)();(0,o.h)(O,v,-.5),(0,o.g)(O,O,h);const m=(0,i.fA)(0,1,0);Math.abs(1-(0,o.f)(d,m))<.2&&(0,o.i)(m,0,0,1);const y=(0,i.vt)();(0,o.e)(y,d,m),(0,o.n)(y,y),(0,o.e)(m,y,d);const w=2*r+(c?2:0),A=r+(c?2:0),x=(0,l.oe)(3*w),M=(0,l.oe)(3*A),T=(0,l.oe)(2*w),P=new Array(3*r*(c?4:2)),b=new Array(3*r*(c?4:2));c&&(x[3*(w-2)]=O[0],x[3*(w-2)+1]=O[1],x[3*(w-2)+2]=O[2],T[2*(w-2)]=0,T[2*(w-2)+1]=0,x[3*(w-1)]=x[3*(w-2)]+v[0],x[3*(w-1)+1]=x[3*(w-2)+1]+v[1],x[3*(w-1)+2]=x[3*(w-2)+2]+v[2],T[2*(w-1)]=1,T[2*(w-1)+1]=1,M[3*(A-2)]=-d[0],M[3*(A-2)+1]=-d[1],M[3*(A-2)+2]=-d[2],M[3*(A-1)]=d[0],M[3*(A-1)+1]=d[1],M[3*(A-1)+2]=d[2]);const S=(t,e,n)=>{P[t]=e,b[t]=n};let R=0;const C=(0,i.vt)(),I=(0,i.vt)();for(let i=0;i<r;i++){const t=i*(2*Math.PI/r);(0,o.h)(C,m,Math.sin(t)),(0,o.h)(I,y,Math.cos(t)),(0,o.g)(C,C,I),M[3*i]=C[0],M[3*i+1]=C[1],M[3*i+2]=C[2],(0,o.h)(C,C,n),(0,o.g)(C,C,O),x[3*i]=C[0],x[3*i+1]=C[1],x[3*i+2]=C[2],T[2*i]=i/r,T[2*i+1]=0,x[3*(i+r)]=x[3*i]+v[0],x[3*(i+r)+1]=x[3*i+1]+v[1],x[3*(i+r)+2]=x[3*i+2]+v[2],T[2*(i+r)]=i/r,T[2*i+1]=1;const e=(i+1)%r;S(R++,i,i),S(R++,i+r,i),S(R++,e,e),S(R++,e,e),S(R++,i+r,i),S(R++,e+r,e)}if(c){for(let t=0;t<r;t++){const e=(t+1)%r;S(R++,w-2,A-2),S(R++,t,A-2),S(R++,e,A-2)}for(let t=0;t<r;t++){const e=(t+1)%r;S(R++,t+r,A-1),S(R++,w-1,A-1),S(R++,e+r,A-1)}}const _=[[g.r.POSITION,new f.n(x,P,3,!0)],[g.r.NORMAL,new f.n(M,b,3,!0)],[g.r.UV0,new f.n(T,P,2,!0)]];return new p.V(t,_)}function J(t,e,n,r,o,i){r=r||10,o=null==o||o,(0,v.vA)(e.length>1);const s=[],a=[];for(let l=0;l<r;l++){s.push([0,-l-1,-(l+1)%r-1]);const t=l/r*2*Math.PI;a.push([Math.cos(t)*n,Math.sin(t)*n])}return K(t,a,e,[[0,0,0]],s,o,i)}function K(t,e,n,r,a,c){let d=arguments.length>6&&void 0!==arguments[6]?arguments[6]:(0,i.fA)(0,0,0);const v=e.length,O=(0,l.oe)(n.length*v*3+(6*r.length||0)),m=(0,l.oe)(n.length*v*3+(r?6:0)),y=new Array,w=new Array;let A=0,x=0;const M=(0,s.vt)(),T=(0,s.vt)(),P=(0,s.vt)(),b=(0,s.vt)(),S=(0,s.vt)(),R=(0,s.vt)(),C=(0,s.vt)(),I=(0,s.vt)(),_=(0,s.vt)(),L=(0,s.vt)(),N=(0,s.vt)(),V=(0,s.vt)(),E=(0,s.vt)(),z=(0,u.vt)();(0,o.i)(_,0,1,0),(0,o.d)(T,n[1],n[0]),(0,o.n)(T,T),c?((0,o.g)(I,n[0],d),(0,o.n)(P,I)):(0,o.i)(P,0,0,1),it(T,P,_,_,S,P,st),(0,o.c)(b,P),(0,o.c)(V,S);for(let i=0;i<r.length;i++)(0,o.h)(R,S,r[i][0]),(0,o.h)(I,P,r[i][2]),(0,o.g)(R,R,I),(0,o.g)(R,R,n[0]),O[A++]=R[0],O[A++]=R[1],O[A++]=R[2];m[x++]=-T[0],m[x++]=-T[1],m[x++]=-T[2];for(let o=0;o<a.length;o++)y.push(a[o][0]>0?a[o][0]:-a[o][0]-1+r.length),y.push(a[o][1]>0?a[o][1]:-a[o][1]-1+r.length),y.push(a[o][2]>0?a[o][2]:-a[o][2]-1+r.length),w.push(0),w.push(0),w.push(0);let D=r.length;const U=r.length-1;for(let i=0;i<n.length;i++){let t=!1;i>0&&((0,o.c)(M,T),i<n.length-1?((0,o.d)(T,n[i+1],n[i]),(0,o.n)(T,T)):t=!0,(0,o.g)(L,M,T),(0,o.n)(L,L),(0,o.g)(N,n[i-1],b),(0,u.O_)(n[i],L,z),(0,u.Ui)(z,(0,h.LV)(N,M),I)?((0,o.d)(I,I,n[i]),(0,o.n)(P,I),(0,o.e)(S,L,P),(0,o.n)(S,S)):it(L,b,V,_,S,P,st),(0,o.c)(b,P),(0,o.c)(V,S)),c&&((0,o.g)(I,n[i],d),(0,o.n)(E,I));for(let r=0;r<v;r++)if((0,o.h)(R,S,e[r][0]),(0,o.h)(I,P,e[r][1]),(0,o.g)(R,R,I),(0,o.n)(C,R),m[x++]=C[0],m[x++]=C[1],m[x++]=C[2],(0,o.g)(R,R,n[i]),O[A++]=R[0],O[A++]=R[1],O[A++]=R[2],!t){const t=(r+1)%v;y.push(D+r),y.push(D+v+r),y.push(D+t),y.push(D+t),y.push(D+v+r),y.push(D+v+t);for(let e=0;e<6;e++){const t=y.length-6;w.push(y[t+e]-U)}}D+=v}const H=n[n.length-1];for(let i=0;i<r.length;i++)(0,o.h)(R,S,r[i][0]),(0,o.h)(I,P,r[i][1]),(0,o.g)(R,R,I),(0,o.g)(R,R,H),O[A++]=R[0],O[A++]=R[1],O[A++]=R[2];const F=x/3;m[x++]=T[0],m[x++]=T[1],m[x++]=T[2];const G=D-v;for(let o=0;o<a.length;o++)y.push(a[o][0]>=0?D+a[o][0]:-a[o][0]-1+G),y.push(a[o][2]>=0?D+a[o][2]:-a[o][2]-1+G),y.push(a[o][1]>=0?D+a[o][1]:-a[o][1]-1+G),w.push(F),w.push(F),w.push(F);const j=[[g.r.POSITION,new f.n(O,y,3,!0)],[g.r.NORMAL,new f.n(m,w,3,!0)]];return new p.V(t,j)}function tt(t,e,n,r){(0,v.vA)(e.length>1,"createPolylineGeometry(): polyline needs at least 2 points"),(0,v.vA)(3===e[0].length,"createPolylineGeometry(): malformed vertex"),(0,v.vA)(null==n||n.length===e.length,"createPolylineGeometry: need same number of points and normals"),(0,v.vA)(null==n||3===n[0].length,"createPolylineGeometry(): malformed normal");const o=(0,a.jh)(3*e.length),i=new Array(2*(e.length-1));let s=0,u=0;for(let a=0;a<e.length;a++){for(let t=0;t<3;t++)o[s++]=e[a][t];a>0&&(i[u++]=a-1,i[u++]=a)}const h=[[g.r.POSITION,new f.n(o,i,3,!0)]];if(n){const t=(0,l.oe)(3*n.length);let r=0;for(let o=0;o<e.length;o++)for(let e=0;e<3;e++)t[r++]=n[o][e];h.push([g.r.NORMAL,new f.n(t,i,3,!0)])}return r&&h.push([g.r.COLOR,new f.n(r,(0,c.tM)(r.length/4),4)]),new p.V(t,h,null,d.X.Line)}function et(t,e,n,r,o){let i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;const s=new Array(18),a=[[-n,i,o/2],[r,i,o/2],[0,e+i,o/2],[-n,i,-o/2],[r,i,-o/2],[0,e+i,-o/2]];for(let l=0;l<6;l++)s[3*l]=a[l][0],s[3*l+1]=a[l][1],s[3*l+2]=a[l][2];return new p.V(t,[[g.r.POSITION,new f.n(s,[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5],3,!0)]])}function nt(t,e){const n=t.getMutableAttribute(g.r.POSITION).data;for(let r=0;r<n.length;r+=3){const t=n[r],i=n[r+1],s=n[r+2];(0,o.i)(at,t,i,s),(0,o.t)(at,at,e),n[r]=at[0],n[r+1]=at[1],n[r+2]=at[2]}}function rt(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;const n=t.attributes,r=n.get(g.r.POSITION).data,o=n.get(g.r.NORMAL).data;if(o){const t=e.getMutableAttribute(g.r.NORMAL).data;for(let e=0;e<o.length;e+=3){const n=o[e+1];t[e+1]=-o[e+2],t[e+2]=n}}if(r){const t=e.getMutableAttribute(g.r.POSITION).data;for(let e=0;e<r.length;e+=3){const n=r[e+1];t[e+1]=-r[e+2],t[e+2]=n}}}function ot(t,e,n,r,i){return!(Math.abs((0,o.f)(e,t))>i)&&((0,o.e)(n,t,e),(0,o.n)(n,n),(0,o.e)(r,n,t),(0,o.n)(r,r),!0)}function it(t,e,n,r,o,i,s){return ot(t,e,o,i,s)||ot(t,n,o,i,s)||ot(t,r,o,i,s)}const st=.99619469809,at=(0,s.vt)()},41106:(t,e,n)=>{n.d(e,{G7:()=>x,hz:()=>m});var r=n(26895),o=n(30185),i=n(68358),s=n(90646),a=n(32345),l=n(6857),c=n(61459),u=n(40507),h=n(95902),f=n(34915),d=n(22181),p=n(17792);const v=1e-5;class g{constructor(t){this.options=new h.H6,this._results=new y,this.transform=new p.dg,this.tolerance=v,this.verticalOffset=null,this._ray=(0,c.vt)(),this._rayEnd=(0,s.vt)(),this._rayBeginTransformed=(0,s.vt)(),this._rayEndTransformed=(0,s.vt)(),this.viewingMode=t??u.RT.Global}get results(){return this._results}get ray(){return this._ray}get rayBegin(){return this._ray.origin}get rayEnd(){return this._rayEnd}reset(t,e,n){this.resetWithRay((0,c.Cr)(t,e,this._ray),n)}resetWithRay(t,e){this.camera=e,t!==this._ray&&(0,c.C)(t,this._ray),0!==this.options.verticalOffset?this.viewingMode===u.RT.Local?this._ray.origin[2]-=this.options.verticalOffset:this.verticalOffset=this.options.verticalOffset:this.verticalOffset=null,(0,i.g)(this._rayEnd,this._ray.origin,this._ray.direction),this._results.init(this._ray)}intersect(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;this.point=e,this.filterPredicate=r,this.tolerance=n??v;const i=(0,p.ou)(this.verticalOffset);if(t&&t.length>0){const e=o?t=>{o(t)&&this.intersectObject(t)}:t=>{this.intersectObject(t)};for(const n of t){const t=n.getSpatialQueryAccelerator?.();null!=t?(null!=i?t.forEachAlongRayWithVerticalOffset(this._ray.origin,this._ray.direction,e,i):t.forEachAlongRay(this._ray.origin,this._ray.direction,e),this.options.selectionMode&&this.options.hud&&t.forEachDegenerateObject(e)):n.objects.forAll((t=>e(t)))}}this.sortResults()}intersectObject(t){const e=t.geometries;if(!e)return;const n=t.effectiveTransformation,r=(0,p.ou)(this.verticalOffset);for(const s of e){if(!s.visible)continue;const{material:e,id:a}=s;if(!e.visible)continue;this.transform.setAndInvalidateLazyTransforms(n,s.transformation),(0,i.t)(this._rayBeginTransformed,this.rayBegin,this.transform.inverse),(0,i.t)(this._rayEndTransformed,this.rayEnd,this.transform.inverse);const l=this.transform.transform;null!=r&&(r.objectTransform=this.transform),e.intersect(s,this.transform.transform,this,this._rayBeginTransformed,this._rayEndTransformed,((e,n,r,i,s,c)=>{if(e>=0){if(null!=this.filterPredicate&&!this.filterPredicate(this._ray.origin,this._rayEnd,e))return;const u=i?this._results.hud:this._results,d=i?i=>{const l=new f.B$(t,a,r,c);i.set(h.dz.HUD,l,e,n,o.zK,s)}:o=>o.set(h.dz.OBJECT,{object:t,geometryId:a,triangleNr:r},e,n,l,s);if((null==u.min.drapedLayerOrder||s>=u.min.drapedLayerOrder)&&(null==u.min.dist||e<u.min.dist)&&d(u.min),this.options.store!==h.oH.MIN&&(null==u.max.drapedLayerOrder||s<u.max.drapedLayerOrder)&&(null==u.max.dist||e>u.max.dist)&&d(u.max),this.options.store===h.oH.ALL)if(i){const t=new A(this._ray);d(t),this._results.hud.all.push(t)}else{const t=new w(this._ray);d(t),this._results.all.push(t)}}}))}}sortResults(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._results.all).sort(((t,e)=>t.dist!==e.dist?(t.dist??0)-(e.dist??0):t.drapedLayerOrder!==e.drapedLayerOrder?O(t.drapedLayerOrder,e.drapedLayerOrder):O(t.drapedLayerGraphicOrder,e.drapedLayerGraphicOrder)))}}function O(t,e){return(e??-Number.MAX_VALUE)-(t??-Number.MAX_VALUE)}function m(t){return new g(t)}class y{constructor(){this.min=new w((0,c.vt)()),this.max=new w((0,c.vt)()),this.hud={min:new A((0,c.vt)()),max:new A((0,c.vt)()),all:new Array},this.ground=new w((0,c.vt)()),this.all=[]}init(t){this.min.init(t),this.max.init(t),this.ground.init(t),this.all.length=0,this.hud.min.init(t),this.hud.max.init(t),this.hud.all.length=0}}class w{get ray(){return this._ray}get distanceInRenderSpace(){return null!=this.dist?((0,i.h)(M,this.ray.direction,this.dist),(0,i.l)(M)):null}getIntersectionPoint(t){return!!(0,d.i3)(this)&&((0,i.h)(M,this.ray.direction,this.dist),(0,i.g)(t,this.ray.origin,M),!0)}getTransformedNormal(t){return(0,i.c)(T,this.normal),T[3]=0,(0,a.t)(T,T,this.transformation),(0,i.c)(t,T),(0,i.n)(t,t)}constructor(t){this.intersector=h.dz.OBJECT,this.normal=(0,s.vt)(),this.transformation=(0,o.vt)(),this._ray=(0,c.vt)(),this.init(t)}init(t){this.dist=null,this.target=null,this.drapedLayerOrder=null,this.drapedLayerGraphicOrder=null,this.intersector=h.dz.OBJECT,(0,c.C)(t,this._ray)}set(t,e,n,a,l,c,u){this.intersector=t,this.dist=n,(0,i.c)(this.normal,a??s.Cb),(0,r.C)(this.transformation,l??o.zK),this.target=e,this.drapedLayerOrder=c,this.drapedLayerGraphicOrder=u}copy(t){(0,c.C)(t.ray,this._ray),this.intersector=t.intersector,this.dist=t.dist,this.target=t.target,this.drapedLayerOrder=t.drapedLayerOrder,this.drapedLayerGraphicOrder=t.drapedLayerGraphicOrder,(0,i.c)(this.normal,t.normal),(0,r.C)(this.transformation,t.transformation)}}class A extends w{constructor(){super(...arguments),this.intersector=h.dz.HUD}}function x(t){return new w(t)}const M=(0,s.vt)(),T=(0,l.vt)()},95902:(t,e,n)=>{var r,o;n.d(e,{H6:()=>i,dz:()=>r,oH:()=>o}),function(t){t[t.OBJECT=0]="OBJECT",t[t.HUD=1]="HUD",t[t.TERRAIN=2]="TERRAIN",t[t.OVERLAY=3]="OVERLAY",t[t.I3S=4]="I3S",t[t.PCL=5]="PCL",t[t.LOD=6]="LOD",t[t.VOXEL=7]="VOXEL",t[t.TILES3D=8]="TILES3D"}(r||(r={}));class i{constructor(){this.verticalOffset=0,this.selectionMode=!1,this.hud=!0,this.selectOpaqueTerrainOnly=!0,this.invisibleTerrain=!1,this.backfacesTerrain=!0,this.isFiltered=!1,this.filteredLayerUids=[],this.store=o.ALL,this.normalRequired=!0,this.excludeLabels=!1}}!function(t){t[t.MIN=0]="MIN",t[t.MINMAX=1]="MINMAX",t[t.ALL=2]="ALL"}(o||(o={}))},34915:(t,e,n)=>{n.d(e,{B$:()=>i,HE:()=>s,R6:()=>a});var r=n(90646);class o{constructor(t,e,n){this.object=t,this.geometryId=e,this.triangleNr=n}}class i extends o{constructor(t,e,n,o){super(t,e,n),this.center=null!=o?(0,r.o8)(o):null}}class s{constructor(t){this.layerUid=t}}class a extends s{constructor(t,e){super(t),this.graphicUid=e}}},22181:(t,e,n)=>{n.d(e,{i3:()=>o});n(68358);var r=n(90646);n(67812),n(95902);function o(t){return null!=t?.dist}(0,r.vt)()},65657:(t,e,n)=>{n.d(e,{Ci:()=>i,PC:()=>s,Vk:()=>a});var r=n(90646),o=n(93141);function i(t,e){return null==t&&(t=[]),t.push(e),t}function s(t,e){if(null==t)return null;const n=t.filter((t=>t!==e));return 0===n.length?null:n}function a(t,e,n,r,i){l[0]=t.get(e,0),l[1]=t.get(e,1),l[2]=t.get(e,2),(0,o.jS)(l,c,3),n.set(i,0,c[0]),r.set(i,0,c[1]),n.set(i,1,c[2]),r.set(i,1,c[3]),n.set(i,2,c[4]),r.set(i,2,c[5])}const l=(0,r.vt)(),c=new Float32Array(6)}}]);
//# sourceMappingURL=3112.a44e257f.chunk.js.map