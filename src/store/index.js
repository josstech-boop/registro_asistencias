import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/auth/sliceAutenticacion';
import adminReducer from '../features/admin/sliceAdministracion';
import docenteReducer from '../features/docente/sliceDocente';
import alumnoReducer from '../features/alumno/sliceAlumno';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminReducer,
    docente: docenteReducer,
    alumno: alumnoReducer,
  },
});

export default store;
