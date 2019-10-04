import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddTrainingComponent } from './admin-add-training.component';

describe('AdminAddTrainingComponent', () => {
  let component: AdminAddTrainingComponent;
  let fixture: ComponentFixture<AdminAddTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
