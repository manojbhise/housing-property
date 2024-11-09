import React from "react";
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
import { useStyles } from "./LoginModal.style";
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {
  InitialFormValues,
  LoginModalProps,
  ShowEmailField,
} from "./LoginModal-Interface";
import Authentication from "./Authentication";

const LoginModal = ({ open, onClose }: LoginModalProps) => {
  const { classes } = useStyles();
  const [isEmailField, setIsEmailField] = React.useState(false);

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
        const { email, password } = this.parent;
        if (!email && !password) return false;
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

  const handleSubmit = (values: InitialFormValues) => {
    console.log(values);
  };

  const onModalClose = () => {
    onClose();
    setIsEmailField(false);
  };

  const showEmailField: ShowEmailField = (
    setTouched,
    setValues,
    setSubmitting
  ) => {
    setSubmitting(false);
    setValues(initialFormValues);
    setIsEmailField(!isEmailField);
    setTouched({ phoneNumber: false, email: false, password: false });
  };

  return (
    <Modal
      open={open}
      onClose={onModalClose}
      className={classes.modalContainer}
    >
      <Box className={classes.loginContainer}>
        <Formik
          validateOnBlur
          validateOnChange
          onSubmit={handleSubmit}
          initialValues={initialFormValues}
          validationSchema={validationSchema}
          enableReinitialize
        >
          {({ values, setTouched, isSubmitting, setValues, setSubmitting }) => (
            <Form className={classes.loginForm}>
              <Grid2 className={classes.closeIcon}>
                <IconButton
                  aria-label="close"
                  sx={{ padding: 0.3 }}
                  onClick={onModalClose}
                >
                  <CloseIcon />
                </IconButton>
              </Grid2>
              {isEmailField && isSubmitting ? (
                <Typography className={classes.title}>
                  Enter Password
                </Typography>
              ) : (
                <React.Fragment>
                  <KeyboardBackspaceIcon
                    className={classes.backSpaceIcon}
                    onClick={() =>
                      showEmailField(setTouched, setValues, setSubmitting)
                    }
                  />
                  <Typography className={classes.title}>
                    Login / Register
                  </Typography>
                </React.Fragment>
              )}

              <Authentication isEmailField={isEmailField} />
              <Button
                type="submit"
                className={classes.continueBtn}
                disabled={isEmailField ? !values.email : !values.phoneNumber}
              >
                Continue
              </Button>
              {!isEmailField && (
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
