"use client";

import {
  Breadcrumb,
} from "antd";
import React from "react";

const Breadcrumbs: React.FC = () => {
  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Company</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default Breadcrumbs;
