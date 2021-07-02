import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-axis',
  templateUrl: './axis.component.html',
  styleUrls: ['./axis.component.css']
})
export class AxisComponent  {

 LoginID=true;
 Debitcard=false;
 mPIN = false;
 login(choice:any)
 {
   this.LoginID=false;
   this.Debitcard=false;
   this.mPIN=false;
    if(choice==1){
      this.LoginID=true;
    }
    else if(choice==2)
    {
      this.Debitcard=true;
    }
    else if(choice ==3)
    {
      this.mPIN=true;
    }
   
 }
  
}
