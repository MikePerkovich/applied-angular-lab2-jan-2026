import { Component, ChangeDetectionStrategy, input, model } from '@angular/core';

@Component({
  selector: 'app-counting-button-reset',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <button class="btn btn-primary" (click)="reset()" [disabled]="current() === 0">Reset</button>
      @if (current() === 0) {
        <span class="text-sm opacity-80">Cannot Reset because you are at the reset point</span>
      }
    </div>
  `,
  styles: ``,
})
export class ButtonReset {
  current = model(0); // TODO - better example when I do forms tomorrow.

  reset() {
    this.current.set(0);
  }
}
