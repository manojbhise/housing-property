import React from "react";
import { useFormikContext } from "formik";
import { useStyles } from "./LoginModal.style";
import EditIcon from "@mui/icons-material/Edit";
import ErrorLabel from "../../ErrorLabel/ErrorLabel";
import { TextField, Typography } from "@mui/material";
import { AuthenticationProps, InitialFormValues } from "./LoginModal-Interface";

const Authentication = ({ isEmailField }: AuthenticationProps) => {
  const { classes } = useStyles();
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    isSubmitting,
    setSubmitting,
  } = useFormikContext<InitialFormValues>();

  const fieldError = {
    email: touched.email && Boolean(errors.email),
    password: touched.password && Boolean(errors.password),
    phoneNumber: touched.phoneNumber && Boolean(errors.phoneNumber),
  };

  console.log(values, errors, touched);
  console.log("isSubmitting:", isSubmitting);

  return (
    <React.Fragment>
      {isEmailField ? (
        <React.Fragment>
          {!isSubmitting ? (
            <React.Fragment>
              <Typography className={classes.subTitle}>
                Please enter your Email ID/Username
              </Typography>
              <TextField
                name="email"
                label="Email Id/Username"
                onBlur={handleBlur}
                value={values.email}
                onChange={handleChange}
                className={classes.textField}
                error={fieldError.email}
                helperText={
                  fieldError.email ? (
                    <ErrorLabel errorLabel={String(errors.email)} />
                  ) : null
                }
                slotProps={{
                  formHelperText: {
                    sx: { marginLeft: 0 },
                  },
                }}
              />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography className={classes.showEmail}>
                Your Password for
                <Typography className={classes.highlightEmail}>
                  {values.email}
                </Typography>
                <EditIcon
                  fontSize="small"
                  className={classes.editIcon}
                  onClick={() => setSubmitting(false)}
                />
              </Typography>
              <TextField
                name="password"
                label="Password"
                onBlur={handleBlur}
                value={values.password}
                onChange={handleChange}
                error={fieldError.password}
                className={classes.passwordField}
                helperText={
                  fieldError.password ? (
                    <ErrorLabel errorLabel={String(errors.password)} />
                  ) : null
                }
                slotProps={{
                  formHelperText: {
                    sx: { marginLeft: 0 },
                  },
                }}
              />
            </React.Fragment>
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography className={classes.subTitle}>
            Please enter your Phone Number
          </Typography>
          <TextField
            name="phoneNumber"
            label="Phone Number"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.phoneNumber}
            className={classes.textField}
            error={fieldError.phoneNumber}
            helperText={
              fieldError.phoneNumber ? (
                <ErrorLabel errorLabel={String(errors.phoneNumber)} />
              ) : null
            }
            slotProps={{
              formHelperText: {
                sx: { marginLeft: 0 },
              },
            }}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Authentication;
