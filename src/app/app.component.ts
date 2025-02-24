import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CameraComponent } from './Components/camera/camera.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CameraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto-Camara';
}
