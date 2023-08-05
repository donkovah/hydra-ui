"use client";

import Layout, { Content, Footer } from "antd/es/layout/layout";
import React from "react";
import SideBar from "./SideBar";
import { Col, Row, theme } from "antd";
import Breadcrumbs from "./Breadcrumbs";
import { NavigationProvider } from "@/context/NavigationContext";
import HeaderNav from "./HeaderNav";

const BodyLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <NavigationProvider>
      <HeaderNav />
      <Layout>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumbs />
          <Layout style={{ padding: "24px 0", background: colorBgContainer }}>
            <Row>
              <Col span={4}>
                <SideBar />
              </Col>
              <Col span={20}>
                <Content
                  style={{ padding: "0 24px", minHeight: 280, color: "black" }}
                >
                  {children}
                </Content>
              </Col>
            </Row>
          </Layout>
          <Footer style={{ textAlign: "center" }}>Logistics Team ©2023</Footer>
        </Content>
      </Layout>
    </NavigationProvider>
  );
};

export default BodyLayout;
