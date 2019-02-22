import {Routes} from '@angular/router';

import { kegiatanComponent } from "./kegiatan.component";
import { InputkegiatanComponent } from "./inputkegiatan.component";
import { UpdatekegiatanComponent } from './updatekegiatan.component';

export const kegiatanRoute: Routes =  [
    {
        path: 'kegiatan',
        component: kegiatanComponent,
        data: { title: 'Data kegiatan'}
    }, {
        path: 'tambah-kegiatan',
        component: InputkegiatanComponent,
        data: { title: 'Tambah Data kegiatan'}
    }, {
        path: 'kegiatan/:id',
        component: InputkegiatanComponent,
        data: { title: 'Input Data kegiatan'}
    },  {
        path: 'kegiatanupdate/:id',
        component: UpdatekegiatanComponent,
        data: { title: 'Update Data kegiatan'}
    }
];