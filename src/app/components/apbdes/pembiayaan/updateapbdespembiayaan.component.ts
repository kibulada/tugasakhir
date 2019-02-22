import { Component,OnInit } from '@angular/core';
import { apbdespembiayaanService} from "../../../services/apbdes-pembiayaan.service";
import {ApbdesPembiayaan} from "../../../models/apbdespembiayaan.model"
import { Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'updateapbdespembiayaan',
  templateUrl: './apbdespembiayaan.component.html'
  //styleUrls: ['./app.component.css']
})
export class UpdateApbdespembiayaanComponent implements OnInit {
    apbdespembiayaan : any
    dataInput = new ApbdesPembiayaan;
    subs : any;
    dataApbdespembiayaan : any;
    constructor(
        public apbdespembiayaanService: apbdespembiayaanService,
        private router: Router,
        private route: ActivatedRoute
    ){
    }
    ngOnInit(){
    //     this.apbdespembiayaanService.getAllData().subscribe((res:any) =>{
    //         this.apbdespembiayaan = JSON.parse(res._body)
    //         console.log(this.apbdespembiayaan);
    //     });
    //     this.subs = this.route.params.subscribe((params) => {
    //         this.getId((params['id']));
    //     })
    // }

    // inputData(){
    //     this.apbdespembiayaanService.postData(this.dataInput).subscribe(res=>{
    //         console.log(res);
    //         this.router.navigate(['/apbdespembiayaan'])
    //     })
    // }

    // updateData(){
    //     this.apbdespembiayaanService.update(this.dataApbdespembiayaan[0]).subscribe(res=>{
    //         alert(JSON.stringify(this.dataApbdespembiayaan[0]))
    //         console.log(res);
    //         this.router.navigate(['/apbdespembiayaan'])
    //     })
    // }

    // getId(id){
    //     this.apbdespembiayaanService.findId(id).subscribe(res=>{
    //         this.dataApbdespembiayaan = JSON.parse(res._body);
    //         console.log(this.dataApbdespembiayaan);
    //     })
        
    }
    
}
