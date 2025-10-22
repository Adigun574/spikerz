import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';

export const routes: Routes = [
    {
        path: '',
        component: Dashboard
    },
    {
        path: 'app',
        component: Dashboard
    }
];
