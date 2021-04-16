import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    
  }

  // login(username,password){

  // }
  onSubmit() {
    alert("ddf")
  }

  registerUser(form: NgForm) {
    alert("vhgg")
    alert(JSON.stringify(form.value));
    alert(JSON.stringify(form.value.name));
    // {email: '...', password: '...'}
    // ... <-- now use JSON.stringify() to convert form values to json.
  }
}

