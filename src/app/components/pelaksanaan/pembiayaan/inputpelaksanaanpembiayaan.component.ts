import { Component,OnInit } from '@angular/core';
import { PelaksanaanPembiayaanService} from "../../../services/pelaksanaan-pembiayaan.service";
import {PelaksanaanPembiayaan} from "../../../models/pelaksanaanpembiayaan.model"
import { Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'inputpelaksanaanpembiayaan',
  templateUrl: './inputpelaksanaanpembiayaan.component.html'
  //styleUrls: ['./app.component.css']
})
export class InputpelaksanaanpembiayaanComponent implements OnInit {
    pelaksanaanpembiayaan : any
    dataInput = new PelaksanaanPembiayaan;
    constructor(
        public pelaksanaanpembiayaanService: PelaksanaanPembiayaanService,
        private router: Router,
        private route: ActivatedRoute
    ){
    }
    ngOnInit(){
    //     this.pelaksanaanpembiayaanService.getAllData().subscribe((res:any) =>{
    //         this.pelaksanaanpembiayaan = JSON.parse(res._body)
    //         console.log(this.pelaksanaanpembiayaan);
    //     });
    // }

    // inputData(){
    //     this.pelaksanaanpembiayaanService.postData(this.pelaksanaanpembiayaanInput).subscribe(res=>{
    //         console.log(res);
    //         this.router.navigate(['/pelaksanaanpembiayaan'])
    //     })
    }
}
