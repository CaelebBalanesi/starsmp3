import { Component, Input, OnInit } from '@angular/core';
import { ServiceTsService } from 'src/app/services/service.ts.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(private service: ServiceTsService) {}

  ngOnInit() {
    this.service.getFileFromName(this.files[0])
      .then(data => this.src = data[0].url);
  }

  @Input() title!: string;
  @Input() price!: string;
  @Input() date!: string;
  @Input() itemid!: string;
  @Input() files: any;
  src!: string;
}
