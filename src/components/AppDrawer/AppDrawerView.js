import React, { useState } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import IconButton from "../IconButton/IconButtonView";
import Drawer from "../Drawer/DrawerView";
import MenuIcon from "mdi-react/MenuIcon";
import { renderClassName } from "../../utils/constants";

const drawerWidth = 240;

const useStyles = createUseStyles({
  defaultColor: {
    background: "linear-gradient(to right, #3f4c6b, #606c88)",
    color: "white"
  },
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
    zIndex: 10
  },
  button: {
    marginRight: "24px",
    color: "white"
  },
  justifyRight: {
    display: "flex",
    flex: 1,
    alignItems: "center"
  },
  content: {
    display: "flex",
    margin: "24px"
  }
});

const AppDrawerView = props => {
  const {
    title,
    className,
    style,
    show,
    showMenu,
    profile,
    children,
    menuList
  } = props;
  const classes = useStyles();

  const defaultStyles = [
    classes.defaultColor,
    classes.clWhite,
    classes.appBar,
    className
  ]
    .filter(value => Boolean(value))
    .join(" ");

  const [state, setState] = useState({
    show,
    showMenu
  });

  return (
    <div className={classes.root}>
      {showMenu ? (
        <Drawer
          show={state.show}
          onClose={() => setState({ ...state, show: false })}
          menuList={menuList}
        />
      ) : null}
      <div
        className={renderClassName(
          classes.appWraper,
          state.show ? classes.drawerOpen : classes.drawerClose
        )}
      >
        <div className={defaultStyles} style={style}>
          <div className={classes.justifyRight}>
            {state.showMenu && !state.show ? (
              <IconButton
                className={classes.button}
                onClick={() => setState({ ...state, show: !state.show })}
              >
                <MenuIcon />
              </IconButton>
            ) : null}
            <h2>{title}</h2>
          </div>
          <div>{profile}</div>
        </div>
        <div className={classes.content}>{children}</div>
      </div>
    </div>
  );
};

AppDrawerView.defaultProps = {
  showMenu: false,
  show: false
};

AppDrawerView.propTypes = {
  /**
   * AppBar title isRequired
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,

  /**
   * AppBar profile
   */
  profile: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * Show menu drawer
   */
  showMenu: PropTypes.bool,

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
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),

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

export default AppDrawerView;
