import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HistorialComponent } from './main-content/historial/historial.component';
import { GifsComponent } from './main-content/gifs/gifs.component';



@NgModule({
  declarations: [HeaderComponent, MainContentComponent, HistorialComponent,
    GifsComponent,],
  exports:[
    HeaderComponent,
    MainContentComponent,
    
  ],
  imports: [
    CommonModule
  ]
})
export class GifModule { }
