"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[9628],{37923:(e,t,r)=>{r.d(t,{C:()=>_,b:()=>m});var i=r(34981),o=r(26917),n=r(59395),s=r(90080),a=r(54478),l=r(94192),c=r(66763),h=r(80883),d=r(42451),u=r(58350),g=r(64839),p=r(32307),f=r(66470),v=r(91911);function m(e){const t=new p.N5,{vertex:r,fragment:m,attributes:_,varyings:y}=t;(0,d.NB)(r,e),t.include(n.d,e),t.include(a.c,e),t.include(c.A,e),t.include(s.g,e),t.include(o.HQ,e),t.include(v.z,e),_.add(f.r.POSITION,"vec3"),e.vvColor&&_.add(f.r.COLORFEATUREATTRIBUTE,"float"),y.add("vColor","vec4"),y.add("vpos","vec3");const x=e.terrainDepthTest&&e.output===i.V.Color;return x&&y.add("depth","float"),r.uniforms.add(new u.E("eColor",(e=>e.color))),r.main.add(g.H`
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();

      ${e.hasVertexColors?"vColor *= eColor;":e.vvColor?"vColor = eColor * interpolateVVColor(colorFeatureAttribute);":"vColor = eColor;"}
      ${x?"depth = (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = transformPosition(proj, view, vpos);`),t.include(o.HQ,e),x&&t.include(l.Z,e),m.include(h.a),m.main.add(g.H`
    discardBySlice(vpos);
    ${x?"terrainDepthTest(depth);":""}
    vec4 fColor = vColor;
    outputColorHighlightOID(fColor, vpos);`),t}const _=Object.freeze(Object.defineProperty({__proto__:null,build:m},Symbol.toStringTag,{value:"Module"}))},61157:(e,t,r)=>{r.d(t,{H:()=>d,b:()=>h});var i=r(4570),o=r(79138),n=r(21390),s=r(72790),a=r(64839),l=r(32307),c=r(70367);function h(){const e=new l.N5;e.include(i.Q);const{fragment:t}=e;return t.uniforms.add(new c.N("highlightTexture",(e=>e.highlightTexture)),new c.N("highlightOptionsTexture",(e=>e.highlightOptionsTexture)),new n.m("pixelRatio",(e=>e.pixelRatio)),new n.m("occludedIntensityFactor",(e=>e.occludedFactor)),new s.c("maxHighlightLevel",(e=>e.maxHighlightLevel))),t.constants.add("pixelSampleScale","float",1),e.include(o.y),t.code.add(a.H`const float pascal17[9] = float[9](12870.0, 11440.0, 8008.0, 4368.0, 1820.0, 560.0, 120.0, 16.0, 1.0);
const float denom17 =  65536.0;
float colorWeight[16] = float[16](0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
float colorOcclusion[16] = float[16](0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
float weights[16] = float[16](0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
void applyTexel(vec2 texel, float weight) {
if (texel != vec2(0.0)){
int maxChannel = (maxHighlightLevel >> 2) & 1;
for (int channelIndex = 0; channelIndex <= maxChannel; ++channelIndex){
uint channel = readChannel(texel, channelIndex << 2);
int firstIndex = channelIndex << 2;
int maxIndex  = min(firstIndex + 3, maxHighlightLevel);
for (int highlightIndex = firstIndex; highlightIndex <= maxIndex; ++highlightIndex ) {
uint v = readChannelBits(channel, highlightIndex);
if ((v & 1u) == 1u){
colorWeight[highlightIndex] += weight;
if ((v & 2u) == 2u){
colorOcclusion[highlightIndex] += weight;
}
}
}
}
}
}
vec2 readTexel(ivec2 iuv, int du, int dv) {
return texelFetch(highlightTexture, iuv + ivec2(du, dv), 0).rg;
}
void readAndApplyTexel(ivec2 iuv, int du, int dv, float weight) {
vec2 texel = readTexel(iuv, du, dv);
applyTexel(texel, weight);
}
void readAndApply2TexelsU(ivec2 iuv, int du, int dv, float weight) {
readAndApplyTexel(iuv, -du, dv, weight);
readAndApplyTexel(iuv, +du, dv, weight);
}
float getWeight(int pixelDistance) {
float scaledDistance = float(pixelDistance) * pixelSampleScale / pixelRatio;
float d0f = floor(scaledDistance);
int d0 = int(d0f);
if (d0 >= 8){
return 0.0;
}
float w0 = pascal17[d0];
float w1 = pascal17[d0+1];
float f =  scaledDistance - d0f;
return mix(w0, w1, f);
}`),t.main.add(a.H`vec2 highlightTextureSize = vec2(textureSize(highlightTexture,0));
ivec2 iuv = ivec2(sUV * highlightTextureSize);
vec2 centerTexel = texelFetch(highlightTexture, iuv, 0).rg;
bool outlinePossible = false;
if (vOutlinePossible > 0.0){
for (int highlightLevel=0; highlightLevel<= maxHighlightLevel; ++highlightLevel) {
if ((readLevelBits(centerTexel,highlightLevel) & 1u) == 0u) {
outlinePossible = true;
break;
}
}
}
if (outlinePossible) {
int maxPixelDistance = clamp(int(8.0 * pixelRatio / pixelSampleScale), 2, 16);
float weightSum = 0.0;
for(int y = 0; y <= maxPixelDistance; ++y) {
float w = getWeight(y);
weights[y] = w;
weightSum += w * (y == 0 ? 1.0 : 2.0);
}
for(int y = 0; y <= maxPixelDistance; ++y) {
weights[y] = weights[y] / weightSum;
}
float weight0 = weights[0];
applyTexel(centerTexel, weight0 * weight0);
for(int y = 0; y <= maxPixelDistance; y += 1) {
float yFactor = weights[y];
if (y != 0) {
float xFactor = weight0;
float weight = xFactor * yFactor;
if (weight > 0.0) {
readAndApplyTexel(iuv, 0, +y, weight);
readAndApplyTexel(iuv, 0, -y, weight);
}
}
for(int x = 1; x <= maxPixelDistance; x += 1) {
float xFactor = weights[x];
float weight = xFactor * yFactor;
if (weight > 0.0) {
readAndApply2TexelsU(iuv, x, +y, weight);
if (y != 0){
readAndApply2TexelsU(iuv, x, -y, weight);
}
}
}
}
} else {
applyTexel(centerTexel, 1.0);
}
int frontColorIndex = 999;
int maxColorIndex = 0;
for (int i = 0; i <= maxHighlightLevel; ++i) {
if (colorWeight[i] > 0.0){
frontColorIndex = min(frontColorIndex, i);
maxColorIndex = max(maxColorIndex, i);
}
}
if (frontColorIndex == 999){
fragColor = vec4(0.0);
return;
}
vec4 accumulatedColor = vec4(0.0);
for (int curColorIndex = frontColorIndex; curColorIndex <= maxColorIndex; ++curColorIndex) {
float curColorWeight = colorWeight[curColorIndex];
if (curColorWeight <= 0.01){
continue;
}
uint vc = readLevelBits(centerTexel, curColorIndex);
bool centerFilled = (vc & 1u) == 1u;
bool centerOccluded = (vc & 3u) == 3u;
float curColorOcclusion = colorOcclusion[curColorIndex];
bool occluded = centerFilled ? centerOccluded : curColorOcclusion > 0.5 * curColorWeight;
int colorChannel = centerFilled ? 0 : 1;
vec4 colorBase = texelFetch(highlightOptionsTexture, ivec2(curColorIndex, colorChannel), 0);
float occlusionFactor = occluded ? occludedIntensityFactor : 1.0;
float outlineFactor = centerFilled ? 1.0 : smoothstep(0.0, 0.03, curColorWeight);
float intensity = colorBase.a * occlusionFactor * outlineFactor;
vec3 currentColor = colorBase.rgb;
float a0 = accumulatedColor.a;
float a1 = intensity;
float alpha = clamp(a0 + a1 - a0 * a1, 0.0, 1.0);
if (alpha > 0.001){
vec3 blendedColor = ((1.0 - a1) * a0 * accumulatedColor.rgb + a1 * currentColor) / alpha;
accumulatedColor = vec4(blendedColor, alpha);
}
}
fragColor = accumulatedColor;`),e}const d=Object.freeze(Object.defineProperty({__proto__:null,build:h},Symbol.toStringTag,{value:"Module"}))},21019:(e,t,r)=>{r.d(t,{H:()=>a,a:()=>u,b:()=>d,c:()=>l,g:()=>c,o:()=>h});var i=r(73398),o=r(64839),n=r(32307),s=r(27374);class a extends o.Y{}function l(){const e=new n.N5,{outputs:t,fragment:r}=e;return e.include(i.c),r.uniforms.add(new s.o("textureInput",(e=>e.input))),r.constants.add("outlineWidth","int",Math.ceil(h)),r.constants.add("cellSize","int",c),t.add("fragGrid","vec2"),r.main.add(o.H`vec2 inputTextureSize = vec2(textureSize(textureInput, 0));
vec2 cellBottomLeftCornerInput = floor(gl_FragCoord.xy) * vec2(cellSize);
vec2 coordMid =  (cellBottomLeftCornerInput + 0.5 * vec2(cellSize)) / inputTextureSize;
vec2 commonValue = texture(textureInput, coordMid).rg;
int margin = outlineWidth;
float marginSquare = float(margin*margin);
for(int y = -margin; y <= cellSize + margin; y+=2) {
int dy = y < 0 ? -y : y > cellSize ? y-cellSize : 0;
int xMargin = dy > 0 ? int(ceil(sqrt(marginSquare - float(dy*dy)))) : margin;
for(int x = -xMargin; x <= cellSize + xMargin; x+=2) {
vec2 coord = (cellBottomLeftCornerInput + vec2(x, y)) / inputTextureSize;
vec2 value = texture(textureInput, coord).rg;
if (value != commonValue){
fragGrid = vec2(1.0, 1.0);
return;
}
}
}
bool hasAny = commonValue != vec2(0.0);
fragGrid = vec2(hasAny ? 1.0 : 0.0, 0.0);`),e}const c=32,h=9,d=.4,u=Object.freeze(Object.defineProperty({__proto__:null,HighlightDownsampleDrawParameters:a,blurSize:d,build:l,gridCellPixelSize:c,outlineSize:h},Symbol.toStringTag,{value:"Module"}))},62854:(e,t,r)=>{r.d(t,{H:()=>h,b:()=>c});var i=r(4570),o=r(79138),n=r(72790),s=r(64839),a=r(32307),l=r(70367);function c(){const e=new a.N5;e.include(i.Q),e.include(o.y);const{fragment:t}=e;return e.outputs.add("fragSingleHighlight","vec2",0),t.uniforms.add(new l.N("highlightTexture",(e=>e.highlightTexture)),new n.c("maxHighlightLevel",(e=>e.maxHighlightLevel)),new n.c("highlightLevel",(e=>e.highlightLevel))),e.include(o.y),t.main.add(s.H`ivec2 iuv = ivec2(gl_FragCoord.xy);
vec2 inputTexel = texelFetch(highlightTexture, iuv, 0).rg;
uint bits = readLevelBits(inputTexel, highlightLevel);
bool hasHighlight = (bits & 1u) == 1u;
bool hasOccluded  = (bits & 2u) == 2u;
fragSingleHighlight = vec2(hasHighlight ? 1.0 : 0.0, hasOccluded ? 1.0 : 0.0);`),e}const h=Object.freeze(Object.defineProperty({__proto__:null,build:c},Symbol.toStringTag,{value:"Module"}))},80381:(e,t,r)=>{r.d(t,{O:()=>h,a:()=>u,b:()=>d});var i=r(19539),o=r(73398),n=r(21390),s=r(72790),a=r(64839),l=r(32307),c=r(70367);class h extends a.Y{constructor(){super(...arguments),this.overlayIndex=i.vr.INNER,this.opacity=1}}function d(){const e=new l.N5;return e.include(o.c),e.fragment.uniforms.add(new c.N("tex",(e=>e.texture))),e.fragment.uniforms.add(new s.c("overlayIdx",(e=>e.overlayIndex))),e.fragment.uniforms.add(new n.m("opacity",(e=>e.opacity))),e.fragment.main.add(a.H`vec2 overlayUV = overlayIdx == 0 ? vec2(uv.x * 0.5, uv.y) : vec2(uv.x * 0.5 + 0.5, uv.y);
fragColor = texture(tex, overlayUV) * opacity;`),e}const u=Object.freeze(Object.defineProperty({__proto__:null,OverlayCompositingPassParameters:h,build:d},Symbol.toStringTag,{value:"Module"}))},62361:(e,t,r)=>{r.d(t,{S:()=>g,b:()=>u});var i=r(4570),o=r(79138),n=r(56289),s=r(21390),a=r(72790),l=r(64839),c=r(32307),h=r(70367),d=r(21019);function u(){const e=new c.N5;e.include(i.Q);const{fragment:t}=e;return t.uniforms.add(new h.N("blurInput",(e=>e.singleHighlightBlurTexture)),new n.t("blurSize",(e=>e.blurSize)),new h.N("highlightTexture",(e=>e.highlightTexture)),new h.N("highlightOptionsTexture",(e=>e.highlightOptionsTexture)),new a.c("highlightLevel",(e=>e.highlightLevel)),new s.m("occludedIntensityFactor",(e=>e.occludedFactor))),t.constants.add("inner","float",1-(d.o-d.b)/d.o),e.include(o.y),t.main.add(l.H`vec2 highlightTextureSize = vec2(textureSize(highlightTexture,0));
vec2 uv = sUV;
vec2 center = texture(blurInput, uv).rg;
vec2 blurredHighlightValue = (vOutlinePossible == 0.0)
? center
: center * 0.204164
+ texture(blurInput, uv + blurSize * 1.407333).rg * 0.304005
+ texture(blurInput, uv - blurSize * 1.407333).rg * 0.304005
+ texture(blurInput, uv + blurSize * 3.294215).rg * 0.093913
+ texture(blurInput, uv - blurSize * 3.294215).rg * 0.093913;
float highlightIntensity = blurredHighlightValue.r;
float occlusionWeight = blurredHighlightValue.g;
if (highlightIntensity <= 0.01) {
discard;
}
vec4 fillColor    = texelFetch(highlightOptionsTexture, ivec2(highlightLevel, 0), 0);
vec4 outlineColor = texelFetch(highlightOptionsTexture, ivec2(highlightLevel, 1), 0);
vec2 centerTexel = texelFetch(highlightTexture, ivec2(uv * highlightTextureSize), 0).rg;
uint centerBits = readLevelBits(centerTexel, highlightLevel);
bool centerFilled = (centerBits & 1u) == 1u;
bool centerOccluded = (centerBits & 3u) == 3u;
bool occluded = centerOccluded || (0.5 * highlightIntensity < occlusionWeight);
float occlusionFactor = occluded ? occludedIntensityFactor : 1.0;
float outlineFactor = centerFilled ? 1.0 : smoothstep(0.0, inner, highlightIntensity);
float fillFactor = centerFilled ? 1.0 : 0.0;
vec4 baseColor = mix(outlineColor, fillColor, fillFactor);
float intensity = baseColor.a * occlusionFactor * outlineFactor;
fragColor = vec4(baseColor.rgb, intensity);`),e}const g=Object.freeze(Object.defineProperty({__proto__:null,build:u},Symbol.toStringTag,{value:"Module"}))},51542:(e,t,r)=>{r.d(t,{S:()=>c,a:()=>d,b:()=>h});var i=r(72745),o=r(4570),n=r(56289),s=r(64839),a=r(32307),l=r(27374);class c extends s.Y{constructor(){super(...arguments),this.blurSize=(0,i.vt)()}}function h(){const e=new a.N5;return e.include(o.Q),e.fragment.uniforms.add(new n.t("blurSize",(e=>e.blurSize)),new l.o("blurInput",(e=>e.blurInput))),e.outputs.add("fragSingleHighlight","vec2",0),e.fragment.main.add(s.H`vec2 highlightTextureSize = vec2(textureSize(blurInput,0));
vec2 uv = sUV;
vec2 center = texture(blurInput, uv).rg;
if (vOutlinePossible == 0.0) {
fragSingleHighlight = center;
} else {
vec2 sum = center * 0.204164;
sum += texture(blurInput, uv + blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, uv - blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, uv + blurSize * 3.294215).rg * 0.093913;
sum += texture(blurInput, uv - blurSize * 3.294215).rg * 0.093913;
fragSingleHighlight = sum;
}`),e}const d=Object.freeze(Object.defineProperty({__proto__:null,SingleHighlightBlurDrawParameters:c,build:h},Symbol.toStringTag,{value:"Module"}))},53070:(e,t,r)=>{r.d(t,{T:()=>c,a:()=>d,b:()=>h});var i=r(9392),o=r(73398),n=r(5517),s=r(64839),a=r(32307),l=r(70367);class c extends s.Y{constructor(){super(...arguments),this.color=(0,i.fA)(1,1,1)}}function h(){const e=new a.N5;return e.include(o.c),e.fragment.uniforms.add(new l.N("tex",(e=>e.texture)),new n.t("uColor",(e=>e.color))),e.fragment.main.add(s.H`vec4 texColor = texture(tex, uv);
fragColor = texColor * vec4(uColor, 1.0);`),e}const d=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:c,build:h},Symbol.toStringTag,{value:"Module"}))},82062:(e,t,r)=>{var i;r.d(t,{$:()=>i}),function(e){e[e.EnableFastUpdates=0]="EnableFastUpdates",e[e.DisableFastUpdates=1]="DisableFastUpdates",e[e.UpdateFastLocalOrigin=2]="UpdateFastLocalOrigin"}(i||(i={}))},51977:(e,t,r)=>{var i,o;function n(e){return null!=e&&!e.running}r.d(t,{c:()=>o,pi:()=>n,tf:()=>i}),function(e){e[e.Idle=0]="Idle",e[e.Rendering=1]="Rendering",e[e.Ready=2]="Ready",e[e.Fading=3]="Fading"}(i||(i={})),function(e){e[e.RG=0]="RG",e[e.BA=1]="BA",e[e.COUNT=2]="COUNT"}(o||(o={}))},63401:(e,t,r)=>{r.d(t,{c:()=>i,n:()=>f});var i,o=r(4212),n=r(15941),s=r(75540),a=r(34761),l=r(13191),c=r(20664),h=r(9392),d=r(52896),u=r(14556),g=r(51977),p=r(317);class f{constructor(){this.startTime=0,this._data=(0,s.v)(null),this._readChannels=g.c.RG,this.parallax=new v,this.parallaxNew=new v,this._anchorPoint=(0,h.vt)(),this._fadeState=(0,s.v)(i.HIDE),this._fadeFactor=(0,s.v)(1)}get data(){return this._data.value}set data(e){this._data.value=e}get readChannels(){return this._readChannels}get fadeState(){return this._fadeState.value}get fadeFactor(){return this._fadeFactor.value}get opacity(){switch(this.fadeState){case i.HIDE:return 0;case i.FADE_OUT:return 1-this.fadeFactor;case i.FADE_IN:return this.fadeFactor;case i.SHOW:case i.CROSS_FADE:return 1}}fade(e,t,r){this.isFading&&this.fadeFactor<1&&(this._fadeFactor.value=r?(0,n.qE)((t-this.startTime)/(x*r),0,1):1,1===this.fadeFactor&&this._endFade()),this._evaluateState(e,t),this._updateParallax(e)}_evaluateState(e,t){const r=e.relativeElevation,o=this._updateAnchorPoint(e);(r>1.7*p.zF||r<-p.zF||o>w)&&this.opacity>0?this._startFade(i.HIDE,t):this.isFading||(r>p.zF||r<-.35*p.zF||o>C*w?this.opacity>0&&this._startFade(i.FADE_OUT,t):(0,g.pi)(this.data)&&(0===this.opacity?this._startFade(i.FADE_IN,t):this.data.state===g.tf.Ready&&(this.fadeState===i.SHOW?this._startFade(i.CROSS_FADE,t):this._startFade(i.SHOW,t))))}_updateParallax(e){const t=(0,c.k)(e.eye);this.parallax.radiusCurvatureCorrection=.84*Math.sqrt(Math.max(t-u.$O.radius*u.$O.radius,0))/Math.sqrt(t),(0,d.Cr)(m,this.parallax.anchorPoint,_),(0,a.e$)(this.parallax.transform,l.zK,_[3],(0,d.yo)(_)),(0,d.Cr)(m,this.parallaxNew.anchorPoint,_),(0,a.e$)(this.parallaxNew.transform,l.zK,_[3],(0,d.yo)(_))}_updateAnchorPoint(e){return(0,c.n)(this._anchorPoint,e.eye),(0,c.h)(this._anchorPoint,this._anchorPoint,u.$O.radius),this.fadeState===i.HIDE&&this.data?.state===g.tf.Ready?((0,c.c)(this.parallax.anchorPoint,this._anchorPoint),0):(0,c.l)((0,c.d)(y,this.parallax.anchorPoint,this._anchorPoint))}requestFade(){this._fadeFactor.value=0}_startFade(e,t){switch(this._fadeState.value=e,this.startTime=t,e){case i.CROSS_FADE:this.requestFade(),this._switchReadChannels(),(0,c.c)(this.parallaxNew.anchorPoint,this._anchorPoint);break;case i.FADE_IN:this.requestFade(),this._switchReadChannels(),(0,c.c)(this.parallax.anchorPoint,this._anchorPoint),(0,c.c)(this.parallaxNew.anchorPoint,this._anchorPoint);break;case i.FADE_OUT:this.requestFade();break;case i.SHOW:this._switchReadChannels(),(0,c.c)(this.parallax.anchorPoint,this._anchorPoint),(0,c.c)(this.parallaxNew.anchorPoint,this._anchorPoint),this._endFade();break;case i.HIDE:this._endFade()}}_endFade(){switch(this._fadeFactor.value=1,this.data&&this.data.state!==g.tf.Ready&&(this.data.state=g.tf.Idle),this.fadeState){case i.CROSS_FADE:(0,c.c)(this.parallax.anchorPoint,this.parallaxNew.anchorPoint),this._fadeState.value=i.SHOW;break;case i.FADE_IN:this._fadeState.value=i.SHOW;break;case i.FADE_OUT:this._fadeState.value=i.HIDE;break;case i.SHOW:case i.HIDE:break;default:(0,o.Xb)(this.fadeState)}}_switchReadChannels(){this.data?.state===g.tf.Ready&&(this._readChannels=1-this._readChannels,this.data.state=g.tf.Fading)}get isFading(){return this.fadeState===i.FADE_OUT||this.fadeState===i.FADE_IN||this.fadeState===i.CROSS_FADE}}!function(e){e[e.HIDE=0]="HIDE",e[e.FADE_IN=1]="FADE_IN",e[e.SHOW=2]="SHOW",e[e.CROSS_FADE=3]="CROSS_FADE",e[e.FADE_OUT=4]="FADE_OUT"}(i||(i={}));class v{constructor(){this.anchorPoint=(0,h.vt)(),this.radiusCurvatureCorrection=0,this.transform=(0,l.vt)()}}const m=(0,h.fA)(0,0,1),_=(0,d.vt)(),y=(0,h.vt)(),x=1.25,C=.5,w=2e5},317:(e,t,r)=>{r.d(t,{k9:()=>S,zF:()=>b});var i,o=r(35143),n=r(42553),s=r(46053),a=(r(81806),r(76460),r(47249),r(6409)),l=r(85842);let c=i=class extends n.oY{constructor(e){super(e),this.type="cloudy",this.cloudCover=.5}clone(){return new i({cloudCover:this.cloudCover})}};(0,o._)([(0,a.e)({cloudy:"cloudy"})],c.prototype,"type",void 0),(0,o._)([(0,s.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],c.prototype,"cloudCover",void 0),c=i=(0,o._)([(0,l.$)("esri.views.3d.environment.CloudyWeather")],c);const h=c;var d;let u=d=class extends n.oY{constructor(e){super(e),this.type="foggy",this.fogStrength=.5}clone(){return new d({fogStrength:this.fogStrength})}};(0,o._)([(0,a.e)({foggy:"foggy"})],u.prototype,"type",void 0),(0,o._)([(0,s.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],u.prototype,"fogStrength",void 0),u=d=(0,o._)([(0,l.$)("esri.views.3d.environment.FoggyWeather")],u);const g=u;var p;let f=p=class extends n.oY{constructor(e){super(e),this.type="rainy",this.cloudCover=.5,this.precipitation=.5}clone(){return new p({cloudCover:this.cloudCover,precipitation:this.precipitation})}};(0,o._)([(0,a.e)({rainy:"rainy"})],f.prototype,"type",void 0),(0,o._)([(0,s.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],f.prototype,"cloudCover",void 0),(0,o._)([(0,s.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],f.prototype,"precipitation",void 0),f=p=(0,o._)([(0,l.$)("esri.views.3d.environment.RainyWeather")],f);const v=f;var m;let _=m=class extends n.oY{constructor(e){super(e),this.type="snowy",this.cloudCover=.5,this.precipitation=.5,this.snowCover="disabled"}clone(){return new m({cloudCover:this.cloudCover,precipitation:this.precipitation,snowCover:this.snowCover})}};(0,o._)([(0,a.e)({snowy:"snowy"})],_.prototype,"type",void 0),(0,o._)([(0,s.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],_.prototype,"cloudCover",void 0),(0,o._)([(0,s.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],_.prototype,"precipitation",void 0),(0,o._)([(0,s.MZ)({type:["enabled","disabled"],nonNullable:!0,json:{write:!0}})],_.prototype,"snowCover",void 0),_=m=(0,o._)([(0,l.$)("esri.views.3d.environment.SnowyWeather")],_);const y=_;var x;let C=x=class extends n.oY{constructor(e){super(e),this.type="sunny",this.cloudCover=.5}clone(){return new x({cloudCover:this.cloudCover})}};(0,o._)([(0,a.e)({sunny:"sunny"})],C.prototype,"type",void 0),(0,o._)([(0,s.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],C.prototype,"cloudCover",void 0),C=x=(0,o._)([(0,l.$)("esri.views.3d.environment.SunnyWeather")],C);const w={key:"type",base:C,typeMap:{sunny:C,cloudy:h,rainy:v,snowy:y,foggy:g}};Object.keys(w.typeMap);const b=1e4,S=1e5},70667:(e,t,r)=>{r.d(t,{t:()=>v,z:()=>y});var i=r(19555),o=r(72745),n=r(55855),s=r(34111),a=r(482),l=r(44815),c=r(75002),h=r(38496),d=r(64465),u=r(50468),g=r(87634),p=r(17345),f=r(66470);function v(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const o=[],v=t.mapPositions;!function(e,t){const{attributeData:{position:r},removeDuplicateStartEnd:i}=e,o=function(e){const t=e.length;return e[0]===e[t-3]&&e[1]===e[t-2]&&e[2]===e[t-1]}(r)&&i,n=r.length/3-(o?1:0),s=new Array(2*(n-1)),a=o?r.slice(0,-3):r;let l=0;for(let c=0;c<n-1;c++)s[l++]=c,s[l++]=c+1;t.push([f.r.POSITION,new u.n(a,s,3,o)])}(t,o);const y=o[0][1].data,x=o[0][1].indices.length,C=(0,h.EH)(x);return function(e,t,r){if(null!=e.attributeData.colorFeature)return;const i=e.attributeData.color;t.push([f.r.COLOR,new u.n(i??n.Un,r,4)])}(t,o,C),function(e,t,r){null==e.attributeData.sizeFeature&&t.push([f.r.SIZE,new u.n([e.attributeData.size??1],r,1,!0)])}(t,o,C),function(e,t,r){e.attributeData.normal&&t.push([f.r.NORMAL,new u.n(e.attributeData.normal,r,3)])}(t,o,C),function(e,t,r){null!=e.attributeData.colorFeature&&t.push([f.r.COLORFEATUREATTRIBUTE,new u.n([e.attributeData.colorFeature],r,1,!0)])}(t,o,C),function(e,t,r){null!=e.attributeData.sizeFeature&&t.push([f.r.SIZEFEATUREATTRIBUTE,new u.n([e.attributeData.sizeFeature],r,1,!0)])}(t,o,C),function(e,t,r){null!=e.attributeData.opacityFeature&&t.push([f.r.OPACITYFEATUREATTRIBUTE,new u.n([e.attributeData.opacityFeature],r,1,!0)])}(t,o,C),function(e,t,r){if(null==e.overlayInfo||e.overlayInfo.renderCoordsHelper.viewingMode!==d.RT.Global||!e.overlayInfo.spatialReference.isGeographic)return;const o=(0,l.jh)(r.length),n=(0,s.tO)(e.overlayInfo.spatialReference);for(let i=0;i<o.length;i+=3)(0,a.RC)(r,i,o,i,n);const h=r.length/3,g=(0,c.oe)(h+1);let p=m,v=_,y=0,x=0;(0,i.hZ)(p,o[x++],o[x++]),x++,g[0]=0;for(let s=1;s<h+1;++s)s===h&&(x=0),(0,i.hZ)(v,o[x++],o[x++]),x++,y+=(0,i.xg)(p,v),g[s]=y,[p,v]=[v,p];t.push([f.r.DISTANCETOSTART,new u.n(g,t[0][1].indices,1,!0)])}(t,o,y),new p.V(e,o,v,g.X.Line,r)}const m=(0,o.vt)(),_=(0,o.vt)();function y(e,t){if(null==e||0===e.length)return[];const r=[];return e.forEach((e=>{const i=e.length,o=(0,l.jh)(3*i);e.forEach(((e,t)=>{o[3*t]=e[0],o[3*t+1]=e[1],o[3*t+2]=e[2]}));const n={attributeData:{position:o,normal:t},removeDuplicateStartEnd:!1};r.push(n)})),r}},29889:(e,t,r)=>{r.d(t,{A:()=>c,C:()=>l});var i=r(45308),o=r(44815),n=r(99785),s=r(67425),a=r(55197);function l(e,t,r,i){const a="polygon"===e.type?n.Wq.CCW_IS_HOLE:n.Wq.NONE,l="polygon"===e.type?e.rings:e.paths,{position:c,outlines:d}=(0,n.oR)(l,!!e.hasZ,a,e.spatialReference),u=(0,o.jh)(c.length),g=(0,s.au)(c,e.spatialReference,0,u,0,c,0,c.length/3,t,r,i),p=null!=g;return{lines:p?h(d,c,u):[],projectionSuccess:p,sampledElevation:g}}function c(e,t){const r="polygon"===e.type?n.Wq.CCW_IS_HOLE:n.Wq.NONE,o="polygon"===e.type?e.rings:e.paths,{position:s,outlines:l}=(0,n.oR)(o,!1,r),c=(0,i.projectBuffer)(s,e.spatialReference,0,s,t,0);for(let i=2;i<s.length;i+=3)s[i]=a.bi;return{lines:c?h(l,s):[],projectionSuccess:c}}function h(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const i=new Array;for(const{index:n,count:s}of e){if(s<=1)continue;const e=3*n,a=3*s;i.push({position:(0,o.l5)(t,3*n,3*s),mapPositions:null!=r?(0,o.l5)(r,e,a):void 0})}return i}},21255:(e,t,r)=>{r.d(t,{MQ:()=>o});r(3112);var i=r(35737);r(46571);class o extends i.R6{constructor(e,t,r){super(e,t),this.triangleNr=r}}},55197:(e,t,r)=>{r.d(t,{bi:()=>Zt});var i,o=r(35143),n=r(54099),s=r(81806),a=r(87663),l=r(30726),c=r(30015),h=r(68134),d=r(41289),u=r(46053),g=r(76460),p=(r(47249),r(85842)),f=r(34761),v=r(20664),m=r(9392),_=r(57662),y=r(22955),x=r(19539),C=r(2413),w=r(75507);class b{constructor(){this._extent=(0,C.vt)(),this.resolution=0,this.renderLocalOrigin=(0,w.f)(0,0,0,"O"),this.pixelRatio=1,this.mapUnitsPerPixel=1,this.canvasGeometries=new S}get extent(){return this._extent}setupGeometryViewsCyclical(e){this.setupGeometryView();const t=.001*e.range;if(this._extent[0]-t<=e.min){const t=this.canvasGeometries.extents[this.canvasGeometries.numViews++];(0,C.cY)(this._extent,e.range,0,t)}if(this._extent[2]+t>=e.max){const t=this.canvasGeometries.extents[this.canvasGeometries.numViews++];(0,C.cY)(this._extent,-e.range,0,t)}}setupGeometryView(){this.canvasGeometries.numViews=1,(0,C.C)(this.canvasGeometries.extents[0],this._extent)}hasSomeSizedView(){for(let e=0;e<this.canvasGeometries.numViews;e++){const t=this.canvasGeometries.extents[e];if(t[0]!==t[2]&&t[1]!==t[3])return!0}return!1}}class S{constructor(){this.extents=[(0,C.vt)(),(0,C.vt)(),(0,C.vt)()],this.numViews=0}}!function(e){e[e.Color=0]="Color",e[e.ColorNoRasterImage=1]="ColorNoRasterImage",e[e.Highlight=2]="Highlight",e[e.WaterNormal=3]="WaterNormal",e[e.Occluded=4]="Occluded",e[e.ObjectAndLayerIdColor=5]="ObjectAndLayerIdColor"}(i||(i={}));class T{constructor(e,t,r){this._fbos=e,this._format=t,this._name=r}get valid(){return null!=this._handle?.getTexture()}dispose(){this._handle=(0,l.Gz)(this._handle)}get texture(){return this._handle?.getTexture()}bind(e,t,r){this._handle&&this._handle.fbo?.width===t&&this._handle.fbo?.height===r||(this._handle?.release(),this._handle=this._fbos.acquire(t,r,this._name,this._format)),e.bindFramebuffer(this._handle?.fbo)}generateMipMap(){this._handle?.getTexture()?.descriptor?.hasMipmap&&this._handle?.getTexture()?.generateMipmap()}}var R=r(16455),O=r(34981),P=r(61785);class D{constructor(e,t,r,i){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:R.N.RGBA_MIPMAP;this.output=r,this.content=i,this.fbo=new T(e,o,t)}get valid(){return this.fbo.valid}}class I{constructor(e){this.targets=[new D(e,"overlay color",O.V.Color,i.Color),new D(e,"overlay IM color",O.V.Color,i.ColorNoRasterImage),new D(e,"overlay highlight",O.V.Highlight,i.Highlight,R.N.RG),new D(e,"overlay water",O.V.Normal,i.WaterNormal),new D(e,"overlay occluded",O.V.Color,i.Occluded)],(0,P.E)()&&this.targets.push(new D(e,"overlay olid",O.V.ObjectAndLayerIdColor,i.ObjectAndLayerIdColor,R.N.RGBA))}getTexture(e){return this.targets[e]?.fbo.texture}dispose(){for(const e of this.targets)e.fbo.dispose()}computeValidity(){return this.targets.reduce(((e,t,r)=>t.valid?e|=1<<r:e),0)}}var M,A=r(33062),E=r(55855),F=r(55386);F.Zo;!function(e){e[e.Material=0]="Material",e[e.ShadowMap=1]="ShadowMap",e[e.Highlight=2]="Highlight",e[e.ViewshedShadowMap=3]="ViewshedShadowMap"}(M||(M={}));r(43557),r(26719),r(45425),r(20123),r(21390);var N,H=r(64839),L=(r(70367),r(7223));!function(e){e[e.Disabled=0]="Disabled",e[e.Enabled=1]="Enabled",e[e.EnabledWithWater=2]="EnabledWithWater",e[e.COUNT=3]="COUNT"}(N||(N={}));(0,E.vt)();L.n;var z=r(53070),W=r(60586),V=r(19555),G=r(90364),j=r(36451),U=r(16506),q=r(59246),k=r(61157),B=r(57162);class Z extends q.w{constructor(e,t,i){super(e,t,new U.$(k.H,(()=>r.e(2671).then(r.bind(r,82671)))),i)}initializePipeline(){return(0,B.Ey)({blending:B.Ky,colorWrite:B.kn})}}var Q=r(21019);class $ extends q.w{constructor(e,t,i){super(e,t,new U.$(Q.a,(()=>r.e(1521).then(r.bind(r,51521)))),i)}initializePipeline(){return(0,B.Ey)({colorWrite:B.kn})}}var Y=r(1723);class X extends H.Y{constructor(){super(...arguments),this.occludedFactor=Y.cD,this.maxHighlightLevel=1,this.verticalCellCount=0,this.horizontalCellCount=0,this.highlightLevel=0,this.pixelRatio=1}}var K=r(62854);class J extends q.w{constructor(e,t,i){super(e,t,new U.$(K.H,(()=>r.e(7932).then(r.bind(r,37932)))),i)}initializePipeline(){return(0,B.Ey)({colorWrite:B.kn})}}var ee=r(62361);class te extends q.w{constructor(e,t,i){super(e,t,new U.$(ee.S,(()=>r.e(8231).then(r.bind(r,58231)))),i)}initializePipeline(){return(0,B.Ey)({blending:B.Ky,colorWrite:B.kn})}}var re=r(51542);class ie extends q.w{constructor(e,t,i){super(e,t,new U.$(re.a,(()=>r.e(5880).then(r.bind(r,85880)))),i)}initializePipeline(){return(0,B.Ey)({colorWrite:B.kn})}}var oe=r(83490),ne=r(32119),se=r(66470),ae=r(93345),le=r(21812);const ce=[];new le._(se.r.POSITION,3,ae.pe.FLOAT,0,12),new le._(se.r.POSITION,2,ae.pe.FLOAT,0,8),new le._(se.r.POSITION,2,ae.pe.FLOAT,0,16),new le._(se.r.UV0,2,ae.pe.FLOAT,8,16);var he=r(69008),de=r(76718),ue=r(29492),ge=r(96673);let pe=class extends j.A{constructor(e){super(e),this.produces=G.OG.HIGHLIGHTS,this.consumes={required:[G.OG.HIGHLIGHTS,"highlights"]},this.useMultipleHighlights=!!(0,s.A)("enable-feature:multiple-highlights"),this._optionsTexture=null,this._downsampleDrawParameters=new Q.H,this._passParameters=new X,this._singleHighlightBlurDrawParameters=new re.S,this._grid=new fe,e.techniques.precompile($),this.useMultipleHighlights?e.techniques.precompile(Z):(e.techniques.precompile(J),e.techniques.precompile(ie),e.techniques.precompile(te))}initialize(){this.addHandles([(0,h.wB)((()=>xe(this.view.highlights)),(()=>{this._optionsTexture=(0,l.WD)(this._optionsTexture),this.requestRender(oe.C7.UPDATE)}),h.Vh)])}destroy(){this._passParameters&&(this._passParameters.highlightOptionsTexture=null),this._grid.coverage=(0,l.Gz)(this._grid.coverage),this._grid.vao=(0,l.WD)(this._grid.vao),this._optionsTexture=(0,l.Gz)(this._optionsTexture)}_updateOptionsTexture(e){const t=this.renderingContext;let r=this._optionsTexture;if(null==r){const e=new ge.R(16,2);e.internalFormat=ae.Ab.RGBA,e.samplingMode=ae.Cj.NEAREST,r=new ue.g(t,e,null),this._optionsTexture=r}r.setData(e),this._passParameters.highlightOptionsTexture=r}render(e){const t=e.find((e=>{let{name:t}=e;return t===G.OG.HIGHLIGHTS})),{techniques:r,bindParameters:i,_passParameters:o,renderingContext:n}=this;if(!i.decorations)return t;const s=r.acquire($);if(!s.compiled)return s.release(),this.requestRender(oe.C7.UPDATE),t;const a=e.find((e=>{let{name:t}=e;return"highlights"===t})).getTexture(),l=()=>{const{highlights:e}=this.view;this._optionsTexture||this._updateOptionsTexture(function(e){const t=new Uint8Array(128),r=(e,r)=>{t[e]=r},i=(e,t)=>{const i=4*e,o=4*e+64,{color:n}=t,s=t.haloColor??n;r(i+0,n.r),r(i+1,n.g),r(i+2,n.b),r(i+3,t.fillOpacity*n.a*255),r(o+0,s.r),r(o+1,s.g),r(o+2,s.b),r(o+3,t.haloOpacity*s.a*255)};return _e(e,((e,t)=>{i(t,e.options)})),t}(e)),o.highlightOptionsTexture=this._optionsTexture,this._gridUpdateResources(a);const t=this._gridComputeCoverage(s,a,i);s.release();const{horizontalCellCount:r,verticalCellCount:n}=t;return o.horizontalCellCount=r,o.verticalCellCount=n,o.coverageTexture=t.coverage?.getTexture(),t},c=e=>{const t=e.verticalCellCount*e.horizontalCellCount;n.bindVAO(e.vao),n.drawElementsInstanced(ae.WR.TRIANGLES,6,ae.pe.UNSIGNED_BYTE,0,t)},{camera:h}=i,d=()=>{n.bindFramebuffer(t.fbo),n.setViewport4fv(h.fullViewport)};return this.useMultipleHighlights?this._renderMultiple(a,l,c,d):this._renderSingle(a,l,c,d),o.highlightTexture=null,o.coverageTexture=null,t}_renderMultiple(e,t,r,i){const{techniques:o,bindParameters:n,_passParameters:s,renderingContext:a}=this,l=o.acquire(Z);if(!l.compiled)return l.release(),void this.requestRender(oe.C7.UPDATE);const c=t();s.highlightTexture=e,s.pixelRatio=n.camera.pixelRatio,s.maxHighlightLevel=we(this.view.highlights)-1,a.bindTechnique(l,n,s),i(),r(c),l.release()}_renderSingle(e,t,r,i){const{fboCache:o,techniques:n,bindParameters:s,_passParameters:a,renderingContext:l}=this,c=n.acquire(J),h=n.acquire(ie),d=n.acquire(te);if(!d.compiled||!h.compiled||!c.compiled)return d.release(),h.release(),c.release(),void this.requestRender(oe.C7.UPDATE);const u=t(),{width:g,height:p}=e.descriptor;a.maxHighlightLevel=we(this.view.highlights)-1,a.highlightTexture=e;const{camera:f}=s,{fullWidth:v,fullHeight:m,pixelRatio:_}=f,y=Math.ceil(v/_),x=Math.ceil(m/_),{_singleHighlightBlurDrawParameters:C}=this;for(let w=0;w<=a.maxHighlightLevel;++w){a.highlightLevel=w,l.setClearColor(0,0,0,0);const e=o.acquire(g,p,"single highlight",R.N.RG);l.bindFramebuffer(e.fbo),l.setViewport(0,0,g,p),l.clear(ae.NV.COLOR),l.bindTechnique(c,s,a),r(u),C.blurInput=e.getTexture(),(0,V.hZ)(C.blurSize,1/y,0);const t=o.acquire(y,x,"single highlight blur h",R.N.RG);l.unbindTexture(t.fbo?.colorTexture),l.bindFramebuffer(t.fbo),l.setViewport(0,0,y,x),l.clear(ae.NV.COLOR),C.blurInput=e.getTexture(),(0,V.hZ)(C.blurSize,1/y,0),l.bindTechnique(h,s,a,C),r(u),e.release(),(0,V.hZ)(C.blurSize,0,1/x),a.singleHighlightBlurTexture=t.getTexture(),i(),l.bindTechnique(d,s,a,C),r(u),t.release()}c.release(),h.release(),d.release()}_gridUpdateResources(e){const t=this.renderingContext,r=this._grid,{width:i,height:o}=e.descriptor;if(r.horizontalCellCount=Math.ceil(i/Q.g),r.verticalCellCount=Math.ceil(o/Q.g),r.vao)return;const n=de.g.createIndex(t,ae._U.STATIC_DRAW,Ce);r.vao=new he.Z(t,ne.D,new Map([["geometry",ce]]),new Map([["geometry",de.g.createVertex(t,ae._U.STATIC_DRAW)]]),n)}_gridComputeCoverage(e,t,r){const i=this.renderingContext,o=this._grid,n=t.descriptor,s=Math.ceil(n.width/Q.g),a=Math.ceil(n.height/Q.g);this._downsampleDrawParameters.input=t,o.coverage?.release();const l=this.fboCache.acquire(s,a,"highlight coverage",R.N.RG);return o.coverage=l,i.bindFramebuffer(l.fbo),i.bindTechnique(e,r,this._passParameters,this._downsampleDrawParameters),i.setViewport(0,0,s,a),i.screen.draw(),o}get test(){}};(0,o._)([(0,u.MZ)()],pe.prototype,"produces",void 0),(0,o._)([(0,u.MZ)()],pe.prototype,"consumes",void 0),(0,o._)([(0,u.MZ)({constructOnly:!0})],pe.prototype,"techniques",void 0),pe=(0,o._)([(0,p.$)("esri.views.3d.webgl-engine.effects.highlight.Highlight")],pe);class fe{constructor(){this.coverage=null,this.vao=null,this.verticalCellCount=0,this.horizontalCellCount=0,this.viewportWidth=0,this.viewportHeight=0}}const ve=new Array(Y.cz),me=new Array(Y.cz);function _e(e,t){const r=Math.min(e.length,Y.cz);let i=Y.cz;for(let n=r-1;n>=0;--n){const t=e.at(n);if(t){const e=t.name;ve.includes(e,i)||(--i,ve[i]=e,me[i]=n)}}const o=Y.cz-i;for(let n=0;n<o;++n){const r=me[Y.cz-o+n];t(e.at(r),n)}}let ye=0;function xe(e){let t=0;const r=Math.min(Y.cz,e.length);for(let i=0;i<r;++i){const r=e.at(i);if(r){const{name:e,options:i}=r;t+=e.length;const{color:o,fillOpacity:n,haloColor:s,haloOpacity:a}=i;t+=o.r+(s?.r??1)+n+a}}{const r=e.at(0);if(r){const{shadowOpacity:e,shadowDifference:i,shadowColor:o}=r.options;t+=e+i+o.r}}return ye+++(t>=0?0:1)}const Ce=new Uint8Array([0,1,2,2,1,3]);function we(e){const t=new Set;for(let r=0;r<Y.cz;++r){const i=e.at(r)?.name;i&&t.add(i)}return t.size}var be=r(75941),Se=r(86994);class Te{constructor(e,t,r,i){this._textures=e,this._techniques=t,this.materialChanged=r,this.requestRender=i,this._id2glMaterialRef=new be.O}dispose(){this._textures.destroy()}acquire(e,t,r){this._ownMaterial(e);const i=e.produces.get(t);if(!i?.(r))return null;let o=this._id2glMaterialRef.get(r,e.id);if(null==o){const t=e.createGLMaterial({material:e,techniques:this._techniques,textures:this._textures,output:r});o=new Re(t),this._id2glMaterialRef.set(r,e.id,o)}return o.ref(),o.glMaterial}release(e,t){const r=this._id2glMaterialRef.get(t,e.id);null!=r&&(r.unref(),r.referenced||((0,l.WD)(r.glMaterial),this._id2glMaterialRef.delete(t,e.id)))}_ownMaterial(e){e.repository&&e.repository!==this&&g.A.getLogger("esri.views.3d.webgl-engine.lib.GLMaterialRepository").error("Material is already owned by a different material repository"),e.repository=this}}class Re{constructor(e){this.glMaterial=e,this._refCnt=0}ref(){++this._refCnt}unref(){--this._refCnt,(0,Se.vA)(this._refCnt>=0)}get referenced(){return this._refCnt>0}}var Oe,Pe=r(97583),De=r(45463),Ie=r(72001),Me=(r(91417),r(13191)),Ae=r(72745),Ee=r(63401),Fe=r(98521),Ne=r(77730);!function(e){e[e.Immediate=0]="Immediate",e[e.FadeWithWeather=1]="FadeWithWeather"}(Oe||(Oe={}));var He=r(4998);class Le{constructor(e){this.shadowMap=e,this.slot=Ne.N.OPAQUE_MATERIAL,this.slicePlane=null,this.hasOccludees=!1,this.enableFillLights=!0,this.oitPass=Ie.Y.NONE,this.alignPixelEnabled=!1,this.decorations=!0,this.overlayStretch=1,this.viewshedEnabled=!1,this._camera=new A.A,this._inverseViewport=(0,Ae.vt)(),this._oldLighting=new He.TA,this._newLighting=new He.TA,this._fadedLighting=new He.TA,this._lighting=this._newLighting,this.ssr=new ze,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.highlightMixTexture=null,this.highlightGroupName=null,this.highlightGroupIndices=new Map,this.highlightLevel=0,this.highlightMixOrigin=(0,Ae.vt)(),this.hudRenderStyle=Fe.D.Occluded,this.clouds=new Ee.n,this.shadowHighlightsVisible=!1}get camera(){return this._camera}set camera(e){this._camera=e,this._inverseViewport[0]=1/e.fullViewport[2],this._inverseViewport[1]=1/e.fullViewport[3]}get inverseViewport(){return this._inverseViewport}get lighting(){return this._lighting}fadeLighting(){switch(this.clouds.fadeFactor){case 0:this._lighting=this._oldLighting;break;default:this._fadedLighting.lerpLighting(this._oldLighting,this._newLighting,this.clouds.fadeFactor),this._lighting=this._fadedLighting;break;case 1:this._lighting=this._newLighting,this._oldLighting.copyFrom(this._newLighting)}}updateLighting(e,t,r,i){this._oldLighting.copyFrom(this.lighting),this._newLighting.noonFactor=t,this._newLighting.globalFactor=r,this._newLighting.set(e),i===Oe.FadeWithWeather&&this.clouds.requestFade(),this.fadeLighting()}}class ze{constructor(){this.fadeFactor=1,this.reprojectionMatrix=(0,Me.vt)()}}class We{constructor(e,t){this.rctx=e,this.lastFrameCamera=new A.A,this.output=O.V.Color,this.renderOccludedMask=Ve,this.bind=new Le(t),this.bind.alignPixelEnabled=!0}}const Ve=De.m$.Occlude|De.m$.OccludeAndTransparent|De.m$.OccludeAndTransparentStencil;var Ge=r(15941),je=r(44680),Ue=r(43047),qe=r(64465);let ke=class extends A.A{constructor(){super(...arguments),this._projectionMatrix=(0,Me.vt)()}get projectionMatrix(){return this._projectionMatrix}};(0,o._)([(0,u.MZ)()],ke.prototype,"_projectionMatrix",void 0),(0,o._)([(0,u.MZ)({readOnly:!0})],ke.prototype,"projectionMatrix",null),ke=(0,o._)([(0,p.$)("esri.views.3d.webgl-engine.lib.CascadeCamera")],ke);var Be,Ze=r(81330);!function(e){e[e.Highlight=0]="Highlight",e[e.ExcludeHighlight=1]="ExcludeHighlight"}(Be||(Be={}));class Qe{constructor(){this.camera=new ke,this.lightMat=(0,Me.vt)()}}class $e{constructor(){this.maxNumCascadesHighQuality=4,this.maxNumCascadesLowQuality=4,this.textureSizeModHighQuality=1.3,this.textureSizeModLowQuality=.9,this.splitSchemeLambda=0}}class Ye{constructor(e,t){this._fbos=e,this._viewingMode=t,this._enabled=!1,this._snapshots=new Array,this._textureHeight=0,this._numCascades=1,this.settings=new $e,this._projectionView=(0,Me.vt)(),this._projectionViewInverse=(0,Me.vt)(),this._modelViewLight=(0,Me.vt)(),this._cascadeDistances=[0,0,0,0,0],this._usedCascadeDistances=(0,E.vt)(),this._cascades=[new Qe,new Qe,new Qe,new Qe],this._lastOrigin=null,this._maxTextureWidth=Math.min((0,s.A)("esri-mobile")?4096:16384,e.rctx.parameters.maxTextureSize)}dispose(){this.enabled=!1,this.disposeOffscreenBuffers()}get depthTexture(){return this._handle?.getTexture()}get _textureWidth(){return this._textureHeight*this._numCascades}get numCascades(){return this._numCascades}get cascadeDistances(){return(0,Ue.s)(this._usedCascadeDistances,this._cascadeDistances[0],this._numCascades>1?this._cascadeDistances[1]:1/0,this._numCascades>2?this._cascadeDistances[2]:1/0,this._numCascades>3?this._cascadeDistances[3]:1/0)}disposeOffscreenBuffers(){this._handle=(0,l.Gz)(this._handle),this._discardSnapshots()}set maxCascades(e){this.settings.maxNumCascadesHighQuality=(0,Ge.qE)(Math.floor(e),1,4)}get maxCascades(){return this.settings.maxNumCascadesHighQuality}set enabled(e){this._enabled=e,e||this.disposeOffscreenBuffers()}get enabled(){return this._enabled}get ready(){return this._enabled&&null!=this.depthTexture}get cascades(){for(let e=0;e<this._numCascades;++e)st[e]=this._cascades[e];return st.length=this._numCascades,st}start(e,t,r,i,o){(0,Se.vA)(this.enabled);const{near:n,far:s}=function(e){let{near:t,far:r}=e;return t<2&&(t=2),r<2&&(r=2),t>=r&&(t=2,r=4),{near:t,far:r}}(r);this._computeCascadeDistances(n,s,i),this._textureHeight=this._computeTextureHeight(e,o,i),this._setupMatrices(e,t);const{viewMatrix:a,projectionMatrix:l}=e;for(let c=0;c<this._numCascades;++c)this._constructCascade(c,l,a,t);this._lastOrigin=null,this.clear()}finish(){(0,Se.vA)(this.enabled),this._handle?.detachDepth()}getShadowMapMatrices(e){if(!this._lastOrigin||!(0,v.p)(e,this._lastOrigin)){this._lastOrigin=this._lastOrigin||(0,m.vt)(),(0,v.c)(this._lastOrigin,e);for(let t=0;t<this._numCascades;++t){(0,f.Tl)(at,this._cascades[t].lightMat,e);for(let e=0;e<16;++e)lt[16*t+e]=at[e]}}return lt}moveSnapshot(e){(0,Se.vA)(this.enabled),this._handle?.detachDepth(),this._snapshots[e]?.release(),this._snapshots[e]=this._handle,this._handle=null,this.clear()}copySnapshot(e){const t=this._handle?.getTexture()?.descriptor;if(!this.enabled||!t)return;this._snapshots[e]?.release();const{width:r,height:i}=t,o=e===Be.Highlight?"shadow highlight snapshot":"shadow no highlight snapshot";this._snapshots[e]=this._fbos.acquire(r,i,o,R.N.RGBA4);const n=this._fbos.rctx;this._bindFbo();const s=n.bindTexture(this._snapshots[e]?.getTexture(),ue.g.TEXTURE_UNIT_FOR_UPDATES);n.gl.copyTexSubImage2D(ae.Ap.TEXTURE_2D,0,0,0,0,0,r,i),n.bindTexture(s,ue.g.TEXTURE_UNIT_FOR_UPDATES)}getSnapshot(e){return this.enabled?this._snapshots[e]?.getTexture():null}clear(){const e=this._fbos.rctx;this._ensureFbo(),this._bindFbo(),e.setClearColor(1,1,1,1),e.clear(ae.NV.COLOR|ae.NV.DEPTH)}_computeTextureHeight(e,t,r){const i=Math.min(window.devicePixelRatio,t)/e.pixelRatio,o=r?this.settings.textureSizeModHighQuality:this.settings.textureSizeModLowQuality,n=(0,Ze.Mv)(Math.floor(Math.max(e.fullWidth,e.fullHeight)*i*o)),s=Math.min(this._maxTextureWidth,this._numCascades*n);return(0,Ze.uT)(s/this._numCascades)}_ensureFbo(){this._handle?.fbo?.width===this._textureWidth&&this._handle?.fbo.height===this._textureHeight||(this._handle?.release(),this._handle=this._fbos.acquire(this._textureWidth,this._textureHeight,"shadow map",R.N.RGBA4)),this._handle?.acquireDepth(R.z.DEPTH16_BUFFER)}_discardSnapshot(e){this._snapshots[e]=(0,l.Gz)(this._snapshots[e])}_discardSnapshots(){for(let e=0;e<this._snapshots.length;++e)this._discardSnapshot(e);this._snapshots.length=0}_bindFbo(){this._fbos.rctx.bindFramebuffer(this._handle?.fbo)}_constructCascade(e,t,r,i){const o=this._cascades[e],n=-this._cascadeDistances[e],s=-this._cascadeDistances[e+1],a=(t[10]*n+t[14])/Math.abs(t[11]*n+t[15]),l=(t[10]*s+t[14])/Math.abs(t[11]*s+t[15]);(0,Se.vA)(a<l);for(let u=0;u<8;++u){(0,Ue.s)(Ke,u%4==0||u%4==3?-1:1,u%4==0||u%4==1?-1:1,u<4?a:l,1);const e=Je[u];(0,Ue.t)(e,Ke,this._projectionViewInverse),e[0]/=e[3],e[1]/=e[3],e[2]/=e[3]}(0,v.v)(nt,Je[0]),o.camera.viewMatrix=(0,f.Tl)(Xe,this._modelViewLight,nt);for(let u=0;u<8;++u)(0,v.t)(Je[u],Je[u],o.camera.viewMatrix);let c=Je[0][2],h=Je[0][2];for(let u=1;u<8;++u)c=Math.min(c,Je[u][2]),h=Math.max(h,Je[u][2]);c-=200,h+=200,o.camera.near=-h,o.camera.far=-c,function(e,t,r,i,o){const n=1/Je[0][3],s=1/Je[4][3];(0,Se.vA)(n<s);let a=n+Math.sqrt(n*s);const l=Math.sin((0,Ge.XM)(e[2]*t[0]+e[6]*t[1]+e[10]*t[2]));a/=l,function(e,t,r,i,o,n,s,a){(0,V.hZ)(ct,0,0);for(let C=0;C<4;++C)(0,V.WQ)(ct,ct,e[C]);(0,V.hs)(ct,ct,.25),(0,V.hZ)(ht,0,0);for(let C=4;C<8;++C)(0,V.WQ)(ht,ht,e[C]);(0,V.hs)(ht,ht,.25),(0,V.Cc)(dt[0],e[4],e[5],.5),(0,V.Cc)(dt[1],e[5],e[6],.5),(0,V.Cc)(dt[2],e[6],e[7],.5),(0,V.Cc)(dt[3],e[7],e[4],.5);let l=0,c=(0,V.hG)(dt[0],ct);for(let C=1;C<4;++C){const e=(0,V.hG)(dt[C],ct);e<c&&(c=e,l=C)}(0,V.Re)(ut,dt[l],e[l+4]);const h=ut[0];let d,u;ut[0]=-ut[1],ut[1]=h,(0,V.Re)(gt,ht,ct),(0,V.Om)(gt,ut)<0&&(0,V.ze)(ut,ut),(0,V.Cc)(ut,ut,gt,r),(0,V.S8)(ut,ut),d=u=(0,V.Om)((0,V.Re)(pt,e[0],ct),ut);for(let C=1;C<8;++C){const t=(0,V.Om)((0,V.Re)(pt,e[C],ct),ut);t<d?d=t:t>u&&(u=t)}(0,V.C)(i,ct),(0,V.hs)(pt,ut,d-t),(0,V.WQ)(i,i,pt);let g=-1,p=1,f=0,v=0;for(let C=0;C<8;++C){(0,V.Re)(ft,e[C],i),(0,V.S8)(ft,ft);const t=ut[0]*ft[1]-ut[1]*ft[0];t>0?t>g&&(g=t,f=C):t<p&&(p=t,v=C)}(0,Se.MX)(g>0,"leftArea"),(0,Se.MX)(p<0,"rightArea"),(0,V.hs)(vt,ut,d),(0,V.WQ)(vt,vt,ct),(0,V.hs)(mt,ut,u),(0,V.WQ)(mt,mt,ct),_t[0]=-ut[1],_t[1]=ut[0];const m=(0,Se.L)(i,e[v],mt,(0,V.WQ)(pt,mt,_t),1,o),_=(0,Se.L)(i,e[f],mt,pt,1,n),y=(0,Se.L)(i,e[f],vt,(0,V.WQ)(pt,vt,_t),1,s),x=(0,Se.L)(i,e[v],vt,pt,1,a);(0,Se.MX)(m,"rayRay"),(0,Se.MX)(_,"rayRay"),(0,Se.MX)(y,"rayRay"),(0,Se.MX)(x,"rayRay")}(Je,a,l,et,tt,rt,it,ot),function(e,t,r,i,o){(0,V.Re)(wt,r,i),(0,V.hs)(wt,wt,.5),bt[0]=wt[0],bt[1]=wt[1],bt[2]=0,bt[3]=wt[1],bt[4]=-wt[0],bt[5]=0,bt[6]=wt[0]*wt[0]+wt[1]*wt[1],bt[7]=wt[0]*wt[1]-wt[1]*wt[0],bt[8]=1,bt[yt(0,2)]=-(0,V.Om)(Ct(bt,0),e),bt[yt(1,2)]=-(0,V.Om)(Ct(bt,1),e);let n=(0,V.Om)(Ct(bt,0),r)+bt[yt(0,2)],s=(0,V.Om)(Ct(bt,1),r)+bt[yt(1,2)],a=(0,V.Om)(Ct(bt,0),i)+bt[yt(0,2)],l=(0,V.Om)(Ct(bt,1),i)+bt[yt(1,2)];n=-(n+a)/(s+l),bt[yt(0,0)]+=bt[yt(1,0)]*n,bt[yt(0,1)]+=bt[yt(1,1)]*n,bt[yt(0,2)]+=bt[yt(1,2)]*n,n=1/((0,V.Om)(Ct(bt,0),r)+bt[yt(0,2)]),s=1/((0,V.Om)(Ct(bt,1),r)+bt[yt(1,2)]),bt[yt(0,0)]*=n,bt[yt(0,1)]*=n,bt[yt(0,2)]*=n,bt[yt(1,0)]*=s,bt[yt(1,1)]*=s,bt[yt(1,2)]*=s,bt[yt(2,0)]=bt[yt(1,0)],bt[yt(2,1)]=bt[yt(1,1)],bt[yt(2,2)]=bt[yt(1,2)],bt[yt(1,2)]+=1,n=(0,V.Om)(Ct(bt,1),t)+bt[yt(1,2)],s=(0,V.Om)(Ct(bt,2),t)+bt[yt(2,2)],a=(0,V.Om)(Ct(bt,1),r)+bt[yt(1,2)],l=(0,V.Om)(Ct(bt,2),r)+bt[yt(2,2)],n=-.5*(n/s+a/l),bt[yt(1,0)]+=bt[yt(2,0)]*n,bt[yt(1,1)]+=bt[yt(2,1)]*n,bt[yt(1,2)]+=bt[yt(2,2)]*n,n=(0,V.Om)(Ct(bt,1),t)+bt[yt(1,2)],s=(0,V.Om)(Ct(bt,2),t)+bt[yt(2,2)],a=-s/n,bt[yt(1,0)]*=a,bt[yt(1,1)]*=a,bt[yt(1,2)]*=a,o[0]=bt[0],o[1]=bt[1],o[2]=0,o[3]=bt[2],o[4]=bt[3],o[5]=bt[4],o[6]=0,o[7]=bt[5],o[8]=0,o[9]=0,o[10]=1,o[11]=0,o[12]=bt[6],o[13]=bt[7],o[14]=0,o[15]=bt[8]}(et,tt,it,ot,o.projectionMatrix),o.projectionMatrix[10]=2/(r-i),o.projectionMatrix[14]=-(r+i)/(r-i)}(r,i,c,h,o.camera),(0,f.lw)(o.lightMat,o.camera.projectionMatrix,o.camera.viewMatrix);const d=this._textureHeight;o.camera.viewport=[e*d,0,d,d]}_setupMatrices(e,t){(0,f.lw)(this._projectionView,e.projectionMatrix,e.viewMatrix),(0,f.B8)(this._projectionViewInverse,this._projectionView);const r=this._viewingMode===qe.RT.Global?e.eye:(0,v.i)(nt,0,0,1);(0,f.t5)(this._modelViewLight,[0,0,0],[-t[0],-t[1],-t[2]],r)}_computeCascadeDistances(e,t,r){const i=r?this.settings.maxNumCascadesHighQuality:this.settings.maxNumCascadesLowQuality;this._numCascades=Math.min(1+Math.floor((0,Se.kL)(t/e,4)),i);const o=(t-e)/this._numCascades,n=(t/e)**(1/this._numCascades);let s=e,a=e;for(let l=0;l<this._numCascades+1;++l)this._cascadeDistances[l]=(0,Ge.Cc)(s,a,this.settings.splitSchemeLambda),s*=n,a+=o}get test(){}}const Xe=(0,Me.vt)(),Ke=(0,E.vt)(),Je=[];for(let Yt=0;Yt<8;++Yt)Je.push((0,E.vt)());const et=(0,Ae.vt)(),tt=(0,Ae.vt)(),rt=(0,Ae.vt)(),it=(0,Ae.vt)(),ot=(0,Ae.vt)(),nt=(0,m.vt)(),st=[],at=(0,Me.vt)(),lt=Me.zK.concat(Me.zK,Me.zK,Me.zK,Me.zK),ct=(0,Ae.vt)(),ht=(0,Ae.vt)(),dt=[(0,Ae.vt)(),(0,Ae.vt)(),(0,Ae.vt)(),(0,Ae.vt)()],ut=(0,Ae.vt)(),gt=(0,Ae.vt)(),pt=(0,Ae.vt)(),ft=(0,Ae.vt)(),vt=(0,Ae.vt)(),mt=(0,Ae.vt)(),_t=(0,Ae.vt)();function yt(e,t){return 3*t+e}const xt=(0,Ae.vt)();function Ct(e,t){return(0,V.hZ)(xt,e[t],e[t+3]),xt}const wt=(0,Ae.vt)(),bt=(0,je.vt)();var St=r(91967),Tt=r(78315),Rt=r(21255),Ot=r(63496),Pt=r(29808),Dt=r(3112),It=r(57824),Mt=r(13840),At=r(96840);let Et=class extends St.A{constructor(e){super(e),this._pending=new Ft,this._changes=new Ot.VR,this._renderers=new Map,this._sortedRenderers=new c.A,this._geometries=new Map,this._hasHighlights=!1,this._hasWater=!1}destroy(){this._changes.prune(),this._renderers.forEach((e=>e.destroy())),this._renderers.clear(),this._sortedRenderers.clear(),this._geometries.clear(),this._pending.clear()}get updating(){return!this._pending.empty||this._changes.updates.length>0}get rctx(){return this.rendererContext.rctx}get _materials(){return this.rendererContext.materials}get _localOriginFactory(){return this.rendererContext.localOriginFactory}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccludedDraped(){for(const e of this._renderers.values())if(0!==e.numGeometries&&!e.queryRenderOccludedState(De.m$.Occlude))return!0;return!1}get isEmpty(){return!this.updating&&0===this._renderers.size&&0===this._geometries.size}getMaterialRenderer(e){return this._renderers.get(e)}get sortedRenderers(){return this._sortedRenderers}commitChanges(){if(!this.updating)return!1;this._processAddsRemoves();const e=(0,Mt.$T)(this._changes);let t=!1;return e.forEach(((e,r)=>{let i=this._renderers.get(r);!i&&e.adds.length>0&&(i=new At.y({material:r}),i.initializeRenderContext(this.rendererContext.pluginContext,this._materials),this._renderers.set(r,i),t=!0),i&&(i.modify(e),0===i.numGeometries&&(this._renderers.delete(r),i.destroy(),t=!0))})),this._changes.clear(),t&&this._updateSortedMaterialRenderers(),this._hasHighlights=(0,a.Bs)(this._renderers,(e=>{const t=e.produces.get(Ne.N.DRAPED_MATERIAL);return!!t&&t(O.V.Highlight)})),this._hasWater=(0,a.Bs)(this._renderers,(e=>{const t=e.produces.get(Ne.N.DRAPED_WATER);return!!t&&t(O.V.Normal)})),this.notifyChange("updating"),!0}addGeometries(e,t){if(0===e.length)return;const r=this._validateRenderGeometries(e);for(const o of r)this._geometries.set(o.id,o);const i=this._pending.empty;for(const o of r)this._pending.adds.add(o);i&&this.notifyChange("updating"),t===It.q.UPDATE&&this._notifyGraphicGeometryChanged(e)}removeGeometries(e,t){const r=this._pending.empty,i=this._pending.adds;for(const o of e)i.has(o)?(this._pending.removed.add(o),i.delete(o)):this._pending.removed.has(o)||this._pending.removes.add(o),this._geometries.delete(o.id);r&&!this._pending.empty&&this.notifyChange("updating"),t===It.q.UPDATE&&this._notifyGraphicGeometryChanged(e)}modifyGeometries(e,t){const r=0===this._changes.updates.length;for(const i of e){const e=this._changes.updates.pushNew();e.renderGeometry=this._validateRenderGeometry(i),e.updateType=t}switch(r&&this._changes.updates.length>0&&this.notifyChange("updating"),t){case It.k.TRANSFORMATION:case It.k.GEOMETRY:return this._notifyGraphicGeometryChanged(e);case It.k.VISIBILITY:return this._notifyGraphicVisibilityChanged(e)}}updateAnimation(e){let t=!1;return this._sortedRenderers.forAll((r=>t=!!r.updateAnimation&&r.updateAnimation(e)||t)),t}precompile(e){return this._sortedRenderers.reduce(((t,r)=>r.precompile(e)||t),!1)}render(e){this._sortedRenderers.forAll((t=>{const r=t.acquireTechniques(e);r&&(t.render(e,r),(0,W.VM)(r))}))}intersect(e,t,r,i,o){for(const n of this._geometries.values()){if(!i(n))continue;this._intersectRenderGeometry(n,r,t,0,e,o);const s=this.rendererContext.longitudeCyclical;s&&(n.boundingSphere[0]-n.boundingSphere[3]<s.min&&this._intersectRenderGeometry(n,r,t,s.range,e,o),n.boundingSphere[0]+n.boundingSphere[3]>s.max&&this._intersectRenderGeometry(n,r,t,-s.range,e,o)),o++}return o}_updateSortedMaterialRenderers(){this._sortedRenderers.clear();let e=0;for(const t of this._renderers.values())t.drapedPriority=e++,this._sortedRenderers.push(t);this._sortedRenderers.sort(((e,t)=>t.material?.renderPriority===e.material?.renderPriority?e.drapedPriority-t.drapedPriority:(t.material?.renderPriority||0)-(e.material?.renderPriority||0)))}_processAddsRemoves(){this._changes.adds.clear(),this._changes.removes.clear(),this._changes.adds.pushArray(Array.from(this._pending.adds)),this._changes.removes.pushArray(Array.from(this._pending.removes)),this._changes.updates.filterInPlace((e=>{let{renderGeometry:t}=e;return!this._pending.has(t)})),this._pending.clear()}_intersectRenderGeometry(e,t,r,i,o,n){if(!e.visible||!e.material.visible)return;let s=0;i+=e.transformation[12],s=e.transformation[13],Nt[0]=r[0]-i,Nt[1]=r[1]-s,e.screenToWorldRatio=this.rendererContext.screenToWorldRatio,e.material.intersectDraped(e,null,o,Nt,((r,i,s)=>{!function(e,t,r,i,o,n,s){const a=new Rt.MQ(n,s,t),l=t=>{t.set(Dt.dz.OVERLAY,a,e.dist,e.normal,e.transformation,r,i)};if((null==o.results.min.drapedLayerOrder||r>=o.results.min.drapedLayerOrder)&&(null==o.results.min.dist||o.results.ground.dist<=o.results.min.dist)&&l(o.results.min),o.options.store!==Dt.oH.MIN&&(null==o.results.max.drapedLayerOrder||r<o.results.max.drapedLayerOrder)&&(null==o.results.max.dist||o.results.ground.dist>o.results.max.dist)&&l(o.results.max),o.options.store===Dt.oH.ALL){const e=(0,Pt.G7)(o.ray);l(e),o.results.all.push(e)}}(t,s,n,e.material.renderPriority,o,e.layerUid,e.graphicUid)}),t)}_notifyGraphicGeometryChanged(e){if(null==this.drapeSource.notifyGraphicGeometryChanged)return;let t;for(const{graphicUid:r}of e)null!=r&&r!==t&&(this.drapeSource.notifyGraphicGeometryChanged(r),t=r)}_notifyGraphicVisibilityChanged(e){if(null==this.drapeSource.notifyGraphicVisibilityChanged)return;let t;for(const{graphicUid:r}of e)null!=r&&r!==t&&(this.drapeSource.notifyGraphicVisibilityChanged(r),t=r)}_validateRenderGeometries(e){for(const t of e)this._validateRenderGeometry(t);return e}_validateRenderGeometry(e){return null==e.localOrigin&&(e.localOrigin=this._localOriginFactory.getOrigin((0,Tt.a)(e.boundingSphere))),e}get test(){}};(0,o._)([(0,u.MZ)()],Et.prototype,"drapeSource",void 0),(0,o._)([(0,u.MZ)()],Et.prototype,"updating",null),(0,o._)([(0,u.MZ)()],Et.prototype,"rctx",null),(0,o._)([(0,u.MZ)({constructOnly:!0})],Et.prototype,"rendererContext",void 0),(0,o._)([(0,u.MZ)()],Et.prototype,"_materials",null),(0,o._)([(0,u.MZ)()],Et.prototype,"_localOriginFactory",null),(0,o._)([(0,u.MZ)({readOnly:!0})],Et.prototype,"isEmpty",null),(0,o._)([(0,u.MZ)()],Et.prototype,"_renderers",void 0),(0,o._)([(0,u.MZ)()],Et.prototype,"_geometries",void 0),Et=(0,o._)([(0,p.$)("esri.views.3d.webgl-engine.lib.SortedRenderGeometryRenderer")],Et);class Ft{constructor(){this.adds=new Set,this.removes=new Set,this.removed=new Set}get empty(){return 0===this.adds.size&&0===this.removes.size&&0===this.removed.size}has(e){return this.adds.has(e)||this.removes.has(e)||this.removed.has(e)}clear(){this.adds.clear(),this.removes.clear(),this.removed.clear()}}const Nt=(0,Ae.vt)();class Ht extends q.w{constructor(e,t,i){super(e,t,new U.$(z.a,(()=>r.e(2553).then(r.bind(r,62553)))),i)}initializePipeline(e){return e.hasAlpha?(0,B.Ey)({blending:B.Ky,colorWrite:B.kn}):(0,B.Ey)({colorWrite:B.kn})}}var Lt=r(6485);class zt extends Lt.K{constructor(){super(...arguments),this.hasAlpha=!1}}(0,o._)([(0,Lt.W)()],zt.prototype,"hasAlpha",void 0);var Wt=r(44513),Vt=r(71011),Gt=r(80381);class jt extends q.w{constructor(e,t,i){super(e,t,new U.$(Gt.a,(()=>r.e(1747).then(r.bind(r,71747)))),i)}}var Ut=r(59752);let qt=class extends W.RW{constructor(e){super(e),this._overlays=null,this._renderTargets=null,this._overlayParameters=new Gt.O,this.hasHighlights=!1,this._hasWater=!1,this._renderers=new Map,this._sortedDrapeSourceRenderersDirty=!1,this._sortedRenderers=new c.A,this._passParameters=new z.T,this._materials=null,this._screenToWorldRatio=1,this._localOriginFactory=null,this.unloadedMemory=0,this.ignoresMemoryFactor=!1,this._camera=new A.A,this.worldToPCSRatio=1,this.events=new n.A,this.longitudeCyclical=null,this.produces=new Map([[Ne.N.DRAPED_MATERIAL,e=>e!==O.V.Highlight||this.hasHighlights],[Ne.N.DRAPED_WATER,()=>this._hasWater]]),this._hasTargetWithoutRasterImage=!1,this._hasDrapedFeatureSource=!1,this._hasDrapedRasterSource=!1}initialize(){const{view:e}=this,{_stage:t}=e,r=t.renderer.fboCache,i=t.renderView,{waterTextures:o,textures:n}=i;this._renderContext=new We(this._rctx,new Ye(r,e.state.viewingMode)),this.addHandles([(0,h.wB)((()=>o.updating),(()=>this.events.emit("content-changed")),h.pc),(0,h.wB)((()=>this.spatialReference),(e=>this._localOriginFactory=new Pe.g(e)),h.pc),(0,h.on)((()=>this.view.allLayerViews),"after-changes",(()=>this._sortedDrapeSourceRenderersDirty=!0)),(0,h.wB)((()=>xe(this.view.highlights)),(()=>this._sortedDrapeSourceRenderersDirty=!0),h.pc)]),this._materials=new Te(n,this._techniques,(()=>{this.notifyChange("rendersOccludedDraped"),this.events.emit("content-changed"),this.notifyChange("updating"),this.notifyChange("isEmpty")}),(()=>this.events.emit("content-changed")));const{_bindParameters:s,_camera:a}=this;s.slot=Ne.N.DRAPED_MATERIAL,s.mainDepth=null,a.near=1,a.far=1e4,a.relativeElevation=null,s.camera=this._camera,s.oitPass=Ie.Y.NONE,s.updateLighting([new Vt.$p((0,m.S)())],0,0,Oe.Immediate),this.addHandles(this.view.resourceController.scheduler.registerTask(Ut.W6.STAGE,this))}destroy(){this._renderers.forEach((e=>e.destroy())),this._renderers.clear(),this._passParameters.texture=(0,l.WD)(this._passParameters.texture),this.disposeOverlays()}get _bindParameters(){return this._renderContext.bind}get _rctx(){return this.view._stage.renderView.renderingContext}get _techniques(){return this.view._stage.renderView.techniques}get rctx(){return this._rctx}get materials(){return this._materials}get screenToWorldRatio(){return this._screenToWorldRatio}get localOriginFactory(){return this._localOriginFactory}get pluginContext(){return this._pluginContext}initializeRenderContext(e){this._pluginContext=e,this._techniques.precompile(jt)}uninitializeRenderContext(){}acquireTechniques(){return[]}render(){}get updating(){return this._sortedDrapeSourceRenderersDirty||(0,a.Bs)(this._renderers,(e=>e.updating))}get hasOverlays(){return null!=this._overlays&&null!=this._renderTargets}getMaterialRenderer(e){for(const t of this._renderers.values()){const r=t.getMaterialRenderer(e);if(r)return r}return null}get layers(){return this._sortedDrapeSourceRenderersDirty&&this._updateSortedDrapeSourceRenderers(),this._sortedRenderers.map((e=>e.drapeSource.layer)).filter((e=>!!e))}createGeometryDrapeSourceRenderer(e){return this.createDrapeSourceRenderer(e,Et)}createDrapeSourceRenderer(e,t,r){const i=this._renderers.get(e);null!=i&&i.destroy();const o=new t({...r,rendererContext:this,drapeSource:e});return this._renderers.set(e,o),this._sortedDrapeSourceRenderersDirty=!0,"fullOpacity"in e&&this.addHandles((0,h.wB)((()=>e.fullOpacity),(()=>this.events.emit("content-changed"))),e),o}removeDrapeSourceRenderer(e){if(null==e)return;const t=this._renderers.get(e);null!=t&&(this._sortedDrapeSourceRenderersDirty=!0,this._renderers.delete(e),this.removeHandles(e),t.destroy())}computeValidity(){return this._renderTargets?.computeValidity()??0}releaseRenderTargets(){this._renderTargets?.dispose()}get overlays(){return this._overlays??[]}ensureDrapeTargets(e){this._hasTargetWithoutRasterImage=!!this._overlays&&(0,d.bw)(e,(e=>e.drapeTargetType===_.sv.WithoutRasterImage))}ensureDrapeSources(e){this._overlays?(this._hasDrapedFeatureSource=(0,d.bw)(e,(e=>e.drapeSourceType===_.Om.Features)),this._hasDrapedRasterSource=(0,d.bw)(e,(e=>e.drapeSourceType===_.Om.RasterImage))):this._hasDrapedFeatureSource=this._hasDrapedRasterSource=!1}get _needsColorWithoutRasterImage(){return this._hasDrapedRasterSource&&this._hasDrapedFeatureSource&&this._hasTargetWithoutRasterImage}ensureOverlays(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._bindParameters.overlayStretch;null==this._overlays&&(this._renderTargets=new I(this.view._stage.renderer.fboCache),this._overlays=[new b,new b]),this.ensureDrapeTargets(e),this.ensureDrapeSources(t),this._bindParameters.overlayStretch=r}disposeOverlays(){this._overlays=null,this._renderTargets=(0,l.WD)(this._renderTargets),this.events.emit("textures-disposed")}getTexture(e){if(null!=e)return e===i.ColorNoRasterImage&&!this._needsColorWithoutRasterImage&&this._hasDrapedFeatureSource?this._renderTargets?.getTexture(i.Color):this._renderTargets?.getTexture(e)}get running(){return this.updating}runTask(e){this._processDrapeSources(e,(()=>!0))}_processDrapeSources(e,t){let r=!1;for(const[i,o]of this._renderers){if(e.done)break;(i.destroyed||t(i))&&o.commitChanges()&&(r=!0,e.madeProgress())}this._sortedDrapeSourceRenderersDirty&&(this._sortedDrapeSourceRenderersDirty=!1,r=!0,this._updateSortedDrapeSourceRenderers()),r&&(null!=this._overlays&&0===this._renderers.size&&this.disposeOverlays(),this.notifyChange("updating"),this.notifyChange("isEmpty"),this.events.emit("content-changed"),this.hasHighlights=(0,a.Bs)(this._renderers,(e=>e.hasHighlights)),this.notifyChange("rendersOccludedDraped"),this._updateHasWater())}processSyncDrapeSources(){this._processDrapeSources(Ut.Bb,(e=>e.updatePolicy===Wt.q.SYNC))}get isEmpty(){return!y.b.OVERLAY_DRAW_DEBUG_TEXTURE&&!(0,a.Bs)(this._renderers,(e=>!e.isEmpty))}get hasWater(){return this._hasWater}get rendersOccludedDraped(){const e=this._renderContext.renderOccludedMask;this._renderContext.renderOccludedMask=Qt,++this._techniques.precompiling;const t=this._sortedRenderers.some((e=>{let{renderer:t}=e;return t.precompile(this._renderContext)}));return--this._techniques.precompiling,this._renderContext.renderOccludedMask=e,t}renders(e){if(y.b.OVERLAY_DRAW_DEBUG_TEXTURE&&e!==i.Occluded&&e!==i.Highlight)return!0;++this._techniques.precompiling;const t=this._sortedRenderers.some((e=>{let{renderer:t}=e;return t.precompile(this._renderContext)}));return--this._techniques.precompiling,t}get mode(){return this.isEmpty?N.Disabled:this._renderTargets?.getTexture(i.WaterNormal)?N.EnabledWithWater:this._renderTargets?.getTexture(i.Color)?N.Enabled:N.Disabled}updateAnimation(e){let t=!1;return this._renderers.forEach((r=>t=r.updateAnimation(e)||t)),t}updateDrapeSourceOrder(){this._sortedDrapeSourceRenderersDirty=!0}precompileShaders(e){if(this._renderTargets){this._bindParameters.alignPixelEnabled=e.alignPixelEnabled,this._bindParameters.highlightGroupName=null,++this._techniques.precompiling;for(const e of this._renderTargets.targets){if(e.content===i.ColorNoRasterImage&&!this._needsColorWithoutRasterImage)continue;const t=e.output;this._renderContext.output=t,this._bindParameters.slot=t===O.V.Normal?Ne.N.DRAPED_WATER:Ne.N.DRAPED_MATERIAL,e.content===i.Occluded&&(this._renderContext.renderOccludedMask=Qt),this._sortedRenderers.forAll((t=>{let{drapeSource:r,renderer:o}=t;e.content===i.ColorNoRasterImage&&r.drapeSourceType===_.Om.RasterImage||o.precompile(this._renderContext)})),this._renderContext.renderOccludedMask=Ve}--this._techniques.precompiling}}drawOverlays(e){if(this._overlays&&this._renderTargets){for(const e of this._overlays)this.longitudeCyclical?e.setupGeometryViewsCyclical(this.longitudeCyclical):e.setupGeometryView();this._bindParameters.alignPixelEnabled=e.alignPixelEnabled;for(const t of this._renderTargets.targets){if(t.content===i.ColorNoRasterImage&&!this._needsColorWithoutRasterImage)continue;const r=this._drawTarget(x.vr.INNER,t,e),o=this._drawTarget(x.vr.OUTER,t,e);(r||o)&&t.fbo.generateMipMap()}}}_drawTarget(e,t,r){const o=this._overlays[e],n=o.canvasGeometries;if(0===n.numViews)return!1;const{contentPixelRatio:s}=r;this._screenToWorldRatio=s*o.mapUnitsPerPixel/this._bindParameters.overlayStretch;const a=t.output;if(this.isEmpty||a===O.V.Normal&&!this.hasWater||!o.hasSomeSizedView())return!1;const{_rctx:l,_bindParameters:c}=this;if(this._camera.pixelRatio=o.pixelRatio*s,this._renderContext.output=a,c.screenToWorldRatio=this._screenToWorldRatio,c.screenToPCSRatio=this._screenToWorldRatio*this.worldToPCSRatio,c.slot=a===O.V.Normal?Ne.N.DRAPED_WATER:Ne.N.DRAPED_MATERIAL,t.content===i.Occluded&&(this._renderContext.renderOccludedMask=Qt),c.highlightGroupName=null,!this.renders(t.content))return this._renderContext.renderOccludedMask=Ve,!1;const{resolution:h}=o,d=e===x.vr.INNER?0:h;if(l.setViewport(d,0,h,h),this._bindTargetFBO(t),e===x.vr.INNER&&(l.setClearColor(0,0,0,0),l.clear(ae.NV.COLOR)),y.b.OVERLAY_DRAW_DEBUG_TEXTURE&&t.content!==i.Occluded&&t.content!==i.Highlight){this._techniques.precompile(Ht,$t);const t=this._techniques.acquire(Ht,$t);for(let r=0;r<n.numViews;r++)this._setViewParameters(n.extents[r],o),this._ensureDebugPatternResources(o.resolution,Bt[e]),l.bindTechnique(t,c,this._passParameters),l.screen.draw();t.release()}if(t.output===O.V.Highlight){const{fboCache:r}=this.view._stage.renderer,i=this._resolution;!function(e,t,r,i,o,n){let s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,a=arguments.length>7?arguments[7]:void 0;const{highlightGroupIndices:l}=o;l.clear();const c=[];_e(i,(e=>{const{name:t}=e;l.set(t,c.length),c.push(t)}));const h=l.size,{gl:d}=e;(0,V.hZ)(o.highlightMixOrigin,s,0);let u=null;h>1&&(u=t.acquire(r.width,r.height,"highlight mix",R.N.RG),e.bindFramebuffer(u.fbo),e.clearFramebuffer(E.uY));const g=u?.getTexture()??null;o.highlightMixTexture=g,a();for(let p=0;p<h;++p)p>0&&(e.bindTexture(g,0),d.copyTexSubImage2D(ae.Ap.TEXTURE_2D,0,0,0,s,0,r.width,r.height),e.bindTexture(null,0)),e.clear(ae.NV.DEPTH),o.highlightLevel=p,o.highlightGroupName=c[p],n();u?.release()}(l,r,{width:i,height:i},this.view.highlights,c,(()=>this._renderAllGeometry(e,t)),d,(()=>this._bindTargetFBO(t)))}else this._renderAllGeometry(e,t);return l.bindFramebuffer(null),this._renderContext.renderOccludedMask=Ve,!0}_renderAllGeometry(e,t){const r=this._overlays[e],o=r.canvasGeometries;this._sortedRenderers.forAll((n=>{let{drapeSource:s,renderer:a}=n;if(t.content===i.ColorNoRasterImage&&s.drapeSourceType===_.Om.RasterImage)return;const{fullOpacity:l}=s,c=null!=l&&l<1&&t.output===O.V.Color&&this._bindTemporaryFBO();for(let e=0;e<o.numViews;e++)this._setViewParameters(o.extents[e],r),a.render(this._renderContext);if(c){this._bindTargetFBO(t),this._overlayParameters.texture=c.getTexture(),this._overlayParameters.opacity=l,this._overlayParameters.overlayIndex=e;const r=this._techniques.acquire(jt);this._rctx.bindTechnique(r,this._bindParameters,this._overlayParameters),this._rctx.screen.draw(),r.release(),c.release()}}))}_bindTargetFBO(e){const t=this._resolution,r=2*t;e.fbo.bind(this._rctx,r,t)}_bindTemporaryFBO(){const e=this._resolution,t=2*e,r=this.view._stage.renderer.fboCache,i=r.acquire(t,e,"overlay tmp");return r.rctx.bindFramebuffer(i.fbo),r.rctx.clear(ae.NV.COLOR),i}get _resolution(){return this._overlays?.[x.vr.INNER].resolution??0}notifyContentChanged(){this.events.emit("content-changed")}intersect(e,t,r,i){this._sortedDrapeSourceRenderersDirty&&this._updateSortedDrapeSourceRenderers();let o=0;for(const{renderer:n}of this._sortedRenderers)o=n.intersect?.(e,t,r,i,o)??o}_updateSortedDrapeSourceRenderers(){if(this._sortedRenderers.clear(),0===this._renderers.size)return;const e=this.view.map.allLayers,t=e.length;this._renderers.forEach(((r,i)=>{const o=e.indexOf(i.layer),n=o>=0,s=i.renderGroup??(n?_.O7.MapLayer:_.O7.ViewLayer),a=t*s+(n?o:0);this._sortedRenderers.push(new kt(i,r,a))})),this._sortedRenderers.sort(((e,t)=>e.index-t.index))}_setViewParameters(e,t){const r=this._camera;r.viewport=[0,0,t.resolution,t.resolution],(0,f.v3)(r.projectionMatrix,0,e[2]-e[0],0,e[3]-e[1],r.near,r.far),(0,f.kN)(r.viewMatrix,[-e[0],-e[1],0])}_updateHasWater(){const e=(0,a.Bs)(this._renderers,(e=>e.hasWater));e!==this._hasWater&&(this._hasWater=e,this.events.emit("has-water"))}_ensureDebugPatternResources(e,t){if((0,v.i)(this._passParameters.color,t[0],t[1],t[2]),this._passParameters.texture)return;const r=new Uint8Array(e*e*4);let i=0;for(let n=0;n<e;n++)for(let t=0;t<e;t++){const o=Math.floor(t/10),s=Math.floor(n/10);o<2||s<2||10*o>e-20||10*s>e-20?(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=255):(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=1&o&&1&s?1&t^1&n?0:255:1&o^1&s?0:128)}const o=new ge.R(e);o.samplingMode=ae.Cj.NEAREST,this._passParameters.texture=new ue.g(this._rctx,o,r)}get test(){}};(0,o._)([(0,u.MZ)()],qt.prototype,"hasHighlights",void 0),(0,o._)([(0,u.MZ)()],qt.prototype,"_sortedDrapeSourceRenderersDirty",void 0),(0,o._)([(0,u.MZ)({constructOnly:!0})],qt.prototype,"view",void 0),(0,o._)([(0,u.MZ)({readOnly:!0})],qt.prototype,"_techniques",null),(0,o._)([(0,u.MZ)()],qt.prototype,"worldToPCSRatio",void 0),(0,o._)([(0,u.MZ)()],qt.prototype,"spatialReference",void 0),(0,o._)([(0,u.MZ)({type:Boolean,readOnly:!0})],qt.prototype,"updating",null),(0,o._)([(0,u.MZ)()],qt.prototype,"isEmpty",null),(0,o._)([(0,u.MZ)({readOnly:!0})],qt.prototype,"rendersOccludedDraped",null),qt=(0,o._)([(0,p.$)("esri.views.3d.terrain.OverlayRenderer")],qt);class kt{constructor(e,t,r){this.drapeSource=e,this.renderer=t,this.index=r}}const Bt=[[1,.5,.5],[.5,.5,1]],Zt=-2,Qt=De.m$.OccludeAndTransparent,$t=new zt;$t.hasAlpha=!0},19539:(e,t,r)=>{var i,o,n;r.d(t,{vr:()=>i}),function(e){e[e.INNER=0]="INNER",e[e.OUTER=1]="OUTER"}(i||(i={})),function(e){e[e.REGULAR=0]="REGULAR",e[e.HAS_NORTH_POLE=1]="HAS_NORTH_POLE",e[e.HAS_SOUTH_POLE=2]="HAS_SOUTH_POLE",e[e.HAS_BOTH_POLES=3]="HAS_BOTH_POLES"}(o||(o={})),function(e){e[e.FADING=0]="FADING",e[e.IMMEDIATE=1]="IMMEDIATE",e[e.UNFADED=2]="UNFADED"}(n||(n={}))},4570:(e,t,r)=>{r.d(t,{Q:()=>a});var i=r(75844),o=r(64839),n=r(70367),s=r(21019);function a(e){const{vertex:t}=e;t.uniforms.add(new n.N("coverageTexture",(e=>e.coverageTexture)),new i.g("highlightRenderCellCount",(e=>[e.horizontalCellCount,e.verticalCellCount])),new i.g("highlightTextureResolution",(e=>[e.highlightTexture.descriptor.width,e.highlightTexture.descriptor.height]))),t.constants.add("cellSize","int",s.g),e.varyings.add("sUV","vec2"),e.varyings.add("vOutlinePossible","float"),t.code.add(o.H`const ivec2 cellVertices[4] = ivec2[4](ivec2(0,0), ivec2(1,0), ivec2(0,1), ivec2(1,1));`),t.main.add(o.H`int cellIndex = gl_InstanceID;
int cellX = cellIndex % highlightRenderCellCount[0];
int cellY = (cellIndex - cellX) / highlightRenderCellCount[0];
ivec2 cellPos = ivec2(cellX, cellY);
vec4 cov = texelFetch(coverageTexture, cellPos, 0);
if (cov.r == 0.0) {
gl_Position = vec4(0.0);
return;
}
vOutlinePossible = cov.g;
ivec2 iPosInCell = cellVertices[gl_VertexID];
vec2 sPos = vec2(cellPos * cellSize + iPosInCell * (cellSize));
vec2 vPos = sPos / vec2(highlightTextureResolution);
sUV = vPos;
gl_Position = vec4(2.0 * vPos - vec2(1.0), 0.0, 1.0);`)}},79138:(e,t,r)=>{r.d(t,{y:()=>o});var i=r(64839);function o(e){const{fragment:t}=e;t.code.add(i.H`uint readChannelBits(uint channel, int highlightLevel) {
int llc = (highlightLevel & 3) << 1;
return (channel >> llc) & 3u;
}
uint readChannel(vec2 texel, int highlightLevel) {
int lic = (highlightLevel >> 2) & 1;
return uint(texel[lic] * 255.0);
}
uint readLevelBits(vec2 texel, int highlightLevel) {
return readChannelBits(readChannel(texel, highlightLevel), highlightLevel);
}`)}},32925:(e,t,r)=>{r.d(t,{v:()=>n,z:()=>o});var i=r(64839);function o(e){e.fragment.code.add(i.H`float normals2FoamIntensity(vec3 n, float waveStrength){
float normalizationFactor =  max(0.015, waveStrength);
return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
}`)}function n(e){e.fragment.code.add(i.H`vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
}`)}},45425:(e,t,r)=>{r.d(t,{E:()=>P});var i=r(32925),o=r(64839);function n(e){e.fragment.code.add(o.H`const float GAMMA = 2.2;
const float INV_GAMMA = 0.4545454545;
vec4 delinearizeGamma(vec4 color) {
return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.w);
}
vec3 linearizeGamma(vec3 color) {
return pow(color, vec3(GAMMA));
}`)}var s=r(42953),a=r(48353),l=r(65058),c=r(95756),h=r(21390),d=r(43425),u=r(70367);function g(e,t){if(!t.screenSpaceReflections)return;const r=e.fragment;r.include(l.E),r.uniforms.add(new c.G("nearFar",((e,t)=>t.camera.nearFar)),new u.N("depthMap",((e,t)=>t.depth?.attachment)),new d.X("proj",((e,t)=>t.camera.projectionMatrix)),new h.m("invResolutionHeight",((e,t)=>1/t.camera.height)),new d.X("reprojectionMatrix",((e,t)=>t.ssr.reprojectionMatrix))).code.add(o.H`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate)
  {
    vec4 zw = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoord = reprojectionMatrix * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
    reprojectedCoord.xy /= reprojectedCoord.w;
    return reprojectedCoord.xy * 0.5 + 0.5;
  }

  const int maxSteps = ${t.highStepCount?"150":"75"};

  vec4 applyProjectionMat(mat4 projectionMat, vec3 x)
  {
    vec4 projectedCoord =  projectionMat * vec4(x, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy*0.5 + 0.5;
    return projectedCoord;
  }

  vec3 screenSpaceIntersection(vec3 dir, vec3 startPosition, vec3 viewDir, vec3 normal)
  {
    vec3 viewPos = startPosition;
    vec3 viewPosEnd = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(proj, viewPos);
    vec3  Q0 = viewPos / projectedCoordStart.w; // homogeneous camera space
    float k0 = 1.0/ projectedCoordStart.w;

    // advance the position in the direction of the reflection
    viewPos += dir;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(proj, dir);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(proj, viewPos);
    vec3  Q1 = viewPos / projectedCoordEnd.w; // homogeneous camera space
    float k1 = 1.0/ projectedCoordEnd.w;

    // calculate the reflection direction in the screen space
    vec2 projectedCoordDir = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 projectedCoordDistVanishingPoint = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float yMod = min(abs(projectedCoordDistVanishingPoint.y), 1.0);

    float projectedCoordDirLength = length(projectedCoordDir);
    float maxSt = float(maxSteps);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the reflection looks
    vec2 dP = yMod * (projectedCoordDir)/(maxSt * projectedCoordDirLength);

    // Normalize the homogeneous camera space coordinates
    vec3  dQ = yMod * (Q1 - Q0)/(maxSt * projectedCoordDirLength);
    float dk = yMod * (k1 - k0)/(maxSt * projectedCoordDirLength);

    // initialize the variables for ray marching
    vec2 P = projectedCoordStart.xy;
    vec3 Q = Q0;
    float k = k0;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float prevEstimateZ = -startPosition.z;
    float rayDiffZ = 0.0;
    float dDepth;
    float depth;
    float rayDiffZOld = 0.0;

    // early outs
    if (dot(normal, dir) < 0.0 || dot(-viewDir, normal) < 0.0)
      return vec3(P, 0.0);

    for(int i = 0; i < maxSteps-1; i++)
    {
      depth = -linearDepthFromTexture(depthMap, P); // get linear depth from the depth buffer

      // estimate depth of the marching ray
      rayStartZ = prevEstimateZ;
      dDepth = -rayStartZ - depth;
      rayEndZ = (dQ.z * 0.5 + Q.z)/ ((dk * 0.5 + k));
      rayDiffZ = rayEndZ- rayStartZ;
      prevEstimateZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || P.y < 0.0  || P.y > 1.0 )
      {
        return vec3(P, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - dDepth > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between dDepth and rayDiffZOld is not too large
      //  - if difference between dDepth and 0.025/abs(k) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if((dDepth) < 0.025/abs(k) + abs(rayDiffZ) && dDepth > 0.0 && depth > nearFar[0] && depth < nearFar[1] && abs(P.y - projectedCoordStart.y) > invResolutionHeight)
      {
        return vec3(P, depth);
      }

      // continue with ray marching
      P = clamp(P + dP, vec2(0.0), vec2(0.999));
      Q.z += dQ.z;
      k += dk;
      rayDiffZOld = rayDiffZ;
    }
    return vec3(P, 0.0);
  }
  `)}var p=r(9392),f=r(14556),v=r(51977),m=r(63401),_=r(317),y=r(43557),x=r(53736),C=r(5517),w=r(7223),b=r(24245);class S extends w.n{constructor(e,t){super(e,"samplerCube",b.c.Pass,((r,i,o)=>r.bindTexture(e,t(i,o))))}}function T(e){const t=e.fragment;t.constants.add("radiusCloudsSquared","float",R).code.add(o.H`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos) {
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusCloudsSquared;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
return (cameraPosition + dir * pointIntDist) - spherePos;
}`),t.uniforms.add(new h.m("radiusCurvatureCorrection",((e,t)=>t.clouds.parallax.radiusCurvatureCorrection))).code.add(o.H`vec3 correctForPlanetCurvature(vec3 dir) {
dir.z = dir.z * (1.0 - radiusCurvatureCorrection) + radiusCurvatureCorrection;
return dir;
}`),t.code.add(o.H`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec) {
return (rotMat * vec4(inVec, 0.0)).xyz;
}`),(0,y.Gc)(t),(0,y.O4)(t);const r=(0,p.fA)(.28,.175,.035);t.constants.add("RIM_COLOR","vec3",r);t.code.add(o.H`
    vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds) {
      float upDotLight = dot(cameraPosition, mainLightDirection);
      float dirDotLight = max(dot(worldSpaceRay, mainLightDirection), 0.0);
      float sunsetTransition = clamp(pow(max(upDotLight, 0.0), ${o.H.float(.3)}), 0.0, 1.0);

      // Base color of the clouds that depends on lighting of the sun and sky
      vec3 ambientLight = calculateAmbientIrradiance(cameraPosition,  0.0);
      vec3 combinedLight = clamp((mainLightIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
      vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));

      // Rim light around the edge of the clouds simulating scattering of the direct lun light
      float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
      float rimLightIntensity = 0.5 + 0.5 * pow(max(upDotLight, 0.0), 0.35);
      vec3 directSunScattering = RIM_COLOR * rimLightIntensity * (pow(dirDotLight, ${o.H.float(140)})) * scatteringMod;

      // Brighten the clouds around the sun at the sunsets
      float additionalLight = ${o.H.float(.2)} * pow(dirDotLight, ${o.H.float(10)}) * (1. - pow(sunsetTransition, ${o.H.float(.3)})) ;

      return vec3(baseCloudColor * (1.0 + additionalLight) + directSunScattering);
    }
  `),t.uniforms.add(new x.e("readChannelsRG",((e,t)=>t.clouds.readChannels===v.c.RG)),new S("cubeMap",((e,t)=>t.clouds.data?.cubeMap?.colorTexture??null))).code.add(o.H`vec4 sampleCloud(vec3 rayDir, bool readOtherChannel) {
vec4 s = texture(cubeMap, rayDir);
bool readRG = readChannelsRG ^^ readOtherChannel;
s = readRG ? vec4(vec3(s.r), s.g) : vec4(vec3(s.b), s.a);
return length(s) == 0.0 ? vec4(s.rgb, 1.0) : s;
}`),t.uniforms.add(new C.t("anchorPoint",((e,t)=>t.clouds.parallax.anchorPoint)),new C.t("anchorPointNew",((e,t)=>t.clouds.parallaxNew.anchorPoint)),new d.X("rotationClouds",((e,t)=>t.clouds.parallax.transform)),new d.X("rotationCloudsNew",((e,t)=>t.clouds.parallaxNew.transform)),new h.m("cloudsOpacity",((e,t)=>t.clouds.opacity)),new h.m("fadeFactor",((e,t)=>t.clouds.fadeFactor)),new x.e("crossFade",((e,t)=>t.clouds.fadeState===m.c.CROSS_FADE))).code.add(o.H`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition) {
vec3 intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPoint);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = sampleCloud(worldRayRotatedCorrected, crossFade);
vec3 cameraPositionN = normalize(cameraPosition);
vec4 cloudColor = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
if(crossFade) {
intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPointNew);
worldRayRotated = rotateDirectionToAnchorPoint(rotationCloudsNew, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = sampleCloud(worldRayRotatedCorrected, false);
vec4 cloudColorNew = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorNew, fadeFactor);
}
float totalTransmittance = length(cloudColor.rgb) == 0.0 ?
1.0 :
clamp(cloudColor.a * cloudsOpacity + (1.0 - cloudsOpacity), 0.0 , 1.0);
return vec4(cloudColor.rgb, totalTransmittance);
}`)}const R=(f.$O.radius+_.k9)**2;function O(e){e.code.add(o.H`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`)}function P(e,t){e.include(s.f,t),e.include(n),e.include(i.v),t.cloudReflections&&e.include(T),e.include(g,t);const r=e.fragment;r.include(O),r.constants.add("fresnelSky","vec3",[.02,1,15]),r.constants.add("fresnelMaterial","vec2",[.02,.1]),r.constants.add("roughness","float",.015),r.constants.add("foamIntensityExternal","float",1.7),r.constants.add("ssrIntensity","float",.65),r.constants.add("ssrHeightFadeStart","float",a.O),r.constants.add("ssrHeightFadeEnd","float",a.b),r.constants.add("waterDiffusion","float",.92),r.constants.add("waterSeaColorMod","float",.8),r.constants.add("correctionViewingPowerFactor","float",.4),r.constants.add("skyZenitColor","vec3",[.52,.68,.9]),r.constants.add("skyColor","vec3",[.67,.79,.9]),r.constants.add("cloudFresnelModifier","vec2",[1.2,.01]),r.code.add(o.H`PBRShadingWater shadingInfo;
vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
return mix(zenit, horizon, exponent);
}`),r.uniforms.add(new h.m("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new h.m("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))),r.code.add(o.H`vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 viewPosition, vec3 position) {
float reflectionHit = 0.0;
float reflectionHitDiffused = 0.0;
vec3 seaWaterColor = linearizeGamma(color);
vec3 h = normalize(l + v);
shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
float upDotV = max(dot(localUp,v), 0.0);
vec3 skyHorizon = linearizeGamma(skyColor);
vec3 skyZenit = linearizeGamma(skyZenitColor);
vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );
float upDotL = max(dot(localUp,l),0.0);
float daytimeMod = 0.1 + upDotL * 0.9;
skyColor *= daytimeMod;
float shadowModifier = clamp(shadow, 0.8, 1.0);
vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
vec3 reflSky = lightingEnvironmentStrength * fresnelModifier * skyColor * shadowModifier;
vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;
vec3 specular = vec3(0.0);
if(upDotV > 0.0 && upDotL > 0.0) {
vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);
vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;
float NdotL = clamp(dot(n, l), 0.0, 1.0);
specular = lightingSpecularStrength * NdotL * incidentLight * specularSun;
}
vec3 foam = vec3(0.0);
if(upDotV > 0.0) {
foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
}
float correctionViewingFactor = pow(max(dot(v, localUp), 0.0), correctionViewingPowerFactor);
vec3 normalCorrectedClouds = mix(localUp, n, correctionViewingFactor);
vec3 reflectedWorld = normalize(reflect(-v, normalCorrectedClouds));`),t.cloudReflections&&r.uniforms.add(new h.m("cloudsOpacity",((e,t)=>t.clouds.opacity))).code.add(o.H`vec4 cloudsColor = renderClouds(reflectedWorld, position);
cloudsColor.a = 1.0 - cloudsColor.a;
cloudsColor = pow(cloudsColor, vec4(GAMMA));
cloudsColor *= clamp(fresnelModifier.y * cloudFresnelModifier[0] - cloudFresnelModifier[1], 0.0, 1.0) * cloudsOpacity;`),t.screenSpaceReflections?r.uniforms.add(new d.X("view",((e,t)=>t.camera.viewMatrix)),new u.N("lastFrameColorTexture",((e,t)=>t.ssr.lastFrameColor?.getTexture())),new h.m("fadeFactorSSR",((e,t)=>t.ssr.fadeFactor))).code.add(o.H`vec3 viewDir = normalize(viewPosition);
vec4 viewNormalVectorCoordinate = view * vec4(n, 0.0);
vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
vec4 viewUp = view * vec4(localUp, 0.0);
vec3 viewNormalCorrectedSSR = mix(viewUp.xyz, viewNormal, correctionViewingFactor);
vec3 reflected = normalize(reflect(viewDir, viewNormalCorrectedSSR));
vec3 hitCoordinate = screenSpaceIntersection(reflected, viewPosition, viewDir, viewUp.xyz);
vec3 reflectedColor = vec3(0.0);
if (hitCoordinate.z > 0.0)
{
vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);
vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -viewPosition.z);
reflectionHit = clamp(1.0 - (1.3 * dCoords.y), 0.0, 1.0) * heightMod * fadeFactorSSR;
reflectionHitDiffused = waterDiffusion * reflectionHit;
reflectedColor = linearizeGamma(texture(lastFrameColorTexture, reprojectedCoordinate).xyz) *
reflectionHitDiffused * fresnelModifier.y * ssrIntensity;
}
float seaColorMod =  mix(waterSeaColorMod, waterSeaColorMod * 0.5, reflectionHitDiffused);
vec3 waterRenderedColor = tonemapACES((1.0 - reflectionHitDiffused) * reflSky + reflectedColor +
reflSea * seaColorMod + specular + foam);`):r.code.add(o.H`vec3 waterRenderedColor = tonemapACES(reflSky + reflSea * waterSeaColorMod + specular + foam);`),t.cloudReflections?t.screenSpaceReflections?r.code.add(o.H`return waterRenderedColor * (1.0 - (1.0 - reflectionHit) * cloudsColor.a) + (1.0 - reflectionHit) * cloudsColor.xyz;
}`):r.code.add(o.H`return waterRenderedColor * (1.0 - cloudsColor.a) + cloudsColor.xyz;
}`):r.code.add(o.H`return waterRenderedColor;
}`)}},442:(e,t,r)=>{r.d(t,{$:()=>c});var i=r(90632),o=r(34761),n=r(13191),s=r(20664),a=r(78315),l=r(94966);class c{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.geometry=e,this.screenToWorldRatio=1,this._transformation=(0,n.vt)(),this._shaderTransformation=null,this._boundingSphere=null,this.id=(0,i.c)(),this.layerUid=t.layerUid,this.graphicUid=t.graphicUid,this.castShadow=t.castShadow??!1,t.objectShaderTransformation&&this.objectShaderTransformationChanged(t.objectShaderTransformation)}get transformation(){return this._transformation}set transformation(e){(0,o.C)(this._transformation,e),this._boundingSphere=null}get boundingInfo(){return this.geometry.boundingInfo}objectShaderTransformationChanged(e){null==e?this._shaderTransformation=null:(this._shaderTransformation??=(0,n.vt)(),(0,o.lw)(this._shaderTransformation,e,this.geometry.transformation)),this._boundingSphere=null}get boundingSphere(){return this.boundingInfo?(null==this._boundingSphere&&(this._boundingSphere??=(0,a.c)(),(0,s.t)((0,a.a)(this._boundingSphere),this.boundingInfo.center,this.shaderTransformation),this._boundingSphere[3]=this.boundingInfo.radius*(0,l.hG)(this.shaderTransformation)),this._boundingSphere):a.N}get material(){return this.geometry.material}get type(){return this.geometry.type}get shaderTransformation(){return this._shaderTransformation??this.transformation}get attributes(){return this.geometry.attributes}get highlight(){return this.geometry.highlights}foreachHighlightGroup(e){this.geometry.foreachHighlightGroup(e)}get hasHighlights(){return this.geometry.hasHighlights}get occludees(){return this.geometry.occludees}get visible(){return this.geometry.visible}set visible(e){this.geometry.visible=e}}},76956:(e,t,r)=>{r.d(t,{v:()=>M});var i=r(55855),o=r(48549),n=r(34981),s=r(90235),a=r(61785),l=r(83490),c=r(59696),h=r(60322),d=r(77730),u=r(66470),g=r(82809),p=r(63928),f=r(93684),v=r(16506),m=r(59246),_=r(72001),y=r(96643),x=r(37923),C=r(93345),w=r(57162);f.S;class b extends m.w{constructor(e,t,i){super(e,t,new v.$(x.C,(()=>r.e(5837).then(r.bind(r,35837)))),i)}_createPipeline(e,t){const{oitPass:r,output:i,transparent:o,cullFace:s,draped:a,hasOccludees:l,polygonOffset:c,enableOffset:d}=e,u=r===_.Y.NONE,g=r===_.Y.FrontFace;return(0,w.Ey)({blending:i===n.V.Color&&o?(0,h.Yf)(r):null,culling:(0,w.Xt)(s),depthTest:a?null:{func:(0,h.K_)(r)},depthWrite:(0,h.z5)(e),drawBuffers:i===n.V.Depth?{buffers:[C.Hr.NONE]}:(0,h.m6)(r,i),colorWrite:w.kn,stencilWrite:l?y.v0:null,stencilTest:l?t?y.a9:y.qh:null,polygonOffset:u||g?c?S:null:(0,h.aB)(d)})}initializePipeline(e){return this._occludeePipelineState=this._createPipeline(e,!0),this._createPipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}const S={factor:1,units:1};var T=r(35143),R=r(97808),O=r(42717),P=r(6485),D=r(94570);class I extends D.E{constructor(){super(...arguments),this.cullFace=l.s2.None,this.hasSlicePlane=!1,this.hasVertexColors=!1,this.transparent=!1,this.discardInvisibleFragments=!1,this.polygonOffset=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.objectAndLayerIdColorInstanced=!1,this.vvColor=!1,this.draped=!1,this.textureCoordinateType=R.I.None,this.emissionSource=O.ZX.None,this.occlusionPass=!1,this.hasVvInstancing=!0,this.vvSize=!1,this.vvOpacity=!1}}(0,T._)([(0,P.W)({count:l.s2.COUNT})],I.prototype,"cullFace",void 0),(0,T._)([(0,P.W)()],I.prototype,"hasSlicePlane",void 0),(0,T._)([(0,P.W)()],I.prototype,"hasVertexColors",void 0),(0,T._)([(0,P.W)()],I.prototype,"transparent",void 0),(0,T._)([(0,P.W)()],I.prototype,"discardInvisibleFragments",void 0),(0,T._)([(0,P.W)()],I.prototype,"polygonOffset",void 0),(0,T._)([(0,P.W)()],I.prototype,"enableOffset",void 0),(0,T._)([(0,P.W)()],I.prototype,"writeDepth",void 0),(0,T._)([(0,P.W)()],I.prototype,"hasOccludees",void 0),(0,T._)([(0,P.W)()],I.prototype,"terrainDepthTest",void 0),(0,T._)([(0,P.W)()],I.prototype,"cullAboveTerrain",void 0),(0,T._)([(0,P.W)()],I.prototype,"objectAndLayerIdColorInstanced",void 0),(0,T._)([(0,P.W)()],I.prototype,"vvColor",void 0),(0,T._)([(0,P.W)()],I.prototype,"draped",void 0);class M extends p.W{constructor(e){super(e,E),this._configuration=new I,this.supportsEdges=!0,this.produces=new Map([[d.N.OPAQUE_MATERIAL,e=>this._isOpaqueMaterialPass(e)],[d.N.OPAQUE_MATERIAL_WITHOUT_NORMALS,e=>this._isOpaqueNoSSAODepthPass(e)],[d.N.TRANSPARENT_MATERIAL,e=>(0,n.zW)(e)&&this._transparent&&this.parameters.writeDepth],[d.N.TRANSPARENT_MATERIAL_WITHOUT_NORMALS,e=>(0,n.eh)(e)&&this._transparent&&this.parameters.writeDepth],[d.N.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>(0,n.zW)(e)&&this._transparent&&!this.parameters.writeDepth],[d.N.DRAPED_MATERIAL,e=>(0,n.i3)(e)]])}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasVertexColors=this.parameters.hasVertexColors&&!this.parameters.vvColor,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this._transparent,this._configuration.discardInvisibleFragments=this._transparent&&!this._isOpaquePass(e)&&this.parameters.discardInvisibleFragments,this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=t.hasOccludees,this._configuration.oitPass=t.oitPass,this._configuration.enableOffset=t.camera.relativeElevation<h.xt,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.draped=this.parameters.draped,this._configuration}get visible(){return this.parameters.color[3]>=s.Q}get _transparent(){return this.parameters.color[3]<1||this.parameters.forceTransparentMode}_isOpaquePass(e){return this._isOpaqueMaterialPass(e)||this._isOpaqueNoSSAODepthPass(e)}_isOpaqueMaterialPass(e){return e===n.V.Highlight||(0,n.zW)(e)&&!this._transparent}_isOpaqueNoSSAODepthPass(e){return(0,n.eh)(e)&&this.parameters.writeDepth&&!this._transparent}createGLMaterial(e){return new A(e)}createBufferWriter(){const e=(0,o.BP)().vec3f(u.r.POSITION);return(0,a.E)()&&e.vec4u8(u.r.OBJECTANDLAYERIDCOLOR),this.parameters.vvColor?e.f32(u.r.COLORFEATUREATTRIBUTE):e.vec4u8(u.r.COLOR),new g.Z(e)}}class A extends c.A{beginSlot(e){return this.acquireTechnique(b,e)}}class E extends f.S{constructor(){super(...arguments),this.color=i.uY,this.forceTransparentMode=!1,this.writeDepth=!0,this.hasVertexColors=!1,this.polygonOffset=!1,this.hasSlicePlane=!1,this.cullFace=l.s2.None,this.draped=!1,this.discardInvisibleFragments=!1}}},86401:(e,t,r)=>{r.d(t,{Ci:()=>n,Dq:()=>l,dB:()=>a,zK:()=>s});var i=r(48549),o=r(66470);const n=(0,i.BP)().vec3f(o.r.POSITION),s=(0,i.BP)().vec3f(o.r.POSITION).vec2f(o.r.UV0),a=(0,i.BP)().vec3f(o.r.POSITION).vec4u8(o.r.COLOR),l=(0,i.BP)().vec3f(o.r.POSITION).vec2f(o.r.UV0).vec4u8(o.r.OBJECTANDLAYERIDCOLOR)},63928:(e,t,r)=>{r.d(t,{W:()=>n});var i=r(45463),o=r(48168);class n extends i.im{intersect(e,t,r,i,n,s){return(0,o.Uy)(e,r,i,n,void 0,s)}}},35925:(e,t,r)=>{r.d(t,{Xq:()=>a,wk:()=>s});const i={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},o={dash:i.dash,"dash-dot":[...i.dash,...i.dot],dot:i.dot,"long-dash":i["long-dash"],"long-dash-dot":[...i["long-dash"],...i.dot],"long-dash-dot-dot":[...i["long-dash"],...i.dot,...i.dot],none:null,"short-dash":i["short-dash"],"short-dash-dot":[...i["short-dash"],...i["short-dot"]],"short-dash-dot-dot":[...i["short-dash"],...i["short-dot"],...i["short-dot"]],"short-dot":i["short-dot"],solid:null},n=8;function s(e){return{pattern:[e,e],pixelRatio:2}}function a(e){return"style"===e?.type?function(e){return null!=e?function(e,t){return null==e?e:{pattern:e.slice(),pixelRatio:t}}(o[e],n):null}(e.style):null}}}]);
//# sourceMappingURL=9628.99f36977.chunk.js.map