import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{AccountService} from '../../services/account.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   form: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
  constructor(  private formBuilder: FormBuilder,private accountService:AccountService,private router: Router) {
   }

  ngOnInit(): void {
  this.form = this.formBuilder.group({
      email: ["", [Validators.required,Validators.email]],
      password: ["", [Validators.required,Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')]]
   });

//   }
  }


  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    
      this.submitted = true;

      // reset alerts on submit

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      this.loading = true;
       this.accountService.login(this.f.email.value,this.f.password.value).subscribe(
        (res)=>{
        this.router.navigate([`info`]);
        this.loading = false;
        }
        )
        }


}