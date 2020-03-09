import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.scss']
})
export class ReviewItemComponent implements OnInit {
  @Input() userimg: any;
  @Input() username: any;
  @Input() usercomment: any;

  constructor() { }

  ngOnInit(): void {
  }

}
