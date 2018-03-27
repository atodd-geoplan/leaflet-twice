import { Component, OnInit } from '@angular/core';

declare var L: any;
// import * as L from 'leaflet';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const osm2 = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {minZoom: 0, maxZoom: 13, attribution: '...'});
    const miniMap = new L.Control.MiniMap(osm2, {});
    console.log(miniMap);
  }

}
