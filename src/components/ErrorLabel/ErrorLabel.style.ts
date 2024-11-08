import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme: Theme) => ({
  label: {
    display: "flex",
    alignItems: "center",
    fontSize: theme.spacing(1.7),
  },
  errorIcon: {
    height: theme.spacing(2),
  },
}));
