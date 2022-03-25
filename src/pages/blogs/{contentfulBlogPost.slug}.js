import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";

const BlogPostTemplate = ({ data }) => {
  // console.log("props", props);
  return (
    <Layout pageTitle>
      <h3>{data.contentfulBlogPost.title}</h3>
      <p>Published: {data.contentfulBlogPost.publishDate}</p>
      <p>{data.contentfulBlogPost.body.body}</p>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    contentfulBlogPost(id: { eq: $id }) {
      slug
      title
      body {
        body
      }
      publishDate(formatString: "MMMM DD, YYYY")
    }
  }
`;

export default BlogPostTemplate;
