import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChatHeader from "./ChatHeader";

const SingleChats = () => {
  const [user, setUser] = useState([]);

  const id = useParams().id;

  console.log(id);
  console.log(user);

  useEffect(() => {
    fetch(`http://localhost:5000/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, [id]);

  return (
    <div className="bg-violet-100">
      <ChatHeader user={user}></ChatHeader>
    </div>
  );
};

export default SingleChats;
