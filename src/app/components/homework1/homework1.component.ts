import { Component } from '@angular/core';
import { Observable } from 'rxjs';

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  id: number;
}

@Component({
  selector: 'app-homework1',
  templateUrl: './homework1.component.html',
  styleUrls: ['./homework1.component.scss'],
})
export class Homework1Component {
  itemsList: Person[] = [
    {
      id: 1,
      firstName: 'Demetre',
      lastName: 'Panjakidze',
      age: 19,
    },
    {
      id: 2,
      firstName: 'Kote',
      lastName: 'Kirkitadze',
      age: 23,
    },
    {
      id: 3,
      firstName: 'Giorgi',
      lastName: 'Bazerashvili',
      age: 27,
    },
  ];

  search$ = new Observable();
}
