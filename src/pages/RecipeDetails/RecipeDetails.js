import React from 'react';
import PropTypes from 'prop-types';
//

function RecipeDetails({ match: { params: { id } } }) {
  return (
    <div>
      RecipeDetails
    </div>
  );
}

RecipeDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default RecipeDetails;
