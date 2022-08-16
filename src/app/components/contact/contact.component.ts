import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  socialMedia: any[] = [
    {
      link: 'https://www.instagram.com/chengjieooi/',
      name: 'Instagram',
      icon: 'fab fa-instagram',
    },
    {
      link: 'chengjie.ppsm@gmail.com',
      name: 'Email',
      icon: 'fas fa-envelope',
    },
    {
      link: 'https://github.com/ooichengjie',
      name: 'Github',
      icon: 'fab fa-github',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}