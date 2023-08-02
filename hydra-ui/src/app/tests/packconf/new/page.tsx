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
  Form,
  Input,
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
import { useRouter } from "next/navigation";

const { Content, Footer } = Layout;

const steps = [
  {
    title: "Create Dataset",
    content: "First-content",
  },
  {
    title: "Submit",
    content: "Second-content",
  },
];

const HomePage: React.FC = () => {
  const { token } = theme.useToken();
  const router = useRouter()
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  const contentStyle: React.CSSProperties = {
    lineHeight: "260px",
    height: "70%",
    padding: "20px",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px ${token.colorBorder}`,
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
        <Layout
          style={{ padding: "24px 0", background: token.colorBgContainer }}
        >
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
              {current == 0 && (
                <div style={contentStyle}>
                  <Form
                    name="wrap"
                    labelCol={{ flex: "200px" }}
                    labelAlign="left"
                    labelWrap
                    wrapperCol={{ flex: 1 }}
                    colon={false}
                    style={{ maxWidth: "50%", marginTop: "15px" }}
                  >
                    <Form.Item
                      label="Dataset Name"
                      name="username"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="e.g john__test" />
                    </Form.Item>

                    <Form.Item
                      label="Concurrent Requests"
                      name="concurrent"
                      rules={[{ required: true }]}
                    >
                      <Input type="number" />
                    </Form.Item>
                  </Form>
                </div>
              )}
              {current == 1 && (
                <div style={contentStyle}>
                  <Form
                    name="wrap"
                    labelCol={{ flex: "200px" }}
                    labelAlign="left"
                    labelWrap
                    wrapperCol={{ flex: 1 }}
                    colon={false}
                    style={{ maxWidth: "50%", marginTop: "15px" }}
                  >
                    <Form.Item
                      label="Dataset Name"
                      name="name"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="e.g john__test" />
                    </Form.Item>

                    <Form.Item
                      label="File"
                      name="dataset"
                      rules={[{ required: true }]}
                    >
                      <Input value={"Packing Confirmation"} type="string" />
                    </Form.Item>

                    <Form.Item
                      label="Target"
                      name="target"
                      rules={[{ required: true }]}
                    >
                      <Input value={"Packing Confirmation"} type="string" />
                    </Form.Item>

                    <Form.Item
                      label="Concurrent Requests"
                      name="concurrent"
                      rules={[{ required: true }]}
                    >
                      <Input type="number" />
                    </Form.Item>
                  </Form>
                </div>
              )}

              {current == 2 && (
                <div style={contentStyle}>
                  <Form
                    name="wrap"
                    labelCol={{ flex: "200px" }}
                    labelAlign="left"
                    labelWrap
                    wrapperCol={{ flex: 1 }}
                    colon={false}
                    style={{ maxWidth: "50%", marginTop: "15px" }}
                  >
                    <Form.Item
                      label="Dataset Name"
                      name="username"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="e.g john__test" />
                    </Form.Item>

                    <Form.Item
                      label="Target"
                      name="target"
                      rules={[{ required: true }]}
                    >
                      <Input value={"Packing Confirmation"} type="string" />
                    </Form.Item>

                    <Form.Item
                      label="Concurrent Requests"
                      name="concurrent"
                      rules={[{ required: true }]}
                    >
                      <Input type="number" />
                    </Form.Item>
                  </Form>
                </div>
              )}

              <div style={{ marginTop: 24 }}>
                {current < steps.length - 1 && (
                  <Button type="primary" onClick={() => next()}>
                    Next
                  </Button>
                )}
                {current === steps.length - 1 && (
                  <Button
                    type="primary"
                    onClick={() =>
                      {
                        message.success("Test Created. Our Hydras are firing.")
                        return router.push('/tests/packconf')
                      }
                    }
                  >
                    Submit
                  </Button>
                )}
                {current > 0 && (
                  <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
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
