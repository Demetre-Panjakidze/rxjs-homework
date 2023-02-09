import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  Observable,
  of,
  from,
  switchMap,
  map,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';
import { About } from 'src/app/interfaces/IHomework';

class AboutPerson {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public id: number
  ) {}
}

@Component({
  selector: 'app-homework1',
  templateUrl: './homework1.component.html',
  styleUrls: ['./homework1.component.scss'],
})
export class Homework1Component {
  inputContent = new FormControl();

  itemsList: About[] = [
    new AboutPerson('John', 'Doe', 30, 1),
    new AboutPerson('Jane', 'Doe', 28, 2),
    new AboutPerson('James', 'Smith', 32, 3),
    new AboutPerson('Emily', 'Johnson', 29, 4),
    new AboutPerson('William', 'Brown', 33, 5),
    new AboutPerson('Ava', 'Davis', 27, 6),
    new AboutPerson('Olivia', 'Miller', 31, 7),
    new AboutPerson('Sophia', 'Wilson', 28, 8),
    new AboutPerson('Isabella', 'Moore', 30, 9),
    new AboutPerson('Mia', 'Taylor', 32, 10),
    new AboutPerson('Charlotte', 'Anderson', 29, 11),
    new AboutPerson('Amelia', 'Thomas', 27, 12),
    new AboutPerson('Harper', 'Jackson', 31, 13),
    new AboutPerson('Evelyn', 'White', 28, 14),
    new AboutPerson('Abigail', 'Harris', 30, 15),
    new AboutPerson('Emily', 'Martin', 32, 16),
    new AboutPerson('Elizabeth', 'Thompson', 29, 17),
    new AboutPerson('Avery', 'Garcia', 27, 18),
    new AboutPerson('Ella', 'Martinez', 31, 19),
    new AboutPerson('Madison', 'Robinson', 28, 20),
    new AboutPerson('Scarlett', 'Clark', 30, 21),
    new AboutPerson('Victoria', 'Rodriguez', 32, 22),
    new AboutPerson('Aria', 'Lewis', 29, 23),
    new AboutPerson('Adalynn', 'Walker', 27, 24),
    new AboutPerson('Aubrey', 'Hall', 31, 25),
    new AboutPerson('Aurora', 'Allen', 28, 26),
    new AboutPerson('Eleanor', 'King', 30, 27),
    new AboutPerson('Natalie', 'Wright', 32, 28),
    new AboutPerson('Riley', 'Scott', 29, 29),
    new AboutPerson('Audrey', 'Green', 27, 30),
  ];

  search$ = of(this.itemsList);

  ngOnInit() {
    this.inputContent.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((value) => {
          return this.search$.pipe(
            map((userObj) =>
              userObj.filter(
                (e) =>
                  e.firstName.toLowerCase().includes(value.toLowerCase()) ||
                  e.lastName.toLowerCase().includes(value.toLowerCase()) ||
                  (e.firstName + ' ' + e.lastName)
                    .toLowerCase()
                    .includes(value.toLowerCase())
              )
            ),
            map((e) => e.map((x) => `${x.firstName} ${x.lastName}`))
          );
        })
      )
      .subscribe(console.log);
  }
}
