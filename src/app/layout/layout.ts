import { Component } from '@angular/core';
import { Sidebar } from './components/sidebar/sidebar';
import { DescriptionPanel } from '../features/dashboard/components/description-panel/description-panel';
import { SummaryPanel } from '../features/dashboard/components/summary-panel/summary-panel';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, Sidebar, DescriptionPanel, SummaryPanel, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

}
