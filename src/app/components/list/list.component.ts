import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/service.index';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  myImages: any ;

  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages(){
    this.uploadService.getImages().subscribe(data =>{
      console.log("los datos de las Imágenes: ", data)
      this.myImages = data
    })
  }

}
