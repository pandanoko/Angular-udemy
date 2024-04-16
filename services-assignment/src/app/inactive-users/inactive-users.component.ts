import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/usersService.service';
//import { CounterService } from '../shared/counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  //inactiveToActiveCounter: number;

  constructor(
    private usersService: UsersService,
    //private counterService: CounterService
  ) {}

  ngOnInit(): void {
    this.users = this.usersService.inactiveUsers;
    //this.inactiveToActiveCounter = this.counterService.inactiveToActiveCounter;
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
    //this.counterService.incrementInactiveToActive();
  }
}
