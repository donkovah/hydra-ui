"use client";

import { NavigationEnv, useNavigation } from "@/context/NavigationContext";
import {
  Layout,
  Menu,
} from "antd";
import React from "react";

const { Header } = Layout;

const HeaderNav: React.FC = () => {
  const { navigationKey, setNavigationKey } = useNavigation();

  const updateHeaderEnv = (navEnvironment: NavigationEnv) => {
    setNavigationKey(navEnvironment)
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
            className={navigationKey == NavigationEnv.DEV ? "ant-menu-item-selected-nav" : ""}
            onClick={()=> updateHeaderEnv(NavigationEnv.DEV)}
          >
            DEV
          </Menu.Item>
          <Menu.Item
            key="3"
            className={navigationKey == NavigationEnv.PROD ? "ant-menu-item-selected-nav danger" : ""}
            onClick={()=> updateHeaderEnv(NavigationEnv.PROD)}
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
