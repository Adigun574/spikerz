import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverTrigger } from './popover-trigger';

describe('PopoverTrigger', () => {
  let component: PopoverTrigger;
  let fixture: ComponentFixture<PopoverTrigger>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoverTrigger]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopoverTrigger);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
