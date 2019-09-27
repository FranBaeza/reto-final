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

  getOwners(): Observable<Oferta[]> {
    return this.http.get<Oferta[]>(this.entity_url)
      .pipe(
        catchError(this.handlerError('getOwners', []))
      );
  }

  getOwnerById(owner_id: string): Observable<Oferta> {
    return this.http.get<Oferta>(this.entity_url + '/' + owner_id)
      .pipe(
          catchError(this.handlerError('getOwnerById', {} as Oferta))
      );
  }

  addOwner(owner: Oferta): Observable<Oferta> {
    return this.http.post<Oferta>(this.entity_url, owner)
      .pipe(
        catchError(this.handlerError('addOwner', owner))
      );
  }

  updateOwner(owner_id: string, owner: Oferta): Observable<{}> {
    return this.http.put<Oferta>(this.entity_url + '/' + owner_id, owner)
      .pipe(
        catchError(this.handlerError('updateOwner', owner))
      );
  }

  deleteOwner(owner_id: string): Observable<{}> {
    return this.http.delete<Oferta>(this.entity_url + '/' + owner_id)
      .pipe(
         catchError(this.handlerError('deleteOwner', [owner_id]))
      );
  }
}
