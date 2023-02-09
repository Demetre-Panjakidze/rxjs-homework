import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { debounceTime, delay, fromEvent } from 'rxjs';
import { bla } from 'src/app/interfaces/IHomework';

@Component({
  selector: 'app-homework3',
  templateUrl: './homework3.component.html',
  styleUrls: ['./homework3.component.scss'],
})
export class Homework3Component implements AfterViewInit {
  @ViewChild('container') container: ElementRef | undefined;

  step: number = 20;
  people: bla[] = [
    { firstName: 'Demetre', lastName: 'Panjakidze', age: 19 },
    { firstName: 'Ethan', lastName: 'Clark', age: 32 },
    { firstName: 'Emma', lastName: 'Martin', age: 27 },
    { firstName: 'Noah', lastName: 'Young', age: 34 },
    { firstName: 'Aria', lastName: 'Allen', age: 32 },
    { firstName: 'William', lastName: 'King', age: 31 },
    { firstName: 'Avery', lastName: 'Wright', age: 33 },
    { firstName: 'John', lastName: 'Taylor', age: 31 },
    { firstName: 'Jane', lastName: 'Williams', age: 29 },
    { firstName: 'Jim', lastName: 'Smith', age: 36 },
    { firstName: 'Sarah', lastName: 'Wilson', age: 26 },
    { firstName: 'David', lastName: 'Johnson', age: 33 },
    { firstName: 'Emily', lastName: 'Brown', age: 37 },
    { firstName: 'Michael', lastName: 'Davis', age: 40 },
    { firstName: 'Emily', lastName: 'Johnson', age: 31 },
    { firstName: 'William', lastName: 'Taylor', age: 34 },
    { firstName: 'James', lastName: 'Miller', age: 39 },
    { firstName: 'Emily', lastName: 'Williams', age: 29 },
    { firstName: 'Daniel', lastName: 'Anderson', age: 35 },
    { firstName: 'Sarah', lastName: 'Wilson', age: 33 },
    { firstName: 'William', lastName: 'Johnson', age: 41 },
    { firstName: 'Michael', lastName: 'Brown', age: 36 },
    { firstName: 'David', lastName: 'Anderson', age: 43 },
    { firstName: 'James', lastName: 'Miller', age: 38 },
    { firstName: 'William', lastName: 'Johnson', age: 34 },
    { firstName: 'Daniel', lastName: 'Brown', age: 31 },
    { firstName: 'John', lastName: 'Taylor', age: 29 },
    { firstName: 'Jane', lastName: 'Williams', age: 26 },
    { firstName: 'Jim', lastName: 'Smith', age: 33 },
    { firstName: 'Sarah', lastName: 'Wilson', age: 31 },
    { firstName: 'David', lastName: 'Johnson', age: 37 },
    { firstName: 'Emily', lastName: 'Brown', age: 35 },
    { firstName: 'Michael', lastName: 'Davis', age: 39 },
    { firstName: 'Emily', lastName: 'Johnson', age: 29 },
    { firstName: 'William', lastName: 'Taylor', age: 33 },
    { firstName: 'John', lastName: 'Doe', age: 30 },
    { firstName: 'Jane', lastName: 'Doe', age: 28 },
    { firstName: 'Jim', lastName: 'Smith', age: 35 },
    { firstName: 'Sarah', lastName: 'Johnson', age: 25 },
    { firstName: 'David', lastName: 'Williams', age: 40 },
    { firstName: 'Emily', lastName: 'Brown', age: 32 },
    { firstName: 'Michael', lastName: 'Davis', age: 45 },
    { firstName: 'Emily', lastName: 'Johnson', age: 30 },
    { firstName: 'William', lastName: 'Wilson', age: 50 },
    { firstName: 'James', lastName: 'Miller', age: 55 },
    { firstName: 'Emily', lastName: 'Williams', age: 28 },
    { firstName: 'Daniel', lastName: 'Anderson', age: 60 },
    { firstName: 'Sarah', lastName: 'Wilson', age: 32 },
    { firstName: 'William', lastName: 'Johnson', age: 40 },
    { firstName: 'Michael', lastName: 'Brown', age: 45 },
    { firstName: 'David', lastName: 'Anderson', age: 50 },
    { firstName: 'James', lastName: 'Miller', age: 55 },
    { firstName: 'William', lastName: 'Johnson', age: 60 },
    { firstName: 'Daniel', lastName: 'Brown', age: 65 },
    { firstName: 'Emily', lastName: 'Jones', age: 27 },
    { firstName: 'Daniel', lastName: 'Taylor', age: 35 },
    { firstName: 'William', lastName: 'Williams', age: 41 },
    { firstName: 'Sarah', lastName: 'Smith', age: 29 },
    { firstName: 'Michael', lastName: 'Wilson', age: 36 },
    { firstName: 'David', lastName: 'Johnson', age: 43 },
    { firstName: 'James', lastName: 'Brown', age: 38 },
    { firstName: 'Emily', lastName: 'Davis', age: 26 },
    { firstName: 'William', lastName: 'Taylor', age: 33 },
    { firstName: 'Daniel', lastName: 'Williams', age: 39 },
    { firstName: 'Sarah', lastName: 'Smith', age: 31 },
    { firstName: 'Michael', lastName: 'Wilson', age: 37 },
    { firstName: 'David', lastName: 'Johnson', age: 42 },
    { firstName: 'James', lastName: 'Brown', age: 39 },
    { firstName: 'Emily', lastName: 'Davis', age: 27 },
    { firstName: 'William', lastName: 'Taylor', age: 34 },
    { firstName: 'Daniel', lastName: 'Williams', age: 40 },
    { firstName: 'Sarah', lastName: 'Smith', age: 32 },
    { firstName: 'Michael', lastName: 'Wilson', age: 38 },
    { firstName: 'David', lastName: 'Johnson', age: 44 },
    { firstName: 'James', lastName: 'Brown', age: 40 },
    { firstName: 'Emily', lastName: 'Davis', age: 28 },
    { firstName: 'William', lastName: 'Taylor', age: 35 },
    { firstName: 'Daniel', lastName: 'Williams', age: 41 },
    { firstName: 'Sarah', lastName: 'Smith', age: 33 },
    { firstName: 'Michael', lastName: 'Wilson', age: 39 },
    { firstName: 'David', lastName: 'Johnson', age: 45 },
    { firstName: 'James', lastName: 'Brown', age: 41 },
    { firstName: 'Alex', lastName: 'Clark', age: 29 },
    { firstName: 'Ava', lastName: 'Martin', age: 26 },
    { firstName: 'Ethan', lastName: 'Young', age: 31 },
    { firstName: 'Mia', lastName: 'Allen', age: 33 },
    { firstName: 'Oliver', lastName: 'King', age: 29 },
    { firstName: 'Sophia', lastName: 'Wright', age: 31 },
    { firstName: 'Liam', lastName: 'Green', age: 36 },
    { firstName: 'Charlotte', lastName: 'Hall', age: 29 },
    { firstName: 'Noah', lastName: 'Thompson', age: 33 },
    { firstName: 'Isabella', lastName: 'Turner', age: 27 },
    { firstName: 'William', lastName: 'Turner', age: 34 },
    { firstName: 'Avery', lastName: 'Jones', age: 36 },
    { firstName: 'Caleb', lastName: 'Wright', age: 29 },
    { firstName: 'Evelyn', lastName: 'Brown', age: 33 },
    { firstName: 'Mason', lastName: 'Miller', age: 29 },
    { firstName: 'Aria', lastName: 'Young', age: 36 },
    { firstName: 'Lucas', lastName: 'Taylor', age: 33 },
    { firstName: 'Aurora', lastName: 'Johnson', age: 31 },
  ];
  peopleToShow: bla[] = [];

  ngAfterViewInit() {
    this.peopleToShow = this.people.slice(0, this.step);
    const scrollStream = fromEvent(this.container?.nativeElement, 'scroll');
    scrollStream.pipe(delay(500)).subscribe(() => {
      if (
        this.container?.nativeElement.scrollTop +
          this.container?.nativeElement.offsetHeight >=
        this.container?.nativeElement.scrollHeight
      ) {
        this.loadMore();
      }
    });
  }

  loadMore() {
    this.step += 10;
    this.peopleToShow = this.people.slice(0, this.step);
  }

  scroled() {
    // console.log('scrolled down by:', this.container?.nativeElement.scrollTop);
    // console.log(
    //   'height of the container:',
    //   this.container?.nativeElement.offsetHeight
    // );
    // console.log(
    //   'available height for scrolling:',
    //   this.container?.nativeElement.scrollHeight
    // );
  }
}
