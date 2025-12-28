import { useFormik, type FormikHelpers } from "formik";
import OCT12InputValidationRulesEx1 from "./12OCT_Input Validation Rules_ex1";

// Define an interface for your form values
interface OCT12InputValidationEx1Type {
  username: string;
  age: string | number;
  dept: string;
}

const OCT12InputValidationEx1 = () => {
  // Pass the interface to useFormik
  const formik = useFormik<OCT12InputValidationEx1Type>({
    initialValues: {
      username: "",
      age: "",
      dept: "",
    },
    validationSchema: OCT12InputValidationRulesEx1,
    onSubmit: (
      values: OCT12InputValidationEx1Type,
      { resetForm }: FormikHelpers<OCT12InputValidationEx1Type>
    ) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        ENTER NAME :
        <input
          type="text"
          name="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} // Added handleBlur for better 'touched' behavior
          value={formik.values.username} // To Reset the form after submission
        />
        <span style={{ color: "red", fontStyle: "italic" }}>
          {formik.touched.username && formik.errors.username
            ? formik.errors.username
            : null}
        </span>
        <br />
        ENTER AGE :
        <input
          type="number"
          name="age"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age ?? ""}
        />
        <span style={{ color: "red", fontStyle: "italic" }}>
          {formik.touched.age && formik.errors.age ? formik.errors.age : null}
        </span>
        <br />
        ENTER DEPARTMENT :
        <input
          type="text"
          name="dept"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.dept}
        />
        <span style={{ color: "red", fontStyle: "italic" }}>
          {formik.touched.dept && formik.errors.dept
            ? formik.errors.dept
            : null}
        </span>
        <br />
        <input type="submit" value="REGISTER" />
        <input type="button" value="RESET" onClick={formik.handleReset} />
      </form>
    </>
  );
};

export default OCT12InputValidationEx1;
