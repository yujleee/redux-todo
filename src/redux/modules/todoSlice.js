import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

// 초기 상태
let initialState = { todos: [] };

export const __getTodos = createAsyncThunk('getTodos', async (payload, thunkAPI) => {
  try {
    const response = await axios.get('http://localhost:3001/todos');
    console.log('data', response);
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __addTodos = createAsyncThunk('addTodos', async (payload, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:3001/todos', payload);
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __deleteTodos = createAsyncThunk('removeTodos', async (payload, thunkAPI) => {
  try {
    console.log('payload', payload.id);
    await axios.delete(`http://localhost:3001/todos/${payload.id}`);
    return thunkAPI.fulfillWithValue(payload.id);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// 리듀서
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
  },
  extraReducers: {
    [__getTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__addTodos.fulfilled]: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    [__deleteTodos.fulfilled]: (state, action) => {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      state.todos = newTodos;
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
