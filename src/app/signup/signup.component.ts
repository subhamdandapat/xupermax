import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  regformerror: any;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'One'},
    {value: 'pizza-1', viewValue: 'Two'},
    {value: 'tacos-2', viewValue: 'Three'}
  ];

  constructor() {
    this.regformerror = {
      
      name: {},
      email: {},
      make: {},
      model: {},
      address: {},
      phone: {},

    }
  }

  ngOnInit(): void {
  }

}
