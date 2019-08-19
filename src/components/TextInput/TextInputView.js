import React from "react";
import PropTypes from "prop-types";
import TextInputDefault from "./TextInputDefault";
import TextInputOutline from "./TextInputOutline";

const TextInputView = props => {
  const { variant, ...inputProps } = props;

  switch (variant) {
    case "default":
      return <TextInputDefault {...inputProps} />;
    case "outline":
      return <TextInputOutline {...inputProps} />;
    default:
      return <TextInputDefault {...inputProps} />;
  }
};

TextInputView.defaultProps = {
  variant: "outline"
};

TextInputView.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  variant: PropTypes.oneOf(["outline", "default"]),
  type: PropTypes.oneOf(["text", "email", "password"]),
  className: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
  fullWidth: PropTypes.bool
};

export default TextInputView;
