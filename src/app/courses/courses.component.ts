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
    // this.courses = this.coursesService.courses;
    this.courses = this.coursesService.all();
  }

  selectCourse(course) {
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
    this.selectedCourse = 'emptyCourse';
  }

  saveCourse(course) {
    if (course.id) {
      this.coursesService.update(course);
    } else this.coursesService.create(course);

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

  deleteSelectedCourse(course) {
    // if (courseId === this.selectedCourse.id) {
    //   this.selectedCourse = null;
    // }
    this.coursesService.delete(course.id);
  }

  cancel() {
    this.resetCourse();
  }
}
