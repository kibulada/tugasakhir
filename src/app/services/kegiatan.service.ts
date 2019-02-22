import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Kegiatan } from "../models/kegiatan.model";
import { Observable } from 'rxjs';

@Injectable()
export class KegiatanService {
  constructor(private http: Http) { }

  baseurl="http://localhost:8303/";

  public getAllData(){
      return this.http.get(this.baseurl+"kegiatan")
  }

  public postData(data:any){
      return this.http.post(this.baseurl+"kegiatan",data)
  }

  delete(id?: any): Observable<Response> {
      return this.http.delete(this.baseurl+"kegiatan/"+id)
  }

  findId(id?: any): Observable<any>{
      return this.http.get(this.baseurl+"bidang/"+id)
  }

  findIdKegiatan(id?: any): Observable<any>{
    return this.http.get(this.baseurl+"kegiatan/"+id)
}

  update(kegiatan: Kegiatan) {
      return this.http.put(this.baseurl+"kegiatan", kegiatan)
  }
}
