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
  loginForm: {},
  closeIcon: {
    display: "flex",
    justifyContent: "right",
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
    color: "#696C6A",
    marginTop: theme.spacing(1),
    fontSize: theme.spacing(1.7),
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
    color: "#0078db",
    cursor: "pointer",
  },
  showEmail: {
    display: "flex",
    fontWeight: 100,
    color: "#696C6A",
    alignItems: "center",
    marginTop: theme.spacing(3),
    fontSize: theme.spacing(1.7),
  },
  highlightEmail: {
    color: "#0078db",
    fontWeight: "bold",
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
  },
  passwordField: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  forgotPass: {
    color: "#0078db",
    cursor: "pointer",
    textAlign: "right",
    fontWeight: "bold",
    marginTop: theme.spacing(1),
  },
}));
