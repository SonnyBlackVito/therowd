import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/lib/axios';

interface ExampleState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: ExampleState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchExampleData = createAsyncThunk(
  'example/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/example');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Có lỗi xảy ra');
    }
  }
);

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    resetState: (state) => {
      state.data = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExampleData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExampleData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchExampleData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError, resetState } = exampleSlice.actions;
export default exampleSlice.reducer;
