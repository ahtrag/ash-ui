import React, { useState } from "react";
import PropTypes from "prop-types";
import TableAction from "./TableAction";
import Select from "../Select/SelectView";
import TextInput from "../TextInput/TextInputView";
import Text from "../Text";
import format from "date-fns/format";
import { renderClassName, renderStyle } from "../../utils/constants";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  tableCell: {
    padding: "16px 40px 16px 16px",
    borderBottom: "1px solid #DDDDDD",
    color: "gray",
    whiteSpace: "nowrap"
  },
  inactiveRow: {
    opacity: 0.2,
    cursor: "default"
  }
});

const TableRow = props => {
  const {
    row,
    columns,
    actions,
    activeRow,
    editable,
    tableAction,
    classNameOptions,
    styleOptions,
    onAction
  } = props;
  const classes = useStyles();
  const [inputValue, setInputValue] = useState({});
  const [actionType, setActionType] = useState("");

  const handleChange = (key, value) => {
    try {
      setInputValue({
        ...inputValue,
        [key]: JSON.parse(value)
      });
    } catch (error) {
      setInputValue({
        ...inputValue,
        [key]: value
      });
    }
  };

  const handleAction = (row, type) => {
    setActionType(type);
    onAction(row);
  };

  const handleCancelAction = () => {
    setActionType("");
    onAction("");
  };

  const handleSaveAction = (row = null) => {
    if (row) {
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

      switch (actionType) {
        case "edit":
          editable.onUpdate(oldData, { ...oldData, ...inputValue });
          break;
        case "delete":
          editable.onDelete(oldData);
          break;
        default:
          break;
      }

      return handleCancelAction();
    }

    editable.onAdd(inputValue);
    return handleCancelAction();
  };

  const renderTextInputValue = (row = null, column) => {
    if (
      inputValue[column.key] ||
      inputValue[column.key] === "" ||
      inputValue[column.key] === 0
    ) {
      return inputValue[column.key];
    } else if (row) {
      return column.type === "date"
        ? format(new Date(row[column.key]), "yyyy-MM-dd")
        : row[column.key];
    }
    return "";
  };

  const renderSelectValue = (row = null, column) => {
    if (inputValue[column.key] !== undefined) {
      if (typeof inputValue[column.key] === "string") {
        return inputValue[column.key];
      }
      return JSON.stringify(inputValue[column.key]);
    } else if (row) {
      return Object.keys(column.option).find(
        option => column.option[option] === row[column.key]
      );
    }
    return "";
  };

  return (
    <tr
      className={renderClassName(
        row && activeRow && row.tableData !== activeRow && classes.inactiveRow
      )}
    >
      <TableAction
        {...tableAction}
        row={row}
        columns={columns}
        actions={actions}
        active={row ? row.tableData === activeRow : activeRow === "new"}
        editable={
          editable && (editable.onUpdate || editable.onDelete) ? editable : null
        }
        onAction={handleAction}
        onSave={handleSaveAction}
        onCancel={handleCancelAction}
        disable={
          row &&
          Boolean(activeRow) &&
          (row.tableData !== activeRow || activeRow === "new")
        }
      />
      {row && row.tableData !== activeRow ? (
        columns.map((column, index) => (
          <td
            key={`${row.tableData}-${column.key}-${index}`}
            className={renderClassName(
              classes.tableCell,
              classNameOptions && classNameOptions.root
            )}
            style={renderStyle(styleOptions && styleOptions.root)}
          >
            {column.render ? (
              column.render(row)
            ) : (
              <Text
                variant="caption"
                align={column.type === "numeric" ? "right" : "left"}
                display="block"
                color="currentColor"
                noMargin
              >
                {row[column.key] && column.type === "date"
                  ? format(
                      new Date(row[column.key]),
                      column.format ? column.format : "dd MMMM yyyy"
                    )
                  : column.type === "numeric" && column.currency
                  ? Number(row[column.key]).toLocaleString(
                      column.currency.countryId,
                      {
                        style: "currency",
                        currency: column.currency.currencyCode
                      }
                    )
                  : row[column.key]}
              </Text>
            )}
          </td>
        ))
      ) : activeRow ? (
        actionType === "delete" ? (
          <td
            className={renderClassName(
              classes.tableCell,
              classNameOptions && classNameOptions.root
            )}
            style={renderStyle(styleOptions && styleOptions.root)}
            colSpan={columns.length}
          >
            Are you sure want to delete this data?
          </td>
        ) : actionType === "edit" || activeRow === "new" ? (
          columns.map((column, index) => (
            <td
              key={
                row
                  ? `${row.tableData}-${column.key}-${index}`
                  : `new-${column.key}-${index}`
              }
              className={renderClassName(
                classes.tableCell,
                classNameOptions && classNameOptions.root
              )}
              style={renderStyle(styleOptions && styleOptions.root)}
            >
              {column.readonly ? (
                column.render ? (
                  column.render(row)
                ) : (
                  <Text
                    variant="caption"
                    align={column.type === "numeric" ? "right" : "left"}
                    display="block"
                    color="currentColor"
                    noMargin
                  >
                    {row[column.key] && column.type === "date"
                      ? format(
                          new Date(row[column.key]),
                          column.format ? column.format : "dd MMMM yyyy"
                        )
                      : column.type === "numeric" && column.currency
                      ? Number(row[column.key]).toLocaleString(
                          column.currency.countryId,
                          {
                            style: "currency",
                            currency: column.currency.currencyCode
                          }
                        )
                      : row[column.key]}
                  </Text>
                )
              ) : column.type === "select" ? (
                <Select
                  options={Object.entries(column.option).map(option => ({
                    value: option[0],
                    label: option[1]
                  }))}
                  placeholder={column.label}
                  value={renderSelectValue(row, column)}
                  onChange={e => handleChange(column.key, e.target.value)}
                  className={renderClassName(
                    classNameOptions && classNameOptions.input
                  )}
                  style={renderStyle(styleOptions && styleOptions.input)}
                  noMargin
                  fullWidth
                />
              ) : (
                <TextInput
                  type={
                    column.type === "numeric"
                      ? "number"
                      : column.type === "file"
                      ? "file"
                      : column.type === "date"
                      ? "date"
                      : "text"
                  }
                  value={renderTextInputValue(row, column)}
                  placeholder={column.label}
                  onChange={e => handleChange(column.key, e.target.value)}
                  className={renderClassName(
                    classNameOptions && classNameOptions.input
                  )}
                  style={renderStyle(styleOptions && styleOptions.input)}
                  noMargin
                  fullWidth
                />
              )}
            </td>
          ))
        ) : null
      ) : null}
    </tr>
  );
};

TableRow.defaultProps = {
  activeRow: false
};

TableRow.propTypes = {
  row: PropTypes.object,
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
  activeRow: PropTypes.string,
  editable: PropTypes.shape({
    onAdd: PropTypes.func,
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func
  }),
  tableAction: PropTypes.shape({
    classNameOptions: PropTypes.shape({
      root: PropTypes.string,
      action: PropTypes.string
    }),
    styleOptions: PropTypes.shape({
      root: PropTypes.object,
      action: PropTypes.object
    })
  }),
  classNameOptions: PropTypes.shape({
    root: PropTypes.string,
    input: PropTypes.string
  }),
  styleOptions: PropTypes.shape({
    root: PropTypes.object,
    input: PropTypes.object
  }),
  onAction: PropTypes.func
};

export default TableRow;
