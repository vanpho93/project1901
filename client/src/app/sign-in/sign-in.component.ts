import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  formSignIn: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.formSignIn = this.fb.group({
      email: ['teo@gmail.com', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  signIn() {
    const { email, password } = this.formSignIn.value;
    this.userService.signIn(email, password);
  }
}
