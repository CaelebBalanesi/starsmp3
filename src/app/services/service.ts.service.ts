import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database'
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FileUpload } from '../interfaces/file-upload';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ServiceTsService {

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }

  getAllProducts(){
    return new Promise<any>((resolve) => {
      this.db.list('products').valueChanges().subscribe(products => resolve(products));
    })
  }

  getFileFromName(name: string){
    return new Promise<any>((resolve) => {
      this.db.list('/files', ref =>
      ref.orderByChild("name").equalTo(name)).valueChanges()
      .subscribe(url => resolve(url))})
  }

  pushFileToStorage(fileUpload: FileUpload): Observable<number | undefined>{

    const filePath = `/files/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          this.saveFileData(fileUpload);
        });
      })
    ).subscribe();
    return uploadTask.percentageChanges();
  }

  uploadNewProduct(product: Product): void{
    this.db.list('/products').push(product);
  }

  private saveFileData(fileUpload: FileUpload): void {
    this.db.list('/files').push(fileUpload);
  }

  getFiles(numberItems: number): AngularFireList<FileUpload> {
    return this.db.list('/files', ref =>
      ref.limitToLast(numberItems)
    );
  }


  deleteFile(fileUpload: FileUpload): void {
    this.deleteFileDatabase(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.error(error));
  }

  private deleteFileDatabase(key: string){
    return this.db.list('/files').remove(key);
  }

  private deleteFileStorage(name: string){
    const storageRef = this.storage.ref("/files");
    storageRef.child(name).delete();
  }
}
