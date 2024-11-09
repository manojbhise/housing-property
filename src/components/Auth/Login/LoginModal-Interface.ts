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

export interface IsFieldState {
  otp: boolean;
  email: boolean;
  password: boolean;
  phoneNumber: boolean;
}

export interface FieldTitlesState {
  otp: string;
  email: string;
  password: string;
  phoneNumber: string;
  email_subTitle: string;
  phoneNumber_subTitle: string;
}

export type ShowEmailField = (
  setTouched: FormikHelpers<InitialFormValues>["setTouched"],
  setValues: FormikHelpers<InitialFormValues>["setValues"],
  setSubmitting: FormikHelpers<InitialFormValues>["setSubmitting"]
) => void;

export interface AuthenticationProps {
  isField: IsFieldState;
  setIsField: React.Dispatch<React.SetStateAction<IsFieldState>>;
}
