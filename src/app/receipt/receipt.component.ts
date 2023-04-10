import { Component, Input } from '@angular/core';
import { NamesService } from '../names.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent {
  @Input() dataEntrante:any;
  items = this.namesService.getItems()

  constructor(
    private namesService: NamesService
  ) { }

}
