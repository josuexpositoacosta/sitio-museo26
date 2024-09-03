import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadService } from 'src/app/services/service.index';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
   
   imageFrom!: FormGroup;
   image: any = "../assets/upload.png"
   file: any;
 
  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
    this.imageFrom = new FormGroup({
      name: new FormControl(null,Validators.required),
      file: new FormControl(null,Validators.required)
    })
  }

  onFileChange(event : Event){
    let reader = new FileReader();
    const target = event.target as HTMLInputElement;
    const archivo = target.files as unknown as File;
     if(target.files && target.files.length > 0){
       const file = target.files[0];
       if(file.type.includes('image')){
        // const reader = new  FileReader();
         reader.readAsDataURL(file);  

         reader.onload  = function load(this: any){
           this.image = reader.result;
         }.bind(this)  

         this.file = file;
       }else{
        console.log('este es el error');
       }
     }
  }

  onSubmit(){
    const form = this.imageFrom;
    if(form.valid){
      this.uploadService.uploadImage(form.value.name, this.file)
      .subscribe(date =>{
        this.imageFrom = new FormGroup({
          name: new FormControl(null),
          file: new FormControl(null)
        })
        this.image = "../assets/upload.png";
      })
    }
  }

}
