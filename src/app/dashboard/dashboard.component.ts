import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  organizationdata:any;
  constructor(private route: ActivatedRoute,
    private router: Router) { 
      this.organizationdata = JSON.parse(localStorage.getItem('userdata'))
      // let company:any = this.organizationdata
      console.log(this.organizationdata);
  }

  ngOnInit(): void {
   

  }

}
