import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {
  private heading1Source = new BehaviorSubject<string>('Dealer'); 
  heading1$ = this.heading1Source.asObservable();

  private heading2Source = new BehaviorSubject<string>('Customer'); 
  heading2$ = this.heading2Source.asObservable();

  setHeading1(heading: string) {
    this.heading1Source.next(heading);
  }

  setHeading2(heading: string) {
    this.heading2Source.next(heading);
  }
}
