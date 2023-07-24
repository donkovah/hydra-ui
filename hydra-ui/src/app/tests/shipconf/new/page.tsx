"use client";

import {
  Layout,
  Menu,
  Breadcrumb,
  ConfigProvider,
  ThemeConfig,
  theme,
  Avatar,
  MenuProps,
  message,
  Steps,
  Button,
} from "antd";
import React, { useState } from "react";
import TranslationTable from "@/partials/TranslationTable";
import HeaderNav from "@/partials/HeaderNav";
import SideBar from "@/partials/SideBar";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Content, Footer } = Layout;

const steps = [
  {
    title: 'Step 1',
    content: 'First-content',
  },
  {
    title: 'Step 2',
    content: 'Second-content',
  },
  {
    title: 'Finish',
    content: 'Last-content',
  },
];

const HomePage: React.FC = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  const contentStyle: React.CSSProperties = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <Layout>
      <HeaderNav />
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Translations</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: "24px 0", background: token.colorBgContainer }}>
          <SideBar />
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
              height: "75vh",
              color: "black",
              overflow: "scroll",
            }}
          >

<>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
          </Content>
        </Layout>
        <Footer style={{ textAlign: "center" }}>Logistics Team ©2023</Footer>
      </Content>
    </Layout>
  );
};
export default HomePage;
