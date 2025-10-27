import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INode } from '../../models/node.model';
import { VulnerabilitiesDrawer } from '../../../features/dashboard/components/vulnerabilities-drawer/vulnerabilities-drawer';
import { FixDrawer } from '../../../features/dashboard/components/fix-drawer/fix-drawer';
import { ActionDrawer } from '../../../features/dashboard/components/action-drawer/action-drawer';
import {
  CdkConnectedOverlay,
  CdkOverlayOrigin,
  ConnectedPosition,
  OverlayModule,
} from '@angular/cdk/overlay';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-graph-node',
  imports: [
    CommonModule,
    VulnerabilitiesDrawer,
    FixDrawer,
    ActionDrawer,
    OverlayModule,
    CdkConnectedOverlay,
    CdkOverlayOrigin,
    MatIconModule,
  ],
  templateUrl: './graph-node.html',
  styleUrl: './graph-node.scss',
})
export class GraphNode {
  @Input({ required: true }) node!: INode;
  @Input({ required: true }) index!: number;
  @Input() openPopoverId!: string | null;

  @Output() nodeClick = new EventEmitter<string>();
  @Output() closePopoverEvent = new EventEmitter<void>();

  positions: ConnectedPosition[] = [
    {
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top',
      offsetY: 8,
    },
    {
      originX: 'center',
      originY: 'top',
      overlayX: 'center',
      overlayY: 'bottom',
      offsetY: -8,
    },
    {
      originX: 'end',
      originY: 'center',
      overlayX: 'start',
      overlayY: 'center',
      offsetX: 8,
    },
    {
      originX: 'start',
      originY: 'center',
      overlayX: 'end',
      overlayY: 'center',
      offsetX: -8,
    },
  ];

  closePopover() {
    this.closePopoverEvent.emit();
  }

  onMouseEnter(id: string) {
    this.nodeClick.emit(id);
  }

  onMouseLeave() {
    this.closePopoverEvent.emit();
  }
}
