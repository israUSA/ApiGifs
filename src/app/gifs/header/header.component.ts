import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @ViewChild('inputBuscar') txtBuscar!:ElementRef<HTMLInputElement>

  constructor(private gifsService:GifsService){

  }

  buscar():void{
    const buscar = this.txtBuscar.nativeElement.value;
    this.gifsService.validarBusqueda(buscar);
    console.log(buscar);
    console.log("Historial: ",this.gifsService.historial)
    this.txtBuscar.nativeElement.value = '';
  }

}
