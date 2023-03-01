import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Festival } from 'src/app/models/festival';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-festivals-list',
  templateUrl: './festivals-list.component.html',
  styleUrls: ['./festivals-list.component.css'],
})
export class FestivalsListComponent {
  @Input() festivals!: Festival[];
  @Output() festivalSelected: EventEmitter<Festival> = new EventEmitter();

  ngOnInit(): void {
    this.logger.log(
      `Afficahe de la liste de festivals - ${this.festivals.length} festivals`
    );
  }

  emitFestival(festival: Festival): void {
    this.festivalSelected.emit(festival);
    this.logger.log(JSON.stringify(festival));
  }

  constructor(public logger: MessageService) {}
}
