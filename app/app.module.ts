import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './test.component';
import { IfViewportSizeDirective } from './if-viewport-size.directive';
import { WindowSizeService } from './window-size.service';

export interface IConfig {
  medium: number;
  large: number;
};

const config: IConfig = {medium: 480, large: 768};
WindowSizeService.setConf(config);

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TestComponent, IfViewportSizeDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
