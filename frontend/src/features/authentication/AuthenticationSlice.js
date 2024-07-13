import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "authentication/login",
  async ({ username, password }) => {
    console.log("inside");
    const response = await axios.post(`http://localhost:8000/users/login`, {
      email: username,
      password,
    });
    return response.data;
  }
);

export const AuthenticationSlice = createSlice({
  name: "Authentication",
  initialState: {},
  reducers: {
    add(state, action) {
      let flag = false;
      state.cartArr.forEach((element) => {
        if (element.id === action.payload.id) {
          flag = true;
          return;
        }
      });

      if (flag) {
        state.cartArr.forEach((e) => {
          if (e.id === action.payload.id) {
            e.quantity += 1;
          }
        });
      } else {
        state.cartArr.push({ ...action.payload, quantity: 1 });
      }
      // first entry

      console.log(state.cartArr);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.username = action.username;
    });
  },
});

export const {} = AuthenticationSlice.actions;
