import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { FoodBlog } from './models/food-blog.model';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FoodBlogService {

    baseUrl = 'http://localhost:3000/foodBlogs';

    constructor(private httpClient: HttpClient) { }

    getFoodBlogs(): Observable<FoodBlog[]> {
        return this.httpClient.get<FoodBlog[]>(this.baseUrl).pipe(catchError(this.handleError));
    }

    getFoodBlog(id: number): Observable<FoodBlog> {
        return this.httpClient.get<FoodBlog>(`${this.baseUrl}/${id}`)
            .pipe(catchError(this.handleError));
    }

    addFoodBlog(foodBlog: FoodBlog): Observable<FoodBlog> {
        return this.httpClient.post<FoodBlog>(this.baseUrl, foodBlog, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }).pipe(catchError(this.handleError));
    }

    updateFoodBlog(foodBlog: FoodBlog): Observable<void> {

        return this.httpClient.put<void>(`${this.baseUrl}/${foodBlog.id}`, foodBlog, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }).pipe(catchError(this.handleError));
    }

    deleteFoodBlog(id: number): Observable<void> {
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`).pipe(catchError(this.handleError));
    }

    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error: ', errorResponse.error.message);
        } else {
            console.log('Server Side Error: ', errorResponse);
        }

        return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
    }
}
