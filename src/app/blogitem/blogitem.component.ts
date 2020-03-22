import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blogitem',
  templateUrl: './blogitem.component.html',
  styleUrls: ['./blogitem.component.scss']
})
export class BlogitemComponent implements OnInit {
  @Input() userimg: any;
  @Input() username: any;
  @Input() usercomment: any;

  constructor() { }

  ngOnInit(): void {
  }

}
