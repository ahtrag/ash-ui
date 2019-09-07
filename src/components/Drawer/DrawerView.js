import React from "react";
import PropTypes from "prop-types";
import DrawerDefault from "./DrawerDefault";
import DrawerTemporary from "./DrawerTemporary";

const DrawerView = props => {
  const { variant, ...drawerProps } = props;

  switch (variant) {
    case "default":
      return <DrawerDefault {...drawerProps} />;
    case "temporary":
      return <DrawerTemporary {...drawerProps} />;
    default:
      return <DrawerDefault {...drawerProps} />;
  }
};

DrawerView.defaultProps = {
  variant: "default"
};

DrawerView.propTypes = {
  /**
   * Variant of Drawer
   */
  variant: PropTypes.oneOf(["default", "temporary"]),

  /**
   * Toggle Drawer open
   */
  show: PropTypes.bool.isRequired,

  /**
   * Width of the Drawer
   */
  width: PropTypes.number,

  /**
   * Override default styles with className
   */
  className: PropTypes.shape({
    root: PropTypes.string,
    listItem: PropTypes.string,
    link: PropTypes.string
  }),

  /**
   * Override default styles with style
   */
  style: PropTypes.shape({
    root: PropTypes.object,
    listItem: PropTypes.object,
    link: PropTypes.object
  }),

  /**
   * Event handler onClick at back button
   */
  onClose: PropTypes.func,

  /**
   * MenuList for navigation require array of object and className of string :
   * 1. icon    : element of icon
   * 2. label   : string of navigation label
   * 3. to      : string of route
   * 4. divider : boolean of divider
   */
  menuList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.element,
      to: PropTypes.string,
      divider: PropTypes.bool
    })
  ).isRequired
};

export default DrawerView;
