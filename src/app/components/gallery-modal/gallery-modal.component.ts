import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import { GalleryService } from 'src/app/services/service.index';
import {GalleryImage} from '../../models/gallery-image';

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html', 
  styleUrls: ['./gallery-modal.component.scss']
})
export class GalleryModalComponent implements OnInit, OnDestroy {

  public image!: GalleryImage;
  private subscription!: Subscription;

  constructor(
    private ref: ChangeDetectorRef,
    private readonly galleryService: GalleryService 
  ) {
  }

  ngOnInit(): void {
    this.getImageSelected();
  }

  getImageSelected(): void {
    this.subscription = this.galleryService
      .getImageSelected()
      .subscribe((image: GalleryImage) => {
        this.image = image;
        this.ref.detectChanges();
      });
  }

  changeImg(move: number): void {
    const position = this.image.position + move;
    this.galleryService.selectImage(position);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
