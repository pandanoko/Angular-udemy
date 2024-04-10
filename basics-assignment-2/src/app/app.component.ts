import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = '';
  displayedName= '';
  //isButtonDisabled = this.userName.length > 0 ? false : true;

  onSubmitName() {
    this.displayedName = this.userName ;
    this.userName = '';
  }
}
