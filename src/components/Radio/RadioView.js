import React from "react";
import PropTypes from "prop-types";
import Ripple from "../Ripple";
import Text from "../Text";
import RadioboxBlankIcon from "mdi-react/RadioboxBlankIcon";
import RadioboxMarkedIcon from "mdi-react/RadioboxMarkedIcon";
import { createUseStyles } from "react-jss";
import { renderClassName, renderStyle } from "../../utils/constants";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: props =>
      props.justifyContent === "start"
        ? "flex-start"
        : props.justifyContent === "center"
        ? "center"
        : props.justifyContent === "end"
        ? "flex-end"
        : "",
    alignItems: props =>
      props.alignItems === "start"
        ? "flex-start"
        : props.alignItems === "center"
        ? "center"
        : props.alignItems === "end"
        ? "flex-end"
        : "",
    flexDirection: props => (props.direction ? props.direction : ""),
    color: props => (props.color ? props.color : "")
  },
  radioRoot: {
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
    cursor: "pointer"
  }
});

const RadioView = props => {
  const {
    radios,
    name,
    labelColor,
    color,
    className,
    style,
    checkedIcon,
    uncheckedIcon,
    value,
    justifyContent,
    alignItems,
    direction,
    onChange
  } = props;
  const classes = useStyles({ color, justifyContent, alignItems, direction });

  return (
    <div className={classes.root}>
      {radios.map((radio, index) => (
        <label
          key={`radio-${name}-${radio.label}-${index}`}
          className={renderClassName(classes.radioRoot, className)}
          style={style}
        >
          <span
            className={classes.iconButton}
            style={renderStyle(
              radio.disable
                ? { color: "gray", cursor: "default" }
                : radio.color && { color: radio.color }
            )}
          >
            {value === radio.value ? checkedIcon : uncheckedIcon}
            {!radio.disable && !radio.disableRipple ? <Ripple /> : null}
          </span>
          <Text
            color={
              !radio.disable
                ? radio.labelColor
                  ? radio.labelColor
                  : labelColor
                : "gray"
            }
            noMargin
          >
            {radio.label}
          </Text>
          <input
            type="radio"
            name={name}
            id={radio.id}
            value={radio.value}
            disabled={radio.disable}
            checked={value === radio.value}
            onChange={e => onChange(e)}
            style={{ display: "none" }}
          />
        </label>
      ))}
    </div>
  );
};

RadioView.defaultProps = {
  checkedIcon: <RadioboxMarkedIcon />,
  uncheckedIcon: <RadioboxBlankIcon />
};

RadioView.propTypes = {
  radios: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      labelColor: PropTypes.string,
      color: PropTypes.string,
      id: PropTypes.string,
      value: PropTypes.any,
      disable: PropTypes.bool,
      disableRipple: PropTypes.bool
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  labelColor: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  checkedIcon: PropTypes.element,
  uncheckedIcon: PropTypes.element,
  value: PropTypes.any,
  justifyContent: PropTypes.oneOf(["start", "center", "end"]),
  alignItems: PropTypes.oneOf(["start", "center", "end"]),
  direction: PropTypes.oneOf(["row", "column"]),
  onChange: PropTypes.func
};

export default RadioView;
