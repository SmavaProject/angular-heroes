import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';
import { HeroService } from '../hero.service';

@Directive({
  selector: '[appHeroesDirective]'
})
export class HeroesDirective implements OnInit{
  constructor(private heroService: HeroService) {
  }
  ngOnInit(): void {
    const date = new Date();
    this.heroService.dummyFuntion(date);
  }
}
