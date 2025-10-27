import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionPanel } from './description-panel';

describe('DescriptionPanel', () => {
  let component: DescriptionPanel;
  let fixture: ComponentFixture<DescriptionPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(DescriptionPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
