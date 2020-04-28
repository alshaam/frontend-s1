import { Component, OnChanges, Input } from '@angular/core';


@Component({
    selector: 'pm-rate',
    templateUrl: './rate.component.html',
    styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnChanges{

    @Input() rating;
    starWidth: number = 4;
 
    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }



}