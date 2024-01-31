import { Component } from '@angular/core';
import { MostsStore } from './mosts.store';

@Component({
  selector: 'app-child-b-b',
  template: `
    <p>
      child-b-b works!
    </p>
    <pre>{{(vm$ | async)?.mosts | json}}</pre>
  `,
  styles: [],
})
export class ChildBBComponent {
  vm$ = this.mostsStore.vm$;

  constructor(private mostsStore: MostsStore) {}
}
