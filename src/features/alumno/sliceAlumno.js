import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  history: [],
  summary: null,
  loading: false,
  error: null,
};

const alumnoSlice = createSlice({
  name: 'alumno',
  initialState,
  reducers: {
    setHistory: (state, action) => {
      state.history = action.payload;
    },
    setSummary: (state, action) => {
      state.summary = action.payload;
    },
    setAlumnoLoading: (state, action) => {
      state.loading = action.payload;
    },
    setAlumnoError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setHistory, setSummary, setAlumnoLoading, setAlumnoError } = alumnoSlice.actions;

export default alumnoSlice.reducer;
