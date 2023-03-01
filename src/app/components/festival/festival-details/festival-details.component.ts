import { Component, Input } from '@angular/core';
import { Festival } from 'src/app/models/festival';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-festival-details',
  templateUrl: './festival-details.component.html',
  styleUrls: ['./festival-details.component.css'],
})
export class FestivalDetailsComponent {
  @Input() festival!: Festival;

  festivalGroup!: FormGroup;

  ngOnChanges(): void {
    this.festivalGroup = new FormGroup({
      name: new FormControl(this.festival.name),
      entrancePrice: new FormControl(this.festival.tableprice_1),
      mainRoomPrice: new FormControl(this.festival.tableprice_2),
    });
  }

  ngOnInit(): void {}

  validate(): void {
    this.festival.name = this.festivalGroup.get('name')!.value;
    this.festival.tableprice_1 = this.festivalGroup.get('entrancePrice')!.value;
    this.festival.tableprice_2 = this.festivalGroup.get('mainRoomPrice')!.value;
  }

  setValue(): void {
    this.festivalGroup.patchValue({
      name: this.festival.name,
      entrancePrice: this.festival.tableprice_1,
      mainRoomPrice: this.festival.tableprice_2,
    });
  }
}
