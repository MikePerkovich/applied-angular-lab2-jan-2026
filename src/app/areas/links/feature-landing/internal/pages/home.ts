import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';

@Component({
  selector: 'app-links-pages-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageLayout],
  template: `<app-ui-page title="List of Links">
    <div class="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 gap-2">
      <!-- is my list of links -->
      <div class="bg-base-100 p-4 rounded-lg shadow-md flex flex-col  ">
        <p class="text-lg text-primary">TypeScript</p>
        <p class="text-base/70">The Site from Microsoft on TypeScript</p>
        <ul class="grid grid-cols-2 border-2 border-dashed border-accent/50 mt-4 p-4 h-full">
          <li class="btn btn-accent btn-xs m-2 col-span-2">
            <a
              class=""
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
              >Home Page</a
            >
          </li>
          <li class="btn btn-accent btn-xs m-2 ">
            <a
              class=""
              href="https://www.typescriptlang.org/docs/handbook"
              target="_blank"
              rel="noopener noreferrer"
              >Handbook
            </a>
          </li>
          <li class="btn btn-accent btn-xs m-2 ">
            <a
              class=""
              href="https://www.typescriptlang.org/play"
              target="_blank"
              rel="noopener noreferrer"
              >Playground</a
            >
          </li>
        </ul>
      </div>
      <div class="bg-base-100 p-4 rounded-lg shadow-md flex flex-col  ">
        <p class="text-lg text-primary">TypeScript</p>
        <p class="text-base/70">The Site from Microsoft on TypeScript</p>
        <ul class="grid grid-cols-2 border-2 border-dashed border-accent/50 mt-4 p-4 h-full">
          <li class="btn btn-accent btn-xs m-2 col-span-2">
            <a
              class=""
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
              >Home Page</a
            >
          </li>
          <li class="btn btn-accent btn-xs m-2 ">
            <a
              class=""
              href="https://www.typescriptlang.org/docs/handbook"
              target="_blank"
              rel="noopener noreferrer"
              >Handbook
            </a>
          </li>
          <li class="btn btn-accent btn-xs m-2 ">
            <a
              class=""
              href="https://www.typescriptlang.org/play"
              target="_blank"
              rel="noopener noreferrer"
              >Playground</a
            >
          </li>
        </ul>
      </div>
      <div class="bg-base-100 p-4 rounded-lg shadow-md flex flex-col  ">
        <p class="text-lg text-primary">TypeScript</p>
        <p class="text-base/70">The Site from Microsoft on TypeScript</p>
        <ul class="grid grid-cols-2 border-2 border-dashed border-accent/50 mt-4 p-4 h-full">
          <li class="btn btn-accent btn-xs m-2 col-span-2">
            <a
              class=""
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
              >Home Page</a
            >
          </li>
        </ul>
      </div>
      <div class="bg-base-100 p-4 rounded-lg shadow-md flex flex-col  ">
        <p class="text-lg text-primary">TypeScript</p>
        <p class="text-base/70">The Site from Microsoft on TypeScript</p>
        <ul class="grid grid-cols-2 border-2 border-dashed border-accent/50 mt-4 p-4 h-full">
          <li class="btn btn-accent btn-xs m-2 col-span-2">
            <a
              class=""
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
              >Home Page</a
            >
          </li>
          <li class="btn btn-accent btn-xs m-2 ">
            <a
              class=""
              href="https://www.typescriptlang.org/docs/handbook"
              target="_blank"
              rel="noopener noreferrer"
              >Handbook
            </a>
          </li>
          <li class="btn btn-accent btn-xs m-2 ">
            <a
              class=""
              href="https://www.typescriptlang.org/play"
              target="_blank"
              rel="noopener noreferrer"
              >Playground</a
            >
          </li>
          <li class="btn btn-accent btn-xs m-2 ">
            <a
              class=""
              href="https://www.typescriptlang.org/play"
              target="_blank"
              rel="noopener noreferrer"
              >Playground</a
            >
          </li>
          <li class="btn btn-accent btn-xs m-2 ">
            <a
              class=""
              href="https://www.typescriptlang.org/play"
              target="_blank"
              rel="noopener noreferrer"
              >Playground</a
            >
          </li>
        </ul>
      </div>
      <div class="bg-base-100 p-4 rounded-lg shadow-md flex flex-col  ">
        <p class="text-lg text-primary">TypeScript</p>
        <p class="text-base/70">The Site from Microsoft on TypeScript</p>
        <ul class="grid grid-cols-2 border-2 border-dashed border-accent/50 mt-4 p-4 h-full">
          <li class="btn btn-accent btn-xs m-2 col-span-2">
            <a
              class=""
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
              >Home Page</a
            >
          </li>
          <li class="btn btn-accent btn-xs m-2 ">
            <a
              class=""
              href="https://www.typescriptlang.org/docs/handbook"
              target="_blank"
              rel="noopener noreferrer"
              >Handbook
            </a>
          </li>
          <li class="btn btn-accent btn-xs m-2 ">
            <a
              class=""
              href="https://www.typescriptlang.org/play"
              target="_blank"
              rel="noopener noreferrer"
              >Playground</a
            >
          </li>
        </ul>
      </div>
      <div class="bg-base-100 p-4 rounded-lg shadow-md flex flex-col  ">
        <p class="text-lg text-primary">TypeScript</p>
        <p class="text-base/70">The Site from Microsoft on TypeScript</p>
        <ul class="grid grid-cols-2 border-2 border-dashed border-accent/50 mt-4 p-4 h-full">
          <li class="btn btn-accent btn-xs m-2 col-span-2">
            <a
              class=""
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
              >Home Page</a
            >
          </li>
          <li class="btn btn-accent btn-xs m-2 ">
            <a
              class=""
              href="https://www.typescriptlang.org/docs/handbook"
              target="_blank"
              rel="noopener noreferrer"
              >Handbook
            </a>
          </li>
          <li class="btn btn-accent btn-xs m-2 ">
            <a
              class=""
              href="https://www.typescriptlang.org/play"
              target="_blank"
              rel="noopener noreferrer"
              >Playground</a
            >
          </li>
        </ul>
      </div>
      <div class="bg-base-100 p-4 rounded-lg shadow-md flex flex-col  ">
        <p class="text-lg text-primary">TypeScript</p>
        <p class="text-base/70">The Site from Microsoft on TypeScript</p>
        <ul class="grid grid-cols-2 border-2 border-dashed border-accent/50 mt-4 p-4 h-full">
          <li class="btn btn-accent btn-xs m-2 col-span-2">
            <a
              class=""
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
              >Home Page</a
            >
          </li>
          <li class="btn btn-accent btn-xs m-2 ">
            <a
              class=""
              href="https://www.typescriptlang.org/docs/handbook"
              target="_blank"
              rel="noopener noreferrer"
              >Handbook
            </a>
          </li>
          <li class="btn btn-accent btn-xs m-2 ">
            <a
              class=""
              href="https://www.typescriptlang.org/play"
              target="_blank"
              rel="noopener noreferrer"
              >Playground</a
            >
          </li>
        </ul>
      </div>
      <div class="bg-base-100 p-4 rounded-lg shadow-md flex flex-col  ">
        <p class="text-lg text-primary">TypeScript</p>
        <p class="text-base/70">The Site from Microsoft on TypeScript</p>
        <ul class="grid grid-cols-2 border-2 border-dashed border-accent/50 mt-4 p-4 h-full">
          <li class="btn btn-accent btn-xs m-2 col-span-2">
            <a
              class=""
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
              >Home Page</a
            >
          </li>
          <li class="btn btn-accent btn-xs m-2 ">
            <a
              class=""
              href="https://www.typescriptlang.org/docs/handbook"
              target="_blank"
              rel="noopener noreferrer"
              >Handbook
            </a>
          </li>
          <li class="btn btn-accent btn-xs m-2 ">
            <a
              class=""
              href="https://www.typescriptlang.org/play"
              target="_blank"
              rel="noopener noreferrer"
              >Playground</a
            >
          </li>
        </ul>
      </div>
    </div>
  </app-ui-page>`,
  styles: ``,
})
export class HomePage {}
