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

  uploadNewProduct(title: string, date: string, price: string, description: string, coverImage: FileList | null, fillerImages: FileList | null, shopLink: string){
    let product: Product = {
      title: title,
      date: date,
      price: price,
      description: description,
      cover: "",
      filler: [],
      shopLink: shopLink,
    };
    if(coverImage != null){
      this.service.pushFileToStorage(new FileUpload(coverImage[0]));
      product.cover = coverImage[0].name;
      var filesBundle = [];
      if(fillerImages?.length != null){
        for(var i = 0; i < fillerImages?.length; i++){
          this.service.pushFileToStorage(new FileUpload(fillerImages[i]));
          filesBundle.push(fillerImages[i].name);
        };
      }
      product.filler = filesBundle;
    }
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

  test(){
    this.service.signIn();
  }

}
