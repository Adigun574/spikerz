import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { INode } from '../../../../shared/models/node.model';
import { GraphNode } from '../../../../shared/ui/graph-node/graph-node';

@Component({
  selector: 'app-risk-summary',
  imports: [CommonModule, MatIconModule, GraphNode],
  templateUrl: './risk-summary.html',
  styleUrl: './risk-summary.scss',
})
export class RiskSummary {
  isOpen: boolean = false;
  openPopoverId: string | null = null;
  nodes: INode[] = [
    {
      id: '1',
      name: 'Loremipsum',
      type: 'vulnerability',
      iconBackgroundColor: '#FFF1F0',
      badgeType: 'user-group',
      iconColor: '#E5372B',
      children: [],
    },
    {
      id: '2',
      name: 'Loremipsum',
      type: 'fix',
      iconBackgroundColor: '#D7EAFF',
      iconColor: '#1774DE',
      children: [],
    },
    {
      id: '3',
      name: 'Loremipsum',
      type: 'fix',
      iconBackgroundColor: '#D7EAFF',
      iconColor: '#1774DE',
      children: [
        {
          id: '4',
          name: 'Loremipsumdolorsit',
          iconBackgroundColor: '#D7EAFF',
          iconColor: '#1774DE',
          ipAddress: '192.168.1.1',
          badgeType: 'shield-off',
          type: 'action',
        },
        {
          id: '5',
          name: 'Loremipsumdolorsit002',
          iconBackgroundColor: '#D7EAFF',
          iconColor: '#1774DE',
          ipAddress: '192.168.1.2',
          badgeType: 'shield-off',
          type: 'action',
        },
      ],
    },
  ];

  onNodeClick(id: string) {
    this.openPopoverId = this.openPopoverId === id ? null : id;
  }

  closePopover() {
    this.openPopoverId = null;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.graph-node') && !target.closest('.popover-content')) {
      this.closePopover();
    }
  }
}
