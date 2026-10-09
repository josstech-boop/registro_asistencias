import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  grades: [],
  assignments: [],
  reports: [],
  loading: false,
  error: null,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setGrades: (state, action) => {
      state.grades = action.payload;
    },
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    setReports: (state, action) => {
      state.reports = action.payload;
    },
    setAdminLoading: (state, action) => {
      state.loading = action.payload;
    },
    setAdminError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setUsers,
  setGrades,
  setAssignments,
  setReports,
  setAdminLoading,
  setAdminError,
} = adminSlice.actions;

export default adminSlice.reducer;
