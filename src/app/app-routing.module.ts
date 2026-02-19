import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';
import { audit } from 'rxjs';
import { Auth } from './services/auth';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'house',
    loadChildren: () => import('./house/house.module').then( m => m.HousePageModule)
  },
  {
    path: 'usuario-add',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/usuario/usuario-add/usuario-add.module').then( m => m.UsuarioAddPageModule)
  },
  {
    path: 'produto-add',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/produto/produto-add/produto-add.module').then( m => m.ProdutoAddPageModule)
  },
  {
    path: 'cliente-add',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/cliente/cliente-add/cliente-add.module').then( m => m.ClienteAddPageModule)
  },
  {
    path: 'usuario-list',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/usuario/usuario-list/usuario-list.module').then( m => m.UsuarioListPageModule)
  },
  {
    path: 'usuario-edit/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/usuario/usuario-edit/usuario-edit.module').then( m => m.UsuarioEditPageModule)
  },
  {
    path: 'login',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'splash',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'cliente-list',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/cliente/cliente-list/cliente-list.module').then( m => m.ClienteListPageModule)
  },
  {
    path: 'cliente-edit',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/cliente/cliente-edit/cliente-edit.module').then( m => m.ClienteEditPageModule)
  },
  {
    path: 'produto-list',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/produto/produto-list/produto-list.module').then( m => m.ProdutoListPageModule)
  },
  {
    path: 'produto-detalhe/:id',
    loadChildren: () => import('./pages/produto/produto-detalhe/produto-detalhe.module').then( m => m.ProdutoDetalhePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
