import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiURL = 'http://api.football-data.org/v2/'



  constructor(private http: HttpClient) { }




  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'X-Auth-Token':'522da1f154294b7aa61ab4f1738704f5'
    })
  }  

  // HttpClient API get() method => Fetch competition list
  getCompetitions(): Observable<any> {
    return this.http.get(`${this.apiURL}competitions`, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  
  // HttpClient API get() method => Fetch matches 
  getMatches(code:string):Observable<any>  {
    return this.http.get(`${this.apiURL}competitions/${code}/matches?status=SCHEDULED`,this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API get() method => Fetch matches 
  getLiveMatches(code:string):Observable<any>  {
    return this.http.get(`${this.apiURL}competitions/${code}/matches?status=LIVE`,this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  getMatchDetail(id:number):Observable<any>{
    return this.http.get(`${this.apiURL}matches/${id}`, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error:any) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       errorMessage = error.error.message;
     } else {
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
    console.log(errorMessage)
     return throwError(errorMessage);
  }
}

