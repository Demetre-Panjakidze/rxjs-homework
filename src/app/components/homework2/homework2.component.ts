import { Component } from '@angular/core';
import { Observable, of, from, map, filter } from 'rxjs';
import { Job, Person } from 'src/app/interfaces/IHomework';

@Component({
  selector: 'app-homework2',
  templateUrl: './homework2.component.html',
  styleUrls: ['./homework2.component.scss'],
})
export class Homework2Component {
  jobs: Job[] = [
    { id: 1, name: 'Software Engineer' },
    { id: 2, name: 'Product Manager' },
    { id: 3, name: 'Data Scientist' },
    { id: 4, name: 'Designer' },
    { id: 5, name: 'DevOps Engineer' },
    { id: 6, name: 'QA Engineer' },
    { id: 7, name: 'Project Manager' },
    { id: 8, name: 'Business Analyst' },
    { id: 9, name: 'IT Support' },
    { id: 10, name: 'Full Stack Developer' },
  ];

  people: Person[] = [
    { id: 1, jobId: 10, name: 'Demetre', lastname: 'Panjakidze' },
    { id: 2, jobId: 1, name: 'John', lastname: 'Doe' },
    { id: 3, jobId: 5, name: 'Jane', lastname: 'Doe' },
    { id: 4, jobId: 9, name: 'Bob', lastname: 'Smith' },
    { id: 5, jobId: 6, name: 'Alice', lastname: 'Johnson' },
    { id: 6, jobId: 3, name: 'Charlie', lastname: 'Brown' },
    { id: 7, jobId: 6, name: 'Eve', lastname: 'Miller' },
    { id: 8, jobId: 7, name: 'Mallory', lastname: 'Davis' },
    { id: 9, jobId: 10, name: 'Peggy', lastname: 'Wilson' },
    { id: 10, jobId: 2, name: 'Victor', lastname: 'Taylor' },
    { id: 11, jobId: 5, name: 'Oscar', lastname: 'Anderson' },
    { id: 12, jobId: 7, name: 'Alex', lastname: 'Thomas' },
    { id: 13, jobId: 4, name: 'Ava', lastname: 'Moore' },
    { id: 14, jobId: 8, name: 'Eli', lastname: 'Jackson' },
    { id: 15, jobId: 10, name: 'Lila', lastname: 'Martin' },
    { id: 16, jobId: 1, name: 'Nina', lastname: 'Lee' },
    { id: 17, jobId: 2, name: 'Ella', lastname: 'Harris' },
    { id: 18, jobId: 8, name: 'Sofia', lastname: 'Young' },
    { id: 19, jobId: 9, name: 'Aria', lastname: 'Allen' },
    { id: 20, jobId: 6, name: 'Evelyn', lastname: 'King' },
  ];

  ngOnInit() {
    this.getPeople(['Full Stack Developer', 'Project Manager']).subscribe(
      console.log
    );
  }

  getPeople(jobs: string[]) {
    const jobID = jobs.map(
      (jobName) => this.jobs.findIndex((job) => job.name == jobName) + 1
    );
    return from(this.people).pipe(
      filter((person) => jobID.includes(person.jobId)),
      map((filteredPerson) => {
        const job = this.jobs.find((job) => job.id === filteredPerson.jobId);
        return `${filteredPerson.name} ${filteredPerson.lastname} is a ${job?.name}`;
      })
    );
  }
}
