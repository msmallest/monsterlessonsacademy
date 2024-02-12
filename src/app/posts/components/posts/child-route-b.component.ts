import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MostsStore } from './mosts.store';

@Component({
  selector: 'app-child-route-b',
  template: `
    <b>Mosts</b>
    <ng-container *ngIf="vm$ | async as vm">
      <h1>Mosts Page</h1>

      <div>
        <form [formGroup]="addForm" (ngSubmit)="onAdd()">
          <input type="text" placeholder="Add..." formControlName="title" />
        </form>
      </div>

      <div *ngIf="vm.isLoading">Loading...</div>

      <div *ngIf="vm.error">{{ vm.error }}</div>

      <div *ngFor="let post of vm.mosts">
        {{ post.title }}
      </div>

      <div><p>Options</p><pre>{{vm.options | json}}</pre></div>
    </ng-container>
    <app-child-b-b />
  `,
  styles: [],
})
export class ChildRouteBComponent {
  addForm = this.fb.nonNullable.group({
    title: '',
  });
  vm$ = this.mostsStore.vm$;

  constructor(private fb: FormBuilder, private mostsStore: MostsStore) {}

  ngOnInit(): void {
    this.mostsStore.getMostsOptions();
  }
  onAdd(): void {
    this.mostsStore.createMost(this.addForm.getRawValue());
    this.addForm.reset();
  }
}
