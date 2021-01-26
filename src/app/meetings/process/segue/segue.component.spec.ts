import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegueComponent } from './segue.component';

describe('SegueComponent', () => {
  let component: SegueComponent;
  let fixture: ComponentFixture<SegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
