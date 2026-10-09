const Cargador = ({ label = 'Cargando...' }) => {
  return (
    <div className="flex items-center justify-center gap-3 py-4">
      <span className="loading loading-spinner loading-md"></span>
      <span>{label}</span>
    </div>
  );
};

export default Cargador;
