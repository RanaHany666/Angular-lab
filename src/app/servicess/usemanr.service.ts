import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from './serviceproudcts/Iuser';
import { Observable,catchError,throwError  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsemanrService {

  constructor( private http:HttpClient) { }
  _url:string=" https://jsonplaceholder.typicode.com/users";
  getUsers():Observable<Iuser[]>
  {
    return this.http.get<Iuser[]>(this._url).pipe(catchError((err)=>
    {
      return throwError(()=>err.message||"Server error")
    }))
  }
}
