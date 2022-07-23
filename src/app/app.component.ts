import { Component } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';

export interface User{
  username:String;
  password:String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'ReactiveForm';
  user: User={
    username: '',
    password: '',
  }
  
  constructor() {
    this.user = {} as User;
  }

  myForm= new FormGroup({
    username: new FormControl(this.user.username,[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15)
    ]),

    password: new FormControl(this.user.password,[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15)

    ])
  });

  get username() {
    return this.myForm.get('username')
  }
  get password() {
    return this.myForm.get('password')
  }









}





