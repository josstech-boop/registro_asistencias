const PaginaUsuarios = () => {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gestión de usuarios</h1>
        <button className="btn btn-primary">Nuevo usuario</button>
      </div>
      <div className="bg-base-200 p-4 rounded-box">Tabla de usuarios</div>
    </section>
  );
};

export default PaginaUsuarios;
