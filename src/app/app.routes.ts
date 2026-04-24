import { Routes } from '@angular/router';
import { Portada } from './portada/portada';
import { Nodo1 } from './nodo-1/nodo-1';
import { Nodo2 } from './nodo-2/nodo-2';
import { Nodo3 } from './nodo-3/nodo-3';
import { Nodo4 } from './nodo-4/nodo-4';

export const routes: Routes = [
  { path: '',        component: Portada },
  { path: 'nodo-1', component: Nodo1 },
  { path: 'nodo-2', component: Nodo2 },
  { path: 'nodo-3', component: Nodo3 },
  { path: 'nodo-4', component: Nodo4 },
  { path: '**',     redirectTo: '' },
];
