import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterNavComponent } from './filter-nav.component';

describe('FilterNavComponent', () => {
  let component: FilterNavComponent;
  let fixture: ComponentFixture<FilterNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterNavComponent]
    });
    fixture = TestBed.createComponent(FilterNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
