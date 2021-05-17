import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({providedIn:'root'})
export class MovieService{
  private apiserveUrl= '';

  constructor(private http:HttpClient){}

  public getMovies():Observable<any>{
    return this.http.get<any>(`${this.apiserveUrl}/search/all`);
  }
}
