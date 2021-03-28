import React from "react";
import { FieldProps } from "formik";

import { Option } from "@interfaces/SelectTypes";
import FormikFieldWrapper from "../FormikFieldWrapper";
import Select from "@elements/Select";

interface Props extends FieldProps {
  options: Option[];
}

const FormikSelect: React.FC<Props> = ({
  field,
  form: { touched, errors, setFieldValue },
  options,
  ...props
}) => {
  return (
    <FormikFieldWrapper
      helperText={
        touched[field.name] && errors[field.name] && errors[field.name]
      }
    >
      <Select
        options={options}
        {...field}
        {...props}
        onChange={(value: Option["value"]) => setFieldValue(field.name, value)}
      />
    </FormikFieldWrapper>
  );
};

export default FormikSelect;
