import { Directive, Input } from '@angular/core';

@Directive({
    selector: 'img[src]',
    host: {
        '[src]': 'checkPath(src)',
        '(error)': 'onError()'
    }
})
export class DefaultImage { 
    @Input() src: string | undefined;
    public defaultImg: string = '{YOUR_DEFAULT_IMG}';
    public onError() {
        this.src = this.defaultImg;
    }
    public checkPath(src: any) {
        return src ? src : this.defaultImg;
    }
}