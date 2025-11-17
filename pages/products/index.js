import React from "react";
import { Table, Button, Card } from "antd";
import { useRouter } from "next/router";

const products = [
  { id: 1, name: "Laptop", price: "$1200" },
  { id: 2, name: "Smartphone", price: "$800" },
  { id: 3, name: "Headphones", price: "$150" },
];

export default function ProductList() {
  const router = useRouter();

  const columns = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button type="primary" onClick={() => router.push(`/products/${record.id}`)}>
          View Details
        </Button>
      ),
    },
  ];

  return (
    <div style={{ padding: "40px", display: "flex", justifyContent: "center" }}>
      <Card
        title="Product List"
        bordered
        style={{ width: "80%", maxWidth: "900px" }}
      >
        <Table
          dataSource={products}
          columns={columns}
          rowKey="id"
          pagination={false}
          bordered
        />
      </Card>
    </div>
  );
}
