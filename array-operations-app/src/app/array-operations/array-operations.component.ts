import { Component } from '@angular/core';
import { ArrayOperationService } from '../array-operation.service';

@Component({
  selector: 'app-array-operations',
  templateUrl: './array-operations.component.html',
  styleUrls: ['./array-operations.component.css']
})
export class ArrayOperationsComponent {
  array: any[] = [];
  newItem: any = '';
  updateIndex: number = -1;
  updatedItem: any = '';

  constructor(private arrayOperationService: ArrayOperationService) {
    this.array = this.arrayOperationService.getArray();
  }

  addItem(): void {
    this.arrayOperationService.addItem(this.newItem);
    this.newItem = '';
  }

  updateItem(): void {
    if (this.updateIndex >= 0) {
      this.arrayOperationService.updateItem(this.updateIndex, this.updatedItem);
      this.updateIndex = -1;
      this.updatedItem = '';
    }
  }

  deleteItem(index: number): void {
    this.arrayOperationService.deleteItem(index);
  }
}