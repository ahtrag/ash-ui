import React, { Fragment } from "react";
import PropTypes from "prop-types";
import IconButton from "../IconButton";
import Button from "../Button";
import CheckIcon from "mdi-react/CheckIcon";
import CloseIcon from "mdi-react/CloseIcon";
import EditIcon from "mdi-react/EditIcon";
import DeleteIcon from "mdi-react/DeleteIcon";
import { createUseStyles } from "react-jss";
import { renderClassName, renderStyle } from "../../utils/constants";

const useStyles = createUseStyles({
  tableCell: {
    padding: "16px 40px 16px 16px",
    borderBottom: "1px solid #DDDDDD",
    textAlign: "left",
    fontSize: 14,
    color: "gray"
  },
  tableActionCell: {
    padding: 4,
    textAlign: "center",
    width: 48
  },
  actionWrapper: {
    display: "flex",
    alignItems: "center"
  },
  actionButton: {
    color: "rgba(0, 0, 0, 0.56)"
  }
});

const TableAction = props => {
  const {
    row,
    actions,
    active,
    disable,
    classNameOptions,
    styleOptions,
    editable,
    onAction,
    onSave,
    onCancel
  } = props;
  const classes = useStyles();

  return active || editable || actions ? (
    <td
      className={renderClassName(
        classes.tableCell,
        classes.tableActionCell,
        classNameOptions && classNameOptions.root
      )}
    >
      <div className={classes.actionWrapper}>
        {active ? (
          <Fragment>
            <IconButton
              onClick={() => onSave(row)}
              className={renderClassName(
                classes.actionButton,
                classNameOptions && classNameOptions.action
              )}
              style={renderStyle(styleOptions && styleOptions.action)}
              disable={disable}
            >
              <CheckIcon />
            </IconButton>
            <IconButton
              onClick={() => onCancel()}
              className={renderClassName(
                classes.actionButton,
                classNameOptions && classNameOptions.action
              )}
              style={renderStyle(styleOptions && styleOptions.action)}
              disable={disable}
            >
              <CloseIcon />
            </IconButton>
          </Fragment>
        ) : (
          <Fragment>
            {editable && editable.onUpdate ? (
              <IconButton
                onClick={() => onAction(row.tableData, "edit")}
                className={renderClassName(
                  classes.actionButton,
                  classNameOptions && classNameOptions.action
                )}
                style={renderStyle(styleOptions && styleOptions.action)}
                disable={disable}
              >
                <EditIcon />
              </IconButton>
            ) : null}
            {editable && editable.onDelete ? (
              <IconButton
                onClick={() => onAction(row.tableData, "delete")}
                className={renderClassName(
                  classes.actionButton,
                  classNameOptions && classNameOptions.action
                )}
                style={renderStyle(styleOptions && styleOptions.action)}
                disable={disable}
              >
                <DeleteIcon />
              </IconButton>
            ) : null}
            {actions
              ? actions.map((action, index) =>
                  action.component === "Button" ? (
                    <Button
                      key={`${row}${action}${index}`}
                      component={action.href ? "a" : "button"}
                      variant={action.variant}
                      className={renderClassName(
                        classes.actionButton,
                        classNameOptions && classNameOptions.action
                      )}
                      style={renderStyle(styleOptions && styleOptions.action)}
                      href={action.href}
                      onClick={
                        action.onClick ? () => action.onClick(row) : null
                      }
                      disable={disable}
                    >
                      {action.label}
                    </Button>
                  ) : (
                    <IconButton
                      key={`${row}${action}${index}`}
                      component={action.href ? "a" : "button"}
                      className={renderClassName(
                        classes.actionButton,
                        classNameOptions && classNameOptions.action
                      )}
                      style={renderStyle(styleOptions && styleOptions.action)}
                      href={action.href}
                      onClick={
                        action.onClick ? () => action.onClick(row) : null
                      }
                      disable={disable}
                    >
                      {action.icon}
                    </IconButton>
                  )
                )
              : null}
          </Fragment>
        )}
      </div>
    </td>
  ) : null;
};

TableAction.defaultProps = {
  active: false
};

TableAction.propTypes = {
  row: PropTypes.object,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.oneOf(["Button", "IconButton"]),
      variant: PropTypes.oneOf(["contained", "outlined", "text"]),
      href: PropTypes.string,
      icon: PropTypes.element,
      label: PropTypes.any,
      onClick: PropTypes.func
    })
  ),
  active: PropTypes.bool,
  disable: PropTypes.bool,
  classNameOptions: PropTypes.shape({
    root: PropTypes.string,
    action: PropTypes.string
  }),
  styleOptions: PropTypes.shape({
    root: PropTypes.object,
    action: PropTypes.object
  }),
  editable: PropTypes.shape({
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func
  }),
  onAction: PropTypes.func,
  onSave: PropTypes.func,
  onCancel: PropTypes.func
};

export default TableAction;
