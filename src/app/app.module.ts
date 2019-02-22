import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DesaComponent, desaRoute, InputDesaComponent, UpdateDesaComponent} from "src/app/components/desa";
import { DesaService } from 'src/app/services/desa.service';
import { AppRoutingModule } from "src/app/app-routing.module";
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import { RouterModule } from '@angular/router';
import {DataTableModule} from "angular-6-datatable";
import { RpjmComponent, rpjmRoute, InputRpjmComponent, UpdateRpjmComponent } from 'src/app/components/rpjm';
import { RpjmService } from 'src/app/services/rpjm.service';
import { kegiatanComponent, kegiatanRoute, InputkegiatanComponent, UpdatekegiatanComponent } from 'src/app/components/rkp/kegiatan';
import { KegiatanService } from 'src/app/services/kegiatan.service';
import { RkpComponent, rkpRoute, InputRkpComponent, UpdateRkpComponent } from 'src/app/components/rkp';
import { RkpService } from 'src/app/services/rkp.service';
import { ApbdesbelanjaComponent, apbdesbelanjaRoute, InputApbdesbelanjaComponent, UpdateApbdesbelanjaComponent } from 'src/app/components/apbdes/belanja';
import { apbdesbelanjaService } from 'src/app/services/apbdes-belanja.service';
import { ApbdespembiayaanComponent, apbdespembiayaanRoute, InputApbdespembiayaanComponent, UpdateApbdespembiayaanComponent } from 'src/app/components/apbdes/pembiayaan';
import { apbdespembiayaanService } from 'src/app/services/apbdes-pembiayaan.service';
import { ApbdespendapatanComponent, apbdespendapatanRoute, InputApbdespendapatanComponent, UpdateApbdespendapatanComponent } from 'src/app/components/apbdes/pendapatan';
import { apbdespendapatanService } from 'src/app/services/apbdes-pendapatan.service';
import { PelaksanaanbelanjaComponent, pelaksanaanbelanjaRoute, InputPelaksanaanbelanjaComponent, UpdatepelaksanaanbelanjaComponent } from 'src/app/components/pelaksanaan/belanja';
import { PelaksanaanBelanjaService } from 'src/app/services/Pelaksanaan-belanja.service';
import { pelaksanaanpembiayaanComponent, pelaksanaanpembiayaanRoute, InputpelaksanaanpembiayaanComponent, UpdatepelaksanaanpembiayaanComponent } from 'src/app/components/pelaksanaan/pembiayaan';
import { PelaksanaanPembiayaanService } from 'src/app/services/Pelaksanaan-pembiayaan.service';
import { pelaksanaanpendapatanComponent, pelaksanaanpendapatanRoute, InputpelaksanaanpendapatanComponent, UpdatepelaksanaanpendapatanComponent } from 'src/app/components/pelaksanaan/pendapatan';
import { PelaksanaanPendapatanService } from 'src/app/services/Pelaksanaan-pendapatan.service';



@NgModule({
  declarations: [
    AppComponent,
    DesaComponent,
    InputDesaComponent,
    UpdateDesaComponent,
    RpjmComponent,
    InputRpjmComponent,
    UpdateRpjmComponent,
    RkpComponent,
    InputRkpComponent,
    UpdateRkpComponent,
    ApbdesbelanjaComponent,
    InputApbdesbelanjaComponent,
    UpdateApbdesbelanjaComponent,
    ApbdespembiayaanComponent,
    InputApbdespembiayaanComponent,
    UpdateApbdespembiayaanComponent,
    ApbdespendapatanComponent,
    InputApbdespendapatanComponent,
    UpdateApbdespendapatanComponent,
    PelaksanaanbelanjaComponent,
    InputPelaksanaanbelanjaComponent,
    UpdatepelaksanaanbelanjaComponent,
    pelaksanaanpembiayaanComponent,
    InputpelaksanaanpembiayaanComponent,
    UpdatepelaksanaanpembiayaanComponent,
    pelaksanaanpendapatanComponent,
    InputpelaksanaanpendapatanComponent,
    UpdatepelaksanaanpendapatanComponent,
    kegiatanComponent,
    InputkegiatanComponent,
    UpdatekegiatanComponent,
  ],
  imports: [
    DataTableModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ButtonModule,
    RouterModule.forRoot(
      desaRoute,
      { enableTracing: true }
    ),
    RouterModule.forRoot(
      rpjmRoute,
      { enableTracing: true }
    ),
    RouterModule.forRoot(
      rkpRoute,
      { enableTracing: true }
    ),
    RouterModule.forRoot(
      kegiatanRoute,
      { enableTracing: true }
    ),
    RouterModule.forRoot(
      apbdesbelanjaRoute,
      { enableTracing: true }
    ),
    RouterModule.forRoot(
      apbdespembiayaanRoute,
      { enableTracing: true }
    ),
    RouterModule.forRoot(
      apbdespendapatanRoute,
      { enableTracing: true }
    ),
    RouterModule.forRoot(
      pelaksanaanbelanjaRoute,
      { enableTracing: true }
    ),
    RouterModule.forRoot(
      pelaksanaanpembiayaanRoute,
      { enableTracing: true }
    ),
    RouterModule.forRoot(
      pelaksanaanpendapatanRoute,
      { enableTracing: true }
    )
  ],
  providers: [
    DesaService, 
    RpjmService, 
    RkpService, 
    apbdesbelanjaService, 
    apbdespembiayaanService,
    apbdespendapatanService, 
    PelaksanaanBelanjaService, 
    PelaksanaanPembiayaanService, 
    PelaksanaanPendapatanService,
    KegiatanService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
