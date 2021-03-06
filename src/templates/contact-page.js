import React from 'react';
import Helmet from 'react-helmet';
import { HTMLContent } from '../components/Content';
import ContactInfoBlocks from '../components/ContactInfoBlocks';

export const ContactPageTemplate = ({ title, body }) => {
  return (
    <div className="container-fluid">
      <Helmet>
        <title>220 Plus - Контакты</title>
        <meta
          name="description"
          content={`220Plus - электроинструменты в Омске и Омской области. Контакты.`}
        />
        <meta name="keywords" content={`контакты`} />
      </Helmet>
      <ContactInfoBlocks />
      <div className="section">
        <h1 className="section__title">{title}</h1>
        <HTMLContent content={body} />
      </div>
    </div>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <ContactPageTemplate title={post.frontmatter.title} body={post.html} />
  );
};

export const testimonialsPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
