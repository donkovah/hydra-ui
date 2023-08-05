"use client";

import {
  Layout,
} from "antd";
import React from "react";
import DatasetTable from "@/partials/DatasetTable";

const { Content } = Layout;

const HomePage: React.FC = () => {
  return (
    <Content
      style={{
        padding: "0 24px",
        minHeight: 280,
        height: "70vh",
        color: "black",
      }}
    >
      <DatasetTable />
    </Content>
  );
};
export default HomePage;
