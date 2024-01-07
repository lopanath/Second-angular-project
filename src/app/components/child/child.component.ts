import { Component, EventEmitter, Input, OnChanges, Output, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnChanges {
  // @Input() loggedIn: boolean; //if we put true the output will be welcome back
  private _loggedIn:boolean;
  msg:string;


ngOnChanges(changes:SimpleChanges):void{
  console.log(changes);


}




// getter & setter

  get loggedIn():boolean{
    return this._loggedIn;
  }
  @Input()
  public set loggedIn(v:boolean)
  {
    this._loggedIn=v;
    if(v === true)
    {
      this.msg="Welcome Back";
    }
    else
       this.msg="Please login";
  }


  //To acess child var and method in parent

  name="lopa";
greetLopa()
{
  alert("Hello");
}


//Child Component will acess the parent component method

username="Mukti";

@Output()greetEvent=new EventEmitter();

callParentGreetFromChild()
{
   this.greetEvent.emit(this.username);
}





}



