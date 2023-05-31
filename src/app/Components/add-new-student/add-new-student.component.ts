import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/Services/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styles: [],
})
export class AddNewStudentComponent {
  constructor(private myService: StudentsService, private router: Router) {}

  StudentValid = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    company: new FormControl('', [Validators.required]),
    website: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
  });

  get NameValid() {
    return this.StudentValid.controls['name'].valid;
  }
  get EmailValid() {
    return this.StudentValid.controls['email'].valid;
  }
  get AgeValid() {
    return this.StudentValid.controls['age'].valid;
  }
  get PhoneValid() {
    return this.StudentValid.controls['phone'].valid;
  }
  get StreetValid() {
    return this.StudentValid.controls['street'].valid;
  }
  get CityValid() {
    return this.StudentValid.controls['city'].valid;
  }
  get CompanyValid() {
    return this.StudentValid.controls['company'].valid;
  }
  get WebsiteValid() {
    return this.StudentValid.controls['website'].valid;
  }
  get UserName() {
    return this.StudentValid.controls['username'].valid;
  }

  AddStudent(a: any, b: any, c: any, d: any, e: any, f: any, g: any, s: any) {
    let newStudent = {
      username: a,
      name: b,
      age: c,
      email: d,
      phone: e,
      website: f,
      company: g,
      city: s,
    };

    if (
      this.NameValid &&
      this.CityValid &&
      this.CompanyValid &&
      this.EmailValid &&
      this.PhoneValid &&
      this.AgeValid
    ) {
      this.myService.AddNewStudent(newStudent).subscribe(() => {
        // Navigate to the home page after adding a new student
        this.router.navigate(['/']);
      });
    } else {
      alert('Fill all required fields');
    }
  }
}
