const PanelDocente = () => {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Panel docente</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="stat bg-base-200 rounded-box">
          <div className="stat-title">Alumnos</div>
          <div className="stat-value">120</div>
        </div>
        <div className="stat bg-base-200 rounded-box">
          <div className="stat-title">Asistencias</div>
          <div className="stat-value">92%</div>
        </div>
        <div className="stat bg-base-200 rounded-box">
          <div className="stat-title">Faltas</div>
          <div className="stat-value">8</div>
        </div>
      </div>
    </section>
  );
};

export default PanelDocente;
