import { useFormik, type FormikHelpers } from "formik";
import OCT12InputValidationRulesEx3 from "./12OCT_Input Validation Rules_ex3";

interface OCT12InputValidationEx3Type {
  nm: string;
  ag: string;
}

const OCT12InputValidationEx3 = () => {
  const formik = useFormik<OCT12InputValidationEx3Type>({
    initialValues: {
      nm: "",
      ag: "",
    },
    validationSchema: OCT12InputValidationRulesEx3,
    onSubmit: (
      values: OCT12InputValidationEx3Type,
      actions: FormikHelpers<OCT12InputValidationEx3Type>
    ) => {
      console.log(values);
      actions.resetForm();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label>
          ENTER NAME :
          <input
            type="text"
            name="nm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} // Added for better 'touched' behavior
            value={formik.values.nm}
          />
        </label>
        <span style={{ color: "red" }}>
          {formik.errors.nm && formik.touched.nm ? formik.errors.nm : null}
        </span>
        <br />

        <label>
          ENTER AGE :
          <input
            type="text"
            name="ag"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.ag}
          />
        </label>
        <span style={{ color: "red" }}>
          {formik.errors.ag && formik.touched.ag ? formik.errors.ag : null}
        </span>
        <br />

        <input type="submit" value="REGISTER" />
        <input type="button" value="RESET" onClick={() => formik.resetForm()} />
      </form>
    </>
  );
};

export default OCT12InputValidationEx3;
