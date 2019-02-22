import { Component,OnInit } from '@angular/core';
import { apbdesbelanjaService} from "../../../services/apbdes-belanja.service";
import {ApbdesBelanja} from "../../../models/apbdesbelanja.model";
import { Router } from "@angular/router"


@Component({
  selector: 'apbdesbelanja',
  templateUrl: './apbdesbelanja.component.html'
  //styleUrls: ['./app.component.css']
})
export class ApbdesbelanjaComponent implements OnInit {
    apbdesbelanja : any
    dataInput = new ApbdesBelanja;
    constructor(
        public apbdesbelanjaService: apbdesbelanjaService,
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
