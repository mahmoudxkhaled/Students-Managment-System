import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StudentsService } from 'src/app/Services/students.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styles: [],
})
export class UpdateStudentComponent {
  id = 0;
  student: any;

  constructor(
    myRoute: ActivatedRoute,
    private myService: StudentsService,
    private router: Router
  ) {
    this.id = myRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.myService.GetStudentByID(this.id).subscribe({
      next: (data) => {
        this.student = data;
      },
      error: (err) => {},
    });
  }
  update(
    username: any,
    name: any,
    age: any,
    email: any,
    city: any,
    phone: any,
    website: any,
    company: any
  ) {
    let studentUpdate = {
      username,
      name,
      age,
      email,
      city,
      phone,
      website,
      company,
    };
    this.myService.UpdateStudentByID(this.id, studentUpdate).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
