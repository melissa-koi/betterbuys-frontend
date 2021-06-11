import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  input: any;
  constructor(private loginservice:LoginService) { }

  ngOnInit(): void {
    this.input = {
      username: '',
      password: '',
    }
  }
  loginUser() {
    this.loginservice.loginUser(this.input).subscribe(
      response => {
        console.log(response)
        alert(this.input.username + 'logged in successfully')
      },
      error => {
        console.log('error', error)
        alert('Incorrect Credentials')
      }
    );
  }
}
