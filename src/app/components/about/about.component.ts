import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  otherDetails: any[] = [
    {
      key: 'Country',
      value: 'Malaysia',
    },
    {
      key: 'University',
      value: 'Universiti Sains Malaysia',
    },
    {
      key: 'Education Level',
      value: 'BSC In Physics(Hons), MSC In Mathematics(Hons)',
    },
    {
      key: 'Email',
      value: 'chengjie.ppsm@gmail.com / ooichengjie@gmail.com',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}