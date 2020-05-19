import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeDetectionService {
  private routerInfo: BehaviorSubject<number>;
  constructor() {
    this.routerInfo = new BehaviorSubject<number>(5);
  }
  setValue(newValue): void {
    this.routerInfo.next(newValue);
  }
  getValue(): Observable<number> {
    return this.routerInfo.asObservable();
  }

}
