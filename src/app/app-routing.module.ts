import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        children: [
            {
                path: '',
                component: HomeComponent,
            },
            {
            	path: '',
            	component: HeaderComponent,
            	outlet: 'app-header'
            }
        ],
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    },
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
