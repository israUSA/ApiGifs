import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent {

  constructor(private gifsService: GifsService){}

  historialVacio:boolean|undefined;

  get historial(){
    return this.gifsService.historial;
  }

  get esHistorialVacio():boolean{
    return this.gifsService.esHistorialVacio();
  }

  buscar(query:string):void{
    this.gifsService.buscarGifs(query);
    console.log(this.gifsService.esHistorialVacio());
  }

  eliminarHistorial(){
    this.gifsService.eliminarElementos();
    console.log(this.historial)
  }

}
