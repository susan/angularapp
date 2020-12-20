import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  selectedCourse = null;
  colorTheme = 'purple';
  courses = [
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

  selectCourse(course) {
    console.log('what is course', course);
    this.selectedCourse = course;
  }
  deleteCourse(courseId) {
    console.log('deleting course', courseId);
    if (courseId === this.selectedCourse.id) {
      this.selectedCourse = null;
    }
  }

  resetCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false,
    };
    this.selectedCourse = 'emptyCourse';
  }

  cancel() {
    this.resetCourse();
  }

  saveCourse() {
    console.log(this.selectedCourse);
    const newAr = this.courses.map((course) => {
      if (course.id === this.selectedCourse.Id) {
        course.percentComplete = this.selectedCourse.percentComplete;
        course.favorite = this.selectedCourse.favorite;
        return course;
      }
      return course;
    });
    console.log('newAr', newAr);
    this.courses = newAr;
  }

  ngOnInit(): void {
    this.resetCourse();
  }
}
