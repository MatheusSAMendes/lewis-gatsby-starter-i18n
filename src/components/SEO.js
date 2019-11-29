import React from 'react';
import Helmet from 'react-helmet';
import { injectIntl } from 'gatsby-plugin-intl';

import { gatsby } from '../assets/icons';

export const SEO = injectIntl(({ intl, title }) => {
  return (
    <Helmet
      htmlAttributes={{ lang: `${intl.formatMessage({ id: 'lang' })}` }}
      title={title}
      titleTemplate={`%s ― ${intl.formatMessage({ id: 'title' })}`}
      meta={[
        {
          property: `title`,
          content: `${intl.formatMessage({ id: 'title' })}`,
        },
        {
          property: `og:title`,
          content: `${intl.formatMessage({ id: 'title' })}`,
        },
        {
          name: `twitter:title`,
          content: `${intl.formatMessage({ id: 'title' })}`,
        },
        {
          name: `description`,
          content: `${intl.formatMessage({ id: 'description' })}`,
        },
        {
          property: `og:description`,
          content: `${intl.formatMessage({ id: 'description' })}`,
        },
        {
          name: `twitter:description`,
          content: `${intl.formatMessage({ id: 'description' })}`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
      ]}
      link={[{ rel: 'icon', type: 'image/png', href: `${gatsby}` }]}
    />
  );
});
