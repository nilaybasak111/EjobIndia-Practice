import { useState } from "react";
import { useFormik, type FormikHelpers } from "formik";
import OCT12InputValidationRulesEx2 from "./12OCT_Input Validation Rules_ex2";

// 1. Define the shape of your form data
interface OCT12InputValidationEx2Type {
  username: string;
  age: string | number;
  email: string;
  loc: string;
  gen: string;
  edu: string[];
  job: string[];
}

export default function OCT12InputValidationEx2() {
  // 2. State type for the info object
  const [info, setInfo] = useState<Partial<OCT12InputValidationEx2Type>>({});

  // 3. Pass the interface to useFormik
  const formik = useFormik<OCT12InputValidationEx2Type>({
    initialValues: {
      username: "",
      age: "",
      email: "",
      loc: "",
      gen: "",
      edu: [],
      job: [],
    },
    validationSchema: OCT12InputValidationRulesEx2,
    onSubmit: (
      values: OCT12InputValidationEx2Type,
      action: FormikHelpers<OCT12InputValidationEx2Type>
    ) => {
      console.log(values);
      setInfo(values);
      action.resetForm();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        ENTER USERNAME :
        <input
          type="text"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <span style={{ color: "red" }}>
          {formik.errors.username && formik.touched.username
            ? formik.errors.username
            : null}
        </span>
        <br />
        ENTER AGE :
        <input
          type="number"
          name="age"
          onChange={formik.handleChange}
          value={formik.values.age}
        />
        <span style={{ color: "red" }}>
          {formik.errors.age && formik.touched.age ? formik.errors.age : null}
        </span>
        <br />
        ENTER EMAIL :
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <span style={{ color: "red" }}>
          {formik.errors.email && formik.touched.email
            ? formik.errors.email
            : null}
        </span>
        <br />
        SELECT LOCATION :
        <select
          name="loc"
          onChange={formik.handleChange}
          value={formik.values.loc}
        >
          <option value="">select location</option>
          <option value="shimla">shimla</option>
          <option value="kolkata">kolkata</option>
          <option value="howrah">howrah</option>
          <option value="new jalpaiguri">njp</option>
        </select>
        <span style={{ color: "red" }}>
          {formik.errors.loc && formik.touched.loc ? formik.errors.loc : null}
        </span>
        <br />
        SELECT GENDER :
        <input
          type="radio"
          name="gen"
          value="Male"
          onChange={formik.handleChange}
          checked={formik.values.gen === "Male"}
        />
        M
        <input
          type="radio"
          name="gen"
          value="Female"
          onChange={formik.handleChange}
          checked={formik.values.gen === "Female"}
        />
        F
        <span style={{ color: "red" }}>
          {formik.errors.gen && formik.touched.gen ? formik.errors.gen : null}
        </span>
        <br />
        SELECT EDUCATION :
        <input
          type="checkbox"
          name="edu"
          value="graduate"
          onChange={formik.handleChange}
          checked={formik.values.edu.includes("graduate")}
        />
        Graduate
        <input
          type="checkbox"
          name="edu"
          value="postgraduate"
          onChange={formik.handleChange}
          checked={formik.values.edu.includes("postgraduate")}
        />
        Postgraduate
        <input
          type="checkbox"
          name="edu"
          value="mca"
          onChange={formik.handleChange}
          checked={formik.values.edu.includes("mca")}
        />
        MCA
        <input
          type="checkbox"
          name="edu"
          value="btech"
          onChange={formik.handleChange}
          checked={formik.values.edu.includes("btech")}
        />
        B.Tech
        <span style={{ color: "red" }}>
          {formik.errors.edu && formik.touched.edu ? formik.errors.edu : null}
        </span>
        <br />
        SELECT JOB ROLE:
        <select
          name="job"
          onChange={formik.handleChange}
          multiple
          value={formik.values.job}
        >
          <option value="faculty">faculty</option>
          <option value="developer">developer</option>
          <option value="doctor">doctor</option>
          <option value="sales">sales</option>
        </select>
        <span style={{ color: "red" }}>
          {formik.errors.job && formik.touched.job ? formik.errors.job : null}
        </span>
        <br />
        <input type="submit" value="REGISTER" />
        <input type="button" value="RESET" onClick={() => formik.resetForm()} />
      </form>
    </>
  );
}
