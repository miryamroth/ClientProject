import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { AppState, selectUser } from 'src/app/state/state.index';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(  private store: Store<AppState>) { }
  user:User;
  ngOnInit(): void {
     this.store.select(selectUser).subscribe((data:User)=>{
      this.user=data;
      //alert(this.user.token)
     })

  }
  getUserInfo(){}

}
