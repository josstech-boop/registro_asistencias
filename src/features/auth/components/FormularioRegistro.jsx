const FormularioRegistro = () => {
  return (
    <form className="space-y-4">
      <h2 className="text-2xl font-bold text-center">Crear cuenta</h2>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Nombre completo</span>
        </label>
        <input type="text" className="input input-bordered w-full" placeholder="Nombre" />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Correo electrónico</span>
        </label>
        <input type="email" className="input input-bordered w-full" placeholder="correo@ejemplo.com" />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Rol</span>
        </label>
        <select className="select select-bordered w-full">
          <option value="alumno">Alumno</option>
          <option value="docente">Docente</option>
          <option value="admin">Administrador</option>
        </select>
      </div>
      <button type="submit" className="btn btn-secondary w-full">Registrarse</button>
    </form>
  );
};

export default FormularioRegistro;
