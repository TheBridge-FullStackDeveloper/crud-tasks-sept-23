import React, { createContext, useReducer } from "react";
import axios from "axios";
import AppReducer from "./AppReducer";

const initialState = {
  tasks: [],
  task: {},
};

const API_URL = "http://localhost:8080/tasks";

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getTasks = async () => {
    try {
      const res = await axios.get(API_URL);
      dispatch({
        type: "GET_TASKS",
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (_id) => {
    try {
      const res = await axios.delete(`${API_URL}/${_id}`);
      // getTasks()
      if (res.data) {
        dispatch({
          type: "DELETE_TASK",
          payload: _id,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  const addTask = async (task) => {
    try {
      const res = await axios.post(API_URL, task);
      dispatch({
        type: "ADD_TASK",
        payload: res.data.task,
      });
      // getTasks()
    } catch (error) {
      console.error(error);
    }
  };

  const getById = async (_id) => {
    try {
      const res = await axios.get(`${API_URL}/${_id}`);
      dispatch({
        type: "GET_TASK_BY_ID",
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const updateById = async (_id, task) => {
    try {
      await axios.put(`${API_URL}/update/${_id}`, task);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        task: state.task,
        getTasks,
        deleteTask,
        addTask,
        getById,
        updateById
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
