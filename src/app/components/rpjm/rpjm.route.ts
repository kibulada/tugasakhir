import {Routes} from '@angular/router';

import { RpjmComponent } from "./rpjm.component";
import { InputRpjmComponent } from './inputrpjm.component';
import { UpdateRpjmComponent} from './updaterpjm.component';

export const rpjmRoute: Routes =  [
    {
        path: 'rpjm',
        component: RpjmComponent,
        data: { title: 'Data RPJM'}
    }, {
        path: 'tambah-rpjm',
        component: InputRpjmComponent,
        data: { title: 'Tambah Data RPJM'}
    }, {
        path: 'rpjm/:id',
        component: UpdateRpjmComponent,
        data: { title: 'Update Data RPJM'}
    }
    

];