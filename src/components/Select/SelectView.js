import React from "react";
import PropTypes from "prop-types";
import SelectDefault from "./SelectDefault";
import SelectOutlined from "./SelectOutlined";
import NativeSelectDefault from "./NativeSelectDefault";
import NativeSelectOutlined from "./NativeSelectOutlined";

const SelectView = props => {
  const { variant, native, ...selectProps } = props;

  switch (variant) {
    case "default":
      return native ? (
        <NativeSelectDefault {...selectProps} />
      ) : (
        <SelectDefault {...selectProps} />
      );
    case "outlined":
      return native ? (
        <NativeSelectOutlined {...selectProps} />
      ) : (
        <SelectOutlined {...selectProps} />
      );
    default:
      return native ? (
        <NativeSelectDefault {...selectProps} />
      ) : (
        <SelectDefault {...selectProps} />
      );
  }
};

SelectView.defaultProps = {
  fullWidth: false,
  noMargin: false,
  native: false,
  multiple: false,
  checkbox: false,
  variant: "default",
  renderValue: values => values.join(", ")
};

SelectView.propTypes = {
  /**
   * Options of select. isRequired
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      label: PropTypes.any
    })
  ).isRequired,

  /**
   * Variant of Select :
   * 1. outlined
   * 2. default
   */
  variant: PropTypes.oneOf(["outlined", "default"]),

  /**
   * Value of option selected
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]),

  /**
   * event target option selected
   */
  onChange: PropTypes.func,

  /**
   * Function to adjust how select render the value.
   * Currently only work if native props set to false.
   * @param values
   */
  renderValue: PropTypes.func,

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
   * Color of the Select border
   */
  color: PropTypes.string,

  /**
   * Text that will show when value is empty
   * Currently only work if native props set to false.
   */
  placeholder: PropTypes.string,

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
  noMargin: PropTypes.bool,

  /**
   * Use native select
   * @defaultValue false
   */
  native: PropTypes.bool,

  /**
   * Select multiple option.
   * Currently only work if native props set to false.
   * @defaultValue false
   */
  multiple: PropTypes.bool,

  /**
   * Display checkbox in option menu.
   * Currently only work if native props set to false and multiple props set to true.
   * @defaultValue false
   */
  checkbox: PropTypes.bool,

  /**
   * Width of the select
   * Work only if native props set to false
   */
  width: PropTypes.number
};

export default SelectView;
