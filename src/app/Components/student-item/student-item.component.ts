import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styles: [],
})
export class StudentItemComponent implements OnInit {
  @Input() student: any;
  constructor(
    private cdr: ChangeDetectorRef,
    private myService: StudentsService,
    private router: Router
  ) {}

  Students: any;
  ngOnInit(): void {
    this.myService.GetAllStudents().subscribe({
      next: (data) => {
        this.Students = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteStudent(id: any) {
    const confirmed = confirm('Are you sure you want to delete this student?');
    if (!confirmed) {
      return;
    }
    this.myService.DeleteStudentByID(id).subscribe({
      next: () => {
        this.myService.GetAllStudents().subscribe({
          next: (data) => {
            this.Students = data;
            this.cdr.detectChanges();
          },
          error: (err) => {
            alert(err);
          },
        });
        this.cdr.detectChanges();
      },
    });
    location.reload();
  }
}
