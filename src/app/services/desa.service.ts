import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Desa } from "../models/desa.model";
import { Observable } from 'rxjs';

@Injectable()
export class DesaService {
  constructor(private http: Http) { }

  baseurl="http://localhost:8301/";

  public getAllData(){
      return this.http.get(this.baseurl+"desa")
  }

  public postData(data:any){
      return this.http.post(this.baseurl+"desa",data)
  }

  delete(id?: any): Observable<Response> {
      return this.http.delete(this.baseurl+"desa/"+id)
  }

  findId(id?: any): Observable<any>{
      return this.http.get(this.baseurl+"desa/"+id)
  }

  update(desa: Desa) {
      return this.http.put(this.baseurl+"desa", desa)
  }
}
