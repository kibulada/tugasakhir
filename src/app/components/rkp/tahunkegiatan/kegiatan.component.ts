import { Component,OnInit } from '@angular/core';
import { KegiatanService} from "../../../services/kegiatan.service";
import {Kegiatan} from "../../../models/kegiatan.model";
import { Router } from "@angular/router"


@Component({
  selector: 'kegiatan',
  templateUrl: './kegiatan.component.html'
  //styleUrls: ['./app.component.css']
})
export class kegiatanComponent implements OnInit {
    kegiatan : any
    dataInput = new Kegiatan;
    constructor(
        public kegiatanService: KegiatanService,
        private router: Router,
    ){
    }
    ngOnInit(){
        this.kegiatanService.getAllData().subscribe((res:any) =>{
            this.kegiatan = JSON.parse(res._body)
            console.log(this.kegiatan);
        });
        
    }

    deleteData(query: any){
        this.kegiatanService.delete(query).subscribe(res=> {
            console.log(res);
            this.router.navigate(['/kegiatan']);
        });
    } 

}
