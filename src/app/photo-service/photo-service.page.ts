import { Component, OnInit } from '@angular/core';

// Camera provides access to the device's default camera application, also add to providers
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-photo-service',
  templateUrl: './photo-service.page.html',
  styleUrls: ['./photo-service.page.scss'],
})
export class PhotoServicePage implements OnInit {
  base64Image:string;

  // pass camera and cameraOptions to constructor so application can use it
  constructor(private camera: Camera) { }

  ngOnInit() {    
  }

  // use phone's camera to take and display photograph
  getCamera(){
    const cameraOptions: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetHeight: 500,
      correctOrientation: true      
    }

    this.camera.getPicture(cameraOptions).then((imageData)=>{
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {      
      
    });

  } // getCamera()

  // retrieves and displays photos from phone's own photo gallery
  getGalleryPhoto(){
    const galleryOptions: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetHeight: 200,
      correctOrientation: true      
    }

    this.camera.getPicture(galleryOptions).then((imageData)=>{
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      
    });
  
  } // end getGalleryPhoto()

}
