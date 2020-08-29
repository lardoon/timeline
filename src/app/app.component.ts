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
    
  }

   readMidi(file: Blob) : Promise<Midi> {
    let reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = (ev) => {
        resolve(new Midi(<ArrayBuffer> ev.target.result));
      }
      reader.onerror = reject;
    });
    reader.readAsArrayBuffer(file);
  }
}
