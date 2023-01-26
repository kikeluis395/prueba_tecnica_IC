import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const GlobalDataContext = createContext();
const GlobalDataProvider = ({ children }) => {
  const [TasksComplete, setTasksComplete] = useState([]);
  const [TasksIncomplete, setTasksIncomplete] = useState([]);
  const [form, setForm] = useState({
    description: "",
    name: "",
    complete: 0,
  });
  const endpoint = "http://localhost:8000/api";
  const navigate = useNavigate();

  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = async () => {
    const response = await axios.get(`${endpoint}/tasks`);
    setTasksComplete(response.data.complete);
    setTasksIncomplete(response.data.incomplete);
    console.log(response.data);
  };

  const deleteTask = async (id) => {
    await axios.delete(`${endpoint}/task/${id}`);
    getAllTasks();
  };

  const store = async (e) => {
    e.preventDefault();
    await axios.post(endpoint + "/task", { ...form });
    getAllTasks();
    navigate("/");
  };

  const update = async (id, e) => {
    e.preventDefault();
    await axios.put(`${endpoint + "/task/"}${id}`, { ...form });
    navigate("/");
    getAllTasks();
  };

  const handleTask = async (id, e) => {
    await axios.put(`${endpoint + "/task/"}${id}`, {
      complete: e.target.checked,
    });
    getAllTasks();
  };

  const getProductById = async (id) => {
    const response = await axios.get(`${endpoint + "/task/"}${id}`);
    setForm(response.data);
  };

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  

  const data = {
    TasksComplete,
    TasksIncomplete,
    deleteTask,
    handleTask,
    store,
    form,
    setForm,
    update,
    getProductById,
    handleForm,
  };
  return (
    <GlobalDataContext.Provider value={data}>
      {children}
    </GlobalDataContext.Provider>
  );
};
export { GlobalDataProvider };
export default GlobalDataContext;
