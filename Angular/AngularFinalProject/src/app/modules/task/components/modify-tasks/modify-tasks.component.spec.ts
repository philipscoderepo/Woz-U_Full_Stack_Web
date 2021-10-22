import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyTasksComponent } from './modify-tasks.component';

describe('ModifyTasksComponent', () => {
  let component: ModifyTasksComponent;
  let fixture: ComponentFixture<ModifyTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
