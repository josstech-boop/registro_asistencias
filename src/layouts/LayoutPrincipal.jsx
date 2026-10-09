const LayoutPrincipal = ({ children, title = 'Sistema de Asistencia' }) => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <div className="navbar bg-base-200 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">{title}</a>
        </div>
        <div className="flex-none gap-2">
          <button className="btn btn-ghost btn-circle">🔔</button>
          <button className="btn btn-primary">Cerrar sesión</button>
        </div>
      </div>

      <div className="flex">
        <aside className="hidden w-72 bg-base-200 p-4 lg:block">
          <ul className="menu menu-md rounded-box bg-base-200">
            <li><a>Panel</a></li>
            <li><a>Usuarios</a></li>
            <li><a>Grados</a></li>
            <li><a>Asignaciones</a></li>
            <li><a>Reportes</a></li>
          </ul>
        </aside>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default LayoutPrincipal;
