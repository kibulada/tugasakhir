import { Component,OnInit } from '@angular/core';
import { DesaService} from "../../services/desa.service";
import {Desa} from "../../models/desa.model"
import { Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'updatedesa',
  templateUrl: './updatedesa.component.html'
  //styleUrls: ['./app.component.css']
})
export class UpdateDesaComponent implements OnInit {
    desa : any
    dataInput = new Desa;
    subs : any;
    dataDesa : any;
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
        this.subs = this.route.params.subscribe((params) => {
            this.getId((params['id']));
        })
    }

    inputData(){
        this.desaService.postData(this.dataInput).subscribe(res=>{
            console.log(res);
            this.router.navigate(['/desa'])
        })
    }

    updateData(){
        this.desaService.update(this.dataDesa[0]).subscribe(res=>{
            alert(JSON.stringify(this.dataDesa[0]))
            console.log(res);
            this.router.navigate(['/desa'])
        })
    }

    getId(id){
        this.desaService.findId(id).subscribe(res=>{
            this.dataDesa = JSON.parse(res._body);
            console.log(this.dataDesa);
        })
        
    }
    
}
