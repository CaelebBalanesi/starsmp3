import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { ServiceTsService } from 'src/app/services/service.ts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: ServiceTsService) {}

  ngOnInit(){
      this.service.getAllPosts()
        .then(resp => this.posts = resp)
        .then(() => console.log(this.posts))
        .catch(err => console.error(err));
  }

  posts!: Post[];
  date!: number;

}
