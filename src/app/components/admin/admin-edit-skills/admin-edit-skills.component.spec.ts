import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditSkillsComponent } from './admin-edit-skills.component';

describe('MentorEditSkillsComponent', () => {
  let component: AdminEditSkillsComponent;
  let fixture: ComponentFixture<AdminEditSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
