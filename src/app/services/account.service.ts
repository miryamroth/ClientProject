import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../state/state.index';
import { setUser } from '../state/actions/user.actions';



@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(
      private router: Router,
      private http: HttpClient,
      private store: Store<AppState>

  ) {
      this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
      this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
      return this.userSubject.value;
  }
//    httpOptions:any = {
//     headers: new HttpHeaders()
// }

// this.httpOptions.headers.append('Access-Control-Allow-Origin', '*');
// httpOptions.headers.append('Content-Type', 'application/json');
// httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
//  headers:any = new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Headers': 'Content-Type',
//     'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
//     'Origin':'https://private-052d6-testapi4528.apiary-mock.com/'
//   });
  login(username, password) {
      
      return this.http.post<User>(`/authenticate`, { username,password})
          .pipe(map(data => {
             let user=data[0];
             this.store.dispatch(
               setUser({ token: user.token,personalDetails:user.personalDetails})
             );          
              return user;
          }));
  }
}