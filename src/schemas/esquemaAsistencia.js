import { z } from 'zod';

export const attendanceSchema = z.object({
  studentId: z.string().min(1, 'Selecciona un estudiante'),
  date: z.string().min(1, 'La fecha es obligatoria'),
  status: z.enum(['presente', 'ausente', 'justificado']),
  note: z.string().max(200).optional(),
});

export default attendanceSchema;
