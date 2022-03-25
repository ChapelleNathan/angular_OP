export class FaceSnap {
    id !: number;
    title !: string;
    description !: string;
    imageUrl !: string;
    createdAt !: Date;
    snaps !: number;
    asSnapped : boolean = false;
    location?: string;
}

