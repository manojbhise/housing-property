import { FormikHelpers } from "formik";

export interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

export interface InitialFormValues {
  email: string;
  phoneNumber: string;
}

export type SetTouched = FormikHelpers<InitialFormValues>["setTouched"];

export type ShowEmailField = (
  setTouched: FormikHelpers<InitialFormValues>["setTouched"],
  setValues: FormikHelpers<InitialFormValues>["setValues"]
) => void;
