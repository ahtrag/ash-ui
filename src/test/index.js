import React, { useState } from "react";
import { globalStyles } from "../utils/styles";
import { createUseStyles } from "react-jss";
import AppDrawer from "../components/AppDrawer";
import AccountIcon from "mdi-react/AccountIcon";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import Divider from "../components/Divider";
import Drawer from "../components/Drawer";
import IconButton from "../components/IconButton";
import Tooltip from "../components/Tooltip";
import Grid from "../components/Grid";
import Modal from "../components/Modal";
import Switch from "../components/Switch";
import Select from "../components/Select";
import TextInput from "../components/TextInput";

const useGlobalStyles = createUseStyles(globalStyles);

const menus = [
  {
    label: "Menu 1",
    icon: <AccountIcon />,
    to: "/",
    divider: false
  }
];

const useStyles = createUseStyles({
  menuStyle: {
    color: "black"
  },
  classNameTest: {
    background: "black"
  }
});

const Test = props => {
  const styles = useGlobalStyles();
  const classes = useStyles();
  const [state, setState] = useState({
    buttonTest: true,
    isOpen: false,
    show: false,
    active: "Val1",
    optionValue: Number(),
    inputValue: ""
  });
  console.log(state);
  return (
    <div className={styles.posRelative}>
      <AppDrawer
        title="Title"
        profile="Profile"
        menuList={{ data: menus, className: classes.menuStyle }}
        showMenu
        className={classes.classNameTest}
        style={{ background: "black" }}
      >
        {state.isOpen ? (
          <Drawer
            isOpen={state.isOpen}
            onClose={() => setState({ ...state, isOpen: !state.isOpen })}
            // menuList={menus}
          />
        ) : null}
        <Grid type="container" style={{ flexDirection: "column" }}>
          <Grid type="item">
            <Avatar
              src="https://cdn.shopify.com/s/files/1/0051/4802/products/stickers_octocat_600x600.png?v=1520903827"
              alt="Octocato"
              size={50}
              className={classes.classNameTest}
              style={{ background: "white" }}
            >
              <AccountIcon />
            </Avatar>
          </Grid>

          <Grid type="item">
            <Button
              variant="contained"
              onClick={() => setState({ ...state, isOpen: !state.isOpen })}
              className={classes.classNameTest}
              style={{ background: "white", color: "black" }}
            >
              Drawer
            </Button>
          </Grid>

          <Grid type="item">
            <Button
              variant="contained"
              onClick={() => setState({ ...state, show: !state.show })}
              className={classes.classNameTest}
              style={{ background: "white", color: "black" }}
            >
              Modal
            </Button>
            {state.show ? (
              <Modal
                show={state.show}
                header={<AccountIcon />}
                footer={
                  <Button
                    onClick={() => setState({ ...state, show: !state.show })}
                  >
                    Close
                  </Button>
                }
                close={() => setState({ ...state, show: !state.show })}
              >
                Body
              </Modal>
            ) : null}
          </Grid>

          <Grid type="item">
            <Tooltip position="top" label="icon button">
              <IconButton>
                <AccountIcon />
              </IconButton>
            </Tooltip>
          </Grid>

          <Grid type="item">
            <Switch
              switchValues={["Val1", "Val2"]}
              active={state.active}
              onSwitch={value => setState({ ...state, active: value })}
              className={classes.classNameTest}
              style={{ background: "white" }}
            />
          </Grid>

          <div style={{ direction: "row" }}>
            <Divider variant="middle" />
          </div>

          <Grid type="item">
            <Select
              variant="default"
              value={state.optionValue}
              onChange={e =>
                setState({ ...state, optionValue: e.target.value })
              }
              label="Select"
              id="Select"
              extra={{
                start: <AccountIcon color="black" />,
                end: <AccountIcon />
              }}
              className={classes.classNameTest}
              style={{ background: "white", color: "black" }}
            >
              <option value={0} />
              <option value={1}>Option 1</option>
              <option value={2}>Option 2</option>
              <option value={3}>Option 3</option>
            </Select>
          </Grid>

          <Grid type="item">
            <TextInput
              label="Label"
              value={state.inputValue}
              id="Input"
              name="Input"
              placeholder="Input"
              variant="outlined"
              type="text"
              extra={{ start: <AccountIcon /> }}
              onChange={e => setState({ ...state, inputValue: e.target.value })}
            />
          </Grid>
        </Grid>
      </AppDrawer>
    </div>
  );
};

export default Test;
