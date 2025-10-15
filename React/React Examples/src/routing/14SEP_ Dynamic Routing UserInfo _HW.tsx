import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface UserType {
  userId: number;
  name: string;
  email: string;
  department: string;
}

const SEP14DynamicRoutingUserInfoHW = () => {
  const [users, setUsers] = useState<UserType[]>(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  const [fields, setFields] = useState<UserType>({
    userId: 0,
    name: "",
    email: "",
    department: "",
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const valueUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const addUser = () => {
    if (
      !fields.name.trim() ||
      !fields.email.trim() ||
      !fields.department.trim()
    ) {
      alert("All fields (Name, Email, Department) are required!");
      return;
    }

    const newUser = { ...fields, userId: users.length + 1 };
    setUsers([...users, newUser]);

    setFields({
      userId: 0,
      name: "",
      email: "",
      department: "",
    });
  };

  // ✅ Inline Styles
  const styles = {
    container: {
      maxWidth: "700px",
      margin: "30px auto",
      padding: "20px",
      background: "#fdfdfd",
      border: "1px solid #ddd",
      borderRadius: "10px",
      boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      textAlign: "center" as const,
      marginBottom: "20px",
      color: "#333",
    },
    form: {
      display: "flex",
      flexDirection: "column" as const,
      gap: "12px",
      marginBottom: "20px",
    },
    label: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    input: {
      padding: "6px 10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      flex: 1,
      marginLeft: "10px",
    },
    button: {
      padding: "8px 12px",
      border: "none",
      borderRadius: "5px",
      background: "#0078d7",
      color: "white",
      cursor: "pointer",
      transition: "background 0.2s",
      width: "120px",
      alignSelf: "center",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse" as const,
      marginTop: "15px",
    },
    th: {
      border: "1px solid #ddd",
      padding: "8px",
      background: "#f5f5f5",
      color: "#333",
      textAlign: "center" as const,
    },
    td: {
      border: "1px solid #ddd",
      padding: "8px",
      textAlign: "center" as const,
    },
    viewBtn: {
      textDecoration: "none",
      padding: "6px 10px",
      borderRadius: "5px",
      fontSize: "0.9rem",
      background: "#28a745",
      color: "white",
    },
    deleteBtn: {
      textDecoration: "none",
      padding: "6px 10px",
      borderRadius: "5px",
      fontSize: "0.9rem",
      background: "#dc3545",
      color: "white",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>User Management</h2>

      <div style={styles.form}>
        <label style={styles.label}>
          Name:
          <input
            type="text"
            name="name"
            value={fields.name}
            onChange={valueUpdate}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={valueUpdate}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Department:
          <input
            type="text"
            name="department"
            value={fields.department}
            onChange={valueUpdate}
            style={styles.input}
          />
        </label>
        <button
          style={styles.button}
          onMouseOver={(e) => (e.currentTarget.style.background = "#005fa3")}
          onMouseOut={(e) => (e.currentTarget.style.background = "#0078d7")}
          onClick={addUser}
        >
          Add User
        </button>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Department</th>
            <th style={styles.th} colSpan={2}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId}>
              <td style={styles.td}>{user.name}</td>
              <td style={styles.td}>{user.email}</td>
              <td style={styles.td}>{user.department}</td>
              <td style={styles.td}>
                <Link
                  style={styles.viewBtn}
                  to={`/details/${user.userId}`}
                  target="_blank"
                >
                  View
                </Link>
              </td>
              <td style={styles.td}>
                <Link
                  style={styles.deleteBtn}
                  to={`/delete/${user.userId}`}
                  target="_blank"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SEP14DynamicRoutingUserInfoHW;
