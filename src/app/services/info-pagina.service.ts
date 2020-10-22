import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient) {
    //console.log("Servicio de infoPagina listo!!!");

    // Leer el archivo JSON
    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        //console.log(resp['email']);
        //console.log(resp);
      });
  }

  private cargarEquipo() {
    this.http.get('https://platzi-1553705543960.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) => {
      this.equipo = resp;
      //console.log( this.equipo );
    });
  }


}
