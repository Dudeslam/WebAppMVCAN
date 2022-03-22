import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';
import { createCustomElement } from '@angular/elements';
let AppModule = class AppModule {
    constructor(injector) {
        this.injector = injector;
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
};
AppModule = __decorate([
    NgModule({
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
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map