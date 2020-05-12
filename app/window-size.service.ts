import { IConfig } from './app.module';
import { BehaviorSubject, config } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowSizeService {
  static config: IConfig;
  config: IConfig;
	static setConf( conf?: IConfig ) {
    this.config = conf;
  }
  viewportWidth: number
  sizeType: string
  private sizeState = new BehaviorSubject<string>('');
  public onSizeState = this.sizeState.asObservable();

  constructor() {
    window.addEventListener("resize", this.windowsWidth.bind(this));
    window.addEventListener("load", this.windowsWidth.bind(this));
    this.config = WindowSizeService.config
  }

  windowsWidth() {
    this.viewportWidth = window.screen.width;
    if (this.viewportWidth < this.config.medium) {
      this.sizeState.next('small');
    }

    if (this.config.medium <= this.viewportWidth && this.viewportWidth < this.config.large) {
      this.sizeState.next('medium');
    }

    if (this.config.large <= this.viewportWidth) {
      this.sizeState.next('large');
    }
  }

  getWindowsWidth() {
    return window.screen.width;
  }

}
