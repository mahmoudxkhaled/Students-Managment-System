import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-album',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumComponent {
  ID: any;
  student: any;

  constructor(myRoute: ActivatedRoute, myService: StudentsService) {
    this.ID = myRoute.snapshot.params['id'];

    myService.GetStudentByID(this.ID).subscribe(
      (data) => (this.student = data),
      (err) => console.log(err)
    );
  }
}
