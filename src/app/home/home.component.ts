import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'some title I inserted';
  themeColor = 'green';
  currentLesson = null;
  courseLessons = [
    { title: 'Hello Angular' },
    { title: 'Component Fundamentals' },
    { title: 'Template Driven Forms' },
    { title: 'Angular Services' },
    { title: 'Server Communication' },
    { title: 'Component Driven Architecture' },
    { title: 'Angular Routing' },
    { title: 'Unit Testing Fundamentals' },
  ];

  constructor() {}

  handleUpdate() {
    console.log('hello I am updating color');
    this.themeColor = 'orange';
  }
  selectLesson(lesson) {
    console.log('lesson is', lesson);
    this.currentLesson = lesson;
  }

  ngOnInit(): void {}
}
