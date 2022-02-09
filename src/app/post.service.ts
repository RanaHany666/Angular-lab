import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ipost } from './post/Ipost';
import { Observable,catchError,throwError  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

 
  constructor( private http:HttpClient) { }
  _url:string="  https://jsonplaceholder.typicode.com/posts";
  getUsers():Observable<Ipost[]>
  {
    return this.http.get<Ipost[]>(this._url).pipe(catchError((err)=>
    {
      return throwError(()=>err.message||"Server error")
    }))
  }
}
