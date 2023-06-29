import { Component, Input, OnInit } from '@angular/core';
import { ServiceTsService } from 'src/app/services/service.ts.service';

@Component({
  selector: 'app-cd-post',
  templateUrl: './cd-post.component.html',
  styleUrls: ['./cd-post.component.scss']
})
export class CdPostComponent implements OnInit {

  @Input() body!: string;
  @Input() date!: number;
  @Input() title!: string;
  @Input() src!: string;
  loaded: boolean = false;
  link!: string;

  constructor(private service: ServiceTsService) {}

  ngOnInit(){
    this.service.getFileFromName(this.src)
      .then(resp => {
        this.link = resp[0].url;
      })
      .then(() => this.loaded = !this.loaded)
      .catch(err => console.error(err));
  }

}
