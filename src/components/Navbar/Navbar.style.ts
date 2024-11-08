import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme: Theme) => ({
  navbarContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: theme.spacing(7),
  },
  login: {
    cursor: "pointer",
  },
}));
