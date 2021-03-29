import React from "react";
import Layout from "../../components/layout/Layout";
import Solution from "../../modules/Solution";
import ModulSystem from "../../modules/Solution/Category/ModulSystem";

export default function ModulSystemPage() {
  return (
    <Layout>
      <Solution>
        <ModulSystem />
      </Solution>
    </Layout>
  );
}
