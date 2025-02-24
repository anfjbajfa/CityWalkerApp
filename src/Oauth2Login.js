/**
 * Oauth2Login.js
 * 假设此组件通过 ArcGIS IdentityManager 实现 OAuth2 登录
 */

import React, { useEffect, useState } from "react";

import OAuthInfo from "@arcgis/core/identity/OAuthInfo";
import esriId from "@arcgis/core/identity/IdentityManager";

function Oauth2Login({ onLoginSuccess }) {
  const [error, setError] = useState(null);

  useEffect(() => {
    // 在此处设置你的 App ID（在 ArcGIS for Developers 或者 ArcGIS Online 注册的 OAuth 应用 ID）
    const info = new OAuthInfo({
      appId: "3XXuxL8WHwA1yeOX",
      popup: false,               
      portalUrl: "https://www.arcgis.com",
    });


    esriId.registerOAuthInfos([info]);

    esriId
      .getCredential(`${info.portalUrl}/sharing`)
      .then((credential) => {
        onLoginSuccess(credential);
      })
      .catch((err) => {
        console.error("OAuth2 Login Error:", err);
        setError(err);
      });
  }, [onLoginSuccess]);

  return (
   <></>
  );
}

export default Oauth2Login;
