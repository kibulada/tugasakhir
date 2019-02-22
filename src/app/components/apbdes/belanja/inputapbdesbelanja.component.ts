import { Component,OnInit } from '@angular/core';
import { apbdesbelanjaService} from "../../../services/apbdes-belanja.service";
import {ApbdesBelanja} from "../../../models/apbdesbelanja.model"
import { Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'inputapbdesbelanja',
  templateUrl: './inputapbdesbelanja.component.html'
  //styleUrls: ['./app.component.css']
})
export class InputApbdesbelanjaComponent implements OnInit {
    apbdesbelanja : any
    dataInput = new ApbdesBelanja;
    constructor(
        public apbdesbelanjaService: apbdesbelanjaService,
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
