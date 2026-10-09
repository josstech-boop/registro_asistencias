import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(2, 'El nombre es obligatorio'),
  email: z.string().email('Correo inválido'),
  role: z.enum(['admin', 'docente', 'alumno']),
});

export const gradeSchema = z.object({
  name: z.string().min(2, 'El nombre del grado es obligatorio'),
  section: z.string().min(1, 'La sección es obligatoria'),
});

export const assignmentSchema = z.object({
  teacherId: z.string().min(1, 'Selecciona un docente'),
  gradeId: z.string().min(1, 'Selecciona un grado'),
  subject: z.string().min(2, 'La asignatura es obligatoria'),
});

export default {
  userSchema,
  gradeSchema,
  assignmentSchema,
};
