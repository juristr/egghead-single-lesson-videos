import { Component, OnInit } from '@angular/core';
import { PeopleService, Person } from './people.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Caching with RxJS';
  visible = true;
}
