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
    new AboutPerson('Demetre', 'Panjakidze', 19, 1),
    new AboutPerson('John', 'Doe', 30, 2),
    new AboutPerson('Jane', 'Doe', 28, 3),
    new AboutPerson('James', 'Smith', 32, 4),
    new AboutPerson('Emily', 'Johnson', 29, 5),
    new AboutPerson('William', 'Brown', 33, 6),
    new AboutPerson('Ava', 'Davis', 27, 7),
    new AboutPerson('Olivia', 'Miller', 31, 8),
    new AboutPerson('Sophia', 'Wilson', 28, 9),
    new AboutPerson('Isabella', 'Moore', 30, 10),
    new AboutPerson('Mia', 'Taylor', 32, 11),
    new AboutPerson('Charlotte', 'Anderson', 29, 12),
    new AboutPerson('Amelia', 'Thomas', 27, 13),
    new AboutPerson('Harper', 'Jackson', 31, 14),
    new AboutPerson('Evelyn', 'White', 28, 15),
    new AboutPerson('Abigail', 'Harris', 30, 16),
    new AboutPerson('Emily', 'Martin', 32, 17),
    new AboutPerson('Elizabeth', 'Thompson', 29, 18),
    new AboutPerson('Avery', 'Garcia', 27, 19),
    new AboutPerson('Ella', 'Martinez', 31, 20),
    new AboutPerson('Madison', 'Robinson', 28, 21),
    new AboutPerson('Scarlett', 'Clark', 30, 22),
    new AboutPerson('Victoria', 'Rodriguez', 32, 23),
    new AboutPerson('Aria', 'Lewis', 29, 24),
    new AboutPerson('Adalynn', 'Walker', 27, 25),
    new AboutPerson('Aubrey', 'Hall', 31, 26),
    new AboutPerson('Aurora', 'Allen', 28, 27),
    new AboutPerson('Eleanor', 'King', 30, 28),
    new AboutPerson('Natalie', 'Wright', 32, 29),
    new AboutPerson('Riley', 'Scott', 29, 30),
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
