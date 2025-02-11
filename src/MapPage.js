import React, { useEffect, useRef, useState } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Editor from "@arcgis/core/widgets/Editor";
import Locate from "@arcgis/core/widgets/Locate";
import Search from "@arcgis/core/widgets/Search";
import Expand from "@arcgis/core/widgets/Expand";
import Legend from "@arcgis/core/widgets/Legend";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import "@arcgis/core/assets/esri/themes/light/main.css";

function MapPage() {
  console.log("hello world");
  const mapDiv = useRef(null);
  const viewRef = useRef(null);

  // 自定义面板的 DOM 引用和 Expand 实例引用
  const expandPanelRef = useRef(null);
  const customPanelExpandRef = useRef(null);

  const routeLayerRef = useRef(null);
  const selectedRoutesLayerRef = useRef(null);

  const [routeData, setRouteData] = useState(null);
  const [selectedRoutes, setSelectedRoutes] = useState([]);

  useEffect(() => {
    // 1) 创建地图和视图
    const map = new Map({ basemap: "topo-vector" });
    viewRef.current = new MapView({
      container: mapDiv.current,
      map: map,
      center: [-89.4012, 43.0731],
      zoom: 13,
    });

    // 2) 常用控件：Locate + Search + Legend
    const locateBtn = new Locate({ view: viewRef.current });
    const searchBar = new Search({ view: viewRef.current });
    const searchBarExpand = new Expand({
      view: viewRef.current,
      content: searchBar,
      expand: false,
    });
    const legend = new Legend({ view: viewRef.current });
    const legendExpand = new Expand({
      view: viewRef.current,
      content: legend,
      expand: false,
    });

    viewRef.current.when(() => {
      viewRef.current.ui.add(locateBtn, "top-left");
      viewRef.current.ui.add(searchBarExpand, "top-left");
      viewRef.current.ui.add(legendExpand, "bottom-right");
    });

    // 3) 侧道 (Sidewalk) 图层
    const madisonPathFeatureLayer = new FeatureLayer({
      url: "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/MadisonSidewalk/FeatureServer",
      renderer: {
        type: "simple",
        symbol: {
          type: "simple-line",
          color: [150, 150, 150, 0.8],
          width: "1.5px",
          style: "solid",
        },
      },
    });
    map.add(madisonPathFeatureLayer);

    // 4) Route 图层（通过 definitionExpression 隐藏已有要素）
    const routeRenderer = {
      type: "simple",
      symbol: { type: "simple-line", color: "#007ac2", width: "2px" },
      visualVariables: [
        {
          type: "size",
          field: "rating",
          stops: [
            { value: 1, size: 2 },
            { value: 5, size: 8 },
          ],
        },
        {
          type: "color",
          field: "rating",
          stops: [
            { value: 1, color: "red" },
            { value: 3, color: "orange" },
            { value: 5, color: "green" },
          ],
        },
      ],
    };

    routeLayerRef.current = new FeatureLayer({
      url: "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/RouteLayer/FeatureServer/0",
      outFields: ["*"],
      renderer: routeRenderer,
      definitionExpression: "1=0", // 不显示已有要素
      id: "routeLayer",
    });
    map.add(routeLayerRef.current);

    // 5) Editor Widget
    const editor = new Editor({
      view: viewRef.current,
      allowedWorkflows: ["create", "update"],
      layerInfos: [
        {
          layer: routeLayerRef.current,
          fieldConfig: [
            { name: "RouteName", label: "路线名称" },
            { name: "rating", label: "评分 (1-5)" },
            { name: "description", label: "备注" },
          ],
        },
      ],
    });
    const editorExpand = new Expand({
      view: viewRef.current,
      content: editor,
      expand: false,
    });
    viewRef.current.ui.add(editorExpand, "top-right");

    // 6) SelectedRoutes 的 GraphicsLayer
    selectedRoutesLayerRef.current = new GraphicsLayer();
    map.add(selectedRoutesLayerRef.current);

    // 7) 使用 Expand 包裹自定义面板 (expandPanelRef)
    const customPanelExpand = new Expand({
      view: viewRef.current,
      content: expandPanelRef.current,
      expandIcon: "add-features",
      expanded: false,
      group: "bottom-left-expand-group",
    });
    viewRef.current.ui.add(customPanelExpand, "bottom-left");
    customPanelExpandRef.current = customPanelExpand;

    // 8) 添加点击事件监听，单击高亮，双击直接删除
    const clickHandler = viewRef.current.on("click", (event) => {
      viewRef.current.hitTest(event).then((response) => {
        if (response.results.length) {
          response.results.forEach((result) => {
            // 判断点击的图形是否属于 selectedRoutesLayerRef
            if (
              result.graphic &&
              result.graphic.layer === selectedRoutesLayerRef.current
            ) {
              // 判断图形是否已高亮（默认为 false）
              const isHighlighted = result.graphic.attributes?.isHighlighted;
              if (!isHighlighted) {
                // 修改符号为高亮样式（黄色加粗）
                result.graphic.symbol = {
                  type: "simple-line",
                  color: "yellow",
                  width: "3px",
                };
                // 设置标记属性
                if (!result.graphic.attributes) {
                  result.graphic.attributes = {};
                }
                result.graphic.attributes.isHighlighted = true;
              }
            }
          });
        }
      });
    });

    // 双击事件：直接删除图形
    const doubleClickHandler = viewRef.current.on("double-click", (event) => {
      // 阻止默认的双击缩放操作
      event.stopPropagation();
      viewRef.current.hitTest(event).then((response) => {
        if (response.results.length) {
          response.results.forEach((result) => {
            // 判断点击的图形是否属于 selectedRoutesLayerRef
            if (
              result.graphic &&
              result.graphic.layer === selectedRoutesLayerRef.current
            ) {
              // 直接删除该图形
              selectedRoutesLayerRef.current.remove(result.graphic);
            }
          });
        }
      });
    });

    // 清理：移除事件监听器和销毁视图
    return () => {
      if (viewRef.current) {
        clickHandler.remove();
        viewRef.current.destroy();
      }
    };
  }, []);

  // 点击按钮后查询后端所有数据
  const fetchRouteData = () => {
    if (routeLayerRef.current) {
      routeLayerRef.current
        .queryFeatures({
          where: "1=1",
          outFields: ["*"],
          returnGeometry: true,
        })
        .then((result) => {
          console.log("Fetched route data:", result.features);
          setRouteData(result.features);
        })
        .catch((err) => {
          console.error("Error fetching route data:", err);
        });
    }
  };

  // 切换某条 Route 的选中状态（用于列表选择）
  const toggleRouteSelection = (feature) => {
    const objectId = feature.attributes.OBJECTID;
    setSelectedRoutes((prevSelected) => {
      if (prevSelected.some((item) => item.attributes.OBJECTID === objectId)) {
        return prevSelected.filter(
          (item) => item.attributes.OBJECTID !== objectId
        );
      } else {
        return [...prevSelected, feature];
      }
    });
  };

  // 添加用户选中的 Route 到地图上（使用 GraphicsLayer 显示），同时关闭自定义面板
  const addSelectedRoutesToMap = () => {
    if (selectedRoutesLayerRef.current && selectedRoutes.length > 0) {
      selectedRoutesLayerRef.current.removeAll();
      selectedRoutes.forEach((feature) => {
        // 创建图形时设置 isHighlighted 为 false
        const graphic = new Graphic({
          geometry: feature.geometry,
          symbol: {
            type: "simple-line",
            color: "#007ac2",
            width: "2px",
          },
          attributes: { ...feature.attributes, isHighlighted: false },
        });
        selectedRoutesLayerRef.current.add(graphic);
      });
      if (customPanelExpandRef.current) {
        customPanelExpandRef.current.expanded = false;
      }
    }
  };

  return (
    <>
      <div style={{ height: "100vh", width: "100%" }} ref={mapDiv} />

      {/* 自定义面板，通过 Expand 弹出 */}
      <div ref={expandPanelRef} style={{ padding: "10px" }}>
        <button onClick={fetchRouteData}>Fetch Routes</button>
        <button onClick={addSelectedRoutesToMap}>Add Selected Routes</button>

        {routeData && routeData.length > 0 && (
          <div style={{ marginTop: "10px" }}>
            <h3>Available Routes:</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {routeData.map((feature) => {
                const { RouteName, rating, description } = feature.attributes;
                const isSelected = selectedRoutes.some(
                  (item) =>
                    item.attributes.OBJECTID === feature.attributes.OBJECTID
                );

                return (
                  <li
                    key={feature.attributes.OBJECTID}
                    style={{
                      marginBottom: "5px",
                      borderBottom: "1px solid #ccc",
                      paddingBottom: "5px",
                    }}
                  >
                    <label style={{ display: "block" }}>
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleRouteSelection(feature)}
                        style={{ marginRight: "5px" }}
                      />
                      <strong>{RouteName || "Unnamed Route"}</strong>
                    </label>
                    <div>Rating: {rating}</div>
                    <div>Description: {description}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default MapPage;
