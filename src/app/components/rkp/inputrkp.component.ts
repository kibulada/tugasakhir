import { Component,OnInit } from '@angular/core';
import { RkpService} from "../../services/rkp.service";
import {Rkp} from "../../models/rkp.model"
import { Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'inputrkp',
  templateUrl: './inputrkp.component.html'
  //styleUrls: ['./app.component.css']
})
export class InputRkpComponent implements OnInit {
    rkp : any
    dataInput = new Rkp;
    constructor(
        public rkpService: RkpService,
        private router: Router,
        private route: ActivatedRoute
    ){
    }
    ngOnInit(){
        this.rkpService.getAllData().subscribe((res:any) =>{
            this.rkp = JSON.parse(res._body)
            console.log(this.rkp);
        });
    }

    inputData(){
        this.rkpService.postData(this.dataInput).subscribe(res=>{
            console.log(res);
            this.router.navigate(['/rkp'])
        })
    }
}
