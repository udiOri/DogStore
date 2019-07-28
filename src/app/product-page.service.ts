import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductPageService {
  
  uri: string = 'http://localhost:4000/DogStore';

  constructor(private http:HttpClient) { }

  getProductById(id){
    return this.http.get(`${this.uri}/${id}`); 
  }

  getProducts() {
    return this.http.get(`${this.uri}/get`);
  }
}
