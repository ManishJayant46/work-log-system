// src/app/graphql.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const GRAPHQL_ENDPOINT = 'http://localhost:8080/graphql';

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  constructor(private http: HttpClient) {}

  query(query: string, variables: any = {}): Observable<any> {
    return this.http.post<any>(
      GRAPHQL_ENDPOINT,
      { query, variables },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }
    ).pipe(
      catchError(this.handleError)
    );
  }

  mutate(mutation: string, variables: any = {}): Observable<any> {
    return this.http.post<any>(
      GRAPHQL_ENDPOINT,
      { query: mutation, variables },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }
    ).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
}
