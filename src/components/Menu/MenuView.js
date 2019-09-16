import React from "react";
import PropTypes from "prop-types";
import Popup from "../Popup";
import Button from "../Button";
import Text from "../Text";
import { createUseStyles } from "react-jss";
import { renderClassName, renderStyle } from "../../utils/constants";

const useStyles = createUseStyles({
  normal: {
    justifyContent: "flex-start"
  },
  reverse: {
    flexDirection: "row-reverse",
    justifyContent: "flex-end"
  },
  leftIcon: {
    marginLeft: 16
  },
  rightIcon: {
    marginRight: 16
  },
  menuText: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  }
});

const MenuView = props => {
  const {
    items,
    target,
    position,
    transformOrigin,
    onClose,
    className,
    style,
    classNameOptions,
    styleOptions
  } = props;
  const classes = useStyles();

  return (
    <Popup
      target={target}
      position={position}
      transformOrigin={transformOrigin}
      onClose={onClose}
      className={renderClassName(classNameOptions && classNameOptions.paper)}
      style={renderStyle(styleOptions && styleOptions.paper)}
    >
      {items.map((item, index) => (
        <Button
          key={`menu-${item.label}-${index}`}
          component={item.href ? "a" : "button"}
          href={item.href}
          rounded={false}
          className={renderClassName(
            classes.normal,
            item.icon && item.iconPosition === "right" && classes.reverse,
            className
          )}
          style={style}
          fullWidth
        >
          {item.icon}
          <div
            className={renderClassName(
              classes.menuText,
              item.icon && item.iconPosition === "right"
                ? classes.rightIcon
                : item.icon && classes.leftIcon
            )}
          >
            <Text noMargin>{item.label}</Text>
            <Text variant="paragraph" color="gray" noMargin>
              {item.helper}
            </Text>
          </div>
        </Button>
      ))}
    </Popup>
  );
};

MenuView.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element,
      iconPosition: PropTypes.oneOf(["left", "right"]),
      label: PropTypes.any,
      helper: PropTypes.string,
      href: PropTypes.string
    })
  ).isRequired,
  target: PropTypes.object,
  position: PropTypes.shape({
    vertical: PropTypes.oneOf(["top", "center", "bottom"]),
    horizontal: PropTypes.oneOf(["left", "center", "right"])
  }),
  transformOrigin: PropTypes.shape({
    vertical: PropTypes.oneOf(["top", "center", "bottom"]),
    horizontal: PropTypes.oneOf(["left", "center", "right"])
  }),
  onClose: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  classNameOptions: PropTypes.shape({
    paper: PropTypes.string
  }),
  styleOptions: PropTypes.shape({
    paper: PropTypes.object
  })
};

export default MenuView;
