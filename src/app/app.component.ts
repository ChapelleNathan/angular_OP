import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mySnap !: FaceSnap;
  otherSnap !: FaceSnap;
  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Bonsoir',
      'c\'est michel',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0
    )

    this.otherSnap = new FaceSnap(
      'Oui c\'est un autre SnapFace',
      'Et c\'est encore michel',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0
    )
  }
}
