const TablaAsistencia = ({ records = [] }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Alumno</th>
            <th>Estado</th>
            <th>Fecha</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {records.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-4">No hay registros</td>
            </tr>
          ) : (
            records.map((record) => (
              <tr key={record.id || record.studentId}>
                <td>{record.studentName}</td>
                <td>{record.status}</td>
                <td>{record.date}</td>
                <td><button className="btn btn-xs btn-primary">Editar</button></td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TablaAsistencia;
