import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skin } from '../Skin';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class SkinService {
  private apiUrl = 'http://localhost:5000/skins';

  constructor(private http: HttpClient) {}

  getSkins(): Observable<Skin[]> {
    return this.http.get<Skin[]>(this.apiUrl);
  }

  deleteSkin(skin: Skin): Observable<Skin> {
    const url = `${this.apiUrl}/${skin.id}`;
    return this.http.delete<Skin>(url);
  }

  updateSkinAvailable(skin: Skin): Observable<Skin> {
    const url = `${this.apiUrl}/${skin.id}`;
    return this.http.put<Skin>(url, skin, httpOptions);
  }

  addSkin(skin: Skin): Observable<Skin> {
    return this.http.post<Skin>(this.apiUrl, skin, httpOptions);
  }
}
