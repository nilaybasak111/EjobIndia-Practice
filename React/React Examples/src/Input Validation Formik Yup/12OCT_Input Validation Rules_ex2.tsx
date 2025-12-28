import * as Yup from "yup";

// 1. Define the interface (Same as the one in your component)
interface OCT12InputValidationRulesEx2Type {
  username: string;
  age: string | number;
  email: string;
  loc: string;
  gen: string;
  edu: string[];
  job: string[];
}

// 2. Apply the interface to the ObjectSchema
const OCT12InputValidationRulesEx2: Yup.ObjectSchema<OCT12InputValidationRulesEx2Type> =
  Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),

    age: Yup.number()
      .required("Age is required")
      .typeError("Age must be a number") // Ensures user enters a number
      .positive("Age should be positive"),

    email: Yup.string().required("Email is required").email("Email is invalid"),

    loc: Yup.string().required("Location is required"),

    gen: Yup.string().required("Gender is required"),

    // 3. Typed arrays for Education and Job
    edu: Yup.array()
      .of(Yup.string().required())
      .min(1, "Select at least one education qualification")
      .required("Education is required"),

    job: Yup.array()
      .of(Yup.string().required())
      .min(1, "Select at least one job role")
      .required("Job role is required"),
  });

export default OCT12InputValidationRulesEx2;
