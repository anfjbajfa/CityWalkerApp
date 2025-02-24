import React, { useEffect, useRef, useState, useMemo } from "react";
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
import Oauth2 from "./Oauth2Login.js"; 

function MapPage() {
  const mapDiv = useRef(null);
  const viewRef = useRef(null);

  // 自定义面板和 Expand 实例引用
  const expandPanelRef = useRef(null);
  const customPanelExpandRef = useRef(null);

  const routeLayerRef = useRef(null);
  const selectedRoutesLayerRef = useRef(null);

  const [routeData, setRouteData] = useState(null);
  const [selectedRoutes, setSelectedRoutes] = useState([]);

  // 控制 OAuth2 弹窗和登录状态
  const [showOauth2, setShowOauth2] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 新增三个 state 保存过滤条件
  const [filterDistance, setFilterDistance] = useState("");

  const [filterRating, setFilterRating] = useState("");

  useEffect(() => {
    // 1) 创建地图和视图
    const map = new Map({ basemap: "topo-vector" });
    viewRef.current = new MapView({
      container: mapDiv.current,
      map: map,
      center: [-89.4012, 43.0731],
      zoom: 13,
    });

    // 2) 添加常用控件：Locate、Search、Legend
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

    // 3) 添加侧道 (Sidewalk) 图层
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

    // 4) 添加 Route 图层（利用 definitionExpression 隐藏已有要素）
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
      definitionExpression: "1=0", // 初始不显示已有要素
      id: "routeLayer",
    });
    map.add(routeLayerRef.current);

    // 6) 添加 SelectedRoutes 的 GraphicsLayer
    selectedRoutesLayerRef.current = new GraphicsLayer();
    map.add(selectedRoutesLayerRef.current);

    // 7) 使用 Expand 包裹自定义面板
    const customPanelExpand = new Expand({
      view: viewRef.current,
      content: expandPanelRef.current,
      expandIcon: "add-features",
      expanded: false,
      group: "bottom-left-expand-group",
    });
    viewRef.current.ui.add(customPanelExpand, "bottom-left");
    customPanelExpandRef.current = customPanelExpand;

    // 8) 添加点击事件监听：单击高亮、双击删除图形
    const clickHandler = viewRef.current.on("click", (event) => {
      viewRef.current.hitTest(event).then((response) => {
        if (response.results.length) {
          response.results.forEach((result) => {
            if (
              result.graphic &&
              result.graphic.layer === selectedRoutesLayerRef.current
            ) {
              const isHighlighted = result.graphic.attributes?.isHighlighted;
              if (!isHighlighted) {
                result.graphic.symbol = {
                  type: "simple-line",
                  color: "yellow",
                  width: "3px",
                };
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

    const doubleClickHandler = viewRef.current.on("double-click", (event) => {
      event.stopPropagation();
      viewRef.current.hitTest(event).then((response) => {
        if (response.results.length) {
          response.results.forEach((result) => {
            if (
              result.graphic &&
              result.graphic.layer === selectedRoutesLayerRef.current
            ) {
              selectedRoutesLayerRef.current.remove(result.graphic);
            }
          });
        }
      });
    });

    // 清理：组件卸载时移除事件监听并销毁视图
    return () => {
      if (viewRef.current) {
        clickHandler.remove();
        doubleClickHandler.remove();
        viewRef.current.destroy();
      }
    };
  }, []);

  // 当 isLoggedIn 变为 true 后创建并添加 Editor widget
  useEffect(() => {
    if (isLoggedIn && viewRef.current && routeLayerRef.current) {
      const editor = new Editor({
        view: viewRef.current,
        allowedWorkflows: ["create", "update"],
        layerInfos: [
          {
            layer: routeLayerRef.current,
            fieldConfig: [
              { name: "RouteName", label: "routename" },
              { name: "rating", label: "rate(1-5)" },
              { name: "description", label: "description" },
              { name:"height", label:"height" }
            ],
          },
        ],
      });
      const editorExpand = new Expand({
        view: viewRef.current,
        content: editor,
        expand: false,
      });
      viewRef.current.ui.add(editorExpand, "bottom-left");
    }
  }, [isLoggedIn]);

  // 查询后端数据
  const fetchRouteData = () => {
    if (routeLayerRef.current) {
      routeLayerRef.current
        .queryFeatures({
          where: "1=1",
          outFields: ["*"],
          returnGeometry: true,
        })
        .then((result) => {
          result.features.forEach((feature) => {
            console.log(feature.attributes);
          });
          setRouteData(result.features);
        })
        .catch((err) => {
          console.error("Error fetching route data:", err);
        });
    }
  };

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

  const addSelectedRoutesToMap = () => {
    if (selectedRoutesLayerRef.current && selectedRoutes.length > 0) {
      selectedRoutesLayerRef.current.removeAll();
      selectedRoutes.forEach((feature) => {
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

  // OAuth2 登录相关
  const handleEditClick = () => {
    if (!isLoggedIn) {
      setShowOauth2(true);
    }
  };

  const handleLoginSuccess = (credential) => {
    console.log("MapPage get Credential successfully:", credential);
    setIsLoggedIn(true);
    setShowOauth2(false);
    // 此处可以将 credential 保存到状态或上下文中，用于后续 API 请求认证
  };

  // 利用 useMemo 根据过滤条件筛选 routeData
  const filteredRoutes = useMemo(() => {
    if (!routeData) return [];
    return routeData.filter((feature) => {
      const { Shape__Length, height, rating } = feature.attributes;
      return (
        (!filterDistance || Shape__Length <= parseFloat(filterDistance)) &&

        (!filterRating || rating >= parseFloat(filterRating))
      );
    });
  }, [routeData, filterDistance, filterRating]);

  return (
    <>
      <div style={{ height: "100vh", width: "100%" }} ref={mapDiv} />

      {/* 自定义面板 */}
      <div ref={expandPanelRef} style={{ padding: "10px", maxHeight: "90vh", overflowY: "auto" }}>
        <button onClick={fetchRouteData}>Fetch Routes</button>
        <button onClick={addSelectedRoutesToMap}>Add Selected Routes</button>
        {/* 如果未登录，点击编辑按钮触发登录 */}
        {!isLoggedIn && (
          <button onClick={handleEditClick}>Edit (Login required)</button>
        )}

        {/* 添加过滤条件输入框 */}
        <div style={{ marginTop: "10px" }}>
          <h3>Filter Routes:</h3>
          <div style={{ marginBottom: "5px" }}>
            <label>
              Max Distance:
              <input
                type="number"
                value={filterDistance}
                onChange={(e) => setFilterDistance(e.target.value)}
                style={{ marginLeft: "5px", width: "80px" }}
              />
            </label>
          </div>
          
          <div style={{ marginBottom: "5px" }}>
            <label>
              Min Rating:
              <input
                type="number"
                value={filterRating}
                onChange={(e) => setFilterRating(e.target.value)}
                style={{ marginLeft: "5px", width: "80px" }}
              />
            </label>
          </div>
        </div>

        {/* 展示过滤后的路线列表 */}
        {filteredRoutes && filteredRoutes.length > 0 && (
          <div style={{ marginTop: "10px" }}>
            <h3>Available Routes:</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {filteredRoutes.map((feature) => {
                const { RouteName, rating, description, height, Creator, Shape__Length } =
                  feature.attributes;
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
                    <div>Distance: {Shape__Length} m</div>
                    <div>Rating: {rating}</div>
                    <div>Description: {description}</div>
                    <div>Height: {height}</div>
                    <div>Creator: {Creator}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      {/* 条件渲染 OAuth2 登录弹窗 */}
      {showOauth2 && <Oauth2 onLoginSuccess={handleLoginSuccess} />}
    </>
  );
}

export default MapPage;
