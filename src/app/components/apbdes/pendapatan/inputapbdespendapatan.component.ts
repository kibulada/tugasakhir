import { Component,OnInit } from '@angular/core';
import { apbdespendapatanService} from "../../../services/apbdes-pendapatan.service";
import {ApbdesPendapatan} from "../../../models/apbdespendapatan.model"
import { Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'inputapbdespendapatan',
  templateUrl: './inputapbdespendapatan.component.html'
  //styleUrls: ['./app.component.css']
})
export class InputApbdespendapatanComponent implements OnInit {
    apbdespendapatan : any
    dataInput = new ApbdesPendapatan;
    constructor(
        public apbdespendapatanService: apbdespendapatanService,
        private router: Router,
        private route: ActivatedRoute
    ){
    }
    ngOnInit(){
    //     this.apbdespendapatanService.getAllData().subscribe((res:any) =>{
    //         this.apbdespendapatan = JSON.parse(res._body)
    //         console.log(this.apbdespendapatan);
    //     });
    // }

    // inputData(){
    //     this.apbdespendapatanService.postData(this.apbdespendapatanInput).subscribe(res=>{
    //         console.log(res);
    //         this.router.navigate(['/apbdespendapatan'])
    //     })
    }
}
