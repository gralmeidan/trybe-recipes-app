import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => (
  <h2 data-testid="page-title" className="text-uppercase">
    { title }
  </h2>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
