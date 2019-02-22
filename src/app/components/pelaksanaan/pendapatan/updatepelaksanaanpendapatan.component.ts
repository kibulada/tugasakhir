import { Component,OnInit } from '@angular/core';
import { PelaksanaanPendapatanService} from "../../../services/pelaksanaan-pendapatan.service";
import {PelaksanaanPendapatan} from "../../../models/pelaksanaanpendapatan.model"
import { Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'updatepelaksanaanpendapatan',
  templateUrl: './pelaksanaanpendapatan.component.html'
  //styleUrls: ['./app.component.css']
})
export class UpdatepelaksanaanpendapatanComponent implements OnInit {
    pelaksanaanpendapatan : any
    dataInput = new PelaksanaanPendapatan;
    subs : any;
    datapelaksanaanpendapatan : any;
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
    //     this.subs = this.route.params.subscribe((params) => {
    //         this.getId((params['id']));
    //     })
    // }

    // inputData(){
    //     this.pelaksanaanpendapatanService.postData(this.dataInput).subscribe(res=>{
    //         console.log(res);
    //         this.router.navigate(['/pelaksanaanpendapatan'])
    //     })
    // }

    // updateData(){
    //     this.pelaksanaanpendapatanService.update(this.datapelaksanaanpendapatan[0]).subscribe(res=>{
    //         alert(JSON.stringify(this.datapelaksanaanpendapatan[0]))
    //         console.log(res);
    //         this.router.navigate(['/pelaksanaanpendapatan'])
    //     })
    // }

    // getId(id){
    //     this.pelaksanaanpendapatanService.findId(id).subscribe(res=>{
    //         this.datapelaksanaanpendapatan = JSON.parse(res._body);
    //         console.log(this.datapelaksanaanpendapatan);
    //     })
        
    }
    
}
