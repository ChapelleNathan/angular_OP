import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapServices } from '../services/face-snap.services';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  constructor (private FaceSnapService: FaceSnapServices, private router: Router){}
  @Input() faceSnap !: FaceSnap;
  buttonSnapText : string = 'Oh snap !';

  ngOnInit() {
  }
  onSnap() {
    if (this.faceSnap.asSnapped == true) {
      this.FaceSnapService.snapById(this.faceSnap.id, this.faceSnap.asSnapped)
      this.buttonSnapText = 'Oh Snap !';
    } else {
      this.FaceSnapService.snapById(this.faceSnap.id, this.faceSnap.asSnapped)
      this.buttonSnapText = 'Oops Snap !';
    }
  }

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}

