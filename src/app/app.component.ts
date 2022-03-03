import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'property-binding-1';
  setMeUp: boolean = true;
  name: string = 'Kwabena';
  id: number = 1;
  data: any = []
  data_bool_result: boolean = true;
  
  constructor() {
    this.setMeUp = false;
  }
  
  ngOnInit(): void {
    console.log(this.setMeUp.valueOf())
    this.getData()
  }

  // data from backend api

  getData(): any {
    this.data = [
      {
      name: 'Kwabena',
      group: 'TLC-3',
      bool_result: true
    },
    {
      name: 'Linda',
      group: 'TLC-4',
      bool_result: false
    },
    {
      name: 'Jasmine',
      group: 'TLC-2',
      bool_result: true
    }
  ]

  console.log(this.data)
  }

  btnClick(): void {
    //do something
    alert(`You clicked this button ${this.id++}`)
    //collect form data, submit to an API
    // and possibly process results
  }

  inputClick() {
    console.log('Clicked on input element')
  }



}
