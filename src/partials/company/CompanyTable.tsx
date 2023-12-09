"use client";

import React, { useEffect, useState } from "react";
import { Button, Col, Divider, Row, Space, Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";

interface DataType {
  key: React.Key;
  name: string;
  email: number;
  validate: string;
  created: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Email",
    dataIndex: "email",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.email - b.email,
  },
  {
    title: "Validated",
    dataIndex: "validate",
  },
  {
    title: "Created",
    dataIndex: "created",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button type="primary">Edit</Button>
        <Button type="primary" danger>
          Delete
        </Button>
      </Space>
    ),
  },
];

const testData: DataType[] = [
  {
    key: "1",
    name: "Forto",
    email: 11,
    validate: "New York No. 1 Lake Park",
    created: "Lagos No. 1 Lake Park",
  },
  {
    key: "2",
    name: "DemoUp Cliplister",
    email: 22,
    validate: "London No. 1 Lake Park",
    created: "Ibiza No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Lendis",
    email: 33,
    validate: "Sydney No. 1 Lake Park",
    created: "Berlin No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Cars 45",
    email: 44,
    validate: "London No. 2 Lake Park",
    created: "Paris No. 2 Lake Park",
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const CompanyTable: React.FC<any> = ({ data }) => {
  const [translations, setTranslations] = useState<DataType[]>(testData);

  useEffect(() => {
    console.log(data);
    setTranslations(testData);
  }, [testData]);

  return (
    <>
      <Row
        justify="space-between"
        align="middle"
        style={{ paddingBottom: "10px" }}
      >
        <Col>
          <div>
            <h2>{"Company"}</h2>
          </div>
        </Col>
        <Col>
          <Button type="default">New</Button>
        </Col>
      </Row>
      {/* <Divider /> */}
      <Table
        columns={columns}
        style={{ paddingTop: "5px" }}
        dataSource={translations?.map((it: DataType) => ({
          key: it.key,
          name: it.name,
          email: it.email,
          validate: it.validate,
          created: it.created,
        }))}
        onChange={onChange}
      />
      ;
    </>
  );
};

export default CompanyTable;
