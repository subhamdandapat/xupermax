import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginsignupService } from '../loginsignup.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;
  public loginformerror: any;
  loginsubmitted: boolean;

  constructor(private formBuilder: FormBuilder,
    public loginsignupProvider:LoginsignupService) {
    this.loginformerror = {
      email: {},
      password: {}
    };
  }

  ngOnInit(): void {
    this.loginform = this.createloginForm();
    this.loginform.valueChanges.subscribe(() => {
      this.onloginFormValuesChanged();
    });
  }

  createloginForm() {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onloginFormValuesChanged() {

    for (const field in this.loginformerror) {
      if (!this.loginformerror.hasOwnProperty(field)) {
        continue;
      }
      // Clear previous errors
      this.loginformerror[field] = {};
      // Get the control
      const control = this.loginform.get(field);

      if (control && control.dirty && !control.valid) {
        this.loginformerror[field] = control.errors;
      }
    }
  }

  login() {
    this.loginsubmitted = true;
    let data = {
      username:this.loginform.value.email,
      password:this.loginform.value.password
    }
    this.loginsignupProvider.login(data).subscribe(result=>{
      let logdata:any = result;
      if(logdata.error == true){
        alert("Your approval is in pending mode");
      }else{
        
      }
    })
  }
}
