const TarjetaResumenAsistencia = ({ title = 'Resumen', value = '0%', subtitle = 'Asistencia' }) => {
  return (
    <div className="card bg-base-200 shadow-sm">
      <div className="card-body">
        <h2 className="card-title text-sm">{title}</h2>
        <p className="text-3xl font-bold">{value}</p>
        <p className="text-xs text-base-content/70">{subtitle}</p>
      </div>
    </div>
  );
};

export default TarjetaResumenAsistencia;
