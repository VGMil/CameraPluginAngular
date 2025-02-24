import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, PermissionStatus} from '@capacitor/camera';
@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor() { }

  private async checkPermissions(): Promise<void> {
    const check = async (permission: PermissionStatus): Promise<boolean> => {
      if (permission.camera !== 'granted' || permission.photos !== 'granted') {
        const request = await Camera.requestPermissions();
        return request.camera === 'granted' && request.photos === 'granted';
      }
      return true;
    };
   
    const permissions = await Camera.checkPermissions();
    if (!(await check(permissions))) {
      throw new Error('Permisos de cámara no otorgados');
    }
  }

  async takePicture(): Promise<string> {
    await this.checkPermissions();
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos
    });

    var imageUrl = image.webPath;

    if (imageUrl != null) {
      return imageUrl;
    } else {
      throw new Error("Error al tomar la foto");
    }
  };
}
