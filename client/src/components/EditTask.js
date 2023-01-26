import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import GlobalDataProvider from "../context/GlobalContext";

const EditTask = () => {
  const { getProductById, form, update, handleForm } =
    useContext(GlobalDataProvider);
  const { id } = useParams();

  useEffect(() => {
    getProductById(id);
  }, []);
  return (
    <div>
      <h3>Editar tarea</h3>
      <form onSubmit={(e) => update(id, e)}>
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
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default EditTask;
