import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class DataService {

    data = '';

    constructor(public http: HttpClient) {
    }


    getData(): Observable<any> {
        return this.http.get('/assets/data.json', {responseType: 'text'});
    }
}
