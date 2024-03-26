import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CountryService } from '../services/country.service';
import { map } from 'rxjs';

export const countryResolver: ResolveFn<any[]> = (route, state) => {

  const countryService = inject(CountryService);
  return countryService.getAll().pipe(map(unOrderedCountries => 
    unOrderedCountries.sort((c1: any, c2: any) => 
       c1.translations.fra.common.localeCompare(c2.translations.fra.common)
  )));
};
