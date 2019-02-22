import {Routes} from '@angular/router';

import { PelaksanaanbelanjaComponent } from "./pelaksanaanbelanja.component";
import { InputPelaksanaanbelanjaComponent } from "./inputpelaksanaanbelanja.component";
import { UpdatepelaksanaanbelanjaComponent } from './updatepelaksanaanbelanja.component';


export const pelaksanaanbelanjaRoute: Routes =  [
    {
        path: 'pelaksanaanbelanja',
        component: PelaksanaanbelanjaComponent,
        data: { title: 'Data pelaksanaan belanja'}
    }, {
        path: 'tambah-pelaksanaanbelanja',
        component: InputPelaksanaanbelanjaComponent,
        data: { title: 'Tambah Data pelaksanaan belanja'}
    }, {
        path: 'pelaksanaanbelanja/:id',
        component: UpdatepelaksanaanbelanjaComponent,
        data: { title: 'Update Data pelaksanaan belanja'}
    }
];