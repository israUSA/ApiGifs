import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, iGif } from '../../interfaces/iGifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  private apiKey: string = 'Obb2yPr3oujjs8WJSuWNcq1vJHJDvMy6';
  private urlBase: string = 'https://api.giphy.com/v1/gifs';
  private endPoint: string = 'search';
  private limiteResultados: string = '50';
  private _historial: string[] = [];
  resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }


  validarBusqueda(query: string) {
    if (query && !this.esQueryRepetido(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.slice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
      this.buscarGifs(query);
    }
  }

  esQueryRepetido(query: string): boolean {
    return this.historial.includes(query);
  }

  buscarGifs(query: string) {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', query)
      .set('limit', this.limiteResultados)
      .set('lang', 'es');

    this.http
      .get<iGif>(`${this.urlBase}/${this.endPoint}`, { params })
      .subscribe((respuesta) => {
        this.resultados = respuesta.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
        console.log(respuesta.data);
      });
  }
}
