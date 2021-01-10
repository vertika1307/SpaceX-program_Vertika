import { Component } from '@angular/core';
import spaceData from './spaceitems.json';

interface Space {
  mission_name: String;
  launch_year: any;
  launch_success: any;
  links:any;
  flight_number:any;


}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';


  spaceitems: Space[] = spaceData;
  clickHandler(){
    let launch_year= "2008";
  this.spaceitems=[];

    let arrayB = spaceData.filter((item)=>{
        if(item.launch_year == launch_year)
         console.log('arrayB',arrayB)
    })

   
      }

  }

