import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Rpjm } from "../models/rpjm.model";
import { Observable } from 'rxjs';

@Injectable()
export class RpjmService {
  constructor(private http: Http) { }

  baseurl="http://localhost:8303/";

  public getAllData(){
      return this.http.get(this.baseurl+"rpjm")
  }

  public postData(data:any){
      return this.http.post(this.baseurl+"rpjm",data)
  }

  delete(id?: any): Observable<Response> {
      return this.http.delete(this.baseurl+"rpjm/"+id)
  }

  findId(id?: any): Observable<any>{
      return this.http.get(this.baseurl+"rpjm/"+id)
  }

  update(rpjm: Rpjm) {
      return this.http.put(this.baseurl+"rpjm", rpjm)
  }
}
