import * as React from 'react';
import PropTypes from 'prop-types';

import { Flex, Typography, DesignSystemProvider, lightTheme } from '@strapi/design-system';

export const DeprecationNotice = ({ children, href }) => (
  <DesignSystemProvider theme={lightTheme}>
    <Flex padding={5} background="danger200" justifyContent="center" marginTop={4} marginBottom={4}>
      <Typography fontSize={4} fontWeight="bold" as="p">
        ⛔️
        <strong>
          {' This component has been deprecated. Please use '}
          <a style={{ color: 'inherit', textDecoration: 'underline' }} href={href}>
            {children}
          </a>
          {' instead. '}
        </strong>
        ⛔️
      </Typography>
    </Flex>
  </DesignSystemProvider>
);

DeprecationNotice.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};
