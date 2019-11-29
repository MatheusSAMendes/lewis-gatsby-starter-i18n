import React from 'react';
import { injectIntl, Link } from 'gatsby-plugin-intl';

import { Button, Heading, Layout, SEO, Text } from '../components';

const NotFoundPage = ({ intl }) => {
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'notfound_title' })} />
      <Heading>{intl.formatMessage({ id: 'notfound_title' })}</Heading>
      <Text>
        {intl.formatMessage({ id: 'notfound_text' })}{' '}
        <span role="img" aria-label="duh">
          😓
        </span>
      </Text>
      <Link to="/">
        <Button>{intl.formatMessage({ id: 'notfound_button' })}</Button>
      </Link>
    </Layout>
  );
};

export default injectIntl(NotFoundPage);
