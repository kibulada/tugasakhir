import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { ApbdesBelanja } from "../models/apbdesbelanja.model";
import { Observable } from 'rxjs';

@Injectable()
export class apbdesbelanjaService {
  constructor(private http: Http) { }

  baseurl="http://localhost:8080/";

  public getAllData(){
      return this.http.get(this.baseurl+"apbdesbelanja")
  }

  public postData(data:any){
      return this.http.post(this.baseurl+"apbdesbelanja",data)
  }

  delete(id?: any): Observable<Response> {
      return this.http.delete(this.baseurl+"apbdesbelanja/"+id)
  }

  findId(id?: any): Observable<any>{
      return this.http.get(this.baseurl+"apbdesbelanja/"+id)
  }

  update(apbdesbelanja: ApbdesBelanja) {
      return this.http.put(this.baseurl+"apbdesbelanja", apbdesbelanja)
  }
}
