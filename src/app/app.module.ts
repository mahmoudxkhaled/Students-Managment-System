import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './Components/students/students.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { StudentItemComponent } from './Components/student-item/student-item.component';
import { ErrorComponent } from './Components/error/error.component';
import { HeaderComponent } from './Components/header/header.component';
import { AddNewStudentComponent } from './Components/add-new-student/add-new-student.component';
import { UpdateStudentComponent } from './Components/update-student/update-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DeleteStudentComponent } from './Components/delete-student/delete-student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AlbumComponent } from './Components/albums/albums.component';
import { PhotosComponent } from './Components/photos/photos.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentDetailsComponent,
    StudentItemComponent,
    ErrorComponent,
    HeaderComponent,
    AddNewStudentComponent,
    UpdateStudentComponent,
    DeleteStudentComponent,
    AlbumComponent,
    PhotosComponent,

    PhotosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
export class YourModule {}
