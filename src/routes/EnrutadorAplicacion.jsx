import { Navigate, Route, Routes } from 'react-router-dom';

import LayoutPrincipal from '../layouts/LayoutPrincipal';
import LayoutAutenticacion from '../layouts/LayoutAutenticacion';

import RutaProtegida from './RutaProtegida';

import FormularioLogin from '../features/auth/components/FormularioLogin';
import FormularioRegistro from '../features/auth/components/FormularioRegistro';

import PaginaUsuarios from '../features/admin/pages/PaginaUsuarios';
import PaginaGrados from '../features/admin/pages/PaginaGrados';
import PaginaAsignaciones from '../features/admin/pages/PaginaAsignaciones';
import PaginaReportes from '../features/admin/pages/PaginaReportes';

import PanelDocente from '../features/docente/pages/PanelDocente';
import PaginaAlumnosGrado from '../features/docente/pages/PaginaAlumnosGrado';
import PaginaAsistenciaDiaria from '../features/docente/pages/PaginaAsistenciaDiaria';

import PaginaHistorialAlumno from '../features/alumno/pages/PaginaHistorialAlumno';

import PaginaNoEncontrada from '../pages/PaginaNoEncontrada';
import PaginaNoAutorizado from '../pages/PaginaNoAutorizado';

const EnrutadorAplicacion = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<LayoutAutenticacion><FormularioLogin /></LayoutAutenticacion>} />
      <Route path="/registro" element={<LayoutAutenticacion><FormularioRegistro /></LayoutAutenticacion>} />

      <Route element={<RutaProtegida allowedRoles={['admin']} />}>
        <Route path="/admin/usuarios" element={<LayoutPrincipal title="Administración"><PaginaUsuarios /></LayoutPrincipal>} />
        <Route path="/admin/grados" element={<LayoutPrincipal title="Grados"><PaginaGrados /></LayoutPrincipal>} />
        <Route path="/admin/asignaciones" element={<LayoutPrincipal title="Asignaciones"><PaginaAsignaciones /></LayoutPrincipal>} />
        <Route path="/admin/reportes" element={<LayoutPrincipal title="Reportes"><PaginaReportes /></LayoutPrincipal>} />
      </Route>

      <Route element={<RutaProtegida allowedRoles={['docente']} />}>
        <Route path="/docente" element={<LayoutPrincipal title="Docente"><PanelDocente /></LayoutPrincipal>} />
        <Route path="/docente/grado" element={<LayoutPrincipal title="Alumnos del grado"><PaginaAlumnosGrado /></LayoutPrincipal>} />
        <Route path="/docente/asistencia" element={<LayoutPrincipal title="Asistencia"><PaginaAsistenciaDiaria /></LayoutPrincipal>} />
      </Route>

      <Route element={<RutaProtegida allowedRoles={['alumno']} />}>
        <Route path="/alumno" element={<LayoutPrincipal title="Alumno"><PaginaHistorialAlumno /></LayoutPrincipal>} />
      </Route>

      <Route path="/unauthorized" element={<PaginaNoAutorizado />} />
      <Route path="*" element={<PaginaNoEncontrada />} />
    </Routes>
  );
};

export default EnrutadorAplicacion;
