import React from 'react';
import styled from 'styled-components';
import { injectIntl } from 'gatsby-plugin-intl';

const Container = styled.footer`
  padding: 5vh var(--sides-padding-desktop) 3vh var(--sides-padding-desktop);
  margin-top: 20vh;
  text-align: left;
  font-size: 17px;

  @media (max-width: 849px) {
    font-size: 16px;
    padding: 5vh var(--sides-padding-mobile) 3vh var(--sides-padding-mobile);
  }
`;

export const Footer = injectIntl(({ intl }) => {
  return (
    <Container>
      <p>
        © {new Date().getFullYear()}, {intl.formatMessage({ id: 'title' })}
      </p>
    </Container>
  );
});
