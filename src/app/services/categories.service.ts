import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categories } from '../interfaces/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private url = "http://localhost:8080/categories";

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(this.url);
  }
  
  getCategoriesById(id: number): Observable<Categories> {
    return this.http.get<Categories>(`${this.url}/${id}`);
  }
  postCategories(categories: Categories): Observable<Categories> {
    return this.http.post<Categories>(this.url, categories);
  }
  putCategories(categories: Categories): Observable<Categories> {
    return this.http.put<Categories>(`${this.url}/${categories.id}`, categories);
  }
  deleteCategories(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
