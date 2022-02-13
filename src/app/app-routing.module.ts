import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpExampleComponent } from './pages/http-example/http-example.component';
import { LoginPageTComponent } from './pages/login-page-t/login-page-t.component';
import { PageNotFoundTComponent } from './pages/page-not-found-t/page-not-found-t.component';
import { ParamsExampleTComponent } from './pages/params-example-t/params-example-t.component';
import { PetsComponent } from './pages/pets/pets.component';
import { QueryParamsComponent } from './pages/query-params/query-params.component';
import { ServerInfoComponent } from './pages/server-info/server-info.component';
import { ServersComponent } from './pages/servers/servers.component';
import { AuthTGuard } from './services/auth-t.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'pets', component: PetsComponent, canActivate: [AuthTGuard] },
  { path: 'query', component: QueryParamsComponent, canActivate: [AuthTGuard] },
  {
    path: 'servers',
    component: ServersComponent,
    children: [{ path: 'serverinfo', component: ServerInfoComponent }],
  },
  {
    path: 'login',
    component: LoginPageTComponent,
  },
  {
    path: 'http',
    component: HttpExampleComponent,
  },
  {
    //!localhost:4200/dashboard <-- this is not the route
    //*localhost:4200/dashboard/id mesuyam <-- this is the route
    path: 'dashboard/:id',
    component: ParamsExampleTComponent,
  },
  { path: 'pagenotfoundt', component: PageNotFoundTComponent },
  { path: '**', redirectTo: '/pagenotfoundt' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
