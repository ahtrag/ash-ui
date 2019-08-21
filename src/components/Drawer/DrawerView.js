import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import { createRipple } from "../../utils/constants";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "mdi-react/ChevronLeftIcon";

//component
import IconButton from "../IconButton";
import Divider from "../Divider";

const width = 240;

const useStyles = createUseStyles({
  drawer: {
    width,
    minHeight: "100vh",
    display: "flex",
    outline: 0,
    overflowY: "auto",
    flexDirection: "column",
    boxSizing: "inherit",
    transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
    borderRight: "1px solid rgba(190,190,190, 0.9)"
  },
  drawerOpen: {
    transform: "none"
  },
  drawerClosed: {
    transform: `translateX(${-width - 1}px)`
  },
  topList: {
    minHeight: "64px",
    display: "flex",
    alignItems: "flex-end",
    borderBottom: "1px solid rgba(190,190,190, 0.7)",
    flexDirection: "column",
    boxSizing: "border-box"
  },
  buttonClose: {
    flexDirection: "column",
    padding: "6px"
  },
  menuList: {
    flexDirection: "column",
    display: "flex"
  },
  menu: {
    padding: "14px 16px 14px 16px",
    width: "100%",
    display: "flex",
    position: "relative",
    boxSizing: "border-box",
    textAlign: "left",
    alignItems: "center",
    paddingItem: "8px",
    justifyContent: "flex-start",
    textDecoration: "none"
  }
});

const DrawerView = props => {
  const { className, style, onClose, menuList } = props;
  const styles = useStyles();

  const defaultStyles = [
    styles.drawer,
    props.isOpen ? styles.drawerOpen : styles.drawerClosed,
    className
  ]
    .filter(value => Boolean(value))
    .join(" ");
  return (
    <div className={defaultStyles} style={style}>
      <div className={styles.topList}>
        <div className={styles.buttonClose}>
          <IconButton
            onClick={e => {
              createRipple(e);
              Boolean(onClose) && onClose(e);
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
        </div>
      </div>
      <div className={styles.menuList}>
        {menuList
          ? menuList.data.map(menu => (
              <div key={menu.label}>
                <Link to={menu.to}>
                  <div className={`${styles.menu} ${menuList.className}`}>
                    {menu.icon} &nbsp; &nbsp;
                    {menu.label}
                  </div>
                </Link>
                {menu.divider ? <Divider /> : null}
              </div>
            ))
          : null}
      </div>
    </div>
  );
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
