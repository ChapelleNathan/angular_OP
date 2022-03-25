import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapServices } from '../services/face-snap.services';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  constructor (
    private FaceSnapService: FaceSnapServices,
    private route: ActivatedRoute,
    ){}
  buttonSnapText : string = 'Oh snap !';
  snapId = +this.route.snapshot.params['id'];
  @Input() faceSnap : FaceSnap = this.FaceSnapService.getFaceSnapById(this.snapId);

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
}
