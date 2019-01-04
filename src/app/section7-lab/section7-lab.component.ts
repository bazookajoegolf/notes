import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-section7-lab',
  templateUrl: './section7-lab.component.html',
  styleUrls: ['./section7-lab.component.css']
})
export class Section7LabComponent {

  category = [
    {id:"1", name : "Development"},
    {id:"2", name : "Arts"},
    {id:"3", name : "Language"}
  ]

  log(v) {
    console.log(v.value);
  }

  showData(d) {
   
    alert(`Chosen Course: ${d.name}  Category: ${d.Category}  Guarantee: ${d.guarantee}`);
  }

}
