import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ISidebarMenuItem } from '../../../shared/models/sidebar.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {

  platformId = inject(PLATFORM_ID)

  menuItems: ISidebarMenuItem[] = [
    {
      name: 'Lorem',
      icon: 'grid_view',
      url: 'lorem1'
    },
    {
      name: 'Lorem',
      icon: 'warning',
      url: 'lorem2'
    },
    {
      name: 'Lorem',
      icon: 'grid_view',
      url: 'lorem3'
    },
    {
      name: 'Lorem',
      icon: 'warning',
      url: 'lorem4'
    },
    {
      name: 'Lorem',
      icon: 'grid_view',
      url: 'lorem5'
    },
    {
      name: 'Lorem',
      icon: 'warning',
      url: 'lorem6'
    },
    {
      name: 'Lorem',
      icon: 'grid_view',
      url: 'lorem7'
    }
  ];

  isCollapsed: boolean = false;
  isHovered: boolean = false;

  isHiddenOnMobile: boolean = false;

  ngOnInit(): void {
    this.checkScreenWidth();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenWidth();
  }

  private checkScreenWidth() {
    if (isPlatformBrowser(this.platformId)) {
      const width = window.innerWidth;

      this.isCollapsed = width < 1024;
      this.isHiddenOnMobile = width < 760; 

    }
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

}