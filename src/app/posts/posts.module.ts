import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './components/posts/posts.component';
import { PostsService } from './services/posts.service';
import { ChildRouteAComponent } from './components/posts/child-route-a.component';
import { ChildRouteBComponent } from './components/posts/child-route-b.component';
import { RouterModule } from '@angular/router';
import { MostsService } from './services/mosts.service';
import { OtherComponent } from './components/posts/other.component';
import { ChildBBComponent } from './components/posts/child-b-b.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [PostsService, MostsService],
  declarations: [PostsComponent, ChildRouteAComponent, ChildRouteBComponent, OtherComponent, ChildBBComponent],
  exports: [PostsComponent],
})
export class PostsModule {}
