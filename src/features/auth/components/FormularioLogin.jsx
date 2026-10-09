const FormularioLogin = () => {
  return (
    <form className="space-y-4">
      <h2 className="text-2xl font-bold text-center">Iniciar sesión</h2>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Correo electrónico</span>
        </label>
        <input type="email" className="input input-bordered w-full" placeholder="correo@ejemplo.com" />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Contraseña</span>
        </label>
        <input type="password" className="input input-bordered w-full" placeholder="********" />
      </div>
      <button type="submit" className="btn btn-primary w-full">Ingresar</button>
    </form>
  );
};

export default FormularioLogin;
