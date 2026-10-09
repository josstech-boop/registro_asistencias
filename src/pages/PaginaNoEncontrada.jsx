import { Link } from 'react-router-dom';

const PaginaNoEncontrada = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-6">
      <h1 className="text-5xl font-bold">404</h1>
      <h2 className="text-2xl font-semibold">Página no encontrada</h2>
      <p className="text-base-content/70">La ruta solicitada no existe o fue movida.</p>
      <Link to="/" className="btn btn-primary">Volver al inicio</Link>
    </div>
  );
};

export default PaginaNoEncontrada;
