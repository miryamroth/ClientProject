 import { createAction, props } from '@ngrx/store'
import { PersonalDetails } from 'src/app/models/user';

 export const setUser = createAction('[Auth Service] Login Set User', props<{ token: string,personalDetails:PersonalDetails}>());
