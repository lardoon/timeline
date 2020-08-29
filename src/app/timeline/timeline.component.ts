import { Component, OnInit, Input } from '@angular/core';
import { Track, Midi } from '@tonejs/midi';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {


  private _midi: Midi;

  @Input()
  set midi(value: Midi) {
    this._midi = value;
  }

  get midi() {
    return this._midi;
  }

  get measures() : number {
    return Math.floor(this._midi.header.ticksToMeasures(this._midi.durationTicks));
  }

  getTrackMeasures(track: Track) : number {
    return Math.floor(this._midi.header.ticksToMeasures(track.durationTicks));
  }

  constructor() { }

  ngOnInit() {
  }

}