import { Component,OnInit } from '@angular/core';
import { apbdespembiayaanService} from "../../../services/apbdes-pembiayaan.service";
import {ApbdesPembiayaan} from "../../../models/apbdespembiayaan.model";
import { Router } from "@angular/router"


@Component({
  selector: 'apbdespembiayaan',
  templateUrl: './apbdespembiayaan.component.html'
  //styleUrls: ['./app.component.css']
})
export class ApbdespembiayaanComponent implements OnInit {
    apbdespembiayaan : any
    dataInput = new ApbdesPembiayaan;
    constructor(
        public apbdespembiayaanService: apbdespembiayaanService,
        private router: Router,
    ){
    }
    ngOnInit(){
        // this.apbdespembiayaanService.getAllData().subscribe((res:any) =>{
        //     this.apbdespembiayaan = JSON.parse(res._body)
        //     console.log(this.apbdespembiayaan);
        // });
        
    // }

    // deleteData(query: any){
    //     this.apbdespembiayaanService.delete(query).subscribe(res=> {
    //         console.log(res);
    //         this.router.navigate(['/apbdespembiayaan']);
    //     });
    } 

}
