import { Component,OnInit } from '@angular/core';
import { PelaksanaanPembiayaanService} from "../../../services/pelaksanaan-pembiayaan.service";
import {PelaksanaanPembiayaan} from "../../../models/pelaksanaanpembiayaan.model"
import { Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'updatepelaksanaanpembiayaan',
  templateUrl: './pelaksanaanpembiayaan.component.html'
  //styleUrls: ['./app.component.css']
})
export class UpdatepelaksanaanpembiayaanComponent implements OnInit {
    pelaksanaanpembiayaan : any
    dataInput = new PelaksanaanPembiayaan;
    subs : any;
    datapelaksanaanpembiayaan : any;
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
    //     this.subs = this.route.params.subscribe((params) => {
    //         this.getId((params['id']));
    //     })
    // }

    // inputData(){
    //     this.pelaksanaanpembiayaanService.postData(this.dataInput).subscribe(res=>{
    //         console.log(res);
    //         this.router.navigate(['/pelaksanaanpembiayaan'])
    //     })
    // }

    // updateData(){
    //     this.pelaksanaanpembiayaanService.update(this.datapelaksanaanpembiayaan[0]).subscribe(res=>{
    //         alert(JSON.stringify(this.datapelaksanaanpembiayaan[0]))
    //         console.log(res);
    //         this.router.navigate(['/pelaksanaanpembiayaan'])
    //     })
    // }

    // getId(id){
    //     this.pelaksanaanpembiayaanService.findId(id).subscribe(res=>{
    //         this.datapelaksanaanpembiayaan = JSON.parse(res._body);
    //         console.log(this.datapelaksanaanpembiayaan);
    //     })
        
    }
    
}
