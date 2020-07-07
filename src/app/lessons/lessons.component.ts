import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css'],
})
export class LessonsComponent implements OnInit {
  displayedColumns = ['seqNo', 'description', 'duration'];

  constructor() {}

  ngOnInit(): void {}
}
