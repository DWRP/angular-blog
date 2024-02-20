import { Component, Input, OnInit } from '@angular/core';
interface News {
  id: string;
  title: string;
  description: string;
  photoCover: string;
  contentData: string;
}
@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
  @Input()
  news: News | undefined;

  constructor() {}

  ngOnInit(): void {
  }
  
}
