import React from "react";
import { Card, Button } from "antd";
import { useRouter } from "next/router";

const products = [
  { id: 1, name: "Laptop", price: "$1200", description: "High performance laptop for work and gaming." },
  { id: 2, name: "Smartphone", price: "$800", description: "Latest smartphone with cutting-edge features." },
  { id: 3, name: "Headphones", price: "$150", description: "Noise-cancelling headphones with premium sound." },
];

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div style={{ padding: "20px", justifyContent: "center", display: "flex" }}>
      <Card title={product.name} bordered style={{ width: 400 }}>
        <p><strong>Price:</strong> {product.price}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <Button type="default" onClick={() => router.back()}>
          Go Back
        </Button>
      </Card>
    </div>
  );
}
