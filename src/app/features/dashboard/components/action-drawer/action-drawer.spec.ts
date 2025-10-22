import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionDrawer } from './action-drawer';

describe('ActionDrawer', () => {
  let component: ActionDrawer;
  let fixture: ComponentFixture<ActionDrawer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionDrawer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionDrawer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
