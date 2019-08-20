import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  divider: {
    display: "flex"
  }
});

const DividerView = props => {
  const { className, styles } = props;
  const styles = useStyles();
  const defaultStyles = [styles.divider, className]
    .filter(value => Boolean(value))
    .join(" ");

  return <div />;
};

const propTypes = {};

DividerView.propTypes = propTypes;

export default DividerView;
