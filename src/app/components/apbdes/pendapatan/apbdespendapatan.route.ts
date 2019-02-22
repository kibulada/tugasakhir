import {Routes} from '@angular/router';

import { ApbdespendapatanComponent } from "./apbdespendapatan.component";
import { InputApbdespendapatanComponent } from "./inputapbdespendapatan.component";
import { UpdateApbdespendapatanComponent } from './updateapbdespendapatan.component';

export const apbdespendapatanRoute: Routes =  [
    {
        path: 'apbdespendapatan',
        component: ApbdespendapatanComponent,
        data: { title: 'Data apbdes pendapatan'}
    }, {
        path: 'tambah-apbdespendapatan',
        component: InputApbdespendapatanComponent,
        data: { title: 'Tambah Data apbdes pendapatan'}
    }, {
        path: 'apbdespendapatan/:id',
        component: UpdateApbdespendapatanComponent,
        data: { title: 'Update Data apbdes pendapatan'}
    }
];