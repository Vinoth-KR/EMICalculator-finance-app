import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SingUpComponent implements OnInit {

  userName:string="";
  email:string="";
  password:string=""; 


  constructor() { }

  ngOnInit(): void {
  }
  onSignupClicked(formGroup:FormGroup){

    if(formGroup.valid){
      //Sign-Up the user to the platform
    }
  }

  onClear(formGroup:FormGroup){
    formGroup.reset();
  }

}
