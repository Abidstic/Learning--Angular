import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
@Input() set appUnless(condition:boolean)
{
  if(!condition)
  {
    this.vcrf.createEmbeddedView(this.temRef);

  }
  else{
    this.vcrf.clear();
  }
}
  constructor(private temRef:TemplateRef<any>,private vcrf:ViewContainerRef) { }

}
