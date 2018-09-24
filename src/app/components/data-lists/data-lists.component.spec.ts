import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataListsComponent } from './data-lists.component';

describe('DataListsComponent', () => {
  let component: DataListsComponent;
  let fixture: ComponentFixture<DataListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
