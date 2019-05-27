import {Component} from '@angular/core';
import {DataService} from '../data.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    artistData : any;
    constructor(public api: DataService) {
        this.getArtist();
    }

    getArtist() {
        this.api.getData().subscribe(data => {
            this.artistData = JSON.parse(data).music;
            this.artistData.map(aD=>{
                aD.tempRating = "";
            })
            console.log('Data', JSON.parse(data).music);
        });
    }

    onModelChange(event, selectedData) {
        selectedData.tempRating = event;
        console.log("SelectData",selectedData);
    }
}

