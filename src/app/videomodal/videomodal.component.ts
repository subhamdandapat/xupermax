import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-videomodal',
  templateUrl: './videomodal.component.html',
  styleUrls: ['./videomodal.component.scss']
})
export class VideomodalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<VideomodalComponent>) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
