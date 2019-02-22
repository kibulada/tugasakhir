import { Component,OnInit } from '@angular/core';
import { PelaksanaanPembiayaanService} from "../../../services/pelaksanaan-pembiayaan.service";
import {PelaksanaanPembiayaan} from "../../../models/pelaksanaanpembiayaan.model";
import { Router } from "@angular/router"


@Component({
  selector: 'pelaksanaanpembiayaan',
  templateUrl: './pelaksanaanpembiayaan.component.html'
  //styleUrls: ['./app.component.css']
})
export class pelaksanaanpembiayaanComponent implements OnInit {
    pelaksanaanpembiayaan : any
    dataInput = new PelaksanaanPembiayaan;
    constructor(
        public pelaksanaanpembiayaanService: PelaksanaanPembiayaanService,
        private router: Router,
    ){
    }
    ngOnInit(){
        // this.pelaksanaanpembiayaanService.getAllData().subscribe((res:any) =>{
        //     this.pelaksanaanpembiayaan = JSON.parse(res._body)
        //     console.log(this.pelaksanaanpembiayaan);
        // });
        
    // }

    // deleteData(query: any){
    //     this.pelaksanaanpembiayaanService.delete(query).subscribe(res=> {
    //         console.log(res);
    //         this.router.navigate(['/pelaksanaanpembiayaan']);
    //     });
    } 

}
