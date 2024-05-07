
import { Component } from '@angular/core';

interface MiObjeto {
  [key: string]: string;
}

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
})
export class SizeComponent  {
  size: MiObjeto = {
    Small:"sm",
    Medium:"md",
    Large:"lg",
    Extra_large:"xl",
  };

  objectKeys(obj: MiObjeto) {
    return Object.keys(obj);
  }
}
