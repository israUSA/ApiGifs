import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent {

  constructor(private gifsService: GifsService){}

  get historial(){
    return this.gifsService.historial;
  }

  buscar(query:string):void{
    this.gifsService.buscarGifs(query);
  }

}
