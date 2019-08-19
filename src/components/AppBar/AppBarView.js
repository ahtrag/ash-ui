import React, { useState } from "react";
import PropTypes from "prop-types";
import { globalStyles } from "../../utils/styles";
import { createUseStyles } from "react-jss";
import IconButton from "../IconButton";
import MenuIcon from "mdi-react/MenuIcon";
import Drawer from "../Drawer";

const drawerWidth = 240;

const useStyles = createUseStyles({
  root: {
    display: "flex"
  },
  appWraper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    transition: "margin-left 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"
  },
  drawerOpen: {
    marginLeft: 0
  },
  drawerClose: {
    marginLeft: -drawerWidth - 1
  },
  appBar: {
    display: "flex",
    position: "realtive",
    alignItems: "center",
    boxSizing: "inherit",
    minHeight: "64px",
    paddingRight: "24px",
    paddingLeft: "24px",
    direction: "column",
    zIndex: 1200
  },
  button: {
    marginRight: "24px",
    color: "white"
  },
  justifyRight: {
    display: "flex",
    flex: 1,
    alignItems: "center"
  }
});

const useGlobalStyles = createUseStyles(globalStyles);

const AppBarView = props => {
  const {
    title,
    className,
    style,
    isOpen,
    showMenu,
    profile,
    children,
    menuList
  } = props;
  const classes = useGlobalStyles();
  const styles = useStyles();
  const [state, setState] = useState({
    isOpen,
    showMenu
  });

  const defaultStyles = [
    classes.gradAsh,
    classes.clWhite,
    styles.appBar,
    className
  ]
    .filter(value => Boolean(value))
    .join(" ");

  return (
    <div className={styles.root}>
      <Drawer
        isOpen={state.isOpen}
        onClose={() => setState({ ...state, isOpen: false })}
        menuList={menuList}
      />
      <div
        className={`${styles.appWraper} ${
          state.isOpen ? styles.drawerOpen : styles.drawerClose
        }`}
      >
        <div className={defaultStyles} style={style}>
          <div className={styles.justifyRight}>
            {state.showMenu && !state.isOpen ? (
              <IconButton
                className={styles.button}
                onClick={() => setState({ ...state, isOpen: !state.isOpen })}
              >
                <MenuIcon />
              </IconButton>
            ) : null}
            <h2>{title}</h2>
          </div>
          <div>
            <p>Hi, {profile}</p>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

AppBarView.defaultProps = {
  showMenu: false,
  isOpen: false
};

AppBarView.propTypes = {
  /**
   * AppBar title
   */
  title: PropTypes.string,

  /**
   * AppBar profile
   */
  profile: PropTypes.string,

  /**
   * Override default styles with className
   */
  className: PropTypes.string,

  /**
   * Override default styles with inline style
   */
  style: PropTypes.object,

  /**
   * Children would be wrapped as content
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * MenuList for navigation require array of object :
   * 1. icon  : element of icon
   * 2. label : string of navigation label
   * 3. ref   : string of route
   */
  menuList: PropTypes.arrayOf(PropTypes.element)
};

export default AppBarView;
