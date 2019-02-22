import { Component,OnInit } from '@angular/core';
import { DesaService} from "../../services/desa.service";
import {Desa} from "../../models/desa.model";
import { Router } from "@angular/router"


@Component({
  selector: 'desa',
  templateUrl: './desa.component.html'
  //styleUrls: ['./app.component.css']
})
export class DesaComponent implements OnInit {
    desa : any
    dataInput = new Desa;
    constructor(
        public desaService: DesaService,
        private router: Router,
    ){
    }
    ngOnInit(){
        this.desaService.getAllData().subscribe((res:any) =>{
            this.desa = JSON.parse(res._body)
            console.log(this.desa);
        });
        
    }

    deleteData(query: any){
        this.desaService.delete(query).subscribe(res=> {
            console.log(res);
            this.router.navigate(['/desa']);
        });
    } 

}
