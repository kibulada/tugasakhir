import { Component,OnInit } from '@angular/core';
import { PelaksanaanBelanjaService} from "../../../services/pelaksanaan-belanja.service";
import {PelaksanaanBelanja} from "../../../models/pelaksanaanbelanja.model";
import { Router } from "@angular/router"


@Component({
  selector: 'pelaksanaanbelanja',
  templateUrl: './pelaksanaanbelanja.component.html'
  //styleUrls: ['./app.component.css']
})
export class PelaksanaanbelanjaComponent implements OnInit {
    pelaksanaanbelanja : any
    dataInput = new PelaksanaanBelanja;
    constructor(
        public pelaksanaanbelanjaService: PelaksanaanBelanjaService,
        private router: Router,
    ){
    }
    ngOnInit(){
        // this.apbdesbelanjaService.getAllData().subscribe((res:any) =>{
        //     this.apbdesbelanja = JSON.parse(res._body)
        //     console.log(this.apbdesbelanja);
        // });
        
    }

    // deleteData(query: any){
    //     this.apbdesbelanjaService.delete(query).subscribe(res=> {
    //         console.log(res);
    //         this.router.navigate(['/apbdesbelanja']);
    //     });
    // } 

}
