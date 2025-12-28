import * as Yup from "yup";

// Define the structure of your form data
export interface OCT12InputValidationRulesEx3Type {
  nm: string;
  ag: string | number; // age starts as string from input, becomes number via Yup
}

const OCT12InputValidationRulesEx3: Yup.ObjectSchema<OCT12InputValidationRulesEx3Type> =
  Yup.object().shape({
    nm: Yup.string()
      .required("username is required")
      .min(5, "username must have min 5 character")
      .max(10, "username have max 10 characters"),
    ag: Yup.number()
      .typeError("Age must be a number") // Ensures user enters digits
      .required("Age is required")
      .positive("Age can not be negative")
      .max(20, "Age can be max 20"),
  });

export default OCT12InputValidationRulesEx3;
