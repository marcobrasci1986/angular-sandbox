import {Component, OnInit} from '@angular/core';
import {Hero} from '../heroes/hero';
import {HeroService} from '../hero.service';
import {ActivatedRoute, Params} from '@angular/router';
import deepFreeze = require('deep-freeze');

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getHeroes();
    console.log('Init dashboard');

    // subscribe to router event
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      const counter = params['counter'];
      console.log(`counter is ${counter}`);
    });


    this.testDeepFreeze();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  testDeepFreeze() {
    const movie = {
      name: 'MI6',
      actors: ['tom cruise', 'tim johnson']
    };

    deepFreeze(movie);
    movie.actors.push('test');


    console.log('movie: ', movie);

  }
}
