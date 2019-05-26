import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'temperature'
})
export class TemperatureConverterPipe implements PipeTransform {
    constructor() {
        
    }
    transform(value: any) {
        if(value && !isNaN(value.temp)){
            const currentMetric = localStorage.getItem('temperatureMetric');
            if(!currentMetric || currentMetric === 'C'){
                return value.temp.toFixed(0) + 'ºC';
            }
            if(currentMetric === 'F'){
                var tempareature = (value.temp * 32) + 1.8 ;
                return tempareature.toFixed(0) + 'ºF';
            }
        }
        return;
    }
}