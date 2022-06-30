import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],  
})
export class LoginComponent implements OnInit {


  constructor() { }
  
  ngOnInit(): void {
  }
  userName:string="";
  password:string="";

  onSubmitClicked(formGroup:FormGroup){
    if(formGroup.valid){
      //redirect to next page
    }  
  }

  onClear(formGroup:FormGroup){
    formGroup.reset();
  }
}
