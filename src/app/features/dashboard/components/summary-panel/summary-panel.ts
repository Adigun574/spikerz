import { Component } from '@angular/core';
import { RiskSummary } from '../risk-summary/risk-summary';
import { AssetList } from '../asset-list/asset-list';
import { ContextualRisk } from '../contextual-risk/contextual-risk';

@Component({
  selector: 'app-summary-panel',
  imports: [RiskSummary, AssetList, ContextualRisk],
  templateUrl: './summary-panel.html',
  styleUrl: './summary-panel.scss',
})
export class SummaryPanel {}
