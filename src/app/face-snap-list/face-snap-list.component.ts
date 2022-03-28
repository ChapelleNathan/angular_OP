import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapServices } from '../services/face-snap.services';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {

  constructor(private faceSnapListService: FaceSnapServices) { }
  faceSnaps !: FaceSnap[];
  private destroy$!: Subject<boolean>;

  interval$ !: Observable<number>;

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapListService.faceSnaps;
    this.destroy$ = new Subject<boolean>();
    interval(1000).pipe(tap(console.log), takeUntil(this.destroy$)).subscribe();
  }

  ngOnDestroy(): void{
    this.destroy$.next(true);
  }

}
