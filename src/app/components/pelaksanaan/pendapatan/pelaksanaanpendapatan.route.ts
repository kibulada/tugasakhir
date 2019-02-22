import {Routes} from '@angular/router';

import { pelaksanaanpendapatanComponent } from "./pelaksanaanpendapatan.component";
import { InputpelaksanaanpendapatanComponent } from "./inputpelaksanaanpendapatan.component";
import { UpdatepelaksanaanpendapatanComponent } from './updatepelaksanaanpendapatan.component';

export const pelaksanaanpendapatanRoute: Routes =  [
    {
        path: 'pelaksanaanpendapatan',
        component: pelaksanaanpendapatanComponent,
        data: { title: 'Data pelaksanaan pendapatan'}
    }, {
        path: 'tambah-pelaksanaanpendapatan',
        component: InputpelaksanaanpendapatanComponent,
        data: { title: 'Tambah Data pelaksanaan pendapatan'}
    }, {
        path: 'pelaksanaanpendapatan/:id',
        component: UpdatepelaksanaanpendapatanComponent,
        data: { title: 'Update Data pelaksanaan pendapatan'}
    }
];