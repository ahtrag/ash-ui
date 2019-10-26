import React from "react";
import PropTypes from "prop-types";
import Select from "../Select";
import IconButton from "../IconButton";
import Text from "../Text";
import PageFirstIcon from "mdi-react/PageFirstIcon";
import ChevronLeftIcon from "mdi-react/ChevronLeftIcon";
import ChevronRightIcon from "mdi-react/ChevronRightIcon";
import PageLastIcon from "mdi-react/PageLastIcon";
import { createUseStyles } from "react-jss";
import { renderClassName, renderStyle } from "../../utils/constants";

const paginationNumber = [10, 25, 50, 100];

const useStyles = createUseStyles({
  footer: {
    padding: 16,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexWrap: "wrap"
  },
  footerRowsText: {
    marginRight: 12
  }
});

const TableFooter = props => {
  const {
    page,
    visibleData,
    totalData,
    classNameOptions,
    styleOptions,
    disablePagination,
    onChangePage,
    onChangeVisibleData
  } = props;
  const classes = useStyles();

  const handleChangeVisibleData = e => {
    onChangePage(0);
    onChangeVisibleData(e.target.value);
  };

  return disablePagination ? null : (
    <div
      className={renderClassName(
        classes.footer,
        classNameOptions && classNameOptions.root
      )}
      style={renderStyle(styleOptions && styleOptions.root)}
    >
      <Text variant="caption" className={classes.footerRowsText} noMargin>
        Rows
      </Text>
      <Select
        options={paginationNumber.map(number => ({
          value: number,
          label: number
        }))}
        value={visibleData}
        onChange={handleChangeVisibleData}
        width={50}
        className={renderClassName(classNameOptions && classNameOptions.input)}
        style={renderStyle(styleOptions && styleOptions.input)}
        noMargin
      />
      <IconButton
        onClick={() => onChangePage(0)}
        disable={page === 0}
        className={renderClassName(classNameOptions && classNameOptions.action)}
        style={renderStyle(styleOptions && styleOptions.action)}
      >
        <PageFirstIcon />
      </IconButton>
      <IconButton
        onClick={() => onChangePage(page - 1)}
        disable={page === 0}
        className={renderClassName(classNameOptions && classNameOptions.action)}
        style={renderStyle(styleOptions && styleOptions.action)}
      >
        <ChevronLeftIcon />
      </IconButton>
      <Text variant="caption" className={classes.footerRowsText} noMargin>
        {totalData > visibleData * (page + 1)
          ? `${visibleData * page + 1}-${visibleData *
              (page + 1)} of ${totalData}`
          : totalData === 0
          ? "0-0 of 0"
          : `${visibleData * page + 1}-${totalData} of ${totalData}`}
      </Text>
      <IconButton
        onClick={() => onChangePage(page + 1)}
        disable={page === Math.floor(totalData / visibleData)}
        className={renderClassName(classNameOptions && classNameOptions.action)}
        style={renderStyle(styleOptions && styleOptions.action)}
      >
        <ChevronRightIcon />
      </IconButton>
      <IconButton
        onClick={() => onChangePage(Math.floor(totalData / visibleData))}
        disable={page === Math.floor(totalData / visibleData)}
        className={renderClassName(classNameOptions && classNameOptions.action)}
        style={renderStyle(styleOptions && styleOptions.action)}
      >
        <PageLastIcon />
      </IconButton>
    </div>
  );
};

TableFooter.defaultProps = {
  disablePagination: false
};

TableFooter.propTypes = {
  page: PropTypes.number,
  visibleData: PropTypes.number,
  totalData: PropTypes.number,
  classNameOptions: PropTypes.shape({
    root: PropTypes.string,
    input: PropTypes.string,
    action: PropTypes.string
  }),
  styleOptions: PropTypes.shape({
    root: PropTypes.object,
    input: PropTypes.object,
    action: PropTypes.object
  }),
  disablePagination: PropTypes.bool,
  onChangePage: PropTypes.func,
  onChangeVisibleData: PropTypes.func
};

export default TableFooter;
