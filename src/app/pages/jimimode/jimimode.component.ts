import { Component } from '@angular/core';
import { FileUpload } from 'src/app/interfaces/file-upload';
import { ServiceTsService } from 'src/app/services/service.ts.service';
import { Product } from 'src/app/interfaces/product';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-jimimode',
  templateUrl: './jimimode.component.html',
  styleUrls: ['./jimimode.component.scss']
})
export class JimimodeComponent {
  constructor(private service: ServiceTsService) {}

  uploadNewProduct(title: string, date: string, price: string, description: string, files: FileList | null){
    let product: Product = {
      title: title,
      date: date,
      price: price,
      description: description,
      files: {},
    };
    let fileStorage: String[] = [];
    if(files != null){
      for(var i = 0; i < files?.length; i++){
        var fileUpload: FileUpload = new FileUpload(files[i]);
        this.service.pushFileToStorage(fileUpload);
        fileStorage.push(files[i].name);
      };
    }
    product.files = fileStorage;
    this.service.uploadNewProduct(product);
  }

  uploadNewPost(title: string, body: string, file: FileList | null){
    if(file != null && file[0] != null){
      let fileUpload: FileUpload = new FileUpload(file[0]);
      this.service.pushFileToStorage(fileUpload);
      let post: Post = {title: title, body: body, src: file[0].name, date: Date.now() };
      this.service.uploadNewPosts(post);
    }
  }

  uploadFile(file: FileList | null){
    if(file != null && file[0] != null){
      let fileUpload: FileUpload = new FileUpload(file[0]);
      this.service.pushFileToStorage(fileUpload);
    }
  }

  listFiles(){
    console.log(this.service.getFiles(10).snapshotChanges());
  }

}
