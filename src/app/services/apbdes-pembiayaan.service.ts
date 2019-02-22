import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { ApbdesPembiayaan } from "../models/apbdespembiayaan.model";
import { Observable } from 'rxjs';
import { ApbdespembiayaanComponent } from '../components/apbdes/pembiayaan';

@Injectable()
export class apbdespembiayaanService {
  constructor(private http: Http) { }

  baseurl="http://localhost:8080/";

  public getAllData(){
      return this.http.get(this.baseurl+"apbdespembiayaan")
  }

  public postData(data:any){
      return this.http.post(this.baseurl+"apbdespembiayaan",data)
  }

  delete(id?: any): Observable<Response> {
      return this.http.delete(this.baseurl+"apbdespembiayaan/"+id)
  }

  findId(id?: any): Observable<any>{
      return this.http.get(this.baseurl+"apbdespembiayaan/"+id)
  }

  update(apbdespembiayaan: ApbdespembiayaanComponent) {
      return this.http.put(this.baseurl+"apbdespembiayaan", apbdespembiayaan)
  }
}
