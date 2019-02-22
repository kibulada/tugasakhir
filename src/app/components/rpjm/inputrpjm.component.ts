import { Component,OnInit } from '@angular/core';
import { RpjmService } from "../../services/rpjm.service";
import {Rpjm} from "../../models/rpjm.model"
import { Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'inputrpjm',
  templateUrl: './inputrpjm.component.html'
  //styleUrls: ['./app.component.css']
})
export class InputRpjmComponent implements OnInit {
    rpjm : any
    dataInput = new Rpjm;
    constructor(
        public rpjmService: RpjmService,
        private router: Router,
        private route: ActivatedRoute
    ){
    }
    ngOnInit(){
        this.rpjmService.getAllData().subscribe((res:any) =>{
            this.rpjm = JSON.parse(res._body)
            console.log(this.rpjm);
        });
    }

    inputData(){
        this.rpjmService.postData(this.dataInput).subscribe(res=>{
            console.log(res);
            this.router.navigate(['/rpjm'])
        })
    }
}
