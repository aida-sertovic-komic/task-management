import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAddComponent } from './task-add.component';

describe('TaskAddComponent', () => {
  let component: TaskAddComponent;
  let fixture: ComponentFixture<TaskAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskAddComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TaskAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create random date between July and August 2023', () => {
    const startDate = new Date(2023, 6, 1);
    const endDate = new Date(2023, 7, 31);

    const randomDate = component.createRandomDate(startDate, endDate);

    expect(randomDate.getTime()).toBeGreaterThanOrEqual(startDate.getTime());
    expect(randomDate.getTime()).toBeLessThanOrEqual(endDate.getTime());
  });

  it('should create random color', () => {
    const randomColor = component.createRandomColor();

    expect(randomColor.charAt(0)).toBe('#');
    expect(randomColor.length).toBe(7);
  });
});
