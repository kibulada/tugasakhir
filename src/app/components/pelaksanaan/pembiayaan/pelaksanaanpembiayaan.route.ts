import {Routes} from '@angular/router';

import { pelaksanaanpembiayaanComponent } from "./pelaksanaanpembiayaan.component";
import { InputpelaksanaanpembiayaanComponent } from "./inputpelaksanaanpembiayaan.component";
import { UpdatepelaksanaanpembiayaanComponent } from './updatepelaksanaanpembiayaan.component';

export const pelaksanaanpembiayaanRoute: Routes =  [
    {
        path: 'pelaksanaanpembiayaan',
        component: pelaksanaanpembiayaanComponent,
        data: { title: 'Data pelaksanaan pembiayaan'}
    }, {
        path: 'tambah-pelaksanaanpembiayaan',
        component: InputpelaksanaanpembiayaanComponent,
        data: { title: 'Tambah Data pelaksanaan pembiayaan'}
    }, {
        path: 'pelaksanaanpembiayaan/:id',
        component: UpdatepelaksanaanpembiayaanComponent,
        data: { title: 'Update Data pelaksanaan pembiayaan'}
    }
];