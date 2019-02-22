import { Component,OnInit } from '@angular/core';
import { apbdespendapatanService} from "../../../services/apbdes-pendapatan.service";
import {ApbdesPendapatan} from "../../../models/apbdespendapatan.model"
import { Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'updateapbdespendapatan',
  templateUrl: './apbdespendapatan.component.html'
  //styleUrls: ['./app.component.css']
})
export class UpdateApbdespendapatanComponent implements OnInit {
    apbdespendapatan : any
    dataInput = new ApbdesPendapatan;
    subs : any;
    dataApbdespendapatan : any;
    constructor(
        public apbdespendapatanService: apbdespendapatanService,
        private router: Router,
        private route: ActivatedRoute
    ){
    }
    ngOnInit(){
    //     this.apbdespendapatanService.getAllData().subscribe((res:any) =>{
    //         this.apbdespendapatan = JSON.parse(res._body)
    //         console.log(this.apbdespendapatan);
    //     });
    //     this.subs = this.route.params.subscribe((params) => {
    //         this.getId((params['id']));
    //     })
    // }

    // inputData(){
    //     this.apbdespendapatanService.postData(this.dataInput).subscribe(res=>{
    //         console.log(res);
    //         this.router.navigate(['/apbdespendapatan'])
    //     })
    // }

    // updateData(){
    //     this.apbdespendapatanService.update(this.dataApbdespendapatan[0]).subscribe(res=>{
    //         alert(JSON.stringify(this.dataApbdespendapatan[0]))
    //         console.log(res);
    //         this.router.navigate(['/apbdespendapatan'])
    //     })
    // }

    // getId(id){
    //     this.apbdespendapatanService.findId(id).subscribe(res=>{
    //         this.dataApbdespendapatan = JSON.parse(res._body);
    //         console.log(this.dataApbdespendapatan);
    //     })
        
    }
    
}
