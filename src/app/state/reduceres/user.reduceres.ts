 import { createReducer,on } from "@ngrx/store";
import { User } from "src/app/models/user";
 import * as UserActions from '../actions/user.actions';





//  export interface UserState {
//      token: string|null;
//  }


 let initialState: User = {
     token: localStorage.getItem('token'),
     personalDetails:null
 }


  const _userReducer = createReducer(
     initialState,
     on(UserActions.setUser, (state, user ) => {
         const updatedState = { ...state,...user };
         saveUser(updatedState);
         return updatedState;
     }),


 
 );

 function saveUser(token) {
     localStorage.setItem("token",token);
 }
 export function userReducer(state: any, action: any) {
     return _userReducer(state, action);
   }
