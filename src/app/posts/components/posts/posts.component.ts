import { Component, OnInit } from '@angular/core';
import { PostsStore } from './posts.store';
import { provideComponentStore } from '@ngrx/component-store';
import { MostsStore } from './mosts.store';

@Component({
  selector: 'posts',
  template: `
    <h1>Top level</h1>
    <br />
    <br />
    <router-outlet></router-outlet>
  `,
  providers: [provideComponentStore(PostsStore), provideComponentStore(MostsStore)]
})
export class PostsComponent implements OnInit {
  constructor(private postsStore: PostsStore, private mostsStore: MostsStore) {}

  ngOnInit(): void {
    this.postsStore.getPosts();
    this.mostsStore.getMosts();
    this.mostsStore.getMostsOptions();
  }
}
