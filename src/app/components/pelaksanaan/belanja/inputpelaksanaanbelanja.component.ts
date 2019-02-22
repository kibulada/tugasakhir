import { Component,OnInit } from '@angular/core';
import { PelaksanaanBelanjaService} from "../../../services/pelaksanaan-belanja.service";
import {PelaksanaanBelanja} from "../../../models/pelaksanaanbelanja.model"
import { Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'inputpelaksanaanbelanja',
  templateUrl: './inputpelaksanaanbelanja.component.html'
  //styleUrls: ['./app.component.css']
})
export class InputPelaksanaanbelanjaComponent implements OnInit {
    pelaksanaanbelanja : any
    dataInput = new PelaksanaanBelanja;
    constructor(
        public apbdesbelanjaService: PelaksanaanBelanjaService,
        private router: Router,
        private route: ActivatedRoute
    ){
    }
    ngOnInit(){
        // this.apbdesbelanjaService.getAllData().subscribe((res:any) =>{
        //     this.apbdesbelanja = JSON.parse(res._body)
        //     console.log(this.apbdesbelanja);
        // });
    }

    inputData(){
        // this.apbdesbelanjaService.postData(this.apbdesbelanjaInput).subscribe(res=>{
        //     console.log(res);
        //     this.router.navigate(['/apbdesbelanja'])
        // })
    }
}
