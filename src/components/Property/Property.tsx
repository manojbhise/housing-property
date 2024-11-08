import { Grid2 } from "@mui/material";
import React from "react";
import { useStyles } from "./Property.style";

const Property = () => {
  const { classes } = useStyles();
  return <Grid2 className={classes.propertyContainer}>Property</Grid2>;
};

export default Property;
