import { FormikHelpers } from "formik";

export interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

export interface InitialFormValues {
  email: string;
  password: string;
  phoneNumber: string;
}

export type SetTouched = FormikHelpers<InitialFormValues>["setTouched"];

export type ShowEmailField = (
  setTouched: FormikHelpers<InitialFormValues>["setTouched"],
  setValues: FormikHelpers<InitialFormValues>["setValues"],
  setSubmitting: FormikHelpers<InitialFormValues>["setSubmitting"]
) => void;

export interface AuthenticationProps {
  isEmailField: boolean;
}
