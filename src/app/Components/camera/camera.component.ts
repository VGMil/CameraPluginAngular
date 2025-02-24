import { Component, inject} from '@angular/core';
import { CameraService } from './Services/camera.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-camera',
  imports: [NgIf],
  templateUrl: './camera.component.html',
  styleUrl: './camera.component.css'
})
export class CameraComponent {
  cameraService: CameraService = inject(CameraService);
  imgUrl: string = '';
  errorMessage:string = '';
  loading: boolean = false;
  async takePicture() {
    this.errorMessage = ''; // Limpiar mensajes de error anteriores
    
    try {
      
      this.loading = true;
      
      
      this.imgUrl = await this.cameraService.takePicture();
      
      
      if (!this.imgUrl) {
        throw new Error('No se obtuvo una imagen válida');
      }
      
      
      await new Promise(resolve => setTimeout(resolve, 100));
      
      this.loading = false;
    } catch (error) {
      console.error('Error al capturar imagen:', error);
      this.errorMessage = String(error);
      this.imgUrl = ''; 
    }
  }
}
