import { Link } from 'react-router-dom';

const PaginaNoAutorizado = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-6">
      <h1 className="text-5xl font-bold text-error">403</h1>
      <h2 className="text-2xl font-semibold">Acceso denegado</h2>
      <p className="text-base-content/70">No tienes permisos para acceder a esta sección.</p>
      <Link to="/" className="btn btn-primary">Volver al inicio</Link>
    </div>
  );
};

export default PaginaNoAutorizado;
