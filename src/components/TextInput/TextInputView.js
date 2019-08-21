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
  /**
   * Label of TextInput
   */
  label: PropTypes.string,

  /**
   * Label of TextInput
   */
  value: PropTypes.string,

  /**
   * Id of TextInput component as identifier
   */
  id: PropTypes.string,

  /**
   * Name of Select component as identifier
   */
  name: PropTypes.string,

  /**
   * Placeholder of TextInput
   */
  placeholder: PropTypes.string,

  /**
   * Variant of TextInput :
   * 1. outlined
   * 2. default
   */
  variant: PropTypes.oneOf(["outlined", "default"]),

  /**
   * Variant of TextInput :
   * 1. text
   * 2. email
   * 3. password
   */
  type: PropTypes.oneOf(["text", "email", "password"]),

  /**
   * Add object of element in the start and end of TextInput
   */
  extra: PropTypes.shape({
    start: PropTypes.element,
    end: PropTypes.element
  }),

  /**
   * Override default styles with className
   */
  className: PropTypes.string,

  /**
   * Override default styles with style
   */
  style: PropTypes.object,

  /**
   * event handler onChange value as function
   */
  onChange: PropTypes.func,

  /**
   * fullWidth enabled, default : false
   */
  fullWidth: PropTypes.bool
};

export default TextInputView;
