import { Component,OnInit } from '@angular/core';
import { RpjmService} from "../../services/rpjm.service";
import {Rpjm} from "../../models/rpjm.model";
import { Router } from "@angular/router"


@Component({
  selector: 'rpjm',
  templateUrl: './rpjm.component.html'
  //styleUrls: ['./app.component.css']
})
export class RpjmComponent implements OnInit {
    rpjm : any
    dataInput = new Rpjm;
    constructor(
        public rpjmService: RpjmService,
        private router: Router,
    ){
    }
    ngOnInit(){
        this.rpjmService.getAllData().subscribe((res:any) =>{
            this.rpjm = JSON.parse(res._body)
            console.log(this.rpjm);
        });
        
    }

    deleteData(query: any){
        this.rpjmService.delete(query).subscribe(res=> {
            console.log(res);
            this.router.navigate(['/rpjm']);
        });
    } 

}
