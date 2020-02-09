import React from 'react';
import { graphql } from 'gatsby';
import { injectIntl, Link } from 'gatsby-plugin-intl';

import { Button, Heading, Image, Layout, SEO, Text } from '../components';

const About = ({ intl, data }) => {
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'about_title' })} />
      <Heading>{intl.formatMessage({ id: 'about_title' })}</Heading>
      <Image fluid={data.image1.childImageSharp.fluid} alt="image1" />
      <Text>
        {intl.formatMessage({ id: 'about_text1' })}
        <br />
        <br />
        {intl.formatMessage({ id: 'about_text2' })}
      </Text>
      <Link to="/">
        <Button>{intl.formatMessage({ id: 'contact_button' })}</Button>
      </Link>
    </Layout>
  );
};

export default injectIntl(About);

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "image1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
