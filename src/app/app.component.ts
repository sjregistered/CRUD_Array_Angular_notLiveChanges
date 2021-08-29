import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title=" LOG-IN PORTAL - VERIFICATION REQUIRED :: Kindly fill in the details.";
  constructor(private _router: Router) { }

  email : string;
  password : string;
  status : boolean;

  loginUser(){
    if(this.email == "sjregistered@gmail.com" && this.password == "123456789"){
      this._router.navigateByUrl('/crud');
      this.status = true;
    }
    
    else{
      console.warn("INVALID USER ENTRY :: Authentication DENIED.");
      this.status = false;
    }

    this.email = "";
    this.password = "";
  }
}
