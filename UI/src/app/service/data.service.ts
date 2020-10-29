import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  

@Injectable({
    providedIn: 'root'
})

export class DataService {
  url = 'https://jsonplaceholder.typicode.com/todos/1'

  constructor(private httpClient:HttpClient) {}

  getData() {
      return this.httpClient.get<any>(this.url);
  }
  postData(value:string[]) {
      const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
      };
      return this.httpClient.post<string[]>(this.url, value, httpOptions);
  }
}