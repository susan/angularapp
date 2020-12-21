import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: false,
    },
    {
      id: 2,
      title: 'JS for all of us',
      description: 'Learn the fundamentals of JS',
      percentComplete: 30,
      favorite: true,
    },
    {
      id: 3,
      title: 'Learn how to Code',
      description: 'Learn basic code structures',
      percentComplete: 20,
      favorite: false,
    },
  ];

  constructor() {}

  all() {
    return this.courses;
  }

  find(courseId) {
    console.log(courseId);
  }

  create(course) {
    console.log('CREATING', course);
  }

  update(course) {
    console.log('UPDATING', course);
  }

  delete(courseId) {
    console.log('DELETING', courseId);
  }
}
