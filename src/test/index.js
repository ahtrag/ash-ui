import React from "react";
import AppDrawer from "../components/AppDrawer";
import { globalStyles } from "../utils/styles";
import { createUseStyles } from "react-jss";
import MenuIcon from "mdi-react/MenuIcon";

const useGlobalStyles = createUseStyles(globalStyles);

const menuList = [
  {
    icon: <MenuIcon />,
    label: "Yui",
    to: "/",
    divider: true
  }
];

const Test = props => {
  const styles = useGlobalStyles();
  return (
    <div className={styles.posRelative}>
      <AppDrawer title="Title" profile="Profile" showMenu menuList={menuList}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </AppDrawer>
    </div>
  );
};

export default Test;
