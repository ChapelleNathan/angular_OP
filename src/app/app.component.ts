import { Component, OnInit } from '@angular/core';
import { filter, interval, map, Observable, tap, timeout } from 'rxjs';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  interval$ !: Observable<number>;

  ngOnInit() {
    this.interval$ = interval(1000).pipe(
      map(value => value * 10)
    );
  }
}