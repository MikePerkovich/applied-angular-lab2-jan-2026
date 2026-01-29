import { DecimalPipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, ChangeDetectionStrategy, computed } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';

type book = {
  id: number;
  title: string;
  author: string;
  year: number;
  pages: number;
}

@Component({
  selector: 'ht-home-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageLayout, DecimalPipe],
  template: `
    <app-ui-page title="list">

    <!-- 
      The total number of books.
      The earliest year a book was published from our list.
      The most recent year a book was published from our list.
      The average number of pages of the books. 
    -->
      @let stats = statsSignal();
      <div class="stats shadow flex flex-row bg-base-100 mt-auto m-2">
        <div class="stat place-items-center">
          <div class="stat-title">Number Of Books</div>
          <div class="stat-value text-primary">{{ stats.totalBooks }}</div>
        </div>
        <div class="stat place-items-center">
          <div class="stat-title">Earliest Published Book</div>
          <div class="stat-value text-primary">{{ stats.earliestBook }}</div>
        </div>
        <div class="stat place-items-center">
          <div class="stat-title">Latest Published Book</div>
          <div class="stat-value text-primary">{{ stats.latestBook }}</div>
        </div>
        <div class="stat place-items-center">
          <div class="stat-title">Average Page Count</div>
          <div class="stat-value text-primary">{{ stats.averagePages | number: '1.0-2' }}</div>
        </div>
      </div>
      <div class="flex flex-row flex-wrap">
        @for(book of booksResource.value(); track book.id){
        <div class="card w-96 bg-base-100 card-md shadow-sm m-2">
          <!-- @let book = booksResource.value()?.[0]; -->
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

  protected statsSignal = computed(() => {
    const responseArray = this.booksResource.value();

    if(!responseArray){
      return {}
    }

    const totalBooks = responseArray.length;
    let pages = 0;
    let earliest: number | undefined = undefined;
    let latest: number | undefined = undefined;
    responseArray.forEach(responseBook => {
      pages += responseBook.pages;
      if (!earliest || earliest > responseBook.year){
        earliest = responseBook.year;
      }
      if (!latest || latest < responseBook.year){
        latest = responseBook.year;
      }
    });

    return {
      totalBooks: totalBooks,
      earliestBook: earliest,
      latestBook: latest,
      averagePages: pages / totalBooks
    }
  })
}
