import React from "react";
import {
  Box,
  Button,
  Grid2,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { useStyles } from "./LoginModal.style";
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from "@mui/icons-material/Close";
import ErrorLabel from "../../ErrorLabel/ErrorLabel";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {
  InitialFormValues,
  LoginModalProps,
  ShowEmailField,
} from "./LoginModal-Interface";

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
    phoneNumber: "",
  };

  const handleSubmit = (values: InitialFormValues) => {
    console.log(values);
  };

  const showEmailField: ShowEmailField = (setTouched, setValues) => {
    setValues(initialFormValues);
    setIsEmailField(!isEmailField);
    setTouched({ phoneNumber: false, email: false });
  };

  return (
    <Modal open={open} onClose={onClose} className={classes.modalContainer}>
      <Box className={classes.loginContainer}>
        <Grid2 className={classes.closeIcon}>
          <IconButton aria-label="close" onClick={onClose}>
            <CloseIcon sx={{ padding: 0, margin: 0 }} />
          </IconButton>
        </Grid2>
        <Formik
          validateOnBlur
          validateOnChange
          onSubmit={handleSubmit}
          initialValues={initialFormValues}
          validationSchema={validationSchema}
          enableReinitialize
        >
          {({
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            setTouched,
            setValues,
          }) => (
            <Form>
              <Box className={classes.loginForm}>
                {isEmailField && (
                  <KeyboardBackspaceIcon
                    className={classes.backSpaceIcon}
                    onClick={() => showEmailField(setTouched, setValues)}
                  />
                )}
                <Typography className={classes.title}>
                  Login / Register
                </Typography>
                <Typography className={classes.subTitle}>
                  {isEmailField
                    ? "Please enter your Email ID/Username"
                    : "Please enter your Phone Number"}
                </Typography>
                {isEmailField ? (
                  <TextField
                    name="email"
                    label="Email Id/Username"
                    onBlur={handleBlur}
                    value={values.email}
                    onChange={handleChange}
                    className={classes.textField}
                    error={touched.email && Boolean(errors.email)}
                    helperText={
                      touched.email &&
                      Boolean(errors.email) && (
                        <ErrorLabel errorLabel={String(errors.email)} />
                      )
                    }
                    slotProps={{
                      formHelperText: {
                        sx: { marginLeft: 0 },
                      },
                    }}
                  />
                ) : (
                  <TextField
                    name="phoneNumber"
                    label="Phone Number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phoneNumber}
                    className={classes.textField}
                    error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                    helperText={
                      touched.phoneNumber &&
                      Boolean(errors.phoneNumber) && (
                        <ErrorLabel errorLabel={String(errors.phoneNumber)} />
                      )
                    }
                    slotProps={{
                      formHelperText: {
                        sx: { marginLeft: 0 },
                      },
                    }}
                  />
                )}
                <Button type="submit" className={classes.continueBtn}>
                  Continue
                </Button>
                {!isEmailField && (
                  <Box sx={{ my: 2 }} className={classes.or}>
                    <Box flex={1} height="1px" bgcolor="#A8A9AC" />
                    <Typography variant="body1" sx={{ mx: 2 }}>
                      Or
                    </Typography>
                    <Box flex={1} height="1px" bgcolor="#A8A9AC" />
                  </Box>
                )}
                {!isEmailField && (
                  <Button
                    className={classes.continueWithEmail}
                    onClick={() => showEmailField(setTouched, setValues)}
                  >
                    <EmailIcon className={classes.emailIcon} />
                    Continue with Email/Username
                  </Button>
                )}
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default LoginModal;
