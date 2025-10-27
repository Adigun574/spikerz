import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IRiskLevel } from '../../../../shared/models/risklevel';

@Component({
  selector: 'app-contextual-risk',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './contextual-risk.html',
  styleUrls: ['./contextual-risk.scss'],
})
export class ContextualRisk {
  risks: IRiskLevel[] = [
    { label: 'Critical', value: 2, color: '!text-red-800' },
    { label: 'High', value: 0, color: '!text-red-800' },
    { label: 'Medium', value: 0, color: '!text-yellow-600' },
    { label: 'Low', value: 0, color: '!text-green-600' },
  ];

  get totalCritical(): number {
    return this.risks.find((r) => r.label === 'Critical')?.value ?? 0;
  }

  get overallBorderColor(): string {
    const critical = this.totalCritical;
    if (critical > 1) return 'border-red-600';
    if (critical === 1) return 'border-yellow-500';
    return 'border-green-600';
  }
}
