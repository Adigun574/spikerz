import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionCard } from './accordion-card';

describe('AccordionCard', () => {
  let component: AccordionCard;
  let fixture: ComponentFixture<AccordionCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionCard],
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
