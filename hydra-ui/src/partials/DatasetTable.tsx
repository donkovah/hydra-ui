import React, { useState } from "react";
import { Button, Divider, FloatButton, Radio, Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { CustomerServiceOutlined } from "@ant-design/icons";

interface DataType {
  key: React.Key;
  name: string;
  interface: string;
  requests: number;
  status: string;
  date: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Jim",
        value: "Jim",
      },
      {
        text: "Submenu",
        value: "Submenu",
        children: [
          {
            text: "Green",
            value: "Green",
          },
          {
            text: "Black",
            value: "Black",
          },
        ],
      },
    ],
    onFilter: (value: string, record) =>
      record.datasetRequests.indexOf(value) === 0,
    sorter: (a, b) => a.datasetRequests.length - b.datasetRequests.length,
    sortDirections: ["descend"],
  },
  {
    title: "Interface",
    dataIndex: "interface",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.datasetInterface - b.datasetInterface,
  },
  {
    title: "Requests",
    dataIndex: "requests",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.requests - b.requests,
  },
  {
    title: "Status",
    dataIndex: "status",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.status.length - b.status.length,
  },
  {
    title: "Date",
    dataIndex: "date",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value: string, record) => record.date.indexOf(value) === 0,
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    interface: "Logistiic Integration",
    requests: 1000,
    status: "Failed",
    date: "2023-07-23",
  },
  {
    key: "2",
    name: "Jim Green",
    interface: "Logistiic Integration",
    requests: 500,
    status: "Passed",
    date: "2023-07-23",
  },
  {
    key: "3",
    name: "Joe Black",
    interface: "Logistiic Integration",
    requests: 300,
    status: "Passed",
    date: "2023-07-23",
  },
  {
    key: "4",
    name: "Jim Red",
    interface: "Logistiic Integration",
    requests: 300,
    status: "Passed",
    date: "2023-07-23",
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

const DatasetTable: React.FC = () => {
  const [selectionType, setSelectionType] = useState<"checkbox" | "radio">(
    "checkbox"
  );

  return (
    <>
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
        <h3>Datasets</h3>
        <Button className="secondary">New Test</Button>
      </div>
      <Divider />
      <Table
        columns={columns}
        style={{ height: "100%" }}
        dataSource={data}
        onChange={onChange}
      />
    </>
  );
};

export default DatasetTable;
