"use strict";(self.webpackChunkcity_walk_app=self.webpackChunkcity_walk_app||[]).push([[2759],{62759:(e,n,t)=>{t.r(n),t.d(n,{hydratedAdapter:()=>r});var a=t(76607),o=t(25770),s=t(65433),i=t(21673),c=t(74795);const r={convertToGEGeometry:function(e,n){if(null==n)return null;let t="cache"in n?n.cache._geVersion:void 0;return null==t&&(t=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=t)),t},exportPoint:function(e,n,t){const a=e.hasZ(n),o=e.hasM(n),i=new s.A({x:e.getPointX(n),y:e.getPointY(n),spatialReference:t});return a&&(i.z=e.getPointZ(n)),o&&(i.m=e.getPointM(n)),i.cache._geVersion=n,i},exportPolygon:function(e,n,t){const a=new i.A({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return a.cache._geVersion=n,a},exportPolyline:function(e,n,t){const a=new c.A({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return a.cache._geVersion=n,a},exportMultipoint:function(e,n,t){const a=new o.A({hasZ:e.hasZ(n),hasM:e.hasM(n),points:e.exportPoints(n),spatialReference:t});return a.cache._geVersion=n,a},exportExtent:function(e,n,t){const o=e.hasZ(n),s=e.hasM(n),i=new a.A({xmin:e.getXMin(n),ymin:e.getYMin(n),xmax:e.getXMax(n),ymax:e.getYMax(n),spatialReference:t});if(o){const t=e.getZExtent(n);i.zmin=t.vmin,i.zmax=t.vmax}if(s){const t=e.getMExtent(n);i.mmin=t.vmin,i.mmax=t.vmax}return i.cache._geVersion=n,i}}}}]);
//# sourceMappingURL=2759.ed479ed8.chunk.js.map