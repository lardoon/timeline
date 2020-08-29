import { Component, VERSION } from '@angular/core';

import { Midi } from '@tonejs/midi';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  midi: Midi;

  async getFile(event) {
    this.midi = await this.readMidi(event.target.files[0]);
    console.log(this.midi.toJSON())
  }

   readMidi(file: Blob) : Promise<Midi> {
    
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = (ev) => {
        resolve(new Midi(<ArrayBuffer> ev.target.result));
      }
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
    
  }
}
