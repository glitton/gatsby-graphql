import React from "react";
import AllBlogs from "../components/all-blogs";
import Layout from "../components/layout";

const blogLandingPage = () => {
  return (
    <Layout pageTitle="Blog Posts">
      <AllBlogs />
    </Layout>
  );
};

export default blogLandingPage;
