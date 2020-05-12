import { WindowSizeService } from './window-size.service';
import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[ifViewportSize]'
})
export class IfViewportSizeDirective {
  sizeState: string;
  condition: string
  constructor(private templateRef: TemplateRef<any>, 
              private viewContainer: ViewContainerRef,
              private windowSizeService: WindowSizeService) 
  {
    this.windowSizeService.onSizeState.subscribe((state: string) => {
      this.sizeState = state;
      this.showItems();
    });
 }

  @Input() set ifViewportSize(condition: string) {
    this.condition = condition;
    this.showItems();
  }

  showItems() {
    if (this.condition == this.sizeState) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}