import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';
import { ButtonRound } from './widgets/button-round';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonReset } from './widgets/button-reset';

@Component({
  selector: 'app-counter-pages-communications',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageLayout, ButtonRound, RouterLink, RouterLinkActive, ButtonReset],
  template: `<app-ui-page title="communications">
    <div class="flex flex-row gap-4">
      <a
        routerLink="/counting/old-skool"
        [routerLinkActive]="['bg-yellow-200', 'uppercase']"
        class="link"
        >Go To the old-skool version</a
      >
      <a routerLink="/counting/communications" routerLinkActive="bg-yellow-200" class="link"
        >Go To the communications version</a
      >
      <a
        routerLink="/counting"
        routerLinkActive="bg-yellow-200"
        class="link"
        [routerLinkActiveOptions]="{ exact: true }"
        >Go Back Home!</a
      >
    </div>
    <div class="flex items-center justify-center">
      <app-counting-button-round
        [disabled]="count() === 0"
        label="-"
        intent="error"
        (click)="decrement()"
      />
      <span class="mx-2 text-2xl font-mono">{{ count() }}</span>
      <app-counting-button-round
        [disabled]="count() === 10"
        label="+"
        intent="success"
        (click)="increment()"
      />

      <app-counting-button-reset [current]="count()" />
    </div>
  </app-ui-page>`,
  styles: ``,
})
export class CommunicationPage {
  count = signal(0); // "resets"
  increment() {
    this.count.update((c) => c + 1);
  }
  decrement() {
    this.count.update((c) => c - 1);
  }
}
