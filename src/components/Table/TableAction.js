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
    columns,
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

  const handleClickAction = (row, action) => {
    const oldData = { ...row };
    delete oldData.tableData;

    columns.map(column => {
      if (oldData[column.key] && column.type === "select") {
        try {
          oldData[column.key] = JSON.parse(
            Object.keys(column.option).find(
              key => column.option[key] === oldData[column.key]
            )
          );
        } catch (error) {
          oldData[column.key] = Object.keys(column.option).find(
            key => column.option[key] === oldData[column.key]
          );
        }
      }

      return null;
    });

    action.onClick(oldData);
  };

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
                      href={
                        action.href
                          ? typeof action.href === "string"
                            ? action.href
                            : () => action.href(row)
                          : null
                      }
                      onClick={
                        action.onClick
                          ? () => handleClickAction(row, action)
                          : null
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
                      href={
                        action.href
                          ? typeof action.href === "string"
                            ? action.href
                            : () => action.href(row)
                          : null
                      }
                      onClick={
                        action.onClick
                          ? () => handleClickAction(row, action)
                          : null
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
      href: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      icon: PropTypes.element,
      label: PropTypes.any,
      onClick: PropTypes.func
    })
  ),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["numeric", "select", "date", "file"]),
      option: PropTypes.object,
      format: PropTypes.string,
      children: PropTypes.arrayOf(PropTypes.string),
      render: PropTypes.func,
      currency: PropTypes.shape({
        countryId: PropTypes.string.isRequired,
        currencyCode: PropTypes.string.isRequired
      }),
      styleOptions: PropTypes.shape({
        head: PropTypes.object,
        cell: PropTypes.object
      })
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
