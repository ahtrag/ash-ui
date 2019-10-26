import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import IconButton from "../IconButton";
import Text from "../Text";
import ChevronLeftIcon from "mdi-react/ChevronLeftIcon";
import ChevronRightIcon from "mdi-react/ChevronRightIcon";
import { createUseStyles } from "react-jss";
import { color, breakpoints } from "../../utils/theme";
import { offset, renderClassName } from "../../utils/constants";

const useStyles = createUseStyles({
  root: {
    flex: 1,
    display: "flex",
    overflow: "hidden"
  },
  tab: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    overflowX: "scroll",
    display: "inline-block",
    position: "relative",
    whiteSpace: "nowrap",
    scrollBehavior: "smooth",
    marginBottom: -17,
    paddingBottom: 0,
    scrollbarWidth: "none"
  },
  tabTouchable: {
    marginBottom: -10,
    paddingBottom: 10
  },
  tabLocator: {
    position: "absolute",
    bottom: 0,
    height: 2,
    backgroundColor: props => (props.color ? props.color : color.primary),
    transition: "width 0.3s ease-in-out, left 0.3s ease-in-out"
  },
  tabLocatorTouchable: {
    bottom: 10
  },
  tabButtonContainer: {
    display: "flex",
    justifyContent: props => (props.centered ? "center" : "")
  },
  button: {
    minWidth: 160,
    minHeight: 50
  },
  active: {
    color: props => (props.color ? props.color : color.primary)
  },
  scrollButton: {
    [breakpoints.down("sm")]: {
      display: "none"
    }
  },
  inactiveButton: {
    opacity: 0,
    visibility: "hidden"
  },
  iconLeft: {
    marginLeft: 8
  },
  iconRight: {
    marginRight: 8
  }
});

const TabView = props => {
  const {
    items,
    value,
    color,
    classNameOptions,
    styleOptions,
    onSelect,
    centered,
    disableScrollButton
  } = props;
  const classes = useStyles({ color, centered });
  const [elementOffset, setElementOffset] = useState({
    left: 0,
    width: 0
  });
  const [scrollButton, setScrollButton] = useState({
    left: false,
    right: false
  });
  const buttonRef = useRef(null);
  const tabRef = useRef(null);
  const isTouchable =
    tabRef.current &&
    tabRef.current.offsetHeight - tabRef.current.clientHeight === 0;

  const handleScrollTab = () => {
    if (tabRef.current.scrollLeft === 0) {
      setScrollButton({
        left: false,
        right: true
      });
    } else if (
      Math.ceil(tabRef.current.scrollLeft + tabRef.current.offsetWidth) >=
      tabRef.current.scrollWidth
    ) {
      setScrollButton({
        left: true,
        right: false
      });
    } else {
      setScrollButton({
        left: true,
        right: true
      });
    }
  };

  const handleScrollLeft = () => {
    tabRef.current.scrollLeft -=
      (tabRef.current.scrollWidth - tabRef.current.offsetWidth) /
      ((tabRef.current.scrollWidth - tabRef.current.offsetWidth) /
        tabRef.current.offsetWidth);
  };

  const handleScrollRight = () => {
    tabRef.current.scrollLeft +=
      (tabRef.current.scrollWidth - tabRef.current.offsetWidth) /
      ((tabRef.current.scrollWidth - tabRef.current.offsetWidth) /
        tabRef.current.offsetWidth);
  };

  useEffect(() => {
    if (tabRef.current.scrollWidth > tabRef.current.offsetWidth) {
      setScrollButton({
        left: false,
        right: true
      });
    }
  }, [tabRef]);

  useEffect(() => {
    if (buttonRef.current && tabRef.current) {
      setElementOffset({
        left: buttonRef.current.offsetLeft,
        width: offset(buttonRef.current).width
      });

      if (
        tabRef.current.scrollLeft + tabRef.current.offsetWidth <
        buttonRef.current.offsetLeft + buttonRef.current.offsetWidth
      ) {
        handleScrollRight();
      } else if (tabRef.current.scrollLeft > buttonRef.current.offsetLeft) {
        handleScrollLeft();
      }
    }
  }, [tabRef, buttonRef, value]);

  return (
    <div
      className={renderClassName(
        classes.root,
        classNameOptions && classNameOptions.root
      )}
      style={styleOptions && styleOptions.root}
    >
      {!disableScrollButton ? (
        <IconButton
          className={renderClassName(
            classes.scrollButton,
            scrollButton.left ? null : classes.inactiveButton
          )}
          onClick={handleScrollLeft}
        >
          <ChevronLeftIcon />
        </IconButton>
      ) : null}
      <div
        className={renderClassName(
          classes.tab,
          isTouchable && classes.tabTouchable,
          classNameOptions && classNameOptions.tab
        )}
        style={styleOptions && styleOptions.tab}
        ref={tabRef}
        onScroll={handleScrollTab}
      >
        <div
          className={renderClassName(
            classes.tabLocator,
            isTouchable && classes.tabLocatorTouchable
          )}
          style={{ left: elementOffset.left, width: elementOffset.width }}
        />
        <div className={classes.tabButtonContainer}>
          {items.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              ref={value === index ? buttonRef : null}
            >
              <Button
                type="button"
                variant="text"
                onClick={() => onSelect(index)}
                className={renderClassName(
                  classes.button,
                  value === index && classes.active,
                  classNameOptions && classNameOptions.item
                )}
                style={styleOptions && styleOptions.item}
                rounded={false}
              >
                {item.icon && item.iconPosition !== "right" ? item.icon : null}
                <Text
                  variant="paragraph"
                  className={
                    item.icon
                      ? item.iconPosition === "right"
                        ? classes.iconRight
                        : classes.iconLeft
                      : null
                  }
                  noMargin
                >
                  {item.label}
                </Text>
                {item.icon && item.iconPosition === "right" ? item.icon : null}
              </Button>
            </div>
          ))}
        </div>
      </div>
      {!disableScrollButton ? (
        <IconButton
          className={renderClassName(
            classes.scrollButton,
            scrollButton.right ? null : classes.inactiveButton
          )}
          onClick={handleScrollRight}
        >
          <ChevronRightIcon />
        </IconButton>
      ) : null}
    </div>
  );
};

TabView.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      icon: PropTypes.element,
      iconPosition: PropTypes.oneOf(["left", "right"])
    })
  ).isRequired,
  value: PropTypes.any.isRequired,
  color: PropTypes.string,
  classNameOptions: PropTypes.shape({
    root: PropTypes.string,
    tab: PropTypes.string,
    item: PropTypes.string
  }),
  styleOptions: PropTypes.shape({
    root: PropTypes.object,
    tab: PropTypes.object,
    item: PropTypes.object
  }),
  onSelect: PropTypes.func,
  centered: PropTypes.bool,
  disableScrollButton: PropTypes.bool
};

export default TabView;
