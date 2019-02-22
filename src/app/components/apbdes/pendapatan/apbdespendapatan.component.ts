import { Component,OnInit } from '@angular/core';
import { apbdespendapatanService} from "../../../services/apbdes-pendapatan.service";
import {ApbdesPendapatan} from "../../../models/apbdespendapatan.model";
import { Router } from "@angular/router"


@Component({
  selector: 'apbdespendapatan',
  templateUrl: './apbdespendapatan.component.html'
  //styleUrls: ['./app.component.css']
})
export class ApbdespendapatanComponent implements OnInit {
    apbdespendapatan : any
    dataInput = new ApbdesPendapatan;
    constructor(
        public apbdespendapatanService: apbdespendapatanService,
        private router: Router,
    ){
    }
    ngOnInit(){
    //     this.apbdespendapatanService.getAllData().subscribe((res:any) =>{
    //         this.apbdespendapatan = JSON.parse(res._body)
    //         console.log(this.apbdespendapatan);
    //     });
        
    // }

    // deleteData(query: any){
    //     this.apbdespendapatanService.delete(query).subscribe(res=> {
    //         console.log(res);
    //         this.router.navigate(['/apbdespendapatan']);
    //     });
    } 

}
