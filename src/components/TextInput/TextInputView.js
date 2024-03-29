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
  noMargin: false,
  type: "text"
};

TextInputView.propTypes = {
  /**
   * Label of TextInput
   */
  label: PropTypes.string,

  /**
   * value of TextInput
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Id of TextInput component as identifier
   */
  id: PropTypes.string,

  /**
   * Name of TextInput component as identifier
   */
  name: PropTypes.string,

  /**
   * File type accepted by input type file
   */
  accept: PropTypes.string,

  /**
   * Color of the TextInput border
   */
  color: PropTypes.string,

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
   * 4. number,
   * 5. tel
   * 6. date
   * 7. file
   */
  type: PropTypes.oneOf([
    "text",
    "email",
    "password",
    "number",
    "tel",
    "date",
    "file"
  ]),

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
   * event handler onfocus value as function
   */
  onFocus: PropTypes.func,

  /**
   * fullWidth enabled, default : false
   */
  fullWidth: PropTypes.bool,

  /**
   * Show TextInput without margin-top and margin-bottom
   * @defaultValue false
   */
  noMargin: PropTypes.bool
};

export default TextInputView;
