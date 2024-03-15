import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  server_url = 'http://localhost:3000/recipes';

  constructor(private http: HttpClient) {}
  ViewApi() {
    return this.http.get(`${this.server_url}`);
  }
}
