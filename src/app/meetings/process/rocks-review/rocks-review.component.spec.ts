import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocksReviewComponent } from './rocks-review.component';

describe('RocksReviewComponent', () => {
  let component: RocksReviewComponent;
  let fixture: ComponentFixture<RocksReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocksReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocksReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
