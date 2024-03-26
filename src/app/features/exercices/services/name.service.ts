import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getGender(name: string, country_id: string) {
    const url = 'https://api.genderize.io';
    const params = new HttpParams({ fromObject: { name, country_id } });
    return this.httpClient.get<any>(url, { params });
  }

  getAge(name: string, country_id: string) {
    const url = 'https://api.agify.io';
    const params = new HttpParams({ fromObject: { name, country_id } });
    return this.httpClient.get<any>(url, { params });
  }
}
