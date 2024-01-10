import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayOperationService {
  private array: any[] = [];

  getArray(): any[] {
    return this.array;
  }

  addItem(item: any): void {
    this.array.push(item);
  }

  updateItem(index: number, newItem: any): void {
    if (index >= 0 && index < this.array.length) {
      this.array[index] = newItem;
    }
  }

  deleteItem(index: number): void {
    if (index >= 0 && index < this.array.length) {
      this.array.splice(index, 1);
    }
  }
}
