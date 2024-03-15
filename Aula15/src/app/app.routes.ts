import { RouterModule, Routes } from '@angular/router';
import { RouterComponent } from './components/router/router.component';
import { ListComponent } from './components/list/list.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'', component: RouterComponent},
    {path:'',component: ListComponent}, 
];

@NgModule({
    declarations:[],
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
})

export class AppRoutesModule{}