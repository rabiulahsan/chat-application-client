import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useFilteredUsesrs = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const filteredUsers = users.filter((usr) => usr.email !== user?.email);
  return [filteredUsers];
};

export default useFilteredUsesrs;
