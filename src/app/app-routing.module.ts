import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PetsComponent } from './pages/pets/pets.component';
import { QueryParamsComponent } from './pages/query-params/query-params.component';
import { ServerInfoComponent } from './pages/server-info/server-info.component';
import { ServersComponent } from './pages/servers/servers.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'query', component: QueryParamsComponent },
  {
    path: 'servers',
    component: ServersComponent,
    children: [{ path: 'serverinfo', component: ServerInfoComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
