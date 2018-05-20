import {Component, OnInit} from '@angular/core';


export interface PersonProperties {
  name: string;
  age: number;
}

export class Person implements PersonProperties {

  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

}

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  person: Person = new Person('John', 20);

  constructor() {
  }

  ngOnInit() {
  }

  changeName() {
    console.log('Show person');
    // Non immutable way
    this.person.name = 'Marco';

    // this.person = new Person('Marco', 32);
  }
}
