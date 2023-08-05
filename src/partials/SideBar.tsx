"use client";

import { Layout, Menu, theme } from "antd";
import React, { useEffect, useState } from "react";
import {
  LaptopOutlined,
  BugOutlined,
  ApiOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const { Sider } = Layout;

const SideBar: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [selectedKey, setSelectedKey] = useState<string>('');
  const pathname = usePathname();
  
  const sideMenu = [
    {
      key: "translations",
      path: "/",
      label: "Translations",
      isActive: true,
      icon: LaptopOutlined,
    },
    {
      key: "mappings",
      path: "/",
      label: "Mappings",
      isActive: false,
      icon: ApiOutlined,
    },
    {
      key: "blobs",
      path: "/",
      label: "Blobs",
      isActive: false,
      icon: ContainerOutlined,
    },
    {
      key: "tests",
      path: "/tests",
      label: "Test",
      isActive: true,
      children: [
        {
          key: "test_packconf",
          path: "/tests/packconf",
          label: "PackConf (PL06)",
          isActive: true,
          icon: LaptopOutlined,
        },
        {
          key: "test_shipconf",
          path: "/tests/shipconf",
          label: "ShipConf (PL07)",
          isActive: true,
          icon: LaptopOutlined,
        },
      ],
      icon: LaptopOutlined,
    },
  ];

  useEffect(() => {
    if (pathname == '/') {
      setSelectedKey(sideMenu[0].key)
      return
    }
    const urlPath = pathname.split('/')[1]
    const item = sideMenu.find(it => it.path.startsWith(`/${urlPath}`))
    const activeKey = item?.key
    if (activeKey) {
      setSelectedKey(activeKey)
    }
  },[pathname])
  
  return (
    <>
      <Sider style={{ background: colorBgContainer }} width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[sideMenu[0].key]}
          selectedKeys={[selectedKey]}
          defaultOpenKeys={sideMenu.map(it => it.key)}
          style={{ height: "100%" }}
        >
          {sideMenu.map((item) =>
            !item.children ? (
              <Menu.Item icon={<item.icon />} disabled={!item.isActive} key={item.key}>
                {item.isActive ? (
                  <Link href={item.path}>{item.label}</Link>
                ) : (
                  item.label
                )}
              </Menu.Item>
            ) : (
              <Menu.SubMenu title={item.label} icon={<item.icon />} key={item.key}>
              {item.children.map((it => (
                <Menu.Item key={it.key}>
                  <Link href={it.path}>{it.label}</Link>
                </Menu.Item>
              )))}
              </Menu.SubMenu>
            )
          )}
        </Menu>
      </Sider>
    </>
  );
};
export default SideBar;
