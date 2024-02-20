import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake';

interface News {
  id: string;
  title: string;
  description: string;
  photoCover: string;
  contentData: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  news: News[] = [];
  mainNews: News | undefined;
  constructor() {}

  ngOnInit(): void {
    this.mainNews = dataFake[0];
    this.news = dataFake.slice(1);
  }
}
