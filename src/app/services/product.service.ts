import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = "http://localhost:8080/products";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  postProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product);
  }

  putProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.url}/${product.id}`, product);
  }

  deleteProduct(product: Product): Observable<void> {
    return this.http.delete<void>(`${this.url}/${product.id}`);
  }
}
