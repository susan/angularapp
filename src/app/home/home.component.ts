import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../shared/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'some title I inserted';
  themeColor = 'green';
  currentLesson = null;
  courseLessons = null;

  constructor(private lessonsService: LessonsService) {}

  ngOnInit(): void {
    this.courseLessons = this.lessonsService.courseLessons;
  }

  handleUpdate() {
    console.log('hello I am updating color');
    this.themeColor = 'orange';
  }
  selectLesson(lesson) {
    console.log('lesson is', lesson);
    this.currentLesson = lesson;
  }
}
