import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-section8-lab',
  templateUrl: './section8-lab.component.html',
  styleUrls: ['./section8-lab.component.css']
})
export class Section8LabComponent  {

  form = new FormGroup({
    username: new FormControl(),
    passowrd: new FormControl()
  });

}
