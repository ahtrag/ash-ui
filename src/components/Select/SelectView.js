import React from "react";
import PropTypes from "prop-types";
import SelectDefault from "./SelectDefault";
import SelectOutlined from "./SelectOutlined";

const SelectView = props => {
  const { variant, ...selectProps } = props;

  switch (variant) {
    case "default":
      return <SelectDefault {...selectProps} />;
    case "outlined":
      return <SelectOutlined {...selectProps} />;
    default:
      return <SelectDefault {...selectProps} />;
  }
};

SelectView.defaultProps = {
  fullWidth: false,
  noMargin: false,
  variant: "default"
};

SelectView.propTypes = {
  /**
   * Chidren of Select, option element. isRequired
   */
  children: PropTypes.any.isRequired,

  /**
   * Variant of Select :
   * 1. outlined
   * 2. default
   */
  variant: PropTypes.oneOf(["outlined", "default"]),

  /**
   * Value of option selected
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * event target option selected
   */
  onChange: PropTypes.func,

  /**
   * fullWidth enabled, default : false
   */
  fullWidth: PropTypes.bool,

  /**
   * Label of Select
   */
  label: PropTypes.string,

  /**
   * Equal to label for enabling clickable
   */
  id: PropTypes.string,

  /**
   * Name of Select component as identifier
   */
  name: PropTypes.string,

  /**
   * Override default styles with className
   */
  className: PropTypes.string,

  /**
   * Override default styles with style
   */
  style: PropTypes.object,

  /**
   * Add object of element in the start and end of Select
   */
  extra: PropTypes.shape({
    start: PropTypes.element,
    end: PropTypes.element
  }),

  /**
   * Show TextInput without margin-top and margin-bottom
   * @defaultValue false
   */
  noMargin: PropTypes.bool
};

export default SelectView;
