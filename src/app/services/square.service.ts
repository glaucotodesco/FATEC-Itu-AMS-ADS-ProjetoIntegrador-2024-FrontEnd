import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Square } from '../interfaces/square';

@Injectable({
  providedIn: 'root'
})
export class SquareService {

  uri = "http://localhost:8080/squares";

  constructor(private http: HttpClient) { }

  getSquares(): Observable<Square[]>{
    return this.http.get<Square[]>(this.uri);
  }

  getSquare(id: number): Observable<Square>{
    return this.http.get<Square>(`${this.uri}/${id}`);
  }

  save(square: Square): Observable<Square>{
    return this.http.post<Square>(this.uri, square);
  }

  update(square: Square){
    return this.http.put<Square>(`${this.uri}/${square.id}`, square);
  }
}
