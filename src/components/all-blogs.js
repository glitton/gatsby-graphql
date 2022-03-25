import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

const AllBlogs = () => {
  const data = useStaticQuery(graphql`
    query allBlogsQuery {
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
  `);

  return (
    <main>
      {data.allContentfulBlogPost.nodes.map((node) => {
        return (
          <article key={node.description.id}>
            <li>
              <Link to="/something">{node.title}</Link>
              Published: {node.publishDate}
              <p>{node.description.description}</p>
            </li>
          </article>
        );
      })}
    </main>
  );
};

export default AllBlogs;
