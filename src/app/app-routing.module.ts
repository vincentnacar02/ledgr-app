import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteMasterComponent } from './site-master.component';
import { AuthGuard } from './_guard/auth.guard';

const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'app',
        pathMatch: 'full'
    },
    {
        path: 'app',
        redirectTo: 'app/dashboard'
    },
    {
        path: 'app',
        component: SiteMasterComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            }
        ],
        canActivate: [AuthGuard]
    },
    {
        path: 'app',
        component: SiteMasterComponent,
        children: [
            {
                path: 'masterfile',
                loadChildren: './masterfiles/masterfiles.module#MasterfilesModule'
            }
        ],
        canActivate: [AuthGuard]
    },
    {
        path: 'app',
        component: SiteMasterComponent,
        children: [
            {
                path: 'transaction',
                loadChildren: './transaction/transaction.module#TransactionModule'
            }
        ],
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        children: [
            {
                path: 'auth',
                loadChildren: './login/login.module#LoginModule'
            }
        ]
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