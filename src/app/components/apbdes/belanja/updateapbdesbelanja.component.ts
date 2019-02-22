import { Component,OnInit } from '@angular/core';
import { apbdesbelanjaService} from "../../../services/apbdes-belanja.service";
import {ApbdesBelanja} from "../../../models/apbdesbelanja.model"
import { Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'updateapbdesbelanja',
  templateUrl: './apbdesbelanja.component.html'
  //styleUrls: ['./app.component.css']
})
export class UpdateApbdesbelanjaComponent implements OnInit {
    apbdesbelanja : any
    dataInput = new ApbdesBelanja;
    subs : any;
    dataApbdesbelanja : any;
    constructor(
        public apbdesbelanjaService: apbdesbelanjaService,
        private router: Router,
        private route: ActivatedRoute
    ){
    }
    ngOnInit(){
    //     this.apbdesbelanjaService.getAllData().subscribe((res:any) =>{
    //         this.apbdesbelanja = JSON.parse(res._body)
    //         console.log(this.apbdesbelanja);
    //     });
    //     this.subs = this.route.params.subscribe((params) => {
    //         this.getId((params['id']));
    //     })
    // }

    // inputData(){
    //     this.apbdesbelanjaService.postData(this.dataInput).subscribe(res=>{
    //         console.log(res);
    //         this.router.navigate(['/apbdesbelanja'])
    //     })
    // }

    // updateData(){
    //     this.apbdesbelanjaService.update(this.dataApbdesbelanja[0]).subscribe(res=>{
    //         alert(JSON.stringify(this.dataApbdesbelanja[0]))
    //         console.log(res);
    //         this.router.navigate(['/apbdesbelanja'])
    //     })
    // }

    // getId(id){
    //     this.apbdesbelanjaService.findId(id).subscribe(res=>{
    //         this.dataApbdesbelanja = JSON.parse(res._body);
    //         console.log(this.dataApbdesbelanja);
    //     })
        
    }
    
}
