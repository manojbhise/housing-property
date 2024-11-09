import React, { useState } from "react";
import {
  Box,
  Button,
  Grid2,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import Authentication from "./Authentication";
import { useStyles } from "./LoginModal.style";
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from "@mui/icons-material/Close";
import {
  IsFieldState,
  ShowEmailField,
  LoginModalProps,
  FieldTitlesState,
  InitialFormValues,
} from "./LoginModal-Interface";
import content from "../../../../mocks/LoginModal/loginmodal-mock.json";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const LoginModal = ({ open, onClose }: LoginModalProps) => {
  const { classes } = useStyles();
  const { fields, fieldTitles } = content.data;
  const [isField, setIsField] = useState<IsFieldState>(fields);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .test("email-validation", "Email is required", function () {
        const { phoneNumber, email } = this.parent;
        if (!phoneNumber && !email) return false;
        return true;
      }),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .test("password-validation", "Password is required", function () {
        const { password } = this.parent;
        if (isField.password && !password) return false;
        return true;
      }),
    phoneNumber: Yup.string()
      .matches(/^\d+$/, "Phone number must contain only digits")
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
      .test("phoneNumber-validation", "Phone number is required", function () {
        const { phoneNumber, email } = this.parent;
        if (!phoneNumber && !email) return false;
        return true;
      }),
  });

  const initialFormValues: InitialFormValues = {
    email: "",
    password: "",
    phoneNumber: "",
  };

  const showEmailField: ShowEmailField = (
    setTouched,
    setValues,
    setSubmitting
  ) => {
    setSubmitting(false);
    setValues(initialFormValues);
    setIsField({
      ...isField,
      email: !isField.email,
      phoneNumber: !isField.phoneNumber,
    });
    setTouched({ phoneNumber: false, email: false, password: false });
  };

  const handleSubmit = (values: InitialFormValues) => {
    console.log(values);
  };

  return (
    <Modal open={open} onClose={onClose} className={classes.modalContainer}>
      <Box className={classes.loginContainer}>
        <Formik
          validateOnBlur
          validateOnChange
          onSubmit={handleSubmit}
          initialValues={initialFormValues}
          validationSchema={validationSchema}
          enableReinitialize
        >
          {({ setTouched, setValues, setSubmitting }) => (
            <Form className={classes.loginForm}>
              <Grid2 className={classes.closeIcon}>
                <IconButton
                  aria-label="close"
                  onClick={onClose}
                  sx={{ padding: 0.3 }}
                >
                  <CloseIcon />
                </IconButton>
              </Grid2>
              {isField.email && (
                <KeyboardBackspaceIcon
                  className={classes.backSpaceIcon}
                  onClick={() =>
                    showEmailField(setTouched, setValues, setSubmitting)
                  }
                />
              )}
              {Object.keys(isField).map((field) => {
                if (isField[field as keyof IsFieldState]) {
                  return (
                    <Typography key={field} className={classes.title}>
                      {fieldTitles[field as keyof FieldTitlesState]}
                    </Typography>
                  );
                }
              })}
              <Authentication isField={isField} setIsField={setIsField} />
              <Button type="submit" className={classes.continueBtn}>
                Continue
              </Button>
              {isField.phoneNumber && (
                <React.Fragment>
                  <Box sx={{ my: 2 }} className={classes.or}>
                    <Box flex={1} height="1px" bgcolor="#A8A9AC" />
                    <Typography variant="body1" sx={{ mx: 2 }}>
                      Or
                    </Typography>
                    <Box flex={1} height="1px" bgcolor="#A8A9AC" />
                  </Box>
                  <Button
                    className={classes.continueWithEmail}
                    onClick={() =>
                      showEmailField(setTouched, setValues, setSubmitting)
                    }
                  >
                    <EmailIcon className={classes.emailIcon} />
                    Continue with Email/Username
                  </Button>
                </React.Fragment>
              )}
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default LoginModal;
