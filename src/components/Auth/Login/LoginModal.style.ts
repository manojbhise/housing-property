import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme: Theme) => ({
  modalContainer: {
    margin: "auto",
    display: "flex",
    alignItems: "center",
    width: theme.spacing(51),
  },
  loginContainer: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    padding: theme.spacing(2.5),
    borderRadius: theme.spacing(1),
  },
  loginForm: {
    // border: "1px solid",
  },
  closeIcon: {
    display: "flex",
    // border: "1px solid",
    justifyContent: "right",
  },
  backSpaceIcon: {
    cursor: "pointer",
    // border: "1px solid",
    marginBottom: theme.spacing(1),
  },
  title: {
    fontWeight: 700,
    fontSize: theme.spacing(3),
  },
  subTitle: {
    fontWeight: 100,
    color: "#696c6a",
    fontSize: theme.spacing(1.5),
  },
  textField: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
  continueBtn: {
    width: "100%",
    color: "#FFFFFF",
    fontWeight: 700,
    letterSpacing: 0.2,
    textTransform: "none",
    backgroundColor: "#0078DB",
    height: theme.spacing(6.5),
    fontSize: theme.spacing(2),
    marginTop: theme.spacing(10),
    borderRadius: theme.spacing(0.6),
  },
  or: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  continueWithEmail: {
    width: "100%",
    color: "#000000",
    fontWeight: 700,
    textTransform: "none",
    height: theme.spacing(6.5),
    fontSize: theme.spacing(2),
    backgroundColor: "#FFFFFF",
    border: "1px solid #AAAAAA",
    borderRadius: theme.spacing(0.6),
  },
  emailIcon: {
    marginRight: theme.spacing(1),
  },
  editIcon: {
    color: "blue",
    cursor: "pointer",
  },
  showEmail: {
    display: "flex",
    fontWeight: 100,
    color: "#696c6a",
    alignItems: "center",
    marginTop: theme.spacing(3),
    fontSize: theme.spacing(1.5),
    // border: "1px solid",
  },
  highlightEmail: {
    color: "blue",
    fontWeight: "bold",
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
  },
  passwordField: {
    width: "100%",
    marginTop: theme.spacing(0.5),
  },
}));
