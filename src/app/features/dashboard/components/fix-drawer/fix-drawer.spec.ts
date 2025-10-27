import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixDrawer } from './fix-drawer';

describe('FixDrawer', () => {
  let component: FixDrawer;
  let fixture: ComponentFixture<FixDrawer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixDrawer],
    }).compileComponents();

    fixture = TestBed.createComponent(FixDrawer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
