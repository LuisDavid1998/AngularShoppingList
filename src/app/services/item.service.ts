import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [
    {
      id: 0,
      title: 'Apple',
      price: 10.5,
      quantity: 4,
      completed: false
    },
    {
      id: 1,
      title: 'Bread',
      price: 3.5,
      quantity: 8,
      completed: true
    },
    {
      id: 2,
      title: 'Jacket',
      price: 300,
      quantity: 1,
      completed: false
    },
    {
      id: 3,
      title: 'Xbox',
      price: 3000,
      quantity: 1,
      completed: true
    },
    {
      id: 4,
      title: 'Juice',
      price: 5,
      quantity: 6,
      completed: false
    },
    {
      id: 5,
      title: 'Orange',
      price: 7.5,
      quantity: 10,
      completed: false
    },
    {
      id: 6,
      title: 'Jam',
      price: 14,
      quantity: 3,
      completed: true
    },
    {
      id: 7,
      title: 'Cake',
      price: 150,
      quantity: 2,
      completed: false
    },
    {
      id: 8,
      title: 'Laptop',
      price: 700,
      quantity: 1,
      completed: false
    }
  ];

  constructor() { }

  getItems(){
    return this.items;
  }

  addItem(item: Item){
    this.items.unshift(item);
  }
}
