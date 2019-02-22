import { Component,OnInit } from '@angular/core';
import { RpjmService} from "../../services/rpjm.service";
import {Rpjm} from "../../models/rpjm.model"
import { Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'updaterpjm',
  templateUrl: './updaterpjm.component.html'
  //styleUrls: ['./app.component.css']
})
export class UpdateRpjmComponent implements OnInit {
    rpjm : any
    dataInput = new Rpjm;
    subs : any;
    dataRpjm : any;
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
        this.subs = this.route.params.subscribe((params) => {
            this.getId((params['id']));
        })
    }

    inputData(){
        this.rpjmService.postData(this.dataInput).subscribe(res=>{
            console.log(res);
            this.router.navigate(['/rpjm'])
        })
    }

    updateData(){
        this.rpjmService.update(this.dataRpjm[0]).subscribe(res=>{
            alert(JSON.stringify(this.dataRpjm[0]))
            console.log(res);
            this.router.navigate(['/rpjm'])
        })
    }

    getId(id){
        this.rpjmService.findId(id).subscribe(res=>{
            this.dataRpjm = JSON.parse(res._body);
            console.log(this.dataRpjm);
        })
        
    }
    
}
