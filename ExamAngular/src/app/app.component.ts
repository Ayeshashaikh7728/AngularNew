

// app.component.ts
import { Component } from '@angular/core';

interface Employee {
  id: number;
  name: string;
  salary: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees: Employee[] = [
  //   { id: 1, name: 'John Doe', salary: 50000 },
  //   { id: 2, name: 'Jane Doe', salary: 60000 },
  //   // Add more initial employees as needed
  ];

  newEmployee: Employee = { id: 0, name: '', salary: 0 };
  editing = false;
  selectedEmployee: Employee = { id: 0, name: '', salary: 0 };

  addEmployee() {
    this.newEmployee.id = this.employees.length + 1;
    this.employees.push({ ...this.newEmployee });
    this.newEmployee = { id: 0, name: '', salary: 0 };
  }

  editEmployee(employee: Employee) {
    this.editing = true;
    this.selectedEmployee = { ...employee };
  }

  updateEmployee() {
    const index = this.employees.findIndex(e => e.id === this.selectedEmployee.id);
    this.employees[index] = { ...this.selectedEmployee };
    this.editing = false;
    this.selectedEmployee = { id: 0, name: '', salary: 0 };
  }

  cancelEdit() {
    this.editing = false;
    this.selectedEmployee = { id: 0, name: '', salary: 0 };
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter(e => e.id !== id);
  }
}
