import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {HttpErrorHandler, HandleError} from '../error.service';
import { Oferta } from './oferta';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  entity_url = environment.REST_API_URL + 'ofertas';

  private handlerError: HandleError;

  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandler) {
    this.handlerError = httpErrorHandler.createHandleError('OfertasService');
  }

  getOfertas(): Observable<Oferta[]> {
    return this.http.get<Oferta[]>(this.entity_url)
      .pipe(
        catchError(this.handlerError('getOfertas', []))
      );
  }

  getOfertaById(oferta_id: string): Observable<Oferta> {
    return this.http.get<Oferta>(this.entity_url + '/' + oferta_id)
      .pipe(
          catchError(this.handlerError('getOfertaById', {} as Oferta))
      );
  }

  addOferta(oferta: Oferta): Observable<Oferta> {
    return this.http.post<Oferta>(this.entity_url, oferta)
      .pipe(
        catchError(this.handlerError('addOferta', oferta))
      );
  }

  updateOferta(oferta_id: string, oferta: Oferta): Observable<{}> {
    return this.http.put<Oferta>(this.entity_url + '/' + oferta_id, oferta)
      .pipe(
        catchError(this.handlerError('updateOferta', oferta))
      );
  }

  deleteOferta(oferta_id: string): Observable<{}> {
    return this.http.delete<Oferta>(this.entity_url + '/' + oferta_id)
      .pipe(
         catchError(this.handlerError('deleteOferta', [oferta_id]))
      );
  }
}
