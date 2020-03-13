import {Component, OnInit} from '@angular/core';

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
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'One'},
    {value: 'pizza-1', viewValue: 'Two'},
    {value: 'tacos-2', viewValue: 'Three'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
