import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const AllBlogs = ({ data }) => {
  return (
    <Layout pageTitle="Blogs">
      <h3>Blog Posts</h3>
      {data.allContentfulBlogPost.nodes.map((node) => {
        return (
          <article key={node.id}>
            <li>
              {node.title} Published: {node.publishDate}
              <p>{node.description.description}</p>
            </li>
          </article>
        );
      })}
    </Layout>
  );
};

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

export default AllBlogs;
