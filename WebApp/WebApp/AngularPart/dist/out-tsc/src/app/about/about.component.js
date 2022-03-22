import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AboutComponent = class AboutComponent {
    constructor() {
        this.time = new Date();
        this.intervalID = 0;
    }
    ngOnInit() {
        this.intervalID = window.setInterval(() => {
            this.time = new Date();
        }, 1000);
    }
    ngOnDestroy() {
        window.clearInterval(this.intervalID);
    }
    getTime() {
        return `${this.time.getHours()}:${this.time.getMinutes()}:${this.time.getSeconds()}`;
    }
};
AboutComponent = __decorate([
    Component({
        template: '<p> Current Time is: {{getTime()}}</p>',
        styleUrls: ['./about.component.sass']
    })
], AboutComponent);
export { AboutComponent };
//# sourceMappingURL=about.component.js.map