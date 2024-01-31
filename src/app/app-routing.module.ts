import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/components/posts/posts.component';
import { ChildRouteAComponent } from './posts/components/posts/child-route-a.component';
import { ChildRouteBComponent } from './posts/components/posts/child-route-b.component';
import { OtherComponent } from './posts/components/posts/other.component';

const routes: Routes = [
  {path: 'posts', component: PostsComponent, children: [
    {path: 'a', component: ChildRouteAComponent},
    {path: 'b', component: ChildRouteBComponent}
  ]},
  {path: 'other', component: OtherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
