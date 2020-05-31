import PropTypes from "prop-types";

/**
 * Validations are optional and hence we are not putting is required
 * Also the component should itself implement these validations
 * and the generic component will not enforce anything
 */
export const formComponentPropTypes = {
  type: PropTypes.string.isRequired,

  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,

  hasError: PropTypes.bool,
  helperText: PropTypes.string,

  onChange: PropTypes.func.isRequired,
};
