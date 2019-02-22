import { Component,OnInit } from '@angular/core';
import { PelaksanaanPendapatanService} from "../../../services/pelaksanaan-pendapatan.service";
import {PelaksanaanPendapatan} from "../../../models/pelaksanaanpendapatan.model"
import { Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'inputpelaksanaanpendapatan',
  templateUrl: './inputpelaksanaanpendapatan.component.html'
  //styleUrls: ['./app.component.css']
})
export class InputpelaksanaanpendapatanComponent implements OnInit {
    pelaksanaanpendapatan : any
    dataInput = new PelaksanaanPendapatan;
    constructor(
        public pelaksanaanpendapatanService: PelaksanaanPendapatanService,
        private router: Router,
        private route: ActivatedRoute
    ){
    }
    ngOnInit(){
    //     this.pelaksanaanpendapatanService.getAllData().subscribe((res:any) =>{
    //         this.pelaksanaanpendapatan = JSON.parse(res._body)
    //         console.log(this.pelaksanaanpendapatan);
    //     });
    // }

    // inputData(){
    //     this.pelaksanaanpendapatanService.postData(this.pelaksanaanpendapatanInput).subscribe(res=>{
    //         console.log(res);
    //         this.router.navigate(['/pelaksanaanpendapatan'])
    //     })
    }
}
