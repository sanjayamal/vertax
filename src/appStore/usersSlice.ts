import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../appStore/store";

// Define a type for the slice state
interface UsersSliceState {
  usersList: [];
  currentUser: any;
  currentUserAccountDetail: any;
}

// Define the initial state using that type
const initialState: UsersSliceState = {
  usersList: [],
  currentUser: null,
  currentUserAccountDetail: null,
};

export const usersSlice = createSlice({
  name: "users",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: () => {},
  },
});

export const { setUser } = usersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default usersSlice.reducer;
