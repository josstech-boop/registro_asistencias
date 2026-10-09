const FormularioRecuperacion = () => {
  return (
    <form className="space-y-4">
      <h2 className="text-2xl font-bold text-center">Recuperar contraseña</h2>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Correo electrónico</span>
        </label>
        <input type="email" className="input input-bordered w-full" placeholder="correo@ejemplo.com" />
      </div>
      <button type="submit" className="btn btn-warning w-full">Enviar enlace</button>
    </form>
  );
};

export default FormularioRecuperacion;
