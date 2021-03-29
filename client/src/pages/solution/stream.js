import React from "react";
import Layout from "../../components/layout/Layout";
import Solution from "../../modules/Solution";
import Stream from "../../modules/Solution/Category/Stream";

export default function StreamPage() {
  return (
    <Layout>
      <Solution>
        <Stream />
      </Solution>
    </Layout>
  );
}
