import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of, from, switchMap, map, debounceTime } from 'rxjs';
import { About } from 'src/app/interfaces/IHomework';

@Component({
  selector: 'app-homework1',
  templateUrl: './homework1.component.html',
  styleUrls: ['./homework1.component.scss'],
})
export class Homework1Component {
  inputContent = new FormControl();

  itemsList: About[] = [
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

  search$ = of(this.itemsList);

  ngOnInit() {
    this.inputContent.valueChanges
      .pipe(
        debounceTime(500),
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
            map((e) =>
              e.map((x) => {
                return `${x.firstName} ${x.lastName}`;
              })
            )
          );
        })
      )
      .subscribe(console.log);
  }
}
