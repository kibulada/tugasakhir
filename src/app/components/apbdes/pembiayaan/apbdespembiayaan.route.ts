import {Routes} from '@angular/router';

import { ApbdespembiayaanComponent } from "./apbdespembiayaan.component";
import { InputApbdespembiayaanComponent } from "./inputapbdespembiayaan.component";
import { UpdateApbdespembiayaanComponent } from './updateapbdespembiayaan.component';

export const apbdespembiayaanRoute: Routes =  [
    {
        path: 'apbdespembiayaan',
        component: ApbdespembiayaanComponent,
        data: { title: 'Data apbdes pembiayaan'}
    }, {
        path: 'tambah-apbdespembiayaan',
        component: InputApbdespembiayaanComponent,
        data: { title: 'Tambah Data apbdes pembiayaan'}
    }, {
        path: 'apbdespembiayaan/:id',
        component: UpdateApbdespembiayaanComponent,
        data: { title: 'Update Data apbdes pembiayaan'}
    }
];