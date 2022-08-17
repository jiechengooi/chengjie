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
      skill: 'React',
    },
    {
      skill: 'Express',
    },
    {
      skill: 'Angular.',
    },
    {
      skill: 'Node.js',
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
      skill: 'Google Firebase',
    },
    {
      skill: 'Next.js',
    },
    {
      skill: 'TypeScript',
    },
    {
      skill: 'Tailwind',
    },
    {
      skill: 'Mongodb, postgresql, sqlite',
    },
    {
      skill: 'Github',
    },
    {
      skill: 'Angular.',
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}