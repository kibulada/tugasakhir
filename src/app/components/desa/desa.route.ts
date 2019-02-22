import {Routes} from '@angular/router';

import { DesaComponent } from "./desa.component";
import { InputDesaComponent } from "./inputdesa.component";
import { UpdateDesaComponent } from './updatedesa.component';

export const desaRoute: Routes =  [
    {
        path: 'desa',
        component: DesaComponent,
        data: { title: 'Data Desa'}
    }, {
        path: 'tambah-desa',
        component: InputDesaComponent,
        data: { title: 'Tambah Data Desa'}
    }, {
        path: 'desa/:id',
        component: UpdateDesaComponent,
        data: { title: 'Update Data Desa'}
    }
];