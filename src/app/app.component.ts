import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent implements AfterViewInit {
  title = 'secondangularproject';

  //userLoggedIn=false;

  userloggedIn:boolean;

  //Trying to acces child methods in parent --method 2

  @ViewChild(ChildComponent)ChildComponentRef:ChildComponent
ngAfterViewInit():void
{
  //this.ChildComponentRef.name="Kanika";
}

//Child Component will acess the parent component method

greetMe(val:string)
{
  alert("Hii.."+val);
}




}



