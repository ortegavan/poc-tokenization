import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Project } from '../models/project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  url = 'https://localhost:7257/api/projects';

  constructor(private httpClient: HttpClient) {}

  get(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.url);
  }
}
