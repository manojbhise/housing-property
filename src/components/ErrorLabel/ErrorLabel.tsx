import React from "react";
import { Typography } from "@mui/material";
import { useStyles } from "./ErrorLabel.style";
import ErrorIcon from "@mui/icons-material/Error";
import { ErrorLabelProps } from "./ErrorLabel-Interface";

const ErrorLabel = ({ errorLabel }: ErrorLabelProps) => {
  const { classes } = useStyles();
  return (
    <Typography className={classes.label}>
      <ErrorIcon className={classes.errorIcon} />
      {errorLabel}
    </Typography>
  );
};

export default ErrorLabel;
