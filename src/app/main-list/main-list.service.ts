import { Injectable } from "@angular/core";
import * as Cookie from "js-cookie";

@Injectable()
export class MainListService {

    constructor() { }

    public getCities() {
        return [{
            id: '1',
            name: 'Blumenau'
        }]
        // return JSON.parse(Cookie.get('cities'));
    }
}