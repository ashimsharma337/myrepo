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
  obj={
    name: "Peter",
    age: 20
  }
  arr=["bruce", "peter", "ashim"];
  a=5;
  b=3;
}
