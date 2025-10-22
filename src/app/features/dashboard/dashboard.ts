import { Component } from '@angular/core';
import { Sidebar } from '../../layout/components/sidebar/sidebar';
import { CommonModule } from '@angular/common';
import { DescriptionPanel } from './components/description-panel/description-panel';
import { SummaryPanel } from './components/summary-panel/summary-panel';



@Component({
  selector: 'app-dashboard',
  imports: [Sidebar, CommonModule, DescriptionPanel, SummaryPanel],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
