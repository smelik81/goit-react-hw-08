import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../contacts/operations";

axios.defaults.baseURL = apiUrl;

const setAuthToken = (token) =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

const clearAuthToken = () => (axios.defaults.headers.common.Authorization = "");

// Запит на реєстрацію
export const register = createAsyncThunk(
  "auth/register",
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", newUser);
      setAuthToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Запит на логін
export const logIn = createAsyncThunk("auth/login", async (logus, thunkAPI) => {
  try {
    const response = await axios.post("/users/login", logus);
    setAuthToken(response.data.token);
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});

// Вихід з додатку
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await axios.post("/users/logout");
    clearAuthToken();
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});
