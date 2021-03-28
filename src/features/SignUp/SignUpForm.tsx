import React from "react";
import { Formik, Form, Field, FormikHelpers, FieldProps } from "formik";
import * as yup from "yup";
import styled, { keyframes } from "styled-components";

import { ReactComponent as Mail } from "@assets/icons/mail.svg";
import { ReactComponent as Lock } from "@assets/icons/lock.svg";
import Button from "@elements/Button";
import FormikInput from "@shared/formik-items/FormikInput";
import Checkbox from "@elements/Checkbox";
import Radio from "@elements/Radio";
import FormikFieldWrapper from "@shared/formik-items/FormikFieldWrapper";
import { SelectOptions } from "./static-data";
import FormikSelect from "@shared/formik-items/FormikSelect";
import { Values } from "@interfaces/Formik";
import { transparentize } from "polished";

const SignUpForm = () => {
  const initialValues: Values = {
    name: "",
    email: "",
    password: "",
    country: "",
    gender: null,
    policy: false,
  };

  const validationSchema = yup.object({
    name: yup
      .string()
      .matches(/^[a-z]+$/i, "Please enter a valid name")
      .required("Please enter a name"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Please enter an email address"),
    password: yup
      .string()
      .min(6, "Password must contain at least 6 symbols")
      .required("Please enter a password"),
    country: yup.string().required("You must select your country"),
    gender: yup.string().nullable().required("You must select the gender"),
    policy: yup
      .mixed()
      .oneOf([true], "You must accept the policies")
      .required("You must accept the policies"),
  });

  const onSubmit = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 10000);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, touched, isValid, errors }) => (
          <Form>
            <Field
              type="text"
              name="name"
              placeholder="Enter your name"
              autocomplete="off"
              component={FormikInput}
            />

            <Field
              type="email"
              name="email"
              placeholder="Email"
              autocomplete="off"
              component={FormikInput}
              startIcon={<Mail />}
            />

            <Field
              type="password"
              name="password"
              placeholder="Password"
              autocomplete="off"
              component={FormikInput}
              startIcon={<Lock />}
            />

            <Field
              type="text"
              name="country"
              placeholder="Country"
              autocomplete="off"
              options={SelectOptions}
              component={FormikSelect}
            />

            <FormikFieldWrapper
              helperText={errors.gender && touched.gender && errors.gender}
            >
              <Field
                type="radio"
                label="Male"
                name="gender"
                value="male"
                component={({ field, form, ...props }: FieldProps) => (
                  <Radio {...field} {...props} label="Female" />
                )}
              />

              <Field
                type="radio"
                label="Female"
                name="gender"
                value="female"
                component={({ field, form, ...props }: FieldProps) => (
                  <Radio {...field} {...props} label="Female" />
                )}
              />
            </FormikFieldWrapper>

            <FormikFieldWrapper
              helperText={errors.policy && touched.policy && errors.policy}
            >
              <Field
                type="checkbox"
                name="policy"
                component={({ field, form, ...props }: FieldProps) => (
                  <Checkbox
                    {...field}
                    {...props}
                    label={
                      <span>
                        Accept{" "}
                        <Link href="#" target="_blank">
                          terms
                        </Link>{" "}
                        and{" "}
                        <Link href="#" target="_blank">
                          conditions
                        </Link>
                      </span>
                    }
                  />
                )}
              />
            </FormikFieldWrapper>

            <ButtonHolder>
              <Button
                type="submit"
                disabled={
                  !Object.keys(touched).length || !isValid || isSubmitting
                }
              >
                {isSubmitting ? <Loader /> : "Sign up"}
              </Button>
            </ButtonHolder>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;

const ButtonHolder = styled.div`
  margin-top: 40px;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.blue};
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  animation: ${rotate} 0.5s linear infinite;
  margin: 0 auto;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => transparentize(0.5, theme.colors.white)};
  border-top: 3px solid ${({ theme }) => theme.colors.white};
`;
