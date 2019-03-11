import { GithubService } from './githubservice.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-section9-lab',
  templateUrl: './section9-lab.component.html',
  styleUrls: ['./section9-lab.component.css']
})
export class Section9LabComponent implements OnInit {

  posts: any;

  constructor(private service: GithubService) { }

  ngOnInit() {

    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
        console.log(this.posts);
      });
  }

}
