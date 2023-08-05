"use client";

import {
  Layout,
  Menu,
} from "antd";
import React, { useState } from "react";

const { Header } = Layout;
type HeaderEnv = "DEV" | "PROD" | "UAT"

const HeaderNav: React.FC = () => {
  const [headerEnv, setHeaderEnv] = useState<HeaderEnv>('DEV');

  const updateHeaderEnv = (env: HeaderEnv) => {
    setHeaderEnv(env)
  }

  return (
    <>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" style={{ height: "64px", display: "flex" }}>
          <img src="/logo.png" style={{ width: "120px", height: "auto" }}></img>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <Menu.Item
            key="1"
            className={headerEnv == "DEV" ? "ant-menu-item-selected-nav" : ""}
            onClick={()=> updateHeaderEnv('DEV')}
          >
            DEV
          </Menu.Item>
          <Menu.Item
            key="2"
            className={headerEnv == "UAT" ? "ant-menu-item-selected-nav" : ""}
            onClick={()=> updateHeaderEnv('UAT')}
          >
            UAT
          </Menu.Item>
          <Menu.Item
            key="3"
            className={headerEnv == "PROD" ? "ant-menu-item-selected-nav danger" : ""}
            onClick={()=> updateHeaderEnv('PROD')}
          >
            Prod
          </Menu.Item>
        </Menu>
      </Header>
    </>
  );
};

<Header style={{ display: "flex", alignItems: "center" }}>
  <div className="demo-logo" style={{ height: "64px", display: "flex" }}>
    <img src="logo.png" style={{ width: "120px", height: "auto" }}></img>
  </div>
  <Menu
    theme="dark"
    mode="horizontal"
    defaultSelectedKeys={["1"]}
    style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
  >
    <Menu.Item key="1" className="ant-menu-item-selected-nav">
      Global
    </Menu.Item>
    <Menu.Item key="2">Prod</Menu.Item>
    <Menu.Item key="3">UAT</Menu.Item>
    <Menu.Item key="4">DEV</Menu.Item>
  </Menu>
</Header>;
export default HeaderNav;
