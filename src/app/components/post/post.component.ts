import { Component, Input, OnInit } from '@angular/core';
import { ServiceTsService } from 'src/app/services/service.ts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() body!: string;
  @Input() date!: number;
  @Input() title!: string;
  @Input() src!: string;
  loaded: boolean = false;

  constructor(private service: ServiceTsService) {}

  ngOnInit(){
    this.service.getFileFromName(this.src)
      .then(resp => this.src = resp[0].url)
      .then(() => this.loaded = !this.loaded)
      .catch(err => console.error(err));
  }

}
