import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private model = 'courses';

  //no longer need the data as we are pulling from server
  // private courses = [
  //   {
  //     id: 1,
  //     title: 'Angular 9 Fundamentals',
  //     description: 'Learn the fundamentals of Angular 9',
  //     percentComplete: 26,
  //     favorite: false,
  //   },
  //   {
  //     id: 2,
  //     title: 'JS for all of us',
  //     description: 'Learn the fundamentals of JS',
  //     percentComplete: 30,
  //     favorite: true,
  //   },
  //   {
  //     id: 3,
  //     title: 'Learn how to Code',
  //     description: 'Learn basic code structures',
  //     percentComplete: 20,
  //     favorite: false,
  //   },
  // ];

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get(this.getURL());
    //return this.courses;
  }

  find(courseId) {
    console.log(courseId);
    return this.http.get(this.getUrlById(courseId));
  }

  create(course) {
    //console.log('CREATING', course);
    return this.http.post(this.getURL(), course);
  }

  update(course) {
    //console.log('UPDATING', course);
    return this.http.put(this.getUrlById(course.id), course);
  }

  delete(courseId) {
    //console.log('DELETING', courseId);
    return this.http.delete(this.getUrlById(courseId));
  }

  private getURL() {
    return `http://localhost:3000/${this.model}`;
  }

  private getUrlById(id) {
    return `${this.getURL()}/${id}`;
  }
}
