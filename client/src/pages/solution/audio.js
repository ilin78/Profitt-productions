import React from "react";
import Layout from "../../components/layout/Layout";
import Solution from "../../modules/Solution";
import Audio from "../../modules/Solution/Category/Audio";

export default function AudioPage() {
  return (
    <Layout>
      <Solution>
        <Audio />
      </Solution>
    </Layout>
  );
}
