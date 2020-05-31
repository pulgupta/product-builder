import React from "react";
import PropTypes from 'prop-types'

const ProductParts = (props) => {
  let parts = null;

  switch (props.type) {
    case "base":
      parts = <div>base</div>;
      break;
    case "icing":
      parts = <div>icing</div>;
      break;
    case "fruits":
      parts = <div>fruits</div>;
      break;
    default:
        break;
  }
  return parts;
};

ProductParts.propTypes = {
    type: PropTypes.string.isRequired
}

export default ProductParts;
