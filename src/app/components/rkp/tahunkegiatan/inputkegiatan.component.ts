import { Component,OnInit } from '@angular/core';
import { KegiatanService} from "../../../services/kegiatan.service";
import {Kegiatan} from "../../../models/kegiatan.model"
import {Rkp} from "../../../models/rkp.model"
import { Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'inputkegiatan',
  templateUrl: './inputkegiatan.component.html'
  //styleUrls: ['./app.component.css']
})
export class InputkegiatanComponent implements OnInit {
    kegiatan : any
    dataBidang: Rkp[];
    dataInput = new Kegiatan;
    constructor(
        public kegiatanService: KegiatanService,
        private router: Router,
        private route: ActivatedRoute
       
    ){
       
    }
    ngOnInit(){
        this.kegiatanService.getAllData().subscribe((res:any) =>{
            this.kegiatan = JSON.parse(res._body)
            console.log(this.kegiatan);
            this.kegiatan = this.route.params.subscribe((params) => {
                this.getId((params['id']));
            })
        });
    }

    inputData(query){
        this.dataInput = query;
        this.dataInput.status = 0;
        this.kegiatanService.postData(this.dataInput).subscribe(res=>{
            console.log(res);
            this.router.navigate(['/kegiatan'])
        })
    }

    getId(id){
        this.kegiatanService.findId(id).subscribe(res=>{
            this.dataBidang = JSON.parse(res._body);
            this.dataInput.id_bidang = this.dataBidang[0].id 
            console.log(this.dataInput.id_bidang);
        })
        
    }
}
