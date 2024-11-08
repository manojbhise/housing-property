import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme: Theme) => ({
  propertyContainer: {
    backgroundColor: "black",
    height: "90vh",
    fontSize: theme.spacing(2),
  },
}));
