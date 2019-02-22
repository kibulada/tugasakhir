import { Component,OnInit } from '@angular/core';
import { apbdespembiayaanService} from "../../../services/apbdes-pembiayaan.service";
import {ApbdesPembiayaan} from "../../../models/apbdespembiayaan.model"
import { Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'inputapbdespembiayaan',
  templateUrl: './inputapbdespembiayaan.component.html'
  //styleUrls: ['./app.component.css']
})
export class InputApbdespembiayaanComponent implements OnInit {
    apbdespembiayaan : any
    dataInput = new ApbdesPembiayaan;
    constructor(
        public apbdespembiayaanService: apbdespembiayaanService,
        private router: Router,
        private route: ActivatedRoute
    ){
    }
    ngOnInit(){
    //     this.apbdespembiayaanService.getAllData().subscribe((res:any) =>{
    //         this.apbdespembiayaan = JSON.parse(res._body)
    //         console.log(this.apbdespembiayaan);
    //     });
    // }

    // inputData(){
    //     this.apbdespembiayaanService.postData(this.apbdespembiayaanInput).subscribe(res=>{
    //         console.log(res);
    //         this.router.navigate(['/apbdespembiayaan'])
    //     })
    }
}
