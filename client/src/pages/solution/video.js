import React from "react";
import Layout from "../../components/layout/Layout";
import Solution from "../../modules/Solution";
import Video from "../../modules/Solution/Video";

export default function VideoPage() {
  return (
    <Layout>
      <Solution>
        <Video />
      </Solution>
    </Layout>
  );
}
