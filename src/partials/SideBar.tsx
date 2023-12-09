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
      key: "companies",
      path: "/company",
      label: "Companies",
      isActive: true,
      icon: LaptopOutlined,
    },
    {
      key: "promotions",
      path: "/promotions",
      label: "Promotions",
      isActive: true,
      icon: ContainerOutlined,
    },
    {
      key: "reviews",
      path: "/reviews",
      label: "Reviews",
      isActive: true,
      icon: ApiOutlined,
    },
    {
      key: "featured",
      path: "/featured",
      label: "Featured",
      isActive: true,
      icon: ContainerOutlined,
    },
    {
      key: "users",
      path: "#",
      label: "Users",
      isActive: true,
      children: [
        {
          key: "admin",
          path: "/users/admin",
          label: "Admin",
          isActive: true,
          icon: LaptopOutlined,
        },
        {
          key: "users",
          path: "/users",
          label: "Users",
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
    <Sider style={{ background: colorBgContainer }} width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[sideMenu[0].key]}
          selectedKeys={[selectedKey]}
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
  );
};
export default SideBar;
