import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService} from '../hero.service';
import { MessageService } from '../message.service';
import { ChangeDetectionService } from '../change-detection.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService,
              private messageService: MessageService,
              private changeDetectionService: ChangeDetectionService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });

    let newNumberOfHeroes;
    this.changeDetectionService.getValue().subscribe((val => {
      newNumberOfHeroes = val;
    }))

    this.changeDetectionService.setValue(newNumberOfHeroes + 1);
    console.log(newNumberOfHeroes);
  }

  delete(hero: Hero) {
    this.heroes = this.heroes.filter(h => h != hero); // but component needs to delete a hero from component's list
    this.heroService.deleteHero(hero).subscribe(); // service deletes hero from backend
  }

}
