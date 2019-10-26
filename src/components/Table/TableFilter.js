import React, { useState } from "react";
import PropTypes from "prop-types";
import Select from "../Select";
import TextInput from "../TextInput";
import FilterVariantIcon from "mdi-react/FilterVariantIcon";
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
  tableFilterCell: {
    paddingTop: 8,
    paddingBottom: 8
  }
});

const TableFilter = props => {
  const {
    columns,
    classNameOptions,
    styleOptions,
    actionColumn,
    disableFilter,
    onFilter
  } = props;
  const classes = useStyles();
  const [filterValue, setFilterValue] = useState({});

  const renderSelectOption = column => {
    return Object.entries(column.option).map(option => ({
      label: option[1],
      value: option[1]
    }));
  };

  const handleChange = (e, column) => {
    const { value } = e.target;
    const { key, type } = column;

    if (
      (type !== "select" && value) ||
      (type === "select" && value.length > 0)
    ) {
      const tempFilterValue = {
        ...filterValue,
        [key]: value
      };
      setFilterValue(tempFilterValue);
      return onFilter(tempFilterValue);
    }

    const tempFilterValue = { ...filterValue };
    delete tempFilterValue[key];
    setFilterValue(tempFilterValue);
    return onFilter(tempFilterValue);
  };

  return disableFilter ? null : (
    <tr>
      {actionColumn ? (
        <td
          className={renderClassName(
            classes.tableCell,
            classes.tableActionCell,
            classNameOptions && classNameOptions.root
          )}
          style={renderStyle(styleOptions && styleOptions.root)}
        ></td>
      ) : null}
      {columns.map((column, index) => (
        <td
          key={`filter-${column.key}-${index}`}
          className={renderClassName(
            classes.tableCell,
            classes.tableFilterCell,
            classNameOptions && classNameOptions.root
          )}
          style={renderStyle(styleOptions && styleOptions.root)}
        >
          {column.filter !== false ? (
            column.type === "select" ? (
              <Select
                options={renderSelectOption(column)}
                value={
                  filterValue[column.key] !== undefined
                    ? filterValue[column.key]
                    : ""
                }
                extra={{ start: <FilterVariantIcon /> }}
                placeholder="Filter"
                onChange={e => handleChange(e, column)}
                className={renderClassName(
                  classNameOptions && classNameOptions.input
                )}
                style={renderStyle(styleOptions && styleOptions.input)}
                noMargin
                fullWidth
                multiple
                checkbox
              />
            ) : (
              <TextInput
                type={column.type === "numeric" ? "number" : "text"}
                placeholder="Filter"
                extra={{ start: <FilterVariantIcon /> }}
                value={
                  filterValue[column.key] !== undefined
                    ? filterValue[column.key]
                    : ""
                }
                onChange={e => handleChange(e, column)}
                className={renderClassName(
                  classNameOptions && classNameOptions.input
                )}
                style={renderStyle(styleOptions && styleOptions.input)}
                noMargin
                fullWidth
              />
            )
          ) : null}
        </td>
      ))}
    </tr>
  );
};

TableFilter.defaultProps = {
  disableFilter: false
};

TableFilter.propTypes = {
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
  classNameOptions: PropTypes.shape({
    root: PropTypes.string,
    input: PropTypes.string
  }),
  styleOptions: PropTypes.shape({
    root: PropTypes.object,
    input: PropTypes.object
  }),
  actionColumn: PropTypes.bool,
  disableFilter: PropTypes.bool,
  onFilter: PropTypes.func
};

export default TableFilter;
