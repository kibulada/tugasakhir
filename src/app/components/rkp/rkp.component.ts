import { Component,OnInit } from '@angular/core';
import { RkpService} from "../../services/rkp.service";
import {Rkp} from "../../models/rkp.model";
import { Router } from "@angular/router"


@Component({
  selector: 'rkp',
  templateUrl: './rkp.component.html'
  //styleUrls: ['./app.component.css']
})
export class RkpComponent implements OnInit {
    rkp : any
    dataInput = new Rkp;
    constructor(
        public rkpService: RkpService,
        private router: Router,
    ){
    }
    ngOnInit(){
        this.rkpService.getAllData().subscribe((res:any) =>{
            this.rkp = JSON.parse(res._body)
            console.log(this.rkp);
        });
        
    }

    deleteData(query: any){
        this.rkpService.delete(query).subscribe(res=> {
            console.log(res);
            this.router.navigate(['/rkp']);
        });
    } 

}
