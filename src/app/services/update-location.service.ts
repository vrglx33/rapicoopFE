import { Distributor } from './../data-model';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UpdateLocationService {
  endpoint = {
    distributor: '',
    updateLocation: '',
  } ;
  constructor(private http: Http) {
    this.endpoint.distributor = `${environment.apiUrl}/api/distributors`;
    this.endpoint.updateLocation = `${environment.apiUrl}/api/distributors/location`;
  }
  getDistributorByIdentification(): Observable<any> {
   const distributor = this.http
   .get(this.endpoint.distributor).pipe(map(res => <any>res.json()));
   return distributor;
  }
  updateLocation(distributor: Distributor): Observable<Response> {
   const location =  this.http.post(`${this.endpoint.updateLocation}/${distributor.id}`, distributor);
    return location;
  }

  private handleError(error: Response) {
  console.error(error);
  return Observable.throw(error.json().error || ' error');
  }
}
