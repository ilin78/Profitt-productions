import React from "react";
import Layout from "../../components/layout/Layout";
import Solution from "../../modules/Solution";
import Accessory from "../../modules/Solution/Accessory";

export default function AccessoryPage() {
  return (
    <Layout>
      <Solution>
        <Accessory />
      </Solution>
    </Layout>
  );
}
