import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IAsset } from '../../../../shared/models/asset.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-asset-list',
  imports: [CommonModule, MatIconModule],
  templateUrl: './asset-list.html',
  styleUrl: './asset-list.scss'
})
export class AssetList {

  assets: IAsset[] = [
    {
      name: "Loremipsumdolorsit",
      ipAddress: "192.168.1.1",
      level: "Critical"
    },
    {
      name: "Loremipsumdolorsit002",
      ipAddress: "192.168.1.2",
      level: "Critical"
    }
  ]

  trackByIp(_: number, asset: IAsset): string {
    return asset.ipAddress;
  }

  getBadgeClasses(level: IAsset['level']): string {
    const map = {
      Low: 'bg-green-100 text-green-800',
      Medium: 'bg-yellow-100 text-yellow-800',
      High: 'bg-orange-100 text-orange-800',
      Critical: 'bg-red-100 text-red-800',
    };
    return map[level] ?? 'bg-gray-100 text-gray-700';
  }

}
