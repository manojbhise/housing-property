import React from "react";
import { useFormikContext } from "formik";
import { useStyles } from "./LoginModal.style";
import EditIcon from "@mui/icons-material/Edit";
import ErrorLabel from "../../ErrorLabel/ErrorLabel";
import { TextField, Typography } from "@mui/material";
import content from "../../../../mocks/LoginModal/loginmodal-mock.json";
import {
  AuthenticationProps,
  FieldTitlesState,
  InitialFormValues,
  IsFieldState,
} from "./LoginModal-Interface";

const Authentication = ({ isField, setIsField }: AuthenticationProps) => {
  const { classes } = useStyles();
  const { fieldTitles } = content.data;
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

  const isToggleField = {
    isEmail: isField.email && !fieldError.email && values.email,
    isPhone:
      isField.phoneNumber && !fieldError.phoneNumber && values.phoneNumber,
  };

  const toggleEmailField = () => {
    setIsField({
      ...isField,
      email: !isField.email,
      password: !isField.password,
    });
  };
  const togglePhoneField = () => {
    setIsField({
      ...isField,
      otp: !isField.otp,
      phoneNumber: !isField.phoneNumber,
    });
  };

  React.useEffect(() => {
    if (isSubmitting) {
      if (isToggleField.isEmail) {
        toggleEmailField();
      } else if (isToggleField.isPhone) {
        togglePhoneField();
      }
    }
  }, [isSubmitting]);

  const showSubTitle = (field: string) => {
    const subTitle = fieldTitles[`${field}_subTitle` as keyof FieldTitlesState];
    const showSubTitle = isField[field as keyof IsFieldState] && subTitle;
    if (showSubTitle) {
      return (
        <Typography key={field} className={classes.subTitle}>
          {subTitle}
        </Typography>
      );
    }
  };

  return (
    <React.Fragment>
      {Object.keys(isField).map((field) => showSubTitle(field))}
      {isField.password ? (
        <React.Fragment>
          <Typography className={classes.showEmail}>
            Your Password for
            <Typography className={classes.highlightEmail}>
              {values.email}
            </Typography>
            <EditIcon
              fontSize="small"
              className={classes.editIcon}
              onClick={() => {
                toggleEmailField();
                setSubmitting(false);
              }}
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
          <Typography className={classes.forgotPass}>
            Forgot Password
          </Typography>
        </React.Fragment>
      ) : isField.email ? (
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
      ) : isField.otp ? (
        <React.Fragment>
          <Typography className={classes.title}>
            {values.phoneNumber}
            <EditIcon
              fontSize="small"
              className={classes.editIcon}
              onClick={() => {
                togglePhoneField();
                setSubmitting(false);
              }}
            />
          </Typography>
          <Typography>Enter your 4 digit OTP</Typography>
        </React.Fragment>
      ) : (
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
      )}
    </React.Fragment>
  );
};

export default Authentication;
