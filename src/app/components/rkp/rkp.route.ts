import {Routes} from '@angular/router';

import { RkpComponent } from "./rkp.component";
import { InputRkpComponent } from "./inputrkp.component";
import { UpdateRkpComponent } from './updaterkp.component';

export const rkpRoute: Routes =  [
    {
        path: 'rkp',
        component: RkpComponent,
        data: { title: 'Data RKP'}
    }, {
        path: 'tambah-rkp',
        component: InputRkpComponent,
        data: { title: 'Tambah Data RKP'}
    }, {
        path: 'rkp/:id',
        component: UpdateRkpComponent,
        data: { title: 'Update Data RKP'}
    }
];