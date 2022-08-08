 import { User } from "../models/user";
import { userReducer } from "./reduceres/user.reduceres";

 
const reducers = {
     user: userReducer,
 };
 
  interface AppState {
     user: User
 }
 
 export { reducers, AppState };
 
 export const selectUser = (state:AppState) => state.user;
