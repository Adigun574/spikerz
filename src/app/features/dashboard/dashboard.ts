import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionPanel } from './components/description-panel/description-panel';
import { SummaryPanel } from './components/summary-panel/summary-panel';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, DescriptionPanel, SummaryPanel],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard { }
