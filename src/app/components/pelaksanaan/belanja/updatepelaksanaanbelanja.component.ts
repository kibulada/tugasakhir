import { Component,OnInit } from '@angular/core';
import { PelaksanaanBelanjaService} from "../../../services/pelaksanaan-belanja.service";
import {PelaksanaanBelanja} from "../../../models/pelaksanaanbelanja.model"
import { Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'updatepelaksanaanbelanja',
  templateUrl: './pelaksanaanbelanja.component.html'
  //styleUrls: ['./app.component.css']
})
export class UpdatepelaksanaanbelanjaComponent implements OnInit {
    pelaksanaanbelanja : any
    dataInput = new PelaksanaanBelanja;
    subs : any;
    datapelaksanaanbelanja : any;
    constructor(
        public pelaksanaanbelanjaService: PelaksanaanBelanjaService,
        private router: Router,
        private route: ActivatedRoute
    ){
    }
    ngOnInit(){
    //     this.pelaksanaanbelanjaService.getAllData().subscribe((res:any) =>{
    //         this.pelaksanaanbelanja = JSON.parse(res._body)
    //         console.log(this.pelaksanaanbelanja);
    //     });
    //     this.subs = this.route.params.subscribe((params) => {
    //         this.getId((params['id']));
    //     })
    // }

    // inputData(){
    //     this.pelaksanaanbelanjaService.postData(this.dataInput).subscribe(res=>{
    //         console.log(res);
    //         this.router.navigate(['/pelaksanaanbelanja'])
    //     })
    // }

    // updateData(){
    //     this.pelaksanaanbelanjaService.update(this.datapelaksanaanbelanja[0]).subscribe(res=>{
    //         alert(JSON.stringify(this.datapelaksanaanbelanja[0]))
    //         console.log(res);
    //         this.router.navigate(['/pelaksanaanbelanja'])
    //     })
    // }

    // getId(id){
    //     this.pelaksanaanbelanjaService.findId(id).subscribe(res=>{
    //         this.datapelaksanaanbelanja = JSON.parse(res._body);
    //         console.log(this.datapelaksanaanbelanja);
    //     })
        
    }
    
}
