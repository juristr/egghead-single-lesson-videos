import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person, PeopleService } from '../people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: Observable<Person[]>;

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.initList();
  }

  initList() {
    this.people = this.peopleService.getPeople();
  }

  onFetchPeople() {
    this.initList();
  }

  onForceReload() {
    this.peopleService.forceReload();
    this.initList();
  }
}
