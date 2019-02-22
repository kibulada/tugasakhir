import { Component,OnInit } from '@angular/core';
import { PelaksanaanPendapatanService} from "../../../services/pelaksanaan-pendapatan.service";
import {PelaksanaanPendapatan} from "../../../models/pelaksanaanpendapatan.model";
import { Router } from "@angular/router"


@Component({
  selector: 'pelaksanaanpendapatan',
  templateUrl: './pelaksanaanpendapatan.component.html'
  //styleUrls: ['./app.component.css']
})
export class pelaksanaanpendapatanComponent implements OnInit {
    pelaksanaanpendapatan : any
    dataInput = new PelaksanaanPendapatan;
    constructor(
        public pelaksanaanpendapatanService: PelaksanaanPendapatanService,
        private router: Router,
    ){
    }
    ngOnInit(){
    //     this.pelaksanaanpendapatanService.getAllData().subscribe((res:any) =>{
    //         this.pelaksanaanpendapatan = JSON.parse(res._body)
    //         console.log(this.pelaksanaanpendapatan);
    //     });
        
    // }

    // deleteData(query: any){
    //     this.pelaksanaanpendapatanService.delete(query).subscribe(res=> {
    //         console.log(res);
    //         this.router.navigate(['/pelaksanaanpendapatan']);
    //     });
    } 

}
