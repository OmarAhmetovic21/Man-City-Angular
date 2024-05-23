import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpParams, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FixturesService {

  private API_SERVER = environment.apiUrl;
  constructor(private httpClient: HttpClient) { 

  }

  public getFixtures(): Observable<any>{
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');  
    return this.httpClient.get(this.API_SERVER + '/getFixtures.php',{headers: headers});
  }

  public postFixtures(data: any): Observable<any>{
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');  
    return this.httpClient.post(this.API_SERVER + '/postFixtures.php', data, {headers: headers});
  }

  public deleteFixtures(id: any) : Observable<any>{
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');  
    return this.httpClient.delete(this.API_SERVER + '/deleteOffers.php/'+id,{headers: headers});
  }

  public editFixtures(data:any, id:any): Observable<any>{
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');  
    return this.httpClient.put(this.API_SERVER + '/updateOffers.php/'+id, data,{headers: headers});

  }


}
