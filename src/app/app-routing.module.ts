import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'house',
    loadChildren: () => import('./house/house.module').then( m => m.HousePageModule)
  },
  {
    path: 'usuario-add',
    loadChildren: () => import('./pages/usuario/usuario-add/usuario-add.module').then( m => m.UsuarioAddPageModule)
  },
  {
    path: 'produto-add',
    loadChildren: () => import('./pages/produto/produto-add/produto-add.module').then( m => m.ProdutoAddPageModule)
  },
  {
    path: 'cliente-add',
    loadChildren: () => import('./pages/cliente/cliente-add/cliente-add.module').then( m => m.ClienteAddPageModule)
  },
  {
    path: 'usuario-list',
    loadChildren: () => import('./pages/usuario/usuario-list/usuario-list.module').then( m => m.UsuarioListPageModule)
  },
  {
    path: 'usuario-edit',
    loadChildren: () => import('./pages/usuario/usuario-edit/usuario-edit.module').then( m => m.UsuarioEditPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
