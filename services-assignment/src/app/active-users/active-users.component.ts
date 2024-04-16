import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../shared/usersService.service';
//import { CounterService } from '../shared/counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  //activeToInactiveCounter: number;

  constructor(
    private usersService: UsersService,
    //private counterService: CounterService
  ) {}

  ngOnInit(): void {
    this.users = this.usersService.activeUsers;
    //this.activeToInactiveCounter = this.counterService.activeToInactiveCounter;
  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
    //this.counterService.incrementActiveToInactive();
  }
}
