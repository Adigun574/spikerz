import { Component, ElementRef, HostListener, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Popover } from '../popover/popover';


@Component({
  selector: 'app-popover-trigger',
  imports: [],
  templateUrl: './popover-trigger.html',
  styleUrl: './popover-trigger.scss'
})
export class PopoverTrigger {

  private overlayRef: OverlayRef | null = null;

  constructor(
    private overlay: Overlay,
    private elementRef: ElementRef,
    private vcr: ViewContainerRef
  ) {}

  @HostListener('mouseenter')
  showPopover() {
    if (this.overlayRef) return;

    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(this.elementRef)
      .withPositions([
        {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'top',
          offsetY: 8
        }
      ]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.close(),
      hasBackdrop: false
    });

    const tooltipPortal = new ComponentPortal(Popover, this.vcr);
    const componentRef: any = this.overlayRef.attach(tooltipPortal);

    // Add your custom content
    componentRef.instance['__content'] = 'Popover text'; // optional
  }

  @HostListener('mouseleave')
  hidePopover() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }

}
