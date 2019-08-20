import React from "react";
import AppBar from "../components/AppBar";
import { globalStyles } from "../utils/styles";
import { createUseStyles } from "react-jss";

const useGlobalStyles = createUseStyles(globalStyles);

const Test = props => {
  const styles = useGlobalStyles();
  return (
    <div>
      <AppBar title="Title" profile="Profile" showMenu />
    </div>
  );
};

export default Test;
