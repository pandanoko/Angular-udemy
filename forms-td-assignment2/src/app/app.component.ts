import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') myForm: NgForm;
  options = ["basic", "advanced", "pro"];
  defaultOption = "advanced";
  user = {
    email: "",
    plan: "",
    password: ""
  }
  submitted = false;
  //onSubmit(element: HTMLFormElement) { senza viewChild
  //  console.log(element)
  //}
  suggestPassword() {
    const suggestedPassword = "Martinini";
    this.myForm.form.patchValue({
      password: suggestedPassword
    })
  }
  onSubmit() {
    this.submitted= true;
    this.user.email = this.myForm.value.email;
    this.user.plan = this.myForm.value.subscription;
    this.user.password = this.myForm.value.password;
    this.myForm.reset();
    console.log(
      this.myForm
    )
  }
}
