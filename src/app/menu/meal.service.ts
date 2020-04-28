import { IMeal } from './meal';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MealService {
  private dataUrl = 'json_data/meals.json';
  //private dataUrl = 'http://localhost:3000/meals/';
  constructor(private http:HttpClient) {
    
  }
  getAllMeals(): Observable<IMeal[]> {
        return this.http.get<IMeal[]>(this.dataUrl).pipe(
          tap(data => console.log("All " + JSON.stringify(data))),
          catchError(this.handleError)
        );
        
  }
  getMeal(id: number): Observable<IMeal | undefined> {
    return this.getAllMeals()
      .pipe(
        map((meals: IMeal[]) => meals.find(m => m.mealId === id))
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMeassage = "Error";
    return throwError(errorMeassage);
  }
}