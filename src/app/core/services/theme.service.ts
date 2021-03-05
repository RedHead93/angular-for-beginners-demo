import { Injectable } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public value: Theme;

  constructor() {
  }

  public setTheme(theme: Theme): void {
    this.value = theme;
    console.log('theme: ', this.value)
  }
}
