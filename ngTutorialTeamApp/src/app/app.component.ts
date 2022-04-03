import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtube tutorial';
  name = "Ashim Sharma";
  getName () {
    return this.name;
  }
  callMe(){
    alert ("You just call a function"+" "+this.newName);
  }
  newName= "ashim";
  obj={
    name: "Peter",
    age: 20
  }
  arr=["bruce", "peter", "ashim"];
  a=5;
  b=3;
}
