import { Component, OnInit } from '@angular/core';
import {RegisterService } from '../../services/register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  input: any;

  constructor(private registerservice:RegisterService) { }

  ngOnInit(): void {
    this.input = {
      username: '',
      email: '',
      password: '',
    }
  }
  registerUser() {
    this.registerservice.registerUser(this.input).subscribe(
      response => {
        alert(this.input.username + 'has been created')
      },
      error => console.log('error', error)
    );
  }

}

