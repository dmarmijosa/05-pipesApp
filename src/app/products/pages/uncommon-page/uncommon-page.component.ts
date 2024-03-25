import { Component } from '@angular/core';
import { interval, map, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  //i18nSelect
  name: string = 'Danny';
  gender: 'male' | 'female' = 'male';
  invitationMap = {
    male: 'invitado',
    female: 'invitarla',
  };

  changeCliente() {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18nPlural
  clientes: string[] = ['Danny', 'Tyler', 'Bela', 'Alan', 'Paola'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 esperando',
    other: 'tenemos # clientes esperando.',
  };

  //key value pipe
  person = {
    name: 'Danny',
    age: 32,
    address: 'Menorca',
  };

  // Async Pipe
  myObservavleTimer = interval(2000).pipe(
    tap((value) => console.log('tap:', value))
  );
  promiseValue: Promise<string> = new Promise((res, rej) => {
    setTimeout(() => {
      res('Tenemos data en la promesa');
    }, 3500);
  });
}
