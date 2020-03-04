import { ModuleWithProviders } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { AppComponent } from './app.component';  

  
const appRoutes: Routes = [  
    { path: '', redirectTo: 'Default', pathMatch: 'full' },  
    { path: 'WithSorting', component: AppComponent },  

  
];  
  
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);  