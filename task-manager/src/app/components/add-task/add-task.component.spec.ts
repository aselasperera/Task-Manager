import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddTaskComponent } from './add-task.component';
import { TaskService } from '../../services/task.service';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTaskComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [TaskService]
    });
    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
