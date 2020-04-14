import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'text-transform'
})
export class TextTransformPipe implements PipeTransform {
    transform(value: any, args?: any ): any {
        if (!value) {
            return value;
        }

        const limit = args || 10;
        return (value.length <= 10) ? value : value.substr(0, limit) + '...';
    }
}
