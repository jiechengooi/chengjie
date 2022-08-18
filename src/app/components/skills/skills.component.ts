import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  mySkills: any[] = [
    {
      skill: 'HTML',
    },
    {
      skill: 'CSS',
    },
    {
      skill: 'Javascript',
    },
    {
      skill: 'JSON',
    },
    {
      skill: 'Node',
    },
    {
      skill: 'React',
    },
    {
      skill: 'Next.js',
    },
    {
      skill: 'Express',
    },
    {
      skill: 'Angular',
    },
    {
      skill: 'GraphQl',
    },
    {
      skill: 'Apollo',
    },
    {
      skill: 'Gatsby',
    },
    {
      skill: 'SanityCMS',
    },
    {
      skill: 'StrapiCMS',
    },
    {
      skill: 'Contentful',
    },
    {
      skill: 'Snipcart',
    },
    {
      skill: 'Google API',
    },
    {
      skill: 'TypeScript',
    },
    {
      skill: 'Tailwind',
    },
    {
      skill: 'Mongodb, Postgresql, Sqlite',
    },
    {
      skill: 'Git',
    },
    {
      skill: 'Unix Operating System',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}