import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  @Input() faceSnap !: FaceSnap;
  buttonSnapText : string = 'Oh snap !';

  ngOnInit() {
  }
  onSnap() {
    if (this.faceSnap.asSnapped == true) {
      this.faceSnap.snaps--;
      this.faceSnap.asSnapped = false;
      this.buttonSnapText = 'Oops unSnap';
    } else {
      this.faceSnap.snaps++;
      this.faceSnap.asSnapped = true;
      this.buttonSnapText = 'Oh Snap !';
    }
  }
}

