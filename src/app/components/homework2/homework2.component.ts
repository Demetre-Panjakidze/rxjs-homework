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
    { id: 1, jobId: 1, name: 'John', lastname: 'Doe' },
    { id: 2, jobId: 5, name: 'Jane', lastname: 'Doe' },
    { id: 3, jobId: 9, name: 'Bob', lastname: 'Smith' },
    { id: 4, jobId: 6, name: 'Alice', lastname: 'Johnson' },
    { id: 5, jobId: 3, name: 'Charlie', lastname: 'Brown' },
    { id: 6, jobId: 6, name: 'Eve', lastname: 'Miller' },
    { id: 7, jobId: 7, name: 'Mallory', lastname: 'Davis' },
    { id: 8, jobId: 10, name: 'Peggy', lastname: 'Wilson' },
    { id: 9, jobId: 2, name: 'Victor', lastname: 'Taylor' },
    { id: 10, jobId: 5, name: 'Oscar', lastname: 'Anderson' },
    { id: 11, jobId: 7, name: 'Alex', lastname: 'Thomas' },
    { id: 12, jobId: 4, name: 'Ava', lastname: 'Moore' },
    { id: 13, jobId: 8, name: 'Eli', lastname: 'Jackson' },
    { id: 14, jobId: 10, name: 'Lila', lastname: 'Martin' },
    { id: 15, jobId: 1, name: 'Nina', lastname: 'Lee' },
    { id: 16, jobId: 2, name: 'Ella', lastname: 'Harris' },
    { id: 17, jobId: 8, name: 'Sofia', lastname: 'Young' },
    { id: 18, jobId: 9, name: 'Aria', lastname: 'Allen' },
    { id: 19, jobId: 6, name: 'Evelyn', lastname: 'King' },
    { id: 20, jobId: 7, name: 'Isabelle', lastname: 'Wright' },
  ];

  ngOnInit() {
    this.getPeople(['Business Analyst', 'Project Manager']).subscribe(
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
