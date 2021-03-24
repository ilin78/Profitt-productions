import React from "react";
import Layout from "../../components/layout/Layout";
import Solution from "../../modules/Solution";
import Mixing from "../../modules/Solution/Mixing";

export default function MixingPage() {
  return (
    <Layout>
      <Solution>
        <Mixing />
      </Solution>
    </Layout>
  );
}
