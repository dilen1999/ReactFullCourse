import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [], // Initial users state
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.users = [...state.users, action.payload]; // Add a new user
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(
        (user, index) => index !== action.payload // Remove user by index
      );
    },
  },
});

// Export actions
export const { setUser, deleteUser } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
