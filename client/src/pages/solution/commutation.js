import React from "react";
import Layout from "../../components/layout/Layout";
import Solution from "../../modules/Solution";
import Commutation from "../../modules/Solution/Commutation";

export default function CommutationPage() {
  return (
    <Layout>
      <Solution>
        <Commutation />
      </Solution>
    </Layout>
  );
}
