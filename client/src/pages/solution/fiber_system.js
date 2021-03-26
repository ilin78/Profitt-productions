import React from "react";
import Layout from "../../components/layout/Layout";
import Solution from "../../modules/Solution";
import FiberSystem from "../../modules/Solution/FiberSystem";

export default function FiberSystemPage() {
  return (
    <Layout>
      <Solution>
        <FiberSystem />
      </Solution>
    </Layout>
  );
}
