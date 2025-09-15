import React, { useState } from "react";

interface AUG30HooksEx2Type {
  name: string;
  designation: string;
  location: string;
}

const AUG30HooksEx2 = () => {
  const [info, setInfo] = useState<AUG30HooksEx2Type[]>([]);
  const [fields, setFields] = useState<AUG30HooksEx2Type>({
    name: "",
    designation: "",
    location: "",
  });

  // Updating the Values
  const valueUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  // Displaying the Values
  const showDetails = () => {
    setInfo([...info, fields]);
    setFields({ name: "", designation: "", location: "" });
  };

  // Deleteing the Values
  const deleteDetails = (index: number) => {
    info.splice(index, 1);
    setInfo([...info]);
  };

  return (
    <>
      Enter Name:
      <input
        type="text"
        name="name"
        value={fields.name}
        onChange={valueUpdate}
      />
      <br />
      Enter Designation:
      <input
        type="text"
        name="designation"
        value={fields.designation}
        onChange={valueUpdate}
      />
      <br />
      Enter Location:
      <input
        type="text"
        name="location"
        value={fields.location}
        onChange={valueUpdate}
      />
      <br />
      <br />
      <input type="button" value="SHOW" onClick={showDetails} />
      <br />
      <br />
      {info.length > 0 ? (
        <table
          style={{
            border: "1px solid #444",
            borderCollapse: "collapse",
            width: "70%",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid #444",
                  padding: "8px",
                  background: "#f4f4f4",
                }}
              >
                Sl.No
              </th>
              <th
                style={{
                  border: "1px solid #444",
                  padding: "8px",
                  background: "#f4f4f4",
                }}
              >
                Name
              </th>
              <th
                style={{
                  border: "1px solid #444",
                  padding: "8px",
                  background: "#f4f4f4",
                }}
              >
                Designation
              </th>
              <th
                style={{
                  border: "1px solid #444",
                  padding: "8px",
                  background: "#f4f4f4",
                }}
              >
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            {info.map((value, index) => {
              return (
                <tr key={index}>
                  <td style={{ border: "1px solid #444", padding: "8px" }}>
                    {index + 1}
                  </td>
                  <td style={{ border: "1px solid #444", padding: "8px" }}>
                    {value.name}
                  </td>
                  <td style={{ border: "1px solid #444", padding: "8px" }}>
                    {value.designation}
                  </td>
                  <td style={{ border: "1px solid #444", padding: "8px" }}>
                    {value.location}
                  </td>
                  <td style={{ border: "1px solid #444", padding: "8px" }}>
                    <input
                      type="button"
                      value="DELETE"
                      onClick={() => deleteDetails(index)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h3>No Employee Data Found...!</h3>
      )}
    </>
  );
};

export default AUG30HooksEx2;
