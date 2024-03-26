import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CountryService {

    constructor(private readonly httpClient: HttpClient) {

    }

    getAll() {
        const url = 'https://restcountries.com/v3.1/all?fields=translations,cca2';
        return this.httpClient.get<any[]>(url, { reportProgress: true });
    }
}