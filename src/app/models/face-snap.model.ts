export class FaceSnap {
    title !: string;
    description !: string;
    imageUrl !: string;
    createdAt !: Date;
    snaps !: number;
    asSnapped !: boolean;

    constructor (title : string, description : string, imageUrl : string, createdAt : Date, snaps : number, asSnapped : boolean = false) {
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.createdAt = createdAt;
        this.snaps = snaps;
        this.asSnapped = asSnapped;
    }
}

