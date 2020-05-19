import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import { Hero} from '../hero';
import {ChangeDetectionService} from '../change-detection.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  start = 1;
  end;
  constructor(private heroService: HeroService, private changeDetectionService: ChangeDetectionService) { }

  ngOnInit() {
    this.changeDetectionService.getValue().subscribe( val =>{
      this.end = val;
    })
    this.getHeroes(this.start, this.end);
    console.log(this.end);
  }

  getHeroes(start: number, end: number): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(start, end));
  }
}
