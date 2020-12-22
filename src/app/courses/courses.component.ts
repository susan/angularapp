import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  selectedCourse = null;
  colorTheme = 'purple';
  courses = null;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.resetCourse();
    //v1
    // this.courses = this.coursesService.courses;
    //v2
    //after you make courses private in services you call the method:
    //this.courses = this.courseServices.all()
    //v3
    //this.coursesService.all().subscribe((data) => (this.courses = data));
    //v4
    this.loadCourses();
  }

  selectCourse(course) {
    console.log('what is course', course);
    this.selectedCourse = course;
  }

  resetCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false,
    };
    this.selectedCourse = emptyCourse;
  }

  loadCourses() {
    this.coursesService.all().subscribe((data) => (this.courses = data));
  }

  refreshCourses() {
    this.resetCourse();
    this.loadCourses();
  }

  saveCourse(course) {
    if (course.id) {
      this.coursesService
        .update(course)
        .subscribe((data) => this.refreshCourses());
    } else {
      this.coursesService
        .create(course)
        .subscribe((data) => this.refreshCourses());
    }

    // const newAr = this.courses.map((course) => {
    //   if (course.id === this.selectedCourse.Id) {
    //     course.percentComplete = this.selectedCourse.percentComplete;
    //     course.favorite = this.selectedCourse.favorite;
    //     return course;
    //   }
    //   return course;
    // });
    // console.log('newAr', newAr);
    // this.courses = newAr;
  }

  deleteSelectedCourse(courseId) {
    // if (courseId === this.selectedCourse.id) {
    //   this.selectedCourse = null;
    // }
    this.coursesService
      .delete(courseId)
      .subscribe((data) => this.refreshCourses());
  }

  cancel() {
    this.resetCourse();
  }
}
