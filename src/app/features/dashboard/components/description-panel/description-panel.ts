import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AccordionCard } from '../../../../shared/ui/accordion-card/accordion-card';
import { IAccordiongPanelData, ITableData } from '../../../../shared/models/asset.model';

@Component({
  selector: 'app-description-panel',
  imports: [CommonModule, MatIconModule, AccordionCard],
  templateUrl: './description-panel.html',
  styleUrl: './description-panel.scss',
})
export class DescriptionPanel {
  tableData: ITableData[] = [
    { label: 'Lorem Ipsum Dolor', value: '10/19/2017' },
    { label: 'Lorem Ipsum Dolor', value: 'Ut' },
    { label: 'Lorem Ipsum Dolor', value: 'Eros' },
    { label: 'Lorem Ipsum Dolor', value: 'Yes' },
    { label: 'Lorem Ipsum Dolor', value: 'Sit' },
    { label: 'Lorem Ipsum Dolor', value: 'Lorem Ipsum Dolor' },
    { label: 'Lorem Ipsum Dolor', value: 'Lorem Ipsum Dolor' },
  ];

  items: IAccordiongPanelData[] = [
    {
      title: 'Lorem P',
      subtitle: 'Server',
      subdetail: 'Server',
      detail: 'Lorem Ipsum Solor Sit Amet Consetctetur',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore quis repellat libero enim?',
      open: false,
    },
    {
      title: 'Lorem S',
      subtitle: 'Server',
      subdetail: 'Server',
      detail: 'Lorem Ipsum Solor Sit Amet Consetctetur',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore quis repellat libero enim?',
      open: false,
    },
    {
      title: 'Lorem T',
      subtitle: 'Server',
      subdetail: 'Server',
      detail: 'Lorem Ipsum Solor Sit Amet Consetctetur',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore quis repellat libero enim?',
      open: false,
    },
  ];

  toggleItem(index: number): void {
    this.items[index].open = !this.items[index].open;
  }
}
