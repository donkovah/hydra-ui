'use client';

import { Layout, Menu, Breadcrumb, ConfigProvider, ThemeConfig, theme, Avatar, MenuProps } from 'antd';
import React, { useState } from 'react';
import TranslationTable from '@/partials/TranslationTable';
import HeaderNav from '@/partials/HeaderNav';
import SideBar from '@/partials/SideBar';
import DatasetTable from '@/partials/DatasetTable';

const { Content, Footer } = Layout;

const HomePage: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items1: MenuProps['items'] = ["PROD", 'UAT', 'DEV'].map((key) => ({
    key,
    label: `${key}`,
  }));

  return (
    <Layout>
      <HeaderNav />
      <Content style={{ padding: '0 50px'}}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Translations</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
          <SideBar />
          <Content style={{ padding: '0 24px', minHeight: 280, height: "70vh",color:"black" }}>
            <DatasetTable />
          </Content>
        </Layout>
      <Footer style={{ textAlign: 'center' }}>Logistics Team ©2023</Footer>
      </Content>
    </Layout>
  );
 }
export default HomePage;