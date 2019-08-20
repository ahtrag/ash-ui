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
  variant: "default"
};

SelectView.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.oneOf(["outlined", "default"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  extra: PropTypes.shape({
    start: PropTypes.element,
    end: PropTypes.element
  })
};

export default SelectView;
