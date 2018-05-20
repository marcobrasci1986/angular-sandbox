import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Person} from '../person.component';

/**
 * @Input only re-evaluates when a new reference is created with OnPush.
 */
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  @Input()
  person: Person;

  constructor() {
  }

  ngOnInit() {
  }

}
