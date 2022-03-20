import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  title !: string;
  description !: string;
  createdAt !: Date;
  snaps !: number;
  imageUrl !: string;
  asSnapped !: boolean;
  buttonSnapText : string = 'Oh snap !';

  ngOnInit() {
    this.title = 'Ma photo';
    this.description = 'Elle est jolie hein ?';
    this.createdAt = new Date();
    this.snaps = 100108210;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.asSnapped = false;
  }
  onSnap() {
    if (this.asSnapped == true) {
      this.snaps--;
      this.asSnapped = false;
      this.buttonSnapText = 'Oh Snap !';
    } else {
      this.snaps++;
      this.asSnapped = true;
      this.buttonSnapText = 'Oops unSnap';
    }
  }
}

