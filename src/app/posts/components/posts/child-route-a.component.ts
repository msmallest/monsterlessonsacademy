import { Component } from '@angular/core';
import { PostsStore } from './posts.store';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-child-route-a',
  template: `
  <b>Posts</b>
    <ng-container *ngIf="vm$ | async as vm">
      <h1>Posts Page</h1>

      <div>
        <form [formGroup]="addForm" (ngSubmit)="onAdd()">
          <input type="text" placeholder="Add..." formControlName="title" />
        </form>
      </div>

      <div *ngIf="vm.isLoading">Loading...</div>

      <div *ngIf="vm.error">{{ vm.error }}</div>

      <div *ngFor="let post of vm.posts">
        {{ post.title }}
      </div>
    </ng-container>
  `,
  styles: [
  ]
})
export class ChildRouteAComponent {
  addForm = this.fb.nonNullable.group({
    title: '',
  });
  vm$ = this.postsStore.vm$;

  constructor(private fb: FormBuilder, private postsStore: PostsStore) {}

  ngOnInit(): void {
  }
  onAdd(): void {
    this.postsStore.createPost(this.addForm.getRawValue());
    this.addForm.reset();
  }
}
