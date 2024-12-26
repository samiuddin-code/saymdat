// src/types/custom.d.ts or any appropriate location
import * as jquery from 'jquery';

declare global {
  interface JQuery {
    slick(options?: any): any;
    slick(method: 'slickPrev'): void;
    slick(method: 'slickNext'): void;
  }
}

export {}; // This ensures the file is treated as a module
