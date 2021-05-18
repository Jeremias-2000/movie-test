import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movie } from './movie';
import { Genre } from './genre';

@Injectable({providedIn:'root'})
export class MovieService{
  private apiserveUrl= environment.apiBaseUrl;

  constructor(private http:HttpClient){}

  public getMovies():Observable<Movie[]>{
    return this.http.get<Movie[]>(`${this.apiserveUrl}/search/all`);
  }

  public getMoviesByMovieGenre(genre:Genre):Observable<Movie[]>{
    return this.http.get<Movie[]>(`${this.apiserveUrl}/search/type/genre/${genre}`);
  }

  public getMovieById(id:number):Observable<Movie>{
    return this.http.get<Movie>(`${this.apiserveUrl}/search/type/id/${id}`);
  }

  public getMovieByName(name:string):Observable<Movie>{
    return this.http.get<Movie>(`${this.apiserveUrl}/search/type/name/${name}`);
  }

  public addMovie(movie:Movie):Observable<Movie>{
    return this.http.post<Movie>(`${this.apiserveUrl}/create`,movie);
  }



  public updateMovie(id:number,movie:Movie):Observable<Movie>{
    return this.http.put<Movie>(`${this.apiserveUrl}/update/id/${id}`,movie);
  }

  public deleteMovie(id:number): Observable<void>{
    return this.http.delete<void>(`${this.apiserveUrl}/delete/id/${id}`);
  }



}
