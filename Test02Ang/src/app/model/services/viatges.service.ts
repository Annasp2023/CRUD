import { Injectable } from '@angular/core';
import { IViatge } from '../models/viatge';

@Injectable({
  providedIn: 'root',
})
export class ViatgesService {
  viatges: IViatge[] = [];

  constructor() {}

  getViatges() {
    return this.viatges;
  }

  setViatges(viatge: IViatge): void {
    this.viatges.push(viatge);
  }

  getViatgeById(i: number): IViatge {
    return this.viatges[i];
  }
}
