import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  

@Injectable({
    providedIn: 'root'
})

export class DataService {
  url = 'https://jsonplaceholder.typicode.com/todos/1'

  constructor(private httpClient:HttpClient) {}

  getData() {
      return this.httpClient.get<any>(this.url);
  }
}