import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapServices {
    faceSnaps: FaceSnap[] = [
        {
            id: 0,
            title: 'Bonsoir',
            description: 'c\'est michel',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createdAt: new Date(),
            snaps: 150,
            asSnapped: false,
            location: 'Orléans',
        },
        {
            id: 1,
            title: 'Oui c\'est un autre SnapFace',
            description: 'Et c\'est encore michel',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createdAt: new Date(),
            snaps: 40,
            asSnapped: false,
        }
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps
    }

    getFaceSnapById(id: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === id);
        if (faceSnap) {
            return faceSnap;
        } else {
            throw new Error('FaceSnap not found :c');
        }
    }

    snapById(id: number, asSnapped: boolean) {
        const faceSnap = this.getFaceSnapById(id);
        if (asSnapped === false) {
            faceSnap.snaps++;
            faceSnap.asSnapped = true;
        } else {
            faceSnap.snaps--;
            faceSnap.asSnapped = false;
        }
    }
}

