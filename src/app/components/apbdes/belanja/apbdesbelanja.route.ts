import {Routes} from '@angular/router';

import { ApbdesbelanjaComponent } from "./apbdesbelanja.component";
import { InputApbdesbelanjaComponent } from "./inputapbdesbelanja.component";
import { UpdateApbdesbelanjaComponent } from './updateapbdesbelanja.component';

export const apbdesbelanjaRoute: Routes =  [
    {
        path: 'apbdesbelanja',
        component: ApbdesbelanjaComponent,
        data: { title: 'Data apbdes belanja'}
    }, {
        path: 'tambah-apbdesbelanja',
        component: InputApbdesbelanjaComponent,
        data: { title: 'Tambah Data apbdes belanja'}
    }, {
        path: 'apbdesbelanja/:id',
        component: UpdateApbdesbelanjaComponent,
        data: { title: 'Update Data apbdes belanja'}
    }
];