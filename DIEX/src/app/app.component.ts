import { LoggerService } from './logger.service';
import { Component } from '@angular/core';
import { TimeService } from './time.service';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    TimeService,
    LoggerService,
    StudentService
  ]
})
export class AppComponent {

  student: any[] = [];
  stringvar: string = ""

  title = 'DI_Example';
  private _studentService: StudentService;

  constructor(private _timeService: TimeService, private _logger: LoggerService, studentService: StudentService) {
    _timeService.displayTime();
    this._studentService = studentService;
  }

  logMessage(event: any, message: string): void {
    event.preventDefault();
    this._logger.addLog(`Message: ${message}`);
  }

  clearLog(): void {
    this._logger.clear();
  }

  ngOnInit() {
    this.student = this._studentService.getStudent();
    this.stringvar = this._studentService.getname();
  }



}



