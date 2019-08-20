import React from "react";
import PropTypes from "prop-types";
import TextInputDefault from "./TextInputDefault";
import TextInputOutlined from "./TextInputOutlined";

const TextInputView = props => {
  const { variant, ...inputProps } = props;

  switch (variant) {
    case "default":
      return <TextInputDefault {...inputProps} />;
    case "outlined":
      return <TextInputOutlined {...inputProps} />;
    default:
      return <TextInputDefault {...inputProps} />;
  }
};

TextInputView.defaultProps = {
  variant: "default",
  fullWidth: false,
  type: "text"
};

TextInputView.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  variant: PropTypes.oneOf(["outlined", "default"]),
  type: PropTypes.oneOf(["text", "email", "password"]),
  extra: PropTypes.shape({
    start: PropTypes.element,
    end: PropTypes.element
  }),
  className: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
  fullWidth: PropTypes.bool
};

export default TextInputView;
