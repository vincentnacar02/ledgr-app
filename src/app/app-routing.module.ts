import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
    {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'masterfile',
        loadChildren: './masterfiles/masterfiles.module#MasterfilesModule'
    },
    {
        path: 'transaction',
        loadChildren: './transaction/transaction.module#TransactionModule'
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