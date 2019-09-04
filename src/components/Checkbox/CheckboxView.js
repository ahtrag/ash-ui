import React from "react";
import PropTypes from "prop-types";
import Ripple from "../Ripple";
import Text from "../Text";
import CheckBoxIcon from "mdi-react/CheckBoxIcon";
import CheckboxBlankOutlineIcon from "mdi-react/CheckboxBlankOutlineIcon";
import { createUseStyles } from "react-jss";
import { renderClassName } from "../../utils/constants";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    alignItems: "center",
    marginRight: 16
  },
  iconButton: {
    position: "relative",
    overflow: "hidden",
    display: "inline-flex",
    padding: 8,
    borderRadius: "50%",
    cursor: props => (!props.disable ? "pointer" : "default"),
    color: props => (!props.disable ? props.color : "gray")
  }
});

const CheckboxView = props => {
  const {
    checked,
    value,
    color,
    label,
    labelColor,
    name,
    id,
    className,
    style,
    disable,
    disableRipple,
    onChange,
    checkedIcon,
    uncheckedIcon
  } = props;
  const classes = useStyles({ color, disable });

  return (
    <label className={renderClassName(classes.root, className)} style={style}>
      <span className={classes.iconButton}>
        {checked ? checkedIcon : uncheckedIcon}
        {!disable && !disableRipple ? <Ripple /> : null}
      </span>
      <Text color={!disable ? labelColor : "gray"} noMargin>
        {label}
      </Text>
      <input
        type="checkbox"
        name={name}
        id={id}
        value={value}
        onChange={e => (onChange ? onChange(e) : null)}
        style={{ display: "none" }}
        disabled={disable}
      />
    </label>
  );
};

CheckboxView.defaultProps = {
  color: "black",
  disable: false,
  disableRipple: false,
  checkedIcon: <CheckBoxIcon />,
  uncheckedIcon: <CheckboxBlankOutlineIcon />
};

CheckboxView.propTypes = {
  checked: PropTypes.bool,
  value: PropTypes.any,
  color: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  labelColor: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  disable: PropTypes.bool,
  disableRipple: PropTypes.bool,
  onChange: PropTypes.func,
  checkedIcon: PropTypes.element,
  uncheckedIcon: PropTypes.element
};

export default CheckboxView;
