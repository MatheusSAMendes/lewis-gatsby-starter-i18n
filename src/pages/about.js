import React from 'react';
import styled from 'styled-components';
import { injectIntl, Link } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import Head from '../components/Head';
import Heading1 from '../elements/Heading1';
import TextBody from '../elements/TextBody';
import Button from '../elements/Button';

import image1 from '../images/image1.jpg';

const ImageUs = styled.img`
  margin: 0 auto 3vh auto;
`;

const TextBodyWithMarginBottom = styled(TextBody)`
  margin-bottom: 15vh;
`;

function About({ intl }) {
  return (
    <Layout>
      <Head title={intl.formatMessage({ id: 'about_title' })} />
      <Heading1>{intl.formatMessage({ id: 'about_title' })}</Heading1>
      <ImageUs src={image1} alt="monkeys" />
      <TextBodyWithMarginBottom>
        {intl.formatMessage({ id: 'about_text1' })}
        <br />
        <br />
        {intl.formatMessage({ id: 'about_text2' })}
      </TextBodyWithMarginBottom>
      <Link to="/">
        <Button>{intl.formatMessage({ id: 'cta_button' })}</Button>
      </Link>
    </Layout>
  );
}

export default injectIntl(About);