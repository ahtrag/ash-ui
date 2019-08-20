import React from "react";
import { globalStyles } from "../utils/styles";
import { createUseStyles } from "react-jss";

const useGlobalStyles = createUseStyles(globalStyles);

const Test = props => {
  const styles = useGlobalStyles();

  return <div className={styles.posRelative} />;
};

export default Test;
