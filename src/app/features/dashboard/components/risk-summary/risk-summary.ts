import { Component } from '@angular/core';
import { OverlayModule, CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { VulnerabilitiesDrawer } from '../vulnerabilities-drawer/vulnerabilities-drawer';
import { FixDrawer } from '../fix-drawer/fix-drawer';
import { ActionDrawer } from '../action-drawer/action-drawer';
import { INode } from '../../../../shared/models/node.model';

@Component({
  selector: 'app-risk-summary',
  imports: [CommonModule, OverlayModule, CdkConnectedOverlay, CdkOverlayOrigin, MatIconModule, VulnerabilitiesDrawer, FixDrawer, ActionDrawer],
  templateUrl: './risk-summary.html',
  styleUrl: './risk-summary.scss'
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
      children: []
    },
    {
      id: '2',
      name: 'Loremipsum',
      type: 'fix',
      iconBackgroundColor: '#D7EAFF',
      iconColor: '#1774DE',
      children: []
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
          type: 'action'
        }
      ]
    }
  ];

  onNodeClick(event: MouseEvent, id: string) {
    event.stopPropagation();
    this.openPopoverId = this.openPopoverId === id ? null : id;
  }

  keepPopoverOpen(id: string) {
    this.openPopoverId = id;
  }

  closePopover() {
    this.openPopoverId = null;
  }

}
