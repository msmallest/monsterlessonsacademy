import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MostInterface } from '../types/most.interface';

@Injectable()
export class MostsService {
  constructor(private http: HttpClient) {}

  getMosts(): Observable<MostInterface[]> {
    return this.http.get<MostInterface[]>('http://localhost:3000/mosts');
  }

  getMostsOptions(): Observable<MostInterface[]> {
    return this.http.get<MostInterface[]>('http://localhost:3000/mosts');
  }

  createMost(most: { title: string }): Observable<MostInterface> {
    return this.http.post<MostInterface>('http://localhost:3000/mosts', most);
  }
}
