import { Component } from '@angular/core';
import { UsersService } from './shared/usersService.service';
import { CounterService } from './shared/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService, CounterService]
})
export class AppComponent {
}
