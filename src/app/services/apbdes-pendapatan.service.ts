import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { ApbdesPendapatan } from "../models/apbdespendapatan.model";
import { Observable } from 'rxjs';
import { ApbdespendapatanComponent } from '../components/apbdes/pendapatan';

@Injectable()
export class apbdespendapatanService {
  constructor(private http: Http) { }

  baseurl="http://localhost:8080/";

  public getAllData(){
      return this.http.get(this.baseurl+"apbdespendapatan")
  }

  public postData(data:any){
      return this.http.post(this.baseurl+"apbdespendapatan",data)
  }

  delete(id?: any): Observable<Response> {
      return this.http.delete(this.baseurl+"apbdespendapatan/"+id)
  }

  findId(id?: any): Observable<any>{
      return this.http.get(this.baseurl+"apbdespendapatan/"+id)
  }

  update(apbdespendapatan: ApbdespendapatanComponent) {
      return this.http.put(this.baseurl+"apbdespendapatan", apbdespendapatan)
  }
}
