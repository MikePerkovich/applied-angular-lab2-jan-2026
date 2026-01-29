import { DecimalPipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, ChangeDetectionStrategy, computed } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';
import { Stats } from '../widgets/stats';

export type book = {
  id: number;
  title: string;
  author: string;
  year: number;
  pages: number;
}

@Component({
  selector: 'ht-home-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageLayout, Stats],
  template: `
    <app-ui-page title="list">
      <app-stats-bar [bookArray]="booksResource.value() ?? []"></app-stats-bar>
      <div class="flex flex-row flex-wrap">
        @for(book of booksResource.value(); track book.id){
        <div class="card w-96 bg-base-100 card-md shadow-sm m-2">
            <div class="card-body">
              <h2 class="card-title">{{book?.title}}</h2>
              <i>written by {{book?.author }}</i>
              <p>{{ book?.year}}</p>
              <div class="justify-end card-actions">
              </div>
            </div>
          </div>
        }
      </div>
    </app-ui-page>
  `,
  styles: ``,
})
export class HomePage {
  protected booksResource = httpResource<book[]>(() => '/api/books');
}
