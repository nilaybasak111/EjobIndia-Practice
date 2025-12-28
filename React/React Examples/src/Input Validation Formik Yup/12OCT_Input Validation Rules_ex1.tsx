import * as Yup from "yup";

// Define the shape of the data (should match your FormValues in the component)
interface OCT12InputValidationRulesEx1Type {
  username: string;
  age: number | string | null; // Use string if the input value starts as an empty string
  dept: string;
}

// Apply ObjectSchema with the interface
const OCT12InputValidationRulesEx1: Yup.ObjectSchema<OCT12InputValidationRulesEx1Type> =
  Yup.object().shape({
    username: Yup.string()
      .required("Name is required")
      .min(5, "minimum 5 characters needed")
      .max(10, "max 10 characters allowed"),

    age: Yup.number()
      .typeError("Age must be a number") // Ensures valid number entry
      .required("age can not be empty")
      .positive("age must be positive")
      .max(20, "age above 20 not allowed"),

    dept: Yup.string()
      .required("dept can not be empty")
      .length(10, "dept should be of 10 characters") // Ensures Length is exact 10 characterss
      .lowercase()
      .strict(),
  });

export default OCT12InputValidationRulesEx1;
