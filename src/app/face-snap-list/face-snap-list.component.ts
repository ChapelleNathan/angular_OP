import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapServices } from '../services/face-snap.services';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  constructor(private faceSnapListService: FaceSnapServices) { }
  faceSnaps !: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapListService.faceSnaps
  }

}
