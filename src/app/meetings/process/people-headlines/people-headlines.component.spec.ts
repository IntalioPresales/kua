import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleHeadlinesComponent } from './people-headlines.component';

describe('PeopleHeadlinesComponent', () => {
  let component: PeopleHeadlinesComponent;
  let fixture: ComponentFixture<PeopleHeadlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleHeadlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleHeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
