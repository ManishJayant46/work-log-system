// src/app/data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data = [
    { id: '1', title: 'Card 1', description: 'This is the description for card 1.' },
    { id: '2', title: 'Card 2', description: 'This is the description for card 2.' },
    { id: '3', title: 'Card 3', description: 'This is the description for card 3.' },
    { id: '4', title: 'Card 4', description: 'This is the description for card 4.' },
    { id: '5', title: 'Card 5', description: 'This is the description for card 5.' },
    { id: '6', title: 'Card 6', description: 'This is the description for card 6.' },
    { id: '7', title: 'Card 7', description: 'This is the description for card 7.' },
    { id: '8', title: 'Card 8', description: 'This is the description for card 8.' },
    { id: '9', title: 'Card 9', description: 'This is the description for card 9.' }
  ]; 

  constructor() {}

  getData() {
    return this.data;
  }

  getCardById(id: string) {
    return this.data.find(item => item.id === id);
  }
}
