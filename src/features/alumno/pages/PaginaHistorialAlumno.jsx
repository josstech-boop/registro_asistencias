const PaginaHistorialAlumno = () => {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Historial personal</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-base-200 p-4 rounded-box">Asistencia total</div>
        <div className="bg-base-200 p-4 rounded-box">Faltas</div>
        <div className="bg-base-200 p-4 rounded-box">Justificaciones</div>
      </div>
      <div className="bg-base-200 p-4 rounded-box">Listado de asistencias del alumno</div>
    </section>
  );
};

export default PaginaHistorialAlumno;
