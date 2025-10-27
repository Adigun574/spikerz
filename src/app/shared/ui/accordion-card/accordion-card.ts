import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IAccordiongPanelData } from '../../models/asset.model';

@Component({
  selector: 'app-accordion-card',
  imports: [MatIconModule],
  templateUrl: './accordion-card.html',
  styleUrl: './accordion-card.scss',
})
export class AccordionCard {
  @Input({ required: true }) item!: IAccordiongPanelData;
  @Input({ required: true }) index!: number;

  @Output() toggleVisibility = new EventEmitter();

  toggleItem(index: number): void {
    this.toggleVisibility.emit(index);
  }
}
