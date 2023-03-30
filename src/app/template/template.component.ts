import { Component } from '@angular/core';
import { faBurger, faCoffee} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  faBurger = faBurger;
  faCoffee = faCoffee;
}
