import { Component } from '@angular/core';
import { NamesService } from '../names.service';

@Component({
  selector: 'app-list-name',
  templateUrl: './list-name.component.html',
  styleUrls: ['./list-name.component.css']
})
export class ListNameComponent {
// variable that will list the names
  constructor(public namesService : NamesService){}
}
