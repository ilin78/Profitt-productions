import React from "react";
import Layout from "../../components/layout/Layout";
import Solution from "../../modules/Solution";
import SyncSystem from "../../modules/Solution/Category/SyncSystem";

export default function SyncSystemPage() {
  return (
    <Layout>
      <Solution>
        <SyncSystem />
      </Solution>
    </Layout>
  );
}
