import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ComporbarconjeturaComponent} from './components/comporbarconjetura/comporbarconjetura.component';
import {NumerosrandomComponent} from './components/numerosrandom/numerosrandom.component';

const appRoutes: Routes=[
    //{path:"", component:NumerosrandomComponent},
    {path:"comprobarconjetura/:numero",component:ComporbarconjeturaComponent}
]

export const appRoutingProviders : any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);

