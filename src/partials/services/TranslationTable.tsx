"use client";

import React, { useEffect, useState } from "react";
import { Divider, Table } from "antd";
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
];

const testData:DataType[] = [
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

const TranslationTable: React.FC<any> = ({data, header}) => {
  const [translations, setTranslations] = useState<DataType[]>(testData) 

  useEffect(() => {
    console.log(data)
    setTranslations(testData)
  },[testData])

  return (
    <>
      <div
        style={{
          paddingBottom: "5px",
        }}
      >
        <h2>{header ? header : "Company"}</h2>
        <Divider />
      </div>
      <Table
        columns={columns}
        style={{ paddingTop: "5px" }}
        dataSource={translations?.map((it: DataType) =>({
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

export default TranslationTable;
