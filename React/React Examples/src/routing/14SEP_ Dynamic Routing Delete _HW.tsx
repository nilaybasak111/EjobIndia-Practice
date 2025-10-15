import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SEP14DynamicRoutingDeleteHW = () => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      const users: any[] = JSON.parse(localStorage.getItem("users") || "[]");
      const updatedUsers = users.filter(
        (user) => user.userId !== Number(userId)
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      navigate("/");
    }
  }, [userId, navigate]);

  return <div>Deleting user...</div>;
};

export default SEP14DynamicRoutingDeleteHW;
