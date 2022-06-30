import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AccountsService } from '../../services/accounts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private accountsServiceRef:AccountsService, private routeService:Router) { 

  }
  
  ngOnInit(): void {
  }
  userName:string="";
  password:string="";

  onSubmitClicked(formGroup:FormGroup){
    if(formGroup.valid){
      //userObj construction
      let userObj = {userName:this.userName,password:this.password};
      this.accountsServiceRef.validateUser(userObj).subscribe(
        (data:any)=>{
              if(data.message=="Valid Credentials"){
                //logging to console
                console.log("User is Authenticated");
                this.routeService.navigate(['maindashboard']);
              }
              else {console.log("Invalid Credentials!")}
      });          
    }  
  }

  
  onClear(formGroup:FormGroup){
    formGroup.reset();
  }
}
