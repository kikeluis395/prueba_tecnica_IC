import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GlobalDataProvider from "../context/GlobalContext";
import useSearch from "../hooks/useSearch";

const ShowTasks = () => {
  const {
    TasksComplete,
    TasksIncomplete,
    deleteTask,
    handleTask,
    setForm,
  } = useContext(GlobalDataProvider);
  const searchA = useSearch();
  const searchB = useSearch();
  return (
    <div className="container">
      <div className="d-grid gap-2">
        <Link
          to="/create"
          className="btn btn-success btn-lg mt-2 mb-2 text-white"
          onClick={() =>
            setForm({
              name: "",
              description: "",
              complete: 0,
            })
          }
        >
          Crear Tarea
        </Link>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-header">
              <h5>Tareas por hacer</h5>

              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar tarea"
                  onChange={(e) => searchA.setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="card-content">
              <table className="table table-striped">
                <thead className="bg-primary text-white">
                  <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Completado</th>
                    <th>acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {searchA.searchTasks(TasksIncomplete).map((task) => (
                    <tr key={task.id}>
                      <td> {task.name} </td>
                      <td> {task.description} </td>
                      <td>
                        {" "}
                        <input
                          type="checkbox"
                          defaultChecked={task.complete}
                          onChange={(e) => handleTask(task.id, e)}
                        />{" "}
                      </td>
                      <td>
                        <Link
                          to={`/edit/${task.id}`}
                          className="btn btn-warning"
                        >
                          Editar
                        </Link>
                        <button
                          onClick={() => deleteTask(task.id)}
                          className="btn btn-danger"
                        >
                          Borrar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card-header">
              <h5>Tareas completadas</h5>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar tarea"
                  onChange={(e) => searchB.setSearch(e.target.value)}
                />
              </div>{" "}
            </div>
            <div className="card-content">
              <table className="table table-striped">
                <thead className="bg-primary text-white">
                  <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Completado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {searchB.searchTasks(TasksComplete).map((task) => (
                    <tr key={task.id}>
                      <td> {task.name} </td>
                      <td> {task.description} </td>
                      <td>
                        {" "}
                        <input
                          type="checkbox"
                          defaultChecked={task.complete}
                          onChange={(e) => handleTask(task.id, e)}
                        />{" "}
                      </td>
                      <td>
                        <Link
                          to={`/edit/${task.id}`}
                          className="btn btn-warning"
                        >
                          Editar
                        </Link>
                        <button
                          onClick={() => deleteTask(task.id)}
                          className="btn btn-danger"
                        >
                          Borrar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTasks;
