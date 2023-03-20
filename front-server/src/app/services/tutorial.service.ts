import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';

const baseUrl = 'http://localhost:8080/coches';

@Injectable({
  providedIn: 'root'
})

export class TutorialService {

  constructor(private http: HttpClient) { }


  findAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseUrl}/all`);
  }

  

newCar(tipo: any): Observable<any> {
  return this.http.get<Tutorial[]>(`${baseUrl}/new/${tipo}`);
 }


}