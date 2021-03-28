import React, { Component } from "react";
import { FieldProps } from "formik";

import FormikFieldWrapper from "../FormikFieldWrapper";
import Input from "@elements/Input";

interface Props extends FieldProps {
  startIcon?: Component;
}

const FormikField: React.FC<Props> = ({
  field,
  form: { touched, errors },
  startIcon,
  ...props
}) => {
  return (
    <FormikFieldWrapper
      helperText={
        touched[field.name] && errors[field.name] && errors[field.name]
      }
    >
      <Input startIcon={startIcon} {...field} {...props} />
    </FormikFieldWrapper>
  );
};

export default FormikField;
