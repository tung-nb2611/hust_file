import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "&.MuiTableRow-hover:hover": {
      backgroundColor: "#F2F9FF",
    },
    "&.Mui-selected": {
      backgroundColor: "#F2F9FF",
    },
  },
  cell: {
    fontSize: "inherit",
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineHeight: "18px",
    color: "inherit",
    height: "52px",
    paddingBottom: "0",
    paddingTop: "0",
    borderBottom: "1px solid #E8EAEB",
    "&.cellClick": {
      cursor: "pointer",
      "&.cellClick": {
        cursor: "pointer",
        "&.cellClick": {
          cursor: "pointer",
        },
      },
    },
  },
  cellReport: {
    fontSize: "inherit",
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineHeight: "18px",
    color: "inherit",
    height: "44px",
    paddingBottom: "0",
    paddingTop: "0",
    paddingRight: "0",
    paddingLeft: "0",
    borderBottom: "1px solid #E8EAEB",
    "&.cellClick": {
      cursor: "pointer",
      "&.cellClick": {
        cursor: "pointer",
        "&.cellClick": {
          cursor: "pointer",
        },
      },
    },
  },
  cellCheckbox: {
    padding: "0 0 0 16px",
  },
  btnDrillDown: {
    marginRight: "4px",
    "& svg": {
      width: "13px",
      height: "13px",
    },
  },
  loadingDrillDown: {
    marginRight: "4px",
    padding: 9.5,
  },
}));

export default useStyles;
