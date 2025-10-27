import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IAsset } from '../../../../shared/models/asset.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-asset-list',
  imports: [CommonModule, MatIconModule],
  templateUrl: './asset-list.html',
  styleUrl: './asset-list.scss',
})
export class AssetList {
  assets: IAsset[] = [
    {
      name: 'Loremipsumdolorsit',
      ipAddress: '192.168.1.1',
      level: 'Critical',
    },
    {
      name: 'Loremipsumdolorsit002',
      ipAddress: '192.168.1.2',
      level: 'Critical',
    },
    {
      name: 'Loremipsumdolorsit003',
      ipAddress: '192.168.1.3',
      level: 'Medium',
    },
    {
      name: 'Loremipsumdolorsit004',
      ipAddress: '192.168.1.4',
      level: 'High',
    },
  ];

  itemsPerPage: number = 2;
  currentPage: number = 1;

  get totalPages(): number {
    return Math.ceil(this.assets.length / this.itemsPerPage);
  }

  get paginatedAssets(): IAsset[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.assets.slice(start, start + this.itemsPerPage);
  }

  get startItemIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endItemIndex(): number {
    const end = this.currentPage * this.itemsPerPage;
    return end > this.assets.length ? this.assets.length : end;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

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
