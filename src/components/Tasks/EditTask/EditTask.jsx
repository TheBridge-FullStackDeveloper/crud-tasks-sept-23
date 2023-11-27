import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalState";

const EditTask = () => {
  const { _id } = useParams();
  const { getById, task, updateById } = useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    getById(_id);
  }, []);

  useEffect(() => {
    setTitle(task.title);
  }, [task.title]);
  const handleSubmit = () => {
    updateById(_id, { title });
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title || ""}
        name="title"
      />
      <button type="submit">Edit task</button>
    </form>
  );
};

export default EditTask;
