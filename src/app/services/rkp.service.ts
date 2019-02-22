import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Rkp } from "../models/rkp.model";
import { Observable } from 'rxjs';

@Injectable()
export class RkpService {
  constructor(private http: Http) { }

  baseurl="http://localhost:8303/";

  public getAllData(){
      return this.http.get(this.baseurl+"bidang")
  }

  public postData(data:any){
      return this.http.post(this.baseurl+"bidang",data)
  }

  delete(id?: any): Observable<Response> {
      return this.http.delete(this.baseurl+"bidang/"+id)
  }

  findId(id?: any): Observable<any>{
      return this.http.get(this.baseurl+"bidang/"+id)
  }

  update(rkp: Rkp) {
      return this.http.put(this.baseurl+"bidang", rkp)
  }
}
