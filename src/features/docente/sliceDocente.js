import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [],
  attendance: [],
  loading: false,
  error: null,
};

const docenteSlice = createSlice({
  name: 'docente',
  initialState,
  reducers: {
    setStudents: (state, action) => {
      state.students = action.payload;
    },
    setAttendance: (state, action) => {
      state.attendance = action.payload;
    },
    setDocenteLoading: (state, action) => {
      state.loading = action.payload;
    },
    setDocenteError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setStudents, setAttendance, setDocenteLoading, setDocenteError } = docenteSlice.actions;

export default docenteSlice.reducer;
