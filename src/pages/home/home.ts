import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

constructor(
    private flashlight: Flashlight
  ){}
    
    flashlightToggle(){
      this.flashlight.toggle();
     }

}
