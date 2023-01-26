import React, { useContext } from "react";
import GlobalDataProvider from "../context/GlobalContext";

const CreateTask = () => {
  const { store, form, handleForm } = useContext(GlobalDataProvider);
  return (
    <div>
      <h3>Crear Tarea</h3>
      <form onSubmit={store}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            value={form.name}
            name="name"
            onChange={handleForm}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripcion</label>
          <input
            value={form.description}
            onChange={handleForm}
            name="description"
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Crear
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
