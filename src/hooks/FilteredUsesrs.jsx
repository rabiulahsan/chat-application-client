import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const FilteredUsesrs = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://skill-builder-server.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const filteredUsers = users.filter((usr) => usr.email !== user.email);
  return [filteredUsers];
};

export default FilteredUsesrs;
