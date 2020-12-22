import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  @Input() courses;
  @Output() selectedCourse = new EventEmitter();
  @Output() deletedCourse = new EventEmitter();
}
