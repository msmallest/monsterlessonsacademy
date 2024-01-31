import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { exhaustMap, Observable, tap } from 'rxjs';
import { MostInterface } from '../../types/most.interface';
import { MostsService } from '../../services/mosts.service';

export interface MostsComponentState {
  isLoading: boolean;
  error: string | null;
  mosts: MostInterface[];
  options: MostInterface[];
}

@Injectable()
export class MostsStore extends ComponentStore<MostsComponentState> {
  private isLoading$ = this.select((state) => state.isLoading);
  private error$ = this.select((state) => state.error);
  private mosts$ = this.select((state) => state.mosts);
  private options$ = this.select((state) => state.options);
  vm$ = this.select({
    isLoading: this.isLoading$,
    error: this.error$,
    mosts: this.mosts$,
    options: this.options$
  });
  setIsLoading = this.updater((state) => ({ ...state, isLoading: true }));
  setError = this.updater((state, error: HttpErrorResponse) => ({
    ...state,
    isLoading: false,
    error: error.message,
  }));
  addMosts = this.updater((state, mosts: MostInterface[]) => ({
    ...state,
    isLoading: false,
    mosts,
  }));
  addPost = this.updater((state, most: MostInterface) => ({
    ...state,
    isLoading: false,
    mosts: [...state.mosts, most],
  }));
  addMostsOptions = this.updater((state, options: MostInterface[]) => ({
    ...state,
    isLoading: false,
    options,
  }));

  getMostsOptions = this.effect((trigger$) => {
    return trigger$.pipe(
      tap(() => {
        this.setIsLoading();
      }),
      exhaustMap(() => {
        return this.mostsService.getMostsOptions().pipe(
          tapResponse(
            (mosts) => this.addMostsOptions(mosts),
            (err: HttpErrorResponse) => this.setError(err)
          )
        );
      })
    );
  });

  getMosts = this.effect((trigger$) => {
    return trigger$.pipe(
      tap(() => {
        this.setIsLoading();
      }),
      exhaustMap(() => {
        return this.mostsService.getMosts().pipe(
          tapResponse(
            (mosts) => this.addMosts(mosts),
            (err: HttpErrorResponse) => this.setError(err)
          )
        );
      })
    );
  });

  createMost = this.effect((most$: Observable<{ title: string }>) => {
    return most$.pipe(
      tap(() => {
        this.setIsLoading();
      }),
      exhaustMap((most) => {
        return this.mostsService.createMost(most).pipe(
          tapResponse(
            (most) => this.addPost(most),
            (err: HttpErrorResponse) => this.setError(err)
          )
        );
      })
    );
  });

  constructor(private mostsService: MostsService) {
    super({
      isLoading: false,
      error: null,
      mosts: [],
      options: []
    });
  }

  ngrxOnStoreInit() {
    console.log('Mosts >STORE< init')
  }

  ngrxOnStateInit() {
    console.log('Mosts  <STATE> init')
  }

  override ngOnDestroy(): void {
    // 👇 add this line
    super.ngOnDestroy();
    console.log('Mosts onDestroy')
  }
}
