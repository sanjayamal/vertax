import { IAccount } from "./../interfaces";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../appStore/store";

interface UsersSliceState {
  usersList: [];
  currentUser: any;
  currentUserAccountDetail: IAccount;
}
const initialCurrentUserAccountDetail = {
  service:
    "https://gea.eu.ondemand.vertexinc.com:443/vertex-ws/services/CalculateTax90",
  username: "Christian_Odendahl_test",
  password: "iN3fAB?6",
  trustedId: "$tr.Ia8ww3pn",
};

const initialState: UsersSliceState = {
  usersList: [],
  currentUser: null,
  currentUserAccountDetail: initialCurrentUserAccountDetail,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: () => {},
  },
});

export const { setUser } = usersSlice.actions;

export const selectCurrentUserAccountDetail = (state: RootState) =>
  state.users.currentUserAccountDetail;

export default usersSlice.reducer;
