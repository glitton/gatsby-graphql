import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function AllBlogs({ data }) {
  return (
    <Layout pageTitle="Blogs">
      {data.allContentfulBlogPost.nodes.map((node) => {
        return <li key={node.description.id}>{node.title}</li>;
      })}
    </Layout>
  );
}

export const query = graphql`
  {
    allContentfulBlogPost {
      nodes {
        title
        publishDate(formatString: "MMMM DD, YYYY")
        description {
          description
          id
        }
      }
    }
  }
`;
