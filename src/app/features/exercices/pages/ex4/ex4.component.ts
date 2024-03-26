import { Component, Signal, computed, effect } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NameService } from '../../services/name.service';
import { forkJoin, map } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ex4',
  templateUrl: './ex4.component.html',
  styleUrl: './ex4.component.scss'
})
export class Ex4Component {

  name: string|null = null;
  country_id: string = 'IT';

  values: any = null;

  countries!: any[];

  constructor(
    private nameService: NameService, 
    private countryService: CountryService,
    private route: ActivatedRoute,
  ) {
    this.countries = route.snapshot.data['countries']
  }

  search() {
    if(!this.name)
      return;

    forkJoin([
      this.nameService.getAge(this.name, this.country_id),
      this.nameService.getGender(this.name, this.country_id),
    ]).subscribe(([res1, res2]) => {
      this.values = { age: res1.age, genre: res2.gender }
    });
  }
}
