import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtworkDto } from '../interface/ArtworkDto';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {
  private apiUrl = 'http://localhost:8082/artwork/api'; // L'URL de ton API

  constructor(private http: HttpClient) {}

  // Méthode pour rechercher des œuvres d'art
  searchArtworks(query: string): Observable<ArtworkDto[]> {
    const params = new HttpParams().set('query', query);
    return this.http.get<ArtworkDto[]>(`${this.apiUrl}/search`, { params });
  }

  // Méthode pour récupérer toutes les œuvres d'art avec pagination
  getAllArtworks(page: number, limit: number): Observable<ArtworkDto[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());
    return this.http.get<ArtworkDto[]>(`${this.apiUrl}/artworks`, { params });
  }

  // Méthode pour récupérer une œuvre d'art par ID
  getArtworkById(id: number): Observable<ArtworkDto> {
    return this.http.get<ArtworkDto>(`${this.apiUrl}/${id}`);
  }
}