import { Component,OnInit } from '@angular/core';
import { RkpService} from "../../services/rkp.service";
import {Rkp} from "../../models/rkp.model"
import { Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'updaterkp',
  templateUrl: './updaterkp.component.html'
  //styleUrls: ['./app.component.css']
})
export class UpdateRkpComponent implements OnInit {
    rkp : any
    dataInput = new Rkp;
    subs : any;
    dataRkp : any;
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
        this.subs = this.route.params.subscribe((params) => {
            this.getId((params['id']));
        })
    }

    inputData(){
        this.rkpService.postData(this.dataInput).subscribe(res=>{
            console.log(res);
            this.router.navigate(['/rkp'])
        })
    }

    updateData(){
        this.rkpService.update(this.dataRkp[0]).subscribe(res=>{
            alert(JSON.stringify(this.dataRkp[0]))
            console.log(res);
            this.router.navigate(['/rkp'])
        })
    }

    getId(id){
        this.rkpService.findId(id).subscribe(res=>{
            this.dataRkp = JSON.parse(res._body);
            console.log(this.dataRkp);
        })
        
    }
    
}
