import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';
import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [
    AboutComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
  ],
  entryComponents: [IndexComponent, AboutComponent],
  providers: []

})
export class AppModule {
  constructor(private injector: Injector) {


  }

  ngDoBootstrap() {
    const myIndex = createCustomElement(IndexComponent, {
      injector: this.injector
    });
    customElements.define('this-index', myIndex);

    const myAbout = createCustomElement(AboutComponent, {
      injector: this.injector
    });
    customElements.define('this-about', myAbout);
    }


}
