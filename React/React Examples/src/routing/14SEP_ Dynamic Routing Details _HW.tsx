import { useParams } from "react-router-dom";

const SEP14DynamicRoutingDetailsHW = () => {
  const { userId } = useParams<{ userId: string }>();
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find((u: any) => u.userId === Number(userId));
  console.log("this is user ", user);

  if (!user) return <div>User not found!</div>;

  return (
    <div>
      <h2>Details for {user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Department: {user.department}</p>
    </div>
  );
};

export default SEP14DynamicRoutingDetailsHW;
