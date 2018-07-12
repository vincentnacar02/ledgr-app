import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginMasterComponent } from './login/login-master/login-master.component';
import { SiteMasterComponent } from './site-master.component';

const APP_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        component: SiteMasterComponent
    },
    {
        path: 'masterfile',
        loadChildren: './masterfiles/masterfiles.module#MasterfilesModule',
        component: SiteMasterComponent
    },
    {
        path: 'transaction',
        loadChildren: './transaction/transaction.module#TransactionModule',
        component: SiteMasterComponent
    },
    {
        path: 'auth',
        loadChildren: './login/login.module#LoginModule',
        component: LoginMasterComponent
    }
]

@NgModule({
    imports: [
      RouterModule.forRoot(
        APP_ROUTES,
        { 
            // enableTracing: true, 
            useHash: true 
        } // <-- debugging purposes only
      )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }