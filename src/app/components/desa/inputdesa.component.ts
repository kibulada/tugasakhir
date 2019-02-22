import { Component,OnInit } from '@angular/core';
import { DesaService} from "../../services/desa.service";
import {Desa} from "../../models/desa.model"
import { Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'inputdesa',
  templateUrl: './inputdesa.component.html'
  //styleUrls: ['./app.component.css']
})
export class InputDesaComponent implements OnInit {
    desa : any
    dataInput = new Desa;
    constructor(
        public desaService: DesaService,
        private router: Router,
        private route: ActivatedRoute
    ){
    }
    ngOnInit(){
        this.desaService.getAllData().subscribe((res:any) =>{
            this.desa = JSON.parse(res._body)
            console.log(this.desa);
        });
    }

    inputData(){
        this.desaService.postData(this.dataInput).subscribe(res=>{
            console.log(res);
            this.router.navigate(['/desa'])
        })
    }
}
