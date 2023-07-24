import { Layout, Menu, theme } from "antd";
import React from "react";
import {
  LaptopOutlined,
  BugOutlined,
  ApiOutlined,
  ContainerOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const SideBar: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Sider style={{ background: colorBgContainer }} width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%" }}
        >
          <Menu.Item icon={<LaptopOutlined />} key="1">
            Translations
          </Menu.Item>
          <Menu.Item icon={<ApiOutlined />} key="2">
            Mappings
          </Menu.Item>
          <Menu.Item icon={<ContainerOutlined />} key="3">
            Blobs
          </Menu.Item>
          <Menu.SubMenu title="Tests" icon={<BugOutlined />} key={4}>
            <Menu.Item key="2">PackConf (PL06)</Menu.Item>
            <Menu.Item key="3">ShipConf (PL07)</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Sider>
    </>
  );
};
export default SideBar;
