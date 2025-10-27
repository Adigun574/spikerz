import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphNode } from './graph-node';

describe('GraphNode', () => {
  let component: GraphNode;
  let fixture: ComponentFixture<GraphNode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphNode],
    }).compileComponents();

    fixture = TestBed.createComponent(GraphNode);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
