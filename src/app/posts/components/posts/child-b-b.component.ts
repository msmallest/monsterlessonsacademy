import { Component, computed } from '@angular/core';
import { MostsStore } from './mosts.store';

@Component({
  selector: 'app-child-b-b',
  template: `
    <p>
      child-b-b works!
    </p>
    <pre>mosts signal {{$thingy() | json}}</pre>
    <pre>mosts signal titles allcap {{$thingyDoo() | json}}</pre>
    <pre>vm mosts{{(vm$ | async)?.mosts | json}}</pre>
  `,
  styles: [],
})
export class ChildBBComponent {
  vm$ = this.mostsStore.vm$;

  $thingy = this.mostsStore.selectSignal(s => s.mosts)

  $thingyDoo = computed(() => this.$thingy().map(thing => thing.title.toUpperCase()))
  constructor(private mostsStore: MostsStore) {}
}
