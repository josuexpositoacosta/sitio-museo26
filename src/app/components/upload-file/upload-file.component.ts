import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent1 implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  onUploadFinish(event : Event) {
    console.log(event);
   }

}
