import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AppBlankComponent } from './layouts/blank/blank.component';

export const AppRoutes: Routes = [{
  path: '',
  component: FullComponent,
  children: [{
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }, {
    path: 'fees',
    loadChildren: './fees/fees.module#FeesModule'
  },{
    path: 'inventory',
    loadChildren: './inventory/inventory.module#InventoryModule'
  }, {
    path: 'dashboards',
    loadChildren: './dashboards/dashboards.module#DashboardsModule'
  }, {
    path: 'material',
    loadChildren: './material-component/material.module#MaterialComponentsModule'
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormModule'
  },  {
    path: 'datatables',
    loadChildren: './datatables/datatables.module#DataTablesModule'
  }, {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule'
  }, {
    path: 'charts',
    loadChildren: './charts/chartslib.module#ChartslibModule'
  }]
}, {
  path: '',
  component: AppBlankComponent,
  children: [{
    path: 'authentication',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  }]
}, {
  path: '**',
  redirectTo: 'authentication/404'
}];
