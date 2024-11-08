import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme: Theme) => ({
  modalContainer: {
    margin: "auto",
    display: "flex",
    alignItems: "center",
    width: theme.spacing(53),
  },
  loginContainer: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(3),
    borderRadius: theme.spacing(1.1),
  },
  closeIcon: {
    display: "flex",
    justifyContent: "right",
    paddingRight: theme.spacing(2),
  },
  loginForm: {
    padding: `0 ${theme.spacing(3)}`,
  },
  backSpaceIcon: {
    cursor: "pointer",
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
    borderRadius: theme.spacing(1.1),
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
    borderRadius: theme.spacing(1.1),
  },
  emailIcon: {
    marginRight: theme.spacing(1),
  },
}));
