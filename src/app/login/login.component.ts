import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="your perfect banking partner"
  account="enter your acno here"
  acno="";
pswd="";
userDetails:any={
  1000:{acno:1000,username:"allwin",password:1000,balance:10000},
  1001:{acno:1001,usernmae:"faya",password:1001,balance:10000},
  1002:{acno:1002,username:"jishn",password:1002,balance:10000},
}
  constructor() { }

  ngOnInit(): void {
  }



////user defined functions 4th
acnoChange(event:any){
this.acno=(event.target.value);
console.log(this.acno)
}
pswdChange( event:any){
  this.pswd=(event.target.value)
  console.log(this.pswd)
}

login(){
  var acno=this.acno;
  var pswd=this.pswd;
  var userDetails=this.userDetails;
  if(acno in userDetails){
    if(pswd==userDetails[acno]['password'])
    {
      alert('login successful')
    }
    else{
      alert('incorrect password')
    }
  }
  else{
    alert('user not found')
  }
}
}