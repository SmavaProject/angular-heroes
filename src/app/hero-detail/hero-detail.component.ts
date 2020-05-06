import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  heroesFriends: Hero[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getHero();
    this.getHeroesFriends();
  }

  getHero(): void{
    const id = +this.route.snapshot.paramMap.get('id'); // + to convert Srt to Int
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  getHeroesFriends(): void{
    //const id = +this.route.snapshot.paramMap.get('id'); // + to convert Srt to Int
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroesFriends = heroes);
  }

  goBack(): void{
    this.location.back();
  }
  save(): void{
    this.heroService.updateHero(this.hero)
      .subscribe( () => this.goBack());
  }

  showFriends(): void{
    console.log("here are the friends");
  }
}
