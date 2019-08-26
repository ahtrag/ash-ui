import React from "react";
import PropTypes from "prop-types";
import DrawerDefault from "./DrawerDefault";
import DrawerPermanent from "./DrawerPermanent";

const DrawerView = props => {
  const { variant, ...drawerProps } = props;

  switch (variant) {
    case "default":
      return <DrawerDefault {...drawerProps} />;
    case "permanent":
      return <DrawerPermanent {...drawerProps} />;
    default:
      return <DrawerDefault {...drawerProps} />;
  }
};

DrawerView.propTypes = {
  /**
   * Override default styles with className
   */
  className: PropTypes.string,

  /**
   * Override default styles with style
   */
  style: PropTypes.object,

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
  menuList: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object),
    className: PropTypes.string
  })
};

export default DrawerView;
