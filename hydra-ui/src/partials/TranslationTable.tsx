"use client";

import React, { useEffect, useState } from "react";
import { Divider, Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";

interface DataType {
  key: React.Key;
  transTarget: string;
  transCatalog: number;
  transKey: string;
  transValue: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Target",
    dataIndex: "transTarget",
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
    onFilter: (value: string, record) => record.transKey.indexOf(value) === 0,
    sorter: (a, b) => a.transKey.length - b.transKey.length,
    sortDirections: ["descend"],
  },
  {
    title: "Catalog",
    dataIndex: "transCatalog",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.transCatalog - b.transCatalog,
  },
  {
    title: "Key",
    dataIndex: "transKey",
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
    onFilter: (value: string, record) => record.transKey.indexOf(value) === 0,
  },
  {
    title: "Value",
    dataIndex: "transValue",
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
    onFilter: (value: string, record) => record.transValue.indexOf(value) === 0,
  },
];

const data = [
  {
    key: "1",
    transTarget: "John Brown",
    transCatalog: 11,
    transKey: "New York No. 1 Lake Park",
    transValue: "Lagos No. 1 Lake Park",
  },
  {
    key: "2",
    transTarget: "Jim Green",
    transCatalog: 22,
    transKey: "London No. 1 Lake Park",
    transValue: "Ibiza No. 1 Lake Park",
  },
  {
    key: "3",
    transTarget: "Joe Black",
    transCatalog: 33,
    transKey: "Sydney No. 1 Lake Park",
    transValue: "Berlin No. 1 Lake Park",
  },
  {
    key: "4",
    transTarget: "Jim Red",
    transCatalog: 44,
    transKey: "London No. 2 Lake Park",
    transValue: "Paris No. 2 Lake Park",
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

const TranslationTable: React.FC<any> = () => {
  const [translations, setTranslations] = useState<string[]>([]) 

  useEffect(() => {
    const getTranslations = async function getTranslations() {
      const res = await fetch('http://localhost:3001/translations') 
      if (!res.ok) {
        throw new Error('Failed to fetch data')
      }
    setTranslations(await res.json())
    }
    getTranslations()
    
  },[])

  return (
    <>
      <div
        style={{
          paddingBottom: "20px",
        }}
      >
        <h1>Translations</h1>
        <Divider />
        <p>
          Logistics sits b/w D365 and ThirdPartyLogistics (i.e warehouses) for
          making sure On products reach their awesome new owners.
        </p>
        <p>
          Every warehouse have their own usage of different terms involved in
          our communication with them. Translations take care of ensuring that
          D365 and warehouses are talking the same language when conducting
          business
        </p>
      </div>
      <Table
        columns={columns}
        style={{ paddingTop: "20px" }}
        dataSource={translations.map((it: any,index) =>({
          key: index,
          transTarget: it.target,
          transCatalog: it.catalog,
          transKey: it.key,
          transValue: it.value,
        }))}
        onChange={onChange}
      />
      ;
    </>
  );
};

export default TranslationTable;
