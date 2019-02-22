import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {DesaComponent} from './components/desa/desa.component';
import { RpjmComponent } from './components/rpjm';
import { RkpComponent } from './components/rkp';
import { ApbdesbelanjaComponent, ApbdesBelanja } from './components/apbdes/belanja';
import { ApbdespembiayaanComponent } from './components/apbdes/pembiayaan';
import { ApbdespendapatanComponent } from './components/apbdes/pendapatan';
import { PelaksanaanbelanjaComponent } from './components/pelaksanaan/belanja';
import { pelaksanaanpembiayaanComponent } from './components/pelaksanaan/pembiayaan';
import { pelaksanaanpendapatanComponent } from './components/pelaksanaan/pendapatan';
import { kegiatanComponent } from './components/rkp/kegiatan';

const appRoutes: Routes = [
	{ path : 'home',  component: DesaComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'rpjm', pathMatch: 'full', component: RpjmComponent},
  { path: 'rkp', pathMatch: 'full', component: RkpComponent},
  { path: 'kegiatan', pathMatch: 'full', component: kegiatanComponent},
  { path: 'apbdesbelanja', pathMatch: 'full', component: ApbdesbelanjaComponent},
  { path: 'apbdespembiayaan', pathMatch: 'full', component: ApbdespembiayaanComponent},
  { path: 'apbdespendapatan', pathMatch: 'full', component: ApbdespendapatanComponent},
  { path: 'pelaksanaanbelanja', pathMatch: 'full', component: PelaksanaanbelanjaComponent},
  { path: 'pelaksanaanpembiayaan', pathMatch: 'full', component: pelaksanaanpembiayaanComponent},
  { path: 'pelaksanaanpendapatan', pathMatch: 'full', component: pelaksanaanpendapatanComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
