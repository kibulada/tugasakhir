import { Component,OnInit } from '@angular/core';
import { KegiatanService} from "../../../services/kegiatan.service";
import {Kegiatan} from "../../../models/kegiatan.model"
import { Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'updatekegiatan',
  templateUrl: './updatekegiatan.component.html'
  //styleUrls: ['./app.component.css']
})
export class UpdatekegiatanComponent implements OnInit {
    kegiatan : any
    dataInput = new Kegiatan;
    subs : any;
    datakegiatan : any;
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
        });
        this.subs = this.route.params.subscribe((params) => {
            this.getId((params['id']));
        })
    }

    inputData(){
        this.kegiatanService.postData(this.dataInput[0]).subscribe(res=>{
            console.log(res);
            this.router.navigate(['/kegiatan'])
        })
    }

    updateData(){
        this.kegiatanService.update(this.datakegiatan[0]).subscribe(res=>{
            alert(JSON.stringify(this.datakegiatan[0]))
            console.log(res);
            this.router.navigate(['/kegiatan'])
        })
    }

    getId(id){
        this.kegiatanService.findIdKegiatan(id).subscribe(res=>{
            this.datakegiatan = JSON.parse(res._body);
            console.log(this.datakegiatan);
        })
        
    }
    
}
