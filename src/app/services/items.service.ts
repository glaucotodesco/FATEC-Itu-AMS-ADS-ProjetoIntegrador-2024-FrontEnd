import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080/items'

  getItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this.url);
  }

  getItem(item: Item): Observable<Item>{
    return this.http.get<Item>(`${this.url}/${item.id}`);
  } 

  postItem(item: Item): Observable<Item>{
    return this.http.post<Item>(this.url, item);
  }

  putItem(item: Item): Observable<Item>{
    return this.http.put<Item>(`${this.url}/${item.id}`, item);
  }

  deleteItem(item: Item): Observable<Item>{
    return this.http.delete<Item>(`${this.url}/${item.id}`);
  }
}
