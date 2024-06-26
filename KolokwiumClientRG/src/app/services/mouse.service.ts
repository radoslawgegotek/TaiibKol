import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Mouse, MouseForm } from '../models/mouse.model';

@Injectable({
  providedIn: 'root'
})
export class MouseService {

  constructor(private _http: HttpClient) { }

  public getMouseList(): Observable<Mouse[]> {
    return this._http.get<Mouse[]>(`${environment.api}/api/Mouse`);
  }

  public addMouse(form: MouseForm): Observable<any> {
    return this._http.post<any>(`${environment.api}/api/Mouse`, form);
  }

  public deleteMouse(id: number): Observable<any> {
    return this._http.delete<any>(`${environment.api}/api/Mouse`, { params: { id } });
  }
}
