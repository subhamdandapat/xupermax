import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { LoginsignupService } from '../loginsignup.service';

// interface Food {
//   value: string;
//   viewValue: string;
// }

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  signupform: FormGroup;
  regformerror: any;
  regsubmitted: boolean;

  // foods: Food[] = [
  //   {value: 'steak-0', viewValue: 'One'},
  //   {value: 'pizza-1', viewValue: 'Two'},
  //   {value: 'tacos-2', viewValue: 'Three'}
  // ];

  constructor( public snackBar:MatSnackBar,
    private formBuilder: FormBuilder,
    public loginsignupProvider:LoginsignupService ) {
   
    this.regformerror = {

      lastname: {},
      firstname:{},
      username:{},
      email: {},
      password: {},
      companyname: {},
      address: {},
      phone: {},
      city: {},
      state: {},
      zipcode: {},
      country: {},

    };
  }

  ngOnInit(): void {
    this.signupform = this.createregForm()
    this.signupform.valueChanges.subscribe(() => {
      this.onregFormValuesChanged();
    });
  }

  createregForm() {
    return this.formBuilder.group({
      companyname: ['', Validators.required],
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      
      username: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      zipcode: ['', Validators.required],

    });
  }
  onregFormValuesChanged() {

    for (const field in this.regformerror) {
      if (!this.regformerror.hasOwnProperty(field)) {
        continue;
      }
      // Clear previous errors
      this.regformerror[field] = {};
      // Get the control
      const control = this.signupform.get(field);

      if (control && control.dirty && !control.valid) {
        this.regformerror[field] = control.errors;
      }
    }
  }

  signup(){
    this.regsubmitted=true;
    // this.snackBar.open(message)
    let data = {
      firstName: this.signupform.value.firstname,
      lastName: this.signupform.value.lastname,
      email:this.signupform.value.email,
      password: this.signupform.value.password,
      city: this.signupform.value.city,
      state: this.signupform.value.state,
      address: this.signupform.value.address,
      phoneNumber: this.signupform.value.phone,
      country: this.signupform.value.country,
      zipcode:this.signupform.value.zipcode,
      username:this.signupform.value.username,
      company:this.signupform.value.companyname
    };

    this.loginsignupProvider.registration(data).subscribe(result=>{
      let regdata:any = result;
      this.regsubmitted=false;
      console.log(regdata);
      alert("Requested, A link has been sent to your email for verification");
    })

  }

  onblur(){
    console.log("working ----------------->>>>>>>");
    if(!this.signupform.value.username){
      return
    }else{
      let username ={
        username:this.signupform.value.username
      }
      this.loginsignupProvider.checkusername(username).subscribe(result=>{
        let output:any = result;
        console.log(output);
        if(output.error == true){
          alert("This username has already taken");
        }
        
      })
    }
   
  }
  
}
