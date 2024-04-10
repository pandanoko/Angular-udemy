import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    .highlight {
      color: white;
    }
  `]
})
export class AppComponent {
  paragraphIsVisible = false;
  clickLogs = [];

  toggleVisibility() {
    this.paragraphIsVisible = !this.paragraphIsVisible;
    //this.clickLogs.push(this.clickLogs.length + 1);
    this.clickLogs.push(new Date());
  }
}
