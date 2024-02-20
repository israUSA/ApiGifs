import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrl: './gifs.component.css'
})
export class GifsComponent {

  constructor(private gifsService: GifsService){}

  get resultados(){
    return this.gifsService.resultados;
  }

}
